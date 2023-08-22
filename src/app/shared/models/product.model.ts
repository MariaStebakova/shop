import { Category } from "src/app/shared/enums/category.enum";

export class ProductModel {
    constructor(
        public id: number,
        public name: string, 
        public description: string, 
        public price: number, 
        public category: Category, 
        public isAvailable: boolean) {
    }
}