#!/usr/bin/env python3
"""
Split devices-{lang}.js into two files:

  devices-list-{lang}.js   — fields needed by products.html / search.html (lightweight)
  devices-detail-{lang}.js — specs/features/customized keyed by device id (detail page only)

Usage: python scripts/split-devices.py
"""

import os
import re
import json
import sys

try:
    import json5
except ImportError:
    print("Please install json5: pip install json5")
    sys.exit(1)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT, 'data')
LANGUAGES = ['en', 'es', 'fr', 'ar']

# Fields to keep in the list file (used by products, search pages)
LIST_FIELDS = {
    'id', 'sortWeight', 'name', 'suffixName', 'model',
    'category', 'subcategory', 'thumbnail', 'description',
    'standards', 'hasVideo', 'isNew'
}

# Fields to move to the detail file (used only by product-detail page)
DETAIL_FIELDS = {'specifications', 'features', 'customized'}


def parse_js(path):
    """Parse a JS file containing window.ludaData.devices = [...]"""
    content = open(path, 'r', encoding='utf-8').read()

    # Find the start of the array after window.ludaData.devices =
    match = re.search(r'window\.ludaData\.devices\s*=\s*', content)
    if not match:
        raise ValueError(f"Cannot find window.ludaData.devices in {path}")

    arr_start = match.end()
    # Bracket-count to find matching close bracket
    depth = 0
    arr_end = arr_start
    for i in range(arr_start, len(content)):
        if content[i] == '[':
            depth += 1
        elif content[i] == ']':
            depth -= 1
            if depth == 0:
                arr_end = i + 1
                break

    raw = content[arr_start:arr_end]

    # Clean trailing commas before } and ]
    raw = re.sub(r',\s*}', '}', raw)
    raw = re.sub(r',\s*]', ']', raw)

    return json5.loads(raw)


def write_js(path, devices):
    """Write devices array as window.ludaData.devices = [...]"""
    arr = json5.dumps(devices, indent=2, ensure_ascii=False)
    out = f"window.ludaData = window.ludaData || {{}};\nwindow.ludaData.devices = {arr};\n"
    open(path, 'w', encoding='utf-8').write(out)
    print(f"  -> {os.path.basename(path)} ({len(devices)} devices)")


def write_detail_js(path, detail_map):
    """Write detail data as window.ludaData.deviceDetails = {id: {...}, ...}"""
    obj = json5.dumps(detail_map, indent=2, ensure_ascii=False)
    out = f"window.ludaData = window.ludaData || {{}};\nwindow.ludaData.deviceDetails = {obj};\n"
    open(path, 'w', encoding='utf-8').write(out)
    size_kb = os.path.getsize(path) / 1024
    print(f"  -> {os.path.basename(path)} ({len(detail_map)} detail entries, {size_kb:.0f} KB)")


def split_lang(lang):
    print(f"\n{lang.upper()}:")
    src = os.path.join(DATA_DIR, f'devices-{lang}.js')
    if not os.path.exists(src):
        print(f"  SKIP: {src} not found")
        return

    devices = parse_js(src)

    list_devices = []
    detail_map = {}

    for dev in devices:
        list_entry = {}
        detail_entry = {}

        for key, value in dev.items():
            if key in LIST_FIELDS:
                list_entry[key] = value
            elif key in DETAIL_FIELDS:
                # Only include non-empty values
                if value and (not isinstance(value, list) or len(value) > 0):
                    detail_entry[key] = value
            else:
                # Unknown keys go to list (keep them in circulation but don't bloat detail)
                list_entry[key] = value

        list_devices.append(list_entry)

        dev_id = dev.get('id')
        if dev_id and detail_entry:
            detail_map[dev_id] = detail_entry

    # Write list file
    list_path = os.path.join(DATA_DIR, f'devices-list-{lang}.js')
    write_js(list_path, list_devices)

    # Write detail file
    detail_path = os.path.join(DATA_DIR, f'devices-detail-{lang}.js')
    write_detail_js(detail_path, detail_map)


def main():
    print("=" * 60)
    print("  Splitting devices data into list + detail files")
    print("=" * 60)

    for lang in LANGUAGES:
        split_lang(lang)

    print(f"\n{'=' * 60}")
    print("  Done. Generated files:")
    print("    devices-list-{lang}.js  — for products.html, search.html")
    print("    devices-detail-{lang}.js — for product-detail.html")
    print(f"{'=' * 60}")


if __name__ == '__main__':
    main()
