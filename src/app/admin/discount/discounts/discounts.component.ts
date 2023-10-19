import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { TagModule } from 'primeng/tag';


@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.scss']
})
export class DiscountsComponent {
  checked: boolean = false;



  discounts = [
    {
      id: 1,
      code: "new25",
      percent: 25,
      active: 'active',
    },

    {
      id: 2,
      code: "new15",
      percent: 15,
      active: 'Not active',
    },
    {
      id: 3,
      code: "new50",
      percent: 50,
      active: 'Not active',

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
  status(active: string) {
    let status = active == 'active'? 'success' : 'danger';
    return status;
  }

  deleteDiscount(id:number) {
    console.log(id)
  }
  toggleDiscount(discount: any) {
    if (discount.checked) {
      console.log('fdsafa');
    } else {
      console.log('sadfas');
    }
  }
}
