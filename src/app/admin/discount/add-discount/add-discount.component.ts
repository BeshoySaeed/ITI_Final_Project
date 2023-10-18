import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrls: ['./add-discount.component.scss']
})
export class AddDiscountComponent {
  addDiscountForm!: FormGroup;
  isActive: boolean = false;


  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.addDiscountForm = this.fb.group(
      {
        code: [''],

        percent: ['', Validators.pattern(/^(?:[1-9]|[1-9][0-9]|100)$/) ],
        
    
      },
   
    );
  }

  onSubmit() {
    console.log(this.addDiscountForm);
  }
}
