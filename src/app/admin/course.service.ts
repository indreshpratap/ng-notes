import { Injectable } from "@angular/core";
import { StorageService } from "../storage.service";

@Injectable()
export class CourseService {
  courses: Array<any> = [];
  uid: number = 0;
  COURSE_KEY='courses';

  constructor(private store:StorageService) {
    // this.fetchFromLocal();
    this.courses= store.fetchJSON(this.COURSE_KEY)||[];
  }
  saveCourse(data) {
    // '...' copy the object or array
    let copied = { ...data };
    copied.id = ++this.uid;
    this.courses.push(copied);
    // this.storeToLocal();
    this.store.storeJSON(this.COURSE_KEY,this.courses);
  }

  getAllCourses() {
    return this.courses;
  }

//   storeToLocal() {
//       console.log(JSON.stringify(this.courses));
//       localStorage.setItem("courses",JSON.stringify(this.courses));
//   }

//   fetchFromLocal() {
//     let courses = localStorage.getItem("courses");
//     if (courses) {
//       this.courses = JSON.parse(courses);
//     }
//   }
}
