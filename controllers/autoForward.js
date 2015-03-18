var request = require('../utils/request');
var config = require('../config');
var apiAddr = config.apiAddr;
var api = config.caregg.apiPath;

//获取cookie字段
function parseCookies (cookie) {
    var list = {},
        rc = cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}

//获取queryString字段
function getQueryString( queryString, field ){

    queryString = queryString.match(/\?.*/);
    queryString = queryString ? queryString[0].substr(1): false;
    queryString = queryString ? queryString.match( new RegExp( field + "=[^&]*") ) : false;
    queryString = queryString ? queryString[0].replace( field+"=","") : false;

    return queryString;

}

exports.gethomeLeftMenu  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['homeLeftMenu'].achieved ){
		request.getData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{
        console.log(parseCookies(headers.cookie).userName);
        var token = parseCookies(headers.cookie).etoken;
        if( !token ){
            cb(null, { state:0, messsge:"token为空或失效",data:null} );
        }else{
            cb(null, userData[parseCookies(headers.cookie).userName].menuData );
        }

	}

}

exports.getqueryAllFunctionList  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['queryAllFunctionList'].achieved ){
		request.getData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.getorganization  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['organization'].achieved ){
		request.getData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{
        console.log(parseCookies(headers.cookie).userName);
        var sysOrgData = userData[parseCookies(headers.cookie).userName].sysOrgData;
        console.log(getQueryString( url, "page"));
        sysOrgData.data.pageId = getQueryString( url, "page");
        cb(null, userData[parseCookies(headers.cookie).userName].sysOrgData );
	}

}

exports.postorganization = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['organization'].achieved ){
		request.postData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.putorganization = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['organization'].achieved ){
		request.putData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.deleteorganization  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['organization'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.bulkDeleteorganization  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['organization'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.getsystemRole  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['systemRole'].achieved ){
		request.getData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{
        console.log(parseCookies(headers.cookie).userName);
        var roleData = userData[parseCookies(headers.cookie).userName].sysRoleData;
        console.log(getQueryString( url, "page"));
        roleData.data.pageId = getQueryString( url, "page");
        cb(null, userData[parseCookies(headers.cookie).userName].sysRoleData );
	}

}

exports.postsystemRole = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['systemRole'].achieved ){
		request.postData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{
        cb( null,{ state:1, message:"新增成功", data: {oprRoleSeq: Date.now()} });
	}

}

exports.putsystemRole = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['systemRole'].achieved ){
		request.putData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{
        cb( null,{ state:1, message:"修改成功", data: params });
	}

}

exports.deletesystemRole  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['systemRole'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{
        cb( null,{ state:1, message:"删除成功", data: null });
	}

}

exports.bulkDeletesystemRole  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['systemRole'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{
        cb( null,{ state:1, message:"删除成功", data: null });
	}

}

exports.getqueryByOrgId  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['queryByOrgId'].achieved ){
		request.getData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.postroleAuthorize = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['roleAuthorize'].achieved ){
		request.postData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.getsysOprUserMgr  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['sysOprUserMgr'].achieved ){
		request.getData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.postsysOprUserMgr = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['sysOprUserMgr'].achieved ){
		request.postData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.putsysOprUserMgr = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['sysOprUserMgr'].achieved ){
		request.putData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.deletesysOprUserMgr  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['sysOprUserMgr'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.bulkDeletesysOprUserMgr  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['sysOprUserMgr'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.getbusinessOrgMgr  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['businessOrgMgr'].achieved ){
		request.getData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{
        console.log(parseCookies(headers.cookie).userName);
        var sellerOrgData = userData[parseCookies(headers.cookie).userName].sellerOrgData;
        console.log(getQueryString( url, "page"));
        sellerOrgData.data.pageId = getQueryString( url, "page");
        cb(null, userData[parseCookies(headers.cookie).userName].sellerOrgData );
	}

}

exports.postbusinessOrgMgr = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['businessOrgMgr'].achieved ){
		request.postData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.putbusinessOrgMgr = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['businessOrgMgr'].achieved ){
		request.putData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.deletebusinessOrgMgr  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['businessOrgMgr'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.bulkDeletebusinessOrgMgr  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['businessOrgMgr'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.getbusinessOrgTypeMgr  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['businessOrgTypeMgr'].achieved ){
		request.getData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.postbusinessOrgTypeMgr = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['businessOrgTypeMgr'].achieved ){
		request.postData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.putbusinessOrgTypeMgr = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['businessOrgTypeMgr'].achieved ){
		request.putData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.deletebusinessOrgTypeMgr  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['businessOrgTypeMgr'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.bulkDeletebusinessOrgTypeMgr  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['businessOrgTypeMgr'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.getbusinessOrgRoleMgr  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['businessOrgRoleMgr'].achieved ){
		request.getData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.postbusinessOrgRoleMgr = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['businessOrgRoleMgr'].achieved ){
		request.postData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.putbusinessOrgRoleMgr = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['businessOrgRoleMgr'].achieved ){
		request.putData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.deletebusinessOrgRoleMgr  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['businessOrgRoleMgr'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.bulkDeletebusinessOrgRoleMgr  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['businessOrgRoleMgr'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.getbusinessUserMgr  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['businessUserMgr'].achieved ){
		request.getData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.postbusinessUserMgr = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['businessUserMgr'].achieved ){
		request.postData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.putbusinessUserMgr = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['businessUserMgr'].achieved ){
		request.putData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.deletebusinessUserMgr  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['businessUserMgr'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.bulkDeletebusinessUserMgr  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['businessUserMgr'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.postbusinessUserAuthorize = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['businessUserAuthorize'].achieved ){
		request.postData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.getcarInfo  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['carInfo'].achieved ){
		request.getData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.postcarInfo = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['carInfo'].achieved ){
		request.postData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.putcarInfo = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['carInfo'].achieved ){
		request.putData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.deletecarInfo  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['carInfo'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.bulkDeletecarInfo  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['carInfo'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.getcarType  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['carType'].achieved ){
		request.getData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.postcarType = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['carType'].achieved ){
		request.postData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.putcarType = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['carType'].achieved ){
		request.putData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.deletecarType  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['carType'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.bulkDeletecarType  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['carType'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.getsysDict  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['sysDict'].achieved ){
		request.getData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.postsysDict = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['sysDict'].achieved ){
		request.postData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.putsysDict = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['sysDict'].achieved ){
		request.putData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.deletesysDict  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['sysDict'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.bulkDeletesysDict  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['sysDict'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.getsysDictItem  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['sysDictItem'].achieved ){
		request.getData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.postsysDictItem = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['sysDictItem'].achieved ){
		request.postData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.putsysDictItem = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['sysDictItem'].achieved ){
		request.putData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.deletesysDictItem  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['sysDictItem'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.bulkDeletesysDictItem  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['sysDictItem'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.getoprFunction  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['oprFunction'].achieved ){
		request.getData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.postoprFunction = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['oprFunction'].achieved ){
		request.postData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.putoprFunction = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['oprFunction'].achieved ){
		request.putData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.deleteoprFunction  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['oprFunction'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.bulkDeleteoprFunction  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['oprFunction'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.getmaintanceServiceType  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['maintanceServiceType'].achieved ){
		request.getData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.postmaintanceServiceType = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['maintanceServiceType'].achieved ){
		request.postData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.putmaintanceServiceType = function( url, headers, params, cb){

	var userData = require('../JSON/user-data');

	if( api['maintanceServiceType'].achieved ){
		request.putData({
			url: apiAddr + url,
			params: params,
			headers: headers
		}, cb);
	}else{

	}

}

exports.deletemaintanceServiceType  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['maintanceServiceType'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

exports.bulkDeletemaintanceServiceType  = function( url, headers, cb){

	var userData = require('../JSON/user-data');

	if( api['maintanceServiceType'].achieved ){
		request.delData({
			url: apiAddr + url,
			headers: headers
		}, cb);
	}else{

	}

}

