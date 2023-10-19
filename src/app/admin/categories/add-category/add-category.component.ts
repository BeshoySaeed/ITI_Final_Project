import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  addCategoryForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.addCategoryForm = this.fb.group({
      name: [''],
      image: [null, Validators.required],
    });
  }

  onSubmit() {
    console.log(this.addCategoryForm);
  }

  onSelect(event:any) {
    const file = event.files[0];
    this.addCategoryForm.patchValue({
      image: file
    });
  }

  onRemove() {
    this.addCategoryForm.patchValue({
      image: null
    });
  }
}
