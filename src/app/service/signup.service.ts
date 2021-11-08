import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders  } from '@angular/common/http'
@Injectable({
    providedIn: 'root'
})
export class SignUpService{

    constructor(
        private http:HttpClient
    ){}
    signUp(email :String , password:String){
        const httpOptions = {
            headers: new HttpHeaders({
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET,POST',
              'Content-Type':  'application/json',
              'Access-Control-Allow-Headers': 'Content-Type'
              
              
            })
          };
          const data ={ "email":email ,"password":password};
        return this.http.post('http://127.0.0.1:5000/user', data, httpOptions); 
    }

}