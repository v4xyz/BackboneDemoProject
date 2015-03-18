define( function(require, exports, module){

    var $ = require('$');
    var _ = require('_');
    var CarEgg =  require("CarEgg")

    var Role = CarEgg.Model.extend({
        defaults:{
            roleCode: '',
            roleName: '',
            roleDesc: ''
        },
        idAttribute: "oprRoleSeq"
    });

    module.exports = Role;

});