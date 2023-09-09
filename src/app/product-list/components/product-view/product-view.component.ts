import { Component, Input, OnInit } from '@angular/core';
import { take, tap } from 'rxjs';
import { Router } from '@angular/router';

import { ProductModel } from 'src/app/shared';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/cart-list';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  @Input() productID!: string;
  product!: ProductModel;

  constructor(
    private productsService: ProductService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.product = new ProductModel();

    this.productsService.getProductById(+this.productID).pipe(
      tap((productModel: ProductModel | undefined) => {
        this.product = productModel ?? {};
      }),
      take(1)
    ).subscribe();
  }

  onAddToCart() {
    this.cartService.addProduct(this.product);
    this.onGoBack();
  }

  onGoBack(): void {
    this.router.navigate(['/products']);
  }
}
