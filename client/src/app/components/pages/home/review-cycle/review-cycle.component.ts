import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


import { Chart } from 'chart.js';


@Component({
  selector: 'app-review-cycle',
  templateUrl: './review-cycle.component.html',
  styleUrls: ['./review-cycle.component.scss']
})
export class ReviewCycleComponent implements OnInit {

  @ViewChild('widgetsContent') public widgetsContent: ElementRef<any>;

  constructor() { }

  ngOnInit(): void {
  }


  scrollLeft() {
    this.widgetsContent.nativeElement.scrollLeft -= 150;
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += 150;
  }



  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  canvas2: any;
  ctx2: any;
  @ViewChild('mychart2') mychart2: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'bar',
      data: {
        datasets: [{
          label: 'A',
          data: [90, 90, 90],
          backgroundColor: "mediumaquamarine",
          borderColor: "mediumaquamarine",
          fill: true,
        },
        {
          label: 'B',
          data: [80, 80, 80],
          backgroundColor: "#f44336",
          borderColor: "#f44336",
          fill: true,
        },
        {
          label: 'C',
          data: [98, 98, 98, 100],
          backgroundColor: "yellow",
          borderColor: "yellow",
          fill: true,
        }],
        labels: ['August', 'September', 'October'],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            }
          }]
        }
      }
    });




    this.canvas2 = this.mychart2.nativeElement;
    this.ctx2 = this.canvas2.getContext('2d');

    new Chart(this.ctx2, {
      type: 'bar',
      data: {
        datasets: [{
          label: 'A',
          data: [90, 80, 99],
          backgroundColor: [
            'mediumaquamarine',
            '#f44336',
            'yellow'
          ],
          borderColor: [
            'mediumaquamarine',
            '#f44336',
            'yellow'
          ],
          fill: true
        }],
        labels: ['A', 'B', 'C'],
      },

      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            }
          }]
        }
      }
    });







  }



}
