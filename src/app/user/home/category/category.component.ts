import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/category-service/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  items: any[] = [];
  ownedProducts: any[] = [];
  ownedProductsChunk: any[] = [];
  constructor(private dataServices:CategoriesService) { }
    categories:any;
    displayedCategories:any;


  ngOnInit(){
    this.getBranchData();
  
  }

  onPageChange(event:any) {
    const startIndex = event.first; // Get the index of the first category to be displayed
    const endIndex = startIndex + event.rows; // Calculate the index of the last category to be displayed
    this.displayedCategories = this.categories.slice(startIndex, endIndex);
  }

  getBranchData(){
    this.dataServices.getAllCategory().subscribe(res =>{
    this.categories=res.data;
    this.displayedCategories = this.categories.slice(0, 4); // Display only 4 categories initially
    // console.log(this.categories);
   })
  }
}


