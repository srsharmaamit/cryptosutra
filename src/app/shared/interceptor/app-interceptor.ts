import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { catchError, map, tap, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { ErrorLogService } from '@shared/service/error-log.service';

let errorLogService: ErrorLogService;

export const appInterceptor: HttpInterceptorFn = (
  httpRequest: HttpRequest<unknown>,
  httpHandler: HttpHandlerFn
) => {
  errorLogService = inject(ErrorLogService);
  // set Authorization Header
  /*const tok = 'Basic ' + btoa('user' + ':' + environment.securityKey);
  httpRequest = httpRequest?.clone({
    headers: httpRequest.headers.set('Authorization', `${tok}`)
  });*/

  // set Access Control Origin Headers
  /*httpRequest = httpRequest.clone({headers: httpRequest.headers.set('Access-Control-Allow-Origin', '*')});
  httpRequest = httpRequest.clone({
    headers: httpRequest.headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  });*/

  return httpHandler(httpRequest).pipe(
    map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        handleResponse(event);
      }
      return event;
    }),
    catchError(handleError)
  );
};

const handleError = (error: HttpErrorResponse) => {
  let errorMessage: string;
  if (error.status === 0) {
    errorMessage = `Client Side or Network Error Occurred ${JSON.stringify(
      error.error
    )}`;
  } else {
    errorMessage = `Server Side error with status: ${error.status}, with message: ${error.message}`;
  }
  errorLogService.logError(error);
  return throwError(() => new Error(errorMessage));
};

const handleResponse = (event: HttpResponse<any>) => {
  console.log(event);
};
