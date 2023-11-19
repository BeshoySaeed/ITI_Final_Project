import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderDataInterceptor implements HttpInterceptor {
  token: string | null;
  constructor() {
    this.token = localStorage.getItem('token');
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.token) {
      const modificationsHeader = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      return next.handle(modificationsHeader);
    }
    return next.handle(request);
  }
}
