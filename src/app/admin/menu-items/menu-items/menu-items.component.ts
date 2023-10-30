import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { Item } from 'src/app/interface/items';
import { ItemService } from 'src/app/services/ItemService/item.service';
import { CategoriesService } from 'src/app/services/category-service/categories.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
})
export class MenuItemsComponent {
  menuItems : Item[] = [];
  categories: any;
  itemCategory: any;
  // items : Item[] = []

  loading: boolean = false;

  constructor(private httpItem: ItemService, private httpCat: CategoriesService){}

  ngOnInit() {
    this.httpItem.getItems().subscribe((data) =>
    {
      this.menuItems = data;
      console.log(this.menuItems)
    } )
    this.httpCat.getAllCategory().subscribe((data) => {
      this.categories = data.data;
    });
  }

  clear(table: Table) {
    table.clear();
  }

  applyFilterGlobal($event: any, dt: any, stringVal: string) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  deleteItem(id: number) {
    this.httpItem.deleteItem(id).subscribe(() => {});
    this.menuItems = this.menuItems.filter(item => item.id != id)
  }

  status(active: string) {
    let status = active == 'active'? 'success' : 'danger';
    return status;
  }

  categoryName(id: number) {
    if (!this.categories) {
      return ''; 
    }
    const filteredCategory = this.categories.find((c: any) => c.id === id);
    if (filteredCategory) {
      return filteredCategory.name;
    } else {
      return ''; 
    }
  }
}
