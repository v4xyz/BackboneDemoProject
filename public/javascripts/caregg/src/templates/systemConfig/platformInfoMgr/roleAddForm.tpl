<% edit = !_.isEmpty(formData) %>
<div class="caregg-form">
    <form name="sysRoleForm">
        <% if(edit){ %>
        <input type="hidden" name="oprRoleSeq" value="<%= formData.get("oprRoleSeq")%>"/>
        <% } %>
        <div class="caregg-form-group">
            <label class="caregg-form-label">角色编码:</label><div class="caregg-form-content"><input type="text" name="roleCode" value="<%= edit ? formData.get("roleCode"): ""  %>"/></div>
        </div>
        <div class="caregg-form-group">
            <label class="caregg-form-label">角色名称:</label><div class="caregg-form-content"><input type="text" name="roleName" value="<%= edit ? formData.get("roleName"): "" %>"/></div>
        </div>
        <div class="caregg-form-group">
            <label class="caregg-form-label">角色描述:</label><div class="caregg-form-content"><textarea name="roleDesc"><%= edit ? formData.get("roleDesc"): "" %></textarea></div>
        </div>
    </form>
</div>