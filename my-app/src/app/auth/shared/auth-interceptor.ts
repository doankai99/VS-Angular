import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the token from localStorage
    const token = localStorage.getItem('accessToken');

    // Clone the request and add the access_token header
    if (token) {
      const clonedRequest = request.clone({
        setHeaders: { 'access_token': `bearer ${token}`, },
      });
      return next.handle(clonedRequest);
    } else {
      return next.handle(request);
    }
  }
}
