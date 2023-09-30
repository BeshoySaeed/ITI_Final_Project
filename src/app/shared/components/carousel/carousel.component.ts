import { Component } from '@angular/core';


 
interface Car {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  image?:string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  
  cars: Car[] = [];
  
  constructor() { }

  ngOnInit() {
      this.cars = [
          {
              id: '1',
              name: 'Bugatti',
              description: 'Racing car',
              price: 800,
          },
          {
              id: '2',
              name: 'Ferrari',
              description: 'The Prancing Horse',
              price: 1500,
          },
          {
              id: '3',
              name: 'Porsche',
              description: 'Full spectrum',
              price: 10000,
          },
      ];
  }
  title = 'GFG';
  
  images: any[] = [
      {
          previewImageSrc:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png',
          thumbnailImageSrc:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png',
          alt: 'Cascading Style Sheet',
          title: 'CSS'
      },
      {
          previewImageSrc:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png',
          thumbnailImageSrc:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png',
          alt: 'Angular for Front end',
          title: 'Angular'
      },
      {
          previewImageSrc:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/Java.png',
          thumbnailImageSrc:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/Java.png',
          alt: 'Java Programming Language',
          title: 'Java'
      },
      {
          previewImageSrc:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401124017/HTML-Tutorial.png',
          thumbnailImageSrc:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401124017/HTML-Tutorial.png',
          alt: 'HyperText Markup Language',
          title: 'HTML'
      },
  ];

}