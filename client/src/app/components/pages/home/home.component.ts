import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  
  @ViewChild('widgetsContent2') public widgetsContent2: ElementRef<any>;

  ngOnInit(): void {
  }

  scrollLeft2() {
    this.widgetsContent2.nativeElement.scrollLeft -= 360;
  }

  scrollRight2() {
    this.widgetsContent2.nativeElement.scrollLeft += 360;
  }


}
