import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/OrderService/order.service';
import { SharedpriceService } from 'src/app/services/Shared-price/sharedprice.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-balance-details',
  templateUrl: './balance-details.component.html',
  styleUrls: ['./balance-details.component.scss'],
})
export class BalanceDetailsComponent {
  totalPrice: number = 0;
  items!: any;
  loading: boolean = true;
  userId: any = localStorage.getItem('user_id');
  userBalance!: number;
  constructor(
    private orderService: OrderService,
    private SharedPrice: SharedpriceService,
    private httpUser: UserService
  ) {}

  ngOnInit() {
    this.httpUser.getUserByID(this.userId).subscribe((user) => {
      this.userBalance = user.data.balance;
    });

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
          (parseFloat(item.item['price']) * parseFloat(item.item.discount)) /
            100;
        this.totalPrice *= parseFloat(item['quantity']);
      } else {
        this.totalPrice += parseFloat(item.item['price']);
        this.totalPrice *= parseFloat(item['quantity']);
      }
    }
    this.SharedPrice.SetPrice(this.totalPrice);
  }
}
