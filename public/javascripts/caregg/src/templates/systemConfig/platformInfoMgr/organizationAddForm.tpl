<% edit = !_.isEmpty(formData) %>
<div class="caregg-form">
    <form name="sysRoleForm">
        <% if(edit){ %>
        <input type="hidden" name="careggOrgSeq" value="<%= formData.get("careggOrgSeq")%>"/>
        <% } %>
        <div class="caregg-form-group">
            <label class="caregg-form-label">组织名称:</label><div class="caregg-form-content"><input type="text" name="chineseName" value="<%= edit ? formData.get("chineseName"): ""  %>"/></div>
        </div>
        <div class="caregg-form-group">
            <label class="caregg-form-label">组织代码:</label><div class="caregg-form-content"><input type="text" name="careggOrgCode" value="<%= edit ? formData.get("careggOrgCode"): "" %>"/></div>
        </div>
        <div class="caregg-form-group">
            <label class="caregg-form-label">英文名称:</label><div class="caregg-form-content"><input type="text" name="englishName" value="<%= edit ? formData.get("careggContactPerson"): "" %>"/></div>
        </div>
        <div class="caregg-form-group">
            <label class="caregg-form-label">联系人:</label><div class="caregg-form-content"><input type="text" name="careggContactPerson" value="<%= edit ? formData.get("careggContactPerson"): "" %>"/></div>
        </div>
        <div class="caregg-form-group">
            <label class="caregg-form-label">联系电话:</label><div class="caregg-form-content"><input type="text" name="careggTel" value="<%= edit ? formData.get("careggTel"): "" %>"/></div>
        </div>
        <div class="caregg-form-group">
            <label class="caregg-form-label">电子邮箱:</label><div class="caregg-form-content"><input type="text" name="careggEmail" value="<%= edit ? formData.get("careggEmail"): "" %>"/></div>
        </div>

        <div class="caregg-form-group">
            <label class="caregg-form-label">主要地址:</label><div class="caregg-form-content"><textarea name="primaryAddr"><%= edit ? formData.get("primaryAddr"): "" %></textarea></div>
        </div>
        <div class="caregg-form-group">
            <label class="caregg-form-label">次要地址:</label><div class="caregg-form-content"><textarea name="secondaryAddr"><%= edit ? formData.get("secondaryAddr"): "" %></textarea></div>
        </div>
        <div class="caregg-form-group">
            <label class="caregg-form-label">组织类型:</label>
            <div class="caregg-form-content caregg-form-orgTypeSeq">
                <select name="orgTypeSeq">

                </select>
                <input id="orgTypeSeq_val" type="hidden" value="<%= edit ? formData.get('orgTypeSeq'): '' %>" />
            </div>
        </div>
    </form>
</div>