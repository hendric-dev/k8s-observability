import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.7c2782e4.js";const b=JSON.parse('{"title":"Shared Configuration Reference","description":"","frontmatter":{"title":"Shared Configuration Reference"},"headers":[],"relativePath":"configuration-reference/shared.md","filePath":"configuration-reference/shared.md"}'),o={name:"configuration-reference/shared.md"},l=e(`<h1 id="shared" tabindex="-1">Shared <a class="header-anchor" href="#shared" aria-label="Permalink to &quot;Shared&quot;">​</a></h1><p>This section shows all shared options that can be overridden in the <code>config.jsonnet</code> file. <br> Shared options are used for overarching settings that apply to all parts of the deployment as well as shared resources.</p><p>All shared config is stored under the <strong>shared</strong> object in the config.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  shared</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    annotations:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      deployment: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      ingress: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      pod: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    env:: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    ingress:: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    labels:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      deployment: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      pod: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      selector: {</span><span style="color:#9ECBFF;">&#39;app.kubernetes.io/name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;observability&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    name:: </span><span style="color:#9ECBFF;">&#39;observability&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    security:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      tls: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        enabled: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        issuer: </span><span style="color:#9ECBFF;">&#39;&lt;fill with certificate issuer&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    storage:: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      class: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;observability&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;observability&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;/opt/observability&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      size: </span><span style="color:#9ECBFF;">&#39;50Gi&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  shared</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    annotations:: {</span></span>
<span class="line"><span style="color:#24292E;">      deployment: {},</span></span>
<span class="line"><span style="color:#24292E;">      ingress: {},</span></span>
<span class="line"><span style="color:#24292E;">      pod: {},</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    env:: {},</span></span>
<span class="line"><span style="color:#24292E;">    ingress:: {},</span></span>
<span class="line"><span style="color:#24292E;">    labels:: {</span></span>
<span class="line"><span style="color:#24292E;">      deployment: {},</span></span>
<span class="line"><span style="color:#24292E;">      pod: {},</span></span>
<span class="line"><span style="color:#24292E;">      selector: {</span><span style="color:#032F62;">&#39;app.kubernetes.io/name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;observability&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    name:: </span><span style="color:#032F62;">&#39;observability&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    security:: {</span></span>
<span class="line"><span style="color:#24292E;">      tls: {</span></span>
<span class="line"><span style="color:#24292E;">        enabled: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        issuer: </span><span style="color:#032F62;">&#39;&lt;fill with certificate issuer&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    storage:: {</span></span>
<span class="line"><span style="color:#24292E;">      class: {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;observability&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;observability&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;/opt/observability&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      size: </span><span style="color:#032F62;">&#39;50Gi&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><table><thead><tr><th>Field</th><th>Description / Default</th></tr></thead><tbody><tr><td><code>annotations.deployment</code></td><td>Annotations added at the topmost level of all deployments. <br> <code>{}</code></td></tr><tr><td><code>annotations.ingress</code></td><td>Annotations added to all ingresses. <br> <code>{}</code></td></tr><tr><td><code>annotations.pod</code></td><td>Annotations added to all pods. <br> <code>{}</code></td></tr><tr><td><code>env</code></td><td>Environment variables added to all pods. <br> <code>{}</code></td></tr><tr><td><code>ingress.className</code></td><td>Class name added to all ingress resources. <br> <code>undefined</code></td></tr><tr><td><code>labels.deployment</code></td><td>Labels added at the topmost level of all deployments. <br> <code>{}</code></td></tr><tr><td><code>labels.pod</code></td><td>Labels added to all pods. <br> <code>{}</code></td></tr><tr><td><code>labels.selector</code></td><td>Selector used for all shared k8s resources. <br> <code>{&#39;app.kubernetes.io/name&#39;: &#39;observability&#39;}</code></td></tr><tr><td><code>name</code></td><td>Name used for the shared k8s resources. <br> <code>observability</code></td></tr><tr><td><code>security.tls.enabled</code></td><td>Enables TLS, creating a certificate to access all endpoints over HTTPS. <br> <code>false</code></td></tr><tr><td><code>security.tls.issuer</code></td><td>Issuer or ClusterIssuer where the certificate is requested. See <a href="https://cert-manager.io/docs/concepts/issuer/" target="_blank" rel="noreferrer">cert-manager documentation</a> on how to set one up. <br> <code>&lt;fill with certificate issuer&gt;</code></td></tr><tr><td><code>storage.class.name</code></td><td>Name of the storage class. <br> <code>observability</code></td></tr><tr><td><code>storage.class.parameters</code></td><td>Extra parameters of the storage class. <br> <code>undefined</code></td></tr><tr><td><code>storage.class.provisioner</code></td><td>Provisioner of the storage class. <br> <code>undefined</code></td></tr><tr><td><code>storage.name</code></td><td>Name used for the PV and PVC k8s resources. <br> <code>observability</code></td></tr><tr><td><code>storage.nfs.server</code></td><td>Address to an NFS which is used instead of the host. <br> <code>undefined</code></td></tr><tr><td><code>storage.path</code></td><td>Path on the host or NFS where the data is stored. <br> <code>/opt/observability</code></td></tr><tr><td><code>storage.size</code></td><td>Amount of storage to allocate for the Observability stack. <br> <code>50Gi</code></td></tr></tbody></table>`,5),t=[l];function p(r,c,d,i,E,y){return a(),n("div",null,t)}const f=s(o,[["render",p]]);export{b as __pageData,f as default};
