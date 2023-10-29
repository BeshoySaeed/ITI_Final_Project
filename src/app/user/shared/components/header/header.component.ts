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
  styleUrls: ['./header.component.scss'],
  providers: [MessageService],
})
export class HeaderComponent implements OnInit{
  authService = inject(AuthService);
  isLoggedIn:boolean = false;

  userName: string = "";

  constructor(private messageService: MessageService, private router: Router) {}  


ngOnInit(): void {
  this.authService.isLoggedIn$.subscribe(res=>{
   this.isLoggedIn = this.authService.isLoggedIn();

  })
}
/*
  logout(){
    localStorage.removeItem("token");
    this.authService.isLoggedIn$.next(false);

  }
*/
  logout(user: any) {
    this.authService
      .logout(user)
      .subscribe((response: any) => {
        if (response.status == 'success') {
          localStorage.removeItem("token");
          this.authService.isLoggedIn$.next(false);
          this.router.navigate(['/home']); // Redirect to the dashboard page

          this.messageService.add({

            detail: 'user logged out',
          });
        }
      });
  }
}
  