define( function(require, exports, module){

    var $ = require('$');
    var _ = require('_');
    var CarEgg = require('CarEgg');
    var Cookie = require('cookie');
    var MenuItem = require('../../models/home/MenuItem');

    var MenuItemCollection  = CarEgg.Collection.extend({
        url:  CarEgg.constant.ROOT_PATH + '/opr/OprFunction/queryFuncByName/' + Cookie.get("userName") ,
        model: MenuItem
    });

    module.exports = MenuItemCollection;

});