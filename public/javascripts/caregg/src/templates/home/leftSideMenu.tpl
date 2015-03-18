<% _.each(menuItems, function(menuItem) { %>
<li>
    <span class="caregg-ico <%= menuItem.get('className') %>"><i class="icon-chevron-right"></i></span>
    <span class="menu-item-name"><%= menuItem.get('menuName') || menuItem.get('oprFuncName') %></span>
    <% if( menuItem.get('children').length > 0 ){ %>
        <!-- 一级菜单列表 -->
        <ul class='caregg-multilevel-menu-v1'>
            <% _.each( menuItem.get('children'), function(menuItemL1) { %>
            <li>
            <% if( menuItemL1["children"].length > 0 ){ %>
                <!-- 二级菜单列表 -->
                <a><%= menuItemL1.menuName || menuItemL1.oprFuncName %><span class="arrow"></span></a>
                <ul class='sub-menu'>
                    <% _.each( menuItemL1["children"], function(menuItemL2) { %>
                    <li>
                        <% if( menuItemL2["children"].length > 0 ){ %>
                            <a><%= menuItemL2.menuName || menuItemL2.oprFuncName %><span class="arrow"></span></a>
                            <!-- 三级菜单列表 -->
                            <ul class='sub-menu'>
                                <% _.each( menuItemL2["children"], function(menuItemL3) { %>
                                    <li><a href="<%= menuItemL3.path ? menuItemL3.path : "javascript:void(0);" %>"><%= menuItemL3.menuName || menuItemL3.oprFuncName %></a></li>
                                <% }); %>
                            </ul>
                        <% }else{ %>
                            <a href="<%= menuItemL2.path ? menuItemL2.path : "javascript:void(0);" %>"><%= menuItemL2.menuName || menuItemL2.oprFuncName %></a>
                        <% } %>
                    </li>
                    <% }); %>
                </ul>
            <% }else{ %>
                <a href="<%= menuItemL1.path ? menuItemL1.path : "javascript:void(0);" %>"><%= menuItemL1.menuName || menuItemL1.oprFuncName %></a>
            <% } %>
            </li>
            <% }); %>
        </ul>
    <% } %>
</li>
<% }); %>
