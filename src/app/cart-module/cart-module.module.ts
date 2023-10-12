import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';




@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule
  ]
})
export class CartModuleModule { }
