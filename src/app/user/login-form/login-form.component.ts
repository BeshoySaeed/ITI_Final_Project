import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component , inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [MessageService],
})
export class LoginFormComponent {
  value : any ;
  authService = inject(AuthService);
  errors = null;
  successMsg : any;
  formGroup : FormGroup;
  constructor(private http: HttpClient, private router: Router ,private login: AuthService, private messageService: MessageService){
    this.formGroup = new FormGroup({
      email : new FormControl('',[Validators.required,
        // Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]
      ]),
      password : new FormControl('', [
        Validators.required,
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@%$#])[a-zA-Z\\d@%$#]+$')
      ]),


    })
  }

  ngOnInit() {
    if(localStorage.getItem('token')){
      this.router.navigate(['/home']);
    }
  }

  onSubmit() {
    const apiUrl = 'http://localhost:8000/api/login'; // Replace with your actual API URL
    const formData = this.formGroup.getRawValue();
    const data = {
      email: formData.email,
      password: formData.password,
    };
    console.log(data);
    this.http.post(apiUrl, formData).subscribe(
      (response: any) => {
        if (response.role_id == 2) {
          localStorage.setItem('role_id', response.role_id);
          localStorage.setItem('user_id', response.user_id);
          localStorage.setItem('subscribe_id',response.subscribe_id)
        }
        this.successMsg = response;
        if (this.successMsg.status=='success') {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user_id', response.user_id);
          this.authService.isLoggedIn$.next(true);
          this.router.navigate(['/home']);// Redirect to the login page
        }
        else{
          console.error(this.successMsg, 'dddddddd');
        }
      },
      (error) => {
        console.error('Login failed:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Failed',
          detail: error.error.message,
        });
      }
    );
  }
Google(){
   window.location.href = 'http://127.0.0.1:8000/api/auth/google'; 
   const apiUrl= 'http://127.0.0.1:8000/api/auth/google';
  // this.http.get(apiUrl)
  // .subscribe(
  //   (response: any) => {
  //     if (response.role_id == 2) {
  //       localStorage.setItem('role_id', response.role_id);
  //       localStorage.setItem('user_id', response.user_id);
  //     }
  //     this.successMsg = response;
  //     if (this.successMsg.status=='success') {
  //       localStorage.setItem('token', response.token);
  //       this.authService.isLoggedIn$.next(true);
  //       this.router.navigate(['/home']);

  //       setTimeout(() => {
  //         location.reload();

  //       }, 1);
  //     }
  //     else{
  //       console.error(this.successMsg);

  //     }
  //   },
  //   (error) => {
  //     console.error('Login failed:', error);
  //   }
  // );
}

}
