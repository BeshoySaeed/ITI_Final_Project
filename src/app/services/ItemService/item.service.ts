import { Injectable } from '@angular/core';
import { GenericService } from '../GenericService/generic-service.service';
import { Observable, map } from 'rxjs';
import { Item } from 'src/app/interface/items';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private genericService: GenericService, private http : HttpClient) { }



  getItems() : Observable<Item[]>
  {
    return this.genericService.getAll('item')
    .pipe(
      map((item: any) => {
        return item.data
      })
    )
  }

  getItemById(id :number) : Observable<any>
  {
    return this.genericService.getById('item', id)
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }

  addNew(object : any) : Observable<any>
  {
    return this.http.post<any>(`${environment.host}/item`, object)
  }

  addItem(object: any): Observable<any>
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
