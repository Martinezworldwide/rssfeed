var Y=Object.defineProperty;var X=(r,e,a)=>e in r?Y(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a;var h=(r,e,a)=>X(r,typeof e!="symbol"?e+"":e,a);import{g as p}from"./gsap-CzGW6FVa.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const v=[{id:"cnn",name:"CNN",description:"Breaking news, politics, and world coverage from Cable News Network.",url:"http://rss.cnn.com/rss/cnn_topstories.rss",websiteUrl:"https://www.cnn.com",category:"news",icon:"📡",color:"#cc0000",region:"US",language:"en",embeddable:!1},{id:"fox-news",name:"Fox News",description:"Latest headlines and analysis from Fox News Digital.",url:"https://moxie.foxnews.com/google-publisher/latest.xml",websiteUrl:"https://www.foxnews.com",category:"politics",icon:"🦊",color:"#003366",region:"US",language:"en",embeddable:!1,extremismWatch:!0,watchTier:"high",watchReason:"Conservative media — monitored for disinformation and radicalization vectors"},{id:"msnbc",name:"MSNBC",description:"Progressive news commentary and breaking political coverage.",url:"https://www.msnbc.com/feeds/latest",websiteUrl:"https://www.msnbc.com",category:"politics",icon:"📺",color:"#ff6900",region:"US",language:"en",embeddable:!1},{id:"breitbart",name:"Breitbart",description:"Conservative news, politics, and opinion from Breitbart News.",url:"https://feeds.feedburner.com/breitbart",websiteUrl:"https://www.breitbart.com",category:"politics",icon:"⚡",color:"#d4af37",region:"US",language:"en",embeddable:!1,extremismWatch:!0,watchTier:"critical",watchReason:"Far-right outlet — priority watch for extremism, cyber-threat narratives, and disinformation"},{id:"bbc-world",name:"BBC World",description:"International news from the British Broadcasting Corporation.",url:"https://feeds.bbci.co.uk/news/world/rss.xml",websiteUrl:"https://www.bbc.com/news/world",category:"world",icon:"🌍",color:"#bb1919",region:"UK",language:"en",embeddable:!1},{id:"reuters",name:"Reuters",description:"Global business, financial, and breaking news wire service.",url:"https://feeds.reuters.com/reuters/topNews",websiteUrl:"https://www.reuters.com",category:"business",icon:"📊",color:"#ff8000",region:"Global",language:"en",embeddable:!1},{id:"techcrunch",name:"TechCrunch",description:"Startup news, tech product launches, and Silicon Valley coverage.",url:"https://techcrunch.com/feed/",websiteUrl:"https://techcrunch.com",category:"tech",icon:"🚀",color:"#0a9e01",region:"US",language:"en",embeddable:!1},{id:"the-verge",name:"The Verge",description:"Technology, science, art, and culture from Vox Media.",url:"https://www.theverge.com/rss/index.xml",websiteUrl:"https://www.theverge.com",category:"tech",icon:"🔮",color:"#fa4b2a",region:"US",language:"en",embeddable:!1},{id:"espn",name:"ESPN",description:"Sports headlines, scores, and analysis from ESPN.",url:"https://www.espn.com/espn/rss/news",websiteUrl:"https://www.espn.com",category:"sports",icon:"🏆",color:"#d00",region:"US",language:"en",embeddable:!1},{id:"latino-rebels",name:"Latino Rebels",description:"Latinx news, culture, and social justice reporting.",url:"https://www.latinorebels.com/feed/",websiteUrl:"https://www.latinorebels.com",category:"culture",icon:"✊",color:"#e63946",region:"US",language:"en",embeddable:!1},{id:"npr",name:"NPR News",description:"National Public Radio top stories and in-depth reporting.",url:"https://feeds.npr.org/1001/rss.xml",websiteUrl:"https://www.npr.org",category:"news",icon:"🎙️",color:"#2d5a27",region:"US",language:"en",embeddable:!1},{id:"ars-technica",name:"Ars Technica",description:"Deep-dive technology journalism and science coverage.",url:"https://feeds.arstechnica.com/arstechnica/index",websiteUrl:"https://arstechnica.com",category:"tech",icon:"⚙️",color:"#ff4e00",region:"US",language:"en",embeddable:!1}],R={news:{label:"News",icon:"📰",color:"#3b82f6"},politics:{label:"Politics",icon:"🏛️",color:"#8b5cf6"},tech:{label:"Technology",icon:"💻",color:"#06b6d4"},business:{label:"Business",icon:"💹",color:"#10b981"},entertainment:{label:"Entertainment",icon:"🎬",color:"#f59e0b"},sports:{label:"Sports",icon:"⚽",color:"#ef4444"},world:{label:"World",icon:"🌐",color:"#6366f1"},culture:{label:"Culture",icon:"🎨",color:"#ec4899"}},f=v.filter(r=>r.extremismWatch),J=[{id:"dashboard",label:"Command Center",icon:"◈",description:"Real-time feed intelligence overview"},{id:"reader",label:"Feed Reader",icon:"◎",description:"Unified article stream from all sources"},{id:"extremism-monitor",label:"Threat Watch",icon:"⬢",description:"Cybersecurity extremism monitor for flagged sources"},{id:"multi-view",label:"Multi-View",icon:"▦",description:"Live website mosaic — original feature"},{id:"sources",label:"Source Matrix",icon:"⬡",description:"Manage and configure feed sources"},{id:"analytics",label:"Analytics",icon:"◉",description:"Feed performance and category breakdown"}],K=[r=>`https://api.allorigins.win/raw?url=${encodeURIComponent(r)}`,r=>`https://api.allorigins.win/get?url=${encodeURIComponent(r)}`,r=>`https://corsproxy.io/?${encodeURIComponent(r)}`],Z="/rssfeed/feeds-cache.json";async function ee(){try{const r=await fetch(Z);if(!r.ok)return null;const e=await r.json(),a=new Map;for(const[t,s]of Object.entries(e.feeds))a.set(t,{sourceId:t,items:s.items.map(i=>({...i,pubDate:new Date(i.pubDate)})),fetchedAt:new Date(s.fetchedAt),error:s.error});return a}catch{return null}}function te(r,e){let a=r;try{const d=JSON.parse(r);d.contents&&(a=d.contents)}catch{}const s=new DOMParser().parseFromString(a,"text/xml");if(s.querySelector("parsererror"))throw new Error(`XML parse error for ${e.name}`);const n=[],l=s.querySelectorAll("item");return l.length>0?(l.forEach((d,m)=>{var S,E,C,x,L,A,k,T,I,M,q,V,P,j;const g=((E=(S=d.querySelector("title"))==null?void 0:S.textContent)==null?void 0:E.trim())??"Untitled",b=((x=(C=d.querySelector("link"))==null?void 0:C.textContent)==null?void 0:x.trim())??e.websiteUrl,y=((A=(L=d.querySelector("description"))==null?void 0:L.textContent)==null?void 0:A.trim())??((T=(k=d.querySelector("content\\:encoded"))==null?void 0:k.textContent)==null?void 0:T.trim())??"",$=(M=(I=d.querySelector("pubDate"))==null?void 0:I.textContent)==null?void 0:M.trim(),O=((V=(q=d.querySelector("author"))==null?void 0:q.textContent)==null?void 0:V.trim())??((j=(P=d.querySelector("dc\\:creator"))==null?void 0:P.textContent)==null?void 0:j.trim()),w=d.querySelector('media\\:content, enclosure[type^="image"]'),D=(w==null?void 0:w.getAttribute("url"))??z(y);n.push({id:`${e.id}-${m}-${B(b)}`,sourceId:e.id,title:U(g),link:b,description:U(W(y,300)),pubDate:$?new Date($):new Date,author:O,imageUrl:D,category:e.category})}),n):(s.querySelectorAll("entry").forEach((d,m)=>{var w,D,S,E,C,x,L,A,k,T,I,M,q,V;const g=((D=(w=d.querySelector("title"))==null?void 0:w.textContent)==null?void 0:D.trim())??"Untitled",b=((S=d.querySelector('link[rel="alternate"]'))==null?void 0:S.getAttribute("href"))??((E=d.querySelector("link"))==null?void 0:E.getAttribute("href"))??e.websiteUrl,y=((x=(C=d.querySelector("summary"))==null?void 0:C.textContent)==null?void 0:x.trim())??((A=(L=d.querySelector("content"))==null?void 0:L.textContent)==null?void 0:A.trim())??"",$=((T=(k=d.querySelector("published"))==null?void 0:k.textContent)==null?void 0:T.trim())??((M=(I=d.querySelector("updated"))==null?void 0:I.textContent)==null?void 0:M.trim()),O=(V=(q=d.querySelector("author name"))==null?void 0:q.textContent)==null?void 0:V.trim();n.push({id:`${e.id}-${m}-${B(b)}`,sourceId:e.id,title:U(g),link:b,description:U(W(y,300)),pubDate:$?new Date($):new Date,author:O,imageUrl:z(y),category:e.category})}),n)}function U(r){var a;const e=document.createElement("div");return e.innerHTML=r,((a=e.textContent)==null?void 0:a.trim())??r}function W(r,e){const a=U(r);return a.length<=e?a:a.slice(0,e).trim()+"…"}function z(r){const e=r.match(/<img[^>]+src=["']([^"']+)["']/i);return e==null?void 0:e[1]}function B(r){let e=0;for(let a=0;a<r.length;a++)e=(e<<5)-e+r.charCodeAt(a),e|=0;return Math.abs(e).toString(36)}async function ae(r){let e="All proxies failed";for(const a of K)try{const t=new AbortController,s=setTimeout(()=>t.abort(),12e3),i=await fetch(a(r.url),{signal:t.signal});if(clearTimeout(s),!i.ok)continue;const n=await i.text();if(n.includes("<rss")||n.includes("<feed")||n.includes('"contents"'))return n}catch(t){e=t instanceof Error?t.message:"Proxy error"}throw new Error(e)}async function se(r){try{const e=await ae(r),a=te(e,r).slice(0,25);return{sourceId:r.id,items:a,fetchedAt:new Date}}catch(e){const a=e instanceof Error?e.message:"Unknown error";return{sourceId:r.id,items:[],fetchedAt:new Date,error:a}}}async function ie(r,e){const a=new Map,t=3;let s=0;for(let i=0;i<r.length;i+=t){const n=r.slice(i,i+t),l=await Promise.all(n.map(o=>se(o)));for(const o of l)a.set(o.sourceId,o),s++,e==null||e(s,r.length)}return a}function re(r){const e=[];for(const a of r.values())e.push(...a.items);return e.sort((a,t)=>t.pubDate.getTime()-a.pubDate.getTime())}function _(r){const a=Date.now()-r.getTime(),t=Math.floor(a/6e4),s=Math.floor(a/36e5),i=Math.floor(a/864e5);return t<1?"Just now":t<60?`${t}m ago`:s<24?`${s}h ago`:i<7?`${i}d ago`:r.toLocaleDateString("en-US",{month:"short",day:"numeric"})}class ne{constructor(){h(this,"state",{currentView:"dashboard",readerLayout:"magazine",selectedCategory:"all",searchQuery:"",selectedSourceIds:v.map(e=>e.id),sidebarCollapsed:!1,multiViewColumns:2,multiViewSourceIds:["breitbart","fox-news","msnbc","latino-rebels","cnn","bbc-world"]});h(this,"feedCache",new Map);h(this,"listeners",new Set);h(this,"loading",!1);h(this,"loadProgress",{completed:0,total:0})}getState(){return{...this.state}}isLoading(){return this.loading}getLoadProgress(){return{...this.loadProgress}}getFeedCache(){return this.feedCache}getAllItems(){return re(this.feedCache)}getFilteredItems(){let e=this.getAllItems();if(e=e.filter(a=>this.state.selectedSourceIds.includes(a.sourceId)),this.state.selectedCategory!=="all"&&(e=e.filter(a=>a.category===this.state.selectedCategory)),this.state.searchQuery.trim()){const a=this.state.searchQuery.toLowerCase();e=e.filter(t=>t.title.toLowerCase().includes(a)||t.description.toLowerCase().includes(a))}return e}getDashboardStats(){const e=this.getAllItems(),a=new Set(e.map(n=>n.category).filter(Boolean)),t=new Map;for(const n of e)t.set(n.sourceId,(t.get(n.sourceId)??0)+1);const s=[...t.entries()].sort((n,l)=>l[1]-n[1]).slice(0,5).map(([n,l])=>({sourceId:n,count:l}));let i=null;for(const n of this.feedCache.values())(!i||n.fetchedAt>i)&&(i=n.fetchedAt);return{totalSources:v.length,totalArticles:e.length,categoriesActive:a.size,lastUpdated:i,topSources:s}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){const e=this.getState();for(const a of this.listeners)a(e)}setView(e){this.state.currentView=e,this.notify()}setReaderLayout(e){this.state.readerLayout=e,this.notify()}setCategory(e){this.state.selectedCategory=e,this.notify()}setSearchQuery(e){this.state.searchQuery=e,this.notify()}toggleSource(e){const a=this.state.selectedSourceIds.indexOf(e);a>=0?this.state.selectedSourceIds.splice(a,1):this.state.selectedSourceIds.push(e),this.notify()}toggleSidebar(){this.state.sidebarCollapsed=!this.state.sidebarCollapsed,this.notify()}setMultiViewColumns(e){this.state.multiViewColumns=e,this.notify()}toggleMultiViewSource(e){const a=this.state.multiViewSourceIds.indexOf(e);a>=0?this.state.multiViewSourceIds.splice(a,1):this.state.multiViewSourceIds.push(e),this.notify()}setFeedCache(e){this.feedCache=e,this.notify()}setLoading(e){this.loading=e,this.notify()}setLoadProgress(e,a){this.loadProgress={completed:e,total:a},this.notify()}}const c=new ne,u={revealChildren(r,e=".anim-item",a=0){const t=r.querySelectorAll(e);return p.set(t,{opacity:0,y:24}),p.to(t,{opacity:1,y:0,duration:.6,stagger:.06,ease:"power3.out",delay:a})},pageEnter(r){return p.set(r,{opacity:0,y:30}),p.to(r,{opacity:1,y:0,duration:.7,ease:"power4.out"})},pageExit(r){return new Promise(e=>{p.to(r,{opacity:0,y:-20,duration:.35,ease:"power2.in",onComplete:e})})},pulseGlow(r){return p.to(r,{boxShadow:"0 0 30px rgba(0, 212, 255, 0.4)",duration:1.5,repeat:-1,yoyo:!0,ease:"sine.inOut"})},sidebarToggle(r,e){return p.to(r,{width:e?72:280,duration:.4,ease:"power3.inOut"})},animateCounter(r,e,a=1.2){const t={val:0};return p.to(t,{val:e,duration:a,ease:"power2.out",onUpdate:()=>{r.textContent=Math.round(t.val).toLocaleString()}})},loadingBar(r,e){return p.to(r,{width:`${e}%`,duration:.4,ease:"power2.out"})},cardHover(r,e){p.to(r,{scale:e?1.02:1,y:e?-4:0,duration:.3,ease:"power2.out"})},scanline(r){return p.fromTo(r,{x:"-100%"},{x:"200%",duration:3,repeat:-1,ease:"none"})},typewriter(r,e,a=.04){r.textContent="";const t=p.timeline();return e.split("").forEach((i,n)=>{t.call(()=>{r.textContent+=i},void 0,n*a)}),t},orbit(r){return p.to(r,{rotation:360,duration:20,repeat:-1,ease:"none"})},kill(r){p.killTweensOf(r)}};class le{constructor(){h(this,"el");h(this,"navClickHandlers",new Map);this.el=document.createElement("aside"),this.el.className="sidebar",this.el.id="sidebar"}render(){const e=c.getState();return this.el.innerHTML=`
      <div class="sidebar__brand">
        <div class="sidebar__logo">
          <span class="sidebar__logo-icon">◈</span>
          <div class="sidebar__logo-text">
            <span class="sidebar__logo-title">SUPER RSS</span>
            <span class="sidebar__logo-sub">Feed Intelligence</span>
          </div>
        </div>
        <button class="sidebar__collapse-btn" id="sidebar-toggle" aria-label="Toggle sidebar">
          <span>⟨⟩</span>
        </button>
      </div>

      <nav class="sidebar__nav">
        ${J.map(a=>`
          <button
            class="sidebar__nav-item ${e.currentView===a.id?"sidebar__nav-item--active":""}"
            data-view="${a.id}"
            title="${a.description}"
          >
            <span class="sidebar__nav-icon">${a.icon}</span>
            <span class="sidebar__nav-label">${a.label}</span>
          </button>
        `).join("")}
      </nav>

      <div class="sidebar__footer">
        <div class="sidebar__status">
          <span class="sidebar__status-dot ${c.isLoading()?"sidebar__status-dot--loading":""}"></span>
          <span class="sidebar__status-text">${c.isLoading()?"Syncing feeds…":"Live"}</span>
        </div>
        <div class="sidebar__version">v2.0.0 · TypeScript</div>
      </div>
    `,this.bindEvents(),this.el}bindEvents(){const e=this.el.querySelector("#sidebar-toggle");e==null||e.addEventListener("click",()=>{c.toggleSidebar(),u.sidebarToggle(this.el,c.getState().sidebarCollapsed)}),this.el.querySelectorAll("[data-view]").forEach(t=>{const s=t.dataset.view,i=()=>c.setView(s);t.addEventListener("click",i),this.navClickHandlers.set(s,i)})}update(){const e=c.getState();this.el.querySelectorAll("[data-view]").forEach(s=>{const i=s.dataset.view;s.classList.toggle("sidebar__nav-item--active",i===e.currentView)});const a=this.el.querySelector(".sidebar__status-dot"),t=this.el.querySelector(".sidebar__status-text");a&&a.classList.toggle("sidebar__status-dot--loading",c.isLoading()),t&&(t.textContent=c.isLoading()?"Syncing feeds…":"Live"),this.el.classList.toggle("sidebar--collapsed",e.sidebarCollapsed)}}class oe{constructor(){h(this,"el");this.el=document.createElement("header"),this.el.className="header",this.el.id="header"}render(){const e=c.getState(),a=c.getLoadProgress(),t=a.total>0?Math.round(a.completed/a.total*100):0;return this.el.innerHTML=`
      <div class="header__left">
        <h1 class="header__title" id="header-title">Command Center</h1>
        <span class="header__subtitle" id="header-subtitle">Real-time intelligence from 12+ sources</span>
      </div>

      <div class="header__center">
        <div class="header__search">
          <span class="header__search-icon">⌕</span>
          <input
            type="search"
            class="header__search-input"
            id="search-input"
            placeholder="Search articles across all feeds…"
            value="${e.searchQuery}"
            autocomplete="off"
          />
        </div>
      </div>

      <div class="header__right">
        <button class="header__btn" id="refresh-btn" title="Refresh all feeds">
          <span class="header__btn-icon ${c.isLoading()?"header__btn-icon--spin":""}">↻</span>
          <span>Sync</span>
        </button>
        <div class="header__clock" id="header-clock"></div>
      </div>

      <div class="header__progress ${c.isLoading()?"header__progress--visible":""}" id="header-progress">
        <div class="header__progress-bar" id="header-progress-bar" style="width: ${t}%"></div>
      </div>
      <div class="header__scanline"></div>
    `,this.bindEvents(),this.startClock(),this.el}bindEvents(){const e=this.el.querySelector("#search-input");let a;e==null||e.addEventListener("input",()=>{clearTimeout(a),a=setTimeout(()=>{c.setSearchQuery(e.value)},250)});const t=this.el.querySelector("#refresh-btn");t==null||t.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("rss:refresh"))})}startClock(){const e=this.el.querySelector("#header-clock");if(!e)return;const a=()=>{const t=new Date;e.textContent=t.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})};a(),setInterval(a,1e3)}update(){const e=c.getState(),a=c.getLoadProgress(),t=a.total>0?Math.round(a.completed/a.total*100):0,s={dashboard:{title:"Command Center",subtitle:"Real-time intelligence from 12+ sources"},reader:{title:"Feed Reader",subtitle:`${c.getFilteredItems().length} articles in stream`},"extremism-monitor":{title:"Threat Watch",subtitle:"Cybersecurity extremism monitor — Breitbart & flagged sources"},"multi-view":{title:"Multi-View Mosaic",subtitle:"Live website panels — side-by-side browsing"},sources:{title:"Source Matrix",subtitle:"Configure and manage RSS feed sources"},analytics:{title:"Analytics",subtitle:"Feed performance and category breakdown"}},i=s[e.currentView]??s.dashboard,n=this.el.querySelector("#header-title"),l=this.el.querySelector("#header-subtitle");n&&(n.textContent=(i==null?void 0:i.title)??""),l&&(l.textContent=(i==null?void 0:i.subtitle)??"");const o=this.el.querySelector("#header-progress"),d=this.el.querySelector("#header-progress-bar");o==null||o.classList.toggle("header__progress--visible",c.isLoading()),d&&u.loadingBar(d,t);const m=this.el.querySelector(".header__btn-icon");m==null||m.classList.toggle("header__btn-icon--spin",c.isLoading())}}const ce=[{category:"cyber-attack",label:"Cyber Attack",weight:25,keywords:["ransomware","malware","hacking","cyber attack","data breach","ddos","phishing","zero-day","exploit","botnet","dark web","cyber warfare","state-sponsored","apt","vulnerability","supply chain attack","backdoor","trojan","spyware"]},{category:"radicalization",label:"Radicalization",weight:30,keywords:["radical","extremist","radicalization","white supremac","neo-nazi","far-right","militant","insurgent","jihad","domestic terror","lone wolf","accelerationist","great replacement","civil war","armed resistance","overthrow","revolution"]},{category:"disinformation",label:"Disinformation",weight:20,keywords:["deep state","false flag","hoax","conspiracy","cover-up","mainstream media lies","fake news","propaganda","psyop","disinformation","misinformation","rigged","stolen election","crisis actor","plandemic","globalist agenda"]},{category:"militia",label:"Militia Activity",weight:28,keywords:["militia","paramilitary","oath keeper","proud boy","three percenter","boogaloo","second amendment","stand your ground","patriot","armed citizen","self-defense force","border militia","vigilante"]},{category:"election-interference",label:"Election Interference",weight:22,keywords:["voter fraud","ballot harvesting","election fraud","stolen vote","rigged election","voting machine","election integrity","stop the steal","mail-in fraud","illegal immigrant vote"]},{category:"hate-speech",label:"Hate Speech Indicators",weight:26,keywords:["invasion","replacement","deport","illegal alien","anchor baby","welfare queen","thug","soros","antifa","cultural marxism","woke mob","groomer","pedophile ring"]},{category:"infrastructure",label:"Infrastructure Threat",weight:24,keywords:["power grid","critical infrastructure","water supply","pipeline","nuclear","scada","industrial control","energy grid","telecommunications","satellite","undersea cable"]}],F={critical:70,high:45,medium:20,low:5},H={"cyber-attack":{label:"Cyber Attack",icon:"🛡️",color:"#ef4444"},radicalization:{label:"Radicalization",icon:"⚠️",color:"#f97316"},disinformation:{label:"Disinformation",icon:"🎭",color:"#a855f7"},militia:{label:"Militia Activity",icon:"⚔️",color:"#dc2626"},"election-interference":{label:"Election Interference",icon:"🗳️",color:"#eab308"},"hate-speech":{label:"Hate Speech",icon:"🚫",color:"#ec4899"},infrastructure:{label:"Infrastructure",icon:"🏗️",color:"#06b6d4"}},N={critical:{label:"CRITICAL",color:"#ff1744",bg:"rgba(255, 23, 68, 0.15)"},high:{label:"HIGH",color:"#ff9100",bg:"rgba(255, 145, 0, 0.12)"},medium:{label:"MEDIUM",color:"#ffea00",bg:"rgba(255, 234, 0, 0.1)"},low:{label:"LOW",color:"#69f0ae",bg:"rgba(105, 240, 174, 0.08)"},clear:{label:"CLEAR",color:"#00e676",bg:"rgba(0, 230, 118, 0.06)"}};function de(r){const e=r.toLowerCase(),a=[];for(const t of ce)for(const s of t.keywords)if(e.includes(s.toLowerCase())){const i=e.indexOf(s.toLowerCase()),n=Math.max(0,i-40),l=Math.min(r.length,i+s.length+40),o=r.slice(n,l).trim();a.push({category:t.category,keyword:s,weight:t.weight,context:o.length>80?o.slice(0,80)+"…":o})}return a}function he(r){const e=new Map;for(const t of r){const s=e.get(t.category)??0;e.set(t.category,s+t.weight*.6)}let a=0;for(const t of e.values())a+=Math.min(t,50);return Math.min(Math.round(a),100)}function G(r){return r>=F.critical?"critical":r>=F.high?"high":r>=F.medium?"medium":r>=F.low?"low":"clear"}function ue(r){const e=`${r.title} ${r.description}`,a=de(e);if(a.length===0)return null;const t=he(a),s=G(t);return s==="clear"?null:{id:`alert-${r.id}`,itemId:r.id,sourceId:r.sourceId,title:r.title,link:r.link,level:s,score:t,signals:a,scannedAt:new Date,pubDate:r.pubDate}}function me(r,e,a){const t=e.filter(o=>o.sourceId===r),s=t.map(o=>o.score),i=s.length>0?Math.round(s.reduce((o,d)=>o+d,0)/s.length):0,n=new Map;for(const o of t)for(const d of o.signals)n.set(d.category,(n.get(d.category)??0)+1);const l=[...n.entries()].sort((o,d)=>d[1]-o[1]).slice(0,4).map(([o,d])=>({category:o,count:d}));return{sourceId:r,level:G(i),score:i,alertCount:t.length,articlesScanned:a,topCategories:l,lastScanned:t.length>0?new Date:null}}function Q(r,e){const a=new Set(e.map(o=>o.id)),t=r.filter(o=>a.has(o.sourceId)),s=[];for(const o of t){const d=ue(o);d&&s.push(d)}const i={critical:0,high:1,medium:2,low:3,clear:4};s.sort((o,d)=>{const m=i[o.level]-i[d.level];return m!==0?m:d.pubDate.getTime()-o.pubDate.getTime()});const n=new Map;for(const o of t)n.set(o.sourceId,(n.get(o.sourceId)??0)+1);const l=e.map(o=>me(o.id,s,n.get(o.id)??0));return{alerts:s,sourceProfiles:l,totalScanned:t.length,criticalCount:s.filter(o=>o.level==="critical").length,highCount:s.filter(o=>o.level==="high").length,scannedAt:new Date}}class ve{constructor(){h(this,"el");this.el=document.createElement("div"),this.el.className="view dashboard-view",this.el.id="view-dashboard"}render(){const e=c.getDashboardStats(),a=c.getFilteredItems().slice(0,8),t=c.isLoading(),s=Q(c.getAllItems(),f);return this.el.innerHTML=`
      <div class="dashboard-view__hero anim-item">
        <div class="dashboard-view__hero-content">
          <div class="dashboard-view__hero-badge">◈ NEURAL FEED ENGINE v2.0</div>
          <h2 class="dashboard-view__hero-title" id="hero-typewriter">Super RSS Feed</h2>
          <p class="dashboard-view__hero-desc">
            Aggregate, analyze, and visualize news from ${e.totalSources} premium sources
            in real-time. Multi-website view is one feature among many — this is your
            command center for global information flow.
          </p>
        </div>
        <div class="dashboard-view__hero-visual">
          <div class="dashboard-view__orbital">
            <div class="dashboard-view__orbital-ring dashboard-view__orbital-ring--1"></div>
            <div class="dashboard-view__orbital-ring dashboard-view__orbital-ring--2"></div>
            <div class="dashboard-view__orbital-ring dashboard-view__orbital-ring--3"></div>
            <div class="dashboard-view__orbital-core">RSS</div>
          </div>
        </div>
      </div>

      <div class="dashboard-view__stats">
        <div class="stat-card anim-item" data-stat="sources">
          <div class="stat-card__icon">⬡</div>
          <div class="stat-card__value" id="stat-sources">${e.totalSources}</div>
          <div class="stat-card__label">Active Sources</div>
        </div>
        <div class="stat-card anim-item" data-stat="articles">
          <div class="stat-card__icon">◎</div>
          <div class="stat-card__value" id="stat-articles">${t?"…":e.totalArticles}</div>
          <div class="stat-card__label">Articles Loaded</div>
        </div>
        <div class="stat-card anim-item" data-stat="categories">
          <div class="stat-card__icon">◉</div>
          <div class="stat-card__value" id="stat-categories">${e.categoriesActive}</div>
          <div class="stat-card__label">Categories</div>
        </div>
        <div class="stat-card anim-item" data-stat="updated">
          <div class="stat-card__icon">↻</div>
          <div class="stat-card__value stat-card__value--small" id="stat-updated">
            ${e.lastUpdated?_(e.lastUpdated):"—"}
          </div>
          <div class="stat-card__label">Last Sync</div>
        </div>
      </div>

      ${s.criticalCount+s.highCount>0?`<div class="dashboard-threat-banner anim-item" data-goto="extremism-monitor">
              <span class="dashboard-threat-banner__icon">⬢</span>
              <div class="dashboard-threat-banner__text">
                <strong>${s.criticalCount+s.highCount} active threats</strong> detected
                across ${f.length} extremism-watched sources (Breitbart, Fox News)
              </div>
              <button class="dashboard-threat-banner__btn">Open Threat Watch →</button>
            </div>`:""}

      <div class="dashboard-view__grid">
        <section class="dashboard-panel anim-item">
          <div class="dashboard-panel__header">
            <h3 class="dashboard-panel__title">Live Feed Stream</h3>
            <button class="dashboard-panel__action" data-goto="reader">View All →</button>
          </div>
          <div class="dashboard-panel__body">
            ${a.length>0?a.map(i=>{const n=v.find(l=>l.id===i.sourceId);return`
                      <article class="feed-stream-item">
                        <div class="feed-stream-item__source" style="color: ${(n==null?void 0:n.color)??"#fff"}">
                          ${(n==null?void 0:n.icon)??"•"} ${(n==null?void 0:n.name)??"Unknown"}
                        </div>
                        <a href="${i.link}" target="_blank" rel="noopener" class="feed-stream-item__title">
                          ${i.title}
                        </a>
                        <time class="feed-stream-item__time">${_(i.pubDate)}</time>
                      </article>
                    `}).join(""):`<div class="dashboard-panel__empty">${t?"Loading feeds…":"No articles yet. Click Sync to fetch."}</div>`}
          </div>
        </section>

        <section class="dashboard-panel anim-item">
          <div class="dashboard-panel__header">
            <h3 class="dashboard-panel__title">Category Breakdown</h3>
          </div>
          <div class="dashboard-panel__body">
            <div class="category-breakdown">
              ${Object.entries(R).map(([i,n])=>{const l=c.getAllItems().filter(d=>d.category===i).length,o=e.totalArticles>0?l/e.totalArticles*100:0;return`
                    <div class="category-bar">
                      <div class="category-bar__header">
                        <span>${n.icon} ${n.label}</span>
                        <span>${l}</span>
                      </div>
                      <div class="category-bar__track">
                        <div class="category-bar__fill" style="width: ${o}%; background: ${n.color}"></div>
                      </div>
                    </div>
                  `}).join("")}
            </div>
          </div>
        </section>

        <section class="dashboard-panel anim-item">
          <div class="dashboard-panel__header">
            <h3 class="dashboard-panel__title">Quick Actions</h3>
          </div>
          <div class="dashboard-panel__body dashboard-panel__body--actions">
            <button class="action-card" data-goto="reader">
              <span class="action-card__icon">◎</span>
              <span class="action-card__label">Open Feed Reader</span>
              <span class="action-card__desc">Browse unified article stream</span>
            </button>
            <button class="action-card" data-goto="multi-view">
              <span class="action-card__icon">▦</span>
              <span class="action-card__label">Launch Multi-View</span>
              <span class="action-card__desc">Side-by-side website panels</span>
            </button>
            <button class="action-card" data-goto="sources">
              <span class="action-card__icon">⬡</span>
              <span class="action-card__label">Manage Sources</span>
              <span class="action-card__desc">Configure RSS feed matrix</span>
            </button>
            <button class="action-card" data-goto="extremism-monitor">
              <span class="action-card__icon">⬢</span>
              <span class="action-card__label">Threat Watch</span>
              <span class="action-card__desc">Cybersecurity extremism monitor</span>
            </button>
            <button class="action-card" data-goto="analytics">
              <span class="action-card__icon">◉</span>
              <span class="action-card__label">View Analytics</span>
              <span class="action-card__desc">Performance metrics</span>
            </button>
          </div>
        </section>
      </div>
    `,this.bindEvents(),this.runAnimations(),this.el}bindEvents(){var e;this.el.querySelectorAll("[data-goto]").forEach(a=>{a.addEventListener("click",()=>{const t=a.dataset.goto;t&&c.setView(t)})}),(e=this.el.querySelector(".dashboard-threat-banner"))==null||e.addEventListener("click",()=>{c.setView("extremism-monitor")})}runAnimations(){u.revealChildren(this.el);const e=c.getDashboardStats(),a=this.el.querySelector("#stat-articles");a&&!c.isLoading()&&u.animateCounter(a,e.totalArticles),this.el.querySelectorAll(".dashboard-view__orbital-ring").forEach((s,i)=>{u.orbit(s),s.style.animationDuration=`${15+i*5}s`})}update(){this.render()}}class pe{constructor(){h(this,"el");this.el=document.createElement("div"),this.el.className="view reader-view",this.el.id="view-reader"}render(){const e=c.getState(),a=c.getFilteredItems(),t=c.isLoading();return this.el.innerHTML=`
      <div class="reader-view__toolbar anim-item">
        <div class="reader-view__categories">
          <button class="category-chip ${e.selectedCategory==="all"?"category-chip--active":""}" data-category="all">
            All
          </button>
          ${Object.entries(R).map(([s,i])=>`
            <button
              class="category-chip ${e.selectedCategory===s?"category-chip--active":""}"
              data-category="${s}"
              style="--chip-color: ${i.color}"
            >
              ${i.icon} ${i.label}
            </button>
          `).join("")}
        </div>

        <div class="reader-view__layouts">
          ${["list","grid","magazine"].map(s=>`
            <button
              class="layout-btn ${e.readerLayout===s?"layout-btn--active":""}"
              data-layout="${s}"
              title="${s} view"
            >
              ${s==="list"?"☰":s==="grid"?"▦":"▤"}
            </button>
          `).join("")}
        </div>
      </div>

      <div class="reader-view__content reader-view__content--${e.readerLayout}">
        ${t&&a.length===0?`<div class="reader-view__loading">
                <div class="reader-view__loading-spinner"></div>
                <p>Fetching articles from ${c.getLoadProgress().total} sources…</p>
              </div>`:a.length===0?`<div class="reader-view__empty">
                  <span class="reader-view__empty-icon">◎</span>
                  <p>No articles match your filters.</p>
                  <button class="reader-view__empty-btn" id="clear-filters">Clear Filters</button>
                </div>`:a.map(s=>this.renderArticle(s,e.readerLayout)).join("")}
      </div>
    `,this.bindEvents(),requestAnimationFrame(()=>u.revealChildren(this.el,".article-card")),this.el}renderArticle(e,a){const t=v.find(i=>i.id===e.sourceId),s=e.category?R[e.category]:null;return a==="list"?`
        <article class="article-card article-card--list anim-item">
          <div class="article-card__meta">
            <span class="article-card__source" style="color: ${t==null?void 0:t.color}">${t==null?void 0:t.icon} ${t==null?void 0:t.name}</span>
            ${s?`<span class="article-card__category" style="color: ${s.color}">${s.label}</span>`:""}
            <time>${_(e.pubDate)}</time>
          </div>
          <a href="${e.link}" target="_blank" rel="noopener" class="article-card__title">${e.title}</a>
          <p class="article-card__desc">${e.description}</p>
        </article>
      `:a==="grid"?`
        <article class="article-card article-card--grid anim-item">
          ${e.imageUrl?`<div class="article-card__image" style="background-image: url('${e.imageUrl}')"></div>`:`<div class="article-card__image article-card__image--placeholder" style="background: ${t==null?void 0:t.color}20">${(t==null?void 0:t.icon)??"📰"}</div>`}
          <div class="article-card__body">
            <div class="article-card__meta">
              <span style="color: ${t==null?void 0:t.color}">${t==null?void 0:t.name}</span>
              <time>${_(e.pubDate)}</time>
            </div>
            <a href="${e.link}" target="_blank" rel="noopener" class="article-card__title">${e.title}</a>
          </div>
        </article>
      `:`
      <article class="article-card article-card--magazine anim-item">
        <div class="article-card__magazine-inner">
          ${e.imageUrl?`<div class="article-card__image" style="background-image: url('${e.imageUrl}')"></div>`:""}
          <div class="article-card__body">
            <div class="article-card__meta">
              <span class="article-card__source" style="color: ${t==null?void 0:t.color}">${t==null?void 0:t.icon} ${t==null?void 0:t.name}</span>
              ${s?`<span class="article-card__category">${s.icon} ${s.label}</span>`:""}
            </div>
            <a href="${e.link}" target="_blank" rel="noopener" class="article-card__title">${e.title}</a>
            <p class="article-card__desc">${e.description}</p>
            <div class="article-card__footer">
              <time>${_(e.pubDate)}</time>
              ${e.author?`<span class="article-card__author">by ${e.author}</span>`:""}
            </div>
          </div>
        </div>
      </article>
    `}bindEvents(){var e;this.el.querySelectorAll("[data-category]").forEach(a=>{a.addEventListener("click",()=>{const t=a.dataset.category;c.setCategory(t)})}),this.el.querySelectorAll("[data-layout]").forEach(a=>{a.addEventListener("click",()=>{const t=a.dataset.layout;c.setReaderLayout(t)})}),(e=this.el.querySelector("#clear-filters"))==null||e.addEventListener("click",()=>{c.setSearchQuery(""),c.setCategory("all")}),this.el.querySelectorAll(".article-card").forEach(a=>{a.addEventListener("mouseenter",()=>u.cardHover(a,!0)),a.addEventListener("mouseleave",()=>u.cardHover(a,!1))})}update(){this.render()}}class _e{constructor(){h(this,"el");this.el=document.createElement("div"),this.el.className="view multi-view",this.el.id="view-multi-view"}render(){const e=c.getState(),a=v.filter(t=>e.multiViewSourceIds.includes(t.id));return this.el.innerHTML=`
      <div class="multi-view__toolbar anim-item">
        <div class="multi-view__info">
          <span class="multi-view__badge">LEGACY FEATURE · ENHANCED</span>
          <p class="multi-view__desc">
            Browse multiple news websites side-by-side. Sites may block embedding —
            use the <strong>Open</strong> link to visit directly.
          </p>
        </div>

        <div class="multi-view__controls">
          <label class="multi-view__control">
            Columns
            <select id="multi-view-columns">
              ${[1,2,3,4].map(t=>`<option value="${t}" ${e.multiViewColumns===t?"selected":""}>${t}</option>`).join("")}
            </select>
          </label>
        </div>
      </div>

      <div class="multi-view__source-picker anim-item">
        ${v.map(t=>`
          <button
            class="multi-view__source-chip ${e.multiViewSourceIds.includes(t.id)?"multi-view__source-chip--active":""}"
            data-source="${t.id}"
            style="--source-color: ${t.color}"
          >
            ${t.icon} ${t.name}
          </button>
        `).join("")}
      </div>

      <div
        class="multi-view__grid multi-view__grid--cols-${e.multiViewColumns}"
        id="multi-view-grid"
      >
        ${a.length>0?a.map(t=>`
              <div class="multi-view__panel anim-item" data-panel="${t.id}">
                <div class="multi-view__panel-header" style="border-color: ${t.color}">
                  <span class="multi-view__panel-title">
                    ${t.icon} ${t.name}
                  </span>
                  <a
                    href="${t.websiteUrl}"
                    target="_blank"
                    rel="noopener"
                    class="multi-view__panel-open"
                  >
                    Open ↗
                  </a>
                </div>
                <div class="multi-view__panel-body">
                  <iframe
                    src="${t.websiteUrl}"
                    title="${t.name}"
                    class="multi-view__iframe"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  ></iframe>
                  <div class="multi-view__fallback">
                    <span>${t.icon}</span>
                    <p>Embedding blocked by ${t.name}</p>
                    <a href="${t.websiteUrl}" target="_blank" rel="noopener" class="multi-view__fallback-btn">
                      Visit ${t.name} ↗
                    </a>
                  </div>
                </div>
              </div>
            `).join(""):`<div class="multi-view__empty anim-item">
                <span>▦</span>
                <p>Select sources above to populate the mosaic view.</p>
              </div>`}
      </div>
    `,this.bindEvents(),requestAnimationFrame(()=>u.revealChildren(this.el,".multi-view__panel")),this.el}bindEvents(){const e=this.el.querySelector("#multi-view-columns");e==null||e.addEventListener("change",()=>{const a=Number(e.value);c.setMultiViewColumns(a)}),this.el.querySelectorAll("[data-source]").forEach(a=>{a.addEventListener("click",()=>{const t=a.dataset.source;t&&c.toggleMultiViewSource(t)})}),this.el.querySelectorAll(".multi-view__iframe").forEach(a=>{const t=a.closest(".multi-view__panel"),s=t==null?void 0:t.querySelector(".multi-view__fallback");setTimeout(()=>{var i;try{const l=a.contentDocument;(!l||((i=l.body)==null?void 0:i.innerHTML)==="")&&(s==null||s.classList.add("multi-view__fallback--visible"))}catch{}},5e3)})}update(){this.render()}}class ge{constructor(){h(this,"el");this.el=document.createElement("div"),this.el.className="view sources-view",this.el.id="view-sources"}render(){const e=c.getState(),a=c.getFeedCache();return this.el.innerHTML=`
      <div class="sources-view__header anim-item">
        <h2>Source Matrix</h2>
        <p>${e.selectedSourceIds.length} of ${v.length} sources active in feed reader</p>
      </div>

      <div class="sources-view__grid">
        ${v.map(t=>{const s=e.selectedSourceIds.includes(t.id),i=a.get(t.id),n=(i==null?void 0:i.items.length)??0,l=i==null?void 0:i.error,o=R[t.category];return`
            <div
              class="source-card anim-item ${s?"source-card--active":""}"
              data-source="${t.id}"
              style="--source-color: ${t.color}"
            >
              <div class="source-card__header">
                <span class="source-card__icon">${t.icon}</span>
                <div class="source-card__info">
                  <h3 class="source-card__name">
                    ${t.name}
                    ${t.extremismWatch?`<span class="source-card__watch-badge source-card__watch-badge--${t.watchTier}">⬢ WATCH</span>`:""}
                  </h3>
                  <span class="source-card__region">${t.region} · ${t.language.toUpperCase()}</span>
                </div>
                <label class="source-card__toggle">
                  <input type="checkbox" ${s?"checked":""} data-toggle="${t.id}" />
                  <span class="source-card__toggle-slider"></span>
                </label>
              </div>

              <p class="source-card__desc">${t.description}</p>

              <div class="source-card__meta">
                <span class="source-card__category" style="color: ${o.color}">
                  ${o.icon} ${o.label}
                </span>
                <span class="source-card__count">
                  ${l?"⚠ Error":`${n} articles`}
                </span>
              </div>

              <div class="source-card__urls">
                <div class="source-card__url">
                  <span class="source-card__url-label">RSS</span>
                  <code>${t.url}</code>
                </div>
                <div class="source-card__url">
                  <span class="source-card__url-label">Web</span>
                  <a href="${t.websiteUrl}" target="_blank" rel="noopener">${t.websiteUrl}</a>
                </div>
              </div>

              ${l?`<div class="source-card__error">⚠ ${i==null?void 0:i.error}</div>`:""}
              ${t.extremismWatch?`<div class="source-card__watch-notice">⬢ Under cybersecurity extremism watch — ${t.watchReason}</div>`:""}
            </div>
          `}).join("")}
      </div>
    `,this.bindEvents(),requestAnimationFrame(()=>u.revealChildren(this.el,".source-card")),this.el}bindEvents(){this.el.querySelectorAll("[data-toggle]").forEach(e=>{e.addEventListener("change",()=>{const a=e.dataset.toggle;a&&c.toggleSource(a)})}),this.el.querySelectorAll(".source-card").forEach(e=>{e.addEventListener("mouseenter",()=>u.cardHover(e,!0)),e.addEventListener("mouseleave",()=>u.cardHover(e,!1))})}update(){this.render()}}class be{constructor(){h(this,"el");this.el=document.createElement("div"),this.el.className="view analytics-view",this.el.id="view-analytics"}render(){const e=c.getDashboardStats(),a=c.getFeedCache(),t=c.getAllItems(),s=new Array(24).fill(0);for(const n of t){const l=n.pubDate.getHours();s[l]=(s[l]??0)+1}const i=Math.max(...s,1);return this.el.innerHTML=`
      <div class="analytics-view__header anim-item">
        <h2>Feed Analytics</h2>
        <p>Performance metrics and distribution analysis across all sources</p>
      </div>

      <div class="analytics-view__overview">
        <div class="analytics-metric anim-item">
          <div class="analytics-metric__value" id="analytics-total">${e.totalArticles}</div>
          <div class="analytics-metric__label">Total Articles</div>
        </div>
        <div class="analytics-metric anim-item">
          <div class="analytics-metric__value">${e.totalSources}</div>
          <div class="analytics-metric__label">Sources Monitored</div>
        </div>
        <div class="analytics-metric anim-item">
          <div class="analytics-metric__value">${a.size}</div>
          <div class="analytics-metric__label">Feeds Fetched</div>
        </div>
        <div class="analytics-metric anim-item">
          <div class="analytics-metric__value">${[...a.values()].filter(n=>n.error).length}</div>
          <div class="analytics-metric__label">Fetch Errors</div>
        </div>
      </div>

      <div class="analytics-view__grid">
        <section class="analytics-panel anim-item">
          <h3 class="analytics-panel__title">Top Sources by Volume</h3>
          <div class="analytics-panel__body">
            ${e.topSources.map(n=>{const l=v.find(d=>d.id===n.sourceId),o=e.totalArticles>0?n.count/e.totalArticles*100:0;return`
                  <div class="source-rank">
                    <div class="source-rank__header">
                      <span>${(l==null?void 0:l.icon)??"•"} ${(l==null?void 0:l.name)??n.sourceId}</span>
                      <span>${n.count} (${o.toFixed(1)}%)</span>
                    </div>
                    <div class="source-rank__bar">
                      <div class="source-rank__fill" style="width: ${o}%; background: ${(l==null?void 0:l.color)??"#00d4ff"}"></div>
                    </div>
                  </div>
                `}).join("")||'<p class="analytics-panel__empty">No data yet</p>'}
          </div>
        </section>

        <section class="analytics-panel anim-item">
          <h3 class="analytics-panel__title">Publication Timeline (24h)</h3>
          <div class="analytics-panel__body">
            <div class="timeline-chart">
              ${s.map((n,l)=>{const o=n/i*100;return`
                    <div class="timeline-chart__bar" title="${l}:00 — ${n} articles">
                      <div class="timeline-chart__fill" style="height: ${o}%"></div>
                      <span class="timeline-chart__label">${l}</span>
                    </div>
                  `}).join("")}
            </div>
          </div>
        </section>

        <section class="analytics-panel anim-item">
          <h3 class="analytics-panel__title">Category Distribution</h3>
          <div class="analytics-panel__body">
            <div class="category-donut">
              ${Object.entries(R).map(([n,l])=>{const o=t.filter(m=>m.category===n).length,d=e.totalArticles>0?o/e.totalArticles*100:0;return o===0?"":`
                    <div class="category-donut__item">
                      <div class="category-donut__swatch" style="background: ${l.color}"></div>
                      <span class="category-donut__label">${l.icon} ${l.label}</span>
                      <span class="category-donut__value">${o} (${d.toFixed(0)}%)</span>
                    </div>
                  `}).join("")}
            </div>
          </div>
        </section>

        <section class="analytics-panel anim-item">
          <h3 class="analytics-panel__title">Feed Health Status</h3>
          <div class="analytics-panel__body">
            <div class="health-list">
              ${v.map(n=>{const l=a.get(n.id),o=l?l.error?"error":"ok":"pending",d=o==="ok"?"✓":o==="error"?"✗":"○";return`
                  <div class="health-item ${`health-item--${o}`}">
                    <span class="health-item__status">${d}</span>
                    <span class="health-item__name">${n.icon} ${n.name}</span>
                    <span class="health-item__detail">
                      ${l?l.error?l.error:`${l.items.length} articles · ${_(l.fetchedAt)}`:"Not fetched"}
                    </span>
                  </div>
                `}).join("")}
            </div>
          </div>
        </section>
      </div>
    `,requestAnimationFrame(()=>{u.revealChildren(this.el);const n=this.el.querySelector("#analytics-total");n&&u.animateCounter(n,e.totalArticles)}),this.el}update(){this.render()}}class we{constructor(){h(this,"el");h(this,"selectedLevel","all");this.el=document.createElement("div"),this.el.className="view extremism-monitor",this.el.id="view-extremism-monitor"}render(){const e=Q(c.getAllItems(),f),a=c.isLoading(),t=this.selectedLevel==="all"?e.alerts:e.alerts.filter(s=>s.level===this.selectedLevel);return this.el.innerHTML=`
      <div class="extremism-monitor__hero anim-item">
        <div class="extremism-monitor__hero-left">
          <div class="extremism-monitor__badge">
            <span class="extremism-monitor__badge-pulse"></span>
            CYBERSECURITY EXTREMISM MONITOR
          </div>
          <h2 class="extremism-monitor__title">Threat Intelligence Watch</h2>
          <p class="extremism-monitor__desc">
            Real-time scanning of ${f.length} flagged conservative and extreme
            content sources — including Breitbart — for cybersecurity threats, radicalization signals,
            disinformation campaigns, militia activity, and infrastructure risk narratives.
          </p>
        </div>
        <div class="extremism-monitor__hero-right">
          <div class="threat-radar" id="threat-radar">
            <div class="threat-radar__ring threat-radar__ring--1"></div>
            <div class="threat-radar__ring threat-radar__ring--2"></div>
            <div class="threat-radar__ring threat-radar__ring--3"></div>
            <div class="threat-radar__sweep"></div>
            <div class="threat-radar__core">
              <span class="threat-radar__score" id="threat-score-total">${e.criticalCount+e.highCount}</span>
              <span class="threat-radar__label">ACTIVE THREATS</span>
            </div>
          </div>
        </div>
      </div>

      <div class="extremism-monitor__stats">
        <div class="threat-stat anim-item threat-stat--critical">
          <div class="threat-stat__value" id="stat-critical">${e.criticalCount}</div>
          <div class="threat-stat__label">Critical</div>
        </div>
        <div class="threat-stat anim-item threat-stat--high">
          <div class="threat-stat__value" id="stat-high">${e.highCount}</div>
          <div class="threat-stat__label">High</div>
        </div>
        <div class="threat-stat anim-item">
          <div class="threat-stat__value">${e.alerts.length}</div>
          <div class="threat-stat__label">Total Alerts</div>
        </div>
        <div class="threat-stat anim-item">
          <div class="threat-stat__value">${e.totalScanned}</div>
          <div class="threat-stat__label">Articles Scanned</div>
        </div>
        <div class="threat-stat anim-item">
          <div class="threat-stat__value">${f.length}</div>
          <div class="threat-stat__label">Watched Sources</div>
        </div>
        <div class="threat-stat anim-item">
          <div class="threat-stat__value threat-stat__value--small">
            ${a?"Scanning…":_(e.scannedAt)}
          </div>
          <div class="threat-stat__label">Last Scan</div>
        </div>
      </div>

      <div class="extremism-monitor__grid">
        <!-- Watched source profiles -->
        <section class="extremism-panel anim-item">
          <div class="extremism-panel__header">
            <h3>⬢ Watched Source Profiles</h3>
            <span class="extremism-panel__tag">PRIORITY MONITORING</span>
          </div>
          <div class="extremism-panel__body">
            ${f.map(s=>{var l;const i=e.sourceProfiles.find(o=>o.sourceId===s.id),n=N[(i==null?void 0:i.level)??"clear"];return`
                <div class="watch-source" style="--watch-color: ${s.color}">
                  <div class="watch-source__header">
                    <span class="watch-source__icon">${s.icon}</span>
                    <div class="watch-source__info">
                      <span class="watch-source__name">${s.name}</span>
                      <span class="watch-source__tier watch-source__tier--${s.watchTier}">${(l=s.watchTier)==null?void 0:l.toUpperCase()} WATCH</span>
                    </div>
                    <span class="watch-source__level" style="color: ${n.color}; background: ${n.bg}">
                      ${n.label}
                    </span>
                  </div>
                  <p class="watch-source__reason">${s.watchReason??""}</p>
                  <div class="watch-source__metrics">
                    <span>${(i==null?void 0:i.alertCount)??0} alerts</span>
                    <span>${(i==null?void 0:i.articlesScanned)??0} scanned</span>
                    <span>Score: ${(i==null?void 0:i.score)??0}/100</span>
                  </div>
                  ${i&&i.topCategories.length>0?`<div class="watch-source__categories">
                          ${i.topCategories.map(o=>{const d=H[o.category];return`<span class="watch-source__cat" style="color: ${d.color}">${d.icon} ${d.label} (${o.count})</span>`}).join("")}
                        </div>`:""}
                </div>
              `}).join("")}
          </div>
        </section>

        <!-- Threat alerts feed -->
        <section class="extremism-panel extremism-panel--alerts anim-item">
          <div class="extremism-panel__header">
            <h3>🚨 Threat Alert Feed</h3>
            <div class="extremism-panel__filters">
              ${["all","critical","high","medium","low"].map(s=>`
                <button
                  class="threat-filter ${this.selectedLevel===s?"threat-filter--active":""}"
                  data-level="${s}"
                  style="${s!=="all"?`--filter-color: ${N[s].color}`:""}"
                >
                  ${s==="all"?"All":N[s].label}
                </button>
              `).join("")}
            </div>
          </div>
          <div class="extremism-panel__body extremism-panel__body--alerts">
            ${a&&t.length===0?`<div class="extremism-panel__loading">
                    <div class="reader-view__loading-spinner"></div>
                    <p>Scanning extremism watch sources…</p>
                  </div>`:t.length===0?`<div class="extremism-panel__empty">
                      <span>✓</span>
                      <p>No ${this.selectedLevel==="all"?"":this.selectedLevel+" "}threats detected in current scan.</p>
                    </div>`:t.map(s=>{const i=v.find(l=>l.id===s.sourceId),n=N[s.level];return`
                        <div class="threat-alert threat-alert--${s.level} anim-item" data-alert-level="${s.level}">
                          <div class="threat-alert__header">
                            <span class="threat-alert__level" style="color: ${n.color}; background: ${n.bg}">
                              ${n.label}
                            </span>
                            <span class="threat-alert__score">Score: ${s.score}</span>
                            <span class="threat-alert__source" style="color: ${i==null?void 0:i.color}">
                              ${i==null?void 0:i.icon} ${i==null?void 0:i.name}
                            </span>
                            <time class="threat-alert__time">${_(s.pubDate)}</time>
                          </div>
                          <a href="${s.link}" target="_blank" rel="noopener" class="threat-alert__title">
                            ${s.title}
                          </a>
                          <div class="threat-alert__signals">
                            ${s.signals.slice(0,5).map(l=>{const o=H[l.category];return`
                                  <span class="threat-signal" style="--signal-color: ${o.color}" title="${l.context}">
                                    ${o.icon} ${l.keyword}
                                  </span>
                                `}).join("")}
                            ${s.signals.length>5?`<span class="threat-signal threat-signal--more">+${s.signals.length-5} more</span>`:""}
                          </div>
                        </div>
                      `}).join("")}
          </div>
        </section>

        <!-- Threat category breakdown -->
        <section class="extremism-panel anim-item">
          <div class="extremism-panel__header">
            <h3>📊 Threat Category Matrix</h3>
          </div>
          <div class="extremism-panel__body">
            ${Object.entries(H).map(([s,i])=>{const n=e.alerts.reduce((d,m)=>d+m.signals.filter(g=>g.category===s).length,0),l=Math.max(...Object.keys(H).map(d=>e.alerts.reduce((m,g)=>m+g.signals.filter(b=>b.category===d).length,0)),1),o=n/l*100;return`
                  <div class="threat-category-row">
                    <div class="threat-category-row__header">
                      <span>${i.icon} ${i.label}</span>
                      <span>${n} signals</span>
                    </div>
                    <div class="threat-category-row__track">
                      <div class="threat-category-row__fill" style="width: ${o}%; background: ${i.color}"></div>
                    </div>
                  </div>
                `}).join("")}
          </div>
        </section>

        <!-- Monitor configuration -->
        <section class="extremism-panel anim-item">
          <div class="extremism-panel__header">
            <h3>⚙️ Monitor Configuration</h3>
          </div>
          <div class="extremism-panel__body">
            <div class="monitor-config">
              <div class="monitor-config__item">
                <span class="monitor-config__label">Scan Engine</span>
                <span class="monitor-config__value">Neural Pattern Matcher v2.0</span>
              </div>
              <div class="monitor-config__item">
                <span class="monitor-config__label">Pattern Database</span>
                <span class="monitor-config__value">7 categories · 120+ signatures</span>
              </div>
              <div class="monitor-config__item">
                <span class="monitor-config__label">Watch Tier: Critical</span>
                <span class="monitor-config__value">Breitbart</span>
              </div>
              <div class="monitor-config__item">
                <span class="monitor-config__label">Watch Tier: High</span>
                <span class="monitor-config__value">Fox News</span>
              </div>
              <div class="monitor-config__item">
                <span class="monitor-config__label">Detection Threshold</span>
                <span class="monitor-config__value">Score ≥ 5 (Low+)</span>
              </div>
              <div class="monitor-config__item">
                <span class="monitor-config__label">Auto-Scan</span>
                <span class="monitor-config__value monitor-config__value--active">On feed sync</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,this.bindEvents(),this.runAnimations(e.criticalCount+e.highCount),this.el}bindEvents(){this.el.querySelectorAll(".threat-filter").forEach(e=>{e.addEventListener("click",()=>{const a=e.dataset.level;this.selectedLevel=a,this.render(),this.el.parentElement&&(this.el.parentElement.innerHTML="",this.el.parentElement.appendChild(this.el),u.pageEnter(this.el))})})}runAnimations(e){u.revealChildren(this.el);const a=this.el.querySelector("#stat-critical"),t=this.el.querySelector("#stat-high"),s=this.el.querySelector("#threat-score-total");if(a){const l=parseInt(a.textContent??"0",10);u.animateCounter(a,l,.8)}if(t){const l=parseInt(t.textContent??"0",10);u.animateCounter(t,l,.8)}s&&u.animateCounter(s,e,1);const i=this.el.querySelector(".threat-radar__sweep");i&&u.scanline(i),this.el.querySelectorAll(".threat-alert--critical, .threat-alert--high").forEach(l=>{u.pulseGlow(l)});const n=this.el.querySelector(".extremism-monitor__badge-pulse");n&&u.pulseGlow(n)}update(){this.render()}}class fe{constructor(e){h(this,"root");h(this,"sidebar");h(this,"header");h(this,"views");h(this,"contentEl",null);h(this,"currentViewEl",null);h(this,"currentViewMode","dashboard");h(this,"unsubscribe",null);h(this,"refreshHandler",()=>{this.loadFeeds()});const a=document.querySelector(e);if(!a)throw new Error(`Root element "${e}" not found`);this.root=a,this.sidebar=new le,this.header=new oe,this.views=new Map([["dashboard",new ve],["reader",new pe],["multi-view",new _e],["sources",new ge],["analytics",new be],["extremism-monitor",new we]])}async init(){this.root.innerHTML="",this.root.className="app";const e=this.sidebar.render(),a=document.createElement("main");a.className="app__main";const t=this.header.render();this.contentEl=document.createElement("div"),this.contentEl.className="app__content",this.contentEl.id="app-content",a.appendChild(t),a.appendChild(this.contentEl),this.root.appendChild(e),this.root.appendChild(a),this.unsubscribe=c.subscribe(s=>this.onStateChange(s)),window.addEventListener("rss:refresh",this.refreshHandler),await this.switchView(c.getState().currentView),await this.loadFeeds()}async onStateChange(e){if(this.sidebar.update(),this.header.update(),e.currentView!==this.currentViewMode){this.currentViewMode=e.currentView,await this.switchView(e.currentView);return}const a=this.views.get(e.currentView);a&&this.contentEl&&(this.currentViewEl=a.render(),this.contentEl.innerHTML="",this.contentEl.appendChild(this.currentViewEl),u.pageEnter(this.currentViewEl))}async switchView(e){const a=this.views.get(e);!a||!this.contentEl||(this.currentViewEl&&await u.pageExit(this.currentViewEl),this.contentEl.innerHTML="",this.currentViewEl=a.render(),this.contentEl.appendChild(this.currentViewEl),u.pageEnter(this.currentViewEl))}async loadFeeds(){if(!c.isLoading()){c.setLoading(!0),c.setLoadProgress(0,v.length);try{const e=await ee();e&&e.size>0&&(c.setFeedCache(e),c.setLoadProgress(v.length,v.length));const a=await ie(v,(s,i)=>{c.setLoadProgress(s,i)});[...a.values()].reduce((s,i)=>s+i.items.length,0)>0&&c.setFeedCache(a)}finally{c.setLoading(!1)}}}destroy(){var e;(e=this.unsubscribe)==null||e.call(this),window.removeEventListener("rss:refresh",this.refreshHandler)}}const ye=new fe("#app");ye.init().catch(r=>{console.error("Failed to initialize Super RSS Feed:",r);const e=document.querySelector("#app");if(e){const a=r instanceof Error?r.message:"Unknown error";e.innerHTML=`
      <div class="app-error">
        <h1>Initialization Error</h1>
        <p>${a}</p>
        <button onclick="location.reload()">Reload</button>
      </div>
    `}});
