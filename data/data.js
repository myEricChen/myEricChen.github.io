/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2026-02-22 10:43:50
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2026-03-07 09:00:42
 * @FilePath: \EngWebsite\data\data.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// ==================== data/data.js ====================
window.ludaData = {
  // 设备分类数据（英文版）
  categories: [
    {
      id: "tensile",
      name: "Electromechanical Universal Testing Маchine Series",
      description: "High-precision electronic universal testers for plastics, rubber, textiles, metals, etc.",
      icon: "/assets/series/electronic-tensile-machine-icon.jpg"
    },
    {
      id: "universal",
      name: "Hydraulic Universal Testing Маchine Series",
      description: "Multi-functional equipment for tension, compression, bending, shear on metals & non-metals.",
      icon: "/assets/series/universal-testing-machine-icon.png"
    },
    {
      id: "pressure",
      name: "Compression Testing Machine Series",
      description: "Hydraulic/electric pressure testers for concrete, brick, rock compressive strength.",
      icon: "/assets/series/pressure-machine-icon.jpg"
    },
    {
      id: "large_machine",
      name: "Large Testing Machine Series",
      description: "Special machines: torsion, creep, fatigue, impact, and custom solutions.",
      icon: "/assets/series/large-testing-machine-icon.jpg"
    },
    {
      id: "research",
      name: "General Laboratory Equipment Series",
      description: "High-stability precision instruments for universities and research institutes.",
      icon: "/assets/series/research-product-icon.png"
    },
    {
      id: "concrete",
      name: "Concrete Testing Equipment Series",
      description: "Full process concrete testing: mixing, curing, strength, etc.",
      icon: "/assets/series/concrete-test-icon.jpg"
    },
    {
      id: "cement",
      name: "Cement Testing Equipment Series",
      description: "Cement consistency, setting time, soundness, strength testers.",
      icon: "/assets/series/cement-instrument-icon.png"
    },
    {
      id: "asphalt",
      name: "Asphalt and bitumen Testing Equipment Series",
      description: "Penetration, softening point, ductility, Marshall stability testers.",
      icon: "/assets/series/asphalt-instrument-icon.png"
    },
    {
      id: "geotechnical",
      name: "Geotechnical & Aggregate Testing Equipment Series",
      description: "Soil, sand, rock physical/mechanical testing for geotechnical engineering.",
      icon: "/assets/series/geotechnical-instrument-icon.jpg"
    },
    {
      id: "Mortar",
      name: "Mortar Testing Equipment Series",
      description: "",
      icon: ""
    }
  ],

  // 所有设备数据（仅列出大型试验机系列作为示例，实际可扩展）
  devices: [
    {
      "id": "P001",
      "name": "Shock Absorber Universal Material Testing Machine",
      "model": "WAW-600Pro",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WAW-600Pro.png",
      "image": "myImages/WAW-600Pro-Image.png",
      "description": "This testing machine is mainly used for tensile, compression, bending and shear tests of metal materials, and meets the requirements of national standards such as ASTM E8 metal tensile test standard.",
      "features": [
        "The servo oil source control system used in this equipment can effectively reduce the equipment operation noise, reduce heat generation, extend the service life of the oil, and eliminate the need for cooling.",
        "The shock absorption system of this equipment can effectively reduce the vibration during the use of the equipment, making the experimental process safer and more comfortable.",
        "The screwless structure makes this equipment more rigid, more convenient for maintenance and lower failure rate compared to other universal testing machines."
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
          "label": "Maximum test force (KN)",
          "value": "600"
        },
        {
          "label": "Effective measurement range",
          "value": "5%～100%FS"
        },
        {
          "label": "Accuracy of load indication value",
          "value": "Level 0.5"
        },
        {
          "label": "Stretching space (mm)",
          "value": "670"
        },
        {
          "label": "Circular Sample clamping diameter (mm)",
          "value": "Φ13~Φ26,Φ26~Φ40"
        },
        {
          "label": "Flat Sample clamping diameter (mm)",
          "value": "0~15"
        },
        {
          "label": "Sample clamping width(mm)",
          "value": "110"
        },
        {
          "label": "Maximum rising speed (mm/min)",
          "value": "350"
        },
        {
          "label": "Maximum lowering speed (mm/min)",
          "value": "500"
        },
        {
          "label": "Motor power(kW)",
          "value": "2.3"
        },
        {
          "label": "Supply Voltage",
          "value": "AC220V±10%,50-60Hz"
        },
        {
          "label": "Dimensions of machine(mm)",
          "value": "1440×580×2200"
        },
        {
          "label": "Weight (kg)",
          "value": "2350"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P002",
      "name": "Shock Absorber Universal Material Testing Machine",
      "model": "WAW-1000Pro",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WAW-1000Pro.png",
      "image": "myImages/WAW-1000Pro-Image.png",
      "description": "This testing machine is mainly used for tensile, compression, bending and shear tests of metal materials, and meets the requirements of national standards such as ASTM E8 metal tensile test standard.",
      "features": [
        "The servo oil source control system used in this equipment can effectively reduce the equipment operation noise, reduce heat generation, extend the service life of the oil, and eliminate the need for cooling.",
        "The shock absorption system of this equipment can effectively reduce the vibration during the use of the equipment, making the experimental process safer and more comfortable.",
        "The screwless structure makes this equipment more rigid, more convenient for maintenance and lower failure rate compared to other universal testing machines."
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
          "label": "Maximum test force (KN)",
          "value": "1000"
        },
        {
          "label": "Effective measurement range",
          "value": "5%～100%FS"
        },
        {
          "label": "Accuracy of load indication value",
          "value": "Level 0.5"
        },
        {
          "label": "Stretching space (mm)",
          "value": "690"
        },
        {
          "label": "Circular Sample clamping diameter (mm)",
          "value": "Φ14~Φ45"
        },
        {
          "label": "Flat Sample clamping diameter (mm)",
          "value": "0~40"
        },
        {
          "label": "Sample clamping width(mm)",
          "value": "110"
        },
        {
          "label": "Maximum rising speed (mm/min)",
          "value": "350"
        },
        {
          "label": "Maximum lowering speed (mm/min)",
          "value": "500"
        },
        {
          "label": "Motor power(kW)",
          "value": "2.3"
        },
        {
          "label": "Supply Voltage",
          "value": "AC220V±10%,50-60Hz"
        },
        {
          "label": "Dimensions of machine(mm)",
          "value": "1570×970×2280"
        },
        {
          "label": "Weight (kg)",
          "value": "3200"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P003",
      "name": "Electro-hydraulic Servo Steel Strand Special Testing Machine",
      "model": "WAW-600GS",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WAW-600GS.png",
      "image": "myImages/WAW-600GS-Image.png",
      "description": "This  product  is  suitable  for  tensile  test  of  steel  strand,  also  can  be  used  for tensile, compression, shear and other tests of metal and non-metal materials.",
      "features": [
        "The frame adopts gantry frame structure, super strong steel.",
        "The shield is made of acrylic transparent material, clean and beautiful, can observe the whole test process.",
        "External hydraulic jaws, easy to overhaul.",
        "With upper/lower pressure plate, to achieve tensile and compressive double space.",
        "Sensor adopts wheel and spoke sensor, high precision, stable rate, with reciprocity.",
        "Brand computer, with wireless keyboard and mouse, large display, sensitive operation.",
        "Servo motor and radial piston pump, ultra-low decibel, oil temperature is not easy to rise, efficient and stable.",
        "Using double oil pumps and double motors to realize independent oil source and stable pressure supply."
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
          "label": "Maximum test force (KN)",
          "value": "600"
        },
        {
          "label": "Effective measurement range",
          "value": "5%～100%"
        },
        {
          "label": "Accuracy of load indication value",
          "value": "Level 0.5"
        },
        {
          "label": "Stretching space (mm)",
          "value": "1050"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "950"
        },
        {
          "label": "Specimen clamping diameter (mm)",
          "value": "Φ12~Φ16"
        },
        {
          "label": "Working piston stroke (mm)",
          "value": "200"
        },
        {
          "label": "Upper/lower pressure plate size (mm)",
          "value": "Φ220×Φ230"
        },
        {
          "label": "Tabletop rising speed (mm/min)",
          "value": "100"
        },
        {
          "label": "Moving beam lifting speed (mm/min)",
          "value": "240"
        },
        {
          "label": "Distance between two pillars (mm)",
          "value": "450"
        },
        {
          "label": "Supply Voltage",
          "value": "AC380V±10%,50-60Hz"
        },
        {
          "label": "Host size (mm)",
          "value": "1050×710×2910"
        },
        {
          "label": "Dimensions of force measuring cabinet(mm)",
          "value": "700×520×1630"
        },
        {
          "label": "Weight (kg)",
          "value": "3700"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P004",
      "name": "Electro-hydraulic Servo Steel Strand Special Testing Machine",
      "model": "WAW-1000GS",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WAW-1000GS.png",
      "image": "myImages/WAW-1000GS-Image.png",
      "description": "This  product  is  suitable  for  tensile  test  of  steel  strand,  also  can  be  used  for tensile, compression, shear and other tests of metal and non-metal materials.",
      "features": [
        "The frame adopts gantry frame structure, super strong steel.",
        "The shield is made of acrylic transparent material, clean and beautiful, can observe the whole test process.",
        "External hydraulic jaws, easy to overhaul.",
        "With upper/lower pressure plate, to achieve tensile and compressive double space.",
        "Sensor adopts wheel and spoke sensor, high precision, stable rate, with reciprocity.",
        "Brand computer, with wireless keyboard and mouse, large display, sensitive operation.",
        "Servo motor and radial piston pump, ultra-low decibel, oil temperature is not easy to rise, efficient and stable.",
        "Using double oil pumps and double motors to realize independent oil source and stable pressure supply."
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
          "label": "Maximum test force (KN)",
          "value": "1000"
        },
        {
          "label": "Effective measurement range",
          "value": "5%～100%"
        },
        {
          "label": "Accuracy of load indication value",
          "value": "Level 0.5"
        },
        {
          "label": "Stretching space (mm)",
          "value": "1050"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "950"
        },
        {
          "label": "Specimen clamping diameter (mm)",
          "value": "Φ12~Φ16"
        },
        {
          "label": "Working piston stroke (mm)",
          "value": "200"
        },
        {
          "label": "Upper/lower pressure plate size (mm)",
          "value": "Φ220×Φ230"
        },
        {
          "label": "Tabletop rising speed (mm/min)",
          "value": "100"
        },
        {
          "label": "Moving beam lifting speed (mm/min)",
          "value": "240"
        },
        {
          "label": "Distance between two pillars (mm)",
          "value": "450"
        },
        {
          "label": "Supply Voltage",
          "value": "AC380V±10%,50-60Hz"
        },
        {
          "label": "Host size (mm)",
          "value": "1050×710×2910"
        },
        {
          "label": "Dimensions of force measuring cabinet(mm)",
          "value": "700×520×1630"
        },
        {
          "label": "Weight (kg)",
          "value": "3700"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P005",
      "name": "Servo Steel Strand Special Testing Machine",
      "model": "WAW-600G",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WAW-600G.png",
      "image": "myImages/WAW-600G-Image.png",
      "description": "WAW series electro-hydraulic servo steel strand special test machine is mainly used for the tensile test of steel strand, can do the tensile, compression and other tests  of  metal materials;  equipped  with  appropriate  fixtures,  can  also  be  used  to conduct the tensile, compression, bending and shear tests of non-metallic materials.",
      "features": [
        "The machine adopts high precision displacement sensor, accurate data.",
        "Adopt high precision electronic extensometer, accurate and effective measurement of deformation value.",
        "Adopt high-resolution acquisition system, fast data acquisition speed and high accuracy.",
        "Hydraulic control adopts integrated oil servo control system, which can automatically lift,  automatically position,automatically set the mark, realize equal force, equal displacement and mixed control."
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
          "label": "Maximum test force(KN)",
          "value": "600"
        },
        {
          "label": "Measuring range and measuring range(KN)",
          "value": "50-600"
        },
        {
          "label": "Indication relative error",
          "value": "±1%"
        },
        {
          "label": "Maximum Tensile Test Space(mm)",
          "value": "1050"
        },
        {
          "label": "Maximum compression test space(mm)",
          "value": "950"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "180"
        },
        {
          "label": "Upper and lower platen size(mm)",
          "value": "Φ223×Φ230"
        },
        {
          "label": "Distance between two pillars in tension and",
          "value": ""
        },
        {
          "label": "compression space(mm)",
          "value": "510"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "60"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": "240"
        },
        {
          "label": "Total motor power(kW)",
          "value": "2.1"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "890×590×2700"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "1000×700×850"
        },
        {
          "label": "Overall weight(kg)",
          "value": "3200"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P006",
      "name": "Servo Steel Strand Special Testing Machine",
      "model": "WAW-1000G",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WAW-1000G.png",
      "image": "myImages/WAW-1000G-Image.png",
      "description": "WAW series electro-hydraulic servo steel strand special test machine is mainly used for the tensile test of steel strand, can do the tensile, compression and other tests  of  metal materials;  equipped  with  appropriate  fixtures,  can  also  be  used  to conduct the tensile, compression, bending and shear tests of non-metallic materials.",
      "features": [
        "The machine adopts high precision displacement sensor, accurate data.",
        "Adopt high precision electronic extensometer, accurate and effective measurement of deformation value.",
        "Adopt high-resolution acquisition system, fast data acquisition speed and high accuracy.",
        "Hydraulic control adopts integrated oil servo control system, which can automatically lift,  automatically position,automatically set the mark, realize equal force, equal displacement and mixed control."
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
          "label": "Maximum test force(KN)",
          "value": "1000"
        },
        {
          "label": "Measuring range and measuring range(KN)",
          "value": "100-1000"
        },
        {
          "label": "Indication relative error",
          "value": "±1%"
        },
        {
          "label": "Maximum Tensile Test Space(mm)",
          "value": "1050"
        },
        {
          "label": "Maximum compression test space(mm)",
          "value": "950"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "180"
        },
        {
          "label": "Upper and lower platen size(mm)",
          "value": "Φ223×Φ230"
        },
        {
          "label": "Distance between two pillars in tension and",
          "value": ""
        },
        {
          "label": "compression space(mm)",
          "value": "510"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "60"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": "240"
        },
        {
          "label": "Total motor power(kW)",
          "value": "2.1"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "890×590×2700"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "1000×700×850"
        },
        {
          "label": "Overall weight(kg)",
          "value": "3200"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P007",
      "name": "Electro-hydraulic Servo Universal Material Testing Machine",
      "model": "WAW-100S",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WAW-100S.png",
      "image": "myImages/WAW-100S-Image.png",
      "description": "This product is suitable for metal, non-metal and composite materials,components of tensile, compression,bending,shear and other mechanical properties testing.The product adopts the under-mounted cylinder, microcomputer control, electro-hydraulic servo, with high precision,  simple operation, convenient, large data storage capacity and other advantages.",
      "features": [
        "The machine adopts high precision pressure displacement sensor, with high sensitive digital valve, fast response speed, high resolution.",
        "Hydraulic control adopts integrated oil servo control system, easy to operate, stable and reliable.",
        "With intelligent prompting working state,servo automatic compensation, positioning, pressure-holding and other functions.",
        "The test space can be adjusted at will by moving the beam, and different test pieces can be tested.",
        "The range can be automatically switched, and the range is automatically selected according to the load bearing size of the sample.",
        "With maximum load peak hold function, overload protection and position over-limit protection, safer to use.",
        "With automatic data storage and automatic calculation and printing of all test results."
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
          "label": "Maximum test force(KN)",
          "value": "100"
        },
        {
          "label": "Effective measurement range",
          "value": "5%～100%"
        },
        {
          "label": "Accuracy of load indication value",
          "value": "Level 0.5"
        },
        {
          "label": "Stretching space (mm)",
          "value": "480"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "480"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0-15"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "10-20"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "180"
        },
        {
          "label": "Upper pressure plate size(mm)",
          "value": "Φ180"
        },
        {
          "label": "Lower pressure plate size(mm)",
          "value": "Φ180"
        },
        {
          "label": "Distance between the two columns of the pulling and pressing space(mm)",
          "value": ""
        },
        {
          "label": "",
          "value": "380"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "100"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": "240"
        },
        {
          "label": "Total motor power(kW)",
          "value": "2.7"
        },
        {
          "label": "Supply Voltage",
          "value": "AC380V±10%,50-60Hz"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "730×600×1750"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "700×520×1630"
        },
        {
          "label": "Weight(kg)",
          "value": "1500"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P008",
      "name": "Electro-hydraulic Servo Universal Material Testing Machine",
      "model": "WAW-300S",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WAW-300S.png",
      "image": "myImages/WAW-300S-Image.png",
      "description": "This product is suitable for metal, non-metal and composite materials,components of tensile, compression,bending,shear and other mechanical properties testing.The product adopts the under-mounted cylinder, microcomputer control, electro-hydraulic servo, with high precision,  simple operation, convenient, large data storage capacity and other advantages.",
      "features": [
        "The machine adopts high precision pressure displacement sensor, with high sensitive digital valve, fast response speed, high resolution.",
        "Hydraulic control adopts integrated oil servo control system, easy to operate, stable and reliable.",
        "With intelligent prompting working state,servo automatic compensation, positioning, pressure-holding and other functions.",
        "The test space can be adjusted at will by moving the beam, and different test pieces can be tested.",
        "The range can be automatically switched, and the range is automatically selected according to the load bearing size of the sample.",
        "With maximum load peak hold function, overload protection and position over-limit protection, safer to use.",
        "With automatic data storage and automatic calculation and printing of all test results."
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
          "label": "Maximum test force(KN)",
          "value": "300"
        },
        {
          "label": "Effective measurement range",
          "value": "5%～100%"
        },
        {
          "label": "Accuracy of load indication value",
          "value": "Level 0.5"
        },
        {
          "label": "Stretching space (mm)",
          "value": "540"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "480"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0-15"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "10-20 、20-32"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "180"
        },
        {
          "label": "Upper pressure plate size(mm)",
          "value": "Φ180"
        },
        {
          "label": "Lower pressure plate size(mm)",
          "value": "Φ180"
        },
        {
          "label": "Distance between the two columns of the pulling and pressing space(mm)",
          "value": "400"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "100"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": "240"
        },
        {
          "label": "Total motor power(kW)",
          "value": "2.7"
        },
        {
          "label": "Supply Voltage",
          "value": "AC380V±10%,50-60Hz"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "730×600×1840"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "700×520×1630"
        },
        {
          "label": "Weight(kg)",
          "value": "1700"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P009",
      "name": "Electro-hydraulic Servo Universal Material Testing Machine",
      "model": "WAW-600S",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WAW-600S.png",
      "image": "myImages/WAW-600S-Image.png",
      "description": "This product is suitable for metal, non-metal and composite materials,components of tensile, compression,bending,shear and other mechanical properties testing.The product adopts the under-mounted cylinder, microcomputer control, electro-hydraulic servo, with high precision,  simple operation, convenient, large data storage capacity and other advantages.",
      "features": [
        "The machine adopts high precision pressure displacement sensor, with high sensitive digital valve, fast response speed, high resolution.",
        "Hydraulic control adopts integrated oil servo control system, easy to operate, stable and reliable.",
        "With intelligent prompting working state,servo automatic compensation, positioning, pressure-holding and other functions.",
        "The test space can be adjusted at will by moving the beam, and different test pieces can be tested.",
        "The range can be automatically switched, and the range is automatically selected according to the load bearing size of the sample.",
        "With maximum load peak hold function, overload protection and position over-limit protection, safer to use.",
        "With automatic data storage and automatic calculation and printing of all test results."
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
          "label": "Maximum test force(KN)",
          "value": "600"
        },
        {
          "label": "Effective measurement range",
          "value": "5%～100%"
        },
        {
          "label": "Accuracy of load indication value",
          "value": "Level 0.5"
        },
        {
          "label": "Stretching space (mm)",
          "value": "690"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "620"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0-15"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "13-26 、26-40"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "180"
        },
        {
          "label": "Upper pressure plate size(mm)",
          "value": "Φ180"
        },
        {
          "label": "Lower pressure plate size(mm)",
          "value": "Φ180"
        },
        {
          "label": "Distance between the two columns of the pulling and pressing space(mm)",
          "value": "400"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "100"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": "240"
        },
        {
          "label": "Total motor power(kW)",
          "value": "2.7"
        },
        {
          "label": "Supply Voltage",
          "value": "AC380V±10%,50-60Hz"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "890×590×2070"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "700×520×1630"
        },
        {
          "label": "Weight(kg)",
          "value": "2400"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P010",
      "name": "Electro-hydraulic Servo Universal Material Testing Machine",
      "model": "WAW-1000S",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WAW-1000S.png",
      "image": "myImages/WAW-1000S-Image.png",
      "description": "This product is suitable for metal, non-metal and composite materials,components of tensile, compression,bending,shear and other mechanical properties testing.The product adopts the under-mounted cylinder, microcomputer control, electro-hydraulic servo, with high precision,  simple operation, convenient, large data storage capacity and other advantages.",
      "features": [
        "The machine adopts high precision pressure displacement sensor, with high sensitive digital valve, fast response speed, high resolution.",
        "Hydraulic control adopts integrated oil servo control system, easy to operate, stable and reliable.",
        "With intelligent prompting working state,servo automatic compensation, positioning, pressure-holding and other functions.",
        "The test space can be adjusted at will by moving the beam, and different test pieces can be tested.",
        "The range can be automatically switched, and the range is automatically selected according to the load bearing size of the sample.",
        "With maximum load peak hold function, overload protection and position over-limit protection, safer to use.",
        "With automatic data storage and automatic calculation and printing of all test results."
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
          "label": "Maximum test force(KN)",
          "value": "1000"
        },
        {
          "label": "Effective measurement range",
          "value": "5%～100%"
        },
        {
          "label": "Accuracy of load indication value",
          "value": "Level 0.5"
        },
        {
          "label": "Stretching space (mm)",
          "value": "690"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "620"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0-15"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "14-32 、30-50"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "180"
        },
        {
          "label": "Upper pressure plate size(mm)",
          "value": "Φ220"
        },
        {
          "label": "Lower pressure plate size(mm)",
          "value": "Φ230"
        },
        {
          "label": "Distance between the two columns of the pulling and pressing space(mm)",
          "value": "450"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "100"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": "240"
        },
        {
          "label": "Total motor power(kW)",
          "value": "2.7"
        },
        {
          "label": "Supply Voltage",
          "value": "AC380V±10%,50-60Hz"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "945×635×2100"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "700×520×1630"
        },
        {
          "label": "Weight(kg)",
          "value": "2800"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P011",
      "name": "Electro-hydraulic Servo Universal Material Testing Machine",
      "model": "WAW-2000S",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WAW-2000S.png",
      "image": "myImages/WAW-2000S-Image.png",
      "description": "This product is suitable for metal, non-metal and composite materials,components of tensile, compression,bending,shear and other mechanical properties testing.The product adopts the under-mounted cylinder, microcomputer control, electro-hydraulic servo, with high precision,  simple operation, convenient, large data storage capacity and other advantages.",
      "features": [
        "The machine adopts high precision pressure displacement sensor, with high sensitive digital valve, fast response speed, high resolution.",
        "Hydraulic control adopts integrated oil servo control system, easy to operate, stable and reliable.",
        "With intelligent prompting working state,servo automatic compensation, positioning, pressure-holding and other functions.",
        "The test space can be adjusted at will by moving the beam, and different test pieces can be tested.",
        "The range can be automatically switched, and the range is automatically selected according to the load bearing size of the sample.",
        "With maximum load peak hold function, overload protection and position over-limit protection, safer to use.",
        "With automatic data storage and automatic calculation and printing of all test results."
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
          "label": "Maximum test force(KN)",
          "value": "2000"
        },
        {
          "label": "Effective measurement range",
          "value": "5%～100%"
        },
        {
          "label": "Accuracy of load indication value",
          "value": "Level 0.5"
        },
        {
          "label": "Stretching space (mm)",
          "value": "790"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "720"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0-40"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "20-40、40-60"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "250"
        },
        {
          "label": "Upper pressure plate size(mm)",
          "value": "Φ220"
        },
        {
          "label": "Lower pressure plate size(mm)",
          "value": "Φ230"
        },
        {
          "label": "Distance between the two columns of the pulling and pressing space(mm)",
          "value": "570"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "100"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": "240"
        },
        {
          "label": "Total motor power(kW)",
          "value": "3.7"
        },
        {
          "label": "Supply Voltage",
          "value": "AC380V±10%,50-60Hz"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "1200×800×2940"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "700×520×1630"
        },
        {
          "label": "Weight(kg)",
          "value": "3500"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P012",
      "name": "Electro-hydraulic Servo Universal Material Testing Machine",
      "model": "WAW-100B",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WAW-100B.png",
      "image": "myImages/WAW-100B-Image.png",
      "description": "This product is suitable for metal, non-metal and composite materials,components of tensile,  compression, bending, shear and other mechanical properties testing.The product adopts the under-mounted cylinder, microcomputer control, electro-hydraulic servo, with high precision, simple operation,convenient,large data storage capacity and other advantages.",
      "features": [
        "The tester adopts four columns and two wire rod frame,\"well\"  structure, stronger steel,more stable.",
        "The machine adopts three closed shields, effective protection against test  piece debris, high safety performance.",
        "From the previous semi-circular jaws to triangular hydraulic jaws, so that the test piece clamping more tightly, not easy to loosen.",
        "Standard with upper/lower pressure plate and bending support,can do compression, bending test, more functional, more comprehensive.",
        "Oil cylinder is placed under, no oil leakage, stable operation.",
        "Adopt high precision photoelectric encoder, higher displacement accuracy and more stable.",
        "With windows system control software,automatic storage of data and automatic calculation of test results.",
        "Servo measurement and control system, can achieve constant speed, constant loading, constant force value, more stable control.",
        "The machine adopts high-precision digital servo valve to control loading, with higher precision and more stable data.",
        "Oil source control cabinet design humanized, more ergonomic, more convenient operation."
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
          "label": "Maximum test force(KN)",
          "value": "100"
        },
        {
          "label": "Effective measurement range",
          "value": "10%～100%"
        },
        {
          "label": "Accuracy of load indication value",
          "value": "Level 1"
        },
        {
          "label": "Stretching space (mm)",
          "value": "480"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "480"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0-15"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "10-20"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "120"
        },
        {
          "label": "Upper pressure plate size(mm)",
          "value": "Φ176"
        },
        {
          "label": "Lower pressure plate size(mm)",
          "value": "Φ176"
        },
        {
          "label": "Distance between two pillars in tension and",
          "value": ""
        },
        {
          "label": "compression space(mm)",
          "value": "420"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "100"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": ""
        },
        {
          "label": "",
          "value": "240"
        },
        {
          "label": "Total motor power(kW)",
          "value": "1.3"
        },
        {
          "label": "Supply Voltage",
          "value": "AC380V±10%,50-60Hz"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "720×550×1660"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "600×550×1400"
        },
        {
          "label": "Overall weight(kg)",
          "value": "1600"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P013",
      "name": "Electro-hydraulic Servo Universal Material Testing Machine",
      "model": "WAW-300B",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WAW-300B.png",
      "image": "myImages/WAW-300B-Image.png",
      "description": "This product is suitable for metal, non-metal and composite materials,components of tensile,  compression, bending, shear and other mechanical properties testing.The product adopts the under-mounted cylinder, microcomputer control, electro-hydraulic servo, with high precision, simple operation,convenient,large data storage capacity and other advantages.",
      "features": [
        "The tester adopts four columns and two wire rod frame,\"well\"  structure, stronger steel,more stable.",
        "The machine adopts three closed shields, effective protection against test  piece debris, high safety performance.",
        "From the previous semi-circular jaws to triangular hydraulic jaws, so that the test piece clamping more tightly, not easy to loosen.",
        "Standard with upper/lower pressure plate and bending support,can do compression, bending test, more functional, more comprehensive.",
        "Oil cylinder is placed under, no oil leakage, stable operation.",
        "Adopt high precision photoelectric encoder, higher displacement accuracy and more stable.",
        "With windows system control software,automatic storage of data and automatic calculation of test results.",
        "Servo measurement and control system, can achieve constant speed, constant loading, constant force value, more stable control.",
        "The machine adopts high-precision digital servo valve to control loading, with higher precision and more stable data.",
        "Oil source control cabinet design humanized, more ergonomic, more convenient operation."
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
          "label": "Maximum test force(KN)",
          "value": "300"
        },
        {
          "label": "Effective measurement range",
          "value": "10%～100%"
        },
        {
          "label": "Accuracy of load indication value",
          "value": "Level 1"
        },
        {
          "label": "Stretching space (mm)",
          "value": "480"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "480"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0-15"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "10-20、20-32"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "120"
        },
        {
          "label": "Upper pressure plate size(mm)",
          "value": "Φ180"
        },
        {
          "label": "Lower pressure plate size(mm)",
          "value": "Φ180"
        },
        {
          "label": "Distance between two pillars in tension and",
          "value": ""
        },
        {
          "label": "compression space(mm)",
          "value": "420"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "100"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": ""
        },
        {
          "label": "",
          "value": "240"
        },
        {
          "label": "Total motor power(kW)",
          "value": "1.3"
        },
        {
          "label": "Supply Voltage",
          "value": "AC380V±10%,50-60Hz"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "730×600×1840"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "600×550×1400"
        },
        {
          "label": "Overall weight(kg)",
          "value": "1800"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P014",
      "name": "Electro-hydraulic Servo Universal Material Testing Machine",
      "model": "WAW-600B",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WAW-600B.png",
      "image": "myImages/WAW-600B-Image.png",
      "description": "This product is suitable for metal, non-metal and composite materials,components of tensile,  compression, bending, shear and other mechanical properties testing.The product adopts the under-mounted cylinder, microcomputer control, electro-hydraulic servo, with high precision, simple operation,convenient,large data storage capacity and other advantages.",
      "features": [
        "The tester adopts four columns and two wire rod frame,\"well\"  structure, stronger steel,more stable.",
        "The machine adopts three closed shields, effective protection against test  piece debris, high safety performance.",
        "From the previous semi-circular jaws to triangular hydraulic jaws, so that the test piece clamping more tightly, not easy to loosen.",
        "Standard with upper/lower pressure plate and bending support,can do compression, bending test, more functional, more comprehensive.",
        "Oil cylinder is placed under, no oil leakage, stable operation.",
        "Adopt high precision photoelectric encoder, higher displacement accuracy and more stable.",
        "With windows system control software,automatic storage of data and automatic calculation of test results.",
        "Servo measurement and control system, can achieve constant speed, constant loading, constant force value, more stable control.",
        "The machine adopts high-precision digital servo valve to control loading, with higher precision and more stable data.",
        "Oil source control cabinet design humanized, more ergonomic, more convenient operation."
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
          "label": "Maximum test force(KN)",
          "value": "600"
        },
        {
          "label": "Effective measurement range",
          "value": "10%～100%"
        },
        {
          "label": "Accuracy of load indication value",
          "value": "Level 1"
        },
        {
          "label": "Stretching space (mm)",
          "value": "690"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "620"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0-15"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "13-26、26-40"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "170"
        },
        {
          "label": "Upper pressure plate size(mm)",
          "value": "Φ220"
        },
        {
          "label": "Lower pressure plate size(mm)",
          "value": "Φ230"
        },
        {
          "label": "Distance between two pillars in tension and",
          "value": ""
        },
        {
          "label": "compression space(mm)",
          "value": "510"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "100"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": ""
        },
        {
          "label": "",
          "value": "240"
        },
        {
          "label": "Total motor power(kW)",
          "value": "2.1"
        },
        {
          "label": "Supply Voltage",
          "value": "AC380V±10%,50-60Hz"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "820×600×2000"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "600×550×1400"
        },
        {
          "label": "Overall weight(kg)",
          "value": "2400"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P015",
      "name": "Electro-hydraulic Servo Universal Material Testing Machine",
      "model": "WAW-1000B",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WAW-1000B.png",
      "image": "myImages/WAW-1000B-Image.png",
      "description": "This product is suitable for metal, non-metal and composite materials,components of tensile,  compression, bending, shear and other mechanical properties testing.The product adopts the under-mounted cylinder, microcomputer control, electro-hydraulic servo, with high precision, simple operation,convenient,large data storage capacity and other advantages.",
      "features": [
        "The tester adopts four columns and two wire rod frame,\"well\"  structure, stronger steel,more stable.",
        "The machine adopts three closed shields, effective protection against test  piece debris, high safety performance.",
        "From the previous semi-circular jaws to triangular hydraulic jaws, so that the test piece clamping more tightly, not easy to loosen.",
        "Standard with upper/lower pressure plate and bending support,can do compression, bending test, more functional, more comprehensive.",
        "Oil cylinder is placed under, no oil leakage, stable operation.",
        "Adopt high precision photoelectric encoder, higher displacement accuracy and more stable.",
        "With windows system control software,automatic storage of data and automatic calculation of test results.",
        "Servo measurement and control system, can achieve constant speed, constant loading, constant force value, more stable control.",
        "The machine adopts high-precision digital servo valve to control loading, with higher precision and more stable data.",
        "Oil source control cabinet design humanized, more ergonomic, more convenient operation."
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
          "label": "Maximum test force(KN)",
          "value": "1000"
        },
        {
          "label": "Effective measurement range",
          "value": "10%～100%"
        },
        {
          "label": "Accuracy of load indication value",
          "value": "Level 1"
        },
        {
          "label": "Stretching space (mm)",
          "value": "690"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "620"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0-40"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "14-32、30-50"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "170"
        },
        {
          "label": "Upper pressure plate size(mm)",
          "value": "Φ220"
        },
        {
          "label": "Lower pressure plate size(mm)",
          "value": "Φ230"
        },
        {
          "label": "Distance between two pillars in tension and",
          "value": ""
        },
        {
          "label": "compression space(mm)",
          "value": "510"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "100"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": ""
        },
        {
          "label": "",
          "value": "240"
        },
        {
          "label": "Total motor power(kW)",
          "value": "2.1"
        },
        {
          "label": "Supply Voltage",
          "value": "AC380V±10%,50-60Hz"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "940×650×2080"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "600×550×1400"
        },
        {
          "label": "Overall weight(kg)",
          "value": "2400"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P016",
      "name": "Electro-hydraulic Servo Universal Material Testing Machine",
      "model": "WAW-2000B",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WAW-2000B.png",
      "image": "myImages/WAW-2000B-Image.png",
      "description": "This product is suitable for metal, non-metal and composite materials,components of tensile,  compression, bending, shear and other mechanical properties testing.The product adopts the under-mounted cylinder, microcomputer control, electro-hydraulic servo, with high precision, simple operation,convenient,large data storage capacity and other advantages.",
      "features": [
        "The tester adopts four columns and two wire rod frame,\"well\"  structure, stronger steel,more stable.",
        "The machine adopts three closed shields, effective protection against test  piece debris, high safety performance.",
        "From the previous semi-circular jaws to triangular hydraulic jaws, so that the test piece clamping more tightly, not easy to loosen.",
        "Standard with upper/lower pressure plate and bending support,can do compression, bending test, more functional, more comprehensive.",
        "Oil cylinder is placed under, no oil leakage, stable operation.",
        "Adopt high precision photoelectric encoder, higher displacement accuracy and more stable.",
        "With windows system control software,automatic storage of data and automatic calculation of test results.",
        "Servo measurement and control system, can achieve constant speed, constant loading, constant force value, more stable control.",
        "The machine adopts high-precision digital servo valve to control loading, with higher precision and more stable data.",
        "Oil source control cabinet design humanized, more ergonomic, more convenient operation."
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
          "label": "Maximum test force(KN)",
          "value": "2000"
        },
        {
          "label": "Effective measurement range",
          "value": "10%～100%"
        },
        {
          "label": "Accuracy of load indication value",
          "value": "Level 1"
        },
        {
          "label": "Stretching space (mm)",
          "value": "695"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "605"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0-50"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "20-40、40-70"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "180"
        },
        {
          "label": "Upper pressure plate size(mm)",
          "value": "Φ220"
        },
        {
          "label": "Lower pressure plate size(mm)",
          "value": "Φ230"
        },
        {
          "label": "Distance between two pillars in tension and",
          "value": ""
        },
        {
          "label": "compression space(mm)",
          "value": "610"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "100"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": ""
        },
        {
          "label": "",
          "value": "240"
        },
        {
          "label": "Total motor power(kW)",
          "value": "3.55"
        },
        {
          "label": "Supply Voltage",
          "value": "AC380V±10%,50-60Hz"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "1200×800×2685"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "600×550×1400"
        },
        {
          "label": "Overall weight(kg)",
          "value": "4000"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P017",
      "name": "Screen Display Universal Material Testing Machine",
      "model": "WEW- 100B",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WEW-100B.png",
      "image": "myImages/WEW- 100B-Image.png",
      "description": "The tester adopts the design of hydraulic force, computer display, main body  and force meter subposition, with easy operation, stable and reliable work, high test  accuracy, smooth force and other characteristics. The equipment is suitable for metal, cement, concrete, plastic and other materials tensile, compression, bending, shear test.",
      "features": [
        "The machine adopts high precision displacement sensor, the data is accurate.",
        "Adopt high resolution collection system,fast data collection speed,high accuracy.",
        "Adopt the design of hydraulic manual loading, computer display, main body and force meter subposition, easy operation and smooth force addition."
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
          "label": "Maximum test force(KN)",
          "value": "100"
        },
        {
          "label": "Range and measurement range(KN)",
          "value": "10～100"
        },
        {
          "label": "Relative error of value",
          "value": "±1%"
        },
        {
          "label": "Stretching space (mm)",
          "value": "480"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "480"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0- 15"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "10-20"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "120"
        },
        {
          "label": "Upper and lower platen size(mm)",
          "value": "Φ176/Φ176"
        },
        {
          "label": "Distance between two pillars in tension and compression space(mm)",
          "value": "420"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "100"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": "240"
        },
        {
          "label": "Total motor power(Kw)",
          "value": "1.2"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "730×550×1660"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "1000×700×850"
        },
        {
          "label": "Overall weight(kg)",
          "value": "1600"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P018",
      "name": "Screen Display Universal Material Testing Machine",
      "model": "WEW- 300B",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WEW-300B.png",
      "image": "myImages/WEW- 300B-Image.png",
      "description": "The tester adopts the design of hydraulic force, computer display, main body  and force meter subposition, with easy operation, stable and reliable work, high test  accuracy, smooth force and other characteristics. The equipment is suitable for metal, cement, concrete, plastic and other materials tensile, compression, bending, shear test.",
      "features": [
        "The machine adopts high precision displacement sensor, the data is accurate.",
        "Adopt high resolution collection system,fast data collection speed,high accuracy.",
        "Adopt the design of hydraulic manual loading, computer display, main body and force meter subposition, easy operation and smooth force addition."
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
          "label": "Maximum test force(KN)",
          "value": "300"
        },
        {
          "label": "Range and measurement range(KN)",
          "value": "30～300"
        },
        {
          "label": "Relative error of value",
          "value": "±1%"
        },
        {
          "label": "Stretching space (mm)",
          "value": "480"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "480"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0- 15"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "10-20、20-32"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "120"
        },
        {
          "label": "Upper and lower platen size(mm)",
          "value": "Φ180/Φ180"
        },
        {
          "label": "Distance between two pillars in tension and compression space(mm)",
          "value": "420"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "100"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": "240"
        },
        {
          "label": "Total motor power(Kw)",
          "value": "1.2"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "730×600×1840"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "1000×700×850"
        },
        {
          "label": "Overall weight(kg)",
          "value": "1800"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P019",
      "name": "Screen Display Universal Material Testing Machine",
      "model": "WEW- 600B",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WEW-600B.png",
      "image": "myImages/WEW- 600B-Image.png",
      "description": "The tester adopts the design of hydraulic force, computer display, main body  and force meter subposition, with easy operation, stable and reliable work, high test  accuracy, smooth force and other characteristics. The equipment is suitable for metal, cement, concrete, plastic and other materials tensile, compression, bending, shear test.",
      "features": [
        "The machine adopts high precision displacement sensor, the data is accurate.",
        "Adopt high resolution collection system,fast data collection speed,high accuracy.",
        "Adopt the design of hydraulic manual loading, computer display, main body and force meter subposition, easy operation and smooth force addition."
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
          "label": "Maximum test force(KN)",
          "value": "600"
        },
        {
          "label": "Range and measurement range(KN)",
          "value": "60～600"
        },
        {
          "label": "Relative error of value",
          "value": "±1%"
        },
        {
          "label": "Stretching space (mm)",
          "value": "690"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "620"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0- 15"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "13-26、26-40"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "170"
        },
        {
          "label": "Upper and lower platen size(mm)",
          "value": "Φ220/Φ230"
        },
        {
          "label": "Distance between two pillars in tension and compression space(mm)",
          "value": "510"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "100"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": "240"
        },
        {
          "label": "Total motor power(Kw)",
          "value": "1.8"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "820×600×2000"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "1000×700×850"
        },
        {
          "label": "Overall weight(kg)",
          "value": "2100"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P020",
      "name": "Screen Display Universal Material Testing Machine",
      "model": "WEW- 1000B",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WEW-1000B.png",
      "image": "myImages/WEW- 1000B-Image.png",
      "description": "The tester adopts the design of hydraulic force, computer display, main body  and force meter subposition, with easy operation, stable and reliable work, high test  accuracy, smooth force and other characteristics. The equipment is suitable for metal, cement, concrete, plastic and other materials tensile, compression, bending, shear test.",
      "features": [
        "The machine adopts high precision displacement sensor, the data is accurate.",
        "Adopt high resolution collection system,fast data collection speed,high accuracy.",
        "Adopt the design of hydraulic manual loading, computer display, main body and force meter subposition, easy operation and smooth force addition."
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
          "label": "Maximum test force(KN)",
          "value": "1000"
        },
        {
          "label": "Range and measurement range(KN)",
          "value": "100～1000"
        },
        {
          "label": "Relative error of value",
          "value": "±1%"
        },
        {
          "label": "Stretching space (mm)",
          "value": "690"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "620"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0- 40"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "14-32、30-50"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "170"
        },
        {
          "label": "Upper and lower platen size(mm)",
          "value": "Φ220/Φ230"
        },
        {
          "label": "Distance between two pillars in tension and compression space(mm)",
          "value": "510"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "100"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": "240"
        },
        {
          "label": "Total motor power(Kw)",
          "value": "1.8"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "940×650×2080"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "1000×700×850"
        },
        {
          "label": "Overall weight(kg)",
          "value": "2400"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P021",
      "name": "Screen Display Universal Material Testing Machine",
      "model": "WEW- 2000B",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WEW-2000B.png",
      "image": "myImages/WEW- 2000B-Image.png",
      "description": "The tester adopts the design of hydraulic force, computer display, main body  and force meter subposition, with easy operation, stable and reliable work, high test  accuracy, smooth force and other characteristics. The equipment is suitable for metal, cement, concrete, plastic and other materials tensile, compression, bending, shear test.",
      "features": [
        "The machine adopts high precision displacement sensor, the data is accurate.",
        "Adopt high resolution collection system,fast data collection speed,high accuracy.",
        "Adopt the design of hydraulic manual loading, computer display, main body and force meter subposition, easy operation and smooth force addition."
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
          "label": "Maximum test force(KN)",
          "value": "2000"
        },
        {
          "label": "Range and measurement range(KN)",
          "value": "200～2000"
        },
        {
          "label": "Relative error of value",
          "value": "±1%"
        },
        {
          "label": "Stretching space (mm)",
          "value": "790"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "720"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0- 40"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "20-40、40-60"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "180"
        },
        {
          "label": "Upper and lower platen size(mm)",
          "value": "Φ220/Φ230"
        },
        {
          "label": "Distance between two pillars in tension and compression space(mm)",
          "value": "610"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "100"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": "240"
        },
        {
          "label": "Total motor power(Kw)",
          "value": "3.55"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "1200×800×2940"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "1000×700×850"
        },
        {
          "label": "Overall weight(kg)",
          "value": "4000"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P022",
      "name": "Digital Display Universal Material Testing Machine",
      "model": "WE- 100B",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WE-100B.png",
      "image": "myImages/WE- 100B-Image.png",
      "description": "The testing machine is also known as tensile machine, is powered by hydraulic pressure,  mainly suitable for doing metal material tensile, compression and other tests, equipped with appropriate fixtures, can also be used to conduct non-metallic materials tensile, compression,  bending and shear test to test the mechanical properties of materials, in the materials industry, metallurgy, non-ferrous metallurgy,building materials, machinery industry, transportation, etc. have a wide range of applications.",
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
          "label": "Maximum test force(KN)",
          "value": "100"
        },
        {
          "label": "Range and measurement range(KN)",
          "value": "10～100"
        },
        {
          "label": "Relative error of value",
          "value": "±1%"
        },
        {
          "label": "Stretching space (mm)",
          "value": "480"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "480"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0～15"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "10～20"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "120"
        },
        {
          "label": "Upper and lower platen size(mm)",
          "value": "Φ176×Φ176"
        },
        {
          "label": "Distance between two pillars in tension and compression space(mm)",
          "value": "420"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "100"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": "240"
        },
        {
          "label": "Total motor power(kW)",
          "value": "1.3"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "730×550×1660"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "530×500×1270"
        },
        {
          "label": "Overall weight(kg)",
          "value": "1600"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P023",
      "name": "Digital Display Universal Material Testing Machine",
      "model": "WE- 300B",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WE-300B.png",
      "image": "myImages/WE- 300B-Image.png",
      "description": "The testing machine is also known as tensile machine, is powered by hydraulic pressure,  mainly suitable for doing metal material tensile, compression and other tests, equipped with appropriate fixtures, can also be used to conduct non-metallic materials tensile, compression,  bending and shear test to test the mechanical properties of materials, in the materials industry, metallurgy, non-ferrous metallurgy,building materials, machinery industry, transportation, etc. have a wide range of applications.",
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
          "label": "Maximum test force(KN)",
          "value": "300"
        },
        {
          "label": "Range and measurement range(KN)",
          "value": "30～300"
        },
        {
          "label": "Relative error of value",
          "value": "±1%"
        },
        {
          "label": "Stretching space (mm)",
          "value": "480"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "480"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0～15"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "10～20、20～32"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "120"
        },
        {
          "label": "Upper and lower platen size(mm)",
          "value": "Φ180×Φ180"
        },
        {
          "label": "Distance between two pillars in tension and compression space(mm)",
          "value": "420"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "100"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": "240"
        },
        {
          "label": "Total motor power(kW)",
          "value": "1.3"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "730×600×1840"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "530×500×1270"
        },
        {
          "label": "Overall weight(kg)",
          "value": "1800"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P024",
      "name": "Digital Display Universal Material Testing Machine",
      "model": "WE- 600B",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WE-600B.png",
      "image": "myImages/WE- 600B-Image.png",
      "description": "The testing machine is also known as tensile machine, is powered by hydraulic pressure,  mainly suitable for doing metal material tensile, compression and other tests, equipped with appropriate fixtures, can also be used to conduct non-metallic materials tensile, compression,  bending and shear test to test the mechanical properties of materials, in the materials industry, metallurgy, non-ferrous metallurgy,building materials, machinery industry, transportation, etc. have a wide range of applications.",
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
          "label": "Maximum test force(KN)",
          "value": "600"
        },
        {
          "label": "Range and measurement range(KN)",
          "value": "60～600"
        },
        {
          "label": "Relative error of value",
          "value": "±1%"
        },
        {
          "label": "Stretching space (mm)",
          "value": "690"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "620"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0～15"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "13～26、26～40"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "170"
        },
        {
          "label": "Upper and lower platen size(mm)",
          "value": "Φ220×Φ230"
        },
        {
          "label": "Distance between two pillars in tension and compression space(mm)",
          "value": "510"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "100"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": "240"
        },
        {
          "label": "Total motor power(kW)",
          "value": "1.8"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "820×600×2000"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "530×500×1270"
        },
        {
          "label": "Overall weight(kg)",
          "value": "2100"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P025",
      "name": "Digital Display Universal Material Testing Machine",
      "model": "WE- 1000B",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WE-1000B.png",
      "image": "myImages/WE- 1000B-Image.png",
      "description": "The testing machine is also known as tensile machine, is powered by hydraulic pressure,  mainly suitable for doing metal material tensile, compression and other tests, equipped with appropriate fixtures, can also be used to conduct non-metallic materials tensile, compression,  bending and shear test to test the mechanical properties of materials, in the materials industry, metallurgy, non-ferrous metallurgy,building materials, machinery industry, transportation, etc. have a wide range of applications.",
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
          "label": "Maximum test force(KN)",
          "value": "1000"
        },
        {
          "label": "Range and measurement range(KN)",
          "value": "100～1000"
        },
        {
          "label": "Relative error of value",
          "value": "±1%"
        },
        {
          "label": "Stretching space (mm)",
          "value": "690"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "620"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0～40"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "14～32、30～50"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "170"
        },
        {
          "label": "Upper and lower platen size(mm)",
          "value": "Φ220×Φ230"
        },
        {
          "label": "Distance between two pillars in tension and compression space(mm)",
          "value": "510"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "100"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": "240"
        },
        {
          "label": "Total motor power(kW)",
          "value": "1.8"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "940×650×2080"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "530×500×1270"
        },
        {
          "label": "Overall weight(kg)",
          "value": "2400"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P026",
      "name": "Digital Display Universal Material Testing Machine",
      "model": "WE- 2000B",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WE-2000B.png",
      "image": "myImages/WE- 2000B-Image.png",
      "description": "The testing machine is also known as tensile machine, is powered by hydraulic pressure,  mainly suitable for doing metal material tensile, compression and other tests, equipped with appropriate fixtures, can also be used to conduct non-metallic materials tensile, compression,  bending and shear test to test the mechanical properties of materials, in the materials industry, metallurgy, non-ferrous metallurgy,building materials, machinery industry, transportation, etc. have a wide range of applications.",
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
          "label": "Maximum test force(KN)",
          "value": "2000"
        },
        {
          "label": "Range and measurement range(KN)",
          "value": "200～2000"
        },
        {
          "label": "Relative error of value",
          "value": "±1%"
        },
        {
          "label": "Stretching space (mm)",
          "value": "695"
        },
        {
          "label": "Compressed Space (mm)",
          "value": "605"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0～50"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "20～40、40～70"
        },
        {
          "label": "Working piston stroke(mm)",
          "value": "180"
        },
        {
          "label": "Upper and lower platen size(mm)",
          "value": "Φ220×Φ230"
        },
        {
          "label": "Distance between two pillars in tension and compression space(mm)",
          "value": "610"
        },
        {
          "label": "Maximum rise speed of table plate(mm/min)",
          "value": "100"
        },
        {
          "label": "Maximum lifting speed of moving beam(mm/min)",
          "value": "240"
        },
        {
          "label": "Total motor power(kW)",
          "value": "3.55"
        },
        {
          "label": "Main external dimensions(mm)",
          "value": "1200×800×2685"
        },
        {
          "label": "Dimension of force measuring cabinet(mm)",
          "value": "530×500×1270"
        },
        {
          "label": "Overall weight(kg)",
          "value": "4000"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P027",
      "name": "Electronic Universal Material Testing Machine",
      "model": "WDW-100",
      "category": "Electromechanical Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WDW-20.png",
      "image": "myImages/WDW-100-Image.png",
      "description": "This product is suitable for testing and analyzing the mechanical properties of various metals, non-metals and composite materials, and can obtain test data such as maximum test force value, fracture force value, yield strength, upper and lower yield strength, tensile strength,  compressive strength, elongation at break, tensile modulus of elasticity and bending modulus of elasticity of test materials.",
      "features": [
        "Safety position and experimental position height arbitrary lock.",
        "Automatic protection when exceeding the maximum load,software limit and electronic limit double protection."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Maximum test force",
          "value": "100KN"
        },
        {
          "label": "Accuracy grade",
          "value": "Level 1 (can be customized to 0.5 on request)"
        },
        {
          "label": "Test force measurement range",
          "value": "1% to 100% FS throughout the whole process without sub-grade"
        },
        {
          "label": "Relative error of the test force value",
          "value": "±1% or less"
        },
        {
          "label": "Test force resolution",
          "value": "1/±300000 of the maximum test force throughout the resolution remains unchanged"
        },
        {
          "label": "Deformation measurement range",
          "value": "0.2%～100%FS"
        },
        {
          "label": "Relative error of deformation value",
          "value": "Within ±0.5% of the indicated value"
        },
        {
          "label": "Deformation resolution",
          "value": "1/±300000 of the maximum deformation"
        },
        {
          "label": "Relative error of displacement value",
          "value": "Within ±0.5% of the displayed value"
        },
        {
          "label": "Displacement resolution",
          "value": "0.025µm"
        },
        {
          "label": "Force control rate adjustment range",
          "value": "0.01~5%FS/S"
        },
        {
          "label": "Relative error of force-controlled rate",
          "value": "Within ±1% of the set value"
        },
        {
          "label": "Deformation rate adjustment range",
          "value": "0.02~5%FS/S"
        },
        {
          "label": "Relative error of deformation control rate",
          "value": "Within ±1% of the set value"
        },
        {
          "label": "Cross-beam speed adjustment range",
          "value": "0.01～500mm/min"
        },
        {
          "label": "Control range of constant force, constant deformation and constant displacement",
          "value": "0.5%～100%FS"
        },
        {
          "label": "Control accuracy of constant force, constant deformation and constant displacement",
          "value": "Within ±1% of the set value when the set value is <10%FS;"
        },
        {
          "label": "Within ±0.1% of the set value when the set value is ≥10%FS",
          "value": ""
        },
        {
          "label": "Effective tensile space (without jig)",
          "value": "800mm"
        },
        {
          "label": "Effective test width",
          "value": "400mm"
        },
        {
          "label": "Host size",
          "value": "1000 × 800 × 2200 (mm)"
        },
        {
          "label": "Power supply",
          "value": "220V±10%, 2000W"
        },
        {
          "label": "Host weight",
          "value": "About 760kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P028",
      "name": "Electronic Universal Material Testing Machine",
      "model": "WDW-50",
      "category": "Electromechanical Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WDW-20.png",
      "image": "myImages/WDW-50-Image.png",
      "description": "This product is suitable for testing and analyzing the mechanical properties of various metals, non-metals and composite materials, and can obtain test data such as maximum test force value, fracture force value, yield strength, upper and lower yield  strength, tensile  strength,  compressive strength, elongation at break, tensile modulus of elasticity and bending modulus of elasticity of test materials.",
      "features": [
        "Safety position and experimental position height arbitrary lock.",
        "Automatic protection when exceeding the maximum load, software limit and electronic limit double protection."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Maximum test force",
          "value": "50KN"
        },
        {
          "label": "Accuracy grade",
          "value": "Level 1 (can be customized to 0.5 on request)"
        },
        {
          "label": "Test force measurement range",
          "value": "1% to 100% FS throughout the whole process without sub-grade"
        },
        {
          "label": "Relative error of the test force value",
          "value": "±1% or less"
        },
        {
          "label": "Test force resolution",
          "value": "1/±300000 of the maximum test force throughout the resolution remains unchanged"
        },
        {
          "label": "Deformation measurement range",
          "value": "0.2%～100%FS"
        },
        {
          "label": "Relative error of deformation value",
          "value": "Within ±0.5% of the indicated value"
        },
        {
          "label": "Deformation resolution",
          "value": "1/±300000 of the maximum deformation"
        },
        {
          "label": "Relative error of displacement value",
          "value": "Within ±0.5% of the displayed value"
        },
        {
          "label": "Displacement resolution",
          "value": "0.025µm"
        },
        {
          "label": "Force control rate adjustment range",
          "value": "0.01~5%FS/S"
        },
        {
          "label": "Relative error of force-controlled rate",
          "value": "Within ±1% of the set value"
        },
        {
          "label": "Deformation rate adjustment range",
          "value": "0.02~5%FS/S"
        },
        {
          "label": "Relative error of deformation control rate",
          "value": "Within ±1% of the set value"
        },
        {
          "label": "Cross-beam speed adjustment range",
          "value": "0.01～500mm/min"
        },
        {
          "label": "Control range of constant force, constant deformation and constant displacement",
          "value": "0.5%～100%FS"
        },
        {
          "label": "Control accuracy of constant force, constant deformation and constant displacement",
          "value": "Within ±1% of the set value when the set value is <10%FS;"
        },
        {
          "label": "Within ±0.1% of the set value when the set value is ≥10%FS",
          "value": ""
        },
        {
          "label": "Effective tensile space (without jig)",
          "value": "800mm"
        },
        {
          "label": "Effective test width",
          "value": "400mm"
        },
        {
          "label": "Host size",
          "value": "900 × 500 × 1900 (mm)"
        },
        {
          "label": "Power supply",
          "value": "220V±10%, 750W"
        },
        {
          "label": "Host weight About",
          "value": "230kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P029",
      "name": "Electronic Universal Material Testing Machine",
      "model": "WDW-10",
      "category": "Electromechanical Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WDW-20.png",
      "image": "myImages/WDW-10-Image.png",
      "description": "This product is suitable for testing and analyzing the mechanical properties of various metals, non-metals and composite materials, and can obtain test data such as maximum test force value, fracture force value, yield strength, upper and lower yield strength, tensile strength,  compressive strength, elongation at break, tensile modulus of elasticity and bending modulus of elasticity of test materials.",
      "features": [
        "Safety position and experimental position height arbitrary lock.",
        "Automatic protection when exceeding the maximum load, software limit and electronic limit double protection."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Maximum test force",
          "value": "10KN"
        },
        {
          "label": "Accuracy grade",
          "value": "Level 1 (can be customized to 0.5 on request)"
        },
        {
          "label": "Test force measurement range",
          "value": "1% to 100% FS throughout the whole process without sub-grade"
        },
        {
          "label": "Relative error of the test force value",
          "value": "±1% or less"
        },
        {
          "label": "Test force resolution",
          "value": "1/±300000 of the maximum test force throughout the resolution remains unchanged"
        },
        {
          "label": "Deformation measurement range",
          "value": "0.2%～100%FS"
        },
        {
          "label": "Relative error of deformation value",
          "value": "Within ±0.5% of the indicated value"
        },
        {
          "label": "Deformation resolution",
          "value": "1/±300000 of the maximum deformation"
        },
        {
          "label": "Relative error of displacement value",
          "value": "Within ±0.5% of the displayed value"
        },
        {
          "label": "Displacement resolution",
          "value": "0.025µm"
        },
        {
          "label": "Force control rate adjustment range",
          "value": "0.01~5%FS/S"
        },
        {
          "label": "Relative error of force-controlled rate",
          "value": "Within ±1% of the set value"
        },
        {
          "label": "Deformation rate adjustment range",
          "value": "0.02~5%FS/S"
        },
        {
          "label": "Relative error of deformation control rate Within ±1% of the set value",
          "value": ""
        },
        {
          "label": "Cross-beam speed adjustment range",
          "value": "0.01～500mm/min"
        },
        {
          "label": "Control range of constant force, constant deformation and constant displacement",
          "value": "0.5%～100%FS"
        },
        {
          "label": "Control accuracy of constant force, constant deformation and constant displacement",
          "value": "Within ±1% of the set value when the set value is <10%FS;"
        },
        {
          "label": "Within ±0.1% of the set value when the set value is ≥10%FS",
          "value": ""
        },
        {
          "label": "Effective tensile space (without jig)",
          "value": "800mm"
        },
        {
          "label": "Effective test width",
          "value": "400mm"
        },
        {
          "label": "Host size",
          "value": "800 × 450 × 1600 (mm)"
        },
        {
          "label": "Power supply",
          "value": "220V±10%, 400W"
        },
        {
          "label": "Host weight About",
          "value": "190kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P030",
      "name": "Electronic Universal Material Testing Machine",
      "model": "WDW-20",
      "category": "Electromechanical Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WDW-20.png",
      "image": "myImages/WDW-20-Image.png",
      "description": "This product is suitable for testing and analyzing the mechanical properties of various metals, non-metals and composite materials, and can obtain test data such as maximum test force value, fracture force value, yield strength, upper and lower yield strength, tensile strength,  compressive strength, elongation at break, tensile modulus of elasticity and bending modulus of elasticity of test materials.",
      "features": [
        "Safety position and experimental position height arbitrary lock.",
        "Automatic protection when exceeding the maximum load, software limit and electronic limit double protection."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Maximum test force",
          "value": "20KN"
        },
        {
          "label": "Accuracy grade",
          "value": "Level 1 (can be customized to 0.5 on request)"
        },
        {
          "label": "Test force measurement range",
          "value": "1% to 100% FS throughout the whole process without sub-grade"
        },
        {
          "label": "Relative error of the test force value",
          "value": "±1% or less"
        },
        {
          "label": "Test force resolution",
          "value": "1/±300000 of the maximum test force throughout the resolution remains unchanged"
        },
        {
          "label": "Deformation measurement range",
          "value": "0.2%～100%FS"
        },
        {
          "label": "Relative error of deformation value",
          "value": "Within ±0.5% of the indicated value"
        },
        {
          "label": "Deformation resolution",
          "value": "1/±300000 of the maximum deformation"
        },
        {
          "label": "Relative error of displacement value",
          "value": "Within ±0.5% of the displayed value"
        },
        {
          "label": "Displacement resolution",
          "value": "0.025µm"
        },
        {
          "label": "Force control rate adjustment range",
          "value": "0.01~5%FS/S"
        },
        {
          "label": "Relative error of force-controlled rate",
          "value": "Within ±1% of the set value"
        },
        {
          "label": "Deformation rate adjustment range",
          "value": "0.02~5%FS/S"
        },
        {
          "label": "Relative error of deformation control rate Within ±1% of the set value",
          "value": ""
        },
        {
          "label": "Cross-beam speed adjustment range",
          "value": "0.01～500mm/min"
        },
        {
          "label": "Control range of constant force, constant deformation and constant displacement",
          "value": "0.5%～100%FS"
        },
        {
          "label": "Control accuracy of constant force, constant deformation and constant displacement",
          "value": "Within ±1% of the set value when the set value is <10%FS;"
        },
        {
          "label": "Within ±0.1% of the set value when the set value is ≥10%FS",
          "value": ""
        },
        {
          "label": "Effective tensile space (without jig)",
          "value": "800mm"
        },
        {
          "label": "Effective test width",
          "value": "400mm"
        },
        {
          "label": "Host size",
          "value": "800 × 450 × 1600 (mm)"
        },
        {
          "label": "Power supply",
          "value": "220V±10%, 400W"
        },
        {
          "label": "Host weight About",
          "value": "190kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P031",
      "name": "Electronic Universal Material Testing Machine",
      "model": "WDW-5",
      "category": "Electromechanical Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WDW-5.png",
      "image": "myImages/WDW-5-Image.png",
      "description": "This product is suitable for testing and analyzing the mechanical properties of various metals, non-metals and composite materials, and can obtain test data such as maximum test force value, fracture force value, yield strength, upper and lower yield strength, tensile strength,  compressive strength, elongation at break, tensile modulus of elasticity and bending modulus of elasticity of test materials.",
      "features": [
        "Safety position and experimental position height arbitrary lock.",
        "Automatic protection when exceeding the maximum load, software limit and electronic limit double protection.",
        "Microcomputer control, real-time display of  graphs, automatic generation of reports."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Maximum load",
          "value": "5KN"
        },
        {
          "label": "Accuracy grade",
          "value": "Level 1 (can be customized to 0.5 on request)"
        },
        {
          "label": "Test force measurement range",
          "value": "1% to 100% FS throughout the whole process without sub-grade"
        },
        {
          "label": "Relative error of the test force value",
          "value": "Within ±1%"
        },
        {
          "label": "Test force resolution",
          "value": "1/±300000 of the test force"
        },
        {
          "label": "Displacement resolution",
          "value": "0.025µm"
        },
        {
          "label": "Relative error of displacement value",
          "value": "±1% of the indicated value"
        },
        {
          "label": "Force control rate adjustment range",
          "value": "0.01~5%FS/S"
        },
        {
          "label": "Relative error of force control rate",
          "value": "Within ±1% of the set value"
        },
        {
          "label": "Deformation resolving power",
          "value": "1/±300000 of the maximum deformation"
        },
        {
          "label": "Relative error of deformation value",
          "value": "±1% of the displayed value"
        },
        {
          "label": "Cross-beam speed adjustment range",
          "value": "0.01～500mm/min"
        },
        {
          "label": "Effective tensile space",
          "value": "800mm"
        },
        {
          "label": "Effective test width",
          "value": "100mm"
        },
        {
          "label": "Power supply",
          "value": "220V±10%,0.4kW"
        },
        {
          "label": "Dimension of main machine",
          "value": "600×380×1500mm"
        },
        {
          "label": "Weight About",
          "value": "80kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P032",
      "name": "Electronic Universal Material Testing Machine",
      "model": "WDW-S10",
      "category": "Electromechanical Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WDW-S10.png",
      "image": "myImages/WDW-S10-Image.png",
      "description": "This product is suitable for testing and analyzing the mechanical properties of various metals, non-metals and composite materials, and can obtain test data such as maximum test force value, fracture force value, yield strength, upper and lower yield  strength, tensile strength,  compressive strength, elongation at break, tensile modulus of elasticity and bending modulus of elasticity of test materials.",
      "features": [
        "Single-arm design, cementitious sand special models.",
        "Safety position and experimental position height arbitrary lock.",
        "Automatic protection when exceeding the maximum load, software limit and electronic limit double protection.",
        "One button automatic operation, full touch screen control,can realize positioning and automatic return."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Control mode",
          "value": "On-screen control"
        },
        {
          "label": "Maximum load",
          "value": "10KN"
        },
        {
          "label": "Accuracy grade",
          "value": "Level 1"
        },
        {
          "label": "Relative error of the test force value",
          "value": "Within ±1%"
        },
        {
          "label": "Test force resolution",
          "value": "1/±300000 of the test force"
        },
        {
          "label": "Deformation measurement range",
          "value": "0.5%-100%FS"
        },
        {
          "label": "Cross-beam speed adjustment range",
          "value": "0.01～500mm/min"
        },
        {
          "label": "Effective tensile space",
          "value": "800mm"
        },
        {
          "label": "Effective test width",
          "value": "100mm"
        },
        {
          "label": "Power supply",
          "value": "220V±10%,0.4kW"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P033",
      "name": "Electronic Universal Material Testing Machine(Special model for cement mortar)",
      "model": "WDW-S05",
      "category": "Electromechanical Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WDW-S05.png",
      "image": "myImages/WDW-S05-Image.png",
      "description": "This product is suitable for testing and analyzing the mechanical properties of various metals, non-metals and composite materials, and can obtain test data such as maximum test force value, fracture force value, yield strength, upper and lower yield strength, tensile  strength,  compressive strength, elongation at break, tensile modulus of elasticity and bending modulus of elasticity of test materials.",
      "features": [
        "Single-arm design, cementitious sand special models.",
        "Safety position and experimental position height arbitrary lock.",
        "Automatic protection when exceeding the maximum load, software limit and electronic limit double protection.",
        "One button automatic operation,full touch screen control,can realize positioning and automatic return."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Maximum load",
          "value": "5kN"
        },
        {
          "label": "Accuracy level",
          "value": "Level 1"
        },
        {
          "label": "Test force resolution",
          "value": "500,000 yards"
        },
        {
          "label": "Displacement measurement accuracy",
          "value": "within ±1% of the indication value"
        },
        {
          "label": "Deformation measurement accuracy",
          "value": "within ±1% of the indication value"
        },
        {
          "label": "Test bench control",
          "value": "Full touch screen control, capable of positioning and automatic return"
        },
        {
          "label": "Overload protection",
          "value": "Automatic protection when the maximum load is exceeded"
        },
        {
          "label": "Test force measurement range",
          "value": "1%~100%FS"
        },
        {
          "label": "Deformation measurement range",
          "value": "1%~100% FS"
        },
        {
          "label": "Effective stretching space",
          "value": "800mm"
        },
        {
          "label": "Effective test width",
          "value": "100mm"
        },
        {
          "label": "Speed range",
          "value": "5-500mm/min"
        },
        {
          "label": "Machine dimensions",
          "value": "500×450×1350mm"
        },
        {
          "label": "Power supply",
          "value": "220V,50-60Hz"
        },
        {
          "label": "Weight About",
          "value": "90kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P034",
      "name": "Constant Loading Pressure Testing Machine(Large Frame) Jinhua Type",
      "model": "TSY-2000A",
      "category": "Compression Testing Machine Series",
      "thumbnail": "/assets/images/TSY-2000A.png",
      "image": "myImages/TSY-2000A-Image.png",
      "description": "This product is suitable for the compressive strength test of  brick, stone, cement, concrete and other materials, and can also be used for the compressive performance test of other materials.",
      "features": [
        "The hydraulic pump adopts an axial five-piston ultra-high pressure pump, which works smoothly and has low noise;",
        "The control valve adopts high-precision digital micro-flow valve with high control precision;",
        "The sensor adopts a pressure sensor, which has good reliability;",
        "The principle of automatic loading is adopted to strengthen the control of the loading rate."
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
          "label": "Maximum test force",
          "value": "2000kN"
        },
        {
          "label": "Measuring accuracy range",
          "value": "10% ~ 100% FS(no classification in the whole process)"
        },
        {
          "label": "Indication accuracy",
          "value": "≦±1%"
        },
        {
          "label": "Lo ading rate",
          "value": "0.3～0.8MPa"
        },
        {
          "label": "Loading rate accuracy",
          "value": "±5%"
        },
        {
          "label": "Upper/lower bearing plate size",
          "value": "Φ380/Φ280mm"
        },
        {
          "label": "Distance between upper and lower platens",
          "value": "330mm"
        },
        {
          "label": "Test space",
          "value": "400mm"
        },
        {
          "label": "Piston maximum stroke",
          "value": "100mm"
        },
        {
          "label": "Piston diameter",
          "value": "Φ320mm"
        },
        {
          "label": "Displacement rate control relative error",
          "value": "≦±1%"
        },
        {
          "label": "Host structure Screw electric adjustment",
          "value": ""
        },
        {
          "label": "Test force loading speed",
          "value": "0.02%～2%FS/s"
        },
        {
          "label": "Oil maximum pressure",
          "value": "25MPa"
        },
        {
          "label": "Machine power",
          "value": "1.8kW"
        },
        {
          "label": "Controller size",
          "value": "900×700×900 mm"
        },
        {
          "label": "Host size",
          "value": "850×840×1500mm"
        },
        {
          "label": "Weight",
          "value": "1800kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P035",
      "name": "Constant Loading Pressure Testing Machine",
      "model": "YAW-2000H",
      "category": "Compression Testing Machine Series",
      "thumbnail": "/assets/images/YAW-2000H.png",
      "image": "myImages/YAW-2000H-Image.png",
      "description": "This  product  is suitable for the compressive strength test of  brick, stone, cement, concrete and other materials, and can also be used for the compressive performance test of other materials. The product conforms to ISO, ASTM and other standards.",
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
          "label": "Test force (kN)",
          "value": "2000"
        },
        {
          "label": "Loading rate (MPa)",
          "value": "0.3～1.0,1.0 or above can be entered manually"
        },
        {
          "label": "Effective measurement range",
          "value": "10% to 100%"
        },
        {
          "label": "Accuracy of the load indication",
          "value": "Better than ±1% of indicated value"
        },
        {
          "label": "Distance between upper and lower platen (mm)",
          "value": "320"
        },
        {
          "label": "Pressure plate size(mm)",
          "value": "Φ300×Φ300"
        },
        {
          "label": "Piston stroke (mm)",
          "value": "50"
        },
        {
          "label": "Piston diameter (mm)",
          "value": "Φ250"
        },
        {
          "label": "Oil pressure (MPa)",
          "value": "40"
        },
        {
          "label": "Total power (kW)",
          "value": "1.1"
        },
        {
          "label": "Power supply",
          "value": "AC220V±10%, 60Hz"
        },
        {
          "label": "Main unit dimensions (mm)",
          "value": "580×500×1400"
        },
        {
          "label": "Overall dimension of control cabinet (mm)",
          "value": "560×550×1310"
        },
        {
          "label": "Weight(kg)",
          "value": "900"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P036",
      "name": "Constant Loading Pressure Testing Machine(Automatic) White Machine",
      "model": "YAW-2000S",
      "category": "Compression Testing Machine Series",
      "thumbnail": "/assets/images/YAW-2000S.png",
      "image": "myImages/YAW-2000S-Image.png",
      "description": "This product is suitable for the compressive strength test of  brick, stone, cement, concrete and other materials, and can also be used for the compressive performance test of other materials.",
      "features": [
        "The frame adopts the whole machine casting frame structure;",
        "Imported servo oil source;",
        "High-precision digital micro valve;",
        "Imported servo motor oil source, the oil temperature is not too high;",
        "The sensor uses a high-precision load sensor to ensure data accuracy. The control valve  has a force closed-loop control function, which can realize equal load rate loading or equal stress rate loading, with high control precision and good reliability."
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
          "label": "Maximum test force",
          "value": "2000KN"
        },
        {
          "label": "Measurement accuracy range",
          "value": "5%- 100%"
        },
        {
          "label": "Indication accuracy",
          "value": "≤±0.5%"
        },
        {
          "label": "Loading rate",
          "value": "0.3MPa-1.0MPa"
        },
        {
          "label": "Loading rate accuracy",
          "value": "±5%"
        },
        {
          "label": "Distance between upper and lower platen",
          "value": "330mm"
        },
        {
          "label": "Upper and lower bearing plate diameter",
          "value": "Φ280/Φ320mm"
        },
        {
          "label": "Piston maximum stroke",
          "value": "120mm"
        },
        {
          "label": "Piston diameter",
          "value": "Φ250mm"
        },
        {
          "label": "Oil maximum pressure",
          "value": "40MPa"
        },
        {
          "label": "Dimensions",
          "value": "1100x510x1510mm"
        },
        {
          "label": "Weight",
          "value": "1200kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P037",
      "name": "Constant Loading Pressure Testing Machine(Automatic) White Machine",
      "model": "YAW-3000S",
      "category": "Compression Testing Machine Series",
      "thumbnail": "/assets/images/YAW-3000S.png",
      "image": "myImages/YAW-3000S-Image.png",
      "description": "This product is suitable for the compressive strength test of  brick, stone, cement, concrete and other materials, and can also be used for the compressive performance test of other materials.",
      "features": [
        "The frame adopts the whole machine casting frame structure;",
        "Imported servo oil source;",
        "High-precision digital micro valve;",
        "Imported servo motor oil source, the oil temperature is not too high;",
        "The sensor uses a high-precision load sensor to ensure data accuracy. The control valve  has a force closed-loop control function, which can realize equal load rate loading or equal stress rate loading, with high control precision and good reliability."
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
          "label": "Maximum test force",
          "value": "3000KN"
        },
        {
          "label": "Measurement accuracy range",
          "value": "5%- 100%"
        },
        {
          "label": "Indication accuracy",
          "value": "≤±0.5%"
        },
        {
          "label": "Loading rate",
          "value": "0.3MPa-1.0MPa"
        },
        {
          "label": "Loading rate accuracy",
          "value": "±5%"
        },
        {
          "label": "Distance between upper and lower platen",
          "value": "330mm"
        },
        {
          "label": "Upper and lower bearing plate diameter",
          "value": "Φ280/Φ320mm"
        },
        {
          "label": "Piston maximum stroke",
          "value": "120mm"
        },
        {
          "label": "Piston diameter",
          "value": "Φ310mm"
        },
        {
          "label": "Oil maximum pressure",
          "value": "40MPa"
        },
        {
          "label": "Dimensions",
          "value": "1250x550x1510mm"
        },
        {
          "label": "Weight",
          "value": "2000kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P038",
      "name": "Constant Loading Pressure Testing Machine(Automatic)",
      "model": "TSY-2000A",
      "category": "Compression Testing Machine Series",
      "thumbnail": "/assets/images/TSY-2000A.png",
      "image": "myImages/TSY-2000A-Image.png",
      "description": "This  product  is suitable for the compressive strength test of  brick, stone, cement, concrete and other materials, and can also be used for the compressive performance test of other materials. The product conforms to ISO, ASTM and other standards.",
      "features": [
        "The hydraulic pump adopts an axial five-piston ultra-high pressure pump, which works smoothly and has low noise;",
        "The control valve adopts high-precision digital micro-flow valve with high control precision;",
        "The sensor adopts a pressure sensor, which has good reliability;",
        "Adopt the principle of automatic racking to strengthen the control of the loading rate."
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
          "label": "Test force",
          "value": "2000kN"
        },
        {
          "label": "Loading rate",
          "value": "0.3～1.0MPa,1.0 or above can be entered manually"
        },
        {
          "label": "Effective measurement range",
          "value": "10% to 100%"
        },
        {
          "label": "Accuracy of the load indication",
          "value": "Better than ±1% of indicated value"
        },
        {
          "label": "Distance between upper and lower platen",
          "value": "320mm"
        },
        {
          "label": "Pressure plate size",
          "value": "260×260mm"
        },
        {
          "label": "Piston stroke",
          "value": "50mm"
        },
        {
          "label": "Piston diameter",
          "value": "Φ250mm"
        },
        {
          "label": "Oil pressure",
          "value": "40MPa"
        },
        {
          "label": "Total power",
          "value": "1.1kW"
        },
        {
          "label": "Power supply",
          "value": "AC380V±10%, 50-60Hz"
        },
        {
          "label": "Main unit dimensions",
          "value": "580×500×1400mm"
        },
        {
          "label": "Overall dimension of control cabinet",
          "value": "560×550×1310mm"
        },
        {
          "label": "Weight",
          "value": "900kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P039",
      "name": "Constant Loading Pressure Testing Machine(Automatic)",
      "model": "TSY-3000A",
      "category": "Compression Testing Machine Series",
      "thumbnail": "/assets/images/TSY-3000A.png",
      "image": "myImages/TSY-3000A-Image.png",
      "description": "This  product  is suitable for the compressive strength test of  brick, stone, cement, concrete and other materials, and can also be used for the compressive performance test of other materials. The product conforms to ISO, ASTM and other standards.",
      "features": [
        "The hydraulic pump adopts an axial five-piston ultra-high pressure pump, which works smoothly and has low noise;",
        "The control valve adopts high-precision digital micro-flow valve with high control precision;",
        "The sensor adopts a pressure sensor, which has good reliability;",
        "Adopt the principle of automatic racking to strengthen the control of the loading rate."
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
          "label": "Test force",
          "value": "3000kN"
        },
        {
          "label": "Loading rate",
          "value": "0.3～1.0MPa,1.0 or above can be entered manually"
        },
        {
          "label": "Effective measurement range",
          "value": "10% to 100%"
        },
        {
          "label": "Accuracy of the load indication",
          "value": "Better than ±1% of indicated value"
        },
        {
          "label": "Distance between upper and lower platen",
          "value": "320mm"
        },
        {
          "label": "Pressure plate size",
          "value": "320×320mm"
        },
        {
          "label": "Piston stroke",
          "value": "50mm"
        },
        {
          "label": "Piston diameter",
          "value": "Φ310mm"
        },
        {
          "label": "Oil pressure",
          "value": "40MPa"
        },
        {
          "label": "Total power",
          "value": "1.8kW"
        },
        {
          "label": "Power supply",
          "value": "AC380V±10%, 50-60Hz"
        },
        {
          "label": "Main unit dimensions",
          "value": "550×650×1750mm"
        },
        {
          "label": "Overall dimension of control cabinet",
          "value": "560×550×1310mm"
        },
        {
          "label": "Weight",
          "value": "1300kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P040",
      "name": "Electro-hydraulic Pressure Testing Machine(Electric Screw)",
      "model": "TSY-2000B",
      "category": "Compression Testing Machine Series",
      "thumbnail": "/assets/images/TSY-2000B.png",
      "image": "myImages/TSY-2000B-Image.png",
      "description": "This  product  is suitable for the compressive strength test of  brick, stone, cement, concrete and other materials, and can also be used for the compressive performance test of other materials.",
      "features": [
        "With load digital display function;",
        "The maximum load hold function;",
        "Power-off data protection function;",
        "The hydraulic pump is an axial five-piston ultra-high pressure pump, which is directly driven by an electric motor;",
        "There is a safety valve on the oil delivery valve,which can overflow when overloaded, which plays a safety role;",
        "The hand wheel of the oil delivery valve can adjust the oil intake of the oil cylinder to achieve the required loading rate."
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
          "label": "Test force",
          "value": "2000kN"
        },
        {
          "label": "Effective measurement range",
          "value": "10% ~100%"
        },
        {
          "label": "Accuracy of load indication",
          "value": "Better than  ±1% of indicated value"
        },
        {
          "label": "The  distance  between the  upper  and  lower platen",
          "value": "320mm"
        },
        {
          "label": "Pressure plate size",
          "value": "260×260mm"
        },
        {
          "label": "Piston stroke",
          "value": "50mm"
        },
        {
          "label": "Piston diameter",
          "value": "Φ250mm"
        },
        {
          "label": "Oil pressure",
          "value": "40MPa"
        },
        {
          "label": "Total power",
          "value": "1.1kW"
        },
        {
          "label": "Power supply",
          "value": "AC380V,50-60Hz"
        },
        {
          "label": "Main unit dimensions",
          "value": "580×500×1400mm"
        },
        {
          "label": "Overall dimension of control cabinet",
          "value": "510×540×1470mm"
        },
        {
          "label": "Weight",
          "value": "900kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P041",
      "name": "Electro-hydraulic Pressure Testing Machine(Electric Screw)",
      "model": "TSY-3000B",
      "category": "Compression Testing Machine Series",
      "thumbnail": "/assets/images/TSY-3000B.png",
      "image": "myImages/TSY-3000B-Image.png",
      "description": "This  product  is suitable for the compressive strength test of  brick, stone, cement, concrete and other materials, and can also be used for the compressive performance test of other materials.",
      "features": [
        "With load digital display function;",
        "The maximum load hold function;",
        "Power-off data protection function;",
        "The hydraulic pump is an axial five-piston ultra-high pressure pump, which is directly driven by an electric motor;",
        "There is a safety valve on the oil delivery valve,which can overflow when overloaded, which plays a safety role;",
        "The hand wheel of the oil delivery valve can adjust the oil intake of the oil cylinder to achieve the required loading rate."
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
          "label": "Test force",
          "value": "3000kN"
        },
        {
          "label": "Effective measurement range",
          "value": "10% ~100%"
        },
        {
          "label": "Accuracy of load indication",
          "value": "Better than  ±1% of indicated value"
        },
        {
          "label": "The  distance  between the  upper  and  lower platen",
          "value": "330mm"
        },
        {
          "label": "Pressure plate size",
          "value": "320×320mm"
        },
        {
          "label": "Piston stroke",
          "value": "50mm"
        },
        {
          "label": "Piston diameter",
          "value": "Φ310mm"
        },
        {
          "label": "Oil pressure",
          "value": "40MPa"
        },
        {
          "label": "Total power",
          "value": "1.8kW"
        },
        {
          "label": "Power supply",
          "value": "AC380V,50-60Hz"
        },
        {
          "label": "Main unit dimensions",
          "value": "550×560×1750mm"
        },
        {
          "label": "Overall dimension of control cabinet",
          "value": "510×540×1470mm"
        },
        {
          "label": "Weight",
          "value": "1200kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P042",
      "name": "Electro-Hydraulic Pressure Testing Machine",
      "model": "TSY-2000",
      "category": "Compression Testing Machine Series",
      "thumbnail": "/assets/images/TSY-2000.png",
      "image": "myImages/TSY-2000-Image.png",
      "description": "This testing machine is mainly used for the compressive strength test of building materials such as brick, cement mortar and concrete, and can also be used for the mechanical performance test of other materials.",
      "features": [
        "With load digital display function;",
        "The maximum load hold function;",
        "Power-off data protection function;",
        "The hydraulic pump is an axial five-piston ultra-high pressure pump, which  is directly driven by an electric motor;",
        "There is a safety valve on the oil delivery valve,which can overflow  when overloaded, which plays a safety role;",
        "The hand wheel of the oil delivery valve can adjust the oil intake of the oil cylinder to achieve the required loading rate."
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
          "label": "Test force",
          "value": "2000kN"
        },
        {
          "label": "Effective measurement range",
          "value": "10%~100%"
        },
        {
          "label": "Accuracy of load indication",
          "value": "Better than ±1% of indicated value"
        },
        {
          "label": "Piston maximum stroke",
          "value": "50mm"
        },
        {
          "label": "Piston diameter",
          "value": "Φ250mm"
        },
        {
          "label": "Hydraulic pump rated pressure",
          "value": "40MPa"
        },
        {
          "label": "The distance between the upper and lower platen",
          "value": "320mm"
        },
        {
          "label": "Pressure plate size",
          "value": "260×260mm"
        },
        {
          "label": "Total power",
          "value": "1.1kW"
        },
        {
          "label": "Power supply voltage",
          "value": "AC380V±10%, 50-60Hz"
        },
        {
          "label": "Overall dimensions",
          "value": "920×400×1200mm"
        },
        {
          "label": "Weight",
          "value": "700kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P043",
      "name": "Constant Load Cement Flexural And Compressive Testing Machine",
      "model": "YAW-300.10S",
      "category": "Compression Testing Machine Series",
      "thumbnail": "/assets/images/YAW-300.10S.png",
      "image": "myImages/YAW-300.10S-Image.png",
      "description": "YAW-300·10S Constant Load Cement Flexural and Compressive Testing Machine is a new generation of servo press independently developed and produced by Zhejiang Luda. With strong technology and production capacity, our company was honored to be invited to participate in the preparation of new standards for all-in-one machines. This  testing  machine  is an essential testing instrument for building materials,construction engineering, quality supervision, metrology testing, scientific research institutions and other units.",
      "features": [
        "The whole machine adopts physical and chemical board countertop, and the frame adopts static surface electroplating, which is easy to clean and beautiful;",
        "The anti-bending part adopts electric oil cylinder, which has high precision, stable control, accurate displacement and force value;",
        "The sensor adopts the spoke sensor, which has high precision, stable speed and reciprocation;",
        "Servo motor system, silent throughout, low decibel, oil temperature is not easy to rise, high efficiency and stability, voltage adopts single-phase 220V, strong versatility, high efficiency and energy saving;",
        "The protective cover is made of acrylic transparent material, which is clean and beautiful, and the test process can be observed throughout the process;",
        "The 40mmx40mm cement compression jig is made of fully galvanized material."
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
          "label": "Compressive strength test",
          "value": ""
        },
        {
          "label": "Maximum test force",
          "value": "300kN"
        },
        {
          "label": "Constant loading rate",
          "value": "0.3~9.9kN/s"
        },
        {
          "label": "Upper and lower platen spacing",
          "value": "185mm"
        },
        {
          "label": "Pressure plate diameter",
          "value": "Φ120mm"
        },
        {
          "label": "Piston maximum stroke",
          "value": "90mm"
        },
        {
          "label": "Flexural strength test",
          "value": ""
        },
        {
          "label": "Maximum test force",
          "value": "10kN"
        },
        {
          "label": "Constant loading rate",
          "value": "0.05kN/s"
        },
        {
          "label": "Section side length",
          "value": "40mm"
        },
        {
          "label": "Span between supports",
          "value": "100mm"
        },
        {
          "label": "Piston maximum stroke",
          "value": "70mm"
        },
        {
          "label": "Indication relative error (accuracy)",
          "value": "±0.5%"
        },
        {
          "label": "Indication repeatability relative error",
          "value": "0.5%"
        },
        {
          "label": "Return to zero relative error",
          "value": "±0.1%"
        },
        {
          "label": "The relative resolution of the force value",
          "value": ""
        },
        {
          "label": "display device of the test machine",
          "value": "0.5%"
        },
        {
          "label": "Zero drift",
          "value": "≤±0.1%"
        },
        {
          "label": "Power supply",
          "value": "220V(±10%),1.5kW"
        },
        {
          "label": "Dimensions",
          "value": "1300×480×1340mm"
        },
        {
          "label": "Weight",
          "value": "500kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P044",
      "name": "Constant Loading Pressure Testing Machine",
      "model": "YAW-300S",
      "category": "Compression Testing Machine Series",
      "thumbnail": "/assets/images/YAW-300S.png",
      "image": "myImages/YAW-300S-Image.png",
      "description": "YAW-300S Constant Load Cement Flexural and Compressive Testing Machine is a new generation of servo press independently developed and produced by Zhejiang Luda. With strong technology and production capacity, our company was honored to be invited to participate in the preparation of new standards for all-in-one machines. This  testing  machine is an essential testing instrument for building materials,construction engineering, quality supervision, metrology testing, scientific research institutions and other units.",
      "features": [
        "Imported servo motor is used to control the oil source;",
        "High-precision servo flow valve;",
        "With the force closed-loop control function, it can realize the loading of the load stress rate;",
        "It can realize equal load rate loading or equal stress rate loading."
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
          "label": "Maximum test force",
          "value": "300kN"
        },
        {
          "label": "Constant loading rate",
          "value": "0.3~9.9kN"
        },
        {
          "label": "Upper and lower platen spacing",
          "value": "185mm"
        },
        {
          "label": "Pressure plate diameter",
          "value": "Φ120mm"
        },
        {
          "label": "Piston maximum stroke",
          "value": "90mm"
        },
        {
          "label": "Indication relative error (accuracy)",
          "value": "±0.5%"
        },
        {
          "label": "Indication repeatability relative error",
          "value": "0.5%"
        },
        {
          "label": "Return to zero relative error",
          "value": "±0.1%"
        },
        {
          "label": "The  relative  resolution of the force value display device of the test machin",
          "value": "e 0.5%"
        },
        {
          "label": "Zero drift",
          "value": "≤±0.1%"
        },
        {
          "label": "Power supply",
          "value": "220V (±10%),1.5kW"
        },
        {
          "label": "Dimensions",
          "value": "1100×480×1340mm"
        },
        {
          "label": "Weight",
          "value": "460kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P045",
      "name": "Constant Load Cement Flexural Compression Testing Machine",
      "model": "YZH-300.10",
      "category": "Compression Testing Machine Series",
      "thumbnail": "/assets/images/YZH-300.10.png",
      "image": "myImages/YZH-300·10-Image.png",
      "description": "YZH-300·10 constant load cement flexural and compressive testing machine is a pressure testing machine that integrates cement flexural and compressive resistance jointly  developed  by  Zhejiang  Luda  Machinery  Instrument  Co.,  Ltd.  and  Zhejiang University of Technology\nThis product adopts anti-bending and anti-compression double oil cylinders to realize the test of cement compressive strength and cement flexural strength respectively.",
      "features": [
        "Using high-precision digital micro-valve, can realize loading rate loading;",
        "With the force closed-loop control function, it can realize the loading of the load stress rate;",
        "The hydraulic pump adopts an axial five-piston ultra-high pressure pump, which works smoothly and has low noise;",
        "The control valve adopts a high-precision digital micro-flow valve with high control precision;",
        "The sensor adopts a pressure sensor, which has good reliability;",
        "The  principle  of  automatic  loading  is  adopted  to  strengthen the control of the loading rate."
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
          "label": "Compressive strength test",
          "value": ""
        },
        {
          "label": "Maximum test force",
          "value": "300kN"
        },
        {
          "label": "Constant loading rate",
          "value": "0.3~9.9kN/s"
        },
        {
          "label": "Upper and lower platen spacing",
          "value": "190mm"
        },
        {
          "label": "Pressure plate diameter",
          "value": "Φ120mm"
        },
        {
          "label": "Piston maximum stroke",
          "value": "90mm"
        },
        {
          "label": "Flexural strength test",
          "value": ""
        },
        {
          "label": "Maximum test force",
          "value": "10kN"
        },
        {
          "label": "Constant loading rate",
          "value": "0.05kN/s"
        },
        {
          "label": "Section side length",
          "value": "40mm"
        },
        {
          "label": "Span between supports",
          "value": "100mm"
        },
        {
          "label": "Piston maximum stroke",
          "value": "70mm"
        },
        {
          "label": "Indication relative error (accuracy)",
          "value": "±1.0%"
        },
        {
          "label": "Indication repeatability relative error",
          "value": "1.0%"
        },
        {
          "label": "Return to zero relative error",
          "value": "±0.1%"
        },
        {
          "label": "The relative resolution of the force value",
          "value": ""
        },
        {
          "label": "display device of the test machine",
          "value": "0.5%"
        },
        {
          "label": "Power supply",
          "value": "380V(±10%),0.55kW"
        },
        {
          "label": "Dimensions",
          "value": "1200×490×1350mm"
        },
        {
          "label": "Weight",
          "value": "400kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P046",
      "name": "Constant Loading Pressure Testing Machine",
      "model": "YAW-300",
      "category": "Compression Testing Machine Series",
      "thumbnail": "/assets/images/YAW-300.png",
      "image": "myImages/YAW-300-Image.png",
      "description": "This product is suitable for the compressive strength test of brick, stone, cement, concrete and other materials, and can also be used for the compressive performance test of other  materials.",
      "features": [
        "The working oil cylinder and the working piston adopt precision couplings, embedded with composite sealing rings to achieve the best sealing state;",
        "The axial plunger high-pressure oil pump is used, which works smoothly and has low noise;",
        "The sensor adopts a pressure sensor, which is highly reliable;",
        "The control valve adopts a high-precision digital micro-flow valve with high control precision;",
        "Adopt the principle of automatic loading to strengthen the control of the loading rate."
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
          "label": "Maximum test force",
          "value": "300kN"
        },
        {
          "label": "Measurement accuracy range",
          "value": "10%~ 100%"
        },
        {
          "label": "Indication accuracy",
          "value": "≦±1%"
        },
        {
          "label": "Loading rate",
          "value": "0.3～9.9kN/s"
        },
        {
          "label": "The distance between the upper and lower platen",
          "value": "180mm"
        },
        {
          "label": "Pressure plate diameter",
          "value": "Φ120mm"
        },
        {
          "label": "Piston maximum stroke",
          "value": "90mm"
        },
        {
          "label": "Piston diameter",
          "value": "Φ140mm"
        },
        {
          "label": "Oil maximum pressure",
          "value": "31.5MPa"
        },
        {
          "label": "Power supply voltage",
          "value": "AC380V±10%, 0.55kW"
        },
        {
          "label": "Dimensions",
          "value": "890×600×1450mm"
        },
        {
          "label": "Weight",
          "value": "400kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P047",
      "name": "Electro-hydraulic Compression Testing Machine",
      "model": "TSY-300",
      "category": "Compression Testing Machine Series",
      "thumbnail": "/assets/images/TSY-300.png",
      "image": "myImages/TSY-300-Image.png",
      "description": "This  product  is suitable for the compressive strength test of  brick, stone, cement, concrete and other materials, and can also be used for the compressive performance test of other materials.",
      "features": [
        "It can automatically adjust the parallelism of the pressure-bearing surface between the test piece and the pressure plate, so that the test piece is evenly stressed;",
        "There is a sealing device between the piston and the oil cylinder to prevent oil leakage;",
        "Equipped with a safety valve, which can overflow when overloaded and play a role of safety protection;",
        "The test data is automatically processed and the test report is printed out."
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
          "label": "Maximum test force",
          "value": "300kN"
        },
        {
          "label": "Indication relative error (accuracy)",
          "value": "±1%"
        },
        {
          "label": "Hydraulic pump rated pressure",
          "value": "31.5MPa"
        },
        {
          "label": "Pressure plate diameter",
          "value": "Φ140mm"
        },
        {
          "label": "Maximum distance between upper and lower platen",
          "value": "190mm"
        },
        {
          "label": "Piston diameter and maximum stroke",
          "value": "Φ140*90mm"
        },
        {
          "label": "Motor power",
          "value": "0.55kW"
        },
        {
          "label": "Power supply voltage",
          "value": "AC380V±10%"
        },
        {
          "label": "Dimensions",
          "value": "880×430×900mm"
        },
        {
          "label": "Weight",
          "value": "390kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P048",
      "name": "Electro-hydraulic Flexural And Compression Testing Machine",
      "model": "TSY-300",
      "category": "Compression Testing Machine Series",
      "thumbnail": "/assets/images/TSY-300.png",
      "image": "myImages/TSY-300-Image.png",
      "description": "This  product  is suitable for the compressive strength test of  brick, stone, cement, concrete and other materials, and can also be used for the compressive performance test of other materials.",
      "features": [
        "It can automatically adjust the parallelism of the pressure-bearing surface between the test piece and the pressure plate, so that the test piece is evenly stressed;",
        "There is a sealing device between the piston and the oil cylinder to prevent oil leakage;",
        "Equipped with a safety valve, which can overflow when overloaded and play a role of safety protection;",
        "The test data is automatically processed and the test report is printed out."
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
          "label": "Maximum test force",
          "value": "300kN"
        },
        {
          "label": "Indication relative error (accuracy)",
          "value": "±1%"
        },
        {
          "label": "Hydraulic pump rated pressure",
          "value": "31.5MPa"
        },
        {
          "label": "Anti-folding roller diameter",
          "value": "Φ30mm"
        },
        {
          "label": "Distance between upper and lower anti-folding rollers",
          "value": "165mm"
        },
        {
          "label": "Center distance between two upper anti-folding rollers",
          "value": "150mm"
        },
        {
          "label": "Center distance between two anti-folding rollers",
          "value": "450mm"
        },
        {
          "label": "Pressure plate diameter",
          "value": "Φ160mm"
        },
        {
          "label": "Maximum distance between upper and lower platen",
          "value": "230mm"
        },
        {
          "label": "Piston diameter and maximum stroke",
          "value": "Φ140*90mm"
        },
        {
          "label": "Motor power",
          "value": "0.55kW"
        },
        {
          "label": "Power supply voltage",
          "value": "AC380V±10%"
        },
        {
          "label": "Dimensions",
          "value": "890×600×1450mm"
        },
        {
          "label": "Weight",
          "value": "400kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P049",
      "name": "Constant Load Manhole Cover Special Pressure Testing Machine",
      "model": "TSY-1000S",
      "category": "Compression Testing Machine Series",
      "thumbnail": "/assets/images/TSY-1000S.png",
      "image": "myImages/TSY-1000S-Image.png",
      "description": "TSY series manhole cover pressure testing machine is a scientific and technological achievement of cooperation between our company and the Institute of Fluid Transmission and Control of Zhejiang University of Technology.\nThe testing machine is mainly used for testing manhole cover load bearing test and residual deformation test, and can also be used for mechanical performance tests of other materials.",
      "features": [
        "This machine adopts high-precision deformation and high-resolution acquisition system;",
        "Hydraulic control adopts integrated oil circuit servo control system;",
        "Stable and reliable loading, intelligent operation;",
        "It has the functions of automatic lifting, automatic positioning, automatic calibration, equal  force and equal deformation, servo automatic compensation, positioning,  pressure keeping,  intelligent prompting of working status and mixed control;",
        "With power-off data protection function;",
        "The experimental data is automatically processed, and the operation is convenient and reliable;",
        "The corresponding configuration can be selected according to the different needs of customers."
      ],
      "standards": [
        "EN 124-1"
      ],
      "specifications": [
        {
          "label": "Maximum test force",
          "value": "1000kN"
        },
        {
          "label": "Rigid adjustment block",
          "value": "Φ356×40mm"
        },
        {
          "label": "Calibration block",
          "value": "500×500×50mm"
        },
        {
          "label": "Effective measurement range",
          "value": "10%-100%"
        },
        {
          "label": "Accuracy of load indication",
          "value": "better than ±1%/±0.5% of indication"
        },
        {
          "label": "Piston maximum stroke",
          "value": "250mm"
        },
        {
          "label": "Piston diameter",
          "value": "Φ210mm"
        },
        {
          "label": "Hydraulic pump rated pressure",
          "value": "31.5MPa"
        },
        {
          "label": "Test space",
          "value": "1200×1200×300"
        },
        {
          "label": "Power supply",
          "value": "1.2kW"
        },
        {
          "label": "Power supply voltage",
          "value": "AC380V±10%"
        },
        {
          "label": "Mainframe Dimensions",
          "value": "1400×1200×1400mm"
        },
        {
          "label": "Overall dimension of control cabinet",
          "value": "1200×700×900mm"
        },
        {
          "label": "Weight",
          "value": "2200kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P050",
      "name": "Static Load Sleeper Testing Machine",
      "model": "TSY-500",
      "category": "Large Testing Machine Series",
      "thumbnail": "/assets/images/TSY-500.png",
      "image": "myImages/TSY-500-Image.png",
      "description": "The static load sleeper testing machine is a device for testing the static load crack resistance test of concrete sleepers (Type I sleepers, Type II sleepers, Type III sleepers, fork sleepers, bridge sleepers, wide sleepers, etc.).",
      "features": [
        "The force measurement of this machine adopts high-precision load sensor, microcomputer program control, electro-hydraulic proportional hydraulic loading system and other technologies;",
        "Use the positioning ruler (self-provided) to adjust the position of the sleeper so that the load center coincides with the center of the pressure plate;",
        "According to the set working procedure, the piston moves freely;",
        "Equipped with three  high-precision spoke sensors to ensure accurate data of three separate pressure points, and equipped with special LED crack observation lights. In order to facilitate the sleeper test of foreign standards, the fulcrum can be adjusted;",
        "The loading process is adjusted with the variable structure PID control algorithm, the constant speed control error is ≤5%, and the pressure holding control error is ≤0.5%;",
        "Loading speed Uniform loading;",
        "The static load point can be set arbitrarily, and the data result report is automatically printed."
      ],
      "standards": [
        "EN 13230-1",
        "EN 13230-2",
        "EN 13230-3"
      ],
      "specifications": [
        {
          "label": "The Maximum Load Value under the Rail",
          "value": "500kN"
        },
        {
          "label": "Load Indication Accuracy",
          "value": "±1%"
        },
        {
          "label": "Initial Load  after Placing the Sleeper",
          "value": "<20kN"
        },
        {
          "label": "Loading Speed",
          "value": "3000±300N/s"
        },
        {
          "label": "Hold Time",
          "value": "180s"
        },
        {
          "label": "Piston Maximum Stroke",
          "value": "250mm"
        },
        {
          "label": "Adjustable Under-rail Loading Distance",
          "value": "600, 700, 800mm"
        },
        {
          "label": "Adjustable Loading Distance in the Rail",
          "value": "600, 1500mm"
        },
        {
          "label": "Test space",
          "value": "Distance between Upper and Lower Supports :430 mm"
        },
        {
          "label": "Test space",
          "value": "Distance between Four Columns: 820, 900mm"
        },
        {
          "label": "Host Dimensions",
          "value": "1720×990×2266mm"
        },
        {
          "label": "Carriage",
          "value": "3390×700×135mm"
        },
        {
          "label": "Control Cabinet",
          "value": "1210×770×1020mm"
        },
        {
          "label": "Related Parameters of Hydraulic Pump Station",
          "value": ""
        },
        {
          "label": "Rated Pressure",
          "value": "High Pressure Oil Pump 31.5MPa"
        },
        {
          "label": "Rated Displacement",
          "value": "High Pressure Oil Pump 25ml/rec"
        },
        {
          "label": "Motor Power",
          "value": "1.2kW ,Speed 980rpm"
        },
        {
          "label": "Power Supply Voltage",
          "value": "AC380V±10%"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P051",
      "name": "Microcomputer Controlled Tensile Stress Relaxation Testing Machine",
      "model": "LDCJ-300",
      "category": "Large Testing Machine Series",
      "thumbnail": "/assets/images/LDCJ-300.png",
      "image": "myImages/LDCJ-300-Image.png",
      "description": "This product is suitable for  testing equipment for measuring the relaxation properties of metal   materials at room temperature.",
      "features": [
        "The host machine is of horizontal structure with moderate height and easy operation. The load-bearing pedestal is a welded structure with high rigidity and light weight;",
        "The universal  prestressed through-hole jack is adopted, which has strong versatility and is suitable for prestressing. Applicable to tensioning Ovam clip group, anchor DM type heading anchor and LEM type cold casting anchor;",
        "The piston of the working jack is double-acting, which can realize quick return;",
        "Using a high-flow high-pressure pump, the loading speed can be controlled by a manual valve;",
        "Full digital measurement and control device, stable performance, high measurement and control accuracy;",
        "With force and displacement automatic clearing, automatic calibration function;",
        "The force measurement resolution is high and does not change in the whole process, and it is not divided into files;",
        "The whole machine is equipped with 6 round hole backing plates."
      ],
      "standards": [
        "ASTM E328",
        "ISO 15630-3"
      ],
      "specifications": [
        {
          "label": "Maximum Test Force",
          "value": "300kN"
        },
        {
          "label": "Effective Measurement Range",
          "value": "10%~100%(no classification in the whole process)"
        },
        {
          "label": "Load Indication Accuracy",
          "value": "Better than ±1% of indication"
        },
        {
          "label": "Load Resolution",
          "value": "1N"
        },
        {
          "label": "Accuracy of Displacement Indication",
          "value": "Better than ±0.5% of indication"
        },
        {
          "label": "Loading speed",
          "value": "0.01-40 mm/mincan be set arbitrarily"
        },
        {
          "label": "Screw Stroke",
          "value": "100mm"
        },
        {
          "label": "Test  Space",
          "value": "2200mm(the maximum stretching distance  between the left and right chucks)"
        },
        {
          "label": "Power Supply",
          "value": "AC220V±10%, 2.3kW"
        },
        {
          "label": "Dimensions",
          "value": "2250×530×1200mm"
        },
        {
          "label": "Weight",
          "value": "1200kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P052",
      "name": "Steel Pipe Bending Test Machine",
      "model": "LDGW-60C",
      "category": "Large Testing Machine Series",
      "thumbnail": "/assets/images/LDGW-60C.png",
      "image": "myImages/LDGW-60C-Image.png",
      "description": "LDGW-60C steel pipe bending testing machine has the characteristics of compact structure, simple operation, intuitive display of bending angle, easy maintenance, stable operation, safety, and low noise. It is a special equipment for cold bending test of steel pipes.This equipment is an ideal test equipment for steel mills and construction units to test the bending performance and reverse bending performance of steel pipes.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Steel Pipe Outer Diameter",
          "value": "φ10.2-φ60.3mm (8 types)"
        },
        {
          "label": "Bend Radius of Bend Center",
          "value": "6d"
        },
        {
          "label": "Bending Angle",
          "value": "Set arbitrarily within 0-90°"
        },
        {
          "label": "Angle Setting Resolution",
          "value": "1°"
        },
        {
          "label": "Angle Control Accuracy",
          "value": "±1°"
        },
        {
          "label": "Control Mode",
          "value": "Manual control, automatic control"
        },
        {
          "label": "Working Disc Speed",
          "value": "1.4r/min"
        },
        {
          "label": "Motor Power",
          "value": "2kW"
        },
        {
          "label": "Machine Shape",
          "value": "1300×900×1200 (mm)"
        },
        {
          "label": "Machine Weight",
          "value": "2000kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P053",
      "name": "Vertical Steel Bar Bending and Rebending Testing Machine",
      "model": "LDWQ-40D",
      "category": "Large Testing Machine Series",
      "thumbnail": "/assets/images/LDWQ-40D.png",
      "image": "myImages/LDWQ-40D-Image.png",
      "description": "The steel bar bending test machine is a special equipment for cold bending test and plane  reverse bending test of steel bars.It is mainly used in the quality inspection department of  metallurgy and construction engineering, and can also be used in the bending performance  inspection of construction raw materials and steel bar welding points. Commonly used equipment for performance testing and research.",
      "features": [
        "Vertical closed integrated fuselage design, silent oil pump hydraulic system;",
        "3-cylinder  design, the  roller  span is driven by 2 lateral cylinders with displacement measurement;",
        "With a fully transparent  protective cover that can  be observed in all directions, the front plexiglass protective sliding door slides silently;",
        "Imported PLC control, equipped with 10.1-inch configuration touch screen, with animation display, real-time display of angle, automatic control of bending process and other functions.Friendly operation interface, the test steps have been decomposed into the whole screen interface, follow the prompts to operate step by step, easy to learn;",
        "Support bending test (0-180 degrees), reverse bending test (forward bending 90 degrees,  reverse bending 20 degrees), reverse bending needs to use additional bending support (optional);",
        "With dross, steel oxide skin collection drawer;",
        "One-click test. After the user selects the steel bar type parameters and diameter, the bending machine automatically adjusts the span and gives the number of the bending core. After the press test, the bending machine automatically completes the press bending and lateral pressurization. After the end, the vertical oil cylinder and the lateral oil cylinder return automatically."
      ],
      "standards": [
        "EN ISO 7438",
        "EN ISO 15630-1",
        "ASTM A615",
        "ASTM A615M"
      ],
      "specifications": [
        {
          "label": "Bending Diameter Range",
          "value": "Φ6-Φ40mm"
        },
        {
          "label": "Bending Angle Range",
          "value": "Set arbitrarily within 0-180°"
        },
        {
          "label": "Cylinder Stroke",
          "value": "250mm"
        },
        {
          "label": "Transverse Bending Speed",
          "value": "300mm/min"
        },
        {
          "label": "Roller center distance",
          "value": "＞600mm"
        },
        {
          "label": "Positive bending core",
          "value": "Φ6、Φ8、Φ10、Φ12、Φ14、Φ16、Φ18、Φ20、Φ24、Φ32、Φ40、Φ48、Φ56、Φ64、Φ72、Φ80、Φ88、Φ100、Φ140、Φ160、Φ180、Φ200mm"
        },
        {
          "label": "Reverse bending core",
          "value": "Φ40、Φ50、Φ60、Φ70、Φ80、Φ84、Φ90、Φ100、Φ110、Φ125、Φ168、Φ192、Φ216、Φ240mm"
        },
        {
          "label": "Power Supply",
          "value": "AC380V±10%"
        },
        {
          "label": "Rated Power",
          "value": "3000W"
        },
        {
          "label": "Machine Shape",
          "value": "1760×700×2160mm"
        },
        {
          "label": "Equipment Weight",
          "value": "750kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P054",
      "name": "Steel Bar Bending Machine",
      "model": "GW-40C",
      "category": "Large Testing Machine Series",
      "thumbnail": "/assets/images/GW-40C.png",
      "image": "myImages/GW-40C-Image.png",
      "description": "GW-40C steel bar bending machine is a test equipment for bending and reverse bending of steel bars in the plane. It is suitable for steel mills, construction units, working condition  enterprises, traffic quality inspection and other industries.It is suitable for steel mills,  construction units, working condition enterprises, traffic quality  inspection and other industries.",
      "features": [
        "The working disc can be set for forward bending and reverse bending;",
        "Operation panel dual display device;",
        "There are safety devices such as protective covers on the host;",
        "Manual forward and reverse bending is possible;",
        "Once an abnormal state occurs, it can be cleared and stopped."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Steel Bending Diameter",
          "value": "Φ6~Φ40mm"
        },
        {
          "label": "Reinforcement Positive Bending Angle",
          "value": "0~180° (arbitrary setting)"
        },
        {
          "label": "Bar Reverse Bending Angle",
          "value": "0~20° (arbitrary setting)"
        },
        {
          "label": "Working Disc Rotation Speed",
          "value": "<3.7r/min"
        },
        {
          "label": "Roll Center Distance",
          "value": "165mm"
        },
        {
          "label": "Positive bending core",
          "value": "4×Φ6 、4×Φ8、4×Φ10(5×Φ8)、4×Φ12、4×Φ14、4×Φ16、4×Φ18、4×Φ20(5×Φ16)、4×Φ22、4×Φ25、5×Φ28、5×Φ32、5×Φ36、5×Φ40mm"
        },
        {
          "label": "Reverse bending core",
          "value": "5×Φ6、5×Φ10、5×Φ12、5×Φ14、5×Φ18、5×Φ22、5×Φ25、6×Φ28、6×Φ32mm"
        },
        {
          "label": "Power Supply",
          "value": "AC380V±10% ,1.5kW"
        },
        {
          "label": "Dimensions",
          "value": "1050×740×1170mm"
        },
        {
          "label": "Weight",
          "value": "750kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P055",
      "name": "Automatic Bolt Torque Tension Testing Machine",
      "model": "LD-JZ500D",
      "category": "Large Testing Machine Series",
      "thumbnail": "/assets/images/LD-JZ500D.png",
      "image": "myImages/LD-JZ500D-Image.png",
      "description": "It can detect, display and print the axial force and torque of 7/16 inch non-standard bolts.\nIt can be equipped with a special torsional shear wrench, and can also detect the axial force (pre tightening force) after the shear-type high-strength bolt connection pair 7/16 is twisted off (this wrench needs special order).",
      "features": [
        "This product has the function of parameter backup and recovery, automatic calibration function, and the monitoring of peak value is also set according to the detection requirements of high-strength bolts.",
        "In order to meet the needs of users, the instrument is equipped with a network interface connected to the computer, which can transmit data to the computer and upload the data, and print out the report after further processing."
      ],
      "standards": [
        "ISO 16047",
        "ASTM D5648"
      ],
      "specifications": [
        {
          "label": "Axial Force Measurement Range",
          "value": "30~500kN"
        },
        {
          "label": "Torque Measurement Range",
          "value": "50~2000Nm"
        },
        {
          "label": "Resolution",
          "value": "±0.1kN"
        },
        {
          "label": "Indication Error",
          "value": "±1%kN"
        },
        {
          "label": "Display Mode",
          "value": "Liquid crystal display"
        },
        {
          "label": "Overall Dimensions",
          "value": "1470×550×1400mm"
        },
        {
          "label": "Weight",
          "value": "1600kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P056",
      "name": "Asphalt Mixture Rotary Compactor",
      "model": "LDSY-3",
      "category": "Asphalt and bitumen Testing Equipment Series",
      "thumbnail": "/assets/images/LDSY-3.png",
      "image": "myImages/LDSY-3-Image.png",
      "description": "The asphalt mixture gyratory compactor is a kind of simulating the volume and properties of the actual pavement material, under the conditions of constant pressure,fixed compaction angle and fixed compaction speed, the hot- mix asphalt mixture cylinder test is carried out by  kneading method,compaction molding equipment for piece production.",
      "features": [
        "This machine adopts imported accessories,under the given compaction pressure and rotation compaction angle,it can operate safely and reliably,and the experimental data is accurate and reliable."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Mould size",
          "value": "Diameter 100mm,150mm,Height250mm"
        },
        {
          "label": "Forming height",
          "value": "50-150mm"
        },
        {
          "label": "Compaction pressure",
          "value": "100~ 1000kPa (adjustable)"
        },
        {
          "label": "Number of rotations",
          "value": "1~999 times (adjustable)"
        },
        {
          "label": "Rotation rate",
          "value": "30 rpm/ min"
        },
        {
          "label": "Rotation angle",
          "value": "0.5°~2.0° (adjustable)"
        },
        {
          "label": "Power",
          "value": "2150W"
        },
        {
          "label": "Power supply",
          "value": "380V"
        },
        {
          "label": "Size",
          "value": "900×900×1900mm"
        },
        {
          "label": "Weight",
          "value": "450kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P057",
      "name": "Asphalt Content Analyzer (combustion method)",
      "model": "LDRS-6",
      "category": "Asphalt and bitumen Testing Equipment Series",
      "thumbnail": "/assets/images/LDRS-6.png",
      "image": "myImages/LDRS-6-Image.png",
      "description": "This product uses the combustion method to determine the asphalt content.The product adopts a high-precision measurement and control system and is used with an imported  balance.It can quickly, accurately, safely and reliably measure the asphalt content, and can meet the requirements of mass continuous production of  mixing plants and road supervision   and inspection, thereby ensuring the quality of road construction.",
      "features": [
        "The product adopts a high-precision measurement and control system and is used with an  imported balance.It can quickly, accurately, safely and reliably measure the asphalt content,   and can meet the requirements of  mass continuous production of mixing plants and road  supervision and inspection, thereby ensuring the quality of road construction."
      ],
      "standards": [
        "AASHTO T308-10",
        "ASTM D6307-10",
        "BS EN 12697-39:2012"
      ],
      "specifications": [
        {
          "label": "Working room size",
          "value": "360mm×400mm×300mm"
        },
        {
          "label": "Host working voltage",
          "value": "380V±10V,8000W"
        },
        {
          "label": "Instrument working voltage",
          "value": "220V±10V (reliable grounding required)"
        },
        {
          "label": "Balance capacity",
          "value": "10kg, division 0.1g"
        },
        {
          "label": "Combustion chamber maximum operating temperature",
          "value": "800° C"
        },
        {
          "label": "Maximum sample weight",
          "value": "4000g, recommended 1000g~ 1500g"
        },
        {
          "label": "Asphalt content test accuracy",
          "value": "0.01%"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P058",
      "name": "Asphalt Roller Compactor",
      "model": "LDCX-1",
      "category": "Asphalt and bitumen Testing Equipment Series",
      "thumbnail": "/assets/images/LDCX-1.png",
      "image": "myImages/LDCX-1-Image.png",
      "description": "This machine is mainly used for roll forming of asphalt mixture tests in rutting tests. It is also suitable for using the rolling method to make samples of other physical and mechanical properties of asphalt mixtures.",
      "features": [
        "This machine integrates machinery, electricity and hydraulic pressure. Compared with similar  products, it has the characteristics of small size, high degree of automation, strong function and convenient operation.",
        "Rolling temperature can be set arbitrarily.",
        "After the test mold is installed on the trolley, it can be centered automatically.",
        "The rolling times of the trolley can be set arbitrarily, and the rolling times can be recorded at any time."
      ],
      "standards": [
        "EN 12697-33 method 5.2",
        "ASTM D8079"
      ],
      "specifications": [
        {
          "label": "Mould size",
          "value": "300×300×(30~100)mm"
        },
        {
          "label": "(Can be customized upon request)",
          "value": ""
        },
        {
          "label": "Trial car travel",
          "value": "300mm"
        },
        {
          "label": "The height change value of the test mold",
          "value": "30~ 100mm"
        },
        {
          "label": "Roller Radius",
          "value": "500mm"
        },
        {
          "label": "Roller width",
          "value": "298mm"
        },
        {
          "label": "Roller pressure",
          "value": "300N/cm"
        },
        {
          "label": "Dimensions",
          "value": "620×1100×1900mm"
        },
        {
          "label": "Voltage",
          "value": "380V±10%"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P059",
      "name": "Automatic Single Wheel Tracking Apparatus",
      "model": "LDCZ-5",
      "category": "Asphalt and bitumen Testing Equipment Series",
      "thumbnail": "/assets/images/LDCZ-5.png",
      "image": "myImages/LDCZ-5-Image.png",
      "description": "The automatic rutting tester is mainly used to measure the high-temperature anti- rutting ability of  asphalt mixture, and it is used for the high-temperature stability test of asphalt mixture design.",
      "features": [
        "This machine adopts the rutting tester produced by international contemporary technology,  which has reliable performance, high measurement and control precision, and convenient   operation; it can be used for water immersion experiments."
      ],
      "standards": [
        "EN 12697-22",
        "BS 598:110",
        "Comparable to NF P98-251-1",
        "P98-251-4"
      ],
      "specifications": [
        {
          "label": "Rolling speed of roller",
          "value": "42±0.5 times/ min (one way)"
        },
        {
          "label": "Test trolley movement distance",
          "value": "230±10mm"
        },
        {
          "label": "Roller and rubber hardness (international standard hardness)",
          "value": "80IRHD±5IRHD(in 23℃)"
        },
        {
          "label": "Contact pressure between roller and test die",
          "value": "0.7±0.03MPa (60° C), adjustable to 0.8-0.9MPa"
        },
        {
          "label": "Trial mold size",
          "value": "300×300×50 (standard), which can be used for rutting test on specimens with a thickness of 30-100mm(Can be customized upon request)"
        },
        {
          "label": "Measuring range of displacement",
          "value": "0-30mm"
        },
        {
          "label": "Rutting test time",
          "value": "Usually 60min"
        },
        {
          "label": "The temperature control range in the incubator (can be set arbitrarily)",
          "value": "Room temperature 60℃, control accuracy ± 0.5℃"
        },
        {
          "label": "Overall dimensions of the whole machine",
          "value": "1330×815×1430mm"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P060",
      "name": "Intelligent Asphalt Ductilometer",
      "model": "SYD-4508G",
      "category": "Asphalt and bitumen Testing Equipment Series",
      "thumbnail": "/assets/images/SYD-4508G.png",
      "image": "myImages/SYD-4508G-Image.png",
      "description": "This instrument measures the length of petroleum asphalt when it is stretched to break at a certain speed under specified conditions and temperature. This equipment is a multi-purpose asphalt testing instrument that integrates asphalt ductility, asphalt force ductility, and asphalt elastic recovery capacity testing.",
      "features": [
        "The air-conditioning water pump and the main machine are designed separately on the ground, and the stretching process is stable and synchronous, without shaking, and the speed is uniform, which improves the test accuracy;",
        "It adopts industrial control touch screen, and has two recording methods: wireless remote control recording and instrument touch screen recording, which are convenient for users to choose and use."
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
          "label": "Working power supply",
          "value": "AC220V±10%, 50-60Hz"
        },
        {
          "label": "Measuring range",
          "value": "1.5m (±10mm)"
        },
        {
          "label": "Heating method",
          "value": "Electric heater heating"
        },
        {
          "label": "Heating power",
          "value": "3500W"
        },
        {
          "label": "Bath liquid circulation",
          "value": "Shielded cold and hot balance pressurized  circulation system"
        },
        {
          "label": "Temperature control range",
          "value": "Adjustable from 2℃ to 50 ℃, digital display, temperature display resolution 0.01"
        },
        {
          "label": "Temperature control accuracy",
          "value": "±0.1° C"
        },
        {
          "label": "Tensile speed",
          "value": "10mm/min, 50mm/min two gears"
        },
        {
          "label": "Measurement accuracy",
          "value": "±1mm"
        },
        {
          "label": "Extensibility display",
          "value": "Real-time display on industrial touch screen"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P061",
      "name": "Intelligent Asphalt Ductilometer",
      "model": "STYD-3",
      "category": "Asphalt and bitumen Testing Equipment Series",
      "thumbnail": "/assets/images/STYD-3.png",
      "image": "myImages/STYD-3-Image.png",
      "description": "This instrument is suitable for measuring the elongation of viscous petroleum,viscous shale asphalt,wax liquid, asphalt, liquid asphalt residue after distillation and asphalt emulsion fluid   evaporation residue,etc.It is widely used in production, road construction and scientific research departments.",
      "features": [
        "The inner box of this machine is made of imported stainless steel bending, and the inner tank  is equipped with a set of 3000-3500 watt  heating tube, a 1100 watt refrigerator and a set  of  cold tube, and a permanent magnet low-speed synchronous motor is used to drive the gearbox. The rod pulls the slide,optionally extending at a rate of 50mm/min±2.5mm/min."
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
          "label": "Extension speed",
          "value": "50±2.5mm/min,10±0.5mm/min"
        },
        {
          "label": "Test temperature",
          "value": "2~50℃  (adjust by yourself according to actual needs)"
        },
        {
          "label": "Heating power",
          "value": "3~3.5kW"
        },
        {
          "label": "Cooling power",
          "value": "1kW"
        },
        {
          "label": "Temperature control accuracy",
          "value": "±0.1° C"
        },
        {
          "label": "Working voltage",
          "value": "220V±10%"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P062",
      "name": "Asphalt Mixture CBR/Marshall Stability Tester",
      "model": "LD-5B",
      "category": "Asphalt and bitumen Testing Equipment Series",
      "thumbnail": "/assets/images/LD-5B.png",
      "image": "myImages/LD-5B-Image.png",
      "description": "The automatic asphalt mixture stability tester is used to measure the ultimate pressure value and vertical deformation of the asphalt mixture specimen when the pressure reaches the failure point. It is a commonly used testing equipment for asphalt mix ratio design and asphalt pavement construction quality inspection.",
      "features": [
        "This machine adopts ARM core processor, high-precision load sensor,high-precision   displacement sensor, and high measurement and control precision."
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
          "label": "Load range",
          "value": "30±0.1kN"
        },
        {
          "label": "Displacement range",
          "value": "10±0.1mm"
        },
        {
          "label": "Loading speed",
          "value": "50±5mm/min"
        },
        {
          "label": "Loading method",
          "value": "Automatic/Manual"
        },
        {
          "label": "Relative Humidity",
          "value": "≤85%RH"
        },
        {
          "label": "Working power supply",
          "value": "AC220V±10%"
        },
        {
          "label": "Power",
          "value": "500W"
        },
        {
          "label": "Dimensions",
          "value": "550×350×700mm"
        },
        {
          "label": "Weight",
          "value": "65kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P063",
      "name": "Automatic Laboratory Bituminous Mixers",
      "model": "LDHB-20",
      "category": "Asphalt and bitumen Testing Equipment Series",
      "thumbnail": "/assets/images/LDHB-20.png",
      "image": "myImages/LDHB-20-Image.png",
      "description": "The vertical fully automatic mixture mixer is a mixing machine commonly used in the preparation of asphalt, sand and gravel mixture, cement and sand and gravel mixture  samples.",
      "features": [
        "This machine adopts intelligent control instruments, automatic temperature control,  the  temperature of the heating pot can be set arbitrarily from room temperature to 200 ℃, and the stirring time is controlled by a timer, which can be set arbitrarily within the range of 1 to 999 seconds."
      ],
      "standards": [
        "EN 12697-35",
        "ASTM D6307",
        "AASHTO TP53"
      ],
      "specifications": [
        {
          "label": "Stirring capacity",
          "value": "20L"
        },
        {
          "label": "Heating pot temperature range",
          "value": "Room temperature~200 ℃ (arbitrary setting)"
        },
        {
          "label": "Temperature control accuracy",
          "value": "±0.5° C"
        },
        {
          "label": "Stirring time",
          "value": "1~999s (arbitrary setting)"
        },
        {
          "label": "Stirring blade rotation speed",
          "value": "75 rpm"
        },
        {
          "label": "Revolution speed",
          "value": "46 rpm"
        },
        {
          "label": "Temperature",
          "value": "-10~40° C"
        },
        {
          "label": "Relative humidity",
          "value": "Not more than 80%"
        },
        {
          "label": "Power supply voltage",
          "value": "Power supply, motor,voltage380V, heating part 220V"
        },
        {
          "label": "(that is, the power supply part should be three-phase four-wire system, the total power supply should be 380V plus 220V neutral wire)",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P064",
      "name": "Asphalt Wax Content Tester",
      "model": "LDL-2",
      "category": "Asphalt and bitumen Testing Equipment Series",
      "thumbnail": "/assets/images/LDL-2.png",
      "image": "myImages/LDL-2-Image.png",
      "description": "This product is suitable for determining the wax content in petroleum asphalt, the wax content  of  petroleum asphalt produced from the vacuum residue of natural crude oil, and the wax   content of road petroleum asphalt.This equipment is a commonly used asphalt wax content detection equipment in the petrochemical, construction, and road construction industries.",
      "features": [
        "The temperature controller of this machine adopts a digital temperature controller with high precision, clear temperature display, and convenient setting of temperature control points. The instrument can be used for analysis tests of three samples at a time, and the test efficiency is high."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Working power supply",
          "value": "AC220V±10%"
        },
        {
          "label": "Heating power",
          "value": "1000W"
        },
        {
          "label": "Cooling power",
          "value": "1000W"
        },
        {
          "label": "Internal circulation low temperature water pump",
          "value": "DC12V, 42W"
        },
        {
          "label": "Temperature sensor",
          "value": "Pt100"
        },
        {
          "label": "Refrigerant medium",
          "value": "R404"
        },
        {
          "label": "Temperature control accuracy",
          "value": "±0.5° C"
        },
        {
          "label": "Operating environment",
          "value": "Ambient temperature -10° C ~+30° C,  relative temperature <85%"
        },
        {
          "label": "Machine power consumption",
          "value": "No more than 2100W"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P065",
      "name": "Rotating Shelf Thin Film Oven (TFOT)",
      "model": "82 Type",
      "category": "Asphalt and bitumen Testing Equipment Series",
      "thumbnail": "/assets/images/82 Type.png",
      "image": "myImages/82 Type-Image.png",
      "description": "This product is mainly used for asphalt film heating test. \nExplosives are strictly forbidden to be heated in the box to avoid explosion.",
      "features": [
        "The  temperature  controller  of  this  machine  adopts  an  anti-integral  saturation circuit, which greatly improves the temperature fluctuation performance .",
        "Dual-purpose: After the workbench is disassembled, it can be  used as a drying box."
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
          "label": "Heating power",
          "value": "2.2kW"
        },
        {
          "label": "Usage Environment",
          "value": "Temperature 10~40℃, relative humidity ≤80%, no vibration and no corrosive or flammable gas"
        },
        {
          "label": "Working temperature",
          "value": "163±1° C, 175±1° C  (Maximum working temperature 200° C)"
        },
        {
          "label": "Voltage",
          "value": "220V"
        },
        {
          "label": "Temperature range",
          "value": "50～200℃"
        },
        {
          "label": "Temperature fluctuation",
          "value": "±1℃"
        },
        {
          "label": "Disc rack speed",
          "value": "5.5 rpm"
        },
        {
          "label": "Disc diameter",
          "value": "360mm"
        },
        {
          "label": "Studio size",
          "value": "450×450×450mm"
        },
        {
          "label": "Dimensions",
          "value": "750×600×9200mm"
        },
        {
          "label": "Weight",
          "value": "100kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P066",
      "name": "Rolling Thin-Film Oven (RTFOT)",
      "model": "85 Type",
      "category": "Asphalt and bitumen Testing Equipment Series",
      "thumbnail": "/assets/images/85 Type.png",
      "image": "myImages/85 Type-Image.png",
      "description": "The instrument is suitable for measuring the performance change of semi-solid asphalt under the action of heating and air,and can check the aging performance of asphalt in a short time.",
      "features": [
        "The controller adopts integral saturation circuit, digital display temperature and time control,   and the temperature time can be adjusted according to requirements.",
        "The most advanced permanent magnet synchronous motor and speed changer are installed at the rear of the whole machine, so that the working turntable can rotate reliably under the technical requirement of 15 revolutions per minute."
      ],
      "standards": [
        "EN 12607-1",
        "ASTM D2872",
        "AASHTO T240"
      ],
      "specifications": [
        {
          "label": "Heating wire power",
          "value": "2kW"
        },
        {
          "label": "Number of heating wires",
          "value": "2 PCS"
        },
        {
          "label": "Working temperature",
          "value": "85±0.5° C, 135±0.5° C, 163±0.5° C, 175±0.5° C"
        },
        {
          "label": "Maximum temperature",
          "value": "200° C"
        },
        {
          "label": "Fan",
          "value": "Squirrel cage"
        },
        {
          "label": "Fan speed",
          "value": "1725±100r/min"
        },
        {
          "label": "Air volume",
          "value": "4000±200mL/min"
        },
        {
          "label": "Nozzle diameter",
          "value": "1±0.1mm"
        },
        {
          "label": "Sample bottle size",
          "value": ""
        },
        {
          "label": "(opening diameter × bottle diameter × overal height)",
          "value": "Φ31.75×Φ64×139.7 mm"
        },
        {
          "label": "Rotary brick number",
          "value": "15±0.2r/ min"
        },
        {
          "label": "The number of sample bottles that can be loaded",
          "value": "8 PCS"
        },
        {
          "label": "Total power",
          "value": "2.5kW"
        },
        {
          "label": "Power supply voltage",
          "value": "AC220V±10%"
        },
        {
          "label": "Studio size",
          "value": "450×483×381mm"
        },
        {
          "label": "Dimensions",
          "value": "630×765×920mm"
        },
        {
          "label": "Weight",
          "value": "130kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P067",
      "name": "Overflow Water Bath",
      "model": "CF-C",
      "category": "Asphalt and bitumen Testing Equipment Series",
      "thumbnail": "/assets/images/CF-C.png",
      "image": "myImages/CF-C-Image.png",
      "description": "CF-C constant temperature overflow water tank is developed according to the asphalt mixture density test method in the test regulations, and has functions such as automatic constant temperature. This product is widely used in scientific research departments such as chemical industry and physical performance testing.",
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
          "label": "Heating power",
          "value": "1500W"
        },
        {
          "label": "Cooling power",
          "value": "138W"
        },
        {
          "label": "Temperature range",
          "value": "Room temperature-60℃"
        },
        {
          "label": "Temperature control accuracy",
          "value": "±0.1℃"
        },
        {
          "label": "Voltage",
          "value": "220V"
        },
        {
          "label": "Studio size",
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
      "isNew": false
    },
    {
      "id": "P068",
      "name": "Water Bath",
      "model": "TC-20",
      "category": "Asphalt and bitumen Testing Equipment Series",
      "thumbnail": "/assets/images/TC-20恒温.png",
      "image": "myImages/TC-20-Image.png",
      "description": "The machine creates a constant temperature environment in the box by controlling the temperature change. The constant temperature water bath has a wide range of applications and is suitable for scientific laboratories such as biology, chemistry, physics, plants, and chemicals.",
      "features": [
        "The shell of this machine is made of steel plate,the shell is sprayed with high-temperature spray paint, and the inner tank is made of imported stainless steel material,with exquisite  workmanship,more reasonable structure and more convenient use."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Control temperature",
          "value": "Room temperature ~ 100 ℃"
        },
        {
          "label": "Total power of electric heating tube",
          "value": "2kW"
        },
        {
          "label": "Number of electric heating tubes",
          "value": "2 PCS"
        },
        {
          "label": "Power supply voltage",
          "value": "AC220V±10%"
        },
        {
          "label": "Studio size",
          "value": "600×300×210mm"
        },
        {
          "label": "Dimensions",
          "value": "820×395×315mm"
        },
        {
          "label": "Weight",
          "value": "35kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P069",
      "name": "Low Temperature Water Bath",
      "model": "TC-20",
      "category": "Asphalt and bitumen Testing Equipment Series",
      "thumbnail": "/assets/images/TC-20低温.png",
      "image": "myImages/TC-20-Image.png",
      "description": "Low temperature constant temperature bath is one of the commonly used equipment  in  laboratories.It is widely used in petroleum,chemical industry,metallurgy, medicine,biochemical  property testing,chemical analysis research departments, colleges and universities,factory laboratories and metrology quality inspection departments.It also provides a maintenance  environment with controlled heat and cold and uniform and constant temperature.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Temperature range",
          "value": "-6.00~59.99℃"
        },
        {
          "label": "Fluctuation",
          "value": "±0.1°C"
        },
        {
          "label": "Inner tank volume",
          "value": "50L"
        },
        {
          "label": "Working tank size",
          "value": "550×300×300mm"
        },
        {
          "label": "Pump flow",
          "value": "13L/mm3"
        },
        {
          "label": "Total power",
          "value": "2.2kW"
        },
        {
          "label": "Supply voltage",
          "value": "AC220V±10%"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P070",
      "name": "Low Temperature Water Bath",
      "model": "THD-0506",
      "category": "Asphalt and bitumen Testing Equipment Series",
      "thumbnail": "/assets/images/THD-0506.png",
      "image": "myImages/THD-0506-Image.png",
      "description": "Low temperature constant temperature bath is one of the commonly used equipment  in  laboratories.It is widely used in petroleum,chemical industry,metallurgy, medicine,biochemical  property testing,chemical analysis research departments, colleges and universities,factory laboratories and metrology quality inspection departments.It also provides a maintenance  environment with controlled heat and cold and uniform and constant temperature.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Temperature range",
          "value": "-6.00~59.99℃"
        },
        {
          "label": "Fluctuation",
          "value": "±0.1°C"
        },
        {
          "label": "Inner tank volume",
          "value": "15L"
        },
        {
          "label": "Working tank size",
          "value": "250×200×300mm"
        },
        {
          "label": "Pump flow",
          "value": "6L/mm³"
        },
        {
          "label": "Total power",
          "value": "1.5kW"
        },
        {
          "label": "Supply voltage",
          "value": "AC220V±10%"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P071",
      "name": "Computer Asphalt Softening Point Tester",
      "model": "LD-2000",
      "category": "Asphalt and bitumen Testing Equipment Series",
      "thumbnail": "/assets/images/LD-2000.png",
      "image": "myImages/LD-2000-Image.png",
      "description": "This product is suitable for the determination of the softening point of road petroleum asphalt, coal asphalt, liquid petroleum asphalt, etc., and is generally applicable to road, bridge construction and other industries.",
      "features": [
        "The heating speed of the machine is controlled by PID plus fuzzy logic algorithm, and the temperature rises linearly."
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
          "label": "Test medium",
          "value": "Water or glycerin"
        },
        {
          "label": "Temperature range",
          "value": "0～125°C"
        },
        {
          "label": "Resolution",
          "value": "0.01"
        },
        {
          "label": "Temperature control rate",
          "value": "After three minutes: 5℃±0.5℃/min"
        },
        {
          "label": "Measurement accuracy",
          "value": "0.5℃"
        },
        {
          "label": "Test room temperature",
          "value": "Less than 30 ° C and relatively stable, no air convection Heating rate"
        },
        {
          "label": "Mixing method",
          "value": "Magnetic stirring, stepless adjustable"
        },
        {
          "label": "Temperature control method",
          "value": "Automatic temperature control"
        },
        {
          "label": "Heating power",
          "value": "0.7kW"
        },
        {
          "label": "Relative humidity",
          "value": "≦85%"
        },
        {
          "label": "Steel ball weight",
          "value": "3.50±0.05g"
        },
        {
          "label": "Steel ball diameter",
          "value": "Φ9.53mm"
        },
        {
          "label": "Beaker volume",
          "value": "1000ml"
        },
        {
          "label": "Power supply voltage",
          "value": "AC220V±10%"
        },
        {
          "label": "Dimensions",
          "value": "200×260×260mm"
        },
        {
          "label": "Weight",
          "value": "5kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P072",
      "name": "Computer Automatic Asphalt Penetrometer",
      "model": "IV-2000",
      "category": "Asphalt and bitumen Testing Equipment Series",
      "thumbnail": "/assets/images/IV-2000.png",
      "image": "myImages/IV-2000-Image.png",
      "description": "This product is suitable for measuring the penetration of viscous petroleum asphalt, viscous shale asphalt, liquid petroleum asphalt, road petroleum asphalt and modified asphalt, liquid petroleum asphalt distillation or emulsified asphalt residue after evaporation, generally suitable for road, municipal,chemical, scientific research and other departments engaged in  the measurement and research of asphalt performance indicators.",
      "features": [
        "This machine adopts the fine-tuning technology up and down of the microscope, which is very convenient to align the needle up and down. It is equipped with the most advanced digital temperature sensor, and the temperature measurement is more accurate."
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
          "label": "Temperature setting",
          "value": "0-99.9℃ adjustable, display precision 0.1℃(factory setting is 25℃)"
        },
        {
          "label": "Time setting",
          "value": "0-99.9s adjustable, display precision 0.1s(factory setting is 5s)"
        },
        {
          "label": "Temperature control range",
          "value": "10-60℃,accuracy ±0.5℃"
        },
        {
          "label": "Total cone weight",
          "value": "100±0.05g"
        },
        {
          "label": "Standard needle",
          "value": "25±0.05g"
        },
        {
          "label": "Counterweight",
          "value": "50±0.05g"
        },
        {
          "label": "Constant temperature container",
          "value": "＞1.0L"
        },
        {
          "label": "Voltage",
          "value": "220V±10%, 50-60Hz"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P073",
      "name": "Shock Absorber Universal Material Testing Machine",
      "model": "WAW-600Pro",
      "category": "Hydraulic Universal Testing Маchine Series",
      "thumbnail": "/assets/images/WAW-600Pro.png",
      "image": "myImages/WAW-600Pro-Image.png",
      "description": "This testing machine is mainly used for tensile, compression, bending and shear tests of metal materials, and meets the requirements of national standards such as ASTM E8 metal tensile test standard.",
      "features": [
        "The servo oil source control system used in this equipment can effectively reduce the equipment operation noise, reduce heat generation, extend the service life of the oil, and eliminate the need for cooling.",
        "The shock absorption system of this equipment can effectively reduce the vibration during the use of the equipment, making the experimental process safer and more comfortable.",
        "The screwless structure makes this equipment more rigid, more convenient for maintenance and lower failure rate compared to other universal testing machines."
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
          "label": "Maximum test force (KN)",
          "value": "600"
        },
        {
          "label": "Effective measurement range",
          "value": "5%～100%FS"
        },
        {
          "label": "Accuracy of load indication value",
          "value": "Level 0.5"
        },
        {
          "label": "Stretching space (mm)",
          "value": "670"
        },
        {
          "label": "Circular Sample clamping diameter (mm)",
          "value": "Φ13~Φ26,Φ26~Φ40"
        },
        {
          "label": "Flat Sample clamping diameter (mm)",
          "value": "0~15"
        },
        {
          "label": "Sample clamping width(mm)",
          "value": "110"
        },
        {
          "label": "Maximum rising speed (mm/min)",
          "value": "350"
        },
        {
          "label": "Maximum lowering speed (mm/min)",
          "value": "500"
        },
        {
          "label": "Motor power(kW)",
          "value": "2.3"
        },
        {
          "label": "Supply Voltage",
          "value": "AC220V±10%,50-60Hz"
        },
        {
          "label": "Dimensions of machine(mm)",
          "value": "1440×580×2200"
        },
        {
          "label": "Weight (kg)",
          "value": "2350"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P074",
      "name": "Concrete Fast Freeze-thaw Chamber",
      "model": "TDRF-1",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/TDRF-1（连体）.png",
      "image": "myImages/TDRF-1-Image.png",
      "description": "Our company is the standard drafting unit of Building Materials Department of TDRF concrete fast freeze-thaw chamber (device),and participated in the formulation of the standard of apparatus for resistance to freeze-thaw test of concrete of National Building Materials Academy.\nThis product is suitable for freeze-thaw tests on concrete, building bricks,ceramic bricks and other building materials.",
      "features": [],
      "standards": [
        "ASTM C666",
        "AASHTO T161",
        "PROCEDURE A"
      ],
      "specifications": [
        {
          "label": "Condenser cooling way：Air-cooling",
          "value": ""
        },
        {
          "label": "Number of test pieces ：28 PCS",
          "value": ""
        },
        {
          "label": "Specimen size：100×100×400mm,the temperature measuring parts are of the same size, and there are temperature measuring holes in the middle.",
          "value": ""
        },
        {
          "label": "Freezing end time/test piece center temperature：1.5～2.5h/-17±2℃（New standard -18±2℃）",
          "value": ""
        },
        {
          "label": "Melting end time/test piece center temperature：1.0～2.0h/8±2℃（New standard 5±2℃）",
          "value": ""
        },
        {
          "label": "Freeze-thaw cycle：2.5～4h,the melting time is not less than 1/4 freeze-thaw cycle.",
          "value": ""
        },
        {
          "label": "The temperature difference between the center and the surface of the specimen：＜28℃",
          "value": ""
        },
        {
          "label": "Number of cycles：The standard is 300 times, and the number of cycles can be adjusted.",
          "value": ""
        },
        {
          "label": "Temperature recorder：LCD touch screen controller",
          "value": ""
        },
        {
          "label": "Freeze-thaw cycle medium：-45°C antifreeze (1",
          "value": "1 mixed with water)"
        },
        {
          "label": "Amount of freeze-thaw cycle media charged：90kg",
          "value": ""
        },
        {
          "label": "Refrigerator compressor：Complete inlet closure 8.5HP",
          "value": ""
        },
        {
          "label": "Specimen barrel size：115×115×490mm",
          "value": ""
        },
        {
          "label": "Heating power：9kW",
          "value": ""
        },
        {
          "label": "Maximum operating power：11kW",
          "value": ""
        },
        {
          "label": "Voltage：AC380V±10%",
          "value": ""
        },
        {
          "label": "Overall dimensions：1870×1370×1000mm",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P075",
      "name": "Concrete Fast Freeze-thaw Chamber",
      "model": "TDRF-2",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/TDRF-2（连体）.png",
      "image": "myImages/TDRF-2-Image.png",
      "description": "Our company is the standard drafting unit of Building Materials Department of TDRF concrete fast freeze-thaw chamber (device),and participated in the formulation of the standard of apparatus for resistance to freeze-thaw test of concrete of National Building Materials Academy.\nThis product is suitable for freeze-thaw tests on concrete, building bricks,ceramic bricks and other building materials.",
      "features": [],
      "standards": [
        "ASTM C666",
        "AASHTO T161",
        "PROCEDURE A"
      ],
      "specifications": [
        {
          "label": "Condenser cooling way：Air-cooling",
          "value": ""
        },
        {
          "label": "Number of test pieces ：16 PCS",
          "value": ""
        },
        {
          "label": "Specimen size：100×100×400mm,the temperature measuring parts are of the same size, and there are temperature measuring holes in the middle.",
          "value": ""
        },
        {
          "label": "Freezing end time/test piece center temperature：1.5～2.5h/-17±2℃（New standard -18±2℃）",
          "value": ""
        },
        {
          "label": "Melting end time/test piece center temperature：1.0～2.0h/8±2℃（New standard 5±2℃）",
          "value": ""
        },
        {
          "label": "Freeze-thaw cycle：2.5～4h,the melting time is not less than 1/4 freeze-thaw cycle.",
          "value": ""
        },
        {
          "label": "The temperature difference between the center and the surface of the specimen：＜28℃",
          "value": ""
        },
        {
          "label": "Number of cycles：The standard is 300 times, and the number of cycles can be adjusted.",
          "value": ""
        },
        {
          "label": "Temperature recorder：LCD touch screen controller",
          "value": ""
        },
        {
          "label": "Freeze-thaw cycle medium：-45°C antifreeze (1",
          "value": "1 mixed with water)"
        },
        {
          "label": "Amount of freeze-thaw cycle media charged：60kg",
          "value": ""
        },
        {
          "label": "Refrigerator compressor：Complete inlet closure 5HP",
          "value": ""
        },
        {
          "label": "Specimen barrel size：115×115×490mm",
          "value": ""
        },
        {
          "label": "Heating power：6kW",
          "value": ""
        },
        {
          "label": "Maximum operating power：8kW",
          "value": ""
        },
        {
          "label": "Voltage：AC380V±10%",
          "value": ""
        },
        {
          "label": "Overall dimensions：1870×1000×1000mm",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P076",
      "name": "Concrete Fast Freeze-thaw Chamber",
      "model": "TDRF-3",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/TDRF-3（连体）.png",
      "image": "myImages/TDRF-3-Image.png",
      "description": "Our company is the standard drafting unit of Building Materials Department of TDRF concrete fast freeze-thaw chamber (device),and participated in the formulation of the standard of apparatus for resistance to freeze-thaw test of concrete of National Building Materials Academy.\nThis product is suitable for freeze-thaw tests on concrete, building bricks,ceramic bricks and other building materials.",
      "features": [],
      "standards": [
        "ASTM C666",
        "AASHTO T161",
        "PROCEDURE A"
      ],
      "specifications": [
        {
          "label": "Condenser cooling way：Air-cooling",
          "value": ""
        },
        {
          "label": "Number of test pieces ：10 PCS",
          "value": ""
        },
        {
          "label": "Specimen size：100×100×400mm,the temperature measuring parts are of the same size, and there are temperature measuring holes in the middle.",
          "value": ""
        },
        {
          "label": "Freezing end time/test piece center temperature：1.5～2.5h/-17±2℃（New standard -18±2℃）",
          "value": ""
        },
        {
          "label": "Melting end time/test piece center temperature：1.0～2.0h/8±2℃（New standard 5±2℃）",
          "value": ""
        },
        {
          "label": "Freeze-thaw cycle：2.5～4h,the melting time is not less than 1/4 freeze-thaw cycle.",
          "value": ""
        },
        {
          "label": "The temperature difference between the center and the surface of the specimen：＜28℃",
          "value": ""
        },
        {
          "label": "Number of cycles：The standard is 300 times, and the number of cycles can be adjusted.",
          "value": ""
        },
        {
          "label": "Temperature recorder：LCD touch screen controller",
          "value": ""
        },
        {
          "label": "Freeze-thaw cycle medium：-45°C antifreeze (1",
          "value": "1 mixed with water)"
        },
        {
          "label": "Amount of freeze-thaw cycle media charged：30kg",
          "value": ""
        },
        {
          "label": "Refrigerator compressor：Complete inlet closure 3HP",
          "value": ""
        },
        {
          "label": "Specimen barrel size：115×115×490mm",
          "value": ""
        },
        {
          "label": "Heating power：4.5kW",
          "value": ""
        },
        {
          "label": "Maximum operating power：6kW",
          "value": ""
        },
        {
          "label": "Voltage：AC380V±10%",
          "value": ""
        },
        {
          "label": "Overall dimensions：1620×1000×1000mm",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P077",
      "name": "Concrete Carbonation Test Chamber",
      "model": "CCB-70A",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/CCB-70A.png",
      "image": "myImages/CCB-70A-Image.png",
      "description": "Our company participated in the drafting of CCB-70A concrete carbon ization test chamber and designated by the Building Materials Department.This equipment is a special apparatus for carbonation test of concretes.",
      "features": [],
      "standards": [
        "ISO 1920-12"
      ],
      "specifications": [
        {
          "label": "Temperature control：20±2℃(adjust)",
          "value": ""
        },
        {
          "label": "Temperature control precision ：0.5℃",
          "value": ""
        },
        {
          "label": "Humidity control ：70±5%RH (40~70 adjust)",
          "value": ""
        },
        {
          "label": "CO2 concentration：20±3% (0~60,0~100 adjust,two ranges available)",
          "value": ""
        },
        {
          "label": "CO2 concentration resolution ：±1%",
          "value": ""
        },
        {
          "label": "CO2 concentration uniformity ：≦2%",
          "value": ""
        },
        {
          "label": "CO2 concentration precision  ：1%",
          "value": ""
        },
        {
          "label": "Heating power ：600W",
          "value": ""
        },
        {
          "label": "Refrigeration/Dehumidification power ：240W",
          "value": ""
        },
        {
          "label": "Humidification power ：1500W",
          "value": ""
        },
        {
          "label": "Voltage：AC220V±10%",
          "value": ""
        },
        {
          "label": "Studio size ：620×550×1230mm",
          "value": ""
        },
        {
          "label": "Overall dimensions：1100×710×1630mm",
          "value": ""
        },
        {
          "label": "Weigh：200kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P078",
      "name": "Accelerated Concrete Curing Tank",
      "model": "LDZY-400",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/LDZY-400.png",
      "image": "myImages/LDZY-400-Image.png",
      "description": "This product is a common equipment for the steam curing test of concrete specimens.The equipment is made of stainless steel inside and outside, touch screen operation display, automatic control, the test process is simple and convenient.",
      "features": [],
      "standards": [
        "ASTM C684 Method C"
      ],
      "specifications": [
        {
          "label": "Specimen size with mold：195×195×175mm",
          "value": ""
        },
        {
          "label": "Box inner diameter：1000×750×640mm",
          "value": ""
        },
        {
          "label": "Overall dimensions：1560×850×900mm",
          "value": ""
        },
        {
          "label": "Number of specimen groups：8 groups (24 pieces in total)",
          "value": ""
        },
        {
          "label": "Temperature rise rate  ：≦15℃/h",
          "value": ""
        },
        {
          "label": "Heating power：4.0kW (new heating tube)",
          "value": ""
        },
        {
          "label": "Cooling power：0.5kW",
          "value": ""
        },
        {
          "label": "Voltage：AC220V±10%",
          "value": ""
        },
        {
          "label": "Frequency：50-60Hz",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P079",
      "name": "Alkali-aggregate Test Chamber(Mortar-Bar Method and Accelerated Mortar-Bar Method)",
      "model": "JKS",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/JKS.png",
      "image": "myImages/JKS-Image.png",
      "description": "Alkali-aggregate test chamber is designed and manufactured according to the national standard requirements for concrete long-term durability test.It is suitable for temperature control and time control of sand aggregate expansion test. The inner liner and shelf are made of stainless steel material.\nIt is suitable for conducting alkali-aggregate reaction test as to long-term durability of concretes in construction units,highway bridge engineering  units,and related research and quality inspection departments.",
      "features": [],
      "standards": [
        "ASTM C1260",
        "ASTM C1567"
      ],
      "specifications": [
        {
          "label": "Temperature control：Room temperature ~100℃(adjust)",
          "value": ""
        },
        {
          "label": "Temperature control precision ：±0.2℃",
          "value": ""
        },
        {
          "label": "Control time range：1~999min（99.9 days）",
          "value": ""
        },
        {
          "label": "Frequency：50-60Hz",
          "value": ""
        },
        {
          "label": "Control time precision ：±1min",
          "value": ""
        },
        {
          "label": "Heating power ：6kW",
          "value": ""
        },
        {
          "label": "Water pump power ：90W",
          "value": ""
        },
        {
          "label": "Voltage：AC380V±10%",
          "value": ""
        },
        {
          "label": "Studio size：650×550×600 (clear height 450mm)",
          "value": ""
        },
        {
          "label": "Overall dimensions：1010×680×800mm",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P080",
      "name": "Constant Temperature and Humidity Curing Controller (high pressure atomization)",
      "model": "LDWS-50",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/LDWS-50（高压喷雾）.png",
      "image": "myImages/LDWS-50-Image.png",
      "description": "This product is suitable for the maintenance of large quantities of concrete,cement products and other test pieces in various laboratories,which integrates refrigeration,heating and humidification functions in one.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Temperature measurement accuracy ：±1℃",
          "value": ""
        },
        {
          "label": "Temperature control：20±2℃",
          "value": ""
        },
        {
          "label": "Humidity control：≥95%RH",
          "value": ""
        },
        {
          "label": "Voltage：380V",
          "value": ""
        },
        {
          "label": "Supply frequency ：50-60Hz",
          "value": ""
        },
        {
          "label": "Refrigerator power ：3000W",
          "value": ""
        },
        {
          "label": "Heater power ：9000W",
          "value": ""
        },
        {
          "label": "Maximum control area：50m3",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P081",
      "name": "Constant Temperature and Humidity Curing Controller (high pressure atomization)",
      "model": "LDWS-100",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/LDWS-100（高压喷雾）.png",
      "image": "myImages/LDWS-100-Image.png",
      "description": "This product is suitable for the maintenance of large quantities of concrete,cement products and other test pieces in various laboratories,which integrates refrigeration,heating and humidification functions in one.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Temperature measurement accuracy ：±1℃",
          "value": ""
        },
        {
          "label": "Temperature control：20±2℃",
          "value": ""
        },
        {
          "label": "Humidity control：≥95%RH",
          "value": ""
        },
        {
          "label": "Voltage：380V",
          "value": ""
        },
        {
          "label": "Supply frequency ：50-60Hz",
          "value": ""
        },
        {
          "label": "Refrigerator power ：4000W",
          "value": ""
        },
        {
          "label": "Heater power ：9000W",
          "value": ""
        },
        {
          "label": "Maximum control area：100m3",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P082",
      "name": "Constant Temperature And Humidity Curing Controller (ultrasonic atomization)",
      "model": "LDWS-50",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/LDWS-50（超声波喷雾）.png",
      "image": "myImages/LDWS-50-Image.png",
      "description": "This product is suitable for the maintenance of large quantities of concrete,cement products and other test pieces in various laboratories,which integrates refrigeration,heating and humidification functions in one.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Temperature measurement accuracy ：±1℃",
          "value": ""
        },
        {
          "label": "Temperature control：20±2℃",
          "value": ""
        },
        {
          "label": "Humidity control：≥95%RH",
          "value": ""
        },
        {
          "label": "Voltage：380V",
          "value": ""
        },
        {
          "label": "Supply frequency ：50-60Hz",
          "value": ""
        },
        {
          "label": "Refrigerator power ：3000W",
          "value": ""
        },
        {
          "label": "Heater power ：9000W",
          "value": ""
        },
        {
          "label": "Maximum control area：50m3",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P083",
      "name": "Constant Temperature And Humidity Curing Controller (ultrasonic atomization)",
      "model": "LDWS-100",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/LDWS-100（超声波喷雾）.png",
      "image": "myImages/LDWS-100-Image.png",
      "description": "This product is suitable for the maintenance of large quantities of concrete,cement products and other test pieces in various laboratories,which integrates refrigeration,heating and humidification functions in one.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Temperature measurement accuracy ：±1℃",
          "value": ""
        },
        {
          "label": "Temperature control：20±2℃",
          "value": ""
        },
        {
          "label": "Humidity control：≥95%RH",
          "value": ""
        },
        {
          "label": "Voltage：380V",
          "value": ""
        },
        {
          "label": "Supply frequency ：50-60Hz",
          "value": ""
        },
        {
          "label": "Refrigerator power ：4000W",
          "value": ""
        },
        {
          "label": "Heater power ：9000W",
          "value": ""
        },
        {
          "label": "Maximum control area：100m3",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P084",
      "name": "Constant Temperature And Humidity Control System",
      "model": "LDWSA20",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/LDWSA20.png",
      "image": "myImages/LDWSA20-Image.png",
      "description": "The product is suitable for cement plant, construction units, highway and bridge engineering units and  relevant scientific research and quality inspection departments to perform standard maintenance on the strength and setting time of mortar, cement products and other samples.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Temperature control：15～25±2℃(adjust)",
          "value": ""
        },
        {
          "label": "Temperature controller error：±1℃",
          "value": ""
        },
        {
          "label": "Humidity control：50～80±5％RH(adjust)",
          "value": ""
        },
        {
          "label": "Maximum control area：10m2",
          "value": ""
        },
        {
          "label": "Heating power ：1500W",
          "value": ""
        },
        {
          "label": "Refrigerator power ：1500W",
          "value": ""
        },
        {
          "label": "Dehumidification power：500W",
          "value": ""
        },
        {
          "label": "Voltage：AC220V±10%",
          "value": ""
        },
        {
          "label": "Wall-mounted controller installation size：450×200×550 mm",
          "value": ""
        },
        {
          "label": "Dimensions of 1.5 P air conditioner ：840×540×320mm",
          "value": ""
        },
        {
          "label": "Dimensions of dehumidifier：500×400×700mm",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P085",
      "name": "Constant Temperature And Humidity Environment Control System",
      "model": "LDHJ-50",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/LDHJ-50.png",
      "image": "myImages/LDHJ-50-Image.png",
      "description": "LDHJ-50 constant temperature and humidity environment control system is designed and  manufactured according to the national requirements for mortar chambers, cement chambers, insulation material chambers and other new standards,This product is suitable for cement factory and construction units, highway and bridge engineering units and relevant scientific research quality inspection departments of cement, concrete, cement products and other production and maintenance.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Temperature controller error：±1℃",
          "value": ""
        },
        {
          "label": "Temperature control：23±2℃(20-25±2℃ adjust)",
          "value": ""
        },
        {
          "label": "Humidity control：50%RH±5%(50%-70%RH±5% adjust)",
          "value": ""
        },
        {
          "label": "Voltage：380V",
          "value": ""
        },
        {
          "label": "Refrigerator/Dehumidification power：2500W",
          "value": ""
        },
        {
          "label": "Heating power：4500W",
          "value": ""
        },
        {
          "label": "Control volume：50m³",
          "value": ""
        },
        {
          "label": "Weight：200kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P086",
      "name": "Constant Temperature And Humidity Environment Control System",
      "model": "LDHJ-100",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/LDHJ-100.png",
      "image": "myImages/LDHJ-100-Image.png",
      "description": "LDHJ-100 constant temperature and humidity environment control system is designed and  manufactured according to the national requirements for mortar chambers, cement chambers, insulation material chambers and other new standards,This product is suitable for cement factory and construction units, highway and bridge engineering units and relevant scientific research quality inspection departments of cement, concrete, cement products and other production and maintenance.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Temperature controller error：±1℃",
          "value": ""
        },
        {
          "label": "Temperature control：23±2℃(20-25±2℃ adjust)",
          "value": ""
        },
        {
          "label": "Humidity control：50%RH±5%(50%-70%RH±5% adjust)",
          "value": ""
        },
        {
          "label": "Voltage：380V",
          "value": ""
        },
        {
          "label": "Refrigerator/Dehumidification power：4000W",
          "value": ""
        },
        {
          "label": "Heating power：7500W",
          "value": ""
        },
        {
          "label": "Control volume：100m³",
          "value": ""
        },
        {
          "label": "Weight：200kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P087",
      "name": "Curing Room Three-piece Set",
      "model": "BYS-3",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/BYS-3.png",
      "image": "myImages/BYS-3-Image.png",
      "description": "The product is suitable for cement plant, construction units, highway and bridge engineering units and relevant scientific research and quality inspection departments to perform standard maintenance on the strength and setting time of cement,concrete and cement product samples.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Temperature control instrument error ：±1℃",
          "value": ""
        },
        {
          "label": "Temperature control：20±2℃",
          "value": ""
        },
        {
          "label": "Humidity control：≥95%",
          "value": ""
        },
        {
          "label": "Voltage：AC220V±10%",
          "value": ""
        },
        {
          "label": "Power frequency：50-60Hz",
          "value": ""
        },
        {
          "label": "Refrigerator power：1～4 thousand kcal(customer-provided window air conditioner)",
          "value": ""
        },
        {
          "label": "Heater power ：3000W",
          "value": ""
        },
        {
          "label": "Maximum humidity and temperature control area：15m2(according to the area can be designed separately)",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P088",
      "name": "Concrete Impermeability Apparatus",
      "model": "HP-4.0",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/HP-4.0.png",
      "image": "myImages/HP-4.0-Image.png",
      "description": "HP-4.0 automatic pressure regulating concrete impermeability instrument is used to measure the impermeability of concrete,which is used in construction enterprises, scientific research institutions, design departments and other units to engaged in the measurement and experimental research of concrete impermeability.It can also be used for building materials permeability measurement of quality inspection.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Working pressure：4MPa",
          "value": ""
        },
        {
          "label": "Working mode：Automatic pressurization",
          "value": ""
        },
        {
          "label": "Number of test specimens：6 PCS",
          "value": ""
        },
        {
          "label": "Inner diameter of the upper opening of the test mold：Φ175mm",
          "value": ""
        },
        {
          "label": "Inner diameter of the bottom of the test mold：Φ185mm",
          "value": ""
        },
        {
          "label": "Trial mold height：160mm",
          "value": ""
        },
        {
          "label": "Motor power：80W",
          "value": ""
        },
        {
          "label": "Motor speed：136r/min",
          "value": ""
        },
        {
          "label": "Plunger pump plunger diameter：Φ10mm",
          "value": ""
        },
        {
          "label": "Plunger pump reciprocating frequency：136 times/min",
          "value": ""
        },
        {
          "label": "Piston pump flow ：0.11L/min",
          "value": ""
        },
        {
          "label": "Supply voltage：AC380V±10%",
          "value": ""
        },
        {
          "label": "Dimensions：1090×710×920mm",
          "value": ""
        },
        {
          "label": "Weight：185kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P089",
      "name": "Cement (Concrete) Fast Curing Chamber",
      "model": "A-Type",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/A-Type.png",
      "image": "myImages/A-Type-Image.png",
      "description": "This product is suitable for the rapid cooking and maintenance of  concrete and construction units such as cement plants, building materials, and construction units.the liner and shelf are made of stainless steel  material.",
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
          "label": "Voltage：220V",
          "value": ""
        },
        {
          "label": "Internal temperature：Room temperature to 100℃,users need to control freely",
          "value": ""
        },
        {
          "label": "Electric heat tube heating power ：2000W(3 PCS)",
          "value": ""
        },
        {
          "label": "Studio size：750×550×530mm",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P090",
      "name": "Direct-reading Concrete Air Content Tester",
      "model": "CA-3",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/CA-3.png",
      "image": "myImages/CA-3-Image.png",
      "description": "This product is mainly used to measure the air content of new mixing concrete. It is suitable for ordinary concrete, flowing concrete, dry hard concrete, but is not suitable for light ingredient concrete.The product is designed according to ANS1/ASTM C231-78 standard, which is in line with international standards.The air content value can be read directly from the degree disk, and there is no need to query curve conversion.",
      "features": [],
      "standards": [
        "EN 12350-7",
        "ASTM C231 type B",
        "AASHTO T152",
        "DIN 1048"
      ],
      "specifications": [
        {
          "label": "Concrete mix particle size：≤40mm",
          "value": ""
        },
        {
          "label": "Maximum air content determination：8%",
          "value": ""
        },
        {
          "label": "Concrete measuring pot size：Volume 7L, inner diameter to height ratio is 1",
          "value": "1"
        },
        {
          "label": "Display instrument pressure value range：0.25MPa",
          "value": ""
        },
        {
          "label": "Display instrument dividing value：0.005MPa",
          "value": ""
        },
        {
          "label": "The amount of air content：8%",
          "value": ""
        },
        {
          "label": "The minimum reading：0.1%",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P091",
      "name": "Imitation Japanese Concrete Air Content Tester",
      "model": "HC-7L",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/HC-7L.png",
      "image": "myImages/HC-7L-Image.png",
      "description": "This product is mainly used to measure the air content in the concrete mixture.It is suitable for the determination of the air content in concrete mixtures having a slump with sub-aggregate diameter not exceeding 40mm and air content not exceeding 10%.\nThis  machine  has  the  advantages  of  easy  operation,accurate measurement and intuitive reading.",
      "features": [],
      "standards": [
        "EN 12350-7",
        "ASTM C231 type B",
        "AASHTO T152",
        "DIN 1048"
      ],
      "specifications": [
        {
          "label": "Measuring bowl volume：7L(its inner diameter and depth are equal)",
          "value": ""
        },
        {
          "label": "Air content range：≤ 40mm",
          "value": ""
        },
        {
          "label": "Maximum size of coarse aggregate to be used ：≤40mm",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P092",
      "name": "Improved Concrete Air Content Tester",
      "model": "GQC-1",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/GQC-1.png",
      "image": "myImages/GQC-1-Image.png",
      "description": "This product is suitable for the determination of the air content in concrete mixtures having a slump with sub-aggregate diameter not exceeding 40 mm and air content not exceeding 10%.",
      "features": [],
      "standards": [
        "EN 12350-7",
        "ASTM C231 type B",
        "AASHTO T152",
        "DIN 1048"
      ],
      "specifications": [
        {
          "label": "Measuring bowl volume ：7L(diameter 205mm, height 212mm)",
          "value": ""
        },
        {
          "label": "Air content range：≤ 10%",
          "value": ""
        },
        {
          "label": "Maximum size of coarse aggregate to be used：≤40mm",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P093",
      "name": "Acme Penetrometer",
      "model": "HG-1000",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/HG-1000.png",
      "image": "myImages/HG-1000-Image.png",
      "description": "This product is suitable for testing the setting time of various cements, admixtures and concrete mixtures with different concrete mix ratios under different temperature environments. The test mold is made of all-aluminum material, light in weight and easy to use.",
      "features": [],
      "standards": [
        "ASTM C403",
        "AASHTO T197"
      ],
      "specifications": [
        {
          "label": "Specimen mould upper calibre：Φ160mm",
          "value": ""
        },
        {
          "label": "Specimen mould lower calibre ：Φ150mm",
          "value": ""
        },
        {
          "label": "Test temperature ：20±2℃",
          "value": ""
        },
        {
          "label": "Maximum penetration force：1000N",
          "value": ""
        },
        {
          "label": "Minimum division value：0.1N",
          "value": ""
        },
        {
          "label": "Display value error：<±1%",
          "value": ""
        },
        {
          "label": "Penetration method：Manual",
          "value": ""
        },
        {
          "label": "Stylus area ：100, 50, 20mm²",
          "value": ""
        },
        {
          "label": "Voltage：220V",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P094",
      "name": "Acme Dial Penetrometer",
      "model": "HG-80",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/HG-80.png",
      "image": "myImages/HG-80-Image.png",
      "description": "This product is suitable for testing the setting time of various cements, admixtures and concrete mixtures with different concrete mix ratios under different temperature environments.",
      "features": [],
      "standards": [
        "ASTM C403",
        "AASHTO T197"
      ],
      "specifications": [
        {
          "label": "Display mode：Pointer",
          "value": ""
        },
        {
          "label": "Maximum measured value：1200N",
          "value": ""
        },
        {
          "label": "Specimen mould upper calibre ：Φ160mm",
          "value": ""
        },
        {
          "label": "Specimen mould lower calibre：Φ150mm",
          "value": ""
        },
        {
          "label": "Specimen mould height：150mm",
          "value": ""
        },
        {
          "label": "Penetration depth：25mm",
          "value": ""
        },
        {
          "label": "Minimum division value ：1N",
          "value": ""
        },
        {
          "label": "Indication error：±10N",
          "value": ""
        },
        {
          "label": "Stylus loading area：100,50,20mm2",
          "value": ""
        },
        {
          "label": "Penetration resistance：0.2～3.5MPa,3.5～20MPa, 20～28MPa",
          "value": ""
        },
        {
          "label": "Dimensions：700×350×1000mm",
          "value": ""
        },
        {
          "label": "Packing size：730×360×1040mm",
          "value": ""
        },
        {
          "label": "Weight：40kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P095",
      "name": "Concrete Vibrator",
      "model": "HZJ-0.5",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/HZJ-0.5.png",
      "image": "myImages/HZJ-0.5-Image.png",
      "description": "This product is suitable for the laboratory on-site construction site as a test piece forming and the prefabricated component factory to vibrate various concrete components such as slabs, columns and beams.",
      "features": [],
      "standards": [
        "EN 12390-2",
        "BS 1881:108"
      ],
      "specifications": [
        {
          "label": "Table size：500×500mm",
          "value": ""
        },
        {
          "label": "Vibration frequency ：2860 point/min",
          "value": ""
        },
        {
          "label": "Vibration amplitude：0.3-0.6mm",
          "value": ""
        },
        {
          "label": "Vibrator power ：0.55kW",
          "value": ""
        },
        {
          "label": "Load ：100kg",
          "value": ""
        },
        {
          "label": "Weight：35kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P096",
      "name": "Concrete Vibrator",
      "model": "HZJ-0.8",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/HZJ-0.8.png",
      "image": "myImages/HZJ-0.8-Image.png",
      "description": "This product is suitable for the laboratory on-site construction site as a test piece forming and the prefabricated component factory to vibrate various concrete components such as slabs, columns and beams.",
      "features": [],
      "standards": [
        "EN 12390-2",
        "BS 1881:108"
      ],
      "specifications": [
        {
          "label": "Table size：800×800mm",
          "value": ""
        },
        {
          "label": "Vibration frequency ：2860 point/min",
          "value": ""
        },
        {
          "label": "Vibration amplitude：0.3-0.6mm",
          "value": ""
        },
        {
          "label": "Vibrator power ：1.1kW",
          "value": ""
        },
        {
          "label": "Load ：150kg",
          "value": ""
        },
        {
          "label": "Weight：70kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P097",
      "name": "Concrete Vibrator",
      "model": "HZJ-1",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/HZJ-1.png",
      "image": "myImages/HZJ-1-Image.png",
      "description": "This product is suitable for the laboratory on-site construction site as a test piece forming and the prefabricated component factory to vibrate various concrete components such as slabs, columns and beams.",
      "features": [],
      "standards": [
        "EN 12390-2",
        "BS 1881:108"
      ],
      "specifications": [
        {
          "label": "Table size：1000×1000mm",
          "value": ""
        },
        {
          "label": "Vibration frequency ：2860 point/min",
          "value": ""
        },
        {
          "label": "Vibration amplitude：0.3-0.6mm",
          "value": ""
        },
        {
          "label": "Vibrator power ：1.5kW",
          "value": ""
        },
        {
          "label": "Load ：200kg",
          "value": ""
        },
        {
          "label": "Weight：100kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P098",
      "name": "Single Shaft Concrete Mixer",
      "model": "SJD-30",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/SJD-30.png",
      "image": "myImages/SJD-30-Image.png",
      "description": "This machine is suitable for construction scientific research units and construction companies and concrete component units. It can mix ordinary concrete and lightweight concrete, and can also be used in other industries to stir with different materials.",
      "features": [],
      "standards": [
        "ASTM C192/C192M-02"
      ],
      "specifications": [
        {
          "label": "Wall thickness：6mm",
          "value": ""
        },
        {
          "label": "Feed capacity：48L",
          "value": ""
        },
        {
          "label": "Discharging capacity：30L",
          "value": ""
        },
        {
          "label": "Maximum discharge capacity ：33L",
          "value": ""
        },
        {
          "label": "Mixing time ：≤45s",
          "value": ""
        },
        {
          "label": "Stirring axis speed ：45r/min",
          "value": ""
        },
        {
          "label": "Electric power ：1.5kW",
          "value": ""
        },
        {
          "label": "Voltage：AC380V±10%",
          "value": ""
        },
        {
          "label": "Dimensions：1130×400×900mm",
          "value": ""
        },
        {
          "label": "Weight：160kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P099",
      "name": "Single Shaft Concrete Mixer",
      "model": "SJD-60",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/SJD-60.png",
      "image": "myImages/SJD-60-Image.png",
      "description": "This machine is suitable for construction scientific research units and construction companies and concrete component units. It can mix ordinary concrete and lightweight concrete, and can also be used in other industries to stir with different materials.",
      "features": [],
      "standards": [
        "ASTM C192/C192M-02"
      ],
      "specifications": [
        {
          "label": "Wall thickness：6mm",
          "value": ""
        },
        {
          "label": "Feed capacity：96L",
          "value": ""
        },
        {
          "label": "Discharging capacity：60L",
          "value": ""
        },
        {
          "label": "Maximum discharge capacity ：66L",
          "value": ""
        },
        {
          "label": "Mixing time ：≤45s",
          "value": ""
        },
        {
          "label": "Stirring axis speed ：45r/min",
          "value": ""
        },
        {
          "label": "Electric power ：2.2kW",
          "value": ""
        },
        {
          "label": "Voltage：AC380V±10%",
          "value": ""
        },
        {
          "label": "Dimensions：1520×530×1060mm",
          "value": ""
        },
        {
          "label": "Weight：220kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P100",
      "name": "Chloride Ion Fast Content Analyzer",
      "model": "LDCL-B",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/LDCL-B.png",
      "image": "myImages/LDCL-B-Image.png",
      "description": "This product quickly determines the water-soluble chloride ion content of concrete, sand, gravel, cement, mixing water and other inorganic materials through the professional software and chemical anti-jamming reagents equipped.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Measurement range：50～999.99mV",
          "value": ""
        },
        {
          "label": "Electrode configuration：domestic 2 electrodes",
          "value": ""
        },
        {
          "label": "Electrical measurement range：1×10-2～5×10-5mol/L",
          "value": ""
        },
        {
          "label": "Voltage：AC220V±10%",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P101",
      "name": "Concrete Pressure Secretion Instrument",
      "model": "SY-2",
      "category": "Concrete Testing Equipment Series",
      "thumbnail": "/assets/images/SY-2.png",
      "image": "myImages/SY-2-Image.png",
      "description": "This device is used for concrete mixture with no more than 40mm compound pressure to be measured. It has the advantages of accurate measurement value, simple operation, small volume, and convenient molding.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "The maximum range of the pressure gauge：6MPa",
          "value": ""
        },
        {
          "label": "Cylinder inner diameter：125±0.02mm",
          "value": ""
        },
        {
          "label": "Cylinder body height：200±0.2mm",
          "value": ""
        },
        {
          "label": "Working piston diameter：125mm",
          "value": ""
        },
        {
          "label": "Screen aperture：0.335mm (50 mesh)",
          "value": ""
        },
        {
          "label": "Weight：20kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P102",
      "name": "Constant Temperature Water Curing Box (vertical)",
      "model": "HBY-30",
      "category": "Cement Testing Equipment Series",
      "thumbnail": "/assets/images/HBY-30（立式）.png",
      "image": "myImages/HBY-30-Image.png",
      "description": "The product is suitable for cement plant, construction units, highway and bridge engineering units and relevant scientific research and quality inspection departments to perform standard maintenance on the strength and setting time of cement,concrete and cement product samples.",
      "features": [],
      "standards": [
        "EN 196-1"
      ],
      "specifications": [
        {
          "label": "Temperature control：20±1℃",
          "value": ""
        },
        {
          "label": "Temperature control precision：±1℃",
          "value": ""
        },
        {
          "label": "Compressor power：240W",
          "value": ""
        },
        {
          "label": "Heater power：1000W",
          "value": ""
        },
        {
          "label": "Voltage：AC220V±10%",
          "value": ""
        },
        {
          "label": "Maintenance box size：175×290×65mm (30 pieces)",
          "value": ""
        },
        {
          "label": "Test block size：40×40×160 mm(180 pieces)",
          "value": ""
        },
        {
          "label": "Dimensions：800×670×1750mm",
          "value": ""
        },
        {
          "label": "Weight：148kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P103",
      "name": "Constant Temperature Water Curing Box (vertical)",
      "model": "HBY-64",
      "category": "Cement Testing Equipment Series",
      "thumbnail": "/assets/images/HBY-64（立式）.png",
      "image": "myImages/HBY-64-Image.png",
      "description": "The product is suitable for cement plant, construction units, highway and bridge engineering units and relevant scientific research and quality inspection departments to perform standard maintenance on the strength and setting time of cement,concrete and cement product samples.",
      "features": [],
      "standards": [
        "EN 196-1"
      ],
      "specifications": [
        {
          "label": "Temperature control ：20±1℃",
          "value": ""
        },
        {
          "label": "Temperature control precision ：±1℃",
          "value": ""
        },
        {
          "label": "Voltage：AC220V±10%",
          "value": ""
        },
        {
          "label": "Compressor power：240W",
          "value": ""
        },
        {
          "label": "Heater power：2000W",
          "value": ""
        },
        {
          "label": "Test block size：40×40×160mm (360 pieces)",
          "value": ""
        },
        {
          "label": "Maintenance box size：175×290×65mm (60 pieces)",
          "value": ""
        },
        {
          "label": "Dimensions：1080×850×1880mm",
          "value": ""
        },
        {
          "label": "Weight：350kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P104",
      "name": "Constant Temperature Water Curing Box (horizontal)",
      "model": "HBY-30",
      "category": "Cement Testing Equipment Series",
      "thumbnail": "/assets/images/HBY-30（卧式）.png",
      "image": "myImages/HBY-30-Image.png",
      "description": "The product is suitable for cement plant, construction units, highway and bridge engineering units and relevant scientific research and quality inspection departments to perform standard maintenance on the strength and setting time of cement,concrete and cement product samples.",
      "features": [],
      "standards": [
        "EN 196-1"
      ],
      "specifications": [
        {
          "label": "Temperature control ：20±1℃",
          "value": ""
        },
        {
          "label": "Temperature control precision ：±1℃",
          "value": ""
        },
        {
          "label": "Voltage：AC220V±10%",
          "value": ""
        },
        {
          "label": "Compressor power：500W",
          "value": ""
        },
        {
          "label": "Heater power：1200W",
          "value": ""
        },
        {
          "label": "Maintenance box size：140×100×180mm (16 pieces)",
          "value": ""
        },
        {
          "label": "Test block size：40×40×160mm (96 pieces)",
          "value": ""
        },
        {
          "label": "Dimensions：920×760×980mm",
          "value": ""
        },
        {
          "label": "Weight：113kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P105",
      "name": "constant temperature water curing box (horizontal)",
      "model": "HBY-60",
      "category": "Cement Testing Equipment Series",
      "thumbnail": "/assets/images/HBY-60（卧式）.png",
      "image": "myImages/HBY-60-Image.png",
      "description": "The product is suitable for cement plant, construction units, highway and bridge engineering units and relevant scientific research and quality inspection departments to perform standard maintenance on the strength and setting time of cement,concrete and cement product samples.",
      "features": [],
      "standards": [
        "EN 196-1"
      ],
      "specifications": [
        {
          "label": "Temperature control ：20±1℃",
          "value": ""
        },
        {
          "label": "Temperature control precision ：±1℃",
          "value": ""
        },
        {
          "label": "Voltage：AC220V±10%",
          "value": ""
        },
        {
          "label": "Compressor power：1000W",
          "value": ""
        },
        {
          "label": "Heater power：2400W",
          "value": ""
        },
        {
          "label": "Maintenance box size：140×100×180mm（36 pieces）",
          "value": ""
        },
        {
          "label": "Test block size：40×40×160mm (216 pieces)",
          "value": ""
        },
        {
          "label": "Dimensions：1760×755×980mm",
          "value": ""
        },
        {
          "label": "Weight：350kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P106",
      "name": "Cement (Concrete) Constant Temperature And Humidity Curing Box (Glass door)",
      "model": "HBY-40B",
      "category": "Cement Testing Equipment Series",
      "thumbnail": "/assets/images/HBY-40B（玻璃门）.png",
      "image": "myImages/HBY-40B-Image.png",
      "description": "This product is designed and manufactured according to the national standard maintenance requirements for cement, concrete and cement products, etc. The product is suitable for cement plant, construction units, highway and bridge engineering units and relevant scientific research and quality inspection departments to perform standard maintenance on the strength and setting time of cement,concrete and cement product samples.",
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
          "label": "Test temperature：20±1℃",
          "value": ""
        },
        {
          "label": "Control humidity ：≧95%RH",
          "value": ""
        },
        {
          "label": "Compressor power ：138W",
          "value": ""
        },
        {
          "label": "Heater power ：800W",
          "value": ""
        },
        {
          "label": "Voltage：AC220V±10%",
          "value": ""
        },
        {
          "label": "Number of trial molds placed：40×40×160 trial molds, 6 groups can be placed on each layer",
          "value": ""
        },
        {
          "label": "150×150×150 mold trial, 3 groups can be placed on each layer",
          "value": ""
        },
        {
          "label": "100×100×100 mold trial, 4 groups can be placed on each layer",
          "value": ""
        },
        {
          "label": "Studio size：570×550×1000mm",
          "value": ""
        },
        {
          "label": "Dimensions：980×700×1350mm",
          "value": ""
        },
        {
          "label": "Weight：110kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P107",
      "name": "Cement (Concrete) Constant Temperature And Humidity Curing Box(iron door)",
      "model": "HBY-40B",
      "category": "Cement Testing Equipment Series",
      "thumbnail": "/assets/images/HBY-40B（铁门）.png",
      "image": "myImages/HBY-40B-Image.png",
      "description": "This product is designed and manufactured according to the national standard maintenance requirements for cement, concrete and cement products, etc. The product is suitable for cement plant, construction units, highway and bridge engineering units and relevant scientific research and quality inspection departments to perform standard maintenance on the strength and setting time of cement,concrete and cement product samples.",
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
          "label": "Test temperature：20±1℃",
          "value": ""
        },
        {
          "label": "Control humidity ：≧95%RH",
          "value": ""
        },
        {
          "label": "Compressor power ：138W",
          "value": ""
        },
        {
          "label": "Heater power ：800W",
          "value": ""
        },
        {
          "label": "Voltage：AC220V±10%",
          "value": ""
        },
        {
          "label": "Number of trial molds placed：40×40×160 trial molds, 6 groups can be placed on each layer",
          "value": ""
        },
        {
          "label": "150×150×150 mold trial, 3 groups can be placed on each layer",
          "value": ""
        },
        {
          "label": "100×100×100 mold trial, 4 groups can be placed on each layer",
          "value": ""
        },
        {
          "label": "Studio size：590×570×1180mm",
          "value": ""
        },
        {
          "label": "Dimensions：1000×700×1530mm",
          "value": ""
        },
        {
          "label": "Weight：122kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P108",
      "name": "Cement (Concrete) Constant Temperature And Humidity Curing Box",
      "model": "HBY-60B",
      "category": "Cement Testing Equipment Series",
      "thumbnail": "/assets/images/HBY-60B.png",
      "image": "myImages/HBY-60B-Image.png",
      "description": "This product is designed and manufactured according to the national standard maintenance requirements for cement, concrete and cement products, etc. The product is suitable for cement plant, construction units, highway and bridge engineering units and relevant scientific research and quality inspection departments to perform standard maintenance on the strength and setting time of cement,concrete and cement product samples.",
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
          "label": "Test temperature：20±1℃",
          "value": ""
        },
        {
          "label": "Control humidity ：≧95%RH",
          "value": ""
        },
        {
          "label": "Compressor power ：500W",
          "value": ""
        },
        {
          "label": "Heater power ：800W",
          "value": ""
        },
        {
          "label": "Voltage：AC220V±10%",
          "value": ""
        },
        {
          "label": "Number of trial molds placed：40×40×160 trial molds, 6 groups can be placed on each layer",
          "value": ""
        },
        {
          "label": "150×150×150 mold trial, 3 groups can be placed on each layer",
          "value": ""
        },
        {
          "label": "100×100×100 mold trial, 4 groups can be placed on each layer",
          "value": ""
        },
        {
          "label": "Studio size：1180×550×1400mm",
          "value": ""
        },
        {
          "label": "Dimensions：1650×680×1750mm",
          "value": ""
        },
        {
          "label": "Weight：220kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P109",
      "name": "Mixed Mortar Specimen Standard Curing Box",
      "model": "HBY-30",
      "category": "Cement Testing Equipment Series",
      "thumbnail": "/assets/images/HBY-30.png",
      "image": "myImages/HBY-30-Image.png",
      "description": "The product is suitable for cement plant, construction units, highway and bridge engineering units and relevant scientific research and quality inspection departments to perform standard maintenance on the strength and setting time of cement,concrete and cement product samples.",
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
          "label": "Temperature controller accuracy   20±1℃",
          "value": ""
        },
        {
          "label": "Control humidity  60-80%RH",
          "value": ""
        },
        {
          "label": "Voltage AC220V±10%",
          "value": ""
        },
        {
          "label": "Compressor power  138W",
          "value": ""
        },
        {
          "label": "Heater power  500W",
          "value": ""
        },
        {
          "label": "Studio size 580×500×1180mm",
          "value": ""
        },
        {
          "label": "The internal specimen rack is equally divided into 6 grid sizes  580×490×180mm",
          "value": ""
        },
        {
          "label": "Dimensions 1000×700×1530 mm",
          "value": ""
        },
        {
          "label": "Weight 130kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P110",
      "name": "Cement Mortar Mixer",
      "model": "JJ-20F",
      "category": "Cement Testing Equipment Series",
      "thumbnail": "/assets/images/JJ-20F.png",
      "image": "myImages/JJ-20F-Image.png",
      "description": "The instrument is mainly used to prepare cement mortar strength test samples for mixing.",
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
          "label": "Rotation Low speed：140 士 2 r/min",
          "value": ""
        },
        {
          "label": "Revolution Low speed： 62 士 2 r/min",
          "value": ""
        },
        {
          "label": "Rotation High speed：285 士 3 r/min",
          "value": ""
        },
        {
          "label": "Revolution High speed：125 士 3 r/min",
          "value": ""
        },
        {
          "label": "The movement track of the mixing blade in the mixing pot is the same as ISO679",
          "value": ""
        },
        {
          "label": "Width of mixing blade",
          "value": "135mm"
        },
        {
          "label": "Capacity",
          "value": "5L"
        },
        {
          "label": "The wall thickness",
          "value": "1.5mm"
        },
        {
          "label": "The working gap between the mixing blade and the mixing pot",
          "value": "3mm ±1mm"
        },
        {
          "label": "Voltage：AC220V±10%",
          "value": ""
        },
        {
          "label": "Outer dimension (length×width×height)",
          "value": "630×400×660mm"
        },
        {
          "label": "Weight",
          "value": "80kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P111",
      "name": "Cement Mortar Vibrating Platform",
      "model": "ZT-20F",
      "category": "Cement Testing Equipment Series",
      "thumbnail": "/assets/images/ZT-20F.png",
      "image": "myImages/ZT-20F-Image.png",
      "description": "This instrument is suitable for preparing samples for strength testing of cement mortar.",
      "features": [],
      "standards": [
        "EN 196-1",
        "EN ISO 679"
      ],
      "specifications": [
        {
          "label": "The total mass of the table plate(including the arm,the die frame,etc.)：13.75±0.25kg",
          "value": ""
        },
        {
          "label": "The total weight of vibrating part：20±0.5kg",
          "value": ""
        },
        {
          "label": "Amplitude (falling distance)：15±0.3mm",
          "value": ""
        },
        {
          "label": "The time of 60 vibrations：60±2s",
          "value": ""
        },
        {
          "label": "Motor speed：60rpm",
          "value": ""
        },
        {
          "label": "Motor power：40W",
          "value": ""
        },
        {
          "label": "Voltage：AC220V",
          "value": ""
        },
        {
          "label": "Overall Dimensions：1152×482×510mm",
          "value": ""
        },
        {
          "label": "Weight：87kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P112",
      "name": "Electric Flexural Testing Machine (pointer type)",
      "model": "DKZ-5000",
      "category": "Cement Testing Equipment Series",
      "thumbnail": "/assets/images/DKZ-5000.png",
      "image": "myImages/DKZ-5000-Image.png",
      "description": "This testing machine is mainly used for testing the flexural strength of cement soft-burning mortar in cement plants, construction units, relevant professional colleges and scientific research units, and can also be used for flexural strength testing of other non-metallic brittle materials.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Display method：Pointer",
          "value": ""
        },
        {
          "label": "Double lever output ratio (lower beam to arm distance ratio) (maximum)：50：1",
          "value": ""
        },
        {
          "label": "Maximum output：Double Leverage 5000N",
          "value": ""
        },
        {
          "label": "Loading speed：50N/s",
          "value": ""
        },
        {
          "label": "Loading roller and supporting roller diameter：Φ10mm",
          "value": ""
        },
        {
          "label": "Support roller pitch：100mm",
          "value": ""
        },
        {
          "label": "Lay frame spacing：46mm",
          "value": ""
        },
        {
          "label": "Lever inclination：>1/50°",
          "value": ""
        },
        {
          "label": "Dimensions (length x width x height)：1080×220×780mm",
          "value": ""
        },
        {
          "label": "Weight：130kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P113",
      "name": "Electric Flexural Testing Machine (pointer type)",
      "model": "DKZ-6000",
      "category": "Cement Testing Equipment Series",
      "thumbnail": "/assets/images/DKZ-6000（指针）.png",
      "image": "myImages/DKZ-6000-Image.png",
      "description": "This testing machine is mainly used for testing the flexural strength of cement soft-burning mortar in cement plants, construction units, relevant professional colleges and scientific research units, and can also be used for flexural strength testing of other non-metallic brittle materials.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Display method：Pointer",
          "value": ""
        },
        {
          "label": "Double lever output ratio (lower beam to arm distance ratio) (maximum)：60：1",
          "value": ""
        },
        {
          "label": "Maximum output：Double Leverage 6000N",
          "value": ""
        },
        {
          "label": "Loading speed：50N/s",
          "value": ""
        },
        {
          "label": "Loading roller and supporting roller diameter：Φ10mm",
          "value": ""
        },
        {
          "label": "Support roller pitch：100mm",
          "value": ""
        },
        {
          "label": "Lay frame spacing：46mm",
          "value": ""
        },
        {
          "label": "Lever inclination：>1/50°",
          "value": ""
        },
        {
          "label": "Dimensions (length x width x height)：1180×220×800mm",
          "value": ""
        },
        {
          "label": "Weight：135kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P114",
      "name": "Electric Flexural Testing Machine (digital display)",
      "model": "DKZ-6000",
      "category": "Cement Testing Equipment Series",
      "thumbnail": "/assets/images/DKZ-6000（数显）.png",
      "image": "myImages/DKZ-6000-Image.png",
      "description": "This testing machine is mainly used for testing the flexural strength of cement soft-burning mortar in cement plants, construction units, relevant professional colleges and scientific research units, and can also be used for flexural strength testing of other non-metallic brittle materials.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Maximum bending resistance：6000N",
          "value": ""
        },
        {
          "label": "Loading roller and supporting roller diameter：Φ10mm",
          "value": ""
        },
        {
          "label": "Support roller distance：100mm",
          "value": ""
        },
        {
          "label": "Lay frame spacing ：46mm",
          "value": ""
        },
        {
          "label": "Lever inclination ：>1/50°",
          "value": ""
        },
        {
          "label": "Voltage：AC220V±10%",
          "value": ""
        },
        {
          "label": "Dimensions：1180×220×800mm",
          "value": ""
        },
        {
          "label": "Weight：135kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P115",
      "name": "Cement Mortar Flow Table",
      "model": "NLD-3F",
      "category": "Cement Testing Equipment Series",
      "thumbnail": "/assets/images/NLD-3F.png",
      "image": "myImages/NLD-3F-Image.png",
      "description": "It is mainly used for fluidity test of cement mortar sand.",
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
          "label": "The total weight of the vibrating part：4.35±0.15kg",
          "value": ""
        },
        {
          "label": "Vibration fall distance：10±0.2mm(For ASTM C230, 12.7±0.2)",
          "value": ""
        },
        {
          "label": "Vibration frequency ：1Hz",
          "value": ""
        },
        {
          "label": "Vibration times：25 times",
          "value": ""
        },
        {
          "label": "Desktop parameters：Cast steel, hard chrome plated working surface",
          "value": ""
        },
        {
          "label": "Diameter ：Φ300±1mm(For ASTM C230, Φ254±1)",
          "value": ""
        },
        {
          "label": "Dimensions：400×500×370mm",
          "value": ""
        },
        {
          "label": "Voltage：AC220V±10%",
          "value": ""
        },
        {
          "label": "Weight：25kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P116",
      "name": "Cement Fineness Air Jet Sieving Analyzer (ordinary)",
      "model": "FSY-150",
      "category": "Cement Testing Equipment Series",
      "thumbnail": "/assets/images/FSY-150（普通）.png",
      "image": "myImages/FSY-150-Image.png",
      "description": "This equipment is widely used in cement fineness inspection and cement production control. It can also be used in powder fineness testing in other industries. It is a commonly used instrument in various cement quality inspection stations, cement factories and other units.",
      "features": [],
      "standards": [
        "EN 933-10",
        "ASTM C1891"
      ],
      "specifications": [
        {
          "label": "Sieve analysis test fineness：1~0.030mm",
          "value": ""
        },
        {
          "label": "Screening time automatic：0～999s (adjust)",
          "value": ""
        },
        {
          "label": "Working negative pressure：-4000~6000Pa",
          "value": ""
        },
        {
          "label": "Voltage：AC220V±10%",
          "value": ""
        },
        {
          "label": "Feeding ：10～25g",
          "value": ""
        },
        {
          "label": "Accessories：0.045 sieve, 0.08 sieve (optional)",
          "value": ""
        },
        {
          "label": "Noise：≤75dB",
          "value": ""
        },
        {
          "label": "Dimensions：450×380×830mm",
          "value": ""
        },
        {
          "label": "Weight：30kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P117",
      "name": "Cement Fineness Air Jet Sieving Analyzer\n(environmental protection)",
      "model": "FSY-150",
      "category": "Cement Testing Equipment Series",
      "thumbnail": "/assets/images/FSY-150（环保）.png",
      "image": "myImages/FSY-150-Image.png",
      "description": "This equipment is widely used in cement fineness inspection and cement production control. It can also be used in powder fineness testing in other industries. It is a commonly used instrument in various cement quality inspection stations, cement factories and other units.",
      "features": [],
      "standards": [
        "EN 933-10",
        "ASTM C1891"
      ],
      "specifications": [
        {
          "label": "Sieve analysis test fineness：1~0.030mm",
          "value": ""
        },
        {
          "label": "Screening time automatic：0～999s (adjust)",
          "value": ""
        },
        {
          "label": "Working negative pressure：-4000~6000Pa",
          "value": ""
        },
        {
          "label": "Voltage：AC220V±10%",
          "value": ""
        },
        {
          "label": "Feeding ：10～25g",
          "value": ""
        },
        {
          "label": "Accessories：0.045 sieve, 0.08 sieve (optional)",
          "value": ""
        },
        {
          "label": "Noise：≤75dB",
          "value": ""
        },
        {
          "label": "Dimensions：450×380×830mm",
          "value": ""
        },
        {
          "label": "Weight：30kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P118",
      "name": "Boiling Box",
      "model": "FZ-31A",
      "category": "Cement Testing Equipment Series",
      "thumbnail": "/assets/images/FZ-31A.png",
      "image": "myImages/FZ-31A-Image.png",
      "description": "This equipment is one of the commonly used equipment in cement production, construction, scientific research and testing units. \nThe equipment is made of stainless steel.",
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
          "label": "Maximum boiling temperature：100℃",
          "value": ""
        },
        {
          "label": "Inner tank volume：31L",
          "value": ""
        },
        {
          "label": "Heating time：30±5min(20℃ to 100℃)",
          "value": ""
        },
        {
          "label": "Heating time control：0～3.5h",
          "value": ""
        },
        {
          "label": "Tubular heater power ：4kW",
          "value": ""
        },
        {
          "label": "Voltage：AC220V±10%",
          "value": ""
        },
        {
          "label": "Studio size：410×240×310mm",
          "value": ""
        },
        {
          "label": "Dimensions：490×290×410mm",
          "value": ""
        },
        {
          "label": "Weight：25kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P119",
      "name": "Automatic Specific Surface Area Meter (Blaine Method)",
      "model": "FBT-9",
      "category": "Cement Testing Equipment Series",
      "thumbnail": "/assets/images/FBT-9.png",
      "image": "myImages/FBT-9-Image.png",
      "description": "This product is suitable for measuring the surface area per gram of solid material.",
      "features": [],
      "standards": [
        "EN 196-6",
        "comparable to: ASTM C204",
        "AASHTO T153",
        "BS 4359:2"
      ],
      "specifications": [
        {
          "label": "Voltage：200V±10%",
          "value": ""
        },
        {
          "label": "Timing range：0.1s<T<999.9s",
          "value": ""
        },
        {
          "label": "Timing accuracy：<0.2s",
          "value": ""
        },
        {
          "label": "Measurement accuracy：＜1%",
          "value": ""
        },
        {
          "label": "Temperature range：8~34℃",
          "value": ""
        },
        {
          "label": "Breathable cylinder inner cavity diameter：Φ12.7mm",
          "value": ""
        },
        {
          "label": "Sample height of breathable cylinder inner cavity：15mm",
          "value": ""
        },
        {
          "label": "Number of holes in perforated plate：35",
          "value": ""
        },
        {
          "label": "Perforated plate hole diameter：Φ1.0mm",
          "value": ""
        },
        {
          "label": "Perforated plate thickness：1mm",
          "value": ""
        },
        {
          "label": "Outer dimension ：430×500×280mm",
          "value": ""
        },
        {
          "label": "Weight：8kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P120",
      "name": "Coarse-grained Soil Vertical Seepage Deformation Meter (slope type)",
      "model": "LDSL-III",
      "category": "Geotechnical & Aggregate Testing Equipment Series",
      "thumbnail": "/assets/images/LDSL-III.png",
      "image": "myImages/LDSL-III-Image.png",
      "description": "The purpose of this test is to determine the permeability coefficient of the sample when the seepage water passes through the coarse-grained soil, the critical slope of the fine particles gradually lost with the seepage (piping) and the failure slope (flowing soil) when the soil body floats as a whole.\nThis test is applicable to disturbed coarse-grained soil samples and undisturbed coarse-grained soil samples.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Test tube specification ：Φ300×600mm",
          "value": ""
        },
        {
          "label": "Test tube height：600mm",
          "value": ""
        },
        {
          "label": "Gauge height：3000mm",
          "value": ""
        },
        {
          "label": "Pressure measuring hole spacing ：250mm",
          "value": ""
        },
        {
          "label": "Loading equipment：Leverage pressure",
          "value": ""
        },
        {
          "label": "Water supply bucket：140×140×140mm",
          "value": ""
        },
        {
          "label": "Water storage bucket：200×400×450mm",
          "value": ""
        },
        {
          "label": "Voltage：AC 220V",
          "value": ""
        },
        {
          "label": "Dimension：1400×600×1900mm",
          "value": ""
        },
        {
          "label": "Weight：250kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P121",
      "name": "Coarse-grained Soil Constant Head Permeameter",
      "model": "LDST-300",
      "category": "Geotechnical & Aggregate Testing Equipment Series",
      "thumbnail": "/assets/images/LDST-300.png",
      "image": "myImages/LDST-300-Image.png",
      "description": "LDST-300 Coarse-grained Soil Constant Head Permeameter is used to measure the permeability coefficient of coarse-grained soil and graded crushed stone with the maximum particle size not greater than 75mm.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Water supply tank volume：80L",
          "value": ""
        },
        {
          "label": "Inner diameter of metal cylinder ：300mm",
          "value": ""
        },
        {
          "label": "Metal cylinder height：500mm",
          "value": ""
        },
        {
          "label": "Metal cylinder wall thickness：10mm",
          "value": ""
        },
        {
          "label": "Number of pressure measuring tubes：5 PCS",
          "value": ""
        },
        {
          "label": "Inner diameter of pressure measuring tube：6mm",
          "value": ""
        },
        {
          "label": "Pressure measuring tube scale division value：1mm",
          "value": ""
        },
        {
          "label": "Pressure measuring hole spacing ：50mm",
          "value": ""
        },
        {
          "label": "Seepage hole diameter：16mm",
          "value": ""
        },
        {
          "label": "Inner diameter of overflow pipe：16mm",
          "value": ""
        },
        {
          "label": "Permeable plate aperture：3.5mm",
          "value": ""
        },
        {
          "label": "Weight：150kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P122",
      "name": "Vibration Compaction Molding Machine",
      "model": "LD-08",
      "category": "Geotechnical & Aggregate Testing Equipment Series",
      "thumbnail": "/assets/images/LD-08.png",
      "image": "myImages/LD-08-Image.png",
      "description": "This product is used to manufacture various test pieces for inorganic binder stabilized pellets, including cylindrical test pieces for testing unconfined compression, strength, indirect tensile strength and compressive modulus of resilience, and for testing Beam specimens for temperature shrinkage coefficient, dry shrinkage coefficient, flexural strength and flexural modulus of resilience tests.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Vibration motor power 4kW",
          "value": ""
        },
        {
          "label": "Lifting motor power 0.75kW",
          "value": ""
        },
        {
          "label": "Static pressure 1900 ~3100N",
          "value": ""
        },
        {
          "label": "(recommended to 2500)",
          "value": ""
        },
        {
          "label": "Exciting force Adjust from 6800 to 11000N",
          "value": ""
        },
        {
          "label": "Vibration frequency 28~30Hz",
          "value": ""
        },
        {
          "label": "Forming trial mold 3 PCS",
          "value": ""
        },
        {
          "label": "Voltage AC380V±10%",
          "value": ""
        },
        {
          "label": "Dimensions 1820×950×2170mm",
          "value": ""
        },
        {
          "label": "Controller size 550×345×940mm",
          "value": ""
        },
        {
          "label": "Weight 1100kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P123",
      "name": "Concrete/Rock Specimen Grinding Machine",
      "model": "SHM-200",
      "category": "Geotechnical & Aggregate Testing Equipment Series",
      "thumbnail": "/assets/images/SHM-200.png",
      "image": "myImages/SHM-200-Image.png",
      "description": "SHM-200 double-end grinding stone machine is the main equipment for making standard samples of non-metallic solids such as rock ore and concrete for mechanical testing. This machine works together with the coring machine and stone cutting machine produced by our factory to process the high-precision cube or cylinder test samples you need. This product is suitable for colleges and universities, water conservancy and hydropower, address minerals, transportation, construction and other  departments.\nThis stone grinding machine is composed of machine base, workbench, grinding power head, variable speed transmission system, electric control device and other parts. The whole machine is easy to operate and the  automatic feeding performance is stable.",
      "features": [],
      "standards": [
        "ASTM D4543",
        "EN 12390-2"
      ],
      "specifications": [
        {
          "label": "Workbench motor power：0.55kW",
          "value": ""
        },
        {
          "label": "Speed：1450rpm",
          "value": ""
        },
        {
          "label": "Grinding power head power：1.1kW,2units",
          "value": ""
        },
        {
          "label": "Speed：2750rpm",
          "value": ""
        },
        {
          "label": "Grinding wheel diameter：Φ200mm",
          "value": ""
        },
        {
          "label": "Grindable sample specifications(normally factory-equipped with a fixture for grinding 50-150mm)：A",
          "value": "Block 50×50×50~150×150×150mm"
        },
        {
          "label": "B",
          "value": "Cylinder 50~150mm"
        },
        {
          "label": "Specimen precision：A",
          "value": "Flatness Tolerance±0.05mm within 50mm"
        },
        {
          "label": "B",
          "value": "Smoothness (according to machining roughness standard) Ra3.2"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P124",
      "name": "Automatic Rock, Concrete and Masonry Saw",
      "model": "DQ-1",
      "category": "Geotechnical & Aggregate Testing Equipment Series",
      "thumbnail": "/assets/images/DQ-1.png",
      "image": "myImages/DQ-1-Image.png",
      "description": "This equipment is widely used in petroleum, geology, metallurgy, coal, exploration and cutting of refractory materials. This concrete cutting  machine is beautiful in appearance, compact in structure, high in automation, fully sealed, low in noise, and easy to use and operate. Over the past few years, it has extensively absorbed user opinions and met various technical indicators to make it stand out as a new type of technical equipment.",
      "features": [],
      "standards": [
        "ASTM D4543"
      ],
      "specifications": [
        {
          "label": "Cutting range：DQ-1 double knives (blade diameter 500mm) can cut cylindrical cores with a diameter of 18mm~200mm, and original rock samples of 180mm×180mm×350mm. For refractory materials such as sandstone,high-magnesia bricks, and corundum bricks, the cutting hardness is below grade 9.The distance between the two blades is adjustable, respectively 25, 50, 75, 100, 125mm.",
          "value": ""
        },
        {
          "label": "The saw blade of the automatic dual-knife rock core sample dual-purpose machine：Inner diameter",
          "value": "5cm,Outer diameter:50cm"
        },
        {
          "label": "JRg600 diamond ：Φ600×5×50mm",
          "value": ""
        },
        {
          "label": "A set of attachments：2cm, 3cm, 5cm each",
          "value": ""
        },
        {
          "label": "Cutting line speed：40mm/s",
          "value": ""
        },
        {
          "label": "Main motor power：4kW, 1420 rpm",
          "value": ""
        },
        {
          "label": "Longitudinal motor power ：0.75kW",
          "value": ""
        },
        {
          "label": "Dimensions：1500×830×1350mm",
          "value": ""
        },
        {
          "label": "JRg60Q diamond cutter ：Φ500×4.5×50mm",
          "value": ""
        },
        {
          "label": "Weight：700kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P125",
      "name": "Multifunctional Electric Compaction Instrument",
      "model": "JZ-2D",
      "category": "Geotechnical & Aggregate Testing Equipment Series",
      "thumbnail": "/assets/images/JZ-2D（部标）.png",
      "image": "myImages/JZ-2D-Image.png",
      "description": "The machine can be used for both heavy compaction test and light compaction test. The machine is automatically controlled by a high-stability electronic counter, with high test accuracy, automatic working process, stable and reliable work. This machine is easy to use and is a commonly used instrument for road geotechnical tests.",
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
          "label": "Hammer weight：Heavy compaction",
          "value": "4.5kg,Light compaction: 2.5kg"
        },
        {
          "label": "Hammer down high：Heavy compaction",
          "value": "457mm,Light compaction: 305mm"
        },
        {
          "label": "Hammer face diameter：Φ50mm",
          "value": ""
        },
        {
          "label": "Test tube specification：either Φ152×Φ100 or Φ152×Φ102",
          "value": ""
        },
        {
          "label": "Hammer speed：30times/min",
          "value": ""
        },
        {
          "label": "Set the number of hammering：Between 0~99 times",
          "value": ""
        },
        {
          "label": "Motor parameters：1440r/min",
          "value": ""
        },
        {
          "label": "Motor Power：250W",
          "value": ""
        },
        {
          "label": "Voltage：AC380V±10%",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P126",
      "name": "Multifunctional Hydraulic Demoulding Machine",
      "model": "DL-200",
      "category": "Geotechnical & Aggregate Testing Equipment Series",
      "thumbnail": "/assets/images/DL-200.png",
      "image": "myImages/DL-200-Image.png",
      "description": "This product is mainly suitable for the stripping of test pieces of various compaction instruments, suitable for various test molds with diameters of Ф50mm, Ф100mm, Ф101.6mm, Ф150mm, Ф152mm, and heights within 230mm.This machine is used together with \"multifunctional electric compaction instrument\", \"Marshall compaction instrument\" and \"light manual compaction instrument\" to demould the specimen.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Maximum release force",
          "value": "200KN"
        },
        {
          "label": "Release rate",
          "value": "130mm/min"
        },
        {
          "label": "Maximum demoulding height",
          "value": "230mm"
        },
        {
          "label": "Voltage/Motor power",
          "value": "380V/0.75KW"
        },
        {
          "label": "Oil pump rated pressure",
          "value": "20MPa"
        },
        {
          "label": "Motor rated speed",
          "value": "1500r/min"
        },
        {
          "label": "Dimensions",
          "value": "480×520×1230mm"
        },
        {
          "label": "Compression mold test",
          "value": "Ф150×230mm ,Ф100×180mm,Ф50×130mm"
        },
        {
          "label": "Light and heavy compaction instrument test mold",
          "value": "Ф152×170mm,Ф100×127mm"
        },
        {
          "label": "Marshall test mold",
          "value": "Ф101.6×87mm"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P127",
      "name": "Multifunctional Hydraulic Demoulding Machine",
      "model": "DL-300",
      "category": "Geotechnical & Aggregate Testing Equipment Series",
      "thumbnail": "/assets/images/DL-300.png",
      "image": "myImages/DL-300-Image.png",
      "description": "This product is mainly suitable for the stripping of test pieces of various compaction instruments, suitable for various test molds with diameters of Ф50mm, Ф100mm, Ф101.6mm, Ф150mm, Ф152mm, and heights within 230mm.This machine is used together with \"multifunctional electric compaction instrument\", \"Marshall compaction instrument\" and \"light manual compaction instrument\" to demould the specimen.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Maximum release force",
          "value": "300KN"
        },
        {
          "label": "Release rate",
          "value": "130mm/min"
        },
        {
          "label": "Maximum demoulding height",
          "value": "230mm"
        },
        {
          "label": "Voltage/Motor power",
          "value": "380V/0.75KW"
        },
        {
          "label": "Oil pump rated pressure",
          "value": "20MPa"
        },
        {
          "label": "Motor rated speed",
          "value": "1500r/min"
        },
        {
          "label": "Dimensions",
          "value": "480×520×1230mm"
        },
        {
          "label": "Compression mold test",
          "value": "Ф150×230mm,Ф100×180mm"
        },
        {
          "label": "Light and heavy compaction instrument test mold",
          "value": "Ф152×170mm,Ф100×127mm"
        },
        {
          "label": "Marshall test mold",
          "value": "Ф101.6×87mm"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P128",
      "name": "Triple Motion Sieve Shaker",
      "model": "ZBSX-92A",
      "category": "Geotechnical & Aggregate Testing Equipment Series",
      "thumbnail": "/assets/images/ZBSX-92A.png",
      "image": "myImages/ZBSX-92A-Image.png",
      "description": "The machine is suitable for screening and analyzing materials in laboratories and laboratories in geology, metallurgy, chemical industry,  construction, grinding wheel manufacturing,cement and other departments. The 15kg aggregate is charged twice, and the grading work can be completed after starting for five minutes each time.",
      "features": [],
      "standards": [
        "EN 932-5",
        "ISO 3310-1"
      ],
      "specifications": [
        {
          "label": "Sieve diameter",
          "value": "200/300mm"
        },
        {
          "label": "Sieve stack height",
          "value": "440mm"
        },
        {
          "label": "Screen seat vibration amplitude",
          "value": "8mm"
        },
        {
          "label": "Shaking times of sieve",
          "value": "221times/min"
        },
        {
          "label": "Shock times",
          "value": "147times/min"
        },
        {
          "label": "Radius of gyration",
          "value": "12.5mm"
        },
        {
          "label": "Power supply",
          "value": "AC380V±10%,0.37kW"
        },
        {
          "label": "Motor revolution",
          "value": "1400times/min"
        },
        {
          "label": "Dimensions",
          "value": "600×400×800mm"
        },
        {
          "label": "Total weight",
          "value": "100kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P129",
      "name": "Digital Display Combined Soil Liquid-plastic Limit Tester",
      "model": "LG-100D",
      "category": "Geotechnical & Aggregate Testing Equipment Series",
      "thumbnail": "/assets/images/LG-100D.png",
      "image": "myImages/LG-100D-Image.png",
      "description": "This instrument is used to measure the liquid limit and plastic limit of soil, and provide reliable data for dividing soil types, calculating natural consistency and plasticity index. This product is used for engineering design and construction in highways, railways, water conservancy and electric power, metallurgy, construction and other departments. The instrument has two cone weight standards of 100 grams and 76 grams for users to choose.",
      "features": [],
      "standards": [
        "CEN ISO/TS 17892-12",
        "CEN ISO/TS 17892-06",
        "NF P94-052-1"
      ],
      "specifications": [
        {
          "label": "Maximum range",
          "value": "20mm"
        },
        {
          "label": "Resolution",
          "value": "0.1mm"
        },
        {
          "label": "Measurement of non-linear error",
          "value": "Better than 2%"
        },
        {
          "label": "Contact indication sensitivity",
          "value": ">10M"
        },
        {
          "label": "Cone weight",
          "value": "100/76g"
        },
        {
          "label": "(Can be customized upon request)",
          "value": ""
        },
        {
          "label": "Cone angle",
          "value": "30±2°"
        },
        {
          "label": "(Can be customized upon request)",
          "value": ""
        },
        {
          "label": "Measuring time",
          "value": "≈5s"
        },
        {
          "label": "Power supply",
          "value": "AC200V±10%"
        },
        {
          "label": "Continuous working time",
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
      "isNew": false
    },
    {
      "id": "P130",
      "name": "Sand Equivalent Tester",
      "model": "SD-II",
      "category": "Geotechnical & Aggregate Testing Equipment Series",
      "thumbnail": "/assets/images/SD-II（双管）.png",
      "image": "myImages/SD-II-Image.png",
      "description": "It is suitable for  asphalt mixtures and cement concrete. Natural sand, artificial sand, stone chips , the maximum particle size of the aggregate is not more than 4.75mm, and the content of cohesive soil or impurities contained in the  fine aggregate is measured to evaluate the cleanliness of the aggregate, and the sand equivalent is represented by SE.",
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
          "label": "Voltage",
          "value": "220V"
        },
        {
          "label": "Oscillation frequency",
          "value": "175-180 times per minute"
        },
        {
          "label": "Rated power",
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
          "label": "Counterweight piston",
          "value": "1000±5g"
        },
        {
          "label": "Cylindrical plastic test tube",
          "value": ""
        },
        {
          "label": "Inner diameter",
          "value": "32±0.25mm"
        },
        {
          "label": "Height",
          "value": "420±0.25mm"
        },
        {
          "label": "Outer diameter of flushing tube",
          "value": "6±0.25mm"
        },
        {
          "label": "Inner diameter",
          "value": "4±0.2mm"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P131",
      "name": "Mortar Mixer",
      "model": "UJZ-15",
      "category": "Mortar Testing Equipment Series",
      "thumbnail": "/assets/images/UJZ-15.png",
      "image": "myImages/UJZ-15-Image.png",
      "description": "This product is suitable for mixing mortar, and is generally applicable to construction units, universities and construction research units.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Feed capacity",
          "value": "28L"
        },
        {
          "label": "Output capacity",
          "value": "15L"
        },
        {
          "label": "Mixing drum speed (counterclockwise)",
          "value": "60±2r/min"
        },
        {
          "label": "Stirring blade speed (clockwise)",
          "value": "80±4r/min"
        },
        {
          "label": "Working gap between mixing blade and mixing drum",
          "value": "5±0.5mm"
        },
        {
          "label": "Motor speed (synchronous speed)",
          "value": "1440r/min"
        },
        {
          "label": "Motor power",
          "value": "1.5kW"
        },
        {
          "label": "Voltage",
          "value": "AC380V±10%, 50Hz"
        },
        {
          "label": "Dimensions",
          "value": "800×600×900mm"
        },
        {
          "label": "Weight",
          "value": "2100kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P132",
      "name": "Mortar Permeamete",
      "model": "SS-1.5",
      "category": "Mortar Testing Equipment Series",
      "thumbnail": "/assets/images/SS-1.5.png",
      "image": "myImages/SS-1.5-Image.png",
      "description": "The impermeability of mortar refers to the ability of mortar to resist the penetration of water or other liquid media under pressure.\nSS-1.5 mortar permeability tester can be used to measure the impermeability of waterproof mortar, to conduct a comparison test between the mortar mixed with waterproof agent and the reference mortar, and to test the water permeability of other waterproof materials.\nThe SS-1.5 mortar penetration tester produced by our factory is suitable for the inspection, research and teaching of the anti-seepage performance of mortar by engineering quality supervision and inspection departments at all levels, construction unit laboratories, scientific research units, and colleges and universities.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Allowable maximum working pressure",
          "value": "1.5MPa"
        },
        {
          "label": "Working mode",
          "value": "Automatic voltage regulation and manual voltage regulation"
        },
        {
          "label": "The number of test pieces that can be used at the same time",
          "value": "6"
        },
        {
          "label": "The inner diameter of upper mouth of test mold",
          "value": "Φ70mm"
        },
        {
          "label": "The inner diameter of lower mouth of test mold",
          "value": "Φ80mm"
        },
        {
          "label": "Mold height",
          "value": "30mm"
        },
        {
          "label": "Piston pump plunger diameter",
          "value": "Φ10mm"
        },
        {
          "label": "Piston pump stroke",
          "value": "10mm"
        },
        {
          "label": "Plunger pump reciprocating frequency",
          "value": "130 times/min"
        },
        {
          "label": "Piston pump flow",
          "value": "0.1L/min"
        },
        {
          "label": "Motor power",
          "value": "90W"
        },
        {
          "label": "Motor speed",
          "value": "1340r/min"
        },
        {
          "label": "Voltage",
          "value": "AC380V±10%, 50Hz"
        },
        {
          "label": "Dimensions",
          "value": "750×560×750mm"
        },
        {
          "label": "Weight",
          "value": "120kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P133",
      "name": "Temperature And Humidity Climate Chambers (Reach-in Type)",
      "model": "LDGD-80",
      "category": "General Laboratory Equipment Series",
      "thumbnail": "/assets/images/LDGD-80.png",
      "image": "myImages/LDGD-80-Image.png",
      "description": "Programmable constant temperature and humidity test chamber, also known as simulated environmental test chamber and high and low temperature alternating humidity and heat test chamber. This equipment is simulated high and low temperature and hot and humid environment, widely used to determine the adaptability of electric and electronic products to high and low temperature and hot and humid environment (especially the changes in the electrical and mechanical properties of the product), can also be used to check the ability of the specimen to withstand certain corrosion.",
      "features": [
        "he components selected for this product are highly reliable and of high quality to ensure the reliability, stability and accuracy of the product performance."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Temperature range：-40°C~+150°C",
          "value": ""
        },
        {
          "label": "(temperature at the time of purchase)",
          "value": ""
        },
        {
          "label": "Humidity range：20%~98%RH",
          "value": ""
        },
        {
          "label": "Temperature and humidity control accuracy：±1.0°C; ±2%RH",
          "value": ""
        },
        {
          "label": "Inner box size(W×D×H)：400×400×550mm",
          "value": ""
        },
        {
          "label": "Power supply：220V",
          "value": ""
        },
        {
          "label": "Temperature and humidity sub-surface uniformity：±2.0℃; ±3.0%RH",
          "value": ""
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
      "isNew": false
    },
    {
      "id": "P134",
      "name": "Switch Socket Humidity Test Chamber",
      "model": "CSX-280",
      "category": "General Laboratory Equipment Series",
      "thumbnail": "/assets/images/CSX-280.png",
      "image": "myImages/CSX-280-Image.png",
      "description": "The equipment is mainly used for temperature and humidity testing of switches and sockets of electronic products.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Voltage",
          "value": "220V"
        },
        {
          "label": "Heating power",
          "value": "500W"
        },
        {
          "label": "Cooling power",
          "value": "138W"
        },
        {
          "label": "Control temperature",
          "value": "40℃±2℃"
        },
        {
          "label": "Humidity",
          "value": "93±3%RH"
        },
        {
          "label": "Workshop size",
          "value": "550×550×800mm"
        },
        {
          "label": "Dimensions",
          "value": "650×700×1650mm"
        },
        {
          "label": "Weight",
          "value": "200kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P135",
      "name": "Drying Ovens Forced Ventilation",
      "model": "101-1A",
      "category": "General Laboratory Equipment Series",
      "thumbnail": "/assets/images/101-1A.png",
      "image": "myImages/101-1A-Image.png",
      "description": "The maximum working temperature of the drying oven is 250℃, which is suitable for various specimens for baking, drying, heat treatment and other heating experiments, but the volatile items cannot be placed into the drying oven to avoid causing explosion.",
      "features": [
        "This drying oven has precise structure, sensitive temperature control and easy operation."
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
          "label": "Operating Temperature",
          "value": "Room temperature~250±1℃"
        },
        {
          "label": "Total power",
          "value": "2.5kW"
        },
        {
          "label": "Voltage",
          "value": "220V"
        },
        {
          "label": "Studio dimensions",
          "value": "450×350×450mm"
        },
        {
          "label": "Overall dimensions",
          "value": "750×500×720mm"
        },
        {
          "label": "Weight",
          "value": "65kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P136",
      "name": "Drying Ovens Forced Ventilation",
      "model": "101-2A",
      "category": "General Laboratory Equipment Series",
      "thumbnail": "/assets/images/101-2A.png",
      "image": "myImages/101-2A-Image.png",
      "description": "The maximum working temperature of the drying oven is 250℃, which is suitable for various specimens for baking, drying, heat treatment and other heating experiments, but the volatile items cannot be placed into the drying oven to avoid causing explosion.",
      "features": [
        "This drying oven has precise structure, sensitive temperature control and easy operation."
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
          "label": "Operating Temperature",
          "value": "Room temperature~250±1℃"
        },
        {
          "label": "Total power",
          "value": "3.2kW"
        },
        {
          "label": "Voltage",
          "value": "220V"
        },
        {
          "label": "Studio dimensions",
          "value": "550×450×550mm"
        },
        {
          "label": "Overall dimensions",
          "value": "850×570×810mm"
        },
        {
          "label": "Weight",
          "value": "86kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P137",
      "name": "Drying Ovens Forced Ventilation",
      "model": "101-3A",
      "category": "General Laboratory Equipment Series",
      "thumbnail": "/assets/images/101-3A.png",
      "image": "myImages/101-3A-Image.png",
      "description": "The maximum working temperature of the drying oven is 250℃, which is suitable for various specimens for baking, drying, heat treatment and other heating experiments, but the volatile items cannot be placed into the drying oven to avoid causing explosion.",
      "features": [
        "This drying oven has precise structure, sensitive temperature control and easy operation."
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
          "label": "Operating Temperature",
          "value": "Room temperature~250±1℃"
        },
        {
          "label": "Total power",
          "value": "6kW"
        },
        {
          "label": "Voltage",
          "value": "220V"
        },
        {
          "label": "Studio dimensions",
          "value": "600×500×750mm"
        },
        {
          "label": "Overall dimensions",
          "value": "970×650×1020mm"
        },
        {
          "label": "Weight",
          "value": "123k"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P138",
      "name": "Drying Ovens Forced Ventilation",
      "model": "101-4A",
      "category": "General Laboratory Equipment Series",
      "thumbnail": "/assets/images/101-4A.png",
      "image": "myImages/101-4A-Image.png",
      "description": "The maximum working temperature of the drying oven is 250℃, which is suitable for various specimens for baking, drying, heat treatment and other heating experiments, but the volatile items cannot be placed into the drying oven to avoid causing explosion.",
      "features": [
        "This drying oven has precise structure, sensitive temperature control and easy operation."
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
          "label": "Operating Temperature",
          "value": "Room temperature~250±1℃"
        },
        {
          "label": "Total power",
          "value": "6kW"
        },
        {
          "label": "Voltage",
          "value": "380V with zero wire"
        },
        {
          "label": "Studio dimensions",
          "value": "800×800×1000mm"
        },
        {
          "label": "Overall dimensions",
          "value": "1170×950×1310mm"
        },
        {
          "label": "Weight",
          "value": "204kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P139",
      "name": "Drying Ovens Forced Ventilation",
      "model": "101-5A",
      "category": "General Laboratory Equipment Series",
      "thumbnail": "/assets/images/101-5A.png",
      "image": "myImages/101-5A-Image.png",
      "description": "The maximum working temperature of the drying oven is 250℃, which is suitable for various specimens for baking, drying, heat treatment and other heating experiments, but the volatile items cannot be placed into the drying oven to avoid causing explosion.",
      "features": [
        "This drying oven has precise structure, sensitive temperature control and easy operation."
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
          "label": "Operating Temperature",
          "value": "Room temperature~250±1℃"
        },
        {
          "label": "Total power",
          "value": "12kW"
        },
        {
          "label": "Voltage",
          "value": "380V with zero wire"
        },
        {
          "label": "Studio dimensions",
          "value": "1000×1000×1200mm"
        },
        {
          "label": "Overall dimensions",
          "value": "1370×1150×1500mm"
        },
        {
          "label": "Weight",
          "value": "280kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P140",
      "name": "Muffle Furnace",
      "model": "SX2-8-16",
      "category": "General Laboratory Equipment Series",
      "thumbnail": "/assets/images/SX2-8-16.png",
      "image": "myImages/SX2-8-16-Image.png",
      "description": "This resistor is of periodic operation type, with silicon-molybdenum rods as heating elements,  and the rated temperature of the furnace is 1600°C. It is used for high-temperature heating such as sintering,dissolution,and analysis of metals and ceramics in laboratories, industrial and mining enterprises, and scientific research units.\nThis resistance furnace needs to be used in conjunction with KSY temperature controller and double platinum rhodium thermocouple, so as to measure, indicate and automatically control the temperature of the electric furnace.",
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
          "label": "Rated power",
          "value": "8kW"
        },
        {
          "label": "Rated voltage",
          "value": "220V"
        },
        {
          "label": "Rated temperature",
          "value": "1600℃"
        },
        {
          "label": "Empty furnace temperature rise time",
          "value": "≤220min"
        },
        {
          "label": "Studio size",
          "value": "150×300×120mm"
        },
        {
          "label": "Overall dimensions",
          "value": "820×670×780mm"
        },
        {
          "label": "Weight",
          "value": "350kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P141",
      "name": "Muffle Furnace",
      "model": "SX2-12-16",
      "category": "General Laboratory Equipment Series",
      "thumbnail": "/assets/images/SX2-12-16.png",
      "image": "myImages/SX2-12-16-Image.png",
      "description": "This resistor is of periodic operation type, with silicon-molybdenum rods as heating elements,  and the rated temperature of the furnace is 1600°C. It is used for high-temperature heating such as sintering,dissolution,and analysis of metals and ceramics in laboratories, industrial and mining enterprises, and scientific research units.\nThis resistance furnace needs to be used in conjunction with KSY temperature controller and double platinum rhodium thermocouple, so as to measure, indicate and automatically control the temperature of the electric furnace.",
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
          "label": "Rated power",
          "value": "12kW"
        },
        {
          "label": "Rated voltage",
          "value": "380V"
        },
        {
          "label": "Rated temperature",
          "value": "1600℃"
        },
        {
          "label": "Empty furnace temperature rise time",
          "value": "≤250min"
        },
        {
          "label": "Studio size",
          "value": "200×400×160mm"
        },
        {
          "label": "Overall dimensions",
          "value": "905×730×835mm"
        },
        {
          "label": "Weight",
          "value": "400kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P142",
      "name": "Muffle Furnace",
      "model": "SX2-2.5-10",
      "category": "General Laboratory Equipment Series",
      "thumbnail": "/assets/images/SX2-2.5-10.png",
      "image": "myImages/SX2-2.5-10-Image.png",
      "description": "This series of resistance furnaces are cycle operation type, for laboratories, industrial and  mining  enterprises, scientific research and other units for elemental analysis and determination and general small steel quenching, annealing, tempering and other heat treatment heating with. In addition, its rated temperature of 1300 ℃ high-temperature box resistance furnace, can be used as alloy steel heat treatment and metal sintering, dissolution, analysis and other high-temperature heating.",
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
          "label": "Rated power",
          "value": "2.5kW"
        },
        {
          "label": "Rated voltage",
          "value": "220V"
        },
        {
          "label": "Rated temperature",
          "value": "1000℃"
        },
        {
          "label": "Studio size",
          "value": "120×200×80mm"
        },
        {
          "label": "Overall dimensions",
          "value": "380×380×420mm"
        },
        {
          "label": "Weight",
          "value": "145kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P143",
      "name": "Muffle Furnace",
      "model": "SX2-4-10",
      "category": "General Laboratory Equipment Series",
      "thumbnail": "/assets/images/SX2-4-10.png",
      "image": "myImages/SX2-4-10-Image.png",
      "description": "This series of resistance furnaces are cycle operation type, for laboratories, industrial and  mining  enterprises, scientific research and other units for elemental analysis and determination and general small steel quenching, annealing, tempering and other heat treatment heating with. In addition, its rated temperature of 1300 ℃ high-temperature box resistance furnace, can be used as alloy steel heat treatment and metal sintering, dissolution, analysis and other high-temperature heating.",
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
          "label": "Rated power",
          "value": "4kW"
        },
        {
          "label": "Rated voltage",
          "value": "220V"
        },
        {
          "label": "Rated temperature",
          "value": "1000℃"
        },
        {
          "label": "Studio size",
          "value": "200×300×120mm"
        },
        {
          "label": "Overall dimensions",
          "value": "490×490×540mm"
        },
        {
          "label": "Weight",
          "value": "158kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P144",
      "name": "Muffle Furnace",
      "model": "SX2-8-10",
      "category": "General Laboratory Equipment Series",
      "thumbnail": "/assets/images/SX2-8-10.png",
      "image": "myImages/SX2-8-10-Image.png",
      "description": "This series of resistance furnaces are cycle operation type, for laboratories, industrial and  mining  enterprises, scientific research and other units for elemental analysis and determination and general small steel quenching, annealing, tempering and other heat treatment heating with. In addition, its rated temperature of 1300 ℃ high-temperature box resistance furnace, can be used as alloy steel heat treatment and metal sintering, dissolution, analysis and other high-temperature heating.",
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
          "label": "Rated power",
          "value": "8kW"
        },
        {
          "label": "Rated voltage",
          "value": "380V"
        },
        {
          "label": "Rated temperature",
          "value": "1000℃"
        },
        {
          "label": "Studio size",
          "value": "250×400×160mm"
        },
        {
          "label": "Overall dimensions",
          "value": "610×540×550mm"
        },
        {
          "label": "Weight",
          "value": "163kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P145",
      "name": "Muffle Furnace",
      "model": "SX2-12-10",
      "category": "General Laboratory Equipment Series",
      "thumbnail": "/assets/images/SX2-12-10.png",
      "image": "myImages/SX2-12-10-Image.png",
      "description": "This series of resistance furnaces are cycle operation type, for laboratories, industrial and  mining  enterprises, scientific research and other units for elemental analysis and determination and general small steel quenching, annealing, tempering and other heat treatment heating with. In addition, its rated temperature of 1300 ℃ high-temperature box resistance furnace, can be used as alloy steel heat treatment and metal sintering, dissolution, analysis and other high-temperature heating.",
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
          "label": "Rated power",
          "value": "12kW"
        },
        {
          "label": "Rated voltage",
          "value": "380V"
        },
        {
          "label": "Rated temperature",
          "value": "1000℃"
        },
        {
          "label": "Studio size",
          "value": "300×500×200mm"
        },
        {
          "label": "Overall dimensions",
          "value": "710×610×560mm"
        },
        {
          "label": "Weight",
          "value": "185kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P146",
      "name": "Horizontal Low Temperature Chamber",
      "model": "DW-25",
      "category": "General Laboratory Equipment Series",
      "thumbnail": "/assets/images/DW-25（卧式）.png",
      "image": "myImages/DW-25-Image.png",
      "description": "DW Series Horizontal low temperature test chamber refrigeration using brand compressor, stainless steel liner, insulation layer made of imported raw materials foam,good insulation effect, power saving,design five evaporation pipeline, with uniform temperature, prevent leakage and other characteristics.\nThis product is widely used in construction, medicine, electronics, scientific research and other departments to do high and low temperature test, aging test.",
      "features": [
        "This product has high cooling efficiency and low noise."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Temperature control range",
          "value": "-25℃ ~ room temperature"
        },
        {
          "label": "Compressor power",
          "value": "200W"
        },
        {
          "label": "Voltage",
          "value": "220V"
        },
        {
          "label": "Dimension of working chamber",
          "value": "800×400×650mm"
        },
        {
          "label": "Dimension",
          "value": "940×550×850mm"
        },
        {
          "label": "Weight",
          "value": "120kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P147",
      "name": "Horizontal Low Temperature Chamber",
      "model": "DW-40",
      "category": "General Laboratory Equipment Series",
      "thumbnail": "/assets/images/DW-40（卧式）.png",
      "image": "myImages/DW-40-Image.png",
      "description": "DW Series Horizontal low temperature test chamber refrigeration using brand compressor, stainless steel liner, insulation layer made of imported raw materials foam,good insulation effect, power saving,design five evaporation pipeline, with uniform temperature, prevent leakage and other characteristics.\nThis product is widely used in construction, medicine, electronics, scientific research and other departments to do high and low temperature test, aging test.",
      "features": [
        "This product has high cooling efficiency and low noise."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Temperature control range",
          "value": "-40℃ ~ room temperature"
        },
        {
          "label": "Compressor power",
          "value": "230W"
        },
        {
          "label": "Voltage",
          "value": "220V"
        },
        {
          "label": "Dimension of working chamber",
          "value": "880×405×600mm"
        },
        {
          "label": "Dimension",
          "value": "1020×560×800mm"
        },
        {
          "label": "Weight",
          "value": "140kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P148",
      "name": "Horizontal Low Temperature Chamber",
      "model": "DW-60",
      "category": "General Laboratory Equipment Series",
      "thumbnail": "/assets/images/DW-60（卧式）.png",
      "image": "myImages/DW-60-Image.png",
      "description": "DW Series Horizontal low temperature test chamber refrigeration using brand compressor, stainless steel liner, insulation layer made of imported raw materials foam,good insulation effect, power saving,design five evaporation pipeline, with uniform temperature, prevent leakage and other characteristics.\nThis product is widely used in construction, medicine, electronics, scientific research and other departments to do high and low temperature test, aging test.",
      "features": [
        "This product has high cooling efficiency and low noise."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Temperature control range",
          "value": "-60℃ ~ room temperature"
        },
        {
          "label": "Compressor power",
          "value": "250W"
        },
        {
          "label": "Voltage",
          "value": "220V"
        },
        {
          "label": "Dimension of working chamber",
          "value": "600×500×650mm"
        },
        {
          "label": "Dimension",
          "value": "750×650×850mm"
        },
        {
          "label": "Weight",
          "value": "160kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P149",
      "name": "Vertical Low Temperature Chamber",
      "model": "DW-40",
      "category": "General Laboratory Equipment Series",
      "thumbnail": "/assets/images/DW-40（立式）.png",
      "image": "myImages/DW-40-Image.png",
      "description": "DW-40 high and low temperature test chamber refrigeration using the United States Danfoss brand-name compressor, stainless steel liner. Insulation layer made of imported raw materials foam, good insulation effect, power saving,the latest design of five evaporation pipeline, with uniform temperature,prevent leakage and other characteristics.This product is widely used in building materials, medicine, electronics, scientific research and other departments to do high and low temperature test, aging test.",
      "features": [
        "The overall structure is strong, beautiful shape, good corrosion resistance;",
        "The temperature and humidity meter adopts setting, displaying double digital display, which  has the advantages of high resolution, intuition, easy adjustment and high control accuracy."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Temperature control range",
          "value": "-40℃～room temperature"
        },
        {
          "label": "Compressor power",
          "value": "2000W"
        },
        {
          "label": "Voltage",
          "value": "AC220V±10%"
        },
        {
          "label": "Studio size",
          "value": "500×550×600mm"
        },
        {
          "label": "Dimension",
          "value": "820×780×1650mm"
        },
        {
          "label": "Weight",
          "value": "180kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P150",
      "name": "Damp Heat Test Chamber",
      "model": "HBY-1",
      "category": "General Laboratory Equipment Series",
      "thumbnail": "/assets/images/HBY-1.png",
      "image": "myImages/HBY-1-Image.png",
      "description": "The heat and humidity test chamber mainly simulates the changes in temperature and humidity in the climatic environment to observe the reliable state of storage and operation of products in high and low temperature, dry and humid environments. It is mainly used by scientific research units and testing units.",
      "features": [
        "The overall structure is strong, beautiful shape, good corrosion resistance.",
        "The temperature and humidity meter adopts setting, displaying double digital display,which  has the advantages of high resolution, intuition, easy adjustment and high control accuracy."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Voltage",
          "value": "AC220±10%"
        },
        {
          "label": "Heating power",
          "value": "500W"
        },
        {
          "label": "Cooling power",
          "value": "138W"
        },
        {
          "label": "Control temperature",
          "value": "20～60±2℃"
        },
        {
          "label": "Humidity",
          "value": "45～80±5%RH"
        },
        {
          "label": "Working chamber size",
          "value": "600×500×600mm"
        },
        {
          "label": "Dimension",
          "value": "700×650×1500mm"
        },
        {
          "label": "Weight",
          "value": "185kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    },
    {
      "id": "P151",
      "name": "Aging Test Chamber",
      "model": "401A",
      "category": "General Laboratory Equipment Series",
      "thumbnail": "/assets/images/401A.png",
      "image": "myImages/401A-Image.png",
      "description": "This product is suitable for scientific research units and factories for plastic materials (rubber, plastic), electrical insulation and other materials aging test.",
      "features": [
        "Sensitive temperature control and good temperature uniformity.",
        "Large effective space and stable performance."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Control temperature  Room temperature ～200℃",
          "value": ""
        },
        {
          "label": "Temperature controller accuracy  ±1℃",
          "value": ""
        },
        {
          "label": "Turntable speed  11～12r/min",
          "value": ""
        },
        {
          "label": "Heating power 2200W",
          "value": ""
        },
        {
          "label": "Power supply voltage AC220V±10%",
          "value": ""
        },
        {
          "label": "Working chamber size 450×450×500mm",
          "value": ""
        },
        {
          "label": "Overall dimension  780×660×1160mm",
          "value": ""
        },
        {
          "label": "Weight  100kg",
          "value": ""
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false
    }
  ]
};