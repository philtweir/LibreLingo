import json
import datetime
import inspect
import yaml
import pyodide
import os
import sys

from pathlib import Path
import collections
from librelingo_json_export.export import export_course
from librelingo_yaml_loader import load_course

COURSE_ROOT = "/courses/available"
EXPORT_ROOT = "/courses/export"


Settings = collections.namedtuple(
    "Settings",
    [
        "dry_run",
    ],
)

DEFAULT_SETTINGS = Settings(
    dry_run=False,
)

def ensure_output_directory(output_path, settings):
    if not settings.dry_run:
        Path(output_path).mkdir(parents=True, exist_ok=True)

async def fetch_yaml_file(remote_root, local_root, filepath, loaded_assets):
    course_data_req = await pyodide.http.pyfetch(f"{remote_root}/{filepath}")
    if not course_data_req.ok:
        raise RuntimeError(f"Could not load {filepath}: {course_data_req.status}")

    course_data = await course_data_req.string()
    course = yaml.safe_load(course_data)
    with open(local_root / filepath, "w") as course_f:
        course_f.write(course_data)

    loaded_assets[(local_root / filepath).relative_to(COURSE_ROOT).as_posix()] = course_data
    return course

async def _command_import(input_path):
    """
    Load a YAML course into JSON files to be consumed by the web app.
    """
    settings = Settings(dry_run=False)

    loaded_assets = {}
    root = Path(COURSE_ROOT) / input_path
    root.mkdir(exist_ok=True, parents=True)
    remote_root = f"../courses/{input_path}"

    course = await fetch_yaml_file(remote_root, root, "course.yaml", loaded_assets)
    for module in course["Modules"]:
        (root / module / "skills").mkdir(exist_ok=True, parents=True)
        module_data = await fetch_yaml_file(remote_root, root, f"{module}/module.yaml", loaded_assets)

        for skill in module_data["Skills"]:
            skill = await fetch_yaml_file(remote_root, root, f"{module}/skills/{skill}", loaded_assets)

    course = load_course(root.as_posix())

    index_json = root / "index.json"
    key = index_json.relative_to(COURSE_ROOT).as_posix()
    loaded_assets[key] = None
    loaded_assets[key] = json.dumps(list(loaded_assets.keys()))
    with index_json.open("w") as index_f:
        index_f.write(loaded_assets[key])

    with (root / "mtime").open("w") as mtime_f:
        mtime_f.write(datetime.datetime.utcnow().isoformat())

    return list(loaded_assets.keys())

async def _command_compile(input_path, output_path, dry_run):
    """
    Convert a YAML course into JSON files to be consumed by the web app.
    """
    settings = Settings(
        dry_run=dry_run,
    )

    root = Path(COURSE_ROOT) / input_path
    course = load_course(root.as_posix())
    target = Path(EXPORT_ROOT) / output_path
    ensure_output_directory(target, settings)
    export_course(target, course, settings)
    with (target / "mtime").open("w") as mtime_f:
        mtime_f.write(datetime.datetime.utcnow().isoformat())
    return True

class FileTreeNode:
    def __init__(self, name, children, destination, highlighted=False):
        self.name = name
        self.children = children
        self.destination = destination
        self.highlighted = highlighted

    @classmethod
    def req(cls, fn, d):
        return True

    def to_filetree_json(self):
        return {
            "text": self.name,
            "destination": self.destination,
            "state": {
                "opened": True,
                "selected": self.highlighted
            },
            "icon": False,
            "children": [
                c.to_filetree_json() for c in self.children
            ]
        }

class ModuleFileTreeNode(FileTreeNode):
    def to_filetree_json(self):
        dct = super().to_filetree_json()
        dct["icon"] = "fa fa-object-group"
        return dct

class CourseFileTreeNode(FileTreeNode):
    @classmethod
    def req(cls, fn, d):
        return fn not in ("index.json", "mtime")

    def to_filetree_json(self):
        dct = super().to_filetree_json()
        del dct["icon"]
        return dct

async def filenames_to_tree(highlighted_files):
    filenames = await get_files()
    print('fn', filenames)
    root = {}
    for fn in filenames:
        path = fn.split('/')
        node = root
        for p in path:
            node = node.setdefault(p, {})
        node["_"] = fn
    print(root, "ROOT")

    def _fn_to_node(dct, fn, req=None):
        if "index.json" in dct:
            cls = CourseFileTreeNode
        elif "module.yaml" in dct:
            cls = ModuleFileTreeNode
        else:
            cls = FileTreeNode
        if not req:
            req = cls.req

        if "_" not in dct:
            children = [
                _fn_to_node(dct[c], c)
                for c in dct if req(c, dct[c])
            ]
            destination = None
        else:
            children = []
            destination = dct["_"]

        return cls(fn, children, destination, highlighted=destination in highlighted_files)

    return _fn_to_node(root, "Courses", lambda _, d: "index.json" in d)

async def filenames_to_list(course):
    files = await filenames_to_tree([])
    print([file.name for file in files.children])
    course_root = [file for file in files.children if file.name == course][0]
    agg = {}
    def _reduce_children(file):
        for child in file.children:
            if child.destination:
                agg[child.destination] = child.name
            if child.children:
                _reduce_children(child)
    _reduce_children(course_root)
    return agg

async def filenames_to_filetree_json(highlighted_files):
    return (await filenames_to_tree(highlighted_files)).to_filetree_json()

async def get_file_content(filename):
    root = Path(COURSE_ROOT)
    with (root / filename).open("r") as course_file:
        return course_file.read()

async def get_course_as_yaml_bundle(course):
    filelist = await filenames_to_list(course)
    yaml_bundle = {}
    for file in filelist.keys():
        yaml_bundle[file] = yaml.safe_load(await get_file_content(file))
    yaml_bundle["_librelingoBundle"] = True
    return yaml.dump(yaml_bundle)

async def save_file(filename, content):
    root = Path(COURSE_ROOT)
    with (root / filename).open("w") as course_file:
        course_file.write(content)
    course = root / Path(filename).parts[0]
    with (course / "mtime").open("w") as mtime_f:
        mtime_f.write(datetime.datetime.utcnow().isoformat())

async def get_exported():
    root = Path(EXPORT_ROOT)
    course_root = Path(COURSE_ROOT)
    root.mkdir(parents=True, exist_ok=True)

    def _is_stale(path):
        course = (course_root / path.relative_to(EXPORT_ROOT).parts[0])
        if not course.exists():
            return True

        mtimes = []
        for cmp in (course, path):
            with open(cmp / "mtime") as mtime_f:
                mtimes.append(datetime.datetime.fromisoformat(mtime_f.read()))
        return mtimes[0] > mtimes[1]

    return [
        [path.relative_to(EXPORT_ROOT).as_posix(), _is_stale(path)]
        for path in root.iterdir()
        if path.is_dir()
    ]

async def get_files():
    root = Path(COURSE_ROOT)
    return [
        path.relative_to(COURSE_ROOT).as_posix()
        for path in root.glob("**/*")
        if path.is_file()
    ]

async def handle(command=None, **kwargs):
    if command in globals():
        fn = globals()[command]
        #args = []
        #for param in inspect.signature(fn).parameters:
        #    if param in kwargs:
        #        args.append(kwargs[param])
        #        del kwargs[param.name]
        #    else:
        #        break
        return json.dumps(await fn(**kwargs))

    raise RuntimeError(f"Command {command} unknown!")

