import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  value : any ;
  formGroup : FormGroup;
  constructor(){
    this.formGroup = new FormGroup({
      emailControl : new FormControl('',[Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
      passControl : new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@%$#])[a-zA-Z\\d@%$#]+$')
      ]),
        checkControl : new FormControl('',[Validators.required])

    })
  }
}
