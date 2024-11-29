import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempService {

  constructor() { }

   observable = new Observable(sub =>{
   // setInterval(()=>{
       sub.next(Math.random());
   // },2000);
  });

  subject = new Subject();
  
}
