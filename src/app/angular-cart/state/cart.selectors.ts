import { createFeatureSelector, createSelector } from "@ngrx/store";
import { cartFeatureKey, CartState } from "./cart.reducers";


const cartFeatureState = createFeatureSelector<CartState>(cartFeatureKey);

export const cartList = createSelector(cartFeatureState, (state)=> state.products);

export const cartTotal = createSelector(cartList, (state) => {

  let count = 0;
  state.forEach((item) => {
      if(item.quantity > 0) {
          count = count + (item.quantity * item.price);
      }
  })
  return count;
})
