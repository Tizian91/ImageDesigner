// Service Worker: hält die App offline verfügbar, sobald sie installiert ist.
// Bei jeder Änderung an den Dateien VERSION erhöhen, damit alte Caches verworfen werden.
'use strict';
const VERSION = 'v4';
const CACHE = 'bildtafel-designer-' + VERSION;
const FILES = ['./', './index.html', './ImageDesigner.html', './manifest.webmanifest',
  './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('bildtafel-designer-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Sofort aus dem Cache antworten und im Hintergrund aktualisieren (stale-while-revalidate).
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
