import { createReducer, on } from "@ngrx/store";
import { CartItem } from "./cart.model";
import { addCartItem, deleteCartItem, loadCartItems } from "./cart.actions";


export const cartFeatureKey = 'cart';

export interface CartState {
  products: CartItem[],
  loading: boolean,
  error: string | null
}

export const initalState: CartState = {
  products: [{
    name: 'red',
    price: 100,
    productId: 1,
    quantity: 0
  },
  {
    name: 'green',
    price: 150,
    productId: 2,
    quantity: 0
  },
  {
    name: 'blue',
    price: 200,
    productId: 3,
    quantity: 0
  }],
  loading: false,
  error: null
}

export const cartReducer = createReducer(initalState,
  on(loadCartItems, (state, action) => {
    return {
      ...state,
      loading: false
    }
  }),
  on(addCartItem, (state, action) => {
    return {
      ...state,

      products: state.products.map((item) => {
        return item.productId === action.productId ? {...item, quantity : item.quantity + 1 } : item
      })
    }
  }),

  on(deleteCartItem,(state,action) => {
      return {
        ...state,
        products: state.products.map((item) => {
         return item.productId == action.productId ? {...item, quantity: ( item.quantity > 0 ? item.quantity - 1: item.quantity)}  : item
        })
      }
  })
)

