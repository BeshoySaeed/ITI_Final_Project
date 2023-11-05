import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/OrderService/order.service';

@Component({
  selector: 'app-payment-order-list',
  templateUrl: './payment-order-list.component.html',
  styleUrls: ['./payment-order-list.component.scss'],
})
export class PaymentOrderListComponent {
  totalPrice: number = 0;
  items!: any;
  loading: boolean = true;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.orderService.cart().subscribe((cart: any) => {
      this.items = cart.data.items;
      this.calculate(this.items);
      this.loading = false;
    });
  }

  calculate(items: any) {
    for (let item of items) {
      if (item.additions.length > 0) {
        for (let addition of item.additions) {
          this.totalPrice += parseFloat(addition.addition.price);
        }
      }

      if (item.item.discount > 0) {
        this.totalPrice +=
          parseFloat(item.item['price']) -
          (parseFloat(item.item['price']) * parseFloat(item.item.discount)) / 100;
        this.totalPrice *= parseFloat(item['quantity']);
      } else {
        this.totalPrice += parseFloat(item.item['price']);
        this.totalPrice *= parseFloat(item['quantity']);
      }
    }
  }
}
