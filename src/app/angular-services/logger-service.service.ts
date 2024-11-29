import { Injectable } from '@angular/core';

@Injectable()
export class LoggerServiceService {
  protected id = 0;

  constructor() { 
    this.id = Math.random() * 100;
  }

  log(message:string) {
    console.log('message is --'+message+' id is '+this.id);
  }
}
