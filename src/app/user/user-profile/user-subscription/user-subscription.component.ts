import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SubscriptionsService } from 'src/app/services/Subscriptions/subscriptions.service';
import { UserService } from 'src/app/services/user-service/user.service';

interface Order {
  id: number;
  price: number;
}

@Component({
  selector: 'app-user-subscription',
  templateUrl: './user-subscription.component.html',
  styleUrls: ['./user-subscription.component.scss'],
})
export class UserSubscriptionComponent {
  orders: Order[] = [
    {
      id: 1,
      price: 40,
    },
    {
      id: 2,
      price: 30,
    },
    {
      id: 3,
      price: 120,
    },
    {
      id: 4,
      price: 250,
    },
  ];

  total = 0;

  subId: any; //get subscribe id from local storage
  // subId= localStorage.getItem('subscribe_id');
  subscribeObject: any = [];
  currentDate: any;
  endDate: any;
  checkDate: any;
  todayDate: any;
  duration: any;
  subValue: any;
  userBalance: any;
  check: any = null;
  userId = localStorage.getItem('user_id');
  subscriptionData: any = {
    subscribe_id: null,
    start_date: null,
    end_date: null,
  };

  constructor(
    private subService: SubscriptionsService,
    private userService: UserService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.getSub();
    this.getDate();
    this.sumPrice();
    this.checkEndDate();
    this.checkSub();
  }

  getSub() {
    this.userService.getUserByID(this.userId).subscribe((response: any) => {
      this.userBalance = response.data.balance;
      this.subId = response.data.subscribe_id;
      if (this.subId) {
        this.subService.getById(this.subId).subscribe((subData: any) => {
          this.subscribeObject = subData.data;
          this.subValue = this.subscribeObject.subscribe_value;
        });
      } else {
        this.subscribeObject.name = 'None';
        this.subscribeObject.subscribe_value = 0;
        this.subscribeObject.benefit = 'None';
        this.subscribeObject.discount_value = 0;
        this.currentDate = 'None';
        this.endDate = 'None';
        this.total = 0;
      }
    });
  }

  getDate() {
    this.userService.getUserByID(this.userId).subscribe((response: any) => {
      this.currentDate = response.data.start_date;
      this.endDate = response.data.end_date;
    });
  }

  sumPrice() {
    this.userService.getUserByID(this.userId).subscribe((response: any) => {
      this.subId = response.data.subscribe_id;
      if (this.subId) {
        for (let i = 0; i < this.orders.length; i++) {
          //replace orders with history orders
          this.total += this.orders[i].price;
        }
      } else {
        this.total = 0;
      }
    });
  }

  checkEndDate() {
    this.userService.getUserByID(this.userId).subscribe((response: any) => {
      this.subId = response.data.subscribe_id;
      this.checkDate = response.data.end_date;
      if (this.subId) {
        this.todayDate = new Date();
        if (this.todayDate >= this.checkDate) {
          this.userService
            .setSubIdValue(this.userId, this.subscriptionData)
            .subscribe();
        }
      }
    });
  }

  checkSub() {
    this.userService.getUserByID(this.userId).subscribe((response: any) => {
      this.check = response.data.subscribe_id;
    });
  }

  setHTML(value: string) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
