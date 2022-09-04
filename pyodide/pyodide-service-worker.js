function xml(req) {
    console.log("Patching", req);
    return XMLHttpRequest(req);
}
self.XMLHttpRequest = xml;
XMLHttpRequest = xml;
importScripts(
    "xml-http-request.js",
    "pyodide.asm.js",
    "pyodide.js"
)
var pyodide;
var source;
async function main(){
    if (!pyodide) {
        await pyodide = await loadPyodide();
        await pyodide.FS.mkdir("/courses");
        await pyodide.FS.mount(pyodide.FS.filesystems.IDBFS, {}, "/courses");
        await pyodide.FS.syncfs(true, (err) => {
            if (err) {
                console.error(err);
            }
        });
        await pyodide.globals.set("json", await pyodide.pyimport("json"));
        res = await fetch("pyodide.py");
        await pyodide.loadPackage("micropip");
        await pyodide.loadPackage("pyyaml");
        await pyodide.runPython("import micropip; micropip.install('./deps/librelingo_yaml_loader-1.6.0-py3-none-any.whl')");
        await pyodide.runPython("import micropip; micropip.install('./deps/librelingo_utils-2.5.0-py3-none-any.whl')");
        await pyodide.runPython("import micropip; micropip.install('./deps/librelingo_json_export-0.7.1-py3-none-any.whl')");
        await pyodide.runPython("import micropip; micropip.install('./deps/librelingo_types-3.1.0-py3-none-any.whl')");
        //result = await pyodide.runPython("import micropip; micropip.install('librelingo-yaml-loader')");
        source = await res.text();
        await pyodide.runPython(source);
    }
}

async function run(body){
    pyodide.globals.set("kwargs", body);
    result = await pyodide.runPythonAsync(
        "await handle(**kwargs.to_py())"
    );
    console.log(result, "r");
    pyodide.FS.syncfs((err) => {
        if (err) {
            console.error(err);
        }
    });
    return result;
}

self.addEventListener("activate", (event) => {
    event.waitUntil(main());
});

async function fetchEvent(event) {
    const json = await event.request.json();
    const result = await run(json);
    console.log("Result", result);
    const response = new Response(result);
    return response;
};

self.addEventListener("fetch", (event) => {
    if (event.request.url.endsWith("pyodide.test")) {
        return event.respondWith(fetchEvent(event));
    }
});
