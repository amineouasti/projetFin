import { Component, OnInit } from '@angular/core';
import {SignInService} from '../../service/signin.service'
@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  constructor(private api:SignInService) { }
  email:string='';
  password:string='';
  ngOnInit(): void {
    
    
  }
  login():void{
    this.api.checkSignin(this.email,this.password).subscribe((data:any)=>{
      sessionStorage.setItem('token',data.token);
      sessionStorage.setItem('id',data.id);
      window.location.reload();
    })
  }

}
