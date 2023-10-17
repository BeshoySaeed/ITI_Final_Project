import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { checkpass } from 'src/app/user/register/confirmpass';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  editUserForm!: FormGroup;
  roles= [
    {
      id: 1,
      name: "User"
    },
    {
      id: 2,
      name: "Admin"
    },
  ];
  
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.editUserForm = this.fb.group(
      {
        firstName: ['', Validators.pattern(/^[a-zA-Z]+$/)],
        lastName: ['', Validators.pattern(/^[a-zA-Z]+$/)],
        role: ['1'],
        email: [
          '',
          Validators.pattern(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          ),
        ],
        phone1: ['', Validators.pattern(/^\+20-1\d{9}$/)],
        phone2: ['', Validators.pattern(/^\+20-1\d{9}$/)],
        message: ['', Validators.pattern(/^[a-zA-Z][^0-9\s\W]+/)],
        password: [
          '',
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).+$/),
        ],
        confirmPassword: [''],
      },
      { validator: checkpass('password', 'confirmPassword') }
    );
  }

  onSubmit() {
    console.log(this.editUserForm);
  }
}
