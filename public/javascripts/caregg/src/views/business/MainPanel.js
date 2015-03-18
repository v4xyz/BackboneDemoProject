define(function(require, exports, module) {

    var $ = require('$');
    var _ = require('_');
    var CarEgg = require('CarEgg');
    var template = require('../../templates/business/mainPanel.tpl');


    var MainPanel = CarEgg.View.extend({
        el:  "#businessPanel .businessPanelWrap",
        render: function () {
            $(this.el).html(_.template(template, {}));
        }
    });

    module.exports = MainPanel;

});