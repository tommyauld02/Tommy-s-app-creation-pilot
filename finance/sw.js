// Ledger service worker: keeps the app working offline once it has been opened.
// Bump CACHE when shipping changes so installed copies pick them up.
const CACHE = 'ledger-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('ledger-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;

  // Pages: serve the cached copy instantly, refresh it in the background.
  if (req.mode === 'navigate') {
    e.respondWith(caches.open(CACHE).then(async cache => {
      const cached = await cache.match('./index.html');
      const fresh = fetch(req)
        .then(res => { if (res.ok) cache.put('./index.html', res.clone()); return res; })
        .catch(() => null);
      if (cached) { e.waitUntil(fresh); return cached; }
      return (await fresh) || new Response('Ledger is offline and has not been cached yet.', {status: 503});
    }));
    return;
  }

  // Everything else: cache first, then network.
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  })));
});
