import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-become-partner',
  templateUrl: './become-partner.component.html',
  styleUrls: ['./become-partner.component.scss'],
})
export class BecomePartnerComponent implements OnInit {
  partnerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.partnerForm = this.fb.group({
      name: ['', [Validators.required]],
      l_name: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      //  password: ['', [Validators.required,Validators.minLength(8)]] (?=.*?[!@#%^&*()_+-=[]{}|;':\",./<>?~`])
      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'
          ),
        ],
      ],
      message: ['', [Validators.required]],
    });
  }

  submitPartnerForm() {
    console.log(this.partnerForm);
  }

  get name() {
    return this.partnerForm.get('name');
  }
  get l_name() {
    return this.partnerForm.get('l_name');
  }
  get email() {
    return this.partnerForm.get('email');
  }
  get mobile() {
    return this.partnerForm.get('mobile');
  }
  get subject() {
    return this.partnerForm.get('subject');
  }
  get message() {
    return this.partnerForm.get('message');
  }
}
