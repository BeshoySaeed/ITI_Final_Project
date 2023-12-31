import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  catchError,
  retry,
  throwError,
} from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiRoute = `${environment.host}`;
  headers = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  });

  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  store(user: object): Observable<object> {
    return this.httpClient
      .post<object>(`${environment.host}/register`, user)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  login(user: object): Observable<object> {
    return this.httpClient.post<object>(`${environment.host}/login`, user).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }
  resetPassword(data: object): Observable<object> {
    return this.httpClient
      .post<object>(`${environment.host}/change-password`, data)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  sendResetPasswordLink(data: object) {
    return this.httpClient.post(
      'http://127.0.0.1:8000/api/forget-password',
      data
    );
  }
  logout(data: object): Observable<object> {
    return this.httpClient
      .post<object>(`${environment.host}/logout`, data, {
        headers: this.headers,
      })
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  profile(data: object): Observable<object> {
    return this.httpClient.post<object>(`${environment.host}/profile`, data, {headers: this.headers}).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
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
