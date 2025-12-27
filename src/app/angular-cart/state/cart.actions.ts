import { createAction, props } from "@ngrx/store";
import { CartItem } from "./cart.model";

export const loadCartItems = createAction('[CART] load cart items');
export const addCartItem = createAction('[CART] add cart items',props<{productId: number}>());
export const updateCartItem = createAction('[CART] update cart items',props<{productId: number}>());
export const deleteCartItem = createAction('[CART] delete cart items',props<{productId: number}>());
