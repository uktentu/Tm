/* ═══════════════════════════════════════════
   BEYOND STANDARD — Life OS  Service Worker
   Cache-first · Offline fallback · Push
   ═══════════════════════════════════════════ */

const CACHE = 'life-os-v21';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './offline.html',
  './icons/icon.svg',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      const network = fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
      return cached || network.catch(() => {
        if (e.request.mode === 'navigate') return caches.match('./offline.html');
      });
    })
  );
});

self.addEventListener('push', e => {
  if (!e.data) return;
  const { title, body, tag } = e.data.json();
  e.waitUntil(
    self.registration.showNotification(title, {
      body,
      tag: tag || 'life-os',
      icon: './icons/icon-192.png',
      badge: './icons/icon-72.png',
      vibrate: [200, 100, 200],
      requireInteraction: false,
    })
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window' }).then(list => {
      for (const c of list) {
        if (c.url.includes('life-os') && 'focus' in c) return c.focus();
      }
      return clients.openWindow('./');
    })
  );
});
