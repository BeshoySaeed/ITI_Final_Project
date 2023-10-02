import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-left-side',
  templateUrl: './payment-left-side.component.html',
  styleUrls: ['./payment-left-side.component.scss']
})
export class PaymentLeftSideComponent {
  @Input() paymentForm! :FormGroup;
}
