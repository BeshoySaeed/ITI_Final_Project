import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private messageService: MessageService,
    private router: Router
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

  calculateTotalPrice() {
    this.totalPrice = 0;
    for (let item of this.cart.items) {
      this.totalPrice += this.calculate(item);
    }
  }
  
  calculate(item:any) {
    let totalPrice = 0
    if(item.additions.length > 0) {
      for (let addition of item.additions){
        totalPrice += parseFloat(addition.addition.price);
      }
    }

    if(item.item.discount > 0) {
      totalPrice += ((parseFloat(item.item['price']) * parseFloat(item.item.discount)) / 100);
      totalPrice *= parseFloat(item['quantity'])
    } else {
      totalPrice += parseFloat(item.item['price']);
      totalPrice *= parseFloat(item['quantity'])
    }

    return totalPrice;
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
        this.message();
      }
    });
  }

  removeAddition(id:number) {
    this.loading = true;
    this.orderService.updateAdditionCart(id).subscribe((data: any) => {
      if(data.status == 'success'){
        this.getCart();
        this.message();
      }
    });
  }

  message() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Cart is updated',
    });
  }

  completeOrder() {
    this.router.navigate(['/payment']);
  }
}
