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
export class CategoriesService {
  constructor(private httpClient: HttpClient) {}

  getAllCategory(): Observable<any> {
    return this.httpClient.get<any>(`${environment.host}/categories`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }
  getCategoryByID(id: number): Observable<any> {
    return this.httpClient
      .get<any>(`${environment.host}/categories/${id}`)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  storeCategory(category: object): Observable<object> {
    return this.httpClient
      .post<object>(`${environment.host}/categories`, category)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  updateCategory(id: number, category: object): Observable<object> {
    return this.httpClient
      .put<object>(`${environment.host}/categories/${id}`, category)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  deleteCategoryById(id: number): Observable<object> {
    return this.httpClient
      .delete<object>(`${environment.host}/categories/${id}`)
      .pipe(retry(3), catchError(this.handleError));
  }

  getProductsByCategory(categoryId: string) {
    return this.httpClient.get(
      `${environment.host}/item?category=${categoryId}`
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
