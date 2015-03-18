define( function(require, exports, module){

    var $ = require('$');
    var _ = require('_');
    var CarEgg =  require("CarEgg")

    var MenuItem = CarEgg.Model.extend({
        defaults:{
            oprFuncCode: '',
            oprFuncName: ''
        }
    });

    module.exports = MenuItem;

});