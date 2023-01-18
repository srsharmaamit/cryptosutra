import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageDisplayService } from '@shared/service/message-display.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorLogService {
  constructor(private errorDisplayService: MessageDisplayService) {}

  logError(error: any): void {
    const { message, status } = error;
    const errorDate = new Date().toISOString();

    if (status && status >= 400 && status < 500) {
      console.error(errorDate, `Client side error:`);
    } else if (status && status >= 500 && status < 600) {
      console.error(errorDate, `Server side error:`);
    }
    if (error && error instanceof HttpErrorResponse) {
      console.error(
        errorDate,
        'There was an HTTP error.',
        message,
        'Status code:',
        (error as HttpErrorResponse).status
      );
    } else if (error && error instanceof TypeError) {
      console.error(errorDate, 'There was a Type error.', message);
    } else if (error && error instanceof Error) {
      console.error(errorDate, 'There was a general error.', message);
    } else {
      console.error(errorDate, 'Unknown Error!', error);
    }

    this.errorDisplayService.openSnackBar(message, 'errorMessageDisplay');
  }
}
