import { Component } from '@angular/core';
import { ItemService } from 'src/app/services/ItemService/item.service';
import { CategoriesService } from 'src/app/services/category-service/categories.service';
// import {}  from

interface Offer {
  img: string;
  title: string;
  available: string;
  price: string;
  stars: number;
}

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss'],
})
export class MenuSectionComponent {

  categories: any;
  items:any;
  displayeditems: any;
  displayedCategories:any;
  constructor(private dataServices:ItemService ,private dataService:CategoriesService ) { }

  ngOnInit() {
    this.getitemschData();
    this.getCategoriesData();
  }

  onItemChange(event:any) {
    const startIndex = event.first; // Get the index of the first category to be displayed
    const endIndex = startIndex + event.rows; // Calculate the index of the last category to be displayed
    this.displayeditems = this.items.slice(startIndex, endIndex);
  }


  getitemschData(){
    this.dataServices.getItems().subscribe(res =>{
    this.items=res;
    this.displayeditems = this.items.slice(0, 4); // Display only 4 categories initially
    // console.log(this.displayeditems);
   })
  }
  getCategoriesData(){
    this.dataService.getAllCategory().subscribe(res =>{
    this.categories=res.data;
    this.displayeditems = this.categories.slice(0, 4); // Display only 4 categories initially
    // console.log(this.displayeditems);
   })
  }

  filteredProducts:any;

  filterProducts(category: string) {
    this.filteredProducts = this.items.filter((product: { category: string; }) => {
      return product.category === category;
    });
  }

  getStarsCount(stars: number) {
    let starsArr = [];
    for (let i = 0; i < stars; i++) {
      starsArr.push(i);
    }
    return starsArr;
  }
}
