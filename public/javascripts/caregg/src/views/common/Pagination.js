define(function(require, exports, module) {

    var $ = require('$');
    var _ = require('_');
    var Spinner = require("spin");
    var CarEgg = require('CarEgg');

    var Pagination = CarEgg.View.extend({
        el:  ".pagination-container",
        template : _.template(require('../../templates/common/pagination.tpl')),
        aa:'',
        events: {
            "click .ui-paging-next": "toNextPage",
            "click .ui-paging-prev": "toPrevPage",
            "click .ui-paging-first": "toFirstPage",
            "click .ui-paging-last": "toLastPage",
            "click .ui-paging-item": "toPageAt"
        },
        render: function() {
            console.log(this.collection.paging);
            $(this.el).html(this.template({ paging: this.collection.paging, _:_ }));
        },
        _getPageIndex: function(){

        },
        _getPage: function( pageIndex ){
            var that = this;
            this.spinner = this.spinner || new Spinner();
            this.spinner.spin( this.$el.find(".ui-paging-current")[0] );
            this.collection.fetch({
                success: function(){
                    that.collection.trigger("paging");
                    that.render();
                    that.spinner.stop();
                },
                error: function(err){
                    that.spinner.stop();
                    console.log("获取分页数据失败！");
                    console.log(err);
                },
                data:{page: pageIndex, rows: that.collection.paging.pageSize}
            });

        },
        toNextPage: function(){
            var curPage = this.$el.find(".ui-paging-current");
            var that = this;
            var lastIndex = Math.ceil(that.collection.paging.total/(that.collection.paging.pageSize == 0 ? 1: that.collection.paging.pageSize)) + "";
            if( curPage.text() !=  lastIndex ){
                this._getPage( parseInt(curPage.text())+1 );
            }
        },
        toPrevPage: function( ){
            var curPage = this.$el.find(".ui-paging-current");
            var that = this;
            if( curPage.text() != "1" ){
                this._getPage( parseInt(curPage.text())-1 );
            }
        },
        toFirstPage: function( reload ){
            var curPage = this.$el.find(".ui-paging-current");
            var that = this;
            if( reload || curPage.text() != "1" ){
                this._getPage( 1 );
            }
        },
        toLastPage: function( reload ){
            var curPage = this.$el.find(".ui-paging-current");
            var that = this;
            var lastIndex = Math.ceil(that.collection.paging.total/(that.collection.paging.pageSize == 0 ? 1: that.collection.paging.pageSize)) + "";
            if( reload || curPage.text() !=  lastIndex ){
                this._getPage( lastIndex );
            }
        },
        toPageAt: function(event){
            var curPage = $( event.target || event.srcElement );
            //重复点击当前页时不重复请求数据
            if( !curPage.hasClass("ui-paging-current") ){
                curPage.addClass("ui-paging-current").siblings().removeClass("ui-paging-current");
                var that = this;
                this._getPage(curPage.text());
            }
        },
        toCurPage: function(){
            var curPage = this.$el.find(".ui-paging-current");
            if( curPage ){
                var that = this;
                this._getPage( parseInt(curPage.text()) );
            }
        }
    });

    module.exports = Pagination;

});