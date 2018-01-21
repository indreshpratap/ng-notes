import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ServiceWorkerModule } from "@angular/service-worker";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HeaderComponent } from "./layout/header.component";
import { AdminDashboardComponent } from "./admin/admin-dashboard/admin-dashboard.component";
import { UserDashboardComponent } from "./user/user-dashboard/user-dashboard.component";
import { UserRegistrationComponent } from "./admin/user-registration/user-registration.component";
import { ErrorsComponent } from "./shared/input-errors.component";

let routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", redirectTo: "", pathMatch: "full" },
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
        path: "admin",
        children: [
          { path: "", redirectTo: "/home/admin/dashboard", pathMatch:"full" },
          { path: "dashboard", component: AdminDashboardComponent },
          { path: "user-registration", component: UserRegistrationComponent }
        ]
      }
    ]
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
    AdminDashboardComponent,
    UserDashboardComponent,
    UserRegistrationComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
