import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, AfterViewInit {
  @ViewChild('cards') myElementRef!: ElementRef;
  constructor(private renderer: Renderer2) { 
    
    this.test()
  }
  ngAfterViewInit(): void
  {
      this.renderer
      .setStyle(this.myElementRef.nativeElement,'background-color','red');
     
     let styles = getComputedStyle(this.myElementRef.nativeElement);
     let c = styles.getPropertyValue('background-color');
     console.log("color of bg",c);
     
    
  }

  ngOnInit(): void {
  }

  test()
  {
  
    console.log(this.myElementRef);
    
  }

}
