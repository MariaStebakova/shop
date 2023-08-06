import { Injectable } from "@angular/core";

import { Category } from "src/app/shared/enums/category.enum";
import { ProductModel } from "src/app/shared/models/product.model";

@Injectable({
  providedIn: "root"
})
export class CartService {

  private cartProducts: ProductModel[];

  constructor() {
    this.cartProducts = [
      new ProductModel("Belt", "A belt for cats", 10, Category.Animals, true),
      new ProductModel("T-shirt", "Women t-shirt", 30, Category.Clothes, true),
    ]
  }

  getCartProducts(): ProductModel[] {
    return this.cartProducts;
  }

  emptyCart(): void {
    this.cartProducts = [];
  }
}
