import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  getData(): Promise<any[]> {
    return new Promise((resolve) => {
      const images = [
        {
          itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
          alt: 'Description for Image 1',
          title: 'Title 1'
      },
      {
          itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg',
          alt: 'Description for Image 2',
          title: 'Title 2'
      },
      {
          itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
          alt: 'Description for Image 3',
          title: 'Title 3'
      },
      {
          itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4s.jpg',
          alt: 'Description for Image 4',
          title: 'Title 4'
      },
      {
          itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5.jpg',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5s.jpg',
          alt: 'Description for Image 5',
          title: 'Title 5'
      },
      {
          itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6.jpg',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6s.jpg',
          alt: 'Description for Image 6',
          title: 'Title 6'
      },
      {
          itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria7.jpg',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria7s.jpg',
          alt: 'Description for Image 7',
          title: 'Title 7'
      },
      {
          itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria8.jpg',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria8s.jpg',
          alt: 'Description for Image 8',
          title: 'Title 8'
      },
      {
          itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria9.jpg',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria9s.jpg',
          alt: 'Description for Image 9',
          title: 'Title 9'
      },
      {
          itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria10s.jpg',
          alt: 'Description for Image 10',
          title: 'Title 10'
      },
      ];
      
      resolve(images);
    });
  }

}