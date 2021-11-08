import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DashboardService } from 'src/app/service/dashboard.service';
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
  nameClass : string='';
  files:string [] = [];
  formData = new FormData();
  constructor(public dialogRef: MatDialogRef<ClassficationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private api:DashboardService) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  createClasse():void{
    let user_id:any = sessionStorage.getItem("id");
    const formData = new FormData();
 
    for (var i = 0; i < this.files.length; i++) { 
      formData.append("files[]", this.files[i]);
    }
    this.formData.append("nameClass",this.nameClass);
    this.formData.append("id_user",user_id);
    console.log(this.formData.get("nameClass"))
    this.api.setClasse(this.formData).subscribe((data:any)=>{
      console.log(data);
      
    })
  }
  changeF(event:any){
    for (var i = 0; i < event.target.files.length; i++) { 
      this.files.push(event.target.files[i]);
  }
    if(this.files){
      // console.log(this.files)
    }
  }

}
