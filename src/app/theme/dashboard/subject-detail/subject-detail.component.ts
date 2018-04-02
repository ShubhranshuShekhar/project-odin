import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.css']
})
export class SubjectDetailComponent implements OnInit {
  donutChartData =  {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['A - Excellent', 11],
      ['B - Good', 2],
      ['C - Average', 2],
      ['D - Below Average', 2],
      ['E - Poor', 7]
    ],
    options: {
     
      title: '',
      pieHole: 0.4,
      colors: ['#2ecc71', '#01C0C8', '#FB9678', '#5faee3', '#f4d03f']
    },
  };
  public newUserData: any;
  public newUserOption: any;

  constructor() { }

  ngOnInit() {
    this.newUserData = {
      datasets: [{
        data: [10, 34, 15],
        backgroundColor: ['#11c15b', '#448aff', '#ff5252'],
        label: 'Dataset 1'
      }],
      labels: ['Satisfied', 'Unsatisfied', 'Cool']
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
