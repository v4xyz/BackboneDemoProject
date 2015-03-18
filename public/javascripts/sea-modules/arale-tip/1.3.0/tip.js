define("arale-tip/1.3.0/tip",["jquery/1.7.2/jquery","arale-popup/1.2.0/popup","arale-overlay/1.2.0/overlay","position/1.1.0/index","arale-iframe-shim/1.1.0/index","arale-widget/1.2.0/widget","arale-base/1.2.0/base","arale-class/1.2.0/class","arale-events/1.2.0/events","import-style/1.0.0/index"],function(o,p,i){i.exports=o("arale-tip/1.3.0/src/tip")}),define("arale-tip/1.3.0/src/tip",["jquery/1.7.2/jquery","arale-popup/1.2.0/popup","arale-overlay/1.2.0/overlay","position/1.1.0/index","arale-iframe-shim/1.1.0/index","arale-widget/1.2.0/widget","arale-base/1.2.0/base","arale-class/1.2.0/class","arale-events/1.2.0/events","import-style/1.0.0/index"],function(o,p,i){var r=o("jquery/1.7.2/jquery"),t=o("arale-tip/1.3.0/src/basic-tip");o("arale-tip/1.3.0/src/tip.css.js");var e=t.extend({attrs:{template:o("arale-tip/1.3.0/src/tip.tpl"),content:"A TIP BOX",arrowPosition:7,align:{setter:function(o){return o&&!o.comeFromArrowPosition&&(this._specifiedAlign=!0),o}},theme:"yellow",inViewport:!1},setup:function(){t.superclass.setup.call(this),this._originArrowPosition=this.get("arrowPosition"),this.after("show",function(){this._makesureInViewport()})},_makesureInViewport:function(){if(this.get("inViewport")){var o=this._originArrowPosition,p=r(window).scrollTop(),i=r(window).outerHeight(),t=this.element.height()+this.get("distance"),e=this.get("trigger").offset().top,a=this.get("trigger").height(),n={1:5,5:1,7:11,11:7};(11==o||1==o)&&e+a>p+i-t?this.set("arrowPosition",n[o]):(7==o||5==o)&&p+t>e?this.set("arrowPosition",n[o]):this.set("arrowPosition",this._originArrowPosition)}},_onRenderArrowPosition:function(o,p){o=parseInt(o,10);var i=this.$(".ui-poptip-arrow");if(i.removeClass("ui-poptip-arrow-"+p).addClass("ui-poptip-arrow-"+o),!this._specifiedAlign){var r="",t=0;10===o?(r="right",t=20):11===o?(r="down",t=22):1===o?(r="down",t=-22):2===o?(r="left",t=20):5===o?(r="up",t=-22):7===o&&(r="up",t=22),this.set("direction",r),this.set("arrowShift",t),this._setAlign()}},_onRenderWidth:function(o){this.$('[data-role="content"]').css("width",o)},_onRenderHeight:function(o){this.$('[data-role="content"]').css("height",o)},_onRenderTheme:function(o,p){this.element.removeClass("ui-poptip-"+p),this.element.addClass("ui-poptip-"+o)}});i.exports=e}),define("arale-tip/1.3.0/src/basic-tip",["arale-popup/1.2.0/popup","jquery/1.7.2/jquery","arale-overlay/1.2.0/overlay","position/1.1.0/index","arale-iframe-shim/1.1.0/index","arale-widget/1.2.0/widget","arale-base/1.2.0/base","arale-class/1.2.0/class","arale-events/1.2.0/events"],function(o,p,i){var r=o("arale-popup/1.2.0/popup");i.exports=r.extend({attrs:{content:null,direction:"up",distance:8,arrowShift:22,pointPos:"50%"},_setAlign:function(){var o={},p=this.get("arrowShift"),i=this.get("distance"),r=this.get("pointPos"),t=this.get("direction");0>p&&(p="100%"+p),"up"===t?(o.baseXY=[r,0],o.selfXY=[p,"100%+"+i]):"down"===t?(o.baseXY=[r,"100%+"+i],o.selfXY=[p,0]):"left"===t?(o.baseXY=[0,r],o.selfXY=["100%+"+i,p]):"right"===t&&(o.baseXY=["100%+"+i,r],o.selfXY=[0,p]),o.comeFromArrowPosition=!0,this.set("align",o)},_onRenderContent:function(o){var p=this.$('[data-role="content"]');"string"!=typeof o&&(o=o.call(this)),p&&p.html(o)}})}),define("arale-tip/1.3.0/src/tip.css.js",["import-style/1.0.0/index"],function(o){o("import-style/1.0.0/index")('.ui-poptip{color:#DB7C22;z-index:101;font-size:12px;line-height:1.5;zoom:1;}.ui-poptip-shadow{background-color:rgba(229, 169, 107, 0.15);FILTER:progid:DXImageTransform.Microsoft.Gradient(startColorstr=#26e5a96b, endColorstr=#26e5a96b);border-radius:2px;padding:2px;zoom:1;_display:inline;}.ui-poptip-container{position:relative;background-color:#FFFCEF;border:1px solid #ffbb76;border-radius:2px;padding:5px 15px;zoom:1;_display:inline;}.ui-poptip:after,.ui-poptip-shadow:after,.ui-poptip-container:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0;}a.ui-poptip-close{position:absolute;right:3px;top:3px;border:1px solid #ffc891;text-decoration:none;border-radius:3px;width:12px;height:12px;font-family:tahoma;color:#dd7e00;line-height:10px;*line-height:12px;text-align:center;font-size:14px;background:#ffd7af;background:-webkit-gradient(linear, left top, left bottom, from(#FFF0E1), to(#FFE7CD));background:-moz-linear-gradient(top, #FFF0E1, #FFE7CD);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFF0E1", endColorstr="#FFE7CD");background:-o-linear-gradient(top, #FFF0E1, #FFE7CD);background:linear-gradient(top, #FFF0E1, #FFE7CD);overflow:hidden;}a.ui-poptip-close:hover{border:1px solid #ffb24c;text-decoration:none;color:#dd7e00;background:#ffd7af;background:-webkit-gradient(linear, left top, left bottom, from(#FFE5CA), to(#FFCC98));background:-moz-linear-gradient(top, #FFE5CA, #FFCC98);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFE5CA", endColorstr="#FFCC98");background:-o-linear-gradient(top, #FFE5CA, #FFCC98);background:linear-gradient(top, #FFE5CA, #FFCC98);}.ui-poptip-arrow{position:absolute;z-index:10;*zoom:1;}.ui-poptip-arrow em,.ui-poptip-arrow span{position:absolute;*zoom:1;width:0;height:0;border-color:rgba(255, 255, 255, 0);border-color:transparent\\0;*border-color:transparent;_border-color:tomato;_filter:chroma(color=tomato);border-style:solid;overflow:hidden;top:0;left:0;}.ui-poptip-arrow-10{left:-6px;top:10px;}.ui-poptip-arrow-10 em{top:0;left:-1px;border-right-color:#ffbb76;border-width:6px 6px 6px 0;}.ui-poptip-arrow-10 span{border-right-color:#FFFCEF;border-width:6px 6px 6px 0;}.ui-poptip-arrow-9{left:-6px;top:50%;}.ui-poptip-arrow-9 em{top:-6px;left:-1px;border-right-color:#ffbb76;border-width:6px 6px 6px 0;}.ui-poptip-arrow-9 span{top:-6px;border-right-color:#FFFCEF;border-width:6px 6px 6px 0;}.ui-poptip-arrow-2{top:10px;right:0;}.ui-poptip-arrow-2 em{top:0;left:1px;border-left-color:#ffbb76;border-width:6px 0 6px 6px;}.ui-poptip-arrow-2 span{border-left-color:#FFFCEF;border-width:6px 0 6px 6px;}.ui-poptip-arrow-3{top:50%;right:0;}.ui-poptip-arrow-3 em{top:-6px;left:1px;border-left-color:#ffbb76;border-width:6px 0 6px 6px;}.ui-poptip-arrow-3 span{top:-6px;border-left-color:#FFFCEF;border-width:6px 0 6px 6px;}.ui-poptip-arrow-11 em,.ui-poptip-arrow-12 em,.ui-poptip-arrow-1 em{border-width:0 6px 6px;border-bottom-color:#ffbb76;top:-1px;left:0;}.ui-poptip-arrow-11 span,.ui-poptip-arrow-12 span,.ui-poptip-arrow-1 span{border-width:0 6px 6px;border-bottom-color:#FFFCEF;}.ui-poptip-arrow-11{left:14px;top:-6px;}.ui-poptip-arrow-1{right:28px;top:-6px;}.ui-poptip-arrow-12{left:50%;top:-6px;}.ui-poptip-arrow-12 em,.ui-poptip-arrow-12 span{left:-6px;}.ui-poptip-arrow-5 em,.ui-poptip-arrow-6 em,.ui-poptip-arrow-7 em{border-width:6px 6px 0;border-top-color:#ffbb76;top:1px;left:0;}.ui-poptip-arrow-5 span,.ui-poptip-arrow-6 span,.ui-poptip-arrow-7 span{border-width:6px 6px 0;border-top-color:#FFFCEF;}.ui-poptip-arrow-5{right:28px;bottom:0;}.ui-poptip-arrow-6{left:50%;bottom:0;}.ui-poptip-arrow-7{left:14px;bottom:0;}.ui-poptip-arrow-6 em,.ui-poptip-arrow-6 span{left:-6px;}:root .ui-poptip-shadow{FILTER:none\\9;}.ui-poptip-blue{color:#4d4d4d;}.ui-poptip-blue .ui-poptip-shadow{background-color:rgba(0, 0, 0, 0.05);FILTER:progid:DXImageTransform.Microsoft.Gradient(startColorstr=#0c000000, endColorstr=#0c000000);}.ui-poptip-blue .ui-poptip-container{background-color:#F8FCFF;border:1px solid #B9C8D3;}.ui-poptip-blue .ui-poptip-arrow-10 em,.ui-poptip-blue .ui-poptip-arrow-9 em{border-right-color:#B9C8D3;}.ui-poptip-blue .ui-poptip-arrow-11 em,.ui-poptip-blue .ui-poptip-arrow-12 em,.ui-poptip-blue .ui-poptip-arrow-1 em{border-bottom-color:#B9C8D3;}.ui-poptip-blue .ui-poptip-arrow-2 em,.ui-poptip-blue .ui-poptip-arrow-3 em{border-left-color:#B9C8D3;}.ui-poptip-blue .ui-poptip-arrow-5 em,.ui-poptip-blue .ui-poptip-arrow-6 em,.ui-poptip-blue .ui-poptip-arrow-7 em{border-top-color:#B9C8D3;}.ui-poptip-blue .ui-poptip-arrow-10 span,.ui-poptip-blue .ui-poptip-arrow-9 span{border-right-color:#F8FCFF;}.ui-poptip-blue .ui-poptip-arrow-11 span,.ui-poptip-blue .ui-poptip-arrow-12 span,.ui-poptip-blue .ui-poptip-arrow-1 span{border-bottom-color:#F8FCFF;}.ui-poptip-blue .ui-poptip-arrow-2 span,.ui-poptip-blue .ui-poptip-arrow-3 span{border-left-color:#F8FCFF;}.ui-poptip-blue .ui-poptip-arrow-5 span,.ui-poptip-blue .ui-poptip-arrow-6 span,.ui-poptip-blue .ui-poptip-arrow-7 span{border-top-color:#F8FCFF;}.ui-poptip-white{color:#333;}.ui-poptip-white .ui-poptip-shadow{background-color:rgba(0, 0, 0, 0.05);FILTER:progid:DXImageTransform.Microsoft.Gradient(startColorstr=#0c000000, endColorstr=#0c000000);}.ui-poptip-white .ui-poptip-container{background-color:#fff;border:1px solid #b1b1b1;}.ui-poptip-white .ui-poptip-arrow-10 em,.ui-poptip-white .ui-poptip-arrow-9 em{border-right-color:#b1b1b1;}.ui-poptip-white .ui-poptip-arrow-11 em,.ui-poptip-white .ui-poptip-arrow-12 em,.ui-poptip-white .ui-poptip-arrow-1 em{border-bottom-color:#b1b1b1;}.ui-poptip-white .ui-poptip-arrow-2 em,.ui-poptip-white .ui-poptip-arrow-3 em{border-left-color:#b1b1b1;}.ui-poptip-white .ui-poptip-arrow-5 em,.ui-poptip-white .ui-poptip-arrow-6 em,.ui-poptip-white .ui-poptip-arrow-7 em{border-top-color:#b1b1b1;}.ui-poptip-white .ui-poptip-arrow-10 span,.ui-poptip-white .ui-poptip-arrow-9 span{border-right-color:#fff;}.ui-poptip-white .ui-poptip-arrow-11 span,.ui-poptip-white .ui-poptip-arrow-12 span,.ui-poptip-white .ui-poptip-arrow-1 span{border-bottom-color:#fff;}.ui-poptip-white .ui-poptip-arrow-2 span,.ui-poptip-white .ui-poptip-arrow-3 span{border-left-color:#fff;}.ui-poptip-white .ui-poptip-arrow-5 span,.ui-poptip-white .ui-poptip-arrow-6 span,.ui-poptip-white .ui-poptip-arrow-7 span{border-top-color:#fff;}.ui-poptip{top:0;left:0;}')}),define("arale-tip/1.3.0/src/tip.tpl",[],function(o,p,i){i.exports='<div class="ui-poptip">    <div class="ui-poptip-shadow">    <div class="ui-poptip-container">        <div class="ui-poptip-arrow">            <em></em>            <span></span>        </div>        <div class="ui-poptip-content" data-role="content">        </div>    </div>    </div></div>'});