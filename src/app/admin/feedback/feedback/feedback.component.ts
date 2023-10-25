import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { FeedbacksService } from 'src/app/services/Feedbacks/feedbacks.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  feedbacks = [];
  loading: boolean = true;

  constructor(private feedbacksService: FeedbacksService) {}

  ngOnInit() {
    this.getAllFeedbacks();
  }

  getAllFeedbacks() {
    this.feedbacksService.getAll().subscribe((feedbacks: any) => {
      this.feedbacks = feedbacks.data.map((feedback:any) => ({
        id: feedback['id'],
        rate_value: feedback['rate_value'],
        rate_comment: feedback['rate_comment'],
        user_first_name: feedback['user_first_name'],
        user_last_name: feedback['user_last_name'],
        created_at: formatDate(feedback['created_at'], 'MMM d, y, h:mm a', 'en-US'),
      }));
      this.loading = false;
    });
  }

  clear(table: Table) {
    table.clear();
  }

  applyFilterGlobal($event: any, dt: any, stringVal: string) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
