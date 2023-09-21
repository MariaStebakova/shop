import { ProductModel } from "src/app/shared";

export class CartItemModel {
    constructor(
        public id: number,
        public product: ProductModel,
        public quantity: number
    ) { }
}