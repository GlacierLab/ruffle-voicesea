var APP_PREFIX = '海之声'
var VERSION = '20220125'
var CACHE_NAME = APP_PREFIX + VERSION
var URLS = [
    '/',
]
self.addEventListener('fetch', event => {
    if (event.request.method == "GET" && (event.request.url.indexOf("http") == 0)) {
        event.respondWith(
            caches.open(CACHE_NAME).then(async cache => {
                return cache.match(event.request).then(response => {
                    return response || fetch(event.request).then(response => {
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
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('installing cache : ' + CACHE_NAME)
            return cache.addAll(URLS)
        })
    )
})
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            var cacheWhitelist = keyList.filter(key => {
                return key.indexOf(APP_PREFIX)
            })
            cacheWhitelist.push(CACHE_NAME)

            return Promise.all(keyList.map((key, i) => {
                if (cacheWhitelist.indexOf(key) === -1) {
                    console.log('deleting cache : ' + keyList[i])
                    return caches.delete(keyList[i])
                }
            }))
        })
    )
})
