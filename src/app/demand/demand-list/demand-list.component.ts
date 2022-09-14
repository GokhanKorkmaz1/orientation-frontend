import { Component, OnInit } from '@angular/core';
import { Demand } from 'src/app/models/demand';
import { DemandService } from 'src/app/services/demand.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-demand-list',
  templateUrl: './demand-list.component.html',
  styleUrls: ['./demand-list.component.css']
})
export class DemandListComponent implements OnInit {

  constructor(private demandService:DemandService, private loginService:LoginService) { }
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


}
