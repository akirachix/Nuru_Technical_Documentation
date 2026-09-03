## Project Folder Structure

```text
├── assets
│   ├── fonts
│   │   └── Inter.ttf
│   └── images
│   │   ├── app_logo.png
│   │   ├── app_logo_small.png
│   │   ├── e-loop_logo.png
│   │   ├── eloop-icon.png
│   │   ├── landing_illustration.png
│   │   ├── onboarding1.png
│   │   ├── onboarding2.png
│   │   └── onboarding3.png
├── lib
│   ├── constants
│   │   └── app_colors.dart                     Color palette, font family constant
│   ├── main.dart                               App entrypoint
│   ├── models                                  Dart Classes
│   │   ├── admin_account.dart
│   │   ├── booking_model.dart
│   │   ├── catalog_item.dart
│   │   ├── company.dart
│   │   ├── forgot_password_model.dart
│   │   ├── login_model.dart
│   │   ├── totp_model.dart
│   │   ├── user_model.dart
│   │   ├── user_role.dart
│   │   └── worker_model.dart
│   ├── screens                                 UI, grouped by feature
│   │   ├── auth                                splash, onboarding, login, forgot password,create company/account/worker, TOTP, manage workers
│   │   ├── bookings                            bookings_screen.dart
│   │   ├── catalog                             catalog_screen.dart, batch_details_screen.dart
│   │   ├── dashboard                           main_layout.dart (app shell), role_router.dart
│   │   ├── notifications                       notifications_screen.dart
│   │   └── profile                             profile_screen.dart, change_password_screen.dart
│   ├── services                                API clients & platform services
│   │   ├── account_api_service.dart
│   │   ├── auth_service.dart
│   │   ├── auth_session.dart                   In-memory session singleton
│   │   ├── batch_service.dart
│   │   ├── booking_service.dart
│   │   ├── catalog_repository.dart
│   │   ├── company_api.dart
│   │   ├── secure_session_storage.dart         Wraps flutter_secure_storage
│   │   ├── totp_service.dart
│   │   ├── user_service.dart
│   │   └── worker_service.dart
│   ├── utils
│   │   └── validators.dart                     Shared form validators
│   ├── viewModel                               ChangeNotifier view models
│   │   ├── account_view_model.dart
│   │   ├── auth_view_model.dart
│   │   ├── booking_view_model.dart
│   │   ├── company_view_model.dart
│   │   ├── forgot_password_view_model.dart
│   │   ├── manage_workers_view_model.dart
│   │   ├── profile_view_model.dart
│   │   ├── splash_view_model.dart
│   │   ├── totp_view_model.dart
│   │   └── worker_model.dart
│   └── widgets                                 Reusable components
│       ├── eloop_logo.dart
│       ├── labeled_text_field.dart
│       └── yield_bar_chart.dart

```
