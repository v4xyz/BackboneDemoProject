exports.load = function (app) {

    var fs = require("fs");
    var path = require("path");
    var routeFiles = fs.readdirSync(__dirname);
    routeFiles.forEach(function (file, index, arr) {

        try {
            var mod = require("./" + file);
            if ('function' === typeof mod) {
                mod(app);
            }
        } catch (e) {
            console.error(e);
        }

    })
}