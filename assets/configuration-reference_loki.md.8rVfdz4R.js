import{_ as s,c as i,o as e,V as t}from"./chunks/framework.cy3vOaDU.js";const g=JSON.parse('{"title":"Loki Configuration Reference","description":"","frontmatter":{"title":"Loki Configuration Reference"},"headers":[],"relativePath":"configuration-reference/loki.md","filePath":"configuration-reference/loki.md"}'),a={name:"configuration-reference/loki.md"},n=t(`<h1 id="loki" tabindex="-1">Loki <a class="header-anchor" href="#loki" aria-label="Permalink to &quot;Loki&quot;">​</a></h1><p>This section shows all available options that can be overridden in the <code>config.jsonnet</code> file.</p><p>All Loki config is stored under the <strong>loki</strong> object in the config.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  loki</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    annotations:: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      deployment: {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      pod: {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    env:: {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    image:: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;grafana/loki:2.8.1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    labels:: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      deployment: {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      pod: {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      selector: {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;app.kubernetes.io/name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;loki&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name:: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;loki&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ports:: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      external: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      internal: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    resources:: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      cpu: {request: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100m&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, limit: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      memory: {request: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;128Mi&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, limit: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;512Mi&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    retention:: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;672h&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><table><thead><tr><th>Field</th><th>Description / Default</th></tr></thead><tbody><tr><td><code>annotations.deployment</code></td><td>Annotations added at the deployment (topmost) level. <br> <code>{}</code></td></tr><tr><td><code>annotations.pod</code></td><td>Annotations added at the pod level. <br> <code>{}</code></td></tr><tr><td><code>env</code></td><td>Environment variables that are added to the Loki container. <br> <code>{}</code></td></tr><tr><td><code>image</code></td><td>Docker image that gets deployed. <br> <code>grafana/loki:2.8.1</code></td></tr><tr><td><code>labels.deployment</code></td><td>Labels added at the deployment (topmost) level. <br> <code>{}</code></td></tr><tr><td><code>labels.pod</code></td><td>Labels added at the pod level. <br> <code>{}</code></td></tr><tr><td><code>labels.selector</code></td><td>Selector used for all Loki k8s resources. <br> <code>{&#39;app.kubernetes.io/name&#39;: &#39;loki&#39;}</code></td></tr><tr><td><code>name</code></td><td>Name used for the k8s resources. <br> <code>loki</code></td></tr><tr><td><code>ports.external</code></td><td>External port where Loki is exposed. <br> <code>80</code></td></tr><tr><td><code>ports.internal</code></td><td>Internal port used inside the container. <br> <code>3100</code></td></tr><tr><td><code>resources.cpu.request</code></td><td>Min. requested amount of CPU time. <br> <code>100m</code></td></tr><tr><td><code>resources.cpu.limit</code></td><td>Max. allowed amount of CPU time. <br> <code>1</code></td></tr><tr><td><code>resources.memory.request</code></td><td>Min. requested amount of memory. <br> <code>128Mi</code></td></tr><tr><td><code>resources.memory.limit</code></td><td>Max. allowed amount of memory. <br> <code>512Mi</code></td></tr><tr><td><code>retention</code></td><td>Retention policy used for the log files (in hours). <br> <code>672h</code></td></tr></tbody></table>`,5),d=[n];function l(o,p,r,h,k,E){return e(),i("div",null,d)}const y=s(a,[["render",l]]);export{g as __pageData,y as default};
