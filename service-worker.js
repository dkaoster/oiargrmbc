!function(){"use strict";const a=1612884239274,t="cache"+a,e=["/client/client.9f0d49a7.js","/client/inject_styles.5607aec6.js","/client/index.0999c1d1.js","/client/Card.0503a1a6.js","/client/letters.7b44d71b.js"].concat(["/service-worker-index.html","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/data/all_chars.json","/data/mandarin-1000.csv","/data/mandarin-10000.csv","/data/mandarin-2000.csv","/data/mandarin-3000.csv","/data/mandarin-4000.csv","/data/mandarin-5000.csv","/data/mandarin-6000.csv","/data/mandarin-7000.csv","/data/mandarin-8000.csv","/data/mandarin-9000.csv","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/global.css","/site.webmanifest"]),n=new Set(e);self.addEventListener("install",(a=>{a.waitUntil(caches.open(t).then((a=>a.addAll(e))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(a=>{a.waitUntil(caches.keys().then((async a=>{for(const e of a)e!==t&&await caches.delete(e);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const e=new URL(t.request.url),c=e.protocol.startsWith("http"),s=e.hostname===self.location.hostname&&e.port!==self.location.port,i=e.host===self.location.host&&n.has(e.pathname),o="only-if-cached"===t.request.cache&&!i;!c||s||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const e=await caches.open("offline"+a);try{const a=await fetch(t);return e.put(t,a.clone()),a}catch(a){const n=await e.match(t);if(n)return n;throw a}}(t.request))())}))}();
