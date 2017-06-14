! function e(t, r, i) {
    function n(a, s) {
        if (!r[a]) {
            if (!t[a]) {
                var h = "function" == typeof require && require;
                if (!s && h) return h(a, !0);
                if (o) return o(a, !0);
                throw new Error("Cannot find module '" + a + "'") }
            var l = r[a] = { exports: {} };
            t[a][0].call(l.exports, function(e) {
                var r = t[a][1][e];
                return n(r ? r : e) }, l, l.exports, e, t, r, i) }
        return r[a].exports }
    for (var o = "function" == typeof require && require, a = 0; a < i.length; a++) n(i[a]);
    return n }({
    1: [function(e, t) { t.exports = function() {
            return function(e) {
                var t = function(e, t) { e.classList.add("bespoke-" + t) },
                    r = function(e, t) { e.className = e.className.replace(new RegExp("bespoke-" + t + "(\\s|$)", "g"), " ").trim() },
                    i = function(i, n) {
                        var o = e.slides[e.slide()],
                            a = n - e.slide(),
                            s = a > 0 ? "after" : "before";
                        ["before(-\\d+)?", "after(-\\d+)?", "active", "inactive"].map(r.bind(null, i)), i !== o && ["inactive", s, s + "-" + Math.abs(a)].map(t.bind(null, i)) };
                t(e.parent, "parent"), e.slides.map(function(e) { t(e, "slide") }), e.on("activate", function(n) { e.slides.map(i), t(n.slide, "active"), r(n.slide, "inactive") }) } } }, {}],
    2: [function(e, t) { t.exports = function() {
            return function(e) {
                var t = function() {
                        var t = window.location.hash.slice(1),
                            i = parseInt(t, 10);
                        t && (i ? r(i - 1) : e.slides.forEach(function(e, i) { e.getAttribute("data-bespoke-hash") === t && r(i) })) },
                    r = function(t) {
                        var r = t > -1 && t < e.slides.length ? t : 0;
                        r !== e.slide() && e.slide(r) };
                setTimeout(function() { t(), e.on("activate", function(e) {
                        var t = e.slide.getAttribute("data-bespoke-hash");
                        window.location.hash = t || e.index + 1 }), window.addEventListener("hashchange", t) }, 0) } } }, {}],
    3: [function(e, t) { t.exports = function(e) {
            return function(t) {
                var r = "vertical" !== e;
                document.addEventListener("keydown", function(e) {
                    (34 == e.which || 32 == e.which || r && 39 == e.which || !r && 40 == e.which) && t.next(), (33 == e.which || r && 37 == e.which || !r && 38 == e.which) && t.prev() }) } } }, {}],
    4: [function(e, t) { t.exports = function(e) {
            return function(t) {
                var r, i, n = "vertical" == e ? "Y" : "X";
                t.parent.addEventListener("touchstart", function(e) { 1 == e.touches.length && (r = e.touches[0]["page" + n], i = 0) }), t.parent.addEventListener("touchmove", function(e) { 1 == e.touches.length && (e.preventDefault(), i = e.touches[0]["page" + n] - r) }), t.parent.addEventListener("touchend", function() { Math.abs(i) > 50 && t[i > 0 ? "prev" : "next"]() }) } } }, {}],
    5: [function(e, t) {
        var r = function(e, t) {
            var r = 1 === e.nodeType ? e : document.querySelector(e),
                i = [].filter.call(r.children, function(e) {
                    return "SCRIPT" !== e.nodeName }),
                n = i[0],
                o = {},
                a = function(e, t) { i[e] && (c("deactivate", u(n, t)), n = i[e], c("activate", u(n, t))) },
                s = function(e, t) {
                    return arguments.length ? (c("slide", u(i[e], t)) && a(e, t), void 0) : i.indexOf(n) },
                h = function(e, t) {
                    var r = i.indexOf(n) + e;
                    c(e > 0 ? "next" : "prev", u(n, t)) && a(r, t) },
                l = function(e, t) {
                    return (o[e] || (o[e] = [])).push(t),
                        function() { o[e] = o[e].filter(function(e) {
                                return e !== t }) } },
                c = function(e, t) {
                    return (o[e] || []).reduce(function(e, r) {
                        return e && r(t) !== !1 }, !0) },
                u = function(e, t) {
                    return t = t || {}, t.index = i.indexOf(e), t.slide = e, t },
                p = { on: l, fire: c, slide: s, next: h.bind(null, 1), prev: h.bind(null, -1), parent: r, slides: i };
            return (t || []).forEach(function(e) { e(p) }), a(0), p };
        t.exports = { from: r } }, {}],
    6: [function(e, t, r) {
        var i = i || {},
            n = { REVISION: "70" };
        "object" == typeof t && (t.exports = n), void 0 === Math.sign && (Math.sign = function(e) {
                return 0 > e ? -1 : e > 0 ? 1 : 0 }), n.MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2 }, n.CullFaceNone = 0, n.CullFaceBack = 1, n.CullFaceFront = 2, n.CullFaceFrontBack = 3, n.FrontFaceDirectionCW = 0, n.FrontFaceDirectionCCW = 1, n.BasicShadowMap = 0, n.PCFShadowMap = 1, n.PCFSoftShadowMap = 2, n.FrontSide = 0, n.BackSide = 1, n.DoubleSide = 2, n.NoShading = 0, n.FlatShading = 1, n.SmoothShading = 2, n.NoColors = 0, n.FaceColors = 1, n.VertexColors = 2, n.NoBlending = 0, n.NormalBlending = 1, n.AdditiveBlending = 2, n.SubtractiveBlending = 3, n.MultiplyBlending = 4, n.CustomBlending = 5, n.AddEquation = 100, n.SubtractEquation = 101, n.ReverseSubtractEquation = 102, n.MinEquation = 103, n.MaxEquation = 104, n.ZeroFactor = 200, n.OneFactor = 201, n.SrcColorFactor = 202, n.OneMinusSrcColorFactor = 203, n.SrcAlphaFactor = 204, n.OneMinusSrcAlphaFactor = 205, n.DstAlphaFactor = 206, n.OneMinusDstAlphaFactor = 207, n.DstColorFactor = 208, n.OneMinusDstColorFactor = 209, n.SrcAlphaSaturateFactor = 210, n.MultiplyOperation = 0, n.MixOperation = 1, n.AddOperation = 2, n.UVMapping = 300, n.CubeReflectionMapping = 301, n.CubeRefractionMapping = 302, n.EquirectangularReflectionMapping = 303, n.EquirectangularRefractionMapping = 304, n.SphericalReflectionMapping = 305, n.RepeatWrapping = 1e3, n.ClampToEdgeWrapping = 1001, n.MirroredRepeatWrapping = 1002, n.NearestFilter = 1003, n.NearestMipMapNearestFilter = 1004, n.NearestMipMapLinearFilter = 1005, n.LinearFilter = 1006, n.LinearMipMapNearestFilter = 1007, n.LinearMipMapLinearFilter = 1008, n.UnsignedByteType = 1009, n.ByteType = 1010, n.ShortType = 1011, n.UnsignedShortType = 1012, n.IntType = 1013, n.UnsignedIntType = 1014, n.FloatType = 1015, n.UnsignedShort4444Type = 1016, n.UnsignedShort5551Type = 1017, n.UnsignedShort565Type = 1018, n.AlphaFormat = 1019, n.RGBFormat = 1020, n.RGBAFormat = 1021, n.LuminanceFormat = 1022, n.LuminanceAlphaFormat = 1023, n.RGBEFormat = n.RGBAFormat, n.RGB_S3TC_DXT1_Format = 2001, n.RGBA_S3TC_DXT1_Format = 2002, n.RGBA_S3TC_DXT3_Format = 2003, n.RGBA_S3TC_DXT5_Format = 2004, n.RGB_PVRTC_4BPPV1_Format = 2100, n.RGB_PVRTC_2BPPV1_Format = 2101, n.RGBA_PVRTC_4BPPV1_Format = 2102, n.RGBA_PVRTC_2BPPV1_Format = 2103, n.Projector = function() { console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function(e, t) { console.warn("THREE.Projector: .projectVector() is now vector.project()."), e.project(t) }, this.unprojectVector = function(e, t) { console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), e.unproject(t) }, this.pickingRay = function() { console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().") } }, n.CanvasRenderer = function() { console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElement("canvas"), this.clear = function() {}, this.render = function() {}, this.setClearColor = function() {}, this.setSize = function() {} }, n.Color = function(e) {
                return 3 === arguments.length ? this.setRGB(arguments[0], arguments[1], arguments[2]) : this.set(e) }, n.Color.prototype = { constructor: n.Color, r: 1, g: 1, b: 1, set: function(e) {
                    return e instanceof n.Color ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this }, setHex: function(e) {
                    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this }, setRGB: function(e, t, r) {
                    return this.r = e, this.g = t, this.b = r, this }, setHSL: function(e, t, r) {
                    if (0 === t) this.r = this.g = this.b = r;
                    else {
                        var i = function(e, t, r) {
                                return 0 > r && (r += 1), r > 1 && (r -= 1), 1 / 6 > r ? e + 6 * (t - e) * r : .5 > r ? t : 2 / 3 > r ? e + 6 * (t - e) * (2 / 3 - r) : e },
                            n = .5 >= r ? r * (1 + t) : r + t - r * t,
                            o = 2 * r - n;
                        this.r = i(o, n, e + 1 / 3), this.g = i(o, n, e), this.b = i(o, n, e - 1 / 3) }
                    return this }, setStyle: function(e) {
                    if (/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(e)) {
                        var t = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(e);
                        return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, this }
                    if (/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(e)) {
                        var t = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(e);
                        return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, this }
                    if (/^\#([0-9a-f]{6})$/i.test(e)) {
                        var t = /^\#([0-9a-f]{6})$/i.exec(e);
                        return this.setHex(parseInt(t[1], 16)), this }
                    if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(e)) {
                        var t = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(e);
                        return this.setHex(parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3], 16)), this }
                    return /^(\w+)$/i.test(e) ? (this.setHex(n.ColorKeywords[e]), this) : void 0 }, copy: function(e) {
                    return this.r = e.r, this.g = e.g, this.b = e.b, this }, copyGammaToLinear: function(e) {
                    return this.r = e.r * e.r, this.g = e.g * e.g, this.b = e.b * e.b, this }, copyLinearToGamma: function(e) {
                    return this.r = Math.sqrt(e.r), this.g = Math.sqrt(e.g), this.b = Math.sqrt(e.b), this }, convertGammaToLinear: function() {
                    var e = this.r,
                        t = this.g,
                        r = this.b;
                    return this.r = e * e, this.g = t * t, this.b = r * r, this }, convertLinearToGamma: function() {
                    return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this }, getHex: function() {
                    return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0 }, getHexString: function() {
                    return ("000000" + this.getHex().toString(16)).slice(-6) }, getHSL: function(e) {
                    var t, r, i = e || { h: 0, s: 0, l: 0 },
                        n = this.r,
                        o = this.g,
                        a = this.b,
                        s = Math.max(n, o, a),
                        h = Math.min(n, o, a),
                        l = (h + s) / 2;
                    if (h === s) t = 0, r = 0;
                    else {
                        var c = s - h;
                        switch (r = .5 >= l ? c / (s + h) : c / (2 - s - h), s) {
                            case n:
                                t = (o - a) / c + (a > o ? 6 : 0);
                                break;
                            case o:
                                t = (a - n) / c + 2;
                                break;
                            case a:
                                t = (n - o) / c + 4 }
                        t /= 6 }
                    return i.h = t, i.s = r, i.l = l, i }, getStyle: function() {
                    return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")" }, offsetHSL: function(e, t, r) {
                    var i = this.getHSL();
                    return i.h += e, i.s += t, i.l += r, this.setHSL(i.h, i.s, i.l), this }, add: function(e) {
                    return this.r += e.r, this.g += e.g, this.b += e.b, this }, addColors: function(e, t) {
                    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this }, addScalar: function(e) {
                    return this.r += e, this.g += e, this.b += e, this }, multiply: function(e) {
                    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this }, multiplyScalar: function(e) {
                    return this.r *= e, this.g *= e, this.b *= e, this }, lerp: function(e, t) {
                    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this }, equals: function(e) {
                    return e.r === this.r && e.g === this.g && e.b === this.b }, fromArray: function(e) {
                    return this.r = e[0], this.g = e[1], this.b = e[2], this }, toArray: function() {
                    return [this.r, this.g, this.b] }, clone: function() {
                    return (new n.Color).setRGB(this.r, this.g, this.b) } }, n.ColorKeywords = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, n.Quaternion = function(e, t, r, i) { this._x = e || 0, this._y = t || 0, this._z = r || 0, this._w = void 0 !== i ? i : 1 }, n.Quaternion.prototype = { constructor: n.Quaternion, _x: 0, _y: 0, _z: 0, _w: 0, get x() {
                    return this._x }, set x(e) { this._x = e, this.onChangeCallback() }, get y() {
                    return this._y }, set y(e) { this._y = e, this.onChangeCallback() }, get z() {
                    return this._z }, set z(e) { this._z = e, this.onChangeCallback() }, get w() {
                    return this._w }, set w(e) { this._w = e, this.onChangeCallback() }, set: function(e, t, r, i) {
                    return this._x = e, this._y = t, this._z = r, this._w = i, this.onChangeCallback(), this }, copy: function(e) {
                    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this.onChangeCallback(), this }, setFromEuler: function(e, t) {
                    if (e instanceof n.Euler == !1) throw new Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
                    var r = Math.cos(e._x / 2),
                        i = Math.cos(e._y / 2),
                        o = Math.cos(e._z / 2),
                        a = Math.sin(e._x / 2),
                        s = Math.sin(e._y / 2),
                        h = Math.sin(e._z / 2);
                    return "XYZ" === e.order ? (this._x = a * i * o + r * s * h, this._y = r * s * o - a * i * h, this._z = r * i * h + a * s * o, this._w = r * i * o - a * s * h) : "YXZ" === e.order ? (this._x = a * i * o + r * s * h, this._y = r * s * o - a * i * h, this._z = r * i * h - a * s * o, this._w = r * i * o + a * s * h) : "ZXY" === e.order ? (this._x = a * i * o - r * s * h, this._y = r * s * o + a * i * h, this._z = r * i * h + a * s * o, this._w = r * i * o - a * s * h) : "ZYX" === e.order ? (this._x = a * i * o - r * s * h, this._y = r * s * o + a * i * h, this._z = r * i * h - a * s * o, this._w = r * i * o + a * s * h) : "YZX" === e.order ? (this._x = a * i * o + r * s * h, this._y = r * s * o + a * i * h, this._z = r * i * h - a * s * o, this._w = r * i * o - a * s * h) : "XZY" === e.order && (this._x = a * i * o - r * s * h, this._y = r * s * o - a * i * h, this._z = r * i * h + a * s * o, this._w = r * i * o + a * s * h), t !== !1 && this.onChangeCallback(), this }, setFromAxisAngle: function(e, t) {
                    var r = t / 2,
                        i = Math.sin(r);
                    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(r), this.onChangeCallback(), this }, setFromRotationMatrix: function(e) {
                    var t, r = e.elements,
                        i = r[0],
                        n = r[4],
                        o = r[8],
                        a = r[1],
                        s = r[5],
                        h = r[9],
                        l = r[2],
                        c = r[6],
                        u = r[10],
                        p = i + s + u;
                    return p > 0 ? (t = .5 / Math.sqrt(p + 1), this._w = .25 / t, this._x = (c - h) * t, this._y = (o - l) * t, this._z = (a - n) * t) : i > s && i > u ? (t = 2 * Math.sqrt(1 + i - s - u), this._w = (c - h) / t, this._x = .25 * t, this._y = (n + a) / t, this._z = (o + l) / t) : s > u ? (t = 2 * Math.sqrt(1 + s - i - u), this._w = (o - l) / t, this._x = (n + a) / t, this._y = .25 * t, this._z = (h + c) / t) : (t = 2 * Math.sqrt(1 + u - i - s), this._w = (a - n) / t, this._x = (o + l) / t, this._y = (h + c) / t, this._z = .25 * t), this.onChangeCallback(), this }, setFromUnitVectors: function() {
                    var e, t, r = 1e-6;
                    return function(i, o) {
                        return void 0 === e && (e = new n.Vector3), t = i.dot(o) + 1, r > t ? (t = 0, Math.abs(i.x) > Math.abs(i.z) ? e.set(-i.y, i.x, 0) : e.set(0, -i.z, i.y)) : e.crossVectors(i, o), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize(), this } }(), inverse: function() {
                    return this.conjugate().normalize(), this }, conjugate: function() {
                    return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this }, dot: function(e) {
                    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w }, lengthSq: function() {
                    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w }, length: function() {
                    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w) }, normalize: function() {
                    var e = this.length();
                    return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this.onChangeCallback(), this }, multiply: function(e, t) {
                    return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e) }, multiplyQuaternions: function(e, t) {
                    var r = e._x,
                        i = e._y,
                        n = e._z,
                        o = e._w,
                        a = t._x,
                        s = t._y,
                        h = t._z,
                        l = t._w;
                    return this._x = r * l + o * a + i * h - n * s, this._y = i * l + o * s + n * a - r * h, this._z = n * l + o * h + r * s - i * a, this._w = o * l - r * a - i * s - n * h, this.onChangeCallback(), this }, multiplyVector3: function(e) {
                    return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this) }, slerp: function(e, t) {
                    if (0 === t) return this;
                    if (1 === t) return this.copy(e);
                    var r = this._x,
                        i = this._y,
                        n = this._z,
                        o = this._w,
                        a = o * e._w + r * e._x + i * e._y + n * e._z;
                    if (0 > a ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = r, this._y = i, this._z = n, this;
                    var s = Math.acos(a),
                        h = Math.sqrt(1 - a * a);
                    if (Math.abs(h) < .001) return this._w = .5 * (o + this._w), this._x = .5 * (r + this._x), this._y = .5 * (i + this._y), this._z = .5 * (n + this._z), this;
                    var l = Math.sin((1 - t) * s) / h,
                        c = Math.sin(t * s) / h;
                    return this._w = o * l + this._w * c, this._x = r * l + this._x * c, this._y = i * l + this._y * c, this._z = n * l + this._z * c, this.onChangeCallback(), this }, equals: function(e) {
                    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w }, fromArray: function(e, t) {
                    return void 0 === t && (t = 0), this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this.onChangeCallback(), this }, toArray: function(e, t) {
                    return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e }, onChange: function(e) {
                    return this.onChangeCallback = e, this }, onChangeCallback: function() {}, clone: function() {
                    return new n.Quaternion(this._x, this._y, this._z, this._w) } }, n.Quaternion.slerp = function(e, t, r, i) {
                return r.copy(e).slerp(t, i) }, n.Vector2 = function(e, t) { this.x = e || 0, this.y = t || 0 }, n.Vector2.prototype = { constructor: n.Vector2, set: function(e, t) {
                    return this.x = e, this.y = t, this }, setX: function(e) {
                    return this.x = e, this }, setY: function(e) {
                    return this.y = e, this }, setComponent: function(e, t) {
                    switch (e) {
                        case 0:
                            this.x = t;
                            break;
                        case 1:
                            this.y = t;
                            break;
                        default:
                            throw new Error("index is out of range: " + e) } }, getComponent: function(e) {
                    switch (e) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        default:
                            throw new Error("index is out of range: " + e) } }, copy: function(e) {
                    return this.x = e.x, this.y = e.y, this }, add: function(e, t) {
                    return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this) }, addVectors: function(e, t) {
                    return this.x = e.x + t.x, this.y = e.y + t.y, this }, addScalar: function(e) {
                    return this.x += e, this.y += e, this }, sub: function(e, t) {
                    return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this) }, subVectors: function(e, t) {
                    return this.x = e.x - t.x, this.y = e.y - t.y, this }, multiply: function(e) {
                    return this.x *= e.x, this.y *= e.y, this }, multiplyScalar: function(e) {
                    return this.x *= e, this.y *= e, this }, divide: function(e) {
                    return this.x /= e.x, this.y /= e.y, this }, divideScalar: function(e) {
                    if (0 !== e) {
                        var t = 1 / e;
                        this.x *= t, this.y *= t } else this.x = 0, this.y = 0;
                    return this }, min: function(e) {
                    return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this }, max: function(e) {
                    return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this }, clamp: function(e, t) {
                    return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this }, clampScalar: function() {
                    var e, t;
                    return function(r, i) {
                        return void 0 === e && (e = new n.Vector2, t = new n.Vector2), e.set(r, r), t.set(i, i), this.clamp(e, t) } }(), floor: function() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this }, ceil: function() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this }, round: function() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this }, roundToZero: function() {
                    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this }, negate: function() {
                    return this.x = -this.x, this.y = -this.y, this }, dot: function(e) {
                    return this.x * e.x + this.y * e.y }, lengthSq: function() {
                    return this.x * this.x + this.y * this.y }, length: function() {
                    return Math.sqrt(this.x * this.x + this.y * this.y) }, normalize: function() {
                    return this.divideScalar(this.length()) }, distanceTo: function(e) {
                    return Math.sqrt(this.distanceToSquared(e)) }, distanceToSquared: function(e) {
                    var t = this.x - e.x,
                        r = this.y - e.y;
                    return t * t + r * r }, setLength: function(e) {
                    var t = this.length();
                    return 0 !== t && e !== t && this.multiplyScalar(e / t), this }, lerp: function(e, t) {
                    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this }, equals: function(e) {
                    return e.x === this.x && e.y === this.y }, fromArray: function(e, t) {
                    return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this }, toArray: function(e, t) {
                    return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e }, fromAttribute: function(e, t, r) {
                    return void 0 === r && (r = 0), t = t * e.itemSize + r, this.x = e.array[t], this.y = e.array[t + 1], this }, clone: function() {
                    return new n.Vector2(this.x, this.y) } }, n.Vector3 = function(e, t, r) { this.x = e || 0, this.y = t || 0, this.z = r || 0 }, n.Vector3.prototype = { constructor: n.Vector3, set: function(e, t, r) {
                    return this.x = e, this.y = t, this.z = r, this }, setX: function(e) {
                    return this.x = e, this }, setY: function(e) {
                    return this.y = e, this }, setZ: function(e) {
                    return this.z = e, this }, setComponent: function(e, t) {
                    switch (e) {
                        case 0:
                            this.x = t;
                            break;
                        case 1:
                            this.y = t;
                            break;
                        case 2:
                            this.z = t;
                            break;
                        default:
                            throw new Error("index is out of range: " + e) } }, getComponent: function(e) {
                    switch (e) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        case 2:
                            return this.z;
                        default:
                            throw new Error("index is out of range: " + e) } }, copy: function(e) {
                    return this.x = e.x, this.y = e.y, this.z = e.z, this }, add: function(e, t) {
                    return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this) }, addScalar: function(e) {
                    return this.x += e, this.y += e, this.z += e, this }, addVectors: function(e, t) {
                    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this }, sub: function(e, t) {
                    return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this) }, subVectors: function(e, t) {
                    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this }, multiply: function(e, t) {
                    return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this) }, multiplyScalar: function(e) {
                    return this.x *= e, this.y *= e, this.z *= e, this }, multiplyVectors: function(e, t) {
                    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this }, applyEuler: function() {
                    var e;
                    return function(t) {
                        return t instanceof n.Euler == !1 && console.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order."), void 0 === e && (e = new n.Quaternion), this.applyQuaternion(e.setFromEuler(t)), this } }(), applyAxisAngle: function() {
                    var e;
                    return function(t, r) {
                        return void 0 === e && (e = new n.Quaternion), this.applyQuaternion(e.setFromAxisAngle(t, r)), this } }(), applyMatrix3: function(e) {
                    var t = this.x,
                        r = this.y,
                        i = this.z,
                        n = e.elements;
                    return this.x = n[0] * t + n[3] * r + n[6] * i, this.y = n[1] * t + n[4] * r + n[7] * i, this.z = n[2] * t + n[5] * r + n[8] * i, this }, applyMatrix4: function(e) {
                    var t = this.x,
                        r = this.y,
                        i = this.z,
                        n = e.elements;
                    return this.x = n[0] * t + n[4] * r + n[8] * i + n[12], this.y = n[1] * t + n[5] * r + n[9] * i + n[13], this.z = n[2] * t + n[6] * r + n[10] * i + n[14], this }, applyProjection: function(e) {
                    var t = this.x,
                        r = this.y,
                        i = this.z,
                        n = e.elements,
                        o = 1 / (n[3] * t + n[7] * r + n[11] * i + n[15]);
                    return this.x = (n[0] * t + n[4] * r + n[8] * i + n[12]) * o, this.y = (n[1] * t + n[5] * r + n[9] * i + n[13]) * o, this.z = (n[2] * t + n[6] * r + n[10] * i + n[14]) * o, this }, applyQuaternion: function(e) {
                    var t = this.x,
                        r = this.y,
                        i = this.z,
                        n = e.x,
                        o = e.y,
                        a = e.z,
                        s = e.w,
                        h = s * t + o * i - a * r,
                        l = s * r + a * t - n * i,
                        c = s * i + n * r - o * t,
                        u = -n * t - o * r - a * i;
                    return this.x = h * s + u * -n + l * -a - c * -o, this.y = l * s + u * -o + c * -n - h * -a, this.z = c * s + u * -a + h * -o - l * -n, this }, project: function() {
                    var e;
                    return function(t) {
                        return void 0 === e && (e = new n.Matrix4), e.multiplyMatrices(t.projectionMatrix, e.getInverse(t.matrixWorld)), this.applyProjection(e) } }(), unproject: function() {
                    var e;
                    return function(t) {
                        return void 0 === e && (e = new n.Matrix4), e.multiplyMatrices(t.matrixWorld, e.getInverse(t.projectionMatrix)), this.applyProjection(e) } }(), transformDirection: function(e) {
                    var t = this.x,
                        r = this.y,
                        i = this.z,
                        n = e.elements;
                    return this.x = n[0] * t + n[4] * r + n[8] * i, this.y = n[1] * t + n[5] * r + n[9] * i, this.z = n[2] * t + n[6] * r + n[10] * i, this.normalize(), this }, divide: function(e) {
                    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this }, divideScalar: function(e) {
                    if (0 !== e) {
                        var t = 1 / e;
                        this.x *= t, this.y *= t, this.z *= t } else this.x = 0, this.y = 0, this.z = 0;
                    return this }, min: function(e) {
                    return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this.z > e.z && (this.z = e.z), this }, max: function(e) {
                    return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this.z < e.z && (this.z = e.z), this }, clamp: function(e, t) {
                    return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z), this }, clampScalar: function() {
                    var e, t;
                    return function(r, i) {
                        return void 0 === e && (e = new n.Vector3, t = new n.Vector3), e.set(r, r, r), t.set(i, i, i), this.clamp(e, t) } }(), floor: function() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this }, ceil: function() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this }, round: function() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this }, roundToZero: function() {
                    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this }, negate: function() {
                    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this }, dot: function(e) {
                    return this.x * e.x + this.y * e.y + this.z * e.z }, lengthSq: function() {
                    return this.x * this.x + this.y * this.y + this.z * this.z }, length: function() {
                    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) }, lengthManhattan: function() {
                    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) }, normalize: function() {
                    return this.divideScalar(this.length()) }, setLength: function(e) {
                    var t = this.length();
                    return 0 !== t && e !== t && this.multiplyScalar(e / t), this }, lerp: function(e, t) {
                    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this }, cross: function(e, t) {
                    if (void 0 !== t) return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t);
                    var r = this.x,
                        i = this.y,
                        n = this.z;
                    return this.x = i * e.z - n * e.y, this.y = n * e.x - r * e.z, this.z = r * e.y - i * e.x, this }, crossVectors: function(e, t) {
                    var r = e.x,
                        i = e.y,
                        n = e.z,
                        o = t.x,
                        a = t.y,
                        s = t.z;
                    return this.x = i * s - n * a, this.y = n * o - r * s, this.z = r * a - i * o, this }, projectOnVector: function() {
                    var e, t;
                    return function(r) {
                        return void 0 === e && (e = new n.Vector3), e.copy(r).normalize(), t = this.dot(e), this.copy(e).multiplyScalar(t) } }(), projectOnPlane: function() {
                    var e;
                    return function(t) {
                        return void 0 === e && (e = new n.Vector3), e.copy(this).projectOnVector(t), this.sub(e) } }(), reflect: function() {
                    var e;
                    return function(t) {
                        return void 0 === e && (e = new n.Vector3), this.sub(e.copy(t).multiplyScalar(2 * this.dot(t))) } }(), angleTo: function(e) {
                    var t = this.dot(e) / (this.length() * e.length());
                    return Math.acos(n.Math.clamp(t, -1, 1)) }, distanceTo: function(e) {
                    return Math.sqrt(this.distanceToSquared(e)) }, distanceToSquared: function(e) {
                    var t = this.x - e.x,
                        r = this.y - e.y,
                        i = this.z - e.z;
                    return t * t + r * r + i * i }, setEulerFromRotationMatrix: function() { console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.") }, setEulerFromQuaternion: function() { console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.") }, getPositionFromMatrix: function(e) {
                    return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e) }, getScaleFromMatrix: function(e) {
                    return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e) }, getColumnFromMatrix: function(e, t) {
                    return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t) }, setFromMatrixPosition: function(e) {
                    return this.x = e.elements[12], this.y = e.elements[13], this.z = e.elements[14], this }, setFromMatrixScale: function(e) {
                    var t = this.set(e.elements[0], e.elements[1], e.elements[2]).length(),
                        r = this.set(e.elements[4], e.elements[5], e.elements[6]).length(),
                        i = this.set(e.elements[8], e.elements[9], e.elements[10]).length();
                    return this.x = t, this.y = r, this.z = i, this }, setFromMatrixColumn: function(e, t) {
                    var r = 4 * e,
                        i = t.elements;
                    return this.x = i[r], this.y = i[r + 1], this.z = i[r + 2], this }, equals: function(e) {
                    return e.x === this.x && e.y === this.y && e.z === this.z }, fromArray: function(e, t) {
                    return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this }, toArray: function(e, t) {
                    return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e }, fromAttribute: function(e, t, r) {
                    return void 0 === r && (r = 0), t = t * e.itemSize + r, this.x = e.array[t], this.y = e.array[t + 1], this.z = e.array[t + 2], this }, clone: function() {
                    return new n.Vector3(this.x, this.y, this.z) } }, n.Vector4 = function(e, t, r, i) { this.x = e || 0, this.y = t || 0, this.z = r || 0, this.w = void 0 !== i ? i : 1 }, n.Vector4.prototype = {
                constructor: n.Vector4,
                set: function(e, t, r, i) {
                    return this.x = e, this.y = t, this.z = r, this.w = i, this },
                setX: function(e) {
                    return this.x = e, this },
                setY: function(e) {
                    return this.y = e, this },
                setZ: function(e) {
                    return this.z = e, this },
                setW: function(e) {
                    return this.w = e, this },
                setComponent: function(e, t) {
                    switch (e) {
                        case 0:
                            this.x = t;
                            break;
                        case 1:
                            this.y = t;
                            break;
                        case 2:
                            this.z = t;
                            break;
                        case 3:
                            this.w = t;
                            break;
                        default:
                            throw new Error("index is out of range: " + e) } },
                getComponent: function(e) {
                    switch (e) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        case 2:
                            return this.z;
                        case 3:
                            return this.w;
                        default:
                            throw new Error("index is out of range: " + e) } },
                copy: function(e) {
                    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this },
                add: function(e, t) {
                    return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this) },
                addScalar: function(e) {
                    return this.x += e, this.y += e, this.z += e, this.w += e, this },
                addVectors: function(e, t) {
                    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this },
                sub: function(e, t) {
                    return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this) },
                subVectors: function(e, t) {
                    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this },
                multiplyScalar: function(e) {
                    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this },
                applyMatrix4: function(e) {
                    var t = this.x,
                        r = this.y,
                        i = this.z,
                        n = this.w,
                        o = e.elements;
                    return this.x = o[0] * t + o[4] * r + o[8] * i + o[12] * n, this.y = o[1] * t + o[5] * r + o[9] * i + o[13] * n, this.z = o[2] * t + o[6] * r + o[10] * i + o[14] * n, this.w = o[3] * t + o[7] * r + o[11] * i + o[15] * n, this },
                divideScalar: function(e) {
                    if (0 !== e) {
                        var t = 1 / e;
                        this.x *= t, this.y *= t, this.z *= t, this.w *= t } else this.x = 0, this.y = 0, this.z = 0, this.w = 1;
                    return this },
                setAxisAngleFromQuaternion: function(e) { this.w = 2 * Math.acos(e.w);
                    var t = Math.sqrt(1 - e.w * e.w);
                    return 1e-4 > t ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this },
                setAxisAngleFromRotationMatrix: function(e) {
                    var t, r, i, n, o = .01,
                        a = .1,
                        s = e.elements,
                        h = s[0],
                        l = s[4],
                        c = s[8],
                        u = s[1],
                        p = s[5],
                        f = s[9],
                        d = s[2],
                        m = s[6],
                        g = s[10];
                    if (Math.abs(l - u) < o && Math.abs(c - d) < o && Math.abs(f - m) < o) {
                        if (Math.abs(l + u) < a && Math.abs(c + d) < a && Math.abs(f + m) < a && Math.abs(h + p + g - 3) < a) return this.set(1, 0, 0, 0), this;
                        t = Math.PI;
                        var v = (h + 1) / 2,
                            y = (p + 1) / 2,
                            x = (g + 1) / 2,
                            b = (l + u) / 4,
                            w = (c + d) / 4,
                            _ = (f + m) / 4;
                        return v > y && v > x ? o > v ? (r = 0, i = .707106781, n = .707106781) : (r = Math.sqrt(v), i = b / r, n = w / r) : y > x ? o > y ? (r = .707106781, i = 0, n = .707106781) : (i = Math.sqrt(y), r = b / i, n = _ / i) : o > x ? (r = .707106781, i = .707106781, n = 0) : (n = Math.sqrt(x), r = w / n, i = _ / n), this.set(r, i, n, t), this }
                    var M = Math.sqrt((m - f) * (m - f) + (c - d) * (c - d) + (u - l) * (u - l));
                    return Math.abs(M) < .001 && (M = 1), this.x = (m - f) / M, this.y = (c - d) / M, this.z = (u - l) / M, this.w = Math.acos((h + p + g - 1) / 2), this },
                min: function(e) {
                    return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this.z > e.z && (this.z = e.z), this.w > e.w && (this.w = e.w), this },
                max: function(e) {
                    return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this.z < e.z && (this.z = e.z), this.w < e.w && (this.w = e.w), this },
                clamp: function(e, t) {
                    return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z), this.w < e.w ? this.w = e.w : this.w > t.w && (this.w = t.w), this },
                clampScalar: function() {
                    var e, t;
                    return function(r, i) {
                        return void 0 === e && (e = new n.Vector4, t = new n.Vector4), e.set(r, r, r, r), t.set(i, i, i, i), this.clamp(e, t) } }(),
                floor: function() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this },
                ceil: function() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
                },
                round: function() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this },
                roundToZero: function() {
                    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this },
                negate: function() {
                    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this },
                dot: function(e) {
                    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w },
                lengthSq: function() {
                    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w },
                length: function() {
                    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w) },
                lengthManhattan: function() {
                    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w) },
                normalize: function() {
                    return this.divideScalar(this.length()) },
                setLength: function(e) {
                    var t = this.length();
                    return 0 !== t && e !== t && this.multiplyScalar(e / t), this },
                lerp: function(e, t) {
                    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this },
                equals: function(e) {
                    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w },
                fromArray: function(e, t) {
                    return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this },
                toArray: function(e, t) {
                    return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e },
                fromAttribute: function(e, t, r) {
                    return void 0 === r && (r = 0), t = t * e.itemSize + r, this.x = e.array[t], this.y = e.array[t + 1], this.z = e.array[t + 2], this.w = e.array[t + 3], this },
                clone: function() {
                    return new n.Vector4(this.x, this.y, this.z, this.w) }
            }, n.Euler = function(e, t, r, i) { this._x = e || 0, this._y = t || 0, this._z = r || 0, this._order = i || n.Euler.DefaultOrder }, n.Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], n.Euler.DefaultOrder = "XYZ", n.Euler.prototype = { constructor: n.Euler, _x: 0, _y: 0, _z: 0, _order: n.Euler.DefaultOrder, get x() {
                    return this._x }, set x(e) { this._x = e, this.onChangeCallback() }, get y() {
                    return this._y }, set y(e) { this._y = e, this.onChangeCallback() }, get z() {
                    return this._z }, set z(e) { this._z = e, this.onChangeCallback() }, get order() {
                    return this._order }, set order(e) { this._order = e, this.onChangeCallback() }, set: function(e, t, r, i) {
                    return this._x = e, this._y = t, this._z = r, this._order = i || this._order, this.onChangeCallback(), this }, copy: function(e) {
                    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this.onChangeCallback(), this }, setFromRotationMatrix: function(e, t, r) {
                    var i = n.Math.clamp,
                        o = e.elements,
                        a = o[0],
                        s = o[4],
                        h = o[8],
                        l = o[1],
                        c = o[5],
                        u = o[9],
                        p = o[2],
                        f = o[6],
                        d = o[10];
                    return t = t || this._order, "XYZ" === t ? (this._y = Math.asin(i(h, -1, 1)), Math.abs(h) < .99999 ? (this._x = Math.atan2(-u, d), this._z = Math.atan2(-s, a)) : (this._x = Math.atan2(f, c), this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-i(u, -1, 1)), Math.abs(u) < .99999 ? (this._y = Math.atan2(h, d), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-p, a), this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(i(f, -1, 1)), Math.abs(f) < .99999 ? (this._y = Math.atan2(-p, d), this._z = Math.atan2(-s, c)) : (this._y = 0, this._z = Math.atan2(l, a))) : "ZYX" === t ? (this._y = Math.asin(-i(p, -1, 1)), Math.abs(p) < .99999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(l, a)) : (this._x = 0, this._z = Math.atan2(-s, c))) : "YZX" === t ? (this._z = Math.asin(i(l, -1, 1)), Math.abs(l) < .99999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-p, a)) : (this._x = 0, this._y = Math.atan2(h, d))) : "XZY" === t ? (this._z = Math.asin(-i(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(h, a)) : (this._x = Math.atan2(-u, d), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t), this._order = t, r !== !1 && this.onChangeCallback(), this }, setFromQuaternion: function() {
                    var e;
                    return function(t, r, i) {
                        return void 0 === e && (e = new n.Matrix4), e.makeRotationFromQuaternion(t), this.setFromRotationMatrix(e, r, i), this } }(), setFromVector3: function(e, t) {
                    return this.set(e.x, e.y, e.z, t || this._order) }, reorder: function() {
                    var e = new n.Quaternion;
                    return function(t) { e.setFromEuler(this), this.setFromQuaternion(e, t) } }(), equals: function(e) {
                    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order }, fromArray: function(e) {
                    return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this.onChangeCallback(), this }, toArray: function() {
                    return [this._x, this._y, this._z, this._order] }, toVector3: function(e) {
                    return e ? e.set(this._x, this._y, this._z) : new n.Vector3(this._x, this._y, this._z) }, onChange: function(e) {
                    return this.onChangeCallback = e, this }, onChangeCallback: function() {}, clone: function() {
                    return new n.Euler(this._x, this._y, this._z, this._order) } }, n.Line3 = function(e, t) { this.start = void 0 !== e ? e : new n.Vector3, this.end = void 0 !== t ? t : new n.Vector3 }, n.Line3.prototype = { constructor: n.Line3, set: function(e, t) {
                    return this.start.copy(e), this.end.copy(t), this }, copy: function(e) {
                    return this.start.copy(e.start), this.end.copy(e.end), this }, center: function(e) {
                    var t = e || new n.Vector3;
                    return t.addVectors(this.start, this.end).multiplyScalar(.5) }, delta: function(e) {
                    var t = e || new n.Vector3;
                    return t.subVectors(this.end, this.start) }, distanceSq: function() {
                    return this.start.distanceToSquared(this.end) }, distance: function() {
                    return this.start.distanceTo(this.end) }, at: function(e, t) {
                    var r = t || new n.Vector3;
                    return this.delta(r).multiplyScalar(e).add(this.start) }, closestPointToPointParameter: function() {
                    var e = new n.Vector3,
                        t = new n.Vector3;
                    return function(r, i) { e.subVectors(r, this.start), t.subVectors(this.end, this.start);
                        var o = t.dot(t),
                            a = t.dot(e),
                            s = a / o;
                        return i && (s = n.Math.clamp(s, 0, 1)), s } }(), closestPointToPoint: function(e, t, r) {
                    var i = this.closestPointToPointParameter(e, t),
                        o = r || new n.Vector3;
                    return this.delta(o).multiplyScalar(i).add(this.start) }, applyMatrix4: function(e) {
                    return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this }, equals: function(e) {
                    return e.start.equals(this.start) && e.end.equals(this.end) }, clone: function() {
                    return (new n.Line3).copy(this) } }, n.Box2 = function(e, t) { this.min = void 0 !== e ? e : new n.Vector2(1 / 0, 1 / 0), this.max = void 0 !== t ? t : new n.Vector2(-1 / 0, -1 / 0) }, n.Box2.prototype = { constructor: n.Box2, set: function(e, t) {
                    return this.min.copy(e), this.max.copy(t), this }, setFromPoints: function(e) { this.makeEmpty();
                    for (var t = 0, r = e.length; r > t; t++) this.expandByPoint(e[t]);
                    return this }, setFromCenterAndSize: function() {
                    var e = new n.Vector2;
                    return function(t, r) {
                        var i = e.copy(r).multiplyScalar(.5);
                        return this.min.copy(t).sub(i), this.max.copy(t).add(i), this } }(), copy: function(e) {
                    return this.min.copy(e.min), this.max.copy(e.max), this }, makeEmpty: function() {
                    return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this }, empty: function() {
                    return this.max.x < this.min.x || this.max.y < this.min.y }, center: function(e) {
                    var t = e || new n.Vector2;
                    return t.addVectors(this.min, this.max).multiplyScalar(.5) }, size: function(e) {
                    var t = e || new n.Vector2;
                    return t.subVectors(this.max, this.min) }, expandByPoint: function(e) {
                    return this.min.min(e), this.max.max(e), this }, expandByVector: function(e) {
                    return this.min.sub(e), this.max.add(e), this }, expandByScalar: function(e) {
                    return this.min.addScalar(-e), this.max.addScalar(e), this }, containsPoint: function(e) {
                    return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y ? !1 : !0 }, containsBox: function(e) {
                    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y ? !0 : !1 }, getParameter: function(e, t) {
                    var r = t || new n.Vector2;
                    return r.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y)) }, isIntersectionBox: function(e) {
                    return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y ? !1 : !0 }, clampPoint: function(e, t) {
                    var r = t || new n.Vector2;
                    return r.copy(e).clamp(this.min, this.max) }, distanceToPoint: function() {
                    var e = new n.Vector2;
                    return function(t) {
                        var r = e.copy(t).clamp(this.min, this.max);
                        return r.sub(t).length() } }(), intersect: function(e) {
                    return this.min.max(e.min), this.max.min(e.max), this }, union: function(e) {
                    return this.min.min(e.min), this.max.max(e.max), this }, translate: function(e) {
                    return this.min.add(e), this.max.add(e), this }, equals: function(e) {
                    return e.min.equals(this.min) && e.max.equals(this.max) }, clone: function() {
                    return (new n.Box2).copy(this) } }, n.Box3 = function(e, t) { this.min = void 0 !== e ? e : new n.Vector3(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== t ? t : new n.Vector3(-1 / 0, -1 / 0, -1 / 0) }, n.Box3.prototype = { constructor: n.Box3, set: function(e, t) {
                    return this.min.copy(e), this.max.copy(t), this }, setFromPoints: function(e) { this.makeEmpty();
                    for (var t = 0, r = e.length; r > t; t++) this.expandByPoint(e[t]);
                    return this }, setFromCenterAndSize: function() {
                    var e = new n.Vector3;
                    return function(t, r) {
                        var i = e.copy(r).multiplyScalar(.5);
                        return this.min.copy(t).sub(i), this.max.copy(t).add(i), this } }(), setFromObject: function() {
                    var e = new n.Vector3;
                    return function(t) {
                        var r = this;
                        return t.updateMatrixWorld(!0), this.makeEmpty(), t.traverse(function(t) {
                            var i = t.geometry;
                            if (void 0 !== i)
                                if (i instanceof n.Geometry)
                                    for (var o = i.vertices, a = 0, s = o.length; s > a; a++) e.copy(o[a]), e.applyMatrix4(t.matrixWorld), r.expandByPoint(e);
                                else if (i instanceof n.BufferGeometry && void 0 !== i.attributes.position)
                                for (var h = i.attributes.position.array, a = 0, s = h.length; s > a; a += 3) e.set(h[a], h[a + 1], h[a + 2]), e.applyMatrix4(t.matrixWorld), r.expandByPoint(e) }), this } }(), copy: function(e) {
                    return this.min.copy(e.min), this.max.copy(e.max), this }, makeEmpty: function() {
                    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this }, empty: function() {
                    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z }, center: function(e) {
                    var t = e || new n.Vector3;
                    return t.addVectors(this.min, this.max).multiplyScalar(.5) }, size: function(e) {
                    var t = e || new n.Vector3;
                    return t.subVectors(this.max, this.min) }, expandByPoint: function(e) {
                    return this.min.min(e), this.max.max(e), this }, expandByVector: function(e) {
                    return this.min.sub(e), this.max.add(e), this }, expandByScalar: function(e) {
                    return this.min.addScalar(-e), this.max.addScalar(e), this }, containsPoint: function(e) {
                    return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z ? !1 : !0 }, containsBox: function(e) {
                    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z ? !0 : !1 }, getParameter: function(e, t) {
                    var r = t || new n.Vector3;
                    return r.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z)) }, isIntersectionBox: function(e) {
                    return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z ? !1 : !0 }, clampPoint: function(e, t) {
                    var r = t || new n.Vector3;
                    return r.copy(e).clamp(this.min, this.max) }, distanceToPoint: function() {
                    var e = new n.Vector3;
                    return function(t) {
                        var r = e.copy(t).clamp(this.min, this.max);
                        return r.sub(t).length() } }(), getBoundingSphere: function() {
                    var e = new n.Vector3;
                    return function(t) {
                        var r = t || new n.Sphere;
                        return r.center = this.center(), r.radius = .5 * this.size(e).length(), r } }(), intersect: function(e) {
                    return this.min.max(e.min), this.max.min(e.max), this }, union: function(e) {
                    return this.min.min(e.min), this.max.max(e.max), this }, applyMatrix4: function() {
                    var e = [new n.Vector3, new n.Vector3, new n.Vector3, new n.Vector3, new n.Vector3, new n.Vector3, new n.Vector3, new n.Vector3];
                    return function(t) {
                        return e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.makeEmpty(), this.setFromPoints(e), this } }(), translate: function(e) {
                    return this.min.add(e), this.max.add(e), this }, equals: function(e) {
                    return e.min.equals(this.min) && e.max.equals(this.max) }, clone: function() {
                    return (new n.Box3).copy(this) } }, n.Matrix3 = function() { this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.") }, n.Matrix3.prototype = { constructor: n.Matrix3, set: function(e, t, r, i, n, o, a, s, h) {
                    var l = this.elements;
                    return l[0] = e, l[3] = t, l[6] = r, l[1] = i, l[4] = n, l[7] = o, l[2] = a, l[5] = s, l[8] = h, this }, identity: function() {
                    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this }, copy: function(e) {
                    var t = e.elements;
                    return this.set(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]), this }, multiplyVector3: function(e) {
                    return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this) }, multiplyVector3Array: function(e) {
                    return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(e) }, applyToVector3Array: function() {
                    var e = new n.Vector3;
                    return function(t, r, i) { void 0 === r && (r = 0), void 0 === i && (i = t.length);
                        for (var n = 0, o = r; i > n; n += 3, o += 3) e.x = t[o], e.y = t[o + 1], e.z = t[o + 2], e.applyMatrix3(this), t[o] = e.x, t[o + 1] = e.y, t[o + 2] = e.z;
                        return t } }(), multiplyScalar: function(e) {
                    var t = this.elements;
                    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this }, determinant: function() {
                    var e = this.elements,
                        t = e[0],
                        r = e[1],
                        i = e[2],
                        n = e[3],
                        o = e[4],
                        a = e[5],
                        s = e[6],
                        h = e[7],
                        l = e[8];
                    return t * o * l - t * a * h - r * n * l + r * a * s + i * n * h - i * o * s }, getInverse: function(e, t) {
                    var r = e.elements,
                        i = this.elements;
                    i[0] = r[10] * r[5] - r[6] * r[9], i[1] = -r[10] * r[1] + r[2] * r[9], i[2] = r[6] * r[1] - r[2] * r[5], i[3] = -r[10] * r[4] + r[6] * r[8], i[4] = r[10] * r[0] - r[2] * r[8], i[5] = -r[6] * r[0] + r[2] * r[4], i[6] = r[9] * r[4] - r[5] * r[8], i[7] = -r[9] * r[0] + r[1] * r[8], i[8] = r[5] * r[0] - r[1] * r[4];
                    var n = r[0] * i[0] + r[1] * i[3] + r[2] * i[6];
                    if (0 === n) {
                        var o = "Matrix3.getInverse(): can't invert matrix, determinant is 0";
                        if (t) throw new Error(o);
                        return console.warn(o), this.identity(), this }
                    return this.multiplyScalar(1 / n), this }, transpose: function() {
                    var e, t = this.elements;
                    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this }, flattenToArrayOffset: function(e, t) {
                    var r = this.elements;
                    return e[t] = r[0], e[t + 1] = r[1], e[t + 2] = r[2], e[t + 3] = r[3], e[t + 4] = r[4], e[t + 5] = r[5], e[t + 6] = r[6], e[t + 7] = r[7], e[t + 8] = r[8], e }, getNormalMatrix: function(e) {
                    return this.getInverse(e).transpose(), this }, transposeIntoArray: function(e) {
                    var t = this.elements;
                    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this }, fromArray: function(e) {
                    return this.elements.set(e), this }, toArray: function() {
                    var e = this.elements;
                    return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]] }, clone: function() {
                    return (new n.Matrix3).fromArray(this.elements) } }, n.Matrix4 = function() { this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.") }, n.Matrix4.prototype = { constructor: n.Matrix4, set: function(e, t, r, i, n, o, a, s, h, l, c, u, p, f, d, m) {
                    var g = this.elements;
                    return g[0] = e, g[4] = t, g[8] = r, g[12] = i, g[1] = n, g[5] = o, g[9] = a, g[13] = s, g[2] = h, g[6] = l, g[10] = c, g[14] = u, g[3] = p, g[7] = f, g[11] = d, g[15] = m, this }, identity: function() {
                    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this }, copy: function(e) {
                    return this.elements.set(e.elements), this }, extractPosition: function(e) {
                    return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e) }, copyPosition: function(e) {
                    var t = this.elements,
                        r = e.elements;
                    return t[12] = r[12], t[13] = r[13], t[14] = r[14], this }, extractBasis: function(e, t, r) {
                    var i = this.elements;
                    return e.set(i[0], i[1], i[2]), t.set(i[4], i[5], i[6]), r.set(i[8], i[9], i[10]), this }, makeBasis: function(e, t, r) {
                    return this.set(e.x, t.x, r.x, 0, e.y, t.y, r.y, 0, e.z, t.z, r.z, 0, 0, 0, 0, 1), this }, extractRotation: function() {
                    var e = new n.Vector3;
                    return function(t) {
                        var r = this.elements,
                            i = t.elements,
                            n = 1 / e.set(i[0], i[1], i[2]).length(),
                            o = 1 / e.set(i[4], i[5], i[6]).length(),
                            a = 1 / e.set(i[8], i[9], i[10]).length();
                        return r[0] = i[0] * n, r[1] = i[1] * n, r[2] = i[2] * n, r[4] = i[4] * o, r[5] = i[5] * o, r[6] = i[6] * o, r[8] = i[8] * a, r[9] = i[9] * a, r[10] = i[10] * a, this } }(), makeRotationFromEuler: function(e) { e instanceof n.Euler == !1 && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
                    var t = this.elements,
                        r = e.x,
                        i = e.y,
                        o = e.z,
                        a = Math.cos(r),
                        s = Math.sin(r),
                        h = Math.cos(i),
                        l = Math.sin(i),
                        c = Math.cos(o),
                        u = Math.sin(o);
                    if ("XYZ" === e.order) {
                        var p = a * c,
                            f = a * u,
                            d = s * c,
                            m = s * u;
                        t[0] = h * c, t[4] = -h * u, t[8] = l, t[1] = f + d * l, t[5] = p - m * l, t[9] = -s * h, t[2] = m - p * l, t[6] = d + f * l, t[10] = a * h } else if ("YXZ" === e.order) {
                        var g = h * c,
                            v = h * u,
                            y = l * c,
                            x = l * u;
                        t[0] = g + x * s, t[4] = y * s - v, t[8] = a * l, t[1] = a * u, t[5] = a * c, t[9] = -s, t[2] = v * s - y, t[6] = x + g * s, t[10] = a * h } else if ("ZXY" === e.order) {
                        var g = h * c,
                            v = h * u,
                            y = l * c,
                            x = l * u;
                        t[0] = g - x * s, t[4] = -a * u, t[8] = y + v * s, t[1] = v + y * s, t[5] = a * c, t[9] = x - g * s, t[2] = -a * l, t[6] = s, t[10] = a * h } else if ("ZYX" === e.order) {
                        var p = a * c,
                            f = a * u,
                            d = s * c,
                            m = s * u;
                        t[0] = h * c, t[4] = d * l - f, t[8] = p * l + m, t[1] = h * u, t[5] = m * l + p, t[9] = f * l - d, t[2] = -l, t[6] = s * h, t[10] = a * h } else if ("YZX" === e.order) {
                        var b = a * h,
                            w = a * l,
                            _ = s * h,
                            M = s * l;
                        t[0] = h * c, t[4] = M - b * u, t[8] = _ * u + w, t[1] = u, t[5] = a * c, t[9] = -s * c, t[2] = -l * c, t[6] = w * u + _, t[10] = b - M * u } else if ("XZY" === e.order) {
                        var b = a * h,
                            w = a * l,
                            _ = s * h,
                            M = s * l;
                        t[0] = h * c, t[4] = -u, t[8] = l * c, t[1] = b * u + M, t[5] = a * c, t[9] = w * u - _, t[2] = _ * u - w, t[6] = s * c, t[10] = M * u + b }
                    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this }, setRotationFromQuaternion: function(e) {
                    return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e) }, makeRotationFromQuaternion: function(e) {
                    var t = this.elements,
                        r = e.x,
                        i = e.y,
                        n = e.z,
                        o = e.w,
                        a = r + r,
                        s = i + i,
                        h = n + n,
                        l = r * a,
                        c = r * s,
                        u = r * h,
                        p = i * s,
                        f = i * h,
                        d = n * h,
                        m = o * a,
                        g = o * s,
                        v = o * h;
                    return t[0] = 1 - (p + d), t[4] = c - v, t[8] = u + g, t[1] = c + v, t[5] = 1 - (l + d), t[9] = f - m, t[2] = u - g, t[6] = f + m, t[10] = 1 - (l + p), t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this }, lookAt: function() {
                    var e = new n.Vector3,
                        t = new n.Vector3,
                        r = new n.Vector3;
                    return function(i, n, o) {
                        var a = this.elements;
                        return r.subVectors(i, n).normalize(), 0 === r.length() && (r.z = 1), e.crossVectors(o, r).normalize(), 0 === e.length() && (r.x += 1e-4, e.crossVectors(o, r).normalize()), t.crossVectors(r, e), a[0] = e.x, a[4] = t.x, a[8] = r.x, a[1] = e.y, a[5] = t.y, a[9] = r.y, a[2] = e.z, a[6] = t.z, a[10] = r.z, this } }(), multiply: function(e, t) {
                    return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e) }, multiplyMatrices: function(e, t) {
                    var r = e.elements,
                        i = t.elements,
                        n = this.elements,
                        o = r[0],
                        a = r[4],
                        s = r[8],
                        h = r[12],
                        l = r[1],
                        c = r[5],
                        u = r[9],
                        p = r[13],
                        f = r[2],
                        d = r[6],
                        m = r[10],
                        g = r[14],
                        v = r[3],
                        y = r[7],
                        x = r[11],
                        b = r[15],
                        w = i[0],
                        _ = i[4],
                        M = i[8],
                        S = i[12],
                        T = i[1],
                        C = i[5],
                        E = i[9],
                        A = i[13],
                        L = i[2],
                        P = i[6],
                        R = i[10],
                        F = i[14],
                        B = i[3],
                        U = i[7],
                        D = i[11],
                        V = i[15];
                    return n[0] = o * w + a * T + s * L + h * B, n[4] = o * _ + a * C + s * P + h * U, n[8] = o * M + a * E + s * R + h * D, n[12] = o * S + a * A + s * F + h * V, n[1] = l * w + c * T + u * L + p * B, n[5] = l * _ + c * C + u * P + p * U, n[9] = l * M + c * E + u * R + p * D, n[13] = l * S + c * A + u * F + p * V, n[2] = f * w + d * T + m * L + g * B, n[6] = f * _ + d * C + m * P + g * U, n[10] = f * M + d * E + m * R + g * D, n[14] = f * S + d * A + m * F + g * V, n[3] = v * w + y * T + x * L + b * B, n[7] = v * _ + y * C + x * P + b * U, n[11] = v * M + y * E + x * R + b * D, n[15] = v * S + y * A + x * F + b * V, this }, multiplyToArray: function(e, t, r) {
                    var i = this.elements;
                    return this.multiplyMatrices(e, t), r[0] = i[0], r[1] = i[1], r[2] = i[2], r[3] = i[3], r[4] = i[4], r[5] = i[5], r[6] = i[6], r[7] = i[7], r[8] = i[8], r[9] = i[9], r[10] = i[10], r[11] = i[11], r[12] = i[12], r[13] = i[13], r[14] = i[14], r[15] = i[15], this }, multiplyScalar: function(e) {
                    var t = this.elements;
                    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this }, multiplyVector3: function(e) {
                    return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."), e.applyProjection(this) }, multiplyVector4: function(e) {
                    return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this) }, multiplyVector3Array: function(e) {
                    return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(e) }, applyToVector3Array: function() {
                    var e = new n.Vector3;
                    return function(t, r, i) { void 0 === r && (r = 0), void 0 === i && (i = t.length);
                        for (var n = 0, o = r; i > n; n += 3, o += 3) e.x = t[o], e.y = t[o + 1], e.z = t[o + 2], e.applyMatrix4(this), t[o] = e.x, t[o + 1] = e.y, t[o + 2] = e.z;
                        return t } }(), rotateAxis: function(e) { console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this) }, crossVector: function(e) {
                    return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this) }, determinant: function() {
                    var e = this.elements,
                        t = e[0],
                        r = e[4],
                        i = e[8],
                        n = e[12],
                        o = e[1],
                        a = e[5],
                        s = e[9],
                        h = e[13],
                        l = e[2],
                        c = e[6],
                        u = e[10],
                        p = e[14],
                        f = e[3],
                        d = e[7],
                        m = e[11],
                        g = e[15];
                    return f * (+n * s * c - i * h * c - n * a * u + r * h * u + i * a * p - r * s * p) + d * (+t * s * p - t * h * u + n * o * u - i * o * p + i * h * l - n * s * l) + m * (+t * h * c - t * a * p - n * o * c + r * o * p + n * a * l - r * h * l) + g * (-i * a * l - t * s * c + t * a * u + i * o * c - r * o * u + r * s * l) }, transpose: function() {
                    var e, t = this.elements;
                    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this }, flattenToArrayOffset: function(e, t) {
                    var r = this.elements;
                    return e[t] = r[0], e[t + 1] = r[1], e[t + 2] = r[2], e[t + 3] = r[3], e[t + 4] = r[4], e[t + 5] = r[5], e[t + 6] = r[6], e[t + 7] = r[7], e[t + 8] = r[8], e[t + 9] = r[9], e[t + 10] = r[10], e[t + 11] = r[11], e[t + 12] = r[12], e[t + 13] = r[13], e[t + 14] = r[14], e[t + 15] = r[15], e }, getPosition: function() {
                    var e = new n.Vector3;
                    return function() { console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
                        var t = this.elements;
                        return e.set(t[12], t[13], t[14]) } }(), setPosition: function(e) {
                    var t = this.elements;
                    return t[12] = e.x, t[13] = e.y, t[14] = e.z, this }, getInverse: function(e, t) {
                    var r = this.elements,
                        i = e.elements,
                        n = i[0],
                        o = i[4],
                        a = i[8],
                        s = i[12],
                        h = i[1],
                        l = i[5],
                        c = i[9],
                        u = i[13],
                        p = i[2],
                        f = i[6],
                        d = i[10],
                        m = i[14],
                        g = i[3],
                        v = i[7],
                        y = i[11],
                        x = i[15];
                    r[0] = c * m * v - u * d * v + u * f * y - l * m * y - c * f * x + l * d * x, r[4] = s * d * v - a * m * v - s * f * y + o * m * y + a * f * x - o * d * x, r[8] = a * u * v - s * c * v + s * l * y - o * u * y - a * l * x + o * c * x, r[12] = s * c * f - a * u * f - s * l * d + o * u * d + a * l * m - o * c * m, r[1] = u * d * g - c * m * g - u * p * y + h * m * y + c * p * x - h * d * x, r[5] = a * m * g - s * d * g + s * p * y - n * m * y - a * p * x + n * d * x, r[9] = s * c * g - a * u * g - s * h * y + n * u * y + a * h * x - n * c * x, r[13] = a * u * p - s * c * p + s * h * d - n * u * d - a * h * m + n * c * m, r[2] = l * m * g - u * f * g + u * p * v - h * m * v - l * p * x + h * f * x, r[6] = s * f * g - o * m * g - s * p * v + n * m * v + o * p * x - n * f * x, r[10] = o * u * g - s * l * g + s * h * v - n * u * v - o * h * x + n * l * x, r[14] = s * l * p - o * u * p - s * h * f + n * u * f + o * h * m - n * l * m, r[3] = c * f * g - l * d * g - c * p * v + h * d * v + l * p * y - h * f * y, r[7] = o * d * g - a * f * g + a * p * v - n * d * v - o * p * y + n * f * y, r[11] = a * l * g - o * c * g - a * h * v + n * c * v + o * h * y - n * l * y, r[15] = o * c * p - a * l * p + a * h * f - n * c * f - o * h * d + n * l * d;
                    var b = n * r[0] + h * r[4] + p * r[8] + g * r[12];
                    if (0 == b) {
                        var w = "Matrix4.getInverse(): can't invert matrix, determinant is 0";
                        if (t) throw new Error(w);
                        return console.warn(w), this.identity(), this }
                    return this.multiplyScalar(1 / b), this }, translate: function() { console.warn("THREE.Matrix4: .translate() has been removed.") }, rotateX: function() { console.warn("THREE.Matrix4: .rotateX() has been removed.") }, rotateY: function() { console.warn("THREE.Matrix4: .rotateY() has been removed.") }, rotateZ: function() { console.warn("THREE.Matrix4: .rotateZ() has been removed.") }, rotateByAxis: function() { console.warn("THREE.Matrix4: .rotateByAxis() has been removed.") }, scale: function(e) {
                    var t = this.elements,
                        r = e.x,
                        i = e.y,
                        n = e.z;
                    return t[0] *= r, t[4] *= i, t[8] *= n, t[1] *= r, t[5] *= i, t[9] *= n, t[2] *= r, t[6] *= i, t[10] *= n, t[3] *= r, t[7] *= i, t[11] *= n, this }, getMaxScaleOnAxis: function() {
                    var e = this.elements,
                        t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
                        r = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
                        i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
                    return Math.sqrt(Math.max(t, Math.max(r, i))) }, makeTranslation: function(e, t, r) {
                    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, r, 0, 0, 0, 1), this }, makeRotationX: function(e) {
                    var t = Math.cos(e),
                        r = Math.sin(e);
                    return this.set(1, 0, 0, 0, 0, t, -r, 0, 0, r, t, 0, 0, 0, 0, 1), this }, makeRotationY: function(e) {
                    var t = Math.cos(e),
                        r = Math.sin(e);
                    return this.set(t, 0, r, 0, 0, 1, 0, 0, -r, 0, t, 0, 0, 0, 0, 1), this }, makeRotationZ: function(e) {
                    var t = Math.cos(e),
                        r = Math.sin(e);
                    return this.set(t, -r, 0, 0, r, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this }, makeRotationAxis: function(e, t) {
                    var r = Math.cos(t),
                        i = Math.sin(t),
                        n = 1 - r,
                        o = e.x,
                        a = e.y,
                        s = e.z,
                        h = n * o,
                        l = n * a;
                    return this.set(h * o + r, h * a - i * s, h * s + i * a, 0, h * a + i * s, l * a + r, l * s - i * o, 0, h * s - i * a, l * s + i * o, n * s * s + r, 0, 0, 0, 0, 1), this }, makeScale: function(e, t, r) {
                    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, r, 0, 0, 0, 0, 1), this }, compose: function(e, t, r) {
                    return this.makeRotationFromQuaternion(t), this.scale(r), this.setPosition(e), this }, decompose: function() {
                    var e = new n.Vector3,
                        t = new n.Matrix4;
                    return function(r, i, n) {
                        var o = this.elements,
                            a = e.set(o[0], o[1], o[2]).length(),
                            s = e.set(o[4], o[5], o[6]).length(),
                            h = e.set(o[8], o[9], o[10]).length(),
                            l = this.determinant();
                        0 > l && (a = -a), r.x = o[12], r.y = o[13], r.z = o[14], t.elements.set(this.elements);
                        var c = 1 / a,
                            u = 1 / s,
                            p = 1 / h;
                        return t.elements[0] *= c, t.elements[1] *= c, t.elements[2] *= c, t.elements[4] *= u, t.elements[5] *= u, t.elements[6] *= u, t.elements[8] *= p, t.elements[9] *= p, t.elements[10] *= p, i.setFromRotationMatrix(t), n.x = a, n.y = s, n.z = h, this } }(), makeFrustum: function(e, t, r, i, n, o) {
                    var a = this.elements,
                        s = 2 * n / (t - e),
                        h = 2 * n / (i - r),
                        l = (t + e) / (t - e),
                        c = (i + r) / (i - r),
                        u = -(o + n) / (o - n),
                        p = -2 * o * n / (o - n);
                    return a[0] = s, a[4] = 0, a[8] = l, a[12] = 0, a[1] = 0, a[5] = h, a[9] = c, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = p, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this }, makePerspective: function(e, t, r, i) {
                    var o = r * Math.tan(n.Math.degToRad(.5 * e)),
                        a = -o,
                        s = a * t,
                        h = o * t;
                    return this.makeFrustum(s, h, a, o, r, i) }, makeOrthographic: function(e, t, r, i, n, o) {
                    var a = this.elements,
                        s = t - e,
                        h = r - i,
                        l = o - n,
                        c = (t + e) / s,
                        u = (r + i) / h,
                        p = (o + n) / l;
                    return a[0] = 2 / s, a[4] = 0, a[8] = 0, a[12] = -c, a[1] = 0, a[5] = 2 / h, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 / l, a[14] = -p, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this }, fromArray: function(e) {
                    return this.elements.set(e), this }, toArray: function() {
                    var e = this.elements;
                    return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]] }, clone: function() {
                    return (new n.Matrix4).fromArray(this.elements) } }, n.Ray = function(e, t) { this.origin = void 0 !== e ? e : new n.Vector3, this.direction = void 0 !== t ? t : new n.Vector3 }, n.Ray.prototype = { constructor: n.Ray, set: function(e, t) {
                    return this.origin.copy(e), this.direction.copy(t), this }, copy: function(e) {
                    return this.origin.copy(e.origin), this.direction.copy(e.direction), this }, at: function(e, t) {
                    var r = t || new n.Vector3;
                    return r.copy(this.direction).multiplyScalar(e).add(this.origin) }, recast: function() {
                    var e = new n.Vector3;
                    return function(t) {
                        return this.origin.copy(this.at(t, e)), this } }(), closestPointToPoint: function(e, t) {
                    var r = t || new n.Vector3;
                    r.subVectors(e, this.origin);
                    var i = r.dot(this.direction);
                    return 0 > i ? r.copy(this.origin) : r.copy(this.direction).multiplyScalar(i).add(this.origin) }, distanceToPoint: function() {
                    var e = new n.Vector3;
                    return function(t) {
                        var r = e.subVectors(t, this.origin).dot(this.direction);
                        return 0 > r ? this.origin.distanceTo(t) : (e.copy(this.direction).multiplyScalar(r).add(this.origin), e.distanceTo(t)) } }(), distanceSqToSegment: function() {
                    var e = new n.Vector3,
                        t = new n.Vector3,
                        r = new n.Vector3;
                    return function(i, n, o, a) { e.copy(i).add(n).multiplyScalar(.5), t.copy(n).sub(i).normalize(), r.copy(this.origin).sub(e);
                        var s, h, l, c, u = .5 * i.distanceTo(n),
                            p = -this.direction.dot(t),
                            f = r.dot(this.direction),
                            d = -r.dot(t),
                            m = r.lengthSq(),
                            g = Math.abs(1 - p * p);
                        if (g > 0)
                            if (s = p * d - f, h = p * f - d, c = u * g, s >= 0)
                                if (h >= -c)
                                    if (c >= h) {
                                        var v = 1 / g;
                                        s *= v, h *= v, l = s * (s + p * h + 2 * f) + h * (p * s + h + 2 * d) + m } else h = u, s = Math.max(0, -(p * h + f)), l = -s * s + h * (h + 2 * d) + m;
                        else h = -u, s = Math.max(0, -(p * h + f)), l = -s * s + h * (h + 2 * d) + m;
                        else -c >= h ? (s = Math.max(0, -(-p * u + f)), h = s > 0 ? -u : Math.min(Math.max(-u, -d), u), l = -s * s + h * (h + 2 * d) + m) : c >= h ? (s = 0, h = Math.min(Math.max(-u, -d), u), l = h * (h + 2 * d) + m) : (s = Math.max(0, -(p * u + f)), h = s > 0 ? u : Math.min(Math.max(-u, -d), u), l = -s * s + h * (h + 2 * d) + m);
                        else h = p > 0 ? -u : u, s = Math.max(0, -(p * h + f)), l = -s * s + h * (h + 2 * d) + m;
                        return o && o.copy(this.direction).multiplyScalar(s).add(this.origin), a && a.copy(t).multiplyScalar(h).add(e), l } }(), isIntersectionSphere: function(e) {
                    return this.distanceToPoint(e.center) <= e.radius }, intersectSphere: function() {
                    var e = new n.Vector3;
                    return function(t, r) { e.subVectors(t.center, this.origin);
                        var i = e.dot(this.direction),
                            n = e.dot(e) - i * i,
                            o = t.radius * t.radius;
                        if (n > o) return null;
                        var a = Math.sqrt(o - n),
                            s = i - a,
                            h = i + a;
                        return 0 > s && 0 > h ? null : 0 > s ? this.at(h, r) : this.at(s, r) } }(), isIntersectionPlane: function(e) {
                    var t = e.distanceToPoint(this.origin);
                    if (0 === t) return !0;
                    var r = e.normal.dot(this.direction);
                    return 0 > r * t ? !0 : !1 }, distanceToPlane: function(e) {
                    var t = e.normal.dot(this.direction);
                    if (0 == t) return 0 == e.distanceToPoint(this.origin) ? 0 : null;
                    var r = -(this.origin.dot(e.normal) + e.constant) / t;
                    return r >= 0 ? r : null }, intersectPlane: function(e, t) {
                    var r = this.distanceToPlane(e);
                    return null === r ? null : this.at(r, t) }, isIntersectionBox: function() {
                    var e = new n.Vector3;
                    return function(t) {
                        return null !== this.intersectBox(t, e) } }(), intersectBox: function(e, t) {
                    var r, i, n, o, a, s, h = 1 / this.direction.x,
                        l = 1 / this.direction.y,
                        c = 1 / this.direction.z,
                        u = this.origin;
                    return h >= 0 ? (r = (e.min.x - u.x) * h, i = (e.max.x - u.x) * h) : (r = (e.max.x - u.x) * h, i = (e.min.x - u.x) * h), l >= 0 ? (n = (e.min.y - u.y) * l, o = (e.max.y - u.y) * l) : (n = (e.max.y - u.y) * l, o = (e.min.y - u.y) * l), r > o || n > i ? null : ((n > r || r !== r) && (r = n), (i > o || i !== i) && (i = o), c >= 0 ? (a = (e.min.z - u.z) * c, s = (e.max.z - u.z) * c) : (a = (e.max.z - u.z) * c, s = (e.min.z - u.z) * c), r > s || a > i ? null : ((a > r || r !== r) && (r = a), (i > s || i !== i) && (i = s), 0 > i ? null : this.at(r >= 0 ? r : i, t))) }, intersectTriangle: function() {
                    var e = new n.Vector3,
                        t = new n.Vector3,
                        r = new n.Vector3,
                        i = new n.Vector3;
                    return function(n, o, a, s, h) { t.subVectors(o, n), r.subVectors(a, n), i.crossVectors(t, r);
                        var l, c = this.direction.dot(i);
                        if (c > 0) {
                            if (s) return null;
                            l = 1 } else {
                            if (!(0 > c)) return null;
                            l = -1, c = -c }
                        e.subVectors(this.origin, n);
                        var u = l * this.direction.dot(r.crossVectors(e, r));
                        if (0 > u) return null;
                        var p = l * this.direction.dot(t.cross(e));
                        if (0 > p) return null;
                        if (u + p > c) return null;
                        var f = -l * e.dot(i);
                        return 0 > f ? null : this.at(f / c, h) } }(), applyMatrix4: function(e) {
                    return this.direction.add(this.origin).applyMatrix4(e), this.origin.applyMatrix4(e), this.direction.sub(this.origin), this.direction.normalize(), this }, equals: function(e) {
                    return e.origin.equals(this.origin) && e.direction.equals(this.direction) }, clone: function() {
                    return (new n.Ray).copy(this) } }, n.Sphere = function(e, t) { this.center = void 0 !== e ? e : new n.Vector3, this.radius = void 0 !== t ? t : 0 }, n.Sphere.prototype = { constructor: n.Sphere, set: function(e, t) {
                    return this.center.copy(e), this.radius = t, this }, setFromPoints: function() {
                    var e = new n.Box3;
                    return function(t, r) {
                        var i = this.center;
                        void 0 !== r ? i.copy(r) : e.setFromPoints(t).center(i);
                        for (var n = 0, o = 0, a = t.length; a > o; o++) n = Math.max(n, i.distanceToSquared(t[o]));
                        return this.radius = Math.sqrt(n), this } }(), copy: function(e) {
                    return this.center.copy(e.center), this.radius = e.radius, this }, empty: function() {
                    return this.radius <= 0 }, containsPoint: function(e) {
                    return e.distanceToSquared(this.center) <= this.radius * this.radius }, distanceToPoint: function(e) {
                    return e.distanceTo(this.center) - this.radius }, intersectsSphere: function(e) {
                    var t = this.radius + e.radius;
                    return e.center.distanceToSquared(this.center) <= t * t }, clampPoint: function(e, t) {
                    var r = this.center.distanceToSquared(e),
                        i = t || new n.Vector3;
                    return i.copy(e), r > this.radius * this.radius && (i.sub(this.center).normalize(), i.multiplyScalar(this.radius).add(this.center)), i }, getBoundingBox: function(e) {
                    var t = e || new n.Box3;
                    return t.set(this.center, this.center), t.expandByScalar(this.radius), t }, applyMatrix4: function(e) {
                    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this }, translate: function(e) {
                    return this.center.add(e), this }, equals: function(e) {
                    return e.center.equals(this.center) && e.radius === this.radius }, clone: function() {
                    return (new n.Sphere).copy(this) } }, n.Frustum = function(e, t, r, i, o, a) { this.planes = [void 0 !== e ? e : new n.Plane, void 0 !== t ? t : new n.Plane, void 0 !== r ? r : new n.Plane, void 0 !== i ? i : new n.Plane, void 0 !== o ? o : new n.Plane, void 0 !== a ? a : new n.Plane] }, n.Frustum.prototype = {
                constructor: n.Frustum,
                set: function(e, t, r, i, n, o) {
                    var a = this.planes;
                    return a[0].copy(e), a[1].copy(t), a[2].copy(r), a[3].copy(i), a[4].copy(n), a[5].copy(o), this },
                copy: function(e) {
                    for (var t = this.planes, r = 0; 6 > r; r++) t[r].copy(e.planes[r]);
                    return this },
                setFromMatrix: function(e) {
                    var t = this.planes,
                        r = e.elements,
                        i = r[0],
                        n = r[1],
                        o = r[2],
                        a = r[3],
                        s = r[4],
                        h = r[5],
                        l = r[6],
                        c = r[7],
                        u = r[8],
                        p = r[9],
                        f = r[10],
                        d = r[11],
                        m = r[12],
                        g = r[13],
                        v = r[14],
                        y = r[15];
                    return t[0].setComponents(a - i, c - s, d - u, y - m).normalize(), t[1].setComponents(a + i, c + s, d + u, y + m).normalize(), t[2].setComponents(a + n, c + h, d + p, y + g).normalize(), t[3].setComponents(a - n, c - h, d - p, y - g).normalize(), t[4].setComponents(a - o, c - l, d - f, y - v).normalize(), t[5].setComponents(a + o, c + l, d + f, y + v).normalize(), this
                },
                intersectsObject: function() {
                    var e = new n.Sphere;
                    return function(t) {
                        var r = t.geometry;
                        return null === r.boundingSphere && r.computeBoundingSphere(), e.copy(r.boundingSphere), e.applyMatrix4(t.matrixWorld), this.intersectsSphere(e) } }(),
                intersectsSphere: function(e) {
                    for (var t = this.planes, r = e.center, i = -e.radius, n = 0; 6 > n; n++) {
                        var o = t[n].distanceToPoint(r);
                        if (i > o) return !1 }
                    return !0 },
                intersectsBox: function() {
                    var e = new n.Vector3,
                        t = new n.Vector3;
                    return function(r) {
                        for (var i = this.planes, n = 0; 6 > n; n++) {
                            var o = i[n];
                            e.x = o.normal.x > 0 ? r.min.x : r.max.x, t.x = o.normal.x > 0 ? r.max.x : r.min.x, e.y = o.normal.y > 0 ? r.min.y : r.max.y, t.y = o.normal.y > 0 ? r.max.y : r.min.y, e.z = o.normal.z > 0 ? r.min.z : r.max.z, t.z = o.normal.z > 0 ? r.max.z : r.min.z;
                            var a = o.distanceToPoint(e),
                                s = o.distanceToPoint(t);
                            if (0 > a && 0 > s) return !1 }
                        return !0 } }(),
                containsPoint: function(e) {
                    for (var t = this.planes, r = 0; 6 > r; r++)
                        if (t[r].distanceToPoint(e) < 0) return !1;
                    return !0 },
                clone: function() {
                    return (new n.Frustum).copy(this) }
            }, n.Plane = function(e, t) { this.normal = void 0 !== e ? e : new n.Vector3(1, 0, 0), this.constant = void 0 !== t ? t : 0 }, n.Plane.prototype = { constructor: n.Plane, set: function(e, t) {
                    return this.normal.copy(e), this.constant = t, this }, setComponents: function(e, t, r, i) {
                    return this.normal.set(e, t, r), this.constant = i, this }, setFromNormalAndCoplanarPoint: function(e, t) {
                    return this.normal.copy(e), this.constant = -t.dot(this.normal), this }, setFromCoplanarPoints: function() {
                    var e = new n.Vector3,
                        t = new n.Vector3;
                    return function(r, i, n) {
                        var o = e.subVectors(n, i).cross(t.subVectors(r, i)).normalize();
                        return this.setFromNormalAndCoplanarPoint(o, r), this } }(), copy: function(e) {
                    return this.normal.copy(e.normal), this.constant = e.constant, this }, normalize: function() {
                    var e = 1 / this.normal.length();
                    return this.normal.multiplyScalar(e), this.constant *= e, this }, negate: function() {
                    return this.constant *= -1, this.normal.negate(), this }, distanceToPoint: function(e) {
                    return this.normal.dot(e) + this.constant }, distanceToSphere: function(e) {
                    return this.distanceToPoint(e.center) - e.radius }, projectPoint: function(e, t) {
                    return this.orthoPoint(e, t).sub(e).negate() }, orthoPoint: function(e, t) {
                    var r = this.distanceToPoint(e),
                        i = t || new n.Vector3;
                    return i.copy(this.normal).multiplyScalar(r) }, isIntersectionLine: function(e) {
                    var t = this.distanceToPoint(e.start),
                        r = this.distanceToPoint(e.end);
                    return 0 > t && r > 0 || 0 > r && t > 0 }, intersectLine: function() {
                    var e = new n.Vector3;
                    return function(t, r) {
                        var i = r || new n.Vector3,
                            o = t.delta(e),
                            a = this.normal.dot(o);
                        if (0 == a) return 0 == this.distanceToPoint(t.start) ? i.copy(t.start) : void 0;
                        var s = -(t.start.dot(this.normal) + this.constant) / a;
                        return 0 > s || s > 1 ? void 0 : i.copy(o).multiplyScalar(s).add(t.start) } }(), coplanarPoint: function(e) {
                    var t = e || new n.Vector3;
                    return t.copy(this.normal).multiplyScalar(-this.constant) }, applyMatrix4: function() {
                    var e = new n.Vector3,
                        t = new n.Vector3,
                        r = new n.Matrix3;
                    return function(i, n) {
                        var o = n || r.getNormalMatrix(i),
                            a = e.copy(this.normal).applyMatrix3(o),
                            s = this.coplanarPoint(t);
                        return s.applyMatrix4(i), this.setFromNormalAndCoplanarPoint(a, s), this } }(), translate: function(e) {
                    return this.constant = this.constant - e.dot(this.normal), this }, equals: function(e) {
                    return e.normal.equals(this.normal) && e.constant == this.constant }, clone: function() {
                    return (new n.Plane).copy(this) } }, n.Math = { generateUUID: function() {
                    var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                        r = new Array(36),
                        i = 0;
                    return function() {
                        for (var n = 0; 36 > n; n++) 8 == n || 13 == n || 18 == n || 23 == n ? r[n] = "-" : 14 == n ? r[n] = "4" : (2 >= i && (i = 33554432 + 16777216 * Math.random() | 0), e = 15 & i, i >>= 4, r[n] = t[19 == n ? 3 & e | 8 : e]);
                        return r.join("") } }(), clamp: function(e, t, r) {
                    return t > e ? t : e > r ? r : e }, clampBottom: function(e, t) {
                    return t > e ? t : e }, mapLinear: function(e, t, r, i, n) {
                    return i + (e - t) * (n - i) / (r - t) }, smoothstep: function(e, t, r) {
                    return t >= e ? 0 : e >= r ? 1 : (e = (e - t) / (r - t), e * e * (3 - 2 * e)) }, smootherstep: function(e, t, r) {
                    return t >= e ? 0 : e >= r ? 1 : (e = (e - t) / (r - t), e * e * e * (e * (6 * e - 15) + 10)) }, random16: function() {
                    return (65280 * Math.random() + 255 * Math.random()) / 65535 }, randInt: function(e, t) {
                    return Math.floor(this.randFloat(e, t)) }, randFloat: function(e, t) {
                    return e + Math.random() * (t - e) }, randFloatSpread: function(e) {
                    return e * (.5 - Math.random()) }, degToRad: function() {
                    var e = Math.PI / 180;
                    return function(t) {
                        return t * e } }(), radToDeg: function() {
                    var e = 180 / Math.PI;
                    return function(t) {
                        return t * e } }(), isPowerOfTwo: function(e) {
                    return 0 === (e & e - 1) && 0 !== e } }, n.Spline = function(e) {
                function t(e, t, r, i, n, o, a) {
                    var s = .5 * (r - e),
                        h = .5 * (i - t);
                    return (2 * (t - r) + s + h) * a + (-3 * (t - r) - 2 * s - h) * o + s * n + t }
                this.points = e;
                var r, i, o, a, s, h, l, c, u, p = [],
                    f = { x: 0, y: 0, z: 0 };
                this.initFromArray = function(e) { this.points = [];
                    for (var t = 0; t < e.length; t++) this.points[t] = { x: e[t][0], y: e[t][1], z: e[t][2] } }, this.getPoint = function(e) {
                    return r = (this.points.length - 1) * e, i = Math.floor(r), o = r - i, p[0] = 0 === i ? i : i - 1, p[1] = i, p[2] = i > this.points.length - 2 ? this.points.length - 1 : i + 1, p[3] = i > this.points.length - 3 ? this.points.length - 1 : i + 2, h = this.points[p[0]], l = this.points[p[1]], c = this.points[p[2]], u = this.points[p[3]], a = o * o, s = o * a, f.x = t(h.x, l.x, c.x, u.x, o, a, s), f.y = t(h.y, l.y, c.y, u.y, o, a, s), f.z = t(h.z, l.z, c.z, u.z, o, a, s), f }, this.getControlPointsArray = function() {
                    var e, t, r = this.points.length,
                        i = [];
                    for (e = 0; r > e; e++) t = this.points[e], i[e] = [t.x, t.y, t.z];
                    return i }, this.getLength = function(e) {
                    var t, r, i, o, a = 0,
                        s = 0,
                        h = 0,
                        l = new n.Vector3,
                        c = new n.Vector3,
                        u = [],
                        p = 0;
                    for (u[0] = 0, e || (e = 100), i = this.points.length * e, l.copy(this.points[0]), t = 1; i > t; t++) r = t / i, o = this.getPoint(r), c.copy(o), p += c.distanceTo(l), l.copy(o), a = (this.points.length - 1) * r, s = Math.floor(a), s != h && (u[s] = p, h = s);
                    return u[u.length] = p, { chunks: u, total: p } }, this.reparametrizeByArcLength = function(e) {
                    var t, r, i, o, a, s, h, l, c = [],
                        u = new n.Vector3,
                        p = this.getLength();
                    for (c.push(u.copy(this.points[0]).clone()), t = 1; t < this.points.length; t++) {
                        for (s = p.chunks[t] - p.chunks[t - 1], h = Math.ceil(e * s / p.total), o = (t - 1) / (this.points.length - 1), a = t / (this.points.length - 1), r = 1; h - 1 > r; r++) i = o + r * (1 / h) * (a - o), l = this.getPoint(i), c.push(u.copy(l).clone());
                        c.push(u.copy(this.points[t]).clone()) }
                    this.points = c } }, n.Triangle = function(e, t, r) { this.a = void 0 !== e ? e : new n.Vector3, this.b = void 0 !== t ? t : new n.Vector3, this.c = void 0 !== r ? r : new n.Vector3 }, n.Triangle.normal = function() {
                var e = new n.Vector3;
                return function(t, r, i, o) {
                    var a = o || new n.Vector3;
                    a.subVectors(i, r), e.subVectors(t, r), a.cross(e);
                    var s = a.lengthSq();
                    return s > 0 ? a.multiplyScalar(1 / Math.sqrt(s)) : a.set(0, 0, 0) } }(), n.Triangle.barycoordFromPoint = function() {
                var e = new n.Vector3,
                    t = new n.Vector3,
                    r = new n.Vector3;
                return function(i, o, a, s, h) { e.subVectors(s, o), t.subVectors(a, o), r.subVectors(i, o);
                    var l = e.dot(e),
                        c = e.dot(t),
                        u = e.dot(r),
                        p = t.dot(t),
                        f = t.dot(r),
                        d = l * p - c * c,
                        m = h || new n.Vector3;
                    if (0 == d) return m.set(-2, -1, -1);
                    var g = 1 / d,
                        v = (p * u - c * f) * g,
                        y = (l * f - c * u) * g;
                    return m.set(1 - v - y, y, v) } }(), n.Triangle.containsPoint = function() {
                var e = new n.Vector3;
                return function(t, r, i, o) {
                    var a = n.Triangle.barycoordFromPoint(t, r, i, o, e);
                    return a.x >= 0 && a.y >= 0 && a.x + a.y <= 1 } }(), n.Triangle.prototype = { constructor: n.Triangle, set: function(e, t, r) {
                    return this.a.copy(e), this.b.copy(t), this.c.copy(r), this }, setFromPointsAndIndices: function(e, t, r, i) {
                    return this.a.copy(e[t]), this.b.copy(e[r]), this.c.copy(e[i]), this }, copy: function(e) {
                    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this }, area: function() {
                    var e = new n.Vector3,
                        t = new n.Vector3;
                    return function() {
                        return e.subVectors(this.c, this.b), t.subVectors(this.a, this.b), .5 * e.cross(t).length() } }(), midpoint: function(e) {
                    var t = e || new n.Vector3;
                    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3) }, normal: function(e) {
                    return n.Triangle.normal(this.a, this.b, this.c, e) }, plane: function(e) {
                    var t = e || new n.Plane;
                    return t.setFromCoplanarPoints(this.a, this.b, this.c) }, barycoordFromPoint: function(e, t) {
                    return n.Triangle.barycoordFromPoint(e, this.a, this.b, this.c, t) }, containsPoint: function(e) {
                    return n.Triangle.containsPoint(e, this.a, this.b, this.c) }, equals: function(e) {
                    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c) }, clone: function() {
                    return (new n.Triangle).copy(this) } }, n.Clock = function(e) { this.autoStart = void 0 !== e ? e : !0, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1 }, n.Clock.prototype = { constructor: n.Clock, start: function() { this.startTime = void 0 !== i.performance && void 0 !== i.performance.now ? i.performance.now() : Date.now(), this.oldTime = this.startTime, this.running = !0 }, stop: function() { this.getElapsedTime(), this.running = !1 }, getElapsedTime: function() {
                    return this.getDelta(), this.elapsedTime }, getDelta: function() {
                    var e = 0;
                    if (this.autoStart && !this.running && this.start(), this.running) {
                        var t = void 0 !== i.performance && void 0 !== i.performance.now ? i.performance.now() : Date.now();
                        e = .001 * (t - this.oldTime), this.oldTime = t, this.elapsedTime += e }
                    return e } }, n.EventDispatcher = function() {}, n.EventDispatcher.prototype = { constructor: n.EventDispatcher, apply: function(e) { e.addEventListener = n.EventDispatcher.prototype.addEventListener, e.hasEventListener = n.EventDispatcher.prototype.hasEventListener, e.removeEventListener = n.EventDispatcher.prototype.removeEventListener, e.dispatchEvent = n.EventDispatcher.prototype.dispatchEvent }, addEventListener: function(e, t) { void 0 === this._listeners && (this._listeners = {});
                    var r = this._listeners;
                    void 0 === r[e] && (r[e] = []), -1 === r[e].indexOf(t) && r[e].push(t) }, hasEventListener: function(e, t) {
                    if (void 0 === this._listeners) return !1;
                    var r = this._listeners;
                    return void 0 !== r[e] && -1 !== r[e].indexOf(t) ? !0 : !1 }, removeEventListener: function(e, t) {
                    if (void 0 !== this._listeners) {
                        var r = this._listeners,
                            i = r[e];
                        if (void 0 !== i) {
                            var n = i.indexOf(t); - 1 !== n && i.splice(n, 1) } } }, dispatchEvent: function(e) {
                    if (void 0 !== this._listeners) {
                        var t = this._listeners,
                            r = t[e.type];
                        if (void 0 !== r) { e.target = this;
                            for (var i = [], n = r.length, o = 0; n > o; o++) i[o] = r[o];
                            for (var o = 0; n > o; o++) i[o].call(this, e) } } } },
            function(e) { e.Raycaster = function(t, r, i, n) { this.ray = new e.Ray(t, r), this.near = i || 0, this.far = n || 1 / 0, this.params = { Sprite: {}, Mesh: {}, PointCloud: { threshold: 1 }, LOD: {}, Line: {} } };
                var t = function(e, t) {
                        return e.distance - t.distance },
                    r = function(e, t, i, n) {
                        if (e.raycast(t, i), n === !0)
                            for (var o = e.children, a = 0, s = o.length; s > a; a++) r(o[a], t, i, !0) };
                e.Raycaster.prototype = { constructor: e.Raycaster, precision: 1e-4, linePrecision: 1, set: function(e, t) { this.ray.set(e, t) }, setFromCamera: function(t, r) { r instanceof e.PerspectiveCamera ? (this.ray.origin.copy(r.position), this.ray.direction.set(t.x, t.y, .5).unproject(r).sub(r.position).normalize()) : r instanceof e.OrthographicCamera ? (this.ray.origin.set(t.x, t.y, -1).unproject(r), this.ray.direction.set(0, 0, -1).transformDirection(r.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.") }, intersectObject: function(e, i) {
                        var n = [];
                        return r(e, this, n, i), n.sort(t), n }, intersectObjects: function(e, i) {
                        var n = [];
                        if (e instanceof Array == !1) return console.log("THREE.Raycaster.intersectObjects: objects is not an Array."), n;
                        for (var o = 0, a = e.length; a > o; o++) r(e[o], this, n, i);
                        return n.sort(t), n } } }(n), n.Object3D = function() { Object.defineProperty(this, "id", { value: n.Object3DIdCount++ }), this.uuid = n.Math.generateUUID(), this.name = "", this.type = "Object3D", this.parent = void 0, this.children = [], this.up = n.Object3D.DefaultUp.clone();
                var e = new n.Vector3,
                    t = new n.Euler,
                    r = new n.Quaternion,
                    i = new n.Vector3(1, 1, 1),
                    o = function() { r.setFromEuler(t, !1) },
                    a = function() { t.setFromQuaternion(r, void 0, !1) };
                t.onChange(o), r.onChange(a), Object.defineProperties(this, { position: { enumerable: !0, value: e }, rotation: { enumerable: !0, value: t }, quaternion: { enumerable: !0, value: r }, scale: { enumerable: !0, value: i } }), this.rotationAutoUpdate = !0, this.matrix = new n.Matrix4, this.matrixWorld = new n.Matrix4, this.matrixAutoUpdate = !0, this.matrixWorldNeedsUpdate = !1, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.userData = {} }, n.Object3D.DefaultUp = new n.Vector3(0, 1, 0), n.Object3D.prototype = { constructor: n.Object3D, get eulerOrder() {
                    return console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order."), this.rotation.order }, set eulerOrder(e) { console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order."), this.rotation.order = e }, get useQuaternion() { console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.") }, set useQuaternion(e) { console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.") }, applyMatrix: function(e) { this.matrix.multiplyMatrices(e, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale) }, setRotationFromAxisAngle: function(e, t) { this.quaternion.setFromAxisAngle(e, t) }, setRotationFromEuler: function(e) { this.quaternion.setFromEuler(e, !0) }, setRotationFromMatrix: function(e) { this.quaternion.setFromRotationMatrix(e) }, setRotationFromQuaternion: function(e) { this.quaternion.copy(e) }, rotateOnAxis: function() {
                    var e = new n.Quaternion;
                    return function(t, r) {
                        return e.setFromAxisAngle(t, r), this.quaternion.multiply(e), this } }(), rotateX: function() {
                    var e = new n.Vector3(1, 0, 0);
                    return function(t) {
                        return this.rotateOnAxis(e, t) } }(), rotateY: function() {
                    var e = new n.Vector3(0, 1, 0);
                    return function(t) {
                        return this.rotateOnAxis(e, t) } }(), rotateZ: function() {
                    var e = new n.Vector3(0, 0, 1);
                    return function(t) {
                        return this.rotateOnAxis(e, t) } }(), translateOnAxis: function() {
                    var e = new n.Vector3;
                    return function(t, r) {
                        return e.copy(t).applyQuaternion(this.quaternion), this.position.add(e.multiplyScalar(r)), this } }(), translate: function(e, t) {
                    return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e) }, translateX: function() {
                    var e = new n.Vector3(1, 0, 0);
                    return function(t) {
                        return this.translateOnAxis(e, t) } }(), translateY: function() {
                    var e = new n.Vector3(0, 1, 0);
                    return function(t) {
                        return this.translateOnAxis(e, t) } }(), translateZ: function() {
                    var e = new n.Vector3(0, 0, 1);
                    return function(t) {
                        return this.translateOnAxis(e, t) } }(), localToWorld: function(e) {
                    return e.applyMatrix4(this.matrixWorld) }, worldToLocal: function() {
                    var e = new n.Matrix4;
                    return function(t) {
                        return t.applyMatrix4(e.getInverse(this.matrixWorld)) } }(), lookAt: function() {
                    var e = new n.Matrix4;
                    return function(t) { e.lookAt(t, this.position, this.up), this.quaternion.setFromRotationMatrix(e) } }(), add: function(e) {
                    if (arguments.length > 1) {
                        for (var t = 0; t < arguments.length; t++) this.add(arguments[t]);
                        return this }
                    return e === this ? (console.error("THREE.Object3D.add:", e, "can't be added as a child of itself."), this) : (e instanceof n.Object3D ? (void 0 !== e.parent && e.parent.remove(e), e.parent = this, e.dispatchEvent({ type: "added" }), this.children.push(e)) : console.error("THREE.Object3D.add:", e, "is not an instance of THREE.Object3D."), this) }, remove: function(e) {
                    if (arguments.length > 1)
                        for (var t = 0; t < arguments.length; t++) this.remove(arguments[t]);
                    var r = this.children.indexOf(e); - 1 !== r && (e.parent = void 0, e.dispatchEvent({ type: "removed" }), this.children.splice(r, 1)) }, getChildByName: function(e, t) {
                    return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e, t) }, getObjectById: function(e, t) {
                    return this.getObjectByProperty("id", e, t) }, getObjectByName: function(e, t) {
                    return this.getObjectByProperty("name", e, t) }, getObjectByProperty: function(e, t, r) {
                    if (this[e] === t) return this;
                    for (var i = 0, n = this.children.length; n > i; i++) {
                        var o = this.children[i],
                            a = o.getObjectByProperty(e, t, r);
                        if (void 0 !== a) return a }
                    return void 0 }, getWorldPosition: function(e) {
                    var t = e || new n.Vector3;
                    return this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld) }, getWorldQuaternion: function() {
                    var e = new n.Vector3,
                        t = new n.Vector3;
                    return function(r) {
                        var i = r || new n.Quaternion;
                        return this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, i, t), i } }(), getWorldRotation: function() {
                    var e = new n.Quaternion;
                    return function(t) {
                        var r = t || new n.Euler;
                        return this.getWorldQuaternion(e), r.setFromQuaternion(e, this.rotation.order, !1) } }(), getWorldScale: function() {
                    var e = new n.Vector3,
                        t = new n.Quaternion;
                    return function(r) {
                        var i = r || new n.Vector3;
                        return this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, t, i), i } }(), getWorldDirection: function() {
                    var e = new n.Quaternion;
                    return function(t) {
                        var r = t || new n.Vector3;
                        return this.getWorldQuaternion(e), r.set(0, 0, 1).applyQuaternion(e) } }(), raycast: function() {}, traverse: function(e) { e(this);
                    for (var t = 0, r = this.children.length; r > t; t++) this.children[t].traverse(e) }, traverseVisible: function(e) {
                    if (this.visible !== !1) { e(this);
                        for (var t = 0, r = this.children.length; r > t; t++) this.children[t].traverseVisible(e) } }, traverseAncestors: function(e) { this.parent && (e(this.parent), this.parent.traverseAncestors(e)) }, updateMatrix: function() { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0 }, updateMatrixWorld: function(e) { this.matrixAutoUpdate === !0 && this.updateMatrix(), (this.matrixWorldNeedsUpdate === !0 || e === !0) && (void 0 === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
                    for (var t = 0, r = this.children.length; r > t; t++) this.children[t].updateMatrixWorld(e) }, toJSON: function() {
                    var e = { metadata: { version: 4.3, type: "Object", generator: "ObjectExporter" } },
                        t = {},
                        r = function(r) {
                            if (void 0 === e.geometries && (e.geometries = []), void 0 === t[r.uuid]) {
                                var i = r.toJSON();
                                delete i.metadata, t[r.uuid] = i, e.geometries.push(i) }
                            return r.uuid },
                        i = {},
                        o = function(t) {
                            if (void 0 === e.materials && (e.materials = []), void 0 === i[t.uuid]) {
                                var r = t.toJSON();
                                delete r.metadata, i[t.uuid] = r, e.materials.push(r) }
                            return t.uuid },
                        a = function(e) {
                            var t = {};
                            if (t.uuid = e.uuid, t.type = e.type, "" !== e.name && (t.name = e.name), "{}" !== JSON.stringify(e.userData) && (t.userData = e.userData), e.visible !== !0 && (t.visible = e.visible), e instanceof n.PerspectiveCamera ? (t.fov = e.fov, t.aspect = e.aspect, t.near = e.near, t.far = e.far) : e instanceof n.OrthographicCamera ? (t.left = e.left, t.right = e.right, t.top = e.top, t.bottom = e.bottom, t.near = e.near, t.far = e.far) : e instanceof n.AmbientLight ? t.color = e.color.getHex() : e instanceof n.DirectionalLight ? (t.color = e.color.getHex(), t.intensity = e.intensity) : e instanceof n.PointLight ? (t.color = e.color.getHex(), t.intensity = e.intensity, t.distance = e.distance) : e instanceof n.SpotLight ? (t.color = e.color.getHex(), t.intensity = e.intensity, t.distance = e.distance, t.angle = e.angle, t.exponent = e.exponent) : e instanceof n.HemisphereLight ? (t.color = e.color.getHex(), t.groundColor = e.groundColor.getHex()) : e instanceof n.Mesh ? (t.geometry = r(e.geometry), t.material = o(e.material)) : e instanceof n.Line ? (t.geometry = r(e.geometry), t.material = o(e.material)) : e instanceof n.Sprite && (t.material = o(e.material)), t.matrix = e.matrix.toArray(), e.children.length > 0) { t.children = [];
                                for (var i = 0; i < e.children.length; i++) t.children.push(a(e.children[i])) }
                            return t };
                    return e.object = a(this), e }, clone: function(e, t) {
                    if (void 0 === e && (e = new n.Object3D), void 0 === t && (t = !0), e.name = this.name, e.up.copy(this.up), e.position.copy(this.position), e.quaternion.copy(this.quaternion), e.scale.copy(this.scale), e.rotationAutoUpdate = this.rotationAutoUpdate, e.matrix.copy(this.matrix), e.matrixWorld.copy(this.matrixWorld), e.matrixAutoUpdate = this.matrixAutoUpdate, e.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate, e.visible = this.visible, e.castShadow = this.castShadow, e.receiveShadow = this.receiveShadow, e.frustumCulled = this.frustumCulled, e.userData = JSON.parse(JSON.stringify(this.userData)), t === !0)
                        for (var r = 0; r < this.children.length; r++) {
                            var i = this.children[r];
                            e.add(i.clone()) }
                    return e } }, n.EventDispatcher.prototype.apply(n.Object3D.prototype), n.Object3DIdCount = 0, n.Face3 = function(e, t, r, i, o, a) { this.a = e, this.b = t, this.c = r, this.normal = i instanceof n.Vector3 ? i : new n.Vector3, this.vertexNormals = i instanceof Array ? i : [], this.color = o instanceof n.Color ? o : new n.Color, this.vertexColors = o instanceof Array ? o : [], this.vertexTangents = [], this.materialIndex = void 0 !== a ? a : 0 }, n.Face3.prototype = { constructor: n.Face3, clone: function() {
                    var e = new n.Face3(this.a, this.b, this.c);
                    e.normal.copy(this.normal), e.color.copy(this.color), e.materialIndex = this.materialIndex;
                    for (var t = 0, r = this.vertexNormals.length; r > t; t++) e.vertexNormals[t] = this.vertexNormals[t].clone();
                    for (var t = 0, r = this.vertexColors.length; r > t; t++) e.vertexColors[t] = this.vertexColors[t].clone();
                    for (var t = 0, r = this.vertexTangents.length; r > t; t++) e.vertexTangents[t] = this.vertexTangents[t].clone();
                    return e } }, n.Face4 = function(e, t, r, i, o, a, s) {
                return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new n.Face3(e, t, r, o, a, s) }, n.BufferAttribute = function(e, t) { this.array = e, this.itemSize = t, this.needsUpdate = !1 }, n.BufferAttribute.prototype = { constructor: n.BufferAttribute, get length() {
                    return this.array.length }, copyAt: function(e, t, r) { e *= this.itemSize, r *= t.itemSize;
                    for (var i = 0, n = this.itemSize; n > i; i++) this.array[e + i] = t.array[r + i] }, set: function(e) {
                    return this.array.set(e), this }, setX: function(e, t) {
                    return this.array[e * this.itemSize] = t, this }, setY: function(e, t) {
                    return this.array[e * this.itemSize + 1] = t, this }, setZ: function(e, t) {
                    return this.array[e * this.itemSize + 2] = t, this }, setXY: function(e, t, r) {
                    return e *= this.itemSize, this.array[e] = t, this.array[e + 1] = r, this }, setXYZ: function(e, t, r, i) {
                    return e *= this.itemSize, this.array[e] = t, this.array[e + 1] = r, this.array[e + 2] = i, this }, setXYZW: function(e, t, r, i, n) {
                    return e *= this.itemSize, this.array[e] = t, this.array[e + 1] = r, this.array[e + 2] = i, this.array[e + 3] = n, this }, clone: function() {
                    return new n.BufferAttribute(new this.array.constructor(this.array), this.itemSize) } }, n.Int8Attribute = function(e, t) {
                return console.warn("THREE.Int8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new n.BufferAttribute(e, t) }, n.Uint8Attribute = function(e, t) {
                return console.warn("THREE.Uint8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new n.BufferAttribute(e, t) }, n.Uint8ClampedAttribute = function(e, t) {
                return console.warn("THREE.Uint8ClampedAttribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new n.BufferAttribute(e, t) }, n.Int16Attribute = function(e, t) {
                return console.warn("THREE.Int16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new n.BufferAttribute(e, t) }, n.Uint16Attribute = function(e, t) {
                return console.warn("THREE.Uint16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new n.BufferAttribute(e, t) }, n.Int32Attribute = function(e, t) {
                return console.warn("THREE.Int32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new n.BufferAttribute(e, t) }, n.Uint32Attribute = function(e, t) {
                return console.warn("THREE.Uint32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new n.BufferAttribute(e, t) }, n.Float32Attribute = function(e, t) {
                return console.warn("THREE.Float32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new n.BufferAttribute(e, t) }, n.Float64Attribute = function(e, t) {
                return console.warn("THREE.Float64Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new n.BufferAttribute(e, t) }, n.BufferGeometry = function() { Object.defineProperty(this, "id", { value: n.GeometryIdCount++ }), this.uuid = n.Math.generateUUID(), this.name = "", this.type = "BufferGeometry", this.attributes = {}, this.attributesKeys = [], this.drawcalls = [], this.offsets = this.drawcalls, this.boundingBox = null, this.boundingSphere = null }, n.BufferGeometry.prototype = {
                constructor: n.BufferGeometry,
                addAttribute: function(e, t) {
                    return t instanceof n.BufferAttribute == !1 ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.attributes[e] = { array: arguments[1], itemSize: arguments[2] }, void 0) : (this.attributes[e] = t, this.attributesKeys = Object.keys(this.attributes), void 0) },
                getAttribute: function(e) {
                    return this.attributes[e] },
                addDrawCall: function(e, t, r) { this.drawcalls.push({ start: e, count: t, index: void 0 !== r ? r : 0 }) },
                applyMatrix: function(e) {
                    var t = this.attributes.position;
                    void 0 !== t && (e.applyToVector3Array(t.array), t.needsUpdate = !0);
                    var r = this.attributes.normal;
                    if (void 0 !== r) {
                        var i = (new n.Matrix3).getNormalMatrix(e);
                        i.applyToVector3Array(r.array), r.needsUpdate = !0 } },
                center: function() {},
                fromGeometry: function(e, t) { t = t || { vertexColors: n.NoColors };
                    var r = e.vertices,
                        i = e.faces,
                        o = e.faceVertexUvs,
                        a = t.vertexColors,
                        s = o[0].length > 0,
                        h = 3 == i[0].vertexNormals.length,
                        l = new Float32Array(3 * i.length * 3);
                    this.addAttribute("position", new n.BufferAttribute(l, 3));
                    var c = new Float32Array(3 * i.length * 3);
                    if (this.addAttribute("normal", new n.BufferAttribute(c, 3)), a !== n.NoColors) {
                        var u = new Float32Array(3 * i.length * 3);
                        this.addAttribute("color", new n.BufferAttribute(u, 3)) }
                    if (s === !0) {
                        var p = new Float32Array(3 * i.length * 2);
                        this.addAttribute("uv", new n.BufferAttribute(p, 2)) }
                    for (var f = 0, d = 0, m = 0; f < i.length; f++, d += 6, m += 9) {
                        var g = i[f],
                            v = r[g.a],
                            y = r[g.b],
                            x = r[g.c];
                        if (l[m] = v.x, l[m + 1] = v.y, l[m + 2] = v.z, l[m + 3] = y.x, l[m + 4] = y.y, l[m + 5] = y.z, l[m + 6] = x.x, l[m + 7] = x.y, l[m + 8] = x.z, h === !0) {
                            var b = g.vertexNormals[0],
                                w = g.vertexNormals[1],
                                _ = g.vertexNormals[2];
                            c[m] = b.x, c[m + 1] = b.y, c[m + 2] = b.z, c[m + 3] = w.x, c[m + 4] = w.y, c[m + 5] = w.z, c[m + 6] = _.x, c[m + 7] = _.y, c[m + 8] = _.z } else {
                            var M = g.normal;
                            c[m] = M.x, c[m + 1] = M.y, c[m + 2] = M.z, c[m + 3] = M.x, c[m + 4] = M.y, c[m + 5] = M.z, c[m + 6] = M.x, c[m + 7] = M.y, c[m + 8] = M.z }
                        if (a === n.FaceColors) {
                            var S = g.color;
                            u[m] = S.r, u[m + 1] = S.g, u[m + 2] = S.b, u[m + 3] = S.r, u[m + 4] = S.g, u[m + 5] = S.b, u[m + 6] = S.r, u[m + 7] = S.g, u[m + 8] = S.b } else if (a === n.VertexColors) {
                            var T = g.vertexColors[0],
                                C = g.vertexColors[1],
                                E = g.vertexColors[2];
                            u[m] = T.r, u[m + 1] = T.g, u[m + 2] = T.b, u[m + 3] = C.r, u[m + 4] = C.g, u[m + 5] = C.b, u[m + 6] = E.r, u[m + 7] = E.g, u[m + 8] = E.b }
                        if (s === !0) {
                            var A = o[0][f][0],
                                L = o[0][f][1],
                                P = o[0][f][2];
                            p[d] = A.x, p[d + 1] = A.y, p[d + 2] = L.x, p[d + 3] = L.y, p[d + 4] = P.x, p[d + 5] = P.y } }
                    return this.computeBoundingSphere(), this },
                computeBoundingBox: function() {
                    var e = new n.Vector3;
                    return function() { null === this.boundingBox && (this.boundingBox = new n.Box3);
                        var t = this.attributes.position.array;
                        if (t) {
                            var r = this.boundingBox;
                            r.makeEmpty();
                            for (var i = 0, o = t.length; o > i; i += 3) e.set(t[i], t[i + 1], t[i + 2]), r.expandByPoint(e) }(void 0 === t || 0 === t.length) && (this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0)), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.') } }(),
                computeBoundingSphere: function() {
                    var e = new n.Box3,
                        t = new n.Vector3;
                    return function() { null === this.boundingSphere && (this.boundingSphere = new n.Sphere);
                        var r = this.attributes.position.array;
                        if (r) { e.makeEmpty();
                            for (var i = this.boundingSphere.center, o = 0, a = r.length; a > o; o += 3) t.set(r[o], r[o + 1], r[o + 2]), e.expandByPoint(t);
                            e.center(i);
                            for (var s = 0, o = 0, a = r.length; a > o; o += 3) t.set(r[o], r[o + 1], r[o + 2]), s = Math.max(s, i.distanceToSquared(t));
                            this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.') } } }(),
                computeFaceNormals: function() {},
                computeVertexNormals: function() {
                    var e = this.attributes;
                    if (e.position) {
                        var t = e.position.array;
                        if (void 0 === e.normal) this.addAttribute("normal", new n.BufferAttribute(new Float32Array(t.length), 3));
                        else
                            for (var r = e.normal.array, i = 0, o = r.length; o > i; i++) r[i] = 0;
                        var a, s, h, r = e.normal.array,
                            l = new n.Vector3,
                            c = new n.Vector3,
                            u = new n.Vector3,
                            p = new n.Vector3,
                            f = new n.Vector3;
                        if (e.index)
                            for (var d = e.index.array, m = this.offsets.length > 0 ? this.offsets : [{ start: 0, count: d.length, index: 0 }], g = 0, v = m.length; v > g; ++g)
                                for (var y = m[g].start, x = m[g].count, b = m[g].index, i = y, o = y + x; o > i; i += 3) a = 3 * (b + d[i]), s = 3 * (b + d[i + 1]), h = 3 * (b + d[i + 2]), l.fromArray(t, a), c.fromArray(t, s), u.fromArray(t, h), p.subVectors(u, c), f.subVectors(l, c), p.cross(f), r[a] += p.x, r[a + 1] += p.y, r[a + 2] += p.z, r[s] += p.x, r[s + 1] += p.y, r[s + 2] += p.z, r[h] += p.x, r[h + 1] += p.y, r[h + 2] += p.z;
                        else
                            for (var i = 0, o = t.length; o > i; i += 9) l.fromArray(t, i), c.fromArray(t, i + 3), u.fromArray(t, i + 6), p.subVectors(u, c), f.subVectors(l, c), p.cross(f), r[i] = p.x, r[i + 1] = p.y, r[i + 2] = p.z, r[i + 3] = p.x, r[i + 4] = p.y, r[i + 5] = p.z, r[i + 6] = p.x, r[i + 7] = p.y, r[i + 8] = p.z;
                        this.normalizeNormals(), e.normal.needsUpdate = !0 } },
                computeTangents: function() {
                    function e(e, t, r) { P.fromArray(i, 3 * e), R.fromArray(i, 3 * t), F.fromArray(i, 3 * r), B.fromArray(a, 2 * e), U.fromArray(a, 2 * t), D.fromArray(a, 2 * r), p = R.x - P.x, f = F.x - P.x, d = R.y - P.y, m = F.y - P.y, g = R.z - P.z, v = F.z - P.z, y = U.x - B.x, x = D.x - B.x, b = U.y - B.y, w = D.y - B.y, _ = 1 / (y * w - x * b), V.set((w * p - b * f) * _, (w * d - b * m) * _, (w * g - b * v) * _), z.set((y * f - x * p) * _, (y * m - x * d) * _, (y * v - x * g) * _), l[e].add(V), l[t].add(V), l[r].add(V), c[e].add(z), c[t].add(z), c[r].add(z) }

                    function t(e) { q.fromArray(o, 3 * e), Y.copy(q), H = l[e], j.copy(H), j.sub(q.multiplyScalar(q.dot(H))).normalize(), X.crossVectors(Y, H), W = X.dot(c[e]), I = 0 > W ? -1 : 1, h[4 * e] = j.x, h[4 * e + 1] = j.y, h[4 * e + 2] = j.z, h[4 * e + 3] = I }
                    if (void 0 === this.attributes.index || void 0 === this.attributes.position || void 0 === this.attributes.normal || void 0 === this.attributes.uv) return console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()"), void 0;
                    var r = this.attributes.index.array,
                        i = this.attributes.position.array,
                        o = this.attributes.normal.array,
                        a = this.attributes.uv.array,
                        s = i.length / 3;
                    void 0 === this.attributes.tangent && this.addAttribute("tangent", new n.BufferAttribute(new Float32Array(4 * s), 4));
                    for (var h = this.attributes.tangent.array, l = [], c = [], u = 0; s > u; u++) l[u] = new n.Vector3, c[u] = new n.Vector3;
                    var p, f, d, m, g, v, y, x, b, w, _, M, S, T, C, E, A, L, P = new n.Vector3,
                        R = new n.Vector3,
                        F = new n.Vector3,
                        B = new n.Vector2,
                        U = new n.Vector2,
                        D = new n.Vector2,
                        V = new n.Vector3,
                        z = new n.Vector3;
                    0 === this.drawcalls.length && this.addDrawCall(0, r.length, 0);
                    var k = this.drawcalls;
                    for (T = 0, C = k.length; C > T; ++T) {
                        var N = k[T].start,
                            O = k[T].count,
                            G = k[T].index;
                        for (M = N, S = N + O; S > M; M += 3) E = G + r[M], A = G + r[M + 1], L = G + r[M + 2], e(E, A, L) }
                    var I, H, W, j = new n.Vector3,
                        X = new n.Vector3,
                        q = new n.Vector3,
                        Y = new n.Vector3;
                    for (T = 0, C = k.length; C > T; ++T) {
                        var N = k[T].start,
                            O = k[T].count,
                            G = k[T].index;
                        for (M = N, S = N + O; S > M; M += 3) E = G + r[M], A = G + r[M + 1], L = G + r[M + 2], t(E), t(A), t(L) } },
                computeOffsets: function(e) {
                    var t = e;
                    void 0 === e && (t = 65535);
                    for (var r = (Date.now(), this.attributes.index.array), i = this.attributes.position.array, n = (i.length / 3, r.length / 3), o = new Uint16Array(r.length), a = 0, s = 0, h = [{ start: 0, count: 0, index: 0 }], l = h[0], c = 0, u = 0, p = new Int32Array(6), f = new Int32Array(i.length), d = new Int32Array(i.length), m = 0; m < i.length; m++) f[m] = -1, d[m] = -1;
                    for (var g = 0; n > g; g++) { u = 0;
                        for (var v = 0; 3 > v; v++) {
                            var y = r[3 * g + v]; - 1 == f[y] ? (p[2 * v] = y, p[2 * v + 1] = -1, u++) : f[y] < l.index ? (p[2 * v] = y, p[2 * v + 1] = -1, c++) : (p[2 * v] = y, p[2 * v + 1] = f[y]) }
                        var x = s + u;
                        if (x > l.index + t) {
                            var b = { start: a, count: 0, index: s };
                            h.push(b), l = b;
                            for (var w = 0; 6 > w; w += 2) {
                                var _ = p[w + 1];
                                _ > -1 && _ < l.index && (p[w + 1] = -1) } }
                        for (var w = 0; 6 > w; w += 2) {
                            var y = p[w],
                                _ = p[w + 1]; - 1 === _ && (_ = s++), f[y] = _, d[_] = y, o[a++] = _ - l.index, l.count++ } }
                    return this.reorderBuffers(o, d, s), this.offsets = h, h },
                merge: function(e, t) {
                    if (e instanceof n.BufferGeometry == !1) return console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e), void 0;
                    void 0 === t && (t = 0);
                    var r = this.attributes;
                    for (var i in r)
                        if (void 0 !== e.attributes[i])
                            for (var o = r[i], a = o.array, s = e.attributes[i], h = s.array, l = s.itemSize, c = 0, u = l * t; c < h.length; c++, u++) a[u] = h[c];
                    return this },
                normalizeNormals: function() {
                    for (var e, t, r, i, n = this.attributes.normal.array, o = 0, a = n.length; a > o; o += 3) e = n[o], t = n[o + 1], r = n[o + 2], i = 1 / Math.sqrt(e * e + t * t + r * r), n[o] *= i, n[o + 1] *= i, n[o + 2] *= i },
                reorderBuffers: function(e, t, r) {
                    var i = {};
                    for (var n in this.attributes)
                        if ("index" != n) {
                            var o = this.attributes[n].array;
                            i[n] = new o.constructor(this.attributes[n].itemSize * r) }
                    for (var a = 0; r > a; a++) {
                        var s = t[a];
                        for (var n in this.attributes)
                            if ("index" != n)
                                for (var h = this.attributes[n].array, l = this.attributes[n].itemSize, c = i[n], u = 0; l > u; u++) c[a * l + u] = h[s * l + u] }
                    this.attributes.index.array = e;
                    for (var n in this.attributes) "index" != n && (this.attributes[n].array = i[n], this.attributes[n].numItems = this.attributes[n].itemSize * r) },
                toJSON: function() {
                    var e = { metadata: { version: 4, type: "BufferGeometry", generator: "BufferGeometryExporter" }, uuid: this.uuid, type: this.type, data: { attributes: {} } },
                        t = this.attributes,
                        r = this.offsets,
                        i = this.boundingSphere;
                    for (var n in t) {
                        for (var o = t[n], a = [], s = o.array, h = 0, l = s.length; l > h; h++) a[h] = s[h];
                        e.data.attributes[n] = { itemSize: o.itemSize, type: o.array.constructor.name, array: a } }
                    return r.length > 0 && (e.data.offsets = JSON.parse(JSON.stringify(r))), null !== i && (e.data.boundingSphere = { center: i.center.toArray(), radius: i.radius }), e },
                clone: function() {
                    var e = new n.BufferGeometry;
                    for (var t in this.attributes) {
                        var r = this.attributes[t];
                        e.addAttribute(t, r.clone()) }
                    for (var i = 0, o = this.offsets.length; o > i; i++) {
                        var a = this.offsets[i];
                        e.offsets.push({ start: a.start, index: a.index, count: a.count }) }
                    return e },
                dispose: function() {
                    this.dispatchEvent({ type: "dispose" })
                }
            }, n.EventDispatcher.prototype.apply(n.BufferGeometry.prototype), n.Geometry = function() { Object.defineProperty(this, "id", { value: n.GeometryIdCount++ }), this.uuid = n.Math.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                    []
                ], this.morphTargets = [], this.morphColors = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.hasTangents = !1, this.dynamic = !0, this.verticesNeedUpdate = !1, this.elementsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.tangentsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1 }, n.Geometry.prototype = { constructor: n.Geometry, applyMatrix: function(e) {
                    for (var t = (new n.Matrix3).getNormalMatrix(e), r = 0, i = this.vertices.length; i > r; r++) {
                        var o = this.vertices[r];
                        o.applyMatrix4(e) }
                    for (var r = 0, i = this.faces.length; i > r; r++) {
                        var a = this.faces[r];
                        a.normal.applyMatrix3(t).normalize();
                        for (var s = 0, h = a.vertexNormals.length; h > s; s++) a.vertexNormals[s].applyMatrix3(t).normalize() }
                    this.boundingBox instanceof n.Box3 && this.computeBoundingBox(), this.boundingSphere instanceof n.Sphere && this.computeBoundingSphere() }, fromBufferGeometry: function(e) {
                    for (var t = this, r = e.attributes, i = r.position.array, o = void 0 !== r.index ? r.index.array : void 0, a = void 0 !== r.normal ? r.normal.array : void 0, s = void 0 !== r.color ? r.color.array : void 0, h = void 0 !== r.uv ? r.uv.array : void 0, l = [], c = [], u = 0, p = 0; u < i.length; u += 3, p += 2) t.vertices.push(new n.Vector3(i[u], i[u + 1], i[u + 2])), void 0 !== a && l.push(new n.Vector3(a[u], a[u + 1], a[u + 2])), void 0 !== s && t.colors.push(new n.Color(s[u], s[u + 1], s[u + 2])), void 0 !== h && c.push(new n.Vector2(h[p], h[p + 1]));
                    var f = function(e, r, i) {
                        var o = void 0 !== a ? [l[e].clone(), l[r].clone(), l[i].clone()] : [],
                            u = void 0 !== s ? [t.colors[e].clone(), t.colors[r].clone(), t.colors[i].clone()] : [];
                        t.faces.push(new n.Face3(e, r, i, o, u)), void 0 !== h && t.faceVertexUvs[0].push([c[e].clone(), c[r].clone(), c[i].clone()]) };
                    if (void 0 !== o)
                        for (var u = 0; u < o.length; u += 3) f(o[u], o[u + 1], o[u + 2]);
                    else
                        for (var u = 0; u < i.length / 3; u += 3) f(u, u + 1, u + 2);
                    return this.computeFaceNormals(), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), this }, center: function() { this.computeBoundingBox();
                    var e = new n.Vector3;
                    return e.addVectors(this.boundingBox.min, this.boundingBox.max), e.multiplyScalar(-.5), this.applyMatrix((new n.Matrix4).makeTranslation(e.x, e.y, e.z)), this.computeBoundingBox(), e }, computeFaceNormals: function() {
                    for (var e = new n.Vector3, t = new n.Vector3, r = 0, i = this.faces.length; i > r; r++) {
                        var o = this.faces[r],
                            a = this.vertices[o.a],
                            s = this.vertices[o.b],
                            h = this.vertices[o.c];
                        e.subVectors(h, s), t.subVectors(a, s), e.cross(t), e.normalize(), o.normal.copy(e) } }, computeVertexNormals: function(e) {
                    var t, r, i, o, a, s;
                    for (s = new Array(this.vertices.length), t = 0, r = this.vertices.length; r > t; t++) s[t] = new n.Vector3;
                    if (e) {
                        {
                            var h, l, c, u = new n.Vector3,
                                p = new n.Vector3;
                            new n.Vector3, new n.Vector3, new n.Vector3 }
                        for (i = 0, o = this.faces.length; o > i; i++) a = this.faces[i], h = this.vertices[a.a], l = this.vertices[a.b], c = this.vertices[a.c], u.subVectors(c, l), p.subVectors(h, l), u.cross(p), s[a.a].add(u), s[a.b].add(u), s[a.c].add(u) } else
                        for (i = 0, o = this.faces.length; o > i; i++) a = this.faces[i], s[a.a].add(a.normal), s[a.b].add(a.normal), s[a.c].add(a.normal);
                    for (t = 0, r = this.vertices.length; r > t; t++) s[t].normalize();
                    for (i = 0, o = this.faces.length; o > i; i++) a = this.faces[i], a.vertexNormals[0] = s[a.a].clone(), a.vertexNormals[1] = s[a.b].clone(), a.vertexNormals[2] = s[a.c].clone() }, computeMorphNormals: function() {
                    var e, t, r, i, o;
                    for (r = 0, i = this.faces.length; i > r; r++)
                        for (o = this.faces[r], o.__originalFaceNormal ? o.__originalFaceNormal.copy(o.normal) : o.__originalFaceNormal = o.normal.clone(), o.__originalVertexNormals || (o.__originalVertexNormals = []), e = 0, t = o.vertexNormals.length; t > e; e++) o.__originalVertexNormals[e] ? o.__originalVertexNormals[e].copy(o.vertexNormals[e]) : o.__originalVertexNormals[e] = o.vertexNormals[e].clone();
                    var a = new n.Geometry;
                    for (a.faces = this.faces, e = 0, t = this.morphTargets.length; t > e; e++) {
                        if (!this.morphNormals[e]) { this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [];
                            var s, h, l = this.morphNormals[e].faceNormals,
                                c = this.morphNormals[e].vertexNormals;
                            for (r = 0, i = this.faces.length; i > r; r++) s = new n.Vector3, h = { a: new n.Vector3, b: new n.Vector3, c: new n.Vector3 }, l.push(s), c.push(h) }
                        var u = this.morphNormals[e];
                        a.vertices = this.morphTargets[e].vertices, a.computeFaceNormals(), a.computeVertexNormals();
                        var s, h;
                        for (r = 0, i = this.faces.length; i > r; r++) o = this.faces[r], s = u.faceNormals[r], h = u.vertexNormals[r], s.copy(o.normal), h.a.copy(o.vertexNormals[0]), h.b.copy(o.vertexNormals[1]), h.c.copy(o.vertexNormals[2]) }
                    for (r = 0, i = this.faces.length; i > r; r++) o = this.faces[r], o.normal = o.__originalFaceNormal, o.vertexNormals = o.__originalVertexNormals }, computeTangents: function() {
                    function e(e, t, r, i, n, o, a) { c = e.vertices[t], u = e.vertices[r], p = e.vertices[i], f = l[n], d = l[o], m = l[a], g = u.x - c.x, v = p.x - c.x, y = u.y - c.y, x = p.y - c.y, b = u.z - c.z, w = p.z - c.z, _ = d.x - f.x, M = m.x - f.x, S = d.y - f.y, T = m.y - f.y, C = 1 / (_ * T - M * S), F.set((T * g - S * v) * C, (T * y - S * x) * C, (T * b - S * w) * C), B.set((_ * v - M * g) * C, (_ * x - M * y) * C, (_ * w - M * b) * C), P[t].add(F), P[r].add(F), P[i].add(F), R[t].add(B), R[r].add(B), R[i].add(B) }
                    var t, r, i, o, a, s, h, l, c, u, p, f, d, m, g, v, y, x, b, w, _, M, S, T, C, E, A, L, P = [],
                        R = [],
                        F = new n.Vector3,
                        B = new n.Vector3,
                        U = new n.Vector3,
                        D = new n.Vector3,
                        V = new n.Vector3;
                    for (i = 0, o = this.vertices.length; o > i; i++) P[i] = new n.Vector3, R[i] = new n.Vector3;
                    for (t = 0, r = this.faces.length; r > t; t++) h = this.faces[t], l = this.faceVertexUvs[0][t], e(this, h.a, h.b, h.c, 0, 1, 2);
                    var z = ["a", "b", "c", "d"];
                    for (t = 0, r = this.faces.length; r > t; t++)
                        for (h = this.faces[t], a = 0; a < Math.min(h.vertexNormals.length, 3); a++) V.copy(h.vertexNormals[a]), s = h[z[a]], E = P[s], U.copy(E), U.sub(V.multiplyScalar(V.dot(E))).normalize(), D.crossVectors(h.vertexNormals[a], E), A = D.dot(R[s]), L = 0 > A ? -1 : 1, h.vertexTangents[a] = new n.Vector4(U.x, U.y, U.z, L);
                    this.hasTangents = !0 }, computeLineDistances: function() {
                    for (var e = 0, t = this.vertices, r = 0, i = t.length; i > r; r++) r > 0 && (e += t[r].distanceTo(t[r - 1])), this.lineDistances[r] = e }, computeBoundingBox: function() { null === this.boundingBox && (this.boundingBox = new n.Box3), this.boundingBox.setFromPoints(this.vertices) }, computeBoundingSphere: function() { null === this.boundingSphere && (this.boundingSphere = new n.Sphere), this.boundingSphere.setFromPoints(this.vertices) }, merge: function(e, t, r) {
                    if (e instanceof n.Geometry == !1) return console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e), void 0;
                    var i, o = this.vertices.length,
                        a = this.vertices,
                        s = e.vertices,
                        h = this.faces,
                        l = e.faces,
                        c = this.faceVertexUvs[0],
                        u = e.faceVertexUvs[0];
                    void 0 === r && (r = 0), void 0 !== t && (i = (new n.Matrix3).getNormalMatrix(t));
                    for (var p = 0, f = s.length; f > p; p++) {
                        var d = s[p],
                            m = d.clone();
                        void 0 !== t && m.applyMatrix4(t), a.push(m) }
                    for (p = 0, f = l.length; f > p; p++) {
                        var g, v, y, x = l[p],
                            b = x.vertexNormals,
                            w = x.vertexColors;
                        g = new n.Face3(x.a + o, x.b + o, x.c + o), g.normal.copy(x.normal), void 0 !== i && g.normal.applyMatrix3(i).normalize();
                        for (var _ = 0, M = b.length; M > _; _++) v = b[_].clone(), void 0 !== i && v.applyMatrix3(i).normalize(), g.vertexNormals.push(v);
                        g.color.copy(x.color);
                        for (var _ = 0, M = w.length; M > _; _++) y = w[_], g.vertexColors.push(y.clone());
                        g.materialIndex = x.materialIndex + r, h.push(g) }
                    for (p = 0, f = u.length; f > p; p++) {
                        var S = u[p],
                            T = [];
                        if (void 0 !== S) {
                            for (var _ = 0, M = S.length; M > _; _++) T.push(S[_].clone());
                            c.push(T) } } }, mergeMesh: function(e) {
                    return e instanceof n.Mesh == !1 ? (console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e), void 0) : (e.matrixAutoUpdate && e.updateMatrix(), this.merge(e.geometry, e.matrix), void 0) }, mergeVertices: function() {
                    var e, t, r, i, n, o, a, s, h = {},
                        l = [],
                        c = [],
                        u = 4,
                        p = Math.pow(10, u);
                    for (r = 0, i = this.vertices.length; i > r; r++) e = this.vertices[r], t = Math.round(e.x * p) + "_" + Math.round(e.y * p) + "_" + Math.round(e.z * p), void 0 === h[t] ? (h[t] = r, l.push(this.vertices[r]), c[r] = l.length - 1) : c[r] = c[h[t]];
                    var f = [];
                    for (r = 0, i = this.faces.length; i > r; r++) { n = this.faces[r], n.a = c[n.a], n.b = c[n.b], n.c = c[n.c], o = [n.a, n.b, n.c];
                        for (var d = -1, m = 0; 3 > m; m++)
                            if (o[m] == o[(m + 1) % 3]) { d = m, f.push(r);
                                break } }
                    for (r = f.length - 1; r >= 0; r--) {
                        var g = f[r];
                        for (this.faces.splice(g, 1), a = 0, s = this.faceVertexUvs.length; s > a; a++) this.faceVertexUvs[a].splice(g, 1) }
                    var v = this.vertices.length - l.length;
                    return this.vertices = l, v }, toJSON: function() {
                    function e(e, t, r) {
                        return r ? e | 1 << t : e & ~(1 << t) }

                    function t(e) {
                        var t = e.x.toString() + e.y.toString() + e.z.toString();
                        return void 0 !== p[t] ? p[t] : (p[t] = u.length / 3, u.push(e.x, e.y, e.z), p[t]) }

                    function r(e) {
                        var t = e.r.toString() + e.g.toString() + e.b.toString();
                        return void 0 !== d[t] ? d[t] : (d[t] = f.length, f.push(e.getHex()), d[t]) }

                    function i(e) {
                        var t = e.x.toString() + e.y.toString();
                        return void 0 !== g[t] ? g[t] : (g[t] = m.length / 2, m.push(e.x, e.y), g[t]) }
                    var n = { metadata: { version: 4, type: "BufferGeometry", generator: "BufferGeometryExporter" }, uuid: this.uuid, type: this.type };
                    if ("" !== this.name && (n.name = this.name), void 0 !== this.parameters) {
                        var o = this.parameters;
                        for (var a in o) void 0 !== o[a] && (n[a] = o[a]);
                        return n }
                    for (var s = [], h = 0; h < this.vertices.length; h++) {
                        var l = this.vertices[h];
                        s.push(l.x, l.y, l.z) }
                    for (var c = [], u = [], p = {}, f = [], d = {}, m = [], g = {}, h = 0; h < this.faces.length; h++) {
                        var v = this.faces[h],
                            y = !1,
                            x = !1,
                            b = void 0 !== this.faceVertexUvs[0][h],
                            w = v.normal.length() > 0,
                            _ = v.vertexNormals.length > 0,
                            M = 1 !== v.color.r || 1 !== v.color.g || 1 !== v.color.b,
                            S = v.vertexColors.length > 0,
                            T = 0;
                        if (T = e(T, 0, 0), T = e(T, 1, y), T = e(T, 2, x), T = e(T, 3, b), T = e(T, 4, w), T = e(T, 5, _), T = e(T, 6, M), T = e(T, 7, S), c.push(T), c.push(v.a, v.b, v.c), b) {
                            var C = this.faceVertexUvs[0][h];
                            c.push(i(C[0]), i(C[1]), i(C[2])) }
                        if (w && c.push(t(v.normal)), _) {
                            var E = v.vertexNormals;
                            c.push(t(E[0]), t(E[1]), t(E[2])) }
                        if (M && c.push(r(v.color)), S) {
                            var A = v.vertexColors;
                            c.push(r(A[0]), r(A[1]), r(A[2])) } }
                    return n.data = {}, n.data.vertices = s, n.data.normals = u, f.length > 0 && (n.data.colors = f), m.length > 0 && (n.data.uvs = [m]), n.data.faces = c, n }, clone: function() {
                    for (var e = new n.Geometry, t = this.vertices, r = 0, i = t.length; i > r; r++) e.vertices.push(t[r].clone());
                    for (var o = this.faces, r = 0, i = o.length; i > r; r++) e.faces.push(o[r].clone());
                    for (var r = 0, i = this.faceVertexUvs.length; i > r; r++) {
                        var a = this.faceVertexUvs[r];
                        void 0 === e.faceVertexUvs[r] && (e.faceVertexUvs[r] = []);
                        for (var s = 0, h = a.length; h > s; s++) {
                            for (var l = a[s], c = [], u = 0, p = l.length; p > u; u++) {
                                var f = l[u];
                                c.push(f.clone()) }
                            e.faceVertexUvs[r].push(c) } }
                    return e }, dispose: function() { this.dispatchEvent({ type: "dispose" }) } }, n.EventDispatcher.prototype.apply(n.Geometry.prototype), n.GeometryIdCount = 0, n.Camera = function() { n.Object3D.call(this), this.type = "Camera", this.matrixWorldInverse = new n.Matrix4, this.projectionMatrix = new n.Matrix4 }, n.Camera.prototype = Object.create(n.Object3D.prototype), n.Camera.prototype.constructor = n.Camera, n.Camera.prototype.getWorldDirection = function() {
                var e = new n.Quaternion;
                return function(t) {
                    var r = t || new n.Vector3;
                    return this.getWorldQuaternion(e), r.set(0, 0, -1).applyQuaternion(e) } }(), n.Camera.prototype.lookAt = function() {
                var e = new n.Matrix4;
                return function(t) { e.lookAt(this.position, t, this.up), this.quaternion.setFromRotationMatrix(e) } }(), n.Camera.prototype.clone = function(e) {
                return void 0 === e && (e = new n.Camera), n.Object3D.prototype.clone.call(this, e), e.matrixWorldInverse.copy(this.matrixWorldInverse), e.projectionMatrix.copy(this.projectionMatrix), e }, n.CubeCamera = function(e, t, r) { n.Object3D.call(this), this.type = "CubeCamera";
                var i = 90,
                    o = 1,
                    a = new n.PerspectiveCamera(i, o, e, t);
                a.up.set(0, -1, 0), a.lookAt(new n.Vector3(1, 0, 0)), this.add(a);
                var s = new n.PerspectiveCamera(i, o, e, t);
                s.up.set(0, -1, 0), s.lookAt(new n.Vector3(-1, 0, 0)), this.add(s);
                var h = new n.PerspectiveCamera(i, o, e, t);
                h.up.set(0, 0, 1), h.lookAt(new n.Vector3(0, 1, 0)), this.add(h);
                var l = new n.PerspectiveCamera(i, o, e, t);
                l.up.set(0, 0, -1), l.lookAt(new n.Vector3(0, -1, 0)), this.add(l);
                var c = new n.PerspectiveCamera(i, o, e, t);
                c.up.set(0, -1, 0), c.lookAt(new n.Vector3(0, 0, 1)), this.add(c);
                var u = new n.PerspectiveCamera(i, o, e, t);
                u.up.set(0, -1, 0), u.lookAt(new n.Vector3(0, 0, -1)), this.add(u), this.renderTarget = new n.WebGLRenderTargetCube(r, r, { format: n.RGBFormat, magFilter: n.LinearFilter, minFilter: n.LinearFilter }), this.updateCubeMap = function(e, t) {
                    var r = this.renderTarget,
                        i = r.generateMipmaps;
                    r.generateMipmaps = !1, r.activeCubeFace = 0, e.render(t, a, r), r.activeCubeFace = 1, e.render(t, s, r), r.activeCubeFace = 2, e.render(t, h, r), r.activeCubeFace = 3, e.render(t, l, r), r.activeCubeFace = 4, e.render(t, c, r), r.generateMipmaps = i, r.activeCubeFace = 5, e.render(t, u, r) } }, n.CubeCamera.prototype = Object.create(n.Object3D.prototype), n.CubeCamera.prototype.constructor = n.CubeCamera, n.OrthographicCamera = function(e, t, r, i, o, a) { n.Camera.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.left = e, this.right = t, this.top = r, this.bottom = i, this.near = void 0 !== o ? o : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix() }, n.OrthographicCamera.prototype = Object.create(n.Camera.prototype), n.OrthographicCamera.prototype.constructor = n.OrthographicCamera, n.OrthographicCamera.prototype.updateProjectionMatrix = function() {
                var e = (this.right - this.left) / (2 * this.zoom),
                    t = (this.top - this.bottom) / (2 * this.zoom),
                    r = (this.right + this.left) / 2,
                    i = (this.top + this.bottom) / 2;
                this.projectionMatrix.makeOrthographic(r - e, r + e, i + t, i - t, this.near, this.far) }, n.OrthographicCamera.prototype.clone = function() {
                var e = new n.OrthographicCamera;
                return n.Camera.prototype.clone.call(this, e), e.zoom = this.zoom, e.left = this.left, e.right = this.right, e.top = this.top, e.bottom = this.bottom, e.near = this.near, e.far = this.far, e.projectionMatrix.copy(this.projectionMatrix), e }, n.PerspectiveCamera = function(e, t, r, i) { n.Camera.call(this), this.type = "PerspectiveCamera", this.zoom = 1, this.fov = void 0 !== e ? e : 50, this.aspect = void 0 !== t ? t : 1, this.near = void 0 !== r ? r : .1, this.far = void 0 !== i ? i : 2e3, this.updateProjectionMatrix() }, n.PerspectiveCamera.prototype = Object.create(n.Camera.prototype), n.PerspectiveCamera.prototype.constructor = n.PerspectiveCamera, n.PerspectiveCamera.prototype.setLens = function(e, t) { void 0 === t && (t = 24), this.fov = 2 * n.Math.radToDeg(Math.atan(t / (2 * e))), this.updateProjectionMatrix() }, n.PerspectiveCamera.prototype.setViewOffset = function(e, t, r, i, n, o) { this.fullWidth = e, this.fullHeight = t, this.x = r, this.y = i, this.width = n, this.height = o, this.updateProjectionMatrix() }, n.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
                var e = n.Math.radToDeg(2 * Math.atan(Math.tan(.5 * n.Math.degToRad(this.fov)) / this.zoom));
                if (this.fullWidth) {
                    var t = this.fullWidth / this.fullHeight,
                        r = Math.tan(n.Math.degToRad(.5 * e)) * this.near,
                        i = -r,
                        o = t * i,
                        a = t * r,
                        s = Math.abs(a - o),
                        h = Math.abs(r - i);
                    this.projectionMatrix.makeFrustum(o + this.x * s / this.fullWidth, o + (this.x + this.width) * s / this.fullWidth, r - (this.y + this.height) * h / this.fullHeight, r - this.y * h / this.fullHeight, this.near, this.far) } else this.projectionMatrix.makePerspective(e, this.aspect, this.near, this.far) }, n.PerspectiveCamera.prototype.clone = function() {
                var e = new n.PerspectiveCamera;
                return n.Camera.prototype.clone.call(this, e), e.zoom = this.zoom, e.fov = this.fov, e.aspect = this.aspect, e.near = this.near, e.far = this.far, e.projectionMatrix.copy(this.projectionMatrix), e }, n.Light = function(e) { n.Object3D.call(this), this.type = "Light", this.color = new n.Color(e) }, n.Light.prototype = Object.create(n.Object3D.prototype), n.Light.prototype.constructor = n.Light, n.Light.prototype.clone = function(e) {
                return void 0 === e && (e = new n.Light), n.Object3D.prototype.clone.call(this, e), e.color.copy(this.color), e }, n.AmbientLight = function(e) { n.Light.call(this, e), this.type = "AmbientLight" }, n.AmbientLight.prototype = Object.create(n.Light.prototype), n.AmbientLight.prototype.constructor = n.AmbientLight, n.AmbientLight.prototype.clone = function() {
                var e = new n.AmbientLight;
                return n.Light.prototype.clone.call(this, e), e }, n.AreaLight = function(e, t) { n.Light.call(this, e), this.type = "AreaLight", this.normal = new n.Vector3(0, -1, 0), this.right = new n.Vector3(1, 0, 0), this.intensity = void 0 !== t ? t : 1, this.width = 1, this.height = 1, this.constantAttenuation = 1.5, this.linearAttenuation = .5, this.quadraticAttenuation = .1 }, n.AreaLight.prototype = Object.create(n.Light.prototype), n.AreaLight.prototype.constructor = n.AreaLight, n.DirectionalLight = function(e, t) { n.Light.call(this, e), this.type = "DirectionalLight", this.position.set(0, 1, 0), this.target = new n.Object3D, this.intensity = void 0 !== t ? t : 1, this.castShadow = !1, this.onlyShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraLeft = -500, this.shadowCameraRight = 500, this.shadowCameraTop = 500, this.shadowCameraBottom = -500, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.shadowCascade = !1, this.shadowCascadeOffset = new n.Vector3(0, 0, -1e3), this.shadowCascadeCount = 2, this.shadowCascadeBias = [0, 0, 0], this.shadowCascadeWidth = [512, 512, 512], this.shadowCascadeHeight = [512, 512, 512], this.shadowCascadeNearZ = [-1, .99, .998], this.shadowCascadeFarZ = [.99, .998, 1], this.shadowCascadeArray = [], this.shadowMap = null, this.shadowMapSize = null, this.shadowCamera = null, this.shadowMatrix = null }, n.DirectionalLight.prototype = Object.create(n.Light.prototype), n.DirectionalLight.prototype.constructor = n.DirectionalLight, n.DirectionalLight.prototype.clone = function() {
                var e = new n.DirectionalLight;
                return n.Light.prototype.clone.call(this, e), e.target = this.target.clone(), e.intensity = this.intensity, e.castShadow = this.castShadow, e.onlyShadow = this.onlyShadow, e.shadowCameraNear = this.shadowCameraNear, e.shadowCameraFar = this.shadowCameraFar, e.shadowCameraLeft = this.shadowCameraLeft, e.shadowCameraRight = this.shadowCameraRight, e.shadowCameraTop = this.shadowCameraTop, e.shadowCameraBottom = this.shadowCameraBottom, e.shadowCameraVisible = this.shadowCameraVisible, e.shadowBias = this.shadowBias, e.shadowDarkness = this.shadowDarkness, e.shadowMapWidth = this.shadowMapWidth, e.shadowMapHeight = this.shadowMapHeight, e.shadowCascade = this.shadowCascade, e.shadowCascadeOffset.copy(this.shadowCascadeOffset), e.shadowCascadeCount = this.shadowCascadeCount, e.shadowCascadeBias = this.shadowCascadeBias.slice(0), e.shadowCascadeWidth = this.shadowCascadeWidth.slice(0), e.shadowCascadeHeight = this.shadowCascadeHeight.slice(0), e.shadowCascadeNearZ = this.shadowCascadeNearZ.slice(0), e.shadowCascadeFarZ = this.shadowCascadeFarZ.slice(0), e }, n.HemisphereLight = function(e, t, r) { n.Light.call(this, e), this.type = "HemisphereLight", this.position.set(0, 100, 0), this.groundColor = new n.Color(t), this.intensity = void 0 !== r ? r : 1 }, n.HemisphereLight.prototype = Object.create(n.Light.prototype), n.HemisphereLight.prototype.constructor = n.HemisphereLight, n.HemisphereLight.prototype.clone = function() {
                var e = new n.HemisphereLight;
                return n.Light.prototype.clone.call(this, e), e.groundColor.copy(this.groundColor), e.intensity = this.intensity, e }, n.PointLight = function(e, t, r) { n.Light.call(this, e), this.type = "PointLight", this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== r ? r : 0 }, n.PointLight.prototype = Object.create(n.Light.prototype), n.PointLight.prototype.constructor = n.PointLight, n.PointLight.prototype.clone = function() {
                var e = new n.PointLight;
                return n.Light.prototype.clone.call(this, e), e.intensity = this.intensity, e.distance = this.distance, e }, n.SpotLight = function(e, t, r, i, o) { n.Light.call(this, e), this.type = "SpotLight", this.position.set(0, 1, 0), this.target = new n.Object3D, this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== r ? r : 0, this.angle = void 0 !== i ? i : Math.PI / 3, this.exponent = void 0 !== o ? o : 10, this.castShadow = !1, this.onlyShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraFov = 50, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.shadowMap = null, this.shadowMapSize = null, this.shadowCamera = null, this.shadowMatrix = null }, n.SpotLight.prototype = Object.create(n.Light.prototype), n.SpotLight.prototype.constructor = n.SpotLight, n.SpotLight.prototype.clone = function() {
                var e = new n.SpotLight;
                return n.Light.prototype.clone.call(this, e), e.target = this.target.clone(), e.intensity = this.intensity, e.distance = this.distance, e.angle = this.angle, e.exponent = this.exponent, e.castShadow = this.castShadow, e.onlyShadow = this.onlyShadow, e.shadowCameraNear = this.shadowCameraNear, e.shadowCameraFar = this.shadowCameraFar, e.shadowCameraFov = this.shadowCameraFov, e.shadowCameraVisible = this.shadowCameraVisible, e.shadowBias = this.shadowBias, e.shadowDarkness = this.shadowDarkness, e.shadowMapWidth = this.shadowMapWidth, e.shadowMapHeight = this.shadowMapHeight, e }, n.Cache = function() { this.files = {} }, n.Cache.prototype = { constructor: n.Cache, add: function(e, t) { this.files[e] = t }, get: function(e) {
                    return this.files[e] }, remove: function(e) { delete this.files[e] }, clear: function() { this.files = {} } }, n.Loader = function(e) { this.showStatus = e, this.statusDomElement = e ? n.Loader.prototype.addStatusElement() : null, this.imageLoader = new n.ImageLoader, this.onLoadStart = function() {}, this.onLoadProgress = function() {}, this.onLoadComplete = function() {} }, n.Loader.prototype = { constructor: n.Loader, crossOrigin: void 0, addStatusElement: function() {
                    var e = document.createElement("div");
                    return e.style.position = "absolute", e.style.right = "0px", e.style.top = "0px", e.style.fontSize = "0.8em", e.style.textAlign = "left", e.style.background = "rgba(0,0,0,0.25)", e.style.color = "#fff", e.style.width = "120px", e.style.padding = "0.5em 0.5em 0.5em 0.5em", e.style.zIndex = 1e3, e.innerHTML = "Loading ...", e }, updateProgress: function(e) {
                    var t = "Loaded ";
                    t += e.total ? (100 * e.loaded / e.total).toFixed(0) + "%" : (e.loaded / 1024).toFixed(2) + " KB", this.statusDomElement.innerHTML = t }, extractUrlBase: function(e) {
                    var t = e.split("/");
                    return 1 === t.length ? "./" : (t.pop(), t.join("/") + "/") }, initMaterials: function(e, t) {
                    for (var r = [], i = 0; i < e.length; ++i) r[i] = this.createMaterial(e[i], t);
                    return r }, needsTangents: function(e) {
                    for (var t = 0, r = e.length; r > t; t++) {
                        var i = e[t];
                        if (i instanceof n.ShaderMaterial) return !0 }
                    return !1 }, createMaterial: function(e, t) {
                    function r(e) {
                        var t = Math.log(e) / Math.LN2;
                        return Math.pow(2, Math.round(t)) }

                    function i(e, i, o, s, h, l, c) {
                        var u, p = t + o,
                            f = n.Loader.Handlers.get(p);
                        if (null !== f ? u = f.load(p) : (u = new n.Texture, f = a.imageLoader, f.crossOrigin = a.crossOrigin, f.load(p, function(e) {
                                if (n.Math.isPowerOfTwo(e.width) === !1 || n.Math.isPowerOfTwo(e.height) === !1) {
                                    var t = r(e.width),
                                        i = r(e.height),
                                        o = document.createElement("canvas");
                                    o.width = t, o.height = i;
                                    var a = o.getContext("2d");
                                    a.drawImage(e, 0, 0, t, i), u.image = o } else u.image = e;
                                u.needsUpdate = !0 })), u.sourceFile = o, s && (u.repeat.set(s[0], s[1]), 1 !== s[0] && (u.wrapS = n.RepeatWrapping), 1 !== s[1] && (u.wrapT = n.RepeatWrapping)), h && u.offset.set(h[0], h[1]), l) {
                            var d = { repeat: n.RepeatWrapping, mirror: n.MirroredRepeatWrapping };
                            void 0 !== d[l[0]] && (u.wrapS = d[l[0]]), void 0 !== d[l[1]] && (u.wrapT = d[l[1]]) }
                        c && (u.anisotropy = c), e[i] = u }

                    function o(e) {
                        return (255 * e[0] << 16) + (255 * e[1] << 8) + 255 * e[2] }
                    var a = this,
                        s = "MeshLambertMaterial",
                        h = { color: 15658734, opacity: 1, map: null, lightMap: null, normalMap: null, bumpMap: null, wireframe: !1 };
                    if (e.shading) {
                        var l = e.shading.toLowerCase(); "phong" === l ? s = "MeshPhongMaterial" : "basic" === l && (s = "MeshBasicMaterial") }
                    void 0 !== e.blending && void 0 !== n[e.blending] && (h.blending = n[e.blending]), (void 0 !== e.transparent || e.opacity < 1) && (h.transparent = e.transparent), void 0 !== e.depthTest && (h.depthTest = e.depthTest), void 0 !== e.depthWrite && (h.depthWrite = e.depthWrite), void 0 !== e.visible && (h.visible = e.visible), void 0 !== e.flipSided && (h.side = n.BackSide), void 0 !== e.doubleSided && (h.side = n.DoubleSide), void 0 !== e.wireframe && (h.wireframe = e.wireframe), void 0 !== e.vertexColors && ("face" === e.vertexColors ? h.vertexColors = n.FaceColors : e.vertexColors && (h.vertexColors = n.VertexColors)), e.colorDiffuse ? h.color = o(e.colorDiffuse) : e.DbgColor && (h.color = e.DbgColor), e.colorSpecular && (h.specular = o(e.colorSpecular)), e.colorAmbient && (h.ambient = o(e.colorAmbient)), e.colorEmissive && (h.emissive = o(e.colorEmissive)), e.transparency && (h.opacity = e.transparency), e.specularCoef && (h.shininess = e.specularCoef), e.mapDiffuse && t && i(h, "map", e.mapDiffuse, e.mapDiffuseRepeat, e.mapDiffuseOffset, e.mapDiffuseWrap, e.mapDiffuseAnisotropy), e.mapLight && t && i(h, "lightMap", e.mapLight, e.mapLightRepeat, e.mapLightOffset, e.mapLightWrap, e.mapLightAnisotropy), e.mapBump && t && i(h, "bumpMap", e.mapBump, e.mapBumpRepeat, e.mapBumpOffset, e.mapBumpWrap, e.mapBumpAnisotropy), e.mapNormal && t && i(h, "normalMap", e.mapNormal, e.mapNormalRepeat, e.mapNormalOffset, e.mapNormalWrap, e.mapNormalAnisotropy), e.mapSpecular && t && i(h, "specularMap", e.mapSpecular, e.mapSpecularRepeat, e.mapSpecularOffset, e.mapSpecularWrap, e.mapSpecularAnisotropy), e.mapAlpha && t && i(h, "alphaMap", e.mapAlpha, e.mapAlphaRepeat, e.mapAlphaOffset, e.mapAlphaWrap, e.mapAlphaAnisotropy), e.mapBumpScale && (h.bumpScale = e.mapBumpScale), e.mapNormalFactor && (h.normalScale = new n.Vector2(e.mapNormalFactor, e.mapNormalFactor));
                    var c = new n[s](h);
                    return void 0 !== e.DbgName && (c.name = e.DbgName), c } }, n.Loader.Handlers = { handlers: [], add: function(e, t) { this.handlers.push(e, t) }, get: function(e) {
                    for (var t = 0, r = this.handlers.length; r > t; t += 2) {
                        var i = this.handlers[t],
                            n = this.handlers[t + 1];
                        if (i.test(e)) return n }
                    return null } }, n.XHRLoader = function(e) { this.cache = new n.Cache, this.manager = void 0 !== e ? e : n.DefaultLoadingManager }, n.XHRLoader.prototype = { constructor: n.XHRLoader, load: function(e, t, r, i) {
                    var n = this,
                        o = n.cache.get(e);
                    if (void 0 !== o) return t && t(o), void 0;
                    var a = new XMLHttpRequest;
                    a.open("GET", e, !0), a.addEventListener("load", function() { n.cache.add(e, this.response), t && t(this.response), n.manager.itemEnd(e) }, !1), void 0 !== r && a.addEventListener("progress", function(e) { r(e) }, !1), void 0 !== i && a.addEventListener("error", function(e) { i(e) }, !1), void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), void 0 !== this.responseType && (a.responseType = this.responseType), a.send(null), n.manager.itemStart(e) }, setResponseType: function(e) { this.responseType = e }, setCrossOrigin: function(e) { this.crossOrigin = e } }, n.ImageLoader = function(e) { this.cache = new n.Cache, this.manager = void 0 !== e ? e : n.DefaultLoadingManager }, n.ImageLoader.prototype = { constructor: n.ImageLoader, load: function(e, t, r, i) {
                    var n = this,
                        o = n.cache.get(e);
                    if (void 0 !== o) return t(o), void 0;
                    var a = document.createElement("img");
                    return void 0 !== t && a.addEventListener("load", function() { n.cache.add(e, this), t(this), n.manager.itemEnd(e) }, !1), void 0 !== r && a.addEventListener("progress", function(e) { r(e) }, !1), void 0 !== i && a.addEventListener("error", function(e) { i(e) }, !1), void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), a.src = e, n.manager.itemStart(e), a }, setCrossOrigin: function(e) { this.crossOrigin = e } }, n.JSONLoader = function(e) { n.Loader.call(this, e), this.withCredentials = !1 }, n.JSONLoader.prototype = Object.create(n.Loader.prototype), n.JSONLoader.prototype.constructor = n.JSONLoader, n.JSONLoader.prototype.load = function(e, t, r) { r = r && "string" == typeof r ? r : this.extractUrlBase(e), this.onLoadStart(), this.loadAjaxJSON(this, e, t, r) }, n.JSONLoader.prototype.loadAjaxJSON = function(e, t, r, i, n) {
                var o = new XMLHttpRequest,
                    a = 0;
                o.onreadystatechange = function() {
                    if (o.readyState === o.DONE)
                        if (200 === o.status || 0 === o.status) {
                            if (o.responseText) {
                                var s = JSON.parse(o.responseText);
                                if (void 0 !== s.metadata && "scene" === s.metadata.type) return console.error('THREE.JSONLoader: "' + t + '" seems to be a Scene. Use THREE.SceneLoader instead.'), void 0;
                                var h = e.parse(s, i);
                                r(h.geometry, h.materials) } else console.error('THREE.JSONLoader: "' + t + '" seems to be unreachable or the file is empty.');
                            e.onLoadComplete() } else console.error("THREE.JSONLoader: Couldn't load \"" + t + '" (' + o.status + ")");
                    else o.readyState === o.LOADING ? n && (0 === a && (a = o.getResponseHeader("Content-Length")), n({ total: a, loaded: o.responseText.length })) : o.readyState === o.HEADERS_RECEIVED && void 0 !== n && (a = o.getResponseHeader("Content-Length")) }, o.open("GET", t, !0), o.withCredentials = this.withCredentials, o.send(null) }, n.JSONLoader.prototype.parse = function(e, t) {
                function r(t) {
                    function r(e, t) {
                        return e & 1 << t }
                    var i, o, s, h, l, c, u, p, f, d, m, g, v, y, x, b, w, _, M, S, T, C, E, A, L, P, R, F = e.faces,
                        B = e.vertices,
                        U = e.normals,
                        D = e.colors,
                        V = 0;
                    if (void 0 !== e.uvs) {
                        for (i = 0; i < e.uvs.length; i++) e.uvs[i].length && V++;
                        for (i = 0; V > i; i++) a.faceVertexUvs[i] = [] }
                    for (h = 0, l = B.length; l > h;) _ = new n.Vector3, _.x = B[h++] * t, _.y = B[h++] * t, _.z = B[h++] * t, a.vertices.push(_);
                    for (h = 0, l = F.length; l > h;)
                        if (d = F[h++], m = r(d, 0), g = r(d, 1), v = r(d, 3), y = r(d, 4), x = r(d, 5), b = r(d, 6), w = r(d, 7), m) {
                            if (S = new n.Face3, S.a = F[h], S.b = F[h + 1], S.c = F[h + 3], T = new n.Face3, T.a = F[h + 1], T.b = F[h + 2], T.c = F[h + 3], h += 4, g && (f = F[h++], S.materialIndex = f, T.materialIndex = f), s = a.faces.length, v)
                                for (i = 0; V > i; i++)
                                    for (A = e.uvs[i], a.faceVertexUvs[i][s] = [], a.faceVertexUvs[i][s + 1] = [], o = 0; 4 > o; o++) p = F[h++], P = A[2 * p], R = A[2 * p + 1], L = new n.Vector2(P, R), 2 !== o && a.faceVertexUvs[i][s].push(L), 0 !== o && a.faceVertexUvs[i][s + 1].push(L);
                            if (y && (u = 3 * F[h++], S.normal.set(U[u++], U[u++], U[u]), T.normal.copy(S.normal)), x)
                                for (i = 0; 4 > i; i++) u = 3 * F[h++], E = new n.Vector3(U[u++], U[u++], U[u]), 2 !== i && S.vertexNormals.push(E), 0 !== i && T.vertexNormals.push(E);
                            if (b && (c = F[h++], C = D[c], S.color.setHex(C), T.color.setHex(C)), w)
                                for (i = 0; 4 > i; i++) c = F[h++], C = D[c], 2 !== i && S.vertexColors.push(new n.Color(C)), 0 !== i && T.vertexColors.push(new n.Color(C));
                            a.faces.push(S), a.faces.push(T) } else {
                            if (M = new n.Face3, M.a = F[h++], M.b = F[h++], M.c = F[h++], g && (f = F[h++], M.materialIndex = f), s = a.faces.length, v)
                                for (i = 0; V > i; i++)
                                    for (A = e.uvs[i], a.faceVertexUvs[i][s] = [], o = 0; 3 > o; o++) p = F[h++], P = A[2 * p], R = A[2 * p + 1], L = new n.Vector2(P, R), a.faceVertexUvs[i][s].push(L);
                            if (y && (u = 3 * F[h++], M.normal.set(U[u++], U[u++], U[u])), x)
                                for (i = 0; 3 > i; i++) u = 3 * F[h++], E = new n.Vector3(U[u++], U[u++], U[u]), M.vertexNormals.push(E);
                            if (b && (c = F[h++], M.color.setHex(D[c])), w)
                                for (i = 0; 3 > i; i++) c = F[h++], M.vertexColors.push(new n.Color(D[c]));
                            a.faces.push(M) } }

                function i() {
                    var t = void 0 !== e.influencesPerVertex ? e.influencesPerVertex : 2;
                    if (e.skinWeights)
                        for (var r = 0, i = e.skinWeights.length; i > r; r += t) {
                            var o = e.skinWeights[r],
                                s = t > 1 ? e.skinWeights[r + 1] : 0,
                                h = t > 2 ? e.skinWeights[r + 2] : 0,
                                l = t > 3 ? e.skinWeights[r + 3] : 0;
                            a.skinWeights.push(new n.Vector4(o, s, h, l)) }
                    if (e.skinIndices)
                        for (var r = 0, i = e.skinIndices.length; i > r; r += t) {
                            var c = e.skinIndices[r],
                                u = t > 1 ? e.skinIndices[r + 1] : 0,
                                p = t > 2 ? e.skinIndices[r + 2] : 0,
                                f = t > 3 ? e.skinIndices[r + 3] : 0;
                            a.skinIndices.push(new n.Vector4(c, u, p, f)) }
                    a.bones = e.bones, a.bones && a.bones.length > 0 && (a.skinWeights.length !== a.skinIndices.length || a.skinIndices.length !== a.vertices.length) && console.warn("When skinning, number of vertices (" + a.vertices.length + "), skinIndices (" + a.skinIndices.length + "), and skinWeights (" + a.skinWeights.length + ") should match."), a.animation = e.animation, a.animations = e.animations }

                function o(t) {
                    if (void 0 !== e.morphTargets) {
                        var r, i, o, s, h, l;
                        for (r = 0, i = e.morphTargets.length; i > r; r++)
                            for (a.morphTargets[r] = {}, a.morphTargets[r].name = e.morphTargets[r].name, a.morphTargets[r].vertices = [], h = a.morphTargets[r].vertices, l = e.morphTargets[r].vertices, o = 0, s = l.length; s > o; o += 3) {
                                var c = new n.Vector3;
                                c.x = l[o] * t, c.y = l[o + 1] * t, c.z = l[o + 2] * t, h.push(c) } }
                    if (void 0 !== e.morphColors) {
                        var r, i, u, p, f, d, m;
                        for (r = 0, i = e.morphColors.length; i > r; r++)
                            for (a.morphColors[r] = {}, a.morphColors[r].name = e.morphColors[r].name, a.morphColors[r].colors = [], f = a.morphColors[r].colors, d = e.morphColors[r].colors, u = 0, p = d.length; p > u; u += 3) m = new n.Color(16755200), m.setRGB(d[u], d[u + 1], d[u + 2]), f.push(m) } }
                var a = new n.Geometry,
                    s = void 0 !== e.scale ? 1 / e.scale : 1;
                if (r(s), i(), o(s), a.computeFaceNormals(), a.computeBoundingSphere(), void 0 === e.materials || 0 === e.materials.length) return { geometry: a };
                var h = this.initMaterials(e.materials, t);
                return this.needsTangents(h) && a.computeTangents(), { geometry: a, materials: h } }, n.LoadingManager = function(e, t, r) {
                var i = this,
                    n = 0,
                    o = 0;
                this.onLoad = e, this.onProgress = t, this.onError = r, this.itemStart = function() { o++ }, this.itemEnd = function(e) { n++, void 0 !== i.onProgress && i.onProgress(e, n, o), n === o && void 0 !== i.onLoad && i.onLoad() } }, n.DefaultLoadingManager = new n.LoadingManager, n.BufferGeometryLoader = function(e) { this.manager = void 0 !== e ? e : n.DefaultLoadingManager }, n.BufferGeometryLoader.prototype = { constructor: n.BufferGeometryLoader, load: function(e, t, r, i) {
                    var o = this,
                        a = new n.XHRLoader(o.manager);
                    a.setCrossOrigin(this.crossOrigin), a.load(e, function(e) { t(o.parse(JSON.parse(e))) }, r, i) }, setCrossOrigin: function(e) { this.crossOrigin = e }, parse: function(e) {
                    var t = new n.BufferGeometry,
                        r = e.attributes;
                    for (var o in r) {
                        var a = r[o],
                            s = new i[a.type](a.array);
                        t.addAttribute(o, new n.BufferAttribute(s, a.itemSize)) }
                    var h = e.offsets;
                    void 0 !== h && (t.offsets = JSON.parse(JSON.stringify(h)));
                    var l = e.boundingSphere;
                    if (void 0 !== l) {
                        var c = new n.Vector3;
                        void 0 !== l.center && c.fromArray(l.center), t.boundingSphere = new n.Sphere(c, l.radius) }
                    return t } }, n.MaterialLoader = function(e) { this.manager = void 0 !== e ? e : n.DefaultLoadingManager }, n.MaterialLoader.prototype = {
                constructor: n.MaterialLoader,
                load: function(e, t, r, i) {
                    var o = this,
                        a = new n.XHRLoader(o.manager);
                    a.setCrossOrigin(this.crossOrigin), a.load(e, function(e) {
                        t(o.parse(JSON.parse(e)))
                    }, r, i)
                },
                setCrossOrigin: function(e) { this.crossOrigin = e },
                parse: function(e) {
                    var t = new n[e.type];
                    if (void 0 !== e.color && t.color.setHex(e.color), void 0 !== e.ambient && t.ambient.setHex(e.ambient), void 0 !== e.emissive && t.emissive.setHex(e.emissive), void 0 !== e.specular && t.specular.setHex(e.specular), void 0 !== e.shininess && (t.shininess = e.shininess), void 0 !== e.uniforms && (t.uniforms = e.uniforms), void 0 !== e.vertexShader && (t.vertexShader = e.vertexShader), void 0 !== e.fragmentShader && (t.fragmentShader = e.fragmentShader), void 0 !== e.vertexColors && (t.vertexColors = e.vertexColors), void 0 !== e.shading && (t.shading = e.shading), void 0 !== e.blending && (t.blending = e.blending), void 0 !== e.side && (t.side = e.side), void 0 !== e.opacity && (t.opacity = e.opacity), void 0 !== e.transparent && (t.transparent = e.transparent), void 0 !== e.wireframe && (t.wireframe = e.wireframe), void 0 !== e.materials)
                        for (var r = 0, i = e.materials.length; i > r; r++) t.materials.push(this.parse(e.materials[r]));
                    return t }
            }, n.ObjectLoader = function(e) { this.manager = void 0 !== e ? e : n.DefaultLoadingManager }, n.ObjectLoader.prototype = { constructor: n.ObjectLoader, load: function(e, t, r, i) {
                    var o = this,
                        a = new n.XHRLoader(o.manager);
                    a.setCrossOrigin(this.crossOrigin), a.load(e, function(e) { t(o.parse(JSON.parse(e))) }, r, i) }, setCrossOrigin: function(e) { this.crossOrigin = e }, parse: function(e) {
                    var t = this.parseGeometries(e.geometries),
                        r = this.parseMaterials(e.materials),
                        i = this.parseObject(e.object, t, r);
                    return i }, parseGeometries: function(e) {
                    var t = {};
                    if (void 0 !== e)
                        for (var r = new n.JSONLoader, i = new n.BufferGeometryLoader, o = 0, a = e.length; a > o; o++) {
                            var s, h = e[o];
                            switch (h.type) {
                                case "PlaneGeometry":
                                    s = new n.PlaneGeometry(h.width, h.height, h.widthSegments, h.heightSegments);
                                    break;
                                case "BoxGeometry":
                                case "CubeGeometry":
                                    s = new n.BoxGeometry(h.width, h.height, h.depth, h.widthSegments, h.heightSegments, h.depthSegments);
                                    break;
                                case "CircleGeometry":
                                    s = new n.CircleGeometry(h.radius, h.segments);
                                    break;
                                case "CylinderGeometry":
                                    s = new n.CylinderGeometry(h.radiusTop, h.radiusBottom, h.height, h.radialSegments, h.heightSegments, h.openEnded);
                                    break;
                                case "SphereGeometry":
                                    s = new n.SphereGeometry(h.radius, h.widthSegments, h.heightSegments, h.phiStart, h.phiLength, h.thetaStart, h.thetaLength);
                                    break;
                                case "IcosahedronGeometry":
                                    s = new n.IcosahedronGeometry(h.radius, h.detail);
                                    break;
                                case "TorusGeometry":
                                    s = new n.TorusGeometry(h.radius, h.tube, h.radialSegments, h.tubularSegments, h.arc);
                                    break;
                                case "TorusKnotGeometry":
                                    s = new n.TorusKnotGeometry(h.radius, h.tube, h.radialSegments, h.tubularSegments, h.p, h.q, h.heightScale);
                                    break;
                                case "BufferGeometry":
                                    s = i.parse(h.data);
                                    break;
                                case "Geometry":
                                    s = r.parse(h.data).geometry }
                            s.uuid = h.uuid, void 0 !== h.name && (s.name = h.name), t[h.uuid] = s }
                    return t }, parseMaterials: function(e) {
                    var t = {};
                    if (void 0 !== e)
                        for (var r = new n.MaterialLoader, i = 0, o = e.length; o > i; i++) {
                            var a = e[i],
                                s = r.parse(a);
                            s.uuid = a.uuid, void 0 !== a.name && (s.name = a.name), t[a.uuid] = s }
                    return t }, parseObject: function() {
                    var e = new n.Matrix4;
                    return function(t, r, i) {
                        var o;
                        switch (t.type) {
                            case "Scene":
                                o = new n.Scene;
                                break;
                            case "PerspectiveCamera":
                                o = new n.PerspectiveCamera(t.fov, t.aspect, t.near, t.far);
                                break;
                            case "OrthographicCamera":
                                o = new n.OrthographicCamera(t.left, t.right, t.top, t.bottom, t.near, t.far);
                                break;
                            case "AmbientLight":
                                o = new n.AmbientLight(t.color);
                                break;
                            case "DirectionalLight":
                                o = new n.DirectionalLight(t.color, t.intensity);
                                break;
                            case "PointLight":
                                o = new n.PointLight(t.color, t.intensity, t.distance);
                                break;
                            case "SpotLight":
                                o = new n.SpotLight(t.color, t.intensity, t.distance, t.angle, t.exponent);
                                break;
                            case "HemisphereLight":
                                o = new n.HemisphereLight(t.color, t.groundColor, t.intensity);
                                break;
                            case "Mesh":
                                var a = r[t.geometry],
                                    s = i[t.material];
                                void 0 === a && console.warn("THREE.ObjectLoader: Undefined geometry", t.geometry), void 0 === s && console.warn("THREE.ObjectLoader: Undefined material", t.material), o = new n.Mesh(a, s);
                                break;
                            case "Line":
                                var a = r[t.geometry],
                                    s = i[t.material];
                                void 0 === a && console.warn("THREE.ObjectLoader: Undefined geometry", t.geometry), void 0 === s && console.warn("THREE.ObjectLoader: Undefined material", t.material), o = new n.Line(a, s);
                                break;
                            case "Sprite":
                                var s = i[t.material];
                                void 0 === s && console.warn("THREE.ObjectLoader: Undefined material", t.material), o = new n.Sprite(s);
                                break;
                            case "Group":
                                o = new n.Group;
                                break;
                            default:
                                o = new n.Object3D }
                        if (o.uuid = t.uuid, void 0 !== t.name && (o.name = t.name), void 0 !== t.matrix ? (e.fromArray(t.matrix), e.decompose(o.position, o.quaternion, o.scale)) : (void 0 !== t.position && o.position.fromArray(t.position), void 0 !== t.rotation && o.rotation.fromArray(t.rotation), void 0 !== t.scale && o.scale.fromArray(t.scale)), void 0 !== t.visible && (o.visible = t.visible), void 0 !== t.userData && (o.userData = t.userData), void 0 !== t.children)
                            for (var h in t.children) o.add(this.parseObject(t.children[h], r, i));
                        return o } }() }, n.TextureLoader = function(e) { this.manager = void 0 !== e ? e : n.DefaultLoadingManager }, n.TextureLoader.prototype = { constructor: n.TextureLoader, load: function(e, t, r, i) {
                    var o = this,
                        a = new n.ImageLoader(o.manager);
                    a.setCrossOrigin(this.crossOrigin), a.load(e, function(e) {
                        var r = new n.Texture(e);
                        r.needsUpdate = !0, void 0 !== t && t(r) }, r, i) }, setCrossOrigin: function(e) { this.crossOrigin = e } }, n.DataTextureLoader = n.BinaryTextureLoader = function() { this._parser = null }, n.BinaryTextureLoader.prototype = { constructor: n.BinaryTextureLoader, load: function(e, t, r, i) {
                    var o = this,
                        a = new n.DataTexture,
                        s = new n.XHRLoader;
                    return s.setResponseType("arraybuffer"), s.load(e, function(e) {
                        var r = o._parser(e);
                        r && (void 0 !== r.image ? a.image = r.image : void 0 !== r.data && (a.image.width = r.width, a.image.height = r.height, a.image.data = r.data), a.wrapS = void 0 !== r.wrapS ? r.wrapS : n.ClampToEdgeWrapping, a.wrapT = void 0 !== r.wrapT ? r.wrapT : n.ClampToEdgeWrapping, a.magFilter = void 0 !== r.magFilter ? r.magFilter : n.LinearFilter, a.minFilter = void 0 !== r.minFilter ? r.minFilter : n.LinearMipMapLinearFilter, a.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1, void 0 !== r.format && (a.format = r.format), void 0 !== r.type && (a.type = r.type), void 0 !== r.mipmaps && (a.mipmaps = r.mipmaps), 1 === r.mipmapCount && (a.minFilter = n.LinearFilter), a.needsUpdate = !0, t && t(a, r)) }, r, i), a } }, n.CompressedTextureLoader = function() { this._parser = null }, n.CompressedTextureLoader.prototype = { constructor: n.CompressedTextureLoader, load: function(e, t) {
                    var r = this,
                        i = [],
                        o = new n.CompressedTexture;
                    o.image = i;
                    var a = new n.XHRLoader;
                    if (a.setResponseType("arraybuffer"), e instanceof Array)
                        for (var s = 0, h = function(h) { a.load(e[h], function(e) {
                                    var a = r._parser(e, !0);
                                    i[h] = { width: a.width, height: a.height, format: a.format, mipmaps: a.mipmaps }, s += 1, 6 === s && (1 == a.mipmapCount && (o.minFilter = n.LinearFilter), o.format = a.format, o.needsUpdate = !0, t && t(o)) }) }, l = 0, c = e.length; c > l; ++l) h(l);
                    else a.load(e, function(e) {
                        var a = r._parser(e, !0);
                        if (a.isCubemap)
                            for (var s = a.mipmaps.length / a.mipmapCount, h = 0; s > h; h++) { i[h] = { mipmaps: [] };
                                for (var l = 0; l < a.mipmapCount; l++) i[h].mipmaps.push(a.mipmaps[h * a.mipmapCount + l]), i[h].format = a.format, i[h].width = a.width, i[h].height = a.height } else o.image.width = a.width, o.image.height = a.height, o.mipmaps = a.mipmaps;
                        1 === a.mipmapCount && (o.minFilter = n.LinearFilter), o.format = a.format, o.needsUpdate = !0, t && t(o) });
                    return o } }, n.Material = function() { Object.defineProperty(this, "id", { value: n.MaterialIdCount++ }), this.uuid = n.Math.generateUUID(), this.name = "", this.type = "Material", this.side = n.FrontSide, this.opacity = 1, this.transparent = !1, this.blending = n.NormalBlending, this.blendSrc = n.SrcAlphaFactor, this.blendDst = n.OneMinusSrcAlphaFactor, this.blendEquation = n.AddEquation, this.depthTest = !0, this.depthWrite = !0, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.alphaTest = 0, this.overdraw = 0, this.visible = !0, this.needsUpdate = !0 }, n.Material.prototype = { constructor: n.Material, setValues: function(e) {
                    if (void 0 !== e)
                        for (var t in e) {
                            var r = e[t];
                            if (void 0 !== r) {
                                if (t in this) {
                                    var i = this[t];
                                    i instanceof n.Color ? i.set(r) : i instanceof n.Vector3 && r instanceof n.Vector3 ? i.copy(r) : this[t] = "overdraw" == t ? Number(r) : r } } else console.warn("THREE.Material: '" + t + "' parameter is undefined.") } }, toJSON: function() {
                    var e = { metadata: { version: 4.2, type: "material", generator: "MaterialExporter" }, uuid: this.uuid, type: this.type };
                    return "" !== this.name && (e.name = this.name), this instanceof n.MeshBasicMaterial ? (e.color = this.color.getHex(), this.vertexColors !== n.NoColors && (e.vertexColors = this.vertexColors), this.blending !== n.NormalBlending && (e.blending = this.blending), this.side !== n.FrontSide && (e.side = this.side)) : this instanceof n.MeshLambertMaterial ? (e.color = this.color.getHex(), e.ambient = this.ambient.getHex(), e.emissive = this.emissive.getHex(), this.vertexColors !== n.NoColors && (e.vertexColors = this.vertexColors), this.blending !== n.NormalBlending && (e.blending = this.blending), this.side !== n.FrontSide && (e.side = this.side)) : this instanceof n.MeshPhongMaterial ? (e.color = this.color.getHex(), e.ambient = this.ambient.getHex(), e.emissive = this.emissive.getHex(), e.specular = this.specular.getHex(), e.shininess = this.shininess, this.vertexColors !== n.NoColors && (e.vertexColors = this.vertexColors), this.blending !== n.NormalBlending && (e.blending = this.blending), this.side !== n.FrontSide && (e.side = this.side)) : this instanceof n.MeshNormalMaterial ? (this.shading !== n.FlatShading && (e.shading = this.shading), this.blending !== n.NormalBlending && (e.blending = this.blending), this.side !== n.FrontSide && (e.side = this.side)) : this instanceof n.MeshDepthMaterial ? (this.blending !== n.NormalBlending && (e.blending = this.blending), this.side !== n.FrontSide && (e.side = this.side)) : this instanceof n.ShaderMaterial ? (e.uniforms = this.uniforms, e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader) : this instanceof n.SpriteMaterial && (e.color = this.color.getHex()), this.opacity < 1 && (e.opacity = this.opacity), this.transparent !== !1 && (e.transparent = this.transparent), this.wireframe !== !1 && (e.wireframe = this.wireframe), e }, clone: function(e) {
                    return void 0 === e && (e = new n.Material), e.name = this.name, e.side = this.side, e.opacity = this.opacity, e.transparent = this.transparent, e.blending = this.blending, e.blendSrc = this.blendSrc, e.blendDst = this.blendDst, e.blendEquation = this.blendEquation, e.depthTest = this.depthTest, e.depthWrite = this.depthWrite, e.polygonOffset = this.polygonOffset, e.polygonOffsetFactor = this.polygonOffsetFactor, e.polygonOffsetUnits = this.polygonOffsetUnits, e.alphaTest = this.alphaTest, e.overdraw = this.overdraw, e.visible = this.visible, e }, dispose: function() { this.dispatchEvent({ type: "dispose" }) } }, n.EventDispatcher.prototype.apply(n.Material.prototype), n.MaterialIdCount = 0, n.LineBasicMaterial = function(e) { n.Material.call(this), this.type = "LineBasicMaterial", this.color = new n.Color(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.vertexColors = n.NoColors, this.fog = !0, this.setValues(e) }, n.LineBasicMaterial.prototype = Object.create(n.Material.prototype), n.LineBasicMaterial.prototype.constructor = n.LineBasicMaterial, n.LineBasicMaterial.prototype.clone = function() {
                var e = new n.LineBasicMaterial;
                return n.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.linewidth = this.linewidth, e.linecap = this.linecap, e.linejoin = this.linejoin, e.vertexColors = this.vertexColors, e.fog = this.fog, e }, n.LineDashedMaterial = function(e) { n.Material.call(this), this.type = "LineDashedMaterial", this.color = new n.Color(16777215), this.linewidth = 1, this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.vertexColors = !1, this.fog = !0, this.setValues(e) }, n.LineDashedMaterial.prototype = Object.create(n.Material.prototype), n.LineDashedMaterial.prototype.constructor = n.LineDashedMaterial, n.LineDashedMaterial.prototype.clone = function() {
                var e = new n.LineDashedMaterial;
                return n.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.linewidth = this.linewidth, e.scale = this.scale, e.dashSize = this.dashSize, e.gapSize = this.gapSize, e.vertexColors = this.vertexColors, e.fog = this.fog, e }, n.MeshBasicMaterial = function(e) { n.Material.call(this), this.type = "MeshBasicMaterial", this.color = new n.Color(16777215), this.map = null, this.lightMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = n.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = n.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = n.NoColors, this.skinning = !1, this.morphTargets = !1, this.setValues(e) }, n.MeshBasicMaterial.prototype = Object.create(n.Material.prototype), n.MeshBasicMaterial.prototype.constructor = n.MeshBasicMaterial, n.MeshBasicMaterial.prototype.clone = function() {
                var e = new n.MeshBasicMaterial;
                return n.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e.lightMap = this.lightMap, e.specularMap = this.specularMap, e.alphaMap = this.alphaMap, e.envMap = this.envMap, e.combine = this.combine, e.reflectivity = this.reflectivity, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e }, n.MeshLambertMaterial = function(e) { n.Material.call(this), this.type = "MeshLambertMaterial", this.color = new n.Color(16777215), this.ambient = new n.Color(16777215), this.emissive = new n.Color(0), this.wrapAround = !1, this.wrapRGB = new n.Vector3(1, 1, 1), this.map = null, this.lightMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = n.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = n.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = n.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e) }, n.MeshLambertMaterial.prototype = Object.create(n.Material.prototype), n.MeshLambertMaterial.prototype.constructor = n.MeshLambertMaterial, n.MeshLambertMaterial.prototype.clone = function() {
                var e = new n.MeshLambertMaterial;
                return n.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.ambient.copy(this.ambient), e.emissive.copy(this.emissive), e.wrapAround = this.wrapAround, e.wrapRGB.copy(this.wrapRGB), e.map = this.map, e.lightMap = this.lightMap, e.specularMap = this.specularMap, e.alphaMap = this.alphaMap, e.envMap = this.envMap, e.combine = this.combine, e.reflectivity = this.reflectivity, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e }, n.MeshPhongMaterial = function(e) { n.Material.call(this), this.type = "MeshPhongMaterial", this.color = new n.Color(16777215), this.ambient = new n.Color(16777215), this.emissive = new n.Color(0), this.specular = new n.Color(1118481), this.shininess = 30, this.metal = !1, this.wrapAround = !1, this.wrapRGB = new n.Vector3(1, 1, 1), this.map = null, this.lightMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new n.Vector2(1, 1), this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = n.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = n.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = n.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e) }, n.MeshPhongMaterial.prototype = Object.create(n.Material.prototype), n.MeshPhongMaterial.prototype.constructor = n.MeshPhongMaterial, n.MeshPhongMaterial.prototype.clone = function() {
                var e = new n.MeshPhongMaterial;
                return n.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.ambient.copy(this.ambient), e.emissive.copy(this.emissive), e.specular.copy(this.specular), e.shininess = this.shininess, e.metal = this.metal, e.wrapAround = this.wrapAround, e.wrapRGB.copy(this.wrapRGB), e.map = this.map, e.lightMap = this.lightMap, e.bumpMap = this.bumpMap, e.bumpScale = this.bumpScale, e.normalMap = this.normalMap, e.normalScale.copy(this.normalScale), e.specularMap = this.specularMap, e.alphaMap = this.alphaMap, e.envMap = this.envMap, e.combine = this.combine, e.reflectivity = this.reflectivity, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e }, n.MeshDepthMaterial = function(e) { n.Material.call(this), this.type = "MeshDepthMaterial", this.morphTargets = !1, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e) }, n.MeshDepthMaterial.prototype = Object.create(n.Material.prototype), n.MeshDepthMaterial.prototype.constructor = n.MeshDepthMaterial, n.MeshDepthMaterial.prototype.clone = function() {
                var e = new n.MeshDepthMaterial;
                return n.Material.prototype.clone.call(this, e), e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e }, n.MeshNormalMaterial = function(e) { n.Material.call(this, e), this.type = "MeshNormalMaterial", this.shading = n.FlatShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.morphTargets = !1, this.setValues(e) }, n.MeshNormalMaterial.prototype = Object.create(n.Material.prototype), n.MeshNormalMaterial.prototype.constructor = n.MeshNormalMaterial, n.MeshNormalMaterial.prototype.clone = function() {
                var e = new n.MeshNormalMaterial;
                return n.Material.prototype.clone.call(this, e), e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e }, n.MeshFaceMaterial = function(e) { this.uuid = n.Math.generateUUID(), this.type = "MeshFaceMaterial", this.materials = e instanceof Array ? e : [] }, n.MeshFaceMaterial.prototype = { constructor: n.MeshFaceMaterial, toJSON: function() {
                    for (var e = { metadata: { version: 4.2, type: "material", generator: "MaterialExporter" }, uuid: this.uuid, type: this.type, materials: [] }, t = 0, r = this.materials.length; r > t; t++) e.materials.push(this.materials[t].toJSON());
                    return e }, clone: function() {
                    for (var e = new n.MeshFaceMaterial, t = 0; t < this.materials.length; t++) e.materials.push(this.materials[t].clone());
                    return e } }, n.PointCloudMaterial = function(e) { n.Material.call(this), this.type = "PointCloudMaterial", this.color = new n.Color(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.vertexColors = n.NoColors, this.fog = !0, this.setValues(e) }, n.PointCloudMaterial.prototype = Object.create(n.Material.prototype), n.PointCloudMaterial.prototype.constructor = n.PointCloudMaterial, n.PointCloudMaterial.prototype.clone = function() {
                var e = new n.PointCloudMaterial;
                return n.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e.size = this.size, e.sizeAttenuation = this.sizeAttenuation, e.vertexColors = this.vertexColors, e.fog = this.fog, e }, n.ParticleBasicMaterial = function(e) {
                return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial."), new n.PointCloudMaterial(e) }, n.ParticleSystemMaterial = function(e) {
                return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial."), new n.PointCloudMaterial(e) }, n.ShaderMaterial = function(e) { n.Material.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.attributes = null, this.vertexShader = "void main() {\n gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n   gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.shading = n.SmoothShading, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.vertexColors = n.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }, this.index0AttributeName = void 0, this.setValues(e) }, n.ShaderMaterial.prototype = Object.create(n.Material.prototype), n.ShaderMaterial.prototype.constructor = n.ShaderMaterial, n.ShaderMaterial.prototype.clone = function() {
                var e = new n.ShaderMaterial;
                return n.Material.prototype.clone.call(this, e), e.fragmentShader = this.fragmentShader, e.vertexShader = this.vertexShader, e.uniforms = n.UniformsUtils.clone(this.uniforms), e.attributes = this.attributes, e.defines = this.defines, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.fog = this.fog, e.lights = this.lights, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e }, n.RawShaderMaterial = function(e) { n.ShaderMaterial.call(this, e), this.type = "RawShaderMaterial" }, n.RawShaderMaterial.prototype = Object.create(n.ShaderMaterial.prototype), n.RawShaderMaterial.prototype.constructor = n.RawShaderMaterial, n.RawShaderMaterial.prototype.clone = function() {
                var e = new n.RawShaderMaterial;
                return n.ShaderMaterial.prototype.clone.call(this, e), e }, n.SpriteMaterial = function(e) { n.Material.call(this), this.type = "SpriteMaterial", this.color = new n.Color(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.setValues(e) }, n.SpriteMaterial.prototype = Object.create(n.Material.prototype), n.SpriteMaterial.prototype.constructor = n.SpriteMaterial, n.SpriteMaterial.prototype.clone = function() {
                var e = new n.SpriteMaterial;
                return n.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e.rotation = this.rotation, e.fog = this.fog, e }, n.Texture = function(e, t, r, i, o, a, s, h, l) { Object.defineProperty(this, "id", { value: n.TextureIdCount++ }), this.uuid = n.Math.generateUUID(), this.name = "", this.image = void 0 !== e ? e : n.Texture.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== t ? t : n.Texture.DEFAULT_MAPPING, this.wrapS = void 0 !== r ? r : n.ClampToEdgeWrapping, this.wrapT = void 0 !== i ? i : n.ClampToEdgeWrapping, this.magFilter = void 0 !== o ? o : n.LinearFilter, this.minFilter = void 0 !== a ? a : n.LinearMipMapLinearFilter, this.anisotropy = void 0 !== l ? l : 1, this.format = void 0 !== s ? s : n.RGBAFormat, this.type = void 0 !== h ? h : n.UnsignedByteType, this.offset = new n.Vector2(0, 0), this.repeat = new n.Vector2(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this._needsUpdate = !1, this.onUpdate = null }, n.Texture.DEFAULT_IMAGE = void 0, n.Texture.DEFAULT_MAPPING = n.UVMapping, n.Texture.prototype = { constructor: n.Texture, get needsUpdate() {
                    return this._needsUpdate }, set needsUpdate(e) { e === !0 && this.update(), this._needsUpdate = e }, clone: function(e) {
                    return void 0 === e && (e = new n.Texture), e.image = this.image, e.mipmaps = this.mipmaps.slice(0), e.mapping = this.mapping, e.wrapS = this.wrapS, e.wrapT = this.wrapT, e.magFilter = this.magFilter, e.minFilter = this.minFilter, e.anisotropy = this.anisotropy, e.format = this.format, e.type = this.type, e.offset.copy(this.offset), e.repeat.copy(this.repeat), e.generateMipmaps = this.generateMipmaps, e.premultiplyAlpha = this.premultiplyAlpha, e.flipY = this.flipY, e.unpackAlignment = this.unpackAlignment, e }, update: function() { this.dispatchEvent({ type: "update" }) }, dispose: function() { this.dispatchEvent({ type: "dispose" }) } }, n.EventDispatcher.prototype.apply(n.Texture.prototype), n.TextureIdCount = 0, n.CubeTexture = function(e, t, r, i, o, a, s, h, l) { t = void 0 !== t ? t : n.CubeReflectionMapping, n.Texture.call(this, e, t, r, i, o, a, s, h, l), this.images = e }, n.CubeTexture.prototype = Object.create(n.Texture.prototype), n.CubeTexture.prototype.constructor = n.CubeTexture, n.CubeTexture.clone = function(e) {
                return void 0 === e && (e = new n.CubeTexture), n.Texture.prototype.clone.call(this, e), e.images = this.images, e }, n.CompressedTexture = function(e, t, r, i, o, a, s, h, l, c, u) { n.Texture.call(this, null, a, s, h, l, c, i, o, u), this.image = { width: t, height: r }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1 }, n.CompressedTexture.prototype = Object.create(n.Texture.prototype), n.CompressedTexture.prototype.constructor = n.CompressedTexture, n.CompressedTexture.prototype.clone = function() {
                var e = new n.CompressedTexture;
                return n.Texture.prototype.clone.call(this, e), e }, n.DataTexture = function(e, t, r, i, o, a, s, h, l, c, u) { n.Texture.call(this, null, a, s, h, l, c, i, o, u), this.image = { data: e, width: t, height: r } }, n.DataTexture.prototype = Object.create(n.Texture.prototype), n.DataTexture.prototype.constructor = n.DataTexture, n.DataTexture.prototype.clone = function() {
                var e = new n.DataTexture;
                return n.Texture.prototype.clone.call(this, e), e }, n.VideoTexture = function(e, t, r, i, o, a, s, h, l) { n.Texture.call(this, e, t, r, i, o, a, s, h, l), this.generateMipmaps = !1;
                var c = this,
                    u = function() { requestAnimationFrame(u), e.readyState === e.HAVE_ENOUGH_DATA && (c.needsUpdate = !0) };
                u() }, n.VideoTexture.prototype = Object.create(n.Texture.prototype), n.VideoTexture.prototype.constructor = n.VideoTexture, n.Group = function() { n.Object3D.call(this), this.type = "Group" }, n.Group.prototype = Object.create(n.Object3D.prototype), n.Group.prototype.constructor = n.Group, n.PointCloud = function(e, t) { n.Object3D.call(this), this.type = "PointCloud", this.geometry = void 0 !== e ? e : new n.Geometry, this.material = void 0 !== t ? t : new n.PointCloudMaterial({ color: 16777215 * Math.random() }) }, n.PointCloud.prototype = Object.create(n.Object3D.prototype), n.PointCloud.prototype.constructor = n.PointCloud, n.PointCloud.prototype.raycast = function() {
                var e = new n.Matrix4,
                    t = new n.Ray;
                return function(r, i) {
                    var o = this,
                        a = o.geometry,
                        s = r.params.PointCloud.threshold;
                    if (e.getInverse(this.matrixWorld), t.copy(r.ray).applyMatrix4(e), null === a.boundingBox || t.isIntersectionBox(a.boundingBox) !== !1) {
                        var h = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                            l = new n.Vector3,
                            c = function(e, n) {
                                var a = t.distanceToPoint(e);
                                if (h > a) {
                                    var s = t.closestPointToPoint(e);
                                    s.applyMatrix4(o.matrixWorld);
                                    var l = r.ray.origin.distanceTo(s);
                                    i.push({ distance: l, distanceToRay: a, point: s.clone(), index: n, face: null, object: o }) } };
                        if (a instanceof n.BufferGeometry) {
                            var u = a.attributes,
                                p = u.position.array;
                            if (void 0 !== u.index) {
                                var f = u.index.array,
                                    d = a.offsets;
                                if (0 === d.length) {
                                    var m = { start: 0, count: f.length, index: 0 };
                                    d = [m] }
                                for (var g = 0, v = d.length; v > g; ++g)
                                    for (var y = d[g].start, x = d[g].count, b = d[g].index, w = y, _ = y + x; _ > w; w++) {
                                        var M = b + f[w];
                                        l.fromArray(p, 3 * M), c(l, M) } } else
                                for (var S = p.length / 3, w = 0; S > w; w++) l.set(p[3 * w], p[3 * w + 1], p[3 * w + 2]), c(l, w) } else
                            for (var T = this.geometry.vertices, w = 0; w < T.length; w++) c(T[w], w) } } }(), n.PointCloud.prototype.clone = function(e) {
                return void 0 === e && (e = new n.PointCloud(this.geometry, this.material)), n.Object3D.prototype.clone.call(this, e), e }, n.ParticleSystem = function(e, t) {
                return console.warn("THREE.ParticleSystem has been renamed to THREE.PointCloud."), new n.PointCloud(e, t) }, n.Line = function(e, t, r) { n.Object3D.call(this), this.type = "Line", this.geometry = void 0 !== e ? e : new n.Geometry, this.material = void 0 !== t ? t : new n.LineBasicMaterial({ color: 16777215 * Math.random() }), this.mode = void 0 !== r ? r : n.LineStrip }, n.LineStrip = 0, n.LinePieces = 1, n.Line.prototype = Object.create(n.Object3D.prototype), n.Line.prototype.constructor = n.Line, n.Line.prototype.raycast = function() {
                var e = new n.Matrix4,
                    t = new n.Ray,
                    r = new n.Sphere;
                return function(i, o) {
                    var a = i.linePrecision,
                        s = a * a,
                        h = this.geometry;
                    if (null === h.boundingSphere && h.computeBoundingSphere(), r.copy(h.boundingSphere), r.applyMatrix4(this.matrixWorld), i.ray.isIntersectionSphere(r) !== !1) { e.getInverse(this.matrixWorld), t.copy(i.ray).applyMatrix4(e);
                        var l = new n.Vector3,
                            c = new n.Vector3,
                            u = new n.Vector3,
                            p = new n.Vector3,
                            f = this.mode === n.LineStrip ? 1 : 2;
                        if (h instanceof n.BufferGeometry) {
                            var d = h.attributes;
                            if (void 0 !== d.index) {
                                var m = d.index.array,
                                    g = d.position.array,
                                    v = h.offsets;
                                0 === v.length && (v = [{ start: 0, count: m.length, index: 0 }]);
                                for (var y = 0; y < v.length; y++)
                                    for (var x = v[y].start, b = v[y].count, w = v[y].index, _ = x; x + b - 1 > _; _ += f) {
                                        var M = w + m[_],
                                            S = w + m[_ + 1];
                                        l.fromArray(g, 3 * M), c.fromArray(g, 3 * S);
                                        var T = t.distanceSqToSegment(l, c, p, u);
                                        if (!(T > s)) {
                                            var C = t.origin.distanceTo(p);
                                            C < i.near || C > i.far || o.push({ distance: C, point: u.clone().applyMatrix4(this.matrixWorld), face: null, faceIndex: null, object: this }) } } } else
                                for (var g = d.position.array, _ = 0; _ < g.length / 3 - 1; _ += f) { l.fromArray(g, 3 * _), c.fromArray(g, 3 * _ + 3);
                                    var T = t.distanceSqToSegment(l, c, p, u);
                                    if (!(T > s)) {
                                        var C = t.origin.distanceTo(p);
                                        C < i.near || C > i.far || o.push({ distance: C, point: u.clone().applyMatrix4(this.matrixWorld), face: null, faceIndex: null, object: this }) } } } else if (h instanceof n.Geometry)
                            for (var E = h.vertices, A = E.length, _ = 0; A - 1 > _; _ += f) {
                                var T = t.distanceSqToSegment(E[_], E[_ + 1], p, u);
                                if (!(T > s)) {
                                    var C = t.origin.distanceTo(p);
                                    C < i.near || C > i.far || o.push({ distance: C, point: u.clone().applyMatrix4(this.matrixWorld), face: null, faceIndex: null, object: this }) } } } } }(), n.Line.prototype.clone = function(e) {
                return void 0 === e && (e = new n.Line(this.geometry, this.material, this.mode)), n.Object3D.prototype.clone.call(this, e), e }, n.Mesh = function(e, t) { n.Object3D.call(this), this.type = "Mesh", this.geometry = void 0 !== e ? e : new n.Geometry, this.material = void 0 !== t ? t : new n.MeshBasicMaterial({ color: 16777215 * Math.random() }), this.updateMorphTargets() }, n.Mesh.prototype = Object.create(n.Object3D.prototype), n.Mesh.prototype.constructor = n.Mesh, n.Mesh.prototype.updateMorphTargets = function() {
                if (void 0 !== this.geometry.morphTargets && this.geometry.morphTargets.length > 0) { this.morphTargetBase = -1, this.morphTargetForcedOrder = [], this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for (var e = 0, t = this.geometry.morphTargets.length; t > e; e++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[e].name] = e } }, n.Mesh.prototype.getMorphTargetIndexByName = function(e) {
                return void 0 !== this.morphTargetDictionary[e] ? this.morphTargetDictionary[e] : (console.log("THREE.Mesh.getMorphTargetIndexByName: morph target " + e + " does not exist. Returning 0."), 0) }, n.Mesh.prototype.raycast = function() {
                var e = new n.Matrix4,
                    t = new n.Ray,
                    r = new n.Sphere,
                    i = new n.Vector3,
                    o = new n.Vector3,
                    a = new n.Vector3;
                return function(s, h) {
                    var l = this.geometry;
                    if (null === l.boundingSphere && l.computeBoundingSphere(), r.copy(l.boundingSphere), r.applyMatrix4(this.matrixWorld), s.ray.isIntersectionSphere(r) !== !1 && (e.getInverse(this.matrixWorld), t.copy(s.ray).applyMatrix4(e), null === l.boundingBox || t.isIntersectionBox(l.boundingBox) !== !1))
                        if (l instanceof n.BufferGeometry) {
                            var c = this.material;
                            if (void 0 === c) return;
                            var u, p, f, d = l.attributes,
                                m = s.precision;
                            if (void 0 !== d.index) {
                                var g = d.index.array,
                                    v = d.position.array,
                                    y = l.offsets;
                                0 === y.length && (y = [{ start: 0, count: g.length, index: 0 }]);
                                for (var x = 0, b = y.length; b > x; ++x)
                                    for (var w = y[x].start, _ = y[x].count, M = y[x].index, S = w, T = w + _; T > S; S += 3) {
                                        if (u = M + g[S], p = M + g[S + 1], f = M + g[S + 2], i.fromArray(v, 3 * u), o.fromArray(v, 3 * p), a.fromArray(v, 3 * f), c.side === n.BackSide) var C = t.intersectTriangle(a, o, i, !0);
                                        else var C = t.intersectTriangle(i, o, a, c.side !== n.DoubleSide);
                                        if (null !== C) { C.applyMatrix4(this.matrixWorld);
                                            var E = s.ray.origin.distanceTo(C);
                                            m > E || E < s.near || E > s.far || h.push({ distance: E, point: C, face: new n.Face3(u, p, f, n.Triangle.normal(i, o, a)), faceIndex: null, object: this }) } } } else
                                for (var v = d.position.array, S = 0, A = 0, T = v.length; T > S; S += 3, A += 9) {
                                    if (u = S, p = S + 1, f = S + 2, i.fromArray(v, A), o.fromArray(v, A + 3), a.fromArray(v, A + 6), c.side === n.BackSide) var C = t.intersectTriangle(a, o, i, !0);
                                    else var C = t.intersectTriangle(i, o, a, c.side !== n.DoubleSide);
                                    if (null !== C) { C.applyMatrix4(this.matrixWorld);
                                        var E = s.ray.origin.distanceTo(C);
                                        m > E || E < s.near || E > s.far || h.push({ distance: E, point: C, face: new n.Face3(u, p, f, n.Triangle.normal(i, o, a)), faceIndex: null, object: this }) } } } else if (l instanceof n.Geometry)
                        for (var u, p, f, L = this.material instanceof n.MeshFaceMaterial, P = L === !0 ? this.material.materials : null, m = s.precision, R = l.vertices, F = 0, B = l.faces.length; B > F; F++) {
                            var U = l.faces[F],
                                c = L === !0 ? P[U.materialIndex] : this.material;
                            if (void 0 !== c) {
                                if (u = R[U.a], p = R[U.b], f = R[U.c], c.morphTargets === !0) {
                                    var D = l.morphTargets,
                                        V = this.morphTargetInfluences;
                                    i.set(0, 0, 0), o.set(0, 0, 0), a.set(0, 0, 0);
                                    for (var z = 0, k = D.length; k > z; z++) {
                                        var N = V[z];
                                        if (0 !== N) {
                                            var O = D[z].vertices;
                                            i.x += (O[U.a].x - u.x) * N, i.y += (O[U.a].y - u.y) * N, i.z += (O[U.a].z - u.z) * N, o.x += (O[U.b].x - p.x) * N, o.y += (O[U.b].y - p.y) * N, o.z += (O[U.b].z - p.z) * N, a.x += (O[U.c].x - f.x) * N, a.y += (O[U.c].y - f.y) * N, a.z += (O[U.c].z - f.z) * N } }
                                    i.add(u), o.add(p), a.add(f), u = i, p = o, f = a }
                                if (c.side === n.BackSide) var C = t.intersectTriangle(f, p, u, !0);
                                else var C = t.intersectTriangle(u, p, f, c.side !== n.DoubleSide);
                                if (null !== C) { C.applyMatrix4(this.matrixWorld);
                                    var E = s.ray.origin.distanceTo(C);
                                    m > E || E < s.near || E > s.far || h.push({ distance: E, point: C, face: U, faceIndex: F, object: this }) } } } } }(), n.Mesh.prototype.clone = function(e, t) {
                return void 0 === e && (e = new n.Mesh(this.geometry, this.material)), n.Object3D.prototype.clone.call(this, e, t), e }, n.Bone = function(e) { n.Object3D.call(this), this.skin = e }, n.Bone.prototype = Object.create(n.Object3D.prototype), n.Bone.prototype.constructor = n.Bone, n.Skeleton = function(e, t, r) {
                if (this.useVertexTexture = void 0 !== r ? r : !0, this.identityMatrix = new n.Matrix4, e = e || [], this.bones = e.slice(0), this.useVertexTexture) {
                    var i;
                    i = this.bones.length > 256 ? 64 : this.bones.length > 64 ? 32 : this.bones.length > 16 ? 16 : 8, this.boneTextureWidth = i, this.boneTextureHeight = i, this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new n.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, n.RGBAFormat, n.FloatType), this.boneTexture.minFilter = n.NearestFilter, this.boneTexture.magFilter = n.NearestFilter, this.boneTexture.generateMipmaps = !1, this.boneTexture.flipY = !1
                } else this.boneMatrices = new Float32Array(16 * this.bones.length);
                if (void 0 === t) this.calculateInverses();
                else if (this.bones.length === t.length) this.boneInverses = t.slice(0);
                else { console.warn("THREE.Skeleton bonInverses is the wrong length."), this.boneInverses = [];
                    for (var o = 0, a = this.bones.length; a > o; o++) this.boneInverses.push(new n.Matrix4) }
            }, n.Skeleton.prototype.calculateInverses = function() { this.boneInverses = [];
                for (var e = 0, t = this.bones.length; t > e; e++) {
                    var r = new n.Matrix4;
                    this.bones[e] && r.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(r) } }, n.Skeleton.prototype.pose = function() {
                for (var e, t = 0, r = this.bones.length; r > t; t++) e = this.bones[t], e && e.matrixWorld.getInverse(this.boneInverses[t]);
                for (var t = 0, r = this.bones.length; r > t; t++) e = this.bones[t], e && (e.parent ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale)) }, n.Skeleton.prototype.update = function() {
                var e = new n.Matrix4;
                return function() {
                    for (var t = 0, r = this.bones.length; r > t; t++) {
                        var i = this.bones[t] ? this.bones[t].matrixWorld : this.identityMatrix;
                        e.multiplyMatrices(i, this.boneInverses[t]), e.flattenToArrayOffset(this.boneMatrices, 16 * t) }
                    this.useVertexTexture && (this.boneTexture.needsUpdate = !0) } }(), n.SkinnedMesh = function(e, t, r) { n.Mesh.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new n.Matrix4, this.bindMatrixInverse = new n.Matrix4;
                var i = [];
                if (this.geometry && void 0 !== this.geometry.bones) {
                    for (var o, a, s, h, l, c = 0, u = this.geometry.bones.length; u > c; ++c) a = this.geometry.bones[c], s = a.pos, h = a.rotq, l = a.scl, o = new n.Bone(this), i.push(o), o.name = a.name, o.position.set(s[0], s[1], s[2]), o.quaternion.set(h[0], h[1], h[2], h[3]), void 0 !== l ? o.scale.set(l[0], l[1], l[2]) : o.scale.set(1, 1, 1);
                    for (var c = 0, u = this.geometry.bones.length; u > c; ++c) a = this.geometry.bones[c], -1 !== a.parent ? i[a.parent].add(i[c]) : this.add(i[c]) }
                this.normalizeSkinWeights(), this.updateMatrixWorld(!0), this.bind(new n.Skeleton(i, void 0, r)) }, n.SkinnedMesh.prototype = Object.create(n.Mesh.prototype), n.SkinnedMesh.prototype.constructor = n.SkinnedMesh, n.SkinnedMesh.prototype.bind = function(e, t) { this.skeleton = e, void 0 === t && (this.updateMatrixWorld(!0), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.getInverse(t) }, n.SkinnedMesh.prototype.pose = function() { this.skeleton.pose() }, n.SkinnedMesh.prototype.normalizeSkinWeights = function() {
                if (this.geometry instanceof n.Geometry)
                    for (var e = 0; e < this.geometry.skinIndices.length; e++) {
                        var t = this.geometry.skinWeights[e],
                            r = 1 / t.lengthManhattan();
                        1 / 0 !== r ? t.multiplyScalar(r) : t.set(1) } }, n.SkinnedMesh.prototype.updateMatrixWorld = function() { n.Mesh.prototype.updateMatrixWorld.call(this, !0), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unreckognized bindMode: " + this.bindMode) }, n.SkinnedMesh.prototype.clone = function(e) {
                return void 0 === e && (e = new n.SkinnedMesh(this.geometry, this.material, this.useVertexTexture)), n.Mesh.prototype.clone.call(this, e), e }, n.MorphAnimMesh = function(e, t) { n.Mesh.call(this, e, t), this.type = "MorphAnimMesh", this.duration = 1e3, this.mirroredLoop = !1, this.time = 0, this.lastKeyframe = 0, this.currentKeyframe = 0, this.direction = 1, this.directionBackwards = !1, this.setFrameRange(0, this.geometry.morphTargets.length - 1) }, n.MorphAnimMesh.prototype = Object.create(n.Mesh.prototype), n.MorphAnimMesh.prototype.constructor = n.MorphAnimMesh, n.MorphAnimMesh.prototype.setFrameRange = function(e, t) { this.startKeyframe = e, this.endKeyframe = t, this.length = this.endKeyframe - this.startKeyframe + 1 }, n.MorphAnimMesh.prototype.setDirectionForward = function() { this.direction = 1, this.directionBackwards = !1 }, n.MorphAnimMesh.prototype.setDirectionBackward = function() { this.direction = -1, this.directionBackwards = !0 }, n.MorphAnimMesh.prototype.parseAnimations = function() {
                var e = this.geometry;
                e.animations || (e.animations = {});
                for (var t, r = e.animations, i = /([a-z]+)_?(\d+)/, n = 0, o = e.morphTargets.length; o > n; n++) {
                    var a = e.morphTargets[n],
                        s = a.name.match(i);
                    if (s && s.length > 1) {
                        {
                            var h = s[1];
                            s[2] }
                        r[h] || (r[h] = { start: 1 / 0, end: -1 / 0 });
                        var l = r[h];
                        n < l.start && (l.start = n), n > l.end && (l.end = n), t || (t = h) } }
                e.firstAnimation = t }, n.MorphAnimMesh.prototype.setAnimationLabel = function(e, t, r) { this.geometry.animations || (this.geometry.animations = {}), this.geometry.animations[e] = { start: t, end: r } }, n.MorphAnimMesh.prototype.playAnimation = function(e, t) {
                var r = this.geometry.animations[e];
                r ? (this.setFrameRange(r.start, r.end), this.duration = 1e3 * ((r.end - r.start) / t), this.time = 0) : console.warn("animation[" + e + "] undefined") }, n.MorphAnimMesh.prototype.updateAnimation = function(e) {
                var t = this.duration / this.length;
                this.time += this.direction * e, this.mirroredLoop ? (this.time > this.duration || this.time < 0) && (this.direction *= -1, this.time > this.duration && (this.time = this.duration, this.directionBackwards = !0), this.time < 0 && (this.time = 0, this.directionBackwards = !1)) : (this.time = this.time % this.duration, this.time < 0 && (this.time += this.duration));
                var r = this.startKeyframe + n.Math.clamp(Math.floor(this.time / t), 0, this.length - 1);
                r !== this.currentKeyframe && (this.morphTargetInfluences[this.lastKeyframe] = 0, this.morphTargetInfluences[this.currentKeyframe] = 1, this.morphTargetInfluences[r] = 0, this.lastKeyframe = this.currentKeyframe, this.currentKeyframe = r);
                var i = this.time % t / t;
                this.directionBackwards && (i = 1 - i), this.morphTargetInfluences[this.currentKeyframe] = i, this.morphTargetInfluences[this.lastKeyframe] = 1 - i }, n.MorphAnimMesh.prototype.interpolateTargets = function(e, t, r) {
                for (var i = this.morphTargetInfluences, n = 0, o = i.length; o > n; n++) i[n] = 0;
                e > -1 && (i[e] = 1 - r), t > -1 && (i[t] = r) }, n.MorphAnimMesh.prototype.clone = function(e) {
                return void 0 === e && (e = new n.MorphAnimMesh(this.geometry, this.material)), e.duration = this.duration, e.mirroredLoop = this.mirroredLoop, e.time = this.time, e.lastKeyframe = this.lastKeyframe, e.currentKeyframe = this.currentKeyframe, e.direction = this.direction, e.directionBackwards = this.directionBackwards, n.Mesh.prototype.clone.call(this, e), e }, n.LOD = function() { n.Object3D.call(this), this.objects = [] }, n.LOD.prototype = Object.create(n.Object3D.prototype), n.LOD.prototype.constructor = n.LOD, n.LOD.prototype.addLevel = function(e, t) { void 0 === t && (t = 0), t = Math.abs(t);
                for (var r = 0; r < this.objects.length && !(t < this.objects[r].distance); r++);
                this.objects.splice(r, 0, { distance: t, object: e }), this.add(e) }, n.LOD.prototype.getObjectForDistance = function(e) {
                for (var t = 1, r = this.objects.length; r > t && !(e < this.objects[t].distance); t++);
                return this.objects[t - 1].object }, n.LOD.prototype.raycast = function() {
                var e = new n.Vector3;
                return function(t, r) { e.setFromMatrixPosition(this.matrixWorld);
                    var i = t.ray.origin.distanceTo(e);
                    this.getObjectForDistance(i).raycast(t, r) } }(), n.LOD.prototype.update = function() {
                var e = new n.Vector3,
                    t = new n.Vector3;
                return function(r) {
                    if (this.objects.length > 1) { e.setFromMatrixPosition(r.matrixWorld), t.setFromMatrixPosition(this.matrixWorld);
                        var i = e.distanceTo(t);
                        this.objects[0].object.visible = !0;
                        for (var n = 1, o = this.objects.length; o > n && i >= this.objects[n].distance; n++) this.objects[n - 1].object.visible = !1, this.objects[n].object.visible = !0;
                        for (; o > n; n++) this.objects[n].object.visible = !1 } } }(), n.LOD.prototype.clone = function(e) { void 0 === e && (e = new n.LOD), n.Object3D.prototype.clone.call(this, e);
                for (var t = 0, r = this.objects.length; r > t; t++) {
                    var i = this.objects[t].object.clone();
                    i.visible = 0 === t, e.addLevel(i, this.objects[t].distance) }
                return e }, n.Sprite = function() {
                var e = new Uint16Array([0, 1, 2, 0, 2, 3]),
                    t = new Float32Array([-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0]),
                    r = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
                    i = new n.BufferGeometry;
                return i.addAttribute("index", new n.BufferAttribute(e, 1)), i.addAttribute("position", new n.BufferAttribute(t, 3)), i.addAttribute("uv", new n.BufferAttribute(r, 2)),
                    function(e) { n.Object3D.call(this), this.type = "Sprite", this.geometry = i, this.material = void 0 !== e ? e : new n.SpriteMaterial } }(), n.Sprite.prototype = Object.create(n.Object3D.prototype), n.Sprite.prototype.constructor = n.Sprite, n.Sprite.prototype.raycast = function() {
                var e = new n.Vector3;
                return function(t, r) { e.setFromMatrixPosition(this.matrixWorld);
                    var i = t.ray.distanceToPoint(e);
                    i > this.scale.x || r.push({ distance: i, point: this.position, face: null, object: this }) } }(), n.Sprite.prototype.clone = function(e) {
                return void 0 === e && (e = new n.Sprite(this.material)), n.Object3D.prototype.clone.call(this, e), e }, n.Particle = n.Sprite, n.LensFlare = function(e, t, r, i, o) { n.Object3D.call(this), this.lensFlares = [], this.positionScreen = new n.Vector3, this.customUpdateCallback = void 0, void 0 !== e && this.add(e, t, r, i, o) }, n.LensFlare.prototype = Object.create(n.Object3D.prototype), n.LensFlare.prototype.constructor = n.LensFlare, n.LensFlare.prototype.add = function(e, t, r, i, o, a) { void 0 === t && (t = -1), void 0 === r && (r = 0), void 0 === a && (a = 1), void 0 === o && (o = new n.Color(16777215)), void 0 === i && (i = n.NormalBlending), r = Math.min(r, Math.max(0, r)), this.lensFlares.push({ texture: e, size: t, distance: r, x: 0, y: 0, z: 0, scale: 1, rotation: 1, opacity: a, color: o, blending: i }) }, n.LensFlare.prototype.updateLensFlares = function() {
                var e, t, r = this.lensFlares.length,
                    i = 2 * -this.positionScreen.x,
                    n = 2 * -this.positionScreen.y;
                for (e = 0; r > e; e++) t = this.lensFlares[e], t.x = this.positionScreen.x + i * t.distance, t.y = this.positionScreen.y + n * t.distance, t.wantedRotation = t.x * Math.PI * .25, t.rotation += .25 * (t.wantedRotation - t.rotation) }, n.Scene = function() { n.Object3D.call(this), this.type = "Scene", this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0 }, n.Scene.prototype = Object.create(n.Object3D.prototype), n.Scene.prototype.constructor = n.Scene, n.Scene.prototype.clone = function(e) {
                return void 0 === e && (e = new n.Scene), n.Object3D.prototype.clone.call(this, e), null !== this.fog && (e.fog = this.fog.clone()), null !== this.overrideMaterial && (e.overrideMaterial = this.overrideMaterial.clone()), e.autoUpdate = this.autoUpdate, e.matrixAutoUpdate = this.matrixAutoUpdate, e }, n.Fog = function(e, t, r) { this.name = "", this.color = new n.Color(e), this.near = void 0 !== t ? t : 1, this.far = void 0 !== r ? r : 1e3 }, n.Fog.prototype.clone = function() {
                return new n.Fog(this.color.getHex(), this.near, this.far) }, n.FogExp2 = function(e, t) { this.name = "", this.color = new n.Color(e), this.density = void 0 !== t ? t : 25e-5 }, n.FogExp2.prototype.clone = function() {
                return new n.FogExp2(this.color.getHex(), this.density) }, n.ShaderChunk = {}, n.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n\n if ( gl_FragColor.a < ALPHATEST ) discard;\n\n#endif\n", n.ShaderChunk.lights_lambert_vertex = "vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n   vLightBack = vec3( 0.0 );\n\n#endif\n\ntransformedNormal = normalize( transformedNormal );\n\n#if MAX_DIR_LIGHTS > 0\n\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n   vec3 dirVector = normalize( lDirection.xyz );\n\n   float dotProduct = dot( transformedNormal, dirVector );\n   vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n    #ifdef DOUBLE_SIDED\n\n     vec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n       #ifdef WRAP_AROUND\n\n          vec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n       #endif\n\n  #endif\n\n  #ifdef WRAP_AROUND\n\n      vec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n      directionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n\n       #ifdef DOUBLE_SIDED\n\n         directionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n\n       #endif\n\n  #endif\n\n  vLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n\n  #ifdef DOUBLE_SIDED\n\n     vLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n\n   #endif\n\n}\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n   for( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n      vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n       vec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n      float lDistance = 1.0;\n        if ( pointLightDistance[ i ] > 0.0 )\n          lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n      lVector = normalize( lVector );\n       float dotProduct = dot( transformedNormal, lVector );\n\n       vec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n      #ifdef DOUBLE_SIDED\n\n         vec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n         #ifdef WRAP_AROUND\n\n              vec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n         #endif\n\n      #endif\n\n      #ifdef WRAP_AROUND\n\n          vec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n            pointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n\n         #ifdef DOUBLE_SIDED\n\n             pointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n\n         #endif\n\n      #endif\n\n      vLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n\n      #ifdef DOUBLE_SIDED\n\n         vLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n\n       #endif\n\n  }\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n  for( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n       vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n        vec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n      float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\n\n     if ( spotEffect > spotLightAngleCos[ i ] ) {\n\n            spotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n         float lDistance = 1.0;\n            if ( spotLightDistance[ i ] > 0.0 )\n               lDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\n\n           lVector = normalize( lVector );\n\n         float dotProduct = dot( transformedNormal, lVector );\n         vec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n           #ifdef DOUBLE_SIDED\n\n             vec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n              #ifdef WRAP_AROUND\n\n                  vec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n              #endif\n\n          #endif\n\n          #ifdef WRAP_AROUND\n\n              vec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n             spotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n\n                #ifdef DOUBLE_SIDED\n\n                 spotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n\n                #endif\n\n          #endif\n\n          vLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n\n           #ifdef DOUBLE_SIDED\n\n             vLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n\n            #endif\n\n      }\n\n   }\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n  for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n       vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n        vec3 lVector = normalize( lDirection.xyz );\n\n     float dotProduct = dot( transformedNormal, lVector );\n\n       float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n     float hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\n\n      vLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n     #ifdef DOUBLE_SIDED\n\n         vLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n      #endif\n\n  }\n\n#endif\n\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n\n#ifdef DOUBLE_SIDED\n\n vLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n\n#endif", n.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n\n  uniform sampler2D map;\n\n#endif", n.ShaderChunk.default_vertex = "#ifdef USE_SKINNING\n\n  vec4 mvPosition = modelViewMatrix * skinned;\n\n#elif defined( USE_MORPHTARGETS )\n\n   vec4 mvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n\n#else\n\n  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n", n.ShaderChunk.map_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n   varying vec2 vUv;\n\n#endif\n\n#ifdef USE_MAP\n\n   uniform sampler2D map;\n\n#endif", n.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\n   mat4 skinMatrix = mat4( 0.0 );\n    skinMatrix += skinWeight.x * boneMatX;\n    skinMatrix += skinWeight.y * boneMatY;\n    skinMatrix += skinWeight.z * boneMatZ;\n    skinMatrix += skinWeight.w * boneMatW;\n    skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n  #ifdef USE_MORPHNORMALS\n\n vec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n\n   #else\n\n   vec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n\n  #endif\n\n#endif\n", n.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\n    #ifdef USE_LOGDEPTHBUF_EXT\n\n      varying float vFragDepth;\n\n   #endif\n\n  uniform float logDepthBufFC;\n\n#endif", n.ShaderChunk.lightmap_pars_vertex = "#ifdef USE_LIGHTMAP\n\n  varying vec2 vUv2;\n\n#endif", n.ShaderChunk.lights_phong_fragment = "vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n\n#ifdef DOUBLE_SIDED\n\n   normal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n   normal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n   normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n vec3 pointDiffuse = vec3( 0.0 );\n  vec3 pointSpecular = vec3( 0.0 );\n\n   for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n     vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n       vec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n       float lDistance = 1.0;\n        if ( pointLightDistance[ i ] > 0.0 )\n          lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n      lVector = normalize( lVector );\n\n             // diffuse\n\n      float dotProduct = dot( normal, lVector );\n\n      #ifdef WRAP_AROUND\n\n          float pointDiffuseWeightFull = max( dotProduct, 0.0 );\n            float pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n          vec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\n       #else\n\n           float pointDiffuseWeight = max( dotProduct, 0.0 );\n\n      #endif\n\n      pointDiffuse += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\n\n                // specular\n\n     vec3 pointHalfVector = normalize( lVector + viewPosition );\n       float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n        float pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\n        float specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n        vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );\n     pointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n\n }\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n  vec3 spotDiffuse = vec3( 0.0 );\n   vec3 spotSpecular = vec3( 0.0 );\n\n    for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n      vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n        vec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n       float lDistance = 1.0;\n        if ( spotLightDistance[ i ] > 0.0 )\n           lDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\n\n       lVector = normalize( lVector );\n\n     float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\n        if ( spotEffect > spotLightAngleCos[ i ] ) {\n\n            spotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n                 // diffuse\n\n          float dotProduct = dot( normal, lVector );\n\n          #ifdef WRAP_AROUND\n\n              float spotDiffuseWeightFull = max( dotProduct, 0.0 );\n             float spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n               vec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\n          #else\n\n               float spotDiffuseWeight = max( dotProduct, 0.0 );\n\n           #endif\n\n          spotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\n\n                  // specular\n\n         vec3 spotHalfVector = normalize( lVector + viewPosition );\n            float spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n          float spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\n          float specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n            vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, spotHalfVector ), 0.0 ), 5.0 );\n          spotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n\n        }\n\n   }\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n   vec3 dirDiffuse = vec3( 0.0 );\n    vec3 dirSpecular = vec3( 0.0 );\n\n for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n        vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n       vec3 dirVector = normalize( lDirection.xyz );\n\n               // diffuse\n\n      float dotProduct = dot( normal, dirVector );\n\n        #ifdef WRAP_AROUND\n\n          float dirDiffuseWeightFull = max( dotProduct, 0.0 );\n          float dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n            vec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n\n     #else\n\n           float dirDiffuseWeight = max( dotProduct, 0.0 );\n\n        #endif\n\n      dirDiffuse += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\n\n      // specular\n\n     vec3 dirHalfVector = normalize( dirVector + viewPosition );\n       float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n        float dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\n        /*\n        // fresnel term from skin shader\n      const float F0 = 0.128;\n\n     float base = 1.0 - dot( viewPosition, dirHalfVector );\n        float exponential = pow( base, 5.0 );\n\n       float fresnel = exponential + F0 * ( 1.0 - exponential );\n     */\n\n      /*\n        // fresnel term from fresnel shader\n       const float mFresnelBias = 0.08;\n      const float mFresnelScale = 0.3;\n      const float mFresnelPower = 5.0;\n\n        float fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\n     */\n\n      float specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n        //      dirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\n\n      vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n     dirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\n\n   }\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n  vec3 hemiDiffuse = vec3( 0.0 );\n   vec3 hemiSpecular = vec3( 0.0 );\n\n    for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n       vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n        vec3 lVector = normalize( lDirection.xyz );\n\n     // diffuse\n\n      float dotProduct = dot( normal, lVector );\n        float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n       vec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n       hemiDiffuse += diffuse * hemiColor;\n\n     // specular (sky light)\n\n     vec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n     float hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n        float hemiSpecularWeightSky = specularStrength * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\n        // specular (ground light)\n\n      vec3 lVectorGround = -lVector;\n\n      vec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n        float hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n      float hemiSpecularWeightGround = specularStrength * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\n      float dotProductGround = dot( normal, lVectorGround );\n\n      float specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n        vec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n        vec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n        hemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\n  }\n\n#endif\n\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n\n#if MAX_DIR_LIGHTS > 0\n\n    totalDiffuse += dirDiffuse;\n   totalSpecular += dirSpecular;\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n  totalDiffuse += hemiDiffuse;\n  totalSpecular += hemiSpecular;\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n    totalDiffuse += pointDiffuse;\n totalSpecular += pointSpecular;\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n    totalDiffuse += spotDiffuse;\n  totalSpecular += spotSpecular;\n\n#endif\n\n#ifdef METAL\n\n    gl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n\n#else\n\n   gl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n\n#endif", n.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n\n  uniform vec3 fogColor;\n\n  #ifdef FOG_EXP2\n\n     uniform float fogDensity;\n\n   #else\n\n       uniform float fogNear;\n        uniform float fogFar;\n #endif\n\n#endif", n.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\n  vec3 morphedNormal = vec3( 0.0 );\n\n   morphedNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n  morphedNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n  morphedNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n  morphedNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n    morphedNormal += normal;\n\n#endif", n.ShaderChunk.envmap_pars_fragment = "#ifdef USE_ENVMAP\n\n    uniform float reflectivity;\n   #ifdef ENVMAP_TYPE_CUBE\n       uniform samplerCube envMap;\n   #else\n     uniform sampler2D envMap;\n #endif\n    uniform float flipEnvMap;\n\n   #if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n      uniform float refractionRatio;\n\n  #else\n\n       varying vec3 vReflect;\n\n  #endif\n\n#endif\n", n.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif", n.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\n uniform sampler2D normalMap;\n  uniform vec2 normalScale;\n\n           // Per-Pixel Tangent Space Normal Mapping\n         // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n   vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n        vec3 q0 = dFdx( eye_pos.xyz );\n        vec3 q1 = dFdy( eye_pos.xyz );\n        vec2 st0 = dFdx( vUv.st );\n        vec2 st1 = dFdy( vUv.st );\n\n      vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n        vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n       vec3 N = normalize( surf_norm );\n\n        vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n      mapN.xy = normalScale * mapN.xy;\n      mat3 tsn = mat3( S, T, N );\n       return normalize( tsn * mapN );\n\n }\n\n#endif\n", n.ShaderChunk.lights_phong_pars_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n    varying vec3 vWorldPosition;\n\n#endif\n", n.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\n  varying vec2 vUv2;\n    uniform sampler2D lightMap;\n\n#endif", n.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\n  for( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n       vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n  }\n\n#endif", n.ShaderChunk.lights_phong_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n   vWorldPosition = worldPosition.xyz;\n\n#endif", n.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\n    vec4 texelColor = texture2D( map, vUv );\n\n    #ifdef GAMMA_INPUT\n\n      texelColor.xyz *= texelColor.xyz;\n\n   #endif\n\n  gl_FragColor = gl_FragColor * texelColor;\n\n#endif", n.ShaderChunk.lightmap_vertex = "#ifdef USE_LIGHTMAP\n\n  vUv2 = uv2;\n\n#endif", n.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n\n   gl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n\n#endif", n.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\n   varying vec3 vColor;\n\n#endif\n", n.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\n   #ifdef GAMMA_INPUT\n\n      vColor = color * color;\n\n #else\n\n       vColor = color;\n\n #endif\n\n#endif", n.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\n #ifdef USE_MORPHTARGETS\n\n vec4 skinVertex = bindMatrix * vec4( morphed, 1.0 );\n\n    #else\n\n   vec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\n   #endif\n\n  vec4 skinned = vec4( 0.0 );\n   skinned += boneMatX * skinVertex * skinWeight.x;\n  skinned += boneMatY * skinVertex * skinWeight.y;\n  skinned += boneMatZ * skinVertex * skinWeight.z;\n  skinned += boneMatW * skinVertex * skinWeight.w;\n  skinned  = bindMatrixInverse * skinned;\n\n#endif\n", n.ShaderChunk.envmap_pars_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n varying vec3 vReflect;\n\n  uniform float refractionRatio;\n\n#endif\n", n.ShaderChunk.linear_to_gamma_fragment = "#ifdef GAMMA_OUTPUT\n\n  gl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n\n#endif", n.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\n    varying vec3 vColor;\n\n#endif", n.ShaderChunk.lights_lambert_pars_vertex = "uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\n\nuniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n  uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n  uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n  uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n   uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n  uniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n  uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n   uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n    uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n   uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n   uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n   uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#ifdef WRAP_AROUND\n\n uniform vec3 wrapRGB;\n\n#endif\n", n.ShaderChunk.map_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n  varying vec2 vUv;\n uniform vec4 offsetRepeat;\n\n#endif\n", n.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n\n #if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n      vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n     // http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\n      // Transforming Normal Vectors with the Inverse Transformation\n\n      vec3 worldNormal = normalize( vec3( vec4( normal, 0.0 ) * viewMatrix ) );\n\n       #ifdef ENVMAP_MODE_REFLECTION\n\n           vec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n       #else\n\n           vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n      #endif\n\n  #else\n\n       vec3 reflectVec = vReflect;\n\n #endif\n\n  #ifdef DOUBLE_SIDED\n       float flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n  #else\n     float flipNormal = 1.0;\n   #endif\n\n  #ifdef ENVMAP_TYPE_CUBE\n       vec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n   #elif defined( ENVMAP_TYPE_EQUIREC )\n      vec2 sampleUV;\n        sampleUV.y = clamp( flipNormal * reflectVec.y * 0.5 + 0.5, 0.0, 1.0);\n     sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * 0.15915494309189533576888376337251 + 0.5; // reciprocal( 2 PI ) + 0.5\n     vec4 envColor = texture2D( envMap, sampleUV );\n        \n  #elif defined( ENVMAP_TYPE_SPHERE )\n       vec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n        vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n  #endif\n\n  #ifdef GAMMA_INPUT\n\n      envColor.xyz *= envColor.xyz;\n\n   #endif\n\n  #ifdef ENVMAP_BLENDING_MULTIPLY\n\n     gl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * envColor.xyz, specularStrength * reflectivity );\n\n   #elif defined( ENVMAP_BLENDING_MIX )\n\n        gl_FragColor.xyz = mix( gl_FragColor.xyz, envColor.xyz, specularStrength * reflectivity );\n\n  #elif defined( ENVMAP_BLENDING_ADD )\n\n        gl_FragColor.xyz += envColor.xyz * specularStrength * reflectivity;\n\n #endif\n\n#endif\n", n.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\n  uniform sampler2D specularMap;\n\n#endif", n.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\n   gl_Position.z = log2(max(1e-6, gl_Position.w + 1.0)) * logDepthBufFC;\n\n   #ifdef USE_LOGDEPTHBUF_EXT\n\n      vFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n      gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n  #endif\n\n#endif", n.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\n #ifndef USE_MORPHNORMALS\n\n    uniform float morphTargetInfluences[ 8 ];\n\n   #else\n\n   uniform float morphTargetInfluences[ 4 ];\n\n   #endif\n\n#endif", n.ShaderChunk.specularmap_fragment = "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n  vec4 texelSpecular = texture2D( specularMap, vUv );\n   specularStrength = texelSpecular.r;\n\n#else\n\n    specularStrength = 1.0;\n\n#endif", n.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n\n    #ifdef USE_LOGDEPTHBUF_EXT\n\n      float depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n #else\n\n       float depth = gl_FragCoord.z / gl_FragCoord.w;\n\n  #endif\n\n  #ifdef FOG_EXP2\n\n     const float LOG2 = 1.442695;\n      float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n       fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n #else\n\n       float fogFactor = smoothstep( fogNear, fogFar, depth );\n\n #endif\n    \n  gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n#endif", n.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\n  uniform sampler2D bumpMap;\n    uniform float bumpScale;\n\n            // Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n         //  http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n            // Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n vec2 dHdxy_fwd() {\n\n      vec2 dSTdx = dFdx( vUv );\n     vec2 dSTdy = dFdy( vUv );\n\n       float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n      float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n        float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n      return vec2( dBx, dBy );\n\n    }\n\n   vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n        vec3 vSigmaX = dFdx( surf_pos );\n      vec3 vSigmaY = dFdy( surf_pos );\n      vec3 vN = surf_norm;        // normalized\n\n       vec3 R1 = cross( vSigmaY, vN );\n       vec3 R2 = cross( vN, vSigmaX );\n\n     float fDet = dot( vSigmaX, R1 );\n\n        vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n      return normalize( abs( fDet ) * surf_norm - vGrad );\n\n    }\n\n#endif", n.ShaderChunk.defaultnormal_vertex = "#ifdef USE_SKINNING\n\n vec3 objectNormal = skinnedNormal.xyz;\n\n#elif defined( USE_MORPHNORMALS )\n\n vec3 objectNormal = morphedNormal;\n\n#else\n\n vec3 objectNormal = normal;\n\n#endif\n\n#ifdef FLIP_SIDED\n\n  objectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n", n.ShaderChunk.lights_phong_pars_fragment = "uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n  uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n  uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n  uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n   uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n   uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n  uniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n  uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n   uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n    uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n   uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n   uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\n uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n varying vec3 vWorldPosition;\n\n#endif\n\n#ifdef WRAP_AROUND\n\n    uniform vec3 wrapRGB;\n\n#endif\n\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;", n.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\n    mat4 boneMatX = getBoneMatrix( skinIndex.x );\n mat4 boneMatY = getBoneMatrix( skinIndex.y );\n mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n mat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif", n.ShaderChunk.map_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n vUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif", n.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n\n    gl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n\n#endif", n.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\n  varying vec4 vShadowCoord[ MAX_SHADOWS ];\n uniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif", n.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\n  gl_FragColor = gl_FragColor * vec4( vColor, 1.0 );\n\n#endif", n.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\n  vec3 morphed = vec3( 0.0 );\n   morphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n  morphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n  morphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n  morphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n    #ifndef USE_MORPHNORMALS\n\n    morphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n  morphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n  morphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n  morphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n    #endif\n\n  morphed += position;\n\n#endif", n.ShaderChunk.envmap_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n   vec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\n   worldNormal = normalize( worldNormal );\n\n vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n  #ifdef ENVMAP_MODE_REFLECTION\n\n       vReflect = reflect( cameraToVertex, worldNormal );\n\n  #else\n\n       vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n #endif\n\n#endif\n", n.ShaderChunk.shadowmap_fragment = "#ifdef USE_SHADOWMAP\n\n   #ifdef SHADOWMAP_DEBUG\n\n      vec3 frustumColors[3];\n        frustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n     frustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n     frustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n   #endif\n\n  #ifdef SHADOWMAP_CASCADE\n\n        int inFrustumCount = 0;\n\n #endif\n\n  float fDepth;\n vec3 shadowColor = vec3( 1.0 );\n\n for( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n       vec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n             // if ( something && something ) breaks ATI OpenGL shader compiler\n                // if ( all( something, something ) ) using this instead\n\n        bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n        bool inFrustum = all( inFrustumVec );\n\n               // don't shadow pixels outside of light frustum\n               // use just first frustum (for cascades)\n              // don't shadow pixels behind far plane of light frustum\n\n        #ifdef SHADOWMAP_CASCADE\n\n            inFrustumCount += int( inFrustum );\n           bvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n\n       #else\n\n           bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n        #endif\n\n      bool frustumTest = all( frustumTestVec );\n\n       if ( frustumTest ) {\n\n            shadowCoord.z += shadowBias[ i ];\n\n           #if defined( SHADOWMAP_TYPE_PCF )\n\n                       // Percentage-close filtering\n                     // (9 pixel kernel)\n                       // http://fabiensanglard.net/shadowmappingPCF/\n\n              float shadow = 0.0;\n\n     /*\n                        // nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n                        // must enroll loop manually\n\n                for ( float y = -1.25; y <= 1.25; y += 1.25 )\n                 for ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n                     vec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n                              // doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n                               //vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n                       float fDepth = unpackDepth( rgbaDepth );\n\n                        if ( fDepth < shadowCoord.z )\n                         shadow += 1.0;\n\n              }\n\n               shadow /= 9.0;\n\n      */\n\n              const float shadowDelta = 1.0 / 9.0;\n\n                float xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n              float yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n                float dx0 = -1.25 * xPixelOffset;\n             float dy0 = -1.25 * yPixelOffset;\n             float dx1 = 1.25 * xPixelOffset;\n              float dy1 = 1.25 * yPixelOffset;\n\n                fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n               if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n                fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n               if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n                fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n               if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n                fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n               if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n                fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n              if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n                fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n               if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n                fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n               if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n                fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n               if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n                fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n               if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n                shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n         #elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n                        // Percentage-close filtering\n                     // (9 pixel kernel)\n                       // http://fabiensanglard.net/shadowmappingPCF/\n\n              float shadow = 0.0;\n\n             float xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n              float yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n                float dx0 = -1.0 * xPixelOffset;\n              float dy0 = -1.0 * yPixelOffset;\n              float dx1 = 1.0 * xPixelOffset;\n               float dy1 = 1.0 * yPixelOffset;\n\n             mat3 shadowKernel;\n                mat3 depthKernel;\n\n               depthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n                depthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n                depthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n                depthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n                depthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n               depthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n                depthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n                depthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n                depthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n              vec3 shadowZ = vec3( shadowCoord.z );\n             shadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n               shadowKernel[0] *= vec3(0.25);\n\n              shadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n               shadowKernel[1] *= vec3(0.25);\n\n              shadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n               shadowKernel[2] *= vec3(0.25);\n\n              vec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n             shadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n             shadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n               vec4 shadowValues;\n                shadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n                shadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n                shadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n                shadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n              shadow = dot( shadowValues, vec4( 1.0 ) );\n\n              shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n         #else\n\n               vec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n             float fDepth = unpackDepth( rgbaDepth );\n\n                if ( fDepth < shadowCoord.z )\n\n       // spot with multiple shadows is darker\n\n                 shadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n      // spot with multiple shadows has the same color as single shadow spot\n\n      //                  shadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n          #endif\n\n      }\n\n\n     #ifdef SHADOWMAP_DEBUG\n\n          #ifdef SHADOWMAP_CASCADE\n\n                if ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n\n         #else\n\n               if ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n\n            #endif\n\n      #endif\n\n  }\n\n   #ifdef GAMMA_OUTPUT\n\n     shadowColor *= shadowColor;\n\n #endif\n\n  gl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n\n#endif\n", n.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n  #ifdef USE_SKINNING\n\n     vec4 worldPosition = modelMatrix * skinned;\n\n #elif defined( USE_MORPHTARGETS )\n\n       vec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n\n    #else\n\n       vec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n   #endif\n\n#endif\n", n.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\n  uniform sampler2D shadowMap[ MAX_SHADOWS ];\n   uniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n  uniform float shadowDarkness[ MAX_SHADOWS ];\n  uniform float shadowBias[ MAX_SHADOWS ];\n\n    varying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n   float unpackDepth( const in vec4 rgba_depth ) {\n\n     const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n        float depth = dot( rgba_depth, bit_shift );\n       return depth;\n\n   }\n\n#endif", n.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\n uniform mat4 bindMatrix;\n  uniform mat4 bindMatrixInverse;\n\n #ifdef BONE_TEXTURE\n\n     uniform sampler2D boneTexture;\n        uniform int boneTextureWidth;\n     uniform int boneTextureHeight;\n\n      mat4 getBoneMatrix( const in float i ) {\n\n            float j = i * 4.0;\n            float x = mod( j, float( boneTextureWidth ) );\n            float y = floor( j / float( boneTextureWidth ) );\n\n           float dx = 1.0 / float( boneTextureWidth );\n           float dy = 1.0 / float( boneTextureHeight );\n\n            y = dy * ( y + 0.5 );\n\n           vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n          vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n          vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n          vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n            mat4 bone = mat4( v1, v2, v3, v4 );\n\n         return bone;\n\n        }\n\n   #else\n\n       uniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n       mat4 getBoneMatrix( const in float i ) {\n\n            mat4 bone = boneGlobalMatrices[ int(i) ];\n         return bone;\n\n        }\n\n   #endif\n\n#endif\n", n.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\n  uniform float logDepthBufFC;\n\n    #ifdef USE_LOGDEPTHBUF_EXT\n\n      #extension GL_EXT_frag_depth : enable\n     varying float vFragDepth;\n\n   #endif\n\n#endif", n.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n\n   gl_FragColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n", n.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\n   uniform sampler2D alphaMap;\n\n#endif\n", n.UniformsUtils = {
                merge: function(e) {
                    for (var t = {}, r = 0; r < e.length; r++) {
                        var i = this.clone(e[r]);
                        for (var n in i) t[n] = i[n]
                    }
                    return t
                },
                clone: function(e) {
                    var t = {};
                    for (var r in e) { t[r] = {};
                        for (var i in e[r]) {
                            var o = e[r][i];
                            t[r][i] = o instanceof n.Color || o instanceof n.Vector2 || o instanceof n.Vector3 || o instanceof n.Vector4 || o instanceof n.Matrix4 || o instanceof n.Texture ? o.clone() : o instanceof Array ? o.slice() : o } }
                    return t }
            }, n.UniformsLib = { common: { diffuse: { type: "c", value: new n.Color(15658734) }, opacity: { type: "f", value: 1 }, map: { type: "t", value: null }, offsetRepeat: { type: "v4", value: new n.Vector4(0, 0, 1, 1) }, lightMap: { type: "t", value: null }, specularMap: { type: "t", value: null }, alphaMap: { type: "t", value: null }, envMap: { type: "t", value: null }, flipEnvMap: { type: "f", value: -1 }, reflectivity: { type: "f", value: 1 }, refractionRatio: { type: "f", value: .98 }, morphTargetInfluences: { type: "f", value: 0 } }, bump: { bumpMap: { type: "t", value: null }, bumpScale: { type: "f", value: 1 } }, normalmap: { normalMap: { type: "t", value: null }, normalScale: { type: "v2", value: new n.Vector2(1, 1) } }, fog: { fogDensity: { type: "f", value: 25e-5 }, fogNear: { type: "f", value: 1 }, fogFar: { type: "f", value: 2e3 }, fogColor: { type: "c", value: new n.Color(16777215) } }, lights: { ambientLightColor: { type: "fv", value: [] }, directionalLightDirection: { type: "fv", value: [] }, directionalLightColor: { type: "fv", value: [] }, hemisphereLightDirection: { type: "fv", value: [] }, hemisphereLightSkyColor: { type: "fv", value: [] }, hemisphereLightGroundColor: { type: "fv", value: [] }, pointLightColor: { type: "fv", value: [] }, pointLightPosition: { type: "fv", value: [] }, pointLightDistance: { type: "fv1", value: [] }, spotLightColor: { type: "fv", value: [] }, spotLightPosition: { type: "fv", value: [] }, spotLightDirection: { type: "fv", value: [] }, spotLightDistance: { type: "fv1", value: [] }, spotLightAngleCos: { type: "fv1", value: [] }, spotLightExponent: { type: "fv1", value: [] } }, particle: { psColor: { type: "c", value: new n.Color(15658734) }, opacity: { type: "f", value: 1 }, size: { type: "f", value: 1 }, scale: { type: "f", value: 1 }, map: { type: "t", value: null }, fogDensity: { type: "f", value: 25e-5 }, fogNear: { type: "f", value: 1 }, fogFar: { type: "f", value: 2e3 }, fogColor: { type: "c", value: new n.Color(16777215) } }, shadowmap: { shadowMap: { type: "tv", value: [] }, shadowMapSize: { type: "v2v", value: [] }, shadowBias: { type: "fv1", value: [] }, shadowDarkness: { type: "fv1", value: [] }, shadowMatrix: { type: "m4v", value: [] } } }, n.ShaderLib = { basic: { uniforms: n.UniformsUtils.merge([n.UniformsLib.common, n.UniformsLib.fog, n.UniformsLib.shadowmap]), vertexShader: [n.ShaderChunk.map_pars_vertex, n.ShaderChunk.lightmap_pars_vertex, n.ShaderChunk.envmap_pars_vertex, n.ShaderChunk.color_pars_vertex, n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.skinning_pars_vertex, n.ShaderChunk.shadowmap_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.map_vertex, n.ShaderChunk.lightmap_vertex, n.ShaderChunk.color_vertex, n.ShaderChunk.skinbase_vertex, "   #ifdef USE_ENVMAP", n.ShaderChunk.morphnormal_vertex, n.ShaderChunk.skinnormal_vertex, n.ShaderChunk.defaultnormal_vertex, "    #endif", n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.skinning_vertex, n.ShaderChunk.default_vertex, n.ShaderChunk.logdepthbuf_vertex, n.ShaderChunk.worldpos_vertex, n.ShaderChunk.envmap_vertex, n.ShaderChunk.shadowmap_vertex, "}"].join("\n"), fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", n.ShaderChunk.color_pars_fragment, n.ShaderChunk.map_pars_fragment, n.ShaderChunk.alphamap_pars_fragment, n.ShaderChunk.lightmap_pars_fragment, n.ShaderChunk.envmap_pars_fragment, n.ShaderChunk.fog_pars_fragment, n.ShaderChunk.shadowmap_pars_fragment, n.ShaderChunk.specularmap_pars_fragment, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", " gl_FragColor = vec4( diffuse, opacity );", n.ShaderChunk.logdepthbuf_fragment, n.ShaderChunk.map_fragment, n.ShaderChunk.alphamap_fragment, n.ShaderChunk.alphatest_fragment, n.ShaderChunk.specularmap_fragment, n.ShaderChunk.lightmap_fragment, n.ShaderChunk.color_fragment, n.ShaderChunk.envmap_fragment, n.ShaderChunk.shadowmap_fragment, n.ShaderChunk.linear_to_gamma_fragment, n.ShaderChunk.fog_fragment, "}"].join("\n") }, lambert: { uniforms: n.UniformsUtils.merge([n.UniformsLib.common, n.UniformsLib.fog, n.UniformsLib.lights, n.UniformsLib.shadowmap, { ambient: { type: "c", value: new n.Color(16777215) }, emissive: { type: "c", value: new n.Color(0) }, wrapRGB: { type: "v3", value: new n.Vector3(1, 1, 1) } }]), vertexShader: ["#define LAMBERT", "varying vec3 vLightFront;", "#ifdef DOUBLE_SIDED", "    varying vec3 vLightBack;", "#endif", n.ShaderChunk.map_pars_vertex, n.ShaderChunk.lightmap_pars_vertex, n.ShaderChunk.envmap_pars_vertex, n.ShaderChunk.lights_lambert_pars_vertex, n.ShaderChunk.color_pars_vertex, n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.skinning_pars_vertex, n.ShaderChunk.shadowmap_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.map_vertex, n.ShaderChunk.lightmap_vertex, n.ShaderChunk.color_vertex, n.ShaderChunk.morphnormal_vertex, n.ShaderChunk.skinbase_vertex, n.ShaderChunk.skinnormal_vertex, n.ShaderChunk.defaultnormal_vertex, n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.skinning_vertex, n.ShaderChunk.default_vertex, n.ShaderChunk.logdepthbuf_vertex, n.ShaderChunk.worldpos_vertex, n.ShaderChunk.envmap_vertex, n.ShaderChunk.lights_lambert_vertex, n.ShaderChunk.shadowmap_vertex, "}"].join("\n"), fragmentShader: ["uniform float opacity;", "varying vec3 vLightFront;", "#ifdef DOUBLE_SIDED", " varying vec3 vLightBack;", "#endif", n.ShaderChunk.color_pars_fragment, n.ShaderChunk.map_pars_fragment, n.ShaderChunk.alphamap_pars_fragment, n.ShaderChunk.lightmap_pars_fragment, n.ShaderChunk.envmap_pars_fragment, n.ShaderChunk.fog_pars_fragment, n.ShaderChunk.shadowmap_pars_fragment, n.ShaderChunk.specularmap_pars_fragment, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "   gl_FragColor = vec4( vec3( 1.0 ), opacity );", n.ShaderChunk.logdepthbuf_fragment, n.ShaderChunk.map_fragment, n.ShaderChunk.alphamap_fragment, n.ShaderChunk.alphatest_fragment, n.ShaderChunk.specularmap_fragment, " #ifdef DOUBLE_SIDED", "     if ( gl_FrontFacing )", "           gl_FragColor.xyz *= vLightFront;", "        else", "            gl_FragColor.xyz *= vLightBack;", " #else", "       gl_FragColor.xyz *= vLightFront;", "    #endif", n.ShaderChunk.lightmap_fragment, n.ShaderChunk.color_fragment, n.ShaderChunk.envmap_fragment, n.ShaderChunk.shadowmap_fragment, n.ShaderChunk.linear_to_gamma_fragment, n.ShaderChunk.fog_fragment, "}"].join("\n") }, phong: { uniforms: n.UniformsUtils.merge([n.UniformsLib.common, n.UniformsLib.bump, n.UniformsLib.normalmap, n.UniformsLib.fog, n.UniformsLib.lights, n.UniformsLib.shadowmap, { ambient: { type: "c", value: new n.Color(16777215) }, emissive: { type: "c", value: new n.Color(0) }, specular: { type: "c", value: new n.Color(1118481) }, shininess: { type: "f", value: 30 }, wrapRGB: { type: "v3", value: new n.Vector3(1, 1, 1) } }]), vertexShader: ["#define PHONG", "varying vec3 vViewPosition;", "varying vec3 vNormal;", n.ShaderChunk.map_pars_vertex, n.ShaderChunk.lightmap_pars_vertex, n.ShaderChunk.envmap_pars_vertex, n.ShaderChunk.lights_phong_pars_vertex, n.ShaderChunk.color_pars_vertex, n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.skinning_pars_vertex, n.ShaderChunk.shadowmap_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.map_vertex, n.ShaderChunk.lightmap_vertex, n.ShaderChunk.color_vertex, n.ShaderChunk.morphnormal_vertex, n.ShaderChunk.skinbase_vertex, n.ShaderChunk.skinnormal_vertex, n.ShaderChunk.defaultnormal_vertex, "    vNormal = normalize( transformedNormal );", n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.skinning_vertex, n.ShaderChunk.default_vertex, n.ShaderChunk.logdepthbuf_vertex, "  vViewPosition = -mvPosition.xyz;", n.ShaderChunk.worldpos_vertex, n.ShaderChunk.envmap_vertex, n.ShaderChunk.lights_phong_vertex, n.ShaderChunk.shadowmap_vertex, "}"].join("\n"), fragmentShader: ["#define PHONG", "uniform vec3 diffuse;", "uniform float opacity;", "uniform vec3 ambient;", "uniform vec3 emissive;", "uniform vec3 specular;", "uniform float shininess;", n.ShaderChunk.color_pars_fragment, n.ShaderChunk.map_pars_fragment, n.ShaderChunk.alphamap_pars_fragment, n.ShaderChunk.lightmap_pars_fragment, n.ShaderChunk.envmap_pars_fragment, n.ShaderChunk.fog_pars_fragment, n.ShaderChunk.lights_phong_pars_fragment, n.ShaderChunk.shadowmap_pars_fragment, n.ShaderChunk.bumpmap_pars_fragment, n.ShaderChunk.normalmap_pars_fragment, n.ShaderChunk.specularmap_pars_fragment, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", " gl_FragColor = vec4( vec3( 1.0 ), opacity );", n.ShaderChunk.logdepthbuf_fragment, n.ShaderChunk.map_fragment, n.ShaderChunk.alphamap_fragment, n.ShaderChunk.alphatest_fragment, n.ShaderChunk.specularmap_fragment, n.ShaderChunk.lights_phong_fragment, n.ShaderChunk.lightmap_fragment, n.ShaderChunk.color_fragment, n.ShaderChunk.envmap_fragment, n.ShaderChunk.shadowmap_fragment, n.ShaderChunk.linear_to_gamma_fragment, n.ShaderChunk.fog_fragment, "}"].join("\n") }, particle_basic: { uniforms: n.UniformsUtils.merge([n.UniformsLib.particle, n.UniformsLib.shadowmap]), vertexShader: ["uniform float size;", "uniform float scale;", n.ShaderChunk.color_pars_vertex, n.ShaderChunk.shadowmap_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.color_vertex, "   vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "  #ifdef USE_SIZEATTENUATION", "      gl_PointSize = size * ( scale / length( mvPosition.xyz ) );", " #else", "       gl_PointSize = size;", "    #endif", "  gl_Position = projectionMatrix * mvPosition;", n.ShaderChunk.logdepthbuf_vertex, n.ShaderChunk.worldpos_vertex, n.ShaderChunk.shadowmap_vertex, "}"].join("\n"), fragmentShader: ["uniform vec3 psColor;", "uniform float opacity;", n.ShaderChunk.color_pars_fragment, n.ShaderChunk.map_particle_pars_fragment, n.ShaderChunk.fog_pars_fragment, n.ShaderChunk.shadowmap_pars_fragment, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "   gl_FragColor = vec4( psColor, opacity );", n.ShaderChunk.logdepthbuf_fragment, n.ShaderChunk.map_particle_fragment, n.ShaderChunk.alphatest_fragment, n.ShaderChunk.color_fragment, n.ShaderChunk.shadowmap_fragment, n.ShaderChunk.fog_fragment, "}"].join("\n") }, dashed: { uniforms: n.UniformsUtils.merge([n.UniformsLib.common, n.UniformsLib.fog, { scale: { type: "f", value: 1 }, dashSize: { type: "f", value: 1 }, totalSize: { type: "f", value: 2 } }]), vertexShader: ["uniform float scale;", "attribute float lineDistance;", "varying float vLineDistance;", n.ShaderChunk.color_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.color_vertex, "    vLineDistance = scale * lineDistance;", "   vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "  gl_Position = projectionMatrix * mvPosition;", n.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"), fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", "uniform float dashSize;", "uniform float totalSize;", "varying float vLineDistance;", n.ShaderChunk.color_pars_fragment, n.ShaderChunk.fog_pars_fragment, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "    if ( mod( vLineDistance, totalSize ) > dashSize ) {", "     discard;", "    }", "   gl_FragColor = vec4( diffuse, opacity );", n.ShaderChunk.logdepthbuf_fragment, n.ShaderChunk.color_fragment, n.ShaderChunk.fog_fragment, "}"].join("\n") }, depth: { uniforms: { mNear: { type: "f", value: 1 }, mFar: { type: "f", value: 2e3 }, opacity: { type: "f", value: 1 } }, vertexShader: [n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.default_vertex, n.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"), fragmentShader: ["uniform float mNear;", "uniform float mFar;", "uniform float opacity;", n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", n.ShaderChunk.logdepthbuf_fragment, "    #ifdef USE_LOGDEPTHBUF_EXT", "      float depth = gl_FragDepthEXT / gl_FragCoord.w;", " #else", "       float depth = gl_FragCoord.z / gl_FragCoord.w;", "  #endif", "  float color = 1.0 - smoothstep( mNear, mFar, depth );", "   gl_FragColor = vec4( vec3( color ), opacity );", "}"].join("\n") }, normal: { uniforms: { opacity: { type: "f", value: 1 } }, vertexShader: ["varying vec3 vNormal;", n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", "  vNormal = normalize( normalMatrix * normal );", n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.default_vertex, n.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"), fragmentShader: ["uniform float opacity;", "varying vec3 vNormal;", n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "  gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );", n.ShaderChunk.logdepthbuf_fragment, "}"].join("\n") }, cube: { uniforms: { tCube: { type: "t", value: null }, tFlip: { type: "f", value: -1 } }, vertexShader: ["varying vec3 vWorldPosition;", n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", "   vec4 worldPosition = modelMatrix * vec4( position, 1.0 );", "   vWorldPosition = worldPosition.xyz;", " gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", n.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"), fragmentShader: ["uniform samplerCube tCube;", "uniform float tFlip;", "varying vec3 vWorldPosition;", n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "   gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );", n.ShaderChunk.logdepthbuf_fragment, "}"].join("\n") }, equirect: { uniforms: { tEquirect: { type: "t", value: null }, tFlip: { type: "f", value: -1 } }, vertexShader: ["varying vec3 vWorldPosition;", n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", "   vec4 worldPosition = modelMatrix * vec4( position, 1.0 );", "   vWorldPosition = worldPosition.xyz;", " gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", n.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"), fragmentShader: ["uniform sampler2D tEquirect;", "uniform float tFlip;", "varying vec3 vWorldPosition;", n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "vec3 direction = normalize( vWorldPosition );", "vec2 sampleUV;", "sampleUV.y = clamp( tFlip * direction.y * -0.5 + 0.5, 0.0, 1.0);", "sampleUV.x = atan( direction.z, direction.x ) * 0.15915494309189533576888376337251 + 0.5;", "gl_FragColor = texture2D( tEquirect, sampleUV );", n.ShaderChunk.logdepthbuf_fragment, "}"].join("\n") }, depthRGBA: { uniforms: {}, vertexShader: [n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.skinning_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.skinbase_vertex, n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.skinning_vertex, n.ShaderChunk.default_vertex, n.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"), fragmentShader: [n.ShaderChunk.logdepthbuf_pars_fragment, "vec4 pack_depth( const in float depth ) {", " const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );", "    const vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );", "   vec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );", "   res -= res.xxyz * bit_mask;", " return res;", "}", "void main() {", n.ShaderChunk.logdepthbuf_fragment, "   #ifdef USE_LOGDEPTHBUF_EXT", "      gl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );", "   #else", "       gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );", "    #endif", "}"].join("\n") } }, n.WebGLRenderer = function(e) {
                function t(e) { e.__webglVertexBuffer = Vt.createBuffer(), e.__webglColorBuffer = Vt.createBuffer(), zt.info.memory.geometries++ }

                function r(e) { e.__webglVertexBuffer = Vt.createBuffer(), e.__webglColorBuffer = Vt.createBuffer(), e.__webglLineDistanceBuffer = Vt.createBuffer(), zt.info.memory.geometries++ }

                function i(e) { e.__webglVertexBuffer = Vt.createBuffer(), e.__webglNormalBuffer = Vt.createBuffer(), e.__webglTangentBuffer = Vt.createBuffer(), e.__webglColorBuffer = Vt.createBuffer(), e.__webglUVBuffer = Vt.createBuffer(), e.__webglUV2Buffer = Vt.createBuffer(), e.__webglSkinIndicesBuffer = Vt.createBuffer(), e.__webglSkinWeightsBuffer = Vt.createBuffer(), e.__webglFaceBuffer = Vt.createBuffer(), e.__webglLineBuffer = Vt.createBuffer();
                    var t = e.numMorphTargets;
                    if (t) { e.__webglMorphTargetsBuffers = [];
                        for (var r = 0, i = t; i > r; r++) e.__webglMorphTargetsBuffers.push(Vt.createBuffer()) }
                    var n = e.numMorphNormals;
                    if (n) { e.__webglMorphNormalsBuffers = [];
                        for (var r = 0, i = n; i > r; r++) e.__webglMorphNormalsBuffers.push(Vt.createBuffer()) }
                    zt.info.memory.geometries++ }

                function o(e) {
                    var t = e.geometry,
                        r = e.material,
                        i = t.vertices.length;
                    if (r.attributes) { void 0 === t.__webglCustomAttributesList && (t.__webglCustomAttributesList = []);
                        for (var n in r.attributes) {
                            var o = r.attributes[n];
                            if (!o.__webglInitialized || o.createUniqueBuffers) { o.__webglInitialized = !0;
                                var a = 1; "v2" === o.type ? a = 2 : "v3" === o.type ? a = 3 : "v4" === o.type ? a = 4 : "c" === o.type && (a = 3), o.size = a, o.array = new Float32Array(i * a), o.buffer = Vt.createBuffer(), o.buffer.belongsToAttribute = n, o.needsUpdate = !0 }
                            t.__webglCustomAttributesList.push(o) } } }

                function a(e, t) {
                    var r = e.vertices.length;
                    e.__vertexArray = new Float32Array(3 * r), e.__colorArray = new Float32Array(3 * r), e.__sortArray = [], e.__webglParticleCount = r, o(t) }

                function s(e, t) {
                    var r = e.vertices.length;
                    e.__vertexArray = new Float32Array(3 * r), e.__colorArray = new Float32Array(3 * r), e.__lineDistanceArray = new Float32Array(1 * r), e.__webglLineCount = r, o(t) }

                function h(e, t) {
                    var r = t.geometry,
                        i = e.faces3,
                        n = 3 * i.length,
                        o = 1 * i.length,
                        a = 3 * i.length,
                        s = l(t, e);
                    e.__vertexArray = new Float32Array(3 * n), e.__normalArray = new Float32Array(3 * n), e.__colorArray = new Float32Array(3 * n), e.__uvArray = new Float32Array(2 * n), r.faceVertexUvs.length > 1 && (e.__uv2Array = new Float32Array(2 * n)), r.hasTangents && (e.__tangentArray = new Float32Array(4 * n)), t.geometry.skinWeights.length && t.geometry.skinIndices.length && (e.__skinIndexArray = new Float32Array(4 * n), e.__skinWeightArray = new Float32Array(4 * n));
                    var h = null !== xr.get("OES_element_index_uint") && o > 21845 ? Uint32Array : Uint16Array;
                    e.__typeArray = h, e.__faceArray = new h(3 * o), e.__lineArray = new h(2 * a);
                    var c = e.numMorphTargets;
                    if (c) { e.__morphTargetsArrays = [];
                        for (var u = 0, p = c; p > u; u++) e.__morphTargetsArrays.push(new Float32Array(3 * n)) }
                    var f = e.numMorphNormals;
                    if (f) { e.__morphNormalsArrays = [];
                        for (var u = 0, p = f; p > u; u++) e.__morphNormalsArrays.push(new Float32Array(3 * n)) }
                    if (e.__webglFaceCount = 3 * o, e.__webglLineCount = 2 * a, s.attributes) { void 0 === e.__webglCustomAttributesList && (e.__webglCustomAttributesList = []);
                        for (var d in s.attributes) {
                            var m = s.attributes[d],
                                g = {};
                            for (var v in m) g[v] = m[v];
                            if (!g.__webglInitialized || g.createUniqueBuffers) { g.__webglInitialized = !0;
                                var y = 1; "v2" === g.type ? y = 2 : "v3" === g.type ? y = 3 : "v4" === g.type ? y = 4 : "c" === g.type && (y = 3), g.size = y, g.array = new Float32Array(n * y), g.buffer = Vt.createBuffer(), g.buffer.belongsToAttribute = d, m.needsUpdate = !0, g.__original = m }
                            e.__webglCustomAttributesList.push(g) } }
                    e.__inittedArrays = !0 }

                function l(e, t) {
                    return e.material instanceof n.MeshFaceMaterial ? e.material.materials[t.materialIndex] : e.material }

                function c(e) {
                    return e && void 0 !== e.shading && e.shading === n.SmoothShading }

                function u(e, t) {
                    var r, i, n, o, a, s, h, l, c, u, p, f = e.vertices,
                        d = f.length,
                        m = e.colors,
                        g = m.length,
                        v = e.__vertexArray,
                        y = e.__colorArray,
                        x = (e.__sortArray, e.verticesNeedUpdate),
                        b = (e.elementsNeedUpdate, e.colorsNeedUpdate),
                        w = e.__webglCustomAttributesList;
                    if (x) {
                        for (r = 0; d > r; r++) n = f[r], o = 3 * r, v[o] = n.x, v[o + 1] = n.y, v[o + 2] = n.z;
                        Vt.bindBuffer(Vt.ARRAY_BUFFER, e.__webglVertexBuffer), Vt.bufferData(Vt.ARRAY_BUFFER, v, t) }
                    if (b) {
                        for (i = 0; g > i; i++) a = m[i], o = 3 * i, y[o] = a.r, y[o + 1] = a.g, y[o + 2] = a.b;
                        Vt.bindBuffer(Vt.ARRAY_BUFFER, e.__webglColorBuffer), Vt.bufferData(Vt.ARRAY_BUFFER, y, t) }
                    if (w)
                        for (s = 0, h = w.length; h > s; s++) {
                            if (p = w[s], p.needsUpdate && (void 0 === p.boundTo || "vertices" === p.boundTo))
                                if (c = p.value.length, o = 0, 1 === p.size)
                                    for (l = 0; c > l; l++) p.array[l] = p.value[l];
                                else if (2 === p.size)
                                for (l = 0; c > l; l++) u = p.value[l], p.array[o] = u.x, p.array[o + 1] = u.y, o += 2;
                            else if (3 === p.size)
                                if ("c" === p.type)
                                    for (l = 0; c > l; l++) u = p.value[l], p.array[o] = u.r, p.array[o + 1] = u.g, p.array[o + 2] = u.b, o += 3;
                                else
                                    for (l = 0; c > l; l++) u = p.value[l], p.array[o] = u.x, p.array[o + 1] = u.y, p.array[o + 2] = u.z, o += 3;
                            else if (4 === p.size)
                                for (l = 0; c > l; l++) u = p.value[l], p.array[o] = u.x, p.array[o + 1] = u.y, p.array[o + 2] = u.z, p.array[o + 3] = u.w, o += 4;
                            Vt.bindBuffer(Vt.ARRAY_BUFFER, p.buffer), Vt.bufferData(Vt.ARRAY_BUFFER, p.array, t), p.needsUpdate = !1 } }

                function p(e, t) {
                    var r, i, n, o, a, s, h, l, c, u, p, f, d = e.vertices,
                        m = e.colors,
                        g = e.lineDistances,
                        v = d.length,
                        y = m.length,
                        x = g.length,
                        b = e.__vertexArray,
                        w = e.__colorArray,
                        _ = e.__lineDistanceArray,
                        M = e.verticesNeedUpdate,
                        S = e.colorsNeedUpdate,
                        T = e.lineDistancesNeedUpdate,
                        C = e.__webglCustomAttributesList;
                    if (M) {
                        for (r = 0; v > r; r++) o = d[r], a = 3 * r, b[a] = o.x, b[a + 1] = o.y, b[a + 2] = o.z;
                        Vt.bindBuffer(Vt.ARRAY_BUFFER, e.__webglVertexBuffer), Vt.bufferData(Vt.ARRAY_BUFFER, b, t) }
                    if (S) {
                        for (i = 0; y > i; i++) s = m[i], a = 3 * i, w[a] = s.r, w[a + 1] = s.g, w[a + 2] = s.b;
                        Vt.bindBuffer(Vt.ARRAY_BUFFER, e.__webglColorBuffer), Vt.bufferData(Vt.ARRAY_BUFFER, w, t) }
                    if (T) {
                        for (n = 0; x > n; n++) _[n] = g[n];
                        Vt.bindBuffer(Vt.ARRAY_BUFFER, e.__webglLineDistanceBuffer), Vt.bufferData(Vt.ARRAY_BUFFER, _, t) }
                    if (C)
                        for (h = 0, l = C.length; l > h; h++)
                            if (f = C[h], f.needsUpdate && (void 0 === f.boundTo || "vertices" === f.boundTo)) {
                                if (a = 0, u = f.value.length, 1 === f.size)
                                    for (c = 0; u > c; c++) f.array[c] = f.value[c];
                                else if (2 === f.size)
                                    for (c = 0; u > c; c++) p = f.value[c], f.array[a] = p.x, f.array[a + 1] = p.y, a += 2;
                                else if (3 === f.size)
                                    if ("c" === f.type)
                                        for (c = 0; u > c; c++) p = f.value[c], f.array[a] = p.r, f.array[a + 1] = p.g, f.array[a + 2] = p.b, a += 3;
                                    else
                                        for (c = 0; u > c; c++) p = f.value[c], f.array[a] = p.x, f.array[a + 1] = p.y, f.array[a + 2] = p.z, a += 3;
                                else if (4 === f.size)
                                    for (c = 0; u > c; c++) p = f.value[c], f.array[a] = p.x, f.array[a + 1] = p.y, f.array[a + 2] = p.z, f.array[a + 3] = p.w, a += 4;
                                Vt.bindBuffer(Vt.ARRAY_BUFFER, f.buffer), Vt.bufferData(Vt.ARRAY_BUFFER, f.array, t), f.needsUpdate = !1 } }

                function f(e, t, r, i, o) {
                    if (e.__inittedArrays) {
                        var a, s, h, l, u, p, f, d, m, g, v, y, x, b, w, _, M, S, T, C, E, A, L, P, R, F, B, U, D, V, z, k, N, O, G, I, H, W, j, X, q, Y, K = c(o),
                            Q = 0,
                            Z = 0,
                            J = 0,
                            $ = 0,
                            et = 0,
                            tt = 0,
                            rt = 0,
                            it = 0,
                            nt = 0,
                            ot = 0,
                            at = 0,
                            st = 0,
                            ht = 0,
                            lt = e.__vertexArray,
                            ct = e.__uvArray,
                            ut = e.__uv2Array,
                            pt = e.__normalArray,
                            ft = e.__tangentArray,
                            dt = e.__colorArray,
                            mt = e.__skinIndexArray,
                            gt = e.__skinWeightArray,
                            vt = e.__morphTargetsArrays,
                            yt = e.__morphNormalsArrays,
                            xt = e.__webglCustomAttributesList,
                            bt = e.__faceArray,
                            wt = e.__lineArray,
                            _t = t.geometry,
                            Mt = _t.verticesNeedUpdate,
                            St = _t.elementsNeedUpdate,
                            Tt = _t.uvsNeedUpdate,
                            Ct = _t.normalsNeedUpdate,
                            Et = _t.tangentsNeedUpdate,
                            At = _t.colorsNeedUpdate,
                            Lt = _t.morphTargetsNeedUpdate,
                            Pt = _t.vertices,
                            Rt = e.faces3,
                            Ft = _t.faces,
                            Bt = _t.faceVertexUvs[0],
                            Ut = _t.faceVertexUvs[1],
                            Dt = (_t.colors, _t.skinIndices),
                            zt = _t.skinWeights,
                            kt = _t.morphTargets,
                            Nt = _t.morphNormals;
                        if (Mt) {
                            for (a = 0, s = Rt.length; s > a; a++) l = Ft[Rt[a]], y = Pt[l.a], x = Pt[l.b], b = Pt[l.c], lt[Z] = y.x, lt[Z + 1] = y.y, lt[Z + 2] = y.z, lt[Z + 3] = x.x, lt[Z + 4] = x.y, lt[Z + 5] = x.z, lt[Z + 6] = b.x, lt[Z + 7] = b.y, lt[Z + 8] = b.z, Z += 9;
                            Vt.bindBuffer(Vt.ARRAY_BUFFER, e.__webglVertexBuffer), Vt.bufferData(Vt.ARRAY_BUFFER, lt, r) }
                        if (Lt)
                            for (G = 0, I = kt.length; I > G; G++) {
                                for (at = 0, a = 0, s = Rt.length; s > a; a++) j = Rt[a], l = Ft[j], y = kt[G].vertices[l.a], x = kt[G].vertices[l.b], b = kt[G].vertices[l.c], H = vt[G], H[at] = y.x, H[at + 1] = y.y, H[at + 2] = y.z, H[at + 3] = x.x, H[at + 4] = x.y, H[at + 5] = x.z, H[at + 6] = b.x, H[at + 7] = b.y, H[at + 8] = b.z, o.morphNormals && (K ? (X = Nt[G].vertexNormals[j], S = X.a, T = X.b, C = X.c) : (S = Nt[G].faceNormals[j], T = S, C = S), W = yt[G], W[at] = S.x, W[at + 1] = S.y, W[at + 2] = S.z, W[at + 3] = T.x, W[at + 4] = T.y, W[at + 5] = T.z, W[at + 6] = C.x, W[at + 7] = C.y, W[at + 8] = C.z), at += 9;
                                Vt.bindBuffer(Vt.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[G]), Vt.bufferData(Vt.ARRAY_BUFFER, vt[G], r), o.morphNormals && (Vt.bindBuffer(Vt.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[G]), Vt.bufferData(Vt.ARRAY_BUFFER, yt[G], r)) }
                        if (zt.length) {
                            for (a = 0, s = Rt.length; s > a; a++) l = Ft[Rt[a]], P = zt[l.a], R = zt[l.b], F = zt[l.c], gt[ot] = P.x, gt[ot + 1] = P.y, gt[ot + 2] = P.z, gt[ot + 3] = P.w, gt[ot + 4] = R.x, gt[ot + 5] = R.y, gt[ot + 6] = R.z, gt[ot + 7] = R.w, gt[ot + 8] = F.x, gt[ot + 9] = F.y, gt[ot + 10] = F.z, gt[ot + 11] = F.w, B = Dt[l.a], U = Dt[l.b], D = Dt[l.c], mt[ot] = B.x, mt[ot + 1] = B.y, mt[ot + 2] = B.z, mt[ot + 3] = B.w, mt[ot + 4] = U.x, mt[ot + 5] = U.y, mt[ot + 6] = U.z, mt[ot + 7] = U.w, mt[ot + 8] = D.x, mt[ot + 9] = D.y, mt[ot + 10] = D.z, mt[ot + 11] = D.w, ot += 12;
                            ot > 0 && (Vt.bindBuffer(Vt.ARRAY_BUFFER, e.__webglSkinIndicesBuffer), Vt.bufferData(Vt.ARRAY_BUFFER, mt, r), Vt.bindBuffer(Vt.ARRAY_BUFFER, e.__webglSkinWeightsBuffer), Vt.bufferData(Vt.ARRAY_BUFFER, gt, r)) }
                        if (At) {
                            for (a = 0, s = Rt.length; s > a; a++) l = Ft[Rt[a]], f = l.vertexColors, d = l.color, 3 === f.length && o.vertexColors === n.VertexColors ? (E = f[0], A = f[1], L = f[2]) : (E = d, A = d, L = d), dt[nt] = E.r, dt[nt + 1] = E.g, dt[nt + 2] = E.b, dt[nt + 3] = A.r, dt[nt + 4] = A.g, dt[nt + 5] = A.b, dt[nt + 6] = L.r, dt[nt + 7] = L.g, dt[nt + 8] = L.b, nt += 9;
                            nt > 0 && (Vt.bindBuffer(Vt.ARRAY_BUFFER, e.__webglColorBuffer), Vt.bufferData(Vt.ARRAY_BUFFER, dt, r)) }
                        if (Et && _t.hasTangents) {
                            for (a = 0, s = Rt.length; s > a; a++) l = Ft[Rt[a]], m = l.vertexTangents, w = m[0], _ = m[1], M = m[2], ft[rt] = w.x, ft[rt + 1] = w.y, ft[rt + 2] = w.z, ft[rt + 3] = w.w, ft[rt + 4] = _.x, ft[rt + 5] = _.y, ft[rt + 6] = _.z, ft[rt + 7] = _.w, ft[rt + 8] = M.x, ft[rt + 9] = M.y, ft[rt + 10] = M.z, ft[rt + 11] = M.w, rt += 12;
                            Vt.bindBuffer(Vt.ARRAY_BUFFER, e.__webglTangentBuffer), Vt.bufferData(Vt.ARRAY_BUFFER, ft, r) }
                        if (Ct) {
                            for (a = 0, s = Rt.length; s > a; a++)
                                if (l = Ft[Rt[a]], u = l.vertexNormals, p = l.normal, 3 === u.length && K)
                                    for (V = 0; 3 > V; V++) k = u[V], pt[tt] = k.x, pt[tt + 1] = k.y, pt[tt + 2] = k.z, tt += 3;
                                else
                                    for (V = 0; 3 > V; V++) pt[tt] = p.x, pt[tt + 1] = p.y, pt[tt + 2] = p.z, tt += 3;
                            Vt.bindBuffer(Vt.ARRAY_BUFFER, e.__webglNormalBuffer), Vt.bufferData(Vt.ARRAY_BUFFER, pt, r) }
                        if (Tt && Bt) {
                            for (a = 0, s = Rt.length; s > a; a++)
                                if (h = Rt[a], g = Bt[h], void 0 !== g)
                                    for (V = 0; 3 > V; V++) N = g[V], ct[J] = N.x, ct[J + 1] = N.y, J += 2;
                            J > 0 && (Vt.bindBuffer(Vt.ARRAY_BUFFER, e.__webglUVBuffer), Vt.bufferData(Vt.ARRAY_BUFFER, ct, r)) }
                        if (Tt && Ut) {
                            for (a = 0, s = Rt.length; s > a; a++)
                                if (h = Rt[a], v = Ut[h], void 0 !== v)
                                    for (V = 0; 3 > V; V++) O = v[V], ut[$] = O.x, ut[$ + 1] = O.y, $ += 2;
                            $ > 0 && (Vt.bindBuffer(Vt.ARRAY_BUFFER, e.__webglUV2Buffer), Vt.bufferData(Vt.ARRAY_BUFFER, ut, r)) }
                        if (St) {
                            for (a = 0, s = Rt.length; s > a; a++) bt[et] = Q, bt[et + 1] = Q + 1, bt[et + 2] = Q + 2, et += 3, wt[it] = Q, wt[it + 1] = Q + 1, wt[it + 2] = Q, wt[it + 3] = Q + 2, wt[it + 4] = Q + 1, wt[it + 5] = Q + 2, it += 6, Q += 3;
                            Vt.bindBuffer(Vt.ELEMENT_ARRAY_BUFFER, e.__webglFaceBuffer), Vt.bufferData(Vt.ELEMENT_ARRAY_BUFFER, bt, r), Vt.bindBuffer(Vt.ELEMENT_ARRAY_BUFFER, e.__webglLineBuffer), Vt.bufferData(Vt.ELEMENT_ARRAY_BUFFER, wt, r) }
                        if (xt)
                            for (V = 0, z = xt.length; z > V; V++)
                                if (Y = xt[V], Y.__original.needsUpdate) {
                                    if (st = 0, ht = 0, 1 === Y.size) {
                                        if (void 0 === Y.boundTo || "vertices" === Y.boundTo)
                                            for (a = 0, s = Rt.length; s > a; a++) l = Ft[Rt[a]], Y.array[st] = Y.value[l.a], Y.array[st + 1] = Y.value[l.b], Y.array[st + 2] = Y.value[l.c], st += 3;
                                        else if ("faces" === Y.boundTo)
                                            for (a = 0, s = Rt.length; s > a; a++) q = Y.value[Rt[a]], Y.array[st] = q, Y.array[st + 1] = q, Y.array[st + 2] = q, st += 3 } else if (2 === Y.size) {
                                        if (void 0 === Y.boundTo || "vertices" === Y.boundTo)
                                            for (a = 0, s = Rt.length; s > a; a++) l = Ft[Rt[a]], y = Y.value[l.a], x = Y.value[l.b], b = Y.value[l.c], Y.array[st] = y.x, Y.array[st + 1] = y.y, Y.array[st + 2] = x.x, Y.array[st + 3] = x.y, Y.array[st + 4] = b.x, Y.array[st + 5] = b.y, st += 6;
                                        else if ("faces" === Y.boundTo)
                                            for (a = 0, s = Rt.length; s > a; a++) q = Y.value[Rt[a]], y = q, x = q, b = q, Y.array[st] = y.x, Y.array[st + 1] = y.y, Y.array[st + 2] = x.x, Y.array[st + 3] = x.y, Y.array[st + 4] = b.x, Y.array[st + 5] = b.y, st += 6 } else if (3 === Y.size) {
                                        var Ot;
                                        if (Ot = "c" === Y.type ? ["r", "g", "b"] : ["x", "y", "z"], void 0 === Y.boundTo || "vertices" === Y.boundTo)
                                            for (a = 0, s = Rt.length; s > a; a++) l = Ft[Rt[a]], y = Y.value[l.a], x = Y.value[l.b], b = Y.value[l.c], Y.array[st] = y[Ot[0]], Y.array[st + 1] = y[Ot[1]], Y.array[st + 2] = y[Ot[2]], Y.array[st + 3] = x[Ot[0]], Y.array[st + 4] = x[Ot[1]], Y.array[st + 5] = x[Ot[2]], Y.array[st + 6] = b[Ot[0]], Y.array[st + 7] = b[Ot[1]], Y.array[st + 8] = b[Ot[2]], st += 9;
                                        else if ("faces" === Y.boundTo)
                                            for (a = 0, s = Rt.length; s > a; a++) q = Y.value[Rt[a]], y = q, x = q, b = q, Y.array[st] = y[Ot[0]], Y.array[st + 1] = y[Ot[1]], Y.array[st + 2] = y[Ot[2]], Y.array[st + 3] = x[Ot[0]], Y.array[st + 4] = x[Ot[1]], Y.array[st + 5] = x[Ot[2]], Y.array[st + 6] = b[Ot[0]], Y.array[st + 7] = b[Ot[1]], Y.array[st + 8] = b[Ot[2]], st += 9;
                                        else if ("faceVertices" === Y.boundTo)
                                            for (a = 0, s = Rt.length; s > a; a++) q = Y.value[Rt[a]], y = q[0], x = q[1], b = q[2], Y.array[st] = y[Ot[0]], Y.array[st + 1] = y[Ot[1]], Y.array[st + 2] = y[Ot[2]], Y.array[st + 3] = x[Ot[0]], Y.array[st + 4] = x[Ot[1]], Y.array[st + 5] = x[Ot[2]], Y.array[st + 6] = b[Ot[0]], Y.array[st + 7] = b[Ot[1]], Y.array[st + 8] = b[Ot[2]], st += 9 } else if (4 === Y.size)
                                        if (void 0 === Y.boundTo || "vertices" === Y.boundTo)
                                            for (a = 0, s = Rt.length; s > a; a++) l = Ft[Rt[a]], y = Y.value[l.a], x = Y.value[l.b], b = Y.value[l.c], Y.array[st] = y.x, Y.array[st + 1] = y.y, Y.array[st + 2] = y.z, Y.array[st + 3] = y.w, Y.array[st + 4] = x.x, Y.array[st + 5] = x.y, Y.array[st + 6] = x.z, Y.array[st + 7] = x.w, Y.array[st + 8] = b.x, Y.array[st + 9] = b.y, Y.array[st + 10] = b.z, Y.array[st + 11] = b.w, st += 12;
                                        else if ("faces" === Y.boundTo)
                                        for (a = 0, s = Rt.length; s > a; a++) q = Y.value[Rt[a]], y = q, x = q, b = q, Y.array[st] = y.x, Y.array[st + 1] = y.y, Y.array[st + 2] = y.z, Y.array[st + 3] = y.w, Y.array[st + 4] = x.x, Y.array[st + 5] = x.y, Y.array[st + 6] = x.z, Y.array[st + 7] = x.w, Y.array[st + 8] = b.x, Y.array[st + 9] = b.y, Y.array[st + 10] = b.z, Y.array[st + 11] = b.w, st += 12;
                                    else if ("faceVertices" === Y.boundTo)
                                        for (a = 0, s = Rt.length; s > a; a++) q = Y.value[Rt[a]], y = q[0], x = q[1], b = q[2], Y.array[st] = y.x, Y.array[st + 1] = y.y, Y.array[st + 2] = y.z, Y.array[st + 3] = y.w, Y.array[st + 4] = x.x, Y.array[st + 5] = x.y, Y.array[st + 6] = x.z, Y.array[st + 7] = x.w, Y.array[st + 8] = b.x, Y.array[st + 9] = b.y, Y.array[st + 10] = b.z, Y.array[st + 11] = b.w, st += 12;
                                    Vt.bindBuffer(Vt.ARRAY_BUFFER, Y.buffer), Vt.bufferData(Vt.ARRAY_BUFFER, Y.array, r) }
                        i && (delete e.__inittedArrays, delete e.__colorArray, delete e.__normalArray, delete e.__tangentArray, delete e.__uvArray, delete e.__uv2Array, delete e.__faceArray, delete e.__vertexArray, delete e.__lineArray, delete e.__skinIndexArray, delete e.__skinWeightArray) } }

                function d(e, t, r, i) {
                    for (var n = r.attributes, o = t.attributes, a = t.attributesKeys, s = 0, h = a.length; h > s; s++) {
                        var l = a[s],
                            c = o[l];
                        if (c >= 0) {
                            var u = n[l];
                            if (void 0 !== u) {
                                var p = u.itemSize;
                                Vt.bindBuffer(Vt.ARRAY_BUFFER, u.buffer), g(c), Vt.vertexAttribPointer(c, p, Vt.FLOAT, !1, 0, i * p * 4) } else void 0 !== e.defaultAttributeValues && (2 === e.defaultAttributeValues[l].length ? Vt.vertexAttrib2fv(c, e.defaultAttributeValues[l]) : 3 === e.defaultAttributeValues[l].length && Vt.vertexAttrib3fv(c, e.defaultAttributeValues[l])) } }
                    v() }

                function m() {
                    for (var e = 0, t = lr.length; t > e; e++) lr[e] = 0 }

                function g(e) { lr[e] = 1, 0 === cr[e] && (Vt.enableVertexAttribArray(e), cr[e] = 1) }

                function v() {
                    for (var e = 0, t = cr.length; t > e; e++) cr[e] !== lr[e] && (Vt.disableVertexAttribArray(e), cr[e] = 0) }

                function y(e, t, r) {
                    var i = e.program.attributes;
                    if (-1 !== r.morphTargetBase && i.position >= 0 ? (Vt.bindBuffer(Vt.ARRAY_BUFFER, t.__webglMorphTargetsBuffers[r.morphTargetBase]), g(i.position), Vt.vertexAttribPointer(i.position, 3, Vt.FLOAT, !1, 0, 0)) : i.position >= 0 && (Vt.bindBuffer(Vt.ARRAY_BUFFER, t.__webglVertexBuffer), g(i.position), Vt.vertexAttribPointer(i.position, 3, Vt.FLOAT, !1, 0, 0)), r.morphTargetForcedOrder.length)
                        for (var n, o = 0, a = r.morphTargetForcedOrder, s = r.morphTargetInfluences; o < e.numSupportedMorphTargets && o < a.length;) n = i["morphTarget" + o], n >= 0 && (Vt.bindBuffer(Vt.ARRAY_BUFFER, t.__webglMorphTargetsBuffers[a[o]]), g(n), Vt.vertexAttribPointer(n, 3, Vt.FLOAT, !1, 0, 0)), n = i["morphNormal" + o], n >= 0 && e.morphNormals && (Vt.bindBuffer(Vt.ARRAY_BUFFER, t.__webglMorphNormalsBuffers[a[o]]), g(n), Vt.vertexAttribPointer(n, 3, Vt.FLOAT, !1, 0, 0)), r.__webglMorphTargetInfluences[o] = s[a[o]], o++;
                    else {
                        for (var h = [], s = r.morphTargetInfluences, l = 0, c = s.length; c > l; l++) {
                            var u = s[l];
                            h.push([u, l]) }
                        h.length > e.numSupportedMorphTargets ? (h.sort(w), h.length = e.numSupportedMorphTargets) : h.length > e.numSupportedMorphNormals ? h.sort(w) : 0 === h.length && h.push([0, 0]);
                        for (var n, o = 0, p = e.numSupportedMorphTargets; p > o; o++)
                            if (h[o]) {
                                var f = h[o][1];
                                n = i["morphTarget" + o], n >= 0 && (Vt.bindBuffer(Vt.ARRAY_BUFFER, t.__webglMorphTargetsBuffers[f]), g(n), Vt.vertexAttribPointer(n, 3, Vt.FLOAT, !1, 0, 0)), n = i["morphNormal" + o], n >= 0 && e.morphNormals && (Vt.bindBuffer(Vt.ARRAY_BUFFER, t.__webglMorphNormalsBuffers[f]), g(n), Vt.vertexAttribPointer(n, 3, Vt.FLOAT, !1, 0, 0)), r.__webglMorphTargetInfluences[o] = s[f] } else r.__webglMorphTargetInfluences[o] = 0 }
                    null !== e.program.uniforms.morphTargetInfluences && Vt.uniform1fv(e.program.uniforms.morphTargetInfluences, r.__webglMorphTargetInfluences) }

                function x(e, t) {
                    return e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id }

                function b(e, t) {
                    return e.z !== t.z ? t.z - e.z : e.id - t.id }

                function w(e, t) {
                    return t[0] - e[0] }

                function _(e) {
                    if (e.visible !== !1) {
                        if (e instanceof n.Scene || e instanceof n.Group);
                        else if (E(e), e instanceof n.Light) Lt.push(e);
                        else if (e instanceof n.Sprite) Ut.push(e);
                        else if (e instanceof n.LensFlare) Dt.push(e);
                        else {
                            var t = Pt[e.id];
                            if (t && (e.frustumCulled === !1 || ur.intersectsObject(e) === !0))
                                for (var r = 0, i = t.length; i > r; r++) {
                                    var o = t[r];
                                    C(o), o.render = !0, zt.sortObjects === !0 && (fr.setFromMatrixPosition(e.matrixWorld), fr.applyProjection(pr), o.z = fr.z) } }
                        for (var r = 0, i = e.children.length; i > r; r++) _(e.children[r]) } }

                function M(e, t, r, i, o, a) {
                    for (var s, h = 0, l = e.length; l > h; h++) {
                        var c = e[h],
                            u = c.object,
                            p = c.buffer;
                        if (J(u, t), a) s = a;
                        else {
                            if (s = c.material, !s) continue;
                            o && zt.setBlending(s.blending, s.blendEquation, s.blendSrc, s.blendDst), zt.setDepthTest(s.depthTest), zt.setDepthWrite(s.depthWrite), it(s.polygonOffset, s.polygonOffsetFactor, s.polygonOffsetUnits) }
                        zt.setMaterialFaces(s), p instanceof n.BufferGeometry ? zt.renderBufferDirect(t, r, i, s, p, u) : zt.renderBuffer(t, r, i, s, p, u) } }

                function S(e, t, r, i, n, o, a) {
                    for (var s, h = 0, l = e.length; l > h; h++) {
                        var c = e[h],
                            u = c.object;
                        if (u.visible) {
                            if (a) s = a;
                            else {
                                if (s = c[t], !s) continue;
                                o && zt.setBlending(s.blending, s.blendEquation, s.blendSrc, s.blendDst), zt.setDepthTest(s.depthTest), zt.setDepthWrite(s.depthWrite), it(s.polygonOffset, s.polygonOffsetFactor, s.polygonOffsetUnits) }
                            zt.renderImmediateObject(r, i, n, s, u) }
                    }
                }

                function T(e) {
                    var t = e.object,
                        r = t.material;
                    r.transparent ? (e.transparent = r, e.opaque = null) : (e.opaque = r, e.transparent = null) }

                function C(e) {
                    var t = e.object,
                        r = e.buffer,
                        i = t.geometry,
                        o = t.material;
                    if (o instanceof n.MeshFaceMaterial) {
                        var a = i instanceof n.BufferGeometry ? 0 : r.materialIndex;
                        o = o.materials[a], e.material = o, o.transparent ? Bt.push(e) : Ft.push(e) } else o && (e.material = o, o.transparent ? Bt.push(e) : Ft.push(e)) }

                function E(e) { void 0 === e.__webglInit && (e.__webglInit = !0, e._modelViewMatrix = new n.Matrix4, e._normalMatrix = new n.Matrix3, e.addEventListener("removed", kr));
                    var i = e.geometry;
                    if (void 0 === i || void 0 === i.__webglInit && (i.__webglInit = !0, i.addEventListener("dispose", Nr), i instanceof n.BufferGeometry ? zt.info.memory.geometries++ : e instanceof n.Mesh ? L(e, i) : e instanceof n.Line ? void 0 === i.__webglVertexBuffer && (r(i), s(i, e), i.verticesNeedUpdate = !0, i.colorsNeedUpdate = !0, i.lineDistancesNeedUpdate = !0) : e instanceof n.PointCloud && void 0 === i.__webglVertexBuffer && (t(i), a(i, e), i.verticesNeedUpdate = !0, i.colorsNeedUpdate = !0)), void 0 === e.__webglActive)
                        if (e.__webglActive = !0, e instanceof n.Mesh) {
                            if (i instanceof n.BufferGeometry) P(Pt, i, e);
                            else if (i instanceof n.Geometry)
                                for (var o = Yr[i.id], h = 0, l = o.length; l > h; h++) P(Pt, o[h], e) } else e instanceof n.Line || e instanceof n.PointCloud ? P(Pt, i, e) : (e instanceof n.ImmediateRenderObject || e.immediateRenderCallback) && R(Rt, e) }

                function A(e, t) {
                    for (var r, i, n = xr.get("OES_element_index_uint") ? 4294967296 : 65535, o = {}, a = e.morphTargets.length, s = e.morphNormals.length, h = {}, l = [], c = 0, u = e.faces.length; u > c; c++) {
                        var p = e.faces[c],
                            f = t ? p.materialIndex : 0;
                        f in o || (o[f] = { hash: f, counter: 0 }), r = o[f].hash + "_" + o[f].counter, r in h || (i = { id: Kr++, faces3: [], materialIndex: f, vertices: 0, numMorphTargets: a, numMorphNormals: s }, h[r] = i, l.push(i)), h[r].vertices + 3 > n && (o[f].counter += 1, r = o[f].hash + "_" + o[f].counter, r in h || (i = { id: Kr++, faces3: [], materialIndex: f, vertices: 0, numMorphTargets: a, numMorphNormals: s }, h[r] = i, l.push(i))), h[r].faces3.push(c), h[r].vertices += 3 }
                    return l }

                function L(e, t) {
                    var r = e.material,
                        o = !1;
                    (void 0 === Yr[t.id] || t.groupsNeedUpdate === !0) && (delete Pt[e.id], Yr[t.id] = A(t, r instanceof n.MeshFaceMaterial), t.groupsNeedUpdate = !1);
                    for (var a = Yr[t.id], s = 0, l = a.length; l > s; s++) {
                        var c = a[s];
                        void 0 === c.__webglVertexBuffer ? (i(c), h(c, e), t.verticesNeedUpdate = !0, t.morphTargetsNeedUpdate = !0, t.elementsNeedUpdate = !0, t.uvsNeedUpdate = !0, t.normalsNeedUpdate = !0, t.tangentsNeedUpdate = !0, t.colorsNeedUpdate = !0, o = !0) : o = !1, (o || void 0 === e.__webglActive) && P(Pt, c, e) }
                    e.__webglActive = !0 }

                function P(e, t, r) {
                    var i = r.id;
                    e[i] = e[i] || [], e[i].push({ id: i, buffer: t, object: r, material: null, z: 0 }) }

                function R(e, t) { e.push({ id: null, object: t, opaque: null, transparent: null, z: 0 }) }

                function F(e) {
                    var t = e.geometry;
                    if (t instanceof n.BufferGeometry)
                        for (var r = t.attributes, i = t.attributesKeys, o = 0, a = i.length; a > o; o++) {
                            var s = i[o],
                                c = r[s];
                            if (void 0 === c.buffer && (c.buffer = Vt.createBuffer(), c.needsUpdate = !0), c.needsUpdate === !0) {
                                var d = "index" === s ? Vt.ELEMENT_ARRAY_BUFFER : Vt.ARRAY_BUFFER;
                                Vt.bindBuffer(d, c.buffer), Vt.bufferData(d, c.array, Vt.STATIC_DRAW), c.needsUpdate = !1 } } else if (e instanceof n.Mesh) { t.groupsNeedUpdate === !0 && L(e, t);
                            for (var m = Yr[t.id], o = 0, g = m.length; g > o; o++) {
                                var v = m[o],
                                    y = l(e, v);
                                t.groupsNeedUpdate === !0 && h(v, e);
                                var x = y.attributes && B(y);
                                (t.verticesNeedUpdate || t.morphTargetsNeedUpdate || t.elementsNeedUpdate || t.uvsNeedUpdate || t.normalsNeedUpdate || t.colorsNeedUpdate || t.tangentsNeedUpdate || x) && f(v, e, Vt.DYNAMIC_DRAW, !t.dynamic, y) }
                            t.verticesNeedUpdate = !1, t.morphTargetsNeedUpdate = !1, t.elementsNeedUpdate = !1, t.uvsNeedUpdate = !1, t.normalsNeedUpdate = !1, t.colorsNeedUpdate = !1, t.tangentsNeedUpdate = !1, y.attributes && U(y) } else if (e instanceof n.Line) {
                        var y = l(e, t),
                            x = y.attributes && B(y);
                        (t.verticesNeedUpdate || t.colorsNeedUpdate || t.lineDistancesNeedUpdate || x) && p(t, Vt.DYNAMIC_DRAW), t.verticesNeedUpdate = !1, t.colorsNeedUpdate = !1, t.lineDistancesNeedUpdate = !1, y.attributes && U(y) } else if (e instanceof n.PointCloud) {
                        var y = l(e, t),
                            x = y.attributes && B(y);
                        (t.verticesNeedUpdate || t.colorsNeedUpdate || x) && u(t, Vt.DYNAMIC_DRAW, e), t.verticesNeedUpdate = !1, t.colorsNeedUpdate = !1, y.attributes && U(y) } }

                function B(e) {
                    for (var t in e.attributes)
                        if (e.attributes[t].needsUpdate) return !0;
                    return !1 }

                function U(e) {
                    for (var t in e.attributes) e.attributes[t].needsUpdate = !1 }

                function D(e) { e instanceof n.Mesh || e instanceof n.PointCloud || e instanceof n.Line ? delete Pt[e.id] : (e instanceof n.ImmediateRenderObject || e.immediateRenderCallback) && V(Rt, e), delete e.__webglInit, delete e._modelViewMatrix, delete e._normalMatrix, delete e.__webglActive }

                function V(e, t) {
                    for (var r = e.length - 1; r >= 0; r--) e[r].object === t && e.splice(r, 1) }

                function z(e, t, r, i) { e.addEventListener("dispose", Ir);
                    var o = Qr[e.type];
                    if (o) {
                        var a = n.ShaderLib[o];
                        e.__webglShader = { uniforms: n.UniformsUtils.clone(a.uniforms), vertexShader: a.vertexShader, fragmentShader: a.fragmentShader } } else e.__webglShader = { uniforms: e.uniforms, vertexShader: e.vertexShader, fragmentShader: e.fragmentShader };
                    var s = dt(t),
                        h = mt(t),
                        l = ft(i),
                        c = { precision: xt, supportsVertexTextures: Cr, map: !!e.map, envMap: !!e.envMap, envMapMode: e.envMap && e.envMap.mapping, lightMap: !!e.lightMap, bumpMap: !!e.bumpMap, normalMap: !!e.normalMap, specularMap: !!e.specularMap, alphaMap: !!e.alphaMap, combine: e.combine, vertexColors: e.vertexColors, fog: r, useFog: e.fog, fogExp: r instanceof n.FogExp2, sizeAttenuation: e.sizeAttenuation, logarithmicDepthBuffer: Ct, skinning: e.skinning, maxBones: l, useVertexTexture: Er && i && i.skeleton && i.skeleton.useVertexTexture, morphTargets: e.morphTargets, morphNormals: e.morphNormals, maxMorphTargets: zt.maxMorphTargets, maxMorphNormals: zt.maxMorphNormals, maxDirLights: s.directional, maxPointLights: s.point, maxSpotLights: s.spot, maxHemiLights: s.hemi, maxShadows: h, shadowMapEnabled: zt.shadowMapEnabled && i.receiveShadow && h > 0, shadowMapType: zt.shadowMapType, shadowMapDebug: zt.shadowMapDebug, shadowMapCascade: zt.shadowMapCascade, alphaTest: e.alphaTest, metal: e.metal, wrapAround: e.wrapAround, doubleSided: e.side === n.DoubleSide, flipSided: e.side === n.BackSide },
                        u = [];
                    if (o ? u.push(o) : (u.push(e.fragmentShader), u.push(e.vertexShader)), void 0 !== e.defines)
                        for (var p in e.defines) u.push(p), u.push(e.defines[p]);
                    for (var p in c) u.push(p), u.push(c[p]);
                    for (var f, d = u.join(), m = 0, g = kt.length; g > m; m++) {
                        var v = kt[m];
                        if (v.code === d) { f = v, f.usedTimes++;
                            break } }
                    void 0 === f && (f = new n.WebGLProgram(zt, d, e, c), kt.push(f), zt.info.memory.programs = kt.length), e.program = f;
                    var y = f.attributes;
                    if (e.morphTargets) { e.numSupportedMorphTargets = 0;
                        for (var x, b = "morphTarget", w = 0; w < zt.maxMorphTargets; w++) x = b + w, y[x] >= 0 && e.numSupportedMorphTargets++ }
                    if (e.morphNormals) { e.numSupportedMorphNormals = 0;
                        var x, b = "morphNormal";
                        for (w = 0; w < zt.maxMorphNormals; w++) x = b + w, y[x] >= 0 && e.numSupportedMorphNormals++ }
                    e.uniformsList = [];
                    for (var _ in e.__webglShader.uniforms) {
                        var M = e.program.uniforms[_];
                        M && e.uniformsList.push([e.__webglShader.uniforms[_], M]) } }

                function k(e, t, r, i, o) { Wt = 0, i.needsUpdate && (i.program && qr(i), z(i, t, r, o), i.needsUpdate = !1), i.morphTargets && (o.__webglMorphTargetInfluences || (o.__webglMorphTargetInfluences = new Float32Array(zt.maxMorphTargets)));
                    var a = !1,
                        s = !1,
                        h = !1,
                        l = i.program,
                        c = l.uniforms,
                        u = i.__webglShader.uniforms;
                    if (l.id !== Nt && (Vt.useProgram(l.program), Nt = l.id, a = !0, s = !0, h = !0), i.id !== Gt && (-1 === Gt && (h = !0), Gt = i.id, s = !0), (a || e !== Ht) && (Vt.uniformMatrix4fv(c.projectionMatrix, !1, e.projectionMatrix.elements), Ct && Vt.uniform1f(c.logDepthBufFC, 2 / (Math.log(e.far + 1) / Math.LN2)), e !== Ht && (Ht = e), (i instanceof n.ShaderMaterial || i instanceof n.MeshPhongMaterial || i.envMap) && null !== c.cameraPosition && (fr.setFromMatrixPosition(e.matrixWorld), Vt.uniform3f(c.cameraPosition, fr.x, fr.y, fr.z)), (i instanceof n.MeshPhongMaterial || i instanceof n.MeshLambertMaterial || i instanceof n.MeshBasicMaterial || i instanceof n.ShaderMaterial || i.skinning) && null !== c.viewMatrix && Vt.uniformMatrix4fv(c.viewMatrix, !1, e.matrixWorldInverse.elements)), i.skinning)
                        if (o.bindMatrix && null !== c.bindMatrix && Vt.uniformMatrix4fv(c.bindMatrix, !1, o.bindMatrix.elements), o.bindMatrixInverse && null !== c.bindMatrixInverse && Vt.uniformMatrix4fv(c.bindMatrixInverse, !1, o.bindMatrixInverse.elements), Er && o.skeleton && o.skeleton.useVertexTexture) {
                            if (null !== c.boneTexture) {
                                var p = Q();
                                Vt.uniform1i(c.boneTexture, p), zt.setTexture(o.skeleton.boneTexture, p) }
                            null !== c.boneTextureWidth && Vt.uniform1i(c.boneTextureWidth, o.skeleton.boneTextureWidth), null !== c.boneTextureHeight && Vt.uniform1i(c.boneTextureHeight, o.skeleton.boneTextureHeight) } else o.skeleton && o.skeleton.boneMatrices && null !== c.boneGlobalMatrices && Vt.uniformMatrix4fv(c.boneGlobalMatrices, !1, o.skeleton.boneMatrices);
                    return s && (r && i.fog && H(u, r), (i instanceof n.MeshPhongMaterial || i instanceof n.MeshLambertMaterial || i.lights) && (mr && (h = !0, tt(t), mr = !1), h ? (X(u, gr), q(u, !0)) : q(u, !1)), (i instanceof n.MeshBasicMaterial || i instanceof n.MeshLambertMaterial || i instanceof n.MeshPhongMaterial) && N(u, i), i instanceof n.LineBasicMaterial ? O(u, i) : i instanceof n.LineDashedMaterial ? (O(u, i), G(u, i)) : i instanceof n.PointCloudMaterial ? I(u, i) : i instanceof n.MeshPhongMaterial ? W(u, i) : i instanceof n.MeshLambertMaterial ? j(u, i) : i instanceof n.MeshDepthMaterial ? (u.mNear.value = e.near, u.mFar.value = e.far, u.opacity.value = i.opacity) : i instanceof n.MeshNormalMaterial && (u.opacity.value = i.opacity), o.receiveShadow && !i._shadowPass && Y(u, t), Z(i.uniformsList)), K(c, o), null !== c.modelMatrix && Vt.uniformMatrix4fv(c.modelMatrix, !1, o.matrixWorld.elements), l }

                function N(e, t) { e.opacity.value = t.opacity, zt.gammaInput ? e.diffuse.value.copyGammaToLinear(t.color) : e.diffuse.value = t.color, e.map.value = t.map, e.lightMap.value = t.lightMap, e.specularMap.value = t.specularMap, e.alphaMap.value = t.alphaMap, t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale));
                    var r;
                    if (t.map ? r = t.map : t.specularMap ? r = t.specularMap : t.normalMap ? r = t.normalMap : t.bumpMap ? r = t.bumpMap : t.alphaMap && (r = t.alphaMap), void 0 !== r) {
                        var i = r.offset,
                            o = r.repeat;
                        e.offsetRepeat.value.set(i.x, i.y, o.x, o.y) }
                    e.envMap.value = t.envMap, e.flipEnvMap.value = t.envMap instanceof n.WebGLRenderTargetCube ? 1 : -1, e.reflectivity.value = zt.gammaInput ? t.reflectivity : t.reflectivity, e.refractionRatio.value = t.refractionRatio }

                function O(e, t) { e.diffuse.value = t.color, e.opacity.value = t.opacity }

                function G(e, t) { e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale }

                function I(e, t) { e.psColor.value = t.color, e.opacity.value = t.opacity, e.size.value = t.size, e.scale.value = gt.height / 2, e.map.value = t.map }

                function H(e, t) { e.fogColor.value = t.color, t instanceof n.Fog ? (e.fogNear.value = t.near, e.fogFar.value = t.far) : t instanceof n.FogExp2 && (e.fogDensity.value = t.density) }

                function W(e, t) { e.shininess.value = t.shininess, zt.gammaInput ? (e.ambient.value.copyGammaToLinear(t.ambient), e.emissive.value.copyGammaToLinear(t.emissive), e.specular.value.copyGammaToLinear(t.specular)) : (e.ambient.value = t.ambient, e.emissive.value = t.emissive, e.specular.value = t.specular), t.wrapAround && e.wrapRGB.value.copy(t.wrapRGB) }

                function j(e, t) { zt.gammaInput ? (e.ambient.value.copyGammaToLinear(t.ambient), e.emissive.value.copyGammaToLinear(t.emissive)) : (e.ambient.value = t.ambient, e.emissive.value = t.emissive), t.wrapAround && e.wrapRGB.value.copy(t.wrapRGB) }

                function X(e, t) { e.ambientLightColor.value = t.ambient, e.directionalLightColor.value = t.directional.colors, e.directionalLightDirection.value = t.directional.positions, e.pointLightColor.value = t.point.colors, e.pointLightPosition.value = t.point.positions, e.pointLightDistance.value = t.point.distances, e.spotLightColor.value = t.spot.colors, e.spotLightPosition.value = t.spot.positions, e.spotLightDistance.value = t.spot.distances, e.spotLightDirection.value = t.spot.directions, e.spotLightAngleCos.value = t.spot.anglesCos, e.spotLightExponent.value = t.spot.exponents, e.hemisphereLightSkyColor.value = t.hemi.skyColors, e.hemisphereLightGroundColor.value = t.hemi.groundColors, e.hemisphereLightDirection.value = t.hemi.positions }

                function q(e, t) { e.ambientLightColor.needsUpdate = t, e.directionalLightColor.needsUpdate = t, e.directionalLightDirection.needsUpdate = t, e.pointLightColor.needsUpdate = t, e.pointLightPosition.needsUpdate = t, e.pointLightDistance.needsUpdate = t, e.spotLightColor.needsUpdate = t, e.spotLightPosition.needsUpdate = t, e.spotLightDistance.needsUpdate = t, e.spotLightDirection.needsUpdate = t, e.spotLightAngleCos.needsUpdate = t, e.spotLightExponent.needsUpdate = t, e.hemisphereLightSkyColor.needsUpdate = t, e.hemisphereLightGroundColor.needsUpdate = t, e.hemisphereLightDirection.needsUpdate = t }

                function Y(e, t) {
                    if (e.shadowMatrix)
                        for (var r = 0, i = 0, o = t.length; o > i; i++) {
                            var a = t[i];
                            a.castShadow && (a instanceof n.SpotLight || a instanceof n.DirectionalLight && !a.shadowCascade) && (e.shadowMap.value[r] = a.shadowMap, e.shadowMapSize.value[r] = a.shadowMapSize, e.shadowMatrix.value[r] = a.shadowMatrix, e.shadowDarkness.value[r] = a.shadowDarkness, e.shadowBias.value[r] = a.shadowBias, r++) } }

                function K(e, t) { Vt.uniformMatrix4fv(e.modelViewMatrix, !1, t._modelViewMatrix.elements), e.normalMatrix && Vt.uniformMatrix3fv(e.normalMatrix, !1, t._normalMatrix.elements) }

                function Q() {
                    var e = Wt;
                    return e >= _r && console.warn("WebGLRenderer: trying to use " + e + " texture units while this GPU supports only " + _r), Wt += 1, e }

                function Z(e) {
                    for (var t, r, i, o = 0, a = e.length; a > o; o++) {
                        var s = e[o][0];
                        if (s.needsUpdate !== !1) {
                            var h = s.type,
                                l = s.value,
                                c = e[o][1];
                            switch (h) {
                                case "1i":
                                    Vt.uniform1i(c, l);
                                    break;
                                case "1f":
                                    Vt.uniform1f(c, l);
                                    break;
                                case "2f":
                                    Vt.uniform2f(c, l[0], l[1]);
                                    break;
                                case "3f":
                                    Vt.uniform3f(c, l[0], l[1], l[2]);
                                    break;
                                case "4f":
                                    Vt.uniform4f(c, l[0], l[1], l[2], l[3]);
                                    break;
                                case "1iv":
                                    Vt.uniform1iv(c, l);
                                    break;
                                case "3iv":
                                    Vt.uniform3iv(c, l);
                                    break;
                                case "1fv":
                                    Vt.uniform1fv(c, l);
                                    break;
                                case "2fv":
                                    Vt.uniform2fv(c, l);
                                    break;
                                case "3fv":
                                    Vt.uniform3fv(c, l);
                                    break;
                                case "4fv":
                                    Vt.uniform4fv(c, l);
                                    break;
                                case "Matrix3fv":
                                    Vt.uniformMatrix3fv(c, !1, l);
                                    break;
                                case "Matrix4fv":
                                    Vt.uniformMatrix4fv(c, !1, l);
                                    break;
                                case "i":
                                    Vt.uniform1i(c, l);
                                    break;
                                case "f":
                                    Vt.uniform1f(c, l);
                                    break;
                                case "v2":
                                    Vt.uniform2f(c, l.x, l.y);
                                    break;
                                case "v3":
                                    Vt.uniform3f(c, l.x, l.y, l.z);
                                    break;
                                case "v4":
                                    Vt.uniform4f(c, l.x, l.y, l.z, l.w);
                                    break;
                                case "c":
                                    Vt.uniform3f(c, l.r, l.g, l.b);
                                    break;
                                case "iv1":
                                    Vt.uniform1iv(c, l);
                                    break;
                                case "iv":
                                    Vt.uniform3iv(c, l);
                                    break;
                                case "fv1":
                                    Vt.uniform1fv(c, l);
                                    break;
                                case "fv":
                                    Vt.uniform3fv(c, l);
                                    break;
                                case "v2v":
                                    void 0 === s._array && (s._array = new Float32Array(2 * l.length));
                                    for (var u = 0, p = l.length; p > u; u++) i = 2 * u, s._array[i] = l[u].x, s._array[i + 1] = l[u].y;
                                    Vt.uniform2fv(c, s._array);
                                    break;
                                case "v3v":
                                    void 0 === s._array && (s._array = new Float32Array(3 * l.length));
                                    for (var u = 0, p = l.length; p > u; u++) i = 3 * u, s._array[i] = l[u].x, s._array[i + 1] = l[u].y, s._array[i + 2] = l[u].z;
                                    Vt.uniform3fv(c, s._array);
                                    break;
                                case "v4v":
                                    void 0 === s._array && (s._array = new Float32Array(4 * l.length));
                                    for (var u = 0, p = l.length; p > u; u++) i = 4 * u, s._array[i] = l[u].x, s._array[i + 1] = l[u].y, s._array[i + 2] = l[u].z, s._array[i + 3] = l[u].w;
                                    Vt.uniform4fv(c, s._array);
                                    break;
                                case "m3":
                                    Vt.uniformMatrix3fv(c, !1, l.elements);
                                    break;
                                case "m3v":
                                    void 0 === s._array && (s._array = new Float32Array(9 * l.length));
                                    for (var u = 0, p = l.length; p > u; u++) l[u].flattenToArrayOffset(s._array, 9 * u);
                                    Vt.uniformMatrix3fv(c, !1, s._array);
                                    break;
                                case "m4":
                                    Vt.uniformMatrix4fv(c, !1, l.elements);
                                    break;
                                case "m4v":
                                    void 0 === s._array && (s._array = new Float32Array(16 * l.length));
                                    for (var u = 0, p = l.length; p > u; u++) l[u].flattenToArrayOffset(s._array, 16 * u);
                                    Vt.uniformMatrix4fv(c, !1, s._array);
                                    break;
                                case "t":
                                    if (t = l, r = Q(), Vt.uniform1i(c, r), !t) continue;
                                    t instanceof n.CubeTexture || t.image instanceof Array && 6 === t.image.length ? at(t, r) : t instanceof n.WebGLRenderTargetCube ? st(t, r) : zt.setTexture(t, r);
                                    break;
                                case "tv":
                                    void 0 === s._array && (s._array = []);
                                    for (var u = 0, p = s.value.length; p > u; u++) s._array[u] = Q();
                                    Vt.uniform1iv(c, s._array);
                                    for (var u = 0, p = s.value.length; p > u; u++) t = s.value[u], r = s._array[u], t && zt.setTexture(t, r);
                                    break;
                                default:
                                    console.warn("THREE.WebGLRenderer: Unknown uniform type: " + h) } } } }

                function J(e, t) { e._modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, e.matrixWorld), e._normalMatrix.getNormalMatrix(e._modelViewMatrix) }

                function $(e, t, r, i) { e[t] = r.r * r.r * i, e[t + 1] = r.g * r.g * i, e[t + 2] = r.b * r.b * i }

                function et(e, t, r, i) { e[t] = r.r * i, e[t + 1] = r.g * i, e[t + 2] = r.b * i }

                function tt(e) {
                    var t, r, i, o, a, s, h, l, c, u = 0,
                        p = 0,
                        f = 0,
                        d = gr,
                        m = d.directional.colors,
                        g = d.directional.positions,
                        v = d.point.colors,
                        y = d.point.positions,
                        x = d.point.distances,
                        b = d.spot.colors,
                        w = d.spot.positions,
                        _ = d.spot.distances,
                        M = d.spot.directions,
                        S = d.spot.anglesCos,
                        T = d.spot.exponents,
                        C = d.hemi.skyColors,
                        E = d.hemi.groundColors,
                        A = d.hemi.positions,
                        L = 0,
                        P = 0,
                        R = 0,
                        F = 0,
                        B = 0,
                        U = 0,
                        D = 0,
                        V = 0,
                        z = 0,
                        k = 0,
                        N = 0,
                        O = 0;
                    for (t = 0, r = e.length; r > t; t++)
                        if (i = e[t], !i.onlyShadow)
                            if (o = i.color, h = i.intensity, c = i.distance, i instanceof n.AmbientLight) {
                                if (!i.visible) continue;
                                zt.gammaInput ? (u += o.r * o.r, p += o.g * o.g, f += o.b * o.b) : (u += o.r, p += o.g, f += o.b) } else if (i instanceof n.DirectionalLight) {
                        if (B += 1, !i.visible) continue;
                        dr.setFromMatrixPosition(i.matrixWorld), fr.setFromMatrixPosition(i.target.matrixWorld), dr.sub(fr), dr.normalize(), z = 3 * L, g[z] = dr.x, g[z + 1] = dr.y, g[z + 2] = dr.z, zt.gammaInput ? $(m, z, o, h * h) : et(m, z, o, h), L += 1 } else if (i instanceof n.PointLight) {
                        if (U += 1, !i.visible) continue;
                        k = 3 * P, zt.gammaInput ? $(v, k, o, h * h) : et(v, k, o, h), fr.setFromMatrixPosition(i.matrixWorld), y[k] = fr.x, y[k + 1] = fr.y, y[k + 2] = fr.z, x[P] = c, P += 1 } else if (i instanceof n.SpotLight) {
                        if (D += 1, !i.visible) continue;
                        N = 3 * R, zt.gammaInput ? $(b, N, o, h * h) : et(b, N, o, h), dr.setFromMatrixPosition(i.matrixWorld), w[N] = dr.x, w[N + 1] = dr.y, w[N + 2] = dr.z, _[R] = c, fr.setFromMatrixPosition(i.target.matrixWorld), dr.sub(fr), dr.normalize(), M[N] = dr.x, M[N + 1] = dr.y, M[N + 2] = dr.z, S[R] = Math.cos(i.angle), T[R] = i.exponent, R += 1 } else if (i instanceof n.HemisphereLight) {
                        if (V += 1, !i.visible) continue;
                        dr.setFromMatrixPosition(i.matrixWorld), dr.normalize(), O = 3 * F, A[O] = dr.x, A[O + 1] = dr.y, A[O + 2] = dr.z, a = i.color, s = i.groundColor, zt.gammaInput ? (l = h * h, $(C, O, a, l), $(E, O, s, l)) : (et(C, O, a, h), et(E, O, s, h)), F += 1 }
                    for (t = 3 * L, r = Math.max(m.length, 3 * B); r > t; t++) m[t] = 0;
                    for (t = 3 * P, r = Math.max(v.length, 3 * U); r > t; t++) v[t] = 0;
                    for (t = 3 * R, r = Math.max(b.length, 3 * D); r > t; t++) b[t] = 0;
                    for (t = 3 * F, r = Math.max(C.length, 3 * V); r > t; t++) C[t] = 0;
                    for (t = 3 * F, r = Math.max(E.length, 3 * V); r > t; t++) E[t] = 0;
                    d.directional.length = L, d.point.length = P, d.spot.length = R, d.hemi.length = F, d.ambient[0] = u, d.ambient[1] = p, d.ambient[2] = f }

                function rt(e) { e *= yt, e !== rr && (Vt.lineWidth(e), rr = e) }

                function it(e, t, r) { $t !== e && (e ? Vt.enable(Vt.POLYGON_OFFSET_FILL) : Vt.disable(Vt.POLYGON_OFFSET_FILL), $t = e), !e || er === t && tr === r || (Vt.polygonOffset(t, r), er = t, tr = r) }

                function nt(e, t, r) {
                    var i;
                    r ? (Vt.texParameteri(e, Vt.TEXTURE_WRAP_S, pt(t.wrapS)), Vt.texParameteri(e, Vt.TEXTURE_WRAP_T, pt(t.wrapT)), Vt.texParameteri(e, Vt.TEXTURE_MAG_FILTER, pt(t.magFilter)), Vt.texParameteri(e, Vt.TEXTURE_MIN_FILTER, pt(t.minFilter))) : (Vt.texParameteri(e, Vt.TEXTURE_WRAP_S, Vt.CLAMP_TO_EDGE), Vt.texParameteri(e, Vt.TEXTURE_WRAP_T, Vt.CLAMP_TO_EDGE), (t.wrapS !== n.ClampToEdgeWrapping || t.wrapT !== n.ClampToEdgeWrapping) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT is set to THREE.ClampToEdgeWrapping. ( " + t.sourceFile + " )"), Vt.texParameteri(e, Vt.TEXTURE_MAG_FILTER, ut(t.magFilter)), Vt.texParameteri(e, Vt.TEXTURE_MIN_FILTER, ut(t.minFilter)), t.minFilter !== n.NearestFilter && t.minFilter !== n.LinearFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter is set to THREE.LinearFilter or THREE.NearestFilter. ( " + t.sourceFile + " )")), i = xr.get("EXT_texture_filter_anisotropic"), i && t.type !== n.FloatType && (t.anisotropy > 1 || t.__oldAnisotropy) && (Vt.texParameterf(e, i.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(t.anisotropy, zt.getMaxAnisotropy())), t.__oldAnisotropy = t.anisotropy) }

                function ot(e, t) {
                    if (e.width > t || e.height > t) {
                        var r = t / Math.max(e.width, e.height),
                            i = document.createElement("canvas");
                        i.width = Math.floor(e.width * r), i.height = Math.floor(e.height * r);
                        var n = i.getContext("2d");
                        return n.drawImage(e, 0, 0, e.width, e.height, 0, 0, i.width, i.height), console.log("THREE.WebGLRenderer:", e, "is too big (" + e.width + "x" + e.height + "). Resized to " + i.width + "x" + i.height + "."), i }
                    return e }

                function at(e, t) {
                    if (6 === e.image.length)
                        if (e.needsUpdate) { e.image.__webglTextureCube || (e.addEventListener("dispose", Or), e.image.__webglTextureCube = Vt.createTexture(), zt.info.memory.textures++), Vt.activeTexture(Vt.TEXTURE0 + t), Vt.bindTexture(Vt.TEXTURE_CUBE_MAP, e.image.__webglTextureCube), Vt.pixelStorei(Vt.UNPACK_FLIP_Y_WEBGL, e.flipY);
                            for (var r = e instanceof n.CompressedTexture, i = e.image[0] instanceof n.DataTexture, o = [], a = 0; 6 > a; a++) o[a] = !zt.autoScaleCubemaps || r || i ? i ? e.image[a].image : e.image[a] : ot(e.image[a], Tr);
                            var s = o[0],
                                h = n.Math.isPowerOfTwo(s.width) && n.Math.isPowerOfTwo(s.height),
                                l = pt(e.format),
                                c = pt(e.type);
                            nt(Vt.TEXTURE_CUBE_MAP, e, h);
                            for (var a = 0; 6 > a; a++)
                                if (r)
                                    for (var u, p = o[a].mipmaps, f = 0, d = p.length; d > f; f++) u = p[f], e.format !== n.RGBAFormat && e.format !== n.RGBFormat ? Fr().indexOf(l) > -1 ? Vt.compressedTexImage2D(Vt.TEXTURE_CUBE_MAP_POSITIVE_X + a, f, l, u.width, u.height, 0, u.data) : console.warn("Attempt to load unsupported compressed texture format") : Vt.texImage2D(Vt.TEXTURE_CUBE_MAP_POSITIVE_X + a, f, l, u.width, u.height, 0, l, c, u.data);
                                else i ? Vt.texImage2D(Vt.TEXTURE_CUBE_MAP_POSITIVE_X + a, 0, l, o[a].width, o[a].height, 0, l, c, o[a].data) : Vt.texImage2D(Vt.TEXTURE_CUBE_MAP_POSITIVE_X + a, 0, l, l, c, o[a]);
                            e.generateMipmaps && h && Vt.generateMipmap(Vt.TEXTURE_CUBE_MAP), e.needsUpdate = !1, e.onUpdate && e.onUpdate() } else Vt.activeTexture(Vt.TEXTURE0 + t), Vt.bindTexture(Vt.TEXTURE_CUBE_MAP, e.image.__webglTextureCube) }

                function st(e, t) { Vt.activeTexture(Vt.TEXTURE0 + t), Vt.bindTexture(Vt.TEXTURE_CUBE_MAP, e.__webglTexture) }

                function ht(e, t, r) { Vt.bindFramebuffer(Vt.FRAMEBUFFER, e), Vt.framebufferTexture2D(Vt.FRAMEBUFFER, Vt.COLOR_ATTACHMENT0, r, t.__webglTexture, 0) }

                function lt(e, t) { Vt.bindRenderbuffer(Vt.RENDERBUFFER, e), t.depthBuffer && !t.stencilBuffer ? (Vt.renderbufferStorage(Vt.RENDERBUFFER, Vt.DEPTH_COMPONENT16, t.width, t.height), Vt.framebufferRenderbuffer(Vt.FRAMEBUFFER, Vt.DEPTH_ATTACHMENT, Vt.RENDERBUFFER, e)) : t.depthBuffer && t.stencilBuffer ? (Vt.renderbufferStorage(Vt.RENDERBUFFER, Vt.DEPTH_STENCIL, t.width, t.height), Vt.framebufferRenderbuffer(Vt.FRAMEBUFFER, Vt.DEPTH_STENCIL_ATTACHMENT, Vt.RENDERBUFFER, e)) : Vt.renderbufferStorage(Vt.RENDERBUFFER, Vt.RGBA4, t.width, t.height) }

                function ct(e) { e instanceof n.WebGLRenderTargetCube ? (Vt.bindTexture(Vt.TEXTURE_CUBE_MAP, e.__webglTexture), Vt.generateMipmap(Vt.TEXTURE_CUBE_MAP), Vt.bindTexture(Vt.TEXTURE_CUBE_MAP, null)) : (Vt.bindTexture(Vt.TEXTURE_2D, e.__webglTexture), Vt.generateMipmap(Vt.TEXTURE_2D), Vt.bindTexture(Vt.TEXTURE_2D, null)) }

                function ut(e) {
                    return e === n.NearestFilter || e === n.NearestMipMapNearestFilter || e === n.NearestMipMapLinearFilter ? Vt.NEAREST : Vt.LINEAR }

                function pt(e) {
                    var t;
                    if (e === n.RepeatWrapping) return Vt.REPEAT;
                    if (e === n.ClampToEdgeWrapping) return Vt.CLAMP_TO_EDGE;
                    if (e === n.MirroredRepeatWrapping) return Vt.MIRRORED_REPEAT;
                    if (e === n.NearestFilter) return Vt.NEAREST;
                    if (e === n.NearestMipMapNearestFilter) return Vt.NEAREST_MIPMAP_NEAREST;
                    if (e === n.NearestMipMapLinearFilter) return Vt.NEAREST_MIPMAP_LINEAR;
                    if (e === n.LinearFilter) return Vt.LINEAR;
                    if (e === n.LinearMipMapNearestFilter) return Vt.LINEAR_MIPMAP_NEAREST;
                    if (e === n.LinearMipMapLinearFilter) return Vt.LINEAR_MIPMAP_LINEAR;
                    if (e === n.UnsignedByteType) return Vt.UNSIGNED_BYTE;
                    if (e === n.UnsignedShort4444Type) return Vt.UNSIGNED_SHORT_4_4_4_4;
                    if (e === n.UnsignedShort5551Type) return Vt.UNSIGNED_SHORT_5_5_5_1;
                    if (e === n.UnsignedShort565Type) return Vt.UNSIGNED_SHORT_5_6_5;
                    if (e === n.ByteType) return Vt.BYTE;
                    if (e === n.ShortType) return Vt.SHORT;
                    if (e === n.UnsignedShortType) return Vt.UNSIGNED_SHORT;
                    if (e === n.IntType) return Vt.INT;
                    if (e === n.UnsignedIntType) return Vt.UNSIGNED_INT;
                    if (e === n.FloatType) return Vt.FLOAT;
                    if (e === n.AlphaFormat) return Vt.ALPHA;
                    if (e === n.RGBFormat) return Vt.RGB;
                    if (e === n.RGBAFormat) return Vt.RGBA;
                    if (e === n.LuminanceFormat) return Vt.LUMINANCE;
                    if (e === n.LuminanceAlphaFormat) return Vt.LUMINANCE_ALPHA;
                    if (e === n.AddEquation) return Vt.FUNC_ADD;
                    if (e === n.SubtractEquation) return Vt.FUNC_SUBTRACT;
                    if (e === n.ReverseSubtractEquation) return Vt.FUNC_REVERSE_SUBTRACT;
                    if (e === n.ZeroFactor) return Vt.ZERO;
                    if (e === n.OneFactor) return Vt.ONE;
                    if (e === n.SrcColorFactor) return Vt.SRC_COLOR;
                    if (e === n.OneMinusSrcColorFactor) return Vt.ONE_MINUS_SRC_COLOR;
                    if (e === n.SrcAlphaFactor) return Vt.SRC_ALPHA;
                    if (e === n.OneMinusSrcAlphaFactor) return Vt.ONE_MINUS_SRC_ALPHA;
                    if (e === n.DstAlphaFactor) return Vt.DST_ALPHA;
                    if (e === n.OneMinusDstAlphaFactor) return Vt.ONE_MINUS_DST_ALPHA;
                    if (e === n.DstColorFactor) return Vt.DST_COLOR;
                    if (e === n.OneMinusDstColorFactor) return Vt.ONE_MINUS_DST_COLOR;
                    if (e === n.SrcAlphaSaturateFactor) return Vt.SRC_ALPHA_SATURATE;
                    if (t = xr.get("WEBGL_compressed_texture_s3tc"), null !== t) {
                        if (e === n.RGB_S3TC_DXT1_Format) return t.COMPRESSED_RGB_S3TC_DXT1_EXT;
                        if (e === n.RGBA_S3TC_DXT1_Format) return t.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                        if (e === n.RGBA_S3TC_DXT3_Format) return t.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                        if (e === n.RGBA_S3TC_DXT5_Format) return t.COMPRESSED_RGBA_S3TC_DXT5_EXT }
                    if (t = xr.get("WEBGL_compressed_texture_pvrtc"), null !== t) {
                        if (e === n.RGB_PVRTC_4BPPV1_Format) return t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                        if (e === n.RGB_PVRTC_2BPPV1_Format) return t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                        if (e === n.RGBA_PVRTC_4BPPV1_Format) return t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                        if (e === n.RGBA_PVRTC_2BPPV1_Format) return t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG }
                    if (t = xr.get("EXT_blend_minmax"), null !== t) {
                        if (e === n.MinEquation) return t.MIN_EXT;
                        if (e === n.MaxEquation) return t.MAX_EXT }
                    return 0 }

                function ft(e) {
                    if (Er && e && e.skeleton && e.skeleton.useVertexTexture) return 1024;
                    var t = Vt.getParameter(Vt.MAX_VERTEX_UNIFORM_VECTORS),
                        r = Math.floor((t - 20) / 4),
                        i = r;
                    return void 0 !== e && e instanceof n.SkinnedMesh && (i = Math.min(e.skeleton.bones.length, i), i < e.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + e.skeleton.bones.length + ", this GPU supports just " + i + " (try OpenGL instead of ANGLE)")), i }

                function dt(e) {
                    for (var t = 0, r = 0, i = 0, o = 0, a = 0, s = e.length; s > a; a++) {
                        var h = e[a];
                        h.onlyShadow || h.visible === !1 || (h instanceof n.DirectionalLight && t++, h instanceof n.PointLight && r++, h instanceof n.SpotLight && i++, h instanceof n.HemisphereLight && o++) }
                    return { directional: t, point: r, spot: i, hemi: o } }

                function mt(e) {
                    for (var t = 0, r = 0, i = e.length; i > r; r++) {
                        var o = e[r];
                        o.castShadow && (o instanceof n.SpotLight && t++, o instanceof n.DirectionalLight && !o.shadowCascade && t++) }
                    return t }
                console.log("THREE.WebGLRenderer", n.REVISION), e = e || {};
                var gt = void 0 !== e.canvas ? e.canvas : document.createElement("canvas"),
                    vt = void 0 !== e.context ? e.context : null,
                    yt = 1,
                    xt = void 0 !== e.precision ? e.precision : "highp",
                    bt = void 0 !== e.alpha ? e.alpha : !1,
                    wt = void 0 !== e.depth ? e.depth : !0,
                    _t = void 0 !== e.stencil ? e.stencil : !0,
                    Mt = void 0 !== e.antialias ? e.antialias : !1,
                    St = void 0 !== e.premultipliedAlpha ? e.premultipliedAlpha : !0,
                    Tt = void 0 !== e.preserveDrawingBuffer ? e.preserveDrawingBuffer : !1,
                    Ct = void 0 !== e.logarithmicDepthBuffer ? e.logarithmicDepthBuffer : !1,
                    Et = new n.Color(0),
                    At = 0,
                    Lt = [],
                    Pt = {},
                    Rt = [],
                    Ft = [],
                    Bt = [],
                    Ut = [],
                    Dt = [];
                this.domElement = gt, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.gammaInput = !1, this.gammaOutput = !1, this.shadowMapEnabled = !1, this.shadowMapType = n.PCFShadowMap, this.shadowMapCullFace = n.CullFaceFront, this.shadowMapDebug = !1, this.shadowMapCascade = !1, this.maxMorphTargets = 8, this.maxMorphNormals = 4, this.autoScaleCubemaps = !0, this.info = { memory: { programs: 0, geometries: 0, textures: 0 }, render: { calls: 0, vertices: 0, faces: 0, points: 0 } };
                var Vt, zt = this,
                    kt = [],
                    Nt = null,
                    Ot = null,
                    Gt = -1,
                    It = "",
                    Ht = null,
                    Wt = 0,
                    jt = -1,
                    Xt = -1,
                    qt = -1,
                    Yt = -1,
                    Kt = -1,
                    Qt = -1,
                    Zt = -1,
                    Jt = -1,
                    $t = null,
                    er = null,
                    tr = null,
                    rr = null,
                    ir = 0,
                    nr = 0,
                    or = gt.width,
                    ar = gt.height,
                    sr = 0,
                    hr = 0,
                    lr = new Uint8Array(16),
                    cr = new Uint8Array(16),
                    ur = new n.Frustum,
                    pr = new n.Matrix4,
                    fr = (new n.Matrix4, new n.Vector3),
                    dr = new n.Vector3,
                    mr = !0,
                    gr = { ambient: [0, 0, 0], directional: { length: 0, colors: [], positions: [] }, point: { length: 0, colors: [], positions: [], distances: [] }, spot: { length: 0, colors: [], positions: [], distances: [], directions: [], anglesCos: [], exponents: [] }, hemi: { length: 0, skyColors: [], groundColors: [], positions: [] } };
                try {
                    var vr = { alpha: bt, depth: wt, stencil: _t, antialias: Mt, premultipliedAlpha: St, preserveDrawingBuffer: Tt };
                    if (Vt = vt || gt.getContext("webgl", vr) || gt.getContext("experimental-webgl", vr), null === Vt) throw null !== gt.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context.";
                    gt.addEventListener("webglcontextlost", function(e) { e.preventDefault(), wr(), br(), Pt = {} }, !1) } catch (yr) { console.error(yr) }
                void 0 === Vt.getShaderPrecisionFormat && (Vt.getShaderPrecisionFormat = function() {
                    return { rangeMin: 1, rangeMax: 1, precision: 1 } });
                var xr = new n.WebGLExtensions(Vt);
                xr.get("OES_texture_float"), xr.get("OES_texture_float_linear"), xr.get("OES_standard_derivatives"), Ct && xr.get("EXT_frag_depth");
                var br = function() { Vt.clearColor(0, 0, 0, 1), Vt.clearDepth(1), Vt.clearStencil(0), Vt.enable(Vt.DEPTH_TEST), Vt.depthFunc(Vt.LEQUAL), Vt.frontFace(Vt.CCW), Vt.cullFace(Vt.BACK), Vt.enable(Vt.CULL_FACE), Vt.enable(Vt.BLEND), Vt.blendEquation(Vt.FUNC_ADD), Vt.blendFunc(Vt.SRC_ALPHA, Vt.ONE_MINUS_SRC_ALPHA), Vt.viewport(ir, nr, or, ar), Vt.clearColor(Et.r, Et.g, Et.b, At) },
                    wr = function() { Nt = null, Ht = null, qt = -1, Zt = -1, Jt = -1, jt = -1, Xt = -1, It = "", Gt = -1, mr = !0;
                        for (var e = 0; e < cr.length; e++) cr[e] = 0 };
                br(), this.context = Vt;
                var _r = Vt.getParameter(Vt.MAX_TEXTURE_IMAGE_UNITS),
                    Mr = Vt.getParameter(Vt.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    Sr = Vt.getParameter(Vt.MAX_TEXTURE_SIZE),
                    Tr = Vt.getParameter(Vt.MAX_CUBE_MAP_TEXTURE_SIZE),
                    Cr = Mr > 0,
                    Er = Cr && xr.get("OES_texture_float"),
                    Ar = Vt.getShaderPrecisionFormat(Vt.VERTEX_SHADER, Vt.HIGH_FLOAT),
                    Lr = Vt.getShaderPrecisionFormat(Vt.VERTEX_SHADER, Vt.MEDIUM_FLOAT),
                    Pr = (Vt.getShaderPrecisionFormat(Vt.VERTEX_SHADER, Vt.LOW_FLOAT), Vt.getShaderPrecisionFormat(Vt.FRAGMENT_SHADER, Vt.HIGH_FLOAT)),
                    Rr = Vt.getShaderPrecisionFormat(Vt.FRAGMENT_SHADER, Vt.MEDIUM_FLOAT),
                    Fr = (Vt.getShaderPrecisionFormat(Vt.FRAGMENT_SHADER, Vt.LOW_FLOAT), function() {
                        var e;
                        return function() {
                            if (void 0 !== e) return e;
                            if (e = [], xr.get("WEBGL_compressed_texture_pvrtc") || xr.get("WEBGL_compressed_texture_s3tc"))
                                for (var t = Vt.getParameter(Vt.COMPRESSED_TEXTURE_FORMATS), r = 0; r < t.length; r++) e.push(t[r]);
                            return e } }()),
                    Br = Ar.precision > 0 && Pr.precision > 0,
                    Ur = Lr.precision > 0 && Rr.precision > 0;
                "highp" !== xt || Br || (Ur ? (xt = "mediump", console.warn("THREE.WebGLRenderer: highp not supported, using mediump.")) : (xt = "lowp", console.warn("THREE.WebGLRenderer: highp and mediump not supported, using lowp."))), "mediump" !== xt || Ur || (xt = "lowp", console.warn("THREE.WebGLRenderer: mediump not supported, using lowp."));
                var Dr = new n.ShadowMapPlugin(this, Lt, Pt, Rt),
                    Vr = new n.SpritePlugin(this, Ut),
                    zr = new n.LensFlarePlugin(this, Dt);
                this.getContext = function() {
                    return Vt }, this.forceContextLoss = function() { xr.get("WEBGL_lose_context").loseContext() }, this.supportsVertexTextures = function() {
                    return Cr }, this.supportsFloatTextures = function() {
                    return xr.get("OES_texture_float") }, this.supportsStandardDerivatives = function() {
                    return xr.get("OES_standard_derivatives") }, this.supportsCompressedTextureS3TC = function() {
                    return xr.get("WEBGL_compressed_texture_s3tc") }, this.supportsCompressedTexturePVRTC = function() {
                    return xr.get("WEBGL_compressed_texture_pvrtc") }, this.supportsBlendMinMax = function() {
                    return xr.get("EXT_blend_minmax") }, this.getMaxAnisotropy = function() {
                    var e;
                    return function() {
                        if (void 0 !== e) return e;
                        var t = xr.get("EXT_texture_filter_anisotropic");
                        return e = null !== t ? Vt.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0 } }(), this.getPrecision = function() {
                    return xt }, this.getPixelRatio = function() {
                    return yt }, this.setPixelRatio = function(e) { yt = e }, this.setSize = function(e, t, r) { gt.width = e * yt, gt.height = t * yt, r !== !1 && (gt.style.width = e + "px", gt.style.height = t + "px"), this.setViewport(0, 0, e, t) }, this.setViewport = function(e, t, r, i) { ir = e * yt, nr = t * yt, or = r * yt, ar = i * yt, Vt.viewport(ir, nr, or, ar) }, this.setScissor = function(e, t, r, i) { Vt.scissor(e * yt, t * yt, r * yt, i * yt) }, this.enableScissorTest = function(e) { e ? Vt.enable(Vt.SCISSOR_TEST) : Vt.disable(Vt.SCISSOR_TEST) }, this.getClearColor = function() {
                    return Et }, this.setClearColor = function(e, t) { Et.set(e), At = void 0 !== t ? t : 1, Vt.clearColor(Et.r, Et.g, Et.b, At) }, this.getClearAlpha = function() {
                    return At }, this.setClearAlpha = function(e) { At = e, Vt.clearColor(Et.r, Et.g, Et.b, At) }, this.clear = function(e, t, r) {
                    var i = 0;
                    (void 0 === e || e) && (i |= Vt.COLOR_BUFFER_BIT), (void 0 === t || t) && (i |= Vt.DEPTH_BUFFER_BIT), (void 0 === r || r) && (i |= Vt.STENCIL_BUFFER_BIT), Vt.clear(i) }, this.clearColor = function() {
                    Vt.clear(Vt.COLOR_BUFFER_BIT)
                }, this.clearDepth = function() { Vt.clear(Vt.DEPTH_BUFFER_BIT) }, this.clearStencil = function() { Vt.clear(Vt.STENCIL_BUFFER_BIT) }, this.clearTarget = function(e, t, r, i) { this.setRenderTarget(e), this.clear(t, r, i) }, this.resetGLState = wr;
                var kr = function(e) {
                        var t = e.target;
                        t.traverse(function(e) { e.removeEventListener("remove", kr), D(e) }) },
                    Nr = function(e) {
                        var t = e.target;
                        t.removeEventListener("dispose", Nr), Wr(t) },
                    Or = function(e) {
                        var t = e.target;
                        t.removeEventListener("dispose", Or), jr(t), zt.info.memory.textures-- },
                    Gr = function(e) {
                        var t = e.target;
                        t.removeEventListener("dispose", Gr), Xr(t), zt.info.memory.textures-- },
                    Ir = function(e) {
                        var t = e.target;
                        t.removeEventListener("dispose", Ir), qr(t) },
                    Hr = function(e) {
                        for (var t = ["__webglVertexBuffer", "__webglNormalBuffer", "__webglTangentBuffer", "__webglColorBuffer", "__webglUVBuffer", "__webglUV2Buffer", "__webglSkinIndicesBuffer", "__webglSkinWeightsBuffer", "__webglFaceBuffer", "__webglLineBuffer", "__webglLineDistanceBuffer"], r = 0, i = t.length; i > r; r++) {
                            var n = t[r];
                            void 0 !== e[n] && (Vt.deleteBuffer(e[n]), delete e[n]) }
                        if (void 0 !== e.__webglCustomAttributesList) {
                            for (var n in e.__webglCustomAttributesList) Vt.deleteBuffer(e.__webglCustomAttributesList[n].buffer);
                            delete e.__webglCustomAttributesList }
                        zt.info.memory.geometries-- },
                    Wr = function(e) {
                        if (delete e.__webglInit, e instanceof n.BufferGeometry) {
                            for (var t in e.attributes) {
                                var r = e.attributes[t];
                                void 0 !== r.buffer && (Vt.deleteBuffer(r.buffer), delete r.buffer) }
                            zt.info.memory.geometries-- } else {
                            var i = Yr[e.id];
                            if (void 0 !== i) {
                                for (var o = 0, a = i.length; a > o; o++) {
                                    var s = i[o];
                                    if (void 0 !== s.numMorphTargets) {
                                        for (var h = 0, l = s.numMorphTargets; l > h; h++) Vt.deleteBuffer(s.__webglMorphTargetsBuffers[h]);
                                        delete s.__webglMorphTargetsBuffers }
                                    if (void 0 !== s.numMorphNormals) {
                                        for (var h = 0, l = s.numMorphNormals; l > h; h++) Vt.deleteBuffer(s.__webglMorphNormalsBuffers[h]);
                                        delete s.__webglMorphNormalsBuffers }
                                    Hr(s) }
                                delete Yr[e.id] } else Hr(e) }
                        It = "" },
                    jr = function(e) {
                        if (e.image && e.image.__webglTextureCube) Vt.deleteTexture(e.image.__webglTextureCube), delete e.image.__webglTextureCube;
                        else {
                            if (void 0 === e.__webglInit) return;
                            Vt.deleteTexture(e.__webglTexture), delete e.__webglTexture, delete e.__webglInit } },
                    Xr = function(e) {
                        if (e && void 0 !== e.__webglTexture) {
                            if (Vt.deleteTexture(e.__webglTexture), delete e.__webglTexture, e instanceof n.WebGLRenderTargetCube)
                                for (var t = 0; 6 > t; t++) Vt.deleteFramebuffer(e.__webglFramebuffer[t]), Vt.deleteRenderbuffer(e.__webglRenderbuffer[t]);
                            else Vt.deleteFramebuffer(e.__webglFramebuffer), Vt.deleteRenderbuffer(e.__webglRenderbuffer);
                            delete e.__webglFramebuffer, delete e.__webglRenderbuffer } },
                    qr = function(e) {
                        var t = e.program.program;
                        if (void 0 !== t) { e.program = void 0;
                            var r, i, n, o = !1;
                            for (r = 0, i = kt.length; i > r; r++)
                                if (n = kt[r], n.program === t) { n.usedTimes--, 0 === n.usedTimes && (o = !0);
                                    break }
                            if (o === !0) {
                                var a = [];
                                for (r = 0, i = kt.length; i > r; r++) n = kt[r], n.program !== t && a.push(n);
                                kt = a, Vt.deleteProgram(t), zt.info.memory.programs-- } } };
                this.renderBufferImmediate = function(e, t, r) {
                    if (m(), e.hasPositions && !e.__webglVertexBuffer && (e.__webglVertexBuffer = Vt.createBuffer()), e.hasNormals && !e.__webglNormalBuffer && (e.__webglNormalBuffer = Vt.createBuffer()), e.hasUvs && !e.__webglUvBuffer && (e.__webglUvBuffer = Vt.createBuffer()), e.hasColors && !e.__webglColorBuffer && (e.__webglColorBuffer = Vt.createBuffer()), e.hasPositions && (Vt.bindBuffer(Vt.ARRAY_BUFFER, e.__webglVertexBuffer), Vt.bufferData(Vt.ARRAY_BUFFER, e.positionArray, Vt.DYNAMIC_DRAW), g(t.attributes.position), Vt.vertexAttribPointer(t.attributes.position, 3, Vt.FLOAT, !1, 0, 0)), e.hasNormals) {
                        if (Vt.bindBuffer(Vt.ARRAY_BUFFER, e.__webglNormalBuffer), r.shading === n.FlatShading) {
                            var i, o, a, s, h, l, c, u, p, f, d, y, x, b, w = 3 * e.count;
                            for (b = 0; w > b; b += 9) x = e.normalArray, s = x[b], c = x[b + 1], f = x[b + 2], h = x[b + 3], u = x[b + 4], d = x[b + 5], l = x[b + 6], p = x[b + 7], y = x[b + 8], i = (s + h + l) / 3, o = (c + u + p) / 3, a = (f + d + y) / 3, x[b] = i, x[b + 1] = o, x[b + 2] = a, x[b + 3] = i, x[b + 4] = o, x[b + 5] = a, x[b + 6] = i, x[b + 7] = o, x[b + 8] = a }
                        Vt.bufferData(Vt.ARRAY_BUFFER, e.normalArray, Vt.DYNAMIC_DRAW), g(t.attributes.normal), Vt.vertexAttribPointer(t.attributes.normal, 3, Vt.FLOAT, !1, 0, 0) }
                    e.hasUvs && r.map && (Vt.bindBuffer(Vt.ARRAY_BUFFER, e.__webglUvBuffer), Vt.bufferData(Vt.ARRAY_BUFFER, e.uvArray, Vt.DYNAMIC_DRAW), g(t.attributes.uv), Vt.vertexAttribPointer(t.attributes.uv, 2, Vt.FLOAT, !1, 0, 0)), e.hasColors && r.vertexColors !== n.NoColors && (Vt.bindBuffer(Vt.ARRAY_BUFFER, e.__webglColorBuffer), Vt.bufferData(Vt.ARRAY_BUFFER, e.colorArray, Vt.DYNAMIC_DRAW), g(t.attributes.color), Vt.vertexAttribPointer(t.attributes.color, 3, Vt.FLOAT, !1, 0, 0)), v(), Vt.drawArrays(Vt.TRIANGLES, 0, e.count), e.count = 0 }, this.renderBufferDirect = function(e, t, r, i, o, a) {
                    if (i.visible !== !1) { F(a);
                        var s = k(e, t, r, i, a),
                            h = !1,
                            l = i.wireframe ? 1 : 0,
                            c = "direct_" + o.id + "_" + s.id + "_" + l;
                        if (c !== It && (It = c, h = !0), h && m(), a instanceof n.Mesh) {
                            var u = i.wireframe === !0 ? Vt.LINES : Vt.TRIANGLES,
                                p = o.attributes.index;
                            if (p) {
                                var f, g;
                                p.array instanceof Uint32Array && xr.get("OES_element_index_uint") ? (f = Vt.UNSIGNED_INT, g = 4) : (f = Vt.UNSIGNED_SHORT, g = 2);
                                var v = o.offsets;
                                if (0 === v.length) h && (d(i, s, o, 0), Vt.bindBuffer(Vt.ELEMENT_ARRAY_BUFFER, p.buffer)), Vt.drawElements(u, p.array.length, f, 0), zt.info.render.calls++, zt.info.render.vertices += p.array.length, zt.info.render.faces += p.array.length / 3;
                                else { h = !0;
                                    for (var y = 0, x = v.length; x > y; y++) {
                                        var b = v[y].index;
                                        h && (d(i, s, o, b), Vt.bindBuffer(Vt.ELEMENT_ARRAY_BUFFER, p.buffer)), Vt.drawElements(u, v[y].count, f, v[y].start * g), zt.info.render.calls++, zt.info.render.vertices += v[y].count, zt.info.render.faces += v[y].count / 3 } } } else { h && d(i, s, o, 0);
                                var w = o.attributes.position;
                                Vt.drawArrays(u, 0, w.array.length / 3), zt.info.render.calls++, zt.info.render.vertices += w.array.length / 3, zt.info.render.faces += w.array.length / 9 } } else if (a instanceof n.PointCloud) {
                            var u = Vt.POINTS,
                                p = o.attributes.index;
                            if (p) {
                                var f, g;
                                p.array instanceof Uint32Array && xr.get("OES_element_index_uint") ? (f = Vt.UNSIGNED_INT, g = 4) : (f = Vt.UNSIGNED_SHORT, g = 2);
                                var v = o.offsets;
                                if (0 === v.length) h && (d(i, s, o, 0), Vt.bindBuffer(Vt.ELEMENT_ARRAY_BUFFER, p.buffer)), Vt.drawElements(u, p.array.length, f, 0), zt.info.render.calls++, zt.info.render.points += p.array.length;
                                else { v.length > 1 && (h = !0);
                                    for (var y = 0, x = v.length; x > y; y++) {
                                        var b = v[y].index;
                                        h && (d(i, s, o, b), Vt.bindBuffer(Vt.ELEMENT_ARRAY_BUFFER, p.buffer)), Vt.drawElements(u, v[y].count, f, v[y].start * g), zt.info.render.calls++, zt.info.render.points += v[y].count } } } else { h && d(i, s, o, 0);
                                var w = o.attributes.position,
                                    v = o.offsets;
                                if (0 === v.length) Vt.drawArrays(u, 0, w.array.length / 3), zt.info.render.calls++, zt.info.render.points += w.array.length / 3;
                                else
                                    for (var y = 0, x = v.length; x > y; y++) Vt.drawArrays(u, v[y].index, v[y].count), zt.info.render.calls++, zt.info.render.points += v[y].count } } else if (a instanceof n.Line) {
                            var u = a.mode === n.LineStrip ? Vt.LINE_STRIP : Vt.LINES;
                            rt(i.linewidth);
                            var p = o.attributes.index;
                            if (p) {
                                var f, g;
                                p.array instanceof Uint32Array ? (f = Vt.UNSIGNED_INT, g = 4) : (f = Vt.UNSIGNED_SHORT, g = 2);
                                var v = o.offsets;
                                if (0 === v.length) h && (d(i, s, o, 0), Vt.bindBuffer(Vt.ELEMENT_ARRAY_BUFFER, p.buffer)), Vt.drawElements(u, p.array.length, f, 0), zt.info.render.calls++, zt.info.render.vertices += p.array.length;
                                else { v.length > 1 && (h = !0);
                                    for (var y = 0, x = v.length; x > y; y++) {
                                        var b = v[y].index;
                                        h && (d(i, s, o, b), Vt.bindBuffer(Vt.ELEMENT_ARRAY_BUFFER, p.buffer)), Vt.drawElements(u, v[y].count, f, v[y].start * g), zt.info.render.calls++, zt.info.render.vertices += v[y].count } } } else { h && d(i, s, o, 0);
                                var w = o.attributes.position,
                                    v = o.offsets;
                                if (0 === v.length) Vt.drawArrays(u, 0, w.array.length / 3), zt.info.render.calls++, zt.info.render.vertices += w.array.length / 3;
                                else
                                    for (var y = 0, x = v.length; x > y; y++) Vt.drawArrays(u, v[y].index, v[y].count), zt.info.render.calls++, zt.info.render.vertices += v[y].count } } } }, this.renderBuffer = function(e, t, r, i, o, a) {
                    if (i.visible !== !1) { F(a);
                        var s = k(e, t, r, i, a),
                            h = s.attributes,
                            l = !1,
                            c = i.wireframe ? 1 : 0,
                            u = o.id + "_" + s.id + "_" + c;
                        if (u !== It && (It = u, l = !0), l && m(), !i.morphTargets && h.position >= 0 ? l && (Vt.bindBuffer(Vt.ARRAY_BUFFER, o.__webglVertexBuffer), g(h.position), Vt.vertexAttribPointer(h.position, 3, Vt.FLOAT, !1, 0, 0)) : a.morphTargetBase && y(i, o, a), l) {
                            if (o.__webglCustomAttributesList)
                                for (var p = 0, f = o.__webglCustomAttributesList.length; f > p; p++) {
                                    var d = o.__webglCustomAttributesList[p];
                                    h[d.buffer.belongsToAttribute] >= 0 && (Vt.bindBuffer(Vt.ARRAY_BUFFER, d.buffer), g(h[d.buffer.belongsToAttribute]), Vt.vertexAttribPointer(h[d.buffer.belongsToAttribute], d.size, Vt.FLOAT, !1, 0, 0)) }
                            h.color >= 0 && (a.geometry.colors.length > 0 || a.geometry.faces.length > 0 ? (Vt.bindBuffer(Vt.ARRAY_BUFFER, o.__webglColorBuffer), g(h.color), Vt.vertexAttribPointer(h.color, 3, Vt.FLOAT, !1, 0, 0)) : void 0 !== i.defaultAttributeValues && Vt.vertexAttrib3fv(h.color, i.defaultAttributeValues.color)), h.normal >= 0 && (Vt.bindBuffer(Vt.ARRAY_BUFFER, o.__webglNormalBuffer), g(h.normal), Vt.vertexAttribPointer(h.normal, 3, Vt.FLOAT, !1, 0, 0)), h.tangent >= 0 && (Vt.bindBuffer(Vt.ARRAY_BUFFER, o.__webglTangentBuffer), g(h.tangent), Vt.vertexAttribPointer(h.tangent, 4, Vt.FLOAT, !1, 0, 0)), h.uv >= 0 && (a.geometry.faceVertexUvs[0] ? (Vt.bindBuffer(Vt.ARRAY_BUFFER, o.__webglUVBuffer), g(h.uv), Vt.vertexAttribPointer(h.uv, 2, Vt.FLOAT, !1, 0, 0)) : void 0 !== i.defaultAttributeValues && Vt.vertexAttrib2fv(h.uv, i.defaultAttributeValues.uv)), h.uv2 >= 0 && (a.geometry.faceVertexUvs[1] ? (Vt.bindBuffer(Vt.ARRAY_BUFFER, o.__webglUV2Buffer), g(h.uv2), Vt.vertexAttribPointer(h.uv2, 2, Vt.FLOAT, !1, 0, 0)) : void 0 !== i.defaultAttributeValues && Vt.vertexAttrib2fv(h.uv2, i.defaultAttributeValues.uv2)), i.skinning && h.skinIndex >= 0 && h.skinWeight >= 0 && (Vt.bindBuffer(Vt.ARRAY_BUFFER, o.__webglSkinIndicesBuffer), g(h.skinIndex), Vt.vertexAttribPointer(h.skinIndex, 4, Vt.FLOAT, !1, 0, 0), Vt.bindBuffer(Vt.ARRAY_BUFFER, o.__webglSkinWeightsBuffer), g(h.skinWeight), Vt.vertexAttribPointer(h.skinWeight, 4, Vt.FLOAT, !1, 0, 0)), h.lineDistance >= 0 && (Vt.bindBuffer(Vt.ARRAY_BUFFER, o.__webglLineDistanceBuffer), g(h.lineDistance), Vt.vertexAttribPointer(h.lineDistance, 1, Vt.FLOAT, !1, 0, 0)) }
                        if (v(), a instanceof n.Mesh) {
                            var x = o.__typeArray === Uint32Array ? Vt.UNSIGNED_INT : Vt.UNSIGNED_SHORT;
                            i.wireframe ? (rt(i.wireframeLinewidth), l && Vt.bindBuffer(Vt.ELEMENT_ARRAY_BUFFER, o.__webglLineBuffer), Vt.drawElements(Vt.LINES, o.__webglLineCount, x, 0)) : (l && Vt.bindBuffer(Vt.ELEMENT_ARRAY_BUFFER, o.__webglFaceBuffer), Vt.drawElements(Vt.TRIANGLES, o.__webglFaceCount, x, 0)), zt.info.render.calls++, zt.info.render.vertices += o.__webglFaceCount, zt.info.render.faces += o.__webglFaceCount / 3 } else if (a instanceof n.Line) {
                            var b = a.mode === n.LineStrip ? Vt.LINE_STRIP : Vt.LINES;
                            rt(i.linewidth), Vt.drawArrays(b, 0, o.__webglLineCount), zt.info.render.calls++ } else a instanceof n.PointCloud && (Vt.drawArrays(Vt.POINTS, 0, o.__webglParticleCount), zt.info.render.calls++, zt.info.render.points += o.__webglParticleCount) } }, this.render = function(e, t, r, i) {
                    if (t instanceof n.Camera == !1) return console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."), void 0;
                    var o = e.fog;
                    It = "", Gt = -1, Ht = null, mr = !0, e.autoUpdate === !0 && e.updateMatrixWorld(), void 0 === t.parent && t.updateMatrixWorld(), e.traverse(function(e) { e instanceof n.SkinnedMesh && e.skeleton.update() }), t.matrixWorldInverse.getInverse(t.matrixWorld), pr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), ur.setFromMatrix(pr), Lt.length = 0, Ft.length = 0, Bt.length = 0, Ut.length = 0, Dt.length = 0, _(e), zt.sortObjects === !0 && (Ft.sort(x), Bt.sort(b)), Dr.render(e, t), zt.info.render.calls = 0, zt.info.render.vertices = 0, zt.info.render.faces = 0, zt.info.render.points = 0, this.setRenderTarget(r), (this.autoClear || i) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);
                    for (var a = 0, s = Rt.length; s > a; a++) {
                        var h = Rt[a],
                            l = h.object;
                        l.visible && (J(l, t), T(h)) }
                    if (e.overrideMaterial) {
                        var c = e.overrideMaterial;
                        this.setBlending(c.blending, c.blendEquation, c.blendSrc, c.blendDst), this.setDepthTest(c.depthTest), this.setDepthWrite(c.depthWrite), it(c.polygonOffset, c.polygonOffsetFactor, c.polygonOffsetUnits), M(Ft, t, Lt, o, !0, c), M(Bt, t, Lt, o, !0, c), S(Rt, "", t, Lt, o, !1, c) } else {
                        var c = null;
                        this.setBlending(n.NoBlending), M(Ft, t, Lt, o, !1, c), S(Rt, "opaque", t, Lt, o, !1, c), M(Bt, t, Lt, o, !0, c), S(Rt, "transparent", t, Lt, o, !0, c) }
                    Vr.render(e, t), zr.render(e, t, sr, hr), r && r.generateMipmaps && r.minFilter !== n.NearestFilter && r.minFilter !== n.LinearFilter && ct(r), this.setDepthTest(!0), this.setDepthWrite(!0) }, this.renderImmediateObject = function(e, t, r, i, n) {
                    var o = k(e, t, r, i, n);
                    It = "", zt.setMaterialFaces(i), n.immediateRenderCallback ? n.immediateRenderCallback(o, Vt, ur) : n.render(function(e) { zt.renderBufferImmediate(e, o, i) }) };
                var Yr = {},
                    Kr = 0,
                    Qr = { MeshDepthMaterial: "depth", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointCloudMaterial: "particle_basic" };
                this.setFaceCulling = function(e, t) { e === n.CullFaceNone ? Vt.disable(Vt.CULL_FACE) : (t === n.FrontFaceDirectionCW ? Vt.frontFace(Vt.CW) : Vt.frontFace(Vt.CCW), e === n.CullFaceBack ? Vt.cullFace(Vt.BACK) : e === n.CullFaceFront ? Vt.cullFace(Vt.FRONT) : Vt.cullFace(Vt.FRONT_AND_BACK), Vt.enable(Vt.CULL_FACE)) }, this.setMaterialFaces = function(e) {
                    var t = e.side === n.DoubleSide,
                        r = e.side === n.BackSide;
                    jt !== t && (t ? Vt.disable(Vt.CULL_FACE) : Vt.enable(Vt.CULL_FACE), jt = t), Xt !== r && (r ? Vt.frontFace(Vt.CW) : Vt.frontFace(Vt.CCW), Xt = r) }, this.setDepthTest = function(e) { Zt !== e && (e ? Vt.enable(Vt.DEPTH_TEST) : Vt.disable(Vt.DEPTH_TEST), Zt = e) }, this.setDepthWrite = function(e) { Jt !== e && (Vt.depthMask(e), Jt = e) }, this.setBlending = function(e, t, r, i) { e !== qt && (e === n.NoBlending ? Vt.disable(Vt.BLEND) : e === n.AdditiveBlending ? (Vt.enable(Vt.BLEND), Vt.blendEquation(Vt.FUNC_ADD), Vt.blendFunc(Vt.SRC_ALPHA, Vt.ONE)) : e === n.SubtractiveBlending ? (Vt.enable(Vt.BLEND), Vt.blendEquation(Vt.FUNC_ADD), Vt.blendFunc(Vt.ZERO, Vt.ONE_MINUS_SRC_COLOR)) : e === n.MultiplyBlending ? (Vt.enable(Vt.BLEND), Vt.blendEquation(Vt.FUNC_ADD), Vt.blendFunc(Vt.ZERO, Vt.SRC_COLOR)) : e === n.CustomBlending ? Vt.enable(Vt.BLEND) : (Vt.enable(Vt.BLEND), Vt.blendEquationSeparate(Vt.FUNC_ADD, Vt.FUNC_ADD), Vt.blendFuncSeparate(Vt.SRC_ALPHA, Vt.ONE_MINUS_SRC_ALPHA, Vt.ONE, Vt.ONE_MINUS_SRC_ALPHA)), qt = e), e === n.CustomBlending ? (t !== Yt && (Vt.blendEquation(pt(t)), Yt = t), (r !== Kt || i !== Qt) && (Vt.blendFunc(pt(r), pt(i)), Kt = r, Qt = i)) : (Yt = null, Kt = null, Qt = null) }, this.uploadTexture = function(e) { void 0 === e.__webglInit && (e.__webglInit = !0, e.addEventListener("dispose", Or), e.__webglTexture = Vt.createTexture(), zt.info.memory.textures++), Vt.bindTexture(Vt.TEXTURE_2D, e.__webglTexture), Vt.pixelStorei(Vt.UNPACK_FLIP_Y_WEBGL, e.flipY), Vt.pixelStorei(Vt.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), Vt.pixelStorei(Vt.UNPACK_ALIGNMENT, e.unpackAlignment), e.image = ot(e.image, Sr);
                    var t = e.image,
                        r = n.Math.isPowerOfTwo(t.width) && n.Math.isPowerOfTwo(t.height),
                        i = pt(e.format),
                        o = pt(e.type);
                    nt(Vt.TEXTURE_2D, e, r);
                    var a, s = e.mipmaps;
                    if (e instanceof n.DataTexture)
                        if (s.length > 0 && r) {
                            for (var h = 0, l = s.length; l > h; h++) a = s[h], Vt.texImage2D(Vt.TEXTURE_2D, h, i, a.width, a.height, 0, i, o, a.data);
                            e.generateMipmaps = !1 } else Vt.texImage2D(Vt.TEXTURE_2D, 0, i, t.width, t.height, 0, i, o, t.data);
                    else if (e instanceof n.CompressedTexture)
                        for (var h = 0, l = s.length; l > h; h++) a = s[h], e.format !== n.RGBAFormat && e.format !== n.RGBFormat ? Fr().indexOf(i) > -1 ? Vt.compressedTexImage2D(Vt.TEXTURE_2D, h, i, a.width, a.height, 0, a.data) : console.warn("Attempt to load unsupported compressed texture format") : Vt.texImage2D(Vt.TEXTURE_2D, h, i, a.width, a.height, 0, i, o, a.data);
                    else if (s.length > 0 && r) {
                        for (var h = 0, l = s.length; l > h; h++) a = s[h], Vt.texImage2D(Vt.TEXTURE_2D, h, i, i, o, a);
                        e.generateMipmaps = !1 } else Vt.texImage2D(Vt.TEXTURE_2D, 0, i, i, o, e.image);
                    e.generateMipmaps && r && Vt.generateMipmap(Vt.TEXTURE_2D), e.needsUpdate = !1, e.onUpdate && e.onUpdate() }, this.setTexture = function(e, t) { Vt.activeTexture(Vt.TEXTURE0 + t), e.needsUpdate ? zt.uploadTexture(e) : Vt.bindTexture(Vt.TEXTURE_2D, e.__webglTexture) }, this.setRenderTarget = function(e) {
                    var t = e instanceof n.WebGLRenderTargetCube;
                    if (e && void 0 === e.__webglFramebuffer) { void 0 === e.depthBuffer && (e.depthBuffer = !0), void 0 === e.stencilBuffer && (e.stencilBuffer = !0), e.addEventListener("dispose", Gr), e.__webglTexture = Vt.createTexture(), zt.info.memory.textures++;
                        var r = n.Math.isPowerOfTwo(e.width) && n.Math.isPowerOfTwo(e.height),
                            i = pt(e.format),
                            o = pt(e.type);
                        if (t) { e.__webglFramebuffer = [], e.__webglRenderbuffer = [], Vt.bindTexture(Vt.TEXTURE_CUBE_MAP, e.__webglTexture), nt(Vt.TEXTURE_CUBE_MAP, e, r);
                            for (var a = 0; 6 > a; a++) e.__webglFramebuffer[a] = Vt.createFramebuffer(), e.__webglRenderbuffer[a] = Vt.createRenderbuffer(), Vt.texImage2D(Vt.TEXTURE_CUBE_MAP_POSITIVE_X + a, 0, i, e.width, e.height, 0, i, o, null), ht(e.__webglFramebuffer[a], e, Vt.TEXTURE_CUBE_MAP_POSITIVE_X + a), lt(e.__webglRenderbuffer[a], e);
                            r && Vt.generateMipmap(Vt.TEXTURE_CUBE_MAP) } else e.__webglFramebuffer = Vt.createFramebuffer(), e.__webglRenderbuffer = e.shareDepthFrom ? e.shareDepthFrom.__webglRenderbuffer : Vt.createRenderbuffer(), Vt.bindTexture(Vt.TEXTURE_2D, e.__webglTexture), nt(Vt.TEXTURE_2D, e, r), Vt.texImage2D(Vt.TEXTURE_2D, 0, i, e.width, e.height, 0, i, o, null), ht(e.__webglFramebuffer, e, Vt.TEXTURE_2D), e.shareDepthFrom ? e.depthBuffer && !e.stencilBuffer ? Vt.framebufferRenderbuffer(Vt.FRAMEBUFFER, Vt.DEPTH_ATTACHMENT, Vt.RENDERBUFFER, e.__webglRenderbuffer) : e.depthBuffer && e.stencilBuffer && Vt.framebufferRenderbuffer(Vt.FRAMEBUFFER, Vt.DEPTH_STENCIL_ATTACHMENT, Vt.RENDERBUFFER, e.__webglRenderbuffer) : lt(e.__webglRenderbuffer, e), r && Vt.generateMipmap(Vt.TEXTURE_2D);
                        t ? Vt.bindTexture(Vt.TEXTURE_CUBE_MAP, null) : Vt.bindTexture(Vt.TEXTURE_2D, null), Vt.bindRenderbuffer(Vt.RENDERBUFFER, null), Vt.bindFramebuffer(Vt.FRAMEBUFFER, null) }
                    var s, h, l, c, u;
                    e ? (s = t ? e.__webglFramebuffer[e.activeCubeFace] : e.__webglFramebuffer, h = e.width, l = e.height, c = 0, u = 0) : (s = null, h = or, l = ar, c = ir, u = nr), s !== Ot && (Vt.bindFramebuffer(Vt.FRAMEBUFFER, s), Vt.viewport(c, u, h, l), Ot = s), sr = h, hr = l }, this.initMaterial = function() { console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.") }, this.addPrePlugin = function() { console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.") }, this.addPostPlugin = function() { console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.") }, this.updateShadowMap = function() { console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.") }
            }, n.WebGLRenderTarget = function(e, t, r) { this.width = e, this.height = t, r = r || {}, this.wrapS = void 0 !== r.wrapS ? r.wrapS : n.ClampToEdgeWrapping, this.wrapT = void 0 !== r.wrapT ? r.wrapT : n.ClampToEdgeWrapping, this.magFilter = void 0 !== r.magFilter ? r.magFilter : n.LinearFilter, this.minFilter = void 0 !== r.minFilter ? r.minFilter : n.LinearMipMapLinearFilter, this.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1, this.offset = new n.Vector2(0, 0), this.repeat = new n.Vector2(1, 1), this.format = void 0 !== r.format ? r.format : n.RGBAFormat, this.type = void 0 !== r.type ? r.type : n.UnsignedByteType, this.depthBuffer = void 0 !== r.depthBuffer ? r.depthBuffer : !0, this.stencilBuffer = void 0 !== r.stencilBuffer ? r.stencilBuffer : !0, this.generateMipmaps = !0, this.shareDepthFrom = null }, n.WebGLRenderTarget.prototype = { constructor: n.WebGLRenderTarget, setSize: function(e, t) { this.width = e, this.height = t }, clone: function() {
                    var e = new n.WebGLRenderTarget(this.width, this.height);
                    return e.wrapS = this.wrapS, e.wrapT = this.wrapT, e.magFilter = this.magFilter, e.minFilter = this.minFilter, e.anisotropy = this.anisotropy, e.offset.copy(this.offset), e.repeat.copy(this.repeat), e.format = this.format, e.type = this.type, e.depthBuffer = this.depthBuffer, e.stencilBuffer = this.stencilBuffer, e.generateMipmaps = this.generateMipmaps, e.shareDepthFrom = this.shareDepthFrom, e }, dispose: function() { this.dispatchEvent({ type: "dispose" }) } }, n.EventDispatcher.prototype.apply(n.WebGLRenderTarget.prototype), n.WebGLRenderTargetCube = function(e, t, r) { n.WebGLRenderTarget.call(this, e, t, r), this.activeCubeFace = 0 }, n.WebGLRenderTargetCube.prototype = Object.create(n.WebGLRenderTarget.prototype), n.WebGLRenderTargetCube.prototype.constructor = n.WebGLRenderTargetCube, n.WebGLExtensions = function(e) {
                var t = {};
                this.get = function(r) {
                    if (void 0 !== t[r]) return t[r];
                    var i;
                    switch (r) {
                        case "EXT_texture_filter_anisotropic":
                            i = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                            break;
                        case "WEBGL_compressed_texture_s3tc":
                            i = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                            break;
                        case "WEBGL_compressed_texture_pvrtc":
                            i = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                            break;
                        default:
                            i = e.getExtension(r) }
                    return null === i && console.log("THREE.WebGLRenderer: " + r + " extension not supported."), t[r] = i, i } }, n.WebGLProgram = function() {
                var e = 0,
                    t = function(e) {
                        var t, r, i = [];
                        for (var n in e) t = e[n], t !== !1 && (r = "#define " + n + " " + t, i.push(r));
                        return i.join("\n") },
                    r = function(e, t, r) {
                        for (var i = {}, n = 0, o = r.length; o > n; n++) {
                            var a = r[n];
                            i[a] = e.getUniformLocation(t, a) }
                        return i },
                    i = function(e, t, r) {
                        for (var i = {}, n = 0, o = r.length; o > n; n++) {
                            var a = r[n];
                            i[a] = e.getAttribLocation(t, a) }
                        return i };
                return function(o, a, s, h) {
                    var l = o,
                        c = l.context,
                        u = s.defines,
                        p = s.__webglShader.uniforms,
                        f = s.attributes,
                        d = s.__webglShader.vertexShader,
                        m = s.__webglShader.fragmentShader,
                        g = s.index0AttributeName;
                    void 0 === g && h.morphTargets === !0 && (g = "position");
                    var v = "SHADOWMAP_TYPE_BASIC";
                    h.shadowMapType === n.PCFShadowMap ? v = "SHADOWMAP_TYPE_PCF" : h.shadowMapType === n.PCFSoftShadowMap && (v = "SHADOWMAP_TYPE_PCF_SOFT");
                    var y = "ENVMAP_TYPE_CUBE",
                        x = "ENVMAP_MODE_REFLECTION",
                        b = "ENVMAP_BLENDING_MULTIPLY";
                    if (h.envMap) {
                        switch (s.envMap.mapping) {
                            case n.CubeReflectionMapping:
                            case n.CubeRefractionMapping:
                                y = "ENVMAP_TYPE_CUBE";
                                break;
                            case n.EquirectangularReflectionMapping:
                            case n.EquirectangularRefractionMapping:
                                y = "ENVMAP_TYPE_EQUIREC";
                                break;
                            case n.SphericalReflectionMapping:
                                y = "ENVMAP_TYPE_SPHERE" }
                        switch (s.envMap.mapping) {
                            case n.CubeRefractionMapping:
                            case n.EquirectangularRefractionMapping:
                                x = "ENVMAP_MODE_REFRACTION" }
                        switch (s.combine) {
                            case n.MultiplyOperation:
                                b = "ENVMAP_BLENDING_MULTIPLY";
                                break;
                            case n.MixOperation:
                                b = "ENVMAP_BLENDING_MIX";
                                break;
                            case n.AddOperation:
                                b = "ENVMAP_BLENDING_ADD" } }
                    var w, _, M = t(u),
                        S = c.createProgram();
                    s instanceof n.RawShaderMaterial ? (w = "", _ = "") : (w = ["precision " + h.precision + " float;", "precision " + h.precision + " int;", M, h.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", l.gammaInput ? "#define GAMMA_INPUT" : "", l.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define MAX_DIR_LIGHTS " + h.maxDirLights, "#define MAX_POINT_LIGHTS " + h.maxPointLights, "#define MAX_SPOT_LIGHTS " + h.maxSpotLights, "#define MAX_HEMI_LIGHTS " + h.maxHemiLights, "#define MAX_SHADOWS " + h.maxShadows, "#define MAX_BONES " + h.maxBones, h.map ? "#define USE_MAP" : "", h.envMap ? "#define USE_ENVMAP" : "", h.envMap ? "#define " + x : "", h.lightMap ? "#define USE_LIGHTMAP" : "", h.bumpMap ? "#define USE_BUMPMAP" : "", h.normalMap ? "#define USE_NORMALMAP" : "", h.specularMap ? "#define USE_SPECULARMAP" : "", h.alphaMap ? "#define USE_ALPHAMAP" : "", h.vertexColors ? "#define USE_COLOR" : "", h.skinning ? "#define USE_SKINNING" : "", h.useVertexTexture ? "#define BONE_TEXTURE" : "", h.morphTargets ? "#define USE_MORPHTARGETS" : "", h.morphNormals ? "#define USE_MORPHNORMALS" : "", h.wrapAround ? "#define WRAP_AROUND" : "", h.doubleSided ? "#define DOUBLE_SIDED" : "", h.flipSided ? "#define FLIP_SIDED" : "", h.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", h.shadowMapEnabled ? "#define " + v : "", h.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", h.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", h.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", h.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "attribute vec2 uv2;", "#ifdef USE_COLOR", "    attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "  attribute vec3 morphTarget0;", "    attribute vec3 morphTarget1;", "    attribute vec3 morphTarget2;", "    attribute vec3 morphTarget3;", "    #ifdef USE_MORPHNORMALS", "     attribute vec3 morphNormal0;", "        attribute vec3 morphNormal1;", "        attribute vec3 morphNormal2;", "        attribute vec3 morphNormal3;", "    #else", "       attribute vec3 morphTarget4;", "        attribute vec3 morphTarget5;", "        attribute vec3 morphTarget6;", "        attribute vec3 morphTarget7;", "    #endif", "#endif", "#ifdef USE_SKINNING", " attribute vec4 skinIndex;", "   attribute vec4 skinWeight;", "#endif", ""].join("\n"), _ = ["precision " + h.precision + " float;", "precision " + h.precision + " int;", h.bumpMap || h.normalMap ? "#extension GL_OES_standard_derivatives : enable" : "", M, "#define MAX_DIR_LIGHTS " + h.maxDirLights, "#define MAX_POINT_LIGHTS " + h.maxPointLights, "#define MAX_SPOT_LIGHTS " + h.maxSpotLights, "#define MAX_HEMI_LIGHTS " + h.maxHemiLights, "#define MAX_SHADOWS " + h.maxShadows, h.alphaTest ? "#define ALPHATEST " + h.alphaTest : "", l.gammaInput ? "#define GAMMA_INPUT" : "", l.gammaOutput ? "#define GAMMA_OUTPUT" : "", h.useFog && h.fog ? "#define USE_FOG" : "", h.useFog && h.fogExp ? "#define FOG_EXP2" : "", h.map ? "#define USE_MAP" : "", h.envMap ? "#define USE_ENVMAP" : "", h.envMap ? "#define " + y : "", h.envMap ? "#define " + x : "", h.envMap ? "#define " + b : "", h.lightMap ? "#define USE_LIGHTMAP" : "", h.bumpMap ? "#define USE_BUMPMAP" : "", h.normalMap ? "#define USE_NORMALMAP" : "", h.specularMap ? "#define USE_SPECULARMAP" : "", h.alphaMap ? "#define USE_ALPHAMAP" : "", h.vertexColors ? "#define USE_COLOR" : "", h.metal ? "#define METAL" : "", h.wrapAround ? "#define WRAP_AROUND" : "", h.doubleSided ? "#define DOUBLE_SIDED" : "", h.flipSided ? "#define FLIP_SIDED" : "", h.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", h.shadowMapEnabled ? "#define " + v : "", h.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", h.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", h.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", ""].join("\n"));
                    var T = new n.WebGLShader(c, c.VERTEX_SHADER, w + d),
                        C = new n.WebGLShader(c, c.FRAGMENT_SHADER, _ + m);
                    c.attachShader(S, T), c.attachShader(S, C), void 0 !== g && c.bindAttribLocation(S, 0, g), c.linkProgram(S), c.getProgramParameter(S, c.LINK_STATUS) === !1 && (console.error("THREE.WebGLProgram: Could not initialise shader."), console.error("gl.VALIDATE_STATUS", c.getProgramParameter(S, c.VALIDATE_STATUS)), console.error("gl.getError()", c.getError())), "" !== c.getProgramInfoLog(S) && console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", c.getProgramInfoLog(S)), c.deleteShader(T), c.deleteShader(C);
                    var E = ["viewMatrix", "modelViewMatrix", "projectionMatrix", "normalMatrix", "modelMatrix", "cameraPosition", "morphTargetInfluences", "bindMatrix", "bindMatrixInverse"];
                    h.useVertexTexture ? (E.push("boneTexture"), E.push("boneTextureWidth"), E.push("boneTextureHeight")) : E.push("boneGlobalMatrices"), h.logarithmicDepthBuffer && E.push("logDepthBufFC");
                    for (var A in p) E.push(A);
                    this.uniforms = r(c, S, E), E = ["position", "normal", "uv", "uv2", "tangent", "color", "skinIndex", "skinWeight", "lineDistance"];
                    for (var L = 0; L < h.maxMorphTargets; L++) E.push("morphTarget" + L);
                    for (var L = 0; L < h.maxMorphNormals; L++) E.push("morphNormal" + L);
                    for (var P in f) E.push(P);
                    return this.attributes = i(c, S, E), this.attributesKeys = Object.keys(this.attributes), this.id = e++, this.code = a, this.usedTimes = 1, this.program = S, this.vertexShader = T, this.fragmentShader = C, this } }(), n.WebGLShader = function() {
                var e = function(e) {
                    for (var t = e.split("\n"), r = 0; r < t.length; r++) t[r] = r + 1 + ": " + t[r];
                    return t.join("\n") };
                return function(t, r, i) {
                    var n = t.createShader(r);
                    return t.shaderSource(n, i), t.compileShader(n), t.getShaderParameter(n, t.COMPILE_STATUS) === !1 && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== t.getShaderInfoLog(n) && (console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", t.getShaderInfoLog(n)), console.warn(e(i))), n } }(), n.LensFlarePlugin = function(e, t) {
                function r(t) {
                    var r = p.createProgram(),
                        i = p.createShader(p.FRAGMENT_SHADER),
                        n = p.createShader(p.VERTEX_SHADER),
                        o = "precision " + e.getPrecision() + " float;\n";
                    return p.shaderSource(i, o + t.fragmentShader), p.shaderSource(n, o + t.vertexShader), p.compileShader(i), p.compileShader(n), p.attachShader(r, i), p.attachShader(r, n), p.linkProgram(r), r }
                var i, o, a, s, h, l, c, u, p = e.context,
                    f = function() {
                        var e = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
                            t = new Uint16Array([0, 1, 2, 0, 2, 3]);
                        i = p.createBuffer(), o = p.createBuffer(), p.bindBuffer(p.ARRAY_BUFFER, i), p.bufferData(p.ARRAY_BUFFER, e, p.STATIC_DRAW), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, o), p.bufferData(p.ELEMENT_ARRAY_BUFFER, t, p.STATIC_DRAW), c = p.createTexture(), u = p.createTexture(), p.bindTexture(p.TEXTURE_2D, c), p.texImage2D(p.TEXTURE_2D, 0, p.RGB, 16, 16, 0, p.RGB, p.UNSIGNED_BYTE, null), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST), p.bindTexture(p.TEXTURE_2D, u), p.texImage2D(p.TEXTURE_2D, 0, p.RGBA, 16, 16, 0, p.RGBA, p.UNSIGNED_BYTE, null), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST), l = p.getParameter(p.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0;
                        var n;
                        n = l ? { vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"), fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n") } : { vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if( renderType == 2 ) {", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"), fragmentShader: ["precision mediump float;", "uniform lowp int renderType;", "uniform sampler2D map;", "uniform sampler2D occlusionMap;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "void main() {", "if( renderType == 0 ) {", "gl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );", "} else if( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "float visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;", "visibility = ( 1.0 - visibility / 4.0 );", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * visibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n") }, a = r(n), s = { vertex: p.getAttribLocation(a, "position"), uv: p.getAttribLocation(a, "uv") }, h = { renderType: p.getUniformLocation(a, "renderType"), map: p.getUniformLocation(a, "map"), occlusionMap: p.getUniformLocation(a, "occlusionMap"), opacity: p.getUniformLocation(a, "opacity"), color: p.getUniformLocation(a, "color"), scale: p.getUniformLocation(a, "scale"), rotation: p.getUniformLocation(a, "rotation"), screenPosition: p.getUniformLocation(a, "screenPosition") }
                    };
                this.render = function(r, d, m, g) {
                    if (0 !== t.length) {
                        var v = new n.Vector3,
                            y = g / m,
                            x = .5 * m,
                            b = .5 * g,
                            w = 16 / g,
                            _ = new n.Vector2(w * y, w),
                            M = new n.Vector3(1, 1, 0),
                            S = new n.Vector2(1, 1);
                        void 0 === a && f(), p.useProgram(a), p.enableVertexAttribArray(s.vertex), p.enableVertexAttribArray(s.uv), p.uniform1i(h.occlusionMap, 0), p.uniform1i(h.map, 1), p.bindBuffer(p.ARRAY_BUFFER, i), p.vertexAttribPointer(s.vertex, 2, p.FLOAT, !1, 16, 0), p.vertexAttribPointer(s.uv, 2, p.FLOAT, !1, 16, 8), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, o), p.disable(p.CULL_FACE), p.depthMask(!1);
                        for (var T = 0, C = t.length; C > T; T++) { w = 16 / g, _.set(w * y, w);
                            var E = t[T];
                            if (v.set(E.matrixWorld.elements[12], E.matrixWorld.elements[13], E.matrixWorld.elements[14]), v.applyMatrix4(d.matrixWorldInverse), v.applyProjection(d.projectionMatrix), M.copy(v), S.x = M.x * x + x, S.y = M.y * b + b, l || S.x > 0 && S.x < m && S.y > 0 && S.y < g) { p.activeTexture(p.TEXTURE1), p.bindTexture(p.TEXTURE_2D, c), p.copyTexImage2D(p.TEXTURE_2D, 0, p.RGB, S.x - 8, S.y - 8, 16, 16, 0), p.uniform1i(h.renderType, 0), p.uniform2f(h.scale, _.x, _.y), p.uniform3f(h.screenPosition, M.x, M.y, M.z), p.disable(p.BLEND), p.enable(p.DEPTH_TEST), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0), p.activeTexture(p.TEXTURE0), p.bindTexture(p.TEXTURE_2D, u), p.copyTexImage2D(p.TEXTURE_2D, 0, p.RGBA, S.x - 8, S.y - 8, 16, 16, 0), p.uniform1i(h.renderType, 1), p.disable(p.DEPTH_TEST), p.activeTexture(p.TEXTURE1), p.bindTexture(p.TEXTURE_2D, c), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0), E.positionScreen.copy(M), E.customUpdateCallback ? E.customUpdateCallback(E) : E.updateLensFlares(), p.uniform1i(h.renderType, 2), p.enable(p.BLEND);
                                for (var A = 0, L = E.lensFlares.length; L > A; A++) {
                                    var P = E.lensFlares[A];
                                    P.opacity > .001 && P.scale > .001 && (M.x = P.x, M.y = P.y, M.z = P.z, w = P.size * P.scale / g, _.x = w * y, _.y = w, p.uniform3f(h.screenPosition, M.x, M.y, M.z), p.uniform2f(h.scale, _.x, _.y), p.uniform1f(h.rotation, P.rotation), p.uniform1f(h.opacity, P.opacity), p.uniform3f(h.color, P.color.r, P.color.g, P.color.b), e.setBlending(P.blending, P.blendEquation, P.blendSrc, P.blendDst), e.setTexture(P.texture, 1), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0)) } } }
                        p.enable(p.CULL_FACE), p.enable(p.DEPTH_TEST), p.depthMask(!0), e.resetGLState() } }
            }, n.ShadowMapPlugin = function(e, t, r, i) {
                function o(e, t, i) {
                    if (t.visible) {
                        var n = r[t.id];
                        if (n && t.castShadow && (t.frustumCulled === !1 || m.intersectsObject(t) === !0))
                            for (var a = 0, s = n.length; s > a; a++) {
                                var h = n[a];
                                t._modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), b.push(h) }
                        for (var a = 0, s = t.children.length; s > a; a++) o(e, t.children[a], i) } }

                function a(e, t) {
                    var r = new n.DirectionalLight;
                    r.isVirtual = !0, r.onlyShadow = !0, r.castShadow = !0, r.shadowCameraNear = e.shadowCameraNear, r.shadowCameraFar = e.shadowCameraFar, r.shadowCameraLeft = e.shadowCameraLeft, r.shadowCameraRight = e.shadowCameraRight, r.shadowCameraBottom = e.shadowCameraBottom, r.shadowCameraTop = e.shadowCameraTop, r.shadowCameraVisible = e.shadowCameraVisible, r.shadowDarkness = e.shadowDarkness, r.shadowBias = e.shadowCascadeBias[t], r.shadowMapWidth = e.shadowCascadeWidth[t], r.shadowMapHeight = e.shadowCascadeHeight[t], r.pointsWorld = [], r.pointsFrustum = [];
                    for (var i = r.pointsWorld, o = r.pointsFrustum, a = 0; 8 > a; a++) i[a] = new n.Vector3, o[a] = new n.Vector3;
                    var s = e.shadowCascadeNearZ[t],
                        h = e.shadowCascadeFarZ[t];
                    return o[0].set(-1, -1, s), o[1].set(1, -1, s), o[2].set(-1, 1, s), o[3].set(1, 1, s), o[4].set(-1, -1, h), o[5].set(1, -1, h), o[6].set(-1, 1, h), o[7].set(1, 1, h), r }

                function s(e, t) {
                    var r = e.shadowCascadeArray[t];
                    r.position.copy(e.position), r.target.position.copy(e.target.position), r.lookAt(r.target), r.shadowCameraVisible = e.shadowCameraVisible, r.shadowDarkness = e.shadowDarkness, r.shadowBias = e.shadowCascadeBias[t];
                    var i = e.shadowCascadeNearZ[t],
                        n = e.shadowCascadeFarZ[t],
                        o = r.pointsFrustum;
                    o[0].z = i, o[1].z = i, o[2].z = i, o[3].z = i, o[4].z = n, o[5].z = n, o[6].z = n, o[7].z = n }

                function h(e, t) {
                    var r = t.shadowCamera,
                        i = t.pointsFrustum,
                        n = t.pointsWorld;
                    v.set(1 / 0, 1 / 0, 1 / 0), y.set(-1 / 0, -1 / 0, -1 / 0);
                    for (var o = 0; 8 > o; o++) {
                        var a = n[o];
                        a.copy(i[o]), a.unproject(e), a.applyMatrix4(r.matrixWorldInverse), a.x < v.x && (v.x = a.x), a.x > y.x && (y.x = a.x), a.y < v.y && (v.y = a.y), a.y > y.y && (y.y = a.y), a.z < v.z && (v.z = a.z), a.z > y.z && (y.z = a.z) }
                    r.left = v.x, r.right = y.x, r.top = y.y, r.bottom = v.y, r.updateProjectionMatrix() }

                function l(e) {
                    return e.material instanceof n.MeshFaceMaterial ? e.material.materials[0] : e.material }
                var c, u, p, f, d = e.context,
                    m = new n.Frustum,
                    g = new n.Matrix4,
                    v = new n.Vector3,
                    y = new n.Vector3,
                    x = new n.Vector3,
                    b = [],
                    w = n.ShaderLib.depthRGBA,
                    _ = n.UniformsUtils.clone(w.uniforms);
                c = new n.ShaderMaterial({ uniforms: _, vertexShader: w.vertexShader, fragmentShader: w.fragmentShader }), u = new n.ShaderMaterial({ uniforms: _, vertexShader: w.vertexShader, fragmentShader: w.fragmentShader, morphTargets: !0 }), p = new n.ShaderMaterial({ uniforms: _, vertexShader: w.vertexShader, fragmentShader: w.fragmentShader, skinning: !0 }), f = new n.ShaderMaterial({ uniforms: _, vertexShader: w.vertexShader, fragmentShader: w.fragmentShader, morphTargets: !0, skinning: !0 }), c._shadowPass = !0, u._shadowPass = !0, p._shadowPass = !0, f._shadowPass = !0, this.render = function(r, v) {
                    if (e.shadowMapEnabled !== !1) {
                        var y, w, _, M, S, T, C, E, A, L, P, R, F, B = [],
                            U = 0,
                            D = null;
                        for (d.clearColor(1, 1, 1, 1), d.disable(d.BLEND), d.enable(d.CULL_FACE), d.frontFace(d.CCW), e.shadowMapCullFace === n.CullFaceFront ? d.cullFace(d.FRONT) : d.cullFace(d.BACK), e.setDepthTest(!0), y = 0, w = t.length; w > y; y++)
                            if (F = t[y], F.castShadow)
                                if (F instanceof n.DirectionalLight && F.shadowCascade)
                                    for (S = 0; S < F.shadowCascadeCount; S++) {
                                        var V;
                                        if (F.shadowCascadeArray[S]) V = F.shadowCascadeArray[S];
                                        else { V = a(F, S), V.originalCamera = v;
                                            var z = new n.Gyroscope;
                                            z.position.copy(F.shadowCascadeOffset), z.add(V), z.add(V.target), v.add(z), F.shadowCascadeArray[S] = V, console.log("Created virtualLight", V) }
                                        s(F, S), B[U] = V, U++ } else B[U] = F, U++;
                        for (y = 0, w = B.length; w > y; y++) {
                            if (F = B[y], !F.shadowMap) {
                                var k = n.LinearFilter;
                                e.shadowMapType === n.PCFSoftShadowMap && (k = n.NearestFilter);
                                var N = { minFilter: k, magFilter: k, format: n.RGBAFormat };
                                F.shadowMap = new n.WebGLRenderTarget(F.shadowMapWidth, F.shadowMapHeight, N), F.shadowMapSize = new n.Vector2(F.shadowMapWidth, F.shadowMapHeight), F.shadowMatrix = new n.Matrix4 }
                            if (!F.shadowCamera) {
                                if (F instanceof n.SpotLight) F.shadowCamera = new n.PerspectiveCamera(F.shadowCameraFov, F.shadowMapWidth / F.shadowMapHeight, F.shadowCameraNear, F.shadowCameraFar);
                                else {
                                    if (!(F instanceof n.DirectionalLight)) { console.error("Unsupported light type for shadow");
                                        continue }
                                    F.shadowCamera = new n.OrthographicCamera(F.shadowCameraLeft, F.shadowCameraRight, F.shadowCameraTop, F.shadowCameraBottom, F.shadowCameraNear, F.shadowCameraFar) }
                                r.add(F.shadowCamera), r.autoUpdate === !0 && r.updateMatrixWorld() }
                            F.shadowCameraVisible && !F.cameraHelper && (F.cameraHelper = new n.CameraHelper(F.shadowCamera), r.add(F.cameraHelper)), F.isVirtual && V.originalCamera == v && h(v, F), T = F.shadowMap, C = F.shadowMatrix, E = F.shadowCamera, E.position.setFromMatrixPosition(F.matrixWorld), x.setFromMatrixPosition(F.target.matrixWorld), E.lookAt(x), E.updateMatrixWorld(), E.matrixWorldInverse.getInverse(E.matrixWorld), F.cameraHelper && (F.cameraHelper.visible = F.shadowCameraVisible), F.shadowCameraVisible && F.cameraHelper.update(), C.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), C.multiply(E.projectionMatrix), C.multiply(E.matrixWorldInverse), g.multiplyMatrices(E.projectionMatrix, E.matrixWorldInverse), m.setFromMatrix(g), e.setRenderTarget(T), e.clear(), b.length = 0, o(r, r, E);
                            var O, G, I;
                            for (_ = 0, M = b.length; M > _; _++) P = b[_], R = P.object, A = P.buffer, O = l(R), G = void 0 !== R.geometry.morphTargets && R.geometry.morphTargets.length > 0 && O.morphTargets, I = R instanceof n.SkinnedMesh && O.skinning, L = R.customDepthMaterial ? R.customDepthMaterial : I ? G ? f : p : G ? u : c, e.setMaterialFaces(O), A instanceof n.BufferGeometry ? e.renderBufferDirect(E, t, D, L, A, R) : e.renderBuffer(E, t, D, L, A, R);
                            for (_ = 0, M = i.length; M > _; _++) P = i[_], R = P.object, R.visible && R.castShadow && (R._modelViewMatrix.multiplyMatrices(E.matrixWorldInverse, R.matrixWorld), e.renderImmediateObject(E, t, D, c, R)) }
                        var H = e.getClearColor(),
                            W = e.getClearAlpha();
                        d.clearColor(H.r, H.g, H.b, W), d.enable(d.BLEND), e.shadowMapCullFace === n.CullFaceFront && d.cullFace(d.BACK), e.resetGLState() } } }, n.SpritePlugin = function(e, t) {
                function r() {
                    var t = u.createProgram(),
                        r = u.createShader(u.VERTEX_SHADER),
                        i = u.createShader(u.FRAGMENT_SHADER);
                    return u.shaderSource(r, ["precision " + e.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")), u.shaderSource(i, ["precision " + e.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")), u.compileShader(r), u.compileShader(i), u.attachShader(t, r), u.attachShader(t, i), u.linkProgram(t), t }

                function i(e, t) {
                    return e.z !== t.z ? t.z - e.z : t.id - e.id }
                var o, a, s, h, l, c, u = e.context,
                    p = new n.Vector3,
                    f = new n.Quaternion,
                    d = new n.Vector3,
                    m = function() {
                        var e = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
                            t = new Uint16Array([0, 1, 2, 0, 2, 3]);
                        o = u.createBuffer(), a = u.createBuffer(), u.bindBuffer(u.ARRAY_BUFFER, o), u.bufferData(u.ARRAY_BUFFER, e, u.STATIC_DRAW), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, a), u.bufferData(u.ELEMENT_ARRAY_BUFFER, t, u.STATIC_DRAW), s = r(), h = { position: u.getAttribLocation(s, "position"), uv: u.getAttribLocation(s, "uv") }, l = { uvOffset: u.getUniformLocation(s, "uvOffset"), uvScale: u.getUniformLocation(s, "uvScale"), rotation: u.getUniformLocation(s, "rotation"), scale: u.getUniformLocation(s, "scale"), color: u.getUniformLocation(s, "color"), map: u.getUniformLocation(s, "map"), opacity: u.getUniformLocation(s, "opacity"), modelViewMatrix: u.getUniformLocation(s, "modelViewMatrix"), projectionMatrix: u.getUniformLocation(s, "projectionMatrix"), fogType: u.getUniformLocation(s, "fogType"), fogDensity: u.getUniformLocation(s, "fogDensity"), fogNear: u.getUniformLocation(s, "fogNear"), fogFar: u.getUniformLocation(s, "fogFar"), fogColor: u.getUniformLocation(s, "fogColor"), alphaTest: u.getUniformLocation(s, "alphaTest") };
                        var i = document.createElement("canvas");
                        i.width = 8, i.height = 8;
                        var p = i.getContext("2d");
                        p.fillStyle = "white", p.fillRect(0, 0, 8, 8), c = new n.Texture(i), c.needsUpdate = !0 };
                this.render = function(r, g) {
                    if (0 !== t.length) { void 0 === s && m(), u.useProgram(s), u.enableVertexAttribArray(h.position), u.enableVertexAttribArray(h.uv), u.disable(u.CULL_FACE), u.enable(u.BLEND), u.bindBuffer(u.ARRAY_BUFFER, o), u.vertexAttribPointer(h.position, 2, u.FLOAT, !1, 16, 0), u.vertexAttribPointer(h.uv, 2, u.FLOAT, !1, 16, 8), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, a), u.uniformMatrix4fv(l.projectionMatrix, !1, g.projectionMatrix.elements), u.activeTexture(u.TEXTURE0), u.uniform1i(l.map, 0);
                        var v = 0,
                            y = 0,
                            x = r.fog;
                        x ? (u.uniform3f(l.fogColor, x.color.r, x.color.g, x.color.b), x instanceof n.Fog ? (u.uniform1f(l.fogNear, x.near), u.uniform1f(l.fogFar, x.far), u.uniform1i(l.fogType, 1), v = 1, y = 1) : x instanceof n.FogExp2 && (u.uniform1f(l.fogDensity, x.density), u.uniform1i(l.fogType, 2), v = 2, y = 2)) : (u.uniform1i(l.fogType, 0), v = 0, y = 0);
                        for (var b = 0, w = t.length; w > b; b++) {
                            var _ = t[b];
                            _._modelViewMatrix.multiplyMatrices(g.matrixWorldInverse, _.matrixWorld), _.z = -_._modelViewMatrix.elements[14] }
                        t.sort(i);
                        for (var M = [], b = 0, w = t.length; w > b; b++) {
                            var _ = t[b],
                                S = _.material;
                            u.uniform1f(l.alphaTest, S.alphaTest), u.uniformMatrix4fv(l.modelViewMatrix, !1, _._modelViewMatrix.elements), _.matrixWorld.decompose(p, f, d), M[0] = d.x, M[1] = d.y;
                            var T = 0;
                            r.fog && S.fog && (T = y), v !== T && (u.uniform1i(l.fogType, T), v = T), null !== S.map ? (u.uniform2f(l.uvOffset, S.map.offset.x, S.map.offset.y), u.uniform2f(l.uvScale, S.map.repeat.x, S.map.repeat.y)) : (u.uniform2f(l.uvOffset, 0, 0), u.uniform2f(l.uvScale, 1, 1)), u.uniform1f(l.opacity, S.opacity), u.uniform3f(l.color, S.color.r, S.color.g, S.color.b), u.uniform1f(l.rotation, S.rotation), u.uniform2fv(l.scale, M), e.setBlending(S.blending, S.blendEquation, S.blendSrc, S.blendDst), e.setDepthTest(S.depthTest), e.setDepthWrite(S.depthWrite), S.map && S.map.image && S.map.image.width ? e.setTexture(S.map, 0) : e.setTexture(c, 0), u.drawElements(u.TRIANGLES, 6, u.UNSIGNED_SHORT, 0) }
                        u.enable(u.CULL_FACE), e.resetGLState() } } }, n.GeometryUtils = { merge: function(e, t, r) { console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
                    var i;
                    t instanceof n.Mesh && (t.matrixAutoUpdate && t.updateMatrix(), i = t.matrix, t = t.geometry), e.merge(t, i, r) }, center: function(e) {
                    return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), e.center() } }, n.ImageUtils = { crossOrigin: void 0, loadTexture: function(e, t, r, i) {
                    var o = new n.ImageLoader;
                    o.crossOrigin = this.crossOrigin;
                    var a = new n.Texture(void 0, t);
                    return o.load(e, function(e) { a.image = e, a.needsUpdate = !0, r && r(a) }, void 0, function(e) { i && i(e) }), a.sourceFile = e, a }, loadTextureCube: function(e, t, r, i) {
                    var o = [],
                        a = new n.ImageLoader;
                    a.crossOrigin = this.crossOrigin;
                    var s = new n.CubeTexture(o, t);
                    s.flipY = !1;
                    for (var h = 0, l = function(t) { a.load(e[t], function(e) { s.images[t] = e, h += 1, 6 === h && (s.needsUpdate = !0, r && r(s)) }, void 0, i) }, c = 0, u = e.length; u > c; ++c) l(c);
                    return s }, loadCompressedTexture: function() { console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.") }, loadCompressedTextureCube: function() { console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.") }, getNormalMap: function(e, t) {
                    var r = function(e, t) {
                            return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]] },
                        i = function(e, t) {
                            return [e[0] - t[0], e[1] - t[1], e[2] - t[2]] },
                        n = function(e) {
                            var t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
                            return [e[0] / t, e[1] / t, e[2] / t] };
                    t = 1 | t;
                    var o = e.width,
                        a = e.height,
                        s = document.createElement("canvas");
                    s.width = o, s.height = a;
                    var h = s.getContext("2d");
                    h.drawImage(e, 0, 0);
                    for (var l = h.getImageData(0, 0, o, a).data, c = h.createImageData(o, a), u = c.data, p = 0; o > p; p++)
                        for (var f = 0; a > f; f++) {
                            var d = 0 > f - 1 ? 0 : f - 1,
                                m = f + 1 > a - 1 ? a - 1 : f + 1,
                                g = 0 > p - 1 ? 0 : p - 1,
                                v = p + 1 > o - 1 ? o - 1 : p + 1,
                                y = [],
                                x = [0, 0, l[4 * (f * o + p)] / 255 * t];
                            y.push([-1, 0, l[4 * (f * o + g)] / 255 * t]), y.push([-1, -1, l[4 * (d * o + g)] / 255 * t]), y.push([0, -1, l[4 * (d * o + p)] / 255 * t]), y.push([1, -1, l[4 * (d * o + v)] / 255 * t]), y.push([1, 0, l[4 * (f * o + v)] / 255 * t]), y.push([1, 1, l[4 * (m * o + v)] / 255 * t]), y.push([0, 1, l[4 * (m * o + p)] / 255 * t]), y.push([-1, 1, l[4 * (m * o + g)] / 255 * t]);
                            for (var b = [], w = y.length, _ = 0; w > _; _++) {
                                var M = y[_],
                                    S = y[(_ + 1) % w];
                                M = i(M, x), S = i(S, x), b.push(n(r(M, S))) }
                            for (var T = [0, 0, 0], _ = 0; _ < b.length; _++) T[0] += b[_][0], T[1] += b[_][1], T[2] += b[_][2];
                            T[0] /= b.length, T[1] /= b.length, T[2] /= b.length;
                            var C = 4 * (f * o + p);
                            u[C] = (T[0] + 1) / 2 * 255 | 0, u[C + 1] = (T[1] + 1) / 2 * 255 | 0, u[C + 2] = 255 * T[2] | 0, u[C + 3] = 255 }
                    return h.putImageData(c, 0, 0), s }, generateDataTexture: function(e, t, r) {
                    for (var i = e * t, o = new Uint8Array(3 * i), a = Math.floor(255 * r.r), s = Math.floor(255 * r.g), h = Math.floor(255 * r.b), l = 0; i > l; l++) o[3 * l] = a, o[3 * l + 1] = s, o[3 * l + 2] = h;
                    var c = new n.DataTexture(o, e, t, n.RGBFormat);
                    return c.needsUpdate = !0, c } }, n.SceneUtils = { createMultiMaterialObject: function(e, t) {
                    for (var r = new n.Object3D, i = 0, o = t.length; o > i; i++) r.add(new n.Mesh(e, t[i]));
                    return r }, detach: function(e, t, r) { e.applyMatrix(t.matrixWorld), t.remove(e), r.add(e) }, attach: function(e, t, r) {
                    var i = new n.Matrix4;
                    i.getInverse(r.matrixWorld), e.applyMatrix(i), t.remove(e), r.add(e) } }, n.FontUtils = { faces: {}, face: "helvetiker", weight: "normal", style: "normal", size: 150, divisions: 10, getFace: function() {
                    try {
                        return this.faces[this.face][this.weight][this.style] } catch (e) {
                        throw "The font " + this.face + " with " + this.weight + " weight and " + this.style + " style is missing." } }, loadFace: function(e) {
                    var t = e.familyName.toLowerCase(),
                        r = this;
                    r.faces[t] = r.faces[t] || {}, r.faces[t][e.cssFontWeight] = r.faces[t][e.cssFontWeight] || {}, r.faces[t][e.cssFontWeight][e.cssFontStyle] = e;
                    r.faces[t][e.cssFontWeight][e.cssFontStyle] = e;
                    return e }, drawText: function(e) {
                    var t, r = this.getFace(),
                        i = this.size / r.resolution,
                        o = 0,
                        a = String(e).split(""),
                        s = a.length,
                        h = [];
                    for (t = 0; s > t; t++) {
                        var l = new n.Path,
                            c = this.extractGlyphPoints(a[t], r, i, o, l);
                        o += c.offset, h.push(c.path) }
                    var u = o / 2;
                    return { paths: h, offset: u } }, extractGlyphPoints: function(e, t, r, i, o) {
                    var a, s, h, l, c, u, p, f, d, m, g, v, y, x, b, w, _, M, S, T = [],
                        C = t.glyphs[e] || t.glyphs["?"];
                    if (C) {
                        if (C.o)
                            for (l = C._cachedOutline || (C._cachedOutline = C.o.split(" ")), u = l.length, p = r, f = r, a = 0; u > a;) switch (c = l[a++]) {
                                case "m":
                                    d = l[a++] * p + i, m = l[a++] * f, o.moveTo(d, m);
                                    break;
                                case "l":
                                    d = l[a++] * p + i, m = l[a++] * f, o.lineTo(d, m);
                                    break;
                                case "q":
                                    if (g = l[a++] * p + i, v = l[a++] * f, b = l[a++] * p + i, w = l[a++] * f, o.quadraticCurveTo(b, w, g, v), S = T[T.length - 1])
                                        for (y = S.x, x = S.y, s = 1, h = this.divisions; h >= s; s++) {
                                            var E = s / h;
                                            n.Shape.Utils.b2(E, y, b, g), n.Shape.Utils.b2(E, x, w, v) }
                                    break;
                                case "b":
                                    if (g = l[a++] * p + i, v = l[a++] * f, b = l[a++] * p + i, w = l[a++] * f, _ = l[a++] * p + i, M = l[a++] * f, o.bezierCurveTo(b, w, _, M, g, v), S = T[T.length - 1])
                                        for (y = S.x, x = S.y, s = 1, h = this.divisions; h >= s; s++) {
                                            var E = s / h;
                                            n.Shape.Utils.b3(E, y, b, _, g), n.Shape.Utils.b3(E, x, w, M, v) } }
                        return { offset: C.ha * r, path: o } } } }, n.FontUtils.generateShapes = function(e, t) { t = t || {};
                var r = void 0 !== t.size ? t.size : 100,
                    i = void 0 !== t.curveSegments ? t.curveSegments : 4,
                    o = void 0 !== t.font ? t.font : "helvetiker",
                    a = void 0 !== t.weight ? t.weight : "normal",
                    s = void 0 !== t.style ? t.style : "normal";
                n.FontUtils.size = r, n.FontUtils.divisions = i, n.FontUtils.face = o, n.FontUtils.weight = a, n.FontUtils.style = s;
                for (var h = n.FontUtils.drawText(e), l = h.paths, c = [], u = 0, p = l.length; p > u; u++) Array.prototype.push.apply(c, l[u].toShapes());
                return c },
            function(e) {
                var t = 1e-10,
                    r = function(e, t) {
                        var r = e.length;
                        if (3 > r) return null;
                        var o, a, s, h = [],
                            l = [],
                            c = [];
                        if (i(e) > 0)
                            for (a = 0; r > a; a++) l[a] = a;
                        else
                            for (a = 0; r > a; a++) l[a] = r - 1 - a;
                        var u = r,
                            p = 2 * u;
                        for (a = u - 1; u > 2;) {
                            if (p-- <= 0) return console.log("Warning, unable to triangulate polygon!"), t ? c : h;
                            if (o = a, o >= u && (o = 0), a = o + 1, a >= u && (a = 0), s = a + 1, s >= u && (s = 0), n(e, o, a, s, u, l)) {
                                var f, d, m, g, v;
                                for (f = l[o], d = l[a], m = l[s], h.push([e[f], e[d], e[m]]), c.push([l[o], l[a], l[s]]), g = a, v = a + 1; u > v; g++, v++) l[g] = l[v];
                                u--, p = 2 * u } }
                        return t ? c : h },
                    i = function(e) {
                        for (var t = e.length, r = 0, i = t - 1, n = 0; t > n; i = n++) r += e[i].x * e[n].y - e[n].x * e[i].y;
                        return .5 * r },
                    n = function(e, r, i, n, o, a) {
                        var s, h, l, c, u, p, f, d, m;
                        if (h = e[a[r]].x, l = e[a[r]].y, c = e[a[i]].x, u = e[a[i]].y, p = e[a[n]].x, f = e[a[n]].y, t > (c - h) * (f - l) - (u - l) * (p - h)) return !1;
                        var g, v, y, x, b, w, _, M, S, T, C, E, A, L, P;
                        for (g = p - c, v = f - u, y = h - p, x = l - f, b = c - h, w = u - l, s = 0; o > s; s++)
                            if (d = e[a[s]].x, m = e[a[s]].y, !(d === h && m === l || d === c && m === u || d === p && m === f) && (_ = d - h, M = m - l, S = d - c, T = m - u, C = d - p, E = m - f, P = g * T - v * S, A = b * M - w * _, L = y * E - x * C, P >= -t && L >= -t && A >= -t)) return !1;
                        return !0 };
                return e.Triangulate = r, e.Triangulate.area = i, e }(n.FontUtils), i._typeface_js = { faces: n.FontUtils.faces, loadFace: n.FontUtils.loadFace }, n.typeface_js = i._typeface_js, n.Audio = function(e) { n.Object3D.call(this), this.type = "Audio", this.context = e.context, this.source = this.context.createBufferSource(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.panner = this.context.createPanner(), this.panner.connect(this.gain) }, n.Audio.prototype = Object.create(n.Object3D.prototype), n.Audio.prototype.constructor = n.Audio, n.Audio.prototype.load = function(e) {
                var t = this,
                    r = new XMLHttpRequest;
                return r.open("GET", e, !0), r.responseType = "arraybuffer", r.onload = function() { t.context.decodeAudioData(this.response, function(e) { t.source.buffer = e, t.source.connect(t.panner), t.source.start(0) }) }, r.send(), this }, n.Audio.prototype.setLoop = function(e) { this.source.loop = e }, n.Audio.prototype.setRefDistance = function(e) { this.panner.refDistance = e }, n.Audio.prototype.setRolloffFactor = function(e) { this.panner.rolloffFactor = e }, n.Audio.prototype.updateMatrixWorld = function() {
                var e = new n.Vector3;
                return function(t) { n.Object3D.prototype.updateMatrixWorld.call(this, t), e.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(e.x, e.y, e.z) } }(), n.AudioListener = function() { n.Object3D.call(this), this.type = "AudioListener", this.context = new(window.AudioContext || window.webkitAudioContext) }, n.AudioListener.prototype = Object.create(n.Object3D.prototype), n.AudioListener.prototype.constructor = n.AudioListener, n.AudioListener.prototype.updateMatrixWorld = function() {
                var e = new n.Vector3,
                    t = new n.Quaternion,
                    r = new n.Vector3,
                    i = new n.Vector3,
                    o = new n.Vector3,
                    a = new n.Vector3;
                return function(s) { n.Object3D.prototype.updateMatrixWorld.call(this, s);
                    var h = this.context.listener,
                        l = this.up;
                    this.matrixWorld.decompose(e, t, r), i.set(0, 0, -1).applyQuaternion(t), o.subVectors(e, a), h.setPosition(e.x, e.y, e.z), h.setOrientation(i.x, i.y, i.z, l.x, l.y, l.z), h.setVelocity(o.x, o.y, o.z), a.copy(e) } }(), n.Curve = function() {}, n.Curve.prototype.getPoint = function() {
                return console.log("Warning, getPoint() not implemented!"), null }, n.Curve.prototype.getPointAt = function(e) {
                var t = this.getUtoTmapping(e);
                return this.getPoint(t) }, n.Curve.prototype.getPoints = function(e) { e || (e = 5);
                var t, r = [];
                for (t = 0; e >= t; t++) r.push(this.getPoint(t / e));
                return r }, n.Curve.prototype.getSpacedPoints = function(e) { e || (e = 5);
                var t, r = [];
                for (t = 0; e >= t; t++) r.push(this.getPointAt(t / e));
                return r }, n.Curve.prototype.getLength = function() {
                var e = this.getLengths();
                return e[e.length - 1] }, n.Curve.prototype.getLengths = function(e) {
                if (e || (e = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length == e + 1 && !this.needsUpdate) return this.cacheArcLengths;
                this.needsUpdate = !1;
                var t, r, i = [],
                    n = this.getPoint(0),
                    o = 0;
                for (i.push(0), r = 1; e >= r; r++) t = this.getPoint(r / e), o += t.distanceTo(n), i.push(o), n = t;
                return this.cacheArcLengths = i, i }, n.Curve.prototype.updateArcLengths = function() { this.needsUpdate = !0, this.getLengths() }, n.Curve.prototype.getUtoTmapping = function(e, t) {
                var r, i = this.getLengths(),
                    n = 0,
                    o = i.length;
                r = t ? t : e * i[o - 1];
                for (var a, s = 0, h = o - 1; h >= s;)
                    if (n = Math.floor(s + (h - s) / 2), a = i[n] - r, 0 > a) s = n + 1;
                    else {
                        if (!(a > 0)) { h = n;
                            break }
                        h = n - 1 }
                if (n = h, i[n] == r) {
                    var l = n / (o - 1);
                    return l }
                var c = i[n],
                    u = i[n + 1],
                    p = u - c,
                    f = (r - c) / p,
                    l = (n + f) / (o - 1);
                return l }, n.Curve.prototype.getTangent = function(e) {
                var t = 1e-4,
                    r = e - t,
                    i = e + t;
                0 > r && (r = 0), i > 1 && (i = 1);
                var n = this.getPoint(r),
                    o = this.getPoint(i),
                    a = o.clone().sub(n);
                return a.normalize() }, n.Curve.prototype.getTangentAt = function(e) {
                var t = this.getUtoTmapping(e);
                return this.getTangent(t) }, n.Curve.Utils = { tangentQuadraticBezier: function(e, t, r, i) {
                    return 2 * (1 - e) * (r - t) + 2 * e * (i - r) }, tangentCubicBezier: function(e, t, r, i, n) {
                    return -3 * t * (1 - e) * (1 - e) + 3 * r * (1 - e) * (1 - e) - 6 * e * r * (1 - e) + 6 * e * i * (1 - e) - 3 * e * e * i + 3 * e * e * n }, tangentSpline: function(e) {
                    var t = 6 * e * e - 6 * e,
                        r = 3 * e * e - 4 * e + 1,
                        i = -6 * e * e + 6 * e,
                        n = 3 * e * e - 2 * e;
                    return t + r + i + n }, interpolate: function(e, t, r, i, n) {
                    var o = .5 * (r - e),
                        a = .5 * (i - t),
                        s = n * n,
                        h = n * s;
                    return (2 * t - 2 * r + o + a) * h + (-3 * t + 3 * r - 2 * o - a) * s + o * n + t } }, n.Curve.create = function(e, t) {
                return e.prototype = Object.create(n.Curve.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e }, n.CurvePath = function() { this.curves = [], this.bends = [], this.autoClose = !1 }, n.CurvePath.prototype = Object.create(n.Curve.prototype), n.CurvePath.prototype.constructor = n.CurvePath, n.CurvePath.prototype.add = function(e) { this.curves.push(e) }, n.CurvePath.prototype.checkConnection = function() {}, n.CurvePath.prototype.closePath = function() {
                var e = this.curves[0].getPoint(0),
                    t = this.curves[this.curves.length - 1].getPoint(1);
                e.equals(t) || this.curves.push(new n.LineCurve(t, e)) }, n.CurvePath.prototype.getPoint = function(e) {
                for (var t, r, i = e * this.getLength(), n = this.getCurveLengths(), o = 0; o < n.length;) {
                    if (n[o] >= i) { t = n[o] - i, r = this.curves[o];
                        var a = 1 - t / r.getLength();
                        return r.getPointAt(a) }
                    o++ }
                return null }, n.CurvePath.prototype.getLength = function() {
                var e = this.getCurveLengths();
                return e[e.length - 1] }, n.CurvePath.prototype.getCurveLengths = function() {
                if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
                var e, t = [],
                    r = 0,
                    i = this.curves.length;
                for (e = 0; i > e; e++) r += this.curves[e].getLength(), t.push(r);
                return this.cacheLengths = t, t }, n.CurvePath.prototype.getBoundingBox = function() {
                var e, t, r, i, o, a, s = this.getPoints();
                e = t = Number.NEGATIVE_INFINITY, i = o = Number.POSITIVE_INFINITY;
                var h, l, c, u, p = s[0] instanceof n.Vector3;
                for (u = p ? new n.Vector3 : new n.Vector2, l = 0, c = s.length; c > l; l++) h = s[l], h.x > e ? e = h.x : h.x < i && (i = h.x), h.y > t ? t = h.y : h.y < o && (o = h.y), p && (h.z > r ? r = h.z : h.z < a && (a = h.z)), u.add(h);
                var f = { minX: i, minY: o, maxX: e, maxY: t };
                return p && (f.maxZ = r, f.minZ = a), f }, n.CurvePath.prototype.createPointsGeometry = function(e) {
                var t = this.getPoints(e, !0);
                return this.createGeometry(t) }, n.CurvePath.prototype.createSpacedPointsGeometry = function(e) {
                var t = this.getSpacedPoints(e, !0);
                return this.createGeometry(t) }, n.CurvePath.prototype.createGeometry = function(e) {
                for (var t = new n.Geometry, r = 0; r < e.length; r++) t.vertices.push(new n.Vector3(e[r].x, e[r].y, e[r].z || 0));
                return t }, n.CurvePath.prototype.addWrapPath = function(e) { this.bends.push(e) }, n.CurvePath.prototype.getTransformedPoints = function(e, t) {
                var r, i, n = this.getPoints(e);
                for (t || (t = this.bends), r = 0, i = t.length; i > r; r++) n = this.getWrapPoints(n, t[r]);
                return n }, n.CurvePath.prototype.getTransformedSpacedPoints = function(e, t) {
                var r, i, n = this.getSpacedPoints(e);
                for (t || (t = this.bends), r = 0, i = t.length; i > r; r++) n = this.getWrapPoints(n, t[r]);
                return n }, n.CurvePath.prototype.getWrapPoints = function(e, t) {
                var r, i, n, o, a, s, h = this.getBoundingBox();
                for (r = 0, i = e.length; i > r; r++) { n = e[r], o = n.x, a = n.y, s = o / h.maxX, s = t.getUtoTmapping(s, o);
                    var l = t.getPoint(s),
                        c = t.getTangent(s);
                    c.set(-c.y, c.x).multiplyScalar(a), n.x = l.x + c.x, n.y = l.y + c.y }
                return e }, n.Gyroscope = function() { n.Object3D.call(this) }, n.Gyroscope.prototype = Object.create(n.Object3D.prototype), n.Gyroscope.prototype.constructor = n.Gyroscope, n.Gyroscope.prototype.updateMatrixWorld = function() {
                var e = new n.Vector3,
                    t = new n.Quaternion,
                    r = new n.Vector3,
                    i = new n.Vector3,
                    o = new n.Quaternion,
                    a = new n.Vector3;
                return function(n) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || n) && (this.parent ? (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorld.decompose(i, o, a), this.matrix.decompose(e, t, r), this.matrixWorld.compose(i, t, a)) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, n = !0);
                    for (var s = 0, h = this.children.length; h > s; s++) this.children[s].updateMatrixWorld(n) } }(), n.Path = function(e) { n.CurvePath.call(this), this.actions = [], e && this.fromPoints(e) }, n.Path.prototype = Object.create(n.CurvePath.prototype), n.Path.prototype.constructor = n.Path, n.PathActions = { MOVE_TO: "moveTo", LINE_TO: "lineTo", QUADRATIC_CURVE_TO: "quadraticCurveTo", BEZIER_CURVE_TO: "bezierCurveTo", CSPLINE_THRU: "splineThru", ARC: "arc", ELLIPSE: "ellipse" }, n.Path.prototype.fromPoints = function(e) { this.moveTo(e[0].x, e[0].y);
                for (var t = 1, r = e.length; r > t; t++) this.lineTo(e[t].x, e[t].y) }, n.Path.prototype.moveTo = function() {
                var e = Array.prototype.slice.call(arguments);
                this.actions.push({ action: n.PathActions.MOVE_TO, args: e }) }, n.Path.prototype.lineTo = function(e, t) {
                var r = Array.prototype.slice.call(arguments),
                    i = this.actions[this.actions.length - 1].args,
                    o = i[i.length - 2],
                    a = i[i.length - 1],
                    s = new n.LineCurve(new n.Vector2(o, a), new n.Vector2(e, t));
                this.curves.push(s), this.actions.push({ action: n.PathActions.LINE_TO, args: r }) }, n.Path.prototype.quadraticCurveTo = function(e, t, r, i) {
                var o = Array.prototype.slice.call(arguments),
                    a = this.actions[this.actions.length - 1].args,
                    s = a[a.length - 2],
                    h = a[a.length - 1],
                    l = new n.QuadraticBezierCurve(new n.Vector2(s, h), new n.Vector2(e, t), new n.Vector2(r, i));
                this.curves.push(l), this.actions.push({ action: n.PathActions.QUADRATIC_CURVE_TO, args: o }) }, n.Path.prototype.bezierCurveTo = function(e, t, r, i, o, a) {
                var s = Array.prototype.slice.call(arguments),
                    h = this.actions[this.actions.length - 1].args,
                    l = h[h.length - 2],
                    c = h[h.length - 1],
                    u = new n.CubicBezierCurve(new n.Vector2(l, c), new n.Vector2(e, t), new n.Vector2(r, i), new n.Vector2(o, a));
                this.curves.push(u), this.actions.push({ action: n.PathActions.BEZIER_CURVE_TO, args: s }) }, n.Path.prototype.splineThru = function(e) {
                var t = Array.prototype.slice.call(arguments),
                    r = this.actions[this.actions.length - 1].args,
                    i = r[r.length - 2],
                    o = r[r.length - 1],
                    a = [new n.Vector2(i, o)];
                Array.prototype.push.apply(a, e);
                var s = new n.SplineCurve(a);
                this.curves.push(s), this.actions.push({ action: n.PathActions.CSPLINE_THRU, args: t }) }, n.Path.prototype.arc = function(e, t, r, i, n, o) {
                var a = this.actions[this.actions.length - 1].args,
                    s = a[a.length - 2],
                    h = a[a.length - 1];
                this.absarc(e + s, t + h, r, i, n, o) }, n.Path.prototype.absarc = function(e, t, r, i, n, o) { this.absellipse(e, t, r, r, i, n, o) }, n.Path.prototype.ellipse = function(e, t, r, i, n, o, a) {
                var s = this.actions[this.actions.length - 1].args,
                    h = s[s.length - 2],
                    l = s[s.length - 1];
                this.absellipse(e + h, t + l, r, i, n, o, a) }, n.Path.prototype.absellipse = function(e, t, r, i, o, a, s) {
                var h = Array.prototype.slice.call(arguments),
                    l = new n.EllipseCurve(e, t, r, i, o, a, s);
                this.curves.push(l);
                var c = l.getPoint(1);
                h.push(c.x), h.push(c.y), this.actions.push({ action: n.PathActions.ELLIPSE, args: h }) }, n.Path.prototype.getSpacedPoints = function(e) { e || (e = 40);
                for (var t = [], r = 0; e > r; r++) t.push(this.getPoint(r / e));
                return t }, n.Path.prototype.getPoints = function(e, t) {
                if (this.useSpacedPoints) return console.log("tata"), this.getSpacedPoints(e, t);
                e = e || 12;
                var r, i, o, a, s, h, l, c, u, p, f, d, m, g, v, y, x, b, w = [];
                for (r = 0, i = this.actions.length; i > r; r++) switch (o = this.actions[r], a = o.action, s = o.args, a) {
                    case n.PathActions.MOVE_TO:
                        w.push(new n.Vector2(s[0], s[1]));
                        break;
                    case n.PathActions.LINE_TO:
                        w.push(new n.Vector2(s[0], s[1]));
                        break;
                    case n.PathActions.QUADRATIC_CURVE_TO:
                        for (h = s[2], l = s[3], p = s[0], f = s[1], w.length > 0 ? (g = w[w.length - 1], d = g.x, m = g.y) : (g = this.actions[r - 1].args, d = g[g.length - 2], m = g[g.length - 1]), v = 1; e >= v; v++) y = v / e, x = n.Shape.Utils.b2(y, d, p, h), b = n.Shape.Utils.b2(y, m, f, l), w.push(new n.Vector2(x, b));
                        break;
                    case n.PathActions.BEZIER_CURVE_TO:
                        for (h = s[4], l = s[5], p = s[0], f = s[1], c = s[2], u = s[3], w.length > 0 ? (g = w[w.length - 1], d = g.x, m = g.y) : (g = this.actions[r - 1].args, d = g[g.length - 2], m = g[g.length - 1]), v = 1; e >= v; v++) y = v / e, x = n.Shape.Utils.b3(y, d, p, c, h), b = n.Shape.Utils.b3(y, m, f, u, l), w.push(new n.Vector2(x, b));
                        break;
                    case n.PathActions.CSPLINE_THRU:
                        g = this.actions[r - 1].args;
                        var _ = new n.Vector2(g[g.length - 2], g[g.length - 1]),
                            M = [_],
                            S = e * s[0].length;
                        M = M.concat(s[0]);
                        var T = new n.SplineCurve(M);
                        for (v = 1; S >= v; v++) w.push(T.getPointAt(v / S));
                        break;
                    case n.PathActions.ARC:
                        var C, E = s[0],
                            A = s[1],
                            L = s[2],
                            P = s[3],
                            R = s[4],
                            F = !!s[5],
                            B = R - P,
                            U = 2 * e;
                        for (v = 1; U >= v; v++) y = v / U, F || (y = 1 - y), C = P + y * B, x = E + L * Math.cos(C), b = A + L * Math.sin(C), w.push(new n.Vector2(x, b));
                        break;
                    case n.PathActions.ELLIPSE:
                        var C, E = s[0],
                            A = s[1],
                            D = s[2],
                            V = s[3],
                            P = s[4],
                            R = s[5],
                            F = !!s[6],
                            B = R - P,
                            U = 2 * e;
                        for (v = 1; U >= v; v++) y = v / U, F || (y = 1 - y), C = P + y * B, x = E + D * Math.cos(C), b = A + V * Math.sin(C), w.push(new n.Vector2(x, b)) }
                var z = w[w.length - 1],
                    k = 1e-10;
                return Math.abs(z.x - w[0].x) < k && Math.abs(z.y - w[0].y) < k && w.splice(w.length - 1, 1), t && w.push(w[0]), w }, n.Path.prototype.toShapes = function(e, t) {
                function r(e) {
                    var t, r, i, o, a, s = [],
                        h = new n.Path;
                    for (t = 0, r = e.length; r > t; t++) i = e[t], a = i.args, o = i.action, o == n.PathActions.MOVE_TO && 0 != h.actions.length && (s.push(h), h = new n.Path), h[o].apply(h, a);
                    return 0 != h.actions.length && s.push(h), s }

                function i(e) {
                    for (var t = [], r = 0, i = e.length; i > r; r++) {
                        var o = e[r],
                            a = new n.Shape;
                        a.actions = o.actions, a.curves = o.curves, t.push(a) }
                    return t }

                function o(e, t) {
                    for (var r = 1e-10, i = t.length, n = !1, o = i - 1, a = 0; i > a; o = a++) {
                        var s = t[o],
                            h = t[a],
                            l = h.x - s.x,
                            c = h.y - s.y;
                        if (Math.abs(c) > r) {
                            if (0 > c && (s = t[a], l = -l, h = t[o], c = -c), e.y < s.y || e.y > h.y) continue;
                            if (e.y == s.y) {
                                if (e.x == s.x) return !0 } else {
                                var u = c * (e.x - s.x) - l * (e.y - s.y);
                                if (0 == u) return !0;
                                if (0 > u) continue;
                                n = !n } } else {
                            if (e.y != s.y) continue;
                            if (h.x <= e.x && e.x <= s.x || s.x <= e.x && e.x <= h.x) return !0 } }
                    return n }
                var a = r(this.actions);
                if (0 == a.length) return [];
                if (t === !0) return i(a);
                var s, h, l, c = [];
                if (1 == a.length) return h = a[0], l = new n.Shape, l.actions = h.actions, l.curves = h.curves, c.push(l), c;
                var u = !n.Shape.Utils.isClockWise(a[0].getPoints());
                u = e ? !u : u;
                var p, f = [],
                    d = [],
                    m = [],
                    g = 0;
                d[g] = void 0, m[g] = [];
                var v, y;
                for (v = 0, y = a.length; y > v; v++) h = a[v], p = h.getPoints(), s = n.Shape.Utils.isClockWise(p), s = e ? !s : s, s ? (!u && d[g] && g++, d[g] = { s: new n.Shape, p: p }, d[g].s.actions = h.actions, d[g].s.curves = h.curves, u && g++, m[g] = []) : m[g].push({ h: h, p: p[0] });
                if (!d[0]) return i(a);
                if (d.length > 1) {
                    for (var x = !1, b = [], w = 0, _ = d.length; _ > w; w++) f[w] = [];
                    for (var w = 0, _ = d.length; _ > w; w++)
                        for (var M = (d[w], m[w]), S = 0; S < M.length; S++) {
                            for (var T = M[S], C = !0, E = 0; E < d.length; E++) o(T.p, d[E].p) && (w != E && b.push({ froms: w, tos: E, hole: S }), C ? (C = !1, f[E].push(T)) : x = !0);
                            C && f[w].push(T) }
                    b.length > 0 && (x || (m = f)) }
                var A, L, P;
                for (v = 0, y = d.length; y > v; v++)
                    for (l = d[v].s, c.push(l), A = m[v], L = 0, P = A.length; P > L; L++) l.holes.push(A[L].h);
                return c
            }, n.Shape = function() { n.Path.apply(this, arguments), this.holes = [] }, n.Shape.prototype = Object.create(n.Path.prototype), n.Shape.prototype.constructor = n.Shape, n.Shape.prototype.extrude = function(e) {
                var t = new n.ExtrudeGeometry(this, e);
                return t }, n.Shape.prototype.makeGeometry = function(e) {
                var t = new n.ShapeGeometry(this, e);
                return t }, n.Shape.prototype.getPointsHoles = function(e) {
                var t, r = this.holes.length,
                    i = [];
                for (t = 0; r > t; t++) i[t] = this.holes[t].getTransformedPoints(e, this.bends);
                return i }, n.Shape.prototype.getSpacedPointsHoles = function(e) {
                var t, r = this.holes.length,
                    i = [];
                for (t = 0; r > t; t++) i[t] = this.holes[t].getTransformedSpacedPoints(e, this.bends);
                return i }, n.Shape.prototype.extractAllPoints = function(e) {
                return { shape: this.getTransformedPoints(e), holes: this.getPointsHoles(e) } }, n.Shape.prototype.extractPoints = function(e) {
                return this.useSpacedPoints ? this.extractAllSpacedPoints(e) : this.extractAllPoints(e) }, n.Shape.prototype.extractAllSpacedPoints = function(e) {
                return { shape: this.getTransformedSpacedPoints(e), holes: this.getSpacedPointsHoles(e) } }, n.Shape.Utils = { triangulateShape: function(e, t) {
                    function r(e, t, r) {
                        return e.x != t.x ? e.x < t.x ? e.x <= r.x && r.x <= t.x : t.x <= r.x && r.x <= e.x : e.y < t.y ? e.y <= r.y && r.y <= t.y : t.y <= r.y && r.y <= e.y }

                    function i(e, t, i, n, o) {
                        var a = 1e-10,
                            s = t.x - e.x,
                            h = t.y - e.y,
                            l = n.x - i.x,
                            c = n.y - i.y,
                            u = e.x - i.x,
                            p = e.y - i.y,
                            f = h * l - s * c,
                            d = h * u - s * p;
                        if (Math.abs(f) > a) {
                            var m;
                            if (f > 0) {
                                if (0 > d || d > f) return [];
                                if (m = c * u - l * p, 0 > m || m > f) return [] } else {
                                if (d > 0 || f > d) return [];
                                if (m = c * u - l * p, m > 0 || f > m) return [] }
                            if (0 == m) return !o || 0 != d && d != f ? [e] : [];
                            if (m == f) return !o || 0 != d && d != f ? [t] : [];
                            if (0 == d) return [i];
                            if (d == f) return [n];
                            var g = m / f;
                            return [{ x: e.x + g * s, y: e.y + g * h }] }
                        if (0 != d || c * u != l * p) return [];
                        var v = 0 == s && 0 == h,
                            y = 0 == l && 0 == c;
                        if (v && y) return e.x != i.x || e.y != i.y ? [] : [e];
                        if (v) return r(i, n, e) ? [e] : [];
                        if (y) return r(e, t, i) ? [i] : [];
                        var x, b, w, _, M, S, T, C;
                        return 0 != s ? (e.x < t.x ? (x = e, w = e.x, b = t, _ = t.x) : (x = t, w = t.x, b = e, _ = e.x), i.x < n.x ? (M = i, T = i.x, S = n, C = n.x) : (M = n, T = n.x, S = i, C = i.x)) : (e.y < t.y ? (x = e, w = e.y, b = t, _ = t.y) : (x = t, w = t.y, b = e, _ = e.y), i.y < n.y ? (M = i, T = i.y, S = n, C = n.y) : (M = n, T = n.y, S = i, C = i.y)), T >= w ? T > _ ? [] : _ == T ? o ? [] : [M] : C >= _ ? [M, b] : [M, S] : w > C ? [] : w == C ? o ? [] : [x] : C >= _ ? [x, b] : [x, S] }

                    function o(e, t, r, i) {
                        var n = 1e-10,
                            o = t.x - e.x,
                            a = t.y - e.y,
                            s = r.x - e.x,
                            h = r.y - e.y,
                            l = i.x - e.x,
                            c = i.y - e.y,
                            u = o * h - a * s,
                            p = o * c - a * l;
                        if (Math.abs(u) > n) {
                            var f = l * h - c * s;
                            return u > 0 ? p >= 0 && f >= 0 : p >= 0 || f >= 0 }
                        return p > 0 }

                    function a(e, t) {
                        function r(e, t) {
                            var r = y.length - 1,
                                i = e - 1;
                            0 > i && (i = r);
                            var n = e + 1;
                            n > r && (n = 0);
                            var a = o(y[e], y[i], y[n], s[t]);
                            if (!a) return !1;
                            var h = s.length - 1,
                                l = t - 1;
                            0 > l && (l = h);
                            var c = t + 1;
                            return c > h && (c = 0), a = o(s[t], s[l], s[c], y[e]), a ? !0 : !1 }

                        function n(e, t) {
                            var r, n, o;
                            for (r = 0; r < y.length; r++)
                                if (n = r + 1, n %= y.length, o = i(e, t, y[r], y[n], !0), o.length > 0) return !0;
                            return !1 }

                        function a(e, r) {
                            var n, o, a, s, h;
                            for (n = 0; n < x.length; n++)
                                for (o = t[x[n]], a = 0; a < o.length; a++)
                                    if (s = a + 1, s %= o.length, h = i(e, r, o[a], o[s], !0), h.length > 0) return !0;
                            return !1 }
                        for (var s, h, l, c, u, p, f, d, m, g, v, y = e.concat(), x = [], b = [], w = 0, _ = t.length; _ > w; w++) x.push(w);
                        for (var M = 0, S = 2 * x.length; x.length > 0;) {
                            if (S--, 0 > S) { console.log("Infinite Loop! Holes left:" + x.length + ", Probably Hole outside Shape!");
                                break }
                            for (l = M; l < y.length; l++) { c = y[l], h = -1;
                                for (var w = 0; w < x.length; w++)
                                    if (p = x[w], f = c.x + ":" + c.y + ":" + p, void 0 === b[f]) { s = t[p];
                                        for (var T = 0; T < s.length; T++)
                                            if (u = s[T], r(l, T) && !n(c, u) && !a(c, u)) { h = T, x.splice(w, 1), d = y.slice(0, l + 1), m = y.slice(l), g = s.slice(h), v = s.slice(0, h + 1), y = d.concat(g).concat(v).concat(m), M = l;
                                                break }
                                        if (h >= 0) break;
                                        b[f] = !0 }
                                if (h >= 0) break } }
                        return y }
                    for (var s, h, l, c, u, p, f = {}, d = e.concat(), m = 0, g = t.length; g > m; m++) Array.prototype.push.apply(d, t[m]);
                    for (s = 0, h = d.length; h > s; s++) u = d[s].x + ":" + d[s].y, void 0 !== f[u] && console.log("Duplicate point", u), f[u] = s;
                    var v = a(e, t),
                        y = n.FontUtils.Triangulate(v, !1);
                    for (s = 0, h = y.length; h > s; s++)
                        for (c = y[s], l = 0; 3 > l; l++) u = c[l].x + ":" + c[l].y, p = f[u], void 0 !== p && (c[l] = p);
                    return y.concat() }, isClockWise: function(e) {
                    return n.FontUtils.Triangulate.area(e) < 0 }, b2p0: function(e, t) {
                    var r = 1 - e;
                    return r * r * t }, b2p1: function(e, t) {
                    return 2 * (1 - e) * e * t }, b2p2: function(e, t) {
                    return e * e * t }, b2: function(e, t, r, i) {
                    return this.b2p0(e, t) + this.b2p1(e, r) + this.b2p2(e, i) }, b3p0: function(e, t) {
                    var r = 1 - e;
                    return r * r * r * t }, b3p1: function(e, t) {
                    var r = 1 - e;
                    return 3 * r * r * e * t }, b3p2: function(e, t) {
                    var r = 1 - e;
                    return 3 * r * e * e * t }, b3p3: function(e, t) {
                    return e * e * e * t }, b3: function(e, t, r, i, n) {
                    return this.b3p0(e, t) + this.b3p1(e, r) + this.b3p2(e, i) + this.b3p3(e, n) } }, n.LineCurve = function(e, t) { this.v1 = e, this.v2 = t }, n.LineCurve.prototype = Object.create(n.Curve.prototype), n.LineCurve.prototype.constructor = n.LineCurve, n.LineCurve.prototype.getPoint = function(e) {
                var t = this.v2.clone().sub(this.v1);
                return t.multiplyScalar(e).add(this.v1), t }, n.LineCurve.prototype.getPointAt = function(e) {
                return this.getPoint(e) }, n.LineCurve.prototype.getTangent = function() {
                var e = this.v2.clone().sub(this.v1);
                return e.normalize() }, n.QuadraticBezierCurve = function(e, t, r) { this.v0 = e, this.v1 = t, this.v2 = r }, n.QuadraticBezierCurve.prototype = Object.create(n.Curve.prototype), n.QuadraticBezierCurve.prototype.constructor = n.QuadraticBezierCurve, n.QuadraticBezierCurve.prototype.getPoint = function(e) {
                var t = new n.Vector2;
                return t.x = n.Shape.Utils.b2(e, this.v0.x, this.v1.x, this.v2.x), t.y = n.Shape.Utils.b2(e, this.v0.y, this.v1.y, this.v2.y), t }, n.QuadraticBezierCurve.prototype.getTangent = function(e) {
                var t = new n.Vector2;
                return t.x = n.Curve.Utils.tangentQuadraticBezier(e, this.v0.x, this.v1.x, this.v2.x), t.y = n.Curve.Utils.tangentQuadraticBezier(e, this.v0.y, this.v1.y, this.v2.y), t.normalize() }, n.CubicBezierCurve = function(e, t, r, i) { this.v0 = e, this.v1 = t, this.v2 = r, this.v3 = i }, n.CubicBezierCurve.prototype = Object.create(n.Curve.prototype), n.CubicBezierCurve.prototype.constructor = n.CubicBezierCurve, n.CubicBezierCurve.prototype.getPoint = function(e) {
                var t, r;
                return t = n.Shape.Utils.b3(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), r = n.Shape.Utils.b3(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y), new n.Vector2(t, r) }, n.CubicBezierCurve.prototype.getTangent = function(e) {
                var t, r;
                t = n.Curve.Utils.tangentCubicBezier(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), r = n.Curve.Utils.tangentCubicBezier(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
                var i = new n.Vector2(t, r);
                return i.normalize(), i }, n.SplineCurve = function(e) { this.points = void 0 == e ? [] : e }, n.SplineCurve.prototype = Object.create(n.Curve.prototype), n.SplineCurve.prototype.constructor = n.SplineCurve, n.SplineCurve.prototype.getPoint = function(e) {
                var t = this.points,
                    r = (t.length - 1) * e,
                    i = Math.floor(r),
                    o = r - i,
                    a = t[0 == i ? i : i - 1],
                    s = t[i],
                    h = t[i > t.length - 2 ? t.length - 1 : i + 1],
                    l = t[i > t.length - 3 ? t.length - 1 : i + 2],
                    c = new n.Vector2;
                return c.x = n.Curve.Utils.interpolate(a.x, s.x, h.x, l.x, o), c.y = n.Curve.Utils.interpolate(a.y, s.y, h.y, l.y, o), c }, n.EllipseCurve = function(e, t, r, i, n, o, a) { this.aX = e, this.aY = t, this.xRadius = r, this.yRadius = i, this.aStartAngle = n, this.aEndAngle = o, this.aClockwise = a }, n.EllipseCurve.prototype = Object.create(n.Curve.prototype), n.EllipseCurve.prototype.constructor = n.EllipseCurve, n.EllipseCurve.prototype.getPoint = function(e) {
                var t = this.aEndAngle - this.aStartAngle;
                0 > t && (t += 2 * Math.PI), t > 2 * Math.PI && (t -= 2 * Math.PI);
                var r;
                r = this.aClockwise === !0 ? this.aEndAngle + (1 - e) * (2 * Math.PI - t) : this.aStartAngle + e * t;
                var i = new n.Vector2;
                return i.x = this.aX + this.xRadius * Math.cos(r), i.y = this.aY + this.yRadius * Math.sin(r), i }, n.ArcCurve = function(e, t, r, i, o, a) { n.EllipseCurve.call(this, e, t, r, r, i, o, a) }, n.ArcCurve.prototype = Object.create(n.EllipseCurve.prototype), n.ArcCurve.prototype.constructor = n.ArcCurve, n.LineCurve3 = n.Curve.create(function(e, t) { this.v1 = e, this.v2 = t }, function(e) {
                var t = new n.Vector3;
                return t.subVectors(this.v2, this.v1), t.multiplyScalar(e), t.add(this.v1), t }), n.QuadraticBezierCurve3 = n.Curve.create(function(e, t, r) { this.v0 = e, this.v1 = t, this.v2 = r }, function(e) {
                var t = new n.Vector3;
                return t.x = n.Shape.Utils.b2(e, this.v0.x, this.v1.x, this.v2.x), t.y = n.Shape.Utils.b2(e, this.v0.y, this.v1.y, this.v2.y), t.z = n.Shape.Utils.b2(e, this.v0.z, this.v1.z, this.v2.z), t }), n.CubicBezierCurve3 = n.Curve.create(function(e, t, r, i) { this.v0 = e, this.v1 = t, this.v2 = r, this.v3 = i }, function(e) {
                var t = new n.Vector3;
                return t.x = n.Shape.Utils.b3(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t.y = n.Shape.Utils.b3(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y), t.z = n.Shape.Utils.b3(e, this.v0.z, this.v1.z, this.v2.z, this.v3.z), t }), n.SplineCurve3 = n.Curve.create(function(e) { this.points = void 0 == e ? [] : e }, function(e) {
                var t = this.points,
                    r = (t.length - 1) * e,
                    i = Math.floor(r),
                    o = r - i,
                    a = t[0 == i ? i : i - 1],
                    s = t[i],
                    h = t[i > t.length - 2 ? t.length - 1 : i + 1],
                    l = t[i > t.length - 3 ? t.length - 1 : i + 2],
                    c = new n.Vector3;
                return c.x = n.Curve.Utils.interpolate(a.x, s.x, h.x, l.x, o), c.y = n.Curve.Utils.interpolate(a.y, s.y, h.y, l.y, o), c.z = n.Curve.Utils.interpolate(a.z, s.z, h.z, l.z, o), c }), n.ClosedSplineCurve3 = n.Curve.create(function(e) { this.points = void 0 == e ? [] : e }, function(e) {
                var t = this.points,
                    r = (t.length - 0) * e,
                    i = Math.floor(r),
                    o = r - i;
                i += i > 0 ? 0 : (Math.floor(Math.abs(i) / t.length) + 1) * t.length;
                var a = t[(i - 1) % t.length],
                    s = t[i % t.length],
                    h = t[(i + 1) % t.length],
                    l = t[(i + 2) % t.length],
                    c = new n.Vector3;
                return c.x = n.Curve.Utils.interpolate(a.x, s.x, h.x, l.x, o), c.y = n.Curve.Utils.interpolate(a.y, s.y, h.y, l.y, o), c.z = n.Curve.Utils.interpolate(a.z, s.z, h.z, l.z, o), c }), n.AnimationHandler = { LINEAR: 0, CATMULLROM: 1, CATMULLROM_FORWARD: 2, add: function() { console.warn("THREE.AnimationHandler.add() has been deprecated.") }, get: function() { console.warn("THREE.AnimationHandler.get() has been deprecated.") }, remove: function() { console.warn("THREE.AnimationHandler.remove() has been deprecated.") }, animations: [], init: function(e) {
                    if (e.initialized === !0) return e;
                    for (var t = 0; t < e.hierarchy.length; t++) {
                        for (var r = 0; r < e.hierarchy[t].keys.length; r++)
                            if (e.hierarchy[t].keys[r].time < 0 && (e.hierarchy[t].keys[r].time = 0), void 0 !== e.hierarchy[t].keys[r].rot && !(e.hierarchy[t].keys[r].rot instanceof n.Quaternion)) {
                                var i = e.hierarchy[t].keys[r].rot;
                                e.hierarchy[t].keys[r].rot = (new n.Quaternion).fromArray(i) }
                        if (e.hierarchy[t].keys.length && void 0 !== e.hierarchy[t].keys[0].morphTargets) {
                            for (var o = {}, r = 0; r < e.hierarchy[t].keys.length; r++)
                                for (var a = 0; a < e.hierarchy[t].keys[r].morphTargets.length; a++) {
                                    var s = e.hierarchy[t].keys[r].morphTargets[a];
                                    o[s] = -1 }
                            e.hierarchy[t].usedMorphTargets = o;
                            for (var r = 0; r < e.hierarchy[t].keys.length; r++) {
                                var h = {};
                                for (var s in o) {
                                    for (var a = 0; a < e.hierarchy[t].keys[r].morphTargets.length; a++)
                                        if (e.hierarchy[t].keys[r].morphTargets[a] === s) { h[s] = e.hierarchy[t].keys[r].morphTargetsInfluences[a];
                                            break }
                                    a === e.hierarchy[t].keys[r].morphTargets.length && (h[s] = 0) }
                                e.hierarchy[t].keys[r].morphTargetsInfluences = h } }
                        for (var r = 1; r < e.hierarchy[t].keys.length; r++) e.hierarchy[t].keys[r].time === e.hierarchy[t].keys[r - 1].time && (e.hierarchy[t].keys.splice(r, 1), r--);
                        for (var r = 0; r < e.hierarchy[t].keys.length; r++) e.hierarchy[t].keys[r].index = r }
                    return e.initialized = !0, e }, parse: function(e) {
                    var t = function(e, r) { r.push(e);
                            for (var i = 0; i < e.children.length; i++) t(e.children[i], r) },
                        r = [];
                    if (e instanceof n.SkinnedMesh)
                        for (var i = 0; i < e.skeleton.bones.length; i++) r.push(e.skeleton.bones[i]);
                    else t(e, r);
                    return r }, play: function(e) {-1 === this.animations.indexOf(e) && this.animations.push(e) }, stop: function(e) {
                    var t = this.animations.indexOf(e); - 1 !== t && this.animations.splice(t, 1) }, update: function(e) {
                    for (var t = 0; t < this.animations.length; t++) this.animations[t].resetBlendWeights();
                    for (var t = 0; t < this.animations.length; t++) this.animations[t].update(e) } }, n.Animation = function(e, t) { this.root = e, this.data = n.AnimationHandler.init(t), this.hierarchy = n.AnimationHandler.parse(e), this.currentTime = 0, this.timeScale = 1, this.isPlaying = !1, this.loop = !0, this.weight = 0, this.interpolationType = n.AnimationHandler.LINEAR }, n.Animation.prototype.keyTypes = ["pos", "rot", "scl"], n.Animation.prototype.play = function(e, t) { this.currentTime = void 0 !== e ? e : 0, this.weight = void 0 !== t ? t : 1, this.isPlaying = !0, this.reset(), n.AnimationHandler.play(this) }, n.Animation.prototype.stop = function() { this.isPlaying = !1, n.AnimationHandler.stop(this) }, n.Animation.prototype.reset = function() {
                for (var e = 0, t = this.hierarchy.length; t > e; e++) {
                    var r = this.hierarchy[e];
                    void 0 === r.animationCache && (r.animationCache = { animations: {}, blending: { positionWeight: 0, quaternionWeight: 0, scaleWeight: 0 } }), void 0 === r.animationCache.animations[this.data.name] && (r.animationCache.animations[this.data.name] = {}, r.animationCache.animations[this.data.name].prevKey = { pos: 0, rot: 0, scl: 0 }, r.animationCache.animations[this.data.name].nextKey = { pos: 0, rot: 0, scl: 0 }, r.animationCache.animations[this.data.name].originalMatrix = r.matrix);
                    for (var i = r.animationCache.animations[this.data.name], n = 0; 3 > n; n++) {
                        for (var o = this.keyTypes[n], a = this.data.hierarchy[e].keys[0], s = this.getNextKeyWith(o, e, 1); s.time < this.currentTime && s.index > a.index;) a = s, s = this.getNextKeyWith(o, e, s.index + 1);
                        i.prevKey[o] = a, i.nextKey[o] = s } } }, n.Animation.prototype.resetBlendWeights = function() {
                for (var e = 0, t = this.hierarchy.length; t > e; e++) {
                    var r = this.hierarchy[e];
                    void 0 !== r.animationCache && (r.animationCache.blending.positionWeight = 0, r.animationCache.blending.quaternionWeight = 0, r.animationCache.blending.scaleWeight = 0) } }, n.Animation.prototype.update = function() {
                var e = [],
                    t = new n.Vector3,
                    r = new n.Vector3,
                    i = new n.Quaternion,
                    o = function(e, t) {
                        var r, i, n, o, s, h, l, c, u, p = [],
                            f = [];
                        return r = (e.length - 1) * t, i = Math.floor(r), n = r - i, p[0] = 0 === i ? i : i - 1, p[1] = i, p[2] = i > e.length - 2 ? i : i + 1, p[3] = i > e.length - 3 ? i : i + 2, h = e[p[0]], l = e[p[1]], c = e[p[2]], u = e[p[3]], o = n * n, s = n * o, f[0] = a(h[0], l[0], c[0], u[0], n, o, s), f[1] = a(h[1], l[1], c[1], u[1], n, o, s), f[2] = a(h[2], l[2], c[2], u[2], n, o, s), f },
                    a = function(e, t, r, i, n, o, a) {
                        var s = .5 * (r - e),
                            h = .5 * (i - t);
                        return (2 * (t - r) + s + h) * a + (-3 * (t - r) - 2 * s - h) * o + s * n + t };
                return function(a) {
                    if (this.isPlaying !== !1 && (this.currentTime += a * this.timeScale, 0 !== this.weight)) {
                        var s = this.data.length;
                        (this.currentTime > s || this.currentTime < 0) && (this.loop ? (this.currentTime %= s, this.currentTime < 0 && (this.currentTime += s), this.reset()) : this.stop());
                        for (var h = 0, l = this.hierarchy.length; l > h; h++)
                            for (var c = this.hierarchy[h], u = c.animationCache.animations[this.data.name], p = c.animationCache.blending, f = 0; 3 > f; f++) {
                                var d = this.keyTypes[f],
                                    m = u.prevKey[d],
                                    g = u.nextKey[d];
                                if (this.timeScale > 0 && g.time <= this.currentTime || this.timeScale < 0 && m.time >= this.currentTime) {
                                    for (m = this.data.hierarchy[h].keys[0], g = this.getNextKeyWith(d, h, 1); g.time < this.currentTime && g.index > m.index;) m = g, g = this.getNextKeyWith(d, h, g.index + 1);
                                    u.prevKey[d] = m, u.nextKey[d] = g }
                                var v = (this.currentTime - m.time) / (g.time - m.time),
                                    y = m[d],
                                    x = g[d];
                                if (0 > v && (v = 0), v > 1 && (v = 1), "pos" === d) {
                                    if (this.interpolationType === n.AnimationHandler.LINEAR) { r.x = y[0] + (x[0] - y[0]) * v, r.y = y[1] + (x[1] - y[1]) * v, r.z = y[2] + (x[2] - y[2]) * v;
                                        var b = this.weight / (this.weight + p.positionWeight);
                                        c.position.lerp(r, b), p.positionWeight += this.weight } else if (this.interpolationType === n.AnimationHandler.CATMULLROM || this.interpolationType === n.AnimationHandler.CATMULLROM_FORWARD) { e[0] = this.getPrevKeyWith("pos", h, m.index - 1).pos, e[1] = y, e[2] = x, e[3] = this.getNextKeyWith("pos", h, g.index + 1).pos, v = .33 * v + .33;
                                        var w = o(e, v),
                                            b = this.weight / (this.weight + p.positionWeight);
                                        p.positionWeight += this.weight;
                                        var _ = c.position;
                                        if (_.x = _.x + (w[0] - _.x) * b, _.y = _.y + (w[1] - _.y) * b, _.z = _.z + (w[2] - _.z) * b, this.interpolationType === n.AnimationHandler.CATMULLROM_FORWARD) {
                                            var M = o(e, 1.01 * v);
                                            t.set(M[0], M[1], M[2]), t.sub(_), t.y = 0, t.normalize();
                                            var S = Math.atan2(t.x, t.z);
                                            c.rotation.set(0, S, 0) } } } else if ("rot" === d)
                                    if (n.Quaternion.slerp(y, x, i, v), 0 === p.quaternionWeight) c.quaternion.copy(i), p.quaternionWeight = this.weight;
                                    else {
                                        var b = this.weight / (this.weight + p.quaternionWeight);
                                        n.Quaternion.slerp(c.quaternion, i, c.quaternion, b), p.quaternionWeight += this.weight }
                                else if ("scl" === d) { r.x = y[0] + (x[0] - y[0]) * v, r.y = y[1] + (x[1] - y[1]) * v, r.z = y[2] + (x[2] - y[2]) * v;
                                    var b = this.weight / (this.weight + p.scaleWeight);
                                    c.scale.lerp(r, b), p.scaleWeight += this.weight } }
                        return !0 } } }(), n.Animation.prototype.getNextKeyWith = function(e, t, r) {
                var i = this.data.hierarchy[t].keys;
                for (this.interpolationType === n.AnimationHandler.CATMULLROM || this.interpolationType === n.AnimationHandler.CATMULLROM_FORWARD ? r = r < i.length - 1 ? r : i.length - 1 : r %= i.length; r < i.length; r++)
                    if (void 0 !== i[r][e]) return i[r];
                return this.data.hierarchy[t].keys[0] }, n.Animation.prototype.getPrevKeyWith = function(e, t, r) {
                var i = this.data.hierarchy[t].keys;
                for (r = this.interpolationType === n.AnimationHandler.CATMULLROM || this.interpolationType === n.AnimationHandler.CATMULLROM_FORWARD ? r > 0 ? r : 0 : r >= 0 ? r : r + i.length; r >= 0; r--)
                    if (void 0 !== i[r][e]) return i[r];
                return this.data.hierarchy[t].keys[i.length - 1] }, n.KeyFrameAnimation = function(e) { this.root = e.node, this.data = n.AnimationHandler.init(e), this.hierarchy = n.AnimationHandler.parse(this.root), this.currentTime = 0, this.timeScale = .001, this.isPlaying = !1, this.isPaused = !0, this.loop = !0;
                for (var t = 0, r = this.hierarchy.length; r > t; t++) {
                    var i = this.data.hierarchy[t].keys,
                        o = this.data.hierarchy[t].sids,
                        a = this.hierarchy[t];
                    if (i.length && o) {
                        for (var s = 0; s < o.length; s++) {
                            var h = o[s],
                                l = this.getNextKeyWith(h, t, 0);
                            l && l.apply(h) }
                        a.matrixAutoUpdate = !1, this.data.hierarchy[t].node.updateMatrix(), a.matrixWorldNeedsUpdate = !0 } } }, n.KeyFrameAnimation.prototype.play = function(e) {
                if (this.currentTime = void 0 !== e ? e : 0, this.isPlaying === !1) { this.isPlaying = !0;
                    var t, r, i, o = this.hierarchy.length;
                    for (t = 0; o > t; t++) { r = this.hierarchy[t], i = this.data.hierarchy[t], void 0 === i.animationCache && (i.animationCache = {}, i.animationCache.prevKey = null, i.animationCache.nextKey = null, i.animationCache.originalMatrix = r.matrix);
                        var a = this.data.hierarchy[t].keys;
                        a.length && (i.animationCache.prevKey = a[0], i.animationCache.nextKey = a[1], this.startTime = Math.min(a[0].time, this.startTime), this.endTime = Math.max(a[a.length - 1].time, this.endTime)) }
                    this.update(0) }
                this.isPaused = !1, n.AnimationHandler.play(this) }, n.KeyFrameAnimation.prototype.stop = function() { this.isPlaying = !1, this.isPaused = !1, n.AnimationHandler.stop(this);
                for (var e = 0; e < this.data.hierarchy.length; e++) {
                    var t = this.hierarchy[e],
                        r = this.data.hierarchy[e];
                    if (void 0 !== r.animationCache) {
                        var i = r.animationCache.originalMatrix;
                        i.copy(t.matrix), t.matrix = i, delete r.animationCache } } }, n.KeyFrameAnimation.prototype.update = function(e) {
                if (this.isPlaying !== !1) { this.currentTime += e * this.timeScale;
                    var t = this.data.length;
                    this.loop === !0 && this.currentTime > t && (this.currentTime %= t), this.currentTime = Math.min(this.currentTime, t);
                    for (var r = 0, i = this.hierarchy.length; i > r; r++) {
                        var n = this.hierarchy[r],
                            o = this.data.hierarchy[r],
                            a = o.keys,
                            s = o.animationCache;
                        if (a.length) {
                            var h = s.prevKey,
                                l = s.nextKey;
                            if (l.time <= this.currentTime) {
                                for (; l.time < this.currentTime && l.index > h.index;) h = l, l = a[h.index + 1];
                                s.prevKey = h, s.nextKey = l }
                            l.time >= this.currentTime ? h.interpolate(l, this.currentTime) : h.interpolate(l, l.time), this.data.hierarchy[r].node.updateMatrix(), n.matrixWorldNeedsUpdate = !0 } } } }, n.KeyFrameAnimation.prototype.getNextKeyWith = function(e, t, r) {
                var i = this.data.hierarchy[t].keys;
                for (r %= i.length; r < i.length; r++)
                    if (i[r].hasTarget(e)) return i[r];
                return i[0] }, n.KeyFrameAnimation.prototype.getPrevKeyWith = function(e, t, r) {
                var i = this.data.hierarchy[t].keys;
                for (r = r >= 0 ? r : r + i.length; r >= 0; r--)
                    if (i[r].hasTarget(e)) return i[r];
                return i[i.length - 1] }, n.MorphAnimation = function(e) { this.mesh = e, this.frames = e.morphTargetInfluences.length, this.currentTime = 0, this.duration = 1e3, this.loop = !0, this.lastFrame = 0, this.currentFrame = 0, this.isPlaying = !1 }, n.MorphAnimation.prototype = { constructor: n.MorphAnimation, play: function() { this.isPlaying = !0 }, pause: function() { this.isPlaying = !1 }, update: function(e) {
                    if (this.isPlaying !== !1) { this.currentTime += e, this.loop === !0 && this.currentTime > this.duration && (this.currentTime %= this.duration), this.currentTime = Math.min(this.currentTime, this.duration);
                        var t = this.duration / this.frames,
                            r = Math.floor(this.currentTime / t);
                        r != this.currentFrame && (this.mesh.morphTargetInfluences[this.lastFrame] = 0, this.mesh.morphTargetInfluences[this.currentFrame] = 1, this.mesh.morphTargetInfluences[r] = 0, this.lastFrame = this.currentFrame, this.currentFrame = r), this.mesh.morphTargetInfluences[r] = this.currentTime % t / t, this.mesh.morphTargetInfluences[this.lastFrame] = 1 - this.mesh.morphTargetInfluences[r] } } }, n.BoxGeometry = function(e, t, r, i, o, a) {
                function s(e, t, r, i, o, a, s, l) {
                    var c, u, p, f = h.widthSegments,
                        d = h.heightSegments,
                        m = o / 2,
                        g = a / 2,
                        v = h.vertices.length; "x" === e && "y" === t || "y" === e && "x" === t ? c = "z" : "x" === e && "z" === t || "z" === e && "x" === t ? (c = "y", d = h.depthSegments) : ("z" === e && "y" === t || "y" === e && "z" === t) && (c = "x", f = h.depthSegments);
                    var y = f + 1,
                        x = d + 1,
                        b = o / f,
                        w = a / d,
                        _ = new n.Vector3;
                    for (_[c] = s > 0 ? 1 : -1, p = 0; x > p; p++)
                        for (u = 0; y > u; u++) {
                            var M = new n.Vector3;
                            M[e] = (u * b - m) * r, M[t] = (p * w - g) * i, M[c] = s, h.vertices.push(M) }
                    for (p = 0; d > p; p++)
                        for (u = 0; f > u; u++) {
                            var S = u + y * p,
                                T = u + y * (p + 1),
                                C = u + 1 + y * (p + 1),
                                E = u + 1 + y * p,
                                A = new n.Vector2(u / f, 1 - p / d),
                                L = new n.Vector2(u / f, 1 - (p + 1) / d),
                                P = new n.Vector2((u + 1) / f, 1 - (p + 1) / d),
                                R = new n.Vector2((u + 1) / f, 1 - p / d),
                                F = new n.Face3(S + v, T + v, E + v);
                            F.normal.copy(_), F.vertexNormals.push(_.clone(), _.clone(), _.clone()), F.materialIndex = l, h.faces.push(F), h.faceVertexUvs[0].push([A, L, R]), F = new n.Face3(T + v, C + v, E + v), F.normal.copy(_), F.vertexNormals.push(_.clone(), _.clone(), _.clone()), F.materialIndex = l, h.faces.push(F), h.faceVertexUvs[0].push([L.clone(), P, R.clone()]) } }
                n.Geometry.call(this), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: r, widthSegments: i, heightSegments: o, depthSegments: a }, this.widthSegments = i || 1, this.heightSegments = o || 1, this.depthSegments = a || 1;
                var h = this,
                    l = e / 2,
                    c = t / 2,
                    u = r / 2;
                s("z", "y", -1, -1, r, t, l, 0), s("z", "y", 1, -1, r, t, -l, 1), s("x", "z", 1, 1, e, r, c, 2), s("x", "z", 1, -1, e, r, -c, 3), s("x", "y", 1, -1, e, t, u, 4), s("x", "y", -1, -1, e, t, -u, 5), this.mergeVertices() }, n.BoxGeometry.prototype = Object.create(n.Geometry.prototype), n.BoxGeometry.prototype.constructor = n.BoxGeometry, n.CircleGeometry = function(e, t, r, i) { n.Geometry.call(this), this.type = "CircleGeometry", this.parameters = { radius: e, segments: t, thetaStart: r, thetaLength: i }, e = e || 50, t = void 0 !== t ? Math.max(3, t) : 8, r = void 0 !== r ? r : 0, i = void 0 !== i ? i : 2 * Math.PI;
                var o, a = [],
                    s = new n.Vector3,
                    h = new n.Vector2(.5, .5);
                for (this.vertices.push(s), a.push(h), o = 0; t >= o; o++) {
                    var l = new n.Vector3,
                        c = r + o / t * i;
                    l.x = e * Math.cos(c), l.y = e * Math.sin(c), this.vertices.push(l), a.push(new n.Vector2((l.x / e + 1) / 2, (l.y / e + 1) / 2)) }
                var u = new n.Vector3(0, 0, 1);
                for (o = 1; t >= o; o++) this.faces.push(new n.Face3(o, o + 1, 0, [u.clone(), u.clone(), u.clone()])), this.faceVertexUvs[0].push([a[o].clone(), a[o + 1].clone(), h.clone()]);
                this.computeFaceNormals(), this.boundingSphere = new n.Sphere(new n.Vector3, e) }, n.CircleGeometry.prototype = Object.create(n.Geometry.prototype), n.CircleGeometry.prototype.constructor = n.CircleGeometry, n.CubeGeometry = function(e, t, r, i, o, a) {
                return console.warn("THREE.CubeGeometry has been renamed to THREE.BoxGeometry."), new n.BoxGeometry(e, t, r, i, o, a) }, n.CylinderGeometry = function(e, t, r, i, o, a, s, h) { n.Geometry.call(this), this.type = "CylinderGeometry", this.parameters = { radiusTop: e, radiusBottom: t, height: r, radialSegments: i, heightSegments: o, openEnded: a, thetaStart: s, thetaLength: h }, e = void 0 !== e ? e : 20, t = void 0 !== t ? t : 20, r = void 0 !== r ? r : 100, i = i || 8, o = o || 1, a = void 0 !== a ? a : !1, s = void 0 !== s ? s : 0, h = void 0 !== h ? h : 2 * Math.PI;
                var l, c, u = r / 2,
                    p = [],
                    f = [];
                for (c = 0; o >= c; c++) {
                    var d = [],
                        m = [],
                        g = c / o,
                        v = g * (t - e) + e;
                    for (l = 0; i >= l; l++) {
                        var y = l / i,
                            x = new n.Vector3;
                        x.x = v * Math.sin(y * h + s), x.y = -g * r + u, x.z = v * Math.cos(y * h + s), this.vertices.push(x), d.push(this.vertices.length - 1), m.push(new n.Vector2(y, 1 - g)) }
                    p.push(d), f.push(m) }
                var b, w, _ = (t - e) / r;
                for (l = 0; i > l; l++)
                    for (0 !== e ? (b = this.vertices[p[0][l]].clone(), w = this.vertices[p[0][l + 1]].clone()) : (b = this.vertices[p[1][l]].clone(), w = this.vertices[p[1][l + 1]].clone()), b.setY(Math.sqrt(b.x * b.x + b.z * b.z) * _).normalize(), w.setY(Math.sqrt(w.x * w.x + w.z * w.z) * _).normalize(), c = 0; o > c; c++) {
                        var M = p[c][l],
                            S = p[c + 1][l],
                            T = p[c + 1][l + 1],
                            C = p[c][l + 1],
                            E = b.clone(),
                            A = b.clone(),
                            L = w.clone(),
                            P = w.clone(),
                            R = f[c][l].clone(),
                            F = f[c + 1][l].clone(),
                            B = f[c + 1][l + 1].clone(),
                            U = f[c][l + 1].clone();
                        this.faces.push(new n.Face3(M, S, C, [E, A, P])), this.faceVertexUvs[0].push([R, F, U]), this.faces.push(new n.Face3(S, T, C, [A.clone(), L, P.clone()])), this.faceVertexUvs[0].push([F.clone(), B, U.clone()]) }
                if (a === !1 && e > 0)
                    for (this.vertices.push(new n.Vector3(0, u, 0)), l = 0; i > l; l++) {
                        var M = p[0][l],
                            S = p[0][l + 1],
                            T = this.vertices.length - 1,
                            E = new n.Vector3(0, 1, 0),
                            A = new n.Vector3(0, 1, 0),
                            L = new n.Vector3(0, 1, 0),
                            R = f[0][l].clone(),
                            F = f[0][l + 1].clone(),
                            B = new n.Vector2(F.x, 0);
                        this.faces.push(new n.Face3(M, S, T, [E, A, L])), this.faceVertexUvs[0].push([R, F, B]) }
                if (a === !1 && t > 0)
                    for (this.vertices.push(new n.Vector3(0, -u, 0)), l = 0; i > l; l++) {
                        var M = p[o][l + 1],
                            S = p[o][l],
                            T = this.vertices.length - 1,
                            E = new n.Vector3(0, -1, 0),
                            A = new n.Vector3(0, -1, 0),
                            L = new n.Vector3(0, -1, 0),
                            R = f[o][l + 1].clone(),
                            F = f[o][l].clone(),
                            B = new n.Vector2(F.x, 1);
                        this.faces.push(new n.Face3(M, S, T, [E, A, L])), this.faceVertexUvs[0].push([R, F, B]) }
                this.computeFaceNormals() }, n.CylinderGeometry.prototype = Object.create(n.Geometry.prototype), n.CylinderGeometry.prototype.constructor = n.CylinderGeometry, n.ExtrudeGeometry = function(e, t) {
                return "undefined" == typeof e ? (e = [], void 0) : (n.Geometry.call(this), this.type = "ExtrudeGeometry", e = e instanceof Array ? e : [e], this.addShapeList(e, t), this.computeFaceNormals(), void 0) }, n.ExtrudeGeometry.prototype = Object.create(n.Geometry.prototype), n.ExtrudeGeometry.prototype.constructor = n.ExtrudeGeometry, n.ExtrudeGeometry.prototype.addShapeList = function(e, t) {
                for (var r = e.length, i = 0; r > i; i++) {
                    var n = e[i];
                    this.addShape(n, t) } }, n.ExtrudeGeometry.prototype.addShape = function(e, t) {
                function r(e, t, r) {
                    return t || console.log("die"), t.clone().multiplyScalar(r).add(e) }

                function i(e, t, r) {
                    var i, o, a = 1e-10,
                        s = 1,
                        h = e.x - t.x,
                        l = e.y - t.y,
                        c = r.x - e.x,
                        u = r.y - e.y,
                        p = h * h + l * l,
                        f = h * u - l * c;
                    if (Math.abs(f) > a) {
                        var d = Math.sqrt(p),
                            m = Math.sqrt(c * c + u * u),
                            g = t.x - l / d,
                            v = t.y + h / d,
                            y = r.x - u / m,
                            x = r.y + c / m,
                            b = ((y - g) * u - (x - v) * c) / (h * u - l * c);
                        i = g + h * b - e.x, o = v + l * b - e.y;
                        var w = i * i + o * o;
                        if (2 >= w) return new n.Vector2(i, o);
                        s = Math.sqrt(w / 2) } else {
                        var _ = !1;
                        h > a ? c > a && (_ = !0) : -a > h ? -a > c && (_ = !0) : Math.sign(l) == Math.sign(u) && (_ = !0), _ ? (i = -l, o = h, s = Math.sqrt(p)) : (i = h, o = l, s = Math.sqrt(p / 2)) }
                    return new n.Vector2(i / s, o / s) }

                function o() {
                    if (b) {
                        var e = 0,
                            t = j * e;
                        for (Y = 0; X > Y; Y++) W = z[Y], l(W[2] + t, W[1] + t, W[0] + t);
                        for (e = _ + 2 * x, t = j * e, Y = 0; X > Y; Y++) W = z[Y], l(W[0] + t, W[1] + t, W[2] + t) } else {
                        for (Y = 0; X > Y; Y++) W = z[Y], l(W[2], W[1], W[0]);
                        for (Y = 0; X > Y; Y++) W = z[Y], l(W[0] + j * _, W[1] + j * _, W[2] + j * _) } }

                function a() {
                    var e = 0;
                    for (s(k, e), e += k.length, L = 0, P = D.length; P > L; L++) A = D[L], s(A, e), e += A.length }

                function s(e, t) {
                    var r, i;
                    for (Y = e.length; --Y >= 0;) { r = Y, i = Y - 1, 0 > i && (i = e.length - 1);
                        var n = 0,
                            o = _ + 2 * x;
                        for (n = 0; o > n; n++) {
                            var a = j * n,
                                s = j * (n + 1),
                                h = t + r + a,
                                l = t + i + a,
                                u = t + i + s,
                                p = t + r + s;
                            c(h, l, u, p, e, n, o, r, i) } } }

                function h(e, t, r) { R.vertices.push(new n.Vector3(e, t, r)) }

                function l(e, t, r) { e += F, t += F, r += F, R.faces.push(new n.Face3(e, t, r, null, null, T));
                    var i = E.generateTopUV(R, e, t, r);
                    R.faceVertexUvs[0].push(i) }

                function c(e, t, r, i) { e += F, t += F, r += F, i += F, R.faces.push(new n.Face3(e, t, i, null, null, C)), R.faces.push(new n.Face3(t, r, i, null, null, C));
                    var o = E.generateSideWallUV(R, e, t, r, i);
                    R.faceVertexUvs[0].push([o[0], o[1], o[3]]), R.faceVertexUvs[0].push([o[1], o[2], o[3]]) }
                var u, p, f, d, m, g = void 0 !== t.amount ? t.amount : 100,
                    v = void 0 !== t.bevelThickness ? t.bevelThickness : 6,
                    y = void 0 !== t.bevelSize ? t.bevelSize : v - 2,
                    x = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
                    b = void 0 !== t.bevelEnabled ? t.bevelEnabled : !0,
                    w = void 0 !== t.curveSegments ? t.curveSegments : 12,
                    _ = void 0 !== t.steps ? t.steps : 1,
                    M = t.extrudePath,
                    S = !1,
                    T = t.material,
                    C = t.extrudeMaterial,
                    E = void 0 !== t.UVGenerator ? t.UVGenerator : n.ExtrudeGeometry.WorldUVGenerator;
                M && (u = M.getSpacedPoints(_), S = !0, b = !1, p = void 0 !== t.frames ? t.frames : new n.TubeGeometry.FrenetFrames(M, _, !1), f = new n.Vector3, d = new n.Vector3, m = new n.Vector3), b || (x = 0, v = 0, y = 0);
                var A, L, P, R = this,
                    F = this.vertices.length,
                    B = e.extractPoints(w),
                    U = B.shape,
                    D = B.holes,
                    V = !n.Shape.Utils.isClockWise(U);
                if (V) {
                    for (U = U.reverse(), L = 0, P = D.length; P > L; L++) A = D[L], n.Shape.Utils.isClockWise(A) && (D[L] = A.reverse());
                    V = !1 }
                var z = n.Shape.Utils.triangulateShape(U, D),
                    k = U;
                for (L = 0, P = D.length; P > L; L++) A = D[L], U = U.concat(A);
                for (var N, O, G, I, H, W, j = U.length, X = z.length, q = (k.length, 180 / Math.PI, []), Y = 0, K = k.length, Q = K - 1, Z = Y + 1; K > Y; Y++, Q++, Z++) { Q === K && (Q = 0), Z === K && (Z = 0); { k[Y], k[Q], k[Z] }
                    q[Y] = i(k[Y], k[Q], k[Z]) }
                var J, $ = [],
                    et = q.concat();
                for (L = 0, P = D.length; P > L; L++) {
                    for (A = D[L], J = [], Y = 0, K = A.length, Q = K - 1, Z = Y + 1; K > Y; Y++, Q++, Z++) Q === K && (Q = 0), Z === K && (Z = 0), J[Y] = i(A[Y], A[Q], A[Z]);
                    $.push(J), et = et.concat(J) }
                for (N = 0; x > N; N++) {
                    for (G = N / x, I = v * (1 - G), O = y * Math.sin(G * Math.PI / 2), Y = 0, K = k.length; K > Y; Y++) H = r(k[Y], q[Y], O), h(H.x, H.y, -I);
                    for (L = 0, P = D.length; P > L; L++)
                        for (A = D[L], J = $[L], Y = 0, K = A.length; K > Y; Y++) H = r(A[Y], J[Y], O), h(H.x, H.y, -I) }
                for (O = y, Y = 0; j > Y; Y++) H = b ? r(U[Y], et[Y], O) : U[Y], S ? (d.copy(p.normals[0]).multiplyScalar(H.x), f.copy(p.binormals[0]).multiplyScalar(H.y), m.copy(u[0]).add(d).add(f), h(m.x, m.y, m.z)) : h(H.x, H.y, 0);
                var tt;
                for (tt = 1; _ >= tt; tt++)
                    for (Y = 0; j > Y; Y++) H = b ? r(U[Y], et[Y], O) : U[Y], S ? (d.copy(p.normals[tt]).multiplyScalar(H.x), f.copy(p.binormals[tt]).multiplyScalar(H.y), m.copy(u[tt]).add(d).add(f), h(m.x, m.y, m.z)) : h(H.x, H.y, g / _ * tt);
                for (N = x - 1; N >= 0; N--) {
                    for (G = N / x, I = v * (1 - G), O = y * Math.sin(G * Math.PI / 2), Y = 0, K = k.length; K > Y; Y++) H = r(k[Y], q[Y], O), h(H.x, H.y, g + I);
                    for (L = 0, P = D.length; P > L; L++)
                        for (A = D[L], J = $[L], Y = 0, K = A.length; K > Y; Y++) H = r(A[Y], J[Y], O), S ? h(H.x, H.y + u[_ - 1].y, u[_ - 1].x + I) : h(H.x, H.y, g + I) }
                o(), a() }, n.ExtrudeGeometry.WorldUVGenerator = { generateTopUV: function(e, t, r, i) {
                    var o = e.vertices,
                        a = o[t],
                        s = o[r],
                        h = o[i];
                    return [new n.Vector2(a.x, a.y), new n.Vector2(s.x, s.y), new n.Vector2(h.x, h.y)] }, generateSideWallUV: function(e, t, r, i, o) {
                    var a = e.vertices,
                        s = a[t],
                        h = a[r],
                        l = a[i],
                        c = a[o];
                    return Math.abs(s.y - h.y) < .01 ? [new n.Vector2(s.x, 1 - s.z), new n.Vector2(h.x, 1 - h.z), new n.Vector2(l.x, 1 - l.z), new n.Vector2(c.x, 1 - c.z)] : [new n.Vector2(s.y, 1 - s.z), new n.Vector2(h.y, 1 - h.z), new n.Vector2(l.y, 1 - l.z), new n.Vector2(c.y, 1 - c.z)] } }, n.ShapeGeometry = function(e, t) { n.Geometry.call(this), this.type = "ShapeGeometry", e instanceof Array == !1 && (e = [e]), this.addShapeList(e, t), this.computeFaceNormals() }, n.ShapeGeometry.prototype = Object.create(n.Geometry.prototype), n.ShapeGeometry.prototype.constructor = n.ShapeGeometry, n.ShapeGeometry.prototype.addShapeList = function(e, t) {
                for (var r = 0, i = e.length; i > r; r++) this.addShape(e[r], t);
                return this }, n.ShapeGeometry.prototype.addShape = function(e, t) { void 0 === t && (t = {});
                var r, i, o, a = void 0 !== t.curveSegments ? t.curveSegments : 12,
                    s = t.material,
                    h = void 0 === t.UVGenerator ? n.ExtrudeGeometry.WorldUVGenerator : t.UVGenerator,
                    l = this.vertices.length,
                    c = e.extractPoints(a),
                    u = c.shape,
                    p = c.holes,
                    f = !n.Shape.Utils.isClockWise(u);
                if (f) {
                    for (u = u.reverse(), r = 0, i = p.length; i > r; r++) o = p[r], n.Shape.Utils.isClockWise(o) && (p[r] = o.reverse());
                    f = !1 }
                var d = n.Shape.Utils.triangulateShape(u, p),
                    m = u;
                for (r = 0, i = p.length; i > r; r++) o = p[r], u = u.concat(o); {
                    var g, v, y = u.length,
                        x = d.length;
                    m.length }
                for (r = 0; y > r; r++) g = u[r], this.vertices.push(new n.Vector3(g.x, g.y, 0));
                for (r = 0; x > r; r++) { v = d[r];
                    var b = v[0] + l,
                        w = v[1] + l,
                        _ = v[2] + l;
                    this.faces.push(new n.Face3(b, w, _, null, null, s)), this.faceVertexUvs[0].push(h.generateTopUV(this, b, w, _)) } }, n.LatheGeometry = function(e, t, r, i) { n.Geometry.call(this), this.type = "LatheGeometry", this.parameters = { points: e, segments: t, phiStart: r, phiLength: i }, t = t || 12, r = r || 0, i = i || 2 * Math.PI;
                for (var o = 1 / (e.length - 1), a = 1 / t, s = 0, h = t; h >= s; s++)
                    for (var l = r + s * a * i, c = Math.cos(l), u = Math.sin(l), p = 0, f = e.length; f > p; p++) {
                        var d = e[p],
                            m = new n.Vector3;
                        m.x = c * d.x - u * d.y, m.y = u * d.x + c * d.y, m.z = d.z, this.vertices.push(m) }
                for (var g = e.length, s = 0, h = t; h > s; s++)
                    for (var p = 0, f = e.length - 1; f > p; p++) {
                        var v = p + g * s,
                            y = v,
                            x = v + g,
                            c = v + 1 + g,
                            b = v + 1,
                            w = s * a,
                            _ = p * o,
                            M = w + a,
                            S = _ + o;
                        this.faces.push(new n.Face3(y, x, b)), this.faceVertexUvs[0].push([new n.Vector2(w, _), new n.Vector2(M, _), new n.Vector2(w, S)]), this.faces.push(new n.Face3(x, c, b)), this.faceVertexUvs[0].push([new n.Vector2(M, _), new n.Vector2(M, S), new n.Vector2(w, S)]) }
                this.mergeVertices(), this.computeFaceNormals(), this.computeVertexNormals() }, n.LatheGeometry.prototype = Object.create(n.Geometry.prototype), n.LatheGeometry.prototype.constructor = n.LatheGeometry, n.PlaneGeometry = function(e, t, r, i) { console.info("THREE.PlaneGeometry: Consider using THREE.PlaneBufferGeometry for lower memory footprint."), n.Geometry.call(this), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: r, heightSegments: i }, this.fromBufferGeometry(new n.PlaneBufferGeometry(e, t, r, i)) }, n.PlaneGeometry.prototype = Object.create(n.Geometry.prototype), n.PlaneGeometry.prototype.constructor = n.PlaneGeometry, n.PlaneBufferGeometry = function(e, t, r, i) {
                n.BufferGeometry.call(this), this.type = "PlaneBufferGeometry", this.parameters = { width: e, height: t, widthSegments: r, heightSegments: i };
                for (var o = e / 2, a = t / 2, s = r || 1, h = i || 1, l = s + 1, c = h + 1, u = e / s, p = t / h, f = new Float32Array(l * c * 3), d = new Float32Array(l * c * 3), m = new Float32Array(l * c * 2), g = 0, v = 0, y = 0; c > y; y++)
                    for (var x = y * p - a, b = 0; l > b; b++) {
                        var w = b * u - o;
                        f[g] = w, f[g + 1] = -x, d[g + 2] = 1, m[v] = b / s, m[v + 1] = 1 - y / h, g += 3, v += 2 }
                g = 0;
                for (var _ = new(f.length / 3 > 65535 ? Uint32Array : Uint16Array)(s * h * 6), y = 0; h > y; y++)
                    for (var b = 0; s > b; b++) {
                        var M = b + l * y,
                            S = b + l * (y + 1),
                            T = b + 1 + l * (y + 1),
                            C = b + 1 + l * y;
                        _[g] = M, _[g + 1] = S, _[g + 2] = C, _[g + 3] = S, _[g + 4] = T, _[g + 5] = C, g += 6 }
                this.addAttribute("index", new n.BufferAttribute(_, 1)), this.addAttribute("position", new n.BufferAttribute(f, 3)), this.addAttribute("normal", new n.BufferAttribute(d, 3)), this.addAttribute("uv", new n.BufferAttribute(m, 2))
            }, n.PlaneBufferGeometry.prototype = Object.create(n.BufferGeometry.prototype), n.PlaneBufferGeometry.prototype.constructor = n.PlaneBufferGeometry, n.RingGeometry = function(e, t, r, i, o, a) { n.Geometry.call(this), this.type = "RingGeometry", this.parameters = { innerRadius: e, outerRadius: t, thetaSegments: r, phiSegments: i, thetaStart: o, thetaLength: a }, e = e || 0, t = t || 50, o = void 0 !== o ? o : 0, a = void 0 !== a ? a : 2 * Math.PI, r = void 0 !== r ? Math.max(3, r) : 8, i = void 0 !== i ? Math.max(1, i) : 8;
                var s, h, l = [],
                    c = e,
                    u = (t - e) / i;
                for (s = 0; i + 1 > s; s++) {
                    for (h = 0; r + 1 > h; h++) {
                        var p = new n.Vector3,
                            f = o + h / r * a;
                        p.x = c * Math.cos(f), p.y = c * Math.sin(f), this.vertices.push(p), l.push(new n.Vector2((p.x / t + 1) / 2, (p.y / t + 1) / 2)) }
                    c += u }
                var d = new n.Vector3(0, 0, 1);
                for (s = 0; i > s; s++) {
                    var m = s * (r + 1);
                    for (h = 0; r > h; h++) {
                        var f = h + m,
                            g = f,
                            v = f + r + 1,
                            y = f + r + 2;
                        this.faces.push(new n.Face3(g, v, y, [d.clone(), d.clone(), d.clone()])), this.faceVertexUvs[0].push([l[g].clone(), l[v].clone(), l[y].clone()]), g = f, v = f + r + 2, y = f + 1, this.faces.push(new n.Face3(g, v, y, [d.clone(), d.clone(), d.clone()])), this.faceVertexUvs[0].push([l[g].clone(), l[v].clone(), l[y].clone()]) } }
                this.computeFaceNormals(), this.boundingSphere = new n.Sphere(new n.Vector3, c) }, n.RingGeometry.prototype = Object.create(n.Geometry.prototype), n.RingGeometry.prototype.constructor = n.RingGeometry, n.SphereGeometry = function(e, t, r, i, o, a, s) { n.Geometry.call(this), this.type = "SphereGeometry", this.parameters = { radius: e, widthSegments: t, heightSegments: r, phiStart: i, phiLength: o, thetaStart: a, thetaLength: s }, e = e || 50, t = Math.max(3, Math.floor(t) || 8), r = Math.max(2, Math.floor(r) || 6), i = void 0 !== i ? i : 0, o = void 0 !== o ? o : 2 * Math.PI, a = void 0 !== a ? a : 0, s = void 0 !== s ? s : Math.PI;
                var h, l, c = [],
                    u = [];
                for (l = 0; r >= l; l++) {
                    var p = [],
                        f = [];
                    for (h = 0; t >= h; h++) {
                        var d = h / t,
                            m = l / r,
                            g = new n.Vector3;
                        g.x = -e * Math.cos(i + d * o) * Math.sin(a + m * s), g.y = e * Math.cos(a + m * s), g.z = e * Math.sin(i + d * o) * Math.sin(a + m * s), this.vertices.push(g), p.push(this.vertices.length - 1), f.push(new n.Vector2(d, 1 - m)) }
                    c.push(p), u.push(f) }
                for (l = 0; r > l; l++)
                    for (h = 0; t > h; h++) {
                        var v = c[l][h + 1],
                            y = c[l][h],
                            x = c[l + 1][h],
                            b = c[l + 1][h + 1],
                            w = this.vertices[v].clone().normalize(),
                            _ = this.vertices[y].clone().normalize(),
                            M = this.vertices[x].clone().normalize(),
                            S = this.vertices[b].clone().normalize(),
                            T = u[l][h + 1].clone(),
                            C = u[l][h].clone(),
                            E = u[l + 1][h].clone(),
                            A = u[l + 1][h + 1].clone();
                        Math.abs(this.vertices[v].y) === e ? (T.x = (T.x + C.x) / 2, this.faces.push(new n.Face3(v, x, b, [w, M, S])), this.faceVertexUvs[0].push([T, E, A])) : Math.abs(this.vertices[x].y) === e ? (E.x = (E.x + A.x) / 2, this.faces.push(new n.Face3(v, y, x, [w, _, M])), this.faceVertexUvs[0].push([T, C, E])) : (this.faces.push(new n.Face3(v, y, b, [w, _, S])), this.faceVertexUvs[0].push([T, C, A]), this.faces.push(new n.Face3(y, x, b, [_.clone(), M, S.clone()])), this.faceVertexUvs[0].push([C.clone(), E, A.clone()])) }
                this.computeFaceNormals(), this.boundingSphere = new n.Sphere(new n.Vector3, e) }, n.SphereGeometry.prototype = Object.create(n.Geometry.prototype), n.SphereGeometry.prototype.constructor = n.SphereGeometry, n.TextGeometry = function(e, t) { t = t || {};
                var r = n.FontUtils.generateShapes(e, t);
                t.amount = void 0 !== t.height ? t.height : 50, void 0 === t.bevelThickness && (t.bevelThickness = 10), void 0 === t.bevelSize && (t.bevelSize = 8), void 0 === t.bevelEnabled && (t.bevelEnabled = !1), n.ExtrudeGeometry.call(this, r, t), this.type = "TextGeometry" }, n.TextGeometry.prototype = Object.create(n.ExtrudeGeometry.prototype), n.TextGeometry.prototype.constructor = n.TextGeometry, n.TorusGeometry = function(e, t, r, i, o) { n.Geometry.call(this), this.type = "TorusGeometry", this.parameters = { radius: e, tube: t, radialSegments: r, tubularSegments: i, arc: o }, e = e || 100, t = t || 40, r = r || 8, i = i || 6, o = o || 2 * Math.PI;
                for (var a = new n.Vector3, s = [], h = [], l = 0; r >= l; l++)
                    for (var c = 0; i >= c; c++) {
                        var u = c / i * o,
                            p = l / r * Math.PI * 2;
                        a.x = e * Math.cos(u), a.y = e * Math.sin(u);
                        var f = new n.Vector3;
                        f.x = (e + t * Math.cos(p)) * Math.cos(u), f.y = (e + t * Math.cos(p)) * Math.sin(u), f.z = t * Math.sin(p), this.vertices.push(f), s.push(new n.Vector2(c / i, l / r)), h.push(f.clone().sub(a).normalize()) }
                for (var l = 1; r >= l; l++)
                    for (var c = 1; i >= c; c++) {
                        var d = (i + 1) * l + c - 1,
                            m = (i + 1) * (l - 1) + c - 1,
                            g = (i + 1) * (l - 1) + c,
                            v = (i + 1) * l + c,
                            y = new n.Face3(d, m, v, [h[d].clone(), h[m].clone(), h[v].clone()]);
                        this.faces.push(y), this.faceVertexUvs[0].push([s[d].clone(), s[m].clone(), s[v].clone()]), y = new n.Face3(m, g, v, [h[m].clone(), h[g].clone(), h[v].clone()]), this.faces.push(y), this.faceVertexUvs[0].push([s[m].clone(), s[g].clone(), s[v].clone()]) }
                this.computeFaceNormals() }, n.TorusGeometry.prototype = Object.create(n.Geometry.prototype), n.TorusGeometry.prototype.constructor = n.TorusGeometry, n.TorusKnotGeometry = function(e, t, r, i, o, a, s) {
                function h(e, t, r, i, o) {
                    var a = Math.cos(e),
                        s = Math.sin(e),
                        h = t / r * e,
                        l = Math.cos(h),
                        c = i * (2 + l) * .5 * a,
                        u = i * (2 + l) * s * .5,
                        p = o * i * Math.sin(h) * .5;
                    return new n.Vector3(c, u, p) }
                n.Geometry.call(this), this.type = "TorusKnotGeometry", this.parameters = { radius: e, tube: t, radialSegments: r, tubularSegments: i, p: o, q: a, heightScale: s }, e = e || 100, t = t || 40, r = r || 64, i = i || 8, o = o || 2, a = a || 3, s = s || 1;
                for (var l = new Array(r), c = new n.Vector3, u = new n.Vector3, p = new n.Vector3, f = 0; r > f; ++f) { l[f] = new Array(i);
                    var d = f / r * 2 * o * Math.PI,
                        m = h(d, a, o, e, s),
                        g = h(d + .01, a, o, e, s);
                    c.subVectors(g, m), u.addVectors(g, m), p.crossVectors(c, u), u.crossVectors(p, c), p.normalize(), u.normalize();
                    for (var v = 0; i > v; ++v) {
                        var y = v / i * 2 * Math.PI,
                            x = -t * Math.cos(y),
                            b = t * Math.sin(y),
                            w = new n.Vector3;
                        w.x = m.x + x * u.x + b * p.x, w.y = m.y + x * u.y + b * p.y, w.z = m.z + x * u.z + b * p.z, l[f][v] = this.vertices.push(w) - 1 } }
                for (var f = 0; r > f; ++f)
                    for (var v = 0; i > v; ++v) {
                        var _ = (f + 1) % r,
                            M = (v + 1) % i,
                            S = l[f][v],
                            T = l[_][v],
                            C = l[_][M],
                            E = l[f][M],
                            A = new n.Vector2(f / r, v / i),
                            L = new n.Vector2((f + 1) / r, v / i),
                            P = new n.Vector2((f + 1) / r, (v + 1) / i),
                            R = new n.Vector2(f / r, (v + 1) / i);
                        this.faces.push(new n.Face3(S, T, E)), this.faceVertexUvs[0].push([A, L, R]), this.faces.push(new n.Face3(T, C, E)), this.faceVertexUvs[0].push([L.clone(), P, R.clone()]) }
                this.computeFaceNormals(), this.computeVertexNormals() }, n.TorusKnotGeometry.prototype = Object.create(n.Geometry.prototype), n.TorusKnotGeometry.prototype.constructor = n.TorusKnotGeometry, n.TubeGeometry = function(e, t, r, i, o, a) {
                function s(e, t, r) {
                    return P.vertices.push(new n.Vector3(e, t, r)) - 1 }
                n.Geometry.call(this), this.type = "TubeGeometry", this.parameters = { path: e, segments: t, radius: r, radialSegments: i, closed: o }, t = t || 64, r = r || 1, i = i || 8, o = o || !1, a = a || n.TubeGeometry.NoTaper;
                var h, l, c, u, p, f, d, m, g, v, y, x, b, w, _, M, S, T, C, E, A, L = [],
                    P = this,
                    R = t + 1,
                    F = new n.Vector3,
                    B = new n.TubeGeometry.FrenetFrames(e, t, o),
                    U = B.tangents,
                    D = B.normals,
                    V = B.binormals;
                for (this.tangents = U, this.normals = D, this.binormals = V, v = 0; R > v; v++)
                    for (L[v] = [], u = v / (R - 1), g = e.getPointAt(u), h = U[v], l = D[v], c = V[v], f = r * a(u), y = 0; i > y; y++) p = y / i * 2 * Math.PI, d = -f * Math.cos(p), m = f * Math.sin(p), F.copy(g), F.x += d * l.x + m * c.x, F.y += d * l.y + m * c.y, F.z += d * l.z + m * c.z, L[v][y] = s(F.x, F.y, F.z);
                for (v = 0; t > v; v++)
                    for (y = 0; i > y; y++) x = o ? (v + 1) % t : v + 1, b = (y + 1) % i, w = L[v][y], _ = L[x][y], M = L[x][b], S = L[v][b], T = new n.Vector2(v / t, y / i), C = new n.Vector2((v + 1) / t, y / i), E = new n.Vector2((v + 1) / t, (y + 1) / i), A = new n.Vector2(v / t, (y + 1) / i), this.faces.push(new n.Face3(w, _, S)), this.faceVertexUvs[0].push([T, C, A]), this.faces.push(new n.Face3(_, M, S)), this.faceVertexUvs[0].push([C.clone(), E, A.clone()]);
                this.computeFaceNormals(), this.computeVertexNormals() }, n.TubeGeometry.prototype = Object.create(n.Geometry.prototype), n.TubeGeometry.prototype.constructor = n.TubeGeometry, n.TubeGeometry.NoTaper = function() {
                return 1 }, n.TubeGeometry.SinusoidalTaper = function(e) {
                return Math.sin(Math.PI * e) }, n.TubeGeometry.FrenetFrames = function(e, t, r) {
                function i() { d[0] = new n.Vector3, m[0] = new n.Vector3, a = Number.MAX_VALUE, s = Math.abs(f[0].x), h = Math.abs(f[0].y), l = Math.abs(f[0].z), a >= s && (a = s, p.set(1, 0, 0)), a >= h && (a = h, p.set(0, 1, 0)), a >= l && p.set(0, 0, 1), g.crossVectors(f[0], p).normalize(), d[0].crossVectors(f[0], g), m[0].crossVectors(f[0], d[0]) }
                var o, a, s, h, l, c, u, p = (new n.Vector3, new n.Vector3),
                    f = (new n.Vector3, []),
                    d = [],
                    m = [],
                    g = new n.Vector3,
                    v = new n.Matrix4,
                    y = t + 1,
                    x = 1e-4;
                for (this.tangents = f, this.normals = d, this.binormals = m, c = 0; y > c; c++) u = c / (y - 1), f[c] = e.getTangentAt(u), f[c].normalize();
                for (i(), c = 1; y > c; c++) d[c] = d[c - 1].clone(), m[c] = m[c - 1].clone(), g.crossVectors(f[c - 1], f[c]), g.length() > x && (g.normalize(), o = Math.acos(n.Math.clamp(f[c - 1].dot(f[c]), -1, 1)), d[c].applyMatrix4(v.makeRotationAxis(g, o))), m[c].crossVectors(f[c], d[c]);
                if (r)
                    for (o = Math.acos(n.Math.clamp(d[0].dot(d[y - 1]), -1, 1)), o /= y - 1, f[0].dot(g.crossVectors(d[0], d[y - 1])) > 0 && (o = -o), c = 1; y > c; c++) d[c].applyMatrix4(v.makeRotationAxis(f[c], o * c)), m[c].crossVectors(f[c], d[c]) }, n.PolyhedronGeometry = function(e, t, r, i) {
                function o(e) {
                    var t = e.normalize().clone();
                    t.index = u.vertices.push(t) - 1;
                    var r = h(e) / 2 / Math.PI + .5,
                        i = l(e) / Math.PI + .5;
                    return t.uv = new n.Vector2(r, 1 - i), t }

                function a(e, t, r) {
                    var i = new n.Face3(e.index, t.index, r.index, [e.clone(), t.clone(), r.clone()]);
                    u.faces.push(i), b.copy(e).add(t).add(r).divideScalar(3);
                    var o = h(b);
                    u.faceVertexUvs[0].push([c(e.uv, e, o), c(t.uv, t, o), c(r.uv, r, o)]) }

                function s(e, t) {
                    for (var r = Math.pow(2, t), i = (Math.pow(4, t), o(u.vertices[e.a])), n = o(u.vertices[e.b]), s = o(u.vertices[e.c]), h = [], l = 0; r >= l; l++) { h[l] = [];
                        for (var c = o(i.clone().lerp(s, l / r)), p = o(n.clone().lerp(s, l / r)), f = r - l, d = 0; f >= d; d++) h[l][d] = 0 == d && l == r ? c : o(c.clone().lerp(p, d / f)) }
                    for (var l = 0; r > l; l++)
                        for (var d = 0; 2 * (r - l) - 1 > d; d++) {
                            var m = Math.floor(d / 2);
                            d % 2 == 0 ? a(h[l][m + 1], h[l + 1][m], h[l][m]) : a(h[l][m + 1], h[l + 1][m + 1], h[l + 1][m]) } }

                function h(e) {
                    return Math.atan2(e.z, -e.x) }

                function l(e) {
                    return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) }

                function c(e, t, r) {
                    return 0 > r && 1 === e.x && (e = new n.Vector2(e.x - 1, e.y)), 0 === t.x && 0 === t.z && (e = new n.Vector2(r / 2 / Math.PI + .5, e.y)), e.clone() }
                n.Geometry.call(this), this.type = "PolyhedronGeometry", this.parameters = { vertices: e, indices: t, radius: r, detail: i }, r = r || 1, i = i || 0;
                for (var u = this, p = 0, f = e.length; f > p; p += 3) o(new n.Vector3(e[p], e[p + 1], e[p + 2]));
                for (var d = this.vertices, m = [], p = 0, g = 0, f = t.length; f > p; p += 3, g++) {
                    var v = d[t[p]],
                        y = d[t[p + 1]],
                        x = d[t[p + 2]];
                    m[g] = new n.Face3(v.index, y.index, x.index, [v.clone(), y.clone(), x.clone()]) }
                for (var b = new n.Vector3, p = 0, f = m.length; f > p; p++) s(m[p], i);
                for (var p = 0, f = this.faceVertexUvs[0].length; f > p; p++) {
                    var w = this.faceVertexUvs[0][p],
                        _ = w[0].x,
                        M = w[1].x,
                        S = w[2].x,
                        T = Math.max(_, Math.max(M, S)),
                        C = Math.min(_, Math.min(M, S));
                    T > .9 && .1 > C && (.2 > _ && (w[0].x += 1), .2 > M && (w[1].x += 1), .2 > S && (w[2].x += 1)) }
                for (var p = 0, f = this.vertices.length; f > p; p++) this.vertices[p].multiplyScalar(r);
                this.mergeVertices(), this.computeFaceNormals(), this.boundingSphere = new n.Sphere(new n.Vector3, r) }, n.PolyhedronGeometry.prototype = Object.create(n.Geometry.prototype), n.PolyhedronGeometry.prototype.constructor = n.PolyhedronGeometry, n.DodecahedronGeometry = function(e, t) { this.parameters = { radius: e, detail: t };
                var r = (1 + Math.sqrt(5)) / 2,
                    i = 1 / r,
                    o = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -r, 0, -i, r, 0, i, -r, 0, i, r, -i, -r, 0, -i, r, 0, i, -r, 0, i, r, 0, -r, 0, -i, r, 0, -i, -r, 0, i, r, 0, i],
                    a = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
                n.PolyhedronGeometry.call(this, o, a, e, t) }, n.DodecahedronGeometry.prototype = Object.create(n.Geometry.prototype), n.DodecahedronGeometry.prototype.constructor = n.DodecahedronGeometry, n.IcosahedronGeometry = function(e, t) {
                var r = (1 + Math.sqrt(5)) / 2,
                    i = [-1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, 0, 0, -1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, r, 0, -1, r, 0, 1, -r, 0, -1, -r, 0, 1],
                    o = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
                n.PolyhedronGeometry.call(this, i, o, e, t), this.type = "IcosahedronGeometry", this.parameters = { radius: e, detail: t } }, n.IcosahedronGeometry.prototype = Object.create(n.Geometry.prototype), n.IcosahedronGeometry.prototype.constructor = n.IcosahedronGeometry, n.OctahedronGeometry = function(e, t) { this.parameters = { radius: e, detail: t };
                var r = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
                    i = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
                n.PolyhedronGeometry.call(this, r, i, e, t), this.type = "OctahedronGeometry", this.parameters = { radius: e, detail: t } }, n.OctahedronGeometry.prototype = Object.create(n.Geometry.prototype), n.OctahedronGeometry.prototype.constructor = n.OctahedronGeometry, n.TetrahedronGeometry = function(e, t) {
                var r = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
                    i = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
                n.PolyhedronGeometry.call(this, r, i, e, t), this.type = "TetrahedronGeometry", this.parameters = { radius: e, detail: t } }, n.TetrahedronGeometry.prototype = Object.create(n.Geometry.prototype), n.TetrahedronGeometry.prototype.constructor = n.TetrahedronGeometry, n.ParametricGeometry = function(e, t, r) { n.Geometry.call(this), this.type = "ParametricGeometry", this.parameters = { func: e, slices: t, stacks: r };
                var i, o, a, s, h, l = this.vertices,
                    c = this.faces,
                    u = this.faceVertexUvs[0],
                    p = t + 1;
                for (i = 0; r >= i; i++)
                    for (h = i / r, o = 0; t >= o; o++) s = o / t, a = e(s, h), l.push(a);
                var f, d, m, g, v, y, x, b;
                for (i = 0; r > i; i++)
                    for (o = 0; t > o; o++) f = i * p + o, d = i * p + o + 1, m = (i + 1) * p + o + 1, g = (i + 1) * p + o, v = new n.Vector2(o / t, i / r), y = new n.Vector2((o + 1) / t, i / r), x = new n.Vector2((o + 1) / t, (i + 1) / r), b = new n.Vector2(o / t, (i + 1) / r), c.push(new n.Face3(f, d, g)), u.push([v, y, b]), c.push(new n.Face3(d, m, g)), u.push([y.clone(), x, b.clone()]);
                this.computeFaceNormals(), this.computeVertexNormals() }, n.ParametricGeometry.prototype = Object.create(n.Geometry.prototype), n.ParametricGeometry.prototype.constructor = n.ParametricGeometry, n.AxisHelper = function(e) { e = e || 1;
                var t = new Float32Array([0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e]),
                    r = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]),
                    i = new n.BufferGeometry;
                i.addAttribute("position", new n.BufferAttribute(t, 3)), i.addAttribute("color", new n.BufferAttribute(r, 3));
                var o = new n.LineBasicMaterial({ vertexColors: n.VertexColors });
                n.Line.call(this, i, o, n.LinePieces) }, n.AxisHelper.prototype = Object.create(n.Line.prototype), n.AxisHelper.prototype.constructor = n.AxisHelper, n.ArrowHelper = function() {
                var e = new n.Geometry;
                e.vertices.push(new n.Vector3(0, 0, 0), new n.Vector3(0, 1, 0));
                var t = new n.CylinderGeometry(0, .5, 1, 5, 1);
                return t.applyMatrix((new n.Matrix4).makeTranslation(0, -.5, 0)),
                    function(r, i, o, a, s, h) { n.Object3D.call(this), void 0 === a && (a = 16776960), void 0 === o && (o = 1), void 0 === s && (s = .2 * o), void 0 === h && (h = .2 * s), this.position.copy(i), this.line = new n.Line(e, new n.LineBasicMaterial({ color: a })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new n.Mesh(t, new n.MeshBasicMaterial({ color: a })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(r), this.setLength(o, s, h) } }(), n.ArrowHelper.prototype = Object.create(n.Object3D.prototype), n.ArrowHelper.prototype.constructor = n.ArrowHelper, n.ArrowHelper.prototype.setDirection = function() {
                var e, t = new n.Vector3;
                return function(r) { r.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : r.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (t.set(r.z, 0, -r.x).normalize(), e = Math.acos(r.y), this.quaternion.setFromAxisAngle(t, e)) } }(), n.ArrowHelper.prototype.setLength = function(e, t, r) { void 0 === t && (t = .2 * e), void 0 === r && (r = .2 * t), this.line.scale.set(1, e - t, 1), this.line.updateMatrix(), this.cone.scale.set(r, t, r), this.cone.position.y = e, this.cone.updateMatrix() }, n.ArrowHelper.prototype.setColor = function(e) { this.line.material.color.set(e), this.cone.material.color.set(e) }, n.BoxHelper = function(e) {
                var t = new n.BufferGeometry;
                t.addAttribute("position", new n.BufferAttribute(new Float32Array(72), 3)), n.Line.call(this, t, new n.LineBasicMaterial({ color: 16776960 }), n.LinePieces), void 0 !== e && this.update(e) }, n.BoxHelper.prototype = Object.create(n.Line.prototype), n.BoxHelper.prototype.constructor = n.BoxHelper, n.BoxHelper.prototype.update = function(e) {
                var t = e.geometry;
                null === t.boundingBox && t.computeBoundingBox();
                var r = t.boundingBox.min,
                    i = t.boundingBox.max,
                    n = this.geometry.attributes.position.array;
                n[0] = i.x, n[1] = i.y, n[2] = i.z, n[3] = r.x, n[4] = i.y, n[5] = i.z, n[6] = r.x, n[7] = i.y, n[8] = i.z, n[9] = r.x, n[10] = r.y, n[11] = i.z, n[12] = r.x, n[13] = r.y, n[14] = i.z, n[15] = i.x, n[16] = r.y, n[17] = i.z, n[18] = i.x, n[19] = r.y, n[20] = i.z, n[21] = i.x, n[22] = i.y, n[23] = i.z, n[24] = i.x, n[25] = i.y, n[26] = r.z, n[27] = r.x, n[28] = i.y, n[29] = r.z, n[30] = r.x, n[31] = i.y, n[32] = r.z, n[33] = r.x, n[34] = r.y, n[35] = r.z, n[36] = r.x, n[37] = r.y, n[38] = r.z, n[39] = i.x, n[40] = r.y, n[41] = r.z, n[42] = i.x, n[43] = r.y, n[44] = r.z, n[45] = i.x, n[46] = i.y, n[47] = r.z, n[48] = i.x, n[49] = i.y, n[50] = i.z, n[51] = i.x, n[52] = i.y, n[53] = r.z, n[54] = r.x, n[55] = i.y, n[56] = i.z, n[57] = r.x, n[58] = i.y, n[59] = r.z, n[60] = r.x, n[61] = r.y, n[62] = i.z, n[63] = r.x, n[64] = r.y, n[65] = r.z, n[66] = i.x, n[67] = r.y, n[68] = i.z, n[69] = i.x, n[70] = r.y, n[71] = r.z, this.geometry.attributes.position.needsUpdate = !0, this.geometry.computeBoundingSphere(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1 }, n.BoundingBoxHelper = function(e, t) {
                var r = void 0 !== t ? t : 8947848;
                this.object = e, this.box = new n.Box3, n.Mesh.call(this, new n.BoxGeometry(1, 1, 1), new n.MeshBasicMaterial({ color: r, wireframe: !0 })) }, n.BoundingBoxHelper.prototype = Object.create(n.Mesh.prototype), n.BoundingBoxHelper.prototype.constructor = n.BoundingBoxHelper, n.BoundingBoxHelper.prototype.update = function() { this.box.setFromObject(this.object), this.box.size(this.scale), this.box.center(this.position) }, n.CameraHelper = function(e) {
                function t(e, t, i) { r(e, i), r(t, i) }

                function r(e, t) { i.vertices.push(new n.Vector3), i.colors.push(new n.Color(t)), void 0 === a[e] && (a[e] = []), a[e].push(i.vertices.length - 1) }
                var i = new n.Geometry,
                    o = new n.LineBasicMaterial({ color: 16777215, vertexColors: n.FaceColors }),
                    a = {},
                    s = 16755200,
                    h = 16711680,
                    l = 43775,
                    c = 16777215,
                    u = 3355443;
                t("n1", "n2", s), t("n2", "n4", s), t("n4", "n3", s), t("n3", "n1", s), t("f1", "f2", s), t("f2", "f4", s), t("f4", "f3", s), t("f3", "f1", s), t("n1", "f1", s), t("n2", "f2", s), t("n3", "f3", s), t("n4", "f4", s), t("p", "n1", h), t("p", "n2", h), t("p", "n3", h), t("p", "n4", h), t("u1", "u2", l), t("u2", "u3", l), t("u3", "u1", l), t("c", "t", c), t("p", "c", u), t("cn1", "cn2", u), t("cn3", "cn4", u), t("cf1", "cf2", u), t("cf3", "cf4", u), n.Line.call(this, i, o, n.LinePieces), this.camera = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update() }, n.CameraHelper.prototype = Object.create(n.Line.prototype), n.CameraHelper.prototype.constructor = n.CameraHelper, n.CameraHelper.prototype.update = function() {
                var e, t, r = new n.Vector3,
                    i = new n.Camera,
                    o = function(n, o, a, s) { r.set(o, a, s).unproject(i);
                        var h = t[n];
                        if (void 0 !== h)
                            for (var l = 0, c = h.length; c > l; l++) e.vertices[h[l]].copy(r) };
                return function() { e = this.geometry, t = this.pointMap;
                    var r = 1,
                        n = 1;
                    i.projectionMatrix.copy(this.camera.projectionMatrix), o("c", 0, 0, -1), o("t", 0, 0, 1), o("n1", -r, -n, -1), o("n2", r, -n, -1), o("n3", -r, n, -1), o("n4", r, n, -1), o("f1", -r, -n, 1), o("f2", r, -n, 1), o("f3", -r, n, 1), o("f4", r, n, 1), o("u1", .7 * r, 1.1 * n, -1), o("u2", .7 * -r, 1.1 * n, -1), o("u3", 0, 2 * n, -1), o("cf1", -r, 0, 1), o("cf2", r, 0, 1), o("cf3", 0, -n, 1), o("cf4", 0, n, 1), o("cn1", -r, 0, -1), o("cn2", r, 0, -1), o("cn3", 0, -n, -1), o("cn4", 0, n, -1), e.verticesNeedUpdate = !0 } }(), n.DirectionalLightHelper = function(e, t) { n.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, t = t || 1;
                var r = new n.Geometry;
                r.vertices.push(new n.Vector3(-t, t, 0), new n.Vector3(t, t, 0), new n.Vector3(t, -t, 0), new n.Vector3(-t, -t, 0), new n.Vector3(-t, t, 0));
                var i = new n.LineBasicMaterial({ fog: !1 });
                i.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.lightPlane = new n.Line(r, i), this.add(this.lightPlane), r = new n.Geometry, r.vertices.push(new n.Vector3, new n.Vector3), i = new n.LineBasicMaterial({ fog: !1 }), i.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine = new n.Line(r, i), this.add(this.targetLine), this.update() }, n.DirectionalLightHelper.prototype = Object.create(n.Object3D.prototype), n.DirectionalLightHelper.prototype.constructor = n.DirectionalLightHelper, n.DirectionalLightHelper.prototype.dispose = function() { this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose() }, n.DirectionalLightHelper.prototype.update = function() {
                var e = new n.Vector3,
                    t = new n.Vector3,
                    r = new n.Vector3;
                return function() { e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), r.subVectors(t, e), this.lightPlane.lookAt(r), this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine.geometry.vertices[1].copy(r), this.targetLine.geometry.verticesNeedUpdate = !0, this.targetLine.material.color.copy(this.lightPlane.material.color) } }(), n.EdgesHelper = function(e, t) {
                var r = void 0 !== t ? t : 16777215,
                    i = [0, 0],
                    o = {},
                    a = function(e, t) {
                        return e - t },
                    s = ["a", "b", "c"],
                    h = new n.BufferGeometry,
                    l = e.geometry.clone();
                l.mergeVertices(), l.computeFaceNormals();
                for (var c = l.vertices, u = l.faces, p = 0, f = 0, d = u.length; d > f; f++)
                    for (var m = u[f], g = 0; 3 > g; g++) { i[0] = m[s[g]], i[1] = m[s[(g + 1) % 3]], i.sort(a);
                        var v = i.toString();
                        void 0 === o[v] ? (o[v] = { vert1: i[0], vert2: i[1], face1: f, face2: void 0 }, p++) : o[v].face2 = f }
                var y = new Float32Array(2 * p * 3),
                    x = 0;
                for (var v in o) {
                    var b = o[v];
                    if (void 0 === b.face2 || u[b.face1].normal.dot(u[b.face2].normal) < .9999) {
                        var w = c[b.vert1];
                        y[x++] = w.x, y[x++] = w.y, y[x++] = w.z, w = c[b.vert2], y[x++] = w.x, y[x++] = w.y, y[x++] = w.z } }
                h.addAttribute("position", new n.BufferAttribute(y, 3)), n.Line.call(this, h, new n.LineBasicMaterial({ color: r }), n.LinePieces), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1 }, n.EdgesHelper.prototype = Object.create(n.Line.prototype), n.EdgesHelper.prototype.constructor = n.EdgesHelper, n.FaceNormalsHelper = function(e, t, r, i) { this.object = e, this.size = void 0 !== t ? t : 1;
                for (var o = void 0 !== r ? r : 16776960, a = void 0 !== i ? i : 1, s = new n.Geometry, h = this.object.geometry.faces, l = 0, c = h.length; c > l; l++) s.vertices.push(new n.Vector3, new n.Vector3);
                n.Line.call(this, s, new n.LineBasicMaterial({ color: o, linewidth: a }), n.LinePieces), this.matrixAutoUpdate = !1, this.normalMatrix = new n.Matrix3, this.update() }, n.FaceNormalsHelper.prototype = Object.create(n.Line.prototype), n.FaceNormalsHelper.prototype.constructor = n.FaceNormalsHelper, n.FaceNormalsHelper.prototype.update = function() {
                var e = this.geometry.vertices,
                    t = this.object,
                    r = t.geometry.vertices,
                    i = t.geometry.faces,
                    n = t.matrixWorld;
                t.updateMatrixWorld(!0), this.normalMatrix.getNormalMatrix(n);
                for (var o = 0, a = 0, s = i.length; s > o; o++, a += 2) {
                    var h = i[o];
                    e[a].copy(r[h.a]).add(r[h.b]).add(r[h.c]).divideScalar(3).applyMatrix4(n), e[a + 1].copy(h.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size).add(e[a]) }
                return this.geometry.verticesNeedUpdate = !0, this }, n.GridHelper = function(e, t) {
                var r = new n.Geometry,
                    i = new n.LineBasicMaterial({ vertexColors: n.VertexColors });
                this.color1 = new n.Color(4473924), this.color2 = new n.Color(8947848);
                for (var o = -e; e >= o; o += t) { r.vertices.push(new n.Vector3(-e, 0, o), new n.Vector3(e, 0, o), new n.Vector3(o, 0, -e), new n.Vector3(o, 0, e));
                    var a = 0 === o ? this.color1 : this.color2;
                    r.colors.push(a, a, a, a) }
                n.Line.call(this, r, i, n.LinePieces) }, n.GridHelper.prototype = Object.create(n.Line.prototype), n.GridHelper.prototype.constructor = n.GridHelper, n.GridHelper.prototype.setColors = function(e, t) { this.color1.set(e), this.color2.set(t), this.geometry.colorsNeedUpdate = !0 }, n.HemisphereLightHelper = function(e, t) { n.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.colors = [new n.Color, new n.Color];
                var r = new n.SphereGeometry(t, 4, 2);
                r.applyMatrix((new n.Matrix4).makeRotationX(-Math.PI / 2));
                for (var i = 0, o = 8; o > i; i++) r.faces[i].color = this.colors[4 > i ? 0 : 1];
                var a = new n.MeshBasicMaterial({ vertexColors: n.FaceColors, wireframe: !0 });
                this.lightSphere = new n.Mesh(r, a), this.add(this.lightSphere), this.update() }, n.HemisphereLightHelper.prototype = Object.create(n.Object3D.prototype), n.HemisphereLightHelper.prototype.constructor = n.HemisphereLightHelper, n.HemisphereLightHelper.prototype.dispose = function() { this.lightSphere.geometry.dispose(), this.lightSphere.material.dispose() }, n.HemisphereLightHelper.prototype.update = function() {
                var e = new n.Vector3;
                return function() { this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity), this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity), this.lightSphere.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate()), this.lightSphere.geometry.colorsNeedUpdate = !0 } }(), n.PointLightHelper = function(e, t) { this.light = e, this.light.updateMatrixWorld();
                var r = new n.SphereGeometry(t, 4, 2),
                    i = new n.MeshBasicMaterial({ wireframe: !0, fog: !1 });
                i.color.copy(this.light.color).multiplyScalar(this.light.intensity), n.Mesh.call(this, r, i), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1 }, n.PointLightHelper.prototype = Object.create(n.Mesh.prototype), n.PointLightHelper.prototype.constructor = n.PointLightHelper, n.PointLightHelper.prototype.dispose = function() { this.geometry.dispose(), this.material.dispose() }, n.PointLightHelper.prototype.update = function() { this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity) }, n.SkeletonHelper = function(e) { this.bones = this.getBoneList(e);
                for (var t = new n.Geometry, r = 0; r < this.bones.length; r++) {
                    var i = this.bones[r];
                    i.parent instanceof n.Bone && (t.vertices.push(new n.Vector3), t.vertices.push(new n.Vector3), t.colors.push(new n.Color(0, 0, 1)), t.colors.push(new n.Color(0, 1, 0))) }
                var o = new n.LineBasicMaterial({ vertexColors: n.VertexColors, depthTest: !1, depthWrite: !1, transparent: !0 });
                n.Line.call(this, t, o, n.LinePieces), this.root = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.update() }, n.SkeletonHelper.prototype = Object.create(n.Line.prototype), n.SkeletonHelper.prototype.constructor = n.SkeletonHelper, n.SkeletonHelper.prototype.getBoneList = function(e) {
                var t = [];
                e instanceof n.Bone && t.push(e);
                for (var r = 0; r < e.children.length; r++) t.push.apply(t, this.getBoneList(e.children[r]));
                return t }, n.SkeletonHelper.prototype.update = function() {
                for (var e = this.geometry, t = (new n.Matrix4).getInverse(this.root.matrixWorld), r = new n.Matrix4, i = 0, o = 0; o < this.bones.length; o++) {
                    var a = this.bones[o];
                    a.parent instanceof n.Bone && (r.multiplyMatrices(t, a.matrixWorld), e.vertices[i].setFromMatrixPosition(r), r.multiplyMatrices(t, a.parent.matrixWorld), e.vertices[i + 1].setFromMatrixPosition(r), i += 2) }
                e.verticesNeedUpdate = !0, e.computeBoundingSphere() }, n.SpotLightHelper = function(e) { n.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1;
                var t = new n.CylinderGeometry(0, 1, 1, 8, 1, !0);
                t.applyMatrix((new n.Matrix4).makeTranslation(0, -.5, 0)), t.applyMatrix((new n.Matrix4).makeRotationX(-Math.PI / 2));
                var r = new n.MeshBasicMaterial({ wireframe: !0, fog: !1 });
                this.cone = new n.Mesh(t, r), this.add(this.cone), this.update() }, n.SpotLightHelper.prototype = Object.create(n.Object3D.prototype), n.SpotLightHelper.prototype.constructor = n.SpotLightHelper, n.SpotLightHelper.prototype.dispose = function() { this.cone.geometry.dispose(), this.cone.material.dispose() }, n.SpotLightHelper.prototype.update = function() {
                var e = new n.Vector3,
                    t = new n.Vector3;
                return function() {
                    var r = this.light.distance ? this.light.distance : 1e4,
                        i = r * Math.tan(this.light.angle);
                    this.cone.scale.set(i, i, r), e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(t.sub(e)), this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity) } }(), n.VertexNormalsHelper = function(e, t, r, i) { this.object = e, this.size = void 0 !== t ? t : 1;
                for (var o = void 0 !== r ? r : 16711680, a = void 0 !== i ? i : 1, s = new n.Geometry, h = (e.geometry.vertices, e.geometry.faces), l = 0, c = h.length; c > l; l++)
                    for (var u = h[l], p = 0, f = u.vertexNormals.length; f > p; p++) s.vertices.push(new n.Vector3, new n.Vector3);
                n.Line.call(this, s, new n.LineBasicMaterial({ color: o, linewidth: a }), n.LinePieces), this.matrixAutoUpdate = !1, this.normalMatrix = new n.Matrix3, this.update() }, n.VertexNormalsHelper.prototype = Object.create(n.Line.prototype), n.VertexNormalsHelper.prototype.constructor = n.VertexNormalsHelper, n.VertexNormalsHelper.prototype.update = function() {
                var e = new n.Vector3;
                return function() {
                    var t = ["a", "b", "c", "d"];
                    this.object.updateMatrixWorld(!0), this.normalMatrix.getNormalMatrix(this.object.matrixWorld);
                    for (var r = this.geometry.vertices, i = this.object.geometry.vertices, n = this.object.geometry.faces, o = this.object.matrixWorld, a = 0, s = 0, h = n.length; h > s; s++)
                        for (var l = n[s], c = 0, u = l.vertexNormals.length; u > c; c++) {
                            var p = l[t[c]],
                                f = i[p],
                                d = l.vertexNormals[c];
                            r[a].copy(f).applyMatrix4(o), e.copy(d).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size), e.add(r[a]), a += 1, r[a].copy(e), a += 1 }
                    return this.geometry.verticesNeedUpdate = !0, this } }(), n.VertexTangentsHelper = function(e, t, r, i) { this.object = e, this.size = void 0 !== t ? t : 1;
                for (var o = void 0 !== r ? r : 255, a = void 0 !== i ? i : 1, s = new n.Geometry, h = (e.geometry.vertices, e.geometry.faces), l = 0, c = h.length; c > l; l++)
                    for (var u = h[l], p = 0, f = u.vertexTangents.length; f > p; p++) s.vertices.push(new n.Vector3), s.vertices.push(new n.Vector3);
                n.Line.call(this, s, new n.LineBasicMaterial({ color: o, linewidth: a }), n.LinePieces), this.matrixAutoUpdate = !1, this.update() }, n.VertexTangentsHelper.prototype = Object.create(n.Line.prototype), n.VertexTangentsHelper.prototype.constructor = n.VertexTangentsHelper, n.VertexTangentsHelper.prototype.update = function() {
                var e = new n.Vector3;
                return function() {
                    var t = ["a", "b", "c", "d"];
                    this.object.updateMatrixWorld(!0);
                    for (var r = this.geometry.vertices, i = this.object.geometry.vertices, n = this.object.geometry.faces, o = this.object.matrixWorld, a = 0, s = 0, h = n.length; h > s; s++)
                        for (var l = n[s], c = 0, u = l.vertexTangents.length; u > c; c++) {
                            var p = l[t[c]],
                                f = i[p],
                                d = l.vertexTangents[c];
                            r[a].copy(f).applyMatrix4(o), e.copy(d).transformDirection(o).multiplyScalar(this.size), e.add(r[a]), a += 1, r[a].copy(e), a += 1 }
                    return this.geometry.verticesNeedUpdate = !0, this } }(), n.WireframeHelper = function(e, t) {
                var r = void 0 !== t ? t : 16777215,
                    i = [0, 0],
                    o = {},
                    a = function(e, t) {
                        return e - t },
                    s = ["a", "b", "c"],
                    h = new n.BufferGeometry;
                if (e.geometry instanceof n.Geometry) {
                    for (var l = e.geometry.vertices, c = e.geometry.faces, u = 0, p = new Uint32Array(6 * c.length), f = 0, d = c.length; d > f; f++)
                        for (var m = c[f], g = 0; 3 > g; g++) { i[0] = m[s[g]], i[1] = m[s[(g + 1) % 3]], i.sort(a);
                            var v = i.toString();
                            void 0 === o[v] && (p[2 * u] = i[0], p[2 * u + 1] = i[1], o[v] = !0, u++) }
                    for (var y = new Float32Array(2 * u * 3), f = 0, d = u; d > f; f++)
                        for (var g = 0; 2 > g; g++) {
                            var x = l[p[2 * f + g]],
                                b = 6 * f + 3 * g;
                            y[b + 0] = x.x, y[b + 1] = x.y, y[b + 2] = x.z }
                    h.addAttribute("position", new n.BufferAttribute(y, 3)) } else if (e.geometry instanceof n.BufferGeometry)
                    if (void 0 !== e.geometry.attributes.index) {
                        var l = e.geometry.attributes.position.array,
                            w = e.geometry.attributes.index.array,
                            _ = e.geometry.drawcalls,
                            u = 0;
                        0 === _.length && (_ = [{ count: w.length, index: 0, start: 0 }]);
                        for (var p = new Uint32Array(2 * w.length), M = 0, S = _.length; S > M; ++M)
                            for (var T = _[M].start, C = _[M].count, b = _[M].index, f = T, E = T + C; E > f; f += 3)
                                for (var g = 0; 3 > g; g++) { i[0] = b + w[f + g], i[1] = b + w[f + (g + 1) % 3], i.sort(a);
                                    var v = i.toString();
                                    void 0 === o[v] && (p[2 * u] = i[0], p[2 * u + 1] = i[1], o[v] = !0, u++) }
                        for (var y = new Float32Array(2 * u * 3), f = 0, d = u; d > f; f++)
                            for (var g = 0; 2 > g; g++) {
                                var b = 6 * f + 3 * g,
                                    A = 3 * p[2 * f + g];
                                y[b + 0] = l[A], y[b + 1] = l[A + 1], y[b + 2] = l[A + 2] }
                        h.addAttribute("position", new n.BufferAttribute(y, 3)) } else {
                        for (var l = e.geometry.attributes.position.array, u = l.length / 3, L = u / 3, y = new Float32Array(2 * u * 3), f = 0, d = L; d > f; f++)
                            for (var g = 0; 3 > g; g++) {
                                var b = 18 * f + 6 * g,
                                    P = 9 * f + 3 * g;
                                y[b + 0] = l[P], y[b + 1] = l[P + 1], y[b + 2] = l[P + 2];
                                var A = 9 * f + 3 * ((g + 1) % 3);
                                y[b + 3] = l[A], y[b + 4] = l[A + 1], y[b + 5] = l[A + 2] }
                        h.addAttribute("position", new n.BufferAttribute(y, 3)) }
                n.Line.call(this, h, new n.LineBasicMaterial({ color: r }), n.LinePieces), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1 }, n.WireframeHelper.prototype = Object.create(n.Line.prototype), n.WireframeHelper.prototype.constructor = n.WireframeHelper, n.ImmediateRenderObject = function() { n.Object3D.call(this), this.render = function() {} }, n.ImmediateRenderObject.prototype = Object.create(n.Object3D.prototype), n.ImmediateRenderObject.prototype.constructor = n.ImmediateRenderObject, n.MorphBlendMesh = function(e, t) { n.Mesh.call(this, e, t), this.animationsMap = {}, this.animationsList = [];
                var r = this.geometry.morphTargets.length,
                    i = "__default",
                    o = 0,
                    a = r - 1,
                    s = r / 1;
                this.createAnimation(i, o, a, s), this.setAnimationWeight(i, 1) }, n.MorphBlendMesh.prototype = Object.create(n.Mesh.prototype), n.MorphBlendMesh.prototype.constructor = n.MorphBlendMesh, n.MorphBlendMesh.prototype.createAnimation = function(e, t, r, i) {
                var n = { startFrame: t, endFrame: r, length: r - t + 1, fps: i, duration: (r - t) / i, lastFrame: 0, currentFrame: 0, active: !1, time: 0, direction: 1, weight: 1, directionBackwards: !1, mirroredLoop: !1 };
                this.animationsMap[e] = n, this.animationsList.push(n)
            }, n.MorphBlendMesh.prototype.autoCreateAnimations = function(e) {
                for (var t, r = /([a-z]+)_?(\d+)/, i = {}, n = this.geometry, o = 0, a = n.morphTargets.length; a > o; o++) {
                    var s = n.morphTargets[o],
                        h = s.name.match(r);
                    if (h && h.length > 1) {
                        {
                            var l = h[1];
                            h[2] }
                        i[l] || (i[l] = { start: 1 / 0, end: -1 / 0 });
                        var c = i[l];
                        o < c.start && (c.start = o), o > c.end && (c.end = o), t || (t = l) } }
                for (var l in i) {
                    var c = i[l];
                    this.createAnimation(l, c.start, c.end, e) }
                this.firstAnimation = t }, n.MorphBlendMesh.prototype.setAnimationDirectionForward = function(e) {
                var t = this.animationsMap[e];
                t && (t.direction = 1, t.directionBackwards = !1) }, n.MorphBlendMesh.prototype.setAnimationDirectionBackward = function(e) {
                var t = this.animationsMap[e];
                t && (t.direction = -1, t.directionBackwards = !0) }, n.MorphBlendMesh.prototype.setAnimationFPS = function(e, t) {
                var r = this.animationsMap[e];
                r && (r.fps = t, r.duration = (r.end - r.start) / r.fps) }, n.MorphBlendMesh.prototype.setAnimationDuration = function(e, t) {
                var r = this.animationsMap[e];
                r && (r.duration = t, r.fps = (r.end - r.start) / r.duration) }, n.MorphBlendMesh.prototype.setAnimationWeight = function(e, t) {
                var r = this.animationsMap[e];
                r && (r.weight = t) }, n.MorphBlendMesh.prototype.setAnimationTime = function(e, t) {
                var r = this.animationsMap[e];
                r && (r.time = t) }, n.MorphBlendMesh.prototype.getAnimationTime = function(e) {
                var t = 0,
                    r = this.animationsMap[e];
                return r && (t = r.time), t }, n.MorphBlendMesh.prototype.getAnimationDuration = function(e) {
                var t = -1,
                    r = this.animationsMap[e];
                return r && (t = r.duration), t }, n.MorphBlendMesh.prototype.playAnimation = function(e) {
                var t = this.animationsMap[e];
                t ? (t.time = 0, t.active = !0) : console.warn("animation[" + e + "] undefined") }, n.MorphBlendMesh.prototype.stopAnimation = function(e) {
                var t = this.animationsMap[e];
                t && (t.active = !1) }, n.MorphBlendMesh.prototype.update = function(e) {
                for (var t = 0, r = this.animationsList.length; r > t; t++) {
                    var i = this.animationsList[t];
                    if (i.active) {
                        var o = i.duration / i.length;
                        i.time += i.direction * e, i.mirroredLoop ? (i.time > i.duration || i.time < 0) && (i.direction *= -1, i.time > i.duration && (i.time = i.duration, i.directionBackwards = !0), i.time < 0 && (i.time = 0, i.directionBackwards = !1)) : (i.time = i.time % i.duration, i.time < 0 && (i.time += i.duration));
                        var a = i.startFrame + n.Math.clamp(Math.floor(i.time / o), 0, i.length - 1),
                            s = i.weight;
                        a !== i.currentFrame && (this.morphTargetInfluences[i.lastFrame] = 0, this.morphTargetInfluences[i.currentFrame] = 1 * s, this.morphTargetInfluences[a] = 0, i.lastFrame = i.currentFrame, i.currentFrame = a);
                        var h = i.time % o / o;
                        i.directionBackwards && (h = 1 - h), this.morphTargetInfluences[i.currentFrame] = h * s, this.morphTargetInfluences[i.lastFrame] = (1 - h) * s } } }, "undefined" != typeof r ? ("undefined" != typeof t && t.exports && (r = t.exports = n), r.THREE = n) : this.THREE = n
    }, {}],
    7: [function(e, t) {
        {
            var r = e("three");
            e("./Projector") }
        r.SpriteCanvasMaterial = function(e) { r.Material.call(this), this.type = "SpriteCanvasMaterial", this.color = new r.Color(16777215), this.program = function() {}, this.setValues(e) }, r.SpriteCanvasMaterial.prototype = Object.create(r.Material.prototype), r.SpriteCanvasMaterial.prototype.constructor = r.SpriteCanvasMaterial, r.SpriteCanvasMaterial.prototype.clone = function() {
            var e = new r.SpriteCanvasMaterial;
            return r.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.program = this.program, e }, r.CanvasRenderer = function(e) {
            function t() { bt.setRGB(0, 0, 0), wt.setRGB(0, 0, 0), _t.setRGB(0, 0, 0);
                for (var e = 0, t = T.length; t > e; e++) {
                    var i = T[e],
                        n = i.color;
                    i instanceof r.AmbientLight ? bt.add(n) : i instanceof r.DirectionalLight ? wt.add(n) : i instanceof r.PointLight && _t.add(n) } }

            function i(e, t, i) {
                for (var n = 0, o = T.length; o > n; n++) {
                    var a = T[n];
                    if (mt.copy(a.color), a instanceof r.DirectionalLight) {
                        var s = Mt.setFromMatrixPosition(a.matrixWorld).normalize(),
                            h = t.dot(s);
                        if (0 >= h) continue;
                        h *= a.intensity, i.add(mt.multiplyScalar(h)) } else if (a instanceof r.PointLight) {
                        var s = Mt.setFromMatrixPosition(a.matrixWorld),
                            h = t.dot(Mt.subVectors(s, e).normalize());
                        if (0 >= h) continue;
                        if (h *= 0 == a.distance ? 1 : 1 - Math.min(e.distanceTo(s) / a.distance, 1), 0 == h) continue;
                        h *= a.intensity, i.add(mt.multiplyScalar(h)) } } }

            function n(e, t, i) { d(i.opacity), m(i.blending);
                var n = t.scale.x * Y,
                    o = t.scale.y * K,
                    a = .5 * Math.sqrt(n * n + o * o);
                if (xt.min.set(e.x - a, e.y - a), xt.max.set(e.x + a, e.y + a), i instanceof r.SpriteMaterial) {
                    var s = i.map;
                    if (null !== s && void 0 !== s.image) { s.hasEventListener("update", c) === !1 && (s.image.width > 0 && u(s), s.addEventListener("update", c));
                        var h = gt[s.id];
                        void 0 !== h ? b(h) : b("rgba( 0, 0, 0, 1 )");
                        var l = s.image,
                            p = l.width * s.offset.x,
                            f = l.height * s.offset.y,
                            g = l.width * s.repeat.x,
                            v = l.height * s.repeat.y,
                            y = n / g,
                            w = o / v;
                        tt.save(), tt.translate(e.x, e.y), 0 !== i.rotation && tt.rotate(i.rotation), tt.translate(-n / 2, -o / 2), tt.scale(y, w), tt.translate(-p, -f), tt.fillRect(p, f, g, v), tt.restore() } else b(i.color.getStyle()), tt.save(), tt.translate(e.x, e.y), 0 !== i.rotation && tt.rotate(i.rotation), tt.scale(n, -o), tt.fillRect(-.5, -.5, 1, 1), tt.restore() } else i instanceof r.SpriteCanvasMaterial && (x(i.color.getStyle()), b(i.color.getStyle()), tt.save(), tt.translate(e.x, e.y), 0 !== i.rotation && tt.rotate(i.rotation), tt.scale(n, o), i.program(tt), tt.restore()) }

            function o(e, t, i, n) {
                if (d(n.opacity), m(n.blending), tt.beginPath(), tt.moveTo(e.positionScreen.x, e.positionScreen.y), tt.lineTo(t.positionScreen.x, t.positionScreen.y), n instanceof r.LineBasicMaterial) {
                    if (g(n.linewidth), v(n.linecap), y(n.linejoin), n.vertexColors !== r.VertexColors) x(n.color.getStyle());
                    else {
                        var o = i.vertexColors[0].getStyle(),
                            a = i.vertexColors[1].getStyle();
                        if (o === a) x(o);
                        else {
                            try {
                                var s = tt.createLinearGradient(e.positionScreen.x, e.positionScreen.y, t.positionScreen.x, t.positionScreen.y);
                                s.addColorStop(0, o), s.addColorStop(1, a) } catch (h) { s = o }
                            x(s) } }
                    tt.stroke(), xt.expandByScalar(2 * n.linewidth) } else n instanceof r.LineDashedMaterial && (g(n.linewidth), v(n.linecap), y(n.linejoin), x(n.color.getStyle()), w([n.dashSize, n.gapSize]), tt.stroke(), xt.expandByScalar(2 * n.linewidth), w([])) }

            function a(e, t, n, o, a, c, u, f) {
                if (H.info.render.vertices += 3, H.info.render.faces++, d(f.opacity), m(f.blending), P = e.positionScreen.x, R = e.positionScreen.y, F = t.positionScreen.x, B = t.positionScreen.y, U = n.positionScreen.x, D = n.positionScreen.y, s(P, R, F, B, U, D), (f instanceof r.MeshLambertMaterial || f instanceof r.MeshPhongMaterial) && null === f.map) ft.copy(f.color), dt.copy(f.emissive), f.vertexColors === r.FaceColors && ft.multiply(u.color), pt.copy(bt), St.copy(e.positionWorld).add(t.positionWorld).add(n.positionWorld).divideScalar(3), i(St, u.normalModel, pt), pt.multiply(ft).add(dt), f.wireframe === !0 ? h(pt, f.wireframeLinewidth, f.wireframeLinecap, f.wireframeLinejoin) : l(pt);
                else if (f instanceof r.MeshBasicMaterial || f instanceof r.MeshLambertMaterial || f instanceof r.MeshPhongMaterial)
                    if (null !== f.map) {
                        var g = f.map.mapping;
                        g === r.UVMapping && (V = u.uvs, p(P, R, F, B, U, D, V[o].x, V[o].y, V[a].x, V[a].y, V[c].x, V[c].y, f.map)) } else null !== f.envMap ? f.envMap.mapping === r.SphericalReflectionMapping && (Tt.copy(u.vertexNormalsModel[o]).applyMatrix3(Ct), z = .5 * Tt.x + .5, k = .5 * Tt.y + .5, Tt.copy(u.vertexNormalsModel[a]).applyMatrix3(Ct), N = .5 * Tt.x + .5, O = .5 * Tt.y + .5, Tt.copy(u.vertexNormalsModel[c]).applyMatrix3(Ct), G = .5 * Tt.x + .5, I = .5 * Tt.y + .5, p(P, R, F, B, U, D, z, k, N, O, G, I, f.envMap)) : (pt.copy(f.color), f.vertexColors === r.FaceColors && pt.multiply(u.color), f.wireframe === !0 ? h(pt, f.wireframeLinewidth, f.wireframeLinecap, f.wireframeLinejoin) : l(pt));
                else f instanceof r.MeshDepthMaterial ? (pt.r = pt.g = pt.b = 1 - _(e.positionScreen.z * e.positionScreen.w, C.near, C.far), f.wireframe === !0 ? h(pt, f.wireframeLinewidth, f.wireframeLinecap, f.wireframeLinejoin) : l(pt)) : f instanceof r.MeshNormalMaterial ? (Tt.copy(u.normalModel).applyMatrix3(Ct), pt.setRGB(Tt.x, Tt.y, Tt.z).multiplyScalar(.5).addScalar(.5), f.wireframe === !0 ? h(pt, f.wireframeLinewidth, f.wireframeLinecap, f.wireframeLinejoin) : l(pt)) : (pt.setRGB(1, 1, 1), f.wireframe === !0 ? h(pt, f.wireframeLinewidth, f.wireframeLinecap, f.wireframeLinejoin) : l(pt)) }

            function s(e, t, r, i, n, o) { tt.beginPath(), tt.moveTo(e, t), tt.lineTo(r, i), tt.lineTo(n, o), tt.closePath() }

            function h(e, t, r, i) { g(t), v(r), y(i), x(e.getStyle()), tt.stroke(), xt.expandByScalar(2 * t) }

            function l(e) { b(e.getStyle()), tt.fill() }

            function c(e) { u(e.target) }

            function u(e) {
                if (!(e instanceof r.CompressedTexture)) {
                    var t = e.wrapS === r.RepeatWrapping,
                        i = e.wrapT === r.RepeatWrapping,
                        n = e.image,
                        o = document.createElement("canvas");
                    o.width = n.width, o.height = n.height;
                    var a = o.getContext("2d");
                    a.setTransform(1, 0, 0, -1, 0, n.height), a.drawImage(n, 0, 0), gt[e.id] = tt.createPattern(o, t === !0 && i === !0 ? "repeat" : t === !0 && i === !1 ? "repeat-x" : t === !1 && i === !0 ? "repeat-y" : "no-repeat") } }

            function p(e, t, i, n, o, a, s, h, l, p, f, d, m) {
                if (!(m instanceof r.DataTexture)) { m.hasEventListener("update", c) === !1 && (void 0 !== m.image && m.image.width > 0 && u(m), m.addEventListener("update", c));
                    var g = gt[m.id];
                    if (void 0 === g) return b("rgba(0,0,0,1)"), tt.fill(), void 0;
                    b(g);
                    var v, y, x, w, _, M, S, T, C = m.offset.x / m.repeat.x,
                        E = m.offset.y / m.repeat.y,
                        A = m.image.width * m.repeat.x,
                        L = m.image.height * m.repeat.y;
                    s = (s + C) * A, h = (h + E) * L, l = (l + C) * A, p = (p + E) * L, f = (f + C) * A, d = (d + E) * L, i -= e, n -= t, o -= e, a -= t, l -= s, p -= h, f -= s, d -= h, S = l * d - f * p, 0 !== S && (T = 1 / S, v = (d * i - p * o) * T, y = (d * n - p * a) * T, x = (l * o - f * i) * T, w = (l * a - f * n) * T, _ = e - v * s - x * h, M = t - y * s - w * h, tt.save(), tt.transform(v, y, x, w, _, M), tt.fill(), tt.restore()) } }

            function f(e, t, r) {
                var i, n = t.x - e.x,
                    o = t.y - e.y,
                    a = n * n + o * o;
                0 !== a && (i = r / Math.sqrt(a), n *= i, o *= i, t.x += n, t.y += o, e.x -= n, e.y -= o) }

            function d(e) { nt !== e && (tt.globalAlpha = e, nt = e) }

            function m(e) { ot !== e && (e === r.NormalBlending ? tt.globalCompositeOperation = "source-over" : e === r.AdditiveBlending ? tt.globalCompositeOperation = "lighter" : e === r.SubtractiveBlending && (tt.globalCompositeOperation = "darker"), ot = e) }

            function g(e) { ht !== e && (tt.lineWidth = e, ht = e) }

            function v(e) { lt !== e && (tt.lineCap = e, lt = e) }

            function y(e) { ct !== e && (tt.lineJoin = e, ct = e) }

            function x(e) { at !== e && (tt.strokeStyle = e, at = e) }

            function b(e) { st !== e && (tt.fillStyle = e, st = e) }

            function w(e) { ut.length !== e.length && (tt.setLineDash(e), ut = e) }
            console.log("THREE.CanvasRenderer", r.REVISION);
            var _ = r.Math.smoothstep;
            e = e || {};
            var M, S, T, C, E, A, L, P, R, F, B, U, D, V, z, k, N, O, G, I, H = this,
                W = new r.Projector,
                j = void 0 !== e.canvas ? e.canvas : document.createElement("canvas"),
                X = j.width,
                q = j.height,
                Y = Math.floor(X / 2),
                K = Math.floor(q / 2),
                Q = 0,
                Z = 0,
                J = X,
                $ = q,
                et = 1,
                tt = j.getContext("2d", { alpha: e.alpha === !0 }),
                rt = new r.Color(0),
                it = e.alpha === !0 ? 0 : 1,
                nt = 1,
                ot = 0,
                at = null,
                st = null,
                ht = null,
                lt = null,
                ct = null,
                ut = [],
                pt = (new r.RenderableVertex, new r.RenderableVertex, new r.Color),
                ft = (new r.Color, new r.Color, new r.Color, new r.Color, new r.Color),
                dt = new r.Color,
                mt = new r.Color,
                gt = {},
                vt = new r.Box2,
                yt = new r.Box2,
                xt = new r.Box2,
                bt = new r.Color,
                wt = new r.Color,
                _t = new r.Color,
                Mt = new r.Vector3,
                St = new r.Vector3,
                Tt = new r.Vector3,
                Ct = new r.Matrix3;
            void 0 === tt.setLineDash && (tt.setLineDash = function() {}), this.domElement = j, this.autoClear = !0, this.sortObjects = !0, this.sortElements = !0, this.info = { render: { vertices: 0, faces: 0 } }, this.supportsVertexTextures = function() {}, this.setFaceCulling = function() {}, this.getPixelRatio = function() {
                return et }, this.setPixelRatio = function(e) { et = e }, this.setSize = function(e, t, r) { X = e * et, q = t * et, j.width = X, j.height = q, Y = Math.floor(X / 2), K = Math.floor(q / 2), r !== !1 && (j.style.width = e + "px", j.style.height = t + "px"), vt.min.set(-Y, -K), vt.max.set(Y, K), yt.min.set(-Y, -K), yt.max.set(Y, K), nt = 1, ot = 0, at = null, st = null, ht = null, lt = null, ct = null, this.setViewport(0, 0, e, t) }, this.setViewport = function(e, t, r, i) { Q = e * et, Z = t * et, J = r * et, $ = i * et }, this.setScissor = function() {}, this.enableScissorTest = function() {}, this.setClearColor = function(e, t) { rt.set(e), it = void 0 !== t ? t : 1, yt.min.set(-Y, -K), yt.max.set(Y, K) }, this.setClearColorHex = function(e, t) { console.warn("THREE.CanvasRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead."), this.setClearColor(e, t) }, this.getClearColor = function() {
                return rt }, this.getClearAlpha = function() {
                return it }, this.getMaxAnisotropy = function() {
                return 0 }, this.clear = function() { yt.empty() === !1 && (yt.intersect(vt), yt.expandByScalar(2), yt.min.x = yt.min.x + Y, yt.min.y = -yt.min.y + K, yt.max.x = yt.max.x + Y, yt.max.y = -yt.max.y + K, 1 > it && tt.clearRect(0 | yt.min.x, 0 | yt.max.y, yt.max.x - yt.min.x | 0, yt.min.y - yt.max.y | 0), it > 0 && (m(r.NormalBlending), d(1), b("rgba(" + Math.floor(255 * rt.r) + "," + Math.floor(255 * rt.g) + "," + Math.floor(255 * rt.b) + "," + it + ")"), tt.fillRect(0 | yt.min.x, 0 | yt.max.y, yt.max.x - yt.min.x | 0, yt.min.y - yt.max.y | 0)), yt.makeEmpty()) }, this.clearColor = function() {}, this.clearDepth = function() {}, this.clearStencil = function() {}, this.render = function(e, i) {
                if (i instanceof r.Camera == !1) return console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera."), void 0;
                this.autoClear === !0 && this.clear(), H.info.render.vertices = 0, H.info.render.faces = 0, tt.setTransform(J / X, 0, 0, -$ / q, Q, q - Z), tt.translate(Y, K), M = W.projectScene(e, i, this.sortObjects, this.sortElements), S = M.elements, T = M.lights, C = i, Ct.getNormalMatrix(i.matrixWorldInverse), t();
                for (var s = 0, h = S.length; h > s; s++) {
                    var l = S[s],
                        c = l.material;
                    if (void 0 !== c && 0 !== c.opacity) {
                        if (xt.makeEmpty(), l instanceof r.RenderableSprite) E = l, E.x *= Y, E.y *= K, n(E, l, c);
                        else if (l instanceof r.RenderableLine) E = l.v1, A = l.v2, E.positionScreen.x *= Y, E.positionScreen.y *= K, A.positionScreen.x *= Y, A.positionScreen.y *= K, xt.setFromPoints([E.positionScreen, A.positionScreen]), vt.isIntersectionBox(xt) === !0 && o(E, A, l, c);
                        else if (l instanceof r.RenderableFace) {
                            if (E = l.v1, A = l.v2, L = l.v3, E.positionScreen.z < -1 || E.positionScreen.z > 1) continue;
                            if (A.positionScreen.z < -1 || A.positionScreen.z > 1) continue;
                            if (L.positionScreen.z < -1 || L.positionScreen.z > 1) continue;
                            E.positionScreen.x *= Y, E.positionScreen.y *= K, A.positionScreen.x *= Y, A.positionScreen.y *= K, L.positionScreen.x *= Y, L.positionScreen.y *= K, c.overdraw > 0 && (f(E.positionScreen, A.positionScreen, c.overdraw), f(A.positionScreen, L.positionScreen, c.overdraw), f(L.positionScreen, E.positionScreen, c.overdraw)), xt.setFromPoints([E.positionScreen, A.positionScreen, L.positionScreen]), vt.isIntersectionBox(xt) === !0 && a(E, A, L, 0, 1, 2, l, c) }
                        yt.union(xt) } }
                tt.setTransform(1, 0, 0, 1, 0, 0) } }, t.exports = r.CanvasRenderer }, { "./Projector": 9, three: 6 }],
    8: [function(e, t) {
        var r = e("three");
        ConvexGeometry = function(e) {
            function t(t) {
                var r = e[t].clone(),
                    n = r.length();
                r.x += n * a(), r.y += n * a(), r.z += n * a();
                for (var s = [], l = 0; l < h.length;) {
                    var c = h[l];
                    if (i(c, r)) {
                        for (var u = 0; 3 > u; u++) {
                            for (var p = [c[u], c[(u + 1) % 3]], f = !0, d = 0; d < s.length; d++)
                                if (o(s[d], p)) { s[d] = s[s.length - 1], s.pop(), f = !1;
                                    break }
                            f && s.push(p) }
                        h[l] = h[h.length - 1], h.pop() } else l++ }
                for (var d = 0; d < s.length; d++) h.push([s[d][0], s[d][1], t]) }

            function i(t, r) {
                var i = e[t[0]],
                    o = e[t[1]],
                    a = e[t[2]],
                    s = n(i, o, a),
                    h = s.dot(i);
                return s.dot(r) >= h }

            function n(e, t, i) {
                var n = new r.Vector3,
                    o = new r.Vector3;
                return n.subVectors(i, t), o.subVectors(e, t), n.cross(o), n.normalize(), n }

            function o(e, t) {
                return e[0] === t[1] && e[1] === t[0] }

            function a() {
                return 2 * (Math.random() - .5) * 1e-6 }

            function s(e) {
                var t = e.length();
                return new r.Vector2(e.x / t, e.y / t) }
            r.Geometry.call(this);
            for (var h = [
                    [0, 1, 2],
                    [0, 2, 1]
                ], l = 3; l < e.length; l++) t(l);
            for (var c = 0, u = new Array(e.length), l = 0; l < h.length; l++)
                for (var p = h[l], f = 0; 3 > f; f++) void 0 === u[p[f]] && (u[p[f]] = c++, this.vertices.push(e[p[f]])), p[f] = u[p[f]];
            for (var l = 0; l < h.length; l++) this.faces.push(new r.Face3(h[l][0], h[l][1], h[l][2]));
            for (var l = 0; l < this.faces.length; l++) {
                var p = this.faces[l];
                this.faceVertexUvs[0].push([s(this.vertices[p.a]), s(this.vertices[p.b]), s(this.vertices[p.c])]) }
            this.computeFaceNormals(), this.computeVertexNormals() }, ConvexGeometry.prototype = Object.create(r.Geometry.prototype), ConvexGeometry.prototype.constructor = ConvexGeometry, t.exports = ConvexGeometry }, { three: 6 }],
    9: [function(e, t) {
        var r = e("three");
        r.RenderableObject = function() { this.id = 0, this.object = null, this.z = 0 }, r.RenderableFace = function() { this.id = 0, this.v1 = new r.RenderableVertex, this.v2 = new r.RenderableVertex, this.v3 = new r.RenderableVertex, this.normalModel = new r.Vector3, this.vertexNormalsModel = [new r.Vector3, new r.Vector3, new r.Vector3], this.vertexNormalsLength = 0, this.color = new r.Color, this.material = null, this.uvs = [new r.Vector2, new r.Vector2, new r.Vector2], this.z = 0 }, r.RenderableVertex = function() { this.position = new r.Vector3, this.positionWorld = new r.Vector3, this.positionScreen = new r.Vector4, this.visible = !0 }, r.RenderableVertex.prototype.copy = function(e) { this.positionWorld.copy(e.positionWorld), this.positionScreen.copy(e.positionScreen) }, r.RenderableLine = function() { this.id = 0, this.v1 = new r.RenderableVertex, this.v2 = new r.RenderableVertex, this.vertexColors = [new r.Color, new r.Color], this.material = null, this.z = 0 }, r.RenderableSprite = function() { this.id = 0, this.object = null, this.x = 0, this.y = 0, this.z = 0, this.rotation = 0, this.scale = new r.Vector2, this.material = null }, r.Projector = function() {
            function e() {
                if (l === b) {
                    var e = new r.RenderableObject;
                    return x.push(e), b++, l++, e }
                return x[l++] }

            function t() {
                if (u === _) {
                    var e = new r.RenderableVertex;
                    return w.push(e), _++, u++, e }
                return w[u++] }

            function i() {
                if (f === S) {
                    var e = new r.RenderableFace;
                    return M.push(e), S++, f++, e }
                return M[f++] }

            function n() {
                if (m === C) {
                    var e = new r.RenderableLine;
                    return T.push(e), C++, m++, e }
                return T[m++] }

            function o() {
                if (v === A) {
                    var e = new r.RenderableSprite;
                    return E.push(e), A++, v++, e }
                return E[v++] }

            function a(e, t) {
                return e.z !== t.z ? t.z - e.z : e.id !== t.id ? e.id - t.id : 0 }

            function s(e, t) {
                var r = 0,
                    i = 1,
                    n = e.z + e.w,
                    o = t.z + t.w,
                    a = -e.z + e.w,
                    s = -t.z + t.w;
                return n >= 0 && o >= 0 && a >= 0 && s >= 0 ? !0 : 0 > n && 0 > o || 0 > a && 0 > s ? !1 : (0 > n ? r = Math.max(r, n / (n - o)) : 0 > o && (i = Math.min(i, n / (n - o))), 0 > a ? r = Math.max(r, a / (a - s)) : 0 > s && (i = Math.min(i, a / (a - s))), r > i ? !1 : (e.lerp(t, r), t.lerp(e, 1 - i), !0)) }
            var h, l, c, u, p, f, d, m, g, v, y, x = [],
                b = 0,
                w = [],
                _ = 0,
                M = [],
                S = 0,
                T = [],
                C = 0,
                E = [],
                A = 0,
                L = { objects: [], lights: [], elements: [] },
                P = new r.Vector3,
                R = new r.Vector4,
                F = new r.Box3(new r.Vector3(-1, -1, -1), new r.Vector3(1, 1, 1)),
                B = new r.Box3,
                U = new Array(3),
                D = (new Array(4), new r.Matrix4),
                V = new r.Matrix4,
                z = new r.Matrix4,
                k = new r.Matrix3,
                N = new r.Frustum,
                O = new r.Vector4,
                G = new r.Vector4;
            this.projectVector = function(e, t) { console.warn("THREE.Projector: .projectVector() is now vector.project()."), e.project(t) }, this.unprojectVector = function(e, t) { console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), e.unproject(t) }, this.pickingRay = function() { console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().") };
            var I = function() {
                    var e = [],
                        o = [],
                        a = null,
                        s = null,
                        h = new r.Matrix3,
                        l = function(t) { a = t, s = a.material, h.getNormalMatrix(a.matrixWorld), e.length = 0, o.length = 0 },
                        u = function(e) {
                            var t = e.position,
                                r = e.positionWorld,
                                i = e.positionScreen;
                            r.copy(t).applyMatrix4(y), i.copy(r).applyMatrix4(V);
                            var n = 1 / i.w;
                            i.x *= n, i.y *= n, i.z *= n, e.visible = i.x >= -1 && i.x <= 1 && i.y >= -1 && i.y <= 1 && i.z >= -1 && i.z <= 1 },
                        f = function(e, r, i) { c = t(), c.position.set(e, r, i), u(c) },
                        m = function(t, r, i) { e.push(t, r, i) },
                        g = function(e, t) { o.push(e, t) },
                        v = function(e, t, r) {
                            return e.visible === !0 || t.visible === !0 || r.visible === !0 ? !0 : (U[0] = e.positionScreen, U[1] = t.positionScreen, U[2] = r.positionScreen, F.isIntersectionBox(B.setFromPoints(U))) },
                        x = function(e, t, r) {
                            return (r.positionScreen.x - e.positionScreen.x) * (t.positionScreen.y - e.positionScreen.y) - (r.positionScreen.y - e.positionScreen.y) * (t.positionScreen.x - e.positionScreen.x) < 0 },
                        b = function(e, t) {
                            var r = w[e],
                                i = w[t];
                            d = n(), d.id = a.id, d.v1.copy(r), d.v2.copy(i), d.z = (r.positionScreen.z + i.positionScreen.z) / 2, d.material = a.material, L.elements.push(d) },
                        _ = function(t, n, l) {
                            var c = w[t],
                                u = w[n],
                                f = w[l];
                            if (v(c, u, f) !== !1 && (s.side === r.DoubleSide || x(c, u, f) === !0)) { p = i(), p.id = a.id, p.v1.copy(c), p.v2.copy(u), p.v3.copy(f), p.z = (c.positionScreen.z + u.positionScreen.z + f.positionScreen.z) / 3;
                                for (var d = 0; 3 > d; d++) {
                                    var m = 3 * arguments[d],
                                        g = p.vertexNormalsModel[d];
                                    g.set(e[m], e[m + 1], e[m + 2]), g.applyMatrix3(h).normalize();
                                    var y = 2 * arguments[d],
                                        b = p.uvs[d];
                                    b.set(o[y], o[y + 1]) }
                                p.vertexNormalsLength = 3, p.material = a.material, L.elements.push(p) } };
                    return { setObject: l, projectVertex: u, checkTriangleVisibility: v, checkBackfaceCulling: x, pushVertex: f, pushNormal: m, pushUv: g, pushLine: b, pushTriangle: _ } },
                H = new I;
            this.projectScene = function(c, x, b, _) { f = 0, m = 0, v = 0, L.elements.length = 0, c.autoUpdate === !0 && c.updateMatrixWorld(), void 0 === x.parent && x.updateMatrixWorld(), D.copy(x.matrixWorldInverse.getInverse(x.matrixWorld)), V.multiplyMatrices(x.projectionMatrix, D), N.setFromMatrix(V), l = 0, L.objects.length = 0, L.lights.length = 0, c.traverseVisible(function(t) {
                    if (t instanceof r.Light) L.lights.push(t);
                    else if (t instanceof r.Mesh || t instanceof r.Line || t instanceof r.Sprite) {
                        if (t.material.visible === !1) return;
                        (t.frustumCulled === !1 || N.intersectsObject(t) === !0) && (h = e(), h.id = t.id, h.object = t, P.setFromMatrixPosition(t.matrixWorld), P.applyProjection(V), h.z = P.z, L.objects.push(h)) } }), b === !0 && L.objects.sort(a);
                for (var M = 0, S = L.objects.length; S > M; M++) {
                    var T = L.objects[M].object,
                        C = T.geometry;
                    if (H.setObject(T), y = T.matrixWorld, u = 0, T instanceof r.Mesh) {
                        if (C instanceof r.BufferGeometry) {
                            var E = C.attributes,
                                A = C.offsets;
                            if (void 0 === E.position) continue;
                            for (var F = E.position.array, B = 0, U = F.length; U > B; B += 3) H.pushVertex(F[B], F[B + 1], F[B + 2]);
                            if (void 0 !== E.normal)
                                for (var I = E.normal.array, B = 0, U = I.length; U > B; B += 3) H.pushNormal(I[B], I[B + 1], I[B + 2]);
                            if (void 0 !== E.uv)
                                for (var W = E.uv.array, B = 0, U = W.length; U > B; B += 2) H.pushUv(W[B], W[B + 1]);
                            if (void 0 !== E.index) {
                                var j = E.index.array;
                                if (A.length > 0)
                                    for (var M = 0; M < A.length; M++)
                                        for (var X = A[M], q = X.index, B = X.start, U = X.start + X.count; U > B; B += 3) H.pushTriangle(j[B] + q, j[B + 1] + q, j[B + 2] + q);
                                else
                                    for (var B = 0, U = j.length; U > B; B += 3) H.pushTriangle(j[B], j[B + 1], j[B + 2]) } else
                                for (var B = 0, U = F.length / 3; U > B; B += 3) H.pushTriangle(B, B + 1, B + 2) } else if (C instanceof r.Geometry) {
                            var Y = C.vertices,
                                K = C.faces,
                                Q = C.faceVertexUvs[0];
                            k.getNormalMatrix(y);
                            for (var Z = T.material, J = Z instanceof r.MeshFaceMaterial, $ = J === !0 ? T.material : null, et = 0, tt = Y.length; tt > et; et++) {
                                var rt = Y[et];
                                if (P.copy(rt), Z.morphTargets === !0)
                                    for (var it = C.morphTargets, nt = T.morphTargetInfluences, ot = 0, at = it.length; at > ot; ot++) {
                                        var st = nt[ot];
                                        if (0 !== st) {
                                            var ht = it[ot],
                                                lt = ht.vertices[et];
                                            P.x += (lt.x - rt.x) * st, P.y += (lt.y - rt.y) * st, P.z += (lt.z - rt.z) * st } }
                                H.pushVertex(P.x, P.y, P.z) }
                            for (var ct = 0, ut = K.length; ut > ct; ct++) {
                                var pt = K[ct],
                                    Z = J === !0 ? $.materials[pt.materialIndex] : T.material;
                                if (void 0 !== Z) {
                                    var ft = Z.side,
                                        dt = w[pt.a],
                                        mt = w[pt.b],
                                        gt = w[pt.c];
                                    if (H.checkTriangleVisibility(dt, mt, gt) !== !1) {
                                        var vt = H.checkBackfaceCulling(dt, mt, gt);
                                        if (ft !== r.DoubleSide) {
                                            if (ft === r.FrontSide && vt === !1) continue;
                                            if (ft === r.BackSide && vt === !0) continue }
                                        p = i(), p.id = T.id, p.v1.copy(dt), p.v2.copy(mt), p.v3.copy(gt), p.normalModel.copy(pt.normal), vt !== !1 || ft !== r.BackSide && ft !== r.DoubleSide || p.normalModel.negate(), p.normalModel.applyMatrix3(k).normalize();
                                        for (var yt = pt.vertexNormals, xt = 0, bt = Math.min(yt.length, 3); bt > xt; xt++) {
                                            var wt = p.vertexNormalsModel[xt];
                                            wt.copy(yt[xt]), vt !== !1 || ft !== r.BackSide && ft !== r.DoubleSide || wt.negate(), wt.applyMatrix3(k).normalize() }
                                        p.vertexNormalsLength = yt.length;
                                        var _t = Q[ct];
                                        if (void 0 !== _t)
                                            for (var Mt = 0; 3 > Mt; Mt++) p.uvs[Mt].copy(_t[Mt]);
                                        p.color = pt.color, p.material = Z, p.z = (dt.positionScreen.z + mt.positionScreen.z + gt.positionScreen.z) / 3, L.elements.push(p) } } } } } else if (T instanceof r.Line) {
                        if (C instanceof r.BufferGeometry) {
                            var E = C.attributes;
                            if (void 0 !== E.position) {
                                for (var F = E.position.array, B = 0, U = F.length; U > B; B += 3) H.pushVertex(F[B], F[B + 1], F[B + 2]);
                                if (void 0 !== E.index)
                                    for (var j = E.index.array, B = 0, U = j.length; U > B; B += 2) H.pushLine(j[B], j[B + 1]);
                                else
                                    for (var St = T.mode === r.LinePieces ? 2 : 1, B = 0, U = F.length / 3 - 1; U > B; B += St) H.pushLine(B, B + 1) } } else if (C instanceof r.Geometry) { z.multiplyMatrices(V, y);
                            var Y = T.geometry.vertices;
                            if (0 === Y.length) continue;
                            dt = t(), dt.positionScreen.copy(Y[0]).applyMatrix4(z);
                            for (var St = T.mode === r.LinePieces ? 2 : 1, et = 1, tt = Y.length; tt > et; et++) dt = t(), dt.positionScreen.copy(Y[et]).applyMatrix4(z), (et + 1) % St > 0 || (mt = w[u - 2], O.copy(dt.positionScreen), G.copy(mt.positionScreen), s(O, G) === !0 && (O.multiplyScalar(1 / O.w), G.multiplyScalar(1 / G.w), d = n(), d.id = T.id, d.v1.positionScreen.copy(O), d.v2.positionScreen.copy(G), d.z = Math.max(O.z, G.z), d.material = T.material, T.material.vertexColors === r.VertexColors && (d.vertexColors[0].copy(T.geometry.colors[et]), d.vertexColors[1].copy(T.geometry.colors[et - 1])), L.elements.push(d))) } } else if (T instanceof r.Sprite) { R.set(y.elements[12], y.elements[13], y.elements[14], 1), R.applyMatrix4(V);
                        var Tt = 1 / R.w;
                        R.z *= Tt, R.z >= -1 && R.z <= 1 && (g = o(), g.id = T.id, g.x = R.x * Tt, g.y = R.y * Tt, g.z = R.z, g.object = T, g.rotation = T.rotation, g.scale.x = T.scale.x * Math.abs(g.x - (R.x + x.projectionMatrix.elements[0]) / (R.w + x.projectionMatrix.elements[12])), g.scale.y = T.scale.y * Math.abs(g.y - (R.y + x.projectionMatrix.elements[5]) / (R.w + x.projectionMatrix.elements[13])), g.material = T.material, L.elements.push(g)) } }
                return _ === !0 && L.elements.sort(a), L } }, t.exports = r.Projector }, { three: 6 }],
    10: [function(e, t) { t.exports = function() {
            return function(e) {
                var t, r = document.createElement("aside");
                r.className = "bespoke-dots", r.innerHTML = '<div class="states"></div>', t = r.querySelector(".states"), e.slides.forEach(function(r, i) {
                    var n = document.createElement("a"),
                        o = r.getAttribute("data-bespoke-hash");
                    o ? n.href = "#" + o : n.addEventListener("click", function() { e.slide(i) }, !1), t.appendChild(n) }), e.on("activate", function(r) { e.parent.setAttribute("bespoke-active", r.index), [].forEach.call(t.children, function(e, t) { e.classList[r.index === t ? "add" : "remove"]("active") }) }), e.parent.appendChild(r) } } }, {}],
    11: [function(e, t, r) {
        var i = function() {
                var e = document.createElement("script");
                e.type = "text/javascript", e.async = !0, e.src = ("https:" === document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t) },
            n = function() {
                var e = window._gaq = window._gaq || [];
                e.push(["_setAccount", "UA-20961733-1"]), e.push(["_setDomainName", "zhihu.com"]), e.push(["_trackPageview"]) };
        r.init = function() { i(), n() } }, {}],
    12: [function(e, t) {
        function r() { l.render(h, s) }

        function i() {
            var t = e("three"),
                i = e("./ConvexGeometry"),
                n = e("./CanvasRenderer");
            h = new t.Scene, s = new t.OrthographicCamera(u / -2, u / 2, p / 2, p / -2, 1, 900), s.position.set(100, 100, 600), s.lookAt(new t.Vector3(0, 0, 0)), h.add(s);
            var a = [new t.Vector3(100, 0, 0), new t.Vector3(0, 100, 0), new t.Vector3(0, 0, 100), new t.Vector3(0, 0, 0), new t.Vector3(100, 100, 100)];
            hexahedron = new t.Mesh(new i(a), new t.MeshBasicMaterial({ color: 65187, wireframe: !0 })), hexahedron.position.set(100, 200, 0), h.add(hexahedron), hexahedron.applyMatrix((new t.Matrix4).makeTranslation(0, 0, 0));
            var d = [new t.Vector3(100, 0, 0), new t.Vector3(0, 100, 0), new t.Vector3(0, 0, 0), new t.Vector3(100, 120, 0), new t.Vector3(50, 60, 100), new t.Vector3(60, 50, -100)];
            octahedron = new t.Mesh(new i(d), new t.MeshBasicMaterial({ color: 65187, wireframe: !0 })), octahedron.position.set(350, 0, -60), h.add(octahedron), torus = new t.Mesh(new t.TorusGeometry(105, 30, 3, 4), new t.MeshBasicMaterial({ visible: !1, wireframe: !0 })), torus.position.set(-200, -200, 0), h.add(torus), h.add(new t.EdgesHelper(torus, 65187)), cube = new t.Mesh(new t.BoxGeometry(40, 40, 40), new t.MeshBasicMaterial({ visible: !1, wireframe: !0 })), cube.position.set(-150, 180, 0), h.add(cube), h.add(new t.EdgesHelper(cube, 65187));
            var m = f.webgl ? t.WebGLRenderer : n;
            l = new m({ antialias: !0 }), l.setPixelRatio(window.devicePixelRatio), document.body.appendChild(l.domElement), l.setSize(u, p), quaternion = (new t.Quaternion).setFromAxisAngle(new t.Vector3(1, 0, 0), Math.PI / 2), torus.rotation.setFromQuaternion(quaternion), octahedron.rotation.setFromQuaternion((new t.Quaternion).setFromAxisAngle(new t.Vector3(0, 0, 1), Math.PI)), c.push(cube, torus, hexahedron, octahedron), o(), r() }

        function n() { requestAnimationFrame(n), cube.rotation.x += .01, cube.rotation.y += .02, hexahedron.rotation.x += .01, hexahedron.rotation.y += .02, octahedron.rotation.z += .01, octahedron.rotation.y += .01, torus.rotation.x += .01, torus.rotation.z += .02, r() }

        function o() { h.visible = !0;
            var e = [cube, torus, octahedron];
            c.forEach(function(t) { t.visible = -1 !== e.indexOf(t) }), cube.position.set(-150, 180, 0), torus.position.set(-200, -200, 0), octahedron.position.set(100, 260, 0) }

        function a() { h.visible = !0;
            var e = [cube, torus, hexahedron];
            c.forEach(function(t) { t.visible = -1 !== e.indexOf(t) }), cube.position.set(-150, -180, 0), torus.position.set(100, 300, 0), hexahedron.position.set(100, -150, 0) }
        var s, h, l, c = [],
            u = Math.min(window.innerWidth, 750),
            p = window.innerHeight,
            f = function() {
                var e = document.createElement("canvas"),
                    t = "getContext" in e;
                return { canvas: t, webgl: t && !!e.getContext("webgl") } }();
        t.exports = { init: i, animate: n, supported: f.canvas && window.Float32Array, hide: function() { h.visible = !1 }, applyOpeningPositions: o, applyEndingPositions: a } }, { "./CanvasRenderer": 7, "./ConvexGeometry": 8, three: 6 }],
    13: [function(e, t) { t.exports = function() {
            return function(e) {
                var t = Function.call.bind([].forEach),
                    r = "data-bg",
                    i = "[" + r + "]",
                    n = function(n) {
                        var o = e.slides[n];
                        o && t(o.querySelectorAll(i), function(e) {
                            var t = e.getAttribute(r),
                                i = getComputedStyle(e).backgroundImage;
                            t && "none" === i && (e.style.backgroundImage = "url(" + t + ")") }) };
                e.on("activate", function(e) { n(e.index - 1), n(e.index), n(e.index + 1) }) } } }, {}],
    14: [function(e) {
        var t = e("bespoke"),
            r = e("bespoke-keys"),
            i = e("bespoke-touch"),
            n = (e("bespoke-hash"), e("./dots")),
            o = e("./mousewheel"),
            a = e("./gl"),
            s = e("./ga"),
            h = e("./lazyload"),
            l = e("bespoke-classes"),
            c = function() {
                return function(e) { l()(e) } },
            u = function() {
                return function(e) {
                    var t, r = function(r) {
                        var i = r.index;
                        clearTimeout(t), 0 === i ? t = setTimeout(a.applyOpeningPositions, 500) : i == e.slides.length - 1 ? t = setTimeout(a.applyEndingPositions, 500) : a.hide() };
                    a.supported && (a.init(), e.on("activate", r), document.addEventListener("DOMContentLoaded", function() { setTimeout(a.animate, 600) }, !1)) } },
            p = [c(), n(), u(), r(), i("vertical"), h(), o()];
        t.from("article", p), document.addEventListener("DOMContentLoaded", s.init, !1) }, { "./dots": 10, "./ga": 11, "./gl": 12, "./lazyload": 13, "./mousewheel": 15, bespoke: 5, "bespoke-classes": 1, "bespoke-hash": 2, "bespoke-keys": 3, "bespoke-touch": 4 }],
    15: [function(e, t) { t.exports = function() {
            return function(e) {
                function t(t) {
                    var r = t.detail || -t.wheelDelta;
                    r > 0 ? e.next() : e.prev() }

                function r(e, t) { t = t || 120;
                    var r = 0;
                    return function() {
                        var i = Date.now();
                        i - r >= t && e.apply(this, arguments), r = i } }
                var i = r(t);
                document.addEventListener("DOMMouseScroll", i, !1), document.addEventListener("mousewheel", i, !1) } } }, {}]
}, {}, [14]);
