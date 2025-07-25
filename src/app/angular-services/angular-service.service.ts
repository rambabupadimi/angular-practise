import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class AngularServiceService {

 userClickObject = new Subject<number>();

 userClickObject$ = this.userClickObject.asObservable();

 clickUser(userId: number) {
  this.userClickObject.next(userId);
 }


 addUserBehaviorSubject = new BehaviorSubject<number>(1);
  addUserBehaviorSubject$ = this.addUserBehaviorSubject.asObservable();

  addUser(userId:any) {
    this.userClickObject.next(userId);
  }


 count =0;
  constructor() { }

  increment(){
    this.count  = this.count +1;
  }

  currentValue(){
    return this.count;
  }
}
