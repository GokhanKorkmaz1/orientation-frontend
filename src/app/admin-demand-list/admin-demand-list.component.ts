import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demand } from '../models/demand';
import { DemandService } from '../services/demand.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-demand-list',
  templateUrl: './admin-demand-list.component.html',
  styleUrls: ['./admin-demand-list.component.css']
})
export class AdminDemandListComponent implements OnInit {

  constructor(private demandService:DemandService,
  private userService:UserService,
  private router:Router) { }
  demands:Demand[]=[];
  ngOnInit() {
    this.getDemandsForAdmin();
  }

  getDemandsForAdmin(){
    this.demandService.getAllDemands().subscribe(data=>{
      this.demands = data;
      this.sortDemandArray();
    });
  }

  showDemandById(id:number){
    this.router.navigateByUrl('demand-detail/'+ id );
  }

  sortDemandArray(){
    this.demands.sort((a, b) => (a.uploadTime < b.uploadTime ? -1 : 1));
  }

}
