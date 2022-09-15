{
  vector+: {
    local this = self,
    annotations:: {
      deployment: {},
      pod: {},
    },
    image:: 'timberio/vector:0.24.1-alpine',
    labels:: {
      deployment: {},
      pod: {},
      selector: {'app.kubernetes.io/name': this.name},
    },
    logging:: {
      kubernetes: {
        transformations: [importstr '../../config/logs/kubernetes/aggregator.toml'],
      }
    },
    monitoring:: {
      influxDB: {
        bucket: "metrics",
        endpoint: "http://influx-db/",
        org: "observability",
      }
    },
    name:: 'vector',
    ports:: {
      external: 8686,
      internal: 8686,
    },
    resources:: {
      cpu: {request: '50m', limit: '200m'},
      memory: {request: '128Mi', limit: '256Mi'},
    },
  },
}
