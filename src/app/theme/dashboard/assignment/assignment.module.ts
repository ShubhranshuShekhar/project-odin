import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentComponent } from './assignment.component';
import { AssignmentRoutingModule } from './assignment-routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AssignmentRoutingModule,
    SharedModule
  ],
  declarations: [AssignmentComponent],
  bootstrap: [AssignmentComponent]
})
export class AssignmentModule { }
