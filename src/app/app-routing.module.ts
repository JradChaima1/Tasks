import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { TaskListsComponent } from './pages/task-lists/task-lists.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';

const routes: Routes = [
  {path:'',redirectTo:'lists',pathMatch:'full'},
  {path:'new-list',component:NewListComponent},
  {path:'lists',component:TaskViewComponent},
  {path:'new-task/:listId',component: NewTaskComponent},
  {path:'lists/:listId',component:TaskViewComponent},
  {path:'task-lists/:listId',component:TaskListsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
