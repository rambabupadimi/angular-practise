import { createFeature, createReducer, on } from '@ngrx/store';
import { TodoItem } from './todo.model';
import { addTodo, deleteTodo, loadTodos, updateTodo } from './todo.actions';

export const todoFeatureKey = 'todos';

export interface TodoState {
  todos: TodoItem[];
  error: string;
  loading: boolean;
}

const initialState: TodoState = {
  todos: [{ id: Date.now(), title: 'good', completed: false }],
  error: '',
  loading: false,
};

export const todoReducer = createReducer(
  initialState,
  on(loadTodos, (state, action) => {
    return { ...state, todos: state.todos, loading: false, error: '' };
  }),
  on(addTodo, (state, action: any) => {
       const todoList = [...state.todos];
       todoList.push(action.todo)
    return {



   ...state,
      todos: todoList,
      error: '',
      loading: false,
    };


     //   ...state,
    //   todos: [
    //     ...state.todos,
    //     { id: action.todo.id, title: action.todo.title, completed: false },
    //   ],
    //   error: '',
    //   loading: false,
    // };
  }),
  on(updateTodo, (state, action: any) => {
    return {
      ...state,
      todos: state.todos.map((item) => {
        return item.id === action.id
          ? { ...item, completed: action.completed }
          : item;
      }),
      error: '',
      loading: false,
    };
  }),
  on(deleteTodo, (state, action: any) => {
    return {
      ...state,
      todos: state.todos.filter((item) => item.id != action.id),
      error: '',
      loading: false,
    };
  })
);
