import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ItemAddition } from 'src/app/interface/item-addition';
import { GenericService } from '../GenericService/generic-service.service';

@Injectable({
  providedIn: 'root'
})
export class ItemAdditionsService {

  constructor(private httpItemAddition: GenericService) { }


  getItemAdditions(): Observable<ItemAddition[]>
  {
    return this.httpItemAddition.getAll('itemAddition')
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }

  getItemAdditionById(id: number) : Observable<ItemAddition>
  {
    return this.httpItemAddition.getById('itemAddition', id)
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }

  deleteItemAddition(id: number) : Observable<ItemAddition>
  {
    return this.httpItemAddition.delete('itemAddition', id)
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }

  addItemAddition(object: ItemAddition): Observable<ItemAddition>
  {
    return this.httpItemAddition.post('itemAddition', object)
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }

  editItemAddition(id:number, object:any): Observable<ItemAddition>
  {
    return this.httpItemAddition.update('itemAddition' ,id ,object)
    .pipe(
      map((item: any) => {
        return item.data
      })
    )
  }
}
