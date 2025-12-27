import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodos from '../reducers/todos.reducer';

export const selectTodosState = createFeatureSelector<fromTodos.State>(
  fromTodos.todosFeatureKey
);

export const selectAllTodos = createSelector(
  selectTodosState,
  (state: fromTodos.State) => state.todos
);

export const selectTodosLoading = createSelector(
  selectTodosState,
  (state: fromTodos.State) => state.loading
);

export const selectTodosError = createSelector(
  selectTodosState,
  (state: fromTodos.State) => state.error
);
