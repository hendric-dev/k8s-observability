---
title: Grafana Configuration Reference
---

# Grafana

This section shows all available options that can be overridden in the `config.jsonnet` file.

All Grafana config is stored under the **grafana** object in the config.

```js
{
  grafana+: {
    annotations:: {
      deployment: {},
      ingress: {},
      pod: {},
    },
    env:: {},
    host:: 'grafana.my-server.com',
    image:: 'grafana/grafana:9.0.5',
    labels:: {
      deployment: {},
      pod: {},
      selector: {'app.kubernetes.io/name': this.name},
    },
    name:: 'grafana',
    path:: '/',
    ports:: {
      external: 80,
      internal: 3000,
    },
    resources:: {
      cpu: {request: '50m', limit: '200m'},
      memory: {request: '32Mi', limit: '128Mi'},
    },
    secrets:: {
      admin: {
        username: '<fill with admin username>',
        password: '<fill with admin password>',
      },
    },
  }
}
```

| Field | Description / Default |
| --- | --- |
| `annotations.deployment` | Annotations added at the deployment (topmost) level. <br> `{}` |
| `annotations.ingress` | Annotations added to the ingress. <br> `{}` |
| `annotations.pod` | Annotations added at the pod level. <br> `{}` |
| `env` | Environment variables that are added to the Grafana container. See [Customize Grafana](#customize-grafana) <br> `{}` |
| `host` | Hostname where the UI is exposed. <br> `grafana.my-server.com` |
| `image` | Docker image that gets deployed. <br> `grafana/grafana:9.0.5` |
| `labels.deployment` | Labels added at the deployment (topmost) level. <br> `{}` |
| `labels.pod` | Labels added at the pod level. <br> `{}` |
| `labels.selector` | Selector used for all Grafana k8s resources. <br> `{'app.kubernetes.io/name': 'grafana'}` |
| `name` | Name used for the k8s resources. <br> `grafana` |
| `path` | Path where the UI is exposed. <br> `/` |
| `ports.external` | External port where the UI is exposed. <br> `80` |
| `ports.internal` | Internal port used inside the container. <br> `3000` |
| `resources.cpu.request` | Min. requested amount of CPU time. <br> `50m` |
| `resources.cpu.limit` | Max. allowed amount of CPU time. <br> `200m` |
| `resources.memory.request` | Min. requested amount of memory. <br> `32Mi` |
| `resources.memory.limit` | Max. allowed amount of memory. <br> `128Mi` |
| `secrets.admin.username` | Admin username for Grafana. <br> `<fill with admin username>` |
| `secrets.admin.password` | Admin password for Grafana. <br> `<fill with admin password>` |

## Customize Grafana

While it is possible to configure the most common options through the Jsonnet config above,
it doesn't cover all use cases. \
Grafana itself is quite customizable and allows to set any possible option through environment variables.
See [overide configuration with environment variabls](https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#override-configuration-with-environment-variables) on the official Grafana documentation.

The environment variables can be set by using the `env` field mentioned above. \
An example may look like this:

```js
{
  grafana+: {
    env+:: {
      'GF_AUTH_DISABLE_LOGIN_FORM': true,
      'GF_AUTH_GITHUB_AUTH_URL': 'https://github.com/login/oauth/authorize',
      'GF_AUTH_GITHUB_ENABLED': true,
    },
  }
}
```
