const timestamp = 1639199120058;
const build = [
  "/_app/start-b49bb265.js",
  "/_app/assets/start-61d1577b.css",
  "/_app/pages/__layout.svelte-bf9c5b29.js",
  "/_app/assets/pages/__layout.svelte-ce682301.css",
  "/_app/pages/__error.svelte-9c4c3056.js",
  "/_app/assets/pages/__error.svelte-217c36c1.css",
  "/_app/pages/index.svelte-b45ff714.js",
  "/_app/assets/pages/index.svelte-de4cb07a.css",
  "/_app/pages/letters.svelte-000dfe81.js",
  "/_app/assets/pages/letters.svelte-1b0fd4f2.css",
  "/_app/pages/404.svelte-e3bb0fe0.js",
  "/_app/chunks/vendor-8127e5b2.js",
  "/_app/chunks/Card-88880209.js",
  "/_app/assets/Card-30ff22cd.css"
];
const files = [
  "/.nojekyll",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/apple-touch-icon.png",
  "/data/all_chars.json",
  "/data/mandarin-1000.csv",
  "/data/mandarin-10000.csv",
  "/data/mandarin-2000.csv",
  "/data/mandarin-3000.csv",
  "/data/mandarin-4000.csv",
  "/data/mandarin-5000.csv",
  "/data/mandarin-6000.csv",
  "/data/mandarin-7000.csv",
  "/data/mandarin-8000.csv",
  "/data/mandarin-9000.csv",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/favicon.ico",
  "/global.css",
  "/oiargrmbc.jpg",
  "/site.webmanifest"
];
const ASSETS = `cache${timestamp}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(ASSETS).then((cache) => cache.addAll(to_cache)).then(() => {
    self.skipWaiting();
  }));
});
self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== ASSETS)
        await caches.delete(key);
    }
    self.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${timestamp}`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
