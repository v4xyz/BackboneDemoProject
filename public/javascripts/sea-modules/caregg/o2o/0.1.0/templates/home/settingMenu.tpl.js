define("caregg/o2o/0.1.0/templates/home/settingMenu.tpl",[],'<i class="caregg-bubble-spike"></i>\n<ul>\n    <% _.each( menuItems[0].get("children"), function(menuItem) { %>\n    <li><a><%= menuItem.oprFuncName %></a></li>\n    <% }); %>\n</ul>');