import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {AgmCoreModule} from '@agm/core';

import { DiaryRoutingModule } from './diary-routing.module';
import { DiaryComponent } from './diary.component';

@NgModule({
  imports: [
    CommonModule,
    DiaryRoutingModule,
    SharedModule
  ],
  declarations: [DiaryComponent],
  bootstrap: [DiaryComponent]
})
export class DiaryModule { }
