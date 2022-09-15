(import 'grafana.libsonnet') +
{
  local httpIngressPath = $.networking.v1.httpIngressPath,
  local ingress = $.networking.v1.ingress,
  local ingressRule = $.networking.v1.ingressRule,
  local ingressTLS = $.networking.v1.ingressTLS,

  grafana+: {
    local this = self,
    deployables+: {
      ingress: ingress.new(this.name)
        + ingress.metadata.withAnnotations(
          this.annotations.ingress
          + (
            if this.security.tls.enabled
            then {'cert-manager.io/issuer': this.security.tls.issuer}
            else {}
          ),
        )
        + ingress.metadata.withLabels(this.labels.selector)
        + ingress.spec.withRules([
            ingressRule.withHost(this.host)
              + ingressRule.http.withPaths([
                  httpIngressPath.withPath(this.path)
                  + httpIngressPath.withPathType('Prefix')
                  + httpIngressPath.backend.service.withName(this.name)
                  + httpIngressPath.backend.service.port.withNumber(this.ports.external),
                ])
          ])
        + (
          if std.objectHasAll(this.ingress, 'className')
          then ingress.spec.withIngressClassName(this.ingress.className)
          else {}
        )
        + (
          if this.security.tls.enabled
          then ingress.spec.withTls(
            ingressTLS.withHosts(this.host) + ingressTLS.withSecretName(this.name + '-certificate'),
          )
          else {}
        ),
    },
  },
}
