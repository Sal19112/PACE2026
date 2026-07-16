// PACE 2026 — minimal service worker.
// Network-ONLY, no caching. This exists purely to make the app installable
// as a PWA / packageable as an APK. It never stores responses, so it can
// never serve a stale page or poster — the dashboard always loads live.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  // Pass straight through to the network. No cache reads, no cache writes.
  e.respondWith(fetch(e.request));
});
