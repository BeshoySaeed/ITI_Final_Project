import { Pipe, PipeTransform } from '@angular/core';
import { SubscriptionsService } from '../services/Subscriptions/subscriptions.service'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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

    if (this.subId != null) {
      return this.getSubByID().pipe(
        map(() => {
          if (typeof value === 'string') {
            if (this.percentage) {
               this.discount = Number(value) * (this.percentage / 100);
              return Number(value) - this.discount;
            }
          }
          return value;
        })
      );
    } else {
      return value;
    }
  }

 
  getSubByID(): Observable<any> {
    return this.httpSub.getById(this.subId).pipe(
      map((subData: any) => {
        this.subscribeObject = subData.data;
        this.percentage = this.subscribeObject.discount_value;
        return subData; 
      })
    );
  }

}