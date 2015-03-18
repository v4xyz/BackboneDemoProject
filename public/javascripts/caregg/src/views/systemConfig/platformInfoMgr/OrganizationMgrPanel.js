define(function(require, exports, module) {

    var $ = require('$');
    var _ = require('_');
    var CarEgg = require('CarEgg');
    var OrganizationCollection = require("../../../collections/systemConfig/platformInfoMgr/OrganizationCollection");
    var RoleCollection = require("../../../collections/systemConfig/platformInfoMgr/RoleCollection");
    var Pagination = require("../../common/Pagination");
    var Dialog = require("dialog");
    var Tip =  CarEgg.utils.tip;
    var idSep = "_";//id分隔符

    //系统组织表格视图 用来显示系统组织数据
    var OrganizationsTableView = CarEgg.View.extend({
        el: '.table-container',
        template: _.template(require("../../../templates/systemConfig/platformInfoMgr/organizationsTable.tpl")),
        render: function( Organizations, pageSize ){
            $(this.el).html(this.template({ organizations: Organizations, pageSize: pageSize, _:_ }));
        }
    });

    //系统组织视图 用来新建和修改系统组织
    var OrganizationView = CarEgg.View.extend({
        el: '#organizationForm',
        popMode: true,
        title: "新增运营组织",
        events: {
            "click .popForm-close a": "cancelForm",
            "click a.btn-cancel": "cancelForm",
            "click a.btn-submit": "submitForm"
        },
        template: _.template(require('../../../templates/systemConfig/platformInfoMgr/organizationAddForm.tpl')),
        popFormWarpTemplate: _.template(require('../../../templates/common/popFormWrap.tpl')),
        initialize:function(){

        },
        render: function( organization ){

            var that = this;
            $(that.el).html(that.popFormWarpTemplate( { title: that.title, formData: organization, template: that.template} ));

            $.ajax({
                url: CarEgg.constant.ROOT_PATH + '/opr/OrgType?orgTypeCode=',
                success: function(res){
                    var orgTypes = res.data.dataList;
                    var optionsHtmlString = "";
                    var orgTypeVal = parseInt($(that.el).find("#orgTypeSeq_val").val());
                    for (i = 0; i < orgTypes.length; i++) {
                        optionsHtmlString += '<option value ="' + orgTypes[i].orgTypeSeq + '">' + orgTypes[i].orgTypeName + '</option>';
                    }

                    var orgTypeSeqVal = $(that.el).find("#orgTypeSeq_val").val();
                    $(that.el).find(".caregg-form-orgTypeSeq select").html(optionsHtmlString).find("option[value='" + orgTypeSeqVal + "']").attr("selected", true);
                }
            });
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

    //运营组织授权系统组织视图 用来查看和修改授权系统组织
    var authOrganizationFormView = CarEgg.View.extend({
        el: '#authOrganizationForm',
        popMode: true,
        title: "运营组织权限管理",
        events: {
            "click .popForm-close a": "cancelForm",
            "click a.btn-cancel": "cancelForm",
            "click a.btn-submit": "submitForm"
        },
        template: _.template(require('../../../templates/systemConfig/platformInfoMgr/authOrganizationForm.tpl')),
        popFormWarpTemplate: _.template(require('../../../templates/common/popFormWrap.tpl')),
        initialize:function(){
            this.RoleCollection = this.RoleCollection || new RoleCollection();
        },
        render: function( organization ){
            if( !this.authOrganizationForm ){
                this.loadAuthData( organization );
            }
        },
        loadAuthData : function( organization ){
            var that = this;
            var careggOrgSeq = organization.get("careggOrgSeq");

            $(that.el).html(that.popFormWarpTemplate( { title: that.title, formData: organization, template: that.template} ));

            that.RoleCollection.fetch({
                success: function(oprRoles){
                    var rolesListStr = "";
                    oprRoles = oprRoles.models;
                    for(var i= 0,m=oprRoles.length ; i<m; i++){
                        rolesListStr += '<li><input name="oprRoleSeq" type="checkbox" value="' + oprRoles[i].get("oprRoleSeq") + '"><span>' + oprRoles[i].get("roleName")  + '</span></li>';
                    }
                    $(that.el).find(".oprRoles-list ul").html("").html(rolesListStr);
                    loadOwnedRols();
                },
                error: function( err ){
                    console.log( err );
                    $(that.el).find(".oprRoles-list ul").html("<li style='color:#f00;line-height:30px;'>角色列表导入失败！</li>");
                },
                data:{page:  1, rows: 100}
            });

            loadOwnedRols = function(){
                $.ajax({
                    url: CarEgg.constant.ROOT_PATH + '/opr/OprRole/queryByOrgId?orgId='+ careggOrgSeq + '&flag=1',
                    success: function(res){
                        ownedRols = res.data.dataList;
                        for (i = 0; i < ownedRols.length; i++) {
                            $(that.el).find("input[value='" + ownedRols[i].oprRoleSeq + "']").attr("checked", true);
                        }

                    }
                });
            };
        },
        cancelForm: function(){
            this.hide();
            this.trigger("cancelForm");
        },
        submitForm: function(){
            var dataForm = this.$el.find("form");
            this.formData = this.toRequestJSON(decodeURIComponent(dataForm.serialize()), {objArrName:"roles", objAttribute:"oprRoleSeq"});
            this.hide();
            this.trigger("submitForm");
        },
        toRequestJSON: function(formDateStr, parsedParam){
            var jsonObj = {};
            jsonObj[parsedParam.objArrName] = new Array();

            if( formDateStr ){
                var paramsArr = formDateStr.split("&");
                _.each( paramsArr, function( param ){
                    var temp = param.split("=");
                    if( temp[0] == parsedParam.objAttribute ){
                        var tempObjStr = "{" + parsedParam.objAttribute + ":" + temp[1] + "}";
                        tempObjStr = eval('(' + tempObjStr + ')');
                        jsonObj[parsedParam.objArrName].push(tempObjStr);
                    }else{
                        jsonObj[temp[0]] = temp[1];
                    }
                });
            }

            return jsonObj;
        }
    });



    //系统组织面板主视图
    var MainPanel = CarEgg.View.extend({
        el:  "#businessPanel .businessPanelWrap",
        template :  _.template(require('../../../templates/systemConfig/platformInfoMgr/organizationMgrPanel.tpl')),
        events:{
            "click a[data-action=addOrganization]": "addOrganization",
            "click a[data-action=authOrganization]": "authOrganization",
            "click a[data-action=editOrganization]": "editOrganization",
            "click a[data-action=abandonOrganization]": "delOrganization",
            "click input[data-action=checkAll]": "checkAll",
            "click input[data-id][type=checkbox]": "checkOne"
        },
        initialize: function() {
            this.organizationCollection = this.organizationCollection || new OrganizationCollection();
        },
        render: function ( params ) {
            var pageOpt = {};
            pageOpt.page = params && params.page || 1;
            pageOpt.rows = params && params.rows || 5;
            if( !this.organizationsTable ){
                this.loadData( pageOpt );
            }
        },
        loadData : function( pageOpt ){
            var that = this;
            that.organizationCollection.fetch({
                success: function( organizations ){
                    //显示业务面板
                    $(that.el).html(that.template());
                    //填充表格数据
                    that.organizationsTable = that.organizationsTable || new OrganizationsTableView();
                    that.organizationsTable.render( organizations.models, that.organizationCollection.paging.pageSize );
                    that.allCheckbox = that.$("input[data-action=checkAll]");
                    that.checkedIds = '';
                    //初始化分页组件
                    that.pagination = that.pagination || new Pagination({collection: that.organizationCollection});
                    that.pagination.render();
                    that.listenTo(that.organizationCollection, "paging", function(){
                        that.checkedIds = '';
                        that.organizationsTable.render( that.organizationCollection.models, that.organizationCollection.paging.pageSize );
                    });
                },
                error: function( err ){
                    console.log( err );
                },
                data: pageOpt
            });
        },
        addOrganization: function(){
            if( !this.organizationForm ){
                //指定表单视图
                this.organizationForm = new OrganizationView();
                //监听表单的 submitForm 事件
                this.listenTo(this.organizationForm, "submitForm", this.createOrganization );
            }

            this.organizationForm.render();
            this.organizationForm.show();
        },
        authOrganization: function(){
            var ids = this.checkedIds.substr(1).split(idSep);
            if( ids.length > 1 ){
                Tip.open("每次只能修改一条记录！", 1000);
            }else if( ids[0] == "" ){
                Tip.open("请选择一条记录修改！", 1000);
            }else {
                if (!this.authOrganizationForm) {
                    //指定表单视图
                    this.authOrganizationForm = new authOrganizationFormView();
                    //监听表单的 submitForm 事件
                    this.listenTo(this.authOrganizationForm, "submitForm", this.authOrganizationAssign);
                }

                this.authOrganizationForm.render(this.organizationCollection.get(ids[0]));
                this.authOrganizationForm.show();
            }
        },
        editOrganization: function(){
            var ids = this.checkedIds.substr(1).split(idSep);
            if( ids.length > 1 ){
                Tip.open("每次只能修改一条记录！", 1000);
            }else if( ids[0] == "" ){
                Tip.open("请选择一条记录修改！", 1000);
            }else{
                //Tip.open("修改记录的ID为 " + ids[0] , 1000);
                if( !this.organizationForm ){
                    //指定表单视图
                    this.organizationForm = new OrganizationView();
                    //监听表单的 submitForm 事件
                    this.listenTo(this.organizationForm, "submitForm", this.createOrganization );
                }

                this.organizationForm.title = "修改运营组织",
                this.organizationForm.render(this.organizationCollection.get(ids[0]));
                this.organizationForm.show();
            }

        },
        delOrganization: function(){
            var that = this;

            if( that.checkedIds == "" ){
                Tip.open("请选择要删除的组织!");
                return false;
            }

            //delOrganizationCB中 CB 为 ConfirmBox 缩写
            this.delOrganizationCB = this.delOrganizationCB || new Dialog.ConfirmBox({
                title: '组织删除',
                message: '确认删除所选择的组织',
                onConfirm: function() {
                    that.organizationCollection.delete(that.checkedIds.substr(1) , false , function( result){
                        if( result.state = 1 ){
                            Tip.open("删除成功！");
                        }else{
                            Tip.open("删除出错 "+ result.message +" ！");
                        }
                        that.delOrganizationCB.hide();
                        that.pagination.toFirstPage( true );
                    });
                }
            });
            this.delOrganizationCB.show();
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
            _.each(this.allCheckbox, function( checkbox ){
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
        createOrganization: function(){
            var that = this;
            this.organizationCollection.create(this.organizationForm.formData ,{
                success: function(model, response, options){
                    //添加成功时,重新render分页组件
                    if( response.state == 1 && !that.organizationForm.formData.careggOrgSeq ){
                        that.organizationCollection.paging.total = that.organizationCollection.paging.total + 1;
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
        },
        authOrganizationAssign: function(){
            var that = this;

            $.ajax(
                {
                url: CarEgg.constant.ROOT_PATH + '/opr/CareggOrg/authorize',
                type: 'post',
                data: JSON.stringify(this.authOrganizationForm.formData),
                contentType: "application/json; charset=utf-8",
                success: function(){
                    Tip.open("授权成功！", 1000);
                }
            });

        }

    });

    module.exports = MainPanel;

});