import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
@Component({
  selector: "app-user-registration",
  templateUrl: "./user-registration.component.html",
  styleUrls: ["./user-registration.component.scss"]
})
export class UserRegistrationComponent implements OnInit {
  regform = { name: "", email: "", group: "", address: "" };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    setTimeout(() => {
      this.regform.email = "indresh@gmail.com";
    }, 3000);
  }

  save(reg) {
    // console.log(reg.value);
    var name = reg.controls.name.value;
    var email = reg.controls.email.value;
    var data = { name: name, email: email };
    console.log(data);
    this.http
      .post(environment.apiPath + "admin/register-user", reg.value)
      .retry(3)
      .subscribe((response: any) => {
        if (response.status) {
          alert(response.msg);
          reg.reset();
        } else {
          alert("Failed to register user");
        }
      });
    // console.log("Form saved with data",this.regform);
  }
}
