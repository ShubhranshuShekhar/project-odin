import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiaryComponent } from "./diary.component";

const routes: Routes = [
  {
    path: '',
    component: DiaryComponent,
    data: {
      title: 'Diary',
      icon: 'icon-bookmark-alt',
      caption: 'Welcome to the Diary of your ward!',
      status: true
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiaryRoutingModule { }
