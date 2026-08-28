# 13.1 Unit Tests (Services)

For the informational website, the following tests were carried out to validate interface reliability, visual consistency, and user interaction mechanics.

---

## Test Automation Suite Breakdown

The front-end test automation architecture is divided into three focused spec files targeting critical functional layers of the web layout:

* **`body.cy.js`**  
  The test suite focuses on validating core DOM stability, critical typography stylesheets, page crash guardrails, and smooth-scroll anchor navigation.
* **`footer.cy.js`**  
  This block runs structural and visual checks on the webpage's `<footer>` element. It ensures that the bottom of the page renders completely, contains valid structural text, and matches design system styles.
* **`functionality.cy.js`**  
  This block validates that the web page is fully scrollable and ensures that its call-to-action buttons can be clicked successfully by users.

---

## Testing Objectives & Strategy Matrix

| Test File | Target Layer | Primary Verification Criteria |
| :--- | :--- | :--- |
| **`body.cy.js`** | Document Object Model (DOM) | Baseline rendering stability, style sheet accuracy, and anchor path routing rules. |
| **`footer.cy.js`** | Structural Page Footer | Structural completion, exact copyright/text string presence, and layout constraints. |
| **`functionality.cy.js`** | Core User Experience (UX) | Scroll window availability and absolute button interaction response states. |
