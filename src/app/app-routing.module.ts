import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  // {
  //   path: 'zadaci',
  //   component: TasksComponent
  // },
  {
    path: 'novi-zadatak',
    component: NewTaskComponent
  },
  {
    path: '**',
    component: TasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
