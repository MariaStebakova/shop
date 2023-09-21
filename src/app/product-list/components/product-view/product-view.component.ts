import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel } from 'src/app/shared';
import { CartService } from 'src/app/cart-list';
import { ProductsPromiseService } from '../..';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit, OnDestroy {

  @Input() productID!: string;
  product!: ProductModel;
  private sub!: Subscription;

  constructor(
    private productService: ProductsPromiseService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.product = new ProductModel();

    this.productService.getProduct(+this.productID)
      .then((productModel: ProductModel) => {
        this.product = productModel;
      })
      .catch(err => console.log(err));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  onAddToCart() {
    this.sub = this.cartService.addProduct(this.product).pipe(
      tap(() => this.onGoBack())
    ).subscribe()
  }

  onGoBack(): void {
    this.router.navigate(['/products']);
  }
}
