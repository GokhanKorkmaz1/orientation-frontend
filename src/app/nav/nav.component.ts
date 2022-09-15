import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) { }

  loginUser:any={}
  userId:number;
  ngOnInit() {
    this.userId = this.loginService.userId;
  }

  login(){
    this.loginService.login(this.loginUser);
    this.userId=this.loginService.userId;
  }

  logout(){
    this.loginService.logOut();
    this.router.navigate(['login']);
    this.userId = this.loginService.userId;
  }

  get isAuthenticated(){
    return this.loginService.loggedIn();
  }

  redirectToUserDemandList(){
    this.router.navigate(['user-demand-list']);
  }

}
