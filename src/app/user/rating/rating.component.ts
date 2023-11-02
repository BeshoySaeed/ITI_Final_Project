import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbacksService } from 'src/app/services/Feedbacks/feedbacks.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  value!: number;
  comment!: string;
  userId!: any;

  commentObject: any = {
    user_id: '',
    rate_comment: '',
    rate_value: '',
  };

  constructor(private httpFeed: FeedbacksService, private route: Router) {
    this.userId = localStorage.getItem('user_id');
    this.commentObject = {
      user_id: this.userId,
      rate_comment: '',
      rate_value: '',
    };
  }

  ngOnInit() {}
  submitted() {
    this.httpFeed.store(this.commentObject).subscribe(
      (response) =>
      {
        window.location.reload();
      }
    );
  }
}
