import { SubjectDetailComponent } from './subject-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';
import { SharedModule } from '../../../shared/shared.module';
import { SubjectDetailRoutingModule } from "./subject-detail-routing.module";
import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    Ng2GoogleChartsModule,
    SubjectDetailRoutingModule,
    ChartModule
  ],
  declarations: [
    SubjectDetailComponent
  ],
  bootstrap:[
    SubjectDetailComponent
  ]
})
export class SubjectDetailModule { }
