module.exports = function(app){

	var config = require('../config');
	var rootPath = config.caregg.rootPath;
	var api = config.caregg.apiPath;
	var autoForwardCtrl = require('../controllers/autoForward');

	app.get( rootPath + api['homeLeftMenu'].path , function(req, res, next) {

		autoForwardCtrl.gethomeLeftMenu(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.get( rootPath + api['queryAllFunctionList'].path , function(req, res, next) {

		autoForwardCtrl.getqueryAllFunctionList(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.get( rootPath + api['organization'].path , function(req, res, next) {

		autoForwardCtrl.getorganization(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.post( rootPath + api['organization'].path , function(req, res, next) {

		autoForwardCtrl.postorganization(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.put( rootPath + api['organization'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.putorganization(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['organization'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.deleteorganization(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['organization'].path , function(req, res, next) {

		autoForwardCtrl.bulkDeleteorganization(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.get( rootPath + api['systemRole'].path , function(req, res, next) {

		autoForwardCtrl.getsystemRole(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.post( rootPath + api['systemRole'].path , function(req, res, next) {

		autoForwardCtrl.postsystemRole(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.put( rootPath + api['systemRole'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.putsystemRole(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['systemRole'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.deletesystemRole(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['systemRole'].path , function(req, res, next) {

		autoForwardCtrl.bulkDeletesystemRole(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.get( rootPath + api['queryByOrgId'].path , function(req, res, next) {

		autoForwardCtrl.getqueryByOrgId(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.post( rootPath + api['roleAuthorize'].path , function(req, res, next) {

		autoForwardCtrl.postroleAuthorize(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.get( rootPath + api['sysOprUserMgr'].path , function(req, res, next) {

		autoForwardCtrl.getsysOprUserMgr(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.post( rootPath + api['sysOprUserMgr'].path , function(req, res, next) {

		autoForwardCtrl.postsysOprUserMgr(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.put( rootPath + api['sysOprUserMgr'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.putsysOprUserMgr(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['sysOprUserMgr'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.deletesysOprUserMgr(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['sysOprUserMgr'].path , function(req, res, next) {

		autoForwardCtrl.bulkDeletesysOprUserMgr(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.get( rootPath + api['businessOrgMgr'].path , function(req, res, next) {

		autoForwardCtrl.getbusinessOrgMgr(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.post( rootPath + api['businessOrgMgr'].path , function(req, res, next) {

		autoForwardCtrl.postbusinessOrgMgr(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.put( rootPath + api['businessOrgMgr'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.putbusinessOrgMgr(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['businessOrgMgr'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.deletebusinessOrgMgr(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['businessOrgMgr'].path , function(req, res, next) {

		autoForwardCtrl.bulkDeletebusinessOrgMgr(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.get( rootPath + api['businessOrgTypeMgr'].path , function(req, res, next) {

		autoForwardCtrl.getbusinessOrgTypeMgr(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.post( rootPath + api['businessOrgTypeMgr'].path , function(req, res, next) {

		autoForwardCtrl.postbusinessOrgTypeMgr(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.put( rootPath + api['businessOrgTypeMgr'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.putbusinessOrgTypeMgr(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['businessOrgTypeMgr'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.deletebusinessOrgTypeMgr(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['businessOrgTypeMgr'].path , function(req, res, next) {

		autoForwardCtrl.bulkDeletebusinessOrgTypeMgr(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.get( rootPath + api['businessOrgRoleMgr'].path , function(req, res, next) {

		autoForwardCtrl.getbusinessOrgRoleMgr(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.post( rootPath + api['businessOrgRoleMgr'].path , function(req, res, next) {

		autoForwardCtrl.postbusinessOrgRoleMgr(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.put( rootPath + api['businessOrgRoleMgr'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.putbusinessOrgRoleMgr(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['businessOrgRoleMgr'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.deletebusinessOrgRoleMgr(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['businessOrgRoleMgr'].path , function(req, res, next) {

		autoForwardCtrl.bulkDeletebusinessOrgRoleMgr(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.get( rootPath + api['businessUserMgr'].path , function(req, res, next) {

		autoForwardCtrl.getbusinessUserMgr(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.post( rootPath + api['businessUserMgr'].path , function(req, res, next) {

		autoForwardCtrl.postbusinessUserMgr(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.put( rootPath + api['businessUserMgr'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.putbusinessUserMgr(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['businessUserMgr'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.deletebusinessUserMgr(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['businessUserMgr'].path , function(req, res, next) {

		autoForwardCtrl.bulkDeletebusinessUserMgr(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.post( rootPath + api['businessUserAuthorize'].path , function(req, res, next) {

		autoForwardCtrl.postbusinessUserAuthorize(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.get( rootPath + api['carInfo'].path , function(req, res, next) {

		autoForwardCtrl.getcarInfo(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.post( rootPath + api['carInfo'].path , function(req, res, next) {

		autoForwardCtrl.postcarInfo(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.put( rootPath + api['carInfo'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.putcarInfo(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['carInfo'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.deletecarInfo(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['carInfo'].path , function(req, res, next) {

		autoForwardCtrl.bulkDeletecarInfo(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.get( rootPath + api['carType'].path , function(req, res, next) {

		autoForwardCtrl.getcarType(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.post( rootPath + api['carType'].path , function(req, res, next) {

		autoForwardCtrl.postcarType(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.put( rootPath + api['carType'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.putcarType(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['carType'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.deletecarType(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['carType'].path , function(req, res, next) {

		autoForwardCtrl.bulkDeletecarType(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.get( rootPath + api['sysDict'].path , function(req, res, next) {

		autoForwardCtrl.getsysDict(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.post( rootPath + api['sysDict'].path , function(req, res, next) {

		autoForwardCtrl.postsysDict(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.put( rootPath + api['sysDict'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.putsysDict(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['sysDict'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.deletesysDict(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['sysDict'].path , function(req, res, next) {

		autoForwardCtrl.bulkDeletesysDict(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.get( rootPath + api['sysDictItem'].path , function(req, res, next) {

		autoForwardCtrl.getsysDictItem(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.post( rootPath + api['sysDictItem'].path , function(req, res, next) {

		autoForwardCtrl.postsysDictItem(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.put( rootPath + api['sysDictItem'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.putsysDictItem(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['sysDictItem'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.deletesysDictItem(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['sysDictItem'].path , function(req, res, next) {

		autoForwardCtrl.bulkDeletesysDictItem(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.get( rootPath + api['oprFunction'].path , function(req, res, next) {

		autoForwardCtrl.getoprFunction(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.post( rootPath + api['oprFunction'].path , function(req, res, next) {

		autoForwardCtrl.postoprFunction(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.put( rootPath + api['oprFunction'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.putoprFunction(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['oprFunction'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.deleteoprFunction(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['oprFunction'].path , function(req, res, next) {

		autoForwardCtrl.bulkDeleteoprFunction(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.get( rootPath + api['maintanceServiceType'].path , function(req, res, next) {

		autoForwardCtrl.getmaintanceServiceType(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.post( rootPath + api['maintanceServiceType'].path , function(req, res, next) {

		autoForwardCtrl.postmaintanceServiceType(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.put( rootPath + api['maintanceServiceType'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.putmaintanceServiceType(req.url, req.headers , req.body, function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['maintanceServiceType'].path + '/:id' , function(req, res, next) {

		autoForwardCtrl.deletemaintanceServiceType(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

	app.delete( rootPath + api['maintanceServiceType'].path , function(req, res, next) {

		autoForwardCtrl.bulkDeletemaintanceServiceType(req.url, req.headers , function( err, results){

			if(err){
				console.log(err);
				next(err);
			}else{
				res.json(results);
			}

		});

	});

};