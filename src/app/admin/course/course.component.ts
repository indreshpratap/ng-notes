import { Component, OnInit } from "@angular/core";
import { CourseService } from "../course.service";
import { HttpClient } from "@angular/common/http";
import {environment} from '../../../environments/environment';
@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.scss"]
})
export class CourseComponent implements OnInit {
  tags = [];
  //dependency injection of courseservice to this component
  constructor(private service: CourseService,private http: HttpClient) {}

  ngOnInit() {}

  addToTags(tag) {
    // check if tag has value and use indexof to check if same tag is not in tags
    if (tag.value && this.tags.indexOf(tag.value) === -1) {
      this.tags.push(tag.value);
      tag.reset();
    }
  }

  removeTag(indx) {
    if (confirm("Are you sure?")) {
      this.tags.splice(indx, 1);
    }
  }

  // only checking
  validateTag(value) {
    console.log(value);
  }
  saveCourse(courseform) {
    if (courseform.valid) {
      var data = courseform.value;
      data.tags = [...this.tags];
      // remove unwanted property
      delete data.tagInput;
      // calling save course function of CourseService
      this.service.saveCourse(data);

      this.http.post(environment.apiPath+"admin/reg-course",data).subscribe((res:any)=>{
        if(res.status===200) {
           alert("Form Saved");
      courseform.reset();
      this.tags = [];
        }
      });
    //  console.log(this.service.getAllCourses());
     
    }
  }
}
