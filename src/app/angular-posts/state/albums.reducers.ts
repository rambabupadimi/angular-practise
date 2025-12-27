import { createReducer, on } from "@ngrx/store";
import { Album } from "./albums.model";
import { loadAlbums, loadAlbumsFailure, loadAlbumsSuccess } from "./albums.actions";
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';



export const albumFeatureKey = 'albums';

export interface AlbumState extends EntityState<Album> {
  loading: boolean,
  error: string | null;
}

export const albumEntityAdapter = createEntityAdapter<Album>();

const initState: AlbumState =  albumEntityAdapter.getInitialState({
  loading: false,
  error: null
})

export const albumReducer = createReducer(
  initState,
  on(loadAlbums, (state, action)=>{
    return {
      ...state,
      loading: true,
      error: null
    }
  }),
  on(loadAlbumsSuccess, (state,action)=> albumEntityAdapter.setAll(action.albums,{...state,loading: false})),
  on(loadAlbumsFailure,(state,action) => {
    return {
      ...state,
      loading:false,
      error: action.error
    }
  })

)
