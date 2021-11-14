import { Component, OnInit } from '@angular/core';
import { SignUpService } from 'src/app/service/signup.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  email:string='';
  password:string='';
  constructor(private api:SignUpService) { }

  ngOnInit(): void {
  }
  signUp():void{
    this.api.signUp(this.email,this.password).subscribe((data:any)=>{
      console.log(data);
      
    })
  }
}
