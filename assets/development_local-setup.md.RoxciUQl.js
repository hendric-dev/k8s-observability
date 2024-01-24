import{_ as s,c as i,o as a,V as e}from"./chunks/framework.1e9Q5H78.js";const u=JSON.parse('{"title":"Local Setup","description":"","frontmatter":{"title":"Local Setup"},"headers":[],"relativePath":"development/local-setup.md","filePath":"development/local-setup.md"}'),t={name:"development/local-setup.md"},n=e(`<h1 id="local-setup" tabindex="-1">Local Setup <a class="header-anchor" href="#local-setup" aria-label="Permalink to &quot;Local Setup&quot;">​</a></h1><p>It is possible to spin up a local version of the Observability stack for development purposes. <br> This is useful for testing new features, debugging issues or validating an upgrade.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>A local one node Kubernetes cluster is used to deploy the Observability stack. <br> Therefore some tools are required:</p><ul><li><a href="https://docs.docker.com/engine/install/" target="_blank" rel="noreferrer">Docker</a></li><li><a href="https://minikube.sigs.k8s.io/docs/start/" target="_blank" rel="noreferrer">Minikube</a></li><li><a href="https://kubernetes.io/docs/tasks/tools/" target="_blank" rel="noreferrer">Kubectl</a></li><li><a href="https://tanka.dev/install" target="_blank" rel="noreferrer">Tanka + Jsonnet Bundler</a></li></ul><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><ol><li>The first step is to start the local Kubernetes cluster</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">minikube</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre></div><ol start="2"><li>Enable the ingress addon on Minikube, as the Grafana and InfluxDB dashboards are accessed via ingress:</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">minikube</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> addons enable ingress</span></span></code></pre></div><ol start="3"><li>Install the Jsonnet dependencies. From the <code>minikube</code> folder run:</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">jb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><ol start="4"><li>Apply the deployment by passing the Minikube IP:</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply environments/default --tla-str minikube=$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">minikube</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip)</span></span></code></pre></div><p>Initialization may take a few minutes. Use kubectl to check the status:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get pods</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NAME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                         READY   STATUS    RESTARTS   AGE</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grafana-79b957ffcd-zbghc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/1     Running   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">m</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">influx-db-859f67d695-hrm28</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/1     Running   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">m</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">loki-5bc48f5589-7nqdr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/1     Running   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">m</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tempo-6b998bc4b7-kqpzv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/1     Running   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">m</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vector-8ftpd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/1     Running   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">m</span></span></code></pre></div><p>After everything is up and running, the two dashboards are reachable at:</p><ul><li>Grafana: <code>http://&lt;minikube_ip&gt;/grafana</code></li><li>InfluxDB: <code>http://&lt;minikube_ip&gt;/</code></li></ul><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h2><h3 id="grafana-is-restarting" tabindex="-1">Grafana is restarting <a class="header-anchor" href="#grafana-is-restarting" aria-label="Permalink to &quot;Grafana is restarting&quot;">​</a></h3><p>Depending on your machine Grafana may take too long to initialize. The startup probe that kicks in after 60s restarts the pod if it is not ready by then. <br> Temporarily disable the startup, readiness and liveness probes may solve the issue.</p>`,21),l=[n];function h(p,r,k,o,d,c){return a(),i("div",null,l)}const F=s(t,[["render",h]]);export{u as __pageData,F as default};
