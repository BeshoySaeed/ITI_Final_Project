import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Table } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DiscountCode } from 'src/app/interface/discount-code';
import { DiscountCodeService } from 'src/app/services/DiscountCodeService/discount-code.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.scss']
})
export class DiscountsComponent {
  checked: boolean = false;
  discountId !: number;

  discounts : DiscountCode[] = [];

  loading: boolean = false;


  constructor(private httpDiscountCode : DiscountCodeService, private httpDiscount: DiscountCodeService, private route: Router ){}

  ngOnInit() {
    this.httpDiscountCode.getDiscountCodes().subscribe(dis =>
      {this.discounts = dis;
        console.log(this.discounts)
      })


  }

  clear(table: Table) {
      table.clear();
  }

  applyFilterGlobal($event:any, dt:any, stringVal:string) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  status(active: string) {
    let status = active == 'active'? 'success' : 'danger';
    return status;
  }

  deleteDiscount(id: number) {
    this.httpDiscount.delete(id).subscribe(() => {
    });
    this.discounts = this.discounts.filter((e) => e.id != id)
    console.log(this.discounts)
  }

  toggleDiscount(discount: any) {
    if (discount.checked) {
      console.log('fdsafa');
    } else {
      console.log('sadfas');
    }
  }
}
