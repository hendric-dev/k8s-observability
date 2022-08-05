---
title: Configuration
---

# Configuration

Tanka manages the deployment by using environments.
After initializing the project you already have an `environments/default` folder available.

You will already see a `main.jsonnet` and a `spec.json` file.
We are gonna add a `config.jsonnet` for the customizable settings:

```sh
touch environments/default/config.jsonnet
```

## spec.json

This is the configuration file for the Kubernetes cluster. It is necessary to add the `apiServer` field,
but you also might want to change the namespace where the stack is deployed to. \
An example file could look like this:

```json
{
  "apiVersion": "tanka.dev/v1alpha1",
  "kind": "Environment",
  "metadata": {
    "name": "environments/default"
  },
  "spec": {
    "apiServer": "https://my-kubernetes-cluster:6443",
    "namespace": "observability",
    "resourceDefaults": {},
    "expectVersions": {}
  }
}
```

## main.jsonnet

This is the main entrypoint for the deployment.
All components, aswell as the k8s lib and the custom config need to be imported here.

```js
(import 'k.libsonnet') +
(import 'grafana/deployment/kubernetes/index.libsonnet') +
(import 'influxdb/deployment/kubernetes/index.libsonnet') +
(import 'vector/deployment/kubernetes/index.libsonnet') +
(import 'config.jsonnet')
```

## config.jsonnet

This file can be used to override any configuration from the k8s-observability stack.

The deployment is already preconfigured with lots of default that make sense. It is necessary to add some secrets though:

```js
{
  grafana+: {
    secrets:: {
      admin: {
        username: '<fill with admin username>',
        password: '<fill with admin password>',
      },
    },
  },
  influxDB+: {
    secrets+:: {
      username: '<fill with InfluxDB username>',
      password: '<fill with InfluxDB password>',
      token: '<fill with API token>',
    },
  },
}
```

See the configuration references for all available options:

* [Grafana](/configuration-reference/grafana)
* [Influx DB](/configuration-reference/influx-db)
* [Vector](/configuration-reference/vector)
