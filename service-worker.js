const timestamp = 1670447522405;
const build = [
  "/_app/start-2624d4ea.js",
  "/_app/assets/start-61d1577b.css",
  "/_app/pages/__layout.svelte-b25dd116.js",
  "/_app/assets/pages/__layout.svelte-ce682301.css",
  "/_app/pages/__error.svelte-83341b87.js",
  "/_app/assets/pages/__error.svelte-217c36c1.css",
  "/_app/pages/index.svelte-e3ed9381.js",
  "/_app/assets/pages/index.svelte-2188ea1d.css",
  "/_app/pages/letters.svelte-7319d17b.js",
  "/_app/assets/pages/letters.svelte-1b0fd4f2.css",
  "/_app/pages/404.svelte-56df4f51.js",
  "/_app/chunks/index-6a56b437.js",
  "/_app/chunks/Card-f53b5f2a.js",
  "/_app/assets/Card-99362918.css"
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
  event.waitUntil(
    caches.open(ASSETS).then((cache) => cache.addAll(to_cache)).then(() => {
      self.skipWaiting();
    })
  );
});
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(async (keys) => {
      for (const key of keys) {
        if (key !== ASSETS)
          await caches.delete(key);
      }
      self.clients.claim();
    })
  );
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
    event.respondWith(
      (async () => {
        const cachedAsset = isStaticAsset && await caches.match(event.request);
        return cachedAsset || fetchAndCache(event.request);
      })()
    );
  }
});
