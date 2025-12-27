import { createAction } from "@ngrx/store";

export const getCounter = createAction('[Counter] Get Counter');
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
