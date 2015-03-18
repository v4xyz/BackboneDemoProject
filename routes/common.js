module.exports = function (app) {
    var tableData = require("../JSON/table-data.json");

    app.get("/demo123", function (req, res, next) {
        res.render('demo/index');
    });

    app.get("/demo-old", function (req, res, next) {
        res.render('demo/index2');
    });

    app.get("/data-table/data", function (req, res, next) {
        res.json(tableData);
    });


}