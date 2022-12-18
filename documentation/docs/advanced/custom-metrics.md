---
title: Custom Metrics
---

# Custom Metrics

While the observability stack already monitors lots of Kubernetes resources,
there may be tons of other metrics that are worth monitoring.

* *I got an API gateway that I want to monitor*
* *My business is not running well, so I want to keep an eye on my conversion rate*
* *There were some security issues lately, lets track the patch level of all machines*

There are lots of possible scenarios, which can be solved by providing a custom Vector config for metrics.

## 1. Writing a Vector Config

Vector is a great tool with lots of possibilities to transform logs and metrics. \
Explaining Vector is way beyond the scope here.
Visit [their documentation](https://vector.dev/docs/), which is much better suited for this purpose.

But to give an example, let's write a config that:

* scrapes a Prometheus endpoint of a running API gateway
* filters for metrics with the name `failed_api_requests`

```toml
[sources.api_gateway_metrics]
type = "prometheus_scrape"
endpoints = ["http://api-gateway/metrics"]
scrape_interval_secs = 15

[transforms.filter_api_gateway_metrics]
type = 'filter'
inputs = ['api_gateway_metrics']
condition = 'contains!(.name, "failed_api_requests")'

[transforms.custom_metrics_output]
type = "filter"
inputs = ["filter_api_gateway_metrics"]
condition = "true"
```

> IMPORTANT \
> There is a naming conventions that needs to be adhered to:
>
> * The output needs to be aggregated by a filter with the name `custom_metrics_output`
>
> The Influx DB sink is configured to look for an aggregator with that name

## 2. Add the Config

All that's left to do is to replace the default aggregator with the custom one.

Assuming the Vector config is placed under `vector/custom-api-gateway-metrics.toml` next to the Tanka `environments` folder.

In your `environments/<my-environment>/config.jsonnet` add the following:

```js
{
  vector+: {
    metrics+:: {
      custom: [importstr '../../vector/custom-api-gateway-metrics.toml'],
    },
  },
}
```

Seeing that the option is an array, it is also possible to split the config into multiple files,
to keep complex transformations readable.
Just remember to keep to the naming convention for the output as mentioned above.

## 3. Verify

Tanka can be used to take a look at the final Vector config:

```sh
tk show -t configmap/vector environment/<my-environment>
```
