import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  
  constructor(public ls:LoginService, public route:Router) { }

  loginForm = new FormGroup({
    username : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required])
  })

  wrongCreden:Boolean = false

  inputClass:string = "loginForm"

  ngOnInit(): void {
    this.ls.logout()
  }

  get controls(){
    return this.loginForm.controls
  }

  errorInForms(){
    console.log("error occured");
  }

  controller(){

  }

  submit(){
    let username = this.loginForm.value.username
    if(username=="user" || username=="admin"){
      this.ls.login(this.loginForm.value).subscribe(res=>{
        console.log(res);
        this.route.navigate([`/${username}`])
       },
       error=>{
         console.log(error);
       }
       )
    }
    else{
      this.wrongCreden = true
      this.inputClass = "loginFormError"
    }
  }

  routeToRegister(){
    this.route.navigate(['/register'])
  }

}
