import { DOCUMENT } from '@angular/common';
import { Component, OnInit , Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AnonymousSubject } from 'rxjs/internal/Subject';

import { DashboardService } from 'src/app/service/dashboard.service';
import { ClassficationDialogComponent } from '../classification-dialog/classfication-dialog.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  files: object={};
  name: string="";
  classes: any;
  classif: any;
  
  constructor(public dialog: MatDialog,private api: DashboardService) { }
  selectedFolder=''
  idDivSelected=''
  inProgress=true
  ngOnInit(): void {
    this.api.getClasses().subscribe((data:any)=>{
      this.classes = data;
      
    })
    console.log(this.inProgress)
    
  }
  getClassif(className:string,idDiv:string){
    
    let id = sessionStorage.getItem("id");
    this.selectedFolder = className+"_"+id;
    this.inProgress = false
    this.api.getClassif(this.selectedFolder).subscribe((data:any)=>{
      
      this.classif=data;
      this.inProgress = true
      if(this.idDivSelected!='')
      (<HTMLInputElement>document.getElementById(this.idDivSelected)).style.removeProperty("background-color");
      (<HTMLInputElement>document.getElementById(idDiv)).style.backgroundColor="rgb(143, 194, 92)"
      this.idDivSelected=idDiv
    })
  
  }
  updateClass():void{
    this.classif=null;
    this.inProgress = false
    this.api.updateClassif(this.selectedFolder).subscribe((data:any)=>{
      
      this.classif = data;
      this.inProgress = true
      
    })
  }
  upgradeResolution(imagePath:string):void{
    const imageName= imagePath.split("/")
    
    this.api.upgradeResolution(this.selectedFolder+"/"+imageName[imageName.length-1]).subscribe((data:any)=>{
      
      this.classes = data;
      this.inProgress = true
    })
  }
  deleteClass(className:string):void{
    console.log(className)
    this.api.deleteClassif(className).subscribe((data:any)=>{
      
      this.classes = data;
      window.location.reload()
      
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ClassficationDialogComponent, {
      width: '350px',
      data: {name: this.name, animal: this.files}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.files = result;
      window.location.reload();
    });
  }
}
