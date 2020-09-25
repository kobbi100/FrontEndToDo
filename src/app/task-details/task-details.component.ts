import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskService} from '../task.service';
import {Task} from '../task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  id: string;
  task: Task;
  updateState = false;
  constructor(private route: ActivatedRoute, private router: Router,
              private taskService: TaskService) { }

  ngOnInit(): void {
    this.task = new Task();
    this.id = this.route.snapshot.params.id;

    this.taskService.getTask(this.id)
      .subscribe(data => {
        console.log(data);
        this.task = data;
      }, error => console.log(error));
  }
  list(): void {
    this.router.navigate(['tasks']);
  }

  update(): void {
    this.updateState = ! this.updateState;
  }
  updateTask(): void {
    this.taskService.updateTask(this.id, this.task)
      .subscribe(data => {
        console.log(data);
        this.task = new Task();
        this.list();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.updateTask();
  }

  deleteTask(id): void{
    this.taskService.deleteEmployee(id).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
    this.list();
  }



}
