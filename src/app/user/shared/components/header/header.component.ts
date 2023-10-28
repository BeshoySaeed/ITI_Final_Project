import { style } from '@angular/animations';
import { Component, OnInit, inject } from '@angular/core';
import { MessageService } from "primeng/api";
import { PrimeNGConfig, MenuItem } from "primeng/api";
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  authService = inject(AuthService);
  isLoggedIn:boolean = false;

  userName: string = "";
  
ngOnInit(): void {
  this.authService.isLoggedIn$.subscribe(res=>{
   this.isLoggedIn = this.authService.isLoggedIn();

  })
}

  logout(){
    localStorage.removeItem("token");
    this.authService.isLoggedIn$.next(false);

  }
}
  