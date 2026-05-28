window.ludaData = window.ludaData || {};
window.ludaData.categories = [
    {
        id: "tensile",
        name: "Máquinas de Ensayo Universales Electromecánicas",
        description: "Máquinas universales electrónicas de alta precisión para plásticos, caucho, textiles, metales, etc.",
        icon: "/assets/series/electronic-tensile-machine-icon.jpg",
        subcategories: [
            { id: "electromechanical-tensile", name: "Máquinas de Ensayo Universales Electrónicas", description: "Máquinas de ensayo universales electrónicas para tracción, compresión, flexión de materiales." }
        ]      },
      {
        id: "universal",
        name: "Máquinas de Ensayo Universales Hidráulicas",
        description: "Equipos multifuncionales para tracción, compresión, flexión, cizalladura en metales y no metales.",
        icon: "/assets/series/universal-testing-machine-icon.jpg",
        subcategories: [
            { id: "hydraulic-utm", name: "Máquinas de Ensayo Universales Hidráulicas", description: "Equipos de ensayo universales hidráulicos para tracción, compresión, flexión y cizalladura de metales y no metales." },
            { id: "special-purpose", name: "Máquinas de Ensayo para Propósitos Especiales", description: "Soluciones de ensayo especializadas para alambre, cable de acero, anclajes y componentes." },
            { id: "fatigue-testing", name: "Máquinas de Ensayo de Fatiga", description: "Sistemas de ensayo dinámico y fatiga para evaluación de durabilidad y vida útil de materiales." }
        ]      },
      {
        id: "concrete",
        name: "Ensayos de Hormigón",
        description: "Proceso completo de ensayo de hormigón: mezclado, curado, resistencia, etc.",
        icon: "/assets/series/concrete-test-icon.jpg",
        subcategories: [
            { id: "compression", name: "Máquinas de Ensayo de Compresión", description: "Máquinas de ensayo de compresión para probetas de hormigón, bloques y mampostería." },
            { id: "fresh-concrete", name: "Ensayos de Hormigón Fresco", description: "Equipos para trabajabilidad del hormigón fresco, asentamiento, contenido de aire y densidad." },
            { id: "durability", name: "Ensayos de Durabilidad y Permeabilidad", description: "Equipos de durabilidad para resistencia a hielo-deshielo, penetración de cloruros y carbonatación." },
            { id: "permeability", name: "Ensayos de Permeabilidad y Cloruros", description: "Sistemas de ensayo de permeabilidad y penetración de iones cloruro para evaluación del hormigón." },
            { id: "curing-specimens", name: "Curado y Preparación de Probetas", description: "Tanques de curado, baños termostáticos, moldes y equipos de preparación de probetas." }
        ]      },
      {
        id: "cement",
        name: "Ensayos de Cemento y Mortero",
        description: "Equipos para consistencia, tiempo de fraguado, estabilidad y resistencia de cemento y mortero.",
        icon: "/assets/series/cement-instrument-icon.jpg",
        subcategories: [
            { id: "strength-testing", name: "Ensayos de Resistencia del Cemento", description: "Equipos de resistencia del cemento incluyendo probetas de mortero, máquinas de flexión y compresión." },
            { id: "mixing-compaction", name: "Equipos de Mezclado y Compactación", description: "Mezcladores de cemento, compactadores, preparación de probetas de mortero y mesa de fluidez." },
            { id: "curing", name: "Cámaras y Cajas de Curado", description: "Cámaras y cajas de curado con control de temperatura y humedad para almacenamiento de probetas." },
            { id: "physical-testing", name: "Equipos de Ensayos Físicos", description: "Equipos para finura, densidad, superficie específica y análisis granulométrico del cemento." }
        ]      },
      {
        id: "large_machine",
        name: "Máquinas de Ensayo Especiales de Gran Tamaño",
        description: "Máquinas especiales: torsión, fluencia, fatiga, impacto y soluciones personalizadas.",
        icon: "/assets/series/large-testing-machine-icon.jpg",
        subcategories: [
            { id: "structural-compression", name: "Ensayos de Compresión y Corte Estructural", description: "Sistemas de ensayo estructural a gran escala para compresión, corte y flexión." },
            { id: "tension-relaxation", name: "Ensayos de Tracción, Relajación y Torque", description: "Máquinas especializadas de tracción, relajación y torque para cable de acero y componentes." },
            { id: "bending-impact", name: "Ensayos de Flexión e Impacto", description: "Equipos de flexión e impacto para evaluación de propiedades mecánicas de materiales estructurales." },
            { id: "reaction-frames", name: "Marcos de Reacción y Sistemas de Carga", description: "Marcos de reacción personalizados, sistemas de carga multicanal y configuraciones estructurales." }
        ]      },
      {
        id: "research",
        name: "Equipos Generales de Laboratorio",
        description: "Instrumentos de precisión de alta estabilidad para universidades e institutos de investigación.",
        icon: "/assets/series/research-product-icon.jpg",
        subcategories: [
            { id: "environmental-chambers", name: "Cámaras Ambientales y Climáticas", description: "Cámaras ambientales para simulación de temperatura, humedad y choque térmico." },
            { id: "drying-ovens", name: "Estufas de Secado y Calentamiento", description: "Estufas de secado de precisión, armarios de calentamiento y equipos de circulación forzada." },
            { id: "furnaces", name: "Hornos Mufla", description: "Hornos mufla de alta temperatura para incineración, pérdida por ignición y tratamiento térmico." },
            { id: "aging", name: "Cámaras de Envejecimiento", description: "Cámaras de envejecimiento acelerado para durabilidad, intemperie, exposición UV y ciclos térmicos." }
        ]      },
      {
        id: "asphalt",
        name: "Ensayos de Asfalto",
        description: "Ensayo de estabilidad Marshall, seguimiento de roderas, compactación giratoria, contenido de asfalto y rendimiento de mezclas.",
        icon: "/assets/series/asphalt-instrument-icon.jpg",
        subcategories: [
            { id: "mix-design", name: "Diseño de Mezclas y Ensayo Marshall", description: "Equipos de estabilidad Marshall, fluidez y diseño de mezclas para hormigón asfáltico." },
            { id: "mix-performance", name: "Ensayos de Rendimiento de Mezclas", description: "Equipos de seguimiento de roderas, fatiga y rendimiento para mezclas asfálticas." },
            { id: "composition", name: "Análisis de Composición de Asfalto", description: "Analizadores de contenido de asfalto, extracción de ligante, hornos de ignición y composición." },
            { id: "sample-preparation", name: "Equipos de Preparación de Muestras", description: "Compactadores giratorios, prensas de briquetas, compactadores de losas y preparación de muestras." }
        ]      },
      {
        id: "bitumen",
        name: "Ensayos de Betún (Ligante Asfáltico)",
        description: "Equipos para penetración, punto de reblandecimiento, ductilidad, viscosidad, envejecimiento y contenido de cera.",
        icon: "/assets/series/bitumen-instrument-icon.jpg",
        subcategories: [
            { id: "penetration-rheology", name: "Penetración y Punto de Reblandecimiento", description: "Penetrómetros de betún, aparatos de punto de reblandecimiento y reología para ligantes." },
            { id: "ductility", name: "Ensayo de Ductilidad", description: "Ductilómetros de betún para medir propiedades de elongación y deformación del ligante." },
            { id: "aging", name: "Cámaras de Envejecimiento", description: "Cámaras de envejecimiento acelerado para durabilidad, intemperie, exposición UV y ciclos térmicos." },
            { id: "viscosity-density", name: "Viscosidad y Densidad", description: "Equipos de viscosidad y densidad del betún para análisis reológico y de consistencia." },
            { id: "water-baths", name: "Baños de Agua y Control de Temperatura", description: "Baños de agua, baños termostáticos y termostatos circulantes para ensayos de betún." },
            { id: "extraction", name: "Extracción y Centrífuga", description: "Equipos de extracción de betún, centrífugas y sistemas de recuperación de ligante." }
        ]      },
      {
        id: "geotechnical",
        name: "Ensayos Geotécnicos y de Áridos",
        description: "Ensayos físicos/mecánicos de suelos, arenas, rocas para ingeniería geotécnica.",
        icon: "/assets/series/geotechnical-instrument-icon.jpg",
        subcategories: [
            { id: "soil-permeability", name: "Ensayos de Permeabilidad de Suelos", description: "Equipos de permeabilidad y conductividad hidráulica del suelo para evaluación geotécnica." },
            { id: "soil-compaction", name: "Compactación de Suelos y Ensayo CBR", description: "Equipos de compactación Proctor y ensayo CBR (Índice de Soporte de California)." },
            { id: "soil-classification", name: "Clasificación de Suelos", description: "Equipos de clasificación de suelos para análisis granulométrico, límites de Atterberg y densidad." },
            { id: "rock-preparation", name: "Preparación de Muestras de Roca", description: "Equipos de corte, pulido, extracción de núcleos y preparación de muestras de roca." },
            { id: "in-situ", name: "Equipos de Ensayos In-Situ", description: "Instrumentos de ensayo in-situ para investigación geotécnica de campo, incluyendo veleta y penetrómetros." },
            { id: "sample-preparation", name: "Equipos de Preparación de Muestras", description: "Compactadores giratorios, prensas de briquetas, compactadores de losas y preparación de muestras." }
        ]      }
];