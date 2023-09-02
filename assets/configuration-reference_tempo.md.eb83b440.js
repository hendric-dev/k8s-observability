import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.7c2782e4.js";const F=JSON.parse('{"title":"Tempo Configuration Reference","description":"","frontmatter":{"title":"Tempo Configuration Reference"},"headers":[],"relativePath":"configuration-reference/tempo.md","filePath":"configuration-reference/tempo.md"}'),p={name:"configuration-reference/tempo.md"},l=e(`<h1 id="tempo" tabindex="-1">Tempo <a class="header-anchor" href="#tempo" aria-label="Permalink to &quot;Tempo&quot;">​</a></h1><p>This section shows all available options that can be overridden in the <code>config.jsonnet</code> file.</p><p>All Tempo config is stored under the <strong>tempo</strong> object in the config.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  tempo</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    annotations:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      deployment: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      pod: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    env:: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    image:: </span><span style="color:#9ECBFF;">&#39;grafana/tempo:1.5.0&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    labels:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      deployment: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      pod: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      selector: {</span><span style="color:#9ECBFF;">&#39;app.kubernetes.io/name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;tempo&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    name:: </span><span style="color:#9ECBFF;">&#39;tempo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ports:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      jaeger: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        external: </span><span style="color:#79B8FF;">14268</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        internal: </span><span style="color:#79B8FF;">14268</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;otlp-grpc&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        external: </span><span style="color:#79B8FF;">4317</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        internal: </span><span style="color:#79B8FF;">4317</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;otlp-http&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        external: </span><span style="color:#79B8FF;">4318</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        internal: </span><span style="color:#79B8FF;">4318</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      tempo: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        external: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        internal: </span><span style="color:#79B8FF;">3200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      zipkin: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        external: </span><span style="color:#79B8FF;">9411</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        internal: </span><span style="color:#79B8FF;">9411</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    resources:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      cpu: {request: </span><span style="color:#9ECBFF;">&#39;50m&#39;</span><span style="color:#E1E4E8;">, limit: </span><span style="color:#9ECBFF;">&#39;200m&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">      memory: {request: </span><span style="color:#9ECBFF;">&#39;32Mi&#39;</span><span style="color:#E1E4E8;">, limit: </span><span style="color:#9ECBFF;">&#39;256Mi&#39;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  tempo</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    annotations:: {</span></span>
<span class="line"><span style="color:#24292E;">      deployment: {},</span></span>
<span class="line"><span style="color:#24292E;">      pod: {},</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    env:: {},</span></span>
<span class="line"><span style="color:#24292E;">    image:: </span><span style="color:#032F62;">&#39;grafana/tempo:1.5.0&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    labels:: {</span></span>
<span class="line"><span style="color:#24292E;">      deployment: {},</span></span>
<span class="line"><span style="color:#24292E;">      pod: {},</span></span>
<span class="line"><span style="color:#24292E;">      selector: {</span><span style="color:#032F62;">&#39;app.kubernetes.io/name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;tempo&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    name:: </span><span style="color:#032F62;">&#39;tempo&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    ports:: {</span></span>
<span class="line"><span style="color:#24292E;">      jaeger: {</span></span>
<span class="line"><span style="color:#24292E;">        external: </span><span style="color:#005CC5;">14268</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        internal: </span><span style="color:#005CC5;">14268</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;otlp-grpc&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        external: </span><span style="color:#005CC5;">4317</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        internal: </span><span style="color:#005CC5;">4317</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;otlp-http&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        external: </span><span style="color:#005CC5;">4318</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        internal: </span><span style="color:#005CC5;">4318</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      tempo: {</span></span>
<span class="line"><span style="color:#24292E;">        external: </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        internal: </span><span style="color:#005CC5;">3200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      zipkin: {</span></span>
<span class="line"><span style="color:#24292E;">        external: </span><span style="color:#005CC5;">9411</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        internal: </span><span style="color:#005CC5;">9411</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    resources:: {</span></span>
<span class="line"><span style="color:#24292E;">      cpu: {request: </span><span style="color:#032F62;">&#39;50m&#39;</span><span style="color:#24292E;">, limit: </span><span style="color:#032F62;">&#39;200m&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">      memory: {request: </span><span style="color:#032F62;">&#39;32Mi&#39;</span><span style="color:#24292E;">, limit: </span><span style="color:#032F62;">&#39;256Mi&#39;</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><table><thead><tr><th>Field</th><th>Description / Default</th></tr></thead><tbody><tr><td><code>annotations.deployment</code></td><td>Annotations added at the deployment (topmost) level. <br> <code>{}</code></td></tr><tr><td><code>annotations.pod</code></td><td>Annotations added at the pod level. <br> <code>{}</code></td></tr><tr><td><code>env</code></td><td>Environment variables that are added to the Tempo container. <br> <code>{}</code></td></tr><tr><td><code>image</code></td><td>Docker image that gets deployed. <br> <code>grafana/tempo:1.5.0</code></td></tr><tr><td><code>labels.deployment</code></td><td>Labels added at the deployment (topmost) level. <br> <code>{}</code></td></tr><tr><td><code>labels.pod</code></td><td>Labels added at the pod level. <br> <code>{}</code></td></tr><tr><td><code>labels.selector</code></td><td>Selector used for all Tempo k8s resources. <br> <code>{&#39;app.kubernetes.io/name&#39;: &#39;tempo&#39;}</code></td></tr><tr><td><code>name</code></td><td>Name used for the k8s resources. <br> <code>tempo</code></td></tr><tr><td><code>ports.jaeger.external</code></td><td>External port for the Jaeger receiver. <br> <code>14268</code></td></tr><tr><td><code>ports.jaeger.internal</code></td><td>Internal port for the Jaeger receiver. <br> <code>14268</code></td></tr><tr><td><code>ports.otlp-grpc.external</code></td><td>External port for the Opentelemetry gRPC receiver. <br> <code>4317</code></td></tr><tr><td><code>ports.otlp-grpc.internal</code></td><td>Internal port for the Opentelemetry gRPC receiver. <br> <code>4317</code></td></tr><tr><td><code>ports.otlp-http.external</code></td><td>External port for the Opentelemetry HTTP receiver. <br> <code>4318</code></td></tr><tr><td><code>ports.otlp-http.internal</code></td><td>Internal port for the Opentelemetry HTTP receiver. <br> <code>4318</code></td></tr><tr><td><code>ports.tempo.external</code></td><td>External port for Tempo. <br> <code>80</code></td></tr><tr><td><code>ports.tempo.internal</code></td><td>Internal port for Tempo. <br> <code>3200</code></td></tr><tr><td><code>ports.zipkin.external</code></td><td>External port for the Zipkin receiver. <br> <code>9411</code></td></tr><tr><td><code>ports.zipkin.internal</code></td><td>Internal port for the Zipkin receiver. <br> <code>9411</code></td></tr><tr><td><code>resources.cpu.request</code></td><td>Min. requested amount of CPU time. <br> <code>50m</code></td></tr><tr><td><code>resources.cpu.limit</code></td><td>Max. allowed amount of CPU time. <br> <code>200m</code></td></tr><tr><td><code>resources.memory.request</code></td><td>Min. requested amount of memory. <br> <code>32Mi</code></td></tr><tr><td><code>resources.memory.limit</code></td><td>Max. allowed amount of memory. <br> <code>256Mi</code></td></tr></tbody></table>`,5),o=[l];function t(r,c,E,d,i,y){return n(),a("div",null,o)}const h=s(p,[["render",t]]);export{F as __pageData,h as default};
