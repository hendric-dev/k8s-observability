import {defineConfig} from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  themeConfig: {
    sidebar: [
      {
        items: [
          {text: 'Introduction', link: '/introduction/'},
          {text: 'Getting Started', link: '/introduction/getting-started'},
        ],
      },
    ],
  },
  title: 'K8S Observability',
})
