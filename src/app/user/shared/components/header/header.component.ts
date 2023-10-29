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
    const apiUrl = 'http://localhost:8000/api/logout'; 
    const token= localStorage.getItem("token");
    console.log(token)
    this.http.post(apiUrl,token).subscribe(
    (response: any) => {
    //   localStorage.removeItem("token");
    //  // this.authService.isLoggedIn$.next(false);    
    //   this.router.navigate(['/login']); // Redirect to the dashboard page
      },
    (error) => {
        console.error('Login failed:', error);
      }
    );
    

  }
  onSubmit() {
 
  }


}
  