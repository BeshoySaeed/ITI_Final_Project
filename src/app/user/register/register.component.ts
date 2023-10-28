import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkpass } from './confirmpass';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService],

})
export class RegisterComponent {
  formControllers = [
    'first_name',
    'last_name',
    'email',
    'phone1',
    'phone2',
    'password ',                           
    'password_confirmation',     
  ];

  registerform: FormGroup;
  constructor(private fb: FormBuilder,
    private AuthService: AuthService,
    private messageService: MessageService,
    private router: Router
){
    this.registerform = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone1: ['', Validators.pattern(/^\+20-1\d{9}$/)],   
      phone2: ['', Validators.pattern(/^\+20-1\d{9}$/)],   
      password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ]],
    password_confirmation: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    ]],}
   ,{validator: checkpass('password', 'password_confirmation')}
  )
    
  }
  resetForm() {
    for (let control of this.formControllers) {
      this.registerform.controls[control].setValue('');
    }
  }

  onSubmit() {
    this.AuthService
      .store(this.registerform.value)
      .subscribe((response: any) => {
        if (response.status == 'success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'User is added',
          });
          this.resetForm();
          this.router.navigate(['/home']); // Redirect to the dashboard page

        }
      });
  }
}
