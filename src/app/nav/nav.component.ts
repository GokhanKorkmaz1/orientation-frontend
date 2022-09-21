import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from '../models/login-user';
import { AlertifyService } from '../services/alertify.service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private loginService:LoginService,
    private alertifyService:AlertifyService,
    private router:Router) { }

  loginUser:any={}
  user:LoginUser;
  userId:number;
  userRole:string;
  ngOnInit() {}

  login(){
    this.loginService.login(this.loginUser).subscribe(data => {
      this.loginService.saveUserInfos(data['id'], data['isAdmin']);
      this.loginService.userId = data['id'];
      if(data['isAdmin'])
        this.loginService.userRole = "Admin";
      else
        this.loginService.userRole = "User";

      this.userId = this.loginService.userId;
      this.userRole = this.loginService.userRole;
      this.router.navigateByUrl('user/' + this.userId);
    }, err=>{
      this.alertifyService.error(err.error);
      this.logoutForError();
    }); 
  }

  logout(){
    this.loginService.logOut().subscribe(data =>{
      this.userId = data.userId;
      this.userRole = data.userRole
    });
    //this.userId = this.loginService.userId;
    //this.userRole = this.loginService.userRole;
    this.loginUser = {};
    this.router.navigate(['home']);
  }

  logoutForError(){
    this.loginService.logOut().subscribe(data =>{
      this.userId = data.userId;
      this.userRole = data.userRole
    });
    this.router.navigate(['home']);
  }

  get isAuthenticated(){
    return this.loginService.loggedIn();
  }

  redirectToUserDemandList(){
    this.router.navigate(['user-demand-list']);
  }

  redirectToAdminDemandList(){
    this.router.navigate(['admin-demand-list']);
  }

  redirectToAllDecisions(){
    this.router.navigate(['admin-decision-list']);
  }

}
