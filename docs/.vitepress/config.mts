import { defineConfig } from "vitepress";

export default defineConfig({
  base: '/Nuru_Technical_Documentation/',
  title: "eLoop Technical Documentation",
  description: "Internal and external architecture guidelines for ELoop Platform",
  srcDir: '.',
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
          { text: "1.1 Product Definition", link: "/overview/product-definition" },
          { text: "1.2 The Problem It Solves", link: "/overview/the-problem-it-solves" },
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
          { text: "Design Guidelines", link: "/architecture/design-guidelines" },
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
        text: "Backend",
        collapsed: true,
        items: [
          { text: "Api Overview", link: "/backend/api-overview" },
          { text: "Hosted API", link: "/backend/hosted-api" },
          { text: "Prerequisites", link: "/backend/prerequisites" },
          { text: "Architecture Layer", link: "/backend/architecture-layers" },
          { text: "API Conventions", link: "/backend/api-conventions" },
          { text: "Endpoint Categories", link: "/backend/endpoint-categories" },
          { text: "Testing and QA", link: "/backend/testing&qa" },
          { text: "Code Standards", link: "/backend/code-standards" },
          { text: "Deployment", link: "/backend/deployment" },
        ],
      },
      {
        text: "Frontend Web",
        collapsed: true,
        items: [
          { text: "Web Overview", link: "/frontend-web/web-overview" },
          { text: "Technology", link: "/frontend-web/tech-stack" },
          { text: "Setup", link: "/frontend-web/setup" },
          { text: "Project Structure", link: "/frontend-web/project-structure" },
          { text: "Code Standards", link: "/frontend-web/code-standards" },
          { text: "Authentication Flow", link: "/frontend-web/authentication-flow" },
          { text: "API Integration", link: "/frontend-web/api-integration" },
          { text: "Pages and Structure", link: "/frontend-web/pages&structure" },
          { text: "Styling", link: "/frontend-web/styling" },
          { text: "Error Handling", link: "/frontend-web/error-handling" },
          { text: "QA Documentation", link: "/frontend-web/qa-documentation" },
          { text: "Deployment", link: "/frontend-web/deployment" },
        ],
      },
      {
        text: "Frontend Mobile",
        collapsed: true,
        items: [
          { text: "Mobile Overview", link: "/frontend-mobile/overview" },
          { text: "Technology", link: "/frontend-mobile/tech-stack" },
          { text: "Project Structure", link: "/frontend-mobile/project-structure" },
          { text: "Architecture Layers", link: "/frontend-mobile/architecture-layers" },
          { text: "Core Components", link: "/frontend-mobile/core-components" },
          { text: "Security Measures", link: "/frontend-mobile/security-measures" },
          { text: "Installation", link: "/frontend-mobile/installation" },
          { text: "Troubleshooting", link: "/frontend-mobile/troubleshooting" },
        ],
      },
      {
        text: "Deployment",
        collapsed: true,
        items: [
          { text: "Deployment Architecture", link: "/deployment/deployment-architecture" },
          { text: "Backend Deployment", link: "/deployment/backend-deployment" },
          { text: "Frontend Deployment", link: "/deployment/frontend-deployment" },
          { text: "CI/CD Pipeline", link: "/deployment/cicd-pipeline" },
          { text: "Environment Variables", link: "/deployment/environment-variables" },
          { text: "External Services", link: "/deployment/external-services" },
          { text: "System Integration", link: "/deployment/system-integration" },
        ],
      },
      {
        text: "Security",
        collapsed: true,
        items: [
          { text: "Security Posture", link: "/security/security-posture" },
          { text: "Application Security", link: "/security/application-security" },
          { text: "Data Security", link: "/security/data-security" },
          { text: "Data Classification", link: "/security/data-classification" },
          { text: "Network Security", link: "/security/network-security" },
          { text: "Risk Management", link: "/security/risk-management" },
          { text: "Incident Response", link: "/security/incident-response" },
          { text: "Conclusion", link: "/security/conclusion" },
        ],
      },
    ],
  },
});