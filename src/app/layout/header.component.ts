import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StorageService } from "../storage.service";

@Component({
  selector: "app-header",
  template: `
    <mat-toolbar>
  <mat-toolbar-row>
    <span>NG Notes</span>
    <a *ngFor="let l of links" class="btn btn-link" [routerLink]="l.link">{{l.title}}</a>
    <a class="btn btn-link" (click)="doLogout()">Logout</a>
   <!-- <a  mat-button routerLink="/home/admin/dashboard">Admin Dashboard</a>
    <a  mat-button routerLink="/home/admin/user-registration">User Registration</a>
    <a  mat-button routerLink="/home/admin/course">Course Registration</a> -->
  </mat-toolbar-row>
</mat-toolbar>

    `
})
export class HeaderComponent implements OnInit {
  links: Array<any>;

  HOME: string;
  HOME_ADMIN: string;
  HOME_USER: string;

  constructor(private router:Router,private storage:StorageService) {}

  ngOnInit() {
    this.HOME = "/home/";
    this.HOME_ADMIN = this.HOME + "admin/";
    this.HOME_USER = this.HOME + "user/";
    this.links = [
      { title: "User Dash", link: this.HOME_USER + "dashboard" },
      { title: "Admin Dash", link: this.HOME_ADMIN+"dashboard" },
      { title: "User Reg", link: this.HOME_ADMIN+"user-registration"},
      { title: "Course", link: this.HOME_ADMIN+"course" },
      { title: "Course content", link: this.HOME_ADMIN+"course-content"},
      { title: "Questions", link: this.HOME_ADMIN+"question-bank"},
      { title: "Batch", link: this.HOME_ADMIN+"batch"},
    //   { title: "", link: "" },
    //   { title: "", link: "" },
    //   { title: "", link: "" },
    //   { title: "", link: "" },
    //   { title: "", link: "" }
    ];
  }

  doLogout(){
    this.storage.clear("user");
    this.router.navigate(["/"]);
  }
}
