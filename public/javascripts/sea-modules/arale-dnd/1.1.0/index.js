define("arale-dnd/1.1.0/index",["jquery/1.7.2/jquery","arale-base/1.2.0/base","arale-class/1.2.0/class","arale-events/1.2.0/events"],function(e,t,o){function r(e){switch(e.type){case"mousedown":1===e.which&&(s({target:e.target,pageX:e.pageX,pageY:e.pageY}),W===!0&&e.preventDefault());break;case"mousemove":W===!0?n():w===!0&&(i({pageX:e.pageX,pageY:e.pageY}),l(),e.preventDefault());break;case"mouseup":W===!0?(y.remove(),y=null,h=null,W=!1):w===!0&&(w=!1,y.css("cursor","default"),y.focus(),a(),u())}}function s(e){var t=d(e.target).parents().toArray();t.unshift(e.target),d.each(t,function(e,t){if(void 0!==d(t).data("dnd")){if(h=d(t).data("dnd"),isNaN(parseInt(h,10))===!1)h=c[parseInt(h,10)],m=d(t);else if(h===!0)h=new g(t,d(t).data("config")),m=d(t);else{if(h!==!1)return!0;h=null}return!1}}),null!==h&&h.get("disabled")!==!0&&(y=null===h.get("proxy")?m.clone():h.get("proxy"),y.css({position:"absolute",left:0,top:0,visibility:"hidden"}),y.appendTo(m.parent()),y.data("originx",y.offset().left),y.data("originy",y.offset().top),y.css({left:m.offset().left-y.data("originx"),top:m.offset().top-y.data("originy"),width:m.width(),height:m.height()}),b=e.pageX-m.offset().left,H=e.pageY-m.offset().top,W=!0)}function n(){var e=h.get("visible"),t=h.get("dragCursor"),o=h.get("zIndex");e!==!0&&m.css("visibility","hidden"),y.css({"z-index":o,visibility:"visible",cursor:t}),y.focus(),I={},W=!1,w=!0,h.trigger("dragstart",I,y)}function i(e){var t=h.get("containment"),o=h.get("axis"),r=e.pageX-b,s=e.pageY-H,n=y.data("originx"),i=y.data("originy"),l=t.offset();l||(l={left:0,top:0}),"y"!==o&&(r>=l.left&&r+y.outerWidth()<=l.left+t.outerWidth()?y.css("left",r-n):r<=l.left?y.css("left",l.left-n):y.css("left",l.left+t.outerWidth()-y.outerWidth()-n)),"x"!==o&&(s>=l.top&&s+y.outerHeight()<=l.top+t.outerHeight()?y.css("top",s-i):s<=l.top?y.css("top",l.top-i):y.css("top",l.top+t.outerHeight()-y.outerHeight()-i)),h.trigger("drag",y,x)}function l(){var e=h.get("drops"),t=h.get("dragCursor"),o=h.get("dropCursor"),r=y.offset().left+b,s=y.offset().top+H;null!==e&&(null===x?d.each(e,function(e,t){return f(t,r,s)===!0?(y.css("cursor",o),y.focus(),x=d(t),h.trigger("dragenter",y,x),!1):void 0}):f(x,r,s)===!1?(y.css("cursor",t),y.focus(),h.trigger("dragleave",y,x),x=null):h.trigger("dragover",y,x))}function a(){var e=h.get("revert"),t=y.data("originx"),o=y.data("originy");null!==x&&(f(x,y)===!1&&e===!1&&(y.css("left",x.offset().left+(x.outerWidth()-y.outerWidth())/2-t),y.css("top",x.offset().top+(x.outerHeight()-y.outerHeight())/2-o)),h.trigger("drop",I,y,x))}function u(){var e=h.get("drops"),t=h.get("revert"),o=h.get("revertDuration"),r=h.get("visible"),s=h.get("zIndex"),n=y.offset().left-m.offset().left,i=y.offset().top-m.offset().top,l=y.data("originx"),a=y.data("originy");t===!0||null===x&&null!==e?y.animate({left:m.offset().left-l,top:m.offset().top-a},o,function(){m.css("visibility",""),y.remove(),y=null,h.trigger("dragend",m,x),h=null,x=null}):("relative"===m.css("position")?(n=(isNaN(parseInt(m.css("left"),10))?0:parseInt(m.css("left"),10))+n,i=(isNaN(parseInt(m.css("top"),10))?0:parseInt(m.css("top"),10))+i):"absolute"===m.css("position")?(n=y.offset().left,i=y.offset().top):m.css("position","relative"),r===!1?(m.css({left:n,top:i,visibility:"","z-index":s}),y.remove(),y=null,h.trigger("dragend",m,x),h=null,x=null):m.animate({left:n,top:i},o,function(){y.remove(),y=null,h.trigger("dragend",m,x),h=null,x=null}))}function f(e,t,o){var r=d(e).offset();return r||(r={left:0,top:0}),2===arguments.length?r.left<=d(t).offset().left&&r.left+d(e).outerWidth()>=d(t).offset().left+d(t).outerWidth()&&r.top<=d(t).offset().top&&r.top+d(e).outerHeight()>=d(t).offset().top+d(t).outerHeight():3===arguments.length?r.left<=t&&r.left+d(e).outerWidth()>=t&&r.top<=o&&r.top+d(e).outerHeight()>=o:void 0}var g=null,d=e("jquery/1.7.2/jquery"),p=e("arale-base/1.2.0/base"),c=[],v=0,h=null,m=null,y=null,x=null,b=0,H=0,I={},W=!1,w=!1;g=p.extend({attrs:{elements:{value:null,readOnly:!0},containment:{value:d(document),setter:function(e){return d(e).eq(0)}},proxy:{value:null,setter:function(e){return d(e).eq(0)}},drops:{value:null,setter:function(e){return d(e)}},disabled:!1,visible:!1,axis:!1,revert:!1,revertDuration:500,dragCursor:"move",dropCursor:"copy",zIndex:9999},initialize:function(e,t){elements=d(e),0===elements.length&&d.error("element error!"),t=d.extend({elements:elements},t),g.superclass.initialize.call(this,t),d(elements).data("dnd",v),c[v++]=this}}),g.open=function(){d(document).on("mousedown mousemove mouseup",r)},g.close=function(){d(document).off("mousedown mousemove mouseup",r)},g.open(),o.exports=g});