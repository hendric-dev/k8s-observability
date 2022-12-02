VERSION 0.6

validate-kubernetes-deployment:
  FROM grafana/tanka:0.23.1
  WORKDIR k8s-observability
  RUN tk init
  COPY observability-stack vendor/observability-stack
  RUN echo "(import 'k.libsonnet') +" > environments/default/main.jsonnet && \
      echo "(import 'observability-stack/grafana/deployment/kubernetes/index.libsonnet') +" >> environments/default/main.jsonnet && \
      echo "(import 'observability-stack/influxdb/deployment/kubernetes/index.libsonnet') +" >> environments/default/main.jsonnet && \
      echo "(import 'observability-stack/loki/deployment/kubernetes/index.libsonnet') +" >> environments/default/main.jsonnet && \
      echo "(import 'observability-stack/shared/deployment/kubernetes/index.libsonnet') +" >> environments/default/main.jsonnet && \
      echo "(import 'observability-stack/tempo/deployment/kubernetes/index.libsonnet') +" >> environments/default/main.jsonnet && \
      echo "(import 'observability-stack/vector/deployment/kubernetes/index.libsonnet')" >> environments/default/main.jsonnet
  SAVE IMAGE validate-kubernetes
