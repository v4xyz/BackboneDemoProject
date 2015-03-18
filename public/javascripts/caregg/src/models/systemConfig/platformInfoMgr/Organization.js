define( function(require, exports, module){

    var $ = require('$');
    var _ = require('_');
    var CarEgg =  require("CarEgg")

    var Organization = CarEgg.Model.extend({
        defaults:{
            "chineseName": "",
            "careggEmail": "",
            "careggOrgCode": "",
            "englishName": "",
            "careggContactPerson": "",
            "careggTel": 0,
            "careggOrgLevel": 0,
            "orgDesc": "",
            "primaryAddr": "",
            "careggOrgSort": 0,
            "orgTypeSeq": "",
            "secondaryAddr": ""
        },
        idAttribute: "careggOrgSeq"
    });

    module.exports = Organization;

});