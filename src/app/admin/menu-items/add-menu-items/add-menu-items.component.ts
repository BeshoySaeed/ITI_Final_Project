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
  formData !: FormData;
  categories: any = [];
  additions: any = [];
  loading: boolean = true;

  item: Item = {
    id: 0,
    name: '',
    img: '',
    price: '',
    description: '',
    discount: '',
    active: false,
    category_id: '',
  };

  constructor(
    private fb: FormBuilder,
    private httpItem: ItemService,
    private route: Router,
    private httpCategory: CategoriesService,
    private httpAddition: AdditionsService
  ) {
    this.form = this.fb.group({
      name: [''],
      price: [''],
      discount: [''],
      category_id: [''],
      description: [''],
      additions: [''],
      active: [true],
      image: [null, Validators.required],
    });
  }
  ngOnInit() {
    this.httpCategory.getAllCategory().subscribe((data) => {
      this.categories = data.data;
    });

    this.httpAddition.getAllAddition().subscribe((data) => {
      this.additions = data.data;
    });

    this.loading = false;
  }

  onSubmit() {
    // const formData = new FormData();
    this.formData.append('name', this.form.get('name')?.value);
    this.formData.append('price', this.form.get('price')?.value);
    this.formData.append('description', this.form.get('description')?.value);
    this.formData.append('discount', this.form.get('discount')?.value);
    this.formData.append('active', '1');
    this.formData.append('category_id', this.form.get('category_id')?.value);
    
    console.log(this.form.value)

    this.httpItem.addNew(this.formData).subscribe((e) =>console.log(e));
    // this.route.navigate(['/admin/menu-items'])
    // console.log(this.additionSelected)

  }

  onSelect(event: any) {
    this.formData = new FormData()
      let file = event.files[0];
      this.formData.append('image', file);
      console.log(file)
      this.item.img = file.name;
      this.form.patchValue({
        image: file
      });
  }

  onRemove() {
    this.form.patchValue({
      image: null,
    });
  }
}
