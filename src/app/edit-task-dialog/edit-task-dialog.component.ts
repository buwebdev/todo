import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.css']
})
export class EditTaskDialogComponent implements OnInit {

  task: string;

  constructor(private dialogRef: MatDialogRef<EditTaskDialogComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.task = data.task;
    console.log(this.task);
  }

  ngOnInit(): void {
  }
}
