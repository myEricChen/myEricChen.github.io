/**
 * Script to add description field to each subcategory in all 4 language files.
 * Usage: node scripts/add-subcategory-descriptions.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const FILES = [
    'data/categories-en.js',
    'data/categories-es.js',
    'data/categories-fr.js',
    'data/categories-ar.js',
];

// Descriptions for each subcategory ID, keyed by language
const DESCRIPTIONS = {
    en: {
        'electromechanical-tensile': 'Electronic universal testing machines for tensile, compression, bending, and flexural testing of materials.',
        'hydraulic-utm': 'Hydraulic universal testing equipment for tension, compression, bending, and shear testing of metals and non-metals.',
        'special-purpose': 'Specialized testing solutions for wire, steel strand, anchor, and component testing applications.',
        'fatigue-testing': 'Dynamic and fatigue testing systems for material durability, crack propagation, and lifespan evaluation.',
        compression: 'Compression testing machines for concrete cubes, cylinders, blocks, and masonry strength testing.',
        'fresh-concrete': 'Equipment for fresh concrete workability, slump, air content, density, and consistency testing.',
        durability: 'Durability testers for freeze-thaw resistance, chloride penetration, carbonation, and sulfate attack.',
        permeability: 'Permeability and chloride ion penetration testing systems for concrete durability assessment.',
        'curing-specimens': 'Concrete curing tanks, temperature-controlled baths, molds, and specimen preparation equipment.',
        'strength-testing': 'Cement strength testing equipment including mortar testers, flexural machines, and compressive testers.',
        'mixing-compaction': 'Cement mixers, compactors, mortar specimen preparation, and flow table equipment.',
        curing: 'Temperature and humidity controlled curing chambers and boxes for cement specimen storage and conditioning.',
        'physical-testing': 'Equipment for cement fineness, density, specific surface area, and particle size analysis.',
        'structural-compression': 'Large-scale structural testing systems for compression, shear, and flexural testing of construction materials.',
        'tension-relaxation': 'Specialized tension, relaxation, and torque testing machines for steel strand and structural components.',
        'bending-impact': 'Bending and impact testing equipment for evaluation of structural material mechanical properties.',
        'reaction-frames': 'Custom reaction frames, multi-channel loading systems, and structural test configurations.',
        'environmental-chambers': 'Environmental chambers for temperature, humidity, thermal shock, and climate simulation testing.',
        'drying-ovens': 'Precision drying ovens, heating cabinets, and forced-air circulation equipment for material conditioning.',
        furnaces: 'High-temperature muffle furnaces for ashing, ignition loss, calcination, and heat treatment applications.',
        aging: 'Accelerated aging chambers for material durability, weathering, UV exposure, and thermal cycling tests.',
        'mix-design': 'Marshall stability testers, flow testers, and mix design equipment for asphalt concrete.',
        'mix-performance': 'Wheel tracking, rutting, fatigue, and performance testing equipment for asphalt mixtures.',
        composition: 'Asphalt content testers, binder extraction, ignition furnaces, and composition analysis equipment.',
        'sample-preparation': 'Gyratory compactors, briquette presses, slab compactors, and asphalt sample preparation tools.',
        'penetration-rheology': 'Bitumen penetration testers, softening point apparatus, and rheology equipment for binder characterization.',
        ductility: 'Bitumen ductility testers for measuring binder elongation and deformation properties.',
        'viscosity-density': 'Bitumen viscosity and density testing equipment for binder rheology and consistency analysis.',
        'water-baths': 'Water baths, temperature-controlled baths, and circulating thermostats for bitumen testing.',
        extraction: 'Bitumen extraction equipment, centrifuges, and binder recovery systems for mixture analysis.',
        'soil-permeability': 'Soil permeability and hydraulic conductivity testing equipment for geotechnical evaluation.',
        'soil-compaction': 'Soil compaction testers, Proctor compaction apparatus, and California Bearing Ratio (CBR) equipment.',
        'soil-classification': 'Soil classification equipment for particle size analysis, Atterberg limits, and density testing.',
        'rock-preparation': 'Rock cutting, grinding, coring, and trimming equipment for laboratory specimen preparation.',
        'in-situ': 'In-situ testing instruments for field geotechnical investigation including vane shear and penetrometers.',
    },
    es: {
        'electromechanical-tensile': 'Máquinas de ensayo universales electrónicas para tracción, compresión, flexión de materiales.',
        'hydraulic-utm': 'Equipos de ensayo universales hidráulicos para tracción, compresión, flexión y cizalladura de metales y no metales.',
        'special-purpose': 'Soluciones de ensayo especializadas para alambre, cable de acero, anclajes y componentes.',
        'fatigue-testing': 'Sistemas de ensayo dinámico y fatiga para evaluación de durabilidad y vida útil de materiales.',
        compression: 'Máquinas de ensayo de compresión para probetas de hormigón, bloques y mampostería.',
        'fresh-concrete': 'Equipos para trabajabilidad del hormigón fresco, asentamiento, contenido de aire y densidad.',
        durability: 'Equipos de durabilidad para resistencia a hielo-deshielo, penetración de cloruros y carbonatación.',
        permeability: 'Sistemas de ensayo de permeabilidad y penetración de iones cloruro para evaluación del hormigón.',
        'curing-specimens': 'Tanques de curado, baños termostáticos, moldes y equipos de preparación de probetas.',
        'strength-testing': 'Equipos de resistencia del cemento incluyendo probetas de mortero, máquinas de flexión y compresión.',
        'mixing-compaction': 'Mezcladores de cemento, compactadores, preparación de probetas de mortero y mesa de fluidez.',
        curing: 'Cámaras y cajas de curado con control de temperatura y humedad para almacenamiento de probetas.',
        'physical-testing': 'Equipos para finura, densidad, superficie específica y análisis granulométrico del cemento.',
        'structural-compression': 'Sistemas de ensayo estructural a gran escala para compresión, corte y flexión.',
        'tension-relaxation': 'Máquinas especializadas de tracción, relajación y torque para cable de acero y componentes.',
        'bending-impact': 'Equipos de flexión e impacto para evaluación de propiedades mecánicas de materiales estructurales.',
        'reaction-frames': 'Marcos de reacción personalizados, sistemas de carga multicanal y configuraciones estructurales.',
        'environmental-chambers': 'Cámaras ambientales para simulación de temperatura, humedad y choque térmico.',
        'drying-ovens': 'Estufas de secado de precisión, armarios de calentamiento y equipos de circulación forzada.',
        furnaces: 'Hornos mufla de alta temperatura para incineración, pérdida por ignición y tratamiento térmico.',
        aging: 'Cámaras de envejecimiento acelerado para durabilidad, intemperie, exposición UV y ciclos térmicos.',
        'mix-design': 'Equipos de estabilidad Marshall, fluidez y diseño de mezclas para hormigón asfáltico.',
        'mix-performance': 'Equipos de seguimiento de roderas, fatiga y rendimiento para mezclas asfálticas.',
        composition: 'Analizadores de contenido de asfalto, extracción de ligante, hornos de ignición y composición.',
        'sample-preparation': 'Compactadores giratorios, prensas de briquetas, compactadores de losas y preparación de muestras.',
        'penetration-rheology': 'Penetrómetros de betún, aparatos de punto de reblandecimiento y reología para ligantes.',
        ductility: 'Ductilómetros de betún para medir propiedades de elongación y deformación del ligante.',
        'viscosity-density': 'Equipos de viscosidad y densidad del betún para análisis reológico y de consistencia.',
        'water-baths': 'Baños de agua, baños termostáticos y termostatos circulantes para ensayos de betún.',
        extraction: 'Equipos de extracción de betún, centrífugas y sistemas de recuperación de ligante.',
        'soil-permeability': 'Equipos de permeabilidad y conductividad hidráulica del suelo para evaluación geotécnica.',
        'soil-compaction': 'Equipos de compactación Proctor y ensayo CBR (Índice de Soporte de California).',
        'soil-classification': 'Equipos de clasificación de suelos para análisis granulométrico, límites de Atterberg y densidad.',
        'rock-preparation': 'Equipos de corte, pulido, extracción de núcleos y preparación de muestras de roca.',
        'in-situ': 'Instrumentos de ensayo in-situ para investigación geotécnica de campo, incluyendo veleta y penetrómetros.',
    },
    fr: {
        'electromechanical-tensile': 'Machines d\'essai universelles électroniques pour traction, compression, flexion des matériaux.',
        'hydraulic-utm': 'Équipements d\'essai universels hydrauliques pour traction, compression, flexion et cisaillement des métaux et non-métaux.',
        'special-purpose': 'Solutions d\'essai spécialisées pour fil, câble d\'acier, ancrages et composants.',
        'fatigue-testing': 'Systèmes d\'essai dynamique et de fatigue pour l\'évaluation de la durabilité et de la durée de vie.',
        compression: 'Machines d\'essai de compression pour cubes, cylindres, blocs et maçonnerie en béton.',
        'fresh-concrete': 'Équipements pour l\'ouvrabilité du béton frais, affaissement, teneur en air et densité.',
        durability: 'Appareils de durabilité pour résistance au gel-dégel, pénétration des chlorures et carbonatation.',
        permeability: 'Systèmes d\'essai de perméabilité et de pénétration des ions chlorure pour le béton.',
        'curing-specimens': 'Bacs de cure, bains thermostatiques, moules et équipements de préparation d\'éprouvettes.',
        'strength-testing': 'Équipements d\'essai de résistance du ciment incluant machines de flexion et compression.',
        'mixing-compaction': 'Malaxeurs, compacteurs, préparation d\'éprouvettes de mortier et table à choc.',
        curing: 'Chambres et caisses de cure à température et humidité contrôlées pour éprouvettes de ciment.',
        'physical-testing': 'Équipements pour finesse, densité, surface spécifique et analyse granulométrique du ciment.',
        'structural-compression': 'Systèmes d\'essai structural à grande échelle pour compression, cisaillement et flexion.',
        'tension-relaxation': 'Machines spécialisées de traction, relaxation et couple pour câble d\'acier et composants.',
        'bending-impact': 'Équipements de flexion et d\'impact pour l\'évaluation des propriétés mécaniques des matériaux.',
        'reaction-frames': 'Cadres de réaction personnalisés, systèmes de charge multicanal et configurations structurales.',
        'environmental-chambers': 'Chambres environnementales pour simulation de température, humidité et choc thermique.',
        'drying-ovens': 'Étuves de séchage de précision, armoires chauffantes et équipements à circulation forcée.',
        furnaces: 'Fours à moufle haute température pour incinération, perte au feu et traitement thermique.',
        aging: 'Chambres de vieillissement accéléré pour durabilité, intempéries, UV et cycles thermiques.',
        'mix-design': 'Appareils de stabilité Marshall, écoulement et formulation pour enrobés bitumineux.',
        'mix-performance': 'Équipements d\'orniérage, fatigue et performance pour mélanges bitumineux.',
        composition: 'Analyseurs de teneur en liant, extraction, fours à ignition et analyse de composition.',
        'sample-preparation': 'Compacteurs giratoires, presses à briquettes, compacteurs de dalles et préparation.',
        'penetration-rheology': 'Pénétromètres, appareils de point de ramollissement et rhéologie pour liants.',
        ductility: 'Ductilomètres pour mesurer les propriétés d\'élongation et déformation du liant.',
        'viscosity-density': 'Équipements de viscosité et densité pour analyse rhéologique et consistance du bitume.',
        'water-baths': 'Bains-marie, bains thermostatiques et thermostats circulants pour essais bitumineux.',
        extraction: 'Équipements d\'extraction du bitume, centrifugeuses et systèmes de récupération du liant.',
        'soil-permeability': 'Équipements de perméabilité et conductivité hydraulique des sols.',
        'soil-compaction': 'Appareils de compactage Proctor et essai CBR (Indice Portant Californien).',
        'soil-classification': 'Équipements de classification des sols pour analyse granulométrique, limites d\'Atterberg et densité.',
        'rock-preparation': 'Équipements de coupe, polissage, carottage et préparation d\'échantillons de roche.',
        'in-situ': 'Instruments d\'essai in-situ pour investigation géotechnique de terrain.',
    },
    ar: {
        'electromechanical-tensile': 'آلات اختبار عالمية إلكترونية لاختبار الشد والضغط والانحناء للمواد.',
        'hydraulic-utm': 'معدات اختبار عالمية هيدروليكية لاختبار الشد والضغط والانحناء والقص للمعادن والمواد غير المعدنية.',
        'special-purpose': 'حلول اختبار متخصصة للأسلاك والكابلات الفولاذية والمراسي والمكونات.',
        'fatigue-testing': 'أنظمة اختبار ديناميكي والكلال لتقييم متانة المواد وعمرها الافتراضي.',
        compression: 'آلات اختبار الضغط لمكعبات الخرسانة والأسطوانات والكتل والطوب.',
        'fresh-concrete': 'معدات اختبار قابلية تشغيل الخرسانة الطازجة والهبوط ومحتوى الهواء والكثافة.',
        durability: 'أجهزة اختبار المتانة لمقاومة التجميد والذوبان واختراق الكلوريدات والكربنة.',
        permeability: 'أنظمة اختبار النفاذية واختراق أيونات الكلوريد لتقييم متانة الخرسانة.',
        'curing-specimens': 'أحواض المعالجة، حمامات حرارية، قوالب ومعدات تحضير عينات الخرسانة.',
        'strength-testing': 'معدات اختبار قوة الأسمنت تشمل آلات الانحناء والضغط لعينات الملاط.',
        'mixing-compaction': 'خلاطات الأسمنت، مكابس الدمك، تحضير عينات الملاط وطاولة التدفق.',
        curing: 'غرف وصناديق معالجة بتحكم بدرجة الحرارة والرطوبة لتخزين عينات الأسمنت.',
        'physical-testing': 'معدات تحليل نعومة الأسمنت والكثافة والمساحة السطحية النوعية وتوزيع حجم الجسيمات.',
        'structural-compression': 'أنظمة اختبار إنشائي واسعة النطاق للضغط والقص والانحناء لمواد البناء.',
        'tension-relaxation': 'آلات متخصصة لاختبار الشد والاسترخاء والعزم للكابلات الفولاذية والمكونات الإنشائية.',
        'bending-impact': 'معدات اختبار الانحناء والصدم لتقييم الخواص الميكانيكية للمواد الإنشائية.',
        'reaction-frames': 'إطارات رد فعل مخصصة، أنظمة تحميل متعددة القنوات، وتكوينات اختبار إنشائي.',
        'environmental-chambers': 'غرف بيئية لمحاكاة درجة الحرارة والرطوبة والصدمة الحرارية والمناخ.',
        'drying-ovens': 'أفران تجفيف دقيقة، خزانات تسخين، ومعدات تدوير هواء قسري لتكييف المواد.',
        furnaces: 'أفران دثرية عالية الحرارة للحرق وفقدان الوزن بالحرق والمعالجة الحرارية.',
        aging: 'غرف تعتيق متسارع لاختبار متانة المواد والتعرض للأشعة فوق البنفسجية والدورات الحرارية.',
        'mix-design': 'أجهزة ثبات مارشال ومعدات تصميم الخلطات للخرسانة الإسفلتية.',
        'mix-performance': 'معدات تتبع العجلات والكلال والأداء لخلطات الإسفلت.',
        composition: 'أجهزة تحليل محتوى الإسفلت واستخلاص الرابط وأفران الاحتراق وتحليل التركيب.',
        'sample-preparation': 'مكابس دوارة، مكابس قوالب، مكابس ألواح ومعدات تحضير عينات الإسفلت.',
        'penetration-rheology': 'أجهزة اختراق البيتومين ونقطة التليين ومعدات الريولوجيا لوصف الرابط.',
        ductility: 'أجهزة مطيلية البيتومين لقياس خواص الاستطالة والتشوه للرابط.',
        'viscosity-density': 'معدات قياس لزوجة وكثافة البيتومين لتحليل الريولوجيا والثبات.',
        'water-baths': 'حمامات مائية وحمامات حرارية ومنظمات حرارة دائرة لاختبار البيتومين.',
        extraction: 'معدات استخلاص البيتومين وأجهزة طرد مركزي وأنظمة استعادة الرابط.',
        'soil-permeability': 'معدات اختبار نفاذية التربة والتوصيل الهيدروليكي للتقييم الجيوتقني.',
        'soil-compaction': 'أجهزة دمك التربة (بروكتور) واختبار نسبة تحميل كاليفورنيا (CBR).',
        'soil-classification': 'معدات تصنيف التربة لتحليل توزيع حجم الجسيمات وحدود أتربرغ والكثافة.',
        'rock-preparation': 'معدات قطع وصقل واستخراج لباب الصخور وتحضير عينات المختبر.',
        'in-situ': 'أجهزة اختبار حقلي للتحقيقات الجيوتقنية الميدانية تشمل قص الريشة واختراق التربة.',
    }
};

const LANG_MAP = { en: 'en', es: 'es', fr: 'fr', ar: 'ar' };

FILES.forEach(filePath => {
    const fullPath = path.join(ROOT, filePath);
    let content = fs.readFileSync(fullPath, 'utf-8');

    // Determine language from filename
    const langMatch = filePath.match(/categories-(\w+)\.js/);
    const lang = LANG_MAP[langMatch[1]];
    const descs = DESCRIPTIONS[lang];

    if (!descs) {
        console.error(`No descriptions for language: ${lang}`);
        return;
    }

    // Use regex to find subcategory objects: { id: "...", name: "..." }
    // and add description field after name
    let modified = content.replace(
        /(\{ id: "([^"]+)", name: "([^"]+)" \})/g,
        (match, fullObj, id, name) => {
            const desc = descs[id];
            if (desc) {
                return `{ id: "${id}", name: "${name}", description: "${desc}" }`;
            }
            console.warn(`  ⚠ No description for "${id}" in ${filePath}`);
            return match;
        }
    );

    fs.writeFileSync(fullPath, modified, 'utf-8');
    console.log(`✓ Updated ${filePath}`);
});

console.log('\nDone! Descriptions added to all subcategories.');
