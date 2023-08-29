import { Component, OnInit } from "@angular/core";

import { ProductModel } from "../../../shared/models/product.model";
import { ProductService } from "../../services/product.service";
import { CartService } from "src/app/cart-list/services/cart.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {

  products: ProductModel[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onAddToCart(product: ProductModel): void {
    this.cartService.addProduct(product);
  }
}
