<table class="ui-table">
    <thead>
    <tr><td><input type="checkbox" data-action="checkAll">全选</td><td>商家名称 </td><td>商家代码</td><td>联系人</td><td>联系电话</td><td>结算周期</td><td>服务类型</td><td>商家级别</td><td>上级组织</td><td>位置区域</td><td>商家状态</td></tr>
    </thead>
    <tbody>
    <% for(var i= 0,m=businessOrgs.length ; i<pageSize; i++){ %>
    <% if( i < m ){ %>
    <tr>
        <td><input type="checkbox" data-id="<%= businessOrgs[i].get("serviceOrgSeq") %>"></td>
        <td><%= businessOrgs[i].get("chineseName") %></td>
        <td><%= businessOrgs[i].get("serviceOrgCode") %></td>
        <td><%= businessOrgs[i].get("careggContactPerson") %></td>
        <td><%= businessOrgs[i].get("careggTel") %></td>
        <td><%= businessOrgs[i].get("settleDayTypeSeq") %></td>
        <td><%= businessOrgs[i].get("orgTypeSeq") %></td>
        <td><%= businessOrgs[i].get("serviceOrgLevel") %></td>
        <td><%= businessOrgs[i].get("upServiceOrgSeq") %></td>
        <td><%= businessOrgs[i].get("primaryAddr") %></td>
        <td><%= businessOrgs[i].get("serviceOrgStatus") %></td>
    </tr>
    <% }%>
    <% } %>
    </tbody>
    <tfoot>

    </tfoot>
</table>