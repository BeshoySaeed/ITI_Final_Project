import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-order-list',
  templateUrl: './payment-order-list.component.html',
  styleUrls: ['./payment-order-list.component.scss']
})
export class PaymentOrderListComponent {
  totalPrice:number = 0;

  orderList= [
    {
      id: 0,
      name: "item 1",
      price: 10,
      quantity: 2
    },
    
    {
      id: 1,
      name: "item 2",
      price: 5,
      quantity: 1
    },

    {
      id: 2,
      name: "item 3",
      price: 10,
      quantity: 2
    },
  ]

  ngOnInit() {
    this.totalPrice = this.orderList.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }
}
