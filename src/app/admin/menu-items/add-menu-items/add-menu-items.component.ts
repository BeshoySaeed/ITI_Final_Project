import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/app/interface/items';
import { ItemService } from 'src/app/services/ItemService/item.service';


@Component({
  selector: 'app-add-menu-items',
  templateUrl: './add-menu-items.component.html',
  styleUrls: ['./add-menu-items.component.scss'],
})
export class AddMenuItemsComponent {
  form!: FormGroup;
  categories= [
    {
      id: 1,
      name: "Category 1"
    },
    {
      id: 2,
      name: "Category 2"
    },
  ];

  additions = [
    { id: 1, name: 'Addition 1' },
    { id: 2, name: 'Addition 2' },
    { id: 3, name: 'Addition 3' },
    { id: 4, name: 'Addition 4' },
    { id: 5, name: 'Addition 5' }
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
  constructor(private fb: FormBuilder, private httpItem: ItemService, private route: Router) {
    this.form = this.fb.group({
      name: [''],
      price: [''],
      discount: [''],
      category: ['1'],
      description: [''],
      additions: [''],
      active: [true],
      image: [null, Validators.required],
    });
  }
  ngOnInit() {
  }




  onSubmit() {
    // console.log(this.item);
    this.httpItem.addNew(this.item).subscribe((e) =>console.log(e));
    this.route.navigate(['/admin/menu-items'])
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
