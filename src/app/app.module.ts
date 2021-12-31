import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import { NewListComponent } from './pages/new-list/new-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { TaskListsComponent } from './pages/task-lists/task-lists.component'

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    NewListComponent,
    NewTaskComponent,
    TaskListsComponent
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
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
