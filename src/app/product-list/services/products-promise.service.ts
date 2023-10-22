import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ProductModel } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class ProductsPromiseService {

  private productsUrl = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Promise<ProductModel[]> {
    return firstValueFrom(this.httpClient.get(this.productsUrl))
      .then(response => response as ProductModel[])
      .catch(this.handleError);
  }

  getProduct(productId: number): Promise<ProductModel> {
    const url = `${this.productsUrl}/${productId}`;
    return firstValueFrom(this.httpClient.get(url))
      .then(response => response as ProductModel)
      .catch(this.handleError);
  }

  createProduct(product: ProductModel): Promise<ProductModel> {
    return firstValueFrom(this.httpClient.post(this.productsUrl, product))
      .then(response => response as ProductModel)
      .catch(this.handleError);
  }

  updateProduct(product: ProductModel): Promise<ProductModel> {
    const url = `${this.productsUrl}/${product.id}`;
    return firstValueFrom(this.httpClient.put(url, product))
      .then(response => response as ProductModel)
      .catch(this.handleError);
  }

  deleteProduct(productId: number | undefined): Promise<void> {
    const url = `${this.productsUrl}/${productId}`;
    return firstValueFrom(this.httpClient.delete(url))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
}
}
