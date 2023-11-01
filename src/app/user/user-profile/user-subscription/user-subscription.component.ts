import { Component } from '@angular/core';
import { SubscriptionsService } from 'src/app/services/Subscriptions/subscriptions.service';

interface Order {
  id: number;
  price: number;

}

@Component({
  selector: 'app-user-subscription',
  templateUrl: './user-subscription.component.html',
  styleUrls: ['./user-subscription.component.scss']
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

   total =0 ;    


  subId=1;    //get subscribe id from local storage 
  subscribeObject:any=[];
  currentDate : any ;
  endDate: any;
  

  constructor(private subService: SubscriptionsService) {}
  
  ngOnInit(){
    this.getSub();
    this.calculateDate();
    this.sumPrice();
  }


  getSub(){
    this.subService.getById(this.subId).subscribe((subData: any) => {
      this.subscribeObject = subData.data;
    //  console.log(this.subscribeObject);
    })

  }

  calculateDate() {

   
    this.currentDate = new Date();

    localStorage.setItem("startDate", this.currentDate.getTime());  
    this.endDate = new Date(Number(localStorage.getItem("startDate")));
    this.endDate.setDate(this.endDate.getDate() + 30);  // replace 30 with duration in months
    localStorage.setItem("endDate", this.endDate.getTime());
    

 
  }
    sumPrice(){    
    for(let i=0; i<this.orders.length; i++){     //replace orders with history orders
         this.total+= this.orders[i].price;   
    }  
  }  

}
