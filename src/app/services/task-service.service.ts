import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService  {
  private tasksSubject = new BehaviorSubject<string[]>([]); // Holds the state
  tasks$: Observable<string[]> = this.tasksSubject.asObservable(); // Expose as observable

  constructor() {}

  // Get current task list
  getTasks(): string[] {
    return this.tasksSubject.value;
  }

  // Add a new task
  addTask(task: string): void {
    const updatedTasks = [...this.tasksSubject.value, task];
    this.tasksSubject.next(updatedTasks);
  }

  // Remove a task
  removeTask(task: string): void {
    const updatedTasks = this.tasksSubject.value.filter(t => t !== task);
    this.tasksSubject.next(updatedTasks);
  }
}
