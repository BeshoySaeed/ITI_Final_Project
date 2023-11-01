import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { OrderService } from 'src/app/services/OrderService/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [MessageService],
})
export class CartComponent implements OnInit {
  counter: number = 0;
  totalPrice: number = 0;
  itemPrice: number = 0;
  loading: boolean = true;
  cart: any = [];

  constructor(
    private orderService: OrderService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.orderService.cart().subscribe((cart: any) => {
      this.cart = cart.data;
      this.calculateTotalPrice();
      this.loading = false
    });
  }

  ngOnChange() {}

  removeFromCart(product: any) {
    const existingItemIndex = this.cart.findIndex(
      (item: any) => item.id === product.id
    );

    this.cart.splice(existingItemIndex, 1);

    this.calculateTotalPrice();
  }

  decreaseCounter(item: any) {
    if (item.qnt > 1) {
      item.qnt -= 1;
    } else {
      this.removeFromCart(item);
    }
    this.calculateTotalPrice();
    this.calculateItemPrice();
  }

  increaseCounter(item: any) {
    item.qnt += 1;
    this.calculateTotalPrice();
    this.calculateItemPrice();
  }

  calculateItemPrice() {
    // let items = this.cart.items
    // for (let i = 0; i < items.length; i++) {
    //   this.totalPrice+= items[i].quantity * items[i].item.price
    // }
  }

  calculateTotalPrice() {
    for (let item of this.cart.items) {
      this.totalPrice += item.item['price'] * item['quantity'];
      if(item.additions.length > 0) {
        for (let addition of item.additions){
          this.totalPrice += parseInt(addition.addition.price);
        }
      }
    }
  }
}
