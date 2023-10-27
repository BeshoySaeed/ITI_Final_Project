import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkpass } from '../register/confirmpass'; 

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent {
  newPasswordForm: FormGroup;
  constructor(private fb: FormBuilder){
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
    ]],}
   ,{validator: checkpass('password', 'confirmpassword')}
  )
    
  }
  submitNewPasswordFormForm() {
    console.log(this.newPasswordForm);
  }

}
