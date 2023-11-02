import { Pipe, PipeTransform } from '@angular/core';
import { SubscriptionsService } from '../services/Subscriptions/subscriptions.service';

@Pipe({
  name: 'subscription'
})
export class SubscriptionPipe implements PipeTransform {

  subId: any = localStorage.getItem('subscribe_id');
  subscribeObject: any;
  precentage: any = '';
  
  constructor(private httpSub: SubscriptionsService ){}

  ngOnInit()
  {
    this.httpSub.getById(this.subId).subscribe((data) => 
    {
      this.subscribeObject = data;
      console.log(this.subscribeObject);
    }
    )
  }


  percentage: number = 20;

  transform(value: any): any {
    if (this.subId) {
      return Number(value) * this.percentage/ 100;
    } else {
      // Handle the case when the condition is not met
      return value + 66;
    }
  }

}
