import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from '../models/login-user';
import { RegisterUser } from '../models/register-user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private httpClient:HttpClient, private router:Router) { }
path = "http://localhost:5096/api/v1/";

USER_ID='userId';
USER_ROLE='userRole'
ROLES_GUEST_ROLE="Guest";
ROLES_ADMIN_ROLE="Admin";
ROLES_USER_ROLE="User";

userRole = this.ROLES_GUEST_ROLE;
userId:any = 0;

login(loginUser:LoginUser){
let headers = new HttpHeaders();
headers = headers.append("Content-Type", "application/json");

this.httpClient.post(this.path + "Login", loginUser, {headers:headers}).subscribe(data=>{
  this.saveUserInfos( data['id'] , data['isAdmin']);
  this.userId = data['id'];
  this.userRole = data['isAdmin'];
  this.router.navigateByUrl('user/'+ this.userId);
});
}

/*register(registerUser:RegisterUser){
  let headers = new HttpHeaders();
headers = headers.append("Content-Type", "application/json");
this.httpClient.post(this.path+ "Users", registerUser, {headers:headers}).subscribe(data=>{
    // todo data...
});
}*/

saveUserInfos(userId:any, role:any){
  localStorage.setItem(this.USER_ID, userId);
  if(!role){
    this.userRole= this.ROLES_ADMIN_ROLE
  }
  else{
    this.userRole= this.ROLES_USER_ROLE
  }
  localStorage.setItem(this.USER_ROLE, this.userRole);
}

logOut(){
  localStorage.removeItem(this.USER_ID);
  localStorage.removeItem(this.USER_ROLE);
  this.userId=0;
  this.userRole = this.ROLES_GUEST_ROLE
}

loggedIn(){
  return this.userId; 
}
re
}
