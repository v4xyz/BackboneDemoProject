
<div class="caregg-form">
    <form name="authOrganizationAddForm">
        <div class="caregg-form-group">
            <label class="caregg-form-label">组织名称:</label><span class="caregg-form-span"><%= formData.get("chineseName")%></span>
            <input name="careggOrgSeq" type="hidden" value="<%= formData.get("careggOrgSeq") %>"/>
        </div>
        <div class="caregg-form-group">
            <label class="caregg-form-label">关联角色:</label>
            <div class="caregg-form-content oprRoles-list">
                <ul>

                </ul>
            </div>
        </div>
    </form>
</div>
