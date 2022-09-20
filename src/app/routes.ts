import { UserComponent } from "./user/user.component";
import { Routes } from "@angular/router";
import { DemandComponent } from "./demand/demand.component";
import { RegisterComponent } from "./register/register.component";
import { UserDemandListComponent } from "./user-demand-list/user-demand-list.component";
import { DemandDetailComponent } from "./demand-detail/demand-detail.component";
import { AdminDemandListComponent } from "./admin-demand-list/admin-demand-list.component";
import { HomeComponent } from "./home/home.component";
//import { DemandListComponent } from "./demand-list/demand-list.component";

export const appRoutes:Routes = [
    //{path:"login", component: LoginComponent},
    {path:"home", component: HomeComponent},
    {path:"user/:id", component: UserComponent},
    {path:"demand", component: DemandComponent},
    {path:"user-demand-list", component: UserDemandListComponent},
    {path:"admin-demand-list", component: AdminDemandListComponent},
    {path:"demand-detail/:id", component: DemandDetailComponent},
    {path:"register", component: RegisterComponent},
    {path:"**", redirectTo:"home", pathMatch:"full"}
];
