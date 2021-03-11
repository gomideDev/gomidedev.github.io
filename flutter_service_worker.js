'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c60f2c69fb9cd11be76b8af853063df2",
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
".git/index": "ca1d68ba249fa61808c5e2a86c27c3cb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3e54060d695ca7c3fa329f7a12795997",
".git/logs/refs/heads/master": "3dfcc48d03721a0f89390d3f7986fb00",
".git/logs/refs/remotes/origin/master": "4bf8bfa1a2919c8094fbc10fe14538fa",
".git/objects/06/ba966e32fc924d6364fafb8fdc72d869608304": "b66bcee6e299f0f325316aa642a6c1a7",
".git/objects/0f/34a381d4ba65b7b96b6197f8bdaa38f47ca7f4": "278b1312cb36c501b0bb5bd6e600a701",
".git/objects/11/7db7d05f8dcb3c4a5a916ccff01658809adae5": "a89a799ceecacd855fc1375f34ad88ab",
".git/objects/12/0ab084a1c66a4e35476232624b45931d16bb50": "128174fbcc9999583f797ac21173bd1d",
".git/objects/12/c20036938ff5c8dd4cad0d7c3ddabc1fbd93e4": "fddd26cc3f52b1130f130169c8cca95c",
".git/objects/17/f2faa57252b819687da00da7b30b06110b7ad5": "a3cadad2692058da83eb76edd4199e82",
".git/objects/19/354a7df7a0f80fd788392d06b5f673f069158c": "dba9cbbd339201c972b7ef50176c5e76",
".git/objects/1a/ecfeab5b220d0a200d576d763c13f978692b11": "8716eab26e1aa4399dce7618177d0ec8",
".git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
".git/objects/1c/f263882a61904d8ecb5806d71f43bdae141cec": "e8502199a905f175f3eadf382e833eb7",
".git/objects/1d/6da68a2d93d039542a0d7144a29219c8e99e23": "d1d55402fded3642bb8f2dcc757e191c",
".git/objects/1e/87cf89efd39785d17d553dc6360499c8666827": "66df94f2de8587a849c96a54581eaa73",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/39/fabf50480e58a1bea999a8ad158f3dfc5ef489": "49c2078028d5be0cacdd8710eb35c629",
".git/objects/3c/377e484b179983f5e40e34915891b0d00ce7c2": "72d6322b30485bdb8887b499465609d4",
".git/objects/3c/ffe197357af30fc13270ba093c9260dc68f542": "2d139c98737bb33be564d52fb82630bc",
".git/objects/44/dd504606b52759990ab0cbffb9e7fa510554a3": "9a32a26a4fcee9edbd7131f4b930b675",
".git/objects/46/3d2ddc2f8fb17e5ff64306816a1468f5ec50d0": "feac4484f9b170ab7aee4339d063c759",
".git/objects/48/b033dc5185ce5a5e528ab97fb2ad4f7262371b": "5431179c96186b8b62099d09899f9744",
".git/objects/4c/d0cf4ee0d3f220babf4b8739f75ddb2e72af46": "524de02a0029cfe8c0dde9f9ae871898",
".git/objects/4d/068ac81fd2619dee45d58491007ae407ef2dad": "b0a3c5bf86d3cbd1cde400490699e7b2",
".git/objects/4e/5e5524f6642a4fccf348599d74284bdd6be78f": "6fd9c67ce9d5537f988f82a129c97913",
".git/objects/54/ebea978c010f1276fad925ff94a3d71a7d57a3": "c084fce4d5747a7f5d85052f7f55babb",
".git/objects/55/4ec54b2383a7d4fea44f161f5cb0d953867022": "58a9d1bcfae6c981c36b9bcc2c08c5cc",
".git/objects/56/d06cfb9c7633e3a5c299ea78051f42922e4b99": "6d7d8f75c98a90986a68b4ef9cf52b8f",
".git/objects/57/9522ea02d4c5ef73094053260ed2a04c0f8e41": "f1380fbf24dac078f046f3dbe5611e25",
".git/objects/5e/354146572edd4ec28956cc52e8d00435f4b4ce": "88afc0e0a8fb9b1ecf54b50daea4c754",
".git/objects/5e/a225faa35cd8f2d3027ac52ce72c08ef86616f": "b4ed2020a5b449d2b4552dda4ebd3e0c",
".git/objects/62/127107028154e216021762bf0fe57290193ac1": "f915b30d9f98d1a92f8ed60a9000b072",
".git/objects/63/cda5c4f3ecd041b8854c9b95578444d1e9799a": "7bb0fe185932d51f13469c3881cf3ea2",
".git/objects/68/fcbea52fbc30f531d3270e377f55c0b53281ab": "7676e716aa385e824818f238dbb509d2",
".git/objects/6a/19fc212c967064699405c851209910aed2704d": "36ff07fd9c4f53ca2e253cbb8bbe8070",
".git/objects/6a/b3444651b3493bdff5f37d29ae347096fe6d02": "596bea9e6d5f4db1eb76011fa55eff0a",
".git/objects/74/0a0afb8252c316568315daef7254f5f8aec988": "6119e7acc41f34ec745983eb1a4d8f87",
".git/objects/74/d42fecd5e14dd17753a0fc93601dc8358f103f": "0bad1ee69ab91d854aafa5742c4a5413",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/c7c7a2bfdf71f3889a32bcfc51a16c44c11578": "5a76708a819ab8e74a24f9f788feab23",
".git/objects/7d/6ed2c8d0653b73cd5c74c1c18ad500d0672f1e": "c89c46b4b55f0f101d20c7fdf19a720c",
".git/objects/84/75f072f05b695d72ec4c61e319166db32a63cb": "c0df69dc44808b873140216df45a9218",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d3caa3b168061523b48d097888fa33b9403024": "3f14215aeff8ea449c83ee73afb8478e",
".git/objects/8f/b51770e8f94618131f23c6f1cb755c0a0dc163": "f5247e5b4905d2b9f8bad0b522e88033",
".git/objects/92/f1026095e4ab2255abe46180bd19291d228e7a": "42f1e183fb6ec34fb4b77c9c08636ee2",
".git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
".git/objects/9a/f9a6c883ed2b296ffc81aef2c6230032a1c244": "c0cbed436856a1a63121ca3715564765",
".git/objects/9b/c2d149f4e7b801d19aad10337f888d07923a83": "5653cb9eda00540e93f047ae381b7f88",
".git/objects/9d/cdf198ff3fdda4f9ed069978790cecee71ba3e": "de314cab56fe17171720930de59aec30",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/12c2878f439d20adf5ffb0da7e6b8eeb8ad77f": "5b81a9442eb37f14d81ebe33b9940cb8",
".git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
".git/objects/a9/5c1f28c86ac8275ddbe623522ebee648fc1e9a": "be8d56811e95bc82840408fa38a72759",
".git/objects/aa/88662ad47cccfd38a368d2d79cdee3ffa8e755": "f50e117a3c4bce154c3e2e4ff79de572",
".git/objects/b0/738dd8fab62988e1653e608f729b4f8eff1dd1": "3977424886a7127b8f7090b1859633a4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/5f9c5f164e56aa768ca3df8bd0af4c9cfed8cc": "0a2b45c35d7499ce84e7ff59c2f84490",
".git/objects/bb/6f4411820655a2da4f08ed749676a743d16c51": "73c11232f20333743c1293da570b4acb",
".git/objects/be/3b71d95ae7e09acc34e48a4d44315414718524": "131980569e30958b04fb2171abdcd208",
".git/objects/be/e24109e2548b79f9a4fa35bd1c470c6824779c": "42c06f9c9fb6fd29c0ac339cd84b7d81",
".git/objects/c0/82c83335931128f972c3f05dc6efb4e28482f7": "8d12323e5841a4e0bccef158f20dc87a",
".git/objects/c1/f65e33cd3cafa4ac502edbcebfe67539fb0195": "67193376524992e920aac4db83cd56bc",
".git/objects/c2/95040370dfd25f63657116037980efb105fb4a": "a10a11a10e2352e5cc679415d3e51956",
".git/objects/c4/b6c0316f255ada19b2ad902a6b62eef6b080c6": "37156255a07e71e79336f0b90042739c",
".git/objects/c7/e0bb979e6b3413a4224ed64c9ba64cb66cde9e": "d8435116581117f78dc15dbf71ad9bc0",
".git/objects/cb/22353d4dcec6e098bb49e23ea63c20c35190e6": "feee27f4842b80eb465e233c1f1c0029",
".git/objects/cb/858d3262105cb2b194007eea73df6b2af93c15": "797a2596a3c29a5c46952ab16a9a5485",
".git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
".git/objects/cf/7e30e2db0075f0894eac5bdb8d919d0e760e34": "9b1339df8c5dee0ab1471a04fe4964e2",
".git/objects/d3/28907a095ab74688f3221d08ca2fab78542390": "ce04182823cb8ccc12bd94f5c2e7700f",
".git/objects/d5/1120ee67e2f732701148383adf8a68d8e3e377": "6a086df9773470b254bb1de251fde6e6",
".git/objects/d9/7ae82ed55e2f15764bbe06f1c08c7b66cb69dc": "6e61bc2c98df99b24af995e743628738",
".git/objects/de/1629fc0054fc32828a67aba65bb73f37e50bb0": "9e3495aabcc7f0a5ad1c52e323a8cf0d",
".git/objects/de/bdb3b7089a7a7fb79522ab251c548b1421ce59": "98f4da60406976ecc2ca1fc23d8710e8",
".git/objects/e4/d082ae3e0cb8debf336151ffe9604a1e1fdab4": "f8b288fa57cb1ddcefb7791a1c5319bd",
".git/objects/e5/555cbe93096a78898c788d102bd3ee34badb25": "74bf1f4f4462b7e673a4607907b804b7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/5da8d9f499af3035679b357fa1b0adc2f3a1c6": "2ab37ca0cd7129801281061ddd429c08",
".git/objects/ec/700b7363b02299361c85402c8aa7925230193c": "e68b6fdab9505ff7b99335e6cbdf9668",
".git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
".git/objects/ee/45e883ef302de8f3580fb121584b507fc757c6": "db4b82086cb0c73d4f0de674db875919",
".git/objects/f1/d6ca3df7d021ffc560e8c432b5fca7e4d06ab8": "bf21919ba95400e0c466b1ad07653ae1",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/8afa7a9ba0e74cba6787388a7ae47bfca2ea50": "56f5dacb12155751c1ae9afbde4f23c4",
".git/objects/f3/99198156c4456b3970cc2b5dbfb8e1014b5723": "f57327acb4b2102fc2ba42ce26cba35d",
".git/ORIG_HEAD": "d021ee26a9060b299416114564cdcb02",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "c5e5ad56df0e17df6cc6add912f17590",
".git/refs/remotes/origin/master": "c5e5ad56df0e17df6cc6add912f17590",
"assets/AssetManifest.json": "b4f461c3a21a1a5667480658c7106915",
"assets/assets/fonts/FlutterIcons.ttf": "3cf7c5dbfe700e6287f388829d819770",
"assets/assets/fonts/Ubuntu-Regular.ttf": "238c32cd050af8099eeaa8f50dd04ec9",
"assets/assets/images/1.png": "481e70e16cb614700aa4d97a0a593a19",
"assets/assets/images/2.png": "d8fe267445e02101490e0733235384f3",
"assets/assets/images/3.png": "e18585d8040f4fec4fc69eb6ef0848c8",
"assets/assets/images/4.png": "f0c511a8dde17bacf5a07f61c8156913",
"assets/assets/images/a1.png": "232329ee0e044b997fa700f13aa6e421",
"assets/assets/images/a10.png": "fb8602f7be2eec5ed701e65004dbe10b",
"assets/assets/images/a2.png": "9c50512300f621cc7b4ceaf5b59f28c6",
"assets/assets/images/a3.png": "99639976d5a761e78554d012d280128b",
"assets/assets/images/a4.png": "98dd3c5829a1e54a35afaaf214985d98",
"assets/assets/images/a6.png": "7ace2660752eb32176f82d3adeef6699",
"assets/assets/images/a8.png": "3ac9a3a3bbae21c4e92e0a575cc5dd3d",
"assets/assets/images/a9.png": "8b5b4498c5807a0f945ece1d2e4b7dba",
"assets/assets/images/bg.png": "e864db697af644144857548316e42001",
"assets/assets/images/cat.png": "de037ba647104ab27de665d37979cf98",
"assets/assets/images/dog.png": "fa1e64cd80b270d2bfa497f6b3a746ee",
"assets/assets/images/foddi-screenshot.PNG": "46c334caf8ae881dfa7127c73f4a95ce",
"assets/assets/images/horse.png": "7bb1013d927d4b9e653ef407342891ce",
"assets/assets/images/logo%2520copy.png": "de52cfda86aa03b4f5a065a200230a2e",
"assets/assets/images/logo.png": "1338a202051aaebee6f872551e0a3335",
"assets/assets/images/map.png": "c0bb6a5e28c56193e74e0d484d559a0c",
"assets/assets/images/parrot.png": "19f50eff9c17ae0e89e431e8b7531f06",
"assets/assets/images/person.png": "b6d4e929c2dbf905c3ce8e50f082755e",
"assets/assets/images/pet-cat1.png": "8d0a7de6f2fa896fbcb0748e1f53a0e7",
"assets/assets/images/pet-cat2.png": "76b65e1994eb8ebad952c4de4c6f9862",
"assets/assets/images/pet-screenshot.PNG": "f820461e951c69936d141f0aa8df62dc",
"assets/assets/images/profile%2520copy.jpg": "417ce2db65a1571ac53e1a00ed2aded9",
"assets/assets/images/profile.jpg": "9a58956c455bfd65d7326089bc2bb962",
"assets/assets/images/rabbit.png": "0df473885bfe8166e28f4d682be123fd",
"assets/assets/images/virus.png": "ccb2be70221b1aaabb6a282e4e94ece9",
"assets/assets/images/virus2.png": "c893f05401926f4e5bad02e4f8662aff",
"assets/FontManifest.json": "5d496c1e8da7a4fb22e129edaa1ccc21",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "5a03be5cbe1e88af81878de042902b48",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "19e950752be4edd06ecdf79c4e9b9eba",
"/": "19e950752be4edd06ecdf79c4e9b9eba",
"main.dart.js": "10a14ee761afe9660ce1b66df9558635",
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
