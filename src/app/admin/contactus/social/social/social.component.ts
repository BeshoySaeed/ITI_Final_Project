import { Component, Pipe, PipeTransform } from '@angular/core';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  Socials = [
    {
      id: 1,
      name:"Facebook",
      link:"https://www.facebook.com/",
    },
    {
      id: 2,
      name:"Instagram",
      link:"https://www.instagram.com/",
    },
    {
      id: 3,
      name:"Twitter",
      link:"https://www.twitter.com/",
    },
  
    
  ];
  
  loading: boolean = false;
  
  ngOnInit() {
  }
  
  clear(table: Table) {
      table.clear();
  }
  
  applyFilterGlobal($event:any, dt:any, stringVal:string) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  
  deleteSocial(id:number) {
    console.log(id)
  }
  }
