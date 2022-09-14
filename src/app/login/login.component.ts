import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private formBuilder:FormBuilder) { }

  loginForm:FormGroup;
  loginUser:any = {} 
  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group(
      {
        email:["", Validators.required],
        password:["", Validators.required]
      });
  }
  
  login(){
    if(this.loginForm.valid){
      this.loginUser = Object.assign({}, this.loginForm.value)
      this.loginService.login(this.loginUser);
    }
  }

  logout(){
    this.loginService.logOut();
  }

  get isLoggedIn(){
    return this.loginService.loggedIn();
  }

}
