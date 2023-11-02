import { Component } from '@angular/core';
import { FeedbacksService } from 'src/app/services/Feedbacks/feedbacks.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  feedbacks: any;
  userId: any;
  userFeedBack: any;
  isFeedBack : boolean = true; 
  
  constructor(private httpFeed: FeedbacksService){
    this.userId = localStorage.getItem('user_id');
  }

  ngOnInit()
  {
    this.httpFeed.getAll().subscribe((data) =>
    {
      this.feedbacks = data.data;
      this.userFeedBack = this.feedbacks.filter((feedBack: any) => feedBack.user_id == this.userId)[0]
      if(this.userFeedBack){
        this.isFeedBack = false;
      }
    }
    )
  }

}
