import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      // {
      //     label: 'Home',
      //     items: [
      //         { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
      //     ]
      // },
      {
        label: 'Orders',
        items: [
          {
            label: 'All Orders',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: ['/admin/orders'],
          },
        ],
      },
      {
        label: 'Users',
        items: [
          {
            label: 'All Users',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/admin/users'],
          },
          {
            label: 'Add User',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: ['/admin/users/create'],
          },
        ],
      },
      {
        label: 'Categories',
        items: [
          {
            label: 'All Categories',
            icon: 'pi pi-fw pi-th-large',
            routerLink: ['/admin/Categories'],
          },
          {
            label: 'Add Category',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/admin/Categories/create'],
          },
        ],
      },
      {
        label: 'Menu Items',
        items: [
          {
            label: 'All Menu Items',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/admin/menu-items'],
          },
          {
            label: 'Add Menu Item',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/admin/menu-items/create'],
          },
        ],
      },
      {
        label: 'Additions',
        items: [
          {
            label: 'All Additions',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/admin/additions'],
          },
          {
            label: 'Add Addition',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/admin/additions/create'],
          },
        ],
      },
      {
        label: 'Contact Us Information',
        items: [
          {
            label: 'Customers Services Phones',
            icon: 'pi pi-fw pi-phone',
            items: [
              {
                label: 'All Phones',
                icon: 'pi pi-fw pi-list',
                routerLink: ['/admin/contact-us-info/phones'],
              },
              {
                label: 'Add Phone',
                icon: 'pi pi-fw pi-plus',
                routerLink: ['/admin/contact-us-info/phones/create'],
              },
            ],
          },
          {
            label: 'Emails',
            icon: 'pi pi-fw pi-envelope',
            items: [
              {
                label: 'All emails',
                icon: 'pi pi-fw pi-list',
                routerLink: ['/admin/contact-us-info/emails'],
              },
              {
                label: 'Add email',
                icon: 'pi pi-fw pi-plus',
                routerLink: ['/admin/contact-us-info/emails/create'],
              },
            ],
          },
          {
            label: 'Social Media Accounts',
            icon: 'pi pi-fw pi-share-alt',
            routerLink: ['/admin/contact-us-info/social-media-accounts'],
          },
        ],
      },
      {
        label: 'Branches',
        items: [
          {
            label: 'All branches',
            icon: 'pi pi-fw pi-building',
            routerLink: ['/admin/branches'],
          },
          {
            label: 'Add branch',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/admin/branches/create'],
          },
        ],
      },
      {
        label: 'Subscription Plans',
        items: [
          {
            label: 'All Subscription Plans',
            icon: 'pi pi-fw pi-credit-card',
            routerLink: ['/admin/subscription-plans'],
          },
          {
            label: 'Add Subscription Plan',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/admin/subscription-plans/create'],
          },
        ],
      },
      {
        label: 'Discount Codes',
        items: [
          {
            label: 'All Discount Codes',
            icon: 'pi pi-fw pi-qrcode',
            routerLink: ['/admin/discount-codes'],
          },
          {
            label: 'Add Discount Code',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/admin/discount-codes/create'],
          },
        ],
      },
      {
        label: 'Employees',
        items: [
          {
            label: 'All Employees',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/admin/employees'],
          },
          {
            label: 'Add Employee',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: ['/admin/employees/create'],
          },
        ],
      },
      {
        label: 'Job Application Appliers',
        items: [
          {
            label: 'Applicants',
            icon: 'pi pi-fw pi-inbox',
            routerLink: ['/admin/job-applicants'],
          },
        ],
      },
      {
        label: 'Become a partner appliers',
        items: [
          {
            label: 'Partners',
            icon: 'pi pi-fw pi-inbox',
            routerLink: ['/admin/partners'],
          },
        ],
      },
      {
        label: 'Contact Us appliers',
        items: [
          {
            label: 'Appliers',
            icon: 'pi pi-fw pi-inbox',
            routerLink: ['/admin/contact-us-appliers'],
          },
        ],
      },
      {
        label: 'Feedback appliers',
        items: [
          {
            label: 'Feedbacks',
            icon: 'pi pi-fw pi-comments',
            routerLink: ['/admin/feedback'],
          },
        ],
      },
    ];
  }
}
