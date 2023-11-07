import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  response: any;
  authService = inject(AuthService);

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      const message = params['original[message]'];
      const status = params['original[status]'];
      const token = params['original[token]'];
      const userId = params['original[user_id]'];
      const role_id = params['original[role_id]'];
      console.log(message);
      if (role_id == 2) {
              localStorage.setItem('role_id', role_id);
              localStorage.setItem('user_id', userId);
          }
            if (status=='success') {
              localStorage.setItem('token', token);
              this.authService.isLoggedIn$.next(true);
            }
            else{
              console.error(params);
      
            }
      
    }
    );
  }
}