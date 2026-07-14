var Q=Object.defineProperty;var Y=(r,e,a)=>e in r?Q(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a;var h=(r,e,a)=>Y(r,typeof e!="symbol"?e+"":e,a);import{g as v}from"./gsap-CzGW6FVa.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const p=[{id:"cnn",name:"CNN",description:"Breaking news, politics, and world coverage from Cable News Network.",url:"https://rss.cnn.com/rss/edition.rss",websiteUrl:"https://www.cnn.com",category:"news",icon:"📡",color:"#cc0000",region:"US",language:"en",embeddable:!1},{id:"fox-news",name:"Fox News",description:"Latest headlines and analysis from Fox News Digital.",url:"https://moxie.foxnews.com/google-publisher/latest.xml",websiteUrl:"https://www.foxnews.com",category:"politics",icon:"🦊",color:"#003366",region:"US",language:"en",embeddable:!1,extremismWatch:!0,watchTier:"high",watchReason:"Conservative media — monitored for disinformation and radicalization vectors"},{id:"msnbc",name:"MSNBC",description:"Progressive news commentary and breaking political coverage.",url:"https://www.msnbc.com/feeds/latest",websiteUrl:"https://www.msnbc.com",category:"politics",icon:"📺",color:"#ff6900",region:"US",language:"en",embeddable:!1},{id:"breitbart",name:"Breitbart",description:"Conservative news, politics, and opinion from Breitbart News.",url:"https://feeds.feedburner.com/breitbart",websiteUrl:"https://www.breitbart.com",category:"politics",icon:"⚡",color:"#d4af37",region:"US",language:"en",embeddable:!1,extremismWatch:!0,watchTier:"critical",watchReason:"Far-right outlet — priority watch for extremism, cyber-threat narratives, and disinformation"},{id:"bbc-world",name:"BBC World",description:"International news from the British Broadcasting Corporation.",url:"https://feeds.bbci.co.uk/news/world/rss.xml",websiteUrl:"https://www.bbc.com/news/world",category:"world",icon:"🌍",color:"#bb1919",region:"UK",language:"en",embeddable:!1},{id:"reuters",name:"Reuters",description:"Global business, financial, and breaking news wire service.",url:"https://www.reutersagency.com/feed/?taxonomy=best-topics&post_type=best",websiteUrl:"https://www.reuters.com",category:"business",icon:"📊",color:"#ff8000",region:"Global",language:"en",embeddable:!1},{id:"techcrunch",name:"TechCrunch",description:"Startup news, tech product launches, and Silicon Valley coverage.",url:"https://techcrunch.com/feed/",websiteUrl:"https://techcrunch.com",category:"tech",icon:"🚀",color:"#0a9e01",region:"US",language:"en",embeddable:!1},{id:"the-verge",name:"The Verge",description:"Technology, science, art, and culture from Vox Media.",url:"https://www.theverge.com/rss/index.xml",websiteUrl:"https://www.theverge.com",category:"tech",icon:"🔮",color:"#fa4b2a",region:"US",language:"en",embeddable:!1},{id:"espn",name:"ESPN",description:"Sports headlines, scores, and analysis from ESPN.",url:"https://www.espn.com/espn/rss/news",websiteUrl:"https://www.espn.com",category:"sports",icon:"🏆",color:"#d00",region:"US",language:"en",embeddable:!1},{id:"latino-rebels",name:"Latino Rebels",description:"Latinx news, culture, and social justice reporting.",url:"https://www.latinorebels.com/feed/",websiteUrl:"https://www.latinorebels.com",category:"culture",icon:"✊",color:"#e63946",region:"US",language:"en",embeddable:!1},{id:"npr",name:"NPR News",description:"National Public Radio top stories and in-depth reporting.",url:"https://feeds.npr.org/1001/rss.xml",websiteUrl:"https://www.npr.org",category:"news",icon:"🎙️",color:"#2d5a27",region:"US",language:"en",embeddable:!1},{id:"ars-technica",name:"Ars Technica",description:"Deep-dive technology journalism and science coverage.",url:"https://feeds.arstechnica.com/arstechnica/index",websiteUrl:"https://arstechnica.com",category:"tech",icon:"⚙️",color:"#ff4e00",region:"US",language:"en",embeddable:!1}],R={news:{label:"News",icon:"📰",color:"#3b82f6"},politics:{label:"Politics",icon:"🏛️",color:"#8b5cf6"},tech:{label:"Technology",icon:"💻",color:"#06b6d4"},business:{label:"Business",icon:"💹",color:"#10b981"},entertainment:{label:"Entertainment",icon:"🎬",color:"#f59e0b"},sports:{label:"Sports",icon:"⚽",color:"#ef4444"},world:{label:"World",icon:"🌐",color:"#6366f1"},culture:{label:"Culture",icon:"🎨",color:"#ec4899"}},f=p.filter(r=>r.extremismWatch),X=[{id:"dashboard",label:"Command Center",icon:"◈",description:"Real-time feed intelligence overview"},{id:"reader",label:"Feed Reader",icon:"◎",description:"Unified article stream from all sources"},{id:"extremism-monitor",label:"Threat Watch",icon:"⬢",description:"Cybersecurity extremism monitor for flagged sources"},{id:"multi-view",label:"Multi-View",icon:"▦",description:"Live website mosaic — original feature"},{id:"sources",label:"Source Matrix",icon:"⬡",description:"Manage and configure feed sources"},{id:"analytics",label:"Analytics",icon:"◉",description:"Feed performance and category breakdown"}],K="https://api.allorigins.win/raw?url=";function J(r,e){const t=new DOMParser().parseFromString(r,"text/xml");if(t.querySelector("parsererror"))throw new Error(`XML parse error for ${e.name}`);const i=[],l=t.querySelectorAll("item");return l.length>0?(l.forEach((n,d)=>{var $,S,E,C,x,L,A,k,T,I,M,q,O,P;const m=((S=($=n.querySelector("title"))==null?void 0:$.textContent)==null?void 0:S.trim())??"Untitled",_=((C=(E=n.querySelector("link"))==null?void 0:E.textContent)==null?void 0:C.trim())??e.websiteUrl,b=((L=(x=n.querySelector("description"))==null?void 0:x.textContent)==null?void 0:L.trim())??((k=(A=n.querySelector("content\\:encoded"))==null?void 0:A.textContent)==null?void 0:k.trim())??"",y=(I=(T=n.querySelector("pubDate"))==null?void 0:T.textContent)==null?void 0:I.trim(),N=((q=(M=n.querySelector("author"))==null?void 0:M.textContent)==null?void 0:q.trim())??((P=(O=n.querySelector("dc\\:creator"))==null?void 0:O.textContent)==null?void 0:P.trim()),w=n.querySelector('media\\:content, enclosure[type^="image"]'),U=(w==null?void 0:w.getAttribute("url"))??W(b);i.push({id:`${e.id}-${d}-${z(_)}`,sourceId:e.id,title:V(m),link:_,description:V(j(b,300)),pubDate:y?new Date(y):new Date,author:N,imageUrl:U,category:e.category})}),i):(t.querySelectorAll("entry").forEach((n,d)=>{var w,U,$,S,E,C,x,L,A,k,T,I,M,q;const m=((U=(w=n.querySelector("title"))==null?void 0:w.textContent)==null?void 0:U.trim())??"Untitled",_=(($=n.querySelector('link[rel="alternate"]'))==null?void 0:$.getAttribute("href"))??((S=n.querySelector("link"))==null?void 0:S.getAttribute("href"))??e.websiteUrl,b=((C=(E=n.querySelector("summary"))==null?void 0:E.textContent)==null?void 0:C.trim())??((L=(x=n.querySelector("content"))==null?void 0:x.textContent)==null?void 0:L.trim())??"",y=((k=(A=n.querySelector("published"))==null?void 0:A.textContent)==null?void 0:k.trim())??((I=(T=n.querySelector("updated"))==null?void 0:T.textContent)==null?void 0:I.trim()),N=(q=(M=n.querySelector("author name"))==null?void 0:M.textContent)==null?void 0:q.trim();i.push({id:`${e.id}-${d}-${z(_)}`,sourceId:e.id,title:V(m),link:_,description:V(j(b,300)),pubDate:y?new Date(y):new Date,author:N,imageUrl:W(b),category:e.category})}),i)}function V(r){var a;const e=document.createElement("div");return e.innerHTML=r,((a=e.textContent)==null?void 0:a.trim())??r}function j(r,e){const a=V(r);return a.length<=e?a:a.slice(0,e).trim()+"…"}function W(r){const e=r.match(/<img[^>]+src=["']([^"']+)["']/i);return e==null?void 0:e[1]}function z(r){let e=0;for(let a=0;a<r.length;a++)e=(e<<5)-e+r.charCodeAt(a),e|=0;return Math.abs(e).toString(36)}async function Z(r){const e=new AbortController,a=setTimeout(()=>e.abort(),15e3);try{const t=await fetch(`${K}${encodeURIComponent(r.url)}`,{signal:e.signal});if(!t.ok)throw new Error(`HTTP ${t.status}`);const s=await t.text(),i=J(s,r).slice(0,25);return{sourceId:r.id,items:i,fetchedAt:new Date}}catch(t){const s=t instanceof Error?t.message:"Unknown error";return{sourceId:r.id,items:[],fetchedAt:new Date,error:s}}finally{clearTimeout(a)}}async function ee(r,e){const a=new Map,t=4;let s=0;for(let i=0;i<r.length;i+=t){const l=r.slice(i,i+t),o=await Promise.all(l.map(n=>Z(n)));for(const n of o)a.set(n.sourceId,n),s++,e==null||e(s,r.length)}return a}function te(r){const e=[];for(const a of r.values())e.push(...a.items);return e.sort((a,t)=>t.pubDate.getTime()-a.pubDate.getTime())}function g(r){const a=Date.now()-r.getTime(),t=Math.floor(a/6e4),s=Math.floor(a/36e5),i=Math.floor(a/864e5);return t<1?"Just now":t<60?`${t}m ago`:s<24?`${s}h ago`:i<7?`${i}d ago`:r.toLocaleDateString("en-US",{month:"short",day:"numeric"})}class ae{constructor(){h(this,"state",{currentView:"dashboard",readerLayout:"magazine",selectedCategory:"all",searchQuery:"",selectedSourceIds:p.map(e=>e.id),sidebarCollapsed:!1,multiViewColumns:2,multiViewSourceIds:["breitbart","fox-news","msnbc","latino-rebels","cnn","bbc-world"]});h(this,"feedCache",new Map);h(this,"listeners",new Set);h(this,"loading",!1);h(this,"loadProgress",{completed:0,total:0})}getState(){return{...this.state}}isLoading(){return this.loading}getLoadProgress(){return{...this.loadProgress}}getFeedCache(){return this.feedCache}getAllItems(){return te(this.feedCache)}getFilteredItems(){let e=this.getAllItems();if(e=e.filter(a=>this.state.selectedSourceIds.includes(a.sourceId)),this.state.selectedCategory!=="all"&&(e=e.filter(a=>a.category===this.state.selectedCategory)),this.state.searchQuery.trim()){const a=this.state.searchQuery.toLowerCase();e=e.filter(t=>t.title.toLowerCase().includes(a)||t.description.toLowerCase().includes(a))}return e}getDashboardStats(){const e=this.getAllItems(),a=new Set(e.map(l=>l.category).filter(Boolean)),t=new Map;for(const l of e)t.set(l.sourceId,(t.get(l.sourceId)??0)+1);const s=[...t.entries()].sort((l,o)=>o[1]-l[1]).slice(0,5).map(([l,o])=>({sourceId:l,count:o}));let i=null;for(const l of this.feedCache.values())(!i||l.fetchedAt>i)&&(i=l.fetchedAt);return{totalSources:p.length,totalArticles:e.length,categoriesActive:a.size,lastUpdated:i,topSources:s}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){const e=this.getState();for(const a of this.listeners)a(e)}setView(e){this.state.currentView=e,this.notify()}setReaderLayout(e){this.state.readerLayout=e,this.notify()}setCategory(e){this.state.selectedCategory=e,this.notify()}setSearchQuery(e){this.state.searchQuery=e,this.notify()}toggleSource(e){const a=this.state.selectedSourceIds.indexOf(e);a>=0?this.state.selectedSourceIds.splice(a,1):this.state.selectedSourceIds.push(e),this.notify()}toggleSidebar(){this.state.sidebarCollapsed=!this.state.sidebarCollapsed,this.notify()}setMultiViewColumns(e){this.state.multiViewColumns=e,this.notify()}toggleMultiViewSource(e){const a=this.state.multiViewSourceIds.indexOf(e);a>=0?this.state.multiViewSourceIds.splice(a,1):this.state.multiViewSourceIds.push(e),this.notify()}setFeedCache(e){this.feedCache=e,this.notify()}setLoading(e){this.loading=e,this.notify()}setLoadProgress(e,a){this.loadProgress={completed:e,total:a},this.notify()}}const c=new ae,u={revealChildren(r,e=".anim-item",a=0){const t=r.querySelectorAll(e);return v.set(t,{opacity:0,y:24}),v.to(t,{opacity:1,y:0,duration:.6,stagger:.06,ease:"power3.out",delay:a})},pageEnter(r){return v.set(r,{opacity:0,y:30}),v.to(r,{opacity:1,y:0,duration:.7,ease:"power4.out"})},pageExit(r){return new Promise(e=>{v.to(r,{opacity:0,y:-20,duration:.35,ease:"power2.in",onComplete:e})})},pulseGlow(r){return v.to(r,{boxShadow:"0 0 30px rgba(0, 212, 255, 0.4)",duration:1.5,repeat:-1,yoyo:!0,ease:"sine.inOut"})},sidebarToggle(r,e){return v.to(r,{width:e?72:280,duration:.4,ease:"power3.inOut"})},animateCounter(r,e,a=1.2){const t={val:0};return v.to(t,{val:e,duration:a,ease:"power2.out",onUpdate:()=>{r.textContent=Math.round(t.val).toLocaleString()}})},loadingBar(r,e){return v.to(r,{width:`${e}%`,duration:.4,ease:"power2.out"})},cardHover(r,e){v.to(r,{scale:e?1.02:1,y:e?-4:0,duration:.3,ease:"power2.out"})},scanline(r){return v.fromTo(r,{x:"-100%"},{x:"200%",duration:3,repeat:-1,ease:"none"})},typewriter(r,e,a=.04){r.textContent="";const t=v.timeline();return e.split("").forEach((i,l)=>{t.call(()=>{r.textContent+=i},void 0,l*a)}),t},orbit(r){return v.to(r,{rotation:360,duration:20,repeat:-1,ease:"none"})},kill(r){v.killTweensOf(r)}};class se{constructor(){h(this,"el");h(this,"navClickHandlers",new Map);this.el=document.createElement("aside"),this.el.className="sidebar",this.el.id="sidebar"}render(){const e=c.getState();return this.el.innerHTML=`
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
        ${X.map(a=>`
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
    `,this.bindEvents(),this.el}bindEvents(){const e=this.el.querySelector("#sidebar-toggle");e==null||e.addEventListener("click",()=>{c.toggleSidebar(),u.sidebarToggle(this.el,c.getState().sidebarCollapsed)}),this.el.querySelectorAll("[data-view]").forEach(t=>{const s=t.dataset.view,i=()=>c.setView(s);t.addEventListener("click",i),this.navClickHandlers.set(s,i)})}update(){const e=c.getState();this.el.querySelectorAll("[data-view]").forEach(s=>{const i=s.dataset.view;s.classList.toggle("sidebar__nav-item--active",i===e.currentView)});const a=this.el.querySelector(".sidebar__status-dot"),t=this.el.querySelector(".sidebar__status-text");a&&a.classList.toggle("sidebar__status-dot--loading",c.isLoading()),t&&(t.textContent=c.isLoading()?"Syncing feeds…":"Live"),this.el.classList.toggle("sidebar--collapsed",e.sidebarCollapsed)}}class ie{constructor(){h(this,"el");this.el=document.createElement("header"),this.el.className="header",this.el.id="header"}render(){const e=c.getState(),a=c.getLoadProgress(),t=a.total>0?Math.round(a.completed/a.total*100):0;return this.el.innerHTML=`
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
    `,this.bindEvents(),this.startClock(),this.el}bindEvents(){const e=this.el.querySelector("#search-input");let a;e==null||e.addEventListener("input",()=>{clearTimeout(a),a=setTimeout(()=>{c.setSearchQuery(e.value)},250)});const t=this.el.querySelector("#refresh-btn");t==null||t.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("rss:refresh"))})}startClock(){const e=this.el.querySelector("#header-clock");if(!e)return;const a=()=>{const t=new Date;e.textContent=t.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})};a(),setInterval(a,1e3)}update(){const e=c.getState(),a=c.getLoadProgress(),t=a.total>0?Math.round(a.completed/a.total*100):0,s={dashboard:{title:"Command Center",subtitle:"Real-time intelligence from 12+ sources"},reader:{title:"Feed Reader",subtitle:`${c.getFilteredItems().length} articles in stream`},"extremism-monitor":{title:"Threat Watch",subtitle:"Cybersecurity extremism monitor — Breitbart & flagged sources"},"multi-view":{title:"Multi-View Mosaic",subtitle:"Live website panels — side-by-side browsing"},sources:{title:"Source Matrix",subtitle:"Configure and manage RSS feed sources"},analytics:{title:"Analytics",subtitle:"Feed performance and category breakdown"}},i=s[e.currentView]??s.dashboard,l=this.el.querySelector("#header-title"),o=this.el.querySelector("#header-subtitle");l&&(l.textContent=(i==null?void 0:i.title)??""),o&&(o.textContent=(i==null?void 0:i.subtitle)??"");const n=this.el.querySelector("#header-progress"),d=this.el.querySelector("#header-progress-bar");n==null||n.classList.toggle("header__progress--visible",c.isLoading()),d&&u.loadingBar(d,t);const m=this.el.querySelector(".header__btn-icon");m==null||m.classList.toggle("header__btn-icon--spin",c.isLoading())}}const re=[{category:"cyber-attack",label:"Cyber Attack",weight:25,keywords:["ransomware","malware","hacking","cyber attack","data breach","ddos","phishing","zero-day","exploit","botnet","dark web","cyber warfare","state-sponsored","apt","vulnerability","supply chain attack","backdoor","trojan","spyware"]},{category:"radicalization",label:"Radicalization",weight:30,keywords:["radical","extremist","radicalization","white supremac","neo-nazi","far-right","militant","insurgent","jihad","domestic terror","lone wolf","accelerationist","great replacement","civil war","armed resistance","overthrow","revolution"]},{category:"disinformation",label:"Disinformation",weight:20,keywords:["deep state","false flag","hoax","conspiracy","cover-up","mainstream media lies","fake news","propaganda","psyop","disinformation","misinformation","rigged","stolen election","crisis actor","plandemic","globalist agenda"]},{category:"militia",label:"Militia Activity",weight:28,keywords:["militia","paramilitary","oath keeper","proud boy","three percenter","boogaloo","second amendment","stand your ground","patriot","armed citizen","self-defense force","border militia","vigilante"]},{category:"election-interference",label:"Election Interference",weight:22,keywords:["voter fraud","ballot harvesting","election fraud","stolen vote","rigged election","voting machine","election integrity","stop the steal","mail-in fraud","illegal immigrant vote"]},{category:"hate-speech",label:"Hate Speech Indicators",weight:26,keywords:["invasion","replacement","deport","illegal alien","anchor baby","welfare queen","thug","soros","antifa","cultural marxism","woke mob","groomer","pedophile ring"]},{category:"infrastructure",label:"Infrastructure Threat",weight:24,keywords:["power grid","critical infrastructure","water supply","pipeline","nuclear","scada","industrial control","energy grid","telecommunications","satellite","undersea cable"]}],F={critical:70,high:45,medium:20,low:5},D={"cyber-attack":{label:"Cyber Attack",icon:"🛡️",color:"#ef4444"},radicalization:{label:"Radicalization",icon:"⚠️",color:"#f97316"},disinformation:{label:"Disinformation",icon:"🎭",color:"#a855f7"},militia:{label:"Militia Activity",icon:"⚔️",color:"#dc2626"},"election-interference":{label:"Election Interference",icon:"🗳️",color:"#eab308"},"hate-speech":{label:"Hate Speech",icon:"🚫",color:"#ec4899"},infrastructure:{label:"Infrastructure",icon:"🏗️",color:"#06b6d4"}},H={critical:{label:"CRITICAL",color:"#ff1744",bg:"rgba(255, 23, 68, 0.15)"},high:{label:"HIGH",color:"#ff9100",bg:"rgba(255, 145, 0, 0.12)"},medium:{label:"MEDIUM",color:"#ffea00",bg:"rgba(255, 234, 0, 0.1)"},low:{label:"LOW",color:"#69f0ae",bg:"rgba(105, 240, 174, 0.08)"},clear:{label:"CLEAR",color:"#00e676",bg:"rgba(0, 230, 118, 0.06)"}};function ne(r){const e=r.toLowerCase(),a=[];for(const t of re)for(const s of t.keywords)if(e.includes(s.toLowerCase())){const i=e.indexOf(s.toLowerCase()),l=Math.max(0,i-40),o=Math.min(r.length,i+s.length+40),n=r.slice(l,o).trim();a.push({category:t.category,keyword:s,weight:t.weight,context:n.length>80?n.slice(0,80)+"…":n})}return a}function le(r){const e=new Map;for(const t of r){const s=e.get(t.category)??0;e.set(t.category,s+t.weight*.6)}let a=0;for(const t of e.values())a+=Math.min(t,50);return Math.min(Math.round(a),100)}function B(r){return r>=F.critical?"critical":r>=F.high?"high":r>=F.medium?"medium":r>=F.low?"low":"clear"}function oe(r){const e=`${r.title} ${r.description}`,a=ne(e);if(a.length===0)return null;const t=le(a),s=B(t);return s==="clear"?null:{id:`alert-${r.id}`,itemId:r.id,sourceId:r.sourceId,title:r.title,link:r.link,level:s,score:t,signals:a,scannedAt:new Date,pubDate:r.pubDate}}function ce(r,e,a){const t=e.filter(n=>n.sourceId===r),s=t.map(n=>n.score),i=s.length>0?Math.round(s.reduce((n,d)=>n+d,0)/s.length):0,l=new Map;for(const n of t)for(const d of n.signals)l.set(d.category,(l.get(d.category)??0)+1);const o=[...l.entries()].sort((n,d)=>d[1]-n[1]).slice(0,4).map(([n,d])=>({category:n,count:d}));return{sourceId:r,level:B(i),score:i,alertCount:t.length,articlesScanned:a,topCategories:o,lastScanned:t.length>0?new Date:null}}function G(r,e){const a=new Set(e.map(n=>n.id)),t=r.filter(n=>a.has(n.sourceId)),s=[];for(const n of t){const d=oe(n);d&&s.push(d)}const i={critical:0,high:1,medium:2,low:3,clear:4};s.sort((n,d)=>{const m=i[n.level]-i[d.level];return m!==0?m:d.pubDate.getTime()-n.pubDate.getTime()});const l=new Map;for(const n of t)l.set(n.sourceId,(l.get(n.sourceId)??0)+1);const o=e.map(n=>ce(n.id,s,l.get(n.id)??0));return{alerts:s,sourceProfiles:o,totalScanned:t.length,criticalCount:s.filter(n=>n.level==="critical").length,highCount:s.filter(n=>n.level==="high").length,scannedAt:new Date}}class de{constructor(){h(this,"el");this.el=document.createElement("div"),this.el.className="view dashboard-view",this.el.id="view-dashboard"}render(){const e=c.getDashboardStats(),a=c.getFilteredItems().slice(0,8),t=c.isLoading(),s=G(c.getAllItems(),f);return this.el.innerHTML=`
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
            ${e.lastUpdated?g(e.lastUpdated):"—"}
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
            ${a.length>0?a.map(i=>{const l=p.find(o=>o.id===i.sourceId);return`
                      <article class="feed-stream-item">
                        <div class="feed-stream-item__source" style="color: ${(l==null?void 0:l.color)??"#fff"}">
                          ${(l==null?void 0:l.icon)??"•"} ${(l==null?void 0:l.name)??"Unknown"}
                        </div>
                        <a href="${i.link}" target="_blank" rel="noopener" class="feed-stream-item__title">
                          ${i.title}
                        </a>
                        <time class="feed-stream-item__time">${g(i.pubDate)}</time>
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
              ${Object.entries(R).map(([i,l])=>{const o=c.getAllItems().filter(d=>d.category===i).length,n=e.totalArticles>0?o/e.totalArticles*100:0;return`
                    <div class="category-bar">
                      <div class="category-bar__header">
                        <span>${l.icon} ${l.label}</span>
                        <span>${o}</span>
                      </div>
                      <div class="category-bar__track">
                        <div class="category-bar__fill" style="width: ${n}%; background: ${l.color}"></div>
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
    `,this.bindEvents(),this.runAnimations(),this.el}bindEvents(){var e;this.el.querySelectorAll("[data-goto]").forEach(a=>{a.addEventListener("click",()=>{const t=a.dataset.goto;t&&c.setView(t)})}),(e=this.el.querySelector(".dashboard-threat-banner"))==null||e.addEventListener("click",()=>{c.setView("extremism-monitor")})}runAnimations(){u.revealChildren(this.el);const e=c.getDashboardStats(),a=this.el.querySelector("#stat-articles");a&&!c.isLoading()&&u.animateCounter(a,e.totalArticles),this.el.querySelectorAll(".dashboard-view__orbital-ring").forEach((s,i)=>{u.orbit(s),s.style.animationDuration=`${15+i*5}s`})}update(){this.render()}}class he{constructor(){h(this,"el");this.el=document.createElement("div"),this.el.className="view reader-view",this.el.id="view-reader"}render(){const e=c.getState(),a=c.getFilteredItems(),t=c.isLoading();return this.el.innerHTML=`
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
    `,this.bindEvents(),requestAnimationFrame(()=>u.revealChildren(this.el,".article-card")),this.el}renderArticle(e,a){const t=p.find(i=>i.id===e.sourceId),s=e.category?R[e.category]:null;return a==="list"?`
        <article class="article-card article-card--list anim-item">
          <div class="article-card__meta">
            <span class="article-card__source" style="color: ${t==null?void 0:t.color}">${t==null?void 0:t.icon} ${t==null?void 0:t.name}</span>
            ${s?`<span class="article-card__category" style="color: ${s.color}">${s.label}</span>`:""}
            <time>${g(e.pubDate)}</time>
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
              <time>${g(e.pubDate)}</time>
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
              <time>${g(e.pubDate)}</time>
              ${e.author?`<span class="article-card__author">by ${e.author}</span>`:""}
            </div>
          </div>
        </div>
      </article>
    `}bindEvents(){var e;this.el.querySelectorAll("[data-category]").forEach(a=>{a.addEventListener("click",()=>{const t=a.dataset.category;c.setCategory(t)})}),this.el.querySelectorAll("[data-layout]").forEach(a=>{a.addEventListener("click",()=>{const t=a.dataset.layout;c.setReaderLayout(t)})}),(e=this.el.querySelector("#clear-filters"))==null||e.addEventListener("click",()=>{c.setSearchQuery(""),c.setCategory("all")}),this.el.querySelectorAll(".article-card").forEach(a=>{a.addEventListener("mouseenter",()=>u.cardHover(a,!0)),a.addEventListener("mouseleave",()=>u.cardHover(a,!1))})}update(){this.render()}}class ue{constructor(){h(this,"el");this.el=document.createElement("div"),this.el.className="view multi-view",this.el.id="view-multi-view"}render(){const e=c.getState(),a=p.filter(t=>e.multiViewSourceIds.includes(t.id));return this.el.innerHTML=`
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
        ${p.map(t=>`
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
    `,this.bindEvents(),requestAnimationFrame(()=>u.revealChildren(this.el,".multi-view__panel")),this.el}bindEvents(){const e=this.el.querySelector("#multi-view-columns");e==null||e.addEventListener("change",()=>{const a=Number(e.value);c.setMultiViewColumns(a)}),this.el.querySelectorAll("[data-source]").forEach(a=>{a.addEventListener("click",()=>{const t=a.dataset.source;t&&c.toggleMultiViewSource(t)})}),this.el.querySelectorAll(".multi-view__iframe").forEach(a=>{const t=a.closest(".multi-view__panel"),s=t==null?void 0:t.querySelector(".multi-view__fallback");setTimeout(()=>{var i;try{const o=a.contentDocument;(!o||((i=o.body)==null?void 0:i.innerHTML)==="")&&(s==null||s.classList.add("multi-view__fallback--visible"))}catch{}},5e3)})}update(){this.render()}}class me{constructor(){h(this,"el");this.el=document.createElement("div"),this.el.className="view sources-view",this.el.id="view-sources"}render(){const e=c.getState(),a=c.getFeedCache();return this.el.innerHTML=`
      <div class="sources-view__header anim-item">
        <h2>Source Matrix</h2>
        <p>${e.selectedSourceIds.length} of ${p.length} sources active in feed reader</p>
      </div>

      <div class="sources-view__grid">
        ${p.map(t=>{const s=e.selectedSourceIds.includes(t.id),i=a.get(t.id),l=(i==null?void 0:i.items.length)??0,o=i==null?void 0:i.error,n=R[t.category];return`
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
                <span class="source-card__category" style="color: ${n.color}">
                  ${n.icon} ${n.label}
                </span>
                <span class="source-card__count">
                  ${o?"⚠ Error":`${l} articles`}
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

              ${o?`<div class="source-card__error">⚠ ${i==null?void 0:i.error}</div>`:""}
              ${t.extremismWatch?`<div class="source-card__watch-notice">⬢ Under cybersecurity extremism watch — ${t.watchReason}</div>`:""}
            </div>
          `}).join("")}
      </div>
    `,this.bindEvents(),requestAnimationFrame(()=>u.revealChildren(this.el,".source-card")),this.el}bindEvents(){this.el.querySelectorAll("[data-toggle]").forEach(e=>{e.addEventListener("change",()=>{const a=e.dataset.toggle;a&&c.toggleSource(a)})}),this.el.querySelectorAll(".source-card").forEach(e=>{e.addEventListener("mouseenter",()=>u.cardHover(e,!0)),e.addEventListener("mouseleave",()=>u.cardHover(e,!1))})}update(){this.render()}}class ve{constructor(){h(this,"el");this.el=document.createElement("div"),this.el.className="view analytics-view",this.el.id="view-analytics"}render(){const e=c.getDashboardStats(),a=c.getFeedCache(),t=c.getAllItems(),s=new Array(24).fill(0);for(const l of t){const o=l.pubDate.getHours();s[o]=(s[o]??0)+1}const i=Math.max(...s,1);return this.el.innerHTML=`
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
          <div class="analytics-metric__value">${[...a.values()].filter(l=>l.error).length}</div>
          <div class="analytics-metric__label">Fetch Errors</div>
        </div>
      </div>

      <div class="analytics-view__grid">
        <section class="analytics-panel anim-item">
          <h3 class="analytics-panel__title">Top Sources by Volume</h3>
          <div class="analytics-panel__body">
            ${e.topSources.map(l=>{const o=p.find(d=>d.id===l.sourceId),n=e.totalArticles>0?l.count/e.totalArticles*100:0;return`
                  <div class="source-rank">
                    <div class="source-rank__header">
                      <span>${(o==null?void 0:o.icon)??"•"} ${(o==null?void 0:o.name)??l.sourceId}</span>
                      <span>${l.count} (${n.toFixed(1)}%)</span>
                    </div>
                    <div class="source-rank__bar">
                      <div class="source-rank__fill" style="width: ${n}%; background: ${(o==null?void 0:o.color)??"#00d4ff"}"></div>
                    </div>
                  </div>
                `}).join("")||'<p class="analytics-panel__empty">No data yet</p>'}
          </div>
        </section>

        <section class="analytics-panel anim-item">
          <h3 class="analytics-panel__title">Publication Timeline (24h)</h3>
          <div class="analytics-panel__body">
            <div class="timeline-chart">
              ${s.map((l,o)=>{const n=l/i*100;return`
                    <div class="timeline-chart__bar" title="${o}:00 — ${l} articles">
                      <div class="timeline-chart__fill" style="height: ${n}%"></div>
                      <span class="timeline-chart__label">${o}</span>
                    </div>
                  `}).join("")}
            </div>
          </div>
        </section>

        <section class="analytics-panel anim-item">
          <h3 class="analytics-panel__title">Category Distribution</h3>
          <div class="analytics-panel__body">
            <div class="category-donut">
              ${Object.entries(R).map(([l,o])=>{const n=t.filter(m=>m.category===l).length,d=e.totalArticles>0?n/e.totalArticles*100:0;return n===0?"":`
                    <div class="category-donut__item">
                      <div class="category-donut__swatch" style="background: ${o.color}"></div>
                      <span class="category-donut__label">${o.icon} ${o.label}</span>
                      <span class="category-donut__value">${n} (${d.toFixed(0)}%)</span>
                    </div>
                  `}).join("")}
            </div>
          </div>
        </section>

        <section class="analytics-panel anim-item">
          <h3 class="analytics-panel__title">Feed Health Status</h3>
          <div class="analytics-panel__body">
            <div class="health-list">
              ${p.map(l=>{const o=a.get(l.id),n=o?o.error?"error":"ok":"pending",d=n==="ok"?"✓":n==="error"?"✗":"○";return`
                  <div class="health-item ${`health-item--${n}`}">
                    <span class="health-item__status">${d}</span>
                    <span class="health-item__name">${l.icon} ${l.name}</span>
                    <span class="health-item__detail">
                      ${o?o.error?o.error:`${o.items.length} articles · ${g(o.fetchedAt)}`:"Not fetched"}
                    </span>
                  </div>
                `}).join("")}
            </div>
          </div>
        </section>
      </div>
    `,requestAnimationFrame(()=>{u.revealChildren(this.el);const l=this.el.querySelector("#analytics-total");l&&u.animateCounter(l,e.totalArticles)}),this.el}update(){this.render()}}class pe{constructor(){h(this,"el");h(this,"selectedLevel","all");this.el=document.createElement("div"),this.el.className="view extremism-monitor",this.el.id="view-extremism-monitor"}render(){const e=G(c.getAllItems(),f),a=c.isLoading(),t=this.selectedLevel==="all"?e.alerts:e.alerts.filter(s=>s.level===this.selectedLevel);return this.el.innerHTML=`
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
            ${a?"Scanning…":g(e.scannedAt)}
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
            ${f.map(s=>{var o;const i=e.sourceProfiles.find(n=>n.sourceId===s.id),l=H[(i==null?void 0:i.level)??"clear"];return`
                <div class="watch-source" style="--watch-color: ${s.color}">
                  <div class="watch-source__header">
                    <span class="watch-source__icon">${s.icon}</span>
                    <div class="watch-source__info">
                      <span class="watch-source__name">${s.name}</span>
                      <span class="watch-source__tier watch-source__tier--${s.watchTier}">${(o=s.watchTier)==null?void 0:o.toUpperCase()} WATCH</span>
                    </div>
                    <span class="watch-source__level" style="color: ${l.color}; background: ${l.bg}">
                      ${l.label}
                    </span>
                  </div>
                  <p class="watch-source__reason">${s.watchReason??""}</p>
                  <div class="watch-source__metrics">
                    <span>${(i==null?void 0:i.alertCount)??0} alerts</span>
                    <span>${(i==null?void 0:i.articlesScanned)??0} scanned</span>
                    <span>Score: ${(i==null?void 0:i.score)??0}/100</span>
                  </div>
                  ${i&&i.topCategories.length>0?`<div class="watch-source__categories">
                          ${i.topCategories.map(n=>{const d=D[n.category];return`<span class="watch-source__cat" style="color: ${d.color}">${d.icon} ${d.label} (${n.count})</span>`}).join("")}
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
                  style="${s!=="all"?`--filter-color: ${H[s].color}`:""}"
                >
                  ${s==="all"?"All":H[s].label}
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
                    </div>`:t.map(s=>{const i=p.find(o=>o.id===s.sourceId),l=H[s.level];return`
                        <div class="threat-alert threat-alert--${s.level} anim-item" data-alert-level="${s.level}">
                          <div class="threat-alert__header">
                            <span class="threat-alert__level" style="color: ${l.color}; background: ${l.bg}">
                              ${l.label}
                            </span>
                            <span class="threat-alert__score">Score: ${s.score}</span>
                            <span class="threat-alert__source" style="color: ${i==null?void 0:i.color}">
                              ${i==null?void 0:i.icon} ${i==null?void 0:i.name}
                            </span>
                            <time class="threat-alert__time">${g(s.pubDate)}</time>
                          </div>
                          <a href="${s.link}" target="_blank" rel="noopener" class="threat-alert__title">
                            ${s.title}
                          </a>
                          <div class="threat-alert__signals">
                            ${s.signals.slice(0,5).map(o=>{const n=D[o.category];return`
                                  <span class="threat-signal" style="--signal-color: ${n.color}" title="${o.context}">
                                    ${n.icon} ${o.keyword}
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
            ${Object.entries(D).map(([s,i])=>{const l=e.alerts.reduce((d,m)=>d+m.signals.filter(_=>_.category===s).length,0),o=Math.max(...Object.keys(D).map(d=>e.alerts.reduce((m,_)=>m+_.signals.filter(b=>b.category===d).length,0)),1),n=l/o*100;return`
                  <div class="threat-category-row">
                    <div class="threat-category-row__header">
                      <span>${i.icon} ${i.label}</span>
                      <span>${l} signals</span>
                    </div>
                    <div class="threat-category-row__track">
                      <div class="threat-category-row__fill" style="width: ${n}%; background: ${i.color}"></div>
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
    `,this.bindEvents(),this.runAnimations(e.criticalCount+e.highCount),this.el}bindEvents(){this.el.querySelectorAll(".threat-filter").forEach(e=>{e.addEventListener("click",()=>{const a=e.dataset.level;this.selectedLevel=a,this.render(),this.el.parentElement&&(this.el.parentElement.innerHTML="",this.el.parentElement.appendChild(this.el),u.pageEnter(this.el))})})}runAnimations(e){u.revealChildren(this.el);const a=this.el.querySelector("#stat-critical"),t=this.el.querySelector("#stat-high"),s=this.el.querySelector("#threat-score-total");if(a){const o=parseInt(a.textContent??"0",10);u.animateCounter(a,o,.8)}if(t){const o=parseInt(t.textContent??"0",10);u.animateCounter(t,o,.8)}s&&u.animateCounter(s,e,1);const i=this.el.querySelector(".threat-radar__sweep");i&&u.scanline(i),this.el.querySelectorAll(".threat-alert--critical, .threat-alert--high").forEach(o=>{u.pulseGlow(o)});const l=this.el.querySelector(".extremism-monitor__badge-pulse");l&&u.pulseGlow(l)}update(){this.render()}}class _e{constructor(e){h(this,"root");h(this,"sidebar");h(this,"header");h(this,"views");h(this,"contentEl",null);h(this,"currentViewEl",null);h(this,"currentViewMode","dashboard");h(this,"unsubscribe",null);h(this,"refreshHandler",()=>{this.loadFeeds()});const a=document.querySelector(e);if(!a)throw new Error(`Root element "${e}" not found`);this.root=a,this.sidebar=new se,this.header=new ie,this.views=new Map([["dashboard",new de],["reader",new he],["multi-view",new ue],["sources",new me],["analytics",new ve],["extremism-monitor",new pe]])}async init(){this.root.innerHTML="",this.root.className="app";const e=this.sidebar.render(),a=document.createElement("main");a.className="app__main";const t=this.header.render();this.contentEl=document.createElement("div"),this.contentEl.className="app__content",this.contentEl.id="app-content",a.appendChild(t),a.appendChild(this.contentEl),this.root.appendChild(e),this.root.appendChild(a),this.unsubscribe=c.subscribe(s=>this.onStateChange(s)),window.addEventListener("rss:refresh",this.refreshHandler),await this.switchView(c.getState().currentView),await this.loadFeeds()}async onStateChange(e){if(this.sidebar.update(),this.header.update(),e.currentView!==this.currentViewMode){this.currentViewMode=e.currentView,await this.switchView(e.currentView);return}const a=this.views.get(e.currentView);a&&this.contentEl&&(this.currentViewEl=a.render(),this.contentEl.innerHTML="",this.contentEl.appendChild(this.currentViewEl),u.pageEnter(this.currentViewEl))}async switchView(e){const a=this.views.get(e);!a||!this.contentEl||(this.currentViewEl&&await u.pageExit(this.currentViewEl),this.contentEl.innerHTML="",this.currentViewEl=a.render(),this.contentEl.appendChild(this.currentViewEl),u.pageEnter(this.currentViewEl))}async loadFeeds(){if(!c.isLoading()){c.setLoading(!0),c.setLoadProgress(0,p.length);try{const e=await ee(p,(a,t)=>{c.setLoadProgress(a,t)});c.setFeedCache(e)}finally{c.setLoading(!1)}}}destroy(){var e;(e=this.unsubscribe)==null||e.call(this),window.removeEventListener("rss:refresh",this.refreshHandler)}}const ge=new _e("#app");ge.init().catch(r=>{console.error("Failed to initialize Super RSS Feed:",r);const e=document.querySelector("#app");if(e){const a=r instanceof Error?r.message:"Unknown error";e.innerHTML=`
      <div class="app-error">
        <h1>Initialization Error</h1>
        <p>${a}</p>
        <button onclick="location.reload()">Reload</button>
      </div>
    `}});
