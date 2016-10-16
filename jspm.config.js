System.defaultJSExtensions = true;
var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    "@angular/core": {
        main: "bundles/core.umd.js"
    },
    "@angular/common": {
        main: "bundles/common.umd.js"
    },
    "@angular/compiler": {
        main: "bundles/compiler.umd.js"
    },
    "@angular/forms": {
        main: "bundles/forms.umd.js"
    },
    "@angular/http": {
        main: "bundles/http.umd.js"
    },
    "@angular/platform-browser": {
        main: "bundles/platform-browser.umd.js"
    },
    "@angular/platform-browser-dynamic": {
        main: "bundles/platform-browser-dynamic.umd.js"
    },
    "@angular/router": {
        main: "bundles/router.umd.js"
    },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    'zonejs': { main: "dist/zone.min.js", defaultExtension: 'js' },
    'reflect-metadata': { main: "reflect.js", defaultExtension: 'js' }
};
var packageNames = [
    '@angular/testing',
    "@angular/upgrade",
    "angular2-in-memory-web-api",
    "rxjs",
    "zonejs",
    "reflect-metadata"
];

packageNames.forEach(function (pkgName) {
    switch (pkgName) {
        case "zonejs":
            packages[pkgName] = { main: 'zone.min.js', defaultExtension: 'js' };
            break;
        case "reflect-metadata":
            packages[pkgName] = { main: 'reflect.js', defaultExtension: 'js' };
            break;
        default:
            packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
            break;
    }
});

System.config({
    packages: packages,
    map: {
        '@angular': 'node_modules/@angular',
        'zonejs': 'node_modules/zone.js/dist',
        'rxjs': 'node_modules/rxjs',
        'reflect-metadata': 'node_modules/reflect-metadata',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api'
    }
});