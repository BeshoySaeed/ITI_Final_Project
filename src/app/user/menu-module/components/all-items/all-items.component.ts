import { Component } from '@angular/core';
// import { Item } from 'src/app/interface/items';
import { ItemsService } from '../../services/items.service';
import { ItemService } from 'src/app/services/ItemService/item.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})
export class AllItemsComponent {

// array to receieve data from api
// products:any []=[

//     {
//       id:'1',
//       name: 'Pizza Pepperoni',
//       category:'pizza',
//       cookTime: '10-20',
//       price: 10,
//       favorite: false,
//       origins: ['italy'],
//       stars: '4.5',
//       image: 'assets/food-1.jpg',
//       tags: ['FastFood', 'Pizza', 'Lunch'],
//     },
//     {
//       id:'2',
//       name: 'Meatball',
//       category:'pizza',
//       price: 20,
//       cookTime: '20-30',
//       favorite: true,
//       origins: ['persia', 'middle east', 'china'],
//       stars: '4.7',
//       image: 'assets/food-2.jpg',
//       tags: ['SlowFood', 'Lunch'],
//     },
//     {
//       id:'3',
//       name: 'Hamburger',
//       price: 5,
//       cookTime: '10-15',
//       favorite: false,
//       origins: ['germany', 'us'],
//       stars: '3.5',
//       image: 'assets/food-3.jpg',
//       tags: ['FastFood', 'Hamburger'],
//     },
//     {
//       id:'4',
//       name: 'Fried Potatoes',
//       price: 2,
//       cookTime: '15-20',
//       favorite: true,
//       origins: ['belgium', 'france'],
//       stars: '3.3',
//       image: 'assets/food-4.jpg',
//       tags: ['FastFood', 'Fry'],
//     },
//     {
//       id:'5',
//       name: 'Chicken Soup',
//       price: 11,
//       cookTime: '40-50',
//       favorite: false,
//       origins: ['india', 'asia'],
//       stars: '3.0',
//       image: 'assets/food-5.jpg',
//       tags: ['SlowFood', 'Soup'],
//     },
//     {
//       id:'6',
//       name: 'Vegetables Pizza',
//       price: 9,
//       cookTime: '40-50',
//       favorite: false,
//       origins: ['italy'],
//       stars: '4.0',
//       image: 'assets/food-6.jpg',
//       tags: ['FastFood', 'Pizza', 'Lunch'],
//     },
//     {
//       id:'7',
//       name: 'Spicy Cheese Burger',
//       price: 12,
//       cookTime: '20-30',
//       favorite: false,
//       origins: ['Indian'],
//       stars: '4.0',
//       image: 'assets/food-7.jpg',
//       tags: ['FastFood', 'Burger', 'Lunch'],
//     },
//     {
//       id:'8',
//       name: 'Vegetables Magento Pizza',
//       price: 9,
//       cookTime: '45-50',
//       favorite: false,
//       origins: ['indian'],
//       stars: '4.0',
//       image: 'assets/food-8.jpg',
//       tags: ['FastFood', 'Pizza', 'Lunch'],
//     },
// ]
// categories:any[]=[
//   "pizza",
//   "pasta",
//   "salads",
//   "dessert",
//   "sauces",
//   "drinks",
//   "sides"
// ]

// GetInCategory:any[]=[
//   {
//       "id": 5,
//       "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//       "price": 695,
//       "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//       "category": "jewelery",
//       "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//       "rating": {
//           "rate": 4.6,
//           "count": 400
//       }
//   },
//   {
//       "id": 6,
//       "title": "Solid Gold Petite Micropave ",
//       "price": 168,
//       "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//       "category": "jewelery",
//       "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//       "rating": {
//           "rate": 3.9,
//           "count": 70
//       }
//   },
//   {
//       "id": 7,
//       "title": "White Gold Plated Princess",
//       "price": 9.99,
//       "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//       "category": "jewelery",
//       "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//       "rating": {
//           "rate": 3,
//           "count": 400
//       }
//   },
//   {
//       "id": 8,
//       "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
//       "price": 10.99,
//       "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
//       "category": "jewelery",
//       "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
//       "rating": {
//           "rate": 1.9,
//           "count": 100
//       }
//   }
// ]

//   filteredProducts:any [] = []; // a new array to store the filtered products

// filterProducts(category: string) {
//   if (category === 'All') {
//     this.filteredProducts = this.products;
//   } else {
//     this.filteredProducts = this.products.filter(product => product.category === category);
//   // this.products=[];
//   }
// }

// array to receieve data from api
products:any []=[]
categories:any[]=[]
cartProduct:any[]=[]
loading :boolean=false;
constructor( private service:ItemsService, private httpItem: ItemService){}
  ngOnInit():void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(){

  //   this.service.getAllproducts().subscribe((res:any)=>{
  //     this.products=res;
  // })

  this.httpItem.getItems().subscribe((data) =>
  {
    this.products = data;
    console.log(this.products);
  } )
   }
  // console.log(res);



  getCategories(){
    this.loading=true;
    this.service.getAllCategories().subscribe((res:any)=>{
      this.categories=res;
      this.loading=false;

  // console.log(res);
    })
  }
  filterCategory(event:any){
    let value=event.target.value;
    (value=="all") ? this.getProducts() : this.getProductCategory(value);
  }

  getProductCategory(keyword:string){
    this.loading=true;
    this.service.getProductsByCategory(keyword).subscribe ( (res:any) =>{
        this.products=res;
        this.loading=false;

    }
      )}



}

