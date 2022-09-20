import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUser } from '../models/register-user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private userService:UserService) { }
  
  registerUserForm:FormGroup;
  register:any={}

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
      this.register = Object.assign({}, this.registerUserForm.value);
      console.log(this.register);
      this.userService.add(this.register).subscribe(data=>{
        
        console.log(data.name , data.surname);
        alert(this.register.name + " " + this.register.surname + " kaydoldu.")
      this.register={};
      this.router.navigate(['home']); 
      },err=>{
        alert(err.error);
      });
      
    }
  }

}
