import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { OrderService } from 'src/app/services/OrderService/order.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [MessageService],
})
export class CartComponent implements OnInit {
  totalPrice: number = 0;
  loading: boolean = true;
  changed: boolean = false;
  userId: any = localStorage.getItem('user_id');
  userBalance: any;
  showDataError: boolean = false;
  Order_id: any;
  messageBalance: any = 'your balance not enough';
  cart: any = [];

  constructor(
    private orderService: OrderService,
    private messageService: MessageService,
    private router: Router,
    private httpUser: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.orderService.getUserOrders(this.userId).subscribe((data: any) => {
      this.Order_id = data.filter((x: any) => {
        return x.status == 'cart';
      })[0].id;

      console.log(this.Order_id);
      this.ChangeStatus();
    });

    this.getCart();

    this.httpUser.getUserByID(this.userId).subscribe((res) => {
      this.userBalance = res.data.balance;
    });
  }
  ChangeStatus() {
    this.route.queryParams.subscribe((params) => {
      const message = params['original[message]'];
      const status = params['original[status]'];
      console.log(params);
      if (status == 'success') {
        console.log(this.Order_id);
        this.orderService
          .editOrder(this.Order_id, {
            status: 'processing',
          })
          .subscribe();
        setTimeout(() => {
          window.location.href = 'http://localhost:4200/home';
        }, 30);
      }
    });
  }

  getCart() {
    this.orderService.cart().subscribe((cart: any) => {
      this.cart = cart.data;
      this.calculateTotalPrice();
      this.loading = false;

      if (this.cart.items.length == 0) {
        localStorage.setItem('cart', 'false');
      }
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

  calculate(item: any) {
    let totalPrice = 0;
    if (item.additions.length > 0) {
      for (let addition of item.additions) {
        totalPrice += parseFloat(addition.addition.price);
      }
    }

    if (item.item.discount > 0) {
      totalPrice +=
        parseFloat(item.item['price']) -
        (parseFloat(item.item['price']) * parseFloat(item.item.discount)) / 100;
      totalPrice *= parseFloat(item['quantity']);
    } else {
      totalPrice += parseFloat(item.item['price']);
      totalPrice *= parseFloat(item['quantity']);
    }

    return totalPrice;
  }

  InputClicked() {
    this.changed = true;
  }

  editItem(action: string, item: any) {
    this.loading = true;

    let data = {
      order_item_id: item.id,
      quantity: 0,
    };

    if (action == 'edit') {
      if (this.changed) {
        data.quantity = item.quantity;
      }
    }

    this.orderService.updateCart(data).subscribe((data: any) => {
      if (data.status == 'success') {
        this.getCart();
        this.message();
      }
    });
  }

  removeAddition(id: number) {
    this.loading = true;
    this.orderService.updateAdditionCart(id).subscribe((data: any) => {
      if (data.status == 'success') {
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
    let user = this.cart.user;
    if (
      user.street == null ||
      user.street.length == 0 ||
      user.area == null ||
      user.area.length == 0 ||
      user.city == null ||
      user.city.length == 0 ||
      user.building_name == null ||
      user.building_name.length == 0 ||
      user.floor_number == null ||
      user.floor_number.length == 0
    ) {
      this.showDataError = true;
    } else {
      this.router.navigate(['/payment']);
    }
  }

  toProfile() {
    this.router.navigate(['/profile']);
  }
}
