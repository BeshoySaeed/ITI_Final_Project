import { CustomerServiceEmailsService } from './../../../services/Customer service data/emails/customer-service-emails.service';
import { Component } from '@angular/core';
import { CustomerServicePhonesService } from 'src/app/services/Customer service data/phones/customer-service-phones.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  constructor(
    private phonesService: CustomerServicePhonesService,
    private emailsService: CustomerServiceEmailsService
  ) {}

  phones = [];
  emails = [];

  ngOnInit() {
    this.getAllPhones();
    this.getAllEmails();
  }

  getAllPhones() {
    this.phonesService.getAllActivePhones().subscribe((phones: any) => {
      this.phones = phones.data;
    });
  }

  getAllEmails() {
    this.emailsService.getAllActiveEmails().subscribe((emails: any) => {
      this.emails = emails.data;
    });
  }
}
