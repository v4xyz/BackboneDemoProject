define("caregg/o2o/0.1.0/collections/systemConfig/RoleCollection",["jquery/1.10.1/jquery","underscore/1.6.0/underscore","CarEgg","..\\..\\models\\systemConfig\\Role"],function(require,exports,module){var CarEgg=(require("jquery/1.10.1/jquery"),require("underscore/1.6.0/underscore"),require("CarEgg")),Role=require("../.././models/systemConfig/Role"),RoleCollection=CarEgg.Collection.extend({url:CarEgg.constant.ROOT_PATH+"/opr/OprRole",model:Role});module.exports=RoleCollection}),define("caregg/o2o/0.1.0/models/systemConfig/Role",["jquery/1.10.1/jquery","underscore/1.6.0/underscore","CarEgg"],function(require,exports,module){var CarEgg=(require("jquery/1.10.1/jquery"),require("underscore/1.6.0/underscore"),require("CarEgg")),Role=CarEgg.Model.extend({defaults:{roleCode:"",roleName:"",roleDesc:""},idAttribute:"oprRoleSeq"});module.exports=Role});