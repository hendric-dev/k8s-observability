(import '../../../shared/deployment/kubernetes/shared.libsonnet') +
{
  vector+: {
    local this = self,
    annotations:: $.shared.annotations,
    env:: $.shared.env,
    image:: std.parseYaml(importstr 'image.yaml').image,
    labels:: $.shared.labels + {
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
      cpu: {request: '100m', limit: '500m'},
      memory: {request: '128Mi', limit: '256Mi'},
    },
  },
}
