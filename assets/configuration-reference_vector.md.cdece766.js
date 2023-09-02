import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.7c2782e4.js";const u=JSON.parse('{"title":"Vector Configuration Reference","description":"","frontmatter":{"title":"Vector Configuration Reference"},"headers":[],"relativePath":"configuration-reference/vector.md","filePath":"configuration-reference/vector.md"}'),e={name:"configuration-reference/vector.md"},l=o(`<h1 id="vector" tabindex="-1">Vector <a class="header-anchor" href="#vector" aria-label="Permalink to &quot;Vector&quot;">​</a></h1><p>This section shows all available options that can be overridden in the <code>config.jsonnet</code> file.</p><p>All Vector config is stored under the <strong>vector</strong> object in the config.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  vector</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    annotations:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      deployment: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      pod: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    env:: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    image:: </span><span style="color:#9ECBFF;">&#39;timberio/vector:0.29.1-alpine&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    labels:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      deployment: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      pod: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      selector: {</span><span style="color:#9ECBFF;">&#39;app.kubernetes.io/name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;vector&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    logging:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      kubernetes: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        transformations: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          importstr </span><span style="color:#9ECBFF;">&#39;../../config/logs/kubernetes/aggregator.toml&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    metrics:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      custom: [importstr </span><span style="color:#9ECBFF;">&#39;../../config/metrics/custom-aggregator.toml&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    monitoring:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      influxDB: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        bucket: </span><span style="color:#9ECBFF;">&quot;metrics&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        endpoint: </span><span style="color:#9ECBFF;">&quot;http://influx-db/&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        org: </span><span style="color:#9ECBFF;">&quot;observability&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    name:: </span><span style="color:#9ECBFF;">&#39;vector&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ports:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      external: </span><span style="color:#79B8FF;">8686</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      internal: </span><span style="color:#79B8FF;">8686</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    resources:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      cpu: {request: </span><span style="color:#9ECBFF;">&#39;100m&#39;</span><span style="color:#E1E4E8;">, limit: </span><span style="color:#9ECBFF;">&#39;500m&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">      memory: {request: </span><span style="color:#9ECBFF;">&#39;128Mi&#39;</span><span style="color:#E1E4E8;">, limit: </span><span style="color:#9ECBFF;">&#39;256Mi&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  vector</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    annotations:: {</span></span>
<span class="line"><span style="color:#24292E;">      deployment: {},</span></span>
<span class="line"><span style="color:#24292E;">      pod: {},</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    env:: {},</span></span>
<span class="line"><span style="color:#24292E;">    image:: </span><span style="color:#032F62;">&#39;timberio/vector:0.29.1-alpine&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    labels:: {</span></span>
<span class="line"><span style="color:#24292E;">      deployment: {},</span></span>
<span class="line"><span style="color:#24292E;">      pod: {},</span></span>
<span class="line"><span style="color:#24292E;">      selector: {</span><span style="color:#032F62;">&#39;app.kubernetes.io/name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;vector&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    logging:: {</span></span>
<span class="line"><span style="color:#24292E;">      kubernetes: {</span></span>
<span class="line"><span style="color:#24292E;">        transformations: [</span></span>
<span class="line"><span style="color:#24292E;">          importstr </span><span style="color:#032F62;">&#39;../../config/logs/kubernetes/aggregator.toml&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    metrics:: {</span></span>
<span class="line"><span style="color:#24292E;">      custom: [importstr </span><span style="color:#032F62;">&#39;../../config/metrics/custom-aggregator.toml&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    monitoring:: {</span></span>
<span class="line"><span style="color:#24292E;">      influxDB: {</span></span>
<span class="line"><span style="color:#24292E;">        bucket: </span><span style="color:#032F62;">&quot;metrics&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        endpoint: </span><span style="color:#032F62;">&quot;http://influx-db/&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        org: </span><span style="color:#032F62;">&quot;observability&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    name:: </span><span style="color:#032F62;">&#39;vector&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    ports:: {</span></span>
<span class="line"><span style="color:#24292E;">      external: </span><span style="color:#005CC5;">8686</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      internal: </span><span style="color:#005CC5;">8686</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    resources:: {</span></span>
<span class="line"><span style="color:#24292E;">      cpu: {request: </span><span style="color:#032F62;">&#39;100m&#39;</span><span style="color:#24292E;">, limit: </span><span style="color:#032F62;">&#39;500m&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">      memory: {request: </span><span style="color:#032F62;">&#39;128Mi&#39;</span><span style="color:#24292E;">, limit: </span><span style="color:#032F62;">&#39;256Mi&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><table><thead><tr><th>Field</th><th>Description / Default</th></tr></thead><tbody><tr><td><code>annotations.deployment</code></td><td>Annotations added at the deployment (topmost) level. <br> <code>{}</code></td></tr><tr><td><code>annotations.pod</code></td><td>Annotations added at the pod level. <br> <code>{}</code></td></tr><tr><td><code>env</code></td><td>Environment variables that are added to the Vector container. <br> <code>{}</code></td></tr><tr><td><code>image</code></td><td>Docker image that gets deployed. <br> <code>timberio/vector:0.29.1-alpine</code></td></tr><tr><td><code>labels.deployment</code></td><td>Labels added at the deployment (topmost) level. <br> <code>{}</code></td></tr><tr><td><code>labels.pod</code></td><td>Labels added at the pod level. <br> <code>{}</code></td></tr><tr><td><code>labels.selector</code></td><td>Selector used for all Vector k8s resources. <br> <code>{&#39;app.kubernetes.io/name&#39;: &#39;vector&#39;}</code></td></tr><tr><td><code>logging.kubernetes.transformations</code></td><td>Array of Vector configs to <a href="/k8s-observability/advanced/custom-log-transformations.html">customize Kubernetes logs</a>. <br> <code>[importstr &#39;aggregator.toml&#39;]</code></td></tr><tr><td><code>metrics.custom</code></td><td>Array of Vector config to add <a href="/k8s-observability/advanced/custom-metrics.html">custom metrics</a>. <br> <code>[importstr &#39;custom-aggregator.toml&#39;]</code></td></tr><tr><td><code>monitoring.influxDB.bucket</code></td><td>Bucket name of the Influx DB. <br> <code>metrics</code></td></tr><tr><td><code>monitoring.influxDB.endpoint</code></td><td>Endpoint of the Influx DB. <br> <code>http://influx-db/</code></td></tr><tr><td><code>monitoring.influxDB.org</code></td><td>Organisation name of the Influx DB. <br> <code>observability</code></td></tr><tr><td><code>name</code></td><td>Name used for the k8s resources. <br> <code>vector</code></td></tr><tr><td><code>ports.external</code></td><td>External port of the Vector API. <br> <code>8686</code></td></tr><tr><td><code>ports.internal</code></td><td>Internal port of the Vector API. <br> <code>8686</code></td></tr><tr><td><code>resources.cpu.request</code></td><td>Min. requested amount of CPU time. <br> <code>100m</code></td></tr><tr><td><code>resources.cpu.limit</code></td><td>Max. allowed amount of CPU time. <br> <code>500m</code></td></tr><tr><td><code>resources.memory.request</code></td><td>Min. requested amount of memory. <br> <code>128Mi</code></td></tr><tr><td><code>resources.memory.limit</code></td><td>Max. allowed amount of memory. <br> <code>256Mi</code></td></tr></tbody></table>`,5),t=[l];function p(c,r,i,E,d,y){return n(),a("div",null,t)}const g=s(e,[["render",p]]);export{u as __pageData,g as default};
