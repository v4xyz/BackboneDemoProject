<div class="caregg-popFrom">
    <div class="popForm-header">
        <span class="popForm-title"><%= title %></span>
        <span class="popForm-close"><a href="javascript:;" title="关闭窗口">×</a></span>
    </div>
    <div class="popForm-content">
        <%= template( {formData: formData} ) %>
    </div>
    <div class="popForm-footer">
        <a class="caregg-btn btn-submit">确认</a> <a class="caregg-btn btn-cancel">取消</a>
    </div>
</div>