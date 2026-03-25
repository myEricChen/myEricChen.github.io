/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2026-02-22 10:43:50
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2026-03-25 08:51:04
 * @FilePath: \EngWebsite\data\data.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// ==================== data/data.js ====================
window.ludaData = {
  // 设备分类数据（英文版）
  categories: [
    {
      id: "tensile",
      name: "Electromechanical Universal Testing Маchines",
      description: "High-precision electronic universal testers for plastics, rubber, textiles, metals, etc.",
      icon: "/assets/series/electronic-tensile-machine-icon.jpg"
    },
    {
      id: "universal",
      name: "Hydraulic Universal Testing Маchines",
      description: "Multi-functional equipment for tension, compression, bending, shear on metals & non-metals.",
      icon: "/assets/series/universal-testing-machine-icon.jpg"
    },
    {
      id: "concrete",
      name: "Concrete Testing",
      description: "Full process concrete testing: mixing, curing, strength, etc.",
      icon: "/assets/series/concrete-test-icon.jpg"
    },
    {
      id: "cement",
      name: "Cement & Mortar Testing",
      description: "Cement & mortar consistency, setting time, soundness, strength testers.",
      icon: "/assets/series/cement-instrument-icon.jpg"
    },
    {
      id: "large_machine",
      name: "Large-scale Special Testing Machine",
      description: "Special machines: torsion, creep, fatigue, impact, and custom solutions.",
      icon: "/assets/series/large-testing-machine-icon.jpg"
    },
    {
      id: "research",
      name: "General Equipment",
      description: "High-stability precision instruments for universities and research institutes.",
      icon: "/assets/series/research-product-icon.jpg"
    },
    {
      id: "asphalt",
      name: "Asphalt Testing",
      description:  "Marshall stability, wheel tracking, gyratory compaction, asphalt content, and mixture performance testers.",
      icon: "/assets/series/asphalt-instrument-icon.jpg"
    },
    {
      id: "bitumen",
      name: "Bitumen (Asphalt Binder) Testing",
      description: "Penetration, softening point, ductility, viscosity, aging, and wax content testers.",
      icon: "/assets/series/bitumen-instrument-icon.jpg"
    },
    {
      id: "geotechnical",
      name: "Geotechnical & Aggregate Testing",
      description: "Soil, sand, rock physical/mechanical testing for geotechnical engineering.",
      icon: "/assets/series/geotechnical-instrument-icon.jpg"
    }
  ],

  // 所有设备数据（仅列出大型试验机系列作为示例，实际可扩展）
  devices: [
    {
      "id": "M022",
      "name": "Digital Display Universal Material Testing Machine",
      "suffixName": "1000kN",
      "model": "WE-1000B",
      "category": "Hydraulic Universal Testing Маchines",
      "thumbnail": "/assets/images/WE-1000B（出口）.png",
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
          "label": "Load Capacity (kN)",
          "value": "1000"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "100～1000"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1%"
        },
        {
          "label": "Tensile Vertical Test Space (mm)",
          "value": "690"
        },
        {
          "label": "Compression Vertical Test Space (mm)",
          "value": "620"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0～15"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "20～40, 40～60"
        },
        {
          "label": "Piston Stroke (mm)",
          "value": "180"
        },
        {
          "label": "Compression Platen dimension (mm)",
          "value": "Φ220(Upper) Φ230(Lower)"
        },
        {
          "label": "Horizontal Test Space (mm)",
          "value": "450"
        },
        {
          "label": "Piston Maximum Speed (mm/min)",
          "value": "100"
        },
        {
          "label": "Cross Head Maximum Speed (mm/min)",
          "value": "240"
        },
        {
          "label": "Power of Motors (kW)",
          "value": "1.8"
        },
        {
          "label": "Main Unit Dimensions (mm)",
          "value": "945×630×2100"
        },
        {
          "label": "Control Cabinet Dimensions (mm)",
          "value": "700×520×1630"
        },
        {
          "label": "Overall weight(kg)",
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
      "name": "Shock Absorber Universal Testing Machine",
      "suffixName": "600kN",
      "model": "WAW-600Pro",
      "category": "Hydraulic Universal Testing Маchines",
      "thumbnail": "/assets/images/WAW-600Pro.png",
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
          "label": "Load Capacity (kN)",
          "value": "600"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "30～600"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±0.5%"
        },
        {
          "label": "Tensile Vertical Test Space (mm)",
          "value": "670"
        },
        {
          "label": "Cylinder Sample Diameter Range (mm) (mm)",
          "value": "Φ13~Φ26,Φ26~Φ40"
        },
        {
          "label": "Plate Sample Thickness Range (mm)",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P002",
      "name": "Shock Absorber Universal Testing Machine",
      "suffixName": "1000kN",
      "model": "WAW-1000Pro",
      "category": "Hydraulic Universal Testing Маchines",
      "thumbnail": "/assets/images/WAW-1000Pro.png",
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
          "label": "Load Capacity (kN)",
          "value": "1000"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "50～1000"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±0.5%"
        },
        {
          "label": "Tensile Vertical Test Space (mm)",
          "value": "690"
        },
        {
          "label": "Cylinder Sample Diameter Range (mm) (mm)",
          "value": "Φ14~Φ45"
        },
        {
          "label": "Plate Sample Thickness Range (mm)",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P003",
      "name": "Electro-hydraulic Servo Steel Strand Special Testing Machine",
      "suffixName": "600kN",
      "model": "WAW-600G",
      "category": "Hydraulic Universal Testing Маchines",
      "thumbnail": "/assets/images/WAW-600GS.png",
      "description": "This  product  is  suitable  for  tensile  test  of  steel  strand,  also  can  be  used  for tensile, compression, shear and other tests of metal and non-metal materials.",
      "features": [
        "The frame adopts gantry frame structure, super strong steel.",
        "The shield is made of acrylic transparent material, clean and beautiful, can observe the whole test process.",
        "External hydraulic jaws, easy to overhaul.",
        "With upper/lower pressure plate, to achieve tensile and compressive double space.",
        "Sensor adopts wheel and spoke sensor, high precision, stable rate, with reciprocity.",
        "Brand computer, with wireless keyboard and mouse, large display, sensitive operation.",
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
          "label": "Load Capacity (kN)",
          "value": "600"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "60～600"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1%"
        },
        {
          "label": "Tensile Vertical Test Space (mm)",
          "value": "1050"
        },
        {
          "label": "Compression Vertical Test Space (mm)",
          "value": "950"
        },
        {
          "label": "Specimen clamping diameter (mm)",
          "value": "Φ12~Φ16"
        },
        {
          "label": "Piston stroke (mm)",
          "value": "200"
        },
        {
          "label": "Compression Platen dimension (mm)",
          "value": "Φ220(Upper) Φ230(Lower)"
        },
        {
          "label": "Piston Maximum Speed (mm/min)",
          "value": "100"
        },
        {
          "label": "Cross Head Maximum Speed (mm/min)",
          "value": "240"
        },
        {
          "label": "Horizontal Test Space (mm)",
          "value": "450"
        },
        {
          "label": "Supply Voltage",
          "value": "AC380V±10%,50-60Hz"
        },
        {
          "label": "Main Unit Dimensions (mm)",
          "value": "1050×710×2910"
        },
        {
          "label": "Control Cabinet Dimensions (mm)",
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
      "isNew": false,
      "customized": ["Can be upgraded to Class 0.5% Accuracy Class", "Can be upgraded to Servo Motor Hydraulic System"]
    },
    {
      "id": "P004",
      "name": "Electro-hydraulic Servo Steel Strand Special Testing Machine",
      "suffixName": "1000kN",
      "model": "WAW-1000G",
      "category": "Hydraulic Universal Testing Маchines",
      "thumbnail": "/assets/images/WAW-1000GS.png",
      "description": "This  product  is  suitable  for  tensile  test  of  steel  strand,  also  can  be  used  for tensile, compression, shear and other tests of metal and non-metal materials.",
      "features": [
        "The frame adopts gantry frame structure, super strong steel.",
        "The shield is made of acrylic transparent material, clean and beautiful, can observe the whole test process.",
        "External hydraulic jaws, easy to overhaul.",
        "With upper/lower pressure plate, to achieve tensile and compressive double space.",
        "Sensor adopts wheel and spoke sensor, high precision, stable rate, with reciprocity.",
        "Brand computer, with wireless keyboard and mouse, large display, sensitive operation.",
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
          "label": "Load Capacity (kN)",
          "value": "1000"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "100～1000"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1%"
        },
        {
          "label": "Tensile Vertical Test Space (mm)",
          "value": "1050"
        },
        {
          "label": "Compression Vertical Test Space (mm)",
          "value": "950"
        },
        {
          "label": "Specimen clamping diameter (mm)",
          "value": "Φ12~Φ16"
        },
        {
          "label": "Piston stroke (mm)",
          "value": "200"
        },
        {
          "label": "Compression Platen dimension (mm)",
          "value": "Φ220(Upper) Φ230(Lower)"
        },
        {
          "label": "Piston Maximum Speed (mm/min)",
          "value": "100"
        },
        {
          "label": "Cross Head Maximum Speed (mm/min)",
          "value": "240"
        },
        {
          "label": "Horizontal Test Space (mm)",
          "value": "450"
        },
        {
          "label": "Supply Voltage",
          "value": "AC380V±10%,50-60Hz"
        },
        {
          "label": "Main Unit Dimensions (mm)",
          "value": "1050×710×2910"
        },
        {
          "label": "Control Cabinet Dimensions (mm)",
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
      "isNew": false,
      "customized": ["Can be upgraded to Class 0.5% Accuracy Class", "Can be upgraded to Servo Motor Hydraulic System"]
    },
    {
      "id": "P007",
      "name": "Electro-hydraulic Servo Universal Material Testing Machine",
      "suffixName": "100kN",
      "model": "WAW-100B",
      "category": "Hydraulic Universal Testing Маchines",
      "thumbnail": "/assets/images/WAW-100S.png",
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
          "label": "Load Capacity (kN)",
          "value": "100"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "10～100"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1%"
        },
        {
          "label": "Tensile Vertical Test Space (mm)",
          "value": "480"
        },
        {
          "label": "Compression Vertical Test Space (mm)",
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
          "label": "Piston Stroke (mm)",
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
          "value": "380"
        },
        {
          "label": "Piston Maximum Speed (mm/min)",
          "value": "100"
        },
        {
          "label": "Cross Head Maximum Speed (mm/min)",
          "value": "240"
        },
        {
          "label": "Power of Motors (kW)",
          "value": "1.2"
        },
        {
          "label": "Supply Voltage",
          "value": "AC380V±10%,50-60Hz"
        },
        {
          "label": "Main Unit Dimensions (mm)",
          "value": "730×600×1750"
        },
        {
          "label": "Control Cabinet Dimensions (mm)",
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
      "isNew": false,
      "customized": ["Can be upgraded to Class 0.5% Accuracy Class", "Can be upgraded to Servo Motor Hydraulic System"]
    },
    {
      "id": "P008",
      "name": "Electro-hydraulic Servo Universal Material Testing Machine",
      "suffixName": "300kN",
      "model": "WAW-300B",
      "category": "Hydraulic Universal Testing Маchines",
      "thumbnail": "/assets/images/WAW-300S.png",
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
          "label": "Load Capacity (kN)",
          "value": "300"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "30～300"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1%"
        },
        {
          "label": "Tensile Vertical Test Space (mm)",
          "value": "540"
        },
        {
          "label": "Compression Vertical Test Space (mm)",
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
          "label": "Piston Stroke (mm)",
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
          "label": "Piston Maximum Speed (mm/min)",
          "value": "100"
        },
        {
          "label": "Cross Head Maximum Speed (mm/min)",
          "value": "240"
        },
        {
          "label": "Power of Motors (kW)",
          "value": "1.2"
        },
        {
          "label": "Supply Voltage",
          "value": "AC380V±10%,50-60Hz"
        },
        {
          "label": "Main Unit Dimensions (mm)",
          "value": "730×600×1840"
        },
        {
          "label": "Control Cabinet Dimensions (mm)",
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
      "isNew": false,
      "customized": ["Can be upgraded to Class 0.5% Accuracy Class", "Can be upgraded to Servo Motor Hydraulic System"]
    },
    {
      "id": "P009",
      "name": "Electro-hydraulic Servo Universal Material Testing Machine",
      "suffixName": "600kN",
      "model": "WAW-600B",
      "category": "Hydraulic Universal Testing Маchines",
      "thumbnail": "/assets/images/WAW-600S.png",
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
          "label": "Load Capacity (kN)",
          "value": "600"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "60～600"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1%"
        },
        {
          "label": "Tensile Vertical Test Space (mm)",
          "value": "690"
        },
        {
          "label": "Compression Vertical Test Space (mm)",
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
          "label": "Piston Stroke (mm)",
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
          "label": "Piston Maximum Speed (mm/min)",
          "value": "100"
        },
        {
          "label": "Cross Head Maximum Speed (mm/min)",
          "value": "240"
        },
        {
          "label": "Power of Motors (kW)",
          "value": "1.8"
        },
        {
          "label": "Supply Voltage",
          "value": "AC380V±10%,50-60Hz"
        },
        {
          "label": "Main Unit Dimensions (mm)",
          "value": "890×590×2070"
        },
        {
          "label": "Control Cabinet Dimensions (mm)",
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
      "isNew": false,
      "customized": ["Can be upgraded to Class 0.5% Accuracy Class", "Can be upgraded to Servo Motor Hydraulic System"]
    },
    {
      "id": "P010",
      "name": "Electro-hydraulic Servo Universal Material Testing Machine",
      "suffixName": "1000kN",
      "model": "WAW-1000B",
      "category": "Hydraulic Universal Testing Маchines",
      "thumbnail": "/assets/images/WAW-1000S.png",
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
          "label": "Load Capacity (kN)",
          "value": "1000"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "100～1000"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1%"
        },
        {
          "label": "Tensile Vertical Test Space (mm)",
          "value": "690"
        },
        {
          "label": "Compression Vertical Test Space (mm)",
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
          "label": "Piston Stroke (mm)",
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
          "label": "Piston Maximum Speed (mm/min)",
          "value": "100"
        },
        {
          "label": "Cross Head Maximum Speed (mm/min)",
          "value": "240"
        },
        {
          "label": "Power of Motors (kW)",
          "value": "1.8"
        },
        {
          "label": "Supply Voltage",
          "value": "AC380V±10%,50-60Hz"
        },
        {
          "label": "Main Unit Dimensions (mm)",
          "value": "945×635×2100"
        },
        {
          "label": "Control Cabinet Dimensions (mm)",
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
      "isNew": false,
      "customized": ["Can be upgraded to Class 0.5% Accuracy Class", "Can be upgraded to Servo Motor Hydraulic System"]
    },
    {
      "id": "P011",
      "name": "Electro-hydraulic Servo Universal Material Testing Machine",
      "suffixName": "2000kN",
      "model": "WAW-2000B",
      "category": "Hydraulic Universal Testing Маchines",
      "thumbnail": "/assets/images/WAW-2000S.png",
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
          "label": "Load Capacity (kN)",
          "value": "2000"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "200～2000"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1%"
        },
        {
          "label": "Tensile Vertical Test Space (mm)",
          "value": "790"
        },
        {
          "label": "Compression Vertical Test Space (mm)",
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
          "label": "Piston Stroke (mm)",
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
          "label": "Piston Maximum Speed (mm/min)",
          "value": "100"
        },
        {
          "label": "Cross Head Maximum Speed (mm/min)",
          "value": "240"
        },
        {
          "label": "Power of Motors (kW)",
          "value": "3.55"
        },
        {
          "label": "Supply Voltage",
          "value": "AC380V±10%,50-60Hz"
        },
        {
          "label": "Main Unit Dimensions (mm)",
          "value": "1200×800×2940"
        },
        {
          "label": "Control Cabinet Dimensions (mm)",
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
      "isNew": false,
      "customized": ["Can be upgraded to Class 0.5% Accuracy Class", "Can be upgraded to Servo Motor Hydraulic System"]
    },
    {
      "id": "P022",
      "name": "Digital Display Universal Material Testing Machine",
      "suffixName": "100kN",
      "model": "WE-100B",
      "category": "Hydraulic Universal Testing Маchines",
      "thumbnail": "/assets/images/WE-1000B（出口）.png",
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
          "label": "Load Capacity (kN)",
          "value": "100"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "10～100"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1%"
        },
        {
          "label": "Tensile Vertical Test Space (mm)",
          "value": "480"
        },
        {
          "label": "Compression Vertical Test Space (mm)",
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
          "label": "Piston Stroke (mm)",
          "value": "120"
        },
        {
          "label": "Compression Platen dimension (mm)",
          "value": "Φ180(Upper) Φ180(Lower)"
        },
        {
          "label": "Horizontal Test Space (mm)",
          "value": "380"
        },
        {
          "label": "Piston Maximum Speed (mm/min)",
          "value": "100"
        },
        {
          "label": "Cross Head Maximum Speed (mm/min)",
          "value": "240"
        },
        {
          "label": "Power of Motors (kW)",
          "value": "1.3"
        },
        {
          "label": "Main Unit Dimensions (mm)",
          "value": "730×600×1750"
        },
        {
          "label": "Control Cabinet Dimensions (mm)",
          "value": "530×500×1270"
        },
        {
          "label": "Overall weight(kg)",
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
      "name": "Digital Display Universal Material Testing Machine",
      "suffixName": "300kN",
      "model": "WE-300B",
      "category": "Hydraulic Universal Testing Маchines",
      "thumbnail": "/assets/images/WE-1000B（出口）.png",
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
          "label": "Load Capacity (kN)",
          "value": "300"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "30～300"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1%"
        },
        {
          "label": "Tensile Vertical Test Space (mm)",
          "value": "540"
        },
        {
          "label": "Compression Vertical Test Space (mm)",
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
          "label": "Piston Stroke (mm)",
          "value": "180"
        },
        {
          "label": "Compression Platen dimension (mm)",
          "value": "Φ180(Upper) Φ180(Lower)"
        },
        {
          "label": "Horizontal Test Space (mm)",
          "value": "400"
        },
        {
          "label": "Piston Maximum Speed (mm/min)",
          "value": "100"
        },
        {
          "label": "Cross Head Maximum Speed (mm/min)",
          "value": "240"
        },
        {
          "label": "Power of Motors (kW)",
          "value": "1.3"
        },
        {
          "label": "Main Unit Dimensions (mm)",
          "value": "730×600×1840"
        },
        {
          "label": "Control Cabinet Dimensions (mm)",
          "value": "530×500×1270"
        },
        {
          "label": "Overall weight(kg)",
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
      "name": "Digital Display Universal Material Testing Machine",
      "suffixName": "600kN",
      "model": "WE-600B",
      "category": "Hydraulic Universal Testing Маchines",
      "thumbnail": "/assets/images/WE-1000B（出口）.png",
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
          "label": "Load Capacity (kN)",
          "value": "600"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "60～600"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1%"
        },
        {
          "label": "Tensile Vertical Test Space (mm)",
          "value": "690"
        },
        {
          "label": "Compression Vertical Test Space (mm)",
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
          "label": "Piston Stroke (mm)",
          "value": "180"
        },
        {
          "label": "Compression Platen dimension (mm)",
          "value": "Φ180(Upper) Φ180(Lower)"
        },
        {
          "label": "Horizontal Test Space (mm)",
          "value": "400"
        },
        {
          "label": "Piston Maximum Speed (mm/min)",
          "value": "100"
        },
        {
          "label": "Cross Head Maximum Speed (mm/min)",
          "value": "240"
        },
        {
          "label": "Power of Motors (kW)",
          "value": "1.8"
        },
        {
          "label": "Main Unit Dimensions (mm)",
          "value": "890×590×2070"
        },
        {
          "label": "Control Cabinet Dimensions (mm)",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P026",
      "name": "Digital Display Universal Material Testing Machine",
      "suffixName": "2000kN",
      "model": "WE-2000B",
      "category": "Hydraulic Universal Testing Маchines",
      "thumbnail": "/assets/images/WE-1000B（出口）.png",
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
          "label": "Load Capacity (kN)",
          "value": "2000"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "200～2000"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1%"
        },
        {
          "label": "Tensile Vertical Test Space (mm)",
          "value": "790"
        },
        {
          "label": "Compression Vertical Test Space (mm)",
          "value": "720"
        },
        {
          "label": "Flat specimen clamping thickness(mm)",
          "value": "0～40"
        },
        {
          "label": "Round specimen clamping diameter(mm)",
          "value": "20～40、40～60"
        },
        {
          "label": "Piston Stroke (mm)",
          "value": "250"
        },
        {
          "label": "Compression Platen dimension (mm)",
          "value": "Φ220(Upper) Φ230(Lower)"
        },
        {
          "label": "Horizontal Test Space (mm)",
          "value": "570"
        },
        {
          "label": "Piston Maximum Speed (mm/min)",
          "value": "100"
        },
        {
          "label": "Cross Head Maximum Speed (mm/min)",
          "value": "240"
        },
        {
          "label": "Power of Motors (kW)",
          "value": "1.8"
        },
        {
          "label": "Main Unit Dimensions (mm)",
          "value": "1200×800×2940"
        },
        {
          "label": "Control Cabinet Dimensions (mm)",
          "value": "530×500×1270"
        },
        {
          "label": "Overall weight(kg)",
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
      "name": "Electronic Universal Material Testing Machine",
      "suffixName": "100kN",
      "model": "WDW-100",
      "category": "Electromechanical Universal Testing Маchines",
      "thumbnail": "/assets/images/WDW-50.png",
      "description": "This product is suitable for testing and analyzing the mechanical properties of various metals, non-metals and composite materials, and can obtain test data such as maximum test force value, fracture force value, yield strength, upper and lower yield strength, tensile strength,  compressive strength, elongation at break, tensile modulus of elasticity and bending modulus of elasticity of test materials.",
      "features": [
        "Safety position and experimental position height arbitrary lock.",
        "Automatic protection when exceeding the maximum load,software limit and electronic limit double protection."
      ],
      "standards": ["ASTM E83", "BS 3846", "ISO 9513", "EN 10002-4"],
      "specifications": [
        {
          "label": "Load Capacity (kN)",
          "value": "100"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1% (can be customized to 0.5 on request)"
        },
        {
          "label": "Load Measurement Range",
          "value": "1% to 100% FS"
        },
        {
          "label": "Vertical Test Space (without jig)",
          "value": "800mm"
        },
        {
          "label": "Horizontal Test Space",
          "value": "400mm"
        },
        {
          "label": "Crosshead Speed Range",
          "value": "0.01～500mm/min"
        },
        {
          "label": "Position Control Resolution",
          "value": "0.025µm"
        },
        {
          "label": "Displacement Measurement Accuracy",
          "value": "Within ±0.5%"
        },
        {
          "label": "Deformation measurement range",
          "value": "0.2%～100%FS"
        },
        {
          "label": "Deformation Measurement Accuracy",
          "value": "Within ±0.5%"
        },
        {
          "label": "Testing Speed Range",
          "value": "0.5% ～ 100%FS"
        },
        {
          "label": "Testing Speed Accuracy",
          "value": "Within ±1% of the set value when the set value is <10%FS; Within ±0.1% of the set value when the set value is ≥10%FS"
        },
        {
          "label": "Main Unit Dimensions (mm)",
          "value": "1000×800×2200"
        },
        {
          "label": "Power supply",
          "value": "220V±10%, 2000W"
        },
        {
          "label": "Mainframe weight",
          "value": "About 760kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false,
      "customized": [
        "Customizable test space",
        "Extensometer can be installed for precise strain measurement",
        "Compatible with various load cells for different force ranges",
        "Easy-Interchangeable grips for different test"
      ]
    },
    {
      "id": "P028",
      "name": "Electronic Universal Material Testing Machine",
      "suffixName": "50kN",
      "model": "WDW-50",
      "category": "Electromechanical Universal Testing Маchines",
      "thumbnail": "/assets/images/WDW-50.png",
      "description": "This product is suitable for testing and analyzing the mechanical properties of various metals, non-metals and composite materials, and can obtain test data such as maximum test force value, fracture force value, yield strength, upper and lower yield  strength, tensile  strength,  compressive strength, elongation at break, tensile modulus of elasticity and bending modulus of elasticity of test materials.",
      "features": [
        "Safety position and experimental position height arbitrary lock.",
        "Automatic protection when exceeding the maximum load, software limit and electronic limit double protection."
      ],
      "standards": ["ASTM E83", "BS 3846", "ISO 9513", "EN 10002-4"],
      "specifications": [
        {
          "label": "Load Capacity (kN)",
          "value": "50"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1% (can be customized to 0.5 on request)"
        },
        {
          "label": "Load Measurement Range",
          "value": "1% to 100% FS"
        },
        {
          "label": "Vertical Test Space (without jig)",
          "value": "800mm"
        },
        {
          "label": "Horizontal Test Space",
          "value": "400mm"
        },
        {
          "label": "Crosshead Speed Range",
          "value": "0.01～500mm/min"
        },
        {
          "label": "Position Control Resolution",
          "value": "0.025µm"
        },
        {
          "label": "Displacement Measurement Accuracy",
          "value": "Within ±0.5%"
        },
        {
          "label": "Deformation measurement range",
          "value": "0.2%～100%FS"
        },
        {
          "label": "Deformation Measurement Accuracy",
          "value": "Within ±0.5%"
        },
        {
          "label": "Testing Speed Range",
          "value": "0.5% ～ 100%FS"
        },
        {
          "label": "Testing Speed Accuracy",
          "value": "Within ±1% of the set value when the set value is <10%FS; Within ±0.1% of the set value when the set value is ≥10%FS"
        },

        {
          "label": "Main Unit Dimensions (mm)",
          "value": "900×500×1900"
        },
        {
          "label": "Power supply",
          "value": "220V±10%, 750W"
        },
        {
          "label": "Mainframe weight About",
          "value": "230kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false,
      "customized": [
        "Customizable test space",
        "Extensometer can be installed for precise strain measurement",
        "Compatible with various load cells for different force ranges",
        "Easy-Interchangeable grips for different test"
      ]
    },
    {
      "id": "P029",
      "name": "Electronic Universal Material Testing Machine",
      "suffixName": "10kN",
      "model": "WDW-10",
      "category": "Electromechanical Universal Testing Маchines",
      "thumbnail": "/assets/images/WDW-20.png",
      "description": "This product is suitable for testing and analyzing the mechanical properties of various metals, non-metals and composite materials, and can obtain test data such as maximum test force value, fracture force value, yield strength, upper and lower yield strength, tensile strength,  compressive strength, elongation at break, tensile modulus of elasticity and bending modulus of elasticity of test materials.",
      "features": [
        "Safety position and experimental position height arbitrary lock.",
        "Automatic protection when exceeding the maximum load, software limit and electronic limit double protection."
      ],
      "standards": ["ASTM E83", "BS 3846", "ISO 9513", "EN 10002-4"],
      "specifications": [
        {
          "label": "Load Capacity (kN)",
          "value": "10"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1% (can be customized to 0.5 on request)"
        },
        {
          "label": "Load Measurement Range",
          "value": "1% to 100% FS"
        },
        {
          "label": "Vertical Test Space (without jig)",
          "value": "800mm"
        },
        {
          "label": "Horizontal Test Space",
          "value": "400mm"
        },
        {
          "label": "Crosshead Speed Range",
          "value": "0.01～500mm/min"
        },
        {
          "label": "Position Control Resolution",
          "value": "0.025µm"
        },
        {
          "label": "Displacement Measurement Accuracy",
          "value": "Within ±0.5%"
        },
        {
          "label": "Deformation measurement range",
          "value": "0.2%～100%FS"
        },
        {
          "label": "Deformation Measurement Accuracy",
          "value": "Within ±0.5%"
        }, 
        {
          "label": "Testing Speed Range",
          "value": "0.5% ～ 100%FS"
        },
        {
          "label": "Testing Speed Accuracy",
          "value": "Within ±1% of the set value when the set value is <10%FS; Within ±0.1% of the set value when the set value is ≥10%FS"
        },

        {
          "label": "Main Unit Dimensions (mm)",
          "value": "800×450×1600"
        },
        {
          "label": "Power supply",
          "value": "220V±10%, 400W"
        },
        {
          "label": "Mainframe weight About",
          "value": "190kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false,
      "customized": [
        "Customizable test space",
        "Extensometer can be installed for precise strain measurement",
        "Compatible with various load cells for different force ranges",
        "Easy-Interchangeable grips for different test"
      ]
    },
    {
      "id": "P030",
      "name": "Electronic Universal Material Testing Machine",
      "suffixName": "20kN",
      "model": "WDW-20",
      "category": "Electromechanical Universal Testing Маchines",
      "thumbnail": "/assets/images/WDW-20.png",
      "description": "This product is suitable for testing and analyzing the mechanical properties of various metals, non-metals and composite materials, and can obtain test data such as maximum test force value, fracture force value, yield strength, upper and lower yield strength, tensile strength,  compressive strength, elongation at break, tensile modulus of elasticity and bending modulus of elasticity of test materials.",
      "features": [
        "Safety position and experimental position height arbitrary lock.",
        "Automatic protection when exceeding the maximum load, software limit and electronic limit double protection."
      ],
      "standards": ["ASTM E83", "BS 3846", "ISO 9513", "EN 10002-4"],
      "specifications": [
        {
          "label": "Load Capacity (kN)",
          "value": "20"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1% (can be customized to 0.5 on request)"
        },
        {
          "label": "Load Measurement Range",
          "value": "1% to 100% FS"
        },
        {
          "label": "Vertical Test Space (without jig)",
          "value": "800mm"
        },
        {
          "label": "Horizontal Test Space",
          "value": "400mm"
        },
        {
          "label": "Crosshead Speed Range",
          "value": "0.01～500mm/min"
        },
        {
          "label": "Position Control Resolution",
          "value": "0.025µm"
        },
        {
          "label": "Displacement Measurement Accuracy",
          "value": "Within ±0.5%"
        },
        {
          "label": "Deformation measurement range",
          "value": "0.2%～100%FS"
        },
        {
          "label": "Deformation Measurement Accuracy",
          "value": "Within ±0.5%"
        },
        {
          "label": "Testing Speed Range",
          "value": "0.5% ～ 100%FS"
        },
        {
          "label": "Testing Speed Accuracy",
          "value": "Within ±1% of the set value when the set value is <10%FS; Within ±0.1% of the set value when the set value is ≥10%FS"
        },

        {
          "label": "Main Unit Dimensions (mm)",
          "value": "800×450×1600"
        },
        {
          "label": "Power supply",
          "value": "220V±10%, 400W"
        },
        {
          "label": "Mainframe weight About",
          "value": "190kg"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false,
      "customized": [
        "Customizable test space",
        "Extensometer can be installed for precise strain measurement",
        "Compatible with various load cells for different force ranges",
        "Easy-Interchangeable grips for different test"
      ]
    },
    {
      "id": "P031",
      "name": "Electronic Universal Material Testing Machine",
      "suffixName": "5kN",
      "model": "WDW-5",
      "category": "Electromechanical Universal Testing Маchines",
      "thumbnail": "/assets/images/WDW-5.png",
      "description": "This product is suitable for testing and analyzing the mechanical properties of various metals, non-metals and composite materials, and can obtain test data such as maximum test force value, fracture force value, yield strength, upper and lower yield strength, tensile strength,  compressive strength, elongation at break, tensile modulus of elasticity and bending modulus of elasticity of test materials.",
      "features": [
        "Safety position and experimental position height arbitrary lock.",
        "Automatic protection when exceeding the maximum load, software limit and electronic limit double protection.",
        "Microcomputer control, real-time display of  graphs, automatic generation of reports."
      ],
      "standards": ["ASTM E83", "BS 3846", "ISO 9513", "EN 10002-4"],
      "specifications": [
        {
          "label": "Maximum load",
          "value": "5KN"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1% (can be customized to 0.5 on request)"
        },
        {
          "label": "Load Measurement Range",
          "value": "1% to 100% FS"
        },
        {
          "label": "Vertical Test Space (without jig)",
          "value": "800mm"
        },
        {
          "label": "Horizontal Test Space",
          "value": "100mm"
        },
        {
          "label": "Crosshead Speed Range",
          "value": "0.01～500mm/min"
        },
        {
          "label": "Position Control Resolution",
          "value": "0.025µm"
        },
        {
          "label": "Displacement Measurement Accuracy",
          "value": "Within ±1%"
        },
        {
          "label": "Deformation measurement range",
          "value": "0.2%～100%FS"
        },
        {
          "label": "Deformation Measurement Accuracy",
          "value": "±1% of the displayed value"
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
      "isNew": false,
      "customized": [
        "Customizable test space",
        "Extensometer can be installed for precise strain measurement",
        "Compatible with various load cells for different force ranges",
        "Easy-Interchangeable grips for different test"
      ]
    },
    {
      "id": "P035",
      "name": "Servo-controlled Compression Testing Machine",
      "suffixName": "2000kN EN Model",
      "model": "YAW-2000H",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/YAW-2000H.png",
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
          "label": "Effective Load Measurement Range (kN)",
          "value": "200～2000"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1%"
        },
        {
          "label": "Vertical Test Space (mm)",
          "value": "320"
        },
        {
          "label": "Compression plate size(mm)",
          "value": "Φ300(Upper) Φ300(Lower)"
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
          "label": "Hydraulic Pump Rated Pressure (MPa)",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P036",
      "name": "Servo-controlled Compression Testing Machine",
      "suffixName": "2000kN EN Model",
      "model": "YAW-2000S",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/YAW-2000S.png",
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
          "label": "Load Capacity (kN)",
          "value": "2000"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "100~2000"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±0.5%"
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
          "label": "Vertical Test Space (mm)",
          "value": "330"
        },
        {
          "label": "Upper And Lower Platen Dimension (mm)",
          "value": "Φ280(Upper) Φ320(Lower)"
        },
        {
          "label": "Piston Stroke (mm)",
          "value": "120"
        },
        {
          "label": "Piston diameter (mm)",
          "value": "Φ250"
        },
        {
          "label": "Hydraulic Pump Rated Pressure (MPa)",
          "value": "40"
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P037",
      "name": "Servo-controlled Compression Testing Machine",
      "suffixName": "3000kN EN Model",
      "model": "YAW-3000S",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/YAW-3000S.png",
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
          "label": "Load Capacity (kN)",
          "value": "3000"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "150~3000"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±0.5%"
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
          "label": "Vertical Test Space (mm)",
          "value": "330mm"
        },
        {
          "label": "Upper And Lower Platen Dimension (mm)",
          "value": "Φ280(Upper) Φ320(Lower)"
        },
        {
          "label": "Piston Stroke (mm)",
          "value": "120"
        },
        {
          "label": "Piston diameter (mm)",
          "value": "Φ310"
        },
        {
          "label": "Hydraulic Pump Rated Pressure (MPa)",
          "value": "40"
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P038",
      "name": "Servo-controlled Compression Testing Machine",
      "suffixName": "2000kN",
      "model": "TSY-2000A",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/TSY-2000A.png",
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
          "label": "Load Capacity (kN)",
          "value": "2000"
        },
        {
          "label": "Loading rate",
          "value": "0.3～1.0MPa,1.0 or above can be entered manually"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "200～2000"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1%"
        },
        {
          "label": "Vertical Test Space (mm)",
          "value": "320mm"
        },
        {
          "label": "Upper And Lower Platen Dimension (mm)",
          "value": "Φ260(Upper) Φ260(Lower)"
        },
        {
          "label": "Piston stroke",
          "value": "50mm"
        },
        {
          "label": "Piston diameter (mm)",
          "value": "Φ250"
        },
        {
          "label": "Hydraulic Pump Rated Pressure (MPa)",
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
          "label": "Main Unit Dimensions (mm)",
          "value": "580×500×1400"
        },
        {
          "label": "Control Cabinet Dimensions (mm)",
          "value": "560×550×1310"
        },
        {
          "label": "Weight",
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
      "name": "Servo-controlled Compression Testing Machine",
      "suffixName": "3000kN",
      "model": "TSY-3000A",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/TSY-3000A.png",
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
          "label": "Load Capacity (kN)",
          "value": "3000"
        },
        {
          "label": "Loading rate",
          "value": "0.3～1.0MPa,1.0 or above can be entered manually"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "300～3000"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1%"
        },
        {
          "label": "Vertical Test Space (mm)",
          "value": "320mm"
        },
        {
          "label": "Upper And Lower Platen Dimension (mm)",
          "value": "Φ320(Upper) Φ320(Lower)"
        },
        {
          "label": "Piston stroke",
          "value": "50mm"
        },
        {
          "label": "Piston diameter (mm)",
          "value": "Φ310"
        },
        {
          "label": "Hydraulic Pump Rated Pressure (MPa)",
          "value": "40"
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
          "label": "Main Unit Dimensions (mm)",
          "value": "550×650×1750"
        },
        {
          "label": "Control Cabinet Dimensions (mm)",
          "value": "560×550×1310"
        },
        {
          "label": "Weight",
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
      "name": "Digital Display Compression Testing Machine",
      "suffixName": "2000kN",
      "model": "TSY-2000B",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/TSY-2000B.png",
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
          "label": "Load Capacity (kN)",
          "value": "2000"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "200～2000"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1%"
        },
        {
          "label": "Vertical Test Space (mm)",
          "value": "320"
        },
        {
          "label": "Upper And Lower Platen Dimension (mm)",
          "value": "Φ260(Upper) Φ260(Lower)"
        },
        {
          "label": "Piston stroke",
          "value": "50mm"
        },
        {
          "label": "Piston diameter (mm)",
          "value": "Φ250"
        },
        {
          "label": "Hydraulic Pump Rated Pressure (MPa)",
          "value": "40"
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
          "label": "Main Unit Dimensions (mm)",
          "value": "580×500×1400"
        },
        {
          "label": "Control Cabinet Dimensions (mm)",
          "value": "510×540×1470"
        },
        {
          "label": "Weight",
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
      "name": "Digital Display Compression Testing Machine",
      "suffixName": "3000kN",
      "model": "TSY-3000B",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/TSY-3000B.png",
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
          "label": "Load Capacity (kN)",
          "value": "3000"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "300～3000"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1%"
        },
        {
          "label": "Vertical Test Space (mm)",
          "value": "330"
        },
        {
          "label": "Upper And Lower Platen Dimension (mm)",
          "value": "Φ320(Upper) Φ320(Lower)"
        },
        {
          "label": "Piston stroke",
          "value": "50mm"
        },
        {
          "label": "Piston diameter (mm)",
          "value": "Φ310"
        },
        {
          "label": "Hydraulic Pump Rated Pressure (MPa)",
          "value": "40"
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
          "label": "Main Unit Dimensions (mm)",
          "value": "550×560×1750"
        },
        {
          "label": "Control Cabinet Dimensions (mm)",
          "value": "510×540×1470"
        },
        {
          "label": "Weight",
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
      "name": "Digital Display Compression Testing Machine",
      "suffixName": "2000kN",
      "model": "TSY-2000",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/TSY-2000.png",
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
          "label": "Load Capacity (kN)",
          "value": "2000"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "200～2000"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1%"
        },
        {
          "label": "Piston Stroke (mm)",
          "value": "50"
        },
        {
          "label": "Piston diameter (mm)",
          "value": "Φ250"
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
          "label": "Upper And Lower Platen Dimension (mm)",
          "value": "Φ260(Upper) Φ260(Lower)"
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P043",
      "name": "Servo-controlled Cement Flexural And Compressive Testing Machine",
      "suffixName": "",
      "model": "YAW-300.10S",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/YAW-300.10S.png",
      "description": "YAW-300·10S Servo-controlled Cement Flexural And Compressive Testing Machine is a new generation of servo press independently developed and produced by Zhejiang Luda. With strong technology and production capacity, our company was honored to be invited to participate in the preparation of new standards for all-in-one machines. This  testing  machine  is an essential testing instrument for building materials,construction engineering, quality supervision, metrology testing, scientific research institutions and other units.",
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
          "label": "Compressive Load Capacity (kN)",
          "value": "300"
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
          "label": "Compression plate diameter",
          "value": "Φ120mm"
        },
        {
          "label": "Piston Stroke (mm)",
          "value": "90"
        },
        {
          "label": "Flexural strength test",
          "value": ""
        },
        {
          "label": "Flexural Load Capacity (kN)",
          "value": "10"
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
          "label": "Piston Stroke (mm)",
          "value": "70"
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
          "label": "The relative resolution of the force value display device of the test machine",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P044",
      "name": "Servo-controlled Compression Testing Machine",
      "suffixName": "300kN",
      "model": "YAW-300S",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/YAW-300S.png",
      "description": "YAW-300S Servo-controlled Cement Compressive Testing Machine is a new generation of servo press independently developed and produced by Zhejiang Luda. With strong technology and production capacity, our company was honored to be invited to participate in the preparation of new standards for all-in-one machines. This  testing  machine is an essential testing instrument for building materials,construction engineering, quality supervision, metrology testing, scientific research institutions and other units.",
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
          "label": "Load Capacity (kN)",
          "value": "300"
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
          "label": "Compression plate diameter",
          "value": "Φ120mm"
        },
        {
          "label": "Piston Stroke (mm)",
          "value": "90"
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
          "label": "The  relative  resolution of the force value display device of the test machine",
          "value": "0.5%"
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P045",
      "name": "Servo-controlled Cement Flexural Compression Testing Machine",
      "suffixName": "",
      "model": "YZH-300.10",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/YZH-300.10.png",
      "description": "YZH-300·10 Servo-controlled Cement Flexural And Compressive Testing Machine is a pressure testing machine that integrates cement flexural and compressive resistance jointly  developed  by  Zhejiang  Luda  Machinery  Instrument  Co.,  Ltd.  and  Zhejiang University of Technology\nThis product adopts anti-bending and anti-compression double oil cylinders to realize the test of cement compressive strength and cement flexural strength respectively.",
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
          "label": "Compressive Load Capacity (kN)",
          "value": "300"
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
          "label": "Compression plate diameter",
          "value": "Φ120mm"
        },
        {
          "label": "Piston Stroke (mm)",
          "value": "90"
        },
        {
          "label": "Flexural strength test",
          "value": ""
        },
        {
          "label": "Flexural Load Capacity (kN)",
          "value": "10"
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
          "label": "Piston Stroke (mm)",
          "value": "70"
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
          "label": "The relative resolution of the force value display device of the test machine",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P046",
      "name": "Servo-controlled Compression Testing Machine",
      "suffixName": "300kN",
      "model": "YAW-300",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/YAW-300.png",
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
          "label": "Load Capacity (kN)",
          "value": "300"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "30~300"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1%"
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
          "label": "Compression plate diameter",
          "value": "Φ120mm"
        },
        {
          "label": "Piston Stroke (mm)",
          "value": "90"
        },
        {
          "label": "Piston diameter (mm)",
          "value": "Φ140"
        },
        {
          "label": "Hydraulic Pump Rated Pressure (MPa)",
          "value": "31.5"
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P047",
      "name": "Digital Display Compression Testing Machine",
      "suffixName": "300kN",
      "model": "TSY-300",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/TSY-300.png",
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
          "label": "Load Capacity (kN)",
          "value": "300"
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
          "label": "Compression plate diameter",
          "value": "Φ140mm"
        },
        {
          "label": "Vertical Test Space (mm)",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P049",
      "name": "Servo-controlled Manhole Cover Special Compression Testing Machine",
      "suffixName": "1000kN",
      "model": "TSY-1000S",
      "category": "Large-scale Special Testing Machine",
      "thumbnail": "/assets/images/TSY-1000S.png",
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
          "label": "Load Capacity (kN)",
          "value": "1000"
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
          "label": "Effective Load Measurement Range (kN)",
          "value": "100～1000"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±0.5%"
        },
        {
          "label": "Piston Stroke (mm)",
          "value": "250"
        },
        {
          "label": "Piston diameter (mm)",
          "value": "Φ210"
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
          "label": "Control Cabinet Dimensions (mm)",
          "value": "1200×700×900"
        },
        {
          "label": "Weight",
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
      "name": "Static Load Sleeper Testing Machine",
      "suffixName": "500kN",
      "model": "TSY-500",
      "category": "Large-scale Special Testing Machine",
      "thumbnail": "/assets/images/TSY-500轨枕.png",
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
          "label": "Load Measurement Accuracy",
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
          "label": "Piston Stroke (mm)",
          "value": "250"
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
          "label": "Vertical Test space",
          "value": "Distance between Upper and Lower Supports :430 mm"
        },
        {
          "label": "Horizontal Test space",
          "value": "Distance between Four Columns: 820, 900mm"
        },
        {
          "label": "Mainframe Dimensions",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P051",
      "name": "Servo-controlled Strand Tensile Relaxation Testing Machine",
      "suffixName": "300kN",
      "model": "LDCJ-300",
      "category": "Large-scale Special Testing Machine",
      "thumbnail": "/assets/images/LDCJ-300.png",
      "description": "This product is suitable for  testing equipment for measuring the relaxation properties of metal   materials at room temperature.",
      "features": [
        "The machine is of horizontal structure with moderate height and easy operation. The load-bearing pedestal is a welded structure with high rigidity and light weight;",
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
          "label": "Load Capacity (kN)",
          "value": "300"
        },
        {
          "label": "Effective Load Measurement Range (kN)",
          "value": "30～300"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1%"
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P052",
      "name": "Metal Pipe Bending Test Machine",
      "suffixName": "",
      "model": "LDGW-60C",
      "category": "Large-scale Special Testing Machine",
      "thumbnail": "/assets/images/LDGW-60C.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P053",
      "name": "Metal Bending and Rebending Testing Machine",
      "suffixName": "For Metal Rebar, Sheets and Pipe",
      "model": "LDWQ-40D",
      "category": "Large-scale Special Testing Machine",
      "thumbnail": "/assets/images/LDWQ-40D.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P055",
      "name": "Servo-controlled Bolt Torque Tension Testing Machine",
      "suffixName": "",
      "model": "LD-JZ500D",
      "category": "Large-scale Special Testing Machine",
      "thumbnail": "/assets/images/LD-JZ500D.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P057",
      "name": "Asphalt Content Analyzer",
      "suffixName": "combustion method",
      "model": "LDRS-6",
      "category": "Asphalt Testing",
      "thumbnail": "/assets/images/LDRS-6.png",
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
          "label": "Mainframe working voltage",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P058",
      "name": "Asphalt Slab Roller Compactor",
      "suffixName": "",
      "model": "LDCX-1",
      "category": "Asphalt Testing",
      "thumbnail": "/assets/images/LDCX-1.png",
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
          "value": "300×300×(30~100)mm (Can be customized upon request)"
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P059",
      "name": "Hot Mix Asphalt Wheel Tracker",
      "suffixName": "Single Wheel",
      "model": "LDCZ-5",
      "category": "Asphalt Testing",
      "thumbnail": "/assets/images/LDCZ-5.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P061",
      "name": "Bitumen Ductilometer",
      "suffixName": "",
      "model": "STYD-3",
      "category": "Bitumen (Asphalt Binder) Testing",
      "thumbnail": "/assets/images/STYD-3.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P062",
      "name": "Asphalt Marshall Stability Tester",
      "suffixName": "30kN for ø101.6mm specimens",
      "model": "LD-5B",
      "category": "Asphalt Testing",
      "thumbnail": "/assets/images/LD-5B.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P063",
      "name": "Laboratory Planetary Mixers",
      "suffixName": "20L",
      "model": "LDHB-20",
      "category": "Asphalt Testing",
      "thumbnail": "/assets/images/LDHB-20.png",
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
      "name": "Asphalt Wax Content Tester",
      "suffixName": "",
      "model": "LDL-2",
      "category": "Bitumen (Asphalt Binder) Testing",
      "thumbnail": "/assets/images/LDL-2.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P065",
      "name": "Rotating Shelf Thin Film Oven (TFOT)",
      "suffixName": "",
      "model": "82 Type",
      "category": "Bitumen (Asphalt Binder) Testing",
      "thumbnail": "/assets/images/82 Type.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P066",
      "name": "Rolling Thin-Film Oven (RTFOT)",
      "suffixName": "",
      "model": "85 Type",
      "category": "Bitumen (Asphalt Binder) Testing",
      "thumbnail": "/assets/images/85 Type.png",
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
          "label": "Sample bottle size (opening diameter × bottle diameter × overal height)",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P067",
      "name": "Marshall Overflow Water Bath",
      "suffixName": "ambient ~ 60℃",
      "model": "CF-C",
      "category": "Asphalt Testing",
      "thumbnail": "/assets/images/CF-C.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P068",
      "name": "Water Bath",
      "suffixName": "ambient ~ 100℃",
      "model": "TC-20",
      "category": "Bitumen (Asphalt Binder) Testing",
      "thumbnail": "/assets/images/TC-20恒温.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P069",
      "name": "Low Temperature Water Bath",
      "suffixName": "50L -6℃~60℃",
      "model": "TC-20",
      "category": "Bitumen (Asphalt Binder) Testing",
      "thumbnail": "/assets/images/TC-20低温.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P070",
      "name": "Low Temperature Water Bath",
      "suffixName": "15L -6℃~60℃",
      "model": "THD-0506",
      "category": "Bitumen (Asphalt Binder) Testing",
      "thumbnail": "/assets/images/THD-0506.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P071",
      "name": "Automatic Softening Point Tester",
      "suffixName": "Ring and Ball Tester",
      "model": "LD-2000",
      "category": "Bitumen (Asphalt Binder) Testing",
      "thumbnail": "/assets/images/LD-2000.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P072",
      "name": "Automatic Penetrometer",
      "suffixName": "",
      "model": "IV-2000",
      "category": "Bitumen (Asphalt Binder) Testing",
      "thumbnail": "/assets/images/IV-2000.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P120",
      "name": "Coarse-grained Soil Vertical Seepage Deformation Meter (slope type)",
      "suffixName": "",
      "model": "LDSL-III",
      "category": "Geotechnical & Aggregate Testing",
      "thumbnail": "/assets/images/LDSL-III.png",
      "description": "The purpose of this test is to determine the permeability coefficient of the sample when the seepage water passes through the coarse-grained soil, the critical slope of the fine particles gradually lost with the seepage (piping) and the failure slope (flowing soil) when the soil body floats as a whole.\nThis test is applicable to disturbed coarse-grained soil samples and undisturbed coarse-grained soil samples.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Test tube specification",
          "value": "Φ300×600mm"
        },
        {
          "label": "Test tube height",
          "value": "600mm"
        },
        {
          "label": "Gauge height",
          "value": "3000mm"
        },
        {
          "label": "Pressure measuring hole spacing ",
          "value": "250mm"
        },
        {
          "label": "Loading equipment",
          "value": "Leverage pressure"
        },
        {
          "label": "Water supply bucket",
          "value": "140×140×140mm"
        },
        {
          "label": "Water storage bucket",
          "value": "200×400×450mm"
        },
        {
          "label": "Voltage",
          "value": "AC 220V"
        },
        {
          "label": "Dimension",
          "value": "1400×600×1900mm"
        },
        {
          "label": "Weight",
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
      "name": "Coarse-grained Soil Constant Head Permeameter",
      "suffixName": "",
      "model": "LDST-300",
      "category": "Geotechnical & Aggregate Testing",
      "thumbnail": "/assets/images/LDST-300.png",
      "description": "LDST-300 Coarse-grained Soil Constant Head Permeameter is used to measure the permeability coefficient of coarse-grained soil and graded crushed stone with the maximum particle size not greater than 75mm.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Water supply tank volume",
          "value": "80L"
        },
        {
          "label": "Inner diameter of metal cylinder ",
          "value": "300mm"
        },
        {
          "label": "Metal cylinder height",
          "value": "500mm"
        },
        {
          "label": "Metal cylinder wall thickness",
          "value": "10mm"
        },
        {
          "label": "Number of pressure measuring tubes",
          "value": "5 PCS"
        },
        {
          "label": "Inner diameter of pressure measuring tube",
          "value": "6mm"
        },
        {
          "label": "Pressure measuring tube scale division value",
          "value": "1mm"
        },
        {
          "label": "Pressure measuring hole spacing ",
          "value": "50mm"
        },
        {
          "label": "Seepage hole diameter",
          "value": "16mm"
        },
        {
          "label": "Inner diameter of overflow pipe",
          "value": "16mm"
        },
        {
          "label": "Permeable plate aperture",
          "value": "3.5mm"
        },
        {
          "label": "Weight",
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
      "name": "Vibration Compaction Molding Machine",
      "suffixName": "",
      "model": "LD-08",
      "category": "Geotechnical & Aggregate Testing",
      "thumbnail": "/assets/images/LD-08.png",
      "description": "This product is used to manufacture various test pieces for inorganic binder stabilized pellets, including cylindrical test pieces for testing unconfined compression, strength, indirect tensile strength and compressive modulus of resilience, and for testing Beam specimens for temperature shrinkage coefficient, dry shrinkage coefficient, flexural strength and flexural modulus of resilience tests.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Vibration motor power",
          "value": "4kW"
        },
        {
          "label": "Lifting motor power",
          "value": "0.75kW"
        },
        {
          "label": "Static pressure",
          "value": "1900~3100N (recommended to 2500)"
        },
        {
          "label": "Exciting force ",
          "value": "Adjust from 6800 to 11000N"
        },
        {
          "label": "Vibration frequency",
          "value": "28~30Hz"
        },
        {
          "label": "Forming trial mold",
          "value": "3 PCS"
        },
        {
          "label": "Voltage",
          "value": "AC380V±10%"
        },
        {
          "label": "Dimensions",
          "value": "1820×950×2170mm"
        },
        {
          "label": "Controller size",
          "value": "550×345×940mm"
        },
        {
          "label": "Weight",
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
      "name": "Concrete/Rock Specimen Grinding Machine",
      "suffixName": "",
      "model": "SHM-200",
      "category": "Geotechnical & Aggregate Testing",
      "thumbnail": "/assets/images/SHM-200.png",
      "description": "SHM-200 double-end grinding stone machine is the main equipment for making standard samples of non-metallic solids such as rock ore and concrete for mechanical testing. This machine works together with the coring machine and stone cutting machine produced by our factory to process the high-precision cube or cylinder test samples you need. This product is suitable for colleges and universities, water conservancy and hydropower, address minerals, transportation, construction and other  departments.\nThis stone grinding machine is composed of machine base, workbench, grinding power head, variable speed transmission system, electric control device and other parts. The whole machine is easy to operate and the  automatic feeding performance is stable.",
      "features": [],
      "standards": [
        "ASTM D4543",
        "EN 12390-2"
      ],
      "specifications": [
        {
          "label": "Workbench motor power",
          "value": "0.55kW"
        },
        {
          "label": "Speed",
          "value": "1450rpm"
        },
        {
          "label": "Grinding power head power",
          "value": "1.1kW,2units"
        },
        {
          "label": "Speed",
          "value": "2750rpm"
        },
        {
          "label": "Grinding wheel diameter",
          "value": "Φ200mm"
        },
        {
          "label": "Grindable sample specifications(normally factory-equipped with a fixture for grinding 50-150mm)",
          "value": "a. Block 50×50×50~150×150×150mm; b. Cylinder 50~150mm",
        },
        {
          "label": "Specimen precision",
          "value": "a. Flatness Tolerance±0.05mm within 50mm; b. Smoothness (according to machining roughness standard) Ra3.2",
        },
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false,
      "customized": []
    },
    {
      "id": "P124",
      "name": "Automatic Rock, Concrete and Masonry Saw",
      "suffixName": "",
      "model": "DQ-1",
      "category": "Geotechnical & Aggregate Testing",
      "thumbnail": "/assets/images/DQ-1.png",
      "description": "This equipment is widely used in petroleum, geology, metallurgy, coal, exploration and cutting of refractory materials. This concrete cutting  machine is beautiful in appearance, compact in structure, high in automation, fully sealed, low in noise, and easy to use and operate. Over the past few years, it has extensively absorbed user opinions and met various technical indicators to make it stand out as a new type of technical equipment.",
      "features": [],
      "standards": [
        "ASTM D4543"
      ],
      "specifications": [
        {
          "label": "Cutting range",
          "value": "DQ-1 double knives (blade diameter 500mm) can cut cylindrical cores with a diameter of 18mm~200mm, and original rock samples of 180mm×180mm×350mm. For refractory materials such as sandstone,high-magnesia bricks, and corundum bricks, the cutting hardness is below grade 9.The distance between the two blades is adjustable, respectively 25, 50, 75, 100, 125mm.",
        },
        {
          "label": "The saw blade of the automatic dual-knife rock core sample dual-purpose machine",
          "value": "Inner diameter 5cm, Outer diameter:50cm"
        },
        {
          "label": "JRg600 diamond ",
          "value": "Φ600×5×50mm"
        },
        {
          "label": "A set of attachments",
          "value": "2cm, 3cm, 5cm each"
        },
        {
          "label": "Cutting line speed",
          "value": "40mm/s"
        },
        {
          "label": "Main motor power",
          "value": "4kW, 1420 rpm"
        },
        {
          "label": "Longitudinal motor power ",
          "value": "0.75kW"
        },
        {
          "label": "Dimensions",
          "value": "1500×830×1350mm"
        },
        {
          "label": "JRg60Q diamond cutter ",
          "value": "Φ500×4.5×50mm"
        },
        {
          "label": "Weight",
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
      "name": "Multifunctional Electric Compaction Instrument",
      "suffixName": "",
      "model": "JZ-2D",
      "category": "Geotechnical & Aggregate Testing",
      "thumbnail": "/assets/images/JZ-2D（部标）.png",
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
          "label": "Hammer weight",
          "value": "Heavy compaction 4.5kg, Light compaction: 2.5kg"
        },
        {
          "label": "Hammer down high",
          "value": "Heavy compaction 457mm,Light compaction: 305mm"
        },
        {
          "label": "Hammer face diameter",
          "value": "Φ50mm"
        },
        {
          "label": "Test tube specification",
          "value": "either Φ152×Φ100 or Φ152×Φ102"
        },
        {
          "label": "Hammer speed",
          "value": "30times/min"
        },
        {
          "label": "Set the number of hammering",
          "value": "Between 0~99 times"
        },
        {
          "label": "Motor parameters",
          "value": "1440r/min"
        },
        {
          "label": "Motor Power",
          "value": "250W"
        },
        {
          "label": "Voltage",
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
      "name": "Multifunctional Hydraulic Demoulding Machine",
      "suffixName": "",
      "model": "DL-200",
      "category": "Geotechnical & Aggregate Testing",
      "thumbnail": "/assets/images/DL-200.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P127",
      "name": "Multifunctional Hydraulic Demoulding Machine",
      "suffixName": "",
      "model": "DL-300",
      "category": "Geotechnical & Aggregate Testing",
      "thumbnail": "/assets/images/DL-300.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P128",
      "name": "Triple Motion Sieve Shaker",
      "suffixName": "",
      "model": "ZBSX-92A",
      "category": "Geotechnical & Aggregate Testing",
      "thumbnail": "/assets/images/ZBSX-92A.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P129",
      "name": "Digital Display Combined Soil Liquid-plastic Limit Tester",
      "suffixName": "",
      "model": "LG-100D",
      "category": "Geotechnical & Aggregate Testing",
      "thumbnail": "/assets/images/LG-100D.png",
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
          "value": "100/76g (Can be customized upon request)"
        },
        {
          "label": "Cone angle",
          "value": "30±2° (Can be customized upon request)"
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P130",
      "name": "Sand Equivalent Tester",
      "suffixName": "",
      "model": "SD-II",
      "category": "Geotechnical & Aggregate Testing",
      "thumbnail": "/assets/images/SD-II（双管）.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P131",
      "name": "Mortar Mixer",
      "suffixName": "",
      "model": "UJZ-15",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/UJZ-15.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P132",
      "name": "Mortar Permeamete",
      "suffixName": "",
      "model": "SS-1.5",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/SS-1.5.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P133",
      "name": "Temperature And Humidity Climate Chambers",
      "suffixName": "80L",
      "model": "LDGD-80",
      "category": "General Equipment",
      "thumbnail": "/assets/images/LDGD-80.png",
      "description": "Programmable constant temperature and humidity test chamber, also known as simulated environmental test chamber and high and low temperature alternating humidity and heat test chamber. This equipment is simulated high and low temperature and hot and humid environment, widely used to determine the adaptability of electric and electronic products to high and low temperature and hot and humid environment (especially the changes in the electrical and mechanical properties of the product), can also be used to check the ability of the specimen to withstand certain corrosion.",
      "features": [
        "he components selected for this product are highly reliable and of high quality to ensure the reliability, stability and accuracy of the product performance."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Temperature range",
          "value": "-40°C~+150°C"
        },
        {
          "label": "Humidity range",
          "value": "20%~98%RH"
        },
        {
          "label": "Temperature and humidity control accuracy",
          "value": "±1.0°C; ±2%RH"
        },
        {
          "label": "Inner box size(W×D×H)",
          "value": "400×400×550mm"
        },
        {
          "label": "Power supply",
          "value": "220V"
        },
        {
          "label": "Temperature and humidity sub-surface uniformity",
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
      "name": "Drying and Heating Chamber with Forced Convection",
      "suffixName": "70L",
      "model": "101-1A",
      "category": "General Equipment",
      "thumbnail": "/assets/images/101-1A.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P136",
      "name": "Drying and Heating Chamber with Forced Convection",
      "suffixName": "135L",
      "model": "101-2A",
      "category": "General Equipment",
      "thumbnail": "/assets/images/101-2A.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P137",
      "name": "Drying and Heating Chamber with Forced Convection",
      "suffixName": "225L",
      "model": "101-3A",
      "category": "General Equipment",
      "thumbnail": "/assets/images/101-3A.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P138",
      "name": "Drying and Heating Chamber with Forced Convection",
      "suffixName": "640L",
      "model": "101-4A",
      "category": "General Equipment",
      "thumbnail": "/assets/images/101-4A.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P139",
      "name": "Drying and Heating Chamber with Forced Convection",
      "suffixName": "1200L",
      "model": "101-5A",
      "category": "General Equipment",
      "thumbnail": "/assets/images/101-5A.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P140",
      "name": "Muffle Furnace",
      "suffixName": "5.4L Max 1600℃",
      "model": "SX2-8-16",
      "category": "General Equipment",
      "thumbnail": "/assets/images/SX2-8-16.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P141",
      "name": "Muffle Furnace",
      "suffixName": "12L Max 1600℃",
      "model": "SX2-12-16",
      "category": "General Equipment",
      "thumbnail": "/assets/images/SX2-12-16.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P142",
      "name": "Muffle Furnace",
      "suffixName": "1.9L Max 1000℃",
      "model": "SX2-2.5-10",
      "category": "General Equipment",
      "thumbnail": "/assets/images/SX2-2.5-10.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P143",
      "name": "Muffle Furnace",
      "suffixName": "7.2L Max 1000℃",
      "model": "SX2-4-10",
      "category": "General Equipment",
      "thumbnail": "/assets/images/SX2-4-10.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P144",
      "name": "Muffle Furnace",
      "suffixName": "16L Max 1000℃",
      "model": "SX2-8-10",
      "category": "General Equipment",
      "thumbnail": "/assets/images/SX2-8-10.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P145",
      "name": "Muffle Furnace",
      "suffixName": "30L Max 1000℃",
      "model": "SX2-12-10",
      "category": "General Equipment",
      "thumbnail": "/assets/images/SX2-12-10.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P146",
      "name": "Horizontal Low Temperature Chamber",
      "suffixName": "208L -25℃",
      "model": "DW-25",
      "category": "General Equipment",
      "thumbnail": "/assets/images/DW-25（卧式）.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P147",
      "name": "Horizontal Low Temperature Chamber",
      "suffixName": "213L -40℃",
      "model": "DW-40",
      "category": "General Equipment",
      "thumbnail": "/assets/images/DW-40（卧式）.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P148",
      "name": "Horizontal Low Temperature Chamber",
      "suffixName": "195L -60℃",
      "model": "DW-60",
      "category": "General Equipment",
      "thumbnail": "/assets/images/DW-60（卧式）.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P149",
      "name": "Vertical Low Temperature Chamber",
      "suffixName": "165L -40℃",
      "model": "DW-40",
      "category": "General Equipment",
      "thumbnail": "/assets/images/DW-40（立式）.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P150",
      "name": "Damp Heat Test Chamber",
      "suffixName": "",
      "model": "HBY-1",
      "category": "General Equipment",
      "thumbnail": "/assets/images/HBY-1.png",
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "P151",
      "name": "Aging Test Chamber",
      "suffixName": "",
      "model": "401A",
      "category": "General Equipment",
      "thumbnail": "/assets/images/401A.png",
      "description": "This product is suitable for scientific research units and factories for plastic materials (rubber, plastic), electrical insulation and other materials aging test.",
      "features": [
        "Sensitive temperature control and good temperature uniformity.",
        "Large effective space and stable performance."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Control temperature",
          "value": "Room temperature ～200℃"
        },
        {
          "label": "Temperature controller accuracy",
          "value": "±1℃"
        },
        {
          "label": "Turntable speed",
          "value": "11～12r/min"
        },
        {
          "label": "Heating power",
          "value": "2200W"
        },
        {
          "label": "Power supply voltage",
          "value": "AC220V±10%"
        },
        {
          "label": "Working chamber size",
          "value": "450×450×500mm"
        },
        {
          "label": "Overall dimension",
          "value": "780×660×1160mm"
        },
        {
          "label": "Weight",
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
      "name": "Concrete Fast Freeze-thaw Chamber",
      "suffixName": "28 PCS",
      "model": "TDRF-1",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/TDRF-1（连体）.png",
      "description": "Our company is the standard drafting unit of Building Materials Department of TDRF concrete fast freeze-thaw chamber (device),and participated in the formulation of the standard of apparatus for resistance to freeze-thaw test of concrete of National Building Materials Academy.\nThis product is suitable for freeze-thaw tests on concrete, building bricks,ceramic bricks and other building materials.",
      "features": [],
      "standards": [
        "ASTM C666",
        "AASHTO T161",
        "PROCEDURE A"
      ],
      "specifications": [
        {
          "label": "Condenser cooling way",
          "value": "Air-cooling"
        },
        {
          "label": "Number of test pieces",
          "value": "28 PCS"
        },
        {
          "label": "Specimen size",
          "value": "100×100×400mm,the temperature measuring parts are of the same size, and there are temperature measuring holes in the middle."
        },
        {
          "label": "Freezing end time/test piece center temperature",
          "value": "1.5～2.5h/-17±2℃（New standard -18±2℃）"
        },
        {
          "label": "Melting end time/test piece center temperature",
          "value": "1.0～2.0h/8±2℃（New standard 5±2℃）"
        },
        {
          "label": "Freeze-thaw cycle",
          "value": "2.5～4h,the melting time is not less than 1/4 freeze-thaw cycle."
        },
        {
          "label": "The temperature difference between the center and the surface of the specimen",
          "value": "＜28℃"
        },
        {
          "label": "Number of cycles",
          "value": "The standard is 300 times, and the number of cycles can be adjusted."
        },
        {
          "label": "Temperature recorder",
          "value": "LCD touch screen controller"
        },
        {
          "label": "Freeze-thaw cycle medium",
          "value": "-45°C antifreeze (1:1 mixed with water)"
        },
        {
          "label": "Amount of freeze-thaw cycle media charged",
          "value": "90kg"
        },
        {
          "label": "Refrigerator compressor",
          "value": "Complete inlet closure 8.5HP"
        },
        {
          "label": "Specimen barrel size",
          "value": "115×115×490mm"
        },
        {
          "label": "Heating power",
          "value": "9kW"
        },
        {
          "label": "Maximum operating power",
          "value": "11kW"
        },
        {
          "label": "Voltage",
          "value": "AC380V±10%"
        },
        {
          "label": "Overall dimensions",
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
      "name": "Concrete Fast Freeze-thaw Chamber",
      "suffixName": "16 PCS",
      "model": "TDRF-2",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/TDRF-2（连体）.png",
      "description": "Our company is the standard drafting unit of Building Materials Department of TDRF concrete fast freeze-thaw chamber (device),and participated in the formulation of the standard of apparatus for resistance to freeze-thaw test of concrete of National Building Materials Academy.\nThis product is suitable for freeze-thaw tests on concrete, building bricks,ceramic bricks and other building materials.",
      "features": [],
      "standards": [
        "ASTM C666",
        "AASHTO T161",
        "PROCEDURE A"
      ],
      "specifications": [
        {
          "label": "Condenser cooling way",
          "value": "Air-cooling"
        },
        {
          "label": "Number of test pieces",
          "value": "16 PCS"
        },
        {
          "label": "Specimen size",
          "value": "100×100×400mm,the temperature measuring parts are of the same size, and there are temperature measuring holes in the middle."
        },
        {
          "label": "Freezing end time/test piece center temperature",
          "value": "1.5～2.5h/-17±2℃（New standard -18±2℃）"
        },
        {
          "label": "Melting end time/test piece center temperature",
          "value": "1.0～2.0h/8±2℃（New standard 5±2℃）"
        },
        {
          "label": "Freeze-thaw cycle",
          "value": "2.5～4h,the melting time is not less than 1/4 freeze-thaw cycle."
        },
        {
          "label": "The temperature difference between the center and the surface of the specimen",
          "value": "＜28℃"
        },
        {
          "label": "Number of cycles",
          "value": "The standard is 300 times, and the number of cycles can be adjusted."
        },
        {
          "label": "Temperature recorder",
          "value": "LCD touch screen controller"
        },
        {
          "label": "Freeze-thaw cycle medium",
          "value": "-45°C antifreeze (1:1 mixed with water)"
        },
        {
          "label": "Amount of freeze-thaw cycle media charged",
          "value": "60kg"
        },
        {
          "label": "Refrigerator compressor",
          "value": "Complete inlet closure 5HP"
        },
        {
          "label": "Specimen barrel size",
          "value": "115×115×490mm"
        },
        {
          "label": "Heating power",
          "value": "6kW"
        },
        {
          "label": "Maximum operating power",
          "value": "8kW"
        },
        {
          "label": "Voltage",
          "value": "AC380V±10%"
        },
        {
          "label": "Overall dimensions",
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
      "name": "Concrete Fast Freeze-thaw Chamber",
      "suffixName": "10 PCS",
      "model": "TDRF-3",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/TDRF-3（连体）.png",
      "description": "Our company is the standard drafting unit of Building Materials Department of TDRF concrete fast freeze-thaw chamber (device),and participated in the formulation of the standard of apparatus for resistance to freeze-thaw test of concrete of National Building Materials Academy.\nThis product is suitable for freeze-thaw tests on concrete, building bricks,ceramic bricks and other building materials.",
      "features": [],
      "standards": [
        "ASTM C666",
        "AASHTO T161",
        "PROCEDURE A"
      ],
      "specifications": [
        {
          "label": "Condenser cooling way",
          "value": "Air-cooling"
        },
        {
          "label": "Number of test pieces",
          "value": "10 PCS"
        },
        {
          "label": "Specimen size",
          "value": "100×100×400mm,the temperature measuring parts are of the same size, and there are temperature measuring holes in the middle."
        },
        {
          "label": "Freezing end time/test piece center temperature",
          "value": "1.5～2.5h/-17±2℃（New standard -18±2℃）"
        },
        {
          "label": "Melting end time/test piece center temperature",
          "value": "1.0～2.0h/8±2℃（New standard 5±2℃）"
        },
        {
          "label": "Freeze-thaw cycle",
          "value": "2.5～4h,the melting time is not less than 1/4 freeze-thaw cycle."
        },
        {
          "label": "The temperature difference between the center and the surface of the specimen",
          "value": "＜28℃"
        },
        {
          "label": "Number of cycles",
          "value": "The standard is 300 times, and the number of cycles can be adjusted."
        },
        {
          "label": "Temperature recorder",
          "value": "LCD touch screen controller"
        },
        {
          "label": "Freeze-thaw cycle medium",
          "value": "-45°C antifreeze (1:1 mixed with water)"
        },
        {
          "label": "Amount of freeze-thaw cycle media charged",
          "value": "30kg"
        },
        {
          "label": "Refrigerator compressor",
          "value": "Complete inlet closure 3HP"
        },
        {
          "label": "Specimen barrel size",
          "value": "115×115×490mm"
        },
        {
          "label": "Heating power",
          "value": "4.5kW"
        },
        {
          "label": "Maximum operating power",
          "value": "6kW"
        },
        {
          "label": "Voltage",
          "value": "AC380V±10%"
        },
        {
          "label": "Overall dimensions",
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
      "name": "Concrete Carbonation Test Chambe",
      "suffixName": "",
      "model": "CCB-70A",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/CCB-70A.png",
      "description": "Our company participated in the drafting of CCB-70A concrete carbon ization test chamber and designated by the Building Materials Department.This equipment is a special apparatus for carbonation test of concretes.",
      "features": [],
      "standards": [
        "ISO 1920-12"
      ],
      "specifications": [
        {
          "label": "Temperature control",
          "value": "20±2℃(adjust)"
        },
        {
          "label": "Temperature control precision",
          "value": "0.5℃"
        },
        {
          "label": "Humidity control",
          "value": "70±5%RH (40~70 adjust)"
        },
        {
          "label": "CO2 concentration",
          "value": "20±3% (0~60,0~100 adjust,two ranges available)"
        },
        {
          "label": "CO2 concentration resolution",
          "value": "±1%"
        },
        {
          "label": "CO2 concentration uniformity",
          "value": "≦2%"
        },
        {
          "label": "CO2 concentration precision",
          "value": "1%"
        },
        {
          "label": "Heating power",
          "value": "600W"
        },
        {
          "label": "Refrigeration/Dehumidification power",
          "value": "240W"
        },
        {
          "label": "Humidification power",
          "value": "1500W"
        },
        {
          "label": "Voltage",
          "value": "AC220V±10%"
        },
        {
          "label": "Studio size",
          "value": "620×550×1230mm"
        },
        {
          "label": "Overall dimensions",
          "value": "1100×710×1630mm"
        },
        {
          "label": "Weigh",
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
      "name": "Accelerated Concrete Curing Tank",
      "suffixName": "",
      "model": "LDZY-400",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/LDZY-400.png",
      "description": "This product is a common equipment for the steam curing test of concrete specimens.The equipment is made of stainless steel inside and outside, touch screen operation display, automatic control, the test process is simple and convenient.",
      "features": [],
      "standards": [
        "ASTM C684 Method C"
      ],
      "specifications": [
        {
          "label": "Specimen size with mold",
          "value": "195×195×175mm"
        },
        {
          "label": "Box inner diameter",
          "value": "1000×750×640mm"
        },
        {
          "label": "Overall dimensions",
          "value": "1560×850×900mm"
        },
        {
          "label": "Number of specimen groups",
          "value": "8 groups (24 pieces in total)"
        },
        {
          "label": "Temperature rise rate",
          "value": "≦15℃/h"
        },
        {
          "label": "Heating power",
          "value": "4.0kW (new heating tube)"
        },
        {
          "label": "Cooling power",
          "value": "0.5kW"
        },
        {
          "label": "Voltage",
          "value": "AC220V±10%"
        },
        {
          "label": "Frequency",
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
      "name": "Alkali-aggregate Test Chamber",
      "suffixName": "Mortar-Bar Method and Accelerated Mortar-Bar Method",
      "model": "JKS",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/JKS.png",
      "description": "Alkali-aggregate test chamber is designed and manufactured according to the national standard requirements for concrete long-term durability test.It is suitable for temperature control and time control of sand aggregate expansion test. The inner liner and shelf are made of stainless steel material.\nIt is suitable for conducting alkali-aggregate reaction test as to long-term durability of concretes in construction units,highway bridge engineering  units,and related research and quality inspection departments.",
      "features": [],
      "standards": [
        "ASTM C1260",
        "ASTM C1567"
      ],
      "specifications": [
        {
          "label": "Temperature control",
          "value": "Room temperature ~100℃(adjust)"
        },
        {
          "label": "Temperature control precision",
          "value": "±0.2℃"
        },
        {
          "label": "Control time range",
          "value": "1~999min（99.9 days）"
        },
        {
          "label": "Frequency",
          "value": "50-60Hz"
        },
        {
          "label": "Control time precision",
          "value": "±1min"
        },
        {
          "label": "Heating power",
          "value": "6kW"
        },
        {
          "label": "Water pump power",
          "value": "90W"
        },
        {
          "label": "Voltage",
          "value": "AC380V±10%"
        },
        {
          "label": "Studio size",
          "value": "650×550×600 (clear height 450mm)"
        },
        {
          "label": "Overall dimensions",
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
      "name": "Concrete Impermeability Apparatus",
      "suffixName": "",
      "model": "HP-4.0",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/HP-4.0.png",
      "description": "HP-4.0 automatic pressure regulating concrete impermeability instrument is used to measure the impermeability of concrete,which is used in construction enterprises, scientific research institutions, design departments and other units to engaged in the measurement and experimental research of concrete impermeability.It can also be used for building materials permeability measurement of quality inspection.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Working pressure",
          "value": "4MPa"
        },
        {
          "label": "Working mode",
          "value": "Automatic pressurization"
        },
        {
          "label": "Number of test specimens",
          "value": "6 PCS"
        },
        {
          "label": "Inner diameter of the upper opening of the test mold",
          "value": "Φ175mm"
        },
        {
          "label": "Inner diameter of the bottom of the test mold",
          "value": "Φ185mm"
        },
        {
          "label": "Trial mold height",
          "value": "160mm"
        },
        {
          "label": "Motor power",
          "value": "80W"
        },
        {
          "label": "Motor speed",
          "value": "136r/min"
        },
        {
          "label": "Plunger pump plunger diameter",
          "value": "Φ10mm"
        },
        {
          "label": "Plunger pump reciprocating frequency",
          "value": "136 times/min"
        },
        {
          "label": "Piston pump flow",
          "value": "0.11L/min"
        },
        {
          "label": "Supply voltage",
          "value": "AC380V±10%"
        },
        {
          "label": "Dimensions",
          "value": "1090×710×920mm"
        },
        {
          "label": "Weight",
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
      "name": "Fast Curing Chamber",
      "suffixName": "",
      "model": "A-Type",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/A-Type.png",
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
          "label": "Voltage",
          "value": "220V"
        },
        {
          "label": "Internal temperature",
          "value": "Room temperature to 100℃,users need to control freely"
        },
        {
          "label": "Electric heat tube heating power",
          "value": "2000W(3 PCS)"
        },
        {
          "label": "Studio size",
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
      "name": "Direct-reading Concrete Air Meter",
      "suffixName": "",
      "model": "CA-3",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/CA-3.png",
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
          "label": "Concrete mix particle size",
          "value": "≤40mm"
        },
        {
          "label": "Maximum air content determination",
          "value": "8%"
        },
        {
          "label": "Concrete measuring pot size",
          "value": "Volume 7L, inner diameter to height ratio is 1:1"
        },
        {
          "label": "Display instrument pressure value range",
          "value": "0.25MPa"
        },
        {
          "label": "Display instrument dividing value",
          "value": "0.005MPa"
        },
        {
          "label": "The amount of air content",
          "value": "8%"
        },
        {
          "label": "The minimum reading",
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
      "name": "Acme Penetrometer",
      "suffixName": "",
      "model": "HG-1000",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/HG-1000.png",
      "description": "This product is suitable for testing the setting time of various cements, admixtures and concrete mixtures with different concrete mix ratios under different temperature environments. The test mold is made of all-aluminum material, light in weight and easy to use.",
      "features": [],
      "standards": [
        "ASTM C403",
        "AASHTO T197"
      ],
      "specifications": [
        {
          "label": "Specimen mould upper calibre",
          "value": "Φ160mm"
        },
        {
          "label": "Specimen mould lower calibre",
          "value": "Φ150mm"
        },
        {
          "label": "Test temperature",
          "value": "20±2℃"
        },
        {
          "label": "Maximum penetration force",
          "value": "1000N"
        },
        {
          "label": "Minimum division value",
          "value": "0.1N"
        },
        {
          "label": "Display value error",
          "value": "<±1%"
        },
        {
          "label": "Penetration method",
          "value": "Manual"
        },
        {
          "label": "Stylus area",
          "value": "100, 50, 20mm²"
        },
        {
          "label": "Voltage",
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
      "name": "Acme Dial Penetrometer",
      "suffixName": "",
      "model": "HG-80",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/HG-80.png",
      "description": "This product is suitable for testing the setting time of various cements, admixtures and concrete mixtures with different concrete mix ratios under different temperature environments.",
      "features": [],
      "standards": [
        "ASTM C403",
        "AASHTO T197"
      ],
      "specifications": [
        {
          "label": "Display mode",
          "value": "Pointer"
        },
        {
          "label": "Maximum measured value",
          "value": "1200N"
        },
        {
          "label": "Specimen mould upper calibre",
          "value": "Φ160mm"
        },
        {
          "label": "Specimen mould lower calibre",
          "value": "Φ150mm"
        },
        {
          "label": "Specimen mould height",
          "value": "150mm"
        },
        {
          "label": "Penetration depth",
          "value": "25mm"
        },
        {
          "label": "Minimum division value",
          "value": "1N"
        },
        {
          "label": "Indication error",
          "value": "±10N"
        },
        {
          "label": "Stylus loading area",
          "value": "100,50,20mm2"
        },
        {
          "label": "Penetration resistance",
          "value": "0.2～3.5MPa,3.5～20MPa, 20～28MPa"
        },
        {
          "label": "Dimensions",
          "value": "700×350×1000mm"
        },
        {
          "label": "Packing size",
          "value": "730×360×1040mm"
        },
        {
          "label": "Weight",
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
      "name": "Concrete Vibrator",
      "suffixName": "500×500mm",
      "model": "HZJ-0.5",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/HZJ-0.5.png",
      "description": "This product is suitable for the laboratory on-site construction site as a test piece forming and the prefabricated component factory to vibrate various concrete components such as slabs, columns and beams.",
      "features": [],
      "standards": [
        "EN 12390-2",
        "BS 1881:108"
      ],
      "specifications": [
        {
          "label": "Table size",
          "value": "500×500mm"
        },
        {
          "label": "Vibration frequency",
          "value": "2860 point/min"
        },
        {
          "label": "Vibration amplitude",
          "value": "0.3-0.6mm"
        },
        {
          "label": "Vibrator power",
          "value": "0.55kW"
        },
        {
          "label": "Load",
          "value": "100kg"
        },
        {
          "label": "Weight",
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
      "name": "Concrete Vibrator",
      "suffixName": "800×800mm",
      "model": "HZJ-0.8",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/HZJ-0.8.png",
      "description": "This product is suitable for the laboratory on-site construction site as a test piece forming and the prefabricated component factory to vibrate various concrete components such as slabs, columns and beams.",
      "features": [],
      "standards": [
        "EN 12390-2",
        "BS 1881:108"
      ],
      "specifications": [
        {
          "label": "Table size",
          "value": "800×800mm"
        },
        {
          "label": "Vibration frequency",
          "value": "2860 point/min"
        },
        {
          "label": "Vibration amplitude",
          "value": "0.3-0.6mm"
        },
        {
          "label": "Vibrator power",
          "value": "1.1kW"
        },
        {
          "label": "Load",
          "value": "150kg"
        },
        {
          "label": "Weight",
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
      "name": "Concrete Vibrator",
      "suffixName": "1000×1000mm",
      "model": "HZJ-1",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/HZJ-1.png",
      "description": "This product is suitable for the laboratory on-site construction site as a test piece forming and the prefabricated component factory to vibrate various concrete components such as slabs, columns and beams.",
      "features": [],
      "standards": [
        "EN 12390-2",
        "BS 1881:108"
      ],
      "specifications": [
        {
          "label": "Table size",
          "value": "1000×1000mm"
        },
        {
          "label": "Vibration frequency",
          "value": "2860 point/min"
        },
        {
          "label": "Vibration amplitude",
          "value": "0.3-0.6mm"
        },
        {
          "label": "Vibrator power",
          "value": "1.5kW"
        },
        {
          "label": "Load",
          "value": "200kg"
        },
        {
          "label": "Weight",
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
      "name": "Single Shaft Concrete Mixer",
      "suffixName": "30L",
      "model": "SJD-30",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/SJD-30.png",
      "description": "This machine is suitable for construction scientific research units and construction companies and concrete component units. It can mix ordinary concrete and lightweight concrete, and can also be used in other industries to stir with different materials.",
      "features": [],
      "standards": [
        "ASTM C192/C192M-02"
      ],
      "specifications": [
        {
          "label": "Wall thickness",
          "value": "6mm"
        },
        {
          "label": "Feed capacity",
          "value": "48L"
        },
        {
          "label": "Discharging capacity",
          "value": "30L"
        },
        {
          "label": "Maximum discharge capacity",
          "value": "33L"
        },
        {
          "label": "Mixing time",
          "value": "≤45s"
        },
        {
          "label": "Stirring axis speed",
          "value": "45r/min"
        },
        {
          "label": "Electric power",
          "value": "1.5kW"
        },
        {
          "label": "Voltage",
          "value": "AC380V±10%"
        },
        {
          "label": "Dimensions",
          "value": "1130×400×900mm"
        },
        {
          "label": "Weight",
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
      "name": "Single Shaft Concrete Mixer",
      "suffixName": "60L",
      "model": "SJD-60",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/SJD-60.png",
      "description": "This machine is suitable for construction scientific research units and construction companies and concrete component units. It can mix ordinary concrete and lightweight concrete, and can also be used in other industries to stir with different materials.",
      "features": [],
      "standards": [
        "ASTM C192/C192M-02"
      ],
      "specifications": [
        {
          "label": "Wall thickness",
          "value": "6mm"
        },
        {
          "label": "Feed capacity",
          "value": "96L"
        },
        {
          "label": "Discharging capacity",
          "value": "60L"
        },
        {
          "label": "Maximum discharge capacity",
          "value": "66L"
        },
        {
          "label": "Mixing time",
          "value": "≤45s"
        },
        {
          "label": "Stirring axis speed",
          "value": "45r/min"
        },
        {
          "label": "Electric power",
          "value": "2.2kW"
        },
        {
          "label": "Voltage",
          "value": "AC380V±10%"
        },
        {
          "label": "Dimensions",
          "value": "1520×530×1060mm"
        },
        {
          "label": "Weight",
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
      "name": "Chloride Ion Fast Content Analyzer",
      "suffixName": "",
      "model": "LDCL-B",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/LDCL-B.png",
      "description": "This product quickly determines the water-soluble chloride ion content of concrete, sand, gravel, cement, mixing water and other inorganic materials through the professional software and chemical anti-jamming reagents equipped.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Measurement range",
          "value": "50～999.99mV"
        },
        {
          "label": "Electrode configuration",
          "value": "domestic 2 electrodes"
        },
        {
          "label": "Electrical measurement range",
          "value": "1×10-2～5×10-5mol/L"
        },
        {
          "label": "Voltage",
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
      "name": "Concrete Pressure Secretion Instrument",
      "suffixName": "",
      "model": "SY-2",
      "category": "Concrete Testing",
      "thumbnail": "/assets/images/SY-2.png",
      "description": "This device is used for concrete mixture with no more than 40mm compound pressure to be measured. It has the advantages of accurate measurement value, simple operation, small volume, and convenient molding.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "The maximum range of the pressure gauge",
          "value": "6MPa"
        },
        {
          "label": "Cylinder inner diameter",
          "value": "125±0.02mm"
        },
        {
          "label": "Cylinder body height",
          "value": "200±0.2mm"
        },
        {
          "label": "Working piston diameter",
          "value": "125mm"
        },
        {
          "label": "Screen aperture",
          "value": "0.335mm (50 mesh)"
        },
        {
          "label": "Weight",
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
      "name": "Cement Water Curing Box",
      "suffixName": "180 PCS",
      "model": "HBY-30",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/HBY-30（立式）.png",
      "description": "The product is suitable for cement plant, construction units, highway and bridge engineering units and relevant scientific research and quality inspection departments to perform standard maintenance on the strength and setting time of cement,concrete and cement product samples.",
      "features": [],
      "standards": [
        "EN 196-1"
      ],
      "specifications": [
        {
          "label": "Temperature control",
          "value": "20±1℃"
        },
        {
          "label": "Temperature control precision",
          "value": "±1℃"
        },
        {
          "label": "Compressor power",
          "value": "240W"
        },
        {
          "label": "Heater power",
          "value": "1000W"
        },
        {
          "label": "Voltage",
          "value": "AC220V±10%"
        },
        {
          "label": "Maintenance box size",
          "value": "175×290×65mm (30 pieces)"
        },
        {
          "label": "Test block size",
          "value": "40×40×160 mm(180 pieces)"
        },
        {
          "label": "Dimensions",
          "value": "800×670×1750mm"
        },
        {
          "label": "Weight",
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
      "name": "Cement Water Curing Box",
      "suffixName": "360 PCS",
      "model": "HBY-64",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/HBY-64（立式）.png",
      "description": "The product is suitable for cement plant, construction units, highway and bridge engineering units and relevant scientific research and quality inspection departments to perform standard maintenance on the strength and setting time of cement,concrete and cement product samples.",
      "features": [],
      "standards": [
        "EN 196-1"
      ],
      "specifications": [
        {
          "label": "Temperature control",
          "value": "20±1℃"
        },
        {
          "label": "Temperature control precision",
          "value": "±1℃"
        },
        {
          "label": "Voltage",
          "value": "AC220V±10%"
        },
        {
          "label": "Compressor power",
          "value": "240W"
        },
        {
          "label": "Heater power",
          "value": "2000W"
        },
        {
          "label": "Test block size",
          "value": "40×40×160mm (360 pieces)"
        },
        {
          "label": "Maintenance box size",
          "value": "175×290×65mm (60 pieces)"
        },
        {
          "label": "Dimensions",
          "value": "1080×850×1880mm"
        },
        {
          "label": "Weight",
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
      "name": "Cement and Concrete Curing Chamber",
      "suffixName": "18 triple cement molds",
      "model": "HBY-40B",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/HBY-40B（铁门）.png",
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
          "label": "Test temperature",
          "value": "20±1℃"
        },
        {
          "label": "Control humidity",
          "value": "≧95%RH"
        },
        {
          "label": "Compressor power",
          "value": "138W"
        },
        {
          "label": "Heater power",
          "value": "800W"
        },
        {
          "label": "Voltage",
          "value": "AC220V±10%"
        },
        {
          "label": "Number of trial molds placed",
          "value": "40×40×160 trial molds, 6 groups can be placed on each layer; 150×150×150 mold trial, 3 groups can be placed on each layer; 100×100×100 mold trial, 4 groups can be placed on each layer"
        },
        {
          "label": "Studio size",
          "value": "590×570×1180mm"
        },
        {
          "label": "Dimensions",
          "value": "1000×700×1530mm"
        },
        {
          "label": "Weight",
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
      "name": "Mixed Mortar Specimen Standard Curing Box",
      "suffixName": "",
      "model": "HBY-30",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/HBY-30.png",
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
          "label": "Temperature controller accuracy",
          "value": "20±1℃"
        },
        {
          "label": "Control humidity",
          "value": "60-80%RH"
        },
        {
          "label": "Voltage",
          "value": "AC220V±10%"
        },
        {
          "label": "Compressor power",
          "value": "138W"
        },
        {
          "label": "Heater power",
          "value": "500W"
        },
        {
          "label": "Studio size",
          "value": "580×500×1180mm"
        },
        {
          "label": "The internal specimen rack is equally divided into 6 grid sizes",
          "value": "580×490×180mm"
        },
        {
          "label": "Dimensions",
          "value": "1000×700×1530 mm"
        },
        {
          "label": "Weight",
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
      "name": "Cement Mortar Mixer",
      "suffixName": "",
      "model": "JJ-20F",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/JJ-20F.png",
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
          "label": "Rotation Low speed",
          "value": "140 ± 2 r/min"
        },
        {
          "label": "Revolution Low speed",
          "value": "62 ± 2 r/min"
        },
        {
          "label": "Rotation High speed",
          "value": "285 ± 3 r/min"
        },
        {
          "label": "Revolution High speed",
          "value": "125 ± 3 r/min"
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
          "label": "Voltage",
          "value": "AC220V±10%"
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
      "isNew": false,
      "customized": []
    },
    {
      "id": "D010",
      "name": "Cement Mortar Vibrating Platform",
      "suffixName": "",
      "model": "ZT-20F",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/ZT-20F.png",
      "description": "This instrument is suitable for preparing samples for strength testing of cement mortar.",
      "features": [],
      "standards": [
        "EN 196-1",
        "EN ISO 679"
      ],
      "specifications": [
        {
          "label": "The total mass of the table plate(including the arm,the die frame,etc.)",
          "value": "13.75±0.25kg"
        },
        {
          "label": "The total weight of vibrating part",
          "value": "20±0.5kg"
        },
        {
          "label": "Amplitude (falling distance)",
          "value": "15±0.3mm"
        },
        {
          "label": "The time of 60 vibrations",
          "value": "60±2s"
        },
        {
          "label": "Motor speed",
          "value": "60rpm"
        },
        {
          "label": "Motor power",
          "value": "40W"
        },
        {
          "label": "Voltage",
          "value": "AC220V"
        },
        {
          "label": "Overall Dimensions",
          "value": "1152×482×510mm"
        },
        {
          "label": "Weight",
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
      "name": "Electric Flexural Testing Machine (pointer type)",
      "suffixName": "5000N",
      "model": "DKZ-5000",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/DKZ-5000.png",
      "description": "This testing machine is mainly used for testing the flexural strength of cement soft-burning mortar in cement plants, construction units, relevant professional colleges and scientific research units, and can also be used for flexural strength testing of other non-metallic brittle materials.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Display method",
          "value": "Pointer"
        },
        {
          "label": "Double lever output ratio (lower beam to arm distance ratio) (maximum)",
          "value": "50:1"
        },
        {
          "label": "Maximum output",
          "value": "Double Leverage 5000N"
        },
        {
          "label": "Loading speed",
          "value": "50N/s"
        },
        {
          "label": "Loading roller and supporting roller diameter",
          "value": "Φ10mm"
        },
        {
          "label": "Support roller pitch",
          "value": "100mm"
        },
        {
          "label": "Lay frame spacing",
          "value": "46mm"
        },
        {
          "label": "Lever inclination",
          "value": ">1/50°"
        },
        {
          "label": "Dimensions (length x width x height)",
          "value": "1080×220×780mm"
        },
        {
          "label": "Weight",
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
      "name": "Electric Flexural Testing Machine (digital display)",
      "suffixName": "6000N",
      "model": "DKZ-6000",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/DKZ-6000（数显）.png",
      "description": "This testing machine is mainly used for testing the flexural strength of cement soft-burning mortar in cement plants, construction units, relevant professional colleges and scientific research units, and can also be used for flexural strength testing of other non-metallic brittle materials.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Maximum bending resistance",
          "value": "6000N"
        },
        {
          "label": "Loading roller and supporting roller diameter",
          "value": "Φ10mm"
        },
        {
          "label": "Support roller distance",
          "value": "100mm"
        },
        {
          "label": "Lay frame spacing",
          "value": "46mm"
        },
        {
          "label": "Lever inclination",
          "value": ">1/50°"
        },
        {
          "label": "Voltage",
          "value": "AC220V±10%"
        },
        {
          "label": "Dimensions",
          "value": "1180×220×800mm"
        },
        {
          "label": "Weight",
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
      "name": "Cement Mortar Flow Table",
      "suffixName": "",
      "model": "NLD-3F",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/NLD-3F.png",
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
          "label": "The total weight of the vibrating part",
          "value": "4.35±0.15kg"
        },
        {
          "label": "Vibration fall distance",
          "value": "10±0.2mm(For ASTM C230, 12.7±0.2)"
        },
        {
          "label": "Vibration frequency",
          "value": "1Hz"
        },
        {
          "label": "Vibration times",
          "value": "25 times"
        },
        {
          "label": "Desktop parameters",
          "value": "Cast steel, hard chrome plated working surface"
        },
        {
          "label": "Diameter",
          "value": "Φ300±1mm(For ASTM C230, Φ254±1)"
        },
        {
          "label": "Dimensions",
          "value": "400×500×370mm"
        },
        {
          "label": "Voltage",
          "value": "AC220V±10%"
        },
        {
          "label": "Weight",
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
      "name": "Cement Fineness Air Jet Sieving Analyzer",
      "suffixName": "",
      "model": "FSY-150",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/FSY-150（普通）.png",
      "description": "This equipment is widely used in cement fineness inspection and cement production control. It can also be used in powder fineness testing in other industries. It is a commonly used instrument in various cement quality inspection stations, cement factories and other units.",
      "features": [],
      "standards": [
        "EN 933-10",
        "ASTM C1891"
      ],
      "specifications": [
        {
          "label": "Sieve analysis test fineness",
          "value": "1~0.030mm"
        },
        {
          "label": "Screening time automatic",
          "value": "0～999s (adjust)"
        },
        {
          "label": "Working negative pressure",
          "value": "-4000~6000Pa"
        },
        {
          "label": "Voltage",
          "value": "AC220V±10%"
        },
        {
          "label": "Feeding",
          "value": "10～25g"
        },
        {
          "label": "Accessories",
          "value": "0.045 sieve, 0.08 sieve (optional)"
        },
        {
          "label": "Noise",
          "value": "≤75dB"
        },
        {
          "label": "Dimensions",
          "value": "450×380×830mm"
        },
        {
          "label": "Weight",
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
      "name": "Boiling Box",
      "suffixName": "",
      "model": "FZ-31A",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/FZ-31A.png",
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
          "label": "Maximum boiling temperature",
          "value": "100℃"
        },
        {
          "label": "Inner tank volume",
          "value": "31L"
        },
        {
          "label": "Heating time",
          "value": "30±5min(20℃ to 100℃)"
        },
        {
          "label": "Heating time control",
          "value": "0～3.5h"
        },
        {
          "label": "Tubular heater power",
          "value": "4kW"
        },
        {
          "label": "Voltage",
          "value": "AC220V±10%"
        },
        {
          "label": "Studio size",
          "value": "410×240×310mm"
        },
        {
          "label": "Dimensions",
          "value": "490×290×410mm"
        },
        {
          "label": "Weight",
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
      "name": "Automatic Specific Surface Area Meter",
      "suffixName": "Blaine Method",
      "model": "FBT-9",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/FBT-9.png",
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
          "label": "Voltage",
          "value": "200V±10%"
        },
        {
          "label": "Timing range",
          "value": "0.1s<T<999.9s"
        },
        {
          "label": "Timing accuracy",
          "value": "<0.2s"
        },
        {
          "label": "Measurement accuracy",
          "value": "＜1%"
        },
        {
          "label": "Temperature range",
          "value": "8~34℃"
        },
        {
          "label": "Breathable cylinder inner cavity diameter",
          "value": "Φ12.7mm"
        },
        {
          "label": "Sample height of breathable cylinder inner cavity",
          "value": "15mm"
        },
        {
          "label": "Number of holes in perforated plate",
          "value": "35"
        },
        {
          "label": "Perforated plate hole diameter",
          "value": "Φ1.0mm"
        },
        {
          "label": "Perforated plate thickness",
          "value": "1mm"
        },
        {
          "label": "Outer dimension",
          "value": "430×500×280mm"
        },
        {
          "label": "Weight",
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
      "name": "Cement Mortar Mixer",
      "suffixName": "",
      "model": "JJ-5",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/JJ-5.png",
      "description": "The product is suitable for cement plant, construction units, highway and bridge engineering units and relevant scientific research and quality inspection departments to perform standard maintenance on the strength and setting time of cement,concrete and cement product samples.",
      "features": [
        "Controlled by a dual-speed motor via a time program controller, it automatically completes the specified working cycle of \"slow rotation — stop — fast rotation\".",
        "All-metal structure ensures stable testing performance."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Low-speed rotation speed (r/min)",
          "value": "140±5"
        },
        {
          "label": "High-speed rotation speed (r/min)",
          "value": "285±10"
        },
        {
          "label": "Low-speed revolution speed (r/min)",
          "value": "62±5"
        },
        {
          "label": "High-speed revolution speed (r/min)",
          "value": "125±10"
        },
        {
          "label": "Width of mixing blade (mm)",
          "value": "135"
        },
        {
          "label": "Connection thread specification between mixing blade and mixing blade shaft",
          "value": "M18×1.5"
        },
        {
          "label": "Volume of mixing pot (L)",
          "value": "5"
        },
        {
          "label": "Wall thickness of mixing pot (mm)",
          "value": "1.5"
        },
        {
          "label": "Working gap between mixing blade and mixing pot (mm)",
          "value": "3±1"
        },
        {
          "label": "Power supply voltage",
          "value": "AC380V±10%, 50Hz"
        },
        {
          "label": "Overall dimensions (mm)",
          "value": "550×300×700"
        },
        {
          "label": "Weight (kg)",
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
      "name": "Cement Paste Mixer",
      "suffixName": "",
      "model": "NJ-160A",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/NJ-160A.png",
      "description": "This product is suitable for determining the standard consistency and setting time of cement, as well as for making soundness test blocks. It is an indispensable piece of equipment in laboratories of cement manufacturing plants, construction units, relevant universities, and research institutions.",
      "features": [
        "Controlled by a dual-speed motor via a time program controller, it automatically completes the specified working cycle of \"slow rotation — stop — fast rotation\".",
        "All-metal structure ensures stable testing performance."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Low-speed revolution speed (r/min)",
          "value": "62±5"
        },
        {
          "label": "High-speed revolution speed (r/min)",
          "value": "125±10"
        },
        {
          "label": "Low-speed rotation speed (r/min)",
          "value": "140±5"
        },
        {
          "label": "High-speed rotation speed (r/min)",
          "value": "258±10"
        },
        {
          "label": "Automatic control program time at low speed (s)",
          "value": "120±3"
        },
        {
          "label": "Automatic control program stop time (s)",
          "value": "15"
        },
        {
          "label": "Automatic control program time at high speed (s)",
          "value": "120±3"
        },
        {
          "label": "Connection thread specification between mixing blade and blade shaft",
          "value": "M16×1"
        },
        {
          "label": "Working gap between mixing blade and mixing pot (mm)",
          "value": "2±1"
        },
        {
          "label": "Width of mixing blade (mm)",
          "value": "111"
        },
        {
          "label": "Wall thickness of mixing pot (mm)",
          "value": "1"
        },
        {
          "label": "Dimensions of mixing pot (inner diameter × depth) (mm)",
          "value": "Φ160×139"
        },
        {
          "label": "Mixing volume (L)",
          "value": "2.5"
        },
        {
          "label": "Power supply voltage",
          "value": "AC380V±10%, 50Hz"
        },
        {
          "label": "Overall dimensions (mm)",
          "value": "450×250×500"
        },
        {
          "label": "Weight (kg)",
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
      "name": "Cement Mortar Vibrating Platform",
      "suffixName": "",
      "model": "ZT-96",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/ZT-96.png",
      "description": "This product is suitable for the compaction and molding of cement mortar specimens during preparation. It is mainly used in cement plants, construction units, and relevant academic institutions for testing and experimentation.",
      "features": [
        "Composed of a vibrating component, a frame section, and an infrared counting control system;",
        "Infrared counting automatic control, automatically stops at 60 counts per second, offering convenient operation and accurate counting;",
        "Distance from the center of the table disc to the center of the arm shaft is 800mm."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Drop distance (mm)",
          "value": "15±0.3"
        },
        {
          "label": "Vibration frequency",
          "value": "60 times/60 seconds ±2 seconds"
        },
        {
          "label": "Weight of vibrating part (kg)",
          "value": "20±0.5"
        },
        {
          "label": "Motor power (W)",
          "value": "70"
        },
        {
          "label": "Power supply voltage",
          "value": "AC220V±10%, 50Hz"
        },
        {
          "label": "Overall dimensions (mm)",
          "value": "1010×300×460"
        },
        {
          "label": "Weight (kg)",
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
      "name": "Cement Mortar Flow Table",
      "suffixName": "",
      "model": "NLD-3",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/NLD-3.png",
      "description": "This product is suitable for determining the water requirement for cement mortar to achieve standard consistency by measuring its fluidity value.",
      "features": [
        "The tabletop is made of hard chrome-plated material, featuring a bright surface, elegant appearance, and excellent resistance to rust.",
        "The controller offers high precision and is simple and convenient to operate."
      ],
      "standards": [],
      "specifications": [
        {
          "label": "Vibration drop distance (mm)",
          "value": "10±0.2"
        },
        {
          "label": "Vibration frequency (Hz)",
          "value": "1"
        },
        {
          "label": "Number of vibrations (times)",
          "value": "25"
        },
        {
          "label": "Weight of vibrating part (kg)",
          "value": "4.35±0.15"
        },
        {
          "label": "Tabletop material",
          "value": "Cast steel, working surface hard chrome-plated"
        },
        {
          "label": "Tabletop diameter (mm)",
          "value": "Φ300±1"
        },
        {
          "label": "Overall dimensions (mm)",
          "value": "200×300×280"
        },
        {
          "label": "Weight (kg)",
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
      "name": "Cement Paste Mixer",
      "suffixName": "",
      "model": "NJ-160F",
      "category": "Cement & Mortar Testing",
      "thumbnail": "/assets/images/NJ-160F.png",
      "description": "The cement paste mixer is primarily used for determining the standard consistency and setting time of cement, as well as for preparing soundness test blocks.",
      "features": [],
      "standards": [],
      "specifications": [
        {
          "label": "Low-speed revolution speed (r/min)",
          "value": "62±2"
        },
        {
          "label": "High-speed revolution speed (r/min)",
          "value": "125±3"
        },
        {
          "label": "Low-speed rotation speed (r/min)",
          "value": "140±2"
        },
        {
          "label": "High-speed rotation speed (r/min)",
          "value": "258±3"
        },
        {
          "label": "Connection thread specification between mixing blade and blade shaft",
          "value": "M16×1"
        },
        {
          "label": "Width of mixing blade (mm)",
          "value": "111"
        },
        {
          "label": "Wall thickness of mixing pot (mm)",
          "value": "1"
        },
        {
          "label": "Mixing volume (L)",
          "value": "2.5"
        },
        {
          "label": "Power supply voltage",
          "value": "AC220V±10%, 50Hz"
        },
        {
          "label": "Overall dimensions (mm)",
          "value": "570×340×600"
        },
        {
          "label": "Weight (kg)",
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
      "name": "Electronic Universal Material Testing Machine with Environmental Chambers",
      "suffixName": "50kN",
      "model": "WDW-T50",
      "category": "Electromechanical Universal Testing Маchines",
      "thumbnail": "/assets/images/WDW-T50.png",
      "description": "This product is suitable for testing and analyzing the mechanical properties of various metals, non-metals and composite materials, and can obtain test data such as maximum test force value, fracture force value, yield strength, upper and lower yield strength, tensile strength,  compressive strength, elongation at break, tensile modulus of elasticity and bending modulus of elasticity of test materials.",
      "features": [
        "For Testing at Non-Ambient Temperatures",
        "Safety position and experimental position height arbitrary lock.",
        "Automatic protection when exceeding the maximum load,software limit and electronic limit double protection."
      ],
      "standards": ["ASTM E83", "BS 3846", "ISO 9513", "EN 10002-4"],
      "specifications": [
        {
          "label": "Load Capacity (kN)",
          "value": "50 (can be customized to other capacities on request)"
        },
        {
          "label": "Load Measurement Accuracy",
          "value": "±1% (can be customized to 0.5 on request)"
        },
        {
          "label": "Load Measurement Range",
          "value": "1% to 100% FS"
        },
        {
          "label": "Vertical Test Space (without jig)",
          "value": "1200mm"
        },
        {
          "label": "Horizontal Test Space",
          "value": "500mm"
        },
        {
          "label": "Crosshead Speed Range",
          "value": "0.01～500mm/min"
        },
        {
          "label": "Position Control Resolution",
          "value": "0.025µm"
        },
        {
          "label": "Displacement Measurement Accuracy",
          "value": "Within ±0.5%"
        },
        {
          "label": "Deformation measurement range",
          "value": "0.2%～100%FS"
        },
        {
          "label": "Deformation Measurement Accuracy",
          "value": "Within ±0.5%"
        },
        {
          "label": "Testing Speed Range",
          "value": "0.5% ～ 100%FS"
        },
        {
          "label": "Testing Speed Accuracy",
          "value": "Within ±1% of the set value when the set value is <10%FS; Within ±0.1% of the set value when the set value is ≥10%FS"
        },
        {
          "label": "Main Unit Dimensions (mm)",
          "value": "900×500×2300"
        },
        {
          "label": "Power supply for main unit",
          "value": "220V±10%, 2000W"
        },
        {
          "label": "Mainframe weight",
          "value": "About 300kg"
        },
        {
          "label": "Belows Are Technical Parameters of Environmental Chamber",
          "value": "Temperature measured at the specimen (steel) over a 50 mm (2 in) gauge length. Not applicable within 15°C of ambient"
        },
        {
          "label": "Temperature Range",
          "value": "-40℃ — +150℃"
        },
        {
          "label": "Cooling Time",
          "value": "less than 40 min"
        },
        {
          "label": "Heating Time",
          "value": "less than 70 min"
        },
        {
          "label": "Temperature Gradient",
          "value": "≤2℃"
        },
        {
          "label": "Temperature Fluctuation",
          "value": "≤1℃"
        },
        {
          "label": "Temperature Deviation",
          "value": "±2℃"
        },
        {
          "label": "Temperature Controller Display Accuracy",
          "value": "≤0.1℃"
        },
        {
          "label": "Chamber Internal Dimensions (D × W × H mm)",
          "value": "240×200×600"
        },
        {
          "label": "Power Supply for environmental chamber",
          "value": "AC220V±10%,50-60Hz"
        }
      ],
      "hasManual": false,
      "hasVideo": false,
      "hasCAD": false,
      "isNew": false,
      "customized": [
        "Temperature range and dimensions of climate chamber can be customized",
        "Customizable test space",
        "Extensometer can be installed for precise strain measurement",
        "Compatible with various load cells for different force ranges",
        "Easy-Interchangeable grips for different test"
      ]
    }
  ]
};