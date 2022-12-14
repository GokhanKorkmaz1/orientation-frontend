import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { DemandService } from '../services/demand.service';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css']
})
export class DemandComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private alertifyService:AlertifyService,
    private demandService:DemandService) { }

  demandAddForm:FormGroup;
  demand:any={};
  formData:FormData = new FormData();

  createDemandAddForm(){
    this.demandAddForm = this.formBuilder.group({
       name:["", Validators.required],
       surname:["", Validators.required],
       document:["", Validators.required],
       description:[""]
    });
  }

  ngOnInit() {
    this.createDemandAddForm();
  }

  onFileSelected(event) {
    const file:File = event.target.files[0];

    if (file) {
        this.formData.append("document", file);
    }
}

  add(){
    if(this.demandAddForm.valid){
      this.demand = Object.assign({},this.demandAddForm.value);
      this.formData.append("name",this.demand.name);
      this.formData.append("surname",this.demand.surname);
      if(this.demand.description){
        this.formData.append("description",this.demand.description);
      }
      else{
        this.formData.append("description",null);
      }
      
      this.demandService.addDemand(this.formData).subscribe(data =>{
        console.log(data);
        this.alertifyService.success(data.id + " numaralı talep gönderildi!");
        this.formData = null;
        this.demand = {};
        this.router.navigate(['user-demand-list']);
      });

    }
  }

}
