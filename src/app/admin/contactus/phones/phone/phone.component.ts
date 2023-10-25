import { CustomerServicePhonesService } from '../../../../services/Customer service data/phones/customer-service-phones.service';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { CustomerServicePhone } from 'src/app/interface/customer-service-phone';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
  providers: [MessageService],
})
export class PhoneComponent {
  phones:CustomerServicePhone[] = [];
  loading: boolean = true;

  constructor(
    private phonesService: CustomerServicePhonesService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getAllPhones();
  }

  getAllPhones() {
    this.phonesService
      .getAll()
      .subscribe((phones: any) => {
        this.phones = phones.data;
        this.loading = false
      });
  }

  clear(table: Table) {
    table.clear();
  }

  applyFilterGlobal($event: any, dt: any, stringVal: string) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  deletePhone(id: number) {
    this.phonesService
      .delete(id)
      .subscribe((response: any) => {
        this.loading = true;
        if (response.status == 'success') {
          this.getAllPhones();
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Phone is deleted',
          });
        }
      });
  }

  status(active: number) {
    let status = active == 1 ? 'success' : 'danger';
    return status;
  }
}
@Pipe({
  name: 'Active',
})
export class Active implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value == 'active') {
      return 'green';
    } else {
      return 'red';
    }
  }
}
