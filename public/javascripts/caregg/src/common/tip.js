define(function(require, exports, module){
    var $=require("$");
    var overlay = require("overlay");
    var mask = overlay.Mask;

    var defaults = { title: '', content: '', timeout: 1000, width: 350 };
    /**
     * 弹窗提示事件
     */
    var tip;
    exports.config = defaults;
    exports.open = function(content, timeout){
        var options = $.extend({}, defaults);
        if (content != undefined) options.content = content;
        if (timeout != undefined) options.timeout = timeout;

        var html_title = "";
        var html_content = "";
        if(options.title && options != ''){
            html_title = "<div class='myOverlay-title'>" + options.title + "</div>";
        }
        if(options.content && options != ''){
            html_content = "<div class='myOverlay-content'>" + options.content + "</div>";
        }

        tip = new overlay({
            template: "<div class='myOverlay'>" + html_title + html_content + "</div>",
            id: "myOverlay",
            width: options.width,
            height: options.height,
            zIndex:9999,
            style: {
                backgroundColor: "#fff",
                position: "fixed"
            },
            align: {
                selfXY: ["center", "center"],//template或element的定位点
                baseXY: ["center", "35%"]//left and top
            }
        });
        mask.set().show();
        tip.show();
        if(options.timeout && parseInt(options.timeout) != 0){
            setTimeout(function(){
                tip.hide();
                mask.hide();
                $("#myOverlay").remove();
            },options.timeout);
        }
    };
    exports.close = function(){
        if(tip){
            tip.hide();
            $("#myOverlay").remove();
        }
        if(mask){
            mask.hide();
        }
    };
});