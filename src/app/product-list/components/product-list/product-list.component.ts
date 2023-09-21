import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ProductModel } from "src/app/shared";
import { ProductsPromiseService } from "../..";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {

  products$!: Promise<ProductModel[]>;

  constructor(
    private productService: ProductsPromiseService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  onViewProduct(product: ProductModel): void {
    this.router.navigate(['/product', product.id])
  }
}
