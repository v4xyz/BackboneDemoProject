define("caregg/o2o/0.1.0/views/message/MainPanel",["jquery/1.10.1/jquery","underscore/1.6.0/underscore","CarEgg","..\\..\\templates\\message\\mainPanel.tpl"],function(require,exports,module){var $=require("jquery/1.10.1/jquery"),_=require("underscore/1.6.0/underscore"),CarEgg=require("CarEgg"),template=require("../../templates/message/mainPanel.tpl"),MainPanel=CarEgg.View.extend({el:"#messagePanel",render:function(){$(this.el).html(_.template(template,{}))}});module.exports=MainPanel}),define("caregg/o2o/0.1.0/templates/message/mainPanel.tpl",[],'<div class="tip-container"></div>\n<div class="caregg-index-container">消息面板内容</div>');