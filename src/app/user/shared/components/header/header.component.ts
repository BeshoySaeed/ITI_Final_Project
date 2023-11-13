import { style } from '@angular/animations';
import { Component, OnInit, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig, MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  authService = inject(AuthService);
  isLoggedIn: boolean = false;
  checked: boolean = false;
  userName: string = '';
  role_id: any = localStorage.getItem('role_id');
  isAdmin: boolean = this.role_id == 2 ? true : false;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((res) => {
      this.isLoggedIn = this.authService.isLoggedIn();
    });
  }

  logout() {
    const data = {
      token: localStorage.getItem('token'),
    };

    this.authService.logout(data).subscribe((response: any) => {});

    localStorage.removeItem('token');
    this.authService.isLoggedIn$.next(false);
    localStorage.removeItem('role_id');
    localStorage.removeItem('user_id');
    this.router.navigate(['/home']);
  }

  onSubmit() {}

  changeColor() {
    if (this.checked) {
      if (!document.body.classList.contains('dark')) {
        document.body.classList.add('dark');
      }
    } else {
      if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
      }
    }

    console.log(this.checked);
  }
}
