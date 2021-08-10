'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".firebase/hosting..cache": "b8f548cef4aa7643d5cc23c9ee227e34",
".firebase/hosting.cHVibGlj.cache": "de80ac844ea4c6c60b9a4838c96f4369",
".git/config": "128c621ae0ef3e53de876279729aca02",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "447e5bc175ae6707e83ef2ae8dd423f6",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-commit.sample": "3ba41bb5b6fe126be0c04c17ceb564ff",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/index": "f8d8fa66b6eb0c81b85c207c383e8848",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b8450287bd6aa7a6fa27c23c28382d9a",
".git/logs/refs/heads/gh-pages": "cc2dc68e1b7817b9f4cb7b797217ae22",
".git/logs/refs/heads/main": "6ed0354b381d8488f7d3af73377dbbf1",
".git/logs/refs/remotes/origin/HEAD": "6ed0354b381d8488f7d3af73377dbbf1",
".git/objects/pack/pack-78f633a3847da619f2d99429510f36cce297c361.idx": "22f2e9c20857418f54cd04712ab37e5c",
".git/objects/pack/pack-78f633a3847da619f2d99429510f36cce297c361.pack": "c1ca041e5cc1326632d54c53c0f8a74d",
".git/ORIG_HEAD": "369b1646cba4463baf7bd6ab006918b1",
".git/packed-refs": "ed2d52e5d0460779af7c86f3b4ec51f6",
".git/refs/heads/gh-pages": "369b1646cba4463baf7bd6ab006918b1",
".git/refs/heads/main": "8cf08b718e4a595434c54bebf206bec4",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".github/workflows/firebase-hosting-merge.yml": "a27e3470ab90291648a1547b354d119f",
".github/workflows/firebase-hosting-pull-request.yml": "49ed5116cd5828a79a4d89263a210d65",
"assets/android/app/build.gradle": "e46654a53eec6d083f755bd0f87e4b3f",
"assets/android/app/src/debug/AndroidManifest.xml": "d72a8ff03703b9062a2726187c953848",
"assets/android/app/src/main/AndroidManifest.xml": "8972f5e8b37161fe41ecfa4277ca7507",
"assets/android/app/src/main/java/com/example/flutterloginui/MainActivity.java": "e015903ae9f73554530239efed46d375",
"assets/android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "743f48bc835d23b12ae12aab2a057777",
"assets/android/app/src/main/kotlin/com/example/flutter_login_ui/MainActivity.kt": "b4ce525da944ce793c43176a18939ad9",
"assets/android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"assets/android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"assets/android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"assets/android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"assets/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"assets/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"assets/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"assets/android/app/src/main/res/values/styles.xml": "69f64c5cc9370790f33e297555e6230e",
"assets/android/app/src/main/res/values-night/styles.xml": "38d2da8c073ef21cb1ea7c8bb237caa5",
"assets/android/app/src/profile/AndroidManifest.xml": "d72a8ff03703b9062a2726187c953848",
"assets/android/build.gradle": "e33cd999b1f36fa9045b9ef8ce9a397d",
"assets/android/flutter_login_ui_android.iml": "e631be658ada5ed327bf47f851a6ed5b",
"assets/android/gradle/wrapper/gradle-wrapper.properties": "ee042a4337dc241e1b0274428852367a",
"assets/android/gradle.properties": "c1f7b86be2b7abaab24252ad4d5332ca",
"assets/android/local.properties": "b073da6e938c5df91bcaf93506f400b2",
"assets/android/settings.gradle": "b0eb7b9e69a92f62d2b83d5d7acd3d29",
"assets/AssetManifest.json": "b36e25fa43e4a27480dac0e68ed4aac4",
"assets/assets/avatar.jpg": "e670e0fc42ad814b5b54ced740fe89ac",
"assets/assets/icon_logo.png": "013a05710509e6ebeedafd9c524b81a2",
"assets/assets/logo.png": "0a5264e77dea06b41656224b7f6f11f1",
"assets/FontManifest.json": "da7e19d82f41be76ee5110f4a8f875eb",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Montserrat-Regular.ttf": "9c46095118380d38f12e67c916b427f9",
"assets/NOTICES": "fd045d81193babc829acfdee44494663",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"CNAME": "99bd40c5e92ee86bbb002d3ee8c1d59b",
"docs/index.md": "c50df1cb8623136e0093e82c657d6a1b",
"docs/_config.yml": "d178df8a46be3ea7f599296e24430ce0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase.json": "6bcf42ed79fb26c537250453f0bdd183",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "80df1eab45a18d4c84da386abe1e3478",
"/": "dba9529e753f0cffd83125db4ca576b9",
"main.dart.js": "a8d1c7136cdadcedcee15949047576b4",
"manifest.json": "0113493ef8c209af8c909d508f9aa2da",
"public/404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"public/index.html": "dba9529e753f0cffd83125db4ca576b9",
"README.md": "47db515d729d166f6c266427b80c37a4",
"tags": "afcc54c63c09edc69d6d3dd60060a373",
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
