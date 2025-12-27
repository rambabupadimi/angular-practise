import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PiTodoService } from "./pi-todo.service";
import { todoList, todoListFailure, todoListSuccess } from "./pi-todo.actions";
import { catchError, map, of, switchMap } from "rxjs";


@Injectable()
export class PiTodoEffect {

  constructor(private actions$: Actions, private piService: PiTodoService){}

  todoList$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(todoList),
      switchMap(()=> this.piService.getTodoList().pipe(
        map(response => todoListSuccess({todoList: response})),
        catchError((error) => of(todoListFailure({error:'error'})))
      ))
    )
  })

}
