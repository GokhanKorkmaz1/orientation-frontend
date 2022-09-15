import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private httpClient:HttpClient) { }
path = "http://localhost:5096/api/v1/";
newPath = "";
getUser(id:number):Observable<User>{
  return this.httpClient.get<User>(this.path+ "Users/"+ id);
}

add(registerUser):Observable<User>{
  let headers = new HttpHeaders();
  headers = headers.append("Content-Type", "application/json");
  this.newPath = this.path + "Users/register";
  return this.httpClient.post<User>(this.newPath , registerUser, {headers:headers});
}
}