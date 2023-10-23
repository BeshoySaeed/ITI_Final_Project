import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceEmailsService {
  emailsApiRoute = 'customer-service-emails';

  constructor(private httpClient: HttpClient) {}

  getAllEmails(): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}${this.emailsApiRoute}`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  getAllActiveEmails(): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}customer-service-active-emails`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  getEmailById(id: number): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}${this.emailsApiRoute}/${id}`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  deleteEmailById(id: number): Observable<object> {
    return this.httpClient.delete<object>(`${environment.host}${this.emailsApiRoute}/${id}`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  updateEmail(id:number, email: object): Observable<object> {
    return this.httpClient.put<object>(`${environment.host}${this.emailsApiRoute}/${id}`, email).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  storeEmail(email: object): Observable<object> {
    return this.httpClient.post<object>(`${environment.host}${this.emailsApiRoute}`, email).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

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
}
