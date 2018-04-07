import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private storage:StorageService) { }

  ngOnInit() {

  }

  doLogin(form){
    this.storage.clear("user");
    this.http.post(environment.apiPath+"admin/login",form.value)
    .subscribe((res:any)=>{
      if(res.status===200){
        //all is ok;
        this.storage.storeJSON("user",res.data);
        this.router.navigate(["home"]);
      }else {
        alert(res.data.message);
      }
    });
  }
}
