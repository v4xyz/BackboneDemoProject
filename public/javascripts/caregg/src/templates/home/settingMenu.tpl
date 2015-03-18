<i class="caregg-bubble-spike"></i>
<ul>
    <% _.each( menuItems[0].get("children"), function(menuItem) { %>
    <li><a><%= menuItem.oprFuncName %></a></li>
    <% }); %>
</ul>