import { Injectable } from '@angular/core';
import { GenericService } from '../GenericService/generic-service.service';
import { Observable, map } from 'rxjs';
import { OrderItem } from 'src/app/interface/order-item';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  constructor(private httpOrderItem: GenericService) { }

  getOrderItems(): Observable<OrderItem[]>
  {
    return this.httpOrderItem.getAll('orderItem')
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }

  getOrderItemById(id: number) : Observable<OrderItem>
  {
    return this.httpOrderItem.getById('orderItem', id)
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }

  deleteOrderItem(id: number) : Observable<OrderItem>
  {
    return this.httpOrderItem.delete('orderItem', id)
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }

  addOrderItem(object: OrderItem): Observable<OrderItem>
  {
    return this.httpOrderItem.post('orderItem', object)
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }

  editOrderItem(id:number, object:any): Observable<OrderItem>
  {
    return this.httpOrderItem.update('orderItem' ,id ,object)
    .pipe(
      map((item: any) => {
        return item.data
      })
    )
  }
}
