import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-left-side',
  templateUrl: './payment-left-side.component.html',
  styleUrls: ['./payment-left-side.component.scss']
})
export class PaymentLeftSideComponent {
  @Input() paymentForm! :FormGroup;

  payment_methods: any[] = [
    { name: 'Cash on delivery', key: 'cash_on_delivery' },
    { name: 'Paypal', key: 'Paypal' },
    { name: 'Stripe', key: 'Stripe' },
    { name: 'Your balance', key: 'balance' }
];


}
