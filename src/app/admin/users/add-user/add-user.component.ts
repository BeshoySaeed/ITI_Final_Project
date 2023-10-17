import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { checkpass } from 'src/app/user/register/confirmpass';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  addUserForm!: FormGroup;
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
    this.addUserForm = this.fb.group(
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
        password: [
          '',
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
        ],
        confirmPassword: [''],
      },
      { validator: checkpass('password', 'confirmPassword') }
    );
  }

  onSubmit() {
    console.log(this.addUserForm);
  }
}
