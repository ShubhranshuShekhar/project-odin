import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectSummaryComponent } from './subject-summary/subject-summary.component';
import { SubjectGradesComponent } from './subject-grades/subject-grades.component';
import { SharedModule } from '../../shared/shared.module';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    Ng2GoogleChartsModule,
    
  ],
  declarations: [SubjectSummaryComponent, SubjectGradesComponent]
})
export class HighLevelModule { }
