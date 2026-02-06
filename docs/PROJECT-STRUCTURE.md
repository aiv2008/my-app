# 项目结构说明

基于 **Expo (React Native)** + **expo-router** 的文件路由结构。

---

## 根目录概览

```
my-app/
├── app/                 # 页面与路由（expo-router 按文件生成路由）
├── assets/              # 静态资源（图标、图片等）
├── components/          # 可复用 UI 组件
├── constants/           # 全局常量（主题色、字体等）
├── hooks/               # 自定义 React Hooks
├── docs/                # 项目文档
├── scripts/             # 脚本（如 reset-project）
├── app.json             # Expo 应用配置（名称、图标、scheme 等）
├── eas.json             # EAS Build 配置（iOS/Android 构建）
├── package.json         # 依赖与 npm 脚本
└── tsconfig.json        # TypeScript 配置
```

---

## app/（页面与路由）

采用 **expo-router**：目录和文件名直接对应路由，无需手写路由表。

| 路径 | 说明 |
|------|------|
| `_layout.tsx` | 根布局：主题、Stack 导航、全局 StatusBar |
| `(tabs)/` | 底部 Tab 导航组（括号表示路由分组，URL 中不体现） |
| `(tabs)/_layout.tsx` | Tab 布局：Home、Explore 等 Tab 配置 |
| `(tabs)/index.tsx` | 首页，对应路由 `/` |
| `(tabs)/explore.tsx` | 探索页，对应路由 `/explore` |
| `modal.tsx` | 模态页，对应路由 `/modal` |

- 以 `_` 开头的文件为布局或内部文件，不单独成路由。
- 新页面：在 `app/` 下新建 `xxx.tsx` 即得到 `/xxx`；放在 `(tabs)/` 下则同时出现在底部 Tab。

---

## components/

可复用的 UI 与交互组件。

| 文件/目录 | 说明 |
|-----------|------|
| `themed-text.tsx` / `themed-view.tsx` | 随系统亮/暗色变化的文字和容器 |
| `parallax-scroll-view.tsx` | 带视差效果的滚动视图 |
| `hello-wave.tsx` / `haptic-tab.tsx` | 示例动效与触感 |
| `external-link.tsx` | 外链组件 |
| `ui/` | 通用 UI（如 `icon-symbol`、`collapsible`） |

业务页面放在 `app/`，通用组件放在 `components/`。

---

## constants/

| 文件 | 说明 |
|------|------|
| `theme.ts` | 颜色（`Colors.light` / `Colors.dark`）、字体（`Fonts`）等主题常量 |

---

## hooks/

| 文件 | 说明 |
|------|------|
| `use-color-scheme.ts` | 获取当前亮/暗色模式 |
| `use-theme-color.ts` | 根据主题取色 |
| `use-color-scheme.web.ts` | Web 端颜色模式实现（如需要） |

---

## 配置文件

| 文件 | 说明 |
|------|------|
| `app.json` | Expo 应用元信息：name、slug、icon、scheme、iOS/Android 配置等 |
| `eas.json` | EAS Build 的构建 profile（development / preview / production） |
| `tsconfig.json` | TypeScript 编译选项；`@/` 指向项目根目录，便于 `import from '@/components/...'` |

---

## 其他

- **.github/workflows/**：GitHub Actions，如 `eas-build-ios.yml` 用于云端构建 iOS。
- **docs/**：WSL 搭建、EAS、真机调试等说明（如 `WSL-REACT-NATIVE-SETUP.md`、`SETUP-NOTES.md`）。
- **scripts/reset-project.js**：将当前 `app` 重置为空白模板（原内容移到 `app-example`）。

新增功能时：**页面**加在 `app/`，**通用组件**加在 `components/`，**全局样式/常量**放在 `constants/` 或 `theme.ts`。
