import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private http:HttpClient) { }
item :any

  //create service
  getAllproducts(){
    return this.http.get('https://fakestoreapi.com/products');

  }
  getAllCategories(){
    return this.http.get('https://fakestoreapi.com/products/categories');

  }
  getProductsByCategory(keyword:string){
    return this.http.get('https://fakestoreapi.com/products/category/' + keyword);

  }
  getProductsById(id:any){
    return this.http.get('https://fakestoreapi.com/products/' +id);

  }
}
