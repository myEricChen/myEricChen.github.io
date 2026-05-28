const fs = require('fs');
const path = require('path');

// Subcategory translations
const names = {
  es: {
    'electromechanical-tensile': 'Máquinas de Ensayo Universales Electrónicas',
    'hydraulic-utm': 'Máquinas de Ensayo Universales Hidráulicas',
    'special-purpose': 'Máquinas de Ensayo para Propósitos Especiales',
    'fatigue-testing': 'Máquinas de Ensayo de Fatiga',
    'compression': 'Máquinas de Ensayo de Compresión',
    'fresh-concrete': 'Ensayos de Hormigón Fresco',
    'durability': 'Ensayos de Durabilidad y Permeabilidad',
    'permeability': 'Ensayos de Permeabilidad y Cloruros',
    'curing-specimens': 'Curado y Preparación de Probetas',
    'strength-testing': 'Ensayos de Resistencia del Cemento',
    'mixing-compaction': 'Equipos de Mezclado y Compactación',
    'curing': 'Cámaras y Cajas de Curado',
    'physical-testing': 'Equipos de Ensayos Físicos',
    'structural-compression': 'Ensayos de Compresión y Corte Estructural',
    'tension-relaxation': 'Ensayos de Tracción, Relajación y Torque',
    'bending-impact': 'Ensayos de Flexión e Impacto',
    'reaction-frames': 'Marcos de Reacción y Sistemas de Carga',
    'environmental-chambers': 'Cámaras Ambientales y Climáticas',
    'drying-ovens': 'Estufas de Secado y Calentamiento',
    'furnaces': 'Hornos Mufla',
    'aging': 'Cámaras de Envejecimiento',
    'mix-design': 'Diseño de Mezclas y Ensayo Marshall',
    'mix-performance': 'Ensayos de Rendimiento de Mezclas',
    'composition': 'Análisis de Composición de Asfalto',
    'sample-preparation': 'Equipos de Preparación de Muestras',
    'penetration-rheology': 'Penetración y Punto de Reblandecimiento',
    'ductility': 'Ensayo de Ductilidad',
    'viscosity-density': 'Viscosidad y Densidad',
    'water-baths': 'Baños de Agua y Control de Temperatura',
    'extraction': 'Extracción y Centrífuga',
    'soil-permeability': 'Ensayos de Permeabilidad de Suelos',
    'soil-compaction': 'Compactación de Suelos y Ensayo CBR',
    'soil-classification': 'Clasificación de Suelos',
    'rock-preparation': 'Preparación de Muestras de Roca',
    'in-situ': 'Equipos de Ensayos In-Situ'
  },
  fr: {
    'electromechanical-tensile': "Machines d'essai universelles électroniques",
    'hydraulic-utm': "Machines d'essai universelles hydrauliques",
    'special-purpose': "Machines d'essai spéciales",
    'fatigue-testing': "Machines d'essai de fatigue",
    'compression': "Machines d'essai de compression",
    'fresh-concrete': 'Essais du béton frais',
    'durability': 'Essais de durabilité et perméabilité',
    'permeability': 'Essais de perméabilité et chlorures',
    'curing-specimens': 'Cure et préparation des éprouvettes',
    'strength-testing': 'Essais de résistance du ciment',
    'mixing-compaction': 'Équipements de malaxage et compactage',
    'curing': 'Chambres et caisses de cure',
    'physical-testing': "Équipements d'essais physiques",
    'structural-compression': 'Essais de compression et cisaillement structurels',
    'tension-relaxation': 'Essais de traction, relaxation et couple',
    'bending-impact': "Essais de flexion et d'impact",
    'reaction-frames': 'Cadres de réaction et systèmes de charge',
    'environmental-chambers': 'Chambres environnementales et climatiques',
    'drying-ovens': 'Étuves de séchage et chauffage',
    'furnaces': 'Fours à moufle',
    'aging': "Chambres de vieillissement",
    'mix-design': 'Formulation et essai Marshall',
    'mix-performance': 'Essais de performance des mélanges',
    'composition': "Analyse de composition des enrobés",
    'sample-preparation': "Équipements de préparation d'échantillons",
    'penetration-rheology': 'Pénétration et point de ramollissement',
    'ductility': 'Essai de ductilité',
    'viscosity-density': 'Viscosité et densité',
    'water-baths': 'Bains-marie et contrôle de température',
    'extraction': 'Extraction et centrifugation',
    'soil-permeability': 'Essais de perméabilité des sols',
    'soil-compaction': 'Compactage des sols et essai CBR',
    'soil-classification': 'Classification des sols',
    'rock-preparation': "Préparation d'échantillons de roche",
    'in-situ': "Équipements d'essais in-situ"
  },
  ar: {
    'electromechanical-tensile': 'آلات اختبار عالمية إلكترونية',
    'hydraulic-utm': 'آلات اختبار عالمية هيدروليكية',
    'special-purpose': 'آلات اختبار للأغراض الخاصة',
    'fatigue-testing': 'آلات اختبار الكلال',
    'compression': 'آلات اختبار الضغط',
    'fresh-concrete': 'اختبار الخرسانة الطازجة',
    'durability': 'اختبار المتانة والنفاذية',
    'permeability': 'اختبار النفاذية والكلوريد',
    'curing-specimens': 'المعالجة وتحضير العينات',
    'strength-testing': 'اختبار قوة الأسمنت',
    'mixing-compaction': 'معدات الخلط والدمك',
    'curing': 'غرف وصناديق المعالجة',
    'physical-testing': 'معدات الاختبارات الفيزيائية',
    'structural-compression': 'اختبار الضغط والقص الإنشائي',
    'tension-relaxation': 'اختبار الشد والاسترخاء والعزم',
    'bending-impact': 'اختبار الانحناء والصدم',
    'reaction-frames': 'إطارات رد الفعل وأنظمة التحميل',
    'environmental-chambers': 'غرف بيئية ومناخية',
    'drying-ovens': 'أفران تجفيف وتسخين',
    'furnaces': 'أفران دثرية',
    'aging': 'غرف التعتيق',
    'mix-design': 'تصميم الخلطات واختبار مارشال',
    'mix-performance': 'اختبار أداء الخلطات',
    'composition': 'تحليل تركيب الأسفلت',
    'sample-preparation': 'معدات تحضير العينات',
    'penetration-rheology': 'الاختراق ونقطة التليين',
    'ductility': 'اختبار المطيلية',
    'viscosity-density': 'اللزوجة والكثافة',
    'water-baths': 'حمامات مائية والتحكم بدرجة الحرارة',
    'extraction': 'الاستخلاص والطرد المركزي',
    'soil-permeability': 'اختبار نفاذية التربة',
    'soil-compaction': 'دمك التربة واختبار CBR',
    'soil-classification': 'تصنيف التربة',
    'rock-preparation': 'تحضير عينات الصخور',
    'in-situ': 'معدات الاختبار الحقلي'
  }
};

// Category-to-subcategory mapping (same IDs for all languages)
const catSubMap = {
  tensile: ['electromechanical-tensile'],
  universal: ['hydraulic-utm', 'special-purpose', 'fatigue-testing'],
  concrete: ['compression', 'fresh-concrete', 'durability', 'permeability', 'curing-specimens'],
  cement: ['strength-testing', 'mixing-compaction', 'curing', 'physical-testing'],
  large_machine: ['structural-compression', 'tension-relaxation', 'bending-impact', 'reaction-frames'],
  research: ['environmental-chambers', 'drying-ovens', 'furnaces', 'aging'],
  asphalt: ['mix-design', 'mix-performance', 'composition', 'sample-preparation'],
  bitumen: ['penetration-rheology', 'ductility', 'aging', 'viscosity-density', 'water-baths', 'extraction'],
  geotechnical: ['soil-permeability', 'soil-compaction', 'soil-classification', 'rock-preparation', 'in-situ', 'sample-preparation']
};

function addSubcategories(filepath, lang) {
  let content = fs.readFileSync(filepath, 'utf-8');
  const langNames = names[lang];

  for (const [catId, subIds] of Object.entries(catSubMap)) {
    const subJson = subIds.map(s => {
      const name = langNames[s] || s;
      return `            { id: "${s}", name: "${name}" }`;
    }).join(',\n');

    const injectStr = ',\n        subcategories: [\n' + subJson + '\n        ]';

    // Find the icon line for this category and add subcategories after it
    const iconRegex = new RegExp('(id:\\s*"' + catId + '"[\\s\\S]*?icon:\\s*"/assets/series/[^"]+\\.jpg")(\\s*\\s*)', 'm');
    const match = content.match(iconRegex);
    if (match) {
      content = content.replace(iconRegex, '$1' + injectStr + '      ');
    } else {
      console.log('  WARNING: Could not find category "' + catId + '" in ' + filepath);
    }
  }

  fs.writeFileSync(filepath, content, 'utf-8');
  console.log('Updated ' + path.basename(filepath) + ' (' + lang + ')');
}

const dir = 'D:/projects_files/PythonProjects/GITHUB_claude/data';
addSubcategories(path.join(dir, 'categories-es.js'), 'es');
addSubcategories(path.join(dir, 'categories-fr.js'), 'fr');
addSubcategories(path.join(dir, 'categories-ar.js'), 'ar');
console.log('Done!');
