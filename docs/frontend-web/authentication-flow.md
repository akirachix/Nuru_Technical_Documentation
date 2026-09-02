## Authentication & Onboarding Flow

### Architectural Process Flow

```text
[ Welcome Screen ]
        │
        ├──► [ Sign In ] ──► [ Admin/Worker Authentication ] ──► ( Access Protected Routes )
        │
        └──► [ Sign Up ] ──► [ Choose Organization ]
                                     │
                                     └──► [ Create Company ] *(Generates Admin Profile)*
                                                  │
                                                  └──► [ Create Admin Account ]
                                                                │
                                                                └──► [ Add Other Admins & Workers ]
```


### Multi-Tenant Onboarding Pipeline

* **Organization Selection**
  * Users select their profile type at the root selection checkpoint (`src/app/signup/organization/page.tsx`), branching the system registry into either a Recycling Center or Refinery Factory environment.
* **Company Profile Setup**
  * The registration wizard transitions into the organizational profiling interface (`src/app/signup/company/page.tsx`), prompting data collection across three mandatory profile fields:
    * `Company Name`: Descriptive text field establishing the business entity identity.
    * `Company Type`: Interactive drop-down mapping the specific operational branch categorization.
    * `Company Email`: Secured contact address entry field bound to core communication networks. This email serves as the primary unique identifier used to verify the administrator during system login.
* **Individual Account Provisioning**
  * The user who registers the company automatically becomes the **Admin** of that profile. The wizard routes into the user credential creation panel (`src/app/signup/account/page.tsx`), establishing personal profile parameters before server-side ingestion:
    * **User Identity:** Split entry parameters allocating `First Name` and `Last Name` markers.
    * **System Access:** Core contact linkage utilizing an explicit, validated `Email` address input.
    * **Security Matrix:** Secure mask field array pairing `Password` with a strict `Confirm Password` verification check to ensure credential accuracy.


### Administrator Access and Account Provisioning

* **Admin Verification**
  * When logging in via the central sign-in interface, the system checks credentials against the registered **Company Email** to confirm and verify the administrator's unique authorization level.
* **Worker & Team Provisioning**
  * Immediately following administrative account creation, the verified **Admin** secures the unique structural clearance to add other users directly to their company workspace via the team provisioning portal (`src/app/dashboard/workers/new/page.tsx`):
    * Captures  user parameters which are, `First Name`, `Last Name`, and an account `Email`.
    * Integrates a `Role` drop-down menu that allows the administrator to assign new accounts as either additional **Admins** or **Company Workers** inside their company roster, respective their Company Type.
    * Features a matching credential validation block pairing `Password` with a `Confirm Password` text mask field.


### Password Reset Self-Service

* **Password Recovery Portal**
  * Users can update or recover credentials through a dedicated password recovery form interface.
* **Input Validation**
  * Secures data integrity by enforcing structured input validation across two clean parameters: `New Password` and `Confirm New Password`.
* **Database Ingestion**
  * Activating the `Reset Password` trigger fires a secure update payload directly to the cloud backend.


### Session Security & Token Strategy

* **Persistent Verification**
  * Submitting any authentication, recovery, or registration form fires an asynchronous validation request to the backend via the system API wrapper (`src/lib/api.ts`).
* **Storage Isolation**
  * Validated server responses return a unique session authorization token that is saved in local browser storage to keep sessions active without constant logins.
* **Session Termination**
  * Tapping the logout action wipes all stored authorization keys and identity cookies, instantly redirecting the user back to the primary welcome portal.
