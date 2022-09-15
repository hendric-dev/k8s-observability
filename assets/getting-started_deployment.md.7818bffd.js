import{_ as e,c as t,o as a,a as n}from"./app.1341e1ba.js";const u=JSON.parse('{"title":"Deployment","description":"","frontmatter":{"title":"Deployment"},"headers":[{"level":2,"title":"Noteworthy Tanka Commands","slug":"noteworthy-tanka-commands"}],"relativePath":"getting-started/deployment.md"}'),o={name:"getting-started/deployment.md"},r=n(`<h1 id="deployment" tabindex="-1">Deployment <a class="header-anchor" href="#deployment" aria-hidden="true">#</a></h1><p>Deploying with Tanka is as simple as running:</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">tk apply environments/default</span></span>
<span class="line"></span></code></pre></div><p>This creates all resources and the observability stack should be running shortly after.</p><p>The exposed endpoints may vary due to the hosts specified in the <code>config.jsonnet</code>. <br> By default:</p><ul><li>Grafana -&gt; <a href="http://grafana.my-server.com" target="_blank" rel="noopener noreferrer">http://grafana.my-server.com</a></li><li>InfluxDB -&gt; <a href="http://monitoring.db.my-server.com" target="_blank" rel="noopener noreferrer">http://monitoring.db.my-server.com</a></li></ul><h2 id="noteworthy-tanka-commands" tabindex="-1">Noteworthy Tanka Commands <a class="header-anchor" href="#noteworthy-tanka-commands" aria-hidden="true">#</a></h2><p>Tanka is a mighty tool with lots of helpful features. Checkout <a href="https://tanka.dev/tutorial/jsonnet" target="_blank" rel="noopener noreferrer">their documentation</a> for detailed information.</p><p>Some noteworthy commands:</p><ul><li><code>tk apply -t deployment/grafana environments/default</code><ul><li>Use the &quot;target&quot; flag to apply specific resources</li></ul></li><li><code>tk show environments/default</code><ul><li>Showcasts the deployment as standard k8s yaml files</li></ul></li><li><code>tk diff environments/default</code><ul><li>Shows a diff with the current deployed version</li></ul></li><li><code>tk export k8s-observability environments/default</code><ul><li>Exports the deployment as standard k8s yaml files</li></ul></li></ul>`,10),l=[r];function s(i,d,p,c,h,m){return a(),t("div",null,l)}var y=e(o,[["render",s]]);export{u as __pageData,y as default};