import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { EmployeesService } from 'src/app/services/Employees/employees.service';
import { Employee } from 'src/app/interface/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [MessageService],
})
export class EmployeesComponent {
  employees: Employee[] = []
  loading: boolean = true;

  constructor(
    private employeesService: EmployeesService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getAll();
  }

  clear(table: Table) {
      table.clear();
  }

  getAll() {
    this.employeesService
      .getAll()
      .subscribe((employees: any) => {
        this.employees = employees.data;
        this.loading = false
      });
  }

  applyFilterGlobal($event:any, dt:any, stringVal:string) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  deleteEmployee(id:number) {
    this.employeesService
      .delete(id)
      .subscribe((response: any) => {
        this.loading = true;
        if (response.status == 'success') {
          this.getAll();
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Employee is deleted',
          });
        }
      });
  }
}
