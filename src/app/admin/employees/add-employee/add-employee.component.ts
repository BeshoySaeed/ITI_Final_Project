import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent {
  branches = [
    {
      id: 1,
      name: 'branch 1',
      address: 'cairo',
      address_location: 'cairo',
    },
    {
      id: 2,
      name: 'branch 2',
      address: 'cairo',
      address_location: 'cairo',
    },
  ];

  addEmployeeForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.addEmployeeForm = this.fb.group({
      firstName: ['', Validators.pattern(/^[a-zA-Z]+$/)],
      lastName: ['', Validators.pattern(/^[a-zA-Z]+$/)],
      jobTitle: ['', Validators.pattern(/^[a-zA-Z]+$/)],
      email: [
        '',
        Validators.pattern(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        ),
      ],
      phone: ['', Validators.pattern(/^\+20-1\d{9}$/)],
      national_id: ['', Validators.pattern('^[0-9]{14}$')], //14 numbers
      salary: ['', Validators.pattern(/^[0-9]+$/)],
      street: [''],
      area: [''],
      city: [''],
      joined_at: [
        '',
        Validators.pattern(
          /^(3[01]|[12][0-9]|0?[1-9])(\/|-)(1[0-2]|0?[1-9])\2([0-9]{2})?[0-9]{2}$/
        ),
      ],
      branch: [1],
    });
  }

  onSubmit() {
    console.log(this.addEmployeeForm);
  }
}
