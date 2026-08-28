# 8.3 Batch Tiering

The platform implements an exact statistical approach to assess the cumulative raw mineral asset valuation of bulk physical lots prior to marketplace publishing.

---

## The Valuation Aggregation Rule

To guarantee metallurgical accuracy and protect B2B transactional integrity, the system calculates lot valuations using an absolute data rollup sequence:

> [!IMPORTANT]  
> When a batch is finished, **every single material percentage is averaged across all scanned devices** in the batch before the same tier evaluation rules are applied to the resulting average. 

The batch tier is **not simply the majority individual tier**. The system avoids modal voting logic to prevent minor high-yield components from skewing gross weight valuations, or conversely, to ensure a high volume of low-tier casings do not mask a highly valuable deposit of rare metals inside a heavy lot.

---

## Grading Methodology Comparison

| Factor Matrix | Mode Voting Model (Rejected) | e-Loop Weighted Average (Enforced) |
| :--- | :--- | :--- |
| **Algorithmic Logic** | Counts the individual tier labels and returns the most frequent string. | Sums every single mineral weight metric and divides by total device volume. |
| **Commercial Accuracy** | High margin of error; misrepresents true extractable mineral concentrations. | Perfect precision; precisely tracks total processing yields for buyers. |
| **Sourcing Protection** | Exposes buying refineries to volatile, inaccurate material assumptions. | Secures contract expectations by verifying raw underlying material values. |

---

## Step-by-Step System Rollup Execution Flow

```text
  [ Individual Scans ] ──> Log Component Element Percentages (Gold, Cobalt, etc.)
                                                 │
                                                 v
  [ Operator Triggers ] ──> Click "Finish Batch" Pipeline Interceptor
                                                 │
                                                 v
  [ Backend Compute ] ──> Execute: Sum(Material_Pct) / Count(Total_Devices)
                                                 │
                                                 v
  [ Ultimate Valuation ] ──> Map Resulting Average Averages to Chapter 8.2 Schema
                                                 │
                                                 v
  [ Showroom Publishing ] ──> Lock Batch State to "Listed" complete with Tier Label
```

1. **Extraction Array Initialization:** The backend collects every recorded item entry linked to the targeted operational lot.
2. **True Average Summation:** The service layer compiles an isolated arithmetic mean for every specific target mineral tracks—including **Gold**, **Cobalt**, **Lithium**, and **Copper**—across the whole device inventory layout array.
3. **Rule Set Execution:** The computed average matrix is run directly through the exact threshold criteria definitions declared in **Section 8.2**.
4. **Platform State Transition:** The resulting tier grade (**High**, **Medium**, or **Low**) is permanently stamped onto the parent batch record, and the entry is published live to the global Digital Showroom ledger.
