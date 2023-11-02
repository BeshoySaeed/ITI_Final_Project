import { Injectable } from '@angular/core';
import { GenericService } from '../GenericService/generic-service.service';
import { Observable, map } from 'rxjs';
import { Order } from 'src/app/interface/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  constructor(private httpOrder: GenericService) { }

  getOrders(): Observable<any>
  {
    return this.httpOrder.getAll('order')
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }
  getUserOrders(id: number): Observable<Order[]>
  {
    return this.httpOrder.getAll(`orders/${id}`)
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }

  getOrderById(id: number) : Observable<Order>
  {
    return this.httpOrder.getById('order', id)
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }

  deleteOrder(id: number) : Observable<Order>
  {
    return this.httpOrder.delete('order', id)
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }

  addOrder(object: any): Observable<Order>
  {
    return this.httpOrder.post('order', object)
    .pipe(
      map((item: any) => {
        return item
      })
    );
  }

  editOrder(id:number, object:any): Observable<Order>
  {
    return this.httpOrder.update('order' ,id ,object)
    .pipe(
      map((item: any) => {
        return item.data
      })
    )
  }
  
  cart(): Observable<Order[]>
  {
    return this.httpOrder.cart('cart')
    .pipe(
      map((item: any) => {
        return item
      })
    );
  }

  updateCart(object:any): Observable<Order>
  {
    return this.httpOrder.updateCart('update-cart' ,object)
    .pipe(
      map((data: any) => {
        return data
      })
    )
  }

  updateAdditionCart(id: number) : Observable<Order>
  {
    return this.httpOrder.updateAdditionCart('update-cart', id)
    .pipe(
      map((data: any) => {
        return data
      })
    );
  }
}
