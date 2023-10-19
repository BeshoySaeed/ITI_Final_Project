import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent {
  editUserForm!: FormGroup;
  roles = [
    {
      id: 1,
      name: 'User',
    },
    {
      id: 2,
      name: 'Admin',
    },
  ];

  user = {
    id: 1,
    role: 2,
    firstName: 'Martina',
    lastName: 'Magdi',
    email: 'martinamagdi@gmail.com',
    phones: [
      {
        id: 1,
        value: '+20-1999999999',
      },
      {
        id: 2,
        value: '+20-1999999999',
      },
    ],
  };

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.editUserForm = this.fb.group({
      firstName: [this.user.firstName, Validators.pattern(/^[a-zA-Z]+$/)],
      lastName: [this.user.lastName, Validators.pattern(/^[a-zA-Z]+$/)],
      role: [this.user.role],
      email: [
        this.user.email,
        Validators.pattern(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        ),
      ],
      phone1: [this.user.phones[0].value, Validators.pattern(/^\+20-1\d{9}$/)],
      phone2: [this.user.phones[1].value, Validators.pattern(/^\+20-1\d{9}$/)],
    });
  }

  onSubmit() {
    console.log(this.editUserForm);
  }
}
