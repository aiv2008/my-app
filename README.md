# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## 在 WSL 下开发并构建 iOS

若使用 **WSL2** 且无 Mac，可在 WSL 完成日常开发，用 **EAS Build** 在云端构建 iOS。

- 操作步骤：**[docs/WSL-REACT-NATIVE-SETUP.md](docs/WSL-REACT-NATIVE-SETUP.md)**
- 配置记录（环境选择与结论）：**[docs/SETUP-NOTES.md](docs/SETUP-NOTES.md)**

## 应用入口与路由

- **默认首屏为登录页**：打开应用（或访问 `/`）时会重定向到 **`/login`**。
- **实现方式**：在 **`app/_layout.tsx`** 中用 `usePathname()` 判断当前路径，当 `pathname === '/'` 时渲染 `<Redirect href="/login" />`，其余路径正常渲染 `Stack`（登录、Tabs、Modal）。`anchor` 仅用于 Web 模态锚点，不控制首屏；Web 端“默认页”由 URL 决定，故需显式重定向。
- **项目结构说明**：**[docs/PROJECT-STRUCTURE.md](docs/PROJECT-STRUCTURE.md)**

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
