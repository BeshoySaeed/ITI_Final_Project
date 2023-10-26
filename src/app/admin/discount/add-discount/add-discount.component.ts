import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { DiscountCode } from 'src/app/interface/discount-code';
import { DiscountCodeService } from 'src/app/services/DiscountCodeService/discount-code.service';

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrls: ['./add-discount.component.scss']
})
export class AddDiscountComponent {
  addDiscountForm!: FormGroup;
  isActive: boolean = false;


  status: any = ['active', 'Not active'];


  DiscountCode : DiscountCode = {
    id: 0,
    code: "",
    percent: "",
    active: false,
  }


  constructor(private fb: FormBuilder, private httpDiscountCode: DiscountCodeService, private route: Router) {}
  ngOnInit() {




    this.addDiscountForm = this.fb.group(
      {
        code: [''],

        percent: ['', Validators.pattern(/^(?:[1-9]|[1-9][0-9]|100)$/) ],

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
    this.httpDiscountCode.addDisc(this.DiscountCode).subscribe(d =>
      {
        // console.log(d)
      })
      this.route.navigate(['/admin/discount-codes'])
  }
}
