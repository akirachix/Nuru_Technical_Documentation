import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "eLoop Technical Documentation",
  description: "Internal and external architecture guidelines for ELoop Platform",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/overview/product-definition' } 
    ],

    sidebar: [
      {
        text: '1. Overview',
        collapsed: false,
        items: [
          { text: '1.1 Product Definition', link: '/overview/product-definition' }, 
          { text: '1.2 The Problem It Solves', link: '/overview/the-problem-it-solves' },
          { text: '1.3 Who Uses It', link: '/overview/target-users' },
          { text: '1.4 Key Features', link: '/overview/key-features' }
        ]
      },
      {
        text: 'Architecture',
        items: [
          { text: 'Core Principles', link: '/architecture/core-principles' },
          { text: 'Data Flow', link: '/architecture/data-flow' },
          { text: 'Design Guidelines', link: '/architecture/design-guidelines' },
          { text: 'Scalability', link: '/architecture/scalability' },
          { text: 'System Diagram', link: '/architecture/system-diagram' }
        ]
      },
      {
        text: 'Backend',
        items: [
          { text: 'Api Overview', link: '/backend/api-overview' },
          { text: 'Hosted API', link: '/backend/hosted-api' },
          { text: 'Prerequisites', link: '/backend/prerequisites' },
          { text: 'Architecture Layer', link: '/backend/architecture-layers' },
          { text: 'API Conventions', link: '/backend/api-conventions' },
          { text: 'Endpoint Categories', link: '/backend/endpoint-categories' },
          { text: 'Testing and QA', link: '/backend/testing&qa' },
          { text: 'Code Standards', link: '/backend/code-standards' },
          { text: 'Deployment', link: '/backend/deployment' }
        ]
      },
      {
        text: 'Frontend Web',
        items: [
          { text: 'Web Overview', link: '/frontend-web/web-overview' },
          { text: 'Technology', link: '/frontend-web/tech-stack' },
          { text: 'Setup', link: '/frontend-web/setup' },
          { text: 'Project Structure', link: '/frontend-web/project-structure' },
          { text: 'Code Standards', link: '/frontend-web/code-standards' },
          { text: 'Authentication Flow', link: '/frontend-web/authentication-flow' },
          { text: 'API Integration', link: '/frontend-web/api-integration' },
          { text: 'Pages and Structure', link: '/frontend-web/pages&structure' },
          { text: 'Styling', link: '/frontend-web/styling' },
          { text: 'Error Handling', link: '/frontend-web/error-handling' },
          { text: 'QA Documentation', link: '/frontend-web/qa-documentation' },
          { text: 'Deployment', link: '/frontend-web/deployment' }
        ]
      },
      {
        text: 'Developer Guide',
        items: [
          { text: 'Global Code Standards', link: '/developer-guide/global-code-standards' },
          { text: 'Testing Conventions', link: '/developer-guide/testing-conventions' },
          { text: 'Git Workflow', link: '/developer-guide/git-workflow' },
          { text: 'Glossary', link: '/developer-guide/glossary' }
        ]
      }
    ]
  }
})
