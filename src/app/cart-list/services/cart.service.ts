import { Injectable } from "@angular/core";
import { Observable, forkJoin, map, switchMap } from "rxjs";

import { CartItemModel, CartObservableService } from "..";
import { ProductModel } from "src/app/shared";

@Injectable({
  providedIn: "root"
})
export class CartService {

  constructor(
    private cartObservableService: CartObservableService
  ) { }

  getProducts(): Observable<CartItemModel[]> {
    return this.cartObservableService.getCartItems();
  }

  removeAllProducts(): Observable<void[]> {
    return this.getProducts().pipe(
      map(items => items.map(item => item.id)),
      switchMap(ids => {
        return forkJoin(ids.map(id => this.cartObservableService.deleteCartItem(id)))
      })
    );
  }

  addProduct(product: ProductModel): Observable<CartItemModel> {
    return this.cartObservableService.getCartItems().pipe(
      switchMap((cartItems: CartItemModel[]) => {
        let cartItemIndex = cartItems.findIndex(item => item.product?.id === product.id);
        if (cartItemIndex >= 0) {
          return this.increaseQuantity(cartItems[cartItemIndex]);
        } else {
          const newId = cartItems.length > 0 ? cartItems[cartItems.length - 1].id + 1 : 1;
          return this.cartObservableService.createCartItem(new CartItemModel(newId, product, 1))
        }
      })
    )
  }

  removeProduct(item: CartItemModel): Observable<void> {
    return this.cartObservableService.deleteCartItem(item.id);
  }

  increaseQuantity(item: CartItemModel): Observable<CartItemModel> {
    const newQuantity = item.quantity + 1;
    return this.cartObservableService.updateCartItem({...item, quantity: newQuantity});
  }

  decreaseQuantity(item: CartItemModel): Observable<CartItemModel | void> {
    const newQuantity = item.quantity - 1;
    if (newQuantity <= 0) {
      return this.removeProduct(item);
    } else {
      return this.cartObservableService.updateCartItem({...item, quantity: newQuantity});
    }
  }

  totalCost(cartItems: CartItemModel[]): number {
    let total = 0;
    cartItems.forEach(item => {
      total += (item.product.price ?? 0) * item.quantity
    });

    return total;
  }

  totalQuantity(cartItems: CartItemModel[]): number {
    let total = 0;
    cartItems.forEach(item => {
      total += item.quantity
    });

    return total;
  }

  isEmptyCart(cartItems: CartItemModel[]): boolean {
    return cartItems.length <= 0;
  }
}
