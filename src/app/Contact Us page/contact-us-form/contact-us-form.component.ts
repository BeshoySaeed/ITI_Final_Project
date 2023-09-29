import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss'],
})
export class ContactUsFormComponent {
  contactUsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactUsForm = this.fb.group(
      {
        firstName: [''],
        lastName: [''],
        email: [
          '',
          Validators.pattern(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          ),
        ],
        phone1: ['', Validators.pattern(/^\+20-1\d{9}$/)],
        phone2: ['', Validators.pattern(/^\+20-1\d{9}$/)],
        message: [''],
      },
      { updateOn: 'submit' }
    );
  }

  onSubmit() {
    console.log(this.contactUsForm);
  }
}
