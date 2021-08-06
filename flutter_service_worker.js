'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/NOTICES": "fd045d81193babc829acfdee44494663",
"assets/android/gradle.properties": "c1f7b86be2b7abaab24252ad4d5332ca",
"assets/android/settings.gradle": "b0eb7b9e69a92f62d2b83d5d7acd3d29",
"assets/android/local.properties": "b112f7336cef4ca84c43989c7df69466",
"assets/android/build.gradle": "e33cd999b1f36fa9045b9ef8ce9a397d",
"assets/android/gradle/wrapper/gradle-wrapper.properties": "ee042a4337dc241e1b0274428852367a",
"assets/android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"assets/android/flutter_login_ui_android.iml": "e631be658ada5ed327bf47f851a6ed5b",
"assets/android/app/src/profile/AndroidManifest.xml": "d72a8ff03703b9062a2726187c953848",
"assets/android/app/src/main/AndroidManifest.xml": "8972f5e8b37161fe41ecfa4277ca7507",
"assets/android/app/src/main/kotlin/com/example/flutter_login_ui/MainActivity.kt": "b4ce525da944ce793c43176a18939ad9",
"assets/android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "743f48bc835d23b12ae12aab2a057777",
"assets/android/app/src/main/java/com/example/flutterloginui/MainActivity.java": "e015903ae9f73554530239efed46d375",
"assets/android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"assets/android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"assets/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"assets/android/app/src/main/res/values/styles.xml": "69f64c5cc9370790f33e297555e6230e",
"assets/android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"assets/android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"assets/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"assets/android/app/src/main/res/values-night/styles.xml": "38d2da8c073ef21cb1ea7c8bb237caa5",
"assets/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"assets/android/app/src/debug/AndroidManifest.xml": "d72a8ff03703b9062a2726187c953848",
"assets/android/app/build.gradle": "e46654a53eec6d083f755bd0f87e4b3f",
"assets/android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"assets/android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"assets/assets/icon_logo.png": "013a05710509e6ebeedafd9c524b81a2",
"assets/assets/logo.png": "0a5264e77dea06b41656224b7f6f11f1",
"assets/assets/avatar.jpg": "e670e0fc42ad814b5b54ced740fe89ac",
"assets/FontManifest.json": "da7e19d82f41be76ee5110f4a8f875eb",
"assets/fonts/Montserrat-Regular.ttf": "9c46095118380d38f12e67c916b427f9",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "ca06a62c3a3cbddb42e0a320238ec314",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"manifest.json": "0113493ef8c209af8c909d508f9aa2da",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "ef36085280246b2847651f9f25ce9e05",
"/": "ef36085280246b2847651f9f25ce9e05",
"main.dart.js": "c509978e0217a4ff705e55e2b296a4b8",
".git/index": "f9f9c6d01f3c62d66a0e23c9ccf13b2b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/main": "f7e66ae43486001fcbc3a0f7c664fb16",
".git/refs/heads/main": "f7e66ae43486001fcbc3a0f7c664fb16",
".git/logs/HEAD": "de555b0f79df894a315523985ccf32af",
".git/logs/refs/remotes/origin/main": "0c0f1ee20d83b62376d1b68bd2747ca3",
".git/logs/refs/heads/main": "611668a0150c92cea5a78953f1db7195",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/pre-commit.sample": "3ba41bb5b6fe126be0c04c17ceb564ff",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/COMMIT_EDITMSG": "e598d0f0e011356b3e85738424847137",
".git/config": "ecc61cb3b65ffe0e4613feecd7351bea",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
".git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "76eb293b5c9304707852ee681a90e8fc",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/14/8da3098986ea6c098d5a7b1f8e9cbf6b427b56": "9bfb32c54891d8b9226a37dddd010698",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/16/55863862f0447337c70b8104839b814e5ca7f0": "401b1a086c23a3a0eaa9a6aa8f4bead4",
".git/objects/47/258c835e077afb450c84bd518a558a4051804b": "e3307995629dcac3d2a271410ac54cf2",
".git/objects/ac/24788b5d95f42293a1a717c082680fe66ac2f4": "45f648230e2012fd12645ee5041a7944",
".git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2e5a4148dc9ebc15b186574d9fb60432",
".git/objects/8e/14e64a72eef74b4771b53469b45a3c1898c9c0": "862b4641f6b7697869b60d192dc13a08",
".git/objects/20/7e0213b20f85729bf40419daf1744126b9a65e": "62cdc00432ddb78603b5bc33c15f121f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/28/19f022f1fd30e502134e7f754bc700af9da80b": "85b6b71008907fac7d52e4506257bfff",
".git/objects/b8/bdb404406d853d3b6d450ee06255b85ddbeb64": "efb1fc01dc07d6650d51afd240cda937",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/f7/4085f3f6a2b995f8ad1f9ff7b2c46dc118a9e0": "c04177ec14f012cb2c99851a5e1ca941",
".git/objects/a5/07f66782cbd36730886d14a2b4a06a3ef711ad": "50a6be16650d9bbf107589fca5e570d2",
".git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "a603712ac5534497bc4fd35ebd46b0b7",
".git/objects/8a/d84792dc83cdeb0a821b66103659a21e9fba19": "610f93a5f06af64ba3033f7bcfa78ce0",
".git/objects/8a/70fc07028087ff34db1c63222f6bfaf62ee419": "a6770afc15b4266de33c70fa98648cc5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b6/f982e6046b7c6b7a4bd8ee06238be874a4a29c": "2b19d59c4534c9d5b4734b9352855858",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/63/887ffc3c384c23ce7f78f29ff437f06e1abb76": "5d5109b901e2725555a7eb18a9b46789",
".git/objects/7e/6375af9b71adf019a23de372e955e8d46e8b2f": "6b161511dee44ded4dbe302b19c06413",
".git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f47de426b1d6c272d2659c734c9de80f",
".git/objects/b4/3b569f8a358e950c1b6837dbaa92cd76eefe8c": "23c9c995e38b13aa127e7bc859cbb005",
".git/objects/00/fa4417cfbef8673c47c86eb24033fcd97056a8": "45debb2445f3f0841e9128c562f63708",
".git/objects/44/9a9f930826851b495d039f0c0d57f247536615": "64152505999d8f1e4fd9224415d1ffad",
".git/objects/bb/8a303898ca7175c291431ed00b246dea6ab6f9": "e7e70ead6d3bc7b74f2b1b4368fec204",
".git/objects/67/5a0817eb6546ee6a5bebce1a121faf700df400": "a022806fa63c2bd0f1576817d83f8630",
".git/objects/3e/9db0564b4eefa6df44fc54ccabcc718240b0c1": "0995d9495997b495a172f044c4710467",
".git/objects/38/6110120de3af5a72f4910ef1536f12cf43de6d": "c9c101b5f1e247a4027de45e8239d05a",
".git/objects/35/c0add838fa88f2b9950e5b7f5c2fee84223c34": "9453b49ee54097b52737d3012d8c6894",
".git/objects/4a/b22c82f1b0fa1d49e65dd13d6b7243b99406ba": "ec804c1f430fd957a258191178fd8c91",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/8b/8985b4e1d73059a02a87f561ac3741039aa9ea": "eafbefd2248229991550b91d67a21049",
".git/objects/8b/d86f6805108dec87d0be823bdb1384bec8aa19": "55d426b0aa04131e9766164b5c6ee5b1",
".git/objects/8b/3d21153b7ae2e21819cf8c09fb04a9a4833ce2": "4abc99633c6e50863f8b597cdce102c2",
".git/objects/d7/61c53178cc135119f252e047fb2f6e08512ed0": "54c64d1a96d272170806761ec67134b6",
".git/objects/ca/9ac7808bafcb1471c1b38377ac445887a485f0": "99761ca43fc479ef217640c17263c7e8",
".git/objects/69/0dbba97f29a0d912cb5f24e1591c2883d489da": "efe79b3600ee5ddf8649e80f229a4f5a",
".git/objects/66/6e7dc527e0234362ed28a09901c63366486a54": "e2aa6bca89c4e2f9115789fa6a078b5e",
".git/objects/11/65f8fdcd7739f492fbb0e94ce06e09929c6ffb": "4f9648d5340e8f6c6e18f238a66328f7",
".git/objects/bd/42e0e1b7067007eabc4697b894930d240c5f26": "79f10003ac49917478352a29f859bf3b",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/08/7761d5ca20d57397eb17ef5664133aeb855f0a": "4ae1636105e71dbb4ae82e1db7d6260a",
".git/objects/ee/0519b55930f6313907ab146ccd4982e6fd2bcc": "52a302f699bc57149bed09a474b75fef",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/97/5c75804750c32be06e22a4da6e93b8c056ea6c": "84e0aad68f5392089b85b4e06ca4d476",
".git/objects/36/cbce676bcfbddfa689b9d0abf23ac40fd2e60b": "8c963983d40f36e775abdac45c7810e0",
".git/objects/04/0b079edfd6063885de475f1f32a50247ed004e": "9dbc3a168c9ae81a710897c12c18dece",
".git/objects/5a/2f14fb18f6e8b8c4308ff0f0dc187d9d27a5aa": "cd730fc3b9291a1a04788c027bfd6f37",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/3d/f3d1a91dec9f419bbf32c7dbd7ffe3049577b7": "2da7aed2720fec500109845fe6130ee3",
".git/objects/3d/e13ba04053b3731cebd3d71a54711f957fd2d1": "770211acdb5ea78a6ed7d712f7faeead",
".git/objects/2a/3d9ea74ca92a8b428c397c1d37e31ad1fb1e66": "ce0e51d584e2d37101b14713b1fe6468",
".git/objects/2a/2b2aaa67884c57c8e83921345ce852b7c7dbea": "35c4b258ae6199678ee161d0468b4c5c",
".git/objects/46/b726bd53d47e61ba941eb355b9c8633ebbaa20": "480b1cf7af4c452e5722818c06aca052",
".git/objects/46/a917ae0dc67596f2f05f72e0a6a6b856f9e4f8": "2f00c73055b262918de3a60767b1e4f9",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/a6/368af0ee7628fa194ef8fe3bbe4523113d6e05": "bafb07bb0e67f8a015ad7c670f7072fd",
".git/objects/f9/ecf5a31d614ee38698f8db5020e2fa5bc17de3": "ec08b5f85c0df97b48040ef4b9541c5e",
".git/objects/9a/b975662dc48dea040691f0cb43f5480395171e": "a45c48bb8971b74b8d1684c5f85c93e4",
".git/objects/f0/155ba0e6b3e422628eb73c05e28cef655985c6": "b990d104bee5756cdcb8f03bf0e881a7",
".git/objects/a0/d0dfc936c81467f1ead75e76506f7cc3bf6904": "0114b46f983ad1c200fd1445f3e38b79",
".git/objects/55/25959088a9d1e71788f48aaede6133d8c8705b": "1fe3607f6f37d758295dce7a73ff8612",
".git/objects/18/999696a6a38a49db82f0985800071ee2884f24": "15ff2aaff6fa253e9eb74b984ee2a81c",
".git/objects/ed/6e68e2d9c3bdd2c36941fbfe9161f108b684d6": "96316d311b9ab09edc39a8a515efc33d",
".git/objects/c2/303fa8393ee383847452d67acf84f6418c143a": "f23d7d66cc2f6f0a1fd84511ed7f0d92",
".git/objects/0a/741cb43d66c6790a2a913fa24c8878fb1ab7b5": "307011b7f3f57c355deba17946cc9f69",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/1e/22da2a8b8580644ff209508da8715d406b4c09": "7ce83aa894b11a478b6ff52a6a59a147",
".git/objects/65/6b3e39579e033fd76ce8e17dc4fffb9535ae56": "7b5018fe554f5e1e665fffa89fdf6808",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"version.json": "1fe36b46cfa60bf56d6e6a6e4aed5ec8"
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
