import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {

  email:string="";
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
