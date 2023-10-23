import { Component } from '@angular/core';
import { CustomerServicePhonesService } from 'src/app/service/customer-service-phones.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent {
  constructor(private phonesService: CustomerServicePhonesService) {}
  phones = [];

  emails = [
    {
      id: 0,
      email: "m@gmail.com"
    },
    {
      id: 1,
      email: "m@gmail.com"
    },
    {
      id: 2,
      email: "m@gmail.com"
    },
  ]

  ngOnInit() {
    this.getAllPhones();
  }

  getAllPhones() {
    this.phonesService
      .getAllActiveCustomerServicePhones()
      .subscribe((phones: any) => {
        this.phones = phones.data;
      });
  }
}
