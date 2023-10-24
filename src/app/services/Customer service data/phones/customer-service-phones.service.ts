import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CustomerServicePhonesService {
  apiRoute = `${environment.host}/customer-service-phones`

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<object> {
    return this.httpClient.get<object>(`${this.apiRoute}`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  getAllActive(): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}/customer-service-active-phones`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  getById(id: number): Observable<object> {
    return this.httpClient.get<object>(`${this.apiRoute}/${id}`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  delete(id: number): Observable<object> {
    return this.httpClient.delete<object>(`${this.apiRoute}/${id}`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  update(id:number, phone: object): Observable<object> {
    return this.httpClient.put<object>(`${this.apiRoute}/${id}`, phone).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  store(phone: object): Observable<object> {
    return this.httpClient.post<object>(`${this.apiRoute}`, phone).pipe(
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
