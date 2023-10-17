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
      balance: 1000,
      phones: [
        {
          id: 1,
          value: '01254646441'
        },
        {
          id: 2,
          value: '01254655441'
        },
      ],
      addresses: [
        {
          id: 1,
          value: 'Cairo'
        },
        {
          id: 2,
          value: 'Cairo'
        },
      ],
      totalOrders: 5,
      totalPayed: 200
    },

    {
      id: 2,
      role: "Admin",
      firstName: 'Martina',
      lastName: "Magdi",
      email: "martinamagdi@gmail.com",
      subscriptionPlan: "Plan 2",
      balance: 2000,
      phones: [
        {
          id: 1,
          value: '01254646441'
        },
        {
          id: 2,
          value: '01254655441'
        },
      ],
      addresses: [
        {
          id: 1,
          value: 'Cairo'
        },
        {
          id: 2,
          value: 'Cairo'
        },
      ],
      totalOrders: 10,
      totalPayed: 500
    }
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

  editUser(id:number) {
    console.log(id)
  }

  deleteUser(id:number) {
    console.log(id)
  }
}