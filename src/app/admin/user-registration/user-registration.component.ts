import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  regform={name:"",email:"",group:""};
  constructor() { }

  ngOnInit() {
    setTimeout(()=> {
      this.regform.email="indresh@gmail.com";
    },3000);
  }

  save(reg) {
    console.log(reg);
    // console.log("Form saved with data",this.regform);
  }

}
