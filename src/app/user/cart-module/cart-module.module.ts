import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    CartComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputNumberModule,
    FormsModule,
    ToastModule
  ]
})
export class CartModuleModule { }
