import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
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
