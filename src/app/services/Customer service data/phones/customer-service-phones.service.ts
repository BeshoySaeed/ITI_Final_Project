import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CustomerServicePhonesService {
  phonesApiRoute = 'customer-service-phones'

  constructor(private httpClient: HttpClient) { }

  getAllPhones(): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}${this.phonesApiRoute}`)
  }

  getAllActivePhones(): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}customer-service-active-phones`)
  }

  getPhoneById(id: number): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}${this.phonesApiRoute}/${id}`)
  }

  deletePhoneById(id: number): Observable<object> {
    return this.httpClient.delete<object>(`${environment.host}${this.phonesApiRoute}/${id}`)
  }

  updatePhone(id:number, phone: object): Observable<object> {
    return this.httpClient.put<object>(`${environment.host}${this.phonesApiRoute}/${id}`, phone)
  }

  storePhone(phone: object): Observable<object> {
    return this.httpClient.post<object>(`${environment.host}${this.phonesApiRoute}`, phone)
  }
}
