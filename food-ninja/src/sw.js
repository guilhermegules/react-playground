const staticCacheName = "site-static";
const assets = [
  "/",
  "/dish.png",
  "/vite.svg",
  "/index.html",
  "/main.js",
  "/main-BnolW0BY.css",
];

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
});

self.addEventListener("fetch", (event) => {
  console.log("Fetch event", event);
});
