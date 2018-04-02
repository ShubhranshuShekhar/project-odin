import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentComponent } from './assignment.component';
import { AssignmentRoutingModule } from './assignment-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AssignmentRoutingModule
  ],
  declarations: [AssignmentComponent],
  bootstrap: [AssignmentComponent]
})
export class AssignmentModule { }
