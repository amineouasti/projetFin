import { Component, OnInit } from '@angular/core';
import {SignInService} from '../../service/signin.service'
@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  constructor(private api:SignInService) { }

  ngOnInit(): void {
    
    this.api.checkSignin('amine@gmail.com','test').subscribe((data)=>{
      console.log("data",data);
    })
  }

}
