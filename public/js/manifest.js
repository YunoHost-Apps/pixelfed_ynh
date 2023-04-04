(()=>{"use strict";var e,r,a,t={},n={};function d(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,d),a.loaded=!0,a.exports}d.m=t,e=[],d.O=(r,a,t,n)=>{if(!a){var o=1/0;for(l=0;l<e.length;l++){for(var[a,t,n]=e[l],c=!0,i=0;i<a.length;i++)(!1&n||o>=n)&&Object.keys(d.O).every((e=>d.O[e](a[i])))?a.splice(i--,1):(c=!1,n<o&&(o=n));if(c){e.splice(l--,1);var s=t();void 0!==s&&(r=s)}}return r}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[a,t,n]},d.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return d.d(r,{a:r}),r},d.d=(e,r)=>{for(var a in r)d.o(r,a)&&!d.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((r,a)=>(d.f[a](e,r),r)),[])),d.u=e=>"js/"+{1084:"profile~followers.bundle",1983:"kb.bundle",2470:"home.chunk",2521:"about.bundle",2530:"discover~myhashtags.chunk",2586:"compose.chunk",2732:"dms~message.chunk",3351:"discover~settings.chunk",3365:"dms.chunk",3623:"discover~findfriends.chunk",4028:"error404.bundle",4509:"static~privacy.bundle",4958:"discover.chunk",4965:"discover~memories.chunk",5865:"post.chunk",6053:"notifications.chunk",6869:"profile.chunk",7004:"help.bundle",7019:"discover~hashtag.bundle",8021:"contact.bundle",8250:"i18n.bundle",8517:"daci.chunk",8600:"changelog.bundle",8625:"profile~following.bundle",8900:"discover~serverfeed.chunk",9144:"static~tos.bundle"}[e]+"."+{1084:"fe353e697fb7660b",1983:"f6ebdaac1fd552ca",2470:"0cd2b4778c793399",2521:"44a18841089fdde3",2530:"e788db6a43d0d0a5",2586:"c413851da244ae3f",2732:"1cfdf19c4525eafa",3351:"c7fe4bae81961b13",3365:"91ab72a8dcd1a8a8",3623:"a740588ad1724793",4028:"5075813f1b00e10d",4509:"24c230550b6938b2",4958:"4f1b3ea93df06670",4965:"e7d0bff764b64064",5865:"c1d1dd0b53c97ee5",6053:"1a834e4a7bdbf21a",6869:"45a990056083f92b",7004:"7c1195b63e04d568",7019:"76807a8ff71bd205",8021:"d6c1d467c11796b1",8250:"9b9bf1b64e2aa1c1",8517:"afde7c4a5fcab6df",8600:"7f58a5ccc6659eb2",8625:"c406db7b14d07d36",8900:"cac5527f5b83302b",9144:"65caad6c0546d8c9"}[e]+".js",d.miniCssF=e=>({138:"css/spa",703:"css/admin",1242:"css/appdark",6170:"css/app",8737:"css/portfolio",9994:"css/landing"}[e]+".css"),d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},a="pixelfed:",d.l=(e,t,n,o)=>{if(r[e])r[e].push(t);else{var c,i;if(void 0!==n)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var u=s[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+n){c=u;break}}c||(i=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,d.nc&&c.setAttribute("nonce",d.nc),c.setAttribute("data-webpack",a+n),c.src=e),r[e]=[t];var f=(a,t)=>{c.onerror=c.onload=null,clearTimeout(b);var n=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((e=>e(t))),a)return a(t)},b=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),i&&document.head.appendChild(c)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),d.p="/",(()=>{var e={8929:0,1242:0,6170:0,8737:0,703:0,9994:0,138:0};d.f.j=(r,a)=>{var t=d.o(e,r)?e[r]:void 0;if(0!==t)if(t)a.push(t[2]);else if(/^(1242|138|6170|703|8737|8929|9994)$/.test(r))e[r]=0;else{var n=new Promise(((a,n)=>t=e[r]=[a,n]));a.push(t[2]=n);var o=d.p+d.u(r),c=new Error;d.l(o,(a=>{if(d.o(e,r)&&(0!==(t=e[r])&&(e[r]=void 0),t)){var n=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;c.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,t[1](c)}}),"chunk-"+r,r)}},d.O.j=r=>0===e[r];var r=(r,a)=>{var t,n,[o,c,i]=a,s=0;if(o.some((r=>0!==e[r]))){for(t in c)d.o(c,t)&&(d.m[t]=c[t]);if(i)var l=i(d)}for(r&&r(a);s<o.length;s++)n=o[s],d.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return d.O(l)},a=self.webpackChunkpixelfed=self.webpackChunkpixelfed||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))})(),d.nc=void 0})();