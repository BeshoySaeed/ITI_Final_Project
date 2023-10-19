import { Component } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories = [
    {
      id: 1,
      name: "Category 1",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
    },

    {
      id: 2,
      name: "Category 2",
      image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg"
    },
  ];

  loading: boolean = false;

  ngOnInit() {
  }

  clear(table: Table) {
      table.clear();
  }

  applyFilterGlobal($event:any, dt:any, stringVal:string) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  deleteItem(id:number) {
    console.log(id)
  }
}
