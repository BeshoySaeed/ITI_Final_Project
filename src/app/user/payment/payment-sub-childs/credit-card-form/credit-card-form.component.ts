import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss']
})
export class CreditCardFormComponent {
  constructor(private http: HttpClient) { }
  initiatePayment() {
    const value = 100; 
      const body = { value };
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      this.http.post<any>('http://localhost:8000/api/paypal/payment', body).subscribe(
      response => {
        console.log(response)
        const url=response.link;
        window.location.href=url;
      },
      error => {
        console.error('Failed to initiate payment:', error);
      }
    );
  }
  submitPayment() {
    const value = 100; 
  
    const body = { value };
    this.http.post<any>('http://localhost:8000/api/stripe/payment',body).subscribe(
      response => {
        this.redirectToCheckout(response.url);
      },
      error => {
        console.error(error);
      }
    );
  }

  redirectToCheckout(url: string) {
    window.location.href = url;
  }

}
