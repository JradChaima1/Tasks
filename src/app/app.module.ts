import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import { NewListComponent } from './pages/new-list/new-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { TaskListsComponent } from './pages/task-lists/task-lists.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserComponent } from './pages/user/user.component'
import { SignUpComponent } from './pages/user/sign-up/sign-up.component';

import { FormsModule } from '@angular/forms';
import { SignInComponent } from './pages/user/sign-in/sign-in.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './shared/user.service';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    NewListComponent,
    NewTaskComponent,
    TaskListsComponent,
    LoginPageComponent,
    UserComponent,
    SignInComponent,
    UserProfileComponent,
    SignUpComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   MatCardModule,
   MatButtonModule,
   MatExpansionModule,
   HttpClientModule,
   MatFormFieldModule,
   MatInputModule,
   MatIconModule,
   FormsModule,
   CommonModule,
    BrowserAnimationsModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
