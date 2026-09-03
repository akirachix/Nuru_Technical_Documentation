## Technology Stack

### Framework
* **Flutter** (Dart SDK `^3.11.1`) - cross-platform (iOS/Android) app framework.

### Language
* **Dart** - used throughout; no platform-specific (Kotlin/Swift) code beyond default Flutter scaffolding.

### Libraries
* **`provider` (^6.1.2)** - state management. `ChangeNotifier` view models are exposed to the widget tree via `MultiProvider`/`ChangeNotifierProvider` and consumed with `context.watch`/`context.read`.
* **`http` (^1.6.0)** - all network calls to the backend REST API.
* **`flutter_secure_storage` (^9.2.2)** - persists the session access token in platform secure storage (Keychain / Keystore).
* **`google_fonts` (^8.2.1)** - font loading; the app also bundles its own `Inter` font family locally (`assets/fonts/Inter.ttf`).
* **`lucide_icons_flutter` / `cupertino_icons`** - iconography, alongside Material Icons.
* **`flutter_launcher_icons` (dev, ^0.14.4)** - generates platform launcher icons from `assets/images/eloop-icon.png`.
* **`flutter_lints` (dev, ^6.0.0)** - standard Flutter lint rules.

Package identity: `name: eloop`, current version `1.0.0+1` (`pubspec.yaml`).

### Prerequisites
* Flutter SDK compatible with Dart `^3.11.1` (Flutter 3.24+ recommended).
* Android: Android Studio + Android SDK. iOS: Xcode + CocoaPods (macOS only).
* A device, emulator, or simulator.
