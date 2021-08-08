'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "tags": "3549059c5ae54f3f9b3a0f8dd8070e51",
"version.json": "1fe36b46cfa60bf56d6e6a6e4aed5ec8",
"main.dart.js": "a8d1c7136cdadcedcee15949047576b4",
"assets/assets/icon_logo.png": "013a05710509e6ebeedafd9c524b81a2",
"assets/assets/logo.png": "0a5264e77dea06b41656224b7f6f11f1",
"assets/assets/avatar.jpg": "e670e0fc42ad814b5b54ced740fe89ac",
"assets/AssetManifest.json": "b36e25fa43e4a27480dac0e68ed4aac4",
"assets/android/gradle.properties": "c1f7b86be2b7abaab24252ad4d5332ca",
"assets/android/gradle/wrapper/gradle-wrapper.properties": "ee042a4337dc241e1b0274428852367a",
"assets/android/build.gradle": "e33cd999b1f36fa9045b9ef8ce9a397d",
"assets/android/local.properties": "a54be114db2cff3988229a04fe509e33",
"assets/android/settings.gradle": "b0eb7b9e69a92f62d2b83d5d7acd3d29",
"assets/android/app/src/profile/AndroidManifest.xml": "d72a8ff03703b9062a2726187c953848",
"assets/android/app/src/main/java/com/example/flutterloginui/MainActivity.java": "e015903ae9f73554530239efed46d375",
"assets/android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "743f48bc835d23b12ae12aab2a057777",
"assets/android/app/src/main/AndroidManifest.xml": "8972f5e8b37161fe41ecfa4277ca7507",
"assets/android/app/src/main/res/values-night/styles.xml": "38d2da8c073ef21cb1ea7c8bb237caa5",
"assets/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"assets/android/app/src/main/res/values/styles.xml": "69f64c5cc9370790f33e297555e6230e",
"assets/android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"assets/android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"assets/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"assets/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"assets/android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"assets/android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"assets/android/app/src/main/kotlin/com/example/flutter_login_ui/MainActivity.kt": "b4ce525da944ce793c43176a18939ad9",
"assets/android/app/src/debug/AndroidManifest.xml": "d72a8ff03703b9062a2726187c953848",
"assets/android/app/build.gradle": "e46654a53eec6d083f755bd0f87e4b3f",
"assets/android/flutter_login_ui_android.iml": "e631be658ada5ed327bf47f851a6ed5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/fonts/Montserrat-Regular.ttf": "9c46095118380d38f12e67c916b427f9",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "da7e19d82f41be76ee5110f4a8f875eb",
"assets/NOTICES": "fd045d81193babc829acfdee44494663",
"CNAME": "99bd40c5e92ee86bbb002d3ee8c1d59b",
"index.html": "3d9ecb246c04bf279790e22d0025c9d6",
"/": "dba9529e753f0cffd83125db4ca576b9",
".git/config": "e9e9e5c885218af5a1c830b01e7b90ec",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-commit.sample": "3ba41bb5b6fe126be0c04c17ceb564ff",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/refs/remotes/origin/master": "96bde492bff3afee0d12f0a8c8d11e16",
".git/refs/remotes/origin/main": "8cf08b718e4a595434c54bebf206bec4",
".git/refs/remotes/origin/gh-pages": "cab07fb4caa92e168fad8f017813c2e0",
".git/refs/remotes/origin/dev": "96bde492bff3afee0d12f0a8c8d11e16",
".git/refs/heads/master": "96bde492bff3afee0d12f0a8c8d11e16",
".git/refs/heads/main": "8cf08b718e4a595434c54bebf206bec4",
".git/refs/heads/gh-pages": "cab07fb4caa92e168fad8f017813c2e0",
".git/refs/heads/dev": "96bde492bff3afee0d12f0a8c8d11e16",
".git/logs/refs/remotes/origin/master": "d79d29712f5569230546dff5e79f8d3e",
".git/logs/refs/remotes/origin/main": "a90497d116f6ffe949ce2fd947612f6e",
".git/logs/refs/remotes/origin/gh-pages": "ac19b7c37c41f237a17b5a3eec13b887",
".git/logs/refs/remotes/origin/dev": "d79d29712f5569230546dff5e79f8d3e",
".git/logs/refs/heads/master": "e2d742138cd00981d99c1e9f263371df",
".git/logs/refs/heads/main": "9387ed347985e6f3b8d7e1c3d3915dde",
".git/logs/refs/heads/gh-pages": "0dc9236372c5bb44812fc66f19a2ac6d",
".git/logs/refs/heads/dev": "3b8a894707db3d7ca27e4c0f1b1a7e70",
".git/logs/HEAD": "8c634ea93595d9843e82216dfc6e1571",
".git/FETCH_HEAD": "a4b187c52b4fe4806115a357db1890c0",
".git/index": "31d35ffbef008dfedf42492da7ce0ea8",
".git/ORIG_HEAD": "5b9467affb77c0b0c2dac8a8cb08aaa3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/COMMIT_EDITMSG": "877e8e40baf634c558c410f8417e4f6b",
".git/objects/9f/6ebc1ca0ea5a560db276f8c90a06c72bcda102": "c60d951a24903330e66b7dcdf61fb80c",
".git/objects/c2/3072704d5133fd751439233d830a0d0b36d0ed": "b26b5b2f3319e4e0939aa21fa52e3396",
".git/objects/c2/303fa8393ee383847452d67acf84f6418c143a": "f23d7d66cc2f6f0a1fd84511ed7f0d92",
".git/objects/02/1006fd87753538aa5f7750903c791be8632c62": "6d477523c8b14a8dafca9031b0323acf",
".git/objects/e5/4d8d424ce33c508f98c01a09bdc2310451cdfa": "0f28370b51dbf01d00f407370642d4e6",
".git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "a603712ac5534497bc4fd35ebd46b0b7",
".git/objects/c0/a9118da8d55a7cc26fa33276beaf5d880bbb09": "4231170a0840adfaf619d6f51202bc1e",
".git/objects/c0/6fd2d49f56d13fe82bd6b13db09ef5e4437468": "1002ca295f80858e9e901d5b4d315467",
".git/objects/c0/6e433cbe52b3f8b4d1dc8685b5fbee40ffd21e": "b8c0d5e3cf3d69e1a6fac8fcb656d547",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/f9/ecf5a31d614ee38698f8db5020e2fa5bc17de3": "ec08b5f85c0df97b48040ef4b9541c5e",
".git/objects/97/5c75804750c32be06e22a4da6e93b8c056ea6c": "84e0aad68f5392089b85b4e06ca4d476",
".git/objects/97/dbcd4ac13dbf1a58f76466008491c19c785a77": "67b441b5940ed76f119dadca09d0d3b1",
".git/objects/d7/61c53178cc135119f252e047fb2f6e08512ed0": "54c64d1a96d272170806761ec67134b6",
".git/objects/c5/d8c1fc99527178ec98843d5f89bb92a21fac54": "29fc09f939528aa7306c30c218cb305e",
".git/objects/a5/07f66782cbd36730886d14a2b4a06a3ef711ad": "50a6be16650d9bbf107589fca5e570d2",
".git/objects/fb/2a44ad03b63755f7ec1d2c2e6742f08be06c6e": "f013f3fd8adf96f0487dc2aeca8165f8",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/ab/5f88e50d4da40550e6cbeae10708aa919f003b": "8aac5f934f65f0501a6241cfd36058cb",
".git/objects/d9/82157de640cb843fabeef04890327d6207fd46": "ce4f3e3f22899b81db945e873e88fd37",
".git/objects/6f/98b50cf34f4dde207d78784bf1166c79e5a485": "cd1921b903b8cbf4c5864382b0ddc8f4",
".git/objects/ee/0519b55930f6313907ab146ccd4982e6fd2bcc": "52a302f699bc57149bed09a474b75fef",
".git/objects/a6/368af0ee7628fa194ef8fe3bbe4523113d6e05": "bafb07bb0e67f8a015ad7c670f7072fd",
".git/objects/8e/14e64a72eef74b4771b53469b45a3c1898c9c0": "862b4641f6b7697869b60d192dc13a08",
".git/objects/65/6b3e39579e033fd76ce8e17dc4fffb9535ae56": "7b5018fe554f5e1e665fffa89fdf6808",
".git/objects/65/741b83c7e2c1b2d38aca78d8956021dbfa7c0d": "05646a3cf29f13f80551ebb9457b1354",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/13/4b86f15cdf8f6c154e73e925713dc855ea210a": "b575fc5d751ad9fbd01bc22a21bff011",
".git/objects/7e/08cbf07aecbee630ac67c7b83eae25f995d1bc": "ee1400f540553b8ae7028339acb5e428",
".git/objects/7e/6375af9b71adf019a23de372e955e8d46e8b2f": "6b161511dee44ded4dbe302b19c06413",
".git/objects/68/a11e7b0b1e80593cca970bd6be20a8440293cb": "045d4f353b0cf1f0f5eb7c52a71fa075",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/44/9a9f930826851b495d039f0c0d57f247536615": "64152505999d8f1e4fd9224415d1ffad",
".git/objects/0a/741cb43d66c6790a2a913fa24c8878fb1ab7b5": "307011b7f3f57c355deba17946cc9f69",
".git/objects/11/ce12e54e591c877f8dcf1a5136a57980d75993": "f91f20e2f28c039892030450ed5184f1",
".git/objects/11/65f8fdcd7739f492fbb0e94ce06e09929c6ffb": "4f9648d5340e8f6c6e18f238a66328f7",
".git/objects/35/c0add838fa88f2b9950e5b7f5c2fee84223c34": "9453b49ee54097b52737d3012d8c6894",
".git/objects/af/ab0c24f2e71a2148b236e5102379b3ab7a8757": "147235450f4fdd9d228bf508d745a94a",
".git/objects/e8/cbe78bd9bb8c2337d579b4ef85605c752c2f34": "aad5bf276c648ce9d3540f7a0bdc2183",
".git/objects/28/19f022f1fd30e502134e7f754bc700af9da80b": "85b6b71008907fac7d52e4506257bfff",
".git/objects/b5/49ea6e7afdc676e4b6ef51ab97be9a52ea24dd": "29d66fb00e055b5629e2a7cbd50bbb45",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/d3/48fd67ffe003c264cea8574fade303f08740ea": "902b6c86efbb9d94b3405eb3b8779c08",
".git/objects/e1/753baa59d8cda41566c12396cf571491098bbf": "e6c14e207d03e937f576e0c871a52cd4",
".git/objects/4b/74851f3fddece5336ef0b33507c9afa631bb2d": "5ee2e31f4ace3413b410f7e0d8fab916",
".git/objects/c4/192631f25b34d77a7f159aa0da0e3ae99c4ef4": "546c588f67767790fc70913da1a77878",
".git/objects/c4/94fecc8a87c5e28e328394b96f5b6da01f9ed6": "5c3c8010a6e2aae291fa7933db47dd1b",
".git/objects/f0/155ba0e6b3e422628eb73c05e28cef655985c6": "b990d104bee5756cdcb8f03bf0e881a7",
".git/objects/4a/b22c82f1b0fa1d49e65dd13d6b7243b99406ba": "ec804c1f430fd957a258191178fd8c91",
".git/objects/05/363bf1b34280cee4ecc7b7a3b7a096044abd3e": "8e2159019af4a9db37635d269b635c41",
".git/objects/1d/10fdb1833a042ff6e4fdb705b2302dd96412dc": "6a5e27478c3d5fd30c606a1dbe8cf938",
".git/objects/1d/44c57bdd85c360a0d2dcbd13183d5e15596b8c": "330ab80675f84390d7625fa319c75e0e",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/3a/d6bc2f4ea0658e17bd91872f434b106dd9ce1c": "2d1d221406e2a4002234088d2909964a",
".git/objects/04/0b079edfd6063885de475f1f32a50247ed004e": "9dbc3a168c9ae81a710897c12c18dece",
".git/objects/00/fa4417cfbef8673c47c86eb24033fcd97056a8": "45debb2445f3f0841e9128c562f63708",
".git/objects/4e/5e2829f5b964c1da1cbd84a04b1962577d0431": "284f7a47e86f123538689641d07e8af4",
".git/objects/36/cbce676bcfbddfa689b9d0abf23ac40fd2e60b": "8c963983d40f36e775abdac45c7810e0",
".git/objects/36/36e327cd10c0ceed733f558b4539b6e897eda8": "c55413b194abbae854942e6485151eb3",
".git/objects/47/258c835e077afb450c84bd518a558a4051804b": "e3307995629dcac3d2a271410ac54cf2",
".git/objects/53/1f6705abf72c4e8b22b79a2b037a8f8a5dc494": "e4bb9c2245b6f8d636d6ba7f227b55d9",
".git/objects/54/50d2cc0af6efeddcfb88b4738e58e7fb07a461": "ddbc0d63b9dc7016dda2075c337053c1",
".git/objects/54/4a8a8b75f7c32b5db2531d8bc2d121fa61399e": "106b24f7ee5767f6f3da2cc17dcc5349",
".git/objects/85/10ee9b94bd5e88174ad1024f1ecdfe41fdb272": "dc888bb13727964c203d02ec791116fc",
".git/objects/3f/1453100f9c7e2fe3b9c8130e1fd1e492a05627": "67c47d2ebd5961d172bd89fc4f1ed737",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/7a8ee877dadbc37fbdab7784d4bff48bbd0afe": "0813c73152332a162dfd409d818753d3",
".git/objects/2a/3d9ea74ca92a8b428c397c1d37e31ad1fb1e66": "ce0e51d584e2d37101b14713b1fe6468",
".git/objects/2a/5a344e31221e1ae17a038f985ec61fd6d7b3c5": "ac9d358846d48ce0bf3e6fd0e835d3f3",
".git/objects/2a/2b2aaa67884c57c8e83921345ce852b7c7dbea": "35c4b258ae6199678ee161d0468b4c5c",
".git/objects/5a/2f14fb18f6e8b8c4308ff0f0dc187d9d27a5aa": "cd730fc3b9291a1a04788c027bfd6f37",
".git/objects/e7/a723ad8553c762a39f982b8874e1dad84049c3": "4e01ea5a5696be431550b95ffaf6ef18",
".git/objects/18/999696a6a38a49db82f0985800071ee2884f24": "15ff2aaff6fa253e9eb74b984ee2a81c",
".git/objects/30/d2f7841c84e136e5676999da901a71e2814c6a": "50db77263ffcb5faedfa830dbedef68e",
".git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "76eb293b5c9304707852ee681a90e8fc",
".git/objects/ea/07d56bfbfec005fca20d43b7eea4bc93bb3804": "6869b3ae0f4841c73a273ce23142fc00",
".git/objects/8b/3d21153b7ae2e21819cf8c09fb04a9a4833ce2": "4abc99633c6e50863f8b597cdce102c2",
".git/objects/8b/d86f6805108dec87d0be823bdb1384bec8aa19": "55d426b0aa04131e9766164b5c6ee5b1",
".git/objects/8b/62e3dee542d789cc02f39f24668d37bdcc2a1f": "9d4ac8bf1aa9c37d26114baf8192735b",
".git/objects/8b/8985b4e1d73059a02a87f561ac3741039aa9ea": "eafbefd2248229991550b91d67a21049",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/7e0213b20f85729bf40419daf1744126b9a65e": "62cdc00432ddb78603b5bc33c15f121f",
".git/objects/24/17254539e35b5e164373eb1d8159b8ba0198a4": "36d3db0bb561f1de66381d8b272b8a9d",
".git/objects/b3/a5ba87699cba65ceac1cd5ee5bf9d56e34acf8": "14358cd9e1f6e5fe9cbed91b6bd56b21",
".git/objects/5b/d70079179e34dda1075cb14c3124b4cb9f8735": "3db0e6e3b4f4bbdc9ce1bc5d192b9485",
".git/objects/87/8e5896d4105fc4992dcbae5edc942f97f90d6e": "97a1069438b244e834df8629b2d2d14b",
".git/objects/b6/f982e6046b7c6b7a4bd8ee06238be874a4a29c": "2b19d59c4534c9d5b4734b9352855858",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f47de426b1d6c272d2659c734c9de80f",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
".git/objects/db/be0c855ac994bc7c5c642fd3320ca591b61f14": "1f528c233b2d6d2f9de40480b345b9d0",
".git/objects/db/6a94d81cbb216b19a5e39e3ef23261955dd4e9": "001ddab97c504e85f0c8eec8f2cf3982",
".git/objects/db/b58ffbfa3c0d813911938b50b946c8eac0c9e4": "b51b7dc588315ca3de6735899fdb79f3",
".git/objects/9e/63523a5fb6fb692ec416768e6c772170bd9fa3": "d3ebe48037e81999854947c086e65f3a",
".git/objects/a0/d0dfc936c81467f1ead75e76506f7cc3bf6904": "0114b46f983ad1c200fd1445f3e38b79",
".git/objects/a0/457d5bf225aac7dd637c3c9e82a4febdc500b3": "42986f5b46b1b59f8f6d0ac6dc600254",
".git/objects/59/41756030229287298d8e46b6b1941d2d559c67": "8aff3176973069ec1a24aef1b0d70fd9",
".git/objects/b4/3b569f8a358e950c1b6837dbaa92cd76eefe8c": "23c9c995e38b13aa127e7bc859cbb005",
".git/objects/52/38788a6e4a283ec1c5d0c1cfebe2f2c3d48f5f": "c74209a1cde3f824e777bddfda77e56c",
".git/objects/23/0e58f57462f1d855dce7969eab511611d6dad0": "6d58a1b0251089eb32a15fad3405b608",
".git/objects/7f/1ae605ce06ab2ba8e3ca1afcfa35e1b36b3298": "b98ece26f2b567f8430c5922b7de160b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/6e/82ba5e38ebf8def3ddddc1eff0b29319022d37": "ae39a9f243424804c16daacf5527d86e",
".git/objects/3e/0db0577389bfb3d0ca6831704d311d4c946a89": "5a4874b98d6503130ee38587c029dd3d",
".git/objects/3e/9db0564b4eefa6df44fc54ccabcc718240b0c1": "0995d9495997b495a172f044c4710467",
".git/objects/9d/f0307863b466fac6296799e01fb59b489fafbc": "5426b9a507d8e22ce58d59f81fddee90",
".git/objects/ed/6e68e2d9c3bdd2c36941fbfe9161f108b684d6": "96316d311b9ab09edc39a8a515efc33d",
".git/objects/bb/8a303898ca7175c291431ed00b246dea6ab6f9": "e7e70ead6d3bc7b74f2b1b4368fec204",
".git/objects/63/887ffc3c384c23ce7f78f29ff437f06e1abb76": "5d5109b901e2725555a7eb18a9b46789",
".git/objects/63/db6189877f14dee777564678c74c1a2015799e": "241c19cb9a5a0b9aed045a751fd0ebdb",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/08/7761d5ca20d57397eb17ef5664133aeb855f0a": "4ae1636105e71dbb4ae82e1db7d6260a",
".git/objects/16/55863862f0447337c70b8104839b814e5ca7f0": "401b1a086c23a3a0eaa9a6aa8f4bead4",
".git/objects/98/5d5c7fb3ec9e7b391e84fdb452196b3c6cabd2": "3a0964eab4dc1b0b9962df16216f1490",
".git/objects/55/25959088a9d1e71788f48aaede6133d8c8705b": "1fe3607f6f37d758295dce7a73ff8612",
".git/objects/f7/4085f3f6a2b995f8ad1f9ff7b2c46dc118a9e0": "c04177ec14f012cb2c99851a5e1ca941",
".git/objects/f7/fec6a5e882384357e0356bc8093700302801c9": "cbeb70f2d5aca08b5cbea010df25dd6f",
".git/objects/ac/24788b5d95f42293a1a717c082680fe66ac2f4": "45f648230e2012fd12645ee5041a7944",
".git/objects/64/e317dcbc6d629a4e9bc5a304b6953259a59357": "7cca1e14ad1d3a32018efa989c2cfa34",
".git/objects/ef/89e025c7b66c2d99b72f831f2b964a82fda281": "7a28246661375a57b9a60aaa2de76b43",
".git/objects/67/5a0817eb6546ee6a5bebce1a121faf700df400": "a022806fa63c2bd0f1576817d83f8630",
".git/objects/0b/ce818af2bed7c5357dc689bc78af01cf5c9e28": "603249378802512b30db491825e7cd88",
".git/objects/0b/c651d1dc89af65855c6d0e6c55bfc45fe63171": "1d891aa9d3f0af0796a00d34a950c755",
".git/objects/14/8da3098986ea6c098d5a7b1f8e9cbf6b427b56": "9bfb32c54891d8b9226a37dddd010698",
".git/objects/a8/3370a250fc3055cbe0ef8e05e4edde30f94bf5": "43f80c3f3b4421851cd2ee50f35d11f0",
".git/objects/31/a6baf05273950fe10dcaf55dab8aa37d7ce018": "03b979e420e4cb1c3061c86f7fd96646",
".git/objects/f6/e10036ae49b7856a06bc69ca6bd7f87fe77ea5": "869bed00621dc6cb93fca61feea1956f",
".git/objects/66/6e7dc527e0234362ed28a09901c63366486a54": "e2aa6bca89c4e2f9115789fa6a078b5e",
".git/objects/6c/03a53d746e48f8f80166cfab46df45d6b53acb": "160d5f9f09b0e022ccab6576d1b444dc",
".git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2e5a4148dc9ebc15b186574d9fb60432",
".git/objects/ec/4c77e6f7a124586cb9d5851997c27da24b8614": "7014df2298cc1c0e52dc32c46de67100",
".git/objects/94/ea4501481e818992776b8842762d58e1aedef8": "85b1a18af6bcc99992d81558769125b2",
".git/objects/38/6110120de3af5a72f4910ef1536f12cf43de6d": "c9c101b5f1e247a4027de45e8239d05a",
".git/objects/38/9cced97b3fd74d8335d1b71fe120534c2ed6f3": "13199b1206061028305cf854a178890a",
".git/objects/8a/d84792dc83cdeb0a821b66103659a21e9fba19": "610f93a5f06af64ba3033f7bcfa78ce0",
".git/objects/8a/70fc07028087ff34db1c63222f6bfaf62ee419": "a6770afc15b4266de33c70fa98648cc5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/bd/42e0e1b7067007eabc4697b894930d240c5f26": "79f10003ac49917478352a29f859bf3b",
".git/objects/bd/b9507f5e57c33fc73780220ab9e634ff3c521d": "35ec7acb89a03ada139e0bcbd251969f",
".git/objects/ca/9ac7808bafcb1471c1b38377ac445887a485f0": "99761ca43fc479ef217640c17263c7e8",
".git/objects/fe/fbb4a870b1a994c9600f8dc80c41699df017eb": "1e38622e8d9d76a276341face56c8683",
".git/objects/d4/ec1d6e31a59a9c0915a9923fa4bd2b5513d6b5": "d78880dcc52fa21afee902cb559121e4",
".git/objects/9a/b975662dc48dea040691f0cb43f5480395171e": "a45c48bb8971b74b8d1684c5f85c93e4",
".git/objects/eb/3c0b1f282003055ec6ff8746e2248a99615bed": "bc722489e2040cc5ee10a3a02119f814",
".git/objects/1e/22da2a8b8580644ff209508da8715d406b4c09": "7ce83aa894b11a478b6ff52a6a59a147",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/5c/c8fc0e356fd710ddcd6f1726bc555b0f2dd21e": "c6bda3a068dd64ea9bd438af699f81d5",
".git/objects/5c/b3f8bb8647d8fc30895de584b25c59f4e37738": "21e0b6d703e74c79df1004f9ad34e8a8",
".git/objects/5c/8bd5387c1e67d4f728751cd573f5e455077c79": "bd3e5f4dfd3c4346f9b2d9a0e52584a1",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/3d/f3d1a91dec9f419bbf32c7dbd7ffe3049577b7": "2da7aed2720fec500109845fe6130ee3",
".git/objects/3d/e13ba04053b3731cebd3d71a54711f957fd2d1": "770211acdb5ea78a6ed7d712f7faeead",
".git/objects/69/0dbba97f29a0d912cb5f24e1591c2883d489da": "efe79b3600ee5ddf8649e80f229a4f5a",
".git/objects/b8/bdb404406d853d3b6d450ee06255b85ddbeb64": "efb1fc01dc07d6650d51afd240cda937",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/46/b726bd53d47e61ba941eb355b9c8633ebbaa20": "480b1cf7af4c452e5722818c06aca052",
".git/objects/46/a917ae0dc67596f2f05f72e0a6a6b856f9e4f8": "2f00c73055b262918de3a60767b1e4f9",
".git/objects/62/188df6bd936a0dc127e9e36628534199acd396": "162635065a05a7fd6707851fd3f33c27",
".git/objects/74/003bc68c5da20ccf912f3938cb483bbbec4963": "87207c6df9a537a35f21dcce2efb974d",
"README.md": "47db515d729d166f6c266427b80c37a4",
"manifest.json": "0113493ef8c209af8c909d508f9aa2da",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase.json": "6bcf42ed79fb26c537250453f0bdd183",
"docs/index.md": "c50df1cb8623136e0093e82c657d6a1b",
"docs/_config.yml": "d178df8a46be3ea7f599296e24430ce0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".github/workflows/firebase-hosting-pull-request.yml": "49ed5116cd5828a79a4d89263a210d65",
".github/workflows/firebase-hosting-merge.yml": "a27e3470ab90291648a1547b354d119f",
"public/index.html": "dba9529e753f0cffd83125db4ca576b9",
"public/404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
".firebase/hosting.cHVibGlj.cache": "de80ac844ea4c6c60b9a4838c96f4369",
".firebase/hosting..cache": "b8f548cef4aa7643d5cc23c9ee227e34"
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
