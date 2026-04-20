/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2026-03-26 16:46:21
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2026-04-20 10:58:57
 * @FilePath: \myEricChen.github.io\data\data-es.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2026-02-22 10:43:50
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2026-03-28 16:33:35
 * @FilePath: \EngWebsite\data\data.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// ==================== data/data.js ====================
window.ludaData = {
  // 设备分类数据（英文版）
  categories: [
    {
      id: "tensile",
      name: "Máquinas de Ensayo Universales Electromecánicas",
      description: "Máquinas universales electrónicas de alta precisión para plásticos, caucho, textiles, metales, etc.",
      icon: "/assets/series/electronic-tensile-machine-icon.jpg"
    },
    {
      id: "universal",
      name: "Máquinas de Ensayo Universales Hidráulicas",
      description: "Equipos multifuncionales para tracción, compresión, flexión, cizalladura en metales y no metales.",
      icon: "/assets/series/universal-testing-machine-icon.jpg"
    },
    {
      id: "concrete",
      name: "Ensayos de Hormigón",
      description: "Proceso completo de ensayo de hormigón: mezclado, curado, resistencia, etc.",
      icon: "/assets/series/concrete-test-icon.jpg"
    },
    {
      id: "cement",
      name: "Ensayos de Cemento y Mortero",
      description: "Equipos para consistencia, tiempo de fraguado, estabilidad y resistencia de cemento y mortero.",
      icon: "/assets/series/cement-instrument-icon.jpg"
    },
    {
      id: "large_machine",
      name: "Máquinas de Ensayo Especiales de Gran Tamaño",
      description: "Máquinas especiales: torsión, fluencia, fatiga, impacto y soluciones personalizadas.",
      icon: "/assets/series/large-testing-machine-icon.jpg"
    },
    {
      id: "research",
      name: "Equipos Generales de Laboratorio",
      description: "Instrumentos de precisión de alta estabilidad para universidades e institutos de investigación.",
      icon: "/assets/series/research-product-icon.jpg"
    },
    {
      id: "asphalt",
      name: "Ensayos de Asfalto",
      description: "Ensayo de estabilidad Marshall, seguimiento de roderas, compactación giratoria, contenido de asfalto y rendimiento de mezclas.",
      icon: "/assets/series/asphalt-instrument-icon.jpg"
    },
    {
      id: "bitumen",
      name: "Ensayos de Betún (Ligante Asfáltico)",
      description: "Equipos para penetración, punto de reblandecimiento, ductilidad, viscosidad, envejecimiento y contenido de cera.",
      icon: "/assets/series/bitumen-instrument-icon.jpg"
    },
    {
      id: "geotechnical",
      name: "Ensayos Geotécnicos y de Áridos",
      description: "Ensayos físicos/mecánicos de suelos, arenas, rocas para ingeniería geotécnica.",
      icon: "/assets/series/geotechnical-instrument-icon.jpg"
    }
  ],
    devices: [
      {
        "id": "M022",
        "name": "Máquina universal de ensayo de materiales con pantalla digital",
        "suffixName": "1000 kN",
        "model": "WE-1000B",
        "category": "universal",
        "thumbnail": "/assets/images/WE-1000B（出口）.png",
        "description": "La máquina de ensayo, también conocida como máquina de tracción, funciona con presión hidráulica y es principalmente adecuada para realizar ensayos de tracción, compresión y otros ensayos en materiales metálicos. Equipada con los accesorios adecuados, también se puede utilizar para realizar ensayos de tracción, compresión, flexión y cizallamiento en materiales no metálicos para evaluar sus propiedades mecánicas. Tiene una amplia gama de aplicaciones en la industria de materiales, metalurgia, metalurgia no ferrosa, materiales de construcción, industria de maquinaria, transporte, etc.",
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
            "label": "Capacidad de carga (kN)",
            "value": "1000"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "100～1000"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Espacio de ensayo vertical de tracción (mm)",
            "value": "690"
          },
          {
            "label": "Espacio de prueba vertical de compresión (mm)",
            "value": "620"
          },
          {
            "label": "Espesor de sujeción de la muestra plana (mm)",
            "value": "0～15"
          },
          {
            "label": "Diámetro de sujeción de la muestra redonda (mm)",
            "value": "20～40, 40～60"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "180"
          },
          {
            "label": "Dimensiones de la placa de compresión (mm)",
            "value": "Φ220(Upper) Φ230(Lower)"
          },
          {
            "label": "Espacio de prueba horizontal (mm)",
            "value": "450"
          },
          {
            "label": "Velocidad máxima del pistón (mm/min)",
            "value": "100"
          },
          {
            "label": "Velocidad máxima del cabezal transversal (mm/min)",
            "value": "240"
          },
          {
            "label": "Potencia de los motores (kW)",
            "value": "1.8"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "945×630×2100"
          },
          {
            "label": "Dimensiones del armario de control (mm)",
            "value": "700×520×1630"
          },
          {
            "label": "Peso total (kg)",
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
        "name": "Máquina universal de ensayo de amortiguadores",
        "suffixName": "600 kN",
        "model": "WAW-600Pro",
        "category": "universal",
        "thumbnail": "/assets/images/WAW-600Pro.png",
        "description": "Esta máquina de ensayo se utiliza principalmente para ensayos de tracción, compresión, flexión y cizallamiento de materiales metálicos, y cumple con los requisitos de las normas nacionales, como la norma ASTM E8 para ensayos de tracción de metales.",
        "features": [
          "El sistema de control de la fuente de aceite servoaccionado utilizado en este equipo puede reducir eficazmente el ruido de funcionamiento del equipo, disminuir la generación de calor, prolongar la vida útil del aceite y eliminar la necesidad de refrigeración.",
          "El sistema de absorción de impactos de este equipo puede reducir eficazmente las vibraciones durante su uso, haciendo que el proceso experimental sea más seguro y cómodo.",
          "La estructura sin tornillos hace que este equipo sea más rígido, más fácil de mantener y con una menor tasa de fallos en comparación con otras máquinas de ensayo universales."
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
            "label": "Capacidad de carga (kN)",
            "value": "600"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "30～600"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±0.5%"
          },
          {
            "label": "Espacio de ensayo vertical de tracción (mm)",
            "value": "670"
          },
          {
            "label": "Rango de diámetro de muestra cilíndrica (mm) (mm)",
            "value": "Φ13~Φ26,Φ26~Φ40"
          },
          {
            "label": "Rango de espesor de la muestra de placa (mm)",
            "value": "0~15"
          },
          {
            "label": "Ancho de sujeción de la muestra (mm)",
            "value": "110"
          },
          {
            "label": "Velocidad máxima de ascenso (mm/min)",
            "value": "350"
          },
          {
            "label": "Velocidad máxima de descenso (mm/min)",
            "value": "500"
          },
          {
            "label": "Potencia del motor (kW)",
            "value": "2.3"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC220V±10%,50-60Hz"
          },
          {
            "label": "Dimensiones de la máquina (mm)",
            "value": "1440×580×2200"
          },
          {
            "label": "Peso (kg)",
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
        "name": "Máquina universal de ensayo de amortiguadores",
        "suffixName": "1000 kN",
        "model": "WAW-1000Pro",
        "category": "universal",
        "thumbnail": "/assets/images/WAW-1000Pro.png",
        "description": "Esta máquina de ensayo se utiliza principalmente para ensayos de tracción, compresión, flexión y cizallamiento de materiales metálicos, y cumple con los requisitos de las normas nacionales, como la norma ASTM E8 para ensayos de tracción de metales.",
        "features": [
          "El sistema de control de la fuente de aceite servoaccionado utilizado en este equipo puede reducir eficazmente el ruido de funcionamiento del equipo, disminuir la generación de calor, prolongar la vida útil del aceite y eliminar la necesidad de refrigeración.",
          "El sistema de absorción de impactos de este equipo puede reducir eficazmente las vibraciones durante su uso, haciendo que el proceso experimental sea más seguro y cómodo.",
          "La estructura sin tornillos hace que este equipo sea más rígido, más fácil de mantener y con una menor tasa de fallos en comparación con otras máquinas de ensayo universales."
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
            "label": "Capacidad de carga (kN)",
            "value": "1000"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "50～1000"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±0.5%"
          },
          {
            "label": "Espacio de ensayo vertical de tracción (mm)",
            "value": "690"
          },
          {
            "label": "Rango de diámetro de muestra cilíndrica (mm) (mm)",
            "value": "Φ14~Φ45"
          },
          {
            "label": "Rango de espesor de la muestra de placa (mm)",
            "value": "0~40"
          },
          {
            "label": "Ancho de sujeción de la muestra (mm)",
            "value": "110"
          },
          {
            "label": "Velocidad máxima de ascenso (mm/min)",
            "value": "350"
          },
          {
            "label": "Velocidad máxima de descenso (mm/min)",
            "value": "500"
          },
          {
            "label": "Potencia del motor (kW)",
            "value": "2.3"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC220V±10%,50-60Hz"
          },
          {
            "label": "Dimensiones de la máquina (mm)",
            "value": "1570×970×2280"
          },
          {
            "label": "Peso (kg)",
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
        "name": "Máquina de ensayo especial para cables de acero servoaccionada electrohidráulica",
        "suffixName": "600 kN",
        "model": "WAW-600G",
        "category": "universal",
        "thumbnail": "/assets/images/WAW-600GS.png",
        "description": "Este producto es adecuado para el ensayo de tracción de cables de acero, y también puede utilizarse para ensayos de tracción, compresión, cizallamiento y otros ensayos de materiales metálicos y no metálicos.",
        "features": [
          "La estructura adopta un dise?o de pórtico, fabricado en acero de gran resistencia.",
          "El escudo está fabricado con material acrílico transparente, limpio y estético, y permite observar todo el proceso de la prueba.",
          "Mordazas hidráulicas externas, de fácil mantenimiento.",
          "Con placa de presión superior/inferior, para lograr un doble espacio de tracción y compresión.",
          "El sensor adopta un dise?o de rueda y radio, de alta precisión, velocidad estable y con reciprocidad.",
          "Ordenador de marca, con teclado y ratón inalámbricos, pantalla grande y funcionamiento preciso.",
          "Utilizar bombas de aceite dobles y motores dobles para lograr una fuente de aceite independiente y un suministro de presión estable."
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
            "label": "Capacidad de carga (kN)",
            "value": "600"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "60～600"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Espacio de ensayo vertical de tracción (mm)",
            "value": "1050"
          },
          {
            "label": "Espacio de prueba vertical de compresión (mm)",
            "value": "950"
          },
          {
            "label": "Diámetro de sujeción de la muestra (mm)",
            "value": "Φ12~Φ16"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "200"
          },
          {
            "label": "Dimensiones de la placa de compresión (mm)",
            "value": "Φ220(Upper) Φ230(Lower)"
          },
          {
            "label": "Velocidad máxima del pistón (mm/min)",
            "value": "100"
          },
          {
            "label": "Velocidad máxima del cabezal transversal (mm/min)",
            "value": "240"
          },
          {
            "label": "Espacio de prueba horizontal (mm)",
            "value": "450"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC380V±10%,50-60Hz"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "1050×710×2910"
          },
          {
            "label": "Dimensiones del armario de control (mm)",
            "value": "700×520×1630"
          },
          {
            "label": "Peso (kg)",
            "value": "3700"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Se puede actualizar a la clase de precisión del 0,5 %.",
          "Se puede actualizar a un sistema hidráulico con servomotor."
        ]
      },
      {
        "id": "P004",
        "name": "Máquina de ensayo especial para cables de acero servoaccionada electrohidráulica",
        "suffixName": "1000 kN",
        "model": "WAW-1000G",
        "category": "universal",
        "thumbnail": "/assets/images/WAW-1000GS.png",
        "description": "Este producto es adecuado para el ensayo de tracción de cables de acero, y también puede utilizarse para ensayos de tracción, compresión, cizallamiento y otros ensayos de materiales metálicos y no metálicos.",
        "features": [
          "La estructura adopta un dise?o de pórtico, fabricado en acero de gran resistencia.",
          "El escudo está fabricado con material acrílico transparente, limpio y estético, y permite observar todo el proceso de la prueba.",
          "Mordazas hidráulicas externas, de fácil mantenimiento.",
          "Con placa de presión superior/inferior, para lograr un doble espacio de tracción y compresión.",
          "El sensor adopta un dise?o de rueda y radio, de alta precisión, velocidad estable y con reciprocidad.",
          "Ordenador de marca, con teclado y ratón inalámbricos, pantalla grande y funcionamiento preciso.",
          "Utilizar bombas de aceite dobles y motores dobles para lograr una fuente de aceite independiente y un suministro de presión estable."
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
            "label": "Capacidad de carga (kN)",
            "value": "1000"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "100～1000"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Espacio de ensayo vertical de tracción (mm)",
            "value": "1050"
          },
          {
            "label": "Espacio de prueba vertical de compresión (mm)",
            "value": "950"
          },
          {
            "label": "Diámetro de sujeción de la muestra (mm)",
            "value": "Φ12~Φ16"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "200"
          },
          {
            "label": "Dimensiones de la placa de compresión (mm)",
            "value": "Φ220(Upper) Φ230(Lower)"
          },
          {
            "label": "Velocidad máxima del pistón (mm/min)",
            "value": "100"
          },
          {
            "label": "Velocidad máxima del cabezal transversal (mm/min)",
            "value": "240"
          },
          {
            "label": "Espacio de prueba horizontal (mm)",
            "value": "450"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC380V±10%,50-60Hz"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "1050×710×2910"
          },
          {
            "label": "Dimensiones del armario de control (mm)",
            "value": "700×520×1630"
          },
          {
            "label": "Peso (kg)",
            "value": "3700"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Se puede actualizar a la clase de precisión del 0,5 %.",
          "Se puede actualizar a un sistema hidráulico con servomotor."
        ]
      },
      {
        "id": "P007",
        "name": "Máquina universal de ensayo de materiales servohidráulica",
        "suffixName": "100 kN",
        "model": "WAW-100B",
        "category": "universal",
        "thumbnail": "/assets/images/WAW-100S.png",
        "description": "Este producto es adecuado para pruebas de propiedades mecánicas de metales, materiales no metálicos y compuestos, así como de componentes, sometiéndolos a ensayos de tracción, compresión, flexión, cizallamiento y otras. El producto incorpora un cilindro de montaje inferior, control por microcomputadora y servomotor electrohidráulico, ofreciendo alta precisión, funcionamiento sencillo, comodidad, gran capacidad de almacenamiento de datos y otras ventajas.",
        "features": [
          "La máquina incorpora un sensor de desplazamiento de presión de alta precisión, con una válvula digital de alta sensibilidad, velocidad de respuesta rápida y alta resolución.",
          "El control hidráulico adopta un sistema de servocontrol de aceite integrado, fácil de operar, estable y fiable.",
          "Con indicación inteligente del estado de funcionamiento, compensación automática servo, posicionamiento, mantenimiento de presión y otras funciones.",
          "El espacio de prueba se puede ajustar a voluntad moviendo el haz, y se pueden probar diferentes piezas.",
          "El rango se puede cambiar automáticamente y se selecciona automáticamente en función del tama?o de carga de la muestra.",
          "Con función de retención de pico de carga máxima, protección contra sobrecarga y protección contra sobrepaso de posición, su uso es más seguro.",
          "Con almacenamiento automático de datos y cálculo e impresión automáticos de todos los resultados de las pruebas."
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
            "label": "Capacidad de carga (kN)",
            "value": "100"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "10～100"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Espacio de ensayo vertical de tracción (mm)",
            "value": "480"
          },
          {
            "label": "Espacio de prueba vertical de compresión (mm)",
            "value": "480"
          },
          {
            "label": "Espesor de sujeción de la muestra plana (mm)",
            "value": "0-15"
          },
          {
            "label": "Diámetro de sujeción de la muestra redonda (mm)",
            "value": "10-20"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "180"
          },
          {
            "label": "Tama?o de la placa de presión superior (mm)",
            "value": "Φ180"
          },
          {
            "label": "Tama?o de la placa de presión inferior (mm)",
            "value": "Φ180"
          },
          {
            "label": "Distancia entre las dos columnas del espacio de tracción y presión (mm)",
            "value": "380"
          },
          {
            "label": "Velocidad máxima del pistón (mm/min)",
            "value": "100"
          },
          {
            "label": "Velocidad máxima del cabezal transversal (mm/min)",
            "value": "240"
          },
          {
            "label": "Potencia de los motores (kW)",
            "value": "1.2"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC380V±10%,50-60Hz"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "730×600×1750"
          },
          {
            "label": "Dimensiones del armario de control (mm)",
            "value": "700×520×1630"
          },
          {
            "label": "Peso (kg)",
            "value": "1500"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Se puede actualizar a la clase de precisión del 0,5 %.",
          "Se puede actualizar a un sistema hidráulico con servomotor."
        ]
      },
      {
        "id": "P008",
        "name": "Máquina universal de ensayo de materiales servohidráulica",
        "suffixName": "300 kN",
        "model": "WAW-300B",
        "category": "universal",
        "thumbnail": "/assets/images/WAW-300S.png",
        "description": "Este producto es adecuado para pruebas de propiedades mecánicas de metales, materiales no metálicos y compuestos, así como de componentes, sometiéndolos a ensayos de tracción, compresión, flexión, cizallamiento y otras. El producto incorpora un cilindro de montaje inferior, control por microcomputadora y servomotor electrohidráulico, ofreciendo alta precisión, funcionamiento sencillo, comodidad, gran capacidad de almacenamiento de datos y otras ventajas.",
        "features": [
          "La máquina incorpora un sensor de desplazamiento de presión de alta precisión, con una válvula digital de alta sensibilidad, velocidad de respuesta rápida y alta resolución.",
          "El control hidráulico adopta un sistema de servocontrol de aceite integrado, fácil de operar, estable y fiable.",
          "Con indicación inteligente del estado de funcionamiento, compensación automática servo, posicionamiento, mantenimiento de presión y otras funciones.",
          "El espacio de prueba se puede ajustar a voluntad moviendo el haz, y se pueden probar diferentes piezas.",
          "El rango se puede cambiar automáticamente y se selecciona automáticamente en función del tama?o de carga de la muestra.",
          "Con función de retención de pico de carga máxima, protección contra sobrecarga y protección contra sobrepaso de posición, su uso es más seguro.",
          "Con almacenamiento automático de datos y cálculo e impresión automáticos de todos los resultados de las pruebas."
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
            "label": "Capacidad de carga (kN)",
            "value": "300"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "30～300"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Espacio de ensayo vertical de tracción (mm)",
            "value": "540"
          },
          {
            "label": "Espacio de prueba vertical de compresión (mm)",
            "value": "480"
          },
          {
            "label": "Espesor de sujeción de la muestra plana (mm)",
            "value": "0-15"
          },
          {
            "label": "Diámetro de sujeción de la muestra redonda (mm)",
            "value": "10-20 、20-32"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "180"
          },
          {
            "label": "Tama?o de la placa de presión superior (mm)",
            "value": "Φ180"
          },
          {
            "label": "Tama?o de la placa de presión inferior (mm)",
            "value": "Φ180"
          },
          {
            "label": "Distancia entre las dos columnas del espacio de tracción y presión (mm)",
            "value": "400"
          },
          {
            "label": "Velocidad máxima del pistón (mm/min)",
            "value": "100"
          },
          {
            "label": "Velocidad máxima del cabezal transversal (mm/min)",
            "value": "240"
          },
          {
            "label": "Potencia de los motores (kW)",
            "value": "1.2"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC380V±10%,50-60Hz"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "730×600×1840"
          },
          {
            "label": "Dimensiones del armario de control (mm)",
            "value": "700×520×1630"
          },
          {
            "label": "Peso (kg)",
            "value": "1700"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Se puede actualizar a la clase de precisión del 0,5 %.",
          "Se puede actualizar a un sistema hidráulico con servomotor."
        ]
      },
      {
        "id": "P009",
        "name": "Máquina universal de ensayo de materiales servohidráulica",
        "suffixName": "600 kN",
        "model": "WAW-600B",
        "category": "universal",
        "thumbnail": "/assets/images/WAW-600S.png",
        "description": "Este producto es adecuado para pruebas de propiedades mecánicas de metales, materiales no metálicos y compuestos, así como de componentes, sometiéndolos a ensayos de tracción, compresión, flexión, cizallamiento y otras. El producto incorpora un cilindro de montaje inferior, control por microcomputadora y servomotor electrohidráulico, ofreciendo alta precisión, funcionamiento sencillo, comodidad, gran capacidad de almacenamiento de datos y otras ventajas.",
        "features": [
          "La máquina incorpora un sensor de desplazamiento de presión de alta precisión, con una válvula digital de alta sensibilidad, velocidad de respuesta rápida y alta resolución.",
          "El control hidráulico adopta un sistema de servocontrol de aceite integrado, fácil de operar, estable y fiable.",
          "Con indicación inteligente del estado de funcionamiento, compensación automática servo, posicionamiento, mantenimiento de presión y otras funciones.",
          "El espacio de prueba se puede ajustar a voluntad moviendo el haz, y se pueden probar diferentes piezas.",
          "El rango se puede cambiar automáticamente y se selecciona automáticamente en función del tama?o de carga de la muestra.",
          "Con función de retención de pico de carga máxima, protección contra sobrecarga y protección contra sobrepaso de posición, su uso es más seguro.",
          "Con almacenamiento automático de datos y cálculo e impresión automáticos de todos los resultados de las pruebas."
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
            "label": "Capacidad de carga (kN)",
            "value": "600"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "60～600"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Espacio de ensayo vertical de tracción (mm)",
            "value": "690"
          },
          {
            "label": "Espacio de prueba vertical de compresión (mm)",
            "value": "620"
          },
          {
            "label": "Espesor de sujeción de la muestra plana (mm)",
            "value": "0-15"
          },
          {
            "label": "Diámetro de sujeción de la muestra redonda (mm)",
            "value": "13-26 、26-40"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "180"
          },
          {
            "label": "Tama?o de la placa de presión superior (mm)",
            "value": "Φ180"
          },
          {
            "label": "Tama?o de la placa de presión inferior (mm)",
            "value": "Φ180"
          },
          {
            "label": "Distancia entre las dos columnas del espacio de tracción y presión (mm)",
            "value": "400"
          },
          {
            "label": "Velocidad máxima del pistón (mm/min)",
            "value": "100"
          },
          {
            "label": "Velocidad máxima del cabezal transversal (mm/min)",
            "value": "240"
          },
          {
            "label": "Potencia de los motores (kW)",
            "value": "1.8"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC380V±10%,50-60Hz"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "890×590×2070"
          },
          {
            "label": "Dimensiones del armario de control (mm)",
            "value": "700×520×1630"
          },
          {
            "label": "Peso (kg)",
            "value": "2400"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Se puede actualizar a la clase de precisión del 0,5 %.",
          "Se puede actualizar a un sistema hidráulico con servomotor."
        ]
      },
      {
        "id": "P010",
        "name": "Máquina universal de ensayo de materiales servohidráulica",
        "suffixName": "1000 kN",
        "model": "WAW-1000B",
        "category": "universal",
        "thumbnail": "/assets/images/WAW-1000S.png",
        "description": "Este producto es adecuado para pruebas de propiedades mecánicas de metales, materiales no metálicos y compuestos, así como de componentes, sometiéndolos a ensayos de tracción, compresión, flexión, cizallamiento y otras. El producto incorpora un cilindro de montaje inferior, control por microcomputadora y servomotor electrohidráulico, ofreciendo alta precisión, funcionamiento sencillo, comodidad, gran capacidad de almacenamiento de datos y otras ventajas.",
        "features": [
          "La máquina incorpora un sensor de desplazamiento de presión de alta precisión, con una válvula digital de alta sensibilidad, velocidad de respuesta rápida y alta resolución.",
          "El control hidráulico adopta un sistema de servocontrol de aceite integrado, fácil de operar, estable y fiable.",
          "Con indicación inteligente del estado de funcionamiento, compensación automática servo, posicionamiento, mantenimiento de presión y otras funciones.",
          "El espacio de prueba se puede ajustar a voluntad moviendo el haz, y se pueden probar diferentes piezas.",
          "El rango se puede cambiar automáticamente y se selecciona automáticamente en función del tama?o de carga de la muestra.",
          "Con función de retención de pico de carga máxima, protección contra sobrecarga y protección contra sobrepaso de posición, su uso es más seguro.",
          "Con almacenamiento automático de datos y cálculo e impresión automáticos de todos los resultados de las pruebas."
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
            "label": "Capacidad de carga (kN)",
            "value": "1000"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "100～1000"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Espacio de ensayo vertical de tracción (mm)",
            "value": "690"
          },
          {
            "label": "Espacio de prueba vertical de compresión (mm)",
            "value": "620"
          },
          {
            "label": "Espesor de sujeción de la muestra plana (mm)",
            "value": "0-15"
          },
          {
            "label": "Diámetro de sujeción de la muestra redonda (mm)",
            "value": "14-32 、30-50"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "180"
          },
          {
            "label": "Tama?o de la placa de presión superior (mm)",
            "value": "Φ220"
          },
          {
            "label": "Tama?o de la placa de presión inferior (mm)",
            "value": "Φ230"
          },
          {
            "label": "Distancia entre las dos columnas del espacio de tracción y presión (mm)",
            "value": "450"
          },
          {
            "label": "Velocidad máxima del pistón (mm/min)",
            "value": "100"
          },
          {
            "label": "Velocidad máxima del cabezal transversal (mm/min)",
            "value": "240"
          },
          {
            "label": "Potencia de los motores (kW)",
            "value": "1.8"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC380V±10%,50-60Hz"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "945×635×2100"
          },
          {
            "label": "Dimensiones del armario de control (mm)",
            "value": "700×520×1630"
          },
          {
            "label": "Peso (kg)",
            "value": "2800"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Se puede actualizar a la clase de precisión del 0,5 %.",
          "Se puede actualizar a un sistema hidráulico con servomotor."
        ]
      },
      {
        "id": "P011",
        "name": "Máquina universal de ensayo de materiales servohidráulica",
        "suffixName": "2000 kN",
        "model": "WAW-2000B",
        "category": "universal",
        "thumbnail": "/assets/images/WAW-2000S.png",
        "description": "Este producto es adecuado para pruebas de propiedades mecánicas de metales, materiales no metálicos y compuestos, así como de componentes, sometiéndolos a ensayos de tracción, compresión, flexión, cizallamiento y otras. El producto incorpora un cilindro de montaje inferior, control por microcomputadora y servomotor electrohidráulico, ofreciendo alta precisión, funcionamiento sencillo, comodidad, gran capacidad de almacenamiento de datos y otras ventajas.",
        "features": [
          "La máquina incorpora un sensor de desplazamiento de presión de alta precisión, con una válvula digital de alta sensibilidad, velocidad de respuesta rápida y alta resolución.",
          "El control hidráulico adopta un sistema de servocontrol de aceite integrado, fácil de operar, estable y fiable.",
          "Con indicación inteligente del estado de funcionamiento, compensación automática servo, posicionamiento, mantenimiento de presión y otras funciones.",
          "El espacio de prueba se puede ajustar a voluntad moviendo el haz, y se pueden probar diferentes piezas.",
          "El rango se puede cambiar automáticamente y se selecciona automáticamente en función del tama?o de carga de la muestra.",
          "Con función de retención de pico de carga máxima, protección contra sobrecarga y protección contra sobrepaso de posición, su uso es más seguro.",
          "Con almacenamiento automático de datos y cálculo e impresión automáticos de todos los resultados de las pruebas."
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
            "label": "Capacidad de carga (kN)",
            "value": "2000"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "200～2000"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Espacio de ensayo vertical de tracción (mm)",
            "value": "790"
          },
          {
            "label": "Espacio de prueba vertical de compresión (mm)",
            "value": "720"
          },
          {
            "label": "Espesor de sujeción de la muestra plana (mm)",
            "value": "0-40"
          },
          {
            "label": "Diámetro de sujeción de la muestra redonda (mm)",
            "value": "20-40、40-60"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "250"
          },
          {
            "label": "Tama?o de la placa de presión superior (mm)",
            "value": "Φ220"
          },
          {
            "label": "Tama?o de la placa de presión inferior (mm)",
            "value": "Φ230"
          },
          {
            "label": "Distancia entre las dos columnas del espacio de tracción y presión (mm)",
            "value": "570"
          },
          {
            "label": "Velocidad máxima del pistón (mm/min)",
            "value": "100"
          },
          {
            "label": "Velocidad máxima del cabezal transversal (mm/min)",
            "value": "240"
          },
          {
            "label": "Potencia de los motores (kW)",
            "value": "3.55"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC380V±10%,50-60Hz"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "1200×800×2940"
          },
          {
            "label": "Dimensiones del armario de control (mm)",
            "value": "700×520×1630"
          },
          {
            "label": "Peso (kg)",
            "value": "3500"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Se puede actualizar a la clase de precisión del 0,5 %.",
          "Se puede actualizar a un sistema hidráulico con servomotor."
        ]
      },
      {
        "id": "P022",
        "name": "Máquina universal de ensayo de materiales con pantalla digital",
        "suffixName": "100 kN",
        "model": "WE-100B",
        "category": "universal",
        "thumbnail": "/assets/images/WE-1000B（出口）.png",
        "description": "La máquina de ensayo, también conocida como máquina de tracción, funciona con presión hidráulica y es principalmente adecuada para realizar ensayos de tracción, compresión y otros ensayos en materiales metálicos. Equipada con los accesorios adecuados, también se puede utilizar para realizar ensayos de tracción, compresión, flexión y cizallamiento en materiales no metálicos para evaluar sus propiedades mecánicas. Tiene una amplia gama de aplicaciones en la industria de materiales, metalurgia, metalurgia no ferrosa, materiales de construcción, industria de maquinaria, transporte, etc.",
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
            "label": "Capacidad de carga (kN)",
            "value": "100"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "10～100"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Espacio de ensayo vertical de tracción (mm)",
            "value": "480"
          },
          {
            "label": "Espacio de prueba vertical de compresión (mm)",
            "value": "480"
          },
          {
            "label": "Espesor de sujeción de la muestra plana (mm)",
            "value": "0～15"
          },
          {
            "label": "Diámetro de sujeción de la muestra redonda (mm)",
            "value": "10～20"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "120"
          },
          {
            "label": "Dimensiones de la placa de compresión (mm)",
            "value": "Φ180(Upper) Φ180(Lower)"
          },
          {
            "label": "Espacio de prueba horizontal (mm)",
            "value": "380"
          },
          {
            "label": "Velocidad máxima del pistón (mm/min)",
            "value": "100"
          },
          {
            "label": "Velocidad máxima del cabezal transversal (mm/min)",
            "value": "240"
          },
          {
            "label": "Potencia de los motores (kW)",
            "value": "1.3"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "730×600×1750"
          },
          {
            "label": "Dimensiones del armario de control (mm)",
            "value": "530×500×1270"
          },
          {
            "label": "Peso total (kg)",
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
        "name": "Máquina universal de ensayo de materiales con pantalla digital",
        "suffixName": "300 kN",
        "model": "WE-300B",
        "category": "universal",
        "thumbnail": "/assets/images/WE-1000B（出口）.png",
        "description": "La máquina de ensayo, también conocida como máquina de tracción, funciona con presión hidráulica y es principalmente adecuada para realizar ensayos de tracción, compresión y otros ensayos en materiales metálicos. Equipada con los accesorios adecuados, también se puede utilizar para realizar ensayos de tracción, compresión, flexión y cizallamiento en materiales no metálicos para evaluar sus propiedades mecánicas. Tiene una amplia gama de aplicaciones en la industria de materiales, metalurgia, metalurgia no ferrosa, materiales de construcción, industria de maquinaria, transporte, etc.",
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
            "label": "Capacidad de carga (kN)",
            "value": "300"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "30～300"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Espacio de ensayo vertical de tracción (mm)",
            "value": "540"
          },
          {
            "label": "Espacio de prueba vertical de compresión (mm)",
            "value": "480"
          },
          {
            "label": "Espesor de sujeción de la muestra plana (mm)",
            "value": "0～15"
          },
          {
            "label": "Diámetro de sujeción de la muestra redonda (mm)",
            "value": "10～20、20～32"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "180"
          },
          {
            "label": "Dimensiones de la placa de compresión (mm)",
            "value": "Φ180(Upper) Φ180(Lower)"
          },
          {
            "label": "Espacio de prueba horizontal (mm)",
            "value": "400"
          },
          {
            "label": "Velocidad máxima del pistón (mm/min)",
            "value": "100"
          },
          {
            "label": "Velocidad máxima del cabezal transversal (mm/min)",
            "value": "240"
          },
          {
            "label": "Potencia de los motores (kW)",
            "value": "1.3"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "730×600×1840"
          },
          {
            "label": "Dimensiones del armario de control (mm)",
            "value": "530×500×1270"
          },
          {
            "label": "Peso total (kg)",
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
        "name": "Máquina universal de ensayo de materiales con pantalla digital",
        "suffixName": "600 kN",
        "model": "WE-600B",
        "category": "universal",
        "thumbnail": "/assets/images/WE-1000B（出口）.png",
        "description": "La máquina de ensayo, también conocida como máquina de tracción, funciona con presión hidráulica y es principalmente adecuada para realizar ensayos de tracción, compresión y otros ensayos en materiales metálicos. Equipada con los accesorios adecuados, también se puede utilizar para realizar ensayos de tracción, compresión, flexión y cizallamiento en materiales no metálicos para evaluar sus propiedades mecánicas. Tiene una amplia gama de aplicaciones en la industria de materiales, metalurgia, metalurgia no ferrosa, materiales de construcción, industria de maquinaria, transporte, etc.",
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
            "label": "Capacidad de carga (kN)",
            "value": "600"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "60～600"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Espacio de ensayo vertical de tracción (mm)",
            "value": "690"
          },
          {
            "label": "Espacio de prueba vertical de compresión (mm)",
            "value": "620"
          },
          {
            "label": "Espesor de sujeción de la muestra plana (mm)",
            "value": "0～15"
          },
          {
            "label": "Diámetro de sujeción de la muestra redonda (mm)",
            "value": "13～26、26～40"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "180"
          },
          {
            "label": "Dimensiones de la placa de compresión (mm)",
            "value": "Φ180(Upper) Φ180(Lower)"
          },
          {
            "label": "Espacio de prueba horizontal (mm)",
            "value": "400"
          },
          {
            "label": "Velocidad máxima del pistón (mm/min)",
            "value": "100"
          },
          {
            "label": "Velocidad máxima del cabezal transversal (mm/min)",
            "value": "240"
          },
          {
            "label": "Potencia de los motores (kW)",
            "value": "1.8"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "890×590×2070"
          },
          {
            "label": "Dimensiones del armario de control (mm)",
            "value": "530×500×1270"
          },
          {
            "label": "Peso total (kg)",
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
        "name": "Máquina universal de ensayo de materiales con pantalla digital",
        "suffixName": "2000 kN",
        "model": "WE-2000B",
        "category": "universal",
        "thumbnail": "/assets/images/WE-1000B（出口）.png",
        "description": "La máquina de ensayo, también conocida como máquina de tracción, funciona con presión hidráulica y es principalmente adecuada para realizar ensayos de tracción, compresión y otros ensayos en materiales metálicos. Equipada con los accesorios adecuados, también se puede utilizar para realizar ensayos de tracción, compresión, flexión y cizallamiento en materiales no metálicos para evaluar sus propiedades mecánicas. Tiene una amplia gama de aplicaciones en la industria de materiales, metalurgia, metalurgia no ferrosa, materiales de construcción, industria de maquinaria, transporte, etc.",
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
            "label": "Capacidad de carga (kN)",
            "value": "2000"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "200～2000"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Espacio de ensayo vertical de tracción (mm)",
            "value": "790"
          },
          {
            "label": "Espacio de prueba vertical de compresión (mm)",
            "value": "720"
          },
          {
            "label": "Espesor de sujeción de la muestra plana (mm)",
            "value": "0～40"
          },
          {
            "label": "Diámetro de sujeción de la muestra redonda (mm)",
            "value": "20～40、40～60"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "250"
          },
          {
            "label": "Dimensiones de la placa de compresión (mm)",
            "value": "Φ220(Upper) Φ230(Lower)"
          },
          {
            "label": "Espacio de prueba horizontal (mm)",
            "value": "570"
          },
          {
            "label": "Velocidad máxima del pistón (mm/min)",
            "value": "100"
          },
          {
            "label": "Velocidad máxima del cabezal transversal (mm/min)",
            "value": "240"
          },
          {
            "label": "Potencia de los motores (kW)",
            "value": "1.8"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "1200×800×2940"
          },
          {
            "label": "Dimensiones del armario de control (mm)",
            "value": "530×500×1270"
          },
          {
            "label": "Peso total (kg)",
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
        "name": "Máquina electrónica universal de ensayo de materiales",
        "suffixName": "100 kN",
        "model": "WDW-100",
        "category": "tensile",
        "thumbnail": "/assets/images/WDW-50.png",
        "description": "Este producto es adecuado para probar y analizar las propiedades mecánicas de diversos metales, no metales y materiales compuestos, y puede obtener datos de prueba tales como el valor máximo de fuerza de prueba, el valor de fuerza de fractura, el límite elástico, el límite elástico superior e inferior, la resistencia a la tracción, la resistencia a la compresión, el alargamiento a la rotura, el módulo de elasticidad a la tracción y el módulo de elasticidad a la flexión de los materiales de prueba.",
        "features": [
          "Bloqueo arbitrario de altura de posición de seguridad y posición experimental.",
          "Protección automática al superar la carga máxima, doble protección mediante límite de software y límite electrónico."
        ],
        "standards": [
          "ASTM E83",
          "BS 3846",
          "ISO 9513",
          "EN 10002-4"
        ],
        "specifications": [
          {
            "label": "Capacidad de carga (kN)",
            "value": "100"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1% (can be customized to 0.5 on request)"
          },
          {
            "label": "Rango de medición de carga",
            "value": "1% to 100% FS"
          },
          {
            "label": "Espacio de prueba vertical (sin plantilla)",
            "value": "800mm"
          },
          {
            "label": "Espacio de prueba horizontal",
            "value": "400mm"
          },
          {
            "label": "Rango de velocidad del cabezal",
            "value": "0.01～500mm/min"
          },
          {
            "label": "Resolución de control de posición",
            "value": "0.025µm"
          },
          {
            "label": "Precisión en la medición del desplazamiento",
            "value": "Within ±0.5%"
          },
          {
            "label": "Rango de medición de deformación",
            "value": "0.2%～100%FS"
          },
          {
            "label": "Precisión en la medición de la deformación",
            "value": "Within ±0.5%"
          },
          {
            "label": "Rango de velocidad de prueba",
            "value": "0.5% ～ 100%FS"
          },
          {
            "label": "Prueba de velocidad y precisión",
            "value": "Within ±1% of the set value when the set value is <10%FS; Within ±0.1% of the set value when the set value is ≥10%FS"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "1000×800×2200"
          },
          {
            "label": "Fuente de alimentación",
            "value": "220V±10%, 2000W"
          },
          {
            "label": "Peso del mainframe",
            "value": "About 760kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Espacio de prueba personalizable",
          "Se puede instalar un extensómetro para una medición precisa de la deformación.",
          "Compatible con diversas células de carga para diferentes rangos de fuerza.",
          "Empu?aduras fácilmente intercambiables para diferentes pruebas"
        ]
      },
      {
        "id": "P028",
        "name": "Máquina electrónica universal de ensayo de materiales",
        "suffixName": "50 kN",
        "model": "WDW-50",
        "category": "tensile",
        "thumbnail": "/assets/images/WDW-50.png",
        "description": "Este producto es adecuado para probar y analizar las propiedades mecánicas de diversos metales, no metales y materiales compuestos, y puede obtener datos de prueba tales como el valor máximo de fuerza de prueba, el valor de fuerza de fractura, el límite elástico, el límite elástico superior e inferior, la resistencia a la tracción, la resistencia a la compresión, el alargamiento a la rotura, el módulo de elasticidad a la tracción y el módulo de elasticidad a la flexión de los materiales de prueba.",
        "features": [
          "Bloqueo arbitrario de altura de posición de seguridad y posición experimental.",
          "Protección automática al superar la carga máxima, doble protección mediante límite de software y límite electrónico."
        ],
        "standards": [
          "ASTM E83",
          "BS 3846",
          "ISO 9513",
          "EN 10002-4"
        ],
        "specifications": [
          {
            "label": "Capacidad de carga (kN)",
            "value": "50"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1% (can be customized to 0.5 on request)"
          },
          {
            "label": "Rango de medición de carga",
            "value": "1% to 100% FS"
          },
          {
            "label": "Espacio de prueba vertical (sin plantilla)",
            "value": "800mm"
          },
          {
            "label": "Espacio de prueba horizontal",
            "value": "400mm"
          },
          {
            "label": "Rango de velocidad del cabezal",
            "value": "0.01～500mm/min"
          },
          {
            "label": "Resolución de control de posición",
            "value": "0.025µm"
          },
          {
            "label": "Precisión en la medición del desplazamiento",
            "value": "Within ±0.5%"
          },
          {
            "label": "Rango de medición de deformación",
            "value": "0.2%～100%FS"
          },
          {
            "label": "Precisión en la medición de la deformación",
            "value": "Within ±0.5%"
          },
          {
            "label": "Rango de velocidad de prueba",
            "value": "0.5% ～ 100%FS"
          },
          {
            "label": "Prueba de velocidad y precisión",
            "value": "Within ±1% of the set value when the set value is <10%FS; Within ±0.1% of the set value when the set value is ≥10%FS"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "900×500×1900"
          },
          {
            "label": "Fuente de alimentación",
            "value": "220V±10%, 750W"
          },
          {
            "label": "Peso del mainframe Acerca de",
            "value": "230kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Espacio de prueba personalizable",
          "Se puede instalar un extensómetro para una medición precisa de la deformación.",
          "Compatible con diversas células de carga para diferentes rangos de fuerza.",
          "Empu?aduras fácilmente intercambiables para diferentes pruebas"
        ]
      },
      {
        "id": "P029",
        "name": "Máquina electrónica universal de ensayo de materiales",
        "suffixName": "10 kN",
        "model": "WDW-10",
        "category": "tensile",
        "thumbnail": "/assets/images/WDW-20.png",
        "description": "Este producto es adecuado para probar y analizar las propiedades mecánicas de diversos metales, no metales y materiales compuestos, y puede obtener datos de prueba tales como el valor máximo de fuerza de prueba, el valor de fuerza de fractura, el límite elástico, el límite elástico superior e inferior, la resistencia a la tracción, la resistencia a la compresión, el alargamiento a la rotura, el módulo de elasticidad a la tracción y el módulo de elasticidad a la flexión de los materiales de prueba.",
        "features": [
          "Bloqueo arbitrario de altura de posición de seguridad y posición experimental.",
          "Protección automática al superar la carga máxima, doble protección mediante límite de software y límite electrónico."
        ],
        "standards": [
          "ASTM E83",
          "BS 3846",
          "ISO 9513",
          "EN 10002-4"
        ],
        "specifications": [
          {
            "label": "Capacidad de carga (kN)",
            "value": "10"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1% (can be customized to 0.5 on request)"
          },
          {
            "label": "Rango de medición de carga",
            "value": "1% to 100% FS"
          },
          {
            "label": "Espacio de prueba vertical (sin plantilla)",
            "value": "800mm"
          },
          {
            "label": "Espacio de prueba horizontal",
            "value": "400mm"
          },
          {
            "label": "Rango de velocidad del cabezal",
            "value": "0.01～500mm/min"
          },
          {
            "label": "Resolución de control de posición",
            "value": "0.025µm"
          },
          {
            "label": "Precisión en la medición del desplazamiento",
            "value": "Within ±0.5%"
          },
          {
            "label": "Rango de medición de deformación",
            "value": "0.2%～100%FS"
          },
          {
            "label": "Precisión en la medición de la deformación",
            "value": "Within ±0.5%"
          },
          {
            "label": "Rango de velocidad de prueba",
            "value": "0.5% ～ 100%FS"
          },
          {
            "label": "Prueba de velocidad y precisión",
            "value": "Within ±1% of the set value when the set value is <10%FS; Within ±0.1% of the set value when the set value is ≥10%FS"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "800×450×1600"
          },
          {
            "label": "Fuente de alimentación",
            "value": "220V±10%, 400W"
          },
          {
            "label": "Peso del mainframe Acerca de",
            "value": "190kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Espacio de prueba personalizable",
          "Se puede instalar un extensómetro para una medición precisa de la deformación.",
          "Compatible con diversas células de carga para diferentes rangos de fuerza.",
          "Empu?aduras fácilmente intercambiables para diferentes pruebas"
        ]
      },
      {
        "id": "P030",
        "name": "Máquina electrónica universal de ensayo de materiales",
        "suffixName": "20 kN",
        "model": "WDW-20",
        "category": "tensile",
        "thumbnail": "/assets/images/WDW-20.png",
        "description": "Este producto es adecuado para probar y analizar las propiedades mecánicas de diversos metales, no metales y materiales compuestos, y puede obtener datos de prueba tales como el valor máximo de fuerza de prueba, el valor de fuerza de fractura, el límite elástico, el límite elástico superior e inferior, la resistencia a la tracción, la resistencia a la compresión, el alargamiento a la rotura, el módulo de elasticidad a la tracción y el módulo de elasticidad a la flexión de los materiales de prueba.",
        "features": [
          "Bloqueo arbitrario de altura de posición de seguridad y posición experimental.",
          "Protección automática al superar la carga máxima, doble protección mediante límite de software y límite electrónico."
        ],
        "standards": [
          "ASTM E83",
          "BS 3846",
          "ISO 9513",
          "EN 10002-4"
        ],
        "specifications": [
          {
            "label": "Capacidad de carga (kN)",
            "value": "20"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1% (can be customized to 0.5 on request)"
          },
          {
            "label": "Rango de medición de carga",
            "value": "1% to 100% FS"
          },
          {
            "label": "Espacio de prueba vertical (sin plantilla)",
            "value": "800mm"
          },
          {
            "label": "Espacio de prueba horizontal",
            "value": "400mm"
          },
          {
            "label": "Rango de velocidad del cabezal",
            "value": "0.01～500mm/min"
          },
          {
            "label": "Resolución de control de posición",
            "value": "0.025µm"
          },
          {
            "label": "Precisión en la medición del desplazamiento",
            "value": "Within ±0.5%"
          },
          {
            "label": "Rango de medición de deformación",
            "value": "0.2%～100%FS"
          },
          {
            "label": "Precisión en la medición de la deformación",
            "value": "Within ±0.5%"
          },
          {
            "label": "Rango de velocidad de prueba",
            "value": "0.5% ～ 100%FS"
          },
          {
            "label": "Prueba de velocidad y precisión",
            "value": "Within ±1% of the set value when the set value is <10%FS; Within ±0.1% of the set value when the set value is ≥10%FS"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "800×450×1600"
          },
          {
            "label": "Fuente de alimentación",
            "value": "220V±10%, 400W"
          },
          {
            "label": "Peso del mainframe Acerca de",
            "value": "190kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Espacio de prueba personalizable",
          "Se puede instalar un extensómetro para una medición precisa de la deformación.",
          "Compatible con diversas células de carga para diferentes rangos de fuerza.",
          "Empu?aduras fácilmente intercambiables para diferentes pruebas"
        ]
      },
      {
        "id": "P031",
        "name": "Máquina electrónica universal de ensayo de materiales",
        "suffixName": "5 kN",
        "model": "WDW-5",
        "category": "tensile",
        "thumbnail": "/assets/images/WDW-5.png",
        "description": "Este producto es adecuado para probar y analizar las propiedades mecánicas de diversos metales, no metales y materiales compuestos, y puede obtener datos de prueba tales como el valor máximo de fuerza de prueba, el valor de fuerza de fractura, el límite elástico, el límite elástico superior e inferior, la resistencia a la tracción, la resistencia a la compresión, el alargamiento a la rotura, el módulo de elasticidad a la tracción y el módulo de elasticidad a la flexión de los materiales de prueba.",
        "features": [
          "Bloqueo arbitrario de altura de posición de seguridad y posición experimental.",
          "Protección automática al superar la carga máxima, doble protección mediante límite de software y límite electrónico.",
          "Control por microordenador, visualización de gráficos en tiempo real, generación automática de informes."
        ],
        "standards": [
          "ASTM E83",
          "BS 3846",
          "ISO 9513",
          "EN 10002-4"
        ],
        "specifications": [
          {
            "label": "Carga máxima",
            "value": "5KN"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1% (can be customized to 0.5 on request)"
          },
          {
            "label": "Rango de medición de carga",
            "value": "1% to 100% FS"
          },
          {
            "label": "Espacio de prueba vertical (sin plantilla)",
            "value": "800mm"
          },
          {
            "label": "Espacio de prueba horizontal",
            "value": "100mm"
          },
          {
            "label": "Rango de velocidad del cabezal",
            "value": "0.01～500mm/min"
          },
          {
            "label": "Resolución de control de posición",
            "value": "0.025µm"
          },
          {
            "label": "Precisión en la medición del desplazamiento",
            "value": "Within ±1%"
          },
          {
            "label": "Rango de medición de deformación",
            "value": "0.2%～100%FS"
          },
          {
            "label": "Precisión en la medición de la deformación",
            "value": "±1% of the displayed value"
          },
          {
            "label": "Fuente de alimentación",
            "value": "220V±10%,0.4kW"
          },
          {
            "label": "Dimensiones de la máquina principal",
            "value": "600×380×1500mm"
          },
          {
            "label": "Peso aproximado",
            "value": "80kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "Espacio de prueba personalizable",
          "Se puede instalar un extensómetro para una medición precisa de la deformación.",
          "Compatible con diversas células de carga para diferentes rangos de fuerza.",
          "Empu?aduras fácilmente intercambiables para diferentes pruebas"
        ]
      },
      {
        "id": "P035",
        "name": "Máquina de ensayo de compresión controlada por servomotor",
        "suffixName": "Modelo EN de 2000 kN",
        "model": "YAW-2000H",
        "category": "concrete",
        "thumbnail": "/assets/images/YAW-2000H.png",
        "description": "Este producto es adecuado para el ensayo de resistencia a la compresión de ladrillo, piedra, cemento, hormigón y otros materiales, y también puede utilizarse para el ensayo de rendimiento a compresión de otros materiales. El producto cumple con las normas ISO, ASTM y otras.",
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
            "label": "Fuerza de prueba (kN)",
            "value": "2000"
          },
          {
            "label": "Velocidad de carga (MPa)",
            "value": "0.3～1.0,1.0 or above can be entered manually"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "200～2000"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Espacio de prueba vertical (mm)",
            "value": "320"
          },
          {
            "label": "Tama?o de la placa de compresión (mm)",
            "value": "Φ300(Upper) Φ300(Lower)"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "50"
          },
          {
            "label": "Diámetro del pistón (mm)",
            "value": "Φ250"
          },
          {
            "label": "Presión nominal de la bomba hidráulica (MPa)",
            "value": "40"
          },
          {
            "label": "Potencia total (kW)",
            "value": "1.1"
          },
          {
            "label": "Fuente de alimentación",
            "value": "AC220V±10%, 60Hz"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "580×500×1400"
          },
          {
            "label": "Dimensiones generales del armario de control (mm)",
            "value": "560×550×1310"
          },
          {
            "label": "Peso (kg)",
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
        "name": "Máquina de ensayo de compresión controlada por servomotor",
        "suffixName": "Modelo EN de 2000 kN",
        "model": "YAW-2000S",
        "category": "concrete",
        "thumbnail": "/assets/images/YAW-2000S.png",
        "description": "Este producto es adecuado para el ensayo de resistencia a la compresión de ladrillos, piedra, cemento, hormigón y otros materiales, y también puede utilizarse para el ensayo de rendimiento a la compresión de otros materiales.",
        "features": [
          "El bastidor adopta una estructura de bastidor de fundición de máquina completa;",
          "Aceite para servomotor importado;",
          "Microválvula digital de alta precisión;",
          "Aceite para servomotores importado, la temperatura del aceite no es demasiado alta;",
          "El sensor utiliza un sensor de carga de alta precisión para garantizar la exactitud de los datos. La válvula de control cuenta con una función de control de lazo cerrado de fuerza, que permite realizar cargas con tasas de carga o de tensión uniformes, con alta precisión de control y buena fiabilidad."
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
            "label": "Capacidad de carga (kN)",
            "value": "2000"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "100~2000"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±0.5%"
          },
          {
            "label": "Tasa de carga",
            "value": "0.3MPa-1.0MPa"
          },
          {
            "label": "Precisión de la tasa de carga",
            "value": "±5%"
          },
          {
            "label": "Espacio de prueba vertical (mm)",
            "value": "330"
          },
          {
            "label": "Dimensiones de la platina superior e inferior (mm)",
            "value": "Φ280(Upper) Φ320(Lower)"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "120"
          },
          {
            "label": "Diámetro del pistón (mm)",
            "value": "Φ250"
          },
          {
            "label": "Presión nominal de la bomba hidráulica (MPa)",
            "value": "40"
          },
          {
            "label": "Dimensiones",
            "value": "1100x510x1510mm"
          },
          {
            "label": "Peso",
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
        "name": "Máquina de ensayo de compresión controlada por servomotor",
        "suffixName": "Modelo EN de 3000 kN",
        "model": "YAW-3000S",
        "category": "concrete",
        "thumbnail": "/assets/images/YAW-3000S.png",
        "description": "Este producto es adecuado para el ensayo de resistencia a la compresión de ladrillos, piedra, cemento, hormigón y otros materiales, y también puede utilizarse para el ensayo de rendimiento a la compresión de otros materiales.",
        "features": [
          "El bastidor adopta una estructura de bastidor de fundición de máquina completa;",
          "Aceite para servomotor importado;",
          "Microválvula digital de alta precisión;",
          "Aceite para servomotores importado, la temperatura del aceite no es demasiado alta;",
          "El sensor utiliza un sensor de carga de alta precisión para garantizar la exactitud de los datos. La válvula de control cuenta con una función de control de lazo cerrado de fuerza, que permite realizar cargas con tasas de carga o de tensión uniformes, con alta precisión de control y buena fiabilidad."
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
            "label": "Capacidad de carga (kN)",
            "value": "3000"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "150~3000"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±0.5%"
          },
          {
            "label": "Tasa de carga",
            "value": "0.3MPa-1.0MPa"
          },
          {
            "label": "Precisión de la tasa de carga",
            "value": "±5%"
          },
          {
            "label": "Espacio de prueba vertical (mm)",
            "value": "330mm"
          },
          {
            "label": "Dimensiones de la platina superior e inferior (mm)",
            "value": "Φ280(Upper) Φ320(Lower)"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "120"
          },
          {
            "label": "Diámetro del pistón (mm)",
            "value": "Φ310"
          },
          {
            "label": "Presión nominal de la bomba hidráulica (MPa)",
            "value": "40"
          },
          {
            "label": "Dimensiones",
            "value": "1250x550x1510mm"
          },
          {
            "label": "Peso",
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
        "name": "Máquina de ensayo de compresión controlada por servomotor",
        "suffixName": "2000 kN",
        "model": "TSY-2000A",
        "category": "concrete",
        "thumbnail": "/assets/images/TSY-2000A.png",
        "description": "Este producto es adecuado para el ensayo de resistencia a la compresión de ladrillo, piedra, cemento, hormigón y otros materiales, y también puede utilizarse para el ensayo de rendimiento a compresión de otros materiales. El producto cumple con las normas ISO, ASTM y otras.",
        "features": [
          "La bomba hidráulica adopta una bomba axial de cinco pistones de ultra alta presión, que funciona sin problemas y genera poco ruido;",
          "La válvula de control adopta una válvula de microflujo digital de alta precisión con alta precisión de control;",
          "El sensor utiliza un sensor de presión, que ofrece una buena fiabilidad;",
          "Adoptar el principio de almacenamiento automático para reforzar el control de la velocidad de carga."
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
            "label": "Capacidad de carga (kN)",
            "value": "2000"
          },
          {
            "label": "Tasa de carga",
            "value": "0.3～1.0MPa,1.0 or above can be entered manually"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "200～2000"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Espacio de prueba vertical (mm)",
            "value": "320mm"
          },
          {
            "label": "Dimensiones de la platina superior e inferior (mm)",
            "value": "Φ260(Upper) Φ260(Lower)"
          },
          {
            "label": "Carrera del pistón",
            "value": "50mm"
          },
          {
            "label": "Diámetro del pistón (mm)",
            "value": "Φ250"
          },
          {
            "label": "Presión nominal de la bomba hidráulica (MPa)",
            "value": "40MPa"
          },
          {
            "label": "Potencia total",
            "value": "1.1kW"
          },
          {
            "label": "Fuente de alimentación",
            "value": "AC380V±10%, 50-60Hz"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "580×500×1400"
          },
          {
            "label": "Dimensiones del armario de control (mm)",
            "value": "560×550×1310"
          },
          {
            "label": "Peso",
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
        "name": "Máquina de ensayo de compresión controlada por servomotor",
        "suffixName": "3000 kN",
        "model": "TSY-3000A",
        "category": "concrete",
        "thumbnail": "/assets/images/TSY-3000A.png",
        "description": "Este producto es adecuado para el ensayo de resistencia a la compresión de ladrillo, piedra, cemento, hormigón y otros materiales, y también puede utilizarse para el ensayo de rendimiento a compresión de otros materiales. El producto cumple con las normas ISO, ASTM y otras.",
        "features": [
          "La bomba hidráulica adopta una bomba axial de cinco pistones de ultra alta presión, que funciona sin problemas y genera poco ruido;",
          "La válvula de control adopta una válvula de microflujo digital de alta precisión con alta precisión de control;",
          "El sensor utiliza un sensor de presión, que ofrece una buena fiabilidad;",
          "Adoptar el principio de almacenamiento automático para reforzar el control de la velocidad de carga."
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
            "label": "Capacidad de carga (kN)",
            "value": "3000"
          },
          {
            "label": "Tasa de carga",
            "value": "0.3～1.0MPa,1.0 or above can be entered manually"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "300～3000"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Espacio de prueba vertical (mm)",
            "value": "320mm"
          },
          {
            "label": "Dimensiones de la platina superior e inferior (mm)",
            "value": "Φ320(Upper) Φ320(Lower)"
          },
          {
            "label": "Carrera del pistón",
            "value": "50mm"
          },
          {
            "label": "Diámetro del pistón (mm)",
            "value": "Φ310"
          },
          {
            "label": "Presión nominal de la bomba hidráulica (MPa)",
            "value": "40"
          },
          {
            "label": "Potencia total",
            "value": "1.8kW"
          },
          {
            "label": "Fuente de alimentación",
            "value": "AC380V±10%, 50-60Hz"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "550×650×1750"
          },
          {
            "label": "Dimensiones del armario de control (mm)",
            "value": "560×550×1310"
          },
          {
            "label": "Peso",
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
        "name": "Máquina de prueba de compresión con pantalla digital",
        "suffixName": "2000 kN",
        "model": "TSY-2000B",
        "category": "concrete",
        "thumbnail": "/assets/images/TSY-2000B.png",
        "description": "Este producto es adecuado para el ensayo de resistencia a la compresión de ladrillos, piedra, cemento, hormigón y otros materiales, y también puede utilizarse para el ensayo de rendimiento a la compresión de otros materiales.",
        "features": [
          "Con función de visualización digital de carga;",
          "La función de retención de carga máxima;",
          "Función de protección de datos al apagar el equipo;",
          "La bomba hidráulica es una bomba axial de cinco pistones de ultra alta presión, accionada directamente por un motor eléctrico;",
          "La válvula de suministro de aceite cuenta con una válvula de seguridad que, en caso de sobrecarga, puede provocar un desbordamiento, lo que cumple una función de seguridad.",
          "El volante de la válvula de suministro de aceite permite ajustar la entrada de aceite al cilindro hidráulico para lograr la tasa de carga requerida."
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
            "label": "Capacidad de carga (kN)",
            "value": "2000"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "200～2000"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Espacio de prueba vertical (mm)",
            "value": "320"
          },
          {
            "label": "Dimensiones de la platina superior e inferior (mm)",
            "value": "Φ260(Upper) Φ260(Lower)"
          },
          {
            "label": "Carrera del pistón",
            "value": "50mm"
          },
          {
            "label": "Diámetro del pistón (mm)",
            "value": "Φ250"
          },
          {
            "label": "Presión nominal de la bomba hidráulica (MPa)",
            "value": "40"
          },
          {
            "label": "Potencia total",
            "value": "1.1kW"
          },
          {
            "label": "Fuente de alimentación",
            "value": "AC380V,50-60Hz"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "580×500×1400"
          },
          {
            "label": "Dimensiones del armario de control (mm)",
            "value": "510×540×1470"
          },
          {
            "label": "Peso",
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
        "name": "Máquina de prueba de compresión con pantalla digital",
        "suffixName": "3000 kN",
        "model": "TSY-3000B",
        "category": "concrete",
        "thumbnail": "/assets/images/TSY-3000B.png",
        "description": "Este producto es adecuado para el ensayo de resistencia a la compresión de ladrillos, piedra, cemento, hormigón y otros materiales, y también puede utilizarse para el ensayo de rendimiento a la compresión de otros materiales.",
        "features": [
          "Con función de visualización digital de carga;",
          "La función de retención de carga máxima;",
          "Función de protección de datos al apagar el equipo;",
          "La bomba hidráulica es una bomba axial de cinco pistones de ultra alta presión, accionada directamente por un motor eléctrico;",
          "La válvula de suministro de aceite cuenta con una válvula de seguridad que, en caso de sobrecarga, puede provocar un desbordamiento, lo que cumple una función de seguridad.",
          "El volante de la válvula de suministro de aceite permite ajustar la entrada de aceite al cilindro hidráulico para lograr la tasa de carga requerida."
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
            "label": "Capacidad de carga (kN)",
            "value": "3000"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "300～3000"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Espacio de prueba vertical (mm)",
            "value": "330"
          },
          {
            "label": "Dimensiones de la platina superior e inferior (mm)",
            "value": "Φ320(Upper) Φ320(Lower)"
          },
          {
            "label": "Carrera del pistón",
            "value": "50mm"
          },
          {
            "label": "Diámetro del pistón (mm)",
            "value": "Φ310"
          },
          {
            "label": "Presión nominal de la bomba hidráulica (MPa)",
            "value": "40"
          },
          {
            "label": "Potencia total",
            "value": "1.8kW"
          },
          {
            "label": "Fuente de alimentación",
            "value": "AC380V,50-60Hz"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "550×560×1750"
          },
          {
            "label": "Dimensiones del armario de control (mm)",
            "value": "510×540×1470"
          },
          {
            "label": "Peso",
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
        "name": "Máquina de prueba de compresión con pantalla digital",
        "suffixName": "2000 kN",
        "model": "TSY-2000",
        "category": "concrete",
        "thumbnail": "/assets/images/TSY-2000.png",
        "description": "Esta máquina de ensayo se utiliza principalmente para la prueba de resistencia a la compresión de materiales de construcción como ladrillos, mortero de cemento y hormigón, y también puede utilizarse para la prueba de rendimiento mecánico de otros materiales.",
        "features": [
          "Con función de visualización digital de carga;",
          "La función de retención de carga máxima;",
          "Función de protección de datos al apagar el equipo;",
          "La bomba hidráulica es una bomba axial de cinco pistones de ultra alta presión, accionada directamente por un motor eléctrico;",
          "La válvula de suministro de aceite cuenta con una válvula de seguridad que, en caso de sobrecarga, puede provocar un desbordamiento, lo que cumple una función de seguridad.",
          "El volante de la válvula de suministro de aceite permite ajustar la entrada de aceite al cilindro hidráulico para lograr la tasa de carga requerida."
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
            "label": "Capacidad de carga (kN)",
            "value": "2000"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "200～2000"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "50"
          },
          {
            "label": "Diámetro del pistón (mm)",
            "value": "Φ250"
          },
          {
            "label": "Presión nominal de la bomba hidráulica",
            "value": "40MPa"
          },
          {
            "label": "La distancia entre la platina superior e inferior",
            "value": "320mm"
          },
          {
            "label": "Dimensiones de la platina superior e inferior (mm)",
            "value": "Φ260(Upper) Φ260(Lower)"
          },
          {
            "label": "Potencia total",
            "value": "1.1kW"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC380V±10%, 50-60Hz"
          },
          {
            "label": "Dimensiones generales",
            "value": "920×400×1200mm"
          },
          {
            "label": "Peso",
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
        "name": "Máquina de ensayo de flexión y compresión de cemento con control servo.",
        "suffixName": "",
        "model": "YAW-300.10S",
        "category": "cement",
        "thumbnail": "/assets/images/YAW-300.10S.png",
        "description": "La máquina de ensayo de flexión y compresión de cemento YAW-300·10S, controlada por servomotor, es una prensa servo de nueva generación desarrollada y fabricada de forma independiente por Zhejiang Luda. Gracias a su sólida tecnología y capacidad de producción, nuestra empresa tuvo el honor de participar en la elaboración de nuevas normas para máquinas multifuncionales. Esta máquina de ensayo es un instrumento esencial para materiales de construcción, ingeniería de la construcción, control de calidad, ensayos metrológicos, instituciones de investigación científica y otros sectores.",
        "features": [
          "Toda la máquina adopta una encimera de tablero físico y químico, y el marco adopta un recubrimiento electrolítico estático, que es fácil de limpiar y estético;",
          "La parte antiflexión adopta un cilindro hidráulico eléctrico, que tiene alta precisión, control estable, desplazamiento exacto y valor de fuerza preciso;",
          "El sensor adopta el sensor de radio, que tiene alta precisión, velocidad estable y reciprocidad;",
          "Sistema de servomotor, silencioso en todo momento, bajo nivel de ruido, la temperatura del aceite no aumenta fácilmente, alta eficiencia y estabilidad, voltaje monofásico de 220 V, gran versatilidad, alta eficiencia y ahorro de energía;",
          "La cubierta protectora está hecha de material acrílico transparente, que es limpio y bonito, y el proceso de prueba se puede observar de principio a fin;",
          "La plantilla de compresión de cemento de 40 mm x 40 mm está fabricada con material totalmente galvanizado."
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
            "label": "Ensayo de resistencia a la compresión",
            "value": ""
          },
          {
            "label": "Capacidad de carga a compresión (kN)",
            "value": "300"
          },
          {
            "label": "Tasa de carga constante",
            "value": "0.3~9.9kN/s"
          },
          {
            "label": "Espacio entre la platina superior e inferior",
            "value": "185mm"
          },
          {
            "label": "Diámetro de la placa de compresión",
            "value": "Φ120mm"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "90"
          },
          {
            "label": "Prueba de resistencia a la flexión",
            "value": ""
          },
          {
            "label": "Capacidad de carga a flexión (kN)",
            "value": "10"
          },
          {
            "label": "Tasa de carga constante",
            "value": "0.05kN/s"
          },
          {
            "label": "Longitud del lado de la sección",
            "value": "40mm"
          },
          {
            "label": "Tramo entre soportes",
            "value": "100mm"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "70"
          },
          {
            "label": "Error relativo de indicación (precisión)",
            "value": "±0.5%"
          },
          {
            "label": "Error relativo de repetibilidad de la indicación",
            "value": "0.5%"
          },
          {
            "label": "Volver a error relativo cero",
            "value": "±0.1%"
          },
          {
            "label": "La resolución relativa del dispositivo de visualización del valor de fuerza de la máquina de ensayo.",
            "value": "0.5%"
          },
          {
            "label": "Deriva cero",
            "value": "≤±0.1%"
          },
          {
            "label": "Fuente de alimentación",
            "value": "220V(±10%),1.5kW"
          },
          {
            "label": "Dimensiones",
            "value": "1300×480×1340mm"
          },
          {
            "label": "Peso",
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
        "name": "Máquina de ensayo de compresión controlada por servomotor",
        "suffixName": "300 kN",
        "model": "YAW-300S",
        "category": "cement",
        "thumbnail": "/assets/images/YAW-300S.png",
        "description": "La máquina de ensayo de compresión de cemento servocontrolada YAW-300S es una prensa servo de nueva generación desarrollada y fabricada de forma independiente por Zhejiang Luda. Gracias a su sólida tecnología y capacidad de producción, nuestra empresa tuvo el honor de participar en la elaboración de nuevas normas para máquinas multifuncionales. Esta máquina de ensayo es un instrumento esencial para materiales de construcción, ingeniería de la construcción, control de calidad, ensayos metrológicos, instituciones de investigación científica y otros sectores.",
        "features": [
          "Se utiliza un servomotor importado para controlar el suministro de aceite;",
          "Válvula de flujo servoaccionada de alta precisión;",
          "Con la función de control de bucle cerrado de fuerza, puede lograr la carga de la tasa de tensión de carga;",
          "Puede realizar cargas a velocidad de carga constante o cargas a velocidad de tensión constante."
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
            "label": "Capacidad de carga (kN)",
            "value": "300"
          },
          {
            "label": "Tasa de carga constante",
            "value": "0.3~9.9kN"
          },
          {
            "label": "Espacio entre la platina superior e inferior",
            "value": "185mm"
          },
          {
            "label": "Diámetro de la placa de compresión",
            "value": "Φ120mm"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "90"
          },
          {
            "label": "Error relativo de indicación (precisión)",
            "value": "±0.5%"
          },
          {
            "label": "Error relativo de repetibilidad de la indicación",
            "value": "0.5%"
          },
          {
            "label": "Volver a error relativo cero",
            "value": "±0.1%"
          },
          {
            "label": "La resolución relativa del dispositivo de visualización del valor de fuerza de la máquina de ensayo.",
            "value": "0.5%"
          },
          {
            "label": "Deriva cero",
            "value": "≤±0.1%"
          },
          {
            "label": "Fuente de alimentación",
            "value": "220V (±10%),1.5kW"
          },
          {
            "label": "Dimensiones",
            "value": "1100×480×1340mm"
          },
          {
            "label": "Peso",
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
        "name": "Máquina de ensayo de compresión por flexión de cemento con control servo.",
        "suffixName": "",
        "model": "YZH-300.10",
        "category": "cement",
        "thumbnail": "/assets/images/YZH-300.10.png",
        "description": "La máquina de ensayo de flexión y compresión de cemento con servocontrol YZH-300·10 es una máquina de ensayo de presión que integra la resistencia a la flexión y a la compresión del cemento, desarrollada conjuntamente por Zhejiang Luda Machinery Instrument Co., Ltd. y la Universidad Tecnológica de Zhejiang. Este producto adopta cilindros hidráulicos dobles anti-flexión y anti-compresión para realizar el ensayo de la resistencia a la compresión y la resistencia a la flexión del cemento, respectivamente.",
        "features": [
          "Mediante el uso de microválvulas digitales de alta precisión, se puede lograr una carga a velocidad controlada;",
          "Con la función de control de bucle cerrado de fuerza, puede lograr la carga de la tasa de tensión de carga;",
          "La bomba hidráulica adopta una bomba axial de cinco pistones de ultra alta presión, que funciona sin problemas y genera poco ruido;",
          "La válvula de control adopta una microválvula digital de alta precisión con gran exactitud de control;",
          "El sensor utiliza un sensor de presión, que ofrece una buena fiabilidad;",
          "Se adopta el principio de carga automática para reforzar el control de la velocidad de carga."
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
            "label": "Ensayo de resistencia a la compresión",
            "value": ""
          },
          {
            "label": "Capacidad de carga a compresión (kN)",
            "value": "300"
          },
          {
            "label": "Tasa de carga constante",
            "value": "0.3~9.9kN/s"
          },
          {
            "label": "Espacio entre la platina superior e inferior",
            "value": "190mm"
          },
          {
            "label": "Diámetro de la placa de compresión",
            "value": "Φ120mm"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "90"
          },
          {
            "label": "Prueba de resistencia a la flexión",
            "value": ""
          },
          {
            "label": "Capacidad de carga a flexión (kN)",
            "value": "10"
          },
          {
            "label": "Tasa de carga constante",
            "value": "0.05kN/s"
          },
          {
            "label": "Longitud del lado de la sección",
            "value": "40mm"
          },
          {
            "label": "Tramo entre soportes",
            "value": "100mm"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "70"
          },
          {
            "label": "Error relativo de indicación (precisión)",
            "value": "±1.0%"
          },
          {
            "label": "Error relativo de repetibilidad de la indicación",
            "value": "1.0%"
          },
          {
            "label": "Volver a error relativo cero",
            "value": "±0.1%"
          },
          {
            "label": "La resolución relativa del dispositivo de visualización del valor de fuerza de la máquina de ensayo.",
            "value": "0.5%"
          },
          {
            "label": "Fuente de alimentación",
            "value": "380V(±10%),0.55kW"
          },
          {
            "label": "Dimensiones",
            "value": "1200×490×1350mm"
          },
          {
            "label": "Peso",
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
        "name": "Máquina de ensayo de compresión controlada por servomotor",
        "suffixName": "300 kN",
        "model": "YAW-300",
        "category": "cement",
        "thumbnail": "/assets/images/YAW-300.png",
        "description": "Este producto es adecuado para el ensayo de resistencia a la compresión de ladrillos, piedra, cemento, hormigón y otros materiales, y también puede utilizarse para el ensayo de rendimiento a la compresión de otros materiales.",
        "features": [
          "El cilindro hidráulico y el pistón de trabajo utilizan acoplamientos de precisión, con anillos de sellado compuestos integrados para lograr el mejor estado de sellado;",
          "Se utiliza una bomba de aceite de alta presión con émbolo axial, que funciona sin problemas y genera poco ruido;",
          "El sensor utiliza un sensor de presión, que es altamente fiable;",
          "La válvula de control adopta una microválvula digital de alta precisión con gran exactitud de control;",
          "Adoptar el principio de carga automática para reforzar el control de la velocidad de carga."
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
            "label": "Capacidad de carga (kN)",
            "value": "300"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "30~300"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Tasa de carga",
            "value": "0.3～9.9kN/s"
          },
          {
            "label": "La distancia entre la platina superior e inferior",
            "value": "180mm"
          },
          {
            "label": "Diámetro de la placa de compresión",
            "value": "Φ120mm"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "90"
          },
          {
            "label": "Diámetro del pistón (mm)",
            "value": "Φ140"
          },
          {
            "label": "Presión nominal de la bomba hidráulica (MPa)",
            "value": "31.5"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC380V±10%, 0.55kW"
          },
          {
            "label": "Dimensiones",
            "value": "890×600×1450mm"
          },
          {
            "label": "Peso",
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
        "name": "Máquina de prueba de compresión con pantalla digital",
        "suffixName": "300 kN",
        "model": "TSY-300",
        "category": "cement",
        "thumbnail": "/assets/images/TSY-300.png",
        "description": "Este producto es adecuado para el ensayo de resistencia a la compresión de ladrillos, piedra, cemento, hormigón y otros materiales, y también puede utilizarse para el ensayo de rendimiento a la compresión de otros materiales.",
        "features": [
          "Puede ajustar automáticamente el paralelismo de la superficie de apoyo entre la pieza de ensayo y la placa de presión, de modo que la pieza de ensayo reciba una tensión uniforme;",
          "Existe un dispositivo de sellado entre el pistón y el cilindro de aceite para evitar fugas de aceite;",
          "Equipado con una válvula de seguridad que, en caso de sobrecarga, puede provocar un desbordamiento y cumplir una función de protección.",
          "Los datos de la prueba se procesan automáticamente y se imprime el informe de la prueba."
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
            "label": "Capacidad de carga (kN)",
            "value": "300"
          },
          {
            "label": "Error relativo de indicación (precisión)",
            "value": "±1%"
          },
          {
            "label": "Presión nominal de la bomba hidráulica",
            "value": "31.5MPa"
          },
          {
            "label": "Diámetro de la placa de compresión",
            "value": "Φ140mm"
          },
          {
            "label": "Espacio de prueba vertical (mm)",
            "value": "190mm"
          },
          {
            "label": "Diámetro del pistón y carrera máxima",
            "value": "Φ140*90mm"
          },
          {
            "label": "Potencia del motor",
            "value": "0.55kW"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC380V±10%"
          },
          {
            "label": "Dimensiones",
            "value": "880×430×900mm"
          },
          {
            "label": "Peso",
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
        "name": "Máquina especial de ensayo de compresión para tapas de alcantarilla controlada por servomotor",
        "suffixName": "1000 kN",
        "model": "TSY-1000S",
        "category": "large_machine",
        "thumbnail": "/assets/images/TSY-1000S.png",
        "description": "La máquina de ensayo de presión para tapas de alcantarilla de la serie TSY es un logro científico y tecnológico fruto de la colaboración entre nuestra empresa y el Instituto de Transmisión y Control de Fluidos de la Universidad Tecnológica de Zhejiang. Esta máquina se utiliza principalmente para realizar pruebas de resistencia a la carga y deformación residual en tapas de alcantarilla, y también puede emplearse para ensayos de rendimiento mecánico de otros materiales.",
        "features": [
          "Esta máquina adopta un sistema de deformación de alta precisión y adquisición de alta resolución;",
          "El control hidráulico adopta un sistema de servocontrol de circuito de aceite integrado;",
          "Carga estable y fiable, funcionamiento inteligente;",
          "Cuenta con funciones de elevación automática, posicionamiento automático, calibración automática, fuerza y deformación iguales, compensación automática servo, posicionamiento, mantenimiento de presión, aviso inteligente del estado de funcionamiento y control mixto;",
          "Con función de protección de datos en caso de apagado;",
          "Los datos experimentales se procesan automáticamente, y el funcionamiento es cómodo y fiable;",
          "La configuración correspondiente puede seleccionarse en función de las diferentes necesidades de los clientes."
        ],
        "standards": [
          "EN 124-1"
        ],
        "specifications": [
          {
            "label": "Capacidad de carga (kN)",
            "value": "1000"
          },
          {
            "label": "Bloque de ajuste rígido",
            "value": "Φ356×40mm"
          },
          {
            "label": "Bloque de calibración",
            "value": "500×500×50mm"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "100～1000"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±0.5%"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "250"
          },
          {
            "label": "Diámetro del pistón (mm)",
            "value": "Φ210"
          },
          {
            "label": "Presión nominal de la bomba hidráulica",
            "value": "31.5MPa"
          },
          {
            "label": "Espacio de prueba",
            "value": "1200×1200×300"
          },
          {
            "label": "Fuente de alimentación",
            "value": "1.2kW"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC380V±10%"
          },
          {
            "label": "Dimensiones del mainframe",
            "value": "1400×1200×1400mm"
          },
          {
            "label": "Dimensiones del armario de control (mm)",
            "value": "1200×700×900"
          },
          {
            "label": "Peso",
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
        "name": "Máquina de prueba de carga estática para traviesas",
        "suffixName": "500 kN",
        "model": "TSY-500",
        "category": "large_machine",
        "thumbnail": "/assets/images/TSY-500轨枕.png",
        "description": "La máquina de ensayo de carga estática para traviesas es un dispositivo para realizar pruebas de resistencia a la fisuración bajo carga estática en traviesas de hormigón (traviesas tipo I, traviesas tipo II, traviesas tipo III, traviesas de horquilla, traviesas de puente, traviesas anchas, etc.).",
        "features": [
          "La medición de fuerza de esta máquina adopta un sensor de carga de alta precisión, control por programa de microcomputadora, sistema de carga hidráulica proporcional electrohidráulico y otras tecnologías;",
          "Utilice la regla de posicionamiento (suministrada por el usuario) para ajustar la posición de la traviesa de manera que el centro de carga coincida con el centro de la placa de presión;",
          "Según el procedimiento de trabajo establecido, el pistón se mueve libremente;",
          "Equipado con tres sensores de radios de alta precisión para garantizar datos exactos de tres puntos de presión separados, y equipado con luces LED especiales para la observación de grietas. Para facilitar la prueba de traviesas según estándares extranjeros, el punto de apoyo es ajustable;",
          "El proceso de carga se ajusta con el algoritmo de control PID de estructura variable, el error de control de velocidad constante es ≤5% y el error de control de mantenimiento de presión es ≤0,5%;",
          "Velocidad de carga Carga uniforme;",
          "El punto de carga estática se puede establecer de forma arbitraria y el informe de resultados se imprime automáticamente."
        ],
        "standards": [
          "EN 13230-1",
          "EN 13230-2",
          "EN 13230-3"
        ],
        "specifications": [
          {
            "label": "Valor de carga máxima bajo el riel",
            "value": "500kN"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Carga inicial después de colocar la traviesa",
            "value": "<20kN"
          },
          {
            "label": "Velocidad de carga",
            "value": "3000±300N/s"
          },
          {
            "label": "Tiempo de espera",
            "value": "180s"
          },
          {
            "label": "Carrera del pistón (mm)",
            "value": "250"
          },
          {
            "label": "Distancia de carga ajustable debajo del riel",
            "value": "600, 700, 800mm"
          },
          {
            "label": "Distancia de carga ajustable en el riel",
            "value": "600, 1500mm"
          },
          {
            "label": "Espacio de prueba vertical",
            "value": "Distance between Upper and Lower Supports :430 mm"
          },
          {
            "label": "Espacio de prueba horizontal",
            "value": "Distance between Four Columns: 820, 900mm"
          },
          {
            "label": "Dimensiones del mainframe",
            "value": "1720×990×2266mm"
          },
          {
            "label": "Carro",
            "value": "3390×700×135mm"
          },
          {
            "label": "Armario de control",
            "value": "1210×770×1020mm"
          },
          {
            "label": "Parámetros relacionados de la estación de bombeo hidráulico",
            "value": ""
          },
          {
            "label": "Presión nominal",
            "value": "High Pressure Oil Pump 31.5MPa"
          },
          {
            "label": "Desplazamiento nominal",
            "value": "High Pressure Oil Pump 25ml/rec"
          },
          {
            "label": "Potencia del motor",
            "value": "1.2kW ,Speed 980rpm"
          },
          {
            "label": "Voltaje de la fuente de alimentación",
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
        "name": "Máquina de ensayo de relajación de tracción de filamentos controlada por servomotor",
        "suffixName": "300 kN",
        "model": "LDCJ-300",
        "category": "large_machine",
        "thumbnail": "/assets/images/LDCJ-300.png",
        "description": "Este producto es adecuado para equipos de prueba destinados a medir las propiedades de relajación de materiales metálicos a temperatura ambiente.",
        "features": [
          "La máquina tiene una estructura horizontal de altura moderada y fácil manejo. El pedestal de carga es una estructura soldada de alta rigidez y peso ligero;",
          "Se adopta el gato universal de orificio pasante pretensado, que posee una gran versatilidad y es adecuado para el pretensado. Aplicable al grupo de clips de tensado Ovam, anclaje de cabeza tipo DM y anclaje de fundición en frío tipo LEM;",
          "El pistón del gato hidráulico es de doble efecto, lo que permite un retorno rápido;",
          "Mediante una bomba de alto caudal y alta presión, la velocidad de carga puede controlarse mediante una válvula manual.",
          "Dispositivo de medición y control totalmente digital, rendimiento estable, alta precisión de medición y control;",
          "Con función de borrado automático de fuerza y desplazamiento, y función de calibración automática;",
          "La resolución de la medición de fuerza es alta y no cambia durante todo el proceso, y no se divide en archivos;",
          "La máquina completa está equipada con 6 placas de soporte con orificios redondos."
        ],
        "standards": [
          "ASTM E328",
          "ISO 15630-3"
        ],
        "specifications": [
          {
            "label": "Capacidad de carga (kN)",
            "value": "300"
          },
          {
            "label": "Rango de medición de carga efectiva (kN)",
            "value": "30～300"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1%"
          },
          {
            "label": "Resolución de carga",
            "value": "1N"
          },
          {
            "label": "Precisión de la indicación de desplazamiento",
            "value": "Better than ±0.5% of indication"
          },
          {
            "label": "Velocidad de carga",
            "value": "0.01-40 mm/mincan be set arbitrarily"
          },
          {
            "label": "Carrera del tornillo",
            "value": "100mm"
          },
          {
            "label": "Espacio de prueba",
            "value": "2200mm(the maximum stretching distance  between the left and right chucks)"
          },
          {
            "label": "Fuente de alimentación",
            "value": "AC220V±10%, 2.3kW"
          },
          {
            "label": "Dimensiones",
            "value": "2250×530×1200mm"
          },
          {
            "label": "Peso",
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
        "name": "Máquina de prueba de doblado de tubos metálicos",
        "suffixName": "",
        "model": "LDGW-60C",
        "category": "large_machine",
        "thumbnail": "/assets/images/LDGW-60C.png",
        "description": "La máquina de ensayo de doblado de tubos de acero LDGW-60C se caracteriza por su estructura compacta, funcionamiento sencillo, visualización intuitiva del ángulo de doblado, fácil mantenimiento, estabilidad operativa, seguridad y bajo nivel de ruido. Es un equipo especializado para el ensayo de doblado en frío de tubos de acero. Este equipo es ideal para que las acerías y las empresas constructoras evalúen el rendimiento de doblado y el rendimiento de doblado inverso de los tubos de acero.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Diámetro exterior del tubo de acero",
            "value": "φ10.2-φ60.3mm (8 types)"
          },
          {
            "label": "Radio de curvatura del centro de la curva",
            "value": "6d"
          },
          {
            "label": "ángulo de flexión",
            "value": "Set arbitrarily within 0-90°"
          },
          {
            "label": "Resolución de ajuste de ángulo",
            "value": "1°"
          },
          {
            "label": "Precisión del control de ángulo",
            "value": "±1°"
          },
          {
            "label": "Modo de control",
            "value": "Manual control, automatic control"
          },
          {
            "label": "Velocidad de funcionamiento del disco",
            "value": "1.4r/min"
          },
          {
            "label": "Potencia del motor",
            "value": "2kW"
          },
          {
            "label": "Forma de máquina",
            "value": "1300×900×1200 (mm)"
          },
          {
            "label": "Peso de la máquina",
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
        "name": "Máquina de ensayo de doblado y redoblado de metales",
        "suffixName": "Para barras de refuerzo, láminas y tuberías metálicas",
        "model": "LDWQ-40D",
        "category": "large_machine",
        "thumbnail": "/assets/images/LDWQ-40D.png",
        "description": "La máquina de ensayo de flexión de barras de acero es un equipo especializado para ensayos de flexión en frío y flexión inversa plana de barras de acero. Se utiliza principalmente en el departamento de control de calidad de la metalurgia y la ingeniería de la construcción, y también puede emplearse en la inspección del comportamiento de flexión de materias primas de construcción y puntos de soldadura de barras de acero. Es un equipo de uso común para ensayos e investigación de rendimiento.",
        "features": [
          "Dise?o de fuselaje vertical cerrado integrado, sistema hidráulico con bomba de aceite silenciosa;",
          "Dise?o de 3 cilindros, el rodillo es accionado por 2 cilindros laterales con medición de desplazamiento;",
          "Con una cubierta protectora totalmente transparente que permite la observación desde todos los ángulos, la puerta corredera frontal de plexiglás se desliza silenciosamente;",
          "Control PLC importado, equipado con pantalla táctil de 10,1 pulgadas, con visualización de animaciones, visualización del ángulo en tiempo real, control automático del proceso de doblado y otras funciones. Interfaz de operación amigable, los pasos de prueba se han descompuesto en la interfaz de pantalla completa, siga las indicaciones para operar paso a paso, fácil de aprender;",
          "Prueba de flexión con soporte (0-180 grados), prueba de flexión inversa (flexión hacia adelante 90 grados, flexión inversa 20 grados), la flexión inversa requiere el uso de soporte de flexión adicional (opcional);",
          "Con escoria, cajón de recogida de piel de óxido de acero;",
          "Prueba con un solo clic. Tras seleccionar el tipo y diámetro de la barra de acero, la dobladora ajusta automáticamente la distancia entre apoyos y proporciona el número de núcleos de doblado. Después de la prueba de prensado, la dobladora realiza automáticamente el doblado y la presurización lateral. Al finalizar, los cilindros hidráulicos vertical y lateral se retraen automáticamente."
        ],
        "standards": [
          "EN ISO 7438",
          "EN ISO 15630-1",
          "ASTM A615",
          "ASTM A615M"
        ],
        "specifications": [
          {
            "label": "Rango de diámetro de curvatura",
            "value": "Φ6-Φ40mm"
          },
          {
            "label": "Rango de ángulo de flexión",
            "value": "Set arbitrarily within 0-180°"
          },
          {
            "label": "Carrera del cilindro",
            "value": "250mm"
          },
          {
            "label": "Velocidad de flexión transversal",
            "value": "300mm/min"
          },
          {
            "label": "Distancia entre centros de rodillos",
            "value": "＞600mm"
          },
          {
            "label": "núcleo de flexión positiva",
            "value": "Φ6、Φ8、Φ10、Φ12、Φ14、Φ16、Φ18、Φ20、Φ24、Φ32、Φ40、Φ48、Φ56、Φ64、Φ72、Φ80、Φ88、Φ100、Φ140、Φ160、Φ180、Φ200mm"
          },
          {
            "label": "núcleo de flexión inversa",
            "value": "Φ40、Φ50、Φ60、Φ70、Φ80、Φ84、Φ90、Φ100、Φ110、Φ125、Φ168、Φ192、Φ216、Φ240mm"
          },
          {
            "label": "Fuente de alimentación",
            "value": "AC380V±10%"
          },
          {
            "label": "Potencia nominal",
            "value": "3000W"
          },
          {
            "label": "Forma de máquina",
            "value": "1760×700×2160mm"
          },
          {
            "label": "Peso del equipo",
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
        "name": "Máquina de ensayo de tensión y par de apriete de pernos controlada por servomotor",
        "suffixName": "",
        "model": "LD-JZ500D",
        "category": "large_machine",
        "thumbnail": "/assets/images/LD-JZ500D.png",
        "description": "Puede detectar, mostrar e imprimir la fuerza axial y el par de apriete de pernos no estándar de 7/16 de pulgada. Se puede equipar con una llave de corte torsional especial y también puede detectar la fuerza axial (fuerza de preapriete) después de desenroscar el par de pernos de alta resistencia de tipo corte de 7/16 de pulgada (esta llave requiere un pedido especial).",
        "features": [
          "Este producto cuenta con la función de copia de seguridad y recuperación de parámetros, función de calibración automática, y la monitorización del valor máximo también se configura de acuerdo con los requisitos de detección de pernos de alta resistencia.",
          "Para satisfacer las necesidades de los usuarios, el instrumento está equipado con una interfaz de red conectada al ordenador, que permite transmitir datos al ordenador, cargarlos e imprimir el informe tras su posterior procesamiento."
        ],
        "standards": [
          "ISO 16047",
          "ASTM D5648"
        ],
        "specifications": [
          {
            "label": "Rango de medición de fuerza axial",
            "value": "30~500kN"
          },
          {
            "label": "Rango de medición de par",
            "value": "50~2000Nm"
          },
          {
            "label": "Resolución",
            "value": "±0.1kN"
          },
          {
            "label": "Error de indicación",
            "value": "±1%kN"
          },
          {
            "label": "Modo de visualización",
            "value": "Liquid crystal display"
          },
          {
            "label": "Dimensiones generales",
            "value": "1470×550×1400mm"
          },
          {
            "label": "Peso",
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
        "name": "Analizador de contenido de asfalto",
        "suffixName": "método de combustión",
        "model": "LDRS-6",
        "category": "asphalt",
        "thumbnail": "/assets/images/LDRS-6.png",
        "description": "Este producto utiliza el método de combustión para determinar el contenido de asfalto. Incorpora un sistema de medición y control de alta precisión y se utiliza con una balanza importada. Permite medir el contenido de asfalto de forma rápida, precisa, segura y fiable, y cumple con los requisitos de producción continua en masa de plantas de mezcla y supervisión e inspección de carreteras, garantizando así la calidad de la construcción vial.",
        "features": [
          "El producto incorpora un sistema de medición y control de alta precisión y se utiliza con una balanza importada. Permite medir el contenido de asfalto de forma rápida, precisa, segura y fiable, y cumple con los requisitos de producción continua en masa de las plantas de mezcla, así como con la supervisión e inspección de carreteras, garantizando así la calidad de la construcción vial."
        ],
        "standards": [
          "AASHTO T308-10",
          "ASTM D6307-10",
          "BS EN 12697-39:2012"
        ],
        "specifications": [
          {
            "label": "Tama?o de la sala de trabajo",
            "value": "360mm×400mm×300mm"
          },
          {
            "label": "Voltaje de funcionamiento del ordenador central",
            "value": "380V±10V,8000W"
          },
          {
            "label": "Voltaje de funcionamiento del instrumento",
            "value": "220V±10V (reliable grounding required)"
          },
          {
            "label": "Capacidad de equilibrio",
            "value": "10kg, division 0.1g"
          },
          {
            "label": "Temperatura máxima de funcionamiento de la cámara de combustión",
            "value": "800° C"
          },
          {
            "label": "Peso máximo de la muestra",
            "value": "4000g, recommended 1000g~ 1500g"
          },
          {
            "label": "Precisión de la prueba de contenido de asfalto",
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
        "name": "Compactadora de losas de asfalto",
        "suffixName": "",
        "model": "LDCX-1",
        "category": "asphalt",
        "thumbnail": "/assets/images/LDCX-1.png",
        "description": "Esta máquina se utiliza principalmente para el conformado por rodillos de muestras de mezclas asfálticas en ensayos de rodadura. También es adecuada para emplear el método de laminado para elaborar muestras de otras propiedades físicas y mecánicas de las mezclas asfálticas.",
        "features": [
          "Esta máquina integra maquinaria, electricidad y presión hidráulica. En comparación con productos similares, se caracteriza por su tama?o compacto, alto grado de automatización, gran funcionalidad y fácil manejo.",
          "La temperatura de laminación se puede ajustar arbitrariamente.",
          "Una vez instalado el molde de prueba en el carro, se puede centrar automáticamente.",
          "Los tiempos de desplazamiento del carro se pueden configurar de forma arbitraria y se pueden registrar en cualquier momento."
        ],
        "standards": [
          "EN 12697-33 method 5.2",
          "ASTM D8079"
        ],
        "specifications": [
          {
            "label": "Tama?o del molde",
            "value": "300×300×(30~100)mm (Can be customized upon request)"
          },
          {
            "label": "Viaje de prueba en coche",
            "value": "300mm"
          },
          {
            "label": "Valor de cambio de altura del molde de prueba",
            "value": "30~ 100mm"
          },
          {
            "label": "Radio del rodillo",
            "value": "500mm"
          },
          {
            "label": "Ancho del rodillo",
            "value": "298mm"
          },
          {
            "label": "Presión del rodillo",
            "value": "300N/cm"
          },
          {
            "label": "Dimensiones",
            "value": "620×1100×1900mm"
          },
          {
            "label": "Voltaje",
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
        "name": "Rastreador de ruedas de mezcla asfáltica en caliente",
        "suffixName": "Rueda simple",
        "model": "LDCZ-5",
        "category": "asphalt",
        "thumbnail": "/assets/images/LDCZ-5.png",
        "description": "El probador automático de deformación permanente se utiliza principalmente para medir la capacidad antideformación permanente a altas temperaturas de la mezcla asfáltica, y se emplea para la prueba de estabilidad a altas temperaturas del dise?o de la mezcla asfáltica.",
        "features": [
          "Esta máquina incorpora un probador de ahuellamiento fabricado con tecnología internacional de vanguardia, que ofrece un rendimiento fiable, alta precisión de medición y control, y un funcionamiento sencillo; además, puede utilizarse para experimentos de inmersión en agua."
        ],
        "standards": [
          "EN 12697-22",
          "BS 598:110",
          "Comparable to NF P98-251-1",
          "P98-251-4"
        ],
        "specifications": [
          {
            "label": "Velocidad de rodadura del rodillo",
            "value": "42±0.5 times/ min (one way)"
          },
          {
            "label": "Distancia de movimiento del carro de prueba",
            "value": "230±10mm"
          },
          {
            "label": "Dureza del rodillo y del caucho (dureza estándar internacional)",
            "value": "80IRHD±5IRHD(in 23℃)"
          },
          {
            "label": "Presión de contacto entre el rodillo y la matriz de prueba",
            "value": "0.7±0.03MPa (60° C), adjustable to 0.8-0.9MPa"
          },
          {
            "label": "Tama?o del molde de prueba",
            "value": "300×300×50 (standard), which can be used for rutting test on specimens with a thickness of 30-100mm(Can be customized upon request)"
          },
          {
            "label": "Rango de medición del desplazamiento",
            "value": "0-30mm"
          },
          {
            "label": "Tiempo de prueba de ahuellamiento",
            "value": "Usually 60min"
          },
          {
            "label": "El rango de control de temperatura en la incubadora (se puede ajustar arbitrariamente)",
            "value": "Room temperature 60℃, control accuracy ± 0.5℃"
          },
          {
            "label": "Dimensiones generales de toda la máquina",
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
        "name": "Ductilómetro de betún",
        "suffixName": "",
        "model": "STYD-3",
        "category": "bitumen",
        "thumbnail": "/assets/images/STYD-3.png",
        "description": "Este instrumento es adecuado para medir la elongación de petróleo viscoso, asfalto de esquisto viscoso, cera líquida, asfalto, residuo de asfalto líquido después de la destilación y residuo de evaporación de fluido de emulsión asfáltica, etc. Se utiliza ampliamente en departamentos de producción, construcción de carreteras e investigación científica.",
        "features": [
          "La caja interior de esta máquina está fabricada con acero inoxidable importado curvado, y el tanque interior está equipado con un conjunto de tubos calefactores de 3000-3500 vatios, un refrigerador de 1100 vatios y un conjunto de tubos fríos. Un motor síncrono de baja velocidad con imanes permanentes acciona la caja de engranajes. La varilla mueve la corredera, que se extiende opcionalmente a una velocidad de 50 mm/min ± 2,5 mm/min."
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
            "label": "Velocidad de extensión",
            "value": "50±2.5mm/min,10±0.5mm/min"
          },
          {
            "label": "Temperatura de prueba",
            "value": "2~50℃  (adjust by yourself according to actual needs)"
          },
          {
            "label": "Potencia calorífica",
            "value": "3~3.5kW"
          },
          {
            "label": "Potencia de refrigeración",
            "value": "1kW"
          },
          {
            "label": "Precisión del control de temperatura",
            "value": "±0.1° C"
          },
          {
            "label": "Voltaje de funcionamiento",
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
        "name": "Probador de estabilidad Marshall para asfalto",
        "suffixName": "30 kN para muestras de ?101,6 mm",
        "model": "LD-5B",
        "category": "asphalt",
        "thumbnail": "/assets/images/LD-5B.png",
        "description": "El probador automático de estabilidad de mezclas asfálticas se utiliza para medir la presión máxima y la deformación vertical de la muestra de mezcla asfáltica cuando la presión alcanza el punto de falla. Es un equipo de prueba comúnmente utilizado para el dise?o de la proporción de la mezcla asfáltica y la inspección de la calidad de la construcción de pavimentos asfálticos.",
        "features": [
          "Esta máquina incorpora un procesador ARM, un sensor de carga de alta precisión, un sensor de desplazamiento de alta precisión y una alta precisión de medición y control."
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
            "label": "Rango de carga",
            "value": "30±0.1kN"
          },
          {
            "label": "Rango de desplazamiento",
            "value": "10±0.1mm"
          },
          {
            "label": "Velocidad de carga",
            "value": "50±5mm/min"
          },
          {
            "label": "Método de carga",
            "value": "Automatic/Manual"
          },
          {
            "label": "Humedad relativa",
            "value": "≤85%RH"
          },
          {
            "label": "Fuente de alimentación en funcionamiento",
            "value": "AC220V±10%"
          },
          {
            "label": "Fuerza",
            "value": "500W"
          },
          {
            "label": "Dimensiones",
            "value": "550×350×700mm"
          },
          {
            "label": "Peso",
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
        "name": "Mezcladores planetarios de laboratorio",
        "suffixName": "20 litros",
        "model": "LDHB-20",
        "category": "asphalt",
        "thumbnail": "/assets/images/LDHB-20.png",
        "description": "La mezcladora vertical totalmente automática es una máquina mezcladora que se utiliza habitualmente en la preparación de muestras de asfalto, mezcla de arena y grava, cemento y mezcla de arena y grava.",
        "features": [
          "Esta máquina incorpora instrumentos de control inteligentes y control automático de temperatura. La temperatura del recipiente de calentamiento se puede ajustar arbitrariamente desde la temperatura ambiente hasta los 200 ℃, y el tiempo de agitación se controla mediante un temporizador que se puede configurar arbitrariamente en un rango de 1 a 999 segundos."
        ],
        "standards": [
          "EN 12697-35",
          "ASTM D6307",
          "AASHTO TP53"
        ],
        "specifications": [
          {
            "label": "Capacidad de agitación",
            "value": "20L"
          },
          {
            "label": "Rango de temperatura del recipiente de calentamiento",
            "value": "Room temperature~200 ℃ (arbitrary setting)"
          },
          {
            "label": "Precisión del control de temperatura",
            "value": "±0.5° C"
          },
          {
            "label": "Momento de agitación",
            "value": "1~999s (arbitrary setting)"
          },
          {
            "label": "Velocidad de rotación de la pala agitadora",
            "value": "75 rpm"
          },
          {
            "label": "Velocidad de revolución",
            "value": "46 rpm"
          },
          {
            "label": "Temperatura",
            "value": "-10~40° C"
          },
          {
            "label": "Humedad relativa",
            "value": "Not more than 80%"
          },
          {
            "label": "Tensión de alimentación",
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
        "name": "Analizador de contenido de cera de asfalto",
        "suffixName": "",
        "model": "LDL-2",
        "category": "bitumen",
        "thumbnail": "/assets/images/LDL-2.png",
        "description": "Este producto es adecuado para determinar el contenido de cera en el asfalto de petróleo, el contenido de cera del asfalto de petróleo producido a partir del residuo de vacío del petróleo crudo natural y el contenido de cera del asfalto de petróleo para carreteras. Este equipo es un equipo de detección de contenido de cera de asfalto de uso común en las industrias petroquímica, de la construcción y de la construcción de carreteras.",
        "features": [
          "El controlador de temperatura de esta máquina utiliza un controlador digital de alta precisión, con una clara visualización de la temperatura y una configuración sencilla de los puntos de control. El instrumento permite analizar hasta tres muestras simultáneamente, con una alta eficiencia en las pruebas."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Fuente de alimentación en funcionamiento",
            "value": "AC220V±10%"
          },
          {
            "label": "Potencia calorífica",
            "value": "1000W"
          },
          {
            "label": "Potencia de refrigeración",
            "value": "1000W"
          },
          {
            "label": "Bomba de agua de baja temperatura de circulación interna",
            "value": "DC12V, 42W"
          },
          {
            "label": "Sensor de temperatura",
            "value": "Pt100"
          },
          {
            "label": "Medio refrigerante",
            "value": "R404"
          },
          {
            "label": "Precisión del control de temperatura",
            "value": "±0.5° C"
          },
          {
            "label": "Entorno operativo",
            "value": "Ambient temperature -10° C ~+30° C,  relative temperature <85%"
          },
          {
            "label": "consumo de energía de la máquina",
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
        "name": "Horno de película delgada con estante giratorio (TFOT)",
        "suffixName": "",
        "model": "82 Type",
        "category": "bitumen",
        "thumbnail": "/assets/images/82 Type.png",
        "description": "Este producto se utiliza principalmente para pruebas de calentamiento de películas asfálticas. Está estrictamente prohibido calentar explosivos dentro de la caja para evitar explosiones.",
        "features": [
          "El controlador de temperatura de esta máquina adopta un circuito anti-saturación integral, lo que mejora enormemente el rendimiento ante las fluctuaciones de temperatura.",
          "Doble función: Una vez desmontado el banco de trabajo, puede utilizarse como caja de secado."
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
            "label": "Potencia calorífica",
            "value": "2.2kW"
          },
          {
            "label": "Entorno de uso",
            "value": "Temperature 10~40℃, relative humidity ≤80%, no vibration and no corrosive or flammable gas"
          },
          {
            "label": "Temperatura de funcionamiento",
            "value": "163±1° C, 175±1° C  (Maximum working temperature 200° C)"
          },
          {
            "label": "Voltaje",
            "value": "220V"
          },
          {
            "label": "Rango de temperatura",
            "value": "50～200℃"
          },
          {
            "label": "fluctuación de temperatura",
            "value": "±1℃"
          },
          {
            "label": "Velocidad del rack de discos",
            "value": "5.5 rpm"
          },
          {
            "label": "Diámetro del disco",
            "value": "360mm"
          },
          {
            "label": "Tama?o de estudio",
            "value": "450×450×450mm"
          },
          {
            "label": "Dimensiones",
            "value": "750×600×9200mm"
          },
          {
            "label": "Peso",
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
        "name": "Horno de película delgada rotatorio (RTFOT)",
        "suffixName": "",
        "model": "85 Type",
        "category": "bitumen",
        "thumbnail": "/assets/images/85 Type.png",
        "description": "Este instrumento es adecuado para medir la variación del rendimiento del asfalto semisólido bajo la acción del calor y el aire, y permite comprobar el comportamiento de envejecimiento del asfalto en poco tiempo.",
        "features": [
          "El controlador adopta un circuito de saturación integral, control digital de temperatura y tiempo, y el tiempo de temperatura se puede ajustar según los requisitos.",
          "En la parte trasera de la máquina se han instalado el motor síncrono de imanes permanentes y el variador de velocidad más avanzados, de modo que el plato giratorio pueda rotar de forma fiable cumpliendo con el requisito técnico de 15 revoluciones por minuto."
        ],
        "standards": [
          "EN 12607-1",
          "ASTM D2872",
          "AASHTO T240"
        ],
        "specifications": [
          {
            "label": "Cable calefactor",
            "value": "2kW"
          },
          {
            "label": "Número de cables calefactores",
            "value": "2 PCS"
          },
          {
            "label": "Temperatura de funcionamiento",
            "value": "85±0.5° C, 135±0.5° C, 163±0.5° C, 175±0.5° C"
          },
          {
            "label": "Temperatura máxima",
            "value": "200° C"
          },
          {
            "label": "Admirador",
            "value": "Squirrel cage"
          },
          {
            "label": "Velocidad del ventilador",
            "value": "1725±100r/min"
          },
          {
            "label": "Volumen de aire",
            "value": "4000±200mL/min"
          },
          {
            "label": "Diámetro de la boquilla",
            "value": "1±0.1mm"
          },
          {
            "label": "Tama?o de la botella de muestra (diámetro de la abertura × diámetro de la botella × altura total)",
            "value": "Φ31.75×Φ64×139.7 mm"
          },
          {
            "label": "Número de ladrillo rotatorio",
            "value": "15±0.2r/ min"
          },
          {
            "label": "Número de frascos de muestra que se pueden cargar",
            "value": "8 PCS"
          },
          {
            "label": "Potencia total",
            "value": "2.5kW"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC220V±10%"
          },
          {
            "label": "Tama?o de estudio",
            "value": "450×483×381mm"
          },
          {
            "label": "Dimensiones",
            "value": "630×765×920mm"
          },
          {
            "label": "Peso",
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
        "name": "Ba?o de agua con rebosadero Marshall",
        "suffixName": "temperatura ambiente ~ 60℃",
        "model": "CF-C",
        "category": "asphalt",
        "thumbnail": "/assets/images/CF-C.png",
        "description": "El tanque de rebose de temperatura constante CF-C se ha desarrollado de acuerdo con el método de ensayo de densidad de mezcla asfáltica establecido en la normativa, e incorpora funciones como el control automático de la temperatura. Este producto se utiliza ampliamente en departamentos de investigación científica, como la industria química y los ensayos de rendimiento físico.",
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
            "label": "Potencia calorífica",
            "value": "1500W"
          },
          {
            "label": "Potencia de refrigeración",
            "value": "138W"
          },
          {
            "label": "Rango de temperatura",
            "value": "Room temperature-60℃"
          },
          {
            "label": "Precisión del control de temperatura",
            "value": "±0.1℃"
          },
          {
            "label": "Voltaje",
            "value": "220V"
          },
          {
            "label": "Tama?o de estudio",
            "value": "400×400×300mm"
          },
          {
            "label": "Dimensiones",
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
        "name": "Baño de agua",
        "suffixName": "temperatura ambiente ~ 100℃",
        "model": "TC-20",
        "category": "bitumen",
        "thumbnail": "/assets/images/TC-20恒温.png",
        "description": "La máquina crea un ambiente de temperatura constante dentro de la caja mediante el control de la variación de temperatura. El ba?o de agua a temperatura constante tiene una amplia gama de aplicaciones y es adecuado para laboratorios científicos como los de biología, química, física, botánica y química.",
        "features": [
          "La carcasa de esta máquina está fabricada con chapa de acero, recubierta con pintura en aerosol resistente a altas temperaturas, y el depósito interior está hecho de acero inoxidable importado, con una mano de obra exquisita, una estructura más racional y un uso más cómodo."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Controlar la temperatura",
            "value": "Room temperature ~ 100 ℃"
          },
          {
            "label": "Potencia total del tubo calefactor eléctrico",
            "value": "2kW"
          },
          {
            "label": "Número de tubos calefactores eléctricos",
            "value": "2 PCS"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC220V±10%"
          },
          {
            "label": "Tama?o de estudio",
            "value": "600×300×210mm"
          },
          {
            "label": "Dimensiones",
            "value": "820×395×315mm"
          },
          {
            "label": "Peso",
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
        "name": "Ba?o de agua a baja temperatura",
        "suffixName": "50 L -6 ℃ ~ 60 ℃",
        "model": "TC-20",
        "category": "bitumen",
        "thumbnail": "/assets/images/TC-20低温.png",
        "description": "El ba?o termostático de baja temperatura constante es uno de los equipos más utilizados en laboratorios. Se emplea ampliamente en la industria petrolera, química, metalúrgica, médica, en pruebas de propiedades bioquímicas, en departamentos de investigación de análisis químico, en colegios y universidades, en laboratorios de fábricas y en departamentos de inspección de calidad metrológica. Además, proporciona un entorno de mantenimiento con calor y frío controlados y una temperatura uniforme y constante.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Rango de temperatura",
            "value": "-6.00~59.99℃"
          },
          {
            "label": "Fluctuación",
            "value": "±0.1°C"
          },
          {
            "label": "Volumen del tanque interior",
            "value": "50L"
          },
          {
            "label": "Tama?o del tanque de trabajo",
            "value": "550×300×300mm"
          },
          {
            "label": "Caudal de la bomba",
            "value": "13L/mm3"
          },
          {
            "label": "Potencia total",
            "value": "2.2kW"
          },
          {
            "label": "Tensión de alimentación",
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
        "name": "Ba?o de agua a baja temperatura",
        "suffixName": "15 L -6 ℃ ~ 60 ℃",
        "model": "THD-0506",
        "category": "bitumen",
        "thumbnail": "/assets/images/THD-0506.png",
        "description": "El ba?o termostático de baja temperatura constante es uno de los equipos más utilizados en laboratorios. Se emplea ampliamente en la industria petrolera, química, metalúrgica, médica, en pruebas de propiedades bioquímicas, en departamentos de investigación de análisis químico, en colegios y universidades, en laboratorios de fábricas y en departamentos de inspección de calidad metrológica. Además, proporciona un entorno de mantenimiento con calor y frío controlados y una temperatura uniforme y constante.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Rango de temperatura",
            "value": "-6.00~59.99℃"
          },
          {
            "label": "Fluctuación",
            "value": "±0.1°C"
          },
          {
            "label": "Volumen del tanque interior",
            "value": "15L"
          },
          {
            "label": "Tama?o del tanque de trabajo",
            "value": "250×200×300mm"
          },
          {
            "label": "Caudal de la bomba",
            "value": "6L/mm³"
          },
          {
            "label": "Potencia total",
            "value": "1.5kW"
          },
          {
            "label": "Tensión de alimentación",
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
        "name": "Probador automático del punto de reblandecimiento",
        "suffixName": "Probador de anillos y bolas",
        "model": "LD-2000",
        "category": "bitumen",
        "thumbnail": "/assets/images/LD-2000.png",
        "description": "Este producto es adecuado para determinar el punto de reblandecimiento del asfalto de petróleo para carreteras, asfalto de carbón, asfalto líquido de petróleo, etc., y es aplicable en general a la construcción de carreteras, puentes y otras industrias.",
        "features": [
          "La velocidad de calentamiento de la máquina está controlada por un algoritmo PID combinado con lógica difusa, y la temperatura aumenta linealmente."
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
            "label": "Medio de prueba",
            "value": "Water or glycerin"
          },
          {
            "label": "Rango de temperatura",
            "value": "0～125°C"
          },
          {
            "label": "Resolución",
            "value": "0.01"
          },
          {
            "label": "Velocidad de control de temperatura",
            "value": "After three minutes: 5℃±0.5℃/min"
          },
          {
            "label": "Precisión de la medición",
            "value": "0.5℃"
          },
          {
            "label": "Temperatura de la sala de pruebas",
            "value": "Less than 30 ° C and relatively stable, no air convection Heating rate"
          },
          {
            "label": "Método de mezcla",
            "value": "Magnetic stirring, stepless adjustable"
          },
          {
            "label": "Método de control de temperatura",
            "value": "Automatic temperature control"
          },
          {
            "label": "Potencia calorífica",
            "value": "0.7kW"
          },
          {
            "label": "Humedad relativa",
            "value": "≦85%"
          },
          {
            "label": "Peso de bola de acero",
            "value": "3.50±0.05g"
          },
          {
            "label": "Diámetro de la bola de acero",
            "value": "Φ9.53mm"
          },
          {
            "label": "Volumen del vaso de precipitados",
            "value": "1000ml"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC220V±10%"
          },
          {
            "label": "Dimensiones",
            "value": "200×260×260mm"
          },
          {
            "label": "Peso",
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
        "name": "Penetrómetro automático",
        "suffixName": "",
        "model": "IV-2000",
        "category": "bitumen",
        "thumbnail": "/assets/images/IV-2000.png",
        "description": "Este producto es adecuado para medir la penetración de asfalto de petróleo viscoso, asfalto de esquisto viscoso, asfalto de petróleo líquido, asfalto de petróleo para carreteras y asfalto modificado, destilación de asfalto de petróleo líquido o residuo de asfalto emulsionado después de la evaporación, y es generalmente adecuado para departamentos de carreteras, municipales, químicos, de investigación científica y otros que se dedican a la medición e investigación de indicadores de rendimiento del asfalto.",
        "features": [
          "Esta máquina incorpora la tecnología de ajuste fino vertical del microscopio, lo que facilita enormemente la alineación de la aguja. Está equipada con el sensor de temperatura digital más avanzado, lo que garantiza una medición de temperatura más precisa."
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
            "label": "Ajuste de temperatura",
            "value": "0-99.9℃ adjustable, display precision 0.1℃(factory setting is 25℃)"
          },
          {
            "label": "Configuración de la hora",
            "value": "0-99.9s adjustable, display precision 0.1s(factory setting is 5s)"
          },
          {
            "label": "Rango de control de temperatura",
            "value": "10-60℃,accuracy ±0.5℃"
          },
          {
            "label": "Peso total del cono",
            "value": "100±0.05g"
          },
          {
            "label": "Aguja estándar",
            "value": "25±0.05g"
          },
          {
            "label": "Contrapeso",
            "value": "50±0.05g"
          },
          {
            "label": "contenedor de temperatura constante",
            "value": "＞1.0L"
          },
          {
            "label": "Voltaje",
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
        "name": "Medidor de deformación por filtración vertical en suelos de grano grueso (tipo de pendiente)",
        "suffixName": "",
        "model": "LDSL-III",
        "category": "geotechnical",
        "thumbnail": "/assets/images/LDSL-III.png",
        "description": "El objetivo de esta prueba es determinar el coeficiente de permeabilidad de la muestra cuando el agua de filtración atraviesa el suelo de grano grueso, la pendiente crítica de las partículas finas que se pierden gradualmente con la filtración (erosión por conductos) y la pendiente de falla (flujo de suelo) cuando el cuerpo de suelo flota como un todo. Esta prueba es aplicable a muestras de suelo de grano grueso alteradas y a muestras de suelo de grano grueso inalteradas.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Especificación del tubo de ensayo",
            "value": "Φ300×600mm"
          },
          {
            "label": "Altura del tubo de ensayo",
            "value": "600mm"
          },
          {
            "label": "Altura del indicador",
            "value": "3000mm"
          },
          {
            "label": "Espaciado de los orificios de medición de presión",
            "value": "250mm"
          },
          {
            "label": "Equipo de carga",
            "value": "Leverage pressure"
          },
          {
            "label": "Cubo de suministro de agua",
            "value": "140×140×140mm"
          },
          {
            "label": "cubo para almacenar agua",
            "value": "200×400×450mm"
          },
          {
            "label": "Voltaje",
            "value": "AC 220V"
          },
          {
            "label": "Dimensión",
            "value": "1400×600×1900mm"
          },
          {
            "label": "Peso",
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
        "name": "Permeámetro de carga constante para suelos de grano grueso",
        "suffixName": "",
        "model": "LDST-300",
        "category": "geotechnical",
        "thumbnail": "/assets/images/LDST-300.png",
        "description": "El permeámetro de carga constante para suelos de grano grueso LDST-300 se utiliza para medir el coeficiente de permeabilidad de suelos de grano grueso y piedra triturada clasificada con un tama?o máximo de partícula no superior a 75 mm.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Volumen del tanque de suministro de agua",
            "value": "80L"
          },
          {
            "label": "Diámetro interior del cilindro metálico",
            "value": "300mm"
          },
          {
            "label": "Altura del cilindro metálico",
            "value": "500mm"
          },
          {
            "label": "Espesor de la pared del cilindro metálico",
            "value": "10mm"
          },
          {
            "label": "Número de tubos de medición de presión",
            "value": "5 PCS"
          },
          {
            "label": "Diámetro interior del tubo de medición de presión",
            "value": "6mm"
          },
          {
            "label": "Valor de división de la escala del tubo de medición de presión",
            "value": "1mm"
          },
          {
            "label": "Espaciado de los orificios de medición de presión",
            "value": "50mm"
          },
          {
            "label": "Diámetro del orificio de filtración",
            "value": "16mm"
          },
          {
            "label": "Diámetro interior del tubo de rebose",
            "value": "16mm"
          },
          {
            "label": "Abertura de placa permeable",
            "value": "3.5mm"
          },
          {
            "label": "Peso",
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
        "name": "Máquina de moldeo por compactación por vibración",
        "suffixName": "",
        "model": "LD-08",
        "category": "geotechnical",
        "thumbnail": "/assets/images/LD-08.png",
        "description": "Este producto se utiliza para fabricar diversas piezas de ensayo para gránulos estabilizados con aglutinante inorgánico, incluidas piezas de ensayo cilíndricas para ensayar la compresión sin confinamiento, la resistencia, la resistencia a la tracción indirecta y el módulo de resiliencia a compresión, y para ensayar probetas de viga para ensayos de coeficiente de contracción térmica, coeficiente de contracción en seco, resistencia a la flexión y módulo de resiliencia a flexión.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Potencia del motor de vibración",
            "value": "4kW"
          },
          {
            "label": "Potencia del motor de elevación",
            "value": "0.75kW"
          },
          {
            "label": "Presión estática",
            "value": "1900~3100N (recommended to 2500)"
          },
          {
            "label": "Fuerza excitante",
            "value": "Adjust from 6800 to 11000N"
          },
          {
            "label": "Frecuencia de vibración",
            "value": "28~30Hz"
          },
          {
            "label": "Formación del molde de prueba",
            "value": "3 PCS"
          },
          {
            "label": "Voltaje",
            "value": "AC380V±10%"
          },
          {
            "label": "Dimensiones",
            "value": "1820×950×2170mm"
          },
          {
            "label": "Tama?o del controlador",
            "value": "550×345×940mm"
          },
          {
            "label": "Peso",
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
        "name": "Máquina rectificadora de muestras de hormigón/roca",
        "suffixName": "",
        "model": "SHM-200",
        "category": "geotechnical",
        "thumbnail": "/assets/images/SHM-200.png",
        "description": "La máquina de molienda de doble extremo SHM-200 es el equipo principal para la elaboración de muestras estándar de sólidos no metálicos, como minerales y hormigón, para ensayos mecánicos. Esta máquina funciona junto con la perforadora y la cortadora de piedra fabricadas en nuestra planta para procesar las muestras de prueba cúbicas o cilíndricas de alta precisión que usted necesite. Este producto es adecuado para colegios y universidades, empresas de conservación de agua e hidroeléctricas, minería, transporte, construcción y otros sectores. Esta máquina de molienda de piedra se compone de una base, una mesa de trabajo, un cabezal de molienda, un sistema de transmisión de velocidad variable, un dispositivo de control eléctrico y otras partes. La máquina es fácil de operar y su alimentación automática es estable.",
        "features": [],
        "standards": [
          "ASTM D4543",
          "EN 12390-2"
        ],
        "specifications": [
          {
            "label": "Potencia del motor del banco de trabajo",
            "value": "0.55kW"
          },
          {
            "label": "Velocidad",
            "value": "1450rpm"
          },
          {
            "label": "Potencia del cabezal de molienda",
            "value": "1.1kW,2units"
          },
          {
            "label": "Velocidad",
            "value": "2750rpm"
          },
          {
            "label": "Diámetro de la muela abrasiva",
            "value": "Φ200mm"
          },
          {
            "label": "Especificaciones de la muestra rectificable (normalmente equipada de fábrica con un accesorio para rectificar de 50 a 150 mm)",
            "value": "a. Block 50×50×50~150×150×150mm; b. Cylinder 50~150mm"
          },
          {
            "label": "Precisión de la muestra",
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
        "name": "Sierra automática para roca, hormigón y mampostería",
        "suffixName": "",
        "model": "DQ-1",
        "category": "geotechnical",
        "thumbnail": "/assets/images/DQ-1.png",
        "description": "Este equipo se utiliza ampliamente en la industria petrolera, geológica, metalúrgica, del carbón, en la exploración y en el corte de materiales refractarios. Esta máquina de corte de hormigón tiene un dise?o atractivo, una estructura compacta, un alto grado de automatización, está completamente sellada, es silenciosa y fácil de usar y operar. En los últimos a?os, ha incorporado numerosas opiniones de los usuarios y ha cumplido con diversos indicadores técnicos, lo que la ha posicionado como un nuevo tipo de equipo técnico.",
        "features": [],
        "standards": [
          "ASTM D4543"
        ],
        "specifications": [
          {
            "label": "Gama de corte",
            "value": "DQ-1 double knives (blade diameter 500mm) can cut cylindrical cores with a diameter of 18mm~200mm, and original rock samples of 180mm×180mm×350mm. For refractory materials such as sandstone,high-magnesia bricks, and corundum bricks, the cutting hardness is below grade 9.The distance between the two blades is adjustable, respectively 25, 50, 75, 100, 125mm."
          },
          {
            "label": "La hoja de sierra de la máquina automática de doble cuchilla para la toma de muestras de núcleos de roca.",
            "value": "Inner diameter 5cm, Outer diameter:50cm"
          },
          {
            "label": "Diamante JRg600",
            "value": "Φ600×5×50mm"
          },
          {
            "label": "Un conjunto de accesorios",
            "value": "2cm, 3cm, 5cm each"
          },
          {
            "label": "Velocidad de la línea de corte",
            "value": "40mm/s"
          },
          {
            "label": "Potencia del motor principal",
            "value": "4kW, 1420 rpm"
          },
          {
            "label": "Potencia del motor longitudinal",
            "value": "0.75kW"
          },
          {
            "label": "Dimensiones",
            "value": "1500×830×1350mm"
          },
          {
            "label": "Cortadora de diamantes JRg60Q",
            "value": "Φ500×4.5×50mm"
          },
          {
            "label": "Peso",
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
        "name": "Instrumento de compactación eléctrica multifuncional",
        "suffixName": "",
        "model": "JZ-2D",
        "category": "geotechnical",
        "thumbnail": "/assets/images/JZ-2D（部标）.png",
        "description": "Esta máquina puede utilizarse tanto para ensayos de compactación pesada como ligera. Cuenta con un contador electrónico de alta estabilidad y control automático, lo que garantiza una gran precisión en las pruebas, un proceso de trabajo automático y un funcionamiento estable y fiable. Es fácil de usar y un instrumento de uso común en ensayos geotécnicos de carreteras.",
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
            "label": "Peso del martillo",
            "value": "Heavy compaction 4.5kg, Light compaction: 2.5kg"
          },
          {
            "label": "Martillo abajo alto",
            "value": "Heavy compaction 457mm,Light compaction: 305mm"
          },
          {
            "label": "Diámetro de la cara del martillo",
            "value": "Φ50mm"
          },
          {
            "label": "Especificación del tubo de ensayo",
            "value": "either Φ152×Φ100 or Φ152×Φ102"
          },
          {
            "label": "Velocidad del martillo",
            "value": "30times/min"
          },
          {
            "label": "Establezca el número de martillazos",
            "value": "Between 0~99 times"
          },
          {
            "label": "Parámetros del motor",
            "value": "1440r/min"
          },
          {
            "label": "Potencia del motor",
            "value": "250W"
          },
          {
            "label": "Voltaje",
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
        "name": "Máquina desmoldeadora hidráulica multifuncional",
        "suffixName": "",
        "model": "DL-200",
        "category": "geotechnical",
        "thumbnail": "/assets/images/DL-200.png",
        "description": "Este producto es especialmente adecuado para el desmoldeo de probetas de diversos instrumentos de compactación, apto para moldes de ensayo con diámetros de Ф50 mm, Ф100 mm, Ф101,6 mm, Ф150 mm, Ф152 mm y alturas de hasta 230 mm. Esta máquina se utiliza junto con el \"instrumento de compactación eléctrico multifuncional\", el \"instrumento de compactación Marshall\" y el \"instrumento de compactación manual ligero\" para desmoldar la muestra.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Fuerza de liberación máxima",
            "value": "200KN"
          },
          {
            "label": "Tasa de liberación",
            "value": "130mm/min"
          },
          {
            "label": "Altura máxima de desmoldeo",
            "value": "230mm"
          },
          {
            "label": "Voltaje/Potencia del motor",
            "value": "380V/0.75KW"
          },
          {
            "label": "Presión nominal de la bomba de aceite",
            "value": "20MPa"
          },
          {
            "label": "Velocidad nominal del motor",
            "value": "1500r/min"
          },
          {
            "label": "Dimensiones",
            "value": "480×520×1230mm"
          },
          {
            "label": "Prueba de moldeo por compresión",
            "value": "Ф150×230mm ,Ф100×180mm,Ф50×130mm"
          },
          {
            "label": "Molde de prueba para instrumentos de compactación ligeros y pesados",
            "value": "Ф152×170mm,Ф100×127mm"
          },
          {
            "label": "Molde de prueba Marshall",
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
        "name": "Máquina desmoldeadora hidráulica multifuncional",
        "suffixName": "",
        "model": "DL-300",
        "category": "geotechnical",
        "thumbnail": "/assets/images/DL-300.png",
        "description": "Este producto es especialmente adecuado para el desmoldeo de probetas de diversos instrumentos de compactación, apto para moldes de ensayo con diámetros de Ф50 mm, Ф100 mm, Ф101,6 mm, Ф150 mm, Ф152 mm y alturas de hasta 230 mm. Esta máquina se utiliza junto con el \"instrumento de compactación eléctrico multifuncional\", el \"instrumento de compactación Marshall\" y el \"instrumento de compactación manual ligero\" para desmoldar la muestra.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Fuerza de liberación máxima",
            "value": "300KN"
          },
          {
            "label": "Tasa de liberación",
            "value": "130mm/min"
          },
          {
            "label": "Altura máxima de desmoldeo",
            "value": "230mm"
          },
          {
            "label": "Voltaje/Potencia del motor",
            "value": "380V/0.75KW"
          },
          {
            "label": "Presión nominal de la bomba de aceite",
            "value": "20MPa"
          },
          {
            "label": "Velocidad nominal del motor",
            "value": "1500r/min"
          },
          {
            "label": "Dimensiones",
            "value": "480×520×1230mm"
          },
          {
            "label": "Prueba de moldeo por compresión",
            "value": "Ф150×230mm,Ф100×180mm"
          },
          {
            "label": "Molde de prueba para instrumentos de compactación ligeros y pesados",
            "value": "Ф152×170mm,Ф100×127mm"
          },
          {
            "label": "Molde de prueba Marshall",
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
        "name": "Tamizador de triple movimiento",
        "suffixName": "",
        "model": "ZBSX-92A",
        "category": "geotechnical",
        "thumbnail": "/assets/images/ZBSX-92A.png",
        "description": "La máquina es adecuada para el cribado y análisis de materiales en laboratorios de geología, metalurgia, industria química, construcción, fabricación de muelas abrasivas, cemento y otros sectores. La carga de 15 kg de árido se realiza dos veces, y el trabajo de nivelación se completa tras cinco minutos de funcionamiento en cada ciclo.",
        "features": [],
        "standards": [
          "EN 932-5",
          "ISO 3310-1"
        ],
        "specifications": [
          {
            "label": "Diámetro del tamiz",
            "value": "200/300mm"
          },
          {
            "label": "Altura de la pila de tamices",
            "value": "440mm"
          },
          {
            "label": "amplitud de vibración del asiento de la pantalla",
            "value": "8mm"
          },
          {
            "label": "Tiempos de agitación del tamiz",
            "value": "221times/min"
          },
          {
            "label": "Tiempos de shock",
            "value": "147times/min"
          },
          {
            "label": "Radio de giro",
            "value": "12.5mm"
          },
          {
            "label": "Fuente de alimentación",
            "value": "AC380V±10%,0.37kW"
          },
          {
            "label": "Revolución del motor",
            "value": "1400times/min"
          },
          {
            "label": "Dimensiones",
            "value": "600×400×800mm"
          },
          {
            "label": "Peso total",
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
        "name": "Analizador de límites combinados de líquidos y plásticos para suelos con pantalla digital",
        "suffixName": "",
        "model": "LG-100D",
        "category": "geotechnical",
        "thumbnail": "/assets/images/LG-100D.png",
        "description": "Este instrumento se utiliza para medir el límite líquido y el límite plástico del suelo, y proporciona datos fiables para la clasificación de tipos de suelo, el cálculo de la consistencia natural y el índice de plasticidad. Este producto se emplea en el dise?o y la construcción de obras viales, ferroviarias, hidráulicas y eléctricas, metalúrgicas, de construcción y otros sectores. El instrumento cuenta con dos conos estándar de 100 y 76 gramos para que el usuario elija el que mejor se adapte a sus necesidades.",
        "features": [],
        "standards": [
          "CEN ISO/TS 17892-12",
          "CEN ISO/TS 17892-06",
          "NF P94-052-1"
        ],
        "specifications": [
          {
            "label": "Alcance máximo",
            "value": "20mm"
          },
          {
            "label": "Resolución",
            "value": "0.1mm"
          },
          {
            "label": "Medición del error no lineal",
            "value": "Better than 2%"
          },
          {
            "label": "Sensibilidad de indicación de contacto",
            "value": ">10M"
          },
          {
            "label": "Peso del cono",
            "value": "100/76g (Can be customized upon request)"
          },
          {
            "label": "ángulo del cono",
            "value": "30±2° (Can be customized upon request)"
          },
          {
            "label": "Medir el tiempo",
            "value": "≈5s"
          },
          {
            "label": "Fuente de alimentación",
            "value": "AC200V±10%"
          },
          {
            "label": "Tiempo de trabajo continuo",
            "value": "8 hours"
          },
          {
            "label": "Dimensiones",
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
        "name": "Probador de equivalente de arena",
        "suffixName": "",
        "model": "SD-II",
        "category": "geotechnical",
        "thumbnail": "/assets/images/SD-II（双管）.png",
        "description": "Es adecuado para mezclas asfálticas y hormigón de cemento. Arena natural, arena artificial, gravilla, el tama?o máximo de partícula del agregado no es superior a 4,75 mm, y se mide el contenido de suelo cohesivo o impurezas contenidas en el agregado fino para evaluar la limpieza del agregado, y el equivalente de arena se representa con SE.",
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
            "label": "Voltaje",
            "value": "220V"
          },
          {
            "label": "Frecuencia de oscilación",
            "value": "175-180 times per minute"
          },
          {
            "label": "Potencia nominal",
            "value": "180W"
          },
          {
            "label": "Amplitud",
            "value": "203mm"
          },
          {
            "label": "Dimensiones",
            "value": "560×320×360mm"
          },
          {
            "label": "Pistón de contrapeso",
            "value": "1000±5g"
          },
          {
            "label": "Tubo de ensayo cilíndrico de plástico",
            "value": ""
          },
          {
            "label": "Diámetro interior",
            "value": "32±0.25mm"
          },
          {
            "label": "Altura",
            "value": "420±0.25mm"
          },
          {
            "label": "Diámetro exterior del tubo de descarga",
            "value": "6±0.25mm"
          },
          {
            "label": "Diámetro interior",
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
        "name": "Mezcladora de mortero",
        "suffixName": "",
        "model": "UJZ-15",
        "category": "cement",
        "thumbnail": "/assets/images/UJZ-15.png",
        "description": "Este producto es adecuado para la mezcla de mortero y, en general, es aplicable a empresas constructoras, universidades y centros de investigación en construcción.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Capacidad de alimentación",
            "value": "28L"
          },
          {
            "label": "Capacidad de salida",
            "value": "15L"
          },
          {
            "label": "Velocidad del tambor mezclador (en sentido antihorario)",
            "value": "60±2r/min"
          },
          {
            "label": "Velocidad de agitación de las palas (en sentido horario)",
            "value": "80±4r/min"
          },
          {
            "label": "Espacio de trabajo entre la pala mezcladora y el tambor mezclador.",
            "value": "5±0.5mm"
          },
          {
            "label": "Velocidad del motor (velocidad síncrona)",
            "value": "1440r/min"
          },
          {
            "label": "Potencia del motor",
            "value": "1.5kW"
          },
          {
            "label": "Voltaje",
            "value": "AC380V±10%, 50Hz"
          },
          {
            "label": "Dimensiones",
            "value": "800×600×900mm"
          },
          {
            "label": "Peso",
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
        "name": "Mortero permeado",
        "suffixName": "",
        "model": "SS-1.5",
        "category": "cement",
        "thumbnail": "/assets/images/SS-1.5.png",
        "description": "La impermeabilidad del mortero se refiere a su capacidad para resistir la penetración de agua u otros líquidos bajo presión. El medidor de permeabilidad de mortero SS-1.5 se puede utilizar para medir la impermeabilidad del mortero impermeable, realizar una prueba comparativa entre el mortero mezclado con un agente impermeabilizante y el mortero de referencia, y evaluar la permeabilidad al agua de otros materiales impermeables. El medidor de penetración de mortero SS-1.5, fabricado por nuestra empresa, es adecuado para la inspección, investigación y ense?anza del rendimiento antifiltración del mortero por parte de los departamentos de supervisión e inspección de calidad de ingeniería de todos los niveles, laboratorios de unidades de construcción, unidades de investigación científica y universidades.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Presión máxima de trabajo admisible",
            "value": "1.5MPa"
          },
          {
            "label": "Modo de funcionamiento",
            "value": "Automatic voltage regulation and manual voltage regulation"
          },
          {
            "label": "Número de piezas de prueba que se pueden utilizar al mismo tiempo.",
            "value": "6"
          },
          {
            "label": "El diámetro interior de la boca superior del molde de prueba",
            "value": "Φ70mm"
          },
          {
            "label": "El diámetro interior de la boca inferior del molde de prueba",
            "value": "Φ80mm"
          },
          {
            "label": "Altura del molde",
            "value": "30mm"
          },
          {
            "label": "Diámetro del émbolo de la bomba de pistón",
            "value": "Φ10mm"
          },
          {
            "label": "Carrera de bombeo del pistón",
            "value": "10mm"
          },
          {
            "label": "Frecuencia de oscilación de la bomba de émbolo",
            "value": "130 times/min"
          },
          {
            "label": "Flujo de la bomba de pistón",
            "value": "0.1L/min"
          },
          {
            "label": "Potencia del motor",
            "value": "90W"
          },
          {
            "label": "Velocidad del motor",
            "value": "1340r/min"
          },
          {
            "label": "Voltaje",
            "value": "AC380V±10%, 50Hz"
          },
          {
            "label": "Dimensiones",
            "value": "750×560×750mm"
          },
          {
            "label": "Peso",
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
        "name": "Cámaras climáticas de temperatura y humedad",
        "suffixName": "80 litros",
        "model": "LDGD-80",
        "category": "research",
        "thumbnail": "/assets/images/LDGD-80.png",
        "description": "Cámara de ensayo programable de temperatura y humedad constantes, también conocida como cámara de ensayo ambiental simulada o cámara de ensayo de humedad y calor alternantes de alta y baja temperatura. Este equipo simula un entorno de alta y baja temperatura, cálido y húmedo, y se utiliza ampliamente para determinar la adaptabilidad de productos eléctricos y electrónicos a dichos entornos (especialmente los cambios en las propiedades eléctricas y mecánicas del producto). También puede utilizarse para comprobar la resistencia de la muestra a la corrosión.",
        "features": [
          "Los componentes seleccionados para este producto son altamente fiables y de alta calidad para garantizar la fiabilidad, la estabilidad y la precisión del rendimiento del producto."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Rango de temperatura",
            "value": "-40°C~+150°C"
          },
          {
            "label": "Rango de humedad",
            "value": "20%~98%RH"
          },
          {
            "label": "Precisión en el control de temperatura y humedad",
            "value": "±1.0°C; ±2%RH"
          },
          {
            "label": "Dimensiones de la caja interior (ancho × profundidad × alto)",
            "value": "400×400×550mm"
          },
          {
            "label": "Fuente de alimentación",
            "value": "220V"
          },
          {
            "label": "Uniformidad de la temperatura y la humedad en el subsuelo",
            "value": "±2.0℃; ±3.0%RH"
          },
          {
            "label": "*Nota",
            "value": "The above performance data should be measured after 30 minutes of temperature stabilization after working."
          },
          {
            "label": "*Nota",
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
        "name": "Cámara de secado y calentamiento con convección forzada",
        "suffixName": "70 litros",
        "model": "101-1A",
        "category": "research",
        "thumbnail": "/assets/images/101-1A.png",
        "description": "La temperatura máxima de funcionamiento del horno de secado es de 250 ℃, lo que resulta adecuado para diversas muestras destinadas a horneado, secado, tratamiento térmico y otros experimentos de calentamiento, pero no se deben introducir elementos volátiles en el horno de secado para evitar explosiones.",
        "features": [
          "Este horno de secado tiene una estructura precisa, un control de temperatura sensible y es fácil de usar."
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
            "label": "Temperatura de funcionamiento",
            "value": "Room temperature~250±1℃"
          },
          {
            "label": "Potencia total",
            "value": "2.5kW"
          },
          {
            "label": "Voltaje",
            "value": "220V"
          },
          {
            "label": "Dimensiones del estudio",
            "value": "450×350×450mm"
          },
          {
            "label": "Dimensiones generales",
            "value": "750×500×720mm"
          },
          {
            "label": "Peso",
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
        "name": "Cámara de secado y calentamiento con convección forzada",
        "suffixName": "135 litros",
        "model": "101-2A",
        "category": "research",
        "thumbnail": "/assets/images/101-2A.png",
        "description": "La temperatura máxima de funcionamiento del horno de secado es de 250 ℃, lo que resulta adecuado para diversas muestras destinadas a horneado, secado, tratamiento térmico y otros experimentos de calentamiento, pero no se deben introducir elementos volátiles en el horno de secado para evitar explosiones.",
        "features": [
          "Este horno de secado tiene una estructura precisa, un control de temperatura sensible y es fácil de usar."
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
            "label": "Temperatura de funcionamiento",
            "value": "Room temperature~250±1℃"
          },
          {
            "label": "Potencia total",
            "value": "3.2kW"
          },
          {
            "label": "Voltaje",
            "value": "220V"
          },
          {
            "label": "Dimensiones del estudio",
            "value": "550×450×550mm"
          },
          {
            "label": "Dimensiones generales",
            "value": "850×570×810mm"
          },
          {
            "label": "Peso",
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
        "name": "Cámara de secado y calentamiento con convección forzada",
        "suffixName": "225 litros",
        "model": "101-3A",
        "category": "research",
        "thumbnail": "/assets/images/101-3A.png",
        "description": "La temperatura máxima de funcionamiento del horno de secado es de 250 ℃, lo que resulta adecuado para diversas muestras destinadas a horneado, secado, tratamiento térmico y otros experimentos de calentamiento, pero no se deben introducir elementos volátiles en el horno de secado para evitar explosiones.",
        "features": [
          "Este horno de secado tiene una estructura precisa, un control de temperatura sensible y es fácil de usar."
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
            "label": "Temperatura de funcionamiento",
            "value": "Room temperature~250±1℃"
          },
          {
            "label": "Potencia total",
            "value": "6kW"
          },
          {
            "label": "Voltaje",
            "value": "220V"
          },
          {
            "label": "Dimensiones del estudio",
            "value": "600×500×750mm"
          },
          {
            "label": "Dimensiones generales",
            "value": "970×650×1020mm"
          },
          {
            "label": "Peso",
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
        "name": "Cámara de secado y calentamiento con convección forzada",
        "suffixName": "640 litros",
        "model": "101-4A",
        "category": "research",
        "thumbnail": "/assets/images/101-4A.png",
        "description": "La temperatura máxima de funcionamiento del horno de secado es de 250 ℃, lo que resulta adecuado para diversas muestras destinadas a horneado, secado, tratamiento térmico y otros experimentos de calentamiento, pero no se deben introducir elementos volátiles en el horno de secado para evitar explosiones.",
        "features": [
          "Este horno de secado tiene una estructura precisa, un control de temperatura sensible y es fácil de usar."
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
            "label": "Temperatura de funcionamiento",
            "value": "Room temperature~250±1℃"
          },
          {
            "label": "Potencia total",
            "value": "6kW"
          },
          {
            "label": "Voltaje",
            "value": "380V with zero wire"
          },
          {
            "label": "Dimensiones del estudio",
            "value": "800×800×1000mm"
          },
          {
            "label": "Dimensiones generales",
            "value": "1170×950×1310mm"
          },
          {
            "label": "Peso",
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
        "name": "Cámara de secado y calentamiento con convección forzada",
        "suffixName": "1200 litros",
        "model": "101-5A",
        "category": "research",
        "thumbnail": "/assets/images/101-5A.png",
        "description": "La temperatura máxima de funcionamiento del horno de secado es de 250 ℃, lo que resulta adecuado para diversas muestras destinadas a horneado, secado, tratamiento térmico y otros experimentos de calentamiento, pero no se deben introducir elementos volátiles en el horno de secado para evitar explosiones.",
        "features": [
          "Este horno de secado tiene una estructura precisa, un control de temperatura sensible y es fácil de usar."
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
            "label": "Temperatura de funcionamiento",
            "value": "Room temperature~250±1℃"
          },
          {
            "label": "Potencia total",
            "value": "12kW"
          },
          {
            "label": "Voltaje",
            "value": "380V with zero wire"
          },
          {
            "label": "Dimensiones del estudio",
            "value": "1000×1000×1200mm"
          },
          {
            "label": "Dimensiones generales",
            "value": "1370×1150×1500mm"
          },
          {
            "label": "Peso",
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
        "name": "Horno de mufla",
        "suffixName": "5,4 L Máx. 1600 ℃",
        "model": "SX2-8-16",
        "category": "research",
        "thumbnail": "/assets/images/SX2-8-16.png",
        "description": "Este horno de resistencia es de funcionamiento periódico, con varillas de silicio-molibdeno como elementos calefactores, y su temperatura nominal es de 1600 °C. Se utiliza para calentamiento a altas temperaturas, como en procesos de sinterización, disolución y análisis de metales y cerámicas en laboratorios, empresas industriales y mineras, y centros de investigación científica. Este horno de resistencia requiere un controlador de temperatura KSY y un termopar doble de platino-rodio para medir, indicar y controlar automáticamente la temperatura del horno eléctrico.",
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
            "label": "Potencia nominal",
            "value": "8kW"
          },
          {
            "label": "Tensión nominal",
            "value": "220V"
          },
          {
            "label": "Temperatura nominal",
            "value": "1600℃"
          },
          {
            "label": "Tiempo de aumento de temperatura del horno vacío",
            "value": "≤220min"
          },
          {
            "label": "Tama?o de estudio",
            "value": "150×300×120mm"
          },
          {
            "label": "Dimensiones generales",
            "value": "820×670×780mm"
          },
          {
            "label": "Peso",
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
        "name": "Horno de mufla",
        "suffixName": "12 L Máx. 1600 ℃",
        "model": "SX2-12-16",
        "category": "research",
        "thumbnail": "/assets/images/SX2-12-16.png",
        "description": "Este horno de resistencia es de funcionamiento periódico, con varillas de silicio-molibdeno como elementos calefactores, y su temperatura nominal es de 1600 °C. Se utiliza para calentamiento a altas temperaturas, como en procesos de sinterización, disolución y análisis de metales y cerámicas en laboratorios, empresas industriales y mineras, y centros de investigación científica. Este horno de resistencia requiere un controlador de temperatura KSY y un termopar doble de platino-rodio para medir, indicar y controlar automáticamente la temperatura del horno eléctrico.",
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
            "label": "Potencia nominal",
            "value": "12kW"
          },
          {
            "label": "Tensión nominal",
            "value": "380V"
          },
          {
            "label": "Temperatura nominal",
            "value": "1600℃"
          },
          {
            "label": "Tiempo de aumento de temperatura del horno vacío",
            "value": "≤250min"
          },
          {
            "label": "Tama?o de estudio",
            "value": "200×400×160mm"
          },
          {
            "label": "Dimensiones generales",
            "value": "905×730×835mm"
          },
          {
            "label": "Peso",
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
        "name": "Horno de mufla",
        "suffixName": "1,9 L Máx. 1000 ℃",
        "model": "SX2-2.5-10",
        "category": "research",
        "thumbnail": "/assets/images/SX2-2.5-10.png",
        "description": "Esta serie de hornos de resistencia es de tipo cíclico y está dise?ada para laboratorios, empresas industriales y mineras, centros de investigación científica y otras unidades para el análisis y la determinación de elementos, así como para el temple, recocido, revenido y otros tratamientos térmicos generales de acero. Además, su horno de resistencia de caja de alta temperatura, con una temperatura nominal de 1300 ℃, puede utilizarse para el tratamiento térmico de aceros aleados y para el calentamiento a alta temperatura de sinterización, disolución y análisis de metales.",
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
            "label": "Potencia nominal",
            "value": "2.5kW"
          },
          {
            "label": "Tensión nominal",
            "value": "220V"
          },
          {
            "label": "Temperatura nominal",
            "value": "1000℃"
          },
          {
            "label": "Tama?o de estudio",
            "value": "120×200×80mm"
          },
          {
            "label": "Dimensiones generales",
            "value": "380×380×420mm"
          },
          {
            "label": "Peso",
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
        "name": "Horno de mufla",
        "suffixName": "7,2 L Máx. 1000 ℃",
        "model": "SX2-4-10",
        "category": "research",
        "thumbnail": "/assets/images/SX2-4-10.png",
        "description": "Esta serie de hornos de resistencia es de tipo cíclico y está dise?ada para laboratorios, empresas industriales y mineras, centros de investigación científica y otras unidades para el análisis y la determinación de elementos, así como para el temple, recocido, revenido y otros tratamientos térmicos generales de acero. Además, su horno de resistencia de caja de alta temperatura, con una temperatura nominal de 1300 ℃, puede utilizarse para el tratamiento térmico de aceros aleados y para el calentamiento a alta temperatura de sinterización, disolución y análisis de metales.",
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
            "label": "Potencia nominal",
            "value": "4kW"
          },
          {
            "label": "Tensión nominal",
            "value": "220V"
          },
          {
            "label": "Temperatura nominal",
            "value": "1000℃"
          },
          {
            "label": "Tama?o de estudio",
            "value": "200×300×120mm"
          },
          {
            "label": "Dimensiones generales",
            "value": "490×490×540mm"
          },
          {
            "label": "Peso",
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
        "name": "Horno de mufla",
        "suffixName": "16 L Máx. 1000 ℃",
        "model": "SX2-8-10",
        "category": "research",
        "thumbnail": "/assets/images/SX2-8-10.png",
        "description": "Esta serie de hornos de resistencia es de tipo cíclico y está dise?ada para laboratorios, empresas industriales y mineras, centros de investigación científica y otras unidades para el análisis y la determinación de elementos, así como para el temple, recocido, revenido y otros tratamientos térmicos generales de acero. Además, su horno de resistencia de caja de alta temperatura, con una temperatura nominal de 1300 ℃, puede utilizarse para el tratamiento térmico de aceros aleados y para el calentamiento a alta temperatura de sinterización, disolución y análisis de metales.",
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
            "label": "Potencia nominal",
            "value": "8kW"
          },
          {
            "label": "Tensión nominal",
            "value": "380V"
          },
          {
            "label": "Temperatura nominal",
            "value": "1000℃"
          },
          {
            "label": "Tama?o de estudio",
            "value": "250×400×160mm"
          },
          {
            "label": "Dimensiones generales",
            "value": "610×540×550mm"
          },
          {
            "label": "Peso",
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
        "name": "Horno de mufla",
        "suffixName": "30 L Máx. 1000 ℃",
        "model": "SX2-12-10",
        "category": "research",
        "thumbnail": "/assets/images/SX2-12-10.png",
        "description": "Esta serie de hornos de resistencia es de tipo cíclico y está dise?ada para laboratorios, empresas industriales y mineras, centros de investigación científica y otras unidades para el análisis y la determinación de elementos, así como para el temple, recocido, revenido y otros tratamientos térmicos generales de acero. Además, su horno de resistencia de caja de alta temperatura, con una temperatura nominal de 1300 ℃, puede utilizarse para el tratamiento térmico de aceros aleados y para el calentamiento a alta temperatura de sinterización, disolución y análisis de metales.",
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
            "label": "Potencia nominal",
            "value": "12kW"
          },
          {
            "label": "Tensión nominal",
            "value": "380V"
          },
          {
            "label": "Temperatura nominal",
            "value": "1000℃"
          },
          {
            "label": "Tama?o de estudio",
            "value": "300×500×200mm"
          },
          {
            "label": "Dimensiones generales",
            "value": "710×610×560mm"
          },
          {
            "label": "Peso",
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
        "name": "Cámara horizontal de baja temperatura",
        "suffixName": "208 L -25 ℃",
        "model": "DW-25",
        "category": "research",
        "thumbnail": "/assets/images/DW-25（卧式）.png",
        "description": "La cámara de pruebas de baja temperatura horizontal de la serie DW utiliza un compresor de marca reconocida, revestimiento de acero inoxidable y una capa aislante de espuma fabricada con materias primas importadas. Ofrece un excelente aislamiento térmico, ahorro de energía y un dise?o con cinco conductos de evaporación para una temperatura uniforme y la prevención de fugas. Este producto se utiliza ampliamente en la construcción, la medicina, la electrónica, la investigación científica y otros sectores para realizar pruebas de alta y baja temperatura, así como pruebas de envejecimiento.",
        "features": [
          "Este producto tiene una alta eficiencia de refrigeración y un bajo nivel de ruido."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Rango de control de temperatura",
            "value": "-25℃ ~ room temperature"
          },
          {
            "label": "Potencia del compresor",
            "value": "200W"
          },
          {
            "label": "Voltaje",
            "value": "220V"
          },
          {
            "label": "Dimensiones de la cámara de trabajo",
            "value": "800×400×650mm"
          },
          {
            "label": "Dimensión",
            "value": "940×550×850mm"
          },
          {
            "label": "Peso",
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
        "name": "Cámara horizontal de baja temperatura",
        "suffixName": "213 L -40 ℃",
        "model": "DW-40",
        "category": "research",
        "thumbnail": "/assets/images/DW-40（卧式）.png",
        "description": "La cámara de pruebas de baja temperatura horizontal de la serie DW utiliza un compresor de marca reconocida, revestimiento de acero inoxidable y una capa aislante de espuma fabricada con materias primas importadas. Ofrece un excelente aislamiento térmico, ahorro de energía y un dise?o con cinco conductos de evaporación para una temperatura uniforme y la prevención de fugas. Este producto se utiliza ampliamente en la construcción, la medicina, la electrónica, la investigación científica y otros sectores para realizar pruebas de alta y baja temperatura, así como pruebas de envejecimiento.",
        "features": [
          "Este producto tiene una alta eficiencia de refrigeración y un bajo nivel de ruido."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Rango de control de temperatura",
            "value": "-40℃ ~ room temperature"
          },
          {
            "label": "Potencia del compresor",
            "value": "230W"
          },
          {
            "label": "Voltaje",
            "value": "220V"
          },
          {
            "label": "Dimensiones de la cámara de trabajo",
            "value": "880×405×600mm"
          },
          {
            "label": "Dimensión",
            "value": "1020×560×800mm"
          },
          {
            "label": "Peso",
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
        "name": "Cámara horizontal de baja temperatura",
        "suffixName": "195 L -60 ℃",
        "model": "DW-60",
        "category": "research",
        "thumbnail": "/assets/images/DW-60（卧式）.png",
        "description": "La cámara de pruebas de baja temperatura horizontal de la serie DW utiliza un compresor de marca reconocida, revestimiento de acero inoxidable y una capa aislante de espuma fabricada con materias primas importadas. Ofrece un excelente aislamiento térmico, ahorro de energía y un dise?o con cinco conductos de evaporación para una temperatura uniforme y la prevención de fugas. Este producto se utiliza ampliamente en la construcción, la medicina, la electrónica, la investigación científica y otros sectores para realizar pruebas de alta y baja temperatura, así como pruebas de envejecimiento.",
        "features": [
          "Este producto tiene una alta eficiencia de refrigeración y un bajo nivel de ruido."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Rango de control de temperatura",
            "value": "-60℃ ~ room temperature"
          },
          {
            "label": "Potencia del compresor",
            "value": "250W"
          },
          {
            "label": "Voltaje",
            "value": "220V"
          },
          {
            "label": "Dimensiones de la cámara de trabajo",
            "value": "600×500×650mm"
          },
          {
            "label": "Dimensión",
            "value": "750×650×850mm"
          },
          {
            "label": "Peso",
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
        "name": "Cámara vertical de baja temperatura",
        "suffixName": "165 L -40 ℃",
        "model": "DW-40",
        "category": "research",
        "thumbnail": "/assets/images/DW-40（立式）.png",
        "description": "La cámara de pruebas de alta y baja temperatura DW-40 utiliza un compresor de la marca estadounidense Danfoss y un revestimiento de acero inoxidable. La capa aislante, fabricada con espuma de materias primas importadas, ofrece un excelente aislamiento térmico y ahorro de energía. Su dise?o de cinco conductos de evaporación garantiza una temperatura uniforme y evita fugas. Este producto se utiliza ampliamente en los sectores de materiales de construcción, medicina, electrónica, investigación científica y otros para realizar pruebas de alta y baja temperatura y ensayos de envejecimiento.",
        "features": [
          "La estructura general es robusta, tiene una forma atractiva y una buena resistencia a la corrosión;",
          "El medidor de temperatura y humedad adopta un sistema de ajuste y visualización con doble pantalla digital, que ofrece las ventajas de alta resolución, intuición, fácil ajuste y alta precisión de control."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Rango de control de temperatura",
            "value": "-40℃～room temperature"
          },
          {
            "label": "Potencia del compresor",
            "value": "2000W"
          },
          {
            "label": "Voltaje",
            "value": "AC220V±10%"
          },
          {
            "label": "Tama?o de estudio",
            "value": "500×550×600mm"
          },
          {
            "label": "Dimensión",
            "value": "820×780×1650mm"
          },
          {
            "label": "Peso",
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
        "name": "Cámara de prueba de calor húmedo",
        "suffixName": "",
        "model": "HBY-1",
        "category": "research",
        "thumbnail": "/assets/images/HBY-1.png",
        "description": "La cámara de pruebas de calor y humedad simula principalmente los cambios de temperatura y humedad del entorno climático para observar el estado de almacenamiento y funcionamiento fiable de los productos en ambientes de alta y baja temperatura, secos y húmedos. Es utilizada principalmente por unidades de investigación científica y unidades de ensayo.",
        "features": [
          "La estructura general es robusta, tiene una forma atractiva y ofrece buena resistencia a la corrosión.",
          "El medidor de temperatura y humedad adopta un sistema de ajuste y visualización con doble pantalla digital, que ofrece las ventajas de alta resolución, intuición, fácil ajuste y alta precisión de control."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Voltaje",
            "value": "AC220±10%"
          },
          {
            "label": "Potencia calorífica",
            "value": "500W"
          },
          {
            "label": "Potencia de refrigeración",
            "value": "138W"
          },
          {
            "label": "Controlar la temperatura",
            "value": "20～60±2℃"
          },
          {
            "label": "Humedad",
            "value": "45～80±5%RH"
          },
          {
            "label": "Tama?o de la cámara de trabajo",
            "value": "600×500×600mm"
          },
          {
            "label": "Dimensión",
            "value": "700×650×1500mm"
          },
          {
            "label": "Peso",
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
        "name": "Cámara de prueba de envejecimiento",
        "suffixName": "",
        "model": "401A",
        "category": "research",
        "thumbnail": "/assets/images/401A.png",
        "description": "Este producto es adecuado para unidades de investigación científica y fábricas para pruebas de envejecimiento de materiales plásticos (caucho, plástico), aislamiento eléctrico y otros materiales.",
        "features": [
          "Control preciso de la temperatura y buena uniformidad de la misma.",
          "Amplio espacio útil y rendimiento estable."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Controlar la temperatura",
            "value": "Room temperature ～200℃"
          },
          {
            "label": "Precisión del controlador de temperatura",
            "value": "±1℃"
          },
          {
            "label": "Velocidad del plato giratorio",
            "value": "11～12r/min"
          },
          {
            "label": "Potencia calorífica",
            "value": "2200W"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC220V±10%"
          },
          {
            "label": "Tama?o de la cámara de trabajo",
            "value": "450×450×500mm"
          },
          {
            "label": "Dimensiones generales",
            "value": "780×660×1160mm"
          },
          {
            "label": "Peso",
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
        "name": "Cámara de congelación y descongelación rápida de hormigón",
        "suffixName": "28 PIEZAS",
        "model": "TDRF-1",
        "category": "concrete",
        "thumbnail": "/assets/images/TDRF-1（连体）.png",
        "description": "Nuestra empresa es la unidad de redacción de estándares del Departamento de Materiales de Construcción de la cámara de congelación-descongelación rápida de hormigón TDRF (dispositivo), y participó en la formulación del estándar de aparatos para la prueba de resistencia a la congelación-descongelación del hormigón de la Academia Nacional de Materiales de Construcción. Este producto es adecuado para pruebas de congelación-descongelación en hormigón, ladrillos, ladrillos cerámicos y otros materiales de construcción.",
        "features": [],
        "standards": [
          "ASTM C666",
          "AASHTO T161",
          "PROCEDURE A"
        ],
        "specifications": [
          {
            "label": "Método de enfriamiento del condensador",
            "value": "Air-cooling"
          },
          {
            "label": "Número de piezas de prueba",
            "value": "28 PCS"
          },
          {
            "label": "Tama?o de la muestra",
            "value": "100×100×400mm,the temperature measuring parts are of the same size, and there are temperature measuring holes in the middle."
          },
          {
            "label": "Tiempo de congelación final/temperatura central de la pieza de prueba",
            "value": "1.5～2.5h/-17±2℃（New standard -18±2℃）"
          },
          {
            "label": "Tiempo de finalización de la fusión/temperatura central de la pieza de prueba",
            "value": "1.0～2.0h/8±2℃（New standard 5±2℃）"
          },
          {
            "label": "Ciclo de congelación-descongelación",
            "value": "2.5～4h,the melting time is not less than 1/4 freeze-thaw cycle."
          },
          {
            "label": "La diferencia de temperatura entre el centro y la superficie de la muestra.",
            "value": "＜28℃"
          },
          {
            "label": "Número de ciclos",
            "value": "The standard is 300 times, and the number of cycles can be adjusted."
          },
          {
            "label": "Registrador de temperatura",
            "value": "LCD touch screen controller"
          },
          {
            "label": "Medio de ciclo de congelación-descongelación",
            "value": "-45°C antifreeze (1:1 mixed with water)"
          },
          {
            "label": "Cantidad de material del ciclo de congelación-descongelación cargado",
            "value": "90kg"
          },
          {
            "label": "Compresor del refrigerador",
            "value": "Complete inlet closure 8.5HP"
          },
          {
            "label": "Tama?o del barril de la muestra",
            "value": "115×115×490mm"
          },
          {
            "label": "Potencia calorífica",
            "value": "9kW"
          },
          {
            "label": "Potencia máxima de funcionamiento",
            "value": "11kW"
          },
          {
            "label": "Voltaje",
            "value": "AC380V±10%"
          },
          {
            "label": "Dimensiones generales",
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
        "name": "Cámara de congelación y descongelación rápida de hormigón",
        "suffixName": "16 PIEZAS",
        "model": "TDRF-2",
        "category": "concrete",
        "thumbnail": "/assets/images/TDRF-2（连体）.png",
        "description": "Nuestra empresa es la unidad de redacción de estándares del Departamento de Materiales de Construcción de la cámara de congelación-descongelación rápida de hormigón TDRF (dispositivo), y participó en la formulación del estándar de aparatos para la prueba de resistencia a la congelación-descongelación del hormigón de la Academia Nacional de Materiales de Construcción. Este producto es adecuado para pruebas de congelación-descongelación en hormigón, ladrillos, ladrillos cerámicos y otros materiales de construcción.",
        "features": [],
        "standards": [
          "ASTM C666",
          "AASHTO T161",
          "PROCEDURE A"
        ],
        "specifications": [
          {
            "label": "Método de enfriamiento del condensador",
            "value": "Air-cooling"
          },
          {
            "label": "Número de piezas de prueba",
            "value": "16 PCS"
          },
          {
            "label": "Tama?o de la muestra",
            "value": "100×100×400mm,the temperature measuring parts are of the same size, and there are temperature measuring holes in the middle."
          },
          {
            "label": "Tiempo de congelación final/temperatura central de la pieza de prueba",
            "value": "1.5～2.5h/-17±2℃（New standard -18±2℃）"
          },
          {
            "label": "Tiempo de finalización de la fusión/temperatura central de la pieza de prueba",
            "value": "1.0～2.0h/8±2℃（New standard 5±2℃）"
          },
          {
            "label": "Ciclo de congelación-descongelación",
            "value": "2.5～4h,the melting time is not less than 1/4 freeze-thaw cycle."
          },
          {
            "label": "La diferencia de temperatura entre el centro y la superficie de la muestra.",
            "value": "＜28℃"
          },
          {
            "label": "Número de ciclos",
            "value": "The standard is 300 times, and the number of cycles can be adjusted."
          },
          {
            "label": "Registrador de temperatura",
            "value": "LCD touch screen controller"
          },
          {
            "label": "Medio de ciclo de congelación-descongelación",
            "value": "-45°C antifreeze (1:1 mixed with water)"
          },
          {
            "label": "Cantidad de material del ciclo de congelación-descongelación cargado",
            "value": "60kg"
          },
          {
            "label": "Compresor del refrigerador",
            "value": "Complete inlet closure 5HP"
          },
          {
            "label": "Tama?o del barril de la muestra",
            "value": "115×115×490mm"
          },
          {
            "label": "Potencia calorífica",
            "value": "6kW"
          },
          {
            "label": "Potencia máxima de funcionamiento",
            "value": "8kW"
          },
          {
            "label": "Voltaje",
            "value": "AC380V±10%"
          },
          {
            "label": "Dimensiones generales",
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
        "name": "Cámara de congelación y descongelación rápida de hormigón",
        "suffixName": "10 unidades",
        "model": "TDRF-3",
        "category": "concrete",
        "thumbnail": "/assets/images/TDRF-3（连体）.png",
        "description": "Nuestra empresa es la unidad de redacción de estándares del Departamento de Materiales de Construcción de la cámara de congelación-descongelación rápida de hormigón TDRF (dispositivo), y participó en la formulación del estándar de aparatos para la prueba de resistencia a la congelación-descongelación del hormigón de la Academia Nacional de Materiales de Construcción. Este producto es adecuado para pruebas de congelación-descongelación en hormigón, ladrillos, ladrillos cerámicos y otros materiales de construcción.",
        "features": [],
        "standards": [
          "ASTM C666",
          "AASHTO T161",
          "PROCEDURE A"
        ],
        "specifications": [
          {
            "label": "Método de enfriamiento del condensador",
            "value": "Air-cooling"
          },
          {
            "label": "Número de piezas de prueba",
            "value": "10 PCS"
          },
          {
            "label": "Tama?o de la muestra",
            "value": "100×100×400mm,the temperature measuring parts are of the same size, and there are temperature measuring holes in the middle."
          },
          {
            "label": "Tiempo de congelación final/temperatura central de la pieza de prueba",
            "value": "1.5～2.5h/-17±2℃（New standard -18±2℃）"
          },
          {
            "label": "Tiempo de finalización de la fusión/temperatura central de la pieza de prueba",
            "value": "1.0～2.0h/8±2℃（New standard 5±2℃）"
          },
          {
            "label": "Ciclo de congelación-descongelación",
            "value": "2.5～4h,the melting time is not less than 1/4 freeze-thaw cycle."
          },
          {
            "label": "La diferencia de temperatura entre el centro y la superficie de la muestra.",
            "value": "＜28℃"
          },
          {
            "label": "Número de ciclos",
            "value": "The standard is 300 times, and the number of cycles can be adjusted."
          },
          {
            "label": "Registrador de temperatura",
            "value": "LCD touch screen controller"
          },
          {
            "label": "Medio de ciclo de congelación-descongelación",
            "value": "-45°C antifreeze (1:1 mixed with water)"
          },
          {
            "label": "Cantidad de material del ciclo de congelación-descongelación cargado",
            "value": "30kg"
          },
          {
            "label": "Compresor del refrigerador",
            "value": "Complete inlet closure 3HP"
          },
          {
            "label": "Tama?o del barril de la muestra",
            "value": "115×115×490mm"
          },
          {
            "label": "Potencia calorífica",
            "value": "4.5kW"
          },
          {
            "label": "Potencia máxima de funcionamiento",
            "value": "6kW"
          },
          {
            "label": "Voltaje",
            "value": "AC380V±10%"
          },
          {
            "label": "Dimensiones generales",
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
        "name": "Ensayo de carbonatación del hormigón en cámara",
        "suffixName": "",
        "model": "CCB-70A",
        "category": "concrete",
        "thumbnail": "/assets/images/CCB-70A.png",
        "description": "Nuestra empresa participó en el dise?o de la cámara de ensayo de carbonatación de hormigón CCB-70A, designada por el Departamento de Materiales de Construcción. Este equipo es un aparato especial para el ensayo de carbonatación de hormigones.",
        "features": [],
        "standards": [
          "ISO 1920-12"
        ],
        "specifications": [
          {
            "label": "Control de temperatura",
            "value": "20±2℃(adjust)"
          },
          {
            "label": "Precisión en el control de temperatura",
            "value": "0.5℃"
          },
          {
            "label": "Control de humedad",
            "value": "70±5%RH (40~70 adjust)"
          },
          {
            "label": "concentración de CO2",
            "value": "20±3% (0~60,0~100 adjust,two ranges available)"
          },
          {
            "label": "resolución de concentración de CO2",
            "value": "±1%"
          },
          {
            "label": "uniformidad de la concentración de CO2",
            "value": "≦2%"
          },
          {
            "label": "precisión de la concentración de CO2",
            "value": "1%"
          },
          {
            "label": "Potencia calorífica",
            "value": "600W"
          },
          {
            "label": "Potencia de refrigeración/deshumidificación",
            "value": "240W"
          },
          {
            "label": "Poder de humidificación",
            "value": "1500W"
          },
          {
            "label": "Voltaje",
            "value": "AC220V±10%"
          },
          {
            "label": "Tama?o de estudio",
            "value": "620×550×1230mm"
          },
          {
            "label": "Dimensiones generales",
            "value": "1100×710×1630mm"
          },
          {
            "label": "Pesar",
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
        "name": "Tanque de curado acelerado de hormigón",
        "suffixName": "",
        "model": "LDZY-400",
        "category": "concrete",
        "thumbnail": "/assets/images/LDZY-400.png",
        "description": "Este producto es un equipo común para la prueba de curado con vapor de muestras de hormigón. El equipo está fabricado en acero inoxidable por dentro y por fuera, cuenta con una pantalla táctil para su funcionamiento y control automático, lo que hace que el proceso de prueba sea sencillo y práctico.",
        "features": [],
        "standards": [
          "ASTM C684 Method C"
        ],
        "specifications": [
          {
            "label": "Tama?o de la muestra con molde",
            "value": "195×195×175mm"
          },
          {
            "label": "Diámetro interior de la caja",
            "value": "1000×750×640mm"
          },
          {
            "label": "Dimensiones generales",
            "value": "1560×850×900mm"
          },
          {
            "label": "Número de grupos de especímenes",
            "value": "8 groups (24 pieces in total)"
          },
          {
            "label": "Tasa de aumento de temperatura",
            "value": "≦15℃/h"
          },
          {
            "label": "Potencia calorífica",
            "value": "4.0kW (new heating tube)"
          },
          {
            "label": "Potencia de refrigeración",
            "value": "0.5kW"
          },
          {
            "label": "Voltaje",
            "value": "AC220V±10%"
          },
          {
            "label": "Frecuencia",
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
        "name": "Cámara de prueba de agregados alcalinos",
        "suffixName": "Método de barras de mortero y método acelerado de barras de mortero",
        "model": "JKS",
        "category": "concrete",
        "thumbnail": "/assets/images/JKS.png",
        "description": "La cámara de ensayo de agregados alcalinos está dise?ada y fabricada según los requisitos de la norma nacional para el ensayo de durabilidad a largo plazo del hormigón. Es adecuada para el control de temperatura y tiempo en el ensayo de expansión de agregados de arena. El revestimiento interior y la plataforma están fabricados en acero inoxidable. Es idónea para realizar ensayos de reacción álcali-agregado para evaluar la durabilidad a largo plazo del hormigón en unidades de construcción, unidades de ingeniería de puentes de carreteras y departamentos de investigación e inspección de calidad relacionados.",
        "features": [],
        "standards": [
          "ASTM C1260",
          "ASTM C1567"
        ],
        "specifications": [
          {
            "label": "Control de temperatura",
            "value": "Room temperature ~100℃(adjust)"
          },
          {
            "label": "Precisión en el control de temperatura",
            "value": "±0.2℃"
          },
          {
            "label": "Rango de tiempo de control",
            "value": "1~999min（99.9 days）"
          },
          {
            "label": "Frecuencia",
            "value": "50-60Hz"
          },
          {
            "label": "Precisión del tiempo de control",
            "value": "±1min"
          },
          {
            "label": "Potencia calorífica",
            "value": "6kW"
          },
          {
            "label": "Potencia de la bomba de agua",
            "value": "90W"
          },
          {
            "label": "Voltaje",
            "value": "AC380V±10%"
          },
          {
            "label": "Tama?o de estudio",
            "value": "650×550×600 (clear height 450mm)"
          },
          {
            "label": "Dimensiones generales",
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
        "name": "Aparato de impermeabilidad del hormigón",
        "suffixName": "",
        "model": "HP-4.0",
        "category": "concrete",
        "thumbnail": "/assets/images/HP-4.0.png",
        "description": "El instrumento de impermeabilidad del hormigón con regulación automática de presión HP-4.0 se utiliza para medir la impermeabilidad del hormigón en empresas constructoras, instituciones de investigación científica, departamentos de dise?o y otras unidades dedicadas a la medición e investigación experimental de la impermeabilidad del hormigón. También se puede utilizar para la medición de la permeabilidad de los materiales de construcción en el control de calidad.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Presión de trabajo",
            "value": "4MPa"
          },
          {
            "label": "Modo de funcionamiento",
            "value": "Automatic pressurization"
          },
          {
            "label": "Número de muestras de prueba",
            "value": "6 PCS"
          },
          {
            "label": "Diámetro interior de la abertura superior del molde de prueba",
            "value": "Φ175mm"
          },
          {
            "label": "Diámetro interior de la parte inferior del molde de prueba",
            "value": "Φ185mm"
          },
          {
            "label": "Altura del molde de prueba",
            "value": "160mm"
          },
          {
            "label": "Potencia del motor",
            "value": "80W"
          },
          {
            "label": "Velocidad del motor",
            "value": "136r/min"
          },
          {
            "label": "Diámetro del émbolo de la bomba de émbolo",
            "value": "Φ10mm"
          },
          {
            "label": "Frecuencia de oscilación de la bomba de émbolo",
            "value": "136 times/min"
          },
          {
            "label": "Flujo de la bomba de pistón",
            "value": "0.11L/min"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC380V±10%"
          },
          {
            "label": "Dimensiones",
            "value": "1090×710×920mm"
          },
          {
            "label": "Peso",
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
        "name": "Cámara de curado rápido",
        "suffixName": "",
        "model": "A-Type",
        "category": "concrete",
        "thumbnail": "/assets/images/A-Type.png",
        "description": "Este producto es adecuado para la cocción rápida y el mantenimiento de unidades de hormigón y construcción, como plantas de cemento, materiales de construcción y unidades de construcción. El revestimiento y el estante están hechos de material de acero inoxidable.",
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
            "label": "Voltaje",
            "value": "220V"
          },
          {
            "label": "Temperatura interna",
            "value": "Room temperature to 100℃,users need to control freely"
          },
          {
            "label": "Potencia de calentamiento del tubo calefactor eléctrico",
            "value": "2000W(3 PCS)"
          },
          {
            "label": "Tama?o de estudio",
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
        "name": "Medidor de aire de hormigón de lectura directa",
        "suffixName": "",
        "model": "CA-3",
        "category": "concrete",
        "thumbnail": "/assets/images/CA-3.png",
        "description": "Este producto se utiliza principalmente para medir el contenido de aire en hormigón recién mezclado. Es apto para hormigón ordinario, hormigón fluido y hormigón seco duro, pero no para hormigón con ingredientes ligeros. El producto está dise?ado según la norma ANS1/ASTM C231-78, que cumple con los estándares internacionales. El valor del contenido de aire se puede leer directamente en el disco graduado, sin necesidad de realizar conversiones de curvas.",
        "features": [],
        "standards": [
          "EN 12350-7",
          "ASTM C231 type B",
          "AASHTO T152",
          "DIN 1048"
        ],
        "specifications": [
          {
            "label": "tama?o de partícula de la mezcla de hormigón",
            "value": "≤40mm"
          },
          {
            "label": "Determinación del contenido máximo de aire",
            "value": "8%"
          },
          {
            "label": "Tama?o de la maceta de medición de hormigón",
            "value": "Volume 7L, inner diameter to height ratio is 1:1"
          },
          {
            "label": "Rango de valores de presión del instrumento de visualización",
            "value": "0.25MPa"
          },
          {
            "label": "Valor divisor del instrumento de visualización",
            "value": "0.005MPa"
          },
          {
            "label": "La cantidad de contenido de aire",
            "value": "8%"
          },
          {
            "label": "La lectura mínima",
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
        "name": "Penetrómetro Acme",
        "suffixName": "",
        "model": "HG-1000",
        "category": "concrete",
        "thumbnail": "/assets/images/HG-1000.png",
        "description": "Este producto es ideal para probar el tiempo de fraguado de diversos cementos, aditivos y mezclas de concreto con diferentes proporciones y en distintos entornos de temperatura. El molde de prueba está fabricado completamente en aluminio, es ligero y fácil de usar.",
        "features": [],
        "standards": [
          "ASTM C403",
          "AASHTO T197"
        ],
        "specifications": [
          {
            "label": "Molde de muestra de calibre superior",
            "value": "Φ160mm"
          },
          {
            "label": "Molde de muestra de menor calibre",
            "value": "Φ150mm"
          },
          {
            "label": "Temperatura de prueba",
            "value": "20±2℃"
          },
          {
            "label": "Fuerza de penetración máxima",
            "value": "1000N"
          },
          {
            "label": "Valor mínimo de división",
            "value": "0.1N"
          },
          {
            "label": "Error de valor de visualización",
            "value": "<±1%"
          },
          {
            "label": "Método de penetración",
            "value": "Manual"
          },
          {
            "label": "área del lápiz óptico",
            "value": "100, 50, 20mm²"
          },
          {
            "label": "Voltaje",
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
        "name": "Penetrómetro de esfera Acme",
        "suffixName": "",
        "model": "HG-80",
        "category": "concrete",
        "thumbnail": "/assets/images/HG-80.png",
        "description": "Este producto es adecuado para probar el tiempo de fraguado de diversos cementos, aditivos y mezclas de hormigón con diferentes proporciones de mezcla de hormigón en diferentes entornos de temperatura.",
        "features": [],
        "standards": [
          "ASTM C403",
          "AASHTO T197"
        ],
        "specifications": [
          {
            "label": "Modo de visualización",
            "value": "Pointer"
          },
          {
            "label": "Valor máximo medido",
            "value": "1200N"
          },
          {
            "label": "Molde de muestra de calibre superior",
            "value": "Φ160mm"
          },
          {
            "label": "Molde de muestra de menor calibre",
            "value": "Φ150mm"
          },
          {
            "label": "Altura del molde de la muestra",
            "value": "150mm"
          },
          {
            "label": "Profundidad de penetración",
            "value": "25mm"
          },
          {
            "label": "Valor mínimo de división",
            "value": "1N"
          },
          {
            "label": "Error de indicación",
            "value": "±10N"
          },
          {
            "label": "área de carga del lápiz óptico",
            "value": "100,50,20mm2"
          },
          {
            "label": "Resistencia a la penetración",
            "value": "0.2～3.5MPa,3.5～20MPa, 20～28MPa"
          },
          {
            "label": "Dimensiones",
            "value": "700×350×1000mm"
          },
          {
            "label": "Tama?o del embalaje",
            "value": "730×360×1040mm"
          },
          {
            "label": "Peso",
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
        "name": "Vibrador de hormigón",
        "suffixName": "500×500 mm",
        "model": "HZJ-0.5",
        "category": "concrete",
        "thumbnail": "/assets/images/HZJ-0.5.png",
        "description": "Este producto es adecuado para su uso en laboratorios, en obras de construcción como pieza de prueba y en fábricas de componentes prefabricados para vibrar diversos componentes de hormigón, como losas, columnas y vigas.",
        "features": [],
        "standards": [
          "EN 12390-2",
          "BS 1881:108"
        ],
        "specifications": [
          {
            "label": "Tama?o de la mesa",
            "value": "500×500mm"
          },
          {
            "label": "Frecuencia de vibración",
            "value": "2860 point/min"
          },
          {
            "label": "Amplitud de vibración",
            "value": "0.3-0.6mm"
          },
          {
            "label": "Potencia del vibrador",
            "value": "0.55kW"
          },
          {
            "label": "Carga",
            "value": "100kg"
          },
          {
            "label": "Peso",
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
        "name": "Vibrador de hormigón",
        "suffixName": "800×800 mm",
        "model": "HZJ-0.8",
        "category": "concrete",
        "thumbnail": "/assets/images/HZJ-0.8.png",
        "description": "Este producto es adecuado para su uso en laboratorios, en obras de construcción como pieza de prueba y en fábricas de componentes prefabricados para vibrar diversos componentes de hormigón, como losas, columnas y vigas.",
        "features": [],
        "standards": [
          "EN 12390-2",
          "BS 1881:108"
        ],
        "specifications": [
          {
            "label": "Tama?o de la mesa",
            "value": "800×800mm"
          },
          {
            "label": "Frecuencia de vibración",
            "value": "2860 point/min"
          },
          {
            "label": "Amplitud de vibración",
            "value": "0.3-0.6mm"
          },
          {
            "label": "Potencia del vibrador",
            "value": "1.1kW"
          },
          {
            "label": "Carga",
            "value": "150kg"
          },
          {
            "label": "Peso",
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
        "name": "Vibrador de hormigón",
        "suffixName": "1000×1000 mm",
        "model": "HZJ-1",
        "category": "concrete",
        "thumbnail": "/assets/images/HZJ-1.png",
        "description": "Este producto es adecuado para su uso en laboratorios, en obras de construcción como pieza de prueba y en fábricas de componentes prefabricados para vibrar diversos componentes de hormigón, como losas, columnas y vigas.",
        "features": [],
        "standards": [
          "EN 12390-2",
          "BS 1881:108"
        ],
        "specifications": [
          {
            "label": "Tama?o de la mesa",
            "value": "1000×1000mm"
          },
          {
            "label": "Frecuencia de vibración",
            "value": "2860 point/min"
          },
          {
            "label": "Amplitud de vibración",
            "value": "0.3-0.6mm"
          },
          {
            "label": "Potencia del vibrador",
            "value": "1.5kW"
          },
          {
            "label": "Carga",
            "value": "200kg"
          },
          {
            "label": "Peso",
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
        "name": "Mezcladora de hormigón de un solo eje",
        "suffixName": "30 litros",
        "model": "SJD-30",
        "category": "concrete",
        "thumbnail": "/assets/images/SJD-30.png",
        "description": "Esta máquina es adecuada para unidades de investigación científica en construcción, empresas constructoras y fabricantes de componentes de hormigón. Puede mezclar hormigón ordinario y hormigón ligero, y también puede utilizarse en otras industrias para mezclar diferentes materiales.",
        "features": [],
        "standards": [
          "ASTM C192/C192M-02"
        ],
        "specifications": [
          {
            "label": "Espesor de pared",
            "value": "6mm"
          },
          {
            "label": "Capacidad de alimentación",
            "value": "48L"
          },
          {
            "label": "Capacidad de descarga",
            "value": "30L"
          },
          {
            "label": "Capacidad máxima de descarga",
            "value": "33L"
          },
          {
            "label": "Tiempo de mezcla",
            "value": "≤45s"
          },
          {
            "label": "Velocidad del eje de agitación",
            "value": "45r/min"
          },
          {
            "label": "Energía eléctrica",
            "value": "1.5kW"
          },
          {
            "label": "Voltaje",
            "value": "AC380V±10%"
          },
          {
            "label": "Dimensiones",
            "value": "1130×400×900mm"
          },
          {
            "label": "Peso",
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
        "name": "Mezcladora de hormigón de un solo eje",
        "suffixName": "60 litros",
        "model": "SJD-60",
        "category": "concrete",
        "thumbnail": "/assets/images/SJD-60.png",
        "description": "Esta máquina es adecuada para unidades de investigación científica en construcción, empresas constructoras y fabricantes de componentes de hormigón. Puede mezclar hormigón ordinario y hormigón ligero, y también puede utilizarse en otras industrias para mezclar diferentes materiales.",
        "features": [],
        "standards": [
          "ASTM C192/C192M-02"
        ],
        "specifications": [
          {
            "label": "Espesor de pared",
            "value": "6mm"
          },
          {
            "label": "Capacidad de alimentación",
            "value": "96L"
          },
          {
            "label": "Capacidad de descarga",
            "value": "60L"
          },
          {
            "label": "Capacidad máxima de descarga",
            "value": "66L"
          },
          {
            "label": "Tiempo de mezcla",
            "value": "≤45s"
          },
          {
            "label": "Velocidad del eje de agitación",
            "value": "45r/min"
          },
          {
            "label": "Energía eléctrica",
            "value": "2.2kW"
          },
          {
            "label": "Voltaje",
            "value": "AC380V±10%"
          },
          {
            "label": "Dimensiones",
            "value": "1520×530×1060mm"
          },
          {
            "label": "Peso",
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
        "name": "Analizador rápido de contenido de iones cloruro",
        "suffixName": "",
        "model": "LDCL-B",
        "category": "concrete",
        "thumbnail": "/assets/images/LDCL-B.png",
        "description": "Este producto determina rápidamente el contenido de iones cloruro solubles en agua del hormigón, la arena, la grava, el cemento, el agua de mezcla y otros materiales inorgánicos mediante el software profesional y los reactivos químicos anti-bloqueo que incorpora.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Rango de medición",
            "value": "50～999.99mV"
          },
          {
            "label": "Configuración de electrodos",
            "value": "domestic 2 electrodes"
          },
          {
            "label": "Rango de medición eléctrica",
            "value": "1×10-2～5×10-5mol/L"
          },
          {
            "label": "Voltaje",
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
        "name": "Instrumento de secreción de presión de hormigón",
        "suffixName": "",
        "model": "SY-2",
        "category": "concrete",
        "thumbnail": "/assets/images/SY-2.png",
        "description": "Este dispositivo se utiliza para medir mezclas de hormigón con una presión compuesta no superior a 40 mm. Ofrece las ventajas de una medición precisa, un funcionamiento sencillo, un tama?o compacto y un moldeado práctico.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "El rango máximo del manómetro",
            "value": "6MPa"
          },
          {
            "label": "Diámetro interior del cilindro",
            "value": "125±0.02mm"
          },
          {
            "label": "Altura del cuerpo del cilindro",
            "value": "200±0.2mm"
          },
          {
            "label": "Diámetro del pistón de trabajo",
            "value": "125mm"
          },
          {
            "label": "Apertura de la pantalla",
            "value": "0.335mm (50 mesh)"
          },
          {
            "label": "Peso",
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
        "name": "Caja de curado de agua para cemento",
        "suffixName": "180 PIEZAS",
        "model": "HBY-30",
        "category": "cement",
        "thumbnail": "/assets/images/HBY-30（立式）.png",
        "description": "El producto es adecuado para plantas de cemento, unidades de construcción, unidades de ingeniería de carreteras y puentes, y departamentos de investigación científica e inspección de calidad pertinentes para realizar el mantenimiento estándar de la resistencia y el tiempo de fraguado de muestras de cemento, hormigón y productos de cemento.",
        "features": [],
        "standards": [
          "EN 196-1"
        ],
        "specifications": [
          {
            "label": "Control de temperatura",
            "value": "20±1℃"
          },
          {
            "label": "Precisión en el control de temperatura",
            "value": "±1℃"
          },
          {
            "label": "Potencia del compresor",
            "value": "240W"
          },
          {
            "label": "Potencia del calentador",
            "value": "1000W"
          },
          {
            "label": "Voltaje",
            "value": "AC220V±10%"
          },
          {
            "label": "Tama?o de la caja de mantenimiento",
            "value": "175×290×65mm (30 pieces)"
          },
          {
            "label": "Tama?o del bloque de prueba",
            "value": "40×40×160 mm(180 pieces)"
          },
          {
            "label": "Dimensiones",
            "value": "800×670×1750mm"
          },
          {
            "label": "Peso",
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
        "name": "Caja de curado de agua para cemento",
        "suffixName": "360 PIEZAS",
        "model": "HBY-64",
        "category": "cement",
        "thumbnail": "/assets/images/HBY-64（立式）.png",
        "description": "El producto es adecuado para plantas de cemento, unidades de construcción, unidades de ingeniería de carreteras y puentes, y departamentos de investigación científica e inspección de calidad pertinentes para realizar el mantenimiento estándar de la resistencia y el tiempo de fraguado de muestras de cemento, hormigón y productos de cemento.",
        "features": [],
        "standards": [
          "EN 196-1"
        ],
        "specifications": [
          {
            "label": "Control de temperatura",
            "value": "20±1℃"
          },
          {
            "label": "Precisión en el control de temperatura",
            "value": "±1℃"
          },
          {
            "label": "Voltaje",
            "value": "AC220V±10%"
          },
          {
            "label": "Potencia del compresor",
            "value": "240W"
          },
          {
            "label": "Potencia del calentador",
            "value": "2000W"
          },
          {
            "label": "Tama?o del bloque de prueba",
            "value": "40×40×160mm (360 pieces)"
          },
          {
            "label": "Tama?o de la caja de mantenimiento",
            "value": "175×290×65mm (60 pieces)"
          },
          {
            "label": "Dimensiones",
            "value": "1080×850×1880mm"
          },
          {
            "label": "Peso",
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
        "name": "Cámara de curado de cemento y hormigón",
        "suffixName": "18 moldes de cemento triples",
        "model": "HBY-40B",
        "category": "cement",
        "thumbnail": "/assets/images/HBY-40B（铁门）.png",
        "description": "Este producto está dise?ado y fabricado de acuerdo con los requisitos de mantenimiento estándar nacionales para cemento, hormigón y productos de cemento, etc. El producto es adecuado para plantas de cemento, unidades de construcción, unidades de ingeniería de carreteras y puentes, y departamentos de investigación científica e inspección de calidad pertinentes para realizar el mantenimiento estándar de la resistencia y el tiempo de fraguado de muestras de cemento, hormigón y productos de cemento.",
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
            "label": "Temperatura de prueba",
            "value": "20±1℃"
          },
          {
            "label": "Controlar la humedad",
            "value": "≧95%RH"
          },
          {
            "label": "Potencia del compresor",
            "value": "138W"
          },
          {
            "label": "Potencia del calentador",
            "value": "800W"
          },
          {
            "label": "Voltaje",
            "value": "AC220V±10%"
          },
          {
            "label": "Número de moldes de prueba colocados",
            "value": "40×40×160 trial molds, 6 groups can be placed on each layer; 150×150×150 mold trial, 3 groups can be placed on each layer; 100×100×100 mold trial, 4 groups can be placed on each layer"
          },
          {
            "label": "Tama?o de estudio",
            "value": "590×570×1180mm"
          },
          {
            "label": "Dimensiones",
            "value": "1000×700×1530mm"
          },
          {
            "label": "Peso",
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
        "name": "Caja de curado estándar para muestras de mortero mixto",
        "suffixName": "",
        "model": "HBY-30",
        "category": "cement",
        "thumbnail": "/assets/images/HBY-30.png",
        "description": "El producto es adecuado para plantas de cemento, unidades de construcción, unidades de ingeniería de carreteras y puentes, y departamentos de investigación científica e inspección de calidad pertinentes para realizar el mantenimiento estándar de la resistencia y el tiempo de fraguado de muestras de cemento, hormigón y productos de cemento.",
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
            "label": "Precisión del controlador de temperatura",
            "value": "20±1℃"
          },
          {
            "label": "Controlar la humedad",
            "value": "60-80%RH"
          },
          {
            "label": "Voltaje",
            "value": "AC220V±10%"
          },
          {
            "label": "Potencia del compresor",
            "value": "138W"
          },
          {
            "label": "Potencia del calentador",
            "value": "500W"
          },
          {
            "label": "Tama?o de estudio",
            "value": "580×500×1180mm"
          },
          {
            "label": "El soporte interno para muestras está dividido en 6 tama?os de cuadrícula iguales.",
            "value": "580×490×180mm"
          },
          {
            "label": "Dimensiones",
            "value": "1000×700×1530 mm"
          },
          {
            "label": "Peso",
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
        "name": "Mezcladora de mortero de cemento",
        "suffixName": "",
        "model": "JJ-20F",
        "category": "cement",
        "thumbnail": "/assets/images/JJ-20F.png",
        "description": "El instrumento se utiliza principalmente para preparar muestras para ensayos de resistencia de mortero de cemento antes de su mezcla.",
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
            "label": "Rotación a baja velocidad",
            "value": "140 ± 2 r/min"
          },
          {
            "label": "Revolución a baja velocidad",
            "value": "62 ± 2 r/min"
          },
          {
            "label": "Rotación a alta velocidad",
            "value": "285 ± 3 r/min"
          },
          {
            "label": "Revolución de alta velocidad",
            "value": "125 ± 3 r/min"
          },
          {
            "label": "Ancho de la pala mezcladora",
            "value": "135mm"
          },
          {
            "label": "Capacidad",
            "value": "5L"
          },
          {
            "label": "El espesor de la pared",
            "value": "1.5mm"
          },
          {
            "label": "El espacio de trabajo entre la pala mezcladora y el recipiente mezclador.",
            "value": "3mm ±1mm"
          },
          {
            "label": "Voltaje",
            "value": "AC220V±10%"
          },
          {
            "label": "Dimensiones exteriores (largo × ancho × alto)",
            "value": "630×400×660mm"
          },
          {
            "label": "Peso",
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
        "name": "Plataforma vibratoria de mortero de cemento",
        "suffixName": "",
        "model": "ZT-20F",
        "category": "cement",
        "thumbnail": "/assets/images/ZT-20F.png",
        "description": "Este instrumento es adecuado para preparar muestras para ensayos de resistencia de mortero de cemento.",
        "features": [],
        "standards": [
          "EN 196-1",
          "EN ISO 679"
        ],
        "specifications": [
          {
            "label": "La masa total de la placa de la mesa (incluyendo el brazo, el marco del troquel, etc.)",
            "value": "13.75±0.25kg"
          },
          {
            "label": "El peso total de la parte vibrante",
            "value": "20±0.5kg"
          },
          {
            "label": "Amplitud (distancia de caída)",
            "value": "15±0.3mm"
          },
          {
            "label": "El tiempo de 60 vibraciones",
            "value": "60±2s"
          },
          {
            "label": "Velocidad del motor",
            "value": "60rpm"
          },
          {
            "label": "Potencia del motor",
            "value": "40W"
          },
          {
            "label": "Voltaje",
            "value": "AC220V"
          },
          {
            "label": "Dimensiones generales",
            "value": "1152×482×510mm"
          },
          {
            "label": "Peso",
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
        "name": "Máquina eléctrica de ensayo de flexión (tipo puntero)",
        "suffixName": "5000N",
        "model": "DKZ-5000",
        "category": "cement",
        "thumbnail": "/assets/images/DKZ-5000.png",
        "description": "Esta máquina de ensayo se utiliza principalmente para comprobar la resistencia a la flexión del mortero de cemento de cocción suave en fábricas de cemento, unidades de construcción, centros de ense?anza superior y unidades de investigación científica, y también puede utilizarse para comprobar la resistencia a la flexión de otros materiales frágiles no metálicos.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Método de visualización",
            "value": "Pointer"
          },
          {
            "label": "Relación de salida de doble palanca (relación de distancia entre el haz inferior y el brazo) (máximo)",
            "value": "50:1"
          },
          {
            "label": "Salida máxima",
            "value": "Double Leverage 5000N"
          },
          {
            "label": "Velocidad de carga",
            "value": "50N/s"
          },
          {
            "label": "Diámetro del rodillo de carga y del rodillo de soporte",
            "value": "Φ10mm"
          },
          {
            "label": "Paso del rodillo de soporte",
            "value": "100mm"
          },
          {
            "label": "Espacio entre marcos",
            "value": "46mm"
          },
          {
            "label": "Inclinación de la palanca",
            "value": ">1/50°"
          },
          {
            "label": "Dimensiones (largo x ancho x alto)",
            "value": "1080×220×780mm"
          },
          {
            "label": "Peso",
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
        "name": "Máquina eléctrica de ensayo de flexión (pantalla digital)",
        "suffixName": "6000N",
        "model": "DKZ-6000",
        "category": "cement",
        "thumbnail": "/assets/images/DKZ-6000（数显）.png",
        "description": "Esta máquina de ensayo se utiliza principalmente para comprobar la resistencia a la flexión del mortero de cemento de cocción suave en fábricas de cemento, unidades de construcción, centros de ense?anza superior y unidades de investigación científica, y también puede utilizarse para comprobar la resistencia a la flexión de otros materiales frágiles no metálicos.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Máxima resistencia a la flexión",
            "value": "6000N"
          },
          {
            "label": "Diámetro del rodillo de carga y del rodillo de soporte",
            "value": "Φ10mm"
          },
          {
            "label": "Distancia del rodillo de soporte",
            "value": "100mm"
          },
          {
            "label": "Espacio entre marcos",
            "value": "46mm"
          },
          {
            "label": "Inclinación de la palanca",
            "value": ">1/50°"
          },
          {
            "label": "Voltaje",
            "value": "AC220V±10%"
          },
          {
            "label": "Dimensiones",
            "value": "1180×220×800mm"
          },
          {
            "label": "Peso",
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
        "name": "Tabla de flujo de mortero de cemento",
        "suffixName": "",
        "model": "NLD-3F",
        "category": "cement",
        "thumbnail": "/assets/images/NLD-3F.png",
        "description": "Se utiliza principalmente para la prueba de fluidez de la arena del mortero de cemento.",
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
            "label": "El peso total de la parte vibrante",
            "value": "4.35±0.15kg"
          },
          {
            "label": "Distancia de caída por vibración",
            "value": "10±0.2mm(For ASTM C230, 12.7±0.2)"
          },
          {
            "label": "Frecuencia de vibración",
            "value": "1Hz"
          },
          {
            "label": "Tiempos de vibración",
            "value": "25 times"
          },
          {
            "label": "Parámetros del escritorio",
            "value": "Cast steel, hard chrome plated working surface"
          },
          {
            "label": "Diámetro",
            "value": "Φ300±1mm(For ASTM C230, Φ254±1)"
          },
          {
            "label": "Dimensiones",
            "value": "400×500×370mm"
          },
          {
            "label": "Voltaje",
            "value": "AC220V±10%"
          },
          {
            "label": "Peso",
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
        "name": "Analizador de finura de cemento mediante tamizado por chorro de aire",
        "suffixName": "",
        "model": "FSY-150",
        "category": "cement",
        "thumbnail": "/assets/images/FSY-150（普通）.png",
        "description": "Este equipo se utiliza ampliamente en la inspección de finura del cemento y en el control de la producción. También puede emplearse en pruebas de finura de polvo en otras industrias. Es un instrumento de uso común en diversas estaciones de inspección de calidad del cemento, fábricas de cemento y otras unidades.",
        "features": [],
        "standards": [
          "EN 933-10",
          "ASTM C1891"
        ],
        "specifications": [
          {
            "label": "Finura de la prueba de análisis de tamizado",
            "value": "1~0.030mm"
          },
          {
            "label": "Tiempo de proyección automático",
            "value": "0～999s (adjust)"
          },
          {
            "label": "Presión negativa de trabajo",
            "value": "-4000~6000Pa"
          },
          {
            "label": "Voltaje",
            "value": "AC220V±10%"
          },
          {
            "label": "Alimentación",
            "value": "10～25g"
          },
          {
            "label": "Accesorios",
            "value": "0.045 sieve, 0.08 sieve (optional)"
          },
          {
            "label": "Ruido",
            "value": "≤75dB"
          },
          {
            "label": "Dimensiones",
            "value": "450×380×830mm"
          },
          {
            "label": "Peso",
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
        "name": "Caja de ebullición",
        "suffixName": "",
        "model": "FZ-31A",
        "category": "cement",
        "thumbnail": "/assets/images/FZ-31A.png",
        "description": "Este equipo es uno de los más utilizados en la producción de cemento, la construcción, la investigación científica y las unidades de ensayo. Está fabricado en acero inoxidable.",
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
            "label": "Temperatura máxima de ebullición",
            "value": "100℃"
          },
          {
            "label": "Volumen del tanque interior",
            "value": "31L"
          },
          {
            "label": "Tiempo de calentamiento",
            "value": "30±5min(20℃ to 100℃)"
          },
          {
            "label": "Control del tiempo de calentamiento",
            "value": "0～3.5h"
          },
          {
            "label": "Potencia del calentador tubular",
            "value": "4kW"
          },
          {
            "label": "Voltaje",
            "value": "AC220V±10%"
          },
          {
            "label": "Tama?o de estudio",
            "value": "410×240×310mm"
          },
          {
            "label": "Dimensiones",
            "value": "490×290×410mm"
          },
          {
            "label": "Peso",
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
        "name": "Medidor automático de superficie específica",
        "suffixName": "Método Blaine",
        "model": "FBT-9",
        "category": "cement",
        "thumbnail": "/assets/images/FBT-9.png",
        "description": "Este producto es adecuado para medir la superficie por gramo de material sólido.",
        "features": [],
        "standards": [
          "EN 196-6",
          "comparable to: ASTM C204",
          "AASHTO T153",
          "BS 4359:2"
        ],
        "specifications": [
          {
            "label": "Voltaje",
            "value": "200V±10%"
          },
          {
            "label": "Rango de tiempo",
            "value": "0.1s<T<999.9s"
          },
          {
            "label": "Precisión de sincronización",
            "value": "<0.2s"
          },
          {
            "label": "Precisión de la medición",
            "value": "＜1%"
          },
          {
            "label": "Rango de temperatura",
            "value": "8~34℃"
          },
          {
            "label": "Diámetro de la cavidad interna del cilindro transpirable",
            "value": "Φ12.7mm"
          },
          {
            "label": "Altura de muestra de la cavidad interna del cilindro transpirable",
            "value": "15mm"
          },
          {
            "label": "Número de agujeros en la placa perforada",
            "value": "35"
          },
          {
            "label": "Diámetro del orificio de la placa perforada",
            "value": "Φ1.0mm"
          },
          {
            "label": "Espesor de la placa perforada",
            "value": "1mm"
          },
          {
            "label": "Dimensión exterior",
            "value": "430×500×280mm"
          },
          {
            "label": "Peso",
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
        "name": "Mezcladora de mortero de cemento",
        "suffixName": "",
        "model": "JJ-5",
        "category": "cement",
        "thumbnail": "/assets/images/JJ-5.png",
        "description": "El producto es adecuado para plantas de cemento, unidades de construcción, unidades de ingeniería de carreteras y puentes, y departamentos de investigación científica e inspección de calidad pertinentes para realizar el mantenimiento estándar de la resistencia y el tiempo de fraguado de muestras de cemento, hormigón y productos de cemento.",
        "features": [
          "Controlado por un motor de doble velocidad mediante un programador horario, completa automáticamente el ciclo de trabajo especificado de \"rotación lenta - parada - rotación rápida\".",
          "La estructura totalmente metálica garantiza un rendimiento de prueba estable."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Velocidad de rotación a baja velocidad (r/min)",
            "value": "140±5"
          },
          {
            "label": "Velocidad de rotación de alta velocidad (r/min)",
            "value": "285±10"
          },
          {
            "label": "Velocidad de revolución a baja velocidad (r/min)",
            "value": "62±5"
          },
          {
            "label": "Velocidad de revolución a alta velocidad (r/min)",
            "value": "125±10"
          },
          {
            "label": "Ancho de la pala mezcladora (mm)",
            "value": "135"
          },
          {
            "label": "Especificación de la rosca de conexión entre la pala mezcladora y el eje de la pala mezcladora",
            "value": "M18×1.5"
          },
          {
            "label": "Volumen del recipiente de mezcla (L)",
            "value": "5"
          },
          {
            "label": "Espesor de la pared del recipiente de mezcla (mm)",
            "value": "1.5"
          },
          {
            "label": "Espacio de trabajo entre la pala mezcladora y el recipiente de mezcla (mm)",
            "value": "3±1"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC380V±10%, 50Hz"
          },
          {
            "label": "Dimensiones generales (mm)",
            "value": "550×300×700"
          },
          {
            "label": "Peso (kg)",
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
        "name": "Mezcladora de pasta de cemento",
        "suffixName": "",
        "model": "NJ-160A",
        "category": "cement",
        "thumbnail": "/assets/images/NJ-160A.png",
        "description": "Este producto es idóneo para determinar la consistencia estándar y el tiempo de fraguado del cemento, así como para elaborar bloques de ensayo de solidez. Es un equipo indispensable en los laboratorios de plantas cementeras, empresas constructoras, universidades e instituciones de investigación.",
        "features": [
          "Controlado por un motor de doble velocidad mediante un programador horario, completa automáticamente el ciclo de trabajo especificado de \"rotación lenta - parada - rotación rápida\".",
          "La estructura totalmente metálica garantiza un rendimiento de prueba estable."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Velocidad de revolución a baja velocidad (r/min)",
            "value": "62±5"
          },
          {
            "label": "Velocidad de revolución a alta velocidad (r/min)",
            "value": "125±10"
          },
          {
            "label": "Velocidad de rotación a baja velocidad (r/min)",
            "value": "140±5"
          },
          {
            "label": "Velocidad de rotación de alta velocidad (r/min)",
            "value": "258±10"
          },
          {
            "label": "Tiempo del programa de control automático a baja velocidad (s)",
            "value": "120±3"
          },
          {
            "label": "Tiempo de parada del programa de control automático (s)",
            "value": "15"
          },
          {
            "label": "Tiempo del programa de control automático a alta velocidad (s)",
            "value": "120±3"
          },
          {
            "label": "Especificación de la rosca de conexión entre la pala mezcladora y el eje de la pala.",
            "value": "M16×1"
          },
          {
            "label": "Espacio de trabajo entre la pala mezcladora y el recipiente de mezcla (mm)",
            "value": "2±1"
          },
          {
            "label": "Ancho de la pala mezcladora (mm)",
            "value": "111"
          },
          {
            "label": "Espesor de la pared del recipiente de mezcla (mm)",
            "value": "1"
          },
          {
            "label": "Dimensiones del recipiente mezclador (diámetro interior × profundidad) (mm)",
            "value": "Φ160×139"
          },
          {
            "label": "Volumen de mezcla (L)",
            "value": "2.5"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC380V±10%, 50Hz"
          },
          {
            "label": "Dimensiones generales (mm)",
            "value": "450×250×500"
          },
          {
            "label": "Peso (kg)",
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
        "name": "Plataforma vibratoria de mortero de cemento",
        "suffixName": "",
        "model": "ZT-96",
        "category": "cement",
        "thumbnail": "/assets/images/ZT-96.png",
        "description": "Este producto es adecuado para la compactación y el moldeo de muestras de mortero de cemento durante su preparación. Se utiliza principalmente en plantas de cemento, empresas constructoras e instituciones académicas pertinentes para ensayos y experimentación.",
        "features": [
          "Compuesto por un componente vibratorio, una sección de bastidor y un sistema de control de conteo por infrarrojos;",
          "Control automático de conteo por infrarrojos, se detiene automáticamente a 60 conteos por segundo, lo que ofrece un funcionamiento cómodo y un conteo preciso;",
          "La distancia desde el centro del disco de la mesa hasta el centro del eje del brazo es de 800 mm."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Distancia de caída (mm)",
            "value": "15±0.3"
          },
          {
            "label": "Frecuencia de vibración",
            "value": "60 times/60 seconds ±2 seconds"
          },
          {
            "label": "Peso de la pieza vibratoria (kg)",
            "value": "20±0.5"
          },
          {
            "label": "Potencia del motor (W)",
            "value": "70"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC220V±10%, 50Hz"
          },
          {
            "label": "Dimensiones generales (mm)",
            "value": "1010×300×460"
          },
          {
            "label": "Peso (kg)",
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
        "name": "Tabla de flujo de mortero de cemento",
        "suffixName": "",
        "model": "NLD-3",
        "category": "cement",
        "thumbnail": "/assets/images/NLD-3.png",
        "description": "Este producto es adecuado para determinar la cantidad de agua necesaria para que el mortero de cemento alcance la consistencia estándar, midiendo su valor de fluidez.",
        "features": [
          "La superficie de la mesa está fabricada con un material cromado duro, que presenta un acabado brillante, un aspecto elegante y una excelente resistencia a la oxidación.",
          "El controlador ofrece alta precisión y es sencillo y cómodo de usar."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Distancia de caída por vibración (mm)",
            "value": "10±0.2"
          },
          {
            "label": "Frecuencia de vibración (Hz)",
            "value": "1"
          },
          {
            "label": "Número de vibraciones (veces)",
            "value": "25"
          },
          {
            "label": "Peso de la pieza vibratoria (kg)",
            "value": "4.35±0.15"
          },
          {
            "label": "Material de la superficie de la mesa",
            "value": "Cast steel, working surface hard chrome-plated"
          },
          {
            "label": "Diámetro de la superficie de la mesa (mm)",
            "value": "Φ300±1"
          },
          {
            "label": "Dimensiones generales (mm)",
            "value": "200×300×280"
          },
          {
            "label": "Peso (kg)",
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
        "name": "Mezcladora de pasta de cemento",
        "suffixName": "",
        "model": "NJ-160F",
        "category": "cement",
        "thumbnail": "/assets/images/NJ-160F.png",
        "description": "La mezcladora de pasta de cemento se utiliza principalmente para determinar la consistencia estándar y el tiempo de fraguado del cemento, así como para preparar bloques de prueba de solidez.",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Velocidad de revolución a baja velocidad (r/min)",
            "value": "62±2"
          },
          {
            "label": "Velocidad de revolución a alta velocidad (r/min)",
            "value": "125±3"
          },
          {
            "label": "Velocidad de rotación a baja velocidad (r/min)",
            "value": "140±2"
          },
          {
            "label": "Velocidad de rotación de alta velocidad (r/min)",
            "value": "258±3"
          },
          {
            "label": "Especificación de la rosca de conexión entre la pala mezcladora y el eje de la pala.",
            "value": "M16×1"
          },
          {
            "label": "Ancho de la pala mezcladora (mm)",
            "value": "111"
          },
          {
            "label": "Espesor de la pared del recipiente de mezcla (mm)",
            "value": "1"
          },
          {
            "label": "Volumen de mezcla (L)",
            "value": "2.5"
          },
          {
            "label": "Tensión de alimentación",
            "value": "AC220V±10%, 50Hz"
          },
          {
            "label": "Dimensiones generales (mm)",
            "value": "570×340×600"
          },
          {
            "label": "Peso (kg)",
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
        "name": "Máquina electrónica universal de ensayo de materiales con cámaras ambientales",
        "suffixName": "50 kN",
        "model": "WDW-T50",
        "category": "tensile",
        "thumbnail": "/assets/images/WDW-T50.png",
        "description": "Este producto es adecuado para probar y analizar las propiedades mecánicas de diversos metales, no metales y materiales compuestos, y puede obtener datos de prueba tales como el valor máximo de fuerza de prueba, el valor de fuerza de fractura, el límite elástico, el límite elástico superior e inferior, la resistencia a la tracción, la resistencia a la compresión, el alargamiento a la rotura, el módulo de elasticidad a la tracción y el módulo de elasticidad a la flexión de los materiales de prueba.",
        "features": [
          "Para realizar pruebas a temperaturas distintas a la ambiente.",
          "Bloqueo arbitrario de altura de posición de seguridad y posición experimental.",
          "Protección automática al superar la carga máxima, doble protección mediante límite de software y límite electrónico."
        ],
        "standards": [
          "ASTM E83",
          "BS 3846",
          "ISO 9513",
          "EN 10002-4"
        ],
        "specifications": [
          {
            "label": "Capacidad de carga (kN)",
            "value": "50 (can be customized to other capacities on request)"
          },
          {
            "label": "Precisión en la medición de carga",
            "value": "±1% (can be customized to 0.5 on request)"
          },
          {
            "label": "Rango de medición de carga",
            "value": "1% to 100% FS"
          },
          {
            "label": "Espacio de prueba vertical (sin plantilla)",
            "value": "1200mm"
          },
          {
            "label": "Espacio de prueba horizontal",
            "value": "500mm"
          },
          {
            "label": "Rango de velocidad del cabezal",
            "value": "0.01～500mm/min"
          },
          {
            "label": "Resolución de control de posición",
            "value": "0.025µm"
          },
          {
            "label": "Precisión en la medición del desplazamiento",
            "value": "Within ±0.5%"
          },
          {
            "label": "Rango de medición de deformación",
            "value": "0.2%～100%FS"
          },
          {
            "label": "Precisión en la medición de la deformación",
            "value": "Within ±0.5%"
          },
          {
            "label": "Rango de velocidad de prueba",
            "value": "0.5% ～ 100%FS"
          },
          {
            "label": "Prueba de velocidad y precisión",
            "value": "Within ±1% of the set value when the set value is <10%FS; Within ±0.1% of the set value when the set value is ≥10%FS"
          },
          {
            "label": "Dimensiones de la unidad principal (mm)",
            "value": "900×500×2300"
          },
          {
            "label": "Fuente de alimentación para la unidad principal",
            "value": "220V±10%, 2000W"
          },
          {
            "label": "Peso del mainframe",
            "value": "About 300kg"
          },
          {
            "label": "A continuación se detallan los parámetros técnicos de la cámara ambiental.",
            "value": "Temperature measured at the specimen (steel) over a 50 mm (2 in) gauge length. Not applicable within 15°C of ambient"
          },
          {
            "label": "Rango de temperatura",
            "value": "-40℃ — +150℃"
          },
          {
            "label": "Tiempo de enfriamiento",
            "value": "less than 40 min"
          },
          {
            "label": "Tiempo de calentamiento",
            "value": "less than 70 min"
          },
          {
            "label": "Gradiente de temperatura",
            "value": "≤2℃"
          },
          {
            "label": "Fluctuación de temperatura",
            "value": "≤1℃"
          },
          {
            "label": "Desviación de temperatura",
            "value": "±2℃"
          },
          {
            "label": "Precisión de la pantalla del controlador de temperatura",
            "value": "≤0.1℃"
          },
          {
            "label": "Dimensiones internas de la cámara (profundidad × ancho × alto mm)",
            "value": "240×200×600"
          },
          {
            "label": "Fuente de alimentación para la cámara ambiental",
            "value": "AC220V±10%,50-60Hz"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false,
        "customized": [
          "El rango de temperatura y las dimensiones de la cámara climática se pueden personalizar.",
          "Espacio de prueba personalizable",
          "Se puede instalar un extensómetro para una medición precisa de la deformación.",
          "Compatible con diversas células de carga para diferentes rangos de fuerza.",
          "Empu?aduras fácilmente intercambiables para diferentes pruebas"
        ]
      }
    ]
};