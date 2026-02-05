# WSL 下 React Native (Expo) 开发环境

在 WSL2 中完成日常开发，iOS 通过 **EAS Build** 在云端构建，无需本机 Mac。

---

## 一、WSL 环境准备

### 1. 安装 Node.js（推荐 nvm）

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc   # 或 source ~/.zshrc
nvm install --lts
nvm use --lts
node -v   # 应为 v20+
```

### 2. 安装 Watchman（可选）

用于文件监听，减少 Metro 卡顿。

- **Ubuntu/Debian**：`sudo apt update && sudo apt install -y watchman`
- **Fedora**：`sudo dnf install watchman`（若提示无此包，见下方）

**Fedora 无包或安装失败时**（如 Fedora 42）：

- 官方源可能没有 watchman；COPR `lehrenfried/watchman` 的包依赖 OpenSSL 1.1，在 Fedora 42 上会报 `libcrypto.so.1.1` 缺失；从源码编译常因 Boost/getdeps 失败。
- **建议**：直接不安装 Watchman，Expo 可正常跑，仅大项目时文件监听略慢。若已启用上述 COPR 且报错，可执行：`sudo dnf copr disable lehrenfried/watchman`。

### 3. 安装项目依赖并启动

```bash
cd /home/anson/workspace/my-app
npm install
npm start
```

启动后按 **`w`** 跑 Web、按 **`a`** 跑 Android；iOS 在 WSL 无法本地运行，用下面 EAS 构建。

---

## 二、iOS 构建（EAS Build）

```bash
npm install -g eas-cli
eas login
eas build:configure   # 首次
eas build -p ios --profile preview   # 或 development / production
```

构建在 Expo 云端执行，完成后在 [expo.dev](https://expo.dev) 下载或通过链接安装。可选：在 GitHub 仓库 Secrets 中配置 `EXPO_TOKEN`，使用 `.github/workflows/eas-build-ios.yml` 自动构建。

---

## 三、日常开发流程小结

| 操作             | 方式                    |
|------------------|-------------------------|
| 写代码、跑 Web/Android | WSL：`npm start` → w / a |
| 打 iOS 安装包    | WSL：`eas build -p ios` |
| 真机测试 iOS     | 用 EAS 构建后的链接安装 |

---

## 四、配置记录

本次在 Fedora 42 上的具体选择与结论见 **`docs/SETUP-NOTES.md`**。
