import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent {
  editCategoryForm!: FormGroup;
  category= {
    id: 1,
    name: "Category 1"
  }

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.editCategoryForm = this.fb.group({
      name: [this.category.name],
      image: [null],
    });
  }

  onSubmit() {
    console.log(this.editCategoryForm);
  }

  onSelect(event:any) {
    const file = event.files[0];
    this.editCategoryForm.patchValue({
      image: file
    });
  }

  onRemove() {
    this.editCategoryForm.patchValue({
      image: null
    });
  }
}
