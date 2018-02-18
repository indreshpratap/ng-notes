import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NotesValidator } from "../../utils/notes-validators";
import { CourseService } from "../course.service";

@Component({
  selector: "app-course-content",
  templateUrl: "./course-content.component.html",
  styleUrls: ["./course-content.component.scss"]
})
export class CourseContentComponent implements OnInit {
  contentFormGroup: FormGroup;
  courses;
  constructor(private service: CourseService) {}

  ngOnInit() {
    this.initilizeForm();
    this.courses = this.service.getAllCourses();
  }

  initilizeForm() {
    this.contentFormGroup = new FormGroup({
      course: new FormControl("1", Validators.required),
      title: new FormControl(null, [
        Validators.required,
        Validators.maxLength(100)
      ]),
      seq: new FormControl(),
      content: new FormControl("",[NotesValidator.lowercaseOnly])
    });
  }

  disableIt() {
    this.contentFormGroup.get("content").disable();
  }
enableIt() {
  this.contentFormGroup.get("content").enable();
}

fillIt() {
  // setValue needs data for all the controls
  // this.contentFormGroup.setValue({
    // use patchValue if only wants to set fewer controls
  this.contentFormGroup.patchValue({
    course:"2",
    //seq:3,
    title:"This is filled title",
    "content":" this is our content T"
  });
}
  saveCourseContent() {
   
  }
}
