import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DiscountCode } from 'src/app/interface/discount-code';
import { GenericService } from '../GenericService/generic-service.service';

@Injectable({
  providedIn: 'root'
})
export class DiscountCodeService {

  constructor(private httpDiscountCode: GenericService) { }


  getDiscountCodes(): Observable<DiscountCode[]>
  {
    return this.httpDiscountCode.getAll('discountCode')
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }

  getDiscountCodeById(id: number) : Observable<DiscountCode>
  {
    return this.httpDiscountCode.getById('discountCode', id)
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }

  deleteDiscountCode(id: number) : Observable<DiscountCode>
  {
    return this.httpDiscountCode.delete('discountCode', id)
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }

  addDiscountCode(object: DiscountCode): Observable<DiscountCode>
  {
    return this.httpDiscountCode.post('discountCode', object)
    .pipe(
      map((item: any) => {
        return item.data
      })
    );
  }

  editDiscountCode(id:number, object:any): Observable<DiscountCode>
  {
    return this.httpDiscountCode.update('discountCode' ,id ,object)
    .pipe(
      map((item: any) => {
        return item.data
      })
    )
  }
}
