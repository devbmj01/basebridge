"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9343], {
        75412: function(e, t, s) {
            s.d(t, {
                t0: function() {
                    return U
                },
                zv: function() {
                    return E
                },
                uA: function() {
                    return L
                },
                uc: function() {
                    return B
                },
                jb: function() {
                    return J
                },
                zb: function() {
                    return D
                },
                AV: function() {
                    return W
                },
                Ic: function() {
                    return ee
                },
                Vs: function() {
                    return es
                }
            });
            let r = Symbol(),
                n = Symbol(),
                o = (e, t) => new Proxy(e, t),
                l = Object.getPrototypeOf,
                a = new WeakMap,
                i = e => e && (a.has(e) ? a.get(e) : l(e) === Object.prototype || l(e) === Array.prototype),
                c = e => "object" == typeof e && null !== e,
                d = e => {
                    if (Array.isArray(e)) return Array.from(e);
                    let t = Object.getOwnPropertyDescriptors(e);
                    return Object.values(t).forEach(e => {
                        e.configurable = !0
                    }), Object.create(l(e), t)
                },
                u = e => e[n] || e,
                p = (e, t, s, l) => {
                    if (!i(e)) return e;
                    let a = l && l.get(e);
                    if (!a) {
                        let t = u(e);
                        a = Object.values(Object.getOwnPropertyDescriptors(t)).some(e => !e.configurable && !e.writable) ? [t, d(t)] : [t], null == l || l.set(e, a)
                    }
                    let [c, f] = a, g = s && s.get(c);
                    return g && !!f === g[1].f || ((g = ((e, t) => {
                        let s = {
                                f: t
                            },
                            o = !1,
                            l = (t, r) => {
                                if (!o) {
                                    let n = s.a.get(e);
                                    if (n || (n = {}, s.a.set(e, n)), "w" === t) n.w = !0;
                                    else {
                                        let e = n[t];
                                        e || (e = new Set, n[t] = e), e.add(r)
                                    }
                                }
                            },
                            a = {
                                get: (t, r) => r === n ? e : (l("k", r), p(Reflect.get(t, r), s.a, s.c, s.t)),
                                has: (t, n) => n === r ? (o = !0, s.a.delete(e), !0) : (l("h", n), Reflect.has(t, n)),
                                getOwnPropertyDescriptor: (e, t) => (l("o", t), Reflect.getOwnPropertyDescriptor(e, t)),
                                ownKeys: e => (l("w"), Reflect.ownKeys(e))
                            };
                        return t && (a.set = a.deleteProperty = () => !1), [a, s]
                    })(c, !!f))[1].p = o(f || c, g[0]), s && s.set(c, g)), g[1].a = t, g[1].c = s, g[1].t = l, g[1].p
                },
                f = (e, t, s, r) => {
                    if (Object.is(e, t)) return !1;
                    if (!c(e) || !c(t)) return !0;
                    let n = s.get(u(e));
                    if (!n) return !0;
                    if (r) {
                        let s = r.get(e);
                        if (s && s.n === t) return s.g;
                        r.set(e, {
                            n: t,
                            g: !1
                        })
                    }
                    let o = null;
                    try {
                        for (let s of n.h || [])
                            if (o = Reflect.has(e, s) !== Reflect.has(t, s)) return o;
                        if (!0 === n.w) {
                            if (o = ((e, t) => {
                                    let s = Reflect.ownKeys(e),
                                        r = Reflect.ownKeys(t);
                                    return s.length !== r.length || s.some((e, t) => e !== r[t])
                                })(e, t)) return o
                        } else
                            for (let s of n.o || [])
                                if (o = !!Reflect.getOwnPropertyDescriptor(e, s) != !!Reflect.getOwnPropertyDescriptor(t, s)) return o;
                        for (let l of n.k || [])
                            if (o = f(e[l], t[l], s, r)) return o;
                        return null === o && (o = !0), o
                    } finally {
                        r && r.set(e, {
                            n: t,
                            g: o
                        })
                    }
                },
                g = e => i(e) && e[n] || null,
                h = (e, t = !0) => {
                    a.set(e, t)
                },
                m = e => "object" == typeof e && null !== e,
                b = new WeakMap,
                y = new WeakSet,
                w = (e = Object.is, t = (e, t) => new Proxy(e, t), s = e => m(e) && !y.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer), r = e => {
                    switch (e.status) {
                        case "fulfilled":
                            return e.value;
                        case "rejected":
                            throw e.reason;
                        default:
                            throw e
                    }
                }, n = new WeakMap, o = (e, t, s = r) => {
                    let l = n.get(e);
                    if ((null == l ? void 0 : l[0]) === t) return l[1];
                    let a = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
                    return h(a, !0), n.set(e, [t, a]), Reflect.ownKeys(e).forEach(t => {
                        if (Object.getOwnPropertyDescriptor(a, t)) return;
                        let r = Reflect.get(e, t),
                            n = {
                                value: r,
                                enumerable: !0,
                                configurable: !0
                            };
                        if (y.has(r)) h(r, !1);
                        else if (r instanceof Promise) delete n.value, n.get = () => s(r);
                        else if (b.has(r)) {
                            let [e, t] = b.get(r);
                            n.value = o(e, t(), s)
                        }
                        Object.defineProperty(a, t, n)
                    }), Object.preventExtensions(a)
                }, l = new WeakMap, a = [1, 1], i = r => {
                    if (!m(r)) throw Error("object required");
                    let n = l.get(r);
                    if (n) return n;
                    let c = a[0],
                        d = new Set,
                        u = (e, t = ++a[0]) => {
                            c !== t && (c = t, d.forEach(s => s(e, t)))
                        },
                        p = a[1],
                        f = (e = ++a[1]) => (p === e || d.size || (p = e, w.forEach(([t]) => {
                            let s = t[1](e);
                            s > c && (c = s)
                        })), c),
                        h = e => (t, s) => {
                            let r = [...t];
                            r[1] = [e, ...r[1]], u(r, s)
                        },
                        w = new Map,
                        v = (e, t) => {
                            if (w.has(e)) throw Error("prop listener already exists");
                            if (d.size) {
                                let s = t[3](h(e));
                                w.set(e, [t, s])
                            } else w.set(e, [t])
                        },
                        I = e => {
                            var t;
                            let s = w.get(e);
                            s && (w.delete(e), null == (t = s[1]) || t.call(s))
                        },
                        O = e => {
                            d.add(e), 1 === d.size && w.forEach(([e, t], s) => {
                                if (t) throw Error("remove already exists");
                                let r = e[3](h(s));
                                w.set(s, [e, r])
                            });
                            let t = () => {
                                d.delete(e), 0 === d.size && w.forEach(([e, t], s) => {
                                    t && (t(), w.set(s, [e]))
                                })
                            };
                            return t
                        },
                        C = Array.isArray(r) ? [] : Object.create(Object.getPrototypeOf(r)),
                        W = t(C, {
                            deleteProperty(e, t) {
                                let s = Reflect.get(e, t);
                                I(t);
                                let r = Reflect.deleteProperty(e, t);
                                return r && u(["delete", [t], s]), r
                            },
                            set(t, r, n, o) {
                                let a = Reflect.has(t, r),
                                    c = Reflect.get(t, r, o);
                                if (a && (e(c, n) || l.has(n) && e(c, l.get(n)))) return !0;
                                I(r), m(n) && (n = g(n) || n);
                                let d = n;
                                if (n instanceof Promise) n.then(e => {
                                    n.status = "fulfilled", n.value = e, u(["resolve", [r], e])
                                }).catch(e => {
                                    n.status = "rejected", n.reason = e, u(["reject", [r], e])
                                });
                                else {
                                    !b.has(n) && s(n) && (d = i(n));
                                    let e = !y.has(d) && b.get(d);
                                    e && v(r, e)
                                }
                                return Reflect.set(t, r, d, o), u(["set", [r], n, c]), !0
                            }
                        });
                    return l.set(r, W), b.set(W, [C, f, o, O]), Reflect.ownKeys(r).forEach(e => {
                        let t = Object.getOwnPropertyDescriptor(r, e);
                        "value" in t && (W[e] = r[e], delete t.value, delete t.writable), Object.defineProperty(C, e, t)
                    }), W
                }) => [i, b, y, e, t, s, r, n, o, l, a],
                [v] = w();

            function I(e = {}) {
                return v(e)
            }

            function O(e, t, s) {
                let r;
                let n = b.get(e);
                n || console.warn("Please use proxy object");
                let o = [],
                    l = n[3],
                    a = !1,
                    i = e => {
                        if (o.push(e), s) {
                            t(o.splice(0));
                            return
                        }
                        r || (r = Promise.resolve().then(() => {
                            r = void 0, a && t(o.splice(0))
                        }))
                    },
                    c = l(i);
                return a = !0, () => {
                    a = !1, c()
                }
            }
            let C = I({
                    history: ["ConnectWallet"],
                    view: "ConnectWallet",
                    data: void 0
                }),
                W = {
                    state: C,
                    subscribe: e => O(C, () => e(C)),
                    push(e, t) {
                        e !== C.view && (C.view = e, t && (C.data = t), C.history.push(e))
                    },
                    reset(e) {
                        C.view = e, C.history = [e]
                    },
                    replace(e) {
                        C.history.length > 1 && (C.history[C.history.length - 1] = e, C.view = e)
                    },
                    goBack() {
                        if (C.history.length > 1) {
                            C.history.pop();
                            let [e] = C.history.slice(-1);
                            C.view = e
                        }
                    },
                    setData(e) {
                        C.data = e
                    }
                },
                E = {
                    WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
                    WCM_VERSION: "WCM_VERSION",
                    RECOMMENDED_WALLET_AMOUNT: 9,
                    isMobile: () => "u" > typeof window && Boolean(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),
                    isAndroid: () => E.isMobile() && navigator.userAgent.toLowerCase().includes("android"),
                    isIos() {
                        let e = navigator.userAgent.toLowerCase();
                        return E.isMobile() && (e.includes("iphone") || e.includes("ipad"))
                    },
                    isHttpUrl: e => e.startsWith("http://") || e.startsWith("https://"),
                    isArray: e => Array.isArray(e) && e.length > 0,
                    formatNativeUrl(e, t, s) {
                        if (E.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
                        let r = e;
                        r.includes("://") || (r = `${r=e.replaceAll("/","").replaceAll(":","")}://`), r.endsWith("/") || (r = `${r}/`), this.setWalletConnectDeepLink(r, s);
                        let n = encodeURIComponent(t);
                        return `${r}wc?uri=${n}`
                    },
                    formatUniversalUrl(e, t, s) {
                        if (!E.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
                        let r = e;
                        r.endsWith("/") || (r = `${r}/`), this.setWalletConnectDeepLink(r, s);
                        let n = encodeURIComponent(t);
                        return `${r}wc?uri=${n}`
                    },
                    wait: async e => new Promise(t => {
                        setTimeout(t, e)
                    }),
                    openHref(e, t) {
                        window.open(e, t, "noreferrer noopener")
                    },
                    setWalletConnectDeepLink(e, t) {
                        try {
                            localStorage.setItem(E.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                                href: e,
                                name: t
                            }))
                        } catch {
                            console.info("Unable to set WalletConnect deep link")
                        }
                    },
                    setWalletConnectAndroidDeepLink(e) {
                        try {
                            let [t] = e.split("?");
                            localStorage.setItem(E.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                                href: t,
                                name: "Android"
                            }))
                        } catch {
                            console.info("Unable to set WalletConnect android deep link")
                        }
                    },
                    removeWalletConnectDeepLink() {
                        try {
                            localStorage.removeItem(E.WALLETCONNECT_DEEPLINK_CHOICE)
                        } catch {
                            console.info("Unable to remove WalletConnect deep link")
                        }
                    },
                    setModalVersionInStorage() {
                        try {
                            "u" > typeof localStorage && localStorage.setItem(E.WCM_VERSION, "2.6.0")
                        } catch {
                            console.info("Unable to set Web3Modal version in storage")
                        }
                    },
                    getWalletRouterData() {
                        var e;
                        let t = null == (e = W.state.data) ? void 0 : e.Wallet;
                        if (!t) throw Error('Missing "Wallet" view data');
                        return t
                    }
                },
                j = "u" > typeof location && (location.hostname.includes("localhost") || location.protocol.includes("https")),
                A = I({
                    enabled: j,
                    userSessionId: "",
                    events: [],
                    connectedWalletId: void 0
                }),
                L = {
                    state: A,
                    subscribe: e => O(A.events, () => e(function(e, t) {
                        let s = b.get(e);
                        s || console.warn("Please use proxy object");
                        let [r, n, o] = s;
                        return o(r, n(), void 0)
                    }(A.events[A.events.length - 1]))),
                    initialize() {
                        A.enabled && "u" > typeof(null == crypto ? void 0 : crypto.randomUUID) && (A.userSessionId = crypto.randomUUID())
                    },
                    setConnectedWalletId(e) {
                        A.connectedWalletId = e
                    },
                    click(e) {
                        if (A.enabled) {
                            let t = {
                                type: "CLICK",
                                name: e.name,
                                userSessionId: A.userSessionId,
                                timestamp: Date.now(),
                                data: e
                            };
                            A.events.push(t)
                        }
                    },
                    track(e) {
                        if (A.enabled) {
                            let t = {
                                type: "TRACK",
                                name: e.name,
                                userSessionId: A.userSessionId,
                                timestamp: Date.now(),
                                data: e
                            };
                            A.events.push(t)
                        }
                    },
                    view(e) {
                        if (A.enabled) {
                            let t = {
                                type: "VIEW",
                                name: e.name,
                                userSessionId: A.userSessionId,
                                timestamp: Date.now(),
                                data: e
                            };
                            A.events.push(t)
                        }
                    }
                },
                M = I({
                    chains: void 0,
                    walletConnectUri: void 0,
                    isAuth: !1,
                    isCustomDesktop: !1,
                    isCustomMobile: !1,
                    isDataLoaded: !1,
                    isUiLoaded: !1
                }),
                D = {
                    state: M,
                    subscribe: e => O(M, () => e(M)),
                    setChains(e) {
                        M.chains = e
                    },
                    setWalletConnectUri(e) {
                        M.walletConnectUri = e
                    },
                    setIsCustomDesktop(e) {
                        M.isCustomDesktop = e
                    },
                    setIsCustomMobile(e) {
                        M.isCustomMobile = e
                    },
                    setIsDataLoaded(e) {
                        M.isDataLoaded = e
                    },
                    setIsUiLoaded(e) {
                        M.isUiLoaded = e
                    },
                    setIsAuth(e) {
                        M.isAuth = e
                    }
                },
                P = I({
                    projectId: "",
                    mobileWallets: void 0,
                    desktopWallets: void 0,
                    walletImages: void 0,
                    chains: void 0,
                    enableAuthMode: !1,
                    enableExplorer: !0,
                    explorerExcludedWalletIds: void 0,
                    explorerRecommendedWalletIds: void 0,
                    termsOfServiceUrl: void 0,
                    privacyPolicyUrl: void 0
                }),
                U = {
                    state: P,
                    subscribe: e => O(P, () => e(P)),
                    setConfig(e) {
                        var t, s;
                        L.initialize(), D.setChains(e.chains), D.setIsAuth(Boolean(e.enableAuthMode)), D.setIsCustomMobile(Boolean(null == (t = e.mobileWallets) ? void 0 : t.length)), D.setIsCustomDesktop(Boolean(null == (s = e.desktopWallets) ? void 0 : s.length)), E.setModalVersionInStorage(), Object.assign(P, e)
                    }
                },
                k = "https://explorer-api.walletconnect.com";
            async function S(e, t) {
                let s = new URL(e, k);
                return s.searchParams.append("projectId", U.state.projectId), Object.entries(t).forEach(([e, t]) => {
                    t && s.searchParams.append(e, String(t))
                }), (await fetch(s)).json()
            }
            let R = {
                getDesktopListings: async e => S("/w3m/v1/getDesktopListings", e),
                getMobileListings: async e => S("/w3m/v1/getMobileListings", e),
                getInjectedListings: async e => S("/w3m/v1/getInjectedListings", e),
                getAllListings: async e => S("/w3m/v1/getAllListings", e),
                getWalletImageUrl: e => `${k}/w3m/v1/getWalletImage/${e}?projectId=${U.state.projectId}`,
                getAssetImageUrl: e => `${k}/w3m/v1/getAssetImage/${e}?projectId=${U.state.projectId}`
            };
            var N = Object.defineProperty,
                x = Object.getOwnPropertySymbols,
                _ = Object.prototype.hasOwnProperty,
                T = Object.prototype.propertyIsEnumerable,
                K = (e, t, s) => t in e ? N(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: s
                }) : e[t] = s,
                $ = (e, t) => {
                    for (var s in t || (t = {})) _.call(t, s) && K(e, s, t[s]);
                    if (x)
                        for (var s of x(t)) T.call(t, s) && K(e, s, t[s]);
                    return e
                };
            let V = E.isMobile(),
                z = I({
                    wallets: {
                        listings: [],
                        total: 0,
                        page: 1
                    },
                    search: {
                        listings: [],
                        total: 0,
                        page: 1
                    },
                    recomendedWallets: []
                }),
                B = {
                    state: z,
                    async getRecomendedWallets() {
                        let {
                            explorerRecommendedWalletIds: e,
                            explorerExcludedWalletIds: t
                        } = U.state;
                        if ("NONE" === e || "ALL" === t && !e) return z.recomendedWallets;
                        if (E.isArray(e)) {
                            let t = {
                                    recommendedIds: e.join(",")
                                },
                                {
                                    listings: s
                                } = await R.getAllListings(t),
                                r = Object.values(s);
                            r.sort((t, s) => {
                                let r = e.indexOf(t.id),
                                    n = e.indexOf(s.id);
                                return r - n
                            }), z.recomendedWallets = r
                        } else {
                            let {
                                chains: e,
                                isAuth: s
                            } = D.state, r = e ? .join(","), n = E.isArray(t), o = {
                                page: 1,
                                sdks: s ? "auth_v1" : void 0,
                                entries: E.RECOMMENDED_WALLET_AMOUNT,
                                chains: r,
                                version: 2,
                                excludedIds: n ? t.join(",") : void 0
                            }, {
                                listings: l
                            } = V ? await R.getMobileListings(o) : await R.getDesktopListings(o);
                            z.recomendedWallets = Object.values(l)
                        }
                        return z.recomendedWallets
                    },
                    async getWallets(e) {
                        let t = $({}, e),
                            {
                                explorerRecommendedWalletIds: s,
                                explorerExcludedWalletIds: r
                            } = U.state,
                            {
                                recomendedWallets: n
                            } = z;
                        if ("ALL" === r) return z.wallets;
                        n.length ? t.excludedIds = n.map(e => e.id).join(",") : E.isArray(s) && (t.excludedIds = s.join(",")), E.isArray(r) && (t.excludedIds = [t.excludedIds, r].filter(Boolean).join(",")), D.state.isAuth && (t.sdks = "auth_v1");
                        let {
                            page: o,
                            search: l
                        } = e, {
                            listings: a,
                            total: i
                        } = V ? await R.getMobileListings(t) : await R.getDesktopListings(t), c = Object.values(a), d = l ? "search" : "wallets";
                        return z[d] = {
                            listings: [...z[d].listings, ...c],
                            total: i,
                            page: o ? ? 1
                        }, {
                            listings: c,
                            total: i
                        }
                    },
                    getWalletImageUrl: e => R.getWalletImageUrl(e),
                    getAssetImageUrl: e => R.getAssetImageUrl(e),
                    resetSearch() {
                        z.search = {
                            listings: [],
                            total: 0,
                            page: 1
                        }
                    }
                },
                H = I({
                    open: !1
                }),
                J = {
                    state: H,
                    subscribe: e => O(H, () => e(H)),
                    open: async e => new Promise(t => {
                        let {
                            isUiLoaded: s,
                            isDataLoaded: r
                        } = D.state;
                        if (D.setWalletConnectUri(e ? .uri), D.setChains(e ? .chains), W.reset("ConnectWallet"), s && r) H.open = !0, t();
                        else {
                            let e = setInterval(() => {
                                let s = D.state;
                                s.isUiLoaded && s.isDataLoaded && (clearInterval(e), H.open = !0, t())
                            }, 200)
                        }
                    }),
                    close() {
                        H.open = !1
                    }
                };
            var q = Object.defineProperty,
                F = Object.getOwnPropertySymbols,
                G = Object.prototype.hasOwnProperty,
                Q = Object.prototype.propertyIsEnumerable,
                X = (e, t, s) => t in e ? q(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: s
                }) : e[t] = s,
                Y = (e, t) => {
                    for (var s in t || (t = {})) G.call(t, s) && X(e, s, t[s]);
                    if (F)
                        for (var s of F(t)) Q.call(t, s) && X(e, s, t[s]);
                    return e
                };
            let Z = I({
                    themeMode: "u" > typeof matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                }),
                ee = {
                    state: Z,
                    subscribe: e => O(Z, () => e(Z)),
                    setThemeConfig(e) {
                        let {
                            themeMode: t,
                            themeVariables: s
                        } = e;
                        t && (Z.themeMode = t), s && (Z.themeVariables = Y({}, s))
                    }
                },
                et = I({
                    open: !1,
                    message: "",
                    variant: "success"
                }),
                es = {
                    state: et,
                    subscribe: e => O(et, () => e(et)),
                    openToast(e, t) {
                        et.open = !0, et.message = e, et.variant = t
                    },
                    closeToast() {
                        et.open = !1
                    }
                }
        },
        59343: function(e, t, s) {
            s.r(t), s.d(t, {
                WalletConnectModal: function() {
                    return n
                }
            });
            var r = s(75412);
            class n {
                constructor(e) {
                    this.openModal = r.jb.open, this.closeModal = r.jb.close, this.subscribeModal = r.jb.subscribe, this.setTheme = r.Ic.setThemeConfig, r.Ic.setThemeConfig(e), r.t0.setConfig(e), this.initUi()
                }
                async initUi() {
                    if ("u" > typeof window) {
                        await Promise.all([s.e(4061), s.e(4283)]).then(s.bind(s, 84283));
                        let e = document.createElement("wcm-modal");
                        document.body.insertAdjacentElement("beforeend", e), r.zb.setIsUiLoaded(!0)
                    }
                }
            }
        }
    }
]);
//# sourceMappingURL=9343.0fa3f654e51ffad9.js.map