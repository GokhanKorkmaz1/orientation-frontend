import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Demand } from '../models/demand';
import { DemandService } from '../services/demand.service';
import { LoginService } from '../services/login.service';
import {DomSanitizer} from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DecisionDto } from '../models/decisionDto';

@Component({
  selector: 'app-demand-detail',
  templateUrl: './demand-detail.component.html',
  styleUrls: ['./demand-detail.component.css']
})
export class DemandDetailComponent implements OnInit {

  constructor(private demandService:DemandService,
    private activatedRoute:ActivatedRoute,
    private sanitizer:DomSanitizer,
    private formBuilder:FormBuilder,
    private router:Router,
    private loginService:LoginService) { }
  demand:Demand;
  demandId:number;
  webServerPath:string ="http://127.0.0.1:8887/"
  userRole:string;
  decisionForm:FormGroup;
  YES = 'yes';
  NO = 'no' ;
  decisionButton:string='';
  form:any={};
  decisionDto:DecisionDto;
  ngOnInit() {
    this.createDecisionForm();
    this.activatedRoute.params.subscribe(params =>{
      this.demandId=params["id"];
      this.setDemand();
    });
    this.userRole = this.loginService.userRole;
  }

  setDemand(){
    this.demandService.getDemandById(this.demandId).subscribe(data=>{
      this.demand = data;
      
      // this.blob= new Blob([data.document as BlobPart]);
      // this.file = new File([this.blob],"doc", {type:"application/pdf"});
      // console.log(this.file);
    });
  }

  getFile(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.webServerPath+ this.demand.document);
  }

  openNewPage(){
    window.open(this.webServerPath + this.demand.document);
  }

  decision(event){
    if(event.target.id == this.YES){
      this.decisionButton = this.YES;
    }
    else{
      this.decisionButton = this.NO;
    }
  }

  createDecisionForm(){
    this.decisionForm = this.formBuilder.group({
      description:["", Validators.nullValidator]
    });
  }

  addDecision(){
    
    this.decisionDto = new DecisionDto();
    this.decisionDto.demandId = this.demandId;

    if(this.decisionButton == this.YES){
      this.decisionDto.isApproved = true;
    }
    else{
      this.decisionDto.isApproved = false;
    }

    if(this.decisionForm.valid){
      this.form = Object.assign({}, this.decisionForm.value);
      this.decisionDto.description = this.form.description;
    }


    console.log(this.decisionDto);  
    this.demandService.addDecision(this.decisionDto).subscribe(data => {
      console.log(data);
    });
    if(this.decisionButton == this.YES){
      alert("Talep basariyla onaylandi!")
    }
    else{
      alert("Talep basariyla reddedildi!")  
    }
    this.redirectToAdminDemandList();
  }

  redirectToAdminDemandList(){
    this.router.navigate(['admin-demand-list']);
  }

}
