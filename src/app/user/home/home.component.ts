import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { SubscriptionsService } from 'src/app/services/Subscriptions/subscriptions.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  subId:any;    //get subscribe id from local storage 
  userId=1;
  checkDate: any;
  todayDate:any;
  subscriptionData : any ={

  };
  
  constructor(private subService: SubscriptionsService, private userService: UserService) {}

  ngOnInit(){
    this.checkEndDate();  //check if subscription is ended or not 
  }

  checkEndDate()
  {

    this.userService.getUserByID(this.userId).subscribe((response: any)=> {
      this.subId = response.data.subscribe_id;
      this.checkDate = response.data.end_date;
      if(this.subId){
        this.todayDate =new Date();
        if(this.todayDate>=this.checkDate){
          
          this.subscriptionData={
            subscribe_id : null,
            start_date :  null ,
            end_date : null     
          };
  
          this.userService.setSubIdValue(this.userId, this.subscriptionData).subscribe();
  
    
          }
      }
    });
  }
}