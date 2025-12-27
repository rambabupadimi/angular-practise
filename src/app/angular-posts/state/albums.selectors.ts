import { createFeatureSelector, createSelector } from "@ngrx/store";
import { albumEntityAdapter, albumFeatureKey, AlbumState } from "./albums.reducers";

export const albumFeatureState = createFeatureSelector<AlbumState>(albumFeatureKey);
const { selectAll, selectEntities } = albumEntityAdapter.getSelectors();

export const alubms = createSelector(albumFeatureState,selectAll);
export const alubmEnities = createSelector(albumFeatureState,selectEntities);
export const loading = createSelector(albumFeatureState,(state) => state.loading);
export const error = createSelector(albumFeatureState,(state) => state.error);
