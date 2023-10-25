import { Component, Pipe, PipeTransform } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { SubscriptionsService } from 'src/app/services/Subscriptions/subscriptions.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
  providers: [MessageService],
})
export class SubscribeComponent {
  subscribes = [];
  loading: boolean = true;

  constructor(
    private subscriptionsService: SubscriptionsService,
    private messageService: MessageService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.subscriptionsService.getAll().subscribe((subscribes: any) => {
      this.subscribes = subscribes.data;
      this.loading = false;
    });
  }

  clear(table: Table) {
    table.clear();
  }

  applyFilterGlobal($event: any, dt: any, stringVal: string) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  deleteSubscribe(id: number) {
    this.subscriptionsService.delete(id).subscribe((response: any) => {
      this.loading = true;
      if (response.status == 'success') {
        this.getAll();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Subscribe plan is deleted',
        });
      }
    });
  }

  status(active: number) {
    let status = active == 1 ? 'success' : 'danger';
    return status;
  }

  setHTML(value: string) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
