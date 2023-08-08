import { Category } from 'src/app/shared/enums/category.enum';
// Так меньше кода
export class ProductModel {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public category: Category,
    public isAvailable: boolean
  ) {
  }
}
