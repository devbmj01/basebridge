"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4283], {
        9340: function(e, t, r) {
            r.d(t, {
                K: function() {
                    return i
                },
                k: function() {
                    return o
                }
            });
            var i = function() {},
                o = function() {}
        },
        84283: function(e, t, r) {
            r.r(t), r.d(t, {
                WcmModal: function() {
                    return ip
                },
                WcmQrCode: function() {
                    return rv
                }
            });
            /**
             * @license
             * Copyright 2019 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let i = window,
                o = i.ShadowRoot && (void 0 === i.ShadyCSS || i.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
                l = Symbol(),
                a = new WeakMap;
            class n {
                constructor(e, t, r) {
                    if (this._$cssResult$ = !0, r !== l) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                    this.cssText = e, this.t = t
                }
                get styleSheet() {
                    let e = this.o,
                        t = this.t;
                    if (o && void 0 === e) {
                        let r = void 0 !== t && 1 === t.length;
                        r && (e = a.get(t)), void 0 === e && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText), r && a.set(t, e))
                    }
                    return e
                }
                toString() {
                    return this.cssText
                }
            }
            let s = e => new n("string" == typeof e ? e : e + "", void 0, l),
                c = (e, ...t) => {
                    let r = 1 === e.length ? e[0] : t.reduce((t, r, i) => t + (e => {
                        if (!0 === e._$cssResult$) return e.cssText;
                        if ("number" == typeof e) return e;
                        throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
                    })(r) + e[i + 1], e[0]);
                    return new n(r, e, l)
                },
                d = (e, t) => {
                    o ? e.adoptedStyleSheets = t.map(e => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach(t => {
                        let r = document.createElement("style"),
                            o = i.litNonce;
                        void 0 !== o && r.setAttribute("nonce", o), r.textContent = t.cssText, e.appendChild(r)
                    })
                },
                h = o ? e => e : e => e instanceof CSSStyleSheet ? (e => {
                    let t = "";
                    for (let r of e.cssRules) t += r.cssText;
                    return s(t)
                })(e) : e,
                m = window,
                p = m.trustedTypes,
                u = p ? p.emptyScript : "",
                w = m.reactiveElementPolyfillSupport,
                g = {
                    toAttribute(e, t) {
                        switch (t) {
                            case Boolean:
                                e = e ? u : null;
                                break;
                            case Object:
                            case Array:
                                e = null == e ? e : JSON.stringify(e)
                        }
                        return e
                    },
                    fromAttribute(e, t) {
                        let r = e;
                        switch (t) {
                            case Boolean:
                                r = null !== e;
                                break;
                            case Number:
                                r = null === e ? null : Number(e);
                                break;
                            case Object:
                            case Array:
                                try {
                                    r = JSON.parse(e)
                                } catch (e) {
                                    r = null
                                }
                        }
                        return r
                    }
                },
                v = (e, t) => t !== e && (t == t || e == e),
                f = {
                    attribute: !0,
                    type: String,
                    converter: g,
                    reflect: !1,
                    hasChanged: v
                },
                b = "finalized";
            class y extends HTMLElement {
                constructor() {
                    super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u()
                }
                static addInitializer(e) {
                    var t;
                    this.finalize(), (null !== (t = this.h) && void 0 !== t ? t : this.h = []).push(e)
                }
                static get observedAttributes() {
                    this.finalize();
                    let e = [];
                    return this.elementProperties.forEach((t, r) => {
                        let i = this._$Ep(r, t);
                        void 0 !== i && (this._$Ev.set(i, r), e.push(i))
                    }), e
                }
                static createProperty(e, t = f) {
                    if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
                        let r = "symbol" == typeof e ? Symbol() : "__" + e,
                            i = this.getPropertyDescriptor(e, r, t);
                        void 0 !== i && Object.defineProperty(this.prototype, e, i)
                    }
                }
                static getPropertyDescriptor(e, t, r) {
                    return {
                        get() {
                            return this[t]
                        },
                        set(i) {
                            let o = this[e];
                            this[t] = i, this.requestUpdate(e, o, r)
                        },
                        configurable: !0,
                        enumerable: !0
                    }
                }
                static getPropertyOptions(e) {
                    return this.elementProperties.get(e) || f
                }
                static finalize() {
                    if (this.hasOwnProperty(b)) return !1;
                    this[b] = !0;
                    let e = Object.getPrototypeOf(this);
                    if (e.finalize(), void 0 !== e.h && (this.h = [...e.h]), this.elementProperties = new Map(e.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
                        let e = this.properties,
                            t = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
                        for (let r of t) this.createProperty(r, e[r])
                    }
                    return this.elementStyles = this.finalizeStyles(this.styles), !0
                }
                static finalizeStyles(e) {
                    let t = [];
                    if (Array.isArray(e)) {
                        let r = new Set(e.flat(1 / 0).reverse());
                        for (let e of r) t.unshift(h(e))
                    } else void 0 !== e && t.push(h(e));
                    return t
                }
                static _$Ep(e, t) {
                    let r = t.attribute;
                    return !1 === r ? void 0 : "string" == typeof r ? r : "string" == typeof e ? e.toLowerCase() : void 0
                }
                u() {
                    var e;
                    this._$E_ = new Promise(e => this.enableUpdating = e), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (e = this.constructor.h) || void 0 === e || e.forEach(e => e(this))
                }
                addController(e) {
                    var t, r;
                    (null !== (t = this._$ES) && void 0 !== t ? t : this._$ES = []).push(e), void 0 !== this.renderRoot && this.isConnected && (null === (r = e.hostConnected) || void 0 === r || r.call(e))
                }
                removeController(e) {
                    var t;
                    null === (t = this._$ES) || void 0 === t || t.splice(this._$ES.indexOf(e) >>> 0, 1)
                }
                _$Eg() {
                    this.constructor.elementProperties.forEach((e, t) => {
                        this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]), delete this[t])
                    })
                }
                createRenderRoot() {
                    var e;
                    let t = null !== (e = this.shadowRoot) && void 0 !== e ? e : this.attachShadow(this.constructor.shadowRootOptions);
                    return d(t, this.constructor.elementStyles), t
                }
                connectedCallback() {
                    var e;
                    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (e = this._$ES) || void 0 === e || e.forEach(e => {
                        var t;
                        return null === (t = e.hostConnected) || void 0 === t ? void 0 : t.call(e)
                    })
                }
                enableUpdating(e) {}
                disconnectedCallback() {
                    var e;
                    null === (e = this._$ES) || void 0 === e || e.forEach(e => {
                        var t;
                        return null === (t = e.hostDisconnected) || void 0 === t ? void 0 : t.call(e)
                    })
                }
                attributeChangedCallback(e, t, r) {
                    this._$AK(e, r)
                }
                _$EO(e, t, r = f) {
                    var i;
                    let o = this.constructor._$Ep(e, r);
                    if (void 0 !== o && !0 === r.reflect) {
                        let l = (void 0 !== (null === (i = r.converter) || void 0 === i ? void 0 : i.toAttribute) ? r.converter : g).toAttribute(t, r.type);
                        this._$El = e, null == l ? this.removeAttribute(o) : this.setAttribute(o, l), this._$El = null
                    }
                }
                _$AK(e, t) {
                    var r;
                    let i = this.constructor,
                        o = i._$Ev.get(e);
                    if (void 0 !== o && this._$El !== o) {
                        let e = i.getPropertyOptions(o),
                            l = "function" == typeof e.converter ? {
                                fromAttribute: e.converter
                            } : void 0 !== (null === (r = e.converter) || void 0 === r ? void 0 : r.fromAttribute) ? e.converter : g;
                        this._$El = o, this[o] = l.fromAttribute(t, e.type), this._$El = null
                    }
                }
                requestUpdate(e, t, r) {
                    let i = !0;
                    void 0 !== e && (((r = r || this.constructor.getPropertyOptions(e)).hasChanged || v)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), !0 === r.reflect && this._$El !== e && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(e, r))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej())
                }
                async _$Ej() {
                    this.isUpdatePending = !0;
                    try {
                        await this._$E_
                    } catch (e) {
                        Promise.reject(e)
                    }
                    let e = this.scheduleUpdate();
                    return null != e && await e, !this.isUpdatePending
                }
                scheduleUpdate() {
                    return this.performUpdate()
                }
                performUpdate() {
                    var e;
                    if (!this.isUpdatePending) return;
                    this.hasUpdated, this._$Ei && (this._$Ei.forEach((e, t) => this[t] = e), this._$Ei = void 0);
                    let t = !1,
                        r = this._$AL;
                    try {
                        (t = this.shouldUpdate(r)) ? (this.willUpdate(r), null === (e = this._$ES) || void 0 === e || e.forEach(e => {
                            var t;
                            return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e)
                        }), this.update(r)) : this._$Ek()
                    } catch (e) {
                        throw t = !1, this._$Ek(), e
                    }
                    t && this._$AE(r)
                }
                willUpdate(e) {}
                _$AE(e) {
                    var t;
                    null === (t = this._$ES) || void 0 === t || t.forEach(e => {
                        var t;
                        return null === (t = e.hostUpdated) || void 0 === t ? void 0 : t.call(e)
                    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e)
                }
                _$Ek() {
                    this._$AL = new Map, this.isUpdatePending = !1
                }
                get updateComplete() {
                    return this.getUpdateComplete()
                }
                getUpdateComplete() {
                    return this._$E_
                }
                shouldUpdate(e) {
                    return !0
                }
                update(e) {
                    void 0 !== this._$EC && (this._$EC.forEach((e, t) => this._$EO(t, this[t], e)), this._$EC = void 0), this._$Ek()
                }
                updated(e) {}
                firstUpdated(e) {}
            }
            y[b] = !0, y.elementProperties = new Map, y.elementStyles = [], y.shadowRootOptions = {
                mode: "open"
            }, null == w || w({
                ReactiveElement: y
            }), (null !== (eb = m.reactiveElementVersions) && void 0 !== eb ? eb : m.reactiveElementVersions = []).push("1.6.2");
            let x = window,
                $ = x.trustedTypes,
                C = $ ? $.createPolicy("lit-html", {
                    createHTML: e => e
                }) : void 0,
                A = "$lit$",
                _ = `lit$${(Math.random()+"").slice(9)}$`,
                k = "?" + _,
                O = `<${k}>`,
                E = document,
                I = () => E.createComment(""),
                T = e => null === e || "object" != typeof e && "function" != typeof e,
                P = Array.isArray,
                M = e => P(e) || "function" == typeof(null == e ? void 0 : e[Symbol.iterator]),
                R = "[ 	\n\f\r]",
                S = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
                L = /-->/g,
                W = />/g,
                j = RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"),
                D = /'/g,
                N = /"/g,
                z = /^(?:script|style|textarea|title)$/i,
                U = e => (t, ...r) => ({
                    _$litType$: e,
                    strings: t,
                    values: r
                }),
                H = U(1),
                B = U(2),
                Z = Symbol.for("lit-noChange"),
                V = Symbol.for("lit-nothing"),
                q = new WeakMap,
                F = E.createTreeWalker(E, 129, null, !1);

            function K(e, t) {
                if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
                return void 0 !== C ? C.createHTML(t) : t
            }
            let Y = (e, t) => {
                let r = e.length - 1,
                    i = [],
                    o, l = 2 === t ? "<svg>" : "",
                    a = S;
                for (let t = 0; t < r; t++) {
                    let r = e[t],
                        n, s, c = -1,
                        d = 0;
                    for (; d < r.length && (a.lastIndex = d, null !== (s = a.exec(r)));) d = a.lastIndex, a === S ? "!--" === s[1] ? a = L : void 0 !== s[1] ? a = W : void 0 !== s[2] ? (z.test(s[2]) && (o = RegExp("</" + s[2], "g")), a = j) : void 0 !== s[3] && (a = j) : a === j ? ">" === s[0] ? (a = null != o ? o : S, c = -1) : void 0 === s[1] ? c = -2 : (c = a.lastIndex - s[2].length, n = s[1], a = void 0 === s[3] ? j : '"' === s[3] ? N : D) : a === N || a === D ? a = j : a === L || a === W ? a = S : (a = j, o = void 0);
                    let h = a === j && e[t + 1].startsWith("/>") ? " " : "";
                    l += a === S ? r + O : c >= 0 ? (i.push(n), r.slice(0, c) + A + r.slice(c) + _ + h) : r + _ + (-2 === c ? (i.push(void 0), t) : h)
                }
                return [K(e, l + (e[r] || "<?>") + (2 === t ? "</svg>" : "")), i]
            };
            class Q {
                constructor({
                    strings: e,
                    _$litType$: t
                }, r) {
                    let i;
                    this.parts = [];
                    let o = 0,
                        l = 0,
                        a = e.length - 1,
                        n = this.parts,
                        [s, c] = Y(e, t);
                    if (this.el = Q.createElement(s, r), F.currentNode = this.el.content, 2 === t) {
                        let e = this.el.content,
                            t = e.firstChild;
                        t.remove(), e.append(...t.childNodes)
                    }
                    for (; null !== (i = F.nextNode()) && n.length < a;) {
                        if (1 === i.nodeType) {
                            if (i.hasAttributes()) {
                                let e = [];
                                for (let t of i.getAttributeNames())
                                    if (t.endsWith(A) || t.startsWith(_)) {
                                        let r = c[l++];
                                        if (e.push(t), void 0 !== r) {
                                            let e = i.getAttribute(r.toLowerCase() + A).split(_),
                                                t = /([.?@])?(.*)/.exec(r);
                                            n.push({
                                                type: 1,
                                                index: o,
                                                name: t[2],
                                                strings: e,
                                                ctor: "." === t[1] ? et : "?" === t[1] ? ei : "@" === t[1] ? eo : ee
                                            })
                                        } else n.push({
                                            type: 6,
                                            index: o
                                        })
                                    }
                                for (let t of e) i.removeAttribute(t)
                            }
                            if (z.test(i.tagName)) {
                                let e = i.textContent.split(_),
                                    t = e.length - 1;
                                if (t > 0) {
                                    i.textContent = $ ? $.emptyScript : "";
                                    for (let r = 0; r < t; r++) i.append(e[r], I()), F.nextNode(), n.push({
                                        type: 2,
                                        index: ++o
                                    });
                                    i.append(e[t], I())
                                }
                            }
                        } else if (8 === i.nodeType) {
                            if (i.data === k) n.push({
                                type: 2,
                                index: o
                            });
                            else {
                                let e = -1;
                                for (; - 1 !== (e = i.data.indexOf(_, e + 1));) n.push({
                                    type: 7,
                                    index: o
                                }), e += _.length - 1
                            }
                        }
                        o++
                    }
                }
                static createElement(e, t) {
                    let r = E.createElement("template");
                    return r.innerHTML = e, r
                }
            }

            function G(e, t, r = e, i) {
                var o, l, a, n;
                if (t === Z) return t;
                let s = void 0 !== i ? null === (o = r._$Co) || void 0 === o ? void 0 : o[i] : r._$Cl,
                    c = T(t) ? void 0 : t._$litDirective$;
                return (null == s ? void 0 : s.constructor) !== c && (null === (l = null == s ? void 0 : s._$AO) || void 0 === l || l.call(s, !1), void 0 === c ? s = void 0 : (s = new c(e))._$AT(e, r, i), void 0 !== i ? (null !== (a = (n = r)._$Co) && void 0 !== a ? a : n._$Co = [])[i] = s : r._$Cl = s), void 0 !== s && (t = G(e, s._$AS(e, t.values), s, i)), t
            }
            class X {
                constructor(e, t) {
                    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t
                }
                get parentNode() {
                    return this._$AM.parentNode
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                u(e) {
                    var t;
                    let {
                        el: {
                            content: r
                        },
                        parts: i
                    } = this._$AD, o = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : E).importNode(r, !0);
                    F.currentNode = o;
                    let l = F.nextNode(),
                        a = 0,
                        n = 0,
                        s = i[0];
                    for (; void 0 !== s;) {
                        if (a === s.index) {
                            let t;
                            2 === s.type ? t = new J(l, l.nextSibling, this, e) : 1 === s.type ? t = new s.ctor(l, s.name, s.strings, this, e) : 6 === s.type && (t = new el(l, this, e)), this._$AV.push(t), s = i[++n]
                        }
                        a !== (null == s ? void 0 : s.index) && (l = F.nextNode(), a++)
                    }
                    return F.currentNode = E, o
                }
                v(e) {
                    let t = 0;
                    for (let r of this._$AV) void 0 !== r && (void 0 !== r.strings ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++
                }
            }
            class J {
                constructor(e, t, r, i) {
                    var o;
                    this.type = 2, this._$AH = V, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = i, this._$Cp = null === (o = null == i ? void 0 : i.isConnected) || void 0 === o || o
                }
                get _$AU() {
                    var e, t;
                    return null !== (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) && void 0 !== t ? t : this._$Cp
                }
                get parentNode() {
                    let e = this._$AA.parentNode,
                        t = this._$AM;
                    return void 0 !== t && 11 === (null == e ? void 0 : e.nodeType) && (e = t.parentNode), e
                }
                get startNode() {
                    return this._$AA
                }
                get endNode() {
                    return this._$AB
                }
                _$AI(e, t = this) {
                    T(e = G(this, e, t)) ? e === V || null == e || "" === e ? (this._$AH !== V && this._$AR(), this._$AH = V) : e !== this._$AH && e !== Z && this._(e) : void 0 !== e._$litType$ ? this.g(e) : void 0 !== e.nodeType ? this.$(e) : M(e) ? this.T(e) : this._(e)
                }
                k(e) {
                    return this._$AA.parentNode.insertBefore(e, this._$AB)
                }
                $(e) {
                    this._$AH !== e && (this._$AR(), this._$AH = this.k(e))
                }
                _(e) {
                    this._$AH !== V && T(this._$AH) ? this._$AA.nextSibling.data = e : this.$(E.createTextNode(e)), this._$AH = e
                }
                g(e) {
                    var t;
                    let {
                        values: r,
                        _$litType$: i
                    } = e, o = "number" == typeof i ? this._$AC(e) : (void 0 === i.el && (i.el = Q.createElement(K(i.h, i.h[0]), this.options)), i);
                    if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === o) this._$AH.v(r);
                    else {
                        let e = new X(o, this),
                            t = e.u(this.options);
                        e.v(r), this.$(t), this._$AH = e
                    }
                }
                _$AC(e) {
                    let t = q.get(e.strings);
                    return void 0 === t && q.set(e.strings, t = new Q(e)), t
                }
                T(e) {
                    P(this._$AH) || (this._$AH = [], this._$AR());
                    let t = this._$AH,
                        r, i = 0;
                    for (let o of e) i === t.length ? t.push(r = new J(this.k(I()), this.k(I()), this, this.options)) : r = t[i], r._$AI(o), i++;
                    i < t.length && (this._$AR(r && r._$AB.nextSibling, i), t.length = i)
                }
                _$AR(e = this._$AA.nextSibling, t) {
                    var r;
                    for (null === (r = this._$AP) || void 0 === r || r.call(this, !1, !0, t); e && e !== this._$AB;) {
                        let t = e.nextSibling;
                        e.remove(), e = t
                    }
                }
                setConnected(e) {
                    var t;
                    void 0 === this._$AM && (this._$Cp = e, null === (t = this._$AP) || void 0 === t || t.call(this, e))
                }
            }
            class ee {
                constructor(e, t, r, i, o) {
                    this.type = 1, this._$AH = V, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = o, r.length > 2 || "" !== r[0] || "" !== r[1] ? (this._$AH = Array(r.length - 1).fill(new String), this.strings = r) : this._$AH = V
                }
                get tagName() {
                    return this.element.tagName
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AI(e, t = this, r, i) {
                    let o = this.strings,
                        l = !1;
                    if (void 0 === o)(l = !T(e = G(this, e, t, 0)) || e !== this._$AH && e !== Z) && (this._$AH = e);
                    else {
                        let i, a;
                        let n = e;
                        for (e = o[0], i = 0; i < o.length - 1; i++)(a = G(this, n[r + i], t, i)) === Z && (a = this._$AH[i]), l || (l = !T(a) || a !== this._$AH[i]), a === V ? e = V : e !== V && (e += (null != a ? a : "") + o[i + 1]), this._$AH[i] = a
                    }
                    l && !i && this.j(e)
                }
                j(e) {
                    e === V ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "")
                }
            }
            class et extends ee {
                constructor() {
                    super(...arguments), this.type = 3
                }
                j(e) {
                    this.element[this.name] = e === V ? void 0 : e
                }
            }
            let er = $ ? $.emptyScript : "";
            class ei extends ee {
                constructor() {
                    super(...arguments), this.type = 4
                }
                j(e) {
                    e && e !== V ? this.element.setAttribute(this.name, er) : this.element.removeAttribute(this.name)
                }
            }
            class eo extends ee {
                constructor(e, t, r, i, o) {
                    super(e, t, r, i, o), this.type = 5
                }
                _$AI(e, t = this) {
                    var r;
                    if ((e = null !== (r = G(this, e, t, 0)) && void 0 !== r ? r : V) === Z) return;
                    let i = this._$AH,
                        o = e === V && i !== V || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive,
                        l = e !== V && (i === V || o);
                    o && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, e), this._$AH = e
                }
                handleEvent(e) {
                    var t, r;
                    "function" == typeof this._$AH ? this._$AH.call(null !== (r = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== r ? r : this.element, e) : this._$AH.handleEvent(e)
                }
            }
            class el {
                constructor(e, t, r) {
                    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AI(e) {
                    G(this, e)
                }
            }
            let ea = x.litHtmlPolyfillSupport;
            null == ea || ea(Q, J), (null !== (ey = x.litHtmlVersions) && void 0 !== ey ? ey : x.litHtmlVersions = []).push("2.7.5");
            let en = (e, t, r) => {
                var i, o;
                let l = null !== (i = null == r ? void 0 : r.renderBefore) && void 0 !== i ? i : t,
                    a = l._$litPart$;
                if (void 0 === a) {
                    let e = null !== (o = null == r ? void 0 : r.renderBefore) && void 0 !== o ? o : null;
                    l._$litPart$ = a = new J(t.insertBefore(I(), e), e, void 0, null != r ? r : {})
                }
                return a._$AI(e), a
            };
            class es extends y {
                constructor() {
                    super(...arguments), this.renderOptions = {
                        host: this
                    }, this._$Do = void 0
                }
                createRenderRoot() {
                    var e, t;
                    let r = super.createRenderRoot();
                    return null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e || (t.renderBefore = r.firstChild), r
                }
                update(e) {
                    let t = this.render();
                    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = en(t, this.renderRoot, this.renderOptions)
                }
                connectedCallback() {
                    var e;
                    super.connectedCallback(), null === (e = this._$Do) || void 0 === e || e.setConnected(!0)
                }
                disconnectedCallback() {
                    var e;
                    super.disconnectedCallback(), null === (e = this._$Do) || void 0 === e || e.setConnected(!1)
                }
                render() {
                    return Z
                }
            }
            es.finalized = !0, es._$litElement$ = !0, null === (ex = globalThis.litElementHydrateSupport) || void 0 === ex || ex.call(globalThis, {
                LitElement: es
            });
            let ec = globalThis.litElementPolyfillSupport;
            null == ec || ec({
                LitElement: es
            }), (null !== (e$ = globalThis.litElementVersions) && void 0 !== e$ ? e$ : globalThis.litElementVersions = []).push("3.3.2");
            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let ed = e => t => "function" == typeof t ? (customElements.define(e, t), t) : ((e, t) => {
                    let {
                        kind: r,
                        elements: i
                    } = t;
                    return {
                        kind: r,
                        elements: i,
                        finisher(t) {
                            customElements.define(e, t)
                        }
                    }
                })(e, t),
                eh = (e, t) => "method" !== t.kind || !t.descriptor || "value" in t.descriptor ? {
                    kind: "field",
                    key: Symbol(),
                    placement: "own",
                    descriptor: {},
                    originalKey: t.key,
                    initializer() {
                        "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
                    },
                    finisher(r) {
                        r.createProperty(t.key, e)
                    }
                } : { ...t,
                    finisher(r) {
                        r.createProperty(t.key, e)
                    }
                },
                em = (e, t, r) => {
                    t.constructor.createProperty(r, e)
                };

            function ep(e) {
                return (t, r) => void 0 !== r ? em(e, t, r) : eh(e, t)
            }
            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            function eu(e) {
                return ep({ ...e,
                    state: !0
                })
            }
            null != (null === (eC = window.HTMLSlotElement) || void 0 === eC ? void 0 : eC.prototype.assignedElements) || ((e, t) => e.assignedNodes(t).filter(e => e.nodeType === Node.ELEMENT_NODE));
            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let ew = {
                ATTRIBUTE: 1,
                CHILD: 2,
                PROPERTY: 3,
                BOOLEAN_ATTRIBUTE: 4,
                EVENT: 5,
                ELEMENT: 6
            };
            class eg {
                constructor(e) {}
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AT(e, t, r) {
                    this._$Ct = e, this._$AM = t, this._$Ci = r
                }
                _$AS(e, t) {
                    return this.update(e, t)
                }
                update(e, t) {
                    return this.render(...t)
                }
            }
            /**
             * @license
             * Copyright 2018 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let ev = (ef = class extends eg {
                constructor(e) {
                    var t;
                    if (super(e), e.type !== ew.ATTRIBUTE || "class" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
                }
                render(e) {
                    return " " + Object.keys(e).filter(t => e[t]).join(" ") + " "
                }
                update(e, [t]) {
                    var r, i;
                    if (void 0 === this.it) {
                        for (let i in this.it = new Set, void 0 !== e.strings && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter(e => "" !== e))), t) !t[i] || (null === (r = this.nt) || void 0 === r ? void 0 : r.has(i)) || this.it.add(i);
                        return this.render(t)
                    }
                    let o = e.element.classList;
                    for (let e in this.it.forEach(e => {
                            e in t || (o.remove(e), this.it.delete(e))
                        }), t) {
                        let r = !!t[e];
                        r === this.it.has(e) || (null === (i = this.nt) || void 0 === i ? void 0 : i.has(e)) || (r ? (o.add(e), this.it.add(e)) : (o.remove(e), this.it.delete(e)))
                    }
                    return Z
                }
            }, (...e) => ({
                _$litDirective$: ef,
                values: e
            }));
            var ef, eb, ey, ex, e$, eC, eA = r(75412);
            let e_ = {
                    duration: .3,
                    delay: 0,
                    endDelay: 0,
                    repeat: 0,
                    easing: "ease"
                },
                ek = {
                    ms: e => 1e3 * e,
                    s: e => e / 1e3
                },
                eO = () => {},
                eE = e => e;

            function eI(e, t = !0) {
                if (e && "finished" !== e.playState) try {
                    e.stop ? e.stop() : (t && e.commitStyles(), e.cancel())
                } catch (e) {}
            }
            let eT = e => e(),
                eP = (e, t, r = e_.duration) => new Proxy({
                    animations: e.map(eT).filter(Boolean),
                    duration: r,
                    options: t
                }, eR),
                eM = e => e.animations[0],
                eR = {
                    get: (e, t) => {
                        let r = eM(e);
                        switch (t) {
                            case "duration":
                                return e.duration;
                            case "currentTime":
                                return ek.s((null == r ? void 0 : r[t]) || 0);
                            case "playbackRate":
                            case "playState":
                                return null == r ? void 0 : r[t];
                            case "finished":
                                return e.finished || (e.finished = Promise.all(e.animations.map(eS)).catch(eO)), e.finished;
                            case "stop":
                                return () => {
                                    e.animations.forEach(e => eI(e))
                                };
                            case "forEachNative":
                                return t => {
                                    e.animations.forEach(r => t(r, e))
                                };
                            default:
                                return void 0 === (null == r ? void 0 : r[t]) ? void 0 : () => e.animations.forEach(e => e[t]())
                        }
                    },
                    set: (e, t, r) => {
                        switch (t) {
                            case "currentTime":
                                r = ek.ms(r);
                            case "currentTime":
                            case "playbackRate":
                                for (let i = 0; i < e.animations.length; i++) e.animations[i][t] = r;
                                return !0
                        }
                        return !1
                    }
                },
                eS = e => e.finished,
                eL = e => "object" == typeof e && Boolean(e.createAnimation),
                eW = e => "number" == typeof e,
                ej = e => Array.isArray(e) && !eW(e[0]),
                eD = (e, t, r) => -r * e + r * t + e,
                eN = (e, t, r) => t - e == 0 ? 1 : (r - e) / (t - e);

            function ez(e, t) {
                let r = e[e.length - 1];
                for (let i = 1; i <= t; i++) {
                    let o = eN(0, t, i);
                    e.push(eD(r, 1, o))
                }
            }
            let eU = (e, t, r) => {
                    let i = t - e;
                    return ((r - e) % i + i) % i + e
                },
                eH = (e, t, r) => Math.min(Math.max(r, e), t),
                eB = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e;

            function eZ(e, t, r, i) {
                if (e === t && r === i) return eE;
                let o = t => (function(e, t, r, i, o) {
                    let l, a;
                    let n = 0;
                    do(l = eB(a = t + (r - t) / 2, i, o) - e) > 0 ? r = a : t = a; while (Math.abs(l) > 1e-7 && ++n < 12);
                    return a
                })(t, 0, 1, e, r);
                return e => 0 === e || 1 === e ? e : eB(o(e), t, i)
            }
            let eV = (e, t = "end") => r => {
                    r = "end" === t ? Math.min(r, .999) : Math.max(r, .001);
                    let i = r * e;
                    return eH(0, 1, ("end" === t ? Math.floor(i) : Math.ceil(i)) / e)
                },
                eq = e => "function" == typeof e,
                eF = e => Array.isArray(e) && eW(e[0]),
                eK = {
                    ease: eZ(.25, .1, .25, 1),
                    "ease-in": eZ(.42, 0, 1, 1),
                    "ease-in-out": eZ(.42, 0, .58, 1),
                    "ease-out": eZ(0, 0, .58, 1)
                },
                eY = /\((.*?)\)/;

            function eQ(e) {
                if (eq(e)) return e;
                if (eF(e)) return eZ(...e);
                if (eK[e]) return eK[e];
                if (e.startsWith("steps")) {
                    let t = eY.exec(e);
                    if (t) {
                        let e = t[1].split(",");
                        return eV(parseFloat(e[0]), e[1].trim())
                    }
                }
                return eE
            }
            class eG {
                constructor(e, t = [0, 1], {
                    easing: r,
                    duration: i = e_.duration,
                    delay: o = e_.delay,
                    endDelay: l = e_.endDelay,
                    repeat: a = e_.repeat,
                    offset: n,
                    direction: s = "normal"
                } = {}) {
                    if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = eE, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((e, t) => {
                            this.resolve = e, this.reject = t
                        }), eL(r = r || e_.easing)) {
                        let e = r.createAnimation(t);
                        r = e.easing, t = e.keyframes || t, i = e.duration || i
                    }
                    this.repeat = a, this.easing = ej(r) ? eE : eQ(r), this.updateDuration(i);
                    let c = function(e, t = function(e) {
                        let t = [0];
                        return ez(t, e - 1), t
                    }(e.length), r = eE) {
                        let i = e.length,
                            o = i - t.length;
                        return o > 0 && ez(t, o), o => {
                            var l;
                            let a = 0;
                            for (; a < i - 2 && !(o < t[a + 1]); a++);
                            let n = eH(0, 1, eN(t[a], t[a + 1], o)),
                                s = (l = a, ej(r) ? r[eU(0, r.length, l)] : r);
                            return n = s(n), eD(e[a], e[a + 1], n)
                        }
                    }(t, n, ej(r) ? r.map(eQ) : eE);
                    this.tick = t => {
                        var r;
                        let i = 0;
                        i = void 0 !== this.pauseTime ? this.pauseTime : (t - this.startTime) * this.rate, this.t = i, i /= 1e3, i = Math.max(i - o, 0), "finished" === this.playState && void 0 === this.pauseTime && (i = this.totalDuration);
                        let a = i / this.duration,
                            n = Math.floor(a),
                            d = a % 1;
                        !d && a >= 1 && (d = 1), 1 === d && n--;
                        let h = n % 2;
                        ("reverse" === s || "alternate" === s && h || "alternate-reverse" === s && !h) && (d = 1 - d);
                        let m = i >= this.totalDuration ? 1 : Math.min(d, 1),
                            p = c(this.easing(m));
                        e(p);
                        let u = void 0 === this.pauseTime && ("finished" === this.playState || i >= this.totalDuration + l);
                        u ? (this.playState = "finished", null === (r = this.resolve) || void 0 === r || r.call(this, p)) : "idle" !== this.playState && (this.frameRequestId = requestAnimationFrame(this.tick))
                    }, this.play()
                }
                play() {
                    let e = performance.now();
                    this.playState = "running", void 0 !== this.pauseTime ? this.startTime = e - this.pauseTime : this.startTime || (this.startTime = e), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick)
                }
                pause() {
                    this.playState = "paused", this.pauseTime = this.t
                }
                finish() {
                    this.playState = "finished", this.tick(0)
                }
                stop() {
                    var e;
                    this.playState = "idle", void 0 !== this.frameRequestId && cancelAnimationFrame(this.frameRequestId), null === (e = this.reject) || void 0 === e || e.call(this, !1)
                }
                cancel() {
                    this.stop(), this.tick(this.cancelTimestamp)
                }
                reverse() {
                    this.rate *= -1
                }
                commitStyles() {}
                updateDuration(e) {
                    this.duration = e, this.totalDuration = e * (this.repeat + 1)
                }
                get currentTime() {
                    return this.t
                }
                set currentTime(e) {
                    void 0 !== this.pauseTime || 0 === this.rate ? this.pauseTime = e : this.startTime = performance.now() - e / this.rate
                }
                get playbackRate() {
                    return this.rate
                }
                set playbackRate(e) {
                    this.rate = e
                }
            }
            var eX = r(9340);
            class eJ {
                setAnimation(e) {
                    this.animation = e, null == e || e.finished.then(() => this.clearAnimation()).catch(() => {})
                }
                clearAnimation() {
                    this.animation = this.generator = void 0
                }
            }
            let e0 = new WeakMap;

            function e1(e) {
                return e0.has(e) || e0.set(e, {
                    transforms: [],
                    values: new Map
                }), e0.get(e)
            }
            let e2 = ["", "X", "Y", "Z"],
                e5 = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ"
                },
                e4 = {
                    syntax: "<angle>",
                    initialValue: "0deg",
                    toDefaultUnit: e => e + "deg"
                },
                e3 = {
                    translate: {
                        syntax: "<length-percentage>",
                        initialValue: "0px",
                        toDefaultUnit: e => e + "px"
                    },
                    rotate: e4,
                    scale: {
                        syntax: "<number>",
                        initialValue: 1,
                        toDefaultUnit: eE
                    },
                    skew: e4
                },
                e7 = new Map,
                e6 = e => `--motion-${e}`,
                e8 = ["x", "y", "z"];
            ["translate", "scale", "rotate", "skew"].forEach(e => {
                e2.forEach(t => {
                    e8.push(e + t), e7.set(e6(e + t), e3[e])
                })
            });
            let e9 = (e, t) => e8.indexOf(e) - e8.indexOf(t),
                te = new Set(e8),
                tt = e => te.has(e),
                tr = (e, t) => {
                    var r;
                    e5[t] && (t = e5[t]);
                    let {
                        transforms: i
                    } = e1(e);
                    r = t, -1 === i.indexOf(r) && i.push(r), e.style.transform = ti(i)
                },
                ti = e => e.sort(e9).reduce(to, "").trim(),
                to = (e, t) => `${e} ${t}(var(${e6(t)}))`,
                tl = e => e.startsWith("--"),
                ta = new Set,
                tn = (e, t) => document.createElement("div").animate(e, t),
                ts = {
                    cssRegisterProperty: () => "undefined" != typeof CSS && Object.hasOwnProperty.call(CSS, "registerProperty"),
                    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
                    partialKeyframes: () => {
                        try {
                            tn({
                                opacity: [1]
                            })
                        } catch (e) {
                            return !1
                        }
                        return !0
                    },
                    finished: () => Boolean(tn({
                        opacity: [0, 1]
                    }, {
                        duration: .001
                    }).finished),
                    linearEasing: () => {
                        try {
                            tn({
                                opacity: 0
                            }, {
                                easing: "linear(0, 1)"
                            })
                        } catch (e) {
                            return !1
                        }
                        return !0
                    }
                },
                tc = {},
                td = {};
            for (let e in ts) td[e] = () => (void 0 === tc[e] && (tc[e] = ts[e]()), tc[e]);
            let th = (e, t) => {
                    let r = "",
                        i = Math.round(t / .015);
                    for (let t = 0; t < i; t++) r += e(eN(0, i - 1, t)) + ", ";
                    return r.substring(0, r.length - 2)
                },
                tm = (e, t) => eq(e) ? td.linearEasing() ? `linear(${th(e,t)})` : e_.easing : eF(e) ? tp(e) : e,
                tp = ([e, t, r, i]) => `cubic-bezier(${e}, ${t}, ${r}, ${i})`,
                tu = e => Array.isArray(e) ? e : [e];

            function tw(e) {
                return e5[e] && (e = e5[e]), tt(e) ? e6(e) : e
            }
            let tg = {
                    get: (e, t) => {
                        let r = tl(t = tw(t)) ? e.style.getPropertyValue(t) : getComputedStyle(e)[t];
                        if (!r && 0 !== r) {
                            let e = e7.get(t);
                            e && (r = e.initialValue)
                        }
                        return r
                    },
                    set: (e, t, r) => {
                        tl(t = tw(t)) ? e.style.setProperty(t, r) : e.style[t] = r
                    }
                },
                tv = e => "string" == typeof e,
                tf = (e, t) => e[t] ? Object.assign(Object.assign({}, e), e[t]) : Object.assign({}, e),
                tb = function(e, t, r = {}) {
                    var i, o, l, a, n;
                    "string" == typeof(i = e) ? o ? (null !== (l = o[i]) && void 0 !== l || (o[i] = document.querySelectorAll(i)), i = o[i]) : i = document.querySelectorAll(i): i instanceof Element && (i = [i]), e = Array.from(i || []);
                    let s = e.length;
                    (0, eX.k)(Boolean(s), "No valid element provided."), (0, eX.k)(Boolean(t), "No keyframes defined.");
                    let c = [];
                    for (let i = 0; i < s; i++) {
                        let o = e[i];
                        for (let e in t) {
                            let l = tf(r, e);
                            l.delay = (a = l.delay, n = i, eq(a) ? a(n, s) : a);
                            let d = function(e, t, r, i = {}, o) {
                                var l;
                                let a;
                                let n = window.__MOTION_DEV_TOOLS_RECORD,
                                    s = !1 !== i.record && n,
                                    {
                                        duration: c = e_.duration,
                                        delay: d = e_.delay,
                                        endDelay: h = e_.endDelay,
                                        repeat: m = e_.repeat,
                                        easing: p = e_.easing,
                                        persist: u = !1,
                                        direction: w,
                                        offset: g,
                                        allowWebkitAcceleration: v = !1
                                    } = i,
                                    f = e1(e),
                                    b = tt(t),
                                    y = td.waapi();
                                b && tr(e, t);
                                let x = tw(t),
                                    $ = ((l = f.values).has(x) || l.set(x, new eJ), l.get(x)),
                                    C = e7.get(x);
                                return eI($.animation, !(eL(p) && $.generator) && !1 !== i.record), () => {
                                    let l = () => {
                                            var t, r;
                                            return null !== (r = null !== (t = tg.get(e, x)) && void 0 !== t ? t : null == C ? void 0 : C.initialValue) && void 0 !== r ? r : 0
                                        },
                                        f = function(e, t) {
                                            for (let r = 0; r < e.length; r++) null === e[r] && (e[r] = r ? e[r - 1] : t());
                                            return e
                                        }(tu(r), l),
                                        A = function(e, t) {
                                            var r;
                                            let i = (null == t ? void 0 : t.toDefaultUnit) || eE,
                                                o = e[e.length - 1];
                                            if (tv(o)) {
                                                let e = (null === (r = o.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === r ? void 0 : r[2]) || "";
                                                e && (i = t => t + e)
                                            }
                                            return i
                                        }(f, C);
                                    if (eL(p)) {
                                        let e = p.createAnimation(f, "opacity" !== t, l, x, $);
                                        p = e.easing, f = e.keyframes || f, c = e.duration || c
                                    }
                                    if (tl(x) && (td.cssRegisterProperty() ? function(e) {
                                            if (!ta.has(e)) {
                                                ta.add(e);
                                                try {
                                                    let {
                                                        syntax: t,
                                                        initialValue: r
                                                    } = e7.has(e) ? e7.get(e) : {};
                                                    CSS.registerProperty({
                                                        name: e,
                                                        inherits: !1,
                                                        syntax: t,
                                                        initialValue: r
                                                    })
                                                } catch (e) {}
                                            }
                                        }(x) : y = !1), b && !td.linearEasing() && (eq(p) || ej(p) && p.some(eq)) && (y = !1), y) {
                                        C && (f = f.map(e => eW(e) ? C.toDefaultUnit(e) : e)), 1 === f.length && (!td.partialKeyframes() || s) && f.unshift(l());
                                        let t = {
                                            delay: ek.ms(d),
                                            duration: ek.ms(c),
                                            endDelay: ek.ms(h),
                                            easing: ej(p) ? void 0 : tm(p, c),
                                            direction: w,
                                            iterations: m + 1,
                                            fill: "both"
                                        };
                                        (a = e.animate({
                                            [x]: f,
                                            offset: g,
                                            easing: ej(p) ? p.map(e => tm(e, c)) : void 0
                                        }, t)).finished || (a.finished = new Promise((e, t) => {
                                            a.onfinish = e, a.oncancel = t
                                        }));
                                        let r = f[f.length - 1];
                                        a.finished.then(() => {
                                            u || (tg.set(e, x, r), a.cancel())
                                        }).catch(eO), v || (a.playbackRate = 1.000001)
                                    } else if (o && b) 1 === (f = f.map(e => "string" == typeof e ? parseFloat(e) : e)).length && f.unshift(parseFloat(l())), a = new o(t => {
                                        tg.set(e, x, A ? A(t) : t)
                                    }, f, Object.assign(Object.assign({}, i), {
                                        duration: c,
                                        easing: p
                                    }));
                                    else {
                                        let t = f[f.length - 1];
                                        tg.set(e, x, C && eW(t) ? C.toDefaultUnit(t) : t)
                                    }
                                    return s && n(e, t, f, {
                                        duration: c,
                                        delay: d,
                                        easing: p,
                                        repeat: m,
                                        offset: g
                                    }, "motion-one"), $.setAnimation(a), a
                                }
                            }(o, e, t[e], l, eG);
                            c.push(d)
                        }
                    }
                    return eP(c, r, r.duration)
                };

            function ty(e, t = {}) {
                return eP([() => {
                    let r = new eG(e, [0, 1], t);
                    return r.finished.catch(() => {}), r
                }], t, t.duration)
            }

            function tx(e, t, r) {
                let i = eq(e) ? ty : tb;
                return i(e, t, r)
            }
            /**
             * @license
             * Copyright 2018 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let t$ = e => null != e ? e : V;
            var tC = r(74061),
                tA = Object.defineProperty,
                t_ = Object.getOwnPropertySymbols,
                tk = Object.prototype.hasOwnProperty,
                tO = Object.prototype.propertyIsEnumerable,
                tE = (e, t, r) => t in e ? tA(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                tI = (e, t) => {
                    for (var r in t || (t = {})) tk.call(t, r) && tE(e, r, t[r]);
                    if (t_)
                        for (var r of t_(t)) tO.call(t, r) && tE(e, r, t[r]);
                    return e
                };

            function tT() {
                return {
                    "--wcm-accent-color": "#3396FF",
                    "--wcm-accent-fill-color": "#FFFFFF",
                    "--wcm-z-index": "89",
                    "--wcm-background-color": "#3396FF",
                    "--wcm-background-border-radius": "8px",
                    "--wcm-container-border-radius": "30px",
                    "--wcm-wallet-icon-border-radius": "15px",
                    "--wcm-wallet-icon-large-border-radius": "30px",
                    "--wcm-wallet-icon-small-border-radius": "7px",
                    "--wcm-input-border-radius": "28px",
                    "--wcm-button-border-radius": "10px",
                    "--wcm-notification-border-radius": "36px",
                    "--wcm-secondary-button-border-radius": "28px",
                    "--wcm-icon-button-border-radius": "50%",
                    "--wcm-button-hover-highlight-border-radius": "10px",
                    "--wcm-text-big-bold-size": "20px",
                    "--wcm-text-big-bold-weight": "600",
                    "--wcm-text-big-bold-line-height": "24px",
                    "--wcm-text-big-bold-letter-spacing": "-0.03em",
                    "--wcm-text-big-bold-text-transform": "none",
                    "--wcm-text-xsmall-bold-size": "10px",
                    "--wcm-text-xsmall-bold-weight": "700",
                    "--wcm-text-xsmall-bold-line-height": "12px",
                    "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
                    "--wcm-text-xsmall-bold-text-transform": "uppercase",
                    "--wcm-text-xsmall-regular-size": "12px",
                    "--wcm-text-xsmall-regular-weight": "600",
                    "--wcm-text-xsmall-regular-line-height": "14px",
                    "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
                    "--wcm-text-xsmall-regular-text-transform": "none",
                    "--wcm-text-small-thin-size": "14px",
                    "--wcm-text-small-thin-weight": "500",
                    "--wcm-text-small-thin-line-height": "16px",
                    "--wcm-text-small-thin-letter-spacing": "-0.03em",
                    "--wcm-text-small-thin-text-transform": "none",
                    "--wcm-text-small-regular-size": "14px",
                    "--wcm-text-small-regular-weight": "600",
                    "--wcm-text-small-regular-line-height": "16px",
                    "--wcm-text-small-regular-letter-spacing": "-0.03em",
                    "--wcm-text-small-regular-text-transform": "none",
                    "--wcm-text-medium-regular-size": "16px",
                    "--wcm-text-medium-regular-weight": "600",
                    "--wcm-text-medium-regular-line-height": "20px",
                    "--wcm-text-medium-regular-letter-spacing": "-0.03em",
                    "--wcm-text-medium-regular-text-transform": "none",
                    "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                    "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
                    "--wcm-success-color": "rgb(38,181,98)",
                    "--wcm-error-color": "rgb(242, 90, 103)",
                    "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
                    "--wcm-overlay-backdrop-filter": "none"
                }
            }
            let tP = {
                    getPreset: e => tT()[e],
                    setTheme() {
                        let e = document.querySelector(":root"),
                            {
                                themeVariables: t
                            } = eA.Ic.state;
                        if (e) {
                            let r = tI(tI(tI({}, function() {
                                var e;
                                let t = null != (e = eA.Ic.state.themeMode) ? e : "dark",
                                    r = {
                                        light: {
                                            foreground: {
                                                1: "rgb(20,20,20)",
                                                2: "rgb(121,134,134)",
                                                3: "rgb(158,169,169)"
                                            },
                                            background: {
                                                1: "rgb(255,255,255)",
                                                2: "rgb(241,243,243)",
                                                3: "rgb(228,231,231)"
                                            },
                                            overlay: "rgba(0,0,0,0.1)"
                                        },
                                        dark: {
                                            foreground: {
                                                1: "rgb(228,231,231)",
                                                2: "rgb(148,158,158)",
                                                3: "rgb(110,119,119)"
                                            },
                                            background: {
                                                1: "rgb(20,20,20)",
                                                2: "rgb(39,42,42)",
                                                3: "rgb(59,64,64)"
                                            },
                                            overlay: "rgba(255,255,255,0.1)"
                                        }
                                    }[t];
                                return {
                                    "--wcm-color-fg-1": r.foreground[1],
                                    "--wcm-color-fg-2": r.foreground[2],
                                    "--wcm-color-fg-3": r.foreground[3],
                                    "--wcm-color-bg-1": r.background[1],
                                    "--wcm-color-bg-2": r.background[2],
                                    "--wcm-color-bg-3": r.background[3],
                                    "--wcm-color-overlay": r.overlay
                                }
                            }()), tT()), t);
                            Object.entries(r).forEach(([t, r]) => e.style.setProperty(t, r))
                        }
                    },
                    globalCss: c `*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}`
                },
                tM = c `button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;
            var tR = Object.defineProperty,
                tS = Object.getOwnPropertyDescriptor,
                tL = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? tS(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && tR(t, r, l), l
                };
            let tW = class extends es {
                constructor() {
                    super(...arguments), this.disabled = !1, this.iconLeft = void 0, this.iconRight = void 0, this.onClick = () => null, this.variant = "default"
                }
                render() {
                    let e = {
                            "wcm-icon-left": void 0 !== this.iconLeft,
                            "wcm-icon-right": void 0 !== this.iconRight,
                            "wcm-ghost": "ghost" === this.variant,
                            "wcm-outline": "outline" === this.variant
                        },
                        t = "inverse";
                    return "ghost" === this.variant && (t = "secondary"), "outline" === this.variant && (t = "accent"), H `<button class="${ev(e)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<wcm-text variant="small-regular" color="${t}"><slot></slot></wcm-text>${this.iconRight}</button>`
                }
            };
            tW.styles = [tP.globalCss, tM], tL([ep({
                type: Boolean
            })], tW.prototype, "disabled", 2), tL([ep()], tW.prototype, "iconLeft", 2), tL([ep()], tW.prototype, "iconRight", 2), tL([ep()], tW.prototype, "onClick", 2), tL([ep()], tW.prototype, "variant", 2), tW = tL([ed("wcm-button")], tW);
            let tj = c `:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;
            var tD = Object.defineProperty,
                tN = Object.getOwnPropertyDescriptor,
                tz = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? tN(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && tD(t, r, l), l
                };
            let tU = class extends es {
                constructor() {
                    super(...arguments), this.disabled = !1, this.variant = "primary"
                }
                render() {
                    let e = {
                        "wcm-secondary": "secondary" === this.variant
                    };
                    return H `<button ?disabled="${this.disabled}" class="${ev(e)}"><slot></slot></button>`
                }
            };
            tU.styles = [tP.globalCss, tj], tz([ep({
                type: Boolean
            })], tU.prototype, "disabled", 2), tz([ep()], tU.prototype, "variant", 2), tU = tz([ed("wcm-button-big")], tU);
            let tH = c `:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
            var tB = Object.defineProperty,
                tZ = Object.getOwnPropertyDescriptor;
            let tV = class extends es {
                render() {
                    return H `<div><slot></slot></div>`
                }
            };
            tV.styles = [tP.globalCss, tH], tV = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? tZ(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && tB(t, r, l), l
            })([ed("wcm-info-footer")], tV);
            let tq = {
                    CROSS_ICON: B `<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
                    WALLET_CONNECT_LOGO: B `<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
                    WALLET_CONNECT_ICON: B `<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
                    WALLET_CONNECT_ICON_COLORED: B `<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
                    BACK_ICON: B `<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
                    COPY_ICON: B `<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
                    RETRY_ICON: B `<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
                    DESKTOP_ICON: B `<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
                    MOBILE_ICON: B `<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
                    ARROW_DOWN_ICON: B `<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
                    ARROW_UP_RIGHT_ICON: B `<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
                    ARROW_RIGHT_ICON: B `<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
                    QRCODE_ICON: B `<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
                    SCAN_ICON: B `<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
                    CHECKMARK_ICON: B `<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
                    SEARCH_ICON: B `<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
                    WALLET_PLACEHOLDER: B `<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
                    GLOBE_ICON: B `<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`
                },
                tF = c `.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;
            var tK = Object.defineProperty,
                tY = Object.getOwnPropertyDescriptor;
            let tQ = class extends es {
                render() {
                    return H `<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${tq.WALLET_CONNECT_LOGO} <button @click="${eA.jb.close}">${tq.CROSS_ICON}</button></div>`
                }
            };
            tQ.styles = [tP.globalCss, tF], tQ = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? tY(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && tK(t, r, l), l
            })([ed("wcm-modal-backcard")], tQ);
            let tG = c `main{padding:20px;padding-top:0;width:100%}`;
            var tX = Object.defineProperty,
                tJ = Object.getOwnPropertyDescriptor;
            let t0 = class extends es {
                render() {
                    return H `<main><slot></slot></main>`
                }
            };
            t0.styles = [tP.globalCss, tG], t0 = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? tJ(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && tX(t, r, l), l
            })([ed("wcm-modal-content")], t0);
            let t1 = c `footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;
            var t2 = Object.defineProperty,
                t5 = Object.getOwnPropertyDescriptor;
            let t4 = class extends es {
                render() {
                    return H `<footer><slot></slot></footer>`
                }
            };
            t4.styles = [tP.globalCss, t1], t4 = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? t5(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && t2(t, r, l), l
            })([ed("wcm-modal-footer")], t4);
            let t3 = c `header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;
            var t7 = Object.defineProperty,
                t6 = Object.getOwnPropertyDescriptor,
                t8 = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? t6(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && t7(t, r, l), l
                };
            let t9 = class extends es {
                constructor() {
                    super(...arguments), this.title = "", this.onAction = void 0, this.actionIcon = void 0, this.border = !1
                }
                backBtnTemplate() {
                    return H `<button class="wcm-back-btn" @click="${eA.AV.goBack}">${tq.BACK_ICON}</button>`
                }
                actionBtnTemplate() {
                    return H `<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`
                }
                render() {
                    let e = {
                            "wcm-border": this.border
                        },
                        t = eA.AV.state.history.length > 1,
                        r = this.title ? H `<wcm-text variant="big-bold">${this.title}</wcm-text>` : H `<slot></slot>`;
                    return H `<header class="${ev(e)}">${t?this.backBtnTemplate():null} ${r} ${this.onAction?this.actionBtnTemplate():null}</header>`
                }
            };
            t9.styles = [tP.globalCss, t3], t8([ep()], t9.prototype, "title", 2), t8([ep()], t9.prototype, "onAction", 2), t8([ep()], t9.prototype, "actionIcon", 2), t8([ep({
                type: Boolean
            })], t9.prototype, "border", 2), t9 = t8([ed("wcm-modal-header")], t9);
            let re = {
                    MOBILE_BREAKPOINT: 600,
                    WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
                    EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
                    getShadowRootElement(e, t) {
                        let r = e.renderRoot.querySelector(t);
                        if (!r) throw Error(`${t} not found`);
                        return r
                    },
                    getWalletIcon({
                        id: e,
                        image_id: t
                    }) {
                        let {
                            walletImages: r
                        } = eA.t0.state;
                        return null != r && r[e] ? r[e] : t ? eA.uc.getWalletImageUrl(t) : ""
                    },
                    getWalletName: (e, t = !1) => t && e.length > 8 ? `${e.substring(0,8)}..` : e,
                    isMobileAnimation: () => window.innerWidth <= re.MOBILE_BREAKPOINT,
                    async preloadImage(e) {
                        let t = new Promise((t, r) => {
                            let i = new Image;
                            i.onload = t, i.onerror = r, i.src = e
                        });
                        return Promise.race([t, eA.zv.wait(3e3)])
                    },
                    getErrorMessage: e => e instanceof Error ? e.message : "Unknown Error",
                    debounce(e, t = 500) {
                        let r;
                        return (...i) => {
                            r && clearTimeout(r), r = setTimeout(function() {
                                e(...i)
                            }, t)
                        }
                    },
                    handleMobileLinking(e) {
                        let t;
                        let {
                            walletConnectUri: r
                        } = eA.zb.state, {
                            mobile: i,
                            name: o
                        } = e, l = i ? .native, a = i ? .universal;
                        re.setRecentWallet(e), r && (t = "", l ? t = eA.zv.formatUniversalUrl(l, r, o) : a && (t = eA.zv.formatNativeUrl(a, r, o)), eA.zv.openHref(t, "_self"))
                    },
                    handleAndroidLinking() {
                        let {
                            walletConnectUri: e
                        } = eA.zb.state;
                        e && (eA.zv.setWalletConnectAndroidDeepLink(e), eA.zv.openHref(e, "_self"))
                    },
                    async handleUriCopy() {
                        let {
                            walletConnectUri: e
                        } = eA.zb.state;
                        if (e) try {
                            await navigator.clipboard.writeText(e), eA.Vs.openToast("Link copied", "success")
                        } catch {
                            eA.Vs.openToast("Failed to copy", "error")
                        }
                    },
                    getCustomImageUrls() {
                        let {
                            walletImages: e
                        } = eA.t0.state, t = Object.values(e ? ? {});
                        return Object.values(t)
                    },
                    truncate: (e, t = 8) => e.length <= t ? e : `${e.substring(0,4)}...${e.substring(e.length-4)}`,
                    setRecentWallet(e) {
                        try {
                            localStorage.setItem(re.WCM_RECENT_WALLET_DATA, JSON.stringify(e))
                        } catch {
                            console.info("Unable to set recent wallet")
                        }
                    },
                    getRecentWallet() {
                        try {
                            let e = localStorage.getItem(re.WCM_RECENT_WALLET_DATA);
                            return e ? JSON.parse(e) : void 0
                        } catch {
                            console.info("Unable to get recent wallet")
                        }
                    },
                    caseSafeIncludes: (e, t) => e.toUpperCase().includes(t.toUpperCase()),
                    openWalletExplorerUrl() {
                        eA.zv.openHref(re.EXPLORER_WALLET_URL, "_blank")
                    },
                    getCachedRouterWalletPlatforms() {
                        let {
                            desktop: e,
                            mobile: t
                        } = eA.zv.getWalletRouterData(), r = Boolean(e ? .native), i = Boolean(e ? .universal), o = Boolean(t ? .native) || Boolean(t ? .universal);
                        return {
                            isDesktop: r,
                            isMobile: o,
                            isWeb: i
                        }
                    },
                    goToConnectingView(e) {
                        eA.AV.setData({
                            Wallet: e
                        });
                        let t = eA.zv.isMobile(),
                            {
                                isDesktop: r,
                                isWeb: i,
                                isMobile: o
                            } = re.getCachedRouterWalletPlatforms();
                        t ? o ? eA.AV.push("MobileConnecting") : i ? eA.AV.push("WebConnecting") : eA.AV.push("InstallWallet") : r ? eA.AV.push("DesktopConnecting") : i ? eA.AV.push("WebConnecting") : o ? eA.AV.push("MobileQrcodeConnecting") : eA.AV.push("InstallWallet")
                    }
                },
                rt = c `.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;
            var rr = Object.defineProperty,
                ri = Object.getOwnPropertyDescriptor,
                ro = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? ri(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && rr(t, r, l), l
                };
            let rl = class extends es {
                constructor() {
                    super(), this.view = eA.AV.state.view, this.prevView = eA.AV.state.view, this.unsubscribe = void 0, this.oldHeight = "0px", this.resizeObserver = void 0, this.unsubscribe = eA.AV.subscribe(e => {
                        this.view !== e.view && this.onChangeRoute()
                    })
                }
                firstUpdated() {
                    this.resizeObserver = new ResizeObserver(([e]) => {
                        let t = `${e.contentRect.height}px`;
                        "0px" !== this.oldHeight && tx(this.routerEl, {
                            height: [this.oldHeight, t]
                        }, {
                            duration: .2
                        }), this.oldHeight = t
                    }), this.resizeObserver.observe(this.contentEl)
                }
                disconnectedCallback() {
                    var e, t;
                    null == (e = this.unsubscribe) || e.call(this), null == (t = this.resizeObserver) || t.disconnect()
                }
                get routerEl() {
                    return re.getShadowRootElement(this, ".wcm-router")
                }
                get contentEl() {
                    return re.getShadowRootElement(this, ".wcm-content")
                }
                viewTemplate() {
                    switch (this.view) {
                        case "ConnectWallet":
                            return H `<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
                        case "DesktopConnecting":
                            return H `<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
                        case "MobileConnecting":
                            return H `<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
                        case "WebConnecting":
                            return H `<wcm-web-connecting-view></wcm-web-connecting-view>`;
                        case "MobileQrcodeConnecting":
                            return H `<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
                        case "WalletExplorer":
                            return H `<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
                        case "Qrcode":
                            return H `<wcm-qrcode-view></wcm-qrcode-view>`;
                        case "InstallWallet":
                            return H `<wcm-install-wallet-view></wcm-install-wallet-view>`;
                        default:
                            return H `<div>Not Found</div>`
                    }
                }
                async onChangeRoute() {
                    await tx(this.routerEl, {
                        opacity: [1, 0],
                        scale: [1, 1.02]
                    }, {
                        duration: .15,
                        delay: .1
                    }).finished, this.view = eA.AV.state.view, tx(this.routerEl, {
                        opacity: [0, 1],
                        scale: [.99, 1]
                    }, {
                        duration: .37,
                        delay: .05
                    })
                }
                render() {
                    return H `<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`
                }
            };
            rl.styles = [tP.globalCss, rt], ro([eu()], rl.prototype, "view", 2), ro([eu()], rl.prototype, "prevView", 2), rl = ro([ed("wcm-modal-router")], rl);
            let ra = c `div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;
            var rn = Object.defineProperty,
                rs = Object.getOwnPropertyDescriptor,
                rc = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? rs(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && rn(t, r, l), l
                };
            let rd = class extends es {
                constructor() {
                    super(), this.open = !1, this.unsubscribe = void 0, this.timeout = void 0, this.unsubscribe = eA.Vs.subscribe(e => {
                        e.open ? (this.open = !0, this.timeout = setTimeout(() => eA.Vs.closeToast(), 2200)) : (this.open = !1, clearTimeout(this.timeout))
                    })
                }
                disconnectedCallback() {
                    var e;
                    null == (e = this.unsubscribe) || e.call(this), clearTimeout(this.timeout), eA.Vs.closeToast()
                }
                render() {
                    let {
                        message: e,
                        variant: t
                    } = eA.Vs.state;
                    return this.open ? H `<div class="${ev({"wcm-success":"success"===t,"wcm-error":"error"===t})}">${"success"===t?tq.CHECKMARK_ICON:null} ${"error"===t?tq.CROSS_ICON:null}<wcm-text variant="small-regular">${e}</wcm-text></div>` : null
                }
            };

            function rh(e, t, r) {
                return e !== t && (e - t < 0 ? t - e : e - t) <= r + .1
            }
            rd.styles = [tP.globalCss, ra], rc([eu()], rd.prototype, "open", 2), rd = rc([ed("wcm-modal-toast")], rd);
            let rm = {
                    generate(e, t, r) {
                        let i = "#141414",
                            o = [],
                            l = function(e, t) {
                                let r = Array.prototype.slice.call(tC.create(e, {
                                        errorCorrectionLevel: "Q"
                                    }).modules.data, 0),
                                    i = Math.sqrt(r.length);
                                return r.reduce((e, t, r) => (r % i == 0 ? e.push([t]) : e[e.length - 1].push(t)) && e, [])
                            }(e, 0),
                            a = t / l.length,
                            n = [{
                                x: 0,
                                y: 0
                            }, {
                                x: 1,
                                y: 0
                            }, {
                                x: 0,
                                y: 1
                            }];
                        n.forEach(({
                            x: e,
                            y: t
                        }) => {
                            let r = (l.length - 7) * a * e,
                                s = (l.length - 7) * a * t;
                            for (let e = 0; e < n.length; e += 1) {
                                let t = a * (7 - 2 * e);
                                o.push(B `<rect fill="${e%2==0?i:"#ffffff"}" height="${t}" rx="${.45*t}" ry="${.45*t}" width="${t}" x="${r+a*e}" y="${s+a*e}">`)
                            }
                        });
                        let s = Math.floor((r + 25) / a),
                            c = l.length / 2 - s / 2,
                            d = l.length / 2 + s / 2 - 1,
                            h = [];
                        l.forEach((e, t) => {
                            e.forEach((e, r) => {
                                !l[t][r] || t < 7 && r < 7 || t > l.length - 8 && r < 7 || t < 7 && r > l.length - 8 || t > c && t < d && r > c && r < d || h.push([t * a + a / 2, r * a + a / 2])
                            })
                        });
                        let m = {};
                        return h.forEach(([e, t]) => {
                            m[e] ? m[e].push(t) : m[e] = [t]
                        }), Object.entries(m).map(([e, t]) => {
                            let r = t.filter(e => t.every(t => !rh(e, t, a)));
                            return [Number(e), r]
                        }).forEach(([e, t]) => {
                            t.forEach(t => {
                                o.push(B `<circle cx="${e}" cy="${t}" fill="${i}" r="${a/2.5}">`)
                            })
                        }), Object.entries(m).filter(([e, t]) => t.length > 1).map(([e, t]) => {
                            let r = t.filter(e => t.some(t => rh(e, t, a)));
                            return [Number(e), r]
                        }).map(([e, t]) => {
                            t.sort((e, t) => e < t ? -1 : 1);
                            let r = [];
                            for (let e of t) {
                                let t = r.find(t => t.some(t => rh(e, t, a)));
                                t ? t.push(e) : r.push([e])
                            }
                            return [e, r.map(e => [e[0], e[e.length - 1]])]
                        }).forEach(([e, t]) => {
                            t.forEach(([t, r]) => {
                                o.push(B `<line x1="${e}" x2="${e}" y1="${t}" y2="${r}" stroke="${i}" stroke-width="${a/1.25}" stroke-linecap="round">`)
                            })
                        }), o
                    }
                },
                rp = c `@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;
            var ru = Object.defineProperty,
                rw = Object.getOwnPropertyDescriptor,
                rg = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? rw(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && ru(t, r, l), l
                };
            let rv = class extends es {
                constructor() {
                    super(...arguments), this.uri = "", this.size = 0, this.imageId = void 0, this.walletId = void 0, this.imageUrl = void 0
                }
                svgTemplate() {
                    let e = "light" === eA.Ic.state.themeMode ? this.size : this.size - 36;
                    return B `<svg height="${e}" width="${e}">${rm.generate(this.uri,e,e/4)}</svg>`
                }
                render() {
                    let e = {
                        "wcm-dark": "dark" === eA.Ic.state.themeMode
                    };
                    return H `<div style="${`width: ${this.size}px`}" class="${ev(e)}">${this.walletId||this.imageUrl?H`<wcm-wallet-image walletId="${t$(this.walletId)}" imageId="${t$(this.imageId)}" imageUrl="${t$(this.imageUrl)}"></wcm-wallet-image>`:tq.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`
                }
            };
            rv.styles = [tP.globalCss, rp], rg([ep()], rv.prototype, "uri", 2), rg([ep({
                type: Number
            })], rv.prototype, "size", 2), rg([ep()], rv.prototype, "imageId", 2), rg([ep()], rv.prototype, "walletId", 2), rg([ep()], rv.prototype, "imageUrl", 2), rv = rg([ed("wcm-qrcode")], rv);
            let rf = c `:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;
            var rb = Object.defineProperty,
                ry = Object.getOwnPropertyDescriptor,
                rx = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? ry(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && rb(t, r, l), l
                };
            let r$ = class extends es {
                constructor() {
                    super(...arguments), this.onChange = () => null
                }
                render() {
                    return H `<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${tq.SEARCH_ICON}`
                }
            };
            r$.styles = [tP.globalCss, rf], rx([ep()], r$.prototype, "onChange", 2), r$ = rx([ed("wcm-search-input")], r$);
            let rC = c `@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;
            var rA = Object.defineProperty,
                r_ = Object.getOwnPropertyDescriptor;
            let rk = class extends es {
                render() {
                    return H `<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`
                }
            };
            rk.styles = [tP.globalCss, rC], rk = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? r_(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && rA(t, r, l), l
            })([ed("wcm-spinner")], rk);
            let rO = c `span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;
            var rE = Object.defineProperty,
                rI = Object.getOwnPropertyDescriptor,
                rT = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? rI(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && rE(t, r, l), l
                };
            let rP = class extends es {
                constructor() {
                    super(...arguments), this.variant = "medium-regular", this.color = "primary"
                }
                render() {
                    let e = {
                        "wcm-big-bold": "big-bold" === this.variant,
                        "wcm-medium-regular": "medium-regular" === this.variant,
                        "wcm-small-regular": "small-regular" === this.variant,
                        "wcm-small-thin": "small-thin" === this.variant,
                        "wcm-xsmall-regular": "xsmall-regular" === this.variant,
                        "wcm-xsmall-bold": "xsmall-bold" === this.variant,
                        "wcm-color-primary": "primary" === this.color,
                        "wcm-color-secondary": "secondary" === this.color,
                        "wcm-color-tertiary": "tertiary" === this.color,
                        "wcm-color-inverse": "inverse" === this.color,
                        "wcm-color-accnt": "accent" === this.color,
                        "wcm-color-error": "error" === this.color
                    };
                    return H `<span><slot class="${ev(e)}"></slot></span>`
                }
            };
            rP.styles = [tP.globalCss, rO], rT([ep()], rP.prototype, "variant", 2), rT([ep()], rP.prototype, "color", 2), rP = rT([ed("wcm-text")], rP);
            let rM = c `button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;
            var rR = Object.defineProperty,
                rS = Object.getOwnPropertyDescriptor,
                rL = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? rS(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && rR(t, r, l), l
                };
            let rW = class extends es {
                constructor() {
                    super(...arguments), this.onClick = () => null, this.name = "", this.walletId = "", this.label = void 0, this.imageId = void 0, this.installed = !1, this.recent = !1
                }
                sublabelTemplate() {
                    return this.recent ? H `<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>` : this.installed ? H `<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>` : null
                }
                handleClick() {
                    eA.uA.click({
                        name: "WALLET_BUTTON",
                        walletId: this.walletId
                    }), this.onClick()
                }
                render() {
                    var e;
                    return H `<button @click="${this.handleClick.bind(this)}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${t$(this.imageId)}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${null!=(e=this.label)?e:re.getWalletName(this.name,!0)}</wcm-text>${this.sublabelTemplate()}</div></button>`
                }
            };
            rW.styles = [tP.globalCss, rM], rL([ep()], rW.prototype, "onClick", 2), rL([ep()], rW.prototype, "name", 2), rL([ep()], rW.prototype, "walletId", 2), rL([ep()], rW.prototype, "label", 2), rL([ep()], rW.prototype, "imageId", 2), rL([ep({
                type: Boolean
            })], rW.prototype, "installed", 2), rL([ep({
                type: Boolean
            })], rW.prototype, "recent", 2), rW = rL([ed("wcm-wallet-button")], rW);
            let rj = c `:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
            var rD = Object.defineProperty,
                rN = Object.getOwnPropertyDescriptor,
                rz = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? rN(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && rD(t, r, l), l
                };
            let rU = class extends es {
                constructor() {
                    super(...arguments), this.walletId = "", this.imageId = void 0, this.imageUrl = void 0
                }
                render() {
                    var e;
                    let t = null != (e = this.imageUrl) && e.length ? this.imageUrl : re.getWalletIcon({
                        id: this.walletId,
                        image_id: this.imageId
                    });
                    return H `${t.length?H`<div><img src="${t}" alt="${this.id}"></div>`:tq.WALLET_PLACEHOLDER}`
                }
            };
            rU.styles = [tP.globalCss, rj], rz([ep()], rU.prototype, "walletId", 2), rz([ep()], rU.prototype, "imageId", 2), rz([ep()], rU.prototype, "imageUrl", 2), rU = rz([ed("wcm-wallet-image")], rU);
            var rH = Object.defineProperty,
                rB = Object.getOwnPropertyDescriptor,
                rZ = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? rB(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && rH(t, r, l), l
                };
            let rV = class extends es {
                constructor() {
                    super(), this.preload = !0, this.preloadData()
                }
                async loadImages(e) {
                    try {
                        null != e && e.length && await Promise.all(e.map(async e => re.preloadImage(e)))
                    } catch {
                        console.info("Unsuccessful attempt at preloading some images", e)
                    }
                }
                async preloadListings() {
                    if (eA.t0.state.enableExplorer) {
                        await eA.uc.getRecomendedWallets(), eA.zb.setIsDataLoaded(!0);
                        let {
                            recomendedWallets: e
                        } = eA.uc.state, t = e.map(e => re.getWalletIcon(e));
                        await this.loadImages(t)
                    } else eA.zb.setIsDataLoaded(!0)
                }
                async preloadCustomImages() {
                    let e = re.getCustomImageUrls();
                    await this.loadImages(e)
                }
                async preloadData() {
                    try {
                        this.preload && (this.preload = !1, await Promise.all([this.preloadListings(), this.preloadCustomImages()]))
                    } catch (e) {
                        console.error(e), eA.Vs.openToast("Failed preloading", "error")
                    }
                }
            };
            rZ([eu()], rV.prototype, "preload", 2), rV = rZ([ed("wcm-explorer-context")], rV);
            var rq = Object.defineProperty,
                rF = Object.getOwnPropertyDescriptor;
            let rK = class extends es {
                constructor() {
                    super(), this.unsubscribeTheme = void 0, tP.setTheme(), this.unsubscribeTheme = eA.Ic.subscribe(tP.setTheme)
                }
                disconnectedCallback() {
                    var e;
                    null == (e = this.unsubscribeTheme) || e.call(this)
                }
            };
            rK = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? rF(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && rq(t, r, l), l
            })([ed("wcm-theme-context")], rK);
            let rY = c `@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
            var rQ = Object.defineProperty,
                rG = Object.getOwnPropertyDescriptor;
            let rX = class extends es {
                onGoToQrcode() {
                    eA.AV.push("Qrcode")
                }
                render() {
                    let {
                        recomendedWallets: e
                    } = eA.uc.state, t = [...e, ...e], r = 2 * eA.zv.RECOMMENDED_WALLET_AMOUNT;
                    return H `<wcm-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${tq.QRCODE_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${tq.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[...Array(r)].map((e,r)=>{let i=t[r%t.length];return i?H`<wcm-wallet-image walletId="${i.id}" imageId="${i.image_id}"></wcm-wallet-image>`:tq.WALLET_PLACEHOLDER})}</div><wcm-button-big @click="${re.handleAndroidLinking}"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`
                }
            };
            rX.styles = [tP.globalCss, rY], rX = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? rG(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && rQ(t, r, l), l
            })([ed("wcm-android-wallet-selection")], rX);
            let rJ = c `@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;
            var r0 = Object.defineProperty,
                r1 = Object.getOwnPropertyDescriptor,
                r2 = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? r1(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && r0(t, r, l), l
                };
            let r5 = class extends es {
                constructor() {
                    super(...arguments), this.walletId = void 0, this.imageId = void 0, this.isError = !1, this.isStale = !1, this.label = ""
                }
                svgLoaderTemplate() {
                    var e, t;
                    let r = null != (t = null == (e = eA.Ic.state.themeVariables) ? void 0 : e["--wcm-wallet-icon-large-border-radius"]) ? t : tP.getPreset("--wcm-wallet-icon-large-border-radius"),
                        i = 0;
                    i = (r.includes("%") ? .88 * parseInt(r, 10) : parseInt(r, 10)) * 1.17;
                    let o = 317 - 1.57 * i,
                        l = 425 - 1.8 * i;
                    return H `<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${i}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${o}" stroke-dashoffset="${l}"></use></svg>`
                }
                render() {
                    let e = {
                        "wcm-error": this.isError,
                        "wcm-stale": this.isStale
                    };
                    return H `<div class="${ev(e)}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${t$(this.walletId)}" imageId="${t$(this.imageId)}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${this.isError?"error":"primary"}">${this.isError?"Connection declined":this.label}</wcm-text>`
                }
            };
            r5.styles = [tP.globalCss, rJ], r2([ep()], r5.prototype, "walletId", 2), r2([ep()], r5.prototype, "imageId", 2), r2([ep({
                type: Boolean
            })], r5.prototype, "isError", 2), r2([ep({
                type: Boolean
            })], r5.prototype, "isStale", 2), r2([ep()], r5.prototype, "label", 2), r5 = r2([ed("wcm-connector-waiting")], r5);
            let r4 = {
                    manualWallets() {
                        var e, t;
                        let {
                            mobileWallets: r,
                            desktopWallets: i
                        } = eA.t0.state, o = null == (e = r4.recentWallet()) ? void 0 : e.id, l = eA.zv.isMobile() ? r : i, a = l ? .filter(e => o !== e.id);
                        return null != (t = eA.zv.isMobile() ? a ? .map(({
                            id: e,
                            name: t,
                            links: r
                        }) => ({
                            id: e,
                            name: t,
                            mobile: r,
                            links: r
                        })) : a ? .map(({
                            id: e,
                            name: t,
                            links: r
                        }) => ({
                            id: e,
                            name: t,
                            desktop: r,
                            links: r
                        }))) ? t : []
                    },
                    recentWallet: () => re.getRecentWallet(),
                    recomendedWallets(e = !1) {
                        var t;
                        let r = e || null == (t = r4.recentWallet()) ? void 0 : t.id,
                            {
                                recomendedWallets: i
                            } = eA.uc.state;
                        return i.filter(e => r !== e.id)
                    }
                },
                r3 = {
                    onConnecting(e) {
                        re.goToConnectingView(e)
                    },
                    manualWalletsTemplate() {
                        return r4.manualWallets().map(e => H `<wcm-wallet-button walletId="${e.id}" name="${e.name}" .onClick="${()=>this.onConnecting(e)}"></wcm-wallet-button>`)
                    },
                    recomendedWalletsTemplate(e = !1) {
                        return r4.recomendedWallets(e).map(e => H `<wcm-wallet-button name="${e.name}" walletId="${e.id}" imageId="${e.image_id}" .onClick="${()=>this.onConnecting(e)}"></wcm-wallet-button>`)
                    },
                    recentWalletTemplate() {
                        let e = r4.recentWallet();
                        if (e) return H `<wcm-wallet-button name="${e.name}" walletId="${e.id}" imageId="${t$(e.image_id)}" .recent="${!0}" .onClick="${()=>this.onConnecting(e)}"></wcm-wallet-button>`
                    }
                },
                r7 = c `.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;
            var r6 = Object.defineProperty,
                r8 = Object.getOwnPropertyDescriptor;
            let r9 = class extends es {
                render() {
                    let {
                        explorerExcludedWalletIds: e,
                        enableExplorer: t
                    } = eA.t0.state, r = r3.manualWalletsTemplate(), i = r3.recomendedWalletsTemplate(), o = [r3.recentWalletTemplate(), ...r, ...i];
                    o = o.filter(Boolean);
                    let l = o.length > 4 || "ALL" !== e && t,
                        a = [];
                    a = l ? o.slice(0, 3) : o;
                    let n = Boolean(a.length);
                    return H `<wcm-modal-header .border="${!0}" title="Connect your wallet" .onAction="${re.handleUriCopy}" .actionIcon="${tq.COPY_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${tq.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${tq.SCAN_ICON}<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${n?H`<wcm-modal-footer><div class="wcm-desktop-title">${tq.DESKTOP_ICON}<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${a} ${l?H`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>`:null}</div></wcm-modal-footer>`:null}`
                }
            };
            r9.styles = [tP.globalCss, r7], r9 = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? r8(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && r6(t, r, l), l
            })([ed("wcm-desktop-wallet-selection")], r9);
            let ie = c `div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
            var it = Object.defineProperty,
                ir = Object.getOwnPropertyDescriptor;
            let ii = class extends es {
                render() {
                    let {
                        termsOfServiceUrl: e,
                        privacyPolicyUrl: t
                    } = eA.t0.state;
                    return e ? ? t ? H `<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${e?H`<a href="${e}" target="_blank" rel="noopener noreferrer">Terms of Service</a>`:null} ${e&&t?"and":null} ${t?H`<a href="${t}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>`:null}</wcm-text></div>` : null
                }
            };
            ii.styles = [tP.globalCss, ie], ii = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? ir(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && it(t, r, l), l
            })([ed("wcm-legal-notice")], ii);
            let io = c `div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
            var il = Object.defineProperty,
                ia = Object.getOwnPropertyDescriptor;
            let is = class extends es {
                onQrcode() {
                    eA.AV.push("Qrcode")
                }
                render() {
                    let {
                        explorerExcludedWalletIds: e,
                        enableExplorer: t
                    } = eA.t0.state, r = r3.manualWalletsTemplate(), i = r3.recomendedWalletsTemplate(), o = [r3.recentWalletTemplate(), ...r, ...i];
                    o = o.filter(Boolean);
                    let l = o.length > 8 || "ALL" !== e && t,
                        a = [];
                    a = l ? o.slice(0, 7) : o;
                    let n = Boolean(a.length);
                    return H `<wcm-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${tq.QRCODE_ICON}"></wcm-modal-header>${n?H`<wcm-modal-content><div>${a} ${l?H`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>`:null}</div></wcm-modal-content>`:null}`
                }
            };
            is.styles = [tP.globalCss, io], is = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? ia(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && il(t, r, l), l
            })([ed("wcm-mobile-wallet-selection")], is);
            let ic = c `:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;
            var id = Object.defineProperty,
                ih = Object.getOwnPropertyDescriptor,
                im = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? ih(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && id(t, r, l), l
                };
            let ip = class extends es {
                constructor() {
                    super(), this.open = !1, this.active = !1, this.unsubscribeModal = void 0, this.abortController = void 0, this.unsubscribeModal = eA.jb.subscribe(e => {
                        e.open ? this.onOpenModalEvent() : this.onCloseModalEvent()
                    })
                }
                disconnectedCallback() {
                    var e;
                    null == (e = this.unsubscribeModal) || e.call(this)
                }
                get overlayEl() {
                    return re.getShadowRootElement(this, ".wcm-overlay")
                }
                get containerEl() {
                    return re.getShadowRootElement(this, ".wcm-container")
                }
                toggleBodyScroll(e) {
                    if (document.querySelector("body")) {
                        if (e) {
                            let e = document.getElementById("wcm-styles");
                            e ? .remove()
                        } else document.head.insertAdjacentHTML("beforeend", '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>')
                    }
                }
                onCloseModal(e) {
                    e.target === e.currentTarget && eA.jb.close()
                }
                onOpenModalEvent() {
                    this.toggleBodyScroll(!1), this.addKeyboardEvents(), this.open = !0, setTimeout(async () => {
                        let e = re.isMobileAnimation() ? {
                            y: ["50vh", "0vh"]
                        } : {
                            scale: [.98, 1]
                        };
                        await Promise.all([tx(this.overlayEl, {
                            opacity: [0, 1]
                        }, {
                            delay: .1,
                            duration: .2
                        }).finished, tx(this.containerEl, e, {
                            delay: .1,
                            duration: .2
                        }).finished]), this.active = !0
                    }, 0)
                }
                async onCloseModalEvent() {
                    this.toggleBodyScroll(!0), this.removeKeyboardEvents();
                    let e = re.isMobileAnimation() ? {
                        y: ["0vh", "50vh"]
                    } : {
                        scale: [1, .98]
                    };
                    await Promise.all([tx(this.overlayEl, {
                        opacity: [1, 0]
                    }, {
                        duration: .2
                    }).finished, tx(this.containerEl, e, {
                        duration: .2
                    }).finished]), this.containerEl.removeAttribute("style"), this.active = !1, this.open = !1
                }
                addKeyboardEvents() {
                    this.abortController = new AbortController, window.addEventListener("keydown", e => {
                        var t;
                        "Escape" === e.key ? eA.jb.close() : "Tab" === e.key && (null != (t = e.target) && t.tagName.includes("wcm-") || this.containerEl.focus())
                    }, this.abortController), this.containerEl.focus()
                }
                removeKeyboardEvents() {
                    var e;
                    null == (e = this.abortController) || e.abort(), this.abortController = void 0
                }
                render() {
                    let e = {
                        "wcm-overlay": !0,
                        "wcm-active": this.active
                    };
                    return H `<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${ev(e)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${this.open?H`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>`:null}</div></div>`
                }
            };
            ip.styles = [tP.globalCss, ic], im([eu()], ip.prototype, "open", 2), im([eu()], ip.prototype, "active", 2), ip = im([ed("wcm-modal")], ip);
            let iu = c `div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;
            var iw = Object.defineProperty,
                ig = Object.getOwnPropertyDescriptor,
                iv = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? ig(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && iw(t, r, l), l
                };
            let ib = class extends es {
                constructor() {
                    super(...arguments), this.isMobile = !1, this.isDesktop = !1, this.isWeb = !1, this.isRetry = !1
                }
                onMobile() {
                    eA.zv.isMobile() ? eA.AV.replace("MobileConnecting") : eA.AV.replace("MobileQrcodeConnecting")
                }
                onDesktop() {
                    eA.AV.replace("DesktopConnecting")
                }
                onWeb() {
                    eA.AV.replace("WebConnecting")
                }
                render() {
                    return H `<div>${this.isRetry?H`<slot></slot>`:null} ${this.isMobile?H`<wcm-button .onClick="${this.onMobile}" .iconLeft="${tq.MOBILE_ICON}" variant="outline">Mobile</wcm-button>`:null} ${this.isDesktop?H`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${tq.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>`:null} ${this.isWeb?H`<wcm-button .onClick="${this.onWeb}" .iconLeft="${tq.GLOBE_ICON}" variant="outline">Web</wcm-button>`:null}</div>`
                }
            };
            ib.styles = [tP.globalCss, iu], iv([ep({
                type: Boolean
            })], ib.prototype, "isMobile", 2), iv([ep({
                type: Boolean
            })], ib.prototype, "isDesktop", 2), iv([ep({
                type: Boolean
            })], ib.prototype, "isWeb", 2), iv([ep({
                type: Boolean
            })], ib.prototype, "isRetry", 2), ib = iv([ed("wcm-platform-selection")], ib);
            let iy = c `button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
            var ix = Object.defineProperty,
                i$ = Object.getOwnPropertyDescriptor;
            let iC = class extends es {
                onClick() {
                    eA.AV.push("WalletExplorer")
                }
                render() {
                    let {
                        recomendedWallets: e
                    } = eA.uc.state, t = r4.manualWallets(), r = [...e, ...t].reverse().slice(0, 4);
                    return H `<button @click="${this.onClick}"><div class="wcm-icons">${r.map(e=>{let t=re.getWalletIcon(e);if(t)return H`<img src="${t}">`;let r=re.getWalletIcon({id:e.id});return r?H` < img src = "${r}" > `:tq.WALLET_PLACEHOLDER})} ${[...Array(4-r.length)].map(()=>tq.WALLET_PLACEHOLDER)}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`
                }
            };
            iC.styles = [tP.globalCss, iy], iC = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? i$(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && ix(t, r, l), l
            })([ed("wcm-view-all-wallets-button")], iC);
            let iA = c `.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
            var i_ = Object.defineProperty,
                ik = Object.getOwnPropertyDescriptor,
                iO = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? ik(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && i_(t, r, l), l
                };
            let iE = class extends es {
                constructor() {
                    super(), this.walletId = "", this.imageId = "", this.uri = "", setTimeout(() => {
                        let {
                            walletConnectUri: e
                        } = eA.zb.state;
                        this.uri = e
                    }, 0)
                }
                get overlayEl() {
                    return re.getShadowRootElement(this, ".wcm-qr-container")
                }
                render() {
                    return H `<div class="wcm-qr-container">${this.uri?H`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${t$(this.walletId)}" imageId="${t$(this.imageId)}"></wcm-qrcode>`:H`<wcm-spinner></wcm-spinner>`}</div>`
                }
            };
            iE.styles = [tP.globalCss, iA], iO([ep()], iE.prototype, "walletId", 2), iO([ep()], iE.prototype, "imageId", 2), iO([eu()], iE.prototype, "uri", 2), iE = iO([ed("wcm-walletconnect-qr")], iE);
            var iI = Object.defineProperty,
                iT = Object.getOwnPropertyDescriptor;
            let iP = class extends es {
                viewTemplate() {
                    return eA.zv.isAndroid() ? H `<wcm-android-wallet-selection></wcm-android-wallet-selection>` : eA.zv.isMobile() ? H `<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>` : H `<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`
                }
                render() {
                    return H `${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`
                }
            };
            iP.styles = [tP.globalCss], iP = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? iT(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && iI(t, r, l), l
            })([ed("wcm-connect-wallet-view")], iP);
            let iM = c `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
            var iR = Object.defineProperty,
                iS = Object.getOwnPropertyDescriptor,
                iL = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? iS(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && iR(t, r, l), l
                };
            let iW = class extends es {
                constructor() {
                    super(), this.isError = !1, this.openDesktopApp()
                }
                onFormatAndRedirect(e) {
                    let {
                        desktop: t,
                        name: r
                    } = eA.zv.getWalletRouterData(), i = t ? .native;
                    if (i) {
                        let t = eA.zv.formatNativeUrl(i, e, r);
                        eA.zv.openHref(t, "_self")
                    }
                }
                openDesktopApp() {
                    let {
                        walletConnectUri: e
                    } = eA.zb.state, t = eA.zv.getWalletRouterData();
                    re.setRecentWallet(t), e && this.onFormatAndRedirect(e)
                }
                render() {
                    let {
                        name: e,
                        id: t,
                        image_id: r
                    } = eA.zv.getWalletRouterData(), {
                        isMobile: i,
                        isWeb: o
                    } = re.getCachedRouterWalletPlatforms();
                    return H `<wcm-modal-header title="${e}" .onAction="${re.handleUriCopy}" .actionIcon="${tq.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${t$(r)}" label="${`Continue in ${e}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${e} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${i}" .isWeb="${o}" .isRetry="${!0}"><wcm-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${tq.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`
                }
            };
            iW.styles = [tP.globalCss, iM], iL([eu()], iW.prototype, "isError", 2), iW = iL([ed("wcm-desktop-connecting-view")], iW);
            let ij = c `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;
            var iD = Object.defineProperty,
                iN = Object.getOwnPropertyDescriptor;
            let iz = class extends es {
                onInstall(e) {
                    e && eA.zv.openHref(e, "_blank")
                }
                render() {
                    let {
                        name: e,
                        id: t,
                        image_id: r,
                        homepage: i
                    } = eA.zv.getWalletRouterData();
                    return H `<wcm-modal-header title="${e}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${t$(r)}" label="Not Detected" .isStale="${!0}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${e} to continue. If multiple browser extensions are installed, disable non ${e} ones and try again`}</wcm-text><wcm-button .onClick="${()=>this.onInstall(i)}" .iconLeft="${tq.ARROW_DOWN_ICON}">Download</wcm-button></wcm-info-footer>`
                }
            };
            iz.styles = [tP.globalCss, ij], iz = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? iN(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && iD(t, r, l), l
            })([ed("wcm-install-wallet-view")], iz);
            let iU = c `wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;
            var iH = Object.defineProperty,
                iB = Object.getOwnPropertyDescriptor,
                iZ = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? iB(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && iH(t, r, l), l
                };
            let iV = class extends es {
                constructor() {
                    super(), this.isError = !1, this.openMobileApp()
                }
                onFormatAndRedirect(e, t = !1) {
                    let {
                        mobile: r,
                        name: i
                    } = eA.zv.getWalletRouterData(), o = r ? .native, l = r ? .universal;
                    if (o && !t) {
                        let t = eA.zv.formatNativeUrl(o, e, i);
                        eA.zv.openHref(t, "_self")
                    } else if (l) {
                        let t = eA.zv.formatUniversalUrl(l, e, i);
                        eA.zv.openHref(t, "_self")
                    }
                }
                openMobileApp(e = !1) {
                    let {
                        walletConnectUri: t
                    } = eA.zb.state, r = eA.zv.getWalletRouterData();
                    re.setRecentWallet(r), t && this.onFormatAndRedirect(t, e)
                }
                onGoToAppStore(e) {
                    e && eA.zv.openHref(e, "_blank")
                }
                render() {
                    let {
                        name: e,
                        id: t,
                        image_id: r,
                        app: i,
                        mobile: o
                    } = eA.zv.getWalletRouterData(), {
                        isWeb: l
                    } = re.getCachedRouterWalletPlatforms(), a = i ? .ios, n = o ? .universal;
                    return H `<wcm-modal-header title="${e}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${t$(r)}" label="Tap 'Open' to continue…" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${l}" .isRetry="${!0}"><wcm-button .onClick="${()=>this.openMobileApp(!1)}" .iconRight="${tq.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection>${n?H`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${()=>this.openMobileApp(!0)}">Try this alternate link</span></wcm-text>`:null}</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${t}" imageId="${t$(r)}"></wcm-wallet-image><wcm-text>${`Get ${e}`}</wcm-text></div><wcm-button .iconRight="${tq.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGoToAppStore(a)}" variant="ghost">App Store</wcm-button></wcm-info-footer>`
                }
            };
            iV.styles = [tP.globalCss, iU], iZ([eu()], iV.prototype, "isError", 2), iV = iZ([ed("wcm-mobile-connecting-view")], iV);
            let iq = c `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
            var iF = Object.defineProperty,
                iK = Object.getOwnPropertyDescriptor;
            let iY = class extends es {
                render() {
                    let {
                        name: e,
                        id: t,
                        image_id: r
                    } = eA.zv.getWalletRouterData(), {
                        isDesktop: i,
                        isWeb: o
                    } = re.getCachedRouterWalletPlatforms();
                    return H `<wcm-modal-header title="${e}" .onAction="${re.handleUriCopy}" .actionIcon="${tq.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${t}" imageId="${t$(r)}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${e} app`}</wcm-text><wcm-platform-selection .isDesktop="${i}" .isWeb="${o}"></wcm-platform-selection></wcm-info-footer>`
                }
            };
            iY.styles = [tP.globalCss, iq], iY = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? iK(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && iF(t, r, l), l
            })([ed("wcm-mobile-qr-connecting-view")], iY);
            var iQ = Object.defineProperty,
                iG = Object.getOwnPropertyDescriptor;
            let iX = class extends es {
                render() {
                    return H `<wcm-modal-header title="Scan the code" .onAction="${re.handleUriCopy}" .actionIcon="${tq.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`
                }
            };
            iX.styles = [tP.globalCss], iX = ((e, t, r, i) => {
                for (var o, l = i > 1 ? void 0 : i ? iG(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                return i && l && iQ(t, r, l), l
            })([ed("wcm-qrcode-view")], iX);
            let iJ = c `wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
            var i0 = Object.defineProperty,
                i1 = Object.getOwnPropertyDescriptor,
                i2 = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? i1(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && i0(t, r, l), l
                };
            let i5 = class extends es {
                constructor() {
                    super(...arguments), this.loading = !eA.uc.state.wallets.listings.length, this.firstFetch = !eA.uc.state.wallets.listings.length, this.search = "", this.endReached = !1, this.intersectionObserver = void 0, this.searchDebounce = re.debounce(e => {
                        e.length >= 1 ? (this.firstFetch = !0, this.endReached = !1, this.search = e, eA.uc.resetSearch(), this.fetchWallets()) : this.search && (this.search = "", this.endReached = this.isLastPage(), eA.uc.resetSearch())
                    })
                }
                firstUpdated() {
                    this.createPaginationObserver()
                }
                disconnectedCallback() {
                    var e;
                    null == (e = this.intersectionObserver) || e.disconnect()
                }
                get placeholderEl() {
                    return re.getShadowRootElement(this, ".wcm-placeholder-block")
                }
                createPaginationObserver() {
                    this.intersectionObserver = new IntersectionObserver(([e]) => {
                        e.isIntersecting && !(this.search && this.firstFetch) && this.fetchWallets()
                    }), this.intersectionObserver.observe(this.placeholderEl)
                }
                isLastPage() {
                    let {
                        wallets: e,
                        search: t
                    } = eA.uc.state, {
                        listings: r,
                        total: i
                    } = this.search ? t : e;
                    return i <= 40 || r.length >= i
                }
                async fetchWallets() {
                    var e;
                    let {
                        wallets: t,
                        search: r
                    } = eA.uc.state, {
                        listings: i,
                        total: o,
                        page: l
                    } = this.search ? r : t;
                    if (!this.endReached && (this.firstFetch || o > 40 && i.length < o)) try {
                        this.loading = !0;
                        let t = null == (e = eA.zb.state.chains) ? void 0 : e.join(","),
                            {
                                listings: r
                            } = await eA.uc.getWallets({
                                page: this.firstFetch ? 1 : l + 1,
                                entries: 40,
                                search: this.search,
                                version: 2,
                                chains: t
                            }),
                            i = r.map(e => re.getWalletIcon(e));
                        await Promise.all([...i.map(async e => re.preloadImage(e)), eA.zv.wait(300)]), this.endReached = this.isLastPage()
                    } catch (e) {
                        console.error(e), eA.Vs.openToast(re.getErrorMessage(e), "error")
                    } finally {
                        this.loading = !1, this.firstFetch = !1
                    }
                }
                onConnect(e) {
                    eA.zv.isAndroid() ? re.handleMobileLinking(e) : re.goToConnectingView(e)
                }
                onSearchChange(e) {
                    let {
                        value: t
                    } = e.target;
                    this.searchDebounce(t)
                }
                render() {
                    let {
                        wallets: e,
                        search: t
                    } = eA.uc.state, {
                        listings: r
                    } = this.search ? t : e, i = this.loading && !r.length, o = this.search.length >= 3, l = r3.manualWalletsTemplate(), a = r3.recomendedWalletsTemplate(!0);
                    o && (l = l.filter(({
                        values: e
                    }) => re.caseSafeIncludes(e[0], this.search)), a = a.filter(({
                        values: e
                    }) => re.caseSafeIncludes(e[0], this.search)));
                    let n = !this.loading && !r.length && !a.length,
                        s = {
                            "wcm-loading": i,
                            "wcm-end-reached": this.endReached || !this.loading,
                            "wcm-empty": n
                        };
                    return H `<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(this)}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${ev(s)}"><div class="wcm-grid">${i?null:l} ${i?null:a} ${i?null:r.map(e=>H`${e?H`<wcm-wallet-button imageId="${e.image_id}" name="${e.name}" walletId="${e.id}" .onClick="${()=>this.onConnect(e)}"></wcm-wallet-button>`:null}`)}</div><div class="wcm-placeholder-block">${n?H`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>`:null} ${!n&&this.loading?H`<wcm-spinner></wcm-spinner>`:null}</div></wcm-modal-content>`
                }
            };
            i5.styles = [tP.globalCss, iJ], i2([eu()], i5.prototype, "loading", 2), i2([eu()], i5.prototype, "firstFetch", 2), i2([eu()], i5.prototype, "search", 2), i2([eu()], i5.prototype, "endReached", 2), i5 = i2([ed("wcm-wallet-explorer-view")], i5);
            let i4 = c `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
            var i3 = Object.defineProperty,
                i7 = Object.getOwnPropertyDescriptor,
                i6 = (e, t, r, i) => {
                    for (var o, l = i > 1 ? void 0 : i ? i7(t, r) : t, a = e.length - 1; a >= 0; a--)(o = e[a]) && (l = (i ? o(t, r, l) : o(l)) || l);
                    return i && l && i3(t, r, l), l
                };
            let i8 = class extends es {
                constructor() {
                    super(), this.isError = !1, this.openWebWallet()
                }
                onFormatAndRedirect(e) {
                    let {
                        desktop: t,
                        name: r
                    } = eA.zv.getWalletRouterData(), i = t ? .universal;
                    if (i) {
                        let t = eA.zv.formatUniversalUrl(i, e, r);
                        eA.zv.openHref(t, "_blank")
                    }
                }
                openWebWallet() {
                    let {
                        walletConnectUri: e
                    } = eA.zb.state, t = eA.zv.getWalletRouterData();
                    re.setRecentWallet(t), e && this.onFormatAndRedirect(e)
                }
                render() {
                    let {
                        name: e,
                        id: t,
                        image_id: r
                    } = eA.zv.getWalletRouterData(), {
                        isMobile: i,
                        isDesktop: o
                    } = re.getCachedRouterWalletPlatforms(), l = eA.zv.isMobile();
                    return H `<wcm-modal-header title="${e}" .onAction="${re.handleUriCopy}" .actionIcon="${tq.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${t$(r)}" label="${`Continue in ${e}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${e} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${i}" .isDesktop="${!l&&o}" .isRetry="${!0}"><wcm-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${tq.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`
                }
            };
            i8.styles = [tP.globalCss, i4], i6([eu()], i8.prototype, "isError", 2), i8 = i6([ed("wcm-web-connecting-view")], i8)
        }
    }
]);
//# sourceMappingURL=4283.bdb13c19e44076fd.js.map