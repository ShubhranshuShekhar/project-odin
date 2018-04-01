import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectRoutingModule } from "./subject-routing.module";
import { SubjectComponent } from './subject.component';
import { SharedModule } from '../../../shared/shared.module';
import { SubjectSummaryComponent } from '../../../views/high-level/subject-summary/subject-summary.component';



@NgModule({
  imports: [
    CommonModule,
    SubjectRoutingModule,
    SharedModule,

  ],
  declarations: [
    SubjectComponent,
    SubjectSummaryComponent
  ],
  bootstrap: [SubjectComponent]
})
export class SubjectModule { }
