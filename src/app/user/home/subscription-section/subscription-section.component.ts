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
  year: any;
  month: any;
  day: any;
  formattedCurrentDate:any;
  formattedEndDate: any; 

  subscriptionData: any ={
    subscribe_id : null,
    start_date : null,
    end_date: null
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
     this.endDate = new Date(this.currentDate);
     this.duration=30;
    this.endDate.setDate(this.currentDate.getDate() + this.duration);
     
    //localStorage.setItem('subscribe_id',subId); 
     
       this.formattedCurrentDate = this.formatDate(this.currentDate);
       this.formattedEndDate = this.formatDate(this.endDate);
   // localStorage.setItem("startDate", this.currentDate.getTime());  
    //  this.endDate = new Date(Number(this.currentDate.getTime()));
    //  this.endDate.setDate(this.endDate.getDate() + this.duration);  // replace 30 with duration in months
   // localStorage.setItem("endDate", this.endDate.getTime());
    this.subscriptionData={
      subscribe_id : subId,
      start_date :  this.formattedCurrentDate,
      end_date : this.formattedEndDate     
    };
    
    this.userService.setSubIdValue(this.userId, this.subscriptionData).subscribe();
  }
  
  checkSub(){
    /*
    if(localStorage.getItem('subscribe_id')){
      this.check=localStorage.getItem('subscribe_id');
    }
    */
    this.userService.getUserByID(this.userId).subscribe((response: any) => {
      this.check = response.data.subscribe_id;
    });
    
  }

   formatDate(date: Date): string {
     this.year = date.getFullYear();
    this.month = String(date.getMonth() + 1).padStart(2, '0');
    this.day = String(date.getDate()).padStart(2, '0');
    return `${this.year}-${this.month}-${this.day}`;
  }
}
