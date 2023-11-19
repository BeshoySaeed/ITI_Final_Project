import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Bartner } from '../../interface/partners';
@Injectable({
  providedIn: 'root',
})
export class PartnerService {
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

  constructor(private httpClient: HttpClient) {}

  getAllBartners(): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}/partners`);
  }

  insertBartners(data: any) {
    return this.httpClient.post<Bartner>(`${environment.host}/partners`, data);
  }
}
