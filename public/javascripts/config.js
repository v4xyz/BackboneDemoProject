seajs.config({

    base: "/public/javascripts/sea-modules",
    alias: {
        //caregg模块
        "CarEgg": (location.host.indexOf("localhost") > -1 ? "/public/javascripts/caregg/src/common/CarEgg.js" : "caregg/o2o/0.1.0/common/CarEgg.js"),//车蛋js的基类,公共对象、方法、系统级常量都放在这里
        "home": (location.host.indexOf("localhost") > -1 ? "/public/javascripts/caregg/src/home/index.js" : "caregg/o2o/0.1.0/home/index.js"),
        "demo": (location.host.indexOf("localhost") > -1 ? "/public/javascripts/caregg/src/demo/index.js" : "caregg/o2o/0.1.0/demo/index.js"),

        //arale模块
        "poptip-css": "alice-poptip/1.3.0/poptip.css",
        "select-css": "alice-select/1.1.0/select-debug.css",
        "base": "arale-base/1.2.0/base",
        "class": "arale-class/1.2.0/class",
        "events": "arale-event/1.2.0/events",
        "widget": "arale-widget/1.2.0/widget",
        "dnd": "arale-dnd/1.1.0/index",
        "qrcode": "arale-qrcode/1.1.0/index",
        "cookie": "arale-cookie/1.1.0/index",
        "sticky": "arale-cookie/1.4.0/index",
        "upload": "arale-cookie/1.2.0/index",
        "messenger": "arale-/2.1.0/index",
        "templatable": "arale-templatable/0.10.0/templatable",
        "iframe-shim": "arale-iframe-shim/1.1.0/index",
        "easing": "arale-easing/1.1.0/index",
        "validator": "arale-validator/0.10.1/index",
        "autocomplete": "arale-autocomplete/1.4.1/autocomplete",
        "popup": "arale-popup/1.2.0/popup",
        "select": "arale-select/0.10.0/index",
        "dialog": "arale-dialog/1.5.0/dialog",
        "overlay": "arale-overlay/1.2.0/overlay",
        "tip": "arale-tip/1.3.0/tip",
        "switchable": "arale-switchable/1.1.1/switchable",
        "calendar": "arale-calendar/1.1.2/index",
        "text": "seajs-text/1.1.0/dist/seajs-text",

        //业界精选模块
        "Backbone": "backbone/1.1.2/backbone",
        "jquery": "jquery/1.10.1/jquery",
        "$": "jquery/1.10.1/jquery",
        "underscore": "underscore/1.6.0/underscore",
        "_": "underscore/1.6.0/underscore",
        "moment": "moment/2.9.0/moment",
        "handlebars": "handlebars/1.3.0/handlebars",
        "placeholders": "placeholders.js/3.0.2/build/placeholders",
        "spin": "spin.js/2.0.1/spin"

    },
    preload: [/localhost/gim.test(location.host) ? "text" : ""]

});