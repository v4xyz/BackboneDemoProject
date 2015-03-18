var config,
    env = process.env.NODE_ENV || "test";

config = {
    development: {
        port:3000,
        caregg:{
            rootPath: '/caregg-o2o-opr-dev'
        }
    },
    test:{
        port:3000,
        apiAddr: "http://192.168.1.243:99", //java提供api服务的地址
        caregg:{
            rootPath: '/caregg-o2o-opr-dev',//api服务器的地址前缀,不同环境下前缀不同
            apiPath:{

                userLogin: { path:"/opr/OprUser/checkLogin", achieved: false , autoForward: false }, //用户登录接口, path 表示接口地址 achieved 表示是否完成,为true表示可调用java接口否则在node层模拟实现 manuForward 为true时自动转发否则手动转发
                homeLeftMenu: { path: "/opr/OprFunction/queryFuncByName/:userName", achieved: false, method: "get"}, //首页左侧和右上角设置菜单
                queryAllFunctionList: { path: "/opr/OprFunction/queryAllFunctionList", achieved: true, method: "get"}, //获取系统所有菜单
                organization: { path: "/opr/CareggOrg", achieved: false}, //运营组织管理
                systemRole: { path: "/opr/OprRole", achieved: false}, //系统角色
                queryByOrgId: { path: "/opr/OprRole/queryByOrgId", achieved: true, method: "get" }, //根据运营组织查询该组织拥有角色列表 /#/article/54f54bb901a66bdb28000022
                roleAuthorize: { path: "/opr/CareggOrg/authorize", achieved: true, method: "post" }, //角色授权 /#/article/54f5484901a66bdb28000021
                sysOprUserMgr: { path: "/opr/OprUser", achieved: true}, //系统运营用户
                businessOrgMgr: { path: "/opr/ServiceOrg", achieved: false}, //商家组织
                businessOrgTypeMgr: { path: "/opr/OrgType", achieved: true }, //商家组织分类
                businessOrgRoleMgr: { path: "/opr/ServiceOrgRole", achieved: true }, //商家组织角色
                businessUserMgr: { path: "/opr/ServiceUser", achieved: true }, //商家用户
                businessUserAuthorize: { path: "/opr/ServiceUser/authorize", method: "post", achieved: true }, //商家用户角色授权
                carInfo: { path: "/opr/carInfo", achieved: true }, //车辆信息
                carType: { path: "/opr/carType", achieved: true }, //车辆类型信息
                sysDict: { path: "/opr/SysDict", achieved: true }, //系统字典
                sysDictItem: { path: "/opr/SysDictItem", achieved: true }, //系统字典条目
                oprFunction: { path: "/opr/OprFunction", achieved: true }, //系统功能
                maintanceServiceType: { path: "/opr/SysDictItem", achieved: true } //维保商品分类

            }
        }
    }
}

module.exports = config[env];