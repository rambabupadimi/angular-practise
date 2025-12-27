import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempService {

  tempData = new BehaviorSubject<any>(null);

  tempDataObservable$ = this.tempData.asObservable();

  setData(value: any) {
    this.tempData.next(value);
  }
}
