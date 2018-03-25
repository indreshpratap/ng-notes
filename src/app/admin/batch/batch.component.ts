import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  save(frm) {
    var data = frm.value;
    this.http
    .post(environment.apiPath + "admin/reg-batch", data)
    
    .subscribe((response: any) => {
      alert("Done");
      frm.reset();
    });
  }

}
