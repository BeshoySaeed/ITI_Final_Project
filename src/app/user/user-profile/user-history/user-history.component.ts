import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/OrderService/order.service';
interface Offer {
  id: number;
  img: string;
  title: string;
  available: string;
  price: number;
  stars: number;
}

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.scss']
})
export class UserHistoryComponent {
  userId: any = localStorage.getItem('user_id');
  quantity: number = 0
  userOrders: any ;
  userOrdersInHistory: any;


  constructor(private httpOrder: OrderService){}

  ngOnInit()
  {
    this.httpOrder.getUserOrders(this.userId).subscribe((response) => 
    {
      this.userOrders = response,
      console.log(this.userOrders);
      this.userOrdersInHistory = this.userOrders.filter((order: any) => order.status != 'cart')
      console.log(this.userOrdersInHistory)
    }
    )
  }



  setPrice(item: Offer){
    let salary = item.price;
    return salary;
  }

  totalPrice(items: any){
    let totalPrice = 0;
    for(let i = 0; i < items.length; i ++){
      totalPrice +=   Number(items[i].item.price)
    }
    return totalPrice;
  }

  deleteOrder(item : Offer){

    
    this.httpOrder.deleteOrder(item.id).subscribe((res) => {});
    this.userOrdersInHistory = this.userOrdersInHistory.filter((e:any) => e.id != item.id)
  }

  quantityFn(){
    let quantity = 1;
    return quantity;
  }

  minusQuantity(item: Offer){
    if(this.quantity == 0){
      // this.offers = this.offers.filter(x => x.id != item.id);
      alert('order deleted')
    }else{
      item.price = 20
    }
  }
  plusQuantity(item: Offer){
    // let currentItem = this.offers.filter(i => i.id == item.id)[0];
    // console.log(currentItem);
    // item.price += currentItem.price;


  }



}
