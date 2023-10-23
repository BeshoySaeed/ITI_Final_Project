import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceEmailsService {
  emailsApiRoute = 'customer-service-emails'

  constructor(private httpClient: HttpClient) { }

  getAllEmails(): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}${this.emailsApiRoute}`)
  }

  getAllActiveEmails(): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}customer-service-active-emails`)
  }

  getEmailById(id: number): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}${this.emailsApiRoute}/${id}`)
  }

  deleteEmailById(id: number): Observable<object> {
    return this.httpClient.delete<object>(`${environment.host}${this.emailsApiRoute}/${id}`)
  }

  updateEmail(id:number, email: object): Observable<object> {
    return this.httpClient.put<object>(`${environment.host}${this.emailsApiRoute}/${id}`, email)
  }

  storeEmail(email: object): Observable<object> {
    return this.httpClient.post<object>(`${environment.host}${this.emailsApiRoute}`, email)
  }
}
