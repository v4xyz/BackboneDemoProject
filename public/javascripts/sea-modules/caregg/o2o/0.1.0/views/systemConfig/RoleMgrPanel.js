define("caregg/o2o/0.1.0/views/systemConfig/RoleMgrPanel",["jquery/1.10.1/jquery","underscore/1.6.0/underscore","CarEgg","..\\..\\collections\\systemConfig\\RoleCollection","..\\..\\models\\systemConfig\\Role","..\\common\\Pagination","..\\..\\templates\\common\\pagination.tpl","arale-dialog/1.5.0/dialog","jquery/1.7.2/jquery","arale-overlay/1.2.0/overlay","position/1.1.0/index","arale-iframe-shim/1.1.0/index","arale-widget/1.2.0/widget","arale-base/1.2.0/base","arale-class/1.2.0/class","arale-events/1.2.0/events","arale-templatable/0.10.0/src/templatable","handlebars/1.3.0/dist/cjs/handlebars","arale-messenger/2.1.0/index","..\\..\\templates\\systemConfig\\rolesTable.tpl","..\\..\\templates\\systemConfig\\roleAddForm.tpl","..\\..\\templates\\systemConfig\\roleMgrPanel.tpl"],function(require,exports,module){var $=require("jquery/1.10.1/jquery"),_=require("underscore/1.6.0/underscore"),CarEgg=require("CarEgg"),RoleCollection=require("../.././collections/systemConfig/RoleCollection"),Pagination=require("../common/Pagination"),Dialog=require("arale-dialog/1.5.0/dialog"),Tip=CarEgg.utils.tip,idSep="_",RolesTableView=CarEgg.View.extend({el:".table-container",template:_.template(require("../.././templates/systemConfig/rolesTable.tpl")),render:function(roles,pageSize){$(this.el).html(this.template({roles:roles,pageSize:pageSize,_:_}))}}),RoleView=CarEgg.View.extend({el:"#roleForm",popMode:!0,events:{"click a.btn-cancel":"cancelForm","click a.btn-submit":"submitForm"},template:_.template(require("../.././templates/systemConfig/roleAddForm.tpl")),initialize:function(){},render:function(role){$(this.el).html(this.template({role:role}))},cancelForm:function(){this.hide(),this.trigger("cancelForm")},submitForm:function(){var dataForm=this.$el.find("form");this.formData=CarEgg.utils.toJSON(decodeURIComponent(dataForm.serialize())),this.hide(),this.trigger("submitForm")}}),MainPanel=CarEgg.View.extend({el:"#businessPanel",template:_.template(require("../.././templates/systemConfig/roleMgrPanel.tpl")),events:{"click a[data-action=addRole]":"addRole","click a[data-action=authRole]":"authRole","click a[data-action=editRole]":"editRole","click a[data-action=delRole]":"delRole","click input[data-action=checkAll]":"checkAll","click input[data-id][type=checkbox]":"checkOne"},initialize:function(){this.roleCollection=this.roleCollection||new RoleCollection},render:function(params){var pageOpt={};pageOpt.page=params&&params.page||1,pageOpt.rows=params&&params.rows||5,this.rolesTable||this.loadData(pageOpt)},loadData:function(pageOpt){var that=this;that.roleCollection.fetch({success:function(roles){$(that.el).html(that.template()),that.rolesTable=that.rolesTable||new RolesTableView,that.rolesTable.render(roles.models,that.roleCollection.paging.pageSize),that.checkedIds="",that.pagination=that.pagination||new Pagination({collection:that.roleCollection}),that.pagination.render(),that.listenTo(that.roleCollection,"paging",function(){that.checkedIds="",that.rolesTable.render(that.roleCollection.models,that.roleCollection.paging.pageSize)})},error:function(err){console.log(err)},data:pageOpt})},addRole:function(){this.roleForm||(this.roleForm=new RoleView,this.listenTo(this.roleForm,"submitForm",this.createRole)),this.roleForm.render(),this.roleForm.show()},authRole:function(){},editRole:function(){var ids=this.checkedIds.substr(1).split(idSep);ids.length>1?Tip.open("每次只能修改一条记录！",1e3):""==ids[0]?Tip.open("请选择一条记录修改！",1e3):(this.roleForm||(this.roleForm=new RoleView,this.listenTo(this.roleForm,"submitForm",this.createRole)),this.roleForm.render(this.roleCollection.get(ids[0])),this.roleForm.show())},delRole:function(){var that=this;return""==that.checkedIds?(Tip.open("请选择要删除的角色!"),!1):(this.delRoleCB=this.delRoleCB||new Dialog.ConfirmBox({title:"角色删除",message:"确认删除所选择的角色",onConfirm:function(){that.roleCollection["delete"](that.checkedIds.substr(1),!1,function(result){Tip.open((result.state=1)?"删除成功！":"删除出错 "+result.message+" ！"),that.delRoleCB.hide(),that.pagination.toFirstPage(!0)})}}),void this.delRoleCB.show())},checkOne:function(event){var checkbox=this.$(event.target||event.srcElement)[0];this.checkedIds=checkbox.checked?this.checkedIds+idSep+this.$(checkbox).data("id"):this.checkedIds.replace(idSep+this.$(checkbox).data("id"),""),console.log(this.checkedIds)},checkAll:function(event){var allCheckbox=this.$(event.target||event.srcElement)[0];_.each(this.$("input[data-action=checkAll]"),function(checkbox){checkbox.checked=allCheckbox.checked}),this.checkedIds="";var that=this;allCheckbox.checked?_.each(this.$("input[data-id]"),function(checkbox){checkbox.checked=!0,that.checkedIds=that.checkedIds+idSep+$(checkbox).data("id")}):_.each(this.$("input[data-id]"),function(checkbox){checkbox.checked=!1}),console.log(this.checkedIds)},createRole:function(){var that=this;this.roleCollection.create(this.roleForm.formData,{success:function(model,response){1!=response.state||that.roleForm.formData.oprRoleSeq?that.pagination.toCurPage():(that.roleCollection.paging.total=that.roleCollection.paging.total+1,that.pagination.render(),that.pagination.toLastPage(!0))},wait:!0})}});module.exports=MainPanel}),define("caregg/o2o/0.1.0/collections/systemConfig/RoleCollection",["jquery/1.10.1/jquery","underscore/1.6.0/underscore","CarEgg","caregg/o2o/0.1.0/models/systemConfig/Role"],function(require,exports,module){var CarEgg=(require("jquery/1.10.1/jquery"),require("underscore/1.6.0/underscore"),require("CarEgg")),Role=require("caregg/o2o/0.1.0/models/systemConfig/Role"),RoleCollection=CarEgg.Collection.extend({url:CarEgg.constant.ROOT_PATH+"/opr/OprRole",model:Role});module.exports=RoleCollection}),define("caregg/o2o/0.1.0/models/systemConfig/Role",["jquery/1.10.1/jquery","underscore/1.6.0/underscore","CarEgg"],function(require,exports,module){var CarEgg=(require("jquery/1.10.1/jquery"),require("underscore/1.6.0/underscore"),require("CarEgg")),Role=CarEgg.Model.extend({defaults:{roleCode:"",roleName:"",roleDesc:""},idAttribute:"oprRoleSeq"});module.exports=Role}),define("caregg/o2o/0.1.0/views/common/Pagination",["jquery/1.10.1/jquery","underscore/1.6.0/underscore","CarEgg"],function(require,exports,module){var $=require("jquery/1.10.1/jquery"),_=require("underscore/1.6.0/underscore"),CarEgg=require("CarEgg"),Pagination=CarEgg.View.extend({el:".pagination-container",template:_.template(require("caregg/o2o/0.1.0/templates/common/pagination.tpl")),aa:"",events:{"click .ui-paging-next":"toNextPage","click .ui-paging-prev":"toPrevPage","click .ui-paging-first":"toFirstPage","click .ui-paging-last":"toLastPage","click .ui-paging-item":"toPageAt"},render:function(){console.log(this.collection.paging),$(this.el).html(this.template({paging:this.collection.paging,_:_}))},getPageIndex:function(){},toNextPage:function(){var curPage=this.$el.find(".ui-paging-current"),that=this,lastIndex=Math.ceil(that.collection.paging.total/(0==that.collection.paging.pageSize?1:that.collection.paging.pageSize))+"";curPage.text()!=lastIndex&&this.collection.fetch({success:function(){that.collection.trigger("paging"),that.render()},error:function(err){console.log("获取分页数据失败！"),console.log(err)},data:{page:parseInt(curPage.text())+1,rows:that.collection.paging.pageSize}})},toPrevPage:function(){var curPage=this.$el.find(".ui-paging-current"),that=this;"1"!=curPage.text()&&this.collection.fetch({success:function(){that.collection.trigger("paging"),that.render()},error:function(err){console.log("获取分页数据失败！"),console.log(err)},data:{page:parseInt(curPage.text())-1,rows:that.collection.paging.pageSize}})},toFirstPage:function(reload){var curPage=this.$el.find(".ui-paging-current"),that=this;(reload||"1"!=curPage.text())&&this.collection.fetch({success:function(){that.collection.trigger("paging"),that.render()},error:function(err){console.log("获取分页数据失败！"),console.log(err)},data:{page:1,rows:that.collection.paging.pageSize}})},toLastPage:function(reload){var curPage=this.$el.find(".ui-paging-current"),that=this,lastIndex=Math.ceil(that.collection.paging.total/(0==that.collection.paging.pageSize?1:that.collection.paging.pageSize))+"";(reload||curPage.text()!=lastIndex)&&this.collection.fetch({success:function(){that.collection.trigger("paging"),that.render()},error:function(err){console.log("获取分页数据失败！"),console.log(err)},data:{page:lastIndex,rows:that.collection.paging.pageSize}})},toPageAt:function(event){var curPage=$(event.target||event.srcElement);if(!curPage.hasClass("ui-paging-current")){curPage.addClass("ui-paging-current").siblings().removeClass("ui-paging-current");var that=this;this.collection.fetch({success:function(){that.collection.trigger("paging"),that.render()},error:function(err){console.log("获取分页数据失败！"),console.log(err)},data:{page:curPage.text(),rows:that.collection.paging.pageSize}})}},toCurPage:function(){var curPage=this.$el.find(".ui-paging-current"),that=this;this.collection.fetch({success:function(){that.collection.trigger("paging"),that.render()},error:function(err){console.log("获取分页数据失败！"),console.log(err)},data:{page:parseInt(curPage.text()),rows:that.collection.paging.pageSize}})}});module.exports=Pagination}),define("caregg/o2o/0.1.0/templates/common/pagination.tpl",[],'<% paging.pageCount = Math.ceil(paging.total/(paging.pageSize == 0 ? 1: paging.pageSize))  %>\n<div class="ui-paging-info">\n    <div class="dataTables-info">当前在第 <%= paging.pageIndex %> 页 每页 <%= paging.pageSize %> 条 总页数 <%= paging.pageCount %> 页</div>\n</div>\n<% if( paging.pageCount > 1){ %>\n<div class="ui-paging">\n    <a class="ui-paging-first" href="javascript:void(0);">首页</a>\n    <a class="ui-paging-prev"  href="javascript:void(0);">上一页</a>\n\n    <% for(var i = 1; i <= paging.pageCount; i++){ %>\n\n        <% if( paging.pageIndex < 5 && paging.pageCount > 9 ){ %>\n            <% if( i == 7 ){ %>\n                <a class="ui-paging-more-next" href="javascript:void(0);">...</a>\n            <% }else if( i == 8 ){ %>\n                <a class="ui-paging-item" href="javascript:void(0);"><%= paging.pageCount %></a>\n                <% break; %>\n            <% }else{ %>\n                <a class="ui-paging-item <%= paging.pageIndex == i  ? "ui-paging-current": "" %>" href="javascript:void(0);"><%= i  %></a>\n            <% } %>\n        <% } %>\n\n        <% if(  paging.pageCount - paging.pageIndex < 4 && paging.pageCount > 9 ){ %>\n            <% if( i == 1 ){ %>\n                <a class="ui-paging-item" href="javascript:void(0);">1</a>\n            <% }else if( i == 2 ){ %>\n                <a class="ui-paging-more-prev" href="javascript:void(0);">...</a>\n            <% }else if( i > paging.pageCount - 6 ){ %>\n                <a class="ui-paging-item <%= paging.pageIndex == i  ? "ui-paging-current": "" %>" href="javascript:void(0);"><%= i  %></a>\n            <% } %>\n        <% } %>\n\n        <% if(  paging.pageIndex > 4 && paging.pageCount - paging.pageIndex > 3 && paging.pageCount > 9  ){ %>\n            <% if( i == 1 ){ %>\n                <a class="ui-paging-item" href="javascript:void(0);">1</a>\n            <% }else if( i == 2 ){ %>\n                <a class="ui-paging-more-prev" href="javascript:void(0);">...</a>\n            <% }else if( i > paging.pageIndex - 3 && i < paging.pageIndex + 3 ){ %>\n                <a class="ui-paging-item <%= paging.pageIndex == i  ? "ui-paging-current": "" %>" href="javascript:void(0);"><%= i  %></a>\n            <% }else if( i == paging.pageCount - 1  ){ %>\n                <a class="ui-paging-more-next" href="javascript:void(0);">...</a>\n            <% }else if( i == paging.pageCount ){ %>\n                <a class="ui-paging-item" href="javascript:void(0);"><%= paging.pageCount %></a>\n            <% } %>\n        <% } %>\n\n        <% if( paging.pageCount < 10 ){ %>\n            <a class="ui-paging-item <%= paging.pageIndex == i  ? "ui-paging-current": "" %>" href="javascript:void(0);"><%= i  %></a>\n        <% }%>\n\n    <% } %>\n\n    <a class="ui-paging-next" href="javascript:void(0);">下一页</a>\n    <a class="ui-paging-last" href="javascript:void(0);">末页</a>\n</div>\n<% } %>\n'),define("caregg/o2o/0.1.0/templates/systemConfig/rolesTable.tpl",[],'<table class="ui-table">\n    <thead>\n    <tr><td style="width: 22px"></td><td><input type="checkbox" data-action="checkAll">全选</td><td>角色代码</td><td>角色名称</td><td>角色描述</td></tr>\n    </thead>\n    <tbody>\n    <% for(var i= 0,m=roles.length ; i<pageSize; i++){ %>\n        <% if( i < m ){ %>\n            <tr><td><%= i+1%></td><td><input type="checkbox" data-id="<%= roles[i].get("oprRoleSeq") %>"></td><td><%= roles[i].get("roleCode") %></td><td><%= roles[i].get("roleName") %></td><td><%= roles[i].get("roleDesc") %></td></tr>\n        <% }else{ %>\n            <tr><td><%= i+1%></td><td></td><td></td><td></td><td></td></tr>\n        <% } %>\n    <% } %>\n    </tbody>\n    <tfoot>\n    <tr><td></td><td><input type="checkbox" data-action="checkAll">全选</td><td colspan="3"></td></tr>\n    </tfoot>\n</table>'),define("caregg/o2o/0.1.0/templates/systemConfig/roleAddForm.tpl",[],'<% edit = !_.isEmpty(role) %>\n<div class="caregg-form">\n    <form name="sysRoleForm">\n        <% if(edit){ %>\n        <input type="hidden" name="oprRoleSeq" value="<%= role.get("oprRoleSeq")%>"/>\n        <% } %>\n        <div class="caregg-form-group">\n            <label class="caregg-form-label">角色编码:</label><div class="caregg-form-content"><input type="text" name="roleCode" value="<%= edit ? role.get("roleCode"): ""  %>"/></div>\n        </div>\n        <div class="caregg-form-group">\n            <label class="caregg-form-label">角色名称:</label><div class="caregg-form-content"><input type="text" name="roleName" value="<%= edit ? role.get("roleName"): "" %>"/></div>\n        </div>\n        <div class="caregg-form-group">\n            <label class="caregg-form-label">角色描述:</label><div class="caregg-form-content"><textarea name="roleDesc"><%= edit ? role.get("roleDesc"): "" %></textarea></div>\n        </div>\n        <div class="caregg-form-group">\n            <a class="caregg-btn btn-submit">确认</a>  <a class="caregg-btn btn-cancel">取消</a>\n        </div>\n    </form>\n</div>'),define("caregg/o2o/0.1.0/templates/systemConfig/roleMgrPanel.tpl",[],'<div class="businessPanelWrap">\n    <div class="tip-container">\n        <span class="fn-left">当前位置：</span>\n        <div class="caregg-breadcrumb fn-left">\n            <ol class="fn-clearfix">\n                <li><a href="">配置</a></li>\n                <li><a href="">系统设置</a></li>\n                <li class="active" ><a href="">角色管理</a></li>\n            </ol>\n        </div>\n    </div>\n    <div class="caregg-tab-v8" id="main-child-tab">\n        <div class="tool-bar fn-clearfix">\n            <a class="caregg-btn" data-action="addRole" title="新增" href="javascript:void(0);">新增</a>\n            <a class="caregg-btn" data-action="authRole" title="授权" href="javascript:void(0);">授权</a>\n            <a class="caregg-btn" data-action="editRole" title="修改" href="javascript:void(0);">修改</a>\n            <a class="caregg-btn" data-action="delRole" title="删除" href="javascript:void(0);">删除</a>\n        </div>\n        <div class="fn-hide" id="roleForm">\n        </div>\n        <div class="table-container">\n        </div>\n        <div class="pagination-container">\n        </div>\n\n    </div>\n</div>');