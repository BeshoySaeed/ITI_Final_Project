import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 
 counter: number = 0;
 totalPrice: number = 0;
 itemPrice:number=0;
  cartItems = [ 
    {id: 1 , name:"Chicken burger",description:"one slide chicken with vegetables",price: 100, qnt:1},
    {id: 2 , name:"Meat Soap",description:"chicken pieces with vegetables",price: 80, qnt:1},
    {id: 3 , name:"Beef Pizza",description:"pizza with salami and beef",price: 120, qnt:1},
    {id: 4 , name:"Beef Pizza",description:"pizza with salami and beef",price: 250, qnt:1},
    {id: 5 , name:"Beef Pizza",description:"pizza with salami and beef",price: 250, qnt:1},
 

  ];
  constructor() {
   
    this.calculateTotalPrice();

  }

  ngOnInit(){
    

  }
  ngOnChange(){
   
  }
/*
  addtoCart(product:any){
    const existingItemIndex = this.cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      this.cartItems[existingItemIndex].qnt+=1;
    } else {
      this.cartItems.push({ ...product, qnt: 1 });
    }
    this.calculateTotalPrice();
  }
*/
  removeFromCart(product: any) {
    const existingItemIndex = this.cartItems.findIndex((item) => item.id === product.id);

        this.cartItems.splice(existingItemIndex, 1);
     
         this.calculateTotalPrice();
    }


  decreaseCounter(item:any) {
    if( item.qnt>1){
    
      item.qnt-=1;
    }else{
      this.removeFromCart(item)
    }
    this.calculateTotalPrice();
    this.calculateItemPrice(item);

  }


  increaseCounter(item:any) {

    item.qnt+=1;
    this.calculateTotalPrice();
    this.calculateItemPrice(item);

  } 
  
  
  calculateItemPrice(item:any) {
      
      this.itemPrice=0;
      this.itemPrice += item.price * item.qnt; 
      
  }



  calculateTotalPrice() {
    this.totalPrice = 0; 

    for (let item of this.cartItems) {
      this.totalPrice += item.price * item.qnt; 
    }
  
  }





}
