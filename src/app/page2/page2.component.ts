import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit , AfterViewInit {

   @ViewChild('cards') Element!:ElementRef;

   imagePaths:string[] =[];
   block1Images: string[] =[];
   block2Images: string[] =[];
   block3Images: string[]= [];
   constructor(private renderer: Renderer2)
   {
    this.imagePaths = [
      "../../assets/images/1 (1).jpeg",
      "../../assets/images/1 (10).jpg",
      "../../assets/images/1 (5).jpg",
      "../../assets/images/1 (13).jpg",
      "../../assets/images/1 (7).jpg",
      "../../assets/images/1 (8).jpg",
      "../../assets/images/1 (1).png",
      "../../assets/images/1 (1).jpeg",
      "../../assets/images/1 (10).jpg",
      "../../assets/images/1 (5).jpg",
      "../../assets/images/1 (13).jpg",
      "../../assets/images/1 (7).jpg",
      "../../assets/images/1 (10).jpg",
      "../../assets/images/1 (8).jpg",
      "../../assets/images/1 (1).png",
      "../../assets/images/1 (1).jpeg",
      "../../assets/images/1 (10).jpg",
      "../../assets/images/1 (10).jpg",
    ];
    this.calculateImageArrays();
  }
  private calculateImageArrays(): void {
    const blockSize = Math.ceil(this.imagePaths.length / 3);
    this.block1Images = this.imagePaths.slice(0, blockSize);
    this.block2Images = this.imagePaths.slice(blockSize, 2 * blockSize);
    this.block3Images = this.imagePaths.slice(2 * blockSize);
  }

  ngAfterViewInit(): void
  {
    const cardsElement = this.Element.nativeElement;

    
    const images = Array.from(cardsElement.querySelectorAll('img'));

    images.forEach((img) => {
      this.renderer.setStyle(img, 'height', this.getRandomInt(500,700)+'px'); 
    });
  }
  files:string[] = [];

  ngOnInit(): void {
    

    
  }

 getRandomInt(min:number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
 

}
