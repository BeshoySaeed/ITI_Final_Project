import { Component } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-appliers',
  templateUrl: './appliers.component.html',
  styleUrls: ['./appliers.component.scss']
})
export class AppliersComponent {
  appliers = [
    {
      id: 1,
      firstName: 'Gerges',
      lastName: "Medhat",
      email: "gergesmedhat@gmail.com",
      mobile: "01288436939",
      message: "this is a message 1",
   
    },

    {
      id: 2,
      firstName: 'Seif',
      lastName: "Hany",
      email: "seifhany@gmail.com",
      mobile: "01142648754",
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

  deleteApplier(id:number) {
    console.log(id)
  }
  toggleApplier(applier: any) {
    if (applier.checked) {
      console.log('fdsafa');
    } else {
      console.log('sadfas');
    }
  }
}
