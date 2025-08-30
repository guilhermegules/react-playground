const staticCacheName = "site-static-v2";
const dynamicCacheName = "site-dynamic-v1";
const assets = [
  "/",
  "/dish.png",
  "/vite.svg",
  "/index.html",
  "/main.js",
  "/main-BnolW0BY.css",
  "/offline.html",
  "/assets/Home-8Mre_2Nl.js",
  "/assets/main-BnolW0BY.css",
  "/assets/OfflinePage-CpxWSig_.js",
];

// Cache size limite
const limitCacheSize = (name, size) => {
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

self.addEventListener("install", (event) => {
  console.log("Service worker has been installed", event);
  // Will open or create the cache
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("Caching shell assets");
      cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service worker has been activated", event);
  event.waitUntil(
    caches.keys().then((keys) => {
      console.log("Cache keys", keys);

      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  // console.log("Fetch event", event);
  event.respondWith(
    caches
      .match(event.request)
      .then((cacheResponse) => {
        return cacheResponse || addCacheFromFetch(event);
      })
      .catch(() => {
        if (event.request.mode === "navigate") {
          return caches.match("/assets/OfflinePage-CpxWSig_.js");
        }

        return new Response(null);
      })
  );
});

function addCacheFromFetch(event) {
  return fetch(event.request).then((fetchResponse) => {
    return caches.open(dynamicCacheName).then((cache) => {
      cache.put(event.request.url, fetchResponse.clone());
      limitCacheSize(dynamicCacheName, 3);
      return fetchResponse;
    });
  });
}
