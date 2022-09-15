import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demand } from '../models/demand';
import { DemandService } from '../services/demand.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-user-demand-list',
  templateUrl: './user-demand-list.component.html',
  styleUrls: ['./user-demand-list.component.css']
})
export class UserDemandListComponent implements OnInit {

  constructor(private demandService:DemandService,
    private router:Router,
     private loginService:LoginService) { }
  demands:Demand[]=[];
  userId:number;
  ngOnInit() {
    this.setDemandsByUser();
  }

  setDemandsByUser(){
    this.getUserId();
    this.demandService.getDemandsByUserId(this.userId).subscribe(data =>{
      this.demands = data;
      console.log(data);
    });
  }

  getUserId(){
    this.userId = this.loginService.userId;
  }

  showDemandById(id:number){
    this.router.navigateByUrl('demand-detail/'+ id );
  }

}
