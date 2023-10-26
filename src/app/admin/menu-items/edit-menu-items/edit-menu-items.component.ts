import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/interface/items';
import { ItemService } from 'src/app/services/ItemService/item.service';

@Component({
  selector: 'app-edit-menu-items',
  templateUrl: './edit-menu-items.component.html',
  styleUrls: ['./edit-menu-items.component.scss'],
})
export class EditMenuItemsComponent {
  form!: FormGroup;
  itemId!: number;
  categories = [
    {
      id: 1,
      name: 'Category 1',
    },
    {
      id: 2,
      name: 'Category 2',
    },
  ];

  additions = [
    { id: 1, name: 'Addition 1' },
    { id: 2, name: 'Addition 2' },
    { id: 3, name: 'Addition 3' },
    { id: 4, name: 'Addition 4' },
    { id: 5, name: 'Addition 5' },
  ];

  item : Item = {
    id : 0,
    name : "",
    img : '',
    price : '',
    description: '',
    discount: '',
    active: false,
    category_id: '1'
  }

  constructor(private fb: FormBuilder, private httpItem: ItemService, private activatedRoute: ActivatedRoute, private route : Router)
  {
    this.form = this.fb.group({
      name: [this.item.name],
      price: [this.item.price],
      discount: [this.item.discount],
      category: [this.item.description],
      description: [this.item.description],
      additions: [this.item.description],
      active: [this.item.active],
      image: [null],
    });

  }
  ngOnInit() {


    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.itemId = Number(paramMap.get('id'));
      // console.log(this.itemId)
      this.httpItem.getItemById(this.itemId).subscribe((object) => {
        this.item = object;
        // console.log(this.item)
      })
    });
  }

  onSubmit() {
    this.httpItem.editItem(this.itemId,this.item).subscribe((x) => console.log(x))
    this.route.navigate(['/admin/menu-items/'])
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
}
