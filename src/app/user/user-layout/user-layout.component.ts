import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {
  response: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('http://127.0.0.1:8000/api/response-data').subscribe(
      (response: any) => {
        this.response = response;
        console.log(this.response); // Access the response data as needed
      },
      (error) => {
        console.error('Failed to retrieve response data:', error);
      }
    );
  }
}
