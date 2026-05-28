/**
 * Add sortWeight to all device language files based on English master order.
 *
 * Strategy:
 * 1. Parse the English file to assign sortWeight per category (1, 2, 3...)
 * 2. Create a map: product ID → sortWeight
 * 3. Apply the same sortWeight to each language file by matching IDs
 * 4. Products not in the English file get a high default sortWeight (999)
 *
 * Usage: node scripts/add-sort-weight.js
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = ['en', 'es', 'fr', 'ar'];
const DATA_DIR = path.join(__dirname, '..', 'data');

/**
 * Parse a devices JS file and return product blocks.
 * Handles both JS shorthand (id: "val") and JSON ("id": "val") formats.
 */
function parseFile(filepath) {
    const content = fs.readFileSync(filepath, 'utf-8');
    const products = [];

    // Match id in either JS shorthand (id: "value") or JSON format ("id": "value")
    const idRegex = /["']?id["']?\s*:\s*"([^"]+)"/gm;
    let match;

    while ((match = idRegex.exec(content)) !== null) {
        const id = match[1];

        // Find the start of the object containing this id
        let blockStart = match.index;
        while (blockStart > 0 && content[blockStart] !== '{') {
            blockStart--;
        }

        // Bracket-match forward to find the closing }
        let depth = 0;
        let blockEnd = blockStart;
        for (let i = blockStart; i < content.length; i++) {
            if (content[i] === '{') depth++;
            else if (content[i] === '}') {
                depth--;
                if (depth === 0) {
                    blockEnd = i + 1;
                    break;
                }
            }
        }

        const block = content.substring(blockStart, blockEnd);

        // Extract category
        const catMatch = block.match(/["']?category["']?\s*:\s*"([^"]+)"/m);
        const category = catMatch ? catMatch[1] : 'unknown';

        products.push({ id, category, blockStart, blockEnd, block });
    }

    return { content, products };
}

/**
 * Assign sortWeight based on category grouping.
 */
function assignWeights(products) {
    const counts = {};
    const result = [];
    for (const p of products) {
        if (!counts[p.category]) counts[p.category] = 1;
        const weight = counts[p.category]++;
        result.push({ ...p, sortWeight: weight });
    }
    return result;
}

/**
 * Build a map of id → sortWeight from the master (English) file.
 */
function buildMasterWeightMap(masterProducts) {
    const weighted = assignWeights(masterProducts);
    const map = {};
    for (const p of weighted) {
        map[p.id] = p.sortWeight;
    }
    return map;
}

/**
 * Add sortWeight to a product block.
 */
function addSortWeightToBlock(block, weight) {
    const idPattern = /^(\s*["']?id["']?\s*:\s*"[^"]+")/m;
    const idLine = block.match(idPattern);
    if (!idLine) return block;
    const indentation = idLine[0].match(/^\s*/)[0];
    const keyStyle = idLine[0].includes('"id"') ? '"sortWeight"' : 'sortWeight';
    return block.replace(idPattern, `$1,\n${indentation}  ${keyStyle}: ${weight}`);
}

function main() {
    console.log('=== Adding sortWeight to device files ===\n');

    // Parse English master
    const enFile = path.join(DATA_DIR, 'devices-en.js');
    const enParsed = parseFile(enFile);
    const masterWeights = buildMasterWeightMap(enParsed.products);
    console.log(`  en: ${enParsed.products.length} products (master)`);

    // Collect stats
    const catCounts = {};
    enParsed.products.forEach(p => {
        catCounts[p.category] = (catCounts[p.category] || 0) + 1;
    });
    console.log('  Category counts (en):', JSON.stringify(catCounts));

    // Process English file
    for (const lang of LANGUAGES) {
        const filepath = path.join(DATA_DIR, `devices-${lang}.js`);
        const raw = fs.readFileSync(filepath, 'utf-8');

        if (raw.includes('sortWeight:')) {
            console.log(`  ${lang}: sortWeight already present, skipping.`);
            continue;
        }

        const { content, products } = parseFile(filepath);
        console.log(`  ${lang}: ${products.length} products`);

        // Build replacement in reverse order
        let newContent = content;
        let addedCount = 0;
        let missingCount = 0;

        for (let i = products.length - 1; i >= 0; i--) {
            const p = products[i];
            const weight = masterWeights[p.id];
            if (weight !== undefined) {
                const newBlock = addSortWeightToBlock(p.block, weight);
                newContent = newContent.substring(0, p.blockStart) + newBlock + newContent.substring(p.blockEnd);
                addedCount++;
            } else {
                // Product not in master (English) - assign default 999
                const newBlock = addSortWeightToBlock(p.block, 999);
                newContent = newContent.substring(0, p.blockStart) + newBlock + newContent.substring(p.blockEnd);
                missingCount++;
                console.log(`    ⚠ ${p.id} not in English master, assigned sortWeight: 999`);
            }
        }

        fs.writeFileSync(filepath, newContent, 'utf-8');

        const after = fs.readFileSync(filepath, 'utf-8');
        const totalWeighted = (after.match(/sortWeight:/g) || []).length;
        console.log(`  ✓ ${lang}: sortWeight added to ${totalWeighted} products (${addedCount} from master, ${missingCount} default 999)\n`);
    }

    console.log('=== Done! ===');
    console.log('sortWeight assigned (1-based ascending per category).');
    console.log('Run build.py and verify the output.');
}

main();
