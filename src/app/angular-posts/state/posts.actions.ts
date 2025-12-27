import { createAction, props } from "@ngrx/store";
import { PostItem } from "./posts.model";


export const loadPosts = createAction('[POST] load posts');
export const loadPostsSuccess = createAction('[POST] load posts success', props<{posts: PostItem[]}>());
export const loadPostsFailure = createAction('[POST] load posts failure', props<{error: string}>());
