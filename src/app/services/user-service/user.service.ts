import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  headers = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  });

  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<object> {
    return this.httpClient
      .get<object>(`${environment.host}/users`, { headers: this.headers })
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  getUserByID(id: any): Observable<any> {
    return this.httpClient
      .get<object>(`${environment.host}/users/${id}`, { headers: this.headers })
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  storeUser(user: object): Observable<object> {
    return this.httpClient
      .post<object>(`${environment.host}/users`, user, {
        headers: this.headers,
      })
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  setSubIdValue(id: any, subscriptionData: object): Observable<object> {
    return this.httpClient
      .put<object>(`${environment.host}/subs/${id}/subID`, subscriptionData, {
        headers: this.headers,
      })
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  updateUser(id: any, user: object): Observable<object> {
    return this.httpClient
      .patch<object>(`${environment.host}/users/${id}`, user, {
        headers: this.headers,
      })
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  deleteUserById(id: number): Observable<object> {
    return this.httpClient
      .delete<object>(`${environment.host}/users/${id}`, {
        headers: this.headers,
      })
      .pipe(
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
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
