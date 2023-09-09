import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";

import { Category, ProductModel } from "src/app/shared";

@Injectable({
  providedIn: "root"
})
export class ProductService {

  private products$$!: BehaviorSubject<ProductModel[]>;

  constructor() { 
    this.products$$ = new BehaviorSubject<ProductModel[]>(this.createProducts());
  }

  getProducts(): Observable<ProductModel[]> {
    return this.products$$.asObservable();
  }

  getProductById(id: number): Observable<ProductModel | undefined> {
    return this.getProducts().pipe(
      map((products: ProductModel[]) => {
        return products.find(p => p.id === id)
      })
    );
  }

  private createProducts(): ProductModel[] {
    return [
      new ProductModel(1, "Belt", "A belt for cats", 10, Category.Animals, true),
      new ProductModel(2, "T-shirt", "Women t-shirt", 30, Category.Clothes, true),
      new ProductModel(3, "Sandals", "Kids summer sandals", 35, Category.Clothes, false),
      new ProductModel(4, "Lamp", "A bedroom warm-light lamp", 50, Category.Home, true),
      new ProductModel(5, "Mascara", "L'oreal black mascara", 15, Category.Beauty, true)
    ]
  }
}
