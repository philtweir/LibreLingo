import { timestamp, files, shell } from "@sapper/service-worker"

function xml(req) {
    return XMLHttpRequest(req);
}
self.XMLHttpRequest = xml;
XMLHttpRequest = xml;
importScripts(
    "pyodide/xml-http-request.js",
    "pyodide/pyodide.asm.js",
    "pyodide/pyodide.js"
)
self.main = async function(){
    if (!self.pyodide) {
        self.pyodide = await loadPyodide();
        await self.pyodide.FS.mkdir("/courses");
        await self.pyodide.FS.mount(self.pyodide.FS.filesystems.IDBFS, {}, "/courses");
        await self.pyodide.FS.syncfs(true, (err) => {
            if (err) {
                console.error(err);
            }
        });
    }
}

// eslint-disable-next-line no-constant-condition
const ASSETS = `cache${timestamp}`
const OFFLINE_URL = "offline.html"

// `shell` is an array of all the files generated by the bundler,
// `files` is an array of everything in the `static` directory
const to_cache = [OFFLINE_URL]
// const to_cache = shell.concat(files)
const cached = new Set(to_cache)

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches
            .open(ASSETS)
            .then((cache) => cache.addAll(to_cache))
            .then(() => {
                self.main()
            })
            .then(() => {
                self.skipWaiting()
            })
    )
})

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then(async (keys) => {
            // delete old caches
            for (const key of keys) {
                if (key !== ASSETS) await caches.delete(key)
            }

            self.clients.claim()
        }).then(() => {
            self.main()
        })
    )
})

const dbPromise = indexedDB.open("LibreLingo", 3);

dbPromise.onsuccess = function (event) {
    self.db = event.target.result;
    console.log("DB", db.objectStoreNames);
}
dbPromise.onupgradeneeded = function (event) {
    self.db = event.target.result;
    if (!db.objectStoreNames.contains("courseData")) {
        db.createObjectStore("courseData", { keyPath: "filename" })
    }
}

// function loadJson(file) {
//       const tx = self.db.transaction("courseData", "readonly");
//       const store = tx.objectStore("courseData");
//       const result = new Promise((res, rej) => {
//           const request = store.get(file);
//           console.log("REQ", file);
//           request.onsuccess = ev => { console.log("SUCC", request.result); res(JSON.stringify(request.result)) };
//       });
//       return result;
// }
self.loadJson = async function(file) {
    await self.main();
    const content = await self.pyodide.FS.readFile(`/courses/export/${file}`);
    console.log(content)
    return content;
}


self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET" || event.request.headers.has("range") || event.request.url.indexOf("pyodide") != -1)
        return

    const url = new URL(event.request.url)

    // don't try to handle e.g. data: URIs
    if (!url.protocol.startsWith("http")) return

    console.log(event.request.url, url.pathname)
    const match = url.pathname.match(/\/courses\/([\w-_]*\/.*\.json)/)
    console.log(match)
    if (url.host === self.location.host && match) {
        event.respondWith(loadJson(match[1]).then(res => {
            console.log("R", res)
            return new Response(res, { status: 200 })
        }));
        return
    }

    // ignore dev server requests
    if (
        url.hostname === self.location.hostname &&
        url.port !== self.location.port
    )
        return

    // always serve static files and bundler-generated assets from cache
    if (url.host === self.location.host && cached.has(url.pathname)) {
        event.respondWith(caches.match(event.request))
        return
    }

    // for pages, you might want to serve a shell `service-worker-index.html` file,
    // which Sapper has generated for you. It's not right for every
    // app, but if it's right for yours then uncomment this section
    /*
    if (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
        event.respondWith(caches.match('/service-worker-index.html'));
        return;
    }
    */

    if (event.request.cache === "only-if-cached") return

    // for everything else, try the network first, falling back to
    // cache if the user is offline. (If the pages never change, you
    // might prefer a cache-first approach to a network-first one.)
    event.respondWith(
        caches.open(`cache${timestamp}`).then(async (cache) => {
            try {
                const response = await fetch(event.request)
                cache.put(event.request, response.clone())
                return response
            } catch (err) {
                const response = await cache.match(event.request)
                if (response) return response

                const offlineResponse = await cache.match(OFFLINE_URL)
                if (offlineResponse) return offlineResponse

                throw err
            }
        })
    )
})
