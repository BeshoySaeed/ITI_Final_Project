import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}/users`)
  }


  getUserByID(id: number): Observable<object>{
    return this.httpClient.get<object>(`${environment.host}/users/${id}`)
  }

  
  storeUser(user: object): Observable<object> {
    return this.httpClient.post<object>(`${environment.host}/users`, user)
  }

  
  updateUser(id:number, user: object): Observable<object> {
    return this.httpClient.put<object>(`${environment.host}/users/${id}`, user)
  }
  

  deleteUserById(id: number): Observable<object> {
    return this.httpClient.delete<object>(`${environment.host}/users/${id}`)
  }

  

}
