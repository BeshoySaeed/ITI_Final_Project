import { Component, Pipe, PipeTransform } from '@angular/core';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {


  subscribes = [
    {
      id: 1,
      name:"Plan 1",
      benefits:"Desc",
      discount_value:"50%",
      duration:"3",
      subscribe_value:"100",
      status:"active",

    },
    {
      id: 2,
      name:"Plan 2",
      benefits:"Desc",
      discount_value:"20%",
      duration:"1",
      subscribe_value:"200",
      status:"inactive",

    },
    {
      id: 3,
      name:"Plan 3",
      benefits:"Desc",
      discount_value:"50%",
      duration:"3",
      subscribe_value:"100",
      status:"active",

    },
    {
      id: 4,
      name:"Plan 4",
      benefits:"Desc",
      discount_value:"50%",
      duration:"5",
      subscribe_value:"500",
      status:"inactive",

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

  deleteSubscribe(id:number) {
    console.log(id)
  }
}