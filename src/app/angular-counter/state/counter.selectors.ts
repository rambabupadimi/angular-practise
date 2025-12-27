import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState, counterFeaturekey } from "./counter.reducers";

const counterFeatureState = createFeatureSelector<CounterState>(counterFeaturekey);


export const counter = createSelector(counterFeatureState,(state: CounterState) => state.counter)
