import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss'],
})
export class Page5Component implements OnInit {
  photos: Photo[] = [];
  filteredPhotos: Photo[] = [];
  allPhotosTemp:Photo[] = [];
  allPhotosTemp2:Photo[] = [];
  choosenImage: string = '';
  showAnim: boolean = false;
  showAnim2: boolean = false;
  showAnim3: boolean = false;
  mainBackground: string = '';

  constructor()
  {
    this.photos = [
      {
        photoPath : '../../assets/images/1 (1).jpeg',
        category: '1'
      },
      
      {
        photoPath : '../../assets/images/1 (10).jpg',
        category: '1'
      },
      
      {
        photoPath : '../../assets/images/1 (5).jpg',
        category: '1'
      },
      
      {
        photoPath : '../../assets/images/1 (13).jpg',
        category: '2'
      },
      
      {
        photoPath : '../../assets/images/1 (7).jpg',
        category: '2'
      },
      
      {
        photoPath : '../../assets/images/1 (8).jpg',
        category: '3'
      },
      
      {
        photoPath : '../../assets/images/1 (5).jpg',
        category: '3'
      },
      
      {
        photoPath : '../../assets/images/1 (10).jpg',
        category: '3'
      },
      

    ]
     this.allPhotosTemp = Object.assign(this.photos);
     this.allPhotosTemp2 = Object.assign(this.photos);
    this.choosenImage = this.photos[0].photoPath;
  }

  ngOnInit(): void {}

  whenClickImage(img: string) {
    this.choosenImage = img;
    this.showAnim = true;
    setTimeout(()=>{
      this.showAnim = false;
    },1900);
    
  }

  filterImage(category: string)
  {
    if(category == '0')
    {
      this.photos = this.allPhotosTemp;
      this.showAnim2 = true;
    }
    else 
    {
      this.photos= this.allPhotosTemp.filter(x=> x.category == category);
      
      this.allPhotosTemp = this.allPhotosTemp2;
      this.showAnim2 = true;
    }
    
    setTimeout(()=>{
      this.showAnim2 = false;
    },1900);
  }

  onAnimationEnd(event: AnimationEvent) {
    console.log("event",event);
    
  }

  onMouseEnter(imgphoto:string)
  {
    this.mainBackground = imgphoto;
    
  }
  onMouseLeave()
  {
    this.mainBackground = '';
  }
}


interface Photo{
  photoPath:string;
  category:string;
}