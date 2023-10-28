import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoriesService } from 'src/app/services/category-service/categories.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  constructor(private categoryService: CategoriesService) { }
  @Input() title:string="";
 @Input() data:any []=[]
 @Output() selectedvalue =new EventEmitter();
 
 detectCategory(event:any){
  this.selectedvalue.emit(event);
  // console.log(event.target.value);

 }

  categories :any;

  ngOnInit() {
    this.categoryService.getAllCategory().subscribe(response => {
      this.categories = response.data;
      // console.log(this.categories);
    });
  } 
  
 }
 