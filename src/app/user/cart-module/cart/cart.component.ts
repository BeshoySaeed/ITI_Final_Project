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
  changed: boolean = false;
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

  removeFromCart(product: any) {
    const existingItemIndex = this.cart.findIndex(
      (item: any) => item.id === product.id
    );

    this.cart.splice(existingItemIndex, 1);

    this.calculateTotalPrice();
  }

  calculateItemPrice(item:any) {
    let totalPrice = 0;
    if(item.item.discount > 0) {
      totalPrice += ((parseFloat(item.item['price']) * parseFloat(item.item.discount)) / 100) * parseFloat(item['quantity']);
    } else {
      totalPrice += parseFloat(item.item['price']) * parseFloat(item['quantity']);
    }

    if(item.additions.length > 0) {
      for (let addition of item.additions){
        totalPrice += parseFloat(addition.addition.price);
      }
    }

    return totalPrice;
  }

  calculateTotalPrice() {
    this.totalPrice = 0;
    for (let item of this.cart.items) {
      if(item.item['discount'] > 0) {
        this.totalPrice += ((parseFloat(item.item['price']) * parseFloat(item.item['discount'])) / 100) * parseFloat(item['quantity']);
      } else {
        this.totalPrice += parseFloat(item.item['price']) * parseFloat(item['quantity']);
      }

      if(item.additions.length > 0) {
        for (let addition of item.additions){
          this.totalPrice += parseFloat(addition.addition.price);
        }
      }
    }
  }

  InputClicked() {
    this.changed = true
  }

  editItem(action:string, item:any) {
    this.loading = true

    let data = {
      order_item_id: item.id,
      quantity: 0
    }
    
    if(action == 'edit') {
      if(this.changed) {
        data.quantity = item.quantity
      }
    } 
    
    this.orderService.updateCart(data).subscribe((data: any) => {
      if(data.status == 'success'){
        this.getCart();
      }
    });
  }
}
