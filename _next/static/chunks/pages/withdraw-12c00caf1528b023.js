(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9662], {
        12921: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/withdraw", function() {
                return n(42455)
            }])
        },
        42455: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var s = n(52322),
                a = n(2784),
                i = n(54743),
                r = n(19106),
                l = n(1676),
                o = n(11477),
                d = n(3358),
                u = n(18199),
                c = n(88269),
                p = n(59696),
                m = n(11752),
                h = n.n(m);
            let {
                publicRuntimeConfig: y
            } = h()(), f = {
                WITHDRAW_NOT_STARTED: "CONFIRM WITHDRAWAL IN WALLET",
                WITHDRAW_STARTED: "WITHDRAWAL IN PROGRESS"
            }, T = {
                WITHDRAW_NOT_STARTED: "wallet",
                WITHDRAW_STARTED: ""
            }, x = {
                WITHDRAW_NOT_STARTED: "Withdrawal will begin after confirmation.",
                WITHDRAW_STARTED: (0, s.jsx)(p.U, {
                    status: "REQUEST_SENT"
                })
            };

            function b(e) {
                let {
                    isOpen: t,
                    onClose: n,
                    L2TxHash: a
                } = e, i = "" === a ? "WITHDRAW_NOT_STARTED" : "WITHDRAW_STARTED";
                return (0, s.jsx)(c.u, {
                    isOpen: t,
                    onClose: n,
                    title: f[i],
                    content: x[i],
                    icon: T[i],
                    footer: "" !== a && (0, s.jsx)("div", {
                        className: "text-center",
                        children: (0, s.jsx)("a", {
                            className: "text-md font-sans text-cds-primary",
                            href: "".concat(y.l2ExplorerURL, "/tx/").concat(a),
                            target: "_blank",
                            rel: "noreferrer",
                            children: "View on Basescan"
                        })
                    })
                })
            }
            var w = n(47503),
                N = n(26881),
                E = n(63096),
                A = n(16496),
                g = n(42752),
                R = n(16183),
                j = n(58105),
                D = n(69560);
            let {
                publicRuntimeConfig: v
            } = h()();
            var I = [{
                inputs: [],
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "uint256",
                    name: "nonce",
                    type: "uint256"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "target",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "gasLimit",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "bytes",
                    name: "data",
                    type: "bytes"
                }, {
                    indexed: !1,
                    internalType: "bytes32",
                    name: "withdrawalHash",
                    type: "bytes32"
                }],
                name: "MessagePassed",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "WithdrawerBalanceBurnt",
                type: "event"
            }, {
                inputs: [],
                name: "MESSAGE_VERSION",
                outputs: [{
                    internalType: "uint16",
                    name: "",
                    type: "uint16"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "burn",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_target",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_gasLimit",
                    type: "uint256"
                }, {
                    internalType: "bytes",
                    name: "_data",
                    type: "bytes"
                }],
                name: "initiateWithdrawal",
                outputs: [],
                stateMutability: "payable",
                type: "function"
            }, {
                inputs: [],
                name: "messageNonce",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                name: "sentMessages",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "version",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                stateMutability: "payable",
                type: "receive"
            }];
            let {
                publicRuntimeConfig: S
            } = h()(), _ = (0, w.z)(), {
                publicRuntimeConfig: W
            } = h()(), O = parseInt(W.l2ChainID);

            function k() {
                var e, t, n;
                let i;
                let [c, p] = (0, a.useState)(""), [m, h] = (0, a.useState)(""), y = (0, g.c)(), f = _.filter(e => W.assets.split(",").includes(e.L1symbol.toLowerCase())), [T, x] = (0, a.useState)(_[0]), {
                    address: w
                } = (0, D.mA)(), {
                    data: k
                } = (0, D.KQ)({
                    address: w,
                    token: T.L2contract,
                    chainId: parseInt(W.l2ChainID)
                }), C = (0, N.E)(), L = "mainnet" === C, M = (0, A.p)(), F = function(e) {
                    let {
                        asset: t,
                        withdrawAmount: n,
                        isPermittedToBridge: s,
                        includeTosVersionByte: a
                    } = e, {
                        config: i
                    } = (0, D.PJ)({
                        address: s ? v.L2StandardBridge : void 0,
                        abi: R.abi,
                        functionName: "withdraw",
                        chainId: parseInt(v.l2ChainID),
                        args: [t.L2contract, (0, j.parseUnits)("" === n ? "0" : n, t.decimals), 1e5, a ? v.tosVersion : "0x"]
                    });
                    return i
                }({
                    asset: T,
                    withdrawAmount: c,
                    isPermittedToBridge: M,
                    includeTosVersionByte: L
                }), {
                    writeAsync: H
                } = (0, D.GG)(F), V = function(e) {
                    let {
                        userAddress: t,
                        withdrawAmount: n,
                        isPermittedToBridge: s,
                        includeTosVersionByte: a
                    } = e, {
                        config: i
                    } = (0, D.PJ)({
                        address: s ? S.l2L1MessagePasserAddress : void 0,
                        abi: I,
                        functionName: "initiateWithdrawal",
                        chainId: parseInt(S.l2ChainID),
                        args: [t, (0, j.parseUnits)("1", 5), a ? S.tosVersion : "0x"],
                        overrides: {
                            value: (0, j.parseEther)("" === n ? "0" : n)
                        }
                    });
                    return i
                }({
                    userAddress: w,
                    withdrawAmount: c,
                    isPermittedToBridge: M,
                    includeTosVersionByte: L
                }), {
                    writeAsync: B
                } = (0, D.GG)(V), {
                    isOpen: U,
                    onOpen: G,
                    onClose: P
                } = (0, E.q)(), q = (0, a.useCallback)(() => {
                    P(), h("")
                }, [P]), Q = (0, a.useCallback)(() => {
                    (async () => {
                        G();
                        try {
                            if (M) {
                                let e = await (T.L1contract ? null == H ? void 0 : H() : null == B ? void 0 : B());
                                if (null == e ? void 0 : e.hash) {
                                    let t = e.hash;
                                    h(t), p("0")
                                }
                            } else P()
                        } catch (e) {
                            P()
                        }
                    })()
                }, [G, M, T.L1contract, H, B, P]);
                return i = y ? (0, s.jsx)(d.Y, {
                    onClick: Q,
                    disabled: 0 >= parseFloat(c) || parseFloat(c) >= parseFloat(null !== (e = null == k ? void 0 : k.formatted) && void 0 !== e ? e : "0") || "" === c,
                    toChainId: O,
                    className: "text-md flex w-full items-center justify-center rounded-md p-4 font-sans font-bold uppercase sm:w-auto",
                    children: "Withdraw"
                }) : (0, s.jsx)(l.p, {
                    className: "text-md flex w-full items-center justify-center rounded-md p-4 font-sans font-bold uppercase sm:w-auto"
                }), (0, s.jsxs)("div", {
                    className: "flex-col lg:flex lg:h-full lg:flex-row",
                    children: [(0, s.jsxs)("div", {
                        className: "grow",
                        children: [(0, s.jsx)(b, {
                            isOpen: U,
                            onClose: q,
                            L2TxHash: m
                        }), (0, s.jsx)(r.F, {
                            inputNetwork: L ? "base" : "base-goerli",
                            isWithdraw: !0,
                            outputNetwork: L ? "homestead" : "goerli",
                            balance: null !== (t = null == k ? void 0 : k.formatted) && void 0 !== t ? t : "",
                            amount: c,
                            setAmount: p,
                            assets: f,
                            selectedAsset: T,
                            setSelectedAsset: x,
                            children: i
                        }), (0, s.jsxs)("div", {
                            className: "border-t border-sidebar-border",
                            children: [(0, s.jsx)(u.v, {
                                selectedAsset: T,
                                header: "TRANSACTION SUMMARY",
                                balance: null !== (n = parseFloat(null != c ? c : "0").toFixed(6)) && void 0 !== n ? n : "",
                                outputNetwork: L ? "homestead" : "goerli",
                                chainId: W.l2ChainID,
                                isDeposit: !1
                            }), (0, s.jsx)("div", {
                                className: "w-full py-12 px-6 sm:hidden",
                                children: i
                            })]
                        })]
                    }), (0, s.jsx)(o.n, {})]
                })
            }
            var C = n(9008),
                L = n.n(C),
                M = (0, a.memo)(function() {
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(L(), {
                            children: (0, s.jsx)("title", {
                                children: "Base"
                            })
                        }), (0, s.jsx)(i.D, {
                            children: (0, s.jsx)(k, {})
                        })]
                    })
                })
        },
        59696: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return y
                }
            });
            var s = n(52322),
                a = n(11752),
                i = n.n(a),
                r = n(41664),
                l = n.n(r);
            let {
                publicRuntimeConfig: o
            } = i()(), d = "1" === o.l1ChainID ? "7 days" : "12 seconds", u = {
                NOT_STARTED: "",
                STARTED: "border-white text-white",
                DONE: "border-white bg-white text-black font-bold"
            }, c = {
                NOT_STARTED: "",
                STARTED: "text-white",
                DONE: "text-white"
            };

            function p(e) {
                let {
                    num: t,
                    label: n,
                    status: a
                } = e, i = u[a], r = c[a];
                return (0, s.jsxs)("div", {
                    className: "flex flex-col items-center gap-3",
                    children: [(0, s.jsx)("div", {
                        className: "h-6 w-6 rounded-full border-2 leading-6 ".concat(i),
                        children: (0, s.jsx)("span", {
                            className: "align-super text-sm",
                            children: "DONE" === a ? "✓" : t
                        })
                    }), (0, s.jsx)("span", {
                        className: "font-sans text-base font-medium ".concat(r),
                        children: n
                    })]
                })
            }
            let m = {
                    REQUEST_SENT: ["STARTED", "NOT_STARTED", "NOT_STARTED"],
                    VERIFYING: ["DONE", "STARTED", "NOT_STARTED"],
                    VERIFIED: ["DONE", "DONE", "STARTED"]
                },
                h = {
                    REQUEST_SENT: (0, s.jsxs)(s.Fragment, {
                        children: ["In order to minimize security risk, withdrawals using the official Base Bridge take up to 7 days. After your withdrawal request is proposed onchain (within an hour) you must verify and complete the transaction in order to access your funds, at", " ", (0, s.jsx)(l(), {
                            href: "/transactions",
                            className: "underline",
                            children: "bridge.base.org/transactions"
                        }), "."]
                    }),
                    VERIFYING: (0, s.jsxs)(s.Fragment, {
                        children: ["In order to keep attackers from withdrawing your funds, there is a 7-day waiting period until you can complete your withdrawal. Check back on Jul 28 at", " ", (0, s.jsx)(l(), {
                            href: "/transactions",
                            className: "underline",
                            children: "bridge.base.org/transactions"
                        }), " ", "to complete your withdrawal."]
                    }),
                    VERIFIED: "It takes up to 1 hour for the transaction to complete onchain. After this period, you can access your funds."
                };

            function y(e) {
                let {
                    status: t
                } = e, n = m[t];
                return (0, s.jsxs)("div", {
                    className: "flex flex-col gap-10",
                    children: [(0, s.jsxs)("div", {
                        className: "mt-8 flex flex-row justify-around gap-8",
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-col items-center",
                            children: [(0, s.jsx)(p, {
                                num: "1",
                                status: n[0],
                                label: "Send request"
                            }), (0, s.jsx)("span", {
                                children: "Takes up to 1 hr"
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col items-center",
                            children: [(0, s.jsx)(p, {
                                num: "2",
                                status: n[1],
                                label: "Verify"
                            }), (0, s.jsxs)("span", {
                                children: ["Takes ", d]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col items-center",
                            children: [(0, s.jsx)(p, {
                                num: "3",
                                status: n[2],
                                label: "Complete"
                            }), (0, s.jsx)("span", {
                                children: "Takes up to 1 hr"
                            })]
                        })]
                    }), (0, s.jsx)("span", {
                        className: "font-base",
                        children: h[t]
                    }), (0, s.jsx)("span", {
                        className: "text-white underline",
                        children: (0, s.jsx)(l(), {
                            href: "https://docs.base.org/tools/bridge-faq",
                            children: "Learn more"
                        })
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [1096, 9182, 9774, 2888, 179], function() {
            return e(e.s = 12921)
        }), _N_E = e.O()
    }
]);
//# sourceMappingURL=withdraw-12c00caf1528b023.js.map