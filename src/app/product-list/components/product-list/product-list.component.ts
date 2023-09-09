import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

import { ProductModel } from "src/app/shared";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {

  products$!: Observable<ProductModel[]>;

  constructor(
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  onViewProduct(product: ProductModel): void {
    this.router.navigate(['/product', product.id])
  }
}
