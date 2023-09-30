import { Component, OnInit } from '@angular/core';
import {  MenuItem } from "primeng/api";

declare var google: any;


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
          routerLink: "aboutus"
        },
        {
          label: 'Contact Us',
          styleClass:'link2',   
          routerLink: "contact-us"     
        },
        {
          label: 'Branches',
          styleClass:'link3',    
          routerLink: "branches"   
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
  
  
