import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { TodoModel } from '../model/todo.model';

export const loadTodos = createAction('[Todos] Load Todos');
export const loadTodosSuccess = createAction(
  '[Todos] Load Todos Success',
  props<{ todos: TodoModel[] }>()
);
export const loadTodosFailure = createAction(
  '[Todos] Load Todos Failure',
  props<{ error: string }>()
);
