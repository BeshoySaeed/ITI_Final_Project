import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, MenuItem } from "primeng/api";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
        
      {
        label:'Saad',
        icon:'pi pi-send',
        styleClass:'send'
      },
      {
          label: 'About Us',
          styleClass:'link1',
        },
        {
          label: 'Contact Us',
          styleClass:'link2',        
        },
        {
          label: 'Branches',
          styleClass:'link3',       
        },
      
        {
          label: 'Job Application',
          styleClass:'link4',        
        },
        {
          label: 'Become a Partner',
          styleClass:'link5',        
        },
       
      ];
    } 
   
  }
  
  
