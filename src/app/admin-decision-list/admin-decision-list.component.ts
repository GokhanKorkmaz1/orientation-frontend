import { Component, OnInit } from '@angular/core';
import { Decision } from '../models/decision';
import { DemandService } from '../services/demand.service';

@Component({
  selector: 'app-admin-decision-list',
  templateUrl: './admin-decision-list.component.html',
  styleUrls: ['./admin-decision-list.component.css']
})
export class AdminDecisionListComponent implements OnInit {

  constructor(private demandService:DemandService) { }
  decisions:Decision[]=[]
  ngOnInit() {
    this.getDecisions();
  }

  getDecisions(){
    this.demandService.getDecisions().subscribe(data =>{
      this.decisions = data;
      this.sortDecisionArray();
    });
  }

  sortDecisionArray(){
    this.decisions.sort((a, b) => (a.decisionTime < b.decisionTime ? -1 : 1));
  }

}
