import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Home',
      status: false
    },
    children: [
      {
        path: 'assignments',
        loadChildren: './assignment/assignment.module#AssignmentModule'
      },
      {
        path: 'subjectdetail',
        loadChildren: './subject-detail/subject-detail.module#SubjectDetailModule'
      },
      {
        path: 'subject',
        loadChildren: './subject/subject.module#SubjectModule'
      },
      {
        path: 'diary',
        loadChildren: './diary/diary.module#DiaryModule'
      },
      {
        path: 'default',
        loadChildren: './default/default.module#DefaultModule'
      },
      {
        path: 'ecommerce',
        loadChildren: './ecommerce/ecommerce.module#EcommerceModule'
      },
      {
        path: 'crm-dashboard',
        loadChildren: './crm-dashboard/crm-dashboard.module#CrmDashboardModule'
      },
      {
        path: 'analytics',
        loadChildren: './analytics/analytics.module#AnalyticsModule'
      },
      {
        path: 'project',
        loadChildren: './project/project.module#ProjectModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
