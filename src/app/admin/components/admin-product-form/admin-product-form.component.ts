import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsPromiseService } from 'src/app/product-list';
import { Category, ProductModel } from 'src/app/shared';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {

  @Input() productID!: string;
  
  product!: ProductModel;
  categories = Object.values(Category);

  constructor(
    private productService: ProductsPromiseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.product = new ProductModel();

    if (this.productID) {
      this.productService.getProduct(+this.productID)
        .then((product: ProductModel | undefined) => {
          this.product = product ?? new ProductModel();
        })
        .catch(err => console.log(err));
    }
  }

  onSaveProduct(): void {
    const product = { ...this.product } as ProductModel;

    const method = product.id ? 'updateProduct' : 'createProduct';
    this.productService[method](this.product)
      .then(() => this.onGoBack())
      .catch(err => console.log(err));
  }

  onGoBack(): void {
    this.router.navigate(['admin/products']);
  }

}
