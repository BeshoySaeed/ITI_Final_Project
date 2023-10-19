import { Component } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {
  partners = [
    {
      id: 1,
      firstName: 'Gerges',
      lastName: "Medhat",
      email: "gergesmedhat@gmail.com",
      mobile: "01288436939",
      subject:"test 1",
      message: "this is a message 1",
   
    },

    {
      id: 2,
      firstName: 'Seif',
      lastName: "Hany",
      email: "seifhany@gmail.com",
      mobile: "01142648754",
      subject: "test 2",
      message: "this is a message 2",
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

  deletepartner(id:number) {
    console.log(id)
  }
  togglepartner(partner: any) {
    if (partner.checked) {
      console.log('fdsafa');
    } else {
      console.log('sadfas');
    }
  }
}
