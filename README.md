# Apple News风格应用

> 基于React Native开发的跨平台新闻阅读应用，完美复刻iOS端Apple News的UI交互体验

## 🚀 功能特性
- 多端适配：已验证在iPhone 13/14系列及主流Android机型完美运行
- 使用expo-router实现双端路由跳转（已适配Android物理返回键和iOS手势返回）
- 通过react-native-safe-area-context处理刘海屏/状态栏差异
- 采用expo-constants动态获取平台特性参数
- 
## 关键技术点
| 技术方向       | 实现方案                      |
|----------------|-----------------------------|
| 路由系统       | expo-router文件式路由        |
| 样式兼容       | Platform.select动态样式选择 |
| 类型检查       | TypeScript严格模式          |

## ⚡ 快速开始
### 环境要求
- Node.js 18+
- Expo CLI 7.x
- Xcode 15+ (iOS) / Android Studio (Android)

### 安装步骤
```bash
git clone https://github.com/FishCharlotte/toyApple.git
cd project
npm install
expo start
