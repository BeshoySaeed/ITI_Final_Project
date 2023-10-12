import { Component } from '@angular/core';

interface Offer {
  title: string;
  available: string;
  price: string;
  stars: number;
}

@Component({
  selector: 'app-subscription-section',
  templateUrl: './subscription-section.component.html',
  styleUrls: ['./subscription-section.component.scss'],
})
export class SubscriptionSectionComponent {
  offers: Offer[] = [
    {
      title: '1000 EGP',
      available: 'Avaliable',
      price: '20$',
      stars: 3,
    },
    {
      title: '1000 EGP',
      available: 'Avaliable',
      price: '20$',
      stars: 4,
    },
    {
      title: '1000 EGP',
      available: 'subscription data',
      price: '20$',
      stars: 5,
    },
  ];
}
