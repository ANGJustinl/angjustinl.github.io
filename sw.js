/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2013/12/24/elements/index.html","755a148a6f094b3e1c14cde87b0252a2"],["/2013/12/24/hello-world/index.html","1f8576a64d39353ae187c3a69a006776"],["/2013/12/24/link-post-without-title/index.html","13b13bb450c8ea6f46811f03b4353062"],["/2013/12/24/link-post/index.html","5d18c4da836fb9f18955a73914ed69be"],["/2013/12/24/long-title/index.html","ca64626ae89375e82043bd6006b50bbe"],["/2013/12/24/中文測試/index.html","76e374fabd48787647ce6dddbddf4eb4"],["/2013/12/24/日本語テスト/index.html","428d599c1465fd59ee84005ac14fee5f"],["/2013/12/25/excerpts/index.html","de1d75d1cb84d9819d36c7b290cd4fe3"],["/2013/12/25/gallery-post/index.html","d33babf11e809d5bd304aeb3bedae54d"],["/2013/12/25/no-title/index.html","17b4f100275de80bb745ae3741a01318"],["/2013/12/25/tag-plugins/index.html","bc4110e5c5c57aabaefb3a49028c2911"],["/2013/12/25/tags/index.html","0ec6256548e086606de307074287c0f1"],["/2013/12/25/videos/index.html","cc23a4a58b9c911aaf9a640caa6ee057"],["/2013/12/26/images/index.html","39466007d1eefdc9bbf713d348f308be"],["/2018/07/24/markdown/index.html","e01c77ad1f5f69af5312d800148f02c7"],["/2019/07/25/code-highlight/index.html","494952137597fe3da08330f0a523dfc2"],["/2023/01/05/昂昂bot指令/index.html","cd6084f38a8d06d318c4f5b8174be452"],["/2023/01/06/ANGANGBOT1/index.html","974e73d0f29e735ed60b0849f3767f48"],["/PY.html","4cc014ee33348934cfb282a635371855"],["/about.html","c8460214512c0c2b8edce82d072bfd99"],["/archive.html","41495c7239aaa61276085dac28039fa1"],["/archives/2013/12/index.html","782c18aa8266c28cc658d323be4f7170"],["/archives/2013/12/page/2/index.html","3930ac899b68a1f1c16d5a3e9c00427e"],["/archives/2013/index.html","f34b0afd36b1fbcc14bc77d60a59cc80"],["/archives/2013/page/2/index.html","bf3d5c3782f0f7ecdec63ea62d3d7ceb"],["/archives/2018/07/index.html","022f947656d8658947dceb1808ecd4aa"],["/archives/2018/index.html","f3cb6f62cb9d06d6b56844fcb68a90a0"],["/archives/2019/07/index.html","5ff07eb5d473b85189039beb03cab40e"],["/archives/2019/index.html","9ab0916f087cf49eec4a97b35b4f17d9"],["/archives/2023/01/index.html","0955f6bd32421c11e3a6f152c300f89d"],["/archives/2023/index.html","874117e3c3d110f643bcba006c72f778"],["/archives/index.html","1696b9e59c43cdd6431991e13318400d"],["/archives/page/2/index.html","b074b4a76ce6230798beb6017db4fa72"],["/assets/avatar.png","9459ba35f32c556115db02b675892b5d"],["/assets/ba/ClanChat_Emoji_21_Tw.png","96837078f809a33c8f64f6e7b15e711e"],["/assets/ba/ClanChat_Emoji_22_Tw.png","4076288e80e02903eae9acac57b5bbe6"],["/assets/ba/ClanChat_Emoji_23_Tw.png","59e4c735d9d9fd0a1b3b5ff9aaf80e19"],["/assets/ba/ClanChat_Emoji_24_Tw.png","3b5a07f15e3ea4f718246d079553ca1c"],["/assets/ba/ClanChat_Emoji_25_Tw.png","7752a6456bd50520b52c022ea9bd16a8"],["/assets/ba/ClanChat_Emoji_26_Tw.png","b38cccb4194bb86000e4a248349ee173"],["/assets/ba/ClanChat_Emoji_27_Tw.png","cd4f757763d21466dbcfe2b68014f67a"],["/assets/ba/ClanChat_Emoji_28_Tw.png","5f32539cf00c7de152f43792a0776dcb"],["/assets/ba/ClanChat_Emoji_29_Tw.png","cb1e766137ecd42ec0f1bd80e3e7dd95"],["/assets/ba/ClanChat_Emoji_30_Tw.png","fb6a45879ebb38cd81b602e945db0116"],["/assets/ba/ClanChat_Emoji_31_Tw.png","27ef1824b5b82f653a808c1ffa8f67bc"],["/assets/ba/ClanChat_Emoji_32_Tw.png","6b416f2fbd959813671f68170cd2f0e0"],["/assets/ba/ClanChat_Emoji_33_Tw.png","25ddf76e98458bd09bb3a06e2ef9e610"],["/assets/ba/ClanChat_Emoji_34_Tw.png","fc4521647b418fcc7a3ef2b84473d103"],["/assets/ba/ClanChat_Emoji_35_Tw.png","6976d9d2fb82a44155f17cdbcee62ff3"],["/assets/ba/ClanChat_Emoji_36_Tw.png","07806bf2003674fbad9b12057ecf5044"],["/assets/ba/ClanChat_Emoji_37_Tw.png","bc8e71c0824dbd412ba8461d48d637d5"],["/assets/ba/ClanChat_Emoji_38_Tw.png","cbee56f99cd6fe34c18c093a53d03db0"],["/assets/ba/ClanChat_Emoji_39_Tw.png","632f4f1586dfabcdd45195bb48acc0c5"],["/assets/ba/ClanChat_Emoji_40_Tw.png","9921008b2f3da288cff8ae82fc8c035d"],["/assets/ba/ClanChat_Emoji_41_Tw.png","fe8dadcbb71969a8ba3be83645ce289f"],["/assets/ba/ClanChat_Emoji_42_Tw.png","54e1bf91c29a7b01a45f576a1e760644"],["/assets/ba/ClanChat_Emoji_43_Tw.png","0989812a198aafecbddf58e7994fac41"],["/assets/ba/ClanChat_Emoji_44_Tw.png","3dccf7625dce7e3492d5012f82b57857"],["/assets/ba/ClanChat_Emoji_45_Tw.png","9d09e2c43ba44dac0c8c9dc4cd746fe2"],["/assets/ba/ClanChat_Emoji_46_Tw.png","bbdedcc19fb89167a070ff0dca50bb2e"],["/assets/ba/ClanChat_Emoji_47_Tw.png","c6cc5689a6561f03584b7f45eccb6584"],["/assets/ba/ClanChat_Emoji_48_Tw.png","be6769e8e3db5f7e557fd4b6a0f77545"],["/assets/ba/ClanChat_Emoji_49_Tw.png","4311d77ea37fb62f7a958b4e652425ef"],["/assets/ba/ClanChat_Emoji_50_Tw.png","58c5b27f106ee5aaf7679c7d17240808"],["/assets/ba/ClanChat_Emoji_51_Tw.png","b5121a0ecc4cee4ee24fb8d32d961093"],["/assets/ba/ClanChat_Emoji_52_Tw.png","b0d6a6b04647ada35624eecab3dbd35d"],["/assets/ba/ClanChat_Emoji_53_Tw.png","9d1264a5742e6314b3ab91ae3162cd41"],["/assets/ba/ClanChat_Emoji_54_Tw.png","1594234a85e6e9f25453e2aa5ef892bf"],["/assets/ba/ClanChat_Emoji_55_Tw.png","b2ccfaab68002626b9c6a99e653cfb4f"],["/assets/ba/ClanChat_Emoji_56_Tw.png","14ff6e076fbadbfe9ff322e947a598f7"],["/assets/ba/ClanChat_Emoji_57_Tw.png","225c3e05e00db34c022dbdd7772374ec"],["/assets/ba/ClanChat_Emoji_58_Tw.png","8b1396fc4b664b28f9d17b6785c69112"],["/assets/ba/ClanChat_Emoji_59_Tw.png","db83a09dcc8a0c80593c01d96645243b"],["/assets/ba/ClanChat_Emoji_60_Tw.png","7c647919b5c69eb753d6c43f43677c81"],["/assets/ba/Clanchat_Emoji_01_Tw.png","d0695d0680a6e810fc1f55dd6d5b0b05"],["/assets/ba/Clanchat_Emoji_02_Tw.png","05e2ca7f86a73a5325e7f12463a10be7"],["/assets/ba/Clanchat_Emoji_03_Tw.png","0defd1df417509c2dedbd7a675ad741d"],["/assets/ba/Clanchat_Emoji_04_Tw.png","902aa9d74fe62c3f9fb8c05bee0063ba"],["/assets/ba/Clanchat_Emoji_05_Tw.png","6010b6c74fedaf869de6524d1c214d72"],["/assets/ba/Clanchat_Emoji_06_Tw.png","dc816cffabc661eaee984bb133b63680"],["/assets/ba/Clanchat_Emoji_07_Tw.png","aa791e232f6f56cd94365c2c170d9c43"],["/assets/ba/Clanchat_Emoji_08_Tw.png","877ac81a5de51e082d0fe0f75190032b"],["/assets/ba/Clanchat_Emoji_09_Tw.png","1b31653edb89635f1ecff0ab49c6ca43"],["/assets/ba/Clanchat_Emoji_10_Tw.png","e6ce4169c8d51af3141e6859eaab5a1b"],["/assets/ba/Clanchat_Emoji_11_Tw.png","43f909a616fb2d478d801199c772936f"],["/assets/ba/Clanchat_Emoji_12_Tw.png","292e16df9ed129dfd80016e926abc8b9"],["/assets/ba/Clanchat_Emoji_13_Tw.png","cd85f2fc8ae25813c7028a663bb054a7"],["/assets/ba/Clanchat_Emoji_14_Tw.png","f59df5b61a62801d28634c55a36e7275"],["/assets/ba/Clanchat_Emoji_15_Tw.png","d70d9dd2d7c39080b90196aa32304f33"],["/assets/ba/Clanchat_Emoji_16_Tw.png","2c8fbff35ac0abab1ee8b88d78d27005"],["/assets/ba/Clanchat_Emoji_17_Tw.png","3a09530f26dcc6509683d25ff2cd600e"],["/assets/ba/Clanchat_Emoji_18_Tw.png","34e5ab6e6a326918b85b320e130ea919"],["/assets/ba/Clanchat_Emoji_19_Tw.png","99ed26e13cc1db2e7211e56fb80b1384"],["/assets/ba/Clanchat_Emoji_20_Tw.png","900ceb5cd1dc2272de8af8ed0f03fda9"],["/assets/ba/hfm.jpg","bbd022c7950c16fcb797b39e35dda179"],["/assets/ba/kksk.jpg","ef8074b49b8c7979f01499ff79a07465"],["/assets/ba/偷跑偷跑.jpg","727be44011a97e960e824e46277f8b33"],["/assets/ba/发电发电.jpg","6e24fe333da58aea1ae2d0d3042475de"],["/assets/ba/发癫.jpg","ef1bd33605746d5fdad549af9429e4d2"],["/assets/ba/吃井.jpg","8aad648a59ec30ffcf12bee44461d5bd"],["/assets/ba/吹号.gif","37cbbfd40f4e0ae7f27f0b2b782c7504"],["/assets/ba/大叔？.jpg","0ffa89258eebe60dd420b577a01a1001"],["/assets/ba/梓宝.jpg","3ada23a6ef7ad58d212c0eda45957432"],["/assets/ba/正确与否.jpg","695b7ed36b7b95926fa294d5dbfc614f"],["/assets/ba/没包.jpg","115db9da8f6a2d514b5e43a94577c2cf"],["/assets/ba/爱丽丝.gif","f922998090b8cca4becc23ab3f3c7fff"],["/assets/ba/背叛.jpg","a0a849cc1433c2a4188fda7639974234"],["/assets/ba/被偷跑了.jpg","4c0cd238b4cb8ab75e9f301ba8a2991c"],["/assets/ba/轮椅人.jpg","251f847e0e90c6851a1c467b7680e506"],["/assets/ba/运动会.jpg","c567924f72202337f994572e770460f2"],["/assets/ba/都是rfm干的.jpg","ed412b03265de5251d5257da9e7ee434"],["/assets/ba/飞.jpg","de7b21b8508750a3e0200519ae7be111"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/front2.png","eaa3089dc791a50e2611688347717b95"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/昂昂bot/index.html","727dac4e2c2b123ee51b1184cb7c815e"],["/css/color.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/dark.css","0d4805f4285bfd53717919f443a2f35b"],["/css/style.css","b3ac7e22f63dfb432e74472764ff3437"],["/index.html","e00207da67fd944f57bfa5cdc146d6d4"],["/js/app.js","ffe180a654f4dab43445042e5aef01fa"],["/js/search.js","c772c804b6b4713a56f8870b7167b8b4"],["/js/typed.js","b1a97e0f8d6f803597a4d0c48aca226b"],["/lib/iconfont/demo.css","31103ad158e19b978f7e730ff5ac959b"],["/lib/iconfont/demo_index.html","1dc929bae688db98b5ac30b6c0df8dd4"],["/lib/iconfont/iconfont.css","de1106b71b5b70d18b5b8e99f8b13aa5"],["/lib/iconfont/iconfont.eot","46f2b979c35db38b3839203588346e17"],["/lib/iconfont/iconfont.js","376d5ee8e8c341005279e4c3217208ab"],["/lib/iconfont/iconfont.svg","fd60594b9aa64fb43b8c9eeea8295a11"],["/lib/iconfont/iconfont.ttf","322b9f7378c0cc75a539110573a4d758"],["/lib/iconfont/iconfont.woff","659664895379a91a797fa9059ef6cf54"],["/lib/iconfont/iconfont.woff2","67237f51228d117d1a3b1cbb739073dc"],["/lib/jquery.fancybox.min.css","da3e10722b9615f3ff8af1a6615a3400"],["/lib/mdui_043tiny/css/mdui.css","fb530c1f4dfb27f90c6b73f0e830148a"],["/lib/mdui_043tiny/js/mdui.js","b83d858e2a8dc8b0e92cefe8ae619939"],["/page/2/index.html","80b6af8486b1b3de8f6b2e5d08cd34af"],["/page/index.html","57a032fcbe6d6dc0f0409441035e50a8"],["/sw-register.js","eaf84ea8d6b1cd9fa00fbae0f2d3b806"],["/tags/bot相关/index.html","7f05a33f791867e4dec82a773ca880c1"]];
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
