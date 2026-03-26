# Game Remote Web Control

局域网游戏远程控制面板 — 独立 HTML 应用，无需安装任何依赖。

## 功能

- 🎮 远程启动/停止游戏，选择游戏类型和关卡
- 📡 实时轮询游戏状态和服务状态
- 🖥️ 多服务器管理 — 通过标签页切换不同游戏机
- ⚙️ 服务器配置持久化保存（浏览器 localStorage）
- 🌐 多语言支持：中文 / English / العربية（含 RTL 布局）
- ⚠️ Issues 可展开查看详细错误信息

## 截图

| 中文界面 | English | العربية (RTL) |
|---------|---------|---------------|
| ![中文](screenshots/main_zh.png) | ![English](screenshots/main_en.png) | ![Arabic](screenshots/main_ar.png) |

| 设置弹窗 |
|---------|
| ![Settings](screenshots/settings.png) |

## 使用方法

1. 将本文件夹复制到局域网内任意电脑
2. 双击打开 `index.html`
3. 点击右上角 ⚙ 添加游戏服务器：
   - **名称**：自定义名称（如 `CyCoolThrow`）
   - **地址**：游戏服务器 IP + 端口（如 `http://192.168.1.100:12345`）
4. 通过顶部标签页切换不同游戏
5. 选择游戏类型、关卡、设置时长后点击「启动游戏」

## 支持的游戏

- **CyCoolThrow** — 酷炫投掷
- **CyFlameFloor** — 火焰地板
- **CyTetris** — 俄罗斯方块

## 游戏服务器 API

控制面板依赖以下 API 端点（已在各游戏的 `control_server.js` 中实现）：

| 端点 | 方法 | 说明 |
|------|------|------|
| `/api/game/config` | GET | 获取游戏配置（可用游戏和关卡列表） |
| `/api/game/status` | GET | 获取当前游戏运行状态 |
| `/api/service/status` | GET | 获取服务整体状态和 issues |
| `/api/Run/job2` | POST | 启动游戏 |
| `/api/Run/job2` | DELETE | 停止游戏 |

## 文件结构

```
game-remote-web-control/
├── index.html      # 页面结构
├── style.css       # 赛博朋克主题样式 + RTL 支持
├── app.js          # 逻辑：i18n、多服务器管理、API 调用
├── screenshots/    # UI 截图
└── README.md
```

## 技术栈

纯 HTML + CSS + JavaScript，零依赖。
