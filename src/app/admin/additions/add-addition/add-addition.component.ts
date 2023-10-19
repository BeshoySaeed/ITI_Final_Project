import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-addition',
  templateUrl: './add-addition.component.html',
  styleUrls: ['./add-addition.component.scss']
})
export class AddAdditionComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      price: [''],
      description: [''],
      image: [null, Validators.required],
    });
  }

  onSubmit() {
    console.log(this.form);
  }

  onSelect(event:any) {
    const file = event.files[0];
    this.form.patchValue({
      image: file
    });
  }

  onRemove() {
    this.form.patchValue({
      image: null
    });
  }
}
