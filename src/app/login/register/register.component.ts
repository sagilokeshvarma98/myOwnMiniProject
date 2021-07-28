import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomvalidatorsService } from 'src/app/services/custom-validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  submitted:boolean= false;
  Getresponse:any
   Email_pattern= new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
  strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  constructor(private fb:FormBuilder, private customvalid:CustomvalidatorsService , public route:Router) {
    this.registerForm=this.fb.group(
      {
        Name:['',[Validators.required,Validators.minLength(3)]],
        Email:['',[Validators.required,Validators.pattern(this.Email_pattern)]],
        Mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        password: ['',[Validators.required,Validators.pattern(this.strongRegex)]],
        confirmPassword: ['', [Validators.required]],
        term:['',[Validators.required]]

      },{
        validator: this.customvalid.MatchPassword('password', 'confirmPassword'),
      }
    )
   }
   onSubmit(){
    this.submitted = true;
   // console.log(this.registerForm.value)
   this.customvalid.postdata(this.registerForm.value)
   .subscribe((res:any)=>{
     this.route.navigate(['successfulRegister'])
   })
   }
   get registerFormControl() {
    return this.registerForm.controls;
  }
  getData(){
    this.customvalid.getData().subscribe((res:any)=>{
      console.log(res)
      this.Getresponse=res;
     
    })
    //console.log(this.Getresponse);
  }
  hideEmailValidate = false
   validteEmail(){
    this.customvalid.validatorEmail(this.registerForm.value.Email)
    // subscribe((res:any)=>{
    //   console.log(this.registerForm.value.Email)
    //   this.hideEmailValidate = true
    // }
    //)
    console.log(this.registerForm.value.Email);
   }
  
  ngOnInit(): void {
  this.getData();
 }

}
