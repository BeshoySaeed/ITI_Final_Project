import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MessageService } from "primeng/api";
import { PrimeNGConfig, MenuItem } from "primeng/api";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [MessageService]

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
      
    {
      label:'Saad',
      icon:'pi pi-send',
      styleClass:'send'
    },
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        styleClass:'link1',
      },
    
      {
        label: 'Menu',
        icon: 'pi pi-fw pi-list',
        styleClass:'link2',       
      },
    
      {
        label: 'Cart',
        icon:'pi pi-fw pi-shopping-cart',
        styleClass:'link3',        
      },

     
    ];
  }
}
