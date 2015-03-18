define(function (require, exports, module) {
    exports.ROOT_PATH = '/caregg-o2o-opr-dev';
    exports.AVATAR_PATH = 'http://172.16.1.222:8888/o2o/files/show/';
    exports.FILE_TYPES = '.doc;.docx;.ppt;.pptx;.xls;.xlsx;.pdf;';
    exports.FILE_SIZE_LIMIT = 80;   //单位MB
    exports.FILE_UPLOAD_LIMIT = 1;
    exports.IMAGE_TYPES = '.jpg;.png;';
    exports.IMAGE_SIZE_LIMIT = '5MB';
    exports.adImgUrl = '/static/images/common-service.png';
    exports.adUrl = '/application/service';
    exports.DATA_TABLE_LANGUAGE = {
        "sProcessing": "正在加载中......",
        "sLengthMenu": "每页显示 _MENU_ 条记录",
        "sZeroRecords": "对不起，查询不到相关数据！",
        "sEmptyTable": "表中无数据存在！",
        "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
        "sInfoFiltered": "数据表中共为 _MAX_ 条记录",
        "sSearch": "搜索",
        "oPaginate": {
            "sFirst": "首页",
            "sPrevious": "上一页",
            "sNext": "下一页",
            "sLast": "末页"
        }
    };
    exports.SYS_MENU_CFG = {
        "101":{ menuName:"配置", path: "", className: "caregg-ico-menu-1"},
        "102":{ menuName:"车蛋", path: "", className: "caregg-ico-menu-2"},
        "103":{ menuName:"车辆", path: "", className: "caregg-ico-menu-3"},
        "104":{ menuName:"维保", path: "", className: "caregg-ico-menu-4"},
        "105":{ menuName:"美保", path: "", className: "caregg-ico-menu-5"},
        "106":{ menuName:"保险", path: "", className: "caregg-ico-menu-6"},
        "107":{ menuName:"违章", path: "", className: "caregg-ico-menu-8"},
        "108":{ menuName:"停车", path: "", className: "caregg-ico-menu-7"},
        "109":{ menuName:"财务", path: "", className: "caregg-ico-menu-9"},
        "110":{ menuName:"报表", path: "", className: "caregg-ico-menu-9"},
        "1010101":{ menuName:"系统角色管理", path: "#business/roleMgr", className: ""},
        "1010201":{ menuName:"系统组织管理", path: "#business/orgMgr", className: ""},
        "1010301":{ menuName:"商家组织管理", path: "#business/businessOrgMgr", className: ""}

    };

});