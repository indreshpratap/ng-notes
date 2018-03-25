import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { ServiceWorkerModule } from "@angular/service-worker";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";

import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HeaderComponent } from "./layout/header.component";

import { UserDashboardComponent } from "./user/user-dashboard/user-dashboard.component";




import {StorageService} from "./storage.service";
import { ObservablesComponent } from './observables/observables.component';

import 'rxjs/Rx';
import { AdminModule } from "./admin/admin.module";
import { SharedModule } from "./shared/shared.module";
let routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", redirectTo: "", pathMatch: "full" },
  { path: "obser", component:ObservablesComponent },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        // component less routing
        path: "user",
        children: [{ path: "dashboard", component: UserDashboardComponent }]
      },
      {
        path:"admin",loadChildren:"app/admin/admin.module#AdminModule"
      }
      

     
    ],
   
  },
  // { path: "**", redirectTo: "", pathMatch: "full" }
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    UserDashboardComponent,
 
   ObservablesComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    
    RouterModule.forRoot(routes),
   
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
   
   //  AdminModule  // eager loading 
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
