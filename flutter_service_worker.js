'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8833bf75a3c54f38944e60fa31f80634",
".git/config": "225d8ca0af8d3230c57a5dbebd891942",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "822f72570136f47bf67a96149869d82d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4ab8f4f173e01398e97f51e5f8786d17",
".git/logs/refs/heads/master": "b08057e31a44d6900b6e11cac72dca7d",
".git/logs/refs/remotes/origin/master": "8fca901f86beef235d43f2b290bfba26",
".git/objects/0f/34a381d4ba65b7b96b6197f8bdaa38f47ca7f4": "278b1312cb36c501b0bb5bd6e600a701",
".git/objects/11/7db7d05f8dcb3c4a5a916ccff01658809adae5": "a89a799ceecacd855fc1375f34ad88ab",
".git/objects/12/0ab084a1c66a4e35476232624b45931d16bb50": "128174fbcc9999583f797ac21173bd1d",
".git/objects/1a/ecfeab5b220d0a200d576d763c13f978692b11": "8716eab26e1aa4399dce7618177d0ec8",
".git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
".git/objects/1e/87cf89efd39785d17d553dc6360499c8666827": "66df94f2de8587a849c96a54581eaa73",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/3c/377e484b179983f5e40e34915891b0d00ce7c2": "72d6322b30485bdb8887b499465609d4",
".git/objects/3c/ffe197357af30fc13270ba093c9260dc68f542": "2d139c98737bb33be564d52fb82630bc",
".git/objects/46/3d2ddc2f8fb17e5ff64306816a1468f5ec50d0": "feac4484f9b170ab7aee4339d063c759",
".git/objects/4d/068ac81fd2619dee45d58491007ae407ef2dad": "b0a3c5bf86d3cbd1cde400490699e7b2",
".git/objects/4e/5e5524f6642a4fccf348599d74284bdd6be78f": "6fd9c67ce9d5537f988f82a129c97913",
".git/objects/55/4ec54b2383a7d4fea44f161f5cb0d953867022": "58a9d1bcfae6c981c36b9bcc2c08c5cc",
".git/objects/56/d06cfb9c7633e3a5c299ea78051f42922e4b99": "6d7d8f75c98a90986a68b4ef9cf52b8f",
".git/objects/5e/354146572edd4ec28956cc52e8d00435f4b4ce": "88afc0e0a8fb9b1ecf54b50daea4c754",
".git/objects/5e/a225faa35cd8f2d3027ac52ce72c08ef86616f": "b4ed2020a5b449d2b4552dda4ebd3e0c",
".git/objects/62/127107028154e216021762bf0fe57290193ac1": "f915b30d9f98d1a92f8ed60a9000b072",
".git/objects/63/cda5c4f3ecd041b8854c9b95578444d1e9799a": "7bb0fe185932d51f13469c3881cf3ea2",
".git/objects/68/fcbea52fbc30f531d3270e377f55c0b53281ab": "7676e716aa385e824818f238dbb509d2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/c7c7a2bfdf71f3889a32bcfc51a16c44c11578": "5a76708a819ab8e74a24f9f788feab23",
".git/objects/84/75f072f05b695d72ec4c61e319166db32a63cb": "c0df69dc44808b873140216df45a9218",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d3caa3b168061523b48d097888fa33b9403024": "3f14215aeff8ea449c83ee73afb8478e",
".git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
".git/objects/9a/f9a6c883ed2b296ffc81aef2c6230032a1c244": "c0cbed436856a1a63121ca3715564765",
".git/objects/9d/cdf198ff3fdda4f9ed069978790cecee71ba3e": "de314cab56fe17171720930de59aec30",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/12c2878f439d20adf5ffb0da7e6b8eeb8ad77f": "5b81a9442eb37f14d81ebe33b9940cb8",
".git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
".git/objects/a9/5c1f28c86ac8275ddbe623522ebee648fc1e9a": "be8d56811e95bc82840408fa38a72759",
".git/objects/aa/88662ad47cccfd38a368d2d79cdee3ffa8e755": "f50e117a3c4bce154c3e2e4ff79de572",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/6f4411820655a2da4f08ed749676a743d16c51": "73c11232f20333743c1293da570b4acb",
".git/objects/be/3b71d95ae7e09acc34e48a4d44315414718524": "131980569e30958b04fb2171abdcd208",
".git/objects/c0/82c83335931128f972c3f05dc6efb4e28482f7": "8d12323e5841a4e0bccef158f20dc87a",
".git/objects/c2/95040370dfd25f63657116037980efb105fb4a": "a10a11a10e2352e5cc679415d3e51956",
".git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
".git/objects/d9/7ae82ed55e2f15764bbe06f1c08c7b66cb69dc": "6e61bc2c98df99b24af995e743628738",
".git/objects/de/1629fc0054fc32828a67aba65bb73f37e50bb0": "9e3495aabcc7f0a5ad1c52e323a8cf0d",
".git/objects/de/bdb3b7089a7a7fb79522ab251c548b1421ce59": "98f4da60406976ecc2ca1fc23d8710e8",
".git/objects/e4/d082ae3e0cb8debf336151ffe9604a1e1fdab4": "f8b288fa57cb1ddcefb7791a1c5319bd",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
".git/objects/ee/45e883ef302de8f3580fb121584b507fc757c6": "db4b82086cb0c73d4f0de674db875919",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/8afa7a9ba0e74cba6787388a7ae47bfca2ea50": "56f5dacb12155751c1ae9afbde4f23c4",
".git/ORIG_HEAD": "d021ee26a9060b299416114564cdcb02",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "52280b78b4d89c44c41d6e2fe3768280",
".git/refs/remotes/origin/master": "52280b78b4d89c44c41d6e2fe3768280",
"assets/AssetManifest.json": "4b911a5a96aea83fb61508aac4e12d9d",
"assets/assets/images/bg.png": "e864db697af644144857548316e42001",
"assets/assets/images/cat.png": "de037ba647104ab27de665d37979cf98",
"assets/assets/images/dog.png": "fa1e64cd80b270d2bfa497f6b3a746ee",
"assets/assets/images/foddi-screenshot.PNG": "46c334caf8ae881dfa7127c73f4a95ce",
"assets/assets/images/horse.png": "7bb1013d927d4b9e653ef407342891ce",
"assets/assets/images/logo.png": "1338a202051aaebee6f872551e0a3335",
"assets/assets/images/parrot.png": "19f50eff9c17ae0e89e431e8b7531f06",
"assets/assets/images/pet-cat1.png": "8d0a7de6f2fa896fbcb0748e1f53a0e7",
"assets/assets/images/pet-cat2.png": "76b65e1994eb8ebad952c4de4c6f9862",
"assets/assets/images/pet-screenshot.PNG": "f820461e951c69936d141f0aa8df62dc",
"assets/assets/images/profile.jpg": "9a58956c455bfd65d7326089bc2bb962",
"assets/assets/images/rabbit.png": "0df473885bfe8166e28f4d682be123fd",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "5a03be5cbe1e88af81878de042902b48",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "dc2a70841d9ef041a320cb019bd9053d",
"/": "dc2a70841d9ef041a320cb019bd9053d",
"main.dart.js": "d5a268a11582a70bde0a648570e636e6",
"manifest.json": "ce598ab837ce12c5113edc823e8a7326",
"version.json": "bd74f98d93d95f98a1784e4c30a9c865"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
