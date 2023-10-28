import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component , inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  value : any ;
  authService = inject(AuthService);

  formGroup : FormGroup;
  constructor(private http: HttpClient, private router: Router ,private login: AuthService){
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
  onSubmit() {
    const apiUrl = 'http://localhost:8000/api/login'; // Replace with your actual API URL
    const formData=this.formGroup.getRawValue();
    const data={
      email: formData.email,
      password: formData.password,
    }
    console.log(data)
    this.http.post(apiUrl, formData).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        this.authService.isLoggedIn$.next(true);
        this.router.navigate(['/home']); // Redirect to the dashboard page
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }


}
