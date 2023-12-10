import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularapp';
  clickedIndex: number | null = null;
  flag: boolean =false;

  divCount = Array(8).fill(0);
  myDictionary: { [key: number]: boolean } = {};

   constructor(private renderer: Renderer2)
  {
    for (let index = 0; index < 20; index++) {
      this.myDictionary[index]=false;
      
    }
   // this.checkDarkMode();
  }
  animations:string[] = [
    "bounce",
    "rubberBand",
    "pulse",
    "rubberBand",
    "flash"
  ];



  get getAnim()
  {
    const randomIndex = this.getRandomIntInclusive(0, this.animations.length - 1);
    return this.animations[randomIndex];
    
  }
    
  getRandomIntInclusive(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
   
    
    let random = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    console.log("rand",random);
    
     return random;
  }
  // @HostListener('document:click', ['$event']) 
  // onDocumentClick(event:Event)
  // {
   
   
  // }
  whenclick(i: number) {
    this.myDictionary[i] = !this.myDictionary[i];
    this.clickedIndex = this.myDictionary[i] ? i : null;
    
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    
    //this.checkDarkMode();
  }



  // checkDarkMode() {
  //   const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  //   if (darkModeMediaQuery.matches) {
  //     // Dark mode is preferred
  //     this.applyDarkModeStyles();
  //   } else {
  //     // Light mode is preferred
  //     this.applyLightModeStyles();
  //   }
  // }

  applyDarkModeStyles() {
    // Apply dark mode styles
    this.renderer.setStyle(document.body, 'background-color', '#333');
    this.renderer.setStyle(document.body, 'color', '#fff');
  }

  applyLightModeStyles() {
    // Apply light mode styles
    this.renderer.setStyle(document.body, 'background-color', '#fff');
    this.renderer.setStyle(document.body, 'color', '#333');
  }
}
