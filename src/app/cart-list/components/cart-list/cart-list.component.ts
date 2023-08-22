import { Component, OnDestroy, OnInit } from "@angular/core";

import { ProductModel } from "src/app/shared/models/product.model";
import { CartService } from "../../services/cart.service";
import { Subscription, tap } from "rxjs";
import { CartItemModel } from "../../models/cart-item.model";

@Component({
  selector: "app-cart-list",
  templateUrl: "./cart-list.component.html",
  styleUrls: ["./cart-list.component.css"]
})
export class CartListComponent implements OnInit, OnDestroy {

  cartProducts!: CartItemModel[];
  totalCost!: number;
  totalQuantity!: number;
  private cartListChangedSubscription!: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.refreshCartDetails();

    this.cartListChangedSubscription = this.cartService.cartListChanged$.asObservable().pipe(
      tap(() => this.refreshCartDetails())
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.cartListChangedSubscription.unsubscribe();
  }

  trackByProducts(index: number, item: CartItemModel): number {
    return item.product.id;
  }

  onEmptyCart(): void {
    this.cartService.emptyCart();
    this.refreshCartDetails();
  }

  onDeleteItem(item: CartItemModel): void {
    this.cartService.deleteCartItem(item);
    this.refreshCartDetails();
  }

  onQuantityIncrease(item: CartItemModel): void {
    this.cartService.increaseQuantity(item);
    this.refreshCartDetails();
  }

  onQuantityDecrease(item: CartItemModel): void {
    this.cartService.decreaseQuantity(item);
    this.refreshCartDetails();
  }

  private refreshCartDetails(): void {
    this.cartProducts = [...this.cartService.getCartProducts()];
    this.totalCost = this.cartService.totalCost;
    this.totalQuantity = this.cartService.totalQuantity;
  }
}
