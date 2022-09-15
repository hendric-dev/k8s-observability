import{_ as a,c as e,o as s,a as n}from"./app.1341e1ba.js";const b=JSON.parse('{"title":"Setup Tanka","description":"","frontmatter":{"title":"Setup Tanka"},"headers":[{"level":2,"title":"Usage with Docker","slug":"usage-with-docker"},{"level":2,"title":"Initialize Tanka Project","slug":"initialize-tanka-project"},{"level":2,"title":"Install Libraries","slug":"install-libraries"}],"relativePath":"getting-started/setup-tanka.md"}'),t={name:"getting-started/setup-tanka.md"},l=n(`<h1 id="setup-tanka" tabindex="-1">Setup Tanka <a class="header-anchor" href="#setup-tanka" aria-hidden="true">#</a></h1><h2 id="usage-with-docker" tabindex="-1">Usage with Docker <a class="header-anchor" href="#usage-with-docker" aria-hidden="true">#</a></h2><p>You don&#39;t have Tanka installed locally? Start by setting up a Docker container. <br> Open a terminal in the folder where the project will be located and run:</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker run --rm -it --entrypoint sh \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">HOME/.kube:/root/.kube \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">PWD:/app \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  grafana/tanka</span></span>
<span class="line"></span></code></pre></div><p>You are now inside the Docker container with your kube config and the current folder mounted.</p><h2 id="initialize-tanka-project" tabindex="-1">Initialize Tanka Project <a class="header-anchor" href="#initialize-tanka-project" aria-hidden="true">#</a></h2><p>First create a folder for the project:</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir k8s-observability </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> k8s-observability</span></span>
<span class="line"></span></code></pre></div><p>Now let Tanka initialize everything:</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">tk init</span></span>
<span class="line"></span></code></pre></div><h2 id="install-libraries" tabindex="-1">Install Libraries <a class="header-anchor" href="#install-libraries" aria-hidden="true">#</a></h2><p>Use <code>jb</code> to install the k8s-observability lib:</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">jb install https://github.com/hendric-dev/k8s-observability.git/observability-stack@main</span></span>
<span class="line"></span></code></pre></div>`,13),i=[l];function r(p,o,c,d,h,u){return s(),e("div",null,i)}var y=a(t,[["render",r]]);export{b as __pageData,y as default};