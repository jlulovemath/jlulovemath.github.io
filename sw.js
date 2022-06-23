/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/02/01/model/index.html","380c98947c1c74383ef0eaa07c11c878"],["/2022/02/04/physics/index.html","7f8a19e23f3d764b8f09f881b685460a"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Fbuild-165595374798825.png","cfafdff7033b82fb6f390f819acf8a0e"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Fbuild.png","cfafdff7033b82fb6f390f819acf8a0e"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Fconvert-165595382032433.png","0e3bf8c5a4d39f773da6712ee51ce089"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Fconvert.png","0e3bf8c5a4d39f773da6712ee51ce089"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Ffigure-165595379968631.png","a8c523567810278af223101ac7a71892"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Ffigure.png","a8c523567810278af223101ac7a71892"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Fgeneral-165595371821623.png","52a8a7374604bd19ea0c3bf62bb07be5"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Fgeneral.png","52a8a7374604bd19ea0c3bf62bb07be5"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Fhello-165595376662227.png","6963663d2035fb06cbca0123e0b685a2"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Fhello.png","6963663d2035fb06cbca0123e0b685a2"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Finstall-tl-windows-165595360034913.png","f68be35444b044ab673cbf5df0616537"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Finstall-tl-windows-165595366360017.png","f68be35444b044ab673cbf5df0616537"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Finstall-tl-windows.png","f68be35444b044ab673cbf5df0616537"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Ftexdoc-165595378240929.png","d2425e042beaa9d107d4092db5756216"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Ftexdoc.png","d2425e042beaa9d107d4092db5756216"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Ftexliveiso-165595357540711.png","34cb391c2d225723c2078b6e9148dc56"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Ftexliveiso-165595364039215.png","34cb391c2d225723c2078b6e9148dc56"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Ftexliveiso.png","34cb391c2d225723c2078b6e9148dc56"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Ftexstudio-165595368904119.png","aac907ee1c199b30149543ad12870e19"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Ftexstudio.png","aac907ee1c199b30149543ad12870e19"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Ftexstudio1-165595370061521.png","0fa36718c110f54f5ac09fac35261a06"],["/2022/04/03/LaTeX/LaTeX%2Fimages%2Ftexstudio1.png","0fa36718c110f54f5ac09fac35261a06"],["/2022/04/03/LaTeX/build.png","cfafdff7033b82fb6f390f819acf8a0e"],["/2022/04/03/LaTeX/convert.png","0e3bf8c5a4d39f773da6712ee51ce089"],["/2022/04/03/LaTeX/cv.jpg","3b204f138d720a810bc6113119ab4eac"],["/2022/04/03/LaTeX/cv2.jpg","fdaabcb5f0e8785a693aa8eba35adb92"],["/2022/04/03/LaTeX/figure.png","a8c523567810278af223101ac7a71892"],["/2022/04/03/LaTeX/general.png","52a8a7374604bd19ea0c3bf62bb07be5"],["/2022/04/03/LaTeX/hello.png","6963663d2035fb06cbca0123e0b685a2"],["/2022/04/03/LaTeX/index.html","326e438e0a240a09271e8a1bf18401a3"],["/2022/04/03/LaTeX/install-tl-windows.png","f68be35444b044ab673cbf5df0616537"],["/2022/04/03/LaTeX/texdoc.png","d2425e042beaa9d107d4092db5756216"],["/2022/04/03/LaTeX/texliveiso.png","34cb391c2d225723c2078b6e9148dc56"],["/2022/04/03/LaTeX/texstudio.png","aac907ee1c199b30149543ad12870e19"],["/2022/04/03/LaTeX/texstudio1.png","0fa36718c110f54f5ac09fac35261a06"],["/2022/04/03/abstract/index.html","a4c207b1e0dcd3725ad1e8c3538b76a9"],["/2022/04/04/algebra/index.html","2c9f80e6a60c05af3665d7c26e007d0d"],["/2022/04/05/topology/index.html","77565072ba8d139fa47d51729b7a0548"],["/2022/04/06/probability/index.html","4677ed6d58c88bfed90820f62e0a4dfd"],["/2022/04/07/Complex Analysis/index.html","e3fe71942d2d33e77b6fd321e6d9aecd"],["/2022/04/08/ode/index.html","0f85acd258c110ad32dd1261df63e008"],["/2022/04/09/linear/index.html","779b63ac49ee2c69dfe90b8692fab3d0"],["/2022/04/10/analysis/index.html","cfa79bfaccb5f681d041d86ba675ddd3"],["/2022/04/30/Exam/index.html","4013cfed7aef4aea756cefb1f580c509"],["/2022/05/01/AI/index.html","10cc6c2bbbe6e6e2c6597f7cad8ddfa7"],["/2022/05/01/Python/index.html","8b0fc77503840e754b524d2be89150d2"],["/2022/05/01/huawei/index.html","f9b34439e41f5b9d00dca037918d593f"],["/2022/05/02/computing/index.html","1efae3c183c6fc2cf90699a21a844d44"],["/2022/05/04/kongjie/index.html","0b169f6fe4aa613ee786c6d3321cf459"],["/2022/05/05/welcome/index.html","cfb5ac354b0305bbfd7011adfab89b68"],["/2022/05/05/welcome/pinglun2.png","49ad8f8a59584ed4a9411cf04d5f12f5"],["/2022/05/10/real/index.html","77a7c3a5e9ca2c32c51bcdfa64f810d6"],["/2022/05/12/pde/index.html","2957a0cb636869f8d846f438744027ff"],["/2022/06/05/Fourier/index.html","00528d0878b915f2156f56ddb5f97f46"],["/2022/06/05/differential/index.html","23632968ba46a0f4d98fef15383902b7"],["/2022/06/05/functional/index.html","4b08195fa9c4c2efc0cbe754d30d3913"],["/2022/06/05/harmonic/index.html","7e3b5553da619d9e1fc0ad265151ba04"],["/2022/06/05/number/index.html","815f557965c1b400e13afa789a258835"],["/2022/06/07/statistic/index.html","e1ff1b49828e0ef5972f1552ede2ff18"],["/2022/06/07/warning/index.html","ef6bf20d567076e01dc9a2589aeb17d8"],["/about/index.html","e8a7de2d27d5279baf9de902a32fc462"],["/about/index/connect-165468372209115.png","52b4903717082d7864c2e63ea6533f9e"],["/about/index/connect.png","52b4903717082d7864c2e63ea6533f9e"],["/about/index/daovoice-16546837220917.png","ba75985f1d9cce0a0467360ba4bc0c00"],["/about/index/daovoice.png","ba75985f1d9cce0a0467360ba4bc0c00"],["/about/index/daovoice2-16546837220919.png","23946a34776f507e4a81d4c0254947fe"],["/about/index/daovoice2.png","23946a34776f507e4a81d4c0254947fe"],["/about/index/ip-165468372209117.png","6e6c1c60a80602431ec665251dd10cab"],["/about/index/ip.png","6e6c1c60a80602431ec665251dd10cab"],["/about/index/ip2-165468372209119.png","15b68343d1a27f985c2fc170a2e0fe3f"],["/about/index/ip2.png","15b68343d1a27f985c2fc170a2e0fe3f"],["/about/index/night-16546837220915.png","600c72df03f82c2782309c612d4db9c8"],["/about/index/night.png","600c72df03f82c2782309c612d4db9c8"],["/about/index/pinglun-165468372209111.png","e5254b16bbed0243f16d20039a7d92c8"],["/about/index/pinglun.png","e5254b16bbed0243f16d20039a7d92c8"],["/about/index/pinglun2-165468372209113.png","49ad8f8a59584ed4a9411cf04d5f12f5"],["/about/index/pinglun2.png","49ad8f8a59584ed4a9411cf04d5f12f5"],["/about/index/search-16546837220903.png","d2b109bb33404a21107f48d2cae00042"],["/about/index/search.png","d2b109bb33404a21107f48d2cae00042"],["/about/index/shuoming_1-16546837220901.png","067ddb0730d19169eb35f0571474b719"],["/about/index/shuoming_1.png","067ddb0730d19169eb35f0571474b719"],["/archives/2022/02/index.html","950c5e646a3e0a5a3bea60de11791185"],["/archives/2022/04/index.html","f0b2ae8f2a7c75af0adb5b94187539e9"],["/archives/2022/05/index.html","96c2f954979bbea654439b8e34a19b68"],["/archives/2022/06/index.html","018c4de7801115fb12ea677485935ad2"],["/archives/2022/index.html","927531b7811d576f881765c274abecbd"],["/archives/2022/page/2/index.html","927531b7811d576f881765c274abecbd"],["/archives/2022/page/3/index.html","927531b7811d576f881765c274abecbd"],["/archives/index.html","50e0b5ec6ee273aee11fa3f83cb90c9b"],["/archives/page/2/index.html","1865985b0b2f26f841bc8a0429a03306"],["/archives/page/3/index.html","1865985b0b2f26f841bc8a0429a03306"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Exam/index.html","846a0f698f244d98e88f9423792d22ce"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","83ea89eac8eccab2e67aa55cc35b36c2"],["/images/icons/apple-touch-icon.png","fab192ef56f04e928db305c5e785e2e2"],["/images/icons/favicon-128x128.png","06fe17da51910ed593eedbca0c7ef945"],["/images/icons/favicon-144x144.png","7fd9ed1cbd5ebcf328e3db410b67cefe"],["/images/icons/favicon-16x16.png","4dd383ad5bc5c59766445ee5b3932d69"],["/images/icons/favicon-32x32.png","770e003b169748f2f96051526245707a"],["/images/icons/zhaoo-logo.png","01a00f2639640625ec09bf26cf4e9627"],["/images/theme/cloud.png","47f6eee15b4479edb6b937e6694869d0"],["/images/theme/loading.gif","23060ec23044bcbdbc40a2c6ec428096"],["/images/theme/post-image(2).jpg","a2ee6967b533b14083fa059d961debfc"],["/images/theme/welcome-image(2).jpg","a4ec0b03f7a8959115257a5cd874c1b2"],["/images/theme/welcome-image(4).jpg","8ac1abf50fd9a6b8788ef007be338a14"],["/images/theme/welcome-image.jpg","34267cf553078f6e6aa9b87f0055ab28"],["/index.html","cf07f51780b8e333a19a9ea02558b008"],["/js/color-mode.js","b986ac90c5b5ffaf6919f2b8ea8ef4fc"],["/js/script.js","30e0fbc2ba9db20e2e5217e0b9715ce2"],["/js/utils.js","1b7c47dd1d6ae2b354618a7c17a78bfb"],["/lib/daovoice/daovoice.js","49f6970ed659a1f5304c3f365e8f0c6d"],["/lib/fancybox/fancybox.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/gitalk/gitalk.css","64394b6af6b23d33c0034f58fd403ce2"],["/lib/gitalk/gitalk.js","859b454a0b478a1e7a73776976895070"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/highlight/a11y-dark.css","7d9fb526ffbe304d2a2b347cec19c629"],["/lib/highlight/highlight.js","c3a41252a43342577903313720e2cce1"],["/lib/jquery/jquery.js","220afd743d9e9643852e31a135a9f3ae"],["/lib/lazyload/lazyload.js","112c8d1b40b3e62e883c743e9d71e0bf"],["/lib/lottie/lottie.js","5ca6245068724694ec949f7eac971618"],["/lib/pjax/pjax.js","17fbd50e03d8b8caa56dd3e01d098153"],["/lib/qrcode/qrcode.js","05f0b1d7d4b9b0b4975870606d650e3c"],["/page/2/index.html","65cc33545d8b322e226822e229d437d5"],["/page/3/index.html","7fb0d607de0c5d4f6166240dcd5092b7"],["/sw-register.js","ceac43b07f38e44b98b5990d92f8a438"]];
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
