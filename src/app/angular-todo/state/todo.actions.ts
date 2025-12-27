import { createActionGroup, createAction, props } from '@ngrx/store';
import { TodoItem } from './todo.model';

export const loadTodos = createAction('[TODO] loading todos');
export const addTodo = createAction(
  '[TODO] add todo',
  props<{ todo: TodoItem }>()
);
export const updateTodo = createAction(
  '[TODO] update todo',
  props<{ id: any, completed: boolean }>()
);
export const deleteTodo = createAction(
  '[TODO] delete todo',
  props<{ id: any }>()
);
