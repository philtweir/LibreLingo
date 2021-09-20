import os
from xml.etree import ElementTree as ET
fileroot = 'skill-button-level'

def get_fresh_svg():
    with open('./skill-button-level-1.svg', 'r') as svg_file:
        svg = ET.parse(svg_file)
    root = svg.getroot()
    return root

def find_by_id(root, id_):
    return root.find(".//{http://www.w3.org/2000/svg}*[@id='" + id_ + "']")

for stage in range(6):
    root = get_fresh_svg()
    for i in range(1, 6):
        rainbow = find_by_id(root, f'rainbow-{i}')
        solid = find_by_id(root, f'solid-{i}')
        if i > stage:
            solid.set('display', 'none')
        else:
            rainbow.set('display', 'none')
    completed_layer = find_by_id(root, 'complete')
    completed_layer.set('style', 'display: none')
    ET.ElementTree(root).write(f'{fileroot}-{stage}.svg')
    os.system(f'convert -background none {fileroot}-stage-{stage}.svg {fileroot}-stage-{stage}.png')

for i in range(1, 6):
    root = get_fresh_svg()
    rainbow = find_by_id(root, f'rainbow-{i}')
    solid = find_by_id(root, f'solid-{i}')
    solid.set('display', 'none')
    rainbow.set('display', 'none')
    ET.ElementTree(root).write(f'{fileroot}-complete.svg')
    os.system(f'convert -background none {fileroot}-complete.svg {fileroot}-complete.png')
