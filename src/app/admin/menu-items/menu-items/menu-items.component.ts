import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { Item } from 'src/app/interface/items';
import { ItemService } from 'src/app/services/ItemService/item.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
})
export class MenuItemsComponent {
  menuItems : Item[] = [];
  // items : Item[] = []

  loading: boolean = false;

  constructor(private httpItem: ItemService){}

  ngOnInit() {
    this.httpItem.getItems().subscribe((data) =>
    {
      this.menuItems = data;
      // console.log(this.menuItems)
    } )
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
}
