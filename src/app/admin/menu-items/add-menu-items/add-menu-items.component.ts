import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/app/interface/items';
import { ItemService } from 'src/app/services/ItemService/item.service';
import { AdditionsService } from 'src/app/services/additions-service/additions.service';
import { CategoriesService } from 'src/app/services/category-service/categories.service';


@Component({
  selector: 'app-add-menu-items',
  templateUrl: './add-menu-items.component.html',
  styleUrls: ['./add-menu-items.component.scss'],
})
export class AddMenuItemsComponent {
  form!: FormGroup;
  categories : any = [];
  additionSelected: any;

  additions : any = [];

    item : Item = {
      id : 0,
      name : "",
      img : '',
      price : '',
      description: '',
      discount: '',
      active: false,
      category_id: ""
    }
    itemAddition : object ={
      item_id: this.item.id,
      addition_id: ""
    }
  constructor(private fb: FormBuilder, private httpItem: ItemService, private route: Router, private httpCategory : CategoriesService, private httpAddition: AdditionsService) {
    this.form = this.fb.group({
      name: [''],
      price: [''],
      discount: [''],
      category: [''],
      description: [''],
      additions: [''],
      active: [true],
      image: [null, Validators.required],
    });
  }
  ngOnInit() {
    this.httpCategory.getAllCategory().subscribe(data =>
      {
        this.categories = data.data
      })

      this.httpAddition.getAllAddition().subscribe((data) =>
      {
        this.additions = data.data;
      }
      )
  }




  onSubmit() {
    console.log(this.item);
    this.httpItem.addNew(this.item).subscribe((e) =>console.log(e));
    this.route.navigate(['/admin/menu-items'])
    console.log(this.additionSelected)

  }

  onSelect(event: any) {
    this.item.img = event.files[0].name;
    const file = event.files[0];
    this.form.patchValue({
      image: file,
    });
  }

  onRemove() {
    this.form.patchValue({
      image: null,
    });
  }


  // loopAddition()
  // {
  //   for(let i = 0; i < this.additionSelected.length; i++)
  //   {
      
  //   }
  //   console.log(this.additionSelected)
  // }
}
