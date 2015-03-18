<table class="ui-table">
    <thead>
    <tr><td style="width: 22px"></td><td><input type="checkbox" data-action="checkAll">全选</td><td>角色代码</td><td>角色名称</td><td>角色描述</td></tr>
    </thead>
    <tbody>
    <% for(var i= 0,m=roles.length ; i<pageSize; i++){ %>
        <% if( i < m ){ %>
            <tr><td><%= i+1%></td><td><input type="checkbox" data-id="<%= roles[i].get("oprRoleSeq") %>"></td><td><%= roles[i].get("roleCode") %></td><td><%= roles[i].get("roleName") %></td><td><%= roles[i].get("roleDesc") %></td></tr>
        <% }else{ %>
            <tr><td><%= i+1%></td><td></td><td></td><td></td><td></td></tr>
        <% } %>
    <% } %>
    </tbody>
    <tfoot>
    <tr><td></td><td><input type="checkbox" data-action="checkAll">全选</td><td colspan="3"></td></tr>
    </tfoot>
</table>