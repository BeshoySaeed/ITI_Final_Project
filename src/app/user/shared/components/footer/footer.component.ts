import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

declare var google: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      // {
      //   label: 'Saad',
      //   icon: 'pi pi-send',
      //   styleClass: 'send',
      // },
      {
        label: 'About Us',
        styleClass: 'links',
        routerLink: 'about-us',
      },
      {
        label: 'Contact Us',
        styleClass: 'links',
        routerLink: 'contact-us',
      },
      {
        label: 'Branches',
        styleClass: 'links',
        routerLink: 'branches',
      },

      {
        label: 'Job Application',
        styleClass: 'links',
        routerLink: 'job-application',
      },
      {
        label: 'Become a Partner',
        styleClass: 'links',
        routerLink: 'become-partner',
      },
    ];
  }
}
