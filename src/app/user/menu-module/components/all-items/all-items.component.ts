import { Component } from '@angular/core';
// import { Item } from 'src/app/interface/items';
import { ItemsService } from '../../services/items.service';
import { ItemService } from 'src/app/services/ItemService/item.service';
import { CategoriesService } from 'src/app/services/category-service/categories.service';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionsService } from 'src/app/services/Subscriptions/subscriptions.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})
export class AllItemsComponent {


// array to receieve data from api
products:any []=[]
subscribeObject: any;

categories:any[]=[]

loading :boolean=false;
category_id:any;
originalProducts: any;
/** category id from URL */
categoryId:any;

constructor( private service:ItemsService ,
             private service1 :CategoriesService,
             private httpItem: ItemService,
             private route:ActivatedRoute,
             private httpSub: SubscriptionsService)
             {}
  ngOnInit():void {
    this.categoryId=this.route.snapshot.params['id'];

    this.getProducts();
    this.getCategories();

    console.log(this.categoryId);

      this.httpSub.getById(1).subscribe((data) => 
      {
        this.subscribeObject = data;
        console.log(this.subscribeObject);
      }
      )

  }

  getProducts(){

  this.httpItem.getItems().subscribe((data) =>
  {
    this.products = data;
    this.originalProducts = data;

    if (this.categoryId === 'all') {
      this.products = this.originalProducts;
    } else {
      this.products = this.originalProducts.filter((x: any) => {
        return x.category_id == this.categoryId;
      });
    }

    
   
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
     this.categoryId = event.target.value;
    
    if (this.categoryId === 'all') {
      this.products = this.originalProducts;
    } else {
      this.products = this.originalProducts.filter((x: any) => {
        return x.category_id == this.categoryId;
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

