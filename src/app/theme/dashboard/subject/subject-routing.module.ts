import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { SubjectComponent } from "./subject.component";

const routes: Routes = [
  {
    path: '',
    component: SubjectComponent,
    data: {
      title: 'Subject',
      icon: 'icon-bookmark-alt',
      caption: 'Here is the list of subject of your ward TODO - change this line',
      status: true
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SubjectRoutingModule { }
