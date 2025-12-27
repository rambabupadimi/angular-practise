import { createReducer, on } from "@ngrx/store";
import { addTodoItem, deleteTodoItem, todoList, todoListFailure, todoListSuccess, updateTodoItem } from "./pi-todo.actions";


export const todoPiFeatureKey = 'piTodo';

export interface PiTodoState {
  todos:any[],
  loading: boolean,
  error:string
}

export const initialState : PiTodoState = {
  todos : [],
  loading: false,
  error: ''
}

export const piTodoReducer = createReducer(
  initialState,
  on(todoList,(state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(todoListSuccess, (state, action) => {
    return {
      ...state,
      todos: action.todoList
    }
  }),
    on(todoListFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(addTodoItem,(state, action) => {
    return {
      ...state,
      todos: [...state.todos, action.todo]
    }
  }),
  on(updateTodoItem,(state,action) => {
    return {
      ...state,
      todos: state.todos.map((item) => item.id == action.todo.id ? {...item,  completed: true}: item)
    }
  }),
  on(deleteTodoItem,(state,action) => {
    return {
      ...state,
      todos: state.todos.filter((item) => item.id !== action.id)
    }
  })

)
