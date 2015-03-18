var loginCtrl = require('../controllers/login');
var crypto = require("crypto");
var config = require("../config");
var rootPath = config.caregg.rootPath;
var api = config.caregg.apiPath;

function md5(string) {
    return crypto.createHash("md5").update(string).digest("hex")
}


module.exports = function (app) {

    app.post( rootPath + api["userLogin"].path , function(req, res, next){

        loginCtrl.userLogin(req, function(err, results){
            if(err){
                console.log(err);
                next(err);
                res.json({ state:0,message: err.message });
            }else{
                console.log(results);
                res.json(results);
            }
        });

    });

}