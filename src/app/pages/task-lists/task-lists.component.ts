import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import{ ActivatedRoute,Params} from '@angular/router';


@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.scss']
})
export class TaskListsComponent implements OnInit {

  constructor(private taskService: TaskService, private route:ActivatedRoute) { }
  lists: any;
  tasks : any;
  listId!: string;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.listId = params['listId'];
        console.log(params);

          this.taskService.getTasks(this.listId).subscribe((tasks: any) => {
        this.tasks=tasks;
          })
        }
    )
    this.taskService.getLists().subscribe((lists: any) => {
      this.lists = lists;
    })




  }

}
