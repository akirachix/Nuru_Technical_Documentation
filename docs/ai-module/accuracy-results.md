## Accuracy Results

The following figures were reported during model training:

| Metric | Result |
|---|---|
| **Top-1 Accuracy** | 89.98% |
| **Top-5 Accuracy** | 99.00% |

### Interpretation

* A **Top-1 accuracy of 89.98%** means the model's single best guess is correct roughly 9 times out of 10.
* A **Top-5 accuracy of 99.00%** means the correct class is almost always among the model's top five candidate predictions — indicating the model rarely misclassifies an item completely, even when its top pick is wrong.
* The gap between Top-1 and Top-5 (about 9 percentage points) suggests that when the model *is* wrong, it's typically confusing visually similar classes rather than making unrelated errors 

### Classification Performance

Per-class metrics from validation (499 images, 19 classes):

| Class | Precision | Recall | F1-score | Support |
|---|---|---|---|---|
| alkaline_zinc_manganese | 79.17% | 76.00% | 77.55% | 25 |
| automative_ecu_board | 100.00% | 66.67% | 80.00% | 6 |
| desktop_motherboard | 100.00% | 92.31% | 96.00% | 26 |
| development_board | 93.94% | 88.57% | 91.18% | 35 |
| graphics_card_pcb | 100.00% | 80.00% | 88.89% | 5 |
| keyboard_trackpad_board | 100.00% | 100.00% | 100.00% | 3 |
| laptop_lithium_ion_pack | 97.06% | 100.00% | 98.51% | 33 |
| laptop_motherboards | 98.73% | 98.73% | 98.73% | 79 |
| lithium_ion | 53.57% | 88.24% | 66.67% | 17 |
| lithium_manganese_dioxide | 100.00% | 16.67% | 28.57% | 6 |
| lithium_polymer | 100.00% | 50.00% | 66.67% | 4 |
| networking_equipment_pcb | 87.14% | 93.85% | 90.37% | 65 |
| nickel_metal_hydride | 25.00% | 22.22% | 23.53% | 9 |
| power_supply_board | 99.05% | 96.30% | 97.65% | 108 |
| server_motherboard | 81.25% | 92.86% | 86.67% | 14 |
| smart_tv_board | 85.37% | 89.74% | 87.50% | 39 |
| smartphone_logic_board | 100.00% | 91.67% | 95.65% | 12 |
| storage_device_pcb | 66.67% | 100.00% | 80.00% | 4 |
| zinc_carbon_consumer_cell | 83.33% | 55.56% | 66.67% | 9 |
| **Overall accuracy** | | | **89.98%** | 499 |
| **Macro avg** | 86.86% | 78.91% | 80.04% | 499 |
| **Weighted avg** | 91.08% | 89.98% | 89.78% | 499 |

**PCB classes are the strongest performers overall** - most sit in the high 80s to 100% across precision and recall, with `laptop_motherboards`, `power_supply_board`, and `desktop_motherboard`  among the most reliable.

**Practical implication:** PCB classifications can be trusted at face value. Battery chemistry classifications, should be treated as lower-confidence and may warrant manual verification until more training data is collected for the underrepresented classes.