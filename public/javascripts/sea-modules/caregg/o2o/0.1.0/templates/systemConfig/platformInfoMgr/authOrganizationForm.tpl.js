define("caregg/o2o/0.1.0/templates/systemConfig/platformInfoMgr/authOrganizationForm.tpl",[],'\n<div class="caregg-form">\n    <form name="authOrganizationAddForm">\n        <div class="caregg-form-group">\n            <label class="caregg-form-label">组织名称:</label><span class="caregg-form-span"><%= formData.get("chineseName")%></span>\n            <input name="careggOrgSeq" type="hidden" value="<%= formData.get("careggOrgSeq") %>"/>\n        </div>\n        <div class="caregg-form-group">\n            <label class="caregg-form-label">关联角色:</label>\n            <div class="caregg-form-content oprRoles-list">\n                <ul>\n\n                </ul>\n            </div>\n        </div>\n    </form>\n</div>\n');