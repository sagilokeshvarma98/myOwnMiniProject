import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private hp:HttpClient) { }

  login(data:any):Observable<any>{
    console.log(data);
    return this.hp.post("http://localhost:5300/loginData",data)
    .pipe(
      map(user => {
        if(user){
       let data = JSON.stringify(user)
       localStorage.setItem("token",data)
        }
    })
    )
    //  return this.hp.post("http://ec2-3-109-32-85.ap-south-1.compute.amazonaws.com:8080/onlineshopping/authenticate",data)
  }

  logout(){
    localStorage.removeItem("token")
  }


  getToken(){
    return JSON.parse(localStorage.getItem("token") || '{}')
  }

}
