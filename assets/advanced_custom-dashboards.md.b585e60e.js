import{_ as s,c as a,o,a as e}from"./app.6b738a5f.js";const n="/k8s-observability/assets/save-dashboard.b041f1f4.png",t="/k8s-observability/assets/save-dashboard-to-json.5f413c33.png",F=JSON.parse('{"title":"Custom Dashboards","description":"","frontmatter":{"title":"Custom Dashboards"},"headers":[{"level":2,"title":"Add Dashboards using the Grafana UI","slug":"add-dashboards-using-the-grafana-ui","link":"#add-dashboards-using-the-grafana-ui","children":[]},{"level":2,"title":"Add Dashboards to Provisioning","slug":"add-dashboards-to-provisioning","link":"#add-dashboards-to-provisioning","children":[]}],"relativePath":"advanced/custom-dashboards.md"}'),r={name:"advanced/custom-dashboards.md"},l=e('<h1 id="custom-dashboards" tabindex="-1">Custom Dashboards <a class="header-anchor" href="#custom-dashboards" aria-hidden="true">#</a></h1><p>Grafana offers a variety of dashboards that cover a lot of use cases. <br> While the observability stack offers some preconfigured dashboards for common scenarios, you might have the need for special ones like:</p><ul><li><em>Monitoring the traffic going over an Nginx</em></li><li><em>Track user behavior to gather information about future improvements</em></li><li><em>Or even visualize certain business metrics</em></li></ul><p>The options are diverse and unpredictable, therefore it is possible to add custom dashboards to the deployment.</p><h2 id="add-dashboards-using-the-grafana-ui" tabindex="-1">Add Dashboards using the Grafana UI <a class="header-anchor" href="#add-dashboards-using-the-grafana-ui" aria-hidden="true">#</a></h2><p>Dashboards are created using the Grafana UI. <br> Visit the dashboards view and get started by clicking <strong>New Dashboard</strong>.</p><p>The <a href="https://grafana.com/docs/grafana/latest/getting-started/build-first-dashboard/" target="_blank" rel="noreferrer">Grafana documentation</a> covers all information needed to build a dashboard.</p><p>Once you are satisfied you can simply save the dashboard using the save button in the upper right corner:</p><p><img src="'+n+'" alt="Save dashboard image"></p><p>The dashboard is persisted on the storage that was chosen (host or NFS).</p><h2 id="add-dashboards-to-provisioning" tabindex="-1">Add Dashboards to Provisioning <a class="header-anchor" href="#add-dashboards-to-provisioning" aria-hidden="true">#</a></h2><p>Grafana allows to provision dashboards, a feature that is used for the default dashboards of the observability stack. <br> Those dashboards are persisted as JSON files and are created along the deployment. This also means that they are reset upon restarts and all modifications done are lost.</p><p>But it also means that they are safer, cause they can be checked into Git.</p><p>You may add your custom dashboards to the provisioning if you wish. <br> Click on the dashboard settings right next to the save button. You will see the option <strong>JSON Model</strong> on the left side:</p><p><img src="'+t+`" alt="JSON model image"></p><p>This allows you to copy the dashboard in JSON format. Let&#39;s assume you save it as <code>my-custom-dashboard.json</code> next to the <code>config.jsonnet</code>.</p><p>All that&#39;s left to do is to make it known to the deployment. In the <code>config.jsonnet</code> add the following:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">grafana</span><span style="color:#89DDFF;">+</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    dashboards+</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">: [</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        definition</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">importstr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my-custom-dashboard.json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        file</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my-custom-dashboard.json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        folder</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Kubernetes</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Interesting Business Metrics</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>That&#39;s it. After you redeploy the Grafana configmap and pod, the dashboard gets provisioned. \u{1F389}</p>`,19),p=[l];function d(i,c,h,y,b,u){return o(),a("div",null,p)}const f=s(r,[["render",d]]);export{F as __pageData,f as default};
