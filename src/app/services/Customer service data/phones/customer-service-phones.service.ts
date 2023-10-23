import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CustomerServicePhonesService {

  constructor(private httpClient: HttpClient) { }

  getAllPhones(): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}customer-service-phones`)
  }

  getAllActivePhones(): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}customer-service-active-phones`)
  }

  getPhoneById(id: number): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}customer-service-phones/${id}`)
  }

  deletePhoneById(id: number): Observable<object> {
    return this.httpClient.delete<object>(`${environment.host}customer-service-phones/${id}`)
  }
}
