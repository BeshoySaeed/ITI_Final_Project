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


  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.subscriptionsService.getAllActive().subscribe((subscriptions: any) => {
      this.subscriptions = subscriptions.data;
    });
  }

  setHTML(value: string) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

  
   SubscribeButton() {

   
    this.currentDate = new Date();

    localStorage.setItem("startDate", this.currentDate.getTime());  
    this.endDate = new Date(Number(localStorage.getItem("startDate")));
    this.endDate.setDate(this.endDate.getDate() + 30);  // replace 30 with duration in months
    localStorage.setItem("endDate", this.endDate.getTime());

 
  }
  


}
