# 配置记录（WSL + Expo + Fedora）

本文档记录本次在 WSL（Fedora）上搭建 React Native (Expo) 开发环境时的选择与结论。

---

## 环境

- **系统**：WSL2，Fedora Linux 42
- **项目**：Expo (React Native)，expo-router，Expo 54
- **目标**：在 WSL 做日常开发，iOS 通过云端构建（无本机 Mac）

---

## 已做的选择

1. **用 Expo 方式**  
   继续使用当前 Expo 项目，不改为裸 React Native。日常用 `npm start`，按 `w` 跑 Web、按 `a` 跑 Android。

2. **iOS 构建**  
   使用 **EAS Build** 在云端打 iOS 包（`eas build -p ios`），无需在 WSL 装 Xcode。项目已配置 `eas.json`，可选配 GitHub Actions 自动构建。

3. **Watchman**  
   - Fedora 42 官方源无 `watchman` 包（`dnf install watchman` 报 No match）。
   - 从源码编译：`autogen.sh` 时 getdeps 构建 **Boost** 失败（已知问题）。
   - COPR `lehrenfried/watchman`：包为 Fedora 34 构建，依赖 **OpenSSL 1.1**（`libcrypto.so.1.1`），Fedora 42 已移除该兼容库，安装会报错。
   - **结论**：当前环境下不安装 Watchman，Expo 可正常使用，仅大项目时文件监听略慢。

---

## 日常命令速查

| 操作           | 命令 |
|----------------|------|
| 启动开发服务器 | `npm start` |
| Web            | 启动后按 `w` |
| Android        | 启动后按 `a` |
| 打 iOS 包      | `eas build -p ios --profile preview`（需先 `eas login`） |

---

## 相关文件

- **EAS 配置**：`eas.json`
- **GitHub 自动构建 iOS**：`.github/workflows/eas-build-ios.yml`（需在仓库 Secrets 中配置 `EXPO_TOKEN`）
- **详细步骤**：`docs/WSL-REACT-NATIVE-SETUP.md`
