import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedpriceService {
  TotalPrice :any;

  constructor() { }

  SetPrice(value:any){
    this.TotalPrice=value;
    console.log(this.TotalPrice) 

  }
  GetPrice(){
    return this.TotalPrice
    //console.log(this.TotalPrice) 

  }
}
