import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [MessageService],

})
export class CategoriesComponent {
  categories = [];
  loading: boolean = false;

  constructor(
    private CategoriesService: CategoriesService,
   private messageService: MessageService
  ) {}


  ngOnInit() {
      this.getAllCategory();
  }

  getAllCategory() {
    this.CategoriesService
      .getAllCategory()
      .subscribe((category: any) => {
        this.categories = category.data;
        this.loading = false
      });
  }

  deleteCategory(id: number) {
    this.CategoriesService
      .deleteCategoryById(id)
      .subscribe((response: any) => {
        this.loading = true;
        if (response.status == 'success') {
          this.getAllCategory();
          this.messageService.add({
            detail: 'Category is deleted',
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
