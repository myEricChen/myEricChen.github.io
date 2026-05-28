/**
 * Add subcategory to all device language files based on product-to-subcategory mapping.
 *
 * Strategy:
 * 1. Define a product ID → subcategory ID mapping
 * 2. For each language file, find each product by ID and add subcategory field after category
 * 3. Products not in the mapping get a warning
 *
 * Usage: node scripts/add-subcategory.js
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = ['en', 'es', 'fr', 'ar'];
const DATA_DIR = path.join(__dirname, '..', 'data');

// Product ID → subcategory ID mapping
const PRODUCT_SUBCATEGORY = {
  // === tensile ===
  F113: 'electromechanical-tensile',
  P027: 'electromechanical-tensile',
  P028: 'electromechanical-tensile',
  P029: 'electromechanical-tensile',
  P030: 'electromechanical-tensile',
  P031: 'electromechanical-tensile',
  E027: 'electromechanical-tensile',

  // === universal ===
  M022: 'hydraulic-utm',
  P001: 'special-purpose',
  P002: 'special-purpose',
  P003: 'special-purpose',
  P004: 'special-purpose',
  P007: 'hydraulic-utm',
  P008: 'hydraulic-utm',
  P009: 'hydraulic-utm',
  P010: 'hydraulic-utm',
  P011: 'hydraulic-utm',
  P022: 'hydraulic-utm',
  P023: 'hydraulic-utm',
  P024: 'hydraulic-utm',
  P026: 'hydraulic-utm',
  E035: 'hydraulic-utm',
  F115: 'hydraulic-utm',
  F122: 'fatigue-testing',

  // === concrete ===
  P035: 'compression',
  P036: 'compression',
  P037: 'compression',
  P038: 'compression',
  P039: 'compression',
  P040: 'compression',
  P041: 'compression',
  P042: 'compression',
  C001: 'durability',
  C002: 'durability',
  C003: 'durability',
  C004: 'durability',
  C005: 'curing-specimens',
  C006: 'durability',
  C015: 'permeability',
  C016: 'curing-specimens',
  C017: 'fresh-concrete',
  C020: 'fresh-concrete',
  C021: 'fresh-concrete',
  C022: 'fresh-concrete',
  C023: 'fresh-concrete',
  C024: 'fresh-concrete',
  C025: 'fresh-concrete',
  C026: 'fresh-concrete',
  C027: 'permeability',
  C028: 'permeability',
  F114: 'durability',
  E032: 'curing-specimens',
  E033: 'curing-specimens',
  F123: 'fresh-concrete',
  E039: 'fresh-concrete',

  // === cement ===
  P043: 'strength-testing',
  P044: 'strength-testing',
  P045: 'strength-testing',
  P046: 'strength-testing',
  P047: 'strength-testing',
  P131: 'mixing-compaction',
  P132: 'physical-testing',
  D001: 'curing',
  D002: 'curing',
  D006: 'curing',
  D008: 'curing',
  D009: 'mixing-compaction',
  D010: 'mixing-compaction',
  D011: 'strength-testing',
  D013: 'strength-testing',
  D014: 'mixing-compaction',
  D015: 'physical-testing',
  D017: 'physical-testing',
  D018: 'physical-testing',
  E001: 'mixing-compaction',
  E002: 'mixing-compaction',
  E003: 'mixing-compaction',
  E004: 'mixing-compaction',
  E005: 'mixing-compaction',
  E030: 'physical-testing',
  E031: 'physical-testing',
  E034: 'physical-testing',

  // === large_machine ===
  P049: 'structural-compression',
  P050: 'structural-compression',
  P051: 'tension-relaxation',
  P052: 'bending-impact',
  P053: 'bending-impact',
  P055: 'tension-relaxation',
  F112: 'bending-impact',
  F116: 'structural-compression',
  F117: 'structural-compression',
  F118: 'structural-compression',
  F120: 'reaction-frames',
  F121: 'reaction-frames',

  // === asphalt ===
  P057: 'composition',
  P058: 'sample-preparation',
  P059: 'mix-performance',
  P062: 'mix-design',
  P063: 'sample-preparation',
  P067: 'mix-design',

  // === bitumen ===
  P061: 'ductility',
  P064: 'viscosity-density',
  P065: 'aging',
  P066: 'aging',
  P068: 'water-baths',
  P069: 'water-baths',
  P070: 'water-baths',
  P071: 'penetration-rheology',
  P072: 'penetration-rheology',
  E036: 'extraction',

  // === geotechnical ===
  P120: 'soil-permeability',
  P121: 'soil-permeability',
  P122: 'soil-compaction',
  P123: 'rock-preparation',
  P124: 'rock-preparation',
  P125: 'soil-compaction',
  P126: 'sample-preparation',
  P127: 'sample-preparation',
  P128: 'soil-classification',
  P129: 'soil-classification',
  P130: 'soil-classification',
  F111: 'soil-permeability',
  E028: 'soil-classification',
  E029: 'soil-classification',
  F119: 'soil-permeability',
  E037: 'soil-classification',
  E038: 'soil-classification',
  E040: 'soil-classification',
  E041: 'soil-compaction',
  E042: 'soil-compaction',
  E043: 'in-situ',
  E044: 'in-situ',

  // === research ===
  P133: 'environmental-chambers',
  P135: 'drying-ovens',
  P136: 'drying-ovens',
  P137: 'drying-ovens',
  P138: 'drying-ovens',
  P139: 'drying-ovens',
  P140: 'furnaces',
  P141: 'furnaces',
  P142: 'furnaces',
  P143: 'furnaces',
  P144: 'furnaces',
  P145: 'furnaces',
  P146: 'environmental-chambers',
  P147: 'environmental-chambers',
  P148: 'environmental-chambers',
  P149: 'environmental-chambers',
  P150: 'environmental-chambers',
  P151: 'aging',
};

/**
 * Add subcategory field to a product block.
 * Inserts `subcategory: "xxx"` after the `category:` line.
 */
function addSubcategoryToBlock(block, subcategory) {
  const catPattern = /^(\s*["']?category["']?\s*:\s*"[^"]+")/m;
  const catLine = block.match(catPattern);
  if (!catLine) return block;

  const indentation = catLine[0].match(/^\s*/)[0];
  const keyStyle = catLine[0].includes('"category"') ? '"subcategory"' : 'subcategory';
  return block.replace(catPattern, `$1,\n${indentation}  ${keyStyle}: "${subcategory}"`);
}

function main() {
  console.log('=== Adding subcategory to device files ===\n');

  const mapped = new Set(Object.keys(PRODUCT_SUBCATEGORY));
  console.log(`  Master mapping: ${mapped.size} products\n`);

  for (const lang of LANGUAGES) {
    const filepath = path.join(DATA_DIR, `devices-${lang}.js`);
    const raw = fs.readFileSync(filepath, 'utf-8');

    if (raw.includes('subcategory:')) {
      console.log(`  ${lang}: subcategory already present, skipping.`);
      continue;
    }

    // Parse products
    const idRegex = /["']?id["']?\s*:\s*"([^"]+)"/gm;
    const content = raw;
    const products = [];
    let match;

    while ((match = idRegex.exec(content)) !== null) {
      const id = match[1];
      let blockStart = match.index;
      while (blockStart > 0 && content[blockStart] !== '{') blockStart--;
      let depth = 0;
      let blockEnd = blockStart;
      for (let i = blockStart; i < content.length; i++) {
        if (content[i] === '{') depth++;
        else if (content[i] === '}') {
          depth--;
          if (depth === 0) { blockEnd = i + 1; break; }
        }
      }
      products.push({ id, blockStart, blockEnd, block: content.substring(blockStart, blockEnd) });
    }

    console.log(`  ${lang}: ${products.length} products`);

    // Build replacement in reverse order
    let newContent = content;
    let addedCount = 0;
    let missingCount = 0;

    for (let i = products.length - 1; i >= 0; i--) {
      const p = products[i];
      const subcategory = PRODUCT_SUBCATEGORY[p.id];
      if (subcategory !== undefined) {
        const newBlock = addSubcategoryToBlock(p.block, subcategory);
        newContent = newContent.substring(0, p.blockStart) + newBlock + newContent.substring(p.blockEnd);
        addedCount++;
      } else {
        console.log(`    ⚠ ${p.id} not in mapping, skipping`);
        missingCount++;
      }
    }

    fs.writeFileSync(filepath, newContent, 'utf-8');
    console.log(`  ✓ ${lang}: subcategory added to ${addedCount} products (${missingCount} skipped)\n`);
  }

  console.log('=== Done! ===');
}

main();
