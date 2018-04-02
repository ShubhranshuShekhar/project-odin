import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectRoutingModule } from "./subject-routing.module";
import { SubjectComponent } from './subject.component';
import { SharedModule } from '../../../shared/shared.module';
import { SubjectSummaryComponent } from '../../../views/high-level/subject-summary/subject-summary.component';
import { SubjectGradesComponent } from "../../../views/high-level/subject-grades/subject-grades.component";


@NgModule({
  imports: [
    CommonModule,
    SubjectRoutingModule,
    SharedModule,
    

  ],
  declarations: [
    SubjectComponent,
    SubjectSummaryComponent,
    SubjectGradesComponent
  ],
  bootstrap: [SubjectComponent]
})
export class SubjectModule { 



}
