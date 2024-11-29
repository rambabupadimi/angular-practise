import { Injectable } from '@angular/core';
import { LoggerServiceService } from './logger-service.service';

@Injectable()
export class ClientLoggerService extends LoggerServiceService {

  override log(message: string) {
    console.log(`Client logger service ${this.id} log: ${message}`);
  }

  clientLog() {
    console.log('client log');
  }
}
