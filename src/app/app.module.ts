import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
//import { NO_ERRORS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemandComponent } from './demand/demand.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { UserDemandListComponent } from './user-demand-list/user-demand-list.component';
import { DemandDetailComponent } from './demand-detail/demand-detail.component';
import { AdminDemandListComponent } from './admin-demand-list/admin-demand-list.component';
import { HomeComponent } from './home/home.component';
let id:number =0;
@NgModule({
  declarations: [									
    AppComponent,
      NavComponent,
      UserComponent,
      DemandComponent,
      RegisterComponent,
      UserDemandListComponent,
      DemandDetailComponent,
      AdminDemandListComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: 'userId',useValue:id}
  ],
  bootstrap: [AppComponent]
  // schemas: [
  //   NO_ERRORS_SCHEMA
  // ]
})
export class AppModule { }
