<div class="caregg-form">
    <form name="sysRoleForm">
        <div class="caregg-form-group">
            <label class="caregg-form-label">角色名称:</label><div class="caregg-form-content"><input type="text" name="roleCode" value="<%=  formData.roleName  %>"/></div>
        </div>
        <div class="caregg-form-group">
            <label class="caregg-form-label">角色权限:</label><div class="caregg-form-content"><input type="text" name="roleName" value="<%= edit ? formData.get("roleName"): "" %>"/></div>
        </div>
    </form>
</div>