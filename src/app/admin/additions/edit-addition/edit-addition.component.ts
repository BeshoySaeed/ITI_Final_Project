import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdditionsService } from 'src/app/services/additions-service/additions.service';
import { CategoriesService } from 'src/app/services/category-service/categories.service';

@Component({
  selector: 'app-edit-addition',
  templateUrl: './edit-addition.component.html',
  styleUrls: ['./edit-addition.component.scss'],
})
export class EditAdditionComponent {
  form!: FormGroup;
  additionId: any;
  item = {
    id: '',
    name: '',
    description: '',
    price: '',
  };

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private httpAddition: AdditionsService,
    private route: Router
  ) {}
  ngOnInit() {
    this.form = this.fb.group({
      name: [this.item.name],
      price: [this.item.price],
      description: [this.item.description],
      image: [null],
    });

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.additionId = Number(paramMap.get('id'));
      console.log(this.additionId);
      this.httpAddition
        .getAllAdditionId(this.additionId)
        .subscribe((object) => {
          this.item = object.data;
          console.log(object);
          console.log(this.item);
        });
    });
  }

  onSubmit() {
    this.httpAddition.updateAddition(this.additionId, this.item).subscribe();
    this.route.navigate(['/admin/additions']);
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
