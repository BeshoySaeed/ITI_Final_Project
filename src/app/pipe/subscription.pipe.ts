import { Pipe, PipeTransform } from '@angular/core';
import { SubscriptionsService } from '../services/Subscriptions/subscriptions.service'; 
import { UserService } from '../services/user-service/user.service';

@Pipe({
  name: 'subscription'
})
export class SubscriptionPipe implements PipeTransform {

  subId:any=null; 
 subscribeObject:any=[];
 percentage: any;
 discount:any;
 userId=localStorage.getItem('user_id');
 result:any;
  constructor(private httpSub: SubscriptionsService, private userService: UserService ){}
    
  
  transform(value: any): any {
    return new Promise<any>((resolve) => {
      this.userService.getUserByID(this.userId).subscribe((response: any) => {
        this.subId = response.data.subscribe_id;
        if (this.subId) {
          this.httpSub.getById(this.subId).subscribe((subData: any) => {
            this.subscribeObject = subData.data;
            this.percentage=this.subscribeObject.discount_value;
            this.discount = value * (this.percentage / 100);
            this.result = value - this.discount;
            resolve(this.result);
          })
        } else {
          resolve(value);
        }
      });
    });
  
}



}