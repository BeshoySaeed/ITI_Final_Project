import { Component } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
})
export class MenuItemsComponent {
  menuItems = [
    {
      id: 1,
      name: 'Menu Item 1',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
      description: 'This is the first item in our menu.',
      price: 20,
      category: 'pizza',
      active: 'active',
      discount: 10,
      additions: [
        {
          id: 1,
          name: "Addition 1",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
          description: "This is the first item in our menu.",
          price: 10,
        },
        {
          id: 2,
          name: "Addition 2",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
          description: "This is the first item in our menu.",
          price: 5,
        },
      ],
    },
    {
      id: 1,
      name: 'Menu Item 2',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
      description: 'This is the first item in our menu.',
      price: 20,
      category: 'pizza',
      active: 'inactive',
      discount: 10,
      additions: [
        {
          id: 1,
          name: "Addition 1",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
          description: "This is the first item in our menu.",
          price: 5,
        },
        {
          id: 2,
          name: "Addition 2",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
          description: "This is the first item in our menu.",
          price: 15,
        },
        {
          id: 3,
          name: "Addition 3",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
          description: "This is the first item in our menu.",
          price: 5,
        },
      ],
    },
  ];

  loading: boolean = false;

  ngOnInit() {}

  clear(table: Table) {
    table.clear();
  }

  applyFilterGlobal($event: any, dt: any, stringVal: string) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  deleteItem(id: number) {
    console.log(id);
  }

  status(active: string) {
    let status = active == 'active'? 'success' : 'danger';
    return status;
  }
}
