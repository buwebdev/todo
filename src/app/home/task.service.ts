import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[];

  constructor() {
    this.tasks = [
      new Task('Attend 2PM meeting'),
      new Task('Schedule meeting with Jim'),
      new Task('Onboard new sales team members'),
      new Task('Submit updates to sales manager'),
      new Task('Email quarterly update'),
      new Task('Mobile app launch')
    ];
  }
}
