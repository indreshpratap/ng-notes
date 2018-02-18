import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormArray } from "@angular/forms";
import { NotesValidator } from "../../utils/notes-validators";

@Component({
  selector: "app-question-bank",
  templateUrl: "./question-bank.component.html",
  styleUrls: ["./question-bank.component.scss"]
})
export class QuestionBankComponent implements OnInit {
  queForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initilizeForm();
  }

  initilizeForm() {
    this.queForm = this.fb.group({
      course: ["", Validators.required],
      stage: ["", [Validators.required, Validators.maxLength(15)]],
      description: [],
      questions: this.fb.array([])
    });
  }
  get questionArray() {
    return this.queForm.get("questions") as FormArray;
  }

  addQuestion() {
    let que = this.fb.group({
      question: ["", [Validators.required]],
      option1: ["", [Validators.required]],
      option2: ["", [Validators.required]],
      option3: ["", [Validators.required]],
      option4: ["", [Validators.required]],
      correct1: [false],
      correct2: [false],
      correct3: [false],
      correct4: [false]
    },{validator:[NotesValidator.oneOptionRequired]});

    this.questionArray.push(que);
  }

  remove(indx) {
    this.questionArray.removeAt(indx);
  }

  save() {
    console.log(this.queForm.value);
  }
}
