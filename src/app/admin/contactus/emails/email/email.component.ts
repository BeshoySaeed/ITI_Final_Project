import { Component, Pipe, PipeTransform } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {
Emails = [
  {
    id: 1,
    Email:"Example@gmail.com",
    status:"active",
  },
  {
    id: 2,
    Email:"Example@gmail.com",
    status:"inactive",
  },
  {
    id: 3,
    Email:"Example@gmail.com",
    status:"active",
  },
  {
    id: 4,
    Email:"Example@gmail.com",
    status:"inactive",
  },
  {
    id: 5,
    Email:"Example@gmail.com",
    status:"active",
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

deleteEmail(id:number) {
  console.log(id)
}
status(active: string) {
  let status = active == 'active'? 'success' : 'danger';
  return status;
}
}

