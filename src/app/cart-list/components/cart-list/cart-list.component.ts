import { Component, OnDestroy, OnInit } from "@angular/core";

import { CartService } from "../../services/cart.service";
import { Observable, Subscription, tap } from "rxjs";
import { CartItemModel } from "../../models/cart-item.model";

@Component({
  selector: "app-cart-list",
  templateUrl: "./cart-list.component.html",
  styleUrls: ["./cart-list.component.css"]
})
export class CartListComponent implements OnInit, OnDestroy {

  cartProducts$!: Observable<CartItemModel[]>;
  totalCost!: number;
  totalQuantity!: number;
  isEmptyCart!: boolean;
  private cartListChangedSubscription!: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartProducts$ = this.cartService.getProducts();

    this.cartListChangedSubscription = this.cartProducts$.pipe(
      tap(() => {
        this.refreshCartDetails();
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.cartListChangedSubscription.unsubscribe();
  }

  trackByProducts(index: number, item: CartItemModel): number {
    return item.product.id;
  }

  onEmptyCart(): void {
    this.cartService.removeAllProducts();
  }

  onDeleteItem(item: CartItemModel): void {
    this.cartService.removeProduct(item);
  }

  onQuantityIncrease(item: CartItemModel): void {
    this.cartService.increaseQuantity(item);
  }

  onQuantityDecrease(item: CartItemModel): void {
    this.cartService.decreaseQuantity(item);
  }

  private refreshCartDetails(): void {
    this.totalCost = this.cartService.totalCost;
    this.totalQuantity = this.cartService.totalQuantity;
    this.isEmptyCart = this.cartService.isEmptyCart;
  }
}
