/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/25/gallery-post/index.html","fcb855d002d66399f5686aa859e534d1"],["/2022/12/26/images/index.html","738ec955a470c6f6368fd2e112216851"],["/2023/01/01/Webgames/index.html","dbcbdcf4b68ec7e7d45c7f75c80d39a0"],["/2023/01/05/昂昂bot指令/index.html","b9b1e1b6d60c65b7a37126a57796e924"],["/2023/01/06/ANGANGBOT1/index.html","e51d0f676124ec33c2dd5052493e1cba"],["/2023/03/04/nginx配置多个站点共用443端口/index.html","afd09c6c53e8ee54fe05a951598e0b42"],["/2023/03/30/stable-diffusion的一些坑/index.html","eefaf8f43e54006572406d0ae155c20a"],["/2023/04/02/使用秋叶佬速通训练lora模型的杂类问题/index.html","66b4eaef81b9abb5e7704ff7061f4d66"],["/ADarkroom/114514.html","6e12ed46a4e1ec6382c3920124d074e0"],["/ADarkroom/browserWarning.html","cc5befb6f33def22757e974c04c56801"],["/ADarkroom/css/dark.css","4a065a376b3e1de873206be56bac0fbf"],["/ADarkroom/css/main.css","70e2f3edee317777ead9a61aa13f0208"],["/ADarkroom/css/outside.css","d8b900aa8a4b1862145e2f32c0885582"],["/ADarkroom/css/path.css","d1a0aa7a38fd2b6d63d68bb3884b410e"],["/ADarkroom/css/room.css","5bfbaf36ec29b480c957d0859dc7dd97"],["/ADarkroom/css/ship.css","7c0bd47a23f472786551add97741fc14"],["/ADarkroom/css/space.css","228d8e3a06bf0152b30d690f65321353"],["/ADarkroom/css/world.css","3b96c69c01a89386bb8385522639fa29"],["/ADarkroom/dev-server.js","cde9d68a94d21bba46adddb215d7e8d9"],["/ADarkroom/img/Logo1.jpg","c459bd32a74bcf6f7dab70c9baa79f5e"],["/ADarkroom/img/adr.png","b491e4ffe0f2fae3569f1e3335375fb1"],["/ADarkroom/img/chrome.png","b4002e70b6cb73b1093d83e2b8e6c733"],["/ADarkroom/img/firefox.png","e5dc0dae4bddf0dc95c452ff2a0c89da"],["/ADarkroom/img/ie.png","d506e80ff2fed507ad0658b92ec6608e"],["/ADarkroom/img/opera.png","e5fc01bcdfd99177e58e7031053a88b9"],["/ADarkroom/img/safari.png","871473b3ffe28e4d05218473502ac1c3"],["/ADarkroom/index.html","17fe41c814061fe4961d3930ae6a4dbc"],["/ADarkroom/lang/cs/main.css","94c269e13d4ee5c0d7750df7a6a7bd74"],["/ADarkroom/lang/cs/strings.js","fc193299376f33d647ef6ad1880cc3a4"],["/ADarkroom/lang/de/main.css","94c269e13d4ee5c0d7750df7a6a7bd74"],["/ADarkroom/lang/de/strings.js","d34507824c71fe4ff208b91c9f8b579c"],["/ADarkroom/lang/el/main.css","94c269e13d4ee5c0d7750df7a6a7bd74"],["/ADarkroom/lang/el/strings.js","4ee4103798ea6af86ffe373d79346002"],["/ADarkroom/lang/eo/main.css","94c269e13d4ee5c0d7750df7a6a7bd74"],["/ADarkroom/lang/eo/strings.js","67682c90e7e8eb8000d6fdf7abff8bb0"],["/ADarkroom/lang/es/main.css","94c269e13d4ee5c0d7750df7a6a7bd74"],["/ADarkroom/lang/es/strings.js","055c7324e209eecad21c2429918cf8dd"],["/ADarkroom/lang/fr/main.css","d9f871696384a45eb1fab67ef90a4f71"],["/ADarkroom/lang/fr/strings.js","a0bd329e632f63aa0c25a5b88d7e7329"],["/ADarkroom/lang/gl/main.css","94c269e13d4ee5c0d7750df7a6a7bd74"],["/ADarkroom/lang/gl/strings.js","f7b005c5101eadea7eae9bd48152e5b8"],["/ADarkroom/lang/id/main.css","94c269e13d4ee5c0d7750df7a6a7bd74"],["/ADarkroom/lang/id/strings.js","2780191b51fd81dad8574e4237c5dd15"],["/ADarkroom/lang/it/main.css","6ae4caf54101b7aefb91b13e2b3ec228"],["/ADarkroom/lang/it/strings.js","77acbfa7c27337ad2145773facda33e5"],["/ADarkroom/lang/ja/main.css","a6f988a8abe2089df67509f42be28d63"],["/ADarkroom/lang/ja/strings.js","54e7e49fdf16aefb4f0b51f8c1232435"],["/ADarkroom/lang/ko/main.css","94c269e13d4ee5c0d7750df7a6a7bd74"],["/ADarkroom/lang/ko/strings.js","ceaaa47b819f6e944221dfe10a063a24"],["/ADarkroom/lang/langs.js","3b29d24d9858044a4e9440477b74f60c"],["/ADarkroom/lang/lt_LT/main.css","012c42dbeff3d081e7bdc97028e376e8"],["/ADarkroom/lang/lt_LT/strings.js","338ccea7adf5808d98fc0fdcbc21de04"],["/ADarkroom/lang/lv/strings.js","f5f94afe21ff541cde6bd43200995dda"],["/ADarkroom/lang/main.css","94c269e13d4ee5c0d7750df7a6a7bd74"],["/ADarkroom/lang/nb/main.css","a6f988a8abe2089df67509f42be28d63"],["/ADarkroom/lang/nb/strings.js","d6c44e144c72ce0df13300f8720d2a8e"],["/ADarkroom/lang/pl/main.css","6ae4caf54101b7aefb91b13e2b3ec228"],["/ADarkroom/lang/pl/strings.js","ef6a75fafa5b1c61b7bef0fbaf86642d"],["/ADarkroom/lang/pt/main.css","94c269e13d4ee5c0d7750df7a6a7bd74"],["/ADarkroom/lang/pt/strings.js","9b1c1e6a32e249e5a249a4ad3aef8284"],["/ADarkroom/lang/pt_br/main.css","6ae4caf54101b7aefb91b13e2b3ec228"],["/ADarkroom/lang/pt_br/strings.js","29172854da2653c9de3ef4feb04c26fb"],["/ADarkroom/lang/ru/main.css","5ee560dd4382b351379b44a3ea40248b"],["/ADarkroom/lang/ru/strings.js","b4a5606e1a610723acdb15ece79bd62a"],["/ADarkroom/lang/sv/main.css","a6f988a8abe2089df67509f42be28d63"],["/ADarkroom/lang/sv/strings.js","f7e1a8a16f19b5e0d4387f30b0ce19a8"],["/ADarkroom/lang/th/main.css","08f3188298f9ec6a726e407345c187f6"],["/ADarkroom/lang/th/strings.js","59dfe84be3f0931dcc6602b70f94e189"],["/ADarkroom/lang/tr/main.css","94c269e13d4ee5c0d7750df7a6a7bd74"],["/ADarkroom/lang/tr/strings.js","58d61ca91777443ddcc65d30e67a090f"],["/ADarkroom/lang/uk/main.css","1fce582ece2f5781ffb647c28c7404c3"],["/ADarkroom/lang/uk/strings.js","60b0ca1e526e744a66081e32eb234be1"],["/ADarkroom/lang/vi/main.css","d0b13de154041049240ee8678fa76b49"],["/ADarkroom/lang/vi/strings.js","f347bbaff204656409124707c208259e"],["/ADarkroom/lang/zh_cn/main.css","6ae4caf54101b7aefb91b13e2b3ec228"],["/ADarkroom/lang/zh_cn/strings.js","6cbe3cc8584665643a18024f35d445d7"],["/ADarkroom/lang/zh_tw/main.css","6ae4caf54101b7aefb91b13e2b3ec228"],["/ADarkroom/lang/zh_tw/strings.js","7f11d0d102f652a7bd320c3b5775201a"],["/ADarkroom/lib/base64.js","1319a6368fb6baf265660afab18041ac"],["/ADarkroom/lib/icu.js","59621c44e438f59d96010ee14bc2c285"],["/ADarkroom/lib/jquery.color-2.1.2.min.js","a37ec1d1fc4ce1549941e033adacc19d"],["/ADarkroom/lib/jquery.event.move.js","fe5b73c28869ab8871cc5fc0639fe367"],["/ADarkroom/lib/jquery.event.swipe.js","d3a967c9af7f6f0b8a85b0fdf9ebe508"],["/ADarkroom/lib/jquery.min.js","2c348a8a373a2e0dc0f8d9cf2c87dfe1"],["/ADarkroom/lib/translate.js","5edba37c941538414b3fa0754f4d1c5f"],["/ADarkroom/mobileWarning.html","bc0b43b149d772e6905ecd7083e8166d"],["/ADarkroom/node_modules/accepts/index.js","4fe4d2c90a2fd19d6e97443a7d24f815"],["/ADarkroom/node_modules/array-flatten/array-flatten.js","4b17fa06c54846b686b8b799e9dd253a"],["/ADarkroom/node_modules/body-parser/index.js","7b203b1ba7da7e9e3824e8c0c1708ea8"],["/ADarkroom/node_modules/body-parser/lib/read.js","046366a27279a7d65e7ae694823e76bc"],["/ADarkroom/node_modules/body-parser/lib/types/json.js","ef0d64e8db843813870c15cd5eb1efb3"],["/ADarkroom/node_modules/body-parser/lib/types/raw.js","acb38e4fe575afaf8d1a257e47c6e362"],["/ADarkroom/node_modules/body-parser/lib/types/text.js","beb4ada09306f8d6435566d9e88076d3"],["/ADarkroom/node_modules/body-parser/lib/types/urlencoded.js","906a833480ce8841bfa5aeb95b5c085f"],["/ADarkroom/node_modules/bytes/index.js","a317b58c1896b9b1d2124bfb8886484d"],["/ADarkroom/node_modules/content-disposition/index.js","30daea1ccaec65c195c624437fd7ea20"],["/ADarkroom/node_modules/content-type/index.js","44890ac38a6cffb3d6efb5652bfce578"],["/ADarkroom/node_modules/cookie-signature/index.js","a9634aa95d321b9a6d90bec5d3d23937"],["/ADarkroom/node_modules/cookie/index.js","7c823649d28959ab6a327bb7a75251a6"],["/ADarkroom/node_modules/debug/karma.conf.js","06f3babbdc43c6c4dd1493b6c1af32e2"],["/ADarkroom/node_modules/debug/node.js","79f3814f32362c1c6f9dbb8a1e3b01bf"],["/ADarkroom/node_modules/debug/src/browser.js","62cfee6d6dd5ffec5d3ed35073791aec"],["/ADarkroom/node_modules/debug/src/debug.js","74bdccf347345d27fe8a4ac3add99c60"],["/ADarkroom/node_modules/debug/src/index.js","dd13897ea2eed92695bb7e4e744a9148"],["/ADarkroom/node_modules/debug/src/inspector-log.js","b22697b673c7c3586f22ae0206258fde"],["/ADarkroom/node_modules/debug/src/node.js","25807a97fbb1fcc42a013abc7d7768c4"],["/ADarkroom/node_modules/depd/index.js","fc83ac89ac144234a74ca42769f0c4c6"],["/ADarkroom/node_modules/depd/lib/browser/index.js","5b958f39df1df069739ccd3765bad0de"],["/ADarkroom/node_modules/depd/lib/compat/callsite-tostring.js","6b7b6b5b14ad2be86acce3d6bb4a64e6"],["/ADarkroom/node_modules/depd/lib/compat/event-listener-count.js","12b1ddab08bda110a232d7e724fe162c"],["/ADarkroom/node_modules/depd/lib/compat/index.js","863b7f4fae75ce11af3ce68aa7a4e962"],["/ADarkroom/node_modules/destroy/index.js","f16c90b1ea929c508f3be515a6a141f4"],["/ADarkroom/node_modules/ee-first/index.js","e7a3f46d4b903c9f8a025cb753b1a538"],["/ADarkroom/node_modules/encodeurl/index.js","b90cf71779f72e14be703a4e494e968c"],["/ADarkroom/node_modules/escape-html/index.js","0c95e46d0f08bd96b93cfbea66888afc"],["/ADarkroom/node_modules/etag/index.js","8eaca1927e67861a7682b7b2c0906ef1"],["/ADarkroom/node_modules/express/index.js","866e37a4d9fb8799d5415d32ac413465"],["/ADarkroom/node_modules/express/lib/application.js","569b549e619807c5cd58ab89d7e81109"],["/ADarkroom/node_modules/express/lib/express.js","d467bc485eddf6d38278bc6b1dc16389"],["/ADarkroom/node_modules/express/lib/middleware/init.js","3711ae7ea348d39a41c5139a63e89c12"],["/ADarkroom/node_modules/express/lib/middleware/query.js","a6e9a6c92c5bfdd9d7b08b267a3b1d44"],["/ADarkroom/node_modules/express/lib/request.js","4f3a3b078531e551c6784f08a7ea02e4"],["/ADarkroom/node_modules/express/lib/response.js","b5a9b48bef9b072a350d0b8737d54bbf"],["/ADarkroom/node_modules/express/lib/router/index.js","c11694deadcecb691f6860a530cc7472"],["/ADarkroom/node_modules/express/lib/router/layer.js","c6e16965ef05cc02cfee78022496abab"],["/ADarkroom/node_modules/express/lib/router/route.js","be5fcf9a22c2524e813c9a79effb4610"],["/ADarkroom/node_modules/express/lib/utils.js","23899065325f9a3b0501bccc5231be8d"],["/ADarkroom/node_modules/express/lib/view.js","91c7455190f39cc30d0c5d4627d701fd"],["/ADarkroom/node_modules/finalhandler/index.js","a3444524d4b81aeec8b0be8b54cefd24"],["/ADarkroom/node_modules/forwarded/index.js","533f21ced73e5093ecccaf516a54eb0c"],["/ADarkroom/node_modules/fresh/index.js","57dbafb6c310ce7063690f5688acedd5"],["/ADarkroom/node_modules/http-errors/index.js","1eb9f6e0a67d3a37f02d9f98cf9163cc"],["/ADarkroom/node_modules/iconv-lite/encodings/dbcs-codec.js","6decbcdfe2ba5ed5c3a75466ce94cdfc"],["/ADarkroom/node_modules/iconv-lite/encodings/dbcs-data.js","e56d3d57df85dc818087254a8a16a699"],["/ADarkroom/node_modules/iconv-lite/encodings/index.js","7a13671a7fbc74c463377b3cda863503"],["/ADarkroom/node_modules/iconv-lite/encodings/internal.js","701b0858fb6fa82101365d81d7406f04"],["/ADarkroom/node_modules/iconv-lite/encodings/sbcs-codec.js","6f257833a4d930eaa9af9225faef16b8"],["/ADarkroom/node_modules/iconv-lite/encodings/sbcs-data-generated.js","78c27d9268d36644ac77b82b956f5b1f"],["/ADarkroom/node_modules/iconv-lite/encodings/sbcs-data.js","336be4eda323a03b88d06985f15c3524"],["/ADarkroom/node_modules/iconv-lite/encodings/utf16.js","7ad12158af65189b85796de64923f031"],["/ADarkroom/node_modules/iconv-lite/encodings/utf7.js","cf6746c76930fe21a716ef03d700b208"],["/ADarkroom/node_modules/iconv-lite/lib/bom-handling.js","7b3d4519f05bf0cc8d70a4d950c72c55"],["/ADarkroom/node_modules/iconv-lite/lib/extend-node.js","24ac97737522b61c26b830d350cfcaea"],["/ADarkroom/node_modules/iconv-lite/lib/index.js","c1da5b53fa60006bc973dc785bed2ca6"],["/ADarkroom/node_modules/iconv-lite/lib/streams.js","8628e41438801c5bfdabf3be9b1ff548"],["/ADarkroom/node_modules/inherits/inherits.js","09b210610125b162700734fb93dc892c"],["/ADarkroom/node_modules/inherits/inherits_browser.js","7c26fc24b695f2afbc284bbd5f64d6a4"],["/ADarkroom/node_modules/ipaddr.js/ipaddr.min.js","25cbb7a40252e3e2004437b72e1eaee5"],["/ADarkroom/node_modules/ipaddr.js/lib/ipaddr.js","faea7806284886c6c63a41c247008fbd"],["/ADarkroom/node_modules/media-typer/index.js","ef1845377cbbf76edd411a370738ed2b"],["/ADarkroom/node_modules/merge-descriptors/index.js","b4d3859e603602c87a45682862055af0"],["/ADarkroom/node_modules/methods/index.js","17d4a4ba378c1fd10dcfd061439f7ea0"],["/ADarkroom/node_modules/mime-db/index.js","a3e41e93954b3742ed84d3050d6038cf"],["/ADarkroom/node_modules/mime-types/index.js","bf015bb6811afc5c98e3e5f7072fdc79"],["/ADarkroom/node_modules/mime/cli.js","d028184965062ef86cdcfe246753ef27"],["/ADarkroom/node_modules/mime/mime.js","2930e6caad95dfad928d76fc1eb2e003"],["/ADarkroom/node_modules/mime/src/build.js","daf164e6d251c818b190db781f845776"],["/ADarkroom/node_modules/mime/src/test.js","e79c602593f0f279e1cb2d8d4a3ce3bf"],["/ADarkroom/node_modules/ms/index.js","ae157c9a8e70902576c2d8a06dbcde32"],["/ADarkroom/node_modules/negotiator/index.js","9ed619fb70c6bc360f3908dd90a79046"],["/ADarkroom/node_modules/negotiator/lib/charset.js","7977a65b1542fa8ce9650e58607f4b07"],["/ADarkroom/node_modules/negotiator/lib/encoding.js","e03dd226452c58ce083ab4468851f0b1"],["/ADarkroom/node_modules/negotiator/lib/language.js","4538455326d31cc086bb901f7e3b83fc"],["/ADarkroom/node_modules/negotiator/lib/mediaType.js","0fdaa0ed7cab2ce5fcbd7b361a85892c"],["/ADarkroom/node_modules/on-finished/index.js","befdf51b0f78ec7b5e61fe648aa9df75"],["/ADarkroom/node_modules/parseurl/index.js","3750351b6b1aa7f3e65d5499ea45006e"],["/ADarkroom/node_modules/path-to-regexp/index.js","cb184302e8d26369e9c0392fa4c8d0cb"],["/ADarkroom/node_modules/proxy-addr/index.js","0ec33ea2ccb3a107c666a0b311f0e28e"],["/ADarkroom/node_modules/qs/dist/qs.js","61970fed53534892319f5d11d9ea3281"],["/ADarkroom/node_modules/qs/lib/formats.js","547b7a8b6b81236db977dcd1a548c9e8"],["/ADarkroom/node_modules/qs/lib/index.js","1459a9952f6b500d24818bb6e3e37368"],["/ADarkroom/node_modules/qs/lib/parse.js","e8d7396234ffb4c2772844eb86e52ce5"],["/ADarkroom/node_modules/qs/lib/stringify.js","98adbcd903baa8d38e70aa4f7384fc9f"],["/ADarkroom/node_modules/qs/lib/utils.js","9231894a95b9eb149920c7711a1ba6ba"],["/ADarkroom/node_modules/qs/test/index.js","16c8338cc83b85a875270f50ac1e4ed6"],["/ADarkroom/node_modules/qs/test/parse.js","fe15b5909c82c908b1b92d89d9695aae"],["/ADarkroom/node_modules/qs/test/stringify.js","7270ccf1e92b2ecd35b92d526e12526b"],["/ADarkroom/node_modules/qs/test/utils.js","6a378244218f385cdd20d6dc3b49b567"],["/ADarkroom/node_modules/range-parser/index.js","e72576333d27d1c9b3901c4b9e597f27"],["/ADarkroom/node_modules/raw-body/index.js","baf003bb8c6c6fc1cffe0d4afe787e21"],["/ADarkroom/node_modules/safe-buffer/index.js","b1622ff2944ba3f13a1cf6fbcf0f9e3f"],["/ADarkroom/node_modules/safer-buffer/dangerous.js","7557e84f2db56a79916613053f9297d6"],["/ADarkroom/node_modules/safer-buffer/safer.js","b548fa7365e81d472250949a6b4ccc69"],["/ADarkroom/node_modules/safer-buffer/tests.js","373f9327325c35bb109038dc3b8e5a14"],["/ADarkroom/node_modules/send/index.js","edf8ff5c77445e2bd6e21cfa4bf6deab"],["/ADarkroom/node_modules/send/node_modules/http-errors/index.js","1eb9f6e0a67d3a37f02d9f98cf9163cc"],["/ADarkroom/node_modules/send/node_modules/inherits/inherits.js","9ced637189714b8d21d34aeb50b42ae8"],["/ADarkroom/node_modules/send/node_modules/inherits/inherits_browser.js","184872b18b759a37285bee13cd1cd0e4"],["/ADarkroom/node_modules/send/node_modules/ms/index.js","52620b13382ca384cbe89011c4b16460"],["/ADarkroom/node_modules/serve-static/index.js","3707f8d6ee2c6d88ffab23c0c4f1509b"],["/ADarkroom/node_modules/setprototypeof/index.js","dd15d377665805ff7251e0a0f52fb837"],["/ADarkroom/node_modules/setprototypeof/test/index.js","057b874f30e15981324966ff9294dbe5"],["/ADarkroom/node_modules/statuses/index.js","93ef82ab57885976022f1b594741dc19"],["/ADarkroom/node_modules/toidentifier/index.js","279de9b706fd68a63d92cb4bc364c772"],["/ADarkroom/node_modules/type-is/index.js","f9aa3afdc332adae59aa21d31090582d"],["/ADarkroom/node_modules/unpipe/index.js","377f0c4bddbbd7e73b32a53e687df342"],["/ADarkroom/node_modules/utils-merge/index.js","20d03f8bf4486091c44f17a97cbb6c24"],["/ADarkroom/node_modules/vary/index.js","8217c2d942ee5bf6866c92662515d975"],["/ADarkroom/script/Button.js","055431b781fbc48cffee772821d18634"],["/ADarkroom/script/audio.js","c63ebb2dbd78bc92bf94ce8a62151efb"],["/ADarkroom/script/audioLibrary.js","61af45a61c91cb4589992237ee5e1b46"],["/ADarkroom/script/dropbox.js","a19db0d11d61eec52e737dd99c86ed70"],["/ADarkroom/script/engine.js","73b33e499c3fa293b1a9b4579eac714d"],["/ADarkroom/script/events.js","bf576ba47488a28f29112c1c6c176dde"],["/ADarkroom/script/events/encounters.js","ec7d27171d06566c46891eb31f5e1905"],["/ADarkroom/script/events/global.js","a47fd5fe43148227897ddccef290276f"],["/ADarkroom/script/events/marketing.js","2d8a32ddafa431c27c46d41b13224690"],["/ADarkroom/script/events/outside.js","916bb79c1d071f0a45d335263da528d0"],["/ADarkroom/script/events/room.js","96b023c9828075927a0ae015d515c6f6"],["/ADarkroom/script/events/setpieces.js","05a91e88d5c95b9c2a1871274f3ddec5"],["/ADarkroom/script/header.js","7301817cfea4314fe55d2d10ce081885"],["/ADarkroom/script/localization.js","245244d80b312494520f7361d27bedcd"],["/ADarkroom/script/notifications.js","6187e112d3c1feb6ba2eacf78825a0cc"],["/ADarkroom/script/outside.js","39ed99b6a7b4fada6c3063a840aeaffe"],["/ADarkroom/script/path.js","245148e50d797eb76a4fd7b473f9ea46"],["/ADarkroom/script/prestige.js","50775d8af5ed53592f16544d78c2190c"],["/ADarkroom/script/room.js","fd1f9e888faa83fb2d41c59bcf8cfcce"],["/ADarkroom/script/scoring.js","42350277a322857d04b792ffc521abed"],["/ADarkroom/script/ship.js","58b78b81908aafa3de6eb4f0121efbd7"],["/ADarkroom/script/space.js","ada84b10324e228da583acbf4883a143"],["/ADarkroom/script/state_manager.js","8d367f708b24004205f2fabfb9ae0d81"],["/ADarkroom/script/world.js","4011957db3e425fdc1f0250dddbe3bd8"],["/CatchThatCat/cat.html","f08c10eeaee8e511b05ef84599643482"],["/CatchThatCat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/CatchThatCat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/PY.html","2dbf20767731078e0933bc61f6987f5e"],["/about.html","1437a4bca3cdeeb4c4a066eb1bff7d4d"],["/archive.html","1c90dbf5de9067b6be0655e13c39224d"],["/archives/2022/12/index.html","73f3dc1f956f9218dec25bdc8e97d8ce"],["/archives/2022/index.html","b0d120369bb154870017347a3108e239"],["/archives/2023/01/index.html","625fc867924745834f3c140ea2e9c191"],["/archives/2023/03/index.html","aeac088a29c4a1e5aa17d8e6b32e5942"],["/archives/2023/04/index.html","641e469094d7c2e36f799b9a31bd7955"],["/archives/2023/index.html","7c7553ba85f0605c9342e3ef22b00b77"],["/archives/index.html","890e55cbe71f2d9178748382ce879e10"],["/assets/avatar.png","9459ba35f32c556115db02b675892b5d"],["/assets/ba/ClanChat_Emoji_21_Tw.png","96837078f809a33c8f64f6e7b15e711e"],["/assets/ba/ClanChat_Emoji_22_Tw.png","4076288e80e02903eae9acac57b5bbe6"],["/assets/ba/ClanChat_Emoji_23_Tw.png","59e4c735d9d9fd0a1b3b5ff9aaf80e19"],["/assets/ba/ClanChat_Emoji_24_Tw.png","3b5a07f15e3ea4f718246d079553ca1c"],["/assets/ba/ClanChat_Emoji_25_Tw.png","7752a6456bd50520b52c022ea9bd16a8"],["/assets/ba/ClanChat_Emoji_26_Tw.png","b38cccb4194bb86000e4a248349ee173"],["/assets/ba/ClanChat_Emoji_27_Tw.png","cd4f757763d21466dbcfe2b68014f67a"],["/assets/ba/ClanChat_Emoji_28_Tw.png","5f32539cf00c7de152f43792a0776dcb"],["/assets/ba/ClanChat_Emoji_29_Tw.png","cb1e766137ecd42ec0f1bd80e3e7dd95"],["/assets/ba/ClanChat_Emoji_30_Tw.png","fb6a45879ebb38cd81b602e945db0116"],["/assets/ba/ClanChat_Emoji_31_Tw.png","27ef1824b5b82f653a808c1ffa8f67bc"],["/assets/ba/ClanChat_Emoji_32_Tw.png","6b416f2fbd959813671f68170cd2f0e0"],["/assets/ba/ClanChat_Emoji_33_Tw.png","25ddf76e98458bd09bb3a06e2ef9e610"],["/assets/ba/ClanChat_Emoji_34_Tw.png","fc4521647b418fcc7a3ef2b84473d103"],["/assets/ba/ClanChat_Emoji_35_Tw.png","6976d9d2fb82a44155f17cdbcee62ff3"],["/assets/ba/ClanChat_Emoji_36_Tw.png","07806bf2003674fbad9b12057ecf5044"],["/assets/ba/ClanChat_Emoji_37_Tw.png","bc8e71c0824dbd412ba8461d48d637d5"],["/assets/ba/ClanChat_Emoji_38_Tw.png","cbee56f99cd6fe34c18c093a53d03db0"],["/assets/ba/ClanChat_Emoji_39_Tw.png","632f4f1586dfabcdd45195bb48acc0c5"],["/assets/ba/ClanChat_Emoji_40_Tw.png","9921008b2f3da288cff8ae82fc8c035d"],["/assets/ba/ClanChat_Emoji_41_Tw.png","fe8dadcbb71969a8ba3be83645ce289f"],["/assets/ba/ClanChat_Emoji_42_Tw.png","54e1bf91c29a7b01a45f576a1e760644"],["/assets/ba/ClanChat_Emoji_43_Tw.png","0989812a198aafecbddf58e7994fac41"],["/assets/ba/ClanChat_Emoji_44_Tw.png","3dccf7625dce7e3492d5012f82b57857"],["/assets/ba/ClanChat_Emoji_45_Tw.png","9d09e2c43ba44dac0c8c9dc4cd746fe2"],["/assets/ba/ClanChat_Emoji_46_Tw.png","bbdedcc19fb89167a070ff0dca50bb2e"],["/assets/ba/ClanChat_Emoji_47_Tw.png","c6cc5689a6561f03584b7f45eccb6584"],["/assets/ba/ClanChat_Emoji_48_Tw.png","be6769e8e3db5f7e557fd4b6a0f77545"],["/assets/ba/ClanChat_Emoji_49_Tw.png","4311d77ea37fb62f7a958b4e652425ef"],["/assets/ba/ClanChat_Emoji_50_Tw.png","58c5b27f106ee5aaf7679c7d17240808"],["/assets/ba/ClanChat_Emoji_51_Tw.png","b5121a0ecc4cee4ee24fb8d32d961093"],["/assets/ba/ClanChat_Emoji_52_Tw.png","b0d6a6b04647ada35624eecab3dbd35d"],["/assets/ba/ClanChat_Emoji_53_Tw.png","9d1264a5742e6314b3ab91ae3162cd41"],["/assets/ba/ClanChat_Emoji_54_Tw.png","1594234a85e6e9f25453e2aa5ef892bf"],["/assets/ba/ClanChat_Emoji_55_Tw.png","b2ccfaab68002626b9c6a99e653cfb4f"],["/assets/ba/ClanChat_Emoji_56_Tw.png","14ff6e076fbadbfe9ff322e947a598f7"],["/assets/ba/ClanChat_Emoji_57_Tw.png","225c3e05e00db34c022dbdd7772374ec"],["/assets/ba/ClanChat_Emoji_58_Tw.png","8b1396fc4b664b28f9d17b6785c69112"],["/assets/ba/ClanChat_Emoji_59_Tw.png","db83a09dcc8a0c80593c01d96645243b"],["/assets/ba/ClanChat_Emoji_60_Tw.png","7c647919b5c69eb753d6c43f43677c81"],["/assets/ba/Clanchat_Emoji_01_Tw.png","d0695d0680a6e810fc1f55dd6d5b0b05"],["/assets/ba/Clanchat_Emoji_02_Tw.png","05e2ca7f86a73a5325e7f12463a10be7"],["/assets/ba/Clanchat_Emoji_03_Tw.png","0defd1df417509c2dedbd7a675ad741d"],["/assets/ba/Clanchat_Emoji_04_Tw.png","902aa9d74fe62c3f9fb8c05bee0063ba"],["/assets/ba/Clanchat_Emoji_05_Tw.png","6010b6c74fedaf869de6524d1c214d72"],["/assets/ba/Clanchat_Emoji_06_Tw.png","dc816cffabc661eaee984bb133b63680"],["/assets/ba/Clanchat_Emoji_07_Tw.png","aa791e232f6f56cd94365c2c170d9c43"],["/assets/ba/Clanchat_Emoji_08_Tw.png","877ac81a5de51e082d0fe0f75190032b"],["/assets/ba/Clanchat_Emoji_09_Tw.png","1b31653edb89635f1ecff0ab49c6ca43"],["/assets/ba/Clanchat_Emoji_10_Tw.png","e6ce4169c8d51af3141e6859eaab5a1b"],["/assets/ba/Clanchat_Emoji_11_Tw.png","43f909a616fb2d478d801199c772936f"],["/assets/ba/Clanchat_Emoji_12_Tw.png","292e16df9ed129dfd80016e926abc8b9"],["/assets/ba/Clanchat_Emoji_13_Tw.png","cd85f2fc8ae25813c7028a663bb054a7"],["/assets/ba/Clanchat_Emoji_14_Tw.png","f59df5b61a62801d28634c55a36e7275"],["/assets/ba/Clanchat_Emoji_15_Tw.png","d70d9dd2d7c39080b90196aa32304f33"],["/assets/ba/Clanchat_Emoji_16_Tw.png","2c8fbff35ac0abab1ee8b88d78d27005"],["/assets/ba/Clanchat_Emoji_17_Tw.png","3a09530f26dcc6509683d25ff2cd600e"],["/assets/ba/Clanchat_Emoji_18_Tw.png","34e5ab6e6a326918b85b320e130ea919"],["/assets/ba/Clanchat_Emoji_19_Tw.png","99ed26e13cc1db2e7211e56fb80b1384"],["/assets/ba/Clanchat_Emoji_20_Tw.png","900ceb5cd1dc2272de8af8ed0f03fda9"],["/assets/ba/hfm.jpg","bbd022c7950c16fcb797b39e35dda179"],["/assets/ba/kksk.jpg","ef8074b49b8c7979f01499ff79a07465"],["/assets/ba/偷跑偷跑.jpg","727be44011a97e960e824e46277f8b33"],["/assets/ba/发电发电.jpg","6e24fe333da58aea1ae2d0d3042475de"],["/assets/ba/发癫.jpg","ef1bd33605746d5fdad549af9429e4d2"],["/assets/ba/吃井.jpg","8aad648a59ec30ffcf12bee44461d5bd"],["/assets/ba/吹号.gif","37cbbfd40f4e0ae7f27f0b2b782c7504"],["/assets/ba/大叔？.jpg","0ffa89258eebe60dd420b577a01a1001"],["/assets/ba/梓宝.jpg","3ada23a6ef7ad58d212c0eda45957432"],["/assets/ba/正确与否.jpg","695b7ed36b7b95926fa294d5dbfc614f"],["/assets/ba/没包.jpg","115db9da8f6a2d514b5e43a94577c2cf"],["/assets/ba/爱丽丝.gif","f922998090b8cca4becc23ab3f3c7fff"],["/assets/ba/背叛.jpg","a0a849cc1433c2a4188fda7639974234"],["/assets/ba/被偷跑了.jpg","4c0cd238b4cb8ab75e9f301ba8a2991c"],["/assets/ba/轮椅人.jpg","251f847e0e90c6851a1c467b7680e506"],["/assets/ba/运动会.jpg","c567924f72202337f994572e770460f2"],["/assets/ba/都是rfm干的.jpg","ed412b03265de5251d5257da9e7ee434"],["/assets/ba/飞.jpg","de7b21b8508750a3e0200519ae7be111"],["/assets/cat.png","339476481d8beab1a59f990919b04df9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/fire.png","45411e4ceeec92e2e518b3992744a1d0"],["/assets/front2.png","eaa3089dc791a50e2611688347717b95"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bilibili/index.html","967ec19255a140eb777b76044149b2b6"],["/categories/昂昂bot/index.html","67a3e7143e5ac4b6ef08e543e2291f49"],["/css/style.css","65411afe7976791be1317334b9bfc01b"],["/images/pasted-0.png","14b8b2e69016d80df336f1e6eab79b7d"],["/images/pasted-1.png","042d63d3dcb05952797af55fb6a2046e"],["/images/pasted-2.png","150d1dc93b831c41f1c61ad32830776d"],["/index.html","9f327e06c7ab7d768aa35dcb72e66f18"],["/js/MyMath.js","6ee4d9b6cd7c212106ddd9f8be549911"],["/js/Stage.js","77ae4348a09e27b77ee99c135c5dcc64"],["/js/app.js","fe1e194e093c0044a57e5d1e47aa8052"],["/js/colorful.js","e1c7e88d289898fb39173cfd188df9f3"],["/js/copy-codeblock.js","7de31f031e7109126f752395ae0ec77e"],["/js/fscreen.js","c9d036fd378e4c559ac292ecb0dd5f06"],["/js/script.js","99621bea8443fdf773741832b9aefd6e"],["/js/search.js","c772c804b6b4713a56f8870b7167b8b4"],["/js/typed.js","b1a97e0f8d6f803597a4d0c48aca226b"],["/lib/fancybox/fancybox.css","7de51bdaad47e14cda90c98558f4ebc7"],["/lib/fancybox/fancybox.umd.js","e649b1a31b5b60b9d46864545f5a57d3"],["/lib/iconfont/demo.css","31103ad158e19b978f7e730ff5ac959b"],["/lib/iconfont/demo_index.html","bee69a5fa2b3e16a11b3d2fc457513aa"],["/lib/iconfont/iconfont.css","de1106b71b5b70d18b5b8e99f8b13aa5"],["/lib/iconfont/iconfont.eot","46f2b979c35db38b3839203588346e17"],["/lib/iconfont/iconfont.js","376d5ee8e8c341005279e4c3217208ab"],["/lib/iconfont/iconfont.svg","fd60594b9aa64fb43b8c9eeea8295a11"],["/lib/iconfont/iconfont.ttf","322b9f7378c0cc75a539110573a4d758"],["/lib/iconfont/iconfont.woff","659664895379a91a797fa9059ef6cf54"],["/lib/iconfont/iconfont.woff2","67237f51228d117d1a3b1cbb739073dc"],["/lib/mdui_043tiny/mdui.css","fb530c1f4dfb27f90c6b73f0e830148a"],["/lib/mdui_043tiny/mdui.js","376467843944e6dbc27ba0fd585bd337"],["/page/gpt.html","c013de34cdd50cfd4e28e2013aad9a48"],["/page/index.html","1d856bbc1111ec8ab4d39cbbced3f3e1"],["/sw-register.js","c7be5ee697d44233dfe0517d08fbf3ce"],["/tags/bot相关/index.html","eed98153e0dad76a639e44a12aa53bf5"],["/tags/nginx/index.html","8d4f9b84e065a10249a0afd24cc4fce4"],["/tags/stable-diffusion/index.html","a0722b484f72398a718462f16da320d6"],["/tags/webgames/index.html","e35998b40ccf30ff038292ede8750e4b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
