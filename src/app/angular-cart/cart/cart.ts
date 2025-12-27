import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartList, cartTotal } from '../state/cart.selectors';
import { CommonModule } from '@angular/common';
import { addCartItem, deleteCartItem, loadCartItems } from '../state/cart.actions';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart implements OnInit {

  cartList$ =  this.store.select(cartList);
  cartTotal$ = this.store.select(cartTotal);

  constructor(private readonly store: Store){

  }

  ngOnInit(): void {
    this.store.dispatch(loadCartItems());
  }

  addToCart(productId: number) {
    this.store.dispatch(addCartItem({productId: productId}))
  }

  deleteFromCart(productId: number) {
    this.store.dispatch(deleteCartItem({productId: productId}));
  }

}
