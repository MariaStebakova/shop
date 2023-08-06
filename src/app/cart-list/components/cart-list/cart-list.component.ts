import { Component, OnInit } from "@angular/core";

import { ProductModel } from "src/app/shared/models/product.model";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-cart-list",
  templateUrl: "./cart-list.component.html",
  styleUrls: ["./cart-list.component.css"]
})
export class CartListComponent implements OnInit {

  cartProducts!: ProductModel[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartProducts();
  }

  trackByProducts(index: number, product: ProductModel): string {
    return product.name;
  }

  onEmptyCart(): void {
    this.cartService.emptyCart();
    this.cartProducts = this.cartService.getCartProducts();
  }
}
