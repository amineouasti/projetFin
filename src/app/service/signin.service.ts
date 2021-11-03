import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders  } from '@angular/common/http'
@Injectable({
    providedIn: 'root'
})
export class SignInService{

    constructor(
        private http:HttpClient
    ){}
    checkSignin(name :String , password:String){
        const httpOptions = {
            headers: new HttpHeaders({
            'Access-Control-Allow-Methods': 'GET,POST',
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + btoa(name+':'+password),
              'Access-Control-Allow-Headers': 'Content-Type',
              
              'Access-Control-Allow-Origin': '*'
            })
          };
        return this.http.get('http://127.0.0.1:5000/login', httpOptions); 
    }

}