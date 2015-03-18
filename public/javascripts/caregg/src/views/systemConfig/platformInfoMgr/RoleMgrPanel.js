define(function(require, exports, module) {

    var $ = require('$');
    var _ = require('_');
    var CarEgg = require('CarEgg');
    var RoleCollection = require("../../../collections/systemConfig/platformInfoMgr/RoleCollection");
    var Pagination = require("../../common/Pagination");
    var Dialog = require("dialog");
    var Validator = require("validator");
    var Tip =  CarEgg.utils.tip;
    var idSep = "_";//id分隔符

    //角色表格视图 用来显示角色数据
    var RolesTableView = CarEgg.View.extend({
        el: '.table-container',
        template: _.template(require("../../../templates/systemConfig/platformInfoMgr/rolesTable.tpl")),
        render: function( roles, pageSize ){
            $(this.el).html(this.template({ roles: roles, pageSize: pageSize, _:_ }));
        }
    });

    //角色视图 用来新建和修改角色
    var RoleView = CarEgg.View.extend({
        el: '#roleForm',
        popMode: true,
        title: "新建角色",
        events: {
            "click .popForm-close a": "cancelForm",
            "click a.btn-cancel": "cancelForm",
            "click a.btn-submit": "submitForm"
        },
        template: _.template(require('../../../templates/systemConfig/platformInfoMgr/roleAddForm.tpl')),
        popFormWarpTemplate: _.template(require('../../../templates/common/popFormWrap.tpl')),
        initialize:function(){

        },
        render: function( role ){
            $(this.el).html(this.popFormWarpTemplate( { title: this.title, formData: role, template: this.template} ));
        },
        cancelForm: function(){
            this.hide();
            this.trigger("cancelForm");
        },
        submitForm: function(){
            var dataForm = this.$el.find("form");
            this.formData = CarEgg.utils.toJSON(decodeURIComponent(dataForm.serialize()));
            this.hide();
            this.trigger("submitForm");
        }
    });


    //角色面板主视图
    var MainPanel = CarEgg.View.extend({
        el:  "#businessPanel .businessPanelWrap",
        template :  _.template(require('../../../templates/systemConfig/platformInfoMgr/roleMgrPanel.tpl')),
        events:{
          "click a[data-action=addRole]": "addRole",
          "click a[data-action=authRole]": "authRole",
          "click a[data-action=editRole]": "editRole",
          "click a[data-action=delRole]": "delRole",
          "click input[data-action=checkAll]": "checkAll",
          "click input[data-id][type=checkbox]": "checkOne"
        },
        initialize: function() {
            this.roleCollection = this.roleCollection || new RoleCollection();
        },
        render: function ( params ) {
            var pageOpt = {};
            pageOpt.page = params && params.page || 1;
            pageOpt.rows = params && params.rows || 5;
            if( !this.rolesTable ){
                this.loadData( pageOpt );
            }
        },
        loadData : function( pageOpt ){
            var that = this;
            that.roleCollection.fetch({
                success: function( roles ){
                    //显示业务面板
                    $(that.el).html(that.template());
                    //填充表格数据
                    that.rolesTable = that.rolesTable || new RolesTableView();
                    that.rolesTable.render( roles.models, that.roleCollection.paging.pageSize );
                    that.checkedIds = '';
                    //初始化分页组件
                    that.pagination = that.pagination || new Pagination({collection: that.roleCollection});
                    that.pagination.render();
                    that.listenTo(that.roleCollection, "paging", function(){
                        that.checkedIds = '';
                        that.rolesTable.render( that.roleCollection.models, that.roleCollection.paging.pageSize );
                    });
                },
                error: function( err ){
                    console.log( err );
                },
                data: pageOpt
            });
        },
        addRole: function(){
            if( !this.roleForm ){
                //指定表单视图
                this.roleForm = new RoleView();
                //监听表单的 submitForm 事件
                this.listenTo(this.roleForm, "submitForm", this.createRole );
            }
            this.roleForm.title = "新建角色",
            this.roleForm.render();
            this.roleForm.show();
        },
        authRole: function(){

        },
        editRole: function(){
            var ids = this.checkedIds.substr(1).split(idSep);
            if( ids.length > 1 ){
                Tip.open("每次只能修改一条记录！", 1000);
            }else if( ids[0] == "" ){
                Tip.open("请选择一条记录修改！", 1000);
            }else{
                //Tip.open("修改记录的ID为 " + ids[0] , 1000);
                if( !this.roleForm ){
                    //指定表单视图
                    this.roleForm = new RoleView();
                    //监听表单的 submitForm 事件
                    this.listenTo(this.roleForm, "submitForm", this.createRole );
                }
                this.roleForm.title = "修改角色",
                this.roleForm.render(this.roleCollection.get(ids[0]));
                this.roleForm.show();
            }

        },
        delRole: function(){

            var that = this;

            if( that.checkedIds == "" ){
                Tip.open("请选择要删除的角色!");
                return false;
            }

            //delRoleCB中 CB 为 ConfirmBox 缩写
            this.delRoleCB = this.delRoleCB || new Dialog.ConfirmBox({
                title: '角色删除',
                message: '确认删除所选择的角色',
                onConfirm: function() {
                        that.roleCollection.delete(that.checkedIds.substr(1) , false , function( result){
                            if( result.state = 1 ){
                                Tip.open("删除成功！");
                            }else{
                                Tip.open("删除出错 "+ result.message +" ！");
                            }
                            that.delRoleCB.hide();
                            that.pagination.toFirstPage( true );
                        });
                }
            });
            this.delRoleCB.show();
        },
        checkOne: function( event ){
            var checkbox = this.$(event.target||event.srcElement)[0];
            if( checkbox.checked ){
                this.checkedIds = this.checkedIds + idSep + this.$(checkbox).data("id");
            }else{
                this.checkedIds = this.checkedIds.replace( idSep + this.$(checkbox).data("id"),"");
            }
            console.log(this.checkedIds);
        },
        checkAll: function(event){

            var allCheckbox  = this.$(event.target || event.srcElement )[0];
            //上下两个全选框同时勾选
            _.each(this.$("input[data-action=checkAll]"), function( checkbox ){
                checkbox.checked = allCheckbox.checked;
            });

            this.checkedIds = '';
            var that = this;
            if( allCheckbox.checked ){
                _.each( this.$("input[data-id]") , function( checkbox ){
                    checkbox.checked = true;
                    that.checkedIds = that.checkedIds + idSep + $(checkbox).data("id");
                });
            }else{
                _.each( this.$("input[data-id]") , function( checkbox ){
                    checkbox.checked = false;
                });
            }
            console.log(this.checkedIds);
        },
        createRole: function(){
            var that = this;
            this.roleCollection.create(this.roleForm.formData ,{
                success: function(model, response, options){
                        //添加成功时,重新render分页组件
                        if( response.state == 1 && !that.roleForm.formData.oprRoleSeq ){
                            that.roleCollection.paging.total = that.roleCollection.paging.total + 1;
                            that.pagination.render();
                            //新增成功后跳到最后一页 true 表明要新到服务器读取数据
                            that.pagination.toLastPage( true );
                        }else{
                            //修改成功后刷新当前页
                            that.pagination.toCurPage();
                        }
                },
                wait: true
            });
        }

    });

    module.exports = MainPanel;

});