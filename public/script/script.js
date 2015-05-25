!function () {
    var e = !0, t = null;
    !function (n) {
        function a(n) {
            if (a[n] != t) return a[n];
            var i;
            if ("bug-string-char-index" == n) i = "a" != "a"[0]; else if ("json" == n) i = a("json-stringify") && a("json-parse"); else {
                var o;
                if ("json-stringify" == n) {
                    i = c.stringify;
                    var d = "function" == typeof i && u;
                    if (d) {
                        (o = function () {
                            return 1
                        }).toJSON = o;
                        try {
                            d = "0" === i(0) && "0" === i(Number) && '""' == i(String) && i(s) === r && i(r) === r && i() === r && "1" === i(o) && "[1]" == i([o]) && "[null]" == i([r]) && "null" == i(t) && "[null,null,null]" == i([r, s, t]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == i({a: [o, e, !1, t, "\0\b\n\f\r	"]}) && "1" === i(t, o) && "[\n 1,\n 2\n]" == i([1, 2], t, 1) && '"-271821-04-20T00:00:00.000Z"' == i(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == i(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == i(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == i(new Date(-1))
                        } catch (l) {
                            d = !1
                        }
                    }
                    i = d
                }
                if ("json-parse" == n) {
                    if (i = c.parse, "function" == typeof i) try {
                        if (0 === i("0") && !i(!1)) {
                            o = i('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var f = 5 == o.a.length && 1 === o.a[0];
                            if (f) {
                                try {
                                    f = !i('"	"')
                                } catch (h) {
                                }
                                if (f) try {
                                    f = 1 !== i("01")
                                } catch (p) {
                                }
                            }
                        }
                    } catch (g) {
                        f = !1
                    }
                    i = f
                }
            }
            return a[n] = !!i
        }

        var i, o, r, s = {}.toString, d = "function" == typeof define && define.amd, l = "object" == typeof JSON && JSON, c = "object" == typeof exports && exports && !exports.nodeType && exports;
        c && l ? (c.stringify = l.stringify, c.parse = l.parse) : c = n.JSON = l || {};
        var u = new Date(-0xc782b5b800cec);
        try {
            u = -109252 == u.getUTCFullYear() && 0 === u.getUTCMonth() && 1 === u.getUTCDate() && 10 == u.getUTCHours() && 37 == u.getUTCMinutes() && 6 == u.getUTCSeconds() && 708 == u.getUTCMilliseconds()
        } catch (f) {
        }
        if (a["bug-string-char-index"] = t, a.json = t, a["json-stringify"] = t, a["json-parse"] = t, !a("json")) {
            var h = a("bug-string-char-index");
            if (!u) var p = Math.floor, g = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], v = function (e, t) {
                return g[t] + 365 * (e - 1970) + p((e - 1969 + (t = +(t > 1))) / 4) - p((e - 1901 + t) / 100) + p((e - 1601 + t) / 400)
            };
            (i = {}.hasOwnProperty) || (i = function (e) {
                var n, a = {};
                return (a.__proto__ = t, a.__proto__ = {toString: 1}, a).toString != s ? i = function (e) {
                    var n = this.__proto__, e = (this.__proto__ = t, e in this);
                    return this.__proto__ = n, e
                } : (n = a.constructor, i = function (e) {
                    var t = (this.constructor || n).prototype;
                    return e in this && !(e in t && this[e] === t[e])
                }), a = t, i.call(this, e)
            });
            var b = {"boolean": 1, number: 1, string: 1, undefined: 1};
            if (o = function (e, n) {
                    var a, r, d, l = 0;
                    (a = function () {
                        this.valueOf = 0
                    }).prototype.valueOf = 0, r = new a;
                    for (d in r) i.call(r, d) && l++;
                    return a = r = t, l ? o = 2 == l ? function (e, t) {
                        var n, a = {}, o = "[object Function]" == s.call(e);
                        for (n in e) !(o && "prototype" == n) && !i.call(a, n) && (a[n] = 1) && i.call(e, n) && t(n)
                    } : function (e, t) {
                        var n, a, o = "[object Function]" == s.call(e);
                        for (n in e) !(o && "prototype" == n) && i.call(e, n) && !(a = "constructor" === n) && t(n);
                        (a || i.call(e, n = "constructor")) && t(n)
                    } : (r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], o = function (e, t) {
                        var n, a, o = "[object Function]" == s.call(e);
                        (a = !o) && (a = "function" != typeof e.constructor) && (a = typeof e.hasOwnProperty, a = "object" == a ? !!e.hasOwnProperty : !b[a]), a = a ? e.hasOwnProperty : i;
                        for (n in e) !(o && "prototype" == n) && a.call(e, n) && t(n);
                        for (o = r.length; n = r[--o]; a.call(e, n) && t(n));
                    }), o(e, n)
                }, !a("json-stringify")) {
                var m = {
                    92: "\\\\",
                    34: '\\"',
                    8: "\\b",
                    12: "\\f",
                    10: "\\n",
                    13: "\\r",
                    9: "\\t"
                }, x = function (e, t) {
                    return ("000000" + (t || 0)).slice(-e)
                }, w = function (e) {
                    var t, n = '"', a = 0, i = e.length, o = i > 10 && h;
                    for (o && (t = e.split("")); i > a; a++) {
                        var r = e.charCodeAt(a);
                        switch (r) {
                            case 8:
                            case 9:
                            case 10:
                            case 12:
                            case 13:
                            case 34:
                            case 92:
                                n += m[r];
                                break;
                            default:
                                if (32 > r) {
                                    n += "\\u00" + x(2, r.toString(16));
                                    break
                                }
                                n += o ? t[a] : h ? e.charAt(a) : e[a]
                        }
                    }
                    return n + '"'
                }, y = function (n, a, d, l, c, u, f) {
                    var h, g, b, m, $, _, C, k, T, F;
                    try {
                        h = a[n]
                    } catch (z) {
                    }
                    if ("object" == typeof h && h) if (g = s.call(h), "[object Date]" != g || i.call(h, "toJSON")) "function" == typeof h.toJSON && ("[object Number]" != g && "[object String]" != g && "[object Array]" != g || i.call(h, "toJSON")) && (h = h.toJSON(n)); else if (h > -1 / 0 && 1 / 0 > h) {
                        if (v) {
                            for (m = p(h / 864e5), g = p(m / 365.2425) + 1970 - 1; v(g + 1, 0) <= m; g++);
                            for (b = p((m - v(g, 0)) / 30.42); v(g, b + 1) <= m; b++);
                            m = 1 + m - v(g, b), $ = (h % 864e5 + 864e5) % 864e5, _ = p($ / 36e5) % 24, C = p($ / 6e4) % 60, k = p($ / 1e3) % 60, $ %= 1e3
                        } else g = h.getUTCFullYear(), b = h.getUTCMonth(), m = h.getUTCDate(), _ = h.getUTCHours(), C = h.getUTCMinutes(), k = h.getUTCSeconds(), $ = h.getUTCMilliseconds();
                        h = (0 >= g || g >= 1e4 ? (0 > g ? "-" : "+") + x(6, 0 > g ? -g : g) : x(4, g)) + "-" + x(2, b + 1) + "-" + x(2, m) + "T" + x(2, _) + ":" + x(2, C) + ":" + x(2, k) + "." + x(3, $) + "Z"
                    } else h = t;
                    if (d && (h = d.call(a, n, h)), h === t) return "null";
                    if (g = s.call(h), "[object Boolean]" == g) return "" + h;
                    if ("[object Number]" == g) return h > -1 / 0 && 1 / 0 > h ? "" + h : "null";
                    if ("[object String]" == g) return w("" + h);
                    if ("object" == typeof h) {
                        for (n = f.length; n--;) if (f[n] === h) throw TypeError();
                        if (f.push(h), T = [], a = u, u += c, "[object Array]" == g) {
                            for (b = 0, n = h.length; n > b; F || (F = e), b++) g = y(b, h, d, l, c, u, f), T.push(g === r ? "null" : g);
                            n = F ? c ? "[\n" + u + T.join(",\n" + u) + "\n" + a + "]" : "[" + T.join(",") + "]" : "[]"
                        } else o(l || h, function (t) {
                            var n = y(t, h, d, l, c, u, f);
                            n !== r && T.push(w(t) + ":" + (c ? " " : "") + n), F || (F = e)
                        }), n = F ? c ? "{\n" + u + T.join(",\n" + u) + "\n" + a + "}" : "{" + T.join(",") + "}" : "{}";
                        return f.pop(), n
                    }
                };
                c.stringify = function (e, t, n) {
                    var a, i, o, r;
                    if ("function" == typeof t || "object" == typeof t && t) if ("[object Function]" == (r = s.call(t))) i = t; else if ("[object Array]" == r) {
                        o = {}, r = 0;
                        for (var d, l = t.length; l > r; d = t[r++], ("[object String]" == s.call(d) || "[object Number]" == s.call(d)) && (o[d] = 1));
                    }
                    if (n) if ("[object Number]" == (r = s.call(n))) {
                        if ((n -= n % 1) > 0) for (a = "", n > 10 && (n = 10); a.length < n; a += " ");
                    } else "[object String]" == r && (a = n.length <= 10 ? n : n.slice(0, 10));
                    return y("", (d = {}, d[""] = e, d), i, o, a, "", [])
                }
            }
            if (!a("json-parse")) {
                var $, _, C = String.fromCharCode, k = {
                    92: "\\",
                    34: '"',
                    47: "/",
                    98: "\b",
                    116: "	",
                    110: "\n",
                    102: "\f",
                    114: "\r"
                }, T = function () {
                    throw $ = _ = t, SyntaxError()
                }, F = function () {
                    for (var n, a, i, o, r, s = _, d = s.length; d > $;) switch (r = s.charCodeAt($)) {
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                            $++;
                            break;
                        case 123:
                        case 125:
                        case 91:
                        case 93:
                        case 58:
                        case 44:
                            return n = h ? s.charAt($) : s[$], $++, n;
                        case 34:
                            for (n = "@", $++; d > $;) if (r = s.charCodeAt($), 32 > r) T(); else if (92 == r) switch (r = s.charCodeAt(++$)) {
                                case 92:
                                case 34:
                                case 47:
                                case 98:
                                case 116:
                                case 110:
                                case 102:
                                case 114:
                                    n += k[r], $++;
                                    break;
                                case 117:
                                    for (a = ++$, i = $ + 4; i > $; $++) r = s.charCodeAt($), r >= 48 && 57 >= r || r >= 97 && 102 >= r || r >= 65 && 70 >= r || T();
                                    n += C("0x" + s.slice(a, $));
                                    break;
                                default:
                                    T()
                            } else {
                                if (34 == r) break;
                                for (r = s.charCodeAt($), a = $; r >= 32 && 92 != r && 34 != r;) r = s.charCodeAt(++$);
                                n += s.slice(a, $)
                            }
                            if (34 == s.charCodeAt($)) return $++, n;
                            T();
                        default:
                            if (a = $, 45 == r && (o = e, r = s.charCodeAt(++$)), r >= 48 && 57 >= r) {
                                for (48 == r && (r = s.charCodeAt($ + 1), r >= 48 && 57 >= r) && T(); d > $ && (r = s.charCodeAt($), r >= 48 && 57 >= r); $++);
                                if (46 == s.charCodeAt($)) {
                                    for (i = ++$; d > i && (r = s.charCodeAt(i), r >= 48 && 57 >= r); i++);
                                    i == $ && T(), $ = i
                                }
                                if (r = s.charCodeAt($), 101 == r || 69 == r) {
                                    for (r = s.charCodeAt(++$), (43 == r || 45 == r) && $++, i = $; d > i && (r = s.charCodeAt(i), r >= 48 && 57 >= r); i++);
                                    i == $ && T(), $ = i
                                }
                                return +s.slice(a, $)
                            }
                            if (o && T(), "true" == s.slice($, $ + 4)) return $ += 4, e;
                            if ("false" == s.slice($, $ + 5)) return $ += 5, !1;
                            if ("null" == s.slice($, $ + 4)) return $ += 4, t;
                            T()
                    }
                    return "$"
                }, z = function (t) {
                    var n, a;
                    if ("$" == t && T(), "string" == typeof t) {
                        if ("@" == (h ? t.charAt(0) : t[0])) return t.slice(1);
                        if ("[" == t) {
                            for (n = []; t = F(), "]" != t; a || (a = e)) a && ("," == t ? (t = F(), "]" == t && T()) : T()), "," == t && T(), n.push(z(t));
                            return n
                        }
                        if ("{" == t) {
                            for (n = {}; t = F(), "}" != t; a || (a = e)) a && ("," == t ? (t = F(), "}" == t && T()) : T()), ("," == t || "string" != typeof t || "@" != (h ? t.charAt(0) : t[0]) || ":" != F()) && T(), n[t.slice(1)] = z(F());
                            return n
                        }
                        T()
                    }
                    return t
                }, S = function (e, t, n) {
                    n = D(e, t, n), n === r ? delete e[t] : e[t] = n
                }, D = function (e, t, n) {
                    var a, i = e[t];
                    if ("object" == typeof i && i) if ("[object Array]" == s.call(i)) for (a = i.length; a--;) S(i, a, n); else o(i, function (e) {
                        S(i, e, n)
                    });
                    return n.call(e, t, i)
                };
                c.parse = function (e, n) {
                    var a, i;
                    return $ = 0, _ = "" + e, a = z(F()), "$" != F() && T(), $ = _ = t, n && "[object Function]" == s.call(n) ? D((i = {}, i[""] = a, i), "", n) : a
                }
            }
        }
        d && define(function () {
            return c
        })
    }(this)
}();
!function (a, b, c, d) {
    var e = a(b);
    a.fn.lazyload = function (f) {
        function g() {
            var b = 0;
            i.each(function () {
                var c = a(this);
                if (!j.skip_invisible || c.is(":visible"))if (a.abovethetop(this, j) || a.leftofbegin(this, j)); else if (a.belowthefold(this, j) || a.rightoffold(this, j)) {
                    if (++b > j.failure_limit)return !1
                } else c.trigger("appear"), b = 0
            })
        }

        var h, i = this, j = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: b,
            data_attribute: "original",
            skip_invisible: !0,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };
        return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(j, f)), h = j.container === d || j.container === b ? e : a(j.container), 0 === j.event.indexOf("scroll") && h.bind(j.event, function () {
            return g()
        }), this.each(function () {
            var b = this, c = a(b);
            b.loaded = !1, (c.attr("src") === d || c.attr("src") === !1) && c.attr("src", j.placeholder), c.one("appear", function () {
                if (!this.loaded) {
                    if (j.appear) {
                        var d = i.length;
                        j.appear.call(b, d, j)
                    }
                    a("<img />").bind("load", function () {
                        var d = c.data(j.data_attribute);
                        c.hide(), c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"), c[j.effect](j.effect_speed), b.loaded = !0;
                        var e = a.grep(i, function (a) {
                            return !a.loaded
                        });
                        if (i = a(e), j.load) {
                            var f = i.length;
                            j.load.call(b, f, j)
                        }
                    }).attr("src", c.data(j.data_attribute))
                }
            }), 0 !== j.event.indexOf("scroll") && c.bind(j.event, function () {
                b.loaded || c.trigger("appear")
            })
        }), e.bind("resize", function () {
            g()
        }), /iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function (b) {
            b.originalEvent && b.originalEvent.persisted && i.each(function () {
                a(this).trigger("appear")
            })
        }), a(c).ready(function () {
            g()
        }), this
    }, a.belowthefold = function (c, f) {
        var g;
        return g = f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height(), g <= a(c).offset().top - f.threshold
    }, a.rightoffold = function (c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width(), g <= a(c).offset().left - f.threshold
    }, a.abovethetop = function (c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top, g >= a(c).offset().top + f.threshold + a(c).height()
    }, a.leftofbegin = function (c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left, g >= a(c).offset().left + f.threshold + a(c).width()
    }, a.inviewport = function (b, c) {
        return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c))
    }, a.extend(a.expr[":"], {
        "below-the-fold": function (b) {
            return a.belowthefold(b, {threshold: 0})
        }, "above-the-top": function (b) {
            return !a.belowthefold(b, {threshold: 0})
        }, "right-of-screen": function (b) {
            return a.rightoffold(b, {threshold: 0})
        }, "left-of-screen": function (b) {
            return !a.rightoffold(b, {threshold: 0})
        }, "in-viewport": function (b) {
            return a.inviewport(b, {threshold: 0})
        }, "above-the-fold": function (b) {
            return !a.belowthefold(b, {threshold: 0})
        }, "right-of-fold": function (b) {
            return a.rightoffold(b, {threshold: 0})
        }, "left-of-fold": function (b) {
            return !a.rightoffold(b, {threshold: 0})
        }
    })
}(jQuery, window, document);
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b) if (void 0 !== a.style[c]) return {end: b[c]};
        return !1
    }

    a.fn.emulateTransitionEnd = function (b) {
        var c = !1, d = this;
        a(this).one(a.support.transition.end, function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b()
    })
}(jQuery), +function (a) {
    "use strict";
    var b = '[data-dismiss="alert"]', c = function (c) {
        a(c).on("click", b, this.close)
    };
    c.prototype.close = function (b) {
        function c() {
            f.trigger("closed.bs.alert").remove()
        }

        var d = a(this), e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
    };
    var d = a.fn.alert;
    a.fn.alert = function (b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.alert");
            e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d)
        })
    }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function () {
        return a.fn.alert = d, this
    }, a(document).on("click.bs.alert.data-api", b, c.prototype.close)
}(jQuery), +function (a) {
    "use strict";
    var b = function (c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.isLoading = !1
    };
    b.DEFAULTS = {loadingText: "loading..."}, b.prototype.setState = function (b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text", f.resetText || d.data("resetText", d[e]()), d[e](f[b] || this.options[b]), setTimeout(a.proxy(function () {
            "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, b.prototype.toggle = function () {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        a && this.$element.toggleClass("active")
    };
    var c = a.fn.button;
    a.fn.button = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof c && c;
            e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
        })
    }, a.fn.button.Constructor = b, a.fn.button.noConflict = function () {
        return a.fn.button = c, this
    }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault()
    })
}(jQuery), +function (a) {
    "use strict";
    var b = function (b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
    };
    b.DEFAULTS = {interval: 5e3, pause: "hover", wrap: !0}, b.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, b.prototype.getActiveIndex = function () {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, b.prototype.to = function (b) {
        var c = this, d = this.getActiveIndex();
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            c.to(b)
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
    }, b.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, b.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, b.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, b.prototype.slide = function (b, c) {
        var d = this.$element.find(".item.active"), e = c || d[b](), f = this.interval, g = "next" == b ? "left" : "right", h = "next" == b ? "first" : "last", i = this;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]()
        }
        if (e.hasClass("active")) return this.sliding = !1;
        var j = a.Event("slide.bs.carousel", {relatedTarget: e[0], direction: g});
        return this.$element.trigger(j), j.isDefaultPrevented() ? void 0 : (this.sliding = !0, f && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function () {
            var b = a(i.$indicators.children()[i.getActiveIndex()]);
            b && b.addClass("active")
        })), a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function () {
            e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function () {
                i.$element.trigger("slid.bs.carousel")
            }, 0)
        }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), f && this.cycle(), this)
    };
    var c = a.fn.carousel;
    a.fn.carousel = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c), g = "string" == typeof c ? c : f.slide;
            e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = c, this
    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (b) {
        var c, d = a(this), e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")), f = a.extend({}, e.data(), d.data()), g = d.attr("data-slide-to");
        g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault()
    }), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var b = a(this);
            b.carousel(b.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";
    var b = function (c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    b.DEFAULTS = {toggle: !0}, b.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, b.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b = a.Event("show.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.$parent && this.$parent.find("> .panel > .in");
                if (c && c.length) {
                    var d = c.data("bs.collapse");
                    if (d && d.transitioning) return;
                    c.collapse("hide"), d || c.data("bs.collapse", null)
                }
                var e = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
                var f = function () {
                    this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition) return f.call(this);
                var g = a.camelCase(["scroll", e].join("-"));
                this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
            }
        }
    }, b.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var d = function () {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? void this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
            }
        }
    }, b.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var c = a.fn.collapse;
    a.fn.collapse = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.collapse"), f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
            !e && f.toggle && "show" == c && (c = !c), e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = c, this
    }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (b) {
        var c, d = a(this), e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""), f = a(e), g = f.data("bs.collapse"), h = g ? "toggle" : d.data(), i = d.attr("data-parent"), j = i && a(i);
        g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h)
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        a(d).remove(), a(e).each(function () {
            var d = c(a(this)), e = {relatedTarget: this};
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e))
        })
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    var d = ".dropdown-backdrop", e = "[data-toggle=dropdown]", f = function (b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    f.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e), g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {relatedTarget: this};
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                f.toggleClass("open").trigger("shown.bs.dropdown", h), e.focus()
            }
            return !1
        }
    }, f.prototype.keydown = function (b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var f = c(d), g = f.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
                var h = " li:not(.divider):visible a", i = f.find("[role=menu]" + h + ", [role=listbox]" + h);
                if (i.length) {
                    var j = i.index(i.filter(":focus"));
                    38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).focus()
                }
            }
        }
    };
    var g = a.fn.dropdown;
    a.fn.dropdown = function (b) {
        return this.each(function () {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new f(this)), "string" == typeof b && d[b].call(c)
        })
    }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = g, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu], [role=listbox]", f.prototype.keydown)
}(jQuery), +function (a) {
    "use strict";
    var b = function (b, c) {
        this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    b.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0}, b.prototype.toggle = function (a) {
        return this[this.isShown ? "hide" : "show"](a)
    }, b.prototype.show = function (b) {
        var c = this, d = a.Event("show.bs.modal", {relatedTarget: b});
        this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
            var e = a.Event("shown.bs.modal", {relatedTarget: b});
            d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function () {
                c.$element.focus().trigger(e)
            }).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
        }))
    }, b.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, b.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
        }, this))
    }, b.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, b.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.removeBackdrop(), a.$element.trigger("hidden.bs.modal")
        })
    }, b.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, b.prototype.backdrop = function (b) {
        var c = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var d = a.support.transition && c;
            if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                    a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
    };
    var c = a.fn.modal;
    a.fn.modal = function (c, d) {
        return this.each(function () {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
            f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d)
        })
    }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function () {
        return a.fn.modal = c, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (b) {
        var c = a(this), d = c.attr("href"), e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")), f = e.data("bs.modal") ? "toggle" : a.extend({remote: !/#/.test(d) && d}, e.data(), c.data());
        c.is("a") && b.preventDefault(), e.modal(f, this).one("hide", function () {
            c.is(":visible") && c.focus()
        })
    }), a(document).on("show.bs.modal", ".modal", function () {
        a(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function () {
        a(document.body).removeClass("modal-open")
    })
}(jQuery), +function (a) {
    "use strict";
    var b = function (a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    b.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, b.prototype.init = function (b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, b.prototype.getDefaults = function () {
        return b.DEFAULTS
    }, b.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, b.prototype.getDelegateOptions = function () {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, b.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show()
    }, b.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, b.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(b), b.isDefaultPrevented()) return;
            var c = this, d = this.tip();
            this.setContent(), this.options.animation && d.addClass("fade");
            var e = "function" == typeof this.options.placement ? this.options.placement.call(this, d[0], this.$element[0]) : this.options.placement, f = /\s?auto?\s?/i, g = f.test(e);
            g && (e = e.replace(f, "") || "top"), d.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(e), this.options.container ? d.appendTo(this.options.container) : d.insertAfter(this.$element);
            var h = this.getPosition(), i = d[0].offsetWidth, j = d[0].offsetHeight;
            if (g) {
                var k = this.$element.parent(), l = e, m = document.documentElement.scrollTop || document.body.scrollTop, n = "body" == this.options.container ? window.innerWidth : k.outerWidth(), o = "body" == this.options.container ? window.innerHeight : k.outerHeight(), p = "body" == this.options.container ? 0 : k.offset().left;
                e = "bottom" == e && h.top + h.height + j - m > o ? "top" : "top" == e && h.top - m - j < 0 ? "bottom" : "right" == e && h.right + i > n ? "left" : "left" == e && h.left - i < p ? "right" : e, d.removeClass(l).addClass(e)
            }
            var q = this.getCalculatedOffset(e, h, i, j);
            this.applyPlacement(q, e), this.hoverState = null;
            var r = function () {
                c.$element.trigger("shown.bs." + c.type)
            };
            a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, r).emulateTransitionEnd(150) : r()
        }
    }, b.prototype.applyPlacement = function (b, c) {
        var d, e = this.tip(), f = e[0].offsetWidth, g = e[0].offsetHeight, h = parseInt(e.css("margin-top"), 10), i = parseInt(e.css("margin-left"), 10);
        isNaN(h) && (h = 0), isNaN(i) && (i = 0), b.top = b.top + h, b.left = b.left + i, a.offset.setOffset(e[0], a.extend({
            using: function (a) {
                e.css({top: Math.round(a.top), left: Math.round(a.left)})
            }
        }, b), 0), e.addClass("in");
        var j = e[0].offsetWidth, k = e[0].offsetHeight;
        if ("top" == c && k != g && (d = !0, b.top = b.top + g - k), /bottom|top/.test(c)) {
            var l = 0;
            b.left < 0 && (l = -2 * b.left, b.left = 0, e.offset(b), j = e[0].offsetWidth, k = e[0].offsetHeight), this.replaceArrow(l - f + j, j, "left")
        } else this.replaceArrow(k - g, k, "top");
        d && e.offset(b)
    }, b.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
    }, b.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, b.prototype.hide = function () {
        function b() {
            "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type)
        }

        var c = this, d = this.tip(), e = a.Event("hide.bs." + this.type);
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.hoverState = null, this)
    }, b.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, b.prototype.hasContent = function () {
        return this.getTitle()
    }, b.prototype.getPosition = function () {
        var b = this.$element[0];
        return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
            width: b.offsetWidth,
            height: b.offsetHeight
        }, this.$element.offset())
    }, b.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {top: b.top + b.height / 2 - d / 2, left: b.left - c} : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, b.prototype.getTitle = function () {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, b.prototype.tip = function () {
        return this.$tip = this.$tip || a(this.options.template)
    }, b.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, b.prototype.validate = function () {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, b.prototype.enable = function () {
        this.enabled = !0
    }, b.prototype.disable = function () {
        this.enabled = !1
    }, b.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, b.prototype.toggle = function (b) {
        var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, b.prototype.destroy = function () {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof c && c;
            (e || "destroy" != c) && (e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]())
        })
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = c, this
    }
}(jQuery), +function (a) {
    "use strict";
    var b = function (a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function () {
        return b.DEFAULTS
    }, b.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, b.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, b.prototype.getContent = function () {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, b.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, b.prototype.tip = function () {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var c = a.fn.popover;
    a.fn.popover = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof c && c;
            (e || "destroy" != c) && (e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]())
        })
    }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function () {
        return a.fn.popover = c, this
    }
}(jQuery), +function (a) {
    "use strict";
    function b(c, d) {
        var e, f = a.proxy(this.process, this);
        this.$element = a(a(c).is("body") ? window : c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process()
    }

    b.DEFAULTS = {offset: 10}, b.prototype.refresh = function () {
        var b = this.$element[0] == window ? "offset" : "position";
        this.offsets = a([]), this.targets = a([]);
        {
            var c = this;
            this.$body.find(this.selector).map(function () {
                var d = a(this), e = d.data("target") || d.attr("href"), f = /^#./.test(e) && a(e);
                return f && f.length && f.is(":visible") && [[f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]] || null
            }).sort(function (a, b) {
                return a[0] - b[0]
            }).each(function () {
                c.offsets.push(this[0]), c.targets.push(this[1])
            })
        }
    }, b.prototype.process = function () {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, d = c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
        if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    };
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = c, this
    }, a(window).on("load", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            b.scrollspy(b.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";
    var b = function (b) {
        this.element = a(b)
    };
    b.prototype.show = function () {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0], f = a.Event("show.bs.tab", {relatedTarget: e});
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.parent("li"), c), this.activate(g, g.parent(), function () {
                    b.trigger({type: "shown.bs.tab", relatedTarget: e})
                })
            }
        }
    }, b.prototype.activate = function (b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
        }

        var f = c.find("> .active"), g = d && a.support.transition && f.hasClass("fade");
        g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in")
    };
    var c = a.fn.tab;
    a.fn.tab = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]()
        })
    }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function () {
        return a.fn.tab = c, this
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (b) {
        b.preventDefault(), a(this).tab("show")
    })
}(jQuery), +function (a) {
    "use strict";
    var b = function (c, d) {
        this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {offset: 0}, b.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(b.RESET).addClass("affix");
        var a = this.$window.scrollTop(), c = this.$element.offset();
        return this.pinnedOffset = c.top - a
    }, b.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, b.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var c = a(document).height(), d = this.$window.scrollTop(), e = this.$element.offset(), f = this.options.offset, g = f.top, h = f.bottom;
            "top" == this.affixed && (e.top += d), "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
            if (this.affixed !== i) {
                this.unpin && this.$element.css("top", "");
                var j = "affix" + (i ? "-" + i : ""), k = a.Event(j + ".bs.affix");
                this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({top: c - h - this.$element.height()}))
            }
        }
    };
    var c = a.fn.affix;
    a.fn.affix = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof c && c;
            e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function () {
        return a.fn.affix = c, this
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var b = a(this), c = b.data();
            c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
        })
    })
}(jQuery);
(function (w) {
    "use strict";
    w.matchMedia = w.matchMedia || function (doc, undefined) {
            var bool, docElem = doc.documentElement, refNode = docElem.firstElementChild || docElem.firstChild, fakeBody = doc.createElement("body"), div = doc.createElement("div");
            div.id = "mq-test-1";
            div.style.cssText = "position:absolute;top:-100em";
            fakeBody.style.background = "none";
            fakeBody.appendChild(div);
            return function (q) {
                div.innerHTML = '&shy;<style media="' + q + '"> #mq-test-1 { width: 42px; }</style>';
                docElem.insertBefore(fakeBody, refNode);
                bool = div.offsetWidth === 42;
                docElem.removeChild(fakeBody);
                return {
                    matches: bool,
                    media: q
                };
            };
        }(w.document);
})(this);

(function (w) {
    "use strict";
    var respond = {};
    w.respond = respond;
    respond.update = function () {
    };
    var requestQueue = [], xmlHttp = function () {
        var xmlhttpmethod = false;
        try {
            xmlhttpmethod = new w.XMLHttpRequest();
        } catch (e) {
            xmlhttpmethod = new w.ActiveXObject("Microsoft.XMLHTTP");
        }
        return function () {
            return xmlhttpmethod;
        };
    }(), ajax = function (url, callback) {
        var req = xmlHttp();
        if (!req) {
            return;
        }
        req.open("GET", url, true);
        req.onreadystatechange = function () {
            if (req.readyState !== 4 || req.status !== 200 && req.status !== 304) {
                return;
            }
            callback(req.responseText);
        };
        if (req.readyState === 4) {
            return;
        }
        req.send(null);
    }, isUnsupportedMediaQuery = function (query) {
        return query.replace(respond.regex.minmaxwh, "").match(respond.regex.other);
    };
    respond.ajax = ajax;
    respond.queue = requestQueue;
    respond.unsupportedmq = isUnsupportedMediaQuery;
    respond.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
        other: /\([^\)]*\)/g
    };
    respond.mediaQueriesSupported = w.matchMedia && w.matchMedia("only all") !== null && w.matchMedia("only all").matches;
    if (respond.mediaQueriesSupported) {
        return;
    }
    var doc = w.document, docElem = doc.documentElement, mediastyles = [], rules = [], appendedEls = [], parsedSheets = {}, resizeThrottle = 30, head = doc.getElementsByTagName("head")[0] || docElem, base = doc.getElementsByTagName("base")[0], links = head.getElementsByTagName("link"), lastCall, resizeDefer, eminpx, getEmValue = function () {
        var ret, div = doc.createElement("div"), body = doc.body, originalHTMLFontSize = docElem.style.fontSize, originalBodyFontSize = body && body.style.fontSize, fakeUsed = false;
        div.style.cssText = "position:absolute;font-size:1em;width:1em";
        if (!body) {
            body = fakeUsed = doc.createElement("body");
            body.style.background = "none";
        }
        docElem.style.fontSize = "100%";
        body.style.fontSize = "100%";
        body.appendChild(div);
        if (fakeUsed) {
            docElem.insertBefore(body, docElem.firstChild);
        }
        ret = div.offsetWidth;
        if (fakeUsed) {
            docElem.removeChild(body);
        } else {
            body.removeChild(div);
        }
        docElem.style.fontSize = originalHTMLFontSize;
        if (originalBodyFontSize) {
            body.style.fontSize = originalBodyFontSize;
        }
        ret = eminpx = parseFloat(ret);
        return ret;
    }, applyMedia = function (fromResize) {
        var name = "clientWidth", docElemProp = docElem[name], currWidth = doc.compatMode === "CSS1Compat" && docElemProp || doc.body[name] || docElemProp, styleBlocks = {}, lastLink = links[links.length - 1], now = new Date().getTime();
        if (fromResize && lastCall && now - lastCall < resizeThrottle) {
            w.clearTimeout(resizeDefer);
            resizeDefer = w.setTimeout(applyMedia, resizeThrottle);
            return;
        } else {
            lastCall = now;
        }
        for (var i in mediastyles) {
            if (mediastyles.hasOwnProperty(i)) {
                var thisstyle = mediastyles[i], min = thisstyle.minw, max = thisstyle.maxw, minnull = min === null, maxnull = max === null, em = "em";
                if (!!min) {
                    min = parseFloat(min) * (min.indexOf(em) > -1 ? eminpx || getEmValue() : 1);
                }
                if (!!max) {
                    max = parseFloat(max) * (max.indexOf(em) > -1 ? eminpx || getEmValue() : 1);
                }
                if (!thisstyle.hasquery || (!minnull || !maxnull) && (minnull || currWidth >= min) && (maxnull || currWidth <= max)) {
                    if (!styleBlocks[thisstyle.media]) {
                        styleBlocks[thisstyle.media] = [];
                    }
                    styleBlocks[thisstyle.media].push(rules[thisstyle.rules]);
                }
            }
        }
        for (var j in appendedEls) {
            if (appendedEls.hasOwnProperty(j)) {
                if (appendedEls[j] && appendedEls[j].parentNode === head) {
                    head.removeChild(appendedEls[j]);
                }
            }
        }
        appendedEls.length = 0;
        for (var k in styleBlocks) {
            if (styleBlocks.hasOwnProperty(k)) {
                var ss = doc.createElement("style"), css = styleBlocks[k].join("\n");
                ss.type = "text/css";
                ss.media = k;
                head.insertBefore(ss, lastLink.nextSibling);
                if (ss.styleSheet) {
                    ss.styleSheet.cssText = css;
                } else {
                    ss.appendChild(doc.createTextNode(css));
                }
                appendedEls.push(ss);
            }
        }
    }, translate = function (styles, href, media) {
        var qs = styles.replace(respond.regex.comments, "").replace(respond.regex.keyframes, "").match(respond.regex.media), ql = qs && qs.length || 0;
        href = href.substring(0, href.lastIndexOf("/"));
        var repUrls = function (css) {
            return css.replace(respond.regex.urls, "$1" + href + "$2$3");
        }, useMedia = !ql && media;
        if (href.length) {
            href += "/";
        }
        if (useMedia) {
            ql = 1;
        }
        for (var i = 0; i < ql; i++) {
            var fullq, thisq, eachq, eql;
            if (useMedia) {
                fullq = media;
                rules.push(repUrls(styles));
            } else {
                fullq = qs[i].match(respond.regex.findStyles) && RegExp.$1;
                rules.push(RegExp.$2 && repUrls(RegExp.$2));
            }
            eachq = fullq.split(",");
            eql = eachq.length;
            for (var j = 0; j < eql; j++) {
                thisq = eachq[j];
                if (isUnsupportedMediaQuery(thisq)) {
                    continue;
                }
                mediastyles.push({
                    media: thisq.split("(")[0].match(respond.regex.only) && RegExp.$2 || "all",
                    rules: rules.length - 1,
                    hasquery: thisq.indexOf("(") > -1,
                    minw: thisq.match(respond.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                    maxw: thisq.match(respond.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                });
            }
        }
        applyMedia();
    }, makeRequests = function () {
        if (requestQueue.length) {
            var thisRequest = requestQueue.shift();
            ajax(thisRequest.href, function (styles) {
                translate(styles, thisRequest.href, thisRequest.media);
                parsedSheets[thisRequest.href] = true;
                w.setTimeout(function () {
                    makeRequests();
                }, 0);
            });
        }
    }, ripCSS = function () {
        for (var i = 0; i < links.length; i++) {
            var sheet = links[i], href = sheet.href, media = sheet.media, isCSS = sheet.rel && sheet.rel.toLowerCase() === "stylesheet";
            if (!!href && isCSS && !parsedSheets[href]) {
                if (sheet.styleSheet && sheet.styleSheet.rawCssText) {
                    translate(sheet.styleSheet.rawCssText, href, media);
                    parsedSheets[href] = true;
                } else {
                    if (!/^([a-zA-Z:]*\/\/)/.test(href) && !base || href.replace(RegExp.$1, "").split("/")[0] === w.location.host) {
                        if (href.substring(0, 2) === "//") {
                            href = w.location.protocol + href;
                        }
                        requestQueue.push({
                            href: href,
                            media: media
                        });
                    }
                }
            }
        }
        makeRequests();
    };
    ripCSS();
    respond.update = ripCSS;
    respond.getEmValue = getEmValue;
    function callMedia() {
        applyMedia(true);
    }

    if (w.addEventListener) {
        w.addEventListener("resize", callMedia, false);
    } else if (w.attachEvent) {
        w.attachEvent("onresize", callMedia);
    }
})(this);
if (void 0 === fakewaffle)var fakewaffle = {};
fakewaffle.responsiveTabs = function (e) {
    "use strict";
    fakewaffle.currentPosition = "tabs";
    var a = $(".nav-tabs.responsive"), t = "", s = "";
    void 0 === e && (e = ["xs", "sm"]), $.each(e, function () {
        t += " hidden-" + this, s += " visible-" + this
    }), $.each(a, function () {
        var e = $(this), a = e.find("li a"), l = $("<div></div>", {
            "class": "panel-group responsive" + s,
            id: "collapse-" + e.attr("id")
        });
        $.each(a, function () {
            var a = $(this), t = "", s = void 0 === a.attr("class") ? "" : a.attr("class"), i = "accordion-toggle", n = void 0 === a.parent().attr("class") ? "" : a.parent().attr("class"), o = "panel panel-default";
            s.length > 0 && (i += " " + s), n.length > 0 && (n = n.replace(/\bactive\b/g, ""), o += " " + n, o = o.replace(/\s{2,}/g, " "), o = o.replace(/^\s+|\s+$/g, "")), a.parent().hasClass("active") && (t = " in"), l.append($("<div>").attr("class", o).html($("<div>").attr("class", "panel-heading").html($("<h4>").attr("class", "panel-title").html($("<a>", {
                "class": i,
                "data-toggle": "collapse",
                "data-parent": "#collapse-" + e.attr("id"),
                href: "#collapse-" + a.attr("href").replace(/#/g, ""),
                html: a.html()
            })))).append($("<div>", {
                id: "collapse-" + a.attr("href").replace(/#/g, ""),
                "class": "panel-collapse collapse" + t
            }).html($("<div>").attr("class", "panel-body").html(""))))
        }), e.next().after(l), e.addClass(t), $(".tab-content.responsive").addClass(t)
    }), fakewaffle.checkResize(), fakewaffle.bindTabToCollapse()
}, fakewaffle.checkResize = function () {
    "use strict";
    $(".panel-group.responsive").is(":visible") === !0 && "tabs" === fakewaffle.currentPosition ? (fakewaffle.toggleResponsiveTabContent(), fakewaffle.currentPosition = "panel") : $(".panel-group.responsive").is(":visible") === !1 && "panel" === fakewaffle.currentPosition && (fakewaffle.toggleResponsiveTabContent(), fakewaffle.currentPosition = "tabs")
}, fakewaffle.toggleResponsiveTabContent = function () {
    "use strict";
    var e = $(".nav-tabs.responsive");
    $.each(e, function () {
        var e = $(this).find("li a");
        $.each(e, function () {
            var e = $(this).attr("href").replace(/#/g, ""), a = "#" + e, t = "#collapse-" + e, s = $(a).html(), l = $(t + " div:first-child").html();
            $(a).html(l), $(t + " div:first-child").html(s)
        })
    })
}, fakewaffle.bindTabToCollapse = function () {
    "use strict";
    var e = $(".nav-tabs.responsive").find("li a"), a = $(".panel-group.responsive").find(".panel-collapse");
    e.on("shown.bs.tab", function (e) {
        var a = $($(e.target)[0].hash.replace(/#/, "#collapse-"));
        if (a.collapse("show"), e.relatedTarget) {
            var t = $($(e.relatedTarget)[0].hash.replace(/#/, "#collapse-"));
            t.collapse("hide")
        }
    }), a.on("show.bs.collapse", function (e) {
        var a = $(e.target).context.id.replace(/collapse-/g, "#");
        $('a[href="' + a + '"]').tab("show")
    })
}, $(window).resize(function () {
    "use strict";
    fakewaffle.checkResize()
});
!function (t) {
    var e = {
        topSpacing: 0,
        bottomSpacing: 0,
        className: "is-sticky",
        wrapperClassName: "sticky-wrapper",
        center: !1,
        getWidthFrom: ""
    }, i = t(window), n = t(document), s = [], o = i.height(), a = function () {
        for (var e = i.scrollTop(), a = n.height(), r = a - o, c = e > r ? r - e : 0, p = 0; p < s.length; p++) {
            var l = s[p], d = l.stickyWrapper.offset().top, h = d - l.topSpacing - c;
            if (h >= e)null !== l.currentTop && (l.stickyElement.css("position", "").css("top", ""), l.stickyElement.parent().removeClass(l.className), l.currentTop = null); else {
                var u = a - l.stickyElement.outerHeight() - l.topSpacing - l.bottomSpacing - e - c;
                0 > u ? u += l.topSpacing : u = l.topSpacing, l.currentTop != u && (l.stickyElement.css("position", "fixed").css("top", u), "undefined" != typeof l.getWidthFrom && l.stickyElement.css("width", t(l.getWidthFrom).width()), l.stickyElement.parent().addClass(l.className), l.currentTop = u)
            }
        }
    }, r = function () {
        o = i.height()
    }, c = {
        init: function (i) {
            var n = t.extend(e, i);
            return this.each(function () {
                var e = t(this), i = e.attr("id"), o = t("<div></div>").attr("id", i + "-sticky-wrapper").addClass(n.wrapperClassName);
                e.wrapAll(o), n.center && e.parent().css({
                    width: e.outerWidth(),
                    marginLeft: "auto",
                    marginRight: "auto"
                }), "right" == e.css("float") && e.css({"float": "none"}).parent().css({"float": "right"});
                var a = e.parent();
                a.css("height", e.outerHeight()), s.push({
                    topSpacing: n.topSpacing,
                    bottomSpacing: n.bottomSpacing,
                    stickyElement: e,
                    currentTop: null,
                    stickyWrapper: a,
                    className: n.className,
                    getWidthFrom: n.getWidthFrom
                })
            })
        }, update: a
    };
    window.addEventListener ? (window.addEventListener("scroll", a, !1), window.addEventListener("resize", r, !1)) : window.attachEvent && (window.attachEvent("onscroll", a), window.attachEvent("onresize", r)), t.fn.sticky = function (e) {
        return c[e] ? c[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist on jQuery.sticky") : c.init.apply(this, arguments)
    }, t(function () {
        setTimeout(a, 0)
    })
}(jQuery);
!function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper"], a) : (window.blueimp = window.blueimp || {}, window.blueimp.Gallery = a(window.blueimp.helper || window.jQuery))
}(function (a) {
    "use strict";
    function b(a, c) {
        return void 0 === document.body.style.maxHeight ? null : this && this.options === b.prototype.options ? a && a.length ? (this.list = a, this.num = a.length, this.initOptions(c), void this.initialize()) : void this.console.log("blueimp Gallery: No or empty list provided as first argument.", a) : new b(a, c)
    }

    return a.extend(b.prototype, {
        options: {
            container: "#blueimp-gallery",
            slidesContainer: "div",
            titleElement: "h3",
            displayClass: "blueimp-gallery-display",
            controlsClass: "blueimp-gallery-controls",
            singleClass: "blueimp-gallery-single",
            leftEdgeClass: "blueimp-gallery-left",
            rightEdgeClass: "blueimp-gallery-right",
            playingClass: "blueimp-gallery-playing",
            slideClass: "slide",
            slideLoadingClass: "slide-loading",
            slideErrorClass: "slide-error",
            slideContentClass: "slide-content",
            toggleClass: "toggle",
            prevClass: "prev",
            nextClass: "next",
            closeClass: "close",
            playPauseClass: "play-pause",
            typeProperty: "type",
            titleProperty: "title",
            urlProperty: "href",
            displayTransition: !0,
            clearSlides: !0,
            stretchImages: !1,
            toggleControlsOnReturn: !0,
            toggleSlideshowOnSpace: !0,
            enableKeyboardNavigation: !0,
            closeOnEscape: !0,
            closeOnSlideClick: !0,
            closeOnSwipeUpOrDown: !0,
            emulateTouchEvents: !0,
            stopTouchEventsPropagation: !1,
            hidePageScrollbars: !0,
            disableScroll: !0,
            carousel: !1,
            continuous: !0,
            unloadElements: !0,
            startSlideshow: !1,
            slideshowInterval: 5e3,
            index: 0,
            preloadRange: 2,
            transitionSpeed: 400,
            slideshowTransitionSpeed: void 0,
            event: void 0,
            onopen: void 0,
            onopened: void 0,
            onslide: void 0,
            onslideend: void 0,
            onslidecomplete: void 0,
            onclose: void 0,
            onclosed: void 0
        },
        carouselOptions: {
            hidePageScrollbars: !1,
            toggleControlsOnReturn: !1,
            toggleSlideshowOnSpace: !1,
            enableKeyboardNavigation: !1,
            closeOnEscape: !1,
            closeOnSlideClick: !1,
            closeOnSwipeUpOrDown: !1,
            disableScroll: !1,
            startSlideshow: !0
        },
        console: window.console && "function" == typeof window.console.log ? window.console : {
            log: function () {
            }
        },
        support: function (b) {
            var c = {touch: void 0 !== window.ontouchstart || window.DocumentTouch && document instanceof DocumentTouch}, d = {
                webkitTransition: {
                    end: "webkitTransitionEnd",
                    prefix: "-webkit-"
                },
                MozTransition: {end: "transitionend", prefix: "-moz-"},
                OTransition: {end: "otransitionend", prefix: "-o-"},
                transition: {end: "transitionend", prefix: ""}
            }, e = function () {
                var a, d, e = c.transition;
                document.body.appendChild(b), e && (a = e.name.slice(0, -9) + "ransform", void 0 !== b.style[a] && (b.style[a] = "translateZ(0)", d = window.getComputedStyle(b).getPropertyValue(e.prefix + "transform"), c.transform = {
                    prefix: e.prefix,
                    name: a,
                    translate: !0,
                    translateZ: !!d && "none" !== d
                })), void 0 !== b.style.backgroundSize && (c.backgroundSize = {}, b.style.backgroundSize = "contain", c.backgroundSize.contain = "contain" === window.getComputedStyle(b).getPropertyValue("background-size"), b.style.backgroundSize = "cover", c.backgroundSize.cover = "cover" === window.getComputedStyle(b).getPropertyValue("background-size")), document.body.removeChild(b)
            };
            return function (a, c) {
                var d;
                for (d in c) if (c.hasOwnProperty(d) && void 0 !== b.style[d]) {
                    a.transition = c[d], a.transition.name = d;
                    break
                }
            }(c, d), document.body ? e() : a(document).on("DOMContentLoaded", e), c
        }(document.createElement("div")),
        requestAnimationFrame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame,
        initialize: function () {
            return this.initStartIndex(), this.initWidget() === !1 ? !1 : (this.initEventListeners(), this.onslide(this.index), this.ontransitionend(), void (this.options.startSlideshow && this.play()))
        },
        slide: function (a, b) {
            window.clearTimeout(this.timeout);
            var c, d, e, f = this.index;
            if (f !== a && 1 !== this.num) {
                if (b || (b = this.options.transitionSpeed), this.support.transition) {
                    for (this.options.continuous || (a = this.circle(a)), c = Math.abs(f - a) / (f - a), this.options.continuous && (d = c, c = -this.positions[this.circle(a)] / this.slideWidth, c !== d && (a = -c * this.num + a)), e = Math.abs(f - a) - 1; e;) e -= 1, this.move(this.circle((a > f ? a : f) - e - 1), this.slideWidth * c, 0);
                    a = this.circle(a), this.move(f, this.slideWidth * c, b), this.move(a, 0, b), this.options.continuous && this.move(this.circle(a - c), -(this.slideWidth * c), 0)
                } else a = this.circle(a), this.animate(f * -this.slideWidth, a * -this.slideWidth, b);
                this.onslide(a)
            }
        },
        getIndex: function () {
            return this.index
        },
        getNumber: function () {
            return this.num
        },
        prev: function () {
            (this.options.continuous || this.index) && this.slide(this.index - 1)
        },
        next: function () {
            (this.options.continuous || this.index < this.num - 1) && this.slide(this.index + 1)
        },
        play: function (a) {
            var b = this;
            window.clearTimeout(this.timeout), this.interval = a || this.options.slideshowInterval, this.elements[this.index] > 1 && (this.timeout = this.setTimeout(!this.requestAnimationFrame && this.slide || function (a, c) {
                    b.animationFrameId = b.requestAnimationFrame.call(window, function () {
                        b.slide(a, c)
                    })
                }, [this.index + 1, this.options.slideshowTransitionSpeed], this.interval)), this.container.addClass(this.options.playingClass)
        },
        pause: function () {
            window.clearTimeout(this.timeout), this.interval = null, this.container.removeClass(this.options.playingClass)
        },
        add: function (a) {
            var b;
            for (a.concat || (a = Array.prototype.slice.call(a)), this.list.concat || (this.list = Array.prototype.slice.call(this.list)), this.list = this.list.concat(a), this.num = this.list.length, this.num > 2 && null === this.options.continuous && (this.options.continuous = !0, this.container.removeClass(this.options.leftEdgeClass)), this.container.removeClass(this.options.rightEdgeClass).removeClass(this.options.singleClass), b = this.num - a.length; b < this.num; b += 1) this.addSlide(b), this.positionSlide(b);
            this.positions.length = this.num, this.initSlides(!0)
        },
        resetSlides: function () {
            this.slidesContainer.empty(), this.slides = []
        },
        handleClose: function () {
            var a = this.options;
            this.destroyEventListeners(), this.pause(), this.container[0].style.display = "none", this.container.removeClass(a.displayClass).removeClass(a.singleClass).removeClass(a.leftEdgeClass).removeClass(a.rightEdgeClass), a.hidePageScrollbars && (document.body.style.overflow = this.bodyOverflowStyle), this.options.clearSlides && this.resetSlides(), this.options.onclosed && this.options.onclosed.call(this)
        },
        close: function () {
            var a = this, b = function (c) {
                c.target === a.container[0] && (a.container.off(a.support.transition.end, b), a.handleClose())
            };
            this.options.onclose && this.options.onclose.call(this), this.support.transition && this.options.displayTransition ? (this.container.on(this.support.transition.end, b), this.container.removeClass(this.options.displayClass)) : this.handleClose()
        },
        circle: function (a) {
            return (this.num + a % this.num) % this.num
        },
        move: function (a, b, c) {
            this.translateX(a, b, c), this.positions[a] = b
        },
        translate: function (a, b, c, d) {
            var e = this.slides[a].style, f = this.support.transition, g = this.support.transform;
            e[f.name + "Duration"] = d + "ms", e[g.name] = "translate(" + b + "px, " + c + "px)" + (g.translateZ ? " translateZ(0)" : "")
        },
        translateX: function (a, b, c) {
            this.translate(a, b, 0, c)
        },
        translateY: function (a, b, c) {
            this.translate(a, 0, b, c)
        },
        animate: function (a, b, c) {
            if (!c) return void (this.slidesContainer[0].style.left = b + "px");
            var d = this, e = (new Date).getTime(), f = window.setInterval(function () {
                var g = (new Date).getTime() - e;
                return g > c ? (d.slidesContainer[0].style.left = b + "px", d.ontransitionend(), void window.clearInterval(f)) : void (d.slidesContainer[0].style.left = (b - a) * (Math.floor(g / c * 100) / 100) + a + "px")
            }, 4)
        },
        preventDefault: function (a) {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        },
        stopPropagation: function (a) {
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
        },
        onresize: function () {
            this.initSlides(!0)
        },
        onmousedown: function (a) {
            a.which && 1 === a.which && "VIDEO" !== a.target.nodeName && (a.preventDefault(), (a.originalEvent || a).touches = [{
                pageX: a.pageX,
                pageY: a.pageY
            }], this.ontouchstart(a))
        },
        onmousemove: function (a) {
            this.touchStart && ((a.originalEvent || a).touches = [{
                pageX: a.pageX,
                pageY: a.pageY
            }], this.ontouchmove(a))
        },
        onmouseup: function (a) {
            this.touchStart && (this.ontouchend(a), delete this.touchStart)
        },
        onmouseout: function (b) {
            if (this.touchStart) {
                var c = b.target, d = b.relatedTarget;
                (!d || d !== c && !a.contains(c, d)) && this.onmouseup(b)
            }
        },
        ontouchstart: function (a) {
            this.options.stopTouchEventsPropagation && this.stopPropagation(a);
            var b = (a.originalEvent || a).touches[0];
            this.touchStart = {
                x: b.pageX,
                y: b.pageY,
                time: Date.now()
            }, this.isScrolling = void 0, this.touchDelta = {}
        },
        ontouchmove: function (a) {
            this.options.stopTouchEventsPropagation && this.stopPropagation(a);
            var b, c, d = (a.originalEvent || a).touches[0], e = (a.originalEvent || a).scale, f = this.index;
            if (!(d.length > 1 || e && 1 !== e)) if (this.options.disableScroll && a.preventDefault(), this.touchDelta = {
                    x: d.pageX - this.touchStart.x,
                    y: d.pageY - this.touchStart.y
                }, b = this.touchDelta.x, void 0 === this.isScrolling && (this.isScrolling = this.isScrolling || Math.abs(b) < Math.abs(this.touchDelta.y)), this.isScrolling) this.options.closeOnSwipeUpOrDown && this.translateY(f, this.touchDelta.y + this.positions[f], 0); else for (a.preventDefault(), window.clearTimeout(this.timeout), this.options.continuous ? c = [this.circle(f + 1), f, this.circle(f - 1)] : (this.touchDelta.x = b /= !f && b > 0 || f === this.num - 1 && 0 > b ? Math.abs(b) / this.slideWidth + 1 : 1, c = [f], f && c.push(f - 1), f < this.num - 1 && c.unshift(f + 1)); c.length;) f = c.pop(), this.translateX(f, b + this.positions[f], 0)
        },
        ontouchend: function (a) {
            this.options.stopTouchEventsPropagation && this.stopPropagation(a);
            var b, c, d, e, f, g = this.index, h = this.options.transitionSpeed, i = this.slideWidth, j = Number(Date.now() - this.touchStart.time) < 250, k = j && Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.x) > i / 2, l = !g && this.touchDelta.x > 0 || g === this.num - 1 && this.touchDelta.x < 0, m = !k && this.options.closeOnSwipeUpOrDown && (j && Math.abs(this.touchDelta.y) > 20 || Math.abs(this.touchDelta.y) > this.slideHeight / 2);
            this.options.continuous && (l = !1), b = this.touchDelta.x < 0 ? -1 : 1, this.isScrolling ? m ? this.close() : this.translateY(g, 0, h) : k && !l ? (c = g + b, d = g - b, e = i * b, f = -i * b, this.options.continuous ? (this.move(this.circle(c), e, 0), this.move(this.circle(g - 2 * b), f, 0)) : c >= 0 && c < this.num && this.move(c, e, 0), this.move(g, this.positions[g] + e, h), this.move(this.circle(d), this.positions[this.circle(d)] + e, h), g = this.circle(d), this.onslide(g)) : this.options.continuous ? (this.move(this.circle(g - 1), -i, h), this.move(g, 0, h), this.move(this.circle(g + 1), i, h)) : (g && this.move(g - 1, -i, h), this.move(g, 0, h), g < this.num - 1 && this.move(g + 1, i, h))
        },
        ontouchcancel: function (a) {
            this.touchStart && (this.ontouchend(a), delete this.touchStart)
        },
        ontransitionend: function (a) {
            var b = this.slides[this.index];
            a && b !== a.target || (this.interval && this.play(), this.setTimeout(this.options.onslideend, [this.index, b]))
        },
        oncomplete: function (b) {
            var c, d = b.target || b.srcElement, e = d && d.parentNode;
            d && e && (c = this.getNodeIndex(e), a(e).removeClass(this.options.slideLoadingClass), "error" === b.type ? (a(e).addClass(this.options.slideErrorClass), this.elements[c] = 3) : this.elements[c] = 2, d.clientHeight > this.container[0].clientHeight && (d.style.maxHeight = this.container[0].clientHeight), this.interval && this.slides[this.index] === e && this.play(), this.setTimeout(this.options.onslidecomplete, [c, e]))
        },
        onload: function (a) {
            this.oncomplete(a)
        },
        onerror: function (a) {
            this.oncomplete(a)
        },
        onkeydown: function (a) {
            switch (a.which || a.keyCode) {
                case 13:
                    this.options.toggleControlsOnReturn && (this.preventDefault(a), this.toggleControls());
                    break;
                case 27:
                    this.options.closeOnEscape && this.close();
                    break;
                case 32:
                    this.options.toggleSlideshowOnSpace && (this.preventDefault(a), this.toggleSlideshow());
                    break;
                case 37:
                    this.options.enableKeyboardNavigation && (this.preventDefault(a), this.prev());
                    break;
                case 39:
                    this.options.enableKeyboardNavigation && (this.preventDefault(a), this.next())
            }
        },
        handleClick: function (b) {
            var c = this.options, d = b.target || b.srcElement, e = d.parentNode, f = function (b) {
                return a(d).hasClass(b) || a(e).hasClass(b)
            };
            f(c.toggleClass) ? (this.preventDefault(b), this.toggleControls()) : f(c.prevClass) ? (this.preventDefault(b), this.prev()) : f(c.nextClass) ? (this.preventDefault(b), this.next()) : f(c.closeClass) ? (this.preventDefault(b), this.close()) : f(c.playPauseClass) ? (this.preventDefault(b), this.toggleSlideshow()) : e === this.slidesContainer[0] ? (this.preventDefault(b), c.closeOnSlideClick ? this.close() : this.toggleControls()) : e.parentNode && e.parentNode === this.slidesContainer[0] && (this.preventDefault(b), this.toggleControls())
        },
        onclick: function (a) {
            return this.options.emulateTouchEvents && this.touchDelta && (Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.y) > 20) ? void delete this.touchDelta : this.handleClick(a)
        },
        updateEdgeClasses: function (a) {
            a ? this.container.removeClass(this.options.leftEdgeClass) : this.container.addClass(this.options.leftEdgeClass), a === this.num - 1 ? this.container.addClass(this.options.rightEdgeClass) : this.container.removeClass(this.options.rightEdgeClass)
        },
        handleSlide: function (a) {
            this.options.continuous || this.updateEdgeClasses(a), this.loadElements(a), this.options.unloadElements && this.unloadElements(a), this.setTitle(a)
        },
        onslide: function (a) {
            this.index = a, this.handleSlide(a), this.setTimeout(this.options.onslide, [a, this.slides[a]])
        },
        setTitle: function (a) {
            var b = this.slides[a].firstChild.title, c = this.titleElement;
            c.length && (this.titleElement.empty(), b && c[0].appendChild(document.createTextNode(b)))
        },
        setTimeout: function (a, b, c) {
            var d = this;
            return a && window.setTimeout(function () {
                    a.apply(d, b || [])
                }, c || 0)
        },
        imageFactory: function (b, c) {
            var d, e, f, g = this, h = this.imagePrototype.cloneNode(!1), i = b, j = this.options.stretchImages, k = function (b) {
                if (!d) {
                    if (b = {type: b.type, target: e}, !e.parentNode) return g.setTimeout(k, [b]);
                    d = !0, a(h).off("load error", k), j && "load" === b.type && (e.style.background = 'url("' + i + '") center no-repeat', e.style.backgroundSize = j), c(b)
                }
            };
            return "string" != typeof i && (i = this.getItemProperty(b, this.options.urlProperty), f = this.getItemProperty(b, this.options.titleProperty)), j === !0 && (j = "contain"), j = this.support.backgroundSize && this.support.backgroundSize[j] && j, j ? e = this.elementPrototype.cloneNode(!1) : (e = h, h.draggable = !1), f && (e.title = f), a(h).on("load error", k), h.src = i, e
        },
        createElement: function (b, c) {
            var d = b && this.getItemProperty(b, this.options.typeProperty), e = d && this[d.split("/")[0] + "Factory"] || this.imageFactory, f = b && e.call(this, b, c);
            return f || (f = this.elementPrototype.cloneNode(!1), this.setTimeout(c, [{
                type: "error",
                target: f
            }])), a(f).addClass(this.options.slideContentClass), f
        },
        loadElement: function (b) {
            this.elements[b] || (this.slides[b].firstChild ? this.elements[b] = a(this.slides[b]).hasClass(this.options.slideErrorClass) ? 3 : 2 : (this.elements[b] = 1, a(this.slides[b]).addClass(this.options.slideLoadingClass), this.slides[b].appendChild(this.createElement(this.list[b], this.proxyListener))))
        },
        loadElements: function (a) {
            var b, c = Math.min(this.num, 2 * this.options.preloadRange + 1), d = a;
            for (b = 0; c > b; b += 1) d += b * (b % 2 === 0 ? -1 : 1), d = this.circle(d), this.loadElement(d)
        },
        unloadElements: function (a) {
            var b, c, d;
            for (b in this.elements) this.elements.hasOwnProperty(b) && (d = Math.abs(a - b), d > this.options.preloadRange && d + this.options.preloadRange < this.num && (c = this.slides[b], c.removeChild(c.firstChild), delete this.elements[b]))
        },
        addSlide: function (a) {
            var b = this.slidePrototype.cloneNode(!1);
            b.setAttribute("data-index", a), this.slidesContainer[0].appendChild(b), this.slides.push(b)
        },
        positionSlide: function (a) {
            var b = this.slides[a];
            b.style.width = this.slideWidth + "px", this.support.transition && (b.style.left = a * -this.slideWidth + "px", this.move(a, this.index > a ? -this.slideWidth : this.index < a ? this.slideWidth : 0, 0))
        },
        initSlides: function (b) {
            var c, d;
            for (b || (this.positions = [], this.positions.length = this.num, this.elements = {}, this.imagePrototype = document.createElement("img"), this.elementPrototype = document.createElement("div"), this.slidePrototype = document.createElement("div"), a(this.slidePrototype).addClass(this.options.slideClass), this.slides = this.slidesContainer[0].children, c = this.options.clearSlides || this.slides.length !== this.num), this.slideWidth = this.container[0].offsetWidth, this.slideHeight = this.container[0].offsetHeight, this.slidesContainer[0].style.width = this.num * this.slideWidth + "px", c && this.resetSlides(), d = 0; d < this.num; d += 1) c && this.addSlide(d), this.positionSlide(d);
            this.options.continuous && this.support.transition && (this.move(this.circle(this.index - 1), -this.slideWidth, 0), this.move(this.circle(this.index + 1), this.slideWidth, 0)), this.support.transition || (this.slidesContainer[0].style.left = this.index * -this.slideWidth + "px")
        },
        toggleControls: function () {
            var a = this.options.controlsClass;
            this.container.hasClass(a) ? this.container.removeClass(a) : this.container.addClass(a)
        },
        toggleSlideshow: function () {
            this.interval ? this.pause() : this.play()
        },
        getNodeIndex: function (a) {
            return parseInt(a.getAttribute("data-index"), 10)
        },
        getNestedProperty: function (a, b) {
            return b.replace(/\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g, function (b, c, d, e, f) {
                var g = f || c || d || e && parseInt(e, 10);
                b && a && (a = a[g])
            }), a
        },
        getDataProperty: function (b, c) {
            if (b.getAttribute) {
                var d = b.getAttribute("data-" + c.replace(/([A-Z])/g, "-$1").toLowerCase());
                if ("string" == typeof d) {
                    if (/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(d)) try {
                        return a.parseJSON(d)
                    } catch (e) {
                    }
                    return d
                }
            }
        },
        getItemProperty: function (a, b) {
            var c = a[b];
            return void 0 === c && (c = this.getDataProperty(a, b), void 0 === c && (c = this.getNestedProperty(a, b))), c
        },
        initStartIndex: function () {
            var a, b = this.options.index, c = this.options.urlProperty;
            if (b && "number" != typeof b) for (a = 0; a < this.num; a += 1) if (this.list[a] === b || this.getItemProperty(this.list[a], c) === this.getItemProperty(b, c)) {
                b = a;
                break
            }
            this.index = this.circle(parseInt(b, 10) || 0)
        },
        initEventListeners: function () {
            var b = this, c = this.slidesContainer, d = function (a) {
                var c = b.support.transition && b.support.transition.end === a.type ? "transitionend" : a.type;
                b["on" + c](a)
            };
            a(window).on("resize", d), a(document.body).on("keydown", d), this.container.on("click", d), this.support.touch ? c.on("touchstart touchmove touchend touchcancel", d) : this.options.emulateTouchEvents && this.support.transition && c.on("mousedown mousemove mouseup mouseout", d), this.support.transition && c.on(this.support.transition.end, d), this.proxyListener = d
        },
        destroyEventListeners: function () {
            var b = this.slidesContainer, c = this.proxyListener;
            a(window).off("resize", c), a(document.body).off("keydown", c), this.container.off("click", c), this.support.touch ? b.off("touchstart touchmove touchend touchcancel", c) : this.options.emulateTouchEvents && this.support.transition && b.off("mousedown mousemove mouseup mouseout", c), this.support.transition && b.off(this.support.transition.end, c)
        },
        handleOpen: function () {
            this.options.onopened && this.options.onopened.call(this)
        },
        initWidget: function () {
            var b = this, c = function (a) {
                a.target === b.container[0] && (b.container.off(b.support.transition.end, c), b.handleOpen())
            };
            return this.container = a(this.options.container), this.container.length ? (this.slidesContainer = this.container.find(this.options.slidesContainer).first(), this.slidesContainer.length ? (this.titleElement = this.container.find(this.options.titleElement).first(), 1 === this.num && this.container.addClass(this.options.singleClass), this.options.onopen && this.options.onopen.call(this), this.support.transition && this.options.displayTransition ? this.container.on(this.support.transition.end, c) : this.handleOpen(), this.options.hidePageScrollbars && (this.bodyOverflowStyle = document.body.style.overflow, document.body.style.overflow = "hidden"), this.container[0].style.display = "block", this.initSlides(), void this.container.addClass(this.options.displayClass)) : (this.console.log("blueimp Gallery: Slides container not found.", this.options.slidesContainer), !1)) : (this.console.log("blueimp Gallery: Widget container not found.", this.options.container), !1)
        },
        initOptions: function (b) {
            this.options = a.extend({}, this.options), (b && b.carousel || this.options.carousel && (!b || b.carousel !== !1)) && a.extend(this.options, this.carouselOptions), a.extend(this.options, b), this.num < 3 && (this.options.continuous = this.options.continuous ? null : !1), this.support.transition || (this.options.emulateTouchEvents = !1), this.options.event && this.preventDefault(this.options.event)
        }
    }), b
}), function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], a) : a(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function (a, b) {
    "use strict";
    a.extend(b.prototype.options, {fullScreen: !1});
    var c = b.prototype.initialize, d = b.prototype.close;
    return a.extend(b.prototype, {
        getFullScreenElement: function () {
            return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
        }, requestFullScreen: function (a) {
            a.requestFullscreen ? a.requestFullscreen() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.msRequestFullscreen && a.msRequestFullscreen()
        }, exitFullScreen: function () {
            document.exitFullscreen ? document.exitFullscreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
        }, initialize: function () {
            c.call(this), this.options.fullScreen && !this.getFullScreenElement() && this.requestFullScreen(this.container[0])
        }, close: function () {
            this.getFullScreenElement() === this.container[0] && this.exitFullScreen(), d.call(this)
        }
    }), b
}), function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], a) : a(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function (a, b) {
    "use strict";
    a.extend(b.prototype.options, {
        indicatorContainer: "ol",
        activeIndicatorClass: "active",
        thumbnailProperty: "thumbnail",
        thumbnailIndicators: !0
    });
    var c = b.prototype.initSlides, d = b.prototype.addSlide, e = b.prototype.resetSlides, f = b.prototype.handleClick, g = b.prototype.handleSlide, h = b.prototype.handleClose;
    return a.extend(b.prototype, {
        createIndicator: function (b) {
            var c, d, e = this.indicatorPrototype.cloneNode(!1), f = this.getItemProperty(b, this.options.titleProperty), g = this.options.thumbnailProperty;
            return this.options.thumbnailIndicators && (d = b.getElementsByTagName && a(b).find("img")[0], d ? c = d.src : g && (c = this.getItemProperty(b, g)), c && (e.style.backgroundImage = 'url("' + c + '")')), f && (e.title = f), e
        }, addIndicator: function (a) {
            if (this.indicatorContainer.length) {
                var b = this.createIndicator(this.list[a]);
                b.setAttribute("data-index", a), this.indicatorContainer[0].appendChild(b), this.indicators.push(b)
            }
        }, setActiveIndicator: function (b) {
            this.indicators && (this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), this.activeIndicator = a(this.indicators[b]), this.activeIndicator.addClass(this.options.activeIndicatorClass))
        }, initSlides: function (a) {
            a || (this.indicatorContainer = this.container.find(this.options.indicatorContainer), this.indicatorContainer.length && (this.indicatorPrototype = document.createElement("li"), this.indicators = this.indicatorContainer[0].children)), c.call(this, a)
        }, addSlide: function (a) {
            d.call(this, a), this.addIndicator(a)
        }, resetSlides: function () {
            e.call(this), this.indicatorContainer.empty(), this.indicators = []
        }, handleClick: function (a) {
            var b = a.target || a.srcElement, c = b.parentNode;
            if (c === this.indicatorContainer[0]) this.preventDefault(a), this.slide(this.getNodeIndex(b)); else {
                if (c.parentNode !== this.indicatorContainer[0]) return f.call(this, a);
                this.preventDefault(a), this.slide(this.getNodeIndex(c))
            }
        }, handleSlide: function (a) {
            g.call(this, a), this.setActiveIndicator(a)
        }, handleClose: function () {
            this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), h.call(this)
        }
    }), b
}), function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], a) : a(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function (a, b) {
    "use strict";
    a.extend(b.prototype.options, {
        videoContentClass: "video-content",
        videoLoadingClass: "video-loading",
        videoPlayingClass: "video-playing",
        videoPosterProperty: "poster",
        videoSourcesProperty: "sources"
    });
    var c = b.prototype.handleSlide;
    return a.extend(b.prototype, {
        handleSlide: function (a) {
            c.call(this, a), this.playingVideo && this.playingVideo.pause()
        }, videoFactory: function (b, c, d) {
            var e, f, g, h, i, j = this, k = this.options, l = this.elementPrototype.cloneNode(!1), m = a(l), n = [{
                type: "error",
                target: l
            }], o = d || document.createElement("video"), p = this.getItemProperty(b, k.urlProperty), q = this.getItemProperty(b, k.typeProperty), r = this.getItemProperty(b, k.titleProperty), s = this.getItemProperty(b, k.videoPosterProperty), t = this.getItemProperty(b, k.videoSourcesProperty);
            if (m.addClass(k.videoContentClass), r && (l.title = r), o.canPlayType) if (p && q && o.canPlayType(q)) o.src = p; else for (; t && t.length;) if (f = t.shift(), p = this.getItemProperty(f, k.urlProperty), q = this.getItemProperty(f, k.typeProperty), p && q && o.canPlayType(q)) {
                o.src = p;
                break
            }
            return s && (o.poster = s, e = this.imagePrototype.cloneNode(!1), a(e).addClass(k.toggleClass), e.src = s, e.draggable = !1, l.appendChild(e)), g = document.createElement("a"), g.setAttribute("target", "_blank"), d || g.setAttribute("download", r), g.href = p, o.src && (o.controls = !0, (d || a(o)).on("error", function () {
                j.setTimeout(c, n)
            }).on("pause", function () {
                h = !1, m.removeClass(j.options.videoLoadingClass).removeClass(j.options.videoPlayingClass), i && j.container.addClass(j.options.controlsClass), delete j.playingVideo, j.interval && j.play()
            }).on("playing", function () {
                h = !1, m.removeClass(j.options.videoLoadingClass).addClass(j.options.videoPlayingClass), j.container.hasClass(j.options.controlsClass) ? (i = !0, j.container.removeClass(j.options.controlsClass)) : i = !1
            }).on("play", function () {
                window.clearTimeout(j.timeout), h = !0, m.addClass(j.options.videoLoadingClass), j.playingVideo = o
            }), a(g).on("click", function (a) {
                j.preventDefault(a), h ? o.pause() : o.play()
            }), l.appendChild(d && d.element || o)), l.appendChild(g), this.setTimeout(c, [{
                type: "load",
                target: l
            }]), l
        }
    }), b
}), function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery-video"], a) : a(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function (a, b) {
    "use strict";
    if (!window.postMessage) return b;
    a.extend(b.prototype.options, {
        vimeoVideoIdProperty: "vimeo",
        vimeoPlayerUrl: "//player.vimeo.com/video/VIDEO_ID?api=1&player_id=PLAYER_ID",
        vimeoPlayerIdPrefix: "vimeo-player-",
        vimeoClickToPlay: !0
    });
    var c = b.prototype.textFactory || b.prototype.imageFactory, d = function (a, b, c, d) {
        this.url = a, this.videoId = b, this.playerId = c, this.clickToPlay = d, this.element = document.createElement("div"), this.listeners = {}
    }, e = 0;
    return a.extend(d.prototype, {
        canPlayType: function () {
            return !0
        }, on: function (a, b) {
            return this.listeners[a] = b, this
        }, loadAPI: function () {
            for (var b, c, d = this, e = "//" + ("https" === location.protocol ? "secure-" : "") + "a.vimeocdn.com/js/froogaloop2.min.js", f = document.getElementsByTagName("script"), g = f.length, h = function () {
                !c && d.playOnReady && d.play(), c = !0
            }; g;) if (g -= 1, f[g].src === e) {
                b = f[g];
                break
            }
            b || (b = document.createElement("script"), b.src = e), a(b).on("load", h), f[0].parentNode.insertBefore(b, f[0]), /loaded|complete/.test(b.readyState) && h()
        }, onReady: function () {
            var a = this;
            this.ready = !0, this.player.addEvent("play", function () {
                a.hasPlayed = !0, a.onPlaying()
            }), this.player.addEvent("pause", function () {
                a.onPause()
            }), this.player.addEvent("finish", function () {
                a.onPause()
            }), this.playOnReady && this.play()
        }, onPlaying: function () {
            this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2)
        }, onPause: function () {
            this.listeners.pause(), delete this.playStatus
        }, insertIframe: function () {
            var a = document.createElement("iframe");
            a.src = this.url.replace("VIDEO_ID", this.videoId).replace("PLAYER_ID", this.playerId), a.id = this.playerId, this.element.parentNode.replaceChild(a, this.element), this.element = a
        }, play: function () {
            var a = this;
            this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.api("play") : (this.playOnReady = !0, window.$f ? this.player || (this.insertIframe(), this.player = $f(this.element), this.player.addEvent("ready", function () {
                a.onReady()
            })) : this.loadAPI())
        }, pause: function () {
            this.ready ? this.player.api("pause") : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus)
        }
    }), a.extend(b.prototype, {
        VimeoPlayer: d, textFactory: function (a, b) {
            var f = this.getItemProperty(a, this.options.vimeoVideoIdProperty);
            return f ? (e += 1, this.videoFactory(a, b, new d(this.options.vimeoPlayerUrl, f, this.options.vimeoPlayerIdPrefix + e, this.options.vimeoClickToPlay))) : c.call(this, a, b)
        }
    }), b
}), function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery-video"], a) : a(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function (a, b) {
    "use strict";
    if (!window.postMessage) return b;
    a.extend(b.prototype.options, {
        youTubeVideoIdProperty: "youtube",
        youTubePlayerVars: {wmode: "transparent"},
        youTubeClickToPlay: !0
    });
    var c = b.prototype.textFactory || b.prototype.imageFactory, d = function (a, b, c) {
        this.videoId = a, this.playerVars = b, this.clickToPlay = c, this.element = document.createElement("div"), this.listeners = {}
    };
    return a.extend(d.prototype, {
        canPlayType: function () {
            return !0
        }, on: function (a, b) {
            return this.listeners[a] = b, this
        }, loadAPI: function () {
            var a, b = this, c = window.onYouTubeIframeAPIReady, d = "//www.youtube.com/iframe_api", e = document.getElementsByTagName("script"), f = e.length;
            for (window.onYouTubeIframeAPIReady = function () {
                c && c.apply(this), b.playOnReady && b.play()
            }; f;) if (f -= 1, e[f].src === d) return;
            a = document.createElement("script"), a.src = d, e[0].parentNode.insertBefore(a, e[0])
        }, onReady: function () {
            this.ready = !0, this.playOnReady && this.play()
        }, onPlaying: function () {
            this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2)
        }, onPause: function () {
            b.prototype.setTimeout.call(this, this.checkSeek, null, 2e3)
        }, checkSeek: function () {
            (this.stateChange === YT.PlayerState.PAUSED || this.stateChange === YT.PlayerState.ENDED) && (this.listeners.pause(), delete this.playStatus)
        }, onStateChange: function (a) {
            switch (a.data) {
                case YT.PlayerState.PLAYING:
                    this.hasPlayed = !0, this.onPlaying();
                    break;
                case YT.PlayerState.PAUSED:
                case YT.PlayerState.ENDED:
                    this.onPause()
            }
            this.stateChange = a.data
        }, onError: function (a) {
            this.listeners.error(a)
        }, play: function () {
            var a = this;
            this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.playVideo() : (this.playOnReady = !0, window.YT && YT.Player ? this.player || (this.player = new YT.Player(this.element, {
                videoId: this.videoId,
                playerVars: this.playerVars,
                events: {
                    onReady: function () {
                        a.onReady()
                    }, onStateChange: function (b) {
                        a.onStateChange(b)
                    }, onError: function (b) {
                        a.onError(b)
                    }
                }
            })) : this.loadAPI())
        }, pause: function () {
            this.ready ? this.player.pauseVideo() : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus)
        }
    }), a.extend(b.prototype, {
        YouTubePlayer: d, textFactory: function (a, b) {
            var e = this.getItemProperty(a, this.options.youTubeVideoIdProperty);
            return e ? this.videoFactory(a, b, new d(e, this.options.youTubePlayerVars, this.options.youTubeClickToPlay)) : c.call(this, a, b)
        }
    }), b
}), function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "./blueimp-gallery"], a) : a(window.jQuery, window.blueimp.Gallery)
}(function (a, b) {
    "use strict";
    a(document).on("click", "[data-gallery]", function (c) {
        var d = a(this).data("gallery"), e = a(d), f = e.length && e || a(b.prototype.options.container), g = {
            onopen: function () {
                f.data("gallery", this).trigger("open")
            }, onopened: function () {
                f.trigger("opened")
            }, onslide: function () {
                f.trigger("slide", arguments)
            }, onslideend: function () {
                f.trigger("slideend", arguments)
            }, onslidecomplete: function () {
                f.trigger("slidecomplete", arguments)
            }, onclose: function () {
                f.trigger("close")
            }, onclosed: function () {
                f.trigger("closed").removeData("gallery")
            }
        }, h = a.extend(f.data(), {container: f[0], index: this, event: c}, g), i = a('[data-gallery="' + d + '"]');
        return h.filter && (i = i.filter(h.filter)), new b(i, h)
    })
});
!function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "./blueimp-gallery"], a) : a(window.jQuery, window.blueimp.Gallery)
}(function (a, b) {
    "use strict";
    a.extend(b.prototype.options, {useBootstrapModal: !0});
    var c = b.prototype.close, d = b.prototype.imageFactory, e = b.prototype.videoFactory, f = b.prototype.textFactory;
    a.extend(b.prototype, {
        modalFactory: function (a, b, c, d) {
            if (!this.options.useBootstrapModal || c) return d.call(this, a, b, c);
            var e = this, f = this.container.children(".modal"), g = f.clone().show().on("click", function (a) {
                (a.target === g[0] || a.target === g.children()[0]) && (a.preventDefault(), a.stopPropagation(), e.close())
            }), h = d.call(this, a, function (a) {
                b({type: a.type, target: g[0]}), g.addClass("in")
            }, c);
            return g.find(".modal-title").text(h.title || String.fromCharCode(160)), g.find(".modal-body").append(h), g[0]
        }, imageFactory: function (a, b, c) {
            return this.modalFactory(a, b, c, d)
        }, videoFactory: function (a, b, c) {
            return this.modalFactory(a, b, c, e)
        }, textFactory: function (a, b, c) {
            return this.modalFactory(a, b, c, f)
        }, close: function () {
            this.container.find(".modal").removeClass("in"), c.call(this)
        }
    })
});
(function (a) {
    a.fn.scrollToTop = function (c) {
        var d = {speed: 800};
        c && a.extend(d, {speed: c});
        return this.each(function () {
            var b = a(this);
            a(window).scroll(function () {
                100 < a(this).scrollTop() ? b.fadeIn() : b.fadeOut()
            });
            b.click(function (b) {
                b.preventDefault();
                a("body, html").animate({scrollTop: 0}, d.speed)
            })
        })
    }
})(jQuery);
function BindPropertyType(e, t) {
    var n = $(e).val(), a = t;
    $.ajax({
        type: "POST",
        url: dm + "Services/AjaxService.asmx/GetPropertyType",
        dataType: "json",
        data: JSON.stringify({code: a}),
        contentType: "application/json; charset=utf-8",
        success: function (t) {
            var a = jQuery.parseJSON(t.d.toString());
            $(e).find("option").remove().end(), $.each(a, function (t, n) {
                $(e).append($("<option></option>").attr("value", t.replace("J", "")).text(n))
            }), $(e).val(n)
        },
        error: function () {
        }
    })
}
function BindPropertyTypePostProperty(e, t) {
    var n = $(e).val(), a = t;
    $.ajax({
        type: "POST",
        url: dm + "Services/AjaxService.asmx/GetPropertyTypePostProperty",
        dataType: "json",
        data: JSON.stringify({code: a}),
        contentType: "application/json; charset=utf-8",
        success: function (t) {
            var a = jQuery.parseJSON(t.d.toString());
            $(e).find("option").remove().end(), $.each(a, function (t, n) {
                $(e).append($("<option></option>").attr("value", t.replace("J", "")).text(n))
            }), $(e).val(n)
        },
        error: function () {
        }
    })
}
function BindPropertyTypeWithGroup(e, t) {
    var n = $(e).val(), a = t;
    $.ajax({
        type: "POST",
        url: dm + "Services/AjaxService.asmx/GetPropertyTypeWithGroup",
        dataType: "json",
        data: JSON.stringify({code: a}),
        contentType: "application/json; charset=utf-8",
        success: function (t) {
            var a = jQuery.parseJSON(t.d.toString());
            $(e).find("option").remove().end(), $.each(a, function (t, n) {
                $(e).append($("<option></option>").attr("value", t.replace("J", "")).text(n))
            }), $(e).val(n)
        },
        error: function () {
        }
    })
}
function BindPropertyTypeddlWithGroup(e, t) {
    var n = $(e).val(), a = t;
    $.ajax({
        type: "POST",
        url: dm + "Services/AjaxService.asmx/GetPropertyTypeddlWithGroup",
        dataType: "json",
        data: JSON.stringify({code: a}),
        contentType: "application/json; charset=utf-8",
        success: function (t) {
            var a = jQuery.parseJSON(t.d.toString());
            $(e).find("option").remove().end(), $.each(a, function (t, n) {
                $(e).append($("<option></option>").attr("value", t.replace("J", "")).text(n))
            }), $(e).val(n)
        },
        error: function () {
        }
    })
}
function BindTransaction(e) {
    $.ajax({
        type: "POST",
        url: "ajaxService.asmx/GetTransaction",
        dataType: "json",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        success: function (t) {
            var n = jQuery.parseJSON(t.d.toString());
            $(e).find("option").remove().end(), $.each(n, function (t, n) {
                $(e).append($("<option></option>").attr("value", t.replace("J", "")).text(n))
            })
        },
        error: function () {
        }
    })
}
function BindGroupTypeName(e, t) {
    var n = $(t).val();
    $.ajax({
        type: "POST",
        url: "ajaxService.asmx/GetGroupTypeName",
        dataType: "json",
        data: JSON.stringify({code: n}),
        contentType: "application/json; charset=utf-8",
        success: function (t) {
            var n = jQuery.parseJSON(t.d.toString());
            $(e).find("option").remove().end(), $.each(n, function (t, n) {
                $(e).append($("<option></option>").attr("value", t.replace("J", "")).text(n))
            })
        },
        error: function () {
        }
    })
}
function BindCountry(e) {
    $.ajax({
        type: "POST",
        url: "ajaxService.asmx/GetCountry",
        dataType: "json",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        success: function (t) {
            var n = jQuery.parseJSON(t.d.toString());
            $(e).find("option").remove().end(), $.each(n, function (t, n) {
                $(e).append($("<option></option>").attr("value", t.replace("J", "")).text(n))
            })
        },
        error: function () {
        }
    })
}
function BindState(e, t, n, a) {
    var o = $(t).val();
    $.ajax({
        type: "POST",
        url: dm + "Services/AjaxService.asmx/GetState",
        dataType: "json",
        data: JSON.stringify({code: o}),
        contentType: "application/json; charset=utf-8",
        success: function (t) {
            var o = jQuery.parseJSON(t.d.toString());
            $(e).find("option").remove().end(), $.each(o, function (t, n) {
                $(e).append($("<option></option>").attr("value", t.replace("J", "")).text(n))
            }), BindCity(n, e, a)
        },
        error: function () {
        }
    })
}
function BindCity(e, t, n) {
    var a = $(t).val();
    $.ajax({
        type: "POST",
        url: dm + "Services/AjaxService.asmx/GetCity",
        dataType: "json",
        data: JSON.stringify({code: a}),
        contentType: "application/json; charset=utf-8",
        success: function (t) {
            var a = jQuery.parseJSON(t.d.toString());
            $(e).find("option").remove().end(), $.each(a, function (t, n) {
                $(e).append($("<option></option>").attr("value", t.replace("J", "")).text(n))
            }), BindLocality(n, e)
        },
        error: function () {
        }
    })
}
function BindLocality(e, t) {
    var n = $(t).val();
    $.ajax({
        type: "POST",
        url: dm + "Services/AjaxService.asmx/GetLocality",
        dataType: "json",
        data: JSON.stringify({code: n}),
        contentType: "application/json; charset=utf-8",
        success: function (t) {
            var n = jQuery.parseJSON(t.d.toString());
            $(e).find("option").remove().end(), $.each(n, function (t, n) {
                $(e).append($("<option></option>").attr("value", t.replace("J", "")).text(n))
            })
        },
        error: function () {
        }
    })
}
function BindLocalityOther(e, t) {
    var n = $(t).val();
    $.ajax({
        type: "POST",
        url: dm + "Services/AjaxService.asmx/GetLocalityOther",
        dataType: "json",
        data: JSON.stringify({code: n}),
        contentType: "application/json; charset=utf-8",
        success: function (t) {
            var n = jQuery.parseJSON(t.d.toString());
            $(e).find("option").remove().end(), $.each(n, function (t, n) {
                $(e).append($("<option></option>").attr("value", t.replace("J", "")).text(n))
            })
        },
        error: function () {
        }
    })
}
function BindStateOther(e, t, n, a) {
    var o = $(t).val();
    $.ajax({
        type: "POST",
        url: dm + "Services/AjaxService.asmx/GetStateOther",
        dataType: "json",
        data: JSON.stringify({code: o}),
        contentType: "application/json; charset=utf-8",
        success: function (t) {
            var o = jQuery.parseJSON(t.d.toString());
            $(e).find("option").remove().end(), $.each(o, function (t, n) {
                $(e).append($("<option></option>").attr("value", t.replace("J", "")).text(n))
            }), BindCityOther(n, e, a)
        },
        error: function () {
        }
    })
}
function BindCityOther(e, t) {
    var n = $(t).val();
    $.ajax({
        type: "POST",
        url: dm + "Services/AjaxService.asmx/GetCityOther",
        dataType: "json",
        data: JSON.stringify({code: n}),
        contentType: "application/json; charset=utf-8",
        success: function (t) {
            var n = jQuery.parseJSON(t.d.toString());
            $(e).find("option").remove().end(), $.each(n, function (t, n) {
                $(e).append($("<option></option>").attr("value", t.replace("J", "")).text(n))
            })
        },
        error: function () {
        }
    })
}
function split(e) {
    return e.split(/,\s*/)
}
function extractLast(e) {
    return split(e).pop()
}
function AutoSuggestLocality(e, t) {
    var n = extractLast(e.value), a = $(t).val();
    n.length > 2 && 1 != a ? $.ajax({
        type: "POST",
        url: dm + "Services/AjaxService.asmx/GetLocalityAutoSuggest",
        dataType: "json",
        data: JSON.stringify({code: a, prefix: n}),
        contentType: "application/json; charset=utf-8",
        success: function (t) {
            var n = t.d.split(":");
            $(e).bind("keydown", function (e) {
                e.keyCode === $.ui.keyCode.TAB && $(this).data("autocomplete").menu.active && e.preventDefault()
            }).autocomplete({
                minLength: 0, source: function (e, t) {
                    t($.ui.autocomplete.filter(n, extractLast(e.term)))
                }, focus: function () {
                    return !1
                }, select: function (e, t) {
                    var n = split(this.value);
                    return n.pop(), n.push(t.item.value), n.push(""), this.value = n.join(", "), !1
                }
            })
        },
        error: function () {
        }
    }) : $(e).autocomplete("destroy")
}
function ClearIt(e) {
    e.value = ""
}
function BindBudget(e, t, n) {
    var a = t;
    $.ajax({
        type: "POST",
        url: dm + "Services/AjaxService.asmx/GetBudget",
        dataType: "json",
        data: JSON.stringify({code: a, top: n}),
        contentType: "application/json; charset=utf-8",
        success: function (t) {
            var n = jQuery.parseJSON(t.d.toString());
            $(e).find("option").remove().end(), $.each(n, function (t, n) {
                $(e).append($("<option></option>").attr("value", t.replace("J", "")).text(n))
            })
        },
        error: function () {
        }
    })
}
function BedroomShowHide(e, t, n) {
    3 == t.value || 4 == t.value || 5 == t.value || 6 == t.value || 12 == t.value || 14 == t.value || 22 == t.value || 24 == t.value || 25 == t.value || 27 == t.value || 28 == t.value || 35 == t.value || 39 == t.value || 40 == t.value || 41 == t.value ? $(e).show("slow") : ($(e).hide("slow"), n.options.selectedIndex = "0")
}
function BedroomSpanShowHide(e, t, n) {
    3 == e.value || 4 == e.value || 5 == e.value || 6 == e.value || 12 == e.value || 14 == e.value || 22 == e.value || 24 == e.value || 25 == e.value || 41 == e.value ? (document.getElementById("bedroomDivProperty").removeAttribute("disabled"), document.getElementById("bedroomDiv" + n).style.display = "", document.getElementById("bedroomImgDiv" + n).style.display = "none") : (document.getElementById("bedroomDivProperty").setAttribute("disabled", "disabled"), document.getElementById("bedroomImgDiv" + n).style.display = "", checkBoxDeSelection("bedroomDiv" + n), document.getElementById("lblBedroom" + n).value = "-- All --", $(t).val(""))
}
function showBedroom(e) {
    document.getElementById("divProBed" + e).style.display = "none" != document.getElementById("divProBed" + e).style.display ? "none" : "block"
}
function SetdllValue(e, t) {
    e.selectedIndex = t
}
function getQuerystring(e, t) {
    null == t && (t = ""), e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var n = new RegExp("[\\?&]" + e + "=([^&#]*)"), a = n.exec(window.location.href);
    return null == a ? t : a[1]
}
function CheckAllPostedBy(e, t, n, a) {
    t.checked = e.checked, n.checked = e.checked, a.checked = e.checked
}
function CheckAll(e, t, n, a) {
    e.checked = t.checked && n.checked && a.checked ? !0 : !1
}
function NearByLocality(e, t) {
    e.value.length > 0 ? ($(t).show("slow"), t.style.display = "", t.style.visibility = "visible") : ($(t).hide(), t.style.display = "none", t.style.visibility = "hidden")
}
function showNextSpan(e) {
    indexCount++;
    var t = indexCount + e;
    document.getElementById(t) && (document.getElementById(t).style.display = ""), indexCount >= 15 && (document.getElementById("addMoreLink").style.display = "none")
}
function EnableDisable(e, t, n, a, o, i, r, c, d, l, u, s, m, p, y, v, f, g, h, S) {
    var E, B, T;
    E = document.getElementById(t), VED(E, $(e).is(":checked")), B = document.getElementById(n), VED(B, $(e).is(":checked")), T = document.getElementById(a), VED(T, $(e).is(":checked")), E = document.getElementById(i), VED(E, $(o).is(":checked")), B = document.getElementById(r), VED(B, $(o).is(":checked")), T = document.getElementById(c), VED(T, $(o).is(":checked")), E = document.getElementById(l), VED(E, $(d).is(":checked")), B = document.getElementById(u), VED(B, $(d).is(":checked")), T = document.getElementById(s), VED(T, $(d).is(":checked")), E = document.getElementById(p), VED(E, $(m).is(":checked")), B = document.getElementById(y), VED(B, $(m).is(":checked")), T = document.getElementById(v), VED(T, $(m).is(":checked")), E = document.getElementById(g), VED(E, $(f).is(":checked")), B = document.getElementById(h), VED(B, $(f).is(":checked")), T = document.getElementById(S), VED(T, $(f).is(":checked"))
}
function EnableDisablePrimary(e, t, n, a, o, i, r, c, d, l, u, s, m, p, y) {
    var v, f;
    f = document.getElementById(n), f.value || (v = document.getElementById(t), VED(v, $(e).is(":checked"))), f = document.getElementById(i), f.value || (v = document.getElementById(o), VED(v, $(a).is(":checked"))), f = document.getElementById(d), f.value || (v = document.getElementById(c), VED(v, $(r).is(":checked"))), f = document.getElementById(s), f.value || (v = document.getElementById(u), VED(v, $(l).is(":checked"))), f = document.getElementById(y), f.value || (v = document.getElementById(p), VED(v, $(m).is(":checked")))
}
function DuplicateMobileNo(e, t, n) {
    if (n.enabled) {
        var a = $(e).val(), o = $(t).val();
        a && o ? $.ajax({
            type: "POST",
            url: dm + "Services/AjaxService.asmx/GetMobileNo",
            dataType: "json",
            data: JSON.stringify({isdCode: a, mobileNo: o}),
            contentType: "application/json; charset=utf-8",
            async: !1,
            success: function (e) {
                n.style.display = "true" == e.d.toString() ? "none" : ""
            },
            error: function () {
                alert("Mobile Error")
            }
        }) : n.style.display = "none"
    }
}
function textAreaCharacterCounterTrim(e, t, n) {
    null != e && (e.value.length > t ? e.value = e.value.substring(0, t) : n.innerHTML = t - e.value.length)
}
function initialize() {
    GBrowserIsCompatible() && (map = new GMap2(document.getElementById("map_canvas")), map.setCenter(new GLatLng(28.635308, 77.22496), 13), map.setUIToDefault(), geocoder = new GClientGeocoder, showAddress(address))
}
function showAddress(e) {
    geocoder && geocoder.getLatLng(e, function (t) {
        if (t) {
            map.setCenter(t, 13);
            var n = new GMarker(t);
            map.addOverlay(n), null != mapContent && "" != mapContent && "undefined" != mapContent && (n.openInfoWindowHtml(mapContent), GEvent.addListener(n, "click", function () {
                n.openInfoWindowHtml(mapContent)
            }))
        } else showAddress(e.substring(0, e.indexOf(",")))
    })
}
function initializeNoContent() {
    GBrowserIsCompatible() && (map = new GMap2(document.getElementById("map_canvas")), map.setCenter(new GLatLng(28.635308, 77.22496), 13), map.setUIToDefault(), geocoder = new GClientGeocoder, showAddressNoContent(address))
}
function showAddressNoContent(e) {
    geocoder && geocoder.getLatLng(e, function (t) {
        if (t) {
            map.setCenter(t, 13);
            var n = new GMarker(t);
            map.addOverlay(n)
        } else showAddress(e.substring(0, e.indexOf(",")))
    })
}
function GetCountryISDCode(e, t) {
    var n = e;
    $.ajax({
        type: "POST",
        url: dm + "Services/AjaxService.asmx/GetCountryISDCode",
        dataType: "json",
        data: JSON.stringify({code: n}),
        contentType: "application/json; charset=utf-8",
        success: function (e) {
            $(t).val(e.d.toString())
        },
        error: function () {
        }
    })
}
function VED(e, t) {
    ValidatorEnable(e, t), t && (e.isvalid = !0, ValidatorUpdateDisplay(e))
}
function DeleteAllEnableOnCheck(e, t) {
    for (var n = document.getElementById(e), a = n.getElementsByTagName("input"), o = 0; o < a.length; o++)if (a[o].checked)return void $("#" + t).removeAttr("disabled");
    $("#" + t).attr("disabled", "disabled")
}
function IsSelected(e, t) {
    for (var n = !1, a = e.getElementsByTagName("input"), o = 0; o < a.length; o++)a[o].checked && (n = !0);
    n ? $(t).show() : $(t).hide()
}
function ValidateLandLine(e, t, n, a, o, i) {
    var r = ValidatorGetValue(e), c = ValidatorGetValue(t), d = ValidatorGetValue(n), l = document.getElementById(a), u = document.getElementById(o), s = document.getElementById(i);
    0 != ValidatorTrim(r).length + ValidatorTrim(c).length + ValidatorTrim(d).length ? (ValidatorEnable(l, !0), ValidatorEnable(u, !0), ValidatorEnable(s, !0)) : (VED(l, !1), VED(u, !1), VED(s, !1))
}
function showTab(e, t) {
    document.getElementById("tab" + e).style.display = "", document.getElementById("tab" + t).style.display = "none", document.getElementById(e + "_li").className = "currentLink-bottom", document.getElementById(t + "_li").className = "", document.getElementById(e + "_link").style = "padding-top: 5px;padding-bottom: 5px;", document.getElementById(t + _link).style = ""
}
function checkBoxSelectionValidation(e, t) {
    for (var n = document.getElementById(e), a = n.getElementsByTagName("input"), o = 0, i = 0; i < a.length; i++)a[i].checked && o++;
    return o > t ? !1 : !0
}
function checkBoxIsSelectValidation(e) {
    for (var t = document.getElementById(e), n = t.getElementsByTagName("input"), a = 0, o = 0; o < n.length; o++)n[o].checked && a++;
    return a > 0 ? !0 : !1
}
function checkBoxDeSelection(e) {
    for (var t = document.getElementById(e), n = t.getElementsByTagName("input"), a = 0; a < n.length; a++)n[a].checked = !1
}
function checkBoxCount(e) {
    var t = document.getElementById(e), n = t.getElementsByTagName("input");
    return n.length
}
function checkBoxSelectionCount(e) {
    for (var t = document.getElementById(e), n = t.getElementsByTagName("input"), a = 0, o = 0; o < n.length; o++)n[o].checked && a++;
    return a
}
function ValidateFileSize(e) {
    var t, n;
    return t = document.getElementById(e), t.files && t.files[0] && (n = t.files[0], n.size > 10485760) ? !1 : !0
}
function ValidateFileRequired(e) {
    var t;
    return t = document.getElementById(e), t.files[0]
}
function clearFileInput(e, t, n) {
    var a = document.getElementById(t), o = document.getElementById(n), i = document.getElementById(e), r = document.createElement("input");
    r.type = "file", r.id = i.id, r.name = i.name, r.className = i.className, r.style.cssText = i.style.cssText, i.parentNode.replaceChild(r, i), $(a).hide(), $(o).hide()
}
function GetUnitToUnit(e, t, n, a) {
    var o = document.getElementById(e).innerHTML, i = document.getElementById(t).value, r = document.getElementById(n).innerHTML;
    $.ajax({
        type: "POST",
        url: dm + "Services/AjaxService.asmx/GetUnitToUnit",
        dataType: "json",
        data: JSON.stringify({from: o, to: i, value: r}),
        contentType: "application/json; charset=utf-8",
        success: function (e) {
            var t = jQuery.parseJSON(e.d.toString());
            document.getElementById(a).innerHTML = t
        },
        error: function () {
        }
    })
}
function LocalityValidate(e) {
    var t = e.split(","), n = !1;
    for (i = 0; i < t.length; i++)t[i] && t[i].length < 3 && (n = !0);
    return n ? !1 : !0
}
function KeywordValidate(e, t) {
    var n = e.split(","), a = 0;
    for (i = 0; i < n.length; i++)n[i] && a++;
    return 0 != t && a > t ? !1 : !0
}
function processMenu(e, t) {
    var n = e.substring(t.length, e.length), a = document.getElementById(e), o = a.getElementsByTagName("div")[0], i = a.getElementsByTagName("img")[0], r = document.getElementsByTagName("div");
    if ("none" == o.style.display) {
        for (var c = 0; c <= r.length; c++) {
            var d = r[c];
            void 0 != d && null != d.id && "" != d.id && d.id != t && -1 != d.id.indexOf(t) && (void 0 != d.getElementsByTagName("div")[0] && (d.getElementsByTagName("div")[0].style.display = "none"), void 0 != d.getElementsByTagName("img")[0] && (d.getElementsByTagName("img")[0].src = dm + "images/plus.gif"))
        }
        i.src = dm + "images/minus.gif", document.getElementById("submenu_" + n).style.display = "block", locLoaded[n] ? showLocalitySelected(n) : (document.getElementById("loader_" + n).style.display = "block", setTimeout(function () {
            fillLocationData(n), showLocalitySelected(n), document.getElementById("loader_" + n).style.display = "none", locLoaded[n] = "true"
        }, "1000"))
    } else o.style.display = "none", i.src = dm + "images/plus.gif"
}
function NumberToWords(e, t) {
    function n() {
        u[j] = 0 == actnumber[i] ? "" : 1 == actnumber[i] ? c[actnumber[i - 1]] : d[actnumber[i]]
    }

    var a = e;
    a = a.replace(/,/g, ""), a = a.replace(/_/g, ""), a = Math.floor(a);
    var o = String(a);
    if (numReversed = o.split(""), actnumber = numReversed.reverse(), !(Number(a) >= 0))return !1;
    if (0 == Number(a))return document.getElementById(t).innerHTML = "", !1;
    if (actnumber.length > 11)return !1;
    var r = ["Zero", " One", " Two", " Three", " Four", " Five", " Six", " Seven", " Eight", " Nine"], c = ["Ten", " Eleven", " Twelve", " Thirteen", " Fourteen", " Fifteen", " Sixteen", " Seventeen", " Eighteen", " Nineteen"], d = ["dummy", " Ten", " Twenty", " Thirty", " Forty", " Fifty", " Sixty", " Seventy", " Eighty", " Ninety"], l = numReversed.length, u = [], s = "";
    for (j = 0, i = 0; l > i; i++) {
        switch (i) {
            case 0:
                u[j] = 0 == actnumber[i] || 1 == actnumber[i + 1] ? "" : r[actnumber[i]], u[j] = u[j] + " Only";
                break;
            case 1:
                n();
                break;
            case 2:
                u[j] = 0 == actnumber[i] ? "" : 0 != actnumber[i - 1] && 0 != actnumber[i - 2] ? r[actnumber[i]] + " Hundred and" : r[actnumber[i]] + " Hundred";
                break;
            case 3:
                u[j] = 0 == actnumber[i] || 1 == actnumber[i + 1] ? "" : r[actnumber[i]], (0 != actnumber[i + 1] || actnumber[i] > 0) && (u[j] = u[j] + " Thousand");
                break;
            case 4:
                n();
                break;
            case 5:
                u[j] = 0 == actnumber[i] || 1 == actnumber[i + 1] ? "" : r[actnumber[i]], (0 != actnumber[i + 1] || actnumber[i] > 0) && (u[j] = u[j] + " Lakh");
                break;
            case 6:
                n();
                break;
            case 7:
                u[j] = 0 == actnumber[i] || 1 == actnumber[i + 1] ? "" : r[actnumber[i]], u[j] = u[j] + " Crore";
                break;
            case 8:
                n();
                break;
            case 9:
                u[j] = 0 == actnumber[i] || 1 == actnumber[i + 1] ? "" : r[actnumber[i]], u[j] = u[j] + " Arab";
                break;
            case 10:
                n()
        }
        j++
    }
    for (u.reverse(), i = 0; i < u.length; i++)s += u[i];
    document.getElementById(t).innerHTML = "Rupees " + s
}
function bsd(e, t) {
    Page_ClientValidate(t) && $(e).button("loading")
}
function bsdbt(e, t) {
    Page_ClientValidate(t) && $(e).button("loading")
}
function bsdNoValidate(e) {
    $(e).button("loading")
}
function bsdLinkNoValidate(e) {
    $("div.overlay").fadeToggle("fast"), $(e).hide()
}
function getE(e) {
    if (document.getElementById)var t = document.getElementById(e); else if (document.all)var t = document.all[e]; else if (document.layers)var t = document.layers[e];
    return t
}
function DropDownMenu() {
    $(".dropdown-menu").on("click", function (e) {
        $(this).hasClass("dropdown-menu-form") && e.stopPropagation()
    })
}
var indexCount = 1, geocoder = null, address, mapContent, map;