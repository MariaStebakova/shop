import { Category } from "src/app/shared/enums/category.enum";

export class ProductModel {
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;

    constructor(name: string, description: string, price: number, category: Category, isAvailable: boolean) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.isAvailable = isAvailable;
    }
}