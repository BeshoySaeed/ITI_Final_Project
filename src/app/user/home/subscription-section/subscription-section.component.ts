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

  ngOnInit() {
    this.getAll();

    // this.httpUser.getUserByID(this.userId).subscribe(user => 
    //   {
    //     this.userData = user.data;
    //     console.log(this.userData)
    //   }
    //   )

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
}
