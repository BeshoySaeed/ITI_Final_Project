import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-right-side',
  templateUrl: './payment-right-side.component.html',
  styleUrls: ['./payment-right-side.component.scss']
})
export class PaymentRightSideComponent {
  @Input() paymentForm! :FormGroup;
  Pay(){
    if(this.paymentForm.value.paymentMethod == 'Paypal'){
      console.log('PAYPAL')
    }
    else if(this.paymentForm.value.paymentMethod == 'Stripe'){
      console.log('Stripe')
    }
    else if(this.paymentForm.value.paymentMethod == 'balance'){
      console.log('balance')
    }else(
      console.log('cash')
    )
  }
}
