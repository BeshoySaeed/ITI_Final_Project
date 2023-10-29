import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkpass } from '../register/confirmpass'; 
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent {
  newPasswordForm: FormGroup;
  constructor(private fb: FormBuilder ,route: ActivatedRoute, public authService: AuthService
){
    this.newPasswordForm = this.fb.group({
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@*%$#])[a-zA-Z\\d@*%$#]+$')
      
    ]],
    confirmpassword: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@*%$#])[a-zA-Z\\d@*%$#]+$'),
    ]],
  }
   ,{validator: checkpass('password', 'confirmpassword')}
  )
  route.queryParams.subscribe((params) => {
    this.newPasswordForm.controls['passwordToken'].setValue(
      params['token']
    );
  });
  }
  submitNewPasswordFormForm() {
    console.log(this.newPasswordForm);
  }

  onSubmit() {
    this.authService.resetPassword(this.newPasswordForm.value).subscribe(
      (result) => {
        alert('Password has been updated');
        this.newPasswordForm.reset();
      },
      (error) => {
        this.handleError(error);
      }
    );
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }


}
