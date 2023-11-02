import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/interface/items';
import { ItemService } from 'src/app/services/ItemService/item.service';
import { CategoriesService } from 'src/app/services/category-service/categories.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-menu-items',
  templateUrl: './edit-menu-items.component.html',
  styleUrls: ['./edit-menu-items.component.scss'],
  providers: [MessageService],
})
export class EditMenuItemsComponent {
  form!: FormGroup;
  itemId!: number;
  categories = [];
  loading: boolean = true;

  additions = [
    { id: 1, name: 'Addition 1' },
    { id: 2, name: 'Addition 2' },
    { id: 3, name: 'Addition 3' },
    { id: 4, name: 'Addition 4' },
    { id: 5, name: 'Addition 5' },
  ];

  item: any = {
    id: 0,
    name: '',
    img: '',
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
    'active'
  ];

  constructor(
    private fb: FormBuilder,
    private httpItem: ItemService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private CategoriesService: CategoriesService,
   private messageService: MessageService
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
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.itemId = Number(paramMap.get('id'));
      this.httpItem.getItemById(this.itemId).subscribe((object) => {
        this.item = object;
        this.setFormValues()
        this.loading = false
      });
    });
  }

  setFormValues() {
    for (let control of this.formControllers) {
      this.form.controls[control].setValue(this.item[control]);
    }
  }

  onSubmit() {
    this.httpItem
      .editItem(this.itemId, this.form.value)
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
    this.CategoriesService
      .getAllCategory()
      .subscribe((category: any) => {
        this.categories = category.data;
      });
  }

  onRemove() {
    this.form.patchValue({
      image: null,
    });
  }
}
