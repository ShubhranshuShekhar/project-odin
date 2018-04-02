import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.css']
})
export class SubjectDetailComponent implements OnInit {

  public newUserData: any;
  public newUserOption: any;

  constructor() { }

  ngOnInit() {
    this.newUserData = {
      datasets: [{
        data: [10, 34, 15, 25],
        backgroundColor: ['#11c15b', '#448aff', '#ff5252', '#CCCC00'],
        label: 'Dataset 1'
      }],
      labels: ['A', 'B', 'C', 'D']
    };
    this.newUserOption = {
      responsive: true,
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: '',
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    };
  }

}
