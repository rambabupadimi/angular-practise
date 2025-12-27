import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface UsersState {
  users: any[];
  loading: boolean;
  error: any | null;
}

export const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => ({ ...state, loading: true, error: null })),
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
