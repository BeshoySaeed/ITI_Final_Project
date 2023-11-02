import { Component } from '@angular/core';
import { SubscriptionsService } from 'src/app/services/Subscriptions/subscriptions.service';
import { DomSanitizer } from '@angular/platform-browser';
import { SubscriptionPlan } from 'src/app/interface/subscription-plan';

@Component({
  selector: 'app-subscription-section',
  templateUrl: './subscription-section.component.html',
  styleUrls: ['./subscription-section.component.scss'],
})
export class SubscriptionSectionComponent {
 

  constructor(
    private subscriptionsService: SubscriptionsService,
    private sanitizer: DomSanitizer
  ) {}

  subscriptions: SubscriptionPlan[] = [];
  currentDate : any ;
  endDate: any;
  duration:any;
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

  
   SubscribeButton(id:any) {

   
    this.currentDate = new Date();
    localStorage.setItem('subscribe_id',id);  
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
