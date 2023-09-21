import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsPromiseService } from 'src/app/product-list';
import { ProductModel } from 'src/app/shared';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products$!: Promise<ProductModel[]>;

  constructor( 
    private productsService: ProductsPromiseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

  onEditProduct(product: ProductModel): void {
    this.router.navigate(['admin/products/edit', product.id]);
  }

  onCreateProduct(): void {
    this.router.navigate(['admin/product/add']);
  }

  onDeleteProduct(product: ProductModel): void {
    if (product.id) {
      this.productsService.deleteProduct(product.id)
        .then(() => this.products$ = this.productsService.getProducts())
        .catch(err => console.log(err))
    }
  }
}
