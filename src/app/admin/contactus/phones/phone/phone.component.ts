import { Component, Pipe, PipeTransform } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent {

  phones = [
    {
      id: 1,
      phone:"+201012345678",
      status:"active",
    },
    {
      id: 2,
      phone:"+201012345678",
      status:"inactive",
    },
    {
      id: 3,
      phone:"+20101235585",
      status:"active",
    },
    {
      id: 4,
      phone:"+201128445678",
      status:"inactive",
    },
    {
      id: 5,
      phone:"+201287945678",
      status:"active",
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

  deletePhone(id:number) {
    console.log(id)
  }
}
@Pipe({
  name: 'Active'
})
export class Active implements PipeTransform{
  transform(value: any, ...args: any[]): any {
    if(value=="active"){
      return 'green'
    }else{
      return 'red'
    }
  }
}
