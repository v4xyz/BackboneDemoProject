define(function(require, exports, module) {

    var $ = require('$');
    var _ = require('_');
    var CarEgg = require('CarEgg');
    var MenuItemCollection = require('../../collections/home/MenuItemCollection');
    var leftMenuTpl = require('../../templates/home/leftSideMenu.tpl');
    var settingMenuTpl = require('../../templates/home/settingMenu.tpl');

    //扩充子菜单 递归处理
    function extendSubMenu( children, menuCfg ){
        if( children.length > 0 ){
            _.each(children, function(child){
                if( menuCfg[child.oprFuncCode] ){
                    _.extend( child, menuCfg[child.oprFuncCode] );
                    console.log( menuCfg[child.oprFuncCode].menuName +" = " + menuCfg[child.oprFuncCode].path );
                }
                extendSubMenu( child.children, menuCfg );
            });
        }else{
            return true;
        }

    }

    //扩充菜单信息( className、虚拟路由 )
    function extendMenu( models ){

        var menuCfg = CarEgg.constant.SYS_MENU_CFG;

        return _.each(models, function(model) {

            if( menuCfg[model.get("oprFuncCode")] ){
                _.extend( model.attributes, menuCfg[model.get("oprFuncCode")] );
                extendSubMenu( model.get("children"), menuCfg );
            }


        } );
    }

    //处理菜单 左侧导航，右上角设置菜单(两个地方的数据是在一个接口中返回的)
    /**
     *
     * @param models 菜单项集合
     * @param type   leftSide 左侧导航、setting 右上角设置菜单
     */
    function handleMenu( models, type ){

        var settingMenuCode = "100";//根据设置菜单的编码来区分左侧和右上角的菜单

        //更具菜单的编码区分左侧导航菜单和右上角设置菜单
        if( type == "leftSide"){
            return extendMenu( models.reject( function( model ){ return model.get("oprFuncCode") == settingMenuCode } ) );
        }

        if( type == "setting"){
            return extendMenu( models.filter( function( model ){ return model.get("oprFuncCode") == settingMenuCode } ) );
        }

    }

    var LeftSideMenu = CarEgg.View.extend({
        el:  ".left-sidebar-menu",
        render: function () {
            var that = this;
            //菜单内容为空是才初始化菜单
            if( $(that.el).children().length == 0){
                that.initialMenus();
            }
        },

        initialMenus: function(){

            var that = this;

            var menuItems = new MenuItemCollection();

            menuItems.fetch({
                success: function(menuItems) {
                    //首页左侧导航的三级菜单
                    $(".left-sidebar-menu").html(_.template(leftMenuTpl, {menuItems: handleMenu( menuItems, "leftSide" ), _:_}));
                    //添加菜单点击事件
                    $('.caregg-multilevel-menu-v1').delegate('a', 'click', function(e){
                        var menuItem = $( e.currentTarget || e.srcElement );
                        //console.log( menuItem );
                        //console.log( menuItem.next('ul').length );
                        if( menuItem.next('ul').length > 0 ){
                            menuItem.toggleClass('on');
                            //e.stopPropagation();
                        }
                        if( menuItem.siblings().length == 0 ){
                            window.mainTab.switchTo(2);
                        }
                    });
                    //右上角的设置菜单
                    $(".menu-dropdown-box.setting-dropdown-box").html(_.template(settingMenuTpl, {menuItems: handleMenu( menuItems, "setting" ), _:_}));

                },
                error: function(response) {
                    console.log(response, "LeftSideMenu render error!");
                }
            });

        }

    });

    module.exports = LeftSideMenu;

});