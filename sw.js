﻿var APP_PREFIX = '海之声'     // Identifier for this app (this needs to be consistent across every cache update)
var VERSION = '20220121'              // Version of the off-line cache (change this value everytime you want to update cache)
var CACHE_NAME = APP_PREFIX + VERSION
var URLS = [
    '/',
    '/index.html',
    '/swf.bin'
]

// Respond with cached resources
self.addEventListener('fetch', function (event) {
    console.log('fetch request : ' + event.request.url)
    if (event.request.method == "GET"&&(event.request.url.indexOf("http")==0)) {
        event.respondWith(
            caches.open(CACHE_NAME).then(function (cache) {
                return cache.match(event.request).then(function (response) {
                    return response || fetch(event.request).then(function (response) {
                        console.log('file is not cached, fetching : ' + event.request.url)
                        cache.put(event.request, response.clone());
                        console.log('file cached : ' + event.request.url)
                        return response;
                    });
                });
            })

        );
    } else {
        event.respondWith(fetch(event.request))
    }
});
// Cache resources
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('installing cache : ' + CACHE_NAME)
            return cache.addAll(URLS)
        })
    )
})

// Delete outdated caches
self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then(function (keyList) {
            // `keyList` contains all cache names under your username.github.io
            // filter out ones that has this app prefix to create white list
            var cacheWhitelist = keyList.filter(function (key) {
                return key.indexOf(APP_PREFIX)
            })
            // add current cache name to white list
            cacheWhitelist.push(CACHE_NAME)

            return Promise.all(keyList.map(function (key, i) {
                if (cacheWhitelist.indexOf(key) === -1) {
                    console.log('deleting cache : ' + keyList[i])
                    return caches.delete(keyList[i])
                }
            }))
        })
    )
})
