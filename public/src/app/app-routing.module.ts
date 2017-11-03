import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ShowListComponent } from "./show-list/show-list.component";


const routes: Routes = [
{ path: '', pathMatch: 'full', component: LoginComponent },
{ path: 'index', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'show/:id', component: ShowListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
