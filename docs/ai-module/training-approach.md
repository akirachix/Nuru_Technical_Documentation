## Training Approach

### Self-Trained, Not Off-the-Shelf

Rather than using a pretrained YOLOv8s checkpoint as-is, the team **fine-tuned the model from scratch on a custom dataset** built specifically for e-waste component classification. This was necessary because generic object classification models aren't trained to recognize the specific visual characteristics of items like loose batteries and PCBs on an industrial sorting line.

### Dataset

- **Size:** Approximately **2,500 images**.
- **Classes:** **19 distinct classes** of e-waste components.
- **Sources:**
  - **Roboflow** — used for sourcing and/or augmenting portions of the training dataset (Roboflow is a common platform for managing and preprocessing computer vision datasets).
  - **Google** — supplementary images collected via general web image search to broaden coverage of each class.

### Training Details

**Hardware:** Trained on a Google Colab instance with a Tesla T4 GPU (14.9 GB memory, CUDA 13.0).

**Model & duration:** YOLOv8s classification model (`yolov8s-cls.pt`), fine-tuned for 50 epochs at an image size of 224×224.

**Train/validation/test split:**

| Split      | Images | Classes |
| ---------- | ------ | ------- |
| Train      | 1,771  | 19      |
| Validation | 499    | 19      |
| Test       | 246    | 19      |

Total: 2,516 images across all splits.
