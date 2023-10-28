import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  http: any;

  constructor(private httpClient: HttpClient) { }

  item :any

  //create service
  getAllproducts():Observable<object> {
    return this.httpClient.get<object>(`${environment.host}/item`)
  }
  getAllCategories(){
    return this.httpClient.get<object>(`${environment.host}/partners`)

  }
  getProductsByCategory(keyword:string){
    // return this.http.get('https://fakestoreapi.com/products/category/' + keyword);
    return this.httpClient.get<object>(`${environment.host}/partners`+keyword);

  }
  getProductsById(id:any){
    // return this.http.get('https://fakestoreapi.com/products/' +id);
    return this.httpClient.get<object>(`${environment.host}/partners`+id)

  }
}
