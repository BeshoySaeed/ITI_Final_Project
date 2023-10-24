import { Injectable } from '@angular/core';
import { GenericService } from '../GenericService/generic-service.service';
import { Observable, map } from 'rxjs';
import { Item } from 'src/app/interface/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private genericService: GenericService) { }

  getItems() : Observable<Item[]>
  {
    return this.genericService.getAll('item')
    .pipe(
      map((item: any) => {
        return item.data
      })
    )
  }

  getItemById(id :number) : Observable<Item>
  {
    return this.genericService.getById('items', id)
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }

  addItem(object: Item): Observable<Item>
  {
    return this.genericService.post('item', object)
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }

  deleteItem(id: number) : Observable<Item>
  {
    return this.genericService.delete('item', id)
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }

  editItem(id:number, object: any) : Observable<Item>
  {
    return this.genericService.update('item', id, object)
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }

}
