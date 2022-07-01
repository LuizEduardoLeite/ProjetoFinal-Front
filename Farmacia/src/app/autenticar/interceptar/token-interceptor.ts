import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { AutenticarService } from '../services/autenticar.service';


@Injectable()
export class TokenInTercept implements HttpInterceptor {

  constructor
  (
    private router:Router,
    private authService:AutenticarService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = localStorage.getItem('token');

    if(token == null) {
      token = ''      
    }

    const req = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })

    return next.handle(req).pipe(
      catchError(error =>{
        if(error instanceof HttpErrorResponse){
          if(error.status ==403){
            this.router.navigateByUrl('/login')
          }
        }
        return of(error)
      })
    )
  }
}
