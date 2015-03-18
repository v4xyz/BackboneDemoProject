define( function(require, exports, module){

    var $ = require('$');
    var _ = require('_');
    var CarEgg =  require("CarEgg")

    //商家组织 model
    var BusinessOrg = CarEgg.Model.extend({
        defaults:{
            chineseName: '',
            serviceOrgCode: '',
            careggContactPerson: '',
            careggTel:'',
            settleDayTypeSeq:'',
            serviceOrgLevel:'',
            upServiceOrgSeq:'',
            primaryAddr:'',
            serviceOrgStatus:'',
            orgTypeSeq:''
        },
        idAttribute:"serviceOrgSeq"
    });

    module.exports = BusinessOrg;

});