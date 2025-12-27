import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { loadTodosFailure, loadTodosSuccess } from '../actions/todos.actions';


@Injectable()
export class TodosEffects {

  // loadTodoss$ = createEffect(() => {
  //   return this.actions$.pipe(

  //     ofType(TodosActions),
  //     concatMap(() =>
  //       /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //       EMPTY.pipe(
  //         map(data => loadTodosSuccess({ data })),
  //         catchError(error => of(loadTodosFailure({ error }))))
  //     )
  //   );
  // });


  constructor(private actions$: Actions) {}
}
