import { Injectable } from "@angular/core";

import { ProductModel } from "../../shared/models/product.model";
import { Category } from "src/app/shared/enums/category.enum";

@Injectable({
  providedIn: "root"
})
export class ProductService {

  private products: ProductModel[];

  constructor() { 
    this.products = this.createProducts();
  }

  getProducts(): ProductModel[] {
    return this.products;
  }

  private createProducts(): ProductModel[] {
    return [
      new ProductModel("Belt", "A belt for cats", 10, Category.Animals, true),
      new ProductModel("T-shirt", "Women t-shirt", 30, Category.Clothes, true),
      new ProductModel("Sandals", "Kids summer sandals", 35, Category.Clothes, false),
      new ProductModel("Lamp", "A bedroom warm-light lamp", 50, Category.Home, true),
      new ProductModel("Mascara", "L'oreal black mascara", 15, Category.Beauty, true)
    ]
  }
}
