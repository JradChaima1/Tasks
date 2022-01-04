import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  showSucessMessage!: boolean;
  serverErrorMessages!: string;
  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  listId!: string;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.listId = params['listId'];
      }
    )
  }
 createTask(title: string) {
    this.taskService.createTask(title, this.listId).subscribe((task: Task) =>  res => {
      this.showSucessMessage = true;
      setTimeout(() => this.showSucessMessage = false, 4000);

    },
    err => {
        console.log(err);

        this.serverErrorMessages = 'Something went wrong.Please contact admin.';
    }
  );


    }
 }


