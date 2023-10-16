import { Component } from '@angular/core';
// import {}  from

interface Offer {
  img: string;
  title: string;
  available: string;
  price: string;
  stars: number;
}

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss'],
})
export class MenuSectionComponent {
  items: string[] = ['Pizza', 'Meat', 'Fish', 'Extra'];

  offers: Offer[] = [
    {
      img: '../assets/images/home-images/burger.jpeg',
      title: 'Burger king',
      available: 'Avaliable',
      price: '20$',
      stars: 3,
    },
    {
      img: '../assets/images/home-images/burger.jpeg',
      title: 'Burger king',
      available: 'Avaliable',
      price: '20$',
      stars: 4,
    },
    {
      img: '../assets/images/home-images/burger.jpeg',
      title: 'Burger king',
      available: 'Avaliable',
      price: '20$',
      stars: 5,
    },
    {
      img: '../assets/images/home-images/burger.jpeg',
      title: 'Burger king',
      available: 'Avaliable',
      price: '20$',
      stars: 4,
    },
  ];
  constructor() {}

  ngOnInit() {}

  getStarsCount(stars: number) {
    let starsArr = [];
    for (let i = 0; i < stars; i++) {
      starsArr.push(i);
    }
    return starsArr;
  }
}
