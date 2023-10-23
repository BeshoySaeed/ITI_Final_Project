import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CustomerServicePhonesService {

  constructor(private httpClient: HttpClient) { }

  getAllCustomerServicePhones(): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}customer-service-phones`)
  }

  getAllActiveCustomerServicePhones(): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}customer-service-active-phones`)
  }

  getCustomerServicePhoneById(id: number): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}customer-service-phones/${id}`)
  }

  deleteCustomerServicePhoneById(id: number): Observable<object> {
    return this.httpClient.delete<object>(`${environment.host}customer-service-phones/${id}`)
  }
}
