"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./about.component');
exports.aboutRoutes = [
    {
        path: '',
        children: [
            {
                path: 'about',
                component: about_component_1.AboutComponent,
            }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(exports.aboutRoutes);
//# sourceMappingURL=about.routing.js.map