import { ProductModel } from "src/app/shared/models/product.model";

export class CartItemModel {
    constructor(
        public product: ProductModel,
        public quantity: number
    ) { }
}