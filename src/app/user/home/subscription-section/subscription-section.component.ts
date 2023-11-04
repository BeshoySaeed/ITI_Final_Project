import { ChangeDetectorRef, Component } from '@angular/core';
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
  userId: any = localStorage.getItem('user_id');
  userData: any;
  constructor(
    private subscriptionsService: SubscriptionsService,
    private sanitizer: DomSanitizer,
    private httpUser: UserService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  subscriptions: SubscriptionPlan[] = [];
  currentDate : any ;
  endDate: any;
  duration:any;
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

    console.log(this.userId)
  }

  getAll() {
    this.subscriptionsService.getAllActive().subscribe((subscriptions: any) => {
      this.subscriptions = subscriptions.data;
    });
  }

  subscribe(id: any) {
    console.log(id)
    this.httpUser.updateUser(this.userId, {
      last_name: 'nnmm',
      role_id : id,
      subscribe_id : id,
    }).subscribe((res) => console.log(res));
    this.changeDetectorRef.detectChanges(); 

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

      this.subscriptionData={ 
       subscribe_id : subId,
       start_date :  this.formattedCurrentDate,
       end_date : this.formattedEndDate     
     };
     
     this.httpUser.setSubIdValue(this.userId, this.subscriptionData).subscribe();
    })

  }
  
  checkSub(){

    this.httpUser.getUserByID(this.userId).subscribe((response: any) => {
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
