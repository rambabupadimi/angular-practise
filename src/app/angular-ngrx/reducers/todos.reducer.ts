import { createFeature, createReducer, on } from '@ngrx/store';
import { loadTodos, loadTodosFailure, loadTodosSuccess } from '../actions/todos.actions';
import { TodoModel } from '../model/todo.model';

export const todosFeatureKey = 'todos';

export interface State {
  todos: TodoModel[];
  loading: boolean;
  error: string | null;
}

export const initialState: State = {
  todos: [{ id: 1, title: 'Sample Todo', completed: false },  { id: 2, title: 'Another Todo', completed: true }],
  loading: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(loadTodos, state => ({ ...state, loading: false, error: null })),
);

export const todosFeature = createFeature({
  name: todosFeatureKey,
  reducer,
});

