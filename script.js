/*!
 * @module browser-dtector
 * @description A Javascript library to detect browser, version and platform
 * @version 3.2.0
 * @link https://github.com/sibiraj-s/browser-dtector.git
 * @licence MIT License, https://opensource.org/licenses/MIT
 */
!function (e, o) { "object" == typeof exports && "undefined" != typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define(o) : (e = "undefined" != typeof globalThis ? globalThis : e || self).BrowserDetector = o() }(this, (function () { "use strict"; function e(e, o) { for (var n = 0; n < o.length; n++) { var r = o[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } var o = { chrome: "Google Chrome", brave: "Brave", crios: "Google Chrome", edge: "Microsoft Edge", edg: "Microsoft Edge", fennec: "Mozilla Firefox", jsdom: "JsDOM", mozilla: "Mozilla Firefox", msie: "Microsoft Internet Explorer", opera: "Opera", opios: "Opera", opr: "Opera", rv: "Microsoft Internet Explorer", safari: "Safari", samsungbrowser: "Samsung Browser", electron: "Electron" }, n = { android: "Android", androidTablet: "Android Tablet", cros: "Chrome OS", fennec: "Android Tablet", ipad: "IPad", iphone: "IPhone", jsdom: "JsDOM", linux: "Linux", mac: "Macintosh", tablet: "Android Tablet", win: "Windows", "windows phone": "Windows Phone", xbox: "Microsoft Xbox" }, r = function (e) { var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, n = new RegExp("^-?\\d+(?:.\\d{0,".concat(o, "})?")), r = Number(e).toString().match(n); return r ? r[0] : null }, i = function () { return "undefined" != typeof window ? window.navigator : null }, t = function () { function t(e) { var o; !function (e, o) { if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function") }(this, t), this.userAgent = e || (null === (o = i()) || void 0 === o ? void 0 : o.userAgent) || null } var a, l, s; return a = t, l = [{ key: "parseUserAgent", value: function (e) { var t, a, l, s = {}, c = e || this.userAgent || "", d = c.toLowerCase().replace(/\s\s+/g, " "), u = /(edge)\/([\w.]+)/.exec(d) || /(edg)[/]([\w.]+)/.exec(d) || /(opr)[/]([\w.]+)/.exec(d) || /(jsdom)[/]([\w.]+)/.exec(d) || /(samsungbrowser)[/]([\w.]+)/.exec(d) || /(electron)[/]([\w.]+)/.exec(d) || /(chrome)[/]([\w.]+)/.exec(d) || /(crios)[/]([\w.]+)/.exec(d) || /(opios)[/]([\w.]+)/.exec(d) || /(version)(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d) || /(webkit)[/]([\w.]+).*(version)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d) || /(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d) || /(webkit)[/]([\w.]+)/.exec(d) || /(opera)(?:.*version|)[/]([\w.]+)/.exec(d) || /(msie) ([\w.]+)/.exec(d) || /(fennec)[/]([\w.]+)/.exec(d) || d.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(d) || d.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(d) || [], f = /(ipad)/.exec(d) || /(ipod)/.exec(d) || /(iphone)/.exec(d) || /(jsdom)/.exec(d) || /(windows phone)/.exec(d) || /(xbox)/.exec(d) || /(win)/.exec(d) || /(tablet)/.exec(d) || /(android)/.test(d) && !1 === /(mobile)/.test(d) && ["androidTablet"] || /(android)/.exec(d) || /(mac)/.exec(d) || /(linux)/.exec(d) || /(cros)/.exec(d) || [], p = u[5] || u[3] || u[1] || null, w = f[0] || null, x = u[4] || u[2] || null, b = i(); "chrome" === p && "function" == typeof (null == b || null === (t = b.brave) || void 0 === t ? void 0 : t.isBrave) && (p = "brave"), p && (s[p] = !0), w && (s[w] = !0); var m = Boolean(s.tablet || s.android || s.androidTablet), v = Boolean(s.ipad || s.tablet || s.androidTablet), g = Boolean(s.android || s.androidTablet || s.tablet || s.ipad || s.ipod || s.iphone || s["windows phone"]), h = Boolean(s.cros || s.mac || s.linux || s.win), y = Boolean(s.brave || s.chrome || s.crios || s.opr || s.safari || s.edg || s.electron), A = Boolean(s.msie || s.rv); return { name: null !== (a = o[p]) && void 0 !== a ? a : null, platform: null !== (l = n[w]) && void 0 !== l ? l : null, userAgent: c, version: x, shortVersion: x ? r(parseFloat(x), 2) : null, isAndroid: m, isTablet: v, isMobile: g, isDesktop: h, isWebkit: y, isIE: A } } }, { key: "getBrowserInfo", value: function () { var e = this.parseUserAgent(); return { name: e.name, platform: e.platform, userAgent: e.userAgent, version: e.version, shortVersion: e.shortVersion } } }], s = [{ key: "VERSION", get: function () { return "3.2.0" } }], l && e(a.prototype, l), s && e(a, s), Object.defineProperty(a, "prototype", { writable: !1 }), t }(); return t }));

window.onload = async () => {
    const loadingProgress = document.getElementById('loading-progress');
    const video = document.getElementById('video');
    const preload = document.getElementById('preload');
    const loading = document.getElementById('loading');
    const start = document.getElementById('start');
    const data = document.getElementById('data');

    const e = (m) => loading.innerText = m;
    const p = (k, d, s) => d && memes.push(`${k}: ${d}${s || ''}`);

    const memes = [];
    let step = 0;
    let interval;

    video.oncanplaythrough = async () => {
        const basic = await (await fetch('https://wtfismyip.com/json').catch(e)).json().catch(e);
        loadingProgress.textContent = '97';
        // we use ip-api.com for the next request, but using their api over https requires an api key so unfortunately we need to proxy it
        // yes, i agree, that is the weirdest limitation ever for an api but whatever lol
        const detailed = await (await fetch(`/json/${basic.YourFuckingIPAddress}`).catch(() => e('Disable your aggressive ad-blocker and refresh'))).json().catch(e);
        loadingProgress.textContent = '99';
        const detector = new BrowserDetector(window.navigator.userAgent).parseUserAgent();
        p('IP Address', basic.YourFuckingIPAddress);
        p('Country', detailed.country);
        p('Region', detailed.regionName);
        p('City', detailed.city);
        p('ZIP Code', detailed.zip);
        p('Full Location', basic.YourFuckingLocation);
        p('Latitude', detailed.lat);
        p('Longitude', detailed.lon);
        p('Timezone', detailed.timezone);
        p('Current Time', new Date().toLocaleString());
        p('ISP', detailed.isp);
        p('Organization', detailed.org);
        p('Autonomous System', detailed.as);
        p('Browser Name', detector.name);
        p('Platform Name', detector.platform);
        p('Browser Version', detector.version);
        p('Mobile/Tablet', (detector.isMobile || detector.isTablet) ? 'Yes' : 'No');
        p('Referrer', document.referrer || 'None');
        p('System Languages', navigator.languages.join(', '));
        p('Screen Width', screen.width, 'px');
        p('Screen Height', screen.height, 'px');
        if (screen.width != window.width || screen.height != window.height) {
            p('Window Width', window.outerWidth, 'px');
            p('Window Height', window.outerHeight, 'px');
        }
        p('Display Pixel Depth', screen.pixelDepth);
        if (typeof screen.orientation != 'undefined') {
            p('Screen Orientation', screen.orientation.type.split('-')[0]);
            p('Screen Rotation', screen.orientation.angle, ' degrees');
        }
        p('CPU Threads', navigator.hardwareConcurrency);
        p('Available Browser Memory', typeof window.performance.memory != 'undefined' ? Math.round(window.performance.memory.jsHeapSizeLimit / 1024 / 1024) : null, 'MB');

        const canvas = document.createElement('canvas');
        let gl;
        let debugInfo;

        try {
            gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        } catch (e) { }

        if (gl && debugInfo) {
            p('GPU Vendor', gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL));
            p('GPU Info', gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL));
        }

        loadingProgress.textContent = '100';

        loading.style.display = 'none';
        start.style.display = 'flex';
        preload.style.cursor = 'pointer';
    };

    video.onended = () => {
        video.style.display = 'none';
        if (interval) clearInterval(interval);
    }

    preload.onclick = () => {
        if (start.style.display != 'flex') return;
        preload.style.display = 'none';
        video.play();

        let fontSize = Math.min(window.innerHeight / 10, window.innerWidth / 20);
        data.style.fontSize = fontSize + 'px';
        interval = setInterval(() => {
            const time = video.currentTime - 13.166 - step * 0.500;
            // const time = video.currentTime - 0 - step * 0.100;
            if (time > 0) {
                if (step == 0) {
                    document.title = 'You just got jammed!';
                    plausible('Jammed');
                }
                const el = document.createElement('span');
                el.textContent = memes[step];
                data.appendChild(el);
                const height = data.getBoundingClientRect().height;
                if (height > window.innerHeight) {
                    fontSize = fontSize - (fontSize / 10);
                    data.style.fontSize = fontSize + 'px';
                }

                step++;
            }
        }, 10);
    }

    // shoutouts https://javascript.info/fetch-progress
    const response = await fetch('./jammin.mp4').catch(e);
    const reader = response.body.getReader();
    const contentLength = +response.headers.get('Content-Length');
    let receivedLength = 0;
    let chunks = [];
    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        receivedLength += value.length;
        loadingProgress.textContent = Math.floor(receivedLength / contentLength * 95);
    }

    video.src = URL.createObjectURL(new Blob(chunks, { type: 'video/mp4' }));
    video.load();
}