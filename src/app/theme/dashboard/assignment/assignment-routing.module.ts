import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AssignmentComponent } from './assignment.component';

const routes: Routes = [
  {
    path: '',
    component: AssignmentComponent,
    data: {
      title: 'Assignment Details',
      icon: 'icon-bookmark-alt',
      caption: 'List of all the assignments -- change this fucking text',
      status: true
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AssignmentRoutingModule { }
