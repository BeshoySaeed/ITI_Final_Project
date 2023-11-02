import { Pipe, PipeTransform } from '@angular/core';
import { SubscriptionsService } from '../services/Subscriptions/subscriptions.service'; 

@Pipe({
  name: 'subscription'
})
export class SubscriptionPipe implements PipeTransform {

  subId=1; //get subscribe id from local storage  

 // subId= localStorage.getItem('subscribe_id');

 subscribeObject:any=[];
 percentage: any;
 discount:any;

  constructor(private httpSub: SubscriptionsService ){}

  /*
  ngOnInit()
  {
    this.getSubByID();

  }
*/
    
  transform(value: any): any {
    if (this.subId) {
      this.getSubByID();
       this.percentage = sessionStorage.getItem('discount_value');   

      this.discount= value * (this.percentage / 100);
      return value - this.discount; 
    
    }
     else {
      // Handle the case when the condition is not met
      return value ;
    }
  }

  getSubByID() : any{
    this.httpSub.getById(this.subId).subscribe((subData: any) => {
      this.subscribeObject = subData.data;
      sessionStorage.setItem("discount_value", this.subscribeObject.discount_value);  
    })
  }

}