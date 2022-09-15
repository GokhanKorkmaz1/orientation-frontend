import { UserComponent } from "./user/user.component";
import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DemandComponent } from "./demand/demand.component";
import { RegisterComponent } from "./register/register.component";
import { UserDemandListComponent } from "./user-demand-list/user-demand-list.component";
import { DemandDetailComponent } from "./demand-detail/demand-detail.component";
//import { DemandListComponent } from "./demand-list/demand-list.component";

export const appRoutes:Routes = [
    {path:"user/:id", component: UserComponent},
    {path:"login", component: LoginComponent},
    {path:"demand", component: DemandComponent},
    //{path:"demand-list", component: DemandListComponent},
    {path:"user-demand-list", component: UserDemandListComponent},
    {path:"demand-detail/:id", component: DemandDetailComponent},
    {path:"register", component: RegisterComponent},
    {path:"**", redirectTo:"login", pathMatch:"full"}
];
