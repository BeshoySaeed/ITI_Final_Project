import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/category-service/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  addCategoryForm!: FormGroup;
  category: any = {
    name: "",
    img: ""
  }

  constructor(private fb: FormBuilder, private httpCat: CategoriesService, private route: Router) {}
  ngOnInit() {
    this.addCategoryForm = this.fb.group({
      name: [''],
      image: [null, Validators.required],
    });

  }

  onSubmit() {
    this.httpCat.storeCategory(this.category).subscribe();
    this.route.navigate(['/admin/categories'])
  }

  onSelect(event:any) {
    const file = event.files[0];
    this.category.img = file.name;
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
