import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ELoop Technical Documentation",
  description: "Internal and external architecture guidelines for ELoop Platform",
  srcDir: '.', 
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
      }
    ]
  }
})
