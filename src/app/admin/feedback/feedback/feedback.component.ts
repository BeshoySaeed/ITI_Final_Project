import { Component ,OnInit} from '@angular/core';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  checked: boolean = false;
  feedbacks = [
    {
      id: 1,
      firstName: 'Gerges',
      lastName: "Medhat",
      starRate: "4",
      comment: "this is amazing",
      created_at: "10/7/2023",
  
    },

    {
      id: 2,
      firstName: 'Martina',
      lastName: "Magdi",
      starRate: "3",
      comment: "this is not bad",
      created_at: "25/8/2023",

    },

  ];

  loading: boolean = false;

  ngOnInit() {
  }

  clear(table: Table) {
      table.clear();
  }

  applyFilterGlobal($event:any, dt:any, stringVal:string) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  deleteFeedback(id:number) {
    console.log(id)
  }
  toggleFeedback(feedback: any) {
    if (feedback.checked) {
      console.log('fdsafa');
    } else {
      console.log('sadfas');
    }
  }
}
