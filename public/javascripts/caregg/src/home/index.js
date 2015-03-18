/**
 * Created by hai.zhang on 14-10-9.
 */
define(function(require, exports, module) {

    var $ = require('$');
    var Switchable = require('switchable');
    var MainRouter = require('.././routers/MainRouter');

    window.mainTab = new Switchable.Tabs({
        element : "#home-main-tab",
        triggers:'#home-main-tab .caregg-tab-v7-nav li',
        panels : '#home-main-tab .caregg-tab-v7-switch',
        activeTriggerClass : 'cur',
        triggerType: 'click',
        activeIndex: /#home/.test(window.location.href) ? 0: /#message/.test(window.location.href) ? 1 : /#business/.test(window.location.href) ? 2 : 0
    });

    MainRouter.initialize();

});