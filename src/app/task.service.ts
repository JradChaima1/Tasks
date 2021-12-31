import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { HttpClient } from '@angular/common/http';
import { List } from './models/list.model';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }


  getLists() {
    return this.http.get(`${this.ROOT_URL}/lists`);
  }
  createList(title: string) {

    return this.http.post<List>(`${this.ROOT_URL}/lists`, { title });
  }
  getTasks(listId: string) {
    return this.http.get(`${this.ROOT_URL}/lists/${listId}/tasks`);
  }
  createTask(title: string, listId: string) {

    return this.http.post<Task>(`${this.ROOT_URL}/lists/${listId}/tasks`, { title });
  }

}
