import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskDetailsComponent} from './task-details/task-details.component';
import {TaskListComponent} from './task-list/task-list.component';
import {AppModule} from './app.module';
import {AppComponent} from './app.component';

const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'details/:id', component: TaskDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
