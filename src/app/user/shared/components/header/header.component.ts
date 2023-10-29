import { style } from '@angular/animations';
import { Component, OnInit, inject } from '@angular/core';
import { MessageService } from "primeng/api";
import { PrimeNGConfig, MenuItem } from "primeng/api";
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  authService = inject(AuthService);
  isLoggedIn:boolean = false;

  userName: string = "";
  constructor(private http: HttpClient, private router: Router ){}
ngOnInit(): void {
  this.authService.isLoggedIn$.subscribe(res=>{
   this.isLoggedIn = this.authService.isLoggedIn();

  })
}

  logout(){
    const data = {
      "token": localStorage.getItem("token")
    }

    this.authService
      .logout(data)
      .subscribe((response: any) => {
      });

      localStorage.removeItem("token");
      localStorage.removeItem("role_id");
      this.router.navigate(['/home']);
  }

  onSubmit() {
 
  }


}
  