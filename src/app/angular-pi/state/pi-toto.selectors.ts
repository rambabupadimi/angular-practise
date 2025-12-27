import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PiTodoState, todoPiFeatureKey } from "./pi-todo.reducers";


const todoPiFeatureState = createFeatureSelector<PiTodoState>(todoPiFeatureKey);

export const todoPiState = createSelector(todoPiFeatureState,(state) => state.todos)
