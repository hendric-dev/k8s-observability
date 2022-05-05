(import 'grafana.libsonnet') +
{
  local httpIngressPath = $.networking.v1.httpIngressPath,
  local ingress = $.networking.v1.ingress,
  local ingressRule = $.networking.v1.ingressRule,

  grafana+: {
    local this = self,
    ingress: ingress.new(this.name)
      + ingress.metadata.withAnnotations(this.annotations.ingress)
      + ingress.metadata.withLabels(this.labels.selector)
      + ingress.spec.withRules([
          ingressRule.withHost(this.host)
            + ingressRule.http.withPaths([
                httpIngressPath.withPath(this.path)
                + httpIngressPath.withPathType('Prefix')
                + httpIngressPath.backend.service.withName(this.name)
                + httpIngressPath.backend.service.port.withNumber(this.ports.external),
              ])
        ]),
  },
}