import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class Errorinterceptor implements HttpInterceptor {
  constructor(private router: Router, private toastr: ToastrService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error) {
          switch (error.status) {
            case 400:
              if (error.error.errors) {
                //Validation errors
                const modalStateErrors: any = [];
                for (const i in error.error.errors) {
                  if (error.error.errors[i]) {
                    modalStateErrors.push(error.error.errors[i]);
                  }
                }
              } else {
                //Bad request
                this.toastr.error(error.statusText, error.status);
              }
              break;
            case 401: // Unauthorized
              this.toastr.error(error.error, error.status);
              break;
            case 404: // Not found
              this.router.navigateByUrl('/not-found');
              break;
            case 500: // Server error
              const navigationExtras: NavigationExtras = {
                state: { error: error.error },
              };
              this.router.navigateByUrl('/server-error', navigationExtras);
              break;
            default:
              this.toastr.error('Desilo se nešto neočekivano!');
              console.log(error);
              break;
          }
        }
        return throwError(error);
      })
    );
  }
}
