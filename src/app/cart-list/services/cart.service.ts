import { Injectable } from "@angular/core";

import { ProductModel } from "src/app/shared/models/product.model";
import { CartItemModel } from "../models/cart-item.model";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CartService {

  cartItems$$: BehaviorSubject<CartItemModel[]> = new BehaviorSubject<CartItemModel[]>([]);
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

  get isEmptyCart(): boolean {
    return this.cartItems.length <= 0;
  }

  constructor() { }

  getProducts(): Observable<CartItemModel[]> {
    return this.cartItems$$.asObservable();
  }

  removeAllProducts(): void {
    this.cartItems = [];
    this.cartItems$$.next(this.cartItems);
  }

  addProduct(product: ProductModel): void {
    let cartItemIndex = this.cartItems.findIndex(item => item.product.id === product.id);
    if (cartItemIndex >= 0) {
      this.cartItems[cartItemIndex] = {...this.cartItems[cartItemIndex], quantity: this.cartItems[cartItemIndex].quantity + 1 }
    } else {
      this.cartItems.push(new CartItemModel(product, 1));
    }
    
    this.cartItems$$.next(this.cartItems);
  }

  removeProduct(item: CartItemModel): void {
    let index = this.cartItems.findIndex(cartItem => cartItem.product.id === item.product.id);
    if (index >= 0) {
      this.cartItems.splice(index, 1);
    }

    this.cartItems$$.next(this.cartItems);
  }

  increaseQuantity(item: CartItemModel): void {
    let index = this.cartItems.findIndex(cartItem => cartItem.product.id === item.product.id);
    if (index >= 0) {
      this.cartItems[index] = {...this.cartItems[index], quantity: this.cartItems[index].quantity + 1 }
    }

    this.cartItems$$.next(this.cartItems);
  }

  decreaseQuantity(item: CartItemModel): void {
    let index = this.cartItems.findIndex(cartItem => cartItem.product.id === item.product.id);
    if (index >= 0) {
      this.cartItems[index] = {...this.cartItems[index], quantity: this.cartItems[index].quantity - 1 }
      if (this.cartItems[index].quantity == 0) {
        this.cartItems.splice(index, 1);
      }
    }

    this.cartItems$$.next(this.cartItems);
  }
}
