# ngXplat
This project written in Angular 2 can be used to write,

a) Web based applications,

b) Cordova applications for iOS, Android, Windows

c) Electron apps targeting Mac, Windows and Linux

.. and it can do so with 100% code reuse. 

**Just write the app once and run everywhere (yeah really!)**

The idea being, write your angular2 app in the "www" folder and package it and run it everywhere.

Instructions: 
1. git clone https://github.com/maliksahil/ngXplat
2. npm install && jspm init && jspm install (this will ask you to create a jspm.config.js - say yes)
3. npm start .. and this will launch it in a browser.

## To run in browser
`npm start`

## To run in Cordova
`cordova platform add android`

`npm run cordova`

The package.json is rigged to run android, but you can easily target iOS etc.
I have choosen android since it'll work on windows, mac and Linux

## To run Electron
`npm run electron:package`

This will create an "out" directory where you can grab the binaries for mac/windows/linux

Feedback? reach me at www.winsmarts.com or @sahilmalik