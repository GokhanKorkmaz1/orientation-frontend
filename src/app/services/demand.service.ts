import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demand } from '../models/demand';
import { DemandDto } from '../models/demandDto';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DemandService {

  constructor(private httpClient:HttpClient, private loginService:LoginService) { }
  path:string = "http://localhost:5096/api/v1/";

  addDemand(formData:FormData):Observable<Demand>{
    return this.httpClient.post<Demand>(this.path + "Users/demand", formData);
  }

   getDemandsByUserId(userId:number):Observable<Demand[]>{
    // let headers = new HttpHeaders();
    // headers = headers.append("Content-Type", "application/json");
    //return this.httpClient.get<Demand[]>(this.path + "Users/demands/"+userId, {headers:headers});
    return this.httpClient.get<Demand[]>(this.path + "Users/demands/"+userId);
   }

   getDemandById(id:number):Observable<Demand>{
    return this.httpClient.get<Demand>(this.path + "Users/demand/" + id);
   }

}
