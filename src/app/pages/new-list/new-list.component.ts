import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {
  showSucessMessage!: boolean;
  serverErrorMessages!: string;

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
  }

  createList(title: string) {
    this.taskService.createList(title).subscribe((list:List) =>
  {
      this.showSucessMessage = true;
      setTimeout(() => this.showSucessMessage = false, 4000);


    },
    err => {



        this.serverErrorMessages = 'Something went wrong.Please contact admin.';
    }



    );
  }

}
