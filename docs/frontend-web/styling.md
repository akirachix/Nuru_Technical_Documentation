## Styling & Design Tokens

The application uses **Tailwind CSS** to manage layout styling, color variables, and interactive components across all user interfaces.

### Tailwind Architecture
* **File Scanning:** Scans all files inside the `src/` directory to compile only the utility classes used in production.
* **Global Rules:** Base configurations are initialized inside `src/app/globals.css` using standard `@tailwind` directives.
* **PostCSS Pipeline:** Uses `postcss.config.mjs` to automatically apply vendor prefixes and ensure global browser compatibility.

### Design Tokens

#### Color Palette
* **Brand Accent (Green):** Used for navigation highlights, forward actions, and successful system confirmations.
* **Value Tiers:** Categorized by high-visibility material tags:
  * `High` Tier: Teal
  * `Medium` Tier: Amber
  * `Low` Tier: Pink
* **Alert States (Red):** Flags damaged device entries, empty input fields, and system errors.

#### Typography & Spacing
* **Font Structure:** Sans-serif typefaces is used to ensure text legibility under harsh overhead warehouse lighting.
* **Layout Density:** Section whitespace limits visual clutter and separates information blocks.

#### Component Geometry
* **Border Radius:** Applied globally via `rounded-lg` and `rounded-xl` classes on buttons, cards, and input text borders.
* **Target Padding:** Structural elements enforced click bounds to ensure comfortable interaction targets.
