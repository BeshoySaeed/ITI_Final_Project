import { Injectable } from '@angular/core';
import { GenericService } from '../GenericService/generic-service.service';
import { Observable, map } from 'rxjs';
import { Item } from 'src/app/interface/items';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private genericService: GenericService, private http : HttpClient) { }

  headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  })
  


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
    return this.http.post<any>(`${environment.host}/item`, object, {headers: this.headers})
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
  // getProductsByCategoryId(categoryId: any): Observable<any> {
  //   return this.http.get<any>(`${environment.host}/item/category/`+categoryId);
  // }

  getProductsByCategory(categoryId: string) {
    return this.http.get(`${environment.host}/item/category=${categoryId}`);
  }

  // getProductsByCategory(keyword:string){
  //   return this.http.get(`${environment.host}/item/category/`+ keyword);

  // }

}