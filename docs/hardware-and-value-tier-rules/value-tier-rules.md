# 8.2 Value Tier Rules

The same rule-based tier calculator is applied both to an individual scanned component and to a batch's averaged material composition to categorize items uniformly.

## Evaluation Rule Matrix

| Tier | Rule |
| :--- | :--- |
| **HIGH** | \(\text{Gold} \geq 0.015\%\) OR \(\text{Cobalt} \geq 5\%\) OR \(\text{Lithium} \geq 1.5\%\) |
| **MEDIUM** | \(\text{Copper} \geq 12\%\) OR \(\text{Nickel} \geq 5\%\) |
| **LOW** | Everything else |


## Core Algorithmic Logic

The system executes this evaluation sequence via a deterministic Python routine. The code below contains targeted anchor contexts mapped directly to your left navigation sidebar links:

### <span id="algorithm">def calculate_value_tier(materials: dict) -> str:</span>

### <span id="gold">gold = materials.get("gold", 0.0)</span>

### <span id="cobalt">cobalt = materials.get("cobalt", 0.0)</span>

### <span id="lithium">lithium = materials.get("lithium", 0.0)</span>

### <span id="copper">copper = materials.get("copper", 0.0)</span>
### <span id="nickel">nickel = materials.get("nickel", 0.0)</span>

```python
def calculate_value_tier(materials: dict) -> str:
    gold = materials.get("gold", 0.0)
    cobalt = materials.get("cobalt", 0.0)
    lithium = materials.get("lithium", 0.0)
    copper = materials.get("copper", 0.0)
    nickel = materials.get("nickel", 0.0)
```

## Threshold Evaluation Blocks

### High Tier Assessment <span id="high-tier"></span>
The algorithm checks primary high-value precious and critical mineral thresholds first to maximize premium lot recovery visibility.
```python
    if gold >= 0.015 or cobalt >= 5.0 or lithium >= 1.5:
        return "HIGH"
```

### Medium Tier Assessment <span id="med-tier"></span>
If high-value constraints are unmet, the logic evaluates mid-range industrial base metal concentrations to safeguard stable asset indexing.
```python
    if copper >= 12.0 or nickel >= 5.0:
        return "MEDIUM"
```

### Low Tier Fallback <span id="low-tier"></span>
Any payload volume failing to breach precious or base metal boundary constraints falls back automatically to a baseline valuation rating.
```python
    return "LOW"
```
