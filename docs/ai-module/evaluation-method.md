## Evaluation Method

### How the Model Was Assessed

Model performance was measured using **standard classification accuracy metrics reported automatically during training**, specifically **Top-1** and **Top-5 accuracy**, rather than through a separately built evaluation pipeline or a field pilot study at a live recycling center.

### What Top-1 and Top-5 Accuracy Mean

* **Top-1 Accuracy:** The percentage of test images where the model's single highest-confidence prediction exactly matches the correct class.
* **Top-5 Accuracy:** The percentage of test images where the correct class appears **anywhere** among the model's five highest-confidence predictions. This is useful when some classes are visually similar to each other and might be reasonably confused, but still shows the model is "in the right range."

### Current Scope of Evaluation

This training-time metric approach means results reflect performance on the held-out portion of the training dataset (drawn from Roboflow and Google-sourced images), not performance on live images from an actual sorting line.

