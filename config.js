module.exports = {
    baseUrl: "node_modules/materialize-css/js",
    paths: {
        "jquery": "../../jquery/dist/jquery",
        "picker": "date_picker/picker",
        "picker.date": "date_picker/picker.date",
        "hammerjs": "hammer.min",
        "jquery.easing": "jquery.easing.1.4",
        "velocity": "velocity.min"
    },
    shim: {
        "jquery": { exports: "$" },
        "animation": { deps: ["jquery"] },
        "buttons": { deps: ["jquery"] },
        "cards": { deps: ["jquery"] },
        "carousel": { deps: ["jquery"] },
        "character_counter": { deps: ["jquery"] },
        "chips": { deps: ["jquery"] },
        "collapsible": { deps: ["jquery"] },
        "dropdown": { deps: ["jquery"] },
        "forms": { deps: ["jquery", "global"] },
        "global": { deps: ["jquery"], exports: "Materialize" },
        "hammerjs": {},
        "initial": { deps: ["jquery"] },
        "jquery.easing": { deps: ["jquery"] },
        "jquery.hammer": { deps: ["jquery", "hammerjs", "waves"] },
        "materialbox": { deps: ["jquery"] },
        "modal": { deps: ["jquery"] },
        "parallax": { deps: ["jquery"] },
        "pushpin": { deps: ["jquery"] },
        "scrollFire": { deps: ["jquery", "global"] },
        "scrollspy": { deps: ["jquery"] },
        "sideNav": { deps: ["jquery"] },
        "slider": { deps: ["jquery"] },
        "tabs": { deps: ["jquery"] },
        "tapTarget": { deps: ["jquery"] },
        "toasts": {
            deps: ["global", "hammerjs", "velocity"], init: function (Materialize, Hammer, Vel) {
                window.Hammer = Hammer;
                window.Vel = Vel;
            }
        },
        "tooltip": { deps: ["jquery"] },
        "transitions": { deps: ["jquery", "scrollFire"] },
        "waves": { exports: "Waves" }
    },
    exclude: [
        "jquery"
    ],
    include: [
        "global",
        "initial",
        "animation",
        "buttons",
        "cards",
        "carousel",
        "character_counter",
        "chips",
        "collapsible",
        "dropdown",
        "forms",
        "hammerjs",
        "jquery.easing",
        "jquery.hammer",
        "materialbox",
        "modal",
        "parallax",
        "picker",
        "picker.date",
        "pushpin",
        "scrollFire",
        "scrollspy",
        "sideNav",
        "slider",
        "tabs",
        "tapTarget",
        "toasts",
        "tooltip",
        "transitions",
        "velocity",
        "waves"
    ],
    wrap: {
        endFile: "main.js"
    }
};
