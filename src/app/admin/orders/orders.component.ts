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
  adminOrders: any = [];
  searchOrders: any;
  loading: boolean = false;

  status : string[] = [
    'processing',
    'on-deliver',
    'done'
  ]

  constructor(private httpOrder: OrderService){}


  ngOnInit() {
    this.httpOrder.getOrders().subscribe((orders) =>
    {
      this.orders = orders;
      this.adminOrders = this.orders.filter((e:any) => e.status != 'cart');
      this.searchOrders = this.orders.filter((e:any) => e.status != 'cart')
    }
    )
  }

  searchOrder($event: any) {
    let orderStatus = $event.target.value;
    if(orderStatus === 'all'){
      this.adminOrders = this.searchOrders
    }
    else{
      this.adminOrders = this.searchOrders.filter((order: any) => 
      {
        return order.status == orderStatus
      }
      );
    }
  }

  clear(table: Table) {
    table.clear();
  }

  applyFilterGlobal($event: any) {
    // dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
    let searchValue = $event.target.value;
    if(!searchValue)
    {
      this.adminOrders = this.adminOrders;
    }else
    {
      this.adminOrders = this.adminOrders.filter((order: any) => order.status == searchValue)
    }

    console.log(this.adminOrders)
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
      totalPrice +=   Number(items[i].item.price)
    }
    return totalPrice;
  }

  updateStatus(id : number, event: any)
  {
    let statusValue = event.target.value;
    this.httpOrder.editOrder(id, {
      note: 'new note',
      status : statusValue,
    }).subscribe((res) => {window.location.reload()});
    console.log(event.target.value)
  }

  statusValue(status: string)
  {
    this.status = this.status.filter((s) => s != status);

    return this.status
  }

  

}
