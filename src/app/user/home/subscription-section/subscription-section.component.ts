import { Component } from '@angular/core';
import { SubscriptionsService } from 'src/app/services/Subscriptions/subscriptions.service';
import { DomSanitizer } from '@angular/platform-browser';
import { SubscriptionPlan } from 'src/app/interface/subscription-plan';
import { UserService } from 'src/app/services/user-service/user.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-subscription-section',
  templateUrl: './subscription-section.component.html',
  styleUrls: ['./subscription-section.component.scss'],
})
export class SubscriptionSectionComponent {
 

  constructor(
    private subscriptionsService: SubscriptionsService,
    private userService:UserService,
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) {}

  subscriptions: SubscriptionPlan[] = [];
  subId:any;
  currentDate : any ;
  endDate: any;
  duration:any;
  userId=localStorage.getItem('user_id');
  user: any = []
  check:any = null;
  year: any;
  month: any;
  day: any;
  subs_price:any;
  formattedCurrentDate:any;
  formattedEndDate: any; 
  checkDate: any;
  todayDate:any;

  subscriptionData: any ={
    subscribe_id : null,
    start_date : null,
    end_date: null
};

  ngOnInit() {
    this.getAll();
    this.checkSub();
    this.checkEndSub()
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
    this.subscriptionsService.getById(subId).subscribe((subData: any) => {
      this.duration = subData.data.duration;
      this.currentDate = new Date();
      this.endDate = new Date(this.currentDate);
      this.endDate.setDate(this.currentDate.getDate() + (this.duration*30));
      this.formattedCurrentDate = this.formatDate(this.currentDate);
      this.formattedEndDate = this.formatDate(this.endDate);
      this.subs_price=subData.data.subscribe_value;
      this.subscriptionData={ 
       subscribe_id : subId,
       start_date :  this.formattedCurrentDate,
       end_date : this.formattedEndDate     
     };
     const value = this.subs_price; 
      console.log("value",value)
      const body = { value };
      this.http.post<any>('http://localhost:8000/api/paypal/paymentsubs', body).subscribe(
      response => {
        console.log(response)
        if(response.success){
          this.userService.setSubIdValue(this.userId, this.subscriptionData).subscribe();
          const url=response.link;
          window.location.href=url;
        }
      },
      error => {
        console.error('Failed to initiate payment:', error);
      }
    );
     
    })

  }
  
  checkSub(){
 
    this.userService.getUserByID(this.userId).subscribe((response: any) => {
      this.check = response.data.subscribe_id;
      console.log(response)
    });
    
  }

  formatDate(date: Date): string {
    this.year = date.getFullYear();
   this.month = String(date.getMonth() + 1).padStart(2, '0');
   this.day = String(date.getDate()).padStart(2, '0');
   return `${this.year}-${this.month}-${this.day}`;
 }

  checkEndSub()
  {
    
    this.userService.getUserByID(this.userId).subscribe((response: any)=> {
      this.subId = response.data.subscribe_id;
      this.checkDate = response.data.end_date;
      if(this.subId){
        this.todayDate =new Date();
        if(this.todayDate>=this.checkDate){
          
  
          this.userService.setSubIdValue(this.userId, this.subscriptionData).subscribe();
  
    
          }
      }
    });

  }
}