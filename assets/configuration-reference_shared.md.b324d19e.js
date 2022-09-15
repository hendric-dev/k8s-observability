import{_ as s,c as a,o as e,a as n}from"./app.1341e1ba.js";const h=JSON.parse('{"title":"Shared Configuration Reference","description":"","frontmatter":{"title":"Shared Configuration Reference"},"headers":[],"relativePath":"configuration-reference/shared.md"}'),o={name:"configuration-reference/shared.md"},t=n(`<h1 id="shared" tabindex="-1">Shared <a class="header-anchor" href="#shared" aria-hidden="true">#</a></h1><p>This section shows all shared options that can be overridden in the <code>config.jsonnet</code> file. <br> Shared options are used for overarching settings that apply to all parts of the deployment as well as shared resources.</p><p>All shared config is stored under the <strong>shared</strong> object in the config.</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">shared</span><span style="color:#89DDFF;">+</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    ingress</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#F07178;">    labels</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      selector</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">app.kubernetes.io/name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">observability</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">observability</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    storage</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      class</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">observability</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">observability</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      path</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/opt/observability</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      size</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">50Gi</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th>Field</th><th>Description / Default</th></tr></thead><tbody><tr><td><code>ingress.className</code></td><td>Class name added to all ingress resources. <br> <code>undefined</code></td></tr><tr><td><code>labels.selector</code></td><td>Selector used for all shared k8s resources. <br> <code>{&#39;app.kubernetes.io/name&#39;: &#39;observability&#39;}</code></td></tr><tr><td><code>name</code></td><td>Name used for the k8s resources. <br> <code>observability</code></td></tr><tr><td><code>storage.class.name</code></td><td>Name of the storage class. <br> <code>observability</code></td></tr><tr><td><code>storage.class.parameters</code></td><td>Extra parameters of the storage class. <br> <code>undefined</code></td></tr><tr><td><code>storage.class.provisioner</code></td><td>Provisioner of the storage class. <br> <code>undefined</code></td></tr><tr><td><code>storage.name</code></td><td>Name used for the PV and PVC k8s resources. <br> <code>observability</code></td></tr><tr><td><code>storage.nfs.server</code></td><td>Address to an NFS which is used instead of the host. <br> <code>undefined</code></td></tr><tr><td><code>storage.path</code></td><td>Path on the host or NFS where the data is stored. <br> <code>/opt/observability</code></td></tr><tr><td><code>storage.size</code></td><td>Amount of storage to allocate for the Observability stack. <br> <code>50Gi</code></td></tr></tbody></table>`,5),l=[t];function r(p,c,d,F,i,D){return e(),a("div",null,l)}var b=s(o,[["render",r]]);export{h as __pageData,b as default};