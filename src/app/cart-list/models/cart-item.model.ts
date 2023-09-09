import { ProductModel } from "src/app/shared";

export class CartItemModel {
    constructor(
        public product: ProductModel,
        public quantity: number
    ) { }
}