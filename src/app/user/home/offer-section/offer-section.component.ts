import { Component } from '@angular/core';

interface Offer {
  img: string;
  title: string;
  available: string;
  price: string;
  stars: number;
}

@Component({
  selector: 'app-offer-section',
  templateUrl: './offer-section.component.html',
  styleUrls: ['./offer-section.component.scss'],
})
export class OfferSectionComponent {
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
  ];
}
