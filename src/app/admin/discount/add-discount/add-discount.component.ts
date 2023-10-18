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
  state:any;
  status: any = ['active', 'Not active'];

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.addDiscountForm = this.fb.group(
      {
        code: [''],

        percent: ['', Validators.pattern(/^(?:[1-9]|[1-9][0-9]|100)$/) ],
        
        state: ['', Validators.required],
      },
   
    );
    
  }

  changeState(e: any) {
    this.state?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  onSubmit() {
    console.log(this.addDiscountForm);
  }
}
