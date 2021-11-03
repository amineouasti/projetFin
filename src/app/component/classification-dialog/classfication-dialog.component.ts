import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  name: string;
  files: object;
}
@Component({
  selector: 'app-classfication-dialog',
  templateUrl: './classfication-dialog.component.html',
  styleUrls: ['./classfication-dialog.component.css']
})

export class ClassficationDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ClassficationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
