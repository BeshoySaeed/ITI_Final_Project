import { Component } from '@angular/core';
import { SubscriptionsService } from 'src/app/services/Subscriptions/subscriptions.service';
import { DomSanitizer } from '@angular/platform-browser';

interface Offer {
  id: number;
  name: string;
  benefit: string;
  discount_value: number;
  duration: number;
  subscribe_value: number;
  active: boolean;
  created_at: string;
  updated_at: string;
}

@Component({
  selector: 'app-subscription-section',
  templateUrl: './subscription-section.component.html',
  styleUrls: ['./subscription-section.component.scss'],
})
export class SubscriptionSectionComponent {
  constructor(
    private subscriptionsService: SubscriptionsService,
    private sanitizer: DomSanitizer
  ) {}

  subscriptions: Offer[] = [];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.subscriptionsService.getAllActive().subscribe((subscriptions: any) => {
      this.subscriptions = subscriptions.data;
    });
  }

  setHTML(value: string) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
