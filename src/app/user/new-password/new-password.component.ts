import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkpass } from '../register/confirmpass'; 
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent {
  newPasswordForm: FormGroup;
    errors = null;
  successMsg : any;
  constructor(private fb: FormBuilder ,private router: Router, public authService: AuthService
){
    this.newPasswordForm = this.fb.group({
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@*%$#])[a-zA-Z\\d@*%$#]+$')
        
      ]],    
      token: ['', [
        Validators.required,        
      ]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],

    confirmpassword: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@*%$#])[a-zA-Z\\d@*%$#]+$'),
    ]],
  }
   ,{validator: checkpass('password', 'confirmpassword')}
  )
  }
  submitNewPasswordFormForm() {
    console.log(this.newPasswordForm);
  }

  onSubmit() {
    this.authService.resetPassword(this.newPasswordForm.value).subscribe(
      (result) => {
        this.successMsg = result;
        if (this.successMsg.success) {
          alert('Password has been updated');
          this.router.navigate(['/login']); // Redirect to the dashboard page
          setTimeout(() => {
            location.reload();
          }, 500);
        }
        this.newPasswordForm.reset();
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }



}
