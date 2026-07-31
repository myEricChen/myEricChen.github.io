#!/usr/bin/env python3
"""Batch append voltage customization note to all 380V values in JS data files."""

import re
import os

ROOT = r'D:\projects_files\PythonProjects\GithubPages\myEricChen.github.io\data'

SUFFIX = {
    'en': ' (Customizable to other voltage/frequency)',
    'es': ' (Personalizable a otro voltaje/frecuencia)',
    'fr': ' (Personnalisable à d\'autres tensions/fréquences)',
    'ar': ' (قابل للتخصيص لجهد/تردد آخر)',
}

FILES = [
    'devices-detail-{lang}.js',
    'devices-{lang}.js',
]

def process_file(filepath, suffix):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if suffix already present
    if suffix in content:
        print(f'  SKIP (already has suffix): {os.path.basename(filepath)}')
        return 0

    count = 0

    def replace(m):
        nonlocal count
        count += 1
        return f'{m.group(1)}{m.group(2)}{suffix}{m.group(3)}'

    # Match: value: "..." or "value": "..." where value contains 380V (case insensitive)
    # Uses 380\s*V to avoid matching dimension values like "380×380×420mm"
    pattern = re.compile(r'("?value"?\s*:\s*")([^"]*380\s*V[^"]*)(")', re.IGNORECASE)
    content = pattern.sub(replace, content)

    if count > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'  {os.path.basename(filepath)}: {count} replacements')
    else:
        print(f'  NO MATCH: {os.path.basename(filepath)}')

    return count


total = 0
for lang in ['en', 'es', 'fr', 'ar']:
    print(f'\n── {lang.upper()} ──')
    for file_template in FILES:
        filepath = os.path.join(ROOT, file_template.format(lang=lang))
        total += process_file(filepath, SUFFIX[lang])

print(f'\n{"=" * 50}')
print(f'  Total: {total} replacements across all files')
