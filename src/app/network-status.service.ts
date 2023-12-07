import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkStatusService {

  statusChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    window.addEventListener('online', () => this.updateNetworkStatus());
    window.addEventListener('offline', () => this.updateNetworkStatus());
  }

  private updateNetworkStatus() {
    this.statusChange.emit(navigator.onLine);
  }
}
