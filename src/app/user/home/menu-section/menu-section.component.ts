import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ItemService } from 'src/app/services/ItemService/item.service';
import { CategoriesService } from 'src/app/services/category-service/categories.service';
// import {}  from

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss'],
})
export class MenuSectionComponent {
  categories: any;
  items: any;
  displayeditems: any;
  displayedCategories: any;
  originalProducts: any;
  filteredProducts: any;
  constructor(
    private dataServices: ItemService,
    private dataService: CategoriesService,
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getitemschData();
    this.getCategoriesData();

    this.primengConfig.ripple = true;

    // this.route.queryParams.subscribe((params) => {
    // const categoryId = params['category'];
    // this.getProductsByCategory(categoryId);
    // console.log(params);
    // });
  }

  // goToMenuPage(categoryId: string) {
  //   this.router.navigate(
  //     ['/all-items'],
  //     { queryParams: { category: categoryId }
  //     });
  // }

  getProductsByCategory(categoryId: string) {
    console.log(categoryId);

    this.dataService.getProductsByCategory(categoryId).subscribe((products) => {
      this.filteredProducts = products;
    });
    console.log(this.filteredProducts);
  }

  /*******************************/
  displayBasic: any;

  showBasicDialog() {
    this.displayBasic = true;
  }
  //******************************** */
  onItemChange(event: any) {
    const startIndex = event.first; // Get the index of the first category to be displayed
    const endIndex = startIndex + event.rows; // Calculate the index of the last category to be displayed
    this.displayeditems = this.items.slice(startIndex, endIndex);
  }

  getitemschData() {
    this.dataServices.getItems().subscribe((res) => {
      this.items = res;
      this.displayeditems = this.items.slice(0, 4); // Display only 4 categories initially
      console.log(this.displayeditems);
    });
  }
  getCategoriesData() {
    this.dataService.getAllCategory().subscribe((res) => {
      this.categories = res.data;
      this.displayeditems = this.categories.slice(0, 4); // Display only 4 categories initially
      // console.log(this.displayeditems);
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
