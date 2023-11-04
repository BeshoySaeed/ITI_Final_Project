import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  getData(): Promise<any[]> {
    return new Promise((resolve) => {
      const images: any[] = [
        {
          itemImageSrc: 'https://thumbs.dreamstime.com/b/wooden-table-food-top-view-cafe-102532611.jpg?w=1400',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg',
          alt: 'Description for Image 2',
          title1: 'Food Number 1',
          title2: 'Food Number 2',
          title3: 'Food Number 3'  
            },
        {
          itemImageSrc: 'https://images.pexels.com/photos/15913452/pexels-photo-15913452/free-photo-of-poke-bowl-with-salmon.jpeg?auto=compress&cs=tinysrgb&w=600',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
          alt: 'Description for Image 1',
          title1: 'Food Number 1',
          title2: 'Food Number 2',
          title3: 'Food Number 3'

      },
     
      {
          itemImageSrc: 'https://thumbs.dreamstime.com/b/assorted-indian-recipes-food-various-spices-rice-wooden-table-92742528.jpg?w=768',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
          alt: 'Description for Image 3',
          title1: 'Food Number 1',
          title2: 'Food Number 2',
          title3: 'Food Number 3'
              },
      {
          itemImageSrc: 'https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg?auto=compress&cs=tinysrgb&w=600',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4s.jpg',
          alt: 'Description for Image 4',
          title1: 'Food Number 1',
          title2: 'Food Number 2',
          title3: 'Food Number 3'
              },
      {
          itemImageSrc: 'https://images.pexels.com/photos/4871119/pexels-photo-4871119.jpeg?auto=compress&cs=tinysrgb&w=600',
          thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5s.jpg',
          alt: 'Description for Image 5',
          title1: 'Food Number 1',
          title2: 'Food Number 2',
          title3: 'Food Number 3'
              },
      

      ];
      
      resolve(images);
    });
  }

}