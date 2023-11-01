import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  paymentForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    let isCart = localStorage.getItem('cart')
    if(isCart == 'false') {
      this.router.navigate(['/all-items/all']);
    }

    this.paymentForm = this.fb.group(
      {
        // firstName: ['', Validators.pattern(/^[a-zA-Z]+$/)],
        // lastName: ['', Validators.pattern(/^[a-zA-Z]+$/)],
        phone1: ['', Validators.pattern(/^\+20-1\d{9}$/)],
        phone2: ['', Validators.pattern(/^\+20-1\d{9}$/)],
        address: [''],
        area: [''],
        city: [''],
        buildingNumber: [''],
        floorNumber: [''],
        flatNumber: [''],
        locationOnGps: [''],
        notes: [''],
        paymentMethod: ['cash_on_delivery'],
        discountCode: [''],
        confirmInstructions: [false]
      },
    );
  }

  onSubmit() {
    console.log(this.paymentForm);
  }
}
