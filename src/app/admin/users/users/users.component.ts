import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      role: "User",
      firstName: 'Martina',
      lastName: "Magdi",
      email: "martinamagdi@gmail.com",
      subscriptionPlan: "Plan 1",
      balance: 1000
    },

    {
      id: 1,
      role: "Admin",
      firstName: 'Martina',
      lastName: "Magdi",
      email: "martinamagdi@gmail.com",
      subscriptionPlan: "Plan 2",
      balance: 2000
    }
  ];

  // representatives!: Representative[];
  loading: boolean = false;

  ngOnInit() {
  }

  clear(table: Table) {
      table.clear();
  }

  applyFilterGlobal($event:any, dt:any, stringVal:string) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}