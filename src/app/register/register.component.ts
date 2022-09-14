import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterUser } from '../models/register-user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private userService:UserService) { }
  
  registerUserForm:FormGroup;
  register:RegisterUser = new RegisterUser();

  createRegisterUserForm(){
    this.registerUserForm = this.formBuilder.group({
      name:["", Validators.required],
      surname:["", Validators.required],
      email:["", Validators.required],
      password:["", Validators.required],
      phoneNumber:["", Validators.required]
    });
  }

  ngOnInit() {
    this.createRegisterUserForm()
  }

  registerUser(){
    if(this.registerUserForm.valid){
      this.register = Object.assign("", this.registerUserForm.value);
      this.userService.add(this.register).subscribe(data=>{
        console.log(data.name , data.surname); 
      });
    }
  }

  

}
