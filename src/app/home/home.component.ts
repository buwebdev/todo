import { Component, OnInit } from '@angular/core';
import {TaskService} from './task.service';
import { Task } from './task';
import {FormBuilder, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {EditTaskDialogComponent} from '../edit-task-dialog/edit-task-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks: Task[];

  taskForm = this.fb.group({
    task: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
  });

  constructor(private taskService: TaskService, private fb: FormBuilder, private dialog: MatDialog) {
    this.tasks = [
      new Task('Attend 2PM meeting'),
      new Task('Schedule meeting with Jim'),
      new Task('Onboard new sales team members'),
      new Task('Submit updates to sales manager'),
      new Task('Email quarterly update'),
      new Task('Mobile app launch')
    ];
    console.log(this.tasks);
  }

  ngOnInit(): void { }

  addTask(): void {
    const enteredTask = this.taskForm.controls.task.value;

    const task = new Task(enteredTask);

    this.tasks.push(task);

    this.taskForm.controls.task.setValue('');
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(t => t.getId() !== id);
  }

  editTask(id: string, item: string): void {

    const dialogRef = this.dialog.open(EditTaskDialogComponent, {
      data: {
        task: item
      },
      disableClose: true,
      width: '400px'
    });

    const editedTask = new Task();

    dialogRef.afterClosed().subscribe(result => {

      this.tasks.map((task, index) => {
        if (task.getId() === id) {
          editedTask.setId(id);
          editedTask.setItem(result);
          this.tasks[index] = editedTask;
        }
      });

    });
  }
}
