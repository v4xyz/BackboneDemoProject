/**
 * Created by HAIZHANG on 2015/1/31.
 */
define(function(require, exports, module) {

    var $ = require('$');
    var _ = require('_');
    var Overlay = require("overlay");
    var Backbone = require('Backbone');
    var Cookie = require("cookie");
    var Dialog = require("dialog");
    var tip = require("./tip");
    var constant = require("../constant"); //系统级常量存放位置

    var CarEgg = {};

    CarEgg.constant = constant;

    CarEgg.utils = {};
    /*
    提示框
     */
    CarEgg.utils.tip = tip;
    /*
    * 将queryString转化为JSON
     */
    CarEgg.utils.toJSON = function( queryStr ){
        var jsonObj = {};

        if( queryStr ){
            var paramsArr = queryStr.split("&");
            _.each( paramsArr, function( param ){
                var temp = param.split("=");
                if( jsonObj[temp[0]] ){
                    if( !Array.isArray(jsonObj[temp[0]]) ){
                        jsonObj[temp[0]] = new Array(jsonObj[temp[0]],temp[1]);
                    }else{
                        jsonObj[temp[0]].push(temp[1]);
                    }
                }else{
                    jsonObj[temp[0]] = temp[1];
                }
            });
        }

        return jsonObj;
    }

    CarEgg.Model = Backbone.Model.extend({
        parse: function(resp){

            var apiState = resp.state ? resp.state : Cookie.get("etoken") === undefined ? 2: 1 ;

            switch(apiState){
                case -1:
                    console.log("接口返回异常");
                    break;
                case 0:
                    console.log("接口错误: " + resp.message );
                    break;
                case 1:
                    return resp.data ? resp.data: resp;
                    break;
                case 2:
                    window.location.href = "/login.html";
                default :
                    console.log("接口返回异常");
            }

        }
    });

    CarEgg.Collection = Backbone.Collection.extend({
        paging: {},
        parse: function(resp){

            var apiState = resp.state ? resp.state : Cookie.get("etoken") === undefined ? 2: 1 ;

            switch(apiState){
                case -1:
                    console.log("接口返回异常");
                    break;
                case 0:
                    console.log("接口错误: " + resp.message );
                    break;
                case 1:
                    this.paging = { pageIndex: resp.data.pageId || 0, pageSize: resp.data.pageSize || 0, total: resp.data.rowCount || 0 };
                    return resp.data ? resp.data.dataList ? resp.data.dataList : resp.data  : resp;
                    break;
                case 2:
                    window.location.href = "/login.html";
                default :
                    console.log("接口返回异常");
            }

        },
        delete: function( ids, softDelete, cb ){

            var that = this;
            //软删除 硬删除参数
            softDelete = softDelete || false;


            if( ids && ids != "" ){
                $.ajax({
                    type: "DELETE",
                    url: that.url + "?id=" + ids,
                    cache: false,
                    success: function (result) {
                        cb( result );
                    },
                    error: function (err) {
                        console.log(err);
                        cb( {state: 0, message: err, data: null} );
                    }
                });
            }

        }
    });

    CarEgg.View = Backbone.View.extend({
        popMode: false,
        formData: {},
        show: function(){

            if( this.popMode ){
                var that = this;
                this.overlay = this.overlay|| new Overlay({
                    element: that.$el,
                    zIndex:9999,
                    style: {
                        backgroundColor: "#fff",
                        position: "fixed"
                    },
                    align: {
                        selfXY: ["center", "center"],//template或element的定位点
                        baseXY: ["center", "center"]//left and top
                    }
                });
                this.mask =  this.mask || Overlay.Mask;
                this.mask.set().show();
                if( this.$el.parent()[0].tagName != "BODY" ){
                    $("body").append(this.$el);
                }
                this.overlay.show();
            }

        },
        hide: function(){

            if( this.popMode ){
                this.overlay.hide();
                this.mask.hide();
                if( this.$el.find("form").length > 0 ){
                    this.$el.find("form")[0].reset();
                }
                $("#main-child-tab").append(this.$el);
            }

        }
    });

    module.exports = CarEgg;

});