import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Demand } from '../models/demand';
import { DemandService } from '../services/demand.service';
import { LoginService } from '../services/login.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-demand-detail',
  templateUrl: './demand-detail.component.html',
  styleUrls: ['./demand-detail.component.css']
})
export class DemandDetailComponent implements OnInit {

  constructor(private demandService:DemandService,
    private activatedRoute:ActivatedRoute,
    private loginService:LoginService) { }
  demand:Demand;
  demandId:number;
  document:File;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.demandId=params["id"];
      this.setDemand();
    });
  }

  setDemand(){
    this.demandService.getDemandById(this.demandId).subscribe(data=>{
      this.demand = data;
      this.document = this.blobToFile(this.demand.document[0], "file");
    });
  }

  blobToFile = (theBlob: Blob, fileName:string): File => {       
    return new File(
        [theBlob as any], // cast as any
        fileName, 
        {
            lastModified: new Date().getTime(),
            type: theBlob.type 
        }
    )
}

}
