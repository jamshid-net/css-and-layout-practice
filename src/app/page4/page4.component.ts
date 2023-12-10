import { AfterViewInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component  {

 
  @ContentChild('arrays', { static: false }) arraysElement: ElementRef | undefined;

  someElement:any;

  constructor(){
    this.ngAfterContentInit();
  }

  ngAfterContentInit() {
    if (this.arraysElement) {
    this.someElement = this.arraysElement.nativeElement.innerHTML;
    
      console.log('Content inside <app-content1>: ', this.arraysElement.nativeElement.innerHTML);
    }
  }

}
