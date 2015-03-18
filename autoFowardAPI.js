/*
更具配置自动生成接口的router和controller文件
 */

var fs = require("fs");
var path = require("path");
var config = require("./config");
var apis = config.caregg.apiPath;
var methods = ["get","post","put","delete","bulkDelete"]; // bulkDelete批量删除
var routerStr = ""; //router的字符串
var ctrlStr = ""; //controller的字符串


    /*
        获取缩进的字符串，默认为一个tab
     */
    function getIndent( indentCount ){

        indentCount = indentCount || 1;
        var indentStr = "";

        //String.fromCharCode(9) 返回一个制表符\t
        for(var i = 0; i < indentCount; i++){
            indentStr = indentStr + String.fromCharCode(9);
        }

        return indentStr

    }

    //根据http方法获取路由字符串
    function getRouterStr( method, api ){

        if( method == "put" ){
            //修改时要指明id
            routerStr = routerStr + getIndent() + "app."+ method +"( rootPath + api['"+ api +"'].path + '/:id' , function(req, res, next) {"  +"\n\n";
        }else if( method == "delete" ){
            //单个删除
            routerStr = routerStr + getIndent() + "app."+ method +"( rootPath + api['"+ api +"'].path + '/:id' , function(req, res, next) {"  +"\n\n";
        }else if( method == "bulkDelete" ){
            //批量删除
            routerStr = routerStr + getIndent() + "app.delete( rootPath + api['"+ api +"'].path , function(req, res, next) {"  +"\n\n";
        }else{
            routerStr = routerStr + getIndent() + "app."+ method +"( rootPath + api['"+ api +"'].path , function(req, res, next) {"  +"\n\n";
        }

        //post 和 put 需要传入提交的json数据
        if( method == "post" || method == "put" ){
            routerStr = routerStr + getIndent(2) + "autoForwardCtrl."+ method + api +"(req.url, req.headers , req.body, function( err, results){" +"\n\n";
        }else{
            routerStr = routerStr + getIndent(2) + "autoForwardCtrl."+ method + api +"(req.url, req.headers , function( err, results){" +"\n\n";
        }

        routerStr = routerStr + getIndent(3) + "if(err){" +"\n";
        routerStr = routerStr + getIndent(4) + "console.log(err);" +"\n";
        routerStr = routerStr + getIndent(4) + "next(err);" +"\n";
        routerStr = routerStr + getIndent(3) + "}else{" +"\n";
        routerStr = routerStr + getIndent(4) + "res.json(results);" +"\n";
        routerStr = routerStr + getIndent(3) + "}" +"\n\n";
        routerStr = routerStr + getIndent(2) + "});" +"\n\n";
        routerStr = routerStr + getIndent() + "});" +"\n\n";

    }

    //根据http方法获取controller字符串
    function getCtrlStr( method, api ){

        //新增和修改时 需要传入json数据
        if( method == "post" || method == "put" ){
            ctrlStr = ctrlStr + "exports." + method + api + " = function( url, headers, params, cb){" + "\n\n";
        }else{
            ctrlStr = ctrlStr + "exports." + method + api + "  = function( url, headers, cb){" + "\n\n";
        }

        ctrlStr = ctrlStr + getIndent() + "var userData = require('../JSON/user-data');" + "\n\n";
        ctrlStr = ctrlStr + getIndent() + "if( api['" + api + "'].achieved ){" + "\n";

        //删除时封装的方法是delData 不是deleteData
        if( method == "delete" || method == "bulkDelete" ){
            ctrlStr = ctrlStr + getIndent(2) + "request.delData({" + "\n";
        }else{
            ctrlStr = ctrlStr + getIndent(2) + "request."+ method +"Data({" + "\n";
        }

        ctrlStr = ctrlStr + getIndent(3) + "url: apiAddr + url," + "\n";

        //新增和修改时 需要传入json数据
        if( method == "post" || method == "put" ){
            ctrlStr = ctrlStr + getIndent(3) + "params: params," + "\n";
        }

        ctrlStr = ctrlStr + getIndent(3) + "headers: headers" + "\n";
        ctrlStr = ctrlStr + getIndent(2) + "}, cb);" + "\n";
        ctrlStr = ctrlStr + getIndent() + "}else{" + "\n\n";
        ctrlStr = ctrlStr + getIndent() + "}" + "\n\n";
        ctrlStr = ctrlStr + "}" + "\n\n";

    }

    //router 头部代码
    routerStr = "module.exports = function(app){" + "\n\n";
    routerStr = routerStr + getIndent() + "var config = require('../config');" +"\n";
    routerStr = routerStr + getIndent() + "var rootPath = config.caregg.rootPath;" +"\n";
    routerStr = routerStr + getIndent() + "var api = config.caregg.apiPath;" +"\n";
    routerStr = routerStr + getIndent() + "var autoForwardCtrl = require('../controllers/autoForward');" +"\n\n";

    //controller 头部代码
    ctrlStr = "var request = require('../utils/request');" + "\n";
    ctrlStr = ctrlStr + "var config = require('../config');" + "\n";
    ctrlStr = ctrlStr + "var apiAddr = config.apiAddr;" + "\n";
    ctrlStr = ctrlStr + "var api = config.caregg.apiPath;" + "\n\n";


    //遍历所有配置的api接口
    for( var api in apis ){

        //当接口不为手动转发则自动转发
        if( apis[api].autoForward == undefined || apis[api].autoForward ){
            if( apis[api].method ){
                getRouterStr( apis[api].method, api );
                getCtrlStr( apis[api].method, api );
            }else{
                for( var method in methods ){
                    getRouterStr( methods[method] , api );
                    getCtrlStr( methods[method], api );
                }
            }
        }

    }

    routerStr = routerStr + "};";

    //输出router文件
    fs.writeFile('./routes/autoForward.js', routerStr, function(err) {

        if(err) {
            console.log(err);
        } else {
            console.log("自动转发路由文件生成成功！");
        }

    });

    //输出controller文件
    fs.writeFile('./controllers/autoForward.js', ctrlStr, function(err) {

        if(err) {
            console.log(err);
        } else {
            console.log("自动转发controller文件生成成功！");
        }

    });