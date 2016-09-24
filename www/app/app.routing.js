"use strict";
var router_1 = require('@angular/router');
var todo_component_1 = require('./todo/todo.component');
var about_component_1 = require('./about/about.component');
exports.routes = [
    { path: '', component: about_component_1.AboutComponent },
    { path: 'todo', component: todo_component_1.TodoComponent },
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map