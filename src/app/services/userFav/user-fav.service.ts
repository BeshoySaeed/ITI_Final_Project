import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, retryWhen, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserFavService {

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

  constructor(private http: HttpClient) { }

  getAll(userId: number) : Observable<any>
  {
    return this.http.get<any>(`${environment.host}/user-favourites/${userId}`)
    // .pipe(
    //   retry(2),
    //   catchError(this.handleError)
    // )
  }

  add( object: object ):Observable<object>
  {
   return this.http.post<object>(`${environment.host}/user-favourites`, object)
    // .pipe(
    //   retry(2),
    //   catchError(this.handleError)
    // )
  }

  delete(id: number)
  {
    return this.http.delete(`${environment.host}/user-favourites/${id}`)
    // .pipe(
    //   retry(2),
    //   catchError(this.handleError)
    // )
  }
}
