import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUser } from '../models/auth-user';
import { LoginUser } from '../models/login-user';
import { RegisterUser } from '../models/register-user';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private router: Router) { }
  path = "http://localhost:5096/api/v1/";

  USER_ID = 'userId';
  USER_ROLE = 'userRole'
  ROLES_GUEST_ROLE = "Guest";
  ROLES_ADMIN_ROLE = "Admin";
  ROLES_USER_ROLE = "User";

  userRole = this.ROLES_GUEST_ROLE;
  userId: any = 0;

  login(loginUser: LoginUser):Observable<User> {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");

    return this.httpClient.post<User>(this.path + "Login", loginUser, { headers: headers });
  }

  saveUserInfos(userId: any, role: any) {
    localStorage.setItem(this.USER_ID, userId);
    if (!role) {
      this.userRole = this.ROLES_ADMIN_ROLE
    }
    else {
      this.userRole = this.ROLES_USER_ROLE
    }
    localStorage.setItem(this.USER_ROLE, this.userRole);
  }

  logOut():Observable<AuthUser> {
    localStorage.removeItem(this.USER_ID);
    localStorage.removeItem(this.USER_ROLE);
    this.userId = 0;
    this.userRole = this.ROLES_GUEST_ROLE

    return this.httpClient.get<AuthUser>(this.path + "Login/logout");
  }

  loggedIn() {
    return this.userId;
  }
}
