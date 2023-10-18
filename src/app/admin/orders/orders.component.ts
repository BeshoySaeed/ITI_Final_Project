import { Component } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  orders = [
    {
      id: 1,
      userName: 'Martina',
      createdAt: '18-10-2023',
      totalPrice: '120',
      note: 'Order 1 note',
      paymentMethod: 'On deliver',
      discountCode: '2kerw32',
      confirmInstruction: 'Yes',
      street: 'street',
      area: 'area',
      city: 'city',
      building_name: 'Building name',
      floor_number: 'Floor number',
      flat_number: 'Flat number',
      gps_location: 'GPS location',
      phone1: '01251651561',
      phone2: '01251651561',
      orderItems: [
        {
          id: 1,
          name: 'Menu Item 1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
          price: 20,
          category: 'pizza',
          discount: 10,
          quantity: 2,
          additions: [
            {
              id: 1,
              name: 'Addition 1',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
              price: 10,
            },
            {
              id: 2,
              name: 'Addition 2',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
              price: 5,
            },
          ],
        },
        {
          id: 1,
          name: 'Menu Item 2',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
          price: 20,
          category: 'pizza',
          discount: 10,
          quantity: 4,
          additions: [
            {
              id: 1,
              name: 'Addition 1',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
              price: 5,
            },
            {
              id: 2,
              name: 'Addition 2',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
              price: 15,
            },
            {
              id: 3,
              name: 'Addition 3',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
              price: 5,
            },
          ],
        },
      ],
    },

    {
      id: 2,
      userName: 'User',
      createdAt: '18-10-2023',
      totalPrice: '120',
      note: 'Order 1 note',
      paymentMethod: 'On deliver',
      discountCode: '2kerw32',
      confirmInstruction: 'Yes',
      street: 'street',
      area: 'area',
      city: 'city',
      building_name: 'Building name',
      floor_number: 'Floor number',
      flat_number: 'Flat number',
      gps_location: 'GPS location',
      phone1: '01251651561',
      phone2: '01251651561',
      orderItems: [
        {
          id: 1,
          name: 'Menu Item 1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
          price: 20,
          category: 'pizza',
          discount: 10,
          quantity: 3,
          additions: [
            {
              id: 1,
              name: 'Addition 1',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
              price: 10,
            },
            {
              id: 2,
              name: 'Addition 2',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
              price: 5,
            },
          ],
        },
        {
          id: 1,
          name: 'Menu Item 2',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
          price: 20,
          category: 'pizza',
          discount: 10,
          quantity: 1,
          additions: [
            {
              id: 1,
              name: 'Addition 1',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
              price: 5,
            },
            {
              id: 2,
              name: 'Addition 2',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
              price: 15,
            },
            {
              id: 3,
              name: 'Addition 3',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
              price: 5,
            },
          ],
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

  confirmInstructionStatus(active: string) {
    let status = active == 'Yes' ? 'success' : 'danger';
    return status;
  }
}
