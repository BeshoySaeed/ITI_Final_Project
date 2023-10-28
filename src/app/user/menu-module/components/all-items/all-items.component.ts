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
originalProducts: any;
constructor( private service:ItemsService ,private service1 :CategoriesService, private httpItem: ItemService){}
  ngOnInit():void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(){

  this.httpItem.getItems().subscribe((data) =>
  {
    this.products = data;
    this.originalProducts = data;
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

  filterCategory(event: any) {
    const categoryId = event.target.value;
    
    if (categoryId === 'all') {
      this.products = this.originalProducts;
    } else {
      this.products = this.originalProducts.filter((x: any) => {
        return x.category_id == categoryId;
      });
    }
    console.log(this.products);
  }

  getProductCategory(keyword:any){
    this.loading=true;
    this.service.getProductsByCategory(keyword).subscribe ( (res:any) =>{
        this.products=res;
        console.log(this.products);
        this.loading=false;
    }
      )}
}

