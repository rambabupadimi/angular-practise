import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class AngularServiceService {

 count =0;
  constructor() { }

  increment(){
    this.count  = this.count +1;
  }

  currentValue(){
    return this.count;
  }
}
