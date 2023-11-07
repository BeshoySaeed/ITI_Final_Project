import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { PaymentRightSideComponent } from './payment-right-side/payment-right-side.component';
import { PaymentLeftSideComponent } from './payment-left-side/payment-left-side.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PaymentOrderListComponent } from './payment-sub-childs/payment-order-list/payment-order-list.component';
import { OrderInstructionsComponent } from './payment-sub-childs/order-instructions/order-instructions.component';
import { PaymentUserBalanceComponent } from './payment-sub-childs/payment-user-balance/payment-user-balance.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { BalanceDetailsComponent } from './payment-sub-childs/balance-details/balance-details.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CreditCardFormComponent } from './payment-sub-childs/credit-card-form/credit-card-form.component';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [
    PaymentComponent,
    PaymentRightSideComponent,
    PaymentLeftSideComponent,
    PaymentOrderListComponent,
    OrderInstructionsComponent,
    CreditCardFormComponent,
    PaymentUserBalanceComponent,
    BalanceDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputMaskModule,
    InputNumberModule,
    InputTextareaModule,
    RadioButtonModule,
    ProgressSpinnerModule,
    MessagesModule
  ],
})
export class PaymentModule {}
