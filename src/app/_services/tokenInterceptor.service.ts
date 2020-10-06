import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(req, next) {
    const tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authenticationService.getJwtToken()}`
      }
    });

    return next.handle(tokenizedRequest);
  }

}
