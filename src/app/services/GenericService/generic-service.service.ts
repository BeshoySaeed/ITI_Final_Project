import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GenericService {
  headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })

  private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
}

  // httpOptions;

  constructor(private http: HttpClient) {
    // this.httpOptions = {
    //   Headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //   })
    // }
  }

  getAll(route: string): Observable<any> {
    return this.http.get(`${environment.host}/${route}`, {headers: this.headers})
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getById(route: string, id: number): Observable<any> {
    return this.http.get(`${environment.host}/${route}/${id}`, {headers: this.headers})
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  post(route: string, object: any): Observable<any> {
    return this.http.post(`${environment.host}/${route}`, object, {headers: this.headers})
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  delete(route: string, id: number): Observable<any> {
    return this.http.delete(`${environment.host}/${route}/${id}`, {headers: this.headers})
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  update(route: string, id: number, object: any): Observable<any> {
    return this.http.put(`${environment.host}/${route}/${id}`, object, {headers: this.headers})
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  cart(route: string): Observable<any> {
    return this.http.get(`${environment.host}/${route}`, {headers: this.headers})
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  updateCart(route: string, object: any): Observable<any> {
    return this.http.put(`${environment.host}/${route}`, object, {headers: this.headers})
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  updateAdditionCart(route: string, id: number): Observable<any> {
    return this.http.delete(`${environment.host}/${route}/${id}`, {headers: this.headers})
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
}

