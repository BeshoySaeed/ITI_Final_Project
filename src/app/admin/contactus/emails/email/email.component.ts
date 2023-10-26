import { Component, Pipe, PipeTransform } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { CustomerServiceEmailsService } from 'src/app/services/Customer service data/emails/customer-service-emails.service';
import { CustomerServiceEmail } from 'src/app/interface/customer-service-email';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  providers: [MessageService],
})
export class EmailComponent {
  emails:CustomerServiceEmail[] = [];
  loading: boolean = true;

  constructor(
    private emailsService: CustomerServiceEmailsService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getAllEmails();
  }

  getAllEmails() {
    this.emailsService.getAll().subscribe((emails: any) => {
      this.emails = emails.data;
      this.loading = false;
    });
  }

  clear(table: Table) {
    table.clear();
  }

  applyFilterGlobal($event: any, dt: any, stringVal: string) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  deleteEmail(id: number) {
    this.emailsService.delete(id).subscribe((response: any) => {
      this.loading = true;
      if (response.status == 'success') {
        this.getAllEmails();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Email is deleted',
        });
      }
    });
  }

  status(active: number) {
    let status = active == 1 ? 'success' : 'danger';
    return status;
  }
}
