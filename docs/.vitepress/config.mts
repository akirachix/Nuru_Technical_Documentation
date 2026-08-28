import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Nuru Technical Documentation",
  description: "Internal and external architecture guidelines for Nuru Platform",
  srcDir: '.', 
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/overview/what-nuru-does' }
    ],

    sidebar: [
      {
        text: '1. Overview',
        collapsed: false,
        items: [
          { text: '1.1 What Nuru Does', link: '/overview/what-nuru-does' },
          { text: '1.2 The Problem It Solves', link: '/overview/the-problem-it-solves' },
          { text: '1.3 Who Uses It', link: '/overview/who-uses-it' },
          { text: '1.4 Key Features', link: '/overview/key-features' }
        ]
      },
      {
        text: '2. Architecture',
        collapsed: true,
        items: [
          { text: '2.1 System Architecture', link: '/architecture/' }
        ]
      },
      {
        text: '3. Backend',
        collapsed: true,
        items: [
          { text: '3.1 Backend Blueprint', link: '/backend/' }
        ]
      },
      {
        text: '4. Database',
        collapsed: true,
        items: [
          { text: '4.1 Database Design', link: '/database/' }
        ]
      },
      {
        text: '5. Database Relationships',
        collapsed: true,
        items: [
          { text: '5.1 Entity Relationships', link: '/database-relationships/' }
        ]
      },
      {
        text: '6. Frontend Web (Recycling Centers)',
        collapsed: true,
        items: [
          { text: '6.1 Web Panel Overview', link: '/frontend-web/' }
        ]
      },
      {
        text: '7. Mobile App (Refineries)',
        collapsed: true,
        items: [
          { text: '7.1 Mobile App Roadmap', link: '/mobile-app/' }
        ]
      },
      {
        text: '8. Hardware & Value Tier Rules',
        collapsed: true,
        items: [
          { text: '8.1 Hardware & Rules Overview', link: '/hardware-and-value-tier-rules/' }
        ]
      },
      {
        text: '9. Security',
        collapsed: true,
        items: [
          { text: '9.1 Core System Security', link: '/security/' }
        ]
      },
      {
        text: '10. Integration',
        collapsed: true,
        items: [
          { text: '10.1 System Integration Map', link: '/integration/' }
        ]
      },
      {
        text: '11. Code Standards',
        collapsed: true,
        items: [
          { text: '11.1 Error Handling & Logging', link: '/code-standards/error-handling-and-logging' },
          { text: '11.2 Folder & File Structure', link: '/code-standards/folder-file-structure' },
          { text: '11.3 Naming Conventions', link: '/code-standards/naming-conventions' }
        ]
      },
      {
        text: '12. Deployment',
        collapsed: true,
        items: [
          { text: '12.1 Production Deployment Guide', link: '/deployment/' }
        ]
      },
      {
        text: '13. Testing and QA',
        collapsed: true,
        items: [
          { text: '13.1 Testing Matrix', link: '/testing-and-qa/' }
        ]
      },
      {
        text: '14. Glossary',
        collapsed: true,
        items: [
          { text: '14.1 Technical Glossary', link: '/glossary/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
})
