import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

import { ProductModel } from "../../../shared/models/product.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

  @Input() product!: ProductModel;
  @Output() addToCart: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
