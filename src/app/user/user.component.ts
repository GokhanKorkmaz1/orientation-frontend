import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService, private activatedRoute:ActivatedRoute) { }
userId:number=0;  
user:User;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.getUserById(params["id"]);
    });
  }

  getUserById(id){
    this.userService.getUser(id).subscribe(data =>{
      this.user = data;
      this.userId = data.id
      console.log(data);
    });
  }
  
}
