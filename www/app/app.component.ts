import { Component } from '@angular/core';
@Component({
    selector: 'app',
    template: `
    <a [routerLink]="['']">About</a> | <a [routerLink]="['todo']">Todo</a> <br/>  
    <router-outlet></router-outlet>`
})

export class AppComponent { }