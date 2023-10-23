import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserPhoneService {

  constructor(private httpClient: HttpClient) {}

  getAllPhones(): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}/userPhone`)
  }


  getPhoneByID(id: number): Observable<object>{
    return this.httpClient.get<object>(`${environment.host}/userPhone/${id}`)
  }
  

  storePhone(phone: object): Observable<object> {
    return this.httpClient.post<object>(`${environment.host}/userPhone`, phone)
  }


  updatePhone(id:number, phone: object): Observable<object> {
    return this.httpClient.put<object>(`${environment.host}/userPhone/${id}`, phone)
  }
  

  deletePhoneById(id: number): Observable<object> {
    return this.httpClient.delete<object>(`${environment.host}/userPhone/${id}`)
  }
  
}
