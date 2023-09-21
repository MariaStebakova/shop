import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItemModel } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartObservableService {

  private cartUrl = 'http://localhost:3000/cart';

  constructor(private httpClient: HttpClient) { }

  getCartItems(): Observable<CartItemModel[]> {
    return this.httpClient.get<CartItemModel[]>(this.cartUrl);
  }

  createCartItem(cartItem: CartItemModel): Observable<CartItemModel> {
    return this.httpClient.post<CartItemModel>(this.cartUrl, cartItem);
  }

  updateCartItem(cartItem: CartItemModel): Observable<CartItemModel> {
    return this.httpClient.put<CartItemModel>(`${this.cartUrl}/${cartItem.id}`, cartItem);
  }

  deleteCartItem(cartItemId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.cartUrl}/${cartItemId}`);
  }
}
