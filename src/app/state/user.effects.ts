import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '../users.service';
import * as UserActions from './user.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class UserEffects {
  // loadUsers$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(UserActions.loadUsers),
  //     mergeMap(() =>
  //       this.usersService.getUsersList().pipe(
  //         map((users) => UserActions.loadUsersSuccess({ users })),
  //         catchError((error) => of(UserActions.loadUsersFailure({ error })))
  //       )
  //     )
  //   )
  // );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
