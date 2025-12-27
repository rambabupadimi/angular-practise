import { createAction, props } from "@ngrx/store";


export const todoList = createAction('[TODO] call todos list');
export const todoListSuccess = createAction('[TODO] success todos list',props<{todoList: any}>());
export const todoListFailure = createAction('[TODO] failure todos list',props<{error: any}>());

export const addTodoItem = createAction('[TODO] add todos item',props<{todo: any}>());

export const updateTodoItem = createAction('[TODO] call todos list', props<{todo: any}>());

export const deleteTodoItem = createAction('[TODO] call todos list',props<{id: any}>());
