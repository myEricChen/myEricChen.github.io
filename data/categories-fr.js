/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2026-04-20 10:56:17
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2026-04-20 10:58:03
 * @FilePath: \myEricChen.github.io\data\categories-fr.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
window.ludaData = window.ludaData || {};
window.ludaData.categories = [
    {
        id: "tensile",
        name: "Machines d'essai universelles électromécaniques",
        description: "Testeurs universels électroniques haute précision pour plastiques, caoutchouc, textiles, métaux, etc.",
        icon: "/assets/series/electronic-tensile-machine-icon.jpg",
        subcategories: [
            { id: "electromechanical-tensile", name: "Machines d'essai universelles électroniques", description: "Machines d'essai universelles électroniques pour traction, compression, flexion des matériaux." }
        ]      },
      {
        id: "universal",
        name: "Machines d'essai universelles hydrauliques",
        description: "Équipements multifonctions pour traction, compression, flexion, cisaillement sur métaux et non-métaux.",
        icon: "/assets/series/universal-testing-machine-icon.jpg",
        subcategories: [
            { id: "hydraulic-utm", name: "Machines d'essai universelles hydrauliques", description: "Équipements d'essai universels hydrauliques pour traction, compression, flexion et cisaillement des métaux et non-métaux." },
            { id: "special-purpose", name: "Machines d'essai spéciales", description: "Solutions d'essai spécialisées pour fil, câble d'acier, ancrages et composants." },
            { id: "fatigue-testing", name: "Machines d'essai de fatigue", description: "Systèmes d'essai dynamique et de fatigue pour l'évaluation de la durabilité et de la durée de vie." }
        ]      },
      {
        id: "concrete",
        name: "Essais du béton",
        description: "Processus complet d'essai du béton : malaxage, cure, résistance, etc.",
        icon: "/assets/series/concrete-test-icon.jpg",
        subcategories: [
            { id: "compression", name: "Machines d'essai de compression", description: "Machines d'essai de compression pour cubes, cylindres, blocs et maçonnerie en béton." },
            { id: "fresh-concrete", name: "Essais du béton frais", description: "Équipements pour l'ouvrabilité du béton frais, affaissement, teneur en air et densité." },
            { id: "durability", name: "Essais de durabilité et perméabilité", description: "Appareils de durabilité pour résistance au gel-dégel, pénétration des chlorures et carbonatation." },
            { id: "permeability", name: "Essais de perméabilité et chlorures", description: "Systèmes d'essai de perméabilité et de pénétration des ions chlorure pour le béton." },
            { id: "curing-specimens", name: "Cure et préparation des éprouvettes", description: "Bacs de cure, bains thermostatiques, moules et équipements de préparation d'éprouvettes." }
        ]      },
      {
        id: "cement",
        name: "Essais du ciment et du mortier",
        description: "Appareils pour consistance, temps de prise, stabilité et résistance du ciment et du mortier.",
        icon: "/assets/series/cement-instrument-icon.jpg",
        subcategories: [
            { id: "strength-testing", name: "Essais de résistance du ciment", description: "Équipements d'essai de résistance du ciment incluant machines de flexion et compression." },
            { id: "mixing-compaction", name: "Équipements de malaxage et compactage", description: "Malaxeurs, compacteurs, préparation d'éprouvettes de mortier et table à choc." },
            { id: "curing", name: "Chambres et caisses de cure", description: "Chambres et caisses de cure à température et humidité contrôlées pour éprouvettes de ciment." },
            { id: "physical-testing", name: "Équipements d'essais physiques", description: "Équipements pour finesse, densité, surface spécifique et analyse granulométrique du ciment." }
        ]      },
      {
        id: "large_machine",
        name: "Machines d'essai spéciales de grande taille",
        description: "Machines spéciales : torsion, fluage, fatigue, impact et solutions personnalisées.",
        icon: "/assets/series/large-testing-machine-icon.jpg",
        subcategories: [
            { id: "structural-compression", name: "Essais de compression et cisaillement structurels", description: "Systèmes d'essai structural à grande échelle pour compression, cisaillement et flexion." },
            { id: "tension-relaxation", name: "Essais de traction, relaxation et couple", description: "Machines spécialisées de traction, relaxation et couple pour câble d'acier et composants." },
            { id: "bending-impact", name: "Essais de flexion et d'impact", description: "Équipements de flexion et d'impact pour l'évaluation des propriétés mécaniques des matériaux." },
            { id: "reaction-frames", name: "Cadres de réaction et systèmes de charge", description: "Cadres de réaction personnalisés, systèmes de charge multicanal et configurations structurales." }
        ]      },
      {
        id: "research",
        name: "Équipements généraux de laboratoire",
        description: "Instruments de précision haute stabilité pour universités et instituts de recherche.",
        icon: "/assets/series/research-product-icon.jpg",
        subcategories: [
            { id: "environmental-chambers", name: "Chambres environnementales et climatiques", description: "Chambres environnementales pour simulation de température, humidité et choc thermique." },
            { id: "drying-ovens", name: "Étuves de séchage et chauffage", description: "Étuves de séchage de précision, armoires chauffantes et équipements à circulation forcée." },
            { id: "furnaces", name: "Fours à moufle", description: "Fours à moufle haute température pour incinération, perte au feu et traitement thermique." },
            { id: "aging", name: "Chambres de vieillissement", description: "Chambres de vieillissement accéléré pour durabilité, intempéries, UV et cycles thermiques." }
        ]      },
      {
        id: "asphalt",
        name: "Essais des enrobés bitumineux",
        description: "Essais de stabilité Marshall, orniérage, compactage giratoire, teneur en liant et performance des mélanges.",
        icon: "/assets/series/asphalt-instrument-icon.jpg",
        subcategories: [
            { id: "mix-design", name: "Formulation et essai Marshall", description: "Appareils de stabilité Marshall, écoulement et formulation pour enrobés bitumineux." },
            { id: "mix-performance", name: "Essais de performance des mélanges", description: "Équipements d'orniérage, fatigue et performance pour mélanges bitumineux." },
            { id: "composition", name: "Analyse de composition des enrobés", description: "Analyseurs de teneur en liant, extraction, fours à ignition et analyse de composition." },
            { id: "sample-preparation", name: "Équipements de préparation d'échantillons", description: "Compacteurs giratoires, presses à briquettes, compacteurs de dalles et préparation." }
        ]      },
      {
        id: "bitumen",
        name: "Essais du bitume (liant asphaltique)",
        description: "Appareils pour pénétration, point de ramollissement, ductilité, viscosité, vieillissement et teneur en paraffine.",
        icon: "/assets/series/bitumen-instrument-icon.jpg",
        subcategories: [
            { id: "penetration-rheology", name: "Pénétration et point de ramollissement", description: "Pénétromètres, appareils de point de ramollissement et rhéologie pour liants." },
            { id: "ductility", name: "Essai de ductilité", description: "Ductilomètres pour mesurer les propriétés d'élongation et déformation du liant." },
            { id: "aging", name: "Chambres de vieillissement", description: "Chambres de vieillissement accéléré pour durabilité, intempéries, UV et cycles thermiques." },
            { id: "viscosity-density", name: "Viscosité et densité", description: "Équipements de viscosité et densité pour analyse rhéologique et consistance du bitume." },
            { id: "water-baths", name: "Bains-marie et contrôle de température", description: "Bains-marie, bains thermostatiques et thermostats circulants pour essais bitumineux." },
            { id: "extraction", name: "Extraction et centrifugation", description: "Équipements d'extraction du bitume, centrifugeuses et systèmes de récupération du liant." }
        ]      },
      {
        id: "geotechnical",
        name: "Essais géotechniques et des granulats",
        description: "Essais physiques/mécaniques des sols, sables, roches pour le génie géotechnique.",
        icon: "/assets/series/geotechnical-instrument-icon.jpg",
        subcategories: [
            { id: "soil-permeability", name: "Essais de perméabilité des sols", description: "Équipements de perméabilité et conductivité hydraulique des sols." },
            { id: "soil-compaction", name: "Compactage des sols et essai CBR", description: "Appareils de compactage Proctor et essai CBR (Indice Portant Californien)." },
            { id: "soil-classification", name: "Classification des sols", description: "Équipements de classification des sols pour analyse granulométrique, limites d'Atterberg et densité." },
            { id: "rock-preparation", name: "Préparation d'échantillons de roche", description: "Équipements de coupe, polissage, carottage et préparation d'échantillons de roche." },
            { id: "in-situ", name: "Équipements d'essais in-situ", description: "Instruments d'essai in-situ pour investigation géotechnique de terrain." },
            { id: "sample-preparation", name: "Équipements de préparation d'échantillons", description: "Compacteurs giratoires, presses à briquettes, compacteurs de dalles et préparation." }
        ]      }
];