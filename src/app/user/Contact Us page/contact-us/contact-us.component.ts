import { Component } from '@angular/core';
import { CustomerServiceEmailsService } from 'src/app/services/Customer service data/emails/customer-service-emails.service';
import { CustomerServicePhonesService } from 'src/app/services/Customer service data/phones/customer-service-phones.service';
import { SocialMediaAccountsService } from 'src/app/services/Social media accounts/social-media-accounts.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  constructor(
    private phonesService: CustomerServicePhonesService,
    private emailsService: CustomerServiceEmailsService,
    private socialsService: SocialMediaAccountsService
  ) {}

  phones = [];
  emails = [];
  socials = [];
  facebookLink!: string;
  instagramLink!: string;
  twitterLink!: string;
  whatsappLink!: string;

  ngOnInit() {
    this.getAllPhones();
    this.getAllEmails();
    this.getAllSocials();
  }

  getAllPhones() {
    this.phonesService.getAllActive().subscribe((phones: any) => {
      this.phones = phones.data;
    });
  }

  getAllEmails() {
    this.emailsService.getAllActive().subscribe((emails: any) => {
      this.emails = emails.data;
    });
  }

  setSocialLinks() {
    this.socials.forEach((account) => {
      if (account['name'] == 'facebook') {
        this.facebookLink = account['link'];
      } else if (account['name'] == 'twitter') {
        this.twitterLink = account['link'];
      } else if (account['name'] == 'instagram') {
        this.instagramLink = account['link'];
      }
      if (account['name'] == 'whatsapp') {
        this.whatsappLink = account['link'];
      }
    });
  }

  getAllSocials() {
    this.socialsService.getAll().subscribe((socials: any) => {
      this.socials = socials.data;
      this.setSocialLinks();
    });
  }
}
