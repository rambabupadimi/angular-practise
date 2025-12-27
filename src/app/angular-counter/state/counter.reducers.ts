import { createReducer, on } from "@ngrx/store";
import { decrement, getCounter, increment, reset } from "./counter.actions";


export const counterFeaturekey = 'counter';

export interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0
}

export const counterReducer = createReducer(
  initialState,
  on(getCounter, (state, action) => {
    return {
      ...state
    }
  }),
  on(increment, ((state, action) => {
    return {
      ...state,
      counter: state.counter + 1
    }
  })),
  on(decrement, (state,action) => {
    return {
      ...state,
      counter: state.counter - 1
    }
  }),
  on(reset, (state, action) => {
    return {
      ...state,
      counter: 0
    }
  })

)
