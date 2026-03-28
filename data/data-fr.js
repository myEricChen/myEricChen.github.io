/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2026-02-22 10:43:50
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2026-03-28 16:28:51
 * @FilePath: \EngWebsite\data\data.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// ==================== data/data.js ====================
window.ludaData = {
  // 设备分类数据（英文版）
  categories: [
    {
      id: "tensile",
      name: "Machines d'essai universelles électromécaniques",
      description: "Testeurs universels électroniques haute précision pour plastiques, caoutchouc, textiles, métaux, etc.",
      icon: "/assets/series/electronic-tensile-machine-icon.jpg"
    },
    {
      id: "universal",
      name: "Machines d'essai universelles hydrauliques",
      description: "Équipements multifonctions pour traction, compression, flexion, cisaillement sur métaux et non-métaux.",
      icon: "/assets/series/universal-testing-machine-icon.jpg"
    },
    {
      id: "concrete",
      name: "Essais du béton",
      description: "Processus complet d'essai du béton : malaxage, cure, résistance, etc.",
      icon: "/assets/series/concrete-test-icon.jpg"
    },
    {
      id: "cement",
      name: "Essais du ciment et du mortier",
      description: "Appareils pour consistance, temps de prise, stabilité et résistance du ciment et du mortier.",
      icon: "/assets/series/cement-instrument-icon.jpg"
    },
    {
      id: "large_machine",
      name: "Machines d'essai spéciales de grande taille",
      description: "Machines spéciales : torsion, fluage, fatigue, impact et solutions personnalisées.",
      icon: "/assets/series/large-testing-machine-icon.jpg"
    },
    {
      id: "research",
      name: "Équipements généraux de laboratoire",
      description: "Instruments de précision haute stabilité pour universités et instituts de recherche.",
      icon: "/assets/series/research-product-icon.jpg"
    },
    {
      id: "asphalt",
      name: "Essais des enrobés bitumineux",
      description: "Essais de stabilité Marshall, orniérage, compactage giratoire, teneur en liant et performance des mélanges.",
      icon: "/assets/series/asphalt-instrument-icon.jpg"
    },
    {
      id: "bitumen",
      name: "Essais du bitume (liant asphaltique)",
      description: "Appareils pour pénétration, point de ramollissement, ductilité, viscosité, vieillissement et teneur en paraffine.",
      icon: "/assets/series/bitumen-instrument-icon.jpg"
    },
    {
      id: "geotechnical",
      name: "Essais géotechniques et des granulats",
      description: "Essais physiques/mécaniques des sols, sables, roches pour le génie géotechnique.",
      icon: "/assets/series/geotechnical-instrument-icon.jpg"
    }
  ],  

  devices: [
      {
        "id": "M022",
        "name": "Machine d'essai de matériaux universelle à affichage numérique",
        "suffixName": "1000 kN",
        "model": "WE-1000B",
        "category": "universal",
        "thumbnail": "/assets/images/WE-1000B（出口）.png",
        "description": "La machine d'essai, également connue sous le nom de machine de traction, est alimentée par pression hydraulique et convient principalement aux essais de traction, de compression et autres sur les matériaux métalliques. Équipée de dispositifs de fixation appropriés, elle peut également être utilisée pour effectuer des essais de traction, de compression, de flexion et de cisaillement sur des matériaux non métalliques afin de tester leurs propriétés mécaniques. Elle trouve de nombreuses applications dans l'industrie des matériaux, la métallurgie, la métallurgie des métaux non ferreux, les matériaux de construction, l'industrie mécanique, les transports, etc.",
        "features": [],
        "standards": [
          "EN ISO 6892-1",
          "ISO 7500",
          "EN 10002",
          "EN 10080",
          "EN 15630-1",
          "ASTM A370",
          "EN 15630-3",
          "EN ISO 7438",
          "EN ISO 15630-1",
          "ASTM A615",
          "ASTM A615M"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "1000"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "100～1000"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Espace d'essai vertical de traction (mm)",
            "value": "690"
          },
          {
            "label": "Espace d'essai vertical de compression (mm)",
            "value": "620"
          },
          {
            "label": "épaisseur de serrage de l'échantillon plat (mm)",
            "value": "0～15"
          },
          {
            "label": "Diamètre de serrage de l'échantillon rond (mm)",
            "value": "20～40, 40～60"
          },
          {
            "label": "Course du piston (mm)",
            "value": "180"
          },
          {
            "label": "Dimensions du plateau de compression (mm)",
            "value": "Φ220(Upper) Φ230(Lower)"
          },
          {
            "label": "Espace de test horizontal (mm)",
            "value": "450"
          },
          {
            "label": "Vitesse maximale du piston (mm/min)",
            "value": "100"
          },
          {
            "label": "Vitesse maximale de la traverse (mm/min)",
            "value": "240"
          },
          {
            "label": "Puissance des moteurs (kW)",
            "value": "1.8"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "945×630×2100"
          },
          {
            "label": "Dimensions de l'armoire de commande (mm)",
            "value": "700×520×1630"
          },
          {
            "label": "Poids total (kg)",
            "value": "2000"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P001",
        "name": "Machine d'essai universelle pour amortisseurs",
        "suffixName": "600 kN",
        "model": "WAW-600Pro",
        "category": "universal",
        "thumbnail": "/assets/images/WAW-600Pro.png",
        "description": "Cette machine d'essai est principalement utilisée pour les essais de traction, de compression, de flexion et de cisaillement des matériaux métalliques, et répond aux exigences des normes nationales telles que la norme d'essai de traction des métaux ASTM E8.",
        "features": [
          "Le système de contrôle de la source d'huile servo utilisé dans cet équipement permet de réduire efficacement le bruit de fonctionnement de l'équipement, de réduire la génération de chaleur, de prolonger la durée de vie de l'huile et d'éliminer le besoin de refroidissement.",
          "Le système d'absorption des chocs de cet équipement permet de réduire efficacement les vibrations pendant son utilisation, rendant ainsi le processus expérimental plus sûr et plus confortable.",
          "Sa structure sans vis rend cet équipement plus rigide, plus facile à entretenir et présente un taux de panne inférieur à celui des autres machines d'essai universelles."
        ],
        "standards": [
          "EN ISO 6892-1",
          "ISO 7500",
          "EN 10002",
          "EN 10080",
          "EN 15630-1",
          "ASTM A370",
          "EN 15630-3",
          "EN ISO 7438",
          "EN ISO 15630-1",
          "ASTM A615",
          "ASTM A615M"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "600"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "30～600"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±0.5%"
          },
          {
            "label": "Espace d'essai vertical de traction (mm)",
            "value": "670"
          },
          {
            "label": "Plage de diamètres des échantillons cylindriques (mm) (mm)",
            "value": "Φ13~Φ26,Φ26~Φ40"
          },
          {
            "label": "Plage d'épaisseur des échantillons de plaques (mm)",
            "value": "0~15"
          },
          {
            "label": "Largeur de serrage de l'échantillon (mm)",
            "value": "110"
          },
          {
            "label": "Vitesse de montée maximale (mm/min)",
            "value": "350"
          },
          {
            "label": "Vitesse de descente maximale (mm/min)",
            "value": "500"
          },
          {
            "label": "Puissance du moteur (kW)",
            "value": "2.3"
          },
          {
            "label": "Tension d'alimentation",
            "value": "AC220V±10%,50-60Hz"
          },
          {
            "label": "Dimensions de la machine (mm)",
            "value": "1440×580×2200"
          },
          {
            "label": "Poids (kg)",
            "value": "2350"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P002",
        "name": "Machine d'essai universelle pour amortisseurs",
        "suffixName": "1000 kN",
        "model": "WAW-1000Pro",
        "category": "universal",
        "thumbnail": "/assets/images/WAW-1000Pro.png",
        "description": "Cette machine d'essai est principalement utilisée pour les essais de traction, de compression, de flexion et de cisaillement des matériaux métalliques, et répond aux exigences des normes nationales telles que la norme d'essai de traction des métaux ASTM E8.",
        "features": [
          "Le système de contrôle de la source d'huile servo utilisé dans cet équipement permet de réduire efficacement le bruit de fonctionnement de l'équipement, de réduire la génération de chaleur, de prolonger la durée de vie de l'huile et d'éliminer le besoin de refroidissement.",
          "Le système d'absorption des chocs de cet équipement permet de réduire efficacement les vibrations pendant son utilisation, rendant ainsi le processus expérimental plus sûr et plus confortable.",
          "Sa structure sans vis rend cet équipement plus rigide, plus facile à entretenir et présente un taux de panne inférieur à celui des autres machines d'essai universelles."
        ],
        "standards": [
          "EN ISO 6892-1",
          "ISO 7500",
          "EN 10002",
          "EN 10080",
          "EN 15630-1",
          "ASTM A370",
          "EN 15630-3",
          "EN ISO 7438",
          "EN ISO 15630-1",
          "ASTM A615",
          "ASTM A615M"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "1000"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "50～1000"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±0.5%"
          },
          {
            "label": "Espace d'essai vertical de traction (mm)",
            "value": "690"
          },
          {
            "label": "Plage de diamètres des échantillons cylindriques (mm) (mm)",
            "value": "Φ14~Φ45"
          },
          {
            "label": "Plage d'épaisseur des échantillons de plaques (mm)",
            "value": "0~40"
          },
          {
            "label": "Largeur de serrage de l'échantillon (mm)",
            "value": "110"
          },
          {
            "label": "Vitesse de montée maximale (mm/min)",
            "value": "350"
          },
          {
            "label": "Vitesse de descente maximale (mm/min)",
            "value": "500"
          },
          {
            "label": "Puissance du moteur (kW)",
            "value": "2.3"
          },
          {
            "label": "Tension d'alimentation",
            "value": "AC220V±10%,50-60Hz"
          },
          {
            "label": "Dimensions de la machine (mm)",
            "value": "1570×970×2280"
          },
          {
            "label": "Poids (kg)",
            "value": "3200"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P003",
        "name": "Machine d'essai spéciale pour torons d'acier servo-hydrauliques",
        "suffixName": "600 kN",
        "model": "WAW-600G",
        "category": "universal",
        "thumbnail": "/assets/images/WAW-600GS.png",
        "description": "Ce produit convient aux essais de traction sur torons d'acier et peut également être utilisé pour des essais de traction, de compression, de cisaillement et autres sur des matériaux métalliques et non métalliques.",
        "features": [
          "La structure adopte une structure de type portique, en acier ultra-résistant.",
          "Le bouclier est fabriqué en matériau acrylique transparent, propre et esthétique, permettant d'observer l'intégralité du processus de test.",
          "Mâchoires hydrauliques externes, faciles à réviser.",
          "Avec une plaque de pression supérieure/inférieure, pour obtenir un double espace en traction et en compression.",
          "Le capteur utilise un capteur de roue et de rayon, offrant une haute précision, une vitesse stable et une fonction de réciprocité.",
          "Ordinateur de marque, avec clavier et souris sans fil, grand écran, commandes sensibles.",
          "Utilisation de deux pompes à huile et de deux moteurs pour assurer une source d'huile indépendante et une alimentation en pression stable."
        ],
        "standards": [
          "ASTM E8",
          "UNI 7676 (Wire Strands)",
          "EN ISO 7438",
          "EN ISO 15630-1",
          "ASTM A615",
          "ASTM A615M"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "600"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "60～600"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Espace d'essai vertical de traction (mm)",
            "value": "1050"
          },
          {
            "label": "Espace d'essai vertical de compression (mm)",
            "value": "950"
          },
          {
            "label": "Diamètre de serrage de l'échantillon (mm)",
            "value": "Φ12~Φ16"
          },
          {
            "label": "Course du piston (mm)",
            "value": "200"
          },
          {
            "label": "Dimensions du plateau de compression (mm)",
            "value": "Φ220(Upper) Φ230(Lower)"
          },
          {
            "label": "Vitesse maximale du piston (mm/min)",
            "value": "100"
          },
          {
            "label": "Vitesse maximale de la traverse (mm/min)",
            "value": "240"
          },
          {
            "label": "Espace de test horizontal (mm)",
            "value": "450"
          },
          {
            "label": "Tension d'alimentation",
            "value": "AC380V±10%,50-60Hz"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "1050×710×2910"
          },
          {
            "label": "Dimensions de l'armoire de commande (mm)",
            "value": "700×520×1630"
          },
          {
            "label": "Poids (kg)",
            "value": "3700"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Peut être amélioré en classe de précision 0,5 %.",
          "Peut être mis à niveau vers un système hydraulique à servomoteur"
        ]
      },
      {
        "id": "P004",
        "name": "Machine d'essai spéciale pour torons d'acier servo-hydrauliques",
        "suffixName": "1000 kN",
        "model": "WAW-1000G",
        "category": "universal",
        "thumbnail": "/assets/images/WAW-1000GS.png",
        "description": "Ce produit convient aux essais de traction sur torons d'acier et peut également être utilisé pour des essais de traction, de compression, de cisaillement et autres sur des matériaux métalliques et non métalliques.",
        "features": [
          "La structure adopte une structure de type portique, en acier ultra-résistant.",
          "Le bouclier est fabriqué en matériau acrylique transparent, propre et esthétique, permettant d'observer l'intégralité du processus de test.",
          "Mâchoires hydrauliques externes, faciles à réviser.",
          "Avec une plaque de pression supérieure/inférieure, pour obtenir un double espace en traction et en compression.",
          "Le capteur utilise un capteur de roue et de rayon, offrant une haute précision, une vitesse stable et une fonction de réciprocité.",
          "Ordinateur de marque, avec clavier et souris sans fil, grand écran, commandes sensibles.",
          "Utilisation de deux pompes à huile et de deux moteurs pour assurer une source d'huile indépendante et une alimentation en pression stable."
        ],
        "standards": [
          "ASTM E8",
          "UNI 7676 (Wire Strands)",
          "EN ISO 7438",
          "EN ISO 15630-1",
          "ASTM A615",
          "ASTM A615M"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "1000"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "100～1000"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Espace d'essai vertical de traction (mm)",
            "value": "1050"
          },
          {
            "label": "Espace d'essai vertical de compression (mm)",
            "value": "950"
          },
          {
            "label": "Diamètre de serrage de l'échantillon (mm)",
            "value": "Φ12~Φ16"
          },
          {
            "label": "Course du piston (mm)",
            "value": "200"
          },
          {
            "label": "Dimensions du plateau de compression (mm)",
            "value": "Φ220(Upper) Φ230(Lower)"
          },
          {
            "label": "Vitesse maximale du piston (mm/min)",
            "value": "100"
          },
          {
            "label": "Vitesse maximale de la traverse (mm/min)",
            "value": "240"
          },
          {
            "label": "Espace de test horizontal (mm)",
            "value": "450"
          },
          {
            "label": "Tension d'alimentation",
            "value": "AC380V±10%,50-60Hz"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "1050×710×2910"
          },
          {
            "label": "Dimensions de l'armoire de commande (mm)",
            "value": "700×520×1630"
          },
          {
            "label": "Poids (kg)",
            "value": "3700"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Peut être amélioré en classe de précision 0,5 %.",
          "Peut être mis à niveau vers un système hydraulique à servomoteur"
        ]
      },
      {
        "id": "P007",
        "name": "Machine d'essai de matériaux universelle servo-hydraulique",
        "suffixName": "100 kN",
        "model": "WAW-100B",
        "category": "universal",
        "thumbnail": "/assets/images/WAW-100S.png",
        "description": "Ce produit convient aux métaux, aux matériaux non métalliques et composites, et permet de réaliser des essais de traction, de compression, de flexion, de cisaillement et autres propriétés mécaniques. Il est équipé d'un vérin sous-monté, d'une commande par micro-ordinateur et d'un servomoteur électrohydraulique, offrant ainsi une haute précision, une utilisation simple et pratique, une grande capacité de stockage de données et d'autres avantages.",
        "features": [
          "La machine utilise un capteur de déplacement de pression de haute précision, avec une vanne numérique haute sensibilité, une vitesse de réponse rapide et une haute résolution.",
          "La commande hydraulique adopte un système de servocommande hydraulique intégré, facile à utiliser, stable et fiable.",
          "Avec indication intelligente de l'état de fonctionnement, compensation automatique servo, positionnement, maintien de la pression et autres fonctions.",
          "L'espace de test peut être ajusté à volonté en déplaçant le faisceau, et différentes pièces d'essai peuvent être testées.",
          "La plage de mesure peut être commutée automatiquement et elle est sélectionnée automatiquement en fonction de la capacité de charge de l'échantillon.",
          "Grâce à sa fonction de maintien de la charge maximale, sa protection contre les surcharges et sa protection contre les dépassements de limite de position, son utilisation est plus sûre.",
          "Avec stockage automatique des données, calcul automatique et impression de tous les résultats des tests."
        ],
        "standards": [
          "EN ISO 6892-1",
          "ISO 7500",
          "EN 10002",
          "EN 10080",
          "EN 15630-1",
          "ASTM A370",
          "EN 15630-3",
          "EN ISO 7438",
          "EN ISO 15630-1",
          "ASTM A615",
          "ASTM A615M"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "100"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "10～100"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Espace d'essai vertical de traction (mm)",
            "value": "480"
          },
          {
            "label": "Espace d'essai vertical de compression (mm)",
            "value": "480"
          },
          {
            "label": "épaisseur de serrage de l'échantillon plat (mm)",
            "value": "0-15"
          },
          {
            "label": "Diamètre de serrage de l'échantillon rond (mm)",
            "value": "10-20"
          },
          {
            "label": "Course du piston (mm)",
            "value": "180"
          },
          {
            "label": "Dimensions du plateau de pression supérieur (mm)",
            "value": "Φ180"
          },
          {
            "label": "Dimensions du plateau de pression inférieur (mm)",
            "value": "Φ180"
          },
          {
            "label": "Distance entre les deux colonnes de l'espace de traction et de pression (mm)",
            "value": "380"
          },
          {
            "label": "Vitesse maximale du piston (mm/min)",
            "value": "100"
          },
          {
            "label": "Vitesse maximale de la traverse (mm/min)",
            "value": "240"
          },
          {
            "label": "Puissance des moteurs (kW)",
            "value": "1.2"
          },
          {
            "label": "Tension d'alimentation",
            "value": "AC380V±10%,50-60Hz"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "730×600×1750"
          },
          {
            "label": "Dimensions de l'armoire de commande (mm)",
            "value": "700×520×1630"
          },
          {
            "label": "Poids (kg)",
            "value": "1500"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Peut être amélioré en classe de précision 0,5 %.",
          "Peut être mis à niveau vers un système hydraulique à servomoteur"
        ]
      },
      {
        "id": "P008",
        "name": "Machine d'essai de matériaux universelle servo-hydraulique",
        "suffixName": "300 kN",
        "model": "WAW-300B",
        "category": "universal",
        "thumbnail": "/assets/images/WAW-300S.png",
        "description": "Ce produit convient aux métaux, aux matériaux non métalliques et composites, et permet de réaliser des essais de traction, de compression, de flexion, de cisaillement et autres propriétés mécaniques. Il est équipé d'un vérin sous-monté, d'une commande par micro-ordinateur et d'un servomoteur électrohydraulique, offrant ainsi une haute précision, une utilisation simple et pratique, une grande capacité de stockage de données et d'autres avantages.",
        "features": [
          "La machine utilise un capteur de déplacement de pression de haute précision, avec une vanne numérique haute sensibilité, une vitesse de réponse rapide et une haute résolution.",
          "La commande hydraulique adopte un système de servocommande hydraulique intégré, facile à utiliser, stable et fiable.",
          "Avec indication intelligente de l'état de fonctionnement, compensation automatique servo, positionnement, maintien de la pression et autres fonctions.",
          "L'espace de test peut être ajusté à volonté en déplaçant le faisceau, et différentes pièces d'essai peuvent être testées.",
          "La plage de mesure peut être commutée automatiquement et elle est sélectionnée automatiquement en fonction de la capacité de charge de l'échantillon.",
          "Grâce à sa fonction de maintien de la charge maximale, sa protection contre les surcharges et sa protection contre les dépassements de limite de position, son utilisation est plus sûre.",
          "Avec stockage automatique des données, calcul automatique et impression de tous les résultats des tests."
        ],
        "standards": [
          "EN ISO 6892-1",
          "ISO 7500",
          "EN 10002",
          "EN 10080",
          "EN 15630-1",
          "ASTM A370",
          "EN 15630-3",
          "EN ISO 7438",
          "EN ISO 15630-1",
          "ASTM A615",
          "ASTM A615M"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "300"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "30～300"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Espace d'essai vertical de traction (mm)",
            "value": "540"
          },
          {
            "label": "Espace d'essai vertical de compression (mm)",
            "value": "480"
          },
          {
            "label": "épaisseur de serrage de l'échantillon plat (mm)",
            "value": "0-15"
          },
          {
            "label": "Diamètre de serrage de l'échantillon rond (mm)",
            "value": "10-20 、20-32"
          },
          {
            "label": "Course du piston (mm)",
            "value": "180"
          },
          {
            "label": "Dimensions du plateau de pression supérieur (mm)",
            "value": "Φ180"
          },
          {
            "label": "Dimensions du plateau de pression inférieur (mm)",
            "value": "Φ180"
          },
          {
            "label": "Distance entre les deux colonnes de l'espace de traction et de pression (mm)",
            "value": "400"
          },
          {
            "label": "Vitesse maximale du piston (mm/min)",
            "value": "100"
          },
          {
            "label": "Vitesse maximale de la traverse (mm/min)",
            "value": "240"
          },
          {
            "label": "Puissance des moteurs (kW)",
            "value": "1.2"
          },
          {
            "label": "Tension d'alimentation",
            "value": "AC380V±10%,50-60Hz"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "730×600×1840"
          },
          {
            "label": "Dimensions de l'armoire de commande (mm)",
            "value": "700×520×1630"
          },
          {
            "label": "Poids (kg)",
            "value": "1700"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Peut être amélioré en classe de précision 0,5 %.",
          "Peut être mis à niveau vers un système hydraulique à servomoteur"
        ]
      },
      {
        "id": "P009",
        "name": "Machine d'essai de matériaux universelle servo-hydraulique",
        "suffixName": "600 kN",
        "model": "WAW-600B",
        "category": "universal",
        "thumbnail": "/assets/images/WAW-600S.png",
        "description": "Ce produit convient aux métaux, aux matériaux non métalliques et composites, et permet de réaliser des essais de traction, de compression, de flexion, de cisaillement et autres propriétés mécaniques. Il est équipé d'un vérin sous-monté, d'une commande par micro-ordinateur et d'un servomoteur électrohydraulique, offrant ainsi une haute précision, une utilisation simple et pratique, une grande capacité de stockage de données et d'autres avantages.",
        "features": [
          "La machine utilise un capteur de déplacement de pression de haute précision, avec une vanne numérique haute sensibilité, une vitesse de réponse rapide et une haute résolution.",
          "La commande hydraulique adopte un système de servocommande hydraulique intégré, facile à utiliser, stable et fiable.",
          "Avec indication intelligente de l'état de fonctionnement, compensation automatique servo, positionnement, maintien de la pression et autres fonctions.",
          "L'espace de test peut être ajusté à volonté en déplaçant le faisceau, et différentes pièces d'essai peuvent être testées.",
          "La plage de mesure peut être commutée automatiquement et elle est sélectionnée automatiquement en fonction de la capacité de charge de l'échantillon.",
          "Grâce à sa fonction de maintien de la charge maximale, sa protection contre les surcharges et sa protection contre les dépassements de limite de position, son utilisation est plus sûre.",
          "Avec stockage automatique des données, calcul automatique et impression de tous les résultats des tests."
        ],
        "standards": [
          "EN ISO 6892-1",
          "ISO 7500",
          "EN 10002",
          "EN 10080",
          "EN 15630-1",
          "ASTM A370",
          "EN 15630-3",
          "EN ISO 7438",
          "EN ISO 15630-1",
          "ASTM A615",
          "ASTM A615M"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "600"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "60～600"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Espace d'essai vertical de traction (mm)",
            "value": "690"
          },
          {
            "label": "Espace d'essai vertical de compression (mm)",
            "value": "620"
          },
          {
            "label": "épaisseur de serrage de l'échantillon plat (mm)",
            "value": "0-15"
          },
          {
            "label": "Diamètre de serrage de l'échantillon rond (mm)",
            "value": "13-26 、26-40"
          },
          {
            "label": "Course du piston (mm)",
            "value": "180"
          },
          {
            "label": "Dimensions du plateau de pression supérieur (mm)",
            "value": "Φ180"
          },
          {
            "label": "Dimensions du plateau de pression inférieur (mm)",
            "value": "Φ180"
          },
          {
            "label": "Distance entre les deux colonnes de l'espace de traction et de pression (mm)",
            "value": "400"
          },
          {
            "label": "Vitesse maximale du piston (mm/min)",
            "value": "100"
          },
          {
            "label": "Vitesse maximale de la traverse (mm/min)",
            "value": "240"
          },
          {
            "label": "Puissance des moteurs (kW)",
            "value": "1.8"
          },
          {
            "label": "Tension d'alimentation",
            "value": "AC380V±10%,50-60Hz"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "890×590×2070"
          },
          {
            "label": "Dimensions de l'armoire de commande (mm)",
            "value": "700×520×1630"
          },
          {
            "label": "Poids (kg)",
            "value": "2400"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Peut être amélioré en classe de précision 0,5 %.",
          "Peut être mis à niveau vers un système hydraulique à servomoteur"
        ]
      },
      {
        "id": "P010",
        "name": "Machine d'essai de matériaux universelle servo-hydraulique",
        "suffixName": "1000 kN",
        "model": "WAW-1000B",
        "category": "universal",
        "thumbnail": "/assets/images/WAW-1000S.png",
        "description": "Ce produit convient aux métaux, aux matériaux non métalliques et composites, et permet de réaliser des essais de traction, de compression, de flexion, de cisaillement et autres propriétés mécaniques. Il est équipé d'un vérin sous-monté, d'une commande par micro-ordinateur et d'un servomoteur électrohydraulique, offrant ainsi une haute précision, une utilisation simple et pratique, une grande capacité de stockage de données et d'autres avantages.",
        "features": [
          "La machine utilise un capteur de déplacement de pression de haute précision, avec une vanne numérique haute sensibilité, une vitesse de réponse rapide et une haute résolution.",
          "La commande hydraulique adopte un système de servocommande hydraulique intégré, facile à utiliser, stable et fiable.",
          "Avec indication intelligente de l'état de fonctionnement, compensation automatique servo, positionnement, maintien de la pression et autres fonctions.",
          "L'espace de test peut être ajusté à volonté en déplaçant le faisceau, et différentes pièces d'essai peuvent être testées.",
          "La plage de mesure peut être commutée automatiquement et elle est sélectionnée automatiquement en fonction de la capacité de charge de l'échantillon.",
          "Grâce à sa fonction de maintien de la charge maximale, sa protection contre les surcharges et sa protection contre les dépassements de limite de position, son utilisation est plus sûre.",
          "Avec stockage automatique des données, calcul automatique et impression de tous les résultats des tests."
        ],
        "standards": [
          "EN ISO 6892-1",
          "ISO 7500",
          "EN 10002",
          "EN 10080",
          "EN 15630-1",
          "ASTM A370",
          "EN 15630-3",
          "EN ISO 7438",
          "EN ISO 15630-1",
          "ASTM A615",
          "ASTM A615M"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "1000"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "100～1000"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Espace d'essai vertical de traction (mm)",
            "value": "690"
          },
          {
            "label": "Espace d'essai vertical de compression (mm)",
            "value": "620"
          },
          {
            "label": "épaisseur de serrage de l'échantillon plat (mm)",
            "value": "0-15"
          },
          {
            "label": "Diamètre de serrage de l'échantillon rond (mm)",
            "value": "14-32 、30-50"
          },
          {
            "label": "Course du piston (mm)",
            "value": "180"
          },
          {
            "label": "Dimensions du plateau de pression supérieur (mm)",
            "value": "Φ220"
          },
          {
            "label": "Dimensions du plateau de pression inférieur (mm)",
            "value": "Φ230"
          },
          {
            "label": "Distance entre les deux colonnes de l'espace de traction et de pression (mm)",
            "value": "450"
          },
          {
            "label": "Vitesse maximale du piston (mm/min)",
            "value": "100"
          },
          {
            "label": "Vitesse maximale de la traverse (mm/min)",
            "value": "240"
          },
          {
            "label": "Puissance des moteurs (kW)",
            "value": "1.8"
          },
          {
            "label": "Tension d'alimentation",
            "value": "AC380V±10%,50-60Hz"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "945×635×2100"
          },
          {
            "label": "Dimensions de l'armoire de commande (mm)",
            "value": "700×520×1630"
          },
          {
            "label": "Poids (kg)",
            "value": "2800"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Peut être amélioré en classe de précision 0,5 %.",
          "Peut être mis à niveau vers un système hydraulique à servomoteur"
        ]
      },
      {
        "id": "P011",
        "name": "Machine d'essai de matériaux universelle servo-hydraulique",
        "suffixName": "2000 kN",
        "model": "WAW-2000B",
        "category": "universal",
        "thumbnail": "/assets/images/WAW-2000S.png",
        "description": "Ce produit convient aux métaux, aux matériaux non métalliques et composites, et permet de réaliser des essais de traction, de compression, de flexion, de cisaillement et autres propriétés mécaniques. Il est équipé d'un vérin sous-monté, d'une commande par micro-ordinateur et d'un servomoteur électrohydraulique, offrant ainsi une haute précision, une utilisation simple et pratique, une grande capacité de stockage de données et d'autres avantages.",
        "features": [
          "La machine utilise un capteur de déplacement de pression de haute précision, avec une vanne numérique haute sensibilité, une vitesse de réponse rapide et une haute résolution.",
          "La commande hydraulique adopte un système de servocommande hydraulique intégré, facile à utiliser, stable et fiable.",
          "Avec indication intelligente de l'état de fonctionnement, compensation automatique servo, positionnement, maintien de la pression et autres fonctions.",
          "L'espace de test peut être ajusté à volonté en déplaçant le faisceau, et différentes pièces d'essai peuvent être testées.",
          "La plage de mesure peut être commutée automatiquement et elle est sélectionnée automatiquement en fonction de la capacité de charge de l'échantillon.",
          "Grâce à sa fonction de maintien de la charge maximale, sa protection contre les surcharges et sa protection contre les dépassements de limite de position, son utilisation est plus sûre.",
          "Avec stockage automatique des données, calcul automatique et impression de tous les résultats des tests."
        ],
        "standards": [
          "EN ISO 6892-1",
          "ISO 7500",
          "EN 10002",
          "EN 10080",
          "EN 15630-1",
          "ASTM A370",
          "EN 15630-3",
          "EN ISO 7438",
          "EN ISO 15630-1",
          "ASTM A615",
          "ASTM A615M"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "2000"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "200～2000"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Espace d'essai vertical de traction (mm)",
            "value": "790"
          },
          {
            "label": "Espace d'essai vertical de compression (mm)",
            "value": "720"
          },
          {
            "label": "épaisseur de serrage de l'échantillon plat (mm)",
            "value": "0-40"
          },
          {
            "label": "Diamètre de serrage de l'échantillon rond (mm)",
            "value": "20-40、40-60"
          },
          {
            "label": "Course du piston (mm)",
            "value": "250"
          },
          {
            "label": "Dimensions du plateau de pression supérieur (mm)",
            "value": "Φ220"
          },
          {
            "label": "Dimensions du plateau de pression inférieur (mm)",
            "value": "Φ230"
          },
          {
            "label": "Distance entre les deux colonnes de l'espace de traction et de pression (mm)",
            "value": "570"
          },
          {
            "label": "Vitesse maximale du piston (mm/min)",
            "value": "100"
          },
          {
            "label": "Vitesse maximale de la traverse (mm/min)",
            "value": "240"
          },
          {
            "label": "Puissance des moteurs (kW)",
            "value": "3.55"
          },
          {
            "label": "Tension d'alimentation",
            "value": "AC380V±10%,50-60Hz"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "1200×800×2940"
          },
          {
            "label": "Dimensions de l'armoire de commande (mm)",
            "value": "700×520×1630"
          },
          {
            "label": "Poids (kg)",
            "value": "3500"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Peut être amélioré en classe de précision 0,5 %.",
          "Peut être mis à niveau vers un système hydraulique à servomoteur"
        ]
      },
      {
        "id": "P022",
        "name": "Machine d'essai de matériaux universelle à affichage numérique",
        "suffixName": "100 kN",
        "model": "WE-100B",
        "category": "universal",
        "thumbnail": "/assets/images/WE-1000B（出口）.png",
        "description": "La machine d'essai, également connue sous le nom de machine de traction, est alimentée par pression hydraulique et convient principalement aux essais de traction, de compression et autres sur les matériaux métalliques. Équipée de dispositifs de fixation appropriés, elle peut également être utilisée pour effectuer des essais de traction, de compression, de flexion et de cisaillement sur des matériaux non métalliques afin de tester leurs propriétés mécaniques. Elle trouve de nombreuses applications dans l'industrie des matériaux, la métallurgie, la métallurgie des métaux non ferreux, les matériaux de construction, l'industrie mécanique, les transports, etc.",
        "features": [],
        "standards": [
          "EN ISO 6892-1",
          "ISO 7500",
          "EN 10002",
          "EN 10080",
          "EN 15630-1",
          "ASTM A370",
          "EN 15630-3",
          "EN ISO 7438",
          "EN ISO 15630-1",
          "ASTM A615",
          "ASTM A615M"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "100"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "10～100"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Espace d'essai vertical de traction (mm)",
            "value": "480"
          },
          {
            "label": "Espace d'essai vertical de compression (mm)",
            "value": "480"
          },
          {
            "label": "épaisseur de serrage de l'échantillon plat (mm)",
            "value": "0～15"
          },
          {
            "label": "Diamètre de serrage de l'échantillon rond (mm)",
            "value": "10～20"
          },
          {
            "label": "Course du piston (mm)",
            "value": "120"
          },
          {
            "label": "Dimensions du plateau de compression (mm)",
            "value": "Φ180(Upper) Φ180(Lower)"
          },
          {
            "label": "Espace de test horizontal (mm)",
            "value": "380"
          },
          {
            "label": "Vitesse maximale du piston (mm/min)",
            "value": "100"
          },
          {
            "label": "Vitesse maximale de la traverse (mm/min)",
            "value": "240"
          },
          {
            "label": "Puissance des moteurs (kW)",
            "value": "1.3"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "730×600×1750"
          },
          {
            "label": "Dimensions de l'armoire de commande (mm)",
            "value": "530×500×1270"
          },
          {
            "label": "Poids total (kg)",
            "value": "1500"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P023",
        "name": "Machine d'essai de matériaux universelle à affichage numérique",
        "suffixName": "300 kN",
        "model": "WE-300B",
        "category": "universal",
        "thumbnail": "/assets/images/WE-1000B（出口）.png",
        "description": "La machine d'essai, également connue sous le nom de machine de traction, est alimentée par pression hydraulique et convient principalement aux essais de traction, de compression et autres sur les matériaux métalliques. Équipée de dispositifs de fixation appropriés, elle peut également être utilisée pour effectuer des essais de traction, de compression, de flexion et de cisaillement sur des matériaux non métalliques afin de tester leurs propriétés mécaniques. Elle trouve de nombreuses applications dans l'industrie des matériaux, la métallurgie, la métallurgie des métaux non ferreux, les matériaux de construction, l'industrie mécanique, les transports, etc.",
        "features": [],
        "standards": [
          "EN ISO 6892-1",
          "ISO 7500",
          "EN 10002",
          "EN 10080",
          "EN 15630-1",
          "ASTM A370",
          "EN 15630-3",
          "EN ISO 7438",
          "EN ISO 15630-1",
          "ASTM A615",
          "ASTM A615M"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "300"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "30～300"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Espace d'essai vertical de traction (mm)",
            "value": "540"
          },
          {
            "label": "Espace d'essai vertical de compression (mm)",
            "value": "480"
          },
          {
            "label": "épaisseur de serrage de l'échantillon plat (mm)",
            "value": "0～15"
          },
          {
            "label": "Diamètre de serrage de l'échantillon rond (mm)",
            "value": "10～20、20～32"
          },
          {
            "label": "Course du piston (mm)",
            "value": "180"
          },
          {
            "label": "Dimensions du plateau de compression (mm)",
            "value": "Φ180(Upper) Φ180(Lower)"
          },
          {
            "label": "Espace de test horizontal (mm)",
            "value": "400"
          },
          {
            "label": "Vitesse maximale du piston (mm/min)",
            "value": "100"
          },
          {
            "label": "Vitesse maximale de la traverse (mm/min)",
            "value": "240"
          },
          {
            "label": "Puissance des moteurs (kW)",
            "value": "1.3"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "730×600×1840"
          },
          {
            "label": "Dimensions de l'armoire de commande (mm)",
            "value": "530×500×1270"
          },
          {
            "label": "Poids total (kg)",
            "value": "1700"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P024",
        "name": "Machine d'essai de matériaux universelle à affichage numérique",
        "suffixName": "600 kN",
        "model": "WE-600B",
        "category": "universal",
        "thumbnail": "/assets/images/WE-1000B（出口）.png",
        "description": "La machine d'essai, également connue sous le nom de machine de traction, est alimentée par pression hydraulique et convient principalement aux essais de traction, de compression et autres sur les matériaux métalliques. Équipée de dispositifs de fixation appropriés, elle peut également être utilisée pour effectuer des essais de traction, de compression, de flexion et de cisaillement sur des matériaux non métalliques afin de tester leurs propriétés mécaniques. Elle trouve de nombreuses applications dans l'industrie des matériaux, la métallurgie, la métallurgie des métaux non ferreux, les matériaux de construction, l'industrie mécanique, les transports, etc.",
        "features": [],
        "standards": [
          "EN ISO 6892-1",
          "ISO 7500",
          "EN 10002",
          "EN 10080",
          "EN 15630-1",
          "ASTM A370",
          "EN 15630-3",
          "EN ISO 7438",
          "EN ISO 15630-1",
          "ASTM A615",
          "ASTM A615M"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "600"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "60～600"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Espace d'essai vertical de traction (mm)",
            "value": "690"
          },
          {
            "label": "Espace d'essai vertical de compression (mm)",
            "value": "620"
          },
          {
            "label": "épaisseur de serrage de l'échantillon plat (mm)",
            "value": "0～15"
          },
          {
            "label": "Diamètre de serrage de l'échantillon rond (mm)",
            "value": "13～26、26～40"
          },
          {
            "label": "Course du piston (mm)",
            "value": "180"
          },
          {
            "label": "Dimensions du plateau de compression (mm)",
            "value": "Φ180(Upper) Φ180(Lower)"
          },
          {
            "label": "Espace de test horizontal (mm)",
            "value": "400"
          },
          {
            "label": "Vitesse maximale du piston (mm/min)",
            "value": "100"
          },
          {
            "label": "Vitesse maximale de la traverse (mm/min)",
            "value": "240"
          },
          {
            "label": "Puissance des moteurs (kW)",
            "value": "1.8"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "890×590×2070"
          },
          {
            "label": "Dimensions de l'armoire de commande (mm)",
            "value": "530×500×1270"
          },
          {
            "label": "Poids total (kg)",
            "value": "2400"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P026",
        "name": "Machine d'essai de matériaux universelle à affichage numérique",
        "suffixName": "2000 kN",
        "model": "WE-2000B",
        "category": "universal",
        "thumbnail": "/assets/images/WE-1000B（出口）.png",
        "description": "La machine d'essai, également connue sous le nom de machine de traction, est alimentée par pression hydraulique et convient principalement aux essais de traction, de compression et autres sur les matériaux métalliques. Équipée de dispositifs de fixation appropriés, elle peut également être utilisée pour effectuer des essais de traction, de compression, de flexion et de cisaillement sur des matériaux non métalliques afin de tester leurs propriétés mécaniques. Elle trouve de nombreuses applications dans l'industrie des matériaux, la métallurgie, la métallurgie des métaux non ferreux, les matériaux de construction, l'industrie mécanique, les transports, etc.",
        "features": [],
        "standards": [
          "EN ISO 6892-1",
          "ISO 7500",
          "EN 10002",
          "EN 10080",
          "EN 15630-1",
          "ASTM A370",
          "EN 15630-3",
          "EN ISO 7438",
          "EN ISO 15630-1",
          "ASTM A615",
          "ASTM A615M"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "2000"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "200～2000"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Espace d'essai vertical de traction (mm)",
            "value": "790"
          },
          {
            "label": "Espace d'essai vertical de compression (mm)",
            "value": "720"
          },
          {
            "label": "épaisseur de serrage de l'échantillon plat (mm)",
            "value": "0～40"
          },
          {
            "label": "Diamètre de serrage de l'échantillon rond (mm)",
            "value": "20～40、40～60"
          },
          {
            "label": "Course du piston (mm)",
            "value": "250"
          },
          {
            "label": "Dimensions du plateau de compression (mm)",
            "value": "Φ220(Upper) Φ230(Lower)"
          },
          {
            "label": "Espace de test horizontal (mm)",
            "value": "570"
          },
          {
            "label": "Vitesse maximale du piston (mm/min)",
            "value": "100"
          },
          {
            "label": "Vitesse maximale de la traverse (mm/min)",
            "value": "240"
          },
          {
            "label": "Puissance des moteurs (kW)",
            "value": "1.8"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "1200×800×2940"
          },
          {
            "label": "Dimensions de l'armoire de commande (mm)",
            "value": "530×500×1270"
          },
          {
            "label": "Poids total (kg)",
            "value": "3500"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P027",
        "name": "Machine d'essai universelle électronique pour matériaux",
        "suffixName": "100 kN",
        "model": "WDW-100",
        "category": "tensile",
        "thumbnail": "/assets/images/WDW-50.png",
        "description": "Ce produit convient aux essais et à l'analyse des propriétés mécaniques de divers métaux, non-métaux et matériaux composites, et permet d'obtenir des données d'essai telles que la valeur de la force d'essai maximale, la valeur de la force de rupture, la limite d'élasticité, les limites d'élasticité supérieure et inférieure, la résistance à la traction, la résistance à la compression, l'allongement à la rupture, le module d'élasticité en traction et le module d'élasticité en flexion des matériaux testés.",
        "features": [
          "Verrouillage arbitraire de la hauteur de la position de sécurité et de la position expérimentale.",
          "Protection automatique en cas de dépassement de la charge maximale, double protection entre limite logicielle et limite électronique."
        ],
        "standards": [
          "ASTM E83",
          "BS 3846",
          "ISO 9513",
          "EN 10002-4"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "100"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1% (can be customized to 0.5 on request)"
          },
          {
            "label": "Plage de mesure de charge",
            "value": "1% to 100% FS"
          },
          {
            "label": "Espace de test vertical (sans gabarit)",
            "value": "800mm"
          },
          {
            "label": "Espace de test horizontal",
            "value": "400mm"
          },
          {
            "label": "Plage de vitesse de la traverse",
            "value": "0.01～500mm/min"
          },
          {
            "label": "Résolution de contrôle de position",
            "value": "0.025µm"
          },
          {
            "label": "Précision de la mesure du déplacement",
            "value": "Within ±0.5%"
          },
          {
            "label": "Plage de mesure de la déformation",
            "value": "0.2%～100%FS"
          },
          {
            "label": "Précision de la mesure de la déformation",
            "value": "Within ±0.5%"
          },
          {
            "label": "Plage de vitesse d'essai",
            "value": "0.5% ～ 100%FS"
          },
          {
            "label": "Test de vitesse et de précision",
            "value": "Within ±1% of the set value when the set value is <10%FS; Within ±0.1% of the set value when the set value is ≥10%FS"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "1000×800×2200"
          },
          {
            "label": "Alimentation électrique",
            "value": "220V±10%, 2000W"
          },
          {
            "label": "Poids de l'ordinateur central",
            "value": "About 760kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Espace de test personnalisable",
          "Un extensomètre peut être installé pour une mesure précise de la déformation.",
          "Compatible avec différentes cellules de charge pour différentes plages de force",
          "Poignées facilement interchangeables pour différents tests"
        ]
      },
      {
        "id": "P028",
        "name": "Machine d'essai universelle électronique pour matériaux",
        "suffixName": "50 kN",
        "model": "WDW-50",
        "category": "tensile",
        "thumbnail": "/assets/images/WDW-50.png",
        "description": "Ce produit convient aux essais et à l'analyse des propriétés mécaniques de divers métaux, non-métaux et matériaux composites, et permet d'obtenir des données d'essai telles que la valeur de la force d'essai maximale, la valeur de la force de rupture, la limite d'élasticité, les limites d'élasticité supérieure et inférieure, la résistance à la traction, la résistance à la compression, l'allongement à la rupture, le module d'élasticité en traction et le module d'élasticité en flexion des matériaux testés.",
        "features": [
          "Verrouillage arbitraire de la hauteur de la position de sécurité et de la position expérimentale.",
          "Protection automatique en cas de dépassement de la charge maximale, double protection par limite logicielle et limite électronique."
        ],
        "standards": [
          "ASTM E83",
          "BS 3846",
          "ISO 9513",
          "EN 10002-4"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "50"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1% (can be customized to 0.5 on request)"
          },
          {
            "label": "Plage de mesure de charge",
            "value": "1% to 100% FS"
          },
          {
            "label": "Espace de test vertical (sans gabarit)",
            "value": "800mm"
          },
          {
            "label": "Espace de test horizontal",
            "value": "400mm"
          },
          {
            "label": "Plage de vitesse de la traverse",
            "value": "0.01～500mm/min"
          },
          {
            "label": "Résolution de contrôle de position",
            "value": "0.025µm"
          },
          {
            "label": "Précision de la mesure du déplacement",
            "value": "Within ±0.5%"
          },
          {
            "label": "Plage de mesure de la déformation",
            "value": "0.2%～100%FS"
          },
          {
            "label": "Précision de la mesure de la déformation",
            "value": "Within ±0.5%"
          },
          {
            "label": "Plage de vitesse d'essai",
            "value": "0.5% ～ 100%FS"
          },
          {
            "label": "Test de vitesse et de précision",
            "value": "Within ±1% of the set value when the set value is <10%FS; Within ±0.1% of the set value when the set value is ≥10%FS"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "900×500×1900"
          },
          {
            "label": "Alimentation électrique",
            "value": "220V±10%, 750W"
          },
          {
            "label": "Poids de l'ordinateur central Environ",
            "value": "230kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Espace de test personnalisable",
          "Un extensomètre peut être installé pour une mesure précise de la déformation.",
          "Compatible avec différentes cellules de charge pour différentes plages de force",
          "Poignées facilement interchangeables pour différents tests"
        ]
      },
      {
        "id": "P029",
        "name": "Machine d'essai universelle électronique pour matériaux",
        "suffixName": "10 kN",
        "model": "WDW-10",
        "category": "tensile",
        "thumbnail": "/assets/images/WDW-20.png",
        "description": "Ce produit convient aux essais et à l'analyse des propriétés mécaniques de divers métaux, non-métaux et matériaux composites, et permet d'obtenir des données d'essai telles que la valeur de la force d'essai maximale, la valeur de la force de rupture, la limite d'élasticité, les limites d'élasticité supérieure et inférieure, la résistance à la traction, la résistance à la compression, l'allongement à la rupture, le module d'élasticité en traction et le module d'élasticité en flexion des matériaux testés.",
        "features": [
          "Verrouillage arbitraire de la hauteur de la position de sécurité et de la position expérimentale.",
          "Protection automatique en cas de dépassement de la charge maximale, double protection par limite logicielle et limite électronique."
        ],
        "standards": [
          "ASTM E83",
          "BS 3846",
          "ISO 9513",
          "EN 10002-4"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "10"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1% (can be customized to 0.5 on request)"
          },
          {
            "label": "Plage de mesure de charge",
            "value": "1% to 100% FS"
          },
          {
            "label": "Espace de test vertical (sans gabarit)",
            "value": "800mm"
          },
          {
            "label": "Espace de test horizontal",
            "value": "400mm"
          },
          {
            "label": "Plage de vitesse de la traverse",
            "value": "0.01～500mm/min"
          },
          {
            "label": "Résolution de contrôle de position",
            "value": "0.025µm"
          },
          {
            "label": "Précision de la mesure du déplacement",
            "value": "Within ±0.5%"
          },
          {
            "label": "Plage de mesure de la déformation",
            "value": "0.2%～100%FS"
          },
          {
            "label": "Précision de la mesure de la déformation",
            "value": "Within ±0.5%"
          },
          {
            "label": "Plage de vitesse d'essai",
            "value": "0.5% ～ 100%FS"
          },
          {
            "label": "Test de vitesse et de précision",
            "value": "Within ±1% of the set value when the set value is <10%FS; Within ±0.1% of the set value when the set value is ≥10%FS"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "800×450×1600"
          },
          {
            "label": "Alimentation électrique",
            "value": "220V±10%, 400W"
          },
          {
            "label": "Poids de l'ordinateur central Environ",
            "value": "190kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Espace de test personnalisable",
          "Un extensomètre peut être installé pour une mesure précise de la déformation.",
          "Compatible avec différentes cellules de charge pour différentes plages de force",
          "Poignées facilement interchangeables pour différents tests"
        ]
      },
      {
        "id": "P030",
        "name": "Machine d'essai universelle électronique pour matériaux",
        "suffixName": "20 kN",
        "model": "WDW-20",
        "category": "tensile",
        "thumbnail": "/assets/images/WDW-20.png",
        "description": "Ce produit convient aux essais et à l'analyse des propriétés mécaniques de divers métaux, non-métaux et matériaux composites, et permet d'obtenir des données d'essai telles que la valeur de la force d'essai maximale, la valeur de la force de rupture, la limite d'élasticité, les limites d'élasticité supérieure et inférieure, la résistance à la traction, la résistance à la compression, l'allongement à la rupture, le module d'élasticité en traction et le module d'élasticité en flexion des matériaux testés.",
        "features": [
          "Verrouillage arbitraire de la hauteur de la position de sécurité et de la position expérimentale.",
          "Protection automatique en cas de dépassement de la charge maximale, double protection par limite logicielle et limite électronique."
        ],
        "standards": [
          "ASTM E83",
          "BS 3846",
          "ISO 9513",
          "EN 10002-4"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "20"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1% (can be customized to 0.5 on request)"
          },
          {
            "label": "Plage de mesure de charge",
            "value": "1% to 100% FS"
          },
          {
            "label": "Espace de test vertical (sans gabarit)",
            "value": "800mm"
          },
          {
            "label": "Espace de test horizontal",
            "value": "400mm"
          },
          {
            "label": "Plage de vitesse de la traverse",
            "value": "0.01～500mm/min"
          },
          {
            "label": "Résolution de contrôle de position",
            "value": "0.025µm"
          },
          {
            "label": "Précision de la mesure du déplacement",
            "value": "Within ±0.5%"
          },
          {
            "label": "Plage de mesure de la déformation",
            "value": "0.2%～100%FS"
          },
          {
            "label": "Précision de la mesure de la déformation",
            "value": "Within ±0.5%"
          },
          {
            "label": "Plage de vitesse d'essai",
            "value": "0.5% ～ 100%FS"
          },
          {
            "label": "Test de vitesse et de précision",
            "value": "Within ±1% of the set value when the set value is <10%FS; Within ±0.1% of the set value when the set value is ≥10%FS"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "800×450×1600"
          },
          {
            "label": "Alimentation électrique",
            "value": "220V±10%, 400W"
          },
          {
            "label": "Poids de l'ordinateur central Environ",
            "value": "190kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Espace de test personnalisable",
          "Un extensomètre peut être installé pour une mesure précise de la déformation.",
          "Compatible avec différentes cellules de charge pour différentes plages de force",
          "Poignées facilement interchangeables pour différents tests"
        ]
      },
      {
        "id": "P031",
        "name": "Machine d'essai universelle électronique pour matériaux",
        "suffixName": "5 kN",
        "model": "WDW-5",
        "category": "tensile",
        "thumbnail": "/assets/images/WDW-5.png",
        "description": "Ce produit convient aux essais et à l'analyse des propriétés mécaniques de divers métaux, non-métaux et matériaux composites, et permet d'obtenir des données d'essai telles que la valeur de la force d'essai maximale, la valeur de la force de rupture, la limite d'élasticité, les limites d'élasticité supérieure et inférieure, la résistance à la traction, la résistance à la compression, l'allongement à la rupture, le module d'élasticité en traction et le module d'élasticité en flexion des matériaux testés.",
        "features": [
          "Verrouillage arbitraire de la hauteur de la position de sécurité et de la position expérimentale.",
          "Protection automatique en cas de dépassement de la charge maximale, double protection par limite logicielle et limite électronique.",
          "Contrôle par micro-ordinateur, affichage en temps réel des graphiques, génération automatique des rapports."
        ],
        "standards": [
          "ASTM E83",
          "BS 3846",
          "ISO 9513",
          "EN 10002-4"
        ],
        "specifications": [
          {
            "label": "Charge maximale",
            "value": "5KN"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1% (can be customized to 0.5 on request)"
          },
          {
            "label": "Plage de mesure de charge",
            "value": "1% to 100% FS"
          },
          {
            "label": "Espace de test vertical (sans gabarit)",
            "value": "800mm"
          },
          {
            "label": "Espace de test horizontal",
            "value": "100mm"
          },
          {
            "label": "Plage de vitesse de la traverse",
            "value": "0.01～500mm/min"
          },
          {
            "label": "Résolution de contrôle de position",
            "value": "0.025µm"
          },
          {
            "label": "Précision de la mesure du déplacement",
            "value": "Within ±1%"
          },
          {
            "label": "Plage de mesure de la déformation",
            "value": "0.2%～100%FS"
          },
          {
            "label": "Précision de la mesure de la déformation",
            "value": "±1% of the displayed value"
          },
          {
            "label": "Alimentation électrique",
            "value": "220V±10%,0.4kW"
          },
          {
            "label": "Dimensions de la machine principale",
            "value": "600×380×1500mm"
          },
          {
            "label": "Poids environ",
            "value": "80kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Espace de test personnalisable",
          "Un extensomètre peut être installé pour une mesure précise de la déformation.",
          "Compatible avec différentes cellules de charge pour différentes plages de force",
          "Poignées facilement interchangeables pour différents tests"
        ]
      },
      {
        "id": "P035",
        "name": "Machine d'essai de compression à servocommande",
        "suffixName": "Modèle EN 2000 kN",
        "model": "YAW-2000H",
        "category": "concrete",
        "thumbnail": "/assets/images/YAW-2000H.png",
        "description": "Ce produit convient aux essais de résistance à la compression de la brique, de la pierre, du ciment, du béton et d'autres matériaux, et peut également être utilisé pour les essais de performance en compression d'autres matériaux. Il est conforme aux normes ISO, ASTM et autres normes applicables.",
        "features": [],
        "standards": [
          "EN 12390-4",
          "ASTM C39",
          "AASHTO T22",
          "BS 812-110",
          "812-111",
          "EN 772-1"
        ],
        "specifications": [
          {
            "label": "Force d'essai (kN)",
            "value": "2000"
          },
          {
            "label": "Taux de chargement (MPa)",
            "value": "0.3～1.0,1.0 or above can be entered manually"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "200～2000"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Espace de test vertical (mm)",
            "value": "320"
          },
          {
            "label": "Dimensions de la plaque de compression (mm)",
            "value": "Φ300(Upper) Φ300(Lower)"
          },
          {
            "label": "Course du piston (mm)",
            "value": "50"
          },
          {
            "label": "Diamètre du piston (mm)",
            "value": "Φ250"
          },
          {
            "label": "Pression nominale de la pompe hydraulique (MPa)",
            "value": "40"
          },
          {
            "label": "Puissance totale (kW)",
            "value": "1.1"
          },
          {
            "label": "Alimentation électrique",
            "value": "AC220V±10%, 60Hz"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "580×500×1400"
          },
          {
            "label": "Dimensions hors tout de l'armoire de commande (mm)",
            "value": "560×550×1310"
          },
          {
            "label": "Poids (kg)",
            "value": "900"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P036",
        "name": "Machine d'essai de compression à servocommande",
        "suffixName": "Modèle EN 2000 kN",
        "model": "YAW-2000S",
        "category": "concrete",
        "thumbnail": "/assets/images/YAW-2000S.png",
        "description": "Ce produit convient aux essais de résistance à la compression de la brique, de la pierre, du ciment, du béton et d'autres matériaux, et peut également être utilisé pour les essais de performance en compression d'autres matériaux.",
        "features": [
          "Le châssis adopte la structure d'un châssis moulé pour l'ensemble de la machine ;",
          "Source d'huile servo importée ;",
          "Microvanne numérique de haute précision ;",
          "Huile pour servomoteur importée, température de l'huile non trop élevée ;",
          "Le capteur utilise un capteur de charge de haute précision pour garantir l'exactitude des données. La vanne de régulation possède une fonction de contrôle en boucle fermée de la force, permettant un chargement à taux de charge égal ou à taux de contrainte égal, avec une précision de contrôle élevée et une grande fiabilité."
        ],
        "standards": [
          "EN 12390-4",
          "BS 1881",
          "ASTM C39",
          "BS 1610",
          "NF P18-411",
          "AASHTO T22",
          "DIN 51220",
          "BS 812-110",
          "812-111",
          "EN 772-1",
          "ASTM C140",
          "ASTM C1314",
          "EN 13412"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "2000"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "100~2000"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±0.5%"
          },
          {
            "label": "Vitesse de chargement",
            "value": "0.3MPa-1.0MPa"
          },
          {
            "label": "Précision du taux de chargement",
            "value": "±5%"
          },
          {
            "label": "Espace de test vertical (mm)",
            "value": "330"
          },
          {
            "label": "Dimensions des plateaux supérieur et inférieur (mm)",
            "value": "Φ280(Upper) Φ320(Lower)"
          },
          {
            "label": "Course du piston (mm)",
            "value": "120"
          },
          {
            "label": "Diamètre du piston (mm)",
            "value": "Φ250"
          },
          {
            "label": "Pression nominale de la pompe hydraulique (MPa)",
            "value": "40"
          },
          {
            "label": "Dimensions",
            "value": "1100x510x1510mm"
          },
          {
            "label": "Poids",
            "value": "1200kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P037",
        "name": "Machine d'essai de compression à servocommande",
        "suffixName": "Modèle EN 3000 kN",
        "model": "YAW-3000S",
        "category": "concrete",
        "thumbnail": "/assets/images/YAW-3000S.png",
        "description": "Ce produit convient aux essais de résistance à la compression de la brique, de la pierre, du ciment, du béton et d'autres matériaux, et peut également être utilisé pour les essais de performance en compression d'autres matériaux.",
        "features": [
          "Le châssis adopte la structure d'un châssis moulé pour l'ensemble de la machine ;",
          "Source d'huile servo importée ;",
          "Microvanne numérique de haute précision ;",
          "Huile pour servomoteur importée, température de l'huile non trop élevée ;",
          "Le capteur utilise un capteur de charge de haute précision pour garantir l'exactitude des données. La vanne de régulation possède une fonction de contrôle en boucle fermée de la force, permettant un chargement à taux de charge égal ou à taux de contrainte égal, avec une précision de contrôle élevée et une grande fiabilité."
        ],
        "standards": [
          "EN 12390-4",
          "BS 1881",
          "ASTM C39",
          "BS 1610",
          "NF P18-411",
          "AASHTO T22",
          "DIN 51220",
          "BS 812-110",
          "812-111",
          "EN 772-1",
          "ASTM C140",
          "ASTM C1314",
          "EN 13412"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "3000"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "150~3000"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±0.5%"
          },
          {
            "label": "Vitesse de chargement",
            "value": "0.3MPa-1.0MPa"
          },
          {
            "label": "Précision du taux de chargement",
            "value": "±5%"
          },
          {
            "label": "Espace de test vertical (mm)",
            "value": "330mm"
          },
          {
            "label": "Dimensions des plateaux supérieur et inférieur (mm)",
            "value": "Φ280(Upper) Φ320(Lower)"
          },
          {
            "label": "Course du piston (mm)",
            "value": "120"
          },
          {
            "label": "Diamètre du piston (mm)",
            "value": "Φ310"
          },
          {
            "label": "Pression nominale de la pompe hydraulique (MPa)",
            "value": "40"
          },
          {
            "label": "Dimensions",
            "value": "1250x550x1510mm"
          },
          {
            "label": "Poids",
            "value": "2000kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P038",
        "name": "Machine d'essai de compression à servocommande",
        "suffixName": "2000 kN",
        "model": "TSY-2000A",
        "category": "concrete",
        "thumbnail": "/assets/images/TSY-2000A.png",
        "description": "Ce produit convient aux essais de résistance à la compression de la brique, de la pierre, du ciment, du béton et d'autres matériaux, et peut également être utilisé pour les essais de performance en compression d'autres matériaux. Il est conforme aux normes ISO, ASTM et autres normes applicables.",
        "features": [
          "La pompe hydraulique adopte une pompe axiale à cinq pistons ultra-haute pression, qui fonctionne en douceur et est peu bruyante ;",
          "La vanne de régulation adopte une microvanne de débit numérique de haute précision avec une grande précision de contrôle ;",
          "Le capteur utilise un capteur de pression, qui présente une bonne fiabilité ;",
          "Adopter le principe du rayonnage automatique pour renforcer le contrôle de la cadence de chargement."
        ],
        "standards": [
          "ASTM C39",
          "BS 1610",
          "NF P18-411",
          "AASHTO T22",
          "DIN 51220",
          "BS 812-110",
          "812-111",
          "EN 772-1",
          "ASTM C140",
          "ASTM C1314",
          "EN 13412"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "2000"
          },
          {
            "label": "Vitesse de chargement",
            "value": "0.3～1.0MPa,1.0 or above can be entered manually"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "200～2000"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Espace de test vertical (mm)",
            "value": "320mm"
          },
          {
            "label": "Dimensions des plateaux supérieur et inférieur (mm)",
            "value": "Φ260(Upper) Φ260(Lower)"
          },
          {
            "label": "course du piston",
            "value": "50mm"
          },
          {
            "label": "Diamètre du piston (mm)",
            "value": "Φ250"
          },
          {
            "label": "Pression nominale de la pompe hydraulique (MPa)",
            "value": "40MPa"
          },
          {
            "label": "Puissance totale",
            "value": "1.1kW"
          },
          {
            "label": "Alimentation électrique",
            "value": "AC380V±10%, 50-60Hz"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "580×500×1400"
          },
          {
            "label": "Dimensions de l'armoire de commande (mm)",
            "value": "560×550×1310"
          },
          {
            "label": "Poids",
            "value": "900kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P039",
        "name": "Machine d'essai de compression à servocommande",
        "suffixName": "3000 kN",
        "model": "TSY-3000A",
        "category": "concrete",
        "thumbnail": "/assets/images/TSY-3000A.png",
        "description": "Ce produit convient aux essais de résistance à la compression de la brique, de la pierre, du ciment, du béton et d'autres matériaux, et peut également être utilisé pour les essais de performance en compression d'autres matériaux. Il est conforme aux normes ISO, ASTM et autres normes applicables.",
        "features": [
          "La pompe hydraulique adopte une pompe axiale à cinq pistons ultra-haute pression, qui fonctionne en douceur et est peu bruyante ;",
          "La vanne de régulation adopte une microvanne de débit numérique de haute précision avec une grande précision de contrôle ;",
          "Le capteur utilise un capteur de pression, qui présente une bonne fiabilité ;",
          "Adopter le principe du rayonnage automatique pour renforcer le contrôle de la cadence de chargement."
        ],
        "standards": [
          "ASTM C39",
          "BS 1610",
          "NF P18-411",
          "AASHTO T22",
          "DIN 51220",
          "BS 812-110",
          "812-111",
          "EN 772-1",
          "ASTM C140",
          "ASTM C1314",
          "EN 13412"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "3000"
          },
          {
            "label": "Vitesse de chargement",
            "value": "0.3～1.0MPa,1.0 or above can be entered manually"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "300～3000"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Espace de test vertical (mm)",
            "value": "320mm"
          },
          {
            "label": "Dimensions des plateaux supérieur et inférieur (mm)",
            "value": "Φ320(Upper) Φ320(Lower)"
          },
          {
            "label": "course du piston",
            "value": "50mm"
          },
          {
            "label": "Diamètre du piston (mm)",
            "value": "Φ310"
          },
          {
            "label": "Pression nominale de la pompe hydraulique (MPa)",
            "value": "40"
          },
          {
            "label": "Puissance totale",
            "value": "1.8kW"
          },
          {
            "label": "Alimentation électrique",
            "value": "AC380V±10%, 50-60Hz"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "550×650×1750"
          },
          {
            "label": "Dimensions de l'armoire de commande (mm)",
            "value": "560×550×1310"
          },
          {
            "label": "Poids",
            "value": "1300kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P040",
        "name": "Machine d'essai de compression à affichage numérique",
        "suffixName": "2000 kN",
        "model": "TSY-2000B",
        "category": "concrete",
        "thumbnail": "/assets/images/TSY-2000B.png",
        "description": "Ce produit convient aux essais de résistance à la compression de la brique, de la pierre, du ciment, du béton et d'autres matériaux, et peut également être utilisé pour les essais de performance en compression d'autres matériaux.",
        "features": [
          "Avec fonction d'affichage numérique de la charge ;",
          "Fonction de maintien de la charge maximale ;",
          "Fonction de protection des données en cas de mise hors tension ;",
          "La pompe hydraulique est une pompe axiale à cinq pistons à ultra-haute pression, entraînée directement par un moteur électrique ;",
          "Il existe une soupape de sécurité sur la vanne de distribution d'huile, qui peut déborder en cas de surcharge, jouant ainsi un rôle de sécurité ;",
          "La molette de la vanne de distribution d'huile permet de régler l'arrivée d'huile du vérin hydraulique afin d'obtenir le débit de charge requis."
        ],
        "standards": [
          "ASTM C39",
          "BS 1610",
          "NF P18-411",
          "AASHTO T22",
          "DIN 51220",
          "BS 812-110",
          "812-111",
          "EN 772-1",
          "ASTM C140",
          "ASTM C1314"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "2000"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "200～2000"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Espace de test vertical (mm)",
            "value": "320"
          },
          {
            "label": "Dimensions des plateaux supérieur et inférieur (mm)",
            "value": "Φ260(Upper) Φ260(Lower)"
          },
          {
            "label": "course du piston",
            "value": "50mm"
          },
          {
            "label": "Diamètre du piston (mm)",
            "value": "Φ250"
          },
          {
            "label": "Pression nominale de la pompe hydraulique (MPa)",
            "value": "40"
          },
          {
            "label": "Puissance totale",
            "value": "1.1kW"
          },
          {
            "label": "Alimentation électrique",
            "value": "AC380V,50-60Hz"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "580×500×1400"
          },
          {
            "label": "Dimensions de l'armoire de commande (mm)",
            "value": "510×540×1470"
          },
          {
            "label": "Poids",
            "value": "900kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P041",
        "name": "Machine d'essai de compression à affichage numérique",
        "suffixName": "3000 kN",
        "model": "TSY-3000B",
        "category": "concrete",
        "thumbnail": "/assets/images/TSY-3000B.png",
        "description": "Ce produit convient aux essais de résistance à la compression de la brique, de la pierre, du ciment, du béton et d'autres matériaux, et peut également être utilisé pour les essais de performance en compression d'autres matériaux.",
        "features": [
          "Avec fonction d'affichage numérique de la charge ;",
          "Fonction de maintien de la charge maximale ;",
          "Fonction de protection des données en cas de mise hors tension ;",
          "La pompe hydraulique est une pompe axiale à cinq pistons à ultra-haute pression, entraînée directement par un moteur électrique ;",
          "Il existe une soupape de sécurité sur la vanne de distribution d'huile, qui peut déborder en cas de surcharge, jouant ainsi un rôle de sécurité ;",
          "La molette de la vanne de distribution d'huile permet de régler l'arrivée d'huile du vérin hydraulique afin d'obtenir le débit de charge requis."
        ],
        "standards": [
          "ASTM C39",
          "BS 1610",
          "NF P18-411",
          "AASHTO T22",
          "DIN 51220",
          "BS 812-110",
          "812-111",
          "EN 772-1",
          "ASTM C140",
          "ASTM C1314"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "3000"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "300～3000"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Espace de test vertical (mm)",
            "value": "330"
          },
          {
            "label": "Dimensions des plateaux supérieur et inférieur (mm)",
            "value": "Φ320(Upper) Φ320(Lower)"
          },
          {
            "label": "course du piston",
            "value": "50mm"
          },
          {
            "label": "Diamètre du piston (mm)",
            "value": "Φ310"
          },
          {
            "label": "Pression nominale de la pompe hydraulique (MPa)",
            "value": "40"
          },
          {
            "label": "Puissance totale",
            "value": "1.8kW"
          },
          {
            "label": "Alimentation électrique",
            "value": "AC380V,50-60Hz"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "550×560×1750"
          },
          {
            "label": "Dimensions de l'armoire de commande (mm)",
            "value": "510×540×1470"
          },
          {
            "label": "Poids",
            "value": "1200kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P042",
        "name": "Machine d'essai de compression à affichage numérique",
        "suffixName": "2000 kN",
        "model": "TSY-2000",
        "category": "concrete",
        "thumbnail": "/assets/images/TSY-2000.png",
        "description": "Cette machine d'essai est principalement utilisée pour les essais de résistance à la compression de matériaux de construction tels que la brique, le mortier de ciment et le béton, et peut également être utilisée pour les essais de performance mécanique d'autres matériaux.",
        "features": [
          "Avec fonction d'affichage numérique de la charge ;",
          "Fonction de maintien de la charge maximale ;",
          "Fonction de protection des données en cas de mise hors tension ;",
          "La pompe hydraulique est une pompe axiale à cinq pistons à ultra-haute pression, entraînée directement par un moteur électrique ;",
          "Il existe une soupape de sécurité sur la vanne de distribution d'huile, qui peut déborder en cas de surcharge, jouant ainsi un rôle de sécurité ;",
          "La molette de la vanne de distribution d'huile permet de régler l'arrivée d'huile du vérin hydraulique afin d'obtenir le débit de charge requis."
        ],
        "standards": [
          "ASTM C39",
          "BS 1610",
          "NF P18-411",
          "AASHTO T22",
          "DIN 51220",
          "BS 812-110",
          "812-111",
          "EN 772-1",
          "ASTM C140",
          "ASTM C1314"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "2000"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "200～2000"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Course du piston (mm)",
            "value": "50"
          },
          {
            "label": "Diamètre du piston (mm)",
            "value": "Φ250"
          },
          {
            "label": "Pression nominale de la pompe hydraulique",
            "value": "40MPa"
          },
          {
            "label": "La distance entre le plateau supérieur et le plateau inférieur",
            "value": "320mm"
          },
          {
            "label": "Dimensions des plateaux supérieur et inférieur (mm)",
            "value": "Φ260(Upper) Φ260(Lower)"
          },
          {
            "label": "Puissance totale",
            "value": "1.1kW"
          },
          {
            "label": "tension d'alimentation",
            "value": "AC380V±10%, 50-60Hz"
          },
          {
            "label": "Dimensions générales",
            "value": "920×400×1200mm"
          },
          {
            "label": "Poids",
            "value": "700kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P043",
        "name": "Machine d'essai de flexion et de compression du ciment à servocommande",
        "suffixName": "",
        "model": "YAW-300.10S",
        "category": "cement",
        "thumbnail": "/assets/images/YAW-300.10S.png",
        "description": "La machine d'essai de flexion et de compression du ciment à servocommande YAW-300·10S est une presse servo de nouvelle génération, développée et produite par Zhejiang Luda. Forte de son expertise technologique et de ses capacités de production, notre entreprise a eu l'honneur de participer à l'élaboration de nouvelles normes pour les machines tout-en-un. Cette machine d'essai est un instrument essentiel pour les matériaux de construction, le génie civil, le contrôle qualité, la métrologie, les instituts de recherche et autres organismes.",
        "features": [
          "L'ensemble de la machine adopte un plan de travail en panneau physique et chimique, et le cadre adopte un revêtement électrolytique de surface statique, ce qui le rend facile à nettoyer et esthétique ;",
          "La partie anti-flexion adopte un vérin hydraulique électrique, qui offre une grande précision, un contrôle stable, un déplacement précis et une valeur de force exacte ;",
          "Le capteur adopte le capteur à rayons, qui présente une haute précision, une vitesse et une réciprocité stables ;",
          "Système de servomoteur, silencieux de bout en bout, faible niveau sonore, température de l'huile qui ne monte pas facilement, rendement et stabilité élevés, tension monophasée 220 V, grande polyvalence, rendement élevé et économie d'énergie ;",
          "Le couvercle de protection est fabriqué en matériau acrylique transparent, propre et esthétique, et permet d'observer le processus de test tout au long de celui-ci ;",
          "Le gabarit de compression de ciment de 40 mm x 40 mm est fabriqué en matériau entièrement galvanisé."
        ],
        "standards": [
          "EN 196-1",
          "EN 933-5",
          "EN 1015-11",
          "ISO 679",
          "ASTM C109",
          "C348",
          "C349",
          "C1194",
          "BS 4550"
        ],
        "specifications": [
          {
            "label": "Test de résistance à la compression",
            "value": ""
          },
          {
            "label": "Capacité de charge en compression (kN)",
            "value": "300"
          },
          {
            "label": "vitesse de chargement constante",
            "value": "0.3~9.9kN/s"
          },
          {
            "label": "espacement des plateaux supérieur et inférieur",
            "value": "185mm"
          },
          {
            "label": "diamètre de la plaque de compression",
            "value": "Φ120mm"
          },
          {
            "label": "Course du piston (mm)",
            "value": "90"
          },
          {
            "label": "Test de résistance à la flexion",
            "value": ""
          },
          {
            "label": "Capacité de charge en flexion (kN)",
            "value": "10"
          },
          {
            "label": "vitesse de chargement constante",
            "value": "0.05kN/s"
          },
          {
            "label": "longueur du côté de la section",
            "value": "40mm"
          },
          {
            "label": "Portée entre les supports",
            "value": "100mm"
          },
          {
            "label": "Course du piston (mm)",
            "value": "70"
          },
          {
            "label": "Indication d'erreur relative (précision)",
            "value": "±0.5%"
          },
          {
            "label": "Erreur relative de répétabilité de l'indication",
            "value": "0.5%"
          },
          {
            "label": "Retour à une erreur relative nulle",
            "value": "±0.1%"
          },
          {
            "label": "La résolution relative du dispositif d'affichage de la valeur de force de la machine d'essai",
            "value": "0.5%"
          },
          {
            "label": "Dérive nulle",
            "value": "≤±0.1%"
          },
          {
            "label": "Alimentation électrique",
            "value": "220V(±10%),1.5kW"
          },
          {
            "label": "Dimensions",
            "value": "1300×480×1340mm"
          },
          {
            "label": "Poids",
            "value": "500kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P044",
        "name": "Machine d'essai de compression à servocommande",
        "suffixName": "300 kN",
        "model": "YAW-300S",
        "category": "cement",
        "thumbnail": "/assets/images/YAW-300S.png",
        "description": "La machine d'essai de compression de ciment à servocommande YAW-300S est une presse servo de nouvelle génération, développée et produite par Zhejiang Luda. Forte de son expertise technologique et de ses capacités de production, notre entreprise a eu l'honneur d'être invitée à participer à l'élaboration de nouvelles normes pour les machines tout-en-un. Cette machine d'essai est un instrument essentiel pour les matériaux de construction, le génie civil, le contrôle qualité, les essais métrologiques, les instituts de recherche scientifique et autres organismes.",
        "features": [
          "Un servomoteur importé est utilisé pour contrôler la source d'huile ;",
          "servovalve de débit haute précision ;",
          "Grâce à la fonction de contrôle en boucle fermée de la force, il est possible de réaliser le chargement du taux de contrainte de charge ;",
          "Il peut permettre une charge à taux de charge égal ou une charge à taux de contrainte égal."
        ],
        "standards": [
          "EN 196-1",
          "EN 933-5",
          "EN 1015-11",
          "ISO 679",
          "ASTM C109",
          "C348",
          "C349",
          "C1194",
          "BS 4550"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "300"
          },
          {
            "label": "vitesse de chargement constante",
            "value": "0.3~9.9kN"
          },
          {
            "label": "espacement des plateaux supérieur et inférieur",
            "value": "185mm"
          },
          {
            "label": "diamètre de la plaque de compression",
            "value": "Φ120mm"
          },
          {
            "label": "Course du piston (mm)",
            "value": "90"
          },
          {
            "label": "Indication d'erreur relative (précision)",
            "value": "±0.5%"
          },
          {
            "label": "Erreur relative de répétabilité de l'indication",
            "value": "0.5%"
          },
          {
            "label": "Retour à une erreur relative nulle",
            "value": "±0.1%"
          },
          {
            "label": "La résolution relative du dispositif d'affichage de la valeur de force de la machine d'essai",
            "value": "0.5%"
          },
          {
            "label": "Dérive nulle",
            "value": "≤±0.1%"
          },
          {
            "label": "Alimentation électrique",
            "value": "220V (±10%),1.5kW"
          },
          {
            "label": "Dimensions",
            "value": "1100×480×1340mm"
          },
          {
            "label": "Poids",
            "value": "460kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P045",
        "name": "Machine d'essai de flexion-compression du ciment à servocommande",
        "suffixName": "",
        "model": "YZH-300.10",
        "category": "cement",
        "thumbnail": "/assets/images/YZH-300.10.png",
        "description": "La machine d'essai de flexion et de compression du ciment à servocommande YZH-300·10 est une machine d'essai de pression qui intègre la résistance à la flexion et à la compression du ciment, développée conjointement par Zhejiang Luda Machinery Instrument Co., Ltd. et l'Université de technologie du Zhejiang. Ce produit adopte des vérins hydrauliques doubles anti-flexion et anti-compression pour réaliser respectivement l'essai de la résistance à la compression et de la résistance à la flexion du ciment.",
        "features": [
          "L'utilisation d'une micro-vanne numérique de haute précision permet de réaliser un chargement à vitesse variable ;",
          "Grâce à la fonction de contrôle en boucle fermée de la force, il est possible de réaliser le chargement du taux de contrainte de charge ;",
          "La pompe hydraulique adopte une pompe axiale à cinq pistons ultra-haute pression, qui fonctionne en douceur et est peu bruyante ;",
          "La vanne de régulation adopte une microvanne numérique de haute précision avec une grande précision de contrôle ;",
          "Le capteur utilise un capteur de pression, qui présente une bonne fiabilité ;",
          "Le principe du chargement automatique est adopté pour renforcer le contrôle de la vitesse de chargement."
        ],
        "standards": [
          "EN 196-1",
          "EN 933-5",
          "EN 1015-11",
          "ISO 679",
          "ASTM C109",
          "C348",
          "C349",
          "C1194",
          "BS 4550"
        ],
        "specifications": [
          {
            "label": "Test de résistance à la compression",
            "value": ""
          },
          {
            "label": "Capacité de charge en compression (kN)",
            "value": "300"
          },
          {
            "label": "vitesse de chargement constante",
            "value": "0.3~9.9kN/s"
          },
          {
            "label": "espacement des plateaux supérieur et inférieur",
            "value": "190mm"
          },
          {
            "label": "diamètre de la plaque de compression",
            "value": "Φ120mm"
          },
          {
            "label": "Course du piston (mm)",
            "value": "90"
          },
          {
            "label": "Test de résistance à la flexion",
            "value": ""
          },
          {
            "label": "Capacité de charge en flexion (kN)",
            "value": "10"
          },
          {
            "label": "vitesse de chargement constante",
            "value": "0.05kN/s"
          },
          {
            "label": "longueur du côté de la section",
            "value": "40mm"
          },
          {
            "label": "Portée entre les supports",
            "value": "100mm"
          },
          {
            "label": "Course du piston (mm)",
            "value": "70"
          },
          {
            "label": "Indication d'erreur relative (précision)",
            "value": "±1.0%"
          },
          {
            "label": "Erreur relative de répétabilité de l'indication",
            "value": "1.0%"
          },
          {
            "label": "Retour à une erreur relative nulle",
            "value": "±0.1%"
          },
          {
            "label": "La résolution relative du dispositif d'affichage de la valeur de force de la machine d'essai",
            "value": "0.5%"
          },
          {
            "label": "Alimentation électrique",
            "value": "380V(±10%),0.55kW"
          },
          {
            "label": "Dimensions",
            "value": "1200×490×1350mm"
          },
          {
            "label": "Poids",
            "value": "400kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P046",
        "name": "Machine d'essai de compression à servocommande",
        "suffixName": "300 kN",
        "model": "YAW-300",
        "category": "cement",
        "thumbnail": "/assets/images/YAW-300.png",
        "description": "Ce produit convient aux essais de résistance à la compression de la brique, de la pierre, du ciment, du béton et d'autres matériaux, et peut également être utilisé pour les essais de performance en compression d'autres matériaux.",
        "features": [
          "Le cylindre de travail et le piston de travail adoptent des accouplements de précision, intégrant des bagues d'étanchéité composites pour obtenir le meilleur état d'étanchéité ;",
          "On utilise une pompe à huile haute pression à piston axial, qui fonctionne en douceur et est peu bruyante ;",
          "Le capteur utilise un capteur de pression, qui est très fiable ;",
          "La vanne de régulation adopte une microvanne numérique de haute précision avec une grande précision de contrôle ;",
          "Adopter le principe du chargement automatique pour renforcer le contrôle de la vitesse de chargement."
        ],
        "standards": [
          "EN 196-1",
          "EN 933-5",
          "EN 1015-11",
          "ISO 679",
          "ASTM C109",
          "C348",
          "C349",
          "C1194",
          "BS 4550"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "300"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "30~300"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Vitesse de chargement",
            "value": "0.3～9.9kN/s"
          },
          {
            "label": "La distance entre le plateau supérieur et le plateau inférieur",
            "value": "180mm"
          },
          {
            "label": "diamètre de la plaque de compression",
            "value": "Φ120mm"
          },
          {
            "label": "Course du piston (mm)",
            "value": "90"
          },
          {
            "label": "Diamètre du piston (mm)",
            "value": "Φ140"
          },
          {
            "label": "Pression nominale de la pompe hydraulique (MPa)",
            "value": "31.5"
          },
          {
            "label": "tension d'alimentation",
            "value": "AC380V±10%, 0.55kW"
          },
          {
            "label": "Dimensions",
            "value": "890×600×1450mm"
          },
          {
            "label": "Poids",
            "value": "400kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P047",
        "name": "Machine d'essai de compression à affichage numérique",
        "suffixName": "300 kN",
        "model": "TSY-300",
        "category": "cement",
        "thumbnail": "/assets/images/TSY-300.png",
        "description": "Ce produit convient aux essais de résistance à la compression de la brique, de la pierre, du ciment, du béton et d'autres matériaux, et peut également être utilisé pour les essais de performance en compression d'autres matériaux.",
        "features": [
          "Il peut ajuster automatiquement le parallélisme de la surface d'appui entre l'éprouvette et la plaque de pression, de sorte que l'éprouvette soit soumise à une contrainte uniforme ;",
          "Il existe un dispositif d'étanchéité entre le piston et le cylindre d'huile pour éviter les fuites d'huile ;",
          "Doté d'une soupape de sécurité, qui peut déborder en cas de surcharge et jouer un rôle de protection de sécurité ;",
          "Les données de test sont traitées automatiquement et le rapport de test est imprimé."
        ],
        "standards": [
          "EN 196-1",
          "EN 933-5",
          "EN 1015-11",
          "ISO 679",
          "ASTM C109",
          "C348",
          "C349",
          "C1194",
          "BS 4550"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "300"
          },
          {
            "label": "Indication d'erreur relative (précision)",
            "value": "±1%"
          },
          {
            "label": "Pression nominale de la pompe hydraulique",
            "value": "31.5MPa"
          },
          {
            "label": "diamètre de la plaque de compression",
            "value": "Φ140mm"
          },
          {
            "label": "Espace de test vertical (mm)",
            "value": "190mm"
          },
          {
            "label": "Diamètre du piston et course maximale",
            "value": "Φ140*90mm"
          },
          {
            "label": "Puissance du moteur",
            "value": "0.55kW"
          },
          {
            "label": "tension d'alimentation",
            "value": "AC380V±10%"
          },
          {
            "label": "Dimensions",
            "value": "880×430×900mm"
          },
          {
            "label": "Poids",
            "value": "390kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P049",
        "name": "Machine d'essai de compression spéciale pour couvercles de regards à servocommande",
        "suffixName": "1000 kN",
        "model": "TSY-1000S",
        "category": "large_machine",
        "thumbnail": "/assets/images/TSY-1000S.png",
        "description": "La machine d'essai de pression pour plaques d'égout de la série TSY est le fruit d'une collaboration scientifique et technologique entre notre société et l'Institut de transmission et de contrôle des fluides de l'Université de technologie du Zhejiang. Elle est principalement utilisée pour tester la résistance à la charge et la déformation résiduelle des plaques d'égout, mais peut également servir à tester les performances mécaniques d'autres matériaux.",
        "features": [
          "Cette machine adopte un système de déformation de haute précision et un système d'acquisition de haute résolution ;",
          "La commande hydraulique adopte un système de servocommande à circuit d'huile intégré ;",
          "Chargement stable et fiable, fonctionnement intelligent ;",
          "Il possède les fonctions de levage automatique, de positionnement automatique, d'étalonnage automatique, de force et de déformation égales, de compensation automatique servo, de positionnement, de maintien de la pression, d'indication intelligente de l'état de fonctionnement et de contrôle mixte ;",
          "Avec fonction de protection des données en cas de coupure de courant ;",
          "Les données expérimentales sont traitées automatiquement, et l'opération est pratique et fiable ;",
          "La configuration correspondante peut être sélectionnée en fonction des différents besoins des clients."
        ],
        "standards": [
          "EN 124-1"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "1000"
          },
          {
            "label": "Bloc de réglage rigide",
            "value": "Φ356×40mm"
          },
          {
            "label": "Bloc d'étalonnage",
            "value": "500×500×50mm"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "100～1000"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±0.5%"
          },
          {
            "label": "Course du piston (mm)",
            "value": "250"
          },
          {
            "label": "Diamètre du piston (mm)",
            "value": "Φ210"
          },
          {
            "label": "Pression nominale de la pompe hydraulique",
            "value": "31.5MPa"
          },
          {
            "label": "Espace de test",
            "value": "1200×1200×300"
          },
          {
            "label": "Alimentation électrique",
            "value": "1.2kW"
          },
          {
            "label": "tension d'alimentation",
            "value": "AC380V±10%"
          },
          {
            "label": "Dimensions de l'ordinateur central",
            "value": "1400×1200×1400mm"
          },
          {
            "label": "Dimensions de l'armoire de commande (mm)",
            "value": "1200×700×900"
          },
          {
            "label": "Poids",
            "value": "2200kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P050",
        "name": "Machine d'essai de traverses à charge statique",
        "suffixName": "500 kN",
        "model": "TSY-500",
        "category": "large_machine",
        "thumbnail": "/assets/images/TSY-500轨枕.png",
        "description": "La machine d'essai de traverses sous charge statique est un appareil permettant de tester la résistance à la fissuration sous charge statique des traverses en béton (traverses de type I, traverses de type II, traverses de type III, traverses à fourche, traverses de pont, traverses larges, etc.).",
        "features": [
          "La mesure de la force de cette machine utilise un capteur de charge de haute précision, une commande par programme micro-ordinateur, un système de chargement hydraulique proportionnel électrohydraulique et d'autres technologies ;",
          "Utilisez la règle de positionnement (fournie par l'utilisateur) pour ajuster la position de la traverse afin que le centre de charge coïncide avec le centre de la plaque de pression ;",
          "Conformément au mode de fonctionnement établi, le piston se déplace librement ;",
          "Doté de trois capteurs de rayons de haute précision pour garantir des données précises sur trois points de pression distincts, et équipé de lampes LED spéciales pour l'observation des fissures. Afin de faciliter le test des traverses selon les normes étrangères, le point d'appui peut être ajusté ;",
          "Le processus de chargement est ajusté avec l'algorithme de contrôle PID à structure variable, l'erreur de contrôle de vitesse constante est ≤5% et l'erreur de contrôle de maintien de pression est ≤0,5%;",
          "Vitesse de chargement Chargement uniforme ;",
          "Le point de charge statique peut être défini arbitrairement, et le rapport de résultats est imprimé automatiquement."
        ],
        "standards": [
          "EN 13230-1",
          "EN 13230-2",
          "EN 13230-3"
        ],
        "specifications": [
          {
            "label": "La valeur de charge maximale sous le rail",
            "value": "500kN"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Charge initiale après la pose de la traverse",
            "value": "<20kN"
          },
          {
            "label": "Vitesse de chargement",
            "value": "3000±300N/s"
          },
          {
            "label": "Temps d'attente",
            "value": "180s"
          },
          {
            "label": "Course du piston (mm)",
            "value": "250"
          },
          {
            "label": "Distance de chargement sous rail réglable",
            "value": "600, 700, 800mm"
          },
          {
            "label": "Distance de chargement réglable dans le rail",
            "value": "600, 1500mm"
          },
          {
            "label": "Espace de test vertical",
            "value": "Distance between Upper and Lower Supports :430 mm"
          },
          {
            "label": "Espace de test horizontal",
            "value": "Distance between Four Columns: 820, 900mm"
          },
          {
            "label": "Dimensions de l'ordinateur central",
            "value": "1720×990×2266mm"
          },
          {
            "label": "Transport",
            "value": "3390×700×135mm"
          },
          {
            "label": "Armoire de commande",
            "value": "1210×770×1020mm"
          },
          {
            "label": "Paramètres liés à la station de pompage hydraulique",
            "value": ""
          },
          {
            "label": "Pression nominale",
            "value": "High Pressure Oil Pump 31.5MPa"
          },
          {
            "label": "Cylindrée nominale",
            "value": "High Pressure Oil Pump 25ml/rec"
          },
          {
            "label": "Puissance du moteur",
            "value": "1.2kW ,Speed 980rpm"
          },
          {
            "label": "Tension d'alimentation",
            "value": "AC380V±10%"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P051",
        "name": "Machine d'essai de relaxation de traction de brins à servocommande",
        "suffixName": "300 kN",
        "model": "LDCJ-300",
        "category": "large_machine",
        "thumbnail": "/assets/images/LDCJ-300.png",
        "description": "Ce produit convient aux équipements de test permettant de mesurer les propriétés de relaxation des matériaux métalliques à température ambiante.",
        "features": [
          "La machine est de structure horizontale, de hauteur modérée et facile à utiliser. Le socle porteur est une structure soudée à la fois très rigide et légère ;",
          "Le vérin traversant universel précontraint est adopté, ce qui lui confère une grande polyvalence et le rend adapté à la précontrainte. Il est applicable à la mise en tension des groupes de clips Ovam, des ancrages de type DM et des ancrages coulés à froid de type LEM ;",
          "Le piston du cric de travail est à double effet, ce qui permet un retour rapide ;",
          "En utilisant une pompe à haut débit et haute pression, la vitesse de chargement peut être contrôlée par une vanne manuelle ;",
          "Dispositif de mesure et de contrôle entièrement numérique, performances stables, précision de mesure et de contrôle élevée ;",
          "Avec effacement automatique de la force et du déplacement, fonction d'étalonnage automatique ;",
          "La résolution de la mesure de la force est élevée et reste constante tout au long du processus, et elle n'est pas divisée en fichiers ;",
          "L'ensemble de la machine est équipé de 6 plaques de support à trous ronds."
        ],
        "standards": [
          "ASTM E328",
          "ISO 15630-3"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "300"
          },
          {
            "label": "Plage de mesure de charge effective (kN)",
            "value": "30～300"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1%"
          },
          {
            "label": "Résolution de chargement",
            "value": "1N"
          },
          {
            "label": "Précision de l'indication de déplacement",
            "value": "Better than ±0.5% of indication"
          },
          {
            "label": "Vitesse de chargement",
            "value": "0.01-40 mm/mincan be set arbitrarily"
          },
          {
            "label": "Course de la vis",
            "value": "100mm"
          },
          {
            "label": "Espace de test",
            "value": "2200mm(the maximum stretching distance  between the left and right chucks)"
          },
          {
            "label": "Alimentation",
            "value": "AC220V±10%, 2.3kW"
          },
          {
            "label": "Dimensions",
            "value": "2250×530×1200mm"
          },
          {
            "label": "Poids",
            "value": "1200kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P052",
        "name": "Machine d'essai de cintrage de tubes métalliques",
        "suffixName": "",
        "model": "LDGW-60C",
        "category": "large_machine",
        "thumbnail": "/assets/images/LDGW-60C.png",
        "description": "La machine d'essai de cintrage de tubes en acier LDGW-60C se caractérise par sa structure compacte, sa simplicité d'utilisation, l'affichage intuitif de l'angle de cintrage, sa facilité d'entretien, sa stabilité, sa sécurité et son faible niveau sonore. Spécialement conçue pour les essais de cintrage à froid des tubes en acier, elle constitue un équipement idéal pour les aciéries et les entreprises de construction souhaitant tester les performances de cintrage et de cintrage inverse des tubes en acier.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Diamètre extérieur du tuyau en acier",
            "value": "φ10.2-φ60.3mm (8 types)"
          },
          {
            "label": "Rayon de courbure du centre de courbure",
            "value": "6d"
          },
          {
            "label": "Angle de flexion",
            "value": "Set arbitrarily within 0-90°"
          },
          {
            "label": "Résolution du réglage de l'angle",
            "value": "1°"
          },
          {
            "label": "Précision du contrôle d'angle",
            "value": "±1°"
          },
          {
            "label": "Mode de contrôle",
            "value": "Manual control, automatic control"
          },
          {
            "label": "Vitesse du disque de travail",
            "value": "1.4r/min"
          },
          {
            "label": "Puissance du moteur",
            "value": "2kW"
          },
          {
            "label": "Forme de machine",
            "value": "1300×900×1200 (mm)"
          },
          {
            "label": "Poids de la machine",
            "value": "2000kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P053",
        "name": "Machine d'essai de pliage et de repliage des métaux",
        "suffixName": "Pour les barres d'armature, les tôles et les tuyaux métalliques",
        "model": "LDWQ-40D",
        "category": "large_machine",
        "thumbnail": "/assets/images/LDWQ-40D.png",
        "description": "La machine d'essai de pliage de barres d'acier est un équipement spécialisé pour les essais de pliage à froid et de pliage plan inverse des barres d'acier. Elle est principalement utilisée dans les services de contrôle qualité des industries métallurgiques et du génie civil, et peut également servir au contrôle de la résistance au pliage des matières premières de construction et des points de soudure des barres d'acier. C'est un équipement couramment utilisé pour les essais et la recherche en matière de performance.",
        "features": [
          "Conception de fuselage intégré fermé vertical, système hydraulique à pompe à huile silencieuse ;",
          "Conception à 3 cylindres, l'écartement des rouleaux est entraîné par 2 cylindres latéraux avec mesure de déplacement ;",
          "Dotée d'un couvercle de protection entièrement transparent visible dans toutes les directions, la porte coulissante de protection avant en plexiglas coulisse silencieusement ;",
          "Commande PLC importée, équipée d'un écran tactile de 10,1 pouces avec affichage animé, affichage en temps réel de l'angle, contrôle automatique du processus de pliage et autres fonctions. Interface utilisateur conviviale, les étapes de test ont été décomposées en une interface plein écran, suivez les instructions pour opérer étape par étape, facile à apprendre ;",
          "Test de flexion du support (0-180 degrés), test de flexion inverse (flexion avant 90 degrés, flexion inverse 20 degrés), la flexion inverse nécessite l'utilisation d'un support de flexion supplémentaire (optionnel) ;",
          "Avec tiroir de récupération des scories et de la pellicule d'oxyde d'acier ;",
          "Test en un clic. Après la sélection par l'utilisateur du type et du diamètre de la barre d'acier, la cintreuse ajuste automatiquement la portée et détermine le nombre de segments de cintrage. Après le test de pressage, la cintreuse effectue automatiquement le cintrage et la pressage latéral. Enfin, les vérins hydrauliques vertical et latéral reviennent automatiquement à leur position initiale."
        ],
        "standards": [
          "EN ISO 7438",
          "EN ISO 15630-1",
          "ASTM A615",
          "ASTM A615M"
        ],
        "specifications": [
          {
            "label": "Plage de diamètres de pliage",
            "value": "Φ6-Φ40mm"
          },
          {
            "label": "Plage d'angles de flexion",
            "value": "Set arbitrarily within 0-180°"
          },
          {
            "label": "Course du cylindre",
            "value": "250mm"
          },
          {
            "label": "Vitesse de flexion transversale",
            "value": "300mm/min"
          },
          {
            "label": "Distance entre les centres des rouleaux",
            "value": "＞600mm"
          },
          {
            "label": "Noyau de flexion positive",
            "value": "Φ6、Φ8、Φ10、Φ12、Φ14、Φ16、Φ18、Φ20、Φ24、Φ32、Φ40、Φ48、Φ56、Φ64、Φ72、Φ80、Φ88、Φ100、Φ140、Φ160、Φ180、Φ200mm"
          },
          {
            "label": "noyau à flexion inversée",
            "value": "Φ40、Φ50、Φ60、Φ70、Φ80、Φ84、Φ90、Φ100、Φ110、Φ125、Φ168、Φ192、Φ216、Φ240mm"
          },
          {
            "label": "Alimentation",
            "value": "AC380V±10%"
          },
          {
            "label": "Puissance nominale",
            "value": "3000W"
          },
          {
            "label": "Forme de machine",
            "value": "1760×700×2160mm"
          },
          {
            "label": "Poids de l'équipement",
            "value": "750kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P055",
        "name": "Machine d'essai de tension de couple de boulons à servocommande",
        "suffixName": "",
        "model": "LD-JZ500D",
        "category": "large_machine",
        "thumbnail": "/assets/images/LD-JZ500D.png",
        "description": "Cet appareil permet de détecter, d'afficher et d'imprimer la force axiale et le couple des boulons non standard de 7/16 pouce. Il peut être équipé d'une clé de cisaillement de torsion spéciale et permet également de mesurer la force axiale (force de pré-serrage) après le desserrage d'un assemblage boulonné haute résistance de 7/16 pouce (cette clé est disponible sur commande spéciale).",
        "features": [
          "Ce produit dispose d'une fonction de sauvegarde et de récupération des paramètres, d'une fonction d'étalonnage automatique, et la surveillance de la valeur de crête est également paramétrée en fonction des exigences de détection des boulons à haute résistance.",
          "Afin de répondre aux besoins des utilisateurs, l'instrument est équipé d'une interface réseau connectée à l'ordinateur, permettant de transmettre et de télécharger des données, puis d'imprimer le rapport après traitement."
        ],
        "standards": [
          "ISO 16047",
          "ASTM D5648"
        ],
        "specifications": [
          {
            "label": "Plage de mesure de la force axiale",
            "value": "30~500kN"
          },
          {
            "label": "Plage de mesure du couple",
            "value": "50~2000Nm"
          },
          {
            "label": "Résolution",
            "value": "±0.1kN"
          },
          {
            "label": "Erreur d'indication",
            "value": "±1%kN"
          },
          {
            "label": "Mode d'affichage",
            "value": "Liquid crystal display"
          },
          {
            "label": "Dimensions générales",
            "value": "1470×550×1400mm"
          },
          {
            "label": "Poids",
            "value": "1600kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P057",
        "name": "Analyseur de teneur en asphalte",
        "suffixName": "méthode de combustion",
        "model": "LDRS-6",
        "category": "asphalt",
        "thumbnail": "/assets/images/LDRS-6.png",
        "description": "Ce produit utilise la méthode de combustion pour déterminer la teneur en bitume. Doté d'un système de mesure et de contrôle de haute précision et associé à une balance importée, il permet une mesure rapide, précise, sûre et fiable de la teneur en bitume. Il répond aux exigences de production en série des centrales d'enrobage et de surveillance et d'inspection des routes, garantissant ainsi la qualité de la construction routière.",
        "features": [
          "Ce produit est doté d'un système de mesure et de contrôle de haute précision et est utilisé avec une balance importée. Il permet de mesurer rapidement, précisément, en toute sécurité et de manière fiable la teneur en asphalte, et répond aux exigences de la production en série continue des centrales d'enrobage ainsi que de la surveillance et de l'inspection des routes, garantissant ainsi la qualité de la construction routière."
        ],
        "standards": [
          "AASHTO T308-10",
          "ASTM D6307-10",
          "BS EN 12697-39:2012"
        ],
        "specifications": [
          {
            "label": "dimensions de la pièce de travail",
            "value": "360mm×400mm×300mm"
          },
          {
            "label": "tension de fonctionnement du châssis principal",
            "value": "380V±10V,8000W"
          },
          {
            "label": "Tension de fonctionnement de l'instrument",
            "value": "220V±10V (reliable grounding required)"
          },
          {
            "label": "Capacité d'équilibre",
            "value": "10kg, division 0.1g"
          },
          {
            "label": "température de fonctionnement maximale de la chambre de combustion",
            "value": "800° C"
          },
          {
            "label": "Poids maximal de l'échantillon",
            "value": "4000g, recommended 1000g~ 1500g"
          },
          {
            "label": "Précision des tests de teneur en asphalte",
            "value": "0.01%"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P058",
        "name": "Compacteur à rouleau pour dalles d'asphalte",
        "suffixName": "",
        "model": "LDCX-1",
        "category": "asphalt",
        "thumbnail": "/assets/images/LDCX-1.png",
        "description": "Cette machine est principalement utilisée pour le profilage par laminage d'échantillons de mélanges bitumineux lors d'essais d'orniérage. Elle convient également à la fabrication d'échantillons par laminage pour l'étude d'autres propriétés physiques et mécaniques des mélanges bitumineux.",
        "features": [
          "Cette machine intègre mécanique, électricité et pression hydraulique. Comparée à des produits similaires, elle se caractérise par sa taille compacte, son haut degré d'automatisation, ses fonctionnalités robustes et sa facilité d'utilisation.",
          "La température de laminage peut être réglée arbitrairement.",
          "Une fois le moule d'essai installé sur le chariot, il peut être centré automatiquement.",
          "Les temps de déplacement du chariot peuvent être réglés arbitrairement et enregistrés à tout moment."
        ],
        "standards": [
          "EN 12697-33 method 5.2",
          "ASTM D8079"
        ],
        "specifications": [
          {
            "label": "Taille du moule",
            "value": "300×300×(30~100)mm (Can be customized upon request)"
          },
          {
            "label": "Essai de voiture",
            "value": "300mm"
          },
          {
            "label": "Valeur de variation de hauteur du moule d'essai",
            "value": "30~ 100mm"
          },
          {
            "label": "Rayon du rouleau",
            "value": "500mm"
          },
          {
            "label": "Largeur du rouleau",
            "value": "298mm"
          },
          {
            "label": "Pression des rouleaux",
            "value": "300N/cm"
          },
          {
            "label": "Dimensions",
            "value": "620×1100×1900mm"
          },
          {
            "label": "Tension",
            "value": "380V±10%"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P059",
        "name": "Suivi des roues en enrobé bitumineux à chaud",
        "suffixName": "Roue simple",
        "model": "LDCZ-5",
        "category": "asphalt",
        "thumbnail": "/assets/images/LDCZ-5.png",
        "description": "Le testeur d'orniérage automatique est principalement utilisé pour mesurer la capacité anti-orniérage à haute température des mélanges bitumineux, et il est utilisé pour le test de stabilité à haute température de la conception des mélanges bitumineux.",
        "features": [
          "Cette machine utilise un testeur d'orniérage fabriqué selon une technologie internationale contemporaine, offrant des performances fiables, une grande précision de mesure et de contrôle, et une utilisation pratique ; elle peut être utilisée pour des expériences d'immersion dans l'eau."
        ],
        "standards": [
          "EN 12697-22",
          "BS 598:110",
          "Comparable to NF P98-251-1",
          "P98-251-4"
        ],
        "specifications": [
          {
            "label": "vitesse de roulement du rouleau",
            "value": "42±0.5 times/ min (one way)"
          },
          {
            "label": "Distance de déplacement du chariot de test",
            "value": "230±10mm"
          },
          {
            "label": "Dureté du rouleau et du caoutchouc (dureté standard internationale)",
            "value": "80IRHD±5IRHD(in 23℃)"
          },
          {
            "label": "Pression de contact entre le rouleau et la matrice d'essai",
            "value": "0.7±0.03MPa (60° C), adjustable to 0.8-0.9MPa"
          },
          {
            "label": "Taille du moule d'essai",
            "value": "300×300×50 (standard), which can be used for rutting test on specimens with a thickness of 30-100mm(Can be customized upon request)"
          },
          {
            "label": "Plage de mesure du déplacement",
            "value": "0-30mm"
          },
          {
            "label": "Temps d'essai d'orniérage",
            "value": "Usually 60min"
          },
          {
            "label": "La plage de contrôle de la température dans l'incubateur (peut être réglée arbitrairement)",
            "value": "Room temperature 60℃, control accuracy ± 0.5℃"
          },
          {
            "label": "Dimensions globales de la machine",
            "value": "1330×815×1430mm"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P061",
        "name": "Ductilomètre à bitume",
        "suffixName": "",
        "model": "STYD-3",
        "category": "bitumen",
        "thumbnail": "/assets/images/STYD-3.png",
        "description": "Cet instrument convient à la mesure de l'allongement du pétrole visqueux, de l'asphalte de schiste visqueux, du liquide cireux, de l'asphalte, des résidus d'asphalte liquide après distillation et des résidus d'évaporation de fluide d'émulsion d'asphalte, etc. Il est largement utilisé dans les secteurs de la production, de la construction routière et de la recherche scientifique.",
        "features": [
          "Le boîtier interne de cette machine est fabriqué en acier inoxydable plié importé. La cuve interne est équipée d'un ensemble de tubes chauffants de 3 000 à 3 500 watts, d'un système réfrigérant de 1 100 watts et d'un ensemble de tubes froids. Un moteur synchrone à aimant permanent à basse vitesse entraîne le réducteur. La tige actionne le coulisseau, dont l'extension peut être réglée à une vitesse de 50 mm/min ± 2,5 mm/min."
        ],
        "standards": [
          "EN 13398",
          "AASHTO  T300",
          "AASHTO  T301",
          "EN 13589",
          "ASTM D113",
          "D6084",
          "AASHTO T51"
        ],
        "specifications": [
          {
            "label": "vitesse d'extension",
            "value": "50±2.5mm/min,10±0.5mm/min"
          },
          {
            "label": "Température de test",
            "value": "2~50℃  (adjust by yourself according to actual needs)"
          },
          {
            "label": "puissance de chauffage",
            "value": "3~3.5kW"
          },
          {
            "label": "puissance de refroidissement",
            "value": "1kW"
          },
          {
            "label": "précision du contrôle de la température",
            "value": "±0.1° C"
          },
          {
            "label": "Tension de fonctionnement",
            "value": "220V±10%"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P062",
        "name": "Testeur de stabilité Marshall pour asphalte",
        "suffixName": "30 kN pour des échantillons de ø101,6 mm",
        "model": "LD-5B",
        "category": "asphalt",
        "thumbnail": "/assets/images/LD-5B.png",
        "description": "L'appareil de test automatique de stabilité des mélanges bitumineux sert à mesurer la pression maximale et la déformation verticale d'un échantillon de mélange bitumineux lorsque la pression atteint le point de rupture. Il s'agit d'un équipement d'essai couramment utilisé pour la conception des dosages de mélanges bitumineux et le contrôle de la qualité des chaussées.",
        "features": [
          "Cette machine est équipée d'un processeur à cœur ARM, d'un capteur de charge haute précision, d'un capteur de déplacement haute précision et offre une précision de mesure et de contrôle élevée."
        ],
        "standards": [
          "EN 12697-34",
          "ASTM D 6926",
          "D5581",
          "AASHTO T245",
          "BS 598 :107",
          "ASTM D1859",
          "ASTM D1883"
        ],
        "specifications": [
          {
            "label": "Plage de charge",
            "value": "30±0.1kN"
          },
          {
            "label": "Plage de déplacement",
            "value": "10±0.1mm"
          },
          {
            "label": "Vitesse de chargement",
            "value": "50±5mm/min"
          },
          {
            "label": "Méthode de chargement",
            "value": "Automatic/Manual"
          },
          {
            "label": "Humidité relative",
            "value": "≤85%RH"
          },
          {
            "label": "Alimentation électrique fonctionnelle",
            "value": "AC220V±10%"
          },
          {
            "label": "Pouvoir",
            "value": "500W"
          },
          {
            "label": "Dimensions",
            "value": "550×350×700mm"
          },
          {
            "label": "Poids",
            "value": "65kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P063",
        "name": "Mélangeurs planétaires de laboratoire",
        "suffixName": "20 L",
        "model": "LDHB-20",
        "category": "asphalt",
        "thumbnail": "/assets/images/LDHB-20.png",
        "description": "Le mélangeur vertical entièrement automatique est une machine de mélange couramment utilisée dans la préparation d'échantillons de mélanges d'asphalte, de sable et de gravier, de ciment et de sable et de gravier.",
        "features": [
          "Cette machine est équipée d'instruments de contrôle intelligents, d'un contrôle automatique de la température, la température du récipient chauffant peut être réglée arbitrairement de la température ambiante à 200 °C, et le temps d'agitation est contrôlé par une minuterie, qui peut être réglée arbitrairement dans une plage de 1 à 999 secondes."
        ],
        "standards": [
          "EN 12697-35",
          "ASTM D6307",
          "AASHTO TP53"
        ],
        "specifications": [
          {
            "label": "Capacité d'agitation",
            "value": "20L"
          },
          {
            "label": "Plage de température du pot chauffant",
            "value": "Room temperature~200 ℃ (arbitrary setting)"
          },
          {
            "label": "précision du contrôle de la température",
            "value": "±0.5° C"
          },
          {
            "label": "Temps d'agitation",
            "value": "1~999s (arbitrary setting)"
          },
          {
            "label": "vitesse de rotation de la lame d'agitation",
            "value": "75 rpm"
          },
          {
            "label": "vitesse de révolution",
            "value": "46 rpm"
          },
          {
            "label": "Température",
            "value": "-10~40° C"
          },
          {
            "label": "Humidité relative",
            "value": "Not more than 80%"
          },
          {
            "label": "tension d'alimentation",
            "value": "380V, 3L1N"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P064",
        "name": "Testeur de teneur en cire d'asphalte",
        "suffixName": "",
        "model": "LDL-2",
        "category": "bitumen",
        "thumbnail": "/assets/images/LDL-2.png",
        "description": "Ce produit convient à la détermination de la teneur en cire du bitume de pétrole, de la teneur en cire du bitume de pétrole produit à partir du résidu de distillation sous vide du pétrole brut naturel et de la teneur en cire du bitume routier. Cet équipement est couramment utilisé dans les industries pétrochimiques, de la construction et de la construction routière pour la détection de la teneur en cire du bitume.",
        "features": [
          "Le régulateur de température de cette machine est un modèle numérique de haute précision, offrant un affichage clair de la température et un réglage aisé des points de contrôle. L'instrument permet d'analyser simultanément trois échantillons avec une grande efficacité."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Alimentation électrique fonctionnelle",
            "value": "AC220V±10%"
          },
          {
            "label": "puissance de chauffage",
            "value": "1000W"
          },
          {
            "label": "puissance de refroidissement",
            "value": "1000W"
          },
          {
            "label": "Pompe à eau à circulation interne basse température",
            "value": "DC12V, 42W"
          },
          {
            "label": "Capteur de température",
            "value": "Pt100"
          },
          {
            "label": "fluide frigorigène",
            "value": "R404"
          },
          {
            "label": "précision du contrôle de la température",
            "value": "±0.5° C"
          },
          {
            "label": "environnement d'exploitation",
            "value": "Ambient temperature -10° C ~+30° C,  relative temperature <85%"
          },
          {
            "label": "consommation d'énergie de la machine",
            "value": "No more than 2100W"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P065",
        "name": "Four à couches minces à étagère rotative (TFOT)",
        "suffixName": "",
        "model": "82 Type",
        "category": "bitumen",
        "thumbnail": "/assets/images/82 Type.png",
        "description": "Ce produit est principalement utilisé pour les essais de chauffage de films d'asphalte. Il est strictement interdit de chauffer des explosifs dans le coffret afin d'éviter tout risque d'explosion.",
        "features": [
          "Le régulateur de température de cette machine adopte un circuit anti-saturation intégrale, ce qui améliore considérablement les performances en matière de fluctuations de température.",
          "Double usage : une fois l'établi démonté, il peut servir de séchoir."
        ],
        "standards": [
          "EN 12607-2",
          "EN 13303",
          "ASTM D6",
          "D1754",
          "AASHTO T47",
          "T179",
          "UNE 7110",
          "NF T66-011"
        ],
        "specifications": [
          {
            "label": "puissance de chauffage",
            "value": "2.2kW"
          },
          {
            "label": "Environnement d'utilisation",
            "value": "Temperature 10~40℃, relative humidity ≤80%, no vibration and no corrosive or flammable gas"
          },
          {
            "label": "Température de fonctionnement",
            "value": "163±1° C, 175±1° C  (Maximum working temperature 200° C)"
          },
          {
            "label": "Tension",
            "value": "220V"
          },
          {
            "label": "Plage de température",
            "value": "50～200℃"
          },
          {
            "label": "fluctuation de température",
            "value": "±1℃"
          },
          {
            "label": "vitesse du rack à disque",
            "value": "5.5 rpm"
          },
          {
            "label": "Diamètre du disque",
            "value": "360mm"
          },
          {
            "label": "Format studio",
            "value": "450×450×450mm"
          },
          {
            "label": "Dimensions",
            "value": "750×600×9200mm"
          },
          {
            "label": "Poids",
            "value": "100kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P066",
        "name": "Four à couches minces roulant (RTFOT)",
        "suffixName": "",
        "model": "85 Type",
        "category": "bitumen",
        "thumbnail": "/assets/images/85 Type.png",
        "description": "Cet instrument est adapté à la mesure des variations de performance de l'asphalte semi-solide sous l'action de la chaleur et de l'air, et permet de vérifier rapidement le vieillissement de l'asphalte.",
        "features": [
          "Le contrôleur adopte un circuit de saturation intégré, un affichage numérique de la température et du contrôle du temps, et la durée de la température peut être ajustée selon les besoins.",
          "Le moteur synchrone à aimant permanent et le variateur de vitesse les plus avancés sont installés à l'arrière de l'ensemble de la machine, de sorte que le plateau tournant de travail puisse tourner de manière fiable selon l'exigence technique de 15 tours par minute."
        ],
        "standards": [
          "EN 12607-1",
          "ASTM D2872",
          "AASHTO T240"
        ],
        "specifications": [
          {
            "label": "puissance du fil chauffant",
            "value": "2kW"
          },
          {
            "label": "Nombre de fils chauffants",
            "value": "2 PCS"
          },
          {
            "label": "Température de fonctionnement",
            "value": "85±0.5° C, 135±0.5° C, 163±0.5° C, 175±0.5° C"
          },
          {
            "label": "Température maximale",
            "value": "200° C"
          },
          {
            "label": "Ventilateur",
            "value": "Squirrel cage"
          },
          {
            "label": "Vitesse du ventilateur",
            "value": "1725±100r/min"
          },
          {
            "label": "Volume d'air",
            "value": "4000±200mL/min"
          },
          {
            "label": "Diamètre de la buse",
            "value": "1±0.1mm"
          },
          {
            "label": "Dimensions du flacon échantillon (diamètre d'ouverture × diamètre du flacon × hauteur totale)",
            "value": "Φ31.75×Φ64×139.7 mm"
          },
          {
            "label": "numéro de brique Rotary",
            "value": "15±0.2r/ min"
          },
          {
            "label": "Le nombre de flacons d'échantillons pouvant être chargés",
            "value": "8 PCS"
          },
          {
            "label": "Puissance totale",
            "value": "2.5kW"
          },
          {
            "label": "tension d'alimentation",
            "value": "AC220V±10%"
          },
          {
            "label": "Format studio",
            "value": "450×483×381mm"
          },
          {
            "label": "Dimensions",
            "value": "630×765×920mm"
          },
          {
            "label": "Poids",
            "value": "130kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P067",
        "name": "Bain-marie à débordement Marshall",
        "suffixName": "température ambiante ~ 60 °C",
        "model": "CF-C",
        "category": "asphalt",
        "thumbnail": "/assets/images/CF-C.png",
        "description": "Le réservoir d'eau à température constante CF-C est conçu conformément à la méthode d'essai de densité des mélanges bitumineux définie dans la réglementation et assure notamment le maintien automatique de la température. Ce produit est largement utilisé dans les laboratoires de recherche scientifique, notamment dans l'industrie chimique et pour les essais de performances physiques.",
        "features": [],
        "standards": [
          "EN 12697-34",
          "ASTM D6927",
          "D1559",
          "D5581",
          "AASHTO T245"
        ],
        "specifications": [
          {
            "label": "puissance de chauffage",
            "value": "1500W"
          },
          {
            "label": "puissance de refroidissement",
            "value": "138W"
          },
          {
            "label": "Plage de température",
            "value": "Room temperature-60℃"
          },
          {
            "label": "précision du contrôle de la température",
            "value": "±0.1℃"
          },
          {
            "label": "Tension",
            "value": "220V"
          },
          {
            "label": "Format studio",
            "value": "400×400×300mm"
          },
          {
            "label": "Dimensions",
            "value": "950×450×900mm"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P068",
        "name": "Bain d'eau",
        "suffixName": "température ambiante ~ 100℃",
        "model": "TC-20",
        "category": "bitumen",
        "thumbnail": "/assets/images/TC-20恒温.png",
        "description": "L'appareil crée un environnement à température constante dans l'enceinte en contrôlant les variations de température. Ce bain-marie thermostaté trouve de nombreuses applications et convient aux laboratoires scientifiques de biologie, chimie, physique, botanique et chimie.",
        "features": [
          "Le boîtier de cette machine est en tôle d'acier, recouvert d'une peinture haute température, et le réservoir intérieur est en acier inoxydable importé, avec une finition soignée, une structure plus rationnelle et une utilisation plus pratique."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Réguler la température",
            "value": "Room temperature ~ 100 ℃"
          },
          {
            "label": "Puissance totale du tube chauffant électrique",
            "value": "2kW"
          },
          {
            "label": "Nombre de tubes chauffants électriques",
            "value": "2 PCS"
          },
          {
            "label": "tension d'alimentation",
            "value": "AC220V±10%"
          },
          {
            "label": "Format studio",
            "value": "600×300×210mm"
          },
          {
            "label": "Dimensions",
            "value": "820×395×315mm"
          },
          {
            "label": "Poids",
            "value": "35kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P069",
        "name": "Bain-marie à basse température",
        "suffixName": "50 L -6 °C à 60 °C",
        "model": "TC-20",
        "category": "bitumen",
        "thumbnail": "/assets/images/TC-20低温.png",
        "description": "Le bain thermostaté à basse température est un équipement couramment utilisé en laboratoire. Il est largement employé dans les secteurs du pétrole, de la chimie, de la métallurgie, de la médecine, des essais biochimiques, de la recherche en analyse chimique, dans les établissements d'enseignement supérieur, les laboratoires d'usine et les services de métrologie et de contrôle qualité. Il assure un environnement de maintien à température contrôlée (chaud ou froid) et à température uniforme et constante.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Plage de température",
            "value": "-6.00~59.99℃"
          },
          {
            "label": "Fluctuation",
            "value": "±0.1°C"
          },
          {
            "label": "Volume du réservoir intérieur",
            "value": "50L"
          },
          {
            "label": "Taille du réservoir de travail",
            "value": "550×300×300mm"
          },
          {
            "label": "Débit de la pompe",
            "value": "13L/mm3"
          },
          {
            "label": "Puissance totale",
            "value": "2.2kW"
          },
          {
            "label": "Tension d'alimentation",
            "value": "AC220V±10%"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P070",
        "name": "Bain-marie à basse température",
        "suffixName": "15L -6℃~60℃",
        "model": "THD-0506",
        "category": "bitumen",
        "thumbnail": "/assets/images/THD-0506.png",
        "description": "Le bain thermostaté à basse température est un équipement couramment utilisé en laboratoire. Il est largement employé dans les secteurs du pétrole, de la chimie, de la métallurgie, de la médecine, des essais biochimiques, de la recherche en analyse chimique, dans les établissements d'enseignement supérieur, les laboratoires d'usine et les services de métrologie et de contrôle qualité. Il assure un environnement de maintien à température contrôlée (chaud ou froid) et à température uniforme et constante.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Plage de température",
            "value": "-6.00~59.99℃"
          },
          {
            "label": "Fluctuation",
            "value": "±0.1°C"
          },
          {
            "label": "Volume du réservoir intérieur",
            "value": "15L"
          },
          {
            "label": "Taille du réservoir de travail",
            "value": "250×200×300mm"
          },
          {
            "label": "Débit de la pompe",
            "value": "6L/mm³"
          },
          {
            "label": "Puissance totale",
            "value": "1.5kW"
          },
          {
            "label": "Tension d'alimentation",
            "value": "AC220V±10%"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P071",
        "name": "Testeur automatique de point de ramollissement",
        "suffixName": "Testeur d'anneau et de bille",
        "model": "LD-2000",
        "category": "bitumen",
        "thumbnail": "/assets/images/LD-2000.png",
        "description": "Ce produit convient à la détermination du point de ramollissement du bitume routier, du bitume de charbon, du bitume liquide, etc., et est généralement applicable à la construction de routes, de ponts et à d'autres industries.",
        "features": [
          "La vitesse de chauffage de la machine est contrôlée par un algorithme PID associé à une logique floue, et la température augmente de manière linéaire."
        ],
        "standards": [
          "EN 1427",
          "ASTM D36",
          "AASHTO T53",
          "NF T66-008",
          "Comparable to: BS 2000",
          "UNI 4161",
          "DIN 52011",
          "UNE 7111"
        ],
        "specifications": [
          {
            "label": "milieu de test",
            "value": "Water or glycerin"
          },
          {
            "label": "Plage de température",
            "value": "0～125°C"
          },
          {
            "label": "Résolution",
            "value": "0.01"
          },
          {
            "label": "taux de contrôle de la température",
            "value": "After three minutes: 5℃±0.5℃/min"
          },
          {
            "label": "Précision de mesure",
            "value": "0.5℃"
          },
          {
            "label": "Test de température ambiante",
            "value": "Less than 30 ° C and relatively stable, no air convection Heating rate"
          },
          {
            "label": "Méthode de mélange",
            "value": "Magnetic stirring, stepless adjustable"
          },
          {
            "label": "méthode de contrôle de la température",
            "value": "Automatic temperature control"
          },
          {
            "label": "puissance de chauffage",
            "value": "0.7kW"
          },
          {
            "label": "Humidité relative",
            "value": "≦85%"
          },
          {
            "label": "poids à bille en acier",
            "value": "3.50±0.05g"
          },
          {
            "label": "diamètre de la bille d'acier",
            "value": "Φ9.53mm"
          },
          {
            "label": "Volume du bécher",
            "value": "1000ml"
          },
          {
            "label": "tension d'alimentation",
            "value": "AC220V±10%"
          },
          {
            "label": "Dimensions",
            "value": "200×260×260mm"
          },
          {
            "label": "Poids",
            "value": "5kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P072",
        "name": "Pénétromètre automatique",
        "suffixName": "",
        "model": "IV-2000",
        "category": "bitumen",
        "thumbnail": "/assets/images/IV-2000.png",
        "description": "Ce produit convient à la mesure de la pénétration du bitume de pétrole visqueux, du bitume de schiste visqueux, du bitume de pétrole liquide, du bitume de pétrole routier et du bitume modifié, du résidu de distillation du bitume de pétrole liquide ou du résidu de bitume émulsionné après évaporation, et convient généralement aux services routiers, municipaux, chimiques, de recherche scientifique et autres services engagés dans la mesure et la recherche des indicateurs de performance du bitume.",
        "features": [
          "Cette machine utilise une technologie de réglage fin vertical similaire à celle du microscope, ce qui facilite grandement l'alignement de l'aiguille. Elle est équipée d'un capteur de température numérique de pointe, garantissant une mesure de température d'une grande précision."
        ],
        "standards": [
          "EN 1426",
          "ASTM D5",
          "AASHTO T49",
          "BS 1377-2",
          "NF T66-004",
          "JIS K 2207"
        ],
        "specifications": [
          {
            "label": "Réglage de la température",
            "value": "0-99.9℃ adjustable, display precision 0.1℃(factory setting is 25℃)"
          },
          {
            "label": "Réglage de l'heure",
            "value": "0-99.9s adjustable, display precision 0.1s(factory setting is 5s)"
          },
          {
            "label": "Plage de contrôle de la température",
            "value": "10-60℃,accuracy ±0.5℃"
          },
          {
            "label": "Poids total du cône",
            "value": "100±0.05g"
          },
          {
            "label": "Aiguille standard",
            "value": "25±0.05g"
          },
          {
            "label": "Contrepoids",
            "value": "50±0.05g"
          },
          {
            "label": "conteneur à température constante",
            "value": "＞1.0L"
          },
          {
            "label": "Tension",
            "value": "220V±10%, 50-60Hz"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P120",
        "name": "Déformateur de déformation verticale par infiltration des sols à gros grains (type pente)",
        "suffixName": "",
        "model": "LDSL-III",
        "category": "geotechnical",
        "thumbnail": "/assets/images/LDSL-III.png",
        "description": "Ce test a pour but de déterminer le coefficient de perméabilité de l'échantillon lors du passage de l'eau d'infiltration à travers un sol à granulométrie grossière, la pente critique de perte progressive des particules fines par infiltration (érosion interne) et la pente de rupture (écoulement du sol) lorsque le corps du sol flotte. Ce test est applicable aux échantillons de sol à granulométrie grossière remaniés et non remaniés.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Spécifications des tubes à essai",
            "value": "Φ300×600mm"
          },
          {
            "label": "Hauteur du tube à essai",
            "value": "600mm"
          },
          {
            "label": "Hauteur de jauge",
            "value": "3000mm"
          },
          {
            "label": "espacement des trous de mesure de pression",
            "value": "250mm"
          },
          {
            "label": "Équipement de chargement",
            "value": "Leverage pressure"
          },
          {
            "label": "Seau d'approvisionnement en eau",
            "value": "140×140×140mm"
          },
          {
            "label": "Seau de stockage d'eau",
            "value": "200×400×450mm"
          },
          {
            "label": "Tension",
            "value": "AC 220V"
          },
          {
            "label": "Dimension",
            "value": "1400×600×1900mm"
          },
          {
            "label": "Poids",
            "value": "250kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P121",
        "name": "Perméamètre à charge constante pour sols à gros grains",
        "suffixName": "",
        "model": "LDST-300",
        "category": "geotechnical",
        "thumbnail": "/assets/images/LDST-300.png",
        "description": "Le perméamètre à charge constante pour sols à gros grains LDST-300 est utilisé pour mesurer le coefficient de perméabilité des sols à gros grains et des pierres concassées calibrées dont la taille maximale des particules ne dépasse pas 75 mm.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "volume du réservoir d'eau",
            "value": "80L"
          },
          {
            "label": "Diamètre intérieur du cylindre métallique",
            "value": "300mm"
          },
          {
            "label": "Hauteur du cylindre métallique",
            "value": "500mm"
          },
          {
            "label": "épaisseur de paroi du cylindre métallique",
            "value": "10mm"
          },
          {
            "label": "Nombre de tubes de mesure de pression",
            "value": "5 PCS"
          },
          {
            "label": "Diamètre intérieur du tube de mesure de pression",
            "value": "6mm"
          },
          {
            "label": "valeur de division de l'échelle du tube de mesure de pression",
            "value": "1mm"
          },
          {
            "label": "espacement des trous de mesure de pression",
            "value": "50mm"
          },
          {
            "label": "diamètre du trou d'infiltration",
            "value": "16mm"
          },
          {
            "label": "Diamètre intérieur du tuyau de trop-plein",
            "value": "16mm"
          },
          {
            "label": "Ouverture de la plaque perméable",
            "value": "3.5mm"
          },
          {
            "label": "Poids",
            "value": "150kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P122",
        "name": "Machine de moulage par compactage vibratoire",
        "suffixName": "",
        "model": "LD-08",
        "category": "geotechnical",
        "thumbnail": "/assets/images/LD-08.png",
        "description": "Ce produit est utilisé pour fabriquer diverses éprouvettes pour granulés stabilisés par un liant inorganique, notamment des éprouvettes cylindriques pour tester la compression non confinée, la résistance, la résistance à la traction indirecte et le module de résilience en compression, ainsi que des éprouvettes de poutre pour tester le coefficient de retrait thermique, le coefficient de retrait à sec, la résistance à la flexion et le module de résilience en flexion.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "puissance du moteur de vibration",
            "value": "4kW"
          },
          {
            "label": "puissance du moteur de levage",
            "value": "0.75kW"
          },
          {
            "label": "Pression statique",
            "value": "1900~3100N (recommended to 2500)"
          },
          {
            "label": "Force excitante",
            "value": "Adjust from 6800 to 11000N"
          },
          {
            "label": "Fréquence de vibration",
            "value": "28~30Hz"
          },
          {
            "label": "Moule d'essai de formage",
            "value": "3 PCS"
          },
          {
            "label": "Tension",
            "value": "AC380V±10%"
          },
          {
            "label": "Dimensions",
            "value": "1820×950×2170mm"
          },
          {
            "label": "Taille du contrôleur",
            "value": "550×345×940mm"
          },
          {
            "label": "Poids",
            "value": "1100kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P123",
        "name": "Broyeur d'échantillons de béton/roche",
        "suffixName": "",
        "model": "SHM-200",
        "category": "geotechnical",
        "thumbnail": "/assets/images/SHM-200.png",
        "description": "La rectifieuse à double extrémité SHM-200 est l'équipement principal pour la fabrication d'échantillons standard de matériaux solides non métalliques, tels que les minerais et le béton, destinés aux essais mécaniques. Cette machine fonctionne de concert avec la carotteuse et la machine de découpe de pierre produites par notre usine pour traiter les échantillons cubiques ou cylindriques de haute précision dont vous avez besoin. Ce produit convient aux établissements d'enseignement supérieur, aux secteurs de l'hydraulique et de l'hydroélectricité, des mines, des transports, de la construction et autres. La rectifieuse SHM-200 est composée d'un bâti, d'une table de travail, d'une tête de meulage, d'un système de transmission à vitesse variable, d'un dispositif de commande électrique et d'autres composants. L'ensemble de la machine est facile à utiliser et son alimentation automatique est stable.",
        "features": [],
        "standards": [
          "ASTM D4543",
          "EN 12390-2"
        ],
        "specifications": [
          {
            "label": "puissance du moteur de l'établi",
            "value": "0.55kW"
          },
          {
            "label": "Vitesse",
            "value": "1450rpm"
          },
          {
            "label": "puissance de la tête de broyage",
            "value": "1.1kW,2units"
          },
          {
            "label": "Vitesse",
            "value": "2750rpm"
          },
          {
            "label": "diamètre de la meule",
            "value": "Φ200mm"
          },
          {
            "label": "Spécifications des échantillons rectifiables (normalement équipés en usine d'un dispositif de rectification de 50 à 150 mm)",
            "value": "a. Block 50×50×50~150×150×150mm; b. Cylinder 50~150mm"
          },
          {
            "label": "Précision de l'échantillon",
            "value": "a. Flatness Tolerance±0.05mm within 50mm; b. Smoothness (according to machining roughness standard) Ra3.2"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P124",
        "name": "Scie automatique pour roche, béton et maçonnerie",
        "suffixName": "",
        "model": "DQ-1",
        "category": "geotechnical",
        "thumbnail": "/assets/images/DQ-1.png",
        "description": "Cet équipement est largement utilisé dans les secteurs du pétrole, de la géologie, de la métallurgie, du charbon, de l'exploration et de la découpe des matériaux réfractaires. Cette machine de découpe du béton se distingue par son esthétique, sa structure compacte, son haut niveau d'automatisation, son étanchéité parfaite, son faible niveau sonore et sa simplicité d'utilisation. Au cours des dernières années, elle a bénéficié d'une large prise en compte des retours d'utilisateurs et a satisfait à divers critères techniques, s'imposant ainsi comme un équipement de pointe.",
        "features": [],
        "standards": [
          "ASTM D4543"
        ],
        "specifications": [
          {
            "label": "Gamme de coupe",
            "value": "DQ-1 double knives (blade diameter 500mm) can cut cylindrical cores with a diameter of 18mm~200mm, and original rock samples of 180mm×180mm×350mm. For refractory materials such as sandstone,high-magnesia bricks, and corundum bricks, the cutting hardness is below grade 9.The distance between the two blades is adjustable, respectively 25, 50, 75, 100, 125mm."
          },
          {
            "label": "La lame de scie de la machine à double usage pour l'échantillonnage automatique de carottes de roche à double couteau",
            "value": "Inner diameter 5cm, Outer diameter:50cm"
          },
          {
            "label": "Diamant JRg600",
            "value": "Φ600×5×50mm"
          },
          {
            "label": "Un ensemble d'accessoires",
            "value": "2cm, 3cm, 5cm each"
          },
          {
            "label": "vitesse de la ligne de coupe",
            "value": "40mm/s"
          },
          {
            "label": "Puissance du moteur principal",
            "value": "4kW, 1420 rpm"
          },
          {
            "label": "Puissance du moteur longitudinal",
            "value": "0.75kW"
          },
          {
            "label": "Dimensions",
            "value": "1500×830×1350mm"
          },
          {
            "label": "Coupe-diamants JRg60Q",
            "value": "Φ500×4.5×50mm"
          },
          {
            "label": "Poids",
            "value": "700kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P125",
        "name": "Instrument de compactage électrique multifonctionnel",
        "suffixName": "",
        "model": "JZ-2D",
        "category": "geotechnical",
        "thumbnail": "/assets/images/JZ-2D（部标）.png",
        "description": "Cette machine permet de réaliser des essais de compactage léger et intensif. Contrôlée automatiquement par un compteur électronique haute stabilité, elle offre une grande précision d'essai, un processus de travail automatisé et un fonctionnement stable et fiable. Simple d'utilisation, elle est couramment employée pour les essais géotechniques routiers.",
        "features": [],
        "standards": [
          "EN 13286-2",
          "ASTM D698",
          "D1557",
          "D1883",
          "AASHTO T99",
          "T180",
          "T193"
        ],
        "specifications": [
          {
            "label": "Poids du marteau",
            "value": "Heavy compaction 4.5kg, Light compaction: 2.5kg"
          },
          {
            "label": "Marteau en haut",
            "value": "Heavy compaction 457mm,Light compaction: 305mm"
          },
          {
            "label": "diamètre de la face du marteau",
            "value": "Φ50mm"
          },
          {
            "label": "Spécifications des tubes à essai",
            "value": "either Φ152×Φ100 or Φ152×Φ102"
          },
          {
            "label": "vitesse du marteau",
            "value": "30times/min"
          },
          {
            "label": "Réglez le nombre de coups de marteau",
            "value": "Between 0~99 times"
          },
          {
            "label": "Paramètres du moteur",
            "value": "1440r/min"
          },
          {
            "label": "Puissance du moteur",
            "value": "250W"
          },
          {
            "label": "Tension",
            "value": "AC380V±10%"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P126",
        "name": "Machine de démoulage hydraulique multifonctionnelle",
        "suffixName": "",
        "model": "DL-200",
        "category": "geotechnical",
        "thumbnail": "/assets/images/DL-200.png",
        "description": "Ce produit est principalement adapté au démoulage des éprouvettes de divers instruments de compactage, et convient à différents moules d'essai de diamètres Ф50mm, Ф100mm, Ф101.6mm, Ф150mm, Ф152mm, et de hauteurs inférieures à 230mm. Cette machine est utilisée avec « l'instrument de compactage électrique multifonctionnel », « l'instrument de compactage Marshall » et « l'instrument de compactage manuel léger » pour démouler l'éprouvette.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "force de libération maximale",
            "value": "200KN"
          },
          {
            "label": "taux de libération",
            "value": "130mm/min"
          },
          {
            "label": "Hauteur de démoulage maximale",
            "value": "230mm"
          },
          {
            "label": "Tension/Puissance du moteur",
            "value": "380V/0.75KW"
          },
          {
            "label": "Pression nominale de la pompe à huile",
            "value": "20MPa"
          },
          {
            "label": "vitesse nominale du moteur",
            "value": "1500r/min"
          },
          {
            "label": "Dimensions",
            "value": "480×520×1230mm"
          },
          {
            "label": "essai de moule par compression",
            "value": "Ф150×230mm ,Ф100×180mm,Ф50×130mm"
          },
          {
            "label": "Moule d'essai pour instruments de compactage léger et lourd",
            "value": "Ф152×170mm,Ф100×127mm"
          },
          {
            "label": "Moule d'essai Marshall",
            "value": "Ф101.6×87mm"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P127",
        "name": "Machine de démoulage hydraulique multifonctionnelle",
        "suffixName": "",
        "model": "DL-300",
        "category": "geotechnical",
        "thumbnail": "/assets/images/DL-300.png",
        "description": "Ce produit est principalement adapté au démoulage des éprouvettes de divers instruments de compactage, et convient à différents moules d'essai de diamètres Ф50mm, Ф100mm, Ф101.6mm, Ф150mm, Ф152mm, et de hauteurs inférieures à 230mm. Cette machine est utilisée avec « l'instrument de compactage électrique multifonctionnel », « l'instrument de compactage Marshall » et « l'instrument de compactage manuel léger » pour démouler l'éprouvette.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "force de libération maximale",
            "value": "300KN"
          },
          {
            "label": "taux de libération",
            "value": "130mm/min"
          },
          {
            "label": "Hauteur de démoulage maximale",
            "value": "230mm"
          },
          {
            "label": "Tension/Puissance du moteur",
            "value": "380V/0.75KW"
          },
          {
            "label": "Pression nominale de la pompe à huile",
            "value": "20MPa"
          },
          {
            "label": "vitesse nominale du moteur",
            "value": "1500r/min"
          },
          {
            "label": "Dimensions",
            "value": "480×520×1230mm"
          },
          {
            "label": "essai de moule par compression",
            "value": "Ф150×230mm,Ф100×180mm"
          },
          {
            "label": "Moule d'essai pour instruments de compactage léger et lourd",
            "value": "Ф152×170mm,Ф100×127mm"
          },
          {
            "label": "Moule d'essai Marshall",
            "value": "Ф101.6×87mm"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P128",
        "name": "Tamis agitateur à triple mouvement",
        "suffixName": "",
        "model": "ZBSX-92A",
        "category": "geotechnical",
        "thumbnail": "/assets/images/ZBSX-92A.png",
        "description": "Cette machine est adaptée au criblage et à l'analyse de matériaux dans les laboratoires de géologie, de métallurgie, de chimie, de construction, de fabrication de meules, de cimenterie, etc. Elle est chargée deux fois avec 15 kg d'agrégats, et le criblage peut être effectué en cinq minutes à chaque fois.",
        "features": [],
        "standards": [
          "EN 932-5",
          "ISO 3310-1"
        ],
        "specifications": [
          {
            "label": "diamètre du tamis",
            "value": "200/300mm"
          },
          {
            "label": "hauteur de la pile de tamis",
            "value": "440mm"
          },
          {
            "label": "Amplitude de vibration du siège de l'écran",
            "value": "8mm"
          },
          {
            "label": "Temps de secouage du tamis",
            "value": "221times/min"
          },
          {
            "label": "Temps de choc",
            "value": "147times/min"
          },
          {
            "label": "Rayon de giration",
            "value": "12.5mm"
          },
          {
            "label": "Alimentation électrique",
            "value": "AC380V±10%,0.37kW"
          },
          {
            "label": "révolution du moteur",
            "value": "1400times/min"
          },
          {
            "label": "Dimensions",
            "value": "600×400×800mm"
          },
          {
            "label": "Poids total",
            "value": "100kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P129",
        "name": "Testeur combiné de limites de plasticité pour sol à affichage numérique",
        "suffixName": "",
        "model": "LG-100D",
        "category": "geotechnical",
        "thumbnail": "/assets/images/LG-100D.png",
        "description": "Cet instrument permet de mesurer la limite de liquidité et la limite de plasticité des sols et fournit des données fiables pour la classification des types de sols, le calcul de la consistance naturelle et de l'indice de plasticité. Il est utilisé dans la conception et la construction d'infrastructures routières, ferroviaires, hydrauliques et électriques, ainsi que dans les secteurs de la métallurgie et du bâtiment. L'instrument est fourni avec deux étalons de poids conique de 100 et 76 grammes, au choix de l'utilisateur.",
        "features": [],
        "standards": [
          "CEN ISO/TS 17892-12",
          "CEN ISO/TS 17892-06",
          "NF P94-052-1"
        ],
        "specifications": [
          {
            "label": "Plage maximale",
            "value": "20mm"
          },
          {
            "label": "Résolution",
            "value": "0.1mm"
          },
          {
            "label": "Mesure de l'erreur non linéaire",
            "value": "Better than 2%"
          },
          {
            "label": "Sensibilité de l'indication de contact",
            "value": ">10M"
          },
          {
            "label": "Poids du cône",
            "value": "100/76g (Can be customized upon request)"
          },
          {
            "label": "Angle du cône",
            "value": "30±2° (Can be customized upon request)"
          },
          {
            "label": "Mesurer le temps",
            "value": "≈5s"
          },
          {
            "label": "Alimentation électrique",
            "value": "AC200V±10%"
          },
          {
            "label": "Temps de travail continu",
            "value": "8 hours"
          },
          {
            "label": "Dimensions",
            "value": "240×158×320mm"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P130",
        "name": "Testeur d'équivalent de sable",
        "suffixName": "",
        "model": "SD-II",
        "category": "geotechnical",
        "thumbnail": "/assets/images/SD-II（双管）.png",
        "description": "Il convient aux mélanges bitumineux et au béton. Sable naturel, sable artificiel, gravillons : la taille maximale des particules des granulats ne dépasse pas 4,75 mm. La teneur en liant ou en impuretés contenues dans les granulats fins est mesurée afin d’évaluer leur propreté, et l’équivalent sable est représenté par SE.",
        "features": [],
        "standards": [
          "EN 933-8",
          "NF XP18-598",
          "UNI 8520-15",
          "UNE 83131",
          "CNR N.27"
        ],
        "specifications": [
          {
            "label": "Tension",
            "value": "220V"
          },
          {
            "label": "Fréquence d'oscillation",
            "value": "175-180 times per minute"
          },
          {
            "label": "Puissance nominale",
            "value": "180W"
          },
          {
            "label": "Amplitude",
            "value": "203mm"
          },
          {
            "label": "Dimensions",
            "value": "560×320×360mm"
          },
          {
            "label": "piston de contrepoids",
            "value": "1000±5g"
          },
          {
            "label": "Tube à essai cylindrique en plastique",
            "value": ""
          },
          {
            "label": "diamètre intérieur",
            "value": "32±0.25mm"
          },
          {
            "label": "Hauteur",
            "value": "420±0.25mm"
          },
          {
            "label": "Diamètre extérieur du tube de rinçage",
            "value": "6±0.25mm"
          },
          {
            "label": "diamètre intérieur",
            "value": "4±0.2mm"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P131",
        "name": "Mélangeur à mortier",
        "suffixName": "",
        "model": "UJZ-15",
        "category": "cement",
        "thumbnail": "/assets/images/UJZ-15.png",
        "description": "Ce produit convient au mélange de mortier et est généralement destiné aux entreprises de construction, aux universités et aux unités de recherche en construction.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Capacité d'alimentation",
            "value": "28L"
          },
          {
            "label": "Capacité de production",
            "value": "15L"
          },
          {
            "label": "Vitesse du tambour mélangeur (sens antihoraire)",
            "value": "60±2r/min"
          },
          {
            "label": "Vitesse de la lame d'agitation (sens horaire)",
            "value": "80±4r/min"
          },
          {
            "label": "Jeu de travail entre la lame de mélange et le tambour de mélange",
            "value": "5±0.5mm"
          },
          {
            "label": "Vitesse du moteur (vitesse synchrone)",
            "value": "1440r/min"
          },
          {
            "label": "Puissance du moteur",
            "value": "1.5kW"
          },
          {
            "label": "Tension",
            "value": "AC380V±10%, 50Hz"
          },
          {
            "label": "Dimensions",
            "value": "800×600×900mm"
          },
          {
            "label": "Poids",
            "value": "2100kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P132",
        "name": "Mortier Permeamete",
        "suffixName": "",
        "model": "SS-1.5",
        "category": "cement",
        "thumbnail": "/assets/images/SS-1.5.png",
        "description": "L'imperméabilité du mortier désigne sa capacité à résister à la pénétration de l'eau ou d'autres liquides sous pression. Le testeur de perméabilité SS-1.5 permet de mesurer l'imperméabilité des mortiers hydrofuges, de réaliser des tests comparatifs entre un mortier contenant un agent hydrofuge et un mortier de référence, et de tester la perméabilité à l'eau d'autres matériaux hydrofuges. Le testeur de pénétration SS-1.5, fabriqué par notre usine, est adapté au contrôle, à la recherche et à l'enseignement des performances d'étanchéité des mortiers par les services de contrôle et d'inspection de la qualité des travaux publics, les laboratoires des entreprises de construction, les organismes de recherche et les établissements d'enseignement supérieur.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Pression de service maximale admissible",
            "value": "1.5MPa"
          },
          {
            "label": "Mode de fonctionnement",
            "value": "Automatic voltage regulation and manual voltage regulation"
          },
          {
            "label": "Le nombre d'échantillons pouvant être utilisés simultanément",
            "value": "6"
          },
          {
            "label": "Diamètre intérieur de l'ouverture supérieure du moule d'essai",
            "value": "Φ70mm"
          },
          {
            "label": "Diamètre intérieur de l'ouverture inférieure du moule d'essai",
            "value": "Φ80mm"
          },
          {
            "label": "Hauteur du moule",
            "value": "30mm"
          },
          {
            "label": "diamètre du piston de la pompe",
            "value": "Φ10mm"
          },
          {
            "label": "course de la pompe à piston",
            "value": "10mm"
          },
          {
            "label": "fréquence de va-et-vient de la pompe à piston",
            "value": "130 times/min"
          },
          {
            "label": "débit de la pompe à piston",
            "value": "0.1L/min"
          },
          {
            "label": "Puissance du moteur",
            "value": "90W"
          },
          {
            "label": "vitesse du moteur",
            "value": "1340r/min"
          },
          {
            "label": "Tension",
            "value": "AC380V±10%, 50Hz"
          },
          {
            "label": "Dimensions",
            "value": "750×560×750mm"
          },
          {
            "label": "Poids",
            "value": "120kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P133",
        "name": "Chambres climatiques de température et d'humidité",
        "suffixName": "80L",
        "model": "LDGD-80",
        "category": "research",
        "thumbnail": "/assets/images/LDGD-80.png",
        "description": "Chambre d'essai programmable à température et humidité constantes, également appelée chambre d'essais environnementaux simulés ou chambre d'essais à température et humidité alternées (haute et basse). Cet équipement simule des environnements à températures élevées et basses ainsi qu'à forte et forte humidité. Il est largement utilisé pour déterminer l'adaptabilité des produits électriques et électroniques à ces environnements (notamment les variations de leurs propriétés électriques et mécaniques) et pour vérifier la résistance à la corrosion des échantillons.",
        "features": [
          "Les composants sélectionnés pour ce produit sont extrêmement fiables et de haute qualité afin de garantir la fiabilité, la stabilité et la précision des performances du produit."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Plage de température",
            "value": "-40°C~+150°C"
          },
          {
            "label": "Plage d'humidité",
            "value": "20%~98%RH"
          },
          {
            "label": "précision du contrôle de la température et de l'humidité",
            "value": "±1.0°C; ±2%RH"
          },
          {
            "label": "Dimensions de la boîte intérieure (L×P×H)",
            "value": "400×400×550mm"
          },
          {
            "label": "Alimentation électrique",
            "value": "220V"
          },
          {
            "label": "Uniformité de la température et de l'humidité en subsurface",
            "value": "±2.0℃; ±3.0%RH"
          },
          {
            "label": "*Note",
            "value": "The above performance data should be measured after 30 minutes of temperature stabilization after working."
          },
          {
            "label": "*Note",
            "value": "The above performance data, need to distance from the test area of each wall 1/6 position test amount, and need to work after the temperature and humidity stability after 30 minutes measurement."
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P135",
        "name": "Chambre de séchage et de chauffage à convection forcée",
        "suffixName": "70 L",
        "model": "101-1A",
        "category": "research",
        "thumbnail": "/assets/images/101-1A.png",
        "description": "La température de fonctionnement maximale du four de séchage est de 250 °C, ce qui convient à divers échantillons pour la cuisson, le séchage, le traitement thermique et d'autres expériences de chauffage, mais les substances volatiles ne doivent pas être placées dans le four de séchage pour éviter tout risque d'explosion.",
        "features": [
          "Ce four de séchage possède une structure précise, un contrôle de température sensible et une utilisation facile."
        ],
        "standards": [
          "EN 932-5",
          "EN 1097-5",
          "BS 1924 :1",
          "BS 1377 :1",
          "1924 :1",
          "UNE 103300",
          "ASTM C127",
          "C136",
          "D558",
          "D559",
          "D560",
          "D698",
          "D1557",
          "D1559"
        ],
        "specifications": [
          {
            "label": "Température de fonctionnement",
            "value": "Room temperature~250±1℃"
          },
          {
            "label": "Puissance totale",
            "value": "2.5kW"
          },
          {
            "label": "Tension",
            "value": "220V"
          },
          {
            "label": "Dimensions du studio",
            "value": "450×350×450mm"
          },
          {
            "label": "Dimensions générales",
            "value": "750×500×720mm"
          },
          {
            "label": "Poids",
            "value": "65kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P136",
        "name": "Chambre de séchage et de chauffage à convection forcée",
        "suffixName": "135 L",
        "model": "101-2A",
        "category": "research",
        "thumbnail": "/assets/images/101-2A.png",
        "description": "La température de fonctionnement maximale du four de séchage est de 250 °C, ce qui convient à divers échantillons pour la cuisson, le séchage, le traitement thermique et d'autres expériences de chauffage, mais les substances volatiles ne doivent pas être placées dans le four de séchage pour éviter tout risque d'explosion.",
        "features": [
          "Ce four de séchage possède une structure précise, un contrôle de température sensible et une utilisation facile."
        ],
        "standards": [
          "EN 932-5",
          "EN 1097-5",
          "BS 1924 :1",
          "BS 1377 :1",
          "1924 :1",
          "UNE 103300",
          "ASTM C127",
          "C136",
          "D558",
          "D559",
          "D560",
          "D698",
          "D1557",
          "D1559"
        ],
        "specifications": [
          {
            "label": "Température de fonctionnement",
            "value": "Room temperature~250±1℃"
          },
          {
            "label": "Puissance totale",
            "value": "3.2kW"
          },
          {
            "label": "Tension",
            "value": "220V"
          },
          {
            "label": "Dimensions du studio",
            "value": "550×450×550mm"
          },
          {
            "label": "Dimensions générales",
            "value": "850×570×810mm"
          },
          {
            "label": "Poids",
            "value": "86kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P137",
        "name": "Chambre de séchage et de chauffage à convection forcée",
        "suffixName": "225 L",
        "model": "101-3A",
        "category": "research",
        "thumbnail": "/assets/images/101-3A.png",
        "description": "La température de fonctionnement maximale du four de séchage est de 250 °C, ce qui convient à divers échantillons pour la cuisson, le séchage, le traitement thermique et d'autres expériences de chauffage, mais les substances volatiles ne doivent pas être placées dans le four de séchage pour éviter tout risque d'explosion.",
        "features": [
          "Ce four de séchage possède une structure précise, un contrôle de température sensible et une utilisation facile."
        ],
        "standards": [
          "EN 932-5",
          "EN 1097-5",
          "BS 1924 :1",
          "BS 1377 :1",
          "1924 :1",
          "UNE 103300",
          "ASTM C127",
          "C136",
          "D558",
          "D559",
          "D560",
          "D698",
          "D1557",
          "D1559"
        ],
        "specifications": [
          {
            "label": "Température de fonctionnement",
            "value": "Room temperature~250±1℃"
          },
          {
            "label": "Puissance totale",
            "value": "6kW"
          },
          {
            "label": "Tension",
            "value": "220V"
          },
          {
            "label": "Dimensions du studio",
            "value": "600×500×750mm"
          },
          {
            "label": "Dimensions générales",
            "value": "970×650×1020mm"
          },
          {
            "label": "Poids",
            "value": "123k"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P138",
        "name": "Chambre de séchage et de chauffage à convection forcée",
        "suffixName": "640L",
        "model": "101-4A",
        "category": "research",
        "thumbnail": "/assets/images/101-4A.png",
        "description": "La température de fonctionnement maximale du four de séchage est de 250 °C, ce qui convient à divers échantillons pour la cuisson, le séchage, le traitement thermique et d'autres expériences de chauffage, mais les substances volatiles ne doivent pas être placées dans le four de séchage pour éviter tout risque d'explosion.",
        "features": [
          "Ce four de séchage possède une structure précise, un contrôle de température sensible et une utilisation facile."
        ],
        "standards": [
          "EN 932-5",
          "EN 1097-5",
          "BS 1924 :1",
          "BS 1377 :1",
          "1924 :1",
          "UNE 103300",
          "ASTM C127",
          "C136",
          "D558",
          "D559",
          "D560",
          "D698",
          "D1557",
          "D1559"
        ],
        "specifications": [
          {
            "label": "Température de fonctionnement",
            "value": "Room temperature~250±1℃"
          },
          {
            "label": "Puissance totale",
            "value": "6kW"
          },
          {
            "label": "Tension",
            "value": "380V with zero wire"
          },
          {
            "label": "Dimensions du studio",
            "value": "800×800×1000mm"
          },
          {
            "label": "Dimensions générales",
            "value": "1170×950×1310mm"
          },
          {
            "label": "Poids",
            "value": "204kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P139",
        "name": "Chambre de séchage et de chauffage à convection forcée",
        "suffixName": "1200L",
        "model": "101-5A",
        "category": "research",
        "thumbnail": "/assets/images/101-5A.png",
        "description": "La température de fonctionnement maximale du four de séchage est de 250 °C, ce qui convient à divers échantillons pour la cuisson, le séchage, le traitement thermique et d'autres expériences de chauffage, mais les substances volatiles ne doivent pas être placées dans le four de séchage pour éviter tout risque d'explosion.",
        "features": [
          "Ce four de séchage possède une structure précise, un contrôle de température sensible et une utilisation facile."
        ],
        "standards": [
          "EN 932-5",
          "EN 1097-5",
          "BS 1924 :1",
          "BS 1377 :1",
          "1924 :1",
          "UNE 103300",
          "ASTM C127",
          "C136",
          "D558",
          "D559",
          "D560",
          "D698",
          "D1557",
          "D1559"
        ],
        "specifications": [
          {
            "label": "Température de fonctionnement",
            "value": "Room temperature~250±1℃"
          },
          {
            "label": "Puissance totale",
            "value": "12kW"
          },
          {
            "label": "Tension",
            "value": "380V with zero wire"
          },
          {
            "label": "Dimensions du studio",
            "value": "1000×1000×1200mm"
          },
          {
            "label": "Dimensions générales",
            "value": "1370×1150×1500mm"
          },
          {
            "label": "Poids",
            "value": "280kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P140",
        "name": "Four à moufle",
        "suffixName": "5,4 L Max 1600 °C",
        "model": "SX2-8-16",
        "category": "research",
        "thumbnail": "/assets/images/SX2-8-16.png",
        "description": "Ce four à résistance, à fonctionnement périodique, utilise des barres de silicium-molybdène comme éléments chauffants et supporte une température nominale de 1600 °C. Il est utilisé pour le chauffage à haute température, notamment pour le frittage, la dissolution et l'analyse des métaux et des céramiques, dans les laboratoires, les entreprises industrielles et minières, ainsi que les unités de recherche scientifique. Ce four à résistance nécessite l'utilisation d'un régulateur de température KSY et d'un thermocouple double platine-rhodium pour mesurer, afficher et contrôler automatiquement la température du four électrique.",
        "features": [],
        "standards": [
          "EN 12697-1 clause C",
          "EN 13108",
          "EN 196-2",
          "196-21",
          "459-2",
          "EN 1367-5"
        ],
        "specifications": [
          {
            "label": "Puissance nominale",
            "value": "8kW"
          },
          {
            "label": "Tension nominale",
            "value": "220V"
          },
          {
            "label": "Température nominale",
            "value": "1600℃"
          },
          {
            "label": "temps de montée en température du four vide",
            "value": "≤220min"
          },
          {
            "label": "Format studio",
            "value": "150×300×120mm"
          },
          {
            "label": "Dimensions générales",
            "value": "820×670×780mm"
          },
          {
            "label": "Poids",
            "value": "350kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P141",
        "name": "Four à moufle",
        "suffixName": "12 L Max 1600 °C",
        "model": "SX2-12-16",
        "category": "research",
        "thumbnail": "/assets/images/SX2-12-16.png",
        "description": "Ce four à résistance, à fonctionnement périodique, utilise des barres de silicium-molybdène comme éléments chauffants et supporte une température nominale de 1600 °C. Il est utilisé pour le chauffage à haute température, notamment pour le frittage, la dissolution et l'analyse des métaux et des céramiques, dans les laboratoires, les entreprises industrielles et minières, ainsi que les unités de recherche scientifique. Ce four à résistance nécessite l'utilisation d'un régulateur de température KSY et d'un thermocouple double platine-rhodium pour mesurer, afficher et contrôler automatiquement la température du four électrique.",
        "features": [],
        "standards": [
          "EN 12697-1 clause C",
          "EN 13108",
          "EN 196-2",
          "196-21",
          "459-2",
          "EN 1367-5"
        ],
        "specifications": [
          {
            "label": "Puissance nominale",
            "value": "12kW"
          },
          {
            "label": "Tension nominale",
            "value": "380V"
          },
          {
            "label": "Température nominale",
            "value": "1600℃"
          },
          {
            "label": "temps de montée en température du four vide",
            "value": "≤250min"
          },
          {
            "label": "Format studio",
            "value": "200×400×160mm"
          },
          {
            "label": "Dimensions générales",
            "value": "905×730×835mm"
          },
          {
            "label": "Poids",
            "value": "400kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P142",
        "name": "Four à moufle",
        "suffixName": "1,9 L Max 1000 °C",
        "model": "SX2-2.5-10",
        "category": "research",
        "thumbnail": "/assets/images/SX2-2.5-10.png",
        "description": "Cette série de fours à résistance, à fonctionnement cyclique, est destinée aux laboratoires, entreprises industrielles et minières, centres de recherche scientifique et autres unités pour l'analyse et la détermination élémentaires, ainsi que pour les traitements thermiques courants de l'acier (trempe, recuit, revenu, etc.). De plus, son four à résistance à caisson haute température, d'une température nominale de 1300 °C, peut être utilisé pour le traitement thermique des aciers alliés, le frittage, la dissolution, l'analyse et autres opérations de chauffage à haute température.",
        "features": [],
        "standards": [
          "EN 12697-1 clause C",
          "EN 13108",
          "EN 196-2",
          "196-21",
          "459-2",
          "EN 1367-5"
        ],
        "specifications": [
          {
            "label": "Puissance nominale",
            "value": "2.5kW"
          },
          {
            "label": "Tension nominale",
            "value": "220V"
          },
          {
            "label": "Température nominale",
            "value": "1000℃"
          },
          {
            "label": "Format studio",
            "value": "120×200×80mm"
          },
          {
            "label": "Dimensions générales",
            "value": "380×380×420mm"
          },
          {
            "label": "Poids",
            "value": "145kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P143",
        "name": "Four à moufle",
        "suffixName": "7,2 L Max 1000 °C",
        "model": "SX2-4-10",
        "category": "research",
        "thumbnail": "/assets/images/SX2-4-10.png",
        "description": "Cette série de fours à résistance, à fonctionnement cyclique, est destinée aux laboratoires, entreprises industrielles et minières, centres de recherche scientifique et autres unités pour l'analyse et la détermination élémentaires, ainsi que pour les traitements thermiques courants de l'acier (trempe, recuit, revenu, etc.). De plus, son four à résistance à caisson haute température, d'une température nominale de 1300 °C, peut être utilisé pour le traitement thermique des aciers alliés, le frittage, la dissolution, l'analyse et autres opérations de chauffage à haute température.",
        "features": [],
        "standards": [
          "EN 12697-1 clause C",
          "EN 13108",
          "EN 196-2",
          "196-21",
          "459-2",
          "EN 1367-5"
        ],
        "specifications": [
          {
            "label": "Puissance nominale",
            "value": "4kW"
          },
          {
            "label": "Tension nominale",
            "value": "220V"
          },
          {
            "label": "Température nominale",
            "value": "1000℃"
          },
          {
            "label": "Format studio",
            "value": "200×300×120mm"
          },
          {
            "label": "Dimensions générales",
            "value": "490×490×540mm"
          },
          {
            "label": "Poids",
            "value": "158kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P144",
        "name": "Four à moufle",
        "suffixName": "16 L Max 1000 °C",
        "model": "SX2-8-10",
        "category": "research",
        "thumbnail": "/assets/images/SX2-8-10.png",
        "description": "Cette série de fours à résistance, à fonctionnement cyclique, est destinée aux laboratoires, entreprises industrielles et minières, centres de recherche scientifique et autres unités pour l'analyse et la détermination élémentaires, ainsi que pour les traitements thermiques courants de l'acier (trempe, recuit, revenu, etc.). De plus, son four à résistance à caisson haute température, d'une température nominale de 1300 °C, peut être utilisé pour le traitement thermique des aciers alliés, le frittage, la dissolution, l'analyse et autres opérations de chauffage à haute température.",
        "features": [],
        "standards": [
          "EN 12697-1 clause C",
          "EN 13108",
          "EN 196-2",
          "196-21",
          "459-2",
          "EN 1367-5"
        ],
        "specifications": [
          {
            "label": "Puissance nominale",
            "value": "8kW"
          },
          {
            "label": "Tension nominale",
            "value": "380V"
          },
          {
            "label": "Température nominale",
            "value": "1000℃"
          },
          {
            "label": "Format studio",
            "value": "250×400×160mm"
          },
          {
            "label": "Dimensions générales",
            "value": "610×540×550mm"
          },
          {
            "label": "Poids",
            "value": "163kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P145",
        "name": "Four à moufle",
        "suffixName": "30 L Max 1000 °C",
        "model": "SX2-12-10",
        "category": "research",
        "thumbnail": "/assets/images/SX2-12-10.png",
        "description": "Cette série de fours à résistance, à fonctionnement cyclique, est destinée aux laboratoires, entreprises industrielles et minières, centres de recherche scientifique et autres unités pour l'analyse et la détermination élémentaires, ainsi que pour les traitements thermiques courants de l'acier (trempe, recuit, revenu, etc.). De plus, son four à résistance à caisson haute température, d'une température nominale de 1300 °C, peut être utilisé pour le traitement thermique des aciers alliés, le frittage, la dissolution, l'analyse et autres opérations de chauffage à haute température.",
        "features": [],
        "standards": [
          "EN 12697-1 clause C",
          "EN 13108",
          "EN 196-2",
          "196-21",
          "459-2",
          "EN 1367-5"
        ],
        "specifications": [
          {
            "label": "Puissance nominale",
            "value": "12kW"
          },
          {
            "label": "Tension nominale",
            "value": "380V"
          },
          {
            "label": "Température nominale",
            "value": "1000℃"
          },
          {
            "label": "Format studio",
            "value": "300×500×200mm"
          },
          {
            "label": "Dimensions générales",
            "value": "710×610×560mm"
          },
          {
            "label": "Poids",
            "value": "185kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P146",
        "name": "Chambre horizontale à basse température",
        "suffixName": "208L -25℃",
        "model": "DW-25",
        "category": "research",
        "thumbnail": "/assets/images/DW-25（卧式）.png",
        "description": "La chambre d'essais basse température horizontale de la série DW est équipée d'un compresseur de marque, d'un revêtement en acier inoxydable et d'une isolation en mousse de matières premières importées. Elle offre une excellente isolation thermique et une faible consommation d'énergie. Sa conception à cinq tubes d'évaporation assure une température uniforme et prévient les fuites. Ce produit est largement utilisé dans les secteurs de la construction, de la médecine, de l'électronique, de la recherche scientifique et autres pour les essais de haute et basse température, ainsi que pour les essais de vieillissement.",
        "features": [
          "Ce produit offre une efficacité de refroidissement élevée et un faible niveau sonore."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Plage de contrôle de la température",
            "value": "-25℃ ~ room temperature"
          },
          {
            "label": "Puissance du compresseur",
            "value": "200W"
          },
          {
            "label": "Tension",
            "value": "220V"
          },
          {
            "label": "Dimensions de la chambre de travail",
            "value": "800×400×650mm"
          },
          {
            "label": "Dimension",
            "value": "940×550×850mm"
          },
          {
            "label": "Poids",
            "value": "120kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P147",
        "name": "Chambre horizontale à basse température",
        "suffixName": "213L -40℃",
        "model": "DW-40",
        "category": "research",
        "thumbnail": "/assets/images/DW-40（卧式）.png",
        "description": "La chambre d'essais basse température horizontale de la série DW est équipée d'un compresseur de marque, d'un revêtement en acier inoxydable et d'une isolation en mousse de matières premières importées. Elle offre une excellente isolation thermique et une faible consommation d'énergie. Sa conception à cinq tubes d'évaporation assure une température uniforme et prévient les fuites. Ce produit est largement utilisé dans les secteurs de la construction, de la médecine, de l'électronique, de la recherche scientifique et autres pour les essais de haute et basse température, ainsi que pour les essais de vieillissement.",
        "features": [
          "Ce produit offre une efficacité de refroidissement élevée et un faible niveau sonore."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Plage de contrôle de la température",
            "value": "-40℃ ~ room temperature"
          },
          {
            "label": "Puissance du compresseur",
            "value": "230W"
          },
          {
            "label": "Tension",
            "value": "220V"
          },
          {
            "label": "Dimensions de la chambre de travail",
            "value": "880×405×600mm"
          },
          {
            "label": "Dimension",
            "value": "1020×560×800mm"
          },
          {
            "label": "Poids",
            "value": "140kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P148",
        "name": "Chambre horizontale à basse température",
        "suffixName": "195L -60℃",
        "model": "DW-60",
        "category": "research",
        "thumbnail": "/assets/images/DW-60（卧式）.png",
        "description": "La chambre d'essais basse température horizontale de la série DW est équipée d'un compresseur de marque, d'un revêtement en acier inoxydable et d'une isolation en mousse de matières premières importées. Elle offre une excellente isolation thermique et une faible consommation d'énergie. Sa conception à cinq tubes d'évaporation assure une température uniforme et prévient les fuites. Ce produit est largement utilisé dans les secteurs de la construction, de la médecine, de l'électronique, de la recherche scientifique et autres pour les essais de haute et basse température, ainsi que pour les essais de vieillissement.",
        "features": [
          "Ce produit offre une efficacité de refroidissement élevée et un faible niveau sonore."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Plage de contrôle de la température",
            "value": "-60℃ ~ room temperature"
          },
          {
            "label": "Puissance du compresseur",
            "value": "250W"
          },
          {
            "label": "Tension",
            "value": "220V"
          },
          {
            "label": "Dimensions de la chambre de travail",
            "value": "600×500×650mm"
          },
          {
            "label": "Dimension",
            "value": "750×650×850mm"
          },
          {
            "label": "Poids",
            "value": "160kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P149",
        "name": "Chambre verticale à basse température",
        "suffixName": "165 L -40 °C",
        "model": "DW-40",
        "category": "research",
        "thumbnail": "/assets/images/DW-40（立式）.png",
        "description": "La chambre d'essais haute et basse température DW-40 est équipée d'un compresseur Danfoss (marque américaine) et d'un revêtement en acier inoxydable. Son isolation en mousse de matières premières importées offre une excellente isolation thermique et une faible consommation d'énergie. La conception innovante de ses cinq tubes d'évaporation assure une température uniforme et prévient les fuites. Ce produit est largement utilisé dans les secteurs du bâtiment, de la pharmacie, de l'électronique, de la recherche scientifique et autres pour les essais de vieillissement accéléré et de haute température.",
        "features": [
          "La structure générale est solide, la forme est esthétique et la résistance à la corrosion est bonne ;",
          "Le thermomètre-hygromètre est doté d'un affichage numérique double et présente les avantages suivants : haute résolution, utilisation intuitive, réglage facile et grande précision de contrôle."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Plage de contrôle de la température",
            "value": "-40℃～room temperature"
          },
          {
            "label": "Puissance du compresseur",
            "value": "2000W"
          },
          {
            "label": "Tension",
            "value": "AC220V±10%"
          },
          {
            "label": "Format studio",
            "value": "500×550×600mm"
          },
          {
            "label": "Dimension",
            "value": "820×780×1650mm"
          },
          {
            "label": "Poids",
            "value": "180kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P150",
        "name": "Chambre d'essai de chaleur humide",
        "suffixName": "",
        "model": "HBY-1",
        "category": "research",
        "thumbnail": "/assets/images/HBY-1.png",
        "description": "La chambre d'essais de chaleur et d'humidité simule principalement les variations de température et d'humidité ambiantes afin d'observer l'état de conservation et d'utilisation des produits dans des environnements à températures élevées et basses, secs et humides. Elle est principalement utilisée par les organismes de recherche et les laboratoires d'essais.",
        "features": [
          "La structure générale est robuste, la forme est esthétique et la résistance à la corrosion est bonne.",
          "Le thermomètre-hygromètre est doté d'un affichage numérique double et présente les avantages suivants : haute résolution, intuitivité, facilité de réglage et grande précision de contrôle."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Tension",
            "value": "AC220±10%"
          },
          {
            "label": "puissance de chauffage",
            "value": "500W"
          },
          {
            "label": "puissance de refroidissement",
            "value": "138W"
          },
          {
            "label": "Réguler la température",
            "value": "20～60±2℃"
          },
          {
            "label": "Humidité",
            "value": "45～80±5%RH"
          },
          {
            "label": "dimensions de la chambre de travail",
            "value": "600×500×600mm"
          },
          {
            "label": "Dimension",
            "value": "700×650×1500mm"
          },
          {
            "label": "Poids",
            "value": "185kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "P151",
        "name": "Chambre d'essai de vieillissement",
        "suffixName": "",
        "model": "401A",
        "category": "research",
        "thumbnail": "/assets/images/401A.png",
        "description": "Ce produit convient aux unités de recherche scientifique et aux usines pour les tests de vieillissement des matériaux plastiques (caoutchouc, plastique), de l'isolation électrique et autres matériaux.",
        "features": [
          "Contrôle précis de la température et bonne uniformité de température.",
          "Grand espace utile et performances stables."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Réguler la température",
            "value": "Room temperature ～200℃"
          },
          {
            "label": "précision du régulateur de température",
            "value": "±1℃"
          },
          {
            "label": "vitesse de la platine",
            "value": "11～12r/min"
          },
          {
            "label": "puissance de chauffage",
            "value": "2200W"
          },
          {
            "label": "tension d'alimentation",
            "value": "AC220V±10%"
          },
          {
            "label": "dimensions de la chambre de travail",
            "value": "450×450×500mm"
          },
          {
            "label": "Dimensions globales",
            "value": "780×660×1160mm"
          },
          {
            "label": "Poids",
            "value": "100kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "C001",
        "name": "Chambre de congélation-dégel rapide en béton",
        "suffixName": "28 pièces",
        "model": "TDRF-1",
        "category": "concrete",
        "thumbnail": "/assets/images/TDRF-1（连体）.png",
        "description": "Notre entreprise est l'organisme de normalisation du département des matériaux de construction de la TDRF (Dispositif d'essai de gel-dégel rapide pour béton) et a participé à l'élaboration de la norme relative aux appareils d'essai de résistance au gel-dégel du béton de l'Académie nationale des matériaux de construction. Ce produit convient aux essais de gel-dégel sur le béton, les briques de construction, les briques céramiques et autres matériaux de construction.",
        "features": [],
        "standards": [
          "ASTM C666",
          "AASHTO T161",
          "PROCEDURE A"
        ],
        "specifications": [
          {
            "label": "mode de refroidissement du condenseur",
            "value": "Air-cooling"
          },
          {
            "label": "Nombre d'échantillons d'essai",
            "value": "28 PCS"
          },
          {
            "label": "Taille de l'échantillon",
            "value": "100×100×400mm,the temperature measuring parts are of the same size, and there are temperature measuring holes in the middle."
          },
          {
            "label": "Temps de fin de congélation/température à cœur de l'éprouvette",
            "value": "1.5～2.5h/-17±2℃（New standard -18±2℃）"
          },
          {
            "label": "Temps de fin de fusion/température à cœur de l'éprouvette",
            "value": "1.0～2.0h/8±2℃（New standard 5±2℃）"
          },
          {
            "label": "Cycle de gel-dégel",
            "value": "2.5～4h,the melting time is not less than 1/4 freeze-thaw cycle."
          },
          {
            "label": "La différence de température entre le centre et la surface de l'échantillon",
            "value": "＜28℃"
          },
          {
            "label": "Nombre de cycles",
            "value": "The standard is 300 times, and the number of cycles can be adjusted."
          },
          {
            "label": "Enregistreur de température",
            "value": "LCD touch screen controller"
          },
          {
            "label": "Cycle de congélation-décongélation moyen",
            "value": "-45°C antifreeze (1:1 mixed with water)"
          },
          {
            "label": "Quantité de média chargé par cycle de gel-dégel",
            "value": "90kg"
          },
          {
            "label": "compresseur de réfrigérateur",
            "value": "Complete inlet closure 8.5HP"
          },
          {
            "label": "Taille du canon de l'échantillon",
            "value": "115×115×490mm"
          },
          {
            "label": "puissance de chauffage",
            "value": "9kW"
          },
          {
            "label": "Puissance de fonctionnement maximale",
            "value": "11kW"
          },
          {
            "label": "Tension",
            "value": "AC380V±10%"
          },
          {
            "label": "Dimensions générales",
            "value": "1870×1370×1000mm"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "C002",
        "name": "Chambre de congélation-dégel rapide en béton",
        "suffixName": "16 pièces",
        "model": "TDRF-2",
        "category": "concrete",
        "thumbnail": "/assets/images/TDRF-2（连体）.png",
        "description": "Notre entreprise est l'organisme de normalisation du département des matériaux de construction de la TDRF (Dispositif d'essai de gel-dégel rapide pour béton) et a participé à l'élaboration de la norme relative aux appareils d'essai de résistance au gel-dégel du béton de l'Académie nationale des matériaux de construction. Ce produit convient aux essais de gel-dégel sur le béton, les briques de construction, les briques céramiques et autres matériaux de construction.",
        "features": [],
        "standards": [
          "ASTM C666",
          "AASHTO T161",
          "PROCEDURE A"
        ],
        "specifications": [
          {
            "label": "mode de refroidissement du condenseur",
            "value": "Air-cooling"
          },
          {
            "label": "Nombre d'échantillons d'essai",
            "value": "16 PCS"
          },
          {
            "label": "Taille de l'échantillon",
            "value": "100×100×400mm,the temperature measuring parts are of the same size, and there are temperature measuring holes in the middle."
          },
          {
            "label": "Temps de fin de congélation/température à cœur de l'éprouvette",
            "value": "1.5～2.5h/-17±2℃（New standard -18±2℃）"
          },
          {
            "label": "Temps de fin de fusion/température à cœur de l'éprouvette",
            "value": "1.0～2.0h/8±2℃（New standard 5±2℃）"
          },
          {
            "label": "Cycle de gel-dégel",
            "value": "2.5～4h,the melting time is not less than 1/4 freeze-thaw cycle."
          },
          {
            "label": "La différence de température entre le centre et la surface de l'échantillon",
            "value": "＜28℃"
          },
          {
            "label": "Nombre de cycles",
            "value": "The standard is 300 times, and the number of cycles can be adjusted."
          },
          {
            "label": "Enregistreur de température",
            "value": "LCD touch screen controller"
          },
          {
            "label": "Cycle de congélation-décongélation moyen",
            "value": "-45°C antifreeze (1:1 mixed with water)"
          },
          {
            "label": "Quantité de média chargé par cycle de gel-dégel",
            "value": "60kg"
          },
          {
            "label": "compresseur de réfrigérateur",
            "value": "Complete inlet closure 5HP"
          },
          {
            "label": "Taille du canon de l'échantillon",
            "value": "115×115×490mm"
          },
          {
            "label": "puissance de chauffage",
            "value": "6kW"
          },
          {
            "label": "Puissance de fonctionnement maximale",
            "value": "8kW"
          },
          {
            "label": "Tension",
            "value": "AC380V±10%"
          },
          {
            "label": "Dimensions générales",
            "value": "1870×1000×1000mm"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "C003",
        "name": "Chambre de congélation-dégel rapide en béton",
        "suffixName": "10 pièces",
        "model": "TDRF-3",
        "category": "concrete",
        "thumbnail": "/assets/images/TDRF-3（连体）.png",
        "description": "Notre entreprise est l'organisme de normalisation du département des matériaux de construction de la TDRF (Dispositif d'essai de gel-dégel rapide pour béton) et a participé à l'élaboration de la norme relative aux appareils d'essai de résistance au gel-dégel du béton de l'Académie nationale des matériaux de construction. Ce produit convient aux essais de gel-dégel sur le béton, les briques de construction, les briques céramiques et autres matériaux de construction.",
        "features": [],
        "standards": [
          "ASTM C666",
          "AASHTO T161",
          "PROCEDURE A"
        ],
        "specifications": [
          {
            "label": "mode de refroidissement du condenseur",
            "value": "Air-cooling"
          },
          {
            "label": "Nombre d'échantillons d'essai",
            "value": "10 PCS"
          },
          {
            "label": "Taille de l'échantillon",
            "value": "100×100×400mm,the temperature measuring parts are of the same size, and there are temperature measuring holes in the middle."
          },
          {
            "label": "Temps de fin de congélation/température à cœur de l'éprouvette",
            "value": "1.5～2.5h/-17±2℃（New standard -18±2℃）"
          },
          {
            "label": "Temps de fin de fusion/température à cœur de l'éprouvette",
            "value": "1.0～2.0h/8±2℃（New standard 5±2℃）"
          },
          {
            "label": "Cycle de gel-dégel",
            "value": "2.5～4h,the melting time is not less than 1/4 freeze-thaw cycle."
          },
          {
            "label": "La différence de température entre le centre et la surface de l'échantillon",
            "value": "＜28℃"
          },
          {
            "label": "Nombre de cycles",
            "value": "The standard is 300 times, and the number of cycles can be adjusted."
          },
          {
            "label": "Enregistreur de température",
            "value": "LCD touch screen controller"
          },
          {
            "label": "Cycle de congélation-décongélation moyen",
            "value": "-45°C antifreeze (1:1 mixed with water)"
          },
          {
            "label": "Quantité de média chargé par cycle de gel-dégel",
            "value": "30kg"
          },
          {
            "label": "compresseur de réfrigérateur",
            "value": "Complete inlet closure 3HP"
          },
          {
            "label": "Taille du canon de l'échantillon",
            "value": "115×115×490mm"
          },
          {
            "label": "puissance de chauffage",
            "value": "4.5kW"
          },
          {
            "label": "Puissance de fonctionnement maximale",
            "value": "6kW"
          },
          {
            "label": "Tension",
            "value": "AC380V±10%"
          },
          {
            "label": "Dimensions générales",
            "value": "1620×1000×1000mm"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "C004",
        "name": "Chambre d'essai de carbonatation du béton",
        "suffixName": "",
        "model": "CCB-70A",
        "category": "concrete",
        "thumbnail": "/assets/images/CCB-70A.png",
        "description": "Notre société a participé à la conception de la chambre d'essai de carbonatation du béton CCB-70A et a été désignée par le Département des matériaux de construction. Cet équipement est un appareil spécial pour l'essai de carbonatation des bétons.",
        "features": [],
        "standards": [
          "ISO 1920-12"
        ],
        "specifications": [
          {
            "label": "Contrôle de la température",
            "value": "20±2℃(adjust)"
          },
          {
            "label": "précision du contrôle de la température",
            "value": "0.5℃"
          },
          {
            "label": "Contrôle de l'humidité",
            "value": "70±5%RH (40~70 adjust)"
          },
          {
            "label": "concentration de CO2",
            "value": "20±3% (0~60,0~100 adjust,two ranges available)"
          },
          {
            "label": "résolution de la concentration de CO2",
            "value": "±1%"
          },
          {
            "label": "uniformité de la concentration en CO2",
            "value": "≦2%"
          },
          {
            "label": "précision de la concentration de CO2",
            "value": "1%"
          },
          {
            "label": "puissance de chauffage",
            "value": "600W"
          },
          {
            "label": "Puissance frigorifique/déshumidification",
            "value": "240W"
          },
          {
            "label": "Puissance d'humidification",
            "value": "1500W"
          },
          {
            "label": "Tension",
            "value": "AC220V±10%"
          },
          {
            "label": "Format studio",
            "value": "620×550×1230mm"
          },
          {
            "label": "Dimensions générales",
            "value": "1100×710×1630mm"
          },
          {
            "label": "Peser",
            "value": "200kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "C005",
        "name": "Réservoir de durcissement accéléré du béton",
        "suffixName": "",
        "model": "LDZY-400",
        "category": "concrete",
        "thumbnail": "/assets/images/LDZY-400.png",
        "description": "Ce produit est un équipement courant pour les essais de cure à la vapeur d'échantillons de béton. L'équipement est fabriqué en acier inoxydable à l'intérieur comme à l'extérieur, dispose d'un écran tactile, d'une commande automatique et le processus d'essai est simple et pratique.",
        "features": [],
        "standards": [
          "ASTM C684 Method C"
        ],
        "specifications": [
          {
            "label": "Taille de l'échantillon avec moule",
            "value": "195×195×175mm"
          },
          {
            "label": "diamètre intérieur de la boîte",
            "value": "1000×750×640mm"
          },
          {
            "label": "Dimensions générales",
            "value": "1560×850×900mm"
          },
          {
            "label": "Nombre de groupes d'échantillons",
            "value": "8 groups (24 pieces in total)"
          },
          {
            "label": "taux d'élévation de la température",
            "value": "≦15℃/h"
          },
          {
            "label": "puissance de chauffage",
            "value": "4.0kW (new heating tube)"
          },
          {
            "label": "puissance de refroidissement",
            "value": "0.5kW"
          },
          {
            "label": "Tension",
            "value": "AC220V±10%"
          },
          {
            "label": "Fréquence",
            "value": "50-60Hz"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "C006",
        "name": "Chambre d'essai pour agrégats alcalins",
        "suffixName": "Méthode des barres de mortier et méthode accélérée des barres de mortier",
        "model": "JKS",
        "category": "concrete",
        "thumbnail": "/assets/images/JKS.png",
        "description": "La chambre d'essai alcali-granulat est conçue et fabriquée conformément aux exigences de la norme nationale relative aux essais de durabilité à long terme du béton. Elle permet un contrôle précis de la température et du temps lors des essais d'expansion des granulats de sable. Le revêtement intérieur et les étagères sont en acier inoxydable. Cette chambre est adaptée à la réalisation d'essais de réaction alcali-granulat pour évaluer la durabilité à long terme des bétons dans les secteurs de la construction, des travaux publics (ponts routiers et autres) et des services de recherche et de contrôle qualité.",
        "features": [],
        "standards": [
          "ASTM C1260",
          "ASTM C1567"
        ],
        "specifications": [
          {
            "label": "Contrôle de la température",
            "value": "Room temperature ~100℃(adjust)"
          },
          {
            "label": "précision du contrôle de la température",
            "value": "±0.2℃"
          },
          {
            "label": "Plage de temps de contrôle",
            "value": "1~999min（99.9 days）"
          },
          {
            "label": "Fréquence",
            "value": "50-60Hz"
          },
          {
            "label": "Précision du contrôle temporel",
            "value": "±1min"
          },
          {
            "label": "puissance de chauffage",
            "value": "6kW"
          },
          {
            "label": "puissance de la pompe à eau",
            "value": "90W"
          },
          {
            "label": "Tension",
            "value": "AC380V±10%"
          },
          {
            "label": "Format studio",
            "value": "650×550×600 (clear height 450mm)"
          },
          {
            "label": "Dimensions générales",
            "value": "1010×680×800mm"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "C015",
        "name": "Appareil d'imperméabilité du béton",
        "suffixName": "",
        "model": "HP-4.0",
        "category": "concrete",
        "thumbnail": "/assets/images/HP-4.0.png",
        "description": "L'instrument HP-4.0 de régulation automatique de pression pour l'imperméabilité du béton est utilisé pour mesurer l'imperméabilité du béton. Il est utilisé dans les entreprises de construction, les instituts de recherche scientifique, les bureaux d'études et autres organismes pour la mesure et la recherche expérimentale de l'imperméabilité du béton. Il peut également être utilisé pour la mesure de la perméabilité des matériaux de construction à des fins de contrôle qualité.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Pression de service",
            "value": "4MPa"
          },
          {
            "label": "Mode de fonctionnement",
            "value": "Automatic pressurization"
          },
          {
            "label": "Nombre d'échantillons d'essai",
            "value": "6 PCS"
          },
          {
            "label": "Diamètre intérieur de l'ouverture supérieure du moule d'essai",
            "value": "Φ175mm"
          },
          {
            "label": "Diamètre intérieur du fond du moule d'essai",
            "value": "Φ185mm"
          },
          {
            "label": "Hauteur du moule d'essai",
            "value": "160mm"
          },
          {
            "label": "Puissance du moteur",
            "value": "80W"
          },
          {
            "label": "vitesse du moteur",
            "value": "136r/min"
          },
          {
            "label": "diamètre du piston de la pompe à piston",
            "value": "Φ10mm"
          },
          {
            "label": "fréquence de va-et-vient de la pompe à piston",
            "value": "136 times/min"
          },
          {
            "label": "débit de la pompe à piston",
            "value": "0.11L/min"
          },
          {
            "label": "Tension d'alimentation",
            "value": "AC380V±10%"
          },
          {
            "label": "Dimensions",
            "value": "1090×710×920mm"
          },
          {
            "label": "Poids",
            "value": "185kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "C016",
        "name": "Chambre de séchage rapide",
        "suffixName": "",
        "model": "A-Type",
        "category": "concrete",
        "thumbnail": "/assets/images/A-Type.png",
        "description": "Ce produit convient à la cuisson rapide et à l'entretien des éléments en béton et de construction tels que les cimenteries, les usines de matériaux de construction et les unités de construction. Le revêtement et l'étagère sont en acier inoxydable.",
        "features": [],
        "standards": [
          "EN 196-1",
          "196-8",
          "ISO 679",
          "ASTM C109",
          "C511"
        ],
        "specifications": [
          {
            "label": "Tension",
            "value": "220V"
          },
          {
            "label": "Température interne",
            "value": "Room temperature to 100℃,users need to control freely"
          },
          {
            "label": "puissance de chauffage des tubes chauffants électriques",
            "value": "2000W(3 PCS)"
          },
          {
            "label": "Format studio",
            "value": "750×550×530mm"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "C017",
        "name": "Compteur d'air pour béton à lecture directe",
        "suffixName": "",
        "model": "CA-3",
        "category": "concrete",
        "thumbnail": "/assets/images/CA-3.png",
        "description": "Ce produit est principalement utilisé pour mesurer la teneur en air du béton frais. Il convient aux bétons ordinaires, aux bétons fluides et aux bétons secs durcis, mais pas aux bétons à faible teneur en air. Ce produit est conçu conformément à la norme ANS1/ASTM C231-78, qui est conforme aux normes internationales. La valeur de la teneur en air peut être lue directement sur le disque gradué, sans conversion de courbe nécessaire.",
        "features": [],
        "standards": [
          "EN 12350-7",
          "ASTM C231 type B",
          "AASHTO T152",
          "DIN 1048"
        ],
        "specifications": [
          {
            "label": "granulométrie du mélange à béton",
            "value": "≤40mm"
          },
          {
            "label": "détermination de la teneur maximale en air",
            "value": "8%"
          },
          {
            "label": "taille du pot de mesure en béton",
            "value": "Volume 7L, inner diameter to height ratio is 1:1"
          },
          {
            "label": "Plage de valeurs de pression de l'instrument d'affichage",
            "value": "0.25MPa"
          },
          {
            "label": "Valeur de division de l'instrument d'affichage",
            "value": "0.005MPa"
          },
          {
            "label": "La quantité d'air",
            "value": "8%"
          },
          {
            "label": "La lecture minimale",
            "value": "0.1%"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "C020",
        "name": "Pénétromètre Acme",
        "suffixName": "",
        "model": "HG-1000",
        "category": "concrete",
        "thumbnail": "/assets/images/HG-1000.png",
        "description": "Ce produit convient pour tester le temps de prise de divers ciments, adjuvants et mélanges de béton avec différents dosages et sous différentes températures. Le moule d'essai est entièrement en aluminium, léger et facile à utiliser.",
        "features": [],
        "standards": [
          "ASTM C403",
          "AASHTO T197"
        ],
        "specifications": [
          {
            "label": "Calibre supérieur du moule spécimen",
            "value": "Φ160mm"
          },
          {
            "label": "Moule spécimen calibre inférieur",
            "value": "Φ150mm"
          },
          {
            "label": "Température de test",
            "value": "20±2℃"
          },
          {
            "label": "force de pénétration maximale",
            "value": "1000N"
          },
          {
            "label": "valeur minimale de division",
            "value": "0.1N"
          },
          {
            "label": "Erreur d'affichage de la valeur",
            "value": "<±1%"
          },
          {
            "label": "Méthode de pénétration",
            "value": "Manual"
          },
          {
            "label": "Zone du stylet",
            "value": "100, 50, 20mm²"
          },
          {
            "label": "Tension",
            "value": "220V"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "C021",
        "name": "Pénétromètre à cadran Acme",
        "suffixName": "",
        "model": "HG-80",
        "category": "concrete",
        "thumbnail": "/assets/images/HG-80.png",
        "description": "Ce produit convient pour tester le temps de prise de divers ciments, adjuvants et mélanges de béton avec différents ratios de mélange de béton dans différents environnements de température.",
        "features": [],
        "standards": [
          "ASTM C403",
          "AASHTO T197"
        ],
        "specifications": [
          {
            "label": "Mode d'affichage",
            "value": "Pointer"
          },
          {
            "label": "valeur maximale mesurée",
            "value": "1200N"
          },
          {
            "label": "Calibre supérieur du moule spécimen",
            "value": "Φ160mm"
          },
          {
            "label": "Moule spécimen calibre inférieur",
            "value": "Φ150mm"
          },
          {
            "label": "Hauteur de la moisissure de l'échantillon",
            "value": "150mm"
          },
          {
            "label": "Profondeur de pénétration",
            "value": "25mm"
          },
          {
            "label": "valeur minimale de division",
            "value": "1N"
          },
          {
            "label": "Erreur d'indication",
            "value": "±10N"
          },
          {
            "label": "Zone de chargement du stylet",
            "value": "100,50,20mm2"
          },
          {
            "label": "résistance à la pénétration",
            "value": "0.2～3.5MPa,3.5～20MPa, 20～28MPa"
          },
          {
            "label": "Dimensions",
            "value": "700×350×1000mm"
          },
          {
            "label": "Dimensions de l'emballage",
            "value": "730×360×1040mm"
          },
          {
            "label": "Poids",
            "value": "40kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "C022",
        "name": "Vibrateur à béton",
        "suffixName": "500×500 mm",
        "model": "HZJ-0.5",
        "category": "concrete",
        "thumbnail": "/assets/images/HZJ-0.5.png",
        "description": "Ce produit convient aux chantiers de construction en laboratoire pour la fabrication d'éprouvettes et aux usines de composants préfabriqués pour la vibration de divers éléments en béton tels que des dalles, des colonnes et des poutres.",
        "features": [],
        "standards": [
          "EN 12390-2",
          "BS 1881:108"
        ],
        "specifications": [
          {
            "label": "Taille du tableau",
            "value": "500×500mm"
          },
          {
            "label": "Fréquence de vibration",
            "value": "2860 point/min"
          },
          {
            "label": "Amplitude de vibration",
            "value": "0.3-0.6mm"
          },
          {
            "label": "Puissance du vibrateur",
            "value": "0.55kW"
          },
          {
            "label": "Charger",
            "value": "100kg"
          },
          {
            "label": "Poids",
            "value": "35kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "C023",
        "name": "Vibrateur à béton",
        "suffixName": "800×800mm",
        "model": "HZJ-0.8",
        "category": "concrete",
        "thumbnail": "/assets/images/HZJ-0.8.png",
        "description": "Ce produit convient aux chantiers de construction en laboratoire pour la fabrication d'éprouvettes et aux usines de composants préfabriqués pour la vibration de divers éléments en béton tels que des dalles, des colonnes et des poutres.",
        "features": [],
        "standards": [
          "EN 12390-2",
          "BS 1881:108"
        ],
        "specifications": [
          {
            "label": "Taille du tableau",
            "value": "800×800mm"
          },
          {
            "label": "Fréquence de vibration",
            "value": "2860 point/min"
          },
          {
            "label": "Amplitude de vibration",
            "value": "0.3-0.6mm"
          },
          {
            "label": "Puissance du vibrateur",
            "value": "1.1kW"
          },
          {
            "label": "Charger",
            "value": "150kg"
          },
          {
            "label": "Poids",
            "value": "70kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "C024",
        "name": "Vibrateur à béton",
        "suffixName": "1000×1000mm",
        "model": "HZJ-1",
        "category": "concrete",
        "thumbnail": "/assets/images/HZJ-1.png",
        "description": "Ce produit convient aux chantiers de construction en laboratoire pour la fabrication d'éprouvettes et aux usines de composants préfabriqués pour la vibration de divers éléments en béton tels que des dalles, des colonnes et des poutres.",
        "features": [],
        "standards": [
          "EN 12390-2",
          "BS 1881:108"
        ],
        "specifications": [
          {
            "label": "Taille du tableau",
            "value": "1000×1000mm"
          },
          {
            "label": "Fréquence de vibration",
            "value": "2860 point/min"
          },
          {
            "label": "Amplitude de vibration",
            "value": "0.3-0.6mm"
          },
          {
            "label": "Puissance du vibrateur",
            "value": "1.5kW"
          },
          {
            "label": "Charger",
            "value": "200kg"
          },
          {
            "label": "Poids",
            "value": "100kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "C025",
        "name": "Bétonnière à un seul arbre",
        "suffixName": "30 L",
        "model": "SJD-30",
        "category": "concrete",
        "thumbnail": "/assets/images/SJD-30.png",
        "description": "Cette machine convient aux unités de recherche scientifique du secteur de la construction, aux entreprises de construction et aux fabricants de composants en béton. Elle permet de mélanger le béton ordinaire et le béton léger, et peut également être utilisée dans d'autres secteurs pour le mélange de différents matériaux.",
        "features": [],
        "standards": [
          "ASTM C192/C192M-02"
        ],
        "specifications": [
          {
            "label": "Épaisseur de paroi",
            "value": "6mm"
          },
          {
            "label": "Capacité d'alimentation",
            "value": "48L"
          },
          {
            "label": "Capacité de décharge",
            "value": "30L"
          },
          {
            "label": "capacité de décharge maximale",
            "value": "33L"
          },
          {
            "label": "Temps de mélange",
            "value": "≤45s"
          },
          {
            "label": "vitesse de l'axe d'agitation",
            "value": "45r/min"
          },
          {
            "label": "énergie électrique",
            "value": "1.5kW"
          },
          {
            "label": "Tension",
            "value": "AC380V±10%"
          },
          {
            "label": "Dimensions",
            "value": "1130×400×900mm"
          },
          {
            "label": "Poids",
            "value": "160kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "C026",
        "name": "Bétonnière à un seul arbre",
        "suffixName": "60L",
        "model": "SJD-60",
        "category": "concrete",
        "thumbnail": "/assets/images/SJD-60.png",
        "description": "Cette machine convient aux unités de recherche scientifique du secteur de la construction, aux entreprises de construction et aux fabricants de composants en béton. Elle permet de mélanger le béton ordinaire et le béton léger, et peut également être utilisée dans d'autres secteurs pour le mélange de différents matériaux.",
        "features": [],
        "standards": [
          "ASTM C192/C192M-02"
        ],
        "specifications": [
          {
            "label": "Épaisseur de paroi",
            "value": "6mm"
          },
          {
            "label": "Capacité d'alimentation",
            "value": "96L"
          },
          {
            "label": "Capacité de décharge",
            "value": "60L"
          },
          {
            "label": "capacité de décharge maximale",
            "value": "66L"
          },
          {
            "label": "Temps de mélange",
            "value": "≤45s"
          },
          {
            "label": "vitesse de l'axe d'agitation",
            "value": "45r/min"
          },
          {
            "label": "énergie électrique",
            "value": "2.2kW"
          },
          {
            "label": "Tension",
            "value": "AC380V±10%"
          },
          {
            "label": "Dimensions",
            "value": "1520×530×1060mm"
          },
          {
            "label": "Poids",
            "value": "220kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "C027",
        "name": "Analyseur rapide de teneur en ions chlorure",
        "suffixName": "",
        "model": "LDCL-B",
        "category": "concrete",
        "thumbnail": "/assets/images/LDCL-B.png",
        "description": "Ce produit détermine rapidement la teneur en ions chlorure solubles dans l'eau du béton, du sable, du gravier, du ciment, de l'eau de gâchage et d'autres matériaux inorganiques grâce à son logiciel professionnel et à ses réactifs chimiques anti-brouillage intégrés.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Plage de mesure",
            "value": "50～999.99mV"
          },
          {
            "label": "Configuration des électrodes",
            "value": "domestic 2 electrodes"
          },
          {
            "label": "Plage de mesure électrique",
            "value": "1×10-2～5×10-5mol/L"
          },
          {
            "label": "Tension",
            "value": "AC220V±10%"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "C028",
        "name": "Instrument de sécrétion de pression du béton",
        "suffixName": "",
        "model": "SY-2",
        "category": "concrete",
        "thumbnail": "/assets/images/SY-2.png",
        "description": "Cet appareil est utilisé pour mesurer la pression de mélange du béton jusqu'à 40 mm. Il présente les avantages suivants : précision de mesure, simplicité d'utilisation, faible encombrement et facilité de moulage.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Plage de mesure maximale du manomètre",
            "value": "6MPa"
          },
          {
            "label": "diamètre intérieur du cylindre",
            "value": "125±0.02mm"
          },
          {
            "label": "Hauteur du corps du cylindre",
            "value": "200±0.2mm"
          },
          {
            "label": "diamètre du piston de travail",
            "value": "125mm"
          },
          {
            "label": "ouverture de l'écran",
            "value": "0.335mm (50 mesh)"
          },
          {
            "label": "Poids",
            "value": "20kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "D001",
        "name": "Boîte de cure à l'eau pour ciment",
        "suffixName": "180 pièces",
        "model": "HBY-30",
        "category": "cement",
        "thumbnail": "/assets/images/HBY-30（立式）.png",
        "description": "Ce produit convient aux cimenteries, aux entreprises de construction, aux entreprises de génie routier et de ponts, ainsi qu'aux services de recherche scientifique et de contrôle qualité concernés, pour effectuer la maintenance standard des échantillons de ciment, de béton et de produits cimentiers, en ce qui concerne la résistance et le temps de prise.",
        "features": [],
        "standards": [
          "EN 196-1"
        ],
        "specifications": [
          {
            "label": "Contrôle de la température",
            "value": "20±1℃"
          },
          {
            "label": "précision du contrôle de la température",
            "value": "±1℃"
          },
          {
            "label": "Puissance du compresseur",
            "value": "240W"
          },
          {
            "label": "Puissance du chauffage",
            "value": "1000W"
          },
          {
            "label": "Tension",
            "value": "AC220V±10%"
          },
          {
            "label": "dimensions du boîtier de maintenance",
            "value": "175×290×65mm (30 pieces)"
          },
          {
            "label": "taille du bloc de test",
            "value": "40×40×160 mm(180 pieces)"
          },
          {
            "label": "Dimensions",
            "value": "800×670×1750mm"
          },
          {
            "label": "Poids",
            "value": "148kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "D002",
        "name": "Boîte de cure à l'eau pour ciment",
        "suffixName": "360 pièces",
        "model": "HBY-64",
        "category": "cement",
        "thumbnail": "/assets/images/HBY-64（立式）.png",
        "description": "Ce produit convient aux cimenteries, aux entreprises de construction, aux entreprises de génie routier et de ponts, ainsi qu'aux services de recherche scientifique et de contrôle qualité concernés, pour effectuer la maintenance standard des échantillons de ciment, de béton et de produits cimentiers, en ce qui concerne la résistance et le temps de prise.",
        "features": [],
        "standards": [
          "EN 196-1"
        ],
        "specifications": [
          {
            "label": "Contrôle de la température",
            "value": "20±1℃"
          },
          {
            "label": "précision du contrôle de la température",
            "value": "±1℃"
          },
          {
            "label": "Tension",
            "value": "AC220V±10%"
          },
          {
            "label": "Puissance du compresseur",
            "value": "240W"
          },
          {
            "label": "Puissance du chauffage",
            "value": "2000W"
          },
          {
            "label": "taille du bloc de test",
            "value": "40×40×160mm (360 pieces)"
          },
          {
            "label": "dimensions du boîtier de maintenance",
            "value": "175×290×65mm (60 pieces)"
          },
          {
            "label": "Dimensions",
            "value": "1080×850×1880mm"
          },
          {
            "label": "Poids",
            "value": "350kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "D006",
        "name": "Chambre de cure pour ciment et béton",
        "suffixName": "18 moules à ciment triples",
        "model": "HBY-40B",
        "category": "cement",
        "thumbnail": "/assets/images/HBY-40B（铁门）.png",
        "description": "Ce produit est conçu et fabriqué conformément aux exigences nationales de maintenance des ciments, bétons et produits dérivés. Il convient aux cimenteries, entreprises de construction, entreprises de génie routier et de ponts, ainsi qu'aux services de recherche scientifique et de contrôle qualité concernés, pour effectuer la maintenance standard des échantillons de ciment, béton et produits dérivés afin de contrôler la résistance et le temps de prise.",
        "features": [],
        "standards": [
          "EN 196-1",
          "196-08",
          "ISO 679",
          "ASTM C109",
          "C511"
        ],
        "specifications": [
          {
            "label": "Température de test",
            "value": "20±1℃"
          },
          {
            "label": "Contrôler l'humidité",
            "value": "≧95%RH"
          },
          {
            "label": "Puissance du compresseur",
            "value": "138W"
          },
          {
            "label": "Puissance du chauffage",
            "value": "800W"
          },
          {
            "label": "Tension",
            "value": "AC220V±10%"
          },
          {
            "label": "Nombre de moules d'essai placés",
            "value": "40×40×160 trial molds, 6 groups can be placed on each layer; 150×150×150 mold trial, 3 groups can be placed on each layer; 100×100×100 mold trial, 4 groups can be placed on each layer"
          },
          {
            "label": "Format studio",
            "value": "590×570×1180mm"
          },
          {
            "label": "Dimensions",
            "value": "1000×700×1530mm"
          },
          {
            "label": "Poids",
            "value": "122kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "D008",
        "name": "Boîte de cure standard pour spécimens de mortier mixte",
        "suffixName": "",
        "model": "HBY-30",
        "category": "cement",
        "thumbnail": "/assets/images/HBY-30.png",
        "description": "Ce produit convient aux cimenteries, aux entreprises de construction, aux entreprises de génie routier et de ponts, ainsi qu'aux services de recherche scientifique et de contrôle qualité concernés, pour effectuer la maintenance standard des échantillons de ciment, de béton et de produits cimentiers, en ce qui concerne la résistance et le temps de prise.",
        "features": [],
        "standards": [
          "EN 196-1",
          "196-08",
          "ISO 679",
          "ASTM C109",
          "C511"
        ],
        "specifications": [
          {
            "label": "précision du régulateur de température",
            "value": "20±1℃"
          },
          {
            "label": "Contrôler l'humidité",
            "value": "60-80%RH"
          },
          {
            "label": "Tension",
            "value": "AC220V±10%"
          },
          {
            "label": "Puissance du compresseur",
            "value": "138W"
          },
          {
            "label": "Puissance du chauffage",
            "value": "500W"
          },
          {
            "label": "Format studio",
            "value": "580×500×1180mm"
          },
          {
            "label": "Le support interne pour échantillons est divisé en 6 grilles de tailles égales.",
            "value": "580×490×180mm"
          },
          {
            "label": "Dimensions",
            "value": "1000×700×1530 mm"
          },
          {
            "label": "Poids",
            "value": "130kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "D009",
        "name": "Malaxeur à mortier de ciment",
        "suffixName": "",
        "model": "JJ-20F",
        "category": "cement",
        "thumbnail": "/assets/images/JJ-20F.png",
        "description": "Cet instrument est principalement utilisé pour préparer des échantillons de mortier de ciment destinés aux essais de résistance au mélange.",
        "features": [],
        "standards": [
          "EN 196-1",
          "EN 196-3",
          "EN 413-2",
          "EN 459-2",
          "EN 480-1",
          "EN ISO 679",
          "ASTM C305M",
          "AASHTO T162"
        ],
        "specifications": [
          {
            "label": "Rotation à basse vitesse",
            "value": "140 ± 2 r/min"
          },
          {
            "label": "Révolution à basse vitesse",
            "value": "62 ± 2 r/min"
          },
          {
            "label": "Rotation à grande vitesse",
            "value": "285 ± 3 r/min"
          },
          {
            "label": "Révolution à grande vitesse",
            "value": "125 ± 3 r/min"
          },
          {
            "label": "Largeur de la lame de mélange",
            "value": "135mm"
          },
          {
            "label": "Capacité",
            "value": "5L"
          },
          {
            "label": "L'épaisseur de la paroi",
            "value": "1.5mm"
          },
          {
            "label": "L'espace de travail entre la lame de mélange et le récipient de mélange",
            "value": "3mm ±1mm"
          },
          {
            "label": "Tension",
            "value": "AC220V±10%"
          },
          {
            "label": "Dimensions extérieures (longueur×largeur×hauteur)",
            "value": "630×400×660mm"
          },
          {
            "label": "Poids",
            "value": "80kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "D010",
        "name": "Plateforme vibrante pour mortier de ciment",
        "suffixName": "",
        "model": "ZT-20F",
        "category": "cement",
        "thumbnail": "/assets/images/ZT-20F.png",
        "description": "Cet instrument convient à la préparation d'échantillons pour les essais de résistance du mortier de ciment.",
        "features": [],
        "standards": [
          "EN 196-1",
          "EN ISO 679"
        ],
        "specifications": [
          {
            "label": "La masse totale de la plaque de table (y compris le bras, le cadre de la matrice, etc.)",
            "value": "13.75±0.25kg"
          },
          {
            "label": "Le poids total de la partie vibrante",
            "value": "20±0.5kg"
          },
          {
            "label": "Amplitude (distance de chute)",
            "value": "15±0.3mm"
          },
          {
            "label": "La durée de 60 vibrations",
            "value": "60±2s"
          },
          {
            "label": "vitesse du moteur",
            "value": "60rpm"
          },
          {
            "label": "Puissance du moteur",
            "value": "40W"
          },
          {
            "label": "Tension",
            "value": "AC220V"
          },
          {
            "label": "Dimensions générales",
            "value": "1152×482×510mm"
          },
          {
            "label": "Poids",
            "value": "87kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "D011",
        "name": "Machine d'essai de flexion électrique (type à pointeur)",
        "suffixName": "5000N",
        "model": "DKZ-5000",
        "category": "cement",
        "thumbnail": "/assets/images/DKZ-5000.png",
        "description": "Cette machine d'essai est principalement utilisée pour tester la résistance à la flexion du mortier de ciment à cuisson douce dans les cimenteries, les entreprises de construction, les écoles professionnelles concernées et les unités de recherche scientifique, et peut également être utilisée pour tester la résistance à la flexion d'autres matériaux fragiles non métalliques.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Méthode d'affichage",
            "value": "Pointer"
          },
          {
            "label": "Rapport de puissance à double levier (rapport de distance entre le faisceau inférieur et le bras) (maximum)",
            "value": "50:1"
          },
          {
            "label": "Débit maximal",
            "value": "Double Leverage 5000N"
          },
          {
            "label": "Vitesse de chargement",
            "value": "50N/s"
          },
          {
            "label": "Diamètre du rouleau de chargement et du rouleau de support",
            "value": "Φ10mm"
          },
          {
            "label": "Pas du rouleau de support",
            "value": "100mm"
          },
          {
            "label": "Espacement du cadre de pose",
            "value": "46mm"
          },
          {
            "label": "Inclinaison du levier",
            "value": ">1/50°"
          },
          {
            "label": "Dimensions (longueur x largeur x hauteur)",
            "value": "1080×220×780mm"
          },
          {
            "label": "Poids",
            "value": "130kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "D013",
        "name": "Machine d'essai de flexion électrique (affichage numérique)",
        "suffixName": "6000N",
        "model": "DKZ-6000",
        "category": "cement",
        "thumbnail": "/assets/images/DKZ-6000（数显）.png",
        "description": "Cette machine d'essai est principalement utilisée pour tester la résistance à la flexion du mortier de ciment à cuisson douce dans les cimenteries, les entreprises de construction, les écoles professionnelles concernées et les unités de recherche scientifique, et peut également être utilisée pour tester la résistance à la flexion d'autres matériaux fragiles non métalliques.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "résistance maximale à la flexion",
            "value": "6000N"
          },
          {
            "label": "Diamètre du rouleau de chargement et du rouleau de support",
            "value": "Φ10mm"
          },
          {
            "label": "distance du rouleau de support",
            "value": "100mm"
          },
          {
            "label": "Espacement du cadre de pose",
            "value": "46mm"
          },
          {
            "label": "Inclinaison du levier",
            "value": ">1/50°"
          },
          {
            "label": "Tension",
            "value": "AC220V±10%"
          },
          {
            "label": "Dimensions",
            "value": "1180×220×800mm"
          },
          {
            "label": "Poids",
            "value": "135kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "D014",
        "name": "Tableau d'écoulement du mortier de ciment",
        "suffixName": "",
        "model": "NLD-3F",
        "category": "cement",
        "thumbnail": "/assets/images/NLD-3F.png",
        "description": "Il est principalement utilisé pour les tests de fluidité du sable de mortier de ciment.",
        "features": [],
        "standards": [
          "EN 459-2",
          "EN 1015-3",
          "EN 13279-2",
          "ASTM C230",
          "BS 4551-1"
        ],
        "specifications": [
          {
            "label": "Le poids total de la partie vibrante",
            "value": "4.35±0.15kg"
          },
          {
            "label": "distance de chute des vibrations",
            "value": "10±0.2mm(For ASTM C230, 12.7±0.2)"
          },
          {
            "label": "Fréquence de vibration",
            "value": "1Hz"
          },
          {
            "label": "Temps de vibration",
            "value": "25 times"
          },
          {
            "label": "Paramètres du bureau",
            "value": "Cast steel, hard chrome plated working surface"
          },
          {
            "label": "Diamètre",
            "value": "Φ300±1mm(For ASTM C230, Φ254±1)"
          },
          {
            "label": "Dimensions",
            "value": "400×500×370mm"
          },
          {
            "label": "Tension",
            "value": "AC220V±10%"
          },
          {
            "label": "Poids",
            "value": "25kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "D015",
        "name": "Analyseur de finesse du ciment par tamisage à jet d'air",
        "suffixName": "",
        "model": "FSY-150",
        "category": "cement",
        "thumbnail": "/assets/images/FSY-150（普通）.png",
        "description": "Cet équipement est largement utilisé pour le contrôle de la finesse du ciment et le contrôle de sa production. Il peut également servir au contrôle de la finesse des poudres dans d'autres secteurs industriels. C'est un instrument couramment utilisé dans les stations de contrôle de la qualité du ciment, les cimenteries et autres unités de production.",
        "features": [],
        "standards": [
          "EN 933-10",
          "ASTM C1891"
        ],
        "specifications": [
          {
            "label": "finesse du test d'analyse granulométrique",
            "value": "1~0.030mm"
          },
          {
            "label": "Durée de projection automatique",
            "value": "0～999s (adjust)"
          },
          {
            "label": "Pression négative de fonctionnement",
            "value": "-4000~6000Pa"
          },
          {
            "label": "Tension",
            "value": "AC220V±10%"
          },
          {
            "label": "Alimentation",
            "value": "10～25g"
          },
          {
            "label": "Accessoires",
            "value": "0.045 sieve, 0.08 sieve (optional)"
          },
          {
            "label": "Bruit",
            "value": "≤75dB"
          },
          {
            "label": "Dimensions",
            "value": "450×380×830mm"
          },
          {
            "label": "Poids",
            "value": "30kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "D017",
        "name": "Boîte à ébullition",
        "suffixName": "",
        "model": "FZ-31A",
        "category": "cement",
        "thumbnail": "/assets/images/FZ-31A.png",
        "description": "Cet équipement fait partie des équipements couramment utilisés dans la production de ciment, la construction, la recherche scientifique et les unités d'essais. Il est fabriqué en acier inoxydable.",
        "features": [],
        "standards": [
          "EN 196-3",
          "UNE 80102",
          "EN ISO 9597",
          "BS 6463",
          "NF P15-432"
        ],
        "specifications": [
          {
            "label": "température d'ébullition maximale",
            "value": "100℃"
          },
          {
            "label": "Volume du réservoir intérieur",
            "value": "31L"
          },
          {
            "label": "Temps de chauffage",
            "value": "30±5min(20℃ to 100℃)"
          },
          {
            "label": "contrôle du temps de chauffage",
            "value": "0～3.5h"
          },
          {
            "label": "Puissance du chauffage tubulaire",
            "value": "4kW"
          },
          {
            "label": "Tension",
            "value": "AC220V±10%"
          },
          {
            "label": "Format studio",
            "value": "410×240×310mm"
          },
          {
            "label": "Dimensions",
            "value": "490×290×410mm"
          },
          {
            "label": "Poids",
            "value": "25kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "D018",
        "name": "Mesureur automatique de surface spécifique",
        "suffixName": "Méthode Blaine",
        "model": "FBT-9",
        "category": "cement",
        "thumbnail": "/assets/images/FBT-9.png",
        "description": "Ce produit convient à la mesure de la surface spécifique par gramme de matériau solide.",
        "features": [],
        "standards": [
          "EN 196-6",
          "comparable to: ASTM C204",
          "AASHTO T153",
          "BS 4359:2"
        ],
        "specifications": [
          {
            "label": "Tension",
            "value": "200V±10%"
          },
          {
            "label": "Plage de temporisation",
            "value": "0.1s<T<999.9s"
          },
          {
            "label": "Précision du chronométrage",
            "value": "<0.2s"
          },
          {
            "label": "Précision de mesure",
            "value": "＜1%"
          },
          {
            "label": "Plage de température",
            "value": "8~34℃"
          },
          {
            "label": "diamètre de la cavité intérieure du cylindre respirant",
            "value": "Φ12.7mm"
          },
          {
            "label": "Hauteur de l'échantillon de la cavité intérieure du cylindre respirant",
            "value": "15mm"
          },
          {
            "label": "Nombre de trous dans la plaque perforée",
            "value": "35"
          },
          {
            "label": "Diamètre des trous de la plaque perforée",
            "value": "Φ1.0mm"
          },
          {
            "label": "Épaisseur de la plaque perforée",
            "value": "1mm"
          },
          {
            "label": "dimension extérieure",
            "value": "430×500×280mm"
          },
          {
            "label": "Poids",
            "value": "8kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "E001",
        "name": "Malaxeur à mortier de ciment",
        "suffixName": "",
        "model": "JJ-5",
        "category": "cement",
        "thumbnail": "/assets/images/JJ-5.png",
        "description": "Ce produit convient aux cimenteries, aux entreprises de construction, aux entreprises de génie routier et de ponts, ainsi qu'aux services de recherche scientifique et de contrôle qualité concernés, pour effectuer la maintenance standard des échantillons de ciment, de béton et de produits cimentiers, en ce qui concerne la résistance et le temps de prise.",
        "features": [
          "Commandé par un moteur à double vitesse via un programmateur horaire, il effectue automatiquement le cycle de fonctionnement spécifié de « rotation lente — arrêt — rotation rapide ».",
          "Sa structure entièrement métallique garantit des performances de test stables."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Vitesse de rotation à basse vitesse (tr/min)",
            "value": "140±5"
          },
          {
            "label": "Vitesse de rotation à grande vitesse (tr/min)",
            "value": "285±10"
          },
          {
            "label": "Vitesse de rotation à basse vitesse (tr/min)",
            "value": "62±5"
          },
          {
            "label": "Vitesse de révolution à grande vitesse (tr/min)",
            "value": "125±10"
          },
          {
            "label": "Largeur de la lame de mélange (mm)",
            "value": "135"
          },
          {
            "label": "Spécifications du filetage de raccordement entre la lame de mélange et l'arbre de la lame de mélange",
            "value": "M18×1.5"
          },
          {
            "label": "Volume du récipient mélangeur (L)",
            "value": "5"
          },
          {
            "label": "Épaisseur de paroi du pot mélangeur (mm)",
            "value": "1.5"
          },
          {
            "label": "espace de travail entre la lame de mélange et le récipient de mélange (mm)",
            "value": "3±1"
          },
          {
            "label": "tension d'alimentation",
            "value": "AC380V±10%, 50Hz"
          },
          {
            "label": "Dimensions globales (mm)",
            "value": "550×300×700"
          },
          {
            "label": "Poids (kg)",
            "value": "85"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "E002",
        "name": "Malaxeur à pâte de ciment",
        "suffixName": "",
        "model": "NJ-160A",
        "category": "cement",
        "thumbnail": "/assets/images/NJ-160A.png",
        "description": "Ce produit convient à la détermination de la consistance et du temps de prise standard du ciment, ainsi qu'à la fabrication d'éprouvettes de résistance. Il constitue un équipement indispensable dans les laboratoires des cimenteries, les entreprises de construction, les universités et les instituts de recherche.",
        "features": [
          "Commandé par un moteur à double vitesse via un programmateur horaire, il effectue automatiquement le cycle de fonctionnement spécifié de « rotation lente — arrêt — rotation rapide ».",
          "Sa structure entièrement métallique garantit des performances de test stables."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Vitesse de rotation à basse vitesse (tr/min)",
            "value": "62±5"
          },
          {
            "label": "Vitesse de révolution à grande vitesse (tr/min)",
            "value": "125±10"
          },
          {
            "label": "Vitesse de rotation à basse vitesse (tr/min)",
            "value": "140±5"
          },
          {
            "label": "Vitesse de rotation à grande vitesse (tr/min)",
            "value": "258±10"
          },
          {
            "label": "Durée du programme de contrôle automatique à basse vitesse (s)",
            "value": "120±3"
          },
          {
            "label": "Durée d'arrêt du programme de contrôle automatique (s)",
            "value": "15"
          },
          {
            "label": "Durée du programme de contrôle automatique à haute vitesse (s)",
            "value": "120±3"
          },
          {
            "label": "Spécifications du filetage de raccordement entre la pale de mélange et l'arbre de la pale",
            "value": "M16×1"
          },
          {
            "label": "espace de travail entre la lame de mélange et le récipient de mélange (mm)",
            "value": "2±1"
          },
          {
            "label": "Largeur de la lame de mélange (mm)",
            "value": "111"
          },
          {
            "label": "Épaisseur de paroi du pot mélangeur (mm)",
            "value": "1"
          },
          {
            "label": "Dimensions du pot mélangeur (diamètre intérieur × profondeur) (mm)",
            "value": "Φ160×139"
          },
          {
            "label": "Volume de mélange (L)",
            "value": "2.5"
          },
          {
            "label": "tension d'alimentation",
            "value": "AC380V±10%, 50Hz"
          },
          {
            "label": "Dimensions globales (mm)",
            "value": "450×250×500"
          },
          {
            "label": "Poids (kg)",
            "value": "65"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "E003",
        "name": "Plateforme vibrante pour mortier de ciment",
        "suffixName": "",
        "model": "ZT-96",
        "category": "cement",
        "thumbnail": "/assets/images/ZT-96.png",
        "description": "Ce produit convient au compactage et au moulage d'éprouvettes de mortier de ciment lors de leur préparation. Il est principalement utilisé dans les cimenteries, les entreprises de construction et les établissements d'enseignement supérieur pour les essais et les expérimentations.",
        "features": [
          "Composé d'un élément vibrant, d'une section de cadre et d'un système de contrôle de comptage infrarouge ;",
          "Contrôle automatique du comptage infrarouge, arrêt automatique à 60 comptages par seconde, offrant une utilisation pratique et un comptage précis ;",
          "La distance entre le centre du disque de la table et le centre de l'axe du bras est de 800 mm."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Distance de chute (mm)",
            "value": "15±0.3"
          },
          {
            "label": "Fréquence de vibration",
            "value": "60 times/60 seconds ±2 seconds"
          },
          {
            "label": "Poids de la partie vibrante (kg)",
            "value": "20±0.5"
          },
          {
            "label": "Puissance du moteur (W)",
            "value": "70"
          },
          {
            "label": "tension d'alimentation",
            "value": "AC220V±10%, 50Hz"
          },
          {
            "label": "Dimensions globales (mm)",
            "value": "1010×300×460"
          },
          {
            "label": "Poids (kg)",
            "value": "65"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "E004",
        "name": "Tableau d'écoulement du mortier de ciment",
        "suffixName": "",
        "model": "NLD-3",
        "category": "cement",
        "thumbnail": "/assets/images/NLD-3.png",
        "description": "Ce produit convient pour déterminer la quantité d'eau nécessaire au mortier de ciment pour atteindre une consistance standard en mesurant sa valeur de fluidité.",
        "features": [
          "Le plateau est fabriqué en matériau chromé dur, présentant une surface brillante, une apparence élégante et une excellente résistance à la rouille.",
          "La manette offre une grande précision et est simple et pratique à utiliser."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Distance de chute par vibration (mm)",
            "value": "10±0.2"
          },
          {
            "label": "Fréquence de vibration (Hz)",
            "value": "1"
          },
          {
            "label": "Nombre de vibrations (fois)",
            "value": "25"
          },
          {
            "label": "Poids de la partie vibrante (kg)",
            "value": "4.35±0.15"
          },
          {
            "label": "Matériel de table",
            "value": "Cast steel, working surface hard chrome-plated"
          },
          {
            "label": "Diamètre du plateau (mm)",
            "value": "Φ300±1"
          },
          {
            "label": "Dimensions globales (mm)",
            "value": "200×300×280"
          },
          {
            "label": "Poids (kg)",
            "value": "25"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "E005",
        "name": "Malaxeur à pâte de ciment",
        "suffixName": "",
        "model": "NJ-160F",
        "category": "cement",
        "thumbnail": "/assets/images/NJ-160F.png",
        "description": "Le malaxeur à pâte de ciment est principalement utilisé pour déterminer la consistance standard et le temps de prise du ciment, ainsi que pour préparer des blocs d'essai de solidité.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Vitesse de rotation à basse vitesse (tr/min)",
            "value": "62±2"
          },
          {
            "label": "Vitesse de révolution à grande vitesse (tr/min)",
            "value": "125±3"
          },
          {
            "label": "Vitesse de rotation à basse vitesse (tr/min)",
            "value": "140±2"
          },
          {
            "label": "Vitesse de rotation à grande vitesse (tr/min)",
            "value": "258±3"
          },
          {
            "label": "Spécifications du filetage de raccordement entre la pale de mélange et l'arbre de la pale",
            "value": "M16×1"
          },
          {
            "label": "Largeur de la lame de mélange (mm)",
            "value": "111"
          },
          {
            "label": "Épaisseur de paroi du pot mélangeur (mm)",
            "value": "1"
          },
          {
            "label": "Volume de mélange (L)",
            "value": "2.5"
          },
          {
            "label": "tension d'alimentation",
            "value": "AC220V±10%, 50Hz"
          },
          {
            "label": "Dimensions globales (mm)",
            "value": "570×340×600"
          },
          {
            "label": "Poids (kg)",
            "value": "44"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": []
      },
      {
        "id": "E027",
        "name": "Machine d'essai de matériaux universelle électronique avec chambres environnementales",
        "suffixName": "50 kN",
        "model": "WDW-T50",
        "category": "tensile",
        "thumbnail": "/assets/images/WDW-T50.png",
        "description": "Ce produit convient aux essais et à l'analyse des propriétés mécaniques de divers métaux, non-métaux et matériaux composites, et permet d'obtenir des données d'essai telles que la valeur de la force d'essai maximale, la valeur de la force de rupture, la limite d'élasticité, les limites d'élasticité supérieure et inférieure, la résistance à la traction, la résistance à la compression, l'allongement à la rupture, le module d'élasticité en traction et le module d'élasticité en flexion des matériaux testés.",
        "features": [
          "Pour les essais à des températures non ambiantes",
          "Verrouillage arbitraire de la hauteur de la position de sécurité et de la position expérimentale.",
          "Protection automatique en cas de dépassement de la charge maximale, double protection entre limite logicielle et limite électronique."
        ],
        "standards": [
          "ASTM E83",
          "BS 3846",
          "ISO 9513",
          "EN 10002-4"
        ],
        "specifications": [
          {
            "label": "Capacité de charge (kN)",
            "value": "50 (can be customized to other capacities on request)"
          },
          {
            "label": "Précision de la mesure de charge",
            "value": "±1% (can be customized to 0.5 on request)"
          },
          {
            "label": "Plage de mesure de charge",
            "value": "1% to 100% FS"
          },
          {
            "label": "Espace de test vertical (sans gabarit)",
            "value": "1200mm"
          },
          {
            "label": "Espace de test horizontal",
            "value": "500mm"
          },
          {
            "label": "Plage de vitesse de la traverse",
            "value": "0.01～500mm/min"
          },
          {
            "label": "Résolution de contrôle de position",
            "value": "0.025µm"
          },
          {
            "label": "Précision de la mesure du déplacement",
            "value": "Within ±0.5%"
          },
          {
            "label": "Plage de mesure de la déformation",
            "value": "0.2%～100%FS"
          },
          {
            "label": "Précision de la mesure de la déformation",
            "value": "Within ±0.5%"
          },
          {
            "label": "Plage de vitesse d'essai",
            "value": "0.5% ～ 100%FS"
          },
          {
            "label": "Test de vitesse et de précision",
            "value": "Within ±1% of the set value when the set value is <10%FS; Within ±0.1% of the set value when the set value is ≥10%FS"
          },
          {
            "label": "Dimensions de l'unité principale (mm)",
            "value": "900×500×2300"
          },
          {
            "label": "Alimentation pour l'unité principale",
            "value": "220V±10%, 2000W"
          },
          {
            "label": "Poids de l'ordinateur central",
            "value": "About 300kg"
          },
          {
            "label": "Vous trouverez ci-dessous les paramètres techniques de la chambre environnementale.",
            "value": "Temperature measured at the specimen (steel) over a 50 mm (2 in) gauge length. Not applicable within 15°C of ambient"
          },
          {
            "label": "Plage de température",
            "value": "-40℃ — +150℃"
          },
          {
            "label": "Temps de refroidissement",
            "value": "less than 40 min"
          },
          {
            "label": "Temps de chauffage",
            "value": "less than 70 min"
          },
          {
            "label": "Gradient de température",
            "value": "≤2℃"
          },
          {
            "label": "Fluctuations de température",
            "value": "≤1℃"
          },
          {
            "label": "Écart de température",
            "value": "±2℃"
          },
          {
            "label": "Précision de l'affichage du régulateur de température",
            "value": "≤0.1℃"
          },
          {
            "label": "Dimensions internes de la chambre (P × L × H mm)",
            "value": "240×200×600"
          },
          {
            "label": "Alimentation électrique pour chambre environnementale",
            "value": "AC220V±10%,50-60Hz"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "La plage de température et les dimensions de la chambre climatique peuvent être personnalisées.",
          "Espace de test personnalisable",
          "Un extensomètre peut être installé pour une mesure précise de la déformation.",
          "Compatible avec différentes cellules de charge pour différentes plages de force",
          "Poignées facilement interchangeables pour différents tests"
        ]
      }
    ]
};