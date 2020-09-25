import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Task} from '../task';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Observable<Task[]>;
  addTask: boolean ;
  task: Task = new Task();
  submitted = false;



  constructor(private taskService: TaskService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
    this.addTask = true;
  }
  // tslint:disable-next-line:typedef
  reloadData() {
    this.tasks = this.taskService.getTaskList();
  }

  // tslint:disable-next-line:typedef
  deleteTask(id: string) {
    this.taskService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  // tslint:disable-next-line:typedef
  taskDetails(id: string) {
    this.router.navigate(['details' , id]);
  }

  addNewTask(): void {
    this.addTask = !this.addTask;
  }
  newTask(): void {
    this.submitted = false;
    this.task = new Task();
  }

  save(): void {
    this.taskService
      .createTask(this.task).subscribe(data => {
        console.log(data);
        this.task = new Task();
      },
      error => console.log(error));
  }
  onSubmit(): void {
    this.submitted = true;
    this.save();
  }
  gotoList(): void {
    this.router.navigate(['tasks']);
  }
}
