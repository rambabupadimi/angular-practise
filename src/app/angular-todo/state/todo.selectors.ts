import { createFeatureSelector, createSelector } from '@ngrx/store';
import { todoFeatureKey, TodoState } from './todo.reducers';

const todoState = createFeatureSelector<TodoState>(todoFeatureKey);

export const todosListPending = createSelector(todoState, (state: TodoState) =>
  state.todos.filter((item: any) => !item.completed)
);

export const todosListCompleted = createSelector(
  todoState,
  (state: TodoState) => state.todos.filter((item: any) => item.completed)
);

export const todoLoading = createSelector(
  todoState,
  (state: TodoState) => state.loading
);

export const todoError = createSelector(
  todoState,
  (state: TodoState) => state.error
);
