# ngXplat
This project written in Angular 2 can be used to write,

a) Web based applications,

b) Cordova applications for iOS, Android, Windows

c) Electron apps targeting Mac, Windows and Linux

.. and it can do so with 100% code reuse. Just write the app once and run everywhere (yeah really!)

The idea being, write your angular2 app in the "www" folder and package it and run it everywhere.

Instructions: git clone, npm install, npm start.

## To run in browser
`npm start`

## To run in Cordova
`cordova platform add android`
`npm start`

The package.json is rigged to run android, but you can easily target iOS etc.
I have choosen android since it'll work on windows, mac and Linux

## To run Electron
`npm run electron:package`

This will create an "out" directory where you can grab the binaries for mac/windows/linux

Feedback? reach me at www.winsmarts.com/contact.aspx. TIA!