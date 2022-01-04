import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { TaskListsComponent } from './pages/task-lists/task-lists.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SignInComponent } from './pages/user/sign-in/sign-in.component';
import { SignUpComponent } from './pages/user/sign-up/sign-up.component';
import { UserComponent } from './pages/user/user.component';
const routes: Routes = [

  {path:'new-list',component:NewListComponent},
  {path:'lists',component:TaskViewComponent},
  {path:'new-task/:listId',component: NewTaskComponent},
  {path:'lists/:listId',component:TaskViewComponent},
  {path:'task-lists/:listId',component:TaskListsComponent},
  { path: 'register', component: SignUpComponent },
  {path: 'login',component:SignInComponent},
  {path:'userprofile',component:UserProfileComponent},

{
    path: '', redirectTo: '/login', pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
