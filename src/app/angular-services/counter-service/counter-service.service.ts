import { Injectable } from '@angular/core';
import { AngularServiceService } from '../angular-service.service';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService extends AngularServiceService {


  override count =0;
  constructor() { 
    super()
  }

  override increment(){
    this.count  = this.count +10;
  }

  override currentValue(){
    return this.count;
  }

  highIncrement() {
    this.count  = this.count +50;
  }
}
