<table class="ui-table">
    <thead>
    <tr><td style="width: 22px"></td><td><input type="checkbox" data-action="checkAll">全选</td><td>组织名称</td><td>组织代码</td><td>联系人</td><td>联系电话</td><td>电子邮箱</td><td>组织级别</td><td>上级组织</td><td>组织状态</td></tr>
    </thead>
    <tbody>
    <% for(var i= 0,m=organizations.length ; i<pageSize; i++){ %>
    <% if( i < m ){ %>
    <tr><td><%= i+1%></td><td><input type="checkbox" data-id="<%= organizations[i].get("careggOrgSeq") %>"></td><td><%= organizations[i].get("chineseName") %></td><td><%= organizations[i].get("careggOrgCode") %></td><td><%= organizations[i].get("careggContactPerson") %></td><td><%= organizations[i].get("careggTel") %></td><td><%= organizations[i].get("careggEmail") %></td><td><%= organizations[i].get("careggOrgLevel") %></td><td><%= organizations[i].get("upCareggOrgSeq") %></td><td><%= organizations[i].get("orgStatus") %></td></tr>
    <% }else{ %>
    <tr><td><%= i+1%></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <% } %>
    <% } %>
    </tbody>
    <tfoot>
    <tr><td></td><td><input type="checkbox" data-action="checkAll">全选</td><td colspan="8"></td></tr>
    </tfoot>
</table>