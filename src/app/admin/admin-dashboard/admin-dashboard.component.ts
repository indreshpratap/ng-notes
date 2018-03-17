import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  listOfUsers;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(environment.apiPath + "admin/get-users")
    .subscribe((response:any)=>{
     this.listOfUsers = response;
    });
  }

}
