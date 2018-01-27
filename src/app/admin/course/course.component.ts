import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.scss"]
})
export class CourseComponent implements OnInit {
  tags = [];
  constructor() {}

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
      data.tags = this.tags;
      // remove unwanted property
      delete data.tagInput;

      alert("Form Saved");
      console.log(data);
    }
  }
}