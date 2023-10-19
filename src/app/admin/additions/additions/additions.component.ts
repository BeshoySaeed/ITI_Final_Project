import { Component } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-additions',
  templateUrl: './additions.component.html',
  styleUrls: ['./additions.component.scss']
})
export class AdditionsComponent {
  additionItems = [
    {
      id: 1,
      name: "Addition 1",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
      description: "This is the first item in our menu.",
      price: 5,
    },
    {
      id: 1,
      name: "Addition 2",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
      description: "This is the first item in our menu.",
      price: 5,
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
