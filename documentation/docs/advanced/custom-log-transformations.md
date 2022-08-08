---
title: Custom Log Transformations
---

# Custom Log Transformations

Log events can be diverse and it's unpredictable what kind of services are monitored. \
Therefore the default configuration for Vector simply passes all log events to Loki.

But what if:

* *There is a strange log format that needs to be converted*
* *Multiple logs events have to be reduced to one to make sense*
* *One service just keeps spamming log events that should be filtered out*

There are lots of possible scenarios, which can be solved by providing a custom Vector config for log transformations.

## 1. Writing a Vector Config

Vector is a great tool with lots of possibilities to transform logs and metrics. \
Explaining Vector is way beyond the scope here.
Visit [their documentation](https://vector.dev/docs/), which is much better suited for this purpose.

But to give an example, let's write a config that:

* routes log events based on container name
* filters out logs from Grafana with the message `unwanted-grafana-log-event`
* filters out logs from Loki with the message `unwanted-loki-log-event`

```toml
[transforms.route_kubernetes_logs]
type = 'route'
inputs = ['kubernetes_logs']
  [transforms.route_kubernetes_logs.route]
  grafana = '.kubernetes.container_name == "grafana"'
  loki = '.kubernetes.container_name == "loki"'
  unknown = '!exists(.kubernetes.container_name)'

[transforms.filter_grafana_logs]
type = 'filter'
inputs = ['route_kubernetes_logs.grafana']
condition = '!contains!(.message, "unwanted-grafana-log-event")'

[transforms.filter_loki_logs]
type = 'filter'
inputs = ['route_kubernetes_logs.loki']
condition = '!contains!(.message, "unwanted-loki-log-event")'

[transforms.kubernetes_log_output]
type = "filter"
inputs = ["filter_grafana_logs", "filter_loki_logs"]
condition = "true"
```

> IMPORTANT \
> There are two naming conventions that needs to be adhered to:
>
> * The input to the transform is always named `kubernetes_logs`
> * The output needs to be aggregated by a filter with the name `kubernetes_log_output`
>
> Those are the names that the source and sink are using

## 2. Add the Config

All that's left to do is to replace the default transformation with the custom one.

Assuming the Vector config is placed under `vector/custom-log-filter.toml` next to the Tanka `environments` folder.

In your `environments/<my-environment>/config.jsonnet` add the following:

```js
{
  vector+: {
    logging+:: {
      kubernetes+: {
        transformations: [importstr '../../vector/custom-log-filter.toml'],
      },
    },
  },
}
```

Seeing that the option is an array, it is also possible to split the config into multiple files,
to keep complex transformations readable.
Just remember to keep to the naming convention for input and output as mentioned above.

## 3. Verify

Tanka can be used to take a look at the final Vector config:

```sh
tk show -t configmap/vector environment/<my-environment>
```
