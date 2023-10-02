import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  paymentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.paymentForm = this.fb.group(
      {
        firstName: ['', Validators.pattern(/^[a-zA-Z]+$/)],
        lastName: ['', Validators.pattern(/^[a-zA-Z]+$/)],
        phone1: ['', Validators.pattern(/^\+20-1\d{9}$/)],
        phone2: ['', Validators.pattern(/^\+20-1\d{9}$/)],
        address: [''],
        area: [''],
        city: [''],
        buildingNumber: [''],
        floorNumber: [''],
        flatNumber: [''],
        locationOnGps: [''],
        notes: ['', Validators.pattern(/^[a-zA-Z][^0-9\s\W]+/)],
        paymentMethod: [''],
        discountCode: ['']
      },
    );
  }

  onSubmit() {
    console.log(this.paymentForm);
  }
}
