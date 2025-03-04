import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms"

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports:[CommonModule,FormsModule]
})
export class TaskListComponent implements OnInit {
  tasks: string[] = [];
  newTask: string = '';

  constructor(private taskService: TaskServiceService) {}

  ngOnInit(): void {
    this.taskService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask(): void {
    if (this.newTask.trim()) {
      console.log(this.newTask)
      this.taskService.addTask(this.newTask);
      this.newTask = ''; // Clear input
    }
  }

  removeTask(task: string): void {
    this.taskService.removeTask(task);
  }
}
