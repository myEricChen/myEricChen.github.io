#!/usr/bin/env python3
"""
Luda Instruments Static Site Builder
=====================================
Assembles HTML pages from templates + translations + content files.

Usage:
    python build.py          # Build all pages
    python build.py --watch  # (future) Watch for changes

How it works:
    templates/        — Reusable HTML partials with {{placeholders}}
    content/{lang}/   — Per-language page content (<main> sections)
    translations.json — All per-language UI strings
    build.py          — Assembles everything into the final HTML files
"""

import json
import os
import shutil
import re

# ── Paths ──────────────────────────────────────────────────────────
ROOT = os.path.dirname(os.path.abspath(__file__))
TEMPLATES = os.path.join(ROOT, 'templates')
CONTENT = os.path.join(ROOT, 'content')

LANGUAGES = ['en', 'es', 'fr', 'ar']

# ── Page type definitions ──────────────────────────────────────────
PAGES = {
    'home': {
        'head': 'head-home.html',
        'scripts': 'scripts-home.html',
        'has_modal': True,
        'content_file': 'home-main.html',
    },
    'products': {
        'head': 'head.html',
        'scripts': 'scripts-products.html',
        'css_extra': '<link rel="stylesheet" href="/products.css">',
        'content_file': 'products-main.html',
    },
    'product-detail': {
        'head': 'head.html',
        'scripts': 'scripts-product-detail.html',
        'css_extra': '<link rel="stylesheet" href="/product-detail.css">',
        'content_file': 'product-detail-main.html',
    },
    'contact': {
        'head': 'head.html',
        'scripts': 'scripts-contact.html',
        'css_extra': '<link rel="stylesheet" href="/contact.css">',
        'content_file': 'contact-main.html',
    },
    'search': {
        'head': 'head.html',
        'scripts': 'scripts-search.html',
        'css_extra': '<link rel="stylesheet" href="/products.css"><link rel="stylesheet" href="/search.css">',
        'content_file': 'search-main.html',
    },
}

# ── File I/O helpers ────────────────────────────────────────────────

def read(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()


def write(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'  ✓ {os.path.relpath(path, ROOT)}')


def substitute(template, subs):
    """Replace {{key}} placeholders with values from subs dict."""
    result = template
    for key, value in subs.items():
        result = result.replace('{{' + key + '}}', str(value))
    return result


# ── Build helpers ──────────────────────────────────────────────────

def load_translations():
    return json.loads(read(os.path.join(TEMPLATES, 'translations.json')))


def get_lang_config(lang):
    """Return language-specific HTML attributes."""
    dir_attr = ' dir="rtl"' if lang == 'ar' else ''
    rtl_css = '\n    <link rel="stylesheet" href="/home-rtl.css" media="screen">' if lang == 'ar' else ''
    modal_dir = ' dir="rtl"' if lang == 'ar' else ''
    return dir_attr, rtl_css, modal_dir


def build_subs(translations, lang, page_type, lang_prefix, current_page):
    """
    Build a substitution dictionary for all templates.
    lang_prefix: '' for root-level pages (English only), '/en' etc. for language pages.
    """
    t = translations[lang]
    dir_attr, rtl_css, modal_dir = get_lang_config(lang)

    # Build paths
    if lang_prefix:
        home_path = f'{lang_prefix}/index.html'
        equipment_path = f'{lang_prefix}/products.html'
        contact_path = f'{lang_prefix}/contact.html'
    else:
        home_path = '/index.html'
        equipment_path = '/products.html'
        contact_path = '/contact.html'

    # Active state for nav
    home_active = ' class="active"' if page_type == 'home' else ''
    contact_active = ' class="active"' if page_type == 'contact' else ''

    # Title and meta description
    title_key = f'{page_type.replace("-", "_")}_title'
    desc_key = f'{page_type.replace("-", "_")}_description'

    title = t.get(title_key, 'Luda Instruments')
    meta_description = t.get(desc_key, '')

    # Canonical URL
    canonical_filename = 'index.html' if page_type == 'home' else f'{page_type.replace("_", "-")}.html'
    if lang_prefix:
        canonical_url = f'https://www.ludatest.com{lang_prefix}/{canonical_filename}'
    else:
        canonical_url = f'https://www.ludatest.com/en/{canonical_filename}'

    return {
        # Language attributes
        'lang': lang,
        'dir': dir_attr,
        'rtl_css': rtl_css,
        'modal_dir': modal_dir,

        # Page metadata
        'title': title,
        'meta_description': meta_description,
        'canonical_url': canonical_url,

        # Navigation
        'tagline': t['tagline'],
        'nav_home': t['nav_home'],
        'nav_equipment': t['nav_equipment'],
        'nav_contact': t['nav_contact'],
        'lang_label': t['lang_label'],
        'home_path': home_path,
        'equipment_path': equipment_path,
        'contact_path': contact_path,
        'home_active': home_active,
        'contact_active': contact_active,
        'current_page': current_page,

        # Footer
        'person_eric_title': t['person_eric_title'],
        'person_candy_title': t['person_candy_title'],
        'person_angela_title': t['person_angela_title'],
        'copyright': t['copyright'],

        # Catalog modal
        'modal_title': t['modal_title'],
        'modal_name_label': t['modal_name_label'],
        'modal_email_label': t['modal_email_label'],
        'modal_company_label': t['modal_company_label'],
        'modal_country_label': t['modal_country_label'],
        'modal_submit': t['modal_submit'],
        'modal_footer': t['modal_footer'],

        # Loading text
        'loading': t['loading'],
        'loading_product': t['loading_product'],

        # Thank you page
        'thank_you_title': t['thank_you_title'],
        'thank_you_h1': t['thank_you_h1'],
        'thank_you_message': t['thank_you_message'],
        'thank_you_return': t['thank_you_return'],

        # CSS extra per page type
        'css_extra': '',  # Will be set per page
    }


def assemble_page(subs, page_config, template_dir):
    """
    Assemble a full HTML page from partials.
    Returns the complete HTML string.
    """
    # Read templates
    head = read(os.path.join(template_dir, page_config['head']))
    header = read(os.path.join(template_dir, 'header.html'))
    footer = read(os.path.join(template_dir, 'footer.html'))
    scripts = read(os.path.join(template_dir, page_config['scripts']))

    # Handle catalog modal for homepage
    modal_html = ''
    if page_config.get('has_modal'):
        modal_html = read(os.path.join(template_dir, 'catalog-modal.html'))

    # Build page parts
    parts = []

    # 1. Head (includes DOCTYPE, <html>, <head>)
    parts.append(substitute(head, subs))

    # 2. Header (includes <body> start, floating-bar, <header>)
    parts.append(substitute(header, subs))

    # 3. Main content
    parts.append('{{MAIN_CONTENT}}')

    # 4. Footer
    parts.append(substitute(footer, subs))

    # 5. Catalog modal (if needed)
    if modal_html:
        parts.append(substitute(modal_html, subs))

    # 6. Scripts (includes closing </body></html>)
    parts.append(substitute(scripts, subs))

    return '\n'.join(parts)


# ── Main build logic ────────────────────────────────────────────────

def build():
    print('=' * 60)
    print('  Luda Instruments — Static Site Builder')
    print('=' * 60)

    translations = load_translations()
    template_dir = TEMPLATES

    # Load template partials once
    header_root = read(os.path.join(template_dir, 'header-root.html'))
    thank_you_tpl = read(os.path.join(template_dir, 'thank-you.html'))

    # Track generated files
    generated = []

    # ── Language-specific pages (en/, es/, fr/, ar/) ──
    for lang in LANGUAGES:
        lang_prefix = f'/{lang}'
        print(f'\n── {lang.upper()} ({lang_prefix}/) ──')

        for page_type, page_config in PAGES.items():
            current_page = f'{page_type}.html'
            if page_type == 'home':
                current_page = 'index.html'

            # Determine output path
            if page_type == 'home':
                output_path = os.path.join(ROOT, lang, 'index.html')
            else:
                output_path = os.path.join(ROOT, lang, f'{page_type}.html')

            # Build substitutions
            subs = build_subs(translations, lang, page_type, lang_prefix, current_page)
            subs['css_extra'] = page_config.get('css_extra', '')

            # Assemble page
            html = assemble_page(subs, page_config, template_dir)

            # Read and inject main content
            content_path = os.path.join(CONTENT, lang, page_config['content_file'])
            if os.path.exists(content_path):
                main_content = read(content_path)
                main_content = substitute(main_content, subs)
                html = html.replace('{{MAIN_CONTENT}}', main_content)
            else:
                html = html.replace('{{MAIN_CONTENT}}', '')

            write(output_path, html)
            generated.append(output_path)

        # ── Thank-you page ──
        thank_you_path = os.path.join(ROOT, lang, 'thank-you.html')
        subs = build_subs(translations, lang, 'thank_you', lang_prefix, 'thank-you.html')
        html = substitute(thank_you_tpl, subs)
        write(thank_you_path, html)
        generated.append(thank_you_path)

    # ── Root-level English pages (backward compatibility, no lang switcher) ──
    print(f'\n── Root-level English (/) ──')

    root_pages = ['products', 'product-detail', 'contact']

    # Root-level English uses 'en' translations but no lang prefix
    for page_type in root_pages:
        page_config = PAGES[page_type]
        current_page = f'{page_type}.html'

        output_path = os.path.join(ROOT, f'{page_type}.html')

        subs = build_subs(translations, 'en', page_type, '', current_page)
        subs['css_extra'] = page_config.get('css_extra', '')

        # Use root header (no language switcher)
        head = read(os.path.join(template_dir, page_config['head']))
        footer = read(os.path.join(template_dir, 'footer.html'))
        scripts = read(os.path.join(template_dir, page_config['scripts']))

        parts = []
        parts.append(substitute(head, subs))
        parts.append(substitute(header_root, subs))
        parts.append('{{MAIN_CONTENT}}')
        parts.append(substitute(footer, subs))
        parts.append(substitute(scripts, subs))

        html = '\n'.join(parts)

        # Read and inject main content
        content_path = os.path.join(CONTENT, 'en', page_config['content_file'])
        if os.path.exists(content_path):
            main_content = read(content_path)
            main_content = substitute(main_content, subs)
            html = html.replace('{{MAIN_CONTENT}}', main_content)

        write(output_path, html)
        generated.append(output_path)

    # ── Root thank-you page (English, no lang prefix) ──
    thank_you_root = os.path.join(ROOT, 'thank-you.html')
    subs = build_subs(translations, 'en', 'thank_you', '', 'thank-you.html')
    html = substitute(thank_you_tpl, subs)
    write(thank_you_root, html)
    generated.append(thank_you_root)

    print(f'\n{"=" * 60}')
    print(f'  Build complete! {len(generated)} files generated.')
    print(f'  Source: templates/ + content/ + translations.json')
    print(f'  To modify: edit template files, content files, or translations.json')
    print(f'  Then run: python build.py')
    print(f'{"=" * 60}')


if __name__ == '__main__':
    build()
