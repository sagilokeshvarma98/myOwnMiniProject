import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private hp:HttpClient) { }

  login(data:object):Observable<any>{
     return this.hp.post("http://localhost:5300/loginData",data)
  }

  logout(){
    localStorage.removeItem("username")
  }

}
