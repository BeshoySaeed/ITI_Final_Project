import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { SubscriptionPlan } from 'src/app/interface/subscription-plan';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {
  apiRoute = `${environment.host}/subscription-plans`;
  headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
  
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<object> {
    return this.httpClient.get<object>(`${this.apiRoute}`, {headers: this.headers}).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }
  
  getAllActive(): Observable<object> {
    return this.httpClient.get<object>(`${this.apiRoute}-active`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  getById(id: number): Observable<object> {
    return this.httpClient.get<object>(`${this.apiRoute}/${id}`, {headers: this.headers}).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  delete(id: number): Observable<object> {
    return this.httpClient.delete<object>(`${this.apiRoute}/${id}`, {headers: this.headers}).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  update(id:number, subscribe: SubscriptionPlan): Observable<object> {
    return this.httpClient.put<object>(`${this.apiRoute}/${id}`, subscribe, {headers: this.headers}).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  store(subscribe: SubscriptionPlan): Observable<object> {
    return this.httpClient.post<object>(`${this.apiRoute}`, subscribe, {headers: this.headers}).pipe(
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
