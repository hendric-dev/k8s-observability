import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.7c2782e4.js";const f=JSON.parse('{"title":"Influx DB Configuration Reference","description":"","frontmatter":{"title":"Influx DB Configuration Reference"},"headers":[],"relativePath":"configuration-reference/influx-db.md","filePath":"configuration-reference/influx-db.md"}'),l={name:"configuration-reference/influx-db.md"},o=e(`<h1 id="influx-db" tabindex="-1">Influx DB <a class="header-anchor" href="#influx-db" aria-label="Permalink to &quot;Influx DB&quot;">​</a></h1><p>This section shows all available options that can be overridden in the <code>config.jsonnet</code> file.</p><p>All InfluxDB config is stored under the <strong>influxDB</strong> object in the config.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  influxDB</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    annotations:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      deployment: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      ingress: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      pod: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    bucket:: </span><span style="color:#9ECBFF;">&#39;metrics&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    env:: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    host:: </span><span style="color:#9ECBFF;">&#39;monitoring.db.my-server.com&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    image:: </span><span style="color:#9ECBFF;">&#39;influxdb:2.7.1-alpine&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ingress:: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    labels:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      deployment: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      pod: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      selector: {</span><span style="color:#9ECBFF;">&#39;app.kubernetes.io/name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;influx-db&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    name:: </span><span style="color:#9ECBFF;">&#39;influx-db&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    organisation:: </span><span style="color:#9ECBFF;">&#39;observability&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    path:: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ports:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      external: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      internal: </span><span style="color:#79B8FF;">8086</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    resources:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      cpu: {request: </span><span style="color:#9ECBFF;">&#39;100m&#39;</span><span style="color:#E1E4E8;">, limit: </span><span style="color:#9ECBFF;">&#39;4&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">      memory: {request: </span><span style="color:#9ECBFF;">&#39;128Mi&#39;</span><span style="color:#E1E4E8;">, limit: </span><span style="color:#9ECBFF;">&#39;512Mi&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    retention:: </span><span style="color:#9ECBFF;">&#39;1w&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    secrets:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      username: </span><span style="color:#9ECBFF;">&#39;&lt;fill with InfluxDB username&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      password: </span><span style="color:#9ECBFF;">&#39;&lt;fill with InfluxDB password&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      token: </span><span style="color:#9ECBFF;">&#39;&lt;fill with API token&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    security:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      tls: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        enabled: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        issuer: </span><span style="color:#9ECBFF;">&#39;&lt;fill with certificate issuer&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  influxDB</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    annotations:: {</span></span>
<span class="line"><span style="color:#24292E;">      deployment: {},</span></span>
<span class="line"><span style="color:#24292E;">      ingress: {},</span></span>
<span class="line"><span style="color:#24292E;">      pod: {},</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    bucket:: </span><span style="color:#032F62;">&#39;metrics&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    env:: {},</span></span>
<span class="line"><span style="color:#24292E;">    host:: </span><span style="color:#032F62;">&#39;monitoring.db.my-server.com&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    image:: </span><span style="color:#032F62;">&#39;influxdb:2.7.1-alpine&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    ingress:: {},</span></span>
<span class="line"><span style="color:#24292E;">    labels:: {</span></span>
<span class="line"><span style="color:#24292E;">      deployment: {},</span></span>
<span class="line"><span style="color:#24292E;">      pod: {},</span></span>
<span class="line"><span style="color:#24292E;">      selector: {</span><span style="color:#032F62;">&#39;app.kubernetes.io/name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;influx-db&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    name:: </span><span style="color:#032F62;">&#39;influx-db&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    organisation:: </span><span style="color:#032F62;">&#39;observability&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    path:: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    ports:: {</span></span>
<span class="line"><span style="color:#24292E;">      external: </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      internal: </span><span style="color:#005CC5;">8086</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    resources:: {</span></span>
<span class="line"><span style="color:#24292E;">      cpu: {request: </span><span style="color:#032F62;">&#39;100m&#39;</span><span style="color:#24292E;">, limit: </span><span style="color:#032F62;">&#39;4&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">      memory: {request: </span><span style="color:#032F62;">&#39;128Mi&#39;</span><span style="color:#24292E;">, limit: </span><span style="color:#032F62;">&#39;512Mi&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    retention:: </span><span style="color:#032F62;">&#39;1w&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    secrets:: {</span></span>
<span class="line"><span style="color:#24292E;">      username: </span><span style="color:#032F62;">&#39;&lt;fill with InfluxDB username&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      password: </span><span style="color:#032F62;">&#39;&lt;fill with InfluxDB password&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      token: </span><span style="color:#032F62;">&#39;&lt;fill with API token&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    security:: {</span></span>
<span class="line"><span style="color:#24292E;">      tls: {</span></span>
<span class="line"><span style="color:#24292E;">        enabled: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        issuer: </span><span style="color:#032F62;">&#39;&lt;fill with certificate issuer&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><table><thead><tr><th>Field</th><th>Description / Default</th></tr></thead><tbody><tr><td><code>annotations.deployment</code></td><td>Annotations added at the deployment (topmost) level. <br> <code>{}</code></td></tr><tr><td><code>annotations.ingress</code></td><td>Annotations added to the ingress. <br> <code>{}</code></td></tr><tr><td><code>annotations.pod</code></td><td>Annotations added at the pod level. <br> <code>{}</code></td></tr><tr><td><code>bucket</code></td><td>Bucket name used for the metrics. <br> <code>metrics</code></td></tr><tr><td><code>env</code></td><td>Environment variables that are added to the Influx DB container. <br> <code>{}</code></td></tr><tr><td><code>host</code></td><td>Hostname where the UI is exposed. <br> <code>monitoring.db.my-server.com</code></td></tr><tr><td><code>image</code></td><td>Docker image that gets deployed. <br> <code>influxdb:2.7.1-alpine</code></td></tr><tr><td><code>ingress.className</code></td><td>Class name added to the Influx DB ingress. <br> <code>undefined</code></td></tr><tr><td><code>labels.deployment</code></td><td>Labels added at the deployment (topmost) level. <br> <code>{}</code></td></tr><tr><td><code>labels.pod</code></td><td>Labels added at the pod level. <br> <code>{}</code></td></tr><tr><td><code>labels.selector</code></td><td>Selector used for all InfluxDB k8s resources. <br> <code>{&#39;app.kubernetes.io/name&#39;: &#39;influx-db&#39;}</code></td></tr><tr><td><code>name</code></td><td>Name used for the k8s resources. <br> <code>influx-db</code></td></tr><tr><td><code>organisation</code></td><td>Name of the organisation. <br> <code>observability</code></td></tr><tr><td><code>path</code></td><td>Path where the UI is exposed. <br> <code>/</code></td></tr><tr><td><code>ports.external</code></td><td>External port where the UI is exposed. <br> <code>80</code></td></tr><tr><td><code>ports.internal</code></td><td>Internal port used inside the container. <br> <code>8086</code></td></tr><tr><td><code>resources.cpu.request</code></td><td>Min. requested amount of CPU time. <br> <code>100m</code></td></tr><tr><td><code>resources.cpu.limit</code></td><td>Max. allowed amount of CPU time. <br> <code>4</code></td></tr><tr><td><code>resources.memory.request</code></td><td>Min. requested amount of memory. <br> <code>128Mi</code></td></tr><tr><td><code>resources.memory.limit</code></td><td>Max. allowed amount of memory. <br> <code>512Mi</code></td></tr><tr><td><code>retention</code></td><td>Retention policy used for the metrics bucket. <br> <code>1w</code></td></tr><tr><td><code>secrets.username</code></td><td>Username for the InfluxDB. <br> <code>&lt;fill with InfluxDB username&gt;</code></td></tr><tr><td><code>secrets.password</code></td><td>Password for the InfluxDB. <br> <code>&lt;fill with InfluxDB password&gt;</code></td></tr><tr><td><code>secrets.token</code></td><td>Token that can be used to access the InfluxDB API. <br> <code>&lt;fill with API token&gt;</code></td></tr><tr><td><code>security.tls.enabled</code></td><td>Enables TLS, creating a certificate to access the Influx UI over HTTPS. <br> <code>false</code></td></tr><tr><td><code>security.tls.issuer</code></td><td>Issuer or ClusterIssuer where the certificate is requested. See <a href="https://cert-manager.io/docs/concepts/issuer/" target="_blank" rel="noreferrer">cert-manager documentation</a> on how to set one up. <br> <code>&lt;fill with certificate issuer&gt;</code></td></tr></tbody></table>`,5),t=[o];function p(c,r,d,i,E,y){return n(),a("div",null,t)}const m=s(l,[["render",p]]);export{f as __pageData,m as default};
