# [Bug] Windows: workspace-write 沙箱下 pwsh 恒失败于 0xC0000142，重启与清理磁盘均无效（dsh 0.2.0-rc.2）

> 本报告由会话记录整理，所有数据来自实测与本机日志，未做推测性填充。
> 标注为「推测」的段落为分析推论，非实测结论。

---

## 一、摘要

在 **Windows** 环境下，DSH Desktop 以 **`workspace-write`** 模式运行时，`pwsh` 工具在**会话进行到某一时刻后开始 100% 失败**，退出码恒为 **`0xC0000142`（`STATUS_DLL_INIT_FAILED`）**，**无任何 stdout/stderr 输出**。

- 失败**不可自愈**：清理磁盘空间、完整重启 DSH Desktop 均无效
- 失败**不影响只读工具**：读文件、搜索、glob 全程正常
- **关键特征**：同一会话**前段可正常执行 20+ 条命令**，之后突然永久性失败
- **当前版本**：`dsh 0.2.0-rc.2`（用户确认为最新版）

---

## 二、环境

| 项目 | 值 |
|---|---|
| 操作系统 | Windows |
| DSH Desktop 版本 | `0.2.0-rc.2`（最新） |
| Harness runtime | `node=v24.17.0` |
| Harness execPath | `D:\Softwares\dsh\DSH Desktop\DSH Desktop.exe` |
| Harness cwd | `C:\Users\cmq_0\AppData\Roaming\dsh-desktop\launch-root` |
| `DSH_HOME` | `C:\Users\cmq_0\AppData\Roaming\dsh-desktop\harness` |
| 沙箱模式 | `workspace-write` |
| 审批策略 | `ask` |
| 工作目录 | `D:\projects_files\PythonProjects\GithubPages\myEricChen.github.io` |
| 日志桥接 | `[harness-log] info dsh-desktop-log-bridge: runtime warnings and errors are recorded from here on` |

---

## 三、最小复现

任意一条命令即可复现，无需依赖工作区内容：

```
pwsh: Write-Output "shell-alive"
```

返回：

```
(no output)
[exit code: 3221225794]      # 0xC0000142
```

同样失败的还有：

```
pwsh: echo hi
pwsh: echo probe
pwsh: node --check form-guard.js
```

均为**零输出 + 同一退出码**。

---

## 四、失败时间线（同一会话内）

### 阶段 1：正常（约 20+ 条命令全部成功）

| 操作 | 结果 |
|---|---|
| `Get-ChildItem` / `Select-String` 分析站点结构 | ✅ |
| 用 Python 写临时脚本并执行（`python test_guard.py`） | ✅ |
| 读取 `devices-list-en.js` 3132 行并统计 | ✅ |
| `node --check form-guard.js` → `exit code: 0` | ✅ |
| 批量写入 9 个 HTML 文件（UTF-8 无 BOM） | ✅ |
| 启动本地 HTTP 服务器（`python -m http.server 8792`）作为后台任务 | ✅ |

### 阶段 2：出现另一类 Windows 沙箱拦截（仍非本 bug）

```
bsk status --json
→ ensure daemon is running: connect to existing daemon:
  connect IPC named pipe \\.\pipe\bsk-daemon-728fded6585e8421: 拒绝访问。 (os error 5)
```

> 注：此条为**已知且预期**的沙箱边界（受限进程不能打开命名管道），**不属于本 bug**，列在此处仅为说明时间线。

### 阶段 3：转为恒失败

自此之后，**每一条 `pwsh` 调用都返回 `0xC0000142`**，包括最简单的 `echo`。

---

## 五、已排除的假设

| 假设 | 处置方式 | 结果 |
|---|---|---|
| 磁盘空间耗尽 | 用户清理了存储空间 | ❌ 无变化，仍 `0xC0000142` |
| 粘滞的卡死状态 | 用户完整重启 DSH Desktop | ❌ 无变化，仍 `0xC0000142` |
| 版本过旧、已有修复 | 用户确认已在最新版 `0.2.0-rc.2` | ❌ 最新版依然复现 |
| 工作区 ACL 权限问题 | 日志与只读工具均正常，读/搜/glob 不受影响 | ⚠️ 可能性低（未做 ACL 脚本取证） |

---

## 六、⭐ 关键证据：版本间启动方式发生回归

对比本机 `harness.log` 中**旧版本**与**当前版本**的启动记录：

### 旧版本（2026-09-19）

```
[harness-node] runtime  node=v24.9.0 platform=win32 arch=x64
[harness-node] execPath=D:\Softwares\dsh\DSH Desktop\resources\app\node_modules\node\bin\node.exe
```

### 当前版本 `0.2.0-rc.2`（2026-10-16）

```
[harness-node] runtime  node=v24.17.0 platform=win32 arch=x64
[harness-node] execPath=D:\Softwares\dsh\DSH Desktop\DSH Desktop.exe
```

### 差异

| | 旧版本 | `0.2.0-rc.2` |
|---|---|---|
| 承载 Harness 的进程 | 独立 **`node.exe`**（控制台程序） | **`DSH Desktop.exe`**（Electron GUI 进程） |
| 该进程是否拥有控制台 | ✅ 是 | ❌ **否（GUI 进程无控制台）** |

同时，当前版本日志中出现了：

```
[harness-node] windowsHide enforcement enabled for child processes
```

---

## 七、根因分析（推测，附依据）

依据 DSH 官方手册 *"One black window. Two process creators."*（rc.8）的记载：

> **Not equivalent — `CREATE_NO_WINDOW`**: rc.8 records `0xC0000142` failures for restricted-token children.
>
> Windows ACL sandbox **STARTUPINFO**: Combine `STARTF_USESHOWWINDOW` with `SW_HIDE` in both restricted-token spawn variants.

以及 DSH 相关 workaround 仓库中明确点出的根因：

> *the process that creates the restricted child **must own a console***

**推测的因果链：**

```
DSH Desktop.exe（Electron GUI 主进程，无控制台）
  └─ Harness node（作为其子进程，继承"无控制台"状态）
       └─ ACL 沙箱：CreateProcessAsUserW + 受限令牌（restricted token）
            └─ pwsh.exe  →  需要控制台 → 无法获得
                 → DllMain 初始化失败 → 0xC0000142
```

**关键点**：日志里的 `windowsHide enforcement enabled for child processes` 对应手册所说的**"本地子进程创建器"**路径；而 **ACL 沙箱走的是另一条创建边界（`CreateProcessAsUserW`）**，`windowsHide` 覆盖不到它。

**因此推测**：`0.2.0-rc.2` 将 Harness 从独立 `node.exe` 改为在 Electron 宿主内运行，**破坏了"创建受限子进程的进程必须拥有控制台"这一前置条件**。rc.8 针对 `CREATE_NO_WINDOW` 的修复代码可能仍然存在，但在无控制台的宿主下无法生效。

---

## 八、为什么此前未被发现

**`harness.log` 中没有任何 `0xC0000142` 记录。**

也就是说，这个失败**发生在日志桥接之外**（沙箱原生创建层），官方在没有用户报告的情况下**看不到这个场景**。

---

## 九、影响

`workspace-write` 是默认且推荐的沙箱模式。该模式下 `pwsh` 恒不可用，意味着：

- 无法运行构建脚本（如本站的 `python build.py`）
- 无法运行任何数据处理脚本（Python / Node CLI）
- 无法调用 `git`
- 所有 shell 类工具链全部失效，仅剩文件读写类工具可用

对依赖脚本化工作流的用户而言，等于**能力被削减过半**。

---

## 十、当前变通方案（用户侧）

1. **切到 `danger-full-access` / 「完全权限」** —— 该路径不经过受限令牌沙箱，可绕开此问题（手册亦强调**不要为此关闭沙箱**，故建议仅临时使用）
2. **在独立终端手动执行命令**，将结果粘贴回会话

---

## 十一、建议的修复方向

1. 在 ACL 沙箱的受限令牌创建路径上，**为子进程显式提供/附加一个控制台**，或改用 `STARTUPINFO` + `STARTF_USESHOWWINDOW` + `SW_HIDE`（而非 `CREATE_NO_WINDOW`）
2. 若 Electron 宿主无控制台是根因，考虑**让 Harness 恢复为独立 `node.exe` 进程**（即回退到旧版的启动方式），或为该进程分配一个隐藏控制台
3. **补上日志**：将沙箱原生创建失败的退出码写入 `harness.log`，以便后续此类问题可被追踪

---

## 十二、附：附带发现的插件兼容性告警

每次启动均出现（**与本 bug 无直接关联**，但可能影响其他功能）：

```
[desktop] compatibility warning: Plugin dshmarket@1.65.1 declares Harness peerDependencies
  {"@deepseek-ai/dsh-settings":"^0.1.0-rc.7 || ^0.1.1-rc.2 || ^0.1.2-alpha.2"}
  that do not include dsh 0.2.0-rc.2.

[desktop] compatibility warning: Plugin @wxg-prc-cpg/browser-skill-dsh-plugin@0.3.0 declares
  peerDependencies {"@deepseek-ai/dsh-attachment":"^0.1.0-rc.6", ... }
  that do not include dsh 0.2.0-rc.2.

[desktop] compatibility warning: Plugin dsh-dream-skin@9.16.0 declares
  peerDependencies {"@deepseek-ai/dsh-client-locale":"^0.1.0-rc.6", ... }
  that do not include dsh 0.2.0-rc.2.
```

> 另：`browser-skill-dsh-plugin` 在会话中亦有异常表现（浏览器守护进程无法启动、命名管道被拒），推测与其声明不兼容 `0.2.0-rc.2` 有关。

---

## 十三、可直接引用的证据清单

- 退出码：`0xC0000142` / `STATUS_DLL_INIT_FAILED` / 十进制 `3221225794`
- 复现命令：`pwsh: Write-Output "shell-alive"` → `(no output) [exit code: 3221225794]`
- 日志文件：`C:\Users\cmq_0\AppData\Roaming\dsh-desktop\logs\harness.log`
- 版本对比证据：同上日志
  - 2026-09-19 记录：`execPath=...\node_modules\node\bin\node.exe`
  - 2026-10-16 记录：`execPath=D:\Softwares\dsh\DSH Desktop\DSH Desktop.exe`
- 当前版本标识：插件兼容告警中的 `dsh 0.2.0-rc.2`
