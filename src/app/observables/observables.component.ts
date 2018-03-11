import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-observables",
  templateUrl: "./observables.component.html",
  styleUrls: ["./observables.component.scss"]
})
export class ObservablesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //manually created
    let obser = Observable.create(observer => {
      observer.next(10);
      observer.next(20);

      setTimeout(()=>{
        observer.next(30);
      },1000);
      setTimeout(()=>{
        observer.next(40);
      },2000);
      setTimeout(()=>{
        observer.next(50);
      },3000);
      setTimeout(()=>{
        observer.next(60);
      },4000);
    });

 let firstsub=   obser.subscribe(data => {
      console.log("First: ",data);
    });

    setTimeout(()=>{
      firstsub.unsubscribe();
    },2000);
    
    setTimeout(()=>{
      obser.subscribe(data => {
        console.log("Second: ",data);
      });
    },3000);
  }
}
