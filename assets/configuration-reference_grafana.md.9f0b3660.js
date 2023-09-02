import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.7c2782e4.js";const f=JSON.parse('{"title":"Grafana Configuration Reference","description":"","frontmatter":{"title":"Grafana Configuration Reference"},"headers":[],"relativePath":"configuration-reference/grafana.md","filePath":"configuration-reference/grafana.md"}'),l={name:"configuration-reference/grafana.md"},o=e(`<h1 id="grafana" tabindex="-1">Grafana <a class="header-anchor" href="#grafana" aria-label="Permalink to &quot;Grafana&quot;">​</a></h1><p>This section shows all available options that can be overridden in the <code>config.jsonnet</code> file.</p><p>All Grafana config is stored under the <strong>grafana</strong> object in the config.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  grafana</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    annotations:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      deployment: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      ingress: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      pod: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    dashboards:: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        definition: importstr </span><span style="color:#9ECBFF;">&#39;../../dashboards/kubernetes-node-resources.json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        file: </span><span style="color:#9ECBFF;">&#39;kubernetes-node-resources.json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        folder: </span><span style="color:#9ECBFF;">&#39;Kubernetes&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Node Resources&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        definition: importstr </span><span style="color:#9ECBFF;">&#39;../../dashboards/kubernetes-pod-resources.json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        file: </span><span style="color:#9ECBFF;">&#39;kubernetes-pod-resources.json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        folder: </span><span style="color:#9ECBFF;">&#39;Kubernetes&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Pod Resources&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    env:: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    host:: </span><span style="color:#9ECBFF;">&#39;grafana.my-server.com&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    image:: </span><span style="color:#9ECBFF;">&#39;grafana/grafana:9.5.1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ingress:: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    labels:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      deployment: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      pod: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      selector: {</span><span style="color:#9ECBFF;">&#39;app.kubernetes.io/name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;grafana&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    name:: </span><span style="color:#9ECBFF;">&#39;grafana&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    path:: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ports:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      external: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      internal: </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    resources:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      cpu: {request: </span><span style="color:#9ECBFF;">&#39;50m&#39;</span><span style="color:#E1E4E8;">, limit: </span><span style="color:#9ECBFF;">&#39;200m&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">      memory: {request: </span><span style="color:#9ECBFF;">&#39;32Mi&#39;</span><span style="color:#E1E4E8;">, limit: </span><span style="color:#9ECBFF;">&#39;128Mi&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    secrets:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      admin: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        username: </span><span style="color:#9ECBFF;">&#39;&lt;fill with admin username&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        password: </span><span style="color:#9ECBFF;">&#39;&lt;fill with admin password&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    security:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      tls: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        enabled: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        issuer: </span><span style="color:#9ECBFF;">&#39;&lt;fill with certificate issuer&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  grafana</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    annotations:: {</span></span>
<span class="line"><span style="color:#24292E;">      deployment: {},</span></span>
<span class="line"><span style="color:#24292E;">      ingress: {},</span></span>
<span class="line"><span style="color:#24292E;">      pod: {},</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    dashboards:: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        definition: importstr </span><span style="color:#032F62;">&#39;../../dashboards/kubernetes-node-resources.json&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        file: </span><span style="color:#032F62;">&#39;kubernetes-node-resources.json&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        folder: </span><span style="color:#032F62;">&#39;Kubernetes&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Node Resources&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        definition: importstr </span><span style="color:#032F62;">&#39;../../dashboards/kubernetes-pod-resources.json&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        file: </span><span style="color:#032F62;">&#39;kubernetes-pod-resources.json&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        folder: </span><span style="color:#032F62;">&#39;Kubernetes&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Pod Resources&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    env:: {},</span></span>
<span class="line"><span style="color:#24292E;">    host:: </span><span style="color:#032F62;">&#39;grafana.my-server.com&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    image:: </span><span style="color:#032F62;">&#39;grafana/grafana:9.5.1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    ingress:: {},</span></span>
<span class="line"><span style="color:#24292E;">    labels:: {</span></span>
<span class="line"><span style="color:#24292E;">      deployment: {},</span></span>
<span class="line"><span style="color:#24292E;">      pod: {},</span></span>
<span class="line"><span style="color:#24292E;">      selector: {</span><span style="color:#032F62;">&#39;app.kubernetes.io/name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;grafana&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    name:: </span><span style="color:#032F62;">&#39;grafana&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    path:: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    ports:: {</span></span>
<span class="line"><span style="color:#24292E;">      external: </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      internal: </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    resources:: {</span></span>
<span class="line"><span style="color:#24292E;">      cpu: {request: </span><span style="color:#032F62;">&#39;50m&#39;</span><span style="color:#24292E;">, limit: </span><span style="color:#032F62;">&#39;200m&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">      memory: {request: </span><span style="color:#032F62;">&#39;32Mi&#39;</span><span style="color:#24292E;">, limit: </span><span style="color:#032F62;">&#39;128Mi&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    secrets:: {</span></span>
<span class="line"><span style="color:#24292E;">      admin: {</span></span>
<span class="line"><span style="color:#24292E;">        username: </span><span style="color:#032F62;">&#39;&lt;fill with admin username&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        password: </span><span style="color:#032F62;">&#39;&lt;fill with admin password&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    security:: {</span></span>
<span class="line"><span style="color:#24292E;">      tls: {</span></span>
<span class="line"><span style="color:#24292E;">        enabled: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        issuer: </span><span style="color:#032F62;">&#39;&lt;fill with certificate issuer&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><table><thead><tr><th>Field</th><th>Description / Default</th></tr></thead><tbody><tr><td><code>annotations.deployment</code></td><td>Annotations added at the deployment (topmost) level. <br> <code>{}</code></td></tr><tr><td><code>annotations.ingress</code></td><td>Annotations added to the ingress. <br> <code>{}</code></td></tr><tr><td><code>annotations.pod</code></td><td>Annotations added at the pod level. <br> <code>{}</code></td></tr><tr><td><code>dashboards</code></td><td>Array of dashboard definitions that are provisioned. <br> See <a href="./../advanced/custom-dashboards.html">Custom Dashboards</a>. <br> <code>[ /* various default dashboards */ ]</code></td></tr><tr><td><code>env</code></td><td>Environment variables that are added to the Grafana container. See <a href="#customize-grafana">Customize Grafana</a> <br> <code>{}</code></td></tr><tr><td><code>host</code></td><td>Hostname where the UI is exposed. <br> <code>grafana.my-server.com</code></td></tr><tr><td><code>image</code></td><td>Docker image that gets deployed. <br> <code>grafana/grafana:9.5.1</code></td></tr><tr><td><code>ingress.className</code></td><td>Class name added to the Grafana ingress. <br> <code>undefined</code></td></tr><tr><td><code>labels.deployment</code></td><td>Labels added at the deployment (topmost) level. <br> <code>{}</code></td></tr><tr><td><code>labels.pod</code></td><td>Labels added at the pod level. <br> <code>{}</code></td></tr><tr><td><code>labels.selector</code></td><td>Selector used for all Grafana k8s resources. <br> <code>{&#39;app.kubernetes.io/name&#39;: &#39;grafana&#39;}</code></td></tr><tr><td><code>name</code></td><td>Name used for the k8s resources. <br> <code>grafana</code></td></tr><tr><td><code>path</code></td><td>Path where the UI is exposed. <br> <code>/</code></td></tr><tr><td><code>ports.external</code></td><td>External port where the UI is exposed. <br> <code>80</code></td></tr><tr><td><code>ports.internal</code></td><td>Internal port used inside the container. <br> <code>3000</code></td></tr><tr><td><code>resources.cpu.request</code></td><td>Min. requested amount of CPU time. <br> <code>50m</code></td></tr><tr><td><code>resources.cpu.limit</code></td><td>Max. allowed amount of CPU time. <br> <code>200m</code></td></tr><tr><td><code>resources.memory.request</code></td><td>Min. requested amount of memory. <br> <code>32Mi</code></td></tr><tr><td><code>resources.memory.limit</code></td><td>Max. allowed amount of memory. <br> <code>128Mi</code></td></tr><tr><td><code>secrets.admin.username</code></td><td>Admin username for Grafana. <br> <code>&lt;fill with admin username&gt;</code></td></tr><tr><td><code>secrets.admin.password</code></td><td>Admin password for Grafana. <br> <code>&lt;fill with admin password&gt;</code></td></tr><tr><td><code>security.tls.enabled</code></td><td>Enables TLS, creating a certificate to access Grafana over HTTPS. <br> <code>false</code></td></tr><tr><td><code>security.tls.issuer</code></td><td>Issuer or ClusterIssuer where the certificate is requested. See <a href="https://cert-manager.io/docs/concepts/issuer/" target="_blank" rel="noreferrer">cert-manager documentation</a> on how to set one up. <br> <code>&lt;fill with certificate issuer&gt;</code></td></tr></tbody></table><h2 id="customize-grafana" tabindex="-1">Customize Grafana <a class="header-anchor" href="#customize-grafana" aria-label="Permalink to &quot;Customize Grafana&quot;">​</a></h2><p>While it is possible to configure the most common options through the Jsonnet config above, it doesn&#39;t cover all use cases. <br> Grafana itself is quite customizable and allows to set any possible option through environment variables. See <a href="https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#override-configuration-with-environment-variables" target="_blank" rel="noreferrer">overide configuration with environment variabls</a> on the official Grafana documentation.</p><p>The environment variables can be set by using the <code>env</code> field mentioned above. <br> An example may look like this:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  grafana</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    env+:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;GF_AUTH_DISABLE_LOGIN_FORM&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;GF_AUTH_GITHUB_AUTH_URL&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;https://github.com/login/oauth/authorize&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;GF_AUTH_GITHUB_ENABLED&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  grafana</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    env+:: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;GF_AUTH_DISABLE_LOGIN_FORM&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;GF_AUTH_GITHUB_AUTH_URL&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;https://github.com/login/oauth/authorize&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;GF_AUTH_GITHUB_ENABLED&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,9),p=[o];function t(r,c,E,i,d,y){return n(),a("div",null,p)}const m=s(l,[["render",t]]);export{f as __pageData,m as default};
