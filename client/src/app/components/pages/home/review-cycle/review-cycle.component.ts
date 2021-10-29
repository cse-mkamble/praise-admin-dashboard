import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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


}
