(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9563], {
        96201: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/deposit", function() {
                return n(18579)
            }])
        },
        18579: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return z
                }
            });
            var a = n(52322),
                i = n(2784),
                s = n(61148),
                r = n(19106),
                p = n(1676),
                d = n(88269),
                y = n(11752),
                l = n.n(y),
                o = n(41664),
                u = n.n(o),
                m = n(69560);
            let {
                publicRuntimeConfig: T
            } = l()(), c = {
                APPROVAL_NOT_STARTED: "Approval will initiate after confirmation.",
                APPROVAL_LOADING: "Waiting for confirmations...",
                APPROVAL_CONFIRMED: "Transaction confirmed.",
                DEPOSIT_NOT_STARTED: "Deposit will initiate after confirmation.",
                DEPOSIT_LOADING: "Waiting for confirmations...",
                DEPOSIT_CONFIRMED: (0, a.jsxs)(a.Fragment, {
                    children: ["Deposits typically take a few minutes to reach the Base network. When this is complete, you can view this transaction at", " ", (0, a.jsx)("span", {
                        className: "underline",
                        children: (0, a.jsx)(u(), {
                            href: "/transactions",
                            children: "bridge.base.org/transactions"
                        })
                    }), "."]
                })
            }, b = {
                APPROVAL_NOT_STARTED: "APPROVE IN YOUR WALLET",
                APPROVAL_LOADING: "APPROVING",
                APPROVAL_CONFIRMED: "APPROVED",
                DEPOSIT_NOT_STARTED: "CONFIRM DEPOSIT IN WALLET",
                DEPOSIT_LOADING: "CONFIRMING",
                DEPOSIT_CONFIRMED: "DEPOSIT IN TRANSIT TO BASE"
            }, f = {
                APPROVAL_NOT_STARTED: "wallet",
                APPROVAL_LOADING: "wallet",
                APPROVAL_CONFIRMED: "confirm",
                DEPOSIT_NOT_STARTED: "wallet",
                DEPOSIT_LOADING: "wallet",
                DEPOSIT_CONFIRMED: "deposit"
            };

            function x(e) {
                let {
                    isOpen: t,
                    onClose: n,
                    L1ApproveTxHash: i,
                    L1DepositTxHash: s,
                    isApprovalTx: r
                } = e, {
                    isLoading: p,
                    isSuccess: y
                } = (0, m.BX)({
                    hash: i
                }), {
                    isLoading: l,
                    isSuccess: o
                } = (0, m.BX)({
                    hash: s
                }), u = r && p ? "APPROVAL_LOADING" : r && y ? "APPROVAL_CONFIRMED" : r ? "APPROVAL_NOT_STARTED" : !r && l ? "DEPOSIT_LOADING" : !r && o ? "DEPOSIT_CONFIRMED" : "DEPOSIT_NOT_STARTED", x = r ? i : s;
                return (0, a.jsx)(d.u, {
                    isOpen: t,
                    onClose: n,
                    title: b[u],
                    content: c[u],
                    icon: f[u],
                    footer: x && (0, a.jsx)("div", {
                        className: "text-center",
                        children: (0, a.jsx)("a", {
                            className: "text-md font-sans text-cds-primary",
                            href: "".concat(T.l1ExplorerURL, "/tx/").concat(x),
                            target: "_blank",
                            rel: "noreferrer",
                            children: "View on Etherscan"
                        })
                    })
                })
            }
            var _ = n(11477),
                h = n(3358),
                E = n(18199),
                v = n(47503),
                w = n(59656),
                O = n(10835);
            let {
                publicRuntimeConfig: I
            } = l()();
            var A = n(26881),
                D = n(63096);
            let {
                publicRuntimeConfig: N
            } = l()();
            var g = n(16496),
                R = n(42752),
                M = [{
                    type: "constructor",
                    stateMutability: "nonpayable",
                    inputs: [{
                        type: "address",
                        name: "_messenger",
                        internalType: "address payable"
                    }]
                }, {
                    type: "event",
                    name: "ERC20BridgeFinalized",
                    inputs: [{
                        type: "address",
                        name: "localToken",
                        internalType: "address",
                        indexed: !0
                    }, {
                        type: "address",
                        name: "remoteToken",
                        internalType: "address",
                        indexed: !0
                    }, {
                        type: "address",
                        name: "from",
                        internalType: "address",
                        indexed: !0
                    }, {
                        type: "address",
                        name: "to",
                        internalType: "address",
                        indexed: !1
                    }, {
                        type: "uint256",
                        name: "amount",
                        internalType: "uint256",
                        indexed: !1
                    }, {
                        type: "bytes",
                        name: "extraData",
                        internalType: "bytes",
                        indexed: !1
                    }],
                    anonymous: !1
                }, {
                    type: "event",
                    name: "ERC20BridgeInitiated",
                    inputs: [{
                        type: "address",
                        name: "localToken",
                        internalType: "address",
                        indexed: !0
                    }, {
                        type: "address",
                        name: "remoteToken",
                        internalType: "address",
                        indexed: !0
                    }, {
                        type: "address",
                        name: "from",
                        internalType: "address",
                        indexed: !0
                    }, {
                        type: "address",
                        name: "to",
                        internalType: "address",
                        indexed: !1
                    }, {
                        type: "uint256",
                        name: "amount",
                        internalType: "uint256",
                        indexed: !1
                    }, {
                        type: "bytes",
                        name: "extraData",
                        internalType: "bytes",
                        indexed: !1
                    }],
                    anonymous: !1
                }, {
                    type: "event",
                    name: "ERC20DepositInitiated",
                    inputs: [{
                        type: "address",
                        name: "l1Token",
                        internalType: "address",
                        indexed: !0
                    }, {
                        type: "address",
                        name: "l2Token",
                        internalType: "address",
                        indexed: !0
                    }, {
                        type: "address",
                        name: "from",
                        internalType: "address",
                        indexed: !0
                    }, {
                        type: "address",
                        name: "to",
                        internalType: "address",
                        indexed: !1
                    }, {
                        type: "uint256",
                        name: "amount",
                        internalType: "uint256",
                        indexed: !1
                    }, {
                        type: "bytes",
                        name: "extraData",
                        internalType: "bytes",
                        indexed: !1
                    }],
                    anonymous: !1
                }, {
                    type: "event",
                    name: "ERC20WithdrawalFinalized",
                    inputs: [{
                        type: "address",
                        name: "l1Token",
                        internalType: "address",
                        indexed: !0
                    }, {
                        type: "address",
                        name: "l2Token",
                        internalType: "address",
                        indexed: !0
                    }, {
                        type: "address",
                        name: "from",
                        internalType: "address",
                        indexed: !0
                    }, {
                        type: "address",
                        name: "to",
                        internalType: "address",
                        indexed: !1
                    }, {
                        type: "uint256",
                        name: "amount",
                        internalType: "uint256",
                        indexed: !1
                    }, {
                        type: "bytes",
                        name: "extraData",
                        internalType: "bytes",
                        indexed: !1
                    }],
                    anonymous: !1
                }, {
                    type: "event",
                    name: "ETHBridgeFinalized",
                    inputs: [{
                        type: "address",
                        name: "from",
                        internalType: "address",
                        indexed: !0
                    }, {
                        type: "address",
                        name: "to",
                        internalType: "address",
                        indexed: !0
                    }, {
                        type: "uint256",
                        name: "amount",
                        internalType: "uint256",
                        indexed: !1
                    }, {
                        type: "bytes",
                        name: "extraData",
                        internalType: "bytes",
                        indexed: !1
                    }],
                    anonymous: !1
                }, {
                    type: "event",
                    name: "ETHBridgeInitiated",
                    inputs: [{
                        type: "address",
                        name: "from",
                        internalType: "address",
                        indexed: !0
                    }, {
                        type: "address",
                        name: "to",
                        internalType: "address",
                        indexed: !0
                    }, {
                        type: "uint256",
                        name: "amount",
                        internalType: "uint256",
                        indexed: !1
                    }, {
                        type: "bytes",
                        name: "extraData",
                        internalType: "bytes",
                        indexed: !1
                    }],
                    anonymous: !1
                }, {
                    type: "event",
                    name: "ETHDepositInitiated",
                    inputs: [{
                        type: "address",
                        name: "from",
                        internalType: "address",
                        indexed: !0
                    }, {
                        type: "address",
                        name: "to",
                        internalType: "address",
                        indexed: !0
                    }, {
                        type: "uint256",
                        name: "amount",
                        internalType: "uint256",
                        indexed: !1
                    }, {
                        type: "bytes",
                        name: "extraData",
                        internalType: "bytes",
                        indexed: !1
                    }],
                    anonymous: !1
                }, {
                    type: "event",
                    name: "ETHWithdrawalFinalized",
                    inputs: [{
                        type: "address",
                        name: "from",
                        internalType: "address",
                        indexed: !0
                    }, {
                        type: "address",
                        name: "to",
                        internalType: "address",
                        indexed: !0
                    }, {
                        type: "uint256",
                        name: "amount",
                        internalType: "uint256",
                        indexed: !1
                    }, {
                        type: "bytes",
                        name: "extraData",
                        internalType: "bytes",
                        indexed: !1
                    }],
                    anonymous: !1
                }, {
                    type: "function",
                    stateMutability: "nonpayable",
                    outputs: [],
                    name: "bridgeERC20",
                    inputs: [{
                        type: "address",
                        name: "_localToken",
                        internalType: "address"
                    }, {
                        type: "address",
                        name: "_remoteToken",
                        internalType: "address"
                    }, {
                        type: "uint256",
                        name: "_amount",
                        internalType: "uint256"
                    }, {
                        type: "uint32",
                        name: "_minGasLimit",
                        internalType: "uint32"
                    }, {
                        type: "bytes",
                        name: "_extraData",
                        internalType: "bytes"
                    }]
                }, {
                    type: "function",
                    stateMutability: "nonpayable",
                    outputs: [],
                    name: "bridgeERC20To",
                    inputs: [{
                        type: "address",
                        name: "_localToken",
                        internalType: "address"
                    }, {
                        type: "address",
                        name: "_remoteToken",
                        internalType: "address"
                    }, {
                        type: "address",
                        name: "_to",
                        internalType: "address"
                    }, {
                        type: "uint256",
                        name: "_amount",
                        internalType: "uint256"
                    }, {
                        type: "uint32",
                        name: "_minGasLimit",
                        internalType: "uint32"
                    }, {
                        type: "bytes",
                        name: "_extraData",
                        internalType: "bytes"
                    }]
                }, {
                    type: "function",
                    stateMutability: "payable",
                    outputs: [],
                    name: "bridgeETH",
                    inputs: [{
                        type: "uint32",
                        name: "_minGasLimit",
                        internalType: "uint32"
                    }, {
                        type: "bytes",
                        name: "_extraData",
                        internalType: "bytes"
                    }]
                }, {
                    type: "function",
                    stateMutability: "payable",
                    outputs: [],
                    name: "bridgeETHTo",
                    inputs: [{
                        type: "address",
                        name: "_to",
                        internalType: "address"
                    }, {
                        type: "uint32",
                        name: "_minGasLimit",
                        internalType: "uint32"
                    }, {
                        type: "bytes",
                        name: "_extraData",
                        internalType: "bytes"
                    }]
                }, {
                    type: "function",
                    stateMutability: "nonpayable",
                    outputs: [],
                    name: "depositERC20",
                    inputs: [{
                        type: "address",
                        name: "_l1Token",
                        internalType: "address"
                    }, {
                        type: "address",
                        name: "_l2Token",
                        internalType: "address"
                    }, {
                        type: "uint256",
                        name: "_amount",
                        internalType: "uint256"
                    }, {
                        type: "uint32",
                        name: "_minGasLimit",
                        internalType: "uint32"
                    }, {
                        type: "bytes",
                        name: "_extraData",
                        internalType: "bytes"
                    }]
                }, {
                    type: "function",
                    stateMutability: "nonpayable",
                    outputs: [],
                    name: "depositERC20To",
                    inputs: [{
                        type: "address",
                        name: "_l1Token",
                        internalType: "address"
                    }, {
                        type: "address",
                        name: "_l2Token",
                        internalType: "address"
                    }, {
                        type: "address",
                        name: "_to",
                        internalType: "address"
                    }, {
                        type: "uint256",
                        name: "_amount",
                        internalType: "uint256"
                    }, {
                        type: "uint32",
                        name: "_minGasLimit",
                        internalType: "uint32"
                    }, {
                        type: "bytes",
                        name: "_extraData",
                        internalType: "bytes"
                    }]
                }, {
                    type: "function",
                    stateMutability: "payable",
                    outputs: [],
                    name: "depositETH",
                    inputs: [{
                        type: "uint32",
                        name: "_minGasLimit",
                        internalType: "uint32"
                    }, {
                        type: "bytes",
                        name: "_extraData",
                        internalType: "bytes"
                    }]
                }, {
                    type: "function",
                    stateMutability: "payable",
                    outputs: [],
                    name: "depositETHTo",
                    inputs: [{
                        type: "address",
                        name: "_to",
                        internalType: "address"
                    }, {
                        type: "uint32",
                        name: "_minGasLimit",
                        internalType: "uint32"
                    }, {
                        type: "bytes",
                        name: "_extraData",
                        internalType: "bytes"
                    }]
                }, {
                    type: "function",
                    stateMutability: "view",
                    outputs: [{
                        type: "uint256",
                        name: "",
                        internalType: "uint256"
                    }],
                    name: "deposits",
                    inputs: [{
                        type: "address",
                        name: "",
                        internalType: "address"
                    }, {
                        type: "address",
                        name: "",
                        internalType: "address"
                    }]
                }, {
                    type: "function",
                    stateMutability: "nonpayable",
                    outputs: [],
                    name: "finalizeBridgeERC20",
                    inputs: [{
                        type: "address",
                        name: "_localToken",
                        internalType: "address"
                    }, {
                        type: "address",
                        name: "_remoteToken",
                        internalType: "address"
                    }, {
                        type: "address",
                        name: "_from",
                        internalType: "address"
                    }, {
                        type: "address",
                        name: "_to",
                        internalType: "address"
                    }, {
                        type: "uint256",
                        name: "_amount",
                        internalType: "uint256"
                    }, {
                        type: "bytes",
                        name: "_extraData",
                        internalType: "bytes"
                    }]
                }, {
                    type: "function",
                    stateMutability: "payable",
                    outputs: [],
                    name: "finalizeBridgeETH",
                    inputs: [{
                        type: "address",
                        name: "_from",
                        internalType: "address"
                    }, {
                        type: "address",
                        name: "_to",
                        internalType: "address"
                    }, {
                        type: "uint256",
                        name: "_amount",
                        internalType: "uint256"
                    }, {
                        type: "bytes",
                        name: "_extraData",
                        internalType: "bytes"
                    }]
                }, {
                    type: "function",
                    stateMutability: "nonpayable",
                    outputs: [],
                    name: "finalizeERC20Withdrawal",
                    inputs: [{
                        type: "address",
                        name: "_l1Token",
                        internalType: "address"
                    }, {
                        type: "address",
                        name: "_l2Token",
                        internalType: "address"
                    }, {
                        type: "address",
                        name: "_from",
                        internalType: "address"
                    }, {
                        type: "address",
                        name: "_to",
                        internalType: "address"
                    }, {
                        type: "uint256",
                        name: "_amount",
                        internalType: "uint256"
                    }, {
                        type: "bytes",
                        name: "_extraData",
                        internalType: "bytes"
                    }]
                }, {
                    type: "function",
                    stateMutability: "payable",
                    outputs: [],
                    name: "finalizeETHWithdrawal",
                    inputs: [{
                        type: "address",
                        name: "_from",
                        internalType: "address"
                    }, {
                        type: "address",
                        name: "_to",
                        internalType: "address"
                    }, {
                        type: "uint256",
                        name: "_amount",
                        internalType: "uint256"
                    }, {
                        type: "bytes",
                        name: "_extraData",
                        internalType: "bytes"
                    }]
                }, {
                    type: "function",
                    stateMutability: "view",
                    outputs: [{
                        type: "address",
                        name: "",
                        internalType: "address"
                    }],
                    name: "l2TokenBridge",
                    inputs: []
                }, {
                    type: "function",
                    stateMutability: "view",
                    outputs: [{
                        type: "address",
                        name: "",
                        internalType: "contract CrossDomainMessenger"
                    }],
                    name: "messenger",
                    inputs: []
                }, {
                    type: "function",
                    stateMutability: "view",
                    outputs: [{
                        type: "address",
                        name: "",
                        internalType: "contract StandardBridge"
                    }],
                    name: "otherBridge",
                    inputs: []
                }, {
                    type: "function",
                    stateMutability: "view",
                    outputs: [{
                        type: "string",
                        name: "",
                        internalType: "string"
                    }],
                    name: "version",
                    inputs: []
                }, {
                    type: "receive",
                    stateMutability: "payable"
                }],
                L = n(10528),
                P = n(58105);
            let {
                publicRuntimeConfig: C
            } = l()();
            var k = n(74330);
            let {
                publicRuntimeConfig: S
            } = l()(), F = (0, v.z)(), {
                publicRuntimeConfig: j
            } = l()(), B = parseInt(j.l1ChainID);

            function G() {
                var e, t, n, d;
                let y;
                let [l, o] = (0, i.useState)("0"), [u, T] = (0, i.useState)(void 0), [c, b] = (0, i.useState)(void 0), [f, v] = (0, i.useState)(!1), G = (0, R.c)(), [V, W] = (0, i.useState)(F[0]), H = F.filter(e => j.assets.split(",").includes(e.L1symbol.toLowerCase())), {
                    address: z
                } = (0, m.mA)(), {
                    data: U
                } = (0, m.KQ)({
                    address: z,
                    token: V.L1contract,
                    chainId: parseInt(j.l1ChainID)
                }), {
                    data: X,
                    error: J
                } = function(e) {
                    let {
                        contactAddress: t,
                        address: n
                    } = e;
                    return (0, m.do)({
                        address: t,
                        abi: O.em,
                        functionName: "allowance",
                        watch: !0,
                        chainId: parseInt(N.l1ChainID),
                        args: [n, N.l1BridgeProxyAddress]
                    })
                }({
                    contactAddress: V.L1contract,
                    address: z
                }), Y = (0, i.useMemo)(() => {
                    let e = "" === l || Number.isNaN(Number(l)) ? (0, P.parseUnits)("0", V.decimals) : (0, P.parseUnits)(l, V.decimals);
                    return !J && (null == X ? void 0 : X.gte(e))
                }, [l, V.decimals, J, X]), {
                    isOpen: Z,
                    onOpen: q,
                    onClose: $
                } = (0, D.q)(), K = (0, i.useCallback)(() => {
                    $(), b(void 0)
                }, [$]), Q = function(e) {
                    let {
                        contractAddress: t,
                        approveAmount: n,
                        decimals: a
                    } = e, i = "" === n || Number.isNaN(Number(n)) ? w.parseUnits("0", a) : w.parseUnits(n, a), {
                        config: s
                    } = (0, m.PJ)({
                        address: t,
                        abi: O.em,
                        functionName: "approve",
                        chainId: parseInt(I.l1ChainID),
                        args: [I.l1BridgeProxyAddress, i],
                        cacheTime: 0
                    });
                    return s
                }({
                    contractAddress: V.L1contract,
                    approveAmount: l,
                    decimals: V.decimals
                }), {
                    writeAsync: ee
                } = (0, m.GG)(Q), et = (0, A.E)(), en = "mainnet" === et, ea = (0, g.p)(), ei = function(e) {
                    let {
                        userAddress: t,
                        depositAmount: n,
                        isPermittedToBridge: a,
                        includeTosVersionByte: i
                    } = e, {
                        config: s
                    } = (0, m.PJ)({
                        address: a ? S.l1OptimismPortalProxyAddress : void 0,
                        abi: k.Z,
                        functionName: "depositTransaction",
                        chainId: parseInt(S.l1ChainID),
                        args: [t, (0, P.parseEther)("" === n ? "0" : n), (0, P.parseUnits)("1", 5), !1, i ? S.tosVersion : "0x"],
                        overrides: {
                            value: (0, P.parseEther)("" === n ? "0" : n),
                            gasLimit: L.O$.from(2e5)
                        }
                    });
                    return s
                }({
                    userAddress: z,
                    depositAmount: l,
                    isPermittedToBridge: ea,
                    includeTosVersionByte: en
                }), {
                    writeAsync: es
                } = (0, m.GG)(ei), er = function(e) {
                    let {
                        asset: t,
                        depositAmount: n,
                        isPermittedToBridge: a,
                        includeTosVersionByte: i
                    } = e, {
                        config: s
                    } = (0, m.PJ)({
                        address: a && "" !== n ? C.l1BridgeProxyAddress : void 0,
                        abi: M,
                        functionName: "depositERC20",
                        chainId: parseInt(C.l1ChainID),
                        args: [t.L1contract, t.L2contract, "" !== n ? (0, P.parseUnits)(n, t.decimals) : (0, P.parseUnits)("0", t.decimals), 1e5, i ? C.tosVersion : "0x"],
                        cacheTime: 0,
                        staleTime: 1,
                        overrides: {
                            gasLimit: L.O$.from(3e5)
                        }
                    });
                    return s
                }({
                    asset: V,
                    depositAmount: l,
                    readApprovalResult: Y,
                    isPermittedToBridge: ea,
                    includeTosVersionByte: en
                }), {
                    writeAsync: ep
                } = (0, m.GG)(er), ed = (0, i.useCallback)(() => {
                    (async () => {
                        v(!0), q();
                        try {
                            let e = await (null == ee ? void 0 : ee());
                            if (null == e ? void 0 : e.hash) {
                                let t = e.hash;
                                T(t)
                            }
                            await (null == e ? void 0 : e.wait()), v(!1);
                            let t = await (null == ep ? void 0 : ep());
                            if (null == t ? void 0 : t.hash) {
                                let e = t.hash;
                                b(e), o("0")
                            }
                        } catch (e) {
                            $()
                        }
                    })()
                }, [ee, ep, $, q, v]), ey = (0, i.useCallback)(() => {
                    (async () => {
                        q();
                        try {
                            if (ea) {
                                let e = await (V.L1contract ? null == ep ? void 0 : ep() : null == es ? void 0 : es());
                                if (null == e ? void 0 : e.hash) {
                                    let t = e.hash;
                                    b(t), o("0")
                                }
                            } else $()
                        } catch (e) {
                            $()
                        }
                    })()
                }, [q, ea, V.L1contract, ep, es, $]);
                return y = G ? Y || "ETH" === V.L1symbol ? (0, a.jsx)(h.Y, {
                    onClick: ey,
                    disabled: 0 >= parseFloat(l) || parseFloat(l) >= parseFloat(null !== (e = null == U ? void 0 : U.formatted) && void 0 !== e ? e : "0") || "" === l,
                    toChainId: B,
                    className: "text-md flex w-full items-center justify-center rounded-md p-4 font-sans font-bold uppercase sm:w-auto",
                    children: "Deposit ".concat(V.L1symbol)
                }) : (0, a.jsx)(s.J, {
                    onClick: ed,
                    disabled: !1,
                    className: "text-md flex w-full items-center justify-center rounded-md p-4 font-sans font-bold uppercase sm:w-auto",
                    children: "Approval"
                }) : (0, a.jsx)(p.p, {
                    className: "text-md flex w-full items-center justify-center rounded-md p-4 font-sans font-bold uppercase sm:w-auto"
                }), (0, a.jsxs)("div", {
                    className: "flex-col lg:flex lg:h-full lg:flex-row",
                    children: [(0, a.jsxs)("div", {
                        className: "grow",
                        children: [(0, a.jsx)(x, {
                            isOpen: Z,
                            onClose: K,
                            L1ApproveTxHash: u,
                            L1DepositTxHash: c,
                            isApprovalTx: f
                        }), (0, a.jsx)(r.F, {
                            inputNetwork: en ? "homestead" : "goerli",
                            outputNetwork: en ? "base" : "base-goerli",
                            balance: null !== (n = parseFloat(null !== (t = null == U ? void 0 : U.formatted) && void 0 !== t ? t : "0").toFixed(6)) && void 0 !== n ? n : "",
                            amount: l,
                            setAmount: o,
                            assets: H,
                            isWithdraw: !1,
                            selectedAsset: V,
                            setSelectedAsset: W,
                            children: y
                        }), (0, a.jsxs)("div", {
                            className: "border-t border-sidebar-border",
                            children: [(0, a.jsx)(E.v, {
                                header: "TRANSACTION SUMMARY",
                                selectedAsset: V,
                                balance: null !== (d = parseFloat(null != l ? l : "0").toFixed(6)) && void 0 !== d ? d : "",
                                outputNetwork: en ? "base" : "base-goerli",
                                chainId: j.l1ChainID,
                                isDeposit: !0
                            }), (0, a.jsx)("div", {
                                className: "w-full py-12 px-6 sm:hidden",
                                children: y
                            })]
                        })]
                    }), (0, a.jsx)(_.n, {})]
                })
            }
            var V = n(54743),
                W = n(9008),
                H = n.n(W),
                z = (0, i.memo)(function() {
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(H(), {
                            children: (0, a.jsx)("title", {
                                children: "Base"
                            })
                        }), (0, a.jsx)(V.D, {
                            children: (0, a.jsx)(G, {})
                        })]
                    })
                })
        },
        74330: function(e, t) {
            "use strict";
            t.Z = [{
                inputs: [{
                    internalType: "contract L2OutputOracle",
                    name: "_l2Oracle",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_finalizationPeriodSeconds",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint8",
                    name: "version",
                    type: "uint8"
                }],
                name: "Initialized",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "from",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "uint256",
                    name: "version",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "bytes",
                    name: "opaqueData",
                    type: "bytes"
                }],
                name: "TransactionDeposited",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "bytes32",
                    name: "withdrawalHash",
                    type: "bytes32"
                }, {
                    indexed: !1,
                    internalType: "bool",
                    name: "success",
                    type: "bool"
                }],
                name: "WithdrawalFinalized",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "bytes32",
                    name: "withdrawalHash",
                    type: "bytes32"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "from",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }],
                name: "WithdrawalProven",
                type: "event"
            }, {
                inputs: [],
                name: "BASE_FEE_MAX_CHANGE_DENOMINATOR",
                outputs: [{
                    internalType: "int256",
                    name: "",
                    type: "int256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "ELASTICITY_MULTIPLIER",
                outputs: [{
                    internalType: "int256",
                    name: "",
                    type: "int256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "FINALIZATION_PERIOD_SECONDS",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "INITIAL_BASE_FEE",
                outputs: [{
                    internalType: "uint128",
                    name: "",
                    type: "uint128"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "L2_ORACLE",
                outputs: [{
                    internalType: "contract L2OutputOracle",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "MAXIMUM_BASE_FEE",
                outputs: [{
                    internalType: "int256",
                    name: "",
                    type: "int256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "MAX_RESOURCE_LIMIT",
                outputs: [{
                    internalType: "int256",
                    name: "",
                    type: "int256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "MINIMUM_BASE_FEE",
                outputs: [{
                    internalType: "int256",
                    name: "",
                    type: "int256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "TARGET_RESOURCE_LIMIT",
                outputs: [{
                    internalType: "int256",
                    name: "",
                    type: "int256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_value",
                    type: "uint256"
                }, {
                    internalType: "uint64",
                    name: "_gasLimit",
                    type: "uint64"
                }, {
                    internalType: "bool",
                    name: "_isCreation",
                    type: "bool"
                }, {
                    internalType: "bytes",
                    name: "_data",
                    type: "bytes"
                }],
                name: "depositTransaction",
                outputs: [],
                stateMutability: "payable",
                type: "function"
            }, {
                inputs: [],
                name: "donateETH",
                outputs: [],
                stateMutability: "payable",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "target",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "gasLimit",
                        type: "uint256"
                    }, {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes"
                    }],
                    internalType: "struct Types.WithdrawalTransaction",
                    name: "_tx",
                    type: "tuple"
                }],
                name: "finalizeWithdrawalTransaction",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                name: "finalizedWithdrawals",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "initialize",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_l2OutputIndex",
                    type: "uint256"
                }],
                name: "isOutputFinalized",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "l2Sender",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "params",
                outputs: [{
                    internalType: "uint128",
                    name: "prevBaseFee",
                    type: "uint128"
                }, {
                    internalType: "uint64",
                    name: "prevBoughtGas",
                    type: "uint64"
                }, {
                    internalType: "uint64",
                    name: "prevBlockNum",
                    type: "uint64"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "target",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "gasLimit",
                        type: "uint256"
                    }, {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes"
                    }],
                    internalType: "struct Types.WithdrawalTransaction",
                    name: "_tx",
                    type: "tuple"
                }, {
                    internalType: "uint256",
                    name: "_l2OutputIndex",
                    type: "uint256"
                }, {
                    components: [{
                        internalType: "bytes32",
                        name: "version",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "stateRoot",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "messagePasserStorageRoot",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "latestBlockhash",
                        type: "bytes32"
                    }],
                    internalType: "struct Types.OutputRootProof",
                    name: "_outputRootProof",
                    type: "tuple"
                }, {
                    internalType: "bytes[]",
                    name: "_withdrawalProof",
                    type: "bytes[]"
                }],
                name: "proveWithdrawalTransaction",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                name: "provenWithdrawals",
                outputs: [{
                    internalType: "bytes32",
                    name: "outputRoot",
                    type: "bytes32"
                }, {
                    internalType: "uint128",
                    name: "timestamp",
                    type: "uint128"
                }, {
                    internalType: "uint128",
                    name: "l2OutputIndex",
                    type: "uint128"
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
            }]
        },
        9008: function(e, t, n) {
            e.exports = n(83121)
        },
        4836: function(e, t, n) {
            let a = n(2784),
                i = a.forwardRef(function({
                    title: e,
                    titleId: t,
                    ...n
                }, i) {
                    return a.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        ref: i,
                        "aria-labelledby": t
                    }, n), e ? a.createElement("title", {
                        id: t
                    }, e) : null, a.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                    }))
                });
            e.exports = i
        },
        97381: function(e, t, n) {
            let a = n(2784),
                i = a.forwardRef(function({
                    title: e,
                    titleId: t,
                    ...n
                }, i) {
                    return a.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        ref: i,
                        "aria-labelledby": t
                    }, n), e ? a.createElement("title", {
                        id: t
                    }, e) : null, a.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M4.5 15.75l7.5-7.5 7.5 7.5"
                    }))
                });
            e.exports = i
        }
    },
    function(e) {
        e.O(0, [9182, 9774, 2888, 179], function() {
            return e(e.s = 96201)
        }), _N_E = e.O()
    }
]);
//# sourceMappingURL=deposit-2e60614bc8d23cdf.js.map