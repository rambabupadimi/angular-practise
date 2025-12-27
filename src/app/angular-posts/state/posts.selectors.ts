import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postsFeatureKey, PostsState } from "./posts.reducers";

const postsState = createFeatureSelector<PostsState>(postsFeatureKey);

export const postsList = createSelector(postsState, (state) => state.posts)
export const postsLoading = createSelector(postsState, (state) => state.loading);
export const postsError = createSelector(postsState, (state) => state.error);
