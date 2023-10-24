import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { AdditionsService } from 'src/app/services/additions-service/additions.service'; 

@Component({
  selector: 'app-additions',
  templateUrl: './additions.component.html',
  styleUrls: ['./additions.component.scss'],
  providers: [MessageService],

})
export class AdditionsComponent {
  additionItems = [];
    loading: boolean = false;
  
    constructor(
      private AdditionsService: AdditionsService,
     private messageService: MessageService
    ) {}
  
  
    ngOnInit() {
        this.getAllAddition();
    }
  
    getAllAddition() {
      this.AdditionsService
        .getAllAddition()
        .subscribe((Addition: any) => {
          this.additionItems = Addition.data;
          this.loading = false
        });
    }
  
    deleteAddition(id: number) {
      this.AdditionsService
        .deleteAdditionById(id)
        .subscribe((response: any) => {
          this.loading = true;
          if (response.status == 'success') {
            this.getAllAddition();
            this.messageService.add({
              detail: 'Addition is deleted',
            });
          }
        });
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
