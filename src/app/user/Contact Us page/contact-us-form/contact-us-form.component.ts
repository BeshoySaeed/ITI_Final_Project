import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactUsService } from 'src/app/services/contact-us/contact-us.service';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss'],
})
export class ContactUsFormComponent {
  contactUsForm!: FormGroup;
  // contact=new Contact();
  contact={
    first_name: '',
    last_name:'',
    email: '',
    mobile: '',
    message: ''
  };
  
  constructor(private fb: FormBuilder ,private dataServies:ContactUsService) {}

  ngOnInit() {
    this.contactUsForm = this.fb.group(
      {
        firstName: ['', Validators.pattern(/^[a-zA-Z]+$/)],
        lastName: ['', Validators.pattern(/^[a-zA-Z]+$/)],
        email: [
          '',
          Validators.pattern(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          ),
        ],
        mobile: ['', Validators.pattern(/^\+20-1\d{9}$/)],
        // phone2: ['', Validators.pattern(/^\+20-1\d{9}$/)],
        message: ['', Validators.pattern(/^[a-zA-Z][^0-9\s\W]+/)],
      },
    );
  }

  onSubmit() {
    this.dataServies.insertContacts(this.contact).subscribe((res: any) => {
      console.log(res);
    })
  }
  partner(partner: any) {
    throw new Error('Method not implemented.');
  }
}
