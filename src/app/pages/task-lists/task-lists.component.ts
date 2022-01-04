import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import{ ActivatedRoute,Params} from '@angular/router';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';


@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.scss']
})
export class TaskListsComponent implements OnInit {

  constructor(private taskService: TaskService, private route:ActivatedRoute) { }
  lists!: List[];
  tasks!: Task[];
  listId!: string;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.listId = params['listId'];
        console.log(params);

          this.taskService.getTasks(this.listId).subscribe((tasks: Task[]) => {
        this.tasks=tasks;
          })
        }
    )
    this.taskService.getLists().subscribe((lists: List[])=> {
      this.lists = lists;
    })




  }

}
