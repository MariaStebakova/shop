import { Component, Input } from "@angular/core";

import { ProductModel } from "../../../shared/models/product.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent {

  @Input() product!: ProductModel;

  onAddToCart() {
    console.log(`Product ${this.product.name} is added to cart.`);
  }
}
