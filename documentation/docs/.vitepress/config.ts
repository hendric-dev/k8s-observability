import {defineConfig} from 'vitepress'

export default defineConfig({
  base: '/k8s-observability/',
  lang: 'en-US',
  srcExclude: ['README.md'],
  themeConfig: {
    sidebar: [
      {items: [{text: 'Introduction', link: '/introduction'}]},
      {
        text: 'Getting Started',
        items: [
          {text: '1. Prerequisites', link: '/getting-started/prerequisites'},
          {text: '2. Setup Tanka', link: '/getting-started/setup-tanka'},
          {text: '3. Configuration', link: '/getting-started/configuration'},
          {text: '4. Deployment', link: '/getting-started/deployment'},
        ],
      },
      {
        text: 'Configuration Reference',
        items: [
          {text: 'Grafana', link: '/configuration-reference/grafana'},
          {text: 'Influx DB', link: '/configuration-reference/influx-db'},
          {text: 'Loki', link: '/configuration-reference/loki'},
          {text: 'Tempo', link: '/configuration-reference/tempo'},
          {text: 'Vector', link: '/configuration-reference/vector'},
        ]
      },
      {
        text: 'Advanced',
        items: [
          {text: 'Custom Dashboards', link: '/advanced/custom-dashboards'},
          {text: 'Custom Log Transformations', link: '/advanced/custom-log-transformations'},
        ]
      },
    ],
  },
  title: 'K8S Observability',
})
