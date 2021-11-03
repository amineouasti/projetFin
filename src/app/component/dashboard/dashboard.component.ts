import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ClassficationDialogComponent } from '../classification-dialog/classfication-dialog.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  files: object={};
  name: string="";
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ClassficationDialogComponent, {
      width: '350px',
      data: {name: this.name, animal: this.files}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.files = result;
    });
  }
}
