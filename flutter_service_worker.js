'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "965b8e801922db8151cc1b26eac377c0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/refs/remotes/origin/main": "d97daa2b4017e127f39d3a3df8c094f0",
".git/refs/heads/main": "d97daa2b4017e127f39d3a3df8c094f0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "ca17f65efba348b747b6eba1c72fe4e6",
".git/index": "a2cba75411c86629d0b390095a5830ac",
".git/objects/19/f8e22af186e0f4e5ee707a466c3f1f0797f1bc": "dcb7a0ffce481d3da26760cb525d7408",
".git/objects/6c/83003e8c45094b4a1bbc72eafe4070b50df15e": "050c91639017a597b91046108f479e31",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/84/bdfdbc4f1f07059364a867940122e098d34a7d": "8053e3dc263476219c3323cc278d1037",
".git/objects/8d/1eecadc6891c3368ac80b4ede71da73c971069": "bd8e4695976ad73e06f7c4f003c2d4a5",
".git/objects/af/e8b821657999ef66c058c30ba60af6147dfdb4": "c4051e989e2d000097daa684876087e4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/04/6fa227a47d5fae4622a802c6b70e65ee8c3ef3": "8e00d3fa1d48da102c0648b9ac78ff6b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/b1/1b0057099c71f9b68ca9d168c996fa275dfeaf": "338416aca116341077ff864cba2b85dd",
".git/objects/31/d1d8678bf3432a4de581f203a695739ad82161": "9eb270c05ef65c80ec34a26b98a7a746",
".git/objects/bb/9bda96289825f98daaedf6535e91ec7b198eb5": "9cdf5adfc6e6ed4c290737e4cfc6238b",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/2a/cb98eea0339c8d9f2eba298977b07adee8f9ba": "bcc5aa9e448c5ec8f7753286a094effd",
".git/objects/32/50adab84d220f55ff719b8db21fd282e3ea1d4": "6b48e5d31b05de9bb433a11d6ca330cd",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/7f/a1ca8e731ae50169aab67b315e5800cabdb4e1": "262d2e1a42edcfdb3a513b29c3a3c2ca",
".git/objects/d0/e5ee33a398580c4a5a0dd3d0cb4b02c01f22e1": "d7f465705af1f07070ee015371edbdd1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/3f/369fe729051bdddbb3ccf4bb377eb63825f5f6": "45fbfb76548c5b05d61e7c3b6eb1beab",
".git/objects/ac/223bde63ec22aed07532b161c7afd35ed37e59": "d6dff45299bce171e47c68f90a8bd21c",
".git/objects/85/2902f9d52a094132d76099b9b9a86b048839ca": "1f1a9a7bed85ab5da54282365e6256d7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/5e/faa09434711ff169fdd036d5d9c37423066932": "26718cb085b6577fece69d38de0a825e",
".git/objects/5e/52b58e5fbbc3b7d2b5c8cc27d07c3b19b9fc20": "5f006ce80abdbde08d9fdcbc07a10c40",
".git/objects/c8/44f937d6f007196f478af9833a7ff78caa78e7": "46ff500a85317d75445fccac55b89800",
".git/objects/c8/c90b7c2c97e1f78ab3c09687d0d7f9a2a60cae": "4d51cc92b66c7944539ec97202c36527",
".git/objects/52/2c26470664ec708713cea2bfae387fa2f411f1": "f2967edd7be48f23f6bdf7911251274e",
".git/objects/c9/0eaad1ef64a94faa4b939ea40c9325de8f875f": "2e94eda72d1b893a77aff3709647dcc2",
".git/objects/ff/5646175d51a32c178ce0902ce8759fc93f47e3": "55a8d1870036ffe48045fa030f28f583",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/f2/bc442206ddb6b0500800a241bf9b4ba6784815": "acda529750f76042308b645960ead482",
".git/objects/b4/1f62fb73f9edc3c364fa1465b7cc6e22627c36": "1754ba98dcb13f2452766edf35a73ab2",
".git/objects/12/ac26e1d6eed2af5c0e771cd7e27fa36265657e": "ce0be34ae888e3b8be04a7e92a6f22b6",
".git/objects/a0/4363b6826638a0a0b6260cfc640c2e74355563": "b7894e4283670505541d9668d84e31d4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "dbfcee24b5fc524bbcb04ad72b3528cb",
".git/logs/HEAD": "c2a76f40020a4cec32803401b92da295",
".git/logs/refs/remotes/origin/main": "58d0be6c781c61db3e574e23c4fbcea9",
".git/logs/refs/heads/main": "c2a76f40020a4cec32803401b92da295",
".git/ORIG_HEAD": "09903613c11cb1b5b52a161a9d429b8f",
"assets/NOTICES": "97c3f97aa322d9259bbc4164f6f7b935",
"assets/assets/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/FontManifest.json": "e1758b1fe1b89d72debf7f3b853bf069",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "8b07bb687995c3e38117b8a06331b76b",
"main.dart.js": "6afa2b425a295d947578f0b5f4fe3827",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f373cd364e3d6d3609ba9dd049a44d46",
"index.html": "6796f688e524deddc3b5e16633ca263e",
"/": "6796f688e524deddc3b5e16633ca263e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
