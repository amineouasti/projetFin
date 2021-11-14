import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders  } from '@angular/common/http'
@Injectable({
    providedIn: 'root'
})
export class DashboardService{
    httpOptions:any = {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,POST',
               
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
          
          
        })};
    token = sessionStorage.getItem('token');
    constructor(
        private http:HttpClient
    ){}
    getClasses(){
        
        let id = sessionStorage.getItem('id');
      
        return this.http.get('http://127.0.0.1:5000/classesList/'+id+'?token='+this.token, this.httpOptions); 
    }
    getClassif(folderName:string){
        
        let id = sessionStorage.getItem('id');
      
        return this.http.get('http://127.0.0.1:5000/classification/'+folderName, this.httpOptions); 
    }
    
    updateClassif(folderName:string){
        
        let id = sessionStorage.getItem('id');
      
        return this.http.get('http://127.0.0.1:5000/updateClasse/'+folderName, this.httpOptions); 
    }
    upgradeResolution(folderName:string){
        
        let id = sessionStorage.getItem('id');
      
        return this.http.get('http://127.0.0.1:5000/updateResolution/'+folderName, this.httpOptions); 
    }
    deleteClassif(className:string){
        
        let id = sessionStorage.getItem('id');
      
        return this.http.get('http://127.0.0.1:5000/deleteClasse/'+className+'/'+id, this.httpOptions); 
    }
    setClasse(data:FormData){
        //const data ={ "name":name ,"id_user":user_id,"files":files};
        
        return this.http.post('http://127.0.0.1:5000/classe?token='+this.token, data, this.httpOptions); 
    }

}