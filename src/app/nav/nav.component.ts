import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  loginUser:any={}
  ngOnInit() {
  }

  login(){
    this.loginService.login(this.loginUser);
  }

  logout(){
    this.loginService.logOut();
  }

  get isAuthenticated(){
    return this.loginService.loggedIn();
  }

  

}
