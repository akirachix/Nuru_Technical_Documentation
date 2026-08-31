import { defineConfig } from "vitepress";

export default defineConfig({
  title: "eLoop Technical Documentation",
  description:
    "Internal and external architecture guidelines for ELoop Platform",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Overview", link: "/overview/product-definition" },
    ],

    sidebar: [
      {
        text: "1. Overview",
        collapsed: true,
        items: [
          {
            text: "1.1 Product Definition",
            link: "/overview/product-definition",
          },
          {
            text: "1.2 The Problem It Solves",
            link: "/overview/the-problem-it-solves",
          },
          { text: "1.3 Who Uses It", link: "/overview/target-users" },
          { text: "1.4 Key Features", link: "/overview/key-features" },
        ],
      },
      {
        text: "Architecture",
        collapsed: true,
        items: [
          { text: "Core Principles", link: "/architecture/core-principles" },
          { text: "Data Flow", link: "/architecture/data-flow" },
          {
            text: "Design Guidelines",
            link: "/architecture/design-guidelines",
          },
          { text: "Scalability", link: "/architecture/scalability" },
          { text: "System Diagram", link: "/architecture/system-diagram" },
        ],
      },
      {
        text: "AI Module",
        collapsed: true,
        items: [
          { text: "AI Overview", link: "/ai-module/ai-overview" },
          { text: "Models Used", link: "/ai-module/models-used" },
          { text: "Training Approach", link: "/ai-module/training-approach" },
          { text: "Data Pipeline", link: "/ai-module/data-pipeline" },
          { text: "Evaluation Method", link: "/ai-module/evaluation-method" },
          { text: "Accuracy Results", link: "/ai-module/accuracy-results" },
        ],
      },
      {
        text: "Security",
        collapsed: true,
        items: [
          { text: "Security Posture", link: "/security/security-posture" },
          {
            text: "Application Security",
            link: "/security/application-security",
          },
          { text: "Data Security", link: "/security/data-security" },
          {
            text: "Data Classification",
            link: "/security/data-classification",
          },
          { text: "Network Security", link: "/security/network-security" },
          { text: "Risk Management", link: "/security/risk-management" },
          { text: "Incident Response", link: "/security/incident-response" },
          { text: "Conclusion", link: "/security/conclusion" },
        ],
      },
    ],
  },
});
