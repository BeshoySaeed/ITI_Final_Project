import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-right-side',
  templateUrl: './payment-right-side.component.html',
  styleUrls: ['./payment-right-side.component.scss']
})
export class PaymentRightSideComponent {
  @Input() paymentForm! :FormGroup;
}
