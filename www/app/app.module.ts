import 'zonejs';
import 'reflect-metadata';

import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
    imports: [
        routing,
        BrowserModule
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        TodoComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }