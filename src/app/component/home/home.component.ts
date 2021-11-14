import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logged:boolean=false;
  token:any='';
  constructor(public jwtHelper:JwtHelperService) { }

  ngOnInit(): void {
    this.logged=this.checkToken();
  }
 checkToken():any{
  if(sessionStorage.getItem('token')){
   
    this.token = sessionStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(this.token);
  }
  return false;

 }
}
