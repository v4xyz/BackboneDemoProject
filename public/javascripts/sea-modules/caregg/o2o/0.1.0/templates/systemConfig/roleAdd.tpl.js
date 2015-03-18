define("caregg/o2o/0.1.0/templates/systemConfig/roleAdd.tpl",[],'<% edit = !_.isEmpty(role) %>\n<div class="caregg-form">\n    <form name="sysRoleForm">\n        <% if(edit){ %>\n        <input type="hidden" name="oprRoleSeq" value="<%= role.get("oprRoleSeq")%>"/>\n        <% } %>\n        <div class="caregg-form-group">\n            <label class="caregg-form-label">角色编码:</label><div class="caregg-form-content"><input type="text" name="roleCode" value="<%= edit ? role.get("roleCode"): ""  %>"/></div>\n        </div>\n        <div class="caregg-form-group">\n            <label class="caregg-form-label">角色名称:</label><div class="caregg-form-content"><input type="text" name="roleName" value="<%= edit ? role.get("roleName"): "" %>"/></div>\n        </div>\n        <div class="caregg-form-group">\n            <label class="caregg-form-label">角色描述:</label><div class="caregg-form-content"><textarea name="roleDesc"><%= edit ? role.get("roleDesc"): "" %></textarea></div>\n        </div>\n        <div class="caregg-form-group">\n            <a class="caregg-btn btn-submit">确认</a>  <a class="caregg-btn btn-cancel">取消</a>\n        </div>\n    </form>\n</div>');