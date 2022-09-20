import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Decision } from '../models/decision';
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
  decisions:Decision[]=[];
  userId:number;
  ngOnInit() {
    this.setDemandsByUser();
    this.setDecisionsByUser();
  }

  setDemandsByUser(){
    this.getUserId();
    this.demandService.getDemandsByUserId(this.userId).subscribe(data =>{
      this.demands = data;
      this.sortDemandArray();
      console.log(data);
    });
  }

  setDecisionsByUser(){
    //this.getUserId();
    this.demandService.getDecisionByUserId(this.userId).subscribe(data =>{
      this.decisions = data;
      this.sortDecisionArray();
      console.log(data);
    });
  }

  getUserId(){
    this.userId = this.loginService.userId;
  }

  showDemandById(id:number){
    this.router.navigateByUrl('demand-detail/'+ id );
  }

  sortDemandArray(){
    this.demands.sort((a, b) => (a.uploadTime < b.uploadTime ? -1 : 1));
  }

  sortDecisionArray(){
    this.decisions.sort((a, b) => (a.decisionTime < b.decisionTime ? -1 : 1));
  }

}
