{
  vector+: {
    local this = self,
    annotations:: {
      deployment: {},
      pod: {},
    },
    image:: 'timberio/vector:0.21.0-alpine',
    labels:: {
      deployment: {},
      pod: {},
      selector: {'app.kubernetes.io/name': this.name},
    },
    monitoring:: {
      influxDB: {
        bucket: "metrics",
        endpoint: "http://influx-db/",
        org: "observability",
      }
    },
    name:: 'vector',
    resources:: {
      cpu: {request: '50m', limit: '200m'},
      memory: {request: '128Mi', limit: '256Mi'},
    },
  },
}
