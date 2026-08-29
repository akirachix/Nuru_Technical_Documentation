## Design Guidelines

**Style Manual**

This page outlines the visual layout rules for the eLoop platform. It connects our Figma interface designs directly to frontend code tokens.



## 1. Visual Design Principles

### Clean Visual Hierarchy
* **Primary Numbers First:** Live scanning numbers, weight data, and batch values must use the largest, boldest font scales so they pop instantly.
* **Secondary Labels Last:** System logs, database timestamps, and serial numbers must use smaller, softer text styles.
* **Semantic Accent Tags:** High-value batches use our bold emerald theme badges, while status updates use clear color tags (`Active`, `Listed`, `Booked`).

### Box Grid & Spacing Scale
* **Card Gaps:** All card dashboard boxes must stay exactly `24px` apart on the layout grid.
* **Inner Card Breathing Room:** All content panels must enforce a clean `30px` padding from the borders so the graphs and data text never look crowded.
* **Section Separation:** Major page blocks must use a uniform `40px` vertical margin space to prevent scrolling pages from feeling messy.


## 2. Brand Identity Rules

### Core Color Scale

```text
[ Primary Emerald ] ──> #10B981 (Main Callout Actions / Active Status Badges)
[ Dark Green ]      ──> #059669 (Interactive Button Hovers / Active Links)
[ Pale Green ]      ──> #34D399 (Light Mode Borders / Grid Highlights)
[ Soft Slate ]      ──> #F8FAFC (Clean Dashboard Card Background Boxes)
[ Deep Navy ]       ──> #0B0F19 (Dark Mode Interface Core Canvas)

1. Value Tiers (Tier Column)
 ├── High   ──> Soft Mint Green Background  + Dark Green Text
 ├── Medium ──> Soft Orange Background      + Dark Brown Text
 ├── Low    ──> Soft Red/Pink Background    + Dark Red Text

2. Lifecycle Status (Status Column)
 ├── Complete ──> Very Pale Mint Background + Dark Emerald Green Text
 ├── Booked   ──> Very Pale Blue Background + Deep Indigo Blue Text
 ├── Listed   ──> Plain Black Bold Text      + No Background Pill
```


### Typography Weights & Styles
* **Main Heading Text:** Extra-bold `font-weight: 900` for clear page titles.
* **Card Dashboard Titles:** Thick `font-weight: 900` to establish clean component boxes.
* **Body Form Descriptions:** Regular `font-weight: 500` for highly readable text inputs and data lists.

### Interface Component Standards
* **Rounded Corners:** All dashboard blocks, input panels, and action buttons must use a clean `12px` rounded border radius.
* **Card Elevations:** Content boxes use a subtle `rgba(0, 0, 0, 0.02)` drop shadow for depth on light canvases.
* **Interactive Hover Effect:** When a mouse sweeps over an interface card item, the element must glide upwards smoothly using `transform: translateY(-6px)`.
