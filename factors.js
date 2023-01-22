var factorsai = function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    return r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 6)
}([function(e, t) {
    e.exports = {
        info: function(e) {
            console.log(e)
        },
        error: function(e) {
            console.error(e)
        },
        debug: function(e, t = !0) {
            1 == window.FACTORS_DEBUG && (t ? console.trace("%c" + e, "color: red") : console.log(e))
        },
        errorLine: function(e) {
            let t = "";
            "string" == typeof e && (t = e), e instanceof Error && e.message && (t = e.message), "" != t && console.error(t)
        }
    }
}, function(e, t) {
    e.exports = {
        validatedStringArg: function(e, t) {
            if ("string" != typeof t) throw new Error("FactorsArgumentError: Invalid " + e);
            if (!(t = t.trim())) throw new Error("FactorsArgumentError: " + e + " cannot be empty.");
            return t
        },
        convertIfNumber: function(e) {
            return e.match(/^[+-]?\d+(\.\d+)?$/) ? (n = Number(e), isNaN(n) ? e : n) : e
        },
        getCleanHash: function(e) {
            return e.split("?")[0]
        },
        parseURLString: function(e = "") {
            if ("" == e || !e) return {
                host: "",
                path: "",
                hash: ""
            };
            var t = document.createElement("a");
            return t.setAttribute("href", e), {
                host: t.host,
                path: t.pathname,
                hash: t.hash
            }
        },
        getCurrentUnixTimestampInMs: function() {
            return (new Date).getTime()
        },
        isLocalStorageAvailable: function() {
            if (void 0 == window.localStorage) return !1;
            try {
                var e = "factors-test";
                window.localStorage.setItem(e, "test");
                var t = "test" == window.localStorage.getItem(e);
                return window.localStorage.removeItem(e), t
            } catch (e) {
                return !1
            }
        }
    }
}, function(e, t, r) {
    const n = r(0),
        o = "data-factors-form-bind",
        i = "data-factors-click-bind",
        a = "trigger-form-binding";

    function c(e) {
        return !(!e || !e.form) && e.form.querySelectorAll("[type='submit']") > 0
    }

    function s() {
        window.clearInterval(window.FACTORS_FORM_BINDER_ID), n.debug("Stopped form binder task.")
    }

    function u(e, t, r) {
        var n = e.getAttribute(t);
        n && (n = n.trim(), r[t] = n)
    }

    function d(e) {
        return e.replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, "").trim()
    }
    e.exports = {
        isEmail: function(e) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())
        },
        isPhone: function(e) {
            if (!e || 0 == e.length) return !1;
            if (/[a-zA-Z]/g.test(e)) return !1;
            var t = e.match(/\d/g);
            return !(!t || t.length < 4 || t.length > 20)
        },
        isPossibleEmail: function(e) {
            return e.indexOf("@") > -1 && e.indexOf(".") > -1
        },
        isFieldByMatch: function(e, t, r) {
            if (!e || !t || "" == t) return !1;
            var n = t.toLowerCase(),
                o = r && "" != r ? r.toLowerCase() : null;
            return e.name && e.name.toLowerCase().indexOf(n) > -1 ? !o || e.name.toLowerCase().indexOf(o) > -1 : !!(e.placeholder && e.placeholder.toLowerCase().indexOf(n) > -1) && (!o || e.placeholder.toLowerCase().indexOf(o) > -1)
        },
        isPartOfForm: c,
        bindAllFormsOnSubmit: function(e, t) {
            for (var r = function() {
                    n.debug("Scanning for iframe forms.", !1);
                    for (var e = document.querySelectorAll("iframe"), t = [], r = 0; r < e.length; r++) {
                        var o = [];
                        e[r].contentDocument && e[r].contentDocument.querySelectorAll && (o = e[r].contentDocument.querySelectorAll("form"));
                        for (var i = 0; i < o.length; i++) t.push(o[i])
                    }
                    return t
                }(), i = document.querySelectorAll("form"), a = [].slice.call(i), c = 0; c < r.length; c++) a.push(r[c]);
            for (var s = 0; s < a.length; s++) {
                var u = 0,
                    d = 0;
                a[s].getAttribute(o) || (u += 1, a[s].addEventListener("submit", function(r) {
                    d > 0 ? d == u - 1 && (d = 0) : (n.debug("Executing callback on submit of form.", !1), t(e, r.target), d += 1)
                }), a[s].setAttribute(o, !0));
                var l = a[s].querySelector('*[type="submit"]');
                l && !l.getAttribute(o) && (u += 1, l.addEventListener("click", function(r) {
                    d > 0 ? d == u - 1 && (d = 0) : (n.debug("Executing callback on click of form submit button.", !1), t(e, r.target.form), d += 1)
                }), l.setAttribute(o, !0))
            }
        },
        bindAllNonFormButtonOnClick: function(e, t) {
            for (var r = document.querySelectorAll('button,input[type="button"],input[type="submit"]'), i = 0; i < r.length; i++) {
                var a = r[i];
                c(a) || a.getAttribute(o) || (a.addEventListener("click", function() {
                    n.debug("Executing callback on click of button.", !1), t(e)
                }), a.setAttribute(o, !0))
            }
        },
        startBackgroundFormBinder: function(e, t) {
            if (window.FACTORS_FORM_BINDER_ID) n.debug("Form binder started already.", !0);
            else {
                var r = window.setInterval(function() {
                    n.debug("Triggering form binding event.", !1), document.dispatchEvent(new Event(a))
                }, 2e3);
                window.FACTORS_FORM_BINDER_ID = r, window.setTimeout(s, 36e5)
            }
        },
        startBackgroundClickBinder: function(e, t) {
            n.debug("Scanning for unbound clickable elements.", !1), window.setInterval(function() {
                ! function(e, t) {
                    for (var r = document.querySelectorAll('button,input[type="button"],input[type="submit"]'), o = 0; o < r.length; o++) r[o].getAttribute(i) || (r[o].addEventListener("click", function(r) {
                        n.debug("Executing callback on click of button as part of click capture.", !1), t(e, r.target)
                    }), r[o].setAttribute(i, !0));
                    var a = document.querySelectorAll("a");
                    for (o = 0; o < a.length; o++) a[o].getAttribute(i) || (a[o].addEventListener("click", function(r) {
                        n.debug("Executing callback on click of anchor as part of click capture.", !1);
                        var o = null;
                        if (r.target && "A" == r.target.nodeName) o = r.target;
                        else if (r.path) {
                            for (var i = 0; i < r.path; i++)
                                if ("A" == r.path[i].nodeName) {
                                    o = r.path[i];
                                    break
                                }
                        } else n.errorLine("Unable to get anchor element on click.");
                        o && t(e, o)
                    }), a[o].setAttribute(i, !0))
                }(e, t)
            }, 2e3)
        },
        getClickCapturePayloadFromElement: function(e) {
            var t = {},
                r = e.textContent;
            r || (r = e.value), "" != r && (r = r.trim());
            var n = e.nodeName,
                o = e.nodeName;
            o && "" != o && (o = o.trim().toLowerCase()), "a" == o ? n = "ANCHOR" : "button" == o && (n = "BUTTON"), "button" == e.getAttribute("type") && (n = "BUTTON");
            var i = {};
            return i.display_text = d(r), i.element_type = n, "" != r && void 0 != r || (r = "unnamed_button_click"), u(e, "class", i), u(e, "id", i), u(e, "name", i), u(e, "rel", i), u(e, "role", i), u(e, "target", i), u(e, "href", i), u(e, "media", i), u(e, "type", i), t.display_name = d(r), t.element_type = n, t.element_attributes = i, t
        },
        TRIGGER_FORM_BINDING_EVENT: a
    }
}, function(e, t, r) {
    var n = r(0);
    const o = r(4),
        i = "_faireq_",
        a = "/sdk/service/error";

    function c(e) {
        return i + e
    }

    function s(e, t = !0) {
        var r = t ? c(e) : e;
        n.debug("Removed req from LS: " + r, !1), window.FACTORS_DISABLE_LS_REMOVE || window.localStorage.removeItem(r)
    }

    function u() {
        for (var e = Object.keys(window.localStorage), t = [], r = 0; r < e.length; r++) 0 == e[r].indexOf(i) && t.push(e[r]);
        return t
    }

    function d(e) {
        return e && e.domain && e.error ? p(o.api.host + a, e) : Promise.reject("Sending error failed. Invalid payload.")
    }

    function l(e) {
        var t = "";
        "string" == typeof e && (t = e), e instanceof Error && e.message && (t = e.stack);
        let r = {};
        r.domain = window.location.host, r.url = window.location.href, r.error = t, d(r)
    }

    function f(e, t, r, n) {
        let o = {
            method: e,
            keepalive: !0
        };
        n && void 0 != n && (o.body = JSON.stringify(n)), r && void 0 != r && (o.headers = r, o.headers["Content-Type"] = "application/json");
        var i = u().length <= 10,
            a = function(e) {
                var t = e.indexOf("/sdk/event/track") > 0 || e.indexOf("/sdk/user/identify") > 0 || e.indexOf("/sdk/capture_click") > 0;
                return !!window.FACTORS_LS_AVAILABLE && t
            }(t) && i,
            d = String(Date.now()) + Math.random(),
            l = (new Date).getTime();
        return a && function(e, t) {
            window.localStorage.setItem(c(e), JSON.stringify(t))
        }(d, {
            url: t,
            options: o,
            timestamp: l
        }), fetch(t, o).then(function(e) {
            a && s(d);
            var r = e;
            return r.json().then(function(e) {
                return r.ok ? {
                    status: r.status,
                    body: e
                } : Promise.reject("Failed to fetch " + t + " with status " + r.status)
            })
        }).catch(function(e) {
            return a && ! function(e) {
                return !!e && (e.toString().indexOf("abort") > -1 || e.toString().indexOf("cancel") > -1)
            }(e) && s(d), Promise.reject(e)
        })
    }

    function p(e, t, r = {}) {
        return f("post", e, r, t)
    }
    e.exports = {
        get: function(e, t = {}) {
            return f("get", e, t)
        },
        post: p,
        processAllLocalStorageBacklogRequests: function() {
            if (window.FACTORS_LS_AVAILABLE) {
                var e = function() {
                        for (var e = u(), t = {}, r = 0; r < e.length; r++) t[e[r]] = window.localStorage[e[r]];
                        return t
                    }(),
                    t = Object.keys(e);
                t.length > 0 && l("[STATUS] Processing localstorage.");
                for (var r = 0; r < t.length; r++) {
                    var o = t[r],
                        i = null;
                    try {
                        i = JSON.parse(e[o])
                    } catch (t) {
                        l("Error parsing json from LS: " + e[o])
                    }
                    if (s(o, !1), null != i) {
                        if (i.timestamp > 0 && (new Date).getTime() - i.timestamp > 18e5) {
                            n.debug("Payload older than 30 minutes skipped.", !1);
                            continue
                        }
                        var a = "Request failed on LS backlog processing:";
                        fetch(i.url, i.options).then(function(e) {
                            var t = e;
                            t.json().then(function() {
                                t.ok || l(a + " " + i.url + " status " + t.status)
                            })
                        }).catch(function(e) {
                            l(a + " " + i.url + " with error " + JSON.stringify(e))
                        })
                    }
                }
            }
        },
        sendErrorAPI: d
    }
}, function(e, t, r) {
    "use strict";
    e.exports = {
        api: {
            host: "https://api.factors.ai"
        }
    }
}, function(e, t, r) {
    "use strict";
    const n = r(1),
        o = r(2),
        i = r(0),
        a = "web",
        c = "$",
        s = c + "page_spent_time",
        u = c + "page_load_time",
        d = c + "page_scroll_percent",
        l = c + "company",
        f = c + "email",
        p = c + "phone",
        g = c + "name",
        m = c + "first_name",
        h = c + "last_name",
        v = c + "form_id",
        _ = c + "form_name",
        w = c + "form_class",
        b = c + "form_type",
        y = c + "form_method",
        E = c + "form_target",
        k = c + "form_action",
        P = c + "form_submitted",
        A = ["password", "hidden"],
        S = {
            getDevice: function() {
                for (var e = navigator.appVersion, t = navigator.userAgent, r = [{
                        s: "iPad",
                        r: /iPad/
                    }, {
                        s: "Samsung Galaxy",
                        r: /SCH-I800/
                    }, {
                        s: "Motorola",
                        r: /xoom/
                    }, {
                        s: "Kindle",
                        r: /kindle/
                    }], n = [{
                        s: "iPhone",
                        r: /iPhone/
                    }, {
                        s: "iPod",
                        r: /iPod/
                    }, {
                        s: "blackberry",
                        r: /blackberry/
                    }, {
                        s: "android 0.5",
                        r: /android 0.5/
                    }, {
                        s: "htc",
                        r: /htc/
                    }, {
                        s: "lg",
                        r: /lg/
                    }, {
                        s: "midp",
                        r: /midp/
                    }, {
                        s: "mmp",
                        r: /mmp/
                    }, {
                        s: "mobile",
                        r: /mobile/
                    }, {
                        s: "nokia",
                        r: /nokia/
                    }, {
                        s: "opera mini",
                        r: /opera mini/
                    }, {
                        s: "palm",
                        r: /palm|PalmSource/
                    }, {
                        s: "pocket",
                        r: /pocket/
                    }, {
                        s: "psp",
                        r: /psp|Playstation Portable/
                    }, {
                        s: "sgh",
                        r: /sgh/
                    }, {
                        s: "smartphone",
                        r: /smartphone/
                    }, {
                        s: "symbian",
                        r: /symbian/
                    }, {
                        s: "treo mini",
                        r: /treo mini/
                    }, {
                        s: "SonyEricsson",
                        r: /SonyEricsson/
                    }, {
                        s: "Samsung",
                        r: /Samsung/
                    }, {
                        s: "MobileExplorer",
                        r: /MobileExplorer/
                    }, {
                        s: "Benq",
                        r: /Benq/
                    }, {
                        s: "Windows Phone",
                        r: /Windows Phone/
                    }, {
                        s: "Windows Mobile",
                        r: /Windows Mobile/
                    }, {
                        s: "IEMobile",
                        r: /IEMobile/
                    }, {
                        s: "Windows CE",
                        r: /Windows CE/
                    }, {
                        s: "Nintendo Wii",
                        r: /Nintendo Wii/
                    }], o = !1, i = !1, a = "", c = 0; c < r.length; c++)
                    if (r[c].r.test(t)) {
                        a = r[c].s, o = !0;
                        break
                    }
                if ("" === a)
                    for (c = 0; c < n.length; c++)
                        if (n[c].r.test(t)) {
                            a = n[c].s, i = !0;
                            break
                        }
                var s = o || i;
                return s || (s = /Mobile|mini|Fennec|Android/.test(e)), {
                    screen: {
                        width: screen.width,
                        height: screen.height
                    },
                    device: a,
                    isMobile: i || s || o
                }
            },
            getBrowserFeatures: function() {
                var e = !1;
                try {
                    document.cookie = "cookietest=1";
                    var t = -1 != document.cookie.indexOf("cookietest=");
                    document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", e = t
                } catch (e) {}
                return {
                    window: {
                        width: window.innerWidth,
                        height: window.innerHeight
                    },
                    allowsCookies: e
                }
            }
        };

    function C() {
        return window.performance ? window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart : 0
    }

    function I(e, t = "$qp_") {
        if ("string" != typeof e || 0 === e.length || 1 === e.length && 0 === e.indexOf("?")) return {};
        let r = {},
            o = null,
            i = e.indexOf("&");
        i === e.length - 1 && (e = e.slice(0, e.length - 1)), o = i >= 0 ? e.split("&") : [e];
        for (var a = 0; a < o.length; a++) {
            let e = null;
            e = o[a].indexOf("=") >= 0 ? o[a].split("=") : [o[a], null], 0 == a && 0 === e[0].indexOf("?") && (e[0] = e[0].slice(1)), "" != e[1] && null != e[1] && void 0 != e[1] && (r[t + e[0]] = n.convertIfNumber(e[1]))
        }
        return r
    }

    function O(e) {
        if (!e) return {};
        var t = {};
        return t[v] = e.getAttribute("id"), t[_] = e.getAttribute("name"), t[w] = e.getAttribute("class"), t[k] = e.getAttribute("action"), t[y] = e.getAttribute("method"), t[E] = e.getAttribute("target"), t[b] = e.getAttribute("type"), t
    }

    function T(e) {
        var t = {};
        if (!e) return t;
        for (var r = 0; r < e.length; r++)
            if (!(A.indexOf(e[r].type) >= 0) && e[r].value) {
                var n = e[r].value.trim();
                "" != e[r].value && (o.isEmail(n) && !t[f] && (t[f] = n), "tel" == e[r].type && !t[p] && o.isPhone(n) && (t[p] = n), t[l] || !o.isFieldByMatch(e[r], "company") && !o.isFieldByMatch(e[r], "org") || (t[l] = n), o.isFieldByMatch(e[r], "first", "name") && (t[m] || (t[m] = n), t[g] || (t[g] = ""), t[g] = n + t[g]), o.isFieldByMatch(e[r], "last", "name") && (t[h] || (t[h] = n), t[g] && "" != t[g] ? t[g] : t[g] = n), o.isFieldByMatch(e[r], "name") && (t[g] || (t[g] = n)))
            }
        return t
    }
    e.exports = {
        getUserDefault: function() {
            let e = {};
            e[c + "platform"] = a;
            let t = S.getDevice();
            return t.screen && t.screen.width > 0 && (e[c + "screen_width"] = t.screen.width), t.screen && t.screen.height > 0 && (e[c + "screen_height"] = t.screen.height), t.device && (e[c + "device_name"] = t.device), e
        },
        getEventDefault: function(e = "") {
            let t = {};
            t[c + "page_title"] = document.title, t[c + "referrer"] = e;
            let r = n.parseURLString(e);
            return t[c + "referrer_domain"] = r.host, t[c + "referrer_url"] = r.host + r.path + n.getCleanHash(r.hash), t[c + "page_raw_url"] = window.location.href, t[c + "page_domain"] = window.location.host, t[c + "page_url"] = window.location.host + window.location.pathname + n.getCleanHash(window.location.hash), t
        },
        getFromQueryParams: function(e) {
            return I(function(e) {
                let t = e.hash,
                    r = e.search,
                    n = t.split("?")[1];
                return void 0 == n || "" == n ? r : "" == r ? "?" + n : r + "&" + n
            }(e))
        },
        parseFromQueryString: I,
        getTypeValidated: function(e = {}) {
            let t = {};
            for (let r in e) "string" != typeof e[r] && "number" != typeof e[r] || (t[r] = e[r]);
            return t
        },
        getPageLoadTimeInMs: C,
        getPageLoadTime: function() {
            var e = C();
            return e > 0 ? e / 1e3 : 0
        },
        getPropertiesFromForm: function(e) {
            return e ? T(e.querySelectorAll("input")) : {}
        },
        getFormMetaAttributes: O,
        getPageScrollPercent: function() {
            var e = document.documentElement,
                t = document.body,
                r = "scrollTop",
                n = "scrollHeight",
                o = e[r] || t[r],
                i = (e[n] || t[n]) - e.clientHeight;
            return 0 == i ? 0 : o / i * 100
        },
        getPropertiesFromAllNonFormInputs: function() {
            for (var e = document.querySelectorAll("input"), t = {}, r = {}, n = [], a = 0; a < e.length; a++) A.indexOf(e[a].type) >= 0 || o.isPartOfForm(e[a]) || (n.push(e[a]), r = O(e[a].form ? e[a].form : null));
            return t = T(n), r && Object.keys(r).length > 0 && (i.debug("Collecting form meta attributes", !1), t = Object.assign(r, t)), t
        },
        PAGE_SPENT_TIME: s,
        PAGE_LOAD_TIME: u,
        PAGE_SCROLL_PERCENT: d,
        EMAIL: f,
        PHONE: p,
        PHONE: p,
        SOURCE: "source",
        EV_FORM_SUBMITTED: P,
        DISABLED_INPUT_TYPES: A
    }
}, function(e, t, r) {
    "use strict";
    const n = r(0);
    var o = new(r(7)),
        i = !1;

    function a(e, t = {}, r) {
        try {
            return o.init(e, t, r).catch(o.handleError)
        } catch (e) {
            return o.handleError(e)
        }
    }

    function c() {
        try {
            o.reset()
        } catch (e) {
            o.handleError(e)
        }
    }

    function s(e, t = {}, r) {
        try {
            o.track(e, t, !1, r).catch(o.handleError)
        } catch (e) {
            o.handleError(e)
        }
    }

    function u(e, t = !1) {
        try {
            o.page(e, t).catch(o.handleError)
        } catch (e) {
            o.handleError(e)
        }
    }

    function d(e, t = {}) {
        try {
            o.updateEventProperties(e, t).catch(o.handleError)
        } catch (e) {
            o.handleError(e)
        }
    }

    function l(e, t = {}) {
        try {
            o.identify(e, t).catch(o.handleError)
        } catch (e) {
            o.handleError(e)
        }
    }

    function f(e = {}) {
        try {
            o.addUserProperties(e).catch(o.handleError)
        } catch (e) {
            o.handleError(e)
        }
    }

    function p() {
        return o.getUserId()
    }

    function g() {
        if (factors && factors.q && factors.q.length > 0 && !i) {
            i = !0, n.debug("Starting Queue", !1);
            try {
                for (; factors.q.length > 0;) switch (n.debug("Processing Queue", !1), factors.q[0].k) {
                    case "track":
                        s(factors.q[0].a[0], factors.q[0].a[1], factors.q[0].a[2]), factors.q.shift();
                        break;
                    case "reset":
                        c(), factors.q.shift();
                        break;
                    case "page":
                        u(factors.q[0].a[0], factors.q[0].a[1]), factors.q.shift();
                        break;
                    case "updateEventProperties":
                        d(factors.q[0].a[0], factors.q[0].a[1]), factors.q.shift();
                        break;
                    case "identify":
                        l(factors.q[0].a[0], factors.q[0].a[1]), factors.q.shift();
                        break;
                    case "addUserProperties":
                        f(factors.q[0].a[0]), factors.q.shift();
                        break;
                    case "getUserId":
                        p(), factors.q.shift();
                        break;
                    default:
                        o.handleError("Unknown call parameters")
                }
            } catch (e) {
                o.handleError(e), i = !1
            }
            n.debug("Queue Processed", !1), i = !1
        }
    }
    let m = {
        init: a,
        reset: c,
        track: s,
        page: u,
        updateEventProperties: d,
        identify: l,
        addUserProperties: f,
        getUserId: p
    };
    factors && factors.TOKEN && a(factors.TOKEN, factors.INIT_PARAMS, INIT_CALLBACK), window.addEventListener("FACTORS_INIT_EVENT", function(e) {
        a(factors.TOKEN, factors.INIT_PARAMS, INIT_CALLBACK)
    }), window.addEventListener("FACTORS_INITIALISED_EVENT", function(e) {
        g(), window.addEventListener("FACTORS_QUEUED_EVENT", function(e) {
            g()
        })
    }), e.exports = m
}, function(e, t, r) {
    "use strict";
    var n = r(8);
    const o = r(0),
        i = r(2),
        a = r(1);
    var c = r(9);
    const s = r(10),
        u = r(5),
        d = r(11),
        {
            isLocalStorageAvailable: l
        } = r(1),
        {
            processAllLocalStorageBacklogRequests: f
        } = r(3),
        p = r(5),
        g = new Error("Factors SDK is not initialized."),
        m = new Error("No user."),
        h = "data-factors-input-id";

    function v() {
        return o.debug("Checking if cookies have been stored: ", !1), n.isExist(s.cookie.USER_ID)
    }

    function _(e) {
        return v() && (e.user_id = n.getDecoded(s.cookie.USER_ID)), e
    }

    function w() {
        return window.location.host + window.location.pathname + a.getCleanHash(window.location.hash)
    }

    function b() {
        d.setFactorsCache(d.lastActivityTime, a.getCurrentUnixTimestampInMs())
    }

    function y(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }

    function E(e, t, r = 0, n = null, i = 1e4, a = 10) {
        if (window[e]) {
            if (!n) return void t();
            if (Array.isArray(window[e])) {
                if (window[e].find(function(e) {
                        return y(e) && Object.keys(e).indexOf(n) > -1
                    })) return void t()
            }
        }
        r <= a && (o.debug("Checking for key: times " + r, !1), setTimeout(function() {
            E(e, t, r + 1, n, i, a)
        }, i))
    }
    const k = "lastTimeoutId_";

    function P(e = 0, t = 0) {
        if (0 != e && 0 != t) {
            var r = k + e;
            d.getFactorsCacheObject()[r] = t
        }
    }

    function A(e) {
        var t = function(e = 0) {
            if (0 != e) {
                var t = k + e;
                return d.getFactorsCacheObject()[t]
            }
        }(e);
        t && (clearTimeout(t), o.debug("Cleared timeout of " + e + "ms :" + t, !1))
    }

    function S(e, t) {
        var r = function() {
            var e = d.getFactorsCache(d.prevActivityTime);
            return e || 0
        }();
        0 == r && (r = e);
        var n = function() {
            var e = d.getFactorsCache(d.lastActivityTime);
            return e || 0
        }();
        if (0 == n) return 0;
        var o = t,
            i = n - r;
        return i < 3e5 && (o += i),
            function(e) {
                d.setFactorsCache(d.prevActivityTime, e || 0)
            }(n), o
    }

    function C() {
        this.client = null, this.config = {}
    }

    function I(e = {}) {
        e = u.getTypeValidated(e);
        var t = document.referrer,
            r = d.getFactorsCache(d.currentPageOriginalURL);
        return d.getFactorsCache(d.trackPageOnSPA) && r && (t = r), e = Object.assign(e, u.getEventDefault(t))
    }

    function O(e) {
        o.debug("Binding for form capture", !1), i.bindAllFormsOnSubmit(e, e.captureAndTrackFormSubmit), i.bindAllNonFormButtonOnClick(e, e.captureAndTrackNonFormInput)
    }

    function T(e, t) {
        var r = t.value.trim();
        if (!(r.length < 4) && (i.isPossibleEmail(r) || i.isPhone(r))) {
            var n = t.getAttribute(h);
            void 0 == window.FACTORS_FORM_FILLS && (window.FACTORS_FORM_FILLS = {});
            var a = window.FACTORS_FORM_FILLS[n];
            if ("" != r && r != a) {
                window.FACTORS_FORM_FILLS[n] = r;
                var c = {
                    form_id: n.split(".")[0],
                    field_id: n,
                    value: r
                };
                return c.event_properties = I(), _(c), o.debug(c, !1), e.client.captureFormFill(c)
            }
        }
    }

    function F(e) {
        for (var t = document.querySelectorAll("input"), r = 0; r < t.length; r++) p.DISABLED_INPUT_TYPES.indexOf(t[r].type) >= 0 || T(e, t[r])
    }

    function R(e) {
        o.debug("Binding for form fills capture", !1);
        var t = document.querySelectorAll("form");
        window.FACTORS_FORMS_ID || (window.FACTORS_FORMS_ID = 0);
        for (var r = 0; r < t.length; r++) t[r].getAttribute("data-factors-form-id") || (t[r].setAttribute("data-factors-form-id", "form-" + window.FACTORS_FORMS_ID), window.FACTORS_FORMS_ID++);
        var n = document.querySelectorAll("input");
        window.FACTORS_INPUTS_ID || (window.FACTORS_INPUTS_ID = 0);
        for (var i = 0; i < n.length; i++)
            if (!(n[i].getAttribute(h) || p.DISABLED_INPUT_TYPES.indexOf(n[i].type) >= 0)) {
                var a = "noform";
                n[i].form && "" != n[i].form.getAttribute("data-factors-form-id") && (a = n[i].form.getAttribute("data-factors-form-id")), n[i].setAttribute(h, a + ".field-" + window.FACTORS_INPUTS_ID), n[i].addEventListener("input", function() {
                    T(e, this)
                }), n[i].addEventListener("change", function() {
                    T(e, this)
                }), window.FACTORS_INPUTS_ID++
            }
        for (var c = 5e3; c < 3e4;) setTimeout(function() {
            F(e)
        }, c), c += 5e3
    }
    C.prototype.init = function(e, t = {}, r) {
        if (e = a.validatedStringArg("token", e), this.isInitialized() && !this.isSameToken(e)) return Promise.reject(new Error("FactorsInitError: Initialized already. Use reset() and init(), if you really want to do this."));
        if (!e) return Promise.reject(new Error("FactorsArgumentError: Invalid token."));
        t || (t = {});
        let i = null;
        i = t.host && "" !== t.host ? new c(e, t.host) : new c(e);
        var u = !0;
        !1 === t.track_on_init && (u = !1), !0 === t.track_page_on_spa && d.setFactorsCache(d.trackPageOnSPA, !0), l() && (window.FACTORS_LS_AVAILABLE = !0);
        var p = {},
            g = this;
        return _(p), i.getInfo(p).then(function(e) {
            return e.status < 200 || e.status > 308 ? (o.errorLine("Get project settings failed with code : ", e.status), Promise.reject(new Error("FactorsRequestError: Init failed. App configuration failed."))) : e
        }).then(function(e) {
            return g.config = e.body, g.client = i,
                function e(t, i, a) {
                    ! function(e) {
                        if (o.debug("Setting Cookie with response: ", !1), e && e.body && e.body.user_id) {
                            let t = e.body.user_id.trim();
                            t && n.setEncoded(s.cookie.USER_ID, t, s.cookie.EXPIRY)
                        }
                    }(i);
                    v() ? (o.debug("Cookie consent is enabled. Continuing process", !1), window.dispatchEvent(new CustomEvent("FACTORS_INITIALISED_EVENT")), function(e, t) {
                        Promise.resolve().then(function() {
                            o.debug("Auto Track call starts", !1);
                            var n = d.getFactorsCache(d.trackPageOnSPA) || e.getConfig("auto_track_spa_page_view");
                            return d.setFactorsCache(d.trackPageOnSPA, n), t ? e.autoTrack(e.getConfig("auto_track"), !1, r, !0) : null
                        }).then(function() {
                            return e.autoFormCapture(e.getConfig("auto_form_capture"))
                        }).then(function() {
                            return e.autoCaptureFormFills(e.getConfig("auto_capture_form_fills"))
                        }).then(function() {
                            return e.autoClickCapture(e.getConfig("auto_click_capture"))
                        }).then(function() {
                            return e.autoDriftEventsCapture(e, e.getConfig("int_drift"))
                        }).then(function() {
                            return e.autoClearbitRevealCapture(e, e.getConfig("int_clear_bit"))
                        }).catch(function(e) {
                            return o.errorLine(e), Promise.reject(e.stack + " during get_settings on init.")
                        })
                    }(t, a)) : (o.debug("Checking for cookie consent.", !1), setTimeout(() => {
                        e(t, i, a)
                    }, 1e3))
                }(g, e, u), f(), e
        })
    }, C.prototype.track = function(e, t, r = !1, n) {
        if (!this.isInitialized()) return Promise.reject(g);
        if (!v()) return Promise.reject(m);
        if (! function(e) {
                return e == u.EV_FORM_SUBMITTED || 0 != e.indexOf("$")
            }(e = a.validatedStringArg("event_name", e))) return Promise.reject(new Error("FactorsError: Invalid event name."));
        var i = window.location.href;
        let c = {};
        if (_(c), c.event_name = e, c.event_properties = I(t), c.user_properties = u.getUserDefault(), c.auto = r, r) {
            var s = u.getPageLoadTime();
            s > 0 && (c.event_properties[u.PAGE_LOAD_TIME] = s)
        }
        return this.client.track(c).then(function(t) {
            if (t && t.body) {
                if (!t.body.event_id) return o.debug("No event_id found on track response.", !1), t;
                r && function(e, t, r) {
                    e && "" != e && (d.setFactorsCache(d.currentPageOriginalURL, r), d.setFactorsCache(d.currentPageURLEventName, t), d.setFactorsCache(d.currentPageTrackEventId, e))
                }(t.body.event_id, e, i), n && n(t.body.event_id)
            }
            return t
        })
    }, C.prototype.updateEventProperties = function(e, t = {}) {
        if (!this.isInitialized()) return Promise.reject(g);
        if (!v()) return Promise.reject(m);
        if (!e || "" == e) return Promise.reject("No eventId provided for update.");
        0 == Object.keys(t).length && o.debug("No properties given to update event.");
        var r = {
            event_id: e,
            properties: t
        };
        return this.client.updateEventProperties(_(r))
    }, C.prototype.updatePagePropertiesIfChanged = function(e, t, r = 0) {
        let n = t && t[u.PAGE_SPENT_TIME] ? t[u.PAGE_SPENT_TIME] : 0,
            i = t && t[u.PAGE_SCROLL_PERCENT] ? t[u.PAGE_SCROLL_PERCENT] : 0;
        var a = S(e, n),
            c = u.getPageScrollPercent();
        0 == a && r > 0 && (a = r), (0 == n || r > 0) && (a += u.getPageLoadTimeInMs());
        var s = {};
        if (a > 0 && a > n) {
            var l = a / 1e3;
            l = Number(l.toFixed(2)), s[u.PAGE_SPENT_TIME] = l
        }
        if (c > 0 && c > i && (c = Number(c.toFixed(2)), s[u.PAGE_SCROLL_PERCENT] = c), Object.keys(s).length > 0) {
            o.debug("Updating page properties : " + JSON.stringify(s), !1);
            var f = {
                event_id: d.getFactorsCache(d.currentPageTrackEventId),
                properties: s
            };
            this.client.updateEventProperties(_(f))
        } else o.debug("No change on page properties, skipping update for : " + JSON.stringify(t), !1);
        return {
            [u.PAGE_SCROLL_PERCENT]: c,
            [u.PAGE_SPENT_TIME]: a
        }
    }, C.prototype.autoTrack = function(e = !1, t = !1, r, n = !1) {
        if (!e) return !1;
        if (!t && function() {
                var e = d.getFactorsCache(d.currentPageTrackEventId);
                return !(!e || void 0 == e) && w() == d.getFactorsCache(d.currentPageURLEventName)
            }()) return o.debug("Page tracked already as per store : " + JSON.stringify(d.getFactorsCacheObject())), !1;
        if (!v()) return !1;
        var i = this;
        this.track(w(), u.getFromQueryParams(window.location), !0, r);
        var c = {},
            s = a.getCurrentUnixTimestampInMs();
        A(5e3), P(5e3, setTimeout(function() {
            o.debug("Triggered properties update after 5s.", !1), c = i.updatePagePropertiesIfChanged(s, c, 5e3)
        }, 5e3));
        A(1e4), P(1e4, setTimeout(function() {
            o.debug("Triggered properties update after 10s.", !1), c = i.updatePagePropertiesIfChanged(s, c, 1e4)
        }, 1e4));
        var l = d.getFactorsCache(d.lastPollerId);
        clearInterval(l), l && o.debug("Cleared previous page poller: " + l, !1);
        var f = setInterval(function() {
            c = i.updatePagePropertiesIfChanged(s, c)
        }, 2e4);
        if (d.setFactorsCache(d.lastPollerId, f), window.addEventListener("beforeunload", function() {
                c = i.updatePagePropertiesIfChanged(s, c)
            }), window.addEventListener("scroll", b), window.addEventListener("mouseover", b), window.addEventListener("mousemove", b), !d.getFactorsCache(d.trackPageOnSPA) && window.history && void 0 !== window.onpopstate) {
            var p = window.location.href;
            window.addEventListener("popstate", function() {
                o.debug("Triggered window.onpopstate goto: " + window.location.href + ", prev: " + p), p !== window.location.href && (c = i.updatePagePropertiesIfChanged(s, c), i.track(w(), u.getFromQueryParams(window.location), !0, r), s = a.getCurrentUnixTimestampInMs(), p = window.location.href)
            })
        }
        d.getFactorsCache(d.trackPageOnSPA) && setInterval(function() {
            d.getFactorsCache(d.currentPageURLEventName) != w() && i.track(w(), u.getFromQueryParams(window.location), !0, r)
        }, 1e3)
    }, C.prototype.captureAndTrackFormSubmit = function(e, t) {
        t || o.debug("Form element is undefined on capture form submit.");
        var r = u.getPropertiesFromForm(t),
            n = u.getFormMetaAttributes(t);
        n && Object.keys(n).length > 0 && (o.debug("Collecting form meta attributes", !1), r = Object.assign(n, r)), r && 0 != Object.keys(r).length || o.debug("No properties captured from form.", !1), r[u.EMAIL] || r[u.PHONE] ? (o.debug("Capturing form submit with properties: " + JSON.stringify(r), !1), e.track(u.EV_FORM_SUBMITTED, r)) : o.debug("No email and phone, skipping form submit.", !1)
    }, C.prototype.captureAndTrackNonFormInput = function(e) {
        var t = u.getPropertiesFromAllNonFormInputs();
        t[u.EMAIL] || t[u.PHONE] ? (o.debug("Capturing non-form submit with properties: " + JSON.stringify(t), !1), e.track(u.EV_FORM_SUBMITTED, t)) : o.debug("No email and phone, skipping form submit.", !1)
    }, C.prototype.autoDriftEventsCapture = function(e, t) {
        return !!t && (E("drift", function() {
            window.drift.on("phoneCapture", function(t) {
                if (!i.isPhone(t.phone)) return null;
                var r = {};
                r[u.PHONE] = t.phone, r[u.SOURCE] = "drift", e.track(u.EV_FORM_SUBMITTED, r)
            }), window.drift.on("emailCapture", function(t) {
                if (!t.data || !t.data.email || !i.isEmail(t.data.email)) return null;
                var r = {};
                r[u.EMAIL] = t.data.email, r[u.SOURCE] = "drift", e.track(u.EV_FORM_SUBMITTED, r)
            })
        }), !0)
    }, C.prototype.autoClearbitRevealCapture = function(e, t) {
        return !!t && (E("dataLayer", function(e) {
            const t = window.dataLayer.find(function(e) {
                    return y(e) && Object.keys(e).indexOf("reveal") > -1
                }).reveal,
                r = {};
            if (t && t.company && y(t.company)) {
                const e = t.company,
                    n = "$clr_company";
                if (e.name && (r[n + "_name"] = e.name), e.foundedYear && (r[n + "_foundedYear"] = e.foundedYear), e.type && (r[n + "_type"] = e.type), e.geo && y(e.geo)) {
                    const t = e.geo,
                        o = ["city", "country", "postalCode", "state", "stateCode", "countryCode", "lat", "lng"].filter(function(e) {
                            return !!t[e]
                        });
                    for (let e = 0; e < o.length; e++) {
                        const i = o[e];
                        r[n + "_geo_" + i] = t[i]
                    }
                }
                if (e.category && y(e.category)) {
                    const t = e.category,
                        o = ["sector", "industryGroup", "industry", "subIndustry", "sicCode", "naicsCode"].filter(function(e) {
                            return !!t[e]
                        });
                    for (let e = 0; e < o.length; e++) {
                        const i = o[e];
                        r[n + "_category_" + i] = t[i]
                    }
                }
                if (e.metrics && y(e.metrics)) {
                    const t = e.metrics,
                        o = ["alexaUsRank", "alexaGlobalRank", "employees", "employeesRange", "marketCap", "raised", "annualRevenue", "estimatedAnnualRevenue", "fiscalYearEnd"].filter(function(e) {
                            return !!t[e]
                        });
                    for (let e = 0; e < o.length; e++) {
                        const i = o[e];
                        r[n + "_metrics_" + i] = t[i]
                    }
                }
                if (e.parent && y(e.parent)) {
                    const t = e.parent,
                        o = ["domain"].filter(function(e) {
                            return !!t[e]
                        });
                    for (let e = 0; e < o.length; e++) {
                        const i = o[e];
                        r[n + "_parent_" + i] = t[i]
                    }
                }
            }
            Object.keys(r).length && e.addUserProperties(r)
        }.bind(null, e), 0, "reveal", 2e3, 20), !0)
    }, C.prototype.autoFormCapture = function(e = !1) {
        if (!e) return !1;
        var t = this;
        return O(t), i.startBackgroundFormBinder(), document.addEventListener(i.TRIGGER_FORM_BINDING_EVENT, function(e) {
            O(t)
        }), !0
    }, C.prototype.autoCaptureFormFills = function(e) {
        if (!e) return !1;
        R(this), i.startBackgroundFormBinder();
        var t = this;
        document.addEventListener(i.TRIGGER_FORM_BINDING_EVENT, function() {
            R(t)
        })
    }, C.prototype.captureClick = function(e, t) {
        if (!e.isInitialized()) return Promise.reject(g);
        if (t || o.debug("Element is undefined on capture click."), !v()) return Promise.reject(m);
        var r = i.getClickCapturePayloadFromElement(t);
        return r.event_properties = I(), r.user_properties = u.getUserDefault(), _(r), o.debug(t, !1), o.debug("Click capture payload: " + JSON.stringify(r), !1), e.client.captureClick(r)
    }, C.prototype.autoClickCapture = function(e = !1) {
        if (!e) return !1;
        i.startBackgroundClickBinder(this, this.captureClick)
    }, C.prototype.page = function(e, t = !1) {
        return this.isInitialized() ? Promise.resolve(this.autoTrack(this.getConfig("auto_track"), t, e)) : Promise.reject(g)
    }, C.prototype.identify = function(e, t = {}) {
        if (!this.isInitialized()) return Promise.reject(g);
        if (!v()) return Promise.reject(m);
        e = a.validatedStringArg("customer_user_id", e);
        let r = {};
        return _(r), r.c_uid = e, Object.keys(t).length > 0 && (r.user_properties = t), this.client.identify(r)
    }, C.prototype.addUserProperties = function(e = {}) {
        if (!this.isInitialized()) return Promise.reject(g);
        if (!v()) return Promise.reject(m);
        if ("object" != typeof e) return Promise.reject(new Error("FactorsArgumentError: Properties should be an Object(key/values)."));
        if (0 == Object.keys(e).length) return Promise.reject("No changes. Empty properties.");
        e = u.getTypeValidated(e), e = Object.assign(e, u.getUserDefault());
        let t = {};
        return _(t), t.properties = e, this.client.addUserProperties(t)
    }, C.prototype.reset = function() {
        this.client = null, this.config = {}, n.remove(s.cookie.USER_ID)
    }, C.prototype.getClient = function() {
        return this.client
    }, C.prototype.getConfig = function(e) {
        if (void 0 != this.config[e]) return this.config[e];
        o.errorLine(new Error("FactorsConfigError: Config not present."))
    }, C.prototype.isInitialized = function() {
        return !!this.client && !!this.config && Object.keys(this.config).length > 0
    }, C.prototype.isSameToken = function(e) {
        return this.client && this.client.token && this.client.token === e
    }, C.prototype.getUserId = function() {
        return n.getDecoded(s.cookie.USER_ID)
    }, C.prototype.handleError = function(e) {
        var t = "";
        "string" == typeof e && (t = e), e instanceof Error && e.message && (t = e.stack);
        let r = {};
        return r.domain = window.location.host, r.url = window.location.href, r.error = t, r.auto_track_url = w(), _(r), new c("", "").sendError(r), o.errorLine(e), Promise ? Promise.reject(e) : e
    }, e.exports = C
}, function(e, t) {
    function r(e, t, r) {
        let n = "";
        if (r) {
            let e = new Date;
            e.setTime(e.getTime() + 24 * r * 60 * 60 * 1e3), n = "; expires=" + e.toUTCString()
        }
        let o = function() {
            var e, t, r = "try_get_old_cookie=try_get_old_value",
                n = window.location.hostname.split(".");
            for (e = n.length - 1; e >= 0; e--)
                if (t = n.slice(e).join("."), document.cookie = r + ";domain=." + t + ";", document.cookie.indexOf(r) > -1) return document.cookie = r.split("=")[0] + "=;domain=." + t + ";expires=Thu, 01 Jan 1970 00:00:01 GMT;", t;
            return window.location.hostname
        }();
        document.cookie = e + "=" + (t || "") + n + "; domain=" + o + "; path=/"
    }

    function n(e) {
        let t = e + "=",
            r = document.cookie.split(";");
        for (let e = 0; e < r.length; e++) {
            let n = r[e];
            for (;
                " " == n.charAt(0);) n = n.substring(1, n.length);
            if (0 == n.indexOf(t)) return n.substring(t.length, n.length)
        }
        return null
    }
    e.exports = {
        set: r,
        get: n,
        setEncoded: function(e, t, n) {
            r(e, btoa(t), n)
        },
        getDecoded: function(e) {
            let t = n(e);
            return t && (t = atob(t)), t
        },
        remove: function(e) {
            document.cookie = e + "=; Max-Age=-99999999;"
        },
        isExist: function(e) {
            return 0 == document.cookie.indexOf(e + "=") || document.cookie.indexOf("; " + e + "=") >= 0
        }
    }
}, function(e, t, r) {
    var n = r(3);
    const o = r(4);

    function i(e, t = "") {
        this.token = e, this.host = t
    }
    i.prototype.getURL = function(e) {
        return "" != this.host ? this.host + e : o.api.host + e
    }, i.prototype.setToken = function(e) {
        this.token = e
    }, i.prototype.isInitialized = function() {
        return this.token && this.token.trim().length > 0
    }, i.prototype.getHeaders = function() {
        return {
            Authorization: this.token
        }
    }, i.prototype.track = function(e) {
        return e && e.event_name ? n.post(this.getURL("/sdk/event/track"), e, this.getHeaders()) : Promise.reject("Track failed. API Client invalid payload. Missing event_name.")
    }, i.prototype.identify = function(e) {
        return e && e.c_uid ? n.post(this.getURL("/sdk/user/identify"), e, this.getHeaders()) : Promise.reject("Identify failed. API Client invalid payload. Missing customer_user_id.")
    }, i.prototype.addUserProperties = function(e) {
        return e && e.properties ? n.post(this.getURL("/sdk/user/add_properties"), e, this.getHeaders()) : Promise.reject("Add properties failed. Missing properties on payload.")
    }, i.prototype.updateEventProperties = function(e) {
        return e && e.event_id && e.properties ? n.post(this.getURL("/sdk/event/update_properties"), e, this.getHeaders()) : Promise.reject("Update event properties failed. Invalid payload.")
    }, i.prototype.captureClick = function(e) {
        return e && e.display_name && e.element_type && e.element_attributes && e.user_id && e.event_properties && e.user_properties ? n.post(this.getURL("/sdk/capture_click"), e, this.getHeaders()) : Promise.reject("Capture click failed. Invalid payload.")
    }, i.prototype.captureFormFill = function(e) {
        return e && e.form_id && e.field_id && e.user_id ? n.post(this.getURL("/sdk/form_fill"), e, this.getHeaders()) : Promise.reject("Form fill failed. Invalid payload.")
    }, i.prototype.getInfo = function(e) {
        return e ? n.post(this.getURL("/sdk/get_info"), e, this.getHeaders()) : Promise.reject("GetInfo failed. Invalid payload.")
    }, i.prototype.sendError = function(e) {
        return n.sendErrorAPI(e)
    }, e.exports = i
}, function(e, t) {
    e.exports = {
        cookie: {
            USER_ID: "_fuid",
            EXPIRY: 730
        }
    }
}, function(e, t, r) {
    "use strict";
    const n = "FACTORS_CACHE";
    e.exports = {
        getFactorsCache: function(e) {
            return window[n] || (window[n] = {}), window[n][e]
        },
        setFactorsCache: function(e, t) {
            window[n] || (window[n] = {}), window[n][e] = t
        },
        getFactorsCacheObject: function() {
            return window[n] || (window[n] = {}), window[n]
        },
        currentPageURLEventName: "currentPageURLEventName",
        currentPageTrackEventId: "currentPageTrackEventId",
        currentPageOriginalURL: "currentPageOriginalURL",
        lastPollerId: "lastPollerId",
        trackPageOnSPA: "trackPageOnSPA",
        prevActivityTime: "prevActivityTime",
        lastActivityTime: "lastActivityTime"
    }
}]);