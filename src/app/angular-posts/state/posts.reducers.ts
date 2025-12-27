import { createReducer, on } from "@ngrx/store";
import { PostItem } from "./posts.model";
import { loadPosts, loadPostsFailure, loadPostsSuccess } from "./posts.actions";


export const postsFeatureKey = 'posts';


export interface PostsState {
  posts: PostItem[],
  error: string | null;
  loading: boolean;
}

const initialState: PostsState = {
  posts: [],
  error: null,
  loading: false
}



export const postsReducer = createReducer(
  initialState,
  on(loadPosts,(state, actions) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(loadPostsSuccess,(state, action) => {
    return {
      ...state,
      loading: false,
      posts: action.posts,
      error: null
    }
  }),
  on(loadPostsFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      posts: [],
      error: action.error

    }
  })
)
