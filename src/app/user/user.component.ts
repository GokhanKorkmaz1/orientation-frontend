import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService,
     private activatedRoute:ActivatedRoute,
     private loginService:LoginService,
     private router:Router) { }
userId:number=0;  
user:User;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.userId=params["id"];
      this.getUserById(this.userId);
    });
  }

  getUserById(id){
    this.userService.getUser(id).subscribe(data =>{
      this.user = data;
      this.userId = data.id;
    });
  }
  
}
