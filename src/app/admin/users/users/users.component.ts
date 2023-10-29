import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/interface/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [MessageService],
})
export class UsersComponent {

  users : User[] = [];


  loading: boolean = true;

  constructor(
    private userService: UserService,

    private messageService: MessageService
  ) {}


  ngOnInit() {
      this.getAllUsers();
  }

  getAllUsers() {
    this.userService
      .getAllUsers()
      .subscribe((user: any) => {
        this.users = user.data;
        this.loading = false
      });
  }
 

  deleteUser(id: number) {
    this.userService
      .deleteUserById(id)
      .subscribe((response: any) => {
        this.loading = true;
        if (response.status == 'success') {
          this.getAllUsers();
          this.messageService.add({

            detail: 'user is deleted',
          });
        }
      });
      this.users=this.users.filter(user=> user.id != id );
  }

  clear(table: Table) {
    table.clear();
  }

  applyFilterGlobal($event: any, dt: any, stringVal: string) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }








 /*
  users = [
    {
      id: 1,
      role: 'User',
      firstName: 'Martina',
      lastName: 'Magdi',
      email: 'martinamagdi@gmail.com',
      subscriptionPlan: 'Plan 1',
      balance: 1000,
      phones: [
        {
          id: 1,
          value: '01254646441',
        },
        {
          id: 2,
          value: '01254655441',
        },
      ],
      address: 'Cairo',
      totalOrders: 5,
      totalPayed: 200,
    },

    {
      id: 2,
      role: 'Admin',
      firstName: 'Martina',
      lastName: 'Magdi',
      email: 'martinamagdi@gmail.com',
      subscriptionPlan: 'Plan 2',
      balance: 2000,
      phones: [
        {
          id: 1,
          value: '01254646441',
        },
        {
          id: 2,
          value: '01254655441',
        },
      ],
      address: 'Giza',
      totalOrders: 10,
      totalPayed: 500,
    },
  ];

  loading: boolean = false;

  ngOnInit() {}

  clear(table: Table) {
    table.clear();
  }

  applyFilterGlobal($event: any, dt: any, stringVal: string) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  deleteUser(id: number) {
    console.log(id);
  }
  */
}
