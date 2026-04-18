#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re
import json
from pathlib import Path

try:
    import json5
except ImportError:
    print("请安装 json5: pip install json5")
    exit(1)

def parse_js_data(js_path):
    """从 JS 文件中提取 window.ludaData 对象，返回 categories 和 devices"""
    content = Path(js_path).read_text(encoding='utf-8')
    # 查找 window.ludaData = { ... } 或直接 { ... }
    match = re.search(r'window\.ludaData\s*=\s*({[\s\S]*?});?\s*$', content)
    if not match:
        # 尝试直接找最外层大括号
        match = re.search(r'({[\s\S]*})', content)
    if not match:
        raise ValueError("无法找到 ludaData 对象")
    obj_str = match.group(1)
    # 清理尾随逗号
    obj_str = re.sub(r',\s*}', '}', obj_str)
    obj_str = re.sub(r',\s*]', ']', obj_str)
    try:
        data = json5.loads(obj_str)
    except Exception as e:
        print("解析失败，请检查 JS 文件格式")
        raise e
    return data.get('categories', []), data.get('devices', [])

def generate_sitemap(categories, devices, base_url='https://www.ludatest.com', languages=['en', 'es', 'fr', 'ar'], lastmod='2025-04-18'):
    """生成 sitemap.xml 内容"""
    lines = []
    lines.append('<?xml version="1.0" encoding="UTF-8"?>')
    lines.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">')
    
    # 首页（每个语言）
    for lang in languages:
        lines.append(f'''
    <url>
        <loc>{base_url}/{lang}/index.html</loc>
        <lastmod>{lastmod}</lastmod>
        <priority>1.0</priority>
        <xhtml:link rel="alternate" hreflang="en" href="{base_url}/en/index.html"/>
        <xhtml:link rel="alternate" hreflang="es" href="{base_url}/es/index.html"/>
        <xhtml:link rel="alternate" hreflang="fr" href="{base_url}/fr/index.html"/>
        <xhtml:link rel="alternate" hreflang="ar" href="{base_url}/ar/index.html"/>
        <xhtml:link rel="alternate" hreflang="x-default" href="{base_url}/en/index.html"/>
    </url>
    ''')
    
    # 产品系列页（每个分类，每个语言）
    for cat in categories:
        cat_id = cat.get('id')
        if not cat_id:
            continue
        for lang in languages:
            lines.append(f'''
    <url>
        <loc>{base_url}/{lang}/products.html?category={cat_id}</loc>
        <priority>0.9</priority>
    </url>
    ''')
    
    # 产品详情页（每个设备，每个语言）
    for dev in devices:
        dev_id = dev.get('id')
        if not dev_id:
            continue
        for lang in languages:
            lines.append(f'''
    <url>
        <loc>{base_url}/{lang}/product-detail.html?id={dev_id}</loc>
        <priority>0.8</priority>
    </url>
    ''')
    
    # 联系页面（每个语言）
    for lang in languages:
        lines.append(f'''
    <url>
        <loc>{base_url}/{lang}/contact.html</loc>
        <priority>0.7</priority>
    </url>
    ''')
    
    lines.append('</urlset>')
    return '\n'.join(lines)

def main():
    js_file = r'd:\projects_files\PythonProjects\GithubPages\myEricChen.github.io\data\data-en.js'   # 根据实际路径调整
    output_file = 'sitemap.xml'
    try:
        categories, devices = parse_js_data(js_file)
        print(f"找到 {len(categories)} 个分类，{len(devices)} 个产品")
        sitemap_content = generate_sitemap(categories, devices)
        Path(output_file).write_text(sitemap_content, encoding='utf-8')
        print(f"已生成 {output_file}")
    except Exception as e:
        print(f"生成失败: {e}")

if __name__ == '__main__':
    main()