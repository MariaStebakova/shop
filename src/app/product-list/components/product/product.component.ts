import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

import { ProductModel } from "src/app/shared";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

  @Input() product!: ProductModel;
  @Output() viewProduct: EventEmitter<ProductModel> = new EventEmitter();

  onViewMore() {
    this.viewProduct.emit(this.product);
  }
}
