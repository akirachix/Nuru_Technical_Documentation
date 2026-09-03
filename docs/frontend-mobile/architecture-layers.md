## Architecture Layers

Mobile follows an MVVM-style layering on top of Flutter, wired together with `provider`:

1. **Models** (`lib/models/`) - immutable data classes with `fromJson`/`toJson` for backend payloads.
2. **Services** (`lib/services/`) - stateless or session-scoped API clients wrapping `http` calls, plus platform integrations like secure token storage. No widget/UI code lives here. Services throw plain or typed `Exception`s on failure.
3. **ViewModels** (`lib/viewModel/`) - `ChangeNotifier` classes holding UI state that call into services. Screens subscribe via `context.watch`/`context.read`.
4. **Screens/Widgets** (`lib/screens/`, `lib/widgets/`) - render state from a view model and dispatch user actions back to it.

App-wide providers (`AuthSession`, `CatalogRepository`, `AuthViewModel`, `TotpViewModel`, `ForgotPasswordViewModel`, `SplashViewModel`, `BookingViewModel`) are constructed once in `main.dart`. Screen-scoped view models (e.g. `ManageWorkersViewModel`) are provided locally, close to where they're used (`main_layout.dart`).

### Role coverage gap

The mobile app recognizes `company_admin` and `refinery_operator` as the roles since the mobile app is designed for refineries only.
