import { Component } from '@angular/core';
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
  quantity: number = 0
  offers: Offer[] = [
    {
      id: 1,
      img: '../assets/images/home-images/burger.jpeg',
      title: 'Burger king',
      available: 'Available',
      price: 20,
      stars: 3,
    },
    {
      id: 2,
      img: '../assets/images/home-images/burger.jpeg',
      title: 'Burger king',
      available: 'Available',
      price: 20,
      stars: 4,
    },
    {
      id: 3,
      img: '../assets/images/home-images/burger.jpeg',
      title: 'Burger king',
      available: 'Available',
      price: 20,
      stars: 5,
    },
    {
      id: 4,
      img: '../assets/images/home-images/burger.jpeg',
      title: 'Burger king',
      available: 'Available',
      price: 20,
      stars: 4,
    },
  ];



  setPrice(item: Offer){
    let salary = item.price;
    return salary;
  }

  deleteOrder(item : Offer){
    this.offers = this.offers.filter(x => x.id != item.id);
  }

  quantityFn(){
    let quantity = 1;
    return quantity;
  }

  minusQuantity(item: Offer){
    if(this.quantity == 0){
      this.offers = this.offers.filter(x => x.id != item.id);
      alert('order deleted')
    }else{
      item.price = 20
    }
  }
  plusQuantity(item: Offer){
    let currentItem = this.offers.filter(i => i.id == item.id)[0];
    // console.log(currentItem);
    item.price += currentItem.price;


  }



}
