define("caregg/o2o/0.1.0/models/userInfoMgr/BusinessOrg",["jquery/1.10.1/jquery","underscore/1.6.0/underscore","CarEgg"],function(require,exports,module){var CarEgg=(require("jquery/1.10.1/jquery"),require("underscore/1.6.0/underscore"),require("CarEgg")),BusinessOrg=CarEgg.Model.extend({defaults:{chineseName:"",serviceOrgCode:"",careggContactPerson:"",careggTel:"",settleDayTypeSeq:"",serviceOrgLevel:"",upServiceOrgSeq:"",primaryAddr:"",serviceOrgStatus:"",orgTypeSeq:""},idAttribute:"serviceOrgSeq"});module.exports=BusinessOrg});