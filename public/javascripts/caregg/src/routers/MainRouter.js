define( function(require, exports, module){

    var $ = require('$');
    var _ = require('_');
    var Backbone = require('Backbone');
    var Cookie = require("cookie");
    var CarEgg = require("CarEgg");
    var Tip =  CarEgg.utils.tip;



//    var HomePanel = require('../views/home/MainPanel');
//    var MessagePanel = require('../views/message/MainPanel');
//    var BusinessPanel = require('../views/business/MainPanel');
//    var RoleMgrPanel = require('../views/systemConfig/RoleMgrPanel');

    //增加业务视图的wrap容器
    //每次backbone视图remove后 会清除掉这个容器
    function addBusinessWrap(){

        $("#businessPanel").append("<div class='businessPanelWrap'></div>")

    }

    var MainRouter = Backbone.Router.extend({
        routes: {
            'home': 'homePanelAction',
            'message': 'messagePanelAction',
            'business': 'businessPanelAction',
            'business/roleMgr': 'roleMgrAction',
            'business/orgMgr': 'organizationMgrAction',
            'business/businessOrgMgr': 'businessOrgMgr',
            'logout': 'logOutAction',
            '*actions': 'defaultAction'
        }
    });

    MainRouter.initialize = function(){

        var CommonView = require('../views/home/CommonView');
        var router = new MainRouter();
        var commonView = new CommonView();

        router.on('route:defaultAction', function (actions) {

            console.log("default route");
            var that = this;
            require.async('../views/home/MainPanel', function(HomePanel){

                if(HomePanel){
                    that.homePanel = that.homePanel || new HomePanel();
                    commonView.render();
                    that.homePanel.render();
                }else{

                }
            });

        });

        router.on('route:homePanelAction', function (actions) {

            console.log("home route");
            var that = this;
            require.async('../views/home/MainPanel', function(HomePanel){

                if(HomePanel){
                    that.homePanel = that.homePanel || new HomePanel();
                    commonView.render();
                    that.homePanel.render();
                }else{

                }
            });

        });

        router.on('route:messagePanelAction', function (actions) {

            console.log("message route");
            var that = this;
            require.async('../views/message/MainPanel', function(MessagePanel){

                if(MessagePanel){
                    that.messagePanel = that.messagePanel || new MessagePanel();
                    commonView.render();
                    that.messagePanel.render();
                }else{

                }

            });


        });

        router.on('route:businessPanelAction', function (actions) {

            console.log("business route");
            var that = this;
            require.async('../views/business/MainPanel', function(BusinessPanel){

                if(BusinessPanel){
                    if( that.businessPanel && !(that.businessPanel instanceof  BusinessPanel) ){
                        that.businessPanel.remove();
                        delete that.businessPanel;
                        addBusinessWrap();
                    }
                    that.businessPanel =  that.businessPanel || new BusinessPanel();
                    $("#businessLink").attr("href",window.location.hash);
                    commonView.render();
                    that.businessPanel.render();
                }else{

                }

            });


        });

        router.on('route:roleMgrAction', function (actions) {

            console.log(actions);
            var that = this;
            require.async('../views/systemConfig/platformInfoMgr/RoleMgrPanel', function(RoleMgrPanel){

                if(RoleMgrPanel){
                    //业务视图存在且不为当前业务是销毁该视图
                    if( that.businessPanel && !(that.businessPanel instanceof  RoleMgrPanel) ){
                        that.businessPanel.remove();
                        delete that.businessPanel;
                        addBusinessWrap();
                    }
                    that.businessPanel =  that.businessPanel || new RoleMgrPanel();
                    $("#businessLink").attr("href", window.location.hash);
                    commonView.render();
                    that.businessPanel.render( CarEgg.utils.toJSON(actions) );
                }else{

                }

            });


        });

        router.on('route:organizationMgrAction', function (actions) {

            console.log(actions);
            var that = this;
            require.async('../views/systemConfig/platformInfoMgr/OrganizationMgrPanel',function( OrganizationMgrPanel ){

                if( OrganizationMgrPanel ){
                    //业务视图存在且不为当前业务是销毁该视图
                    if( that.businessPanel && !(that.businessPanel instanceof  OrganizationMgrPanel) ){
                        that.businessPanel.remove();
                        delete that.businessPanel;
                        addBusinessWrap();
                    }
                    that.businessPanel =  that.businessPanel || new OrganizationMgrPanel();
                    $("#businessLink").attr("href", window.location.hash);
                    commonView.render();
                    that.businessPanel.render( CarEgg.utils.toJSON(actions) );
                }else{

                }

            });


        });

        router.on('route:businessOrgMgr', function (actions) {

            console.log(actions);
            var that = this;
            require.async('../views/systemConfig/userInfoMgr/BusinessOrgMgrPanel',function( BusinessOrgMgrPanel ){

                if( BusinessOrgMgrPanel ){
                    //业务视图存在且不为当前业务是销毁该视图
                    if( that.businessPanel && !(that.businessPanel instanceof  BusinessOrgMgrPanel) ){
                        that.businessPanel.remove();
                        delete that.businessPanel;
                        addBusinessWrap();
                    }
                    that.businessPanel =  that.businessPanel || new BusinessOrgMgrPanel();
                    $("#businessLink").attr("href", window.location.hash);
                    commonView.render();
                    that.businessPanel.render( CarEgg.utils.toJSON(actions) );
                }else{

                }

            });


        });

        router.on('route:logOutAction', function(actions){

            console.log("logout route");
            Cookie.remove("etoken");
            window.location.href = "/login.html";

        });


        Backbone.history.start();

    };

    module.exports = MainRouter;

});