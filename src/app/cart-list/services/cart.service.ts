import { Injectable } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";

import { ProductModel } from "src/app/shared/models/product.model";
import { CartItemModel } from "../models/cart-item.model";

@Injectable({
  providedIn: "root"
})
export class CartService {

  cartListChanged$: Subject<void> = new Subject();
  private cartItems: CartItemModel[] = [];

  get totalCost(): number {
    let total = 0;
    this.cartItems.forEach(item => {
      total += item.product.price * item.quantity
    });

    return total;
  }

  get totalQuantity(): number {
    let total = 0;
    this.cartItems.forEach(item => {
      total += item.quantity
    });

    return total;
  }

  constructor() { }

  getCartProducts(): CartItemModel[] {
    return this.cartItems;
  }

  emptyCart(): void {
    this.cartItems = [];
    this.cartListChanged$.next();
  }

  addToCart(product: ProductModel): void {
    let cartItemIndex = this.cartItems.findIndex(item => item.product.id === product.id);
    if (cartItemIndex >= 0) {
      this.cartItems[cartItemIndex].quantity++;
    } else {
      this.cartItems.push(new CartItemModel(product, 1));
    }
    
    this.cartListChanged$.next();
  }

  deleteCartItem(item: CartItemModel): void {
    let index = this.cartItems.findIndex(cartItem => cartItem.product.id === item.product.id);
    if (index >= 0) {
      this.cartItems.splice(index, 1);
    }
  }

  increaseQuantity(item: CartItemModel): void {
    let index = this.cartItems.findIndex(cartItem => cartItem.product.id === item.product.id);
    if (index >= 0) {
      this.cartItems[index].quantity++;
    }
  }

  decreaseQuantity(item: CartItemModel): void {
    let index = this.cartItems.findIndex(cartItem => cartItem.product.id === item.product.id);
    if (index >= 0) {
      this.cartItems[index].quantity--;
      if (this.cartItems[index].quantity == 0) {
        this.deleteCartItem(this.cartItems[index]);
      }
    }
  }
}
