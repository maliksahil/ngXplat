import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import {AboutComponent} from './about/about.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'todo', component: TodoComponent },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);