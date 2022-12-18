import{_ as s,c as a,o as n,a as e}from"./app.7220b0e9.js";const h=JSON.parse('{"title":"Custom Metrics","description":"","frontmatter":{"title":"Custom Metrics"},"headers":[{"level":2,"title":"1. Writing a Vector Config","slug":"_1-writing-a-vector-config","link":"#_1-writing-a-vector-config","children":[]},{"level":2,"title":"2. Add the Config","slug":"_2-add-the-config","link":"#_2-add-the-config","children":[]},{"level":2,"title":"3. Verify","slug":"_3-verify","link":"#_3-verify","children":[]}],"relativePath":"advanced/custom-metrics.md"}'),o={name:"advanced/custom-metrics.md"},t=e(`<h1 id="custom-metrics" tabindex="-1">Custom Metrics <a class="header-anchor" href="#custom-metrics" aria-hidden="true">#</a></h1><p>While the observability stack already monitors lots of Kubernetes resources, there may be tons of other metrics that are worth monitoring.</p><ul><li><em>I got an API gateway that I want to monitor</em></li><li><em>My business is not running well, so I want to keep an eye on my conversion rate</em></li><li><em>There were some security issues lately, lets track the patch level of all machines</em></li></ul><p>There are lots of possible scenarios, which can be solved by providing a custom Vector config for metrics.</p><h2 id="_1-writing-a-vector-config" tabindex="-1">1. Writing a Vector Config <a class="header-anchor" href="#_1-writing-a-vector-config" aria-hidden="true">#</a></h2><p>Vector is a great tool with lots of possibilities to transform logs and metrics. <br> Explaining Vector is way beyond the scope here. Visit <a href="https://vector.dev/docs/" target="_blank" rel="noreferrer">their documentation</a>, which is much better suited for this purpose.</p><p>But to give an example, let&#39;s write a config that:</p><ul><li>scrapes a Prometheus endpoint of a running API gateway</li><li>filters for metrics with the name <code>failed_api_requests</code></li></ul><div class="language-toml"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">sources</span><span style="color:#A6ACCD;">.</span><span style="color:#FFCB6B;">api_gateway_metrics</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">type </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">prometheus_scrape</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">endpoints </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://api-gateway/metrics</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">scrape_interval_secs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">transforms</span><span style="color:#A6ACCD;">.</span><span style="color:#FFCB6B;">filter_api_gateway_metrics</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">type </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">filter</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">inputs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">api_gateway_metrics</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">condition </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">contains!(.name, &quot;failed_api_requests&quot;)</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">transforms</span><span style="color:#A6ACCD;">.</span><span style="color:#FFCB6B;">custom_metrics_output</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">type </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">filter</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">inputs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">filter_api_gateway_metrics</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">condition </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>IMPORTANT <br> There is a naming conventions that needs to be adhered to:</p><ul><li>The output needs to be aggregated by a filter with the name <code>custom_metrics_output</code></li></ul><p>The Influx DB sink is configured to look for an aggregator with that name</p></blockquote><h2 id="_2-add-the-config" tabindex="-1">2. Add the Config <a class="header-anchor" href="#_2-add-the-config" aria-hidden="true">#</a></h2><p>All that&#39;s left to do is to replace the default aggregator with the custom one.</p><p>Assuming the Vector config is placed under <code>vector/custom-api-gateway-metrics.toml</code> next to the Tanka <code>environments</code> folder.</p><p>In your <code>environments/&lt;my-environment&gt;/config.jsonnet</code> add the following:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">vector</span><span style="color:#89DDFF;">+</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    metrics+</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      custom</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">importstr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../../vector/custom-api-gateway-metrics.toml</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Seeing that the option is an array, it is also possible to split the config into multiple files, to keep complex transformations readable. Just remember to keep to the naming convention for the output as mentioned above.</p><h2 id="_3-verify" tabindex="-1">3. Verify <a class="header-anchor" href="#_3-verify" aria-hidden="true">#</a></h2><p>Tanka can be used to take a look at the final Vector config:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">tk show -t configmap/vector environment/</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">my-environment</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,19),l=[t];function p(r,c,i,y,D,F){return n(),a("div",null,l)}const u=s(o,[["render",p]]);export{h as __pageData,u as default};
