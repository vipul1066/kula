/* VimeoPlayer - v4.17.0 - 2023-01-12 - https://player.vimeo.com/NOTICE.txt */
function e(e, t) {
    return e === t || e != e && t != t
}

function t(t, n) {
    for (var r = t.length; r--;)
        if (e(t[r][0], n)) return r;
    return -1
}
var n = Array.prototype.splice;

function r(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
r.prototype.clear = function() {
    this.__data__ = [], this.size = 0
}, r.prototype.delete = function(e) {
    var r = this.__data__,
        i = t(r, e);
    return !(i < 0 || (i == r.length - 1 ? r.pop() : n.call(r, i, 1), --this.size, 0))
}, r.prototype.get = function(e) {
    var n = this.__data__,
        r = t(n, e);
    return r < 0 ? void 0 : n[r][1]
}, r.prototype.has = function(e) {
    return t(this.__data__, e) > -1
}, r.prototype.set = function(e, n) {
    var r = this.__data__,
        i = t(r, e);
    return i < 0 ? (++this.size, r.push([e, n])) : r[i][1] = n, this
};
var i = "object" == typeof global && global && global.Object === Object && global,
    s = "object" == typeof self && self && self.Object === Object && self,
    o = i || s || Function("return this")(),
    a = o.Symbol,
    u = Object.prototype,
    c = u.hasOwnProperty,
    l = u.toString,
    h = a ? a.toStringTag : void 0,
    d = Object.prototype.toString,
    f = a ? a.toStringTag : void 0;

function _(e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : f && f in Object(e) ? function(e) {
        var t = c.call(e, h),
            n = e[h];
        try {
            e[h] = void 0;
            var r = !0
        } catch (rl) {}
        var i = l.call(e);
        return r && (t ? e[h] = n : delete e[h]), i
    }(e) : function(e) {
        return d.call(e)
    }(e)
}

function p(e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t)
}

function m(e) {
    if (!p(e)) return !1;
    var t = _(e);
    return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
}
var v = o["__core-js_shared__"],
    g = function() {
        var e = /[^.]+$/.exec(v && v.keys && v.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    }(),
    y = Function.prototype.toString;

function E(e) {
    if (null != e) {
        try {
            return y.call(e)
        } catch (rl) {}
        try {
            return e + ""
        } catch (rl) {}
    }
    return ""
}
var S = /^\[object .+?Constructor\]$/,
    T = Function.prototype,
    b = Object.prototype,
    A = T.toString,
    I = b.hasOwnProperty,
    w = RegExp("^" + A.call(I).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function R(e, t) {
    var n = function(e, t) {
        return null == e ? void 0 : e[t]
    }(e, t);
    return function(e) {
        return !(!p(e) || function(e) {
            return !!g && g in e
        }(e)) && (m(e) ? w : S).test(E(e))
    }(n) ? n : void 0
}
var P = R(o, "Map"),
    D = R(Object, "create"),
    k = Object.prototype.hasOwnProperty,
    O = Object.prototype.hasOwnProperty;

function C(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}

function L(e, t) {
    var n = e.__data__;
    return function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
}

function N(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}

function M(e) {
    var t = this.__data__ = new r(e);
    this.size = t.size
}
C.prototype.clear = function() {
    this.__data__ = D ? D(null) : {}, this.size = 0
}, C.prototype.delete = function(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t
}, C.prototype.get = function(e) {
    var t = this.__data__;
    if (D) {
        var n = t[e];
        return "__lodash_hash_undefined__" === n ? void 0 : n
    }
    return k.call(t, e) ? t[e] : void 0
}, C.prototype.has = function(e) {
    var t = this.__data__;
    return D ? void 0 !== t[e] : O.call(t, e)
}, C.prototype.set = function(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = D && void 0 === t ? "__lodash_hash_undefined__" : t, this
}, N.prototype.clear = function() {
    this.size = 0, this.__data__ = {
        hash: new C,
        map: new(P || r),
        string: new C
    }
}, N.prototype.delete = function(e) {
    var t = L(this, e).delete(e);
    return this.size -= t ? 1 : 0, t
}, N.prototype.get = function(e) {
    return L(this, e).get(e)
}, N.prototype.has = function(e) {
    return L(this, e).has(e)
}, N.prototype.set = function(e, t) {
    var n = L(this, e),
        r = n.size;
    return n.set(e, t), this.size += n.size == r ? 0 : 1, this
}, M.prototype.clear = function() {
    this.__data__ = new r, this.size = 0
}, M.prototype.delete = function(e) {
    var t = this.__data__,
        n = t.delete(e);
    return this.size = t.size, n
}, M.prototype.get = function(e) {
    return this.__data__.get(e)
}, M.prototype.has = function(e) {
    return this.__data__.has(e)
}, M.prototype.set = function(e, t) {
    var n = this.__data__;
    if (n instanceof r) {
        var i = n.__data__;
        if (!P || i.length < 199) return i.push([e, t]), this.size = ++n.size, this;
        n = this.__data__ = new N(i)
    }
    return n.set(e, t), this.size = n.size, this
};
var x = function() {
    try {
        var e = R(Object, "defineProperty");
        return e({}, "", {}), e
    } catch (rl) {}
}();

function F(e, t, n) {
    "__proto__" == t && x ? x(e, t, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : e[t] = n
}
var U = Object.prototype.hasOwnProperty;

function B(t, n, r) {
    var i = t[n];
    U.call(t, n) && e(i, r) && (void 0 !== r || n in t) || F(t, n, r)
}

function j(e, t, n, r) {
    var i = !n;
    n || (n = {});
    for (var s = -1, o = t.length; ++s < o;) {
        var a = t[s],
            u = r ? r(n[a], e[a], a, n, e) : void 0;
        void 0 === u && (u = e[a]), i ? F(n, a, u) : B(n, a, u)
    }
    return n
}

function V(e) {
    return null != e && "object" == typeof e
}

function H(e) {
    return V(e) && "[object Arguments]" == _(e)
}
var X = Object.prototype,
    q = X.hasOwnProperty,
    G = X.propertyIsEnumerable,
    W = H(function() {
        return arguments
    }()) ? H : function(e) {
        return V(e) && q.call(e, "callee") && !G.call(e, "callee")
    },
    K = Array.isArray,
    Y = "object" == typeof exports && exports && !exports.nodeType && exports,
    $ = Y && "object" == typeof module && module && !module.nodeType && module,
    z = $ && $.exports === Y ? o.Buffer : void 0,
    Q = (z ? z.isBuffer : void 0) || function() {
        return !1
    },
    J = /^(?:0|[1-9]\d*)$/;

function Z(e, t) {
    var n = typeof e;
    return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && J.test(e)) && e > -1 && e % 1 == 0 && e < t
}

function ee(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
}
var te = {};

function ne(e) {
    return function(t) {
        return e(t)
    }
}
te["[object Float32Array]"] = te["[object Float64Array]"] = te["[object Int8Array]"] = te["[object Int16Array]"] = te["[object Int32Array]"] = te["[object Uint8Array]"] = te["[object Uint8ClampedArray]"] = te["[object Uint16Array]"] = te["[object Uint32Array]"] = !0, te["[object Arguments]"] = te["[object Array]"] = te["[object ArrayBuffer]"] = te["[object Boolean]"] = te["[object DataView]"] = te["[object Date]"] = te["[object Error]"] = te["[object Function]"] = te["[object Map]"] = te["[object Number]"] = te["[object Object]"] = te["[object RegExp]"] = te["[object Set]"] = te["[object String]"] = te["[object WeakMap]"] = !1;
var re = "object" == typeof exports && exports && !exports.nodeType && exports,
    ie = re && "object" == typeof module && module && !module.nodeType && module,
    se = ie && ie.exports === re && i.process,
    oe = function() {
        try {
            return ie && ie.require && ie.require("util").types || se && se.binding && se.binding("util")
        } catch (rl) {}
    }(),
    ae = oe && oe.isTypedArray,
    ue = ae ? ne(ae) : function(e) {
        return V(e) && ee(e.length) && !!te[_(e)]
    },
    ce = Object.prototype.hasOwnProperty;

function le(e, t) {
    var n = K(e),
        r = !n && W(e),
        i = !n && !r && Q(e),
        s = !n && !r && !i && ue(e),
        o = n || r || i || s,
        a = o ? function(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        }(e.length, String) : [],
        u = a.length;
    for (var c in e) !t && !ce.call(e, c) || o && ("length" == c || i && ("offset" == c || "parent" == c) || s && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Z(c, u)) || a.push(c);
    return a
}
var he = Object.prototype;

function de(e) {
    var t = e && e.constructor;
    return e === ("function" == typeof t && t.prototype || he)
}

function fe(e, t) {
    return function(n) {
        return e(t(n))
    }
}
var _e = fe(Object.keys, Object),
    pe = Object.prototype.hasOwnProperty;

function me(e) {
    if (!de(e)) return _e(e);
    var t = [];
    for (var n in Object(e)) pe.call(e, n) && "constructor" != n && t.push(n);
    return t
}

function ve(e) {
    return null != e && ee(e.length) && !m(e)
}

function ge(e) {
    return ve(e) ? le(e) : me(e)
}
var ye = Object.prototype.hasOwnProperty;

function Ee(e) {
    return ve(e) ? le(e, !0) : function(e) {
        if (!p(e)) return function(e) {
            var t = [];
            if (null != e)
                for (var n in Object(e)) t.push(n);
            return t
        }(e);
        var t = de(e),
            n = [];
        for (var r in e)("constructor" != r || !t && ye.call(e, r)) && n.push(r);
        return n
    }(e)
}
var Se = "object" == typeof exports && exports && !exports.nodeType && exports,
    Te = Se && "object" == typeof module && module && !module.nodeType && module,
    be = Te && Te.exports === Se ? o.Buffer : void 0,
    Ae = be ? be.allocUnsafe : void 0;

function Ie(e, t) {
    if (t) return e.slice();
    var n = e.length,
        r = Ae ? Ae(n) : new e.constructor(n);
    return e.copy(r), r
}

function we(e, t) {
    var n = -1,
        r = e.length;
    for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
    return t
}

function Re() {
    return []
}
var Pe = Object.prototype.propertyIsEnumerable,
    De = Object.getOwnPropertySymbols,
    ke = De ? function(e) {
        return null == e ? [] : (e = Object(e), function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, i = 0, s = []; ++n < r;) {
                var o = e[n];
                t(o) && (s[i++] = o)
            }
            return s
        }(De(e), (function(t) {
            return Pe.call(e, t)
        })))
    } : Re;

function Oe(e, t) {
    for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
    return e
}
var Ce = fe(Object.getPrototypeOf, Object),
    Le = Object.getOwnPropertySymbols ? function(e) {
        for (var t = []; e;) Oe(t, ke(e)), e = Ce(e);
        return t
    } : Re;

function Ne(e, t, n) {
    var r = t(e);
    return K(e) ? r : Oe(r, n(e))
}

function Me(e) {
    return Ne(e, ge, ke)
}

function xe(e) {
    return Ne(e, Ee, Le)
}
var Fe = R(o, "DataView"),
    Ue = R(o, "Promise"),
    Be = R(o, "Set"),
    je = R(o, "WeakMap"),
    Ve = E(Fe),
    He = E(P),
    Xe = E(Ue),
    qe = E(Be),
    Ge = E(je),
    We = _;
(Fe && "[object DataView]" != We(new Fe(new ArrayBuffer(1))) || P && "[object Map]" != We(new P) || Ue && "[object Promise]" != We(Ue.resolve()) || Be && "[object Set]" != We(new Be) || je && "[object WeakMap]" != We(new je)) && (We = function(e) {
    var t = _(e),
        n = "[object Object]" == t ? e.constructor : void 0,
        r = n ? E(n) : "";
    if (r) switch (r) {
        case Ve:
            return "[object DataView]";
        case He:
            return "[object Map]";
        case Xe:
            return "[object Promise]";
        case qe:
            return "[object Set]";
        case Ge:
            return "[object WeakMap]"
    }
    return t
});
var Ke = We,
    Ye = Object.prototype.hasOwnProperty,
    $e = o.Uint8Array;

function ze(e) {
    var t = new e.constructor(e.byteLength);
    return new $e(t).set(new $e(e)), t
}
var Qe = /\w*$/,
    Je = a ? a.prototype : void 0,
    Ze = Je ? Je.valueOf : void 0;

function et(e, t) {
    var n = t ? ze(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length)
}
var tt = Object.create,
    nt = function() {
        function e() {}
        return function(t) {
            if (!p(t)) return {};
            if (tt) return tt(t);
            e.prototype = t;
            var n = new e;
            return e.prototype = void 0, n
        }
    }();

function rt(e) {
    return "function" != typeof e.constructor || de(e) ? {} : nt(Ce(e))
}
var it = oe && oe.isMap,
    st = it ? ne(it) : function(e) {
        return V(e) && "[object Map]" == Ke(e)
    },
    ot = oe && oe.isSet,
    at = ot ? ne(ot) : function(e) {
        return V(e) && "[object Set]" == Ke(e)
    },
    ut = {};

function ct(e, t, n, r, i, s) {
    var o, a = 1 & t,
        u = 2 & t,
        c = 4 & t;
    if (n && (o = i ? n(e, r, i, s) : n(e)), void 0 !== o) return o;
    if (!p(e)) return e;
    var l = K(e);
    if (l) {
        if (o = function(e) {
                var t = e.length,
                    n = new e.constructor(t);
                return t && "string" == typeof e[0] && Ye.call(e, "index") && (n.index = e.index, n.input = e.input), n
            }(e), !a) return we(e, o)
    } else {
        var h = Ke(e),
            d = "[object Function]" == h || "[object GeneratorFunction]" == h;
        if (Q(e)) return Ie(e, a);
        if ("[object Object]" == h || "[object Arguments]" == h || d && !i) {
            if (o = u || d ? {} : rt(e), !a) return u ? function(e, t) {
                return j(e, Le(e), t)
            }(e, function(e, t) {
                return e && j(t, Ee(t), e)
            }(o, e)) : function(e, t) {
                return j(e, ke(e), t)
            }(e, function(e, t) {
                return e && j(t, ge(t), e)
            }(o, e))
        } else {
            if (!ut[h]) return i ? e : {};
            o = function(e, t, n) {
                var r = e.constructor;
                switch (t) {
                    case "[object ArrayBuffer]":
                        return ze(e);
                    case "[object Boolean]":
                    case "[object Date]":
                        return new r(+e);
                    case "[object DataView]":
                        return function(e, t) {
                            var n = t ? ze(e.buffer) : e.buffer;
                            return new e.constructor(n, e.byteOffset, e.byteLength)
                        }(e, n);
                    case "[object Float32Array]":
                    case "[object Float64Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object Int32Array]":
                    case "[object Uint8Array]":
                    case "[object Uint8ClampedArray]":
                    case "[object Uint16Array]":
                    case "[object Uint32Array]":
                        return et(e, n);
                    case "[object Map]":
                        return new r;
                    case "[object Number]":
                    case "[object String]":
                        return new r(e);
                    case "[object RegExp]":
                        return function(e) {
                            var t = new e.constructor(e.source, Qe.exec(e));
                            return t.lastIndex = e.lastIndex, t
                        }(e);
                    case "[object Set]":
                        return new r;
                    case "[object Symbol]":
                        return function(e) {
                            return Ze ? Object(Ze.call(e)) : {}
                        }(e)
                }
            }(e, h, a)
        }
    }
    s || (s = new M);
    var f = s.get(e);
    if (f) return f;
    s.set(e, o), at(e) ? e.forEach((function(r) {
        o.add(ct(r, t, n, r, e, s))
    })) : st(e) && e.forEach((function(r, i) {
        o.set(i, ct(r, t, n, i, e, s))
    }));
    var _ = c ? u ? xe : Me : u ? keysIn : ge,
        m = l ? void 0 : _(e);
    return function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n););
    }(m || e, (function(r, i) {
        m && (r = e[i = r]), B(o, i, ct(r, t, n, i, e, s))
    })), o
}

function lt(e) {
    return ct(e, 5)
}
ut["[object Arguments]"] = ut["[object Array]"] = ut["[object ArrayBuffer]"] = ut["[object DataView]"] = ut["[object Boolean]"] = ut["[object Date]"] = ut["[object Float32Array]"] = ut["[object Float64Array]"] = ut["[object Int8Array]"] = ut["[object Int16Array]"] = ut["[object Int32Array]"] = ut["[object Map]"] = ut["[object Number]"] = ut["[object Object]"] = ut["[object RegExp]"] = ut["[object Set]"] = ut["[object String]"] = ut["[object Symbol]"] = ut["[object Uint8Array]"] = ut["[object Uint8ClampedArray]"] = ut["[object Uint16Array]"] = ut["[object Uint32Array]"] = !0, ut["[object Error]"] = ut["[object Function]"] = ut["[object WeakMap]"] = !1;
var ht = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function dt(e, t, n) {
    return e(n = {
        path: t,
        exports: {},
        require: function(e, t) {
            return function() {
                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
            }(null == t && n.path)
        }
    }, n.exports), n.exports
}
var ft = dt((function(e, t) {
    e.exports = function(e) {
        var t = {};
        return (e = e || {}).prependOn = function(t, n) {
            return e.on(t, n, !0)
        }, e.eventNames = function() {
            return Object.keys(t)
        }, e.on = function(n, r, i) {
            for (var s = 0, o = (n = [].concat(n)).length; s < o; s++) {
                var a = n[s];
                if (!a) throw new Error("Tried to listen for an undefined event.");
                t[a] || (t[a] = []), i ? t[a].unshift(r) : t[a].push(r)
            }
            return e
        }, e.once = function(t, n, r) {
            function i() {
                n.apply(e.off(t, i), arguments)
            }
            return i.handler = n, e.on(t, i, r)
        }, e.off = function(n, r) {
            if (!n) return t = {}, e;
            for (var i = 0, s = (n = [].concat(n)).length; i < s; i++) {
                var o = n[i];
                if (!o) throw new Error("Tried to remove an undefined event.");
                if (o in t)
                    if (r) {
                        var a = t[o].indexOf(r);
                        if (-1 === a)
                            for (var u = 0, c = t[o].length; u < c; u++)
                                if (t[o][u].handler === r) {
                                    a = i;
                                    break
                                }
                        if (-1 === a) return e;
                        t[o].splice(a, 1)
                    } else delete t[o]
            }
            return e
        }, e.fire = function(n) {
            if (!n) throw new Error("Tried to fire an undefined event.");
            if (n in t)
                for (var r = t[n].slice(0), i = 0, s = r.length; i < s; i++)
                    if (r[i].apply(e, r.slice.call(arguments, 1)), e.__isHalted) {
                        delete e.__isHalted;
                        break
                    }
            return e
        }, e.halt = function() {
            return e.__isHalted = !0, e
        }, e
    }
}));

function _t(e) {
    return e.filter((e, t, n) => n.indexOf(e) === t)
}

function pt(e, t) {
    return e.reduce((e, n, r, i) => e.concat(t(n, r, i)), [])
}

function mt(e) {
    return (t, ...n) => (n.forEach(n => {
        for (const r in n) {
            const i = Object.getOwnPropertyDescriptor(n, r);
            Object.defineProperty(t, r, Object.assign(i, e))
        }
    }), t)
}
const vt = mt({
        enumerable: !1,
        configurable: !0,
        writeable: !1
    }),
    gt = mt({
        enumerable: !1,
        configurable: !1,
        writeable: !1
    }),
    yt = mt({
        enumerable: !0,
        configurable: !0,
        writeable: !1
    }),
    Et = e => new Promise((t, n) => setTimeout(t, e));

function St(e) {
    e.substring(0, e.lastIndexOf("/") + 1)
}
const Tt = e => Math.pow(e, 2),
    bt = e => Math.sqrt(e);

function At(e, ...t) {
    return t.reduce((e, t) => (Object.keys(t || {}).forEach(n => {
        const r = e[n],
            i = t[n];
        r && void 0 === i || (Array.isArray(i) ? e[n] = (r || []).concat(i) : (e => e && "object" == typeof e)(i) ? e[n] = At({}, r, i) : e[n] = i)
    }), e), e)
}

function It() {
    let e, t, n = new Promise((function(n, r) {
        e = n, t = r
    }));
    return n.resolve = e, n.reject = t, n
}

function wt(e, t) {
    let n = e;
    for (let r = 0; r < t.length; r++)
        if (t.start(r) <= e && t.end(r) >= e) {
            n = t.end(r);
            break
        }
    return n - e
}

function Rt(e, t) {
    if (!t || !t.length) return 0;
    if (1 === t.length && t.end(0) - t.start(0) < 1e-6) return 0;
    let n = 0;
    for (let r = t.length - 1; r >= 0 && t.end(r) > e; --r) n += t.end(r) - Math.max(t.start(r), e);
    return n
}

function Pt() {
    return void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now()
}

function Dt(e) {
    return Pt() - e
}

function kt(e) {
    if ("object" != typeof e) return "";
    let t = [];
    for (let n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t.length ? t.join("&") : ""
}

function Ot(e) {
    return "string" != typeof e ? {} : e.replace("?", "").split("&").reduce((e, t) => {
        if (t.length > 0) {
            const [n, r] = t.split("=");
            e[n] = decodeURIComponent(r)
        }
        return e
    }, {})
}

function Ct(e) {
    const t = document.createElement("a");
    return t.href = e, t
}

function Lt(e, t) {
    const n = kt(t);
    let r = -1 === e.indexOf("?") ? "?" : "&";
    return `${e}${n?`${r}${n}`:""}`
}

function Nt(e) {
    const t = e.split("://");
    if (2 !== t.length) return null;
    const n = t[1].split("/");
    if (n.length > 1) return n[0];
    const r = t[1].split("?");
    if (r.length > 1) return r[0];
    const i = t[1].split("#");
    return i.length > 1 ? i[0] : t[1]
}

function Mt(e, t, n) {
    switch (n.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, n[0]);
        case 2:
            return e.call(t, n[0], n[1]);
        case 3:
            return e.call(t, n[0], n[1], n[2])
    }
    return e.apply(t, n)
}

function xt(e) {
    return e
}
var Ft = Math.max;

function Ut(e, t, n) {
    return t = Ft(void 0 === t ? e.length - 1 : t, 0),
        function() {
            for (var r = arguments, i = -1, s = Ft(r.length - t, 0), o = Array(s); ++i < s;) o[i] = r[t + i];
            i = -1;
            for (var a = Array(t + 1); ++i < t;) a[i] = r[i];
            return a[t] = n(o), Mt(e, this, a)
        }
}

function Bt(e) {
    return function() {
        return e
    }
}
var jt = x ? function(e, t) {
        return x(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Bt(t),
            writable: !0
        })
    } : xt,
    Vt = Date.now,
    Ht = function(e) {
        var t = 0,
            n = 0;
        return function() {
            var r = Vt(),
                i = 16 - (r - n);
            if (n = r, i > 0) {
                if (++t >= 800) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }(jt);

function Xt(e, t) {
    return Ht(Ut(e, t, xt), e + "")
}

function qt(t, n, r) {
    (void 0 === r || e(t[n], r)) && (void 0 !== r || n in t) || F(t, n, r)
}
var Gt = function(e, t, n) {
        for (var r = -1, i = Object(e), s = n(e), o = s.length; o--;) {
            var a = s[++r];
            if (!1 === t(i[a], a, i)) break
        }
        return e
    },
    Wt = Function.prototype,
    Kt = Object.prototype,
    Yt = Wt.toString,
    $t = Kt.hasOwnProperty,
    zt = Yt.call(Object);

function Qt(e) {
    if (!V(e) || "[object Object]" != _(e)) return !1;
    var t = Ce(e);
    if (null === t) return !0;
    var n = $t.call(t, "constructor") && t.constructor;
    return "function" == typeof n && n instanceof n && Yt.call(n) == zt
}

function Jt(e, t) {
    if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
}

function Zt(e, t, n, r, i) {
    e !== t && Gt(t, (function(s, o) {
        if (i || (i = new M), p(s)) ! function(e, t, n, r, i, s, o) {
            var a = Jt(e, n),
                u = Jt(t, n),
                c = o.get(u);
            if (c) qt(e, n, c);
            else {
                var l = s ? s(a, u, n + "", e, t, o) : void 0,
                    h = void 0 === l;
                if (h) {
                    var d = K(u),
                        f = !d && Q(u),
                        _ = !d && !f && ue(u);
                    l = u, d || f || _ ? K(a) ? l = a : function(e) {
                        return V(e) && ve(e)
                    }(a) ? l = we(a) : f ? (h = !1, l = Ie(u, !0)) : _ ? (h = !1, l = et(u, !0)) : l = [] : Qt(u) || W(u) ? (l = a, W(a) ? l = function(e) {
                        return j(e, Ee(e))
                    }(a) : p(a) && !m(a) || (l = rt(u))) : h = !1
                }
                h && (o.set(u, l), i(l, u, r, s, o), o.delete(u)), qt(e, n, l)
            }
        }(e, t, o, n, Zt, r, i);
        else {
            var a = r ? r(Jt(e, o), s, o + "", e, t, i) : void 0;
            void 0 === a && (a = s), qt(e, o, a)
        }
    }), Ee)
}

function en(e, t, n, r, i, s) {
    return p(e) && p(t) && (s.set(t, e), Zt(e, t, void 0, en, s), s.delete(t)), e
}

function tn(t) {
    return Xt((function(n, r) {
        var i = -1,
            s = r.length,
            o = s > 1 ? r[s - 1] : void 0,
            a = s > 2 ? r[2] : void 0;
        for (o = t.length > 3 && "function" == typeof o ? (s--, o) : void 0, a && function(t, n, r) {
                if (!p(r)) return !1;
                var i = typeof n;
                return !!("number" == i ? ve(r) && Z(n, r.length) : "string" == i && n in r) && e(r[n], t)
            }(r[0], r[1], a) && (o = s < 3 ? void 0 : o, s = 1), n = Object(n); ++i < s;) {
            var u = r[i];
            u && t(n, u, i, o)
        }
        return n
    }))
}
var nn = tn((function(e, t, n, r) {
        Zt(e, t, n, r)
    })),
    rn = Xt((function(e) {
        return e.push(void 0, en), Mt(nn, void 0, e)
    }));

function sn(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function on(e, t, n) {
    return t && sn(e.prototype, t), n && sn(e, n), e
}

function an(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function un(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
    }
    return n
}

function cn(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? un(Object(n), !0).forEach((function(t) {
            an(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : un(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
    }
    return e
}

function ln(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}

function hn(e) {
    return (hn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
}

function dn(e, t) {
    return (dn = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
    })(e, t)
}

function fn() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
    } catch (rl) {
        return !1
    }
}

function _n(e, t, n) {
    return (_n = fn() ? Reflect.construct : function(e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var i = new(Function.bind.apply(e, r));
        return n && dn(i, n.prototype), i
    }).apply(null, arguments)
}

function pn(e) {
    var t = "function" == typeof Map ? new Map : void 0;
    return (pn = function(e) {
        if (null === e || ! function(e) {
                return -1 !== Function.toString.call(e).indexOf("[native code]")
            }(e)) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n)
        }

        function n() {
            return _n(e, arguments, hn(this).constructor)
        }
        return n.prototype = Object.create(e.prototype, {
            constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), dn(n, e)
    })(e)
}

function mn(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
            s = Object.keys(e);
        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
}

function vn(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function gn(e) {
    return function(e) {
        if (Array.isArray(e)) return yn(e)
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
    }(e) || function(e, t) {
        if (e) {
            if ("string" == typeof e) return yn(e, void 0);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? yn(e, void 0) : void 0
        }
    }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function yn(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}
let En = function() {
    function e(e) {
        this._available = !1, this._active = !1, this._video = e, ft(this)
    }
    on(e, null, [{
        key: "displayName",
        get: function() {
            return "ExternalDisplay"
        }
    }, {
        key: "supported",
        get: function() {
            return !1
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            return []
        }
    }]);
    var t = e.prototype;
    return t.showPicker = function() {}, t.getFile = function() {
        const e = this.constructor.displayName.replace("ExternalDisplay", "");
        if (this._video.externalDisplayFiles[e]) return this._video.externalDisplayFiles[e];
        const t = this.constructor.supportedVideoTypes,
            n = this._video.files.filter(e => -1 !== t.indexOf(e.mime)).sort((e, n) => e.mime === n.mime ? e.priority - n.priority : t.indexOf(e.mime) - t.indexOf(n.mime));
        if (!n.length) throw new Error(`No files available for ${this.constructor.displayName} external display.`);
        return n[0]
    }, on(e, [{
        key: "active",
        get: function() {
            return this._active
        }
    }, {
        key: "available",
        get: function() {
            return this._available
        }
    }, {
        key: "element",
        get: function() {
            return document.createElement("div")
        }
    }]), e
}();
const Sn = {
        ABORT: "abort",
        CAN_PLAY: "canplay",
        CAN_PLAY_THROUGH: "canplaythrough",
        DURATION_CHANGE: "durationchange",
        EMPTIED: "emptied",
        ENDED: "ended",
        ENTER_PICTURE_IN_PICTURE: "enterpictureinpicture",
        LEAVE_PICTURE_IN_PICTURE: "leavepictureinpicture",
        ERROR: "error",
        LOADED_DATA: "loadeddata",
        LOADED_METADATA: "loadedmetadata",
        LOAD_START: "loadstart",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        PROGRESS: "progress",
        RATE_CHANGE: "ratechange",
        RESIZE: "resize",
        SEEKED: "seeked",
        SEEKING: "seeking",
        STALLED: "stalled",
        SUSPEND: "suspend",
        TIME_UPDATE: "timeupdate",
        VOLUME_CHANGE: "volumechange",
        WAITING: "waiting",
        WEBKIT_BEGIN_FULLSCREEN: "webkitbeginfullscreen",
        WEBKIT_END_FULLSCREEN: "webkitendfullscreen",
        WEBKIT_PRESENTATION_MODE_CHANGED: "webkitpresentationmodechanged"
    },
    Tn = {
        AVAILABLE: "externaldisplayavailable",
        UNAVAILABLE: "externaldisplayunavailable",
        ACTIVATED: "externaldisplayactivated",
        DEACTIVATED: "externaldisplaydeactivated"
    },
    bn = {
        AIRPLAY_AVAILABLE: "available",
        AIRPLAY_UNAVAILABLE: "unavailable",
        AIRPLAY_ACTIVATED: "activated",
        AIRPLAY_DEACTIVATED: "deactivated"
    },
    An = {
        SCANNER_CHANGE: "scannerchange",
        SCANNER_ERROR: "scannererror",
        FILE_ERROR: "fileerror",
        FILE_SRC_UPDATE: "filesrcupdate",
        DOWNLOAD_START: "downloadstart",
        DOWNLOAD_END: "downloadend",
        DOWNLOAD_ERROR: "downloaderror",
        DOWNLOAD_TIMEOUT: "downloadtimeout",
        DRM_AUTH_FAILURE: "drmauthfailure",
        DRM_AUTH_SUCCESS: "drmauthsuccess",
        DRM_FAILURE: "drmfailure",
        DRM_KEY_SWITCH: "drmkeyswitch",
        DRM_OUTPUT_RESTRICTED: "drmoutputrestricted",
        EME_UNSUPPORTED: "emeunsupported",
        CURRENT_FILE_CHANGE: "currentfilechange",
        MEDIA_URL_EXPIRED: "mediaurlexpired",
        MEDIA_URL_BAD_REQUEST: "mediaurlbadrequest",
        STREAM_CHANGE: "streamchange",
        STREAM_CHANGE_START: "streamchangestart",
        STREAM_UPDATED: "streamupdated",
        STREAM_BUFFER_START: "streambufferstart",
        STREAM_BUFFER_END: "streambufferend",
        DROPPED_FRAMES: "droppedframes",
        BANDWIDTH: "bandwidth",
        STREAM_TARGET_CHANGE: "streamtargetchange",
        CUE_POINT: "cuepoint",
        BUFFER_OCCUPANCY: "bufferoccupancy",
        MANIFEST_TIMEOUT: "manifesttimeout",
        MANIFEST_LOADED: "manifestloaded",
        STREAMS_LOADED: "streamsloaded",
        TEXT_SRC_UPDATE: "texttracksrcupdate",
        TEXT_TRACKS_AVAILABLE: "texttracksavailable",
        AV_DURATION_MISMATCH: "avdurationmismatch",
        BUFFER_STARTED: "bufferstarted",
        BUFFER_ENDED: "bufferended",
        QUOTA_EXCEEDED_ERROR: "quotaexceedederror",
        CHAPTER_CUES_UPDATED: "chaptercuesupdated",
        APPEND_BUFFER_END: "appendbufferend",
        DROPPED_FRAME_PERCENT_EXCEEDED: "droppedframepercentexceeded"
    },
    In = {
        STREAM_ONLINE: "livestreamonline",
        STREAM_OFFLINE: "livestreamoffline",
        BUFFER_GAP_JUMP: "livebuffergapjump",
        BUFFER_GAP_JUMP_PREVENT: "livebuffergapjumpprevent",
        STALL_JUMP: "livestalljump"
    },
    wn = {
        CAMERA_UPDATE: "cameraupdate",
        CAMERA_CHANGE: "camerachange",
        MOTION_START: "motionstart",
        MOTION_END: "motionend",
        SPATIAL_UNSUPPORTED: "spatialunsupported",
        WEBVR_ENTER: "entervr",
        WEBVR_EXIT: "exitvr",
        WEBVR_HARDWARE_AVAILABLE: "webvrhardwareavailable"
    },
    Rn = {
        MEDIASESSION_PLAY: "mediasessionplay",
        MEDIASESSION_PAUSE: "mediasessionpause",
        MEDIASESSION_SEEK_FORWARD: "mediasessionseekforward",
        MEDIASESSION_SEEK_BACKWARD: "mediasessionseekbackward"
    },
    Pn = {
        BRAIN_ML_MODEL_ERR: "brainmlmodelerr",
        BRAIN_ML_MODEL_NET_ERR: "brainmlmodelresperr",
        BRAIN_ML_MODEL_TIMEOUT: "brainmlmodeltimeout",
        BRAIN_ML_SWITCH_TO_SKYFIRE: "brainmlmodelswitchtoskyfire",
        BRAIN_ML_MODEL_INPUTS: "brainmlmodelinputs"
    },
    Dn = Object.assign({}, Sn, Tn, bn, An, wn, In, Rn, Pn);
let kn = function(e) {
    function t(t) {
        var n;
        return (n = e.call(this, t) || this)._videoElement = document.createElement("video"), n._videoElement.setAttribute("data-airplay", ""), n._videoElement.setAttribute("x-webkit-airplay", "allow"), n.addVideoEventListeners(), n
    }
    ln(t, e), on(t, null, [{
        key: "displayName",
        get: function() {
            return "AirPlayExternalDisplay"
        }
    }, {
        key: "supported",
        get: function() {
            return "WebKitPlaybackTargetAvailabilityEvent" in window
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            return ["application/vnd.apple.mpegurl", "video/mp4"]
        }
    }]);
    var n = t.prototype;
    return n.addVideoEventListeners = function(e = this._videoElement) {
        e.addEventListener(Sn.LOADED_METADATA, e => {
            this.fire(Sn.LOADED_METADATA, e)
        }), e.addEventListener("webkitplaybacktargetavailabilitychanged", e => {
            switch (e.availability) {
                case "available":
                    this._available || (this._available = !0, this.fire(bn.AIRPLAY_AVAILABLE));
                    break;
                case "not-available":
                    this._available && (this._available = !1, this.fire(bn.AIRPLAY_UNAVAILABLE))
            }
        }), e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", e => {
            if (e.target.webkitCurrentPlaybackTargetIsWireless) return this._active = !0, void this.fire(bn.AIRPLAY_ACTIVATED);
            this._active = !1, this.fire(bn.AIRPLAY_DEACTIVATED)
        })
    }, n.showPicker = function() {
        this._videoElement.webkitShowPlaybackTargetPicker(), this.loadMetadata().then(() => this._videoElement.webkitShowPlaybackTargetPicker()).catch(() => {})
    }, n.loadMetadata = function() {
        return this._videoElement.readyState >= 1 ? Promise.resolve() : new Promise((e, t) => {
            this._videoElement.addEventListener(Sn.LOADED_METADATA, () => {
                e()
            }), this._videoElement.src = this.getFile().src
        })
    }, on(t, [{
        key: "element",
        get: function() {
            return this._videoElement
        },
        set: function(e) {
            if (!(e instanceof HTMLVideoElement)) throw new TypeError("The element for AirPlay must be a <video>.");
            e !== this._videoElement && (this.addVideoEventListeners(e), this._videoElement = e, this._videoElement.setAttribute("x-webkit-airplay", "allow"))
        }
    }]), t
}(En);
var On = navigator.userAgent.toLowerCase();

function Cn(e) {
    e = e.toLowerCase();
    var t = new RegExp(e).test(On);
    return "safari" === e ? t && new RegExp("version").test(On) : t
}

function Ln(e) {
    var t = document.createElement("div"),
        n = e.charAt(0).toUpperCase() + e.slice(1),
        r = (e + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ");
    for (var i in r) {
        var s = r[i];
        if (void 0 !== t.style[s]) return s
    }
    return e
}
var Nn = !!Cn("android") && (parseFloat(On.replace(/^.* android (\d+)\.(\d+).*$/, "$1.$2")) || !0),
    Mn = window.devicePixelRatio || 1,
    xn = !(!Cn("windows phone") && !Cn("iemobile")) && (parseFloat(On.replace(/^.* windows phone (os )?(\d+)\.(\d+).*$/, "$2.$3")) || !0),
    Fn = !!Cn("msie") && parseFloat(On.replace(/^.*msie (\d+).*$/, "$1")),
    Un = !!Cn("trident") && parseFloat(On.replace(/^.*trident\/(\d+)\.(\d+).*$/, "$1.$2")) + 4,
    Bn = !!(Cn("ipad;") || Cn("iphone;") || Cn("ipod touch;")) && parseFloat(On.replace(/^.* os (\d+)_(\d+).*$/, "$1.$2")),
    jn = "MacIntel" === navigator.platform && void 0 !== navigator.standalone,
    Vn = Cn("opera") || Cn("opr"),
    Hn = /^Mozilla\/5\.0 \(.* Mac OS X.*\(KHTML, like Gecko\)(?: Mobile\/[\S]*|)$/i.test(On);

function Xn() {
    if (!Cn("safari")) return [];
    var e = On.split(" ").find((function(e) {
        return /version\//.test(e)
    }));
    return e ? e.replace("version/", "").split(".").map((function(e) {
        return parseInt(e, 10)
    })) : []
}
var qn = Cn("safari") && Cn("apple") && !Cn("chrome") && !Cn("android") && Xn()[0] >= 11,
    Gn = {
        airPlay: "WebKitPlaybackTargetAvailabilityEvent" in window,
        android: Nn,
        appleMail: Hn,
        hasAutoplayPolicy: Nn || Bn || qn || function() {
            if (!Cn("chrome")) return [];
            var e = On.split(" ").find((function(e) {
                return Bn ? /CriOS\//.test(e) : /chrome\//.test(e)
            }));
            return e ? e.replace("chrome/", "").split(".").map((function(e) {
                return parseInt(e, 10)
            })) : []
        }()[0] >= 66,
        iOS: Bn,
        iPadOS: jn,
        mobileAndroid: Nn && Cn("mobile"),
        browser: {
            bb10: Cn("bb10"),
            chrome: Cn("chrome"),
            firefox: Cn("firefox"),
            ie: Fn || Un,
            edge: Cn("edge"),
            opera: Vn,
            safari: Cn("safari") && Cn("apple") && !Cn("chrome") && !Cn("android")
        },
        devicePixelRatio: Mn,
        iPhone: Cn("iphone;") || Cn("ipod touch;") || Cn("ipod;"),
        iPad: Cn("ipad;"),
        iPadNonRetina: Cn("ipad;") && Mn < 2,
        mac: Cn("mac os"),
        pointerEvents: window.navigator.pointerEnabled || window.navigator.msPointerEnabled || !1,
        passiveEvents: function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                window.addEventListener("testPassive", null, t), window.removeEventListener("testPassive", null, t)
            } catch (rl) {}
            return e
        }(),
        svg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || Cn("windows phone") || window.navigator.maxTouchPoints > 1 || window.navigator.msMaxTouchPoints || !1,
        transformProperty: Ln("transform"),
        transitionProperty: Ln("transition"),
        webp: function() {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d")) && 0 === e.toDataURL("image/webp").indexOf("data:image/webp")
        }(),
        windowsPhone: xn
    },
    Wn = /mac os x 10_13/.test(On),
    Kn = Gn.iOS && Gn.iOS >= 11,
    Yn = Gn.iPhone && 812 === window.screen.availHeight && 375 === window.screen.availWidth,
    $n = Gn.iPhone && 896 === window.screen.availHeight && 414 === window.screen.availWidth,
    zn = Gn.iPad && 1112 === window.screen.availWidth && 834 === window.screen.availHeight,
    Qn = Gn.iPad && 834 === window.screen.availWidth && 1194 === window.screen.availHeight,
    Jn = Gn.iPad && 1024 === window.screen.availWidth && 1366 === window.screen.availHeight,
    Zn = Yn || $n || zn || Qn || Jn;

function er() {
    return !!(qn && Wn || qn && Kn) || "undefined" != typeof MediaSource && MediaSource.isTypeSupported('video/mp4; codecs="hvc1"')
}

function tr() {
    return !(Gn.iOS || Gn.iPad || Gn.browser.ie) && (!Cn("safari") || Xn()[0] > 11 || 11 === Xn()[0] && (Xn()[2] > 1 || Xn()[1] > 0))
}
Gn.hevc = er(), Gn.hdr = qn && Kn && Zn, Gn.dolbyVision = function() {
    var e = "undefined" != typeof MediaSource && MediaSource.isTypeSupported('video/mp4; codecs="dvh1"');
    if (!e) {
        var t = document.createElement("video");
        "canPlayType" in t && (e = "probably" === t.canPlayType('video/mp4; codecs="dvh1"'))
    }
    if (jn || Gn.iOS) {
        var n = Xn(),
            r = n[0],
            i = n[1];
        if (r < 14 || 14 === r && i < 1) return !1
    }
    return e
}(), Gn.vp9hdr = (window.matchMedia("(color-gamut: p3)").matches || window.matchMedia("(color-gamut: rec2020)").matches) && screen.colorDepth >= 48 && (MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.16.09.00"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.16.09.01"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.18.09.00"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.18.09.01"')), Gn.av1 = "undefined" != typeof MediaSource && MediaSource.isTypeSupported('video/mp4; codecs="av01.0.31M.08.0.110.01.01.01.0"'), Gn.webvr = !!(window.navigator && "getVRDisplays" in window.navigator), Gn.webxr = !!(window.navigator && "xr" in window.navigator && "supportsSession" in window.navigator.xr), Gn.spatialPlayback = tr(), Gn.spatialHEVC = !Gn.browser.safari && tr() && er(), Gn.stereoscopic = Gn.spatialPlayback && Gn.mobileAndroid;
const nr = (() => {
        const e = navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9]+)\.([0-9]+)\./);
        return !!e && {
            major: parseInt(e[1], 10),
            minor: parseInt(e[2], 10)
        }
    })(),
    rr = function(e) {
        for (let t = 0, n = this.length; t < n; t++)
            if (this[t].id === `${e}`) return this[t];
        return null
    };

function ir(e = []) {
    return e.item = function(e) {
        return this[e]
    }, e.getTrackById = rr, e
}

function sr() {
    return void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now()
}

function or(e) {
    return sr() - e
}

function ar() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e => (e ^ (16 * Math.random() >> e) / 4).toString(16))
}

function ur(e) {
    const t = window.atob(e),
        n = t.length,
        r = new Uint8Array(n);
    for (let i = 0; i < n; i++) r[i] = t.charCodeAt(i);
    return r
}

function cr(e, t, n, r) {
    let i = 0,
        s = 0,
        o = 0,
        a = 0;
    const u = e,
        c = t,
        l = n / r;
    return u / c >= l ? (s = c, i = (l * c).toFixed(2)) : (i = u, s = (u / l).toFixed(2)), o = Math.max((u - i) / 2, 0), a = Math.max((c - s) / 2, 0), {
        width: i,
        height: s,
        left: o,
        top: a
    }
}

function lr(e) {
    const t = [document.fullscreenElement, document.webkitFullscreenElement, document.webkitCurrentFullScreenElement, document.mozFullScreenElement, document.msFullscreenElement].find(e => void 0 !== e);
    return void 0 !== t ? !!t : e.webkitDisplayingFullscreen
}

function hr(e, t) {
    let n = e;
    return t && (n += `;codecs="${t}"`), n
}

function dr(e, t = 3) {
    if (e = parseFloat(e), isNaN(e)) return 0;
    const n = Math.pow(10, t);
    return Math.round(e * n) / n
}

function fr(e, t) {
    return e && e.tests && e.tests[t] ? e.tests[t] : null
}

function _r(e) {
    return e && "ML" === e.displayName
}
let pr = function(e, t) {
    this.name = e, this.message = t, Object.freeze(this)
};
const mr = new WeakMap;
let vr = function() {
    function e(e, t = {}) {
        const n = parseFloat(e);
        if (isNaN(n)) throw new TypeError("Time must be a number.");
        if (n < 0) throw new TypeError("Time must be a positive number.");
        this.time = e, this.data = t, this.id = ar();
        try {
            const n = "undefined" == typeof VTTCue ? TextTrackCue : VTTCue;
            this.vttCue = new n(e, e + .25, JSON.stringify(t)), this.vttCue.id = this.id
        } catch (rl) {
            throw new pr("CuePointsNotSupported", "Cue points are not supported in this browser.")
        }
        mr.set(this.vttCue, this), Object.freeze(this)
    }
    return e.fromVTTCue = function(t) {
        if (mr.has(t)) return mr.get(t);
        let n = {};
        try {
            n = JSON.parse(t.text)
        } catch (rl) {}
        return new e(t.startTime, n)
    }, e
}();

function gr(e, t, n) {
    let r;
    try {
        document.removeChild({})
    } catch (rl) {
        r = Object.create(Object.getPrototypeOf(rl), {
            name: {
                value: t,
                configurable: !0,
                writable: !0
            },
            code: {
                value: e,
                configurable: !0,
                writable: !0
            },
            message: {
                value: n,
                configurable: !0,
                writable: !0
            },
            toString: {
                value: () => `${t}: DOM Exception ${e}`,
                configurable: !0,
                writable: !0
            }
        })
    }
    return Object.freeze(r)
}
const yr = (e, t) => {
    if (!e || void 0 === e[t]) throw gr(1, "INDEX_SIZE_ERR");
    return e[t]
};

function Er(e = [], t = []) {
    return Object.freeze({
        get length() {
            return e.length
        },
        start: t => yr(e, t),
        end: e => yr(t, e),
        [Symbol.iterator]: () => function(e, t) {
            let n = 0;
            return {
                [Symbol.iterator]() {
                    return this
                },
                next: () => n < e.length ? {
                    done: !1,
                    value: t ? [e[n], t[n++]] : e[n++]
                } : {
                    done: !0
                }
            }
        }(e, t)
    })
}
Er.from = function(e) {
    if (!(e instanceof TimeRanges)) throw new TypeError("Can only create a TelecineTimeRange from a TimeRanges object.");
    const t = [],
        n = [];
    for (let r = 0, i = e.length; r < i; r++) t.push(e.start(r)), n.push(e.end(r));
    return Er(t, n)
};
const Sr = "DRMFailure",
    Tr = "MediaUrlBadRequest",
    br = "PlayInterrupted",
    Ar = "TextTracksNotSupported";

function Ir() {}
const wr = document.createElement("video"),
    Rr = {
        "application/vnd.apple.mpegurl": "application/vnd.apple.mpegurl",
        "video/mp4": 'video/mp4; codecs="avc1.64001E"',
        "video/webm": 'video/webm; codecs="vp8, vorbis"',
        "video/x-flv": 'video/x-flv; codecs="vp6"'
    },
    Pr = function() {
        const e = "undefined" == typeof TextTrack ? {} : TextTrack;
        return {
            disabled: "DISABLED" in e ? e.DISABLED : "disabled",
            hidden: "HIDDEN" in e ? e.HIDDEN : "hidden",
            showing: "SHOWING" in e ? e.SHOWING : "showing"
        }
    }(),
    Dr = function() {
        const e = document.createElement("track");
        return "track" in e && "oncuechange" in e.track
    }(),
    kr = new WeakMap;
let Or = function() {
    function e(e, t = {}) {
        this._element = e, this._options = t, this._telecineVideo = null, this._currentFile = null, this._externalDisplays = [], ft(this), this.on(Sn.LOADED_METADATA, () => this._initMediaSessionHandlers()), this.on(Sn.PLAY, () => this._initMediaSessionMetadata());
        let n = e.querySelector("video");
        n || (n = document.createElement("video"), n.preload = "none", this._element.appendChild(n)), n.setAttribute("tabindex", "-1"), this._video = n, t.playRequest && (this._playRequest = t.playRequest, this._playRequest.video = n), t.htmlScanner && t.htmlScanner.controls && (this._video.controls = !0), this._boundHandleVideoEvent = this.handleVideoEvent.bind(this), this.addVideoEventListeners(), this._preload = "none", this._externalDisplayActivated = !1, this._inFullscreen = !1, this._lastCurrentTime = -1
    }
    on(e, null, [{
        key: "displayName",
        get: function() {
            return "HTMLScanner"
        }
    }, {
        key: "supported",
        get: function() {
            return e.supportedVideoTypes.length > 0
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            const e = [];
            if ("function" != typeof wr.canPlayType) return e;
            for (const t in Rr) {
                const n = Rr[t];
                Gn.android && "application/vnd.apple.mpegurl" === t || (Gn.android && !Gn.mobileAndroid && "video/mp4" === t && Gn.android instanceof String ? parseInt(Gn.android.split(".")[0], 10) > 3 && e.push(t) : wr.canPlayType(n).replace(/^no$/, "") && e.push(t))
            }
            return e
        }
    }, {
        key: "supportedAudioTypes",
        get: function() {
            return []
        }
    }, {
        key: "supportedExternalDisplays",
        get: function() {
            return [kn]
        }
    }, {
        key: "supportsSettingVolume",
        get: function() {
            if (Gn.android || Gn.iOS || Gn.iPadOS) return !1;
            const e = wr.volume;
            return wr.volume = .5 * e, wr.volume !== e
        }
    }, {
        key: "supportsTextTracks",
        get: function() {
            return void 0 !== wr.textTracks && wr.textTracks instanceof TextTrackList
        }
    }, {
        key: "supportsPlaybackRate",
        get: function() {
            if (Gn.android && nr && nr.major < 52) return !1;
            const e = wr.playbackRate;
            wr.playbackRate = .5 * e;
            const t = e !== wr.playbackRate;
            return wr.playbackRate = e, t
        }
    }]);
    var t = e.prototype;
    return t.deactivate = function() {
        this._telecineVideo && (this._telecineVideo.off("filesrcupdate"), this._telecineVideo.off("texttracksrcupdate")), this.removeVideoEventListeners(), this.removeSnapshot(), this._video.style.display = "none"
    }, t.reactivate = function() {
        this.addVideoEventListeners(), this._video.style.display = ""
    }, t.addVideoEventListeners = function(e = this._video) {
        Object.keys(Sn).forEach(t => {
            const n = Sn[t];
            e.addEventListener(n, this._boundHandleVideoEvent)
        })
    }, t.removeVideoEventListeners = function(e = this._video) {
        Object.keys(Sn).forEach(t => {
            const n = Sn[t];
            e.removeEventListener(n, this._boundHandleVideoEvent)
        })
    }, t.play = function(e) {
        return this._playRequest.start(e).catch(e => {
            throw this._onPlayError(e), e
        })
    }, t._onPlayError = function(e) {
        this.fire(Sn.ERROR, new pr(null == e ? void 0 : e.name, null == e ? void 0 : e.message))
    }, t.pause = function() {
        this._playRequest.cancel(), this._video.pause()
    }, t.onpause = function() {}, t.ontimeupdate = function() {
        this._lastCurrentTime = this.currentTime
    }, t.addTextTrack = function(e) {
        let t, n;
        e.src ? (t = document.createElement("track"), t.kind = e.kind, t.src = e.src, t.id = `telecine-track-${e.id}`, t.srclang = e.language, t.label = e.label, this._video.appendChild(t), n = t.track) : (n = this._video.addTextTrack(e.kind, e.label, e.language), this._textTracks = this._textTracks || {}, this._textTracks[`telecine-track-${e.id}`] = n), n.addEventListener("cuechange", () => e.dispatchEvent("cuechange")), this._video.addEventListener("timeupdate", () => {
            lr(this._video) && (e.mode = n.mode)
        });
        const r = () => {
                const t = Gn.iOS && lr(this._video);
                !e._modeHasBeenSet || t ? e.mode = n.mode : n.mode = Pr[e.mode]
            },
            i = [];
        if (t ? t.addEventListener("load", r) : r(), ["loadeddata", "seeking"].forEach(e => {
                this._video.addEventListener(e, r), i.push([e, r])
            }), e._modeHasBeenSet && (n.mode = Pr[e.mode]), !Dr) {
            let t = [];
            const r = () => {
                if (n && "disabled" !== Pr[n.mode]) {
                    if (t.length !== n.activeCues.length) return e.dispatchEvent("cuechange"), void(t = Array.from(n.activeCues));
                    for (let r = 0, i = n.activeCues.length; r < i; r++)
                        if (n.activeCues[r].startTime !== t[r].startTime) return e.dispatchEvent("cuechange"), void(t = Array.from(n.activeCues))
                }
            };
            this._video.addEventListener("timeupdate", r), i.push(["timeupdate", r])
        }
        return kr.set(e, i), n
    }, t.removeTextTrack = function(e) {
        const t = this._video.querySelector(`#telecine-track-${e.id}`);
        t && this._video.removeChild(t);
        const n = kr.get(e);
        Array.isArray(n) && n.forEach(([e, t]) => {
            this._video.removeEventListener(e, t)
        })
    }, t.getCuesForTrack = function(e) {
        const t = this.getTrackById(`telecine-track-${e.id}`);
        return t ? Array.from(t.cues) : []
    }, t.getActiveCuesForTrack = function(e) {
        const t = this.getTrackById(`telecine-track-${e.id}`);
        return t ? Array.from(t.activeCues) : []
    }, t.setModeForTrack = function(e, t) {
        const n = this.getTrackById(`telecine-track-${e.id}`);
        return n && n.mode !== Pr[t] && (n.mode = Pr[t], Dr || "disabled" === t || e.dispatchEvent("cuechange")), this
    }, t.setSrcForTrack = function(e, t) {
        const n = this._video.querySelector(`#telecine-track-${e.id}`);
        return n && null === n.track.cues && (n.src = t), this
    }, t._createChapterCue = function(e, t, n = null) {
        let r;
        this._chaptersTrack || (this._chaptersTrack = this._video.addTextTrack("chapters"), this._chaptersTrack.mode = "hidden");
        const i = e.timecode,
            s = n ? n.timecode : t,
            o = window.VTTCue || window.TextTrackCue;
        try {
            r = new o(i, s, e.title)
        } catch (rl) {
            throw new pr("ChaptersNotSupported", "Chapters are not supported in this browser.")
        }
        r.size = (s - i) / t, r.id = i, this._chaptersTrack.addCue(r)
    }, t.addChapter = function(e, t) {
        const n = this.video.chapters,
            r = {
                timecode: e,
                title: t
            };
        n.push(r), n.sort((e, t) => e.timecode - t.timecode);
        const i = n[n.indexOf(r) + 1];
        this._createChapterCue(r, this.video.duration, i), this._updateChapterCues(this._chaptersTrack, this.video.duration)
    }, t.removeChapter = function(e) {
        try {
            this._chaptersTrack.removeCue(e)
        } catch (rl) {
            throw new pr("ChaptersNotSupported", "Chapters are not supported in this browser.")
        }
        const t = this.video.chapters.find(t => t.timecode === e.timecode);
        this.video.chapters.splice(t, 1), this._updateChapterCues(this._chaptersTrack, this.video.duration)
    }, t._updateChapterCues = function(e, t) {
        for (let n = 0; n < e.cues.length; n++) {
            let r = e.cues[n],
                i = e.cues[n + 1];
            const s = i ? i.startTime : t;
            r.endTime = s, r.size = (s - r.startTime) / t
        }
        this.fire(An.CHAPTER_CUES_UPDATED)
    }, t.addChapters = function(e, t) {
        0 !== e.length && t && (e = e.filter(e => this._isValidChapter(e, t))).sort((e, t) => e.timecode - t.timecode).forEach((n, r) => this._createChapterCue(n, t, e[r + 1]))
    }, t.addCuePoint = function(e, t = {}) {
        if (this._cuePointTrack || (this._cuePointTrack = this._video.addTextTrack("metadata"), this._cuePointTrack.mode = "hidden", this._cuePointTrack.addEventListener("cuechange", e => {
                Array.from(e.target.activeCues).forEach(e => {
                    this.fire(An.CUE_POINT, vr.fromVTTCue(e))
                })
            }), this._video.addEventListener("canplay", e => {
                this._cuePointTrack.mode = "hidden"
            })), e = parseFloat(e), isNaN(e)) throw new TypeError("Time must be a number.");
        if (e < 0 || e >= this.duration) throw new TypeError("Time must be a positive number less than the duration of the video.");
        const n = new vr(e, t);
        return this._cuePointTrack.addCue(n.vttCue), n
    }, t.removeCuePoint = function(e) {
        if (!e) throw new pr("InvalidCuePoint", "The specified cue point is not valid.");
        return this._cuePointTrack.removeCue(e.vttCue), !0
    }, t.removeAllCuePoints = function() {
        return this._cuePointTrack && this._cuePointTrack.length && Array.from(this._cuePointTrack.cues).forEach(e => {
            this._cuePointTrack.removeCue(e)
        }), !0
    }, t.requestPictureInPicture = function() {
        try {
            const e = this;
            return function(t, n) {
                var r = function() {
                    if (e._video.readyState < 1) return function(e, t) {
                        return e && e.then ? e.then(Ir) : Promise.resolve()
                    }(e._initPreload())
                }();
                return r && r.then ? r.then(n) : n()
            }(0, (function() {
                switch (e.pictureInPictureSupportType) {
                    case "pip-api":
                        return e._video.requestPictureInPicture();
                    case "webkit-presentation-mode":
                        return e._video.webkitSetPresentationMode("picture-in-picture");
                    default:
                        throw new Error("Picture-in-picture is not supported by this browser")
                }
            }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, t._initPreload = function() {
        return this.preload = "auto", new Promise(e => {
            this.once(Sn.LOADED_METADATA, e)
        })
    }, t.exitPictureInPicture = function() {
        try {
            const e = this;
            switch (e.pictureInPictureSupportType) {
                case "pip-api":
                    return document.exitPictureInPicture();
                case "webkit-presentation-mode":
                    return e._video.webkitSetPresentationMode("inline");
                default:
                    throw new Error("Picture-in-picture is not supported by this browser")
            }
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, t.onerror = function() {
        if (!this._video.error) return !1;
        switch (this._video.error.code) {
            case this._video.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                return this._fireVideoError("MediaSrcNotSupportedError", "The media was not suitable."), this._switchToNextFile(), !1;
            case this._video.error.MEDIA_ERR_DECODE:
                return -1 !== this._lastCurrentTime && Gn.iOS ? (this._video.load(), this.currentTime = this._lastCurrentTime, this._lastCurrentTime = -1, !1) : (this._fireVideoError("MediaDecodeError", "The media could not be decoded."), this._switchToNextFile(), !1);
            case this._video.error.MEDIA_ERR_NETWORK:
                return this._fireVideoError("MediaNetworkError", "A network error ocurred while fetching the media."), !1;
            case this._video.error.MEDIA_ERR_ABORTED:
                return this._fireVideoError("MediaAbortedError", "The user agent aborted the fetching of the media."), !1;
            default:
                return this._fireVideoError("MediaUnknownError", "An unknown error occurred."), !1
        }
    }, t._fireVideoError = function(e, t) {
        this.fire(Sn.ERROR, new pr(e, t))
    }, t.onended = function() {
        if (this._video.paused || this._video.pause(), this.currentTime < this._video.duration) return !1
    }, t.onwaiting = function() {
        return !1
    }, t.onwebkitbeginfullscreen = function() {
        this._inFullscreen = !0
    }, t.onwebkitendfullscreen = function() {
        this._inFullscreen = !1
    }, t.onwebkitpresentationmodechanged = function() {
        this.fire(this.pictureInPictureActive ? Sn.ENTER_PICTURE_IN_PICTURE : Sn.LEAVE_PICTURE_IN_PICTURE)
    }, t.shouldHandleVideoEvent = function(e) {
        return !0
    }, t.handleVideoEvent = function(e) {
        e.target === this._video && !1 !== this.shouldHandleVideoEvent(e) && ("function" == typeof this[`on${e.type}`] && !1 === this[`on${e.type}`](e) || this.fire(e.type))
    }, t.swapVideo = function(e, t) {
        const n = e.paused;
        this.removeVideoEventListeners(e), e.parentElement.replaceChild(t, e), e.pause(), t.currentTime = e.currentTime, n || t.play(), this.addVideoEventListeners(t), this._video = t
    }, t.onexternaldisplayactivated = function(e) {
        this._externalDisplayActivated || (this._video !== e.element && (this._originalVideo = this._video, this.swapVideo(this._video, e.element)), this._externalDisplayActivated = !0)
    }, t.onexternaldisplaydeactivated = function(e) {
        this._externalDisplayActivated && (this._originalVideo && (this.swapVideo(e.element, this._originalVideo), this._originalVideo = null), this._externalDisplayActivated = !1)
    }, t.setVideoSrc = function(e) {
        this._video.src = e
    }, t.canSeekTo = function(e) {
        const t = this.duration;
        if (t && e > t && (e = t), this._video.seekable.length > 0)
            for (let n = 0, r = this._video.seekable.length; n < r; n++)
                if (this._video.seekable.start(n) <= e && this._video.seekable.end(n) >= e) return !0;
        return !1
    }, t.seekToTime = function(e) {
        return this.canSeekTo(e) ? (this._video.currentTime = e, Promise.resolve(this._video.currentTime)) : new Promise((t, n) => {
            const r = () => {
                this.canSeekTo(e) && (Object.keys(Sn).forEach(e => {
                    const t = Sn[e];
                    this._video.removeEventListener(t, r)
                }), this._video.currentTime = e, t(this._video.currentTime))
            };
            Object.keys(Sn).forEach(e => {
                const t = Sn[e];
                this._video.addEventListener(t, r)
            })
        })
    }, t.takeSnapshot = function() {
        let e = this._element.querySelector("[telecine-snapshot]");
        e || (e = document.createElement("canvas"), e.setAttribute("telecine-snapshot", ""), this._element.appendChild(e)), e.setAttribute("width", `${this._element.clientWidth}px`), e.setAttribute("height", `${this._element.clientHeight}px`), e.style.display = "";
        const {
            width: t,
            height: n,
            left: r,
            top: i
        } = cr(this._video.clientWidth, this._video.clientHeight, this._video.videoWidth, this._video.videoHeight);
        e.style.cssText = `position:absolute;width:${t}px;height:${n}px;left:${r}px;top:${i}px`;
        const s = e.getContext("2d");
        e.width > 0 && e.height > 0 && s.drawImage(this._video, 0, 0, e.width, e.height)
    }, t.removeSnapshot = function() {
        const e = this._element.querySelector("[telecine-snapshot]");
        e && (e.style.display = "none")
    }, t.getTrackById = function(e) {
        if (this._textTracks && this._textTracks[e]) return this._textTracks[e];
        if ("function" == typeof this._video.textTracks.getTrackById) return this._video.textTracks.getTrackById(e);
        const t = document.getElementById(e);
        return t ? t.track : null
    }, t.initDrm = function() {
        const e = this._telecineVideo.drmHandler;
        e && e.init(this)
    }, t.showExternalDisplayPicker = function(e) {
        if (!this._externalDisplays.length) throw new pr("ExternalDisplayUnvailable", "No external displays are available.");
        if (!e) return void this._externalDisplays[0].showPicker();
        const t = this._externalDisplays.filter(t => t.constructor.displayName.replace("ExternalDisplay", "") === e)[0];
        if (!t) throw new pr("InvalidExternalDisplay", "The specified external display is not available.");
        t.showPicker()
    }, t._pickFile = function() {
        return this._files.length < 1 ? null : this._files.slice(0).sort((e, t) => e.priority - t.priority)[0]
    }, t._updateCurrentFile = function() {
        const e = this._pickFile();
        e ? this.currentFile = e : this.fire(An.SCANNER_ERROR, {
            reason: "all files failed"
        })
    }, t._isValidChapter = function(e, t) {
        return void 0 !== e.timecode && e.timecode >= 0 && e.timecode <= t && void 0 !== e.title
    }, t._switchToNextFile = function() {
        const e = this._files.indexOf(this._currentFile);
        this._files.splice(e, 1), this._updateCurrentFile()
    }, t._initMediaSessionMetadata = function() {
        if (!("mediaSession" in navigator)) return;
        const e = {
            title: this._telecineVideo.title,
            artist: this._telecineVideo.subtitle,
            artwork: []
        };
        this._telecineVideo.metadata.thumbnail && e.artwork.push({
            src: this._telecineVideo.metadata.thumbnail
        }), navigator.mediaSession.metadata = new MediaMetadata(e)
    }, t._initMediaSessionHandlers = function() {
        var e;
        "function" == typeof(null == (e = navigator.mediaSession) ? void 0 : e.setActionHandler) && (navigator.mediaSession.setActionHandler("play", () => {
            this.play().then(() => this.fire(Rn.MEDIASESSION_PLAY)).catch(this._onPlayError.bind(this))
        }), navigator.mediaSession.setActionHandler("pause", () => {
            this.pause(), this.fire(Rn.MEDIASESSION_PAUSE)
        }), navigator.mediaSession.setActionHandler("seekforward", () => {
            this.currentTime = Math.min(this.duration, this.currentTime + 10), this.fire(Rn.MEDIASESSION_SEEK_FORWARD)
        }), navigator.mediaSession.setActionHandler("seekbackward", () => {
            this.currentTime = Math.max(0, this.currentTime - 10), this.fire(Rn.MEDIASESSION_SEEK_BACKWARD)
        }))
    }, on(e, [{
        key: "chaptersTrack",
        get: function() {
            return this._chaptersTrack
        }
    }, {
        key: "manifest",
        get: function() {
            return this._manifest
        }
    }, {
        key: "buffered",
        get: function() {
            return Er.from(this._video.buffered)
        }
    }, {
        key: "cuePoints",
        get: function() {
            return this._cuePointTrack ? Array.from(this._cuePointTrack.cues).map(e => vr.fromVTTCue(e)) : []
        }
    }, {
        key: "currentFile",
        get: function() {
            return this._currentFile
        },
        set: function(t) {
            const n = !this._video.paused,
                r = this.currentTime,
                i = !this._currentFile || t.video.id !== this._currentFile.video.id;
            if (i || this.takeSnapshot(), this._currentFile = t, i && (this._video.preload = this._preload), this.constructor === e && this._video.readyState > 0 && (this._video.currentTime = 0), (Gn.iOS || Gn.android) && this._currentFile.video.title) {
                let e = this._currentFile.video.title;
                this._currentFile.video.subtitle && (e = `${e} ${this._currentFile.video.subtitle}`), this._video.setAttribute("title", e)
            } else this._video.removeAttribute("title");
            this.setVideoSrc(this._currentFile.src, i), this.fire(An.CURRENT_FILE_CHANGE, t), Gn.iOS && !i && this.play().catch(this._onPlayError.bind(this)), this.constructor !== e || i ? n && this.play().catch(this._onPlayError.bind(this)) : (this.seekToTime(r).then(e => (n && this.play().catch(this._onPlayError.bind(this)), e)).catch(() => {}), this.once("canplay", () => this.removeSnapshot()), this.once("playing", () => this.removeSnapshot()))
        }
    }, {
        key: "currentTime",
        get: function() {
            return this._video.currentTime
        },
        set: function(e) {
            this.seekToTime(e)
        }
    }, {
        key: "duration",
        get: function() {
            return this._video.duration
        }
    }, {
        key: "ended",
        get: function() {
            return this._video.ended
        }
    }, {
        key: "externalDisplayAvailable",
        get: function() {
            return this._externalDisplays.some(e => e.available)
        }
    }, {
        key: "externalDisplayActive",
        get: function() {
            return this._externalDisplays.some(e => e.active)
        }
    }, {
        key: "loop",
        get: function() {
            return this._video.loop
        },
        set: function(e) {
            this._video.loop = e
        }
    }, {
        key: "isLowerProfileAvailable",
        get: function() {
            return null
        }
    }, {
        key: "muted",
        get: function() {
            return this._video.muted
        },
        set: function(e) {
            this._video.muted = e
        }
    }, {
        key: "playsinline",
        get: function() {
            return this._video.playsinline
        },
        set: function(e) {
            this._video.playsinline = e, e ? this._video.setAttribute("playsinline", "") : this._video.removeAttribute("playsinline")
        }
    }, {
        key: "paused",
        get: function() {
            return this._video.paused
        }
    }, {
        key: "defaultPlaybackRate",
        get: function() {
            return this._video.defaultPlaybackRate
        },
        set: function(e) {
            this._video.defaultPlaybackRate = e
        }
    }, {
        key: "playbackRate",
        get: function() {
            return this._video.playbackRate
        },
        set: function(e) {
            this._video.playbackRate = e
        }
    }, {
        key: "played",
        get: function() {
            return this._video.played
        }
    }, {
        key: "seekable",
        get: function() {
            return this._video.seekable
        }
    }, {
        key: "seeking",
        get: function() {
            return this._video.seeking
        }
    }, {
        key: "preload",
        get: function() {
            return this._preload
        },
        set: function(e) {
            this._video.preload = e, this._preload = e
        }
    }, {
        key: "autoPictureInPicture",
        get: function() {
            return this._video.autoPictureInPicture
        },
        set: function(e) {
            this._video.autoPictureInPicture = e
        }
    }, {
        key: "disablePictureInPicture",
        get: function() {
            return this._video.disablePictureInPicture
        },
        set: function(e) {
            this._video.disablePictureInPicture = e
        }
    }, {
        key: "pictureInPictureActive",
        get: function() {
            return "picture-in-picture" === this._video.webkitPresentationMode || !!document.pictureInPictureElement
        }
    }, {
        key: "pictureInPictureEnabled",
        get: function() {
            if (this.disablePictureInPicture) return !1;
            switch (this.pictureInPictureSupportType) {
                case "pip-api":
                    return document.pictureInPictureEnabled;
                case "webkit-presentation-mode":
                    return !0;
                default:
                    return !1
            }
        }
    }, {
        key: "pictureInPictureSupportType",
        get: function() {
            return "pictureInPictureEnabled" in document ? "pip-api" : !("function" != typeof this._video.webkitSetPresentationMode || !this._video.webkitSupportsPresentationMode("picture-in-picture")) && "webkit-presentation-mode"
        }
    }, {
        key: "video",
        get: function() {
            return this._telecineVideo
        },
        set: function(e) {
            if (this.reactivate(), this._telecineVideo !== e) {
                if (this._telecineVideo && (this._telecineVideo.off("filesrcupdate"), this._telecineVideo.off("texttracksrcupdate")), this.removeAllCuePoints(), this._telecineVideo = e, this._files = e.files.filter(e => -1 !== this.constructor.supportedVideoTypes.indexOf(e.mime)), this._telecineVideo.on("filesrcupdate", e => {
                        e === this._currentFile && this._updateCurrentFile()
                    }), this._telecineVideo.on("texttracksrcupdate", e => {
                        this.video.currentScanner && this.video.currentScanner.setSrcForTrack(e, e.src)
                    }), this._options.externalDisplays && this._options.externalDisplays.length) {
                    this._externalDisplays = [];
                    let t = this.constructor.supportedExternalDisplays;
                    Array.isArray(t) || (t = []);
                    const n = t.map(e => e.displayName);
                    this._options.externalDisplays.filter(e => e.supported && -1 !== n.indexOf(e.displayName)).forEach(t => {
                        const n = new t(e),
                            r = t.displayName.replace("ExternalDisplay", "");
                        n.on(Sn.LOADED_METADATA, e => this.fire(Sn.LOADED_METADATA, e)), n.on("available", () => this.fire(Tn.AVAILABLE, {
                            type: r
                        })), n.on("unavailable", () => this.fire(Tn.UNAVAILABLE, {
                            type: r
                        })), n.on("activated", () => {
                            "function" == typeof this.onexternaldisplayactivated && this.onexternaldisplayactivated(n), this.fire(Tn.ACTIVATED, {
                                type: r
                            })
                        }), n.on("deactivated", () => {
                            "function" == typeof this.onexternaldisplaydeactivated && this.onexternaldisplaydeactivated(n), this.fire(Tn.DEACTIVATED, {
                                type: r
                            })
                        }), this._externalDisplays.push(n)
                    })
                }
                this._updateCurrentFile(), Gn.iOS && this._externalDisplays.forEach(e => {
                    "AirPlay" === e.constructor.displayName && (e.element = this._video)
                }), this.initDrm()
            }
        }
    }, {
        key: "videoElement",
        get: function() {
            return this._video
        }
    }, {
        key: "videoWidth",
        get: function() {
            return this._video.videoWidth
        }
    }, {
        key: "videoHeight",
        get: function() {
            return this._video.videoHeight
        }
    }, {
        key: "volume",
        get: function() {
            return bt(this._video.volume)
        },
        set: function(e) {
            this._video.volume = Tt(e)
        }
    }, {
        key: "readyState",
        get: function() {
            return this._video.readyState
        }
    }]), e
}();
const Cr = {
        MANIFEST: "manifest",
        SEGMENT: "segment"
    },
    Lr = {
        method: "GET",
        async: !0,
        retry: 0,
        throwHttpErrors: !0,
        headers: {},
        hooks: {
            beforeRequest: [],
            beforeRetry: [],
            afterResponse: []
        },
        validateStatus: function(e) {
            return e >= 200 && e < 300
        },
        retryStatus: function(e) {
            return [408, 413, 429].includes(e) || e >= 500 && e < 600
        }
    };

function Nr(e, t) {
    this.headers = {}, this.perfTimings = {}, At(this, t), this.ok = 2 == (this.status / 100 | 0), this.body = e, this.text = () => Promise.resolve(e), this.json = () => Promise.resolve(JSON.parse(e)), this.blob = () => Promise.resolve(new Blob([e])), this.arrayBuffer = () => Promise.resolve(e), this.clone = () => new Nr(e, this), this.isVimeoResponse = !0
}
let Mr = function(e) {
        function t() {
            var t;
            return (t = e.call(this, "The operation was aborted.") || this).name = "AbortError", t
        }
        return ln(t, e), t
    }(pn(Error)),
    xr = function(e) {
        function t(t) {
            var n;
            return (n = e.call(this, t.statusText) || this).name = "HTTPError", n.response = t, n
        }
        return ln(t, e), t
    }(pn(Error)),
    Fr = function(e) {
        function t() {
            var t;
            return (t = e.call(this, "A network error occurred.") || this).name = "NetworkError", t
        }
        return ln(t, e), t
    }(pn(Error)),
    Ur = function(e) {
        function t(t) {
            var n;
            return (n = e.call(this, "Request timed out.") || this).name = "TimeoutError", n.timeoutMs = t, n
        }
        return ln(t, e), t
    }(pn(Error));

function Br() {}

function jr(e, t, n) {
    if (!e.s) {
        if (n instanceof Vr) {
            if (!n.s) return void(n.o = jr.bind(null, e, t));
            1 & t && (t = n.s), n = n.v
        }
        if (n && n.then) return void n.then(jr.bind(null, e, t), jr.bind(null, e, 2));
        e.s = t, e.v = n;
        const r = e.o;
        r && r(e)
    }
}
const Vr = function() {
    function e() {}
    return e.prototype.then = function(t, n) {
        const r = new e,
            i = this.s;
        if (i) {
            const e = 1 & i ? t : n;
            if (e) {
                try {
                    jr(r, 1, e(this.v))
                } catch (rl) {
                    jr(r, 2, rl)
                }
                return r
            }
            return this
        }
        return this.o = function(e) {
            try {
                const i = e.v;
                1 & e.s ? jr(r, 1, t ? t(i) : i) : n ? jr(r, 1, n(i)) : jr(r, 2, i)
            } catch (rl) {
                jr(r, 2, rl)
            }
        }, r
    }, e
}();

function Hr(e) {
    return e instanceof Vr && 1 & e.s
}

function Xr(e) {
    const t = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (rl) {
                return Promise.reject(rl)
            }
        }
    }((function(r) {
        return function(e, t) {
            try {
                var n = e()
            } catch (rl) {
                return t(rl)
            }
            return n && n.then ? n.then(void 0, t) : n
        }(r, (function(i) {
            let s = !1;
            n++;
            const o = function(t) {
                if (!e.retryAbortErrors && t instanceof Mr) return 0;
                if (t instanceof Ur) return 0;
                if (n >= e.retry) return 0;
                if (t instanceof xr) {
                    if (!e.retryStatus(t.response.status)) return 0;
                    const n = t.response.headers["retry-after"];
                    if (n && e.retryStatus(t.response.status)) {
                        let e = Number(n);
                        return isNaN(e) ? e = Date.parse(n) - Date.now() : e *= 1e3, e
                    }
                    if (413 === t.response.status) return 0
                }
                return .3 * 2 ** (n - 1) * 1e3
            }(i);
            return function(a, u) {
                var c = function() {
                    if (0 !== o && n > 0) return function(e, t, n) {
                        return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                    }(Et(o), (function() {
                        const o = e.hooks.beforeRetry || [];
                        return function(e, t) {
                            return e && e.then ? e.then(t) : t()
                        }(function(e, t, n) {
                            var r, i, s = -1;
                            return function n(o) {
                                try {
                                    for (; ++s < e.length;)
                                        if ((o = t(s)) && o.then) {
                                            if (!Hr(o)) return void o.then(n, i || (i = jr.bind(null, r = new Vr, 2)));
                                            o = o.v
                                        }
                                    r ? jr(r, 1, o) : r = o
                                } catch (rl) {
                                    jr(r || (r = new Vr), 2, rl)
                                }
                            }(), r
                        }(o, (function(t) {
                            return function(e, t) {
                                return e && e.then ? e.then(Br) : Promise.resolve()
                            }((0, o[t])(e, i, n))
                        })), (function() {
                            return s = !0, t(r)
                        }))
                    }))
                }();
                return c && c.then ? c.then(u) : u(c)
            }(0, (function(t) {
                if (s) return t;
                if (e.throwHttpErrors) throw i
            }))
        }))
    }));
    let n = 0;
    return t
}

function qr(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Gr(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }
}

function Wr(e, t, n) {
    if (!e.s) {
        if (n instanceof Kr) {
            if (!n.s) return void(n.o = Wr.bind(null, e, t));
            1 & t && (t = n.s), n = n.v
        }
        if (n && n.then) return void n.then(Wr.bind(null, e, t), Wr.bind(null, e, 2));
        e.s = t, e.v = n;
        const r = e.o;
        r && r(e)
    }
}
const Kr = function() {
    function e() {}
    return e.prototype.then = function(t, n) {
        const r = new e,
            i = this.s;
        if (i) {
            const e = 1 & i ? t : n;
            if (e) {
                try {
                    Wr(r, 1, e(this.v))
                } catch (rl) {
                    Wr(r, 2, rl)
                }
                return r
            }
            return this
        }
        return this.o = function(e) {
            try {
                const i = e.v;
                1 & e.s ? Wr(r, 1, t ? t(i) : i) : n ? Wr(r, 1, n(i)) : Wr(r, 2, i)
            } catch (rl) {
                Wr(r, 2, rl)
            }
        }, r
    }, e
}();

function Yr(e) {
    return e instanceof Kr && 1 & e.s
}

function $r(e, t, n) {
    var r, i, s = -1;
    return function o(a) {
        try {
            for (; ++s < e.length && (!n || !n());)
                if ((a = t(s)) && a.then) {
                    if (!Yr(a)) return void a.then(o, i || (i = Wr.bind(null, r = new Kr, 2)));
                    a = a.v
                }
            r ? Wr(r, 1, a) : r = a
        } catch (rl) {
            Wr(r || (r = new Kr), 2, rl)
        }
    }(), r
}

function zr(e, t) {
    return e && e.then ? e.then(t) : t(e)
}
const Qr = ["get", "post", "put", "patch", "head", "delete"],
    Jr = {
        json: "application/json",
        text: "text/plain",
        arrayBuffer: "*/*",
        blob: "*/*"
    },
    Zr = ["get"];

function ei(e, t) {
    const n = Gr((function() {
        let e = !1,
            n = !1;
        const r = t.hooks.beforeRequest || [];
        return zr($r(r, (function(i) {
            return qr((0, r[i])(t), (function(r) {
                return r instanceof ti ? (t = r, void(n = !0)) : (null == r ? void 0 : r.isVimeoResponse) ? (e = !0, Promise.resolve(r).then(ni(t))) : void 0
            }))
        }), (function() {
            return n || e
        })), (function(n) {
            return e ? n : function(e, t) {
                let {
                    url: n,
                    method: r,
                    body: i,
                    onDownloadProgress: s
                } = e, o = 100;
                return new Promise((function(a, u) {
                    const c = t ? new t : new XMLHttpRequest,
                        l = window.performance;
                    c.open(r.toUpperCase(), n, e.async), e.timeout && (c.timeout = e.timeout), c.onload = function() {
                        if (0 === c.status && (!c.responseURL || 0 !== c.responseURL.indexOf("file:"))) return;
                        const e = {};
                        c.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (t, n, r) => {
                            e[n] = e[n] ? `${e[n]},${r}` : r
                        });
                        let t = {};
                        if (window.performance && void 0 !== window.performance.getEntriesByType) {
                            const e = window.performance.getEntriesByType("resource");
                            if (e.length && e.length >= o && ("function" == typeof l.clearResourceTimings && l.clearResourceTimings(), "function" == typeof l.setResourceTimingBufferSize && (l.setResourceTimingBufferSize(500), o = 500)), e.length) {
                                const n = e.filter(e => e.name === c.responseURL).sort((e, t) => e.connectStart - t.connectStart);
                                n.length && (t = n[n.length - 1].toJSON())
                            }
                        }
                        a(new Nr(c.response, {
                            headers: e,
                            statusText: c.statusText,
                            status: c.status,
                            url: c.responseURL,
                            perfTimings: t
                        }))
                    }, c.onabort = function() {
                        u(new Mr)
                    }, c.onerror = function() {
                        u(new Fr)
                    }, c.ontimeout = function() {
                        u(new Ur(e.timeout))
                    }, "function" == typeof s && c.addEventListener("progress", s);
                    for (let t in e.headers) c.setRequestHeader(t, e.headers[t]);
                    e.withCredentials && (c.withCredentials = !0), e.responseType && (c.responseType = e.responseType), e.abort = c.abort.bind(c), c.send(i || null)
                }))
            }(t).then(ni(t))
        }))
    }));
    t = new ti(e, t);
    const {
        method: r,
        json: i,
        jwt: s,
        searchParams: o
    } = t;
    if (i && (t.headers["Content-Type"] = Jr.json, t.body = JSON.stringify(i)), s && (t.headers.Authorization = `jwt ${s}`), o) {
        const [e, n] = t.url.split("?");
        t.url = Lt(e, cn(cn({}, Ot(n)), o))
    }
    const a = -1 !== Zr.indexOf(r.toLowerCase()) ? Xr(t)(n) : n();
    for (const u in Jr) a[u] = Gr((function() {
        return t.headers["Content-Type"] = Jr[u], qr(a, (function(e) {
            return e.clone()[u]()
        }))
    }));
    return function e(t, n) {
        const r = t.then.bind(t);
        return Object.assign(t, {
            abort: n,
            then: (...t) => e(r.apply(void 0, t), n)
        })
    }(a, () => t.abort())
}

function ti(e, t) {
    At(this, Lr, e = "string" == typeof e ? {
        url: e
    } : e, t)
}

function ni(e) {
    const {
        validateStatus: t,
        throwHttpErrors: n,
        hooks: r
    } = e;
    return Gr((function(i) {
        const s = r.afterResponse || [];
        return zr($r(s, (function(t) {
            return qr((0, s[t])(e, i.clone()), (function(e) {
                e instanceof Nr && (i = e)
            }))
        })), (function() {
            if (!t || t(i.status)) return i;
            if (n) throw new xr(i);
            return i
        }))
    }))
}
Qr.forEach((function(e) {
    return ei[e] = (t, n) => ei(t, cn({
        method: e
    }, n)), ei[e]
}));
const {
    get: ri,
    post: ii,
    put: si,
    patch: oi,
    head: ai
} = ei, ui = {
    ARRAY_BUFFER: "arraybuffer"
};
var ci = Object.freeze({
    __proto__: null,
    ContentTypes: Cr,
    defaults: Lr,
    requestMethods: Qr,
    responseTypes: Jr,
    retryMethods: Zr,
    request: ei,
    Request: ti,
    get: ri,
    post: ii,
    put: si,
    patch: oi,
    head: ai,
    Response: Nr,
    ResponseTypes: ui,
    AbortError: Mr,
    HTTPError: xr,
    NetworkError: Fr,
    TimeoutError: Ur
});

function li(e, t = []) {
    if (0 === e.length) return 0;
    let n = 0,
        r = 0;
    for (let i = 0; i < e.length; i++) {
        const s = t[i] || 1;
        r += s, n += e[i] * s
    }
    return n / r
}

function hi(e) {
    e.sort((e, t) => e - t);
    const t = Math.floor(e.length / 2);
    return e.length % 2 ? e[t] : (e[t - 1] + e[t]) / 2
}

function di() {
    return "undefined" != typeof performance ? performance.now() : Date.now()
}
let fi = function(e) {
    function t() {
        return e.apply(this, arguments) || this
    }
    return ln(t, e), t
}(pn(Error));

function _i() {}
const pi = [],
    mi = [],
    vi = [];

function gi(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const yi = [];
let Ei = function() {
        function e(e = {}) {
            const {
                retryCount: t = 3,
                parallel: n = 1,
                includeWithSpeeds: r = !0,
                timeout: i = 0,
                retryAbortErrors: s = !0
            } = e;
            this._queue = [], this._activeRequests = new Set, this._retries = new WeakMap, this._retryCount = t, this._running = !1, this._processingQueue = !1, this._parallel = n, this._includeWithSpeeds = r, this._timeout = i, this._retryAbortErrors = s, this._initialize()
        }
        e.getPercentileSpeed = function(e = 5, t = .8) {
            return function(e, t) {
                if (e.sort(), 0 === e.length) return 0;
                if (t <= 0) return e[0];
                if (t >= 1) return e[e.length - 1];
                const n = e.length * t,
                    r = Math.floor(n),
                    i = r + 1,
                    s = n % 1;
                return i >= e.length ? e[r] : e[r] * (1 - s) + e[i] * s
            }(pi.slice(-e), t)
        }, e.getAverageSpeed = function(e = 5, t = []) {
            return li(pi.slice(-e), t)
        }, e.getHarmonicAverageSpeed = function(e = 5) {
            return function(e) {
                if (0 === e.length) return 0;
                let t = 0;
                for (let n = 0; n < e.length; n++) t += 1 / e[n];
                return e.length / t
            }(pi.slice(-e))
        }, e.getVolatilityScaler = function(e = 5) {
            const t = pi.slice(-e);
            if (t.length < 3) return null;
            const n = li(t, []);
            return Math.min.apply(Math, gn(t)) / n
        }, e.getMedianSpeed = function(e = 5) {
            return hi(pi.slice(-e))
        }, e.getResponseSpeeds = function() {
            return pi
        }, e.getProgressSpeeds = function() {
            return yi
        }, e.getFailedSegments = function() {
            return mi
        }, e.getSuccessfulSegments = function() {
            return vi
        };
        var t = e.prototype;
        return t.add = function(e, t) {
            return new Promise((n, r) => {
                const i = this._createSegmentInfo(e, n, r);
                this._addSegmentToQueue(i, t), this._running && !this._processingQueue && this._processQueue()
            })
        }, t.start = function() {
            this._running || (this._running = !0, this._processQueue())
        }, t.stop = function() {
            this._running = !1
        }, t.abort = function(e = null) {
            this._queue.filter(t => !e || e === t.stream).forEach(e => {
                e.reject(new fi("Stream manually aborted")), this.fire("downloadabort", e.identifier)
            }), this._queue = this._queue.filter(t => e && e !== t.stream), this._activeRequests.forEach(t => {
                e && e !== t.stream || t.request.abort()
            })
        }, t._insertAtPosition = function(e) {
            let t = 0;
            for (; t < this._queue.length && !(this._queue[t].priority > e.priority); t++);
            this._queue.splice(t, 0, e)
        }, t._initialize = function() {
            this._pendingFetchMap = new WeakMap, ft(this), window.addEventListener("online", () => {
                this.start(), this._waitUntilOnline && (this._waitUntilOnline.resolve(), this._waitUntilOnline = null)
            }), window.addEventListener("offline", () => {
                this.stop(), this.abort(), this._waitUntilOnline = new It
            })
        }, t._addSegmentToQueue = function(e, t) {
            e.hasOwnProperty("priority") ? this._insertAtPosition(e) : this._queue[t ? "unshift" : "push"](e)
        }, t._processQueue = function() {
            if (!this._running) return;
            this._processingQueue = !0;
            const e = this._parallel - this._activeRequests.size;
            for (let t = 0; t < e; t++) this._fetchOne()
        }, t._createSegmentInfo = function(e, t, n) {
            let r = e;
            return e.id && (r = e.id), cn(cn({}, e), {}, {
                identifier: r,
                resolve: t,
                reject: n
            })
        }, t._continueProcessingQueue = function() {
            0 !== this._activeRequests.size || 0 !== this._queue.length ? this._activeRequests.size < this._parallel && this._processQueue() : this._processingQueue = !1
        }, t._fetchOne = function() {
            if (0 === this._queue.length) return void(this._processingQueue = !1);
            const e = this._queue.shift(),
                {
                    url: t,
                    byteRange: n,
                    isInitSegmentRequest: r,
                    identifier: i,
                    timeout: s
                } = e,
                o = {
                    stream: e.stream,
                    data: {
                        url: t,
                        isInitSegmentRequest: r,
                        requestSendTime: di(),
                        uuid: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e => (e ^ 16 * Math.random() >> e / 4).toString(16))
                    }
                };
            let a = this._timeout;
            const u = parseInt(s, 10);
            u >= 0 && (a = u);
            const c = {
                url: t,
                type: Cr.SEGMENT,
                responseType: ui.ARRAY_BUFFER,
                retry: this._retryCount,
                hooks: {
                    beforeRetry: [this._beforeRetry.bind(this)]
                },
                onDownloadProgress: this._makeOnDownloadProgress(i, o),
                headers: n && {
                    Range: `bytes=${n}`
                },
                retryAbortErrors: this._retryAbortErrors,
                timeout: a
            };
            this.fire("downloadstart", i), o.request = ei(c).then(this._makeOnRequestLoad(o, e)).catch(this._makeOnRequestError(o, e)), this._activeRequests.add(o)
        }, t._beforeRetry = function() {
            try {
                const e = this;
                return function(t) {
                    var n = function() {
                        if (e._waitUntilOnline) return function(e, t) {
                            return e && e.then ? e.then(_i) : Promise.resolve()
                        }(e._waitUntilOnline)
                    }();
                    if (n && n.then) return n.then(_i)
                }()
            } catch (rl) {
                return Promise.reject(rl)
            }
        }, t._makeOnDownloadProgress = function(e, t) {
            let n = 0,
                r = 0,
                i = di();
            return s => {
                if (s.lengthComputable) {
                    const o = 8 * (s.loaded - r),
                        a = di(),
                        u = a - i,
                        c = {
                            startTime: i,
                            length: u,
                            bitrate: o / (u / 1e3),
                            index: n
                        };
                    n > 0 && (yi.length >= 100 && yi.shift(), yi.push(c)), i = a, r = s.loaded, n += 1, this._pendingFetchMap.set(t, {
                        bytesTotal: s.total,
                        bytesLoaded: s.loaded,
                        percent: s.loaded / s.total,
                        identifier: e
                    }), this.fire("progress", e)
                }
            }
        }, t._makeOnRequestLoad = function(e, t) {
            const n = this,
                r = di(),
                {
                    identifier: i,
                    resolve: s
                } = t;
            return function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (rl) {
                        return Promise.reject(rl)
                    }
                }
            }((function(o) {
                let a = di() - r;
                return gi(o.arrayBuffer(), (function(r) {
                    return e.data.duration = di() - e.data.requestSendTime, n._activeRequests.delete(e), n._pendingFetchMap.delete(e), n._saveResponseSpeeds(t, a, r.byteLength), n.fire("downloadend", i, {
                        request: e,
                        response: o
                    }), vi.push({
                        url: e.data.url,
                        status: 200,
                        duration: e.data.duration
                    }), gi(n._processBuffer(e, r), (function(e) {
                        s(r = e), n._continueProcessingQueue()
                    }))
                }))
            }))
        }, t._saveResponseSpeeds = function(e, t, n) {
            const r = e.includeWithBandwidthChecks,
                i = t / 1e3;
            if (n > 8e3) {
                const t = 8 * n;
                let s = t / i;
                if (e.excludeConnectTime && t <= 16e5) {
                    const e = (50 * Math.max(0, 1 - t / 16e5) + 150) / 1e3;
                    s = t / Math.max(.1, i - e)
                }
                pi.length > 100 && pi.shift(), this._includeWithSpeeds && r && pi.push(s)
            }
        }, t._processBuffer = function(e, t) {
            return e.data.url && e.data.url.match(".ts$") ? this._feedMuxer(e, t) : Promise.resolve(new Uint8Array(t))
        }, t._feedMuxer = function(e, t) {
            try {
                const n = this;
                return function(e, t) {
                    var r = function() {
                        if (!n._transmuxer) return gi(n._loadMux(), (function(e) {
                            n._transmuxer = new e({
                                keepOriginalTimestamps: !0
                            })
                        }))
                    }();
                    return r && r.then ? r.then(t) : t()
                }(0, (function() {
                    return new Promise(r => {
                        n._transmuxer.on("data", t => {
                            n._transmuxer.off("data");
                            let i = new Uint8Array(t.initSegment.byteLength + t.data.byteLength);
                            i.set(t.initSegment, 0), i.set(t.data, t.initSegment.byteLength), r(e.data.isInitSegmentRequest ? t.initSegment : i)
                        }), n._transmuxer.push(new Uint8Array(t)), n._transmuxer.flush()
                    })
                }))
            } catch (rl) {
                return Promise.reject(rl)
            }
        }, t._makeOnRequestError = function(e, t) {
            const {
                identifier: n,
                reject: r,
                size: i
            } = t;
            return t => {
                const s = di() - e.data.requestSendTime;
                if (e.data.duration = s, t instanceof Mr) mi.push({
                    url: e.data.url,
                    status: "abort",
                    duration: s
                }), this.fire("downloadabort", n);
                else if (t instanceof xr) mi.push({
                    url: e.data.url,
                    status: t.response.status,
                    duration: s
                }), this.fire("downloaderror", n, t.response.status);
                else if (t instanceof Ur) {
                    if (mi.push({
                            url: e.data.url,
                            status: "timeout",
                            duration: s
                        }), i > 0 && t.timeoutMs > 0) {
                        let e = 8 * i / (t.timeoutMs / 1e3);
                        e *= .5, pi.push(e)
                    }
                    this.fire("downloadtimeout", n, {
                        timeoutMs: t.timeoutMs
                    })
                }
                this._pendingFetchMap.delete(e), this._activeRequests.delete(e), r(t), this._continueProcessingQueue()
            }
        }, t._loadMux = function() {
            return import ("./mux-mp4.module.js").then(({
                default: e
            }) => e)
        }, on(e, [{
            key: "parallel",
            get: function() {
                return this._parallel
            },
            set: function(e) {
                this._parallel = e
            }
        }, {
            key: "pendingFetches",
            get: function() {
                const e = [];
                return this._activeRequests.forEach(t => {
                    if (this._pendingFetchMap.get(t)) {
                        const n = this._pendingFetchMap.get(t);
                        n.elapsedTime = di() - t.data.requestSendTime, e.push(n)
                    }
                }), e
            }
        }]), e
    }(),
    Si = function() {
        function e(e) {
            ft(this), this._sorcerer = e, this._sourceBuffer = null, this._activeStreamIndex = null, this._needsStreamSwitch = !1, this._needInitSegment = !0, this._lastAppended = null, this._toRemove = [], this._streams = [], this._quotaExceeded = !1, this._quotaExceededTimer = null, this._appendingFinalSegment = !1, this._finalSegmentTime = void 0, this._addingInitSegment = !1, this._isFirstSegment = !0, this._bufferState = {}, this._boundHandleUpdateEnd = this._handleUpdateEnd.bind(this), this._sorcerer.on("durationset", this._onDurationSet.bind(this))
        }
        var t = e.prototype;
        return t.addStream = function(e) {
            e.on("segmentadd", () => this._process());
            const t = this._streams.push(e) - 1;
            e.index = t, null === this._activeStreamIndex && (this._setActiveIndex(t), this._needsStreamSwitch = !0)
        }, t.streamIndexAtTime = function(e) {
            return this._bufferState[void 0] ? {
                stream: this.activeStreamIndex
            } : this._bufferState[Math.floor(e / 6)]
        }, t.switchTo = function(e, t = !0, n = {}) {
            let r = e;
            "object" == typeof e && (r = e.index);
            let i = this._activeStreamIndex !== r;
            const s = i;
            if (!i && this._needsStreamSwitch && (i = !0), i) {
                this._needsStreamSwitch = !1;
                const e = this._activeStreamIndex,
                    n = this._streams[e];
                this.fire("streamchangestart", e, r), n && s && t && n.abort(), this._switchToIndex = r, this._setActiveIndex(r)
            }
            return this._process(), new Promise(e => {
                i ? this._resolveSwitchComplete = () => {
                    this._switchToIndex === r && (this._resolveSwitchComplete = null, e(), this.fire("streamchange", r, n))
                } : e()
            })
        }, t.isTimeInBuffer = function(e) {
            for (let t = 0; t < this._sourceBuffer.buffered.length; t++) {
                const n = this._sourceBuffer.buffered.start(t),
                    r = this._sourceBuffer.buffered.end(t);
                if (n <= e && r >= e) return !0
            }
            return !1
        }, t.hasAppendedFinalSegment = function() {
            return void 0 !== this._finalSegmentTime && this.isTimeInBuffer(this._finalSegmentTime)
        }, t.clear = function() {
            this._streams.forEach(e => e.clear())
        }, t.remove = function(e, t = this._sorcerer._mediaSource.duration) {
            return new Promise((n, r) => {
                this._toRemove.push([e, t, n]), this._process()
            })
        }, t.removeEventListeners = function() {
            this._sourceBuffer && this._sourceBuffer.removeEventListener("updateend", this._boundHandleUpdateEnd)
        }, t._onDurationSet = function() {
            const e = this._sorcerer._mediaSource.duration;
            let t = Math.floor(e / 6);
            t += 6 % e > 1 ? 1 : 0;
            for (let n = 0; n < t; n++) this._bufferState[n] = {
                stream: null,
                segment: n,
                type: "video"
            }
        }, t._attachEvents = function() {
            this._sourceBuffer.addEventListener("updateend", this._boundHandleUpdateEnd)
        }, t._setActiveIndex = function(e) {
            this._needInitSegment = !0, this._activeStreamIndex = e, this._sorcerer._frameDropper.streamIndex = e
        }, t._handleUpdateEnd = function() {
            this._checkEndOfStream(), this._updateBufferEnd(), this._process()
        }, t._checkEndOfStream = function() {
            if (this._appendingFinalSegment && this.endTime) return this._appendingFinalSegment = !1, this._finalSegmentTime = this.endTime, void this._sorcerer.checkEndOfStream();
            !this.activeStream.hasNextSegment() && this._finalSegmentTime > 0 && "open" === this._sorcerer._mediaSource.readyState && this._sorcerer.checkEndOfStream()
        }, t._updateBufferEnd = function() {
            this._lastAppended && (this.fire("appendbufferend", this._lastAppended), this._lastAppended = null, this._resolveSwitchComplete && this._resolveSwitchComplete())
        }, t._process = function() {
            if (this._sourceBuffer) {
                if (this.activeStream && "closed" !== this._sorcerer._mediaSource.readyState && !this._sourceBuffer.updating)
                    if (this._toRemove.length) this._removeBuffer();
                    else if (!this._quotaExceeded && !this._addingInitSegment) return this._needInitSegment ? (this._needInitSegment = !1, void this._appendInitSegment()) : void this._appendSegment()
            } else this.on("sourcebufferattach", this._process)
        }, t._removeBuffer = function() {
            const [e, t, n] = this._toRemove.shift(), r = e => {
                this._sourceBuffer.removeEventListener("updateend", r), n(), clearTimeout(this._quotaExceededTimer), this._quotaExceededTimer = setTimeout(() => {
                    this._quotaExceeded = !1, this._process()
                }, 5e3)
            };
            this._sourceBuffer.addEventListener("updateend", r), this._sourceBuffer.remove(e, t)
        }, t._appendInitSegment = function() {
            this._addingInitSegment = !0, this.activeStream.getInitSegment().then(e => (this._lastAppended = null, this._sourceBuffer.appendBuffer(e), this._addingInitSegment = !1, e)).catch(e => {
                this._needInitSegment = !0, this._addingInitSegment = !1
            })
        }, t._appendSegment = function() {
            const e = this.activeStream.getNextSegment();
            if (null === e) return;
            const t = this.activeStream.getIdForSegment(e);
            this.activeStream.isFinal(e) && (this._appendingFinalSegment = !0), this._lastAppended = t, this.fire("appendbufferstart", t);
            try {
                this._sourceBuffer.appendBuffer(e), this._bufferState[t.segment] = t, this._isFirstSegment && (this._isFirstSegment = !1, this.fire("initialbufferstart"))
            } catch (rl) {
                if ("QuotaExceededError" === rl.name) {
                    this._quotaExceeded = !0, this.fire("quotaexceedederror", this._sourceBuffer.buffered);
                    const t = 6;
                    if (this._sorcerer._video.currentTime > t) {
                        const e = 0,
                            n = this._sorcerer._video.currentTime - t;
                        this._sorcerer.removeBuffer(e, n)
                    }
                    this.activeStream._readyToAppend.unshift(e)
                }
            }
        }, on(e, [{
            key: "streams",
            get: function() {
                return this._streams
            }
        }, {
            key: "activeStreamIndex",
            get: function() {
                return this._activeStreamIndex
            }
        }, {
            key: "activeStream",
            get: function() {
                return this._streams[this._activeStreamIndex]
            }
        }, {
            key: "sourceBuffer",
            get: function() {
                return this._sourceBuffer
            },
            set: function(e) {
                this._sourceBuffer = e, this._attachEvents(), this.fire("sourcebufferattach")
            }
        }, {
            key: "endTime",
            get: function() {
                const e = this._sourceBuffer.buffered;
                if (e.length > 0) return e.end(e.length - 1)
            }
        }]), e
    }();

function Ti() {}
let bi = function() {
        function e(e, t = "", n = new Ei) {
            ft(this), this._readyToAppend = [], this._initSegment = e, this._needInitSegment = !0, this._index = NaN, this._codec = t, this._fetcher = n, this._fetcher.start(), this._bufferData = new WeakMap, this._segmentToId = {}
        }
        e.isValidSegmentUrl = function(e) {
            return "string" == typeof e || "string" == typeof e.url && "string" == typeof e.byteRange
        };
        var t = e.prototype;
        return t.getIdForSegment = function(t) {
            return e.isValidSegmentUrl(t) ? this._segmentToId[t] : this._bufferData.get(t).id
        }, t.isFinal = function(e) {
            return this._bufferData.get(e).final
        }, t.addSegment = function(t, {
            identifier: n = null,
            isFinalSegment: r = !1,
            loadOnly: i = !1,
            priority: s = 0,
            includeWithBandwidthChecks: o = !0,
            excludeConnectTime: a = !1,
            timeout: u = null,
            size: c = null
        } = {}) {
            return this._needInitSegment && this.getInitSegment(), e.isValidSegmentUrl(t) ? (this._segmentToId[t] = n || t, this.fire("queued", this.getIdForSegment(t)), this._fetcher.add({
                url: t.url || t,
                byteRange: t.byteRange,
                id: this.getIdForSegment(t),
                stream: this,
                includeWithBandwidthChecks: o,
                excludeConnectTime: a,
                isInitSegmentRequest: !1,
                priority: s,
                timeout: u,
                size: c
            }).then(e => {
                this._bufferData.set(e, {
                    id: n || t,
                    final: r
                }), this._readyToAppend.push(e), this.fire("bufferqueueadd", this.getIdForSegment(t)), i || this.fire("segmentadd")
            })) : (this._bufferData.set(t, {
                id: n,
                final: r
            }), this._readyToAppend.push(t), this.fire("bufferqueueadd", n), Promise.resolve())
        }, t.clear = function() {
            this._readyToAppend = []
        }, t.abort = function() {
            try {
                const e = this;
                return function(t, n) {
                    var r = function() {
                        if (e._needInitSegment) return function(e) {
                            if (e && e.then) return e.then(Ti)
                        }(function(t, n) {
                            try {
                                var r = function(e, t) {
                                    return e && e.then ? e.then(Ti) : Promise.resolve()
                                }(e.getInitSegment())
                            } catch (rl) {
                                return
                            }
                            return r && r.then ? r.then(void 0, n) : r
                        }(0, (function(e) {})))
                    }();
                    return r && r.then ? r.then(n) : n()
                }(0, (function() {
                    e._fetcher.abort(e)
                }))
            } catch (rl) {
                return Promise.reject(rl)
            }
        }, t.hasNextSegment = function() {
            return this._readyToAppend.length > 0
        }, t.getNextSegment = function() {
            return 0 === this._readyToAppend.length ? null : this._readyToAppend.shift()
        }, t.getInitSegment = function() {
            const t = "object" == typeof this._initSegment && "url" in this._initSegment ? this._initSegment.url : this._initSegment;
            return t ? (this._needInitSegment = !1, e.isValidSegmentUrl(t) ? this._fetcher.add({
                url: t,
                byteRange: this._initSegment.byteRange,
                id: null,
                stream: this,
                isInitSegmentRequest: !0,
                priority: 0
            }).then(e => (this._initSegment = e, this._initSegment)) : Promise.resolve(this._initSegment)) : Promise.resolve(null)
        }, on(e, [{
            key: "codec",
            get: function() {
                return this._codec
            },
            set: function(e) {
                this._codec = e
            }
        }, {
            key: "index",
            get: function() {
                return this._index
            },
            set: function(e) {
                this._index = e
            }
        }, {
            key: "pendingFetches",
            get: function() {
                return this._fetcher.pendingFetches
            }
        }]), e
    }(),
    Ai = function() {
        function e(e) {
            this._video = e, this._running = !1, this._droppedFramesTimeout = null, this._droppedFrameData = {}, this._decodedFrameData = {}, this._droppedFrames = 0, this._decodedFrames = 0, this._streamIndex = "default", this._attached = !1, this.bound = {
                startCheckingDroppedFrames: this._startCheckingDroppedFrames.bind(this),
                stopCheckingDroppedFrames: this._stopCheckingDroppedFrames.bind(this),
                handleVisibilityChanged: this._handleVisibilityChanged.bind(this)
            }
        }
        var t = e.prototype;
        return t.init = function() {
            this._attachEvents()
        }, t.start = function() {
            return this._startCheckingDroppedFrames(), this
        }, t.stop = function() {
            return this._stopCheckingDroppedFrames(), this
        }, t.destroy = function() {
            this._stopCheckingDroppedFrames(), this._removeEvents()
        }, t.getDroppedFrameRate = function(e, t, n = "average") {
            const r = this._droppedFrameData[t];
            if (!r) return 0;
            if (r.length < e) return 0;
            const i = r.slice(-e);
            return "median" === n ? hi(i) : li(i)
        }, t.getDroppedFrameTotal = function() {
            return {
                dropped: this._getTotalDroppedFrames(),
                total: this._getTotalFrames()
            }
        }, t._attachEvents = function() {
            this._attached || (this._video.addEventListener("playing", this.bound.startCheckingDroppedFrames), this._video.addEventListener("pause", this.bound.stopCheckingDroppedFrames), this._video.addEventListener("ended", this.bound.stopCheckingDroppedFrames), document.addEventListener("visibilitychange", this.bound.handleVisibilityChanged), this._attached = !0)
        }, t._removeEvents = function() {
            this._video.removeEventListener("playing", this.bound.startCheckingDroppedFrames), this._video.removeEventListener("pause", this.bound.stopCheckingDroppedFrames), this._video.removeEventListener("ended", this.bound.stopCheckingDroppedFrames), document.removeEventListener("visibilitychange", this.bound.handleVisibilityChanged), this._attached = !1
        }, t._startCheckingDroppedFrames = function() {
            this._running = !0, this._checkDroppedFrames()
        }, t._stopCheckingDroppedFrames = function() {
            this._running = !1
        }, t._checkDroppedFrames = function() {
            if (!this._running || null === this._streamIndex) return;
            if (Gn.browser.safari && (document.hidden || "hidden" === document.visibilityState)) return;
            clearTimeout(this._droppedFramesTimeout);
            const e = this._getTotalDroppedFrames(),
                t = e - this._droppedFrames;
            this._droppedFrames = e;
            const n = this._getTotalDecodedFrames(),
                r = n - this._decodedFrames;
            this._decodedFrames = n, this._droppedFrameData[this._streamIndex] || (this._droppedFrameData[this._streamIndex] = []), this._decodedFrameData[this._streamIndex] || (this._decodedFrameData[this._streamIndex] = []), this._droppedFrameData[this._streamIndex].length > 100 && this._droppedFrameData[this._streamIndex].shift(), this._decodedFrameData[this._streamIndex].length > 100 && this._decodedFrameData[this._streamIndex].shift(), this._droppedFrameData[this._streamIndex].push(t), this._decodedFrameData[this._streamIndex].push(r), this._droppedFramesTimeout = setTimeout(() => {
                this._checkDroppedFrames()
            }, 1e3)
        }, t._handleVisibilityChanged = function() {
            !Gn.browser.safari || document.hidden && "hidden" === document.visibilityState || this._checkDroppedFrames()
        }, t._getTotalDroppedFrames = function() {
            return "function" == typeof this._video.getVideoPlaybackQuality ? this._video.getVideoPlaybackQuality().droppedVideoFrames : this._video.webkitDroppedFrameCount || 0
        }, t._getTotalFrames = function() {
            return "function" == typeof this._video.getVideoPlaybackQuality ? this._video.getVideoPlaybackQuality().totalVideoFrames : this._video.webkitDecodedFrameCount || 0
        }, t._getTotalDecodedFrames = function() {
            if ("function" == typeof this._video.getVideoPlaybackQuality) {
                const e = this._video.getVideoPlaybackQuality();
                return e.totalVideoFrames - e.droppedVideoFrames - e.corruptedVideoFrames
            }
            return this._video.webkitDecodedFrameCount || 0
        }, on(e, [{
            key: "streamIndex",
            get: function() {
                return this._streamIndex
            },
            set: function(e) {
                this._streamIndex = e
            }
        }]), e
    }(),
    Ii = function() {
        function e(e, t = {}) {
            this._video = e, this._options = t, ft(this);
            const {
                fetcherTimeout: n = 0,
                fetcherRetryAbortErrors: r = !0
            } = this._options;
            this._frameDropper = new Ai(e), this._mediaSource = new MediaSource, this._fetcher = new Ei({
                parallel: 1,
                timeout: n,
                retryAbortErrors: r
            }), this._buffersForCodec = {}, this._buffers = [], this._readyPromiseResolve = null, this._boundHandleSourceOpen = this._handleSourceOpen.bind(this), this._attachEvents()
        }
        var t = e.prototype;
        return t.switchTo = function(e) {
            return 1 === this._buffers.length && this.video.switchTo(e)
        }, t.getCurrentSpeed = function({
            type: e = "average",
            howMany: t = 10,
            weights: n = [],
            percentile: r = null
        } = {}) {
            return "harmonicAverage" === e ? Ei.getHarmonicAverageSpeed(t) : "average" === e ? Ei.getAverageSpeed(t, n) : "median" === e ? Ei.getMedianSpeed(t) : Ei.getPercentileSpeed(t, r)
        }, t.getVolatilityScaler = function(e) {
            return Ei.getVolatilityScaler(e)
        }, t.getResponseSpeeds = function() {
            return Ei.getResponseSpeeds()
        }, t.getFailedSegments = function() {
            return Ei.getFailedSegments()
        }, t.getSuccessfulSegments = function() {
            return Ei.getSuccessfulSegments()
        }, t.getDroppedFrameRate = function(e, t = this.activeStreamIndex, n = "average") {
            return this._frameDropper.getDroppedFrameRate(e, t, n)
        }, t.getDroppedFrameTotal = function() {
            return this._frameDropper.getDroppedFrameTotal()
        }, t.clear = function() {
            this._buffers.forEach(e => e.clear())
        }, t.initFrameDropper = function() {
            this._frameDropper.init()
        }, t.streamIndexAtTime = function(e, t) {
            return this._buffersForCodec[t].streamIndexAtTime(e) ? this._buffersForCodec[t].streamIndexAtTime(e).stream : null
        }, t.removeBuffer = function(e = 0, t = this._video.duration) {
            if (e >= (t = t || 0)) return Promise.resolve();
            const n = this._buffers.map(n => n.remove(e, t));
            return Promise.all(n)
        }, t.addStream = function(e, t) {
            const n = this._getCodecType(e);
            if (!this._buffersForCodec[n]) {
                const t = new Si(this, n);
                this._buffersForCodec[n] = t, this._buffers.push(t), this.readyPromise.then(() => {
                    let r;
                    try {
                        r = this._mediaSource.addSourceBuffer(e)
                    } catch (rl) {
                        if (22 !== rl.code) return void this.fire("srcnotsupported", rl);
                        r = this._buffersForCodec[n]
                    }
                    if (this._options.duration) {
                        const e = .1;
                        r.appendWindowEnd = this._options.duration + e
                    }
                    t.sourceBuffer = r
                }).catch(e => {}), ["appendbufferstart", "appendbufferend", "streamchange", "streamchangestart", "initialbufferstart", "quotaexceedederror"].forEach(e => {
                    t.on(e, t => {
                        this.fire(e, t)
                    })
                })
            }
            const r = new bi(t, e, this._fetcher);
            return ["queued", "bufferqueueadd"].forEach(e => {
                r.on(e, t => {
                    this.fire(e, t)
                })
            }), this._buffersForCodec[n].addStream(r), r
        }, t.checkEndOfStream = function() {
            if (!this._buffers.every(e => e.hasAppendedFinalSegment())) return;
            const e = () => {
                this._video.removeEventListener("timeupdate", e), this._buffers.every(e => e.isTimeInBuffer(this._video.currentTime)) && this.endOfStream()
            };
            this._video.addEventListener("timeupdate", e)
        }, t.abortFetches = function() {
            this._fetcher.abort()
        }, t.endOfStream = function() {
            "open" === this._mediaSource.readyState && (this._sourceBuffersAreUpdating() || (this._mediaSource.endOfStream(), this.fire("endofstream")))
        }, t.destroy = function() {
            this.clear(), this._removeEventListeners(), this.off(), this._frameDropper.destroy(), this._fetcher.abort(), this._video.src && (this._video.removeAttribute("src"), this._video.load())
        }, t._attachEvents = function() {
            this.readyPromise = new Promise((e, t) => {
                this._readyPromiseResolve = e, this._mediaSource.addEventListener("sourceopen", this._boundHandleSourceOpen)
            }), ["downloadstart", "downloadend", "downloadabort", "downloaderror", "downloadtimeout", "progress"].forEach(e => {
                this._fetcher.on(e, (...t) => {
                    this.fire.apply(this, [e].concat(t))
                })
            })
        }, t._sourceBuffersAreUpdating = function() {
            for (let e = 0; e < this._mediaSource.sourceBuffers.length; e++)
                if (this._mediaSource.sourceBuffers[e].updating) return !0;
            return !1
        }, t._handleSourceOpen = function() {
            URL.revokeObjectURL(this._video.src), this._mediaSource.removeEventListener("sourceopen", this._boundHandleSourceOpen), this._options.duration && (this._mediaSource.duration = this._options.duration, this.fire("durationset")), this._readyPromiseResolve()
        }, t._removeEventListeners = function() {
            this._buffers.forEach(e => e.removeEventListeners())
        }, t._getCodecType = function(e) {
            return 0 === e.indexOf("audio") ? "audio" : "video"
        }, on(e, [{
            key: "mediaSource",
            get: function() {
                return this._mediaSource
            }
        }, {
            key: "pendingFetches",
            get: function() {
                return this._fetcher.pendingFetches
            }
        }, {
            key: "streams",
            get: function() {
                return 1 === this._buffers.length && this.video.streams
            }
        }, {
            key: "activeStreamIndex",
            get: function() {
                return 1 === this._buffers.length && this.video.activeStreamIndex
            }
        }, {
            key: "video",
            get: function() {
                return !!this._buffersForCodec.video && this._buffersForCodec.video
            }
        }, {
            key: "audio",
            get: function() {
                return !!this._buffersForCodec.audio && this._buffersForCodec.audio
            }
        }]), e
    }(),
    wi = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t) || this)._options = n, r.blacklisted = [], r.whitelisted = [], r.MAX_LOADABLE_SEGMENTS_AUTO = 3, r.MAX_LOADABLE_SEGMENTS_LOCKED = 15, r.SEGMENT_DURATION = 6, r
        }
        ln(t, e), on(t, [{
            key: "displayName",
            get: function() {
                return "MediaSource"
            }
        }]);
        var n = t.prototype;
        return n.isTimeInBuffer = function(e, t, n) {
            return this._timesAreInRange(e, e, t, n, 1)
        }, n.getDistanceFromBuffer = function(e, t) {
            let n = e;
            for (let r = 0; r < t.length; r++)
                if (t.start(r) <= e && t.end(r) >= e) {
                    n = t.end(r);
                    break
                }
            return n - e
        }, n.blacklist = function(e) {
            this.blacklisted[e] = 1
        }, n.lock = function(e = []) {
            this.whitelisted = e
        }, n.filterStreams = function(e, t, n, r = null) {
            const i = [];
            let s, o = !1;
            for (let a = 0; a < e.length; a++)
                if (s && s[0] === e[a].width && s[1] === e[a].height) i.push(e[a]);
                else {
                    if (o) break;
                    this.blacklisted[a] && -1 === this.whitelisted.indexOf(a) || this.whitelisted.length && -1 === this.whitelisted.indexOf(a) || (this.whitelisted.length ? i.push(e[a]) : (this._getScaleFromDimensions(t, n, e[a].width, e[a].height, r) >= (n < 1e3 / (window.devicePixelRatio || 1) ? 1.75 : 1) && (o = !0), i.push(e[a]), s = [e[a].width, e[a].height]))
                }
            return i
        }, n.getCurrentSpeed = function() {
            let e = "average",
                t = 3,
                n = [1, 2, 5];
            return this._options.tests && this._options.tests.harmonic_average && this._options.tests.harmonic_average.group && (e = "harmonicAverage", t = this._getMaxLoadableSegmentsAuto(), n = []), this.scanner.sorcerer.getCurrentSpeed({
                type: e,
                howMany: t,
                weights: n
            })
        }, n.shouldUseSurroundSound = function(e, t) {
            return "240p" !== e[t].quality
        }, n.getAudioIndexFromVideo = function(e, t, n) {
            if (0 === t.length) return !1;
            if (!e[n]) return 0;
            const r = t.filter(({
                channels: e
            }) => e > 2);
            if (r.length > 0 && this.shouldUseSurroundSound(e, n)) {
                const e = r[r.length - 1];
                return t.indexOf(e)
            }
            return t.length > 1 && 0 === n && e[n].height <= 360 && e.length > 1 ? "mp4a.40.2" === t[0].codecs && t[0].bitrate < 8e4 && "240p" !== e[n].quality ? 1 : 0 : t.length - 1
        }, n._getVisibleDimensions = function(e, t, n, r) {
            const i = n / r,
                s = e - t * i,
                o = t - e / i;
            let a = e - s,
                u = t - o;
            return s > 0 && (u = t), o > 0 && (a = e), [a, u]
        }, n._getScaleFromDimensions = function(e, t, n, r, i = null) {
            const s = this._getVisibleDimensions(e, t, n, r);
            let o = n * r;
            i && (o *= i);
            const a = window.devicePixelRatio || 1;
            return o / (s[0] * s[1] * a * a)
        }, n._getMaxLoadableSegmentsAuto = function() {
            const e = fr(this._options, "lookahead_count");
            return e && e.group && e.data.count ? e.data.count : e && e.data.segment_lookahead_count ? e.data.segment_lookahead_count : this.MAX_LOADABLE_SEGMENTS_AUTO
        }, n._getSecondsToLoadAhead = function(e, t, n) {
            const r = n && n.bitrate > 11e6;
            return 1 === this.whitelisted.length ? r ? 30 : this.MAX_LOADABLE_SEGMENTS_LOCKED * this.SEGMENT_DURATION : this._getMaxLoadableSegmentsAuto() * this.SEGMENT_DURATION
        }, n._timesAreInRange = function(e, t, n, r, i = 0) {
            if (!n) return !1;
            t = Math.min(t, r);
            for (let s = 0; s < n.length; s++) {
                const r = dr(n.start(s)) - i,
                    o = dr(n.end(s)) + i;
                if (r <= e && o >= t) return !0
            }
            return !1
        }, n._hasSeparateStreams = function(e) {
            return e.video.length > 0 && e.audio.length > 0
        }, n._isSegmentInBuffer = function(e, t, n, r) {
            let i = 1;
            return this._hasSeparateStreams(r) && (i = .05), this._timesAreInRange(e.start, e.end, t, n, i)
        }, t
    }(function() {
        function e(e) {
            this.scanner = e, this.STREAM_TYPE_VIDEO = "video", this.STREAM_TYPE_AUDIO = "audio"
        }
        on(e, [{
            key: "displayName",
            get: function() {
                return "Brain"
            }
        }]);
        var t = e.prototype;
        return t.destroy = function() {}, t.shouldPowerUp = function(e, t) {
            return !1
        }, t.shouldPowerDown = function(e, t) {
            return !1
        }, t.canPowerUp = function(e, t) {
            return 1 !== e.length && t < e.length - 1
        }, t.canPowerDown = function(e, t) {
            return 1 !== e.length && t > 0
        }, t.filterStreams = function(e) {
            return e
        }, e
    }());
let Ri = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this).BANDWIDTH_UPSWITCH_THRESHOLD = .85, r.BANDWIDTH_DOWNSWITCH_THRESHOLD = .9, r.DEFAULT_TIMEOUT = 8e3, r.SEGMENT_RELATIVE_TIMEOUT_RATIO = 4 / 3, r.MINIMUM_TIMEOUT = 1e3, r.FRAME_DROP_WINDOW_SECONDS = 10, r
        }
        ln(t, e), on(t, [{
            key: "displayName",
            get: function() {
                return "Skyfire"
            }
        }]);
        var n = t.prototype;
        return n.shouldPowerUp = function(e, t, n) {
            n && this._options.startingBandwidthThreshold && (this.BANDWIDTH_UPSWITCH_THRESHOLD = this._options.startingBandwidthThreshold);
            let r = e.indexOf(t);
            if (-1 === r && (r = 0), !this.canPowerUp(e, r)) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const i = this.getCurrentSpeed();
            if (!i) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const s = this._getStreamFromSpeed(i, this.BANDWIDTH_UPSWITCH_THRESHOLD, e);
            return s === r || !n && s > r && wt(this.scanner.currentTime, this.scanner._video.buffered) < 1.5 * this.SEGMENT_DURATION ? Promise.resolve({
                index: !1,
                reasonForSwitch: null
            }) : Promise.resolve({
                index: s,
                reasonForSwitch: 3
            })
        }, n.shouldPowerDown = function(e, t) {
            const n = e.indexOf(t);
            if (-1 === n) {
                const t = this.isTimeInBuffer(this.scanner._video.duration, this.scanner._video.buffered, this.scanner._video.duration);
                return this.whitelisted.length || this.blacklisted.length || !t ? Promise.resolve({
                    index: e.length - 1,
                    reasonForSwitch: 6
                }) : Promise.resolve({
                    index: !1,
                    reasonForSwitch: null
                })
            }
            if (!this.canPowerDown(e, n)) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const r = this.getCurrentSpeed();
            if (!r) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            if (this.hasTooManyDroppedFrames(n, t, this._options.droppedFrameSwitchPercent)) return this.blacklist(n), Promise.resolve({
                index: n - 1,
                reasonForSwitch: 2
            });
            const i = this._getStreamFromSpeed(r, this.BANDWIDTH_DOWNSWITCH_THRESHOLD, e);
            return i === n ? Promise.resolve({
                index: !1,
                reasonForSwitch: null
            }) : Promise.resolve({
                index: i,
                reasonForSwitch: 1
            })
        }, n.hasTooManyDroppedFrames = function(e, t, n) {
            return this.scanner.sorcerer.getDroppedFrameRate(this.FRAME_DROP_WINDOW_SECONDS, e, "median") / t.framerate * 100 >= n
        }, n.getTimeEstimateToLoad = function(e, t) {
            if (null === t) return 3;
            const n = t.segments[e],
                r = n.end - n.start,
                i = this.getCurrentSpeed();
            return r * (t.bitrate + t.audioBitrate) / i * 1.3
        }, n.canPlayFromTimeInStream = function(e, t) {
            if (!this.isTimeInBuffer(e, this.scanner._video.buffered, this.scanner._video.duration)) return !1;
            if (!t) return !1;
            const n = this.getSegmentsToLoad(!1, this.STREAM_TYPE_VIDEO, t);
            if (0 === n.length) return !0;
            const r = wt(e, this.scanner._video.buffered);
            return this.getTimeEstimateToLoad(n[0], t) < r
        }, n.getSegmentsToLoad = function(e, t = this.STREAM_TYPE_VIDEO, n) {
            const r = this.scanner._video,
                i = this.scanner.currentTime,
                s = [],
                o = i + this._getSecondsToLoadAhead(i, r.duration, n),
                a = this.scanner.sorcerer[t].activeStreamIndex,
                u = this.scanner._streams[t][a];
            if (!u) return s;
            const c = this.scanner.sorcerer[t].sourceBuffer;
            let l = null;
            c && (l = c.buffered);
            for (let h = 0; h < u.segments.length; h++) {
                const t = u.segments[h];
                if (t.end < i || t.start > o) continue;
                const n = i >= t.start && i < t.end,
                    r = this._isSegmentInBuffer(t, l, this.scanner._video.duration, this.scanner._streams);
                !e && r || e && r && n || (n || o >= t.start) && s.push(h)
            }
            return s
        }, n.getSegmentRelativeTimeout = function(e, t, n) {
            var r;
            const i = null == t ? void 0 : t.bitrate,
                s = null == (r = e[0]) ? void 0 : r.bitrate;
            if (!i || !s || !n) return this.DEFAULT_TIMEOUT;
            if (i === s) return this.DEFAULT_TIMEOUT;
            const o = n * this.SEGMENT_RELATIVE_TIMEOUT_RATIO;
            return Math.max(this.MINIMUM_TIMEOUT, Math.min(this.DEFAULT_TIMEOUT, o))
        }, n._getStreamFromSpeed = function(e, t, n) {
            let r = 0;
            for (let i = r; i < n.length; i++) e * t > n[i].bitrate + n[i].audioBitrate && (r = i);
            return r
        }, t
    }(wi),
    Pi = function(e) {
        function t(t, n = {}) {
            var r, i, s;
            return (s = e.call(this, t, n) || this)._mimirURL = n.tests.ml_brain.data.mimir_url, s._geolocation = n.tests.ml_brain.data.geolocation, s._segmentToStreamDecisionMap = {}, s._pendingModelFetch = null, s._prevBufferDurations = [], s._prevSegmentDownloadTimes = [], s._prevSegmentByteLengths = [], s._prevDistancesFromBuffer = [], s._prevSegmentStreamIndexes = [], s._prevRemainingSegmentCounts = [], s._prevTTFBs = [], s._prevSegmentTimeouts = [], s._prevSegmentRequestIDs = [], s._prevModelInputs = null, s._lastModelResponseTime = 0, s._videoSegInProgress = null, s._audioSegInProgress = null, s._scrubInProgress = !1, s._hasPreloaded = !1, s._networkIssueCount = 0, s._audioStreams = [], s._videoBufferAppendCount = 0, s._scannerEventsHandlers = [
                [An.DOWNLOAD_START, s._handleDownloadStart.bind(vn(s))],
                [An.DOWNLOAD_END, s._handleDownloadEnd.bind(vn(s))],
                [An.APPEND_BUFFER_END, s._handleAppendBufferEnd.bind(vn(s))],
                [An.DOWNLOAD_TIMEOUT, s._handleDownloadTimeout.bind(vn(s))]
            ], s._beforeRequestHooks = [s._beforeSegmentQualityFetch], s._afterResponseHooks = [s._afterSegmentQualityFetch], s._scannerEventsHandlers.forEach(e => {
                s.scanner.on(e[0], e[1])
            }), (r = Lr.hooks.beforeRequest).push.apply(r, gn(s._beforeRequestHooks)), (i = Lr.hooks.afterResponse).push.apply(i, gn(s._afterResponseHooks)), s
        }
        ln(t, e), on(t, [{
            key: "displayName",
            get: function() {
                return "ML"
            }
        }]);
        var n = t.prototype;
        return n.destroy = function() {
            this._scannerEventsHandlers.forEach(e => {
                this.scanner.off(e[0], e[1])
            }), this._beforeRequestHooks.forEach(e => {
                const t = Lr.hooks.beforeRequest,
                    n = t.indexOf(e);
                n >= 0 && t.splice(n, 1)
            }), this._afterResponseHooks.forEach(e => {
                const t = Lr.hooks.afterResponse,
                    n = t.indexOf(e);
                n >= 0 && t.splice(n, 1)
            })
        }, n._handleDownloadStart = function({
            identifier: e
        }) {
            e.type === this.STREAM_TYPE_VIDEO && (this._videoSegInProgress = {
                index: e.segment,
                streamIndex: e.stream,
                complete: null
            }), e.type === this.STREAM_TYPE_AUDIO && (this._audioSegInProgress = {
                index: e.segment,
                streamIndex: e.stream,
                complete: null
            })
        }, n._segmentInProgressMatchesIdentifer = function(e, t = this.STREAM_TYPE_VIDEO) {
            return t === this.STREAM_TYPE_VIDEO ? null !== this._videoSegInProgress && this._videoSegInProgress.index === e.segment && this._videoSegInProgress.streamIndex === e.stream : t === this.STREAM_TYPE_AUDIO && null !== this._audioSegInProgress && this._audioSegInProgress.index === e.segment
        }, n._isSegmentInProgress = function() {
            return null !== this._videoSegInProgress || null !== this._audioSegInProgress
        }, n._handleDownloadEnd = function({
            identifier: e,
            data: {
                request: t,
                response: n
            }
        }) {
            const r = t.data.duration / 1e3,
                i = n.body.byteLength;
            let s = null;
            n.perfTimings && (s = n.perfTimings.responseStart - n.perfTimings.connectStart), e.type === this.STREAM_TYPE_VIDEO && this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_VIDEO) && (this._videoSegInProgress.complete = {
                downloadTime: r,
                byteLength: i,
                ttfb: s,
                uuid: t.data.uuid
            }, this._hasPreloaded || (this._updateModelInputData({
                streamIndex: e.stream,
                segmentIndex: e.segment - 1,
                segmentDLTime: r,
                segmentLength: i,
                ttfb: s,
                didSegmentTimeout: !1
            }), this._hasPreloaded = !0)), e.type === this.STREAM_TYPE_AUDIO && this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_AUDIO) && (this._audioSegInProgress.complete = {
                downloadTime: r,
                byteLength: i,
                ttfb: s,
                uuid: t.data.uuid
            })
        }, n._handleDownloadTimeout = function({
            identifier: e,
            data: t
        }) {
            const n = (t.timeoutMs || 8e3) / 1e3,
                r = e.segment,
                i = this.scanner._streams[e.type][e.stream].segments[r].size;
            delete this._segmentToStreamDecisionMap[r], this._updateModelInputData({
                streamIndex: e.stream,
                segmentIndex: r,
                segmentDLTime: n,
                segmentLength: i,
                ttfb: .1,
                didSegmentTimeout: !0
            })
        }, n._clearInProgress = function() {
            this._videoSegInProgress = null, this._audioSegInProgress = null
        }, n._handleAppendBufferEnd = function({
            identifier: e
        }) {
            if (e.type === this.STREAM_TYPE_VIDEO && (this._videoBufferAppendCount += 1), this._hasSeparateStreams(this.scanner._streams)) {
                if (this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_VIDEO) && this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_AUDIO) && null !== this._videoSegInProgress.complete && null !== this._audioSegInProgress.complete) {
                    const t = this._videoSegInProgress.complete,
                        n = this._audioSegInProgress.complete,
                        r = t.downloadTime + n.downloadTime,
                        i = t.byteLength + n.byteLength,
                        s = t.ttfb + n.ttfb;
                    this._updateModelInputData({
                        streamIndex: e.stream,
                        segmentIndex: e.segment - 1,
                        segmentDLTime: r,
                        segmentLength: i,
                        ttfb: s,
                        segmentRequestID: t.uuid,
                        didSegmentTimeout: !1
                    }), this._clearInProgress()
                }
            } else if (this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_VIDEO) && null !== this._videoSegInProgress.complete) {
                const t = this._videoSegInProgress.complete;
                this._updateModelInputData({
                    streamIndex: e.stream,
                    segmentIndex: e.segment - 1,
                    segmentDLTime: t.downloadTime,
                    segmentLength: t.byteLength,
                    ttfb: t.ttfb,
                    segmentRequestID: t.uuid,
                    didSegmentTimeout: !1
                }), this._clearInProgress()
            }
        }, n._updateModelInputData = function(e) {
            const {
                streamIndex: t,
                segmentIndex: n,
                segmentDLTime: r,
                segmentLength: i,
                ttfb: s,
                segmentRequestID: o,
                didSegmentTimeout: a
            } = e, u = this.scanner._streams.video[t], c = this.scanner.sorcerer.video.sourceBuffer;
            if (!c || !u) return;
            this._prevBufferDurations.push(this.getTotalBufferDuration()), this._prevDistancesFromBuffer.push(wt(this.scanner.currentTime, c.buffered)), this._prevSegmentStreamIndexes.push(t), this._prevSegmentDownloadTimes.push(r), this._prevSegmentByteLengths.push(i);
            const l = s + this._lastModelResponseTime;
            this._prevTTFBs.push(l), this._prevRemainingSegmentCounts.push(u.segments.length - n), this._prevSegmentRequestIDs.push(o), this._prevSegmentTimeouts.push(Number(a))
        }, n.handleScrubEnd = function(e) {
            const t = this._prevSegmentDownloadTimes.length,
                n = t ? this._prevSegmentDownloadTimes[t - 1] : 0,
                r = this._prevSegmentByteLengths.length,
                i = r ? this._prevSegmentByteLengths[r - 1] : 0,
                s = this._prevTTFBs.length,
                o = s ? this._prevTTFBs[s - 1] : 0,
                a = this.scanner._streams.video[e],
                u = this._getFirstLookaheadSegmentNotInBuffer(a),
                c = u ? u.index : this._prevRemainingSegmentCounts[this._prevRemainingSegmentCounts.length - 1],
                l = this._prevSegmentRequestIDs.length ? this._prevSegmentRequestIDs[this._prevSegmentRequestIDs.length - 1] : "";
            this._updateModelInputData({
                streamIndex: e,
                segmentIndex: c,
                segmentDLTime: n,
                segmentLength: i,
                ttfb: o,
                segmentRequestID: l,
                didSegmentTimeout: !1
            })
        }, n.shouldPowerUp = function(e, t, n) {
            let r = e.indexOf(t);
            if (-1 === r && (r = 0), 1 === this.whitelisted.length) return this.whitelisted[0] > r ? Promise.resolve(0) : Promise.resolve(!1);
            if (1 === this.scanner._streams.video.length) return Promise.resolve(!1);
            if (!this.canPowerUp(e, r)) return Promise.resolve(!1);
            if (this.scrubInProgress) return Promise.resolve(!1);
            const i = this._getFirstLookaheadSegmentNotInBuffer(t);
            if (null === i) return Promise.resolve(!1);
            const s = {
                    index: i.index,
                    streamIndex: i.streamIndex
                },
                o = i.index;
            if (null !== this._pendingModelFetch && this._pendingModelFetch.index === s.index && this._pendingModelFetch.streamIndex === s.streamIndex) return Promise.resolve(!1);
            if (!(o in this._segmentToStreamDecisionMap)) return this._fetchSegmentQualityFromModel(s, e, t).then(e => e > r && e).catch(console.error);
            const a = this._segmentToStreamDecisionMap[o];
            return a > r ? Promise.resolve(a) : Promise.resolve(!1)
        }, n.shouldPowerDown = function(e, t) {
            const n = e.indexOf(t);
            if (-1 === n) {
                const t = this.isTimeInBuffer(this.scanner._video.duration, this.scanner._video.buffered, this.scanner._video.duration);
                return this.whitelisted.length || this.blacklisted.length || !t ? Promise.resolve(e.length - 1) : Promise.resolve(!1)
            }
            if (1 === this.whitelisted.length) return this.whitelisted[0] < n ? Promise.resolve(0) : Promise.resolve(!1);
            if (1 === this.scanner._streams.video.length) return Promise.resolve(!1);
            if (!this.canPowerDown(e, n)) return Promise.resolve(!1);
            if (this.scrubInProgress) return Promise.resolve(!1);
            const r = this._getFirstLookaheadSegmentNotInBuffer(t);
            if (null === r) return Promise.resolve(!1);
            const i = {
                    index: r.index,
                    streamIndex: r.streamIndex
                },
                s = r.index;
            if (null !== this._pendingModelFetch && this._pendingModelFetch.index === i.index && this._pendingModelFetch.streamIndex === i.streamIndex) return Promise.resolve(!1);
            if (!(s in this._segmentToStreamDecisionMap)) return this._fetchSegmentQualityFromModel(i, e, t).then(e => e < n && e).catch(console.error);
            const o = this._segmentToStreamDecisionMap[s];
            return o < n ? Promise.resolve(o) : Promise.resolve(!1)
        }, n.getTotalBufferDuration = function() {
            const e = this.scanner.sorcerer.video.sourceBuffer;
            let t = 0;
            if (!e) return t;
            for (let n = 0; n < e.buffered.length; n++) {
                const r = e.buffered.start(n);
                t += e.buffered.end(n) - r
            }
            return t
        }, n.canPlayFromTimeInStream = function(e, t) {
            return !!this.isTimeInBuffer(e, this.scanner._video.buffered, this.scanner._video.duration) && !!t
        }, n._normalizeModelInput = function(e, t = 0) {
            let n = e.slice(0);
            if (n.length < 8) {
                const e = 8 - n.length;
                for (let r = 0; r < e; r++) n.unshift(t);
                return n
            }
            return n.slice(n.length - 8, n.length)
        }, n._getModelInputs = function(e, t) {
            const n = {
                    240: 1,
                    360: 2,
                    480: 3,
                    540: 3,
                    720: 4,
                    1080: 5,
                    1440: 6,
                    2160: 7
                },
                r = {
                    240: 0,
                    360: 1,
                    480: 2,
                    540: 2,
                    720: 3,
                    1080: 4,
                    1440: 5,
                    2160: 6
                };
            let i = [0, 0, 0, 0, 0, 0, 0, 0],
                s = [0, 0, 0, 0, 0, 0, 0, 0],
                o = [0, 0, 0, 0, 0, 0, 0, 0];
            this._videoBufferAppendCount < 3 && (o[o.length - 1] = 1);
            for (let u = 0; u < t.length; u++) {
                const o = t[u],
                    a = parseInt(o.quality, 10);
                a in n && (i[n[a]] = 1);
                const c = this.getAudioIndexFromVideo(t, this._audioStreams, u);
                let l = null;
                "number" == typeof c && (l = this._audioStreams[c]);
                for (let t = 0; t < o.segments.length; t++)
                    if (t === e && a in r) {
                        const e = o.segments[t].size;
                        let n = 0;
                        l && l.segments[t] && (n = l.segments[t].size), s[r[a]] = e + n
                    }
            }
            const a = this._prevSegmentStreamIndexes.map(e => parseInt(this.scanner._streams.video[e].quality, 10));
            return {
                availableQualities: i,
                nextChunkSizes: s,
                lastBufferSizes: this._normalizeModelInput(this._prevBufferDurations),
                lastChunkDownloadTimes: this._normalizeModelInput(this._prevSegmentDownloadTimes),
                lastTtfb: this._normalizeModelInput(this._prevTTFBs, .1),
                lastChunkSizes: this._normalizeModelInput(this._prevSegmentByteLengths),
                lastChunkQualities: this._normalizeModelInput(a),
                numRemainingChunks: this._normalizeModelInput(this._prevRemainingSegmentCounts),
                lastPlaybackHeads: this._normalizeModelInput(this._prevDistancesFromBuffer),
                geolocation: [
                    [this._geolocation]
                ],
                downloadTimeout: this._normalizeModelInput(this._prevSegmentTimeouts),
                videoStart: o
            }
        }, n._getStreamQualityFromModelOutput = function(e, t) {
            let n = -1,
                r = -1;
            for (let s = 0; s < e.length; s++) e[s] > r && (r = e[s], n = s);
            let i = [];
            for (let s = 0; s < t.length; s++) 1 === t[s] && i.push(s);
            return {
                1: 240,
                2: 360,
                3: 540,
                4: 720,
                5: 1080,
                6: 1440,
                7: 2160
            }[i[n]]
        }, n._getStreamIndexFromQuality = function(e, t) {
            for (let n = 0; n < t.length; n++) {
                const r = parseInt(t[n].quality, 10);
                if (r === e) return n;
                if (480 === r && 540 === e) return n
            }
            return 0
        }, n._beforeSegmentQualityFetch = function(e) {
            e.startTime = sr()
        }, n._afterSegmentQualityFetch = function(e, t) {
            return t.duration = or(e.startTime), t
        }, n._fetchSegmentQualityFromModel = function(e, t, n) {
            const r = this._getModelInputs(e.index, t);
            return this._pendingModelFetch = e, ei.post(this._mimirURL, {
                json: {
                    inputs: r
                },
                timeout: 2e3
            }).then(n => {
                this._lastModelResponseTime = n.perfTimings.duration;
                const i = JSON.parse(n.body),
                    s = this._getStreamQualityFromModelOutput(i.outputs[0], r.availableQualities),
                    o = this._getStreamIndexFromQuality(s, t);
                if (this._segmentToStreamDecisionMap[e.index] = o, this._prevSegmentRequestIDs.length && this._prevModelInputs) {
                    const e = this._prevSegmentRequestIDs[this._prevSegmentRequestIDs.length - 1];
                    this.scanner.fire(Pn.BRAIN_ML_MODEL_INPUTS, cn({
                        chunkRequestID: e,
                        duration: n.duration,
                        geolocation: this._geolocation
                    }, this._prevModelInputs))
                }
                return this._prevModelInputs = r, this._pendingModelFetch = null, o
            }).catch(t => {
                if (t instanceof xr) {
                    const e = {
                        status: t.response.status,
                        resp: t.response.body,
                        url: this._mimirURL
                    };
                    this.scanner.fire(Pn.BRAIN_ML_MODEL_ERR, e), this._networkIssueCount++
                }
                if (t instanceof Ur) {
                    const e = {
                        url: this._mimirURL
                    };
                    this.scanner.fire(Pn.BRAIN_ML_MODEL_TIMEOUT, e), this._networkIssueCount++
                }
                if (t instanceof Fr) {
                    const e = {
                        url: this._mimirURL
                    };
                    this.scanner.fire(Pn.BRAIN_ML_MODEL_NET_ERR, e), this._networkIssueCount++
                }
                this._networkIssueCount >= 2 && this.scanner.resetBrain(!0);
                const n = e.streamIndex;
                return this._segmentToStreamDecisionMap[e.index] = n, this._pendingModelFetch = null, n
            })
        }, n._getFirstLookaheadSegmentNotInBuffer = function(e) {
            const t = this.scanner.sorcerer.video.sourceBuffer;
            let n = null;
            if (t && (n = t.buffered), null === n) return null;
            const r = this._getLookaheadSegments(e);
            for (let i = 0; i < r.length; i++) {
                const e = r[i].segment;
                if (!this._isSegmentInBuffer(e, n, this.scanner._video.duration, this.scanner._streams)) return r[i]
            }
            return null
        }, n._getLookaheadSegments = function(e, t = this.STREAM_TYPE_VIDEO) {
            const n = this.scanner._video,
                r = this.scanner.currentTime,
                i = r + this._getSecondsToLoadAhead(r, n.duration, e),
                s = [],
                o = this.scanner.sorcerer[t].activeStreamIndex,
                a = this.scanner._streams[t][o];
            if (!a) return s;
            for (let u = 0; u < a.segments.length; u++) {
                const e = a.segments[u];
                e.end < r || e.start > i || (r >= e.start && r < e.end || i >= e.start) && s.push({
                    segment: e,
                    index: u,
                    streamIndex: o
                })
            }
            return s
        }, n._clearSegmentsNotInBufferFromDecisionMap = function(e, t) {
            Object.keys(this._segmentToStreamDecisionMap).filter(t => -1 === e.indexOf(parseInt(t, 10))).forEach(e => {
                const n = this._segmentToStreamDecisionMap[e],
                    r = this.scanner._streams.video[n].segments[e];
                this._isSegmentInBuffer(r, t, this.scanner._video.duration, this.scanner._streams) || delete this._segmentToStreamDecisionMap[e]
            })
        }, n.getSegmentsToLoad = function(e, t, n) {
            const r = this._getLookaheadSegments(n, t),
                i = this.scanner.sorcerer[t].sourceBuffer;
            let s = null;
            i && (s = i.buffered), this._clearSegmentsNotInBufferFromDecisionMap(r.map(e => e.index), s);
            const o = [];
            for (let a = 0; a < r.length; a++) {
                const e = r[a].segment,
                    t = r[a].index,
                    n = this._isSegmentInBuffer(e, s, this.scanner._video.duration, this.scanner._streams),
                    i = t in this._segmentToStreamDecisionMap;
                n || !i && 1 !== this.whitelisted.length && 1 !== this.scanner._streams.video.length || o.push(t)
            }
            return o
        }, on(t, [{
            key: "audioStreams",
            get: function() {
                return this._audioStreams
            },
            set: function(e) {
                this._audioStreams = e
            }
        }, {
            key: "scrubInProgress",
            set: function(e) {
                this._scrubInProgress = e
            },
            get: function() {
                return this._scrubInProgress
            }
        }]), t
    }(wi),
    Di = function() {
        function e(e, t) {
            this._video = e, this._getCurrentStream = t
        }
        var t = e.prototype;
        return t.start = function() {
            return clearInterval(this._checkGapInterval), this._checkGapInterval = setInterval(this._checkGap.bind(this), 200), this._checkGap()
        }, t.stop = function() {
            clearInterval(this._checkGapInterval)
        }, t.onSegmentAppended = function() {
            this._checkGap()
        }, t._checkGap = function() {
            const e = this._video.buffered,
                t = this._video.currentTime,
                n = this._getGapIndex(e, t);
            if (0 === this._video.readyState) return !1;
            if (this._video.paused) return !1;
            const r = this._video.duration;
            if (t >= r) return this._video.currentTime = r - .1, !0;
            if (e.length <= n) return !1;
            const i = e.start(n);
            return !(i >= r || i - t > .5 || 0 !== n || (this.stop(), this._correctFirstSegmentStart("audio", i), this._correctFirstSegmentStart("video", i), this._video.currentTime = i, 0))
        }, t._getGapIndex = function(e, t) {
            if (!e || !e.length) return null;
            let n = 0;
            for (; n < e.length; n++) {
                const r = e.start(n),
                    i = e.end(n);
                if (r > t && (0 === n || i - t <= .1)) break
            }
            return n >= 0 ? n : null
        }, t._correctFirstSegmentStart = function(e, t) {
            const n = this._getCurrentStream(0, e);
            n && n.segments && n.segments[0] && (n.segments[0].start = t)
        }, e
    }();
let ki = function() {
        function e(e, t = {}) {
            this._scanner = e, this.sessionId = t.sessionId, this.clipId = t.clipId
        }
        var t = e.prototype;
        return t.getLogAsQueryParam = function(e, t) {
            return this._buildCMCDQueryParam(this._getLog(e, t))
        }, t._getLog = function(e, t) {
            let n = {};
            return Object.assign(n, this._getStaticSessionData()), Object.assign(n, this._getDynamicSessionData(e, t)), n
        }, t._buildCMCDQueryParam = function(e) {
            return kt({
                CMCD: this._getObjectAsAlphabetizedString(e)
            })
        }, t._getStaticSessionData = function() {
            return {
                sid: `"${this.sessionId}"`,
                cid: `"${this.clipId}"`,
                st: this._getStreamType(),
                sf: this._getStreamingFormat()
            }
        }, t._getDynamicSessionData = function(e, t) {
            return {
                pr: this._scanner.playbackRate,
                br: this._scanner.getBitrateAtTime(this._scanner.currentTime, t) / 1e3,
                ot: this._getObjectType(t),
                bl: this._getBufferLength(e)
            }
        }, t._getObjectType = function(e) {
            switch (e) {
                case "audio":
                    return "a";
                case "video":
                    return "v";
                default:
                    return "av"
            }
        }, t._getBufferLength = function(e) {
            return Math.round(1e3 * (parseFloat(e.end) - parseFloat(e.start)))
        }, t._getStreamType = function() {
            switch (this._scanner.displayName) {
                case "HLSLiveScanner":
                case "NativeHLSLiveScanner":
                    return "l";
                case "MediaSourceScanner":
                default:
                    return "v"
            }
        }, t._getStreamingFormat = function() {
            switch (this._scanner.displayName) {
                case "HLSLiveScanner":
                case "NativeHLSLiveScanner":
                    return '"hls"';
                case "MediaSourceScanner":
                default:
                    return '"dash"'
            }
        }, t._getObjectAsAlphabetizedString = function(e) {
            let t = [],
                n = "";
            for (var r = 0, i = Object.entries(e); r < i.length; r++) {
                const [e, n] = i[r];
                t.push({
                    key: e,
                    value: n
                })
            }
            return t.sort((function(e, t) {
                return e.key.localeCompare(t.key)
            })).forEach(({
                key: e,
                value: t
            }) => {
                n += `${e}=${t},`
            }), n.replace(/,\s*$/, "")
        }, e
    }(),
    Oi = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this).reset(), r.manifestLoadDurations = [], n.mediaSourceScanner && (r._maxPreloadStreamIndex = n.mediaSourceScanner.maxPreloadStreamIndex), r
        }
        ln(t, e), on(t, null, [{
            key: "displayName",
            get: function() {
                return "MediaSourceScanner"
            }
        }, {
            key: "supported",
            get: function() {
                return "undefined" != typeof MediaSource && MediaSource.isTypeSupported
            }
        }, {
            key: "supportedVideoTypes",
            get: function() {
                return ["application/vnd.vimeo.dash+json", "video/vnd.mpeg.dash.mpd"]
            }
        }]);
        var n = t.prototype;
        return n.deactivate = function() {
            e.prototype.deactivate.call(this), this.sorcerer && this.sorcerer.destroy(), this.reset()
        }, n.reset = function() {
            this._waitingOnSet = new Set, this._streamsForSegment = {}, Gn.browser.safari && (this._gapJumper = new Di(this._video, this._getCurrentStream.bind(this))), this.resetBrain(), this._setupCMCDLogger(), this._ready = !1, this._startedPlaying = !1, this._manifest = null, this._streams = {}, this._streams.audio = [], this._streams.video = [], this._audioStreams = [], this._onReady = null, this._baseUrl = null, this._lastTargetStreamId = null, this._timeToSeekTo = null, this._resolveSeek = null, this._resolveStartPreload = null, this._reloadingExistingVideo = !1, this._lastStreamIndex = null, this._checkSwitchUp = !1, this._clearBufferAtTime = !1, this._preloadStream = null, this._removeBufferPromise = null, this._ranIntoBuffer = !1, this._restrictedStreamIndexes = [], this._switching = {}, this._lastDownloadBitrate = 0, this._preloadSegmentStreamIndex = null, clearInterval(this._loadSegmentsInterval), clearTimeout(this._slowLoadSegmentTimeout)
        }, n.resetBrain = function(e = !1) {
            const t = this._options.mediaSourceScanner || {};
            t.tests = this._options.tests;
            const n = Gn.ie;
            if (this._brain && this._brain.destroy(), e || n) {
                const e = _r(this._brain);
                return this._brain = new Ri(this, t), void((e || n) && this.fire(Pn.BRAIN_ML_SWITCH_TO_SKYFIRE))
            }
            this._brain = new Ri(this, t);
            const r = fr(t, "ml_brain");
            r && r.group && r.data.use_model && (this._brain = new Pi(this, t))
        }, n.preloadStream = function() {
            if (this._preloadStream) return this._preloadStream;
            let e = 0,
                t = 1;
            this._streams.audio.length && (t = 2);
            let n = this.sorcerer.video.activeStreamIndex;
            this._restrictedStreamIndexes.length && (n = this._restrictedStreamIndexes[0]);
            let r = 0;
            const i = this._brain.getSegmentsToLoad(!1, "video", n);
            i.length > 0 && (r = i[0]);
            let s = () => {};
            const o = (e = !1) => {
                    e && (n = this.sorcerer.video.activeStreamIndex), this._preloadSegmentStreamIndex = n, this._restartLoadSegmentsIntervalWithBackoff(!0)
                },
                a = n => {
                    e += 1, e < t || (n.segment === r && 0 === this._restrictedStreamIndexes.length ? this._getStreamIndexToLoadAndSwitchReason(!0).then(t => {
                        let {
                            index: r,
                            reasonForSwitch: i
                        } = t, a = {
                            reasonForSwitch: i
                        };
                        if (!1 !== r && r > n.stream) {
                            if (this.sorcerer.video.switchTo(r, !1, a), this._streams.audio.length) {
                                const e = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, r);
                                this.sorcerer.audio.switchTo(e, !1)
                            }
                            return e = 0, void o(!0)
                        }
                        s()
                    }).catch(console.error) : s())
                };
            return this._preloadStream = new Promise((e, t) => {
                s = () => {
                    const t = this._getCurrentStream(n).segments[0].end,
                        r = this._getDuration(!0);
                    if (this.currentTime >= r && (this.currentTime = r), this.currentTime > t && (this.sorcerer.clear(), this._waitingOnSet = new Set), this.sorcerer.video.switchTo(n, !1), this._streams.audio.length) {
                        const e = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, n);
                        this.sorcerer.audio.switchTo(e, !1)
                    }
                    this.sorcerer.off("bufferqueueadd", a), this._preloadSegmentStreamIndex = null, this._ready = !0, e()
                }, this.sorcerer.on("bufferqueueadd", a), o()
            }), this._preloadStream
        }, n.loadManifest = function(e) {
            const t = this,
                n = Date.now();
            return Gn.browser.ie && e && -1 !== e.indexOf("archive_playlist") ? (setTimeout(() => {
                this._fireVideoError("MediaUnknownError", "An unknown error occurred.")
            }, 250), new Promise(() => {})) : ei({
                url: e,
                timeout: 1e4,
                type: Cr.MANIFEST
            }).then(t => (t.url && t.url !== e && -1 !== t.url.indexOf("live-archive") && (this._baseUrl = t.url.split("/").slice(0, -2).join("/")), this.manifestLoadDurations.push({
                url: e,
                status: t.status,
                duration: Date.now() - n
            }), this.fire(An.MANIFEST_LOADED), t.text())).then(function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (rl) {
                        return Promise.reject(rl)
                    }
                }
            }((function(n) {
                let r;
                return function(i, s) {
                    var o = function() {
                        if (-1 !== e.indexOf(".mpd")) return function(e, t, n) {
                            return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                        }(t._loadMediaManifest(), (function({
                            parseMPD: t
                        }) {
                            r = t(n, e)
                        }));
                        r = JSON.parse(n)
                    }();
                    return o && o.then ? o.then(s) : s()
                }(0, (function() {
                    return r
                }))
            }))).catch(t => {
                if (this.manifestLoadDurations.push({
                        url: e,
                        status: t.response && t.response.status,
                        duration: Date.now() - n
                    }), this.reset(), t instanceof xr && 410 === t.response.status) return this.fire(An.MEDIA_URL_EXPIRED), new Promise(() => {});
                throw t instanceof xr && 400 === t.response.status ? this.fire(An.MEDIA_URL_BAD_REQUEST, t.response.url) : t instanceof Ur && this.fire(An.MANIFEST_TIMEOUT), t
            })
        }, n.setVideoSrc = function(e, t, n = !0) {
            if (n && !t && this._onReady) {
                var r;
                if (("metadata" === this._preload || "none" === this._preload && !this.paused) && !this._ready) return void this._onReady.then(() => {
                    const t = this.paused;
                    this.setVideoSrc(e, t, !1)
                }).catch(console.error);
                if ("sd-fallback" === (null == (r = this._telecineVideo.drmHandler) ? void 0 : r.state)) return void this._onReady.then(() => {
                    this.setVideoSrc(e, !0, !1)
                }).catch(console.error);
                if ("auto" === this._preload) return void this._onReady.then(() => {
                    this.setVideoSrc(e, !1, !1)
                }).catch(console.error)
            }
            t && this.reset(), t || !this.paused || this.sorcerer || (t = !0);
            let i = this._initializeManifest;
            t && (i = this._initialize);
            const s = e.split("/");
            s.pop();
            const o = `${s.join("/")}/`;
            this._reloadingExistingVideo = !t, this._onReady = this._startPreload(e, this._preload).then(this.loadManifest.bind(this)).then(e => ("string" == typeof this._baseUrl && -1 !== this._baseUrl.indexOf("live-archive") || (this._baseUrl = o), e)).then(i.bind(this)), t && "auto" === this._preload && (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this), !1)), this._onReady = this._addCatchToPromise(this._onReady)
        }, n.getBitrateAtTime = function(e, t) {
            if (!this.sorcerer) return 0;
            const n = this.sorcerer.streamIndexAtTime(e, t);
            return this._streams[t][n] ? this._streams[t][n].bitrate : 0
        }, n.lockStreamIndexes = function() {
            const e = this._restrictedStreamIndexes.map(e => this._streams.video.indexOf(this._streams.video[e])),
                t = !this.paused;
            if (t && (this._ignorePauseEvent = !0, this._video.pause()), this._switching.video = !1, this._brain.lock(e), !this._startedPlaying && "auto" !== this._preload) return;
            const n = Math.max(this.currentTime - 7, 0),
                r = Math.min(this.currentTime + 7, this._video.duration);
            this.sorcerer.removeBuffer(n, r).then(() => {
                !this._startedPlaying && "auto" === this._preload || this.ended ? this._loadSegments() : (this.seekToTime(this.currentTime), t && this.paused && (this._ignorePlayEvent = !0, this._video.play()))
            }).catch(console.error)
        }, n.seekToTime = function(e) {
            if (e === this.currentTime) return Promise.resolve();
            const t = null === this._timeToSeekTo;
            if (t || (this._lastSeekReject && (this._lastSeekReject(), this._lastSeekReject = null), this._seekInProgressPromise = null, this._timeToSeekTo = null, this._resolveSeek = null), this._timeToSeekTo = e, this._handleScrubbing(), this._ready)
                for (const n in this._streams)
                    if (this._streams[n].length > 0) {
                        const e = this.sorcerer[n].activeStreamIndex;
                        this.sorcerer[n].streams[e].abort()
                    }
            return this._seekInProgressPromise = this._getSeekReadyPromiseForTime(e), Promise.all([this._onReady, this._removeBufferPromise]).then(() => {
                this._loadSegments()
            }).catch(console.error), this._paused && 0 === e && this.fire(Sn.SEEKING), t || this.play().catch(this._onPlayError.bind(this)), this._onReady.then(() => this._seekInProgressPromise).catch(e => {})
        }, n.takeSnapshot = function() {}, n.initDrm = function() {}, n.onstalled = function() {
            return !1
        }, n.onseeked = function(e) {
            this._startedPlaying && this._restartLoadSegmentsIntervalWithBackoff()
        }, n.onended = function(t) {
            return e.prototype.onended.call(this, t), !0
        }, n.onseeking = function(e) {
            this._startedPlaying
        }, n._handleScrubbing = function() {
            this._scrubStart(), clearTimeout(this._scrubTimeout), this._scrubTimeout = setTimeout(() => {
                this._scrubEnd()
            }, 200)
        }, n._scrubStart = function() {
            this._scrubbing || (this._scrubbing = !0, _r(this._brain) && (this._brain.scrubInProgress = !0))
        }, n._scrubEnd = function() {
            if (this._scrubbing = !1, _r(this._brain)) {
                this._brain.scrubInProgress = !1;
                const e = this.sorcerer.video.activeStreamIndex;
                this._brain.handleScrubEnd(e), this._loadSegments()
            }
        }, n.ontimeupdate = function(t) {
            if (!this.sorcerer) return !1;
            if (e.prototype.ontimeupdate.call(this), this._gapJumper && this._gapJumper.stop(), 0 === this.currentTime) return this._startedPlaying;
            if (this._timeToSeekTo) return !1;
            if (this._startedPlaying || (this._startedPlaying = !0), this._clearBufferAtTime && this.currentTime >= this._clearBufferAtTime) {
                const e = 2;
                this.sorcerer.removeBuffer(0, this._clearBufferAtTime - e), this._clearBufferAtTime = !1
            }
            const n = this.sorcerer.getDroppedFrameTotal();
            this.fire(An.DROPPED_FRAMES, n);
            const r = this.sorcerer.getResponseSpeeds(),
                i = this._streams.video[this.sorcerer.video.activeStreamIndex],
                s = this._options.tests && this._options.tests.download_bitrate;
            if ((!s || !s.group) && i && this._brain.getCurrentSpeed) {
                const e = {
                    speed: this._brain.getCurrentSpeed(),
                    bitrate: i.bitrate,
                    speeds: r
                };
                this.fire(An.BANDWIDTH, e)
            }
            const o = this._video.buffered.length;
            if (!o) return !0;
            const a = this._video.buffered.end(o - 1);
            return Math.ceil(a) === Math.ceil(this._video.duration) || (Math.abs(this.currentTime - a) < .2 ? (this._ranIntoBuffer || (this.fire(An.STREAM_BUFFER_START, {
                hasLowerStreamIndex: this.sorcerer.video.activeStreamIndex > 0
            }), this._ranIntoBuffer = !0), !1) : void 0)
        }, n._isEnded = function() {
            return !!this.ended || Math.ceil(this.currentTime) === Math.ceil(this._video.duration)
        }, n._loadSegmentsIntervalTick = function() {
            return !!this.sorcerer && !this._isEnded() && (null !== this._preloadSegmentStreamIndex ? (this._loadPreloadSegments(), !0) : 0 !== this.currentTime || this._ready ? (this._loadSegments(), !0) : this._startedPlaying)
        }, n.onprogress = function() {
            this._brain.canPlayFromTimeInStream(this.currentTime, this._getCurrentStream()) && this._ranIntoBuffer && (this.fire(An.STREAM_BUFFER_END), this._ranIntoBuffer = !1)
        }, n.onwaiting = function() {
            return !this._gapJumper || !this._gapJumper.start()
        }, n.onerror = function() {
            return !!this._video.error && (this._video.error.code === this._video.error.MEDIA_ERR_DECODE ? (this.fire(An.SCANNER_ERROR, {
                reason: "encountered media decode error"
            }), !1) : e.prototype.onerror.call(this))
        }, n.pause = function() {
            e.prototype.pause.call(this)
        }, n.play = function() {
            return this._restartLoadSegmentsIntervalWithBackoff(), e.prototype.play.call(this, () => (this._resolveStartPreload && this._resolveStartPreload(), this._reloadingExistingVideo || this._ready || "auto" === this._preload || (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this))), this._onReady.then(() => Promise.resolve(this._seekInProgressPromise))))
        }, n.onpause = function() {
            return this._ignorePauseEvent ? (this._ignorePauseEvent = !1, !1) : (e.prototype.onpause.call(this), !0)
        }, n.onplay = function() {
            return !this._ignorePlayEvent || (this._ignorePlayEvent = !1, !1)
        }, n._addCallbackToPromise = function(e, t, n = !0) {
            let r = e.then(t);
            return n && (r = this._addCatchToPromise(r)), r
        }, n._addCatchToPromise = function(e) {
            return e.catch(e => (this.fire(An.FILE_ERROR, {
                reason: e
            }), new Promise((e, t) => {})))
        }, n._handleBufferForSeek = function() {
            this._ready && this._streams.video[this.sorcerer.video.activeStreamIndex].bitrate / 1e3 > 12e3 && (this._removeBufferPromise = this.sorcerer.removeBuffer())
        }, n._startPreload = function(e, t) {
            return new Promise((n, r) => {
                "none" !== t || this._reloadingExistingVideo && !this.paused ? n(e) : this._resolveStartPreload = () => {
                    n(e), this._resolveStartPreload = null
                }
            })
        }, n._getSeekReadyPromiseForTime = function(e = this._timeToSeekTo) {
            return new Promise((t, n) => {
                const r = this._startedPlaying && 0 === e,
                    i = this._brain.canPlayFromTimeInStream(e, this._getCurrentStream());
                r || i ? t(e) : (this._handleBufferForSeek(), this._resolveSeek = t)
            }).then(e => {
                this._timeToSeekTo = null, this._seekInProgressPromise = null;
                const t = new Promise((e, t) => {
                    this._lastSeekReject = t;
                    const n = () => {
                        e(this._video.currentTime), this._video.removeEventListener("seeked", n)
                    };
                    this._video.addEventListener("seeked", n)
                });
                return this._video.currentTime = e, t
            })
        }, n._handlePreloadChanged = function(e, t) {
            "auto" !== e && "auto" === t && (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this))), e !== t && "none" !== t && this._resolveStartPreload && this._resolveStartPreload()
        }, n._avDurationDifference = function(e) {
            const t = e.audio.reduce((e, t) => e + t.duration, 0),
                n = e.video.reduce((e, t) => e + t.duration, 0),
                r = t / e.audio.length,
                i = n / e.video.length;
            return r + 4 < i ? i - r : 0
        }, n._manifestContainsSegmentSizes = function(e) {
            return e.video.every(e => e.segments.every(e => "size" in e))
        }, n._initializeManifest = function(e) {
            return new Promise((t, n) => {
                if (this._manifest = e, this._streams.video = this._sortVideoStreams(e.video), e.audio) {
                    const t = this._avDurationDifference(e);
                    if (t > 0) return this.fire(An.AV_DURATION_MISMATCH, t), this.fire(An.SCANNER_ERROR, {
                        reason: "Encountered A/V duration mismatch"
                    }), void n();
                    const r = e.audio.filter(e => "opus" === e.codecs),
                        i = e.audio.filter(e => "opus" !== e.codecs),
                        s = Gn.browser.safari || Gn.iOS || Gn.iPadOS || !MediaSource.isTypeSupported('audio/mp4; codecs="opus"') || !r.length ? i : r;
                    this._streams.audio = this._sortAudioStreams(s)
                }
                for (let r = 0; r < this._streams.video.length; r++) {
                    let t = 0;
                    if (e.audio) {
                        const e = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, r),
                            n = this._streams.audio[e];
                        n && (t = n.bitrate)
                    }
                    this._streams.video[r].audioBitrate = t
                }
                _r(this._brain) && this._streams.audio.length > 0 && (this._brain.audioStreams = this._streams.audio), this._initDrm(this._streams.video, this._streams.audio, this._manifest.key_info), this._manifestContainsSegmentSizes(e) || this.resetBrain(!0), this.fire(An.STREAMS_LOADED, this._streams), t()
            })
        }, n._setUpSorcerer = function(e, t) {
            this.sorcerer && this.sorcerer.destroy(), this.sorcerer = new Ii(e, t), this._video.src = URL.createObjectURL(this.sorcerer.mediaSource), this.successfulSegments = this.sorcerer.getSuccessfulSegments(), this.failedSegments = this.sorcerer.getFailedSegments(), this._restartLoadSegmentsIntervalWithBackoff()
        }, n._restartLoadSegmentsIntervalWithBackoff = function(e = !1) {
            this._restartLoadSegmentsInterval(500), clearTimeout(this._slowLoadSegmentTimeout), this._slowLoadSegmentTimeout = setTimeout(() => {
                this._restartLoadSegmentsInterval(5e3)
            }, 6e4), e && this._loadSegmentsIntervalTick()
        }, n._restartLoadSegmentsInterval = function(e) {
            clearInterval(this._loadSegmentsInterval), this._loadSegmentsInterval = setInterval(() => {
                this._loadSegmentsIntervalTick()
            }, e)
        }, n._getDuration = function(e = !1) {
            let t = e ? 1 / 0 : 0;
            for (const n in this._streams) this._streams[n].length && (t = Math[e ? "min" : "max"](t, this._streams[n][0].duration));
            return t
        }, n._initialize = function(e) {
            return this._initializeManifest(e).then(() => {
                const t = this.video && this.video.metadata.percentShown ? this.video.metadata.percentShown : null,
                    n = this._brain.filterStreams(this._streams.video, this._video.clientWidth, this._video.clientHeight, t).length - 1;
                let r = this._streams.video[0];
                this._restrictedStreamIndexes.length && (r = this._streams.video[this._restrictedStreamIndexes[0]]), void 0 !== this._maxPreloadStreamIndex && n <= this._streams.video.indexOf(e.video[this._maxPreloadStreamIndex]) && (r = this._streams.video[n]), this._setUpSorcerer(this._video, {
                    duration: this._getDuration(),
                    fetcherTimeout: 8e3,
                    fetcherRetryAbortErrors: !1
                }), this.sorcerer.on("srcnotsupported", () => {
                    this.fire(An.SCANNER_ERROR, {
                        reason: "this codec is not supported for mediasource playback"
                    })
                });
                const i = this._streams.video.indexOf(r);
                for (const e in this._streams) this._streams[e].forEach((t, n) => {
                    let r = this._getSegmentUrl(n, "init", e);
                    this._useRangeRequests(n, e) && this._streams[e][n].init_segment_range && (r = {
                        url: r,
                        byteRange: this._getRangeForSegment(n, "init", e)
                    }), this.sorcerer.addStream(`${t.mime_type}; codecs="${this._streams[e][n].codecs}"`, r)
                });
                this.sorcerer.video.switchTo(i, !0, {
                    reasonForSwitch: 7
                }), this.sorcerer.on("queued", this._handleQueued.bind(this)), this.sorcerer.on("downloadabort", this._handleAborted.bind(this)), this.sorcerer.on("appendbufferend", this._handleAppendBufferEnd.bind(this)), this.sorcerer.on("downloadstart", this._handleDownloadStart.bind(this)), this.sorcerer.on("downloadend", this._handleDownloadEnd.bind(this)), this.sorcerer.on("downloaderror", this._handleDownloadError.bind(this)), this.sorcerer.on("downloadtimeout", this._handleDownloadTimeout.bind(this)), this.sorcerer.on("quotaexceedederror", this._handleQuotaExceededError.bind(this)), this.sorcerer.video.on("streamchange", this._handleStreamChange.bind(this)), this.sorcerer.video.on("streamchangestart", this._handleStreamChangeStart.bind(this)), this.sorcerer.mediaSource.addEventListener("sourceended", () => {
                    this.fire(Sn.PROGRESS)
                })
            })
        }, n._sortVideoStreams = function(e) {
            const t = e.slice(0);
            return t.sort((function(e, t) {
                const n = e.width * e.height * e.bitrate,
                    r = t.width * t.height * t.bitrate;
                return e.width === t.width && e.height === t.height ? e.framerate - t.framerate : n - r
            })), t
        }, n._sortAudioStreams = function(e) {
            const t = e.slice(0);
            return t.sort((function(e, t) {
                return e.bitrate * e.channels - t.bitrate * t.channels
            })), t
        }, n._useRangeRequests = function(e, t) {
            return !!this._streams[t][e].segments[0].range
        }, n._getRangeForSegment = function(e, t, n) {
            return "init" === t ? this._streams[n][e].init_segment_range : this._streams[n][e].segments[t].range
        }, n._getSegmentPriority = function(e, t, n = "video") {
            return "init" === t ? 0 : this._streams[n][e].segments[t].start
        }, n._getSegmentUrl = function(e, t, n = "video", r = !1) {
            if ("init" === t && !this._streams[n][e].init_segment_range && -1 === this._streams[n][e].init_segment.indexOf(".")) return function(e) {
                return ur(e).buffer
            }(this._streams[n][e].init_segment);
            let i = this._baseUrl;
            const s = this._manifest.base_url && -1 !== this._manifest.base_url.indexOf("//");
            if (s && (i = this._manifest.base_url), this._manifest.base_url && !s && (i += this._manifest.base_url), this._streams[n][e].base_url && (i += this._streams[n][e].base_url), this._useRangeRequests(e, n)) return i;
            if ("init" === t) return i += this._streams[n][e].init_segment, i;
            const o = this._streams[n][e].segments[t];
            o.url && (i += o.url);
            const a = -1 !== i.indexOf("akamaized"),
                u = -1 === i.indexOf("?") ? "?" : "&";
            return r && this.CMCDLogger && a && (i += `${u}${this.CMCDLogger.getLogAsQueryParam(o,n)}`), i
        }, n._key = function(e, t, n) {
            return `${e}:${t}:${n}`
        }, n._isFinalSegment = function(e, t, n) {
            return t === this._streams[n][e].segments.length - 1
        }, n._getCurrentlyLoadingStreamsForSegment = function(e, t) {
            const n = [],
                r = this._streamsForSegment[e];
            if (!r) return n;
            for (let i = 0; i < r.length; i++) this._waitingOnSet.has(this._key(r[i], e, t)) && n.push(r[i]);
            return n
        }, n.getCurrentStream = function(e = "video") {
            return this._getCurrentStream(0, e)
        }, n._getCurrentStream = function(e = 0, t = "video") {
            return void 0 !== this.sorcerer && (e = this.sorcerer[t].activeStreamIndex), this._streams[t][e]
        }, n._getStreamIndexToLoadAndSwitchReason = function(e) {
            let t = this._streams.video;
            const n = this.video && this.video.metadata.percentShown ? this.video.metadata.percentShown : null;
            if (t = this._brain.filterStreams(t, this._video.clientWidth, this._video.clientHeight, n), 0 === t.length) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            if (this._switching.video && !_r(this._brain)) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const r = t[t.length - 1];
            if (r.id !== this._lastTargetStreamId) {
                this._lastTargetStreamId = r.id;
                const e = {
                    index: this._streams.video.indexOf(r),
                    streams: this._streams.video
                };
                this.fire(An.STREAM_TARGET_CHANGE, e)
            }
            const i = this._getCurrentStream();
            return this._brain.shouldPowerUp(t, i, e).then(e => !1 === e.index ? this._brain.shouldPowerDown(t, i).then(e => !1 === e.index ? {
                index: e.index,
                reasonForSwitch: e.reasonForSwitch
            } : {
                index: this._streams.video.indexOf(t[e.index]),
                reasonForSwitch: e.reasonForSwitch
            }) : {
                index: this._streams.video.indexOf(t[e.index]),
                reasonForSwitch: e.reasonForSwitch
            })
        }, n._loadSegmentsForType = function(e = "video") {
            this._getStreamIndexToLoadAndSwitchReason(!1).then(t => {
                let {
                    index: n,
                    reasonForSwitch: r
                } = t, i = {
                    reasonForSwitch: r
                };
                "audio" === e && (!1 === n && (n = this.sorcerer.video.activeStreamIndex), n = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, n), this.sorcerer.audio.activeStreamIndex === n && (n = !1));
                let s = !1;
                !1 !== n && (s = n > this.sorcerer[e].activeStreamIndex, this._switching[e] = !0, this.sorcerer[e].switchTo(n, !0, i).then(() => {
                    this._switching[e] = !1
                }).catch(console.error));
                let o = s;
                const a = this._brain.getSegmentsToLoad(o, e, this._getCurrentStream()),
                    u = this.sorcerer[e].activeStreamIndex;
                for (let c = 0; c < a.length; c++) {
                    const t = this._getSegmentUrl(u, a[c], e, !0),
                        n = this._getCurrentlyLoadingStreamsForSegment(a[c], e);
                    if (n.length > 1) continue;
                    if (1 === n.length && u <= n[0]) continue;
                    const r = this._isFinalSegment(u, a[c], e),
                        i = {
                            stream: u,
                            segment: a[c],
                            type: e
                        },
                        s = this.sorcerer[e].streams[u];
                    let o = t;
                    this._useRangeRequests(u, e) && (o = {
                        url: o,
                        byteRange: this._getRangeForSegment(u, a[c], e)
                    });
                    const l = this._getSegmentPriority(u, a[c], e),
                        h = "video" === e;
                    let d = null;
                    0 === u && "video" === e && (d = 16e3);
                    let f = null;
                    try {
                        f = this._streams[e][u].segments[a[c]].size
                    } catch (rl) {}
                    s.addSegment(o, {
                        identifier: i,
                        isFinalSegment: r,
                        priority: l,
                        includeWithBandwidthChecks: h,
                        timeout: d,
                        size: f
                    }).catch(e => {})
                }
            }).catch(console.error)
        }, n._loadPreloadSegments = function() {
            for (const e in this._streams) {
                if (0 === this._streams[e].length) continue;
                let t = 0;
                const n = this._brain.getSegmentsToLoad(!1, e, this._getCurrentStream());
                n.length > 0 && (t = n[0]);
                let r = this._preloadSegmentStreamIndex;
                "audio" === e && (r = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, this._preloadSegmentStreamIndex));
                const i = this._key(r, t, e);
                if (this._waitingOnSet.has(i)) continue;
                const s = this._getSegmentUrl(r, t, e),
                    o = this._isFinalSegment(r, t, e),
                    a = this.sorcerer[e].streams[r],
                    u = {
                        stream: r,
                        segment: t,
                        type: e
                    },
                    c = !0;
                let l = s;
                this._useRangeRequests(r, e) && (l = {
                    url: l,
                    byteRange: this._getRangeForSegment(r, t, e)
                }), a.addSegment(l, {
                    identifier: u,
                    isFinalSegment: o,
                    loadOnly: c,
                    priority: 0
                }).catch(e => {})
            }
        }, n._loadSegments = function() {
            return this._onReady && this._onReady.then(() => {
                for (const e in this._streams) this._streams[e].length > 0 && this._loadSegmentsForType(e)
            })
        }, n._handleQueued = function(e) {
            this._waitingOnSet.add(this._key(e.stream, e.segment, e.type)), this._streamsForSegment[e.segment] || (this._streamsForSegment[e.segment] = []), -1 === this._streamsForSegment[e.segment].indexOf(e.stream) && this._streamsForSegment[e.segment].push(e.stream)
        }, n._clearWaitingOn = function(e) {
            (this._streamsForSegment[e.segment] || []).forEach(t => {
                this._waitingOnSet.delete(this._key(t, e.segment, e.type))
            })
        }, n._handleAborted = function(e) {
            this._streamsForSegment[e.segment] && this._clearWaitingOn(e)
        }, n._handleAppendBufferEnd = function(e) {
            this.fire(An.APPEND_BUFFER_END, {
                identifier: e
            }), this._restartLoadSegmentsIntervalWithBackoff(), this._checkSwitchUp && e.stream === this._lastStreamIndex && (this._checkSwitchUp = !1, this._clearBufferAtTime = this._streams.video[e.stream].segments[e.segment].start), this._streamsForSegment[e.segment] && this._clearWaitingOn(e);
            const t = this._brain.canPlayFromTimeInStream(this._timeToSeekTo, this._getCurrentStream());
            null !== this._timeToSeekTo && this._resolveSeek && t && (this._resolveSeek(this._timeToSeekTo), this._resolveSeek = null), this._gapJumper && this._gapJumper.onSegmentAppended()
        }, n._handleDownloadStart = function(e) {
            this.fire(An.DOWNLOAD_START, {
                identifier: e
            })
        }, n._handleDownloadEnd = function(e, t) {
            this.fire(An.DOWNLOAD_END, {
                identifier: e,
                data: t
            })
        }, n._handleDownloadError = function(e, t) {
            this._clearWaitingOn(e);
            let n = An.DOWNLOAD_ERROR;
            410 === t && (n = An.MEDIA_URL_EXPIRED), this.fire(n, {
                identifier: e,
                status: t
            })
        }, n._handleDownloadTimeout = function(e, t) {
            this.fire(An.DOWNLOAD_TIMEOUT, {
                identifier: e,
                data: t
            }), this._streamsForSegment[e.segment] && this._clearWaitingOn(e), "video" === e.type ? this._switching.video = !1 : "audio" === e.type && (this._switching.audio = !1)
        }, n._handleQuotaExceededError = function(e) {
            this.fire(An.QUOTA_EXCEEDED_ERROR, {
                buffered: e
            })
        }, n._handleStreamChangeStart = function(e, t) {
            const n = {
                previousStreamIndex: this._manifest.video.indexOf(this._streams.video[e]),
                index: this._manifest.video.indexOf(this._streams.video[t]),
                streams: this._manifest.video
            };
            this.fire(An.STREAM_CHANGE_START, n)
        }, n._handleStreamChange = function(e, t) {
            e > this._lastStreamIndex && this.currentTime > 0 && (this._checkSwitchUp = !0), this._lastStreamIndex = e;
            const n = {
                index: this._manifest.video.indexOf(this._streams.video[e]),
                streams: this._manifest.video,
                metadata: t
            };
            this.fire(An.STREAM_CHANGE, n)
        }, n._initDrm = function(e = [], t = [], n = {}) {
            const r = this._telecineVideo.drmHandler;
            if (!r) return;
            const i = {
                audio: t.map(e => `${e.mime_type};codecs="${e.codecs}"`),
                video: e.map(e => `${e.mime_type};codecs="${e.codecs}"`)
            };
            r.init(this, i, n), r.setFallbackCallback(() => this.pause())
        }, n._setupCMCDLogger = function() {
            var e, t;
            (null == (e = this._options.tests) || null == (t = e.cmcd) ? void 0 : t.group) && (this.CMCDLogger = new ki(this, this._options.sessionMetadata))
        }, n._loadMediaManifest = function() {
            return import ("./media-manifest.module.js")
        }, on(t, [{
            key: "preload",
            get: function() {
                return this._preload
            },
            set: function(e) {
                this._handlePreloadChanged(this._preload, e), this._preload = e
            }
        }, {
            key: "videoElement",
            get: function() {
                return this._video
            }
        }, {
            key: "videoWidth",
            get: function() {
                const e = this._getCurrentStream();
                return e ? e.width : this._video.videoWidth
            }
        }, {
            key: "videoHeight",
            get: function() {
                const e = this._getCurrentStream();
                return e ? e.height : this._video.videoHeight
            }
        }, {
            key: "restrictedStreamIndexes",
            get: function() {
                return this._restrictedStreamIndexes
            },
            set: function(e = []) {
                this._restrictedStreamIndexes.join(",") !== e.join(",") && (this._restrictedStreamIndexes = e, this._onReady.then(() => this.lockStreamIndexes()).catch(console.error))
            }
        }, {
            key: "currentTime",
            get: function() {
                return null !== this._timeToSeekTo ? this._timeToSeekTo : this._video.currentTime
            },
            set: function(e) {
                (this._startedPlaying || 0 !== e) && this.seekToTime(e)
            }
        }, {
            key: "downloadSpeed",
            get: function() {
                return this._lastDownloadBitrate
            }
        }, {
            key: "brainDebug",
            get: function() {
                const e = this.sorcerer && this._brain && this._brain.getCurrentSpeed ? this._brain.getCurrentSpeed() : null;
                let t = this.sorcerer && this.sorcerer.getResponseSpeeds ? this.sorcerer.getResponseSpeeds() : null;
                return t = t ? t.slice(-20) : [], {
                    currentSpeed: e,
                    responseSpeeds: t
                }
            }
        }, {
            key: "isLowerProfileAvailable",
            get: function() {
                return this.sorcerer ? this.sorcerer.video.activeStreamIndex > 0 : null
            }
        }]), t
    }(Or),
    Ci = function() {
        function e(e) {
            this._scanner = e, this._currentTime = 0, this._latencyInterval = setInterval(this._onLatencyInterval.bind(this), 500)
        }
        var t = e.prototype;
        return t.destroy = function() {
            clearInterval(this._latencyInterval)
        }, t._onLatencyInterval = function() {
            const e = this._scanner.videoElement,
                t = this._scanner.getCurrentStream();
            if (!e || !t) return;
            this._currentTime = e.currentTime;
            const n = this._computeLatency();
            null !== n && (this._latency = n, this._scanner.lowLatencyMode ? Gn.browser.ie || Gn.browser.safari || null !== this._scanner.presentationDelay && (e.playbackRate = 1) : e.playbackRate = 1)
        }, t._estimateLiveEdge = function() {
            const e = this._scanner.getCurrentStream();
            if (!e) return null;
            const t = e.segments[0],
                n = this._scanner.videoElement.buffered.length && (null == t ? void 0 : t.start);
            return t && e.hasProgramDateTime && n ? n + (Date.now() - t.programDateTime) / 1e3 : e.edge
        }, t._computeLatency = function() {
            const e = this._estimateLiveEdge();
            return null === e || 0 === this._currentTime ? null : e - this._currentTime
        }, t._getForwardBufferLength = function() {
            const e = this._scanner.videoElement,
                t = this._scanner.getCurrentStream();
            if (!e || !t) return 0;
            const n = e.buffered.length;
            return n ? e.buffered.end(n - 1) : t.edge - this._currentTime
        }, on(e, [{
            key: "latency",
            get: function() {
                return this._latency
            }
        }, {
            key: "liveSyncPosition",
            get: function() {
                const e = this._estimateLiveEdge(),
                    t = this._scanner.presentationDelay,
                    n = this._scanner.getCurrentStream();
                return null === e || null === t || null === n ? 0 : Math.min(n.edge, e - t - this.edgeStalled)
            }
        }, {
            key: "edgeStalled",
            get: function() {
                const e = this._scanner.getCurrentStream();
                if (!e) return 0;
                const t = 3 * (this._scanner.lowLatencyMode && e.partTargetDuration || e.targetDuration);
                return Math.max(e.age - t, 0)
            }
        }]), e
    }();
const Li = [1, 2, 5];
let Ni = function(e) {
    function t(t, n = {}) {
        var r;
        return (r = e.call(this, t, n) || this)._UPSHIFT_BANDWIDTH_THRESHOLD = .4, r._DOWNSHIFT_BANDWIDTH_THRESHOLD = .6, r.consecutiveStreamIndex = {}, r.isNewPlayback = !0, r
    }
    ln(t, e), on(t, [{
        key: "displayName",
        get: function() {
            return "Live"
        }
    }]);
    var n = t.prototype;
    return n.optimalStream = function(e, t) {
        var n, r;
        this.isNewPlayback && ((null == (r = this.scanner.sorcerer) ? void 0 : r.getResponseSpeeds().length) >= 2 && (this.isNewPlayback = !1));
        if (1 === e.length) return {
            index: 0,
            reasonForSwitch: 6
        };
        if (this.isNewPlayback) {
            let t = 0,
                n = 0,
                r = this.scanner.videoElement.clientHeight,
                i = [];
            for (let s = 0; s < e.length; s++) {
                let o = e[s].height;
                i.push(o), o < r && o > n && (t = s, n = e[s].height)
            }
            return t = Math.max(0, t - 1), {
                index: t,
                reasonForSwitch: 4
            }
        }
        const i = this.getCurrentSpeed();
        let s = t,
            o = t;
        for (let f = 0; f < e.length; f++) i * this._UPSHIFT_BANDWIDTH_THRESHOLD > e[f].bandwidth && (s = f), i * this._DOWNSHIFT_BANDWIDTH_THRESHOLD > e[f].bandwidth && (o = f);
        const a = t < s ? s : o;
        this._clearConsecutiveStreamIndexes(a), this.consecutiveStreamIndex[a]++;
        const u = this.scanner.lowLatencyMode ? .5 : 1.5,
            c = this.scanner.segmentLength * u,
            l = this.scanner.videoElement,
            h = l.buffered,
            d = null == (n = this._options.mediaSourceScanner) ? void 0 : n.droppedFrameSwitchPercent;
        return h && 0 !== h.length ? h.end(h.length - 1) - l.currentTime < c ? {
            index: 0 !== t ? t - 1 : 0,
            reasonForSwitch: 1
        } : t > 0 && !isNaN(d) && this.hasTooManyDroppedFrames(t, this.scanner.getCurrentStream(), d) ? (this.blacklist(t), this.scanner.fire(An.DROPPED_FRAME_PERCENT_EXCEEDED), {
            index: t - 1,
            reasonForSwitch: 2
        }) : this.consecutiveStreamIndex[a] > 2 && a !== t ? {
            index: a,
            reasonForSwitch: 3
        } : {
            index: t,
            reasonForSwitch: null
        } : {
            index: 0,
            reasonForSwitch: 5
        }
    }, n.getCurrentSpeed = function() {
        var e;
        return null == (e = this.scanner.sorcerer) ? void 0 : e.getCurrentSpeed({
            type: "average",
            howMany: 5,
            weights: Li
        })
    }, n._clearConsecutiveStreamIndexes = function(e) {
        this.consecutiveStreamIndex[e] || (this.consecutiveStreamIndex[e] = 0);
        for (const t in this.consecutiveStreamIndex) this.consecutiveStreamIndex.hasOwnProperty(t) && parseInt(t, 10) !== e && (this.consecutiveStreamIndex[t] = 0)
    }, n.getAvailabilityStart = function(e) {
        return this._getSegmentAvailabilityStart(e.edge)
    }, n.getAvailabilityEnd = function(e) {
        return this._getSegmentAvailabilityEnd(e.edge)
    }, n.getSegmentsToLoad = function(e, t, n) {
        var r, i, s;
        const {
            currentTime: o,
            sorcerer: a,
            bufferTarget: u
        } = this.scanner, c = null == (r = a[t]) || null == (i = r.sourceBuffer) ? void 0 : i.buffered, l = (null == c ? void 0 : c.length) ? c.start(c.length - 1) : 0, h = Rt(Math.max(o, l), c);
        if (!e && h >= u) return [];
        const d = this._getSegmentAvailabilityStart(n.edge),
            f = this._getSegmentAvailabilityEnd(n.edge),
            _ = this.scanner.lowLatencyMode && (null == (s = n.parts) ? void 0 : s.length),
            p = (_ ? n.parts : n.segments).filter(t => !!t.uri && (e || !this.scanner.isSegmentAdded(t)) && !(t.end < d || t.start > f));
        return _ && p.forEach((e, t) => {
            for (; e = e.dependentOn;) p.includes(e) || this.scanner.isStreamSegmentAdded(e) || p.splice(t, 0, e)
        }), a[t].activeStreamIndex, p
    }, n._getSegmentAvailabilityStart = function(e) {
        const t = e - this._getPresentationDelay();
        return Math.max(0, t)
    }, n._getSegmentAvailabilityEnd = function(e) {
        const t = this._getPresentationDelay(),
            n = this.scanner.bufferTarget,
            r = e - Math.max(0, t - n);
        return Math.max(0, r)
    }, n._getPresentationDelay = function() {
        return this.scanner.presentationDelay || this.scanner.manifest.presentationDelay
    }, t
}(Ri);
const Mi = ["disabled", "hidden", "showing"],
    xi = ["subtitles", "captions", "descriptions", "chapters", "metadata"],
    Fi = ["ar", "fa", "he", "iw", "ku", "ps", "sd", "ur", "yi"],
    Ui = new WeakMap,
    Bi = new WeakMap;
let ji = function() {
    function e({
        kind: e,
        src: t = null,
        label: n = "",
        language: r = "",
        id: i = ar()
    }, s) {
        if (-1 === xi.indexOf(e)) throw gr(12, "SYNTAX_ERR", "Syntax Error");
        ft(this), Object.defineProperties(this, {
            kind: {
                value: e,
                enumerable: !0
            },
            label: {
                value: n,
                enumerable: !0
            },
            language: {
                value: r,
                enumerable: !0
            },
            id: {
                value: `${i}`,
                enumerable: !0
            },
            rtl: {
                value: -1 !== Fi.indexOf(r.substr(0, 2)),
                enumerable: !0
            }
        }), this.video = s, this.src = t, this._modeHasBeenSet = !1, Ui.set(this, "disabled")
    }
    return e.prototype.dispatchEvent = function(e) {
        this.fire(e, {
            target: this
        })
    }, on(e, [{
        key: "mode",
        get: function() {
            return Ui.get(this)
        },
        set: function(e) {
            if (Mi.indexOf(e) > -1) {
                if (this._modeHasBeenSet = !0, Ui.get(this) === e) return;
                Ui.set(this, e), this.video.currentScanner && this.video.currentScanner.setModeForTrack(this, e), this.dispatchEvent("modechange")
            }
        }
    }, {
        key: "src",
        get: function() {
            return Bi.get(this)
        },
        set: function(e) {
            Bi.set(this, e), this.video.fire(An.TEXT_SRC_UPDATE, this)
        }
    }, {
        key: "cues",
        get: function() {
            return this.video.currentScanner ? this.video.currentScanner.getCuesForTrack(this) : []
        }
    }, {
        key: "activeCues",
        get: function() {
            return this.video.currentScanner ? this.video.currentScanner.getActiveCuesForTrack(this) : []
        }
    }]), e
}();

function Vi(e) {
    var t = /^(?:(\d{2,}):)?(\d{2}):(\d{2})[,.](\d{3})$/.exec(e);
    if (!t) return -1;
    var n = parseInt(t[4], 10) / 1e3;
    return n += parseInt(t[3], 10), t[2] && (n += 60 * parseInt(t[2], 10)), t[1] && (n += 60 * parseInt(t[1], 10) * 60), n
}

function Hi(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Xi(e, t) {
    try {
        var n = e()
    } catch (rl) {
        return t(rl)
    }
    return n && n.then ? n.then(void 0, t) : n
}

function qi(e, t) {
    return e && e.then ? e.then(t) : t(e)
}
const Gi = Gn.browser.ie || Gn.browser.edge ? .5 : .2;

function Wi() {}

function Ki(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }
}

function Yi(e, t) {
    var n = e();
    return n && n.then ? n.then(t) : t(n)
}

function $i(e, t) {
    if (!t) return e && e.then ? e.then(Wi) : Promise.resolve()
}
let zi = function(e) {
    function t(t, n = {}) {
        var r, i, s;
        (s = e.call(this, t, n) || this)._playInitiated = !1, s._captionsEnabled = !1, s._STREAM_SWITCH_CHECK_INTERVAL = 2e3, s._DOWN_SHIFT_CHECK_INTERVAL = 1e4, s.reset();
        const o = n.lowLatencyMode ? 5 : 12;
        return s.bufferTarget = n.bufferTarget || o, s.presentationDelay = n.presentationDelay || o, s.lowLatencyMode = n.lowLatencyMode, s._timeoutTest = null == (r = s._options.tests) || null == (i = r.llhls_timeout) ? void 0 : i.group, window.addEventListener("online", () => {
            s.play()
        }), s
    }
    ln(t, e), on(t, null, [{
        key: "displayName",
        get: function() {
            return "HLSLiveScanner"
        }
    }, {
        key: "supported",
        get: function() {
            return "undefined" != typeof MediaSource && MediaSource.isTypeSupported
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            return ["application/x-mpegURL"]
        }
    }, {
        key: "supportsPlaybackRate",
        get: function() {
            return !1
        }
    }]);
    var n = t.prototype;
    return n.deactivate = function() {
        e.prototype.deactivate.call(this), this.reset()
    }, n.reset = function() {
        var e, t, n;
        null == (e = this._sorcerer) || e.destroy(), null == (t = this._manifestLoader) || t.stop(), null == (n = this._latencyController) || n.destroy(), this._videoReady = new It, this._sorcerer = null, this._streams = {}, this._streams.video = [], this._streams.audio = [], this._lastStreamIndex = 0, this._isOnline = !1, this._hasLiveEventEnded = !1, this._timeSinceLastStreamSwitchCheck = 0, this._timeSinceLastDownShift = Number.NEGATIVE_INFINITY, this._lastStallCurrentTime = -1, this._abr = new Ni(this, this._options), this._latencyController = new Ci(this), this._restrictedStreamIndexes = [], this._switching = {}, this._segmentsAdded = {}, this._captionsAdded = {}
    }, n.endLive = function() {
        var t;
        this._isOnline = !1, null == (t = this._manifestLoader) || t.stop(), this._sorcerer && (this._sorcerer.abortFetches(), this._sorcerer.endOfStream()), this._hasLiveEventEnded = !0, e.prototype.deactivate.call(this), this.fire(Sn.ENDED)
    }, n._signalOnline = function() {
        this._isOnline || (this._isOnline = !0, this.fire(In.STREAM_ONLINE))
    }, n._signalOffline = function() {
        this._isOnline && (this._isOnline = !1, this.fire(In.STREAM_OFFLINE))
    }, n._toggleConnection = function(e) {
        e ? this._signalOnline() : this._signalOffline()
    }, n._loadManifest = function(e) {
        try {
            const t = this;
            if (t._hasLiveEventEnded) return;
            t._manifestLoader && (t._manifestLoader.stop(), t._manifestLoader.off());
            let n = [t._loadMediaManifest()];
            return t.video.metadata.p2pReady && n.push(t.video.metadata.p2pReady), Hi(Promise.allSettled(n), (function([n]) {
                const {
                    M3U8Loader: r,
                    PLAYLIST_UPDATE: i,
                    PLAYLIST_ERROR: s,
                    convertTsCodecs: o
                } = n.value;
                return t._manifestLoader = new r, t._manifestLoader.lowLatencyMode = t.lowLatencyMode, t._manifestLoader.on(i, t._onPlaylistUpdate.bind(t)), t._manifestLoader.on(s, e => {
                    t._signalOffline()
                }), qi(Xi((function() {
                    const n = t.video.metadata.playlistRefreshUrl;
                    return Hi(t._manifestLoader.start(e, n), (function(e) {
                        t._manifest = e, t._signalOnline()
                    }))
                }), (function(e) {
                    throw t._signalOffline(), t.endLive(), e
                })), (function(e) {
                    t._streams.video = Qi(function(e) {
                        return e.filter(t => t.codecs.split(".")[0] === e[0].codecs.split(".")[0])
                    }(function(e) {
                        const t = e.slice(0);
                        return t.sort((function(e, t) {
                            const n = e.width * e.height * e.bitrate,
                                r = t.width * t.height * t.bitrate;
                            return e.width === t.width && e.height === t.height ? e.framerate - t.framerate : n - r
                        })), t
                    }(t._manifest.video))), t._streams.audio = Qi(_t(pt(t._streams.video, ({
                        audio: e
                    }) => e)));
                    const {
                        index: n,
                        reasonForSwitch: r
                    } = t._getStream("video", !0);
                    let i = {
                        reasonForSwitch: r
                    };
                    return Hi(t._manifestLoader.switchTo("video", n), (function() {
                        let e, r = [];
                        if (t._streams.audio.length) {
                            let {
                                index: n
                            } = t._getStream("audio", !0);
                            e = n, r.push(t._manifestLoader.switchTo("audio", e))
                        }
                        if (t.manifest.captions && t.manifest.captions.length > 0) {
                            const {
                                index: e
                            } = t._getStream("subtitles", !0);
                            r.push(t._manifestLoader.switchTo("subtitles", e))
                        }
                        return Hi(Promise.all(r), (function() {
                            var r, s;
                            null == (r = t._sorcerer) || r.destroy(), t._sorcerer = new Ii(t._video, {
                                fetcherRetryAbortErrors: !1,
                                fetcherTimeout: 8e3
                            }), t._sorcerer.initFrameDropper(), t._streams.video.forEach(e => {
                                t._sorcerer.addStream(o(hr(t._manifestLoader.activeStream("video").mimeType, e.codecs)), e.initSegment)
                            }), t._streams.audio.forEach(e => {
                                t._sorcerer.addStream(o(hr(t._manifestLoader.activeStream("audio").mimeType, e.codecs)), e.initSegment)
                            }), t.fire(An.STREAMS_LOADED, t._streams), t.manifest.captions && t.manifest.captions.length > 0 && (t.manifest.captions.forEach(t._loadTextTrack.bind(t)), t.fire(An.TEXT_TRACKS_AVAILABLE)), t._setUpMediaSorcererEvents(), t._sorcerer.video.switchTo(n, !1, i), t._streams.audio.length && (null == (s = t._sorcerer.audio) || s.switchTo(e, !1))
                        }))
                    }))
                }))
            }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, n._refreshManifest = function() {
        try {
            const e = this;
            return function(e) {
                if (e && e.then) return e.then(Wi)
            }(Xi((function() {
                return Hi(e._manifestLoader.update(), (function() {
                    e._signalOnline()
                }))
            }), (function() {
                e._signalOffline()
            })))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, n._setUpMediaSorcererEvents = function() {
        this._sorcerer.video.on("streamchange", this._handleStreamChange.bind(this)), this._sorcerer.video.on("streamchangestart", this._handleStreamChangeStart.bind(this)), this._sorcerer.on("downloadend", this._handleDownloadEnd.bind(this)), this._sorcerer.on("downloadtimeout", this._handleDownloadTimeout.bind(this)), this._sorcerer.on("downloadabort", this._handleDownloadAbort.bind(this)), this._sorcerer.on("appendbufferend", this._handleBufferAppend.bind(this))
    }, n._handleDownloadEnd = function(e, t) {
        if (e && e.isInitSegmentRequest) return;
        const n = this._getCurrentStream();
        t.extraContext = {
            liveAvail: {
                start: this._abr.getAvailabilityStart(n),
                end: this._abr.getAvailabilityEnd(n)
            }
        }, this.fire(An.DOWNLOAD_END, {
            identifier: e,
            data: t
        })
    }, n._handleDownloadTimeout = function(e, t) {
        e && e.isInitSegmentRequest || (this._key(e), this._clearSegment(e), this._switching[e.type] = !1, this.fire(An.DOWNLOAD_TIMEOUT, {
            identifier: e,
            data: t
        }))
    }, n._handleDownloadAbort = function(e) {
        e && e.isInitSegmentRequest || (this._key(e), this._clearSegment(e))
    }, n._handleStreamChangeStart = function(e, t) {
        const n = {
            previousStreamIndex: this._streams.video.indexOf(this._streams.video[e]),
            index: this._streams.video.indexOf(this._streams.video[t]),
            streams: this._streams.video
        };
        this.fire(An.STREAM_CHANGE_START, n)
    }, n._handleStreamChange = function(e, t = {}) {
        this.fire(An.STREAM_CHANGE, {
            index: e,
            streams: this._streams.video,
            metadata: t
        })
    }, n._handleBufferAppend = function(e) {
        const {
            type: t,
            stream: n
        } = e, r = this.sorcerer[t].sourceBuffer.buffered, i = this._getSegmentById(e);
        i && r.length && (this._streams[t][n].playlist.timeOffset = r.end(r.length - 1) - (i.end - i.timeOffset))
    }, n._key = function({
        type: e,
        segment: t,
        part: n
    }) {
        return `${e}_${t}_${n}`
    }, n._getSegmentById = function({
        type: e,
        stream: t,
        segment: n,
        part: r
    }) {
        const i = this._streams[e][t].getSegmentBySN(n);
        return (null == i ? void 0 : i.getPart(r)) || i
    }, n._clearSegment = function(e) {
        if (e.part > 0) {
            const t = cn(cn({}, e), {}, {
                part: e.part - 1
            });
            this._clearSegment(t)
        }
        const t = this._key(e);
        delete this._segmentsAdded[t]
    }, n.isSegmentAdded = function(e) {
        return !!this._segmentsAdded[this._key(e)]
    }, n.isStreamSegmentAdded = function(e) {
        const t = this._key(e),
            n = this._sorcerer[e.type].activeStreamIndex;
        return !!this._segmentsAdded[t] && this._segmentsAdded[t].stream === n
    }, n._onPlaylistUpdate = function(e, t) {
        try {
            const r = this,
                {
                    type: i
                } = e;
            var n;
            return r.fire(An.STREAM_UPDATED, e), "subtitles" === i ? void(r._captionsEnabled && (null == (n = r.manifest.captions) ? void 0 : n.length) > 0 && r._addTextTrackCue()) : (t || r._loadSegmentsForType(i), r._toggleConnection(r._hasNewSegments(i) || !r._atDurationEnd()), r._checkForPlaybackGap(), (r.lowLatencyMode || r.video.metadata.p2pReady) && r._checkForPlaybackStall(), Hi())
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, n._loadTextTrack = function({
        label: e,
        language: t
    }, n) {
        if (!this._captionsTrack) {
            const r = new ji({
                label: e,
                id: n,
                kind: "captions",
                language: t
            }, this._telecineVideo);
            this._telecineVideo.textTracks = ir([r]), this._captionsTrack = this.addTextTrack(r)
        }
    }, n._addTextTrackCue = function() {
        try {
            const e = this;
            return Hi(e._videoReady, (function() {
                e.manifest.captions && e.manifest.captions[0].segments.forEach(Ki((function(t) {
                    const n = `${t.type}_${t.mediaSequenceNumber}`;
                    if (!e._captionsAdded[n]) return e._captionsAdded[n] = !0, Hi(ei(t.url).text(), (function(t) {
                        const n = function(e) {
                                var t = 0,
                                    n = e.split(/(?:(?:\r\n|\n){2,})/),
                                    r = [],
                                    i = null;
                                do {
                                    0 === t && /^\uFEFF?WEBVTT(?: .*)?/.test(n[t]) && t++, (i = /^(?:(.*)(?:\r\n|\n))?([\d:,.]+) --> ([\d:,.]+)(.*)?(?:\r\n|\n)([\s\S]*)/.exec(n[t])) && r.push({
                                        startTime: Vi(i[2]),
                                        endTime: Vi(i[3]),
                                        text: i[5]
                                    }), t++
                                } while (t < n.length);
                                return r
                            }(t),
                            r = function(e) {
                                const t = e.match(/=MPEGTS:(\d+),/);
                                return (t && t[1] || 0) / 9e4
                            }(t);
                        n.forEach(t => {
                            t.startTime = r + t.startTime, t.endTime = r + t.endTime;
                            const n = new(window.VTTCue || window.TextTrackCue)(t.startTime, t.endTime, t.text);
                            e._captionsTrack.addCue(n)
                        })
                    }))
                })))
            }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, n._hasNewSegments = function(e) {
        var t;
        const n = this._getCurrentStream(e),
            r = 3 * (this.lowLatencyMode ? 3 : 1);
        return (null == (t = n.playlist) ? void 0 : t.misses) < r
    }, n._waitForEnoughSegments = function() {
        try {
            var e, t, n;
            const r = this;
            if (!(null == (e = r._options) || null == (t = e.tests) || null == (n = t.live_verify_duration) ? void 0 : n.group)) return Promise.resolve();
            const i = 1e3 * r.bufferTarget,
                s = r.bufferTarget / 2,
                o = Date.now();
            return Hi(r._videoReady, (function() {
                const e = Ki((function() {
                    return r.availableDuration >= s ? Promise.resolve(!0) : Date.now() - o >= i ? Promise.resolve(!1) : Hi(Et(100), (function() {
                        return Hi(r._refreshManifest(), (function() {
                            return e()
                        }))
                    }))
                }));
                return e()
            }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, n._loadSegments = function() {
        try {
            const e = this;
            return Hi(e._videoReady, (function() {
                for (const t in e._streams) e._streams[t].length > 0 && e._loadSegmentsForType(t)
            }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, n._loadSegmentsForType = function(e) {
        try {
            const t = this;
            return Hi(t._videoReady, (function() {
                const {
                    index: n,
                    reasonForSwitch: r
                } = t._getStream(e);
                let i;
                return Yi((function() {
                    if (n >= 0 && n !== t.sorcerer[e].activeStreamIndex) return i = n > t.sorcerer[e].activeStreamIndex, t._switching[e] = !0, Hi(t._manifestLoader.switchTo(e, n), (function() {
                        let i = {
                            reasonForSwitch: r
                        };
                        t.sorcerer[e].switchTo(n, !0, i).then(() => {
                            t._switching[e] = !1
                        }).catch(console.error)
                    }))
                }), (function() {
                    return Hi(Et(0), (function() {
                        const n = t.lowLatencyMode && void 0 !== i,
                            r = t._sorcerer[e].activeStreamIndex,
                            s = t._getCurrentStream(e, r),
                            o = t._abr.getSegmentsToLoad(n, e, s),
                            a = t._getSegmentTimeoutMs();
                        o.forEach(n => {
                            const i = t._key(n),
                                o = {
                                    type: e,
                                    stream: r,
                                    segment: n.segment,
                                    part: n.part
                                },
                                u = "video" === e && !n.hint;
                            let c = a;
                            if (n.hint && t._playInitiated && n.start > t.currentTime) {
                                const e = 1e3 * (n.start - t.currentTime);
                                c = Math.min(8e3, e + a)
                            }
                            const l = s.bitrate / 8 * n.duration,
                                h = t.sorcerer[e].streams[r],
                                d = t._preventExpiredSegmentUsage(n);
                            h.addSegment(d, {
                                identifier: o,
                                includeWithBandwidthChecks: u,
                                priority: n.programDateTime,
                                excludeConnectTime: t.lowLatencyMode,
                                timeout: t._timeoutTest || t.lowLatencyMode ? c : 8e3,
                                size: t._timeoutTest || t.lowLatencyMode ? l : void 0
                            }).catch(e => {
                                e instanceof fi || e instanceof Mr || t._clearSegment(o)
                            }), t._segmentsAdded[i] = o
                        })
                    }))
                }))
            }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, n._preventExpiredSegmentUsage = function(e) {
        var t;
        let n = null == e ? void 0 : e.url;
        const r = null == (t = this._manifestLoader) ? void 0 : t.baseUrl;
        return r && n && !n.startsWith(r) && (n = `${r}${e.uri}`), n
    }, n._getStream = function(e, t = !1) {
        var n, r;
        if (this._switching[e]) return {
            index: -1,
            reasonForSwitch: null
        };
        if ("subtitles" === e) {
            const e = this._manifestLoader.activeStream("video");
            return {
                index: e.subtitles[e.currentRenditions.subtitles].index,
                reasonForSwitch: null
            }
        }
        if ("audio" === e) {
            const e = this._manifestLoader.activeStream("video");
            return {
                index: e.audio[e.currentRenditions.audio].index,
                reasonForSwitch: null
            }
        }
        if (!t && or(this._timeSinceLastStreamSwitchCheck) < this._STREAM_SWITCH_CHECK_INTERVAL) return {
            index: this._lastStreamIndex,
            reasonForSwitch: null
        };
        this._timeSinceLastStreamSwitchCheck = sr();
        const i = null == (n = this.video) || null == (r = n.metadata) ? void 0 : r.percentShown,
            s = this._abr.filterStreams(this._streams.video, this._video.clientWidth, this._video.clientHeight, i);
        if (0 === s.length) return {
            index: this._lastStreamIndex,
            reasonForSwitch: null
        };
        const {
            index: o,
            reasonForSwitch: a
        } = this._abr.optimalStream(s, this._lastStreamIndex), u = s[o], c = this._streams.video.indexOf(u);
        if (c >= 0 && (t || c !== this._lastStreamIndex)) {
            if (c > this._lastStreamIndex && or(this._timeSinceLastDownShift) < this._DOWN_SHIFT_CHECK_INTERVAL) return {
                index: this._lastStreamIndex,
                reasonForSwitch: a
            };
            c < this._lastStreamIndex && (this._timeSinceLastDownShift = sr());
            const e = {
                index: c,
                streams: this._streams.video
            };
            return this.fire(An.STREAM_TARGET_CHANGE, e), this._lastStreamIndex = c, {
                index: c,
                reasonForSwitch: a
            }
        }
        return {
            index: this._lastStreamIndex,
            reasonForSwitch: a
        }
    }, n.getCurrentStream = function(e = "video") {
        return this._getCurrentStream(e)
    }, n._getCurrentStream = function(e = "video", t = 0) {
        return void 0 !== this._sorcerer && null !== this._sorcerer && (t = this._sorcerer[e].activeStreamIndex), this._streams[e][t]
    }, n._checkForPlaybackStall = function() {
        if (this._video.currentTime === this._lastStallCurrentTime && sr() - this._lastStallCheckTime >= 1e3 && this._shouldBeMakingProgress()) {
            const e = "Jumping forward 0.1s" + ` because of stall at time of ${this._video.currentTime}`;
            this.fire(In.STALL_JUMP, {
                msg: e
            }), this._video.currentTime += .1
        }
        this._lastStallCurrentTime = this._video.currentTime, this._lastStallCheckTime = sr()
    }, n._shouldBeMakingProgress = function() {
        return 0 !== this._video.readyState && !!this._video.buffered.length && !this._video.paused && this._hasContentFor(this._video.buffered, this._video.currentTime)
    }, n._hasContentFor = function(e, t) {
        for (let n = 0; n < e.length; n++)
            if (!(t < e.start(n) - .1 || t > e.end(n) - .5)) return !0;
        return !1
    }, n._checkForPlaybackGap = function() {
        const e = this.buffered;
        if (!e.length) return;
        const t = e.length,
            n = this._video.currentTime;
        let r, i, s;
        try {
            r = function(e, t) {
                if (!e || !e.length) return null;
                if (1 === e.length && e.end(0) - e.start(0) < 1e-6) return null;
                let n;
                for (let r = 0; r < e.length; r++)
                    if (e.start(r) > t && (0 === r || e.end(r - 1) - t <= .5)) {
                        n = r;
                        break
                    }
                return n >= 0 ? n : null
            }(e, n)
        } catch (rl) {
            throw DOMException, rl
        }
        if (null === r) return;
        if (0 === this._video.readyState) return;
        if (this._video.paused) return;
        if (t <= r) return;
        try {
            i = e.start(r), s = e.end(t - 1)
        } catch (rl) {
            throw DOMException, rl
        }
        const o = i - n,
            a = s - i,
            u = this.lowLatencyMode ? 1 : 2;
        if (a > 0 && a <= this.segmentLength * u) {
            const e = "Preventing jump too close to buffered end time." + ` Would have jumped to: ${i}.` + ` Last buffered end time ${s}.`;
            this.fire(In.BUFFER_GAP_JUMP_PREVENT, {
                msg: e
            })
        } else {
            if (0 === r) {
                const e = `Jumping forward ${o}` + ` seconds because of gap before start time of ${i}`;
                this.fire(In.BUFFER_GAP_JUMP, {
                    msg: e
                })
            } else {
                const t = `Jumping forward ${o} seconds because of gap starting at` + ` ${e.end(r-1)} and ending at ${i}`;
                this.fire(In.BUFFER_GAP_JUMP, {
                    msg: t
                })
            }
            this._video.currentTime = i + .1
        }
    }, n._atDurationEnd = function() {
        const e = this.buffered;
        return !!(e && e.length && this._video.currentTime + Gi > e.end(e.length - 1))
    }, n.setVideoSrc = function(e) {
        try {
            const t = this;
            return Hi(t._startPreload(t._preload), (function() {
                return Hi(t._loadManifest(e), (function() {
                    t._video.src = URL.createObjectURL(t._sorcerer.mediaSource), t._videoReady.resolve()
                }))
            }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, n._startPreload = function(e) {
        try {
            const t = this;
            return t._preloadReady = new It, "none" === e && t.paused || t._preloadReady.resolve(), t._preloadReady
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, n.getBitrateAtTime = function(e, t) {
        if (!this._sorcerer) return 0;
        const n = this._sorcerer.streamIndexAtTime(e, t);
        return this._streams[t][n] ? this._streams[t][n].bandwidth : 0
    }, n.onprogress = function() {
        this._checkForPlaybackGap()
    }, n.ondurationchange = function() {
        this._checkForPlaybackGap()
    }, n.ontimeupdate = function() {
        if (!this._sorcerer) return;
        e.prototype.ontimeupdate.call(this), this.fire(An.DROPPED_FRAMES, this._sorcerer.getDroppedFrameTotal());
        const t = this._getCurrentStream();
        if (t) {
            const e = {
                speed: this._abr.getCurrentSpeed(),
                bitrate: t.bitrate,
                speeds: this._sorcerer.getResponseSpeeds()
            };
            this.fire(An.BANDWIDTH, e)
        }!this._isOnline && this._atDurationEnd() && this.fire(In.STREAM_OFFLINE), !this.lowLatencyMode && or(this._timeSinceLastStreamSwitchCheck) > this._STREAM_SWITCH_CHECK_INTERVAL && this._loadSegments()
    }, n.seekToTime = function() {}, n.onpause = function() {
        var e;
        null == (e = this._manifestLoader) || e.stop(), this._sorcerer && (this._sorcerer.abortFetches(), this._segmentsAdded = {}, this._sorcerer.removeBuffer().catch(() => {}))
    }, n.onplay = function() {
        this._playInitiated && this._refreshManifest()
    }, n.pause = function() {
        e.prototype.pause.call(this)
    }, n.play = function() {
        const t = this;
        return e.prototype.play.call(this, Ki((function() {
            return t._preloadReady.resolve(), Yi((function() {
                if (t._playInitiated) return t._segmentsAdded = {}, qi(Xi((function() {
                    return $i(t._sorcerer.removeBuffer())
                }), (function(e) {})), (function() {
                    return $i(t._refreshManifest())
                }))
            }), (function() {
                return Hi(t._videoReady, (function() {
                    return Hi(t._waitForEnoughSegments(), (function() {
                        return t._loadSegments(), Hi(t._bufferAvailable(), (function() {
                            const e = Math.max(t._latencyController.liveSyncPosition, t._video.buffered.start(0));
                            t.currentTime = e, t._playInitiated = !0
                        }))
                    }))
                }))
            }))
        })))
    }, n._bufferAvailable = function() {
        return new Promise(e => {
            const t = () => {
                this.buffered.length && (this._sorcerer.off("appendbufferend", t), e())
            };
            this._sorcerer.on("appendbufferend", t), t()
        })
    }, n._getSegmentTimeoutMs = function() {
        return this._abr.getSegmentRelativeTimeout(this._streams.video, this._getCurrentStream("video"), 1e3 * this.segmentLength)
    }, n._loadMediaManifest = function() {
        return import ("./media-manifest.module.js")
    }, n.setCaptionsState = function(e) {
        this._captionsEnabled = e
    }, on(t, [{
        key: "preload",
        get: function() {
            return this._preload
        },
        set: function(e) {
            this._preload !== e && "none" !== e && this._preloadReady.resolve(), this._preload = e
        }
    }, {
        key: "latency",
        get: function() {
            var e;
            return null == (e = this._latencyController) ? void 0 : e.latency
        }
    }, {
        key: "lowLatencyMode",
        get: function() {
            return this._lowLatencyMode
        },
        set: function(e) {
            this._lowLatencyMode = e, this._manifestLoader && (this._manifestLoader.lowLatencyMode = e)
        }
    }, {
        key: "downloadSpeed",
        get: function() {
            return this._abr.getCurrentSpeed()
        }
    }, {
        key: "restrictedStreamIndexes",
        get: function() {
            return this._restrictedStreamIndexes
        },
        set: function(e) {
            this._restrictedStreamIndexes.join(",") !== e.join(",") && (this._restrictedStreamIndexes = e, this._abr.lock(this._restrictedStreamIndexes))
        }
    }, {
        key: "videoWidth",
        get: function() {
            return this._stream ? this._stream.width : this._video.videoWidth
        }
    }, {
        key: "videoHeight",
        get: function() {
            return this._stream ? this._stream.height : this._video.videoHeight
        }
    }, {
        key: "currentTime",
        get: function() {
            return this._video.currentTime
        },
        set: function(e) {
            this._video.readyState > 0 && (this._video.currentTime = e)
        }
    }, {
        key: "isLowerProfileAvailable",
        get: function() {
            return this._sorcerer ? this._sorcerer.video.activeStreamIndex > 0 : null
        }
    }, {
        key: "sorcerer",
        get: function() {
            return this._sorcerer
        }
    }, {
        key: "segmentLength",
        get: function() {
            var e, t, n, r;
            return this.lowLatencyMode && (null == (e = this._manifestLoader) || null == (t = e.activeStream("video")) ? void 0 : t.partTargetDuration) || (null == (n = this._manifestLoader) || null == (r = n.activeStream("video")) ? void 0 : r.targetDuration)
        }
    }, {
        key: "segmentCount",
        get: function() {
            var e, t, n;
            return (null == (e = this._manifestLoader) || null == (t = e.activeStream("video")) || null == (n = t.segments) ? void 0 : n.length) || 0
        }
    }, {
        key: "availableDuration",
        get: function() {
            const e = this.segmentCount * this.segmentLength;
            return isNaN(e) ? 0 : e
        }
    }]), t
}(Or);

function Qi(e) {
    return e.forEach((e, t) => {
        e.index = t
    }), e
}
const Ji = document.createElement("video"),
    Zi = {
        "application/x-mpegURL": "application/x-mpegURL"
    };
let es = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this)._apiManifestUrl = null, r.reset(), window.addEventListener("online", () => {
                r.play()
            }), r
        }
        ln(t, e), on(t, null, [{
            key: "displayName",
            get: function() {
                return "NativeHLSLiveScanner"
            }
        }, {
            key: "supported",
            get: function() {
                return t.supportedVideoTypes.length > 0
            }
        }, {
            key: "supportedVideoTypes",
            get: function() {
                const e = [];
                if ("function" != typeof Ji.canPlayType) return e;
                for (const t in Zi) {
                    const n = Zi[t];
                    Ji.canPlayType(n).replace(/^no$/, "") && e.push(t)
                }
                return e
            }
        }, {
            key: "supportsPlaybackRate",
            get: function() {
                return !1
            }
        }]);
        var n = t.prototype;
        return n.deactivate = function() {
            e.prototype.deactivate.call(this), this.reset()
        }, n.reset = function() {
            this._manifestRefreshTimeout && clearTimeout(this._manifestRefreshTimeout), this._onReady = null, this._manifestRefreshTimeout = null, this._isOnline = !1, this._hasLiveEventEnded = !1, this._hlsAvailabilityCheckTimeout = null, this._bufferedIndex = 0, this._manifestRefreshTimeout = null, this._abr = new Ni(this, this._options), this._restrictedStreamIndexes = []
        }, n.endLive = function() {
            this._isOnline = !1, this._hasLiveEventEnded = !0, clearTimeout(this._manifestRefreshTimeout), this._video.pause(),
                function(e) {
                    setTimeout(e, 0)
                }(() => {
                    e.prototype.deactivate.call(this), this.fire(Sn.ENDED)
                })
        }, n._setUpRefreshTimer = function() {
            const e = Ot(this.video.metadata.playlistRefreshUrl.split("?")[1]);
            e.expires && (this._manifestRefreshTimeout = setTimeout(() => {
                this._refreshLiveApiPlaylistUrl()
            }, 1e3 * (e.expires - 10)))
        }, n._refreshLiveApiPlaylistUrl = function(e = 0) {
            const t = this.video.metadata.playlistRefreshUrl;
            return ei(t).json().then(n => {
                if (!("url" in n)) throw new Error(`Error parsing 'url' key from player live API refresh endpoint: ${t} ${n}`);
                return this._loadNativeHlsManifest(n.url.hls).then(() => (this.play(), this._checkHlsAvailability(5e3), null)).catch(() => this._refreshLiveApiPlaylistUrl(++e))
            }).catch(() => {
                if (e >= 3) throw new Error(`Manifest failed to load after ${e} attempts.`);
                return ++e, this._refreshLiveApiPlaylistUrl(e)
            })
        }, n._setUpLiveEventListeners = function() {
            this.on(In.STREAM_OFFLINE, () => {
                this._isOnline = !1
            })
        }, n._setUpNativeHls = function(e) {
            return this._setUpLiveEventListeners(), this._isOnline = !0, this.fire(In.STREAM_ONLINE), this._checkHlsAvailability(5e3), Promise.resolve(e)
        }, n._loadNativeHlsManifest = function(e) {
            return this._apiManifestUrl = e, /json=1/.test(e) ? ei(e).json().then(e => {
                if (!("url" in e)) throw new Error(`Error parsing 'url' key from Live API manifest endpoint: ${this._apiManifestUrl} ${e}`);
                this._video.src = e.url, this._setUpRefreshTimer()
            }).catch(e => {
                const t = this.video.metadata.playlistRefreshUrl;
                return ei(t).json().then(e => {
                    if (!("url" in e)) throw new Error(`Error parsing 'url' key from player live API refresh endpoint: ${t} ${e}`);
                    this._apiManifestUrl = e.url.ios, this._video.src = e.url.ios, this._setUpRefreshTimer()
                })
            }) : (this._video.src = e, this._setUpRefreshTimer(), Promise.resolve())
        }, n._checkHlsAvailability = function(e) {
            "number" == typeof Gn.iOS && Gn.iOS < 9 || this._hlsAvailabilityCheckTimeout || (this._hlsAvailabilityCheckTimeout = setTimeout(() => {
                if (!this._isOnline) return;
                const e = new XMLHttpRequest;
                e.onload = () => {
                    410 !== e.status ? (200 !== e.status && this.fire(In.STREAM_OFFLINE), e.response.match(/^#EXTM3U\n#EXT-X-VERSION:3\n$/) && this.fire(In.STREAM_OFFLINE)) : this._refreshLiveApiPlaylistUrl()
                }, e.onerror = () => {
                    this.fire(In.STREAM_OFFLINE)
                }, /json=1/.test(this._apiManifestUrl) ? ei(this._apiManifestUrl).json().then(t => {
                    "url" in t || this.fire(In.STREAM_OFFLINE), e.open("GET", t.url), e.send()
                }).catch(() => {
                    e.open("GET", this._apiManifestUrl), e.send()
                }) : (e.open("GET", this._apiManifestUrl), e.send())
            }, e))
        }, n.setVideoSrc = function(e) {
            this._onReady = this._setUpNativeHls(e).then(() => (this._apiManifestUrl = e, this._loadNativeHlsManifest(e)))
        }, n.onprogress = function() {
            this._hlsAvailabilityCheckTimeout && (clearTimeout(this._hlsAvailabilityCheckTimeout), this._hlsAvailabilityCheckTimeout = null)
        }, n.onstalled = function() {
            this._checkHlsAvailability(1e4)
        }, n.onerror = function() {
            return this._video.error.code === this._video.error.MEDIA_ERR_SRC_NOT_SUPPORTED ? (ei(this._apiManifestUrl).then(() => {
                e.prototype.onerror.call(this)
            }).catch(t => {
                t instanceof Fr ? this.fire(Sn.ERROR, new pr("MediaNetworkError", "A network error ocurred while fetching the media.")) : e.prototype.onerror.call(this)
            }), !1) : e.prototype.onerror.call(this)
        }, n.onwaiting = function() {
            this._checkHlsAvailability(1e4)
        }, n.seekToTime = function() {}, n.play = function() {
            return e.prototype.play.call(this, () => this._onReady)
        }, on(t, [{
            key: "currentTime",
            get: function() {
                return this._video.currentTime
            },
            set: function(e) {
                this._video.currentTime = e
            }
        }]), t
    }(Or),
    ts = function() {
        function e(e, t = {}) {
            this._telecine = e, this._element = e._element, this._options = t
        }
        on(e, null, [{
            key: "displayName",
            get: function() {
                return "Effect"
            }
        }, {
            key: "supported",
            get: function() {
                return !1
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return []
            }
        }]);
        var t = e.prototype;
        return t.activate = function() {
            throw new pr("NotImplemented", "The effect must implement the activate method.")
        }, t.deactivate = function() {
            throw new pr("NotImplemented", "The effect must implement the deactivate method.")
        }, e
    }();
const ns = new WeakMap,
    rs = new WeakMap;
let is = function() {
    function e({
        src: e,
        mime: t,
        id: n = ar(),
        priority: r = 0,
        metadata: i = {}
    }, s) {
        if (!e) throw new TypeError("Must provide a src for the file.");
        if (!t) throw new TypeError("Must provide a mime type for the file.");
        Object.defineProperties(this, {
            mime: {
                value: t,
                enumerable: !0
            },
            id: {
                value: `${n}`,
                enumerable: !0
            },
            metadata: {
                value: i,
                enumerable: !0
            }
        }), this.video = s, this.priority = r, this.src = e
    }
    return on(e, [{
        key: "priority",
        get: function() {
            return ns.get(this)
        },
        set: function(e) {
            if (!("number" == typeof(e = parseInt(e, 10)) && isFinite(e) && Math.floor(e) === e && e >= 0)) throw new TypeError("The file priority must be an integer greater than or equal to 0.");
            ns.set(this, e)
        }
    }, {
        key: "src",
        get: function() {
            return rs.get(this)
        },
        set: function(e) {
            rs.set(this, e), this.video.fire(An.FILE_SRC_UPDATE, this)
        }
    }, {
        key: "restrictedStreamIndexes",
        get: function() {
            if (!Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.video.currentScanner), "restrictedStreamIndexes")) throw new ReferenceError("The current scanner does not support streams.");
            return this.video.currentScanner.restrictedStreamIndexes
        },
        set: function(e = []) {
            if (!Array.isArray(e)) throw new TypeError("Indexes must be an array.");
            if (!Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.video.currentScanner), "restrictedStreamIndexes")) throw new ReferenceError("The current scanner does not support streams.");
            this.video.currentScanner.restrictedStreamIndexes = e
        }
    }]), e
}();

function ss() {
    return !!(window.MediaKeys && window.navigator && window.navigator.requestMediaKeySystemAccess && window.MediaKeySystemAccess && window.MediaKeySystemAccess.prototype.getConfiguration || window.WebKitMediaKeys)
}

function os(e, t, n) {
    "string" == typeof t && (t = function(e) {
        const t = new ArrayBuffer(2 * e.length),
            n = new Uint16Array(t);
        for (let r = 0, i = e.length; r < i; r++) n[r] = e.charCodeAt(r);
        return n
    }(t));
    let r = 0;
    const i = new ArrayBuffer(e.byteLength + 4 + t.byteLength + 4 + n.byteLength),
        s = new DataView(i);
    new Uint8Array(i, r, e.byteLength).set(e), r += e.byteLength, s.setUint32(r, t.byteLength, !0), r += 4;
    const o = new Uint8Array(i, r, t.byteLength);
    return o.set(t), r += o.byteLength, s.setUint32(r, n.byteLength, !0), r += 4, new Uint8Array(i, r, n.byteLength).set(n), new Uint8Array(i, 0, i.byteLength)
}

function as(e, t = !0) {
    const n = t ? e.buffer : e,
        r = String.fromCharCode.apply(null, new Uint16Array(n)),
        i = (new DOMParser).parseFromString(r, "application/xml"),
        s = {},
        o = i.getElementsByTagName("HttpHeader");
    for (let a = 0; a < o.length; ++a) {
        const e = o[a].querySelector("name"),
            t = o[a].querySelector("value");
        s[e.textContent] = t.textContent
    }
    return [s, e = ur(i.querySelector("Challenge").textContent)]
}

function us(e, t, n, r) {
    const i = r.audio || [],
        s = r.video || [],
        o = [{
            video: "HW_SECURE_ALL",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "HW_SECURE_DECODE",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "HW_SECURE_CRYPTO",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "SW_SECURE_DECODE",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "SW_SECURE_CRYPTO",
            audio: "SW_SECURE_CRYPTO"
        }].map(e => {
            const t = {
                persistentState: "optional",
                sessionTypes: ["temporary"]
            };
            return s.length && (t.videoCapabilities = s.map(t => ({
                contentType: t,
                robustness: e.video
            }))), i.length && (t.audioCapabilities = i.map(t => ({
                contentType: t,
                robustness: e.audio
            }))), t
        }),
        a = Object.keys(e).map(r => {
            const i = e[r].id;
            if (t || n) {
                let e = null;
                const n = t ? window.WebKitMediaKeys : window.MSMediaKeys;
                try {
                    e = new n(i)
                } catch (rl) {}
                return Promise.resolve({
                    name: i,
                    keySystem: e
                })
            }
            return navigator.requestMediaKeySystemAccess(i, o).then(e => e.createMediaKeys()).catch(e => {}).then(e => ({
                name: i,
                keySystem: e
            }))
        });
    return Promise.all(a)
}

function cs(e, t) {
    let n = null;
    return Object.keys(e).forEach(r => {
        t.name === e[r].id && (n = e[r])
    }), n
}
let ls = function() {
        function e(e, t) {
            this._cdms = e.cdms, this._lrToken = e.lr_token, this._userId = e.user, this._assetId = e.asset, this._useHls = t, this._licenseUrl = null, this._keySession = null, this._preferredKeySystem = null, this._encryptedEventName = null, this._boundGenerateRequest = this._generateRequest.bind(this)
        }
        var t = e.prototype;
        return t.init = function(e, t = {}) {
            return this._video = e._video, this._scanner = e, ss() ? (this._licenseRequestMetadata = function(e, t) {
                const n = {},
                    r = `${window.screen.availWidth}x${window.screen.availHeight}`,
                    i = window.devicePixelRatio;
                return n.merchant = "vimeo", n.sessionId = JSON.stringify({
                    ua: navigator.userAgent,
                    token: e,
                    resolution: r,
                    pixelRatio: i
                }), n.userId = t, n
            }(this._lrToken, this._userId), us(this._cdms, this._useHls, !1, t).then(e => {
                if (e.forEach(e => {
                        e.keySystem && (this._preferredKeySystem = e)
                    }), !this._preferredKeySystem) return this._scanner.fire(An.EME_UNSUPPORTED), !1;
                const t = cs(this._cdms, this._preferredKeySystem);
                return this._encryptedEventName = "encrypted", this._licenseUrl = t.license_url, this._useHls && (this._certificateUrl = t.certificate_url, this._encryptedEventName = "webkitneedkey"), this._video.addEventListener(this._encryptedEventName, this._boundGenerateRequest), this._useHls ? (this._video.webkitSetMediaKeys(this._preferredKeySystem.keySystem), !0) : this._video.mediaKeys ? (this._keySession = this._video.mediaKeys.createSession(), this._keySession.addEventListener("message", e => this._getLicense(e)), !0) : (this._keySession = this._preferredKeySystem.keySystem.createSession(), this._keySession.addEventListener("message", e => this._getLicense(e)), this._video.setMediaKeys(this._preferredKeySystem.keySystem), !0)
            })) : (this._scanner.fire(An.EME_UNSUPPORTED), !1)
        }, t.destroy = function() {
            this._keySession && this._keySession.sessionId && this._keySession.close(), this._video.removeEventListener(this._encryptedEventName, this._boundGenerateRequest)
        }, t._generateRequest = function(e) {
            return "com.apple.fps.1_0" === this._preferredKeySystem.name ? (this._loadFairPlayCertificate().then(t => {
                this._contentId = `assetId=${this._assetId}`;
                const n = os(e.initData, this._contentId, t);
                return this._keySession = this._preferredKeySystem.keySystem.createSession("video/mp4", n), this._keySession.addEventListener("webkitkeymessage", e => this._getLicense(e)), t
            }).catch(e => {
                this._scanner.fire(e.error, e.payload)
            }), !0) : !this._keySession.sessionId && !this._activeKeySession && (this._activeKeySession = this._keySession.generateRequest(e.initDataType, e.initData).catch(() => {
                this._scanner.fire(An.DRM_FAILURE)
            }), !0)
        }, t._getLicense = function(e) {
            return new Promise((t, n) => {
                this._activeKeySession = null;
                const r = new XMLHttpRequest;
                r.keySession = e.target, r.responseType = "arraybuffer", r.open("POST", this._licenseUrl), r.setRequestHeader("dt-custom-data", window.btoa(JSON.stringify(this._licenseRequestMetadata)));
                let i = e.message;
                if ("com.microsoft.playready" === this._preferredKeySystem.name) {
                    const t = as(e.message, !1),
                        n = t[0];
                    Object.keys(n).forEach(e => {
                        r.setRequestHeader([e], n[e])
                    }), i = t[1]
                }
                if ("com.apple.fps.1_0" === this._preferredKeySystem.name) {
                    let e = btoa(String.fromCharCode.apply(null, i));
                    e = encodeURIComponent(e), i = `spc=${e}&${this._contentId}`, r.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
                }
                r.onload = () => {
                    if (403 !== r.status)
                        if (r.status >= 400) n({
                            error: An.DRM_FAILURE
                        });
                        else try {
                            this._scanner.fire(An.DRM_AUTH_SUCCESS);
                            const e = new Uint8Array(r.response);
                            let n = e.buffer;
                            "com.apple.fps.1_0" === this._preferredKeySystem.name && (n = function(e) {
                                let t = window.atob(e.trim());
                                return "<ckc>" === t.substr(0, 5) && "</ckc>" === t.substr(-6) && (t = t.slice(5, -6)), new Uint8Array(atob(t).split("").map(e => e.charCodeAt(0)))
                            }(btoa(String.fromCharCode.apply(null, e)))), r.keySession.update(n), t()
                        } catch (rl) {
                            n(`Error updating key session: ${rl}`)
                        } else {
                            const e = JSON.parse(r.getResponseHeader("x-dt-error-message"));
                            n({
                                error: An.DRM_AUTH_FAILURE,
                                payload: {
                                    text: e.error,
                                    code: e.error_code
                                }
                            })
                        }
                }, r.onerror = n, r.send(i)
            }).catch(e => {
                this._scanner.fire(e.error, e.payload)
            })
        }, t._loadFairPlayCertificate = function() {
            return new Promise((e, t) => {
                const n = new XMLHttpRequest;
                n.responseType = "arraybuffer", n.open("GET", this._certificateUrl), n.setRequestHeader("dt-custom-data", window.btoa(JSON.stringify(this._licenseRequestMetadata))), n.onload = () => {
                    if (403 !== n.status)
                        if (n.status >= 400) t({
                            error: An.DRM_FAILURE
                        });
                        else try {
                            e(new Uint8Array(n.response))
                        } catch (rl) {
                            t(rl)
                        } else {
                            const e = JSON.parse(n.getResponseHeader("x-dt-error-message"));
                            t({
                                error: An.DRM_AUTH_FAILURE,
                                payload: {
                                    text: e.error,
                                    code: e.error_code
                                }
                            })
                        }
                }, n.onerror = t, n.send()
            })
        }, e
    }(),
    hs = function() {
        function e() {
            this._cdmList = {}, this._preferredKeySystems = {}, this._licenseTokenUrls = {}, this._licenseUrls = {}, this._certificateUrls = {}, this._keySessions = {}, this._keyChainState = "default", this._keyTypes = {
                KEYCHAIN_DEFAULT: "default",
                KEYCHAIN_SD_FALLBACK: "sd-fallback"
            }
        }
        var t = e.prototype;
        return t.getAllKeySessions = function() {
            return Object.values(this._keySessions) || []
        }, t.getCdms = function(e) {
            return this._cdmList[e]
        }, t.getAllPreferredKeySystems = function() {
            return this._preferredKeySystems
        }, t.addCdms = function(e, t) {
            this._cdmList[t] = e
        }, t.addKeySession = function(e, t) {
            this._keySessions[t] = e
        }, t.addLicenseTokenUrl = function(e, t) {
            this._licenseTokenUrls[t] = e
        }, t.addLicenseUrl = function(e, t) {
            this._licenseUrls[t] = e
        }, t.addPreferedKeySystem = function(e, t) {
            this._preferredKeySystems[t] = e
        }, t.closeAllKeySessions = function() {
            for (let e in this._keySessions) this._keySessions[e] && this._keySessions[e].sessionId && this._keySessions[e].close()
        }, on(e, [{
            key: "state",
            get: function() {
                return this._keyChainState
            },
            set: function(e) {
                Object.values(this._keyTypes).indexOf(e) < 0 || (this._keyChainState = e)
            }
        }, {
            key: "activeKeySession",
            get: function() {
                return this._keySessions[this._keyChainState]
            }
        }, {
            key: "activeKeySystem",
            get: function() {
                return this._preferredKeySystems[this._keyChainState]
            }
        }, {
            key: "keyTypes",
            get: function() {
                return this._keyTypes
            }
        }, {
            key: "activeLicenseTokenUrl",
            get: function() {
                return this._licenseTokenUrls[this._keyChainState]
            }
        }, {
            key: "activeLicenseUrl",
            get: function() {
                return this._licenseUrls[this._keyChainState]
            }
        }]), e
    }(),
    ds = function() {
        function e(e, t) {
            this._hasFallbackAssets = !!e.fallback_asset, this._useHls = t, this._fallbackCallback = () => null, this._currentTime = 0, this._encryptedEventName = null, this._boundGenerateRequest = this._generateRequest.bind(this), this._boundOnKeyStatus = this._onKeyStatus.bind(this), this._keyChain = new hs, this._keyTypes = this._keyChain.keyTypes, this._keyChain.state = this._keyTypes.KEYCHAIN_DEFAULT, this._keyChain.addCdms(e.cdms, this._keyTypes.KEYCHAIN_DEFAULT), this._hasFallbackAssets && this._keyChain.addCdms(e.fallback_cdms, this._keyTypes.KEYCHAIN_SD_FALLBACK)
        }
        var t = e.prototype;
        return t.init = function(e, t = {}, n = {}) {
            return this._video = e._video, this._scanner = e, this._useMs = !!window.MSMediaKeys, ss() || this._useMs ? this._keyChain.state === this._keyTypes.KEYCHAIN_SD_FALLBACK ? this.setUpKeySystem(t, n, this._keyTypes.KEYCHAIN_SD_FALLBACK).then(() => {
                this._scanner.currentTime = this._currentTime, this._scanner.play()
            }) : this.setUpKeySystem(t, n).then(() => this.setUpKeySystem(t, n, this._keyTypes.KEYCHAIN_SD_FALLBACK)) : (this._scanner.fire(An.EME_UNSUPPORTED), Promise.reject())
        }, t.setUpKeySystem = function(e, t, n = this._keyTypes.KEYCHAIN_DEFAULT) {
            return new Promise((r, i) => {
                const s = this._keyChain.getCdms(n);
                return s || i(), us(s, this._useHls, this._useMs, e).then(e => {
                    this._keyChain.addPreferedKeySystem(e.find(e => e.keySystem), n);
                    const r = this._keyChain.activeKeySystem && cs(s, this._keyChain.activeKeySystem);
                    if (!r) throw this._scanner.fire(An.EME_UNSUPPORTED), new Error("No valid key system was found.");
                    this._keyChain.addLicenseTokenUrl(r.license_url, n);
                    const i = t && t.inits && t.inits[r.id];
                    return i || this._addEncryptedHandler(r, n), this._setMediaKeys(n).then(() => {
                        const e = this._keyChain.state === n;
                        return i && e && this._generateRequest(i.cenc, n)
                    })
                }).then(r)
            })
        }, t.destroy = function() {
            this._keyChain && this._keyChain.closeAllKeySessions(), this._video && this._video.removeEventListener(this._encryptedEventName, this._boundGenerateRequest)
        }, t._switchKeyChainState = function(e) {
            return new Promise(t => {
                this._keyChain.state = e, this._keyChain.activeKeySession.addEventListener("message", e => this._getLicense(e)), t()
            })
        }, t._addEncryptedHandler = function(e, t) {
            this._encryptedEventName = "encrypted", this._keyChain.addLicenseUrl(e.license_url, t), this._useHls ? (this._certificateUrl = e.certificate_url, this._encryptedEventName = "webkitneedkey") : this._useMs && (this._encryptedEventName = "msneedkey"), this._video.addEventListener(this._encryptedEventName, this._boundGenerateRequest)
        }, t._setMediaKeys = function(e) {
            return new Promise(t => {
                if (this._useMs) {
                    const e = () => {
                        this._video.msSetMediaKeys(this._keyChain.activeKeySystem.keySystem), this._video.removeEventListener("loadedmetadata", e), t()
                    };
                    this._video.readyState >= 1 ? e() : this._video.addEventListener("loadedmetadata", e)
                } else {
                    if (this._useHls) this._video.webkitSetMediaKeys(this._keyChain.activeKeySystem.keySystem);
                    else {
                        const t = this._video.mediaKeys || this._keyChain.activeKeySystem.keySystem;
                        this._keyChain.addKeySession(this._createSession(t), e), e === this._keyChain.state && this._keyChain.activeKeySession.addEventListener("message", e => this._getLicense(e)), this._video.mediaKeys || this._video.setMediaKeys(this._keyChain.activeKeySystem.keySystem)
                    }
                    t()
                }
            })
        }, t._createSession = function(e, t, n) {
            const r = e.createSession(t, n);
            if (!r) throw new Error("Could not create key session");
            return r
        }, t._generateRequest = function(e, t) {
            t = t || this._keyChain.state;
            const n = new Error("A decryption key error was encountered");
            return "com.apple.fps.1_0" === this._keyChain.activeKeySystem.name ? (this._loadFairPlayCertificate(this._certificateUrl).then(r => {
                this._contentId = function(e) {
                    var t = function(e) {
                            const t = new Uint16Array(e.buffer);
                            return String.fromCharCode.apply(null, t)
                        }(e),
                        n = document.createElement("a");
                    return n.href = t, n.hostname
                }(e.initData);
                const i = os(e.initData, this._contentId, r);
                return this._keyChain.addKeySession(this._createSession(this._keyChain.activeKeySystem.keySystem, "video/mp4", i), t), this._keyChain.activeKeySession.contentId = this._contentId, this._keyChain.activeKeySession.addEventListener("webkitkeymessage", e => this._getLicense(e)), this._keyChain.activeKeySession.addEventListener("webkitkeyerror", e => {
                    throw n
                }), r
            }).catch(e => {
                this._scanner.fire(e.error, e.payload)
            }), !0) : "com.microsoft.playready" === this._keyChain.activeKeySystem.name ? (this._keyChain.addKeySession(this._createSession(this._video.msKeys, "video/mp4", e.initData), t), this._keyChain.activeKeySession.addEventListener("mskeymessage", e => this._getLicense(e)), this._keyChain.activeKeySession.addEventListener("mskeyerror", e => {
                throw n
            }), !0) : !this._keyChain.activeKeySession.sessionId && !this._activeKeySession && (this._keyChain.activeKeySession.addEventListener("keystatuseschange", this._boundOnKeyStatus), this._activeKeySession = this._keyChain.activeKeySession.generateRequest(e.initDataType, e.initData).catch(() => {
                this._scanner.fire(An.DRM_FAILURE)
            }), !0)
        }, t._onKeyStatus = function() {
            let e = !1;
            const t = Array.from(this._keyChain.activeKeySession.keyStatuses.values());
            if (t.forEach((t, n) => {
                    switch (t) {
                        case "expired":
                            e = !0
                    }
                }), t.every(e => "output-restricted" === e)) {
                if (this._hasFallbackAssets) return this._currentTime = this._scanner.currentTime, void this._switchKeyChainState(this._keyTypes.KEYCHAIN_SD_FALLBACK).then(() => {
                    this._fallbackCallback(), this._scanner.fire(An.DRM_KEY_SWITCH, this._keyTypes.KEYCHAIN_SD_FALLBACK)
                }).catch(e => {
                    this._scanner.fire(An.DRM_OUTPUT_RESTRICTED)
                });
                this._scanner.fire(An.DRM_OUTPUT_RESTRICTED)
            }
            e && this._keyChain.activeKeySession.close()
        }, t._getLicense = function(e) {
            return this._getLicenseUrl(this._keyChain.activeLicenseTokenUrl).then(t => new Promise((n, r) => {
                this._keyChain.addLicenseUrl(t, this._keyChain.state), this._activeKeySession = null;
                const i = new XMLHttpRequest;
                i.keySession = e.target, i.open("POST", this._keyChain.activeLicenseUrl), i.responseType = "arraybuffer";
                let s = e.message;
                if ("com.microsoft.playready" === this._keyChain.activeKeySystem.name) {
                    const t = as(e.message),
                        n = t[0];
                    Object.keys(n).forEach(e => {
                        i.setRequestHeader(e, n[e])
                    }), s = t[1]
                }
                "com.apple.fps.1_0" === this._keyChain.activeKeySystem.name && (s = new Uint8Array(s), i.setRequestHeader("Content-type", "application/octet-stream")), i.onload = () => {
                    if (403 !== i.status)
                        if (i.status >= 400) r(new pr(An.DRM_FAILURE));
                        else try {
                            this._scanner.fire(An.DRM_AUTH_SUCCESS);
                            const e = new Uint8Array(i.response);
                            i.keySession.update(e), n()
                        } catch (rl) {
                            r(new pr(An.DRM_FAILURE, `Error updating key session: ${rl}`))
                        } else r(new pr(An.DRM_AUTH_FAILURE))
                }, i.onerror = r, i.send(s)
            }).catch(e => {
                this._scanner.fire(e.name, {
                    text: e.message || "License request failed."
                })
            }))
        }, t._getLicenseUrl = function(e) {
            return new Promise((t, n) => {
                const r = new XMLHttpRequest;
                r.open("GET", e), r.onload = () => {
                    if (r.status >= 400) n(new pr(An.DRM_FAILURE));
                    else try {
                        try {
                            const e = JSON.parse(r.response),
                                {
                                    licenseAcquisitionUrl: n,
                                    token: i
                                } = e;
                            if (!n && !i) throw new Error;
                            t(`${n}?ExpressPlayToken=${i}`)
                        } catch (e) {
                            t(r.response)
                        }
                    } catch (rl) {
                        n(new pr(An.DRM_FAILURE, `Error retrieving License Acquisition URL (LA_URL): ${rl}`))
                    }
                }, r.onerror = n, r.send()
            })
        }, t._loadFairPlayCertificate = function(e) {
            return new Promise((t, n) => {
                const r = new XMLHttpRequest;
                r.open("GET", e), r.responseType = "arraybuffer", r.setRequestHeader("Pragma", "Cache-Control: no-cache"), r.setRequestHeader("Cache-Control", "max-age=0"), r.onload = () => {
                    if (403 !== r.status)
                        if (r.status >= 400) n({
                            error: An.DRM_FAILURE
                        });
                        else try {
                            t(new Uint8Array(r.response))
                        } catch (rl) {
                            n(rl)
                        } else n({
                            error: An.DRM_AUTH_FAILURE
                        })
                }, r.onerror = n, r.send()
            })
        }, t.setFallbackCallback = function(e) {
            this._fallbackCallback = () => e()
        }, on(e, [{
            key: "state",
            get: function() {
                return this._keyChain.state
            }
        }, {
            key: "hasFallbackAssets",
            get: function() {
                return this._hasFallbackAssets
            }
        }]), e
    }();
const fs = new WeakMap;
let _s = function() {
        function e({
            files: e,
            id: t = ar(),
            title: n = null,
            subtitle: r = null,
            metadata: i = {},
            textTracks: s = ir(),
            externalDisplayFiles: o = {},
            chapters: a = [],
            duration: u
        }) {
            if (!e || !Array.isArray(e)) throw new TypeError("Must provide files for the video.");
            ft(this);
            const c = function(e = []) {
                    return e.getFileById = rr, e
                }(e.map(e => e instanceof is ? (e.video = this, e) : new is(e, this))),
                l = ir(s.map(e => e instanceof ji ? (e.video = this, e) : new ji(e, this)));
            Object.keys(o).forEach(e => {
                !o[e] || o[e] instanceof is || (o[e] = new is(o[e], this))
            }), Object.defineProperties(this, {
                id: {
                    value: `${t}`,
                    enumerable: !0
                },
                title: {
                    value: n,
                    enumerable: !0
                },
                subtitle: {
                    value: r,
                    enumerable: !0
                },
                metadata: {
                    value: i,
                    enumerable: !0
                },
                files: {
                    value: c,
                    enumerable: !0
                },
                textTracks: {
                    value: l,
                    enumerable: !0,
                    writable: !0
                },
                chapters: {
                    value: a,
                    enumerable: !0
                },
                duration: {
                    value: u,
                    enumerable: !0
                },
                externalDisplayFiles: {
                    value: o,
                    enumerable: !0
                }
            }), i.drm && (i.drm.fastly ? this._drmHandler = new ds(i.drm, i.useHls) : this._drmHandler = new ls(i.drm, i.useHls))
        }
        return e.prototype.deactivate = function() {
            this._drmHandler && this._drmHandler.destroy(), this.textTracks.forEach(e => this.currentScanner.removeTextTrack(e))
        }, on(e, [{
            key: "drmHandler",
            get: function() {
                return this._drmHandler || null
            }
        }, {
            key: "currentFile",
            get: function() {
                return this.currentScanner.currentFile
            },
            set: function(e) {
                this.currentScanner.currentFile = e
            }
        }, {
            key: "currentScanner",
            get: function() {
                return fs.get(this)
            },
            set: function(e) {
                this.currentScanner && this.currentScanner.constructor.supportsTextTracks && this.textTracks.forEach(e => this.currentScanner.removeTextTrack(e)), e.constructor.supportsTextTracks && this.textTracks.forEach(t => e.addTextTrack(t)), fs.set(this, e)
            }
        }, {
            key: "chapters",
            get: function() {
                return this.chapters
            }
        }]), e
    }(),
    ps = function() {
        function e(e, t = {}) {
            this._telecine = e, this._options = t, this._bufferInterval = null, this._lastBufferCheckVideoTime = this._options.embedTime ? this._options.embedTime : 0, this._isBuffering = !1, this._isSeeking = !1, this._userPlayState = !1, this.playInitiated = !1, this._isLiveStreamOnline = !1, this._checkInterval = 250, ft(this), this._boundEndBuffering = this._endBuffering.bind(this), this._boundOnPause = this._onPause.bind(this), this._boundOnSeeking = this._onSeeking.bind(this), this._boundOnSeeked = this._onSeeked.bind(this), this._boundOnLiveOnline = this._onLiveOnline.bind(this), this._boundOnLiveOffline = this._onLiveOffline.bind(this), this._toggleEvents(this._telecine.on), this._options.noInterval || this._setUpRebufferMonitor()
        }
        var t = e.prototype;
        return t.destroy = function() {
            clearInterval(this._bufferInterval), this._toggleEvents(this._telecine.off), this._endBuffering()
        }, t._toggleEvents = function(e) {
            e(Sn.PAUSE, this._boundOnPause), e(Sn.PLAYING, this._boundEndBuffering), e(Sn.SEEKING, this._boundOnSeeking), e(Sn.SEEKED, this._boundOnSeeked), e(In.STREAM_ONLINE, this._boundOnLiveOnline), e(In.STREAM_OFFLINE, this._boundOnLiveOffline)
        }, t._onPause = function() {
            this.userPlayState = !1
        }, t._endBuffering = function() {
            this._isBuffering && (this._isBuffering = !1, this.fire(An.BUFFER_ENDED))
        }, t._onSeeking = function() {
            this._isSeeking = !0
        }, t._onSeeked = function() {
            this._isSeeking = !1
        }, t._onLiveOnline = function() {
            this._isLiveStreamOnline = !0
        }, t._onLiveOffline = function() {
            this._isLiveStreamOnline = !1
        }, t._setUpRebufferMonitor = function() {
            clearInterval(this._bufferInterval), this._bufferInterval = setInterval(this.runIntervalCheck.bind(this), this._checkInterval)
        }, t.runIntervalCheck = function() {
            if (!this._telecine.video) return;
            const e = this._telecine.video.currentScanner;
            if (!e) return;
            const t = this._telecine.isLive(),
                n = e.currentTime,
                r = this._checkInterval / 2 / 1e3;
            if (this.playInitiated && (!this._isSeeking || t) && (!this._telecine.paused || this.userPlayState) && !this._isBuffering && n < this._lastBufferCheckVideoTime + r) {
                if (t && !this._isLiveStreamOnline) return;
                const e = this._telecine.buffered;
                for (let t = 0; t < e.length; t++)
                    if (n >= e.start(t) && n + .2 <= e.end(t)) return;
                if (n + r >= this._telecine.duration) return;
                this._isBuffering = !0, this.fire(An.BUFFER_STARTED)
            }(this.playInitiated && this._isBuffering && n > this._lastBufferCheckVideoTime + r || t && !this._isLiveStreamOnline && this._isBuffering) && (this._isBuffering = !1, this.fire(An.BUFFER_ENDED)), this._lastBufferCheckVideoTime = n
        }, on(e, [{
            key: "userPlayState",
            get: function() {
                return this._userPlayState
            },
            set: function(e) {
                this._userPlayState = e, e || this._endBuffering()
            }
        }]), e
    }();

function ms() {
    let e, t;

    function n() {
        if (!t) return Promise.reject();
        e.preload = "";
        let n = e.play();
        return void 0 === n && (n = new Promise(t => {
            e.addEventListener("playing", t)
        })), n
    }

    function r() {
        t && (t.resolve(), t = null)
    }

    function i(e) {
        t && (t.reject(e), t = null)
    }
    return {
        set video(t) {
            e = t
        },
        get video() {
            return e
        },
        get active() {
            return !!t
        },
        start: function(s = Promise.resolve.bind(Promise)) {
            return t || (t = new It), e.src ? document.createElement("video").load() : e.load(), s().then(n).then(r).catch(i), t
        },
        cancel: function() {
            t && (t.reject(new pr("PlayInterrupted", "The play() request was interrupted by a call to pause()")), t = null)
        }
    }
}
let vs = function() {
        function e(e, t, n = {}) {
            this._element = e, this._scanners = t, this._options = n, this._video = null, this._textTracks = ir(), this._properties = {}, this._currentScanner = new Or(e), this._options.playRequest = new ms, this._blacklistedScanners = [], this._activeEffects = [], ft(this)
        }
        var t = e.prototype;
        return t.supportsEffect = function(e) {
            return !!e.supported && e.supportedScanners.some(e => this._getScannerName(this._currentScanner) === e.displayName)
        }, t.getEffectByName = function(e) {
            let t = null;
            return this._activeEffects.forEach(n => {
                e === this._getEffectName(n) && (t = n)
            }), t
        }, t.activateEffect = function(e, t) {
            const n = new e(this, t);
            return n.activate(), this._activeEffects.push(n), n
        }, t.deactivateEffect = function(e) {
            return this._activeEffects.some((t, n) => t.constructor === e && (t.deactivate(), this._activeEffects.splice(n, 1), !0))
        }, t.deactivateEffects = function() {
            this._activeEffects.forEach(e => this.deactivateEffect(e.constructor))
        }, t.play = function() {
            if (!this._video || this._video.files.length < 1) throw new pr("NoFiles", "There are no files to play.");
            this._rebufferMonitor.playInitiated || (this._rebufferMonitor.playInitiated = !0), this._rebufferMonitor.userPlayState = !0;
            const e = this._currentScanner.play();
            return this._properties.paused = !1, e
        }, t.pause = function() {
            if (!this._video || this._video.files.length < 1) throw new pr("NoFiles", "There are no files to play.");
            return this._rebufferMonitor.userPlayState = !1, this._currentScanner.pause(), this._properties.paused = !0, this
        }, t.isLive = function() {
            return this.currentScannerName.includes("Live")
        }, t.endLive = function() {
            this._currentScanner.endLive()
        }, t.getBitrateAtTime = function(e, t = "video") {
            return "MediaSourceScanner" !== this._getScannerName(this._currentScanner) && "HLSLiveScanner" !== this._getScannerName(this._currentScanner) || "audio" === t && this._currentScanner._streams[t].length <= 1 ? 0 : this._currentScanner.getBitrateAtTime(e, t)
        }, t.getCurrentStream = function(e = "video") {
            var t, n;
            return null == (t = (n = this._currentScanner).getCurrentStream) ? void 0 : t.call(n, e)
        }, t.showExternalDisplayPicker = function(e) {
            this._currentScanner.showExternalDisplayPicker(e)
        }, t.requestPictureInPicture = function() {
            return this._currentScanner.requestPictureInPicture()
        }, t.exitPictureInPicture = function() {
            return this._currentScanner.exitPictureInPicture()
        }, t.addChapter = function(e, t) {
            this._currentScanner.addChapter(e, t)
        }, t.removeChapter = function(e) {
            this._currentScanner.removeChapter(e)
        }, t.addCuePoint = function(e, t) {
            return this._currentScanner.addCuePoint(e, t)
        }, t.removeCuePoint = function(e) {
            return this._currentScanner.removeCuePoint(e)
        }, t.removeAllCuePoints = function() {
            return this._currentScanner.removeAllCuePoints()
        }, t.addVideoEventListeners = function() {
            return this._currentScanner.addVideoEventListeners()
        }, t.removeVideoEventListeners = function() {
            return this._currentScanner.removeVideoEventListeners()
        }, t._findScanner = function({
            textTrackSupport: e = !1
        } = {}) {
            const t = this._video.files.sort((e, t) => e.priority - t.priority),
                n = this._scanners;
            for (const r in t) {
                let i = t[r];
                for (const t in n) {
                    let r = n[t];
                    if (r.supported && (!e || r.supportsTextTracks) && -1 === this._blacklistedScanners.indexOf(this._getScannerName(r)) && r.supportedVideoTypes.some(e => i.mime === e)) return r
                }
            }
            return e ? (this._fireVideoError("TextTracksNotSupported", "None of the scanners support text tracks in this browser."), this._blacklistedScanners = [], this._findScanner()) : null
        }, t.reactivate = function() {
            var e;
            (null == (e = this._currentScanner) ? void 0 : e.reactivate) && this._currentScanner.reactivate(), this.play()
        }, t._initScanner = function(e, t) {
            if (this._currentScanner.constructor === e && this._currentScanner.video === t) return;
            this._currentScanner.deactivate();
            const n = new e(this._element, this._options);
            Object.keys(Dn).forEach(e => {
                const t = Dn[e];
                n.on(t, e => this._handleEvent(t, e, n))
            }), this._currentScanner = n, t.currentScanner = n, this._currentScanner.video = t;
            const r = Object.keys(this._properties);
            for (let i = 0; i < r.length; i++) {
                const e = r[i];
                "paused" !== e ? "currentTime" !== e && (this._currentScanner[e] = this._properties[e]) : !1 === this._properties.paused && this._currentScanner.play()
            }
            this._currentScanner.addChapters(t.chapters, t.duration), this.fire(An.SCANNER_CHANGE, this._getScannerName(this._currentScanner))
        }, t._updateScanner = function() {
            if (null === this._video) return;
            const e = this._findScanner({
                textTrackSupport: this._video.textTracks.length > 0
            });
            e ? this._initScanner(e, this._video) : this._fireVideoError("FilesNotPlayable", "None of the files could be played in this browser.")
        }, t._resetScanner = function() {
            this._currentScanner.deactivate(), this._currentScanner = new Or(this._element)
        }, t._handleEvent = function(e, t, n) {
            if (n === this._currentScanner) {
                switch (e) {
                    case Sn.ERROR:
                        return void(t instanceof pr && this.fire(Sn.ERROR, t));
                    case An.SCANNER_ERROR:
                        this._fireVideoError("ScannerError", `The current scanner can no longer be used because ${t.reason}`), this._blacklistedScanners.push(this._getScannerName(this._currentScanner)), this._updateScanner([]);
                        break;
                    case An.FILE_ERROR:
                        this._fireVideoError("FileError", `The current file can no longer be used because ${t.reason}`), this._currentScanner._switchToNextFile();
                        break;
                    case An.DOWNLOAD_ERROR:
                        this._fireVideoError("DownloadError", t), this._currentScanner._switchToNextFile();
                        break;
                    case An.EME_UNSUPPORTED:
                        this._fireVideoError("DRMFailure", {
                            text: null,
                            code: "emeunsupported"
                        });
                        break;
                    case An.DRM_FAILURE:
                    case An.DRM_AUTH_FAILURE:
                        this._fireVideoError("DRMFailure", {
                            text: t.text,
                            code: t.code
                        });
                        break;
                    case An.DRM_OUTPUT_RESTRICTED:
                        this._fireVideoError("DRMFailure", {
                            text: null,
                            code: "outputrestricted"
                        });
                        break;
                    case An.DRM_AUTH_SUCCESS:
                        this.fire(An.DRM_AUTH_SUCCESS);
                        break;
                    case Sn.TIME_UPDATE:
                        this._properties.currentTime = this._currentScanner.currentTime;
                        break;
                    case An.MEDIA_URL_EXPIRED:
                        this._fireVideoError("MediaUrlExpired", t);
                        break;
                    case An.MEDIA_URL_BAD_REQUEST:
                        this._fireVideoError("MediaUrlBadRequest", t);
                        break;
                    case Pn.BRAIN_ML_MODEL_ERR:
                        this._fireVideoError("MimirError", t);
                        break;
                    case Pn.BRAIN_ML_MODEL_NET_ERR:
                        this._fireVideoError("MimirNetworkError", t);
                        break;
                    case Pn.BRAIN_ML_MODEL_TIMEOUT:
                        this._fireVideoError("MimirNetworkTimeout", t);
                        break;
                    case wn.SPATIAL_UNSUPPORTED:
                        this.getEffectByName("ThreeSixtyEffect").deactivate();
                        break;
                    case Sn.ENDED:
                        this._properties.paused = !0;
                        break;
                    case Sn.WAITING:
                        this.fire(Sn.WAITING)
                }
                this._activeEffects.forEach(t => {
                    "function" == typeof t[`on${e}`] && t[`on${e}`]()
                }), this.fire(e, t)
            }
        }, t._fireVideoError = function(e, t) {
            this.fire(Sn.ERROR, new pr(e, t))
        }, t._getScannerName = function(e) {
            return e instanceof Or ? e.constructor.displayName : e.prototype.constructor.displayName
        }, t._setUpRebufferMonitor = function() {
            this._rebufferMonitor && this._rebufferMonitor.destroy(), this._rebufferMonitor = new ps(this, this._options), this._rebufferMonitor.on(An.BUFFER_STARTED, () => {
                this.fire(An.BUFFER_STARTED)
            }), this._rebufferMonitor.on(An.BUFFER_ENDED, () => {
                this.fire(An.BUFFER_ENDED)
            })
        }, t._getEffectName = function(e) {
            return e instanceof ts ? e.constructor.displayName : e.prototype.constructor.displayName
        }, t._setCaptionsState = function(e) {
            "HLSLiveScanner" === this._getScannerName(this._currentScanner) && this._currentScanner.setCaptionsState(e)
        }, on(e, [{
            key: "element",
            get: function() {
                return this._element
            }
        }, {
            key: "videoElement",
            get: function() {
                return this._currentScanner.videoElement
            }
        }, {
            key: "manifest",
            get: function() {
                return this._currentScanner.manifest || {
                    video: []
                }
            }
        }, {
            key: "supportsSettingVolume",
            get: function() {
                return this._scanners.some(e => e.supported && e.supportsSettingVolume)
            }
        }, {
            key: "supportsPlaybackRate",
            get: function() {
                return this._currentScanner.constructor.supportsPlaybackRate
            }
        }, {
            key: "supportsTextTracks",
            get: function() {
                return this._scanners.some(e => e.supported && e.supportsTextTracks)
            }
        }, {
            key: "activeEffects",
            get: function() {
                return this._activeEffects
            }
        }, {
            key: "latency",
            get: function() {
                return this._currentScanner.latency
            }
        }, {
            key: "downloadSpeed",
            get: function() {
                return this._currentScanner.downloadSpeed || 0
            }
        }, {
            key: "pictureInPictureActive",
            get: function() {
                return this._currentScanner.pictureInPictureActive
            }
        }, {
            key: "pictureInPictureEnabled",
            get: function() {
                return this._currentScanner.pictureInPictureEnabled
            }
        }, {
            key: "isLowerProfileAvailable",
            get: function() {
                return this._currentScanner.isLowerProfileAvailable
            }
        }, {
            key: "buffered",
            get: function() {
                return this._currentScanner.buffered
            }
        }, {
            key: "bufferTarget",
            get: function() {
                return this._currentScanner.bufferTarget
            },
            set: function(e) {
                this._properties.bufferTarget = e, this._currentScanner.bufferTarget = e
            }
        }, {
            key: "presentationDelay",
            get: function() {
                return this._currentScanner.presentationDelay
            },
            set: function(e) {
                this._properties.presentationDelay = e, this._currentScanner.presentationDelay = e
            }
        }, {
            key: "lowLatencyMode",
            get: function() {
                return this._currentScanner.lowLatencyMode
            },
            set: function(e) {
                this._properties.lowLatencyMode = e, this._currentScanner.lowLatencyMode = e
            }
        }, {
            key: "manifestLoadDurations",
            get: function() {
                return this._currentScanner.manifestLoadDurations ? this._currentScanner.manifestLoadDurations : []
            }
        }, {
            key: "successfulSegments",
            get: function() {
                return this._currentScanner.successfulSegments ? this._currentScanner.successfulSegments : []
            }
        }, {
            key: "failedSegments",
            get: function() {
                return this._currentScanner.failedSegments ? this._currentScanner.failedSegments : []
            }
        }, {
            key: "cuePoints",
            get: function() {
                return this._currentScanner.cuePoints
            }
        }, {
            key: "currentChapterID",
            get: function() {
                if (this._currentScanner && this._currentScanner.chaptersTrack && this._currentScanner.chaptersTrack.activeCues.length) {
                    const {
                        activeCues: e
                    } = this._currentScanner.chaptersTrack;
                    return e[e.length - 1].id
                }
                return null
            }
        }, {
            key: "chapters",
            get: function() {
                return this._currentScanner.chaptersTrack ? this._currentScanner.chaptersTrack.cues : []
            }
        }, {
            key: "chaptersTrack",
            get: function() {
                return this._currentScanner.chaptersTrack
            }
        }, {
            key: "currentFile",
            get: function() {
                return this._currentScanner.currentFile
            },
            set: function(e) {
                if ("string" == typeof e && (e = this._files.filter(t => t.id === e)[0]), !e) throw new pr("FileNotValid", "The file is not valid.");
                this._currentScanner.currentFile = e
            }
        }, {
            key: "currentScannerName",
            get: function() {
                return this._getScannerName(this._currentScanner)
            }
        }, {
            key: "currentScanner",
            get: function() {
                return this._currentScanner
            }
        }, {
            key: "currentTime",
            get: function() {
                return this._currentScanner.currentTime
            },
            set: function(e) {
                this._properties.currentTime = e, this._currentScanner.currentTime = e
            }
        }, {
            key: "duration",
            get: function() {
                return this._currentScanner.duration
            }
        }, {
            key: "ended",
            get: function() {
                return this._currentScanner.ended
            }
        }, {
            key: "externalDisplayAvailable",
            get: function() {
                return this._currentScanner.externalDisplayAvailable
            }
        }, {
            key: "externalDisplayActive",
            get: function() {
                return this._currentScanner.externalDisplayActive
            }
        }, {
            key: "loop",
            get: function() {
                return this._currentScanner.loop
            },
            set: function(e) {
                this._properties.loop = e, this._currentScanner.loop = e
            }
        }, {
            key: "muted",
            get: function() {
                return this._currentScanner.muted
            },
            set: function(e) {
                this._properties.muted = !!e, this._currentScanner.muted = !!e
            }
        }, {
            key: "playsinline",
            get: function() {
                return this._currentScanner.playsinline
            },
            set: function(e) {
                this._properties.playsinline = !!e, this._currentScanner.playsinline = !!e
            }
        }, {
            key: "paused",
            get: function() {
                return this._currentScanner.paused
            }
        }, {
            key: "played",
            get: function() {
                return this._currentScanner.played
            }
        }, {
            key: "seekable",
            get: function() {
                return this._currentScanner.seekable
            }
        }, {
            key: "seeking",
            get: function() {
                return this._currentScanner.seeking
            }
        }, {
            key: "defaultPlaybackRate",
            get: function() {
                return this._currentScanner.defaultPlaybackRate
            },
            set: function(e) {
                this._properties.defaultPlaybackRate = e, this._currentScanner.defaultPlaybackRate = e
            }
        }, {
            key: "playbackRate",
            get: function() {
                return this._currentScanner.playbackRate
            },
            set: function(e) {
                this._properties.playbackRate = e, this._currentScanner.playbackRate = e
            }
        }, {
            key: "preload",
            get: function() {
                return this._currentScanner.preload
            },
            set: function(e) {
                this._properties.preload = e, this._currentScanner.preload = e
            }
        }, {
            key: "autoPictureInPicture",
            get: function() {
                return this._currentScanner.autoPictureInPicture
            },
            set: function(e) {
                this._properties.autoPictureInPicture = !!e, this._currentScanner.autoPictureInPicture = !!e
            }
        }, {
            key: "disablePictureInPicture",
            get: function() {
                return this._currentScanner.disablePictureInPicture
            },
            set: function(e) {
                this._properties.disablePictureInPicture = !!e, this._currentScanner.disablePictureInPicture = !!e
            }
        }, {
            key: "video",
            get: function() {
                return this._video
            },
            set: function(e) {
                this._video && this._video.deactivate(), this._blacklistedScanners = [], this._setUpRebufferMonitor(), null === e ? (this._video = null, this._resetScanner()) : (this._video = new _s(e), this._updateScanner())
            }
        }, {
            key: "videoWidth",
            get: function() {
                return this._currentScanner.videoWidth
            }
        }, {
            key: "videoHeight",
            get: function() {
                return this._currentScanner.videoHeight
            }
        }, {
            key: "volume",
            get: function() {
                return this._currentScanner.volume
            },
            set: function(e) {
                if (e < 0 || e > 1) throw new pr("IndexSizeError", `Failed to set the 'volume' property: The volume provided (${e}) is outside of the range [0, 1].`);
                this._properties.volume = e, this._currentScanner.volume = e
            }
        }, {
            key: "brainDebug",
            get: function() {
                return this._currentScanner.brainDebug
            }
        }]), e
    }(),
    gs = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this)._activated = !1, r._video = r._telecine._currentScanner._video, r
        }
        ln(t, e), on(t, null, [{
            key: "displayName",
            get: function() {
                return "CanvasEffect"
            }
        }, {
            key: "supported",
            get: function() {
                return !0
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return [Or, Oi]
            }
        }]);
        var n = t.prototype;
        return n.activate = function() {
            this._activated = !0, this._canvas = document.createElement("canvas"), this._canvas.className = "vp-canvas-effect", this._canvas.style.cssText = "\n            position: absolute;\n            top:0;\n            left:0;\n            bottom:0;\n            right:0;\n        ", this._ctx = this._canvas.getContext("2d", {
                alpha: !1
            }), this._element.appendChild(this._canvas), this._startRendering()
        }, n.deactivate = function() {
            this._canvas && this._element.removeChild(this._canvas), this._stopRendering(), this._activated = !1
        }, n._startRendering = function() {
            this._requestFrame()
        }, n._requestFrame = function() {
            this._animationFrame = window.requestAnimationFrame(this._renderFrame.bind(this))
        }, n._renderFrame = function() {
            const e = this._video,
                t = this._canvas;
            t.width = e.clientWidth, t.height = e.clientHeight;
            const n = Math.floor(this._videoContentWidth()),
                r = Math.floor(this._videoContentHeight()),
                i = Math.floor((e.clientWidth - n) / 2),
                s = Math.floor((e.clientHeight - r) / 2);
            this._ctx.fillStyle = "#000", this._ctx.fillRect(0, 0, t.width, t.height), this._ctx.drawImage(e, i, s, n, r), this._requestFrame()
        }, n._videoRatio = function() {
            return this._video.videoHeight / this._video.videoWidth
        }, n._videoContentWidth = function() {
            return Math.min(this._video.clientHeight / this._videoRatio(), this._video.clientWidth)
        }, n._videoContentHeight = function() {
            return Math.min(this._video.clientWidth * this._videoRatio(), this._video.clientHeight)
        }, n._stopRendering = function() {
            this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = null)
        }, t
    }(ts),
    ys = function() {
        function e() {}
        return on(e, null, [{
            key: "Equirect",
            get: function() {
                return "equirectangular"
            }
        }]), e
    }(),
    Es = function() {
        function e() {}
        return on(e, null, [{
            key: "Mono",
            get: function() {
                return "mono"
            }
        }, {
            key: "TopBottom",
            get: function() {
                return "top-bottom"
            }
        }]), e
    }(),
    Ss = function() {
        function e(e, t, n) {
            switch (this.isStereo = t !== Es.Mono, this._leftEye = null, this._rightEye = null, e) {
                case ys.Equirect:
                    this.createEquirectProjection(n, t);
                    break;
                default:
                    this.createEquirectProjection(n, Es.Mono)
            }
        }
        var t = e.prototype;
        return t.createEquirectProjection = function(e, t) {
            switch (t) {
                case Es.Mono:
                    this._leftEye = this._createEquirectangularSphereMesh(e);
                    break;
                case Es.TopBottom:
                    this._leftEye = this._createEquirectangularSphereMesh(e), this._rightEye = this._createEquirectangularSphereMesh(e), this._leftEye.layers.set(1), this._rightEye.layers.set(2), this._chopGeometryUvs(this._leftEye.geometry, .5, 0), this._chopGeometryUvs(this._rightEye.geometry, .5, .5)
            }
        }, t._createEquirectangularSphereMesh = function(t, n, r, i) {
            const s = new THREE.SphereBufferGeometry(n || e.SPHERE_RADIUS, r || e.TESSELATION_WIDTH, i || e.TESSELATION_HEIGHT);
            s.scale(-1, 1, 1);
            const o = new THREE.MeshBasicMaterial({
                map: t
            });
            return new THREE.Mesh(s, o)
        }, t._chopGeometryUvs = function(e, t, n, r = 1) {
            for (let i = 0; i < e.attributes.uv.array.length; i += 2) e.attributes.uv.array[i + r] *= t, e.attributes.uv.array[i + r] += n
        }, on(e, [{
            key: "left",
            get: function() {
                return this._leftEye
            }
        }, {
            key: "right",
            get: function() {
                return this._rightEye
            }
        }], [{
            key: "TESSELATION_WIDTH",
            get: function() {
                return 120
            }
        }, {
            key: "TESSELATION_HEIGHT",
            get: function() {
                return 80
            }
        }, {
            key: "SPHERE_RADIUS",
            get: function() {
                return 500
            }
        }]), e
    }(),
    Ts = function() {
        function e(e) {
            this._renderer = e
        }
        var t = e.prototype;
        return t.hasVRHeadset = function() {
            return Gn.webvr ? navigator.getVRDisplays().then(e => e.length > 0 ? (this._renderer.vr.setDevice(e[0]), e[0]) : null) : null
        }, t.enter = function() {
            return this._renderer.vr.getDevice() && this._renderer.vr.getDevice().requestPresent([{
                source: this._renderer.domElement
            }])
        }, t.exit = function() {
            return this._renderer.vr.getDevice() && this._renderer.vr.getDevice().exitPresent()
        }, on(e, [{
            key: "supported",
            get: function() {
                return Gn.webvr
            }
        }, {
            key: "device",
            get: function() {
                return this._renderer && this._renderer.vr.getDevice() ? this._renderer.vr.getDevice() : null
            }
        }, {
            key: "isPresenting",
            get: function() {
                return !(!this._renderer || !this._renderer.vr.getDevice()) && this._renderer.vr.getDevice().isPresenting
            }
        }]), e
    }(),
    bs = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this)._activated = !1, r._camera = null, r._scene = null, r._renderer = null, r.isUserInteracting = !1, r._onMouseDownMouseX = 0, r._onMouseDownMouseY = 0, r._coordinates = {
                lat: 0,
                long: 0
            }, r._previousCoordinates = {
                lat: 0,
                long: 0
            }, r._onMouseDownCoordinates = {
                lat: 0,
                long: 0
            }, r._previousCameraProps = r.cameraProps, r._phi = 0, r._theta = 0, r._rotation = 0, r._video = r._telecine._currentScanner._video, r._videoRefreshLoop = null, r._gyroVector = {
                x: 0,
                y: 0
            }, r._offset = {
                lat: 0,
                long: 0
            }, r._writeSpeeds = {
                videoFps: r._options.fps,
                motionRenderSpeed: 60
            }, r._maxTimeBetweenWrites = 1e3 / r._writeSpeeds.videoFps, r._motionTimeouts = [], r._movingAutomatically = !1, r._deviceMotionHasOccurred = !1, r._updateFromGyroscopePending = !1, r._keysPressed = {
                up: !1,
                down: !1,
                left: !1,
                right: !1
            }, r
        }
        ln(t, e), on(t, [{
            key: "isUserInteracting",
            set: function(e) {
                e !== this._isUserInteracting && (this._isUserInteracting = e, e ? this._options.isMobile || this._telecine.fire(wn.MOTION_START) : this._options.isMobile || this._telecine.fire(wn.MOTION_END))
            },
            get: function() {
                return this._isUserInteracting
            }
        }], [{
            key: "displayName",
            get: function() {
                return "ThreeSixtyEffect"
            }
        }, {
            key: "supported",
            get: function() {
                try {
                    const e = document.createElement("canvas");
                    return !!window.WebGLRenderingContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))
                } catch (rl) {
                    return this._telecine._currentScanner.fire(wn.SPATIAL_UNSUPPORTED), !1
                }
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return [Or, Oi]
            }
        }]), t.frustumSurfaceArea = function(e, t, n) {
            const r = 2 * Ss.SPHERE_RADIUS * 2 * Math.sin(Math.PI / 180 * (e / 2));
            return r * (r * t / n) / (4 * Math.PI * Math.pow(Ss.SPHERE_RADIUS, 2))
        };
        var n = t.prototype;
        return n.activate = function() {
            return new Promise((e, t) => {
                if (window.THREE) return void e();
                const n = document.createElement("script");
                n.src = this._options.threeUrl, document.body.appendChild(n), n.onload = () => {
                    e()
                }
            }).then(() => this._initialize())
        }, n._initialize = function() {
            this._activated = !0, this._camera = new THREE.PerspectiveCamera(this._options.fieldOfView, this._video.clientWidth / this._video.clientHeight, 1, 2 * Ss.SPHERE_RADIUS), this._camera.target = new THREE.Vector3(0, 0, 0), this._camera.layers.enable(1), this._initializeAutoMovement(this._options.directorTimeline), this._scene = new THREE.Scene, this._texture = new THREE.VideoTexture(this._video), this._texture.generateMipmaps = !1, this._texture.minFilter = THREE.NearestFilter, this._texture.maxFilter = THREE.NearestFilter, this._texture.format = THREE.RGBFormat, this._projector = new Ss(this._options.projection, this._options.stereoMode, this._texture), this._projector.isStereo && this._scene.add(this._projector.right), this._scene.add(this._projector.left), this._renderer = new THREE.WebGLRenderer, this._renderer.vr.enabled = !0, this._renderer.setPixelRatio(window.devicePixelRatio), this._output = document.createElement("div"), this._output.appendChild(this._renderer.domElement), this._element.appendChild(this._output), this._hideOutput(), this._telecine._currentScanner._video.setAttribute("crossorigin", "anonymous"), this._startRendering(), this._telecine._currentScanner.paused || this._showOutput(), this._webvr = new Ts(this._renderer), this._webvr.supported && this._webvr.hasVRHeadset().then(e => {
                setTimeout(() => {
                    this._telecine.fire(wn.WEBVR_HARDWARE_AVAILABLE, this._webvr.device)
                }, 100)
            }).catch(e => {})
        }, n.toggleVR = function() {
            if (this._webvr.isPresenting) this._webvr.exit().then(() => {
                this.adjustRenderSize()
            }).catch(e => {});
            else {
                if (this._telecine._currentScanner.paused) return;
                this._webvr.enter().then(() => {
                    this.adjustRenderSize()
                }).catch(e => {})
            }
        }, n.onplay = function() {
            this._activated && (this._showOutput(), this.adjustRenderSize())
        }, n.deactivate = function() {
            this._output && this._element.removeChild(this._output), this._stopRendering(), this._activated = !1
        }, n.snapToCenter = function() {
            this._motionTimeouts.forEach(e => clearTimeout(e));
            const e = ((this._coordinates.long >= 180 ? 360 : 0) - this._coordinates.long) / 11,
                t = (0 - this._coordinates.lat) / 11;
            this._rotation = 0;
            for (let n = 0; n < 50; n++) this._motionTimeouts.push(setTimeout(() => {
                0 === n && (this._movingAutomatically = !0, this._options.isMobile || (this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.motionRenderSpeed)), 49 === n && (this._movingAutomatically = !1, this._options.isMobile || (this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.videoFps)), this._updateViewpoint(this._coordinates.lat + t / Math.pow(1.1, n), this._coordinates.long + e / Math.pow(1.1, n)), this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._coordinates.lat + t / Math.pow(1.1, n), this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._coordinates.long + t / Math.pow(1.1, n)
            }, n * this._maxTimeBetweenWrites))
        }, n.isStereo = function() {
            return !!this._projector && this._projector.isStereo
        }, n._initializeAutoMovement = function(e) {
            e && e[0] && void 0 !== e[0].p && "undefined" !== e[0].y && this._updateViewpoint(e[0].p, e[0].y)
        }, n._updateViewpoint = function(e, t) {
            this._previousCoordinates.long = this._coordinates.long, this._previousCoordinates.lat = this._coordinates.lat, e %= 360, this._coordinates.lat = Math.max(-85, Math.min(85, e)), t = (t %= 360) >= 0 ? t : 360 + t, this._coordinates.long = t
        }, n.makeContact = function(e) {
            this.isUserInteracting = !0, this._motionTimeouts.forEach(e => clearTimeout(e)), this._movingAutomatically = !1, this._contactPoint = {
                x: e.x,
                y: e.y
            }, this._onMouseDownCoordinates.long = this._coordinates.long, this._onMouseDownCoordinates.lat = this._coordinates.lat, this._motionStart = {
                long: this._coordinates.long,
                lat: this._coordinates.lat
            }, this._options.isMobile || (this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.motionRenderSpeed)
        }, n.move = function(e) {
            this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._previousCoordinates.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._previousCoordinates.long;
            const t = this._motionStart.lat - .2 * (this._contactPoint.y - e.y),
                n = .2 * (this._contactPoint.x - e.x) + this._motionStart.long;
            this._updateViewpoint(t, n)
        }, n.moveWheel = function(e) {
            this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._previousCoordinates.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._previousCoordinates.long;
            const t = this._coordinates.lat - .1 * e.y,
                n = this._coordinates.long + .1 * e.x;
            this._updateViewpoint(t, n)
        }, n.moveDevice = function(e, t, n, r) {
            this._updateFromGyroscopePending = !0;
            const i = new THREE.Quaternion;
            let s = window.orientation;
            null === s && (s = this._video.clientWidth > this._video.clientHeight ? 90 : 0), e = e ? THREE.Math.degToRad(e) : 0, t = t ? THREE.Math.degToRad(t) : 0, n = n ? THREE.Math.degToRad(n) : 0;
            const o = s ? THREE.Math.degToRad(s) : 0,
                a = new THREE.Vector3(0, 0, 1),
                u = new THREE.Euler,
                c = new THREE.Quaternion,
                l = new THREE.Quaternion(-Math.sqrt(.5), 0, 0, Math.sqrt(.5));
            u.set(t, e, -n, "YXZ"), i.setFromEuler(u), i.multiply(l), i.multiply(c.setFromAxisAngle(a, -o)), this._gyroVector = (new THREE.Euler).setFromQuaternion(i, "YXZ"), this._rotation = this._gyroVector.z, this.isUserInteracting || this._movingAutomatically || this._updateViewpoint(THREE.Math.radToDeg(this._gyroVector.x) - this._offset.lat, -THREE.Math.radToDeg(this._gyroVector.y) + this._offset.long), this._deviceMotionHasOccurred || (this.snapToCenter(), this._telecine.fire(wn.MOTION_START), this._deviceMotionHasOccurred = !0)
        }, n.releaseContact = function(e) {
            if (this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) - this._coordinates.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._coordinates.long, this.isUserInteracting = !1, this._motionStart && !e) {
                const e = Math.hypot(this._coordinates.long - this._motionStart.long, this._coordinates.lat - this._motionStart.lat);
                this._moveDueToMomentum(e)
            }
        }, n.abandonMotion = function() {
            this.isUserInteracting = !1, this._motionStart = null
        }, n.keyPress = function(e) {
            this._options.keyboardDisabled || (this._keyIsDown() || (this.isUserInteracting = !0, this._motionTimeouts && this._motionTimeouts.forEach(e => clearTimeout(e))), this._keysPressed[e] || (this._keysPressed[e] = !0))
        }, n.keyUp = function(e) {
            this._keysPressed[e] = !1, this._keyIsDown() || (this.isUserInteracting = !1, this._moveDueToMomentum(1 / 0))
        }, n._moveFromKeyPress = function() {
            Object.keys(this._keysPressed).forEach(e => {
                if (this._keysPressed[e]) switch (e) {
                    case "up":
                        this._updateViewpoint(this._coordinates.lat + 2, this._coordinates.long);
                        break;
                    case "down":
                        this._updateViewpoint(this._coordinates.lat - 2, this._coordinates.long);
                        break;
                    case "left":
                        this._updateViewpoint(this._coordinates.lat, this._coordinates.long - 2);
                        break;
                    case "right":
                        this._updateViewpoint(this._coordinates.lat, this._coordinates.long + 2)
                }
            })
        }, n._keyIsDown = function() {
            return Object.keys(this._keysPressed).map(e => this._keysPressed[e]).some(e => e)
        }, n._moveDueToMomentum = function(e) {
            if (e >= 20) {
                const t = {
                    long: this._coordinates.long - this._previousCoordinates.long,
                    lat: this._coordinates.lat - this._previousCoordinates.lat
                };
                e === 1 / 0 && (t.long /= 2, t.lat /= 2);
                for (let e = 1; e < 50; e++) this._motionTimeouts.push(setTimeout(() => {
                    1 === e && (this._movingAutomatically = !0), 49 === e && (this._movingAutomatically = !1, this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.videoFps);
                    const n = 2 / Math.pow(e, 1.5);
                    this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._coordinates.lat + t.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._coordinates.long + t.long, this._updateViewpoint(this._coordinates.lat + t.lat * n, this._coordinates.long + t.long * n)
                }, e * this._maxTimeBetweenWrites))
            }
        }, n.onseeked = function() {
            this._activated && this._update()
        }, n.onresize = function() {
            this.adjustRenderSize(), this.isUserInteracting = !1
        }, n._update = function() {
            if (!this.isVRPresenting) {
                this._phi = THREE.Math.degToRad(90 + this._coordinates.lat), this._theta = THREE.Math.degToRad(this._coordinates.long), this._camera.position.set(Math.sin(this._phi) * Math.cos(this._theta), Math.cos(this._phi), Math.sin(this._phi) * Math.sin(this._theta)), this._camera.lookAt(this._camera.target), this._camera.rotation.z += this._rotation;
                const e = this.cameraProps;
                this._telecine.fire(wn.CAMERA_UPDATE, e), this._previousCameraProps.yaw === e.yaw && this._previousCameraProps.pitch === e.pitch && this._previousCameraProps.roll === e.roll && this._previousCameraProps.fov === e.fov || (this._previousCameraProps = e, this._telecine.fire(wn.CAMERA_CHANGE, e))
            }
            this._renderer.render(this._scene, this._camera)
        }, n.adjustRenderSize = function() {
            if (this.isVRPresenting) this._camera.aspect = this._video.clientWidth / this._video.clientHeight, this._camera.updateProjectionMatrix(), this._renderer.setSize(this._video.clientWidth, this._video.clientHeight);
            else {
                this._video.clientWidth > this._video.clientHeight ? this._camera.aspect = Math.max(1, Math.min(2, this._video.clientWidth / this._video.clientHeight)) : this._camera.aspect = Math.max(1 / 3, Math.min(3, this._video.clientWidth / this._video.clientHeight)), this._camera.updateProjectionMatrix();
                const e = cr(this._video.clientWidth, this._video.clientHeight, this._camera.aspect, 1);
                this._renderer.setSize(e.width, e.height), this._output.style.paddingTop = `${e.top}px`
            }
        }, n._startRendering = function() {
            this._renderer.setAnimationLoop(() => {
                this._keyIsDown() && this._moveFromKeyPress(), this._update()
            })
        }, n._stopRendering = function() {
            this._renderer.setAnimationLoop(null)
        }, n._showOutput = function() {
            this._styleOutput({
                backgroundColor: "#000",
                display: "block"
            })
        }, n._hideOutput = function() {
            this._styleOutput({
                backgroundColor: "#000",
                display: "none"
            })
        }, n._styleOutput = function({
            backgroundColor: e,
            display: t
        } = {}) {
            this._output.style.cssText = `position:absolute;left:0;top:0;margin-left:auto;margin-right:auto;padding:0;background:${e};width:100%;height:100%;text-align:center;display:${t}`
        }, on(t, [{
            key: "currentCoordinates",
            get: function() {
                return this._coordinates
            },
            set: function([e, t]) {
                if (e > 90 || e < -90) throw new RangeError("Latitude should be a float between -90 and 90.");
                if (t < 0 || t > 360) throw new RangeError("Longitude should be a float between 0 and 360.");
                this._updateViewpoint(e, t), this._update()
            }
        }, {
            key: "cameraProps",
            get: function() {
                return {
                    yaw: this._coordinates.long,
                    pitch: this._coordinates.lat,
                    roll: this.roll,
                    fov: this.fieldOfView
                }
            },
            set: function(e) {
                e = cn(cn({}, this.cameraProps), e), this.fieldOfView = e.fov, this.roll = e.roll, this.currentCoordinates = [e.pitch, e.yaw]
            }
        }, {
            key: "roll",
            get: function() {
                return 180 * this._rotation / Math.PI
            },
            set: function(e) {
                if (e < -180 || e > 180) throw new RangeError("Roll should be a float between -180 and 180.");
                this._rotation = THREE.Math.degToRad(e)
            }
        }, {
            key: "isVRPresenting",
            get: function() {
                return this._webvr && this._webvr.isPresenting
            }
        }, {
            key: "fieldOfView",
            get: function() {
                return this._camera ? this._camera.fov : this._options.fieldOfView
            },
            set: function(e) {
                this._camera.fov = e, this._camera.updateProjectionMatrix(), this._renderer.render(this._scene, this._camera)
            }
        }, {
            key: "hasVRHeadset",
            get: function() {
                return this._webvr && !!this._webvr.device
            }
        }]), t
    }(ts);

function As(e) {
    return "symbol" == typeof e || V(e) && "[object Symbol]" == _(e)
}
var Is = /^\s+|\s+$/g,
    ws = /^[-+]0x[0-9a-f]+$/i,
    Rs = /^0b[01]+$/i,
    Ps = /^0o[0-7]+$/i,
    Ds = parseInt;

function ks(e) {
    if ("number" == typeof e) return e;
    if (As(e)) return NaN;
    if (p(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = p(t) ? t + "" : t
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = e.replace(Is, "");
    var n = Rs.test(e);
    return n || Ps.test(e) ? Ds(e.slice(2), n ? 2 : 8) : ws.test(e) ? NaN : +e
}
var Os = a ? a.prototype : void 0,
    Cs = Os ? Os.toString : void 0;

function Ls(e) {
    if ("string" == typeof e) return e;
    if (K(e)) return function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
        return i
    }(e, Ls) + "";
    if (As(e)) return Cs ? Cs.call(e) : "";
    var t = e + "";
    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
}

function Ns(e) {
    return null == e ? "" : Ls(e)
}
var Ms = o.isFinite,
    xs = Math.min,
    Fs = function(e) {
        var t = Math.round;
        return function(e, n) {
            if (e = ks(e), (n = null == n ? 0 : xs(function(e) {
                    var t = function(e) {
                            return e ? (e = ks(e)) === 1 / 0 || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
                        }(e),
                        n = t % 1;
                    return t == t ? n ? t - n : t : 0
                }(n), 292)) && Ms(e)) {
                var r = (Ns(e) + "e").split("e");
                return +((r = (Ns(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n))
            }
            return t(e)
        }
    }();

function Us(e) {
    return !isNaN(e)
}

function Bs(e) {
    return Fs(e, 3)
}
let js = 0;

function Vs(e = "b") {
    return `${e}${++js}`
}
Vs(), Vs();
const Hs = Vs(),
    Xs = Vs(),
    qs = Vs(),
    Gs = Vs(),
    Ws = Vs(),
    Ks = Vs(),
    Ys = Vs(),
    $s = Vs(),
    zs = Vs(),
    Qs = Vs(),
    Js = Vs(),
    Zs = Vs(),
    eo = Vs(),
    to = Vs(),
    no = Vs(),
    ro = Vs();
var io = Object.freeze({
        __proto__: null,
        CONFIG_CHANGED: Ks,
        TELECINE_READY: Ys,
        TELECINE_VIDEO_INIT: $s,
        PLAY_INITIATED: zs,
        QUALITY_CHANGED: Qs,
        FORCED_QUALITY: Js,
        CUE_CHANGED: Zs,
        CAPTIONS_CHANGED: eo,
        SPATIAL_PLAYBACK_TOGGLED: to,
        PICTURE_IN_PICTURE_AVAILABLE_SAFARI: no,
        HLS_QUALITY_CHANGED: ro
    }),
    so = Object.freeze({
        __proto__: null,
        EVENT_PENDING: "liveeventpending",
        EVENT_ACTIVE: "liveeventactive",
        EVENT_STARTING: "liveeventstarting",
        EVENT_STARTED: "liveeventstarted",
        EVENT_ENDED: "liveeventended",
        ARCHIVE_STARTED: "livearchivestarted",
        ARCHIVE_DONE: "livearchivedone",
        ARCHIVE_ERROR: "livearchiveerror",
        SETTINGS_UPDATED: "livesettingsupdated",
        LOW_LATENCY_FALLBACK: "lowlatencyfallback",
        LIVE_STATS_SUCCESS: "livestatssuccess",
        LIVE_STATS_FAILURE: "livestatsfailure"
    });
const oo = {
        h264: "video/mp4",
        hls: "application/vnd.apple.mpegurl",
        hlsLive: "application/x-mpegURL",
        dash: "application/vnd.vimeo.dash+json",
        dashMpd: "video/vnd.mpeg.dash.mpd",
        vp6: "video/x-flv",
        vp8: "video/webm",
        webm: "video/webm",
        hds: "application/f4m"
    },
    ao = {
        "application/vnd.apple.mpegurl": "hls",
        "application/vnd.vimeo.dash+json": "dash",
        "video/vnd.mpeg.dash.mpd": "dash",
        "video/mp4": "progressive",
        "video/webm": "progressive",
        "video/x-flv": "progressive",
        "application/x-mpegURL": "hlslive"
    },
    uo = (cn(cn(cn(cn(cn(cn(cn(cn(cn({}, Sn), An), In), so), wn), Tn), Rn), Pn), io), cn(cn({}, In), so));

function co(e) {
    var t;
    return "done" === (null == e || null == (t = e.archive) ? void 0 : t.status)
}

function lo(e) {
    return "pending" === (null == e ? void 0 : e.status)
}

function ho(e) {
    return "started" === (null == e ? void 0 : e.status)
}

function fo(e) {
    return "ended" === (null == e ? void 0 : e.status)
}

function _o(e) {
    return po(e, "/playlist/refresh")
}

function po(e, t) {
    var n;
    const r = null == (n = e.request.files.hls) ? void 0 : n.default_cdn,
        {
            signature: i,
            timestamp: s,
            expires: o
        } = e.request;
    return `${`https://${e.player_url}/live/${e.video.id}`}${t}${`?signature=${i}&time=${s}&expires=${o}&cdn=${r}`}`
}
var mo = Object.prototype.hasOwnProperty;

function vo(e) {
    if (null == e) return !0;
    if (ve(e) && (K(e) || "string" == typeof e || "function" == typeof e.splice || Q(e) || ue(e) || W(e))) return !e.length;
    var t = Ke(e);
    if ("[object Map]" == t || "[object Set]" == t) return !e.size;
    if (de(e)) return !me(e).length;
    for (var n in e)
        if (mo.call(e, n)) return !1;
    return !0
}

function go(e) {
    const t = this;
    let n = {};
    const r = {
        get attributes() {
            return Object.assign({}, t)
        },
        get previousAttributes() {
            return n
        },
        clear() {
            i();
            var e = t.attributes;
            for (var n in e) delete t[n]
        },
        set(e) {
            for (var n in i(), e = lt(e)) t[n] = e[n]
        },
        clone: () => new go(t.attributes),
        toJSON: () => lt(t.attributes)
    };

    function i() {
        vo(t.attributes) || (n = lt(t.attributes))
    }
    return r.set(e), vt(t, r)
}

function yo(e, t) {
    const n = new go(rn(e, t));
    let r = !1;
    return gt(n, {
        reset: function(e) {
            return n.clear(),
                function(e) {
                    r = !0, n.set(e), rn(n, t)
                }(e), n
        },
        isNewVideo: function() {
            const e = n.previousAttributes;
            return !r || e.video.id !== n.video.id || e.video.version.current !== n.video.version.current || e.video.live_event && !co(e.video.live_event) && (!n.video.live_event || co(n.video.live_event))
        }
    })
}
var Eo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    So = /^\w*$/;

function To(e, t) {
    if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
    var n = function n() {
        var r = arguments,
            i = t ? t.apply(this, r) : r[0],
            s = n.cache;
        if (s.has(i)) return s.get(i);
        var o = e.apply(this, r);
        return n.cache = s.set(i, o) || s, o
    };
    return n.cache = new(To.Cache || N), n
}
To.Cache = N;
var bo = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Ao = /\\(\\)?/g,
    Io = function(e) {
        var t = To((function(e) {
                var t = [];
                return 46 === e.charCodeAt(0) && t.push(""), e.replace(bo, (function(e, n, r, i) {
                    t.push(r ? i.replace(Ao, "$1") : n || e)
                })), t
            }), (function(e) {
                return 500 === n.size && n.clear(), e
            })),
            n = t.cache;
        return t
    }();

function wo(e, t) {
    return K(e) ? e : function(e, t) {
        if (K(e)) return !1;
        var n = typeof e;
        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !As(e)) || So.test(e) || !Eo.test(e) || null != t && e in Object(t)
    }(e, t) ? [e] : Io(Ns(e))
}

function Ro(e) {
    if ("string" == typeof e || As(e)) return e;
    var t = e + "";
    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
}

function Po(e, t) {
    for (var n = 0, r = (t = wo(t, e)).length; null != e && n < r;) e = e[Ro(t[n++])];
    return n && n == r ? e : void 0
}

function Do(e, t, n) {
    var r = null == e ? void 0 : Po(e, t);
    return void 0 === r ? n : r
}

function ko(e, t, n) {
    return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = ks(n)) == n ? n : 0), void 0 !== t && (t = (t = ks(t)) == t ? t : 0),
        function(e, t, n) {
            return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
        }(ks(e), t, n)
}

function Oo(e) {
    return e.quality || e.metadata.quality
}

function Co(e, t = !1, n = !1) {
    let r = e.url;
    if ("avc_url" in e && (r = e.avc_url), n) return r;
    const i = t ? Gn.spatialHEVC && Gn.hevc : Gn.hevc,
        s = t ? Gn.spatialHEVC && Gn.hdr : Gn.hdr;
    return Gn.dolbyVision && "hevc_dvh1_url" in e ? r = e.hevc_dvh1_url : s && "hevc_hdr_url" in e ? r = e.hevc_hdr_url : i && "hevc_sdr_url" in e ? r = e.hevc_sdr_url : Gn.av1 && "av1_url" in e && (r = e.av1_url), r
}

function Lo(e) {
    return e.fallback_url
}

function No(e, t = !1) {
    const n = e.request.files,
        r = n.hls.default_cdn,
        i = e.request.drm,
        s = n.hls.cdns[r],
        o = t ? Lo(s) : Co(s, e.video.spatial, i);
    return {
        id: `hls-${r}-${e.video.id}`,
        src: o,
        mime: oo.hls,
        priority: 2,
        metadata: {
            cdn: r,
            origin: n.hls.cdns[r].origin,
            quality: "sd"
        }
    }
}

function Mo(e, t = !1) {
    const n = e.request.files;
    return vo(n.dash) ? [] : Object.keys(n.dash.cdns).map(r => {
        const i = n.dash.cdns[r],
            s = t ? Lo(i) : Co(i, e.video.spatial);
        return {
            id: `dash-${r}-${e.video.id}`,
            src: s,
            mime: e.request.drm ? oo.dashMpd : oo.dash,
            priority: r === n.dash.default_cdn ? 1 : 2,
            metadata: {
                cdn: r,
                origin: n.dash.cdns[r].origin,
                quality: "sd"
            }
        }
    })
}

function xo(e) {
    if (vo(e.progressive)) return [];
    let t = e.progressive;
    return "progressive_avc" in e && (t = e.progressive_avc), t.filter(Uo(t))
}

function Fo(e) {
    if ("number" == typeof e) return e;
    const t = e.split("-");
    return 5 === t.length ? t[0] : parseInt(t[0], 10)
}

function Uo(e) {
    const t = e.filter(Bo).map(Oo);
    return e => -1 === t.indexOf(Oo(e)) || Bo(e)
}

function Bo(e) {
    let t = e.fps;
    return "metadata" in e && (t = e.metadata.fps), t > 30
}

function jo(e) {
    return Vo(e) >= 720
}

function Vo(e) {
    return "string" != typeof e && (e = Oo(e)), parseInt(e, 10)
}

function Ho(e) {
    const t = xo(e.request.files).map(e => e.quality);
    return Xo(e, e.embed.quality, t)
}

function Xo(e, t, n = []) {
    return e.embed.on_site || Gn.android || Gn.iOS || Gn.windowsPhone || !t || n.length && -1 === n.indexOf(t) ? null : t
}

function qo(e = "desc") {
    return (t, n) => {
        const r = Vo(t),
            i = Go(t),
            s = Vo(n),
            o = Go(n);
        return "asc" === e ? r - s || i - o : s - r || o - i
    }
}

function Go(e) {
    return "object" != typeof e ? 0 : "fps" in e ? e.fps : "metadata" in e && "fps" in e.metadata ? e.metadata.fps : 0
}

function Wo(e) {
    const t = e.video.live_event,
        n = e.request.files;
    if (!vo(n.hls)) {
        var r;
        const i = n.hls.default_cdn,
            s = n.hls.cdns[i].json_url || (null == (r = t.playback) ? void 0 : r.hls_noredirect),
            o = e.request.flags.live_dash ? 2 : 1;
        return {
            id: `hls-${i}-${e.video.id}`,
            src: s,
            mime: oo.hlsLive,
            priority: o,
            metadata: {
                cdn: i,
                origin: n.hls.cdns[i].origin,
                quality: "sd"
            }
        }
    }
    return null
}

function Ko(e, t) {
    let n = [];
    if (t.video) {
        const r = t.video.currentFile.mime;
        if (r === oo.hlsLive) return t.manifest.video.map(e => cn(cn({}, e), {}, {
            quality: `${e.height}p`
        }));
        if ([oo.dash, oo.dashMpd].includes(r)) {
            const r = t.video.drmHandler && "sd-fallback" === t.video.drmHandler.state;
            n = function(e, t = !1, n = !1) {
                if (!e) return [];
                let r = e.streams;
                "streams_avc" in e && (r = e.streams_avc);
                const i = t ? Gn.spatialHEVC && Gn.hevc : Gn.hevc,
                    s = t ? Gn.spatialHEVC && Gn.hdr : Gn.hdr;
                return Gn.dolbyVision && "streams_hevc_dvh1" in e ? r = e.streams_hevc_dvh1 : s && "streams_hevc_hdr" in e ? r = e.streams_hevc_hdr : i && "streams_hevc_sdr" in e ? r = e.streams_hevc_sdr : Gn.av1 && "streams_av1" in e && (r = e.streams_av1), n && "streams_fallback" in e && (r = e.streams_fallback), r
            }(e.request.files.dash, e.video.spatial, r)
        } else n = t.video.files.filter(e => "progressive" === ao[e.mime])
    }
    return n.filter(Uo(n)).sort(qo())
}

function Yo(e) {
    let t = Oo(e);
    const n = {
        "1440p": "2K",
        "2160p": "4K",
        "2700p": "5K",
        "3240p": "6K",
        "3780p": "7K",
        "4320p": "8K"
    };
    for (const r in n) t = t.replace(r, n[r]);
    return t
}

function $o(e) {
    return Gn.spatialPlayback && e.video.spatial ? 35 : 75
}

function zo(e) {
    return e.request.text_tracks.map(e => ({
        id: e.id,
        src: e.url,
        kind: e.kind,
        label: e.label,
        language: e.lang
    }))
}
let Qo = {
        captureException(e) {},
        captureMessage(e) {},
        captureBreadcrumb() {}
    },
    Jo = Qo;
var Zo = {
    set: function(e) {
        Jo = Object.assign({}, Qo, e)
    },
    captureException: function(e, t) {
        return Jo.captureException(e, t)
    },
    captureMessage: function(e, t) {
        return Jo.captureMessage(e, t)
    },
    captureBreadcrumb: function(e, t, n = "backbone", r = "info") {
        return Jo.captureBreadcrumb(e, t, n, r)
    }
};

function ea(e, t, n) {
    const r = e.embed.playsinline && (Gn.mobileAndroid || Gn.iOS >= 10);
    let i = !1,
        s = !1,
        o = !1,
        a = !0,
        u = "auto";

    function c(e) {
        var t, r, i, s, o, a;
        const {
            embed: u
        } = e;
        n.disablePictureInPicture = !(null === (t = null !== (r = u.pip) && void 0 !== r ? r : null == (i = u.settings) ? void 0 : i.pip) || void 0 === t || t), n.autoPictureInPicture = null === (s = null !== (o = u.auto_pip) && void 0 !== o ? o : null == (a = u.settings) ? void 0 : a.auto_pip) || void 0 === s || s
    }

    function l(e) {
        if (!a && n.buffered && n.buffered.length > 0) {
            e = e || n.currentTime;
            const r = function(e, t) {
                    var n = e.length - 1;
                    if (e.length > 1)
                        for (var r = 0, i = e.length; r < i; r++)
                            if (e.start(r) <= t && e.end(r) >= t) {
                                n = r;
                                break
                            }
                    return n
                }(n.buffered, e),
                s = n.buffered.end(r),
                a = s / n.duration,
                u = n.duration;
            if (t.fire(Sn.PROGRESS, {
                    loaded: s,
                    duration: u,
                    loadProgress: a
                }), o && i && s === n.duration) return void(i && n.paused && n.play().catch(Zo.captureException))
        }
    }

    function h(t) {
        if ("auto" === t) return void(n.video.currentFile.restrictedStreamIndexes = []);
        const r = Ko(e, n).reverse().map(e => e.quality).indexOf(t); - 1 !== r && (Zo.captureBreadcrumb(`Switched to ${t}`, {}, "video"), n.video.currentFile.restrictedStreamIndexes = [r])
    }

    function d(r) {
        const i = Ko(e, n).map(e => e.quality),
            s = Xo(e, e.embed.quality, i);
        s && t.fire(Js, s), h(s || "auto")
    }
    return t.on($s, (function() {
        var t;
        n.playsinline = r, n.muted = e.embed.muted, n.lowLatencyMode = null == (t = e.video.live_event) ? void 0 : t.low_latency
    })), t.on(Xs, (function() {
        a = !0, n.paused || n.pause(), s = !1, i = !1, n.currentTime = 0
    })), n.on(Sn.PLAY, (function() {
        a = !1, t.fire(Sn.PLAY, n.currentTime)
    })), n.on(Sn.PAUSE, (function() {
        i = !1, t.fire(Sn.PAUSE, n.currentTime, n.ended)
    })), n.on(Sn.PLAYING, (function(e) {
        l()
    })), n.on(Sn.TIME_UPDATE, (function(e) {
        const r = n.currentTime;
        if (!a) {
            const e = n.duration,
                i = r / e,
                s = n.playbackRate;
            t.fire(Sn.TIME_UPDATE, {
                currentTime: r,
                duration: e,
                timeProgress: i,
                playbackRate: s
            })
        }
    })), n.on(Sn.ENDED, (function(e) {
        n.loop ? n.play().catch(Zo.captureException) : (i = !1, t.fire(Sn.ENDED, e))
    })), n.on(Sn.LOADED_METADATA, (function(t) {
        const r = n.duration;
        if (isFinite(r) && r > 0) {
            if (r < e.video.duration - 1 || r > e.video.duration + 1) return;
            e.video.duration = r
        }
        e.video.video_width = n.videoWidth, e.video.video_height = n.videoHeight
    })), n.on(Sn.DURATION_CHANGE, (function(t) {
        const r = n.duration;
        isFinite(r) && (e.video.duration > 0 && (r < e.video.duration - 1 || r > e.video.duration + 1) || (e.video.duration = r))
    })), n.on(Sn.PROGRESS, l), n.on(An.BUFFER_STARTED, () => {
        o = !0
    }), n.on(An.BUFFER_ENDED, () => {
        o = !1
    }), t.on(Hs, (function(t, r) {
        r || (r = (n.duration || e.video.duration) * ko(t, 0, 1)), r = ko(r, 0, Bs(n.duration || e.video.duration)), n.currentTime = r
    })), n.on(Sn.SEEKING, (function() {
        const e = n.currentTime,
            r = n.duration,
            i = e / r;
        t.fire(Sn.SEEKING, {
            currentTime: e,
            duration: r,
            timeProgress: i
        })
    })), n.on(Sn.SEEKED, (function() {
        l();
        const e = n.currentTime,
            r = n.duration,
            i = e / r;
        t.fire(Sn.SEEKED, {
            currentTime: e,
            duration: r,
            timeProgress: i
        })
    })), n.on(An.CURRENT_FILE_CHANGE, (function(r) {
        Zo.captureBreadcrumb("Current file changed", {
            id: r.id,
            mime: r.mime,
            src: r.src,
            metadata: r.metadata
        }, "video"), r.metadata.quality, [oo.dash, oo.dashMpd].includes(r.mime) && d(), [oo.hlsLive].includes(r.mime) ? n.once(An.STREAMS_LOADED, () => {
            d()
        }) : function(n) {
            const r = Ho(e);
            r && t.fire(Js, r)
        }()
    })), n.on(Sn.RESIZE, (function() {
        n.video.currentFile.mime === oo.hls && n.videoHeight && t.fire(ro, {
            height: n.videoHeight
        })
    })), c(e), t.on(Ks, (e, t) => {
        var n, r;
        (null == t || null == (n = t.embed.settings) ? void 0 : n.pip) !== (null == (r = e.embed.settings) ? void 0 : r.pip) && c(e)
    }), {
        play: function() {
            return i = !0, s || (t.fire(zs), s = !0), n.play()
        },
        pause: function() {
            i = !1, n.pause()
        },
        get quality() {
            return u
        },
        set quality(r) {
            ! function(r) {
                const i = n.video.currentFile.mime;
                if ([oo.dash, oo.dashMpd, oo.hlsLive].includes(i)) h(r);
                else {
                    const t = Ko(e, n).filter(e => e.metadata.quality === r);
                    t.length > 0 && (a = !0, n.video.currentFile = t[0])
                }
                u = r, t.fire(Qs, r)
            }(r)
        }
    }
}

function ta(e, t, n) {
    let r = null;
    Gn.spatialPlayback && (t.on($s, (function() {
        r && (n.deactivateEffect(bs), r = null, t.fire(to, r));
        const i = e.video.spatial;
        i && (e.request.drm || n.supportsEffect(bs) && (r = n.activateEffect(bs, {
            threeUrl: e.request.urls.three_js,
            fps: e.video.fps,
            fieldOfView: i.fov,
            directorTimeline: i.director_timeline,
            projection: i.projection,
            stereoMode: i.stereo_mode,
            initialView: i.initial_view,
            isMobile: Gn.android,
            dimensions: e.embed.on_site ? {
                width: 1080,
                height: 540
            } : {
                width: 640,
                height: 360
            },
            keyboardDisabled: !e.embed.keyboard
        }), t.fire(to, r)))
    })), n.on(wn.SPATIAL_UNSUPPORTED, (function() {
        r && (n.deactivateEffect(bs), r = null, t.fire(to, r))
    })))
}

function na(e, t, n) {
    let r = null;
    t.on($s, (function() {
        r && (n.deactivateEffect(gs), r = null), e.video.canvas && (e.request.drm || n.supportsEffect(gs) && (r = n.activateEffect(gs)))
    }))
}
var ra = tn((function(e, t, n) {
    Zt(e, t, n)
}));

function ia(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
let sa = function() {
    function e(e, t, n) {
        ft(this), this._liveEvent = lt(e), this._sessionUrl = e.session_url || e.sessionUrl, this._sessionRefreshUrl = t, this._appPollUrl = n, this._forcedPoll = !1, this._disabled = !1, this._setupPolling()
    }
    var t = e.prototype;
    return t.disable = function() {
        this._disabled = !0
    }, t.forcePolling = function() {
        this.isForcePolling || (this._forcedPoll = !0, this._setupPolling())
    }, t.unforcePolling = function() {
        this._forcedPoll = !1
    }, t._setupPolling = function() {
        !1 !== this._liveEvent.polling && (this._shouldPollApp() ? this._pollApp() : this._shouldPoll() && this._pollLiveApi())
    }, t._shouldPoll = function() {
        var e;
        return !(fo(this._liveEvent) && "started" !== (null == (e = this._liveEvent.archive) ? void 0 : e.status) || !this.isForcePolling && ho(this._liveEvent))
    }, t._shouldPollApp = function() {
        return !this._sessionUrl || !(!lo(this._liveEvent) || null !== this._liveEvent.id)
    }, t._refreshSessionUrl = function() {
        try {
            const e = this;
            return ia(ei(e._sessionRefreshUrl).json(), (function(t) {
                return e._sessionUrl = t.url, t.url
            }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, t._pollLiveApi = function() {
        try {
            const e = this;
            if (e._disabled) return;
            let t, n = {};
            return Gn.browser.ie && (n = {
                    Pragma: "no-cache",
                    "Cache-Control": "no-cache"
                }),
                function(e, t) {
                    return e && e.then ? e.then(t) : t()
                }(function(r, i) {
                    try {
                        var s = ia(ei({
                            url: e._sessionUrl,
                            retry: 3,
                            retryStatus: e => [410].includes(e) || Lr.retryStatus(e),
                            hooks: {
                                beforeRetry: [e._beforeRetry.bind(e)]
                            },
                            headers: n
                        }).json(), (function(e) {
                            t = e
                        }))
                    } catch (rl) {
                        return i()
                    }
                    return s && s.then ? s.then(void 0, i) : s
                }(0, (function() {
                    throw new Error(`Hit max retries polling ${e._sessionUrl}`)
                })), (function(n) {
                    if (t.status !== e._liveEvent.status) {
                        if (fo(t) && "provision_expire" === t.terminate_reason) return e._sessionUrl = null, e._liveEvent.id = null, void setTimeout(e._setupPolling.bind(e), 5e3);
                        const n = {
                            active: uo.EVENT_ACTIVE,
                            pending: uo.EVENT_PENDING,
                            started: uo.EVENT_STARTED,
                            ended: uo.EVENT_ENDED
                        }[t.status];
                        try {
                            e.fire(n, t)
                        } catch (r) {
                            throw new Error(`Error firing live event status change ${r}`)
                        }
                    }
                    if (t.archive && (!e._liveEvent.archive || t.archive.status !== e._liveEvent.archive.status)) {
                        const n = {
                            started: uo.ARCHIVE_STARTED,
                            done: uo.ARCHIVE_DONE,
                            error: uo.ARCHIVE_ERROR
                        }[t.archive.status];
                        e.fire(n, t)
                    }
                    e._liveEvent = ra(e._liveEvent, t), e._shouldPoll() && setTimeout(e._pollLiveApi.bind(e), 5e3)
                }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, t._beforeRetry = function(e, t) {
        try {
            return ia(this._refreshSessionUrl(), (function(t) {
                e.url = t
            }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, t._pollApp = function() {
        try {
            const e = this;
            if (e._disabled) return;
            return ia(ei(e._appPollUrl).json(), (function(t) {
                let n = !1;
                return function(r, i) {
                    var s = function() {
                        if (null !== t.ingest.session_id) return e._liveEvent.id = t.ingest.session_id, ia(e._refreshSessionUrl(), (function() {
                            e._pollLiveApi(), n = !0
                        }))
                    }();
                    return s && s.then ? s.then(i) : i(s)
                }(0, (function(t) {
                    if (n) return t;
                    setTimeout(e._pollApp.bind(e), 5e3)
                }))
            }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, on(e, [{
        key: "isForcePolling",
        get: function() {
            return this._forcedPoll
        }
    }]), e
}();

function oa(e, t, n) {
    if (n) return t ? t(e()) : e();
    try {
        var r = Promise.resolve(e());
        return t ? r.then(t) : r
    } catch (rl) {
        return Promise.reject(rl)
    }
}

function aa(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function ua(e, t) {
    var n = e();
    return n && n.then ? n.then(t) : t(n)
}

function ca(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }
}

function la(e, t) {
    try {
        var n = e()
    } catch (rl) {
        return t(rl)
    }
    return n && n.then ? n.then(void 0, t) : n
}

function ha(e, t, n) {
    const r = ca((function() {
            return la((function() {
                return oa(y, (function(e) {
                    return e(n)
                }))
            }), (function(e) {
                return Zo.captureException(e), null
            }))
        })),
        i = ca((function(e) {
            return la((function() {
                return oa(g, (function(t) {
                    return t(n, {
                        TelecineEvents: An,
                        VideoEvents: Sn
                    }, e)
                }))
            }), (function(e) {
                return null
            }))
        })),
        s = ca((function() {
            if (c && c.stop(), e.video.p2p) return h = new It, ua((function() {
                if (!c) return function(e = 30) {
                    n.bufferTarget = e, n.presentationDelay = e
                }(), aa(i(e.video.p2p), (function(e) {
                    c = e
                }))
            }), (function() {
                var e;
                null == (e = c) || e.setUp(), h.resolve()
            }))
        })),
        o = ca((function() {
            const {
                kollective_jwt: t,
                kollective_jitc: n
            } = e.video;
            if (l && l.stop(), t && n) return h = new It, ua((function() {
                if (!l) return oa(r, (function(e) {
                    l = e
                }))
            }), (function() {
                var e;
                return aa(null == (e = l) ? void 0 : e.setUp(n, t), (function() {
                    h.resolve()
                }))
            }))
        }));
    let a, u, c, l, h, d, f = !1,
        _ = 0,
        p = 0;

    function m() {
        u && (u.disable(), u = null)
    }

    function v() {
        n.endLive()
    }

    function g() {
        return import ("./streamroot.module.js").then(({
            default: e
        }) => e)
    }

    function y() {
        return import ("./kollective.module.js").then(({
            default: e
        }) => e)
    }
    return t.on(Ks, (function() {
        a && !e.isNewVideo() || (a = !0, o(), s(), m(), e.video.live_event && !co(e.video.live_event) && (function(n) {
            u = new sa(n, function(e) {
                return po(e, "/session/refresh")
            }(e), function(e) {
                return `https://${e.vimeo_url}/live_event/status?clip_id=${e.video.id}`
            }(e)), u.on(uo.EVENT_ENDED, v), Object.keys(uo).forEach(e => {
                const n = uo[e];
                u.on(n, e => {
                    t.fire(n, e)
                })
            })
        }(e.video.live_event), function() {
            _ = 0, p = 0;
            let e = !1;
            n.once(Sn.PLAYING, () => e = !0);
            let r = Pt();
            clearInterval(d), d = setInterval(() => {
                n.paused || (_ += Dt(r) / 1e3), e && f && (p += Dt(r) / 1e3),
                    function(e) {
                        if (n.lowLatencyMode && e > 12 && n.latency > 10 && f) {
                            const e = "Rebuffer ratio > 12% and latency > 10s, fallback to normal HLS w/ target latency of 12s.";
                            t.fire(uo.LOW_LATENCY_FALLBACK, {
                                msg: e
                            }), n.lowLatencyMode = !1, n.presentationDelay = 12, n.bufferTarget = 12
                        }
                    }(p / _ * 100), r = Pt()
            }, 500)
        }()))
    })), t.on(qs, (function() {
        c && (c.destroy(), c = null), l && (l.destroy(), l = null), m()
    })), n.on(uo.STREAM_ONLINE, (function() {
        u.isForcePolling && u.unforcePolling()
    })), n.on(uo.STREAM_OFFLINE, (function() {
        u.isForcePolling || u.forcePolling()
    })), n.on(An.BUFFER_STARTED, (function() {
        f = !0
    })), n.on(An.BUFFER_ENDED, (function() {
        f = !1
    })), {
        get p2pReady() {
            return h
        }
    }
}

function da(e, t = []) {
    if (!e || "null" === e || 0 === t.length) return {
        track: null
    };
    const [n, r] = e.split("."), [i] = n.split(/[-_]/), s = n !== i, o = t.filter(e => s && e.language === n || e.language === i).sort((e, t) => {
        const s = 2 * (e.language === i && e.kind === r) + 2 * (e.language === n) + 1 * (e.kind === r);
        return 2 * (t.language === i && t.kind === r) + 2 * (t.language === n) + 1 * (t.kind === r) - s
    });
    return o.length > 0 ? {
        track: o[0],
        exactMatch: o[0].language === n && o[0].kind === r
    } : {
        track: null
    }
}

function fa(e) {
    const t = e.split(/\n/g);
    let n = "",
        r = [];
    return t.forEach(e => {
        let t = e.match(/<[a-zA-Z]+ ?.*?>/g) || [],
            i = e.match(/<\/[a-zA-Z]+ ?.*?>/g) || [];
        const s = r.map(({
            startTag: e
        }) => e);
        r = [], t = s.concat(t), t.forEach(e => {
            let [t] = e.replace(/<|>/g, "").split(" ");
            const n = i.indexOf(`</${t}>`); - 1 !== n ? i.splice(n, 1) : r.push({
                startTag: e,
                closeTag: `</${t}>`
            })
        });
        const o = r.map(({
                closeTag: e
            }) => e).reverse().join(""),
            a = s.join("");
        n += `<span class="vp-captions-line">${a}${e}${o}</span>`
    }), n
}

function _a(e, t, n, r) {
    let i;

    function s() {
        return t.pictureInPictureActive ? "showing" : "hidden"
    }

    function o() {
        if (0 !== t.video.textTracks.length) {
            if (t.video.textTracks.forEach(e => {
                    e.on("cuechange", a), e.on("modechange", u)
                }), t.video.textTracks.language) {
                const [n] = t.video.textTracks.language.split(/[-_]/), [r] = t.video.textTracks.language.split(/[-_]/);
                if (n !== r) {
                    const n = `${t.video.textTracks.language}.subtitles`,
                        {
                            track: r
                        } = da(n, t.video.textTracks);
                    if (r) return void e.fire(Gs, n)
                }
            }
            e.fire(Ws)
        } else e.fire(Ws)
    }

    function a(t) {
        const n = t.target,
            r = n.activeCues,
            i = [];
        let s;
        for (var o = 0, a = r.length; o < a; o++) "" !== r[o].text.replace(/^\s+|\s+$/gm, "") && (s = document.createElement("span"), s.appendChild(r[o].getCueAsHTML()), i.push({
            html: fa(s.innerHTML),
            text: r[o].text
        }));
        e.fire(Zs, n, i)
    }

    function u(t) {
        const r = t.target,
            i = n.querySelector("video");
        Gn.iOS && function(e) {
            const t = [document.fullscreenElement, document.webkitFullscreenElement, document.webkitCurrentFullScreenElement, document.mozFullScreenElement, document.msFullscreenElement].find(e => void 0 !== e);
            return void 0 !== t ? !!t : e.webkitDisplayingFullscreen
        }(i) && "showing" === r.mode && e.fire(eo, r)
    }
    e.on($s, o), e.on(Gs, (function(n) {
        if (i && i.id === n) return;
        let r = t.video.textTracks.getTrackById(n),
            o = !0;
        r || ({
            track: r,
            exactMatch: o
        } = da(n, t.video.textTracks)), r !== i && setTimeout(() => {
            t.video && t.video.textTracks.forEach(e => {
                e.mode = e === r ? s() : "disabled"
            }), e.fire(eo, r, !o), i = r
        }, 0)
    })), e.on(Ws, (function() {
        setTimeout(() => {
            t.video && t.video.textTracks.forEach(e => {
                e.mode = "disabled"
            }), e.fire(Zs), i && (i = null, e.fire(eo, null))
        }, 0)
    })), e.on(An.TEXT_TRACKS_AVAILABLE, o), e.on([Sn.ENTER_PICTURE_IN_PICTURE, Sn.LEAVE_PICTURE_IN_PICTURE], (function() {
        ! function(e) {
            i && i.mode !== e && (i.mode = e)
        }(s())
    }))
}

function pa(e, t, n) {
    let r, i, s;

    function o(e, t) {
        e.forEach(e => {
            const t = r.video.files.getFileById(e.id);
            t && t.src !== e.src && (t.src = e.src)
        }), t.forEach(e => {
            const t = r.video.textTracks.getTrackById(e.id);
            t && t.src !== e.src && (t.src = e.src)
        })
    }
    return function() {
            var t;
            r = new vs(n, [Oi, zi, es, Or], {
                externalDisplays: [kn],
                mediaSourceScanner: {
                    droppedFrameSwitchPercent: $o(e)
                },
                tests: e.request.ab_tests,
                fileCodecs: e.request.file_codecs,
                bufferTarget: e.video.buffer_target,
                presentationDelay: e.video.presentation_delay,
                lowLatencyMode: null == (t = e.video.live_event) ? void 0 : t.low_latency,
                sessionMetadata: {
                    clipId: e.video.id,
                    sessionId: e.request.session
                }
            })
        }(), Object.values(Sn).filter(e => ![Sn.TIME_UPDATE, Sn.PROGRESS, Sn.SUSPEND, Sn.ERROR].includes(e)).forEach(e => {
            r.on(e, (t = "") => {
                Zo.captureBreadcrumb(e, t, "video event")
            })
        }), r.on(An.STREAMS_LOADED, (function(t) {
            t.video.forEach(t => {
                const n = function(e, t) {
                    return t.find(t => Fo(t.id) === String(e) || Fo(t.id) === Fo(e))
                }(t.id, Ko(e, r));
                n ? (t.profile = n.profile, t.quality = n.quality, t.fps = n.fps) : (t.profile = null, t.quality = `${t.height}p`, t.fps = t.framerate)
            })
        })), r.on(An.STREAM_CHANGE, (function({
            index: e,
            streams: n,
            metadata: r
        }) {
            const i = n[e];
            Zo.captureBreadcrumb("Stream changed", i, "video"), t.fire(An.STREAM_CHANGE, i, e, n, r)
        })), r.on(An.STREAM_TARGET_CHANGE, (function({
            index: e,
            streams: n
        }) {
            const r = n[e];
            t.fire(An.STREAM_TARGET_CHANGE, r, e, n)
        })), r.on(An.DRM_KEY_SWITCH, (function() {
            if (!e.request.drm.fallback_asset) return;
            const t = zo(e);
            o(function(e) {
                const t = e.request.files;
                let n = [];
                const r = e.request.drm && Gn.browser.safari;
                return (t.hls && (Gn.iPhone || Gn.iPad) || r) && (n = n.concat(No(e, !0))), t.dash && !r && (n = n.concat(Mo(e, !0))), n
            }(e), t)
        })),
        function(e, t, n) {
            [Tn.ACTIVATED, Tn.AVAILABLE, Tn.DEACTIVATED, Tn.UNAVAILABLE, In.STREAM_OFFLINE, In.STREAM_ONLINE, In.BUFFER_GAP_JUMP, In.BUFFER_GAP_JUMP_PREVENT, In.STALL_JUMP, Rn.MEDIASESSION_PAUSE, Rn.MEDIASESSION_PLAY, Rn.MEDIASESSION_SEEK_BACKWARD, Rn.MEDIASESSION_SEEK_FORWARD, An.AV_DURATION_MISMATCH, An.BANDWIDTH, An.BUFFER_ENDED, An.BUFFER_OCCUPANCY, An.BUFFER_STARTED, An.CHAPTER_CUES_UPDATED, An.CUE_POINT, An.CURRENT_FILE_CHANGE, An.DOWNLOAD_END, An.DOWNLOAD_TIMEOUT, An.DRM_AUTH_SUCCESS, An.DRM_KEY_SWITCH, An.DROPPED_FRAMES, An.MANIFEST_LOADED, An.MANIFEST_TIMEOUT, An.QUOTA_EXCEEDED_ERROR, An.SCANNER_CHANGE, An.STREAM_CHANGE_START, An.STREAM_BUFFER_END, An.STREAM_BUFFER_START, An.TEXT_TRACKS_AVAILABLE, An.DROPPED_FRAME_PERCENT_EXCEEDED, wn.CAMERA_UPDATE, wn.CAMERA_CHANGE, wn.MOTION_END, wn.MOTION_START, wn.SPATIAL_UNSUPPORTED, wn.WEBVR_ENTER, wn.WEBVR_EXIT, wn.WEBVR_HARDWARE_AVAILABLE, Pn.BRAIN_ML_SWITCH_TO_SKYFIRE, Pn.BRAIN_ML_MODEL_INPUTS, Sn.DURATION_CHANGE, Sn.ERROR, Sn.LOAD_START, Sn.LOADED_DATA, Sn.LOADED_METADATA, Sn.PLAYING, Sn.RATE_CHANGE, Sn.RESIZE, Sn.STALLED, Sn.VOLUME_CHANGE, Sn.WAITING, Sn.ENTER_PICTURE_IN_PICTURE, Sn.LEAVE_PICTURE_IN_PICTURE, Sn.WEBKIT_BEGIN_FULLSCREEN, Sn.WEBKIT_END_FULLSCREEN].forEach(n => {
                e(n, (...e) => {
                    t.apply(void 0, [n].concat(e))
                })
            })
        }(r.on, t.fire), t.fire(Ys), new _a(t, r, n, e), new ta(e, t, r), new na(e, t, r), s = new ha(e, t, r), i = new ea(e, t, r), t.on(Ks, (function() {
            const i = e.video.live_event;
            if (lo(i) || function(e) {
                    return "active" === (null == e ? void 0 : e.status)
                }(i) || fo(i) && !co(i)) return void(r.video = null);
            if (ho(i) && r.video && !e.isNewVideo()) return;
            const a = ho(i) ? function(e) {
                    const t = [],
                        n = Wo(e);
                    n && t.push(n);
                    const r = function(e) {
                        var t;
                        const n = e.video.live_event,
                            r = e.request.files;
                        if (vo(r.dash)) return null;
                        const i = r.dash.default_cdn,
                            s = r.dash.cdns[i].url || (null == (t = n.playback) ? void 0 : t.dash_noredirect),
                            o = e.request.flags.live_dash ? 2 : 1;
                        return {
                            id: `dash-${i}-${e.video.id}`,
                            src: s,
                            mime: oo.dashMpd,
                            priority: o,
                            metadata: {
                                cdn: i,
                                origin: r.dash.cdns[i].origin,
                                quality: "sd"
                            }
                        }
                    }(e);
                    return r && t.push(r), t
                }(e) : function(e) {
                    var t, n, r, i, s;
                    const o = e.request.files,
                        a = xo(o),
                        u = Ho(e),
                        c = e.request.cookie.quality || u || function(e) {
                            const t = xo(e.request.files);
                            let n = t.some(jo);
                            Gn.mobileAndroid && (n = !1);
                            let r = "720p";
                            if (n) {
                                const e = t.map(Oo); - 1 !== e.indexOf("1080p") && -1 === e.indexOf("720p") && (r = "1080p")
                            }
                            return e.request.cookie.hd || e.video.default_to_hd ? r : "360p"
                        }(e);
                    let l = function({
                        files: e = [],
                        preference: t = "360p",
                        priorityOffset: n = 0
                    }) {
                        (e = Array.from(e)).sort(qo());
                        const r = e.map(Oo);
                        if (t) {
                            -1 === r.indexOf(t) && (r.push(t), r.sort((e, t) => Vo(t) - Vo(e)));
                            const e = r.indexOf(t),
                                n = r.splice(0, e);
                            n.reverse(), r.push.apply(r, gn(n))
                        }
                        return e.map(e => ({
                            id: e.id,
                            src: e.url,
                            mime: e.mime,
                            priority: r.indexOf(e.quality) + 1 + n,
                            metadata: {
                                profile: e.profile,
                                cdn: e.cdn,
                                origin: e.origin,
                                quality: e.quality,
                                fps: e.fps
                            }
                        }))
                    }({
                        files: a,
                        preference: c,
                        priorityOffset: 2
                    });
                    const h = e.request.drm && Gn.browser.safari,
                        d = (null == (t = e.request.file_codecs) || null == (n = t.hevc) || null == (r = n.dvh1) ? void 0 : r.length) > 0,
                        f = (null == (i = e.request.files.dash) || null == (s = i.streams_hevc_dvh1) ? void 0 : s.length) > 0 && "undefined" != typeof MediaSource,
                        _ = Gn.dolbyVision && d && !f;
                    return (o.hls && (Gn.iPhone || Gn.iPad) || h || _) && (l = l.concat(No(e))), !o.dash || h || _ || (l = l.concat(Mo(e))), l
                }(e),
                u = zo(e);
            !r.video || e.isNewVideo() ? function(i, o) {
                const a = e.video.live_event,
                    u = n.getBoundingClientRect(),
                    c = ho(a) ? Wo(e) : function(e) {
                        const t = e.request.files;
                        if (!vo(t.hls)) {
                            const e = t.hls.default_cdn,
                                n = t.hls.cdns[e],
                                r = n.captions || n.url;
                            return r ? {
                                src: r,
                                mime: oo.hls,
                                metadata: {
                                    cdn: e,
                                    origin: n.origin,
                                    quality: "sd"
                                }
                            } : null
                        }
                        return null
                    }(e);
                r.video = {
                    id: e.video.id,
                    title: e.video.title,
                    subtitle: `from ${e.video.owner.name}`,
                    files: i,
                    textTracks: o,
                    chapters: Do(e, "embed.chapters", []),
                    duration: e.video.duration,
                    externalDisplayFiles: {
                        AirPlay: c
                    },
                    metadata: {
                        playlistRefreshUrl: _o(e),
                        thumbnail: e.video.thumbs[640],
                        useHls: e.request.drm && Gn.browser.safari,
                        drm: e.request.drm,
                        p2pReady: e.video.ecdn_provider && s.p2pReady,
                        percentShown: bs.frustumSurfaceArea(e.video.spatial.fov, u.width, u.height)
                    }
                }, t.fire($s)
            }(a, u) : o(a, u)
        })), yt({
            telecine: r
        }, i)
}

function ma(e, t, n) {
    this.constructorName = "BackboneError", this.message = e, this.name = t, this.source = n
}
ma.prototype = new Error;
var va = {
    embed: {},
    request: {
        cookie: {},
        files: {},
        flags: {},
        urls: {},
        text_tracks: [],
        file_codecs: {}
    },
    video: {
        owner: {},
        thumbs: {},
        version: {}
    },
    user: {}
};

function ga(e, t) {
    let n;
    const r = ft();
    let i, s, o = null,
        a = new yo(t, va);

    function u(e, t) {
        return r.fire(Ks, e, t), e
    }
    const c = {
        play: () => i.play(),
        pause: () => i.pause(),
        get currentTime() {
            return s.currentTime > .1 ? Bs(s.currentTime) : 0
        },
        set currentTime(e) {
            if (e = parseFloat(e), isNaN(e) || e < 0) throw new ma("Seconds must be a positive number less than the duration of the video.", "RangeError", "setCurrentTime");
            r.fire(Hs, null, e)
        },
        get duration() {
            return Bs(a.video.duration)
        },
        get enabledTextTrack() {
            return o
        },
        loadVideo(e) {
            const t = lt(a);
            return a.reset(e), a = u(a, t), this
        },
        reactivate() {
            var e;
            return (null == (e = s) ? void 0 : e.reactivate) && s.reactivate(), this
        },
        unload() {
            return r.fire(Xs), this
        },
        destroy() {
            return r.fire(qs), this
        },
        on(e, t) {
            return r.on(e, t), this
        },
        once(e, t) {
            return r.once(e, t), this
        },
        off(e, t) {
            return r.off(e, t), this
        },
        hasTextTrack(e) {
            let t, n, r = this.textTracks;
            if (Us(e)) n = r.getTrackById(e);
            else {
                let n = e.split(".")[0];
                t = r.some(e => e.language.toLowerCase() === n.toLowerCase())
            }
            return !(!n && !t)
        },
        enableTextTrack(e, t = null) {
            let n, i, a = this.textTracks;
            if (Us(e)) o = a.getTrackById(e);
            else {
                if ([n, i = t] = e.split("."), !this.hasTextTrack(e)) throw new ma(`There are no tracks for “${n.toUpperCase()}”.`, "InvalidTrackLanguageError", "enableTextTrack");
                o = da(i ? `${n}.${i}` : n, a).track
            }
            if (!o || i && o.kind !== i) throw new ma(`There are no ${i} tracks for “${n.toUpperCase()}”.`, "InvalidTrackError", "enableTextTrack");
            s._setCaptionsState(!0), r.fire(Gs, o.id)
        },
        disableTextTrack() {
            o = null, s._setCaptionsState(!1), r.fire(Ws)
        },
        get qualities() {
            return function(e) {
                var t;
                const n = e.representations.map(t => {
                        const n = Oo(t);
                        return {
                            id: n,
                            label: Yo(t),
                            active: e.quality === n
                        }
                    }),
                    r = null == (t = e.video) ? void 0 : t.currentFile.mime;
                return [oo.dash, oo.dashMpd, oo.hlsLive, oo.hls].includes(r) && n.unshift({
                    id: "auto",
                    label: "Auto",
                    active: !e.quality || "auto" === e.quality
                }), n
            }(this)
        },
        get quality() {
            return i.quality
        },
        set quality(e) {
            i.quality = e
        },
        get playbackRate() {
            return s ? s.playbackRate : 1
        },
        set playbackRate(e) {
            s.playbackRate = e, s.defaultPlaybackRate = e
        },
        get textTracks() {
            return s.video ? s.video.textTracks : []
        },
        get representations() {
            return Ko(a, s)
        },
        get volume() {
            return s ? s.volume : Bs(a.request.cookie.volume)
        },
        set volume(e) {
            if (e = parseFloat(e), isNaN(e) || e < 0 || e > 1) throw new ma("Volume should be a number between 0 and 1.", "RangeError", "setVolume");
            s.volume = e
        },
        get videoId() {
            return a.video.id
        },
        get videoWidth() {
            return s.videoWidth || a.video.width
        },
        get videoHeight() {
            return s.videoHeight || a.video.height
        },
        get readyState() {
            return s.videoElement.readyState
        },
        get telecine() {
            return s
        },
        get pictureInPictureEnabled() {
            const e = Gn.spatialPlayback && a.video.spatial,
                t = Gn.browser.safari && this.readyState < 1;
            return t && s.once(Sn.LOADED_METADATA, () => r.fire(no)), !t && !e && s.pictureInPictureEnabled
        }
    };
    return a = u(a), i = new pa(a, r, e), s = i.telecine, n = Object.create(s), yt(n, c)
}
var ya = "object" == typeof global && global && global.Object === Object && global,
    Ea = "object" == typeof self && self && self.Object === Object && self,
    Sa = (ya || Ea || Function("return this")()).Symbol,
    Ta = Object.prototype,
    ba = Ta.hasOwnProperty,
    Aa = Ta.toString,
    Ia = Sa ? Sa.toStringTag : void 0,
    wa = Object.prototype.toString,
    Ra = Sa ? Sa.toStringTag : void 0;
var Pa = function(e, t) {
        return function(n) {
            return e(t(n))
        }
    }(Object.getPrototypeOf, Object),
    Da = Function.prototype,
    ka = Object.prototype,
    Oa = Da.toString,
    Ca = ka.hasOwnProperty,
    La = Oa.call(Object),
    Na = function(e) {
        var t, n = ("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")()).Symbol;
        return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
    }();

function Ma(e, t, n) {
    var r;
    if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
        if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
        return n(Ma)(e, t)
    }
    if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
    var i = e,
        s = t,
        o = [],
        a = o,
        u = !1;

    function c() {
        a === o && (a = o.slice())
    }

    function l() {
        return s
    }

    function h(e) {
        if ("function" != typeof e) throw new Error("Expected listener to be a function.");
        var t = !0;
        return c(), a.push(e),
            function() {
                if (t) {
                    t = !1, c();
                    var n = a.indexOf(e);
                    a.splice(n, 1)
                }
            }
    }

    function d(e) {
        if (! function(e) {
                if (! function(e) {
                        return null != e && "object" == typeof e
                    }(e) || "[object Object]" != function(e) {
                        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Ra && Ra in Object(e) ? function(e) {
                            var t = ba.call(e, Ia),
                                n = e[Ia];
                            try {
                                e[Ia] = void 0;
                                var r = !0
                            } catch (rl) {}
                            var i = Aa.call(e);
                            return r && (t ? e[Ia] = n : delete e[Ia]), i
                        }(e) : function(e) {
                            return wa.call(e)
                        }(e)
                    }(e)) return !1;
                var t = Pa(e);
                if (null === t) return !0;
                var n = Ca.call(t, "constructor") && t.constructor;
                return "function" == typeof n && n instanceof n && Oa.call(n) == La
            }(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
            u = !0, s = i(s, e)
        } finally {
            u = !1
        }
        for (var t = o = a, n = 0; n < t.length; n++)(0, t[n])();
        return e
    }
    return d({
        type: "@@redux/INIT"
    }), (r = {
        dispatch: d,
        subscribe: h,
        getState: l,
        replaceReducer: function(e) {
            if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
            i = e, d({
                type: "@@redux/INIT"
            })
        }
    })[Na] = function() {
        var e, t = h;
        return (e = {
            subscribe: function(e) {
                if ("object" != typeof e) throw new TypeError("Expected the observer to be an object.");

                function n() {
                    e.next && e.next(l())
                }
                return n(), {
                    unsubscribe: t(n)
                }
            }
        })[Na] = function() {
            return this
        }, e
    }, r
}

function xa() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return 0 === t.length ? function(e) {
        return e
    } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
        return function() {
            return e(t.apply(void 0, arguments))
        }
    }))
}
var Fa = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
};

function Ua() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(e) {
        return function(n, r, i) {
            var s, o = e(n, r, i),
                a = o.dispatch,
                u = {
                    getState: o.getState,
                    dispatch: function(e) {
                        return a(e)
                    }
                };
            return s = t.map((function(e) {
                return e(u)
            })), a = xa.apply(void 0, s)(o.dispatch), Fa({}, o, {
                dispatch: a
            })
        }
    }
}

function Ba(e) {
    return "string" == typeof e || !K(e) && V(e) && "[object String]" == _(e)
}

function ja() {
    return void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now()
}

function Va(e) {
    return ja() - e
}

function Ha() {
    let e = 0,
        t = null,
        n = 0,
        r = !1;

    function i() {
        return e / 1e3
    }
    return {
        trackBufferStart: function(e, i) {
            t = ja(), n++, r = !0, e(i)
        },
        trackBufferEnd: function(n, i = {}) {
            if (!r) return;
            const s = Va(t);
            e += s, i.buffer_duration = s / 1e3, r = !1, n(i)
        },
        trackVideoExit: function(n) {
            r && !n && (e += Va(t))
        },
        resetLastBufferTime: function() {
            t = null
        },
        getBufferRatio: function(e) {
            const t = i() / e * 100;
            return isNaN(t) ? 0 : Math.round(100 * t) / 100
        },
        getBufferCount: function() {
            return n
        },
        getTotalBufferDuration: i,
        isVideoBuffering: function() {
            return r
        }
    }
}
const Xa = {
    VIDEO_BUFFER_END: "video-buffer-end",
    VIDEO_BUFFER_START: "video-buffer-start",
    VIDEO_ENDED: "video-ended",
    VIDEO_EXIT: "video-exit",
    VIDEO_LOAD_FAILURE: "video-load-failure",
    VIDEO_MINUTE_WATCHED: "video-minute-watched",
    VIDEO_PAUSED: "video-paused",
    VIDEO_PLAYED: "video-played",
    VIDEO_PLAYBACK_ERROR: "video-playback-error",
    VIDEO_READY: "video-ready",
    VIDEO_START_ATTEMPT: "video-start-attempt",
    VIDEO_START_FAILURE: "video-start-failure",
    VIDEO_START_TIME: "video-start-time",
    VIDEO_SEEK: "video-seek",
    VIDEO_SEEKED: "video-seeked",
    CHUNK_DOWNLOADED: "chunk_downloaded"
};

function qa(e) {
    function t(e, t, n = !0, r = "POST") {
        return new Promise((i, s) => {
            "POST" === r && navigator.sendBeacon ? i({
                status: navigator.sendBeacon(e, t)
            }) : ei({
                url: e,
                body: t,
                method: r,
                async: n,
                headers: {
                    "Content-Type": "text/plain; charset=UTF-8"
                }
            }).then(e => {
                i({
                    response: e,
                    status: e.status
                })
            }).catch(s)
        })
    }
    return {
        log: function(n, r = !0, i = !0) {
            i && (n.event_time = n.event_time || ja());
            const s = [n];
            return t(e, JSON.stringify(s), r)
        },
        logRequestPromiseWithUrl: t
    }
}

function Ga(e) {
    let t = 0,
        n = 0,
        r = 0,
        i = 0,
        s = !1,
        o = -1,
        a = null,
        u = null,
        c = null,
        l = {
            satisfied: 0,
            tolerable: 0,
            frustrated: 0
        },
        h = null;

    function d() {
        const t = e.getBoundingClientRect(),
            n = e.videoWidth,
            r = e.videoHeight;
        if (0 === n && 0 === r) return;
        let i = "satisfied";
        if (t.width > n && t.height > r && (n / t.width < .4 ? i = "satisfied" : n / t.width < 1 ? i = "tolerable" : n / t.width > 1 && (i = "frustrated")), u) {
            const e = Va(u);
            l[c] += e
        }
        c = i, u = ja()
    }

    function f() {
        return s ? 0 : 1
    }

    function _() {
        return -1 === o ? null : o > 8e3 || -1 === o ? 0 : o > 2e3 ? .5 : 1
    }

    function p() {
        return h ? (i = r / Va(h), t >= 4 || i >= .12 ? 0 : t < 4 && 0 !== t ? i < .12 ? .5 : 0 : 1) : null
    }

    function m() {
        if (-1 === o) return null;
        switch (d(), Object.keys(l).reduce((e, t) => l[e] > l[t] ? e : t)) {
            case "satisfied":
                return 1;
            case "tolerable":
                return .5;
            case "frustrated":
                return 0
        }
        return null
    }
    return e.addEventListener("playing", () => {
        -1 === o && (a = ja())
    }), e.addEventListener("progress", () => {
        -1 === o && (h = ja(), o = Va(a)), d()
    }), {
        startupTimeScore: _,
        rebufferScore: p,
        failureScore: f,
        videoQualityScore: m,
        overallScore: function() {
            return Math.min(f(), _(), p(), m())
        },
        trackBufferStart: function() {
            -1 !== o && (t++, n = ja())
        },
        trackBufferEnd: function() {
            -1 !== o && (r += Va(n))
        },
        onError: function(e) {
            e.final && (s = !0)
        }
    }
}

function Wa(e, t = 3) {
    if (e = parseFloat(e), isNaN(e)) return 0;
    var n = Math.pow(10, t);
    return Math.round(e * n) / n
}

function Ka(e, t) {
    let n, r, i, s, o, a, u, c, l, h, d, f, _ = 0;

    function p() {
        n = 0, r = 0, i = 0, s = null, o = 0, a = !1, u = !1, c = null, l = !1, h = new Ga(e), d = new Ha, f = {
            bufferTracker: d,
            videoBufferCheck: () => {
                setInterval(() => {
                    let t = e.currentTime;
                    u && !l && !e.paused && !f.bufferTracker.isVideoBuffering() && t < i + .125 && f.bufferTracker.trackBufferStart(v), u && !e.paused && f.bufferTracker.isVideoBuffering() && t > i + .125 && (f.bufferTracker.trackBufferEnd(g), f.bufferTracker.resetLastBufferTime()), i = t
                }, 250)
            },
            addEventData: e => null,
            playbackSessionTimer: () => {
                let t = ja();
                setInterval(() => {
                    (!e.paused && a || l || f.bufferTracker.isVideoBuffering()) && (o += Va(t) / 1e3), t = ja()
                }, 500)
            }
        }
    }

    function m(e, n = {}) {
        0 === _ && (n = Object.assign(n, f.addEventData(e)), t(e, n))
    }

    function v(e = {}) {
        h.trackBufferStart(), m(Xa.VIDEO_BUFFER_START, e)
    }

    function g(e = {}) {
        h.trackBufferEnd(), m(Xa.VIDEO_BUFFER_END, e)
    }
    return p(), m(Xa.VIDEO_READY),
        function() {
            let t = Math.floor(60 * Math.random());
            setInterval(() => {
                !e.paused && a && (n++, 0 !== r ? n >= 60 && (n = 0, r++, m(Xa.VIDEO_MINUTE_WATCHED)) : n === t && (n = 0, r++, m(Xa.VIDEO_MINUTE_WATCHED)))
            }, 1e3)
        }(), window.addEventListener("unload", t => {
            f.bufferTracker.trackVideoExit(e.paused);
            const n = {
                startup: h.startupTimeScore(),
                rebuffer: h.rebufferScore(),
                failure: h.failureScore(),
                quality: h.videoQualityScore(),
                overall: h.overallScore()
            };
            c && m(Xa.VIDEO_EXIT, {
                vxs: n
            })
        }, !1), e.addEventListener("playing", () => {
            a = !0, l || u && m(Xa.VIDEO_PLAYED)
        }), e.addEventListener("timeupdate", () => {
            if (u) return;
            let e = {
                startup_duration: c ? Wa(Va(c) / 1e3, 2) : null
            };
            m(Xa.VIDEO_START_TIME, e), u = !0
        }), e.addEventListener("pause", () => {
            a = !1, m(Xa.VIDEO_PAUSED)
        }), e.addEventListener("seeking", () => {
            l || (s = ja(), l = !0, a = !1, m(Xa.VIDEO_SEEK))
        }), e.addEventListener("seeked", () => {
            l = !1, e.paused || (a = !0), m(Xa.VIDEO_SEEKED, {
                seek_duration: Va(s) / 1e3
            }), s = null
        }), e.addEventListener("ended", () => {
            m(Xa.VIDEO_ENDED)
        }), e.addEventListener("waiting", () => {
            a = !1
        }), e.addEventListener("canplay", () => {
            l || f.bufferTracker.isVideoBuffering() && !a && (f.bufferTracker.trackBufferEnd(g), f.bufferTracker.resetLastBufferTime())
        }), {
            globalProperties: function() {
                return {
                    autoplay: e.autoplay,
                    buffer_count: f.bufferTracker.getBufferCount(),
                    total_buffer_duration: f.bufferTracker.getTotalBufferDuration(),
                    buffer_ratio: f.bufferTracker.getBufferRatio(o),
                    client_time: ja(),
                    is_buffering: f.bufferTracker.isVideoBuffering(),
                    looping: e.loop,
                    minutes_watched: r,
                    network_state: e.networkState,
                    playback_rate: e.playbackRate,
                    player_width: e.getBoundingClientRect().width,
                    player_height: e.getBoundingClientRect().height,
                    session_playback_duration: Wa(o, 2),
                    video_time: e.currentTime,
                    video_height: e.videoHeight,
                    video_width: e.videoWidth,
                    volume: Wa(e.volume, 2)
                }
            },
            logStartRequest: function() {
                c = ja(), m(Xa.VIDEO_START_ATTEMPT)
            },
            customizeHooks: function(e) {
                f = Object.assign(f, e)
            },
            initHooks: function() {
                f.videoBufferCheck(), f.playbackSessionTimer()
            },
            logBufferStart: v,
            logBufferEnd: g,
            setDisplayContext: function(e) {
                _ = e
            },
            handleExternalError: function(e, t) {
                a = !1, h.onError(t), m(u ? Xa.VIDEO_PLAYBACK_ERROR : u ? Xa.VIDEO_START_FAILURE : Xa.VIDEO_LOAD_FAILURE, e)
            },
            reset: p
        }
}
var Ya = function() {
        return o.Date.now()
    },
    $a = Math.max,
    za = Math.min;

function Qa(e, t, n) {
    var r, i, s, o, a, u, c = 0,
        l = !1,
        h = !1,
        d = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");

    function f(t) {
        var n = r,
            s = i;
        return r = i = void 0, c = t, o = e.apply(s, n)
    }

    function _(e) {
        return c = e, a = setTimeout(v, t), l ? f(e) : o
    }

    function m(e) {
        var n = e - u;
        return void 0 === u || n >= t || n < 0 || h && e - c >= s
    }

    function v() {
        var e = Ya();
        if (m(e)) return g(e);
        a = setTimeout(v, function(e) {
            var n = t - (e - u);
            return h ? za(n, s - (e - c)) : n
        }(e))
    }

    function g(e) {
        return a = void 0, d && r ? f(e) : (r = i = void 0, o)
    }

    function y() {
        var e = Ya(),
            n = m(e);
        if (r = arguments, i = this, u = e, n) {
            if (void 0 === a) return _(u);
            if (h) return clearTimeout(a), a = setTimeout(v, t), f(u)
        }
        return void 0 === a && (a = setTimeout(v, t)), o
    }
    return t = ks(t) || 0, p(n) && (l = !!n.leading, s = (h = "maxWait" in n) ? $a(ks(n.maxWait) || 0, t) : s, d = "trailing" in n ? !!n.trailing : d), y.cancel = function() {
        void 0 !== a && clearTimeout(a), c = 0, r = u = i = a = void 0
    }, y.flush = function() {
        return void 0 === a ? o : g(Ya())
    }, y
}
const Ja = {
    SETUP_DONE: "SETUP_DONE",
    NOT_SETUP: "NOT_SETUP"
};
let Za = function() {
    function e() {
        this.version = "1.2.36", this.remotePlayer = null, this.remotePlayerController = null, this.CastContextEventType = null, this.RemotePlayerEventType = null, this.CastState = Ja, this.SessionState = null, this.PlayerState = null, this.currentLoadRequestId = null, this.currentLoadRequestPromise = null
    }
    var t = e.prototype;
    return t.init = function({
        receiverApplicationId: e = "",
        resumeSavedSession: t = !0,
        language: n = null,
        autoJoinPolicy: r = "TAB_AND_ORIGIN_SCOPED"
    } = {}) {
        if (!this.isGCastApiAvailable) throw new Error("CAF is not available. Call setup() first.");
        if ("string" != typeof e || "" === e.trim()) throw new Error("Parameter 'receiverApplicationId' must be valid.");
        switch (r) {
            case chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED:
            case chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED:
            case chrome.cast.AutoJoinPolicy.PAGE_SCOPED:
                break;
            default:
                r = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED
        }
        return this.CastContextEventType = cast.framework.CastContextEventType, this.RemotePlayerEventType = cast.framework.RemotePlayerEventType, this.CastState = Object.assign(this.CastState, cast.framework.CastState), this.SessionState = cast.framework.SessionState, this.PlayerState = chrome.cast.media.PlayerState, cast.framework.CastContext.getInstance().setOptions({
            receiverApplicationId: e.trim(),
            resumeSavedSession: t,
            language: n,
            autoJoinPolicy: r
        }), this.isInitialized ? this.remotePlayerController : this.initRemotePlayer()
    }, t.initRemotePlayer = function() {
        if (!this.isGCastApiAvailable) throw new ReferenceError("CAF is not available. Call setup() first.");
        return this.remotePlayer = new cast.framework.RemotePlayer, this.remotePlayerController = new cast.framework.RemotePlayerController(this.remotePlayer), this.remotePlayerController
    }, t.setup = function({
        loadLibrary: e = !0
    } = {}) {
        return new Promise((t, n) => {
            if (this.isGCastApiAvailable) return this.AutoJoinPolicy = chrome.cast.AutoJoinPolicy, void t(!0);
            window.__onGCastApiAvailable = (e, r) => {
                if (r) {
                    const e = new Error(r);
                    n(e)
                } else this.AutoJoinPolicy = chrome.cast.AutoJoinPolicy, t(e)
            };
            try {
                if (!1 === e) throw new ReferenceError("Cast is not available. Make sure the library has been loaded.");
                this.loadLibrary() || t(!1)
            } catch (r) {
                const e = new Error(r);
                n(e)
            }
        })
    }, t.loadLibrary = function() {
        if (this.isGCastApiAvailable) return !0;
        if (null !== window.chrome && void 0 !== window.chrome && "Google Inc." === window.navigator.vendor) {
            let e = "//www.gstatic.com/cv/js/sender/v1/cast_sender.js";
            if (!(document.querySelectorAll('script[src^="' + e + '"]').length > 0)) {
                e += "?loadCastFramework=1";
                const t = document.createElement("script");
                return t.src = e, t.async = !0, t.defer = !0, document.head.appendChild(t), !0
            }
        }
        return !1
    }, t.loadMedia = function({
        contentId: e,
        contentType: t,
        currentTime: n = 0,
        duration: r = 0,
        requestCustomData: i = null,
        mediaCustomData: s = null,
        autoRequest: o = !1,
        tracks: a = [],
        ottCastOptions: u
    }) {
        return e ? this.isSessionEstablished ? this.loadMediaOnSession(this.currentSession, {
            contentId: e,
            contentType: t,
            currentTime: n,
            duration: r,
            requestCustomData: i,
            mediaCustomData: s,
            tracks: a,
            ottCastOptions: u
        }) : !0 !== o ? Promise.reject(new TypeError("Option 'autoRequest' must be true when session is not connected.")) : this.requestSession().then(o => this.loadMediaOnSession(o, {
            contentId: e,
            contentType: t,
            currentTime: n,
            duration: r,
            requestCustomData: i,
            mediaCustomData: s,
            tracks: a,
            ottCastOptions: u
        })) : Promise.reject(new TypeError("Option 'contentId' must be valid."))
    }, t.loadMediaOnSession = function(e, {
        contentId: t,
        contentType: n,
        currentTime: r = 0,
        duration: i,
        requestCustomData: s = null,
        mediaCustomData: o = null,
        tracks: a = [],
        ottCastOptions: u
    }) {
        if (e && e instanceof cast.framework.CastSession) {
            const c = e.getSessionState();
            if (c !== this.SessionState.SESSION_STARTING && c !== this.SessionState.SESSION_STARTED && c !== this.SessionState.SESSION_RESUMED) return Promise.reject(new ReferenceError("Session must be established."));
            const l = this.createLoadRequest(t, n, r, i, s, o, a, u);
            return null !== this.currentLoadRequestId && this.currentLoadRequestId === l.requestId || (this.currentLoadRequestId = l.requestId, this.currentLoadingMediaPromise = e.loadMedia(l).finally(() => {
                this.currentLoadRequestId = null, this.currentLoadingMediaPromise = null
            })), this.currentLoadingMediaPromise
        }
        return Promise.reject(new ReferenceError("Session must be cast.framework.CastSession."))
    }, t.requestSession = function() {
        return this.isSessionEstablished ? Promise.resolve(this.currentSession) : this.castContext ? this.castContext.requestSession().then(() => this.currentSession) : Promise.reject(new Error("CastContext is not available. Call setup() first."))
    }, t.sendMessage = function({
        namespace: e,
        data: t = {},
        autoRequest: n = !1
    }) {
        return this.isSessionEstablished ? this.sendMessageOnSession(this.currentSession, {
            namespace: e,
            data: t
        }) : !0 !== n ? Promise.reject(new TypeError("Option 'autoRequest' must be true when session is not connected.")) : this.requestSession().then(n => this.sendMessageOnSession(n, {
            namespace: e,
            data: t
        }))
    }, t.sendMessageOnSession = function(e, {
        namespace: t,
        data: n = {}
    }) {
        if (e || !(e instanceof cast.framework.CastSession)) {
            const r = e.getSessionState();
            return r !== this.SessionState.SESSION_STARTING && r !== this.SessionState.SESSION_STARTED && r !== this.SessionState.SESSION_RESUMED ? Promise.reject(new ReferenceError("Session must be established.")) : e.sendMessage(t, n)
        }
        return Promise.reject(new ReferenceError("Session must be cast.framework.CastSession."))
    }, t.createCastButton = function(e) {
        const t = document.createElement("button", "google-cast-button");
        return e && e.style && (null === e.style["--disconnected-color"] && (e.style["--disconnected-color"] = "#00ADEF"), null === e.style["--connected-color"] && (e.style["--connected-color"] = "#E5E500")), e && Object.keys(e).forEach(n => {
            if ("string" == typeof e[n]) t.setAttribute(n, e[n]);
            else if ("style" === n && "object" == typeof e[n]) {
                let r = "";
                Object.keys(e[n]).forEach(t => {
                    r += t + ":" + e[n][t] + ";"
                }), t.setAttribute(n, r)
            }
        }), t
    }, t.createLoadRequest = function(e, t, n, r, i, s, o, a) {
        const u = a ? new chrome.cast.media.MediaInfo(a.contentId) : new chrome.cast.media.MediaInfo(e.toString(), t);
        u.customData = s, u.duration = r;
        const c = {
            subtitles: chrome.cast.media.TextTrackType.SUBTITLES,
            captions: chrome.cast.media.TextTrackType.CAPTIONS
        };
        u.tracks = o.map(e => {
            const t = new chrome.cast.media.Track(e.id, chrome.cast.media.TrackType.TEXT);
            return t.trackContentId = e.url, t.trackContentType = "text/vtt", t.subtype = c[e.kind], t.name = e.label, t.language = e.lang, t
        });
        const l = new chrome.cast.media.LoadRequest(u);
        return l.customData = a ? a.customData : i, l.currentTime = n || 0, a && (l.credentials = a.credentials, l.credentialsType = a.credentialsType), l
    }, on(e, [{
        key: "isGCastApiAvailable",
        get: function() {
            return !!("undefined" != typeof cast && cast && cast.framework && cast.framework.VERSION)
        }
    }, {
        key: "castState",
        get: function() {
            return this.castContext ? this.castContext.getCastState() : this.isGCastApiAvailable ? this.CastState.SETUP_DONE : this.CastState.NOT_SETUP
        }
    }, {
        key: "versionGCastApi",
        get: function() {
            return this.isGCastApiAvailable ? cast.framework.VERSION : null
        }
    }, {
        key: "castContext",
        get: function() {
            return this.isGCastApiAvailable ? cast.framework.CastContext.getInstance() : null
        }
    }, {
        key: "currentSession",
        get: function() {
            return this.castContext ? this.castContext.getCurrentSession() : null
        }
    }, {
        key: "currentSessionObj",
        get: function() {
            const e = this.currentSession;
            return e ? e.getSessionObj() : null
        }
    }, {
        key: "isInitialized",
        get: function() {
            return !(!this.isGCastApiAvailable || !this.remotePlayerController)
        }
    }, {
        key: "isSessionEstablished",
        get: function() {
            const e = this.currentSessionObj;
            return !!e && e.status === chrome.cast.SessionStatus.CONNECTED
        }
    }, {
        key: "isCastConnected",
        get: function() {
            return this.castState === this.CastState.CONNECTED
        }
    }]), e
}();
var eu, tu = 0,
    nu = 0,
    ru = {},
    iu = {};

function su(e, t, n) {
    return "_root" == t ? n : e !== n ? function(e) {
        return eu || (eu = e.matches ? e.matches : e.webkitMatchesSelector ? e.webkitMatchesSelector : e.mozMatchesSelector ? e.mozMatchesSelector : e.msMatchesSelector ? e.msMatchesSelector : e.oMatchesSelector ? e.oMatchesSelector : cu.matchesSelector)
    }(e).call(e, t) ? e : e.parentNode ? (tu++, su(e.parentNode, t, n)) : void 0 : void 0
}

function ou(e, t, n, r) {
    ru[e.id] || (ru[e.id] = {}), ru[e.id][t] || (ru[e.id][t] = {}), ru[e.id][t][n] || (ru[e.id][t][n] = []), ru[e.id][t][n].push(r)
}

function au(e, t, n, r) {
    if (ru[e.id])
        if (t)
            if (r || n)
                if (r) {
                    if (ru[e.id][t][n])
                        for (var i = 0; i < ru[e.id][t][n].length; i++)
                            if (ru[e.id][t][n][i] === r) {
                                ru[e.id][t][n].splice(i, 1);
                                break
                            }
                } else delete ru[e.id][t][n];
    else ru[e.id][t] = {};
    else
        for (var s in ru[e.id]) ru[e.id].hasOwnProperty(s) && (ru[e.id][s] = {})
}

function uu(e, t, n, r) {
    if (this.element) {
        e instanceof Array || (e = [e]), n || "function" != typeof t || (n = t, t = "_root");
        var i, s = this.id;
        for (i = 0; i < e.length; i++) r ? au(this, e[i], t, n) : (ru[s] && ru[s][e[i]] || cu.addEvent(this, e[i], o(e[i])), ou(this, e[i], t, n));
        return this
    }

    function o(e) {
        return function(t) {
            ! function(e, t, n) {
                if (ru[e][n]) {
                    var r, i, s = t.target || t.srcElement,
                        o = {},
                        a = 0,
                        u = 0;
                    for (r in tu = 0, ru[e][n]) ru[e][n].hasOwnProperty(r) && (i = su(s, r, iu[e].element)) && cu.matchesEvent(n, iu[e].element, i, "_root" == r, t) && (tu++, ru[e][n][r].match = i, o[tu] = ru[e][n][r]);
                    for (t.stopPropagation = function() {
                            t.cancelBubble = !0
                        }, a = 0; a <= tu; a++)
                        if (o[a])
                            for (u = 0; u < o[a].length; u++) {
                                if (!1 === o[a][u].call(o[a].match, t)) return void cu.cancel(t);
                                if (t.cancelBubble) return
                            }
                }
            }(s, t, e)
        }
    }
}

function cu(e, t) {
    if (!(this instanceof cu)) {
        for (var n in iu)
            if (iu[n].element === e) return iu[n];
        return nu++, iu[nu] = new cu(e, nu), iu[nu]
    }
    this.element = e, this.id = t
}
cu.prototype.on = function(e, t, n) {
    return uu.call(this, e, t, n)
}, cu.prototype.off = function(e, t, n) {
    return uu.call(this, e, t, n, !0)
}, cu.matchesSelector = function() {}, cu.cancel = function(e) {
    e.preventDefault(), e.stopPropagation()
}, cu.addEvent = function(e, t, n) {
    var r = "blur" == t || "focus" == t,
        i = Gn.passiveEvents ? {
            capture: r,
            passive: !1
        } : r;
    e.element.addEventListener(t, n, i)
}, cu.matchesEvent = function() {
    return !0
};
const lu = cu.addEvent,
    hu = void 0 === window.PointerEvent && void 0 !== window.MSPointerEvent,
    du = {
        pointerdown: "MSPointerDown",
        pointerup: "MSPointerUp",
        pointercancel: "MSPointerCancel",
        pointermove: "MSPointerMove",
        pointerenter: "MSPointerEnter",
        pointerleave: "MSPointerLeave",
        pointerover: "MSPointerOver",
        pointerout: "MSPointerOut"
    },
    fu = "onmspointerenter" in document,
    _u = "onmspointerleave" in document;

function pu(e, t) {
    return null == e || e != e ? t : e
}
cu.addEvent = function(e, t, n) {
    hu && du[t] && (t = du[t]), "transitionend" === t && (lu(e, "webkitTransitionEnd", n), lu(e, "otransitionend", n)), "mouseenter" === t && (t = "mouseover"), "mouseleave" === t && (t = "mouseout"), "MSPointerEnter" !== t || fu || (t = "MSPointerOver"), "MSPointerLeave" !== t || _u || (t = "MSPointerOut"), lu(e, t, n)
}, cu.matchesEvent = function(e, t, n, r, i) {
    return !("mouseenter" === e || "mouseleave" === e || !fu && "MSPointerEnter" === e || !_u && "MSPointerLeave" === e) || function(e, t, n, r) {
        return !r.relatedTarget || (!n || e === t) && t !== r.relatedTarget && !t.contains(r.relatedTarget)
    }(t, n, r, i)
};
var mu = dt((function(e, t) {
    function n(e, t) {
        return e === t
    }

    function r(e, t, n) {
        if (null === t || null === n || t.length !== n.length) return !1;
        for (var r = t.length, i = 0; i < r; i++)
            if (!e(t[i], n[i])) return !1;
        return !0
    }

    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n,
            i = null,
            s = null;
        return function() {
            return r(t, i, arguments) || (s = e.apply(null, arguments)), i = arguments, s
        }
    }

    function s(e) {
        var t = Array.isArray(e[0]) ? e[0] : e;
        if (!t.every((function(e) {
                return "function" == typeof e
            }))) {
            var n = t.map((function(e) {
                return typeof e
            })).join(", ");
            throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + n + "]")
        }
        return t
    }

    function o(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return function() {
            for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
            var a = 0,
                u = r.pop(),
                c = s(r),
                l = e.apply(void 0, [function() {
                    return a++, u.apply(null, arguments)
                }].concat(n)),
                h = i((function() {
                    for (var e = [], t = c.length, n = 0; n < t; n++) e.push(c[n].apply(null, arguments));
                    return l.apply(null, e)
                }));
            return h.resultFunc = u, h.recomputations = function() {
                return a
            }, h.resetRecomputations = function() {
                return a = 0
            }, h
        }
    }
    t.__esModule = !0, t.defaultMemoize = i, t.createSelectorCreator = o, t.createStructuredSelector = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
        if ("object" != typeof e) throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " + typeof e);
        var n = Object.keys(e);
        return t(n.map((function(t) {
            return e[t]
        })), (function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return t.reduce((function(e, t, r) {
                return e[n[r]] = t, e
            }), {})
        }))
    };
    var a = t.createSelector = o(i)
}));

function vu(...e) {
    if (1 === e.length && e[0] instanceof vu) {
        var t = e[0];
        return this.red = t.red, this.green = t.green, this.blue = t.blue, this.alpha = t.alpha, this.hue = t.hue, this.saturation = t.saturation, this.lightness = t.lightness, this
    }
    if (1 === e.length) {
        if ("string" == typeof e[0] && e[0].indexOf("rgb") >= 0) return this.rgba = function(e) {
            var t = /rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)/.exec(e);
            if (!t) throw new Error("Invalid rgb value");
            return {
                red: parseInt(t[1], 10),
                green: parseInt(t[2], 10),
                blue: parseInt(t[3], 10),
                alpha: parseFloat(t[5]) || 1
            }
        }(e[0]), this;
        if (! function(e) {
                return "string" == typeof(e = e.replace("#", "")) && (3 === e.length || 6 === e.length) && !isNaN(parseInt(e, 16))
            }(`${e[0]}`)) throw new Error("Invalid hex value");
        return this.hex = e[0], this
    }
    if (3 === e.length || 4 === e.length) {
        for (var n = 0; n < 3; n++)
            if (isNaN(parseInt(e[n], 10)) || parseInt(e[n], 10) < 0 || parseInt(e[n], 10) > 255) throw new Error("Invalid rgb value");
        if (e[3] && parseFloat(e[3]) < 0 || parseFloat(e[3]) > 1) throw new Error("Invalid alpha value");
        return this.rgba = {
            red: e[0],
            green: e[1],
            blue: e[2],
            alpha: parseFloat(e[3]) || 1
        }, this
    }
    throw new Error("Invalid color")
}
vu.prototype = {
    get complement() {
        var e = this.clone();
        return e.rgb = {
            red: 255 - this.red,
            green: 255 - this.green,
            blue: 255 - this.blue
        }, e
    },
    get hex() {
        return vu.rgbToHex(this.red, this.green, this.blue)
    },
    set hex(e) {
        return this.rgba = vu.hexToRgb(e), this
    },
    get hsl() {
        return "hsl(" + this.hue + "," + this.saturation + "%," + Math.round(this.lightness) + "%)"
    },
    set hsl(e) {
        this.hue = e.hue, this.saturation = e.saturation, this.lightness = e.lightness;
        var t = vu.hslToRgb(e.hue, e.saturation, e.lightness);
        return this.red = t.red, this.green = t.green, this.blue = t.blue, this.alpha = t.alpha, this
    },
    get luminance() {
        function e(e) {
            return e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
        }
        return .2126 * e(this.red / 255) + .7152 * e(this.green / 255) + .0722 * e(this.blue / 255)
    },
    get rgb() {
        return "rgb(" + this.red + "," + this.green + "," + this.blue + ")"
    },
    set rgb(e) {
        return this.rgba = e, this
    },
    get rgba() {
        return "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.alpha + ")"
    },
    set rgba(e) {
        this.red = e.red, this.green = e.green, this.blue = e.blue, this.alpha = e.alpha || 1;
        var t = vu.rgbToHsl(e.red, e.green, e.blue);
        return this.hue = t.hue, this.saturation = t.saturation, this.lightness = t.lightness, this
    },
    get yiq() {
        return (299 * this.red + 587 * this.green + 114 * this.blue) / 1e3
    },
    clone: function() {
        return new vu(this)
    },
    lighten: function(e, t, n) {
        if (this.hsl = {
                hue: this.hue,
                saturation: this.saturation,
                lightness: this.lightness + e
            }, t && n)
            for (var r = n.contrast(this).ratio; r < t && (this.lighten(5), r = n.contrast(this).ratio, !(this.lightness >= 100)););
        return this
    },
    darken: function(e, t, n) {
        if (this.hsl = {
                hue: this.hue,
                saturation: this.saturation,
                lightness: this.lightness - e
            }, t && n)
            for (var r = n.contrast(this).ratio; r < t && (this.darken(5), r = n.contrast(this).ratio, !(this.lightness <= 0)););
        return this
    },
    overlayOn: function(e) {
        if (this.alpha >= 1) return this;
        var t = this.clone();
        return t.rgba = {
            red: t.red * this.alpha + e.red * e.alpha * (1 - this.alpha),
            green: t.green * this.alpha + e.green * e.alpha * (1 - this.alpha),
            blue: t.blue * this.alpha + e.blue * e.alpha * (1 - this.alpha),
            alpha: t.alpha + e.alpha * (1 - this.alpha)
        }, t
    },
    contrast: function(e) {
        var t = this.alpha;
        if (t >= 1) {
            e.alpha < 1 && (e = e.overlayOn(this));
            var n = this.luminance + .05,
                r = e.luminance + .05,
                i = n / r;
            return r > n && (i = 1 / i), {
                ratio: i = Math.round(10 * i) / 10,
                error: 0,
                min: i,
                max: i
            }
        }
        var s = this.overlayOn(vu.white).contrast(e).ratio,
            o = this.overlayOn(vu.black).contrast(e).ratio,
            a = Math.max(s, o),
            u = {
                red: Math.min(Math.max(0, (e.red - this.red * t) / (1 - t)), 255),
                green: Math.min(Math.max(0, (e.green - this.green * t) / (1 - t)), 255),
                blue: Math.min(Math.max(0, (e.blue - this.blue * t) / (1 - t)), 255)
            },
            c = this.clone();
        c.rgb = u;
        var l = this.overlayOn(c).contrast(e).ratio;
        return {
            ratio: Math.round((l + a) / 2 * 10) / 10,
            error: Math.round((a - l) / 2 * 10) / 10,
            min: l,
            max: a,
            closest: c,
            farthest: o === a ? vu.white : vu.black
        }
    },
    wcagAACompliant: function(e) {
        return this.contrast(e).ratio >= 4.5
    },
    wcagAAACompliant: function(e) {
        return this.contrast(e).ratio >= 7
    },
    yiqContrastColor: function() {
        return this.yiq >= 120 ? new vu(0, 0, 0) : new vu(255, 255, 255)
    }
}, vu.hexToRgb = function(e) {
    var t;
    return 3 === (e = String(e)).length || 4 === e.length ? (t = /^#?([A-Fa-f0-9])([A-Fa-f0-9])([A-Fa-f0-9])$/i.exec(e)) && (t[1] += t[1], t[2] += t[2], t[3] += t[3]) : t = /^#?([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})$/i.exec(e), t ? {
        red: parseInt(t[1], 16),
        green: parseInt(t[2], 16),
        blue: parseInt(t[3], 16),
        alpha: 1
    } : null
}, vu.rgbToHex = function(e, t, n) {
    return "#" + ((1 << 24) + (Math.round(e) << 16) + (Math.round(t) << 8) + Math.round(n)).toString(16).slice(1)
}, vu.rgbToHsl = function(e, t, n) {
    e /= 255, t /= 255, n /= 255;
    var r, i = Math.max(e, t, n),
        s = Math.min(e, t, n),
        o = (i + s) / 2,
        a = o;
    if (i === s) return {
        hue: 0,
        saturation: 0,
        lightness: 100 * a
    };
    var u = i - s;
    return r = a > .5 ? u / (2 - i - s) : u / (i + s), i === e ? o = (t - n) / u + (t < n ? 6 : 0) : i === t ? o = (n - e) / u + 2 : i === n && (o = (e - t) / u + 4), o /= 6, {
        hue: Math.round(360 * o),
        saturation: Math.round(100 * r),
        lightness: Math.round(100 * a)
    }
}, vu.hslToRgb = function(e, t, n) {
    function r(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), 6 * n < 1 ? e + 6 * (t - e) * n : 2 * n < 1 ? t : 3 * n < 2 ? e + 6 * (2 / 3 - n) * (t - e) : e
    }
    if (e /= 360, n /= 100, 0 == (t /= 100)) return {
        red: Math.floor(255 * n),
        green: Math.floor(255 * n),
        blue: Math.floor(255 * n)
    };
    var i = n < .5 ? n * (1 + t) : n + t - t * n,
        s = 2 * n - i;
    return {
        red: Math.floor(255 * r(s, i, e + 1 / 3)),
        green: Math.floor(255 * r(s, i, e)),
        blue: Math.floor(255 * r(s, i, e - 1 / 3))
    }
}, vu.hslToHex = function(e, t, n) {
    var r = vu.hslToRgb(e, t, n);
    return vu.rgbToHex(r.red, r.green, r.blue)
}, vu.white = new vu("fff"), vu.black = new vu("000");
var gu = function() {
        if ("undefined" != typeof Map) return Map;

        function e(e, t) {
            var n = -1;
            return e.some((function(e, r) {
                return e[0] === t && (n = r, !0)
            })), n
        }
        return (function() {
            function t() {
                this.__entries__ = []
            }
            return Object.defineProperty(t.prototype, "size", {
                get: function() {
                    return this.__entries__.length
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.get = function(t) {
                var n = e(this.__entries__, t),
                    r = this.__entries__[n];
                return r && r[1]
            }, t.prototype.set = function(t, n) {
                var r = e(this.__entries__, t);
                ~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n])
            }, t.prototype.delete = function(t) {
                var n = this.__entries__,
                    r = e(n, t);
                ~r && n.splice(r, 1)
            }, t.prototype.has = function(t) {
                return !!~e(this.__entries__, t)
            }, t.prototype.clear = function() {
                this.__entries__.splice(0)
            }, t.prototype.forEach = function(e, t) {
                void 0 === t && (t = null);
                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                    var i = r[n];
                    e.call(t, i[1], i[0])
                }
            }, t
        }())
    }(),
    yu = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
    Eu = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
    Su = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(Eu) : function(e) {
        return setTimeout((function() {
            return e(Date.now())
        }), 1e3 / 60)
    },
    Tu = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
    bu = "undefined" != typeof MutationObserver,
    Au = function() {
        function e() {
            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
                var n = !1,
                    r = !1,
                    i = 0;

                function s() {
                    n && (n = !1, e()), r && a()
                }

                function o() {
                    Su(s)
                }

                function a() {
                    var e = Date.now();
                    if (n) {
                        if (e - i < 2) return;
                        r = !0
                    } else n = !0, r = !1, setTimeout(o, 20);
                    i = e
                }
                return a
            }(this.refresh.bind(this))
        }
        return e.prototype.addObserver = function(e) {
            ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
        }, e.prototype.removeObserver = function(e) {
            var t = this.observers_,
                n = t.indexOf(e);
            ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
        }, e.prototype.refresh = function() {
            this.updateObservers_() && this.refresh()
        }, e.prototype.updateObservers_ = function() {
            var e = this.observers_.filter((function(e) {
                return e.gatherActive(), e.hasActive()
            }));
            return e.forEach((function(e) {
                return e.broadcastActive()
            })), e.length > 0
        }, e.prototype.connect_ = function() {
            yu && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), bu ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, e.prototype.disconnect_ = function() {
            yu && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, e.prototype.onTransitionEnd_ = function(e) {
            var t = e.propertyName,
                n = void 0 === t ? "" : t;
            Tu.some((function(e) {
                return !!~n.indexOf(e)
            })) && this.refresh()
        }, e.getInstance = function() {
            return this.instance_ || (this.instance_ = new e), this.instance_
        }, e.instance_ = null, e
    }(),
    Iu = function(e, t) {
        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var i = r[n];
            Object.defineProperty(e, i, {
                value: t[i],
                enumerable: !1,
                writable: !1,
                configurable: !0
            })
        }
        return e
    },
    wu = function(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView || Eu
    },
    Ru = Cu(0, 0, 0, 0);

function Pu(e) {
    return parseFloat(e) || 0
}

function Du(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce((function(t, n) {
        return t + Pu(e["border-" + n + "-width"])
    }), 0)
}
var ku = "undefined" != typeof SVGGraphicsElement ? function(e) {
    return e instanceof wu(e).SVGGraphicsElement
} : function(e) {
    return e instanceof wu(e).SVGElement && "function" == typeof e.getBBox
};

function Ou(e) {
    return yu ? ku(e) ? function(e) {
        var t = e.getBBox();
        return Cu(0, 0, t.width, t.height)
    }(e) : function(e) {
        var t = e.clientWidth,
            n = e.clientHeight;
        if (!t && !n) return Ru;
        var r = wu(e).getComputedStyle(e),
            i = function(e) {
                for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                    var i = r[n],
                        s = e["padding-" + i];
                    t[i] = Pu(s)
                }
                return t
            }(r),
            s = i.left + i.right,
            o = i.top + i.bottom,
            a = Pu(r.width),
            u = Pu(r.height);
        if ("border-box" === r.boxSizing && (Math.round(a + s) !== t && (a -= Du(r, "left", "right") + s), Math.round(u + o) !== n && (u -= Du(r, "top", "bottom") + o)), ! function(e) {
                return e === wu(e).document.documentElement
            }(e)) {
            var c = Math.round(a + s) - t,
                l = Math.round(u + o) - n;
            1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(l) && (u -= l)
        }
        return Cu(i.left, i.top, a, u)
    }(e) : Ru
}

function Cu(e, t, n, r) {
    return {
        x: e,
        y: t,
        width: n,
        height: r
    }
}
var Lu = function() {
        function e(e) {
            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Cu(0, 0, 0, 0), this.target = e
        }
        return e.prototype.isActive = function() {
            var e = Ou(this.target);
            return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
        }, e.prototype.broadcastRect = function() {
            var e = this.contentRect_;
            return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
        }, e
    }(),
    Nu = function(e, t) {
        var n = function(e) {
            var t = e.x,
                n = e.y,
                r = e.width,
                i = e.height,
                s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                o = Object.create(s.prototype);
            return Iu(o, {
                x: t,
                y: n,
                width: r,
                height: i,
                top: n,
                right: t + r,
                bottom: i + n,
                left: t
            }), o
        }(t);
        Iu(this, {
            target: e,
            contentRect: n
        })
    },
    Mu = function() {
        function e(e, t, n) {
            if (this.activeObservations_ = [], this.observations_ = new gu, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
        }
        return e.prototype.observe = function(e) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof wu(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) || (t.set(e, new Lu(e)), this.controller_.addObserver(this), this.controller_.refresh())
            }
        }, e.prototype.unobserve = function(e) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof wu(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
            }
        }, e.prototype.disconnect = function() {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, e.prototype.gatherActive = function() {
            var e = this;
            this.clearActive(), this.observations_.forEach((function(t) {
                t.isActive() && e.activeObservations_.push(t)
            }))
        }, e.prototype.broadcastActive = function() {
            if (this.hasActive()) {
                var e = this.callbackCtx_,
                    t = this.activeObservations_.map((function(e) {
                        return new Nu(e.target, e.broadcastRect())
                    }));
                this.callback_.call(e, t, e), this.clearActive()
            }
        }, e.prototype.clearActive = function() {
            this.activeObservations_.splice(0)
        }, e.prototype.hasActive = function() {
            return this.activeObservations_.length > 0
        }, e
    }(),
    xu = "undefined" != typeof WeakMap ? new WeakMap : new gu,
    Fu = function e(t) {
        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var n = Au.getInstance(),
            r = new Mu(t, n, this);
        xu.set(this, r)
    };
["observe", "unobserve", "disconnect"].forEach((function(e) {
    Fu.prototype[e] = function() {
        var t;
        return (t = xu.get(this))[e].apply(t, arguments)
    }
}));
var Uu = void 0 !== Eu.ResizeObserver ? Eu.ResizeObserver : Fu;

function Bu(e, t, n) {
    var r = !0,
        i = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    return p(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Qa(e, t, {
        leading: r,
        maxWait: t,
        trailing: i
    })
}

function ju(e, t, n) {
    this.constructorName = "MessageApiError", this.message = e, this.name = t, this.source = n
}

function Vu(e) {
    return e
}

function Hu(e) {
    if (!e || "" === e) return {};
    if ("object" == typeof e) return e;
    try {
        return JSON.parse(e)
    } catch (t) {
        return {}
    }
}

function Xu(e) {}
ju.prototype = new Error;
let qu = {
        captureException(e) {},
        captureMessage(e) {},
        captureBreadcrumb() {}
    },
    Gu = qu;
var Wu = {
    set: function(e) {
        Gu = Object.assign({}, qu, e)
    },
    captureException: function(e, t) {
        return Gu.captureException(e, t)
    },
    captureMessage: function(e, t) {
        return Gu.captureMessage(e, t)
    },
    captureBreadcrumb: function(e, t, n = "backbone", r = "info") {
        return Gu.captureBreadcrumb(e, t, n, r)
    }
};

function Ku(e) {
    const t = function(e) {
            let t = document.referrer || e;
            try {
                t = decodeURIComponent(t)
            } catch (rl) {
                t = unescape(t)
            }
            return t
        }(e),
        n = {},
        r = {},
        i = {
            parseMessage: Hu,
            buildMessage: Vu,
            logError: Xu
        };
    let s = {};
    const o = {
        get methods() {
            return n
        },
        extendMethods(...e) {
            yt.apply(void 0, [n].concat(e))
        },
        get listeners() {
            return s
        },
        set listeners(e) {
            s = e
        },
        emit(e, ...t) {
            if (a.apply(void 0, [e].concat(t))) {
                const n = {
                    event: e
                };
                t && t[0] && (n.data = t[0]), u(n)
            }
        },
        filter(e, t) {
            t || "function" != typeof e || (t = e, e = null), e ? function(e, t) {
                r.event = r.event || {}, r.event[e] = r.event[e] || [], r.event[e].push(t)
            }(e, t) : function(e) {
                r.global = r.global || [], r.global.push(e)
            }(t)
        },
        hooks: (...e) => yt.apply(void 0, [i].concat(e))
    };

    function a(...e) {
        if (r) {
            let t, n;
            if (r.global && r.global.length)
                for (t = 0; t < r.global.length; t++)
                    if (n = r.global[t], !n.apply(n, e)) return !1;
            let i = e[0];
            if (r.event && r.event[i] && r.event[i].length)
                for (t = 0; t < r.event[i].length; t++)
                    if (n = r.event[i][t], !n.apply(n, e)) return !1
        }
        return !0
    }

    function u(e) {
        if (window.postMessage && window.parent.postMessage && (e = i.buildMessage(e), window.parent != window)) try {
            const n = t && "null" !== t ? t : "*";
            window.parent.postMessage(e, n)
        } catch (n) {}
    }
    return window.addEventListener("message", (function(e) {
        if (e.source !== window.parent) return;
        let t = i.parseMessage(e.data),
            {
                method: r,
                value: s
            } = t;
        if (!(void 0 === r || "string" != typeof r || r.indexOf("_") > -1)) try {
            let o = function(e, t) {
                if (!e) return null;
                let n = Object.getOwnPropertyDescriptor(t, e);
                if (n && "function" == typeof n.value) return n.value;
                if (n && "function" == typeof n.get) return n.get;
                const r = e.substr(0, 3),
                    i = e.substr(3, 1).toLowerCase() + e.substr(4);
                return n = Object.getOwnPropertyDescriptor(t, i), "get" === r && n && "function" == typeof n.get ? n.get : "set" === r && n && "function" == typeof n.set ? n.set : null
            }(r, n);
            if (!o) throw new ju(`“${e}” is not a valid method. Valid methods are: ${function(e){return Object.keys(e).reduce((t,n)=>{const r=Object.getOwnPropertyDescriptor(e,n);return"function"==typeof r.value?(t.push(n),t):("function"==typeof r.get&&t.push("get"+n.charAt(0).toUpperCase()+n.slice(1)),"function"==typeof r.set&&t.push("set"+n.charAt(0).toUpperCase()+n.slice(1)),t)},[]).sort()}(n).join(", ")}.`, "TypeError", r);
            Wu.captureBreadcrumb("API message received", t, "api"), Promise.resolve(o.call(e, s)).then(e => u({
                method: r,
                value: null == e ? s : e
            })).catch(i.logError)
        } catch (o) {
            i.logError(o)
        }
    }), !1), o
}
var Yu = self !== top,
    $u = function() {
        var e = document.createElement("video"),
            t = {
                request: ["requestFullscreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"],
                exit: ["exitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
                enabled: ["fullscreenEnabled", "webkitFullscreenEnabled", "mozFullScreenEnabled", "msFullscreenEnabled"],
                element: ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"],
                change: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                error: ["fullscreenerror", "webkitfullscreenerror", "mozfullscreenerror", "MSFullscreenError"]
            },
            n = {};
        for (var r in t)
            for (var i = 0, s = t[r].length; i < s; i++)
                if (t[r][i] in e || t[r][i] in document || "on" + t[r][i].toLowerCase() in document) {
                    n[r] = t[r][i];
                    break
                }
        return n
    }(),
    zu = {
        ENTER: "enter",
        EXIT: "exit",
        CHANGE: "change",
        ERROR: "error"
    },
    Qu = [],
    Ju = {};

function Zu() {
    var e = Array.prototype.slice.apply(arguments),
        t = e.shift();
    Ju[t].forEach((function(t) {
        "function" == typeof t && t.apply(t, e)
    }))
}

function ec(e) {
    return function(t, n) {
        -1 !== Qu.indexOf(t) && e.call(this, t, n)
    }
}

function tc(e) {
    var t = null;
    if ("VIDEO" === e.tagName) t = e;
    else {
        var n = e.getElementsByTagName("video");
        n[0] && (t = n[0])
    }
    return t
}
Object.keys(zu).forEach((function(e) {
    Qu.push(zu[e]), Ju[zu[e]] = []
}));
var nc = null,
    rc = function() {},
    ic = [];

function sc(e) {
    var t = tc(e);
    if (t && t.webkitEnterFullscreen) {
        try {
            t.readyState < t.HAVE_METADATA ? (t.addEventListener("loadedmetadata", (function n() {
                t.removeEventListener("loadedmetadata", n, !1);
                try {
                    t.webkitEnterFullscreen()
                } catch (r) {
                    return uc("cannot_enter_fullscreen", e)
                }
            }), !1), t.load()) : t.webkitEnterFullscreen(), nc = t
        } catch (n) {
            return uc("not_supported", e)
        }
        return !0
    }
    return uc(void 0 === $u.request ? "not_supported" : "not_enabled", e)
}
var oc = function(e) {
        var t = ic[ic.length - 1];
        t && (e !== t.element && e !== nc || !t.hasEntered) && ("VIDEO" === e.tagName && (nc = e), 1 === ic.length && cc.onenter(cc.element), t.enter.call(t.element, e || t.element), t.hasEntered = !0, Zu(zu.ENTER, cc.element))
    },
    ac = function() {
        nc = null;
        var e = ic.pop();
        e && (e.exit.call(e.element), Zu(zu.EXIT, e.element), cc.element || (ic.forEach((function(e) {
            e.exit.call(e.element), Zu(zu.EXIT, e.element)
        })), ic = [], cc.onexit()))
    },
    uc = function(e, t) {
        if (ic.length > 0) {
            var n = ic.pop();
            t = t || n.element, n.error.call(t, e), cc.onerror(t, e), Zu(zu.ERROR, t, e)
        }
    },
    cc = {
        request: function(e, t, n, r) {
            if (e = e || document.body, ic.push({
                    element: e,
                    enter: t || rc,
                    exit: n || rc,
                    error: r || rc
                }), void 0 === $u.request) return sc(e);
            if (Yu && !1 === document[$u.enabled]) return sc(e);
            try {
                e[$u.request]()
            } catch (i) {
                uc("not_enabled", e)
            }
        },
        exit: function() {
            !document[$u.exit] && cc.element ? cc.element[$u.exit]() : document[$u.exit]()
        },
        toggle: function(e, t, n, r) {
            cc.element ? cc.exit() : cc.request(e, t, n, r)
        },
        videoEnabled: function(e) {
            if (cc.enabled) return !0;
            var t = tc(e = e || document.body);
            return !(!t || void 0 === t.webkitSupportsFullscreen) && (t.readyState < t.HAVE_METADATA ? "maybe" : t.webkitSupportsFullscreen)
        },
        on: ec((function(e, t) {
            Ju[e].push(t)
        })),
        off: ec((function(e, t) {
            var n = Ju[e].indexOf(t);
            n > -1 && Ju[e].splice(n, 1)
        })),
        onenter: rc,
        onexit: rc,
        onchange: rc,
        onerror: rc
    };
try {
    Object.defineProperties(cc, {
        element: {
            enumerable: !0,
            get: function() {
                return nc && nc.webkitDisplayingFullscreen ? nc : document[$u.element] || null
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return document[$u.enabled] || !1
            }
        }
    })
} catch (kd) {
    cc.element = null, cc.enabled = !1
}
$u.change && document.addEventListener($u.change, (function(e) {
    if (cc.onchange(cc.element), Zu(zu.CHANGE, cc.element), cc.element) {
        var t = ic[ic.length - 2];
        t && t.element === cc.element ? ac() : oc(cc.element)
    } else ac()
}), !1), document.addEventListener("webkitbeginfullscreen", (function(e) {
    var t = !0;
    if (ic.length > 0)
        for (var n = 0, r = ic.length; n < r; n++)
            if (tc(ic[n].element) === e.srcElement) {
                t = !1;
                break
            }
    t && ic.push({
        element: e.srcElement,
        enter: rc,
        exit: rc,
        error: rc
    }), cc.onchange(e.srcElement), Zu(zu.CHANGE, cc.srcElement), oc(e.srcElement)
}), !0), document.addEventListener("webkitendfullscreen", (function(e) {
    cc.onchange(e.srcElement), Zu(zu.CHANGE, e.srcElement), ac(e.srcElement)
}), !0), $u.error && document.addEventListener($u.error, (function(e) {
    uc("not_allowed")
}), !1);
var lc = Object.prototype.hasOwnProperty,
    hc = tn((function(e, t) {
        if (de(t) || ve(t)) j(t, ge(t), e);
        else
            for (var n in t) lc.call(t, n) && B(e, n, t[n])
    })),
    dc = dt((function(e) {
        ! function() {
            var t = "undefined" != typeof window && window === this ? this : void 0 !== ht && null != ht ? ht : this,
                n = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
                    e != Array.prototype && e != Object.prototype && (e[t] = n.value)
                };

            function r() {
                r = function() {}, t.Symbol || (t.Symbol = s)
            }
            var i = 0;

            function s(e) {
                return "jscomp_symbol_" + (e || "") + i++
            }

            function o() {
                r();
                var e = t.Symbol.iterator;
                e || (e = t.Symbol.iterator = t.Symbol("iterator")), "function" != typeof Array.prototype[e] && n(Array.prototype, e, {
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        return a(this)
                    }
                }), o = function() {}
            }

            function a(e) {
                var n = 0;
                return function(e) {
                    return o(), (e = {
                        next: e
                    })[t.Symbol.iterator] = function() {
                        return this
                    }, e
                }((function() {
                    return n < e.length ? {
                        done: !1,
                        value: e[n++]
                    } : {
                        done: !0
                    }
                }))
            }

            function u(e) {
                o();
                var t = e[Symbol.iterator];
                return t ? t.call(e) : a(e)
            }

            function c(e) {
                if (!(e instanceof Array)) {
                    e = u(e);
                    for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                    e = n
                }
                return e
            }
            var l = 0,
                h = "img script iframe link audio video source".split(" ");

            function d(e, t) {
                for (var n = (e = u(e)).next(); !n.done; n = e.next())
                    if (n = n.value, t.includes(n.nodeName.toLowerCase()) || d(n.children, t)) return !0;
                return !1
            }

            function f(e, t) {
                if (2 < e.length) return performance.now();
                for (var n = [], r = (t = u(t)).next(); !r.done; r = t.next()) r = r.value, n.push({
                    timestamp: r.start,
                    type: "requestStart"
                }), n.push({
                    timestamp: r.end,
                    type: "requestEnd"
                });
                for (r = (t = u(e)).next(); !r.done; r = t.next()) n.push({
                    timestamp: r.value,
                    type: "requestStart"
                });
                for (n.sort((function(e, t) {
                        return e.timestamp - t.timestamp
                    })), e = e.length, t = n.length - 1; 0 <= t; t--) switch (r = n[t], r.type) {
                    case "requestStart":
                        e--;
                        break;
                    case "requestEnd":
                        if (2 < ++e) return r.timestamp;
                        break;
                    default:
                        throw Error("Internal Error: This should never happen")
                }
                return 0
            }

            function _(e) {
                e = e || {}, this.w = !!e.useMutationObserver, this.u = e.minValue || null, e = window.__tti && window.__tti.e;
                var t = window.__tti && window.__tti.o;
                this.a = e ? e.map((function(e) {
                        return {
                            start: e.startTime,
                            end: e.startTime + e.duration
                        }
                    })) : [], t && t.disconnect(), this.b = [], this.f = new Map, this.j = null, this.v = -1 / 0, this.i = !1, this.h = this.c = this.s = null,
                    function(e, t) {
                        var n = XMLHttpRequest.prototype.send,
                            r = l++;
                        XMLHttpRequest.prototype.send = function(i) {
                            for (var s = [], o = 0; o < arguments.length; ++o) s[o - 0] = arguments[o];
                            var a = this;
                            return e(r), this.addEventListener("readystatechange", (function() {
                                4 === a.readyState && t(r)
                            })), n.apply(this, s)
                        }
                    }(this.m.bind(this), this.l.bind(this)),
                    function(e, t) {
                        var n = fetch;
                        fetch = function(r) {
                            for (var i = [], s = 0; s < arguments.length; ++s) i[s - 0] = arguments[s];
                            return new Promise((function(r, s) {
                                var o = l++;
                                e(o), n.apply(null, [].concat(c(i))).then((function(e) {
                                    t(o), r(e)
                                }), (function(e) {
                                    t(e), s(e)
                                }))
                            }))
                        }
                    }(this.m.bind(this), this.l.bind(this)),
                    function(e) {
                        e.c = new PerformanceObserver((function(t) {
                            for (var n = (t = u(t.getEntries())).next(); !n.done; n = t.next())
                                if ("resource" === (n = n.value).entryType && (e.b.push({
                                        start: n.fetchStart,
                                        end: n.responseEnd
                                    }), m(e, f(e.g, e.b) + 5e3)), "longtask" === n.entryType) {
                                    var r = n.startTime + n.duration;
                                    e.a.push({
                                        start: n.startTime,
                                        end: r
                                    }), m(e, r + 5e3)
                                }
                        })), e.c.observe({
                            entryTypes: ["longtask", "resource"]
                        })
                    }(this), this.w && (this.h = function(e) {
                        var t = new MutationObserver((function(t) {
                            for (var n = (t = u(t)).next(); !n.done; n = t.next())("childList" == (n = n.value).type && d(n.addedNodes, h) || "attributes" == n.type && h.includes(n.target.tagName.toLowerCase())) && e(n)
                        }));
                        return t.observe(document, {
                            attributes: !0,
                            childList: !0,
                            subtree: !0,
                            attributeFilter: ["href", "src"]
                        }), t
                    }(this.B.bind(this)))
            }

            function p(e) {
                e.i = !0;
                var t = 0 < e.a.length ? e.a[e.a.length - 1].end : 0,
                    n = f(e.g, e.b);
                m(e, Math.max(n + 5e3, t))
            }

            function m(e, t) {
                !e.i || e.v > t || (clearTimeout(e.j), e.j = setTimeout((function() {
                    var t = performance.timing.navigationStart,
                        n = f(e.g, e.b);
                    if (t = (window.a && window.a.A ? 1e3 * window.a.A().C - t : 0) || performance.timing.domContentLoadedEventEnd - t, e.u) var r = e.u;
                    else r = performance.timing.domContentLoadedEventEnd ? (r = performance.timing).domContentLoadedEventEnd - r.navigationStart : null;
                    var i = performance.now();
                    null === r && m(e, Math.max(n + 5e3, i + 1e3));
                    var s = e.a;
                    (n = 5e3 > i - n || 5e3 > i - (n = s.length ? s[s.length - 1].end : t) ? null : Math.max(n, r)) && (e.s(n), clearTimeout(e.j), e.i = !1, e.c && e.c.disconnect(), e.h && e.h.disconnect()), m(e, performance.now() + 1e3)
                }), t - performance.now()), e.v = t)
            }
            _.prototype.getFirstConsistentlyInteractive = function() {
                var e = this;
                return new Promise((function(t) {
                    e.s = t, "complete" == document.readyState ? p(e) : window.addEventListener("load", (function() {
                        p(e)
                    }))
                }))
            }, _.prototype.m = function(e) {
                this.f.set(e, performance.now())
            }, _.prototype.l = function(e) {
                this.f.delete(e)
            }, _.prototype.B = function() {
                m(this, performance.now() + 5e3)
            }, t.Object.defineProperties(_.prototype, {
                g: {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return [].concat(c(this.f.values()))
                    }
                }
            });
            var v = {
                getFirstConsistentlyInteractive: function(e) {
                    return e = e || {}, "PerformanceLongTaskTiming" in window ? new _(e).getFirstConsistentlyInteractive() : Promise.resolve(null)
                }
            };
            e.exports ? e.exports = v : window.ttiPolyfill = v
        }()
    })),
    fc = function() {
        return (fc = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    };

function _c(e) {
    return e.toLowerCase()
}
var pc = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
    mc = /[^A-Z0-9]+/gi;

function vc(e, t) {
    void 0 === t && (t = {});
    for (var n = t.splitRegexp, r = void 0 === n ? pc : n, i = t.stripRegexp, s = void 0 === i ? mc : i, o = t.transform, a = void 0 === o ? _c : o, u = t.delimiter, c = void 0 === u ? " " : u, l = gc(gc(e, r, "$1\0$2"), s, "\0"), h = 0, d = l.length;
        "\0" === l.charAt(h);) h++;
    for (;
        "\0" === l.charAt(d - 1);) d--;
    return l.slice(h, d).split("\0").map(a).join(c)
}

function gc(e, t, n) {
    return t instanceof RegExp ? e.replace(t, n) : t.reduce((function(e, t) {
        return e.replace(t, n)
    }), e)
}

function yc(e, t) {
    var n = e.charAt(0),
        r = e.substr(1).toLowerCase();
    return t > 0 && n >= "0" && n <= "9" ? "_" + n + r : "" + n.toUpperCase() + r
}

function Ec(e) {
    return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
}

function Sc(e, t) {
    return void 0 === t && (t = {}), vc(e, fc({
        delimiter: "",
        transform: yc
    }, t))
}

function Tc(e, t) {
    return 0 === t ? e.toLowerCase() : yc(e, t)
}

function bc(e) {
    return e.charAt(0).toUpperCase() + e.substr(1)
}

function Ac(e) {
    return bc(e.toLowerCase())
}

function Ic(e, t) {
    return void 0 === t && (t = {}), vc(e, fc({
        delimiter: " ",
        transform: Ac
    }, t))
}

function wc(e) {
    return e.toUpperCase()
}

function Rc(e, t) {
    return void 0 === t && (t = {}), vc(e, fc({
        delimiter: "."
    }, t))
}

function Pc(e, t) {
    var n = e.toLowerCase();
    return 0 === t ? bc(n) : n
}
for (var Dc = Object.freeze({
        __proto__: null,
        camelCaseTransform: Tc,
        camelCaseTransformMerge: function(e, t) {
            return 0 === t ? e.toLowerCase() : Ec(e)
        },
        camelCase: function(e, t) {
            return void 0 === t && (t = {}), Sc(e, fc({
                transform: Tc
            }, t))
        },
        capitalCaseTransform: Ac,
        capitalCase: Ic,
        constantCase: function(e, t) {
            return void 0 === t && (t = {}), vc(e, fc({
                delimiter: "_",
                transform: wc
            }, t))
        },
        dotCase: Rc,
        headerCase: function(e, t) {
            return void 0 === t && (t = {}), Ic(e, fc({
                delimiter: "-"
            }, t))
        },
        noCase: vc,
        paramCase: function(e, t) {
            return void 0 === t && (t = {}), Rc(e, fc({
                delimiter: "-"
            }, t))
        },
        pascalCaseTransform: yc,
        pascalCaseTransformMerge: Ec,
        pascalCase: Sc,
        pathCase: function(e, t) {
            return void 0 === t && (t = {}), Rc(e, fc({
                delimiter: "/"
            }, t))
        },
        sentenceCaseTransform: Pc,
        sentenceCase: function(e, t) {
            return void 0 === t && (t = {}), vc(e, fc({
                delimiter: " ",
                transform: Pc
            }, t))
        },
        snakeCase: function(e, t) {
            return void 0 === t && (t = {}), Rc(e, fc({
                delimiter: "_"
            }, t))
        }
    }), kc = dt((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Tracker = void 0;
        var n = function() {
            function e() {
                this.name = "bigpicture-client-ts", this.version = "1.2.1"
            }
            return e.getAttributeTypeMap = function() {
                return e.attributeTypeMap
            }, e.attributeTypeMap = [{
                name: "name",
                baseName: "name",
                type: "string"
            }, {
                name: "version",
                baseName: "version",
                type: "string"
            }], e
        }();
        t.Tracker = n
    })), Oc = dt((function(e) {
        var t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (t) {
            var n = new Uint8Array(16);
            e.exports = function() {
                return t(n), n
            }
        } else {
            var r = new Array(16);
            e.exports = function() {
                for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
                return r
            }
        }
    })), Cc = [], Lc = 0; Lc < 256; ++Lc) Cc[Lc] = (Lc + 256).toString(16).substr(1);
var Nc, Mc, xc = function(e, t) {
        var n = t || 0,
            r = Cc;
        return [r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]]].join("")
    },
    Fc = 0,
    Uc = 0,
    Bc = function(e, t, n) {
        var r = t && n || 0;
        "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
        var i = (e = e || {}).random || (e.rng || Oc)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t)
            for (var s = 0; s < 16; ++s) t[r + s] = i[s];
        return t || xc(i)
    },
    jc = Bc;
jc.v1 = function(e, t, n) {
    var r = t && n || 0,
        i = t || [],
        s = (e = e || {}).node || Nc,
        o = void 0 !== e.clockseq ? e.clockseq : Mc;
    if (null == s || null == o) {
        var a = Oc();
        null == s && (s = Nc = [1 | a[0], a[1], a[2], a[3], a[4], a[5]]), null == o && (o = Mc = 16383 & (a[6] << 8 | a[7]))
    }
    var u = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
        c = void 0 !== e.nsecs ? e.nsecs : Uc + 1,
        l = u - Fc + (c - Uc) / 1e4;
    if (l < 0 && void 0 === e.clockseq && (o = o + 1 & 16383), (l < 0 || u > Fc) && void 0 === e.nsecs && (c = 0), c >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    Fc = u, Uc = c, Mc = o;
    var h = (1e4 * (268435455 & (u += 122192928e5)) + c) % 4294967296;
    i[r++] = h >>> 24 & 255, i[r++] = h >>> 16 & 255, i[r++] = h >>> 8 & 255, i[r++] = 255 & h;
    var d = u / 4294967296 * 1e4 & 268435455;
    i[r++] = d >>> 8 & 255, i[r++] = 255 & d, i[r++] = d >>> 24 & 15 | 16, i[r++] = d >>> 16 & 255, i[r++] = o >>> 8 | 128, i[r++] = 255 & o;
    for (var f = 0; f < 6; ++f) i[r + f] = s[f];
    return t || xc(i)
}, jc.v4 = Bc;
var Vc = jc,
    Hc = dt((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Envelope = void 0;
        var n = function() {
            function e(e, t) {
                this.event = e, this.eid = Vc.v4(), this.ts_ms = Date.now(), this._tracker = new kc.Tracker, this._globalBPO = t
            }
            return Object.defineProperty(e.prototype, "tracker", {
                get: function() {
                    return this._tracker
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "global", {
                get: function() {
                    return this._globalBPO
                },
                enumerable: !1,
                configurable: !0
            }), e.getAttributeTypeMap = function() {
                return e.attributeTypeMap
            }, e.attributeTypeMap = [{
                name: "eid",
                baseName: "eid",
                type: "string"
            }, {
                name: "ts_ms",
                baseName: "ts_ms",
                type: "number"
            }, {
                name: "event",
                baseName: "event",
                type: "Event"
            }, {
                name: "global",
                baseName: "global",
                type: "Event"
            }, {
                name: "tracker",
                baseName: "tracker",
                type: "Tracker"
            }], e
        }();
        t.Envelope = n
    })),
    Xc = dt((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Event = void 0;
        var n = function() {
            function e(e, t, n, r) {
                this.name = e, this.ts_ms = Date.now(), this.version = t, this.fields = n, this.namespace = r
            }
            return e.getAttributeTypeMap = function() {
                return e.attributeTypeMap
            }, e.attributeTypeMap = [{
                name: "name",
                baseName: "name",
                type: "string"
            }, {
                name: "ts_ms",
                baseName: "ts_ms",
                type: "number"
            }, {
                name: "version",
                baseName: "version",
                type: "number"
            }, {
                name: "fields",
                baseName: "fields",
                type: "object"
            }, {
                name: "namespace",
                baseName: "namespace",
                type: "string"
            }], e
        }();
        t.Event = n
    })),
    qc = dt((function(e, t) {
        var n = ht && ht.__createBinding || (Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n), Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                })
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }),
            r = ht && ht.__exportStar || function(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ObjectSerializer = void 0, r(Hc, t), r(Xc, t), r(kc, t);
        var i = Xc,
            s = kc,
            o = ["string", "boolean", "double", "integer", "long", "float", "number", "any"],
            a = {},
            u = {
                Envelope: Hc.Envelope,
                Event: i.Event,
                Tracker: s.Tracker
            },
            c = function() {
                function e() {}
                return e.findCorrectType = function(e, t) {
                    if (null == e) return t;
                    if (-1 !== o.indexOf(t.toLowerCase())) return t;
                    if ("Date" === t) return t;
                    if (a[t]) return t;
                    if (!u[t]) return t;
                    var n = u[t].discriminator;
                    if (null == n) return t;
                    if (e[n]) {
                        var r = e[n];
                        return u[r] ? r : t
                    }
                    return t
                }, e.serialize = function(t, n) {
                    if (null == t) return t;
                    if (-1 !== o.indexOf(n.toLowerCase())) return t;
                    if (0 === n.lastIndexOf("Array<", 0)) {
                        var r = n.replace("Array<", "");
                        r = r.substring(0, r.length - 1);
                        var i = [];
                        for (var s in t) {
                            var c = t[s];
                            i.push(e.serialize(c, r))
                        }
                        return i
                    }
                    if ("Date" === n) return t.toISOString();
                    if (a[n]) return t;
                    if (!u[n]) return t;
                    n = this.findCorrectType(t, n);
                    var l = u[n].getAttributeTypeMap(),
                        h = {};
                    for (var s in l) {
                        var d = l[s];
                        h[d.baseName] = e.serialize(t[d.name], d.type)
                    }
                    return h
                }, e.deserialize = function(t, n) {
                    if (n = e.findCorrectType(t, n), null == t) return t;
                    if (-1 !== o.indexOf(n.toLowerCase())) return t;
                    if (0 === n.lastIndexOf("Array<", 0)) {
                        var r = n.replace("Array<", "");
                        r = r.substring(0, r.length - 1);
                        var i = [];
                        for (var s in t) {
                            var c = t[s];
                            i.push(e.deserialize(c, r))
                        }
                        return i
                    }
                    if ("Date" === n) return new Date(t);
                    if (a[n]) return t;
                    if (!u[n]) return t;
                    var l = new u[n],
                        h = u[n].getAttributeTypeMap();
                    for (var s in h) {
                        var d = h[s];
                        l[d.name] = e.deserialize(t[d.baseName], d.type)
                    }
                    return l
                }, e
            }();
        t.ObjectSerializer = c
    })),
    Gc = function(e) {
        return e && e.default || e
    }(Dc),
    Wc = dt((function(e, t) {
        var n, r = ht && ht.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, s) {
                    function o(e) {
                        try {
                            u(r.next(e))
                        } catch (rl) {
                            s(rl)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (rl) {
                            s(rl)
                        }
                    }

                    function u(e) {
                        e.done ? i(e.value) : function(e) {
                            return e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))
                        }(e.value).then(o, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            i = ht && ht.__generator || function(e, t) {
                var n, r, i, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
                                switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        i = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, r = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < i[1]) {
                                            o.label = i[1], i = s;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2], o.ops.push(s);
                                            break
                                        }
                                        i[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (rl) {
                                s = [6, rl], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            };
        Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BigPictureClient = t.Configuration = t.Service = void 0,
            function(e) {
                e.FRESNEL_PROD = "https://fresnel-events.vimeocdn.com", e.FRESNEL_DEV = "https://fresnel-event-staging.vimeows.com"
            }(n = t.Service || (t.Service = {}));
        var s = function(e, t) {
            void 0 === t && (t = null), this.service = e, this.globalBPO = t
        };
        t.Configuration = s;
        var o = function() {
            function e() {}
            return Object.defineProperty(e, "isInitalized", {
                get: function() {
                    return Boolean(e.conf.globalBPO)
                },
                enumerable: !1,
                configurable: !0
            }), e.configure = function(t) {
                e.conf = t, e.WAIT_QUEUE.length > 0 && (e.WAIT_QUEUE.map((function(t) {
                    return e.sendEvent(t)
                })), e.WAIT_QUEUE = [])
            }, e.sendEvent = function(t) {
                return r(this, void 0, void 0, (function() {
                    var n, r, s, o, a;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if (null == t) throw new Error("Required parameter event was null or undefined when calling sendEvent.");
                                return e.isInitalized ? (n = JSON.stringify(qc.ObjectSerializer.serialize([new Hc.Envelope(t, this.conf.globalBPO)], "Array<Envelope>")), r = t.name, null != t.namespace && (r = Gc.snakeCase(t.namespace) + "." + t.name), s = this.conf.service + "/add/" + encodeURIComponent(r), navigator.sendBeacon ? [3, 2] : (o = {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "User-Agent": navigator.userAgent,
                                        Origin: location.origin,
                                        Referer: document.referrer
                                    },
                                    body: n
                                }, [4, fetch(s, o)])) : (e.WAIT_QUEUE.push(t), Boolean(e.flushQueueTimeoutHandler) || (e.flushQueueTimeoutHandler = setTimeout((function() {
                                    e.WAIT_QUEUE.length > 0 && (e.WAIT_QUEUE = [])
                                }), e.FLUSH_QUEUE_TIMEOUT)), [2]);
                            case 1:
                                return i.sent(), [3, 3];
                            case 2:
                                a = new Blob([n]), navigator.sendBeacon(s, a), i.label = 3;
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }, e.FLUSH_QUEUE_TIMEOUT = 1e4, e.conf = new s(n.FRESNEL_PROD), e.WAIT_QUEUE = [], e
        }();
        t.BigPictureClient = o
    })),
    Kc = dt((function(e, t) {
        var n = ht && ht.__createBinding || (Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n), Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                })
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }),
            r = ht && ht.__exportStar || function(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r(Wc, t), r(qc, t)
    }));
const Yc = function(e) {
        return (t, ...n) => (n.forEach(n => {
            for (const r in n) {
                const i = Object.getOwnPropertyDescriptor(n, r);
                Object.defineProperty(t, r, Object.assign(i, e))
            }
        }), t)
    }({
        enumerable: !0,
        configurable: !0,
        writeable: !1
    }),
    $c = {
        AD_BUFFERING: "ad-buffering",
        AD_COMPLETE: "ad-complete",
        AD_CLICK: "ad-click",
        AD_SKIPPED: "ad-skipped",
        ALL_ADS_COMPLETED: "all-ads-completed",
        AD_ERROR: "ad-error",
        AD_STARTED: "ad-started",
        ADS_MANAGER_LOADED: "ads-manager-loaded",
        CONTENT_PAUSE_REQUESTED: "content-pause-requested",
        CONTENT_RESUME_REQUESTED: "content-resume-requested"
    };

function zc(e, t) {
    const n = ft();
    let r, i, s, o, a;

    function u(e) {
        var s = new r.AdsRenderingSettings;
        s.restoreCustomPlaybackStateOnAdBreakComplete = !0, s.uiElements = [], i = e.getAdsManager(t.videoPlayer, s), n.fire($c.ADS_MANAGER_LOADED), i.addEventListener(r.AdErrorEvent.Type.AD_ERROR, v), i.addEventListener(r.AdEvent.Type.CONTENT_PAUSE_REQUESTED, c), i.addEventListener(r.AdEvent.Type.CONTENT_RESUME_REQUESTED, l), i.addEventListener(r.AdEvent.Type.AD_BUFFERING, h), i.addEventListener(r.AdEvent.Type.STARTED, d), i.addEventListener(r.AdEvent.Type.COMPLETE, f), i.addEventListener(r.AdEvent.Type.CLICK, _), i.addEventListener(r.AdEvent.Type.SKIPPED, p), i.addEventListener(r.AdEvent.Type.ALL_ADS_COMPLETED, m)
    }

    function c(e) {
        n.fire($c.CONTENT_PAUSE_REQUESTED, e)
    }

    function l(e) {
        n.fire($c.CONTENT_RESUME_REQUESTED, e)
    }

    function h(e) {
        n.fire($c.AD_BUFFERING, e)
    }

    function d(e) {
        n.fire($c.AD_STARTED, e)
    }

    function f(e) {
        n.fire($c.AD_COMPLETE, e)
    }

    function _(e) {
        i.pause(), n.fire($c.AD_CLICK, e)
    }

    function p(e) {
        n.fire($c.AD_SKIPPED, e)
    }

    function m(e) {
        n.fire($c.ALL_ADS_COMPLETED, e)
    }

    function v(e) {
        n.fire($c.AD_ERROR, e.getError()), i && i.destroy()
    }
    const g = {
        start: (e, t) => (a.initialize(), i.init(e, t, r.ViewMode.NORMAL), i.start()),
        stop: () => i.stop(),
        pause: () => i.pause(),
        play: () => i.resume(),
        skip: () => i.skip(),
        resize: (e, t, n) => n ? i.resize(e, t, r.ViewMode.FULLSCREEN) : i.resize(e, t, r.ViewMode.NORMAL),
        destroy() {
            n.off(), i.destroy(), s.destroy(), a.destroy()
        },
        get volume() {
            return bt(i.getVolume())
        },
        set volume(e) {
            i.setVolume(Tt(e))
        },
        get adsManager() {
            return i
        },
        get adsLoader() {
            return s
        },
        get remainingTime() {
            return i.getRemainingTime()
        },
        setContentComplete() {
            s.contentComplete()
        },
        on(e, t) {
            return n.on(e, t), this
        },
        off(e, t) {
            return n.off(e, t), this
        }
    };
    return function(e, t, n) {
        if (document.getElementById("vp-ima-sdk")) n();
        else {
            var r = document.createElement("script");
            r.id = "vp-ima-sdk", r.src = "https://imasdk.googleapis.com/js/sdkloader/ima3.js", r.onreadystatechange = r.onload = () => {
                n && n()
            }, document.getElementsByTagName("body")[0].appendChild(r)
        }
    }(0, 0, (function() {
        r = google.ima;
        let n = Gn.iOS ? t.videoPlayer.videoElement : t.videoPlayer;
        a = new r.AdDisplayContainer(e, n), s = new r.AdsLoader(a), s.addEventListener(r.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, u), s.addEventListener(r.AdErrorEvent.Type.AD_ERROR, v), o = new r.AdsRequest, t.adUrl && (o.adTagUrl = t.adUrl), o.linearAdSlotWidth = t.width.linear, o.linearAdSlotHeight = t.height.linear, o.nonLinearAdSlotWidth = t.width.nonlinear, o.nonLinearAdSlotHeight = t.height.nonlinear, s.requestAds(o)
    })), Yc(this, g)
}

function Qc(e, t, n, r) {
    if (!p(e)) return e;
    for (var i = -1, s = (t = wo(t, e)).length, o = s - 1, a = e; null != a && ++i < s;) {
        var u = Ro(t[i]),
            c = n;
        if (i != o) {
            var l = a[u];
            void 0 === (c = r ? r(l, u, a) : void 0) && (c = p(l) ? l : Z(t[i + 1]) ? [] : {})
        }
        B(a, u, c), a = a[u]
    }
    return e
}

function Jc(e, t) {
    return null != e && t in Object(e)
}

function Zc(e, t) {
    return function(e, t, n) {
        for (var r = -1, i = t.length, s = {}; ++r < i;) {
            var o = t[r],
                a = Po(e, o);
            n(0, o) && Qc(s, wo(o, e), a)
        }
        return s
    }(e, t, (function(t, n) {
        return function(e, t) {
            return null != e && function(e, t, n) {
                for (var r = -1, i = (t = wo(t, e)).length, s = !1; ++r < i;) {
                    var o = Ro(t[r]);
                    if (!(s = null != e && n(e, o))) break;
                    e = e[o]
                }
                return s || ++r != i ? s : !!(i = null == e ? 0 : e.length) && ee(i) && Z(o, i) && (K(e) || W(e))
            }(e, t, Jc)
        }(e, n)
    }))
}
var el = a ? a.isConcatSpreadable : void 0;

function tl(e) {
    return K(e) || W(e) || !!(el && e && e[el])
}

function nl(e) {
    return null != e && e.length ? function e(t, n, r, i, s) {
        var o = -1,
            a = t.length;
        for (r || (r = tl), s || (s = []); ++o < a;) {
            var u = t[o];
            n > 0 && r(u) ? n > 1 ? e(u, n - 1, r, i, s) : Oe(s, u) : i || (s[s.length] = u)
        }
        return s
    }(e, 1) : []
}
var rl, il, sl, ol, al = function(e) {
        return Ht(Ut(e, void 0, nl), e + "")
    }((function(e, t) {
        return null == e ? {} : Zc(e, t)
    })),
    ul = function(e, t) {
        return {
            name: e,
            value: void 0 === t ? -1 : t,
            delta: 0,
            entries: [],
            id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
        }
    },
    cl = function(e, t) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                if ("first-input" === e && !("PerformanceEventTiming" in self)) return;
                var n = new PerformanceObserver((function(e) {
                    return e.getEntries().map(t)
                }));
                return n.observe({
                    type: e,
                    buffered: !0
                }), n
            }
        } catch (e) {}
    },
    ll = function(e, t) {
        var n = function n(r) {
            "pagehide" !== r.type && "hidden" !== document.visibilityState || (e(r), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
        };
        addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
    },
    hl = function(e) {
        addEventListener("pageshow", (function(t) {
            t.persisted && e(t)
        }), !0)
    },
    dl = function(e, t, n) {
        var r;
        return function(i) {
            t.value >= 0 && (i || n) && (t.delta = t.value - (r || 0), (t.delta || void 0 === r) && (r = t.value, e(t)))
        }
    },
    fl = -1,
    _l = function() {
        return "hidden" === document.visibilityState ? 0 : 1 / 0
    },
    pl = function() {
        ll((function(e) {
            var t = e.timeStamp;
            fl = t
        }), !0)
    },
    ml = function() {
        return fl < 0 && (fl = _l(), pl(), hl((function() {
            setTimeout((function() {
                fl = _l(), pl()
            }), 0)
        }))), {
            get firstHiddenTime() {
                return fl
            }
        }
    },
    vl = function(e, t) {
        var n, r = ml(),
            i = ul("FCP"),
            s = function(e) {
                "first-contentful-paint" === e.name && (a && a.disconnect(), e.startTime < r.firstHiddenTime && (i.value = e.startTime, i.entries.push(e), n(!0)))
            },
            o = window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0],
            a = o ? null : cl("paint", s);
        (o || a) && (n = dl(e, i, t), o && s(o), hl((function(r) {
            i = ul("FCP"), n = dl(e, i, t), requestAnimationFrame((function() {
                requestAnimationFrame((function() {
                    i.value = performance.now() - r.timeStamp, n(!0)
                }))
            }))
        })))
    },
    gl = !1,
    yl = -1,
    El = function(e, t) {
        gl || (vl((function(e) {
            yl = e.value
        })), gl = !0);
        var n, r = function(t) {
                yl > -1 && e(t)
            },
            i = ul("CLS", 0),
            s = 0,
            o = [],
            a = function(e) {
                if (!e.hadRecentInput) {
                    var t = o[0],
                        r = o[o.length - 1];
                    s && e.startTime - r.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (s += e.value, o.push(e)) : (s = e.value, o = [e]), s > i.value && (i.value = s, i.entries = o, n())
                }
            },
            u = cl("layout-shift", a);
        u && (n = dl(r, i, t), ll((function() {
            u.takeRecords().map(a), n(!0)
        })), hl((function() {
            s = 0, yl = -1, i = ul("CLS", 0), n = dl(r, i, t)
        })))
    },
    Sl = {
        passive: !0,
        capture: !0
    },
    Tl = new Date,
    bl = function(e, t) {
        rl || (rl = t, il = e, sl = new Date, wl(removeEventListener), Al())
    },
    Al = function() {
        if (il >= 0 && il < sl - Tl) {
            var e = {
                entryType: "first-input",
                name: rl.type,
                target: rl.target,
                cancelable: rl.cancelable,
                startTime: rl.timeStamp,
                processingStart: rl.timeStamp + il
            };
            ol.forEach((function(t) {
                t(e)
            })), ol = []
        }
    },
    Il = function(e) {
        if (e.cancelable) {
            var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
            "pointerdown" == e.type ? function(e, t) {
                var n = function() {
                        bl(e, t), i()
                    },
                    r = function() {
                        i()
                    },
                    i = function() {
                        removeEventListener("pointerup", n, Sl), removeEventListener("pointercancel", r, Sl)
                    };
                addEventListener("pointerup", n, Sl), addEventListener("pointercancel", r, Sl)
            }(t, e) : bl(t, e)
        }
    },
    wl = function(e) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
            return e(t, Il, Sl)
        }))
    },
    Rl = function(e, t) {
        var n, r = ml(),
            i = ul("FID"),
            s = function(e) {
                e.startTime < r.firstHiddenTime && (i.value = e.processingStart - e.startTime, i.entries.push(e), n(!0))
            },
            o = cl("first-input", s);
        n = dl(e, i, t), o && ll((function() {
            o.takeRecords().map(s), o.disconnect()
        }), !0), o && hl((function() {
            var r;
            i = ul("FID"), n = dl(e, i, t), ol = [], il = -1, rl = null, wl(addEventListener), r = s, ol.push(r), Al()
        }))
    },
    Pl = {},
    Dl = function(e, t) {
        var n, r = ml(),
            i = ul("LCP"),
            s = function(e) {
                var t = e.startTime;
                t < r.firstHiddenTime && (i.value = t, i.entries.push(e), n())
            },
            o = cl("largest-contentful-paint", s);
        if (o) {
            n = dl(e, i, t);
            var a = function() {
                Pl[i.id] || (o.takeRecords().map(s), o.disconnect(), Pl[i.id] = !0, n(!0))
            };
            ["keydown", "click"].forEach((function(e) {
                addEventListener(e, a, {
                    once: !0,
                    capture: !0
                })
            })), ll(a, !0), hl((function(r) {
                i = ul("LCP"), n = dl(e, i, t), requestAnimationFrame((function() {
                    requestAnimationFrame((function() {
                        i.value = performance.now() - r.timeStamp, Pl[i.id] = !0, n(!0)
                    }))
                }))
            }))
        }
    },
    kl = function(e) {
        return function(t) {
            return null == e ? void 0 : e[t]
        }
    }({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }),
    Ol = /[&<>"']/g,
    Cl = RegExp(Ol.source);

function Ll(e) {
    return (e = Ns(e)) && Cl.test(e) ? e.replace(Ol, kl) : e
}
var Nl, Ml, xl, Fl, Ul, Bl, jl, Vl = {},
    Hl = [],
    Xl = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function ql(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function Gl(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
}

function Wl(e, t, n) {
    var r, i, s, o = {};
    for (s in t) "key" == s ? r = t[s] : "ref" == s ? i = t[s] : o[s] = t[s];
    if (arguments.length > 2 && (o.children = arguments.length > 3 ? Nl.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
        for (s in e.defaultProps) void 0 === o[s] && (o[s] = e.defaultProps[s]);
    return Kl(e, o, r, i, null)
}

function Kl(e, t, n, r, i) {
    var s = {
        type: e,
        props: t,
        key: n,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == i ? ++xl : i
    };
    return null == i && null != Ml.vnode && Ml.vnode(s), s
}

function Yl(e) {
    return e.children
}

function $l(e, t) {
    this.props = e, this.context = t
}

function zl(e, t) {
    if (null == t) return e.__ ? zl(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? zl(e) : null
}

function Ql(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e;
                break
            }
        return Ql(e)
    }
}

function Jl(e) {
    (!e.__d && (e.__d = !0) && Fl.push(e) && !Zl.__r++ || Bl !== Ml.debounceRendering) && ((Bl = Ml.debounceRendering) || Ul)(Zl)
}

function Zl() {
    for (var e; Zl.__r = Fl.length;) e = Fl.sort((function(e, t) {
        return e.__v.__b - t.__v.__b
    })), Fl = [], e.some((function(e) {
        var t, n, r, i, s, o;
        e.__d && (s = (i = (t = e).__v).__e, (o = t.__P) && (n = [], (r = ql({}, i)).__v = i.__v + 1, uh(o, i, r, t.__n, void 0 !== o.ownerSVGElement, null != i.__h ? [s] : null, n, null == s ? zl(i) : s, i.__h), ch(n, i), i.__e != s && Ql(i)))
    }))
}

function eh(e, t, n, r, i, s, o, a, u, c) {
    var l, h, d, f, _, p, m, v = r && r.__k || Hl,
        g = v.length;
    for (n.__k = [], l = 0; l < t.length; l++)
        if (null != (f = n.__k[l] = null == (f = t[l]) || "boolean" == typeof f ? null : "string" == typeof f || "number" == typeof f || "bigint" == typeof f ? Kl(null, f, null, null, f) : Array.isArray(f) ? Kl(Yl, {
                children: f
            }, null, null, null) : f.__b > 0 ? Kl(f.type, f.props, f.key, null, f.__v) : f)) {
            if (f.__ = n, f.__b = n.__b + 1, null === (d = v[l]) || d && f.key == d.key && f.type === d.type) v[l] = void 0;
            else
                for (h = 0; h < g; h++) {
                    if ((d = v[h]) && f.key == d.key && f.type === d.type) {
                        v[h] = void 0;
                        break
                    }
                    d = null
                }
            uh(e, f, d = d || Vl, i, s, o, a, u, c), _ = f.__e, (h = f.ref) && d.ref != h && (m || (m = []), d.ref && m.push(d.ref, null, f), m.push(h, f.__c || _, f)), null != _ ? (null == p && (p = _), "function" == typeof f.type && f.__k === d.__k ? f.__d = u = th(f, u, e) : u = rh(e, f, d, v, _, u), "function" == typeof n.type && (n.__d = u)) : u && d.__e == u && u.parentNode != e && (u = zl(d))
        }
    for (n.__e = p, l = g; l--;) null != v[l] && ("function" == typeof n.type && null != v[l].__e && v[l].__e == n.__d && (n.__d = zl(r, l + 1)), dh(v[l], v[l]));
    if (m)
        for (l = 0; l < m.length; l++) hh(m[l], m[++l], m[++l])
}

function th(e, t, n) {
    for (var r, i = e.__k, s = 0; i && s < i.length; s++)(r = i[s]) && (r.__ = e, t = "function" == typeof r.type ? th(r, t, n) : rh(n, r, r, i, r.__e, t));
    return t
}

function nh(e, t) {
    return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
        nh(e, t)
    })) : t.push(e)), t
}

function rh(e, t, n, r, i, s) {
    var o, a, u;
    if (void 0 !== t.__d) o = t.__d, t.__d = void 0;
    else if (null == n || i != s || null == i.parentNode) e: if (null == s || s.parentNode !== e) e.appendChild(i), o = null;
        else {
            for (a = s, u = 0;
                (a = a.nextSibling) && u < r.length; u += 2)
                if (a == i) break e;
            e.insertBefore(i, s), o = s
        }
    return void 0 !== o ? o : i.nextSibling
}

function ih(e, t, n) {
    "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || Xl.test(t) ? n : n + "px"
}

function sh(e, t, n, r, i) {
    var s;
    e: if ("style" === t)
        if ("string" == typeof n) e.style.cssText = n;
        else {
            if ("string" == typeof r && (e.style.cssText = r = ""), r)
                for (t in r) n && t in n || ih(e.style, t, "");
            if (n)
                for (t in n) r && n[t] === r[t] || ih(e.style, t, n[t])
        }
    else if ("o" === t[0] && "n" === t[1]) s = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = n, n ? r || e.addEventListener(t, s ? ah : oh, s) : e.removeEventListener(t, s ? ah : oh, s);
    else if ("dangerouslySetInnerHTML" !== t) {
        if (i) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
            e[t] = null == n ? "" : n;
            break e
        } catch (e) {}
        "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
    }
}

function oh(e) {
    this.l[e.type + !1](Ml.event ? Ml.event(e) : e)
}

function ah(e) {
    this.l[e.type + !0](Ml.event ? Ml.event(e) : e)
}

function uh(e, t, n, r, i, s, o, a, u) {
    var c, l, h, d, f, _, p, m, v, g, y, E = t.type;
    if (void 0 !== t.constructor) return null;
    null != n.__h && (u = n.__h, a = t.__e = n.__e, t.__h = null, s = [a]), (c = Ml.__b) && c(t);
    try {
        e: if ("function" == typeof E) {
            if (m = t.props, v = (c = E.contextType) && r[c.__c], g = c ? v ? v.props.value : c.__ : r, n.__c ? p = (l = t.__c = n.__c).__ = l.__E : ("prototype" in E && E.prototype.render ? t.__c = l = new E(m, g) : (t.__c = l = new $l(m, g), l.constructor = E, l.render = fh), v && v.sub(l), l.props = m, l.state || (l.state = {}), l.context = g, l.__n = r, h = l.__d = !0, l.__h = []), null == l.__s && (l.__s = l.state), null != E.getDerivedStateFromProps && (l.__s == l.state && (l.__s = ql({}, l.__s)), ql(l.__s, E.getDerivedStateFromProps(m, l.__s))), d = l.props, f = l.state, h) null == E.getDerivedStateFromProps && null != l.componentWillMount && l.componentWillMount(), null != l.componentDidMount && l.__h.push(l.componentDidMount);
            else {
                if (null == E.getDerivedStateFromProps && m !== d && null != l.componentWillReceiveProps && l.componentWillReceiveProps(m, g), !l.__e && null != l.shouldComponentUpdate && !1 === l.shouldComponentUpdate(m, l.__s, g) || t.__v === n.__v) {
                    l.props = m, l.state = l.__s, t.__v !== n.__v && (l.__d = !1), l.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e) {
                        e && (e.__ = t)
                    })), l.__h.length && o.push(l);
                    break e
                }
                null != l.componentWillUpdate && l.componentWillUpdate(m, l.__s, g), null != l.componentDidUpdate && l.__h.push((function() {
                    l.componentDidUpdate(d, f, _)
                }))
            }
            l.context = g, l.props = m, l.state = l.__s, (c = Ml.__r) && c(t), l.__d = !1, l.__v = t, l.__P = e, c = l.render(l.props, l.state, l.context), l.state = l.__s, null != l.getChildContext && (r = ql(ql({}, r), l.getChildContext())), h || null == l.getSnapshotBeforeUpdate || (_ = l.getSnapshotBeforeUpdate(d, f)), y = null != c && c.type === Yl && null == c.key ? c.props.children : c, eh(e, Array.isArray(y) ? y : [y], t, n, r, i, s, o, a, u), l.base = t.__e, t.__h = null, l.__h.length && o.push(l), p && (l.__E = l.__ = null), l.__e = !1
        } else null == s && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = lh(n.__e, t, n, r, i, s, o, u);
        (c = Ml.diffed) && c(t)
    }
    catch (e) {
        t.__v = null, (u || null != s) && (t.__e = a, t.__h = !!u, s[s.indexOf(a)] = null), Ml.__e(e, t, n)
    }
}

function ch(e, t) {
    Ml.__c && Ml.__c(t, e), e.some((function(t) {
        try {
            e = t.__h, t.__h = [], e.some((function(e) {
                e.call(t)
            }))
        } catch (e) {
            Ml.__e(e, t.__v)
        }
    }))
}

function lh(e, t, n, r, i, s, o, a) {
    var u, c, l, h = n.props,
        d = t.props,
        f = t.type,
        _ = 0;
    if ("svg" === f && (i = !0), null != s)
        for (; _ < s.length; _++)
            if ((u = s[_]) && "setAttribute" in u == !!f && (f ? u.localName === f : 3 === u.nodeType)) {
                e = u, s[_] = null;
                break
            }
    if (null == e) {
        if (null === f) return document.createTextNode(d);
        e = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, d.is && d), s = null, a = !1
    }
    if (null === f) h === d || a && e.data === d || (e.data = d);
    else {
        if (s = s && Nl.call(e.childNodes), c = (h = n.props || Vl).dangerouslySetInnerHTML, l = d.dangerouslySetInnerHTML, !a) {
            if (null != s)
                for (h = {}, _ = 0; _ < e.attributes.length; _++) h[e.attributes[_].name] = e.attributes[_].value;
            (l || c) && (l && (c && l.__html == c.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""))
        }
        if (function(e, t, n, r, i) {
                var s;
                for (s in n) "children" === s || "key" === s || s in t || sh(e, s, null, n[s], r);
                for (s in t) i && "function" != typeof t[s] || "children" === s || "key" === s || "value" === s || "checked" === s || n[s] === t[s] || sh(e, s, t[s], n[s], r)
            }(e, d, h, i, a), l) t.__k = [];
        else if (_ = t.props.children, eh(e, Array.isArray(_) ? _ : [_], t, n, r, i && "foreignObject" !== f, s, o, s ? s[0] : n.__k && zl(n, 0), a), null != s)
            for (_ = s.length; _--;) null != s[_] && Gl(s[_]);
        a || ("value" in d && void 0 !== (_ = d.value) && (_ !== e.value || "progress" === f && !_ || "option" === f && _ !== h.value) && sh(e, "value", _, h.value, !1), "checked" in d && void 0 !== (_ = d.checked) && _ !== e.checked && sh(e, "checked", _, h.checked, !1))
    }
    return e
}

function hh(e, t, n) {
    try {
        "function" == typeof e ? e(t) : e.current = t
    } catch (e) {
        Ml.__e(e, n)
    }
}

function dh(e, t, n) {
    var r, i;
    if (Ml.unmount && Ml.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || hh(r, null, t)), null != (r = e.__c)) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount()
        } catch (e) {
            Ml.__e(e, t)
        }
        r.base = r.__P = null
    }
    if (r = e.__k)
        for (i = 0; i < r.length; i++) r[i] && dh(r[i], t, "function" != typeof e.type);
    n || null == e.__e || Gl(e.__e), e.__e = e.__d = void 0
}

function fh(e, t, n) {
    return this.constructor(e, n)
}

function _h(e, t, n) {
    var r, i, s;
    Ml.__ && Ml.__(e, t), i = (r = "function" == typeof n) ? null : n && n.__k || t.__k, s = [], uh(t, e = (!r && n || t).__k = Wl(Yl, null, [e]), i || Vl, Vl, void 0 !== t.ownerSVGElement, !r && n ? [n] : i ? null : t.firstChild ? Nl.call(t.childNodes) : null, s, !r && n ? n : i ? i.__e : t.firstChild, r), ch(s, e)
}

function ph(e, t, n) {
    var r, i, s, o = ql({}, e.props);
    for (s in t) "key" == s ? r = t[s] : "ref" == s ? i = t[s] : o[s] = t[s];
    return arguments.length > 2 && (o.children = arguments.length > 3 ? Nl.call(arguments, 2) : n), Kl(e.type, o, r || e.key, i || e.ref, null)
}

function mh(e, t) {
    var n = {
        __c: t = "__cC" + jl++,
        __: e,
        Consumer: function(e, t) {
            return e.children(t)
        },
        Provider: function(e) {
            var n, r;
            return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function() {
                return r
            }, this.shouldComponentUpdate = function(e) {
                this.props.value !== e.value && n.some(Jl)
            }, this.sub = function(e) {
                n.push(e);
                var t = e.componentWillUnmount;
                e.componentWillUnmount = function() {
                    n.splice(n.indexOf(e), 1), t && t.call(e)
                }
            }), e.children
        }
    };
    return n.Provider.__ = n.Consumer.contextType = n
}
Nl = Hl.slice, Ml = {
    __e: function(e, t) {
        for (var n, r, i; t = t.__;)
            if ((n = t.__c) && !n.__) try {
                if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), i = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), i = n.__d), i) return n.__E = n
            } catch (t) {
                e = t
            }
        throw e
    }
}, xl = 0, $l.prototype.setState = function(e, t) {
    var n;
    n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = ql({}, this.state), "function" == typeof e && (e = e(ql({}, n), this.props)), e && ql(n, e), null != e && this.__v && (t && this.__h.push(t), Jl(this))
}, $l.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), Jl(this))
}, $l.prototype.render = Yl, Fl = [], Ul = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Zl.__r = 0, jl = 0;
var vh, gh, yh, Eh = 0,
    Sh = [],
    Th = Ml.__b,
    bh = Ml.__r,
    Ah = Ml.diffed,
    Ih = Ml.__c,
    wh = Ml.unmount;

function Rh(e, t) {
    Ml.__h && Ml.__h(gh, e, Eh || t), Eh = 0;
    var n = gh.__H || (gh.__H = {
        __: [],
        __h: []
    });
    return e >= n.__.length && n.__.push({}), n.__[e]
}

function Ph(e) {
    return Eh = 1, Dh(Hh, e)
}

function Dh(e, t, n) {
    var r = Rh(vh++, 2);
    return r.t = e, r.__c || (r.__ = [n ? n(t) : Hh(void 0, t), function(e) {
        var t = r.t(r.__[0], e);
        r.__[0] !== t && (r.__ = [t, r.__[1]], r.__c.setState({}))
    }], r.__c = gh), r.__
}

function kh(e, t) {
    var n = Rh(vh++, 3);
    !Ml.__s && Vh(n.__H, t) && (n.__ = e, n.__H = t, gh.__H.__h.push(n))
}

function Oh(e, t) {
    var n = Rh(vh++, 4);
    !Ml.__s && Vh(n.__H, t) && (n.__ = e, n.__H = t, gh.__h.push(n))
}

function Ch(e) {
    return Eh = 5, Lh((function() {
        return {
            current: e
        }
    }), [])
}

function Lh(e, t) {
    var n = Rh(vh++, 7);
    return Vh(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__
}

function Nh(e, t) {
    return Eh = 8, Lh((function() {
        return e
    }), t)
}

function Mh(e) {
    var t = gh.context[e.__c],
        n = Rh(vh++, 9);
    return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(gh)), t.props.value) : e.__
}

function xh(e) {
    var t = Rh(vh++, 10),
        n = Ph();
    return t.__ = e, gh.componentDidCatch || (gh.componentDidCatch = function(e) {
        t.__ && t.__(e), n[1](e)
    }), [n[0], function() {
        n[1](void 0)
    }]
}

function Fh() {
    for (var e; e = Sh.shift();)
        if (e.__P) try {
            e.__H.__h.forEach(Bh), e.__H.__h.forEach(jh), e.__H.__h = []
        } catch (hl) {
            e.__H.__h = [], Ml.__e(hl, e.__v)
        }
}
Ml.__b = function(e) {
    gh = null, Th && Th(e)
}, Ml.__r = function(e) {
    bh && bh(e), vh = 0;
    var t = (gh = e.__c).__H;
    t && (t.__h.forEach(Bh), t.__h.forEach(jh), t.__h = [])
}, Ml.diffed = function(e) {
    Ah && Ah(e);
    var t = e.__c;
    t && t.__H && t.__H.__h.length && (1 !== Sh.push(t) && yh === Ml.requestAnimationFrame || ((yh = Ml.requestAnimationFrame) || function(e) {
        var t, n = function() {
                clearTimeout(r), Uh && cancelAnimationFrame(t), setTimeout(e)
            },
            r = setTimeout(n, 100);
        Uh && (t = requestAnimationFrame(n))
    })(Fh)), gh = null
}, Ml.__c = function(e, t) {
    t.some((function(e) {
        try {
            e.__h.forEach(Bh), e.__h = e.__h.filter((function(e) {
                return !e.__ || jh(e)
            }))
        } catch (ul) {
            t.some((function(e) {
                e.__h && (e.__h = [])
            })), t = [], Ml.__e(ul, e.__v)
        }
    })), Ih && Ih(e, t)
}, Ml.unmount = function(e) {
    wh && wh(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach((function(e) {
        try {
            Bh(e)
        } catch (e) {
            t = e
        }
    })), t && Ml.__e(t, n.__v))
};
var Uh = "function" == typeof requestAnimationFrame;

function Bh(e) {
    var t = gh,
        n = e.__c;
    "function" == typeof n && (e.__c = void 0, n()), gh = t
}

function jh(e) {
    var t = gh;
    e.__c = e.__(), gh = t
}

function Vh(e, t) {
    return !e || e.length !== t.length || t.some((function(t, n) {
        return t !== e[n]
    }))
}

function Hh(e, t) {
    return "function" == typeof t ? t(e) : t
}

function Xh(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function qh(e, t) {
    for (var n in e)
        if ("__source" !== n && !(n in t)) return !0;
    for (var r in t)
        if ("__source" !== r && e[r] !== t[r]) return !0;
    return !1
}

function Gh(e) {
    this.props = e
}(Gh.prototype = new $l).isPureReactComponent = !0, Gh.prototype.shouldComponentUpdate = function(e, t) {
    return qh(this.props, e) || qh(this.state, t)
};
var Wh = Ml.__b;
Ml.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Wh && Wh(e)
};
var Kh = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function Yh(e) {
    function t(t, n) {
        var r = Xh({}, t);
        return delete r.ref, e(r, (n = t.ref || n) && ("object" != typeof n || "current" in n) ? n : null)
    }
    return t.$$typeof = Kh, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
}
var $h = Ml.__e;
Ml.__e = function(e, t, n) {
    if (e.then)
        for (var r, i = t; i = i.__;)
            if ((r = i.__c) && r.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
    $h(e, t, n)
};
var zh = Ml.unmount;

function Qh() {
    this.__u = 0, this.t = null, this.__b = null
}

function Jh(e) {
    var t = e.__.__c;
    return t && t.__e && t.__e(e)
}

function Zh() {
    this.u = null, this.o = null
}
Ml.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), zh && zh(e)
}, (Qh.prototype = new $l).__c = function(e, t) {
    var n = t.__c,
        r = this;
    null == r.t && (r.t = []), r.t.push(n);
    var i = Jh(r.__v),
        s = !1,
        o = function() {
            s || (s = !0, n.__R = null, i ? i(a) : a())
        };
    n.__R = o;
    var a = function() {
            if (!--r.__u) {
                if (r.state.__e) {
                    var e = r.state.__e;
                    r.__v.__k[0] = function e(t, n, r) {
                        return t && (t.__v = null, t.__k = t.__k && t.__k.map((function(t) {
                            return e(t, n, r)
                        })), t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t
                    }(e, e.__c.__P, e.__c.__O)
                }
                var t;
                for (r.setState({
                        __e: r.__b = null
                    }); t = r.t.pop();) t.forceUpdate()
            }
        },
        u = !0 === t.__h;
    r.__u++ || u || r.setState({
        __e: r.__b = r.__v.__k[0]
    }), e.then(o, o)
}, Qh.prototype.componentWillUnmount = function() {
    this.t = []
}, Qh.prototype.render = function(e, t) {
    if (this.__b) {
        if (this.__v.__k) {
            var n = document.createElement("div"),
                r = this.__v.__k[0].__c;
            this.__v.__k[0] = function e(t, n, r) {
                return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(e) {
                    "function" == typeof e.__c && e.__c()
                })), t.__c.__H = null), null != (t = Xh({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map((function(t) {
                    return e(t, n, r)
                }))), t
            }(this.__b, n, r.__O = r.__P)
        }
        this.__b = null
    }
    var i = t.__e && Wl(Yl, null, e.fallback);
    return i && (i.__h = null), [Wl(Yl, null, t.__e ? null : e.children), i]
};
var ed = function(e, t, n) {
    if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
        for (n = e.u; n;) {
            for (; n.length > 3;) n.pop()();
            if (n[1] < n[0]) break;
            e.u = n = n[2]
        }
};

function td(e) {
    return this.getChildContext = function() {
        return e.context
    }, e.children
}

function nd(e) {
    var t = this,
        n = e.i;
    t.componentWillUnmount = function() {
        _h(null, t.l), t.l = null, t.i = null
    }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
        nodeType: 1,
        parentNode: n,
        childNodes: [],
        appendChild: function(e) {
            this.childNodes.push(e), t.i.appendChild(e)
        },
        insertBefore: function(e, n) {
            this.childNodes.push(e), t.i.appendChild(e)
        },
        removeChild: function(e) {
            this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e)
        }
    }), _h(Wl(td, {
        context: t.context
    }, e.__v), t.l)) : t.l && t.componentWillUnmount()
}

function rd(e, t) {
    return Wl(nd, {
        __v: e,
        i: t
    })
}(Zh.prototype = new $l).__e = function(e) {
    var t = this,
        n = Jh(t.__v),
        r = t.o.get(e);
    return r[0]++,
        function(i) {
            var s = function() {
                t.props.revealOrder ? (r.push(i), ed(t, e, r)) : i()
            };
            n ? n(s) : s()
        }
}, Zh.prototype.render = function(e) {
    this.u = null, this.o = new Map;
    var t = nh(e.children);
    e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
    for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
    return e.children
}, Zh.prototype.componentDidUpdate = Zh.prototype.componentDidMount = function() {
    var e = this;
    this.o.forEach((function(t, n) {
        ed(e, n, t)
    }))
};
var id = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    sd = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    od = "undefined" != typeof document,
    ad = function(e) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(e)
    };
$l.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) {
    Object.defineProperty($l.prototype, e, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + e]
        },
        set: function(t) {
            Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: t
            })
        }
    })
}));
var ud = Ml.event;

function cd() {}

function ld() {
    return this.cancelBubble
}

function hd() {
    return this.defaultPrevented
}
Ml.event = function(e) {
    return ud && (e = ud(e)), e.persist = cd, e.isPropagationStopped = ld, e.isDefaultPrevented = hd, e.nativeEvent = e
};
var dd = {
        configurable: !0,
        get: function() {
            return this.class
        }
    },
    fd = Ml.vnode;
Ml.vnode = function(e) {
    var t = e.type,
        n = e.props,
        r = n;
    if ("string" == typeof t) {
        var i = -1 === t.indexOf("-");
        for (var s in r = {}, n) {
            var o = n[s];
            od && "children" === s && "noscript" === t || "value" === s && "defaultValue" in n && null == o || ("defaultValue" === s && "value" in n && null == n.value ? s = "value" : "download" === s && !0 === o ? o = "" : /ondoubleclick/i.test(s) ? s = "ondblclick" : /^onchange(textarea|input)/i.test(s + t) && !ad(n.type) ? s = "oninput" : /^onfocus$/i.test(s) ? s = "onfocusin" : /^onblur$/i.test(s) ? s = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s) ? s = s.toLowerCase() : i && sd.test(s) ? s = s.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === o && (o = void 0), r[s] = o)
        }
        "select" == t && r.multiple && Array.isArray(r.value) && (r.value = nh(n.children).forEach((function(e) {
            e.props.selected = -1 != r.value.indexOf(e.props.value)
        }))), "select" == t && null != r.defaultValue && (r.value = nh(n.children).forEach((function(e) {
            e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
        }))), e.props = r, n.class != n.className && (dd.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", dd))
    }
    e.$$typeof = id, fd && fd(e)
};
var _d = Ml.__r;
Ml.__r = function(e) {
    _d && _d(e), e.__c
};
const pd = "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent) ? kh : Oh;

function md(e) {
    const t = "function" == typeof e ? function(e) {
            let t;
            const n = new Set,
                r = (e, r) => {
                    const i = "function" == typeof e ? e(t) : e;
                    if (i !== t) {
                        const e = t;
                        t = r ? i : Object.assign({}, t, i), n.forEach(n => n(t, e))
                    }
                },
                i = () => t,
                s = {
                    setState: r,
                    getState: i,
                    subscribe: (e, r, s) => r || s ? ((e, r = i, s = Object.is) => {
                        let o = r(t);

                        function a() {
                            const n = r(t);
                            if (!s(o, n)) {
                                const t = o;
                                e(o = n, t)
                            }
                        }
                        return n.add(a), () => n.delete(a)
                    })(e, r, s) : (n.add(e), () => n.delete(e)),
                    destroy: () => n.clear()
                };
            return t = e(r, i, s), s
        }(e) : e,
        n = (e = t.getState, n = Object.is) => {
            const [, r] = Dh(e => e + 1, 0), i = t.getState(), s = Ch(i), o = Ch(e), a = Ch(n), u = Ch(!1), c = Ch();
            let l;
            void 0 === c.current && (c.current = e(i));
            let h = !1;
            (s.current !== i || o.current !== e || a.current !== n || u.current) && (l = e(i), h = !n(c.current, l)), pd(() => {
                h && (c.current = l), s.current = i, o.current = e, a.current = n, u.current = !1
            });
            const d = Ch(i);
            pd(() => {
                const e = () => {
                        try {
                            const e = t.getState(),
                                n = o.current(e);
                            a.current(c.current, n) || (s.current = e, c.current = n, r())
                        } catch (e) {
                            u.current = !0, r()
                        }
                    },
                    n = t.subscribe(e);
                return t.getState() !== d.current && e(), n
            }, []);
            const f = h ? l : c.current;
            return function(e, t) {
                Ml.useDebugValue && Ml.useDebugValue(e)
            }(f), f
        };
    return Object.assign(n, t), n[Symbol.iterator] = function() {
        const e = [n, t];
        return {
            next() {
                const t = e.length <= 0;
                return {
                    value: e.shift(),
                    done: t
                }
            }
        }
    }, n
}

function vd() {
    const e = mh(void 0);
    return {
        Provider: ({
            initialStore: t,
            createStore: n,
            children: r
        }) => {
            const i = Ch();
            return i.current || (t && (n || (n = () => t)), i.current = n()), Wl(e.Provider, {
                value: i.current
            }, r)
        },
        useStore: (t, n = Object.is) => {
            const r = Mh(e);
            if (!r) throw new Error("Seems like you have not used zustand provider as an ancestor.");
            return r(t, n)
        },
        useStoreApi: () => {
            const t = Mh(e);
            if (!t) throw new Error("Seems like you have not used zustand provider as an ancestor.");
            return Lh(() => ({
                getState: t.getState,
                setState: t.setState,
                subscribe: t.subscribe,
                destroy: t.destroy
            }), [t])
        }
    }
}
const gd = e => (t, n, r) => {
    const i = r.subscribe;
    return r.subscribe = (e, t, n) => {
        let s = e;
        if (t) {
            const i = (null == n ? void 0 : n.equalityFn) || Object.is;
            let o = e(r.getState());
            s = n => {
                const r = e(n);
                if (!i(o, r)) {
                    const e = o;
                    t(o = r, e)
                }
            }, (null == n ? void 0 : n.fireImmediately) && t(o, o)
        }
        return i(s)
    }, e(t, n, r)
};
var yd;
! function(e) {
    e[e.APPEAR = 0] = "APPEAR", e[e.APPEARING = 1] = "APPEARING", e[e.APPEARED = 2] = "APPEARED", e[e.ENTER = 3] = "ENTER", e[e.ENTERING = 4] = "ENTERING", e[e.ENTERED = 5] = "ENTERED", e[e.EXIT = 6] = "EXIT", e[e.EXITING = 7] = "EXITING", e[e.EXITED = 8] = "EXITED"
}(yd || (yd = {}));
var Ed, Sd = function() {},
    Td = setTimeout(Sd),
    bd = function(e) {
        var t = e.children,
            n = e.in,
            r = void 0 !== n && n,
            i = e.appear,
            s = void 0 !== i && i,
            o = e.enter,
            a = void 0 === o || o,
            u = e.exit,
            c = void 0 === u || u,
            l = e.duration,
            h = void 0 === l ? 500 : l,
            d = e.alwaysMounted,
            f = void 0 !== d && d,
            _ = e.onEnter,
            p = void 0 === _ ? Sd : _,
            m = e.onEntering,
            v = void 0 === m ? Sd : m,
            g = e.onEntered,
            y = void 0 === g ? Sd : g,
            E = e.onExit,
            S = void 0 === E ? Sd : E,
            T = e.onExiting,
            b = void 0 === T ? Sd : T,
            A = e.onExited,
            I = void 0 === A ? Sd : A,
            w = Ch(Td),
            R = !1,
            P = Ph((function() {
                return R = !0, r ? s ? yd.APPEAR : yd.APPEARED : yd.EXITED
            })),
            D = P[0],
            k = P[1];
        kh((function() {
            switch (D) {
                case yd.APPEAR:
                    p(), k(yd.APPEARING);
                    break;
                case yd.APPEARING:
                    v(), w.current = setTimeout((function() {
                        k(yd.APPEARED)
                    }), h);
                    break;
                case yd.APPEARED:
                    y();
                    break;
                case yd.ENTER:
                    p(), k(yd.ENTERING);
                    break;
                case yd.ENTERING:
                    v(), w.current = setTimeout((function() {
                        k(yd.ENTERED)
                    }), h);
                    break;
                case yd.ENTERED:
                    y();
                    break;
                case yd.EXIT:
                    S(), k(yd.EXITING);
                    break;
                case yd.EXITING:
                    b(), w.current = setTimeout((function() {
                        k(yd.EXITED)
                    }), h);
                    break;
                case yd.EXITED:
                    I()
            }
            return function() {
                clearTimeout(w.current)
            }
        }), [D]), Oh((function() {
            if (!R) switch (!0) {
                case !(!r || !a):
                    k(yd.ENTER);
                    break;
                case !(!r || a):
                    k(yd.ENTERED);
                    break;
                case !(r || !c):
                    k(yd.EXIT);
                    break;
                case !(r || c):
                    k(yd.EXITED)
            }
        }), [r]);
        var O = Lh((function() {
            return {
                appear: D === yd.APPEAR,
                appearActive: D === yd.APPEARING,
                appearDone: D === yd.APPEARED,
                enter: D === yd.ENTER,
                enterActive: D === yd.ENTERING,
                enterDone: D === yd.ENTERED,
                exit: D === yd.EXIT,
                exitActive: D === yd.EXITING,
                exitDone: D === yd.EXITED
            }
        }), [D]);
        return (f || D !== yd.EXITED) && t(O)
    };

function Ad() {
    return (Ad = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}! function(e) {
    e.APPEAR = "-appear", e.APPEAR_ACTIVE = "-appear-active", e.APPEAR_DONE = "-appear-done", e.ENTER = "-enter", e.ENTER_ACTIVE = "-enter-active", e.ENTER_DONE = "-enter-done", e.EXIT = "-exit", e.EXIT_ACTIVE = "-exit-active", e.EXIT_DONE = "-exit-done"
}(Ed || (Ed = {}));
var Id = ["children", "styles"],
    wd = function(e) {
        var t = e.children,
            n = e.styles,
            r = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    s = Object.keys(e);
                for (r = 0; r < s.length; r++) t.indexOf(n = s[r]) >= 0 || (i[n] = e[n]);
                return i
            }(e, Id);
        return Wl(bd, r, (function(e) {
            var r = t.props.style,
                i = Lh((function() {
                    return Ad({}, function(e, t) {
                        switch (!0) {
                            case e.appear:
                                return t.appear;
                            case e.appearActive:
                                return Ad({}, t.appear, t.appearActive);
                            case e.appearDone:
                                return t.appearDone;
                            case e.enter:
                                return t.enter;
                            case e.enterActive:
                                return Ad({}, t.enter, t.enterActive);
                            case e.enterDone:
                                return t.enterDone;
                            case e.exit:
                                return t.exit;
                            case e.exitActive:
                                return Ad({}, t.exit, t.exitActive);
                            case e.exitDone:
                                return t.exitDone;
                            default:
                                return {}
                        }
                    }(e, n), r)
                }), [r, n, e]);
            return ph(t, {
                style: i
            })
        }))
    },
    Rd = 0;

function Pd(e, t, n, r, i) {
    var s, o, a = {};
    for (o in t) "ref" == o ? s = t[o] : a[o] = t[o];
    var u = {
        type: e,
        props: a,
        key: n,
        ref: s,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --Rd,
        __source: r,
        __self: i
    };
    if ("function" == typeof e && (s = e.defaultProps))
        for (o in s) void 0 === a[o] && (a[o] = s[o]);
    return Ml.vnode && Ml.vnode(u), u
}
var Dd = dt((function(e, t) {
    /*! For license information please see hls-parser.min.js.LICENSE.txt */
    self,
    e.exports = function() {
        return e = {
                851: (e, t, n) => {
                    var r = n(771),
                        i = r.getOptions,
                        s = r.setOptions,
                        o = n(463),
                        a = n(367),
                        u = n(890);
                    e.exports = {
                        parse: o,
                        stringify: a,
                        types: u,
                        getOptions: i,
                        setOptions: s
                    }
                },
                463: (e, t, n) => {
                    function r(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = s(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var r = 0,
                                    i = function() {};
                                return {
                                    s: i,
                                    n: function() {
                                        return r >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[r++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: i
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, a = !0,
                            u = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                u = !0, o = e
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (u) throw o
                                }
                            }
                        }
                    }

                    function i(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    r = !0,
                                    i = !1,
                                    s = void 0;
                                try {
                                    for (var o, a = e[Symbol.iterator](); !(r = (o = a.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    i = !0, s = e
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (i) throw s
                                    }
                                }
                                return n
                            }
                        }(e, t) || s(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function s(e, t) {
                        if (e) {
                            if ("string" == typeof e) return o(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                        }
                    }

                    function o(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }
                    var a = n(771),
                        u = n(890),
                        c = u.Rendition,
                        l = u.Variant,
                        h = u.SessionData,
                        d = u.Key,
                        f = u.MediaInitializationSection,
                        _ = u.DateRange,
                        p = u.SpliceInfo,
                        m = u.MasterPlaylist,
                        v = u.MediaPlaylist,
                        g = u.Segment,
                        y = u.PartialSegment,
                        E = u.RenditionReport;

                    function S(e) {
                        return a.trim(e, '"')
                    }

                    function T(e) {
                        var t = a.splitAt(e, ",");
                        return {
                            duration: a.toNumber(t[0]),
                            title: decodeURIComponent(escape(t[1]))
                        }
                    }

                    function b(e) {
                        var t = a.splitAt(e, "@");
                        return {
                            length: a.toNumber(t[0]),
                            offset: t[1] ? a.toNumber(t[1]) : -1
                        }
                    }

                    function A(e, t) {
                        t.IV && e.compatibleVersion < 2 && (e.compatibleVersion = 2), (t.KEYFORMAT || t.KEYFORMATVERSIONS) && e.compatibleVersion < 5 && (e.compatibleVersion = 5)
                    }

                    function I(e) {
                        var t = a.splitByCommaWithPreservingQuotes(e),
                            n = {};
                        return t.forEach((function(e) {
                            var t, r, s = i(a.splitAt(e, "="), 2),
                                o = s[0],
                                u = s[1],
                                c = S(u);
                            switch (o) {
                                case "URI":
                                    n[o] = c;
                                    break;
                                case "START-DATE":
                                case "END-DATE":
                                    n[o] = new Date(c);
                                    break;
                                case "IV":
                                    n[o] = (t = c, 16 !== (r = a.hexToByteSequence(t)).length && a.INVALIDPLAYLIST("IV must be a 128-bit unsigned integer"), r);
                                    break;
                                case "BYTERANGE":
                                    n[o] = b(c);
                                    break;
                                case "RESOLUTION":
                                    n[o] = function(e) {
                                        var t = a.splitAt(e, "x");
                                        return {
                                            width: a.toNumber(t[0]),
                                            height: a.toNumber(t[1])
                                        }
                                    }(c);
                                    break;
                                case "END-ON-NEXT":
                                case "DEFAULT":
                                case "AUTOSELECT":
                                case "FORCED":
                                case "PRECISE":
                                case "CAN-BLOCK-RELOAD":
                                case "INDEPENDENT":
                                case "GAP":
                                    n[o] = "YES" === c;
                                    break;
                                case "DURATION":
                                case "PLANNED-DURATION":
                                case "BANDWIDTH":
                                case "AVERAGE-BANDWIDTH":
                                case "FRAME-RATE":
                                case "TIME-OFFSET":
                                case "CAN-SKIP-UNTIL":
                                case "HOLD-BACK":
                                case "PART-HOLD-BACK":
                                case "PART-TARGET":
                                case "BYTERANGE-START":
                                case "BYTERANGE-LENGTH":
                                case "LAST-MSN":
                                case "LAST-PART":
                                case "SKIPPED-SEGMENTS":
                                    n[o] = a.toNumber(c);
                                    break;
                                default:
                                    o.startsWith("SCTE35-") ? n[o] = a.hexToByteSequence(c) : o.startsWith("X-") ? n[o] = function(e) {
                                        return e.startsWith('"') ? S(e) : e.startsWith("0x") || e.startsWith("0X") ? a.hexToByteSequence(e) : a.toNumber(e)
                                    }(u) : n[o] = c
                            }
                        })), n
                    }

                    function w() {
                        a.INVALIDPLAYLIST("The file contains both media and master playlist tags.")
                    }

                    function R(e, t, n) {
                        var i, s = (i = t.attributes, new c({
                                type: i.TYPE,
                                uri: i.URI,
                                groupId: i["GROUP-ID"],
                                language: i.LANGUAGE,
                                assocLanguage: i["ASSOC-LANGUAGE"],
                                name: i.NAME,
                                isDefault: i.DEFAULT,
                                autoselect: i.AUTOSELECT,
                                forced: i.FORCED,
                                instreamId: i["INSTREAM-ID"],
                                characteristics: i.CHARACTERISTICS,
                                channels: i.CHANNELS
                            })),
                            o = e[a.camelify(n)],
                            u = function(e, t) {
                                var n, i = !1,
                                    s = r(e);
                                try {
                                    for (s.s(); !(n = s.n()).done;) {
                                        var o = n.value;
                                        if (o.name === t.name) return "All EXT-X-MEDIA tags in the same Group MUST have different NAME attributes.";
                                        o.isDefault && (i = !0)
                                    }
                                } catch (e) {
                                    s.e(e)
                                } finally {
                                    s.f()
                                }
                                return i && t.isDefault ? "EXT-X-MEDIA A Group MUST NOT have more than one member with a DEFAULT attribute of YES." : ""
                            }(o, s);
                        u && a.INVALIDPLAYLIST(u), o.push(s), s.isDefault && (e.currentRenditions[a.camelify(n)] = o.length - 1)
                    }

                    function P(e, t, n, i, s) {
                        var o, u = new l({
                                uri: n,
                                bandwidth: t.BANDWIDTH,
                                averageBandwidth: t["AVERAGE-BANDWIDTH"],
                                codecs: t.CODECS,
                                resolution: t.RESOLUTION,
                                frameRate: t["FRAME-RATE"],
                                hdcpLevel: t["HDCP-LEVEL"]
                            }),
                            c = r(e);
                        try {
                            for (c.s(); !(o = c.n()).done;) {
                                var h = o.value;
                                if ("EXT-X-MEDIA" === h.name) {
                                    var d = h.attributes,
                                        f = d.TYPE;
                                    if (f && d["GROUP-ID"] || a.INVALIDPLAYLIST("EXT-X-MEDIA TYPE attribute is REQUIRED."), t[f] === d["GROUP-ID"] && (R(u, h, f), "CLOSED-CAPTIONS" === f)) {
                                        var _, p = r(u.closedCaptions);
                                        try {
                                            for (p.s(); !(_ = p.n()).done;) {
                                                var m = _.value.instreamId;
                                                if (m && m.startsWith("SERVICE") && s.compatibleVersion < 7) {
                                                    s.compatibleVersion = 7;
                                                    break
                                                }
                                            }
                                        } catch (e) {
                                            p.e(e)
                                        } finally {
                                            p.f()
                                        }
                                    }
                                }
                            }
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                        return function(e, t, n) {
                            ["AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((function(r) {
                                "CLOSED-CAPTIONS" === r && "NONE" === e[r] ? (n.isClosedCaptionsNone = !0, t.closedCaptions = []) : e[r] && !t[a.camelify(r)].find((function(t) {
                                    return t.groupId === e[r]
                                })) && a.INVALIDPLAYLIST("".concat(r, " attribute MUST match the value of the GROUP-ID attribute of an EXT-X-MEDIA tag whose TYPE attribute is ").concat(r, "."))
                            }))
                        }(t, u, s), u.isIFrameOnly = i, u
                    }

                    function D(e, t) {
                        if (e.method !== t.method) return !1;
                        if (e.uri !== t.uri) return !1;
                        if (e.iv) {
                            if (!t.iv) return !1;
                            if (e.iv.length !== t.iv.length) return !1;
                            for (var n = 0; n < e.iv.length; n++)
                                if (e.iv[n] !== t.iv[n]) return !1
                        } else if (t.iv) return !1;
                        return e.format === t.format && e.formatVersion === t.formatVersion
                    }

                    function k(e, t, n, r, i, s, o) {
                        for (var u = new g({
                                uri: t,
                                mediaSequenceNumber: i,
                                discontinuitySequence: s
                            }), c = !1, l = !1, h = function(t) {
                                var n = e[t],
                                    r = n.name,
                                    i = n.value,
                                    s = n.attributes;
                                if ("EXTINF" === r) !Number.isInteger(i.duration) && o.compatibleVersion < 3 && (o.compatibleVersion = 3), Math.round(i.duration) > o.targetDuration && a.INVALIDPLAYLIST("EXTINF duration, when rounded to the nearest integer, MUST be less than or equal to the target duration"), u.duration = i.duration, u.title = i.title;
                                else if ("EXT-X-BYTERANGE" === r) o.compatibleVersion < 4 && (o.compatibleVersion = 4), u.byterange = i;
                                else if ("EXT-X-DISCONTINUITY" === r) u.parts.length > 0 && a.INVALIDPLAYLIST("EXT-X-DISCONTINUITY must appear before the first EXT-X-PART tag of the Parent Segment."), u.discontinuity = !0;
                                else if ("EXT-X-KEY" === r) u.parts.length > 0 && a.INVALIDPLAYLIST("EXT-X-KEY must appear before the first EXT-X-PART tag of the Parent Segment."), A(o, s), u.key = new d({
                                    method: s.METHOD,
                                    uri: s.URI,
                                    iv: s.IV,
                                    format: s.KEYFORMAT,
                                    formatVersion: s.KEYFORMATVERSIONS
                                });
                                else if ("EXT-X-MAP" === r) u.parts.length > 0 && a.INVALIDPLAYLIST("EXT-X-MAP must appear before the first EXT-X-PART tag of the Parent Segment."), o.compatibleVersion < 5 && (o.compatibleVersion = 5), o.hasMap = !0, u.map = new f({
                                    uri: s.URI,
                                    byterange: s.BYTERANGE
                                });
                                else if ("EXT-X-PROGRAM-DATE-TIME" === r) u.programDateTime = i;
                                else if ("EXT-X-DATERANGE" === r) {
                                    var h = {};
                                    Object.keys(s).forEach((function(e) {
                                        (e.startsWith("SCTE35-") || e.startsWith("X-")) && (h[e] = s[e])
                                    })), u.dateRange = new _({
                                        id: s.ID,
                                        classId: s.CLASS,
                                        start: s["START-DATE"],
                                        end: s["END-DATE"],
                                        duration: s.DURATION,
                                        plannedDuration: s["PLANNED-DURATION"],
                                        endOnNext: s["END-ON-NEXT"],
                                        attributes: h
                                    })
                                } else if ("EXT-X-CUE-OUT" === r) u.markers.push(new p({
                                    type: "OUT",
                                    duration: i
                                }));
                                else if ("EXT-X-CUE-IN" === r) u.markers.push(new p({
                                    type: "IN"
                                }));
                                else if ("EXT-X-CUE-OUT-CONT" === r || "EXT-X-CUE" === r || "EXT-OATCLS-SCTE35" === r || "EXT-X-ASSET" === r || "EXT-X-SCTE35" === r) u.markers.push(new p({
                                    type: "RAW",
                                    tagName: r,
                                    value: i
                                }));
                                else if ("EXT-X-PRELOAD-HINT" !== r || s.TYPE)
                                    if ("EXT-X-PRELOAD-HINT" === r && "PART" === s.TYPE && l) a.INVALIDPLAYLIST("Servers should not add more than one EXT-X-PRELOAD-HINT tag with the same TYPE attribute to a Playlist.");
                                    else if ("EXT-X-PART" !== r && "EXT-X-PRELOAD-HINT" !== r || s.URI) {
                                    if ("EXT-X-PRELOAD-HINT" === r && "MAP" === s.TYPE) c && a.INVALIDPLAYLIST("Servers should not add more than one EXT-X-PRELOAD-HINT tag with the same TYPE attribute to a Playlist."), c = !0, o.hasMap = !0, u.map = new f({
                                        hint: !0,
                                        uri: s.URI,
                                        byterange: {
                                            length: s["BYTERANGE-LENGTH"],
                                            offset: s["BYTERANGE-START"] || 0
                                        }
                                    });
                                    else if ("EXT-X-PART" === r || "EXT-X-PRELOAD-HINT" === r && "PART" === s.TYPE) {
                                        "EXT-X-PART" !== r || s.DURATION || a.INVALIDPLAYLIST("EXT-X-PART: DURATION attribute is mandatory"), "EXT-X-PRELOAD-HINT" === r && (l = !0);
                                        var m = new y({
                                            hint: "EXT-X-PRELOAD-HINT" === r,
                                            uri: s.URI,
                                            byterange: "EXT-X-PART" === r ? s.BYTERANGE : {
                                                length: s["BYTERANGE-LENGTH"],
                                                offset: s["BYTERANGE-START"] || 0
                                            },
                                            duration: s.DURATION,
                                            independent: s.INDEPENDENT,
                                            gap: s.GAP
                                        });
                                        u.parts.push(m)
                                    }
                                } else a.INVALIDPLAYLIST("EXT-X-PART / EXT-X-PRELOAD-HINT: URI attribute is mandatory");
                                else a.INVALIDPLAYLIST("EXT-X-PRELOAD-HINT: TYPE attribute is mandatory")
                            }, m = n; m <= r; m++) h(m);
                        return u
                    }

                    function O(e, t, n, r, i) {
                        var s = t.discontinuity,
                            o = t.key,
                            u = t.map,
                            c = t.byterange,
                            l = t.uri;
                        if (s && (t.discontinuitySequence = n + 1), o || (t.key = r), u || (t.map = i), c && -1 === c.offset) {
                            var h = e.segments;
                            if (h.length > 0) {
                                var d = h[h.length - 1];
                                d.byterange && d.uri === l ? c.offset = d.byterange.offset + d.byterange.length : a.INVALIDPLAYLIST("If offset of EXT-X-BYTERANGE is not present, a previous Media Segment MUST be a sub-range of the same media resource")
                            } else a.INVALIDPLAYLIST("If offset of EXT-X-BYTERANGE is not present, a previous Media Segment MUST appear in the Playlist file")
                        }
                        return e.segments.push(t), [t.discontinuitySequence, t.key, t.map]
                    }

                    function C(e, t) {
                        var n = i(function(e) {
                                var t = e.indexOf(":");
                                return -1 === t ? [e.slice(1).trim(), null] : [e.slice(1, t).trim(), e.slice(t + 1).trim()]
                            }(e), 2),
                            r = n[0],
                            s = n[1],
                            o = function(e) {
                                switch (e) {
                                    case "EXTM3U":
                                    case "EXT-X-VERSION":
                                        return "Basic";
                                    case "EXTINF":
                                    case "EXT-X-BYTERANGE":
                                    case "EXT-X-DISCONTINUITY":
                                    case "EXT-X-KEY":
                                    case "EXT-X-MAP":
                                    case "EXT-X-PROGRAM-DATE-TIME":
                                    case "EXT-X-DATERANGE":
                                    case "EXT-X-CUE-OUT":
                                    case "EXT-X-CUE-IN":
                                    case "EXT-X-CUE-OUT-CONT":
                                    case "EXT-X-CUE":
                                    case "EXT-OATCLS-SCTE35":
                                    case "EXT-X-ASSET":
                                    case "EXT-X-SCTE35":
                                    case "EXT-X-PART":
                                    case "EXT-X-PRELOAD-HINT":
                                        return "Segment";
                                    case "EXT-X-TARGETDURATION":
                                    case "EXT-X-MEDIA-SEQUENCE":
                                    case "EXT-X-DISCONTINUITY-SEQUENCE":
                                    case "EXT-X-ENDLIST":
                                    case "EXT-X-PLAYLIST-TYPE":
                                    case "EXT-X-I-FRAMES-ONLY":
                                    case "EXT-X-SERVER-CONTROL":
                                    case "EXT-X-PART-INF":
                                    case "EXT-X-RENDITION-REPORT":
                                    case "EXT-X-SKIP":
                                        return "MediaPlaylist";
                                    case "EXT-X-MEDIA":
                                    case "EXT-X-STREAM-INF":
                                    case "EXT-X-I-FRAME-STREAM-INF":
                                    case "EXT-X-SESSION-DATA":
                                    case "EXT-X-SESSION-KEY":
                                        return "MasterPlaylist";
                                    case "EXT-X-INDEPENDENT-SEGMENTS":
                                    case "EXT-X-START":
                                        return "MediaorMasterPlaylist";
                                    default:
                                        return "Unknown"
                                }
                            }(r);
                        if (function(e, t) {
                                if ("Segment" === e || "MediaPlaylist" === e) return void 0 === t.isMasterPlaylist ? void(t.isMasterPlaylist = !1) : void(t.isMasterPlaylist && w());
                                if ("MasterPlaylist" === e) {
                                    if (void 0 === t.isMasterPlaylist) return void(t.isMasterPlaylist = !0);
                                    !1 === t.isMasterPlaylist && w()
                                }
                            }(o, t), "Unknown" === o) return null;
                        "MediaPlaylist" === o && "EXT-X-RENDITION-REPORT" !== r && (t.hash[r] && a.INVALIDPLAYLIST("There MUST NOT be more than one Media Playlist tag of each type in any Media Playlist"), t.hash[r] = !0);
                        var u = i(function(e, t) {
                            switch (e) {
                                case "EXTM3U":
                                case "EXT-X-DISCONTINUITY":
                                case "EXT-X-ENDLIST":
                                case "EXT-X-I-FRAMES-ONLY":
                                case "EXT-X-INDEPENDENT-SEGMENTS":
                                case "EXT-X-CUE-IN":
                                    return [null, null];
                                case "EXT-X-VERSION":
                                case "EXT-X-TARGETDURATION":
                                case "EXT-X-MEDIA-SEQUENCE":
                                case "EXT-X-DISCONTINUITY-SEQUENCE":
                                case "EXT-X-CUE-OUT":
                                    return [a.toNumber(t), null];
                                case "EXT-X-KEY":
                                case "EXT-X-MAP":
                                case "EXT-X-DATERANGE":
                                case "EXT-X-MEDIA":
                                case "EXT-X-STREAM-INF":
                                case "EXT-X-I-FRAME-STREAM-INF":
                                case "EXT-X-SESSION-DATA":
                                case "EXT-X-SESSION-KEY":
                                case "EXT-X-START":
                                case "EXT-X-SERVER-CONTROL":
                                case "EXT-X-PART-INF":
                                case "EXT-X-PART":
                                case "EXT-X-PRELOAD-HINT":
                                case "EXT-X-RENDITION-REPORT":
                                case "EXT-X-SKIP":
                                    return [null, I(t)];
                                case "EXTINF":
                                    return [T(t), null];
                                case "EXT-X-BYTERANGE":
                                    return [b(t), null];
                                case "EXT-X-PROGRAM-DATE-TIME":
                                    return [new Date(t), null];
                                case "EXT-X-PLAYLIST-TYPE":
                                default:
                                    return [t, null]
                            }
                        }(r, s), 2);
                        return {
                            name: r,
                            category: o,
                            value: u[0],
                            attributes: u[1]
                        }
                    }
                    e.exports = function(e) {
                        var t = {
                                version: void 0,
                                isMasterPlaylist: void 0,
                                hasMap: !1,
                                targetDuration: 0,
                                compatibleVersion: 1,
                                isClosedCaptionsNone: !1,
                                hash: {}
                            },
                            n = function(e, t) {
                                var n;
                                return t.isMasterPlaylist ? n = function(e, t) {
                                    var n, s = new m,
                                        o = r(e.entries());
                                    try {
                                        for (o.s(); !(n = o.n()).done;) {
                                            var u = i(n.value, 2),
                                                c = u[0],
                                                l = u[1],
                                                f = l.name,
                                                _ = l.value,
                                                p = l.attributes;
                                            if ("EXT-X-VERSION" === f) s.version = _;
                                            else if ("EXT-X-STREAM-INF" === f) {
                                                var v = e[c + 1];
                                                ("string" != typeof v || v.startsWith("#EXT")) && a.INVALIDPLAYLIST("EXT-X-STREAM-INF must be followed by a URI line");
                                                var g = P(e, p, v, !1, t);
                                                g && s.variants.push(g)
                                            } else if ("EXT-X-I-FRAME-STREAM-INF" === f) {
                                                var y = P(e, p, p.URI, !0, t);
                                                y && s.variants.push(y)
                                            } else "EXT-X-SESSION-DATA" === f ? function() {
                                                var e = new h({
                                                    id: p["DATA-ID"],
                                                    value: p.VALUE,
                                                    uri: p.URI,
                                                    language: p.LANGUAGE
                                                });
                                                s.sessionDataList.find((function(t) {
                                                    return t.id === e.id && t.language === e.language
                                                })) && a.INVALIDPLAYLIST("A Playlist MUST NOT contain more than one EXT-X-SESSION-DATA tag with the same DATA-ID attribute and the same LANGUAGE attribute."), s.sessionDataList.push(e)
                                            }() : "EXT-X-SESSION-KEY" === f ? function() {
                                                "NONE" === p.METHOD && a.INVALIDPLAYLIST("EXT-X-SESSION-KEY: The value of the METHOD attribute MUST NOT be NONE");
                                                var e = new d({
                                                    method: p.METHOD,
                                                    uri: p.URI,
                                                    iv: p.IV,
                                                    format: p.KEYFORMAT,
                                                    formatVersion: p.KEYFORMATVERSIONS
                                                });
                                                s.sessionKeyList.find((function(t) {
                                                    return D(t, e)
                                                })) && a.INVALIDPLAYLIST("A Master Playlist MUST NOT contain more than one EXT-X-SESSION-KEY tag with the same METHOD, URI, IV, KEYFORMAT, and KEYFORMATVERSIONS attribute values."), A(t, p), s.sessionKeyList.push(e)
                                            }() : "EXT-X-INDEPENDENT-SEGMENTS" === f ? (s.independentSegments && a.INVALIDPLAYLIST("EXT-X-INDEPENDENT-SEGMENTS tag MUST NOT appear more than once in a Playlist"), s.independentSegments = !0) : "EXT-X-START" === f && (s.start && a.INVALIDPLAYLIST("EXT-X-START tag MUST NOT appear more than once in a Playlist"), "number" != typeof p["TIME-OFFSET"] && a.INVALIDPLAYLIST("EXT-X-START: TIME-OFFSET attribute is REQUIRED"), s.start = {
                                                offset: p["TIME-OFFSET"],
                                                precise: p.PRECISE || !1
                                            })
                                        }
                                    } catch (e) {
                                        o.e(e)
                                    } finally {
                                        o.f()
                                    }
                                    if (t.isClosedCaptionsNone) {
                                        var E, S = r(s.variants);
                                        try {
                                            for (S.s(); !(E = S.n()).done;) E.value.closedCaptions.length > 0 && a.INVALIDPLAYLIST("If there is a variant with CLOSED-CAPTIONS attribute of NONE, all EXT-X-STREAM-INF tags MUST have this attribute with a value of NONE")
                                        } catch (e) {
                                            S.e(e)
                                        } finally {
                                            S.f()
                                        }
                                    }
                                    return s
                                }(e, t) : !(n = function(e, t) {
                                    var n, s = new v,
                                        o = -1,
                                        u = 0,
                                        c = !1,
                                        l = 0,
                                        h = null,
                                        d = null,
                                        f = !1,
                                        _ = r(e.entries());
                                    try {
                                        for (_.s(); !(n = _.n()).done;) {
                                            var p = i(n.value, 2),
                                                m = p[0],
                                                g = p[1],
                                                y = g.name,
                                                S = g.value,
                                                T = g.attributes;
                                            if ("Segment" !== g.category) {
                                                if ("EXT-X-VERSION" === y) void 0 === s.version ? s.version = S : a.INVALIDPLAYLIST("A Playlist file MUST NOT contain more than one EXT-X-VERSION tag.");
                                                else if ("EXT-X-TARGETDURATION" === y) s.targetDuration = t.targetDuration = S;
                                                else if ("EXT-X-MEDIA-SEQUENCE" === y) s.segments.length > 0 && a.INVALIDPLAYLIST("The EXT-X-MEDIA-SEQUENCE tag MUST appear before the first Media Segment in the Playlist."), s.mediaSequenceBase = u = S;
                                                else if ("EXT-X-DISCONTINUITY-SEQUENCE" === y) s.segments.length > 0 && a.INVALIDPLAYLIST("The EXT-X-DISCONTINUITY-SEQUENCE tag MUST appear before the first Media Segment in the Playlist."), c && a.INVALIDPLAYLIST("The EXT-X-DISCONTINUITY-SEQUENCE tag MUST appear before any EXT-X-DISCONTINUITY tag."), s.discontinuitySequenceBase = l = S;
                                                else if ("EXT-X-ENDLIST" === y) s.endlist = !0;
                                                else if ("EXT-X-PLAYLIST-TYPE" === y) s.playlistType = S;
                                                else if ("EXT-X-I-FRAMES-ONLY" === y) t.compatibleVersion < 4 && (t.compatibleVersion = 4), s.isIFrame = !0;
                                                else if ("EXT-X-INDEPENDENT-SEGMENTS" === y) s.independentSegments && a.INVALIDPLAYLIST("EXT-X-INDEPENDENT-SEGMENTS tag MUST NOT appear more than once in a Playlist"), s.independentSegments = !0;
                                                else if ("EXT-X-START" === y) s.start && a.INVALIDPLAYLIST("EXT-X-START tag MUST NOT appear more than once in a Playlist"), "number" != typeof T["TIME-OFFSET"] && a.INVALIDPLAYLIST("EXT-X-START: TIME-OFFSET attribute is REQUIRED"), s.start = {
                                                    offset: T["TIME-OFFSET"],
                                                    precise: T.PRECISE || !1
                                                };
                                                else if ("EXT-X-SERVER-CONTROL" === y) T["CAN-BLOCK-RELOAD"] || a.INVALIDPLAYLIST("EXT-X-SERVER-CONTROL: CAN-BLOCK-RELOAD=YES is mandatory for Low-Latency HLS"), s.lowLatencyCompatibility = {
                                                    canBlockReload: T["CAN-BLOCK-RELOAD"],
                                                    canSkipUntil: T["CAN-SKIP-UNTIL"],
                                                    holdBack: T["HOLD-BACK"],
                                                    partHoldBack: T["PART-HOLD-BACK"]
                                                };
                                                else if ("EXT-X-PART-INF" === y) T["PART-TARGET"] || a.INVALIDPLAYLIST("EXT-X-PART-INF: PART-TARGET attribute is mandatory"), s.partTargetDuration = T["PART-TARGET"];
                                                else if ("EXT-X-RENDITION-REPORT" === y) T.URI || a.INVALIDPLAYLIST("EXT-X-RENDITION-REPORT: URI attribute is mandatory"), 0 === T.URI.search(/^[a-z]+:/) && a.INVALIDPLAYLIST("EXT-X-RENDITION-REPORT: URI must be relative to the playlist uri"), s.renditionReports.push(new E({
                                                    uri: T.URI,
                                                    lastMSN: T["LAST-MSN"],
                                                    lastPart: T["LAST-PART"]
                                                }));
                                                else if ("EXT-X-SKIP" === y) T["SKIPPED-SEGMENTS"] || a.INVALIDPLAYLIST("EXT-X-SKIP: SKIPPED-SEGMENTS attribute is mandatory"), t.compatibleVersion < 9 && (t.compatibleVersion = 9), s.skip = T["SKIPPED-SEGMENTS"], u += s.skip;
                                                else if ("string" == typeof g) {
                                                    -1 === o && a.INVALIDPLAYLIST("A URI line is not preceded by any segment tags"), s.targetDuration || a.INVALIDPLAYLIST("The EXT-X-TARGETDURATION tag is REQUIRED");
                                                    var b = k(e, g, o, m - 1, u++, l, t);
                                                    if (b) {
                                                        var A = i(O(s, b, l, h, d), 3);
                                                        l = A[0], h = A[1], d = A[2], !f && b.parts.length > 0 && (f = !0)
                                                    }
                                                    o = -1
                                                }
                                            } else -1 === o && (o = m), "EXT-X-DISCONTINUITY" === y && (c = !0)
                                        }
                                    } catch (e) {
                                        _.e(e)
                                    } finally {
                                        _.f()
                                    }
                                    if (-1 !== o) {
                                        var I = k(e, "", o, e.length - 1, u++, l, t);
                                        if (I) {
                                            var w = I.parts;
                                            w.length > 0 && !s.endlist && !w[w.length - 1].hint && a.INVALIDPLAYLIST("If the Playlist contains EXT-X-PART tags and does not contain an EXT-X-ENDLIST tag, the Playlist must contain an EXT-X-PRELOAD-HINT tag with a TYPE=PART attribute"), O(s, I, h, d), !f && I.parts.length > 0 && (f = !0)
                                        }
                                    }
                                    return function(e) {
                                        for (var t = new Map, n = new Map, i = !1, s = !1, o = e.length - 1; o >= 0; o--) {
                                            var u = e[o],
                                                c = u.programDateTime,
                                                l = u.dateRange;
                                            if (c && (s = !0), l && l.start) {
                                                i = !0, l.endOnNext && (l.end || l.duration) && a.INVALIDPLAYLIST("An EXT-X-DATERANGE tag with an END-ON-NEXT=YES attribute MUST NOT contain DURATION or END-DATE attributes.");
                                                var h = l.start.getTime(),
                                                    d = l.duration || 0;
                                                l.end && l.duration && h + 1e3 * d !== l.end.getTime() && a.INVALIDPLAYLIST("END-DATE MUST be equal to the value of the START-DATE attribute plus the value of the DURATION"), l.endOnNext && (l.end = t.get(l.classId)), t.set(l.classId, l.start);
                                                var f = l.end ? l.end.getTime() : l.start.getTime() + 1e3 * (l.duration || 0),
                                                    _ = n.get(l.classId);
                                                if (_) {
                                                    var p, m = r(_);
                                                    try {
                                                        for (m.s(); !(p = m.n()).done;) {
                                                            var v = p.value;
                                                            (v.start <= h && v.end > h || v.start >= h && v.start < f) && a.INVALIDPLAYLIST("DATERANGE tags with the same CLASS should not overlap")
                                                        }
                                                    } catch (e) {
                                                        m.e(e)
                                                    } finally {
                                                        m.f()
                                                    }
                                                    _.push({
                                                        start: h,
                                                        end: f
                                                    })
                                                } else n.set(l.classId, [{
                                                    start: h,
                                                    end: f
                                                }])
                                            }
                                        }
                                        i && !s && a.INVALIDPLAYLIST("If a Playlist contains an EXT-X-DATERANGE tag, it MUST also contain at least one EXT-X-PROGRAM-DATE-TIME tag.")
                                    }(s.segments), s.lowLatencyCompatibility && function(e, t) {
                                        var n = e.lowLatencyCompatibility,
                                            s = e.targetDuration,
                                            o = e.partTargetDuration,
                                            u = e.segments,
                                            c = e.renditionReports,
                                            l = n.canSkipUntil,
                                            h = n.holdBack,
                                            d = n.partHoldBack;
                                        if (l < 6 * s && a.INVALIDPLAYLIST("The Skip Boundary must be at least six times the EXT-X-TARGETDURATION."), h < 3 * s && a.INVALIDPLAYLIST("HOLD-BACK must be at least three times the EXT-X-TARGETDURATION."), t) {
                                            void 0 === o && a.INVALIDPLAYLIST("EXT-X-PART-INF is required if a Playlist contains one or more EXT-X-PART tags"), void 0 === d && a.INVALIDPLAYLIST("EXT-X-PART: PART-HOLD-BACK attribute is mandatory"), d < o && a.INVALIDPLAYLIST("PART-HOLD-BACK must be at least PART-TARGET");
                                            var f, _ = r(u.entries());
                                            try {
                                                for (_.s(); !(f = _.n()).done;) {
                                                    var p = i(f.value, 2),
                                                        m = p[0],
                                                        v = p[1].parts;
                                                    v.length > 0 && m < u.length - 3 && a.INVALIDPLAYLIST("Remove EXT-X-PART tags from the Playlist after they are greater than three target durations from the end of the Playlist.");
                                                    var g, y = r(v.entries());
                                                    try {
                                                        for (y.s(); !(g = y.n()).done;) {
                                                            var E = i(g.value, 2),
                                                                S = E[0],
                                                                T = E[1].duration;
                                                            void 0 !== T && (T > o && a.INVALIDPLAYLIST("PART-TARGET is the maximum duration of any Partial Segment"), S < v.length - 1 && T < .85 * o && a.INVALIDPLAYLIST("All Partial Segments except the last part of a segment must have a duration of at least 85% of PART-TARGET"))
                                                        }
                                                    } catch (e) {
                                                        y.e(e)
                                                    } finally {
                                                        y.f()
                                                    }
                                                }
                                            } catch (e) {
                                                _.e(e)
                                            } finally {
                                                _.f()
                                            }
                                        }
                                        var b, A = r(c);
                                        try {
                                            for (A.s(); !(b = A.n()).done;) {
                                                var I = b.value,
                                                    w = u[u.length - 1];
                                                I.lastMSN || (I.lastMSN = w.mediaSequenceNumber), !I.lastPart && w.parts.length > 0 && (I.lastPart = w.parts.length - 1)
                                            }
                                        } catch (e) {
                                            A.e(e)
                                        } finally {
                                            A.f()
                                        }
                                    }(s, f), s
                                }(e, t)).isIFrame && t.hasMap && t.compatibleVersion < 6 && (t.compatibleVersion = 6), t.compatibleVersion > 1 && (!n.version || n.version < t.compatibleVersion) && a.INVALIDPLAYLIST("EXT-X-VERSION needs to be ".concat(t.compatibleVersion, " or higher.")), n
                            }(function(e, t) {
                                var n = [];
                                return e.split("\n").forEach((function(e) {
                                    var r = e.trim();
                                    if (r)
                                        if (r.startsWith("#")) {
                                            if (r.startsWith("#EXT")) {
                                                var i = C(r, t);
                                                return void(i && n.push(i))
                                            }
                                        } else n.push(r)
                                })), 0 !== n.length && "EXTM3U" === n[0].name || a.INVALIDPLAYLIST("The EXTM3U tag MUST be the first line."), n
                            }(e, t), t);
                        return n.source = e, n
                    }
                },
                367: (e, t, n) => {
                    function r(e) {
                        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function i(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    r = !0,
                                    i = !1,
                                    s = void 0;
                                try {
                                    for (var o, a = e[Symbol.iterator](); !(r = (o = a.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    i = !0, s = e
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (i) throw s
                                    }
                                }
                                return n
                            }
                        }(e, t) || o(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function s(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = o(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var r = 0,
                                    i = function() {};
                                return {
                                    s: i,
                                    n: function() {
                                        return r >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[r++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: i
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var s, a = !0,
                            u = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                u = !0, s = e
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (u) throw s
                                }
                            }
                        }
                    }

                    function o(e, t) {
                        if (e) {
                            if ("string" == typeof e) return a(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
                        }
                    }

                    function a(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }

                    function u(e, t, n) {
                        return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                            var r = function(e, t) {
                                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _(e)););
                                return e
                            }(e, t);
                            if (r) {
                                var i = Object.getOwnPropertyDescriptor(r, t);
                                return i.get ? i.get.call(n) : i.value
                            }
                        })(e, t, n || e)
                    }

                    function c(e, t) {
                        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e) : t
                    }

                    function l(e) {
                        var t = "function" == typeof Map ? new Map : void 0;
                        return (l = function(e) {
                            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                            var n;
                            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                            if (void 0 !== t) {
                                if (t.has(e)) return t.get(e);
                                t.set(e, r)
                            }

                            function r() {
                                return h(e, arguments, _(this).constructor)
                            }
                            return r.prototype = Object.create(e.prototype, {
                                constructor: {
                                    value: r,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), f(r, e)
                        })(e)
                    }

                    function h(e, t, n) {
                        return (h = d() ? Reflect.construct : function(e, t, n) {
                            var r = [null];
                            r.push.apply(r, t);
                            var i = new(Function.bind.apply(e, r));
                            return n && f(i, n.prototype), i
                        }).apply(null, arguments)
                    }

                    function d() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }

                    function f(e, t) {
                        return (f = Object.setPrototypeOf || function(e, t) {
                            return e.__proto__ = t, e
                        })(e, t)
                    }

                    function _(e) {
                        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }
                    var p = n(771),
                        m = ["#EXTINF", "#EXT-X-BYTERANGE", "#EXT-X-DISCONTINUITY", "#EXT-X-STREAM-INF", "#EXT-X-CUE-OUT", "#EXT-X-CUE-IN", "#EXT-X-KEY", "#EXT-X-MAP"],
                        v = ["#EXT-X-MEDIA"],
                        g = function(e) {
                            ! function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && f(e, t)
                            }(s, e);
                            var t, n, r, i = (t = s, n = d(), function() {
                                var e, r = _(t);
                                if (n) {
                                    var i = _(this).constructor;
                                    e = Reflect.construct(r, arguments, i)
                                } else e = r.apply(this, arguments);
                                return c(this, e)
                            });

                            function s(e) {
                                var t;
                                return function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, s), (t = i.call(this)).baseUri = e, t
                            }
                            return (r = [{
                                key: "push",
                                value: function() {
                                    for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                    for (var i = function() {
                                            var t = a[o];
                                            if (!t.startsWith("#")) return u(_(s.prototype), "push", e).call(e, t), "continue";
                                            if (m.some((function(e) {
                                                    return t.startsWith(e)
                                                }))) return u(_(s.prototype), "push", e).call(e, t), "continue";
                                            if (e.includes(t)) {
                                                if (v.some((function(e) {
                                                        return t.startsWith(e)
                                                    }))) return "continue";
                                                p.INVALIDPLAYLIST("Redundant item (".concat(t, ")"))
                                            }
                                            u(_(s.prototype), "push", e).call(e, t)
                                        }, o = 0, a = n; o < a.length; o++) i()
                                }
                            }]) && function(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }(s.prototype, r), s
                        }(l(Array));

                    function y(e, t) {
                        var n = 1e3;
                        t && (n = Math.pow(10, t));
                        var r = Math.round(e * n) / n;
                        return t ? r.toFixed(t) : r
                    }

                    function E(e) {
                        var t = e.toString(10),
                            n = t.indexOf(".");
                        return -1 === n ? 0 : t.length - n - 1
                    }

                    function S(e) {
                        var t = ['DATA-ID="'.concat(e.id, '"')];
                        return e.language && t.push('LANGUAGE="'.concat(e.language, '"')), e.value ? t.push('VALUE="'.concat(e.value, '"')) : e.uri && t.push('URI="'.concat(e.uri, '"')), "#EXT-X-SESSION-DATA:".concat(t.join(","))
                    }

                    function T(e, t) {
                        var n = t ? "#EXT-X-SESSION-KEY" : "#EXT-X-KEY",
                            r = ["METHOD=".concat(e.method)];
                        return e.uri && r.push('URI="'.concat(e.uri, '"')), e.iv && (16 !== e.iv.length && p.INVALIDPLAYLIST("IV must be a 128-bit unsigned integer"), r.push("IV=".concat(p.byteSequenceToHex(e.iv)))), e.format && r.push('KEYFORMAT="'.concat(e.format, '"')), e.formatVersion && r.push('KEYFORMATVERSIONS="'.concat(e.formatVersion, '"')), "".concat(n, ":").concat(r.join(","))
                    }

                    function b(e, t) {
                        var n = t.isIFrameOnly ? "#EXT-X-I-FRAME-STREAM-INF" : "#EXT-X-STREAM-INF",
                            r = ["BANDWIDTH=".concat(t.bandwidth)];
                        if (t.averageBandwidth && r.push("AVERAGE-BANDWIDTH=".concat(t.averageBandwidth)), t.isIFrameOnly && r.push('URI="'.concat(t.uri, '"')), t.codecs && r.push('CODECS="'.concat(t.codecs, '"')), t.resolution && r.push("RESOLUTION=".concat(t.resolution.width, "x").concat(t.resolution.height)), t.frameRate && r.push("FRAME-RATE=".concat(y(t.frameRate, 3))), t.hdcpLevel && r.push("HDCP-LEVEL=".concat(t.hdcpLevel)), t.audio.length > 0) {
                            r.push('AUDIO="'.concat(t.audio[0].groupId, '"'));
                            var i, o = s(t.audio);
                            try {
                                for (o.s(); !(i = o.n()).done;) {
                                    var a = i.value;
                                    e.push(A(a))
                                }
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                        }
                        if (t.video.length > 0) {
                            r.push('VIDEO="'.concat(t.video[0].groupId, '"'));
                            var u, c = s(t.video);
                            try {
                                for (c.s(); !(u = c.n()).done;) {
                                    var l = u.value;
                                    e.push(A(l))
                                }
                            } catch (e) {
                                c.e(e)
                            } finally {
                                c.f()
                            }
                        }
                        if (t.subtitles.length > 0) {
                            r.push('SUBTITLES="'.concat(t.subtitles[0].groupId, '"'));
                            var h, d = s(t.subtitles);
                            try {
                                for (d.s(); !(h = d.n()).done;) {
                                    var f = h.value;
                                    e.push(A(f))
                                }
                            } catch (e) {
                                d.e(e)
                            } finally {
                                d.f()
                            }
                        }
                        if (p.getOptions().allowClosedCaptionsNone && 0 === t.closedCaptions.length) r.push("CLOSED-CAPTIONS=NONE");
                        else if (t.closedCaptions.length > 0) {
                            r.push('CLOSED-CAPTIONS="'.concat(t.closedCaptions[0].groupId, '"'));
                            var _, m = s(t.closedCaptions);
                            try {
                                for (m.s(); !(_ = m.n()).done;) {
                                    var v = _.value;
                                    e.push(A(v))
                                }
                            } catch (e) {
                                m.e(e)
                            } finally {
                                m.f()
                            }
                        }
                        e.push("".concat(n, ":").concat(r.join(","))), t.isIFrameOnly || e.push("".concat(t.uri))
                    }

                    function A(e) {
                        var t = ["TYPE=".concat(e.type), 'GROUP-ID="'.concat(e.groupId, '"'), 'NAME="'.concat(e.name, '"')];
                        return void 0 !== e.isDefault && t.push("DEFAULT=".concat(e.isDefault ? "YES" : "NO")), void 0 !== e.autoselect && t.push("AUTOSELECT=".concat(e.autoselect ? "YES" : "NO")), void 0 !== e.forced && t.push("FORCED=".concat(e.forced ? "YES" : "NO")), e.language && t.push('LANGUAGE="'.concat(e.language, '"')), e.assocLanguage && t.push('ASSOC-LANGUAGE="'.concat(e.assocLanguage, '"')), e.instreamId && t.push('INSTREAM-ID="'.concat(e.instreamId, '"')), e.characteristics && t.push('CHARACTERISTICS="'.concat(e.characteristics, '"')), e.channels && t.push('CHANNELS="'.concat(e.channels, '"')), e.uri && t.push('URI="'.concat(e.uri, '"')), "#EXT-X-MEDIA:".concat(t.join(","))
                    }

                    function I(e, t, n, r) {
                        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                            s = !1;
                        if (t.byterange && e.push("#EXT-X-BYTERANGE:".concat(R(t.byterange))), t.discontinuity && e.push("#EXT-X-DISCONTINUITY"), t.key) {
                            var o = T(t.key);
                            o !== n && (e.push(o), n = o)
                        }
                        if (t.map) {
                            var a = w(t.map);
                            a !== r && (e.push(a), r = a)
                        }
                        if (t.programDateTime && e.push("#EXT-X-PROGRAM-DATE-TIME:".concat(p.formatDate(t.programDateTime))), t.dateRange && e.push(P(t.dateRange)), t.markers.length > 0 && D(e, t.markers), t.parts.length > 0 && (s = k(e, t.parts)), s) return [n, r];
                        var u = i < 3 ? Math.round(t.duration) : y(t.duration, E(t.duration));
                        return e.push("#EXTINF:".concat(u, ",").concat(unescape(encodeURIComponent(t.title || "")))), Array.prototype.push.call(e, "".concat(t.uri)), [n, r]
                    }

                    function w(e) {
                        var t = ['URI="'.concat(e.uri, '"')];
                        return e.byterange && t.push('BYTERANGE="'.concat(R(e.byterange), '"')), "#EXT-X-MAP:".concat(t.join(","))
                    }

                    function R(e) {
                        var t = e.offset,
                            n = e.length;
                        return "".concat(n, "@").concat(t)
                    }

                    function P(e) {
                        var t = ['ID="'.concat(e.id, '"')];
                        return e.start && t.push('START-DATE="'.concat(p.formatDate(e.start), '"')), e.end && t.push('END-DATE="'.concat(e.end, '"')), e.duration && t.push("DURATION=".concat(e.duration)), e.plannedDuration && t.push("PLANNED-DURATION=".concat(e.plannedDuration)), e.classId && t.push('CLASS="'.concat(e.classId, '"')), e.endOnNext && t.push("END-ON-NEXT=YES"), Object.keys(e.attributes).forEach((function(n) {
                            n.startsWith("X-") ? "number" == typeof e.attributes[n] ? t.push("".concat(n, "=").concat(e.attributes[n])) : t.push("".concat(n, '="').concat(e.attributes[n], '"')) : n.startsWith("SCTE35-") && t.push("".concat(n, "=").concat(p.byteSequenceToHex(e.attributes[n])))
                        })), "#EXT-X-DATERANGE:".concat(t.join(","))
                    }

                    function D(e, t) {
                        var n, r = s(t);
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var i = n.value;
                                if ("OUT" === i.type) e.push("#EXT-X-CUE-OUT:".concat(i.duration));
                                else if ("IN" === i.type) e.push("#EXT-X-CUE-IN");
                                else if ("RAW" === i.type) {
                                    var o = i.value ? ":".concat(i.value) : "";
                                    e.push("#".concat(i.tagName).concat(o))
                                }
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                    }

                    function k(e, t) {
                        var n, r = !1,
                            i = s(t);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var o = n.value;
                                if (o.hint) {
                                    var a = [];
                                    if (a.push("TYPE=PART"), a.push('URI="'.concat(o.uri, '"')), o.byterange) {
                                        var u = o.byterange,
                                            c = u.offset,
                                            l = u.length;
                                        a.push("BYTERANGE-START=".concat(c)), l && a.push("BYTERANGE-LENGTH=".concat(l))
                                    }
                                    e.push("#EXT-X-PRELOAD-HINT:".concat(a.join(","))), r = !0
                                } else {
                                    var h = [];
                                    h.push("DURATION=".concat(o.duration)), h.push('URI="'.concat(o.uri, '"')), o.byterange && h.push("BYTERANGE=".concat(R(o.byterange))), o.independent && h.push("INDEPENDENT=YES"), o.gap && h.push("GAP=YES"), e.push("#EXT-X-PART:".concat(h.join(",")))
                                }
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        return r
                    }
                    e.exports = function(e) {
                        p.PARAMCHECK(e), p.ASSERT("Not a playlist", "playlist" === e.type);
                        var t = new g(e.uri);
                        return t.push("#EXTM3U"), e.version && t.push("#EXT-X-VERSION:".concat(e.version)), e.independentSegments && t.push("#EXT-X-INDEPENDENT-SEGMENTS"), e.start && t.push("#EXT-X-START:TIME-OFFSET=".concat(y(e.start.offset)).concat(e.start.precise ? ",PRECISE=YES" : "")), e.isMasterPlaylist ? function(e, t) {
                            var n, r = s(t.sessionDataList);
                            try {
                                for (r.s(); !(n = r.n()).done;) {
                                    var i = n.value;
                                    e.push(S(i))
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            var o, a = s(t.sessionKeyList);
                            try {
                                for (a.s(); !(o = a.n()).done;) {
                                    var u = o.value;
                                    e.push(T(u, !0))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                            var c, l = s(t.variants);
                            try {
                                for (l.s(); !(c = l.n()).done;) b(e, c.value)
                            } catch (e) {
                                l.e(e)
                            } finally {
                                l.f()
                            }
                        }(t, e) : function(e, t) {
                            var n = "",
                                r = "";
                            if (t.targetDuration && e.push("#EXT-X-TARGETDURATION:".concat(t.targetDuration)), t.lowLatencyCompatibility) {
                                var o = t.lowLatencyCompatibility,
                                    a = o.canBlockReload,
                                    u = o.canSkipUntil,
                                    c = o.holdBack,
                                    l = o.partHoldBack,
                                    h = [];
                                h.push("CAN-BLOCK-RELOAD=".concat(a ? "YES" : "NO")), void 0 !== u && h.push("CAN-SKIP-UNTIL=".concat(u)), void 0 !== c && h.push("HOLD-BACK=".concat(c)), void 0 !== l && h.push("PART-HOLD-BACK=".concat(l)), e.push("#EXT-X-SERVER-CONTROL:".concat(h.join(",")))
                            }
                            t.partTargetDuration && e.push("#EXT-X-PART-INF:PART-TARGET=".concat(t.partTargetDuration)), t.mediaSequenceBase && e.push("#EXT-X-MEDIA-SEQUENCE:".concat(t.mediaSequenceBase)), t.discontinuitySequenceBase && e.push("#EXT-X-DISCONTINUITY-SEQUENCE:".concat(t.discontinuitySequenceBase)), t.playlistType && e.push("#EXT-X-PLAYLIST-TYPE:".concat(t.playlistType)), t.isIFrame && e.push("#EXT-X-I-FRAMES-ONLY"), t.skip > 0 && e.push("#EXT-X-SKIP:SKIPPED-SEGMENTS=".concat(t.skip));
                            var d, f = s(t.segments);
                            try {
                                for (f.s(); !(d = f.n()).done;) {
                                    var _ = i(I(e, d.value, n, r, t.version), 2);
                                    n = _[0], r = _[1]
                                }
                            } catch (e) {
                                f.e(e)
                            } finally {
                                f.f()
                            }
                            t.endlist && e.push("#EXT-X-ENDLIST");
                            var p, m = s(t.renditionReports);
                            try {
                                for (m.s(); !(p = m.n()).done;) {
                                    var v = p.value,
                                        g = [];
                                    g.push('URI="'.concat(v.uri, '"')), g.push("LAST-MSN=".concat(v.lastMSN)), void 0 !== v.lastPart && g.push("LAST-PART=".concat(v.lastPart)), e.push("#EXT-X-RENDITION-REPORT:".concat(g.join(",")))
                                }
                            } catch (e) {
                                m.e(e)
                            } finally {
                                m.f()
                            }
                        }(t, e), t.join("\n")
                    }
                },
                890: (e, t, n) => {
                    function r(e) {
                        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function i(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && function(e, t) {
                            (Object.setPrototypeOf || function(e, t) {
                                return e.__proto__ = t, e
                            })(e, t)
                        }(e, t)
                    }

                    function s(e) {
                        var t = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                            } catch (e) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = a(e);
                            if (t) {
                                var i = a(this).constructor;
                                n = Reflect.construct(r, arguments, i)
                            } else n = r.apply(this, arguments);
                            return o(this, n)
                        }
                    }

                    function o(e, t) {
                        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e) : t
                    }

                    function a(e) {
                        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }

                    function u(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    var c = n(771),
                        l = function e(t) {
                            u(this, e), c.PARAMCHECK(t), this.type = t
                        },
                        h = function(e) {
                            i(n, e);
                            var t = s(n);

                            function n(e) {
                                var r, i = e.isMasterPlaylist,
                                    s = e.uri,
                                    o = e.version,
                                    a = e.independentSegments,
                                    l = void 0 !== a && a,
                                    h = e.start,
                                    d = e.source;
                                return u(this, n), r = t.call(this, "playlist"), c.PARAMCHECK(i), r.isMasterPlaylist = i, r.uri = s, r.version = o, r.independentSegments = l, r.start = h, r.source = d, r
                            }
                            return n
                        }(l),
                        d = function(e) {
                            i(n, e);
                            var t = s(n);

                            function n() {
                                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                u(this, n), r.isMasterPlaylist = !0, e = t.call(this, r);
                                var i = r.variants,
                                    s = void 0 === i ? [] : i,
                                    o = r.currentVariant,
                                    a = r.sessionDataList,
                                    c = void 0 === a ? [] : a,
                                    l = r.sessionKeyList,
                                    h = void 0 === l ? [] : l;
                                return e.variants = s, e.currentVariant = o, e.sessionDataList = c, e.sessionKeyList = h, e
                            }
                            return n
                        }(h),
                        f = function(e) {
                            i(n, e);
                            var t = s(n);

                            function n() {
                                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                u(this, n), r.isMasterPlaylist = !1, e = t.call(this, r);
                                var i = r.targetDuration,
                                    s = r.mediaSequenceBase,
                                    o = void 0 === s ? 0 : s,
                                    a = r.discontinuitySequenceBase,
                                    c = void 0 === a ? 0 : a,
                                    l = r.endlist,
                                    h = void 0 !== l && l,
                                    d = r.playlistType,
                                    f = r.isIFrame,
                                    _ = r.segments,
                                    p = void 0 === _ ? [] : _,
                                    m = r.lowLatencyCompatibility,
                                    v = r.partTargetDuration,
                                    g = r.renditionReports,
                                    y = void 0 === g ? [] : g,
                                    E = r.skip,
                                    S = void 0 === E ? 0 : E,
                                    T = r.hash;
                                return e.targetDuration = i, e.mediaSequenceBase = o, e.discontinuitySequenceBase = c, e.endlist = h, e.playlistType = d, e.isIFrame = f, e.segments = p, e.lowLatencyCompatibility = m, e.partTargetDuration = v, e.renditionReports = y, e.skip = S, e.hash = T, e
                            }
                            return n
                        }(h),
                        _ = function(e) {
                            i(n, e);
                            var t = s(n);

                            function n(e) {
                                var r, i = e.uri,
                                    s = e.mimeType,
                                    o = e.data,
                                    a = e.duration,
                                    c = e.title,
                                    l = e.byterange,
                                    h = e.discontinuity,
                                    d = e.mediaSequenceNumber,
                                    f = void 0 === d ? 0 : d,
                                    _ = e.discontinuitySequence,
                                    p = void 0 === _ ? 0 : _,
                                    m = e.key,
                                    v = e.map,
                                    g = e.programDateTime,
                                    y = e.dateRange,
                                    E = e.markers,
                                    S = void 0 === E ? [] : E,
                                    T = e.parts,
                                    b = void 0 === T ? [] : T;
                                return u(this, n), (r = t.call(this, "segment")).uri = i, r.mimeType = s, r.data = o, r.duration = a, r.title = c, r.byterange = l, r.discontinuity = h, r.mediaSequenceNumber = f, r.discontinuitySequence = p, r.key = m, r.map = v, r.programDateTime = g, r.dateRange = y, r.markers = S, r.parts = b, r
                            }
                            return n
                        }(l),
                        p = function(e) {
                            i(n, e);
                            var t = s(n);

                            function n(e) {
                                var r, i = e.hint,
                                    s = void 0 !== i && i,
                                    o = e.uri,
                                    a = e.duration,
                                    l = e.independent,
                                    h = e.byterange,
                                    d = e.gap;
                                return u(this, n), r = t.call(this, "part"), c.PARAMCHECK(o), r.hint = s, r.uri = o, r.duration = a, r.independent = l, r.duration = a, r.byterange = h, r.gap = d, r
                            }
                            return n
                        }(l);
                    e.exports = {
                        Rendition: function e(t) {
                            var n = t.type,
                                r = t.uri,
                                i = t.groupId,
                                s = t.language,
                                o = t.assocLanguage,
                                a = t.name,
                                l = t.isDefault,
                                h = t.autoselect,
                                d = t.forced,
                                f = t.instreamId,
                                _ = t.characteristics,
                                p = t.channels;
                            u(this, e), c.PARAMCHECK(n, i, a), c.CONDITIONALASSERT(["SUBTITLES" === n, r], ["CLOSED-CAPTIONS" === n, f], ["CLOSED-CAPTIONS" === n, !r], [d, "SUBTITLES" === n]), this.type = n, this.uri = r, this.groupId = i, this.language = s, this.assocLanguage = o, this.name = a, this.isDefault = l, this.autoselect = h, this.forced = d, this.instreamId = f, this.characteristics = _, this.channels = p
                        },
                        Variant: function e(t) {
                            var n = t.uri,
                                r = t.isIFrameOnly,
                                i = void 0 !== r && r,
                                s = t.bandwidth,
                                o = t.averageBandwidth,
                                a = t.codecs,
                                l = t.resolution,
                                h = t.frameRate,
                                d = t.hdcpLevel,
                                f = t.audio,
                                _ = void 0 === f ? [] : f,
                                p = t.video,
                                m = void 0 === p ? [] : p,
                                v = t.subtitles,
                                g = void 0 === v ? [] : v,
                                y = t.closedCaptions,
                                E = void 0 === y ? [] : y,
                                S = t.currentRenditions,
                                T = void 0 === S ? {
                                    audio: 0,
                                    video: 0,
                                    subtitles: 0,
                                    closedCaptions: 0
                                } : S;
                            u(this, e), c.PARAMCHECK(n, s), this.uri = n, this.isIFrameOnly = i, this.bandwidth = s, this.averageBandwidth = o, this.codecs = a, this.resolution = l, this.frameRate = h, this.hdcpLevel = d, this.audio = _, this.video = m, this.subtitles = g, this.closedCaptions = E, this.currentRenditions = T
                        },
                        SessionData: function e(t) {
                            var n = t.id,
                                r = t.value,
                                i = t.uri,
                                s = t.language;
                            u(this, e), c.PARAMCHECK(n, r || i), c.ASSERT("SessionData cannot have both value and uri, shoud be either.", !(r && i)), this.id = n, this.value = r, this.uri = i, this.language = s
                        },
                        Key: function e(t) {
                            var n = t.method,
                                r = t.uri,
                                i = t.iv,
                                s = t.format,
                                o = t.formatVersion;
                            u(this, e), c.PARAMCHECK(n), c.CONDITIONALPARAMCHECK(["NONE" !== n, r]), c.CONDITIONALASSERT(["NONE" === n, !(r || i || s || o)]), this.method = n, this.uri = r, this.iv = i, this.format = s, this.formatVersion = o
                        },
                        MediaInitializationSection: function e(t) {
                            var n = t.hint,
                                r = void 0 !== n && n,
                                i = t.uri,
                                s = t.mimeType,
                                o = t.byterange;
                            u(this, e), c.PARAMCHECK(i), this.hint = r, this.uri = i, this.mimeType = s, this.byterange = o
                        },
                        DateRange: function e(t) {
                            var n = t.id,
                                r = t.classId,
                                i = t.start,
                                s = t.end,
                                o = t.duration,
                                a = t.plannedDuration,
                                l = t.endOnNext,
                                h = t.attributes,
                                d = void 0 === h ? {} : h;
                            u(this, e), c.PARAMCHECK(n), c.CONDITIONALPARAMCHECK([!0 === l, r]), c.CONDITIONALASSERT([s, i], [s, i <= s], [o, o >= 0], [a, a >= 0]), this.id = n, this.classId = r, this.start = i, this.end = s, this.duration = o, this.plannedDuration = a, this.endOnNext = l, this.attributes = d
                        },
                        SpliceInfo: function e(t) {
                            var n = t.type,
                                r = t.duration,
                                i = t.tagName,
                                s = t.value;
                            u(this, e), c.PARAMCHECK(n), c.CONDITIONALPARAMCHECK(["OUT" === n, r]), c.CONDITIONALPARAMCHECK(["RAW" === n, i]), this.type = n, this.duration = r, this.tagName = i, this.value = s
                        },
                        Playlist: h,
                        MasterPlaylist: d,
                        MediaPlaylist: f,
                        Segment: _,
                        PartialSegment: p,
                        RenditionReport: function e(t) {
                            var n = t.uri,
                                r = t.lastMSN,
                                i = t.lastPart;
                            u(this, e), c.PARAMCHECK(n), this.uri = n, this.lastMSN = r, this.lastPart = i
                        }
                    }
                },
                771: e => {
                    function t(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    r = !0,
                                    i = !1,
                                    s = void 0;
                                try {
                                    for (var o, a = e[Symbol.iterator](); !(r = (o = a.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    i = !0, s = e
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (i) throw s
                                    }
                                }
                                return n
                            }
                        }(e, t) || r(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function n(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = r(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var i = 0,
                                    s = function() {};
                                return {
                                    s,
                                    n: function() {
                                        return i >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[i++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: s
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, a = !0,
                            u = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                u = !0, o = e
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (u) throw o
                                }
                            }
                        }
                    }

                    function r(e, t) {
                        if (e) {
                            if ("string" == typeof e) return i(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                        }
                    }

                    function i(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }
                    var s = {};

                    function o(e) {
                        if (s.strictMode) throw e;
                        s.silent
                    }

                    function a(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                        if ("number" == typeof e) return e;
                        var n = 10 === t ? Number.parseFloat(e, t) : Number.parseInt(e, t);
                        return Number.isNaN(n) ? 0 : n
                    }
                    e.exports = {
                        THROW: o,
                        ASSERT: function(e) {
                            for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s];
                            var a, u = n(i.entries());
                            try {
                                for (u.s(); !(a = u.n()).done;) {
                                    var c = t(a.value, 2),
                                        l = c[0],
                                        h = c[1];
                                    h || o(new Error("".concat(e, " : Failed at [").concat(l, "]")))
                                }
                            } catch (e) {
                                u.e(e)
                            } finally {
                                u.f()
                            }
                        },
                        CONDITIONALASSERT: function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            var s, a = n(r.entries());
                            try {
                                for (a.s(); !(s = a.n()).done;) {
                                    var u = t(s.value, 2),
                                        c = u[0],
                                        l = t(u[1], 2),
                                        h = l[0],
                                        d = l[1];
                                    h && (d || o(new Error("Conditional Assert : Failed at [".concat(c, "]"))))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        },
                        PARAMCHECK: function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            var s, a = n(r.entries());
                            try {
                                for (a.s(); !(s = a.n()).done;) {
                                    var u = t(s.value, 2),
                                        c = u[0],
                                        l = u[1];
                                    void 0 === l && o(new Error("Param Check : Failed at [".concat(c, "]")))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        },
                        CONDITIONALPARAMCHECK: function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            var s, a = n(r.entries());
                            try {
                                for (a.s(); !(s = a.n()).done;) {
                                    var u = t(s.value, 2),
                                        c = u[0],
                                        l = t(u[1], 2),
                                        h = l[0],
                                        d = l[1];
                                    h && void 0 === d && o(new Error("Conditional Param Check : Failed at [".concat(c, "]")))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        },
                        INVALIDPLAYLIST: function(e) {
                            o(new Error("Invalid Playlist : ".concat(e)))
                        },
                        toNumber: a,
                        hexToByteSequence: function(e) {
                            (e.startsWith("0x") || e.startsWith("0X")) && (e = e.slice(2));
                            for (var t = [], n = 0; n < e.length; n += 2) t.push(a(e.slice(n, n + 2), 16));
                            return Buffer.from(t)
                        },
                        byteSequenceToHex: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.length;
                            n <= t && o(new Error("end must be larger than start : start=".concat(t, ", end=").concat(n)));
                            for (var r = [], i = t; i < n; i++) r.push("0".concat((255 & e[i]).toString(16).toUpperCase()).slice(-2));
                            return "0x".concat(r.join(""))
                        },
                        tryCatch: function(e, t) {
                            try {
                                return e()
                            } catch (e) {
                                return t(e)
                            }
                        },
                        splitAt: function(e, t) {
                            for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r = -1, i = 0, s = 0; i < e.length; i++)
                                if (e[i] === t) {
                                    if (s++ === n) return [e.slice(0, i), e.slice(i + 1)];
                                    r = i
                                }
                            return -1 !== r ? [e.slice(0, r), e.slice(r + 1)] : [e]
                        },
                        trim: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
                            return e ? (e = e.trim(), " " === t || (e.startsWith(t) && (e = e.slice(1)), e.endsWith(t) && (e = e.slice(0, -1))), e) : e
                        },
                        splitByCommaWithPreservingQuotes: function(e) {
                            for (var t = [], n = !0, r = 0, i = [], s = 0; s < e.length; s++) {
                                var o = e[s];
                                n && "," === o ? (t.push(e.slice(r, s).trim()), r = s + 1) : '"' !== o && "'" !== o || (n ? (i.push(o), n = !1) : o === i[i.length - 1] ? (i.pop(), n = !0) : i.push(o))
                            }
                            return t.push(e.slice(r).trim()), t
                        },
                        camelify: function(e) {
                            var t, r = [],
                                i = !1,
                                s = n(e);
                            try {
                                for (s.s(); !(t = s.n()).done;) {
                                    var o = t.value;
                                    "-" !== o && "_" !== o ? i ? (r.push(o.toUpperCase()), i = !1) : r.push(o.toLowerCase()) : i = !0
                                }
                            } catch (e) {
                                s.e(e)
                            } finally {
                                s.f()
                            }
                            return r.join("")
                        },
                        formatDate: function(e) {
                            var t = e.getUTCFullYear(),
                                n = ("0" + (e.getUTCMonth() + 1)).slice(-2),
                                r = ("0" + e.getUTCDate()).slice(-2),
                                i = ("0" + e.getUTCHours()).slice(-2),
                                s = ("0" + e.getUTCMinutes()).slice(-2),
                                o = ("0" + e.getUTCSeconds()).slice(-2),
                                a = ("00" + e.getUTCMilliseconds()).slice(-3);
                            return "".concat(t, "-").concat(n, "-").concat(r, "T").concat(i, ":").concat(s, ":").concat(o, ".").concat(a, "Z")
                        },
                        hasOwnProp: function(e, t) {
                            return Object.hasOwnProperty.call(e, t)
                        },
                        setOptions: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            s = Object.assign(s, e)
                        },
                        getOptions: function() {
                            return Object.assign({}, s)
                        }
                    }
                }
            }, t = {},
            function n(r) {
                if (t[r]) return t[r].exports;
                var i = t[r] = {
                    exports: {}
                };
                return e[r](i, i.exports, n), i.exports
            }(851);
        var e, t
    }()
}));
export {
    Ka as $, pu as A, Pn as B, Za as C, Sr as D, Tn as E, Js as F, mu as G, ro as H, vo as I, vu as J, dt as K, qa as L, Rn as M, Bu as N, Uu as O, zs as P, Qs as Q, ju as R, to as S, An as T, Ku as U, Sn as V, cc as W, Qt as X, Xa as Y, dc as Z, gn as _, Lt as a, Rt as a0, Ha as a1, qo as a2, Nt as a3, hc as a4, Kc as a5, zc as a6, $c as a7, al as a8, Rl as a9, vd as aA, md as aB, gd as aC, ii as aD, fa as aE, xh as aF, rd as aG, _h as aH, ci as aI, Dd as aJ, _t as aK, pt as aL, vn as aM, Cr as aN, xr as aO, Lr as aP, Mr as aQ, Nr as aR, At as aS, pn as aT, El as aa, Dl as ab, Zo as ac, Ma as ad, Ua as ae, xa as af, ga as ag, St as ah, Wu as ai, cu as aj, Ll as ak, In as al, wt as am, Pd as an, wd as ao, kh as ap, mn as aq, Wl as ar, mh as as, Mh as at, Nh as au, Yl as av, Ch as aw, Ph as ax, ph as ay, Yh as az, cn as b, on as c, Qa as d, ft as e, ln as f, Do as g, eo as h, Ba as i, Zs as j, no as k, Ys as l, ra as m, $s as n, uo as o, Ct as p, wn as q, ei as r, Gn as s, br as t, Ot as u, Ar as v, Tr as w, Et as x, To as y, m as z
};