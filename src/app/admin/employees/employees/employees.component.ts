import { Component } from '@angular/core';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  employees = [
    {
      id: 1,
      firstName: 'Gerges',
      lastName: "Medhat",
      jobTitle:'chief',
      email: "gergesmedhat@gmail.com",
      mobile: "01288436939",
      national_id:"30004170105739",
      address:"cairo",
      salary: 4000,
      joined_at:"15/08/2023",
      branch_name:"Al Haram",
      created_at:"15/08/2023",
      updated_at:"20/10/2023",
   
    },

    {
      id: 2,
      firstName: 'Seif',
      lastName: "Hany",
      jobTitle:'waiter',
      email: "seifhany@gmail.com",
      mobile: "01142648754",
      national_id:"29005180104487",
      address:"giza",
      salary: 3500,
      joined_at:"22/09/2022",
      branch_name:"Al Giza",
      created_at:"22/09/2022",
      updated_at:"14/10/2022",
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

  deleteEmployee(id:number) {
    console.log(id)
  }
  toggleEmployee(employee: any) {
    if (employee.checked) {
      console.log('fdsafa');
    } else {
      console.log('sadfas');
    }
  }
}
