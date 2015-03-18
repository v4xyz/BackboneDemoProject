var request = require('request');
var config = require("../config");
var rootPath = config.apiAddr + config.caregg.rootPath;
var api = config.caregg.apiPath;

exports.userLogin = function( req, cb){

    //接口完成时直接掉java接口，否则在本地模拟实现
    if( api["userLogin"].achieved ){

        request.post({
            url:  rootPath + api["userLogin"].path,
            json: req.body,
            timeout: 10000
        }, function (err, res, body) {
            //console.log(rootPath + "/login" + "  res.statusCode = "+res.statusCode);
            if (err) {
                console.log("login error happend");
                cb(err);
            }else if(res.statusCode == 200){
                cb(null, body);
            }
        });

    }else{
        var userJson = require("../JSON/user-data.json");
        console.log(userJson);
        if( userJson[req.body.oprUserLoginName] && userJson[req.body.oprUserLoginName].password == req.body.oprUserPassword ){
            cb(null,{
                state: 1,
                message: "模拟登陆成功",
                data: {
                    "oprUserSeq": 1,
                    "token": userJson[req.body.oprUserLoginName].token,
                    "oprUserLoginName": req.body.oprUserLoginName,
                    "oprUserName": req.body.oprUserLoginName
                }
            });
        }else{
            cb(null,{
                state: 0,
                message: "模拟登陆失败",
                data: {}
            });
        }
    }


}














