import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";


@Injectable({providedIn:'root'})
export class PiTodoService {

  getTodoList() {
    return of(
      [
        {
          id:1,
          title:'todo1',
          completed: false
        },
        {
          id:2,
          title:'todo2',
          completed:false
        }
      ]
    ).pipe(delay(2000))
  }
}
