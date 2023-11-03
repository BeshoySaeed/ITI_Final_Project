import { Pipe, PipeTransform } from '@angular/core';
import { SubscriptionsService } from '../services/Subscriptions/subscriptions.service'; 

@Pipe({
  name: 'subscription'
})
export class SubscriptionPipe implements PipeTransform {

  subId:any=null; //get subscribe id from local storage  

 // subId= localStorage.getItem('subscribe_id');

 subscribeObject:any=[];
 percentage: any;
 discount:any;

  constructor(private httpSub: SubscriptionsService ){}
    
  
  transform(value: any): any {
    this.subId= localStorage.getItem('subscribe_id');
    if (this.subId!=null) {
      this.getSubByID();
       this.percentage = localStorage.getItem('discount_value');   

      this.discount= value * (this.percentage / 100);
      return value - this.discount; 
    
    }
     else {

      return value ;
    }
  }

  getSubByID() : any{
    this.httpSub.getById(this.subId).subscribe((subData: any) => {
      this.subscribeObject = subData.data;
      localStorage.setItem("discount_value", this.subscribeObject.discount_value);  
    })
  }

}