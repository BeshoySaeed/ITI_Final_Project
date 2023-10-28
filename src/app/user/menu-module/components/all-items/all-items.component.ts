import { Component } from '@angular/core';
// import { Item } from 'src/app/interface/items';
import { ItemsService } from '../../services/items.service';
import { ItemService } from 'src/app/services/ItemService/item.service';
import { CategoriesService } from 'src/app/services/category-service/categories.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})
export class AllItemsComponent {


// array to receieve data from api
products:any []=[]
categories:any[]=[]
cartProduct:any[]=[]
loading :boolean=false;
category_id:any;
constructor( private service:ItemsService ,private service1 :CategoriesService, private httpItem: ItemService){}
  ngOnInit():void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(){

  this.httpItem.getItems().subscribe((data) =>
  {
    this.products = data;
    // console.log(this.products);
  } )
   }

  getCategories(){
    this.loading=true;
    this.service1.getAllCategory().subscribe((res:any)=>{
      this.categories=res;
      this.loading=false;

  // console.log(res);
    })
  }

  filteredProducts: any;

  filterCategory(event:any){
    let value=event;
    console.log(this.products);

    this.products=this.products.filter((e)=>{
      e.category_id =value
      console.log(e);
    })
    console.log(this.products);

    // (value=="all") ? this.getProducts() : this.getProductCategory(value);
    // console.log(event.target.value);
  
  }

  getProductCategory(keyword:any){
    this.loading=true;
    this.service.getProductsByCategory(keyword).subscribe ( (res:any) =>{
        this.products=res.emit;
        console.log(this.products);
        this.loading=false;

    }
      )}
}

