import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/category-service/categories.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent {
  editCategoryForm!: FormGroup;
  categoryId: any;
  category = {
    name: '',
    img: '',
  };

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private httpCat: CategoriesService,
    private route: Router
  ) {}
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.categoryId = Number(paramMap.get('id'));
      console.log(this.categoryId);
      this.httpCat.getCategoryByID(this.categoryId).subscribe((object) => {
        this.category = object.data;
      });
    });

    this.editCategoryForm = this.fb.group({
      name: [this.category.name],
      image: [null],
    });
  }

  onSubmit() {
    this.httpCat.updateCategory(this.categoryId, this.category).subscribe();
    this.route.navigate(['/admin/categories']);
  }

  onSelect(event: any) {
    const file = event.files[0];
    this.category.img = file.name;
    this.editCategoryForm.patchValue({
      image: file,
    });
  }

  onRemove() {
    this.editCategoryForm.patchValue({
      image: null,
    });
  }
}
