import { Component } from '@angular/core';
import { SubscriptionsService } from 'src/app/services/Subscriptions/subscriptions.service';
import { DomSanitizer } from '@angular/platform-browser';
import { SubscriptionPlan } from 'src/app/interface/subscription-plan';
import { UserService } from 'src/app/services/user-service/user.service';


@Component({
  selector: 'app-subscription-section',
  templateUrl: './subscription-section.component.html',
  styleUrls: ['./subscription-section.component.scss'],
})
export class SubscriptionSectionComponent {
 

  constructor(
    private subscriptionsService: SubscriptionsService,
    private userService:UserService,
    private sanitizer: DomSanitizer
  ) {}

  subscriptions: SubscriptionPlan[] = [];
  currentDate : any ;
  endDate: any;
  duration:any;
  userId=1;
  user: any = []
  check:any = null;
  subscriptionData : any ={

};

  ngOnInit() {
    this.getAll();
    this.checkSub();
  }

  getAll() {
    this.subscriptionsService.getAllActive().subscribe((subscriptions: any) => {
      this.subscriptions = subscriptions.data;
    });
  }

  setHTML(value: string) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

  
   SubscribeButton(subId:any) {
   
    this.currentDate = new Date();
    localStorage.setItem('subscribe_id',subId);  
    this.duration=30;
    localStorage.setItem("startDate", this.currentDate.getTime());  
    this.endDate = new Date(Number(localStorage.getItem("startDate")));
    this.endDate.setDate(this.endDate.getDate() + this.duration);  // replace 30 with duration in months
    localStorage.setItem("endDate", this.endDate.getTime());
    this.subscriptionData={
      subscribe_id : subId,
      start_date :  this.currentDate ,
      end_date : this.endDate     
    };
 
    //this.userService.setSubIdValue(this.userId, this.subscriptionData).subscribe();

  }
  
  checkSub(){
    if(localStorage.getItem('subscribe_id')){
      this.check=localStorage.getItem('subscribe_id');
    }
    /*
    this.userService.getUserByID(this.userId).subscribe((response: any)=> {
         this.check = response.subscribe_id;
    }); 
    */
  }

}
