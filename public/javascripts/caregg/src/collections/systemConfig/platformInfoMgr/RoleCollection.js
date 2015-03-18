define( function(require, exports, module){

    var $ = require('$');
    var _ = require('_');
    var CarEgg = require('CarEgg');
    var Role = require('../../../models/systemConfig/platformInfoMgr/Role');

    var RoleCollection  = CarEgg.Collection.extend({
        url:  CarEgg.constant.ROOT_PATH + '/opr/OprRole' ,
        model: Role
    });

    module.exports = RoleCollection;

});