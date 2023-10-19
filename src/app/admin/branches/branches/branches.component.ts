import { Component, Pipe, PipeTransform } from '@angular/core';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent {
  Branches = [
    {
      id: 1,
      name:"Branch Name",
      address:" 6st  Maddi",
      location:"Cairo",
      locationlink:"https://www.google.com/maps",
    },
    {
      id: 2,
      name:"Branch Name",
      address:" 6st  Maddi",
      location:"Giza",
      locationlink:"https://www.google.com/maps",

    },
    {
      id: 3,
      name:"Branch Name",
      address:" 6st  Maddi",
      location:"Cairo",
      locationlink:"https://www.google.com/maps",

    },
    {
      id: 4,
      name:"Branch Name",
      address:" 6st  Maddi",
      location:"Alex",
      locationlink:"https://www.google.com/maps",

    },
    {
      id: 5,
      name:"Branch Name",
      address:" 6st  Maddi",
      location:"Port Said",
      locationlink:"https://www.google.com/maps",

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

  deleteBranch(id:number) {
    console.log(id)
  }

}
