import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { PaymentRightSideComponent } from './payment-right-side/payment-right-side.component';
import { PaymentLeftSideComponent } from './payment-left-side/payment-left-side.component';

@NgModule({
  declarations: [
    PaymentComponent,
    PaymentRightSideComponent,
    PaymentLeftSideComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputMaskModule,
    InputNumberModule
  ]
})
export class PaymentModule { }
