define(function(require, exports, module) {

    var $ = require('$');
    var _ = require('_');
    var CarEgg = require('CarEgg');
    var BusinessOrgCollection = require("../../../collections/systemConfig/userInfoMgr/BusinessOrgCollection");
    var Pagination = require("../../common/Pagination");
    var Tip =  CarEgg.utils.tip;
    var idSep = "_";//id分隔符

    //商家组织表格视图 用来显示商家组织数据
    var BusinessOrgsTableView = CarEgg.View.extend({
        el: '.table-container',
        template: _.template(require("../../../templates/systemConfig/userInfoMgr/businessOrgsTable.tpl")),
        render: function( businessOrgs, pageSize ){
            $(this.el).html(this.template({ businessOrgs: businessOrgs, pageSize: pageSize, _:_ }));
        }
    });

    //商家组织视图 用来新建和修改商家组织
    var BusinessOrgView = CarEgg.View.extend({
        el: '#businessOrgForm',
        tile: "商家组织",
        popMode: true,
        events: {
            "click a.btn-cancel": "cancelForm",
            "click a.btn-submit": "submitForm"
        },
        template: _.template(require('../../../templates/systemConfig/userInfoMgr/businessOrgAddForm.tpl')),
        popFormWarpTemplate: _.template(require('../../../templates/common/popFormWrap.tpl')),
        initialize:function(){

        },
        render: function( businessOrg ){
//            $(this.el).html(this.template( {businessOrg:businessOrg} ));
            $(this.el).html(this.popFormWarpTemplate( { title: this.title, formData: businessOrg, template: this.template} ));
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


    //商家组织面板主视图
    var MainPanel = CarEgg.View.extend({
        el:  "#businessPanel .businessPanelWrap",
        template :  _.template(require('../../../templates/systemConfig/userInfoMgr/businessOrgMgrPanel.tpl')),
        events:{
            "click a[data-action=addBusinessOrg]": "addBusinessOrg",
            "click a[data-action=authBusinessOrg]": "authBusinessOrg",
            "click a[data-action=editBusinessOrg]": "editBusinessOrg",
            "click a[data-action=delBusinessOrg]": "delBusinessOrg",
            "click input[data-action=checkAll]": "checkAll",
            "click input[data-id][type=checkbox]": "checkOne"
        },
        initialize: function() {
            this.BusinessOrgCollection = this.BusinessOrgCollection || new BusinessOrgCollection();
        },
        render: function ( params ) {
            var pageOpt = {};
            pageOpt.page = params && params.page || 1;
            pageOpt.rows = params && params.rows || 5;
            if( !this.businessOrgsTable ){
                this.loadData( pageOpt );
            }
        },
        loadData : function( pageOpt ){
            var that = this;
            that.BusinessOrgCollection.fetch({
                success: function( businessOrgs ){
                    //显示业务面板
                    $(that.el).html(that.template());
                    //填充表格数据
                    that.businessOrgsTable = that.businessOrgsTable || new BusinessOrgsTableView();
                    that.businessOrgsTable.render( businessOrgs.models, that.BusinessOrgCollection.paging.pageSize );
                    that.allCheckbox = that.$("input[data-action=checkAll]");
                    that.checkedIds = '';
                    //初始化分页组件
                    that.pagination = that.pagination || new Pagination({collection: that.BusinessOrgCollection});
                    that.pagination.render();
                    that.listenTo(that.BusinessOrgCollection, "paging", function(){
                        that.checkedIds = '';
                        that.businessOrgsTable.render( that.BusinessOrgCollection.models, that.BusinessOrgCollection.paging.pageSize );
                    });
                },
                error: function( err ){
                    console.log( err );
                },
                data: pageOpt
            });
        },
        addBusinessOrg: function(){
            if( !this.businessOrgForm ){
                //指定表单视图
                this.businessOrgForm = new BusinessOrgView();
                //监听表单的 submitForm 事件
                this.listenTo(this.businessOrgForm, "submitForm", this.createBusinessOrg );
            }
            this.businessOrgForm.render();
            this.businessOrgForm.show();
        },
        authBusinessOrg: function(){

        },
        editBusinessOrg: function(){
            var ids = this.checkedIds.substr(1).split(idSep);
            if( ids.length > 1 ){
                Tip.open("每次只能修改一条记录！", 1000);
            }else if( ids[0] == "" ){
                Tip.open("请选择一条记录修改！", 1000);
            }else{
                //Tip.open("修改记录的ID为 " + ids[0] , 1000);
                if( !this.businessOrgForm ){
                    //指定表单视图
                    this.businessOrgForm = new BusinessOrgView();
                    //监听表单的 submitForm 事件
                    this.listenTo(this.businessOrgForm, "submitForm", this.createBusinessOrg );
                }
                this.businessOrgForm.render(this.BusinessOrgCollection.get(ids[0]));
                this.businessOrgForm.show();
            }

        },
        delBusinessOrg: function(){

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
        createBusinessOrg: function(){
            var that = this;
            this.BusinessOrgCollection.create(this.businessOrgForm.formData ,{
                success: function(model, response, options){
                    //添加成功时,重新render分页组件
                    if( response.state == 1 && !that.businessOrgForm.formData.serviceOrgSeq ){
                        that.BusinessOrgCollection.paging.total = that.BusinessOrgCollection.paging.total + 1;
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