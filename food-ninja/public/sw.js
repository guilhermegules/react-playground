self.addEventListener("install", (event) => {
  console.log("Service worker has been installed", event);
});

self.addEventListener("activate", (event) => {
  console.log("Service worker has been activated", event);
});

self.addEventListener("fetch", (event) => {
  console.log("Fetch event", event);
});
