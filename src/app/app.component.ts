import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public jwtHelper:JwtHelperService) { }
  title = 'projetFin';
  token:any=sessionStorage.getItem('token')?sessionStorage.getItem('token'):'';
 
  loggedout = this.jwtHelper.isTokenExpired(this.token);
  logout():void{
    sessionStorage.removeItem('token');
    window.location.reload();
  }
}
