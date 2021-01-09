import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  flagsCheck = false;
  message = "";
  constructor(private formBuilder :FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
      
    }
    
  }
 
   checkLogin(){
     this.flagsCheck = true;
    if(this.loginForm.controls['username'].value ==="tienanh" && this.loginForm.controls['password'].value ==="123456"){
      this.message ="logined successfullly"
    }else{
      this.message ="Username or password is incorrect";
    }

  }
}
