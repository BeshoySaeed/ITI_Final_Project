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
  userId:any;
  check:any = null;

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
    /*
    this.userService.setSubIdValue(this.userId,subId).subscribe((response: any) => {
      if (response.status == 'success') {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'user is subscribed',
        });
      }
    });*/
    this.currentDate = new Date();
    localStorage.setItem('subscribe_id',subId);  
    this.duration=30;
    localStorage.setItem("startDate", this.currentDate.getTime());  
    this.endDate = new Date(Number(localStorage.getItem("startDate")));
    this.endDate.setDate(this.endDate.getDate() + this.duration);  // replace 30 with duration in months
    localStorage.setItem("endDate", this.endDate.getTime());
 

  }
  
  checkSub(){
    if(localStorage.getItem('subscribe_id')){
      this.check=localStorage.getItem('subscribe_id');
    }
  }

}
