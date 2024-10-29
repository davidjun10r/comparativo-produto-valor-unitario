const CACHE_NAME = 'comparativo-preco-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.ico',
  'https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
