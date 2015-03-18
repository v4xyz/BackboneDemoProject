define("caregg/o2o/0.1.0/views/common/Pagination",["jquery/1.10.1/jquery","underscore/1.6.0/underscore","spin.js/2.0.1/spin","CarEgg","..\\..\\templates\\common\\pagination.tpl"],function(require,exports,module){var $=require("jquery/1.10.1/jquery"),_=require("underscore/1.6.0/underscore"),Spinner=require("spin.js/2.0.1/spin"),CarEgg=require("CarEgg"),Pagination=CarEgg.View.extend({el:".pagination-container",template:_.template(require("../../templates/common/pagination.tpl")),aa:"",events:{"click .ui-paging-next":"toNextPage","click .ui-paging-prev":"toPrevPage","click .ui-paging-first":"toFirstPage","click .ui-paging-last":"toLastPage","click .ui-paging-item":"toPageAt"},render:function(){console.log(this.collection.paging),$(this.el).html(this.template({paging:this.collection.paging,_:_}))},_getPageIndex:function(){},_getPage:function(pageIndex){var that=this;this.spinner=this.spinner||new Spinner,this.spinner.spin(this.$el.find(".ui-paging-current")[0]),this.collection.fetch({success:function(){that.collection.trigger("paging"),that.render(),that.spinner.stop()},error:function(err){that.spinner.stop(),console.log("获取分页数据失败！"),console.log(err)},data:{page:pageIndex,rows:that.collection.paging.pageSize}})},toNextPage:function(){var curPage=this.$el.find(".ui-paging-current"),that=this,lastIndex=Math.ceil(that.collection.paging.total/(0==that.collection.paging.pageSize?1:that.collection.paging.pageSize))+"";curPage.text()!=lastIndex&&this._getPage(parseInt(curPage.text())+1)},toPrevPage:function(){var curPage=this.$el.find(".ui-paging-current");"1"!=curPage.text()&&this._getPage(parseInt(curPage.text())-1)},toFirstPage:function(reload){var curPage=this.$el.find(".ui-paging-current");(reload||"1"!=curPage.text())&&this._getPage(1)},toLastPage:function(reload){var curPage=this.$el.find(".ui-paging-current"),that=this,lastIndex=Math.ceil(that.collection.paging.total/(0==that.collection.paging.pageSize?1:that.collection.paging.pageSize))+"";(reload||curPage.text()!=lastIndex)&&this._getPage(lastIndex)},toPageAt:function(event){var curPage=$(event.target||event.srcElement);if(!curPage.hasClass("ui-paging-current")){curPage.addClass("ui-paging-current").siblings().removeClass("ui-paging-current");this._getPage(curPage.text())}},toCurPage:function(){var curPage=this.$el.find(".ui-paging-current");if(curPage){this._getPage(parseInt(curPage.text()))}}});module.exports=Pagination}),define("caregg/o2o/0.1.0/templates/common/pagination.tpl",[],'<% paging.pageCount = Math.ceil(paging.total/(paging.pageSize == 0 ? 1: paging.pageSize))  %>\n<div class="ui-paging-info">\n    <div class="dataTables-info">当前在第 <%= paging.pageIndex %> 页 每页 <%= paging.pageSize %> 条 总页数 <%= paging.pageCount %> 页</div>\n</div>\n<% if( paging.pageCount > 1){ %>\n<div class="ui-paging">\n    <a class="ui-paging-first" href="javascript:void(0);">首页</a>\n    <a class="ui-paging-prev"  href="javascript:void(0);">上一页</a>\n\n    <% for(var i = 1; i <= paging.pageCount; i++){ %>\n\n        <% if( paging.pageIndex < 5 && paging.pageCount > 9 ){ %>\n            <% if( i == 7 ){ %>\n                <a class="ui-paging-more-next" href="javascript:void(0);">...</a>\n            <% }else if( i == 8 ){ %>\n                <a class="ui-paging-item" href="javascript:void(0);"><%= paging.pageCount %></a>\n                <% break; %>\n            <% }else{ %>\n                <a class="ui-paging-item <%= paging.pageIndex == i  ? "ui-paging-current": "" %>" href="javascript:void(0);"><%= i  %></a>\n            <% } %>\n        <% } %>\n\n        <% if(  paging.pageCount - paging.pageIndex < 4 && paging.pageCount > 9 ){ %>\n            <% if( i == 1 ){ %>\n                <a class="ui-paging-item" href="javascript:void(0);">1</a>\n            <% }else if( i == 2 ){ %>\n                <a class="ui-paging-more-prev" href="javascript:void(0);">...</a>\n            <% }else if( i > paging.pageCount - 6 ){ %>\n                <a class="ui-paging-item <%= paging.pageIndex == i  ? "ui-paging-current": "" %>" href="javascript:void(0);"><%= i  %></a>\n            <% } %>\n        <% } %>\n\n        <% if(  paging.pageIndex > 4 && paging.pageCount - paging.pageIndex > 3 && paging.pageCount > 9  ){ %>\n            <% if( i == 1 ){ %>\n                <a class="ui-paging-item" href="javascript:void(0);">1</a>\n            <% }else if( i == 2 ){ %>\n                <a class="ui-paging-more-prev" href="javascript:void(0);">...</a>\n            <% }else if( i > paging.pageIndex - 3 && i < paging.pageIndex + 3 ){ %>\n                <a class="ui-paging-item <%= paging.pageIndex == i  ? "ui-paging-current": "" %>" href="javascript:void(0);"><%= i  %></a>\n            <% }else if( i == paging.pageCount - 1  ){ %>\n                <a class="ui-paging-more-next" href="javascript:void(0);">...</a>\n            <% }else if( i == paging.pageCount ){ %>\n                <a class="ui-paging-item" href="javascript:void(0);"><%= paging.pageCount %></a>\n            <% } %>\n        <% } %>\n\n        <% if( paging.pageCount < 10 ){ %>\n            <a class="ui-paging-item <%= paging.pageIndex == i  ? "ui-paging-current": "" %>" href="javascript:void(0);"><%= i  %></a>\n        <% }%>\n\n    <% } %>\n\n    <a class="ui-paging-next" href="javascript:void(0);">下一页</a>\n    <a class="ui-paging-last" href="javascript:void(0);">末页</a>\n</div>\n<% } %>\n');