import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-menu-items',
  templateUrl: './add-menu-items.component.html',
  styleUrls: ['./add-menu-items.component.scss'],
})
export class AddMenuItemsComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      price: [''],
      discount: [''],
      active: [''],
      description: [''],
      category: [''],
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
