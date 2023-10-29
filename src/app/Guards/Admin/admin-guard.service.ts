import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    const roleId = localStorage.getItem('role_id');

    if (token && roleId == '2') {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}