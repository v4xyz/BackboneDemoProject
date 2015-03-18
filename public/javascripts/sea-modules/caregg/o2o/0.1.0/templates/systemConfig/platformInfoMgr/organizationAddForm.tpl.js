define("caregg/o2o/0.1.0/templates/systemConfig/platformInfoMgr/organizationAddForm.tpl",[],'<% edit = !_.isEmpty(formData) %>\n<div class="caregg-form">\n    <form name="sysRoleForm">\n        <% if(edit){ %>\n        <input type="hidden" name="careggOrgSeq" value="<%= formData.get("careggOrgSeq")%>"/>\n        <% } %>\n        <div class="caregg-form-group">\n            <label class="caregg-form-label">组织名称:</label><div class="caregg-form-content"><input type="text" name="chineseName" value="<%= edit ? formData.get("chineseName"): ""  %>"/></div>\n        </div>\n        <div class="caregg-form-group">\n            <label class="caregg-form-label">组织代码:</label><div class="caregg-form-content"><input type="text" name="careggOrgCode" value="<%= edit ? formData.get("careggOrgCode"): "" %>"/></div>\n        </div>\n        <div class="caregg-form-group">\n            <label class="caregg-form-label">英文名称:</label><div class="caregg-form-content"><input type="text" name="englishName" value="<%= edit ? formData.get("careggContactPerson"): "" %>"/></div>\n        </div>\n        <div class="caregg-form-group">\n            <label class="caregg-form-label">联系人:</label><div class="caregg-form-content"><input type="text" name="careggContactPerson" value="<%= edit ? formData.get("careggContactPerson"): "" %>"/></div>\n        </div>\n        <div class="caregg-form-group">\n            <label class="caregg-form-label">联系电话:</label><div class="caregg-form-content"><input type="text" name="careggTel" value="<%= edit ? formData.get("careggTel"): "" %>"/></div>\n        </div>\n        <div class="caregg-form-group">\n            <label class="caregg-form-label">电子邮箱:</label><div class="caregg-form-content"><input type="text" name="careggEmail" value="<%= edit ? formData.get("careggEmail"): "" %>"/></div>\n        </div>\n\n        <div class="caregg-form-group">\n            <label class="caregg-form-label">主要地址:</label><div class="caregg-form-content"><textarea name="primaryAddr"><%= edit ? formData.get("primaryAddr"): "" %></textarea></div>\n        </div>\n        <div class="caregg-form-group">\n            <label class="caregg-form-label">次要地址:</label><div class="caregg-form-content"><textarea name="secondaryAddr"><%= edit ? formData.get("secondaryAddr"): "" %></textarea></div>\n        </div>\n        <div class="caregg-form-group">\n            <label class="caregg-form-label">组织类型:</label>\n            <div class="caregg-form-content caregg-form-orgTypeSeq">\n                <select name="orgTypeSeq">\n\n                </select>\n                <input id="orgTypeSeq_val" type="hidden" value="<%= edit ? formData.get(\'orgTypeSeq\'): \'\' %>" />\n            </div>\n        </div>\n    </form>\n</div>');