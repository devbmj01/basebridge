self.__BUILD_MANIFEST = function(s, a) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": ["static/chunks/7313-f8181d4fb6e43cdf.js", "static/chunks/pages/index-f09ef9091b7a8257.js"],
        "/404": ["static/chunks/pages/404-b69874fcba70f34d.js"],
        "/500": ["static/chunks/pages/500-e7e535701e2e4b17.js"],
        "/503": ["static/chunks/pages/503-ac1332abb6a89354.js"],
        "/_error": ["static/chunks/pages/_error-173a35eca8c80b7b.js"],
        "/deposit": [s, "static/chunks/pages/deposit-2e60614bc8d23cdf.js"],
        "/transactions": ["static/chunks/a29ae703-4d1af5aff0fe20b3.js", "static/chunks/3257-8fe7bac257452639.js", a, "static/chunks/3457-8e28d2ad0b66ea3a.js", "static/chunks/pages/transactions-0d9017ad0be765de.js"],
        "/withdraw": [a, s, "static/chunks/pages/withdraw-12c00caf1528b023.js"],
        sortedPages: ["/", "/404", "/500", "/503", "/_app", "/_error", "/deposit", "/transactions", "/withdraw"]
    }
}("static/chunks/9182-a748534639371d3c.js", "static/chunks/1096-ed5eea1480c25318.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();