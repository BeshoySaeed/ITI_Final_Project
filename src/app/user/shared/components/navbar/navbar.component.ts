import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig, MenuItem } from 'primeng/api';
import { AllItemsComponent } from 'src/app/user/menu-module/components/all-items/all-items.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [MessageService],
})
export class NavbarComponent {
  // version = VERSION;
  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      // {
      //   label: 'Saad',
      //   icon: 'pi pi-send',
      //   styleClass: 'send',
      // },
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        styleClass: 'links & link1 & button',
        routerLink: '/',
      },

      {
        label: 'Menu',
        icon: 'pi pi-fw pi-list',
        styleClass: 'links & link2',
        routerLink: 'all-items/all',
      },

      {
        label: 'Cart',
        icon: 'pi pi-fw pi-shopping-cart',
        styleClass: 'links & link3',
        routerLink: 'cart',
      },
    ];
  }


}
