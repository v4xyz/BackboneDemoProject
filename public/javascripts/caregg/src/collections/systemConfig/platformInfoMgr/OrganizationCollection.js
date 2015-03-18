define( function(require, exports, module){

    var $ = require('$');
    var _ = require('_');
    var CarEgg = require('CarEgg');
    var Organization = require('../../../models/systemConfig/platformInfoMgr/Organization');

    var OrganizationCollection  = CarEgg.Collection.extend({
        url:  CarEgg.constant.ROOT_PATH + '/opr/CareggOrg' ,
        model: Organization
    });

    module.exports = OrganizationCollection;

});