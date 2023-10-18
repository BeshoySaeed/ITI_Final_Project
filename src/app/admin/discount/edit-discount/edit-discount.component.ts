import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-discount',
  templateUrl: './edit-discount.component.html',
  styleUrls: ['./edit-discount.component.scss']
})
export class EditDiscountComponent {
  editDiscountForm!: FormGroup;
  
  isActive: boolean = true;

  discount = 
    {
      id: 1,
      code: "new25",
      percent: 25,
      active:'active'
    };
  


  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.editDiscountForm = this.fb.group(
      {
        code: [this.discount.code],

        percent: [this.discount.percent, Validators.pattern(/^(?:[1-9]|[1-9][0-9]|100)$/) ],
        
        active: [this.discount.active]
      },
   
    );
  }

  toggleActive(active: any) {
    this.isActive = active;

    if (active) {
      console.log(active.id);
    } else {
      console.log(active.id);
    }
  }
  getToggleButtonClass() {
    return this.isActive ? 'Active' : 'not-active';
  }

  onSubmit() {
    console.log(this.editDiscountForm);
  }

}
