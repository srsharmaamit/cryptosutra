import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageDisplayService {
  openSnackBar(errorMessage: string, messageType: string): void {
    // Placeholder for proper message display for now just keeping alert
    alert(`${errorMessage} ${messageType}`);
  }
}
