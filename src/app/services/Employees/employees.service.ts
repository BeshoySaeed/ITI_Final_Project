import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Employee } from 'src/app/interface/employee';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  apiRoute = `${environment.host}/employees`;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<object> {
    return this.httpClient.get<object>(`${this.apiRoute}`).pipe(
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

  update(id: number, employee: Employee): Observable<object> {
    return this.httpClient.put<object>(`${this.apiRoute}/${id}`, employee).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  store(employee: Employee): Observable<object> {
    return this.httpClient.post<object>(`${this.apiRoute}`, employee).pipe(
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
