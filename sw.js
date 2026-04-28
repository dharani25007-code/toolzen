const CACHE_NAME = 'toolzen-offline-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './sw.js',
  // Local Libraries
  './libs/qrcode.min.js',
  './libs/jsqr.js',
  './libs/jszip.min.js',
  './libs/pdf-lib.min.js',
  './libs/mammoth.min.js',
  './libs/pdf.min.js',
  './libs/pdf.worker.min.js',
  './libs/xlsx.full.min.js',
  './libs/gifshot.min.js',
  './libs/beautify.js',
  './libs/beautify-css.js',
  './libs/beautify-html.js',
  // Fonts (External, cached on first visit)
  'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching all assets for 100% offline use');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request).then(response => {
        if (response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
