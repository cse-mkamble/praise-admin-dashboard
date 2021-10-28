import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  @ViewChild('widgetsContent') public widgetsContent: ElementRef<any>;
  @ViewChild('widgetsContent2') public widgetsContent2: ElementRef<any>;

  ngOnInit(): void {
  }

  scrollLeft() {
    this.widgetsContent.nativeElement.scrollLeft -= 150;
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += 150;
  }


  scrollLeft2() {
    this.widgetsContent2.nativeElement.scrollLeft -= 360;
  }

  scrollRight2() {
    this.widgetsContent2.nativeElement.scrollLeft += 360;
  }


}
