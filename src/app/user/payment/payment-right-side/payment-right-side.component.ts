import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OrderService } from 'src/app/services/OrderService/order.service';
import { SharedpriceService } from 'src/app/services/Shared-price/sharedprice.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-payment-right-side',
  templateUrl: './payment-right-side.component.html',
  styleUrls: ['./payment-right-side.component.scss']
})
export class PaymentRightSideComponent implements OnInit {
  @Input() paymentForm! :FormGroup;
  TotalPrice:any;
  User_id:any = localStorage.getItem('user_id');
  Order_id:any;
  userBalance : any;
  messageBalance : any = "your balance not enough"

  constructor(private httpUser: UserService,private SharedPrice: SharedpriceService ,private http: HttpClient ,private Order : OrderService){
  }
  ngOnInit(){

    this.httpUser.getUserByID(this.User_id).subscribe((res) => 
    {
      this.userBalance = res.data.balance;
      console.log(this.userBalance)
    })
    
    this.Order.getUserOrders(this.User_id).subscribe((data:any)=>{
      this.Order_id=data.filter((x:any)=>{
        return x.status=="cart"
      })[0].id

      console.log(this.Order_id)
    })
  }
  Pay(){
    if(this.paymentForm.value.paymentMethod == 'Paypal'){
      const value = this.SharedPrice.GetPrice(); 
      console.log("value",value)
      const body = { value };
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      this.http.post<any>('http://localhost:8000/api/paypal/payment', body).subscribe(
      response => {
        console.log(response)
        if(response.success){
          this.Order.editOrder(this.Order_id,{

              area: this.paymentForm.get('area')?.value,
              building_name: this.paymentForm.get('building_name')?.value,
              city: this.paymentForm.get('city')?.value,
              confirmInstructions: true,
              discountCode:this.paymentForm.get('discountCode')?.value,
              flat_number: this.paymentForm.get('flat_number')?.value,
              floor_number: this.paymentForm.get('floor_number')?.value,
              gps_location: this.paymentForm.get('gps_location')?.value,
              notes:this.paymentForm.get('notes')?.value,
              paymentMethod:this.paymentForm.value.paymentMethod,
              phone1: this.paymentForm.get('phone1')?.value,
              phone2: this.paymentForm.get('phone2')?.value,
              street: this.paymentForm.get('street')?.value,

          }).subscribe()
          const url=response.link;
          window.location.href=url;

        }
      },
      error => {
        console.error('Failed to initiate payment:', error);
      }
    );
    }
    else if(this.paymentForm.value.paymentMethod == 'Stripe'){
      const value = this.SharedPrice.GetPrice(); 
  
      const body = { value };
      this.http.post<any>('http://localhost:8000/api/stripe/payment',body).subscribe(
        response => {
          if(response.success){
            this.Order.editOrder(this.Order_id,{
            
              area: this.paymentForm.get('area')?.value,
              building_name: this.paymentForm.get('building_name')?.value,
              city: this.paymentForm.get('city')?.value,
              confirmInstructions: true,
              discountCode:this.paymentForm.get('discountCode')?.value,
              flat_number: this.paymentForm.get('flat_number')?.value,
              floor_number: this.paymentForm.get('floor_number')?.value,
              gps_location: this.paymentForm.get('gps_location')?.value,
              notes:this.paymentForm.get('notes')?.value,
              paymentMethod:this.paymentForm.value.paymentMethod,
              phone1: this.paymentForm.get('phone1')?.value,
              phone2: this.paymentForm.get('phone2')?.value,
              street: this.paymentForm.get('street')?.value,

            }).subscribe()
            this.redirectToCheckout(response.url);
          }
        },
        error => {
          console.error(error);
        }
      );
    }
    else if(this.paymentForm.value.paymentMethod == 'balance'){
      if(this.userBalance >= this.SharedPrice.GetPrice()){
          this.httpUser.updateUser(this.User_id, {
            balance: this.userBalance - this.SharedPrice.GetPrice(),
          }).subscribe((res) => console.log(res));
          this.Order.editOrder(this.Order_id,{
            status : "processing",
            area: this.paymentForm.get('area')?.value,
            building_name: this.paymentForm.get('building_name')?.value,
            city: this.paymentForm.get('city')?.value,
            confirmInstructions: true,
            discountCode:this.paymentForm.get('discountCode')?.value,
            flat_number: this.paymentForm.get('flat_number')?.value,
            floor_number: this.paymentForm.get('floor_number')?.value,
            gps_location: this.paymentForm.get('gps_location')?.value,
            notes:this.paymentForm.get('notes')?.value,
            paymentMethod:this.paymentForm.value.paymentMethod,
            phone1: this.paymentForm.get('phone1')?.value,
            phone2: this.paymentForm.get('phone2')?.value,
            street: this.paymentForm.get('street')?.value,
          }).subscribe()

    
        }
        else
          {
            this.messageBalance = [
              { severity: 'error', summary: 'Error', detail: 'Your balance not enough' }
          ];
          }
          
        }else{
          this.Order.editOrder(this.Order_id,{
            status:"processing",
            area: this.paymentForm.get('area')?.value,
            building_name: this.paymentForm.get('building_name')?.value,
            city: this.paymentForm.get('city')?.value,
            confirmInstructions: true,
            discountCode:this.paymentForm.get('discountCode')?.value,
            flat_number: this.paymentForm.get('flat_number')?.value,
            floor_number: this.paymentForm.get('floor_number')?.value,
            gps_location: this.paymentForm.get('gps_location')?.value,
            notes:this.paymentForm.get('notes')?.value,
            paymentMethod:this.paymentForm.value.paymentMethod,
            phone1: this.paymentForm.get('phone1')?.value,
            phone2: this.paymentForm.get('phone2')?.value,
            street: this.paymentForm.get('street')?.value,
          }).subscribe()

          setTimeout(() => {
            window.location.href = 'http://localhost:4200/home'; 
                  }, 30);
        } 
                        
  }

redirectToCheckout(url: string) {
  window.location.href = url;
}
}