import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/interface/items';
import { ItemService } from 'src/app/services/ItemService/item.service';
import { CategoriesService } from 'src/app/services/category-service/categories.service';
import { AdditionsService } from 'src/app/services/additions-service/additions.service';

@Component({
  selector: 'app-edit-menu-items',
  templateUrl: './edit-menu-items.component.html',
  styleUrls: ['./edit-menu-items.component.scss'],
})
export class EditMenuItemsComponent {
  form!: FormGroup;
  itemId!: number;
  categories = [];
  loading: boolean = true;

  additions = [];

  item: any = {
    id: 0,
    name: '',
    price: '',
    description: '',
    discount: '',
    active: false,
    category_id: '1',
  };

  formControllers = [
    'name',
    'price',
    'discount',
    'category_id',
    'description',
    'additions',
    'active',
  ];

  constructor(
    private fb: FormBuilder,
    private httpItem: ItemService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private CategoriesService: CategoriesService,
    private AdditionsService: AdditionsService
  ) {
    this.form = this.fb.group({
      name: [this.item.name],
      price: [this.item.price],
      discount: [this.item.discount],
      category_id: [this.item.category_id],
      description: [this.item.description],
      additions: [this.item.description],
      active: [this.item.active],
      image: [null],
    });
  }
  ngOnInit() {
    this.getAllCategory();
    this.getAllAddition();
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.itemId = Number(paramMap.get('id'));
      this.httpItem.getItemById(this.itemId).subscribe((object) => {
        this.item = object;
        this.setFormValues();
        this.loading = false;
      });
    });
  }

  setFormValues() {
    for (let control of this.formControllers) {
      this.form.controls[control].setValue(this.item[control]);
    }
    this.form.controls['additions'].setValue(this.item.itemAdditions);
  }

  getAllAddition() {
    this.AdditionsService.getAllAddition().subscribe((Addition: any) => {
      this.additions = Addition.data;
    });
  }

  onSubmit() {
    this.httpItem
      .editItem(this.itemId, this.item)
      .subscribe((x) => console.log(x));
    this.route.navigate(['/admin/menu-items/']);
  }

  onSelect(event: any) {
    this.item.img = event.files[0].name;

    const file = event.files[0];
    this.form.patchValue({
      image: file,
    });
  }

  getAllCategory() {
    this.CategoriesService.getAllCategory().subscribe((category: any) => {
      this.categories = category.data;
    });
  }

  onRemove() {
    this.form.patchValue({
      image: null,
    });
  }
}
