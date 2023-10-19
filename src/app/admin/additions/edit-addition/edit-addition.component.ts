import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-addition',
  templateUrl: './edit-addition.component.html',
  styleUrls: ['./edit-addition.component.scss'],
})
export class EditAdditionComponent {
  form!: FormGroup;
  item = {
    id: 1,
    name: 'Addition 1',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    description: 'This is the first item in our menu.',
    price: 5,
  };

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({
      name: [this.item.name],
      price: [this.item.price],
      description: [this.item.description],
      image: [null],
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
