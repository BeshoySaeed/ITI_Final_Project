import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-menu-items',
  templateUrl: './edit-menu-items.component.html',
  styleUrls: ['./edit-menu-items.component.scss'],
})
export class EditMenuItemsComponent {
  form!: FormGroup;
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

  item = {
    id: 1,
    name: 'Menu item 1',
    category: 2,
    price: 10,
    discount: 5,
    description: 'Menu item 1 description',
    active: false,
    additions: [
      { id: 2, name: 'Addition 2' },
      { id: 3, name: 'Addition 3' },
    ],
  };

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({
      name: [this.item.name],
      price: [this.item.price],
      discount: [this.item.discount],
      category: [this.item.category],
      description: [this.item.description],
      additions: [this.item.additions],
      active: [this.item.active],
      image: [null, Validators.required],
    });
  }

  onSubmit() {
    console.log(this.form);
  }

  onSelect(event: any) {
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
