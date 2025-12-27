import { createAction, props } from "@ngrx/store";
import { Album } from "./albums.model";

export const loadAlbums = createAction("[ALBUMS] load albums");
export const loadAlbumsSuccess = createAction("[ALBUMS] load albums success",props<{albums: Album[]}>());
export const loadAlbumsFailure = createAction("[ALBUMS] load albums failure", props<{error: string}>());
