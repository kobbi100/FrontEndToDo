import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  getTask(id: string): Observable<any> {
    return this.http.get('http://localhost:8080/tasks/' + id);
  }

  createTask(task: Task): Observable<any> {
    return this.http.post('http://localhost:8080/tasks', task);
  }

  updateTask(id: string, value: any): Observable<any> {
    return this.http.put('http://localhost:8080/tasks/' + id, value);
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete('http://localhost:8080/tasks/' + id, { responseType: 'text' });
  }

  getTaskList(): Observable<any> {
    return this.http.get('http://localhost:8080/tasks' );
  }
}
