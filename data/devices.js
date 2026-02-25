// data/devices.js
// 路达设备数据 - 包含所有分类和设备信息

module.exports = {
  // 设备分类数据
  categories: [
    {
      id: "tensile",
      name: "路达电子万能材料试验机系列",
      description: "高精度电子万能材料试验机，适用于塑料、橡胶、纺织品、金属等材料的拉伸性能测试。",
      icon: "/assets/images/electronic-tensile-machine-icon.jpg"
    },
    {
      id: "universal",
      name: "路达液压万能试验机产品系列",
      description: "多功能材料试验设备，适用于金属、非金属材料的拉伸、压缩、弯曲、剪切等多种力学性能测试。",
      icon: "/assets/images/universal-testing-machine-icon.png"
    },
    {
      id: "pressure",
      name: "路达压力机系列",
      description: "液压式、电动式压力试验机，广泛应用于混凝土、砖块、岩石等建筑材料的抗压强度测试。",
      icon: "/assets/images/pressure-machine-icon.jpg"
    },

    {
      id: "large_machine",
      name: "路达大型试验机系列",
      description: "各类其他试验机，包括扭转，蠕变，疲劳，冲击等各种试验",
      icon: "/assets/images/large-testing-machine-icon.jpg"
    },
    {
      id: "research",
      name: "路达科研产品系列",
      description: "高端精密科研仪器，为高校、科研院所提供高精度、高稳定性的材料研究测试解决方案。",
      icon: "/assets/images/research-product-icon.png"
    },
    {
      id: "concrete",
      name: "路达混凝土检测产品系列",
      description: "混凝土原材料及成品检测设备，包括搅拌、成型、养护、强度测试等全流程检测仪器。",
      icon: "/assets/images/concrete-test-icon.jpg"
    },
    {
      id: "cement",
      name: "路达水泥仪器产品系列",
      description: "水泥及水泥基材料性能测试设备，涵盖稠度、凝结时间、安定性、强度等全套检测项目。",
      icon: "/assets/images/cement-instrument-icon.png"
    },
    {
      id: "asphalt",
      name: "路达沥青仪器系列",
      description: "沥青及沥青混合料性能测试设备，包括针入度、软化点、延度、马歇尔稳定度等全套检测仪器。",
      icon: "/assets/images/asphalt-instrument-icon.png"
    },
    {
      id: "geotechnical",
      name: "路达土工砂石仪器系列",
      description: "土工试验设备，包括土壤、砂石、岩石的物理力学性能测试仪器，满足岩土工程勘察需求。",
      icon: "/assets/images/geotechnical-instrument-icon.jpg"
    }
  ],

  // 所有设备数据png
  devices: [
    // ========== 压力机系列 ==========
      {
        id: "P001",
        name: "微机控制电液伺服压剪试验机",
        model: "YJW系列",
        category: "路达大型试验机系列",
        thumbnail: "myImages/YJW系列.png",
        image: "myImages/YJW系列-Image.png",
        description: "该试验机主要用于公路、铁路、桥梁、建筑板式橡胶支座、盆式支座、球型支座产品的力学性能、阻尼性能、橡胶支座大变形试验和检测。设备可进行抗压弹性模量试验、抗剪弹性模量试验、剪切试验（静态剪切）、极限抗压强度试验、摩擦系数试验、转角试验及公路桥梁盆式支座的荷载试验下轴向压缩变形和径向变形的检测。",
        features: [],
        specifications: [
          {
            label: "型号规格",
            value: "YJW-5000 YJW-10000 YJW-20000"
          },
          {
            label: "试验机最大空间",
            value: "600mm 900mm 900mm"
          },
          {
            label: "立柱净距",
            value: "X方向950mm"
          },
          {
            label: "Y方向950mm",
            value: "X方向1200mm"
          },
          {
            label: "Y方向1030mm",
            value: "X方向1520mm"
          },
          {
            label: "Y方向1030mm",
            value: ""
          },
          {
            label: "主作动器",
            value: "最大负荷 5000kN 10000kN 20000kN"
          },
          {
            label: "负荷精度",
            value: "优于±1%(0.4%-100%F.S.)"
          },
          {
            label: "试验力分辨率",
            value: "250000码"
          },
          {
            label: "工作活塞速度",
            value: "0~30mm/min(可调)"
          },
          {
            label: "工作活塞最大行程",
            value: "600mm 800mm 1000mm"
          },
          {
            label: "下压板尺寸",
            value: "850×850mm 1050×1050mm 1450×1450mm"
          },
          {
            label: "下压板移动方式",
            value: "电机传动"
          },
          {
            label: "最大位移",
            value: "0~900mm"
          },
          {
            label: "位移精度",
            value: "优于1%F.S"
          },
          {
            label: "位移分辨率",
            value: "0.001mm"
          },
          {
            label: "主机外形尺寸",
            value: "5000×1240×3200mm 6000×1750×4580mm 7850×2310×5220mm"
          },
          {
            label: "液压源尺寸",
            value: "1200×600×1300mm 1360×600×1625mm 1360×600×1625mm"
          },
          {
            label: "控制柜外形",
            value: "1500×870×880mm 1960×870×880mm 1960×870×880mm"
          },
          {
            label: "设备重量",
            value: "约16000kg 约 40000kg 约90000kg"
          }
        ],
        hasManual: false,
        hasVideo: true,
        hasCAD: false,
        isNew: true
      },
      {
        "id": "P002",
        "name": "全自动控制静载锚固试验机",
        "model": "WJM-5000",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/WJM-5000.png",
        "image": "myImages/WJM-5000-Image.png",
        "description": "WJM系列静载锚固试验机主要用于铁路桥梁及水利、电力等基础设施建设中钢绞线-锚具的静载锚固性能试验，以判断钢绞线锚具的力学性能是否达到规定要求。设备全自动控制，带6种规格挡板，挡板规格：3孔到17孔，共6付。\n产品符合GB/T14370-2015《预应力筋用紧固件、夹具和连接器》标准要求。",
        "features": [
          "主机为卧式结构，高度适中，操作方便。其承力台座为焊接结构，刚度高，重量轻；",
          "采用通用型预应力穿心式千斤顶，通用性强，适合于施加预应力。可适用于张拉欧威姆夹片群、锚DM型镦头锚和LEM型冷铸锚；",
          "工作千斤顶的活塞为双作用式，可实现快速返回；",
          "采用大流量高压泵，通过手动阀可控制加载速度；",
          "全数字测控器，性能稳定，测控精度高；",
          "具有力及位移自动清零，自动标定功能；",
          "测力分辨力高全程不变化、不分档；",
          "整机配备6付圆孔垫板；"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WJM-5000"
          },
          {
            "label": "最大试验力kN",
            "value": "5000"
          },
          {
            "label": "测量范围kN",
            "value": "250～5000"
          },
          {
            "label": "力值误差%",
            "value": "±1"
          },
          {
            "label": "位移测量范围mm",
            "value": "0～200"
          },
          {
            "label": "示值误差%",
            "value": "±1"
          },
          {
            "label": "重复性%",
            "value": "±1"
          },
          {
            "label": "相对分辨率%",
            "value": "0.5"
          },
          {
            "label": "长期稳定性%",
            "value": "1"
          },
          {
            "label": "活塞行程mm",
            "value": "200"
          },
          {
            "label": "拉伸间距mm",
            "value": "3400"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "3600×670×780"
          },
          {
            "label": "小车尺寸mm",
            "value": "700×450×800"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P003",
        "name": "全自动控制静载锚固试验机",
        "model": "WJM-6500",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/WJM-6500.png",
        "image": "myImages/WJM-6500-Image.png",
        "description": "WJM系列静载锚固试验机主要用于铁路桥梁及水利、电力等基础设施建设中钢绞线-锚具的静载锚固性能试验，以判断钢绞线锚具的力学性能是否达到规定要求。设备全自动控制，带6种规格挡板，挡板规格：3孔到17孔，共6付。\n产品符合GB/T14370-2015《预应力筋用紧固件、夹具和连接器》标准要求。",
        "features": [
          "主机为卧式结构，高度适中，操作方便。其承力台座为焊接结构，刚度高，重量轻；",
          "采用通用型预应力穿心式千斤顶，通用性强，适合于施加预应力。可适用于张拉欧威姆夹片群、锚DM型镦头锚和LEM型冷铸锚；",
          "工作千斤顶的活塞为双作用式，可实现快速返回；",
          "采用大流量高压泵，通过手动阀可控制加载速度；",
          "全数字测控器，性能稳定，测控精度高；",
          "具有力及位移自动清零，自动标定功能；",
          "测力分辨力高全程不变化、不分档；",
          "整机配备6付圆孔垫板；"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WJM-6500"
          },
          {
            "label": "最大试验力kN",
            "value": "6500"
          },
          {
            "label": "测量范围kN",
            "value": "250～6500"
          },
          {
            "label": "力值误差%",
            "value": "±1"
          },
          {
            "label": "位移测量范围mm",
            "value": "0～200"
          },
          {
            "label": "示值误差%",
            "value": "±1"
          },
          {
            "label": "重复性%",
            "value": "±1"
          },
          {
            "label": "相对分辨率%",
            "value": "0.5"
          },
          {
            "label": "长期稳定性%",
            "value": "1"
          },
          {
            "label": "活塞行程mm",
            "value": "200"
          },
          {
            "label": "拉伸间距mm",
            "value": "3600"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "3600×670×780"
          },
          {
            "label": "小车尺寸mm",
            "value": "700×450×800"
          },
          {
            "label": "控制柜尺寸mm",
            "value": "1210×770×1020"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P004",
        "name": "微机静载锚板强度试验机",
        "model": "WAW-10000MB",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/WAW-10000MB.png",
        "image": "myImages/WAW-10000MB-Image.png",
        "description": "WAW-10000MB型微机静载锚板强度试验机是浙江路达机械仪器有限公司最新研制的新一代专用压力试验机。采用了液压动力源驱动，电液伺服控制技术，计算机数据采集处理，可实现闭环控制及自动检测的高精度材料试验设备。具有负荷、时间及试验曲线动态显示及及时控制功能和试验力保持功能。\n该试验机及配件符合GB/T14370-2015及TB3193-2016标准要求。",
        "features": [],
        "specifications": [
          {
            "label": "最大试验力",
            "value": "10000kN"
          },
          {
            "label": "测量精度范围",
            "value": "5%~100%"
          },
          {
            "label": "准确度",
            "value": "≤±1%"
          },
          {
            "label": "加荷速率精度",
            "value": "±5%"
          },
          {
            "label": "上下压板间距离",
            "value": "200mm"
          },
          {
            "label": "活塞最大行程",
            "value": "200mm"
          },
          {
            "label": "活塞直径",
            "value": "Φ450mm"
          },
          {
            "label": "油液最高压力",
            "value": "63MPa"
          },
          {
            "label": "油泵额定流量",
            "value": "6.22L/min"
          },
          {
            "label": "油泵电机功率",
            "value": "3kW"
          },
          {
            "label": "外形尺寸",
            "value": "1080×750×2000mm"
          },
          {
            "label": "重量",
            "value": "6000kg"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P005",
        "name": "微机控制拉伸应力松弛试验机",
        "model": "LDCJ-300",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/LDCJ-300.png",
        "image": "myImages/LDCJ-300-Image.png",
        "description": "LDCJ系列微机控制拉伸应力松弛试验机是用于在室温下测量金属材料松弛性能的试验设备，适用于科研院所、工矿企业、大专院校、交通质检等行业。本产品采用进口伺服电机、滚珠丝杆，全自动电脑控制。\n产品符合GB/T10120-96《金属应力松弛试验方法》。",
        "features": [
          "卧式横拉结构，由立柱、横梁构成承载框架，通过精密滚珠丝杠左右运动，完成加载；",
          "提升了试验结构，试验后非常容易松开；",
          "测量控制系统：采用专为微机控制拉伸应力松弛试验机设计的DEVO SC3.20型控制系统；",
          "全自动微机伺服控制，可实现高精度、宽范围、多功能的伺服控制；",
          "可做除钢绞线以外的金属材料的松弛试验，一机多用；"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "300"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%（全程不分档）"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "负荷分辨率",
            "value": "0.001kN（全部测量范围不分档，负荷分辨率不变）"
          },
          {
            "label": "位移示值准确度",
            "value": "优于示值的±0.5%"
          },
          {
            "label": "加荷速度mm/min",
            "value": "0.01～40（或50）任意设定"
          },
          {
            "label": "丝杆行程mm",
            "value": "100"
          },
          {
            "label": "试验空间mm",
            "value": "1850（左右夹头最大拉伸间距）"
          },
          {
            "label": "电源功率",
            "value": "2.3kW，AC220V±10%,50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "2250×530×1200"
          },
          {
            "label": "重量kg",
            "value": "1200"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P006",
        "name": "微机控制拉伸应力松弛试验机",
        "model": "LDCJ-500",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/LDCJ-500.png",
        "image": "myImages/LDCJ-500-Image.png",
        "description": "LDCJ系列微机控制拉伸应力松弛试验机是用于在室温下测量金属材料松弛性能的试验设备，适用于科研院所、工矿企业、大专院校、交通质检等行业。本产品采用进口伺服电机、滚珠丝杆，全自动电脑控制。\n产品符合GB/T10120-96《金属应力松弛试验方法》。",
        "features": [
          "卧式横拉结构，由立柱、横梁构成承载框架，通过精密滚珠丝杠左右运动，完成加载；",
          "提升了试验结构，试验后非常容易松开；",
          "测量控制系统：采用专为微机控制拉伸应力松弛试验机设计的DEVO SC3.20型控制系统；",
          "全自动微机伺服控制，可实现高精度、宽范围、多功能的伺服控制；",
          "可做除钢绞线以外的金属材料的松弛试验，一机多用；"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "500"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%（全程不分档）"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "负荷分辨率",
            "value": "0.001kN（全部测量范围不分档，负荷分辨率不变）"
          },
          {
            "label": "位移示值准确度",
            "value": "优于示值的±0.5%"
          },
          {
            "label": "加荷速度mm/min",
            "value": "0.01～40（或50）任意设定"
          },
          {
            "label": "丝杆行程mm",
            "value": "100"
          },
          {
            "label": "试验空间mm",
            "value": "1850（左右夹头最大拉伸间距）"
          },
          {
            "label": "电源功率",
            "value": "2.3kW，AC220V±10%,50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "2250×530×1200"
          },
          {
            "label": "重量kg",
            "value": "1200"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P007",
        "name": "智能钢筋重量偏差标距仪",
        "model": "LDGC-50",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/LDGC-50.png",
        "image": "myImages/LDGC-50-Image.png",
        "description": "智能钢筋重量偏差标距仪是一种专用仪器，用于测量和标记建筑用钢筋材料的重量偏差。它集成重量偏差和标距功能于一体。可同时完成5根钢筋的称重和标距，提高试验效率。",
        "features": [
          "13.3 寸嵌入式彩色触摸大屏，实时显示、计算、分析和打印试验结果，",
          "增加数据的可靠性。",
          "具备数据联网功能，试验数据会自动上传至云端，长期保存，确保数据",
          "的可追溯性和还原性。",
          "使用高精度定位装置，可将定位精度控制在毫米级，提高试验精度。",
          "采用激光标距技术，具有打标轻柔、标记清晰等特点，避免操作过度用力导致钢筋性能结构受损，确保工程质量。",
          "配有光电保护装置，如果误操作手伸入工作区，马上停止激光打标，提",
          "高安全系数，保护检测人员的人身安全"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "LDGC-50"
          },
          {
            "label": "称重测长",
            "value": "试样最大数量 5"
          },
          {
            "label": "直径范围",
            "value": "Φ6-50mm"
          },
          {
            "label": "称重量程",
            "value": "0.5-80kg"
          },
          {
            "label": "称重分辨力",
            "value": "1g"
          },
          {
            "label": "长度范围",
            "value": "450-700mm"
          },
          {
            "label": "长度测量示值精度",
            "value": "≤±0.5mm"
          },
          {
            "label": "激光打标",
            "value": "激光范围 300mm"
          },
          {
            "label": "可选标距",
            "value": "5mm/10mm （可自行设定）"
          },
          {
            "label": "标距测量示值精度",
            "value": "≤±0.01mm"
          },
          {
            "label": "功率",
            "value": "50W"
          },
          {
            "label": "安全防护方式",
            "value": "安全光幕"
          },
          {
            "label": "工业电脑",
            "value": "13.3 时电容触摸屏"
          },
          {
            "label": "总功率",
            "value": "600W"
          },
          {
            "label": "电压",
            "value": "220V"
          },
          {
            "label": "尺寸",
            "value": "1100×650×1720mm"
          },
          {
            "label": "重量",
            "value": "约350kg"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P008",
        "name": "微机控制静载轨枕试验机",
        "model": "TSY-500",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/TSY-500.png",
        "image": "myImages/TSY-500-Image.png",
        "description": "静载轨枕试验机是用于检测混凝土轨枕（I型枕、II型枕、III型枕、叉枕、桥枕、宽轨枕等）静载抗裂张度试验的设备。本机测力采用了高精度负荷传感器，微电脑程序控制，电液比例液压加荷系统等新技术，配备三个高精度轮辐传感器，保证三个单独受压点的数据精确，并配备LED裂缝观测专用灯。本设备由铁科院提供技术支持，试验过程全自动电脑控制。\n产品符合《TB/T1879-2002预应力混凝土枕静载抗裂试验方法》标准。",
        "features": [
          "本机测力采用了高精度负荷传感器，微电脑程序控制，电液比例液压加荷系统等技术；",
          "利用定位标尺（自配）调整轨枕位置使其负荷中心与压板中心重合；",
          "根据设定的工作程序，活塞活动自如；",
          "加荷速度匀速加载；",
          "可任意设置静载点，数据结果报表自动打印。"
        ],
        "specifications": [
          {
            "label": "轨下最大负荷值kN",
            "value": "500"
          },
          {
            "label": "载荷示值精度",
            "value": "±1%"
          },
          {
            "label": "放置轨枕后初始载荷kN",
            "value": "<20"
          },
          {
            "label": "加载速度N/s",
            "value": "3000±300"
          },
          {
            "label": "保载时间s",
            "value": "180"
          },
          {
            "label": "活塞最大行程mm",
            "value": "250"
          },
          {
            "label": "轨下加载支距可调，分别为mm",
            "value": "600，700，800"
          },
          {
            "label": "轨中加载支距可调，分别为mm",
            "value": "600，1500"
          },
          {
            "label": "试验空间",
            "value": "上下支座间距离mm：430"
          },
          {
            "label": "四立柱间距离mm",
            "value": "820，900"
          },
          {
            "label": "液压泵站有关参数",
            "value": ""
          },
          {
            "label": "额定压力",
            "value": "高压油泵31.5MPa"
          },
          {
            "label": "额定排量",
            "value": "高压油泵25ml/rec"
          },
          {
            "label": "电机功率",
            "value": "1.2KW 转速980rpm"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz带零线"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "1720×990×2266"
          },
          {
            "label": "小车mm",
            "value": "3390×700×135"
          },
          {
            "label": "控制柜mm",
            "value": "1210×770×1020"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P009",
        "name": "全自动高强螺栓检测仪",
        "model": "LD-JZ500D",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/LD-JZ500D.png",
        "image": "myImages/LD-JZ500D-Image.png",
        "description": "该设备根据GB/T50205-2001《钢结构工程施工质量验收规范》有关要求设计制造，可对7/16英寸的非标螺栓的轴力、扭矩进行检测。产品在运行过程中自动加载，当轴力达到后，能够自动卸载，自动记录测试数据，并具有参数备份和恢复自动标定功能。",
        "features": [
          "轴力和扭矩的峰值保持。",
          "能储存420组数据，可长期保存，并可随意读取。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "LD-JZ500D"
          },
          {
            "label": "轴力测量范围kN",
            "value": "30～500"
          },
          {
            "label": "扭矩测量范围Nm",
            "value": "50～2000"
          },
          {
            "label": "分辨率kN",
            "value": "±0.1"
          },
          {
            "label": "示值误差kN",
            "value": "±1%"
          },
          {
            "label": "显示方式",
            "value": "液晶显示"
          },
          {
            "label": "外形尺寸mm",
            "value": "1470×550×1400"
          },
          {
            "label": "整机重量kg",
            "value": "1600"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P010",
        "name": "全自动高强螺栓轴力扭矩复合检测仪",
        "model": "LD-JZ1000D",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/LD-JZ1000D.png",
        "image": "myImages/LD-JZ1000D-Image.png",
        "description": "本检测仪可以对大六角头高强螺栓连接副（M16、M20、M22、M24、M27、M30、M33、M36）和扭剪型高强螺栓连接副（M16、M20、M22、M24、M27、M30）的轴力、扭矩（或扭矩系数）进行自动检测、显示并打印。\n符合GB/T50205-2020《钢结构工程施工质量验收规范》标准。",
        "features": [],
        "specifications": [
          {
            "label": "轴力测量范围kN",
            "value": "30~1000"
          },
          {
            "label": "扭矩测量范围Nm",
            "value": "50~5000"
          },
          {
            "label": "分辨率kN",
            "value": "±0.1"
          },
          {
            "label": "示值误差kN",
            "value": "±1%"
          },
          {
            "label": "显示方式",
            "value": "液晶显示"
          },
          {
            "label": "轴力和扭矩的峰值保持",
            "value": ""
          },
          {
            "label": "数据存储和查询",
            "value": ""
          },
          {
            "label": "能储存420组数据，可长期保存，并可随意读取",
            "value": ""
          },
          {
            "label": "每组试验数据储存的内容有试验日期、试验编号、高强螺栓的型号、等级、规格和检测的N个轴力、扭矩及平均轴力、平均扭矩、平均扭矩系数、标准偏差和变异系数等。",
            "value": ""
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P011",
        "name": "滑移板紧固机",
        "model": "LD-JG500D",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/LD-JG500D.png",
        "image": "myImages/LD-JG500D-Image.png",
        "description": "本产品主要用于紧固抗滑移系数测试件轴向加紧力，使操作人员简单快捷的完成滑移系数检测的前期准备工作，更好的提高工作效率和减轻操作人员的负担。本机采用电机加载，齿轮传动，不受试件外形尺寸影响。",
        "features": [],
        "specifications": [
          {
            "label": "扭紧螺栓规格",
            "value": "M16~M30"
          },
          {
            "label": "扭紧转速",
            "value": "1rpm"
          },
          {
            "label": "最大扭矩",
            "value": "2000(Nm)"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P012",
        "name": "抗滑移系数测定仪",
        "model": "LDKH-24",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/LDKH-24.png",
        "image": "myImages/LDKH-24-Image.png",
        "description": "该检测仪根据GB50205-2020《钢结构工程施工质量验收规范》有关要求设计制造，可对大六角头高强螺栓连接副M16,M20,M22,M24, M27,M30的轴力、扭矩、扭矩系数、进行检测，显示并打印。",
        "features": [],
        "specifications": [
          {
            "label": "型号规格",
            "value": "LDKH-24"
          },
          {
            "label": "轴力测量范围",
            "value": "30～400kN"
          },
          {
            "label": "扭矩测量范围",
            "value": "50～2000Nm"
          },
          {
            "label": "分辨率",
            "value": "±0.1kN"
          },
          {
            "label": "示值误差",
            "value": "±1% kN"
          },
          {
            "label": "显示方式",
            "value": "液晶显示"
          },
          {
            "label": "外形尺寸",
            "value": "500×330×1130mm"
          },
          {
            "label": "整机重量",
            "value": "30kg"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P013",
        "name": "卧式钢筋弯曲试验机",
        "model": "GW-40C",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/GW-40C.png",
        "image": "myImages/GW-40C-Image.png",
        "description": "GW-40C卧式钢筋弯曲试验机采用高性能电机带动减速机，实现钢筋的平面弯曲。设备自带弯曲程序，一键操作完成弯曲试验。\n产品符合YB/T5126-2003《钢筋混凝土用钢筋弯曲和反向弯曲试验方法》、GB14992-2007《钢筋混凝土用钢第2部分：热轧带肋钢筋》、GB/T232-2010《金属材料弯曲试验方法》，适用于钢厂、建筑单位、工况企业、交通质检等行业。",
        "features": [
          "工作盘可进行正弯和反弯设定；",
          "操作面板双显装置；",
          "主机上有防护罩等安全装置；",
          "可进行手动正弯和反弯；",
          "一旦出现异常状态可进行清零和停止。"
        ],
        "specifications": [
          {
            "label": "钢筋弯曲直径mm",
            "value": "Φ6～Φ40"
          },
          {
            "label": "钢筋正向弯曲角度°",
            "value": "0～180（任意设定）"
          },
          {
            "label": "钢筋反向弯曲角度°",
            "value": "0～20（任意设定）"
          },
          {
            "label": "正向弯芯mm",
            "value": "4×Φ6、4×Φ8、4×Φ10（5×Φ8）、4×Φ12、4×Φ14、4×Φ16、4×Φ18、4×Φ20（5×Φ16）、4×Φ22、4×Φ25、5×Φ28、5×Φ32、5×Φ36、5×Φ40"
          },
          {
            "label": "反向弯芯mm",
            "value": "5×Φ6、5×Φ10、5×Φ12、5×Φ14、5×Φ18、5×Φ22、5×Φ25、6×Φ28、6×Φ32"
          },
          {
            "label": "工作盘旋转速度 r/min",
            "value": "<3.7"
          },
          {
            "label": "辊心距离mm",
            "value": "165"
          },
          {
            "label": "工作盘直径mm",
            "value": "Φ580"
          },
          {
            "label": "电源功率",
            "value": "AC380V±10% 三相四线，1.5kW"
          },
          {
            "label": "外形尺寸mm",
            "value": "1050×740×1170"
          },
          {
            "label": "重量kg",
            "value": "750"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P014",
        "name": "立式钢筋正反弯曲试验机",
        "model": "LDWQ-40D",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/LDWQ-40D.png",
        "image": "myImages/LDWQ-40D-Image.png",
        "description": "钢筋弯曲试验机是对钢筋进行冷弯试验和平面反面弯曲试验的专用设备。设备采用立式三油缸结构设计，双向油缸液压加载，弯曲支辊由两侧的横向弯曲油缸带动，支辊自动同步进退调整跨距，一键操作完成弯曲试验。\n产品符合《GB 1499.1-2017 钢筋混凝土用钢 第 1 部分：热轧光圆钢筋》、《GB 1499.2-2018 钢筋混凝土用钢第 2 部分：热轧带肋钢筋》、 《YB/T 5126-2003 钢筋混凝土用钢筋弯曲和反向弯曲试验试验方法》、《GB/T 232-2010 金属材料弯曲试验方法》及《GB/T28900-2012 钢筋混凝土用钢材试验方法》等相关标准要求。",
        "features": [
          "立式封闭式一体机身设计，静音油泵液压系统。",
          "3 油缸设计，支辊跨距由带有位移测量的 2 个侧向油缸驱动。",
          "带有可全方位观察的全透面防护罩，正面有机玻璃防护移门，静音滑动。",
          "进口 PLC 控制，配 10.1 寸组态触摸屏，具有动画显示，角度实时显示，弯",
          "曲过程自动控制等功能。操作界面友好，试验步骤已分解成整屏幕的界面，按",
          "提示一步一步操作，简单易学。",
          "支持弯曲试验（0-180 度），反向弯曲试验（正弯 90 度，反弯 20 度），反向",
          "弯曲需要使用附加的弯曲支座（选配）。",
          "带有渣滓，钢筋氧化料皮收集抽屉。",
          "一键试验。用户选择钢筋类型参数和直径以后，弯曲机自动调节跨距，并给",
          "出弯芯编号。按下试验以后，弯曲机自动完成下压弯曲和侧向加压，结束以后，",
          "垂直油缸和侧向油缸自动回位。"
        ],
        "specifications": [
          {
            "label": "弯曲直径范围mm",
            "value": "Φ6～Φ40"
          },
          {
            "label": "弯曲角度范围°",
            "value": "0～180内任意设定"
          },
          {
            "label": "油缸行程mm",
            "value": "250"
          },
          {
            "label": "横向弯曲速度mm/min",
            "value": "300"
          },
          {
            "label": "支辊最大间距mm",
            "value": ">600（支辊中心距）"
          },
          {
            "label": "弯芯直径",
            "value": "由配件决定（最大支持到Φ40mm钢筋）"
          },
          {
            "label": "正弯弯芯mm",
            "value": "Φ6、Φ8、Φ10、Φ12、Φ14、Φ16、Φ18、Φ20、Φ24、Φ30、Φ32、Φ40（共用）、Φ48、Φ56、Φ64、Φ72、Φ80（共用）、Φ88、Φ100（共用）、Φ140、Φ160、Φ180、Φ200"
          },
          {
            "label": "反弯弯芯mm",
            "value": "Φ40（共用）、Φ50、Φ60、Φ70、Φ80（共用）、Φ90、Φ100（共用）、Φ110、Φ125、Φ168、Φ192、Φ216、Φ240"
          },
          {
            "label": "注",
            "value": "Φ40、Φ80、Φ100 为共用弯芯，随机仅配置1个"
          },
          {
            "label": "液压油量L",
            "value": "80"
          },
          {
            "label": "最大轴向油缸载荷kN",
            "value": "300"
          },
          {
            "label": "最大水平油缸载荷kN",
            "value": "300"
          },
          {
            "label": "供电电源",
            "value": "三相四线，AC380V±10%,50Hz"
          },
          {
            "label": "额定功率W",
            "value": "3000"
          },
          {
            "label": "外形尺寸mm",
            "value": "1760×700×2160"
          },
          {
            "label": "重量kg",
            "value": "750"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P015",
        "name": "钢管弯曲试验机",
        "model": "LDGW-60C",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/LDGW-60C.png",
        "image": "myImages/LDGW-60C-Image.png",
        "description": "LDGW-60C钢管弯曲试验机具有结构紧凑、操作简单、弯曲角度显示直观、运行平稳、安全、噪声低、易维修等特点。钢管弯曲试验机是对钢管进行冷弯试验的专用设备。",
        "features": [],
        "specifications": [
          {
            "label": "控制方式",
            "value": "手动控制、自动控制"
          },
          {
            "label": "钢管外径mm",
            "value": "Φ10.2～Φ60.3（8种）"
          },
          {
            "label": "弯心的弯曲半径",
            "value": "6d"
          },
          {
            "label": "弯曲角度°",
            "value": "0_x001f_～90（内任意设定）"
          },
          {
            "label": "角度设定分辨力°",
            "value": "1"
          },
          {
            "label": "角度控制精度°",
            "value": "±1"
          },
          {
            "label": "工作盘转速r/min",
            "value": "1.4"
          },
          {
            "label": "电动机功率kW",
            "value": "2"
          },
          {
            "label": "机器外形mm",
            "value": "1300×900×1200"
          },
          {
            "label": "机器重量kg",
            "value": "2000"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P016",
        "name": "粗粒土垂直渗透变形仪",
        "model": "LDSL-III",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/LDSL-III.png",
        "image": "myImages/LDSL-III-Image.png",
        "description": "本设备是测定粗颗粒士在渗流水通过时，试样的渗透系数和细颗粒随渗流逐渐流失的临界坡降（管涌）及土体整体浮动时的破坏坡降（流土）。本试验适用于扰动的粗颗粒土试样和原状粗颗粒土试样。\n产品符合SL237-2019标准。",
        "features": [
          "折叠升降系统，节省空间，设备移动方便；",
          "7寸大屏全触摸液晶屏操作；",
          "高精度伺服步进传动系统，保证水位升降精度；",
          "全自动恒水位循环系统。"
        ],
        "specifications": [
          {
            "label": "试筒规格mm",
            "value": "Φ300×600"
          },
          {
            "label": "试筒高度mm",
            "value": "600"
          },
          {
            "label": "水位高度mm",
            "value": "3000"
          },
          {
            "label": "测压孔间距mm",
            "value": "250"
          },
          {
            "label": "加荷设备",
            "value": "杠杆加压"
          },
          {
            "label": "供水桶mm",
            "value": "140×140×140"
          },
          {
            "label": "储水桶mm",
            "value": "200×400×450"
          },
          {
            "label": "电压",
            "value": "AC 220V"
          },
          {
            "label": "外形尺寸",
            "value": "1400×600×1900"
          },
          {
            "label": "设备重量kg",
            "value": "250"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P017",
        "name": "粗粒土水平渗透试验仪",
        "model": "LDSL-IV",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/LDSL-IV.png",
        "image": "myImages/LDSL-IV-Image.png",
        "description": "本试验适用于扰动的粗颗粒土试样和原状粗颗粒土试样。本产品符合GB/T50123-2019标准。",
        "features": [],
        "specifications": [
          {
            "label": "试筒规格",
            "value": "300×300×600mm"
          },
          {
            "label": "水位高度",
            "value": "3000mm"
          },
          {
            "label": "测压孔间距",
            "value": "50mm"
          },
          {
            "label": "加荷设备",
            "value": "杠杆加压"
          },
          {
            "label": "供水桶",
            "value": "140×140×140mm"
          },
          {
            "label": "储水桶",
            "value": "260×400×400mm"
          },
          {
            "label": "电压",
            "value": "AC 220V"
          },
          {
            "label": "外形尺寸",
            "value": "1400×600×1900"
          },
          {
            "label": "设备重量",
            "value": "200kg"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P018",
        "name": "粗粒土常水头渗透仪",
        "model": "LDST-300",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/LDST-300.png",
        "image": "myImages/LDST-300-Image.png",
        "description": "LDST-300粗粒土常水头渗透仪用于测定最大粒径不大于75mm的粗粒土和级配碎石的渗透系数。\n该设备符合TB10751-2018《高速铁路路基工程施工质量验收标准》。",
        "features": [
          "全自动恒温控制系统；",
          "控温精准，精度高；",
          "操作使用方便。"
        ],
        "specifications": [
          {
            "label": "供水箱容积L",
            "value": "80"
          },
          {
            "label": "金属筒内径mm",
            "value": "300"
          },
          {
            "label": "金属筒高mm",
            "value": "500"
          },
          {
            "label": "金属筒壁厚mm",
            "value": "10"
          },
          {
            "label": "测压管个数",
            "value": "5"
          },
          {
            "label": "测压管内径mm",
            "value": "6"
          },
          {
            "label": "测压管刻度分刻值mm",
            "value": "1"
          },
          {
            "label": "测压孔间距mm",
            "value": "50"
          },
          {
            "label": "渗水孔直径mm",
            "value": "16"
          },
          {
            "label": "溢水管内径mm",
            "value": "16"
          },
          {
            "label": "透水板孔径mm",
            "value": "3.5"
          },
          {
            "label": "重量kg",
            "value": "150"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P019",
        "name": "五联细粒土变水头渗透仪",
        "model": "LDBS-5",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/LDBS-5.png",
        "image": "myImages/LDBS-5-Image.png",
        "description": "该渗透仪是一种用来测定土的渗透系数的室内土工试验仪器。",
        "features": [],
        "specifications": [
          {
            "label": "土样直径61.8mm,",
            "value": "即土样面积30cm²"
          },
          {
            "label": "土样高度40mm,",
            "value": "即为渗径距离"
          },
          {
            "label": "变水头有机玻璃管的断面积为0.785cm²",
            "value": ""
          },
          {
            "label": "渗透高度0-2000mm,最小分辨率为1mm,",
            "value": "精度误差为满量程的0.3%"
          },
          {
            "label": "该仪器的适用范围为粉土，粉质粘土，粘土以及环境土",
            "value": ""
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P020",
        "name": "高分子增强复合防水片材不透水仪",
        "model": "LD-26518",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/LD-26518.png",
        "image": "myImages/LD-26518-Image.png",
        "description": "符合新标准GB/T 26518-2023《高分子增强复合防水片材》",
        "features": [],
        "specifications": [
          {
            "label": "控制方式",
            "value": "触摸屏"
          },
          {
            "label": "试验压力",
            "value": "0.1~0.4MPa"
          },
          {
            "label": "腔体外径",
            "value": "320mm"
          },
          {
            "label": "高度",
            "value": "100mm"
          },
          {
            "label": "试件数量",
            "value": "1个"
          },
          {
            "label": "试件尺寸",
            "value": "Ф380mm"
          },
          {
            "label": "压力表",
            "value": "0-1.6Mpa"
          },
          {
            "label": "精确度等级",
            "value": "2.5级"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P021",
        "name": "管材落锤冲击试验机",
        "model": "LDLC-3",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/LDLC-3.png",
        "image": "myImages/LDLC-3-Image.png",
        "description": "本产品适用于各种板材、管材的落锤冲击试验，符合GB/T 14152-2001《热塑性塑料管材耐外冲击性能试验方法，时针旋转法》，GB/T 14153-2001《硬质塑料落锤试验方法通则》，同时满足ISO 3127对试验设备有要求。",
        "features": [],
        "specifications": [
          {
            "label": "使用温度℃",
            "value": "10～35"
          },
          {
            "label": "电源",
            "value": "交流380V±10%，5A，50Hz"
          },
          {
            "label": "工作台行程mm",
            "value": "0～400"
          },
          {
            "label": "锤头",
            "value": "d25、d90"
          },
          {
            "label": "冲击高度mm",
            "value": "0～2000"
          },
          {
            "label": "高度定位误差mm",
            "value": "±5"
          },
          {
            "label": "外形尺寸mm",
            "value": "800×800×3600"
          },
          {
            "label": "整机重量kg",
            "value": "300"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P022",
        "name": "数显简支梁冲击试验机",
        "model": "LDBC-50",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/LDBC-50.png",
        "image": "myImages/LDBC-50-Image.png",
        "description": "《GBT 18743-2002 流体输送用热塑性塑料管材简支梁冲击试验方法》\n《GBT 1043.1-2008 塑料简支梁冲击性能的测定  第1部分：非仪器化冲击试验》\n《GBT 21189-2007 塑料简支梁、悬臂梁和拉伸冲击试验用摆锤冲击试验机的检验》\n《JB/T 8762-1998 塑料简支梁冲击试验机》",
        "features": [],
        "specifications": [
          {
            "label": "冲击能量",
            "value": "7.5J 15J 25J 50J"
          },
          {
            "label": "摆锤力矩",
            "value": "7.733Nm"
          },
          {
            "label": "冲击速度",
            "value": "3.8m/s"
          },
          {
            "label": "摆锤预扬角",
            "value": "160°"
          },
          {
            "label": "钳口圆角半径",
            "value": "1mm"
          },
          {
            "label": "冲击刀刃夹角",
            "value": "30°"
          },
          {
            "label": "冲击刀刃圆角半径",
            "value": "2mm"
          },
          {
            "label": "使用电源",
            "value": "AC 220V 50Hz"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P023",
        "name": "中空玻璃露点仪",
        "model": "LDY-III",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/LDY-III.png",
        "image": "myImages/LDY-III-Image.png",
        "description": "适合于建筑中空玻璃露点的实验室检测,依据GB/T11944-2012标准，采用先进的制冷技术使紫铜冷测头在短时间内降到低于-60℃，并通过高精度仪表自动控制测试温度。",
        "features": [
          "紫铜冷测头可在短时间内降到低于-60℃",
          "二级制冷设计，使设备更快到达设定温度"
        ],
        "specifications": [
          {
            "label": "冷测头的温度",
            "value": "<-60℃"
          },
          {
            "label": "温度分辨率",
            "value": "0.1℃"
          },
          {
            "label": "测温精度",
            "value": "±0.5℃"
          },
          {
            "label": "电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "总功率",
            "value": "1.5kW"
          },
          {
            "label": "露点仪控制箱尺寸",
            "value": "900×650×900mm"
          },
          {
            "label": "重量kg",
            "value": "200"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P024",
        "name": "机械式蠕变持久试验机",
        "model": "LD-30H",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/LD-30H.png",
        "image": "myImages/LD-30H-Image.png",
        "description": "LD-30H机械式拉伸蠕变持久试验机（以下简称试验机）主要用于测定各类土工合成材料在20℃实验条件下定负荷蠕变性能。PP材质单元格，PE材质单元格持久拉伸蠕变试验。本机采用砝码加载，具有砝码添加数字显示功能，在断电情况下不影响试验的进行。本机具有加载砝码力值显示、持久变形量显示、加载时间显示、试验机工作状态提示等齐全的测量显示功能。",
        "features": [],
        "specifications": [
          {
            "label": "1.最大试验力",
            "value": "10KN；"
          },
          {
            "label": "2.试验机准确度等级",
            "value": "0.5级；"
          },
          {
            "label": "3.试验力测量范围",
            "value": "0.5%—100%FS；"
          },
          {
            "label": "4.试验力示值相对误差",
            "value": "±0.5%以内；"
          },
          {
            "label": "5.试验力分辨力",
            "value": "最大试验力的1/±300000全程分辨力不变；"
          },
          {
            "label": "6.变形测量范围",
            "value": "0-200mm"
          },
          {
            "label": "7.变形示值相对误差",
            "value": "示值的±0.5%以内；"
          },
          {
            "label": "8.变形分辨力",
            "value": "最大变形量的1/±300000；"
          },
          {
            "label": "9.位移示值相对误差",
            "value": "示值的±0.5%以内；"
          },
          {
            "label": "10.夹具宽度",
            "value": "450mm；"
          },
          {
            "label": "11.蠕变拉伸空间",
            "value": "900mm；"
          },
          {
            "label": "12.有效试验宽度",
            "value": "250mm；"
          },
          {
            "label": "13.主机外型尺寸（长×宽×高）3120×400×2750（mm）；",
            "value": ""
          },
          {
            "label": "14.电脑电源",
            "value": "220V±10%，400W ；"
          },
          {
            "label": "15.主机重量",
            "value": "约300kg。"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P025",
        "name": "机械式蠕变持久试验机",
        "model": "LD-1500H",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/LD-1500H.png",
        "image": "myImages/LD-1500H-Image.png",
        "description": "LD-150H机械式拉伸蠕变持久试验机（以下简称试验机）主要用于测定各类土工合成材料在20℃实验条件下定负荷蠕变性能。PP材质单元格，PE材质单元格持久拉伸蠕变试验。本机采用砝码加载，具有砝码添加数字显示功能，在断电情况下不影响试验的进行。本机具有加载砝码力值显示、持久变形量显示、加载时间显示、试验机工作状态提示等齐全的测量显示功能。",
        "features": [],
        "specifications": [
          {
            "label": "1.最大试验力",
            "value": "150KN；"
          },
          {
            "label": "2.试验机准确度等级",
            "value": "1级；"
          },
          {
            "label": "3.试验力测量范围",
            "value": "5%—100%FS；"
          },
          {
            "label": "4.试验力示值相对误差",
            "value": "±1%以内；"
          },
          {
            "label": "5.试验力分辨率",
            "value": "0.01"
          },
          {
            "label": "6.变形测量范围",
            "value": "0-100mm"
          },
          {
            "label": "7.变形示值相对误差",
            "value": "示值的±1%以内；"
          },
          {
            "label": "8.变形分辨率",
            "value": "0.01"
          },
          {
            "label": "9.位移示值相对误差",
            "value": "示值的±1%以内；"
          },
          {
            "label": "10.夹具宽度",
            "value": "250mm；"
          },
          {
            "label": "11.蠕变拉伸空间",
            "value": "660mm；"
          },
          {
            "label": "12.有效试验宽度",
            "value": "250mm；"
          },
          {
            "label": "13.主机外型尺寸（长×宽×高）2900×1270×2150（mm）；",
            "value": ""
          },
          {
            "label": "14.电源",
            "value": "220V±10%。"
          },
          {
            "label": "15.主机重量",
            "value": "约1600kg。"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P026",
        "name": "电动伺服疲劳试验机",
        "model": "LD-20",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/LD-20.png",
        "image": "myImages/LD-20-Image.png",
        "description": "电液伺服疲劳试验机（动态疲劳试验机）主要用于弹簧等零部件的动态疲劳等试验，通过添加其他附件也可以完成其他零部件以及标准材料的动态疲劳试验。\n该套方案，通过加大恒压伺服油源(230L/min),控制系统加配减震器控制软件以及板卡系统，可以实现各类减震器的性能试验以及疲劳试验。\n友情提示：疲劳试验机一般为定做产品，试验力可大于200KN，也可小于200KN，",
        "features": [],
        "specifications": [
          {
            "label": "静态试验力",
            "value": "200kN，按1、10衰减倍数进行分档标定"
          },
          {
            "label": "测试精度",
            "value": "±1%"
          },
          {
            "label": "动态试验力",
            "value": "50kN"
          },
          {
            "label": "幅值波动度",
            "value": "不大于各档±2%FS"
          },
          {
            "label": "作动器振幅",
            "value": "±50mm，动器行程：0.2mm时，频率不小于：30Hz"
          },
          {
            "label": "位移测量最小分辨率",
            "value": "0.005mm；测试精度：±0.5%"
          },
          {
            "label": "试验频率范围",
            "value": "0.01~40Hz"
          },
          {
            "label": "恒压伺服泵站规格",
            "value": "流量110L/min，21Mpa，电机功率：45kW"
          },
          {
            "label": "夹具",
            "value": "圆棒试件直径5-18mm，板试试件夹持厚度3-15mm；夹持压力可调"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P027",
        "name": "反力框架",
        "model": "300T",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/300T.png",
        "image": "myImages/300T-Image.png",
        "description": "本产品适用于千斤顶的标定，规格、空间尺寸可按客户要求进行订制。",
        "features": [],
        "specifications": [
          {
            "label": "最大测力kN",
            "value": "3000"
          },
          {
            "label": "左右立柱净空间尺寸mm",
            "value": "400×320×700"
          },
          {
            "label": "上下承压板尺寸mm",
            "value": "700×650×100"
          },
          {
            "label": "重量kg",
            "value": "1200"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P028",
        "name": "反力框架",
        "model": "500T",
        "category": "路达大型试验机系列",
        "thumbnail": "myImages/500T.png",
        "image": "myImages/500T-Image.png",
        "description": "本产品适用于千斤顶的标定，规格、空间尺寸可按客户要求进行订制。",
        "features": [],
        "specifications": [
          {
            "label": "最大测力kN",
            "value": "5000"
          },
          {
            "label": "左右立柱净空间尺寸mm",
            "value": "560×420×900"
          },
          {
            "label": "上下承压板尺寸mm",
            "value": "850×700×130"
          },
          {
            "label": "重量kg",
            "value": "1500"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P029",
        "name": "屏显式电子拉力试验机（落地式）",
        "model": "WDW-S05",
        "category": "路达电子万能材料试验机系列",
        "thumbnail": "myImages/WDW-S05.png",
        "image": "myImages/WDW-S05-Image.png",
        "description": "本产品适用于对各种金属、非金属及复合材料进行力学性能测试和分析研究，可求取试验材料最大试验力值、断裂力值、屈服强度、上下屈服强度、抗拉强度、抗压强度、断裂延伸率、拉伸弹性模量、弯曲弹性模量等试验数据。",
        "features": [
          "安全位置和实验位置高度任意锁定；",
          "超过最大负荷时自动保护，软件限位保护和电子限位双保护；"
        ],
        "specifications": [
          {
            "label": "控制方式",
            "value": "屏显控制"
          },
          {
            "label": "最大负荷kN",
            "value": "5"
          },
          {
            "label": "精度等级",
            "value": "1级(可按要求定制成0.5级）"
          },
          {
            "label": "有效测试空间mm",
            "value": "800"
          },
          {
            "label": "有效试验宽度mm",
            "value": "100"
          },
          {
            "label": "速度控制mm/min",
            "value": "5～500"
          },
          {
            "label": "试验力分辨率",
            "value": "50万码"
          },
          {
            "label": "电源功率kW",
            "value": "0.4"
          },
          {
            "label": "外形尺寸mm",
            "value": "500×450×1350"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "重量kg",
            "value": "90"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P030",
        "name": "微机电子拉力试验机（单臂）",
        "model": "WDW-5",
        "category": "路达电子万能材料试验机系列",
        "thumbnail": "myImages/WDW-5.png",
        "image": "myImages/WDW-5-Image.png",
        "description": "本产品适用于对各种金属、非金属及复合材料进行力学性能测试和分析研究，可求取试验材料最大试验力值、断裂力值、屈服强度、上下屈服强度、抗拉强度、抗压强度、断裂延伸率、拉伸弹性模量、弯曲弹性模量等试验数据。",
        "features": [
          "安全位置和实验位置高度任意锁定；",
          "超过最大负荷时自动保护，软件限位保护和电子限位双保护；"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WDW-5"
          },
          {
            "label": "最大负荷",
            "value": "5kN"
          },
          {
            "label": "精度等级",
            "value": "1级(可按要求定制成0.5级）"
          },
          {
            "label": "有效测试空间",
            "value": "800mm"
          },
          {
            "label": "有效试验宽度",
            "value": "100mm"
          },
          {
            "label": "速度控制",
            "value": "0.01～500mm/min"
          },
          {
            "label": "试验力分辨率",
            "value": "30万码"
          },
          {
            "label": "电源功率",
            "value": "0.4kW"
          },
          {
            "label": "外形尺寸",
            "value": "600×380×1500mm"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "重量",
            "value": "80kg"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P031",
        "name": "微机电子拉力试验机(龙门)",
        "model": "WDW-20",
        "category": "路达电子万能材料试验机系列",
        "thumbnail": "myImages/WDW-20.png",
        "image": "myImages/WDW-20-Image.png",
        "description": "本产品适用于对各种金属、非金属及复合材料进行力学性能测试和分析研究，可求取试验材料最大试验力值、断裂力值、屈服强度、上下屈服强度、抗拉强度、抗压强度、断裂延伸率、拉伸弹性模量、弯曲弹性模量等试验数据。",
        "features": [
          "安全位置和实验位置高度任意锁定；",
          "超过最大负荷时自动保护，软件限位保护和电子限位双保护；"
        ],
        "specifications": [
          {
            "label": "最大负荷kN",
            "value": "20"
          },
          {
            "label": "试验力分辨率，最大负荷50万码；内外不分档，且全程分辨率不变",
            "value": ""
          },
          {
            "label": "精度等级",
            "value": "1级(可按要求定制成0.5级）"
          },
          {
            "label": "有效拉伸空间mm",
            "value": "800"
          },
          {
            "label": "有效试验宽度mm",
            "value": "400"
          },
          {
            "label": "速度范围mm/min",
            "value": "0.01～500"
          },
          {
            "label": "位移测量精度",
            "value": "示值的±1%以内"
          },
          {
            "label": "变形测量精度",
            "value": "示值的±1%以内"
          },
          {
            "label": "试验力测量范围FS",
            "value": "1%～100%"
          },
          {
            "label": "变形测量范围FS",
            "value": "1%～100％"
          },
          {
            "label": "电源功率",
            "value": "AC220V±10%，50Hz，400W"
          },
          {
            "label": "机台外型尺寸mm",
            "value": "800×450×1600"
          },
          {
            "label": "机台总重kg",
            "value": "190"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P032",
        "name": "微机电子拉力试验机(龙门)",
        "model": "WDW-50",
        "category": "路达电子万能材料试验机系列",
        "thumbnail": "myImages/WDW-50.png",
        "image": "myImages/WDW-50-Image.png",
        "description": "本产品适用于对各种金属、非金属及复合材料进行力学性能测试和分析研究，可求取试验材料最大试验力值、断裂力值、屈服强度、上下屈服强度、抗拉强度、抗压强度、断裂延伸率、拉伸弹性模量、弯曲弹性模量等试验数据。",
        "features": [
          "安全位置和实验位置高度任意锁定；",
          "超过最大负荷时自动保护，软件限位保护和电子限位双保护；"
        ],
        "specifications": [
          {
            "label": "最大负荷kN",
            "value": "50"
          },
          {
            "label": "试验力分辨率，最大负荷50万码；内外不分档，且全程分辨率不变",
            "value": ""
          },
          {
            "label": "精度等级",
            "value": "1级(可按要求定制成0.5级）"
          },
          {
            "label": "有效测试空间mm",
            "value": "800"
          },
          {
            "label": "有效试验宽度mm",
            "value": "400"
          },
          {
            "label": "速度范围mm/min",
            "value": "0.01～500"
          },
          {
            "label": "位移测量精度",
            "value": "示值的±1%以内"
          },
          {
            "label": "变形测量精度",
            "value": "示值的±1%以内"
          },
          {
            "label": "试验力测量范围FS",
            "value": "1%～100%"
          },
          {
            "label": "变形测量范围FS",
            "value": "1%～100％"
          },
          {
            "label": "电源功率",
            "value": "AC220V±10%，50Hz，750W"
          },
          {
            "label": "机台外型尺寸mm",
            "value": "900×500×1900"
          },
          {
            "label": "机台总重kg",
            "value": "230"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P033",
        "name": "微机电子拉力试验机(龙门)",
        "model": "WDW-100",
        "category": "路达电子万能材料试验机系列",
        "thumbnail": "myImages/WDW-100.png",
        "image": "myImages/WDW-100-Image.png",
        "description": "本产品适用于对各种金属、非金属及复合材料进行力学性能测试和分析研究，可求取试验材料最大试验力值、断裂力值、屈服强度、上下屈服强度、抗拉强度、抗压强度、断裂延伸率、拉伸弹性模量、弯曲弹性模量等试验数据。",
        "features": [
          "安全位置和实验位置高度任意锁定；",
          "超过最大负荷时自动保护，软件限位保护和电子限位双保护；"
        ],
        "specifications": [
          {
            "label": "控制方式",
            "value": "微机电脑控制"
          },
          {
            "label": "最大负荷kN",
            "value": "100"
          },
          {
            "label": "试验力分辨率",
            "value": "50万码"
          },
          {
            "label": "精度等级",
            "value": "1级(可按要求定制成0.5级）"
          },
          {
            "label": "有效测试空间mm",
            "value": "800"
          },
          {
            "label": "有效试验宽度mm",
            "value": "400"
          },
          {
            "label": "速度范围mm/min",
            "value": "0.01～500"
          },
          {
            "label": "位移测量精度",
            "value": "±1%"
          },
          {
            "label": "变形测量精度",
            "value": "±1%"
          },
          {
            "label": "试验力测量范围FS",
            "value": "1%～100%"
          },
          {
            "label": "变形测量范围FS",
            "value": "1%～100%"
          },
          {
            "label": "电源功率kW",
            "value": "1.5"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "1000×800×2200"
          },
          {
            "label": "机台总重kg",
            "value": "350"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P034",
        "name": "微机环刚度拉力试验机（龙门）",
        "model": "WDW-H50",
        "category": "路达电子万能材料试验机系列",
        "thumbnail": "myImages/WDW-H50.png",
        "image": "myImages/WDW-H50-Image.png",
        "description": "微机控制电子式环刚度试验机采用机械加荷、电子测量、数字连续调速，用计算机进行实时控制。该机对试验力、位移、速度同时进行数字显示，并有试验力峰值保持功能,适用于塑料管材环柔、环刚度、扁平、焊缝拉伸、管材蠕变比率等试验。\n符合规范GB/T 9647-2015《热塑性塑料管材环刚度的测定》等的试验要求。",
        "features": [
          "安全位置和实验位置高度任意锁定；",
          "超过最大负荷时自动保护，软件限位保护和电子限位双保护；"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "50"
          },
          {
            "label": "等级",
            "value": "1级(可按要求定制成0.5级）"
          },
          {
            "label": "试验力测量范围FS",
            "value": "1%～100%全程不分档"
          },
          {
            "label": "试验力示值相对误差",
            "value": "±1%以内"
          },
          {
            "label": "试验力分辨力",
            "value": "最大试验力的1/±300000"
          },
          {
            "label": "位移分辨力um",
            "value": "0.025"
          },
          {
            "label": "位移示值相对误差",
            "value": "示值的±1%"
          },
          {
            "label": "力控速率调节范围FS/S",
            "value": "0.01～5%"
          },
          {
            "label": "力控速率相对误差",
            "value": "设定值的±1%以内"
          },
          {
            "label": "变形分辨力",
            "value": "最大变形量的1/±300000"
          },
          {
            "label": "变形测量范围FS",
            "value": "0.2%～100%"
          },
          {
            "label": "变形示值相对误差",
            "value": "示值的±0.5%以内"
          },
          {
            "label": "变形速率调节范围FS/S",
            "value": "0.02%～5%"
          },
          {
            "label": "横梁速度调节范围mm/min",
            "value": "0.01～200"
          },
          {
            "label": "有效压碎空间mm",
            "value": "1500"
          },
          {
            "label": "有效试验宽度mm",
            "value": "1000"
          },
          {
            "label": "电源",
            "value": "220V±10%，0.75kW"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "1900×700×2350"
          },
          {
            "label": "主机重量kg",
            "value": "1200"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P035",
        "name": "微机控制环刚度试验机（加高版）",
        "model": "WDW-H50",
        "category": "路达电子万能材料试验机系列",
        "thumbnail": "myImages/WDW-H50.png",
        "image": "myImages/WDW-H50-Image.png",
        "description": "微机控制电子式环刚度试验机采用机械加荷、电子测量、数字连续调速，用计算机进行实时控制。该机对试验力、位移/速度同时进行数字显示，并有试验力峰值保持功能,适用于塑料管材环柔、环刚度、扁平、焊缝拉伸、管材蠕变比率等试验。\n符合规范GB/T 9647-2015《热塑性塑料管材环刚度的测定》等的试验要求。",
        "features": [
          "安全位置和实验位置高度任意锁定；",
          "超过最大负荷时自动保护，软件限位保护和电子限位双保护；"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "50"
          },
          {
            "label": "等级",
            "value": "1级(可按要求定制成0.5级）"
          },
          {
            "label": "试验力测量范围FS",
            "value": "1%～100%全程不分档"
          },
          {
            "label": "试验力示值相对误差",
            "value": "±1%以内"
          },
          {
            "label": "试验力分辨力",
            "value": "最大试验力的1/±300000"
          },
          {
            "label": "位移分辨力um",
            "value": "0.025"
          },
          {
            "label": "位移示值相对误差",
            "value": "示值的±1%"
          },
          {
            "label": "力控速率调节范围FS/S",
            "value": "0.01～5%"
          },
          {
            "label": "力控速率相对误差",
            "value": "设定值的±1%以内"
          },
          {
            "label": "变形分辨力",
            "value": "最大变形量的1/±300000"
          },
          {
            "label": "变形测量范围FS",
            "value": "0.2%～100%"
          },
          {
            "label": "变形示值相对误差",
            "value": "示值的±0.5%以内"
          },
          {
            "label": "变形速率调节范围FS/S",
            "value": "0.02%～5%"
          },
          {
            "label": "横梁速度调节范围mm/min",
            "value": "0.01～500"
          },
          {
            "label": "有效压碎空间mm",
            "value": "2000"
          },
          {
            "label": "有效试验宽度mm",
            "value": "1000"
          },
          {
            "label": "电源",
            "value": "220V±10%，0.75kW"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "1900×700×2850"
          },
          {
            "label": "主机重量kg",
            "value": "1300"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P036",
        "name": "微机控制环刚度试验机（加高版）",
        "model": "WDW-H100",
        "category": "路达电子万能材料试验机系列",
        "thumbnail": "myImages/WDW-H100.png",
        "image": "myImages/WDW-H100-Image.png",
        "description": "微机控制电子式环刚度试验机采用机械加荷、电子测量、数字连续调速，用计算机进行实时控制。该机对试验力、位移/速度同时进行数字显示，并有试验力峰值保持功能,适用于塑料管材环柔、环刚度、扁平、焊缝拉伸、管材蠕变比率等试验。\n符合规范GB/T 9647-2015《热塑性塑料管材环刚度的测定》等的试验要求。",
        "features": [
          "安全位置和实验位置高度任意锁定；",
          "超过最大负荷时自动保护，软件限位保护和电子限位双保护；"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "100"
          },
          {
            "label": "等级",
            "value": "1级(可按要求定制成0.5级）"
          },
          {
            "label": "试验力测量范围FS",
            "value": "1%～100%全程不分档"
          },
          {
            "label": "试验力示值相对误差",
            "value": "±1%以内"
          },
          {
            "label": "试验力分辨力",
            "value": "最大试验力的1/±300000"
          },
          {
            "label": "位移分辨力um",
            "value": "0.025"
          },
          {
            "label": "位移示值相对误差",
            "value": "示值的±1%"
          },
          {
            "label": "力控速率调节范围FS/S",
            "value": "0.01～5%"
          },
          {
            "label": "力控速率相对误差",
            "value": "设定值的±1%以内"
          },
          {
            "label": "变形分辨力",
            "value": "最大变形量的1/±300000"
          },
          {
            "label": "变形测量范围FS",
            "value": "0.2%～100%"
          },
          {
            "label": "变形示值相对误差",
            "value": "示值的±0.5%以内"
          },
          {
            "label": "变形速率调节范围FS/S",
            "value": "0.02%～5%"
          },
          {
            "label": "横梁速度调节范围mm/min",
            "value": "0.01～500"
          },
          {
            "label": "有效压碎空间mm",
            "value": "1500"
          },
          {
            "label": "有效试验宽度mm",
            "value": "1000"
          },
          {
            "label": "电源",
            "value": "220V±10%，1.5kW"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "1900×700×2350"
          },
          {
            "label": "主机重量kg",
            "value": "1200"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P037",
        "name": "微机控制环刚度试验机（加高版）",
        "model": "WDW-H100",
        "category": "路达电子万能材料试验机系列",
        "thumbnail": "myImages/WDW-H100.png",
        "image": "myImages/WDW-H100-Image.png",
        "description": "微机控制电子式环刚度试验机采用机械加荷、电子测量、数字连续调速，用计算机进行实时控制。该机对试验力、位移/速度同时进行数字显示，并有试验力峰值保持功能,适用于塑料管材环柔、环刚度、扁平、焊缝拉伸、管材蠕变比率等试验。\n符合规范GB/T 9647-2015《热塑性塑料管材环刚度的测定》等的试验要求。",
        "features": [
          "安全位置和实验位置高度任意锁定；",
          "超过最大负荷时自动保护，软件限位保护和电子限位双保护；"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "100"
          },
          {
            "label": "等级",
            "value": "1级(可按要求定制成0.5级）"
          },
          {
            "label": "试验力测量范围FS",
            "value": "1%～100%全程不分档"
          },
          {
            "label": "试验力示值相对误差",
            "value": "±1%以内"
          },
          {
            "label": "试验力分辨力",
            "value": "最大试验力的1/±300000"
          },
          {
            "label": "位移分辨力um",
            "value": "0.025"
          },
          {
            "label": "位移示值相对误差",
            "value": "示值的±1%"
          },
          {
            "label": "力控速率调节范围FS/S",
            "value": "0.01～5%"
          },
          {
            "label": "力控速率相对误差",
            "value": "设定值的±1%以内"
          },
          {
            "label": "变形分辨力",
            "value": "最大变形量的1/±300000"
          },
          {
            "label": "变形测量范围FS",
            "value": "0.2%～100%"
          },
          {
            "label": "变形示值相对误差",
            "value": "示值的±0.5%以内"
          },
          {
            "label": "变形速率调节范围FS/S",
            "value": "0.02%～5%"
          },
          {
            "label": "横梁速度调节范围mm/min",
            "value": "0.01～500"
          },
          {
            "label": "有效压碎空间mm",
            "value": "2000"
          },
          {
            "label": "有效试验宽度mm",
            "value": "1000"
          },
          {
            "label": "电源",
            "value": "220V±10%，1.5kW"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "1900×700×2850"
          },
          {
            "label": "主机重量kg",
            "value": "1300"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P038",
        "name": "钢管脚手架扣件力学性能试验机",
        "model": "WDW-200G",
        "category": "路达电子万能材料试验机系列",
        "thumbnail": "myImages/WDW-200G.png",
        "image": "myImages/WDW-200G-Image.png",
        "description": "本产品主要针对脚手架扣件、钢管扣件、铸钢扣件、混凝土枕扣件、钢轨扣件等各种扣件做抗滑、抗变形、抗拉、抗压等力学性能测试。\n符合规范GB/T15831《钢管脚手架扣件》、GB 24911《碗扣式钢管脚手架构件》、JG/T503《承插型盘扣式钢管支架构件》的试验要求。",
        "features": [
          "安全位置和实验位置高度任意锁定；",
          "超过最大负荷时自动保护，软件限位保护和电子限位双保护；"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "200"
          },
          {
            "label": "等级",
            "value": "1级(可按要求定制成0.5级）"
          },
          {
            "label": "试验力测量范围FS",
            "value": "1%～100%全程不分档"
          },
          {
            "label": "试验力示值相对误差",
            "value": "±1%以内"
          },
          {
            "label": "试验力分辨力",
            "value": "最大试验力的1/±300000"
          },
          {
            "label": "位移分辨力um",
            "value": "0.025"
          },
          {
            "label": "位移示值相对误差",
            "value": "示值的±0.5%"
          },
          {
            "label": "力控速率调节范围FS/S",
            "value": "0.01～5%"
          },
          {
            "label": "力控速率相对误差",
            "value": "设定值的±1%以内"
          },
          {
            "label": "变形分辨力",
            "value": "最大变形量的1/±300000"
          },
          {
            "label": "变形测量范围FS",
            "value": "0.2%～100%"
          },
          {
            "label": "变形示值相对误差",
            "value": "示值的±0.5%以内"
          },
          {
            "label": "变形速率调节范围FS/S",
            "value": "0.02%～5%"
          },
          {
            "label": "横梁速度调节范围mm/min",
            "value": "0.01～200"
          },
          {
            "label": "有效压碎空间mm",
            "value": "800"
          },
          {
            "label": "有效试验宽度mm",
            "value": "400"
          },
          {
            "label": "电源",
            "value": "220V±10%，2kW"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "1000×800×2200"
          },
          {
            "label": "主机重量kg",
            "value": "800"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P039",
        "name": "高低温拉伸电子试验机",
        "model": "WDW-T50",
        "category": "路达电子万能材料试验机系列",
        "thumbnail": "myImages/WDW-T50零下35度.png",
        "image": "myImages/WDW-T50零下35度-Image.png",
        "description": "微机控制高低温万能试验机主要用于金属材料及非金属材料的拉伸、压缩、弯曲、剪切等的力学性能测试和分析研究，具有应力、应变、位移三种闭环控制方式，可求出最大力、抗拉强度、弯曲强度、压缩强度、弹性模量、断裂延伸率、屈服强度等参数。此设备可根据客户需求定制。\n该设备配备的高低温箱可以实现精准控温，快速升温降温，模拟各种实验环境和实验条件。",
        "features": [
          "安全位置和实验位置高度任意锁定；",
          "超过最大负荷时自动保护，软件限位保护和电子限位双保护；"
        ],
        "specifications": [
          {
            "label": "最大试验力",
            "value": "50KN，可根据客户需要选择；"
          },
          {
            "label": "试验机准确度等级",
            "value": "1级；(可按要求定制成0.5级）"
          },
          {
            "label": "试验力测量范围",
            "value": "1%～100%FS全程不分档；"
          },
          {
            "label": "试验力示值相对误差",
            "value": "±0.5%以内；"
          },
          {
            "label": "试验力分辨力",
            "value": "最大试验力的1/±300000全程分辨力不变；"
          },
          {
            "label": "变形测量范围",
            "value": "0.2%～100%FS；"
          },
          {
            "label": "变形示值相对误差",
            "value": "示值的±0.5%以内；"
          },
          {
            "label": "变形分辨力",
            "value": "最大变形量的1/±300000；"
          },
          {
            "label": "位移示值相对误差",
            "value": "示值的±0.5%以内；"
          },
          {
            "label": "位移分辨力",
            "value": "0.025µm；"
          },
          {
            "label": "力控速率调节范围",
            "value": "0.01～5%FS/S；"
          },
          {
            "label": "力控速率相对误差",
            "value": "设定值的±1%以内；"
          },
          {
            "label": "变形速率调节范围",
            "value": "0.02～5%FS/S；"
          },
          {
            "label": "变形控制速率相对误差",
            "value": "设定值的±1%以内；"
          },
          {
            "label": "横梁速度调节范围",
            "value": "0.01～500mm/min；"
          },
          {
            "label": "恒力、恒变形、恒位移控制范围",
            "value": "0.5%～100%FS；"
          },
          {
            "label": "恒力、恒变形、恒位移控制精度",
            "value": "设定值<10%FS时，为设定值的±1%以内；设定值≥10%FS时，为设定值的±0.1%以内；"
          },
          {
            "label": "有效拉伸空间（不带夹具）",
            "value": "1200mm；"
          },
          {
            "label": "有效试验宽度",
            "value": "500mm；"
          },
          {
            "label": "主机外型尺寸（长×宽×高）",
            "value": "900×500×2300（mm）；"
          },
          {
            "label": "电源",
            "value": "220V±10%，750W ；"
          },
          {
            "label": "主机重量",
            "value": "约300kg。"
          },
          {
            "label": "高低温箱参数",
            "value": ""
          },
          {
            "label": "1 高低温范围",
            "value": "-35℃～+150℃"
          },
          {
            "label": "2 降温时间",
            "value": "≤40min 升温时间≤70min"
          },
          {
            "label": "3 温度控制",
            "value": "50mm标距内性能指标如下所示"
          },
          {
            "label": "3.1 温度梯度",
            "value": "≤2℃"
          },
          {
            "label": "3.2 温度波动",
            "value": "≤±1℃"
          },
          {
            "label": "3.3 温度偏差",
            "value": "±2℃（≤+120℃）"
          },
          {
            "label": "3.4 温控表显示精度",
            "value": "≤0.1℃。"
          },
          {
            "label": "4 工作室尺寸约（深×宽×高mm）",
            "value": "240×200×600（以实际尺寸为准）"
          },
          {
            "label": "5 使用环境",
            "value": "温度+5℃～+35℃ ；湿度：≤85%RH； 大气压：86～106KPa"
          },
          {
            "label": "6 电源",
            "value": "AC220(1±10%)V (50±0.5)Hz"
          },
          {
            "label": "7 安全装置",
            "value": "漏电保护器箱内超温保护器、风机过热保护器和PID超温保护"
          },
          {
            "label": "8 其它",
            "value": ""
          },
          {
            "label": "8.1",
            "value": "箱门中央位置有观察窗"
          },
          {
            "label": "8.2",
            "value": "有报警输出功能"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P040",
        "name": "高低温拉伸电子试验机",
        "model": "WDW-T50",
        "category": "路达电子万能材料试验机系列",
        "thumbnail": "myImages/WDW-T50零下60度.png",
        "image": "myImages/WDW-T50零下60度-Image.png",
        "description": "微机控制高低温万能试验机主要用于金属材料及非金属材料的拉伸、压缩、弯曲、剪切等的力学性能测试和分析研究，具有应力、应变、位移三种闭环控制方式，可求出最大力、抗拉强度、弯曲强度、压缩强度、弹性模量、断裂延伸率、屈服强度等参数。此设备可根据客户需求定制。\n该设备配备的高低温箱可以实现精准控温，快速升温降温，模拟各种实验环境和实验条件。",
        "features": [
          "安全位置和实验位置高度任意锁定；",
          "超过最大负荷时自动保护，软件限位保护和电子限位双保护；"
        ],
        "specifications": [
          {
            "label": "最大试验力",
            "value": "50KN，可根据客户需要选择；"
          },
          {
            "label": "试验机准确度等级",
            "value": "1级；(可按要求定制成0.5级）"
          },
          {
            "label": "试验力测量范围",
            "value": "1%～100%FS全程不分档；"
          },
          {
            "label": "试验力示值相对误差",
            "value": "±0.5%以内；"
          },
          {
            "label": "试验力分辨力",
            "value": "最大试验力的1/±300000全程分辨力不变；"
          },
          {
            "label": "变形测量范围",
            "value": "0.2%～100%FS；"
          },
          {
            "label": "变形示值相对误差",
            "value": "示值的±0.5%以内；"
          },
          {
            "label": "变形分辨力",
            "value": "最大变形量的1/±300000；"
          },
          {
            "label": "位移示值相对误差",
            "value": "示值的±0.5%以内；"
          },
          {
            "label": "位移分辨力",
            "value": "0.025µm；"
          },
          {
            "label": "力控速率调节范围",
            "value": "0.01～5%FS/S；"
          },
          {
            "label": "力控速率相对误差",
            "value": "设定值的±1%以内；"
          },
          {
            "label": "变形速率调节范围",
            "value": "0.02～5%FS/S；"
          },
          {
            "label": "变形控制速率相对误差",
            "value": "设定值的±1%以内；"
          },
          {
            "label": "横梁速度调节范围",
            "value": "0.01～500mm/min；"
          },
          {
            "label": "恒力、恒变形、恒位移控制范围",
            "value": "0.5%～100%FS；"
          },
          {
            "label": "恒力、恒变形、恒位移控制精度",
            "value": "设定值<10%FS时，为设定值的±1%以内；设定值≥10%FS时，为设定值的±0.1%以内；"
          },
          {
            "label": "有效拉伸空间（不带夹具）",
            "value": "1200mm；"
          },
          {
            "label": "有效试验宽度",
            "value": "500mm；"
          },
          {
            "label": "主机外型尺寸（长×宽×高）",
            "value": "900×500×2300（mm）；"
          },
          {
            "label": "电源",
            "value": "220V±10%，750W ；"
          },
          {
            "label": "主机重量",
            "value": "约300kg。"
          },
          {
            "label": "高低温箱参数",
            "value": ""
          },
          {
            "label": "1 高低温范围",
            "value": "-60℃～+150℃"
          },
          {
            "label": "2 降温时间",
            "value": "≤60min 升温时间≤70min"
          },
          {
            "label": "3 温度控制",
            "value": "50mm标距内性能指标如下所示"
          },
          {
            "label": "3.1 温度梯度",
            "value": "≤2℃"
          },
          {
            "label": "3.2 温度波动",
            "value": "≤±1℃"
          },
          {
            "label": "3.3 温度偏差",
            "value": "±2℃（≤+120℃）"
          },
          {
            "label": "3.4 温控表显示精度",
            "value": "≤0.1℃。"
          },
          {
            "label": "4 工作室尺寸约（深×宽×高mm）",
            "value": "240×200×600（以实际尺寸为准）"
          },
          {
            "label": "5 使用环境",
            "value": "温度+5℃～+35℃ ；湿度：≤85%RH； 大气压：86～106KPa"
          },
          {
            "label": "6 电源",
            "value": "AC220(1±10%)V (50±0.5)Hz"
          },
          {
            "label": "7 安全装置",
            "value": "漏电保护器箱内超温保护器、风机过热保护器和PID超温保护"
          },
          {
            "label": "8 其它",
            "value": ""
          },
          {
            "label": "8.1",
            "value": "箱门中央位置有观察窗"
          },
          {
            "label": "8.2",
            "value": "有报警输出功能"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P041",
        "name": "蒸压加气混凝土板结构性能试验机",
        "model": "WDW-Z50",
        "category": "路达电子万能材料试验机系列",
        "thumbnail": "myImages/WDW-Z50.png",
        "image": "myImages/WDW-Z50-Image.png",
        "description": "蒸压加气混凝土板结构性能试验机主要用于蒸压加气混凝土板结构性能的测试分析研究，具有应力、应变、位移三种闭环控制方式，可求出最大力、抗拉强度、弯曲强度、压缩强度、模量等参数。本款机型可同时用于脚手架扣件、钢管扣件、铸钢扣件、混凝土枕扣件、钢轨扣件等各种扣件做抗滑、抗变形、抗拉、抗压等力学性能测试。\n产品根据GB及ISO、JIS、ASTM、DIN等国际标准进行生产制造，符合GB/T15762-2020《蒸压加气混凝土板》规范。",
        "features": [
          "安全位置和实验位置高度任意锁定；",
          "超过最大负荷时自动保护，软件限位保护和电子限位双保护；"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WDW-Z50"
          },
          {
            "label": "控制方式",
            "value": "微机电脑控制"
          },
          {
            "label": "最大负荷kN",
            "value": "50"
          },
          {
            "label": "试验力分辨力",
            "value": "最大试验力的1/±300000全程分辨力不变"
          },
          {
            "label": "精度登记",
            "value": "1级(可按要求定制成0.5级）"
          },
          {
            "label": "有效测试长度mm",
            "value": "6000"
          },
          {
            "label": "有效试验宽度mm",
            "value": "600"
          },
          {
            "label": "位移分辨力um",
            "value": "0.025"
          },
          {
            "label": "变形速率调节范围FS/S",
            "value": "0.02～5%"
          },
          {
            "label": "变形控制速率相对误差",
            "value": "设定值的±1%以内"
          },
          {
            "label": "变形测量范围FS",
            "value": "0.2%～100%"
          },
          {
            "label": "变形示值相对误差",
            "value": "示值的±0.5%以内"
          },
          {
            "label": "横梁速度调节范围mm/min",
            "value": "0.01～200"
          },
          {
            "label": "电源电压",
            "value": "220V±10%，750W"
          },
          {
            "label": "外形尺寸mm",
            "value": "2000×700×2400（主机）"
          },
          {
            "label": "重量kg",
            "value": "2300"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P042",
        "name": "蒸压加气混凝土板结构性能试验机",
        "model": "WDW-Z100",
        "category": "路达电子万能材料试验机系列",
        "thumbnail": "myImages/WDW-Z100.png",
        "image": "myImages/WDW-Z100-Image.png",
        "description": "蒸压加气混凝土板结构性能试验机主要用于蒸压加气混凝土板结构性能的测试分析研究，具有应力、应变、位移三种闭环控制方式，可求出最大力、抗拉强度、弯曲强度、压缩强度、模量等参数。本款机型可同时用于脚手架扣件、钢管扣件、铸钢扣件、混凝土枕扣件、钢轨扣件等各种扣件做抗滑、抗变形、抗拉、抗压等力学性能测试。\n产品根据GB及ISO、JIS、ASTM、DIN等国际标准进行生产制造，符合GB/T15762-2020《蒸压加气混凝土板》规范。",
        "features": [
          "安全位置和实验位置高度任意锁定；",
          "超过最大负荷时自动保护，软件限位保护和电子限位双保护；"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WDW-Z100"
          },
          {
            "label": "控制方式",
            "value": "微机电脑控制"
          },
          {
            "label": "最大负荷kN",
            "value": "100"
          },
          {
            "label": "试验力分辨力",
            "value": "最大试验力的1/±300000全程分辨力不变"
          },
          {
            "label": "精度登记",
            "value": "1级(可按要求定制成0.5级）"
          },
          {
            "label": "有效测试长度mm",
            "value": "3000或6000可选"
          },
          {
            "label": "有效试验宽度mm",
            "value": "600"
          },
          {
            "label": "位移分辨力um",
            "value": "0.025"
          },
          {
            "label": "变形速率调节范围FS/S",
            "value": "0.02～5%"
          },
          {
            "label": "变形控制速率相对误差",
            "value": "设定值的±1%以内"
          },
          {
            "label": "变形测量范围FS",
            "value": "0.2%～100%"
          },
          {
            "label": "变形示值相对误差",
            "value": "示值的±0.5%以内"
          },
          {
            "label": "横梁速度调节范围mm/min",
            "value": "0.01～200"
          },
          {
            "label": "电源电压",
            "value": "220V±10%，750W"
          },
          {
            "label": "外形尺寸mm",
            "value": "2000×700×2400（主机）"
          },
          {
            "label": "重量kg",
            "value": "2500"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P043",
        "name": "蒸压加气混凝土板结构性能试验机",
        "model": "WDW-Z100",
        "category": "路达电子万能材料试验机系列",
        "thumbnail": "myImages/WDW-Z100.png",
        "image": "myImages/WDW-Z100-Image.png",
        "description": "蒸压加气混凝土板结构性能试验机主要用于蒸压加气混凝土板结构性能的测试分析研究，具有应力、应变、位移三种闭环控制方式，可求出最大力、抗拉强度、弯曲强度、压缩强度、模量等参数。本款机型可同时用于脚手架扣件、钢管扣件、铸钢扣件、混凝土枕扣件、钢轨扣件等各种扣件做抗滑、抗变形、抗拉、抗压等力学性能测试。\n产品根据GB及ISO、JIS、ASTM、DIN等国际标准进行生产制造，符合GB/T15762-2020《蒸压加气混凝土板》规范。",
        "features": [
          "安全位置和实验位置高度任意锁定；",
          "超过最大负荷时自动保护，软件限位保护和电子限位双保护；"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WDW-Z100"
          },
          {
            "label": "控制方式",
            "value": "微机电脑控制"
          },
          {
            "label": "最大负荷kN",
            "value": "100"
          },
          {
            "label": "试验力分辨力",
            "value": "最大试验力的1/±300000全程分辨力不变"
          },
          {
            "label": "精度登记",
            "value": "1级(可按要求定制成0.5级）"
          },
          {
            "label": "蒸压加气混凝土板试验参数",
            "value": ""
          },
          {
            "label": "有效测试长度mm",
            "value": "6000"
          },
          {
            "label": "有效试验宽度mm",
            "value": "600"
          },
          {
            "label": "环刚度试验参数",
            "value": ""
          },
          {
            "label": "有效压碎空间mm",
            "value": "1500"
          },
          {
            "label": "有效试验宽度mm",
            "value": "1000"
          },
          {
            "label": "位移分辨力um",
            "value": "0.025"
          },
          {
            "label": "变形速率调节范围FS/S",
            "value": "0.02～5%"
          },
          {
            "label": "变形控制速率相对误差",
            "value": "设定值的±1%以内"
          },
          {
            "label": "变形测量范围FS",
            "value": "0.2%～100%"
          },
          {
            "label": "变形示值相对误差",
            "value": "示值的±0.5%以内"
          },
          {
            "label": "横梁速度调节范围mm/min",
            "value": "0.01～200"
          },
          {
            "label": "电源电压",
            "value": "220V±10%，750W"
          },
          {
            "label": "外形尺寸mm",
            "value": "2000×700×2400（主机）"
          },
          {
            "label": "重量kg",
            "value": "2500"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P044",
        "name": "蒸压加气混凝土板结构性能试验机",
        "model": "WDW-Z100",
        "category": "路达电子万能材料试验机系列",
        "thumbnail": "myImages/WDW-Z100.png",
        "image": "myImages/WDW-Z100-Image.png",
        "description": "蒸压加气混凝土板结构性能试验机主要用于蒸压加气混凝土板结构性能的测试分析研究，具有应力、应变、位移三种闭环控制方式，可求出最大力、抗拉强度、弯曲强度、压缩强度、模量等参数。本款机型可同时用于脚手架扣件、钢管扣件、铸钢扣件、混凝土枕扣件、钢轨扣件等各种扣件做抗滑、抗变形、抗拉、抗压等力学性能测试。\n产品根据GB及ISO、JIS、ASTM、DIN等国际标准进行生产制造，符合GB/T15762-2020《蒸压加气混凝土板》规范。",
        "features": [
          "安全位置和实验位置高度任意锁定；",
          "超过最大负荷时自动保护，软件限位保护和电子限位双保护；"
        ],
        "specifications": [
          {
            "label": "控制方式",
            "value": "微机电脑控制"
          },
          {
            "label": "最大负荷kN",
            "value": "100"
          },
          {
            "label": "试验力分辨力",
            "value": "最大试验力的1/±300000全程分辨力不变"
          },
          {
            "label": "精度登记",
            "value": "1级(可按要求定制成0.5级）"
          },
          {
            "label": "蒸压加气混凝土板试验参数",
            "value": ""
          },
          {
            "label": "有效测试长度mm",
            "value": "6000"
          },
          {
            "label": "有效试验宽度mm",
            "value": "600"
          },
          {
            "label": "环刚度试验参数",
            "value": ""
          },
          {
            "label": "有效压碎空间mm",
            "value": "2000"
          },
          {
            "label": "有效试验宽度mm",
            "value": "1000"
          },
          {
            "label": "位移分辨力um",
            "value": "0.025"
          },
          {
            "label": "变形速率调节范围FS/S",
            "value": "0.02～5%"
          },
          {
            "label": "变形控制速率相对误差",
            "value": "设定值的±1%以内"
          },
          {
            "label": "变形测量范围FS",
            "value": "0.2%～100%"
          },
          {
            "label": "变形示值相对误差",
            "value": "示值的±0.5%以内"
          },
          {
            "label": "横梁速度调节范围mm/min",
            "value": "0.01～200"
          },
          {
            "label": "电源电压",
            "value": "220V±10%，750W"
          },
          {
            "label": "外形尺寸mm",
            "value": "2000×700×2400（主机）"
          },
          {
            "label": "重量kg",
            "value": "2600"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P045",
        "name": "微机控制五工位万能试验机",
        "model": "WDW-5GW",
        "category": "路达电子万能材料试验机系列",
        "thumbnail": "myImages/WDW-5GW.png",
        "image": "myImages/WDW-5GW-Image.png",
        "description": "本产品适用于对各种金属、非金属及复合材料进行力学性能测试和分析研究，可求取试验材料最大试验力值、断裂力值、屈服强度、上下屈服强度、抗拉强度、抗压强度、断裂延伸率、拉伸弹性模量、弯曲弹性模量等试验数据。该设备一次装夹，可同时完成五个试样的力学性能测试，从而大大提高试验效率。\n符合规范GB/T 328.9-2007《建筑防水卷材试验方法》、GB/T 15788-2017《土工合成材料 宽条拉伸试验方法》等的试验要求。",
        "features": [],
        "specifications": [
          {
            "label": "最大负荷",
            "value": "5/2/1kN"
          },
          {
            "label": "精度等级",
            "value": "0.5级"
          },
          {
            "label": "试验力测量范围",
            "value": "0.4%～100%FS"
          },
          {
            "label": "试验力示值相对误差",
            "value": "±0.5%"
          },
          {
            "label": "试验力分辨力",
            "value": "1/500000FS"
          },
          {
            "label": "位移速率调节范围",
            "value": "0.005～500mm/min"
          },
          {
            "label": "位移速率相对误差",
            "value": "±0.5%以内"
          },
          {
            "label": "位移分辨力",
            "value": "0.06um"
          },
          {
            "label": "变形测量范围",
            "value": "0.2%～100%FS"
          },
          {
            "label": "变形示值相对误差",
            "value": "±0.5%以内"
          },
          {
            "label": "变形分辨力",
            "value": "1/500000FS"
          },
          {
            "label": "力控速率调节范围",
            "value": "0.01～5%FS/s"
          },
          {
            "label": "力控速率相对误差",
            "value": "±1%以内"
          },
          {
            "label": "有效试验宽度",
            "value": "1000mm"
          },
          {
            "label": "有效测试空间",
            "value": "820mm"
          },
          {
            "label": "电源",
            "value": "AC220V±10%，50Hz，1kW"
          },
          {
            "label": "主机外形尺寸",
            "value": "1505×660×1750mm"
          },
          {
            "label": "主机重量",
            "value": "800kg"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P046",
        "name": "沥青混合料旋转压实仪",
        "model": "LDSY-3",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/LDSY-3.png",
        "image": "myImages/LDSY-3-Image.png",
        "description": "旋转压实仪是一种模拟实际路面材料体积和属性的，在恒定的压力、固定的压实角度及固定的压实转速条件下，通过揉搓方法进行热拌沥青混合料圆柱体试件制作的压实成型设备。\n符合中华人民共和国交通行业标准JT/T724-2008《旋转压实仪》、JTGE20-2011《公路工程沥青及沥青混合料试验规程》中的T0736-2011《沥青混合料旋转压实试件制作方法（SGC）》规定的要求。",
        "features": [
          "液晶显示触摸屏，操作简单；",
          "透明观察窗设计，方便观察试验进程；",
          "为了使用者的安全，所有旋转部件都被覆盖封闭，在旋转压实过程中人体不能触及，如果外围护罩安装不当，或试验舱门打开，旋转式压实仪都将停止工作；",
          "操作者只需要输入压实试件的最大理论密度，试件重量和最终的体积密度，不需要计算机或另外的软件，达到数据自动存储、输出和分析的特性。",
          "采用全新的专利角度引导方法；",
          "设计一键停止按钮，终止设备试验进程；",
          "随机还有一个试件脱模器，可安放在压实机旁。"
        ],
        "specifications": [
          {
            "label": "试模尺寸",
            "value": "直径100mm，150mm 高度250mm"
          },
          {
            "label": "成型高度",
            "value": "150mm"
          },
          {
            "label": "压实压力",
            "value": "100~1000kPa（可调）"
          },
          {
            "label": "旋转次数",
            "value": "1~999次（可调）"
          },
          {
            "label": "旋转速率",
            "value": "30转/分"
          },
          {
            "label": "旋转角度",
            "value": "0.5°~2.0°（可调）"
          },
          {
            "label": "功率",
            "value": "2150W"
          },
          {
            "label": "电源",
            "value": "380V，50Hz(三相五线制)"
          },
          {
            "label": "尺寸",
            "value": "900×900×1900mm"
          },
          {
            "label": "重量",
            "value": "450kg"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P047",
        "name": "振动压实仪",
        "model": "LD-08",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/LD-08.png",
        "image": "myImages/LD-08-Image.png",
        "description": "本产品适用于制造无机结合料稳定粒料的各种试件,其中包括用于测试无侧限抗压强度、间接抗拉强度和抗压回弹模量的圆柱体试件和用于温缩系数、干缩系数、抗折强度以及抗折回弹模量测试的梁式试件，一般适用于公路施工单位、大专院校及质检等行业部门。",
        "features": [
          "激振力稳定，共振小；",
          "压实快捷，效果好；",
          "操作使用方便。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "LD-08"
          },
          {
            "label": "振动电机功率kW",
            "value": "4"
          },
          {
            "label": "升降电机功率kW",
            "value": "0.75"
          },
          {
            "label": "静压力N",
            "value": "1900～3100(建议调到2500)"
          },
          {
            "label": "激振力N",
            "value": "6800～11000（可调）"
          },
          {
            "label": "振动频率Hz",
            "value": "28～30"
          },
          {
            "label": "成型试模",
            "value": "3个"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%,50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "1820×950×2170"
          },
          {
            "label": "重量kg",
            "value": "1100"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P048",
        "name": "智能沥青延伸度测定仪",
        "model": "STYD-3",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/STYD-3.png",
        "image": "myImages/STYD-3-Image.png",
        "description": "本仪器适用于测量粘稠石油、粘稠页岩沥青、蜡液体、沥青、液体沥青蒸馏后残留物和沥青乳流体蒸发残留物等材料的延伸度，广泛应用于生产、道路施工和科研部门。\n本产品符合JTG E20标准要求。",
        "features": [
          "本仪器内箱体采用进口不锈钢折弯制成",
          "内胆上装有3000~3500W加热管一套，2000W制冷机及冷管一套，",
          "采用永磁低速同步电机带动变速箱",
          "可选用50mm/min±2.5mm/min或10mm/min±0.5mm/min的速率进行延伸。"
        ],
        "specifications": [
          {
            "label": "延伸速度mm/min",
            "value": "50±2.5 10±0.5"
          },
          {
            "label": "试验温度℃",
            "value": "2~50（根据实际需要，自行调正）"
          },
          {
            "label": "加热功率kW",
            "value": "3~3.5"
          },
          {
            "label": "制冷功率kW",
            "value": "1"
          },
          {
            "label": "控温精度",
            "value": "±0.1℃"
          },
          {
            "label": "工作电压",
            "value": "220V±10%，50HZ"
          },
          {
            "label": "外形尺寸",
            "value": "2200×580×1170mm"
          },
          {
            "label": "重量",
            "value": "200kg"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P049",
        "name": "智能沥青延伸度测定仪",
        "model": "SYD-4508G",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/SYD-4508G.png",
        "image": "myImages/SYD-4508G-Image.png",
        "description": "本仪器测定石油沥青在规定的条件和一定的温度下，以一定的速度拉伸至断裂时的长度。本设备是一款集沥青延度、沥青黏聚性（测力延度仪法）、沥青弹性恢复能力测试于一体的多用途的沥青试验仪器。\n本产品符合《公路工程沥青及混合料试验规程》JTJ3410-2025规程。",
        "features": [
          "1、采用工控触摸屏，性能优良。",
          "2、32位ARM单片机控制，自动控制水浴温度，自动采集，处理拉伸和拉力数据，全触摸屏操作，方便快捷。",
          "3、新颖的拉伸传动设计，采用进口丝杆和导轨组合，拉伸过程平稳同步，无抖动，速度均匀，延度，拉力显示准确。",
          "4、采用大功率压缩机制冷，屏蔽式冷热平衡增压循环系统，制冷速度快，浴槽温度均匀，数据存储，方便查询。",
          "5、数据储存，方便查询。",
          "6、具有无线遥控器记录和仪表触摸屏记录两种记录方式，方便用户选择使用。",
          "7、平均延度值、最大拉力、最大拉力时的伸长变形值等自动计算并显示。",
          "8、一机多用，一台SYD-4508G沥青延度试验器，可实现沥青延度、沥青测力延度、沥青弹性恢复能力的测试。"
        ],
        "specifications": [
          {
            "label": "工作电源",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "测量范围",
            "value": "1.5m(±10mm)"
          },
          {
            "label": "加热方式",
            "value": "电加热器加热"
          },
          {
            "label": "加热功率W",
            "value": "3500"
          },
          {
            "label": "浴液循环",
            "value": "屏蔽式冷热平衡增压循环系统"
          },
          {
            "label": "控温范围℃",
            "value": "5～50可调，数字显示，温度显示分辨率0.01"
          },
          {
            "label": "控温精度℃",
            "value": "±0.1"
          },
          {
            "label": "拉伸速度mm/min",
            "value": "10、50（两档可调）"
          },
          {
            "label": "测量精度mm",
            "value": "±1"
          },
          {
            "label": "延度显示",
            "value": "工控触摸屏实时显示"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P050",
        "name": "沥青含量分析仪（燃烧法）",
        "model": "LDRS-6",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/LDRS-6.png",
        "image": "myImages/LDRS-6-Image.png",
        "description": "本产品是运用燃烧法来测定沥青含量，产品采用高精度测量控制系统，配合进口天平使用，可快速、准确、安全、可靠地测定沥青含量，能满足搅拌站大批量连续生产和公路监理检查要求，进而保证筑路的质量。\n产品符合JJ6072标准要求。",
        "features": [
          "1.设备采用电容式操作屏，ARM处理器,人性化的语音提示系统，简单易用，使用维护方便。",
          "2.设备采用新型炉体结构，升温速度快，试验时间短。"
        ],
        "specifications": [
          {
            "label": "工作室尺寸",
            "value": "360mm×400mm×300mm"
          },
          {
            "label": "电源",
            "value": "主机工作电压380V±10V(三相四线)，功率8000W(需可靠接地)"
          },
          {
            "label": "仪表工作电压220V±10V",
            "value": ""
          },
          {
            "label": "天平量程",
            "value": "10kg，分度0.1g"
          },
          {
            "label": "燃烧室最高工作温度",
            "value": "800℃"
          },
          {
            "label": "最大试样重量",
            "value": "4000g,推荐1000g~1500g"
          },
          {
            "label": "沥青含量测试精度",
            "value": "0.01%"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P051",
        "name": "液压车辙试样成型机",
        "model": "LDCX-1",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/LDCX-1.png",
        "image": "myImages/LDCX-1-Image.png",
        "description": "本机主要用于车辙试验时对沥青混合料试验做碾压成型，也适用于沥青混合料其它物理、力学性能试验的碾轮法试样制作。\n本机及试验法完全符合JTG3410-2025（T0703-2025）标准的要求。",
        "features": [
          "1、碾轮压力在0～20kN范围内，可任意调整，精度0.1kN。",
          "2、试模高度可在30～100mm的范围内选择。",
          "3、安装试模的夹紧机构合理，使用方便。",
          "4、试模安装在小车上后，能自动对中。",
          "5、小车的碾压次数可任意设定，并可随时记录碾压次数，当实际碾压次数达到设定值后，碾压自动停止。",
          "6、碾压温度根据试验要求可任意设定，当实际温度达到设定温度后，自动停止加温，温度数值有准确显示。"
        ],
        "specifications": [
          {
            "label": "加载方式",
            "value": "液压式"
          },
          {
            "label": "试模规格mm",
            "value": "300×300×50(50～150厚度可定制)"
          },
          {
            "label": "试模车行程mm",
            "value": "300"
          },
          {
            "label": "碾轮的压力在0～20kN内,可任意调整",
            "value": ""
          },
          {
            "label": "碾轮的半径为500mm,宽度为298mm，曲面长度为525mm",
            "value": ""
          },
          {
            "label": "碾轮预热",
            "value": "20～200℃,可任意设定 (通常设定为100℃)"
          },
          {
            "label": "碾压轮线的压力",
            "value": "300N/cm"
          },
          {
            "label": "连机功率kW",
            "value": "3"
          },
          {
            "label": "电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "620×1100×1900"
          },
          {
            "label": "重量kg",
            "value": "500"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P052",
        "name": "科研型自动车辙试验仪",
        "model": "LDCZ-5",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/LDCZ-5.png",
        "image": "myImages/LDCZ-5-Image.png",
        "description": "LDCZ-5型自动车辙试验仪主要用于测定沥青混合料的高温抗车辙能力，供沥青混合料配合比设计的高温稳定性检验使用。本机全自动电脑控制，主要用于5cm,10cm试块浸水车辙试验，并配有试块养护室。\n本机及试验法完全符合JTG3410-2025（T0719-2025）标准的要求。",
        "features": [
          "1、本款仪器一般配合LDCX-1型液压车辙试验成型机使用。",
          "2、本机采用国际当代技术生产的车辙试验仪，其性能可靠、测控精度高、操作方便；可做浸水实验。"
        ],
        "specifications": [
          {
            "label": "碾轮的碾压速度率",
            "value": "42±1次/分（单程）"
          },
          {
            "label": "试验轮行走行程mm",
            "value": "230±10"
          },
          {
            "label": "碾轮和橡胶硬度（国际标准硬度）",
            "value": "80IRHD±5IRHD（23℃时）"
          },
          {
            "label": "加载装置总荷载N",
            "value": "780±20"
          },
          {
            "label": "试验轮接触压强Mpa",
            "value": "0.7±0.03（60℃）"
          },
          {
            "label": "试模尺寸mm",
            "value": "300×300×50（标准）"
          },
          {
            "label": "位移的测量范围mm",
            "value": "0～30"
          },
          {
            "label": "位移测量精度mm",
            "value": "±0.01"
          },
          {
            "label": "车辙的试验时间min",
            "value": "通常为60"
          },
          {
            "label": "恒温箱内温度的控制范围℃",
            "value": "室温60±0.5"
          },
          {
            "label": "电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "整机外形尺寸mm",
            "value": "1330×815×1430"
          },
          {
            "label": "重量kg",
            "value": "300"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P053",
        "name": "沥青蜡含量测定仪",
        "model": "LDL-2",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/LDL-2.png",
        "image": "myImages/LDL-2-Image.png",
        "description": "本产品适用于测定石油沥青中的蜡含量、天然原油的减压渣油生产的石油沥青的蜡含量、道路石油沥青的蜡含量，此设备是石油化工、建筑工路建设等行业常用的沥青蜡含量的测试仪器。\n本产品是依据中华人民共和国相关行业标准SH/T0425《石油沥青蜡含量测定法》和JTGE20-2011《公路工程沥青及沥青混合料试验规程》中的T0615-2011《沥青蜡含量试验》所规定的要求生产。",
        "features": [
          "仪器采用高精度数字温控仪，大功率进口制冷压缩机。以蒸馏冷却的方法测定试样的蜡含量，同时可做三个样品的分析实验；",
          "温度控制器采用最先进的数字温控仪，具有精度高、显示清晰、设置方便等特点；",
          "冷却装置采用的是进口大功率制冷压缩机，制冷可达-25℃，用于加热后蒸馏液的冷却。"
        ],
        "specifications": [
          {
            "label": "工作电源",
            "value": "AC220V±10%,50Hz"
          },
          {
            "label": "加热功率W",
            "value": "1000"
          },
          {
            "label": "制冷功率W",
            "value": "1000"
          },
          {
            "label": "内循环低温水泵",
            "value": "DC12V、42W"
          },
          {
            "label": "温度传感器",
            "value": "Pt100"
          },
          {
            "label": "制冷介质",
            "value": "R404"
          },
          {
            "label": "控温精度℃",
            "value": "±0.5"
          },
          {
            "label": "使用环境",
            "value": "环境温度-10℃ ～+30℃，相对温度＜85%"
          },
          {
            "label": "整机功耗W",
            "value": "不大于2100"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P054",
        "name": "沥青混合料稳定度测定仪",
        "model": "LD-5B",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/LD-5B.png",
        "image": "myImages/LD-5B-Image.png",
        "description": "LD-5B型全自动沥青混合料稳定度测定仪，是用来测定沥青混合料试件受压达到破坏点时的极限压力值以及垂直变形量，是做沥青配合比设计和沥青路面施工质量检验常用的检测设备。\n本产品符合《公路工程沥青及混合料试验规程》JTJ3410-2025规程。",
        "features": [
          "提供稳定度试件爱压变形全过程的图形和数据，用户可在单个试验结束后进行打印；",
          "有防错操作和过压自动保护功能；",
          "采用进口钢材制成，外形美观、防锈。"
        ],
        "specifications": [
          {
            "label": "负荷量程kN",
            "value": "30±0.1"
          },
          {
            "label": "位移量程 mm",
            "value": "10±0.1"
          },
          {
            "label": "加载速度mm/min",
            "value": "50±5"
          },
          {
            "label": "加载方式",
            "value": "自动/手动"
          },
          {
            "label": "相对湿度％RH",
            "value": "≦85"
          },
          {
            "label": "工作电源",
            "value": "AC220V±10%,50Hz"
          },
          {
            "label": "样品尺寸",
            "value": "Ф101.6mm"
          },
          {
            "label": "功率W",
            "value": "500"
          },
          {
            "label": "外形尺寸mm",
            "value": "550×350×700"
          },
          {
            "label": "重量kg",
            "value": "60"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P055",
        "name": "全自动混合料搅拌机",
        "model": "LDHB-20",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/LDHB-20.png",
        "image": "myImages/LDHB-20-Image.png",
        "description": "LDHB-20型立式全自动混合料搅拌机是制备沥青、水泥、砂石混合料试样时常用的拌和机械。\n本机及试验法完全符合JTG3410-2025（T0740-2025）标准的要求。",
        "features": [
          "采用智能控制仪表，自动控温，加热锅温度从室温～200℃范围内任意设定；",
          "搅拌时间由定时器控制，可在1～999秒范围内任意设定。"
        ],
        "specifications": [
          {
            "label": "拌和容量L",
            "value": "20"
          },
          {
            "label": "加热锅温度范围℃",
            "value": "室温~200（任意设定）"
          },
          {
            "label": "控温精度℃",
            "value": "±0.5"
          },
          {
            "label": "拌和时间s",
            "value": "1~999（任意设定）"
          },
          {
            "label": "搅拌叶自转速度",
            "value": "60±5转/分"
          },
          {
            "label": "公转速度",
            "value": "25±5转/分"
          },
          {
            "label": "电源电压",
            "value": "电源，电机，电压380V，加热部分220V（即电源部分应作三相四线制，总电源应380V加220V零线）"
          },
          {
            "label": "外形尺寸",
            "value": "750×500×1500mm"
          },
          {
            "label": "重量",
            "value": "350kg"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P056",
        "name": "全自动混合料搅拌机",
        "model": "LDHB-30",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/LDHB-30.png",
        "image": "myImages/LDHB-30-Image.png",
        "description": "LDHB-30型立式全自动混合料搅拌机是制备沥青、水泥、砂石混合料试样时常用的拌和机械。\n本机及试验法完全符合JTG3410-2025（T0740-2025）标准的要求。",
        "features": [
          "采用智能控制仪表，自动控温，加热锅温度从室温～200℃范围内任意设定；",
          "搅拌时间由定时器控制，可在1～999秒范围内任意设定。"
        ],
        "specifications": [
          {
            "label": "拌和容量L",
            "value": "30"
          },
          {
            "label": "加热锅温度范围℃",
            "value": "室温~200（任意设定）"
          },
          {
            "label": "控温精度℃",
            "value": "±0.5"
          },
          {
            "label": "拌和时间s",
            "value": "1~999（任意设定）"
          },
          {
            "label": "搅拌叶自转速度",
            "value": "60±5转/分"
          },
          {
            "label": "公转速度",
            "value": "25±5转/分"
          },
          {
            "label": "电源电压",
            "value": "电源，电机，电压380V，加热部分220V（即电源部分应作三相四线制，总电源应380V加220V零线）"
          },
          {
            "label": "外形尺寸",
            "value": "750×500×2750mm"
          },
          {
            "label": "重量",
            "value": "400kg"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P057",
        "name": "低温恒温槽",
        "model": "THD-0506",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/THD-0506.png",
        "image": "myImages/THD-0506-Image.png",
        "description": "低温恒温槽是实验室常用的设备之一，它广泛应用于石油、化工、冶金、医药、生化物性测试、化学分析研究部门、高等院校、工厂实验室及计量质检部门，该设备为试样提供一个冷热受控、温度均匀恒定的养护环境。",
        "features": [
          "风冷式全封闭压缩机且制冷；",
          "采用微机智能控制系统；",
          "触摸软键可快递设定温度，操作方便。"
        ],
        "specifications": [
          {
            "label": "型号",
            "value": "THD-0506"
          },
          {
            "label": "温度范围(℃)",
            "value": "-6.00~59.99"
          },
          {
            "label": "波动度℃",
            "value": "±0.1"
          },
          {
            "label": "内胆容积L",
            "value": "15"
          },
          {
            "label": "工作槽容积(mm)3",
            "value": "250×200×300"
          },
          {
            "label": "泵流量L/mm³",
            "value": "6"
          },
          {
            "label": "总功率kW",
            "value": "1.5"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50HZ"
          },
          {
            "label": "外形尺寸",
            "value": "850×540×680mm"
          },
          {
            "label": "重量",
            "value": "50kg"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P058",
        "name": "低温恒温槽",
        "model": "TC-20",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/TC-20低温.png",
        "image": "myImages/TC-20低温-Image.png",
        "description": "低温恒温槽是实验室常用的设备之一，它广泛应用于石油、化工、冶金、医药、生化物性测试、化学分析研究部门、高等院校、工厂实验室及计量质检部门，该设备为试样提供一个冷热受控、温度均匀恒定的养护环境。",
        "features": [
          "采用不锈钢内胆，美观耐腐蚀；",
          "模块式制冷装置，配置延时启动，高、低压力多重保护；",
          "采用环保制冷剂，节能、促减排。"
        ],
        "specifications": [
          {
            "label": "型号",
            "value": "TC-20"
          },
          {
            "label": "温度范围(℃)",
            "value": "-6.00~59.99"
          },
          {
            "label": "波动度℃",
            "value": "±0.1"
          },
          {
            "label": "内胆容积L",
            "value": "50"
          },
          {
            "label": "工作槽容积(mm)³",
            "value": "550×300×300"
          },
          {
            "label": "泵流量L/mm³",
            "value": "13"
          },
          {
            "label": "总功率kW",
            "value": "2.2"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50HZ"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P059",
        "name": "恒温水浴",
        "model": "TC-20",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/TC-20恒温.png",
        "image": "myImages/TC-20恒温-Image.png",
        "description": "该设备通过控制温度的变化，制造一个恒温的箱内环境。恒温水浴的适用范围比较广，适用于生物、化学、物理、植物、化工等科学实验室。",
        "features": [
          "壳体采用钢板制造，外壳喷以高温喷漆，内胆使用不锈钢材料，做工精致",
          "结构更合理、使用更方便。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "TC-20"
          },
          {
            "label": "控制温度℃",
            "value": "室温～100"
          },
          {
            "label": "电热管总功率kW",
            "value": "2"
          },
          {
            "label": "电热管数量",
            "value": "2根"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "工作室尺寸mm",
            "value": "600×300×210"
          },
          {
            "label": "外形尺寸mm",
            "value": "820×395×315"
          },
          {
            "label": "重量kg",
            "value": "35"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P060",
        "name": "溢流水箱",
        "model": "CF-C",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/CF-C.png",
        "image": "myImages/CF-C-Image.png",
        "description": "CF-C型恒温溢流水箱根据公路工程沥青及沥青混合料试验规程（JTGE20-2011）中的沥青混合料密度试验方法生产，具有自动恒温等功能。本产品广泛应用于化工，物性测试等研究部门。",
        "features": [
          "数显控温表，控温精确；",
          "自动恒温。"
        ],
        "specifications": [
          {
            "label": "加热功率W",
            "value": "1500"
          },
          {
            "label": "制冷功率W",
            "value": "138"
          },
          {
            "label": "温度范围℃",
            "value": "室温-60"
          },
          {
            "label": "控温精度℃",
            "value": "25±0.1 23±0.1"
          },
          {
            "label": "电压V",
            "value": "220"
          },
          {
            "label": "频率Hz",
            "value": "50"
          },
          {
            "label": "工作室尺寸",
            "value": "390×380×310"
          },
          {
            "label": "外形尺寸",
            "value": "580×580×1200（带天平架高度）"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P061",
        "name": "沥青旋转薄膜烘箱（RTFOT）",
        "model": "85型",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/85.png",
        "image": "myImages/85-Image.png",
        "description": "本仪器符合JTG3410-2025《公路工程沥青及沥青混合料试验规程》，适用于测定半固体沥青在加热和空气作用下的性能变化情况，在短时间内即可考核出沥青的老化性能。",
        "features": [],
        "specifications": [
          {
            "label": "总功率kW",
            "value": "3"
          },
          {
            "label": "电热丝",
            "value": "2组（每组1KW）"
          },
          {
            "label": "工作温度℃",
            "value": "163±0.5，175±0.5"
          },
          {
            "label": "最高温度℃",
            "value": "200"
          },
          {
            "label": "风扇",
            "value": "箱形"
          },
          {
            "label": "风扇转数r/min",
            "value": "1725"
          },
          {
            "label": "供风量mL/min",
            "value": "4000±200"
          },
          {
            "label": "喷嘴直径mm",
            "value": "1±0.1"
          },
          {
            "label": "试样瓶尺寸（口径×直径×高）mm",
            "value": "Φ31.75×Φ64×139.7"
          },
          {
            "label": "转盘砖数r/min",
            "value": "15±0.2"
          },
          {
            "label": "可装试样瓶数",
            "value": "8个"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "工作室尺寸mm",
            "value": "450×483×381"
          },
          {
            "label": "外形尺寸mm",
            "value": "630×765×920"
          },
          {
            "label": "重量kg",
            "value": "130"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P062",
        "name": "沥青薄膜烘箱（TFOT法）",
        "model": "82型",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/82.png",
        "image": "myImages/82-Image.png",
        "description": "本产品主要用做沥青薄膜加热试验，其根据JB/T5520-91《干燥箱技术条件》和JTG 3410-2025《公路工程沥青及沥青混合料试验规程》生产，属非防爆式，凡易挥发、易燃烧和易爆炸物品严禁放入箱内加热，以免发生爆炸。",
        "features": [
          "箱体采用薄钢及型钢构成，隔热层采用最优质硅棉绝热材料；工作室内壁采用不锈钢材料；",
          "本机的温度控制仪采用了抗积分饱和电路，使温度波动性能有较大的提高；",
          "两用式：拆卸工作台后，可做干燥箱使用。"
        ],
        "specifications": [
          {
            "label": "1.使用环境",
            "value": "温度10～40℃，相对湿度≤85%，无震动及腐蚀性、易燃气体存在"
          },
          {
            "label": "2.工作温度",
            "value": "163℃±1℃,175℃±1℃"
          },
          {
            "label": "3.最高工作温度",
            "value": "200℃"
          },
          {
            "label": "4.温度范围",
            "value": "50～200℃温度波动度±1℃"
          },
          {
            "label": "5.圆盘架转速",
            "value": "5.5r/min±1r/min"
          },
          {
            "label": "6.圆盘直径",
            "value": "360-370mm"
          },
          {
            "label": "7.电压",
            "value": "220V，50Hz"
          },
          {
            "label": "8.总功率",
            "value": "2.2kW"
          },
          {
            "label": "9.工作室尺寸（W×D×H）",
            "value": "450×450×450mm"
          },
          {
            "label": "10.外型尺寸（W×D×H）",
            "value": "750×600×920mm"
          },
          {
            "label": "11.重量",
            "value": "约100kg"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P063",
        "name": "电脑全自动沥青针入度仪",
        "model": "IV-2000",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/IV-2000.png",
        "image": "myImages/IV-2000-Image.png",
        "description": " 本产品适用于测定粘稠石油沥青、粘稠页岩沥青、液体石油沥青以及道路石油沥青及改性沥青，液体石油沥青蒸馏或乳化沥青蒸发后残留物的针入度，一般适用于公路、市政、化工、科研等从事沥青性能指标测量研究的部门。符合交通部JTG E20-2011，T0604-2011 沥青针入度试验的各项指标。",
        "features": [],
        "specifications": [
          {
            "label": "型号规格",
            "value": "IV-2000"
          },
          {
            "label": "电压",
            "value": "220V"
          },
          {
            "label": "功率",
            "value": "700W"
          },
          {
            "label": "温度设定",
            "value": "0—99.9℃可调，显示精密度0.1℃（出厂设置为25℃）"
          },
          {
            "label": "时间设定",
            "value": "0—99.9秒可调，显示精度0.1秒（出厂设置为5秒）"
          },
          {
            "label": "控温范围",
            "value": "10—60℃，精度±0.5℃"
          },
          {
            "label": "针入范围",
            "value": "50.00mm，显示精度0.05mm"
          },
          {
            "label": "锥总量",
            "value": "100±0.05g"
          },
          {
            "label": "标准针",
            "value": "25±0.05g"
          },
          {
            "label": "配重砝码",
            "value": "50±0.05g"
          },
          {
            "label": "恒温容器",
            "value": "＞1.0L"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P064",
        "name": "电脑沥青软化点试验仪",
        "model": "LD-2000",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/LD-2000.png",
        "image": "myImages/LD-2000-Image.png",
        "description": " 本产品适用于道路石油沥青、煤沥青、液体石油沥青等各类沥青软化点的测定，产品符合T0606-2001所规定的标准要求。一般适用于公路、桥粱建设等行业部门。",
        "features": [],
        "specifications": [
          {
            "label": "型号规格",
            "value": "LD-2000"
          },
          {
            "label": "试验介质",
            "value": "水或甘油"
          },
          {
            "label": "测温范围",
            "value": "0--125℃"
          },
          {
            "label": "分辨率",
            "value": "0.01"
          },
          {
            "label": "控温速率",
            "value": "三分钟后5℃±0.5℃/min"
          },
          {
            "label": "测量精度",
            "value": "0.5℃"
          },
          {
            "label": "测试室温",
            "value": "小于30℃且相对稳定，无空气对流现象"
          },
          {
            "label": "相对湿度",
            "value": "≤85%"
          },
          {
            "label": "温控方式",
            "value": "自动控温"
          },
          {
            "label": "搅拌",
            "value": "磁力搅拌，无极可调"
          },
          {
            "label": "钢球质量",
            "value": "3.50g±0.05g"
          },
          {
            "label": "钢球直径",
            "value": "9.53mm"
          },
          {
            "label": "烧杯",
            "value": "1000ml"
          },
          {
            "label": "电压",
            "value": "AC220V±10%"
          },
          {
            "label": "功率",
            "value": "700W"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P065",
        "name": "沥青混合料快速离心抽提仪",
        "model": "LF-5",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/LF-5.png",
        "image": "myImages/LF-5-Image.png",
        "description": "本仪器根据交通部2025年颁布的“公路工程沥青及沥青混合料试验规程”中T0722-2025规程的技术要求，总结了国外试验仪器规程的特点，根据我国的实际情况，经改进设计制造了具有国内领先的试验仪器。该机使用寿命长，操作简便，工作时间能自行设定，数字显示，自动控时、速度无级可调、自动停机，移动方便，是对旧沥青的沥青含量和沥青混合料热铺施工中的沥青含量检测的理想设备。",
        "features": [],
        "specifications": [
          {
            "label": "型号规格",
            "value": "LF-5"
          },
          {
            "label": "料碗容重kg",
            "value": "3"
          },
          {
            "label": "电源功率kW",
            "value": "0.75"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "转速r/min",
            "value": ">3600"
          },
          {
            "label": "外形mm",
            "value": "450×450×450"
          },
          {
            "label": "重量kg",
            "value": "45"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P066",
        "name": "马歇尔电动击实仪",
        "model": "MJ-IZ",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/MJ-IZ.png",
        "image": "myImages/MJ-IZ-Image.png",
        "description": "本仪器可制取交通部JTG 3410--2025试验规程中规定的101.6标准沥青合料马歇尔稳定度试件。采用高稳定度电子计数器实现自动控制，试验准确度高，工作过程自动化，工作稳定，快速，可靠。本仪器结构先进，使用方便，达到国内外同类产品质量技术水平。",
        "features": [],
        "specifications": [
          {
            "label": "1.滑块重量",
            "value": "4536±9g"
          },
          {
            "label": "2.击锤重量",
            "value": "7850±50g"
          },
          {
            "label": "3.试模直径",
            "value": "Φ101.6"
          },
          {
            "label": "4.试模高度",
            "value": "87mm"
          },
          {
            "label": "5.击锤落高",
            "value": "457±1.5mm"
          },
          {
            "label": "6.击锤次数",
            "value": "60±2次/分"
          },
          {
            "label": "7.电机功率",
            "value": "370W 380V"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P067",
        "name": "克利夫兰开口闪燃点试验仪",
        "model": "SLD-3536",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/SLD-3536.png",
        "image": "myImages/SLD-3536-Image.png",
        "description": "  本产品适用于克利夫兰开口杯（简称COC）测定粘稠石油沥青、煤沥青及闪点在79℃以下的液体石油沥青材料的闪点和燃点，一般适用于公路、市政、化工、科研等从事沥青性能指标测量研究的部门。",
        "features": [
          "由加热装置、可控硅调温电路和控制面板组成，采用电子调压技术，实现加热功率连续、无级调节，并有电压表同步显示；",
          "试验中温度开到特定值时，启动捕捉键，点火器便在油杯上方自动匀速扫划一个流程，以供测试用，简洁方便；",
          "加热丝由透明石英管保护，无明火，防爆，升温快。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "SLD-3536"
          },
          {
            "label": "加热装置",
            "value": "加热丝"
          },
          {
            "label": "划扫装置",
            "value": "自动扫划、点火"
          },
          {
            "label": "电炉加热功率W",
            "value": "0～400（连续可调）"
          },
          {
            "label": "环境温度℃",
            "value": "-10～50"
          },
          {
            "label": "相对湿度％RH",
            "value": "≦85"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "500×400×300"
          },
          {
            "label": "重量kg",
            "value": "7"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P068",
        "name": "沥青混合料最大相对密度仪",
        "model": "HDXM-21",
        "category": "路达沥青仪器系列",
        "thumbnail": "myImages/HDXM-21.png",
        "image": "myImages/HDXM-21-Image.png",
        "description": "本仪器适用于真空法测定沥青混合料理论最大相对密度仪，供沥青混合料配合比设计，路况调查或路面施工质量管理、计算空隙率、压实度等使用。按公路工程沥青及沥青混合料试验规程T0711-2011进行。为满足各类试验的需要，依据试验规程的规定，仪器设有程控自动试验和独立人工手控两大功能。",
        "features": [],
        "specifications": [
          {
            "label": "型号规格",
            "value": "HDXM-21"
          },
          {
            "label": "负压范围kPa",
            "value": "0～-0.1"
          },
          {
            "label": "工作方式",
            "value": "自动/手动"
          },
          {
            "label": "容器容积",
            "value": "2000ml×2只（不锈钢）"
          },
          {
            "label": "容器底直径mm",
            "value": "Φ180×160"
          },
          {
            "label": "真空压力",
            "value": "自动控制"
          },
          {
            "label": "真空泵功率W",
            "value": "120"
          },
          {
            "label": "容器内负压kPa",
            "value": "3.7"
          },
          {
            "label": "允许偏差kPa",
            "value": "±0.2"
          },
          {
            "label": "被抽气体的温度℃",
            "value": "≦40"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50HZ"
          },
          {
            "label": "外形尺寸mm",
            "value": "540×460×380"
          },
          {
            "label": "重量kg",
            "value": "30"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P069",
        "name": "电液伺服万能材料试验机",
        "model": "WAW-100B",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-100B.png",
        "image": "myImages/WAW-100B-Image.png",
        "description": "本产品适用于金属、非金属和复合材料、构件的拉伸，压缩，弯曲，剪切，剥离，撕裂等力学性能检测，产品符合国标GB/T228等金属拉伸试验标准要求。产品采用下置式油缸,微机控制、电液伺服，具有精度高、操作简单、方便、数据保存容量大等优点。",
        "features": [
          "本机采用高精度传感器、高精度位移传感器，示值精度高;",
          "液压控制采用国际上先进的集成油路伺服控制系统，操作方便，稳定可靠;",
          "具有智能提示工作状态，伺服自动补偿，定位，保压等先进的功能;",
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验;",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全;",
          "具有自动存储数据和自动计算打印所有试验结果的功能;",
          "配备金属防护罩，保障设备使用安全。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WAW-100B"
          },
          {
            "label": "最大试验力kN",
            "value": "100"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "拉伸试验空间mm",
            "value": "≦480"
          },
          {
            "label": "压缩试验空间mm",
            "value": "≦480"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0～15"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "10～20"
          },
          {
            "label": "工作活塞行程mm",
            "value": "120"
          },
          {
            "label": "上/下压板尺寸mm",
            "value": "Φ176/Φ176"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "420"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "≦100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电源功率kW",
            "value": "1.3"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "830×630×1660"
          },
          {
            "label": "测力柜外形尺寸mm",
            "value": "650×550×1400"
          },
          {
            "label": "重量kg",
            "value": "1600"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P070",
        "name": "电液伺服万能材料试验机",
        "model": "WAW-300B",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-300B.png",
        "image": "myImages/WAW-300B-Image.png",
        "description": "本产品适用于金属、非金属和复合材料、构件的拉伸，压缩，弯曲，剪切，剥离，撕裂等力学性能检测，产品符合国标GB/T228等金属拉伸试验标准要求。产品采用下置式油缸,微机控制、电液伺服，具有精度高、操作简单、方便、数据保存容量大等优点。",
        "features": [
          "本机采用高精度传感器、高精度位移传感器，示值精度高;",
          "液压控制采用国际上先进的集成油路伺服控制系统，操作方便，稳定可靠;",
          "具有智能提示工作状态，伺服自动补偿，定位，保压等先进的功能;",
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验;",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全;",
          "具有自动存储数据和自动计算打印所有试验结果的功能;",
          "配备金属防护罩，保障设备使用安全。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WAW-300B"
          },
          {
            "label": "最大试验力kN",
            "value": "300"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "拉伸试验空间mm",
            "value": "≦480"
          },
          {
            "label": "压缩试验空间mm",
            "value": "≦480"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0～15"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "10～20、20～32"
          },
          {
            "label": "工作活塞行程mm",
            "value": "120"
          },
          {
            "label": "上/下压板尺寸mm",
            "value": "Φ180/Φ180"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "420"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "≦100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电源功率kW",
            "value": "1.3"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "830×600×1840"
          },
          {
            "label": "测力柜外形尺寸mm",
            "value": "650×550×1400"
          },
          {
            "label": "重量kg",
            "value": "1800"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P071",
        "name": "电液伺服万能材料试验机",
        "model": "WAW-600B",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-600B.png",
        "image": "myImages/WAW-600B-Image.png",
        "description": "本产品适用于金属、非金属和复合材料、构件的拉伸，压缩，弯曲，剪切，剥离，撕裂等力学性能检测，产品符合国标GB/T228等金属拉伸试验标准要求。产品采用下置式油缸,微机控制、电液伺服，具有精度高、操作简单、方便、数据保存容量大等优点。",
        "features": [
          "本机采用高精度传感器、高精度位移传感器，示值精度高;",
          "液压控制采用国际上先进的集成油路伺服控制系统，操作方便，稳定可靠;",
          "具有智能提示工作状态，伺服自动补偿，定位，保压等先进的功能;",
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验;",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全;",
          "具有自动存储数据和自动计算打印所有试验结果的功能;",
          "配备金属防护罩，保障设备使用安全。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WAW-600B"
          },
          {
            "label": "最大试验力kN",
            "value": "600"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "拉伸试验空间mm",
            "value": "≦690"
          },
          {
            "label": "压缩试验空间mm",
            "value": "≦620"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0～15"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "13～26、26～40"
          },
          {
            "label": "工作活塞行程mm",
            "value": "170"
          },
          {
            "label": "上/下压板尺寸mm",
            "value": "Φ220/Φ230"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "510"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "≦100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电源功率kW",
            "value": "2.1"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "885×630×2000"
          },
          {
            "label": "测力柜外形尺寸mm",
            "value": "650×550×1400"
          },
          {
            "label": "重量kg",
            "value": "2400"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P072",
        "name": "电液伺服万能材料试验机",
        "model": "WAW-1000B",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-1000B.png",
        "image": "myImages/WAW-1000B-Image.png",
        "description": "本产品适用于金属、非金属和复合材料、构件的拉伸，压缩，弯曲，剪切，剥离，撕裂等力学性能检测，产品符合国标GB/T228等金属拉伸试验标准要求。产品采用下置式油缸,微机控制、电液伺服，具有精度高、操作简单、方便、数据保存容量大等优点。",
        "features": [
          "本机采用高精度传感器、高精度位移传感器，示值精度高;",
          "液压控制采用国际上先进的集成油路伺服控制系统，操作方便，稳定可靠;",
          "具有智能提示工作状态，伺服自动补偿，定位，保压等先进的功能;",
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验;",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全;",
          "具有自动存储数据和自动计算打印所有试验结果的功能;",
          "配备金属防护罩，保障设备使用安全。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WAW-1000B"
          },
          {
            "label": "最大试验力kN",
            "value": "1000"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "拉伸试验空间mm",
            "value": "≦690"
          },
          {
            "label": "压缩试验空间mm",
            "value": "≦620"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0～40"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "14～32、30～50"
          },
          {
            "label": "工作活塞行程mm",
            "value": "170"
          },
          {
            "label": "上/下压板尺寸mm",
            "value": "Φ220/Φ230"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "510"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "≦100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电源功率kW",
            "value": "2.1"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "945×640×2080"
          },
          {
            "label": "测力柜外形尺寸mm",
            "value": "650×550×1400"
          },
          {
            "label": "重量kg",
            "value": "2400"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P073",
        "name": "电液伺服万能材料试验机",
        "model": "WAW-2000B",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-2000B.png",
        "image": "myImages/WAW-2000B-Image.png",
        "description": "本产品适用于金属、非金属和复合材料、构件的拉伸，压缩，弯曲，剪切，剥离，撕裂等力学性能检测，产品符合国标GB/T228等金属拉伸试验标准要求。产品采用下置式油缸,微机控制、电液伺服，具有精度高、操作简单、方便、数据保存容量大等优点。",
        "features": [
          "本机采用高精度传感器、高精度位移传感器，示值精度高;",
          "液压控制采用国际上先进的集成油路伺服控制系统，操作方便，稳定可靠;",
          "具有智能提示工作状态，伺服自动补偿，定位，保压等先进的功能;",
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验;",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全;",
          "具有自动存储数据和自动计算打印所有试验结果的功能;",
          "配备金属防护罩，保障设备使用安全。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WAW-2000B"
          },
          {
            "label": "最大试验力kN",
            "value": "2000"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "拉伸试验空间mm",
            "value": "≦790"
          },
          {
            "label": "压缩试验空间mm",
            "value": "≦720"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0～40"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "20～40、40～60"
          },
          {
            "label": "工作活塞行程mm",
            "value": "180"
          },
          {
            "label": "上/下压板尺寸mm",
            "value": "Φ220/Φ230"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "610"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "≦100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电源功率kW",
            "value": "3.55"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "1200×800×2940"
          },
          {
            "label": "测力柜外形尺寸mm",
            "value": "650×550×1400"
          },
          {
            "label": "重量kg",
            "value": "4000"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P074",
        "name": "伺服式万能材料试验机",
        "model": "WAW-100L",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-100L.png",
        "image": "myImages/WAW-100L-Image.png",
        "description": "本产品适用于金属、非金属和复合材料、构件的拉伸，压缩，弯曲，剪切，剥离，撕裂等力学性能检测，产品符合国标GB/T228等金属拉伸试验标准要求。产品采用下置式油缸,微机控制、电液伺服，具有精度高、操作简单、方便、数据保存容量大等优点。",
        "features": [
          "本机采用0.5级轮辐传感器、高精度位移传感器，示值精度高;",
          "液压控制采用国际上先进的集成油路伺服控制系统，操作方便，稳定可靠;",
          "具有智能提示工作状态，伺服自动补偿，定位，保压等先进的功能;",
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验;",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全;",
          "具有自动存储数据和自动计算打印所有试验结果的功能;",
          "配备有机玻璃防护罩，保障设备使用安全及试验过程可观测。"
        ],
        "specifications": [
          {
            "label": "最大试验力KN",
            "value": "100"
          },
          {
            "label": "量程及测量范围KN",
            "value": "5-100"
          },
          {
            "label": "示值相对误差",
            "value": "±0.5%"
          },
          {
            "label": "最大拉伸试验空间mm",
            "value": "480"
          },
          {
            "label": "最大压缩试验空间mm",
            "value": "480"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0-15"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "10-20"
          },
          {
            "label": "工作活塞行程mm",
            "value": "180"
          },
          {
            "label": "上下压板尺寸mm",
            "value": "Φ180/φ180"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "380"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电动机总功率Kw",
            "value": "2.7"
          },
          {
            "label": "主体外形尺寸（长×宽×高）mm",
            "value": "830×600×1750"
          },
          {
            "label": "测力柜外形尺寸（长×宽×高）mm",
            "value": "700×520×1630"
          },
          {
            "label": "整机重量kg",
            "value": "1500"
          },
          {
            "label": "工作噪声dB",
            "value": "≤60"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P075",
        "name": "伺服式万能材料试验机",
        "model": "WAW-300L",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-300L.png",
        "image": "myImages/WAW-300L-Image.png",
        "description": "本产品适用于金属、非金属和复合材料、构件的拉伸，压缩，弯曲，剪切，剥离，撕裂等力学性能检测，产品符合国标GB/T228等金属拉伸试验标准要求。产品采用下置式油缸,微机控制、电液伺服，具有精度高、操作简单、方便、数据保存容量大等优点。",
        "features": [
          "本机采用0.5级轮辐传感器、高精度位移传感器，示值精度高;",
          "液压控制采用国际上先进的集成油路伺服控制系统，操作方便，稳定可靠;",
          "具有智能提示工作状态，伺服自动补偿，定位，保压等先进的功能;",
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验;",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全;",
          "具有自动存储数据和自动计算打印所有试验结果的功能;",
          "配备有机玻璃防护罩，保障设备使用安全及试验过程可观测。"
        ],
        "specifications": [
          {
            "label": "最大试验力KN",
            "value": "300"
          },
          {
            "label": "量程及测量范围KN",
            "value": "15-300"
          },
          {
            "label": "示值相对误差",
            "value": "±0.5%"
          },
          {
            "label": "最大拉伸试验空间mm",
            "value": "540"
          },
          {
            "label": "最大压缩试验空间mm",
            "value": "480"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0-15"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "10-20,20-32"
          },
          {
            "label": "工作活塞行程mm",
            "value": "180"
          },
          {
            "label": "上下压板尺寸mm",
            "value": "Φ180/φ180"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "400"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电动机总功率Kw",
            "value": "2.7"
          },
          {
            "label": "主体外形尺寸（长×宽×高）mm",
            "value": "：830×600×1840"
          },
          {
            "label": "测力柜外形尺寸（长×宽×高）mm",
            "value": "：700×520×1630"
          },
          {
            "label": "整机重量kg",
            "value": "1700"
          },
          {
            "label": "工作噪声dB",
            "value": "≤60"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P076",
        "name": "伺服式万能材料试验机",
        "model": "WAW-600L",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-600L.png",
        "image": "myImages/WAW-600L-Image.png",
        "description": "本产品适用于金属、非金属和复合材料、构件的拉伸，压缩，弯曲，剪切，剥离，撕裂等力学性能检测，产品符合国标GB/T228等金属拉伸试验标准要求。产品采用下置式油缸,微机控制、电液伺服，具有精度高、操作简单、方便、数据保存容量大等优点。",
        "features": [
          "本机采用0.5级轮辐传感器、高精度位移传感器，示值精度高;",
          "液压控制采用国际上先进的集成油路伺服控制系统，操作方便，稳定可靠;",
          "具有智能提示工作状态，伺服自动补偿，定位，保压等先进的功能;",
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验;",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全;",
          "具有自动存储数据和自动计算打印所有试验结果的功能;",
          "配备有机玻璃防护罩，保障设备使用安全及试验过程可观测。"
        ],
        "specifications": [
          {
            "label": "最大试验力KN",
            "value": "600"
          },
          {
            "label": "量程及测量范围KN",
            "value": "30-600"
          },
          {
            "label": "示值相对误差",
            "value": "±0.5%"
          },
          {
            "label": "最大拉伸试验空间mm",
            "value": "690"
          },
          {
            "label": "最大压缩试验空间mm",
            "value": "620"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0-15"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "13-26,26-40"
          },
          {
            "label": "工作活塞行程mm",
            "value": "180"
          },
          {
            "label": "上下压板尺寸mm",
            "value": "Φ180/φ180"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "400"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电动机总功率Kw",
            "value": "2.7"
          },
          {
            "label": "主体外形尺寸（长×宽×高）mm",
            "value": ":885×630×2070"
          },
          {
            "label": "测力柜外形尺寸（长×宽×高）mm",
            "value": ":700×520×1630"
          },
          {
            "label": "整机重量kg",
            "value": "2400"
          },
          {
            "label": "工作噪声dB",
            "value": "≤60"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P077",
        "name": "伺服式万能材料试验机",
        "model": "WAW-1000L",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-1000L.png",
        "image": "myImages/WAW-1000L-Image.png",
        "description": "本产品适用于金属、非金属和复合材料、构件的拉伸，压缩，弯曲，剪切，剥离，撕裂等力学性能检测，产品符合国标GB/T228等金属拉伸试验标准要求。产品采用下置式油缸,微机控制、电液伺服，具有精度高、操作简单、方便、数据保存容量大等优点。",
        "features": [
          "本机采用0.5级轮辐传感器、高精度位移传感器，示值精度高;",
          "液压控制采用国际上先进的集成油路伺服控制系统，操作方便，稳定可靠;",
          "具有智能提示工作状态，伺服自动补偿，定位，保压等先进的功能;",
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验;",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全;",
          "具有自动存储数据和自动计算打印所有试验结果的功能;",
          "配备有机玻璃防护罩，保障设备使用安全及试验过程可观测。"
        ],
        "specifications": [
          {
            "label": "最大试验力KN",
            "value": "1000"
          },
          {
            "label": "量程及测量范围KN",
            "value": "50-1000"
          },
          {
            "label": "示值相对误差",
            "value": "±0.5%"
          },
          {
            "label": "最大拉伸试验空间mm",
            "value": "690"
          },
          {
            "label": "最大压缩试验空间mm",
            "value": "620"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0-15"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "20-40,40-60"
          },
          {
            "label": "工作活塞行程mm",
            "value": "180"
          },
          {
            "label": "上下压板尺寸mm",
            "value": "φ220/φ230"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "450"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电动机总功率Kw",
            "value": "2.7"
          },
          {
            "label": "主体外形尺寸（长×宽×高）mm",
            "value": ":945×640×2100"
          },
          {
            "label": "测力柜外形尺寸（长×宽×高）mm",
            "value": ":700×520×1630"
          },
          {
            "label": "整机重量kg",
            "value": "2800"
          },
          {
            "label": "工作噪声dB",
            "value": "≤60"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P078",
        "name": "电液伺服万能材料试验机",
        "model": "WAW-100S",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-100S.png",
        "image": "myImages/WAW-100S-Image.png",
        "description": "本产品适用于金属、非金属和复合材料、构件的拉伸，压缩，弯曲，剪切，剥离，撕裂等力学性能检测，产品符合国标GB/T228等金属拉伸试验标准要求。产品采用下置式油缸,微机控制、电液伺服，具有精度高、操作简单、方便、数据保存容量大等优点。",
        "features": [
          "本机采用0.5级轮辐传感器、高精度位移传感器，示值精度高；",
          "液压控制采用伺服电机，国际上先进的集成油路伺服控制系统，操作方便，稳定可靠；",
          "具有智能提示工作状态，伺服自动补偿，定位，保压等先进的功能；",
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验；",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全；",
          "具有自动存储数据和自动计算打印所有试验结果的功能；",
          "配备有机玻璃防护罩，保障设备使用安全及试验过程可观测。"
        ],
        "specifications": [
          {
            "label": "最大试验力KN",
            "value": "100"
          },
          {
            "label": "量程及测量范围KN",
            "value": "5-100"
          },
          {
            "label": "示值相对误差",
            "value": "±0.5%"
          },
          {
            "label": "最大拉伸试验空间mm",
            "value": "480"
          },
          {
            "label": "最大压缩试验空间mm",
            "value": "480"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0-15"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "10-20"
          },
          {
            "label": "工作活塞行程mm",
            "value": "180"
          },
          {
            "label": "上下压板尺寸mm",
            "value": "Φ180/φ180"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "380"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电动机总功率kW",
            "value": "2.7"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主体外形尺寸（长×宽×高）mm",
            "value": "830×600×1750"
          },
          {
            "label": "测力柜外形尺寸（长×宽×高）mm",
            "value": "700×520×1630"
          },
          {
            "label": "整机重量kg",
            "value": "1500"
          },
          {
            "label": "工作噪声dB",
            "value": "≤60"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P079",
        "name": "电液伺服万能材料试验机",
        "model": "WAW-300S",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-300S.png",
        "image": "myImages/WAW-300S-Image.png",
        "description": "本产品适用于金属、非金属和复合材料、构件的拉伸，压缩，弯曲，剪切，剥离，撕裂等力学性能检测，产品符合国标GB/T228等金属拉伸试验标准要求。产品采用下置式油缸,微机控制、电液伺服，具有精度高、操作简单、方便、数据保存容量大等优点。",
        "features": [
          "本机采用0.5级轮辐传感器、高精度位移传感器，示值精度高；",
          "液压控制采用伺服电机，国际上先进的集成油路伺服控制系统，操作方便，稳定可靠；",
          "具有智能提示工作状态，伺服自动补偿，定位，保压等先进的功能；",
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验；",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全；",
          "具有自动存储数据和自动计算打印所有试验结果的功能；",
          "配备有机玻璃防护罩，保障设备使用安全及试验过程可观测。"
        ],
        "specifications": [
          {
            "label": "最大试验力KN",
            "value": "300"
          },
          {
            "label": "量程及测量范围KN",
            "value": "15-300"
          },
          {
            "label": "示值相对误差",
            "value": "±0.5%"
          },
          {
            "label": "最大拉伸试验空间mm",
            "value": "540"
          },
          {
            "label": "最大压缩试验空间mm",
            "value": "480"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0-15"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "10-20,20-32"
          },
          {
            "label": "工作活塞行程mm",
            "value": "180"
          },
          {
            "label": "上下压板尺寸mm",
            "value": "Φ180/φ180"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "400"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电动机总功率kW",
            "value": "2.7"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主体外形尺寸（长×宽×高）mm",
            "value": "：830×600×1840"
          },
          {
            "label": "测力柜外形尺寸（长×宽×高）mm",
            "value": "：700×520×1630"
          },
          {
            "label": "整机重量kg",
            "value": "1700"
          },
          {
            "label": "工作噪声dB",
            "value": "≤60"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P080",
        "name": "电液伺服万能材料试验机",
        "model": "WAW-600S",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-600S.png",
        "image": "myImages/WAW-600S-Image.png",
        "description": "本产品适用于金属、非金属和复合材料、构件的拉伸，压缩，弯曲，剪切，剥离，撕裂等力学性能检测，产品符合国标GB/T228等金属拉伸试验标准要求。产品采用下置式油缸,微机控制、电液伺服，具有精度高、操作简单、方便、数据保存容量大等优点。",
        "features": [
          "本机采用0.5级轮辐传感器、高精度位移传感器，示值精度高；",
          "液压控制采用伺服电机，国际上先进的集成油路伺服控制系统，操作方便，稳定可靠；",
          "具有智能提示工作状态，伺服自动补偿，定位，保压等先进的功能；",
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验；",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全；",
          "具有自动存储数据和自动计算打印所有试验结果的功能；",
          "配备有机玻璃防护罩，保障设备使用安全及试验过程可观测。"
        ],
        "specifications": [
          {
            "label": "最大试验力KN",
            "value": "600"
          },
          {
            "label": "量程及测量范围KN",
            "value": "30-600"
          },
          {
            "label": "示值相对误差",
            "value": "±0.5%"
          },
          {
            "label": "最大拉伸试验空间mm",
            "value": "690"
          },
          {
            "label": "最大压缩试验空间mm",
            "value": "620"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0-15"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "13-26,26-40"
          },
          {
            "label": "工作活塞行程mm",
            "value": "180"
          },
          {
            "label": "上下压板尺寸mm",
            "value": "Φ180/φ180"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "400"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电动机总功率kW",
            "value": "2.7"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主体外形尺寸（长×宽×高）mm",
            "value": ":885×630×2070"
          },
          {
            "label": "测力柜外形尺寸（长×宽×高）mm",
            "value": ":700×520×1630"
          },
          {
            "label": "整机重量kg",
            "value": "2400"
          },
          {
            "label": "工作噪声dB",
            "value": "≤60"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P081",
        "name": "电液伺服万能材料试验机",
        "model": "WAW-1000S",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-1000S.png",
        "image": "myImages/WAW-1000S-Image.png",
        "description": "本产品适用于金属、非金属和复合材料、构件的拉伸，压缩，弯曲，剪切，剥离，撕裂等力学性能检测，产品符合国标GB/T228等金属拉伸试验标准要求。产品采用下置式油缸,微机控制、电液伺服，具有精度高、操作简单、方便、数据保存容量大等优点。",
        "features": [
          "本机采用0.5级轮辐传感器、高精度位移传感器，示值精度高；",
          "液压控制采用伺服电机，国际上先进的集成油路伺服控制系统，操作方便，稳定可靠；",
          "具有智能提示工作状态，伺服自动补偿，定位，保压等先进的功能；",
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验；",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全；",
          "具有自动存储数据和自动计算打印所有试验结果的功能；",
          "配备有机玻璃防护罩，保障设备使用安全及试验过程可观测。"
        ],
        "specifications": [
          {
            "label": "最大试验力KN",
            "value": "1000"
          },
          {
            "label": "量程及测量范围KN",
            "value": "50-1000"
          },
          {
            "label": "示值相对误差",
            "value": "±0.5%"
          },
          {
            "label": "最大拉伸试验空间mm",
            "value": "690"
          },
          {
            "label": "最大压缩试验空间mm",
            "value": "620"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0-15"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "14-32,30-50"
          },
          {
            "label": "工作活塞行程mm",
            "value": "180"
          },
          {
            "label": "上下压板尺寸mm",
            "value": "φ220/φ230"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "450"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电动机总功率kW",
            "value": "2.7"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主体外形尺寸（长×宽×高）mm",
            "value": ":945×640×2100"
          },
          {
            "label": "测力柜外形尺寸（长×宽×高）mm",
            "value": ":700×520×1630"
          },
          {
            "label": "整机重量kg",
            "value": "2800"
          },
          {
            "label": "工作噪声dB",
            "value": "≤60"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P082",
        "name": "电液伺服万能材料试验机",
        "model": "WAW-2000S",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-2000S.png",
        "image": "myImages/WAW-2000S-Image.png",
        "description": "本产品适用于金属、非金属和复合材料、构件的拉伸，压缩，弯曲，剪切，剥离，撕裂等力学性能检测，产品符合国标GB/T228等金属拉伸试验标准要求。产品采用下置式油缸,微机控制、电液伺服，具有精度高、操作简单、方便、数据保存容量大等优点。",
        "features": [
          "本机采用0.5级轮辐传感器、高精度位移传感器，示值精度高；",
          "液压控制采用伺服电机，国际上先进的集成油路伺服控制系统，操作方便，稳定可靠；",
          "具有智能提示工作状态，伺服自动补偿，定位，保压等先进的功能；",
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验；",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全；",
          "具有自动存储数据和自动计算打印所有试验结果的功能；",
          "配备有机玻璃防护罩，保障设备使用安全及试验过程可观测。"
        ],
        "specifications": [
          {
            "label": "最大试验力KN",
            "value": "2000"
          },
          {
            "label": "量程及测量范围KN",
            "value": "100-2000"
          },
          {
            "label": "示值相对误差",
            "value": "±0.5%"
          },
          {
            "label": "最大拉伸试验空间mm",
            "value": "790"
          },
          {
            "label": "最大压缩试验空间mm",
            "value": "720"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0-40"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "20-40,40-60"
          },
          {
            "label": "工作活塞行程mm",
            "value": "250"
          },
          {
            "label": "上下压板尺寸mm",
            "value": "φ220/φ230"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "570"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电动机总功率kW",
            "value": "3.7"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主体外形尺寸（长×宽×高）mm",
            "value": ":1200×800×2940"
          },
          {
            "label": "测力柜外形尺寸（长×宽×高）mm",
            "value": ":700×520×1630"
          },
          {
            "label": "整机重量kg",
            "value": "3500"
          },
          {
            "label": "工作噪声dB",
            "value": "≤60"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P083",
        "name": "电液伺服万能材料试验机（避震款）",
        "model": "WAW-100Pro",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-100Pro.png",
        "image": "myImages/WAW-100Pro-Image.png",
        "description": "该试验机主要用于金属材料的拉伸、压缩、弯曲和剪切等试验，符合GB/T228.1金属拉伸试验标准等国标的要求。该设备使用的伺服油源控制系统能够有效降低设备运行噪音，减少热量产生，延长油的使用寿命，并消除了冷却的需求。该设备的减震系统能有效降低设备使用过程中的振动，使得实验过程更加安全和舒适。无丝杆结构使得该设备相比于其他万能试验机具有更强的刚性，更方便的维护操作和更低的故障率。",
        "features": [],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WAW-100Pro"
          },
          {
            "label": "最大试验力",
            "value": "100kN"
          },
          {
            "label": "示值相对误差",
            "value": "≤±0.5%"
          },
          {
            "label": "力测量范围",
            "value": "5%~100%FS"
          },
          {
            "label": "力加载速度范围",
            "value": "0.01%~3%FS/S"
          },
          {
            "label": "应力速率误差",
            "value": "≤±2%"
          },
          {
            "label": "等速应变控制范围",
            "value": "0.00001~0.0005mm/s"
          },
          {
            "label": "等速位移控制范围",
            "value": "0.5-400mm/min"
          },
          {
            "label": "位移速度相对误差",
            "value": "≤±2%"
          },
          {
            "label": "最大上升速度",
            "value": "420mm/min"
          },
          {
            "label": "最大下降速度",
            "value": "660mm/min"
          },
          {
            "label": "拉伸试验空间",
            "value": "250-550mm"
          },
          {
            "label": "试样夹紧方式",
            "value": "液压"
          },
          {
            "label": "圆试样夹持范围",
            "value": "Φ10-Φ20mm"
          },
          {
            "label": "板试样夹持范围",
            "value": "0-15mm"
          },
          {
            "label": "试样夹持宽度",
            "value": "75mm"
          },
          {
            "label": "电机功率",
            "value": "2.3kW"
          },
          {
            "label": "主机外形尺寸",
            "value": "1000×907×2030mm"
          },
          {
            "label": "电源",
            "value": "220V±10%"
          },
          {
            "label": "整机重量",
            "value": "1400kg"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": true
      },
      {
        "id": "P084",
        "name": "电液伺服万能材料试验机（避震款）",
        "model": "WAW-300Pro",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-300Pro.png",
        "image": "myImages/WAW-300Pro-Image.png",
        "description": "该试验机主要用于金属材料的拉伸、压缩、弯曲和剪切等试验，符合GB/T228.1金属拉伸试验标准等国标的要求。该设备使用的伺服油源控制系统能够有效降低设备运行噪音，减少热量产生，延长油的使用寿命，并消除了冷却的需求。该设备的减震系统能有效降低设备使用过程中的振动，使得实验过程更加安全和舒适。无丝杆结构使得该设备相比于其他万能试验机具有更强的刚性，更方便的维护操作和更低的故障率。",
        "features": [],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WAW-300Pro"
          },
          {
            "label": "最大试验力",
            "value": "300kN"
          },
          {
            "label": "示值相对误差",
            "value": "≤±0.5%"
          },
          {
            "label": "力测量范围",
            "value": "5%~100%FS"
          },
          {
            "label": "力加载速度范围",
            "value": "0.01%~3%FS/S"
          },
          {
            "label": "应力速率误差",
            "value": "≤±2%"
          },
          {
            "label": "等速应变控制范围",
            "value": "0.00001~0.0005mm/s"
          },
          {
            "label": "等速位移控制范围",
            "value": "0.5-400mm/min"
          },
          {
            "label": "位移速度相对误差",
            "value": "≤±2%"
          },
          {
            "label": "最大上升速度",
            "value": "420mm/min"
          },
          {
            "label": "最大下降速度",
            "value": "660mm/min"
          },
          {
            "label": "拉伸试验空间",
            "value": "250-550mm"
          },
          {
            "label": "试样夹紧方式",
            "value": "液压"
          },
          {
            "label": "圆试样夹持范围",
            "value": "Φ10-Φ20mm、Φ20-Φ32"
          },
          {
            "label": "板试样夹持范围",
            "value": "0-15mm"
          },
          {
            "label": "试样夹持宽度",
            "value": "75mm"
          },
          {
            "label": "电机功率",
            "value": "2.3kW"
          },
          {
            "label": "主机外形尺寸",
            "value": "1000×907×2030mm"
          },
          {
            "label": "电源",
            "value": "220V±10%"
          },
          {
            "label": "整机重量",
            "value": "1400kg"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": true
      },
      {
        "id": "P085",
        "name": "电液伺服万能材料试验机（避震款）",
        "model": "WAW-600Pro",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-600Pro.png",
        "image": "myImages/WAW-600Pro-Image.png",
        "description": "该试验机主要用于金属材料的拉伸、压缩、弯曲和剪切等试验，符合GB/T228.1金属拉伸试验标准等国标的要求。该设备使用的伺服油源控制系统能够有效降低设备运行噪音，减少热量产生，延长油的使用寿命，并消除了冷却的需求。该设备的减震系统能有效降低设备使用过程中的振动，使得实验过程更加安全和舒适。无丝杆结构使得该设备相比于其他万能试验机具有更强的刚性，更方便的维护操作和更低的故障率。",
        "features": [],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WAW-600Pro"
          },
          {
            "label": "最大试验力",
            "value": "600kN"
          },
          {
            "label": "示值相对误差",
            "value": "≤±0.5%"
          },
          {
            "label": "力测量范围",
            "value": "5%~100%FS"
          },
          {
            "label": "力加载速度范围",
            "value": "0.01%~3%FS/S"
          },
          {
            "label": "应力速率误差",
            "value": "≤±2%"
          },
          {
            "label": "等速应变控制范围",
            "value": "0.00001~0.0005mm/s"
          },
          {
            "label": "等速位移控制范围",
            "value": "0.5-400mm/min"
          },
          {
            "label": "位移速度相对误差",
            "value": "≤±2%"
          },
          {
            "label": "最大上升速度",
            "value": "350mm/min"
          },
          {
            "label": "最大下降速度",
            "value": "500mm/min"
          },
          {
            "label": "拉伸试验空间",
            "value": "250-550mm"
          },
          {
            "label": "试样夹紧方式",
            "value": "液压"
          },
          {
            "label": "圆试样夹持范围",
            "value": "Φ13-Φ26mm、Φ26-Φ40mm"
          },
          {
            "label": "板试样夹持范围",
            "value": "0-15mm"
          },
          {
            "label": "试样夹持宽度",
            "value": "110mm"
          },
          {
            "label": "电机功率",
            "value": "2.3kW"
          },
          {
            "label": "主机外形尺寸",
            "value": "1440×580×2200"
          },
          {
            "label": "电源",
            "value": "220V±10%"
          },
          {
            "label": "整机重量",
            "value": "2350kg"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": true
      },
      {
        "id": "P086",
        "name": "电液伺服万能材料试验机（避震款）",
        "model": "WAW-1000Pro",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-1000Pro.png",
        "image": "myImages/WAW-1000Pro-Image.png",
        "description": "该试验机主要用于金属材料的拉伸、压缩、弯曲和剪切等试验，符合GB/T228.1金属拉伸试验标准等国标的要求。该设备使用的伺服油源控制系统能够有效降低设备运行噪音，减少热量产生，延长油的使用寿命，并消除了冷却的需求。该设备的减震系统能有效降低设备使用过程中的振动，使得实验过程更加安全和舒适。无丝杆结构使得该设备相比于其他万能试验机具有更强的刚性，更方便的维护操作和更低的故障率。",
        "features": [],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WAW-1000Pro"
          },
          {
            "label": "最大试验力",
            "value": "1000kN"
          },
          {
            "label": "示值相对误差",
            "value": "≤±0.5%"
          },
          {
            "label": "力测量范围",
            "value": "5%~100%FS"
          },
          {
            "label": "力加载速度范围",
            "value": "0.01%~3%FS/S"
          },
          {
            "label": "应力速率误差",
            "value": "≤±2%"
          },
          {
            "label": "等速应变控制范围",
            "value": "0.00001~0.0005mm/s"
          },
          {
            "label": "等速位移控制范围",
            "value": "0.5-400mm/min"
          },
          {
            "label": "位移速度相对误差",
            "value": "≤±2%"
          },
          {
            "label": "最大上升速度",
            "value": "350mm/min"
          },
          {
            "label": "最大下降速度",
            "value": "500mm/min"
          },
          {
            "label": "拉伸试验空间",
            "value": "250-550mm"
          },
          {
            "label": "试样夹紧方式",
            "value": "液压"
          },
          {
            "label": "圆试样夹持范围",
            "value": "Φ14-Φ32mm、Φ30-Φ50mm"
          },
          {
            "label": "板试样夹持范围",
            "value": "0-40mm"
          },
          {
            "label": "试样夹持宽度",
            "value": "110mm"
          },
          {
            "label": "电机功率",
            "value": "2.3kW"
          },
          {
            "label": "主机外形尺寸",
            "value": "1570×970×2280mm"
          },
          {
            "label": "电源",
            "value": "220V±10%"
          },
          {
            "label": "整机重量",
            "value": "3200kg"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": true
      },
      {
        "id": "P087",
        "name": "伺服式钢绞线专用试验机",
        "model": "WAW-600G",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-600G.png",
        "image": "myImages/WAW-600G-Image.png",
        "description": "该试验机主要用于钢绞线的拉伸试验，也可用于其他金属材料的拉伸、压缩、弯曲和剪切等试验。它能够实现等速率加荷、等速率变形和等速率位移等试验，并且可以在一次试验中实现力、变形和位移的三段控制，各段控制之间能够平滑切换。",
        "features": [
          "本机采用高精度位移传感器,数据精准；",
          "采用高精度电子引伸仪，准确有效的测量变形值；",
          "采用高分辨率采集系统，数据采集速度快，精确度高；",
          "液压控制采用国际上先进的集成油路伺服控制系统，加荷稳定、可靠，智能化操作，可以自动升降、自动定位、自动定标，实现等力、等位移及其混合控制；",
          "具有智能提示工作状态，伺服自动补偿，定位，保压等先进的功能。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WAW-600G"
          },
          {
            "label": "最大试验力kN",
            "value": "600"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "最大拉伸试验空间mm",
            "value": "1050"
          },
          {
            "label": "最大压缩试验空间mm",
            "value": "950"
          },
          {
            "label": "工作活塞行程mm",
            "value": "180"
          },
          {
            "label": "上/下压板尺寸mm",
            "value": "Φ220/Φ230"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "510"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "≦60"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电源功率kW",
            "value": "2.1"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "885×585×2700"
          },
          {
            "label": "测力柜外形尺寸mm",
            "value": "650×550×1400"
          },
          {
            "label": "重量kg",
            "value": "3200"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P088",
        "name": "伺服式钢绞线专用试验机",
        "model": "WAW-1000G",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-1000G.png",
        "image": "myImages/WAW-1000G-Image.png",
        "description": "该试验机主要用于钢绞线的拉伸试验，也可用于其他金属材料的拉伸、压缩、弯曲和剪切等试验。它能够实现等速率加荷、等速率变形和等速率位移等试验，并且可以在一次试验中实现力、变形和位移的三段控制，各段控制之间能够平滑切换。",
        "features": [
          "本机采用高精度位移传感器,数据精准；",
          "采用高精度电子引伸仪，准确有效的测量变形值；",
          "采用高分辨率采集系统，数据采集速度快，精确度高；",
          "液压控制采用国际上先进的集成油路伺服控制系统，加荷稳定、可靠，智能化操作，可以自动升降、自动定位、自动定标，实现等力、等位移及其混合控制；",
          "具有智能提示工作状态，伺服自动补偿，定位，保压等先进的功能。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WAW-1000G"
          },
          {
            "label": "最大试验力kN",
            "value": "1000"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "最大拉伸试验空间mm",
            "value": "1050"
          },
          {
            "label": "最大压缩试验空间mm",
            "value": "950"
          },
          {
            "label": "工作活塞行程mm",
            "value": "180"
          },
          {
            "label": "上/下压板尺寸mm",
            "value": "Φ220/Φ230"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "510"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "≦60"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电源功率kW",
            "value": "2.1"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "885×585×2700"
          },
          {
            "label": "测力柜外形尺寸mm",
            "value": "650×550×1400"
          },
          {
            "label": "重量kg",
            "value": "3200"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P089",
        "name": "电液伺服钢绞线专用试验机",
        "model": "WAW-600GS",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-600GS.png",
        "image": "myImages/WAW-600GS-Image.png",
        "description": "该试验机主要用于钢绞线的拉伸试验，也可用于其他金属材料的拉伸、压缩、弯曲和剪切等试验，符合GB/T228.1，GB/T5224拉伸试验标准等国标的要求。它能够实现等速率加荷、等速率变形和等速率位移等试验，并且可以在一次试验中实现力、变形和位移的三段控制，各段控制之间能够平滑切换。该设备的伺服油源控制系统能够有效降低设备运行噪音，减少热量产生，延长油的使用寿命，并消除了冷却的需求。",
        "features": [
          "本机采用0.5级轮辐传感器、高精度位移传感器，示值精度高;",
          "液压控制采用伺服电机，国际上先进的集成油路伺服控制系统，操作方便，稳定可靠;",
          "具有智能提示工作状态，伺服自动补偿，定位，保压等先进的功能;",
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验;",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全;",
          "具有自动存储数据和自动计算打印所有试验结果的功能;",
          "配备有机玻璃防护罩，保障设备使用安全及试验过程可观测。"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "600"
          },
          {
            "label": "量程及测量范围KN",
            "value": "30~600"
          },
          {
            "label": "示值相对误差",
            "value": "±0.5%"
          },
          {
            "label": "最大拉伸试验空间mm",
            "value": "1050"
          },
          {
            "label": "最大压缩试验空间mm",
            "value": "950"
          },
          {
            "label": "工作活塞行程mm",
            "value": "200"
          },
          {
            "label": "上下压板尺寸mm",
            "value": "Φ220/Φ230"
          },
          {
            "label": "两支柱间距mm",
            "value": "450"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主体外形尺寸mm",
            "value": "945×640×2910"
          },
          {
            "label": "测力柜外形尺寸（长×宽×高）mm",
            "value": ":700×520×1630"
          },
          {
            "label": "整机重量kg",
            "value": "3700"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P090",
        "name": "电液伺服钢绞线专用试验机",
        "model": "WAW-1000GS",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WAW-1000GS.png",
        "image": "myImages/WAW-1000GS-Image.png",
        "description": "该试验机主要用于钢绞线的拉伸试验，也可用于其他金属材料的拉伸、压缩、弯曲和剪切等试验，符合GB/T228.1，GB/T5224拉伸试验标准等国标的要求。它能够实现等速率加荷、等速率变形和等速率位移等试验，并且可以在一次试验中实现力、变形和位移的三段控制，各段控制之间能够平滑切换。该设备的伺服油源控制系统能够有效降低设备运行噪音，减少热量产生，延长油的使用寿命，并消除了冷却的需求。",
        "features": [
          "本机采用0.5级轮辐传感器、高精度位移传感器，示值精度高;",
          "液压控制采用伺服电机，国际上先进的集成油路伺服控制系统，操作方便，稳定可靠;",
          "具有智能提示工作状态，伺服自动补偿，定位，保压等先进的功能;",
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验;",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全;",
          "具有自动存储数据和自动计算打印所有试验结果的功能;",
          "配备有机玻璃防护罩，保障设备使用安全及试验过程可观测。"
        ],
        "specifications": [
          {
            "label": "最大试验力KN",
            "value": "1000"
          },
          {
            "label": "量程及测量范围KN",
            "value": "50~1000"
          },
          {
            "label": "示值相对误差",
            "value": "±0.5%"
          },
          {
            "label": "最大拉伸试验空间mm",
            "value": "1050"
          },
          {
            "label": "最大压缩试验空间mm",
            "value": "950"
          },
          {
            "label": "工作活塞行程mm",
            "value": "200"
          },
          {
            "label": "上下压板尺寸mm",
            "value": "Φ220/Φ230"
          },
          {
            "label": "两支柱间距mm",
            "value": "450"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主体外形尺寸mm",
            "value": "945×640×2910"
          },
          {
            "label": "测力柜外形尺寸（长×宽×高）mm",
            "value": ":700×520×1630"
          },
          {
            "label": "整机重量kg",
            "value": "3700"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P091",
        "name": "屏显式万能材料试验机",
        "model": "WEW-100B",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WEW-100B.png",
        "image": "myImages/WEW-100B-Image.png",
        "description": "该试验机主要用于金属材料的拉伸、压缩、弯曲和剪切等试验。",
        "features": [
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验。",
          "采用油缸下置，不漏油，操作稳定。",
          "配有负荷传感器，进行力值检测，自动跟踪测量。",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全。",
          "具有自动存储数据和自动计算打印所有试验结果的功能。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WEW-100B"
          },
          {
            "label": "最大试验力kN",
            "value": "100"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "拉伸试验空间mm",
            "value": "≦480"
          },
          {
            "label": "压缩试验空间mm",
            "value": "≦480"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0～15"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "10～20"
          },
          {
            "label": "工作活塞行程mm",
            "value": "120"
          },
          {
            "label": "上/下压板尺寸mm",
            "value": "Φ176/Φ176"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "420"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "≦100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电动机总功率kW",
            "value": "1.2"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "830×600×1660"
          },
          {
            "label": "测力柜外形尺寸mm",
            "value": "1000×700×850"
          },
          {
            "label": "重量kg",
            "value": "1600"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P092",
        "name": "屏显式万能材料试验机",
        "model": "WEW-300B",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WEW-300B.png",
        "image": "myImages/WEW-300B-Image.png",
        "description": "该试验机主要用于金属材料的拉伸、压缩、弯曲和剪切等试验。",
        "features": [
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验。",
          "采用油缸下置，不漏油，操作稳定。",
          "配有负荷传感器，进行力值检测，自动跟踪测量。",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全。",
          "具有自动存储数据和自动计算打印所有试验结果的功能。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WEW-300B"
          },
          {
            "label": "最大试验力kN",
            "value": "300"
          },
          {
            "label": "量程及测量范围kN",
            "value": "30~300"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "拉伸试验空间mm",
            "value": "≦480"
          },
          {
            "label": "压缩试验空间mm",
            "value": "≦480"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0～15"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "10～20、20～32"
          },
          {
            "label": "工作活塞行程mm",
            "value": "120"
          },
          {
            "label": "上/下压板尺寸mm",
            "value": "Φ180/Φ180"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "420"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "≦100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电动机总功率kW",
            "value": "1.2"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "830×600×1840"
          },
          {
            "label": "测力柜外形尺寸mm",
            "value": "1000×700×850"
          },
          {
            "label": "重量kg",
            "value": "1800"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P093",
        "name": "屏显式万能材料试验机",
        "model": "WEW-600B",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WEW-600B.png",
        "image": "myImages/WEW-600B-Image.png",
        "description": "该试验机主要用于金属材料的拉伸、压缩、弯曲和剪切等试验。",
        "features": [
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验。",
          "采用油缸下置，不漏油，操作稳定。",
          "配有负荷传感器，进行力值检测，自动跟踪测量。",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全。",
          "具有自动存储数据和自动计算打印所有试验结果的功能。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WEW-600B"
          },
          {
            "label": "最大试验力kN",
            "value": "600"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "拉伸试验空间mm",
            "value": "≦690"
          },
          {
            "label": "压缩试验空间mm",
            "value": "≦620"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0～15"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "13～26、26～40"
          },
          {
            "label": "工作活塞行程mm",
            "value": "170"
          },
          {
            "label": "上/下压板尺寸mm",
            "value": "Φ220/Φ230"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "510"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "≦100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电动机总功率kW",
            "value": "1.8"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "885×630×2000"
          },
          {
            "label": "测力柜外形尺寸mm",
            "value": "1000×700×850"
          },
          {
            "label": "重量kg",
            "value": "2400"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P094",
        "name": "屏显式万能材料试验机",
        "model": "WEW-1000B",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WEW-1000B.png",
        "image": "myImages/WEW-1000B-Image.png",
        "description": "该试验机主要用于金属材料的拉伸、压缩、弯曲和剪切等试验。",
        "features": [
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验。",
          "采用油缸下置，不漏油，操作稳定。",
          "配有负荷传感器，进行力值检测，自动跟踪测量。",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全。",
          "具有自动存储数据和自动计算打印所有试验结果的功能。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WEW-1000B"
          },
          {
            "label": "最大试验力kN",
            "value": "1000"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "拉伸试验空间mm",
            "value": "≦690"
          },
          {
            "label": "压缩试验空间mm",
            "value": "≦620"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0～40"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "14～32、30～50"
          },
          {
            "label": "工作活塞行程mm",
            "value": "170"
          },
          {
            "label": "上/下压板尺寸mm",
            "value": "Φ220/Φ230"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "510"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "≦100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电动机总功率kW",
            "value": "1.8"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "945×640×2080"
          },
          {
            "label": "测力柜外形尺寸mm",
            "value": "1000×700×850"
          },
          {
            "label": "重量kg",
            "value": "2400"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P095",
        "name": "屏显式万能材料试验机",
        "model": "WEW-2000B",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WEW-2000B.png",
        "image": "myImages/WEW-2000B-Image.png",
        "description": "该试验机主要用于金属材料的拉伸、压缩、弯曲和剪切等试验。",
        "features": [
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验。",
          "采用油缸下置，不漏油，操作稳定。",
          "配有负荷传感器，进行力值检测，自动跟踪测量。",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全。",
          "具有自动存储数据和自动计算打印所有试验结果的功能。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WEW-2000B"
          },
          {
            "label": "最大试验力kN",
            "value": "2000"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "拉伸试验空间mm",
            "value": "≦790"
          },
          {
            "label": "压缩试验空间mm",
            "value": "≦720"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0～40"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "20～40、40～60"
          },
          {
            "label": "工作活塞行程mm",
            "value": "180"
          },
          {
            "label": "上/下压板尺寸mm",
            "value": "Φ220/Φ230"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "610"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "≦100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电源功率kW",
            "value": "3.55"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "1200×800×2940"
          },
          {
            "label": "测力柜外形尺寸mm",
            "value": "1000×700×850"
          },
          {
            "label": "重量kg",
            "value": "4000"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P096",
        "name": "数显式万能材料试验机",
        "model": "WE-100B",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WE-100B.png",
        "image": "myImages/WE-100B-Image.png",
        "description": "该试验机主要用于金属材料的拉伸、压缩、弯曲和剪切等试验。",
        "features": [
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验；",
          "采用油缸下置，不漏油，操作稳定；",
          "配有负荷传感器，进行力值检测，自动跟踪测量；",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全；",
          "具有自动存储数据和自动计算打印所有试验结果的功能。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WE-100B"
          },
          {
            "label": "最大试验力kN",
            "value": "100"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "拉伸试验空间mm",
            "value": "≦480"
          },
          {
            "label": "压缩试验空间mm",
            "value": "≦480"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0～15"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "10～20"
          },
          {
            "label": "工作活塞行程mm",
            "value": "120"
          },
          {
            "label": "上/下压板尺寸mm",
            "value": "Φ176/Φ176"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "420"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "≦100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电源功率kW",
            "value": "1.3"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "930×600×1660"
          },
          {
            "label": "测力柜外形尺寸mm",
            "value": "530×500×1270"
          },
          {
            "label": "重量kg",
            "value": "1600"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P097",
        "name": "数显式万能材料试验机",
        "model": "WE-300B",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WE-300B.png",
        "image": "myImages/WE-300B-Image.png",
        "description": "该试验机主要用于金属材料的拉伸、压缩、弯曲和剪切等试验。",
        "features": [
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验；",
          "采用油缸下置，不漏油，操作稳定；",
          "配有负荷传感器，进行力值检测，自动跟踪测量；",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全；",
          "具有自动存储数据和自动计算打印所有试验结果的功能。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WE-300B"
          },
          {
            "label": "最大试验力kN",
            "value": "300"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "拉伸试验空间mm",
            "value": "≦480"
          },
          {
            "label": "压缩试验空间mm",
            "value": "≦480"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0～15"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "10～20、20～32"
          },
          {
            "label": "工作活塞行程mm",
            "value": "120"
          },
          {
            "label": "上/下压板尺寸mm",
            "value": "Φ180/Φ180"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "420"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "≦100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电源功率kW",
            "value": "1.3"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "830×600×1840"
          },
          {
            "label": "测力柜外形尺寸mm",
            "value": "530×500×1270"
          },
          {
            "label": "重量kg",
            "value": "1800"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P098",
        "name": "数显式万能材料试验机",
        "model": "WE-600B",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WE-600B.png",
        "image": "myImages/WE-600B-Image.png",
        "description": "该试验机主要用于金属材料的拉伸、压缩、弯曲和剪切等试验。",
        "features": [
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验；",
          "采用油缸下置，不漏油，操作稳定；",
          "配有负荷传感器，进行力值检测，自动跟踪测量；",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全；",
          "具有自动存储数据和自动计算打印所有试验结果的功能。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WE-600B"
          },
          {
            "label": "最大试验力kN",
            "value": "600"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "拉伸试验空间mm",
            "value": "≦690"
          },
          {
            "label": "压缩试验空间mm",
            "value": "≦620"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0～15"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "13～26、26～40"
          },
          {
            "label": "工作活塞行程mm",
            "value": "170"
          },
          {
            "label": "上/下压板尺寸mm",
            "value": "Φ220/Φ230"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "510"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "≦100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电动机总功率kW",
            "value": "1.8"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "885×630×2000"
          },
          {
            "label": "测力柜外形尺寸mm",
            "value": "530×500×1270"
          },
          {
            "label": "重量kg",
            "value": "2400"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P099",
        "name": "数显式万能材料试验机",
        "model": "WE-1000B",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WE-1000B.png",
        "image": "myImages/WE-1000B-Image.png",
        "description": "该试验机主要用于金属材料的拉伸、压缩、弯曲和剪切等试验。",
        "features": [
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验；",
          "采用油缸下置，不漏油，操作稳定；",
          "配有负荷传感器，进行力值检测，自动跟踪测量；",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全；",
          "具有自动存储数据和自动计算打印所有试验结果的功能。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WE-1000B"
          },
          {
            "label": "最大试验力kN",
            "value": "1000"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "拉伸试验空间mm",
            "value": "≦690"
          },
          {
            "label": "压缩试验空间mm",
            "value": "≦620"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0～40"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "14～32、30～50"
          },
          {
            "label": "工作活塞行程mm",
            "value": "170"
          },
          {
            "label": "上/下压板尺寸mm",
            "value": "Φ220/Φ230"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "510"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "≦100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电动机总功率kW",
            "value": "1.8"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "945×640×2080"
          },
          {
            "label": "测力柜外形尺寸mm",
            "value": "530×500×1270"
          },
          {
            "label": "重量kg",
            "value": "2400"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P100",
        "name": "数显式万能材料试验机",
        "model": "WE-2000B",
        "category": "路达液压万能试验机产品系列",
        "thumbnail": "myImages/WE-2000B.png",
        "image": "myImages/WE-2000B-Image.png",
        "description": "该试验机主要用于金属材料的拉伸、压缩、弯曲和剪切等试验。",
        "features": [
          "试验空间可通过移动横梁进行随意调节，可进行不同试件的试验；",
          "采用油缸下置，不漏油，操作稳定；",
          "配有负荷传感器，进行力值检测，自动跟踪测量；",
          "具有最大负荷峰值保持功能、载保护和位置保护，使用更安全；",
          "具有自动存储数据和自动计算打印所有试验结果的功能。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "WE-2000B"
          },
          {
            "label": "最大试验力kN",
            "value": "2000"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "拉伸试验空间mm",
            "value": "≦790"
          },
          {
            "label": "压缩试验空间mm",
            "value": "≦720"
          },
          {
            "label": "扁试样夹持厚度mm",
            "value": "0～40"
          },
          {
            "label": "圆试样夹持直径mm",
            "value": "20～40、40～60"
          },
          {
            "label": "工作活塞行程mm",
            "value": "180"
          },
          {
            "label": "上/下压板尺寸mm",
            "value": "Φ220/Φ230"
          },
          {
            "label": "拉压空间两支柱间距mm",
            "value": "610"
          },
          {
            "label": "台板最大上升速度mm/min",
            "value": "≦100"
          },
          {
            "label": "移动横梁最大升降速度mm/min",
            "value": "240"
          },
          {
            "label": "电源功率kW",
            "value": "3.55"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "1200×800×2940"
          },
          {
            "label": "测力柜外形尺寸mm",
            "value": "530×500×1270"
          },
          {
            "label": "重量kg",
            "value": "4000"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P101",
        "name": "混凝土试块抗压强度试验机器人（一拖三）",
        "model": "AUYAW-403",
        "category": "路达压力机系列",
        "thumbnail": "myImages/AUYAW-403.png",
        "image": "myImages/AUYAW-403-Image.png",
        "description": "本产品适用于砖、石、水泥、混凝土等材料的抗压强度试验，也可用于其他材料的抗压性能试验。混凝土试块抗压强度试验机器人（一拖三）可24小时不停机连续完成混凝土的抗压强度试验。主机结构采用一体式机型，结构强度高，安全可靠，整体刚性好；具有恒应力控制和载荷保持功能。液压伺服系统采用进口齿轮泵、伺服电机以及伺服阀系统，具备响应快、发热低、噪音低、控制精度高等特点。",
        "features": [
          "系统实现试验全过程无需人员参与，可自动完成抓样、试样信息自动扫码识别、试样自动找正、自动上下料以及试验结束后对合格与不合格试样的分类堆放等过程，实现了试验机智能化与自动化，极大的提高了工作效率；支持现有试验机自动化改造，大大降低成本，为建设项目提供了更为高效、科学、公正的检测数据支撑；",
          "液压伺服系统采用进口齿轮泵、伺服电机以及伺服阀系统，具备响应快、发热低、噪音低、控制精度高等特点；",
          "主机结构采用一体式机型，结构强度高，安全可靠，整体刚性好；",
          "可24小时不停机连续完成混凝土的抗压强度试验。"
        ],
        "specifications": [
          {
            "label": "最大试验力",
            "value": "2000kN"
          },
          {
            "label": "试验力示值相对误差",
            "value": "±0.5%以内"
          },
          {
            "label": "试验力测量范围",
            "value": "1%～100%FS (全程不分档)"
          },
          {
            "label": "变形分辨力",
            "value": "1/500000FS"
          },
          {
            "label": "加力速度范围",
            "value": "0.02%～5%FS"
          },
          {
            "label": "加力速度误差",
            "value": "±0.5%"
          },
          {
            "label": "活塞位移允差",
            "value": "±0.5%"
          },
          {
            "label": "压板直径",
            "value": "Φ300mm"
          },
          {
            "label": "上下压板间距离",
            "value": "250mm"
          },
          {
            "label": "工作活塞行程",
            "value": "200mm"
          },
          {
            "label": "试样规格",
            "value": "150×150×150mm 、100×100×100mm"
          },
          {
            "label": "机器人工作效率",
            "value": "每台每小时可做40块，最高值24小时不停机960块/天"
          },
          {
            "label": "机器人工作半径",
            "value": "1650mm、2050mm"
          },
          {
            "label": "电源功率",
            "value": "AC220V±10%, 50Hz"
          },
          {
            "label": "主机6.9kW，控制柜4kW",
            "value": ""
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P102",
        "name": "恒加载压力试验机（油缸上置款）",
        "model": "YAW-2000AS",
        "category": "路达压力机系列",
        "thumbnail": "myImages/YAW-2000AS.png",
        "image": "myImages/YAW-2000AS-Image.png",
        "description": "本产品适用于砖、石、水泥、混凝土等材料的抗压强度试验，也可用于其他材科的抗压性能试验。设备将主机，油源，控制系统一体化设计，整体造型大方美观,而且节省实验室空间。产品采用整体框架结构，倒置双向千斤顶，大流量双路供油油路，极大的提升实验过程中的响应速度，提高了试验效率。压力传感器采用轮辐传感器,精度提升至0.5级，具有实验方便精度高，重复性和稳定性好等优点。该产品符合GB、ISO、ASTM等标准。",
        "features": [],
        "specifications": [
          {
            "label": "型号规格",
            "value": "YAW-2000AS"
          },
          {
            "label": "最大试验力",
            "value": "2000kN"
          },
          {
            "label": "测量精度范围 5%～100%",
            "value": ""
          },
          {
            "label": "示值精度 ≤±0.5%",
            "value": ""
          },
          {
            "label": "加荷速率",
            "value": "0.3MPa～0.8MPa"
          },
          {
            "label": "加荷速率精度 ±5%",
            "value": ""
          },
          {
            "label": "上下压板间距离",
            "value": "250mm"
          },
          {
            "label": "上下承压板直径",
            "value": "280mm"
          },
          {
            "label": "活塞最大行程",
            "value": "220mm"
          },
          {
            "label": "活塞直径",
            "value": "φ250mm"
          },
          {
            "label": "油液最高压力",
            "value": "40MPa"
          },
          {
            "label": "油泵伺服电机功率",
            "value": "2.3kW"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P103",
        "name": "恒加载压力试验机（油缸上置款）",
        "model": "YAW-3000AS",
        "category": "路达压力机系列",
        "thumbnail": "myImages/YAW-3000AS.png",
        "image": "myImages/YAW-3000AS-Image.png",
        "description": "本产品适用于砖、石、水泥、混凝土等材料的抗压强度试验，也可用于其他材科的抗压性能试验。设备将主机，油源，控制系统一体化设计，整体造型大方美观,而且节省实验室空间。产品采用整体框架结构，倒置双向千斤顶，大流量双路供油油路，极大的提升实验过程中的响应速度，提高了试验效率。压力传感器采用轮辐传感器,精度提升至0.5级，具有实验方便精度高，重复性和稳定性好等优点。该产品符合GB、ISO、ASTM等标准。",
        "features": [],
        "specifications": [
          {
            "label": "型号规格",
            "value": "YAW-3000AS"
          },
          {
            "label": "最大试验力",
            "value": "3000kN"
          },
          {
            "label": "测量精度范围 5%～100%",
            "value": ""
          },
          {
            "label": "示值精度 ≤±0.5%",
            "value": ""
          },
          {
            "label": "加荷速率",
            "value": "0.1MPa～2MPa"
          },
          {
            "label": "加荷速率精度 ±5%",
            "value": ""
          },
          {
            "label": "上下压板间距离",
            "value": "280mm"
          },
          {
            "label": "上下承压板直径",
            "value": "280mm"
          },
          {
            "label": "活塞最大行程",
            "value": "250mm"
          },
          {
            "label": "活塞直径",
            "value": "Φ320mm"
          },
          {
            "label": "油液最高压力",
            "value": "38MPa"
          },
          {
            "label": "油泵伺服电机功率",
            "value": "2.3kW"
          },
          {
            "label": "外形尺寸",
            "value": "765×790×1800mm"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P104",
        "name": "恒加载水泥压力试验机",
        "model": "YAW-300",
        "category": "路达压力机系列",
        "thumbnail": "myImages/YAW-300.png",
        "image": "myImages/YAW-300-Image.png",
        "description": "本产品按水泥胶砂检验方法试验要求制作生产，采用全自动电脑控制，具有等速试验力，等速应力，试验过程曲线图显示，自动保存。",
        "features": [],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "300"
          },
          {
            "label": "测量精度范围",
            "value": "10%～100%"
          },
          {
            "label": "示值精度",
            "value": "≦±1%"
          },
          {
            "label": "加荷速率kN/s",
            "value": "0.3～9.9"
          },
          {
            "label": "上下压板间距离mm",
            "value": "180"
          },
          {
            "label": "承压板直径mm",
            "value": "Φ120"
          },
          {
            "label": "活塞最大行程mm",
            "value": "90"
          },
          {
            "label": "活塞直径mm",
            "value": "Φ140"
          },
          {
            "label": "油液最高压力MPa",
            "value": "31.5"
          },
          {
            "label": "油泵电机功率kW",
            "value": "0.55"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "970×585×1200"
          },
          {
            "label": "重量kg",
            "value": "400"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P105",
        "name": "恒加载压力试验机",
        "model": "TSY-2000A",
        "category": "路达压力机系列",
        "thumbnail": "myImages/TSY-2000A.png",
        "image": "myImages/TSY-2000A-Image.png",
        "description": "本产品适用于砖、石、水泥、混凝土等材料的抗压强度试验，也可用于其他材料的抗压性能试验。本产品试验过程实现电脑全自动控制，并具有加荷速度力值显示曲线、峰值保持、过载保护等功能。产品符合GB、ISO、ASTM等标准。",
        "features": [
          "油压泵采用轴向五柱塞超高压泵，工作平稳、噪声低；",
          "控制阀采用高精度数字微小流量阀，控制精度高；",
          "传感器采用压强传感器，可靠性好；",
          "采用自动架载原理，加强控制加荷的速率。"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "2000"
          },
          {
            "label": "加荷速率MPa",
            "value": "0.3～1.0，应力速度大于1.0可手工输入"
          },
          {
            "label": "加荷速率精度",
            "value": "±5%"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "承压板尺寸mm",
            "value": "260×260"
          },
          {
            "label": "活塞行程mm",
            "value": "50，直径mm：Φ250"
          },
          {
            "label": "油液最高压力MPa",
            "value": "40"
          },
          {
            "label": "油泵电机功率kW",
            "value": "0.55"
          },
          {
            "label": "总功率kW",
            "value": "1.1"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "580×500×1400"
          },
          {
            "label": "控制器外形尺寸mm",
            "value": "560×550×1300"
          },
          {
            "label": "重量kg",
            "value": "900"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P106",
        "name": "恒加载压力试验机",
        "model": "TSY-3000A",
        "category": "路达压力机系列",
        "thumbnail": "myImages/TSY-3000A.png",
        "image": "myImages/TSY-3000A-Image.png",
        "description": "本产品适用于砖、石、水泥、混凝土等材料的抗压强度试验，也可用于其他材料的抗压性能试验。本产品试验过程实现电脑全自动控制，并具有加荷速度力值显示曲线、峰值保持、过载保护等功能。",
        "features": [
          "油压泵采用轴向五柱塞超高压泵，工作平稳、噪声低；",
          "控制阀采用高精度数字微小流量阀，控制精度高；",
          "传感器采用压强传感器，可靠性好；",
          "采用自动架载原理，加强控制加荷的速率。"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "3000"
          },
          {
            "label": "加荷速率MPa",
            "value": "0.3～1.0，应力速度大于1.0可手工输入"
          },
          {
            "label": "加荷速率精度",
            "value": "±5%"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "承压板尺寸mm",
            "value": "320×320"
          },
          {
            "label": "活塞行程mm",
            "value": "50，直径mm：Φ310"
          },
          {
            "label": "油液最高压力MPa",
            "value": "40"
          },
          {
            "label": "油泵电机功率kW",
            "value": "1.2"
          },
          {
            "label": "总功率kW",
            "value": "1.75"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "550×650×1750"
          },
          {
            "label": "控制器外形尺寸mm",
            "value": "560×550×1300"
          },
          {
            "label": "重量kg",
            "value": "1300"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P107",
        "name": "恒加载压力试验机",
        "model": "YAW-300S",
        "category": "路达压力机系列",
        "thumbnail": "myImages/YAW-300S.png",
        "image": "myImages/YAW-300S-Image.png",
        "description": "YAW-300S型恒加载压力试验机采用伺服电机控制油源，高精度数字微小量阀，具有力闭环控制功能，能够实现等负荷速率加荷或等应力速率加荷，控制精度高，可靠性好。尤其适合于需要长时间连续工作的试验场所。\n本试验机是建材、建工、质量监督、计量检测、科研院校等单位必备的测试仪器。",
        "features": [
          "四立柱框架结构,刚性强,稳定性好油源系统采用220V伺服服电机与高压油源，低分贝，障油温减少损耗；",
          "测力系统采用轮辐式负荷传感器,精度提升至0.5级；",
          "操作系统采用工业级平板电脑,实验过程一键式操作，稳定又方便；",
          "防护门为有机玻璃，试验过程安全且方便观察。"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "300"
          },
          {
            "label": "恒加荷速率kN/s 0.3~9.9",
            "value": ""
          },
          {
            "label": "上下压板间距mm",
            "value": "185"
          },
          {
            "label": "承压板直径mm",
            "value": "Φ120"
          },
          {
            "label": "活塞最大行程mm",
            "value": "90"
          },
          {
            "label": "示值相对误差（准确度） ±0.5%",
            "value": ""
          },
          {
            "label": "示值重复性相对误差 0.5%",
            "value": ""
          },
          {
            "label": "回零相对误差 ±0.1%",
            "value": ""
          },
          {
            "label": "试验机力值示装置的相对分辨率 0.5%",
            "value": ""
          },
          {
            "label": "零点漂移 ≤±0.1%",
            "value": ""
          },
          {
            "label": "伺服电机功率",
            "value": "单相1800W"
          },
          {
            "label": "供电电源",
            "value": "220V（±10%）"
          },
          {
            "label": "外形尺寸mm 1300×480×1340",
            "value": ""
          },
          {
            "label": "整机重量Kg",
            "value": "500"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P108",
        "name": "恒加载压力试验机（带砼抗折）",
        "model": "YAW-300S",
        "category": "路达压力机系列",
        "thumbnail": "myImages/YAW-300S.png",
        "image": "myImages/YAW-300S-Image.png",
        "description": "YAW-300S型恒加载压力试验机采用伺服电机控制油源，高精度数字微小量阀，具有力闭环控制功能，能够实现等负荷速率加荷或等应力速率加荷，控制精度高，可靠性好。尤其适合于需要长时间连续工作的试验场所。本试验机是建材、建工、质量监督、计量检测、科研院校等单位必备的测试仪器。\n产品符合GB/T17671-2021、 JC/T960-2022、JC/T724标准中对试验机的各项具体规定。",
        "features": [],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "300"
          },
          {
            "label": "测量精度范围",
            "value": "10%～100%"
          },
          {
            "label": "示值精度",
            "value": "≦±0.5%"
          },
          {
            "label": "加荷速率kN/s",
            "value": "0.3～9.9"
          },
          {
            "label": "抗折辊直径",
            "value": "φ30mm"
          },
          {
            "label": "上下抗折辊间最大间距",
            "value": "165mm"
          },
          {
            "label": "两上抗折辊间中心距",
            "value": "150 mm"
          },
          {
            "label": "两下抗折辊间中心距",
            "value": "450 mm"
          },
          {
            "label": "上下压板间距离mm",
            "value": "180"
          },
          {
            "label": "承压板直径mm",
            "value": "Φ160"
          },
          {
            "label": "活塞最大行程mm",
            "value": "90"
          },
          {
            "label": "活塞直径mm",
            "value": "Φ160"
          },
          {
            "label": "油液最高压力MPa",
            "value": "31.5"
          },
          {
            "label": "油泵电机功率kW",
            "value": "1.5"
          },
          {
            "label": "电源电压",
            "value": "AC20V±10%，50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "1100×4560×1480"
          },
          {
            "label": "重量kg",
            "value": "500"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P109",
        "name": "恒加载压力试验机",
        "model": "TSY-2000S",
        "category": "路达压力机系列",
        "thumbnail": "myImages/TSY-2000S.png",
        "image": "myImages/TSY-2000S-Image.png",
        "description": "本设备适用于砖、石、水泥、混凝土等材料的抗压强度试验，也可用于其他材料的抗压性能试验。",
        "features": [
          "整体框架结构,精镀压板，刚性强,稳定性好。",
          "测力系统采用轮辐式负荷传感器,精度提升至0.5级",
          "操作系统采用工业级平板电脑,实验过程一键式操作，稳定又方便",
          "防护门为有机玻璃，试验过程安全且方便观察。"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "2000"
          },
          {
            "label": "测量精度范围",
            "value": "5%-100%"
          },
          {
            "label": "示值精度",
            "value": "≤±0.5%"
          },
          {
            "label": "加荷速率MPa",
            "value": "0.3～1.0，应力速度大于1.0可手动输入"
          },
          {
            "label": "加荷速率精度",
            "value": "±0.5%"
          },
          {
            "label": "上下压板间距离mm",
            "value": "330"
          },
          {
            "label": "上/下承压板直径mm",
            "value": "Φ280/Φ320"
          },
          {
            "label": "活塞最大行程mm",
            "value": "120"
          },
          {
            "label": "活塞直径mm",
            "value": "Φ250"
          },
          {
            "label": "油液最高压力MPa",
            "value": "40"
          },
          {
            "label": "油泵电机功率kW",
            "value": "0.55"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "1110×510×1510"
          },
          {
            "label": "净重kg",
            "value": "1200"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P110",
        "name": "恒加载压力试验机",
        "model": "TSY-3000S",
        "category": "路达压力机系列",
        "thumbnail": "myImages/TSY-3000S.png",
        "image": "myImages/TSY-3000S-Image.png",
        "description": "本设备适用于砖、石、水泥、混凝土等材料的抗压强度试验，也可用于其他材料的抗压性能试验。",
        "features": [
          "整体框架结构,精镀压板，刚性强,稳定性好；",
          "测力系统采用轮辐式负荷传感器,精度提升至0.5级；",
          "操作系统采用工业级平板电脑,实验过程一键式操作，稳定又方便；",
          "防护门为有机玻璃，试验过程安全且方便观察"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "3000"
          },
          {
            "label": "测量精度范围",
            "value": "5%-100%"
          },
          {
            "label": "示值精度",
            "value": "≤±0.5%"
          },
          {
            "label": "加荷速率MPa",
            "value": "0.3～1.0，应力速度大于1.0可手动输入"
          },
          {
            "label": "加荷速率精度",
            "value": "±5%"
          },
          {
            "label": "上下压板间距离mm",
            "value": "330"
          },
          {
            "label": "上/下承压板直径mm",
            "value": "Φ280/Φ320"
          },
          {
            "label": "活塞最大行程mm",
            "value": "120"
          },
          {
            "label": "活塞直径mm",
            "value": "Φ310"
          },
          {
            "label": "油液最高压力MPa",
            "value": "40"
          },
          {
            "label": "油泵电机功率kW",
            "value": "1.2"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "1250×550×1510"
          },
          {
            "label": "净重kg",
            "value": "2000"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P111",
        "name": "恒加载压力试验机（全自动）",
        "model": "YAW-2000S",
        "category": "路达压力机系列",
        "thumbnail": "myImages/YAW-2000S.png",
        "image": "myImages/YAW-2000S-Image.png",
        "description": "本设备适用于砖、石、水泥、混凝土等材料的抗压强度试验，也可用于其他材料的抗压性能试验。",
        "features": [
          "整体框架结构,精镀压板，刚性强,稳定性好油源系统采用220V伺服电机与高压油泉，低分贝，障油温减少损耗；",
          "测力系统采用轮辐式负荷传感器,精度提升至0.5级；",
          "操作系统采用工业级平板电脑,实验过程一键式操作，稳定又方便；",
          "防护门为有机玻璃，试验过程安全且方便观察。"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "2000"
          },
          {
            "label": "测量精度范围",
            "value": "5%-100%"
          },
          {
            "label": "示值精度",
            "value": "≤±0.5%"
          },
          {
            "label": "加荷速率MPa",
            "value": "0.3～1.0，应力速度大于1.0可手动输入"
          },
          {
            "label": "加荷速率精度",
            "value": "±0.5%"
          },
          {
            "label": "上下压板间距离mm",
            "value": "330"
          },
          {
            "label": "上/下承压板直径mm",
            "value": "Φ280/Φ320"
          },
          {
            "label": "活塞最大行程mm",
            "value": "120"
          },
          {
            "label": "活塞直径mm",
            "value": "Φ250"
          },
          {
            "label": "油液最高压力MPa",
            "value": "40"
          },
          {
            "label": "油泵电机功率kW",
            "value": "2.3"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "1110×510×1510"
          },
          {
            "label": "净重kg",
            "value": "1200"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": true
      },
      {
        "id": "P112",
        "name": "恒加载压力试验机（全自动）",
        "model": "YAW-3000S",
        "category": "路达压力机系列",
        "thumbnail": "myImages/YAW-3000S.png",
        "image": "myImages/YAW-3000S-Image.png",
        "description": "本设备适用于砖、石、水泥、混凝土等材料的抗压强度试验，也可用于其他材料的抗压性能试验。",
        "features": [
          "整体框架结构,精镀压板，刚性强,稳定性好油源系统采用220V伺服电机与高压油泉，低分贝，障油温减少损耗；",
          "测力系统采用轮辐式负荷传感器,精度提升至0.5级；",
          "操作系统采用工业级平板电脑,实验过程一键式操作，稳定又方便；",
          "防护门为有机玻璃，试验过程安全且方便观察。"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "3000"
          },
          {
            "label": "测量精度范围",
            "value": "5%-100%"
          },
          {
            "label": "示值精度",
            "value": "≤±0.5%"
          },
          {
            "label": "加荷速率MPa",
            "value": "0.3～1.0，应力速度大于1.0可手动输入"
          },
          {
            "label": "加荷速率精度",
            "value": "±5%"
          },
          {
            "label": "上下压板间距离mm",
            "value": "330"
          },
          {
            "label": "上/下承压板直径mm",
            "value": "Φ280/Φ320"
          },
          {
            "label": "活塞最大行程mm",
            "value": "120"
          },
          {
            "label": "活塞直径mm",
            "value": "Φ310"
          },
          {
            "label": "油液最高压力MPa",
            "value": "40"
          },
          {
            "label": "油泵电机功率kW",
            "value": "2.3"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "1250×550×1510"
          },
          {
            "label": "净重kg",
            "value": "2000"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": true
      },
      {
        "id": "P113",
        "name": "恒加载水泥抗折抗压试验机",
        "model": "YAW-300.10A",
        "category": "路达压力机系列",
        "thumbnail": "myImages/YAW-300.10A.png",
        "image": "myImages/YAW-300.10A-Image.png",
        "description": "本机为GB/T17671-2021水泥胶砂强度试验国家新标准研制生产，我公司为标准制订厂家。试验机采用双轮辐传感器，抗折电动缸,高精度数字微小量阀，具有力闭环控制功能，能够实现等负荷速率加荷或等应力速率加荷，控制精度高，可靠性好。",
        "features": [
          "四立柱框架结构,刚性强,稳定性好；",
          "测力系统采用轮辐式负荷传感器,精度提升至0.5级；",
          "操作系统采用工业级平板电脑,实验过程一键式操作，稳定又方便；",
          "防护门为有机玻璃，试验过程安全且方便观察。"
        ],
        "specifications": [
          {
            "label": "抗压强度试验",
            "value": ""
          },
          {
            "label": "最大试验力kN",
            "value": "300"
          },
          {
            "label": "恒加荷速率kN/s",
            "value": "0.3～9.9"
          },
          {
            "label": "上下压板间距mm",
            "value": "185"
          },
          {
            "label": "承压板直径mm",
            "value": "Φ120"
          },
          {
            "label": "活塞最大行程mm",
            "value": "90"
          },
          {
            "label": "抗折强度试验",
            "value": ""
          },
          {
            "label": "最大试验力kN",
            "value": "10"
          },
          {
            "label": "恒加荷速率kN",
            "value": "0.05"
          },
          {
            "label": "截面边长mm",
            "value": "40"
          },
          {
            "label": "支座间跨度mm",
            "value": "100"
          },
          {
            "label": "活塞最大行程mm",
            "value": "70"
          },
          {
            "label": "示值相对误差（准确度）",
            "value": "±0.5%"
          },
          {
            "label": "示值重复性相对误差",
            "value": "0.5%"
          },
          {
            "label": "回零相对误差",
            "value": "±0.1%"
          },
          {
            "label": "试验机力值示装置的相对分辨率",
            "value": "0.5%"
          },
          {
            "label": "零点漂移",
            "value": "≤±0.1%"
          },
          {
            "label": "电机功率",
            "value": "550W"
          },
          {
            "label": "供电电源",
            "value": "380V（±10%）"
          },
          {
            "label": "外形尺寸mm",
            "value": "1300×480×1340"
          },
          {
            "label": "整机重量kg",
            "value": "500"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P114",
        "name": "恒加载水泥抗折抗压试验机",
        "model": "YAW-300.10S",
        "category": "路达压力机系列",
        "thumbnail": "myImages/YAW-300.10S.png",
        "image": "myImages/YAW-300.10S-Image.png",
        "description": "本机为JC/T960-2022《中华人民共和国水泥胶砂强腐试验方法》标准更新而研制生产。我公司为该标准制订厂家。试验机抗压部分采用何服电机控制油源，双轮辐传感器，抗折电动缸，高精度数字微小量闵，具有力闭环控制功能,能够实现等负荷速率加荷或等应力速率加荷，控制精度高，可靠性好。\n产品符合GB/T17671-2021JC/T960-2022标准中对压力试验机的各项具体规定。",
        "features": [
          "四立柱框架结构,刚性强,稳定性好油源系统采用220V伺服服电机与高压油源，低分贝，障油温减少损耗；",
          "测力系统采用轮辐式负荷传感器,精度提升至0.5级；",
          "操作系统采用工业级平板电脑,实验过程一键式操作，稳定又方便；",
          "防护门为有机玻璃，试验过程安全且方便观察。"
        ],
        "specifications": [
          {
            "label": "抗压强度试验",
            "value": ""
          },
          {
            "label": "最大试验力kN",
            "value": "300"
          },
          {
            "label": "恒加荷速率kN/s",
            "value": "0.3～9.9"
          },
          {
            "label": "上下压板间距mm",
            "value": "185"
          },
          {
            "label": "承压板直径mm",
            "value": "Φ120"
          },
          {
            "label": "活塞最大行程mm",
            "value": "90"
          },
          {
            "label": "抗折强度试验",
            "value": ""
          },
          {
            "label": "最大试验力kN",
            "value": "10"
          },
          {
            "label": "恒加荷速率kN",
            "value": "0.05"
          },
          {
            "label": "截面边长mm",
            "value": "40"
          },
          {
            "label": "支座间跨度mm",
            "value": "100"
          },
          {
            "label": "活塞最大行程mm",
            "value": "70"
          },
          {
            "label": "示值相对误差（准确度）",
            "value": "±0.5%"
          },
          {
            "label": "示值重复性相对误差",
            "value": "0.5%"
          },
          {
            "label": "回零相对误差",
            "value": "±0.1%"
          },
          {
            "label": "试验机力值示装置的相对分辨率",
            "value": "0.5%"
          },
          {
            "label": "零点漂移",
            "value": "≤±0.1%"
          },
          {
            "label": "伺服电机功率",
            "value": "1800W"
          },
          {
            "label": "供电电源",
            "value": "220V（±10%）"
          },
          {
            "label": "外形尺寸mm",
            "value": "1300×480×1340"
          },
          {
            "label": "整机重量Kg",
            "value": "500"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": true
      },
      {
        "id": "P115",
        "name": "恒加载水泥抗折抗压试验机\n（带混凝土抗折装置）",
        "model": "YAW-300.10S",
        "category": "路达压力机系列",
        "thumbnail": "myImages/YAW-300.10S.png",
        "image": "myImages/YAW-300.10S-Image.png",
        "description": "本机为JC/T960-2022《中华人民共和国水泥胶砂强腐试验方法》标准更新而研制生产。我公司为该标准制订厂家。试验机抗压部分采用何服电机控制油源，双轮辐传感器，抗折电动缸，高精度数字微小量闵，具有力闭环控制功能,能够实现等负荷速率加荷或等应力速率加荷，控制精度高，可靠性好。\n产品符合GB/T17671-2021JC/T960-2022标准中对压力试验机的各项具体规定。",
        "features": [
          "四立柱框架结构,刚性强,稳定性好油源系统采用220V伺服服电机与高压油源，低分贝，障油温减少损耗；",
          "测力系统采用轮辐式负荷传感器,精度提升至0.5级；",
          "操作系统采用工业级平板电脑,实验过程一键式操作，稳定又方便；",
          "防护门为有机玻璃，试验过程安全且方便观察。"
        ],
        "specifications": [
          {
            "label": "抗压强度试验",
            "value": ""
          },
          {
            "label": "最大试验力 kN",
            "value": "300"
          },
          {
            "label": "恒加荷速率 kN/s",
            "value": "0.3-9.9"
          },
          {
            "label": "上下压板间距 mm",
            "value": "190"
          },
          {
            "label": "承压板直径 mm",
            "value": "Φ 160"
          },
          {
            "label": "活塞最大行程 mm",
            "value": "90"
          },
          {
            "label": "抗折辊直径 mm",
            "value": "Φ30"
          },
          {
            "label": "上下抗折辊间距 mm",
            "value": "165"
          },
          {
            "label": "两上抗折辊间中心距 mm",
            "value": "150"
          },
          {
            "label": "两下抗折辊间中心距 mm",
            "value": "450"
          },
          {
            "label": "抗折强度试验",
            "value": ""
          },
          {
            "label": "最大试验力 kN",
            "value": "10"
          },
          {
            "label": "恒加荷速率 kN",
            "value": "0.05"
          },
          {
            "label": "截面边长 mm",
            "value": "40"
          },
          {
            "label": "支座间跨度 mm",
            "value": "100"
          },
          {
            "label": "活塞最大行程 mm",
            "value": "70"
          },
          {
            "label": "试验机示值精度",
            "value": ""
          },
          {
            "label": "示值相对误差（准确度）",
            "value": "±0.5%"
          },
          {
            "label": "示值重复性相对误差",
            "value": "0.5%"
          },
          {
            "label": "回零相对误差",
            "value": "±0.1%"
          },
          {
            "label": "试验机力值示装置的相对分辨率",
            "value": "0.5%"
          },
          {
            "label": "整机参数",
            "value": ""
          },
          {
            "label": "液压电机功率",
            "value": "交流 750W"
          },
          {
            "label": "供电电源",
            "value": "380V（±10%）带零线"
          },
          {
            "label": "外形尺寸 mm",
            "value": "1200×490×1460"
          },
          {
            "label": "整机重量 kg",
            "value": "400"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P116",
        "name": "恒加载水泥抗折抗压试验机",
        "model": "YZH-300.10",
        "category": "路达压力机系列",
        "thumbnail": "myImages/YZH-300.10.png",
        "image": "myImages/YZH-300.10-Image.png",
        "description": "本产品按水泥胶砂检验方法试验要求制作生产，采用全自动电脑控制，具有等速试验力，等速应力，试验过程曲线图显示，自动保存。两个工作台分别实现水泥抗压强度和水泥抗折强度试验。产品具有精度高，性能优越，可靠性高，操作方便等特点。",
        "features": [
          "采用高精度数字微小量阀，能够实现负荷速率的加荷；",
          "具有力闭环控制功能，能够实现负荷应力速率的加荷；",
          "油压泵采用轴向五柱塞超高压泵，工作平稳、噪声低；",
          "控制阀采用高精度数字微小流量阀，控制精度高；",
          "传感器采用压强传感器，可靠性好；",
          "采用自动架载原理，加强控制加荷的速率。"
        ],
        "specifications": [
          {
            "label": "抗压强度试验",
            "value": ""
          },
          {
            "label": "最大试验力kN",
            "value": "300"
          },
          {
            "label": "恒加荷速率kN/s",
            "value": "0.3-9.9"
          },
          {
            "label": "上下压板间距mm",
            "value": "190"
          },
          {
            "label": "承压板直径mm",
            "value": "Φ120"
          },
          {
            "label": "活塞最大行程mm",
            "value": "70"
          },
          {
            "label": "抗折强度试验",
            "value": ""
          },
          {
            "label": "最大试验力kN",
            "value": "10"
          },
          {
            "label": "截面边长mm",
            "value": "40"
          },
          {
            "label": "支座间跨度mm",
            "value": "100"
          },
          {
            "label": "活塞最大行程mm",
            "value": "90"
          },
          {
            "label": "恒加荷速率kN",
            "value": "0.05"
          },
          {
            "label": "试验机示值精度",
            "value": ""
          },
          {
            "label": "示值相对误差（准确度）",
            "value": "±1.0%"
          },
          {
            "label": "示值重复性相对误差",
            "value": "1.0%"
          },
          {
            "label": "回零相对误差",
            "value": "±0.1%"
          },
          {
            "label": "试验机力值示装置的相对分辨率",
            "value": "0.5%"
          },
          {
            "label": "整机参数",
            "value": ""
          },
          {
            "label": "液压电机功率",
            "value": "交流550W"
          },
          {
            "label": "供电电源",
            "value": "380V（±10%）带零线"
          },
          {
            "label": "外形尺寸mm",
            "value": "1250×585×1200"
          },
          {
            "label": "整机重量kg",
            "value": "400"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P117",
        "name": "恒加载水泥抗折抗压试验机",
        "model": "YZH-300.10B",
        "category": "路达压力机系列",
        "thumbnail": "myImages/YZH-300.10B.png",
        "image": "myImages/YZH-300.10B-Image.png",
        "description": "本产品按水泥胶砂检验方法试验要求制作生产，采用全自动电脑控制，具有等速试验力，等速应力，试验过程曲线图显示，自动保存。两个工作台分别实现水泥抗压强度和水泥抗折强度试验。产品精度达到0.5级，性能优越，可靠性高，操作方便。",
        "features": [
          "测力系统采用轮辐式负荷传感器,精度提升至0.5级；",
          "采用高精度数字微小量阀，能够实现负荷速率的加荷；",
          "具有力闭环控制功能，能够实现负荷应力速率的加荷；",
          "油压泵采用轴向五柱塞超高压泵，工作平稳、噪声低；",
          "控制阀采用高精度数字微小流量阀，控制精度高；",
          "传感器采用压强传感器，可靠性好；",
          "采用自动架载原理，加强控制加荷的速率；"
        ],
        "specifications": [
          {
            "label": "抗压强度试验",
            "value": ""
          },
          {
            "label": "最大试验力kN",
            "value": "300"
          },
          {
            "label": "恒加荷速率kN/s",
            "value": "0.3-9.9"
          },
          {
            "label": "上下压板间距mm",
            "value": "190"
          },
          {
            "label": "承压板直径mm",
            "value": "Φ120"
          },
          {
            "label": "活塞最大行程mm",
            "value": "70"
          },
          {
            "label": "抗折强度试验",
            "value": ""
          },
          {
            "label": "最大试验力kN",
            "value": "10"
          },
          {
            "label": "截面边长mm",
            "value": "40"
          },
          {
            "label": "支座间跨度mm",
            "value": "100"
          },
          {
            "label": "活塞最大行程mm",
            "value": "90"
          },
          {
            "label": "恒加荷速率kN",
            "value": "0.05"
          },
          {
            "label": "试验机示值精度",
            "value": ""
          },
          {
            "label": "示值相对误差（准确度）",
            "value": "±0.5%"
          },
          {
            "label": "示值重复性相对误差",
            "value": "0.5%"
          },
          {
            "label": "回零相对误差",
            "value": "±0.1%"
          },
          {
            "label": "试验机力值示装置的相对分辨率",
            "value": "0.5%"
          },
          {
            "label": "整机参数",
            "value": ""
          },
          {
            "label": "液压电机功率",
            "value": "交流550W"
          },
          {
            "label": "供电电源",
            "value": "380V（±10%）带零线"
          },
          {
            "label": "外形尺寸mm",
            "value": "1250×585×1200"
          },
          {
            "label": "整机重量kg",
            "value": "450"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P118",
        "name": "电液式自动升降压力试验机",
        "model": "TSY-2000B",
        "category": "路达压力机系列",
        "thumbnail": "myImages/TSY-2000B.png",
        "image": "myImages/TSY-2000B-Image.png",
        "description": "本试验机主要用于砖、水泥胶砂及混凝土等建筑材料的抗压强度试验，也可用于其他材料的力学性能试验。本机采用液压加荷、电子测力、具有负荷数字显示和负荷最大值保持以及断电数据保护等功能。试验数据可自动处理，并打印出试验报告。",
        "features": [
          "具有负荷数字显示功能；",
          "负荷最大值保持功能；",
          "断电数据保护功能；",
          "液压泵为轴向五柱塞超高压泵，由电动机直联驱动；",
          "送油阀上设有安全阀，过载是可溢流，起安全作用；",
          "送油阀手轮，可调节油缸进油量，以达所需加荷速率。"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "2000"
          },
          {
            "label": "量程及测量范围",
            "value": "10%～100%"
          },
          {
            "label": "示值相对误差",
            "value": "±1%"
          },
          {
            "label": "上下压板间距离mm",
            "value": "320"
          },
          {
            "label": "承压板尺寸mm",
            "value": "260×260"
          },
          {
            "label": "活塞最大行程mm",
            "value": "50"
          },
          {
            "label": "活塞直径mm",
            "value": "Φ250"
          },
          {
            "label": "液压泵额定压力MPa",
            "value": "40"
          },
          {
            "label": "油泵电机功率kW",
            "value": "0.55"
          },
          {
            "label": "总功率 kW",
            "value": "1.1"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "580×500×1400"
          },
          {
            "label": "控制器外形尺寸mm",
            "value": "510×540×1470"
          },
          {
            "label": "重量kg",
            "value": "900"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P119",
        "name": "电液式自动升降压力试验机",
        "model": "TSY-3000B",
        "category": "路达压力机系列",
        "thumbnail": "myImages/TSY-3000B.png",
        "image": "myImages/TSY-3000B-Image.png",
        "description": "本试验机主要用于砖、水泥胶砂及混凝土等建筑材料的抗压强度试验，也可用于其他材料的力学性能试验。本机采用液压加荷、电子测力、具有负荷数字显示和负荷最大值保持以及断电数据保护等功能。试验数据可自动处理，并打印出试验报告。",
        "features": [
          "具有负荷数字显示功能；",
          "负荷最大值保持功能；",
          "断电数据保护功能；",
          "液压泵为轴向五柱塞超高压泵，由电动机直联驱动；",
          "送油阀上设有安全阀，过载是可溢流，起安全作用；",
          "送油阀手轮，可调节油缸进油量，以达所需加荷速率。"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "3000"
          },
          {
            "label": "量程及测量范围kN",
            "value": "300～3000"
          },
          {
            "label": "示值相对误差%",
            "value": "±1"
          },
          {
            "label": "上下压板最大间距mm",
            "value": "330"
          },
          {
            "label": "承压板尺寸mm",
            "value": "320×320"
          },
          {
            "label": "活塞最大行程mm",
            "value": "50"
          },
          {
            "label": "活塞直径mm",
            "value": "Φ310"
          },
          {
            "label": "液压泵额定压力MPa",
            "value": "40"
          },
          {
            "label": "油泵电机功率kW",
            "value": "1.2"
          },
          {
            "label": "总功率KW",
            "value": "三相1.75"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "550×650×1750"
          },
          {
            "label": "控制柜外形尺寸mm",
            "value": "510×540×1470"
          },
          {
            "label": "净重kg",
            "value": "1200"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P120",
        "name": "电液式压力试验机",
        "model": "TSY-2000",
        "category": "路达压力机系列",
        "thumbnail": "myImages/TSY-2000.png",
        "image": "myImages/TSY-2000-Image.png",
        "description": "本试验机主要用于砖、水泥胶砂及混凝土等建筑材料的抗压强度试验，也可用于其他材料的力学性能试验。本机采用液压加荷、电子测力、具有负荷数字显示和负荷最大值保持以及断电数据保护等功能。试验数据可自动处理，并打印出试验报告。",
        "features": [
          "具有负荷数字显示功能；",
          "负荷最大值保持功能；",
          "断电数据保护功能；",
          "液压泵为轴向五柱塞超高压泵，由电动机直联驱动；",
          "送油阀上设有安全阀，过载是可溢流，起安全作用；",
          "送油阀手轮，可调节油缸进油量，以达所需加荷速率。"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "2000"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "活塞最大行程mm",
            "value": "50"
          },
          {
            "label": "活塞直径mm",
            "value": "Φ250"
          },
          {
            "label": "液压泵额定压力MPa",
            "value": "40"
          },
          {
            "label": "上下压板间距离mm",
            "value": "320"
          },
          {
            "label": "承压板尺寸mm",
            "value": "260×260"
          },
          {
            "label": "油泵电机功率kW",
            "value": "0.55"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "920×400×1200"
          },
          {
            "label": "重量kg",
            "value": "700"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P121",
        "name": "电液式抗压试验机",
        "model": "TSY-300",
        "category": "路达压力机系列",
        "thumbnail": "myImages/TSY-300.png",
        "image": "myImages/TSY-300-Image.png",
        "description": "电液式压力试验机适用于水泥、混凝土、建材产品及其非金属材料的抗压试验。",
        "features": [
          "活塞与油缸间设有密封装置，可防止油液外泄；",
          "设有安全阀，过载时可溢流，起安全保护作用；",
          "试验数据自动处理，并打印出试验报告"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "300"
          },
          {
            "label": "示值相对误差（准确度）",
            "value": "±1%"
          },
          {
            "label": "液压泵额定压力Mpa",
            "value": "31.5"
          },
          {
            "label": "承压板直径mm",
            "value": "Φ140"
          },
          {
            "label": "上下压板间最大间距mm",
            "value": "190"
          },
          {
            "label": "活塞直径和最大行程mm",
            "value": "Φ140×90"
          },
          {
            "label": "电动机功率kW",
            "value": "三相0.55"
          },
          {
            "label": "外型尺寸mm",
            "value": "880×430×900"
          },
          {
            "label": "净重kg",
            "value": "390"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P122",
        "name": "电液式抗折抗压试验机",
        "model": "TSY-300",
        "category": "路达压力机系列",
        "thumbnail": "myImages/TSY-300.png",
        "image": "myImages/TSY-300-Image.png",
        "description": "电液式压力试验机适用于水泥、混凝土、建材产品及其非金属材料的抗压试验。电液式抗折抗压试验机是在电液式压力试验机的基础上进行改装,增加了混凝土抗折强度试验的功能。",
        "features": [
          "可自动地调整试件与压力板间承压面的平行，使试件受力均匀；",
          "活塞与油缸间设有密封装置，可防止油液外泄；",
          "设有安全阀，过载时可溢流，起安全保护作用；",
          "试验数据自动处理，并打印出试验报告。"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "300"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "液压泵额定压力MPa",
            "value": "31.5"
          },
          {
            "label": "抗折辊直径mm",
            "value": "Φ30"
          },
          {
            "label": "上下抗折辊间距mm",
            "value": "165"
          },
          {
            "label": "两上抗折辊间中心距mm",
            "value": "150"
          },
          {
            "label": "两下抗折辊间中心距mm",
            "value": "450"
          },
          {
            "label": "上下压板间距离mm",
            "value": "230"
          },
          {
            "label": "承压板直径mm",
            "value": "Φ160"
          },
          {
            "label": "活塞直径mm",
            "value": "Φ140"
          },
          {
            "label": "最大行程mm",
            "value": "90"
          },
          {
            "label": "油泵电机功率kW",
            "value": "0.55"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "890×600×1450"
          },
          {
            "label": "重量kg",
            "value": "400"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P123",
        "name": "数显式窨井盖专用压力试验机",
        "model": "TSY-500",
        "category": "路达压力机系列",
        "thumbnail": "myImages/TSY-500.png",
        "image": "myImages/TSY-500-Image.png",
        "description": "本产品适用于窨井盖的抗压强度试验，也可用于其他材料的力学性能实验。本机采用先进的液压式加荷和电子测力系统，试验数据自动处理，具有断电数据保护等功能。",
        "features": [],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "500"
          },
          {
            "label": "刚性调整垫块mm",
            "value": "Φ356×40"
          },
          {
            "label": "标定块mm",
            "value": "500×500×50"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "活塞最大行程mm",
            "value": "250"
          },
          {
            "label": "活塞直径mm",
            "value": "Φ170"
          },
          {
            "label": "液压泵额定压力MPa",
            "value": "31.5"
          },
          {
            "label": "电源功率kW",
            "value": "1.2"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "试验空间mm",
            "value": "1000×1000×300"
          },
          {
            "label": "主机尺寸mm",
            "value": "1100×1000×1300"
          },
          {
            "label": "控制柜尺寸mm",
            "value": "1200×700×900"
          },
          {
            "label": "重量kg",
            "value": "1500"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P124",
        "name": "数显式窨井盖专用压力试验机",
        "model": "TSY-1000",
        "category": "路达压力机系列",
        "thumbnail": "myImages/TSY-1000.png",
        "image": "myImages/TSY-1000-Image.png",
        "description": "本产品适用于窨井盖的抗压强度试验，也可用于其他材料的力学性能实验。本机采用先进的液压式加荷和电子测力系统，试验数据自动处理，具有断电数据保护等功能。",
        "features": [],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "1000"
          },
          {
            "label": "刚性调整垫块mm",
            "value": "Φ356×40"
          },
          {
            "label": "标定块mm",
            "value": "500×500×50"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "活塞最大行程mm",
            "value": "250"
          },
          {
            "label": "活塞直径mm",
            "value": "Φ210"
          },
          {
            "label": "液压泵额定压力MPa",
            "value": "31.5"
          },
          {
            "label": "电源功率kW",
            "value": "1.2"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "试验空间mm",
            "value": "1200×1200×300"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "1400×1200×1400"
          },
          {
            "label": "控制柜外形尺寸mm",
            "value": "1200×700×900"
          },
          {
            "label": "重量kg",
            "value": "2200"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P125",
        "name": "恒加载窨井盖专用压力试验机",
        "model": "TSY-500A",
        "category": "路达压力机系列",
        "thumbnail": "myImages/TSY-500A.png",
        "image": "myImages/TSY-500A-Image.png",
        "description": "本产品主要用于检测警井盖承载试验及残余变形试验。该机采用高精度变形传感器和高分辨率采集系统，液压控制采用集成油路伺服控制系统,加荷稳定、可靠,智能化操作,具有自动升降、自动定位、自动定标,实现等力、等变形同服自动补偿、定位、保压,智能提示工作状态及其混合控制等功能。",
        "features": [
          "本机采用先进的液压式加荷和电子测力系统；",
          "实验数据自动处理，操作方便可靠；",
          "断电数据保护等特点；",
          "可根据客户不同需求而选择相应配置。"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "500"
          },
          {
            "label": "刚性调整垫块mm",
            "value": "Φ356×40"
          },
          {
            "label": "标定块mm",
            "value": "500×500×50"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "活塞最大行程mm",
            "value": "250"
          },
          {
            "label": "活塞直径mm",
            "value": "Φ170"
          },
          {
            "label": "液压泵额定压力MPa",
            "value": "31.5"
          },
          {
            "label": "试验空间",
            "value": "1000×1000×300"
          },
          {
            "label": "电源功率kW",
            "value": "1.2"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机尺寸mm",
            "value": "1100×1000×1300"
          },
          {
            "label": "控制柜外形尺寸mm",
            "value": "560×550×1300"
          },
          {
            "label": "重量kg",
            "value": "1500"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P126",
        "name": "恒加载窨井盖专用压力试验机",
        "model": "TSY-1000A",
        "category": "路达压力机系列",
        "thumbnail": "myImages/TSY-1000A.png",
        "image": "myImages/TSY-1000A-Image.png",
        "description": "本产品主要用于检测警井盖承载试验及残余变形试验。该机采用高精度变形传感器和高分辨率采集系统，液压控制采用集成油路伺服控制系统,加荷稳定、可靠,智能化操作,具有自动升降、自动定位、自动定标,实现等力、等变形同服自动补偿、定位、保压,智能提示工作状态及其混合控制等功能。",
        "features": [
          "本机采用先进的液压式加荷和电子测力系统；",
          "实验数据自动处理，操作方便可靠；",
          "断电数据保护等特点；",
          "可根据客户不同需求而选择相应配置。"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "1000"
          },
          {
            "label": "刚性调整垫块mm",
            "value": "Φ356×40"
          },
          {
            "label": "标定块mm",
            "value": "500×500×50"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±1%"
          },
          {
            "label": "活塞最大行程mm",
            "value": "250"
          },
          {
            "label": "活塞直径mm",
            "value": "Φ210"
          },
          {
            "label": "液压泵额定压力MPa",
            "value": "31.5"
          },
          {
            "label": "试验空间",
            "value": "1200×1200×300"
          },
          {
            "label": "电源功率kW",
            "value": "1.2"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "1400×1200×1400"
          },
          {
            "label": "控制柜外形尺寸mm",
            "value": "560×550×1300"
          },
          {
            "label": "重量kg",
            "value": "2200"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P127",
        "name": "恒加载窨井盖专用压力试验机",
        "model": "TSY-500S",
        "category": "路达压力机系列",
        "thumbnail": "myImages/TSY-500S.png",
        "image": "myImages/TSY-500S-Image.png",
        "description": "本产品主要用于检测警井盖承载试验及残余变形试验。该机采用高精度变形传感器和高分辨率采集系统，液压控制采用集成油路伺服控制系统,加荷稳定、可靠,智能化操作,具有自动升降、自动定位、自动定标,实现等力、等变形同服自动补偿、定位、保压,智能提示工作状态及其混合控制等功能。",
        "features": [
          "双向千斤顶款窖井盖压力试验机与普通款相比，精度提升至0.5级，回油速度加快,加载稳定,极大提高了试验速度和效率。"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "500"
          },
          {
            "label": "刚性调整垫块mm",
            "value": "Φ356×40"
          },
          {
            "label": "标定块mm",
            "value": "500×500×50"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±0.5%"
          },
          {
            "label": "活塞最大行程mm",
            "value": "250"
          },
          {
            "label": "活塞直径mm",
            "value": "Φ170"
          },
          {
            "label": "液压泵额定压力MPa",
            "value": "31.5"
          },
          {
            "label": "试验空间",
            "value": "1000×1000×300"
          },
          {
            "label": "电源功率kW",
            "value": "1.2"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机尺寸mm",
            "value": "1100×1000×1300"
          },
          {
            "label": "控制柜外形尺寸mm",
            "value": "560×550×1300"
          },
          {
            "label": "重量kg",
            "value": "1500"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P128",
        "name": "恒加载窨井盖专用压力试验机",
        "model": "TSY-1000S",
        "category": "路达压力机系列",
        "thumbnail": "myImages/TSY-1000S.png",
        "image": "myImages/TSY-1000S-Image.png",
        "description": "本产品主要用于检测警井盖承载试验及残余变形试验。该机采用高精度变形传感器和高分辨率采集系统，液压控制采用集成油路伺服控制系统,加荷稳定、可靠,智能化操作,具有自动升降、自动定位、自动定标,实现等力、等变形同服自动补偿、定位、保压,智能提示工作状态及其混合控制等功能。",
        "features": [
          "双向千斤顶款窖井盖压力试验机与普通款相比，精度提升至0.5级，回油速度加快,加载稳定,极大提高了试验速度和效率。"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "1000"
          },
          {
            "label": "刚性调整垫块mm",
            "value": "Φ356×40"
          },
          {
            "label": "标定块mm",
            "value": "500×500×50"
          },
          {
            "label": "有效测量范围",
            "value": "10%～100%"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±0.5%"
          },
          {
            "label": "活塞最大行程mm",
            "value": "250"
          },
          {
            "label": "活塞直径mm",
            "value": "Φ210"
          },
          {
            "label": "液压泵额定压力MPa",
            "value": "31.5"
          },
          {
            "label": "试验空间",
            "value": "1200×1200×300"
          },
          {
            "label": "电源功率kW",
            "value": "1.2"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸mm",
            "value": "1400×1200×1400"
          },
          {
            "label": "控制柜外形尺寸mm",
            "value": "560×550×1300"
          },
          {
            "label": "重量kg",
            "value": "2200"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P129",
        "name": "油缸上置式窨井盖压力试验机",
        "model": "TSY-1000SS",
        "category": "路达压力机系列",
        "thumbnail": "myImages/TSY-1000SS.png",
        "image": "myImages/TSY-1000SS-Image.png",
        "description": "本产品主要用于检测客井盖承载试验及残余变形等试验。该款试验机采用上置式双向千斤顶,轮辐式负荷传感腿，具有试验方便，精度高,重复性和稳定好等优点。依托我公司强大的设计和技术团队，我们接受客户的定制需求。图示中的客井盖试验机按照客户实际要求,额外增加了摄像系统和外接显示屏，便于实现更好的观察并盖加载过程中材料变化,视频同步传至试验电脑并进行保存。",
        "features": [],
        "specifications": [
          {
            "label": "最大试验力",
            "value": "1000kN"
          },
          {
            "label": "刚性调整垫块",
            "value": "Φ356*40、Φ250*40mm"
          },
          {
            "label": "标定块",
            "value": "500×500×50mm"
          },
          {
            "label": "有效测量范围",
            "value": "50-1000kN"
          },
          {
            "label": "负荷示值准确度",
            "value": "优于示值的±0.5%"
          },
          {
            "label": "活塞最大行程",
            "value": "600mm"
          },
          {
            "label": "活塞直径",
            "value": "Φ200mm"
          },
          {
            "label": "液压泵额定压力",
            "value": "31.5MPa"
          },
          {
            "label": "试验空间",
            "value": "1500×1500×530mm"
          },
          {
            "label": "电源功率",
            "value": "1.5kW"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "主机外形尺寸",
            "value": "1800×1500×2520mm"
          },
          {
            "label": "控制柜外形尺寸",
            "value": "800×700×1800mm"
          },
          {
            "label": "重量",
            "value": "4000kg"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P130",
        "name": "数显烟道压力试验机",
        "model": "TSY-300",
        "category": "路达压力机系列",
        "thumbnail": "myImages/TSY-300.png",
        "image": "myImages/TSY-300-Image.png",
        "description": "  本产品主要用于排气管道检测垂直承载力、抗压强度等物理性能测试。恒加载烟道压力试验机采用液压加载，数字阀恒定控制，操作简单，实验过程速率平稳，噪音低，效率高，电脑屏幕实时显示试验过程及加载曲线,实验结束自动保存数据。数显款烟道压力机采用液压加荷，电子测力，具有负荷最大值保持和断电数据保护等功能。",
        "features": [
          "上压板电动升降；",
          "本机采用先进的液压式加荷和电子测力系统；",
          "实验数据自动处理，操作方便可靠；",
          "断电数据保护等特点；",
          "规格、空间尺寸可按客户要求订制"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "300"
          },
          {
            "label": "量程及测量范围kN",
            "value": "30～300"
          },
          {
            "label": "示值相对误差（准确度）",
            "value": "±1%"
          },
          {
            "label": "承压板尺寸mm",
            "value": "560×560"
          },
          {
            "label": "上下压板最大间距mm",
            "value": "1050"
          },
          {
            "label": "活塞最大行程mm",
            "value": "200"
          },
          {
            "label": "活塞直径mm",
            "value": "Φ135"
          },
          {
            "label": "液压泵额定压力MPa",
            "value": "31.5"
          },
          {
            "label": "电源功率kW",
            "value": "0.55"
          },
          {
            "label": "电源电压",
            "value": "AC380V±10%，50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "820×650×2350"
          },
          {
            "label": "净重kg",
            "value": "1500"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P131",
        "name": "恒加载烟道压力试验机",
        "model": "TSY-300A",
        "category": "路达压力机系列",
        "thumbnail": "myImages/TSY-300A.png",
        "image": "myImages/TSY-300A-Image.png",
        "description": "本产品主要用于排气管道检测垂直承载力、抗压强度等物理性能测试。恒加载烟道压力试验机采用液压加载，数字阀恒定控制，操作简单，实验过程速率平稳，噪音低，效率高，电脑屏幕实时显示试验过程及加载曲线,实验结束自动保存数据。数显款烟道压力机采用液压加荷，电子测力，具有负荷最大值保持和断电数据保护等功能。",
        "features": [
          "上压板电动升降；",
          "本机采用先进的液压式加荷和电子测力系统；",
          "实验数据自动处理，操作方便可靠；",
          "断电数据保护等特点；",
          "规格、空间尺寸可按客户要求订制"
        ],
        "specifications": [
          {
            "label": "最大试验力kN",
            "value": "300"
          },
          {
            "label": "量程及测量范围kN",
            "value": "30～300"
          },
          {
            "label": "示值相对误差（准确度）",
            "value": "±1%"
          },
          {
            "label": "承压板尺寸mm",
            "value": "560×560"
          },
          {
            "label": "上下压板最大间距mm",
            "value": "1050"
          },
          {
            "label": "活塞最大行程mm",
            "value": "200"
          },
          {
            "label": "活塞直径mm",
            "value": "Φ135"
          },
          {
            "label": "液压泵额定压力Mpa",
            "value": "31.5"
          },
          {
            "label": "电源功率kW",
            "value": "三相0.55"
          },
          {
            "label": "外形尺寸mm",
            "value": "820×650mm×2350mm"
          },
          {
            "label": "控制柜外形尺寸mm",
            "value": "560×550×1300"
          },
          {
            "label": "净重kg",
            "value": "1500"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P132",
        "name": "立式恒温水养护箱",
        "model": "HBY-30",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/HBY-30.png",
        "image": "myImages/HBY-30-Image.png",
        "description": "该产品适用于水泥厂和建筑施工单位、公路桥梁工程单位以及有关科研质检部门对水泥、混凝土、水泥制品试样进行强度、定型性凝结时间作标准养护。立式恒温水养护箱内胆和养护盒采用不锈钢材质，具有占地面积小，控温精度高等优点。\n产品符合GB/T 17671-2021《水泥胶砂强度检验方法(ISO法)》",
        "features": [
          "内胆采用不锈钢焊接而成；",
          "外壳采用优质冷轧钢板折弯成型；",
          "中间隔层采用聚脂发泡材料保温；",
          "内置不锈钢架子，分抽屉式工作室，每只工作室可放置40*40*160试块2组；",
          "温度控制采用集成电路，上下温度双设定，控制温度更精确。"
        ],
        "specifications": [
          {
            "label": "试验温度℃",
            "value": "20±1"
          },
          {
            "label": "温度控制精度℃",
            "value": "±1"
          },
          {
            "label": "压缩机功率W",
            "value": "145"
          },
          {
            "label": "加热器功率W",
            "value": "800"
          },
          {
            "label": "养护盒尺寸mm",
            "value": "175×285×65（30只）"
          },
          {
            "label": "试块尺寸mm",
            "value": "40×40×160（180块）"
          },
          {
            "label": "外形尺寸mm",
            "value": "800×670×1750"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "重量kg",
            "value": "148"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P133",
        "name": "立式恒温水养护箱",
        "model": "HBY-64",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/HBY-64（立式）.png",
        "image": "myImages/HBY-64（立式）-Image.png",
        "description": "该产品适用于水泥厂和建筑施工单位、公路桥梁工程单位以及有关科研质检部门对水泥、混凝土、水泥制品试样进行强度、定型性凝结时间作标准养护。立式恒温水养护箱内胆和养护盒采用不锈钢材质，具有占地面积小，控温精度高等优点。\n产品符合GB/T 17671-2021《水泥胶砂强度检验方法(ISO法)》",
        "features": [
          "内胆采用不锈钢焊接而成；",
          "外壳采用优质冷轧钢板折弯成型；",
          "中间隔层采用聚脂发泡材料保温；",
          "内置不锈钢架子，分抽屉式工作室，每只工作室可放置40*40*160试块2组；",
          "温度控制采用集成电路，上下温度双设定，控制温度更精确。"
        ],
        "specifications": [
          {
            "label": "温度控制℃",
            "value": "20±1"
          },
          {
            "label": "温度控制仪误差℃",
            "value": "±1"
          },
          {
            "label": "压缩机功率W",
            "value": "145"
          },
          {
            "label": "加热器功率W",
            "value": "1600"
          },
          {
            "label": "养护盒尺寸mm",
            "value": "175×285×65（60只）"
          },
          {
            "label": "试块尺寸mm",
            "value": "40×40×160（360块）"
          },
          {
            "label": "外形尺寸mm",
            "value": "1080×850×1880"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "重量kg",
            "value": "350"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P134",
        "name": "卧式恒温水养护箱",
        "model": "HBY-30",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/HBY-30.png",
        "image": "myImages/HBY-30-Image.png",
        "description": "该产品适用于水泥厂和建筑施工单位、公路桥梁工程单位以及有关科研质检部门对水泥、混凝土、水泥制品试样进行强度、定型性凝结时间作标准养护。卧式恒温水养护箱内胆采用不锈钢材质，养护盒放入水中养护，养护效果更佳。\n产品符合GB/T 17671-2021《水泥胶砂强度检验方法(ISO法)》",
        "features": [
          "内胆采用不锈钢焊接而成；",
          "外壳采用优质冷轧钢板折弯成型；",
          "中间隔层采用聚脂发泡材料保温；",
          "内置不锈钢架子，架子上放置16个小养护盒，每个养护盒可放置40×40×160试块6块，即箱内共可放置96块试块；",
          "温度控制采用集成电路，上下温度双设定，控制温度更精确；",
          "制冷系统采用压缩机，管盘蒸发器，加温采用不锈钢加热棒，箱内有循环水泵强制冷热交换，使之温差减少，以提高均匀度。"
        ],
        "specifications": [
          {
            "label": "试验温度℃",
            "value": "20±1"
          },
          {
            "label": "温度控制精度℃",
            "value": "±1"
          },
          {
            "label": "压缩机功率W",
            "value": "255"
          },
          {
            "label": "加热器功率W",
            "value": "1200"
          },
          {
            "label": "养护盒尺寸mm",
            "value": "140×100×180（16只）"
          },
          {
            "label": "试块尺寸mm",
            "value": "40×40×160（96块）"
          },
          {
            "label": "外形尺寸mm",
            "value": "920×760×980"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "重量kg",
            "value": "113"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P135",
        "name": "卧式恒温水养护箱",
        "model": "HBY-60",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/HBY-60(卧式）.png",
        "image": "myImages/HBY-60(卧式）-Image.png",
        "description": "该产品适用于水泥厂和建筑施工单位、公路桥梁工程单位以及有关科研质检部门对水泥、混凝土、水泥制品试样进行强度、定型性凝结时间作标准养护。卧式恒温水养护箱内胆采用不锈钢材质，养护盒放入水中养护，养护效果更佳。\n产品符合GB/T 17671-2021《水泥胶砂强度检验方法(ISO法)》",
        "features": [
          "内胆采用不锈钢焊接而成；",
          "外壳采用优质冷轧钢板折弯成型；",
          "中间隔层采用聚脂发泡材料保温；",
          "内置不锈钢架子，架子上放置36个小养护盒，每个养护盒可放置40×40×160试块6块，即箱内共可放置216块试块；",
          "温度控制采用集成电路，上下温度双设定，控制温度更精确；",
          "制冷系统采用压缩机，管盘蒸发器，加温采用不锈钢加热棒，箱内有循环水泵强制冷热交换，使之温差减少，以提高均匀度。"
        ],
        "specifications": [
          {
            "label": "温度控制℃",
            "value": "20±1"
          },
          {
            "label": "温度控制仪误差℃",
            "value": "±1"
          },
          {
            "label": "压缩机功率W",
            "value": "750"
          },
          {
            "label": "加热器功率W",
            "value": "2400"
          },
          {
            "label": "养护盒尺寸mm",
            "value": "140×100×180（36只）"
          },
          {
            "label": "试块尺寸mm",
            "value": "40×40×160（216块）"
          },
          {
            "label": "外形尺寸mm",
            "value": "1760×755×980"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "重量kg",
            "value": "350"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P136",
        "name": "水泥（砼）恒温恒湿养护箱",
        "model": "HBY-40B",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/HBY-40B（玻璃门）.png",
        "image": "myImages/HBY-40B（玻璃门）-Image.png",
        "description": "该养护箱适用于水泥厂和建筑施工、公路桥梁工程以及有关科研质检部门等单位对水泥、混凝土、水泥制品试样进行强度、定型性凝结时间测量做标准养护工作。\n产品符合GB/T 17671-2021《水泥胶砂强度检验方法(ISO法)》",
        "features": [
          "内胆采用不锈钢焊接而成；",
          "外壳采用优质冷轧钢板折弯成型；",
          "中间隔层保温采用聚脂发泡材料，搁架用不锈钢型材制造；",
          "结构坚固、造型美观，耐腐蚀性好；",
          "温湿度控制仪采用集成电路数字显示，具有分辨率高、直观，调节方便、控制精度高等优点；",
          "制冷系统采用直冷式压缩机，管盘蒸发器；",
          "加湿采用超声波加湿器，加湿为雾状水分子，确保箱内湿度≥95%。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "HBY-40B（玻璃门）"
          },
          {
            "label": "试验温度℃",
            "value": "20±1"
          },
          {
            "label": "控制湿度％RH",
            "value": "≧95"
          },
          {
            "label": "压缩机功率W",
            "value": "145"
          },
          {
            "label": "加热器功率W",
            "value": "800"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "试模放置数量",
            "value": "40×40×160试模， 每层可放置6组"
          },
          {
            "label": "150×150×150试块，每层可放置3组",
            "value": ""
          },
          {
            "label": "100×100×100试块，每层可放置4组",
            "value": ""
          },
          {
            "label": "工作室尺寸mm",
            "value": "570×550×1000"
          },
          {
            "label": "外形尺寸mm",
            "value": "980×700×1350"
          },
          {
            "label": "重量kg",
            "value": "110"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P137",
        "name": "水泥（砼）恒温恒湿养护箱",
        "model": "HBY-40B",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/HBY-40B（铁门）.png",
        "image": "myImages/HBY-40B（铁门）-Image.png",
        "description": "该养护箱适用于水泥厂和建筑施工、公路桥梁工程以及有关科研质检部门等单位对水泥、混凝土、水泥制品试样进行强度、定型性凝结时间测量做标准养护工作。\n产品符合GB/T 17671-2021《水泥胶砂强度检验方法(ISO法)》",
        "features": [
          "内胆采用不锈钢焊接而成；",
          "外壳采用优质冷轧钢板折弯成型；",
          "中间隔层保温采用聚脂发泡材料，搁架用不锈钢型材制造；",
          "结构坚固、造型美观，耐腐蚀性好；",
          "温湿度控制仪采用集成电路数字显示，具有分辨率高、直观，调节方便、控制精度高等优点；",
          "制冷系统采用直冷式压缩机，管盘蒸发器；",
          "加湿采用超声波加湿器，加湿为雾状水分子，确保箱内湿度≥95%。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "HBY-40B(铁门）"
          },
          {
            "label": "试验温度℃",
            "value": "20±1"
          },
          {
            "label": "控制湿度％RH",
            "value": "≧95"
          },
          {
            "label": "压缩机功率W",
            "value": "145"
          },
          {
            "label": "加热器功率W",
            "value": "800"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "试模放置数量",
            "value": "40×40×160试模， 每层可放置6组"
          },
          {
            "label": "150×150×150试块，每层可放置3组",
            "value": ""
          },
          {
            "label": "100×100×100试块，每层可放置4组",
            "value": ""
          },
          {
            "label": "工作室尺寸mm",
            "value": "590×570×1180"
          },
          {
            "label": "外形尺寸mm",
            "value": "1000×700×1530"
          },
          {
            "label": "重量kg",
            "value": "122"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P138",
        "name": "水泥（砼）恒温恒湿养护箱",
        "model": "HBY-60B",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/HBY-60B.png",
        "image": "myImages/HBY-60B-Image.png",
        "description": "本产品适用于水泥厂和建筑施工、公路桥梁工程以及有关科研质检部门等单位对水泥、混凝土、水泥制品试样进行强度、定型性凝结时间测量做标准养护工作。\n产品符合GB/T 17671-2021《水泥胶砂强度检验方法(ISO法)》",
        "features": [
          "内胆采用不锈钢焊接而成；",
          "外壳采用优质冷轧钢板折弯成型；",
          "中间隔层保温采用聚脂发泡材料，搁架用不锈钢型材制造；",
          "结构坚固、造型美观，耐腐蚀性好；",
          "温湿度控制仪采用集成电路数字显示，具有分辨率高、直观，调节方便、控制精度高等优点；",
          "制冷系统采用直冷式压缩机，管盘蒸发器；",
          "加湿采用超声波加湿器，加湿为雾状水分子，确保箱内湿度≥95%。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "HBY-60B"
          },
          {
            "label": "试验温度℃",
            "value": "20±1"
          },
          {
            "label": "控制湿度％RH",
            "value": "≧95"
          },
          {
            "label": "压缩机功率W",
            "value": "255"
          },
          {
            "label": "加热器功率W",
            "value": "800"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "试模放置数量",
            "value": ""
          },
          {
            "label": "40×40×160试模",
            "value": "每层可放置6组"
          },
          {
            "label": "150×150×150试块",
            "value": "每层可放置3组"
          },
          {
            "label": "100×100×100试块",
            "value": "每层可放置4组"
          },
          {
            "label": "工作室尺寸mm",
            "value": "1180×550×1400"
          },
          {
            "label": "外形尺寸mm",
            "value": "1650×680×1750"
          },
          {
            "label": "重量kg",
            "value": "220"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P139",
        "name": "混合砂浆试件标准养护箱",
        "model": "HBY-30",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/HBY-30.png",
        "image": "myImages/HBY-30-Image.png",
        "description": "混合砂浆试件标准养护箱它适用对水泥混合砂浆、混凝土、水泥制品试样进行强度、定型性凝结时间作标准养护。",
        "features": [],
        "specifications": [
          {
            "label": "温度控制仪精度℃",
            "value": "20±1"
          },
          {
            "label": "控制湿度RH%",
            "value": "60-80"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "压缩机功率W",
            "value": "145"
          },
          {
            "label": "加热器功率W",
            "value": "500"
          },
          {
            "label": "工作室尺寸mm",
            "value": "580×500×1180"
          },
          {
            "label": "内部试件架平分6格尺寸mm",
            "value": "580×490×180"
          },
          {
            "label": "外形尺寸mm",
            "value": "1000×700×1530"
          },
          {
            "label": "重量kg",
            "value": "130"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P140",
        "name": "湿热试验箱",
        "model": "HBY-1",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/HBY-1.png",
        "image": "myImages/HBY-1-Image.png",
        "description": "干缩试验箱根据国家对水泥，混凝土，及砂浆的干缩试验标准，和国家建材研究院及有关部门提供的技术资料而设计制造的。它适用于建筑和建工部门，做混凝土试体、砂浆试体及各种试件的养护之用。\n产品符合GB2423标准要求。",
        "features": [
          "内胆采用不锈钢焊接而成；",
          "外壳采用冷轧板折弯成型焊接喷漆；",
          "中间隔层保温采用聚胺脂发泡材料；",
          "搁架用不锈钢型材制造；",
          "整体结构坚固，造型美观，耐腐蚀性好；",
          "温湿仪采用设定，显示双数显，具有分辨率高、直观、调节方便、控制精度高等优点。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "HBY-1"
          },
          {
            "label": "控制温度℃",
            "value": "20～60±2"
          },
          {
            "label": "控制湿度％RH",
            "value": "45～80±5"
          },
          {
            "label": "加热功率W",
            "value": "500"
          },
          {
            "label": "制冷功率W",
            "value": "145"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "工作室尺寸mm",
            "value": "600×500×600"
          },
          {
            "label": "外形尺寸mm",
            "value": "700×650×1500"
          },
          {
            "label": "重量kg",
            "value": "185"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P141",
        "name": "涂料试验箱",
        "model": "TLS-350B",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/TLS-350B.png",
        "image": "myImages/TLS-350B-Image.png",
        "description": "干缩试验箱根据国家对水泥，混凝土，及砂浆的干缩试验标准，和国家建材研究院及有关部门提供的技术资料而设计制造的。它适用于建筑和建工部门，做混凝土试体、砂浆试体及各种试件的养护之用。\n产品符合GB2423标准要求。",
        "features": [
          "内胆采用不锈钢焊接而成；",
          "外壳采用冷轧板折弯成型焊接喷漆；",
          "中间隔层保温采用聚胺脂发泡材料；",
          "搁架用不锈钢型材制造；",
          "整体结构坚固，造型美观，耐腐蚀性好；",
          "温湿仪采用设定，显示双数显，具有分辨率高、直观、调节方便、控制精度高等优点。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "HBY-1"
          },
          {
            "label": "控制温度℃",
            "value": "20～60±2"
          },
          {
            "label": "控制湿度％RH",
            "value": "45～80±5"
          },
          {
            "label": "加热功率W",
            "value": "500"
          },
          {
            "label": "制冷功率W",
            "value": "145"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "工作室尺寸mm",
            "value": "600×500×600"
          },
          {
            "label": "外形尺寸mm",
            "value": "700×650×1500"
          },
          {
            "label": "重量kg",
            "value": "185"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P142",
        "name": "自控砖瓦泛霜箱",
        "model": "ZX-75B",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/ZX-75B.png",
        "image": "myImages/ZX-75B-Image.png",
        "description": "本产品按GB5101-85标准制造，适用于砖瓦泠霜试验要求而设计，能自动控制箱内温度，是用于各建筑施工，科研质检的常用设备。",
        "features": [],
        "specifications": [
          {
            "label": "加热功率W",
            "value": "500"
          },
          {
            "label": "控温范围℃",
            "value": "室温～50"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "工作室尺寸mm",
            "value": "550×550×380"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P143",
        "name": "沸煮箱",
        "model": "FZ-31A",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/FZ-31A.png",
        "image": "myImages/FZ-31A-Image.png",
        "description": "本产品能自动控制箱体内水温至100℃和保持100℃的时间，以验定水泥净浆体积的安定性（即雷氏法和试饼法），是水泥生产施工、科研、试验单位设备之一，符合国家标准GB1346-89。",
        "features": [
          "升温和保温均可实行自动控制；",
          "全不锈钢材质 耐腐蚀性强。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "FZ-31A"
          },
          {
            "label": "最高沸煮温度℃",
            "value": "100"
          },
          {
            "label": "内胆容积L",
            "value": "31"
          },
          {
            "label": "升温时间（20℃升至100℃）min",
            "value": "30±5"
          },
          {
            "label": "加热时间控制h",
            "value": "0～3.5"
          },
          {
            "label": "管状加热器功率kW",
            "value": "4（共两组：分为1kW和3kW）"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "工作室尺寸mm",
            "value": "410×240×310"
          },
          {
            "label": "外形尺寸mm",
            "value": "490×290×410"
          },
          {
            "label": "重量kg",
            "value": "25"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P144",
        "name": "电动抗折试验机(指针式)",
        "model": "DKZ-5000",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/DKZ-5000.png",
        "image": "myImages/DKZ-5000-Image.png",
        "description": "本试验机适用于水泥软练胶砂抗折强度检验用，并可用作其他非金属脆性材料的抗折强度检验。",
        "features": [
          "试验机标尺有专为水泥软练胶砂抗折强度与抗力的换算刻度；",
          "整机绝缘性能良好，整机绝缘电阻大于2M。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "DKZ-5000（指针）"
          },
          {
            "label": "双杠杆出力比（下梁臂距比）（最大）",
            "value": "50：1"
          },
          {
            "label": "最大出力N",
            "value": "双杠杆5000"
          },
          {
            "label": "加荷速度N/s",
            "value": "双杠杆50"
          },
          {
            "label": "抗折夹具",
            "value": ""
          },
          {
            "label": "加荷辊及支撑辊直径mm",
            "value": "10"
          },
          {
            "label": "支撑辊距mm",
            "value": "100"
          },
          {
            "label": "拉架板间距mm",
            "value": "46"
          },
          {
            "label": "示值相对误差（准确度）",
            "value": "<±1%"
          },
          {
            "label": "感量",
            "value": "双杠杆时校正杠杆平衡，在杠杆水平离支点500mm处加荷1g"
          },
          {
            "label": "杠杆倾角",
            "value": ">1/50"
          },
          {
            "label": "外形尺寸mm",
            "value": "1080×220×780"
          },
          {
            "label": "净重kg",
            "value": "130"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P145",
        "name": "电动抗折试验机（指针）",
        "model": "DKZ-6000",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/DKZ-6000（指针）.png",
        "image": "myImages/DKZ-6000(指针）-Image.png",
        "description": "本试验机适用于水泥软练胶砂抗折强度检验用，并可用作其他非金属脆性材料的抗折强度检验。",
        "features": [
          "试验机标尺有专为水泥软练胶砂抗折强度与抗力的换算刻度；",
          "整机绝缘性能良好，整机绝缘电阻大于2M。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "DKZ-6000（指针）"
          },
          {
            "label": "双杠杆出力比（下梁臂距比）（最大）",
            "value": "60：1"
          },
          {
            "label": "最大出力N",
            "value": "双杠杆6000"
          },
          {
            "label": "加荷速度N/s",
            "value": "双杠杆50"
          },
          {
            "label": "抗折夹具",
            "value": ""
          },
          {
            "label": "加荷辊及支撑辊直径mm",
            "value": "10"
          },
          {
            "label": "支撑辊距mm",
            "value": "100"
          },
          {
            "label": "拉架板间距mm",
            "value": "46"
          },
          {
            "label": "示值相对误差（准确度）",
            "value": "<±1%"
          },
          {
            "label": "感量",
            "value": "双杠杆时校正杠杆平衡，在杠杆水平离支点500mm处加荷1g"
          },
          {
            "label": "杠杆倾角",
            "value": ">1/50"
          },
          {
            "label": "外形尺寸mm",
            "value": "1180×220×800"
          },
          {
            "label": "净重kg",
            "value": "135"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P146",
        "name": "电动抗折试验机（数显）",
        "model": "DKZ-6000",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/DKZ-6000（数显）.png",
        "image": "myImages/DKZ-6000（数显）-Image.png",
        "description": "本试验机适用于水泥软练胶砂抗折强度检验用，并可用作其他非金属脆性材料的抗折强度检验。",
        "features": [
          "试验机标尺有专为水泥软练胶砂抗折强度与抗力的换算刻度；",
          "整机绝缘性能良好，整机绝缘电阻大于2M。",
          "数显仪表，数值直观可见。"
        ],
        "specifications": [
          {
            "label": "型号规格",
            "value": "DKZ-6000"
          },
          {
            "label": "显示方式",
            "value": "数显"
          },
          {
            "label": "最大抗折力N",
            "value": "6000"
          },
          {
            "label": "加荷辊及支撑辊直径mm",
            "value": "Φ10"
          },
          {
            "label": "支撑辊距mm",
            "value": "100"
          },
          {
            "label": "拉架板间距mm",
            "value": "46"
          },
          {
            "label": "杠杆倾角°",
            "value": ">1/50"
          },
          {
            "label": "电源功率W",
            "value": "15"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "1180×220×800"
          },
          {
            "label": "重量kg",
            "value": "135"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P147",
        "name": "水泥净浆搅拌机",
        "model": "NJ-160F",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/NJ-160F.png",
        "image": "myImages/NJ-160F-Image.png",
        "description": "水泥净浆搅拌机是根据GB/T1346、JC/T729标准要求,将按标准规定的水泥和水混合后搅拌成均匀的试验用净浆，供测定水泥标准稠度、凝结时间及制作安定性试块之用,是水泥厂、建筑施工单位、有关专业院校及科研单位水泥试验室必备的设备之一。",
        "features": [
          "搅拌速度旋转次数精度更高",
          "触摸屏可戴手套操作，无需在试验过程中摘除手套",
          "安全设计，透明防护门未关闭无法启动"
        ],
        "specifications": [
          {
            "label": "搅拌叶片转数及时间",
            "value": ""
          },
          {
            "label": "搅拌速度",
            "value": "公转r/min 自转r/min"
          },
          {
            "label": "低速 62±2 140±2",
            "value": ""
          },
          {
            "label": "高速 125±3 285±3",
            "value": ""
          },
          {
            "label": "搅拌叶片宽度mm",
            "value": "111"
          },
          {
            "label": "搅拌叶片与叶片轴联接螺纹",
            "value": "M16×1"
          },
          {
            "label": "搅拌锅容积L",
            "value": "2.5"
          },
          {
            "label": "搅拌锅壁厚mm",
            "value": "1"
          },
          {
            "label": "搅拌叶片与搅拌锅之间工作间隙mm",
            "value": "2±1"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "570×340×600"
          },
          {
            "label": "净重kg",
            "value": "44"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P148",
        "name": "水泥胶砂搅拌机",
        "model": "JJ-20H",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/JJ-20H.png",
        "image": "myImages/JJ-20H-Image.png",
        "description": "水泥胶砂搅拌机是根据GB/T 17671-2021《水泥胶砂强度检验方法(ISO法)》、JC/T 681-2022《行星式水泥胶砂搅拌机》等国家或行业标准设计生产的。该仪器主要用于制备水泥胶砂强度检验所用试样的搅拌。",
        "features": [
          "搅拌速度旋转次数精度更高",
          "触摸屏可戴手套操作，无需在试验过程中摘除手套",
          "安全设计，透明防护门未关闭无法启动"
        ],
        "specifications": [
          {
            "label": "搅拌叶转数",
            "value": ""
          },
          {
            "label": "搅拌速度",
            "value": "公转r/min 自转r/min"
          },
          {
            "label": "低速 62±2 140±2",
            "value": ""
          },
          {
            "label": "高速 125±3 285±3",
            "value": ""
          },
          {
            "label": "搅拌叶在搅拌锅内的运动轨迹同ISO679",
            "value": ""
          },
          {
            "label": "搅拌叶宽度mm",
            "value": "135"
          },
          {
            "label": "搅拌锅容积L",
            "value": "5"
          },
          {
            "label": "搅拌锅壁厚mm",
            "value": "1.5"
          },
          {
            "label": "搅拌叶与搅拌锅之间的工作间隙mm",
            "value": "3±1"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "功率W",
            "value": "1000"
          },
          {
            "label": "外形尺寸mm",
            "value": "630×400×660"
          },
          {
            "label": "净重kg",
            "value": "80"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P149",
        "name": "水泥胶砂搅拌机",
        "model": "JJ-20F",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/JJ-20F.png",
        "image": "myImages/JJ-20F-Image.png",
        "description": "水泥胶砂搅拌机是根据GB/T 17671-2021《水泥胶砂强度检验方法(ISO法)》、JC/T 681-2022《行星式水泥胶砂搅拌机》等国家或行业标准设计生产的。该仪器主要用于制备水泥胶砂强度检验所用试样的搅拌。",
        "features": [
          "搅拌速度旋转次数精度更高",
          "触摸屏可戴手套操作，无需在试验过程中摘除手套",
          "安全设计，透明防护门未关闭无法启动"
        ],
        "specifications": [
          {
            "label": "搅拌叶转数",
            "value": ""
          },
          {
            "label": "搅拌速度",
            "value": "公转r/min 自转r/min"
          },
          {
            "label": "低速 62±2 140±2",
            "value": ""
          },
          {
            "label": "高速 125±3 285±3",
            "value": ""
          },
          {
            "label": "搅拌叶在搅拌锅内的运动轨迹同ISO679",
            "value": ""
          },
          {
            "label": "搅拌叶宽度mm",
            "value": "135"
          },
          {
            "label": "搅拌锅容积L",
            "value": "5"
          },
          {
            "label": "搅拌锅壁厚mm",
            "value": "1.5"
          },
          {
            "label": "搅拌叶与搅拌锅之间的工作间隙mm",
            "value": "3±1"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "功率W",
            "value": "1000"
          },
          {
            "label": "外形尺寸mm",
            "value": "630×400×660"
          },
          {
            "label": "净重kg",
            "value": "80"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P150",
        "name": "水泥胶砂振实台",
        "model": "ZT-20H",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/ZT-20H.png",
        "image": "myImages/ZT-20H-Image.png",
        "description": "水泥胶砂振实台适用于制备水泥胶砂强度检验所用的试样。\n符合GB/T 17671-2021《水泥胶砂强度检验方法(ISO法)》、JC/T 682《水泥胶砂试体成型振实台》等国家或行业标准设计生产的。",
        "features": [
          "静音设计，试验过程静音不刺耳",
          "触摸屏可戴手套操作，无需在试验过程中摘除手套"
        ],
        "specifications": [
          {
            "label": "台盘(包括臂杆、压模框等)的总质量kg",
            "value": "13.75士0.25"
          },
          {
            "label": "振动部分总重量kg",
            "value": "20±0.5"
          },
          {
            "label": "振幅(落距)mm",
            "value": "15±0.3"
          },
          {
            "label": "振动60次的时间s",
            "value": "60±2"
          },
          {
            "label": "电动机转速(转/分)",
            "value": "60"
          },
          {
            "label": "电动机功率W",
            "value": "40"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "1152×482×510"
          },
          {
            "label": "净重",
            "value": "87kg"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P151",
        "name": "水泥胶砂振实台",
        "model": "ZT-20F",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/ZT-20F.png",
        "image": "myImages/ZT-20F-Image.png",
        "description": "水泥胶砂振实台适用于制备水泥胶砂强度检验所用的试样。\n符合GB/T 17671-2021《水泥胶砂强度检验方法(ISO法)》、JC/T 682《水泥胶砂试体成型振实台》等国家或行业标准设计生产的。",
        "features": [
          "静音设计，试验过程静音不刺耳",
          "触摸屏可戴手套操作，无需在试验过程中摘除手套"
        ],
        "specifications": [
          {
            "label": "台盘(包括臂杆、压模框等)的总质量kg",
            "value": "13.75士0.25"
          },
          {
            "label": "振动部分总重量kg",
            "value": "20±0.5"
          },
          {
            "label": "振幅(落距)mm",
            "value": "15±0.3"
          },
          {
            "label": "振动60次的时间s",
            "value": "60±2"
          },
          {
            "label": "电动机转速(转/分)",
            "value": "60"
          },
          {
            "label": "电动机功率W",
            "value": "40"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "1152×482×510"
          },
          {
            "label": "净重",
            "value": "87kg"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P152",
        "name": "水泥胶砂振实台",
        "model": "ZT-96",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/ZT-96.png",
        "image": "myImages/ZT-96-Image.png",
        "description": "ZT-96型水泥胶砂振实台符合水泥胶砂强度检验办法，等同采用ISO676：1989（E）国际标准，ISO679：1989（E）4.2.5标准，是适用于水泥强度检验的制样设备。",
        "features": [],
        "specifications": [
          {
            "label": "振动部分总重量kg",
            "value": "20±0.5"
          },
          {
            "label": "落距mm",
            "value": "15±0.3"
          },
          {
            "label": "振动频率",
            "value": "60次/60秒±2秒"
          },
          {
            "label": "电动机转数 转/分",
            "value": "60"
          },
          {
            "label": "电动机功率W",
            "value": "30"
          },
          {
            "label": "电源电压V",
            "value": "220"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P153",
        "name": "水泥胶砂流动度测定仪（跳桌）",
        "model": "NLD-3",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/NLD-3.png",
        "image": "myImages/NLD-3-Image.png",
        "description": "本仪器主要用于水泥胶砂流动度试验。\n产品符合标准GB/T2419-2005、JC/T958-2005《水泥胶砂流动度测定方法》的要求。",
        "features": [
          "桌面由镀硬铬制造，表面光亮，外形美观，不易生锈；",
          "控制器控精度高，操作简单方便。"
        ],
        "specifications": [
          {
            "label": "振动部分总重量kg",
            "value": "4.35±0.15"
          },
          {
            "label": "振动落距mm",
            "value": "10±0.2"
          },
          {
            "label": "振动频率Hz",
            "value": "1"
          },
          {
            "label": "振动次数",
            "value": "25次"
          },
          {
            "label": "桌面参数",
            "value": "铸钢，工作面镀硬铬"
          },
          {
            "label": "直径mm",
            "value": "Φ300±1"
          },
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "200×300×280"
          },
          {
            "label": "重量kg",
            "value": "25"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P154",
        "name": "水泥胶砂流动度测定仪",
        "model": "NLD-3F",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/NLD-3F.png",
        "image": "myImages/NLD-3F-Image.png",
        "description": "本仪器根据新标准GB/T2419-2005、JC/T958-2005《水泥胶砂流动度测定方法》的要求设计制造，主要用于水泥胶砂流动度试验。",
        "features": [
          "设备配备静音罩，实验过程振击声小",
          "触摸屏操作，戴手套也可以使用。"
        ],
        "specifications": [
          {
            "label": "振动部分总重量kg",
            "value": "4.35±0.15"
          },
          {
            "label": "振动落距mm",
            "value": "10±0.2"
          },
          {
            "label": "振动频率Hz",
            "value": "1"
          },
          {
            "label": "振动次数",
            "value": "25次"
          },
          {
            "label": "桌面参数",
            "value": "铸钢，工作面镀硬铬"
          },
          {
            "label": "直径mm",
            "value": "Φ300±1"
          },
          {
            "label": "电源电压",
            "value": "220V±10%，50Hz"
          },
          {
            "label": "外形尺寸mm",
            "value": "400×500×370"
          },
          {
            "label": "重量kg",
            "value": "25"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P155",
        "name": "水泥细度负压筛析仪（普通）",
        "model": "FSY-150",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/FSY-150（普通）.png",
        "image": "myImages/FSY-150(普通）-Image.png",
        "description": "本仪器广泛应用于水泥细度检验和水泥生产控制，其它行业的粉末细度测试也可采用，是各水泥质检站，水泥厂等单位的常用仪器。",
        "features": [
          "筛分速度快、精度高、复演性好；",
          "利用气流作为筛分的动力介质；",
          "收集率可达90%以上；",
          "真空压力表可测负压，收尘筒可用来收集灰尘，节能环保。"
        ],
        "specifications": [
          {
            "label": "筛析测试细度mm",
            "value": "1～0.030"
          },
          {
            "label": "筛析时间自动s",
            "value": "控制可调范围： 0～999"
          },
          {
            "label": "工作负压Pa",
            "value": "-4000～-6000"
          },
          {
            "label": "电源电压",
            "value": "220V±10%，50Hz"
          },
          {
            "label": "加料g",
            "value": "10～25"
          },
          {
            "label": "外形尺寸mm",
            "value": "450×380×830"
          },
          {
            "label": "重量kg",
            "value": "30"
          },
          {
            "label": "噪音dB",
            "value": "≤75"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P156",
        "name": "水泥细度负压筛析仪（环保）",
        "model": "FSY-150",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/FSY-150（环保）.png",
        "image": "myImages/FSY-150（环保）-Image.png",
        "description": "本仪器广泛应用于水泥细度检验和水泥生产控制，其它行业的粉末细度测试也可采用，是各水泥质检站，水泥厂等单位的常用仪器。",
        "features": [
          "筛分速度快、精度高、复演性好；",
          "利用气流作为筛分的动力介质；",
          "收集率可达90%以上；",
          "真空压力表可测负压，收尘筒可用来收集灰尘，节能环保。"
        ],
        "specifications": [
          {
            "label": "筛析测试细度mm",
            "value": "1～0.030"
          },
          {
            "label": "筛析时间自动s",
            "value": "控制可调范围： 0～999"
          },
          {
            "label": "工作负压Pa",
            "value": "-4000～-6000"
          },
          {
            "label": "电源电压",
            "value": "220V±10%，50Hz"
          },
          {
            "label": "加料g",
            "value": "10～25"
          },
          {
            "label": "外形尺寸mm",
            "value": "450×380×830"
          },
          {
            "label": "重量kg",
            "value": "30"
          },
          {
            "label": "噪音dB",
            "value": "≤75"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P157",
        "name": "负压式填料筛分试验仪",
        "model": "FSY-200",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/FSY-200.png",
        "image": "myImages/FSY-200-Image.png",
        "description": "该负压筛析仪是按照国家标准JTG3432-2024/T0356-2024进行筛析检验的专业仪器。具有结构简单. 操作方便. 降低能耗等特点，本方法适用于测定矿粉，水泥，石灰，粉煤灰，回收粉等填料的颗粒级配。是水泥厂建筑公司以及拥有水泥专业的科研所和大专院校必备的仪器。",
        "features": [
          "筛分速度快、精度高、复演性好；",
          "利用气流作为筛分的动力介质；",
          "收集率可达90%以上；",
          "真空压力表可测负压，收尘筒可用来收集灰尘，节能环保。"
        ],
        "specifications": [
          {
            "label": "筛析测试细度",
            "value": "0.6/0.3/0.15/0.075mm"
          },
          {
            "label": "筛析自控时间",
            "value": "9999秒，随意设定"
          },
          {
            "label": "工作负压可调范围",
            "value": "3500pa，±500pa"
          },
          {
            "label": "喷嘴转速",
            "value": "20r/min±5r/mi"
          },
          {
            "label": "加入试样",
            "value": "50g"
          },
          {
            "label": "电源电压",
            "value": "220V，50Hz"
          },
          {
            "label": "整机功率约",
            "value": "1000W"
          },
          {
            "label": "工作噪音",
            "value": "<75dB"
          },
          {
            "label": "精度",
            "value": "1pa"
          },
          {
            "label": "满足T0356-2024规定的要求",
            "value": ""
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P158",
        "name": "水泥稠度凝结时间测定仪（维卡仪）",
        "model": "ISO",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/ISO.png",
        "image": "myImages/ISO-Image.png",
        "description": "本仪器根据ISO9597-2008《水泥凝结时间和安定性的测定》制造，符合GB/T1346-2011《水泥标准稠度用水量、凝结时间、安定性检验方法》用于测试水泥标准稠度仪用水量，凝结时间和安定性检验方法。",
        "features": [],
        "specifications": [
          {
            "label": "滑动部分总重量g",
            "value": "300±1。"
          },
          {
            "label": "标准稠度试杆mm",
            "value": "1根，有效长度50±1,直径Φ10±0.05。"
          },
          {
            "label": "初凝用试针mm",
            "value": "2根，有效长度50±1,直径Φ1.13±0.05。"
          },
          {
            "label": "终凝用试针mm",
            "value": "1根，有效长度30±1,直径Φ1.13±0.05。"
          },
          {
            "label": "外形尺寸mm",
            "value": "170×110×300"
          },
          {
            "label": "重量kg",
            "value": "4.5"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P159",
        "name": "勃氏比表面积仪",
        "model": "DBT-127",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/DBT-127.png",
        "image": "myImages/DBT-127-Image.png",
        "description": "本仪器主要根据国家标准GB8074-87水泥比表面积测定方法一勃氏法有关规定，并参照美国ASMTC204-75 透气改进制成。\n基本原理是采用一定量的空气，透过具有一定空隙率和一定厚度的压实粉层时所受的阻力不同而进行测定的，它广泛应用于测定水泥、陶瓷，磨料、金属、煤炭、食品、火药等粉状物料的比表面积。",
        "features": [],
        "specifications": [
          {
            "label": "1、透气圆筒内腔直径",
            "value": "φ12.7+0.05mm"
          },
          {
            "label": "2、透气圆筒内腔试料层高度15+0.5mm",
            "value": ""
          },
          {
            "label": "3、",
            "value": "穿孔板孔数 35个"
          },
          {
            "label": "穿孔板孔径中1.0rmm",
            "value": ""
          },
          {
            "label": "穿孔板板厚",
            "value": "1-0.10mm"
          },
          {
            "label": "4、电磁泵工作电压周波220V50HZ",
            "value": ""
          },
          {
            "label": "5、电磁泵功耗<15V",
            "value": ""
          },
          {
            "label": "6、仪器重量",
            "value": "3.2Kg(连仪器箱总重6.5Kg)"
          },
          {
            "label": "7、外形尺寸",
            "value": "460mmx220mmx170mm"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P160",
        "name": "全自动比表面积仪",
        "model": "FBT-9",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/FBT-9.png",
        "image": "myImages/FBT-9-Image.png",
        "description": "产品符合GB/T8074-2008《水泥比表面积测定方法勃氏法》，本方法根据一定量的空气通过具有一定空隙率和固定厚度的水泥层时，所受阻力不同而引起流速的变化来测定水泥的比表面积。",
        "features": [],
        "specifications": [
          {
            "label": "电源电压",
            "value": "AC220V±10%，50Hz"
          },
          {
            "label": "计时范围",
            "value": "0.1 秒~999.9 秒"
          },
          {
            "label": "计时精度",
            "value": "<0.2 秒"
          },
          {
            "label": "测量精度",
            "value": "<1%"
          },
          {
            "label": "温度范围",
            "value": "8-34 摄氏度"
          },
          {
            "label": "透气圆筒内腔直径mm",
            "value": "Φ12.7"
          },
          {
            "label": "透气圆筒内腔试料高度mm",
            "value": "15"
          },
          {
            "label": "穿孔板孔数（hole）",
            "value": "35"
          },
          {
            "label": "穿孔板孔径mm",
            "value": "Φ1.0"
          },
          {
            "label": "穿孔板厚度mm",
            "value": "1"
          },
          {
            "label": "重量kg",
            "value": "8"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P161",
        "name": "雷氏夹测定仪",
        "model": "LD-50",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/LD-50.png",
        "image": "myImages/LD-50-Image.png",
        "description": "雷氏夹测定仪根据GB/T1346-2011《水泥标准稠度用水量、凝结时间、安定性检验方法》、ISO9597-2008《水泥凝结时间和安定性的测定》标准要求，主要用于检测雷氏夹质量是否符合要求。",
        "features": [],
        "specifications": [
          {
            "label": "专用砝码重量",
            "value": "300g"
          },
          {
            "label": "量值刻度板最小刻距",
            "value": "0.5mm"
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
      {
        "id": "P162",
        "name": "泥浆三件套",
        "model": "ANY-1",
        "category": "路达水泥仪器产品系列",
        "thumbnail": "myImages/ANY-1.png",
        "image": "myImages/ANY-1-Image.png",
        "description": "",
        "features": [],
        "specifications": [
          {
            "label": "泥浆比重计",
            "value": ""
          },
          {
            "label": "测量范围",
            "value": "0.96-2.0g/cm³ 0.96-2.5g/cm³ 0.96-3.0g/cm³ 0.5-2.0g/cm³ 0.1-1.5g/cm³ 0.7-2.4g/cm³"
          },
          {
            "label": "刻度分度值为",
            "value": "0.01g/cm³"
          },
          {
            "label": "测试杯容量为",
            "value": "140cm³"
          },
          {
            "label": "泥浆粘度计的流出管为管径5mm，长100mm的细管。清洁的水700ml注入粘度计漏斗中，流出500ml所需的时间为15s，有隔层的量杯其一端的容量为500ml，另一端的容量为200ml.",
            "value": ""
          },
          {
            "label": "含砂量计由一只装有200目筛网的滤筒和与滤筒直径相应的漏斗及一只具有0-100%刻度的玻璃测管组成。",
            "value": ""
          }
        ],
        "hasManual": false,
        "hasVideo": true,
        "hasCAD": false,
        "isNew": false
      },
        
  {
    "id": "MF001",
    "name": "混凝土快速冻融箱（分体）",
    "model": "TDRF-1",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/TDRF-1（分体）.png",
    "image": "myImages/TDRF-1（分体）-Image.png",
    "description": "我公司为TDRF型混凝土快速冻融箱（装置）建材部标准起草单位，参与国家建材院《混凝土抗冻试验设备》标准制订。\n本产品适用于对混凝土进行冻融试验，产品符合DL/T5150、50082、ASTM/C666、JTJ5，GB/T50082-2024等标准要求。",
    "features": [
      "采用水冻水融法,用循环的载冷剂对试件反复进行降温和升温，周期性地把试件内外的水进行冻结和融化;",
      "采用进口全封闭制冷压缩机，提高产品的节能效率和耐用性能。",
      "采用美国进口温度传感器，高精度，控温稳定。",
      "液晶显示屏采用全触摸彩屏，运行状态以动画效果显示。",
      "增加了USB导出口，可数据导出。",
      "全新增加低压表，反映氟利昂低压情况。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "TDRF-1"
      },
      {
        "label": "压缩机冷却方式",
        "value": "风冷"
      },
      {
        "label": "试件数量（件）",
        "value": "28"
      },
      {
        "label": "试件尺寸mm",
        "value": "100×100×400，测温件尺寸相同"
      },
      {
        "label": "冻结试件中心温度",
        "value": "-18±2℃"
      },
      {
        "label": "融化试件中心温度",
        "value": "5±2℃"
      },
      {
        "label": "冻融循环周期",
        "value": "2～4小时，融化时间不小于1/4冻融周期"
      },
      {
        "label": "试件中心与表面的温差℃",
        "value": "小于28"
      },
      {
        "label": "循环次数",
        "value": "标准为300次,循环次数可调"
      },
      {
        "label": "温度记录仪",
        "value": "液晶触摸屏控制仪★"
      },
      {
        "label": "冻融循环介质",
        "value": "-45℃防冻液（1:1兑水使用）"
      },
      {
        "label": "冻融循环介质充注量kg",
        "value": "90"
      },
      {
        "label": "制冷机压缩机",
        "value": "进口全封闭8.5HP"
      },
      {
        "label": "试件桶尺寸mm",
        "value": "115×115×500"
      },
      {
        "label": "加热功率kW",
        "value": "9"
      },
      {
        "label": "最大运行功率kW",
        "value": "11"
      },
      {
        "label": "电源电压",
        "value": "AC380V±10%，50Hz"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF002",
    "name": "混凝土快速冻融箱（分体）",
    "model": "TDRF-2",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/TDRF-2（分体）.png",
    "image": "myImages/TDRF-2（分体）-Image.png",
    "description": "我公司为TDRF型混凝土快速冻融箱（装置）建材部标准起草单位，参与国家建材院《混凝土抗冻试验设备》标准制订。\n本产品适用于对混凝土进行冻融试验，产品符合DL/T5150、50082、ASTM/C666、JTJ5，GB/T50082-2024等标准要求。",
    "features": [
      "采用水冻水融法,用循环的载冷剂对试件反复进行降温和升温，周期性地把试件内外的水进行冻结和融化;",
      "采用进口全封闭制冷压缩机，提高产品的节能效率和耐用性能。",
      "采用美国进口温度传感器，高精度，控温稳定。",
      "液晶显示屏采用全触摸彩屏，运行状态以动画效果显示。",
      "增加了USB导出口，可数据导出。",
      "全新增加低压表，反映氟利昂低压情况。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "TDRF-2"
      },
      {
        "label": "压缩机冷却方式",
        "value": "风冷"
      },
      {
        "label": "试件数量（件）",
        "value": "16"
      },
      {
        "label": "试件尺寸mm",
        "value": "100×100×400，测温件尺寸相同"
      },
      {
        "label": "冻结试件中心温度",
        "value": "-18±2℃"
      },
      {
        "label": "融化试件中心温度",
        "value": "5±2℃"
      },
      {
        "label": "冻融循环周期",
        "value": "2～4小时，融化时间不小于1/4冻融周期"
      },
      {
        "label": "试件中心与表面的温差℃",
        "value": "小于28"
      },
      {
        "label": "循环次数",
        "value": "标准为300次,循环次数可调"
      },
      {
        "label": "温度记录仪",
        "value": "液晶触摸屏控制仪★"
      },
      {
        "label": "冻融循环介质",
        "value": "-45℃防冻液（1:1兑水使用）"
      },
      {
        "label": "冻融循环介质充注量kg",
        "value": "60"
      },
      {
        "label": "制冷机压缩机",
        "value": "进口全封闭5HP"
      },
      {
        "label": "试件桶尺寸mm",
        "value": "115×115×500"
      },
      {
        "label": "加热功率kW",
        "value": "6"
      },
      {
        "label": "最大运行功率kW",
        "value": "8"
      },
      {
        "label": "电源电压",
        "value": "AC380V±10%，50Hz"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF003",
    "name": "混凝土快速冻融箱（分体）",
    "model": "TDRF-3",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/TDRF-3（分体）.png",
    "image": "myImages/TDRF-3（分体）-Image.png",
    "description": "我公司为TDRF型混凝土快速冻融箱（装置）建材部标准起草单位，参与国家建材院《混凝土抗冻试验设备》标准制订。\n本产品适用于对混凝土进行冻融试验，产品符合DL/T5150、50082、ASTM/C666、JTJ5，GB/T50082-2024等标准要求。",
    "features": [
      "采用水冻水融法,用循环的载冷剂对试件反复进行降温和升温，周期性地把试件内外的水进行冻结和融化;",
      "采用进口全封闭制冷压缩机，提高产品的节能效率和耐用性能。",
      "采用美国进口温度传感器，高精度，控温稳定。",
      "液晶显示屏采用全触摸彩屏，运行状态以动画效果显示。",
      "增加了USB导出口，可数据导出。",
      "全新增加低压表，反映氟利昂低压情况。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "TDRF-3"
      },
      {
        "label": "压缩机冷却方式",
        "value": "风冷"
      },
      {
        "label": "试件数量（件）",
        "value": "10"
      },
      {
        "label": "试件尺寸mm",
        "value": "100×100×400，测温件尺寸相同"
      },
      {
        "label": "冻结试件中心温度",
        "value": "-18±2℃"
      },
      {
        "label": "融化试件中心温度",
        "value": "5±2℃"
      },
      {
        "label": "冻融循环周期",
        "value": "2～4小时，融化时间不小于1/4冻融周期"
      },
      {
        "label": "试件中心与表面的温差℃",
        "value": "小于28"
      },
      {
        "label": "循环次数",
        "value": "标准为300次,循环次数可调"
      },
      {
        "label": "温度记录仪",
        "value": "液晶触摸屏控制仪★"
      },
      {
        "label": "冻融循环介质",
        "value": "-45℃防冻液（1:1兑水使用）"
      },
      {
        "label": "冻融循环介质充注量kg",
        "value": "30"
      },
      {
        "label": "制冷机压缩机",
        "value": "进口全封闭3HP"
      },
      {
        "label": "试件桶尺寸mm",
        "value": "115×115×500"
      },
      {
        "label": "加热功率kW",
        "value": "4.5"
      },
      {
        "label": "最 大运行功率kW",
        "value": "6"
      },
      {
        "label": "电源电压",
        "value": "AC380V±10%，50Hz"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF004",
    "name": "混凝土快速冻融箱（连体）",
    "model": "TDRF-1",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/TDRF-1（连体）.png",
    "image": "myImages/TDRF-1（连体）-Image.png",
    "description": "我公司为TDRF型混凝土快速冻融箱（装置）建材部标准起草单位，参与国家建材院《混凝土抗冻试验设备》标准制订。\n本产品适用于对混凝土进行冻融试验，产品符合DL/T5150、50082、ASTM/C666、JTJ5，GB/T50082-2024等标准要求。",
    "features": [
      "采用水冻水融法,用循环的载冷剂对试件反复进行降温和升温，周期性地把试件内外的水进行冻结和融化;",
      "采用进口全封闭制冷压缩机，提高产品的节能效率和耐用性能。",
      "采用美国进口温度传感器，高精度，控温稳定。",
      "液晶显示屏采用全触摸彩屏，运行状态以动画效果显示。",
      "增加了USB导出口，可数据导出。",
      "全新增加低压表，反映氟利昂低压情况。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "TDRF-1"
      },
      {
        "label": "压缩机冷却方式",
        "value": "风冷"
      },
      {
        "label": "试件数量（件）",
        "value": "28"
      },
      {
        "label": "试件尺寸mm",
        "value": "100×100×400，测温件尺寸相同"
      },
      {
        "label": "冻结试件中心温度",
        "value": "-18±2℃"
      },
      {
        "label": "融化试件中心温度",
        "value": "5±2℃"
      },
      {
        "label": "冻融循环周期",
        "value": "2～4小时，融化时间不小于1/4冻融周期"
      },
      {
        "label": "试件中心与表面的温差℃",
        "value": "小于28"
      },
      {
        "label": "循环次数",
        "value": "标准为300次,循环次数可调"
      },
      {
        "label": "温度记录仪",
        "value": "液晶触摸屏控制仪★"
      },
      {
        "label": "冻融循环介质",
        "value": "-45℃防冻液（1:1兑水使用）"
      },
      {
        "label": "冻融循环介质充注量kg",
        "value": "90"
      },
      {
        "label": "制冷机压缩机",
        "value": "进口全封闭8.5HP"
      },
      {
        "label": "试件桶尺寸mm",
        "value": "115×115×500"
      },
      {
        "label": "加热功率kW",
        "value": "9"
      },
      {
        "label": "最大运行功率kW",
        "value": "11"
      },
      {
        "label": "电源电压",
        "value": "AC380V±10%，50Hz"
      },
      {
        "label": "外形尺寸mm",
        "value": "1870×1370×1000"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF005",
    "name": "混凝土快速冻融箱（连体）",
    "model": "TDRF-2",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/TDRF-2（连体）.png",
    "image": "myImages/TDRF-2（连体）-Image.png",
    "description": "我公司为TDRF型混凝土快速冻融箱（装置）建材部标准起草单位，参与国家建材院《混凝土抗冻试验设备》标准制订。\n本产品适用于对混凝土进行冻融试验，产品符合DL/T5150、50082、ASTM/C666、JTJ5，GB/T50082-2024等标准要求。",
    "features": [
      "采用水冻水融法,用循环的载冷剂对试件反复进行降温和升温，周期性地把试件内外的水进行冻结和融化;",
      "采用进口全封闭制冷压缩机，提高产品的节能效率和耐用性能。",
      "采用美国进口温度传感器，高精度，控温稳定。",
      "液晶显示屏采用全触摸彩屏，运行状态以动画效果显示。",
      "增加了USB导出口，可数据导出。",
      "全新增加低压表，反映氟利昂低压情况。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "TDRF-2"
      },
      {
        "label": "压缩机冷却方式",
        "value": "风冷"
      },
      {
        "label": "试件数量（件）",
        "value": "16"
      },
      {
        "label": "试件尺寸mm",
        "value": "100×100×400，测温件尺寸相同"
      },
      {
        "label": "冻结试件中心温度",
        "value": "-18±2℃"
      },
      {
        "label": "融化试件中心温度",
        "value": "5±2℃"
      },
      {
        "label": "冻融循环周期",
        "value": "2～4小时，融化时间不小于1/4冻融周期"
      },
      {
        "label": "试件中心与表面的温差℃",
        "value": "小于28"
      },
      {
        "label": "循环次数",
        "value": "标准为300次,循环次数可调"
      },
      {
        "label": "温度记录仪",
        "value": "液晶触摸屏控制仪★"
      },
      {
        "label": "冻融循环介质",
        "value": "-45℃防冻液（1:1兑水使用）"
      },
      {
        "label": "冻融循环介质充注量kg",
        "value": "60"
      },
      {
        "label": "制冷机压缩机",
        "value": "进口全封闭5HP"
      },
      {
        "label": "试件桶尺寸mm",
        "value": "115×115×500"
      },
      {
        "label": "加热功率kW",
        "value": "6"
      },
      {
        "label": "最大运行功率kW",
        "value": "8"
      },
      {
        "label": "电源电压",
        "value": "AC380V±10%，50Hz"
      },
      {
        "label": "外形尺寸mm",
        "value": "1870×1000×1000"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF006",
    "name": "混凝土快速冻融箱（连体）",
    "model": "TDRF-3",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/TDRF-3（连体）.png",
    "image": "myImages/TDRF-3（连体）-Image.png",
    "description": "我公司为TDRF型混凝土快速冻融箱（装置）建材部标准起草单位，参与国家建材院《混凝土抗冻试验设备》标准制订。\n本产品适用于对混凝土进行冻融试验，产品符合DL/T5150、50082、ASTM/C666、JTJ5，GB/T50082-2024等标准要求。",
    "features": [
      "采用水冻水融法,用循环的载冷剂对试件反复进行降温和升温，周期性地把试件内外的水进行冻结和融化;",
      "采用进口全封闭制冷压缩机，提高产品的节能效率和耐用性能。",
      "采用美国进口温度传感器，高精度，控温稳定。",
      "液晶显示屏采用全触摸彩屏，运行状态以动画效果显示。",
      "增加了USB导出口，可数据导出。",
      "全新增加低压表，反映氟利昂低压情况。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "TDRF-3"
      },
      {
        "label": "压缩机冷却方式",
        "value": "风冷"
      },
      {
        "label": "试件数量（件）",
        "value": "10"
      },
      {
        "label": "试件尺寸mm",
        "value": "100×100×400，测温件尺寸相同"
      },
      {
        "label": "冻结试件中心温度",
        "value": "-18±2℃"
      },
      {
        "label": "融化试件中心温度",
        "value": "5±2℃"
      },
      {
        "label": "冻融循环周期",
        "value": "2～4小时，融化时间不小于1/4冻融周期"
      },
      {
        "label": "试件中心与表面的温差℃",
        "value": "小于28"
      },
      {
        "label": "循环次数",
        "value": "标准为300次,循环次数可调"
      },
      {
        "label": "温度记录仪",
        "value": "液晶触摸屏控制仪★"
      },
      {
        "label": "冻融循环介质",
        "value": "-45℃防冻液（1:1兑水使用）"
      },
      {
        "label": "冻融循环介质充注量kg",
        "value": "30"
      },
      {
        "label": "制冷机压缩机",
        "value": "进口全封闭3HP"
      },
      {
        "label": "试件桶尺寸mm",
        "value": "115×115×500"
      },
      {
        "label": "加热功率kW",
        "value": "4.5"
      },
      {
        "label": "最 大运行功率kW",
        "value": "6"
      },
      {
        "label": "电源电压",
        "value": "AC380V±10%，50Hz"
      },
      {
        "label": "外形尺寸mm",
        "value": "1620×1000×1000"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF007",
    "name": "全自动冻融试验箱",
    "model": "TDRF-1M",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/TDRF-1M.png",
    "image": "myImages/TDRF-1M-Image.png",
    "description": "全自动低温冻融试验机采用模块化设计，主要包含制冷、控制与注水三大核心系统。整机为立体框架构造，主体结构选用高强度优质钢材，并经过专业防锈处理，显著提升了整体的耐腐蚀性能与使用寿命。内部工作水箱及储水箱均采用优质不锈钢板制成，确保在长期低温及潮湿环境下依然保持稳定。",
    "features": [
      "1、设备真正实现了全程无人值守运行，用户完成初始参数设置后，机器将自主完成数百次循环。",
      "2、基于高性能进口压缩机和优化设计的紫铜管冷凝器，系统具备出色的温度控制能力。",
      "3、制冷、控制、注水三大系统采用清晰的模块化设计布局，易于检修和更换，降低了设备的长期使用成本。",
      "4、设备内置多层次安全保护机制，一旦运行中出现异常，控制系统会立即报警并执行安全停机程序，有效保护样品、设备自身及实验室安全。",
      "5、智能控制仪表配备数据存储与输出功能，可完整记录每一次循环的关键参数，如温度曲线、运行时间、当前循环次数等。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "TDRF-1M"
      },
      {
        "label": "测温精度",
        "value": "-35℃～+50℃"
      },
      {
        "label": "温度显示",
        "value": "箱体内温度极差不超过1℃"
      },
      {
        "label": "降温速率",
        "value": "接近并不超过20℃/h"
      },
      {
        "label": "试件容量",
        "value": ""
      },
      {
        "label": "标准混凝土砌块190×190×390（mm）",
        "value": "5块"
      },
      {
        "label": "标准混凝土立方体试块100×100×100 （mm）",
        "value": "54块"
      },
      {
        "label": "标准红砖试块240×115×53（mm）",
        "value": "60块"
      },
      {
        "label": "容器内胆尺寸(mm)",
        "value": "长1100×宽500×高500"
      },
      {
        "label": "设备外形尺寸(mm)",
        "value": "长2060×宽780高×1150"
      },
      {
        "label": "重量",
        "value": "约200kg"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF008",
    "name": "混凝土碳化试验箱",
    "model": "CCB-70A",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/CCB-70A.png",
    "image": "myImages/CCB-70A-Image.png",
    "description": "我公司参与起草CCB-70A型混凝土碳化试验箱建材部标准制定。本款设备是进行混凝土碳化试验的专用设备。产品符合GBJ82-85《水泥长期耐久性试验》中碳化试验设备的要求，同时符合JG/T247-2009《中华人民共和国建筑工业行业标准》及GB/T50082-2024。产品配备进口传感器，全程自动控制，性能稳定完善。",
    "features": [
      "电气控制通过微电脑控制器",
      "采用温度传感器采用PT100型温度传感器",
      "采用蒸发吸湿式去湿",
      "二氧化碳传感器采用进口红外线敏感式传感器"
    ],
    "specifications": [
      {
        "label": "控制温度℃",
        "value": "20±2（可调）"
      },
      {
        "label": "控制温度精度℃",
        "value": "0.5"
      },
      {
        "label": "控制湿度％RH",
        "value": "70±5（40~70可调）"
      },
      {
        "label": "CO2浓度％",
        "value": "20±0.5（0~60，0~100可调，两种范围可选）"
      },
      {
        "label": "CO2浓度分辨率％",
        "value": "±1"
      },
      {
        "label": "CO2浓度均匀性％",
        "value": "≦2"
      },
      {
        "label": "CO2浓度精度％",
        "value": "1"
      },
      {
        "label": "加热功率W",
        "value": "600"
      },
      {
        "label": "制冷/除湿功率W",
        "value": "145"
      },
      {
        "label": "加湿功率W",
        "value": "约40"
      },
      {
        "label": "电源电压",
        "value": "AC220V±10%，50Hz"
      },
      {
        "label": "工作室尺寸mm",
        "value": "620×550×1230"
      },
      {
        "label": "外形尺寸mm",
        "value": "1100×710×1630"
      },
      {
        "label": "重量kg",
        "value": "200"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF009",
    "name": "混凝土快速养护箱",
    "model": "A型",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/A型.png",
    "image": "myImages/A型-Image.png",
    "description": "本产品适用于水泥厂、建材科研、施工单位等进行水泥与砼试件快速蒸煮和养护。\n产品符合JTJ053/T0509标准要求。",
    "features": [
      "该设备外壳铁，工作室和隔板均为不锈钢；",
      "箱内有工作架子，供试件安放；",
      "箱底有出水阀，箱口配有水槽；",
      "用U型电热管加热，加热范围大水温可快速上升。"
    ],
    "specifications": [
      {
        "label": "使用电压",
        "value": "220V电源"
      },
      {
        "label": "箱内温度",
        "value": "室温至100℃之间，由用户需要自由控制"
      },
      {
        "label": "电热管加热功率W",
        "value": "2000(3根)"
      },
      {
        "label": "工作室尺寸mm",
        "value": "750×550×530"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF010",
    "name": "水泥（砼）快速养护箱",
    "model": "B型",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/B型.png",
    "image": "myImages/B型-Image.png",
    "description": "本产品适用于水泥厂、建材科研、施工单位等进行水泥与砼试件快速蒸煮和养护。\n设备符合T0509-94《水泥胶砂强度快速试验》等相关行业标准。",
    "features": [
      "该设备外壳铁，工作室和隔板均为不锈钢；",
      "箱内有工作架子，供试件安放；",
      "箱底有出水阀，箱口配有水槽；",
      "用U型电热管加热，加热范围大水温可快速上升。"
    ],
    "specifications": [
      {
        "label": "使用电压",
        "value": "220V电源"
      },
      {
        "label": "箱内温度",
        "value": "室温至100℃之间，由用户需要自由控制"
      },
      {
        "label": "电热管加热功率W",
        "value": "1500（2根）"
      },
      {
        "label": "工作室尺寸mm",
        "value": "550×350×320"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF011",
    "name": "蒸汽快速养护箱",
    "model": "LDZY-400",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/LDZY-400.png",
    "image": "myImages/LDZY-400-Image.png",
    "description": "本产品是砼试件进行蒸汽养护试验常用的设备。设备内外由不锈钢材质制作，触摸屏操作显示，全自动控制，试验过程简洁方便。\n本产品符JTG/TF50-2011《公路桥涵施工技术规范》要求。",
    "features": [
      "箱体内胆、外壳及试件放置架采用优质不锈钢材质，保温层采用聚酯整体发泡制作，具有良好的保温和耐腐蚀性能。",
      "可根据用户要求控制升温和降温速率，升温速度可调。",
      "采用彩色大屏，全触摸仪表控制，操作方便，美观大方。"
    ],
    "specifications": [
      {
        "label": "带模试件尺寸mm",
        "value": "195×195×175"
      },
      {
        "label": "箱体内径尺寸mm",
        "value": "1000×750×640"
      },
      {
        "label": ".整机外形尺寸mm",
        "value": "1560×850×900"
      },
      {
        "label": "试件组数",
        "value": "8组（共24块）"
      },
      {
        "label": "升温速率℃/h",
        "value": "≦15"
      },
      {
        "label": "加热功率KW",
        "value": "4.0（新型加热管）"
      },
      {
        "label": "制冷功率KW",
        "value": "0.5"
      },
      {
        "label": "电压",
        "value": "AC220V±10%"
      },
      {
        "label": "频率Hz",
        "value": "50±1"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF012",
    "name": "碱骨料试验箱",
    "model": "JKS型",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/JKS型.png",
    "image": "myImages/JKS型-Image.png",
    "description": "本设备按国家专业标准DL/T《水泥混凝土砂石骨料试验规程》、 JTG 3432-2024（快速砂浆棒法）要求设计制造，适用于砂石骨料膨胀检测时的控温、控时。本设备主要用于建筑，施工单位，公路桥梁工程单位及有关科研质监部门对混凝土长期耐久性进行碱骨料反映试验。",
    "features": [
      "箱体由内、中、外三层组成，内胆采用不锈钢焊接而成，外壳采用不锈钢抛光油磨工艺，中间隔层采用优质保温材料聚胺脂整体发泡制成，保温效果佳；",
      "箱口设有水封槽；",
      "箱盖上设有测温孔具有良好地防腐、防锈、保温性以及自动控温等功能。"
    ],
    "specifications": [
      {
        "label": "控温范围",
        "value": "室温~100℃（可调）"
      },
      {
        "label": "控温精度",
        "value": "±0.2℃"
      },
      {
        "label": "控时范围",
        "value": "0-100天"
      },
      {
        "label": "频率",
        "value": "50±1HZ"
      },
      {
        "label": "控时精度",
        "value": "±1min"
      },
      {
        "label": "加热功率",
        "value": "6KW"
      },
      {
        "label": "水泵功率",
        "value": "约90W"
      },
      {
        "label": "电压",
        "value": "AC380V±10%"
      },
      {
        "label": "工作室尺寸",
        "value": "650×550×600"
      },
      {
        "label": "外型尺寸",
        "value": "1010×680×800mm"
      },
      {
        "label": "重量",
        "value": "180kg"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF013",
    "name": "集料碱活性试验箱",
    "model": "JKS-HL",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/JKS-HL.png",
    "image": "myImages/JKS-HL-Image.png",
    "description": "本设备按国家专业标准 JTG 3432-2024（混凝土棱柱体法），DLT 5151-2014 中对于集料碱活性检验（混凝土棱柱法）要求设计制造，适用于砂石骨料膨胀检测时的控温、控时。 \n本设备主要用于建筑，施工单位，公路桥梁工程单位及有关科研质监部门对混凝土长期耐久性进行碱骨料反映试验。\n随设备配套一套聚乙烯养护筒及相应配件。",
    "features": [
      "内胆采用不锈钢焊接而成；",
      "外壳采用优质冷轧钢板折弯成型；",
      "中间隔层保温采用聚脂发泡材料，搁架用不锈钢型材制造；",
      "结构坚固、造型美观，耐腐蚀性好；",
      "温湿度控制仪采用集成电路数字显示，具有分辨率高、直观，调节方便、控制精度高等优点；",
      "制冷系统采用直冷式压缩机，管盘蒸发器；",
      "加湿采用超声波加湿器，加湿为雾状水分子，确保箱内湿度≥95%。"
    ],
    "specifications": [
      {
        "label": "试验温度℃",
        "value": "38±2"
      },
      {
        "label": "控制湿度％RH",
        "value": "≧95"
      },
      {
        "label": "加热器功率 W",
        "value": "800"
      },
      {
        "label": "数据记录间隔",
        "value": "1min（可调）"
      },
      {
        "label": "养护筒放置数量",
        "value": "可放养护筒 4 个，标配 1 个"
      },
      {
        "label": "电源电压",
        "value": "AC220V±10%，50Hz"
      },
      {
        "label": "工作室尺寸 mm",
        "value": "590×570×1180"
      },
      {
        "label": "外形尺寸 mm",
        "value": "1000×700×1530"
      },
      {
        "label": "重量 kg",
        "value": "122"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF014",
    "name": "全自动混凝土抗渗仪",
    "model": "LDHS-06",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/LDHS-06.png",
    "image": "myImages/LDHS-06-Image.png",
    "description": "本全自动混凝土抗渗仪是一款高科技、智能化的检测设备，主要用于混凝土的抗渗性能试验。",
    "features": [
      "■参考标准",
      "JG/T249-2009《混凝土抗渗仪》",
      "GB/T50082-2024《普通混凝土长期性能和耐久性能试验方法标准》（或其最新更新有效版本）",
      "JTS/T 236-2019《水运工程混凝土试验检测技术规程》",
      "T0528-1994《混凝土抗渗性能试验方法》",
      "JTJ270-1998《水运工程混凝土试验规程》"
    ],
    "specifications": [
      {
        "label": "试验压力加压方式",
        "value": "自下而上加压"
      },
      {
        "label": "压力控制范围",
        "value": "0 ~ 2 MPa"
      },
      {
        "label": "压力设置分辨率",
        "value": "≤ 0.01 MPa"
      },
      {
        "label": "压力保持误差",
        "value": "≤ 0.02 MPa"
      },
      {
        "label": "压力测量精度",
        "value": "± 0.01 MPa"
      },
      {
        "label": "最大密封压力",
        "value": "3 MPa（初始1.5MPa）"
      },
      {
        "label": "适用试件尺寸",
        "value": "175*185*150mm"
      },
      {
        "label": "试验密封方式",
        "value": "气体密封，所有试件可同时密封，密封总时间≤10分钟"
      },
      {
        "label": "试验模数",
        "value": "6个试件（独立测控、独立判断）"
      },
      {
        "label": "工作温度范围",
        "value": "10 ~ 35℃"
      },
      {
        "label": "电源功率",
        "value": "AC 220V, 405W"
      },
      {
        "label": "外形尺寸",
        "value": "约 980 mm (长) × 980 mm (宽) × 1200 mm (高）"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF015",
    "name": "全自动混凝土抗渗仪",
    "model": "LDHS-24",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/LDHS-24.png",
    "image": "myImages/LDHS-24-Image.png",
    "description": "混凝土耐久性实验一直以来都是材料设计者和建筑设计师们关注的焦点问题，因为这最直接关系到人们生活和生产的安全问题。作为评价耐久性的主要措施，抗渗性能测试方法的研究也就变得尤为重要。\n混凝土抗渗试验除了繁琐和效率低下，最主要痛点还是试验量巨大。为顺应广大客户的需求，推出新款最多5组30块的全自动抗渗系统，无需涂抹任何密封材料、自动密封、自动加压、自动恒压、自动计时、自动判断渗漏、自动记录数据、自动脱模、实时监控;让检测环境更为整洁。\n全自动密封砼抗渗仪设备，智能化混凝土抗渗性能检测设备，操作简单，性能稳定，结果可靠。",
    "features": [
      "产品满足标准：",
      "◆ GB/T 50082-2024《普通混凝土长期性能和耐久性能试验方法标准》",
      "◆ JTG 3420-2020《公路工程水泥及水泥混凝土试验规程》",
      "◆ JTS/T 236-2019《水运工程混凝土试验检测技术规程》",
      "◆ JTS/T 236-2019 《水运工程混凝土试验规程》",
      "◆ JG/T249-2009《混凝土抗渗仪》",
      "1、一体式结构设计；",
      "2、采用气囊紧固式密封结构设计；",
      "3、采用大功率、高精度伺服系统控制；",
      "4、具备自动装膜、密封、检测、判断、脱模；",
      "5、每层独立水泵控压、试件独立测控判断；",
      "6、全过程由计算机全自动控制试验，一键操作，无需人工包覆密封材料、自动试验(自动密封、自动加压、自动恒压、自动脱模)，且自动判断渗漏、记录渗漏时间及压力；对每个样品独立控制；",
      "7、两种试验模式可选（逐级加压法和渗透高度法）；",
      "8、增强气压自动密封无需涂抹任何密封材料；"
    ],
    "specifications": [
      {
        "label": "9、试验压力加压方式",
        "value": "自下而上加压；"
      },
      {
        "label": "10、试件桶材料",
        "value": "高强度板材一次压铸成型；"
      },
      {
        "label": "11、每层可装6个试件（独立测控、独立判断）；",
        "value": ""
      },
      {
        "label": "12、共4层可装24个试件；",
        "value": ""
      },
      {
        "label": "13、试件密封材料",
        "value": "增强尼龙、天然橡胶、特殊耐磨、耐高压材质；"
      },
      {
        "label": "14、高层（第四层）",
        "value": "1.33m；"
      },
      {
        "label": "15、低层（第一层）",
        "value": "0.27m；"
      },
      {
        "label": "16、适用试件尺寸",
        "value": "φ175*φ185*150mm;"
      },
      {
        "label": "17、试验机示值相对误差",
        "value": "≤0.005MPa；"
      },
      {
        "label": "18、试验压力分辨率精度",
        "value": "0.001MPa；"
      },
      {
        "label": "19、逐级加压法",
        "value": "±0.005MPa；"
      },
      {
        "label": "20、渗透高度法",
        "value": "±0.005MPa；"
      },
      {
        "label": "21、试验机最大压力1.2MPa;",
        "value": ""
      },
      {
        "label": "22、试件密封方式增强气密封式，所有试件可同时密封，密封总时间≤5min;",
        "value": ""
      },
      {
        "label": "23、试件密封最大压力2.8MPa；",
        "value": ""
      },
      {
        "label": "24、密封压力分辨率0.001MPa；",
        "value": ""
      },
      {
        "label": "25、触控显示器",
        "value": "采用15寸触摸屏，用于试验操作及状态显示;"
      },
      {
        "label": "26、试验数据查询",
        "value": "可以自动形成试验报告、原始记录导出(数据保存时间容量≥5年）、也可将数据上传至用户指定的检测平台系统，可根据客户要求进行定制报表模板;"
      },
      {
        "label": "27、升降驱动方式",
        "value": "伺服电机驱动;"
      },
      {
        "label": "28、设备总功率",
        "value": "瞬时3200W（含气泵）；设备正常工作≤500W;"
      },
      {
        "label": "29、设备外形尺寸",
        "value": "2500mm*980mm*1780mm;"
      },
      {
        "label": "30、供电电源安装条件",
        "value": "220V50Hz,±10％；"
      },
      {
        "label": "31、全自动压模脱模抗渗透试验仪的气囊制造方法；",
        "value": ""
      },
      {
        "label": "32、抗渗透试验仪独立试件的气囊紧固式密封结构；",
        "value": ""
      },
      {
        "label": "33、每层独立水泵控压、试件独立测控判断;",
        "value": ""
      },
      {
        "label": "34、外形设计",
        "value": "立式（4层）、超薄、节省占地空间；"
      },
      {
        "label": "35、操作系统维护",
        "value": "免费维护、更新最新版本的软件；"
      },
      {
        "label": "36、设备噪音",
        "value": "设备噪音运行时不超过70分贝;（试验结束泄气压时除外）"
      },
      {
        "label": "37、设备震动",
        "value": "本设备采用伺服驱动升降，无振动。"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF016",
    "name": "全自动混凝土抗渗仪",
    "model": "LDHS-30",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/LDHS-30.png",
    "image": "myImages/LDHS-30-Image.png",
    "description": "混凝土耐久性实验一直以来都是材料设计者和建筑设计师们关注的焦点问题，因为这最直接关系到人们生活和生产的安全问题。作为评价耐久性的主要措施，抗渗性能测试方法的研究也就变得尤为重要。\n混凝土抗渗试验除了繁琐和效率低下，最主要痛点还是试验量巨大。为顺应广大客户的需求，推出新款最多5组30块的全自动抗渗系统，无需涂抹任何密封材料、自动密封、自动加压、自动恒压、自动计时、自动判断渗漏、自动记录数据、自动脱模、实时监控;让检测环境更为整洁。\n全自动密封砼抗渗仪设备，智能化混凝土抗渗性能检测设备，操作简单，性能稳定，结果可靠。",
    "features": [
      "产品满足标准：",
      "◆ GB/T 50082-2024《普通混凝土长期性能和耐久性能试验方法标准》",
      "◆ JTG 3420-2020《公路工程水泥及水泥混凝土试验规程》",
      "◆ JTS/T 236-2019《水运工程混凝土试验检测技术规程》",
      "◆ JTS/T 236-2019 《水运工程混凝土试验规程》",
      "◆ JG/T249-2009《混凝土抗渗仪》",
      "1、一体式结构设计；",
      "2、采用气囊紧固式密封结构设计；",
      "3、采用大功率、高精度伺服系统控制；",
      "4、具备自动装膜、密封、检测、判断、脱模；",
      "5、每层独立水泵控压、试件独立测控判断；",
      "6、全过程由计算机全自动控制试验，一键操作，无需人工包覆密封材料、自动试验(自动密封、自动加压、自动恒压、自动脱模)，且自动判断渗漏、记录渗漏时间及压力；对每个样品独立控制；",
      "7、两种试验模式可选（逐级加压法和渗透高度法）；",
      "8、增强气压自动密封无需涂抹任何密封材料；"
    ],
    "specifications": [
      {
        "label": "9、试验压力加压方式",
        "value": "自下而上加压；"
      },
      {
        "label": "10、试件桶材料",
        "value": "高强度板材一次压铸成型；"
      },
      {
        "label": "11、每层可装6个试件（独立测控、独立判断）；",
        "value": ""
      },
      {
        "label": "12、共5层可装30个试件；",
        "value": ""
      },
      {
        "label": "13、试件密封材料",
        "value": "增强尼龙、天然橡胶、特殊耐磨、耐高压材质；"
      },
      {
        "label": "14、高层（第五层）",
        "value": "1.55m；"
      },
      {
        "label": "15、低层（第一层）",
        "value": "0.27m；"
      },
      {
        "label": "16、适用试件尺寸",
        "value": "φ175*φ185*150mm;"
      },
      {
        "label": "17、试验机示值相对误差",
        "value": "≤0.005MPa；"
      },
      {
        "label": "18、试验压力分辨率精度",
        "value": "0.001MPa；"
      },
      {
        "label": "19、逐级加压法",
        "value": "±0.005MPa；"
      },
      {
        "label": "20、渗透高度法",
        "value": "±0.005MPa；"
      },
      {
        "label": "21、试验机最大压力1.2MPa;",
        "value": ""
      },
      {
        "label": "22、试件密封方式增强气密封式，所有试件可同时密封，密封总时间≤5min;",
        "value": ""
      },
      {
        "label": "23、试件密封最大压力2.8MPa；",
        "value": ""
      },
      {
        "label": "24、密封压力分辨率0.001MPa；",
        "value": ""
      },
      {
        "label": "25、触控显示器",
        "value": "采用15寸触摸屏，用于试验操作及状态显示;"
      },
      {
        "label": "26、试验数据查询",
        "value": "可以自动形成试验报告、原始记录导出(数据保存时间容量≥5年）、也可将数据上传至用户指定的检测平台系统，可根据客户要求进行定制报表模板;"
      },
      {
        "label": "27、升降驱动方式",
        "value": "伺服电机驱动;"
      },
      {
        "label": "28、设备总功率",
        "value": "瞬时3200W（含气泵）；设备正常工作≤500W;"
      },
      {
        "label": "29、设备外形尺寸",
        "value": "2500mm*980mm*1980mm;"
      },
      {
        "label": "30、供电电源安装条件",
        "value": "220V50Hz,±10％；"
      },
      {
        "label": "31、全自动压模脱模抗渗透试验仪的气囊制造方法；",
        "value": ""
      },
      {
        "label": "32、抗渗透试验仪独立试件的气囊紧固式密封结构；",
        "value": ""
      },
      {
        "label": "33、每层独立水泵控压、试件独立测控判断;",
        "value": ""
      },
      {
        "label": "34、外形设计",
        "value": "立式（5层）、超薄、节省占地空间；"
      },
      {
        "label": "35、操作系统维护",
        "value": "免费维护、更新最新版本的软件；"
      },
      {
        "label": "36、设备噪音",
        "value": "设备噪音运行时不超过70分贝;（试验结束泄气压时除外）"
      },
      {
        "label": "37、设备震动",
        "value": "本设备采用伺服驱动升降，无振动。"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF017",
    "name": "全自动混凝土抗渗仪",
    "model": "LDHS-36",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/LDHS-36.png",
    "image": "myImages/LDHS-36-Image.png",
    "description": "混凝土耐久性实验一直以来都是材料设计者和建筑设计师们关注的焦点问题，因为这最直接关系到人们生活和生产的安全问题。作为评价耐久性的主要措施，抗渗性能测试方法的研究也就变得尤为重要。\n混凝土抗渗试验除了繁琐和效率低下，最主要痛点还是试验量巨大。为顺应广大客户的需求，推出新款最多5组30块的全自动抗渗系统，无需涂抹任何密封材料、自动密封、自动加压、自动恒压、自动计时、自动判断渗漏、自动记录数据、自动脱模、实时监控;让检测环境更为整洁。\n全自动密封砼抗渗仪设备，智能化混凝土抗渗性能检测设备，操作简单，性能稳定，结果可靠。",
    "features": [
      "产品满足标准：",
      "◆ GB/T 50082-2024《普通混凝土长期性能和耐久性能试验方法标准》",
      "◆ JTG 3420-2020《公路工程水泥及水泥混凝土试验规程》",
      "◆ JTS/T 236-2019《水运工程混凝土试验检测技术规程》",
      "◆ JTS/T 236-2019 《水运工程混凝土试验规程》",
      "◆ JG/T249-2009《混凝土抗渗仪》",
      "1、一体式结构设计；",
      "2、采用气囊紧固式密封结构设计；",
      "3、采用大功率、高精度伺服系统控制；",
      "4、具备自动装膜、密封、检测、判断、脱模；",
      "5、每层独立水泵控压、试件独立测控判断；",
      "6、全过程由计算机全自动控制试验，一键操作，无需人工包覆密封材料、自动试验(自动密封、自动加压、自动恒压、自动脱模)，且自动判断渗漏、记录渗漏时间及压力；对每个样品独立控制；",
      "7、两种试验模式可选（逐级加压法和渗透高度法）；",
      "8、增强气压自动密封无需涂抹任何密封材料；"
    ],
    "specifications": [
      {
        "label": "9、试验压力加压方式",
        "value": "自下而上加压；"
      },
      {
        "label": "10、试件桶材料",
        "value": "高强度板材一次压铸成型；"
      },
      {
        "label": "11、每层可装6个试件（独立测控、独立判断）；",
        "value": ""
      },
      {
        "label": "12、共6层可装36个试件；",
        "value": ""
      },
      {
        "label": "13、试件密封材料",
        "value": "增强尼龙、天然橡胶、特殊耐磨、耐高压材质；"
      },
      {
        "label": "14、高层（第六层）",
        "value": "1.78m；"
      },
      {
        "label": "15、低层（第一层）",
        "value": "0.27m；"
      },
      {
        "label": "16、适用试件尺寸",
        "value": "φ175*φ185*150mm;"
      },
      {
        "label": "17、试验机示值相对误差",
        "value": "≤0.005MPa；"
      },
      {
        "label": "18、试验压力分辨率精度",
        "value": "0.001MPa；"
      },
      {
        "label": "19、逐级加压法",
        "value": "±0.005MPa；"
      },
      {
        "label": "20、渗透高度法",
        "value": "±0.005MPa；"
      },
      {
        "label": "21、试验机最大压力1.2MPa;",
        "value": ""
      },
      {
        "label": "22、试件密封方式增强气密封式，所有试件可同时密封，密封总时间≤5min;",
        "value": ""
      },
      {
        "label": "23、试件密封最大压力2.8MPa；",
        "value": ""
      },
      {
        "label": "24、密封压力分辨率0.001MPa；",
        "value": ""
      },
      {
        "label": "25、触控显示器",
        "value": "采用15寸触摸屏，用于试验操作及状态显示;"
      },
      {
        "label": "26、试验数据查询",
        "value": "可以自动形成试验报告、原始记录导出(数据保存时间容量≥5年）、也可将数据上传至用户指定的检测平台系统，可根据客户要求进行定制报表模板;"
      },
      {
        "label": "27、升降驱动方式",
        "value": "伺服电机驱动;"
      },
      {
        "label": "28、设备总功率",
        "value": "瞬时3200W（含气泵）；设备正常工作≤500W;"
      },
      {
        "label": "29、设备外形尺寸",
        "value": "2500mm*980mm*2180mm;"
      },
      {
        "label": "30、供电电源安装条件",
        "value": "220V50Hz,±10％；"
      },
      {
        "label": "31、全自动压模脱模抗渗透试验仪的气囊制造方法；",
        "value": ""
      },
      {
        "label": "32、抗渗透试验仪独立试件的气囊紧固式密封结构；",
        "value": ""
      },
      {
        "label": "33、每层独立水泵控压、试件独立测控判断;",
        "value": ""
      },
      {
        "label": "34、外形设计",
        "value": "立式（6层）、超薄、节省占地空间；"
      },
      {
        "label": "35、操作系统维护",
        "value": "免费维护、更新最新版本的软件；"
      },
      {
        "label": "36、设备噪音",
        "value": "设备噪音运行时不超过70分贝;（试验结束泄气压时除外）"
      },
      {
        "label": "37、设备震动",
        "value": "本设备采用伺服驱动升降，无振动。"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF018",
    "name": "恒温恒湿养护控制仪（高压雾化型）",
    "model": "LDWS-50",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/LDWS-50(高压喷雾）.png",
    "image": "myImages/LDWS-50(（高压喷雾）-Image.png",
    "description": "本产品适用于各实验室做大批量混凝土、水泥制品等试件的养护，集制冷、加热、加湿于一体。\n产品符合GBJ204-83、GBJ177-85、（ISO）GB/T-17671、GB/T 50081-2019《混凝土物理力学性能试验方法标准》。",
    "features": [
      "采用智能仪表全自动控制，操作方便，精度高。",
      "采用高压泵将水雾化，创造高密集湿度效果。",
      "内机采用全不锈钢制造，防锈、防腐蚀，经久耐用。",
      "喷雾头全铜材质，美观，耐用，不易堵塞。"
    ],
    "specifications": [
      {
        "label": "型号",
        "value": "LDWS-50"
      },
      {
        "label": "温度控制仪误差",
        "value": "±1℃"
      },
      {
        "label": "控制温度",
        "value": "20℃±2℃"
      },
      {
        "label": "控制湿度",
        "value": "≥95%"
      },
      {
        "label": "电源电压",
        "value": "380V（三相五线）"
      },
      {
        "label": "电源频率",
        "value": "50Hz"
      },
      {
        "label": "制冷功率",
        "value": "2250W"
      },
      {
        "label": "加热器功率",
        "value": "9000W"
      },
      {
        "label": "最大控制体积m³",
        "value": "50(可根据客户要求定制)"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF019",
    "name": "恒温恒湿养护控制仪（高压雾化）",
    "model": "LDWS-100",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/LDWS-100(高压喷雾）.png",
    "image": "myImages/LDWS-100（高压喷雾）-Image.png",
    "description": "本产品适用于各实验室做大批量混凝土、水泥制品等试件的养护，集制冷、加热、加湿于一体。\n产品符合GBJ204-83、GBJ177-85、（ISO）GB/T-17671、GB/T 50081-2019《混凝土物理力学性能试验方法标准》。",
    "features": [
      "采用智能仪表全自动控制，操作方便，精度高。",
      "采用高压泵将水雾化，创造高密集湿度效果。",
      "内机采用全不锈钢制造，防锈、防腐蚀，经久耐用。",
      "喷雾头全铜材质，美观，耐用，不易堵塞。"
    ],
    "specifications": [
      {
        "label": "型号",
        "value": "LDWS-100"
      },
      {
        "label": "温度控制仪误差",
        "value": "±1℃"
      },
      {
        "label": "控制温度",
        "value": "20℃±2℃"
      },
      {
        "label": "控制湿度",
        "value": "≥95%"
      },
      {
        "label": "电源电压",
        "value": "380V（三相五线）"
      },
      {
        "label": "电源频率",
        "value": "50Hz"
      },
      {
        "label": "制冷功率",
        "value": "3750W"
      },
      {
        "label": "加热器功率",
        "value": "9000W"
      },
      {
        "label": "最大控制体积m³",
        "value": "100(可根据客户要求定制)"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF020",
    "name": "恒温恒湿养护控制仪（超声波雾化）",
    "model": "LDWS-50",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/LDWS-50(超声波喷雾）.png",
    "image": "myImages/LDWS-50（超声波喷雾）-Image.png",
    "description": "本产品适用于各实验室做大批量混凝土、水泥制品等试件的养护，集制冷、加热、加湿于一体。\n产品符合GBJ204-83、GBJ177-85、（ISO）GB/T-17671、GB/T 50081-2019《混凝土物理力学性能试验方法标准》。",
    "features": [
      "采用智能仪表全自动控制，操作方便，精度高。",
      "采用超声波雾化器，利用电子高频震荡，极大节约能源消耗。",
      "内机采用全不锈钢制造，防锈、防腐蚀，经久耐用。"
    ],
    "specifications": [
      {
        "label": "型号",
        "value": "LDWS-50"
      },
      {
        "label": "温度控制仪误差℃",
        "value": "±1"
      },
      {
        "label": "控制温度℃",
        "value": "20±2"
      },
      {
        "label": "控制湿度%",
        "value": "≥95"
      },
      {
        "label": "电源电压",
        "value": "380V（三相五线）"
      },
      {
        "label": "电源频率Hz",
        "value": "50"
      },
      {
        "label": "制冷功率W",
        "value": "2250"
      },
      {
        "label": "加热器功率W",
        "value": "9000"
      },
      {
        "label": "最大控制体积m³",
        "value": "50(可根据客户要求定制)"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF021",
    "name": "恒温恒湿养护控制仪（超声波雾化）",
    "model": "LDWS-100",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/LDWS-100(超声波喷雾）.png",
    "image": "myImages/LDWS-100（超声波喷雾）-Image.png",
    "description": "本产品适用于各实验室做大批量混凝土、水泥制品等试件的养护，集制冷、加热、加湿于一体。\n产品符合GBJ204-83、GBJ177-85、（ISO）GB/T-17671、GB/T 50081-2019《混凝土物理力学性能试验方法标准》。",
    "features": [
      "采用智能仪表全自动控制，操作方便，精度高。",
      "采用超声波雾化器，利用电子高频震荡，极大节约能源消耗。",
      "内机采用全不锈钢制造，防锈、防腐蚀，经久耐用。"
    ],
    "specifications": [
      {
        "label": "型号",
        "value": "LDWS-100"
      },
      {
        "label": "温度控制仪误差℃",
        "value": "±1"
      },
      {
        "label": "控制温度℃",
        "value": "20±2"
      },
      {
        "label": "控制湿度%",
        "value": "≥95"
      },
      {
        "label": "电源电压",
        "value": "380V（三相五线）"
      },
      {
        "label": "电源频率Hz",
        "value": "50"
      },
      {
        "label": "制冷功率W",
        "value": "3750"
      },
      {
        "label": "加热器功率W",
        "value": "9000"
      },
      {
        "label": "最大控制体积m³",
        "value": "100(可根据客户要求定制)"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF022",
    "name": "恒温恒湿控制系统（砂浆）",
    "model": "LDWSA20",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/LDWSA20.png",
    "image": "myImages/LDWSA20-Image.png",
    "description": "该产品适用于水泥厂、建筑施工单位、公路桥梁工程单位以及有关科研质检部门对砂浆、水泥制品等试样进行强度、定型性凝结时间做标准养护。",
    "features": [
      "智能仪表全自动控制。",
      "采用超声波加湿器加湿，专用除湿器除湿。",
      "全自动数显仪表控制，将温度、湿度按养护要求进行设定，控制稳定。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "LDWSA20"
      },
      {
        "label": "控制温度℃",
        "value": "15～25±2（可任意调节）"
      },
      {
        "label": "温度控制仪误差℃",
        "value": "±1"
      },
      {
        "label": "控制湿度％RH",
        "value": "50～80±5（可任意调节）"
      },
      {
        "label": "最大控制面积㎡",
        "value": "10"
      },
      {
        "label": "加热功率W",
        "value": "冷暖空调自备或选配代购"
      },
      {
        "label": "制冷功率W",
        "value": "冷暖空调自备或选配代购"
      },
      {
        "label": "除湿功率W",
        "value": "500"
      },
      {
        "label": "工作电压",
        "value": "AC220V±10%，50Hz"
      },
      {
        "label": "挂壁式控制器安装尺寸mm",
        "value": "450×200×550"
      },
      {
        "label": "除湿机外形尺寸mm",
        "value": "500×400×700"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF023",
    "name": "恒温恒湿环境控制系统",
    "model": "LDHJ-50",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/LDHJ-50.png",
    "image": "myImages/LDHJ-50-Image.png",
    "description": "LDHJ系列恒温恒湿环境控制系统是按国家对砂浆室、水泥室、保温材料室等新标准要求而设计制造的，本产品适用于水泥厂和建筑施工单位、公路桥梁工程单位以及有关科研质检部门对水泥、混凝土、水泥制品等的制作和养护。",
    "features": [
      "采用液晶显示触摸屏控制，将温度、湿度控制在要求范围内。",
      "加热采用不锈钢翅片加热管加热，在低温状态下能迅速升至设定温度。",
      "加湿采用先进的超声波加湿器，加湿为雾状水分子，使室内湿度恒定、均匀。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "LDHJ-50"
      },
      {
        "label": "温度控制仪误差℃",
        "value": "±1"
      },
      {
        "label": "控制温度℃",
        "value": "23±2（20-25±2可调）"
      },
      {
        "label": "控制湿度",
        "value": "50%RH±5%（50%-70%RH±5%可调）"
      },
      {
        "label": "电源电压V",
        "value": "380（三相四线）"
      },
      {
        "label": "制冷、除湿功率W",
        "value": "2500"
      },
      {
        "label": "加热功率W",
        "value": "4500"
      },
      {
        "label": "控制体积m³",
        "value": "50（可根据客户要求定制）"
      },
      {
        "label": "重量kg",
        "value": "200"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF024",
    "name": "恒温恒湿环境控制系统",
    "model": "LDHJ-100",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/LDHJ-100.png",
    "image": "myImages/LDHJ-100-Image.png",
    "description": "LDHJ系列恒温恒湿环境控制系统是按国家对砂浆室、水泥室、保温材料室等新标准要求而设计制造的，本产品适用于水泥厂和建筑施工单位、公路桥梁工程单位以及有关科研质检部门对水泥、混凝土、水泥制品等的制作和养护。",
    "features": [
      "采用液晶显示触摸屏控制，将温度、湿度控制在要求范围内。",
      "加热采用不锈钢翅片加热管加热，在低温状态下能迅速升至设定温度。",
      "加湿采用先进的超声波加湿器，加湿为雾状水分子，使室内湿度恒定、均匀。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "LDHJ-100"
      },
      {
        "label": "温度控制仪误差℃",
        "value": "±1"
      },
      {
        "label": "控制温度℃",
        "value": "23±2（20-25±2可调）"
      },
      {
        "label": "控制湿度",
        "value": "50%RH±5%（50%-70%RH±5%可调）"
      },
      {
        "label": "电源电压V",
        "value": "380（三相四线）"
      },
      {
        "label": "制冷、除湿功率W",
        "value": "4000"
      },
      {
        "label": "加热功率W",
        "value": "7500"
      },
      {
        "label": "控制体积m³",
        "value": "100（可根据客户要求定制）"
      },
      {
        "label": "重量kg",
        "value": "200"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF025",
    "name": "养护室温湿度自动控制仪",
    "model": "BYS-3",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/BYS-3.png",
    "image": "myImages/BYS-3-Image.png",
    "description": "此设备适用于各水泥制品厂和建筑施工单位、公路桥梁工程单位以及有关科研质检部门对水泥、混凝土、水泥制品试样进行强度、定型性凝结时间的标准养护。",
    "features": [
      "采用加厚不锈钢加热水箱，防锈、防腐蚀。",
      "控制器内置大额继电器，可直接与水箱、加湿器、空调相连，直接调控温度、湿度。",
      "负离子加湿器，确保室内湿度达到90％RH，环保高效。"
    ],
    "specifications": [
      {
        "label": "温度控制仪误差℃",
        "value": "±1"
      },
      {
        "label": "控温范围℃",
        "value": "20±2"
      },
      {
        "label": "控制湿度",
        "value": "≥95%"
      },
      {
        "label": "电源电压",
        "value": "AC220V±10%"
      },
      {
        "label": "电源频率Hz",
        "value": "50"
      },
      {
        "label": "制冷功率",
        "value": "1～4千大卡（客户自备防水空调）"
      },
      {
        "label": "加热器功率W",
        "value": "3000"
      },
      {
        "label": "最大控制体积㎡",
        "value": "15(按面积可另设计)"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF026",
    "name": "氯离子快速含量分析仪",
    "model": "LDCL-B",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/LDCL-B.png",
    "image": "myImages/LDCL-B-Image.png",
    "description": "本产品通过配备的专业软件及化学抗干扰试剂在室温下快速测定混凝土、砂石子、水泥、拌合水等无机材料的水溶性氯离子含量。\n\n该产品符合标准如下：\nGB/T 50476-2008 《混凝土结构耐久性设计规范》\nJTJ 270-98 《水运工程混凝土试验规程》\nSL 352-2006 《水工混凝土试验规程》\nJGJ 206-2010 《海砂混凝土应用技术规范》",
    "features": [
      "采用离子选择电极法；电极的重复性可以达到±2%。",
      "E型电极采用进口电极，数据更精准。",
      "本测量系统基于ARM内核处理器，显示控制采用触摸屏；实时显示测量数",
      "据、系统时间、设备状态，试验结束可保存数据打印输出报告。",
      "该仪器特有抗离子干扰剂，能有效去除氰、氨等离子的氧化效应以及锰、铅等金属离子的络合效应。"
    ],
    "specifications": [
      {
        "label": "型号",
        "value": "LDCL-B"
      },
      {
        "label": "测量范围mV",
        "value": "50～999.99"
      },
      {
        "label": "电极配置",
        "value": "国产2根电极"
      },
      {
        "label": "电极测量范围mol/L",
        "value": "1×10-2～5×10-5"
      },
      {
        "label": "电源电压",
        "value": "AC220V±10%，50Hz"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF027",
    "name": "氯离子快速含量分析仪",
    "model": "LDCL-E",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/LDCL-E.png",
    "image": "myImages/LDCL-E-Image.png",
    "description": "本产品通过配备的专业软件及化学抗干扰试剂在室温下快速测定混凝土、砂石子、水泥、拌合水等无机材料的水溶性氯离子含量。\n\n该产品符合标准如下：\nGB/T 50476-2008 《混凝土结构耐久性设计规范》\nJTJ 270-98 《水运工程混凝土试验规程》\nSL 352-2006 《水工混凝土试验规程》\nJGJ 206-2010 《海砂混凝土应用技术规范》",
    "features": [
      "采用离子选择电极法；电极的重复性可以达到±2%。",
      "E型电极采用进口电极，数据更精准。",
      "本测量系统基于ARM内核处理器，显示控制采用触摸屏；实时显示测量数",
      "据、系统时间、设备状态，试验结束可保存数据打印输出报告。",
      "该仪器特有抗离子干扰剂，能有效去除氰、氨等离子的氧化效应以及锰、铅等金属离子的络合效应。"
    ],
    "specifications": [
      {
        "label": "测量范围mV",
        "value": "50～999.99"
      },
      {
        "label": "电极配置",
        "value": "国产2根电极/进口1根电极"
      },
      {
        "label": "电极测量范围mol/L",
        "value": "1×10-2～5×10-5/1×10-2～5×10-5"
      },
      {
        "label": "电源电压",
        "value": "AC220V±10%，50Hz"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF028",
    "name": "数显混凝土贯入阻力仪",
    "model": "HG-1000",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/HG-1000.png",
    "image": "myImages/HG-1000-Image.png",
    "description": "本产品适用于各类水泥、外加剂以及不同混凝土配合比，不同气温环境下的混凝土拌合物，凝结时间的试验。产品符合GB/T50080，JGTE30标准要求。",
    "features": [
      "采用最新控制软件，能够自动将压力转换成压力值。",
      "液晶屏显示，操作方便，直接读数。",
      "试模采用全铝材质，防锈，耐用，耐磨。"
    ],
    "specifications": [
      {
        "label": "试料模上口径mm",
        "value": "Φ160"
      },
      {
        "label": "试料模下口径mm",
        "value": "Φ150"
      },
      {
        "label": "试验温度℃",
        "value": "20±2"
      },
      {
        "label": "最 大贯入力N",
        "value": "1000"
      },
      {
        "label": "最小分度值N",
        "value": "0.1"
      },
      {
        "label": "显值误差",
        "value": "<±1%"
      },
      {
        "label": "贯入方式",
        "value": "手动"
      },
      {
        "label": "测针面积mm²",
        "value": "100、50、20"
      },
      {
        "label": "电源",
        "value": "220V，50Hz"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF029",
    "name": "自动调压混凝土抗渗仪",
    "model": "HP-4.0",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/HP-4.0.png",
    "image": "myImages/HP-4.0-Image.png",
    "description": "本产品适用于各级工程质量监督检测部门，施工单位试验室，科研单位，大专院校对混凝土抗渗性能的检测和抗渗标号的测定，同时可用于其他建筑材料透气测定和质量检测。产品符合GB/T50081标准要求。",
    "features": [
      "机架采用优质型钢焊接而成，台面选用优质不锈钢制成，经久耐用，防锈，防腐蚀。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "HP-4.0"
      },
      {
        "label": "最大试验力MPa",
        "value": "4"
      },
      {
        "label": "工作方式",
        "value": "自动加压"
      },
      {
        "label": "试验试件数（个）",
        "value": "6"
      },
      {
        "label": "试模上口内径mm",
        "value": "Φ175"
      },
      {
        "label": "试模下口内径mm",
        "value": "Φ185"
      },
      {
        "label": "试模高度mm",
        "value": "150"
      },
      {
        "label": "电动机功率W",
        "value": "80"
      },
      {
        "label": "电动机转速r/min",
        "value": "136"
      },
      {
        "label": "柱塞泵柱塞直径mm",
        "value": "Φ10"
      },
      {
        "label": "柱塞泵往复频率（次/min）",
        "value": "136"
      },
      {
        "label": "柱塞泵流量L/min",
        "value": "0.11"
      },
      {
        "label": "电源电压",
        "value": "AC380V±10%，50Hz"
      },
      {
        "label": "外形尺寸mm",
        "value": "1090×710×920"
      },
      {
        "label": "重量kg",
        "value": "185"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF030",
    "name": "强制式单卧轴混凝土搅拌机",
    "model": "SJD-30",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/SJD-30.png",
    "image": "myImages/SJD-30-Image.png",
    "description": "本产品适用于塑性、干硬性、轻骨料混凝土及各种灰浆、砂浆的搅拌，现已被建筑科研单位和建筑公司及混凝土构件单位试验室广泛使用。",
    "features": [
      "使用倾翻卸料的助力装置，操作方便、卸料速度快。",
      "采用加厚搅拌叶，使用寿命长。",
      "搅拌锅壁厚6mm，经久耐用，不易变形。（搅拌锅壁厚可订制8mm/10mm/12mm）",
      "采用同轴式传动箱，大大减轻了机器的负荷，减少了能量的消耗。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "SJD-30"
      },
      {
        "label": "进料容量L",
        "value": "48"
      },
      {
        "label": "出料容量L",
        "value": "30"
      },
      {
        "label": "最大出料容量L",
        "value": "33"
      },
      {
        "label": "搅拌均匀时间s",
        "value": "≦45"
      },
      {
        "label": "搅拌轴转速 r/min",
        "value": "47"
      },
      {
        "label": "电机功率kW",
        "value": "1.5"
      },
      {
        "label": "电源电压",
        "value": "AC380V±10%，50Hz"
      },
      {
        "label": "外形尺寸mm",
        "value": "1130×400×900"
      },
      {
        "label": "重量kg",
        "value": "190"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF031",
    "name": "强制式单卧轴混凝土搅拌机",
    "model": "SJD-60",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/SJD-60.png",
    "image": "myImages/SJD-60-Image.png",
    "description": "本产品适用于塑性、干硬性、轻骨料混凝土及各种灰浆、砂浆的搅拌，现已被建筑科研单位和建筑公司及混凝土构件单位试验室广泛使用。",
    "features": [
      "使用倾翻卸料的助力装置，操作方便、卸料速度快。",
      "采用加厚搅拌叶，使用寿命长。",
      "搅拌锅壁厚6mm，经久耐用，不易变形。（搅拌锅壁厚可订制8mm/10mm/12mm）",
      "采用同轴式传动箱，大大减轻了机器的负荷，减少了能量的消耗。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "SJD-60"
      },
      {
        "label": "进料容量L",
        "value": "110"
      },
      {
        "label": "出料容量L",
        "value": "60"
      },
      {
        "label": "最大出料容量L",
        "value": "66"
      },
      {
        "label": "搅拌均匀时间s",
        "value": "≦45"
      },
      {
        "label": "搅拌轴转速 r/min",
        "value": "47"
      },
      {
        "label": "电机功率kW",
        "value": "2.2"
      },
      {
        "label": "电源电压",
        "value": "AC380V±10%，50Hz"
      },
      {
        "label": "外形尺寸mm",
        "value": "1520×530×1060"
      },
      {
        "label": "重量kg",
        "value": "280"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF032",
    "name": "压力泌水仪",
    "model": "SY-2",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/SY-2.png",
    "image": "myImages/SY-2-Image.png",
    "description": "本公司生产的 SY-2 混凝土压力泌水仪根据国际 GB/T50080-2016标准制作，主要是测定泵送混凝土在一定压力状态下的泌水量，进而计算泌水率及压力泌水率比的专用仪器。用于骨料粒径不大于 40mm 的混凝土拌合物压力泌水测定。测值准确、操作简便、体积小、重量轻、脱模方便，其各项技术指标符合国家JC473-92标准。该仪器主要由液压千斤顶、压力表及上盖活塞、试料筒、底座等组成。",
    "features": [
      "该仪器有测值准确、操作简便、体积小、重量轻、脱模方便等优点。",
      "缸筒内部打磨处理，内部光洁度高",
      "缸体防锈处理，经久耐用"
    ],
    "specifications": [
      {
        "label": "型号",
        "value": "SY-2"
      },
      {
        "label": "压力表最大量程",
        "value": "60MPa"
      },
      {
        "label": "最小分度离值",
        "value": "不大于0.1 MPa"
      },
      {
        "label": "缸体内径",
        "value": "125+0.02mm"
      },
      {
        "label": "缸体内高",
        "value": "200+0.2mm"
      },
      {
        "label": "工作活塞直径",
        "value": "125mm"
      },
      {
        "label": "工作活塞压强",
        "value": "3.2MPa"
      },
      {
        "label": "筛网孔径",
        "value": "0.315mm(60)目"
      },
      {
        "label": "净重",
        "value": "20kg"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF033",
    "name": "混凝土振动台",
    "model": "1000×1000",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/1000×1000.png",
    "image": "myImages/1000×1000-Image.png",
    "description": "本产品适用于建筑企业、预制构件厂、商品混凝土厂、建筑工程质量检测单位及科研院校、试验室的混凝土试块振实成型,产品符合JG/T3020-94《混凝土试验用振动台》建工行业标准要求的技术要求。振动台主要由台面、底架、振动器弹簧等部件组成。（台面尺寸、电压等均可订制）",
    "features": [],
    "specifications": [
      {
        "label": "规格型号",
        "value": "1000×1000"
      },
      {
        "label": "台面尺寸mm",
        "value": "1000×1000"
      },
      {
        "label": "振动台频率（次/min）",
        "value": "2860"
      },
      {
        "label": "载荷kg",
        "value": "200"
      },
      {
        "label": "振幅mm",
        "value": "0.3～0.6"
      },
      {
        "label": "电源功率kW",
        "value": "1.5"
      },
      {
        "label": "电源电压",
        "value": "AC380V±10%，50Hz"
      },
      {
        "label": "重量kg",
        "value": "100"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF034",
    "name": "混凝土振动台",
    "model": "500×500",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/500×500.png",
    "image": "myImages/500×500-Image.png",
    "description": "本产品适用于建筑企业、预制构件厂、商品混凝土厂、建筑工程质量检测单位及科研院校、试验室的混凝土试块振实成型,产品符合JG/T3020-94《混凝土试验用振动台》建工行业标准要求的技术要求。振动台主要由台面、底架、振动器弹簧等部件组成。（台面尺寸、电压等均可订制）",
    "features": [],
    "specifications": [
      {
        "label": "规格型号",
        "value": "500×500"
      },
      {
        "label": "台面尺寸mm",
        "value": "500×500"
      },
      {
        "label": "振动台频率（次/min）",
        "value": "2860"
      },
      {
        "label": "振幅mm",
        "value": "0.3～0.6"
      },
      {
        "label": "电源功率kW",
        "value": "0.55"
      },
      {
        "label": "电源电压",
        "value": "AC380V±10%，50Hz"
      },
      {
        "label": "重量kg",
        "value": "65"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF035",
    "name": "混凝土磁力振动台",
    "model": "ZH.DG-80",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/ZH.DG-80.png",
    "image": "myImages/ZH.DG-80-Image.png",
    "description": "本产品适用于建筑企业、预制构件厂、商品混凝土厂、建筑工程质量检测单位及科研院校、试验室的混凝土试块振实成型,产品符合JG/T3020-94《混凝土试验用振动台》建工行业标准要求的技术要求。",
    "features": [],
    "specifications": [
      {
        "label": "振动台台面尺寸",
        "value": "800*600mm"
      },
      {
        "label": "电源电压",
        "value": "380伏"
      },
      {
        "label": "总功率",
        "value": "1.6千瓦"
      },
      {
        "label": "振动形式",
        "value": "定向垂直间隙振动"
      },
      {
        "label": "垂直振幅",
        "value": "0.5±0.02mm"
      },
      {
        "label": "振动频率",
        "value": "50±3HZ"
      },
      {
        "label": "台面振幅均匀度",
        "value": "≤15%"
      },
      {
        "label": "空载振动噪声",
        "value": "≤85分贝"
      },
      {
        "label": "同时一次成型试件数量",
        "value": "150毫米立方体6个"
      },
      {
        "label": "100毫米立方体三联试模3条",
        "value": ""
      },
      {
        "label": "电磁铁吸力（每个）",
        "value": "≥80公斤"
      },
      {
        "label": "振动时间",
        "value": "按要求随意设置，最大振动时间为999秒"
      },
      {
        "label": "外型尺寸",
        "value": "800*600*530mm"
      },
      {
        "label": "净重",
        "value": "200kg"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF036",
    "name": "混凝土含气量测定仪",
    "model": "CA-3",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/CA-3.png",
    "image": "myImages/CA-3-Image.png",
    "description": "本产品主要用来测定新拌混凝土含气量,适用于普通混凝土,流动混凝土,干硬性混凝土,不适用于轻骨料混凝土。符合ANS1/ASTM C231-78标准。",
    "features": [],
    "specifications": [
      {
        "label": "混凝土拌合料粒径不得大于40mm",
        "value": ""
      },
      {
        "label": "最大含气量测定值为8%",
        "value": ""
      },
      {
        "label": "混凝土量钵尺寸",
        "value": "容积7L，内径与高度比为1:1"
      },
      {
        "label": "显示仪表",
        "value": "压力值量程0.25Mpa，分度值0.005Mpa。含气量值量程8%，最小读数0.1%"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF037",
    "name": "混凝土含气量测定仪",
    "model": "HC-7L",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/HC-7L.png",
    "image": "myImages/HC-7L-Image.png",
    "description": "本产品测定混凝土拌合物中的含气量，适用于集料粒径不大于40mm,含气量不大于10%，有塌落度的混凝土。该设备测定方法符合GBJ80-85《普通混凝土拌合物性能试验方法》，关于混凝土拌合物含气量试验的有关规定。",
    "features": [],
    "specifications": [
      {
        "label": "量钵容积L",
        "value": "7（其内径与深度相等）"
      },
      {
        "label": "含气量量程mm",
        "value": "≤40"
      },
      {
        "label": "使用粗骨料的最大粒径mm",
        "value": "≤40"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF038",
    "name": "混凝土收缩膨胀仪",
    "model": "HSP-540",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/HSP-540.png",
    "image": "myImages/HSP-540-Image.png",
    "description": "HSP-540型补偿混凝土收缩膨胀仪符合GBJ82—85的规定，是用于测量混凝土试件在某一环境条件下，硬化过程中长度（体积）发生变化的专用仪器，可为建筑科学研究院所、教育部门、设计和施工单位对混凝土的特性进行研究、教育、质量控制和检测提供可靠依据。",
    "features": [],
    "specifications": [
      {
        "label": "测量范围mm",
        "value": "534～545"
      },
      {
        "label": "标准杆长度mm",
        "value": "540±0.2"
      },
      {
        "label": "百分表量程mm",
        "value": "0～10"
      },
      {
        "label": "百分表最小刻度值mm",
        "value": "0.01"
      },
      {
        "label": "试模规格mm",
        "value": ""
      },
      {
        "label": "100×100×515",
        "value": ""
      },
      {
        "label": "150×150×515",
        "value": ""
      },
      {
        "label": "200×200×515",
        "value": ""
      },
      {
        "label": "外形尺寸mm",
        "value": "670×240×180"
      },
      {
        "label": "重量kg",
        "value": "12"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF039",
    "name": "（混凝土用）比长仪",
    "model": "DZBY-354",
    "category": "路达混凝土检测产品系列",
    "thumbnail": "myImages/DZBY-354.png",
    "image": "myImages/DZBY-354-Image.png",
    "description": "砂浆用DZBY-158型、DZBY-15-176型、混凝土用DZBY-354型比长仪，它是测量长度变化的精密仪器，它适用于水泥膨胀剂生产厂、水泥制品厂、科研单位、大专院校、建工部门等，用来测量膨胀水泥的线膨胀率、自应力水泥的自由膨胀率和限制膨胀率、水泥胶砂及混凝土限制自由膨胀率等。",
    "features": [],
    "specifications": [
      {
        "label": "千分表精度",
        "value": "0.001mm；"
      },
      {
        "label": "千分表最大量度",
        "value": "10mm；"
      },
      {
        "label": "测量范围",
        "value": "354~364mm。"
      },
      {
        "label": "测头平面直径",
        "value": "Φ6.5mm"
      },
      {
        "label": "标准杆基长",
        "value": "354mm"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF040",
    "name": "恒温恒湿养护箱",
    "model": "HBY-1",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/HBY-1.png",
    "image": "myImages/HBY-1-Image.png",
    "description": "干缩试验箱根据国家对水泥，混凝土，及砂浆的干缩试验标准，和国家建材研究院及有关部门提供的技术资料而设计制造的。它适用于建筑和建工部门，做混凝土试体、砂浆试体及各种试件的养护之用。\n产品符合GB2423标准要求。",
    "features": [
      "内胆采用不锈钢焊接而成；",
      "外壳采用冷轧板折弯成型焊接喷漆；",
      "中间隔层保温采用聚胺脂发泡材料；",
      "搁架用不锈钢型材制造；",
      "整体结构坚固，造型美观，耐腐蚀性好；",
      "温湿仪采用设定，显示双数显，具有分辨率高、直观、调节方便、控制精度高等优点。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "HBY-1"
      },
      {
        "label": "控制温度℃",
        "value": "20～60±2"
      },
      {
        "label": "控制湿度％RH",
        "value": "45～80±5"
      },
      {
        "label": "加热功率W",
        "value": "500"
      },
      {
        "label": "制冷功率W",
        "value": "145"
      },
      {
        "label": "电源电压",
        "value": "AC220V±10%，50Hz"
      },
      {
        "label": "工作室尺寸mm",
        "value": "600×500×600"
      },
      {
        "label": "外形尺寸mm",
        "value": "700×650×1500"
      },
      {
        "label": "重量kg",
        "value": "185"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF041",
    "name": "恒温恒湿养护箱",
    "model": "TLS-350B",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/TLS-350B.png",
    "image": "myImages/TLS-350B-Image.png",
    "description": "干缩试验箱根据国家对水泥，混凝土，及砂浆的干缩试验标准，和国家建材研究院及有关部门提供的技术资料而设计制造的。它适用于建筑和建工部门，做混凝土试体、砂浆试体及各种试件的养护之用。\n产品符合GB2423标准要求。",
    "features": [
      "内胆采用不锈钢焊接而成；",
      "外壳采用冷轧板折弯成型焊接喷漆；",
      "中间隔层保温采用聚胺脂发泡材料；",
      "搁架用不锈钢型材制造；",
      "整体结构坚固，造型美观，耐腐蚀性好；",
      "温湿仪采用设定，显示双数显，具有分辨率高、直观、调节方便、控制精度高等优点。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "TLS-350B"
      },
      {
        "label": "控制温度℃",
        "value": "20～60±2"
      },
      {
        "label": "控制湿度％RH",
        "value": "45～80±5"
      },
      {
        "label": "加热功率W",
        "value": "500"
      },
      {
        "label": "制冷功率W",
        "value": "145"
      },
      {
        "label": "电源电压",
        "value": "AC220V±10%，50Hz"
      },
      {
        "label": "工作室尺寸mm",
        "value": "600×500×600"
      },
      {
        "label": "外形尺寸mm",
        "value": "700×650×1500"
      },
      {
        "label": "重量kg",
        "value": "185"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF042",
    "name": "高分子增强复合防水片材不透水仪",
    "model": "LD-26518",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/LD-26518.png",
    "image": "myImages/LD-26518-Image.png",
    "description": "符合新标准GB/T 26518-2023《高分子增强复合防水片材》",
    "features": [],
    "specifications": [
      {
        "label": "控制方式",
        "value": "触摸屏"
      },
      {
        "label": "试验压力",
        "value": "0.1~0.4MPa"
      },
      {
        "label": "腔体外径",
        "value": "320mm"
      },
      {
        "label": "高度",
        "value": "100mm"
      },
      {
        "label": "试件数量",
        "value": "1个"
      },
      {
        "label": "试件尺寸",
        "value": "Ф380mm"
      },
      {
        "label": "压力表",
        "value": "0-1.6Mpa"
      },
      {
        "label": "精确度等级",
        "value": "2.5级"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF043",
    "name": "中空玻璃露点仪",
    "model": "LDY-III",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/LDY-III.png",
    "image": "myImages/LDY-III-Image.png",
    "description": "LDY－IlI型中空玻璃露点仪是我公司研制开发的第三代产品，较前几代产品具有体积小、重量轻、无噪音、操作方便等特点。适合于建筑中空玻璃露点的实验室检测。\n\n依据GB/T11944-2012标准，采用先进的制冷技术使紫铜冷测头在短时间内降到低于-60℃，并通过高精度仪表自动控制测试温度。",
    "features": [],
    "specifications": [
      {
        "label": "冷测头的温度",
        "value": "<-60℃"
      },
      {
        "label": "温度分辨率",
        "value": "0.1℃"
      },
      {
        "label": "测温精度",
        "value": "±0.5℃"
      },
      {
        "label": "电压",
        "value": "交流220V，50HZ"
      },
      {
        "label": "总功率",
        "value": "1.5kW"
      },
      {
        "label": "露点仪控制箱尺寸",
        "value": "900×650×900mm"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF044",
    "name": "卧式低温试验箱",
    "model": "DW-25",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/DW-25（卧式）.png",
    "image": "myImages/DW-25-Image.png",
    "description": "我厂生产的低温试验箱,具有设计合理、制冷效率高、噪音小、外型美观大方等优点，本产品广泛用于建材、医药、科研等部门作低温试验、老化试验。",
    "features": [
      "保温层由进口原料发泡而成，保温效果好、省电；",
      "最新设计五面蒸发管路，具有温度均匀、防止泄漏等特点；",
      "具有设计合理工艺先进、制冷效率高、噪音小、外型美观大方等优点。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "DW-25"
      },
      {
        "label": "温控范围℃",
        "value": "-25～室温"
      },
      {
        "label": "压缩机功率W",
        "value": "200"
      },
      {
        "label": "电压V",
        "value": "220"
      },
      {
        "label": "工作室尺寸mm",
        "value": "800×400×650"
      },
      {
        "label": "外形尺寸mm",
        "value": "940×550×850"
      },
      {
        "label": "重量kg",
        "value": "120"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF045",
    "name": "卧式低温试验箱",
    "model": "DW-40",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/DW-40（卧式）.png",
    "image": "myImages/DW-30-Image.png",
    "description": "我厂生产的低温试验箱,具有设计合理、制冷效率高、噪音小、外型美观大方等优点，本产品广泛用于建材、医药、科研等部门作低温试验、老化试验。",
    "features": [
      "保温层由进口原料发泡而成，保温效果好、省电；",
      "最新设计五面蒸发管路，具有温度均匀、防止泄漏等特点；",
      "具有设计合理工艺先进、制冷效率高、噪音小、外型美观大方等优点。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "DW-40"
      },
      {
        "label": "温控范围℃",
        "value": "-40～室温"
      },
      {
        "label": "压缩机功率W",
        "value": "230"
      },
      {
        "label": "电压V",
        "value": "220"
      },
      {
        "label": "工作室尺寸mm",
        "value": "880×405×600"
      },
      {
        "label": "外形尺寸mm",
        "value": "1020×560×800"
      },
      {
        "label": "重量kg",
        "value": "140"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF046",
    "name": "卧式低温试验箱",
    "model": "DW-60",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/DW-60（卧式）.png",
    "image": "myImages/DW-60-Image.png",
    "description": "我厂生产的低温试验箱,具有设计合理、制冷效率高、噪音小、外型美观大方等优点，本产品广泛用于建材、医药、科研等部门作低温试验、老化试验。",
    "features": [
      "保温层由进口原料发泡而成，保温效果好、省电；",
      "最新设计五面蒸发管路，具有温度均匀、防止泄漏等特点；",
      "具有设计合理工艺先进、制冷效率高、噪音小、外型美观大方等优点。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "DW-60"
      },
      {
        "label": "温控范围℃",
        "value": "-60～室温"
      },
      {
        "label": "压缩机功率W",
        "value": "250"
      },
      {
        "label": "电压V",
        "value": "220"
      },
      {
        "label": "工作室尺寸mm",
        "value": "600×500×650"
      },
      {
        "label": "外形尺寸mm",
        "value": "750×650×850"
      },
      {
        "label": "重量kg",
        "value": "160"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF047",
    "name": "低温试验箱（立式）",
    "model": "DW-40",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/DW-40（立式）.png",
    "image": "myImages/DW-40（立式）-Image.png",
    "description": "设备采用进口压缩机，高精度传感器，具有控温精度高，运行平稳的优点。",
    "features": [
      "采用进口压缩机组，不锈钢内胆；",
      "保温效果好、省电；",
      "最新设计五面蒸发管路，具有温度均匀、防止泄漏等特点；",
      "具有设计合理工艺先进、制冷效率高、噪音小、外型美观大方等优点。"
    ],
    "specifications": [
      {
        "label": "温控范围℃",
        "value": "-40～室温"
      },
      {
        "label": "压缩机功率W",
        "value": "约2000"
      },
      {
        "label": "电压",
        "value": "AC220V±10%，50Hz"
      },
      {
        "label": "工作室尺寸mm",
        "value": "550×500×600"
      },
      {
        "label": "外形尺寸mm",
        "value": "820×780×1650"
      },
      {
        "label": "重量kg",
        "value": "180"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF048",
    "name": "可程式恒温恒湿试验箱",
    "model": "LDGD-80",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/LDGD-80.png",
    "image": "myImages/LDGD-80-Image.png",
    "description": "可程式恒温恒湿试验箱，又称模拟环境试验箱和高低温交变湿热试验箱，其可靠，精确度及稳定度极为重要，广泛用于确定电工、电子产品对高低温及湿热环境的适应性（特别是产品的电气性能和机械性能的变化情况），也可用于检查试样耐受某些腐蚀的能力。\n设备相关标准：GB10586、 GB/T2423.2—93（等效于IEC68—2—3）",
    "features": [
      "适用范围广，程序可根据自身需求进行编程",
      "内外皆使用不锈钢制作，造型没关，耐腐蚀型好"
    ],
    "specifications": [
      {
        "label": "温度范围",
        "value": "-40℃~+150℃（选购时温度）"
      },
      {
        "label": "湿度范围",
        "value": "20%~98%RH"
      },
      {
        "label": "温湿度控制精度",
        "value": "±1.0℃；±2%RH"
      },
      {
        "label": "*注意",
        "value": "以上性能数据，需在工作后温度稳定30分钟后测量。"
      },
      {
        "label": "温湿度分面均匀",
        "value": "±2.0℃；±3.0%RH"
      },
      {
        "label": "*注意",
        "value": "以上性能数据，需距测试区每一壁面1/6位置测试量，且需在工作后温湿度稳定30分钟后测量。"
      },
      {
        "label": "内箱尺寸",
        "value": "400×400×550（W×D×H）"
      },
      {
        "label": "电源",
        "value": "220V"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF049",
    "name": "开关插座潮湿试验箱",
    "model": "CSX-280",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/CSX-280.png",
    "image": "myImages/CSX-280-Image.png",
    "description": "设备主要用于电子产品开关插座的温湿度试验。\n符合GB/T2423.3-2006电工电子产品环境试验、GB/T16915.1-2003家用和类似用途固定式电器装置开关中防潮要求所设计生产的。",
    "features": [
      "内胆采用不锈钢焊接而成；",
      "外壳采用冷轧板折弯成型焊接喷漆；",
      "中间隔层保温采用聚胺脂发泡材料；",
      "搁架用不锈钢型材制造；",
      "整体结构坚固，造型美观，耐腐蚀性好；",
      "温湿仪采用设定，显示双数显，具有分辨率高、直观、调节方便、控制精度高等优点。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "CSX-280"
      },
      {
        "label": "加热功率",
        "value": "500W"
      },
      {
        "label": "制冷功率",
        "value": "145W"
      },
      {
        "label": "控制温度",
        "value": "40℃±2℃"
      },
      {
        "label": "湿度",
        "value": "93±3%RH"
      },
      {
        "label": "电压",
        "value": "AC220V±10%，50Hz"
      },
      {
        "label": "工作室尺寸mm",
        "value": "550×550×800"
      },
      {
        "label": "外形尺寸mm",
        "value": "650×700×1650"
      },
      {
        "label": "重量kg",
        "value": "200"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF050",
    "name": "老化试验箱",
    "model": "401A型",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/401A型.png",
    "image": "myImages/401A型-Image.png",
    "description": "本产品适用于科研单位和工厂作可塑性材料（橡胶、塑料），电气绝缘及其他材料的老化试验，产品符合GB/T7762标准要求。",
    "features": [
      "本箱的最高使用温度为200℃；",
      "工作温度可从50℃起至最高温度止，在此范围内可任意选定工作温度；",
      "试验室内有低速旋转的试品转盘两只；",
      "箱内自动控制系统使温度恒温。"
    ],
    "specifications": [
      {
        "label": "控制温度℃",
        "value": "室温～200"
      },
      {
        "label": "温控仪精度℃",
        "value": "±1"
      },
      {
        "label": "转盘转速r/min",
        "value": "5～10"
      },
      {
        "label": "加热功率W",
        "value": "2200"
      },
      {
        "label": "电源电压V",
        "value": "AC220V±10%，50Hz"
      },
      {
        "label": "工作室尺寸mm",
        "value": "450×450×500"
      },
      {
        "label": "外形尺寸mm",
        "value": "780×660×1160"
      },
      {
        "label": "重量kg",
        "value": "100"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF051",
    "name": "电热恒温鼓风干燥箱",
    "model": "101-1A",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/101-1A.png",
    "image": "myImages/101-1A-Image.png",
    "description": "干燥箱适用于各种试件进行烘培、干燥、热处理及其它加热实验，工作室内装有鼓风机，能促进室内的空气对流，达到恒温的环境。\n本干燥箱结构精密，控温灵敏，操作简便，工厂及科学研究院单位等均可采用。",
    "features": [
      "本干燥箱结构精密，控温灵敏准确，操作简便；",
      "工作室内温度采用自动控制系统，保持恒温状态；",
      "工作室内装有鼓风机，促进机械空气对流；"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "101-1A"
      },
      {
        "label": "工作电压V",
        "value": "220"
      },
      {
        "label": "加热器总功率kW",
        "value": "1.5"
      },
      {
        "label": "工作温度℃",
        "value": "室温～250"
      },
      {
        "label": "按温灵敏度℃",
        "value": "±1"
      },
      {
        "label": "工作室尺寸mm",
        "value": "450×350×450"
      },
      {
        "label": "外形尺寸mm",
        "value": "750×500×720"
      },
      {
        "label": "重量kg",
        "value": "65"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF052",
    "name": "电热恒温鼓风干燥箱",
    "model": "101-2A",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/101-2A.png",
    "image": "myImages/101-2A-Image.png",
    "description": "干燥箱适用于各种试件进行烘培、干燥、热处理及其它加热实验，工作室内装有鼓风机，能促进室内的空气对流，达到恒温的环境。\n本干燥箱结构精密，控温灵敏，操作简便，工厂及科学研究院单位等均可采用。",
    "features": [
      "本干燥箱结构精密，控温灵敏准确，操作简便；",
      "工作室内温度采用自动控制系统，保持恒温状态；",
      "工作室内装有鼓风机，促进机械空气对流；"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "101-2A"
      },
      {
        "label": "工作电压V",
        "value": "220"
      },
      {
        "label": "加热器总功率kW",
        "value": "2.5"
      },
      {
        "label": "工作温度℃",
        "value": "室温～250"
      },
      {
        "label": "按温灵敏度℃",
        "value": "±1"
      },
      {
        "label": "工作室尺寸mm",
        "value": "550×450×550"
      },
      {
        "label": "外形尺寸mm",
        "value": "850×570×810"
      },
      {
        "label": "重量kg",
        "value": "86"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF053",
    "name": "电热恒温鼓风干燥箱",
    "model": "101-3A",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/101-3A.png",
    "image": "myImages/101-3A-Image.png",
    "description": "干燥箱适用于各种试件进行烘培、干燥、热处理及其它加热实验，工作室内装有鼓风机，能促进室内的空气对流，达到恒温的环境。\n本干燥箱结构精密，控温灵敏，操作简便，工厂及科学研究院单位等均可采用。",
    "features": [
      "本干燥箱结构精密，控温灵敏准确，操作简便；",
      "工作室内温度采用自动控制系统，保持恒温状态；",
      "工作室内装有鼓风机，促进机械空气对流；"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "101-3A"
      },
      {
        "label": "工作电压V",
        "value": "220"
      },
      {
        "label": "加热器总功率kW",
        "value": "3.5"
      },
      {
        "label": "工作温度℃",
        "value": "室温～250"
      },
      {
        "label": "按温灵敏度℃",
        "value": "±1"
      },
      {
        "label": "工作室尺寸mm",
        "value": "600×500×750"
      },
      {
        "label": "外形尺寸mm",
        "value": "970×650×1020"
      },
      {
        "label": "重量kg",
        "value": "123"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF054",
    "name": "电热恒温鼓风干燥箱",
    "model": "101-4A",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/101-4A.png",
    "image": "myImages/101-4A-Image.png",
    "description": "干燥箱适用于各种试件进行烘培、干燥、热处理及其它加热实验，工作室内装有鼓风机，能促进室内的空气对流，达到恒温的环境。\n本干燥箱结构精密，控温灵敏，操作简便，工厂及科学研究院单位等均可采用。",
    "features": [
      "本干燥箱结构精密，控温灵敏准确，操作简便；",
      "工作室内温度采用自动控制系统，保持恒温状态；",
      "工作室内装有鼓风机，促进机械空气对流；"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "101-4A"
      },
      {
        "label": "工作电压V",
        "value": "380，带零"
      },
      {
        "label": "加热器总功率kW",
        "value": "6"
      },
      {
        "label": "工作温度℃",
        "value": "室温～250"
      },
      {
        "label": "按温灵敏度℃",
        "value": "±1"
      },
      {
        "label": "工作室尺寸mm",
        "value": "800×800×1000"
      },
      {
        "label": "外形尺寸mm",
        "value": "1170×950×1310"
      },
      {
        "label": "重量kg",
        "value": "204"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF055",
    "name": "电热恒温鼓风干燥箱",
    "model": "101-5A",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/101-5A.png",
    "image": "myImages/101-5A-Image.png",
    "description": "干燥箱适用于各种试件进行烘培、干燥、热处理及其它加热实验，工作室内装有鼓风机，能促进室内的空气对流，达到恒温的环境。\n本干燥箱结构精密，控温灵敏，操作简便，工厂及科学研究院单位等均可采用。",
    "features": [
      "本干燥箱结构精密，控温灵敏准确，操作简便；",
      "工作室内温度采用自动控制系统，保持恒温状态；",
      "工作室内装有鼓风机，促进机械空气对流；"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "101-5A"
      },
      {
        "label": "工作电压V",
        "value": "380，带零"
      },
      {
        "label": "加热器总功率kW",
        "value": "7.5"
      },
      {
        "label": "工作温度℃",
        "value": "室温～250"
      },
      {
        "label": "按温灵敏度℃",
        "value": "±1"
      },
      {
        "label": "工作室尺寸mm",
        "value": "1000×1000×1200"
      },
      {
        "label": "外形尺寸mm",
        "value": "1370×1150×1500"
      },
      {
        "label": "重量kg",
        "value": "280"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF056",
    "name": "电热恒温鼓风干燥箱",
    "model": "101-2AD",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/101-2AD.png",
    "image": "myImages/101-2AD-Image.png",
    "description": "干燥箱适用于各种试件进行烘培、干燥、热处理及其它加热实验，工作室内装有鼓风机，能促进室内的空气对流，达到恒温的环境。\n本干燥箱结构精密，控温灵敏，操作简便，工厂及科学研究院单位等均可采用。\n符合JTG 3432-2024《公路工程集料试验规程》，适用于各种试件进行烘培、干燥、热处理及其它加热实验。",
    "features": [
      "本干燥箱结构精密，控温灵敏准确，操作简便；",
      "工作室内温度采用自动控制系统，保持恒温状态；",
      "工作室内装有鼓风机，促进机械空气对流；"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "101-2AD"
      },
      {
        "label": "工作电压V",
        "value": "220"
      },
      {
        "label": "加热器总功率kW",
        "value": "2"
      },
      {
        "label": "工作温度℃",
        "value": "室温～250"
      },
      {
        "label": "按温灵敏度℃",
        "value": "±1"
      },
      {
        "label": "工作室尺寸mm",
        "value": "7×450×550"
      },
      {
        "label": "外形尺寸mm",
        "value": "701×750×735"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF057",
    "name": "电热恒温鼓风干燥箱",
    "model": "101-3AD",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/101-3AD.png",
    "image": "myImages/101-3AD-Image.png",
    "description": "干燥箱适用于各种试件进行烘培、干燥、热处理及其它加热实验，工作室内装有鼓风机，能促进室内的空气对流，达到恒温的环境。\n本干燥箱结构精密，控温灵敏，操作简便，工厂及科学研究院单位等均可采用。\n符合JTG 3432-2024《公路工程集料试验规程》，适用于各种试件进行烘培、干燥、热处理及其它加热实验。",
    "features": [
      "本干燥箱结构精密，控温灵敏准确，操作简便；",
      "工作室内温度采用自动控制系统，保持恒温状态；",
      "工作室内装有鼓风机，促进机械空气对流；"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "101-3AD"
      },
      {
        "label": "工作电压V",
        "value": "220"
      },
      {
        "label": "加热器总功率kW",
        "value": "3"
      },
      {
        "label": "工作温度℃",
        "value": "室温～250"
      },
      {
        "label": "按温灵敏度℃",
        "value": "±1"
      },
      {
        "label": "工作室尺寸mm",
        "value": "600×500×750"
      },
      {
        "label": "外形尺寸mm",
        "value": "905×750×965"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF058",
    "name": "电热恒温鼓风干燥箱",
    "model": "LDW-1S",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/LDW-1S.png",
    "image": "myImages/LDW-1S-Image.png",
    "description": "干燥箱适用于各种试件进行烘培、干燥、热处理及其它加热实验，工作室内装有鼓风机，能促进室内的空气对流，达到恒温的环境。\n本干燥箱结构精密，控温灵敏，操作简便，工厂及科学研究院单位等均可采用。\n符合JTG 3432-2024《公路工程集料试验规程》，适用于各种试件进行烘培、干燥、热处理及其它加热实验。",
    "features": [
      "本干燥箱结构精密，控温灵敏准确，操作简便；",
      "工作室内温度采用自动控制系统，保持恒温状态；",
      "工作室内装有鼓风机，促进机械空气对流；",
      "内胆不锈钢设计，耐腐蚀。"
    ],
    "specifications": [
      {
        "label": "工作电压V",
        "value": "220"
      },
      {
        "label": "加热器总功率kW",
        "value": "1.5"
      },
      {
        "label": "工作温度℃",
        "value": "室温～250"
      },
      {
        "label": "按温灵敏度℃",
        "value": "±1"
      },
      {
        "label": "工作室尺寸mm",
        "value": "450×350×450"
      },
      {
        "label": "外形尺寸mm",
        "value": "750×460×640"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF059",
    "name": "电热恒温鼓风干燥箱",
    "model": "LDW-2S",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/LDW-2S.png",
    "image": "myImages/LDW-2S-Image.png",
    "description": "干燥箱适用于各种试件进行烘培、干燥、热处理及其它加热实验，工作室内装有鼓风机，能促进室内的空气对流，达到恒温的环境。\n本干燥箱结构精密，控温灵敏，操作简便，工厂及科学研究院单位等均可采用。\n符合JTG 3432-2025《公路工程集料试验规程》，适用于各种试件进行烘培、干燥、热处理及其它加热实验。",
    "features": [
      "本干燥箱结构精密，控温灵敏准确，操作简便；",
      "工作室内温度采用自动控制系统，保持恒温状态；",
      "工作室内装有鼓风机，促进机械空气对流；",
      "内胆不锈钢设计，耐腐蚀。"
    ],
    "specifications": [
      {
        "label": "工作电压V",
        "value": "220"
      },
      {
        "label": "加热器总功率kW",
        "value": "2"
      },
      {
        "label": "工作温度℃",
        "value": "室温～250"
      },
      {
        "label": "按温灵敏度℃",
        "value": "±1"
      },
      {
        "label": "工作室尺寸mm",
        "value": "550×450×550"
      },
      {
        "label": "外形尺寸mm",
        "value": "850×560×740"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF060",
    "name": "电热恒温鼓风干燥箱",
    "model": "LDW-3S",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/LDW-3S.png",
    "image": "myImages/LDW-3S-Image.png",
    "description": "干燥箱适用于各种试件进行烘培、干燥、热处理及其它加热实验，工作室内装有鼓风机，能促进室内的空气对流，达到恒温的环境。\n本干燥箱结构精密，控温灵敏，操作简便，工厂及科学研究院单位等均可采用。\n符合JTG 3432-2026《公路工程集料试验规程》，适用于各种试件进行烘培、干燥、热处理及其它加热实验。",
    "features": [
      "本干燥箱结构精密，控温灵敏准确，操作简便；",
      "工作室内温度采用自动控制系统，保持恒温状态；",
      "工作室内装有鼓风机，促进机械空气对流；",
      "内胆不锈钢设计，耐腐蚀。"
    ],
    "specifications": [
      {
        "label": "工作电压V",
        "value": "220"
      },
      {
        "label": "加热器总功率kW",
        "value": "3"
      },
      {
        "label": "工作温度℃",
        "value": "室温～250"
      },
      {
        "label": "按温灵敏度℃",
        "value": "±1"
      },
      {
        "label": "工作室尺寸mm",
        "value": "600×500×750"
      },
      {
        "label": "外形尺寸mm",
        "value": "900×610×940"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF061",
    "name": "电热恒温鼓风干燥箱",
    "model": "LDG-1S",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/LDG-1S.png",
    "image": "myImages/LDG-1S-Image.png",
    "description": "干燥箱适用于各种试件进行烘培、干燥、热处理及其它加热实验，工作室内装有鼓风机，能促进室内的空气对流，达到恒温的环境。\n本干燥箱结构精密，控温灵敏，操作简便，工厂及科学研究院单位等均可采用。\n符合JTG 3432-2024《公路工程集料试验规程》，适用于各种试件进行烘培、干燥、热处理及其它加热实验。",
    "features": [
      "本干燥箱结构精密，控温灵敏准确，操作简便；",
      "工作室内温度采用自动控制系统，保持恒温状态；",
      "工作室内装有鼓风机，促进机械空气对流；",
      "内胆不锈钢设计，耐腐蚀。"
    ],
    "specifications": [
      {
        "label": "工作电压V",
        "value": "220"
      },
      {
        "label": "加热器总功率kW",
        "value": "1.5"
      },
      {
        "label": "工作温度℃",
        "value": "室温～250"
      },
      {
        "label": "按温灵敏度℃",
        "value": "±1"
      },
      {
        "label": "工作室尺寸mm",
        "value": "450×350×450"
      },
      {
        "label": "外形尺寸mm",
        "value": "600×660×660"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF062",
    "name": "电热恒温鼓风干燥箱",
    "model": "LDG-2S",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/LDG-2S.png",
    "image": "myImages/LDG-2S-Image.png",
    "description": "干燥箱适用于各种试件进行烘培、干燥、热处理及其它加热实验，工作室内装有鼓风机，能促进室内的空气对流，达到恒温的环境。\n本干燥箱结构精密，控温灵敏，操作简便，工厂及科学研究院单位等均可采用。\n符合JTG 3432-2025《公路工程集料试验规程》，适用于各种试件进行烘培、干燥、热处理及其它加热实验。",
    "features": [
      "本干燥箱结构精密，控温灵敏准确，操作简便；",
      "工作室内温度采用自动控制系统，保持恒温状态；",
      "工作室内装有鼓风机，促进机械空气对流；",
      "内胆不锈钢设计，耐腐蚀。"
    ],
    "specifications": [
      {
        "label": "工作电压V",
        "value": "220"
      },
      {
        "label": "加热器总功率kW",
        "value": "2"
      },
      {
        "label": "工作温度℃",
        "value": "室温～250"
      },
      {
        "label": "按温灵敏度℃",
        "value": "±1"
      },
      {
        "label": "工作室尺寸mm",
        "value": "550×450×550"
      },
      {
        "label": "外形尺寸mm",
        "value": "700×760×760"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF063",
    "name": "电热恒温鼓风干燥箱",
    "model": "LDG-3S",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/LDG-3S.png",
    "image": "myImages/LDG-3S-Image.png",
    "description": "干燥箱适用于各种试件进行烘培、干燥、热处理及其它加热实验，工作室内装有鼓风机，能促进室内的空气对流，达到恒温的环境。\n本干燥箱结构精密，控温灵敏，操作简便，工厂及科学研究院单位等均可采用。\n符合JTG 3432-2026《公路工程集料试验规程》，适用于各种试件进行烘培、干燥、热处理及其它加热实验。",
    "features": [
      "本干燥箱结构精密，控温灵敏准确，操作简便；",
      "工作室内温度采用自动控制系统，保持恒温状态；",
      "工作室内装有鼓风机，促进机械空气对流；",
      "内胆不锈钢设计，耐腐蚀。"
    ],
    "specifications": [
      {
        "label": "工作电压V",
        "value": "220"
      },
      {
        "label": "加热器总功率kW",
        "value": "3"
      },
      {
        "label": "工作温度℃",
        "value": "室温～250"
      },
      {
        "label": "按温灵敏度℃",
        "value": "±1"
      },
      {
        "label": "工作室尺寸mm",
        "value": "600×500×750"
      },
      {
        "label": "外形尺寸mm",
        "value": "750×800×950"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF064",
    "name": "电热恒温鼓风干燥箱",
    "model": "LDG-4S",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/LDG-4S.png",
    "image": "myImages/LDG-4S-Image.png",
    "description": "干燥箱适用于各种试件进行烘培、干燥、热处理及其它加热实验，工作室内装有鼓风机，能促进室内的空气对流，达到恒温的环境。\n本干燥箱结构精密，控温灵敏，操作简便，工厂及科学研究院单位等均可采用。\n符合JTG 3432-2027《公路工程集料试验规程》，适用于各种试件进行烘培、干燥、热处理及其它加热实验。",
    "features": [
      "本干燥箱结构精密，控温灵敏准确，操作简便；",
      "工作室内温度采用自动控制系统，保持恒温状态；",
      "工作室内装有鼓风机，促进机械空气对流；",
      "内胆不锈钢设计，耐腐蚀。"
    ],
    "specifications": [
      {
        "label": "工作电压V",
        "value": "220"
      },
      {
        "label": "加热器总功率kW",
        "value": "4.5"
      },
      {
        "label": "工作温度℃",
        "value": "室温～250"
      },
      {
        "label": "按温灵敏度℃",
        "value": "±1"
      },
      {
        "label": "工作室尺寸mm",
        "value": "840×600×1355"
      },
      {
        "label": "外形尺寸mm",
        "value": "990×900×1660"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF065",
    "name": "箱式电阻炉",
    "model": "SX2-2.5-10",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/SX2-2.5-10.png",
    "image": "myImages/SX2-2.5-10-Image.png",
    "description": "本产品适用于实验室、工矿企业、科研等单位做元素分析测定和一般小型钢件淬火、退火、回火等热处理。额定温度为1300℃或以上的高温箱式电阻炉，可以作为合金钢的热处理及金属烧结、溶解、分析等高温加热用。",
    "features": [
      "炉体由角钢及钢板制成，炉膛采用耐火材料烧结成形；",
      "炉膛与炉体之间砌筑轻质砖；",
      "控制台采用只能PID数显控制器，稳定性好，精度高；",
      "炉门进行加厚加固处理，防止变形；",
      "炉衬采用优良保温棉，保温效果好。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "SX2-2.5-10"
      },
      {
        "label": "额定功率kW",
        "value": "2.5"
      },
      {
        "label": "额定电压(V)",
        "value": "220"
      },
      {
        "label": "额定温度℃",
        "value": "1000"
      },
      {
        "label": "炉膛尺寸长mm",
        "value": "200×120×80"
      },
      {
        "label": "外形尺寸长mm",
        "value": "380×380×420"
      },
      {
        "label": "重量kg",
        "value": "145"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF066",
    "name": "箱式电阻炉",
    "model": "SX2-4-10",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/SX2-4-10.png",
    "image": "myImages/SX2-4-10-Image.png",
    "description": "本产品适用于实验室、工矿企业、科研等单位做元素分析测定和一般小型钢件淬火、退火、回火等热处理。额定温度为1300℃或以上的高温箱式电阻炉，可以作为合金钢的热处理及金属烧结、溶解、分析等高温加热用。",
    "features": [
      "炉体由角钢及钢板制成，炉膛采用耐火材料烧结成形；",
      "炉膛与炉体之间砌筑轻质砖；",
      "控制台采用只能PID数显控制器，稳定性好，精度高；",
      "炉门进行加厚加固处理，防止变形；",
      "炉衬采用优良保温棉，保温效果好。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "SX2-4-10"
      },
      {
        "label": "额定功率kW",
        "value": "4"
      },
      {
        "label": "额定电压(V)",
        "value": "220"
      },
      {
        "label": "额定温度℃",
        "value": "1000"
      },
      {
        "label": "炉膛尺寸长mm",
        "value": "300×200×120"
      },
      {
        "label": "外形尺寸长mm",
        "value": "490×490×540"
      },
      {
        "label": "重量kg",
        "value": "158"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF067",
    "name": "箱式电阻炉",
    "model": "SX2-8-10",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/SX2-8-10.png",
    "image": "myImages/SX2-8-10-Image.png",
    "description": "本产品适用于实验室、工矿企业、科研等单位做元素分析测定和一般小型钢件淬火、退火、回火等热处理。额定温度为1300℃或以上的高温箱式电阻炉，可以作为合金钢的热处理及金属烧结、溶解、分析等高温加热用。",
    "features": [
      "炉体由角钢及钢板制成，炉膛采用耐火材料烧结成形；",
      "炉膛与炉体之间砌筑轻质砖；",
      "控制台采用只能PID数显控制器，稳定性好，精度高；",
      "炉门进行加厚加固处理，防止变形；",
      "炉衬采用优良保温棉，保温效果好。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "SX2-8-10"
      },
      {
        "label": "额定功率kW",
        "value": "8"
      },
      {
        "label": "额定电压(V)",
        "value": "380"
      },
      {
        "label": "额定温度℃",
        "value": "1000"
      },
      {
        "label": "炉膛尺寸长mm",
        "value": "400×250×160"
      },
      {
        "label": "外形尺寸长mm",
        "value": "610×540×550"
      },
      {
        "label": "重量kg",
        "value": "163"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF068",
    "name": "箱式电阻炉",
    "model": "SX2-12-10",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/SX2-12-10.png",
    "image": "myImages/SX2-12-10-Image.png",
    "description": "本产品适用于实验室、工矿企业、科研等单位做元素分析测定和一般小型钢件淬火、退火、回火等热处理。额定温度为1300℃或以上的高温箱式电阻炉，可以作为合金钢的热处理及金属烧结、溶解、分析等高温加热用。",
    "features": [
      "炉体由角钢及钢板制成，炉膛采用耐火材料烧结成形；",
      "炉膛与炉体之间砌筑轻质砖；",
      "控制台采用只能PID数显控制器，稳定性好，精度高；",
      "炉门进行加厚加固处理，防止变形；",
      "炉衬采用优良保温棉，保温效果好。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "SX2-12-10"
      },
      {
        "label": "额定功率kW",
        "value": "12"
      },
      {
        "label": "额定电压(V)",
        "value": "380"
      },
      {
        "label": "额定温度℃",
        "value": "1000"
      },
      {
        "label": "炉膛尺寸长mm",
        "value": "500×300×200"
      },
      {
        "label": "外形尺寸长mm",
        "value": "710×610×560"
      },
      {
        "label": "重量kg",
        "value": "185"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF069",
    "name": "箱式电阻炉",
    "model": "SX2-2.5-12",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/SX2-2.5-12.png",
    "image": "myImages/SX2-2.5-12-Image.png",
    "description": "本产品适用于实验室、工矿企业、科研等单位做元素分析测定和一般小型钢件淬火、退火、回火等热处理。额定温度为1300℃或以上的高温箱式电阻炉，可以作为合金钢的热处理及金属烧结、溶解、分析等高温加热用。",
    "features": [
      "炉体由角钢及钢板制成，炉膛采用耐火材料烧结成形；",
      "炉膛与炉体之间砌筑轻质砖；",
      "控制台采用只能PID数显控制器，稳定性好，精度高；",
      "炉门进行加厚加固处理，防止变形；",
      "炉衬采用优良保温棉，保温效果好。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "SX2-2.5-12"
      },
      {
        "label": "额定功率kW",
        "value": "2.5"
      },
      {
        "label": "额定电压(V)",
        "value": "220"
      },
      {
        "label": "额定温度℃",
        "value": "1200"
      },
      {
        "label": "炉膛尺寸长mm",
        "value": "200×120×80"
      },
      {
        "label": "外形尺寸长mm",
        "value": "380×380×420"
      },
      {
        "label": "重量kg",
        "value": "145"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF070",
    "name": "箱式电阻炉",
    "model": "SX2-5-12",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/SX2-5-12.png",
    "image": "myImages/SX2-5-12-Image.png",
    "description": "本产品适用于实验室、工矿企业、科研等单位做元素分析测定和一般小型钢件淬火、退火、回火等热处理。额定温度为1300℃或以上的高温箱式电阻炉，可以作为合金钢的热处理及金属烧结、溶解、分析等高温加热用。",
    "features": [
      "炉体由角钢及钢板制成，炉膛采用耐火材料烧结成形；",
      "炉膛与炉体之间砌筑轻质砖；",
      "控制台采用只能PID数显控制器，稳定性好，精度高；",
      "炉门进行加厚加固处理，防止变形；",
      "炉衬采用优良保温棉，保温效果好。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "SX2-5-12"
      },
      {
        "label": "额定功率kW",
        "value": "5"
      },
      {
        "label": "额定电压(V)",
        "value": "220"
      },
      {
        "label": "额定温度℃",
        "value": "1200"
      },
      {
        "label": "炉膛尺寸长mm",
        "value": "300×200×120"
      },
      {
        "label": "外形尺寸长mm",
        "value": "490×490×540"
      },
      {
        "label": "重量kg",
        "value": "160"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF071",
    "name": "箱式电阻炉",
    "model": "SX2-10-12",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/SX2-10-12.png",
    "image": "myImages/SX2-10-12-Image.png",
    "description": "本产品适用于实验室、工矿企业、科研等单位做元素分析测定和一般小型钢件淬火、退火、回火等热处理。额定温度为1300℃或以上的高温箱式电阻炉，可以作为合金钢的热处理及金属烧结、溶解、分析等高温加热用。",
    "features": [
      "炉体由角钢及钢板制成，炉膛采用耐火材料烧结成形；",
      "炉膛与炉体之间砌筑轻质砖；",
      "控制台采用只能PID数显控制器，稳定性好，精度高；",
      "炉门进行加厚加固处理，防止变形；",
      "炉衬采用优良保温棉，保温效果好。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "SX2-10-12"
      },
      {
        "label": "额定功率kW",
        "value": "10"
      },
      {
        "label": "额定电压(V)",
        "value": "380"
      },
      {
        "label": "额定温度℃",
        "value": "1200"
      },
      {
        "label": "炉膛尺寸长mm",
        "value": "400×250×160"
      },
      {
        "label": "外形尺寸长mm",
        "value": "610×540×550"
      },
      {
        "label": "重量kg",
        "value": "165"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF072",
    "name": "箱式电阻炉",
    "model": "SX2-12-12",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/SX2-12-12.png",
    "image": "myImages/SX2-12-12-Image.png",
    "description": "本产品适用于实验室、工矿企业、科研等单位做元素分析测定和一般小型钢件淬火、退火、回火等热处理。额定温度为1300℃或以上的高温箱式电阻炉，可以作为合金钢的热处理及金属烧结、溶解、分析等高温加热用。",
    "features": [
      "炉体由角钢及钢板制成，炉膛采用耐火材料烧结成形；",
      "炉膛与炉体之间砌筑轻质砖；",
      "控制台采用只能PID数显控制器，稳定性好，精度高；",
      "炉门进行加厚加固处理，防止变形；",
      "炉衬采用优良保温棉，保温效果好。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "SX2-12-12"
      },
      {
        "label": "额定功率kW",
        "value": "12"
      },
      {
        "label": "额定电压(V)",
        "value": "380"
      },
      {
        "label": "额定温度℃",
        "value": "1200"
      },
      {
        "label": "炉膛尺寸长mm",
        "value": "500×300×200"
      },
      {
        "label": "外形尺寸长mm",
        "value": "710×610×560"
      },
      {
        "label": "重量kg",
        "value": "185"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF073",
    "name": "箱式电阻炉",
    "model": "SX2-4-13",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/SX2-4-13.png",
    "image": "myImages/SX2-4-13-Image.png",
    "description": "本产品适用于实验室、工矿企业、科研等单位做元素分析测定和一般小型钢件淬火、退火、回火等热处理。额定温度为1300℃或以上的高温箱式电阻炉，可以作为合金钢的热处理及金属烧结、溶解、分析等高温加热用。",
    "features": [
      "炉体由角钢及钢板制成，炉膛采用耐火材料烧结成形；",
      "炉膛与炉体之间砌筑轻质砖；",
      "控制台采用只能PID数显控制器，稳定性好，精度高；",
      "炉门进行加厚加固处理，防止变形；",
      "炉衬采用优良保温棉，保温效果好。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "SX2-4-13"
      },
      {
        "label": "额定功率kW",
        "value": "4"
      },
      {
        "label": "额定电压(V)",
        "value": "220"
      },
      {
        "label": "额定温度℃",
        "value": "1300"
      },
      {
        "label": "炉膛尺寸长mm",
        "value": "250×150×100"
      },
      {
        "label": "外形尺寸长mm",
        "value": "490×380×550"
      },
      {
        "label": "重量kg",
        "value": "160"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF074",
    "name": "箱式电阻炉",
    "model": "SSX-8-16",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/SSX-8-16.png",
    "image": "myImages/SSX-8-16-Image.png",
    "description": "本产品适用于实验室、工矿企业、科研等单位做元素分析测定和一般小型钢件淬火、退火、回火等热处理。额定温度为1300℃或以上的高温箱式电阻炉，可以作为合金钢的热处理及金属烧结、溶解、分析等高温加热用。",
    "features": [
      "炉体由角钢及钢板制成，炉膛采用耐火材料烧结成形；",
      "炉膛与炉体之间砌筑轻质砖；",
      "控制台采用只能PID数显控制器，稳定性好，精度高；",
      "炉门进行加厚加固处理，防止变形；",
      "炉衬采用优良保温棉，保温效果好。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "SSX-8-16"
      },
      {
        "label": "额定功率kW",
        "value": "8"
      },
      {
        "label": "额定电压(V)",
        "value": "220V"
      },
      {
        "label": "额定温度℃",
        "value": "1600"
      },
      {
        "label": "炉膛尺寸mm",
        "value": "300×150×120"
      },
      {
        "label": "外形尺寸mm",
        "value": "820×670×780"
      },
      {
        "label": "重量kg",
        "value": "350"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF075",
    "name": "箱式电阻炉",
    "model": "SSX-12-16",
    "category": "路达科研产品系列",
    "thumbnail": "myImages/SSX-12-16.png",
    "image": "myImages/SSX-12-16-Image.png",
    "description": "本产品适用于实验室、工矿企业、科研等单位做元素分析测定和一般小型钢件淬火、退火、回火等热处理。额定温度为1300℃或以上的高温箱式电阻炉，可以作为合金钢的热处理及金属烧结、溶解、分析等高温加热用。",
    "features": [
      "炉体由角钢及钢板制成，炉膛采用耐火材料烧结成形；",
      "炉膛与炉体之间砌筑轻质砖；",
      "控制台采用只能PID数显控制器，稳定性好，精度高；",
      "炉门进行加厚加固处理，防止变形；",
      "炉衬采用优良保温棉，保温效果好。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "SSX-12-16"
      },
      {
        "label": "额定功率kW",
        "value": "12"
      },
      {
        "label": "额定电压(V)",
        "value": "380V"
      },
      {
        "label": "额定温度℃",
        "value": "1600"
      },
      {
        "label": "炉膛尺寸mm",
        "value": "400×200×160"
      },
      {
        "label": "外形尺寸mm",
        "value": "905×730×835"
      },
      {
        "label": "重量kg",
        "value": "400"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF076",
    "name": "振动压实仪",
    "model": "LD-08",
    "category": "路达土工砂石仪器系列",
    "thumbnail": "myImages/LD-08.png",
    "image": "myImages/LD-08-Image.png",
    "description": "本产品适用于制造无机结合料稳定粒料的各种试件,其中包括用于测试无侧限抗压强度、间接抗拉强度和抗压回弹模量的圆柱体试件和用于温缩系数、干缩系数、抗折强度以及抗折回弹模量测试的梁式试件，一般适用于公路施工单位、大专院校及质检等行业部门。",
    "features": [
      "激振力稳定，共振小；",
      "压实快捷，效果好；",
      "操作使用方便。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "LD-08"
      },
      {
        "label": "振动电机功率kW",
        "value": "4"
      },
      {
        "label": "升降电机功率kW",
        "value": "0.75"
      },
      {
        "label": "静压力N",
        "value": "1900～3100(建议调到2500)"
      },
      {
        "label": "激振力N",
        "value": "6800～11000（可调）"
      },
      {
        "label": "振动频率Hz",
        "value": "28～30"
      },
      {
        "label": "成型试模",
        "value": "3个"
      },
      {
        "label": "电源电压",
        "value": "AC380V±10%,50Hz"
      },
      {
        "label": "外形尺寸mm",
        "value": "1820×950×2170"
      },
      {
        "label": "重量kg",
        "value": "1100"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF077",
    "name": "粗粒土垂直渗透变形仪",
    "model": "LDSL-III",
    "category": "路达土工砂石仪器系列",
    "thumbnail": "myImages/LDSL-III.png",
    "image": "myImages/LDSL-III-Image.png",
    "description": "本设备是测定粗颗粒士在渗流水通过时，试样的渗透系数和细颗粒随渗流逐渐流失的临界坡降（管涌）及土体整体浮动时的破坏坡降（流土）。本试验适用于扰动的粗颗粒土试样和原状粗颗粒土试样。\n产品符合SL237-2019标准。",
    "features": [
      "折叠升降系统，节省空间，设备移动方便；",
      "7寸大屏全触摸液晶屏操作；",
      "高精度伺服步进传动系统，保证水位升降精度；",
      "全自动恒水位循环系统。"
    ],
    "specifications": [
      {
        "label": "试筒规格mm",
        "value": "Φ300×600"
      },
      {
        "label": "试筒高度mm",
        "value": "600"
      },
      {
        "label": "水位高度mm",
        "value": "3000"
      },
      {
        "label": "测压孔间距mm",
        "value": "250"
      },
      {
        "label": "加荷设备",
        "value": "杠杆加压"
      },
      {
        "label": "供水桶mm",
        "value": "140×140×140"
      },
      {
        "label": "储水桶mm",
        "value": "200×400×450"
      },
      {
        "label": "电压",
        "value": "AC 220V"
      },
      {
        "label": "外形尺寸",
        "value": "1400×600×1900"
      },
      {
        "label": "设备重量kg",
        "value": "250"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF078",
    "name": "粗粒土常水头渗透仪",
    "model": "LDST-300",
    "category": "路达土工砂石仪器系列",
    "thumbnail": "myImages/LDST-300.png",
    "image": "myImages/LDST-300-Image.png",
    "description": "LDST-300粗粒土常水头渗透仪用于测定最大粒径不大于75mm的粗粒土和级配碎石的渗透系数。\n该设备符合TB10751-2018《高速铁路路基工程施工质量验收标准》。",
    "features": [
      "全自动恒温控制系统；",
      "控温精准，精度高；",
      "操作使用方便。"
    ],
    "specifications": [
      {
        "label": "供水箱容积L",
        "value": "80"
      },
      {
        "label": "金属筒内径mm",
        "value": "300"
      },
      {
        "label": "金属筒高mm",
        "value": "500"
      },
      {
        "label": "金属筒壁厚mm",
        "value": "10"
      },
      {
        "label": "测压管个数",
        "value": "5"
      },
      {
        "label": "测压管内径mm",
        "value": "6"
      },
      {
        "label": "测压管刻度分刻值mm",
        "value": "1"
      },
      {
        "label": "测压孔间距mm",
        "value": "50"
      },
      {
        "label": "渗水孔直径mm",
        "value": "16"
      },
      {
        "label": "溢水管内径mm",
        "value": "16"
      },
      {
        "label": "透水板孔径mm",
        "value": "3.5"
      },
      {
        "label": "重量kg",
        "value": "≈150"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF079",
    "name": "多功能电动击实仪（部标）",
    "model": "JZ-2D",
    "category": "路达土工砂石仪器系列",
    "thumbnail": "myImages/JZ-2D（部标）.png",
    "image": "myImages/JZ-2D（部标）-Image.png",
    "description": "本仪器既可做重型击实试验又可做轻型击实试验。采用高稳定度电子记数器自动控制，试验准确度高，是公路土工试验常用的仪器。\n《公路土工试验规程》（JTG 3430-2020）中击实试验（T0131-2019）标准。",
    "features": [
      "高稳定度电子记数器自动控制，试验准确度高；",
      "工作过程自动化，工作稳定、可靠；",
      "控制部分采用电脑芯片处理，自动停机、自动循环工作；"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "JZ-2D（部标）"
      },
      {
        "label": "击锤重量kg",
        "value": ""
      },
      {
        "label": "重型击实",
        "value": "4.5"
      },
      {
        "label": "轻型击实",
        "value": "2.5"
      },
      {
        "label": "击锤落高mm",
        "value": ""
      },
      {
        "label": "重型击实",
        "value": "450"
      },
      {
        "label": "轻型击实",
        "value": "300"
      },
      {
        "label": "击锤锤面直径mm",
        "value": "Φ50"
      },
      {
        "label": "试筒规格mm",
        "value": "Φ152 Φ100"
      },
      {
        "label": "锤击速度（次/min）",
        "value": "33"
      },
      {
        "label": "设定锤击次数",
        "value": "0～999次之间"
      },
      {
        "label": "电机功率W",
        "value": "370W，380V，1400转/分"
      },
      {
        "label": "电源电压",
        "value": "AC380V±10%，50Hz （三相四线 零线）"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF080",
    "name": "多功能电动击实仪（国标）",
    "model": "JZ-2D",
    "category": "路达土工砂石仪器系列",
    "thumbnail": "myImages/JZ-2D（国标）.png",
    "image": "myImages/JZ-2D（国标）-Image.png",
    "description": "本仪器既可做重型击实试验又可做轻型击实试验。采用高稳定度电子记数器自动控制，试验准确度高，是公路土工试验常用的仪器。\n《公路土工试验规程》（JTG 3430-2020）中击实试验（T0131-2019）标准。",
    "features": [
      "高稳定度电子记数器自动控制，试验准确度高；",
      "工作过程自动化，工作稳定、可靠；",
      "控制部分采用电脑芯片处理，自动停机、自动循环工作；"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "JZ-2D（国标）"
      },
      {
        "label": "击锤重量kg",
        "value": ""
      },
      {
        "label": "重型击实",
        "value": "4.5"
      },
      {
        "label": "轻型击实",
        "value": "2.5"
      },
      {
        "label": "击锤落高mm",
        "value": ""
      },
      {
        "label": "重型击实",
        "value": "457"
      },
      {
        "label": "轻型击实",
        "value": "305"
      },
      {
        "label": "击锤锤面直径mm",
        "value": "Φ51"
      },
      {
        "label": "试筒规格mm",
        "value": "Φ152×116 Φ102×116"
      },
      {
        "label": "锤击速度（次/min）",
        "value": "33"
      },
      {
        "label": "设定锤击次数",
        "value": "0～999次之间"
      },
      {
        "label": "电机功率W",
        "value": "370W 380v 1400转/分"
      },
      {
        "label": "电源电压",
        "value": "AC380V±10%，50Hz（三相四线 零线）"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF081",
    "name": "多功能液压脱模机",
    "model": "LD-T150D",
    "category": "路达土工砂石仪器系列",
    "thumbnail": "myImages/LD-T150D.png",
    "image": "myImages/LD-T150D-Image.png",
    "description": "该机配合“多功能电动击实仪”“马歇尔击实仪”以及“轻型手动击实仪”进行试件脱模使用。",
    "features": [
      "结构紧凑、自动化程度高；",
      "操作使用方便，减少人力；",
      "液压驱动运行，运行过程平稳。"
    ],
    "specifications": [
      {
        "label": "试样尺寸mm",
        "value": "Φ150X230，Φ152X170 Φ102X116，Φ100X127"
      },
      {
        "label": "最大轴向输出力kN",
        "value": "150"
      },
      {
        "label": "最大行程mm",
        "value": "240"
      },
      {
        "label": "升降速度mm/min",
        "value": "180"
      },
      {
        "label": "电源",
        "value": "380V，50Hz"
      },
      {
        "label": "输入功率W",
        "value": "1100"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF082",
    "name": "多功能液压脱模机",
    "model": "DL-200KN",
    "category": "路达土工砂石仪器系列",
    "thumbnail": "myImages/DL-200KN.png",
    "image": "myImages/DL-200KN-Image.png",
    "description": "该机配合“多功能电动击实仪”“马歇尔击实仪”以及“轻型手动击实仪”进行试件脱模使用。",
    "features": [
      "结构紧凑、自动化程度高；",
      "操作使用方便，减少人力；",
      "液压驱动运行，运行过程平稳。"
    ],
    "specifications": [
      {
        "label": "最大脱模力kN",
        "value": "200"
      },
      {
        "label": "脱模速率mm/min",
        "value": "130"
      },
      {
        "label": "最大脱模高度mm",
        "value": "230"
      },
      {
        "label": "电压/电机功率",
        "value": "380V /0.75KW"
      },
      {
        "label": "油泵额定压力MPa",
        "value": "20"
      },
      {
        "label": "电机额定转速r/min",
        "value": "1500"
      },
      {
        "label": "包装尺寸mm",
        "value": "750×500×1220"
      },
      {
        "label": "脱模规格mm",
        "value": ""
      },
      {
        "label": "1、抗压试模",
        "value": "Ф150×230，Ф100×180，Ф50×130"
      },
      {
        "label": "2、轻重型击实仪试模",
        "value": "Ф152.4×170，Ф100×127"
      },
      {
        "label": "3、马歇尔试验试模",
        "value": "Ф101.6×87"
      },
      {
        "label": "4、沥青试模",
        "value": "φ101.6×87"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF083",
    "name": "多功能液压脱模机",
    "model": "DL-300KN",
    "category": "路达土工砂石仪器系列",
    "thumbnail": "myImages/DL-300KN.png",
    "image": "myImages/DL-300KN-Image.png",
    "description": "该机配合“多功能电动击实仪”“马歇尔击实仪”以及“轻型手动击实仪”进行试件脱模使用。",
    "features": [
      "结构紧凑、自动化程度高；",
      "操作使用方便，减少人力；",
      "液压驱动运行，运行过程平稳。"
    ],
    "specifications": [
      {
        "label": "最大脱模力kN",
        "value": "300"
      },
      {
        "label": "脱模速率mm/min",
        "value": "130"
      },
      {
        "label": "最大脱模高度mm",
        "value": "230"
      },
      {
        "label": "电压/电机功率",
        "value": "380V /0.75KW"
      },
      {
        "label": "油泵额定压力MPa",
        "value": "20"
      },
      {
        "label": "电机额定转速r/min",
        "value": "1500"
      },
      {
        "label": "包装尺寸mm",
        "value": "750×500×1220"
      },
      {
        "label": "脱模规格mm",
        "value": ""
      },
      {
        "label": "1、抗压试模",
        "value": "Ф150×230，Ф100×180，φ50×130"
      },
      {
        "label": "2、轻重型击实仪试模",
        "value": "Ф152.4×170，Ф100×127"
      },
      {
        "label": "3、马歇尔试验试模",
        "value": "Ф101.6×87"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF084",
    "name": "震击式标准振筛机",
    "model": "ZBSX-92A",
    "category": "路达土工砂石仪器系列",
    "thumbnail": "myImages/ZBSX-92A.png",
    "image": "myImages/ZBSX-92A-Image.png",
    "description": "该机适用于地质、冶金、化工、建筑、砂轮制造、水泥等部门的化验和实验室对物料进行筛分分析。",
    "features": [
      "噪音小、重量轻；",
      "平台操作，无须固定，可调节振幅；",
      "适用于直径200/300mm的筛子；",
      "采用蜗轮蜗杆结构，动力稳定。"
    ],
    "specifications": [
      {
        "label": "筛子直径mm",
        "value": "300~200"
      },
      {
        "label": "筛子叠高mm",
        "value": "440"
      },
      {
        "label": "筛座震幅mm",
        "value": "8"
      },
      {
        "label": "筛摇动次数 次/分",
        "value": "221"
      },
      {
        "label": "震击次数 次/分",
        "value": "147"
      },
      {
        "label": "回转半径mm",
        "value": "12.5"
      },
      {
        "label": "电动机型号",
        "value": "7114"
      },
      {
        "label": "电机功率kW",
        "value": "0.37"
      },
      {
        "label": "电机转数 次/分",
        "value": "1400"
      },
      {
        "label": "外形尺寸mm",
        "value": "600×400×800"
      },
      {
        "label": "电源电压",
        "value": "AC380V±10%，50Hz"
      },
      {
        "label": "总重量kg",
        "value": "100"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF085",
    "name": "砂浆渗透仪",
    "model": "SS-1.5",
    "category": "路达土工砂石仪器系列",
    "thumbnail": "myImages/SS-1.5.png",
    "image": "myImages/SS-1.5-Image.png",
    "description": "该产品适用于测定防水砂的抗渗性能，进行参有防水剂的砂浆与基准砂浆的对比试验，亦可作其它防水材料的透水性试验。适用于各级工程质量监督检测部门，施工单位实验室、科研单位大专院校对砂浆抗渗性能的检测，同时也可利用它做建筑材料透气性的测定和质量检查，产品符合国家标准。",
    "features": [
      "压力值通过传感器在压力显示仪上显示出来，并能按设定的程序实现自动升压、自动完成试验，减轻工作人员负担。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "SS-1.5"
      },
      {
        "label": "允许最大工作压力MPa",
        "value": "1.5"
      },
      {
        "label": "工作方式",
        "value": "自动稳压和手动稳压"
      },
      {
        "label": "一次同时可作试件数",
        "value": "6个"
      },
      {
        "label": "试模上口内径mm",
        "value": "Φ70"
      },
      {
        "label": "试模下口内径mm",
        "value": "Φ80"
      },
      {
        "label": "试模高度mm",
        "value": "30"
      },
      {
        "label": "柱塞泵柱塞直径mm",
        "value": "Φ10"
      },
      {
        "label": "柱塞泵行程mm",
        "value": "10"
      },
      {
        "label": "柱塞泵往复频率（次/min）",
        "value": "130"
      },
      {
        "label": "柱塞泵流量L/min",
        "value": "0.1"
      },
      {
        "label": "电动机功率W",
        "value": "80"
      },
      {
        "label": "电动机转速r/min",
        "value": "1340"
      },
      {
        "label": "电源电压",
        "value": "AC380V±10%，50Hz"
      },
      {
        "label": "外形尺寸mm",
        "value": "750×560×750"
      },
      {
        "label": "重量kg",
        "value": "100"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF086",
    "name": "砂浆搅拌机",
    "model": "UJZ-15",
    "category": "路达土工砂石仪器系列",
    "thumbnail": "myImages/UJZ-15.png",
    "image": "myImages/UJZ-15-Image.png",
    "description": "本机是按照建设部标准《建筑砂浆基本性能试验方法标准》 生产制造的检验设备。它是建筑施工单位、有关各大院校及建筑科研单位的实验室常用的设备之一。 \nUJZ-15 型砂浆搅拌机经有关科研、使用单位试用后，实践证明它具有搅拌均匀，拌合速度快，适用于多种砂浆的搅拌，能大大减轻工作人员的劳动强度，能提高拌合物的质量，且使用方便，外型美观，价格比较合理。",
    "features": [
      "本机具有搅拌均匀，拌合速度快，适合多种砂浆的搅拌，减轻工作人员的劳动强度，提高拌合物的质量。"
    ],
    "specifications": [
      {
        "label": "型号",
        "value": "UJZ-15"
      },
      {
        "label": "进料容量 L",
        "value": "28"
      },
      {
        "label": "出料容量 L",
        "value": "15"
      },
      {
        "label": "搅拌筒转数 r/min",
        "value": "60±2(逆时针)"
      },
      {
        "label": "搅拌叶片转数 r/min",
        "value": "80±4(顺时针)"
      },
      {
        "label": "搅拌叶与搅拌筒工作间隙 mm",
        "value": "2.5±0.5"
      },
      {
        "label": "电机转数 r/min",
        "value": "1440"
      },
      {
        "label": "电机功率 KW/V",
        "value": "1.5/380"
      },
      {
        "label": "外型尺寸(长×宽×高)cm",
        "value": "80×60×90"
      },
      {
        "label": "重量kg",
        "value": "210"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF087",
    "name": "自动式砂当量试验仪(单管）",
    "model": "SD-II",
    "category": "路达土工砂石仪器系列",
    "thumbnail": "myImages/SD-II（单管）.png",
    "image": "myImages/SD-II（单管）-Image.png",
    "description": "自动式砂当量试验仪是用于测定细集料（主要是天然砂、机制砂、石屑等）中所含粘性土或杂质含量，以评定集料洁净程度的专用公路工程检测仪器。",
    "features": [
      "自动控制振荡时间（30秒±1秒）、静置沉淀时间（20分钟）及自动提示。",
      "采用电机驱动，确保振荡幅度和频率恒定",
      "标配的试管、活塞、冲量头等关键部件尺寸精确，符合标准要求。"
    ],
    "specifications": [
      {
        "label": "自动式砂当量振动器",
        "value": ""
      },
      {
        "label": "额定电压",
        "value": "220±50Hz"
      },
      {
        "label": "震荡频率",
        "value": "90次/30S"
      },
      {
        "label": "额定功率",
        "value": "180W"
      },
      {
        "label": "振 幅",
        "value": "203mm"
      },
      {
        "label": "自控计数",
        "value": "90次"
      },
      {
        "label": "外形尺寸",
        "value": "560×320×360"
      },
      {
        "label": "配重活塞",
        "value": "1kg±5g"
      },
      {
        "label": "圆柱形塑料试筒",
        "value": ""
      },
      {
        "label": "内径",
        "value": "32mm±0.25mm"
      },
      {
        "label": "高度",
        "value": "420mm±0.25mm"
      },
      {
        "label": "冲洗管外径",
        "value": "6mm±0.25mm"
      },
      {
        "label": "内径",
        "value": "4mm±0.2mm"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF088",
    "name": "自动式砂当量试验仪(双管）",
    "model": "SD-II",
    "category": "路达土工砂石仪器系列",
    "thumbnail": "myImages/SD-II（双管）.png",
    "image": "myImages/SD-II（双管）-Image.png",
    "description": "自动式砂当量试验仪是用于测定细集料（主要是天然砂、机制砂、石屑等）中所含粘性土或杂质含量，以评定集料洁净程度的专用公路工程检测仪器。",
    "features": [
      "自动控制振荡时间（30秒±1秒）、静置沉淀时间（20分钟）及自动提示。",
      "采用电机驱动，确保振荡幅度和频率恒定",
      "标配的试管、活塞、冲量头等关键部件尺寸精确，符合标准要求。"
    ],
    "specifications": [
      {
        "label": "自动式砂当量振动器",
        "value": ""
      },
      {
        "label": "额定电压",
        "value": "220±50Hz"
      },
      {
        "label": "震荡频率",
        "value": "90次/30S"
      },
      {
        "label": "额定功率",
        "value": "180W"
      },
      {
        "label": "振 幅",
        "value": "203mm"
      },
      {
        "label": "自控计数",
        "value": "90次"
      },
      {
        "label": "外形尺寸",
        "value": "560×320×360"
      },
      {
        "label": "配重活塞",
        "value": "1kg±5g"
      },
      {
        "label": "圆柱形塑料试筒",
        "value": ""
      },
      {
        "label": "内径",
        "value": "32mm±0.25mm"
      },
      {
        "label": "高度",
        "value": "420mm±0.25mm"
      },
      {
        "label": "冲洗管外径",
        "value": "6mm±0.25mm"
      },
      {
        "label": "内径",
        "value": "4mm±0.2mm"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  },
  {
    "id": "MF089",
    "name": "数显式土壤液塑限联合测定仪",
    "model": "LG-100D",
    "category": "路达土工砂石仪器系列",
    "thumbnail": "myImages/LG-100D.png",
    "image": "myImages/LG-100D-Image.png",
    "description": "本产品是用来测定土壤的液限和塑限，为划分土类、天然稠度、塑性指数提供可靠的数据，一般适用于公路、铁路水利电力、冶金、建筑等部门。",
    "features": [
      "系统数字显示，自动定时，测量，显示；",
      "性能稳定，数据可靠；",
      "测量精度高，读数直观、清晰。"
    ],
    "specifications": [
      {
        "label": "型号规格",
        "value": "LG-100D"
      },
      {
        "label": "最大量程mm",
        "value": "20"
      },
      {
        "label": "分辨力mm",
        "value": "0.1"
      },
      {
        "label": "测量非线性误差",
        "value": "优于2%"
      },
      {
        "label": "接触指示灵敏度M",
        "value": ">10"
      },
      {
        "label": "锥重g",
        "value": "100±0.1 76±0.1"
      },
      {
        "label": "锥角°",
        "value": "30±2"
      },
      {
        "label": "测量时间s",
        "value": "5"
      },
      {
        "label": "连续工作时间h",
        "value": "8"
      },
      {
        "label": "电源电压",
        "value": "AC220V±10%，50Hz"
      },
      {
        "label": "外形尺寸mm",
        "value": "240×158×320"
      },
      {
        "label": "重量kg",
        "value": "5.3"
      }
    ],
    "hasManual": false,
    "hasVideo": true,
    "hasCAD": false,
    "isNew": true
  }
    ]   
};