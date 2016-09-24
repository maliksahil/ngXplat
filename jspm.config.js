System.defaultJSExtensions = true;
System.defaultJSExtensions = true;
var packages = {
  'app': { main: 'main.js', defaultExtension: 'js' },
  'rxjs': { defaultExtension: 'js' },
  'angular2-in-memory-web-api': { defaultExtension: 'js' },
  'moment': { main: 'moment.min.js', defaultExtension: 'js'}

};
var packageNames = [
  "@angular/common",
  "@angular/compiler",
  "@angular/core",
  "@angular/forms",
  "@angular/http",
  "@angular/platform-browser",
  "@angular/platform-browser-dynamic",
  "@angular/router",
  "@angular/router-deprecated",
  '@angular/testing',
  "@angular/upgrade",
  "angular2-in-memory-web-api",
  "rxjs",
  "zonejs"
];

packageNames.forEach(function (pkgName) {
  if (pkgName !== "zonejs") {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  } else {
    packages[pkgName] = { main: 'zone.min.js', defaultExtension: 'js' };
  }
});

System.config({
  packages: packages,
  map: {
    '@angular': 'www/dist/lib/@angular',
    'zonejs': 'www/dist/lib/zone.js/dist',
    'rxjs': 'www/dist/lib/rxjs',
    'angular2-in-memory-web-api':'www/dist/lib/angular2-in-memory-web-api',    
    'IF': 'www/IF',
    'moment': 'www/dist/lib/moment'
  }
});