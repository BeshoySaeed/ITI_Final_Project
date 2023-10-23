import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserAddressService {

  constructor(private httpClient: HttpClient) {}

  getAllAddresses(): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}/userAddress`)
  }


  getAddressByID(id: number): Observable<object>{
    return this.httpClient.get<object>(`${environment.host}/userAddress/${id}`)
  }


  storeAddress(address: object): Observable<object> {
    return this.httpClient.post<object>(`${environment.host}/userAddress`, address)
  }


  updateAddress(id:number, address: object): Observable<object> {
    return this.httpClient.put<object>(`${environment.host}/userAddress/${id}`, address)
  }
  

  deleteAddressById(id: number): Observable<object> {
    return this.httpClient.delete<object>(`${environment.host}/userAddress/${id}`)
  }

  
}
