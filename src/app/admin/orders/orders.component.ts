import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { OrderService } from 'src/app/services/OrderService/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  orders: any = [];
  loading: boolean = false;

  constructor(private httpOrder: OrderService){}

  ngOnInit() {
    this.httpOrder.getOrders().subscribe((orders) =>
    {
      this.orders = orders;
      console.log(this.orders)
    }
    )
  }

  clear(table: Table) {
    table.clear();
  }

  applyFilterGlobal($event: any, dt: any, stringVal: string) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  deleteItem(id: number) {
    console.log(id);
  }

  confirmInstructionStatus(active: string) {
    let status = active  ? 'success' : 'danger';
    return status;
  }

  totalPrice(items: any){
    let totalPrice = 0;
    for(let i = 0; i < items.length; i ++){
      let itemPrice = Number(items[i].price)
      totalPrice = totalPrice + itemPrice;
    }
    return totalPrice;
  }
}
