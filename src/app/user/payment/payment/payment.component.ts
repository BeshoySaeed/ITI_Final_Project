import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/OrderService/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  paymentForm!: FormGroup;
  cart: any = [];
  loading: boolean = true;
  formControllers = [
    'street',
    'area',
    'city',
    'building_name',
    'floor_number',
    'flat_number',
    'gps_location',
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    let isCart = localStorage.getItem('cart');
    if (isCart == 'false') {
      this.router.navigate(['/all-items/all']);
    }

    this.initializeForm();

    this.getCart()
      .then((response) => {
        this.cart = response.data;
      })
      .then(() => {
        this.setFormValues();
        this.loading = false;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  setFormValues() {
    this.paymentForm.controls['phone1'].setValue(
      this.cart.user.phones[0].phone
    );

    if(this.cart.user.phones.length == 2) {
      this.paymentForm.controls['phone2'].setValue(
        this.cart.user.phones[1].phone
      );
    }

    for (let control of this.formControllers) {
      this.paymentForm.controls[control].setValue(this.cart.user[control]);
    }
  }

  initializeForm() {
    this.paymentForm = this.fb.group({
      phone1: ['', Validators.pattern(/^\+20-1\d{9}$/)],
      phone2: ['', Validators.pattern(/^\+20-1\d{9}$/)],
      street: [''],
      area: [''],
      city: [''],
      building_name: [''],
      floor_number: [''],
      flat_number: [''],
      gps_location: [''],
      notes: [''],
      paymentMethod: ['cash_on_delivery'],
      discountCode: [''],
      confirmInstructions: [false],
    });
  }

  getCart(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.orderService.cart().subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  onSubmit() {
    console.log(this.paymentForm);
  }
}
