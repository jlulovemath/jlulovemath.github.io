/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/02/01/model/index.html","2a76acddf53194739defd7c6081a5657"],["/2022/02/04/physics/index.html","061cbd4ab9a807898fb4390f6b25728f"],["/2022/04/03/LaTeX/index.html","bf59237978d45cac713242ab6d8ff9b2"],["/2022/04/03/abstract/index.html","f5f585e42843dd47d90785a38d2ea289"],["/2022/04/04/algebra/index.html","3adc38b6de65b0edd8a312face2510e7"],["/2022/04/05/topology/index.html","185632f2ebddcd120526e711b82401e7"],["/2022/04/06/probability/index.html","8c2d19c84e9735b874af3973d2e0e7e5"],["/2022/04/07/Complex Analysis/index.html","79b4f0abfea7cca21e3be83e0816e7df"],["/2022/04/08/ode/index.html","1d89e3f43d0067145fe6e34af001ecc7"],["/2022/04/09/linear/index.html","0c65b12845bfd62338fff77c0f6b3cbd"],["/2022/04/10/analysis/index.html","3d251ddf620db9f7a605214d84b36587"],["/2022/04/30/Exam/index.html","72aa799b27f1333b3fb18a20b3005cc9"],["/2022/05/01/AI/index.html","5a7ba8d6bb7ee44ca22f39b3a42030ca"],["/2022/05/01/Python/index.html","f595e4a095e55302af10a7575deac46a"],["/2022/05/01/huawei/index.html","3f0b9862b6e5c815576483b81d016ac7"],["/2022/05/02/computing/index.html","766ea85fc89ca9e43bab94efef00ce50"],["/2022/05/04/kongjie/index.html","3b82aca506470d118a677af38d0a5b26"],["/2022/05/05/welcome/index.html","c411eee223039ed8b876dedfe7d48047"],["/2022/05/05/welcome/pinglun2.png","49ad8f8a59584ed4a9411cf04d5f12f5"],["/2022/05/10/real/index.html","137d542cd280c2482250906406a9f2c8"],["/2022/05/12/pde/index.html","8ea698041df5ecfbeb425759f83f54b6"],["/2022/06/05/Fourier/index.html","91db3aef836dfda2901aec5ec0b38727"],["/2022/06/05/differential/index.html","3eb462c4c8761a649b02ad41c370569a"],["/2022/06/05/functional/index.html","c89689ca2bf066af9f574aac797e1386"],["/2022/06/05/harmonic/index.html","f389a32e2335f8f1bc3d9874893c52f8"],["/2022/06/05/number/index.html","23d2331e03cf5a7d03391a93639e6486"],["/2022/06/07/statistic/index.html","ba3ea530672306b8359867aa81d1d7c0"],["/2022/06/07/warning/index.html","ade7c407660eb31711859dba0c8d6e29"],["/about/index.html","bfc42c1ba82a9c6ed0007e9ec7a8ba0e"],["/about/index/connect-165468372209115.png","52b4903717082d7864c2e63ea6533f9e"],["/about/index/connect.png","52b4903717082d7864c2e63ea6533f9e"],["/about/index/daovoice-16546837220917.png","ba75985f1d9cce0a0467360ba4bc0c00"],["/about/index/daovoice.png","ba75985f1d9cce0a0467360ba4bc0c00"],["/about/index/daovoice2-16546837220919.png","23946a34776f507e4a81d4c0254947fe"],["/about/index/daovoice2.png","23946a34776f507e4a81d4c0254947fe"],["/about/index/ip-165468372209117.png","6e6c1c60a80602431ec665251dd10cab"],["/about/index/ip.png","6e6c1c60a80602431ec665251dd10cab"],["/about/index/ip2-165468372209119.png","15b68343d1a27f985c2fc170a2e0fe3f"],["/about/index/ip2.png","15b68343d1a27f985c2fc170a2e0fe3f"],["/about/index/night-16546837220915.png","600c72df03f82c2782309c612d4db9c8"],["/about/index/night.png","600c72df03f82c2782309c612d4db9c8"],["/about/index/pinglun-165468372209111.png","e5254b16bbed0243f16d20039a7d92c8"],["/about/index/pinglun.png","e5254b16bbed0243f16d20039a7d92c8"],["/about/index/pinglun2-165468372209113.png","49ad8f8a59584ed4a9411cf04d5f12f5"],["/about/index/pinglun2.png","49ad8f8a59584ed4a9411cf04d5f12f5"],["/about/index/search-16546837220903.png","d2b109bb33404a21107f48d2cae00042"],["/about/index/search.png","d2b109bb33404a21107f48d2cae00042"],["/about/index/shuoming_1-16546837220901.png","067ddb0730d19169eb35f0571474b719"],["/about/index/shuoming_1.png","067ddb0730d19169eb35f0571474b719"],["/archives/2022/02/index.html","32d5ea196c81fbdc83a3476405fed74d"],["/archives/2022/04/index.html","d4ba7cfc57aa30e95fe399103c4ff6c4"],["/archives/2022/05/index.html","e0a845c8dfd25af6046d56dc0cb9eb80"],["/archives/2022/06/index.html","368f18dfa498f33cc580f60c9e0dba5b"],["/archives/2022/index.html","5d55f4c0a0a21caedbdf8e83ec05c9bb"],["/archives/2022/page/2/index.html","5d55f4c0a0a21caedbdf8e83ec05c9bb"],["/archives/2022/page/3/index.html","5d55f4c0a0a21caedbdf8e83ec05c9bb"],["/archives/index.html","948770f5c61877be715b7e3e9c93a543"],["/archives/page/2/index.html","df59795387ae81d1571b44e7f830544a"],["/archives/page/3/index.html","df59795387ae81d1571b44e7f830544a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Exam/index.html","cc3333dbb6b684084266686577613965"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","6066ca68f30bba03dc8fe807698a4695"],["/images/icons/apple-touch-icon.png","fab192ef56f04e928db305c5e785e2e2"],["/images/icons/favicon-128x128.png","06fe17da51910ed593eedbca0c7ef945"],["/images/icons/favicon-144x144.png","7fd9ed1cbd5ebcf328e3db410b67cefe"],["/images/icons/favicon-16x16.png","4dd383ad5bc5c59766445ee5b3932d69"],["/images/icons/favicon-32x32.png","770e003b169748f2f96051526245707a"],["/images/icons/zhaoo-logo.png","01a00f2639640625ec09bf26cf4e9627"],["/images/theme/cloud.png","47f6eee15b4479edb6b937e6694869d0"],["/images/theme/loading.gif","23060ec23044bcbdbc40a2c6ec428096"],["/images/theme/post-image(2).jpg","a2ee6967b533b14083fa059d961debfc"],["/images/theme/welcome-image(2).jpg","a4ec0b03f7a8959115257a5cd874c1b2"],["/images/theme/welcome-image(4).jpg","8ac1abf50fd9a6b8788ef007be338a14"],["/images/theme/welcome-image.jpg","34267cf553078f6e6aa9b87f0055ab28"],["/index.html","253eaf293b470be100ded5c66a72507d"],["/js/color-mode.js","b986ac90c5b5ffaf6919f2b8ea8ef4fc"],["/js/script.js","30e0fbc2ba9db20e2e5217e0b9715ce2"],["/js/utils.js","1b7c47dd1d6ae2b354618a7c17a78bfb"],["/lib/daovoice/daovoice.js","49f6970ed659a1f5304c3f365e8f0c6d"],["/lib/fancybox/fancybox.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/gitalk/gitalk.css","64394b6af6b23d33c0034f58fd403ce2"],["/lib/gitalk/gitalk.js","859b454a0b478a1e7a73776976895070"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/highlight/a11y-dark.css","7d9fb526ffbe304d2a2b347cec19c629"],["/lib/highlight/highlight.js","c3a41252a43342577903313720e2cce1"],["/lib/jquery/jquery.js","220afd743d9e9643852e31a135a9f3ae"],["/lib/lazyload/lazyload.js","112c8d1b40b3e62e883c743e9d71e0bf"],["/lib/lottie/lottie.js","5ca6245068724694ec949f7eac971618"],["/lib/pjax/pjax.js","17fbd50e03d8b8caa56dd3e01d098153"],["/lib/qrcode/qrcode.js","05f0b1d7d4b9b0b4975870606d650e3c"],["/page/2/index.html","381bad71af9cbb5e03018b393dbee14f"],["/page/3/index.html","303d1f5cad2e55316b6c034e08e320ac"],["/sw-register.js","bf3800bc8e74be9f1c4befa1020a03de"]];
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
