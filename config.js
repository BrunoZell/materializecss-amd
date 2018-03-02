module.exports = {
    baseUrl: "node_modules/materialize-css/js",
    paths: {
        "anime": "anime.min"
    },
    shim: {
        "anime": ["global"],
        "autocomplete": ["cash"],
        "buttons": ["cash", "anime"],
        "cards": ["cash", "anime"],
        "carousel": ["cash"],
        "characterCounter": ["cash"],
        "chips": ["cash"],
        "collapsible": ["cash", "anime"],
        "datepicker": ["cash"],
        "dropdown": ["cash", "anime"],
        "forms": ["cash"],
        "global": {
            deps: ["component"],
            exports: "M"
        },
        "materialbox": ["cash", "anime"],
        "modal": ["cash", "anime"],
        "parallax": ["cash"],
        "pushpin": ["cash"],
        "range": ["cash", "anime"],
        "scrollspy": ["cash", "anime"],
        "select": ["cash"],
        "sidenav": ["cash", "anime"],
        "slider": ["cash", "anime"],
        "tabs": ["cash", "anime"],
        "tapTarget": ["cash"],
        "timepicker": ["cash"],
        "toasts": ["cash", "anime"],
        "tooltip": ["cash", "anime"],
        "waves": {
            exports: "Waves"
        }
    },
    include: [
        "anime",
        "autocomplete",
        "buttons",
        "cards",
        "carousel",
        "cash",
        "characterCounter",
        "chips",
        "collapsible",
        "component",
        "datepicker",
        "dropdown",
        "forms",
        "global",
        "materialbox",
        "modal",
        "parallax",
        "pushpin",
        "range",
        "scrollspy",
        "select",
        "sidenav",
        "slider",
        "tabs",
        "tapTarget",
        "timepicker",
        "toasts",
        "tooltip",
        "waves"
    ],
    wrap: {
        endFile: "main.js"
    }
};
