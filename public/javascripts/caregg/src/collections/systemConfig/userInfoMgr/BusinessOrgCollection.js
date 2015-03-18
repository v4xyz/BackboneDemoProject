define( function(require, exports, module){

    var $ = require('$');
    var _ = require('_');
    var CarEgg = require('CarEgg');
    var Cookie = require('cookie');
    var BusinessOrg = require('../../../models/systemConfig/userInfoMgr/BusinessOrg');

    var BusinessOrgCollection  = CarEgg.Collection.extend({
        url:  CarEgg.constant.ROOT_PATH + '/opr/ServiceOrg' ,
        model: BusinessOrg
    });

    module.exports = BusinessOrgCollection;

});