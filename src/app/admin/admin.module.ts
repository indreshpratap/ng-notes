import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BatchComponent } from "./batch/batch.component";
import { CourseComponent } from "./course/course.component";
import { CourseContentComponent } from "./course-content/course-content.component";
import { QuestionBankComponent } from "./question-bank/question-bank.component";
import { UserRegistrationComponent } from "./user-registration/user-registration.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { CourseService } from "./course.service";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

const routes:Routes =[
  // {
    // path: "home/admin",
    // children: [
      { path: "", redirectTo: "/home/admin/dashboard", pathMatch:"full" },
      { path: "dashboard", component: AdminDashboardComponent },
      { path: "user-registration", component: UserRegistrationComponent },
      { path: "course", component: CourseComponent },
      { path: "course-content", component: CourseContentComponent },
      { path: "question-bank", component: QuestionBankComponent },
      { path: "batch", component: BatchComponent },

  //   ]
  // }
] 
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
 ],
  declarations: [
    BatchComponent,
    CourseComponent,
    CourseContentComponent,
    QuestionBankComponent,
    UserRegistrationComponent,
    AdminDashboardComponent
  ],
  providers: [CourseService]
})
export class AdminModule {}
