define(function(require, exports, module) {

    var $ = require('$');
    var _ = require('_');
    var CarEgg = require('CarEgg');
    var template = require('../../templates/message/mainPanel.tpl');


    var MainPanel = CarEgg.View.extend({

        el:  "#messagePanel",
        render: function () {
            $(this.el).html(_.template(template, {}));
        }

    });

    module.exports = MainPanel;

});