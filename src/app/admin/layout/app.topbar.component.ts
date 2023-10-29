import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
  id: number = 2;

  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService, private authService: AuthService, private router: Router) {}

  logout() {
    const data = {
      token: localStorage.getItem('token'),
    };

    this.authService.logout(data).subscribe((response: any) => {});

    localStorage.removeItem('token');
    localStorage.removeItem('role_id');
    this.router.navigate(['/home']);
  }
}
