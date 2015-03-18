<% edit = !_.isEmpty(formData) %>
<div class="caregg-form">
    <form name="sysRoleForm">
        <% if(edit){ %>
        <input type="hidden" name="serviceOrgSeq" value="<%= formData.get("serviceOrgSeq")%>"/>
        <% } %>
        <div class="caregg-form-group">
            <label class="caregg-form-label">中文名称:</label><div class="caregg-form-content"><input type="text" name="chineseName" value="<%= edit ? formData.get("chineseName"): ""%>"/></div>
        </div>
        <div class="caregg-form-group">
            <label class="caregg-form-label">英文名称:</label><div class="caregg-form-content"><input type="text" name="englishName" value="<%= edit ? formData.get("englishName"): ""%>"/></div>
        </div>
        <div class="caregg-form-group">
            <label class="caregg-form-label">商家代码:</label><div class="caregg-form-content"><input type="text" name="serviceOrgCode" value="<%= edit ? formData.get("serviceOrgCode"): "" %>"/></div>
        </div>
        <div class="caregg-form-group">
            <label class="caregg-form-label">联系方式:</label><div class="caregg-form-content"><input type="text" name="careggEmail" value="<%= edit ? formData.get("careggEmail"): "" %>"/></div>
        </div>
        <div class="caregg-form-group">
            <label class="caregg-form-label">联系人:</label><div class="caregg-form-content"><input type="text"  name="careggContactPerson" value="<%= edit ? formData.get("careggContactPerson"): "" %>" /></div>
        </div>
        <div class="caregg-form-group">
            <label class="caregg-form-label">联系电话:</label><div class="caregg-form-content"><input type="text"  name="careggTel" value="<%= edit ? formData.get("careggTel"): "" %>"></div>
        </div>
        <div class="caregg-form-group">
            <label class="caregg-form-label">结算周期:</label><div class="caregg-form-content"><input type="text"  name="settleDayTypeSeq" value="<%= edit ? formData.get("settleDayTypeSeq"): "" %>" /></div>
        </div>
        <div class="caregg-form-group">
            <label class="caregg-form-label">商家状态:</label><div class="caregg-form-content"><input type="text"  name="serviceOrgStatus" value="<%= edit ? formData.get("serviceOrgStatus"): "" %>"/></div>
        </div>
        <div class="caregg-form-group">
            <label class="caregg-form-label">描述:</label><div class="caregg-form-content"><textarea name="orgDesc"><%= edit ? formData.get("orgDesc"): "" %></textarea></div>
        </div>
    </form>
</div>