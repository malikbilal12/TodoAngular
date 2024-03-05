import { Routes } from '@angular/router';
import { TodoComponent } from './component/todo/todo.component';
import { AboutComponent } from './component/about/about.component';

export const routes: Routes = [
    { path: '', component: TodoComponent },
    { path: 'about', component: AboutComponent },
  ];