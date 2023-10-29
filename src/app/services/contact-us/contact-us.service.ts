import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Contact } from '../../interface/contact-us';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  constructor(private httpClient: HttpClient) { }

  getAllContacts(): Observable<Contact> {
    return this.httpClient.get<Contact>(`${environment.host}/contact-us`, {headers: this.headers})
  }

  insertContacts(data: any){
    return this.httpClient.post<Contact>(`${environment.host}/contact-us`, data)
  }

}