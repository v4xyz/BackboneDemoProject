define("caregg/o2o/0.1.0/templates/systemConfig/platformInfoMgr/roleAddForm.tpl",[],'<% edit = !_.isEmpty(formData) %>\n<div class="caregg-form">\n    <form name="sysRoleForm">\n        <% if(edit){ %>\n        <input type="hidden" name="oprRoleSeq" value="<%= formData.get("oprRoleSeq")%>"/>\n        <% } %>\n        <div class="caregg-form-group">\n            <label class="caregg-form-label">角色编码:</label><div class="caregg-form-content"><input type="text" name="roleCode" value="<%= edit ? formData.get("roleCode"): ""  %>"/></div>\n        </div>\n        <div class="caregg-form-group">\n            <label class="caregg-form-label">角色名称:</label><div class="caregg-form-content"><input type="text" name="roleName" value="<%= edit ? formData.get("roleName"): "" %>"/></div>\n        </div>\n        <div class="caregg-form-group">\n            <label class="caregg-form-label">角色描述:</label><div class="caregg-form-content"><textarea name="roleDesc"><%= edit ? formData.get("roleDesc"): "" %></textarea></div>\n        </div>\n    </form>\n</div>');