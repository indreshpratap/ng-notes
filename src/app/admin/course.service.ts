import { Injectable } from "@angular/core";

@Injectable()
export class CourseService {
    courses:Array<any> = [];
    uid:number=0;
    saveCourse(data) {
        // '...' copy the object or array
        let copied = {...data};
        copied.id = ++this.uid;
        this.courses.push(copied);
    }

    getAllCourses() {
        return this.courses;
    }
}