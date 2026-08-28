# 13.2 Integration Tests (API Endpoints)

Integration testing verifies that the API endpoint layers communicate correctly with backend services, relational databases, and multi-tenant authorization engines under runtime conditions.

---

## Target Endpoint Resource

* **Testing Route URL:** `https://herokuapp.com`
* **Testing Framework Provider:** **Postman Test Suite Automation**

---

## Verification Scope & Operational Objective

The automated Postman test script provides comprehensive runtime assertion coverage for the **Device Intake API endpoint**. The suite evaluates service integration layers across three primary operational parameters:

* **Global Network Metrics:** Evaluates absolute server latency, processing turnaround times, standard TCP connection handshake flags, and base pipeline availability.
* **JSON Metadata Handling:** Validates strict enforcement of payload structures, parameter schema typing definitions, and structured response parsing rules.
* **Dynamic Conditional Assertions:** Evaluates system edge behaviors across multiple explicit application response states.

---

## Response Assertion Validation Matrix

The integration test suite systematically simulates client transaction conditions to confirm the API handles standard status blocks appropriately:

| Expected Status Code | Architectural Semantic Status | Evaluated Integration Validation Rule |
| :---: | :--- | :--- |
| **`201`** | **Created** | Validates successful schema parsing, model field extraction, database insert executions, and atomic primary key assignment. |
| **`401`** | **Unauthorized** | Confirms request interception patterns when an incoming payload lacks valid credential vectors or session signatures. |
| **`403`** | **Forbidden** | Verifies that explicit multi-tenant access boundaries block users attempting actions outside their role permission scope. |
| **`422`** | **Unprocessable Entity** | Checks field parsing bounds when receiving data structural errors, improperly formatted types, or missing mandatory inputs. |
| **`500`** | **Internal Server Error** | Evaluates backend resilience, exception wrapper safety paths, and server logging handling under unhandled application faults. |
