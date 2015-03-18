define( function(require, exports, module){

//    var $ = require('$');
    var _ = require('_');
    var Backbone = require('Backbone');
    var switchable = require('switchable');
    var Calendar = require("calendar");
    var moment = require("moment")
    var constant = require('../constant');
    var CarEgg = require("CarEgg");

    var tabs1 = new switchable.Tabs({
        element: "#tab-demo-1",
        triggers: '#tab-demo-1 .caregg-tab-v1-nav li',
        panels: '#tab-demo-1 .caregg-tab-v1-switch',
        activeTriggerClass: 'cur'
    });

    var tabs2 = new switchable.Tabs({
        element: "#tab-demo-2",
        triggers: '#tab-demo-2 .caregg-tab-v2-nav li',
        panels: '#tab-demo-2 .caregg-tab-v2-switch',
        activeTriggerClass: 'cur'
    });

    var tabs3 = new switchable.Tabs({
        element: "#tab-demo-3",
        triggers: '#tab-demo-3 .caregg-tab-v3-nav li',
        panels: '#tab-demo-3 .caregg-tab-v3-switch',
        activeTriggerClass: 'cur'
    });

    var tabs4 = new switchable.Tabs({
        element: "#tab-demo-4",
        triggers: '#tab-demo-4 .caregg-tab-v4-nav li',
        panels: '#tab-demo-4 .caregg-tab-v4-switch',
        activeTriggerClass: 'cur'
    });

    var tabs7 = new switchable.Tabs({
        element: "#tab-demo-7",
        triggers: '#tab-demo-7 .caregg-tab-v7-nav li',
        panels: '#tab-demo-7 .caregg-tab-v7-switch',
        activeTriggerClass: 'cur'
    });

    //弹出框
    var Dialog = require('dialog');

    var o = new Dialog({
        trigger: '#caregg-dialog-v1-demo1',
        content: '<div>这是 dialog 容器的内容</div>',
        height: '150px'

    });

    //对话框
    var cb = new Dialog.ConfirmBox({
        trigger: '#caregg-dialog-v1-demo2',
        title: '我真是标题啊',
        message: '我是内容 我是内容',
        onConfirm: function() {
            var that = this;
            this.set('title', '三秒后关闭对话框');
            this.set('message', '不要啊！！');
            setTimeout(function() {
                that.hide();
            }, 3000);
        }
    });

    $("#caregg-demo-tip").click(function(){
        // content 提示内容 timeout 显示时间(毫秒)
        CarEgg.utils.tip.open("提示框,自动关闭！",1000);
    });

    //时间选择器
    var t1 = moment(Date.now()-90*24*60*60*1000).format("YYYY_MM-DD");//当前日期减90天
    var t2 = moment(Date.now()+90*24*60*60*1000).format("YYYY-MM-DD");//当前日期加90天
    var c1 = new Calendar({trigger: '#startDate', range: [t1, null]})
    var c2 = new Calendar({trigger: '#endDate', range: [null, t2]})
    console.log(c1.get('focus').format('YYYY-MM-DD'), c2.get('focus').format('YYYY-MM-DD'));

    c1.on('selectDate', function(date) {
        console.log(c1.get('focus').format('YYYY-MM-DD'), c2.get('focus').format('YYYY-MM-DD'));
        c2.range([date, t2]);
    });

    c2.on('selectDate', function(date) {
        c1.range([t1, date]);
    });



    //DataTable初始化
    var table = $('#example').DataTable( {
        "ajax": "/data-table/data",
        "columns": [
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "extn" },
            { "data": "start_date" },
            { "data": "salary" }
        ],
        "oLanguage": constant.DATA_TABLE_LANGUAGE
    });

//    table.on( 'xhr', function () {
//
//    });

    //选中行事件
    $('#example tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
//            table.$('tr.selected').removeClass('selected');   //多选 或 单选
            $(this).addClass('selected');
        }
        console.log( table.row( this ).data() );
    } );

    //删除行
    $('#delete').click( function () {
        console.log(table.rows('tr.selected').data());
        table.rows('tr.selected').remove().draw( false );
    });

    //添加行
    $('#add').click( function () {
        table.row.add({
            "name": "add",
            "position": "add",
            "salary": "add",
            "start_date": "add",
            "office": "add",
            "extn": "add"
        }).draw();
    });





});