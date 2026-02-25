/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2026-02-22 10:43:50
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2026-02-25 10:14:33
 * @FilePath: \EngWebsite\data\data.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// ==================== data/data.js ====================
window.ludaData = {
  // 设备分类数据（英文版）
  categories: [
    {
      id: "tensile",
      name: "Electronic Universal Material Testing Series",
      description: "High-precision electronic universal testers for plastics, rubber, textiles, metals, etc.",
      icon: "/assets/series/electronic-tensile-machine-icon.jpg"
    },
    {
      id: "universal",
      name: "Hydraulic Universal Tester Series",
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
      name: "Research Product Series",
      description: "High-stability precision instruments for universities and research institutes.",
      icon: "/assets/series/research-product-icon.png"
    },
    {
      id: "concrete",
      name: "Concrete Testing Series",
      description: "Full process concrete testing: mixing, curing, strength, etc.",
      icon: "/assets/series/concrete-test-icon.jpg"
    },
    {
      id: "cement",
      name: "Cement Instrument Series",
      description: "Cement consistency, setting time, soundness, strength testers.",
      icon: "/assets/series/cement-instrument-icon.png"
    },
    {
      id: "asphalt",
      name: "Asphalt and bitumen Instrument Series",
      description: "Penetration, softening point, ductility, Marshall stability testers.",
      icon: "/assets/series/asphalt-instrument-icon.png"
    },
    {
      id: "geotechnical",
      name: "Geotechnical & Aggregate Series",
      description: "Soil, sand, rock physical/mechanical testing for geotechnical engineering.",
      icon: "/assets/series/geotechnical-instrument-icon.jpg"
    }
  ],

  // 所有设备数据（仅列出大型试验机系列作为示例，实际可扩展）
  devices: [
      {
        "id": "P001",
        "name": "WAW-1000Pro Shock Absorber Universal Material Testing Machine 2",
        "model": "WAW-1000Pro",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/WAW-1000Pro.png",
        "image": "myImages/WAW-1000Pro-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
            "value": "250~550"
          },
          {
            "label": "Circular Sample clamping diameter (mm)",
            "value": "Φ14~Φ45"
          },
          {
            "label": "Flat Sample clamping diameter (mm)",
            "value": "0~40mm"
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
        "id": "P002",
        "name": "WAW Series S Electro-hydraulic Servo Steel Strand Special Testing Machine 4",
        "model": "WAW",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/WAW.png",
        "image": "myImages/WAW-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Maximum test force (KN)",
            "value": "600 1000"
          },
          {
            "label": "Effective measurement range",
            "value": "5%～100% 5%～100%"
          },
          {
            "label": "Accuracy of load indication value",
            "value": "Level 0.5 Level 0.5"
          },
          {
            "label": "Stretching space (mm)",
            "value": "1050 1050"
          },
          {
            "label": "Compressed Space (mm)",
            "value": "950 950"
          },
          {
            "label": "Specimen clamping diameter (mm)",
            "value": "Φ12~Φ16 Φ12~Φ16"
          },
          {
            "label": "Working piston stroke (mm)",
            "value": "200 200"
          },
          {
            "label": "Upper/lower pressure plate size (mm)",
            "value": "Φ220×Φ230 Φ220×Φ230"
          },
          {
            "label": "Tabletop rising speed (mm/min)",
            "value": "100 100"
          },
          {
            "label": "Moving beam lifting speed (mm/min)",
            "value": "240 240"
          },
          {
            "label": "Distance between two pillars (mm)",
            "value": "450 450"
          },
          {
            "label": "Supply Voltage",
            "value": "AC380V±10%,50-60Hz AC380V±10%,50-60Hz"
          },
          {
            "label": "Host size (mm)",
            "value": "1050×710×2910 1050×710×2910"
          },
          {
            "label": "Dimensions of force measuring cabinet(mm)",
            "value": "700×520×1630 700×520×1630"
          },
          {
            "label": "Weight (kg)",
            "value": "3700 3700"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P003",
        "name": "WAW Series Servo Steel Strand Special Testing Machine 6",
        "model": "WAW",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/WAW.png",
        "image": "myImages/WAW-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Maximum test force(KN)",
            "value": "600 1000"
          },
          {
            "label": "Measuring range and measuring range(KN)",
            "value": "50-600 100- 1000"
          },
          {
            "label": "Indication relative error",
            "value": "±1% ±1%"
          },
          {
            "label": "Maximum Tensile Test Space(mm)",
            "value": "1050 1050"
          },
          {
            "label": "Maximum compression test space(mm)",
            "value": "950 950"
          },
          {
            "label": "Working piston stroke(mm)",
            "value": "180 180"
          },
          {
            "label": "Upper and lower platen size(mm)",
            "value": "Φ223×Φ230 Φ223×Φ230"
          },
          {
            "label": "Distance between two pillars in tension and compression space(mm)",
            "value": "510 510"
          },
          {
            "label": "Maximum rise speed of table plate(mm/min)",
            "value": "60 60"
          },
          {
            "label": "Maximum lifting speed of moving beam(mm/min)",
            "value": "240 240"
          },
          {
            "label": "Total motor power(kW)",
            "value": "2.1 2.1"
          },
          {
            "label": "Main external dimensions(mm)",
            "value": "890×590×2700 890×590×2700"
          },
          {
            "label": "Dimension of force measuring cabinet(mm)",
            "value": "1000×700×850 1000×700×850"
          },
          {
            "label": "Overall weight(kg)",
            "value": "3200 3200"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P004",
        "name": "WAW Series S Electro-hydraulic Servo Universal Material Testing Machine 8",
        "model": "WAW",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/WAW.png",
        "image": "myImages/WAW-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Maximum test force(KN)",
            "value": "100 300 600 1000 2000"
          },
          {
            "label": "Effective measurement range",
            "value": "5%～100% 5%～100% 5%～100% 5%～100% 5%～100%"
          },
          {
            "label": "Accuracy of load indication value",
            "value": "Level 0.5 Level 0.5 Level 0.5 Level 0.5 Level 0.5"
          },
          {
            "label": "Stretching space (mm)",
            "value": "480 540 690 690 790"
          },
          {
            "label": "Compressed Space (mm)",
            "value": "480 480 620 620 720"
          },
          {
            "label": "Flat specimen clamping thickness(mm)",
            "value": "0-15 0-15 0-15 0-15 0-40"
          },
          {
            "label": "Round specimen clamping diameter(mm)",
            "value": "10-20 10-20 、20-32 13-26 、26-40 14-32 、30-50 20-40、40-60"
          },
          {
            "label": "Working piston stroke(mm)",
            "value": "180 180 180 180 250"
          },
          {
            "label": "Upper pressure plate size(mm)",
            "value": "Φ180 Φ180 Φ180 Φ220 Φ220"
          },
          {
            "label": "Lower pressure plate size(mm)",
            "value": "Φ180 Φ180 Φ180 Φ230 Φ230"
          },
          {
            "label": "Distance between the two columns of the pulling and pressing space(mm)",
            "value": "380 400 400 450 570"
          },
          {
            "label": "Maximum rise speed of table plate(mm/min)",
            "value": "100 100 100 100 100"
          },
          {
            "label": "Maximum lifting speed of moving beam(mm/min)",
            "value": "240 240 240 240 240"
          },
          {
            "label": "Total motor power(kW)",
            "value": "2.7 2.7 2.7 2.7 3.7"
          },
          {
            "label": "Supply Voltage",
            "value": "AC380V±10%,50-60Hz AC380V±10%,50-60Hz AC380V±10%,50-60Hz AC380V±10%,50-60Hz AC380V±10%,50-60Hz"
          },
          {
            "label": "Main external dimensions(mm)",
            "value": "730×600×1750 730×600×1840 890×590×2070 945×635×2100 1200×800×2940"
          },
          {
            "label": "Dimension of force measuring cabinet(mm)",
            "value": "700×520×1630 700×520×1630 700×520×1630 700×520×1630 700×520×1630"
          },
          {
            "label": "Weight(kg)",
            "value": "1500 1700 2400 2800 3500"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P005",
        "name": "WAW Series B Electro-hydraulic Servo Universal Material Testing Machine 10",
        "model": "WAW",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/WAW.png",
        "image": "myImages/WAW-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Maximum test force(KN)",
            "value": "100 300 600 1000 2000"
          },
          {
            "label": "Effective measurement range",
            "value": "10%～100% 10%～100% 10%～100% 10%～100% 10%～100%"
          },
          {
            "label": "Accuracy of load indication value",
            "value": "Level 1 Level 1 Level 1 Level 1 Level 1"
          },
          {
            "label": "Stretching space (mm)",
            "value": "480 480 690 690 695"
          },
          {
            "label": "Compressed Space (mm)",
            "value": "480 480 620 620 605"
          },
          {
            "label": "Flat specimen clamping thickness(mm)",
            "value": "0-15 0-15 0-15 0-40 0-50"
          },
          {
            "label": "Round specimen clamping diameter(mm)",
            "value": "10-20 10-20 、20-32 13-26 、26-40 14-32 、30-50 20-40 、40-70"
          },
          {
            "label": "Working piston stroke(mm)",
            "value": "120 120 170 170 180"
          },
          {
            "label": "Upper pressure plate size(mm)",
            "value": "Φ176 Φ180 Φ220 Φ220 Φ220"
          },
          {
            "label": "Lower pressure plate size(mm)",
            "value": "Φ176 Φ180 Φ230 Φ230 Φ230"
          },
          {
            "label": "Distance between two pillars in tension and compression space(mm)",
            "value": "420 420 510 510 610"
          },
          {
            "label": "Maximum rise speed of table plate(mm/min)",
            "value": "100 100 100 100 100"
          },
          {
            "label": "Maximum lifting speed of moving beam(mm/min)",
            "value": "240 240 240 240 240"
          },
          {
            "label": "Total motor power(kW)",
            "value": "1.3 1.3 2.1 2.1 3.55"
          },
          {
            "label": "Supply Voltage",
            "value": "AC380V±10%,50-60Hz AC380V±10%,50-60Hz AC380V±10%,50-60Hz AC380V±10%,50-60Hz AC380V±10%,50-60Hz"
          },
          {
            "label": "Main external dimensions(mm)",
            "value": "720×550×1660 730×600×1840 820×600×2000 940×650×2080 1200×800×2685"
          },
          {
            "label": "Dimension of force measuring cabinet(mm)",
            "value": "600×550×1400 600×550×1400 600×550×1400 600×550×1400 600×550×1400"
          },
          {
            "label": "Overall weight(kg)",
            "value": "1600 1800 2400 2400 4000"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P006",
        "name": "WEW Series Screen Display Universal Material Testing Machine 13",
        "model": "WEW",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/WEW.png",
        "image": "myImages/WEW-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Maximum test force(KN)",
            "value": "100 300 600 1000 2000"
          },
          {
            "label": "Range and measurement range(KN)",
            "value": "10～100 30～300 60～600 100～1000 200～2000"
          },
          {
            "label": "Relative error of value",
            "value": "±1% ±1% ±1% ±1% ±1%"
          },
          {
            "label": "Stretching space (mm)",
            "value": "480 480 690 690 790"
          },
          {
            "label": "Compressed Space (mm)",
            "value": "480 480 620 620 720"
          },
          {
            "label": "Flat specimen clamping thickness(mm)",
            "value": "0- 15 0- 15 0-15 0-40 0-40"
          },
          {
            "label": "Round specimen clamping diameter(mm)",
            "value": "10-20 10-20 20-32 13-26 26-40 14-32 30-50 20-40 40-60"
          },
          {
            "label": "Working piston stroke(mm)",
            "value": "120 120 170 170 180"
          },
          {
            "label": "Upper and lower platen size(mm)",
            "value": "Φ176/Φ176 Φ180/Φ180 Φ220/Φ230 Φ220/Φ230 Φ220/Φ230"
          },
          {
            "label": "Distance between two pillars in tension and compression space(mm)",
            "value": "420 420 510 510 610"
          },
          {
            "label": "Maximum rise speed of table plate(mm/min)",
            "value": "100 100 100 100 100"
          },
          {
            "label": "Maximum lifting speed of moving beam(mm/min)",
            "value": "240 240 240 240 240"
          },
          {
            "label": "Total motor power(Kw)",
            "value": "1.2 1.2 1.8 1.8 3.55"
          },
          {
            "label": "Main external dimensions(mm)",
            "value": "730×550×1660 730×600×1840 820×600×2000 940×650×2080 1200×800×2940"
          },
          {
            "label": "Dimension of force measuring cabinet(mm)",
            "value": "1000×700×850 1000×700×850 1000×700×850 1000×700×850 1000×700×850"
          },
          {
            "label": "Overall weight(kg)",
            "value": "1600 1800 2100 2400 4000"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P007",
        "name": "WE Series Digital Display Universal Material Testing Machine 15",
        "model": "WE",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/WE.png",
        "image": "myImages/WE-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Maximum test force(KN)",
            "value": "100 300 600 1000 2000"
          },
          {
            "label": "Range and measurement range(KN)",
            "value": "10～100 30～300 60～600 100～1000 200～2000"
          },
          {
            "label": "Relative error of value",
            "value": "±1% ±1% ±1% ±1% ±1%"
          },
          {
            "label": "Stretching space (mm)",
            "value": "480 480 690 690 695"
          },
          {
            "label": "Compressed Space (mm)",
            "value": "480 480 620 620 605"
          },
          {
            "label": "Flat specimen clamping thickness(mm)",
            "value": "0～15 0～15 0～15 0～40 0～50"
          },
          {
            "label": "Round specimen clamping diameter(mm)",
            "value": "10～20 10～20 20～32 13～26 26～40 14～32 30～50 20～40 40～70"
          },
          {
            "label": "Working piston stroke(mm)",
            "value": "120 120 170 170 180"
          },
          {
            "label": "Upper and lower platen size(mm)",
            "value": "Φ176×Φ176 Φ180×Φ180 Φ220×Φ230 Φ220×Φ230 Φ220×Φ230"
          },
          {
            "label": "Distance between two pillars in tension and compression space(mm)",
            "value": "420 420 510 510 610"
          },
          {
            "label": "Maximum rise speed of table plate(mm/min)",
            "value": "100 100 100 100 100"
          },
          {
            "label": "Maximum lifting speed of moving beam(mm/min)",
            "value": "240 240 240 240 240"
          },
          {
            "label": "Total motor power(kW)",
            "value": "1.3 1.3 1.8 1.8 3.55"
          },
          {
            "label": "Main external dimensions(mm)",
            "value": "730×550×1660 730×600×1840 820×600×2000 940×650×2080 1200×800×2685"
          },
          {
            "label": "Dimension of force measuring cabinet(mm)",
            "value": "530×500×1270 530×500×1270 530×500×1270 530×500×1270 530×500×1270"
          },
          {
            "label": "Overall weight(kg)",
            "value": "1600 1800 2100 2400 4000"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P008",
        "name": "WAW-1000Pro Shock Absorber Universal Material Testing Machine",
        "model": "WAW-1000Pro",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/WAW-1000Pro.png",
        "image": "myImages/WAW-1000Pro-Image.png",
        "description": "",
        "features": [],
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
            "value": "Within ±1% of the set value when the set value is <10%FS; Within ±0.1% of the set value when the set value is ≥10%FS"
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
        "id": "P009",
        "name": "EN ISO 6892-1 | ISO 7500 | EN 10002 | EN 10080 | EN 15630-1 | ASTM A370 |",
        "model": "EN",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
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
            "value": "Within ±1% of the set value when the set value is <10%FS; Within ±0.1% of the set value when the set value is ≥10%FS"
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
            "label": "Host weight",
            "value": "About 230kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P010",
        "name": "EN 15630-3 |EN ISO 7438 | EN ISO 15630-1 | ASTM A615 | ASTM A615M",
        "model": "EN",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [
          "The servo oil source control system used in this equipment can effectively reduce the equipment operation noise, reduce heat generation, extend the service life of the oil, and eliminate the need for cooling.",
          "The shock absorption system of this equipment can effectively reduce the vibration during the use of the equipment, making the experimental process safer and more comfortable.",
          "The screwless structure makes this equipment more rigid, more convenient for maintenance and lower failure rate compared to other universal testing machines."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Maximum test force",
            "value": "10KN 20KN"
          },
          {
            "label": "Accuracy grade",
            "value": "Level 1 (can be customized to 0.5 on request) Level 1 (can be customized to 0.5 on request)"
          },
          {
            "label": "Test force measurement range",
            "value": "1% to 100% FS throughout the whole process without sub-grade 1% to 100% FS throughout the whole process without sub-grade"
          },
          {
            "label": "Relative error of the test force value",
            "value": "±1% or less ±1% or less"
          },
          {
            "label": "Test force resolution",
            "value": "1/±300000 of the maximum test force throughout the resolution remains unchanged 1/±300000 of the maximum test force throughout the resolution remains unchanged"
          },
          {
            "label": "Deformation measurement range",
            "value": "0.2%～100%FS 0.2%～100%FS"
          },
          {
            "label": "Relative error of deformation value",
            "value": "Within ±0.5% of the indicated value Within ±0.5% of the indicated value"
          },
          {
            "label": "Deformation resolution",
            "value": "1/±300000 of the maximum deformation 1/±300000 of the maximum deformation"
          },
          {
            "label": "Relative error of displacement value",
            "value": "Within ±0.5% of the displayed value Within ±0.5% of the displayed value"
          },
          {
            "label": "Displacement resolution",
            "value": "0.025µm 0.025µm"
          },
          {
            "label": "Force control rate adjustment range",
            "value": "0.01~5%FS/S 0.01~5%FS/S"
          },
          {
            "label": "Relative error of force-controlled rate",
            "value": "Within ±1% of the set value Within ±1% of the set value"
          },
          {
            "label": "Deformation rate adjustment range",
            "value": "0.02~5%FS/S 0.02~5%FS/S"
          },
          {
            "label": "Relative error of deformation control rate",
            "value": "Within ±1% of the set value Within ±1% of the set value"
          },
          {
            "label": "Cross-beam speed adjustment range",
            "value": "0.01～500mm/min 0.01～500mm/min"
          },
          {
            "label": "Control range of constant force, constant deformation and constant displacement",
            "value": "0.5%～100%FS 0.5%～100%FS"
          },
          {
            "label": "Control accuracy of constant force, constant deformation and constant displacement",
            "value": "Within ±1% of the set value when the set value is <10%FS; Within ±0.1% of the set value when the set value is ≥10%FS Within ±1% of the set value when the set value is <10%FS; Within ±0.1% of the set value when the set value is ≥10%FS"
          },
          {
            "label": "Effective tensile space (without jig)",
            "value": "800mm 800mm"
          },
          {
            "label": "Effective test width",
            "value": "400mm 400mm"
          },
          {
            "label": "Host size",
            "value": "800 × 450 × 1600 (mm) 800 × 450 × 1600 (mm)"
          },
          {
            "label": "Power supply",
            "value": "220V±10%, 400W 220V±10%, 400W"
          },
          {
            "label": "Host weight",
            "value": "About 190kg About 190kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P011",
        "name": "WAW Series S Electro-hydraulic Servo Steel Strand Special Testing Machine",
        "model": "WAW",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/WAW.png",
        "image": "myImages/WAW-Image.png",
        "description": "",
        "features": [],
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
            "label": "Weight",
            "value": "About 80kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P012",
        "name": "ASTM E8 | UNI 7676 (Wire Strands) |EN ISO 7438 | EN ISO 15630-1 | ASTM A615 | ASTM A615M",
        "model": "ASTM",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/ASTM.png",
        "image": "myImages/ASTM-Image.png",
        "description": "",
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
        "id": "P013",
        "name": "WAW Series Servo Steel Strand Special Testing Machine",
        "model": "WAW",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/WAW.png",
        "image": "myImages/WAW-Image.png",
        "description": "",
        "features": [],
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
            "label": "Weight",
            "value": "About 90kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P014",
        "name": "ASTM E8 | UNI 7676 (Wire Strands) |EN ISO 7438 | EN ISO 15630-1 | ASTM A615 | ASTM A615M",
        "model": "ASTM",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/ASTM.png",
        "image": "myImages/ASTM-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
            "label": "Host structure",
            "value": "Screw electric adjustment"
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
        "id": "P015",
        "name": "WAW series electro-hydraulic servo steel strand special test machine is mainly used for the tensile test of steel strand, can do the tensile, compression and other tests of metal materials; equipped with appropriate fixtures, can also be used to conduct the tensile, compression, bending and shear tests of non-metallic materials.",
        "model": "WAW",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/WAW.png",
        "image": "myImages/WAW-Image.png",
        "description": "",
        "features": [
          "The machine adopts high precision displacement sensor, accurate data.",
          "Adopt high precision electronic extensometer, accurate and effective measurement of deformation value.",
          "Adopt high-resolution acquisition system, fast data acquisition speed and high accuracy.",
          "Hydraulic control adopts integrated oil servo control system, which can automatically lift, automatically position,automatically set the mark, realize equal force, equal displacement and mixed control."
        ],
        "standards": [],
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
        "id": "P016",
        "name": "WAW Series S Electro-hydraulic Servo Universal Material Testing Machine",
        "model": "WAW",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/WAW.png",
        "image": "myImages/WAW-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Maximum test force",
            "value": "2000KN 3000KN"
          },
          {
            "label": "Measurement accuracy range",
            "value": "5%- 100% 5%- 100%"
          },
          {
            "label": "Indication accuracy",
            "value": "≤±0.5% ≤±0.5%"
          },
          {
            "label": "Loading rate",
            "value": "0.3Mpa-1.0MPa 0.3Mpa-1.0MPa"
          },
          {
            "label": "Loading rate accuracy",
            "value": "±5% ±5%"
          },
          {
            "label": "Distance between upper and lower platen",
            "value": "330mm 330mm"
          },
          {
            "label": "Upper and lower bearing plate diameter",
            "value": "Φ280/Φ320mm Φ280/Φ320mm"
          },
          {
            "label": "Piston maximum stroke",
            "value": "120mm 120mm"
          },
          {
            "label": "Piston diameter",
            "value": "Φ250mm Φ310mm"
          },
          {
            "label": "Oil maximum pressure",
            "value": "40MPa 40MPa"
          },
          {
            "label": "Dimensions",
            "value": "1100x510x1510mm 1250x550x1510mm"
          },
          {
            "label": "Weight",
            "value": "1200kg 2000kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P017",
        "name": "EN ISO 6892-1 | ISO 7500 | EN 10002 | EN 10080 | EN 15630-1 | ASTM A370 |",
        "model": "EN",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Test force",
            "value": "2000kN 3000kN"
          },
          {
            "label": "Loading rate",
            "value": "0.3～1.0MPa,1.0 or above can be entered manually 0.3～1.0MPa,1.0 or above can be entered manually"
          },
          {
            "label": "Effective measurement range",
            "value": "10% to 100% 10% to 100%"
          },
          {
            "label": "Accuracy of the load indication",
            "value": "Better than ±1% of indicated value Better than ±1% of indicated value"
          },
          {
            "label": "Distance between upper and lower platen",
            "value": "320mm 320mm"
          },
          {
            "label": "Pressure plate size",
            "value": "260×260mm 320×320mm"
          },
          {
            "label": "Piston stroke",
            "value": "50mm 50mm"
          },
          {
            "label": "Piston diameter",
            "value": "Φ250mm Φ310mm"
          },
          {
            "label": "Oil pressure",
            "value": "40MPa 40MPa"
          },
          {
            "label": "Total power",
            "value": "1.1kW 1.8kW"
          },
          {
            "label": "Power supply",
            "value": "AC380V±10%, 50-60Hz AC380V±10%, 50-60Hz"
          },
          {
            "label": "Main unit dimensions",
            "value": "580×500×1400mm 550×650×1750mm"
          },
          {
            "label": "Overall dimension of control cabinet",
            "value": "560×550×1310mm 560×550×1310mm"
          },
          {
            "label": "Weight",
            "value": "900kg 1300kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P018",
        "name": "EN 15630-3 |EN ISO 7438 | EN ISO 15630-1 | ASTM A615 | ASTM A615M",
        "model": "EN",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [
          "The machine adopts high precision pressure displacement sensor, with high sensitive digital valve, fast response speed, high resolution.",
          "Hydraulic control adopts integrated oil servo control system, easy to operate, stable and reliable.",
          "With intelligent prompting working state,servo automatic compensation, positioning, pressure-holding and other functions.",
          "The test space can be adjusted at will by moving the beam, and different test pieces can be tested.",
          "The range can be automatically switched, and the range is automatically selected according to the load bearing size of the sample.",
          "With maximum load peak hold function, overload protection and position over-limit protection, safer to use.",
          "With automatic data storage and automatic calculation and printing of all test results."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Test force",
            "value": "2000kN 3000kN"
          },
          {
            "label": "Effective measurement range",
            "value": "10% ~100% 10% ~100%"
          },
          {
            "label": "Accuracy of load indication",
            "value": "Better than ±1% of indicated value Better than ±1% of indicated value"
          },
          {
            "label": "The distance between the upper and lower platen",
            "value": "320mm 330mm"
          },
          {
            "label": "Pressure plate size",
            "value": "260×260mm 320×320mm"
          },
          {
            "label": "Piston stroke",
            "value": "50mm 50mm"
          },
          {
            "label": "Piston diameter",
            "value": "Φ250mm Φ310mm"
          },
          {
            "label": "Oil pressure",
            "value": "40MPa 40MPa"
          },
          {
            "label": "Total power",
            "value": "1.1kW 1.8kW"
          },
          {
            "label": "Power supply",
            "value": "AC380V,50-60Hz AC380V,50-60Hz"
          },
          {
            "label": "Main unit dimensions",
            "value": "580×500×1400mm 550×560×1750mm"
          },
          {
            "label": "Overall dimension of control cabinet",
            "value": "510×540×1470mm 510×540×1470mm"
          },
          {
            "label": "Weight",
            "value": "900kg 1200kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P019",
        "name": "WAW Series B Electro-hydraulic Servo Universal Material Testing Machine",
        "model": "WAW",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/WAW.png",
        "image": "myImages/WAW-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
        "id": "P020",
        "name": "EN ISO 6892-1 | ISO 7500 | EN 10002 | EN 10080 | EN 15630-1 | ASTM A370 |",
        "model": "EN",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Compressive strength test",
            "value": "Compressive strength test Flexural strength test Flexural strength test"
          },
          {
            "label": "Maximum test force",
            "value": "300kN Maximum test force 10kN"
          },
          {
            "label": "Constant loading rate",
            "value": "0.3~9.9kN/s Constant loading rate 0.05kN/s"
          },
          {
            "label": "Upper and lower platen spacing",
            "value": "185mm Section side length 40mm"
          },
          {
            "label": "Pressure plate diameter",
            "value": "Φ120mm Span between supports 100mm"
          },
          {
            "label": "Piston maximum stroke",
            "value": "90mm Piston maximum stroke 70mm"
          },
          {
            "label": "Indication relative error (accuracy)",
            "value": "Indication relative error (accuracy) ±0.5% ±0.5%"
          },
          {
            "label": "Indication repeatability relative error",
            "value": "Indication repeatability relative error 0.5% 0.5%"
          },
          {
            "label": "Return to zero relative error",
            "value": "Return to zero relative error ±0.1% ±0.1%"
          },
          {
            "label": "The relative resolution of the force value display device of the test machine",
            "value": "The relative resolution of the force value display device of the test machine 0.5% 0.5%"
          },
          {
            "label": "Zero drift",
            "value": "Zero drift ≤±0.1% ≤±0.1%"
          },
          {
            "label": "Power supply",
            "value": "Power supply 220V(±10%),1.5kW 220V(±10%),1.5kW"
          },
          {
            "label": "Dimensions",
            "value": "Dimensions 1300×480×1340mm 1300×480×1340mm"
          },
          {
            "label": "Weight",
            "value": "Weight 500kg 500kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P021",
        "name": "EN 15630-3 |EN ISO 7438 | EN ISO 15630-1 | ASTM A615 | ASTM A615M",
        "model": "EN",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [
          "The tester adopts four columns and two wire rod frame,\"well\" structure, stronger steel,more stable.",
          "The machine adopts three closed shields, effective protection against test piece debris, high safety performance.",
          "From the previous semi-circular jaws to triangular hydraulic jaws, so that the test piece clamping more tightly, not easy to loosen.",
          "Standard with upper/lower pressure plate and bending support,can do compression, bending test, more functional, more comprehensive.",
          "Oil cylinder is placed under, no oil leakage, stable operation.",
          "Adopt high precision photoelectric encoder, higher displacement accuracy and more stable.",
          "With windows system control software,automatic storage of data and automatic calculation of test results.",
          "Servo measurement and control system, can achieve constant speed, constant loading, constant force value, more stable control.",
          "The machine adopts high-precision digital servo valve to control loading, with higher precision and more stable data.",
          "Oil source control cabinet design humanized, more ergonomic, more convenient operation."
        ],
        "standards": [],
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
            "label": "The relative resolution of the force value display device of the test machine",
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
        "isNew": false
      },
      {
        "id": "P022",
        "name": "WEW Series Screen Display Universal Material Testing Machine",
        "model": "WEW",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/WEW.png",
        "image": "myImages/WEW-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Compressive strength test",
            "value": "Compressive strength test Flexural strength test Flexural strength test"
          },
          {
            "label": "Maximum test force",
            "value": "300kN Maximum test force 10kN"
          },
          {
            "label": "Constant loading rate",
            "value": "0.3~9.9kN/s Constant loading rate 0.05kN/s"
          },
          {
            "label": "Upper and lower platen spacing",
            "value": "190mm Section side length 40mm"
          },
          {
            "label": "Pressure plate diameter",
            "value": "Φ120mm Span between supports 100mm"
          },
          {
            "label": "Piston maximum stroke",
            "value": "90mm Piston maximum stroke 70mm"
          },
          {
            "label": "Indication relative error (accuracy)",
            "value": "Indication relative error (accuracy) ±1.0% ±1.0%"
          },
          {
            "label": "Indication repeatability relative error",
            "value": "Indication repeatability relative error 1.0% 1.0%"
          },
          {
            "label": "Return to zero relative error",
            "value": "Return to zero relative error ±0.1% ±0.1%"
          },
          {
            "label": "The relative resolution of the force value display device of the test machine",
            "value": "The relative resolution of the force value display device of the test machine 0.5% 0.5%"
          },
          {
            "label": "Power supply",
            "value": "Power supply 380V (±10%) ,0.55kW 380V (±10%) ,0.55kW"
          },
          {
            "label": "Dimensions",
            "value": "Dimensions 1200×490×1350mm 1200×490×1350mm"
          },
          {
            "label": "Weight",
            "value": "Weight 400kg 400kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P023",
        "name": "EN ISO 6892-1 | ISO 7500 | EN 10002 | EN 10080 | EN 15630-1 | ASTM A370 |",
        "model": "EN",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
        "id": "P024",
        "name": "EN 15630-3 |EN ISO 7438 | EN ISO 15630-1 | ASTM A615 | ASTM A615M",
        "model": "EN",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [
          "The machine adopts high precision displacement sensor, the data is accurate.",
          "Adopt high resolution collection system,fast data collection speed,high accuracy.",
          "Adopt the design of hydraulic manual loading, computer display, main body and force meter subposition, easy operation and smooth force addition."
        ],
        "standards": [],
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
        "id": "P025",
        "name": "WE Series Digital Display Universal Material Testing Machine",
        "model": "WE",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/WE.png",
        "image": "myImages/WE-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
        "id": "P026",
        "name": "EN ISO 6892-1 | ISO 7500 | EN 10002 | EN 10080 | EN 15630-1 | ASTM A370 |",
        "model": "EN",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
        "id": "P027",
        "name": "EN 15630-3 |EN ISO 7438 | EN ISO 15630-1 | ASTM A615 | ASTM A615M",
        "model": "EN",
        "category": "Hydraulic Universal Tester Series",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
            "label": "Initial Load after Placing the Sleeper",
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
            "label": "Test space:Distance between Upper and Lower Supports",
            "value": "430 mm"
          },
          {
            "label": "Test space: Distance between Four Columns",
            "value": "820, 900mm"
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
            "value": "Related Parameters of Hydraulic Pump Station"
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
        "id": "P028",
        "name": "WDW-100 Electronic Universal Material Testing Machine 18",
        "model": "WDW-100",
        "category": "ELECTRONIC UNIVERSAL MATERIAL TESTING MACHINE 17",
        "thumbnail": "myImages/WDW-100.png",
        "image": "myImages/WDW-100-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
            "label": "Test Space",
            "value": "2200mm(the maximum stretching distance between the left and right chucks)"
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
        "id": "P029",
        "name": "WDW-50 Electronic Universal Material Testing Machine 20",
        "model": "WDW-50",
        "category": "ELECTRONIC UNIVERSAL MATERIAL TESTING MACHINE 17",
        "thumbnail": "myImages/WDW-50.png",
        "image": "myImages/WDW-50-Image.png",
        "description": "",
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
        "id": "P030",
        "name": "WDW-5 Electronic Universal Material Testing Machine 24",
        "model": "WDW-5",
        "category": "ELECTRONIC UNIVERSAL MATERIAL TESTING MACHINE 17",
        "thumbnail": "myImages/WDW-5.png",
        "image": "myImages/WDW-5-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
        "id": "P031",
        "name": "WDW-S10 Electronic Universal Material Testing Machine 26",
        "model": "WDW-S10",
        "category": "ELECTRONIC UNIVERSAL MATERIAL TESTING MACHINE 17",
        "thumbnail": "myImages/WDW-S10.png",
        "image": "myImages/WDW-S10-Image.png",
        "description": "",
        "features": [],
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
        "id": "P032",
        "name": "WDW-S05 Electronic Universal Material Testing Machine(Special model for cement mortar) 28",
        "model": "WDW-S05",
        "category": "ELECTRONIC UNIVERSAL MATERIAL TESTING MACHINE 17",
        "thumbnail": "myImages/WDW-S05.png",
        "image": "myImages/WDW-S05-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
        "id": "P033",
        "name": "WDW-100 Electronic Universal Material Testing Machine",
        "model": "WDW-100",
        "category": "ELECTRONIC UNIVERSAL MATERIAL TESTING MACHINE 17",
        "thumbnail": "myImages/WDW-100.png",
        "image": "myImages/WDW-100-Image.png",
        "description": "",
        "features": [
          "Safety position and experimental position height arbitrary lock.",
          "Automatic protection when exceeding the maximum load,software limit and electronic limit double protection."
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
        "id": "P034",
        "name": "WDW-50 Electronic Universal Material Testing Machine",
        "model": "WDW-50",
        "category": "ELECTRONIC UNIVERSAL MATERIAL TESTING MACHINE 17",
        "thumbnail": "myImages/WDW-50.png",
        "image": "myImages/WDW-50-Image.png",
        "description": "",
        "features": [
          "Safety position and experimental position height arbitrary lock.",
          "Automatic protection when exceeding the maximum load, software limit and electronic limit double protection.",
          "Safety position and experimental position height arbitrary lock.",
          "Automatic protection when exceeding the maximum load, software limit and electronic limit double protection."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Working room size",
            "value": "360mm×400mm×300mm"
          },
          {
            "label": "Power supply",
            "value": "Power supply"
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
        "id": "P035",
        "name": "WDW-5 Electronic Universal Material Testing Machine",
        "model": "WDW-5",
        "category": "ELECTRONIC UNIVERSAL MATERIAL TESTING MACHINE 17",
        "thumbnail": "myImages/WDW-5.png",
        "image": "myImages/WDW-5-Image.png",
        "description": "",
        "features": [
          "Safety position and experimental position height arbitrary lock.",
          "Automatic protection when exceeding the maximum load, software limit and electronic limit double protection.",
          "Microcomputer control, real-time display of graphs, automatic generation of reports."
        ],
        "standards": [],
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
            "value": "300mm"
          },
          {
            "label": "Roller pressure",
            "value": "0~20kN,can be adjusted arbitrarily"
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
        "id": "P036",
        "name": "WDW-S10 Electronic Universal Material Testing Machine",
        "model": "WDW-S10",
        "category": "ELECTRONIC UNIVERSAL MATERIAL TESTING MACHINE 17",
        "thumbnail": "myImages/WDW-S10.png",
        "image": "myImages/WDW-S10-Image.png",
        "description": "",
        "features": [
          "Single-arm design, cementitious sand special models.",
          "Safety position and experimental position height arbitrary lock.",
          "Automatic protection when exceeding the maximum load, software limit and electronic limit double protection.",
          "One button automatic operation, full touch screen control,can realize positioning and automatic return."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Rolling speed of roller",
            "value": "42±1 times/ min (one way)"
          },
          {
            "label": "Test trolley movement distance",
            "value": "230±10mm"
          },
          {
            "label": "Roller and rubber hardness (international standard hardness)",
            "value": "78±2 (At 60° C)"
          },
          {
            "label": "Contact pressure between roller and test die",
            "value": "0.7±0.05MPa (60° C), adjustable to 0.8-0.9MPa"
          },
          {
            "label": "Trial mold size",
            "value": "300×300×50 (standard), which can be used for rutting test on specimens with a thickness of 30-100mm (Can be customized upon request)"
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
            "value": "Room temperature 60° C, control accuracy ± 0.5"
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
        "id": "P037",
        "name": "WDW-S05 Electronic Universal Material Testing Machine(Special model for cement mortar)",
        "model": "WDW-S05",
        "category": "ELECTRONIC UNIVERSAL MATERIAL TESTING MACHINE 17",
        "thumbnail": "myImages/WDW-S05.png",
        "image": "myImages/WDW-S05-Image.png",
        "description": "",
        "features": [
          "Single-arm design, cementitious sand special models.",
          "Safety position and experimental position height arbitrary lock.",
          "Automatic protection when exceeding the maximum load, software limit and electronic limit double protection.",
          "One button automatic operation,full touch screen control,can realize positioning and automatic return."
        ],
        "standards": [],
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
            "value": "Shielded cold and hot balance pressurized circulation system"
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
        "id": "P038",
        "name": "TSY-2000A Constant Loading Pressure Testing Machine(Large Frame) Jinhua Type 31",
        "model": "TSY-2000A",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/TSY-2000A.png",
        "image": "myImages/TSY-2000A-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Extension speed",
            "value": "50±2.5mm/min,10±0.5mm/min"
          },
          {
            "label": "Test temperature",
            "value": "2~50℃ (adjust by yourself according to actual needs)"
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
        "id": "P039",
        "name": "YAW-2000H Constant Loading Pressure Testing Machine 33",
        "model": "YAW-2000H",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/YAW-2000H.png",
        "image": "myImages/YAW-2000H-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
            "label": "Specimen size",
            "value": "Ф101.6mm"
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
            "value": "60kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P040",
        "name": "YAW Series Constant Loading Pressure Testing Machine(Automatic) White Machine 35",
        "model": "YAW",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/YAW.png",
        "image": "myImages/YAW-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
            "value": "Power supply, motor,voltage380V, heating part 220V (that is, the power supply part should be three-phase four-wire system, the total power supply should be 380V plus 220V neutral wire)"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P041",
        "name": "TSY Series Constant Loading Pressure Testing Machine(Automatic) 37",
        "model": "TSY",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/TSY.png",
        "image": "myImages/TSY-Image.png",
        "description": "",
        "features": [],
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
            "value": "Ambient temperature -10° C ~+30° C, relative temperature <85%"
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
        "id": "P042",
        "name": "TSY Series Electro-hydraulic Pressure Testing Machine(Electric Screw) 39",
        "model": "TSY",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/TSY.png",
        "image": "myImages/TSY-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Heating power",
            "value": "2.8kW"
          },
          {
            "label": "Usage Environment",
            "value": "Temperature 10~40℃, relative humidity ≤80%, no vibration and no corrosive or flammable gas"
          },
          {
            "label": "Working temperature",
            "value": "163±0.5° C (Maximum working temperature 200° C)"
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
            "value": "±0.5℃"
          },
          {
            "label": "Disc rack speed",
            "value": "5.5 rpm"
          },
          {
            "label": "Disc diameter",
            "value": "400mm"
          },
          {
            "label": "Studio size",
            "value": "550×450×550mm"
          },
          {
            "label": "Dimensions",
            "value": "850×600×1000mm"
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
        "id": "P043",
        "name": "TSY Series Electro-Hydraulic Pressure Testing Machine 41",
        "model": "TSY",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/TSY.png",
        "image": "myImages/TSY-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
            "value": "163±0.5° C"
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
            "value": "2800±5%r/min"
          },
          {
            "label": "Air volume",
            "value": "4L/min"
          },
          {
            "label": "Nozzle diameter",
            "value": "1mm"
          },
          {
            "label": "Sample bottle size (diameter × diameter × height)",
            "value": "Φ32×Φ63×140 mm"
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
            "value": "450×450×420mm"
          },
          {
            "label": "Dimensions",
            "value": "680×800×1270mm"
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
        "id": "P044",
        "name": "YAW-300S Constant Loading Pressure Testing Machine 45",
        "model": "YAW-300S",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/YAW-300S.png",
        "image": "myImages/YAW-300S-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
        "id": "P045",
        "name": "YAW-300 Constant Loading Pressure Testing Machine 49",
        "model": "YAW-300",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/YAW-300.png",
        "image": "myImages/YAW-300-Image.png",
        "description": "",
        "features": [],
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
        "id": "P046",
        "name": "TSY-300 Electro-hydraulic Compression Testing Machine 51",
        "model": "TSY-300",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/TSY-300.png",
        "image": "myImages/TSY-300-Image.png",
        "description": "",
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
        "id": "P047",
        "name": "TSY-300 Electro-hydraulic Flexural And Compression Testing Machine 53",
        "model": "TSY-300",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/TSY-300.png",
        "image": "myImages/TSY-300-Image.png",
        "description": "",
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
        "id": "P048",
        "name": "TSY-1000S Constant Load Manhole Cover Special Pressure Testing Machine 55",
        "model": "TSY-1000S",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/TSY-1000S.png",
        "image": "myImages/TSY-1000S-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
        "id": "P049",
        "name": "TSY-2000A Constant Loading Pressure Testing Machine(Large Frame) Jinhua Type",
        "model": "TSY-2000A",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/TSY-2000A.png",
        "image": "myImages/TSY-2000A-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Temperature setting",
            "value": "0-99.9℃ adjustable, display precision 0.1℃ (factory setting is 25℃)"
          },
          {
            "label": "Time setting",
            "value": "0-99.9s adjustable, display precision 0.1s (factory setting is 5s)"
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
        "id": "P050",
        "name": "ASTM C39 | BS 1610 | NF P18-411 | AASHTO T22 | DIN 51220 | BS 812-110 | 812-111 | EN 772-1 | ASTM C140 | ASTM C1314 | EN 13412",
        "model": "ASTM",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/ASTM.png",
        "image": "myImages/ASTM-Image.png",
        "description": "",
        "features": [
          "The hydraulic pump adopts an axial five-piston ultra-high pressure pump, which works smoothly and has low noise;",
          "The control valve adopts high-precision digital micro-flow valve with high control precision;",
          "The sensor adopts a pressure sensor, which has good reliability;",
          "The principle of automatic loading is adopted to strengthen the control of the loading rate."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Condenser cooling way",
            "value": "Air-cooling Air-cooling Air-cooling"
          },
          {
            "label": "Number of test pieces",
            "value": "28 PCS 16 PCS 10 PCS"
          },
          {
            "label": "Specimen size",
            "value": "100×100×400mm,the temperature measuring parts are of the same size, and there are temperature measuring holes in the middle. 100×100×400mm,the temperature measuring parts are of the same size, and there are temperature measuring holes in the middle. 100×100×400mm,the temperature measuring parts are of the same size, and there are temperature measuring holes in the middle."
          },
          {
            "label": "Freezing end time/test piece center temperature",
            "value": "1.5～2.5h/-17±2℃（New standard -18±2℃） 1.5～2.5h/-17±2℃（New standard -18±2℃） 1.5～2.5h/-17±2℃（New standard -18±2℃）"
          },
          {
            "label": "Melting end time/test piece center temperature",
            "value": "1.0～2.0h/8±2℃（New standard 5±2℃） 1.0～2.0h/8±2℃（New standard 5±2℃） 1.0～2.0h/8±2℃（New standard 5±2℃）"
          },
          {
            "label": "Freeze-thaw cycle",
            "value": "2.5～4h,the melting time is not less than 1/4 freeze-thaw cycle. 2.5～4h,the melting time is not less than 1/4 freeze-thaw cycle. 2.5～4h,the melting time is not less than 1/4 freeze-thaw cycle."
          },
          {
            "label": "The temperature difference between the center and the surface of the specimen",
            "value": "＜28℃ ＜28℃ ＜28℃"
          },
          {
            "label": "Number of cycles",
            "value": "The standard is 300 times, and the number of cycles can be adjusted. The standard is 300 times, and the number of cycles can be adjusted. The standard is 300 times, and the number of cycles can be adjusted."
          },
          {
            "label": "Temperature recorder",
            "value": "LCD touch screen controller LCD touch screen controller LCD touch screen controller"
          },
          {
            "label": "Freeze-thaw cycle medium",
            "value": "-45°C antifreeze (1:1 mixed with water) -45°C antifreeze (1:1 mixed with water) -45°C antifreeze (1:1 mixed with water)"
          },
          {
            "label": "Amount of freeze-thaw cycle media charged",
            "value": "90kg 60kg 30kg"
          },
          {
            "label": "Refrigerator compressor",
            "value": "Complete inlet closure 8.5HP Complete inlet closure 5HP Complete inlet closure 3HP"
          },
          {
            "label": "Specimen barrel size",
            "value": "115×115×490mm 115×115×490mm 115×115×490mm"
          },
          {
            "label": "Heating power",
            "value": "9kW 6kW 4.5kW"
          },
          {
            "label": "Maximum operating power",
            "value": "11kW 8kW 6kW"
          },
          {
            "label": "Voltage",
            "value": "AC380V±10% AC380V±10% AC380V±10%"
          },
          {
            "label": "Overall dimensions",
            "value": "1870×1370×1000mm 1870×1000×1000mm 1620×1000×1000mm"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P051",
        "name": "YAW-2000H Constant Loading Pressure Testing Machine",
        "model": "YAW-2000H",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/YAW-2000H.png",
        "image": "myImages/YAW-2000H-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
        "isNew": false
      },
      {
        "id": "P052",
        "name": "YAW Series Constant Loading Pressure Testing Machine(Automatic) White Machine",
        "model": "YAW",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/YAW.png",
        "image": "myImages/YAW-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
        "isNew": false
      },
      {
        "id": "P053",
        "name": "EN 12390-4 | BS 1881 | ASTM C39 | BS 1610 | NF P18-411 | AASHTO T22 | DIN 51220 | BS 812-110 | 812-111 | EN 772-1 | ASTM C140 | ASTM C1314 | EN 13412",
        "model": "EN",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [
          "The frame adopts the whole machine casting frame structure;",
          "Imported servo oil source;",
          "High-precision digital micro valve;",
          "Imported servo motor oil source, the oil temperature is not too high;",
          "The sensor uses a high-precision load sensor to ensure data accuracy. The control valve has a force closed-loop control function, which can realize equal load rate loading or equal stress rate loading, with high control precision and good reliability."
        ],
        "standards": [],
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
        "isNew": false
      },
      {
        "id": "P054",
        "name": "TSY Series Constant Loading Pressure Testing Machine(Automatic)",
        "model": "TSY",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/TSY.png",
        "image": "myImages/TSY-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Temperature measurement accuracy",
            "value": "±1℃ ±1℃"
          },
          {
            "label": "Temperature control",
            "value": "20±2℃ 20±2℃"
          },
          {
            "label": "Humidity control",
            "value": "≥95%RH ≥95%RH"
          },
          {
            "label": "Voltage",
            "value": "380V 380V"
          },
          {
            "label": "Supply frequency",
            "value": "50-60Hz 50-60Hz"
          },
          {
            "label": "Refrigerator power",
            "value": "3000W 4000W"
          },
          {
            "label": "Heater power",
            "value": "9000W 9000W"
          },
          {
            "label": "Maximum control area",
            "value": "50m3 100m3"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P055",
        "name": "ASTM C39 | BS 1610 | NF P18-411 | AASHTO T22 | DIN 51220 | BS 812-110 | 812-111 | EN 772-1 | ASTM C140 | ASTM C1314 | EN 13412",
        "model": "ASTM",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/ASTM.png",
        "image": "myImages/ASTM-Image.png",
        "description": "",
        "features": [
          "The hydraulic pump adopts an axial five-piston ultra-high pressure pump, which works smoothly and has low noise;",
          "The control valve adopts high-precision digital micro-flow valve with high control precision;",
          "The sensor adopts a pressure sensor, which has good reliability;",
          "Adopt the principle of automatic racking to strengthen the control of the loading rate."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Temperature measurement accuracy",
            "value": "±1℃ ±1℃"
          },
          {
            "label": "Temperature control",
            "value": "20±2℃ 20±2℃"
          },
          {
            "label": "Humidity control",
            "value": "≥95%RH ≥95%RH"
          },
          {
            "label": "Voltage",
            "value": "380V 380V"
          },
          {
            "label": "Supply frequency",
            "value": "50-60Hz 50-60Hz"
          },
          {
            "label": "Refrigerator power",
            "value": "3000W 4000W"
          },
          {
            "label": "Heater power",
            "value": "9000W 9000W"
          },
          {
            "label": "Maximum control area",
            "value": "50m3 100m3"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P056",
        "name": "TSY Series Electro-hydraulic Pressure Testing Machine(Electric Screw)",
        "model": "TSY",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/TSY.png",
        "image": "myImages/TSY-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Temperature control",
            "value": "15～25±2℃(adjust)"
          },
          {
            "label": "Temperature controller error",
            "value": "±1℃"
          },
          {
            "label": "Humidity control",
            "value": "50～80±5％RH(adjust)"
          },
          {
            "label": "Maximum control area",
            "value": "10m2"
          },
          {
            "label": "Heating power",
            "value": "1500W"
          },
          {
            "label": "Refrigerator power",
            "value": "1500W"
          },
          {
            "label": "Dehumidification power",
            "value": "500W"
          },
          {
            "label": "Voltage",
            "value": "AC220V±10%"
          },
          {
            "label": "Wall-mounted controller installation size",
            "value": "450×200×550 mm"
          },
          {
            "label": "Dimensions of 1.5 P air conditioner",
            "value": "840×540×320mm"
          },
          {
            "label": "Dimensions of dehumidifier",
            "value": "500×400×700mm"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P057",
        "name": "ASTM C39 | BS 1610 | NF P18-411 | AASHTO T22 | DIN 51220 | BS 812-110 | 812-111 | EN 772-1 | ASTM C140 | ASTM C1314",
        "model": "ASTM",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/ASTM.png",
        "image": "myImages/ASTM-Image.png",
        "description": "",
        "features": [
          "With load digital display function;",
          "The maximum load hold function;",
          "Power-off data protection function;",
          "The hydraulic pump is an axial five-piston ultra-high pressure pump, which is directly driven by an electric motor;",
          "There is a safety valve on the oil delivery valve,which can overflow when overloaded, which plays a safety role;",
          "The hand wheel of the oil delivery valve can adjust the oil intake of the oil cylinder to achieve the required loading rate."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Temperature controller error",
            "value": "±1℃ ±1℃"
          },
          {
            "label": "Temperature control",
            "value": "23±2℃(20-25±2℃ adjust) 23±2℃(20-25±2℃ adjust)"
          },
          {
            "label": "Humidity control",
            "value": "50%RH±5%(50%-70%RH±5% adjust) 50%RH±5%(50%-70%RH±5% adjust)"
          },
          {
            "label": "Voltage",
            "value": "380V 380V"
          },
          {
            "label": "Refrigerator/Dehumidification power",
            "value": "2500W 4000W"
          },
          {
            "label": "Heating power",
            "value": "4500W 7500W"
          },
          {
            "label": "Control volume",
            "value": "50m³ 100m³"
          },
          {
            "label": "Weight",
            "value": "200kg 200kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P058",
        "name": "TSY Series Electro-Hydraulic Pressure Testing Machine",
        "model": "TSY",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/TSY.png",
        "image": "myImages/TSY-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Temperature control instrument error",
            "value": "±1℃"
          },
          {
            "label": "Temperature control",
            "value": "20±2℃"
          },
          {
            "label": "Humidity control",
            "value": "≥95%"
          },
          {
            "label": "Voltage",
            "value": "AC220V±10%"
          },
          {
            "label": "Power frequency",
            "value": "50-60Hz"
          },
          {
            "label": "Refrigerator power",
            "value": "1～4 thousand kcal(customer-provided window air conditioner)"
          },
          {
            "label": "Heater power",
            "value": "3000W"
          },
          {
            "label": "Maximum humidity and temperature control area",
            "value": "15m2(according to the area can be designed separately)"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P059",
        "name": "ASTM C39 | BS 1610 | NF P18-411 | AASHTO T22 | DIN 51220 | BS 812-110 | 812-111 | EN 772-1 | ASTM C140 | ASTM C1314",
        "model": "ASTM",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/ASTM.png",
        "image": "myImages/ASTM-Image.png",
        "description": "",
        "features": [
          "With load digital display function;",
          "The maximum load hold function;",
          "Power-off data protection function;",
          "The hydraulic pump is an axial five-piston ultra-high pressure pump, which is directly driven by an electric motor;",
          "There is a safety valve on the oil delivery valve,which can overflow when overloaded, which plays a safety role;",
          "The hand wheel of the oil delivery valve can adjust the oil intake of the oil cylinder to achieve the required loading rate."
        ],
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
        "isNew": false
      },
      {
        "id": "P060",
        "name": "EN 196-1 | EN 933-5 | EN 1015-11 | ISO 679 | ASTM C109, C348, C349, C1194| BS 4550",
        "model": "EN",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [
          "The whole machine adopts physical and chemical board countertop, and the frame adopts static surface electroplating, which is easy to clean and beautiful;",
          "The anti-bending part adopts electric oil cylinder, which has high precision, stable control, accurate displacement and force value;",
          "The sensor adopts the spoke sensor, which has high precision, stable speed and reciprocation;",
          "Servo motor system, silent throughout, low decibel, oil temperature is not easy to rise, high efficiency and stability, voltage adopts single-phase 220V, strong versatility, high efficiency and energy saving;",
          "The protective cover is made of acrylic transparent material, which is clean and beautiful, and the test process can be observed throughout the process;",
          "The 40mmx40mm cement compression jig is made of fully galvanized material."
        ],
        "standards": [],
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
        "isNew": false
      },
      {
        "id": "P061",
        "name": "YAW-300S Constant Loading Pressure Testing Machine",
        "model": "YAW-300S",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/YAW-300S.png",
        "image": "myImages/YAW-300S-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
        "isNew": false
      },
      {
        "id": "P062",
        "name": "EN 196-1 | EN 933-5 | EN 1015-11 | ISO 679 | ASTM C109, C348, C349, C1194| BS 4550",
        "model": "EN",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Measuring bowl volume",
            "value": "7L(its inner diameter and depth are equal)"
          },
          {
            "label": "Air content range",
            "value": "≤ 40mm"
          },
          {
            "label": "Maximum size of coarse aggregate to be used",
            "value": "≤40mm"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P063",
        "name": "YAW-300S Constant Load Cement Flexural and Compressive Testing Machine is a new generation of servo press independently developed and produced by Zhejiang Luda. With strong technology and production capacity, our company was honored to be invited to participate in the preparation of new standards for all-in-one machines. This testing machine is an essential testing instrument for building materials,construction engineering, quality supervision, metrology testing, scientific research institutions and other units.",
        "model": "YAW-300S",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/YAW-300S.png",
        "image": "myImages/YAW-300S-Image.png",
        "description": "",
        "features": [
          "Imported servo motor is used to control the oil source;",
          "High-precision servo flow valve;",
          "With the force closed-loop control function, it can realize the loading of the load stress rate;",
          "It can realize equal load rate loading or equal stress rate loading."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Measuring bowl volume",
            "value": "7L(diameter 205mm, height 212mm)"
          },
          {
            "label": "Air content range",
            "value": "≤ 10%"
          },
          {
            "label": "Maximum size of coarse aggregate to be used",
            "value": "≤40mm"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P064",
        "name": "EN 196-1 | EN 933-5 | EN 1015-11 | ISO 679 | ASTM C109, C348, C349, C1194| BS 4550",
        "model": "EN",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [
          "Using high-precision digital micro-valve, can realize loading rate loading;",
          "With the force closed-loop control function, it can realize the loading of the load stress rate;",
          "The hydraulic pump adopts an axial five-piston ultra-high pressure pump, which works smoothly and has low noise;",
          "The control valve adopts a high-precision digital micro-flow valve with high control precision;",
          "The sensor adopts a pressure sensor, which has good reliability;",
          "The principle of automatic loading is adopted to strengthen the control of the loading rate."
        ],
        "standards": [],
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
        "isNew": false
      },
      {
        "id": "P065",
        "name": "YAW-300 Constant Loading Pressure Testing Machine",
        "model": "YAW-300",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/YAW-300.png",
        "image": "myImages/YAW-300-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
        "isNew": false
      },
      {
        "id": "P066",
        "name": "EN 196-1 | EN 933-5 | EN 1015-11 | ISO 679 | ASTM C109, C348, C349, C1194| BS 4550",
        "model": "EN",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [
          "The working oil cylinder and the working piston adopt precision couplings, embedded with composite sealing rings to achieve the best sealing state;",
          "The axial plunger high-pressure oil pump is used, which works smoothly and has low noise;",
          "The sensor adopts a pressure sensor, which is highly reliable;",
          "The control valve adopts a high-precision digital micro-flow valve with high control precision;",
          "Adopt the principle of automatic loading to strengthen the control of the loading rate."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "Table size",
            "value": "500×500mm 800×800mm 1000×1000mm"
          },
          {
            "label": "Vibration frequency",
            "value": "2860 point/min 2860 point/min 2860 point/min"
          },
          {
            "label": "Vibration amplitude",
            "value": "0.3-0.6mm 0.3-0.6mm 0.3-0.6mm"
          },
          {
            "label": "Vibrator power",
            "value": "0.55kW 1.1kW 1.5kW"
          },
          {
            "label": "Load",
            "value": "100kg 150kg 200kg"
          },
          {
            "label": "Weight",
            "value": "35kg 70kg 100kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P067",
        "name": "TSY-300 Electro-hydraulic Compression Testing Machine",
        "model": "TSY-300",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/TSY-300.png",
        "image": "myImages/TSY-300-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Wall thickness",
            "value": "6mm 6mm"
          },
          {
            "label": "Feed capacity",
            "value": "48L 96L"
          },
          {
            "label": "Discharging capacity",
            "value": "30L 60L"
          },
          {
            "label": "Maximum discharge capacity",
            "value": "33L 66L"
          },
          {
            "label": "Mixing time",
            "value": "≤45s ≤45s"
          },
          {
            "label": "Stirring axis speed",
            "value": "45r/min 45r/min"
          },
          {
            "label": "Electric power",
            "value": "1.5kW 2.2kW"
          },
          {
            "label": "Voltage",
            "value": "AC380V±10% AC380V±10%"
          },
          {
            "label": "Dimensions",
            "value": "1130×400×900mm 1520×530×1060mm"
          },
          {
            "label": "Weight",
            "value": "160kg 220kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P068",
        "name": "EN 196-1 | EN 933-5 | EN 1015-11 | ISO 679 | ASTM C109, C348, C349, C1194| BS 4550",
        "model": "EN",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [
          "It can automatically adjust the parallelism of the pressure-bearing surface between the test piece and the pressure plate, so that the test piece is evenly stressed;",
          "There is a sealing device between the piston and the oil cylinder to prevent oil leakage;",
          "Equipped with a safety valve, which can overflow when overloaded and play a role of safety protection;",
          "The test data is automatically processed and the test report is printed out."
        ],
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
        "isNew": false
      },
      {
        "id": "P069",
        "name": "TSY-300 Electro-hydraulic Flexural And Compression Testing Machine",
        "model": "TSY-300",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/TSY-300.png",
        "image": "myImages/TSY-300-Image.png",
        "description": "",
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
        "isNew": false
      },
      {
        "id": "P070",
        "name": "EN 196-1 | EN 933-5 | EN 1015-11 | ISO 679 | ASTM C109, C348, C349, C1194| BS 4550",
        "model": "EN",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [
          "It can automatically adjust the parallelism of the pressure-bearing surface between the test piece and the pressure plate, so that the test piece is evenly stressed;",
          "There is a sealing device between the piston and the oil cylinder to prevent oil leakage;",
          "Equipped with a safety valve, which can overflow when overloaded and play a role of safety protection;",
          "The test data is automatically processed and the test report is printed out."
        ],
        "standards": [],
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
        "isNew": false
      },
      {
        "id": "P071",
        "name": "TSY-1000S Constant Load Manhole Cover Special Pressure Testing Machine",
        "model": "TSY-1000S",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/TSY-1000S.png",
        "image": "myImages/TSY-1000S-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
        "isNew": false
      },
      {
        "id": "P072",
        "name": "EN 124-1",
        "model": "EN",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
            "value": "500W"
          },
          {
            "label": "Heater power",
            "value": "1200W"
          },
          {
            "label": "Maintenance box size",
            "value": "140×100×180mm (16 pieces)"
          },
          {
            "label": "Test block size",
            "value": "40×40×160mm (96 pieces)"
          },
          {
            "label": "Dimensions",
            "value": "920×760×980mm"
          },
          {
            "label": "Weight",
            "value": "113kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P073",
        "name": "TSY series manhole cover pressure testing machine is a scientific and technological achievement of cooperation between our company and the Institute of Fluid Transmission and Control of Zhejiang University of Technology.",
        "model": "TSY",
        "category": "PRESSURE TESTING MACHINE SERIES 30",
        "thumbnail": "myImages/TSY.png",
        "image": "myImages/TSY-Image.png",
        "description": "",
        "features": [
          "This machine adopts high-precision deformation and high-resolution acquisition system;",
          "Hydraulic control adopts integrated oil circuit servo control system;",
          "Stable and reliable loading, intelligent operation;",
          "It has the functions of automatic lifting, automatic positioning, automatic calibration, equal force and equal deformation, servo automatic compensation, positioning, pressure keeping, intelligent prompting of working status and mixed control;",
          "With power-off data protection function;",
          "The experimental data is automatically processed, and the operation is convenient and reliable;",
          "The corresponding configuration can be selected according to the different needs of customers."
        ],
        "standards": [],
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
            "value": "1000W"
          },
          {
            "label": "Heater power",
            "value": "2400W"
          },
          {
            "label": "Maintenance box size",
            "value": "140×100×180mm（36 pieces）"
          },
          {
            "label": "Test block size",
            "value": "40×40×160mm (216 pieces)"
          },
          {
            "label": "Dimensions",
            "value": "1760×755×980mm"
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
        "id": "P074",
        "name": "TSY-500 Static Load Sleeper Testing Machine 58",
        "model": "TSY-500",
        "category": "LARGE TESTING MACHINE SERIES 57",
        "thumbnail": "myImages/TSY-500.png",
        "image": "myImages/TSY-500-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
            "value": "40×40×160 trial molds, 6 groups can be placed on each layer"
          },
          {
            "label": "Number of trial molds placed",
            "value": "150×150×150 mold trial, 3 groups can be placed on each layer"
          },
          {
            "label": "Number of trial molds placed",
            "value": "100×100×100 mold trial, 4 groups can be placed on each layer"
          },
          {
            "label": "Studio size",
            "value": "570×550×1000mm"
          },
          {
            "label": "Dimensions",
            "value": "980×700×1350mm"
          },
          {
            "label": "Weight",
            "value": "110kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P075",
        "name": "LDCJ-300 Microcomputer Controlled Tensile Stress Relaxation Testing Machine 60",
        "model": "LDCJ-300",
        "category": "LARGE TESTING MACHINE SERIES 57",
        "thumbnail": "myImages/LDCJ-300.png",
        "image": "myImages/LDCJ-300-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
            "value": "40×40×160 trial molds, 6 groups can be placed on each layer"
          },
          {
            "label": "Number of trial molds placed",
            "value": "150×150×150 mold trial, 3 groups can be placed on each layer"
          },
          {
            "label": "Number of trial molds placed",
            "value": "100×100×100 mold trial, 4 groups can be placed on each layer"
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
        "isNew": false
      },
      {
        "id": "P076",
        "name": "LDGW-60C Steel Pipe Bending Test Machine 62",
        "model": "LDGW-60C",
        "category": "LARGE TESTING MACHINE SERIES 57",
        "thumbnail": "myImages/LDGW-60C.png",
        "image": "myImages/LDGW-60C-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
            "value": "500W"
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
            "value": "40×40×160 trial molds, 6 groups can be placed on each layer"
          },
          {
            "label": "Number of trial molds placed",
            "value": "150×150×150 mold trial, 3 groups can be placed on each layer"
          },
          {
            "label": "Number of trial molds placed",
            "value": "100×100×100 mold trial, 4 groups can be placed on each layer"
          },
          {
            "label": "Studio size",
            "value": "1180×550×1400mm"
          },
          {
            "label": "Dimensions",
            "value": "1650×680×1750mm"
          },
          {
            "label": "Weight",
            "value": "220kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P077",
        "name": "LDWQ-40D Vertical Steel Bar Bending and Rebending Testing Machine 63",
        "model": "LDWQ-40D",
        "category": "LARGE TESTING MACHINE SERIES 57",
        "thumbnail": "myImages/LDWQ-40D.png",
        "image": "myImages/LDWQ-40D-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
        "isNew": false
      },
      {
        "id": "P078",
        "name": "GW-40C Steel Bar Bending Machine 65",
        "model": "GW-40C",
        "category": "LARGE TESTING MACHINE SERIES 57",
        "thumbnail": "myImages/GW-40C.png",
        "image": "myImages/GW-40C-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Speed gear",
            "value": "Rotation r/min Revolution r/min"
          },
          {
            "label": "Low speed",
            "value": "140 士 2 62 士 2"
          },
          {
            "label": "High speed",
            "value": "285 士 3 125 士 3"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P079",
        "name": "LD-JZ500D Automatic Bolt Torque Tension Testing Machine 67",
        "model": "LD-JZ500D",
        "category": "LARGE TESTING MACHINE SERIES 57",
        "thumbnail": "myImages/LD-JZ500D.png",
        "image": "myImages/LD-JZ500D-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "The total mass of the table plate (including the arm,the die frame,etc.)",
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
        "isNew": false
      },
      {
        "id": "P080",
        "name": "TSY-500 Static Load Sleeper Testing Machine",
        "model": "TSY-500",
        "category": "LARGE TESTING MACHINE SERIES 57",
        "thumbnail": "myImages/TSY-500.png",
        "image": "myImages/TSY-500-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Display method",
            "value": "Pointer Pointer"
          },
          {
            "label": "Double lever output ratio (lower beam to arm distance ratio) (maximum)",
            "value": "50：1 60：1"
          },
          {
            "label": "Maximum output",
            "value": "Double Leverage 5000N Double Leverage 6000N"
          },
          {
            "label": "Loading speed",
            "value": "50N/s 50N/s"
          },
          {
            "label": "Loading roller and supporting roller diameter",
            "value": "Φ10mm Φ10mm"
          },
          {
            "label": "Support roller pitch",
            "value": "100mm 100mm"
          },
          {
            "label": "Lay frame spacing",
            "value": "46mm 46mm"
          },
          {
            "label": "Lever inclination",
            "value": ">1/50° >1/50°"
          },
          {
            "label": "Dimensions (length x width x height)",
            "value": "1080×220×780mm 1180×220×800mm"
          },
          {
            "label": "Weight",
            "value": "130kg 135kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P081",
        "name": "EN 13230-1 | EN 13230-2 | EN 13230-3",
        "model": "EN",
        "category": "LARGE TESTING MACHINE SERIES 57",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [
          "The force measurement of this machine adopts high-precision load sensor, microcomputer program control, electro-hydraulic proportional hydraulic loading system and other technologies;",
          "Use the positioning ruler (self-provided) to adjust the position of the sleeper so that the load center coincides with the center of the pressure plate;",
          "According to the set working procedure, the piston moves freely;",
          "Equipped with three high-precision spoke sensors to ensure accurate data of three separate pressure points, and equipped with special LED crack observation lights. In order to facilitate the sleeper test of foreign standards, the fulcrum can be adjusted;",
          "The loading process is adjusted with the variable structure PID control algorithm, the constant speed control error is ≤5%, and the pressure holding control error is ≤0.5%;",
          "Loading speed Uniform loading;",
          "The static load point can be set arbitrarily, and the data result report is automatically printed."
        ],
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
        "isNew": false
      },
      {
        "id": "P082",
        "name": "LDCJ-300 Microcomputer Controlled Tensile Stress Relaxation Testing Machine",
        "model": "LDCJ-300",
        "category": "LARGE TESTING MACHINE SERIES 57",
        "thumbnail": "myImages/LDCJ-300.png",
        "image": "myImages/LDCJ-300-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
        "isNew": false
      },
      {
        "id": "P083",
        "name": "ASTM E328 | ISO 15630-3",
        "model": "ASTM",
        "category": "LARGE TESTING MACHINE SERIES 57",
        "thumbnail": "myImages/ASTM.png",
        "image": "myImages/ASTM-Image.png",
        "description": "",
        "features": [
          "The host machine is of horizontal structure with moderate height and easy operation. The load-bearing pedestal is a welded structure with high rigidity and light weight;",
          "The universal prestressed through-hole jack is adopted, which has strong versatility and is suitable for prestressing. Applicable to tensioning Ovam clip group, anchor DM type heading anchor and LEM type cold casting anchor;",
          "The piston of the working jack is double-acting, which can realize quick return;",
          "Using a high-flow high-pressure pump, the loading speed can be controlled by a manual valve;",
          "Full digital measurement and control device, stable performance, high measurement and control accuracy;",
          "With force and displacement automatic clearing, automatic calibration function;",
          "The force measurement resolution is high and does not change in the whole process, and it is not divided into files;",
          "The whole machine is equipped with 6 round hole backing plates."
        ],
        "standards": [],
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
        "isNew": false
      },
      {
        "id": "P084",
        "name": "LDGW-60C Steel Pipe Bending Test Machine",
        "model": "LDGW-60C",
        "category": "LARGE TESTING MACHINE SERIES 57",
        "thumbnail": "myImages/LDGW-60C.png",
        "image": "myImages/LDGW-60C-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
        "isNew": false
      },
      {
        "id": "P085",
        "name": "LDGW-60C steel pipe bending testing machine has the characteristics of compact structure, simple operation, intuitive display of bending angle, easy maintenance, stable operation, safety, and low noise. It is a special equipment for cold bending test of steel pipes.This equipment is an ideal test equipment for steel mills and construction units to test the bending performance and reverse bending performance of steel pipes.",
        "model": "LDGW-60C",
        "category": "LARGE TESTING MACHINE SERIES 57",
        "thumbnail": "myImages/LDGW-60C.png",
        "image": "myImages/LDGW-60C-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
        "isNew": false
      },
      {
        "id": "P086",
        "name": "LDWQ-40D Vertical Steel Bar Bending and Rebending Testing Machine",
        "model": "LDWQ-40D",
        "category": "LARGE TESTING MACHINE SERIES 57",
        "thumbnail": "myImages/LDWQ-40D.png",
        "image": "myImages/LDWQ-40D-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
        "isNew": false
      },
      {
        "id": "P087",
        "name": "EN ISO 7438 | EN ISO 15630-1 | ASTM A615 | ASTM A615M",
        "model": "EN",
        "category": "LARGE TESTING MACHINE SERIES 57",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [
          "Vertical closed integrated fuselage design, silent oil pump hydraulic system;",
          "cylinder design, the roller span is driven by 2 lateral cylinders with displacement measurement;",
          "With a fully transparent protective cover that can be observed in all directions, the front plexiglass protective sliding door slides silently;",
          "Imported PLC control, equipped with 10.1-inch configuration touch screen, with animation display, real-time display of angle, automatic control of bending process and other functions.Friendly operation interface, the test steps have been decomposed into the whole screen interface, follow the prompts to operate step by step, easy to learn;",
          "Support bending test (0-180 degrees), reverse bending test (forward bending 90 degrees, reverse bending 20 degrees), reverse bending needs to use additional bending support (optional);",
          "With dross, steel oxide skin collection drawer;",
          "One-click test. After the user selects the steel bar type parameters and diameter, the bending machine automatically adjusts the span and gives the number of the bending core. After the press test, the bending machine automatically completes the press bending and lateral pressurization. After the end, the vertical oil cylinder and the lateral oil cylinder return automatically."
        ],
        "standards": [],
        "specifications": [
          {
            "label": "The total weight of the sliding part",
            "value": "300±1g"
          },
          {
            "label": "Standard consistency test rod",
            "value": "1 piece, effective length 50±1mm, diameterΦ10±0.05mm"
          },
          {
            "label": "Initial setting test needle",
            "value": "2 pieces, effective length 50±1mm, diameterΦ1.13±0.05mm."
          },
          {
            "label": "Final setting test needle",
            "value": "1 piece, effective length 30±1mm, diameterΦ1.13±0.05mm"
          },
          {
            "label": "Weight",
            "value": "4.5kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P088",
        "name": "GW-40C Steel Bar Bending Machine",
        "model": "GW-40C",
        "category": "LARGE TESTING MACHINE SERIES 57",
        "thumbnail": "myImages/GW-40C.png",
        "image": "myImages/GW-40C-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Test tube height",
            "value": "600mm"
          },
          {
            "label": "Gauge height",
            "value": "3000mm"
          },
          {
            "label": "Pressure measuring hole spacing",
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
        "isNew": false
      },
      {
        "id": "P089",
        "name": "GW-40C steel bar bending machine is a test equipment for bending and reverse bending of steel bars in the plane. It is suitable for steel mills, construction units, working condition enterprises, traffic quality inspection and other industries.It is suitable for steel mills, construction units, working condition enterprises, traffic quality inspection and other industries.",
        "model": "GW-40C",
        "category": "LARGE TESTING MACHINE SERIES 57",
        "thumbnail": "myImages/GW-40C.png",
        "image": "myImages/GW-40C-Image.png",
        "description": "",
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
            "label": "Water supply tank volume",
            "value": "80L"
          },
          {
            "label": "Inner diameter of metal cylinder",
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
            "label": "Pressure measuring hole spacing",
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
        "isNew": false
      },
      {
        "id": "P090",
        "name": "LD-JZ500D Automatic Bolt Torque Tension Testing Machine",
        "model": "LD-JZ500D",
        "category": "LARGE TESTING MACHINE SERIES 57",
        "thumbnail": "myImages/LD-JZ500D.png",
        "image": "myImages/LD-JZ500D-Image.png",
        "description": "",
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
            "value": "1900 ~3100N (recommended to 2500)"
          },
          {
            "label": "Exciting force",
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
        "isNew": false
      },
      {
        "id": "P091",
        "name": "ISO 16047 | ASTM D5648",
        "model": "ISO",
        "category": "LARGE TESTING MACHINE SERIES 57",
        "thumbnail": "myImages/ISO.png",
        "image": "myImages/ISO-Image.png",
        "description": "",
        "features": [
          "This product has the function of parameter backup and recovery, automatic calibration function, and the monitoring of peak value is also set according to the detection requirements of high-strength bolts.",
          "In order to meet the needs of users, the instrument is equipped with a network interface connected to the computer, which can transmit data to the computer and upload the data, and print out the report after further processing."
        ],
        "standards": [],
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
            "label": "Grindable sample specifications (normally factory-equipped with a fixture for grinding 50-150mm)",
            "value": "A:Block 50×50×50~150×150×150mm B:Cylinder 50~150mm"
          },
          {
            "label": "Specimen precision",
            "value": "A:Flatness Tolerance±0.05mm within 50mm B:Smoothness (according to machining roughness standard) Ra3.2"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P092",
        "name": "LDSY-3 Asphalt Mixture Rotary Compactor 70",
        "model": "LDSY-3",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/LDSY-3.png",
        "image": "myImages/LDSY-3-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Cutting range",
            "value": "DQ-1 double knives (blade diameter 500mm) can cut cylindrical cores with a diameter of 18mm~200mm, and original rock samples of 180mm×180mm×350mm. For refractory materials such as sandstone,high-magnesia bricks, and corundum bricks, the cutting hardness is below grade 9.The distance between the two blades is adjustable, respectively 25, 50, 75, 100, 125mm."
          },
          {
            "label": "The saw blade of the automatic dual-knife rock core sample dual-purpose machine",
            "value": "Inner diameter:5cm, Outer diameter:50cm"
          },
          {
            "label": "JRg600 diamond",
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
            "label": "Longitudinal motor power",
            "value": "0.75kW"
          },
          {
            "label": "Dimensions",
            "value": "1500×830×1350mm"
          },
          {
            "label": "JRg60Q diamond cutter",
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
        "isNew": false
      },
      {
        "id": "P093",
        "name": "LDRS-6 Asphalt Content Analyzer (combustion method) 71",
        "model": "LDRS-6",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/LDRS-6.png",
        "image": "myImages/LDRS-6-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Hammer weight",
            "value": "Heavy compaction: 4.5kg Light compaction: 2.5kg Heavy compaction: 4.5kg Light compaction: 2.5kg"
          },
          {
            "label": "Hammer down high",
            "value": "Heavy compaction: 457mm Light compaction: 305mm Heavy compaction: 457mm Light compaction: 305mm"
          },
          {
            "label": "Hammer face diameter",
            "value": "Φ50mm Φ50mm"
          },
          {
            "label": "Test tube specification",
            "value": "Φ152×Φ100 Φ152×Φ102"
          },
          {
            "label": "Hammer speed",
            "value": "30times/min 30times/min"
          },
          {
            "label": "Set the number of hammering",
            "value": "Between 0~99 times Between 0~99 times"
          },
          {
            "label": "Motor parameters",
            "value": "1440r/min 1440r/min"
          },
          {
            "label": "Motor Power",
            "value": "250W 250W"
          },
          {
            "label": "Voltage",
            "value": "AC380V±10% AC380V±10%"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P094",
        "name": "LDCX-1 Asphalt Roller Compactor 72",
        "model": "LDCX-1",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/LDCX-1.png",
        "image": "myImages/LDCX-1-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Maximum release force",
            "value": "Maximum release force 200KN 300KN"
          },
          {
            "label": "Release rate",
            "value": "Release rate 130mm/min 130mm/min"
          },
          {
            "label": "Maximum demoulding height",
            "value": "Maximum demoulding height 230mm 230mm"
          },
          {
            "label": "Voltage/Motor power",
            "value": "Voltage/Motor power 380V/0.75KW 380V/0.75KW"
          },
          {
            "label": "Oil pump rated pressure",
            "value": "Oil pump rated pressure 20MPa 20MPa"
          },
          {
            "label": "Motor rated speed",
            "value": "Motor rated speed 1500r/min 1500r/min"
          },
          {
            "label": "Dimensions",
            "value": "Dimensions 480×520×1230mm 480×520×1230mm"
          },
          {
            "label": "Compression mold test",
            "value": "Compression mold test Ф150×230mm Ф100×180mm Ф50×130mm Ф150×230mm Ф100×180mm"
          },
          {
            "label": "Light and heavy compaction instrument test mold",
            "value": "Ф152×170mm,Ф100×127mm Ф152×170mm,Ф100×127mm"
          },
          {
            "label": "Marshall test mold",
            "value": "Ф101.6×87mm Ф101.6×87mm"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P095",
        "name": "LDCZ-5 Automatic Single Wheel Tracking Apparatus 74",
        "model": "LDCZ-5",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/LDCZ-5.png",
        "image": "myImages/LDCZ-5-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
        "id": "P096",
        "name": "SYD-4508G Intelligent Asphalt Ductilometer 75",
        "model": "SYD-4508G",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/SYD-4508G.png",
        "image": "myImages/SYD-4508G-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
        "isNew": false
      },
      {
        "id": "P097",
        "name": "STYD-3 Intelligent Asphalt Ductilometer 76",
        "model": "STYD-3",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/STYD-3.png",
        "image": "myImages/STYD-3-Image.png",
        "description": "",
        "features": [],
        "standards": [],
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
            "value": "Cylindrical plastic test tube"
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
        "id": "P098",
        "name": "LD-5B Asphalt Mixture CBR/Marshall Stability Tester 77",
        "model": "LD-5B",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/LD-5B.png",
        "image": "myImages/LD-5B-Image.png",
        "description": "",
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
        "id": "P099",
        "name": "LDHB-20 Automatic Laboratory Bituminous Mixers 78",
        "model": "LDHB-20",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/LDHB-20.png",
        "image": "myImages/LDHB-20-Image.png",
        "description": "",
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
        "id": "P100",
        "name": "LDL-2 Asphalt Wax Content Tester 79",
        "model": "LDL-2",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/LDL-2.png",
        "image": "myImages/LDL-2-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Temperature range",
            "value": "-40°C~+150°C (temperature at the time of purchase)"
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
            "label": "*Note: The above performance data should be measured after 30 minutes of temperature stabilization after working. *Note: The above performance data, need to distance from the test area of each wall 1/6 position test amount, and need to work after the temperature and humidity stability after 30 minutes measurement.",
            "value": "*Note: The above performance data should be measured after 30 minutes of temperature stabilization after working. *Note: The above performance data, need to distance from the test area of each wall 1/6 position test amount, and need to work after the temperature and humidity stability after 30 minutes measurement."
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P101",
        "name": "82 Type Rotating Shelf Thin Film Oven (TFOT) 80",
        "model": "82",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/82.png",
        "image": "myImages/82-Image.png",
        "description": "",
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
        "id": "P102",
        "name": "85 Type Rolling Thin-Film Oven (RTFOT) 81",
        "model": "85",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/85.png",
        "image": "myImages/85-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "101-1A",
            "value": "Room temperature~ 250±1℃ 2.5kW 220V 450×350×450mm 750×500×720mm 65kg"
          },
          {
            "label": "101-2A",
            "value": "Room temperature~ 250±1℃ 3.2kW 220V 550×450×550mm 850×570×810mm 86kg"
          },
          {
            "label": "101-3A",
            "value": "Room temperature~ 250±1℃ 6kW 220V 600×500×750mm 970×650×1020mm 123kg"
          },
          {
            "label": "101-4A",
            "value": "Room temperature~ 250±1℃ 6kW 380V with zero wire 800×800×1000mm 1170×950×1310mm 204kg"
          },
          {
            "label": "101-5A",
            "value": "Room temperature~ 250±1℃ 12kW 380V with zero wire 1000×1000×1200mm 1370×1150×1500mm 280kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P103",
        "name": "CF-C Overflow Water Bath 82",
        "model": "CF-C",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/CF-C.png",
        "image": "myImages/CF-C-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Rated power",
            "value": "8kW 12kW"
          },
          {
            "label": "Rated voltage",
            "value": "220V 380V"
          },
          {
            "label": "Rated temperature",
            "value": "1600℃ 1600℃"
          },
          {
            "label": "Empty furnace temperature rise time",
            "value": "≤220min ≤250min"
          },
          {
            "label": "Studio size",
            "value": "150×300×120mm 200×400×160mm"
          },
          {
            "label": "Overall dimensions",
            "value": "820×670×780mm 905×730×835mm"
          },
          {
            "label": "Weight",
            "value": "350kg 400kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P104",
        "name": "TC-20 Water Bath 83",
        "model": "TC-20",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/TC-20.png",
        "image": "myImages/TC-20-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Rated power",
            "value": "2.5kW 4kW 8kW 12kW"
          },
          {
            "label": "Rated voltage",
            "value": "220V 220V 380V 380V"
          },
          {
            "label": "Rated temperature",
            "value": "1000℃ 1000℃ 1000℃ 1000℃"
          },
          {
            "label": "Studio size",
            "value": "120×200×80mm 200×300×120mm 250×400×160mm 300×500×200mm"
          },
          {
            "label": "Overall dimensions",
            "value": "380×380×420mm 490×490×540mm 610×540×550mm 710×610×560mm"
          },
          {
            "label": "Weight",
            "value": "145kg 158kg 163kg 185kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P105",
        "name": "TC-20 Low Temperature Water Bath 84",
        "model": "TC-20",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/TC-20.png",
        "image": "myImages/TC-20-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [
          {
            "label": "Temperature control range",
            "value": "-25℃ ~ room temperature -40℃ ~ room temperature -60℃ ~ room temperature"
          },
          {
            "label": "Compressor power",
            "value": "200W 230W 250W"
          },
          {
            "label": "Voltage",
            "value": "220V 220V 220V"
          },
          {
            "label": "Dimension of working chamber",
            "value": "800×400×650mm 880×405×600mm 600×500×650mm"
          },
          {
            "label": "Dimension",
            "value": "940×550×850mm 1020×560×800mm 750×650×850mm"
          },
          {
            "label": "Weight",
            "value": "120kg 140kg 160kg"
          }
        ],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P106",
        "name": "THD-0506 Low Temperature Water Bath 85",
        "model": "THD-0506",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/THD-0506.png",
        "image": "myImages/THD-0506-Image.png",
        "description": "",
        "features": [],
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
        "id": "P107",
        "name": "LD-2000 Computer Asphalt Softening Point Tester 86",
        "model": "LD-2000",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/LD-2000.png",
        "image": "myImages/LD-2000-Image.png",
        "description": "",
        "features": [],
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
        "id": "P108",
        "name": "IV-2000 Computer Automatic Asphalt Penetrometer 87",
        "model": "IV-2000",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/IV-2000.png",
        "image": "myImages/IV-2000-Image.png",
        "description": "",
        "features": [],
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
        "isNew": false
      },
      {
        "id": "P109",
        "name": "LDSY-3 Asphalt Mixture Rotary Compactor",
        "model": "LDSY-3",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/LDSY-3.png",
        "image": "myImages/LDSY-3-Image.png",
        "description": "",
        "features": [
          "This machine adopts imported accessories,under the given compaction pressure and rotation compaction angle,it can operate safely and reliably,and the experimental data is accurate and reliable."
        ],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P110",
        "name": "LDRS-6 Asphalt Content Analyzer (combustion method)",
        "model": "LDRS-6",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/LDRS-6.png",
        "image": "myImages/LDRS-6-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P111",
        "name": "AASHTO T308-10 | ASTM D6307-10 | BS EN 12697-39:2012",
        "model": "AASHTO",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/AASHTO.png",
        "image": "myImages/AASHTO-Image.png",
        "description": "",
        "features": [
          "The product adopts a high-precision measurement and control system and is used with an imported balance.It can quickly, accurately, safely and reliably measure the asphalt content, and can meet the requirements of mass continuous production of mixing plants and road supervision and inspection, thereby ensuring the quality of road construction."
        ],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P112",
        "name": "LDCX-1 Asphalt Roller Compactor",
        "model": "LDCX-1",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/LDCX-1.png",
        "image": "myImages/LDCX-1-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P113",
        "name": "EN 12697-33 method 5.2 | ASTM D8079",
        "model": "EN",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [
          "This machine integrates machinery, electricity and hydraulic pressure. Compared with similar products, it has the characteristics of small size, high degree of automation, strong function and convenient operation.",
          "Rolling temperature can be set arbitrarily.",
          "After the test mold is installed on the trolley, it can be centered automatically.",
          "The rolling times of the trolley can be set arbitrarily, and the rolling times can be recorded at any time."
        ],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P114",
        "name": "LDCZ-5 Automatic Single Wheel Tracking Apparatus",
        "model": "LDCZ-5",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/LDCZ-5.png",
        "image": "myImages/LDCZ-5-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P115",
        "name": "EN 12697-22 | BS 598:110 | Comparable to NF P98-251-1, P98-251-4",
        "model": "EN",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [
          "This machine adopts the rutting tester produced by international contemporary technology, which has reliable performance, high measurement and control precision, and convenient operation; it can be used for water immersion experiments."
        ],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P116",
        "name": "SYD-4508G Intelligent Asphalt Ductilometer",
        "model": "SYD-4508G",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/SYD-4508G.png",
        "image": "myImages/SYD-4508G-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P117",
        "name": "EN 13398 | AASHTO T300 | AASHTO T301 | EN 13589 | ASTM D113, D6084 |",
        "model": "EN",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P118",
        "name": "AASHTO T51",
        "model": "AASHTO",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/AASHTO.png",
        "image": "myImages/AASHTO-Image.png",
        "description": "",
        "features": [
          "The air-conditioning water pump and the main machine are designed separately on the ground, and the stretching process is stable and synchronous, without shaking, and the speed is uniform, which improves the test accuracy;",
          "It adopts industrial control touch screen, and has two recording methods: wireless remote control recording and instrument touch screen recording, which are convenient for users to choose and use."
        ],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P119",
        "name": "STYD-3 Intelligent Asphalt Ductilometer",
        "model": "STYD-3",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/STYD-3.png",
        "image": "myImages/STYD-3-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P120",
        "name": "EN 13398 | AASHTO T300 | AASHTO T301 | EN 13589 | ASTM D113, D6084 |",
        "model": "EN",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P121",
        "name": "AASHTO T51",
        "model": "AASHTO",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/AASHTO.png",
        "image": "myImages/AASHTO-Image.png",
        "description": "",
        "features": [
          "The inner box of this machine is made of imported stainless steel bending, and the inner tank is equipped with a set of 3000-3500 watt heating tube, a 1100 watt refrigerator and a set of cold tube, and a permanent magnet low-speed synchronous motor is used to drive the gearbox. The rod pulls the slide,optionally extending at a rate of 50mm/min±2.5mm/min."
        ],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P122",
        "name": "LD-5B Asphalt Mixture CBR/Marshall Stability Tester",
        "model": "LD-5B",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/LD-5B.png",
        "image": "myImages/LD-5B-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P123",
        "name": "EN 12697-34 | ASTM D 6926, D5581 | AASHTO T245 | BS 598 :107| ASTM D1859 | ASTM D1883",
        "model": "EN",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [
          "This machine adopts ARM core processor, high-precision load sensor,high-precision displacement sensor, and high measurement and control precision."
        ],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P124",
        "name": "LDHB-20 Automatic Laboratory Bituminous Mixers",
        "model": "LDHB-20",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/LDHB-20.png",
        "image": "myImages/LDHB-20-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P125",
        "name": "EN 12697-35 | ASTM D6307 | AASHTO TP53",
        "model": "EN",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [
          "This machine adopts intelligent control instruments, automatic temperature control, the temperature of the heating pot can be set arbitrarily from room temperature to 200 ℃, and the stirring time is controlled by a timer, which can be set arbitrarily within the range of 1 to 999 seconds."
        ],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P126",
        "name": "LDL-2 Asphalt Wax Content Tester",
        "model": "LDL-2",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/LDL-2.png",
        "image": "myImages/LDL-2-Image.png",
        "description": "",
        "features": [
          "The temperature controller of this machine adopts a digital temperature controller with high precision, clear temperature display, and convenient setting of temperature control points. The instrument can be used for analysis tests of three samples at a time, and the test efficiency is high."
        ],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P127",
        "name": "82 Type Rotating Shelf Thin Film Oven (TFOT)",
        "model": "82",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/82.png",
        "image": "myImages/82-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P128",
        "name": "EN 12607-2 | EN 13303 | ASTM D6, D1754 | AASHTO T47, T179 | UNE 7110 |",
        "model": "EN",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P129",
        "name": "NF T66-011",
        "model": "NF",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/NF.png",
        "image": "myImages/NF-Image.png",
        "description": "",
        "features": [
          "The temperature controller of this machine adopts an anti-integral saturation circuit, which greatly improves the temperature fluctuation performance .",
          "Dual-purpose: After the workbench is disassembled, it can be used as a drying box."
        ],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P130",
        "name": "85 Type Rolling Thin-Film Oven (RTFOT)",
        "model": "85",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/85.png",
        "image": "myImages/85-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P131",
        "name": "EN 12607-1 | ASTM D2872 | AASHTO T240",
        "model": "EN",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [
          "The controller adopts integral saturation circuit, digital display temperature and time control, and the temperature time can be adjusted according to requirements.",
          "The most advanced permanent magnet synchronous motor and speed changer are installed at the rear of the whole machine, so that the working turntable can rotate reliably under the technical requirement of 15 revolutions per minute."
        ],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P132",
        "name": "CF-C Overflow Water Bath",
        "model": "CF-C",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/CF-C.png",
        "image": "myImages/CF-C-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P133",
        "name": "EN 12697-34 | ASTM D6927, D1559, D5581 | AASHTO T245",
        "model": "EN",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P134",
        "name": "CF-C constant temperature overflow water tank is developed according to the asphalt mixture density test method in the test regulations, and has functions such as automatic constant temperature. This product is widely used in scientific research departments such as chemical industry and physical performance testing.",
        "model": "CF-C",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/CF-C.png",
        "image": "myImages/CF-C-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P135",
        "name": "TC-20 Water Bath",
        "model": "TC-20",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/TC-20.png",
        "image": "myImages/TC-20-Image.png",
        "description": "",
        "features": [
          "The shell of this machine is made of steel plate,the shell is sprayed with high-temperature spray paint, and the inner tank is made of imported stainless steel material,with exquisite workmanship,more reasonable structure and more convenient use."
        ],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P136",
        "name": "TC-20 Low Temperature Water Bath",
        "model": "TC-20",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/TC-20.png",
        "image": "myImages/TC-20-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P137",
        "name": "THD-0506 Low Temperature Water Bath",
        "model": "THD-0506",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/THD-0506.png",
        "image": "myImages/THD-0506-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P138",
        "name": "LD-2000 Computer Asphalt Softening Point Tester",
        "model": "LD-2000",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/LD-2000.png",
        "image": "myImages/LD-2000-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P139",
        "name": "EN 1427 | ASTM D36 | AASHTO T53 | NF T66-008 | Comparable to: BS 2000 | UNI 4161 | DIN 52011 | UNE 7111",
        "model": "EN",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [
          "The heating speed of the machine is controlled by PID plus fuzzy logic algorithm, and the temperature rises linearly."
        ],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P140",
        "name": "IV-2000 Computer Automatic Asphalt Penetrometer",
        "model": "IV-2000",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/IV-2000.png",
        "image": "myImages/IV-2000-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P141",
        "name": "EN 1426 | ASTM D5 | AASHTO T49 | BS 1377-2",
        "model": "EN",
        "category": "ASPHALT TESTING SERIES 69",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [
          "This machine adopts the fine-tuning technology up and down of the microscope, which is very convenient to align the needle up and down. It is equipped with the most advanced digital temperature sensor, and the temperature measurement is more accurate."
        ],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P142",
        "name": "TDRF Series Concrete Fast Freeze-thaw Chamber 90",
        "model": "TDRF",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/TDRF.png",
        "image": "myImages/TDRF-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P143",
        "name": "CCB-70A Concrete Carbonation Test Chamber 92",
        "model": "CCB-70A",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/CCB-70A.png",
        "image": "myImages/CCB-70A-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P144",
        "name": "LDZY-400 Accelerated Concrete Curing Tank 93",
        "model": "LDZY-400",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/LDZY-400.png",
        "image": "myImages/LDZY-400-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P145",
        "name": "JKS Alkali-aggregate Test Chamber 94",
        "model": "JKS",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/JKS.png",
        "image": "myImages/JKS-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P146",
        "name": "LDWS Series Constant Temperature and Humidity Curing Controller (high pressure atomization) 95",
        "model": "LDWS",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/LDWS.png",
        "image": "myImages/LDWS-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P147",
        "name": "LDWS Series Constant Temperature And Humidity Curing Controller (ultrasonic atomization) 96",
        "model": "LDWS",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/LDWS.png",
        "image": "myImages/LDWS-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P148",
        "name": "LDWSA20 Constant Temperature And Humidity Control System 97",
        "model": "LDWSA20",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/LDWSA20.png",
        "image": "myImages/LDWSA20-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P149",
        "name": "LDHJ Series Constant Temperature And Humidity Environment Control System 98",
        "model": "LDHJ",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/LDHJ.png",
        "image": "myImages/LDHJ-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P150",
        "name": "BYS-3 Curing Room Three-piece Set 99",
        "model": "BYS-3",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/BYS-3.png",
        "image": "myImages/BYS-3-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P151",
        "name": "CA-3 Direct-reading Concrete Air Content Tester 102",
        "model": "CA-3",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/CA-3.png",
        "image": "myImages/CA-3-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P152",
        "name": "HC-7L Imitation Japanese Concrete Air Content Tester 103",
        "model": "HC-7L",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/HC-7L.png",
        "image": "myImages/HC-7L-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P153",
        "name": "GQC-1 Improved Concrete Air Content Tester 104",
        "model": "GQC-1",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/GQC-1.png",
        "image": "myImages/GQC-1-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P154",
        "name": "HG-1000 Acme Penetrometer 105",
        "model": "HG-1000",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/HG-1000.png",
        "image": "myImages/HG-1000-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P155",
        "name": "HG-80 Acme Dial Penetrometer 106",
        "model": "HG-80",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/HG-80.png",
        "image": "myImages/HG-80-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P156",
        "name": "HZJ Series Concrete Vibrator 107",
        "model": "HZJ",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/HZJ.png",
        "image": "myImages/HZJ-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P157",
        "name": "SJD Series Single Shaft Concrete Mixer 108",
        "model": "SJD",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/SJD.png",
        "image": "myImages/SJD-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P158",
        "name": "LDCL-B Chloride Ion Fast Content Analyzer 109",
        "model": "LDCL-B",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/LDCL-B.png",
        "image": "myImages/LDCL-B-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P159",
        "name": "SY-2 Concrete Pressure Secretion Instrument 110",
        "model": "SY-2",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/SY-2.png",
        "image": "myImages/SY-2-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P160",
        "name": "TDRF Series Concrete Fast Freeze-thaw Chamber",
        "model": "TDRF",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/TDRF.png",
        "image": "myImages/TDRF-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P161",
        "name": "ASTM C666 | AASHTO T161, PROCEDURE A",
        "model": "ASTM",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/ASTM.png",
        "image": "myImages/ASTM-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P162",
        "name": "CCB-70A Concrete Carbonation Test Chamber",
        "model": "CCB-70A",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/CCB-70A.png",
        "image": "myImages/CCB-70A-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P163",
        "name": "ISO 1920-12",
        "model": "ISO",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/ISO.png",
        "image": "myImages/ISO-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P164",
        "name": "LDZY-400 Accelerated Concrete Curing Tank",
        "model": "LDZY-400",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/LDZY-400.png",
        "image": "myImages/LDZY-400-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P165",
        "name": "ASTM C684 Method C",
        "model": "ASTM",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/ASTM.png",
        "image": "myImages/ASTM-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P166",
        "name": "JKS Alkali-aggregate Test Chamber",
        "model": "JKS",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/JKS.png",
        "image": "myImages/JKS-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P167",
        "name": "ASTM C1260 | ASTM C1567",
        "model": "ASTM",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/ASTM.png",
        "image": "myImages/ASTM-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P168",
        "name": "LDWS Series Constant Temperature and Humidity Curing Controller (high pressure atomization)",
        "model": "LDWS",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/LDWS.png",
        "image": "myImages/LDWS-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P169",
        "name": "LDWS Series Constant Temperature And Humidity Curing Controller (ultrasonic atomization)",
        "model": "LDWS",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/LDWS.png",
        "image": "myImages/LDWS-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P170",
        "name": "LDWSA20 Constant Temperature And Humidity Control System",
        "model": "LDWSA20",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/LDWSA20.png",
        "image": "myImages/LDWSA20-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P171",
        "name": "LDHJ Series Constant Temperature And Humidity Environment Control System",
        "model": "LDHJ",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/LDHJ.png",
        "image": "myImages/LDHJ-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P172",
        "name": "BYS-3 Curing Room Three-piece Set",
        "model": "BYS-3",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/BYS-3.png",
        "image": "myImages/BYS-3-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P173",
        "name": "EN 196-1, 196-8 | ISO 679 | ASTM C109, C511",
        "model": "EN",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P174",
        "name": "CA-3 Direct-reading Concrete Air Content Tester",
        "model": "CA-3",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/CA-3.png",
        "image": "myImages/CA-3-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P175",
        "name": "EN 12350-7 | ASTM C231 type B | AASHTO T152 | DIN 1048",
        "model": "EN",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P176",
        "name": "HC-7L Imitation Japanese Concrete Air Content Tester",
        "model": "HC-7L",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/HC-7L.png",
        "image": "myImages/HC-7L-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P177",
        "name": "EN 12350-7 | ASTM C231 type B | AASHTO T152 | DIN 1048",
        "model": "EN",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P178",
        "name": "GQC-1 Improved Concrete Air Content Tester",
        "model": "GQC-1",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/GQC-1.png",
        "image": "myImages/GQC-1-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P179",
        "name": "EN 12350-7 | ASTM C231 type B | AASHTO T152 | DIN 1048",
        "model": "EN",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P180",
        "name": "HG-1000 Acme Penetrometer",
        "model": "HG-1000",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/HG-1000.png",
        "image": "myImages/HG-1000-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P181",
        "name": "ASTM C403 | AASHTO T197",
        "model": "ASTM",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/ASTM.png",
        "image": "myImages/ASTM-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P182",
        "name": "HG-80 Acme Dial Penetrometer",
        "model": "HG-80",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/HG-80.png",
        "image": "myImages/HG-80-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P183",
        "name": "ASTM C403 | AASHTO T197",
        "model": "ASTM",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/ASTM.png",
        "image": "myImages/ASTM-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P184",
        "name": "HZJ Series Concrete Vibrator",
        "model": "HZJ",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/HZJ.png",
        "image": "myImages/HZJ-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P185",
        "name": "EN 12390-2 | BS 1881:108",
        "model": "EN",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P186",
        "name": "SJD Series Single Shaft Concrete Mixer",
        "model": "SJD",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/SJD.png",
        "image": "myImages/SJD-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P187",
        "name": "ASTM C192/C192M-02",
        "model": "ASTM",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/ASTM.png",
        "image": "myImages/ASTM-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P188",
        "name": "LDCL-B Chloride Ion Fast Content Analyzer",
        "model": "LDCL-B",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/LDCL-B.png",
        "image": "myImages/LDCL-B-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P189",
        "name": "SY-2 Concrete Pressure Secretion Instrument",
        "model": "SY-2",
        "category": "CONCRETE TESTING SERIES 89",
        "thumbnail": "myImages/SY-2.png",
        "image": "myImages/SY-2-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P190",
        "name": "HBY-30 Constant Temperature Water Curing Box (vertical) 112",
        "model": "HBY-30",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/HBY-30.png",
        "image": "myImages/HBY-30-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P191",
        "name": "HBY-64 Constant Temperature Water Curing Box (vertical) 113",
        "model": "HBY-64",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/HBY-64.png",
        "image": "myImages/HBY-64-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P192",
        "name": "HBY-30 Constant Temperature Water Curing Box (horizontal) 114",
        "model": "HBY-30",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/HBY-30.png",
        "image": "myImages/HBY-30-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P193",
        "name": "HBY-60 constant temperature water curing box (horizontal) 115",
        "model": "HBY-60",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/HBY-60.png",
        "image": "myImages/HBY-60-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P194",
        "name": "HBY-40B Cement (Concrete) Constant Temperature And Humidity Curing Box (Glass door) 116",
        "model": "HBY-40B",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/HBY-40B.png",
        "image": "myImages/HBY-40B-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P195",
        "name": "HBY-40B Cement (Concrete) Constant Temperature And Humidity Curing Box(iron door) 117",
        "model": "HBY-40B",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/HBY-40B.png",
        "image": "myImages/HBY-40B-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P196",
        "name": "HBY-60B Cement (Concrete) Constant Temperature And Humidity Curing Box 118",
        "model": "HBY-60B",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/HBY-60B.png",
        "image": "myImages/HBY-60B-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P197",
        "name": "HBY-30 Mixed Mortar Specimen Standard Curing Box 119",
        "model": "HBY-30",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/HBY-30.png",
        "image": "myImages/HBY-30-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P198",
        "name": "JJ-20 Cement Mortar Mixer 120",
        "model": "JJ-20",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/JJ-20.png",
        "image": "myImages/JJ-20-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P199",
        "name": "ZT-20 Cement Mortar Vibrating Platform 121",
        "model": "ZT-20",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/ZT-20.png",
        "image": "myImages/ZT-20-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P200",
        "name": "DKZ Series Electric Flexural Testing Machine (pointer type) 122",
        "model": "DKZ",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/DKZ.png",
        "image": "myImages/DKZ-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P201",
        "name": "DKZ-6000 Electric Flexural Testing Machine (digital display) 123",
        "model": "DKZ-6000",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/DKZ-6000.png",
        "image": "myImages/DKZ-6000-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P202",
        "name": "NLD-3F Cement Mortar Flow Table 124",
        "model": "NLD-3F",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/NLD-3F.png",
        "image": "myImages/NLD-3F-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P203",
        "name": "FSY-150 Cement Fineness Air Jet Sieving Analyzer (ordinary) 125",
        "model": "FSY-150",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/FSY-150.png",
        "image": "myImages/FSY-150-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P204",
        "name": "FSY-150 Cement Fineness Air Jet Sieving Analyzer 126",
        "model": "FSY-150",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/FSY-150.png",
        "image": "myImages/FSY-150-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P205",
        "name": "FZ-31A Boiling Box 127",
        "model": "FZ-31A",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/FZ-31A.png",
        "image": "myImages/FZ-31A-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P206",
        "name": "FBT-9 Automatic Specific Surface Area Meter (Blaine Method) 128",
        "model": "FBT-9",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/FBT-9.png",
        "image": "myImages/FBT-9-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P207",
        "name": "HBY-30 Constant Temperature Water Curing Box (vertical)",
        "model": "HBY-30",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/HBY-30.png",
        "image": "myImages/HBY-30-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P208",
        "name": "EN 196-1",
        "model": "EN",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P209",
        "name": "HBY-64 Constant Temperature Water Curing Box (vertical)",
        "model": "HBY-64",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/HBY-64.png",
        "image": "myImages/HBY-64-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P210",
        "name": "EN 196-1",
        "model": "EN",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P211",
        "name": "HBY-30 Constant Temperature Water Curing Box (horizontal)",
        "model": "HBY-30",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/HBY-30.png",
        "image": "myImages/HBY-30-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P212",
        "name": "EN 196-1",
        "model": "EN",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P213",
        "name": "HBY-60 constant temperature water curing box (horizontal)",
        "model": "HBY-60",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/HBY-60.png",
        "image": "myImages/HBY-60-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P214",
        "name": "EN 196-1",
        "model": "EN",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P215",
        "name": "HBY-40B Cement (Concrete) Constant Temperature And Humidity Curing Box (Glass door)",
        "model": "HBY-40B",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/HBY-40B.png",
        "image": "myImages/HBY-40B-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P216",
        "name": "EN 196-1, 196-08 | ISO 679 | ASTM C109,C511",
        "model": "EN",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P217",
        "name": "HBY-40B Cement (Concrete) Constant Temperature And Humidity Curing Box(iron door)",
        "model": "HBY-40B",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/HBY-40B.png",
        "image": "myImages/HBY-40B-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P218",
        "name": "EN 196-1, 196-08 | ISO 679 | ASTM C109,C511",
        "model": "EN",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P219",
        "name": "HBY-60B Cement (Concrete) Constant Temperature And Humidity Curing Box",
        "model": "HBY-60B",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/HBY-60B.png",
        "image": "myImages/HBY-60B-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P220",
        "name": "EN 196-1, 196-08 | ISO 679 | ASTM C109,C511",
        "model": "EN",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P221",
        "name": "HBY-30 Mixed Mortar Specimen Standard Curing Box",
        "model": "HBY-30",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/HBY-30.png",
        "image": "myImages/HBY-30-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P222",
        "name": "EN 196-1, 196-08 | ISO 679 | ASTM C109,C511",
        "model": "EN",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P223",
        "name": "JJ-20 Cement Mortar Mixer",
        "model": "JJ-20",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/JJ-20.png",
        "image": "myImages/JJ-20-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P224",
        "name": "EN 196-1, EN 196-3 | EN 413-2 | EN 459-2 | EN 480-1 | EN ISO 679 | ASTM C305M | AASHTO T162",
        "model": "EN",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [
          "ISO"
        ],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P225",
        "name": "ZT-20 Cement Mortar Vibrating Platform",
        "model": "ZT-20",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/ZT-20.png",
        "image": "myImages/ZT-20-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P226",
        "name": "EN 196-1 | EN ISO 679",
        "model": "EN",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P227",
        "name": "DKZ Series Electric Flexural Testing Machine (pointer type)",
        "model": "DKZ",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/DKZ.png",
        "image": "myImages/DKZ-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P228",
        "name": "DKZ-6000 Electric Flexural Testing Machine (digital display)",
        "model": "DKZ-6000",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/DKZ-6000.png",
        "image": "myImages/DKZ-6000-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P229",
        "name": "NLD-3F Cement Mortar Flow Table",
        "model": "NLD-3F",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/NLD-3F.png",
        "image": "myImages/NLD-3F-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P230",
        "name": "EN 459-2 | EN 1015-3 | EN 13279-2 | ASTM C230 | BS 4551-1",
        "model": "EN",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P231",
        "name": "FSY-150 Cement Fineness Air Jet Sieving Analyzer (ordinary)",
        "model": "FSY-150",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/FSY-150.png",
        "image": "myImages/FSY-150-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P232",
        "name": "EN 933-10 | ASTM C1891",
        "model": "EN",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P233",
        "name": "FSY-150 Cement Fineness Air Jet Sieving Analyzer",
        "model": "FSY-150",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/FSY-150.png",
        "image": "myImages/FSY-150-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P234",
        "name": "EN 933-10 | ASTM C1891",
        "model": "EN",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P235",
        "name": "FZ-31A Boiling Box",
        "model": "FZ-31A",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/FZ-31A.png",
        "image": "myImages/FZ-31A-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P236",
        "name": "EN 196-3 | UNE 80102 | EN ISO 9597 | BS 6463 | NF P15-432",
        "model": "EN",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P237",
        "name": "FBT-9 Automatic Specific Surface Area Meter (Blaine Method)",
        "model": "FBT-9",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/FBT-9.png",
        "image": "myImages/FBT-9-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P238",
        "name": "EN 196-6, comparable to: ASTM C204 | AASHTO T153 | BS 4359:2",
        "model": "EN",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P239",
        "name": "EN 196-3 | EN 480-2 | EN 13279-2 (gypsum) | ASTM C191 | AASHTO T131",
        "model": "EN",
        "category": "CEMENT TESTING SERIES 111",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P240",
        "name": "LDSL-III Coarse-grained Soil Vertical Seepage Deformation Meter (slope type) 131",
        "model": "LDSL-III",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/LDSL-III.png",
        "image": "myImages/LDSL-III-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P241",
        "name": "LDST-300 Coarse-grained Soil Constant Head Permeameter 132",
        "model": "LDST-300",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/LDST-300.png",
        "image": "myImages/LDST-300-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P242",
        "name": "LD-08 Vibration Compaction Molding Machine 133",
        "model": "LD-08",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/LD-08.png",
        "image": "myImages/LD-08-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P243",
        "name": "SHM-200 Concrete/Rock Specimen Grinding Machine 134",
        "model": "SHM-200",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/SHM-200.png",
        "image": "myImages/SHM-200-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P244",
        "name": "DQ-1 Automatic Rock, Concrete and Masonry Saw 135",
        "model": "DQ-1",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/DQ-1.png",
        "image": "myImages/DQ-1-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P245",
        "name": "JZ-2D Multifunctional Electric Compaction Instrument 136",
        "model": "JZ-2D",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/JZ-2D.png",
        "image": "myImages/JZ-2D-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P246",
        "name": "DL Series Multifunctional Hydraulic Demoulding Machine 137",
        "model": "DL",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/DL.png",
        "image": "myImages/DL-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P247",
        "name": "ZBSX-92A Triple Motion Sieve Shaker 138",
        "model": "ZBSX-92A",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/ZBSX-92A.png",
        "image": "myImages/ZBSX-92A-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P248",
        "name": "LG-100D Digital Display Combined Soil Liquid-plastic Limit Tester 139",
        "model": "LG-100D",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/LG-100D.png",
        "image": "myImages/LG-100D-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P249",
        "name": "SD-II Sand Equivalent Tester 140",
        "model": "SD-II",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/SD-II.png",
        "image": "myImages/SD-II-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P250",
        "name": "LDSL-III Coarse-grained Soil Vertical Seepage Deformation Meter (slope type)",
        "model": "LDSL-III",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/LDSL-III.png",
        "image": "myImages/LDSL-III-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P251",
        "name": "LDST-300 Coarse-grained Soil Constant Head Permeameter",
        "model": "LDST-300",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/LDST-300.png",
        "image": "myImages/LDST-300-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P252",
        "name": "LDST-300 Coarse-grained Soil Constant Head Permeameter is used to measure the permeability coefficient of coarse-grained soil and graded crushed stone with the maximum particle size not greater than 75mm.",
        "model": "LDST-300",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/LDST-300.png",
        "image": "myImages/LDST-300-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P253",
        "name": "LD-08 Vibration Compaction Molding Machine",
        "model": "LD-08",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/LD-08.png",
        "image": "myImages/LD-08-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P254",
        "name": "SHM-200 Concrete/Rock Specimen Grinding Machine",
        "model": "SHM-200",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/SHM-200.png",
        "image": "myImages/SHM-200-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P255",
        "name": "ASTM D4543 | EN 12390-2",
        "model": "ASTM",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/ASTM.png",
        "image": "myImages/ASTM-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P256",
        "name": "SHM-200 double-end grinding stone machine is the main equipment for making standard samples of non-metallic solids such as rock ore and concrete for mechanical testing. This machine works together with the coring machine and stone cutting machine produced by our factory to process the high-precision cube or cylinder test samples you need. This product is suitable for colleges and universities, water conservancy and hydropower, address minerals, transportation, construction and other departments.",
        "model": "SHM-200",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/SHM-200.png",
        "image": "myImages/SHM-200-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P257",
        "name": "DQ-1 Automatic Rock, Concrete and Masonry Saw",
        "model": "DQ-1",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/DQ-1.png",
        "image": "myImages/DQ-1-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P258",
        "name": "ASTM D4543",
        "model": "ASTM",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/ASTM.png",
        "image": "myImages/ASTM-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P259",
        "name": "JZ-2D Multifunctional Electric Compaction Instrument",
        "model": "JZ-2D",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/JZ-2D.png",
        "image": "myImages/JZ-2D-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P260",
        "name": "EN 13286-2 | ASTM D698, D1557, D1883 | AASHTO T99, T180, T193",
        "model": "EN",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P261",
        "name": "DL Series Multifunctional Hydraulic Demoulding Machine",
        "model": "DL",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/DL.png",
        "image": "myImages/DL-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P262",
        "name": "ZBSX-92A Triple Motion Sieve Shaker",
        "model": "ZBSX-92A",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/ZBSX-92A.png",
        "image": "myImages/ZBSX-92A-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P263",
        "name": "EN 932-5 | ISO 3310-1",
        "model": "EN",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P264",
        "name": "LG-100D Digital Display Combined Soil Liquid-plastic Limit Tester",
        "model": "LG-100D",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/LG-100D.png",
        "image": "myImages/LG-100D-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P265",
        "name": "CEN ISO/TS 17892-12 | CEN ISO/TS 17892-06 | NF P94-052-1",
        "model": "CEN",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/CEN.png",
        "image": "myImages/CEN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P266",
        "name": "SD-II Sand Equivalent Tester",
        "model": "SD-II",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/SD-II.png",
        "image": "myImages/SD-II-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P267",
        "name": "EN 933-8 | NF XP18-598 | UNI 8520-15 | UNE 83131 | CNR N.27",
        "model": "EN",
        "category": "GEOTECHNICAL SAND AND GRAVEL TESTING SERIES 130",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P268",
        "name": "UJZ-15 Mortar Mixer 142",
        "model": "UJZ-15",
        "category": "MORTAR TESTING SERIES 141",
        "thumbnail": "myImages/UJZ-15.png",
        "image": "myImages/UJZ-15-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P269",
        "name": "UJZ-15 Mortar Mixer",
        "model": "UJZ-15",
        "category": "MORTAR TESTING SERIES 141",
        "thumbnail": "myImages/UJZ-15.png",
        "image": "myImages/UJZ-15-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P270",
        "name": "LDGD-80 Temperature And Humidity Climate Chambers (Reach-in Type) 146",
        "model": "LDGD-80",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/LDGD-80.png",
        "image": "myImages/LDGD-80-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P271",
        "name": "CSX-280 Switch Socket Humidity Test Chamber 148",
        "model": "CSX-280",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/CSX-280.png",
        "image": "myImages/CSX-280-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P272",
        "name": "101 Series Drying Ovens Forced Ventilation 149",
        "model": "101",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/101.png",
        "image": "myImages/101-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P273",
        "name": "SX2 Type Muffle Furnace 151",
        "model": "SX2",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/SX2.png",
        "image": "myImages/SX2-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P274",
        "name": "SX2 Series Muffle Furnace 152",
        "model": "SX2",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/SX2.png",
        "image": "myImages/SX2-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P275",
        "name": "DW Series Horizontal Low Temperature Chamber 153",
        "model": "DW",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/DW.png",
        "image": "myImages/DW-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P276",
        "name": "DW-40 Vertical Low Temperature Chamber 154",
        "model": "DW-40",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/DW-40.png",
        "image": "myImages/DW-40-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P277",
        "name": "HBY-1 Type Damp Heat Test Chamber 155",
        "model": "HBY-1",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/HBY-1.png",
        "image": "myImages/HBY-1-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P278",
        "name": "401A Type Aging Test Chamber 156",
        "model": "401A",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/401A.png",
        "image": "myImages/401A-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P279",
        "name": "LDGD-80 Temperature And Humidity Climate Chambers (Reach-in Type)",
        "model": "LDGD-80",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/LDGD-80.png",
        "image": "myImages/LDGD-80-Image.png",
        "description": "",
        "features": [
          "The components selected for this product are highly reliable and of high quality to ensure the reliability, stability and accuracy of the product performance."
        ],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P280",
        "name": "CSX-280 Switch Socket Humidity Test Chamber",
        "model": "CSX-280",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/CSX-280.png",
        "image": "myImages/CSX-280-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P281",
        "name": "101 Series Drying Ovens Forced Ventilation",
        "model": "101",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/101.png",
        "image": "myImages/101-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P282",
        "name": "EN 932-5 | EN 1097-5 | BS 1924 :1| BS 1377 :1, 1924 :1 | UNE 103300 |",
        "model": "EN",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P283",
        "name": "ASTM C127, C136, D558, D559, D560, D698, D1557, D1559",
        "model": "ASTM",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/ASTM.png",
        "image": "myImages/ASTM-Image.png",
        "description": "",
        "features": [
          "This drying oven has precise structure, sensitive temperature control and easy operation."
        ],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P284",
        "name": "SX2 Type Muffle Furnace",
        "model": "SX2",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/SX2.png",
        "image": "myImages/SX2-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P285",
        "name": "EN 12697-1 clause C | EN 13108 | EN 196-2, 196-21, 459-2 | EN 1367-5",
        "model": "EN",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P286",
        "name": "SX2 Series Muffle Furnace",
        "model": "SX2",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/SX2.png",
        "image": "myImages/SX2-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P287",
        "name": "EN 12697-1 clause C | EN 13108 | EN 196-2, 196-21, 459-2 | EN 1367-5",
        "model": "EN",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/EN.png",
        "image": "myImages/EN-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P288",
        "name": "DW Series Horizontal Low Temperature Chamber",
        "model": "DW",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/DW.png",
        "image": "myImages/DW-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P289",
        "name": "DW Series Horizontal low temperature test chamber refrigeration using brand compressor, stainless steel liner, insulation layer made of imported raw materials foam,good insulation effect, power saving,design five evaporation pipeline, with uniform temperature, prevent leakage and other characteristics.",
        "model": "DW",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/DW.png",
        "image": "myImages/DW-Image.png",
        "description": "",
        "features": [
          "This product has high cooling efficiency and low noise."
        ],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P290",
        "name": "DW-40 Vertical Low Temperature Chamber",
        "model": "DW-40",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/DW-40.png",
        "image": "myImages/DW-40-Image.png",
        "description": "",
        "features": [],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P291",
        "name": "DW-40 high and low temperature test chamber refrigeration using the United States Danfoss brand-name compressor, stainless steel liner. Insulation layer made of imported raw materials foam, good insulation effect, power saving,the latest design of five evaporation pipeline, with uniform temperature,prevent leakage and other characteristics.This product is widely used in building materials, medicine, electronics, scientific research and other departments to do high and low temperature test, aging test.",
        "model": "DW-40",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/DW-40.png",
        "image": "myImages/DW-40-Image.png",
        "description": "",
        "features": [
          "The overall structure is strong, beautiful shape, good corrosion resistance;",
          "The temperature and humidity meter adopts setting, displaying double digital display, which has the advantages of high resolution, intuition, easy adjustment and high control accuracy."
        ],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P292",
        "name": "HBY-1 Type Damp Heat Test Chamber",
        "model": "HBY-1",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/HBY-1.png",
        "image": "myImages/HBY-1-Image.png",
        "description": "",
        "features": [
          "The overall structure is strong, beautiful shape, good corrosion resistance.",
          "The temperature and humidity meter adopts setting, displaying double digital display,which has the advantages of high resolution, intuition, easy adjustment and high control accuracy."
        ],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P293",
        "name": "401A Type Aging Test Chamber",
        "model": "401A",
        "category": "SCIENTIFIC RESEARCH PRODUCT SERIES 145",
        "thumbnail": "myImages/401A.png",
        "image": "myImages/401A-Image.png",
        "description": "",
        "features": [
          "Sensitive temperature control and good temperature uniformity.",
          "Large effective space and stable performance."
        ],
        "standards": [],
        "specifications": [],
        "hasManual": false,
        "hasVideo": false,
        "hasCAD": false,
        "isNew": false
      }
    ]
};