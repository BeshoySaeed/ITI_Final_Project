import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { catchError, retry, throwError } from 'rxjs';
import { Addition } from 'src/app/interface/addition';
@Injectable({
  providedIn: 'root'
})
export class AdditionsService {
  constructor(private httpClient: HttpClient) {}

  insertAddition(data: any): Observable<object>{
    return this.httpClient.post<object>(`${environment.host}/addition/`,data);
  }

  getAllAddition(): Observable<any> {
    return this.httpClient.get<any>(`${environment.host}/addition`).pipe(

      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }
  
  getAdditionByID(id: number): Observable<object>{
    return this.httpClient.get<object>(`${environment.host}/addition/${id}`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }


  storeAddition(addition:object): Observable<object> {
    return this.httpClient.post<object>(`${environment.host}/addition`, addition).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }


  updateAddition(id:number, addition:object): Observable<object> {
    return this.httpClient.put<object>(`${environment.host}/addition/${id}`, addition).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }


  deleteAdditionById(id: number): Observable<object> {
    return this.httpClient.delete<object>(`${environment.host}/addition/${id}`).pipe(
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
    // Return an observable with a Addition-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
    
}
