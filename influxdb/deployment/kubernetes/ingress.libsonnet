(import 'influxdb.libsonnet') +
{
  local httpIngressPath = $.networking.v1.httpIngressPath,
  local ingress = $.networking.v1.ingress,
  local ingressRule = $.networking.v1.ingressRule,

  influxDB+: {
    local this = self,
    ingress: ingress.new(this.name)
      + ingress.metadata.withLabels(this.labels.selector)
      + ingress.spec.withRules(
          ingressRule.http.withPaths(
            httpIngressPath.withPath('/observability')
            + httpIngressPath.withPathType('Prefix')
            + httpIngressPath.backend.service.withName(this.name)
            + httpIngressPath.backend.service.port.withNumber(this.ports.external),
          )
        ),
  },
}
