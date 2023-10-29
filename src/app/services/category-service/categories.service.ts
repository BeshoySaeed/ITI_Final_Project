import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { catchError, retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
  
  constructor(private httpClient: HttpClient) {}

  getAllCategory(): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}/categories`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }
  getCategoryByID(id: number): Observable<object>{
    return this.httpClient.get<object>(`${environment.host}/categories/${id}`, {headers: this.headers}).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  
  storeCategory(category: object): Observable<object> {
    return this.httpClient.post<object>(`${environment.host}/categories`, category, {headers: this.headers}).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  
  updateCategory(id:number, category: object): Observable<object> {
    return this.httpClient.put<object>(`${environment.host}/categories/${id}`, category, {headers: this.headers}).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }
  

  deleteCategoryById(id: number): Observable<object> {
    return this.httpClient.delete<object>(`${environment.host}/categories/${id}`, {headers: this.headers}).pipe(
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
    // Return an observable with a category-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
