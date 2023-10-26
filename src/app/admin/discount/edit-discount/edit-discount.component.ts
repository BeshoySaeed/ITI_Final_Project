import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountCode } from 'src/app/interface/discount-code';
import { DiscountCodeService } from 'src/app/services/DiscountCodeService/discount-code.service';

@Component({
  selector: 'app-edit-discount',
  templateUrl: './edit-discount.component.html',
  styleUrls: ['./edit-discount.component.scss']
})
export class EditDiscountComponent {
  editDiscountForm!: FormGroup;
  discountId : any;
  isActive: boolean = true;
  discount : DiscountCode =
    {
      id : 0,
      code: 'Loading...',
      percent: 'Loading...',
      active: false
    };

  constructor(private fb: FormBuilder, private ActivatedRoute: ActivatedRoute
              , private httpDiscount: DiscountCodeService, private route: Router)
               {}

  ngOnInit() {
    this.editDiscountForm = this.fb.group(
      {
        code: [this.discount.code],

        percent: [this.discount.percent, Validators.pattern(/^(?:[1-9]|[1-9][0-9]|100)$/) ],

        active: [this.discount.active]
      },
    );

    this.ActivatedRoute.paramMap.subscribe((paramMap) => {
      this.discountId = Number(paramMap.get('id'));

      this.httpDiscount.getId(this.discountId).subscribe((object) => {
        this.discount = object.data;
        // console.log(this.discount)
      })
    });
  }

  toggleActive(active: any) {
    this.isActive = active;

    // if (active) {
    //   console.log(active.id);
    // } else {
    //   console.log(active.id);
    // }
  }
  getToggleButtonClass() {
    return this.isActive ? 'Active' : 'not-active';
  }

  onSubmit() {
    this.httpDiscount.editDiscountCode(this.discountId,this.discount).subscribe((data) =>{})
    this.route.navigate(['/admin/discount-codes/'])

  }
}
