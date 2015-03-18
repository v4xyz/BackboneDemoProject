<% paging.pageCount = Math.ceil(paging.total/(paging.pageSize == 0 ? 1: paging.pageSize))  %>
<div class="ui-paging-info">
    <div class="dataTables-info">当前在第 <%= paging.pageIndex %> 页 每页 <%= paging.pageSize %> 条 总页数 <%= paging.pageCount %> 页</div>
</div>
<% if( paging.pageCount > 1){ %>
<div class="ui-paging">
    <a class="ui-paging-first" href="javascript:void(0);">首页</a>
    <a class="ui-paging-prev"  href="javascript:void(0);">上一页</a>

    <% for(var i = 1; i <= paging.pageCount; i++){ %>

        <% if( paging.pageIndex < 5 && paging.pageCount > 9 ){ %>
            <% if( i == 7 ){ %>
                <a class="ui-paging-more-next" href="javascript:void(0);">...</a>
            <% }else if( i == 8 ){ %>
                <a class="ui-paging-item" href="javascript:void(0);"><%= paging.pageCount %></a>
                <% break; %>
            <% }else{ %>
                <a class="ui-paging-item <%= paging.pageIndex == i  ? "ui-paging-current": "" %>" href="javascript:void(0);"><%= i  %></a>
            <% } %>
        <% } %>

        <% if(  paging.pageCount - paging.pageIndex < 4 && paging.pageCount > 9 ){ %>
            <% if( i == 1 ){ %>
                <a class="ui-paging-item" href="javascript:void(0);">1</a>
            <% }else if( i == 2 ){ %>
                <a class="ui-paging-more-prev" href="javascript:void(0);">...</a>
            <% }else if( i > paging.pageCount - 6 ){ %>
                <a class="ui-paging-item <%= paging.pageIndex == i  ? "ui-paging-current": "" %>" href="javascript:void(0);"><%= i  %></a>
            <% } %>
        <% } %>

        <% if(  paging.pageIndex > 4 && paging.pageCount - paging.pageIndex > 3 && paging.pageCount > 9  ){ %>
            <% if( i == 1 ){ %>
                <a class="ui-paging-item" href="javascript:void(0);">1</a>
            <% }else if( i == 2 ){ %>
                <a class="ui-paging-more-prev" href="javascript:void(0);">...</a>
            <% }else if( i > paging.pageIndex - 3 && i < paging.pageIndex + 3 ){ %>
                <a class="ui-paging-item <%= paging.pageIndex == i  ? "ui-paging-current": "" %>" href="javascript:void(0);"><%= i  %></a>
            <% }else if( i == paging.pageCount - 1  ){ %>
                <a class="ui-paging-more-next" href="javascript:void(0);">...</a>
            <% }else if( i == paging.pageCount ){ %>
                <a class="ui-paging-item" href="javascript:void(0);"><%= paging.pageCount %></a>
            <% } %>
        <% } %>

        <% if( paging.pageCount < 10 ){ %>
            <a class="ui-paging-item <%= paging.pageIndex == i  ? "ui-paging-current": "" %>" href="javascript:void(0);"><%= i  %></a>
        <% }%>

    <% } %>

    <a class="ui-paging-next" href="javascript:void(0);">下一页</a>
    <a class="ui-paging-last" href="javascript:void(0);">末页</a>
</div>
<% } %>
