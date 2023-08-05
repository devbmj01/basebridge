(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9182], {
        19106: function(e, t, s) {
            "use strict";
            s.d(t, {
                F: function() {
                    return p
                }
            });
            var n = s(52322),
                r = s(2784),
                i = s(25171),
                a = s(97381),
                c = s(4836),
                l = s(30984),
                o = s(25675),
                d = s.n(o);

            function u(e) {
                let {
                    isOpen: t,
                    onClose: s,
                    onOpen: i,
                    assets: o,
                    selectedAsset: u,
                    network: x,
                    handleChangeAsset: h
                } = e, m = (0, r.useCallback)(() => {
                    t && s(), t || i()
                }, [t, s, i]), f = (0, l.y)(x), w = "L1" === f ? u.L1symbol : u.L2symbol;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: "flex cursor-pointer flex-row items-center font-sans",
                        onClick: m,
                        children: [(0, n.jsx)("div", {
                            className: "align-center justify-center font-sans text-4xl text-stone-600 sm:text-6xl",
                            children: w
                        }), t ? (0, n.jsx)(a, {
                            className: "ml-2 h-4 text-white"
                        }) : (0, n.jsx)(c, {
                            className: "ml-2 h-4 text-white"
                        })]
                    }), (0, n.jsx)("div", {
                        className: "".concat(t ? "" : "hidden", " modal absolute left-0 mt-2 w-56 origin-top-right cursor-pointer rounded-md bg-cds-background-gray-5 text-white focus:outline-none"),
                        children: o.map(e => {
                            let t = "L1" === f ? e.L1symbol : e.L2symbol,
                                s = "L1" === f ? e.L1icon : e.L2icon;
                            return (0, n.jsxs)("div", {
                                onClick: h(e),
                                className: "flex flex-row justify-between px-4 py-2 ".concat(w === t ? "bg-cds-background-level-2" : ""),
                                children: [(0, n.jsxs)("div", {
                                    className: "flex flex-row items-center justify-center",
                                    children: [(0, n.jsx)(d(), {
                                        src: s,
                                        width: 32,
                                        height: 32,
                                        alt: "selected",
                                        className: "mr-2"
                                    }), t, " "]
                                }), w === t && (0, n.jsx)(d(), {
                                    src: "/icons/check.svg",
                                    width: 15,
                                    height: 11,
                                    alt: "selected"
                                })]
                            }, "asset-".concat(t))
                        })
                    })]
                })
            }
            var x = s(19450),
                h = s(60039),
                m = s(63096),
                f = s(77250),
                w = function(e) {
                    let [t, s] = (0, r.useState)(!1);
                    return (0, r.useEffect)(() => {
                        let n = window.matchMedia(e);
                        n.matches !== t && s(n.matches);
                        let r = () => s(n.matches);
                        return window.addEventListener("resize", r), () => window.removeEventListener("resize", r)
                    }, [t, e]), t
                },
                b = s(58105);

            function p(e) {
                let {
                    inputNetwork: t,
                    outputNetwork: s,
                    balance: a,
                    amount: c,
                    setAmount: o,
                    assets: p,
                    selectedAsset: v,
                    setSelectedAsset: j,
                    isWithdraw: y,
                    children: g
                } = e, {
                    isOpen: L,
                    onOpen: N,
                    onClose: k
                } = (0, m.q)(), E = (0, r.useRef)(null), C = w("(min-width: 640px)"), I = (0, f.d)({
                    network: t
                }), D = (0, f.d)({
                    network: s
                }), S = (0, h.h)({
                    asset: v.apiId
                }), F = S && c ? (0, x.V)(S * +c) : "$0.00", A = "" !== c && "" !== a && (0, b.parseUnits)(c, 18).gt((0, b.parseUnits)(a, 18)) && "Insufficient balance", B = (0, l.y)(t), T = "L1" === B ? v.L1symbol : v.L2symbol;
                return (0, n.jsxs)("div", {
                    className: "flex w-full max-w-xl flex-col p-6",
                    children: [(0, n.jsx)("span", {
                        className: "mb-4 font-mono text-sm font-medium text-white",
                        children: "NETWORK"
                    }), (0, n.jsxs)("div", {
                        className: "mb-4 flex flex-row items-center",
                        children: [(0, n.jsxs)("div", {
                            className: "flex flex-row items-center justify-center text-white",
                            children: [(0, n.jsx)("div", {
                                children: (0, n.jsx)(d(), {
                                    src: null == I ? void 0 : I.svg,
                                    width: 32,
                                    height: 32,
                                    alt: null == I ? void 0 : I.name
                                })
                            }), (0, n.jsxs)("div", {
                                className: "ml-3 flex flex-col font-sans",
                                children: [(0, n.jsx)("div", {
                                    className: "text-md text-white",
                                    children: "From"
                                }), (0, n.jsx)("div", {
                                    className: "text-sm text-stone-400",
                                    children: null == I ? void 0 : I.name
                                })]
                            })]
                        }), (0, n.jsx)(i, {
                            className: "ml-3 mr-3 h-4 w-4 text-white"
                        }), (0, n.jsxs)("div", {
                            className: "flex flex-row items-center justify-center text-white",
                            children: [(0, n.jsx)("div", {
                                children: (0, n.jsx)(d(), {
                                    src: null == D ? void 0 : D.svg,
                                    width: 32,
                                    height: 32,
                                    alt: null == D ? void 0 : D.name
                                })
                            }), (0, n.jsxs)("div", {
                                className: "ml-3 flex flex-col font-sans",
                                children: [(0, n.jsx)("div", {
                                    className: "text-md text-white",
                                    children: "To"
                                }), (0, n.jsx)("div", {
                                    className: "text-sm text-stone-400",
                                    children: null == D ? void 0 : D.name
                                })]
                            })]
                        })]
                    }), (0, n.jsx)("span", {
                        className: "mt-8 font-mono text-sm font-medium text-white",
                        children: "AMOUNT"
                    }), (0, n.jsxs)("div", {
                        className: "flex max-w-[100vw] cursor-text flex-row items-center justify-between",
                        onClick: function() {
                            var e;
                            "0" === c && o(""), null === (e = E.current) || void 0 === e || e.focus()
                        },
                        children: [(0, n.jsx)("input", {
                            className: "bg-transparent font-sans text-4xl text-white outline-none max-[640px]:grow sm:text-6xl",
                            maxLength: 9,
                            type: "number",
                            ref: E,
                            pattern: "[0-9]*",
                            inputMode: "decimal",
                            style: C ? {
                                minWidth: 40,
                                width: 37 * c.length,
                                maxWidth: 496
                            } : {
                                maxWidth: "calc(100vw - 120px)"
                            },
                            placeholder: "0",
                            min: "0",
                            value: c,
                            onChange: function(e) {
                                let t = parseFloat(e.target.value.toString()),
                                    s = [...e.target.value.toString() || "0"],
                                    n = new Set(["46", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57"]),
                                    r = s.find(e => {
                                        let t = e.charCodeAt(0);
                                        return !!n.has(t.toString())
                                    });
                                r && !(e.target.value.toString().split(".").length > 2) && !(t < 0) && (e.target.value.length > 12 || o(e.target.value))
                            }
                        }, "amountInput"), (0, n.jsx)("div", {
                            className: "relative flex flex-row",
                            children: (0, n.jsx)(u, {
                                isOpen: L,
                                onClose: k,
                                isWithdraw: y,
                                onOpen: N,
                                assets: p,
                                selectedAsset: v,
                                network: t,
                                handleChangeAsset: function(e) {
                                    return () => {
                                        k(), j(e), o("0")
                                    }
                                }
                            })
                        })]
                    }), A && (0, n.jsx)("div", {
                        className: "flex flex-row space-x-0.5 text-sm text-stone-600",
                        children: (0, n.jsx)("span", {
                            className: "text-md font-sans text-red-600",
                            children: A
                        })
                    }), (0, n.jsxs)("div", {
                        className: "mt-6 flex flex-row items-center justify-between",
                        children: [(0, n.jsxs)("div", {
                            className: "flex flex-col space-x-0.5",
                            children: [(0, n.jsxs)("span", {
                                className: "text-md font-sans text-white",
                                children: [F, " USD"]
                            }), (0, n.jsxs)("span", {
                                className: "text-md font-sans text-stone-600",
                                children: [(0, x.E)(a), " ", T, " available"]
                            })]
                        }), (0, n.jsx)("div", {
                            children: (0, n.jsx)("button", {
                                onClick: function() {
                                    o((.99 * parseFloat(a)).toFixed(6).toString())
                                },
                                className: "border-gray-400 flex flex-row items-center justify-center rounded border px-8 py-2 font-sans text-sm text-white ",
                                type: "button",
                                children: "MAX"
                            })
                        })]
                    }), (0, n.jsx)("div", {
                        className: "hidden w-64 flex-row pt-9 sm:block",
                        children: g
                    })]
                })
            }
        },
        1676: function(e, t, s) {
            "use strict";
            s.d(t, {
                p: function() {
                    return c
                }
            });
            var n = s(52322),
                r = s(2784),
                i = s(92107),
                a = s(61148);
            let c = (0, r.memo)(function(e) {
                let {
                    className: t
                } = e, {
                    openConnectModal: s
                } = (0, i.We)();
                return (0, n.jsx)(a.J, {
                    className: t,
                    onClick: s,
                    children: "Connect wallet"
                })
            })
        },
        54743: function(e, t, s) {
            "use strict";
            s.d(t, {
                D: function() {
                    return d
                }
            });
            var n = s(52322),
                r = s(2784),
                i = s(41664),
                a = s.n(i),
                c = s(11163);
            let l = [{
                text: "Deposit",
                link: "/deposit"
            }, {
                text: "Withdraw",
                link: "/withdraw"
            }];

            function o(e) {
                let {
                    children: t
                } = e, {
                    pathname: s
                } = (0, c.useRouter)();
                return (0, n.jsxs)("div", {
                    className: "m-0 flex h-full w-full flex-col p-0",
                    children: [(0, n.jsx)("div", {
                        className: "flex flex-row sm:border-b sm:border-sidebar-border sm:px-8",
                        children: l.map(e => {
                            let {
                                text: t,
                                link: r
                            } = e;
                            return (0, n.jsx)(a(), {
                                href: r,
                                className: "text-md mr-4 w-1/2 pb-2 text-center font-sans sm:w-auto sm:text-sm ".concat(s.includes(r) ? "border-b-2 border-cds-primary text-cds-primary" : "text-white"),
                                children: t
                            }, "container-link-".concat(r))
                        })
                    }), t]
                })
            }
            let d = (0, r.memo)(function(e) {
                let {
                    children: t
                } = e;
                return (0, n.jsx)(o, {
                    children: t
                })
            })
        },
        11477: function(e, t, s) {
            "use strict";
            s.d(t, {
                n: function() {
                    return i
                }
            });
            var n = s(52322),
                r = s(25867);

            function i() {
                return (0, n.jsxs)("div", {
                    className: "flex h-full w-full flex-col p-4 font-sans lg:w-[420px] lg:border-l lg:border-sidebar-border",
                    children: [(0, n.jsx)("span", {
                        className: "mb-8 text-base font-medium text-stone-500",
                        children: "Frequently asked questions"
                    }), (0, n.jsx)(r.P, {
                        question: "What is Base Bridge?",
                        answer: "Base Bridge enables the transfer of certain digital assets and other data back and forth between Ethereum and Base."
                    }), (0, n.jsx)(r.P, {
                        question: "What wallet can I use?",
                        answer: "You can use popular Ethereum wallets like Coinbase Wallet, MetaMask, and Rainbow Wallet to name a few."
                    }), (0, n.jsx)(r.P, {
                        question: "What if I have a question, issue or problem?",
                        answer: (0, n.jsxs)(n.Fragment, {
                            children: ["The", " ", (0, n.jsx)("a", {
                                href: "https://base.org/discord",
                                className: "underline",
                                children: "Base Discord"
                            }), " ", "community is available around the clock for general questions, assistance and support!"]
                        })
                    }), (0, n.jsx)(r.P, {
                        question: "How do you withdraw from Base?",
                        answer: (0, n.jsxs)("div", {
                            className: "flex flex-col space-y-4",
                            children: [(0, n.jsxs)("p", {
                                children: ["Connect your wallet and confirm that it is set to Base network. Choose the digital asset you wish to bridge back to Ethereum mainnet and confirm you want to withdraw.", " "]
                            }), (0, n.jsx)("p", {
                                children: "After your withdrawal request is proposed onchain (within an hour) you must verify and complete the transaction in order to access your funds. You can track your progress under the transaction tab."
                            }), (0, n.jsxs)("p", {
                                children: ["Transferring from Base to Ethereum takes approximately 7 days. This is a security feature designed to help secure Base. If you prefer not to wait, you can alternatively use a third-party bridge which allows you to transfer assets much faster. You can find more information about the Base Bridge", " ", (0, n.jsxs)("a", {
                                    href: "https://docs.base.org/tools/bridge-faq",
                                    className: "underline",
                                    children: [" ", "here"]
                                }), "."]
                            })]
                        })
                    })]
                })
            }
        },
        25867: function(e, t, s) {
            "use strict";
            s.d(t, {
                P: function() {
                    return c
                }
            });
            var n = s(52322),
                r = s(2784),
                i = s(97381),
                a = s(4836);

            function c(e) {
                let {
                    question: t,
                    answer: s
                } = e, [c, l] = (0, r.useState)(!1), o = (0, r.useCallback)(() => l(e => !e), [l]);
                return (0, n.jsxs)("div", {
                    className: "flex flex-col gap-6 border-b border-gray pb-6",
                    children: [(0, n.jsxs)("button", {
                        type: "button",
                        className: "flex flex-row justify-between py-2 text-base font-medium text-white",
                        onClick: o,
                        children: [(0, n.jsx)("span", {
                            className: "text-left",
                            children: t
                        }), (0, n.jsx)("span", {
                            children: c ? (0, n.jsx)(i, {
                                className: "ml-2 h-4 text-white"
                            }) : (0, n.jsx)(a, {
                                className: "ml-2 h-4 text-white"
                            })
                        })]
                    }), c && (0, n.jsx)("span", {
                        className: "text-base text-white",
                        children: s
                    })]
                })
            }
        },
        3358: function(e, t, s) {
            "use strict";
            s.d(t, {
                Y: function() {
                    return u
                }
            });
            var n = s(41799),
                r = s(52322),
                i = s(2784),
                a = s(9544),
                c = s(61148),
                l = s(88269),
                o = s(69560);
            let d = (0, i.memo)(function(e) {
                let {
                    toChainId: t,
                    onSuccess: s
                } = e, {
                    switchNetwork: n
                } = (0, o.g0)({
                    onSuccess: s
                }), a = (0, i.useCallback)(() => {
                    null == n || n(t)
                }, [n, t]);
                return (0, r.jsx)(c.J, {
                    onClick: a,
                    children: "Switch network"
                })
            });

            function u(e) {
                var t, {
                        toChainId: s,
                        onClick: u
                    } = e,
                    x = function(e, t) {
                        if (null == e) return {};
                        var s, n, r = function(e, t) {
                            if (null == e) return {};
                            var s, n, r = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) s = i[n], t.indexOf(s) >= 0 || (r[s] = e[s]);
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < i.length; n++) s = i[n], !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (r[s] = e[s])
                        }
                        return r
                    }(e, ["toChainId", "onClick"]);
                let [h, m] = (0, i.useState)(!1), f = function(e) {
                    let {
                        chain: t
                    } = (0, o.LN)();
                    return (null == t ? void 0 : t.id) === e
                }(s), w = null === (t = a.Z.find(e => e.id === s)) || void 0 === t ? void 0 : t.name, b = () => {
                    f ? null == u || u() : m(!0)
                };
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(c.J, (0, n.Z)({
                        onClick: b
                    }, x)), (0, r.jsx)(l.u, {
                        isOpen: h,
                        onClose: () => m(!1),
                        title: "Switch to ".concat(w),
                        content: "Switching networks will enable fund withdrawals from ".concat(w),
                        icon: "confirm",
                        footer: (0, r.jsxs)("div", {
                            className: "flex justify-end gap-2",
                            children: [(0, r.jsx)(c.J, {
                                variant: "secondary",
                                onClick: () => m(!1),
                                children: "Cancel"
                            }), (0, r.jsx)(d, {
                                toChainId: s,
                                onSuccess: () => m(!1)
                            })]
                        })
                    })]
                })
            }
        },
        18199: function(e, t, s) {
            "use strict";
            s.d(t, {
                v: function() {
                    return h
                }
            });
            var n = s(52322),
                r = s(19450),
                i = s(60039),
                a = s(77250),
                c = s(30984),
                l = s(11752),
                o = s.n(l),
                d = s(69560);
            let {
                publicRuntimeConfig: u
            } = o()(), x = "1" === u.l1ChainID ? "7 days" : "12 seconds";

            function h(e) {
                var t, s;
                let {
                    balance: l,
                    outputNetwork: o,
                    header: u,
                    chainId: h,
                    selectedAsset: m,
                    isDeposit: f
                } = e, w = (0, a.d)({
                    network: o
                }), b = (0, i.h)({
                    asset: m.apiId
                }), {
                    data: p
                } = (0, d.LK)({
                    formatUnits: "ether",
                    chainId: parseInt(h)
                }), v = parseFloat(null !== (s = null == p ? void 0 : null === (t = p.formatted) || void 0 === t ? void 0 : t.gasPrice) && void 0 !== s ? s : "0"), j = l && +l > 0 ? (0, r.E)(l) : 0, y = l && +l > 0 ? v + +l : 0, g = b && +l > 0 ? (0, r.V)(b * +l) : "$0", L = (0, c.y)(o), N = "L1" === L ? m.L1symbol : m.L2symbol;
                return (0, n.jsxs)("div", {
                    className: "flex max-w-xl flex-col border-t font-sans",
                    children: [(0, n.jsx)("div", {
                        className: "text-md p-6 font-mono text-white",
                        children: u
                    }), (0, n.jsxs)("div", {
                        className: "relative flex w-full flex-row justify-between p-6 pb-0",
                        children: [(0, n.jsxs)("div", {
                            className: "has-tooltip",
                            children: ["USDC" === m.L1symbol && (0, n.jsx)("a", {
                                href: "https://help.coinbase.com/en/coinbase/getting-started/crypto-education/usd-base-coin",
                                target: "_blank",
                                rel: "noreferrer",
                                className: "tooltip -mt-10 ml-6 rounded-lg bg-cds-background-gray-90 p-2 text-black underline shadow-lg",
                                children: "Learn more"
                            }), (0, n.jsxs)("div", {
                                className: "flex grow flex-col text-white",
                                children: [(0, n.jsxs)("span", {
                                    className: "font-medium",
                                    children: ["Receive ", N]
                                }), (0, n.jsxs)("p", {
                                    className: "text-stone-500",
                                    children: ["On ", w.summary.location]
                                })]
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "text-right",
                            children: [(0, n.jsxs)("span", {
                                className: "text-white",
                                children: [j, " ", N]
                            }), (0, n.jsx)("p", {
                                className: "text-stone-500",
                                children: g
                            })]
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "flex w-full flex-row justify-between p-6 pb-0 text-white",
                        children: [(0, n.jsxs)("div", {
                            className: "flex grow flex-col text-white",
                            children: [(0, n.jsx)("span", {
                                className: "font-medium",
                                children: "Transfer time"
                            }), (0, n.jsx)("p", {
                                className: "text-stone-500",
                                children: f ? "" : "Withdrawals take about ".concat(x, " to finalize on Base")
                            })]
                        }), (0, n.jsx)("p", {
                            className: "text-right",
                            children: f ? "A few minutes" : "About ".concat(x)
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "flex w-full flex-row justify-between p-6 pb-0 text-white",
                        children: [(0, n.jsx)("span", {
                            className: "font-medium",
                            children: "Network fee (est.) "
                        }), (0, n.jsxs)("div", {
                            className: "text-right",
                            children: [(0, n.jsxs)("span", {
                                children: [v.toFixed(9), " ETH"]
                            }), (0, n.jsxs)("p", {
                                className: "text-stone-500",
                                children: [b ? (0, r.V)(v * b, 6) : "$0", " USD"]
                            })]
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "flex w-full flex-row justify-between p-6 pb-0 text-white",
                        children: [(0, n.jsx)("span", {
                            className: "font-medium",
                            children: "Total with (est.) fee"
                        }), (0, n.jsxs)("div", {
                            className: "text-right",
                            children: [(0, n.jsxs)("span", {
                                children: [y.toFixed(9), " ETH"]
                            }), (0, n.jsxs)("p", {
                                className: "text-stone-500",
                                children: [b ? (0, r.V)(y * b, 6) : "$0", " USD"]
                            })]
                        })]
                    })]
                })
            }
        },
        96487: function(e, t, s) {
            "use strict";
            s.d(t, {
                WY: function() {
                    return i
                },
                xA: function() {
                    return l
                }
            });
            var n = s(41799);
            class r extends Error {
                constructor(e, t, s, n, r) {
                    super(s), this.status = e, this.code = t, this.message = s, this.description = n, this.errorDetail = r
                }
            }
            async function i(e, t, s) {
                var i, a;
                let c = new URL(e);
                "GET" === s && t && (c.search = t);
                let l = c.toString().replace(/\/$/, ""),
                    o = ["POST", "DELETE"].includes(s) ? {
                        method: s,
                        body: t
                    } : null,
                    d = (0, n.Z)({
                        headers: {
                            Accept: "application/json"
                        }
                    }, o),
                    u = await fetch(l, d);
                if (u.status >= 400) {
                    let {
                        error: e
                    } = await u.json();
                    throw new r(u.status, null == e ? void 0 : e.code, null == e ? void 0 : e.message, null == e ? void 0 : e.description, null == e ? void 0 : e.errorDetail)
                }
                return {
                    status: u.status,
                    body: u.ok ? await u.json() : null,
                    headers: Object.fromEntries(null !== (a = null === (i = u.headers) || void 0 === i ? void 0 : i.entries()) && void 0 !== a ? a : [])
                }
            }
            async function a(e, t, s) {
                return i(e, t, s)
            }
            async function c(e, t) {
                let s = new URLSearchParams(t).toString();
                return a(e, s, "GET")
            }
            async function l(e, t) {
                return (await c(e, t)).body
            }
        },
        47503: function(e, t, s) {
            "use strict";
            s.d(t, {
                z: function() {
                    return c
                }
            });
            var n = [{
                    L1symbol: "ETH",
                    L2symbol: "ETH",
                    L1chainId: 1,
                    L2chainId: 8453,
                    apiId: "ethereum",
                    L1icon: "/icons/currency/eth.svg",
                    L2icon: "/icons/currency/eth.svg",
                    decimals: 18
                }, {
                    L1symbol: "cbETH",
                    L2symbol: "cbETH",
                    L1chainId: 1,
                    L2chainId: 8453,
                    L1contract: "0xbe9895146f7af43049ca1c1ae358b0541ea49704",
                    L2contract: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
                    apiId: "coinbase-wrapped-staked-eth",
                    L1icon: "/icons/currency/cbeth.svg",
                    L2icon: "/icons/currency/cbeth.svg",
                    decimals: 18
                }, {
                    L1symbol: "DAI",
                    L2symbol: "DAI",
                    L1chainId: 1,
                    L2chainId: 8453,
                    L1contract: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
                    L2contract: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
                    apiId: "dai",
                    L1icon: "/icons/currency/dai.svg",
                    L2icon: "/icons/currency/dai.svg",
                    decimals: 18
                }, {
                    L1symbol: "USDC",
                    L2symbol: "USDbC",
                    L1chainId: 1,
                    L2chainId: 8453,
                    L1contract: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    L2contract: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
                    apiId: "usd-coin",
                    L1icon: "/icons/currency/usdc.svg",
                    L2icon: "/icons/currency/usdbc.svg",
                    decimals: 6
                }, {
                    L1symbol: "ETH",
                    L2symbol: "ETH",
                    L1chainId: 5,
                    L2chainId: 84531,
                    apiId: "ethereum",
                    L1icon: "/icons/currency/eth.svg",
                    L2icon: "/icons/currency/eth.svg",
                    decimals: 18
                }, {
                    L1symbol: "cbETH",
                    L2symbol: "cbETH",
                    L1chainId: 5,
                    L2chainId: 84531,
                    L1contract: "0xD0bb78d0B337aA6D3A0530DD2e58560bf00851f1",
                    L2contract: "0x7c6b91D9Be155A6Db01f749217d76fF02A7227F2",
                    apiId: "coinbase-wrapped-staked-eth",
                    L1icon: "/icons/currency/cbeth.svg",
                    L2icon: "/icons/currency/cbeth.svg",
                    decimals: 18
                }, {
                    L1symbol: "COMP",
                    L2symbol: "COMP",
                    L1chainId: 5,
                    L2chainId: 84531,
                    L1contract: "0x3587b2F7E0E2D6166d6C14230e7Fe160252B0ba4",
                    L2contract: "0xA29b548056c3fD0f68BAd9d4829EC4E66f22f796",
                    apiId: "compound-governance-token",
                    L1icon: "/icons/currency/comp.svg",
                    L2icon: "/icons/currency/comp.svg",
                    decimals: 18
                }],
                r = s(11752),
                i = s.n(r);
            let {
                publicRuntimeConfig: a
            } = i()();

            function c() {
                return n.filter(e => e.L1chainId === parseInt(a.l1ChainID) && e.L2chainId === parseInt(a.l2ChainID))
            }
        },
        19450: function(e, t, s) {
            "use strict";

            function n(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                    s = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: t
                    });
                return s.format(e)
            }

            function r(e) {
                return parseFloat((+e).toFixed(8)).toString()
            }
            s.d(t, {
                E: function() {
                    return r
                },
                V: function() {
                    return n
                }
            })
        },
        60039: function(e, t, s) {
            "use strict";
            s.d(t, {
                h: function() {
                    return i
                }
            });
            var n = s(82066),
                r = s(96487);

            function i(e) {
                let {
                    asset: t
                } = e, {
                    data: s
                } = (0, n.useQuery)(t, async () => {
                    var e;
                    let s = await (0, r.WY)("https://api.coingecko.com/api/v3/simple/price?ids=".concat(t, "&vs_currencies=usd"), void 0, "get");
                    if (!s.body) throw Error("Network response was not ok");
                    return null === (e = s.body[t]) || void 0 === e ? void 0 : e.usd
                }, {
                    suspense: !1,
                    staleTime: 15e3,
                    refetchInterval: 3e4
                });
                return s
            }
        },
        77250: function(e, t, s) {
            "use strict";
            s.d(t, {
                d: function() {
                    return r
                }
            });
            var n = s(9544);

            function r(e) {
                let {
                    network: t
                } = e;
                return n.Z.find(e => e.network === t.toLowerCase())
            }
        },
        42752: function(e, t, s) {
            "use strict";
            s.d(t, {
                c: function() {
                    return i
                }
            });
            var n = s(2784),
                r = s(69560);

            function i() {
                let [e, t] = (0, n.useState)(!1), {
                    address: s
                } = (0, r.mA)();
                return (0, n.useEffect)(() => {
                    s && t(!0)
                }, [s]), e
            }
        },
        30984: function(e, t, s) {
            "use strict";
            s.d(t, {
                y: function() {
                    return r
                }
            });
            let n = {
                homestead: "L1",
                goerli: "L1",
                base: "L2",
                "base-goerli": "L2"
            };

            function r(e) {
                return n[e]
            }
        },
        25171: function(e, t, s) {
            let n = s(2784),
                r = n.forwardRef(function({
                    title: e,
                    titleId: t,
                    ...s
                }, r) {
                    return n.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        ref: r,
                        "aria-labelledby": t
                    }, s), e ? n.createElement("title", {
                        id: t
                    }, e) : null, n.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    }))
                });
            e.exports = r
        }
    }
]);
//# sourceMappingURL=9182-a748534639371d3c.js.map