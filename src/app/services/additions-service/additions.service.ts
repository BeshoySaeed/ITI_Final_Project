import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { catchError, retry, throwError } from 'rxjs';
import { Addition } from 'src/app/interface/addition';
@Injectable({
  providedIn: 'root',
})
export class AdditionsService {
  constructor(private httpClient: HttpClient) {}

  insertAddition(data: any): Observable<object> {
    return this.httpClient.post<object>(`${environment.host}/addition/`, data);
  }

  getAllAdditionId(id: any): Observable<any> {
    return this.httpClient.get<any>(`${environment.host}/addition/${id}`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  getAllAddition(): Observable<any> {
    return this.httpClient.get<any>(`${environment.host}/addition`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  storeAddition(addition: object): Observable<object> {
    return this.httpClient
      .post<object>(`${environment.host}/addition/`, addition)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  updateAddition(id: number, addition: object): Observable<object> {
    return this.httpClient
      .put<object>(`${environment.host}/addition/${id}`, addition)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  deleteAdditionById(id: number): Observable<any> {
    return this.httpClient
      .delete<object>(`${environment.host}/addition/${id}`)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
